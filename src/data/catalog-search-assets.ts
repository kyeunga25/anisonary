import { createHash } from "node:crypto";
import { MAX_SEARCH_CHUNK_BYTES } from "@/data/catalog-limits";
import { serializeCatalogSearchIndex, type CatalogSearchIndex } from "@/utils/catalog-search-index";
import { serializeSearchIndexManifest, type SearchIndexManifest } from "@/utils/catalog-search-manifest";
import { decodeCatalogSearchChunk, encodeCatalogSearchChunk } from "@/utils/catalog-search-codec";
import { SEARCH_ROUTING_BUCKETS, decodeSearchRoutingBucket, encodeSearchRoutingBucket, forEachCatalogSearchFeature, searchRoutingMembership } from "@/utils/catalog-search-routing";

export function buildCatalogSearchAssets(index: CatalogSearchIndex) {
  // Keep the existing whole-index gate as well as the smaller per-file budget.
  serializeCatalogSearchIndex(index);
  const chunks: Array<{ digest: string; content: string; seasons: string[]; entries: number; decodedBytes: number }> = [];
  const records: CatalogSearchIndex[] = [];
  let entries: CatalogSearchIndex = [];
  let bytes = 2;
  let year: number | undefined;
  const flush = () => {
    if (!entries.length) return;
    const original = serializeCatalogSearchIndex(entries);
    const decodedBytes = Buffer.byteLength(original);
    const content = encodeCatalogSearchChunk(entries);
    if (serializeCatalogSearchIndex(decodeCatalogSearchChunk(content, entries.length, decodedBytes)) !== original) throw new Error("Packed search index did not preserve the original records");
    chunks.push({
      digest: createHash("sha256").update(content).digest("hex"), content,
      seasons: [...new Set(entries.flatMap((anime) => anime.seasons.map((season) => season.id)))].sort(),
      entries: entries.length, decodedBytes
    });
    records.push(entries);
    entries = [];
    bytes = 2;
  };
  for (const anime of index) {
    const entryBytes = Buffer.byteLength(serializeCatalogSearchIndex([anime])) - 2;
    if (entryBytes + 2 > MAX_SEARCH_CHUNK_BYTES) throw new Error("Search entry exceeds the chunk byte limit");
    const nextYear = Math.max(...anime.seasons.map((season) => season.year));
    // Preserve provider order, including ties in playlist sorting. Year boundaries
    // keep an update to a recent quarter from shifting every older chunk.
    if (entries.length && (nextYear !== year || bytes + entryBytes + 1 > MAX_SEARCH_CHUNK_BYTES)) flush();
    bytes += entryBytes + (entries.length ? 1 : 0);
    entries.push(anime);
    year = nextYear;
  }
  flush();
  const features = new Map<number, Uint8Array>();
  records.forEach((records, chunk) => {
    for (const anime of records) {
      for (const text of [anime.searchText, ...anime.themes.flatMap((theme) => [theme.searchText, theme.titleSearchText, theme.creatorSearchText])]) {
        forEachCatalogSearchFeature(text, (feature) => {
          let memberships = features.get(feature);
          if (!memberships) { memberships = new Uint8Array(Math.ceil(chunks.length / 8)); features.set(feature, memberships); }
          memberships[chunk >>> 3]! |= 1 << (chunk & 7);
        });
      }
    }
  });
  const buckets = Array.from({ length: SEARCH_ROUTING_BUCKETS }, () => new Map<number, Uint8Array>());
  for (const [feature, memberships] of features) buckets[feature % SEARCH_ROUTING_BUCKETS]!.set(feature, memberships);
  const routes = buckets.flatMap((features, bucket) => {
    if (!features.size) return [];
    const content = encodeSearchRoutingBucket(bucket, chunks.length, features);
    const digest = createHash("sha256").update(content).digest("hex");
    const descriptor = { bucket, url: `/search-index/${digest}.json`, bytes: Buffer.byteLength(content), records: features.size };
    const restored = decodeSearchRoutingBucket(content, descriptor, chunks.length);
    for (const [feature, memberships] of features) {
      if (!Buffer.from(searchRoutingMembership(restored, feature)).equals(memberships)) throw new Error("Search routing did not preserve chunk memberships");
    }
    return [{ ...descriptor, digest, content }];
  });
  const manifest: SearchIndexManifest = {
    version: 3, bytes: chunks.reduce((sum, chunk) => sum + Buffer.byteLength(chunk.content), 0),
    decodedBytes: chunks.reduce((sum, chunk) => sum + chunk.decodedBytes, 0), entries: index.length,
    chunks: chunks.map((chunk) => ({ url: `/search-index/${chunk.digest}.json`, bytes: Buffer.byteLength(chunk.content), decodedBytes: chunk.decodedBytes, entries: chunk.entries, seasons: chunk.seasons })),
    routing: { version: 1, bytes: routes.reduce((sum, route) => sum + route.bytes, 0), buckets: routes.map(({ bucket, url, bytes, records }) => ({ bucket, url, bytes, records })) }
  };
  serializeSearchIndexManifest(manifest);
  return { manifest, chunks, routes };
}
