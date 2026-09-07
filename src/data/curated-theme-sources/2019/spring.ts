import { curated2019SpringSeeds } from "@/data/curated-seeds/2019/spring";
import type { CuratedThemeSourceOverrideMap, CuratedThemeSourceSeed } from "@/data/curated-theme-sources/types";

const firstPartyUrlsByTheme: Readonly<Record<string, readonly string[]>> = {
  "108039:OP:1": ["https://www.sunrise-music.co.jp/list/detail.php?id=447", "https://www.universal-music.co.jp/luna-sea/news/2019-04-15/"],
  "108039:OP:2": ["https://www.sunrise-music.co.jp/list/detail.php?id=447", "https://www.universal-music.co.jp/luna-sea/news/2019-04-15/"],
  "108039:OP:3": ["https://www.sunrise-music.co.jp/list/detail.php?id=448"],
  "108039:ED:1": ["https://www.sunrise-music.co.jp/list/detail.php?id=4"],
  "108039:ED:2": ["https://www.sunrise-music.co.jp/list/detail.php?id=8"],
  "108039:ED:3": ["https://www.sunrise-music.co.jp/list/detail.php?id=445", "https://www.gundam-the-origin.net/news/index.php?offset=45", "https://www.sonymusic.co.jp/artist/miwa/info/507943"],
  "108039:ED:4": ["https://www.sunrise-music.co.jp/list/detail.php?id=446"],
  "105749:OP:1": [
    "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/22856_201904021755.html",
    "https://www.glay.co.jp/news/detail/4532",
    "https://www.glay.co.jp/news/list/4/75/?page=2",
    "https://www.youtube.com/watch?v=J_OxuDSZ4ng"
  ],
  "105749:OP:2": [
    "https://www.glay.co.jp/news/detail/4675",
    "https://www.glay.co.jp/news/detail/4914",
    "https://www.youtube.com/watch?v=KoAH6nzLQbI"
  ],
  "105749:ED:1": [
    "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/22856_201904021755.html",
    "https://news.ponycanyon.co.jp/2019/04/31304"
  ],
  "105749:ED:2": [
    "https://diaace.com/arrivals/5115/",
    "https://uchidamaaya.jp/discography/9th_sg/",
    "https://www.youtube.com/watch?v=OgLAGtlVBho"
  ],
  "105749:ED:3": [
    "https://news.ponycanyon.co.jp/2019/09/34127",
    "https://mimorin.com/discography/9thcd/",
    "https://www.youtube.com/watch?v=MNzIIZzqAVU"
  ],
  "105749:ED:4": [
    "https://diaace.com/arrivals/5403/",
    "https://news.ponycanyon.co.jp/2020/01/36551"
  ],
  "97995:OP:1": [
    "https://yuno-anime.com/news/87/",
    "https://asaka1007.jp/discography/a_girl_who_chants_love_at_the_bound_of_this_world/",
    "https://asaka1007.jp/news/1770/",
    "https://asaka1007.jp/news/1749/"
  ],
  "97995:OP:2": [
    "https://yuno-anime.com/news/1523/",
    "https://music.ani-tone.com/release/USSW-0207/",
    "https://asaka1007.jp/news/1827/"
  ],
  "97995:ED:1": [
    "https://yuno-anime.com/news/87/",
    "https://yuno-anime.com/product/ed/",
    "https://www.youtube.com/watch?v=a8n8_Z28Nlo"
  ],
  "97995:ED:2": [
    "https://yuno-anime.com/news/1523/",
    "https://asaka1007.jp/discography/heart_touch/",
    "https://asaka1007.jp/news/1827/"
  ],
  "104989:OP:1": [
    "https://anime-hachinai.com/news/273/",
    "https://www.jvcmusic.co.jp/-/Discography/A025701/VIZL-1596.html",
    "https://www.jvcmusic.co.jp/-/Discography/A025701/VE3WA-18398.html"
  ],
  "104989:ED:1": [
    "https://anime-hachinai.com/news/400/",
    "https://www.tms-e.co.jp/alltitles/2010s/814101.html"
  ],
  "104284:OP:1": [
    "https://www.youtube.com/watch?v=GfVF3xC3LuE",
    "https://www.at-x.com/promox/archive.html"
  ],
  "104284:ED:1": [
    "https://linkco.re/X86SGTGv?lang=ja",
    "https://www.at-x.com/promox/archive.html"
  ],
  "104578:OP:1": [
    "https://shingeki.tv/season3/music/op2.php",
    "https://shingeki.linked-horizon.com/news/2019/04/18/2757.html",
    "https://www.youtube.com/watch?v=czJHHta2vz8"
  ],
  "104578:ED:1": [
    "https://shingeki.tv/season3/music/ed2.php",
    "https://cinemastaff.net/news/5310/",
    "https://news.ponycanyon.co.jp/2019/05/32228",
    "https://www.youtube.com/watch?v=XV0R-5GxyyU"
  ],
  "104454:OP:1": ["https://isekai-quartet.com/music-s1.html"],
  "104454:ED:1": ["https://isekai-quartet.com/music-s1.html"],
  "104454:ED:2": ["https://astra-anime.com/products/music.html", "https://times.abema.tv/articles/-/7002453"],
  "104212:OP:1": ["https://prtimes.jp/main/html/rd/p/000003265.000002581.html"],
  "104212:ED:1": [
    "https://prtimes.jp/main/html/rd/p/000003265.000002581.html",
    "https://columbia.jp/artist-info/chippoke/discography/COKM-42187.html"
  ],
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
    "https://www.fairygone.com/sp/news/news_0407_01.html",
    "https://www.verygoo.jp/works/202003-201904.php",
    "https://www.radionikkei.jp/kodawarisetlist/7317.html"
  ],
  "107418:ED:1": [
    "https://www.pa-works.jp/works/fairy-gone/",
    "https://www.fairygone.com/sp/music/",
    "https://www.fairygone.com/sp/news/news_0407_01.html",
    "https://www.verygoo.jp/works/202003-201904.php",
    "https://www.radionikkei.jp/kodawarisetlist/7317.html"
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
  "https://www.sunrise-music.co.jp/list/detail.php?id=447": "SUNRISE Music：電視版前兩首 OP、CD 單曲日期與官方短版影片",
  "https://www.universal-music.co.jp/luna-sea/news/2019-04-15/": "Universal Music：前兩首 OP 與原始 CD 發行日期",
  "https://www.sunrise-music.co.jp/list/detail.php?id=448": "SUNRISE Music：LUNA SEA 翻唱 OP、詞曲編曲與數位配信日期",
  "https://www.sunrise-music.co.jp/list/detail.php?id=4": "SUNRISE Music：GLIM SPANKY 版 ED、共同作詞、編曲與配信日期",
  "https://www.sunrise-music.co.jp/list/detail.php?id=8": "SUNRISE Music：コムアイ 版 ED、詞曲編曲與配信日期",
  "https://www.sunrise-music.co.jp/list/detail.php?id=445": "SUNRISE Music：第三首 ED、製作署名與完整／TV Size 配信版本",
  "https://www.sunrise-music.co.jp/list/detail.php?id=446": "SUNRISE Music：最終話 ED、個別演唱者、詞曲編曲與配信日期",
  "https://www.gundam-the-origin.net/news/index.php?offset=45": "動畫官方：第 12 話片尾畫面版本與最終 ED 歌唱署名",
  "https://www.sonymusic.co.jp/artist/miwa/info/507943": "miwa／Sony Music：第三首 ED 與原始配信日期",
  "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201904/22856_201904021755.html": "東京電視台：2019 年首播與最初 OP／ED 用途",
  "https://www.glay.co.jp/news/detail/4532": "GLAY 官方：首支 OP 的詞曲及 TV Size 配信日期",
  "https://www.glay.co.jp/news/list/4/75/?page=2": "GLAY 官方發行紀錄：2019 年 7 月完整版 CD 收錄",
  "https://www.youtube.com/watch?v=J_OxuDSZ4ng": "動畫官方：第一首 OP 映像（TV 版）",
  "https://www.glay.co.jp/news/detail/4675": "GLAY 官方：第二首 OP 用途與詞曲作者",
  "https://www.glay.co.jp/news/detail/4914": "GLAY 官方：2020 年完整版 CD 與詞曲署名",
  "https://www.youtube.com/watch?v=KoAH6nzLQbI": "動畫官方：第二首 OP 映像（TV 版）",
  "https://news.ponycanyon.co.jp/2019/04/31304": "Pony Canyon 官方：首支 ED、單曲日期、TV edit 與官方 MV",
  "https://diaace.com/arrivals/5115/": "動畫官方：7 月起第二首 ED 的起用公告",
  "https://uchidamaaya.jp/discography/9th_sg/": "内田真礼官方：CD 單曲日期及完整共同編曲署名",
  "https://www.youtube.com/watch?v=OgLAGtlVBho": "内田真礼官方：完整 MV 及共同編曲署名",
  "https://news.ponycanyon.co.jp/2019/09/34127": "Pony Canyon 官方：三森すずこ新 ED 與發行日期",
  "https://mimorin.com/discography/9thcd/": "三森すずこ官方：原版 ED 詞曲、共同編曲及 TV size 收錄",
  "https://www.youtube.com/watch?v=MNzIIZzqAVU": "Pony Canyon 正式配信 metadata：原演唱版與完整署名",
  "https://diaace.com/arrivals/5403/": "動畫官方：2020 年 1 月起第四首 ED 用途",
  "https://news.ponycanyon.co.jp/2020/01/36551": "Pony Canyon 官方：第四首 ED 先行配信、CD、TV edit 與官方 MV",
  "https://yuno-anime.com/news/87/": "動畫官方：現世編 OP／ED 與完整詞曲編曲署名",
  "https://asaka1007.jp/discography/a_girl_who_chants_love_at_the_bound_of_this_world/": "亜咲花官方：OP 完整版單曲、製作署名與短版 MV",
  "https://asaka1007.jp/news/1770/": "亜咲花官方：OP 完整版高解析音源先行配信日期",
  "https://asaka1007.jp/news/1749/": "亜咲花官方：OP TV Size 配信日期",
  "https://yuno-anime.com/news/1523/": "動畫官方：異世界編 OP／ED、演唱及製作署名",
  "https://music.ani-tone.com/release/USSW-0207/": "AniTone 唱片公司：MOTHER 完整版專輯收錄日期",
  "https://asaka1007.jp/news/1827/": "亜咲花官方：異世界編 OP／ED TV Size 配信日期",
  "https://yuno-anime.com/product/ed/": "動畫官方：現世編 ED 完整版單曲日期",
  "https://www.youtube.com/watch?v=a8n8_Z28Nlo": "AniTone 唱片公司：現世編 ED 官方影片與單曲資料",
  "https://asaka1007.jp/discography/heart_touch/": "亜咲花官方：神の数式 完整版專輯日期與製作署名",
  "https://anime-hachinai.com/news/273/": "動畫官方：OP 用途、演唱與詞曲編曲署名",
  "https://www.jvcmusic.co.jp/-/Discography/A025701/VIZL-1596.html": "Victor 官方：OP 完整版單曲發行日期",
  "https://www.jvcmusic.co.jp/-/Discography/A025701/VE3WA-18398.html": "Victor 官方：OP TV Size 先行配信日期",
  "https://anime-hachinai.com/news/400/": "動畫官方：ED 四人演唱、完整版先行配信與迷你專輯",
  "https://www.tms-e.co.jp/alltitles/2010s/814101.html": "TMS 製作公司：OP／ED、角色演唱及詞曲編曲署名",
  "https://www.youtube.com/watch?v=GfVF3xC3LuE": "A応P 官方：完整 OP 音樂影片、單曲日期與製作署名",
  "https://www.at-x.com/promox/archive.html": "AT-X 播出機構：OP／ED 歌曲及演唱者",
  "https://linkco.re/X86SGTGv?lang=ja": "TuneCore 藝人正式發行資料：ED 用途、數位日期與詞曲署名",
  "https://shingeki.tv/season3/music/op2.php": "動畫官方：第三季後半 OP 與完整版單曲日期",
  "https://shingeki.linked-horizon.com/news/2019/04/18/2757.html": "Linked Horizon 官方：OP TV Size 先行配信日期",
  "https://www.youtube.com/watch?v=czJHHta2vz8": "Pony Canyon 正式發行 metadata：OP 完整版及 Revo 製作署名",
  "https://shingeki.tv/season3/music/ed2.php": "動畫官方：第三季後半 ED 與 CD 收錄資料",
  "https://cinemastaff.net/news/5310/": "cinema staff 官方：ED 完整版先行串流與 TV Size 日期",
  "https://news.ponycanyon.co.jp/2019/05/32228": "Pony Canyon 官方：ED 短版 MV 與 CD 發行日期",
  "https://www.youtube.com/watch?v=XV0R-5GxyyU": "Pony Canyon 正式發行 metadata：ED 共同詞曲署名",
  "https://isekai-quartet.com/music-s1.html": "動畫官方第一季存檔：OP／ED、角色合唱署名與單曲日期",
  "https://astra-anime.com/products/music.html": "KADOKAWA 官方：Hollow Veil 第 5 話特別 ED、署名及單曲收錄",
  "https://times.abema.tv/articles/-/7002453": "ABEMA 播出機構：第一季第 5 話特別 ED 用途",
  "https://prtimes.jp/main/html/rd/p/000003265.000002581.html": "DMM 官方公告：OP／ED 用途、詞曲編曲署名與官方 lyric video",
  "https://columbia.jp/artist-info/chippoke/discography/COKM-42187.html": "日本 Columbia 官方：ルビー 原始數位配信日期",
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
  "https://www.verygoo.jp/works/202003-201904.php": "VERY GOO 創作者官方：2019 年 4 月單曲的作曲、編曲與 ED 作詞署名",
  "https://www.radionikkei.jp/kodawarisetlist/7317.html": "Radio NIKKEI 播出機構：兩首歌曲的個別演唱者",
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

const crossCheckSourcesByAnime: Readonly<Record<number, CuratedThemeSourceSeed>> = {
  108039: {
    label: "UZUREA：電視版 OP／ED 次序交叉核對；演唱版本以第一方為準",
    url: "https://uzurea.net/vc/187936/",
    language: "ja",
    role: "cross_check"
  },
  105749: {
    label: "Animate Times：2019 年第三季兩首 OP 與四首 ED 次序交叉核對",
    url: "https://www.animatetimes.com/news/details.php?id=1776312367&p=3",
    language: "ja",
    role: "cross_check"
  },
  97995: {
    label: "Animate Times：前後篇 OP／ED 用途、次序與演唱者交叉核對",
    url: "https://www.animatetimes.com/news/details.php?id=1568793228",
    language: "ja",
    role: "cross_check"
  }
};

export const curated2019SpringThemeSources: CuratedThemeSourceOverrideMap = Object.fromEntries(
  curated2019SpringSeeds.flatMap((seed) => seed.themes.map((theme) => {
    const key = `${seed.anilistId}:${theme.type}:${theme.sequence}`;
    const urls = firstPartyUrlsByTheme[key];
    const crossCheck: CuratedThemeSourceSeed | undefined = crossCheckSourcesByAnime[seed.anilistId] ?? (seed.animeThemesUrl ? {
      label: "AnimeThemes：OP／ED 次序與演唱版本交叉核對",
      url: seed.animeThemesUrl,
      language: "en",
      role: "cross_check"
    } : undefined);
    if (!urls?.length || !crossCheck) {
      throw new Error(`Missing reviewed spring 2019 theme source: ${key}`);
    }
    const sources: CuratedThemeSourceSeed[] = [
      ...urls.map((url): CuratedThemeSourceSeed => ({
        label: sourceLabelsByUrl[url] ?? "動畫官方：歌曲、發行日期與製作資料",
        url,
        language: ["https://www.youtube.com/watch?v=czJHHta2vz8", "https://www.youtube.com/watch?v=XV0R-5GxyyU", "https://www.youtube.com/watch?v=MNzIIZzqAVU"].includes(url) ? "en" : "ja",
        role: "first_party"
      })),
      ...(key === "101922:ED:2" ? [{
        label: "ABEMA 播出機構：第 19 話插入歌兼片尾曲用途",
        url: "https://times.abema.tv/articles/-/8671435",
        language: "ja" as const,
        role: "first_party" as const
      }] : []),
      ...(key === "104578:ED:1" ? [{
        label: "歌ネット：ED 用途與共同詞曲署名交叉核對",
        url: "https://www.uta-net.com/song/268304/",
        language: "ja" as const,
        role: "cross_check" as const
      }] : []),
      ...(key === "97995:ED:1" ? [{
        label: "LisAni：官方影片為 TV Size MV 的版本交叉核對",
        url: "https://www.lisani.jp/0000124875/",
        language: "ja" as const,
        role: "cross_check" as const
      }] : []),
      ...(seed.anilistId === 107418 ? [{
        label: "mora 藝人訪談：OP 對唱與 ED 獨唱的逐曲交叉核對",
        url: "https://mora.jp/topics/interview/knowname_fairygone/",
        language: "ja" as const,
        role: "cross_check" as const
      }] : []),
      crossCheck
    ];
    return [key, sources];
  }))
);
