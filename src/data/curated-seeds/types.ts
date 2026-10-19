import type { PublicAnimeDetail, PublicTheme, PublicThemeFollowUp, Quarter } from "@/types/public-api";
import type { CuratedThemeSourceSeed } from "@/data/curated-theme-sources/types";

export type CuratedSeasonId = `${number}-${Quarter}`;

export interface CuratedThemeSeed extends Partial<Pick<PublicTheme, "seasonIds" | "idAliases" | "credits" | "usageLabel" | "versionLabel" | "releaseDate" | "lastVerifiedAt" | "songId" | "recordings" | "releases" | "evidence" | "links">> {
  // Preserve public identity when correcting a previously misclassified use.
  id?: string;
  type: PublicTheme["type"];
  sequence: number;
  titleJa: string;
  titleRomaji?: string;
  artistDisplayName: string;
  youtubeUrl?: string;
  sources?: CuratedThemeSourceSeed[];
  sourceMode?: "explicit";
  followUp?: PublicThemeFollowUp[];
}

export interface CuratedAnimeSeed {
  anilistId: number;
  anilistUrl: string;
  catalogKey?: never;
  id: string;
  slug: string;
  seasonIds: CuratedSeasonId[];
  verifiedAt?: string;
  metadataVerifiedAt?: string;
  metadataSources?: PublicAnimeDetail["sources"];
  themeAvailability?: PublicAnimeDetail["themeAvailability"];
  startDate: string;
  titleJa: string;
  titleZhHant?: string;
  titleRomaji?: string;
  posterUrl?: string;
  bannerUrl?: string;
  editorialWeekday: number;
  broadcastTimeJst?: string;
  broadcastLabel?: string;
  status: PublicAnimeDetail["status"];
  officialSiteUrl?: string;
  bangumiUrl?: string;
  imageSourceUrl?: string;
  imageSourceLabel?: string;
  identifierSource?: Pick<PublicAnimeDetail["sources"][number], "label" | "url" | "language">;
  wikipediaUrl?: string;
  sourceReferenceUrls: string[];
  animeThemesUrl?: string;
  uzureaUrl?: string;
  themes: CuratedThemeSeed[];
}

export type CuratedCatalogAnimeSeed = CuratedAnimeSeed | (
  Omit<CuratedAnimeSeed, "anilistId" | "anilistUrl" | "catalogKey" | "identifierSource"> & {
    anilistId?: never;
    anilistUrl?: never;
    catalogKey: number;
    identifierSource: NonNullable<CuratedAnimeSeed["identifierSource"]>;
  }
);

// Negative local keys are separate from provider IDs and never enter public JSON.
export function curatedAnimeKey(seed: CuratedCatalogAnimeSeed): number {
  if (seed.anilistId !== undefined) {
    if (!Number.isSafeInteger(seed.anilistId) || seed.anilistId <= 0 || seed.catalogKey !== undefined) {
      throw new Error(`Invalid curated AniList identity: ${seed.id}`);
    }
    return seed.anilistId;
  }
  if (!Number.isSafeInteger(seed.catalogKey) || seed.catalogKey >= 0 || !seed.identifierSource) {
    throw new Error(`Missing curated provider identity: ${seed.id}`);
  }
  return seed.catalogKey;
}

export interface CuratedSeasonRegistryEntry {
  readonly id: CuratedSeasonId;
  readonly year: number;
  readonly quarter: Quarter;
  readonly titleZhHant: string;
  readonly titleJa: string;
  readonly coverageNote?: string;
  readonly seeds: readonly CuratedCatalogAnimeSeed[];
  readonly animeIds: readonly number[];
}
