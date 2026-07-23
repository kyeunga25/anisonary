import { ApiProvider } from "@/data/api-provider";
import { CuratedProvider } from "@/data/curated-provider";
import type { PublicAnimeDetail, PublicSeasonDetail, PublicSeasonSummary } from "@/types/public-api";

export interface PublicDataProvider {
  getSeasons(): Promise<PublicSeasonSummary[]>;
  getSeason(seasonId: string): Promise<PublicSeasonDetail | null>;
  getAnime(slug: string): Promise<PublicAnimeDetail | null>;
}

export function getDataProvider(): PublicDataProvider {
  const apiBaseUrl = import.meta.env.PUBLIC_API_BASE_URL?.trim();
  if (apiBaseUrl) return new ApiProvider(apiBaseUrl);
  if (shouldRequireApiData()) {
    throw new Error("PUBLIC_API_BASE_URL is required when production API data is enforced");
  }
  return new CuratedProvider();
}

export function shouldRequireApiData(): boolean {
  return import.meta.env.ANISONARY_REQUIRE_API_DATA === "true";
}
