import { curated2019SpringSeeds } from "@/data/curated-seeds/2019/spring";
import type { CuratedThemeSourceOverrideMap, CuratedThemeSourceSeed } from "@/data/curated-theme-sources/types";

const firstPartyUrlsByTheme: Readonly<Record<string, readonly string[]>> = {
  "105334:OP:1": [
    "https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016480&season=1",
    "https://avex.jp/beverly/discography/detail.php?id=1016478"
  ],
  "105334:OP:2": ["https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016918&season=1"],
  "105334:ED:1": ["https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016504&season=1"],
  "105334:ED:2": [
    "https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016919&season=1",
    "https://www.youtube.com/watch?v=YZg8DYDR_8g"
  ],
  "103302:OP:1": ["https://www.shouta-aoi.jp/news/?id=345", "https://www.shouta-aoi.jp/news/?id=372"],
  "103302:ED:1": ["https://www.uchidayuma.com/information/?id=105", "https://www.uchidayuma.com/information/?id=128"],
  "103555:OP:1": ["https://www.sonymusic.co.jp/artist/sumika/discography/buy/SRCL-11197"],
  "103555:OP:2": ["https://www.sonymusic.co.jp/artist/PornoGraffitti/discography/buy/SECL-2462"],
  "103555:ED:1": [
    "https://www.sonymusic.co.jp/artist/LittleGleeMonster/info/504687",
    "https://www.sonymusic.co.jp/artist/LittleGleeMonster/info/506025"
  ],
  "103555:ED:2": [
    "https://www.sonymusic.co.jp/artist/Qyoto/info/507594",
    "https://www.sonymusic.co.jp/artist/Qyoto/info/508972"
  ],
  "101281:OP:1": ["https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026453/VTCL-35302.html"],
  "101281:OP:2": [
    "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026453/VTCL-35307.html",
    "https://www.fujitv.co.jp/b_hp/caroleandtuesday/"
  ],
  "101281:ED:1": ["https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026453/VTCL-35302.html"],
  "101281:ED:2": [
    "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026453/VTCL-35307.html",
    "https://www.fujitv.co.jp/b_hp/caroleandtuesday/"
  ],
  "105928:OP:1": ["https://robihachi.jp/product/cd/op.php", "https://robihachi.jp/special/"],
  "105928:ED:1": ["https://robihachi.jp/product/cd/ed.php"],
  "106568:OP:1": ["https://hisuperb.com/discography/"],
  "106568:ED:1": ["https://zweima.com/disco/1710/"],
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
  "https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016480&season=1": "動畫官方：第一季前半 OP、演唱者與數位配信日",
  "https://avex.jp/beverly/discography/detail.php?id=1016478": "Beverly 官方：原版 OP、更正後配信日與官方影片",
  "https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016918&season=1": "動畫官方：第一季後半 OP、數位與 CD 日期及影片版本",
  "https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016504&season=1": "動畫官方：第一季前半 ED、演唱者與配信日期",
  "https://fruba.jp/blu-ray_dvd_cd/detail.php?id=1016919&season=1": "動畫官方：第一季後半 ED、配信日及動畫與藝人 MV",
  "https://www.youtube.com/watch?v=YZg8DYDR_8g": "INTERSECTION 官方影片：共同 Written by 署名",
  "https://www.shouta-aoi.jp/news/?id=345": "蒼井翔太官方：春季 OP、詞曲、編曲與單曲日期",
  "https://www.shouta-aoi.jp/news/?id=372": "蒼井翔太官方：OP 短版試聽影片來源",
  "https://www.uchidayuma.com/information/?id=105": "内田雄馬官方：春季 ED、共同作曲與編曲署名及單曲日期",
  "https://www.uchidayuma.com/information/?id=128": "内田雄馬官方：Speechless 短版 MV 來源",
  "https://www.sonymusic.co.jp/artist/sumika/discography/buy/SRCL-11197": "Sony Music 官方：MIX 第一首 OP 與原始單曲日期",
  "https://www.sonymusic.co.jp/artist/PornoGraffitti/discography/buy/SECL-2462": "Sony Music 官方：MIX 七月 OP、詞曲與共同編曲署名",
  "https://www.sonymusic.co.jp/artist/LittleGleeMonster/info/504687": "Sony Music 官方：MIX 第一首 ED、作詞與作曲者",
  "https://www.sonymusic.co.jp/artist/LittleGleeMonster/info/506025": "Sony Music 官方：ED 單曲日期與動畫盤 TV Size",
  "https://www.sonymusic.co.jp/artist/Qyoto/info/507594": "Sony Music 官方：新 ED 起用日期、單曲與 TV Size 收錄",
  "https://www.sonymusic.co.jp/artist/Qyoto/info/508972": "Qyoto 官方訪談：此 ED 的演唱與獨立作詞署名",
  "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026453/VTCL-35302.html": "FlyingDog 官方：前半 OP／ED、歌唱者、製作署名與 TV size 收錄",
  "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026453/VTCL-35307.html": "FlyingDog 官方：新 OP／ED、製作署名與 TV size 收錄",
  "https://www.fujitv.co.jp/b_hp/caroleandtuesday/": "富士電視台：後半 OP／ED 與獨立歌唱聲音",
  "https://robihachi.jp/product/cd/op.php": "動畫官方：OP 單曲、一般演唱版與 H☆R version",
  "https://robihachi.jp/special/": "動畫官方：OP 主題曲試聽來源",
  "https://robihachi.jp/product/cd/ed.php": "動畫官方：ED 用途、三位演唱者與發行日期",
  "https://hisuperb.com/discography/": "Hi!Superb 官方：Brave Rejection 動畫 OP 用途與發行日期",
  "https://zweima.com/disco/1710/": "Zwei 官方：ED 用途、曲名讀音與發行日期",
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
