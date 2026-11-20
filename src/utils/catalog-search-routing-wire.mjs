export const SEARCH_ROUTING_BUCKETS = 64;

const invalid = () => new Error("Invalid search routing bucket");
const maxQuotient = Math.floor(0xffffffff / SEARCH_ROUTING_BUCKETS);
const byteKey = (/** @type {Uint8Array} */ bytes) => String.fromCharCode(...bytes);

/**
 * Both published wire versions expand to sorted uint32 feature keys and chunk bitmaps.
 * @param {unknown} payload
 * @param {{ bucket: number, chunks: number, records: number }} descriptor
 * @param {number} maxBytes
 */
export function decodeRoutingData(payload, { bucket, chunks, records }, maxBytes) {
  const value = /** @type {{ version?: number, chunks?: number, bucket?: number, data?: string } | null} */ (payload);
  const width = Math.ceil(chunks / 8);
  const stride = 4 + width;
  if (!Number.isSafeInteger(chunks) || chunks < 1 || chunks > 10_000
    || !Number.isSafeInteger(records) || records < 1 || records * stride > maxBytes
    || !Number.isInteger(bucket) || bucket < 0 || bucket >= SEARCH_ROUTING_BUCKETS
    || !value || typeof value !== "object" || Object.keys(value).length !== 4
    || (value.version !== 1 && value.version !== 2) || value.chunks !== chunks || value.bucket !== bucket
    || typeof value.data !== "string" || value.data.length > maxBytes
    || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value.data)) throw invalid();

  const binary = atob(value.data);
  if (btoa(binary) !== value.data) throw invalid();
  const packed = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  const validMembership = (/** @type {Uint8Array} */ bits) =>
    bits.some(Boolean) && (!(chunks % 8) || !(bits[width - 1] >>> (chunks % 8)));
  if (value.version === 1) {
    if (packed.length !== records * stride) throw invalid();
    const view = new DataView(packed.buffer);
    let previous = -1;
    for (let offset = 0; offset < packed.length; offset += stride) {
      const feature = view.getUint32(offset, true);
      if (feature <= previous || feature % SEARCH_ROUTING_BUCKETS !== bucket
        || !validMembership(packed.subarray(offset + 4, offset + stride))) throw invalid();
      previous = feature;
    }
    return packed;
  }

  let offset = 0;
  const readUint = () => {
    let result = 0;
    for (let shift = 0; shift < 28; shift += 7) {
      if (offset >= packed.length) throw invalid();
      const byte = packed[offset++];
      result += (byte & 0x7f) * (2 ** shift);
      if (byte < 0x80) {
        if (shift && byte === 0) throw invalid();
        return result;
      }
    }
    throw invalid();
  };

  const bitmapCount = readUint();
  const dictionaryEnd = offset + bitmapCount * width;
  if (bitmapCount < 1 || bitmapCount > records || dictionaryEnd + records * 2 > packed.length) throw invalid();
  const dictionaryStart = offset;
  const bitmaps = new Set();
  for (; offset < dictionaryEnd; offset += width) {
    const bits = packed.subarray(offset, offset + width);
    const key = byteKey(bits);
    if (!validMembership(bits) || bitmaps.has(key)) throw invalid();
    bitmaps.add(key);
  }
  const restored = new Uint8Array(records * stride);
  const view = new DataView(restored.buffer);
  const used = new Set();
  let quotient = -1;
  for (let i = 0; i < records; i += 1) {
    const delta = readUint();
    const bitmap = readUint();
    quotient += delta;
    if (!delta || quotient > maxQuotient || bitmap >= bitmapCount) throw invalid();
    used.add(bitmap);
    view.setUint32(i * stride, quotient * SEARCH_ROUTING_BUCKETS + bucket, true);
    const start = dictionaryStart + bitmap * width;
    restored.set(packed.subarray(start, start + width), i * stride + 4);
  }
  if (offset !== packed.length || used.size !== bitmapCount) throw invalid();
  return restored;
}
