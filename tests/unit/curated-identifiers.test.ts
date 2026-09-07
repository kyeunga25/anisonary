import { describe, expect, it, vi } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { buildCuratedAnimeDetail } from "@/data/curated-data";
import { getCuratedAnimeKey, getCuratedThemeKey } from "@/data/curated-seeds/identity";
import { validateCuratedSeasonRegistry } from "@/data/curated-season-registry";
import { curatedAnimeSeeds } from "@/data/curated-seeds";
import { validateCuratedThemeSourceRegistry } from "@/data/curated-theme-sources";
import { curatedThemeVideoRegistry, validateCuratedThemeVideoRegistry } from "@/data/curated-theme-videos";
import { buildCatalogSearchIndex, searchCatalog, serializeCatalogSearchIndex } from "@/utils/catalog-search-index";
import type { NativeCuratedAnimeSeed, CuratedSeasonRegistryEntry } from "@/data/curated-seeds/types";

// Fictional records are confined to this test and never enter the public registry.
function nativeSeed(): NativeCuratedAnimeSeed {
  return {
    id: "catalog-identifier-fixture", slug: "identifier-fixture", titleJa: "識別測試作品",
    seasonIds: ["2026-summer"], startDate: "2026-07-06", editorialWeekday: 1,
    verifiedAt: "2026-09-07", status: "finished", officialSiteUrl: "https://example.com/work/",
    identifierSource: { label: "Test-only official identity evidence", url: "https://example.com/work/identity/", language: "en" },
    sourceReferenceUrls: [], themes: []
  };
}

function season(seed: NativeCuratedAnimeSeed): CuratedSeasonRegistryEntry {
  return { id: "2026-summer", year: 2026, quarter: "summer", titleJa: "Test season", titleZhHant: "測試季度", seeds: [seed], animeIds: [seed.id] };
}

describe("independent reviewed catalogue identifiers", () => {
  it("connects two independent records and cross-season membership without inventing external IDs", () => {
    const first = nativeSeed();
    const second = { ...nativeSeed(), id: "catalog-second-fixture" as const, slug: "second-fixture" };
    first.seasonIds.push("2026-spring");
    const owner = { ...season(first), seeds: [first, second], animeIds: [first.id, second.id] };
    const continuation = { ...owner, id: "2026-spring" as const, quarter: "spring" as const, seeds: [], animeIds: [first.id] };
    expect(validateCuratedSeasonRegistry([owner, continuation])).toEqual([owner, continuation]);
  });

  it("rejects invalid or oversized independent identities before they become public paths", () => {
    for (const id of [undefined, "curated-123", "catalog-", "catalog-../fixture", "catalog-two:OP:1", "catalog-two--parts", `catalog-${"a".repeat(153)}`]) {
      const seed = { ...nativeSeed(), id } as NativeCuratedAnimeSeed;
      expect(() => validateCuratedSeasonRegistry([season(seed)])).toThrow("Invalid independent catalogue ID");
    }
  });

  it("rejects invented or mixed external links on an independent identity", () => {
    const linked = { ...nativeSeed(), anilistId: 123, anilistUrl: "https://anilist.co/anime/123" } as unknown as NativeCuratedAnimeSeed;
    const unpaired = { ...nativeSeed(), anilistUrl: "https://anilist.co/anime/123" } as unknown as NativeCuratedAnimeSeed;
    for (const seed of [linked, unpaired]) {
      expect(() => validateCuratedSeasonRegistry([season(seed)])).toThrow("Independent catalogue ID must not claim an AniList identity");
    }
  });

  it("rejects duplicate independent IDs even when slugs differ", () => {
    const first = nativeSeed();
    const duplicate = { ...first, slug: "another-fixture" };
    expect(() => validateCuratedSeasonRegistry([{ ...season(first), seeds: [first, duplicate] }])).toThrow("Duplicate curated seed");
  });

  it("requires labelled identity evidence with a known source language", () => {
    const valid = nativeSeed();
    for (const evidence of [undefined, { ...valid.identifierSource, label: " " }, { ...valid.identifierSource, language: "unknown" }]) {
      const seed = { ...valid, identifierSource: evidence } as NativeCuratedAnimeSeed;
      expect(() => validateCuratedSeasonRegistry([season(seed)])).toThrow("requires source evidence");
    }
  });

  it("rejects relative, insecure and credential-bearing identity evidence", () => {
    for (const url of ["/identity/", "http://example.com/identity/", "https://test:fixture@example.com/identity/"]) {
      const valid = nativeSeed();
      const seed = { ...valid, identifierSource: { ...valid.identifierSource, url } };
      expect(() => validateCuratedSeasonRegistry([season(seed)])).toThrow("Invalid independent identity source URL");
    }
  });

  it("requires an actual review date and rejects impossible calendar dates", () => {
    for (const verifiedAt of [undefined, "", "2026-2-01", "2026-02-29", "2026-04-31", "2026-09-07T00:00:00Z"]) {
      const seed = { ...nativeSeed(), verifiedAt } as NativeCuratedAnimeSeed;
      expect(() => validateCuratedSeasonRegistry([season(seed)])).toThrow("requires a valid review date");
    }
    const leapDay = { ...nativeSeed(), verifiedAt: "2024-02-29" };
    expect(() => validateCuratedSeasonRegistry([season(leapDay)])).not.toThrow();
  });

  it("keeps independent and existing external identities in separate namespaces", () => {
    const legacy = curatedAnimeSeeds[0]!;
    const seed = { ...nativeSeed(), id: `catalog-${getCuratedAnimeKey(legacy)}` as const };
    const theme = { type: "ED" as const, sequence: 2 };
    expect(typeof getCuratedAnimeKey(legacy)).toBe("number");
    expect(getCuratedAnimeKey(seed)).toBe(seed.id);
    expect(getCuratedThemeKey(legacy, theme)).toBe(`${legacy.anilistId}:ED:2`);
    expect(getCuratedThemeKey(seed, theme)).toBe(`${seed.id}:ED:2`);
    const ownedLegacy = { ...legacy, seasonIds: ["2026-summer" as const] };
    expect(() => validateCuratedSeasonRegistry([{
      ...season(seed), seeds: [seed, ownedLegacy], animeIds: [seed.id, getCuratedAnimeKey(legacy)]
    }])).not.toThrow();
  });

  it("binds independent theme sources and videos to their owning quarter", () => {
    const seed = nativeSeed();
    const seasons = [season(seed)];
    const key = getCuratedThemeKey(seed, { type: "OP", sequence: 1 });
    const source = { label: "Test-only song evidence", url: "https://example.com/song/", language: "en" as const, role: "first_party" as const };
    const video = Object.values(curatedThemeVideoRegistry[0]!.overrides)[0]![0]!;
    const sourceEntry = { seasonId: "2026-summer" as const, overrides: { [key]: [source] } };
    const videoEntry = { seasonId: "2026-summer" as const, overrides: { [key]: [video] } };
    expect(() => validateCuratedThemeSourceRegistry([sourceEntry], seasons)).not.toThrow();
    expect(() => validateCuratedThemeVideoRegistry([videoEntry], seasons)).not.toThrow();
    expect(() => validateCuratedThemeSourceRegistry([{ ...sourceEntry, seasonId: "2026-spring" }], seasons)).toThrow("Theme source owner mismatch");
    expect(() => validateCuratedThemeVideoRegistry([{ ...videoEntry, seasonId: "2026-spring" }], seasons)).toThrow("Theme video owner mismatch");
    expect(() => validateCuratedThemeSourceRegistry([{ ...sourceEntry, overrides: { "catalog-missing:OP:1": [source] } }], seasons)).toThrow("Theme source owner mismatch");
    expect(() => validateCuratedThemeVideoRegistry([{ ...videoEntry, overrides: { "catalog-missing:OP:1": [video] } }], seasons)).toThrow("Theme video owner mismatch");
    for (const invalid of [`${seed.id}:OP:0`, `${seed.id}:INSERT:1`, `${seed.id}:ED:01`]) {
      expect(() => validateCuratedThemeSourceRegistry([{ ...sourceEntry, overrides: { [invalid]: [source] } }], seasons)).toThrow("Invalid theme source key");
      expect(() => validateCuratedThemeVideoRegistry([{ ...videoEntry, overrides: { [invalid]: [video] } }], seasons)).toThrow("Invalid theme video key");
    }
  });

  it("round-trips an independently identified work through API v1 without inventing aliases or external links", async () => {
    const seed = nativeSeed();
    const detail = buildCuratedAnimeDetail(seed);
    expect(detail.id).toBe(seed.id);
    expect(detail.slug).toBe(seed.slug);
    for (const omitted of ["anilistUrl", "anilistId", "titleZhHant", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual({ ...seed.identifierSource, role: "identifier", verifiedAt: seed.verifiedAt });
    expect(detail.themes).toEqual([]);
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), {
      headers: { "Content-Type": "application/json" }
    }));
    const provider = new ApiProvider("https://example.com/api/v1", { fetch: fetchMock });
    await expect(provider.getAnime(seed.slug)).resolves.toEqual(detail);
  });

  it("searches the verified original title without exposing missing aliases as text", () => {
    const seed = nativeSeed();
    const detail = buildCuratedAnimeDetail(seed);
    const { id, year, quarter, titleJa, titleZhHant } = season(seed);
    const membership = { id, year, quarter, titleJa, titleZhHant };
    const index = buildCatalogSearchIndex([{ anime: detail, season: membership, seasons: [membership], isMockData: true }]);
    const result = searchCatalog(index, { query: seed.titleJa, scope: "anime", year: "2026", quarter: "summer", type: "all" });
    expect(result.map(({ anime }) => anime.slug)).toEqual([seed.slug]);
    const serialized = serializeCatalogSearchIndex(index);
    expect(serialized).not.toMatch(/undefined|anilist/);
    const [publicEntry] = JSON.parse(serialized) as Record<string, unknown>[];
    expect(publicEntry).not.toHaveProperty("titleRomaji");
    expect(publicEntry).not.toHaveProperty("titleZhHant");
  });

  it("keeps unexpected authoring fields out of the public identity source", () => {
    const valid = nativeSeed();
    const seed = { ...valid, identifierSource: { ...valid.identifierSource, unexpectedField: "test-only" } };
    const detail = buildCuratedAnimeDetail(seed);
    expect(detail.sources.find(({ role }) => role === "identifier")).toEqual({
      ...valid.identifierSource, role: "identifier", verifiedAt: valid.verifiedAt
    });
    expect(JSON.stringify(detail)).not.toContain("unexpectedField");
  });
});
