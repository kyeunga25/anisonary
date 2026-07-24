import { describe, expect, it } from "vitest";
import { loadCatalogSearchData, loadHomePageData } from "@/data/page-data";
import { CuratedProvider } from "@/data/curated-provider";
import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";
import { MockProvider } from "@/data/mock-provider";
import type { PublicDataProvider } from "@/data/provider";

describe("home page data states", () => {
  it("returns a ready state when the provider responds", async () => {
    const result = await loadHomePageData(new MockProvider());

    expect(result.status).toBe("ready");
    expect(result.current?.id).toBe("2026-summer");
    expect(result.previous?.id).toBe("2026-spring");
  });

  it("returns a safe public error state without exposing provider details", async () => {
    const failingProvider: PublicDataProvider = {
      getSeasons: async () => {
        throw new Error("private upstream detail");
      },
      getSeason: async () => {
        throw new Error("private upstream detail");
      },
      getAnime: async () => {
        throw new Error("private upstream detail");
      }
    };

    const result = await loadHomePageData(failingProvider);

    expect(result).toEqual({
      status: "error",
      seasons: [],
      current: null,
      previous: null
    });
    expect(JSON.stringify(result)).not.toContain("private upstream detail");
  });

  it("fails the build when production requires API data", async () => {
    const failure = new Error("production API unavailable");
    const failingProvider: PublicDataProvider = {
      getSeasons: async () => {
        throw failure;
      },
      getSeason: async () => {
        throw failure;
      },
      getAnime: async () => {
        throw failure;
      }
    };

    await expect(
      loadHomePageData(failingProvider, "2026-summer", "2026-spring", true)
    ).rejects.toBe(failure);
  });
});

describe("catalogue search data states", () => {
  it("loads every reviewed anime detail across the public seasons", async () => {
    const result = await loadCatalogSearchData(new CuratedProvider());

    expect(result.status).toBe("ready");
    if (result.status !== "ready") throw new Error("Expected ready catalogue search data");
    expect(result.entries).toHaveLength(8);
    expect(new Set(result.entries.map(({ anime }) => anime.slug)).size).toBe(8);
    expect(result.entries.every(({ anime }) => anime.themes.length > 0)).toBe(true);
  });

  it("returns a safe public error state without exposing provider details", async () => {
    const failingProvider: PublicDataProvider = {
      getSeasons: async () => {
        throw new Error("private search upstream detail");
      },
      getSeason: async () => null,
      getAnime: async () => null
    };

    const result = await loadCatalogSearchData(failingProvider);

    expect(result).toEqual({ status: "error", entries: [] });
    expect(JSON.stringify(result)).not.toContain("private search upstream detail");
  });

  it("fails the build when production requires complete search data", async () => {
    const incompleteProvider: PublicDataProvider = {
      getSeasons: async () => [{
        id: "2026-summer",
        year: 2026,
        quarter: "summer",
        titleZhHant: "夏季動畫",
        titleJa: "夏アニメ"
      }],
      getSeason: async () => null,
      getAnime: async () => null
    };

    await expect(loadCatalogSearchData(incompleteProvider, true)).rejects.toThrow(
      "Season detail is missing"
    );
  });

  it("limits concurrent anime detail requests", async () => {
    const cards = Array.from({ length: 24 }, (_, index) => ({
      ...structuredClone(curatedSeasonDetails[0]!.anime[0]!),
      id: `generated-${index}`,
      slug: `generated-${index}`
    }));
    let activeRequests = 0;
    let peakRequests = 0;

    const provider: PublicDataProvider = {
      getSeasons: async () => [structuredClone(curatedSeasons[0]!)],
      getSeason: async () => ({
        ...structuredClone(curatedSeasonDetails[0]!),
        anime: cards
      }),
      getAnime: async (slug) => {
        activeRequests += 1;
        peakRequests = Math.max(peakRequests, activeRequests);
        await new Promise((resolve) => setTimeout(resolve, 1));
        activeRequests -= 1;
        return {
          ...structuredClone(curatedAnimeDetails[0]!),
          id: slug,
          slug
        };
      }
    };

    const result = await loadCatalogSearchData(provider, true);

    expect(result.status).toBe("ready");
    expect(result.entries).toHaveLength(24);
    expect(peakRequests).toBeLessThanOrEqual(8);
  });

  it("fails closed before detail requests when the search catalogue is too large", async () => {
    const cards = Array.from({ length: 2_001 }, (_, index) => ({
      ...structuredClone(curatedSeasonDetails[0]!.anime[0]!),
      id: `oversized-${index}`,
      slug: `oversized-${index}`
    }));
    let animeRequests = 0;
    const provider: PublicDataProvider = {
      getSeasons: async () => [structuredClone(curatedSeasons[0]!)],
      getSeason: async () => ({
        ...structuredClone(curatedSeasonDetails[0]!),
        anime: cards
      }),
      getAnime: async () => {
        animeRequests += 1;
        return structuredClone(curatedAnimeDetails[0]!);
      }
    };

    await expect(loadCatalogSearchData(provider, true)).rejects.toThrow("entry limit exceeded");
    expect(animeRequests).toBe(0);
  });
});
