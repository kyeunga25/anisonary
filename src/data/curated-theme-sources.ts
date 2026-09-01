import { curatedSeasonRegistry } from "@/data/curated-season-registry";
import { curated2023FallThemeSources } from "@/data/curated-theme-sources/2023/fall";
import { curated2023SpringThemeSources } from "@/data/curated-theme-sources/2023/spring";
import { curated2023SummerThemeSources } from "@/data/curated-theme-sources/2023/summer";
import { curated2023WinterThemeSources } from "@/data/curated-theme-sources/2023/winter";
import { curated2024FallThemeSources } from "@/data/curated-theme-sources/2024/fall";
import { curated2024SpringThemeSources } from "@/data/curated-theme-sources/2024/spring";
import { curated2024SummerThemeSources } from "@/data/curated-theme-sources/2024/summer";
import { curated2024WinterThemeSources } from "@/data/curated-theme-sources/2024/winter";
import { curated2025SpringThemeSources } from "@/data/curated-theme-sources/2025/spring";
import { curated2025SummerThemeSources } from "@/data/curated-theme-sources/2025/summer";
import { curated2025WinterThemeSources } from "@/data/curated-theme-sources/2025/winter";
import { curated2026SpringThemeSources } from "@/data/curated-theme-sources/2026/spring";
import { curated2026SummerThemeSources } from "@/data/curated-theme-sources/2026/summer";
import { curated2026WinterThemeSources } from "@/data/curated-theme-sources/2026/winter";
import type {
  CuratedThemeSourceOverrideMap,
  CuratedThemeSourceRegistryEntry
} from "@/data/curated-theme-sources/types";

const themeKeyPattern = /^(\d+):(OP|ED):([1-9]\d*)$/;
const sourceLanguages = new Set(["ja", "zh-Hant", "zh-Hans", "en", "multi"]);
const sourceRoles = new Set(["first_party", "cross_check"]);

export function validateCuratedThemeSourceRegistry<
  const Entries extends readonly CuratedThemeSourceRegistryEntry[]
>(entries: Entries): Entries {
  const ownerByAniListId = new Map(
    curatedSeasonRegistry.flatMap(({ id, seeds }) => (
      seeds.map(({ anilistId }) => [anilistId, id] as const)
    ))
  );
  const registeredSeasons = new Set<string>();
  const registeredThemeKeys = new Set<string>();

  for (const entry of entries) {
    if (registeredSeasons.has(entry.seasonId)) {
      throw new Error(`Duplicate theme source season: ${entry.seasonId}`);
    }
    registeredSeasons.add(entry.seasonId);

    for (const [key, sources] of Object.entries(entry.overrides)) {
      const match = themeKeyPattern.exec(key);
      if (!match) {
        throw new Error(`Invalid theme source key: ${key}`);
      }

      const anilistId = Number(match[1]);
      if (ownerByAniListId.get(anilistId) !== entry.seasonId) {
        throw new Error(`Theme source owner mismatch: ${key}`);
      }
      if (registeredThemeKeys.has(key)) {
        throw new Error(`Duplicate theme source key: ${key}`);
      }
      registeredThemeKeys.add(key);

      if (sources.length === 0) {
        throw new Error(`Theme source list must not be empty: ${key}`);
      }

      for (const source of sources) {
        if ("verifiedAt" in source) {
          throw new Error(`Theme source override must not set verifiedAt: ${key}`);
        }
        if (!source.label.trim()) {
          throw new Error(`Theme source label must not be empty: ${key}`);
        }

        let parsedUrl: URL;
        try {
          parsedUrl = new URL(source.url);
        } catch {
          throw new Error(`Invalid theme source URL: ${key}`);
        }
        if (parsedUrl.protocol !== "https:") {
          throw new Error(`Theme source URL must use HTTPS: ${key}`);
        }
        if (parsedUrl.username || parsedUrl.password) {
          throw new Error(`Theme source URL must not contain credentials: ${key}`);
        }
        if (!sourceLanguages.has(source.language)) {
          throw new Error(`Unsupported theme source language: ${key}`);
        }
        if (!sourceRoles.has(source.role)) {
          throw new Error(`Unsupported theme source role: ${key}`);
        }
      }
    }
  }

  return entries;
}

export const curatedThemeSourceRegistry = validateCuratedThemeSourceRegistry([
  { seasonId: "2026-summer", overrides: curated2026SummerThemeSources },
  { seasonId: "2026-spring", overrides: curated2026SpringThemeSources },
  { seasonId: "2026-winter", overrides: curated2026WinterThemeSources },
  { seasonId: "2025-summer", overrides: curated2025SummerThemeSources },
  { seasonId: "2025-spring", overrides: curated2025SpringThemeSources },
  { seasonId: "2025-winter", overrides: curated2025WinterThemeSources },
  { seasonId: "2024-fall", overrides: curated2024FallThemeSources },
  { seasonId: "2024-summer", overrides: curated2024SummerThemeSources },
  { seasonId: "2024-spring", overrides: curated2024SpringThemeSources },
  { seasonId: "2024-winter", overrides: curated2024WinterThemeSources },
  { seasonId: "2023-fall", overrides: curated2023FallThemeSources },
  { seasonId: "2023-summer", overrides: curated2023SummerThemeSources },
  { seasonId: "2023-spring", overrides: curated2023SpringThemeSources },
  { seasonId: "2023-winter", overrides: curated2023WinterThemeSources }
] as const);

export const curatedThemeSourceOverrides: CuratedThemeSourceOverrideMap = Object.assign(
  {},
  ...curatedThemeSourceRegistry.map(({ overrides }) => overrides)
);

export type {
  CuratedThemeSourceOverrideMap,
  CuratedThemeSourceRegistryEntry,
  CuratedThemeSourceSeed
} from "@/data/curated-theme-sources/types";
