// Match the search input's UTF-16 maxlength without shortening credited names.
export const MAX_CATALOG_QUERY_LENGTH = 80;
const HASH_PREFIX = "#creator=";
const MAX_ENCODED_NAME_LENGTH = MAX_CATALOG_QUERY_LENGTH * 9;
// This existing catalogue value describes the rendition, not a person or group.
const NON_CREATOR_LABELS = new Set(["(インストゥルメンタル)"]);

export function buildCreatorSearchHref(name: string): string | undefined {
  if (!name || NON_CREATOR_LABELS.has(name) || name.trim() !== name || name.length > MAX_CATALOG_QUERY_LENGTH || /[\u0000-\u001f\u007f-\u009f\u2028\u2029]/u.test(name)) return undefined;
  try {
    return `/search/${HASH_PREFIX}${encodeURIComponent(name)}`;
  } catch {
    return undefined;
  }
}

export function parseCreatorSearchHash(hash: string): string | undefined {
  if (!hash.startsWith(HASH_PREFIX) || hash.length > HASH_PREFIX.length + MAX_ENCODED_NAME_LENGTH) return undefined;
  const encoded = hash.slice(HASH_PREFIX.length);
  if (encoded.includes("&")) return undefined;
  try {
    const name = decodeURIComponent(encoded);
    return buildCreatorSearchHref(name) ? name : undefined;
  } catch {
    return undefined;
  }
}
