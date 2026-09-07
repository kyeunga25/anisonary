import { describe, expect, it, vi } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { curatedAnimeDetails, curatedSeasonDetails } from "@/data/curated-data";
import { curated2019SummerSeeds } from "@/data/curated-seeds/2019/summer";
import { CuratedProvider } from "@/data/curated-provider";
import { loadCatalogSearchData } from "@/data/page-data";
import { buildCatalogSearchIndex, searchCatalog } from "@/utils/catalog-search-index";
import { formatBroadcastLabel } from "@/utils/weekday";

const summer = curatedSeasonDetails.find(({ id }) => id === "2019-summer")!;
const anime = (id: number) => curatedAnimeDetails.find((item) => item.id === `curated-${id}`)!;

describe("2019 summer reviewed TV catalogue slice", () => {
  it("publishes an explicitly partial snapshot with traceable identities and no invented artwork", () => {
    expect(summer.anime).toHaveLength(32);
    expect(summer.coverageNote).toContain("仍待核對");
    expect(curated2019SummerSeeds.flatMap(({ themes }) => themes)).toHaveLength(90);
    for (const seed of curated2019SummerSeeds) {
      expect(seed.seasonIds).toEqual(["2019-summer"]);
      expect(seed.startDate).toMatch(/^2019-07-\d{2}$/);
      expect(seed.editorialWeekday).toBe(new Date(`${seed.startDate}T00:00:00Z`).getUTCDay() || 7);
      const detail = anime(seed.anilistId);
      expect(detail.posterUrl).toBeUndefined();
      expect(detail.bannerUrl).toBeUndefined();
      expect(detail.imageSourceUrl).toBeUndefined();
      expect(detail.sources).toContainEqual(expect.objectContaining({
        role: "identifier",
        url: seed.identifierSource?.url,
        verifiedAt: "2026-09-07"
      }));
      expect(detail.sources.find(({ role }) => role === "identifier")?.label).not.toContain("圖像");
      for (const theme of detail.themes) {
        expect(theme.sources.some(({ role }) => role === "first_party")).toBe(true);
        expect(theme.sources.some(({ role }) => role === "cross_check")).toBe(true);
        expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-07")).toBe(true);
      }
    }
    expect(summer.anime.some(({ id }) => id === "curated-110382")).toBe(false);
    expect(curatedSeasonDetails.find(({ id }) => id === "2019-fall")?.anime
      .some(({ id }) => id === "curated-110382")).toBe(true);
    expect(anime(105310).editorialWeekday).toBe(5);
    expect(anime(105310).broadcastTimeJst).toBe("25:25");
    expect(formatBroadcastLabel(anime(105310))).toContain("25:25");
  });

  it("preserves the instrumental opening and the Given vocal rendition", () => {
    const opening = anime(106918).themes.find(({ type }) => type === "OP")!;
    expect(opening.titleJa).toBe("starting the case: Rail Zeppelin");
    expect(opening.versionLabel).toBe("純音樂片頭曲");
    expect(opening.credits).toEqual([
      { name: "梶浦由記", role: "composition" },
      { name: "梶浦由記", role: "arrangement" }
    ]);
    const ending = anime(108430).themes.find(({ type }) => type === "ED")!;
    expect(ending).toMatchObject({ sequence: 2, titleJa: "まるつけ", artistDisplayName: "ギヴン", versionLabel: "ギヴン演唱版" });
    expect(ending.credits.filter(({ role }) => role === "vocals")).toEqual([{ name: "矢野奨吾", role: "vocals" }]);
  });

  it("keeps rotating endings, second-cour vocal versions and special episode use distinct", () => {
    const stars = anime(21512).themes;
    expect(stars.filter(({ type }) => type === "ED")).toHaveLength(12);
    expect(stars.filter(({ titleJa }) => titleJa === "キセキ").map(({ sequence, artistDisplayName }) => [sequence, artistDisplayName])).toEqual([[2, "Trickstar"], [3, "Eden"]]);
    expect(stars.find(({ titleJa }) => titleJa === "Awakening Myth")?.sources)
      .toContainEqual(expect.objectContaining({ url: "https://ensemblestars-anime.com/music/ed6", role: "first_party" }));
    expect(anime(107961).themes.find(({ titleJa }) => titleJa === "ステラ"))
      .toMatchObject({ type: "ED", sequence: 2, artistDisplayName: "TRUE", versionLabel: "第 7 話特殊片尾曲" });
    expect(anime(103048).themes.find(({ type }) => type === "ED"))
      .toMatchObject({ titleJa: "憧れFuture Sign", artistDisplayName: "KiRaRe", versionLabel: "Piano Strings Arrange" });
    expect(anime(103048).themes.find(({ type }) => type === "OP")?.sequence).toBe(2);
  });

  it("does not turn album bonus tracks, insert songs or later adaptations into TV endings", () => {
    expect(anime(107068).themes.filter(({ type }) => type === "ED")).toHaveLength(8);
    expect(anime(107068).themes.some(({ titleJa }) => titleJa === "100万回の「I love you」" || titleJa === "君と光")).toBe(false);
    expect(anime(107663).themes.some(({ titleJa }) => titleJa === "Hollow Veil")).toBe(false);
    expect(anime(105932).themes.some(({ titleJa }) => titleJa === "恋人ツナギ")).toBe(false);
    expect(anime(106918).themes.some(({ titleJa }) => titleJa === "君が見た夢の物語")).toBe(false);
    expect(anime(101348).themes.filter(({ type }) => type === "OP").map(({ titleJa }) => titleJa)).toEqual(["MUKANJYO", "Dark Crow"]);
  });

  it("passes optional artwork and coverage through the public API contract", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async (input) => new Response(
      JSON.stringify(String(input).includes("/seasons/") ? summer : anime(106918)),
      { headers: { "Content-Type": "application/json" } }
    ));
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", { fetch: fetchMock });
    expect(await provider.getSeason("2019-summer")).toEqual(summer);
    expect(await provider.getAnime(anime(106918).slug)).toEqual(anime(106918));
    fetchMock.mockResolvedValue(new Response(JSON.stringify({ ...summer, coverageNote: "a".repeat(501) }), {
      headers: { "Content-Type": "application/json" }
    }));
    await expect(provider.getSeason("2019-summer")).rejects.toThrow("invalid season payload");
  });

  it("finds the reviewed composer and resolves the correct same-title vocal version", async () => {
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const index = buildCatalogSearchIndex(data.entries);
    const options = { query: "梶浦由記", scope: "creators", year: "2019", quarter: "summer", type: "OP" } as const;
    expect(searchCatalog(index, options).some(({ anime: item, themes }) =>
      item.slug === anime(106918).slug && themes.some(({ titleJa }) => titleJa === "starting the case: Rail Zeppelin")
    )).toBe(true);
    const versions = searchCatalog(index, { ...options, query: "キセキ Eden", scope: "all" });
    expect(versions.find(({ anime: item }) => item.slug === anime(21512).slug)?.themes
      .map(({ artistDisplayName }) => artistDisplayName)).toContain("Eden");
  });
});
