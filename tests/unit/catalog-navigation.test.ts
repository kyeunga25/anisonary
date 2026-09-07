import { describe, expect, it } from "vitest";
import { CuratedProvider } from "@/data/curated-provider";
import { loadCatalogDirectoryData, loadCatalogSearchData } from "@/data/page-data";
import { MAX_CATALOG_ANIME, MAX_CATALOG_REFERENCES, MAX_SEARCH_INDEX_BYTES } from "@/data/catalog-limits";
import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";
import { smokePublicApi } from "@/data/api-smoke";
import type { PublicDataProvider } from "@/data/provider";
import { groupCatalogYears } from "@/utils/catalog-directory";
import { buildCatalogSearchIndex, searchCatalog, serializeCatalogSearchIndex, type CatalogSearchOptions } from "@/utils/catalog-search-index";

const data = await loadCatalogSearchData(new CuratedProvider(), true);
const index = buildCatalogSearchIndex(data.entries);
const defaults: CatalogSearchOptions = { query: "", scope: "all", year: "", quarter: "", type: "all" };

describe("catalogue navigation and search", () => {
  it("groups only published years and quarters, counting cross-season works once per year", () => {
    const years = groupCatalogYears(curatedSeasonDetails);
    expect(years.map((entry) => entry.year)).toEqual([2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019]);
    expect(years.find((entry) => entry.year === 2026)?.animeCount).toBe(205);
    expect(years.find((entry) => entry.year === 2025)?.seasons.map((season) => season.quarter)).toEqual(["summer", "spring", "winter"]);
    expect(years.find((entry) => entry.year === 2019)?.seasons.map((season) => season.quarter)).toEqual(["fall", "summer", "spring"]);
  });

  it("retains both memberships of a cross-season work in year and quarter filters", () => {
    for (const quarter of ["spring", "summer"]) {
      const results = searchCatalog(index, { ...defaults, year: "2026", quarter, query: "ゼロから" });
      expect(results.some(({ anime }) => anime.slug === "re-zero-season-4")).toBe(true);
    }
    expect(searchCatalog(index, { ...defaults, year: "2025", quarter: "fall" })).toEqual([]);
    expect(searchCatalog(index, defaults)).toHaveLength(1934);
  });

  it("combines multilingual queries with exact song, creator, and OP/ED filters", () => {
    const songs = searchCatalog(index, { ...defaults, query: "ＫＩＣＫ BACK", scope: "songs", type: "OP" });
    expect(songs).toHaveLength(1);
    expect(songs[0]?.anime.slug).toBe("chainsaw-man");
    expect(songs[0]?.themes.map((theme) => theme.titleJa)).toEqual(["KICK BACK"]);
    expect(searchCatalog(index, { ...defaults, query: "KICK BACK", scope: "songs", type: "ED" })).toEqual([]);
    expect(searchCatalog(index, { ...defaults, query: "米津玄師", scope: "creators" }).some(({ themes }) => themes.some((theme) => theme.titleJa === "KICK BACK"))).toBe(true);
    expect(searchCatalog(index, { ...defaults, query: "幼女 myth" })).toHaveLength(1);
  });

  it("serializes only display and search fields, safely embedding text without script termination", () => {
    const sample = structuredClone(index.slice(0, 1));
    sample[0]!.titleJa = "</script><script>fixture</script>&";
    const serialized = serializeCatalogSearchIndex(sample);
    expect(serialized).not.toContain("</script>");
    expect(JSON.parse(serialized)[0].titleJa).toBe(sample[0]!.titleJa);
    expect(serialized).not.toMatch(/posterUrl|bannerUrl|youtubeVideoId|catalogReferences|sourceLabels/);
    expect(new TextEncoder().encode(serializeCatalogSearchIndex(index)).byteLength).toBeLessThan(MAX_SEARCH_INDEX_BYTES);
  });

  it("rejects a search index above the byte budget", () => {
    const sample = structuredClone(index.slice(0, 1));
    sample[0]!.titleJa = "x".repeat(MAX_SEARCH_INDEX_BYTES);
    expect(() => serializeCatalogSearchIndex(sample)).toThrow("byte limit exceeded");
  });

  it("keeps directory errors public-safe and fails closed for required data", async () => {
    const provider: PublicDataProvider = { getSeasons: async () => curatedSeasons, getSeason: async () => null, getAnime: async () => null };
    await expect(loadCatalogDirectoryData(provider)).resolves.toEqual({ status: "error", seasons: [] });
    await expect(loadCatalogDirectoryData(provider, true)).rejects.toThrow("missing or inconsistent");
  });
});

describe("bounded catalogue growth", () => {
  function fixtureProvider(uniqueCount: number, repeat = 1) {
    const template = curatedSeasonDetails[0]!.anime[0]!;
    const detail = curatedAnimeDetails.find((anime) => anime.slug === template.slug)!;
    const cards = Array.from({ length: uniqueCount }, (_, i) => ({ ...template, id: `fixture-${i}`, slug: `fixture-${i}` }));
    let requests = 0;
    const provider: PublicDataProvider = {
      getSeasons: async () => [curatedSeasons[0]!],
      getSeason: async (id) => id === curatedSeasons[0]!.id ? { ...curatedSeasonDetails[0]!, anime: Array.from({ length: repeat }, () => cards).flat() } : null,
      getAnime: async (slug) => {
        requests += 1;
        const card = cards[Number(slug.replace("fixture-", ""))];
        return card ? { ...detail, ...card } : null;
      }
    };
    return { provider, requests: () => requests };
  }

  it("accepts more than 2,000 works and checks overlapping references only once", async () => {
    const fixture = fixtureProvider(2_001, 2);
    await expect(smokePublicApi(fixture.provider)).resolves.toEqual({ seasonCount: 1, animeCount: 2_001 });
    expect(fixture.requests()).toBe(2_002); // One request per work, plus the required 404 probe.
    const search = await loadCatalogSearchData(fixture.provider, true);
    expect(search.entries).toHaveLength(2_001);
  });

  it("accepts the unique-work boundary and rejects an overflow before detail requests", async () => {
    const boundary = fixtureProvider(MAX_CATALOG_ANIME);
    await expect(smokePublicApi(boundary.provider)).resolves.toMatchObject({ animeCount: MAX_CATALOG_ANIME });
    const overflow = fixtureProvider(MAX_CATALOG_ANIME + 1);
    await expect(smokePublicApi(overflow.provider)).rejects.toThrow("unique anime limit");
    expect(overflow.requests()).toBe(0);
  });

  it("rejects excessive quarterly references even when they point to one work", async () => {
    const fixture = fixtureProvider(1, MAX_CATALOG_REFERENCES + 1);
    await expect(smokePublicApi(fixture.provider)).rejects.toThrow("reference limit");
    await expect(loadCatalogSearchData(fixture.provider, true)).rejects.toThrow("reference limit");
    expect(fixture.requests()).toBe(0);
  });
});
