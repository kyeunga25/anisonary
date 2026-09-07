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
    expect(spring.anime).toHaveLength(20);
    expect(spring.coverageNote).toContain("跨季延續及特殊歌曲版本仍待核對");
    expect(curated2019SpringSeeds.flatMap(({ themes }) => themes)).toHaveLength(48);
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
    for (const theme of fairy.themes) {
      expect(theme.credits).toEqual([]);
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
});
