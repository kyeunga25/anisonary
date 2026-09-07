import { curated2019SpringSeeds } from "@/data/curated-seeds/2019/spring";
import type { CuratedThemeSourceOverrideMap, CuratedThemeSourceSeed } from "@/data/curated-theme-sources/types";

const firstPartyUrlsByTheme: Readonly<Record<string, readonly string[]>> = {
  "101261:OP:1": [
    "https://sarazanmai.com/music/",
    "https://www.youtube.com/watch?v=KBhUW6PpwMY",
    "https://sp.kanaboon.jp/discography/detail/30/"
  ],
  "101261:ED:1": [
    "https://sarazanmai.com/music/",
    "https://thepeggies.jp/2021/",
    "https://www.youtube.com/watch?v=x6zyKrHv12k"
  ],
  "102939:OP:1": [
    "https://occultkoumuin.com/music.html",
    "https://fukuyamajun-music.com/discography05.html"
  ],
  "102939:ED:1": [
    "https://occultkoumuin.com/music_ed.html",
    "https://tokishunichi.com/discography01.html"
  ],
  "107418:OP:1": [
    "https://www.pa-works.jp/works/fairy-gone/",
    "https://www.fairygone.com/sp/music/",
    "https://www.fairygone.com/sp/news/news_0407_01.html"
  ],
  "107418:ED:1": [
    "https://www.pa-works.jp/works/fairy-gone/",
    "https://www.fairygone.com/sp/music/",
    "https://www.fairygone.com/sp/news/news_0407_01.html"
  ],
  "100112:OP:1": [
    "https://kenja-no-mago.jp/products/",
    "https://iris.dive2ent.com/discography/detail.php?id=1016413",
    "https://iris.dive2ent.com/discography/detail.php?id=1017265"
  ],
  "100112:ED:1": [
    "https://avex.jp/yoshinanami/discography/detail.php?id=1016506",
    "https://kenja-no-mago.jp/news/?id=20190510&mode=detail"
  ],
  "101597:OP:1": [
    "https://www.teichiku.co.jp/artist/fu-danjuku/discography/TECI-681.html",
    "https://www.teichiku.co.jp/artist/fu-danjuku/discography/D-C494.html"
  ],
  "101597:ED:1": [
    "https://www.teichiku.co.jp/artist/a-flood-of-circle/discography/TECI-678.html",
    "https://gunjyo-magumeru.com/cd.html"
  ],
  "101814:OP:1": [
    "https://shoumetsutoshi-anime.com/products/cd/op.php",
    "https://news.ponycanyon.co.jp/2019/04/31416",
    "https://shoumetsutoshi-anime.com/special/"
  ],
  "101814:ED:2": ["https://shoumetsutoshi-anime.com/products/cd/ed.php"],
  "106051:OP:1": ["https://www.mbs.jp/senryu-girl/", "https://www.youtube.com/watch?v=AR5gokS91wg"],
  "106051:ED:1": [
    "https://rikakoaida.com/discography/71/",
    "https://prtimes.jp/main/html/rd/p/000003320.000002581.html"
  ],
  "105989:OP:1": ["https://www.youtube.com/watch?v=tYyNMqcfiFw"],
  "105989:ED:1": [
    "https://prtimes.jp/main/html/rd/p/000002013.000013546.html",
    "https://www.sma.co.jp/s/sma/news/detail/83323?ima=0000"
  ],
  "101386:OP:1": ["https://hitoribocchi.jp/products/music.html"],
  "101386:ED:1": ["https://hitoribocchi.jp/products/music.html"],
  "101386:ED:2": ["https://hitoribocchi.jp/products/music.html"],
  "103900:OP:1": ["https://boku-ben.com/news/?id=50324", "https://boku-ben.com/study/music/s_01.html"],
  "103900:ED:1": ["https://boku-ben.com/news/?id=50324", "https://boku-ben.com/study/music/s_01.html"],
  "101922:OP:1": [
    "https://kimetsu.com/anime/risshihen/music/",
    "https://kimetsu.com/anime/risshihen/news/?id=50473"
  ],
  "101922:ED:1": ["https://kimetsu.com/anime/risshihen/music/?page=ending"],
  "101922:ED:2": [
    "https://kimetsu.com/anime/risshihen/music/?page=sounyuuka",
    "https://kimetsu.com/anime/risshihen/story/?story=19"
  ],
  "97668:OP:1": [
    "https://onepunchman-anime.net/goods/cd/op2.php",
    "https://onepunchman-anime.net/news/archives/2279"
  ],
  "97668:ED:1": ["https://onepunchman-anime.net/goods/cd/ed2.php"],
  "105914:OP:1": ["https://senkosan.com/products/music.html"],
  "105914:ED:1": ["https://senkosan.com/products/music.html"],
  "103223:OP:1": [
    "https://bungo-stray-dogs.jp/goods/?mode=music",
    "https://bungo-stray-dogs.jp/news/?news=news-3rdseason-song-info"
  ],
  "103223:ED:1": [
    "https://bungo-stray-dogs.jp/goods/?mode=music",
    "https://bungo-stray-dogs.jp/news/?news=news-3rdseason-song-info"
  ]
};

const sourceLabelsByUrl: Readonly<Record<string, string>> = {
  "https://sarazanmai.com/music/": "動畫官方：OP／ED、發行日期及演唱者",
  "https://www.youtube.com/watch?v=KBhUW6PpwMY": "MAPPA 官方：OP 映像與作詞、作曲、編曲署名",
  "https://sp.kanaboon.jp/discography/detail/30/": "KANA-BOON 官方：OP 單曲與發行日期",
  "https://thepeggies.jp/2021/": "the peggies 官方：ED 歌詞創作訪談",
  "https://www.youtube.com/watch?v=x6zyKrHv12k": "Sony Music Japan：官方 ED 影片與單曲資料",
  "https://fukuyamajun-music.com/discography05.html": "福山潤官方：OP 製作資料、TV edit 與短版影片",
  "https://tokishunichi.com/discography01.html": "土岐隼一官方：ED 製作資料、TV edit 與官方影片",
  "https://www.pa-works.jp/works/fairy-gone/": "P.A.WORKS 官方：第一季 OP／ED 用途與藝人",
  "https://www.fairygone.com/sp/music/": "動畫官方：第一季 OP／ED 單曲發行資料",
  "https://www.fairygone.com/sp/news/news_0407_01.html": "動畫官方：第一季 OP／ED 映像與 TV Size 配信公告",
  "https://iris.dive2ent.com/discography/detail.php?id=1016413": "i☆Ris 官方：OP 單曲與發行日期",
  "https://iris.dive2ent.com/discography/detail.php?id=1017265": "i☆Ris 官方：OP 收錄與製作署名核對",
  "https://avex.jp/yoshinanami/discography/detail.php?id=1016506": "avex 官方：ED 歌曲、發行日期與製作資料",
  "https://kenja-no-mago.jp/news/?id=20190510&mode=detail": "動畫官方：第 6 話限定的 ED 畫面版本",
  "https://www.teichiku.co.jp/artist/fu-danjuku/discography/TECI-681.html": "Teichiku 官方：OP 完整版、製作資料與影片",
  "https://www.teichiku.co.jp/artist/fu-danjuku/discography/D-C494.html": "Teichiku 官方：OP TV Size 先行配信日期",
  "https://www.teichiku.co.jp/artist/a-flood-of-circle/discography/TECI-678.html": "Teichiku 官方：ED 與動畫剪輯版、製作資料及影片",
  "https://gunjyo-magumeru.com/cd.html": "動畫官方：OP／ED 用途及藝人資料",
  "https://news.ponycanyon.co.jp/2019/04/31416": "Pony Canyon 官方：OP TV Size 與單曲發行日期",
  "https://shoumetsutoshi-anime.com/special/": "動畫官方：OP 映像公開來源",
  "https://www.mbs.jp/senryu-girl/": "MBS 官方：OP／ED 曲名與藝人",
  "https://www.youtube.com/watch?v=AR5gokS91wg": "Universal Music Japan：官方 OP 音樂影片",
  "https://rikakoaida.com/discography/71/": "逢田梨香子官方：ED 歌曲與製作資料",
  "https://prtimes.jp/main/html/rd/p/000003320.000002581.html": "DMM 官方公告：ED 配信日期",
  "https://www.youtube.com/watch?v=tYyNMqcfiFw": "エドガー・サリヴァン官方：OP 與先行配信日期",
  "https://prtimes.jp/main/html/rd/p/000002013.000013546.html": "Sony Music Labels 官方公告：ED 歌曲與製作資料",
  "https://www.sma.co.jp/s/sma/news/detail/83323?ima=0000": "Sony Music Artists 官方公告：ED 先行配信日期"
};

export const curated2019SpringThemeSources: CuratedThemeSourceOverrideMap = Object.fromEntries(
  curated2019SpringSeeds.flatMap((seed) => seed.themes.map((theme) => {
    const key = `${seed.anilistId}:${theme.type}:${theme.sequence}`;
    const urls = firstPartyUrlsByTheme[key];
    if (!urls?.length || !seed.animeThemesUrl) {
      throw new Error(`Missing reviewed spring 2019 theme source: ${key}`);
    }
    const sources: CuratedThemeSourceSeed[] = [
      ...urls.map((url): CuratedThemeSourceSeed => ({
        label: sourceLabelsByUrl[url] ?? "動畫官方：歌曲、發行日期與製作資料",
        url,
        language: "ja",
        role: "first_party"
      })),
      ...(key === "101922:ED:2" ? [{
        label: "ABEMA 播出機構：第 19 話插入歌兼片尾曲用途",
        url: "https://times.abema.tv/articles/-/8671435",
        language: "ja" as const,
        role: "first_party" as const
      }] : []),
      {
        label: "AnimeThemes：OP／ED 次序與演唱版本交叉核對",
        url: seed.animeThemesUrl,
        language: "en",
        role: "cross_check"
      }
    ];
    return [key, sources];
  }))
);
