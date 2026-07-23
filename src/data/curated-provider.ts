import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";
import type { PublicDataProvider } from "@/data/provider";
import type { PublicAnimeDetail, PublicSeasonDetail, PublicSeasonSummary } from "@/types/public-api";

export class CuratedProvider implements PublicDataProvider {
  async getSeasons(): Promise<PublicSeasonSummary[]> {
    return structuredClone(curatedSeasons);
  }

  async getSeason(seasonId: string): Promise<PublicSeasonDetail | null> {
    const season = curatedSeasonDetails.find((item) => item.id === seasonId);
    return season ? structuredClone(season) : null;
  }

  async getAnime(slug: string): Promise<PublicAnimeDetail | null> {
    const anime = curatedAnimeDetails.find((item) => item.slug === slug);
    return anime ? structuredClone(anime) : null;
  }
}
