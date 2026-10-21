import { MAX_CATALOG_ANIME, MAX_SEARCH_CHUNK_BYTES, MAX_SEARCH_INDEX_BYTES, MAX_SEARCH_MANIFEST_BYTES } from "@/data/catalog-limits";
import { SEARCH_ROUTING_BUCKETS, type SearchRoutingManifest } from "@/utils/catalog-search-routing";

export type SearchIndexChunk = { url: string; bytes: number; decodedBytes: number; entries: number; seasons: string[] };
export type SearchIndexManifest = { version: 3; bytes: number; decodedBytes: number; entries: number; chunks: SearchIndexChunk[]; routing: SearchRoutingManifest };
const seasonPattern = /^\d{4}-(winter|spring|summer|fall)$/;
export const searchChunkPathPattern = /^\/search-index\/([a-f0-9]{64})\.json$/;

export function parseSearchIndexManifest(source: string): SearchIndexManifest {
  if (new TextEncoder().encode(source).byteLength > MAX_SEARCH_MANIFEST_BYTES) throw new Error("Search manifest byte limit exceeded");
  const value = JSON.parse(source) as SearchIndexManifest;
  if (!value || value.version !== 3 || !Array.isArray(value.chunks) || value.chunks.length > MAX_CATALOG_ANIME
    || !Number.isInteger(value.entries) || value.entries < 0 || value.entries > MAX_CATALOG_ANIME
    || !Number.isInteger(value.bytes) || value.bytes < 0 || value.bytes > MAX_SEARCH_INDEX_BYTES
    || !Number.isInteger(value.decodedBytes) || value.decodedBytes < 0 || value.decodedBytes > MAX_SEARCH_INDEX_BYTES) throw new Error("Invalid search manifest");
  const paths = new Set<string>();
  for (const chunk of value.chunks) {
    if (!chunk || typeof chunk.url !== "string" || !searchChunkPathPattern.test(chunk.url) || paths.has(chunk.url)
      || !Number.isInteger(chunk.bytes) || chunk.bytes <= 0 || chunk.bytes > MAX_SEARCH_CHUNK_BYTES
      || !Number.isInteger(chunk.decodedBytes) || chunk.decodedBytes < 2 || chunk.decodedBytes > MAX_SEARCH_CHUNK_BYTES
      || !Number.isInteger(chunk.entries) || chunk.entries <= 0 || chunk.entries > MAX_CATALOG_ANIME
      || !Array.isArray(chunk.seasons) || !chunk.seasons.length
      || chunk.seasons.some((season) => typeof season !== "string" || !seasonPattern.test(season))) throw new Error("Invalid search chunk");
    paths.add(chunk.url);
  }
  if (value.chunks.reduce((sum, chunk) => sum + chunk.bytes, 0) !== value.bytes
    || value.chunks.reduce((sum, chunk) => sum + chunk.decodedBytes, 0) !== value.decodedBytes
    || value.chunks.reduce((sum, chunk) => sum + chunk.entries, 0) !== value.entries) throw new Error("Inconsistent search manifest");
  const routing = value.routing;
  if (!routing || routing.version !== 1 || !Number.isInteger(routing.bytes) || routing.bytes < 0
    || value.bytes + routing.bytes > MAX_SEARCH_INDEX_BYTES
    || !Array.isArray(routing.buckets) || routing.buckets.length > SEARCH_ROUTING_BUCKETS) throw new Error("Invalid search routing manifest");
  const buckets = new Set<number>();
  for (const bucket of routing.buckets) {
    if (!bucket || !Number.isInteger(bucket.bucket) || bucket.bucket < 0 || bucket.bucket >= SEARCH_ROUTING_BUCKETS || buckets.has(bucket.bucket)
      || typeof bucket.url !== "string" || !searchChunkPathPattern.test(bucket.url) || paths.has(bucket.url)
      || !Number.isInteger(bucket.bytes) || bucket.bytes <= 0 || bucket.bytes > MAX_SEARCH_CHUNK_BYTES
      || !Number.isInteger(bucket.records) || bucket.records <= 0 || bucket.records * (4 + Math.ceil(value.chunks.length / 8)) > MAX_SEARCH_CHUNK_BYTES) throw new Error("Invalid search routing bucket");
    buckets.add(bucket.bucket);
    paths.add(bucket.url);
  }
  if (routing.buckets.reduce((sum, bucket) => sum + bucket.bytes, 0) !== routing.bytes) throw new Error("Inconsistent search routing manifest");
  return value;
}

export function selectSearchChunks(manifest: SearchIndexManifest, year: string, quarter: string) {
  return manifest.chunks.filter((chunk) => chunk.seasons.some((season) =>
    (!year || season.startsWith(`${year}-`)) && (!quarter || season.endsWith(`-${quarter}`))
  ));
}

export function serializeSearchIndexManifest(manifest: SearchIndexManifest): string {
  const source = JSON.stringify(manifest).replace(/</g, "\\u003c");
  parseSearchIndexManifest(source);
  return source;
}
