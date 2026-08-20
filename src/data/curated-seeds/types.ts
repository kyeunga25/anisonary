import type { PublicAnimeDetail, Quarter } from "@/types/public-api";

export type CuratedSeasonId = `${number}-${Quarter}`;

export interface CuratedThemeSeed {
  type: "OP" | "ED";
  sequence: number;
  titleJa: string;
  titleRomaji?: string;
  artistDisplayName: string;
  youtubeUrl?: string;
}

export interface CuratedAnimeSeed {
  anilistId: number;
  id: string;
  slug: string;
  seasonIds: CuratedSeasonId[];
  verifiedAt?: string;
  startDate: string;
  titleJa: string;
  titleZhHant: string;
  titleRomaji: string;
  posterUrl: string;
  bannerUrl?: string;
  editorialWeekday: number;
  broadcastTimeJst?: string;
  broadcastLabel?: string;
  status: PublicAnimeDetail["status"];
  officialSiteUrl?: string;
  anilistUrl: string;
  imageSourceUrl: string;
  imageSourceLabel: string;
  wikipediaUrl: string;
  sourceReferenceUrls: string[];
  animeThemesUrl?: string;
  uzureaUrl?: string;
  themes: CuratedThemeSeed[];
}

export interface CuratedSeasonRegistryEntry {
  readonly id: CuratedSeasonId;
  readonly year: number;
  readonly quarter: Quarter;
  readonly titleZhHant: string;
  readonly titleJa: string;
  readonly seeds: readonly CuratedAnimeSeed[];
  readonly animeIds: readonly number[];
}
