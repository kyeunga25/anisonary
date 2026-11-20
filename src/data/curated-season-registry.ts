import { curated2018WinterSeeds } from "@/data/curated-seeds/2018/winter";
import { curated2018FallSeeds } from "@/data/curated-seeds/2018/fall";
import { curated2018SpringAnimeIds, curated2018SpringSeeds } from "@/data/curated-seeds/2018/spring";
import { curated2019WinterSeeds } from "@/data/curated-seeds/2019/winter";
import { curated2019SpringSeeds } from "@/data/curated-seeds/2019/spring";
import { curatedAnimeKey } from "@/data/curated-seeds/types";
import { curated2026FallAnimeIds, curated2026FallSeeds } from "@/data/curated-seeds/2026/fall";
import {
  curated2019FallAnimeIds,
  curated2019FallSeeds
} from "@/data/curated-seeds/2019/fall";
import {
  curated2019SummerAnimeIds,
  curated2019SummerSeeds
} from "@/data/curated-seeds/2019/summer";
import {
  curated2020FallAnimeIds,
  curated2020FallSeeds
} from "@/data/curated-seeds/2020/fall";
import {
  curated2020SpringAnimeIds,
  curated2020SpringSeeds
} from "@/data/curated-seeds/2020/spring";
import {
  curated2020SummerAnimeIds,
  curated2020SummerSeeds
} from "@/data/curated-seeds/2020/summer";
import {
  curated2020WinterAnimeIds,
  curated2020WinterSeeds
} from "@/data/curated-seeds/2020/winter";
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
  curated2025FallAnimeIds,
  curated2025FallSeeds
} from "@/data/curated-seeds/2025/fall";
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
  CuratedCatalogAnimeSeed as CuratedAnimeSeed,
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
      const hasArtwork = Boolean(seed.posterUrl || seed.bannerUrl);
      const hasAttribution = Boolean(seed.imageSourceUrl && seed.imageSourceLabel);
      if (hasArtwork && !hasAttribution) {
        throw new Error(`Missing curated image attribution: ${curatedAnimeKey(seed)}`);
      }
      if (!hasArtwork && (seed.imageSourceUrl || seed.imageSourceLabel)) {
        throw new Error(`Image attribution without curated artwork: ${curatedAnimeKey(seed)}`);
      }
      if (seed.seasonIds[0] !== entry.id) {
        throw new Error(`Curated seed owner mismatch: ${curatedAnimeKey(seed)}`);
      }
      if (seedByAniListId.has(curatedAnimeKey(seed))) {
        throw new Error(`Duplicate curated seed: ${curatedAnimeKey(seed)}`);
      }
      seedByAniListId.set(curatedAnimeKey(seed), seed);
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
      if (!entry.animeIds.includes(curatedAnimeKey(seed))) {
        throw new Error(`Missing season index entry: ${seasonId}:${curatedAnimeKey(seed)}`);
      }
    }
  }

  return entries;
}

export const curatedSeasonRegistry = validateCuratedSeasonRegistry([
  {
    id: "2026-fall",
    year: 2026,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2026年秋アニメ",
    coverageNote: "本季已收錄部分已核對身分與TV資料的標準長度作品，部分作品歌曲用途仍待核對。資料範圍截至2026-10-14；續播與輪替仍待補齊，詳細資訊分階段補充，現有筆數不是全季總數。",
    seeds: curated2026FallSeeds,
    animeIds: [2406, 1960, ...curated2026FallAnimeIds]
  },
  {
    id: "2026-summer",
    year: 2026,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2026年夏アニメ",
    coverageNote: "本季已收錄部分TV新作與續播，保留既有短篇與WEB成果。標準TV作品聯集、續播及輪替仍待盤點，詳細資訊分階段補充；現有筆數不是全季總數。資料範圍截至2026-10-14。",
    seeds: curated2026SummerSeeds,
    animeIds: [2406, 1960, ...curated2026SummerAnimeIds, 126830, 106154]
  },
  {
    id: "2026-spring",
    year: 2026,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2026年春アニメ",
    seeds: curated2026SpringSeeds,
    animeIds: [2406, 1960, ...curated2026SpringAnimeIds]
  },
  {
    id: "2026-winter",
    year: 2026,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2026年冬アニメ",
    seeds: curated2026WinterSeeds,
    animeIds: [2406, 1960, ...curated2026WinterAnimeIds, 185073, 106154]
  },
  {
    id: "2025-fall",
    year: 2025,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2025年秋アニメ",
    coverageNote: "本季正在盤點，先收錄已核對的部分日本 TV 新作與續播作品。其他作品與特殊主題曲仍待核對，現有筆數不是全季歌曲總數。",
    seeds: curated2025FallSeeds,
    animeIds: [2406, 1960, ...curated2025FallAnimeIds.slice(0, 85), 185965, 178025, 177474, 21, 235, -202524301]
  },
  {
    id: "2025-summer",
    year: 2025,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2025年夏アニメ",
    seeds: curated2025SummerSeeds,
    animeIds: [2406, 1960, ...curated2025SummerAnimeIds, 176301, 21, 235]
  },
  {
    id: "2025-spring",
    year: 2025,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2025年春アニメ",
    seeds: curated2025SpringSeeds,
    animeIds: [2406, 1960, ...curated2025SpringAnimeIds, 176642, 139825, 21, 235, 173263]
  },
  {
    id: "2025-winter",
    year: 2025,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2025年冬アニメ",
    seeds: curated2025WinterSeeds,
    animeIds: [2406, 1960, ...curated2025WinterAnimeIds, 158871, 235, 172395]
  },
  {
    id: "2024-fall",
    year: 2024,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2024年秋アニメ",
    seeds: curated2024FallSeeds,
    animeIds: [2406, 1960, ...curated2024FallAnimeIds, 160181, 158871, 21, 235]
  },
  {
    id: "2024-summer",
    year: 2024,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2024年夏アニメ",
    seeds: curated2024SummerSeeds,
    animeIds: [2406, 1960, ...curated2024SummerAnimeIds, 145728, 156822, 170503, 158898, 166910, 166873, 130590, 172187, 151639, 158871, 21, 235, 167927]
  },
  {
    id: "2024-spring",
    year: 2024,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2024年春アニメ",
    seeds: curated2024SpringSeeds,
    animeIds: [2406, 1960, ...curated2024SpringAnimeIds.slice(0, 84), 153518, 139518, 147850, 153818, 155645, 162985, 151639, 164204, 165254, 163024, 158871, 21, 235,-202424102, 20628, 100780]
  },
  {
    id: "2024-winter",
    year: 2024,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2024年冬アニメ",
    seeds: curated2024WinterSeeds,
    animeIds: [2406, 1960, ...curated2024WinterAnimeIds, 146493, 148862, 151970, 154116, 154587, 158791, 161645, 163024, 160514, 162209, 142599, 163256, 158871, 157883, 21, 235, 159926, 20628]
  },
  {
    id: "2023-fall",
    year: 2023,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2023年秋アニメ",
    seeds: curated2023FallSeeds,
    animeIds: [2406, 1960, ...curated2023FallAnimeIds, 145064, 142598, 142877, 163136, 145140, 150970, 152802, 159831, 144932, 163256, 147369, 158871, 157883, 21, 235, 165356]
  },
  {
    id: "2023-summer",
    year: 2023,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2023年夏アニメ",
    seeds: curated2023SummerSeeds,
    animeIds: [2406, 1960, ...curated2023SummerAnimeIds, 154587, 158791, 156184, 143327, 155527, 128893, 144932, 153344, 157295, 163256, 148048, 151801, 143653, 147369, 155158, 128715, 158871, 130588, 145665, 142849, 157883, 21, 235, -2019110901]
  },
  {
    id: "2023-spring",
    year: 2023,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2023年春アニメ",
    seeds: curated2023SpringSeeds,
    animeIds: [2406, 1960, ...curated2023SpringAnimeIds, 163571, 154969, 142853, 144553, 155907, 136430, 136435, 151679, 116867, 139213, 146954, 148969, 155068, 157883, 142343, 21, 235, 117197, 138056, 151513, 146722, -2019110901]
  },
  {
    id: "2023-winter",
    year: 2023,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2023年冬アニメ",
    seeds: curated2023WinterSeeds,
    animeIds: [2406, 1960, ...curated2023WinterAnimeIds, 128890, 139630, 139274, 130298, 142541, 137822, 139092, 142481, 143277, 21294, 138565, 135806, 153412, 21, 235, 140085, 142080, 137309, 130445, 144677, 146722]
  },
  {
    id: "2022-fall",
    year: 2022,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2022年秋アニメ",
    seeds: curated2022FallSeeds,
    animeIds: [2406, 1960, ...curated2022FallAnimeIds, 112640, 135806, 144323, 129196, 140642, 140753, 149326, 153412, 21, 112153, 235, 131912, 132052, 140350, 140085, 142080, 136119, 137309, 130445, 114099]
  },
  {
    id: "2022-summer",
    year: 2022,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2022年夏アニメ",
    seeds: curated2022SummerSeeds,
    animeIds: [2406, 1960, ...curated2022SummerAnimeIds, 137341, 21, 112153, 235, 127911, 129201, 132052, 140350, 123330, 134732, 141350, 133175, 140787, 146865, 137633, 140085, 142080, 123752, 136119, 137309, 130445, 114099, 179870]
  },
  {
    id: "2022-spring",
    year: 2022,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2022年春アニメ",
    seeds: curated2022SpringSeeds,
    animeIds: [2406, 1960, ...curated2022SpringAnimeIds, 21, 112153, 235, 135136, 140502, 142080, 124060, 131681, 136428, 125682, 139648, 140643, 123752, 136119, 137309, 119675, 130445, 114099, -2019110901]
  },
  {
    id: "2022-winter",
    year: 2022,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2022年冬アニメ",
    seeds: curated2022WinterSeeds,
    animeIds: [2406, 1960, ...curated2022WinterAnimeIds, 21, 112153, 235, 105931, 113717, 124195, 134623, 138714, 142329, 127400, 127401, 132473, 131586, 136119, 137309, 131264, 128737, 130777, 119675, 130512, 130445, 130584, 126905, 114099, 114072]
  },
  {
    id: "2021-fall",
    year: 2021,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2021年秋アニメ",
    seeds: curated2021FallSeeds,
    animeIds: [2406, 1960, ...curated2021FallAnimeIds, 21, 112153, 235, 118465, 122052, 122434, 132456, 114979, 128545, 130997, 125909, 131150, 119683, 128737, 130777, 119675, 130512, 130445, 130584, 126835, 127399, 126905, 114099, 114072, 113108, 132126, 130549]
  },
  {
    id: "2021-summer",
    year: 2021,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2021年夏アニメ",
    seeds: curated2021SummerSeeds,
    animeIds: [2406, 1960, ...curated2021SummerAnimeIds, 21, 112153, 235, 117193, 114535, 116338, 119683, 120120, 125038, 128737, 129814, 130777, 119675, 130512, 130445, 130584, 126835, 126664, 103632, 110200, 126905, 114099, 114072, 114811, 113108, 104989]
  },
  {
    id: "2021-spring",
    year: 2021,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2021年春アニメ",
    seeds: curated2021SpringSeeds,
    animeIds: [2406, 1960, ...curated2021SpringAnimeIds, 111310, 21, 112153, 235, 104459, 103632, 114087, 114307, 123785, 124080, 124153, 116752, 126905, 122632, 114099, 114072, 113990, 114811, 113108, 113472, 124845]
  },
  {
    id: "2021-winter",
    year: 2021,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2021年冬アニメ",
    seeds: curated2021WinterSeeds,
    animeIds: [101633, 2406, 1960, ...curated2021WinterAnimeIds, 111310, 21, 112153, 235, 117193, 114446, 122632, 113415, 114099, 118376, 118399, 115069, 120851, 110277, 114072, 113990, 114717, 114811, 118630, 112325, 113472, 112748, 112686, -201723701,

  108598, 116786, 109586,
  116415]
  },
  {
    id: "2020-fall",
    year: 2020,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2020年秋アニメ",
    seeds: curated2020FallSeeds,
    animeIds: [2406, 1960, ...curated2020FallAnimeIds, 97938, 110349, 115656, 111310, 21, 112153, 114236, 110371, 103110, 112302, 114072, 113990, 114717, 114811, 116793, 118630, 112325, 113472, 112748, 235, -201723701, 110788, 116786, 111323, 109586, -2019110901, 116415, -2020070201]
  },
  {
    id: "2020-summer",
    year: 2020,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2020年夏アニメ",
    seeds: curated2020SummerSeeds,
    animeIds: [2406, 1960, ...curated2020SummerAnimeIds, 97938, 110349, 115656, 111310, 21, 112153, 235, 112302, 114072, 114411, 113990, 114717, 114811, 109019, 111762, 116793, 118630, 112325, 112444, 113051, 114043, 114402, 114888, 124341, 108522, 114233, 113472, 104462, 112748, -201723701,
 101239,
110788,
100780, 109616, -2020041201, 116786
, 116415, -2019110901, 104989]
  },
  {
    id: "2020-spring",
    year: 2020,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2020年春アニメ",
    seeds: curated2020SpringSeeds,
    animeIds: [2406, 1960, ...curated2020SpringAnimeIds, 21, 112153, 235, 113472, 98515, 101168, 104462, 107420, 106625, 107651, 112748, 110354, 101239,
104276,

  109616, 111048, -201723701, 110788, 101634, 100780, 20628, 110786, -2020010101, 116415, -2019110901]
  },
  {
    id: "2020-winter",
    year: 2020,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2020年冬アニメ",
    seeds: curated2020WinterSeeds,
    animeIds: [2406, 1960, ...curated2020WinterAnimeIds, 108040, 108625, 101424, 100978, 97938, 21, 112153, 235, 101239,
103275, 107693, 101215, 108358, 108928, 104276,
111082,
101349, 104679,
111144,

  100780, 110788, 104159, 110786, 110810, 103638, 100891, 109616, 108852, 108734, 105749, 105857, 107346, -2019110901]
  },
  {
    id: "2019-fall",
    year: 2019,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2019年秋アニメ",
    seeds: curated2019FallSeeds,
    animeIds: [...curated2019FallAnimeIds, 113242, 108625, 101424, 100978, 97938, 105333, 111144, 105310, 101348, 113472, 108852, 108734, 105749, 105857, -201723701, 235, 21, 8687, 966, 6149, 1960, 2406, 97995, 101281, 108767]
  },
  {
    id: "2019-summer",
    year: 2019,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2019年夏アニメ",
    coverageNote: "本季正在補充，涵蓋已核實的電視播出、網絡連載及劇場先行作品。其餘作品及特殊歌曲版本仍待核對。",
    seeds: curated2019SummerSeeds,
    animeIds: [...curated2019SummerAnimeIds, 97634, 113242, 108625, 101424, 100978, 100780, 108852, 108734, 105749, 105857, -201723701, 235, 21, 8687, 966, 6149, 1960, 2406, 97938, 104077, 102604, 102883, 99749, 105334, 103555, 101922, 97995, 101281, 107447, 104578, 97668, 108039, 103870, 104989, 108767, 109260]
  },
  {
    id: "2019-spring",
    year: 2019,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2019年春アニメ",
    coverageNote: "本季先收錄已核實的跨季原播作品與歌曲，其餘作品及用途待盤點。",
    seeds: curated2019SpringSeeds,
    animeIds: [...curated2019SpringSeeds.map(curatedAnimeKey), 100978, 101424, 108852, 105749, 108734, 113242, 108625, 105857, 97634, -201723701, 235, 21, 8687, 966, 6149, 1960, 2406, 97938, 104077, 102604, 98231, 101228, 102883, 99749, 101347, 99263, 101338, 101336, 100620, 103049, 99624, 100185]
  },
  {
    id: "2019-winter",
    year: 2019,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2019年冬アニメ",
    coverageNote: "本季先收錄已核實的跨季原播作品與歌曲，其餘作品及用途待盤點。",
    seeds: curated2019WinterSeeds,
    animeIds: [...curated2019WinterSeeds.map(curatedAnimeKey), 100978, 101424, 105857, 97634, -201723701, 235, 21, 8687, 966, 6149, 1960, 2406, 97938, 104077, 102604, 98231, 101228, 102883, 99749, 101336, 100620, 100402, 132694, 101903, 100990, 100185, 101280, 101313, 100182]
  },
  {
    id: "2018-fall",
    year: 2018,
    quarter: "fall",
    titleZhHant: "秋季動畫",
    titleJa: "2018年秋アニメ",
    coverageNote: "本季先收錄已核實的跨季原播作品與歌曲，其餘作品及用途待盤點。",
    seeds: curated2018FallSeeds,
    animeIds: [...curated2018FallSeeds.map(curatedAnimeKey), 97634, 100978, 21, 97938, 98231, 100620]
  },
  {
    id: "2018-summer",
    year: 2018,
    quarter: "summer",
    titleZhHant: "夏季動畫",
    titleJa: "2018年夏アニメ",
    coverageNote: "本季先收錄已核對的日本TV作品與歌曲，其餘作品及用途仍待盤點。",
    seeds: [],
    animeIds: [100620, 100790]
  },
  {
    id: "2018-spring",
    year: 2018,
    quarter: "spring",
    titleZhHant: "春季動畫",
    titleJa: "2018年春アニメ",
    coverageNote: "本季先收錄已核對的作品與歌曲，其餘作品與歌曲仍待盤點。",
    seeds: curated2018SpringSeeds,
    animeIds: [...curated2018SpringAnimeIds, 97634, 98231, 100620]
  },
  {
    id: "2018-winter",
    year: 2018,
    quarter: "winter",
    titleZhHant: "冬季動畫",
    titleJa: "2018年冬アニメ",
    coverageNote: "本季先收錄已核對的日本TV作品與歌曲，其餘作品及用途仍待盤點。",
    seeds: curated2018WinterSeeds,
    animeIds: [...curated2018WinterSeeds.map(curatedAnimeKey)]
  }
] as const);

export type PublishedCuratedSeasonId = (typeof curatedSeasonRegistry)[number]["id"];

export const curatedSeasonAnimeIds = Object.fromEntries(
  curatedSeasonRegistry.map(({ id, animeIds }) => [id, animeIds])
) as unknown as Readonly<Record<PublishedCuratedSeasonId, readonly number[]>>;
