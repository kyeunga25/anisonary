import { MAX_SEARCH_CHUNK_BYTES } from "@/data/catalog-limits";
import { tokenizeCatalogSearchQuery } from "@/utils/catalog-search";

export const SEARCH_ROUTING_BUCKETS = 64;
const MAX_FEATURE_LENGTH = 4;
const MAX_QUERY_FEATURES = 4;
export type SearchRoutingBucket = { bucket: number; url: string; bytes: number; records: number };
export type SearchRoutingManifest = { version: 1; bytes: number; buckets: SearchRoutingBucket[] };
type SearchRoutingTable = { data: Uint8Array; view: DataView; stride: number; records: number };

// Hash collisions only union memberships. They can fetch an extra chunk but
// cannot remove a real match. Use UTF-16 units, just like String.includes.
export function catalogSearchFeatureHash(text: string): number {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619);
  hash ^= hash >>> 16;
  hash = Math.imul(hash, 0x85ebca6b);
  hash ^= hash >>> 13;
  return (hash ^ (hash >>> 16)) >>> 0;
}

export function forEachCatalogSearchFeature(text: string, visit: (feature: number) => void) {
  for (let length = 1; length <= MAX_FEATURE_LENGTH; length += 1) {
    for (let start = 0; start <= text.length - length; start += 1) {
      const part = text.slice(start, start + length);
      // The existing tokenizer splits on every normalized ASCII space.
      if (!part.includes(" ")) visit(catalogSearchFeatureHash(part));
    }
  }
}

export function catalogSearchQueryFeatures(query: string): number[] {
  const tokens = tokenizeCatalogSearchQuery(query).sort((a, b) => b.length - a.length);
  const features = new Set<number>();
  for (const token of tokens) {
    // These broad type terms are cheaper to evaluate in the original index.
    if (token === "op" || token === "ed" || token === "theme") continue;
    for (const part of [token.slice(0, MAX_FEATURE_LENGTH), token.slice(-MAX_FEATURE_LENGTH)]) {
      features.add(catalogSearchFeatureHash(part));
      if (features.size === MAX_QUERY_FEATURES) return [...features];
    }
  }
  return [...features];
}

export function encodeSearchRoutingBucket(bucket: number, chunkCount: number, features: ReadonlyMap<number, Uint8Array>): string {
  const stride = 4 + Math.ceil(chunkCount / 8);
  const bytes = new Uint8Array(features.size * stride);
  const view = new DataView(bytes.buffer);
  [...features].sort(([a], [b]) => a - b).forEach(([feature, memberships], i) => {
    view.setUint32(i * stride, feature, true);
    bytes.set(memberships, i * stride + 4);
  });
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  const source = JSON.stringify({ version: 1, chunks: chunkCount, bucket, data: btoa(binary) });
  if (new TextEncoder().encode(source).byteLength > MAX_SEARCH_CHUNK_BYTES) throw new Error("Search routing bucket byte limit exceeded");
  return source;
}

export function decodeSearchRoutingBucket(source: string, bucket: SearchRoutingBucket, chunkCount: number): SearchRoutingTable {
  const invalid = () => new Error("Invalid search routing bucket");
  if (new TextEncoder().encode(source).byteLength > MAX_SEARCH_CHUNK_BYTES) throw invalid();
  const value = JSON.parse(source);
  const stride = 4 + Math.ceil(chunkCount / 8);
  if (!value || value.version !== 1 || value.chunks !== chunkCount || value.bucket !== bucket.bucket
    || typeof value.data !== "string" || !/^[A-Za-z0-9+/]*={0,2}$/.test(value.data)
    || value.data.length !== 4 * Math.ceil(bucket.records * stride / 3)) throw invalid();
  const binary = atob(value.data);
  if (binary.length !== bucket.records * stride || btoa(binary) !== value.data) throw invalid();
  const data = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  const view = new DataView(data.buffer);
  let previous = -1;
  for (let i = 0; i < bucket.records; i += 1) {
    const feature = view.getUint32(i * stride, true);
    const memberships = data.subarray(i * stride + 4, (i + 1) * stride);
    if (feature <= previous || feature % SEARCH_ROUTING_BUCKETS !== bucket.bucket || !memberships.some(Boolean)
      || (chunkCount % 8 && memberships.at(-1)! >>> (chunkCount % 8))) throw invalid();
    previous = feature;
  }
  return { data, view, stride, records: bucket.records };
}

export function searchRoutingMembership(table: SearchRoutingTable, feature: number): Uint8Array {
  let low = 0;
  let high = table.records;
  while (low < high) {
    const middle = Math.floor((low + high) / 2);
    const candidate = table.view.getUint32(middle * table.stride, true);
    if (candidate < feature) low = middle + 1;
    else high = middle;
  }
  return low < table.records && table.view.getUint32(low * table.stride, true) === feature
    ? table.data.subarray(low * table.stride + 4, (low + 1) * table.stride)
    : new Uint8Array(table.stride - 4);
}
