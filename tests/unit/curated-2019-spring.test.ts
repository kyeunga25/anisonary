import { describe, expect, it, vi } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { curatedAnimeDetails, curatedSeasonDetails } from "@/data/curated-data";
import { curated2019SpringSeeds } from "@/data/curated-seeds/2019/spring";
import { CuratedProvider } from "@/data/curated-provider";
import { loadCatalogSearchData } from "@/data/page-data";
import { buildCatalogSearchIndex, searchCatalog } from "@/utils/catalog-search-index";

const spring = curatedSeasonDetails.find(({ id }) => id === "2019-spring")!;
const anime = (id: number) => curatedAnimeDetails.find((item) => item.id === `curated-${id}`)!;

describe("2019 spring reviewed TV and web catalogue", () => {
  it("identifies PriChan's second TV season without merging the third season or assigning an external identifier", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-kiratto-prichan-2-2019")!;
    expect(seed).toBeDefined();
    expect(seed).toMatchObject({ startDate: "2019-04-07", editorialWeekday: 7, broadcastTimeJst: "10:00", seasonIds: ["2019-spring"] });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "kiratto-prichan-season-2", titleJa: "キラッとプリ☆チャン シーズン2", titleZhHant: "閃躍吧！星夢頻道 第二季", status: "finished" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.takaratomy-arts.co.jp/company/pdf/2019R_Mertic.pdf", role: "identifier", language: "ja" }));
    expect(curatedAnimeDetails.find(({ slug }) => slug === "kiratto-prichan-season-3")?.id).not.toBe(seed.id);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("separates PriChan's two group openings, solo ending and three-character ending with joint production credits", () => {
    const detail = curatedAnimeDetails.find(({ id }) => id === "catalog-kiratto-prichan-2-2019")!;
    expect(detail).toBeDefined();
    expect(detail.themes.map(({ type, sequence, titleJa }) => [type, sequence, titleJa])).toEqual([
      ["OP", 1, "ダイヤモンドスマイル"], ["OP", 2, "キラリスト・ジュエリスト"],
      ["ED", 1, "じゃんけんキラッと！プリ☆チャン"], ["ED", 2, "Brand New Girls"]
    ]);
    expect(detail.themes.slice(0, 2).map(({ artistDisplayName }) => artistDisplayName)).toEqual(["Run Girls, Run！", "Run Girls, Run！"]);
    expect(detail.themes[2]).toMatchObject({ artistDisplayName: "桃山みらい（CV.林鼓子）", credits: [
      { name: "林鼓子", role: "vocals" }, { name: "宮嶋淳子", role: "lyrics" },
      { name: "トミタカズキ", role: "composition" }, { name: "トミタカズキ", role: "arrangement" }
    ] });
    expect(detail.themes[3]?.artistDisplayName).toBe("桃山みらい（CV.林鼓子）・青葉りんか（CV.厚木那奈美）・紫藤める（CV.森嶋優花）");
    expect(detail.themes[3]?.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual(["林鼓子", "厚木那奈美", "森嶋優花"]);
    for (const role of ["lyrics", "composition", "arrangement"]) {
      expect(detail.themes[3]?.credits.filter((credit) => credit.role === role).map(({ name }) => name)).toEqual(["栗原暁", "前田佑"]);
    }
    expect(detail.themes.some(({ artistDisplayName, titleJa }) => /オール☆ジュエル|わーすた|Share the light|イルミナージュ/.test(`${artistDisplayName} ${titleJa}`))).toBe(false);
  });

  it("retains PriChan's original opening CD dates and later ending collection dates with reviewed sources and no unaudited media", () => {
    const detail = curatedAnimeDetails.find(({ id }) => id === "catalog-kiratto-prichan-2-2019")!;
    expect(detail).toBeDefined();
    expect(detail.themes.map(({ releaseDate }) => releaseDate)).toEqual(["2019-05-29", "2019-11-27", "2020-06-24", "2020-06-24"]);
    for (const theme of detail.themes) {
      expect(theme.lastVerifiedAt).toBe("2026-09-08");
      expect(theme.sources.every(({ verifiedAt, language }) => verifiedAt === "2026-09-08" && language === "ja")).toBe(true);
      expect(theme.sources.some(({ role }) => role === "cross_check")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://avex.jp/prichan/discography/detail.php?id=1017565", role: "first_party" }));
      expect(theme.videos).toEqual([]);
    }
    expect(detail.themes[1]?.credits).toEqual([
      { name: "只野菜摘", role: "lyrics" }, { name: "広川恵一", role: "composition" }, { name: "広川恵一", role: "arrangement" }
    ]);
    expect(detail.themes.filter(({ type }) => type === "ED").every(({ versionLabel }) => versionLabel?.includes("2020 年歌曲合集 CD"))).toBe(true);
  });

  it("finds PriChan's second season by localized name, song and individual credited ending creators", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const filters = { year: "2019", quarter: "spring", type: "all" } as const;
    const slug = "kiratto-prichan-season-2";
    expect(searchCatalog(index, { ...filters, query: "閃躍吧", scope: "anime" }).map(({ anime: item }) => item.slug)).toEqual([slug]);
    for (const [query, scope, type, expected] of [
      ["キラリスト", "songs", "OP", ["キラリスト・ジュエリスト"]],
      ["林鼓子", "creators", "ED", ["じゃんけんキラッと！プリ☆チャン", "Brand New Girls"]],
      ["前田佑", "creators", "ED", ["Brand New Girls"]],
      ["厚木那奈美", "creators", "ED", ["Brand New Girls"]],
      ["久保田未夢", "creators", "ED", []]
    ] as const) {
      const result = searchCatalog(index, { ...filters, query, scope, type }).find(({ anime: item }) => item.slug === slug);
      expect(result?.themes.map(({ titleJa }) => titleJa) ?? []).toEqual(expected);
    }
  });

  it("identifies ULTRAMAN's original Netflix season separately from TV broadcast, sequels and live action", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-ultraman-2019")!;
    expect(seed).toBeDefined();
    expect(seed).toMatchObject({ startDate: "2019-04-01", editorialWeekday: 1, seasonIds: ["2019-spring"], status: "finished" });
    expect(seed.broadcastLabel).toContain("網絡配信第 1 季，全 13 話");
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "ultraman-2019", titleJa: "ULTRAMAN", titleZhHant: "ULTRAMAN" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl", "broadcastTimeJst"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("retains ULTRAMAN's reviewed multilingual identity sources while withholding disputed theme purposes and later TV songs", () => {
    const detail = curatedAnimeDetails.find(({ id }) => id === "catalog-ultraman-2019")!;
    expect(detail).toBeDefined();
    expect(detail.themes).toEqual([]);
    expect(detail.themeAvailability).toBe("not_announced");
    expect(detail.sources).toEqual(expect.arrayContaining([
      expect.objectContaining({ url: "https://anime.heros-ultraman.com/story/", role: "identifier", language: "ja" }),
      expect.objectContaining({ url: "https://about.netflix.com/zh_tw/news/anime-production-line-deal", role: "first_party", language: "zh-Hant" }),
      expect.objectContaining({ url: "https://tsuburaya-prod.com/news/4883", role: "first_party", language: "en" }),
      expect.objectContaining({ url: "https://youranimes.tw/animes/3065", role: "localized_cross_check", language: "zh-Hant" })
    ]));
    expect(detail.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-08")).toBe(true);
    expect(spring.coverageNote).toContain("38 套 TV 作品及 1 套網絡連載");
  });

  it("finds ULTRAMAN's original season without duplicating sequels or inventing OP and ED matches", async () => {
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const index = buildCatalogSearchIndex(data.entries);
    const results = searchCatalog(index, { query: "ULTRAMAN", scope: "anime", year: "2019", quarter: "spring", type: "all" });
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["ultraman-2019"]);
    expect(results[0]?.themes).toEqual([]);
    for (const type of ["OP", "ED"] as const) {
      expect(searchCatalog(index, { query: "ULTRAMAN", scope: "anime", year: "2019", quarter: "spring", type })).toEqual([]);
    }
    expect(curatedAnimeDetails.filter(({ slug }) => ["ultraman-season-2", "ultraman-final"].includes(slug))).toHaveLength(2);
  });

  it("identifies Aikatsu Friends' second TV season independently from the first season, game update and On Parade", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-aikatsu-friends-2-2019")!;
    expect(seed).toBeDefined();
    expect(seed).toMatchObject({ startDate: "2019-04-04", editorialWeekday: 4, broadcastTimeJst: "18:25", seasonIds: ["2019-spring"] });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "aikatsu-friends-2-2019", titleJa: "アイカツフレンズ！～かがやきのジュエル～", titleZhHant: "偶像學園Friends！ 第二季", status: "finished" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/22343_201904041825.html", role: "identifier", language: "ja" }));
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("keeps Aikatsu Friends' four-character opening and solo ending with separate joint production credits", () => {
    const detail = curatedAnimeDetails.find(({ id }) => id === "catalog-aikatsu-friends-2-2019")!;
    expect(detail).toBeDefined();
    expect(detail.themes.map(({ type, titleJa }) => [type, titleJa])).toEqual([["OP", "ひとりじゃない！"], ["ED", "Be star"]]);
    expect(detail.themes[0]).toMatchObject({ artistDisplayName: "あいね・みお・舞花・エマ from BEST FRIENDS！", credits: [
      { name: "松原さらり", role: "lyrics" }, { name: "SHOW", role: "composition" }, { name: "SHOW", role: "arrangement" }
    ] });
    expect(detail.themes[1]).toMatchObject({ artistDisplayName: "ひびき from BEST FRIENDS！", credits: [
      { name: "松原さらり", role: "lyrics" }, { name: "Maozon", role: "composition" }, { name: "YUKI FUNAKOSHI", role: "composition" },
      { name: "Maozon", role: "arrangement" }, { name: "YUKI FUNAKOSHI", role: "arrangement" }
    ] });
    expect(detail.themes.every(({ credits }) => credits.every(({ role }) => role !== "vocals"))).toBe(true);
    expect(detail.themes.some(({ titleJa }) => /そこにしかないもの|プライド|アイカツフレンズ|OFF VOCAL|ver\./.test(titleJa))).toBe(false);
  });

  it("uses song-specific Aikatsu Friends cross-checks and withholds conflicting CD dates, unaudited special endings and media", () => {
    const detail = curatedAnimeDetails.find(({ id }) => id === "catalog-aikatsu-friends-2-2019")!;
    expect(detail).toBeDefined();
    for (const [index, theme] of detail.themes.entries()) {
      expect(theme.lastVerifiedAt).toBe("2026-09-08");
      expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-08")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: `https://utaten.com/lyric/${index === 0 ? "mi19041917" : "mi19082003"}/`, role: "cross_check", language: "ja" }));
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://www.aikatsu.net/aikatsufriends_02/aikatsufriendscom/?offset=5#5420", role: "first_party" }));
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201908/22343_201908221825.html", role: "first_party" }));
      expect(theme.sources.some(({ url }) => url === "https://anison.online/anime/1068")).toBe(false);
      expect(theme.videos).toEqual([]);
      expect(JSON.parse(JSON.stringify(theme))).not.toHaveProperty("releaseDate");
      expect(theme.versionLabel).toContain("CD 日期與聲優歌唱署名待核對");
    }
  });

  it("finds Aikatsu Friends' shared lyricist and each co-composer without expanding the recorded singing group", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const filters = { year: "2019", quarter: "spring", type: "all" } as const;
    const slug = "aikatsu-friends-2-2019";
    expect(searchCatalog(index, { ...filters, query: "偶像學園Friends", scope: "anime" }).map(({ anime: item }) => item.slug)).toEqual([slug]);
    for (const [query, type, expected] of [
      ["松原さらり", "all", ["ひとりじゃない！", "Be star"]], ["SHOW", "OP", ["ひとりじゃない！"]],
      ["Maozon", "ED", ["Be star"]], ["YUKI FUNAKOSHI", "ED", ["Be star"]], ["カレン", "OP", []]
    ] as const) {
      const result = searchCatalog(index, { ...filters, query, type, scope: "creators" }).find(({ anime: item }) => item.slug === slug);
      expect(result?.themes.map(({ titleJa }) => titleJa) ?? []).toEqual(expected);
    }
  });

  it("identifies KING OF PRISM's TV premiere separately from the introductory program and theatrical chapters", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-king-of-prism-sss-2019")!;
    expect(seed).toBeDefined();
    expect(seed).toMatchObject({ startDate: "2019-04-15", editorialWeekday: 1, broadcastTimeJst: "25:35", seasonIds: ["2019-spring"] });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "king-of-prism-sss-2019", titleJa: "KING OF PRISM -Shiny Seven Stars-", titleZhHant: "星光王子 KING OF PRISM -Shiny Seven Stars-", status: "finished" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/25383_201904152535.html", role: "identifier", language: "ja" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.linetv.tw/drama/18245/eps/7", role: "first_party", language: "zh-Hant" }));
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("retains KING OF PRISM's eleven TV cover endings and the reviewed singing voices without importing insert songs", () => {
    const detail = curatedAnimeDetails.find(({ id }) => id === "catalog-king-of-prism-sss-2019")!;
    expect(detail).toBeDefined();
    const themes = detail.themes;
    expect(themes.map(({ type, titleJa }) => [type, titleJa])).toEqual([
      ["OP", "Shiny Seven Stars!"], ["ED", "寒い夜だから・・・"], ["ED", "masquerade"],
      ["ED", "Unite! The Night!"], ["ED", "JOY"], ["ED", "LEGEND OF WIND"],
      ["ED", "Love & Peace Forever"], ["ED", "Overnight Sensation ～時代はあなたに委ねてる～"],
      ["ED", "Silver and Gold dance"], ["ED", "愛がもう少し欲しいよ"], ["ED", "BRAND NEW TOMORROW"], ["ED", "BOY MEETS GIRL"]
    ]);
    expect(themes[4]).toMatchObject({ artistDisplayName: "高田馬場ジョージGS（CV：小林竜之）", credits: [{ name: "小林竜之", role: "vocals" }] });
    expect(themes[0]?.credits.map(({ name }) => name)).toEqual(["寺島惇太", "斉藤壮馬", "畠中祐", "八代拓", "五十嵐雅", "永塚拓馬", "内田雄馬"]);
    expect(themes[11]?.credits).toEqual(themes[0]?.credits);
    expect(themes.every(({ credits }) => credits.every(({ role }) => role === "vocals"))).toBe(true);
    expect(themes.some(({ titleJa }) => /366LOVE|虹色CROWN|survival dAnce|ナナイロノチカイ|プラトニックソード|JOKER KISS/.test(titleJa))).toBe(false);
    expect(themes.map(({ releaseDate }) => releaseDate)).toEqual([
      "2019-04-24", "2019-06-26", "2019-06-26", "2019-07-10", "2019-07-10", "2019-07-10",
      "2019-07-24", "2019-07-24", "2019-07-24", "2019-08-07", "2019-08-07", undefined
    ]);
    expect(themes[11]?.versionLabel).toContain("發行日期與製作署名待核對");
  });

  it("uses KING OF PRISM's publisher CM descriptions only as purpose evidence and withholds conflicting dates and playback media", () => {
    const detail = curatedAnimeDetails.find(({ id }) => id === "catalog-king-of-prism-sss-2019")!;
    expect(detail).toBeDefined();
    for (const theme of detail.themes) {
      expect(theme.lastVerifiedAt).toBe("2026-09-08");
      expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-08")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://anison.online/anime/4114", role: "cross_check", language: "ja" }));
      expect(theme.sources.some(({ url, role }) => url.startsWith("https://kinpri.com/sss/sp/discography/detail.php?id=") && role === "first_party")).toBe(true);
      expect(theme.videos).toEqual([]);
    }
    expect(detail.themes[1]?.sources).toContainEqual(expect.objectContaining({ url: "https://www.youtube.com/watch?v=420RJfS0G7Y", role: "first_party" }));
    expect(detail.themes[11]?.sources).toContainEqual(expect.objectContaining({ url: "https://www.youtube.com/watch?v=lCI1f13Vvw4", role: "first_party" }));
    expect(JSON.parse(JSON.stringify(detail.themes[11]))).not.toHaveProperty("releaseDate");
  });

  it("finds KING OF PRISM's individual singers and ensemble songs without treating the speaking actor or original TRF as the cover singer", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const filters = { year: "2019", quarter: "spring", type: "all" } as const;
    const slug = "king-of-prism-sss-2019";
    const title = searchCatalog(index, { ...filters, query: "星光王子", scope: "anime" });
    expect(title.map(({ anime: item }) => item.slug)).toEqual([slug]);
    for (const [query, type, expected] of [
      ["小林竜之", "ED", ["JOY"]], ["杉田智和", "ED", []], ["TRF", "ED", []],
      ["寺島惇太", "OP", ["Shiny Seven Stars!"]], ["寺島惇太", "ED", ["BRAND NEW TOMORROW", "BOY MEETS GIRL"]]
    ] as const) {
      const result = searchCatalog(index, { ...filters, query, type, scope: "creators" }).find(({ anime: item }) => item.slug === slug);
      expect(result?.themes.map(({ titleJa }) => titleJa) ?? []).toEqual(expected);
    }
  });

  it("identifies Hangyaku's second TV season without importing the first season or unaired special", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-hangyakusei-million-arthur-2-2019")!;
    expect(seed).toMatchObject({ startDate: "2019-04-04", editorialWeekday: 4, broadcastTimeJst: "22:00", seasonIds: ["2019-spring"] });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "hangyakusei-million-arthur-2-2019", titleJa: "叛逆性ミリオンアーサー 第2シーズン", titleZhHant: "叛逆性百萬亞瑟王 第二季", status: "finished" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://prtimes.jp/main/html/rd/p/000000190.000031422.html", role: "identifier", language: "ja" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://youranimes.tw/bangumi/201904", role: "localized_cross_check", language: "zh-Hant" }));
    expect(detail.sources.some(({ url }) => url.includes("hangyakusei-anime.com"))).toBe(false);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("keeps Hangyaku's original ending separate from ORESAMA's Funkapop cover and unverified credits", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-hangyakusei-million-arthur-2-2019")!.themes;
    expect(themes.map(({ type, sequence, titleJa, artistDisplayName, releaseDate }) => [type, sequence, titleJa, artistDisplayName, releaseDate])).toEqual([
      ["OP", 1, "OPEN THE WORLDS", "ORESAMA", "2019-04-24"],
      ["ED", 1, "PEARLY×PARTY", "パーリィ☆フェアリィ", "2019-05-22"]
    ]);
    expect(themes[0]?.versionLabel).toBe("第二季 TV OP／CD：2019-04-24；mora 先行配信：2019-04-11，其他平台：2019-04-18");
    expect(themes[0]?.credits).toEqual([
      { name: "ぽん", role: "lyrics" }, { name: "小島英也", role: "composition" }, { name: "小島英也", role: "arrangement" }
    ]);
    expect(themes[1]?.versionLabel).toBe("第二季 TV ED／原演唱組合單曲版；個別演唱及製作署名待核對");
    expect(themes[1]?.credits).toEqual([]);
    expect(themes.some(({ titleJa }) => /Funkapop|Distorted Fairy|ハイライト|KI-te MI-te/.test(titleJa))).toBe(false);
  });

  it("retains Hangyaku's current publisher page and official full opening video without unavailable ending media", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-hangyakusei-million-arthur-2-2019")!.themes;
    for (const theme of themes) {
      expect(theme.lastVerifiedAt).toBe("2026-09-08");
      expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-08")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://anison.online/anime/1105", role: "cross_check", language: "ja" }));
    }
    expect(themes[0]?.sources).toContainEqual(expect.objectContaining({ url: "https://www.orsm.jp/discography/open-the-worlds/", role: "first_party" }));
    expect(themes[1]?.sources).toContainEqual(expect.objectContaining({ url: "https://catalog.bandainamcomusiclive.co.jp/release/68378/", role: "first_party" }));
    expect(themes[0]?.videos).toHaveLength(1);
    expect(themes[0]?.videos[0]).toMatchObject({ youtubeVideoId: "0UmEg8PDV3Y", type: "full_music_video", channelName: "Lantis Channel", officialStatus: "official", embeddable: true });
    expect(themes[1]?.videos).toEqual([]);
  });

  it("finds Hangyaku's reviewed titles and writers without assigning cover singers or inferred ending credits", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const filters = { year: "2019", quarter: "spring", type: "all" } as const;
    const slug = "hangyakusei-million-arthur-2-2019";
    const title = searchCatalog(index, { ...filters, query: "叛逆性百萬亞瑟王", scope: "anime" });
    expect(title.map(({ anime: item }) => item.slug)).toEqual([slug]);
    for (const [query, type, expected] of [
      ["ORESAMA", "OP", ["OPEN THE WORLDS"]], ["ORESAMA", "ED", []],
      ["小島英也", "OP", ["OPEN THE WORLDS"]], ["小島英也", "ED", []],
      ["パーリィ☆フェアリィ", "ED", ["PEARLY×PARTY"]]
    ] as const) {
      const result = searchCatalog(index, { ...filters, query, type, scope: "creators" }).find(({ anime: item }) => item.slug === slug);
      expect(result?.themes.map(({ titleJa }) => titleJa) ?? []).toEqual(expected);
    }
    expect(searchCatalog(index, { ...filters, query: "PEARLY×PARTY -Funkapop ver.-", scope: "songs" })).toEqual([]);
  });

  it("identifies CLIMAX SEASON as the 2019 TV quarter separately from Extra Stage and game-only shorts", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-cinderella-girls-climax-2019")!;
    expect(seed).toMatchObject({ startDate: "2019-04-02", editorialWeekday: 2, broadcastTimeJst: "21:54", seasonIds: ["2019-spring"] });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "cinderella-girls-climax-2019", titleJa: "アイドルマスター シンデレラガールズ劇場 CLIMAX SEASON", titleZhHant: "灰姑娘女孩劇場 第四季：CLIMAX SEASON", status: "finished" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://idolmaster.jp/blog/?p=58033", role: "identifier", language: "ja" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://youranimes.tw/bangumi/201904", role: "localized_cross_check", language: "zh-Hant" }));
    const extra = anime(115519);
    expect(extra.slug).toBe("cinderella-girls-gekijou-extra-stage");
    expect(extra.id).not.toBe(detail.id);
    expect(extra.themes.some(({ titleJa }) => detail.themes.some((theme) => theme.titleJa === titleJa))).toBe(false);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("keeps CLIMAX SEASON's three monthly ensemble endings distinct from CD solos and bonus tracks", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-cinderella-girls-climax-2019")!.themes;
    expect(themes.map(({ type, sequence, titleJa, releaseDate }) => [type, sequence, titleJa, releaseDate])).toEqual([
      ["ED", 1, "きゅん・きゅん・まっくす", "2019-04-17"],
      ["ED", 2, "Max Beat", "2019-05-22"],
      ["ED", 3, "TAKAMARI☆CLIMAXXX!!!!!", "2019-06-19"]
    ]);
    const singers = [
      ["藍原ことみ", "中島由貴", "都丸ちよ", "高森奈津美", "藤本彩花"],
      ["早見沙織", "森下来奈", "青木志貴", "千菅春香", "村中知"],
      ["深川芹亜", "武田羅梨沙多胡", "神谷早矢佳", "赤﨑千夏", "杜野まこ"]
    ];
    for (const [index, theme] of themes.entries()) {
      expect(theme.versionLabel).toContain(`TV ${index + 4} 月 ED`);
      expect(theme.versionLabel).toContain("CD 完整版；官方試聽短版");
      expect(theme.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual(singers[index]);
      for (const singer of singers[index]!) expect(theme.artistDisplayName).toContain(`CV：${singer}`);
    }
    expect(themes[0]?.credits.filter(({ role }) => role !== "vocals")).toEqual([
      { name: "坂井竜二", role: "lyrics" }, { name: "BNSI（kyo）", role: "composition" }
    ]);
    expect(themes[1]?.credits.filter(({ role }) => role !== "vocals")).toEqual([
      { name: "渡部紫緒", role: "lyrics" }, { name: "坂部剛", role: "composition" }, { name: "坂部剛", role: "arrangement" }
    ]);
    expect(themes[2]?.credits.filter(({ role }) => role !== "vocals")).toEqual([
      { name: "広川恵一（MONACA）", role: "lyrics" }, { name: "広川恵一（MONACA）", role: "composition" }, { name: "広川恵一（MONACA）", role: "arrangement" }
    ]);
    expect(themes.flatMap(({ credits }) => credits).some(({ name }) => ["天野聡美", "原田彩楓", "高田憂希"].includes(name))).toBe(false);
  });

  it("retains dated CLIMAX SEASON source evidence and official audio previews without treating them as full videos", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-cinderella-girls-climax-2019")!.themes;
    const news = ["190405", "190510", "190607"];
    const videos = ["QkO1DC96kIM", "bqUcdQSW3qA", "gBvq0uP4Hos"];
    for (const [index, theme] of themes.entries()) {
      expect(theme.lastVerifiedAt).toBe("2026-09-08");
      expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-08")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: `https://columbia.jp/idolmaster/imasnews/${news[index]}.html`, role: "first_party", language: "ja" }));
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://anison.online/anime/1069", role: "cross_check", language: "ja" }));
      expect(theme.videos).toHaveLength(1);
      expect(theme.videos[0]).toMatchObject({ youtubeVideoId: videos[index], type: "official_audio", channelName: "日本コロムビア 公式YouTubeチャンネル", officialStatus: "official", embeddable: true });
      expect(theme.videos[0]?.title).toContain(theme.titleJa);
    }
  });

  it("finds CLIMAX SEASON by Chinese title, individual vocalists and exact song writers in its own quarter", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const options = { year: "2019", quarter: "spring", type: "ED" } as const;
    const titleResults = searchCatalog(index, { ...options, query: "灰姑娘女孩劇場", scope: "anime" });
    expect(titleResults.map(({ anime: item }) => item.slug)).toEqual(["cinderella-girls-climax-2019"]);
    for (const [query, title] of [["藤本彩花", "きゅん・きゅん・まっくす"], ["森下来奈", "Max Beat"], ["広川恵一（MONACA）", "TAKAMARI☆CLIMAXXX!!!!!"]]) {
      const results = searchCatalog(index, { ...options, query: query!, scope: "creators" });
      expect(results.map(({ anime: item }) => item.slug)).toEqual(["cinderella-girls-climax-2019"]);
      expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual([title]);
    }
    expect(searchCatalog(index, { ...options, query: "TAKAMARI☆CLIMAXXX!!!!!", scope: "songs", type: "OP" })).toEqual([]);
  });

  it("identifies the 2019 Yo-kai Watch TV series independently from the 2021 musical-note sequel", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-youkai-watch-2019")!;
    expect(seed).toMatchObject({ startDate: "2019-04-05", editorialWeekday: 5, broadcastTimeJst: "18:25", seasonIds: ["2019-spring"] });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "youkai-watch-2019", titleJa: "妖怪ウォッチ！", titleZhHant: "妖怪手錶！", status: "finished" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.youkai-watch.jp/topics/190215.html", role: "identifier", language: "ja" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://youranimes.tw/bangumi/201904", role: "localized_cross_check", language: "zh-Hant" }));
    const sequel = anime(130445);
    expect(sequel).toMatchObject({ slug: "youkai-watch", titleJa: "妖怪ウォッチ♪" });
    expect(sequel.id).not.toBe(detail.id);
    expect(sequel.themes.some(({ titleJa }) => detail.themes.some((theme) => theme.titleJa === titleJa))).toBe(false);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("preserves Yo-kai Watch's 2019 singers, shared lyricists and CD dates without importing piano arrangements or coupling tracks", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-youkai-watch-2019")!.themes;
    expect(themes.map(({ type, sequence, titleJa, artistDisplayName, releaseDate }) => [type, sequence, titleJa, artistDisplayName, releaseDate])).toEqual([
      ["OP", 1, "ケラケラホーのうた", "紘毅", "2019-06-05"],
      ["ED", 1, "ようかい体操第一 ～つづき～", "かえで☆", "2019-06-05"]
    ]);
    expect(themes[0]?.credits).toEqual([
      { name: "紘毅", role: "vocals" }, { name: "高木貴司", role: "lyrics" },
      { name: "紘毅", role: "composition" }, { name: "菊谷知樹", role: "arrangement" }
    ]);
    expect(themes[1]?.credits).toEqual([
      { name: "かえで☆", role: "vocals" }, { name: "ラッキィ池田", role: "lyrics" }, { name: "高木貴司", role: "lyrics" },
      { name: "菊谷知樹", role: "composition" }, { name: "菊谷知樹", role: "arrangement" }
    ]);
    for (const theme of themes) expect(theme.versionLabel).toContain("CD 完整版");
    expect(themes[0]?.versionLabel).toContain("MV 短版");
    expect(themes[1]?.versionLabel).toContain("振付影片為短版");
    expect(themes.flatMap(({ credits }) => credits).some(({ name }) => ["川田千春", "青山しおり", "Dream5"].includes(name))).toBe(false);
  });

  it("retains independently reviewed Yo-kai Watch music sources and playable official video editions", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-youkai-watch-2019")!.themes;
    for (const theme of themes) {
      expect(theme.lastVerifiedAt).toBe("2026-09-07");
      expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-07")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://anison.online/anime/1122", role: "cross_check", language: "ja" }));
      expect(theme.sources.some(({ url }) => ["avex.jp", "avexnet.jp", "www.avexnet.jp", "www.anisil.com"].includes(new URL(url).hostname))).toBe(false);
    }
    expect(themes[0]?.sources).toContainEqual(expect.objectContaining({ url: "https://maekawakikaku.co.jp/news/archives/2019/20190604_837.html", role: "first_party" }));
    expect(themes[1]?.sources).toContainEqual(expect.objectContaining({ url: "https://popholic.jp/archives/12212", role: "first_party" }));
    expect(themes[0]?.videos.map(({ youtubeVideoId }) => youtubeVideoId)).toEqual(["qWcfCWkb9gw"]);
    expect(themes[1]?.videos.map(({ youtubeVideoId }) => youtubeVideoId)).toEqual(["dYmvbaxuzGo", "BOiLAwterTg"]);
    expect(themes.flatMap(({ videos }) => videos).every(({ officialStatus, embeddable, type }) => officialStatus === "official" && embeddable && type === "other")).toBe(true);
    expect(themes[0]?.videos[0]?.title).toContain("short ver.");
    expect(themes[1]?.videos[1]?.title).toContain("振りビデオ(short ver.)");
    expect(themes.flatMap(({ sources }) => sources).some(({ url }) => url.includes("aEAsIwEmhHQ"))).toBe(false);
  });

  it("finds Yo-kai Watch's 2019 title and original song creators within the correct quarter", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const options = { year: "2019", quarter: "spring" } as const;
    const titleResults = searchCatalog(index, { ...options, query: "妖怪手錶", scope: "anime", type: "all" });
    expect(titleResults.map(({ anime: item }) => item.slug)).toEqual(["youkai-watch-2019"]);
    for (const [query, type, title] of [["紘毅", "OP", "ケラケラホーのうた"], ["ラッキィ池田", "ED", "ようかい体操第一 ～つづき～"]] as const) {
      const results = searchCatalog(index, { ...options, query, scope: "creators", type });
      expect(results.map(({ anime: item }) => item.slug)).toEqual(["youkai-watch-2019"]);
      expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual([title]);
    }
    expect(searchCatalog(index, { ...options, query: "ケラケラホーのうた", scope: "songs", type: "OP", year: "2021" })).toEqual([]);
  });

  it("identifies Bakugan Battle Planet by its 2019 Japanese TV premiere and the Taiwanese broadcaster's title", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-bakugan-battle-planet-2019")!;
    expect(seed).toMatchObject({ startDate: "2019-04-01", editorialWeekday: 1, broadcastTimeJst: "17:55", seasonIds: ["2019-spring"] });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "bakugan-battle-planet-2019", titleJa: "爆丸バトルプラネット", titleZhHant: "爆丸 決戰星球", status: "finished" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.tv-tokyo.co.jp/anime/bakugan-bp/onair/", role: "identifier", language: "ja" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.youtube.com/watch?v=9yiBbt820uo", role: "first_party", language: "zh-Hant" }));
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("keeps Bakugan's Japanese opening and two endings distinct from localized songs and unconfirmed release dates", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-bakugan-battle-planet-2019")!.themes;
    expect(themes.map(({ type, sequence, titleJa, artistDisplayName }) => [type, sequence, titleJa, artistDisplayName])).toEqual([
      ["OP", 1, "情熱ジャンボリー", "HiHi Jets"],
      ["ED", 1, "Be my story", "HiHi Jets"],
      ["ED", 2, "サヨナラの方程式", "HiHi Jets"]
    ]);
    for (const theme of themes) {
      expect(theme.versionLabel).toContain("日本播出版");
      expect(theme.releaseDate).toBeUndefined();
      expect(theme.videos).toEqual([]);
      expect(theme.links.some(({ platform }) => platform === "YouTube")).toBe(false);
    }
    expect(themes[2]?.versionLabel).toContain("後期 ED");
    expect(themes[0]?.credits.filter(({ role }) => role === "composition")).toEqual([
      { name: "川口進", role: "composition" }, { name: "MiNE", role: "composition" }, { name: "Atsushi Shimada", role: "composition" }
    ]);
    expect(themes[0]?.credits.filter(({ role }) => role === "arrangement")).toEqual([
      { name: "Atsushi Shimada", role: "arrangement" }, { name: "Peach", role: "arrangement" }
    ]);
    expect(themes[1]?.credits).toEqual([
      { name: "HiHi Jets", role: "vocals" }, { name: "中村崇人", role: "lyrics" },
      { name: "中村崇人", role: "composition" }, { name: "Dr.Dalmatian", role: "arrangement" }
    ]);
    expect(themes[2]?.credits).toEqual([
      { name: "HiHi Jets", role: "vocals" }, { name: "miyakei", role: "lyrics" },
      { name: "大智", role: "composition" }, { name: "児山啓介", role: "composition" }
    ]);
  });

  it("preserves independent first-party song evidence and actual verification dates for Bakugan", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-bakugan-battle-planet-2019")!.themes;
    for (const theme of themes) {
      expect(theme.lastVerifiedAt).toBe("2026-09-07");
      expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-07")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://japan-anime-song.com/bakumarubatorupuranetto-anison/", role: "cross_check", language: "ja" }));
      expect(theme.sources.some(({ url }) => url.includes("anisil.com") || url.includes("tms-e.co.jp"))).toBe(false);
    }
    expect(themes[0]?.sources).toContainEqual(expect.objectContaining({ url: "https://www.sega.jp/topics/detail/190306_goods_1/", role: "first_party" }));
    expect(themes[1]?.sources).toContainEqual(expect.objectContaining({ url: "https://onetrap.ageha.net/archives/onetrap_news/0067", role: "first_party" }));
    expect(themes[2]?.sources).toContainEqual(expect.objectContaining({ url: "https://www.tv-tokyo.co.jp/anime/bakugan-bp/staff/", role: "first_party" }));
  });

  it("finds Bakugan by its Chinese title, opening co-arranger and second-ending co-composer without leaking into another quarter", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const options = { year: "2019", quarter: "spring" } as const;
    const titleResults = searchCatalog(index, { ...options, query: "爆丸 決戰星球", scope: "anime", type: "all" });
    expect(titleResults.map(({ anime: item }) => item.slug)).toEqual(["bakugan-battle-planet-2019"]);
    for (const [query, type, title] of [["Peach", "OP", "情熱ジャンボリー"], ["児山啓介", "ED", "サヨナラの方程式"]] as const) {
      const results = searchCatalog(index, { ...options, query, scope: "creators", type });
      expect(results.map(({ anime: item }) => item.slug)).toEqual(["bakugan-battle-planet-2019"]);
      expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual([title]);
    }
    expect(searchCatalog(index, { ...options, query: "HiHi Jets", scope: "creators", type: "all", quarter: "summer" })).toEqual([]);
  });

  it("identifies 501 Takeoff as the 2019 TV short on its Tuesday editorial premiere without borrowing a sequel identity", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-strike-witches-501-2019")!;
    expect(seed).toMatchObject({ startDate: "2019-04-09", seasonIds: ["2019-spring"], verifiedAt: "2026-09-07" });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "strike-witches-501-takeoff-2019", titleJa: "ストライクウィッチーズ 501部隊発進しますっ！", titleZhHant: "強襲魔女 501部隊出動！", editorialWeekday: 2, broadcastTimeJst: "24:45" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl", "imageSourceUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://w-witch.jp/501_takeoff/onair/", role: "identifier", language: "ja" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://youranimes.tw/bangumi/201904", role: "localized_cross_check", language: "zh-Hant" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://youranimes.tw/animes/1192", language: "zh-Hant" }));
    expect(spring.anime.filter(({ id }) => id === seed.id)).toHaveLength(1);
    expect(anime(121681).slug).toBe("world-witches-hasshin-shimasu");
    expect(spring.anime.some(({ id }) => id === "curated-121681")).toBe(false);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("keeps the 501 Takeoff opening CD date, full credits and short music-video edition separate", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-strike-witches-501-2019")!.themes;
    expect(themes.filter(({ type }) => type === "OP")).toHaveLength(1);
    expect(themes[0]).toMatchObject({ type: "OP", sequence: 1, titleJa: "空が呼ぶほうへ", artistDisplayName: "石田燿子", releaseDate: "2019-04-24" });
    expect(themes[0]?.versionLabel).toContain("短版 MV");
    expect(themes[0]?.credits).toEqual([
      { name: "石田燿子", role: "vocals" }, { name: "ミズノゲンキ", role: "lyrics" },
      { name: "睦月周平", role: "composition" }, { name: "睦月周平", role: "arrangement" }
    ]);
    expect(themes[0]?.videos[0]).toMatchObject({ youtubeVideoId: "h4Ckhm3c6d0", type: "other", officialStatus: "official" });
  });

  it("retains all twelve 501 Takeoff TV ending performers without adding film, instrumental or medley tracks or disputed composition", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-strike-witches-501-2019")!.themes;
    const endings = themes.filter(({ type }) => type === "ED");
    expect(themes).toHaveLength(13);
    expect(endings.map(({ sequence, titleJa, artistDisplayName }) => [sequence, titleJa, artistDisplayName])).toEqual([
      [1, "Treasure of life #1", "宮藤芳佳（CV：福圓美里）"],
      [2, "Treasure of life #2", "エーリカ・ハルトマン（CV：野川さくら）"],
      [3, "Treasure of life #3", "ミーナ・ディートリンデ・ヴィルケ（CV：田中理恵）"],
      [4, "Treasure of life #4", "ゲルトルート・バルクホルン（CV：園崎未恵）"],
      [5, "Treasure of life #5", "坂本美緒（CV：世戸さおり）"],
      [6, "Treasure of life #6", "シャーロット・E・イェーガー（CV：小清水亜美）"],
      [7, "Treasure of life #7", "フランチェスカ・ルッキーニ（CV：斎藤千和）"],
      [8, "Treasure of life #8", "サーニャ・V・リトヴャク（CV：門脇舞以）"],
      [9, "Treasure of life #9", "エイラ・イルマタル・ユーティライネン（CV：大橋歩夕）"],
      [10, "Treasure of life #10", "リネット・ビショップ（CV：名塚佳織）"],
      [11, "Treasure of life #11", "ペリーヌ・クロステルマン（CV：沢城みゆき）"],
      [12, "Treasure of life #12", "第501統合戦闘航空団"]
    ]);
    for (const ending of endings) {
      expect(ending.releaseDate).toBe("2019-06-26");
      expect(ending.versionLabel).toContain(`TV 輪替 ED #${ending.sequence}／CD 完整版`);
      expect(ending.versionLabel).toContain("作曲署名待核對");
      expect(ending.credits.filter(({ role }) => role === "composition")).toEqual([]);
      expect(ending.credits).toContainEqual({ name: "荘野ジュリ", role: "lyrics" });
      expect(ending.credits).toContainEqual({ name: "滝澤俊輔", role: "arrangement" });
    }
    expect(endings[1]?.credits.filter(({ role }) => role === "vocals")).toEqual([{ name: "野川さくら", role: "vocals" }]);
    expect(endings[11]?.credits.filter(({ role }) => role === "vocals")).toEqual([{ name: "第501統合戦闘航空団", role: "vocals" }]);
  });

  it("ties the 501 Takeoff ending preview only to version twelve and preserves dated first-party and cross-check evidence", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-strike-witches-501-2019")!.themes;
    expect(themes.slice(1, 12).flatMap(({ videos }) => videos)).toEqual([]);
    expect(themes[12]?.videos).toEqual([expect.objectContaining({ youtubeVideoId: "63fWLXw7ylY", type: "official_audio", channelName: "日本コロムビア 公式YouTubeチャンネル", officialStatus: "official", embeddable: true })]);
    expect(themes[12]?.versionLabel).toContain("官方影片為試聽短版");
    for (const theme of themes) {
      expect(theme.lastVerifiedAt).toBe("2026-09-07");
      expect(theme.sources.every(({ verifiedAt }) => verifiedAt === "2026-09-07")).toBe(true);
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://www.animatetimes.com/tag/details.php?id=15506", role: "cross_check", language: "ja" }));
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://columbia.jp/artist-info/ishidayoko/info/64416.html", role: "first_party", language: "ja" }));
      if (theme.type === "ED") expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://columbia.jp/prod-info/COCX-40890/", role: "first_party" }));
    }
  });

  it("finds the 501 Takeoff TV work by Chinese title and narrows an individual actor to the correct ending version", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const options = { year: "2019", quarter: "spring", type: "all" } as const;
    const byTitle = searchCatalog(index, { ...options, query: "強襲魔女 501部隊出動", scope: "anime" });
    expect(byTitle.map(({ anime: item }) => item.slug)).toEqual(["strike-witches-501-takeoff-2019"]);
    const actorOptions = { ...options, query: "野川さくら", scope: "creators", type: "ED" } as const;
    const byActor = searchCatalog(index, actorOptions);
    expect(byActor.map(({ anime: item }) => item.slug)).toEqual(["strike-witches-501-takeoff-2019"]);
    expect(byActor[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["Treasure of life #2"]);
    expect(searchCatalog(index, { ...actorOptions, quarter: "summer" })).toEqual([]);
    expect(searchCatalog(index, { ...actorOptions, query: "服部静夏" })).toEqual([]);
  });

  it("identifies Gonjiro's April TV premiere with independent evidence and no invented external ID or romanized title", async () => {
    const seed = curated2019SpringSeeds.find(({ id }) => id === "catalog-gonjiro-2019")!;
    expect(seed).toMatchObject({ startDate: "2019-04-06", seasonIds: ["2019-spring"], verifiedAt: "2026-09-07" });
    const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
    expect(detail).toMatchObject({ slug: "gonjiro-2019", titleJa: "けだまのゴンじろー", titleZhHant: "毛球權次郎", editorialWeekday: 6, broadcastTimeJst: "10:00" });
    for (const omitted of ["anilistId", "anilistUrl", "titleRomaji", "posterUrl", "bannerUrl"]) {
      expect(seed).not.toHaveProperty(omitted);
      expect(detail).not.toHaveProperty(omitted);
    }
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://www.tv-tokyo.co.jp/anime/gonjiro/onair/", role: "identifier", language: "ja" }));
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://youranimes.tw/bangumi/201904", role: "localized_cross_check", language: "zh-Hant" }));
    expect(spring.anime.filter(({ id }) => id === seed.id)).toHaveLength(1);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("keeps Gonjiro's TV edits separate from the full CD date and preserves each co-writer", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-gonjiro-2019")!.themes;
    expect(themes.map(({ type, sequence, titleJa, artistDisplayName, releaseDate }) => [type, sequence, titleJa, artistDisplayName, releaseDate])).toEqual([
      ["OP", 1, "レッツ！ゴンじろー", "CHAI", "2019-07-24"],
      ["ED", 1, "わさわさわさ！", "デーモン閣下", "2019-07-24"]
    ]);
    expect(themes[0]?.versionLabel).toContain("アニメオープニングver.");
    expect(themes[1]?.versionLabel).toContain("アニメエンディングver.");
    expect(themes[1]?.versionLabel).toContain("2019-04-06");
    expect(themes[0]?.credits).toEqual([
      { name: "ユウキ", role: "lyrics" }, { name: "マナ", role: "composition" },
      { name: "カナ", role: "composition" }, { name: "CHAI", role: "arrangement" }
    ]);
    expect(themes[1]?.credits).toEqual([
      { name: "デーモン閣下", role: "lyrics" }, { name: "デーモン閣下", role: "composition" },
      { name: "pal@pop", role: "composition" }, { name: "pal@pop", role: "arrangement" }
    ]);
  });

  it("attaches Gonjiro's permitted creator upload to its ending with the original language and edition", () => {
    const themes = curatedAnimeDetails.find(({ id }) => id === "catalog-gonjiro-2019")!.themes;
    expect(themes[0]?.videos).toEqual([]);
    expect(themes[1]?.videos).toEqual([{
      youtubeVideoId: "GrWK6BJwziI",
      title: "TVアニメ『けだまのゴンじろー』ノンクレジットED / デーモン閣下「わさわさわさ！」",
      type: "creditless_ed", channelName: "Tomoki Misato", officialStatus: "licensed", embeddable: true
    }]);
    expect(themes[1]?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.bunka.go.jp/j-mediaarts/animation2021/creators_file_2021/misato/index.html", language: "en", role: "cross_check"
    }));
    expect(themes[1]?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.sonymusic.co.jp/artist/DemonKakka/info/505719", role: "first_party"
    }));
    for (const theme of themes) {
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://www.sonymusic.co.jp/artist/DemonKakka/info/507323", role: "first_party" }));
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://japan-anime-song.com/kedamanogonjiroo-anison/", role: "cross_check" }));
    }
  });

  it("finds Gonjiro by Chinese and Japanese titles and its opening or ending co-composers", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    for (const query of ["毛球權次郎", "けだまのゴンじろー"]) {
      const result = searchCatalog(index, { query, scope: "anime", year: "2019", quarter: "spring", type: "all" });
      expect(result.map(({ anime: item }) => item.slug)).toEqual(["gonjiro-2019"]);
    }
    for (const [query, type, title] of [["マナ カナ", "OP", "レッツ！ゴンじろー"], ["pal@pop", "ED", "わさわさわさ！"]] as const) {
      const result = searchCatalog(index, { query, scope: "creators", year: "2019", quarter: "spring", type });
      expect(result.map(({ anime: item }) => item.slug)).toEqual(["gonjiro-2019"]);
      expect(result[0]?.themes.map(({ titleJa }) => titleJa)).toEqual([title]);
    }
  });

  it("identifies THE ORIGIN as the thirteen-part TV recut with its Monday premiere and independent public evidence", async () => {
    const seed = curated2019SpringSeeds.find(({ anilistId }) => anilistId === 108039)!;
    expect(seed).toMatchObject({ startDate: "2019-04-29", seasonIds: ["2019-spring"] });
    expect(seed.sourceReferenceUrls).toEqual(["https://uzurea.net/vc/187936/"]);
    const detail = anime(108039);
    expect(detail).toMatchObject({ editorialWeekday: 1, broadcastTimeJst: "00:35" });
    expect(detail.broadcastLabel).toContain("13 話電視重編版");
    expect(detail.sources).toContainEqual(expect.objectContaining({
      url: "https://www.gundam-the-origin.net/tv/episodes01.html", language: "ja", role: "identifier"
    }));
    expect(detail.posterUrl).toBeUndefined();
    expect(detail.imageSourceUrl).toBeUndefined();
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("preserves THE ORIGIN's seven TV themes and their original releases instead of other singers or anniversary-album dates", () => {
    const themes = anime(108039).themes;
    expect(themes.map(({ type, sequence, titleJa, artistDisplayName, releaseDate }) => [type, sequence, titleJa, artistDisplayName, releaseDate])).toEqual([
      ["OP", 1, "宇宙の詩 ～Higher and Higher～", "LUNA SEA", "2019-05-29"],
      ["OP", 2, "悲壮美", "LUNA SEA", "2019-05-29"],
      ["OP", 3, "BEYOND THE TIME ～メビウスの宇宙を越えて～", "LUNA SEA", "2019-09-06"],
      ["ED", 1, "めぐりあい", "SUGIZO feat. GLIM SPANKY", "2019-06-11"],
      ["ED", 2, "水の星へ愛をこめて", "SUGIZO feat. コムアイ（水曜日のカンパネラ）", "2019-06-18"],
      ["ED", 3, "A Red Ray", "SUGIZO feat. miwa", "2019-06-25"],
      ["ED", 4, "光の涯", "SUGIZO feat. アイナ・ジ・エンド（BiSH）", "2019-08-13"]
    ]);
    expect(themes[0]?.versionLabel).toContain("CD 單曲版");
    expect(themes[2]?.versionLabel).toContain("LUNA SEA 翻唱版");
    for (const index of [3, 4, 5, 6]) expect(themes[index]?.versionLabel).toContain("TV Size");
    expect(themes[6]?.versionLabel).toContain("最終話 ED");
    expect(themes.some(({ titleJa }) => ["THE BEYOND", "By Your Side", "Don't Say Good bye", "破線の涙"].includes(titleJa))).toBe(false);
  });

  it("keeps THE ORIGIN's original songwriters, new arrangements and featured singers separate", () => {
    const themes = anime(108039).themes;
    expect(themes[0]?.credits).toEqual([]);
    expect(themes[1]?.credits).toEqual([]);
    expect(themes[2]?.credits).toEqual([
      { name: "小室みつ子", role: "lyrics" }, { name: "小室哲哉", role: "composition" }, { name: "LUNA SEA", role: "arrangement" }
    ]);
    expect(themes[3]?.credits.filter(({ role }) => role === "lyrics").map(({ name }) => name)).toEqual(["井荻麟", "売野雅勇"]);
    expect(themes[4]?.credits).toContainEqual({ name: "ニール・セダカ", role: "composition" });
    expect(themes[4]?.credits).toContainEqual({ name: "コムアイ（水曜日のカンパネラ）", role: "vocals" });
    expect(themes[5]?.credits).toContainEqual({ name: "miwa", role: "lyrics" });
    expect(themes[6]?.credits).toContainEqual({ name: "MORRIE", role: "lyrics" });
    expect(themes[6]?.credits.filter(({ role }) => role === "vocals")).toEqual([{ name: "アイナ・ジ・エンド（BiSH）", role: "vocals" }]);
    for (const index of [3, 4, 5, 6]) expect(themes[index]?.credits).toContainEqual({ name: "SUGIZO", role: "arrangement" });
    for (const theme of themes) expect(theme.sources).toContainEqual(expect.objectContaining({
      url: "https://uzurea.net/vc/187936/", language: "ja", role: "cross_check"
    }));
  });

  it("finds the new ORIGIN cover by songwriter and keeps the episode-twelve ending as a second video for the same song", async () => {
    const detail = anime(108039);
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const result = searchCatalog(index, { query: "ニール・セダカ", scope: "creators", year: "2019", quarter: "spring", type: "ED" })
      .find(({ anime: item }) => item.slug === detail.slug);
    expect(result?.themes.map(({ titleJa }) => titleJa)).toEqual(["水の星へ愛をこめて"]);
    expect(detail.themes[5]?.videos.map(({ youtubeVideoId }) => youtubeVideoId)).toEqual(["h5t3-RSyIzE", "Nnzm6h4fIRQ"]);
    expect(detail.themes[5]?.videos[1]?.title).toContain("第12話版");
    const videos = detail.themes.flatMap(({ videos }) => videos);
    expect(videos).toHaveLength(8);
    expect(videos.every(({ type, officialStatus }) => type === "other" && officialStatus === "official")).toBe(true);
  });

  it("keeps the 2019 Diamond no Ace act II identity separate from its later sequel and round-trips its public detail", async () => {
    const seed = curated2019SpringSeeds.find(({ anilistId }) => anilistId === 105749)!;
    expect(seed).toMatchObject({ startDate: "2019-04-02", seasonIds: ["2019-spring"] });
    expect(seed.animeThemesUrl).toBeUndefined();
    const detail = anime(105749);
    expect(detail).toMatchObject({ slug: "diamond-no-ace-act-ii", editorialWeekday: 2, broadcastTimeJst: "17:55" });
    expect(anime(177634).slug).toBe("diamond-no-ace-act-ii-second-season");
    expect(detail.sources).toContainEqual(expect.objectContaining({
      url: "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/22856_201904021755.html", role: "first_party"
    }));
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("preserves six original Diamond themes, CD editions and complete co-arrangers without importing later covers", () => {
    const themes = anime(105749).themes;
    expect(themes.map(({ type, sequence, titleJa, artistDisplayName, releaseDate }) => [type, sequence, titleJa, artistDisplayName, releaseDate])).toEqual([
      ["OP", 1, "はじまりのうた", "GLAY", "2019-07-02"],
      ["OP", 2, "流星のHowl", "GLAY", "2020-08-12"],
      ["ED", 1, "ゴールデンアフタースクール", "OxT", "2019-04-17"],
      ["ED", 2, "鼓動エスカレーション", "内田真礼", "2019-07-10"],
      ["ED", 3, "チャンス！", "三森すずこ", "2019-12-04"],
      ["ED", 4, "Everlasting Dream", "OxT", "2020-02-05"]
    ]);
    expect(themes[0]?.versionLabel).toContain("TV Size 於 2019-04-02");
    expect(themes[1]?.versionLabel).toContain("完整版 CD");
    expect(themes[3]?.credits.filter(({ role }) => role === "arrangement").map(({ name }) => name)).toEqual(["KanadeYUK", "Tom-H@ck"]);
    expect(themes[4]?.credits).toContainEqual({ name: "hotaru", role: "lyrics" });
    expect(themes[4]?.credits.filter(({ role }) => role === "arrangement").map(({ name }) => name)).toEqual(["大石昌良", "yamazo"]);
    for (const index of [2, 5]) expect(themes[index]?.credits).toEqual([]);
    for (const theme of themes) expect(theme.sources).toContainEqual(expect.objectContaining({
      url: "https://www.animatetimes.com/news/details.php?id=1776312367&p=3", role: "cross_check"
    }));
    expect(themes.some(({ titleJa }) => /OxT ver\.|Orchestra|ゆうがた|Let's Go Crazy/.test(titleJa))).toBe(false);
  });

  it("finds the original Diamond endings by lyricist and distinguishes TV openings from full video and official audio", async () => {
    const detail = anime(105749);
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const result = searchCatalog(index, { query: "hotaru", scope: "creators", year: "2019", quarter: "spring", type: "ED" })
      .find(({ anime: item }) => item.slug === detail.slug);
    expect(result?.themes.map(({ titleJa }) => titleJa)).toEqual(["鼓動エスカレーション", "チャンス！"]);
    expect(detail.themes.flatMap(({ videos }) => videos.map(({ youtubeVideoId, type }) => [youtubeVideoId, type]))).toEqual([
      ["J_OxuDSZ4ng", "other"], ["KoAH6nzLQbI", "other"], ["WS5oYfMlAR0", "other"],
      ["OgLAGtlVBho", "full_music_video"], ["MNzIIZzqAVU", "official_audio"], ["lfEObTYv0iw", "other"]
    ]);
  });

  it("keeps the 2019 YU-NO TV identity and independent cross-check sources within the public contract", async () => {
    const seed = curated2019SpringSeeds.find(({ anilistId }) => anilistId === 97995)!;
    expect(seed).toMatchObject({ startDate: "2019-04-02", seasonIds: ["2019-spring"] });
    expect(seed.animeThemesUrl).toBeUndefined();
    const detail = anime(97995);
    expect(detail).toMatchObject({ editorialWeekday: 2, broadcastTimeJst: "23:00" });
    expect(detail.sources).toContainEqual(expect.objectContaining({ url: "https://yuno-anime.com/onair/", role: "first_party" }));
    for (const theme of detail.themes) {
      expect(theme.sources).toContainEqual(expect.objectContaining({
        url: "https://www.animatetimes.com/news/details.php?id=1568793228", language: "ja", role: "cross_check"
      }));
    }
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(detail.slug)).toEqual(detail);
  });

  it("preserves YU-NO's exchanged singers and separates full-song, CD and TV-size release dates", () => {
    const yuno = anime(97995);
    expect(yuno.themes.map(({ type, sequence, titleJa, artistDisplayName, releaseDate }) => [type, sequence, titleJa, artistDisplayName, releaseDate])).toEqual([
      ["OP", 1, "この世の果てで恋を唄う少女", "亜咲花", "2019-04-17"],
      ["OP", 2, "MOTHER", "鈴木このみ", "2019-11-06"],
      ["ED", 1, "真理の鏡、剣乃ように", "鈴木このみ", "2019-05-08"],
      ["ED", 2, "神の数式", "亜咲花", "2019-10-07"]
    ]);
    expect(yuno.themes[0]?.versionLabel).toContain("2019-04-02");
    expect(yuno.themes[0]?.versionLabel).toContain("CD 於 2019-04-24");
    for (const index of [1, 3]) expect(yuno.themes[index]?.versionLabel).toContain("TV Size 於 2019-08-07");
    expect(yuno.themes[1]?.credits).toContainEqual({ name: "高木龍一（Dream Monster）", role: "arrangement" });
    expect(yuno.themes[2]?.credits).toContainEqual({ name: "白戸佑輔", role: "arrangement" });
    expect(yuno.themes[3]?.credits).toContainEqual({ name: "悠木真一", role: "arrangement" });
    for (const theme of yuno.themes) {
      expect(theme.credits).toContainEqual({ name: "志倉千代丸", role: "lyrics" });
      expect(theme.credits).toContainEqual({ name: "志倉千代丸", role: "composition" });
    }
  });

  it("finds the later YU-NO opening by arranger and keeps short official videos attached to the earlier songs", async () => {
    const yuno = anime(97995);
    expect(yuno.themes.flatMap(({ videos }) => videos.map(({ youtubeVideoId, type }) => [youtubeVideoId, type])))
      .toEqual([["OHCMAQIEkog", "other"], ["a8n8_Z28Nlo", "other"]]);
    expect(yuno.themes[1]?.videos).toEqual([]);
    expect(yuno.themes[3]?.videos).toEqual([]);
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const results = searchCatalog(buildCatalogSearchIndex(data.entries), { query: "高木龍一", scope: "creators", year: "2019", quarter: "spring", type: "OP" });
    expect(results.find(({ anime: item }) => item.slug === yuno.slug)?.themes.map(({ titleJa }) => titleJa)).toEqual(["MOTHER"]);
    expect(yuno.themes.some(({ titleJa }) => ["My Love", "Curiosity", "Raise Your Heart!!"].includes(titleJa))).toBe(false);
  });

  it("round-trips the sports series and TV shorts without inventing a missing broadcast time", async () => {
    for (const [id, date, weekday] of [
      [104989, "2019-04-07", 7], [104284, "2019-04-06", 6], [102064, "2019-04-04", 4]
    ] as const) {
      expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === id)?.startDate).toBe(date);
      const detail = anime(id);
      expect(detail.editorialWeekday).toBe(weekday);
      const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
        fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
      });
      expect(await provider.getAnime(detail.slug)).toEqual(detail);
    }
    expect(anime(104989).broadcastTimeJst).toBe("25:35");
    expect(anime(104284).broadcastTimeJst).toBeUndefined();
    expect(anime(104284).officialSiteUrl).toBeUndefined();
    expect(anime(102064).broadcastLabel).toContain("首話 18:55");
  });

  it("retains Cinderella Nine's four-character cover, production credits and distinct release dates", async () => {
    const baseball = anime(104989);
    expect(baseball.themes.map(({ type, titleJa, releaseDate }) => [type, titleJa, releaseDate])).toEqual([
      ["OP", "エチュード", "2019-05-22"], ["ED", "どんなときも。", "2019-06-17"]
    ]);
    expect(baseball.themes[0]?.versionLabel).toContain("TV Size 於 2019-05-01");
    expect(baseball.themes[1]?.versionLabel).toContain("2019-08-09");
    expect(baseball.themes[1]?.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual([
      "有原翼（CV：西田望見）", "東雲龍（CV：近藤玲奈）", "野崎夕姫（CV：南早紀）", "河北智恵（CV：井上ほの花）"
    ]);
    expect(baseball.themes[1]?.credits).toContainEqual({ name: "久下真音", role: "arrangement" });
    expect(baseball.themes[1]?.credits).toContainEqual({ name: "槇原敬之", role: "composition" });
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const results = searchCatalog(buildCatalogSearchIndex(data.entries), { query: "久下真音", scope: "creators", year: "2019", quarter: "spring", type: "ED" });
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["hachigatsu-no-cinderella-nine"]);
    expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["どんなときも。"]);
  });

  it("uses Chou Kadou Girl's official opening role and early digital ending without unverified arrangement", () => {
    const short = anime(104284);
    expect(short.themes.map(({ type, titleJa, releaseDate }) => [type, titleJa, releaseDate])).toEqual([
      ["OP", "それゆけ！恋ゴコロ", "2019-05-10"], ["ED", "ONE", "2019-04-27"]
    ]);
    expect(short.themes[0]?.credits).toContainEqual({ name: "James Panda Jr.", role: "composition" });
    expect(short.themes[0]?.credits).toContainEqual({ name: "前口 渉", role: "arrangement" });
    expect(short.themes[1]?.credits.filter(({ role }) => role === "arrangement")).toEqual([]);
    expect(short.themes.flatMap(({ videos }) => videos.map(({ youtubeVideoId, type }) => [youtubeVideoId, type])))
      .toEqual([["GfVF3xC3LuE", "full_music_video"], ["lLAPyH9IdpM", "official_audio"]]);
    expect(short.themes[1]?.sources).toContainEqual(expect.objectContaining({
      url: "https://linkco.re/X86SGTGv?lang=ja", role: "first_party", language: "ja"
    }));
  });

  it("keeps Yatogame's first season searchable without upgrading general-theme evidence or later-season songs", async () => {
    const short = anime(102064);
    expect(short).toMatchObject({ titleZhHant: "八十龜醬觀察日記", themes: [], themeAvailability: "not_announced" });
    expect(short.sources).toContainEqual(expect.objectContaining({
      url: "https://yatogame.nagoya/123henkou/", role: "first_party"
    }));
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const results = searchCatalog(buildCatalogSearchIndex(data.entries), { query: "八十龜", scope: "anime", year: "2019", quarter: "spring", type: "all" });
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["yatogame-chan-kansatsu-nikki"]);
    expect(results[0]?.themes).toEqual([]);
  });

  it("keeps editorial premiere days for split seasons and TV shorts and round-trips their public records", async () => {
    for (const [id, date, weekday, time] of [
      [104578, "2019-04-28", 7, "24:10"],
      [104454, "2019-04-09", 2, "24:30"],
      [104212, "2019-04-08", 1, "20:00"]
    ] as const) {
      expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === id)?.startDate).toBe(date);
      const detail = anime(id);
      expect(detail).toMatchObject({ editorialWeekday: weekday, broadcastTimeJst: time });
      const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
        fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(detail), { headers: { "Content-Type": "application/json" } }))
      });
      expect(await provider.getAnime(detail.slug)).toEqual(detail);
    }
    expect(anime(104454).broadcastLabel).toContain("AbemaTV 24:00");
    expect(spring.coverageNote).toContain("電視短篇");
  });

  it("separates Attack on Titan's second-part themes, TV-size dates and original digital release from CD dates", () => {
    const titan = anime(104578);
    expect(titan.themes.map(({ type, sequence, titleJa, releaseDate }) => [type, sequence, titleJa, releaseDate])).toEqual([
      ["OP", 1, "憧憬と屍の道", "2019-06-19"], ["ED", 1, "Name of Love", "2019-04-29"]
    ]);
    expect(titan.themes[0]?.versionLabel).toContain("TV Size 於 2019-04-29");
    expect(titan.themes[1]?.versionLabel).toContain("CD 於 2019-05-29");
    expect(titan.themes[1]?.credits).toEqual([
      { name: "Sohei Mishima", role: "lyrics" },
      { name: "Cinema Staff", role: "composition" },
      { name: "Youichiro Nomura", role: "composition" }
    ]);
    expect(titan.themes[0]?.credits).toContainEqual({ name: "Revo", role: "arrangement" });
    expect(titan.themes.flatMap(({ credits }) => credits.map(({ name }) => name))).not.toContain("石川由依");
    expect(titan.themes.flatMap(({ videos }) => videos.map(({ youtubeVideoId, type }) => [youtubeVideoId, type])))
      .toEqual([["czJHHta2vz8", "official_audio"], ["6321GKongXw", "other"]]);
    expect(titan.themes[1]?.sources).toContainEqual(expect.objectContaining({
      url: "https://www.youtube.com/watch?v=XV0R-5GxyyU", language: "en", role: "first_party"
    }));
  });

  it("retains Isekai Quartet's distinct character ensembles and searches the independently evidenced fifth-episode ending", async () => {
    const quartet = anime(104454);
    expect(quartet.themes.map(({ titleJa }) => titleJa)).toEqual(["異世界かるてっと", "異世界ガールズ♡トーク", "Hollow Veil"]);
    expect(quartet.themes[0]?.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual([
      "アインズ（CV：日野 聡）", "カズマ（CV：福島 潤）", "スバル（CV：小林裕介）", "ターニャ（CV：悠木 碧）"
    ]);
    expect(quartet.themes[1]?.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual([
      "アルベド（CV：原 由実）", "アクア（CV：雨宮 天）", "エミリア（CV：高橋李依）", "ターニャ（CV：悠木 碧）"
    ]);
    expect(quartet.themes[2]).toMatchObject({ type: "ED", sequence: 2, releaseDate: "2019-08-07" });
    expect(quartet.themes[2]?.versionLabel).toContain("第 5 話特別片尾");
    expect(quartet.themes[2]?.credits.filter(({ role }) => role === "lyrics").map(({ name }) => name))
      .toEqual(["nonoc", "安田史生"]);
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const results = searchCatalog(buildCatalogSearchIndex(data.entries), { query: "nonoc", scope: "creators", year: "2019", quarter: "spring", type: "ED" });
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["isekai-quartet"]);
    expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["Hollow Veil"]);
  });

  it("uses Namu Amida Butsu's anime song roles, early digital ending date and reviewed lyric video", () => {
    const namu = anime(104212);
    expect(namu.themes.map(({ titleJa }) => titleJa)).toEqual(["天唄", "ルビー"]);
    expect(namu.themes[0]?.releaseDate).toBeUndefined();
    expect(namu.themes[0]?.credits).toContainEqual({ name: "深川琴美", role: "lyrics" });
    expect(namu.themes[1]).toMatchObject({ type: "ED", releaseDate: "2019-01-15" });
    expect(namu.themes[1]?.versionLabel).toContain("專輯於 2019-03-13");
    expect(namu.themes[1]?.credits).toContainEqual({ name: "akkin", role: "arrangement" });
    expect(namu.themes[1]?.videos[0]).toMatchObject({ youtubeVideoId: "ZjOMpO535uU", type: "other", channelName: "大橋ちっぽけ" });
    expect(namu.sources).toContainEqual(expect.objectContaining({
      url: "https://prtimes.jp/main/html/rd/p/000003316.000002581.html", role: "first_party"
    }));
    expect(namu.officialSiteUrl).not.toBe("https://namuami-utena-anime.com/");
  });

  it("keeps the school-music premieres and existing sequel pages separate", () => {
    for (const [id, date, weekday, time] of [
      [105334, "2019-04-05", 5, "25:23"],
      [103302, "2019-04-06", 6, "25:00"],
      [103555, "2019-04-06", 6, "17:30"]
    ] as const) {
      expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === id)?.startDate).toBe(date);
      expect(anime(id)).toMatchObject({ editorialWeekday: weekday, broadcastTimeJst: time });
    }
    expect(anime(108891).themes.map(({ titleJa }) => titleJa)).toEqual(["Harmony", "Rainbow"]);
    expect(anime(111762).slug).toBe("fruits-basket-2nd-season");
    expect(spring.anime.some(({ id }) => id === "curated-108891" || id === "curated-111762")).toBe(false);
  });

  it("retains Fruits Basket's corrected digital dates and distinct video editions without adding an English opening", () => {
    const fruits = anime(105334);
    expect(fruits.themes.map(({ type, sequence, titleJa, releaseDate }) => [type, sequence, titleJa, releaseDate])).toEqual([
      ["OP", 1, "Again", "2019-04-12"], ["OP", 2, "Chime", "2019-07-05"],
      ["ED", 1, "Lucky Ending", "2019-04-10"], ["ED", 2, "One Step Closer", "2019-07-19"]
    ]);
    expect(fruits.themes[1]?.versionLabel).toContain("CD 於 2019-09-04 發行");
    expect(fruits.themes[0]?.versionLabel).toContain("日文原版");
    expect(fruits.themes[3]?.videos.map(({ youtubeVideoId, type }) => [youtubeVideoId, type]))
      .toEqual([["YMMAqoQ9bEY", "other"], ["YZg8DYDR_8g", "full_music_video"]]);
    expect(fruits.themes[3]?.credits).toEqual([
      { name: "Nicole Morier", role: "songwriting" },
      { name: "Drew Erickson", role: "songwriting" },
      { name: "William Aoyama", role: "songwriting" }
    ]);
    expect(fruits.themes[0]?.videos[0]?.type).toBe("other");
    expect(fruits.themes[1]?.videos[0]?.type).toBe("other");
  });

  it("preserves Speechless's co-composers and co-arrangers and searches the spring ending", async () => {
    const sound = anime(103302);
    expect(sound.themes.map(({ titleJa }) => titleJa)).toEqual(["Tone", "Speechless"]);
    expect(sound.themes[0]?.credits).toContainEqual({ name: "園田健太郎", role: "composition" });
    expect(sound.themes[1]?.credits.filter(({ role }) => role === "composition").map(({ name }) => name))
      .toEqual(["前迫潤哉", "工藤政人"]);
    expect(sound.themes[1]?.credits.filter(({ role }) => role === "arrangement").map(({ name }) => name))
      .toEqual(["工藤政人", "早川博隆"]);
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const index = buildCatalogSearchIndex(data.entries);
    const results = searchCatalog(index, { query: "工藤政人", scope: "creators", year: "2019", quarter: "spring", type: "ED" });
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["kono-oto-tomare"]);
    expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["Speechless"]);
  });

  it("keeps MIX's four 2019 themes, sole lyricist and TV-size release annotation", () => {
    const mix = anime(103555);
    expect(mix.themes.map(({ titleJa }) => titleJa)).toEqual(["イコール", "VS", "君に届くまで", "君に伝えたストーリー"]);
    expect(mix.themes[1]?.credits.filter(({ role }) => role === "arrangement").map(({ name }) => name))
      .toEqual(["近藤隆史", "田中ユウスケ", "Porno Graffitti"]);
    expect(mix.themes[2]?.credits).toContainEqual({ name: "水野良樹", role: "composition" });
    expect(mix.themes[3]?.credits).toEqual([{ name: "中園勇樹", role: "vocals" }, { name: "中園勇樹", role: "lyrics" }]);
    expect(mix.themes[3]?.versionLabel).toContain("2019-07-13");
    expect(mix.themes[3]?.versionLabel).toContain("TV Size");
    expect(mix.themes[0]?.credits).toEqual([]);
  });

  it("keeps music and adventure premieres on their original editorial day and uses the licensed Chinese name", () => {
    for (const [id, date, weekday, time] of [
      [101281, "2019-04-10", 3, "24:55"],
      [105928, "2019-04-08", 1, "23:30"],
      [106568, "2019-04-04", 4, "25:58"]
    ] as const) {
      expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === id)?.startDate).toBe(date);
      expect(anime(id)).toMatchObject({ editorialWeekday: weekday, broadcastTimeJst: time });
    }
    expect(anime(101281).titleZhHant).toBe("凱洛與塔斯黛");
    expect(anime(101281).sources).toContainEqual(expect.objectContaining({
      url: "https://www.netflix.com/tw/title/80992137", language: "zh-Hant"
    }));
  });

  it("retains Carole and Tuesday's two cour themes and singing voices without substituting dialogue actors", async () => {
    const carole = anime(101281);
    expect(carole.themes.map(({ type, sequence, titleJa }) => [type, sequence, titleJa])).toEqual([
      ["OP", 1, "Kiss Me"], ["OP", 2, "Polly Jean"], ["ED", 1, "Hold Me Now"], ["ED", 2, "Not Afraid"]
    ]);
    expect(carole.themes[0]?.credits.filter(({ role }) => role === "vocals").map(({ name }) => name))
      .toEqual(["Nai Br.XX", "Celeina Ann"]);
    expect(carole.themes[1]).toMatchObject({ releaseDate: "2019-08-28" });
    expect(carole.themes[1]?.credits).toContainEqual({ name: "LEO今井", role: "lyrics" });
    expect(carole.themes[3]?.credits.filter(({ role }) => role === "vocals")).toEqual([{ name: "Alisa", role: "vocals" }]);
    expect(carole.themes.every(({ versionLabel }) => versionLabel?.includes("TV size ver."))).toBe(true);
    for (const actor of ["島袋美由利", "市ノ瀬加那", "上坂すみれ"]) {
      expect(carole.themes.flatMap(({ credits }) => credits.map(({ name }) => name))).not.toContain(actor);
    }
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(carole), { headers: { "Content-Type": "application/json" } }))
    });
    expect(await provider.getAnime(carole.slug)).toEqual(carole);
  });

  it("distinguishes RobiHachi's release artist, solo track and additional duet without inventing a second opening", () => {
    const robi = anime(105928);
    expect(robi.themes.map(({ titleJa }) => titleJa)).toEqual(["天才のプレイリスト", "Dancing to Night 〜君への最短ワープ航路〜"]);
    expect(robi.themes[0]?.artistDisplayName).toBe("Hatchi feat. Robby（CV：河本啓佑／中井和哉）");
    expect(robi.themes[0]?.versionLabel).toContain("H☆R version");
    expect(robi.themes[0]?.credits).toEqual([{ name: "Hatchi（CV：河本啓佑）", role: "vocals" }]);
    expect(robi.themes[1]?.credits.filter(({ role }) => role === "vocals").map(({ name }) => name))
      .toEqual(["木村 昴", "徳留慎乃佑", "杉田智和"]);
    expect(robi.themes.flatMap(({ videos }) => videos).map(({ youtubeVideoId, type }) => [youtubeVideoId, type]))
      .toEqual([["YqxmjDgTLEc", "other"]]);
  });

  it("uses Bakumatsu Crisis's official ending reading and finds the separate second-cour singer", async () => {
    const bakumatsu = anime(106568);
    expect(bakumatsu.themes.map(({ titleJa }) => titleJa)).toEqual(["Brave Rejection", "青き炎"]);
    expect(bakumatsu.themes[1]?.titleRomaji).toBe("Aoki Homura");
    expect(bakumatsu.themes.every(({ releaseDate }) => releaseDate === "2019-04-17")).toBe(true);
    expect(bakumatsu.themes.every(({ credits }) => credits.length === 0)).toBe(true);
    const data = await loadCatalogSearchData(new CuratedProvider(), true);
    const index = buildCatalogSearchIndex(data.entries);
    const results = searchCatalog(index, { query: "Alisa", scope: "creators", year: "2019", quarter: "spring", type: "ED" });
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["carole-and-tuesday"]);
    expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["Not Afraid"]);
  });

  it("publishes a partial quarter with reviewed identity and song evidence, without unverified artwork", () => {
    expect(spring.anime).toHaveLength(39);
    expect(spring.coverageNote).toContain("跨季延續及特殊歌曲版本仍待核對");
    expect(curated2019SpringSeeds.flatMap(({ themes }) => themes)).toHaveLength(119);
    expect(curatedSeasonDetails.some(({ id }) => id === "2025-fall")).toBe(false);
    for (const seed of curated2019SpringSeeds) {
      expect(seed.seasonIds).toEqual(["2019-spring"]);
      const detail = curatedAnimeDetails.find(({ id }) => id === seed.id)!;
      expect(detail.posterUrl).toBeUndefined();
      expect(detail.bannerUrl).toBeUndefined();
      expect(detail.imageSourceUrl).toBeUndefined();
      expect(detail.sources).toContainEqual(expect.objectContaining({
        role: "identifier", url: seed.identifierSource?.url, verifiedAt: seed.verifiedAt
      }));
      for (const theme of detail.themes) {
        expect(theme.sources.some(({ role }) => role === "first_party")).toBe(true);
        expect(theme.sources.some(({ role }) => role === "cross_check")).toBe(true);
        expect(theme.sources.every(({ verifiedAt }) => verifiedAt === seed.verifiedAt)).toBe(true);
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

  it("keeps Friday's late-night school series on their Japanese editorial day", () => {
    for (const [id, time] of [[106051, "25:55"], [105989, "26:10"], [101386, "26:25"]] as const) {
      expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === id)?.startDate).toBe("2019-04-05");
      expect(anime(id)).toMatchObject({ editorialWeekday: 5, broadcastTimeJst: time });
    }
    expect(anime(106051).broadcastLabel).toContain("首話 TBS 25:42／MBS 26:10");
    expect(anime(105989).titleZhHant).toBe("滿腦都是○○的我沒辦法談戀愛");
    expect(anime(101386).titleZhHant).toBe("一個人的○○小日子");
  });

  it("keeps Bocchi's episode-six ensemble ending apart from her solo ending and episode-five insert song", () => {
    const bocchi = anime(101386);
    expect(bocchi.themes.map(({ type, sequence, titleJa }) => [type, sequence, titleJa])).toEqual([
      ["OP", 1, "ひとりぼっちのモノローグ"],
      ["ED", 1, "ね、いっしょにかえろ。"],
      ["ED", 2, "爆笑ぼっち塾 校歌"]
    ]);
    const solo = bocchi.themes[1]!;
    const ensemble = bocchi.themes[2]!;
    expect(solo.credits.filter(({ role }) => role === "vocals")).toHaveLength(1);
    expect(ensemble.versionLabel).toBe("第6話片尾");
    expect(ensemble.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual([
      "一里ぼっち（CV：森下千咲）", "砂尾なこ（CV：田中美海）",
      "本庄アル（CV：鬼頭明里）", "ソトカ・ラキター（CV：黒瀬ゆうこ）"
    ]);
    expect(ensemble.sources).toContainEqual(expect.objectContaining({
      url: "https://hitoribocchi.jp/products/music.html", role: "first_party"
    }));
    expect(bocchi.themes.some(({ titleJa }) => titleJa === "まけるなアル かがやけアル")).toBe(false);
  });

  it("uses reviewed digital release dates and leaves unresolved credits unset", () => {
    const senryuu = anime(106051);
    expect(senryuu.themes[1]).toMatchObject({ titleJa: "ORDINARY LOVE", releaseDate: "2019-04-05" });
    expect(senryuu.themes[1]?.credits).toContainEqual({ name: "青木康平", role: "composition" });
    expect(senryuu.themes[0]?.releaseDate).toBeUndefined();
    expect(senryuu.themes[0]?.credits.map(({ role }) => role)).toEqual(["vocals"]);
    expect(anime(105989).themes[0]?.releaseDate).toBe("2019-04-05");
    expect(anime(105989).themes[1]?.releaseDate).toBe("2019-04-06");
    expect(anime(105989).themes[0]?.credits).toEqual([]);
    expect(anime(105989).themes[1]?.credits.filter(({ role }) => role === "lyrics").map(({ name }) => name))
      .toEqual(["幹葉", "寺西裕二"]);
  });

  it("keeps Study's first-season trio and original songs separate from the second season and remixes", async () => {
    const firstSeason = anime(103900);
    expect(firstSeason.titleJa).toBe("ぼくたちは勉強ができない");
    expect(firstSeason.slug).toBe("bokutachi-wa-benkyou-ga-dekinai-1st-season");
    expect(anime(110229)).toMatchObject({
      slug: "bokutachi-wa-benkyou-ga-dekinai", titleJa: "ぼくたちは勉強ができない！"
    });
    expect(firstSeason.themes.map(({ titleJa }) => titleJa)).toEqual(["セイシュンゼミナール", "Never Give It Up!!"]);
    for (const theme of firstSeason.themes) {
      expect(theme.artistDisplayName).toBe("Study");
      expect(theme.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual([
        "古橋文乃（CV：白石晴香）", "緒方理珠（CV：富田美憂）", "武元うるか（CV：鈴代紗弓）"
      ]);
    }
    expect(firstSeason.themes.flatMap(({ credits }) => credits).some(({ name }) => /Lynn|朝日奈丸佳/.test(name))).toBe(false);
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const filters = { query: "黒瀬ゆうこ", scope: "creators", year: "2019", quarter: "spring", type: "ED" } as const;
    const results = searchCatalog(index, filters);
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["hitoribocchi-no-marumaru-seikatsu"]);
    expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["爆笑ぼっち塾 校歌"]);
    expect(searchCatalog(index, { ...filters, quarter: "summer" })).toEqual([]);
  });
  it("keeps original spring TV premieres separate from later rebroadcasts and overseas distribution", () => {
    const expected = [
      [100112, "2019-04-10", 3, "23:30"],
      [101597, "2019-04-07", 7, "22:00"],
      [101814, "2019-04-07", 7, "23:30"]
    ] as const;
    for (const [id, startDate, editorialWeekday, broadcastTimeJst] of expected) {
      expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === id)?.startDate).toBe(startDate);
      expect(anime(id)).toMatchObject({ editorialWeekday, broadcastTimeJst });
    }
    expect(anime(101597).titleZhHant).toBe("拾又之國");
    expect(anime(101597).sources).toContainEqual(expect.objectContaining({
      url: "https://www.netflix.com/tw/title/81019771", language: "zh-Hant", role: "first_party"
    }));
  });

  it("records an episode-six visual change without inventing another Wise Man's Grandchild ending", () => {
    const kenja = anime(100112);
    expect(kenja.themes.map(({ type, sequence, titleJa }) => [type, sequence, titleJa])).toEqual([
      ["OP", 1, "アルティメット☆MAGIC"], ["ED", 1, "圧倒的 Vivid Days"]
    ]);
    expect(kenja.themes[1]).toMatchObject({ artistDisplayName: "吉七味。", versionLabel: "第6話使用 MV 畫面" });
    expect(kenja.themes[1]?.sources).toContainEqual(expect.objectContaining({
      url: "https://kenja-no-mago.jp/news/?id=20190510&mode=detail", role: "first_party"
    }));
    expect(kenja.themes[0]?.credits).toContainEqual({ name: "久下真音", role: "arrangement" });
    expect(kenja.themes[0]?.credits.some(({ name }) => name === "金子麻友美")).toBe(false);
  });

  it("preserves SPR5's ending sequence and five vocal credits without promoting unverified theme uses", async () => {
    const city = anime(101814);
    expect(city.themes.map(({ type, sequence, titleJa }) => [type, sequence, titleJa])).toEqual([
      ["OP", 1, "答"], ["ED", 2, "With Your Breath"]
    ]);
    const ending = city.themes[1]!;
    expect(ending.artistDisplayName).toBe("SPR5");
    expect(ending.credits.filter(({ role }) => role === "vocals").map(({ name }) => name)).toEqual([
      "社本悠", "岩井映美里", "直田姫奈", "大西亜玖璃", "園山ひかり"
    ]);
    expect(ending.credits.filter(({ role }) => role === "lyrics").map(({ name }) => name)).toEqual(["太田彩華", "俊龍"]);
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const results = searchCatalog(index, {
      query: "園山ひかり", scope: "creators", year: "2019", quarter: "spring", type: "ED"
    });
    expect(results.map(({ anime: item }) => item.slug)).toEqual(["shoumetsu-toshi"]);
    expect(results[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["With Your Breath"]);
  });

  it("distinguishes TV-size releases, full-song releases and short official video previews", () => {
    expect(anime(101597).themes[0]).toMatchObject({
      releaseDate: "2019-06-19", versionLabel: "TV Size：2019-06-05；完整版：2019-06-19"
    });
    expect(anime(101814).themes[0]).toMatchObject({
      releaseDate: "2019-05-08", versionLabel: "TV Size：2019-04-08；完整版：2019-05-08"
    });
    expect(anime(101597).themes[1]?.versionLabel).toBe("動畫片尾剪輯版另收錄為 The Key -群青のマグメルver.-");
    for (const id of [100112, 101597, 101814]) {
      for (const theme of anime(id).themes) {
        expect(theme.videos).toHaveLength(1);
        expect(theme.videos[0]?.officialStatus).toBe("official");
      }
    }
    expect(anime(100112).themes[0]?.videos[0]).toMatchObject({ youtubeVideoId: "3PblQhyRoF4", type: "other" });
    expect(anime(101597).themes[0]?.videos[0]).toMatchObject({ youtubeVideoId: "361yH_xuBfg", type: "other" });
    expect(anime(101814).themes[1]?.videos[0]).toMatchObject({ youtubeVideoId: "wZ3Fe1JeecE", type: "other" });
  });

  it("keeps late-night supernatural TV series on the original spring editorial date", () => {
    for (const [id, date, day, time] of [
      [101261, "2019-04-11", 4, "24:55"],
      [102939, "2019-04-07", 7, "24:30"],
      [107418, "2019-04-07", 7, "24:00"]
    ] as const) {
      expect(curated2019SpringSeeds.find(({ anilistId }) => anilistId === id)?.startDate).toBe(date);
      expect(anime(id)).toMatchObject({ editorialWeekday: day, broadcastTimeJst: time });
      expect(spring.anime.some((item) => item.id === `curated-${id}`)).toBe(true);
    }
    expect(anime(107418).sources).toContainEqual(expect.objectContaining({
      url: "https://www.youtube.com/watch?v=B8BAqO-p9LU", role: "first_party"
    }));
    expect(anime(109562).slug).toBe("fairy-gone-2");
    expect(spring.anime.some((item) => item.id === "curated-109562")).toBe(false);
    expect(anime(101261).sources.some(({ url }) => url === "https://youranimes.tw/bangumi/201904")).toBe(false);
  });

  it("preserves Midnight's co-writers and separately named TV edits without creating additional theme songs", async () => {
    const midnight = anime(102939);
    expect(midnight.themes.map(({ type, sequence, titleJa }) => [type, sequence, titleJa])).toEqual([
      ["OP", 1, "dis-communicate"], ["ED", 1, "約束のOverture"]
    ]);
    expect(midnight.themes[0]?.credits.filter(({ role }) => role === "lyrics").map(({ name }) => name))
      .toEqual(["福山 潤", "松井洋平"]);
    expect(midnight.themes[0]?.credits).toContainEqual({ name: "eba", role: "arrangement" });
    expect(midnight.themes[1]?.credits).toContainEqual({ name: "高木龍一", role: "composition" });
    for (const theme of midnight.themes) {
      expect(theme.versionLabel).toBe(`動畫盤另收錄 ${theme.titleJa} TV edit`);
      expect(theme.videos[0]?.type).toBe("other");
    }
    expect(midnight.themes.map(({ releaseDate }) => releaseDate)).toEqual(["2019-04-24", "2019-05-15"]);
    const provider = new ApiProvider("https://anisonary.k-y.cc/api/v1", {
      fetch: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify(midnight), {
        headers: { "Content-Type": "application/json" }
      }))
    });
    expect(await provider.getAnime(midnight.slug)).toEqual(midnight);
  });

  it("retains Sarazanmai's opening credits without promoting its dramatic songs or visual variants to new themes", () => {
    const sarazanmai = anime(101261);
    expect(sarazanmai.themes.map(({ titleJa }) => titleJa)).toEqual(["まっさら", "スタンドバイミー"]);
    expect(sarazanmai.themes[0]?.credits).toEqual([
      { name: "谷口鮪", role: "vocals" }, { name: "谷口鮪", role: "lyrics" },
      { name: "谷口鮪", role: "composition" }, { name: "KANA-BOON", role: "arrangement" }
    ]);
    expect(sarazanmai.themes[1]?.credits.filter(({ role }) => role === "vocals"))
      .toEqual([{ name: "北澤ゆうほ", role: "vocals" }]);
    expect(sarazanmai.themes.map(({ releaseDate }) => releaseDate)).toEqual(["2019-06-12", "2019-05-29"]);
    expect(sarazanmai.themes[0]?.videos[0]).toMatchObject({ youtubeVideoId: "KBhUW6PpwMY", type: "other" });
  });

  it("separates Fairy gone's first cour and creator search from autumn and from the group's general member roster", async () => {
    const fairy = anime(107418);
    expect(fairy.themes.map(({ titleJa }) => titleJa)).toEqual(["KNOCK on the CORE", "Ash-like Snow"]);
    expect(anime(109562).themes.map(({ titleJa }) => titleJa)).toEqual(["STILL STANDING", "Stay Gold"]);
    expect(fairy.themes.map(({ credits }) => credits.filter(({ role }) => role === "vocals").map(({ name }) => name)))
      .toEqual([["Ayaka Tachibana", "AIJ"], ["NIKIIE"]]);
    expect(fairy.themes[0]?.credits.some(({ role }) => role === "lyrics")).toBe(false);
    expect(fairy.themes[1]?.credits).toContainEqual({ name: "eNu", role: "lyrics" });
    for (const theme of fairy.themes) {
      expect(theme.artistDisplayName).toBe("(K)NoW_NAME");
      expect(theme.credits).toContainEqual({ name: "宮崎誠", role: "composition" });
      expect(theme.credits).toContainEqual({ name: "宮崎誠", role: "arrangement" });
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://www.verygoo.jp/works/202003-201904.php", role: "first_party" }));
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://www.radionikkei.jp/kodawarisetlist/7317.html", role: "first_party" }));
      expect(theme.sources).toContainEqual(expect.objectContaining({ url: "https://mora.jp/topics/interview/knowname_fairygone/", role: "cross_check" }));
      expect(theme.releaseDate).toBe("2019-04-24");
      expect(theme.versionLabel).toBe("TV Size 另行配信；單曲版：2019-04-24");
    }
    expect(fairy.themes.flatMap(({ videos }) => videos).map(({ type }) => type)).toEqual(["other", "creditless_ed"]);
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    const filters = { query: "松井洋平", scope: "creators", year: "2019", quarter: "spring", type: "OP" } as const;
    expect(searchCatalog(index, filters).map(({ anime: item }) => item.slug)).toEqual(["mayonaka-no-occult-koumuin"]);
    const fairyResults = searchCatalog(index, { ...filters, query: "(K)NoW_NAME", type: "ED" });
    expect(fairyResults.map(({ anime: item }) => item.slug)).toEqual(["fairy-gone"]);
    expect(fairyResults[0]?.themes.map(({ titleJa }) => titleJa)).toEqual(["Ash-like Snow"]);
  });

  it("finds Fairy gone songs by reviewed individual credits without assigning the whole group's vocals to both songs", async () => {
    const index = buildCatalogSearchIndex((await loadCatalogSearchData(new CuratedProvider(), true)).entries);
    for (const [query, type, expected] of [
      ["Ayaka Tachibana", "OP", ["KNOCK on the CORE"]], ["Ayaka Tachibana", "ED", []],
      ["AIJ", "OP", ["KNOCK on the CORE"]], ["AIJ", "ED", []],
      ["NIKIIE", "OP", []], ["NIKIIE", "ED", ["Ash-like Snow"]],
      ["eNu", "ED", ["Ash-like Snow"]], ["宮崎誠", "OP", ["KNOCK on the CORE"]],
      ["宮崎誠", "ED", ["Ash-like Snow"]]
    ] as const) {
      const result = searchCatalog(index, { query, type, scope: "creators", year: "2019", quarter: "spring" })
        .find(({ anime: item }) => item.slug === "fairy-gone");
      expect(result?.themes.map(({ titleJa }) => titleJa) ?? []).toEqual(expected);
    }
  });
});
