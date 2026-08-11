import type { PublicAnimeDetail, PublicSeasonSummary, PublicTheme } from "@/types/public-api";

const catalogQueryAliases = new Map<string, string>([
  ["opening", "op"],
  ["片頭", "op"],
  ["片頭曲", "op"],
  ["ending", "ed"],
  ["片尾", "ed"],
  ["片尾曲", "ed"],
  ["主題曲", "theme"]
]);

export function normalizeCatalogSearchText(value: string): string {
  return value.normalize("NFKC").toLocaleLowerCase().replace(/\s+/gu, " ").trim();
}

export function tokenizeCatalogSearchQuery(value: string): string[] {
  const normalized = normalizeCatalogSearchText(value);
  return normalized
    ? [...new Set(normalized.split(" ").map((token) => catalogQueryAliases.get(token) ?? token))]
    : [];
}

export function matchesCatalogSearchTokens(
  searchText: string,
  queryTokens: readonly string[]
): boolean {
  return queryTokens.every((token) => searchText.includes(token));
}

export function buildAnimeSearchText(
  anime: PublicAnimeDetail,
  season: PublicSeasonSummary
): string {
  return normalizeCatalogSearchText([
    anime.titleJa,
    anime.titleZhHant,
    anime.titleRomaji,
    `${season.year} ${season.titleZhHant}`,
    season.titleJa
  ].filter((value): value is string => Boolean(value)).join(" "));
}

export function buildThemeSearchText(theme: PublicTheme): string {
  return normalizeCatalogSearchText([
    theme.type,
    `${theme.type}${theme.sequence}`,
    "theme",
    theme.titleJa,
    theme.titleZhHant,
    theme.titleRomaji,
    theme.artistDisplayName,
    ...theme.credits.map((credit) => credit.name)
  ].filter((value): value is string => Boolean(value)).join(" "));
}
