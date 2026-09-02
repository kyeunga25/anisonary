import { describe, expect, it } from "vitest";
import { curatedAnimeDetails } from "@/data/curated-data";
import { curatedAnimeSeeds } from "@/data/curated-seeds";
import {
  curatedThemeSourceOverrides,
  curatedThemeSourceRegistry,
  validateCuratedThemeSourceRegistry
} from "@/data/curated-theme-sources";

describe("curated theme source registry", () => {
  it("keeps one reviewed source fragment per published season", () => {
    expect(curatedThemeSourceRegistry.map(({ seasonId }) => seasonId)).toEqual([
      "2026-summer",
      "2026-spring",
      "2026-winter",
      "2025-summer",
      "2025-spring",
      "2025-winter",
      "2024-fall",
      "2024-summer",
      "2024-spring",
      "2024-winter",
      "2023-fall",
      "2023-summer",
      "2023-spring",
      "2023-winter",
      "2022-fall",
      "2022-summer",
      "2022-spring",
      "2022-winter",
      "2021-fall",
      "2021-summer",
      "2021-spring",
      "2021-winter",
      "2020-fall",
      "2020-summer",
      "2020-spring",
      "2020-winter"
    ]);
    expect(curatedThemeSourceRegistry.map(({ overrides }) => Object.keys(overrides).length)).toEqual([
      2,
      6,
      44,
      179,
      1,
      4,
      1,
      4,
      0,
      0,
      10,
      19,
      17,
      19,
      46,
      47,
      63,
      66,
      145,
      104,
      131,
      166,
      180,
      61,
      208,
      180
    ]);

    const keys = curatedThemeSourceRegistry.flatMap(({ overrides }) => Object.keys(overrides));
    expect(keys).toHaveLength(1703);
    expect(new Set(keys).size).toBe(keys.length);
    expect(Object.keys(curatedThemeSourceOverrides)).toHaveLength(keys.length);
  });

  it("maps every source override to the owning season and a reviewed theme identity", () => {
    const ownerByAniListId = new Map(
      curatedAnimeSeeds.map((seed) => [seed.anilistId, seed.seasonIds[0]])
    );
    const reviewedThemeKeys = new Set(
      curatedAnimeSeeds.flatMap((seed) => seed.themes.map(
        (theme) => `${seed.anilistId}:${theme.type}:${theme.sequence}`
      ))
    );
    const detailById = new Map(curatedAnimeDetails.map((detail) => [detail.id, detail]));
    for (const seed of curatedAnimeSeeds) {
      for (const theme of detailById.get(seed.id)?.themes ?? []) {
        reviewedThemeKeys.add(`${seed.anilistId}:${theme.type}:${theme.sequence}`);
      }
    }

    for (const entry of curatedThemeSourceRegistry) {
      for (const key of Object.keys(entry.overrides)) {
        const anilistId = Number(key.split(":", 1)[0]);
        expect(ownerByAniListId.get(anilistId), key).toBe(entry.seasonId);
        expect(reviewedThemeKeys.has(key), key).toBe(true);
      }
    }
  });

  it("fails closed on owner, transport, and private-field drift", () => {
    const valid = curatedThemeSourceRegistry[0]!;
    const [key, sources] = Object.entries(valid.overrides)[0]!;
    const source = sources[0]!;

    expect(() => validateCuratedThemeSourceRegistry([
      { ...valid, seasonId: "2025-summer" }
    ])).toThrow("Theme source owner mismatch");

    expect(() => validateCuratedThemeSourceRegistry([{
      ...valid,
      overrides: { [key]: [{ ...source, url: "http://example.com/source" }] }
    }])).toThrow("Theme source URL must use HTTPS");

    expect(() => validateCuratedThemeSourceRegistry([{
      ...valid,
      overrides: {
        [key]: [{ ...source, verifiedAt: "2026-08-21" }]
      }
    } as unknown as typeof valid])).toThrow("Theme source override must not set verifiedAt");
  });
});
