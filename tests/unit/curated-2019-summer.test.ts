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

describe("2019 summer reviewed catalogue slices", () => {
  it("publishes an explicitly partial snapshot with traceable identities and no invented artwork", () => {
    expect(summer.anime).toHaveLength(42);
    expect(summer.coverageNote).toContain("仍待核對");
    expect(curated2019SummerSeeds.flatMap(({ themes }) => themes)).toHaveLength(103);
    for (const seed of curated2019SummerSeeds) {
      expect(seed.seasonIds).toEqual(["2019-summer"]);
      expect(seed.startDate).toMatch(/^2019-0[78]-\d{2}$/);
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

  it("keeps the reviewed web premieres separate from pilots, earlier releases and later parts", () => {
    for (const [id, startDate] of [[102427, "2019-07-19"], [111131, "2019-08-15"], [110686, "2019-08-23"]] as const) {
      const seed = curated2019SummerSeeds.find(({ anilistId }) => anilistId === id)!;
      expect(seed.startDate).toBe(startDate);
      expect(seed.broadcastLabel).toBe("日本網絡首播／時間未整理");
      expect(seed.broadcastTimeJst).toBeUndefined();
    }
    expect(anime(102427).slug).not.toBe(anime(114448).slug);
    expect(curatedSeasonDetails.find(({ id }) => id === "2020-winter")?.anime)
      .toContainEqual(expect.objectContaining({ id: "curated-114448" }));
    expect(summer.anime.some(({ id }) => id === "curated-114448" || id === "curated-105807")).toBe(false);
    expect(anime(110686).themes).toEqual([]);
  });

  it("distinguishes the summer short-series schedule from specials and programme time slots", () => {
    const zannen = anime(128738);
    expect(zannen.titleZhHant).toBe("殘念生物事典(3)");
    expect(formatBroadcastLabel(zannen)).toBe("平日 09:30（日本；7/29～8/7）");
    expect(zannen.themes).toEqual([]);
    expect(curated2019SummerSeeds.find(({ anilistId }) => anilistId === 128738)?.startDate).toBe("2019-07-29");
    expect(summer.anime.some(({ id }) => id === "curated-128739" || id === "curated-130439")).toBe(false);
    expect(anime(130439).titleZhHant).toBe("殘念生物事典(4)");
    const mowai = anime(110317);
    expect(mowai.editorialWeekday).toBe(2);
    expect(mowai.broadcastTimeJst).toBeUndefined();
    expect(formatBroadcastLabel(mowai)).toBe("《おはスタ》星期二 07:05 節目內（日本）");
    expect(mowai.themes).toEqual([]);
  });

  it("keeps the original name when no localized source is verified, without inventing a source or artwork claim", async () => {
    const mowai = anime(110317);
    expect(mowai.titleZhHant).toBe(mowai.titleJa);
    expect(mowai.sources.some(({ role }) => role === "localized_cross_check")).toBe(false);
    expect(mowai.sources.map(({ url }) => url)).not.toContain("https://youranimes.tw/bangumi/201907");
    expect(mowai.sources).toContainEqual(expect.objectContaining({
      url: "https://www.shopro.co.jp/tv/mowai-kun/", language: "ja", role: "first_party"
    }));
    expect(mowai.sources.find(({ role }) => role === "identifier")?.label).not.toContain("圖像");
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(mowai), {
        headers: { "Content-Type": "application/json" }
      }))
    });
    expect(await provider.getAnime(mowai.slug)).toEqual(mowai);
  });

  it("retains the official release artist without inventing vocal credits or another ending", async () => {
    const fish = anime(110124);
    expect(fish).toMatchObject({ editorialWeekday: 7, broadcastTimeJst: "24:00" });
    expect(fish.sources).toContainEqual(expect.objectContaining({
      url: "https://acgsecrets.hk/bangumi/201907/", language: "zh-Hant", role: "localized_cross_check"
    }));
    expect(fish.themes).toHaveLength(1);
    const ending = fish.themes[0]!;
    expect(ending).toMatchObject({ type: "ED", sequence: 1, titleJa: "Don't Stop Moving", artistDisplayName: "BUSINESS FISH", releaseDate: "2019-07-08", credits: [] });
    expect(ending.videos[0]).toMatchObject({ youtubeVideoId: "LK64W7e75zA", type: "creditless_ed", officialStatus: "official" });
    expect(ending.sources).toContainEqual(expect.objectContaining({
      url: "https://tohoentertainmentonline.com/shop/g/gTASD01073/", role: "first_party"
    }));
    expect(ending.sources).toContainEqual(expect.objectContaining({
      url: "https://music.orimyu.com/php/music/MusicTop.php?music=6773313", role: "cross_check", language: "ja"
    }));
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(fish), {
        headers: { "Content-Type": "application/json" }
      }))
    });
    expect(await provider.getAnime(fish.slug)).toEqual(fish);
  });

  it("retains the English cover credits and an independent identity source without inventing an index URL", () => {
    const saintSeiya = anime(102427);
    expect(saintSeiya.sources).toContainEqual(expect.objectContaining({
      url: "https://www.wikidata.org/wiki/Q65052700", role: "identifier", language: "en"
    }));
    expect(curated2019SummerSeeds.find(({ anilistId }) => anilistId === 102427)?.animeThemesUrl).toBeUndefined();
    expect(saintSeiya.themes.map(({ type, titleJa }) => [type, titleJa])).toEqual([
      ["OP", "PEGASUS SEIYA"], ["ED", "サムバディ・ニュー"]
    ]);
    const opening = saintSeiya.themes[0]!;
    expect(opening).toMatchObject({ artistDisplayName: "The Struts", releaseDate: "2019-07-19", versionLabel: "The Struts 英文演唱版" });
    expect(opening.credits).toContainEqual({ name: "TIM JENSEN", role: "translation" });
    expect(opening.credits).toContainEqual({ name: "竜真知子", role: "lyrics" });
    expect(opening.videos[0]?.youtubeVideoId).toBe("gBYOvxkmEuI");
    expect(saintSeiya.themes.every(({ sources }) => sources.some(({ url, role, language }) =>
      url === "https://en.wikipedia.org/wiki/Knights_of_the_Zodiac:_Saint_Seiya" && role === "cross_check" && language === "en"
    ))).toBe(true);
  });

  it("preserves English first-party evidence and both Showdown vocalists without inferring an ending", async () => {
    const cannonBusters = anime(111131);
    expect(cannonBusters.themes).toHaveLength(1);
    const opening = cannonBusters.themes[0]!;
    expect(opening).toMatchObject({ type: "OP", titleJa: "Showdown", artistDisplayName: "Marty Grimes、BJRNCK" });
    expect(opening.credits.filter(({ role }) => role === "vocals")).toEqual([
      { name: "Marty Grimes", role: "vocals" }, { name: "BJRNCK", role: "vocals" }
    ]);
    for (const url of [
      "https://www.netflix.com/tudum/articles/black-music-anime-connection-closer-look",
      "https://www.youtube.com/watch?v=Vheqm2tJcd8"
    ]) {
      expect(opening.sources).toContainEqual(expect.objectContaining({ url, role: "first_party", language: "en" }));
    }
    expect(opening.sources).toContainEqual(expect.objectContaining({
      url: "https://www.satelight.co.jp/works/cannon-busters/", language: "ja"
    }));
    expect(opening.videos[0]).toMatchObject({ youtubeVideoId: "Vheqm2tJcd8", channelName: "SonySoundtracksVEVO" });
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(cannonBusters), {
        headers: { "Content-Type": "application/json" }
      }))
    });
    expect(await provider.getAnime(cannonBusters.slug)).toEqual(cannonBusters);
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const index = buildCatalogSearchIndex(data.entries);
    expect(searchCatalog(index, { query: "BJRNCK", scope: "creators", year: "2019", quarter: "summer", type: "OP" })
      .map(({ anime: item }) => item.slug)).toEqual([cannonBusters.slug]);
  });

  it("distinguishes a streaming-only opening and rotating short-form endings", () => {
    const hakata = anime(109929);
    expect(hakata.themes.map(({ type, versionLabel }) => [type, versionLabel])).toEqual([
      ["OP", "配信版片頭曲"], ["ED", "第 1～6 話片尾曲"], ["ED", "第 7～12 話片尾曲"]
    ]);
    const synthesizedEnding = hakata.themes.find(({ type, sequence }) => type === "ED" && sequence === 1)!;
    expect(synthesizedEnding.artistDisplayName).toBe("mathru@かにみそP");
    expect(synthesizedEnding.credits.filter(({ role }) => role === "vocals")).toEqual([
      { name: "鳴花ヒメ・ミコト", role: "vocals" }
    ]);
    expect(synthesizedEnding.sources).toContainEqual(expect.objectContaining({
      url: "https://anison.online/anime/1159", language: "ja", role: "cross_check"
    }));
    expect(hakata.themes.find(({ sequence, type }) => type === "ED" && sequence === 2)?.videos)
      .toContainEqual(expect.objectContaining({ youtubeVideoId: "62xOuMZQNEw", type: "other" }));
    expect(anime(109603).themes.map(({ type, titleJa }) => [type, titleJa])).toEqual([["ED", "決壊"]]);
    expect(anime(109603)).toMatchObject({ editorialWeekday: 7, broadcastTimeJst: "27:05" });
  });

  it("keeps an August premiere and its next-year ending in the same series", () => {
    expect(curated2019SummerSeeds.find(({ anilistId }) => anilistId === 111144)?.startDate).toBe("2019-08-24");
    const vanguard = anime(111144);
    expect(vanguard).toMatchObject({ editorialWeekday: 6, broadcastTimeJst: "08:00" });
    expect(vanguard.themes.map(({ titleJa }) => titleJa)).toEqual(["Lead the way", "ギフト", "ぼくらのターン"]);
    expect(vanguard.themes.find(({ sequence, type }) => type === "ED" && sequence === 2)).toMatchObject({
      artistDisplayName: "虹のコンキスタドール", releaseDate: "2020-01-22", versionLabel: "2020-01-11 起片尾曲"
    });
    expect(vanguard.themes.some(({ titleJa }) => titleJa === "STARTING OVER")).toBe(false);
  });

  it("separates Kengan's original Netflix music from the later television replacement", async () => {
    expect(anime(100891).themes.map(({ titleJa }) => titleJa)).toEqual(["KING & ASHLEY", "Born This Way"]);
    const secondPart = anime(111048);
    expect(secondPart.themes.map(({ type, sequence, titleJa, versionLabel }) => [type, sequence, titleJa, versionLabel])).toEqual([
      ["OP", 1, "KING & ASHLEY", "2019 年 Netflix 配信版"],
      ["OP", 2, "哀紫電一閃", "2020 年電視播出版（第 13 話起）"],
      ["ED", 1, "Born This Way", "2019 年 Netflix 配信版"],
      ["ED", 2, "ASHURA", "2020 年電視播出版（第 13 話起）"]
    ]);
    expect(secondPart.themes.filter(({ sequence }) => sequence === 1).flatMap(({ videos }) => videos)).toEqual([]);
    expect(secondPart.themes.find(({ type, sequence }) => type === "OP" && sequence === 2)?.videos[0]?.youtubeVideoId).toBe("3oWHMoFohuM");
    expect(secondPart.themes.find(({ type, sequence }) => type === "ED" && sequence === 2)?.videos[0]?.youtubeVideoId).toBe("jjjfr8jizCs");
    expect(secondPart.themes.find(({ type, sequence }) => type === "ED" && sequence === 1)?.credits).toEqual([
      { name: "YZERR", role: "vocals" }, { name: "Vingo", role: "vocals" }, { name: "Bark", role: "vocals" }
    ]);
    // A song review must not claim a new verification of unchanged artwork or title sources.
    expect(secondPart.verifiedAt).toBe("2026-09-02");
    expect(secondPart.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-02")).toBe(true);
    expect(secondPart.themes.every(({ lastVerifiedAt, sources }) => lastVerifiedAt === "2026-09-07"
      && sources.every(({ verifiedAt }) => verifiedAt === "2026-09-07"))).toBe(true);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(secondPart), {
        headers: { "Content-Type": "application/json" }
      }))
    });
    expect(await provider.getAnime(secondPart.slug)).toEqual(secondPart);
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
