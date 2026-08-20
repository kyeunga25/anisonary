import type { PublicThemeSource } from "@/types/public-api";
import type { PublishedCuratedSeasonId } from "@/data/curated-season-registry";

export type CuratedThemeSourceSeed = Omit<PublicThemeSource, "verifiedAt">;

export type CuratedThemeSourceOverrideMap = Readonly<
  Record<string, readonly CuratedThemeSourceSeed[]>
>;

export interface CuratedThemeSourceRegistryEntry {
  readonly seasonId: PublishedCuratedSeasonId;
  readonly overrides: CuratedThemeSourceOverrideMap;
}
