import { curated2025SpringSeeds } from "@/data/curated-seeds/2025/spring";
import { curated2025SummerSeeds } from "@/data/curated-seeds/2025/summer";
import { curated2026SpringSeeds } from "@/data/curated-seeds/2026/spring";
import { curated2026SummerSeeds } from "@/data/curated-seeds/2026/summer";
import { curated2026WinterSeeds } from "@/data/curated-seeds/2026/winter";
import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

export type {
  CuratedAnimeSeed,
  CuratedSeasonId,
  CuratedSeasonRegistryEntry,
  CuratedThemeSeed
} from "@/data/curated-seeds/types";
export { curatedSeasonAnimeIds } from "@/data/curated-season-registry";

// Preserve the established public detail/search order while each module owns one
// quarter's unique seed records. Cross-season membership lives in seasonIds and
// the registry indexes, so one anime is never duplicated across source files.
export const curatedAnimeSeeds: CuratedAnimeSeed[] = [
  ...curated2026SpringSeeds,
  ...curated2026SummerSeeds,
  ...curated2026WinterSeeds,
  ...curated2025SummerSeeds,
  ...curated2025SpringSeeds
];
