import { describe, expect, it } from "vitest";
import {
  curatedSeasonRegistry,
  validateCuratedSeasonRegistry
} from "@/data/curated-season-registry";

describe("curated season registry", () => {
  it("keeps the published season order and one owner module per seed", () => {
    expect(curatedSeasonRegistry.map(({ id }) => id)).toEqual([
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
      "2022-spring"
    ]);

    const ownedSeeds = curatedSeasonRegistry.flatMap(({ seeds }) => seeds);
    expect(ownedSeeds).toHaveLength(1282);
    expect(new Set(ownedSeeds.map(({ anilistId }) => anilistId)).size).toBe(ownedSeeds.length);

    for (const entry of curatedSeasonRegistry) {
      for (const seed of entry.seeds) {
        expect(seed.seasonIds[0], `${seed.anilistId} owner`).toBe(entry.id);
      }
    }
  });

  it("connects every season index to a matching reviewed seed", () => {
    const seedById = new Map(
      curatedSeasonRegistry
        .flatMap(({ seeds }) => seeds)
        .map((seed) => [seed.anilistId, seed])
    );

    for (const entry of curatedSeasonRegistry) {
      expect(entry.id).toBe(`${entry.year}-${entry.quarter}`);
      expect(new Set(entry.animeIds).size).toBe(entry.animeIds.length);

      for (const anilistId of entry.animeIds) {
        const seed = seedById.get(anilistId);
        expect(seed, `${entry.id}:${anilistId}`).toBeDefined();
        expect(seed?.seasonIds).toContain(entry.id);
      }
    }
  });

  it("fails closed when a future season module drifts from its identity", () => {
    const valid = curatedSeasonRegistry[0]!;

    expect(() => validateCuratedSeasonRegistry([
      { ...valid, year: 2025 }
    ])).toThrow("Curated season identity mismatch");

    expect(() => validateCuratedSeasonRegistry([
      { ...valid, animeIds: [...valid.animeIds, valid.animeIds[0]!] }
    ])).toThrow("Duplicate season anime ID");

    expect(() => validateCuratedSeasonRegistry([
      { ...valid, animeIds: [999_999_999] }
    ])).toThrow("Missing curated seed");
  });
});
