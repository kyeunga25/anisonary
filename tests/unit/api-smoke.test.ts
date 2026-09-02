import { describe, expect, it } from "vitest";
import { smokePublicApi } from "@/data/api-smoke";
import { CuratedProvider } from "@/data/curated-provider";
import type { PublicDataProvider } from "@/data/provider";

function providerWith(overrides: Partial<PublicDataProvider>): PublicDataProvider {
  const base = new CuratedProvider();
  return {
    getSeasons: overrides.getSeasons ?? (() => base.getSeasons()),
    getSeason: overrides.getSeason ?? ((seasonId) => base.getSeason(seasonId)),
    getAnime: overrides.getAnime ?? ((slug) => base.getAnime(slug))
  };
}

describe("production API smoke gate", () => {
  it("accepts the complete reviewed catalogue and its not-found behavior", async () => {
    await expect(smokePublicApi(new CuratedProvider())).resolves.toEqual({
      seasonCount: 24,
      animeCount: 1689
    });
  });

  it("rejects Mock Data in a production season", async () => {
    const base = new CuratedProvider();
    const provider = providerWith({
      async getSeason(seasonId) {
        const season = await base.getSeason(seasonId);
        return season ? { ...season, isMockData: true } : null;
      }
    });

    await expect(smokePublicApi(provider)).rejects.toThrow("is marked as Mock Data");
  });

  it("rejects drift between the season list and season detail", async () => {
    const base = new CuratedProvider();
    const provider = providerWith({
      async getSeason(seasonId) {
        const season = await base.getSeason(seasonId);
        return season ? { ...season, titleZhHant: `${season.titleZhHant}（不一致）` } : null;
      }
    });

    await expect(smokePublicApi(provider)).rejects.toThrow("season summary drift");
  });

  it("rejects drift between an anime card and anime detail", async () => {
    const base = new CuratedProvider();
    const provider = providerWith({
      async getAnime(slug) {
        const anime = await base.getAnime(slug);
        return anime ? { ...anime, titleJa: `${anime.titleJa} drift` } : null;
      }
    });

    await expect(smokePublicApi(provider)).rejects.toThrow("anime card/detail drift");
  });

  it("requires unknown season and anime identities to return not found", async () => {
    const base = new CuratedProvider();
    const fallbackAnime = await base.getAnime("akane-banashi");
    const provider = providerWith({
      async getAnime(slug) {
        return (await base.getAnime(slug)) ?? fallbackAnime;
      }
    });

    await expect(smokePublicApi(provider)).rejects.toThrow("did not return 404");
  });
});
