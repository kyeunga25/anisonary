import { describe, expect, it, vi } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { curatedAnimeDetails, curatedSeasonDetails } from "@/data/curated-data";
import { curated2019SpringSeeds } from "@/data/curated-seeds/2019/spring";
import { CuratedProvider } from "@/data/curated-provider";
import { loadCatalogSearchData } from "@/data/page-data";
import { buildCatalogSearchIndex, searchCatalog } from "@/utils/catalog-search-index";

const spring = curatedSeasonDetails.find(({ id }) => id === "2019-spring")!;
const anime = (id: number) => curatedAnimeDetails.find((item) => item.id === `curated-${id}`)!;

describe("2019 spring reviewed TV catalogue", () => {
  it("publishes a partial quarter with reviewed identity and song evidence, without unverified artwork", () => {
    expect(spring.anime).toHaveLength(4);
    expect(spring.coverageNote).toContain("跨季延續及特殊歌曲版本仍待核對");
    expect(curated2019SpringSeeds.flatMap(({ themes }) => themes)).toHaveLength(9);
    expect(curatedSeasonDetails.some(({ id }) => id === "2025-fall")).toBe(false);
    for (const seed of curated2019SpringSeeds) {
      expect(seed.seasonIds).toEqual(["2019-spring"]);
      const detail = anime(seed.anilistId);
      expect(detail.posterUrl).toBeUndefined();
      expect(detail.bannerUrl).toBeUndefined();
      expect(detail.imageSourceUrl).toBeUndefined();
      expect(detail.sources).toContainEqual(expect.objectContaining({
        role: "identifier", url: seed.identifierSource?.url, verifiedAt: "2026-09-07"
      }));
      for (const theme of detail.themes) {
        expect(theme.sources.some(({ role }) => role === "first_party")).toBe(true);
        expect(theme.sources.some(({ role }) => role === "cross_check")).toBe(true);
        expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-07")).toBe(true);
      }
    }
  });

  it("uses the TV episode premiere instead of the recap special or theatrical advance screening", () => {
    expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === 101922)?.startDate).toBe("2019-04-06");
    expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === 97668)?.startDate).toBe("2019-04-09");
    expect(anime(97668)).toMatchObject({ editorialWeekday: 2, broadcastTimeJst: "25:35" });
    expect(anime(97668).sources).toContainEqual(expect.objectContaining({
      url: "https://onepunchman-anime.net/news/archives/2239", role: "first_party"
    }));
    expect(anime(103223)).toMatchObject({ editorialWeekday: 5, broadcastTimeJst: "22:30" });
    expect(anime(105914)).toMatchObject({ editorialWeekday: 3, broadcastTimeJst: "22:30" });
  });

  it("keeps the episode-19 ending distinct from the main ending and its vocal credit distinct from the release act", async () => {
    const kimetsu = anime(101922);
    expect(kimetsu.themes.map(({ type, sequence, titleJa }) => [type, sequence, titleJa])).toEqual([
      ["OP", 1, "紅蓮華"], ["ED", 1, "from the edge"], ["ED", 2, "竈門炭治郎のうた"]
    ]);
    const ending = kimetsu.themes.find(({ type, sequence }) => type === "ED" && sequence === 2)!;
    expect(ending).toMatchObject({
      versionLabel: "第19話片尾／兼插入歌", artistDisplayName: "椎名豪 featuring 中川奈美", releaseDate: "2019-08-30"
    });
    expect(ending.credits.filter(({ role }) => role === "vocals")).toEqual([{ name: "中川奈美", role: "vocals" }]);
    expect(ending.credits).toContainEqual({ name: "ufotable", role: "lyrics" });
    expect(ending.sources).toContainEqual(expect.objectContaining({
      url: "https://times.abema.tv/articles/-/8671435", role: "first_party", language: "ja"
    }));
    expect(kimetsu.themes[0]?.releaseDate).toBe("2019-04-22");
    expect(kimetsu.themes[1]?.releaseDate).toBe("2019-09-02");
    expect(kimetsu.themes[1]?.credits.filter(({ role }) => role === "vocals")).toEqual([{ name: "LiSA", role: "vocals" }]);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(kimetsu), {
        headers: { "Content-Type": "application/json" }
      }))
    });
    expect(await provider.getAnime(kimetsu.slug)).toEqual(kimetsu);
  });

  it("preserves character vocals and co-arrangers without relabelling an insert song as an ending", () => {
    const senko = anime(105914);
    expect(senko.titleZhHant).toBe("請讓我撒嬌，仙狐大人！");
    expect(senko.sources).toContainEqual(expect.objectContaining({
      url: "https://www.youtube.com/watch?v=veenGObGV6U", role: "first_party", language: "zh-Hant"
    }));
    expect(senko.themes[0]?.credits.filter(({ role }) => role === "vocals")).toEqual([
      { name: "仙狐（CV：和氣あず未）", role: "vocals" }, { name: "シロ（CV：内田真礼）", role: "vocals" }
    ]);
    const bungou = anime(103223);
    expect(bungou.themes.map(({ titleJa }) => titleJa)).toEqual(["セツナの愛", "Lily"]);
    expect(bungou.themes[1]?.credits.filter(({ role }) => role === "arrangement")).toEqual([
      { name: "本間昭光", role: "arrangement" }, { name: "ラックライフ", role: "arrangement" }
    ]);
    expect(anime(97668).themes[0]?.versionLabel).toBe("日本播出版");
    expect(anime(97668).themes.flatMap(({ videos }) => videos).map(({ type }) => type)).toEqual(["creditless_op", "creditless_ed"]);
  });

  it("finds the special ending and character performers within the new quarter without leaking results into summer", async () => {
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const index = buildCatalogSearchIndex(data.entries);
    const options = { query: "中川奈美", scope: "creators", year: "2019", quarter: "spring", type: "ED" } as const;
    const results = searchCatalog(index, options);
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["kimetsu-no-yaiba"]);
    expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["竈門炭治郎のうた"]);
    expect(searchCatalog(index, { ...options, quarter: "summer" })).toEqual([]);
    expect(searchCatalog(index, { ...options, query: "内田真礼", type: "OP" }).map(({ anime: item }) => item.slug))
      .toEqual(["sewayaki-kitsune-no-senko-san"]);
  });
});
