import type { PublishedCuratedSeasonId } from "@/data/curated-season-registry";
import type { PublicVideo } from "@/types/public-api";

export type CuratedThemeVideoOverrideMap = Readonly<
  Record<string, PublicVideo[]>
>;

export interface CuratedThemeVideoRegistryEntry {
  readonly seasonId: PublishedCuratedSeasonId;
  readonly overrides: CuratedThemeVideoOverrideMap;
}
