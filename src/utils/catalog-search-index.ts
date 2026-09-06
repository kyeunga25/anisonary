import type { CatalogSearchData } from "@/data/page-data";
import { MAX_CATALOG_ANIME, MAX_SEARCH_INDEX_BYTES } from "@/data/catalog-limits";
import { buildAnimeSearchText, buildThemeSearchText, matchesCatalogSearchTokens, normalizeCatalogSearchText, tokenizeCatalogSearchQuery } from "@/utils/catalog-search";
import { creditRoleLabel } from "@/utils/theme";

export function buildCatalogSearchIndex(entries: CatalogSearchData["entries"]) {
  if (entries.length > MAX_CATALOG_ANIME) throw new Error("Catalogue search entry limit exceeded");
  return entries.map(({ anime, season, seasons }) => ({
    slug: anime.slug,
    titleJa: anime.titleJa,
    titleZhHant: anime.titleZhHant,
    titleRomaji: anime.titleRomaji,
    availability: anime.themeAvailability,
    season,
    seasons,
    searchText: normalizeCatalogSearchText(seasons.map((membership) => buildAnimeSearchText(anime, membership)).join(" ")),
    themes: anime.themes.map((theme) => ({
      id: theme.id,
      type: theme.type,
      sequence: theme.sequence,
      titleJa: theme.titleJa,
      artistDisplayName: theme.artistDisplayName,
      credits: theme.credits.filter((credit) => credit.role !== "vocals").map((credit) => `${creditRoleLabel(credit.role)}：${credit.name}`).join(" · "),
      searchText: buildThemeSearchText(theme),
      titleSearchText: normalizeCatalogSearchText([theme.titleJa, theme.titleZhHant, theme.titleRomaji].filter(Boolean).join(" ")),
      creatorSearchText: normalizeCatalogSearchText([theme.artistDisplayName, ...theme.credits.map((credit) => `${credit.name} ${creditRoleLabel(credit.role)}`)].join(" "))
    }))
  }));
}

export type CatalogSearchIndex = ReturnType<typeof buildCatalogSearchIndex>;
export type CatalogSearchOptions = {
  query: string;
  scope: "all" | "anime" | "songs" | "creators";
  year: string;
  quarter: string;
  type: "all" | "OP" | "ED";
};
export const SEARCH_PAGE_SIZE = 12;

export function serializeCatalogSearchIndex(index: CatalogSearchIndex): string {
  const serialized = JSON.stringify(index).replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/&/g, "\\u0026");
  if (new TextEncoder().encode(serialized).byteLength > MAX_SEARCH_INDEX_BYTES) {
    throw new Error("Catalogue search index byte limit exceeded");
  }
  return serialized;
}

export function searchCatalog(index: CatalogSearchIndex, options: CatalogSearchOptions) {
  const tokens = tokenizeCatalogSearchQuery(options.query);
  return index.flatMap((anime) => {
    const membership = anime.seasons.find((season) =>
      (!options.year || String(season.year) === options.year) && (!options.quarter || season.quarter === options.quarter)
    );
    if (!membership) return [];
    const animeMatches = matchesCatalogSearchTokens(anime.searchText, tokens);
    const themes = anime.themes.filter((theme) => {
      if (options.type !== "all" && theme.type !== options.type) return false;
      if (options.scope === "anime") return animeMatches;
      if (options.scope === "songs") return matchesCatalogSearchTokens(theme.titleSearchText, tokens);
      if (options.scope === "creators") return matchesCatalogSearchTokens(theme.creatorSearchText, tokens);
      return animeMatches || matchesCatalogSearchTokens(`${anime.searchText} ${theme.searchText}`, tokens);
    });
    const includeEmpty = options.type === "all" && (options.scope === "all" || options.scope === "anime") && animeMatches;
    return themes.length || includeEmpty ? [{ anime, themes, season: options.year || options.quarter ? membership : anime.season }] : [];
  });
}
