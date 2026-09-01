import {
  curated2020FallAnimeIds,
  curated2020FallSeeds
} from "@/data/curated-seeds/2020/fall";
import {
  curated2021FallAnimeIds,
  curated2021FallSeeds
} from "@/data/curated-seeds/2021/fall";
import {
  curated2021SummerAnimeIds,
  curated2021SummerSeeds
} from "@/data/curated-seeds/2021/summer";
import {
  curated2021SpringAnimeIds,
  curated2021SpringSeeds
} from "@/data/curated-seeds/2021/spring";
import {
  curated2021WinterAnimeIds,
  curated2021WinterSeeds
} from "@/data/curated-seeds/2021/winter";
import {
  curated2022SummerAnimeIds,
  curated2022SummerSeeds
} from "@/data/curated-seeds/2022/summer";
import {
  curated2022SpringAnimeIds,
  curated2022SpringSeeds
} from "@/data/curated-seeds/2022/spring";
import {
  curated2022WinterAnimeIds,
  curated2022WinterSeeds
} from "@/data/curated-seeds/2022/winter";
import {
  curated2022FallAnimeIds,
  curated2022FallSeeds
} from "@/data/curated-seeds/2022/fall";
import {
  curated2023FallAnimeIds,
  curated2023FallSeeds
} from "@/data/curated-seeds/2023/fall";
import {
  curated2023SpringAnimeIds,
  curated2023SpringSeeds
} from "@/data/curated-seeds/2023/spring";
import {
  curated2023SummerAnimeIds,
  curated2023SummerSeeds
} from "@/data/curated-seeds/2023/summer";
import {
  curated2023WinterAnimeIds,
  curated2023WinterSeeds
} from "@/data/curated-seeds/2023/winter";
import {
  curated2024SpringAnimeIds,
  curated2024SpringSeeds
} from "@/data/curated-seeds/2024/spring";
import {
  curated2024WinterAnimeIds,
  curated2024WinterSeeds
} from "@/data/curated-seeds/2024/winter";
import {
  curated2024SummerAnimeIds,
  curated2024SummerSeeds
} from "@/data/curated-seeds/2024/summer";
import {
  curated2024FallAnimeIds,
  curated2024FallSeeds
} from "@/data/curated-seeds/2024/fall";
import {
  curated2025SpringAnimeIds,
  curated2025SpringSeeds
} from "@/data/curated-seeds/2025/spring";
import {
  curated2025SummerAnimeIds,
  curated2025SummerSeeds
} from "@/data/curated-seeds/2025/summer";
import {
  curated2025WinterAnimeIds,
  curated2025WinterSeeds
} from "@/data/curated-seeds/2025/winter";
import {
  curated2026SpringAnimeIds,
  curated2026SpringSeeds
} from "@/data/curated-seeds/2026/spring";
import {
  curated2026SummerAnimeIds,
  curated2026SummerSeeds
} from "@/data/curated-seeds/2026/summer";
import {
  curated2026WinterAnimeIds,
  curated2026WinterSeeds
} from "@/data/curated-seeds/2026/winter";
import type {
  CuratedAnimeSeed,
  CuratedSeasonRegistryEntry
} from "@/data/curated-seeds/types";

export function validateCuratedSeasonRegistry<
  const Entries extends readonly CuratedSeasonRegistryEntry[]
>(entries: Entries): Entries {
  const entryById = new Map<string, CuratedSeasonRegistryEntry>();
  const seedByAniListId = new Map<number, CuratedAnimeSeed>();

  for (const entry of entries) {
    if (entry.id !== `${entry.year}-${entry.quarter}`) {
      throw new Error(`Curated season identity mismatch: ${entry.id}`);
    }
    if (entryById.has(entry.id)) {
      throw new Error(`Duplicate curated season: ${entry.id}`);
    }
    entryById.set(entry.id, entry);

    const animeIds = new Set<number>();
    for (const anilistId of entry.animeIds) {
      if (animeIds.has(anilistId)) {
        throw new Error(`Duplicate season anime ID: ${entry.id}:${anilistId}`);
      }
      animeIds.add(anilistId);
    }

    for (const seed of entry.seeds) {
      if (seed.seasonIds[0] !== entry.id) {
        throw new Error(`Curated seed owner mismatch: ${seed.anilistId}`);
      }
      if (seedByAniListId.has(seed.anilistId)) {
        throw new Error(`Duplicate curated seed: ${seed.anilistId}`);
      }
      seedByAniListId.set(seed.anilistId, seed);
    }
  }

  for (const entry of entries) {
    for (const anilistId of entry.animeIds) {
      const seed = seedByAniListId.get(anilistId);
      if (!seed) {
        throw new Error(`Missing curated seed: ${entry.id}:${anilistId}`);
      }
      if (!seed.seasonIds.includes(entry.id)) {
        throw new Error(`Season membership mismatch: ${entry.id}:${anilistId}`);
      }
    }
  }

  for (const seed of seedByAniListId.values()) {
    for (const seasonId of seed.seasonIds) {
      const entry = entryById.get(seasonId);
      if (!entry) {
        throw new Error(`Unregistered curated season: ${seasonId}`);
      }
      if (!entry.animeIds.includes(seed.anilistId)) {
        throw new Error(`Missing season index entry: ${seasonId}:${seed.anilistId}`);
      }
    }
  }

  return entries;
}

export const curatedSeasonRegistry = validateCuratedSeasonRegistry([
  {
    id: "2026-summer",
    year: 2026,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2026年夏アニメ",
    seeds: curated2026SummerSeeds,
    animeIds: curated2026SummerAnimeIds
  },
  {
    id: "2026-spring",
    year: 2026,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2026年春アニメ",
    seeds: curated2026SpringSeeds,
    animeIds: curated2026SpringAnimeIds
  },
  {
    id: "2026-winter",
    year: 2026,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2026年冬アニメ",
    seeds: curated2026WinterSeeds,
    animeIds: curated2026WinterAnimeIds
  },
  {
    id: "2025-summer",
    year: 2025,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2025年夏アニメ",
    seeds: curated2025SummerSeeds,
    animeIds: curated2025SummerAnimeIds
  },
  {
    id: "2025-spring",
    year: 2025,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2025年春アニメ",
    seeds: curated2025SpringSeeds,
    animeIds: curated2025SpringAnimeIds
  },
  {
    id: "2025-winter",
    year: 2025,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2025年冬アニメ",
    seeds: curated2025WinterSeeds,
    animeIds: curated2025WinterAnimeIds
  },
  {
    id: "2024-fall",
    year: 2024,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2024年秋アニメ",
    seeds: curated2024FallSeeds,
    animeIds: curated2024FallAnimeIds
  },
  {
    id: "2024-summer",
    year: 2024,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2024年夏アニメ",
    seeds: curated2024SummerSeeds,
    animeIds: curated2024SummerAnimeIds
  },
  {
    id: "2024-spring",
    year: 2024,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2024年春アニメ",
    seeds: curated2024SpringSeeds,
    animeIds: curated2024SpringAnimeIds
  },
  {
    id: "2024-winter",
    year: 2024,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2024年冬アニメ",
    seeds: curated2024WinterSeeds,
    animeIds: curated2024WinterAnimeIds
  },
  {
    id: "2023-fall",
    year: 2023,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2023年秋アニメ",
    seeds: curated2023FallSeeds,
    animeIds: curated2023FallAnimeIds
  },
  {
    id: "2023-summer",
    year: 2023,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2023年夏アニメ",
    seeds: curated2023SummerSeeds,
    animeIds: curated2023SummerAnimeIds
  },
  {
    id: "2023-spring",
    year: 2023,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2023年春アニメ",
    seeds: curated2023SpringSeeds,
    animeIds: curated2023SpringAnimeIds
  },
  {
    id: "2023-winter",
    year: 2023,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2023年冬アニメ",
    seeds: curated2023WinterSeeds,
    animeIds: curated2023WinterAnimeIds
  },
  {
    id: "2022-fall",
    year: 2022,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2022年秋アニメ",
    seeds: curated2022FallSeeds,
    animeIds: curated2022FallAnimeIds
  },
  {
    id: "2022-summer",
    year: 2022,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2022年夏アニメ",
    seeds: curated2022SummerSeeds,
    animeIds: curated2022SummerAnimeIds
  },
  {
    id: "2022-spring",
    year: 2022,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2022年春アニメ",
    seeds: curated2022SpringSeeds,
    animeIds: curated2022SpringAnimeIds
  },
  {
    id: "2022-winter",
    year: 2022,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2022年冬アニメ",
    seeds: curated2022WinterSeeds,
    animeIds: curated2022WinterAnimeIds
  },
  {
    id: "2021-fall",
    year: 2021,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2021年秋アニメ",
    seeds: curated2021FallSeeds,
    animeIds: curated2021FallAnimeIds
  },
  {
    id: "2021-summer",
    year: 2021,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2021年夏アニメ",
    seeds: curated2021SummerSeeds,
    animeIds: curated2021SummerAnimeIds
  },
  {
    id: "2021-spring",
    year: 2021,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2021年春アニメ",
    seeds: curated2021SpringSeeds,
    animeIds: curated2021SpringAnimeIds
  },
  {
    id: "2021-winter",
    year: 2021,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2021年冬アニメ",
    seeds: curated2021WinterSeeds,
    animeIds: curated2021WinterAnimeIds
  },
  {
    id: "2020-fall",
    year: 2020,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2020年秋アニメ",
    seeds: curated2020FallSeeds,
    animeIds: curated2020FallAnimeIds
  }
] as const);

export type PublishedCuratedSeasonId = (typeof curatedSeasonRegistry)[number]["id"];

export const curatedSeasonAnimeIds = Object.fromEntries(
  curatedSeasonRegistry.map(({ id, animeIds }) => [id, animeIds])
) as unknown as Readonly<Record<PublishedCuratedSeasonId, readonly number[]>>;
