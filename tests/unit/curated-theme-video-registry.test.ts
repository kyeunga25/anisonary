import { describe, expect, it } from "vitest";
import { curatedAnimeDetails } from "@/data/curated-data";
import { curatedAnimeSeeds } from "@/data/curated-seeds";
import {
  curatedThemeVideoOverrides,
  curatedThemeVideoRegistry,
  validateCuratedThemeVideoRegistry,
} from "@/data/curated-theme-videos";
import type { PublicVideo } from "@/types/public-api";

describe("curated theme video registry", () => {
  it("keeps one reviewed video fragment per published season", () => {
    expect(curatedThemeVideoRegistry.map(({ seasonId }) => seasonId)).toEqual([
      "2026-summer",
      "2026-spring",
      "2026-winter",
      "2025-summer",
      "2025-spring",
      "2025-winter",
      "2024-fall",
      "2024-summer",
    ]);
    expect(
      curatedThemeVideoRegistry.map(
        ({ overrides }) => Object.keys(overrides).length,
      ),
    ).toEqual([4, 10, 44, 178, 79, 48, 128, 154]);

    const entries = curatedThemeVideoRegistry.flatMap(({ overrides }) =>
      Object.entries(overrides),
    );
    expect(entries).toHaveLength(645);
    expect(new Set(entries.map(([key]) => key)).size).toBe(entries.length);
    expect(entries.flatMap(([, videos]) => videos)).toHaveLength(826);
    expect(Object.keys(curatedThemeVideoOverrides)).toHaveLength(
      entries.length,
    );
  });

  it("maps every video override to its owner and a reviewed theme identity", () => {
    const ownerByAniListId = new Map(
      curatedAnimeSeeds.map((seed) => [seed.anilistId, seed.seasonIds[0]]),
    );
    const reviewedThemeKeys = new Set(
      curatedAnimeSeeds.flatMap((seed) =>
        seed.themes.map(
          (theme) => `${seed.anilistId}:${theme.type}:${theme.sequence}`,
        ),
      ),
    );
    const detailById = new Map(
      curatedAnimeDetails.map((detail) => [detail.id, detail]),
    );
    for (const seed of curatedAnimeSeeds) {
      for (const theme of detailById.get(seed.id)?.themes ?? []) {
        reviewedThemeKeys.add(
          `${seed.anilistId}:${theme.type}:${theme.sequence}`,
        );
      }
    }

    for (const entry of curatedThemeVideoRegistry) {
      for (const [key, videos] of Object.entries(entry.overrides)) {
        const anilistId = Number(key.split(":", 1)[0]);
        expect(ownerByAniListId.get(anilistId), key).toBe(entry.seasonId);
        expect(reviewedThemeKeys.has(key), key).toBe(true);
        expect(
          new Set(videos.map((video: PublicVideo) => video.youtubeVideoId))
            .size,
          key,
        ).toBe(videos.length);
      }
    }
  });

  it("fails closed on owner, video ID, and unknown-field drift", () => {
    const valid = curatedThemeVideoRegistry[0]!;
    const [key, videos] = Object.entries(valid.overrides)[0]!;
    const video = videos[0]!;

    expect(() =>
      validateCuratedThemeVideoRegistry([
        { ...valid, seasonId: "2025-summer" },
      ]),
    ).toThrow("Theme video owner mismatch");

    expect(() =>
      validateCuratedThemeVideoRegistry([
        {
          ...valid,
          overrides: { [key]: [{ ...video, youtubeVideoId: "too-short" }] },
        },
      ]),
    ).toThrow("Invalid YouTube video ID");

    expect(() =>
      validateCuratedThemeVideoRegistry([
        {
          ...valid,
          overrides: {
            [key]: [{ ...video, unexpectedField: "rejected" }],
          },
        } as unknown as typeof valid,
      ]),
    ).toThrow("Unknown theme video field");
  });
});
