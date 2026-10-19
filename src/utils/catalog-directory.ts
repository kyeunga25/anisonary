import type { PublicSeasonDetail } from "@/types/public-api";
import type { CatalogSearchData } from "@/data/page-data";
import { compareSeasonsNewestFirst } from "@/utils/season";

export function groupCatalogYears(seasons: readonly PublicSeasonDetail[], entries: CatalogSearchData["entries"]) {
  const counts = new Map<string, number>();
  for (const { anime, seasons: memberships } of entries) {
    for (const theme of anime.themes.filter((theme) => theme.type === "OP" || theme.type === "ED")) {
      for (const id of theme.seasonIds ?? memberships.map((season) => season.id)) {
        if (memberships.some((season) => season.id === id)) counts.set(id, (counts.get(id) ?? 0) + 1);
      }
    }
  }
  const years = new Map<number, Array<PublicSeasonDetail & { themeCount: number }>>();
  for (const season of [...seasons].sort(compareSeasonsNewestFirst)) {
    years.set(season.year, [...(years.get(season.year) ?? []), { ...season, themeCount: counts.get(season.id) ?? 0 }]);
  }
  return [...years].map(([year, quarters]) => ({
    year,
    seasons: quarters,
    animeCount: new Set(quarters.flatMap((season) => season.anime.map((anime) => anime.slug))).size
  }));
}
