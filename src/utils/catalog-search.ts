import type { PublicAnimeDetail, PublicSeasonSummary, PublicTheme } from "@/types/public-api";

export function normalizeCatalogSearchText(value: string): string {
  return value.normalize("NFKC").toLocaleLowerCase().replace(/\s+/gu, " ").trim();
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
    theme.titleJa,
    theme.titleZhHant,
    theme.titleRomaji,
    theme.artistDisplayName,
    ...theme.credits.map((credit) => credit.name)
  ].filter((value): value is string => Boolean(value)).join(" "));
}
