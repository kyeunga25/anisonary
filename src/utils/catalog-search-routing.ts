import { MAX_SEARCH_CHUNK_BYTES } from "@/data/catalog-limits";
import { tokenizeCatalogSearchQuery } from "@/utils/catalog-search";

import { decodeRoutingData, SEARCH_ROUTING_BUCKETS } from "@/utils/catalog-search-routing-wire.mjs";

export { SEARCH_ROUTING_BUCKETS };
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
  const width = Math.ceil(chunkCount / 8);
  const stride = 4 + width;
  const entries = [...features].sort(([a], [b]) => a - b);
  if (!entries.length || entries.length * stride > MAX_SEARCH_CHUNK_BYTES) throw new Error("Search routing bucket byte limit exceeded");
  const keys = entries.map(([, bits]) => String.fromCharCode(...bits));
  const counts = new Map<string, number>();
  for (const key of keys) counts.set(key, (counts.get(key) ?? 0) + 1);
  // Low dictionary indices save a byte on frequently repeated memberships.
  const dictionary = [...counts.keys()].sort((a, b) => counts.get(b)! - counts.get(a)!);
  const references = new Map(dictionary.map((key, i) => [key, i]));
  const packed: number[] = [];
  const writeUint = (value: number) => {
    while (value > 0x7f) {
      packed.push((value & 0x7f) | 0x80);
      value >>>= 7;
    }
    packed.push(value);
  };
  writeUint(dictionary.length);
  for (const key of dictionary) {
    for (let i = 0; i < key.length; i += 1) packed.push(key.charCodeAt(i));
  }
  // All keys in a bucket have the same remainder. Store sorted quotient deltas.
  let previous = -1;
  entries.forEach(([feature], i) => {
    const quotient = Math.floor(feature / SEARCH_ROUTING_BUCKETS);
    writeUint(quotient - previous);
    writeUint(references.get(keys[i]!)!);
    previous = quotient;
  });

  let version = 2;
  let bytes: Iterable<number> = packed;
  if (packed.length >= entries.length * stride) {
    version = 1;
    const fixedRows = new Uint8Array(entries.length * stride);
    const view = new DataView(fixedRows.buffer);
    entries.forEach(([feature, memberships], i) => {
      view.setUint32(i * stride, feature, true);
      fixedRows.set(memberships, i * stride + 4);
    });
    bytes = fixedRows;
  }
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  const source = JSON.stringify({ version, chunks: chunkCount, bucket, data: btoa(binary) });
  if (new TextEncoder().encode(source).byteLength > MAX_SEARCH_CHUNK_BYTES) throw new Error("Search routing bucket byte limit exceeded");
  return source;
}

export function decodeSearchRoutingBucket(source: string, bucket: SearchRoutingBucket, chunkCount: number): SearchRoutingTable {
  if (new TextEncoder().encode(source).byteLength > MAX_SEARCH_CHUNK_BYTES) throw new Error("Invalid search routing bucket");
  const data = decodeRoutingData(JSON.parse(source), { bucket: bucket.bucket, chunks: chunkCount, records: bucket.records }, MAX_SEARCH_CHUNK_BYTES);
  const stride = 4 + Math.ceil(chunkCount / 8);
  return { data, view: new DataView(data.buffer), stride, records: bucket.records };
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
