import { mockAnimeDetails, mockSeasonDetails, mockSeasons } from "@/data/mock-data";
import type { PublicDataProvider } from "@/data/provider";
import type { PublicAnimeDetail, PublicSeasonDetail, PublicSeasonSummary } from "@/types/public-api";

export class MockProvider implements PublicDataProvider {
  async getSeasons(): Promise<PublicSeasonSummary[]> {
    return structuredClone(mockSeasons);
  }

  async getSeason(seasonId: string): Promise<PublicSeasonDetail | null> {
    const season = mockSeasonDetails.find((item) => item.id === seasonId);
    return season ? structuredClone(season) : null;
  }

  async getAnime(slug: string): Promise<PublicAnimeDetail | null> {
    const anime = mockAnimeDetails.find((item) => item.slug === slug);
    return anime ? structuredClone(anime) : null;
  }
}
