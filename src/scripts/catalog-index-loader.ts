import type { CatalogSearchIndex } from "@/utils/catalog-search-index";
import { parseSearchIndexManifest, searchChunkPathPattern, selectSearchChunks, type SearchIndexChunk } from "@/utils/catalog-search-manifest";
import { decodeCatalogSearchChunk } from "@/utils/catalog-search-codec";
import { SEARCH_ROUTING_BUCKETS, catalogSearchQueryFeatures, decodeSearchRoutingBucket, searchRoutingMembership } from "@/utils/catalog-search-routing";

async function fetchAsset(chunk: { url: string; bytes: number }, fetcher: typeof fetch, cache: RequestCache): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetcher(chunk.url, {
      credentials: "omit", referrerPolicy: "no-referrer", redirect: "error", cache, signal: controller.signal
    });
    if (!response.ok || !response.headers.get("content-type")?.includes("application/json") || !response.body) throw new Error("Search chunk unavailable");
    const reader = response.body.getReader();
    const parts: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      size += part.value.byteLength;
      if (size > chunk.bytes) {
        await reader.cancel();
        throw new Error("Search chunk byte limit exceeded");
      }
      parts.push(part.value);
    }
    if (size !== chunk.bytes) throw new Error("Incomplete search chunk");
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const part of parts) { bytes.set(part, offset); offset += part.byteLength; }
    const hash = [...new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))].map((byte) => byte.toString(16).padStart(2, "0")).join("");
    if (hash !== chunk.url.match(searchChunkPathPattern)?.[1]) throw new Error("Search chunk checksum mismatch");
    // The trusted HTML manifest pins the exact bytes emitted by our builder.
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } finally {
    clearTimeout(timeout);
    controller.abort();
  }
}

export function createCatalogIndexLoader(source: string, fetcher: typeof fetch = fetch) {
  const manifest = parseSearchIndexManifest(source);
  const cache = new Map<string, Promise<CatalogSearchIndex>>();
  const routingCache = new Map<string, Promise<ReturnType<typeof decodeSearchRoutingBucket>>>();
  const buckets = new Map(manifest.routing.buckets.map((bucket) => [bucket.bucket, bucket]));
  const chunkPositions = new Map(manifest.chunks.map((chunk, i) => [chunk.url, i]));
  const failed = new Set<string>();
  const waiting: Array<() => void> = [];
  let active = 0;
  const loadAsset = <T>(chunk: { url: string; bytes: number }, saved: Map<string, Promise<T>>, decode: (source: string) => T): Promise<T> => {
    const existing = saved.get(chunk.url);
    if (existing) return existing;
    const task = (async () => {
      // Reserve slots across overlapping searches, not just within one request.
      await new Promise<void>((ready) => {
        if (active < 4) { active += 1; ready(); }
        else waiting.push(ready);
      });
      try { return decode(await fetchAsset(chunk, fetcher, failed.has(chunk.url) ? "reload" : "default")); }
      finally {
        const next = waiting.shift();
        if (next) next();
        else active -= 1;
      }
    })();
    saved.set(chunk.url, task);
    task.catch(() => { saved.delete(chunk.url); failed.add(chunk.url); });
    return task;
  };
  const loadChunk = (chunk: SearchIndexChunk) => loadAsset(chunk, cache,
    (source) => decodeCatalogSearchChunk(source, chunk.entries, chunk.decodedBytes));
  return {
    async load(year: string, quarter: string, query = ""): Promise<CatalogSearchIndex> {
      let chunks = selectSearchChunks(manifest, year, quarter);
      const features = catalogSearchQueryFeatures(query);
      if (features.length && chunks.length > 1 && chunks.some((chunk) => !cache.has(chunk.url))) {
        const needed = [...new Set(features.map((feature) => feature % SEARCH_ROUTING_BUCKETS))];
        // An absent bucket means no indexed field contains any such feature.
        if (needed.some((bucket) => !buckets.has(bucket))) return [];
        const tables = new Map(await Promise.all(needed.map(async (number) => {
          const bucket = buckets.get(number)!;
          const table = await loadAsset(bucket, routingCache, (source) => decodeSearchRoutingBucket(source, bucket, manifest.chunks.length));
          return [number, table] as const;
        })));
        const memberships = features.map((feature) => searchRoutingMembership(tables.get(feature % SEARCH_ROUTING_BUCKETS)!, feature));
        chunks = chunks.filter((chunk) => {
          const position = chunkPositions.get(chunk.url)!;
          return memberships.every((bits) => bits[position >>> 3]! & (1 << (position & 7)));
        });
      }
      return (await Promise.all(chunks.map(loadChunk))).flat();
    }
  };
}
