import { curatedSeasonRegistry } from "@/data/curated-season-registry";
import { curated2022FallThemeVideos } from "@/data/curated-theme-videos/2022/fall";
import { curated2022SummerThemeVideos } from "@/data/curated-theme-videos/2022/summer";
import { curated2023FallThemeVideos } from "@/data/curated-theme-videos/2023/fall";
import { curated2023SpringThemeVideos } from "@/data/curated-theme-videos/2023/spring";
import { curated2023SummerThemeVideos } from "@/data/curated-theme-videos/2023/summer";
import { curated2023WinterThemeVideos } from "@/data/curated-theme-videos/2023/winter";
import { curated2024FallThemeVideos } from "@/data/curated-theme-videos/2024/fall";
import { curated2024SpringThemeVideos } from "@/data/curated-theme-videos/2024/spring";
import { curated2024SummerThemeVideos } from "@/data/curated-theme-videos/2024/summer";
import { curated2024WinterThemeVideos } from "@/data/curated-theme-videos/2024/winter";
import { curated2025SpringThemeVideos } from "@/data/curated-theme-videos/2025/spring";
import { curated2025SummerThemeVideos } from "@/data/curated-theme-videos/2025/summer";
import { curated2025WinterThemeVideos } from "@/data/curated-theme-videos/2025/winter";
import { curated2026SpringThemeVideos } from "@/data/curated-theme-videos/2026/spring";
import { curated2026SummerThemeVideos } from "@/data/curated-theme-videos/2026/summer";
import { curated2026WinterThemeVideos } from "@/data/curated-theme-videos/2026/winter";
import type {
  CuratedThemeVideoOverrideMap,
  CuratedThemeVideoRegistryEntry,
} from "@/data/curated-theme-videos/types";
import type { PublicVideo } from "@/types/public-api";

const themeKeyPattern = /^(\d+):(OP|ED):([1-9]\d*)$/;
const youtubeVideoIdPattern = /^[A-Za-z0-9_-]{11}$/;
const videoFields = new Set([
  "youtubeVideoId",
  "title",
  "type",
  "channelName",
  "officialStatus",
  "embeddable",
]);
const videoTypes = new Set<PublicVideo["type"]>([
  "creditless_op",
  "creditless_ed",
  "tv_size",
  "full_music_video",
  "official_audio",
  "other",
]);
const officialStatuses = new Set<PublicVideo["officialStatus"]>([
  "official",
  "licensed",
]);

export function validateCuratedThemeVideoRegistry<
  const Entries extends readonly CuratedThemeVideoRegistryEntry[],
>(entries: Entries): Entries {
  const ownerByAniListId = new Map(
    curatedSeasonRegistry.flatMap(({ id, seeds }) =>
      seeds.map(({ anilistId }) => [anilistId, id] as const),
    ),
  );
  const registeredSeasons = new Set<string>();
  const registeredThemeKeys = new Set<string>();

  for (const entry of entries) {
    if (registeredSeasons.has(entry.seasonId)) {
      throw new Error(`Duplicate theme video season: ${entry.seasonId}`);
    }
    registeredSeasons.add(entry.seasonId);

    for (const [key, videos] of Object.entries(entry.overrides)) {
      const match = themeKeyPattern.exec(key);
      if (!match) {
        throw new Error(`Invalid theme video key: ${key}`);
      }

      const anilistId = Number(match[1]);
      if (ownerByAniListId.get(anilistId) !== entry.seasonId) {
        throw new Error(`Theme video owner mismatch: ${key}`);
      }
      if (registeredThemeKeys.has(key)) {
        throw new Error(`Duplicate theme video key: ${key}`);
      }
      registeredThemeKeys.add(key);

      if (videos.length === 0) {
        throw new Error(`Theme video list must not be empty: ${key}`);
      }

      const videoIds = new Set<string>();
      for (const video of videos) {
        for (const field of Object.keys(video)) {
          if (!videoFields.has(field)) {
            throw new Error(`Unknown theme video field: ${key}:${field}`);
          }
        }
        if (!youtubeVideoIdPattern.test(video.youtubeVideoId)) {
          throw new Error(`Invalid YouTube video ID: ${key}`);
        }
        if (videoIds.has(video.youtubeVideoId)) {
          throw new Error(
            `Duplicate theme video ID: ${key}:${video.youtubeVideoId}`,
          );
        }
        videoIds.add(video.youtubeVideoId);
        if (!video.title.trim()) {
          throw new Error(`Theme video title must not be empty: ${key}`);
        }
        if (!video.channelName.trim()) {
          throw new Error(`Theme video channel must not be empty: ${key}`);
        }
        if (!videoTypes.has(video.type)) {
          throw new Error(`Unsupported theme video type: ${key}`);
        }
        if (!officialStatuses.has(video.officialStatus)) {
          throw new Error(`Unsupported theme video status: ${key}`);
        }
        if (typeof video.embeddable !== "boolean") {
          throw new Error(`Invalid theme video embeddable flag: ${key}`);
        }
      }
    }
  }

  return entries;
}

export const curatedThemeVideoRegistry = validateCuratedThemeVideoRegistry([
  { seasonId: "2026-summer", overrides: curated2026SummerThemeVideos },
  { seasonId: "2026-spring", overrides: curated2026SpringThemeVideos },
  { seasonId: "2026-winter", overrides: curated2026WinterThemeVideos },
  { seasonId: "2025-summer", overrides: curated2025SummerThemeVideos },
  { seasonId: "2025-spring", overrides: curated2025SpringThemeVideos },
  { seasonId: "2025-winter", overrides: curated2025WinterThemeVideos },
  { seasonId: "2024-fall", overrides: curated2024FallThemeVideos },
  { seasonId: "2024-summer", overrides: curated2024SummerThemeVideos },
  { seasonId: "2024-spring", overrides: curated2024SpringThemeVideos },
  { seasonId: "2024-winter", overrides: curated2024WinterThemeVideos },
  { seasonId: "2023-fall", overrides: curated2023FallThemeVideos },
  { seasonId: "2023-summer", overrides: curated2023SummerThemeVideos },
  { seasonId: "2023-spring", overrides: curated2023SpringThemeVideos },
  { seasonId: "2023-winter", overrides: curated2023WinterThemeVideos },
  { seasonId: "2022-fall", overrides: curated2022FallThemeVideos },
  { seasonId: "2022-summer", overrides: curated2022SummerThemeVideos },
] as const);

export const curatedThemeVideoOverrides: CuratedThemeVideoOverrideMap =
  Object.assign(
    {},
    ...curatedThemeVideoRegistry.map(({ overrides }) => overrides),
  );

export type {
  CuratedThemeVideoOverrideMap,
  CuratedThemeVideoRegistryEntry,
} from "@/data/curated-theme-videos/types";
