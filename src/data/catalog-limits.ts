// Separate unique works from repeated references in quarterly snapshots.
// Requests remain bounded even when a provider returns overlapping seasons.
export const MAX_CATALOG_ANIME = 10_000;
export const MAX_CATALOG_REFERENCES = 20_000;
export const MAX_SEARCH_INDEX_BYTES = 8 * 1024 * 1024;
export const CATALOG_FETCH_CONCURRENCY = 8;
