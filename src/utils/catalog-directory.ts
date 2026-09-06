import type { PublicSeasonDetail } from "@/types/public-api";
import { compareSeasonsNewestFirst } from "@/utils/season";

export function groupCatalogYears(seasons: readonly PublicSeasonDetail[]) {
  const years = new Map<number, PublicSeasonDetail[]>();
  for (const season of [...seasons].sort(compareSeasonsNewestFirst)) {
    years.set(season.year, [...(years.get(season.year) ?? []), season]);
  }
  return [...years].map(([year, quarters]) => ({
    year,
    seasons: quarters,
    animeCount: new Set(quarters.flatMap((season) => season.anime.map((anime) => anime.slug))).size
  }));
}
