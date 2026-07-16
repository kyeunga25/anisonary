import { ApiProvider } from "@/data/api-provider";
import { MockProvider } from "@/data/mock-provider";
import type { PublicAnimeDetail, PublicSeasonDetail, PublicSeasonSummary } from "@/types/public-api";

export interface PublicDataProvider {
  getSeasons(): Promise<PublicSeasonSummary[]>;
  getSeason(seasonId: string): Promise<PublicSeasonDetail | null>;
  getAnime(slug: string): Promise<PublicAnimeDetail | null>;
}

export function getDataProvider(): PublicDataProvider {
  const apiBaseUrl = import.meta.env.PUBLIC_API_BASE_URL?.trim();
  return apiBaseUrl ? new ApiProvider(apiBaseUrl) : new MockProvider();
}
