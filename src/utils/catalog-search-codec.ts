import { MAX_CATALOG_ANIME, MAX_CATALOG_REFERENCES, MAX_SEARCH_CHUNK_BYTES } from "@/data/catalog-limits";
import type { PublicSeasonSummary } from "@/types/public-api";
import { serializeCatalogSearchIndex, type CatalogSearchIndex } from "@/utils/catalog-search-index";

// A string stores a suffix of a known prefix; [string] stores a literal override.
type Suffix = string | [string];
type PackedTheme = [Suffix, number, number, string, string, number, string, Suffix, Suffix, Suffix, Array<number | string>?];
type PackedAnime = [string, string, string | null, string | null, string, number | null, number, number[], PackedTheme[], string?];
const types = ["OP", "ED", "IN", "TS"] as const;
const encoder = new TextEncoder();
const byteLength = (value: string) => encoder.encode(value).byteLength;
const suffix = (value: string, prefix: string): Suffix => value.startsWith(prefix) ? value.slice(prefix.length) : [value];
// Only reconstruct locale-independent ASCII transformations. Any other Unicode
// normalization or casing difference stays verbatim in a literal override.
const prefixText = (value: string) => value.replace(/[A-Z]/g, (letter) => letter.toLowerCase()).replace(/[ \t\r\n\f\v]+/g, " ").replace(/^ +| +$/g, "");
const themePrefix = (type: string, sequence: number, title: string) => prefixText(`${type} ${type}${sequence} theme ${title}`);
const animePart = (anime: CatalogSearchIndex[number], season: PublicSeasonSummary) => prefixText([
  anime.titleJa, anime.titleZhHant, anime.titleRomaji, `${season.year} ${season.titleZhHant}`, season.titleJa
].filter(Boolean).join(" "));
const animeSearchText = (anime: CatalogSearchIndex[number]) => prefixText(anime.seasons.map((season) => animePart(anime, season)).join(" "));

export function encodeCatalogSearchChunk(index: CatalogSearchIndex): string {
  const seasons: PublicSeasonSummary[] = [];
  const references = new Map<string, number>();
  const seasonRef = (season: PublicSeasonSummary) => {
    const key = JSON.stringify(season);
    let reference = references.get(key);
    if (reference === undefined) { reference = seasons.length; references.set(key, reference); seasons.push(season); }
    return reference;
  };
  // Register before encoding theme memberships so references never depend on
  // which record happened to use a quarter first.
  for (const anime of index) { seasonRef(anime.season); anime.seasons.forEach(seasonRef); }
  const ids = new Map(seasons.map((season, position) => [season.id, position]));
  const anime = index.map<PackedAnime>((entry) => {
    const themes = entry.themes.map<PackedTheme>((theme) => {
      const row: PackedTheme = [
        suffix(theme.id, `${entry.slug}-`), types.indexOf(theme.type), theme.sequence, theme.titleJa,
        theme.artistDisplayName, Number(theme.hasOfficialVideo), theme.credits,
        suffix(theme.searchText, themePrefix(theme.type, theme.sequence, theme.titleJa)),
        suffix(theme.titleSearchText, prefixText(theme.titleJa)),
        suffix(theme.creatorSearchText, prefixText(theme.artistDisplayName))
      ];
      if (theme.seasonIds) row.push(theme.seasonIds.map((id) => ids.get(id) ?? id));
      return row;
    });
    const row: PackedAnime = [entry.slug, entry.titleJa, entry.titleZhHant ?? null, entry.titleRomaji ?? null,
      entry.availability, entry.editorialWeekday ?? null, seasonRef(entry.season), entry.seasons.map(seasonRef), themes];
    const derived = animeSearchText(entry);
    if (entry.searchText !== derived) row.push(entry.searchText);
    return row;
  });
  const source = JSON.stringify({ version: 2, seasons, anime });
  if (byteLength(source) > MAX_SEARCH_CHUNK_BYTES) throw new Error("Packed search chunk byte limit exceeded");
  return source;
}

export function decodeCatalogSearchChunk(source: string, entries: number, decodedBytes: number): CatalogSearchIndex {
  if (byteLength(source) > MAX_SEARCH_CHUNK_BYTES || !Number.isInteger(decodedBytes) || decodedBytes < 2 || decodedBytes > MAX_SEARCH_CHUNK_BYTES
    || !Number.isInteger(entries) || entries < 0 || entries > MAX_CATALOG_ANIME) throw new Error("Search decoding budget exceeded");
  const value = JSON.parse(source) as { version?: unknown; seasons?: unknown; anime?: unknown };
  const invalid = () => new Error("Invalid packed search chunk");
  const list = (value: unknown): unknown[] => {
    if (!Array.isArray(value) || value.length > MAX_CATALOG_REFERENCES) throw invalid();
    return value;
  };
  const plain = (value: unknown): string => { if (typeof value !== "string") throw invalid(); return value; };
  const tuple = (value: unknown, required: number): unknown[] => {
    const row = list(value);
    if (row.length !== required && row.length !== required + 1) throw invalid();
    return row;
  };
  if (!value || value.version !== 2) throw invalid();
  const seasons = list(value.seasons).map((item) => {
    const season = item as PublicSeasonSummary;
    if (!season || !/^\d{4}-(winter|spring|summer|fall)$/.test(plain(season.id))
      || !Number.isInteger(season.year) || season.id !== `${season.year}-${season.quarter}`) throw invalid();
    plain(season.titleJa); plain(season.titleZhHant);
    return season;
  });
  const seasonBytes = seasons.map((season) => byteLength(JSON.stringify(season)));
  let remaining = decodedBytes;
  let references = 0;
  const consume = (bytes: number) => { remaining -= bytes; if (remaining < 0) throw new Error("Search decoding budget exceeded"); };
  const text = (value: unknown) => { const result = plain(value); consume(byteLength(result)); return result; };
  const joined = (prefix: string, tail: string) => { consume(byteLength(prefix) + byteLength(tail)); return prefix + tail; };
  const expand = (value: unknown, prefix: string) => {
    if (typeof value === "string") return joined(prefix, value);
    if (!Array.isArray(value) || value.length !== 1) throw invalid();
    return text(value[0]);
  };
  const lookupSeason = (value: unknown): PublicSeasonSummary => {
    if (typeof value !== "number" || !Number.isInteger(value) || !seasons[value]) throw invalid();
    return seasons[value]!;
  };
  const seasonAt = (value: unknown): PublicSeasonSummary => {
    const season = lookupSeason(value);
    if (++references > MAX_CATALOG_REFERENCES) throw invalid();
    consume(seasonBytes[value as number]!);
    return season;
  };
  const rows = list(value.anime);
  if (rows.length !== entries) throw invalid();
  const index = rows.map<CatalogSearchIndex[number]>((item) => {
    const row = tuple(item, 9);
    const slug = text(row[0]);
    const titleJa = text(row[1]);
    const titleZhHant = row[2] === null ? undefined : text(row[2]);
    const titleRomaji = row[3] === null ? undefined : text(row[3]);
    const availability = text(row[4]);
    if (!["documented", "not_announced", "pending_verification", "not_used"].includes(availability)) throw invalid();
    const weekday = row[5];
    if (weekday !== null && (typeof weekday !== "number" || !Number.isInteger(weekday) || weekday < 0 || weekday > 7)) throw invalid();
    const anime: CatalogSearchIndex[number] = {
      slug, titleJa, titleZhHant, titleRomaji, availability: availability as CatalogSearchIndex[number]["availability"],
      editorialWeekday: weekday === null ? undefined : weekday as number,
      season: seasonAt(row[6]), seasons: list(row[7]).map(seasonAt), searchText: "", themes: []
    };
    if (row.length === 10) anime.searchText = text(row[9]);
    else {
      const parts: string[] = [];
      let bytes = 0;
      for (const season of anime.seasons) {
        const part = animePart(anime, season);
        bytes += byteLength(part) + (parts.length ? 1 : 0);
        if (bytes > remaining) throw new Error("Search decoding budget exceeded");
        parts.push(part);
      }
      anime.searchText = text(prefixText(parts.join(" ")));
    }
    anime.themes = list(row[8]).map((item) => {
      const row = tuple(item, 10);
      const typeIndex = row[1];
      if (typeof typeIndex !== "number" || !Number.isInteger(typeIndex) || !types[typeIndex]) throw invalid();
      const type = types[typeIndex]!;
      const sequence = row[2];
      if (typeof sequence !== "number" || !Number.isSafeInteger(sequence) || sequence < 1 || ![0, 1].includes(row[5] as number)) throw invalid();
      const titleJa = text(row[3]);
      const artistDisplayName = text(row[4]);
      const id = expand(row[0], `${slug}-`);
      const seasonIds = row.length === 11 ? list(row[10]).map((reference) =>
        typeof reference === "string" ? text(reference) : text(lookupSeason(reference).id)
      ) : undefined;
      const theme: CatalogSearchIndex[number]["themes"][number] = {
        id, ...(seasonIds ? { seasonIds } : {}), type, sequence, titleJa, artistDisplayName, hasOfficialVideo: row[5] === 1,
        credits: text(row[6]), searchText: expand(row[7], themePrefix(type, sequence, titleJa)),
        titleSearchText: expand(row[8], prefixText(titleJa)),
        creatorSearchText: expand(row[9], prefixText(artistDisplayName))
      };
      return theme;
    });
    return anime;
  });
  if (byteLength(serializeCatalogSearchIndex(index)) !== decodedBytes) throw new Error("Decoded search chunk byte mismatch");
  return index;
}
