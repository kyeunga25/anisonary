import type { CuratedThemeSourceOverrideMap } from "@/data/curated-theme-sources/types";
import type { PublicThemeSource } from "@/types/public-api";

const turkeyCrossCheckSources = [{
  label: "你的動畫：繁體中文作品名稱、主題曲與官方影片交叉核對",
  url: "https://youranimes.tw/animes/4078",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "繁體中文作品頁：第 9 話替換片頭與各話片尾使用情況交叉核對",
  url: "https://zh.wikipedia.org/wiki/%E4%BF%9D%E9%BD%A1%E7%90%83%E5%B0%91%E5%A5%B3%EF%BC%81",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const turkeyOpeningThemeSources = [{
  label: "動畫官方音樂頁：兩個片頭演唱版本、完整 credit 與角色歌專輯發行日",
  url: "https://turkey-project.com/music/",
  language: "ja",
  role: "first_party"
}, ...turkeyCrossCheckSources] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const turkeyMainEndingThemeSources = [{
  label: "動畫官方音樂頁：主片尾曲名、演唱者與完整 credit",
  url: "https://turkey-project.com/music/musiced/",
  language: "ja",
  role: "first_party"
}, ...turkeyCrossCheckSources] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const turkeyEpisodeEndingThemeSources = [{
  label: "動畫官方各話片尾頁：替換曲目、使用話數、發行日與完整 credit",
  url: "https://turkey-project.com/music/musicedlist/",
  language: "ja",
  role: "first_party"
}, ...turkeyCrossCheckSources] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const kamitsubakiThemeSources = [{
  label: "動畫官方網站：全 13 曲與逐話片尾對照",
  url: "https://kamitsubaki-anime.jp/music/",
  language: "ja",
  role: "first_party"
}, {
  label: "FINDME STORE：官方專輯完整曲目",
  url: "https://findmestore.thinkr.jp/products/ktr-000-0210",
  language: "ja",
  role: "first_party"
}, {
  label: "繁體中文作品頁：逐話片尾與創作 credit 交叉核對",
  url: "https://zh.wikipedia.org/wiki/%E7%A5%9E%E6%A4%BF%E5%B8%82%E5%BB%BA%E8%A8%AD%E4%B8%AD%E3%80%82",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const santaClausThemeSources = [{
  label: "動畫官方網站：主題曲、角色歌手與發行入口",
  url: "https://ao-buta.com/santa/",
  language: "ja",
  role: "first_party"
}, {
  label: "動畫官方網站：官方無字幕主題曲影片",
  url: "https://ao-buta.com/santa/movie/",
  language: "ja",
  role: "first_party"
}, {
  label: "AnimeThemes：逐話演唱版本交叉核對",
  url: "https://animethemes.moe/anime/seishun_buta_yarou_wa_santa_claus_no_yume_wo_minai",
  language: "en",
  role: "cross_check"
}, {
  label: "巴哈姆特：繁體中文作品名稱與主題曲交叉核對",
  url: "https://acg.gamer.com.tw/acgDetail.php?s=136745",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const santaClausEndingSources = [
  ...santaClausThemeSources,
  {
    label: "歌ネット：完整片尾版演唱者、發行日與創作 credit",
    url: "https://www.uta-net.com/song/381284/",
    language: "ja",
    role: "cross_check"
  }
] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const vanguardDeluxeFinalsThemeSources = [{
  label: "動畫官方音樂頁：片頭與第 2 至 11 話輪替片尾、演唱者及完整 credit",
  url: "https://anime.cf-vanguard.com/vgd/music/finals/",
  language: "ja",
  role: "first_party"
}, {
  label: "你的動畫：繁體中文作品名稱、播出資料與官方影片交叉核對",
  url: "https://youranimes.tw/animes/5826",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "繁體中文作品頁：逐話輪替片尾與創作 credit 交叉核對",
  url: "https://zh.wikipedia.org/wiki/%E5%8D%A1%E7%89%87%E6%88%B0%E9%AC%A5%E5%85%88%E5%B0%8E%E8%80%85",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const watariThemeSources = [{
  label: "動畫官方音樂頁：兩季度 OP／ED 曲名與演唱者",
  url: "https://watarikunxx-anime.com/music/index.html",
  language: "ja",
  role: "first_party"
}, {
  label: "巴哈姆特 GNN：繁體中文作品名稱與首季度 OP／ED 分類",
  url: "https://gnn.gamer.com.tw/detail.php?sn=287110",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "你的動畫：繁體中文作品名稱、兩季度播出與影片交叉核對",
  url: "https://youranimes.tw/animes/4594",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const haikaraThemeSources = [{
  label: "動畫官方音樂頁：曲名、演唱成員與完整創作 credit",
  url: "https://boueibu.com/hc/music.html",
  language: "ja",
  role: "first_party"
}, {
  label: "動畫官方新聞：7 月 9 日先行配信與官方發行入口",
  url: "https://boueibu.com/hc/news/article024.html",
  language: "ja",
  role: "first_party"
}, {
  label: "Pony Canyon：OP／ED 實體發行與完整 credit",
  url: "https://www.ponycanyon.co.jp/music/PCCG000070551",
  language: "ja",
  role: "first_party"
}, {
  label: "ACG Secrets.HK：繁體中文作品名稱與聲優交叉核對",
  url: "https://acgsecrets.hk/anime/1866/",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "AnimeThemes：片頭與片尾分類交叉核對",
  url: "https://animethemes.moe/anime/binan_koukou_chikyuu_boueibu_haikara",
  language: "en",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const punirunesPuni3ThemeSources = [{
  label: "TAKARA TOMY 第 3 期官方資料：主題曲、演唱者與完整創作 credit",
  url: "https://www.takaratomy.co.jp/product_release/pdf/p250530.pdf",
  language: "ja",
  role: "first_party"
}, {
  label: "東京電視台主題歌表：第 3 期片頭曲分類",
  url: "https://www.tv-tokyo.co.jp/anime/song/",
  language: "ja",
  role: "first_party"
}, {
  label: "你的動畫：繁體中文作品名稱與第 3 期播出資料",
  url: "https://youranimes.tw/animes/5885",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "TV Guide：第 3 期片頭曲分類交叉核對",
  url: "https://www.tvguide.or.jp/db/anime/punirunes/season3/episode12/",
  language: "ja",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

export const curated2025SummerThemeSources = {
  "181867:OP:1": [{
    label: "動畫製作公司：OP 分類、歌手、作詞作曲 credit 與發行日",
    url: "https://fanworks.co.jp/news/cn231110/",
    language: "ja",
    role: "first_party"
  }, {
    label: "allcinema：第 3 期沿用主題曲及 credit 交叉核對",
    url: "https://www.allcinema.net/cinema/396974",
    language: "ja",
    role: "cross_check"
  }, {
    label: "你的動畫：繁體中文第 3 期作品資料交叉核對",
    url: "https://youranimes.tw/animes/5904",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "199486:OP:1": [{
    label: "關西電視台與 MMDGP 新聞稿：主題曲、歌手及作詞作曲 credit",
    url: "https://www.atpress.ne.jp/news/439592",
    language: "ja",
    role: "first_party"
  }, {
    label: "TuneCore Japan 官方發行頁：歌手、作詞作曲 credit 與串流入口",
    url: "https://linkco.re/R8VfCUUr",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位單曲發行日交叉核對",
    url: "https://music.apple.com/jp/album/moe-cat-spirit-single/1832975750",
    language: "ja",
    role: "cross_check"
  }, {
    label: "你的動畫：繁體中文作品資料與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5912",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "動畫歌曲發行索引：OP 分類與發行資料交叉核對",
    url: "https://anison-alacarte.hatenablog.com/entry/2025/08/17/090000",
    language: "ja",
    role: "cross_check"
  }],
  "159483:OP:1": [
    ...turkeyOpeningThemeSources,
    {
      label: "動畫官方新聞：片頭數位發行日與官方發行入口",
      url: "https://turkey-project.com/news/406/",
      language: "ja",
      role: "first_party"
    }
  ],
  "159483:OP:2": turkeyOpeningThemeSources,
  "159483:ED:1": [
    ...turkeyMainEndingThemeSources,
    {
      label: "Pony Canyon 官方唱片頁：主片尾數位發行日",
      url: "https://www.ponycanyon.co.jp/music/PCSP000006657",
      language: "ja",
      role: "first_party"
    }
  ],
  "159483:ED:2": turkeyEpisodeEndingThemeSources,
  "159483:ED:3": turkeyEpisodeEndingThemeSources,
  "159483:ED:4": turkeyEpisodeEndingThemeSources,
  "159483:ED:5": [
    ...turkeyEpisodeEndingThemeSources,
    {
      label: "やなぎなぎ官方網站：第 9 話歌曲與數位發行日",
      url: "https://yanaginagi.net/information/turkey_song/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:OP:1": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：片頭 TV Size 發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4115/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:1": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 1 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4120/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:2": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 2 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4123/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:3": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 3 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4124/",
      language: "ja",
      role: "first_party"
    }, {
      label: "Animate Times：特殊曲名讀音「Page」交叉核對",
      url: "https://animatetimes.com/news/details.php?id=1761101185&p=5",
      language: "ja",
      role: "cross_check"
    }
  ],
  "191994:ED:4": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 4 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4126/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:5": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 5 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4134/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:6": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 6 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4138/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:7": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 7 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4139/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:8": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 8 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4143/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:9": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 9 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4149/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:10": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 10 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4152/",
      language: "ja",
      role: "first_party"
    }
  ],
  "169420:OP:1": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：首季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00090000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Universal Music Japan：片頭曲發行日與官方發行入口",
      url: "https://www.universal-music.co.jp/yuika/news/2025-07-11/",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：片頭曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/377099/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "169420:OP:2": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：第二季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00270000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Universal Music Japan：第二季度片頭曲發行日",
      url: "https://www.universal-music.co.jp/shallm/news/2025-10-10/",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：第二季度片頭曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/381350/?target=art",
      language: "ja",
      role: "cross_check"
    }
  ],
  "169420:ED:1": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：首季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00090000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "PEDRO 官方新聞：片尾曲發行日與官方發行入口",
      url: "https://www.pedro.tokyo/news/detail/941",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：片尾曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/376023/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "169420:ED:2": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：第二季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00270000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Cloud Nine 官方新聞：第二季度片尾曲發行日與創作 credit",
      url: "https://cloud9pro.co.jp/news/p/12931/",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：第二季度片尾曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/381393/?target=composer",
      language: "ja",
      role: "cross_check"
    }
  ],
  "188653:ED:1": punirunesPuni3ThemeSources,
  "188138:OP:1": [
    ...haikaraThemeSources,
    {
      label: "歌ネット：片頭作詞、作曲與編曲資料交叉核對",
      url: "https://www.uta-net.com/song/376397/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "188138:ED:1": [
    ...haikaraThemeSources,
    {
      label: "歌ネット：片尾作詞、作曲與編曲資料交叉核對",
      url: "https://www.uta-net.com/song/376396/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "171046:OP:1": [
    ...santaClausThemeSources,
    {
      label: "歌ネット：數位發行日與完整創作 credit",
      url: "https://www.uta-net.com/song/376288/?target=art",
      language: "ja",
      role: "cross_check"
    }, {
      label: "Apple Music 日本：數位單曲發行日交叉核對",
      url: "https://music.apple.com/jp/album/%E3%82%B9%E3%83%8E%E3%82%A6%E3%83%89%E3%83%AD%E3%83%83%E3%83%97-single/1820147480",
      language: "ja",
      role: "cross_check"
    }
  ],
  "171046:ED:1": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：卯月版本影片與 7 月 6 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68161",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 1 卷：第 1 至 3 話與卯月 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/index.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:2": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：郁實版本影片與 7 月 27 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68329",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 2 卷：第 4 至 7 話與郁實 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/02.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:3": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：紗良版本影片與 8 月 24 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68512",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 3 卷：第 8 至 10 話與紗良 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/03.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:4": [
    ...santaClausEndingSources,
    {
      label: "動畫官方第 4 卷：第 11 至 13 話與霧島透子 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/04.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Apple Music 香港：霧島透子短版與 9 月 14 日發行日",
      url: "https://music.apple.com/hk/album/%E6%B0%B4%E5%B9%B3%E7%B7%9A%E3%81%AF%E5%83%95%E3%81%AE%E5%8F%A4%E5%82%B7-%E9%9C%A7%E5%B3%B6%E9%80%8F%E5%AD%90-short-ver-single/1836081218",
      language: "zh-Hant",
      role: "cross_check"
    }
  ],
  "171046:ED:5": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：寧寧版本影片與 9 月 21 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68771",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 4 卷：第 11 至 13 話與寧寧 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/04.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:6": [
    ...santaClausEndingSources,
    {
      label: "動畫官方原聲帶：四人完整版與 9 月 24 日發行日",
      url: "https://ao-buta.com/santa/music/ost.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Apple Music 日本：四人完整版曲目與發行日",
      url: "https://music.apple.com/jp/song/1838651290",
      language: "ja",
      role: "cross_check"
    }
  ],
  "173335:OP:1": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：數位發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/04/7838/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:1": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 0 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/09/7844/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:2": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 2 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/23/8019/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:3": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 3 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/30/8101/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:4": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 4 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/08/06/8164/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:5": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 5 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/08/13/8209/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:6": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 6 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/08/20/8273/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:7": [...kamitsubakiThemeSources],
  "173335:ED:8": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 8 話片尾與完整創作 credit",
      url: "https://kamitsubaki.jp/discography/harusaruhi/8863/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:9": [
    ...kamitsubakiThemeSources,
    {
      label: "歌ネット：原始發行日與編曲 credit 交叉核對",
      url: "https://www.uta-net.com/song/352282/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "173335:ED:10": [
    ...kamitsubakiThemeSources,
    {
      label: "Apple Music 台灣：數位單曲發行日交叉核對",
      url: "https://music.apple.com/tw/album/%E9%9B%BB%E8%84%B3-sinka-ver-feat-%E8%8A%B1%E8%AD%9C-%E7%90%86%E8%8A%BD-%E6%98%A5%E7%8C%BF%E7%81%AB-%E3%83%B0%E4%B8%96%E7%95%8C%E6%83%85%E7%B7%92-%E5%B9%B8%E7%A5%9C-single/1837327942",
      language: "zh-Hant",
      role: "cross_check"
    }
  ],
  "173335:ED:11": [...kamitsubakiThemeSources],
  "155838:OP:1": [{
    label: "動畫官方網站：無字幕片頭影片",
    url: "https://tsuyosaga-pr.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "4s4ki 官方作品頁：數位單曲與發行日",
    url: "https://4s4ki.xyz/discography/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Victor Entertainment：發行日與動畫搭配資料",
    url: "https://www.jvcmusic.co.jp/-/Linkall/VE3WT-11789.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376007/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "遊戲基地：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://news.gamebase.com.tw/news/detail/99433765",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "155838:ED:1": [{
    label: "動畫官方網站：無字幕片尾影片",
    url: "https://tsuyosaga-pr.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：數位單曲與發行日",
    url: "https://wmg.jp/mahirucoda/discography/31681/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Artists：動畫搭配、無字幕片尾與發行日",
    url: "https://www.sma.co.jp/s/sma/news/detail/110938?ima=0000&link=ROBO004",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/377110/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "遊戲基地：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://news.gamebase.com.tw/news/detail/99433765",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178869:OP:1": [{
    label: "動畫官方網站：主題曲、創作 credit、發行日與無字幕片頭",
    url: "https://clevatess.com/1st/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "前島麻由官方作品頁：數位單曲、動畫搭配與發行日",
    url: "https://mayumaeshima.com/discography/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375807/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5325",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178869:ED:1": [{
    label: "動畫官方網站：片尾曲與無字幕片尾",
    url: "https://clevatess.com/1st/music/ed.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：正式單曲與發行日",
    url: "https://www.universal-music.co.jp/elliegoulding/products/00602488232579/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Shazam：歌曲作者名單交叉核對",
    url: "https://www.shazam.com/song/1850005429/destiny",
    language: "en",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5325",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "187387:OP:1": [{
    label: "Sony Music：完整 MV、動畫搭配與官方發行入口",
    url: "https://ssl.sme.co.jp/artist/wyxt/info/575903",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：實體單曲、無字幕片頭與發行資料",
    url: "https://www.sonymusic.co.jp/artist/wyxt/info/576587",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375988/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Apple Music 台灣：數位發行日與曲目交叉核對",
    url: "https://music.apple.com/tw/album/cry-out-cry-over-single/1821801082",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5743",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "187387:ED:1": [{
    label: "Sony Music：數位發行日、動畫搭配與官方發行入口",
    url: "https://www.sonymusic.co.jp/artist/9Lana/info/575160",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：完整 MV 與實體單曲資料",
    url: "https://www.sonymusic.co.jp/artist/9Lana/info/575921",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/375895/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5743",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "169440:OP:1": [{
    label: "動畫第二季官方網站：主題曲與實體專輯資料",
    url: "https://jihanki-anime.com/2nd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：片頭與片尾影片",
    url: "https://up-info.news/jihanki-anime/article/20250723_2nd_op_ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "BRADIO 官方消息：先行配信日與動畫搭配",
    url: "https://bradio.jp/news/detail/1928",
    language: "ja",
    role: "first_party"
  }, {
    label: "BRADIO 官方消息：完整 MV 與專輯資料",
    url: "https://bradio.jp/news/detail/1948",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位首發日交叉核對",
    url: "https://music.apple.com/jp/song/1815216677",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲、編曲與專輯發售日交叉核對",
    url: "https://www.uta-net.com/song/375608/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱交叉核對",
    url: "https://youranimes.tw/animes/4614",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "169440:ED:1": [{
    label: "動畫第二季官方網站：片尾曲與創作 credit",
    url: "https://jihanki-anime.com/2nd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：片頭與無字幕片尾影片",
    url: "https://up-info.news/jihanki-anime/article/20250723_2nd_op_ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：數位發行日與創作 credit",
    url: "https://up-info.news/jihanki-anime/article/20250827_ed2_aibaaina.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位單曲、發行日與唱片公司",
    url: "https://music.apple.com/jp/album/my-own-horizon-single/1834061522",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲、編曲與發行日交叉核對",
    url: "https://www.uta-net.com/song/381058/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱交叉核對",
    url: "https://youranimes.tw/animes/4614",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185505:OP:1": [{
    label: "動畫官方網站：主題曲與演唱者資料",
    url: "https://anime-necronomico.help/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：數位發行日、動畫搭配與完整 MV",
    url: "https://www.universal-music.co.jp/ryushen/news/2025-07-02-3/",
    language: "ja",
    role: "first_party"
  }, {
    label: "F.M.F：發行日與創作 credit",
    url: "https://www.fmf-music.com/feat-works/%E7%B7%91%E4%BB%99-2/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375512/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5625",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185505:ED:1": [{
    label: "動畫官方網站：主題曲、演唱者與唱片公司資料",
    url: "https://anime-necronomico.help/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位發行日交叉核對",
    url: "https://music.apple.com/jp/song/1819846354",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376457/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5625",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186052:OP:1": [{
    label: "動畫官方新聞：主題曲與無字幕片頭影片",
    url: "https://mizuzokusei-anime.com/news/post-55",
    language: "ja",
    role: "first_party"
  }, {
    label: "名誉伝説官方作品頁：數位單曲",
    url: "https://meiyodensetsu.com/discography/66/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位發行日交叉核對",
    url: "https://music.apple.com/jp/song/1825825583",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/377031/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5663",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186052:ED:1": [{
    label: "動畫官方新聞：主題曲與無字幕片尾影片",
    url: "https://mizuzokusei-anime.com/news/post-55",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：數位單曲與發行日",
    url: "https://www.universal-music.co.jp/misaki/products/uk1as-03272/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：動畫搭配與歌曲背景",
    url: "https://www.universal-music.co.jp/misaki/news/2025-06-13/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375850/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5663",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178675:OP:1": [{
    label: "動畫官方網站：主題曲與數位發行日",
    url: "https://badgirl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方新聞：片頭曲與演唱組合",
    url: "https://news.kingrecords.co.jp/2025/06/39728/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方商品頁：專輯曲目與演唱成員",
    url: "https://www.kingrecords.co.jp/cs/g/gKICA-2640/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380619/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5311",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178675:ED:1": [{
    label: "動畫官方網站：主題曲與數位發行日",
    url: "https://badgirl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：無字幕片尾、創作 credit 與演唱成員",
    url: "https://badgirl-anime.com/news/20250701_160/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方商品頁：專輯曲目與演唱成員",
    url: "https://www.kingrecords.co.jp/cs/g/gKICA-2640/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380614/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5311",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178675:ED:2": [{
    label: "動畫官方網站：主題曲與數位發行日",
    url: "https://badgirl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方商品頁：專輯曲目與演唱資料",
    url: "https://www.kingrecords.co.jp/cs/g/gKICA-2640/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方專輯介紹：曲目與配信頁",
    url: "https://news.kingrecords.co.jp/2025/09/43682/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380615/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與特別片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5311",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178433:OP:1": [{
    label: "動畫官方網站：片頭主題曲與演唱者資料",
    url: "https://mynoghra-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "佐々木李子官方作品頁：先行配信日、創作 credit 與完整 MV",
    url: "https://sasakirico.com/discography.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376221/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5300",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178433:ED:1": [{
    label: "動畫官方網站：片尾主題曲與演唱者資料",
    url: "https://mynoghra-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "寺島拓篤官方新聞：作詞、作曲與編曲 credit",
    url: "https://takuma-terashima.lantis.jp/news/2256/",
    language: "ja",
    role: "first_party"
  }, {
    label: "寺島拓篤官方新聞：數位先行配信日",
    url: "https://takuma-terashima.lantis.jp/news/2263/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位單曲與發行日交叉核對",
    url: "https://music.apple.com/jp/album/more-than-w-single/1818305545",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376225/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5300",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189326:OP:1": [{
    label: "動畫官方網站：後篇片頭曲、創作 credit 與數位發行日",
    url: "https://hanakokun.com/2nd/music/music20250618_01/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：後篇無字幕片頭",
    url: "https://hanakokun.com/2nd/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：完整 MV、數位發行與實體單曲資料",
    url: "https://news.ponycanyon.co.jp/2025/07/112752",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375880/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5803",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189326:ED:1": [{
    label: "動畫官方網站：後篇片尾曲、創作 credit 與數位發行日",
    url: "https://hanakokun.com/2nd/music/music20250618_02/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：後篇無字幕片尾",
    url: "https://hanakokun.com/2nd/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方作品頁：數位單曲與發行日",
    url: "https://www.ponycanyon.co.jp/music/PCSP000006624",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375881/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5803",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "170113:OP:1": [{
    label: "動畫官方網站：片頭曲、創作 credit 與實體單曲資料",
    url: "https://koujodenka-anime.com/products/detail/i2on4skfkrn9/",
    language: "ja",
    role: "first_party"
  }, {
    label: "前島亜美官方消息：數位先行配信日",
    url: "https://maeshima-ami.net/contents/956548",
    language: "ja",
    role: "first_party"
  }, {
    label: "前島亜美官方作品頁：完整 MV、實體單曲與創作 credit",
    url: "https://maeshima-ami.net/musics/18699",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376296/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/4818",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "170113:ED:1": [{
    label: "動畫官方網站：片尾曲、創作 credit 與專輯資料",
    url: "https://koujodenka-anime.com/products/detail/ho9ktey11y/",
    language: "ja",
    role: "first_party"
  }, {
    label: "岡咲美保官方消息：專輯曲目、創作 credit 與發行日",
    url: "https://www.okasakimiho.com/news/20250420_08.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方消息：數位先行配信日與完整 MV",
    url: "https://news.kingrecords.co.jp/2025/06/40407/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375886/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/4818",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180460:OP:1": [{
    label: "動畫官方網站：片頭曲、演唱者、配信頁與發行日",
    url: "https://mattan-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方消息：作詞、作曲、編曲與數位發行日",
    url: "https://www.sonymusic.co.jp/artist/okazakitaiiku/info/574487",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Artists 官方消息：完整 MV",
    url: "https://www.sma.co.jp/s/sma/news/detail/110995?link=ROBO009",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲、編曲與發行日交叉核對",
    url: "https://www.uta-net.com/song/375667/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5426",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180460:ED:1": [{
    label: "動畫官方網站：片尾曲、演唱者、配信頁與發行日",
    url: "https://mattan-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "KADOKAWA 動畫官方頻道：無字幕片尾影片",
    url: "https://www.youtube.com/watch?v=63MdWK5-Ogk",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：作詞、作曲、編曲與發行日交叉核對",
    url: "https://music.apple.com/tw/song/1821384771",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲、編曲與發行日交叉核對",
    url: "https://www.uta-net.com/song/375804/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5426",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180460:ED:2": [{
    label: "KADOKAWA 動畫官方頻道：第 11 話特殊片尾曲與無字幕影片",
    url: "https://www.youtube.com/watch?v=h5N8L66avCM",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：原聲帶配信頁與發行日",
    url: "https://mattan-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "アニシル：第 11 話使用集數、譯詞、作曲與編曲交叉核對",
    url: "https://www.anisil.com/animes/6354-%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%8F%E6%9C%80%E8%BF%91%E3%81%AE%E6%8E%A2%E5%81%B5%E3%81%A8%E3%81%8D%E3%81%9F%E3%82%89",
    language: "ja",
    role: "cross_check"
  }, {
    label: "平成與令和電視動畫資料庫：原詞、譯詞、作曲、編曲與發行日交叉核對",
    url: "https://televimanga.blog.jp/archives/90008939.html",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與特殊片尾影片交叉核對",
    url: "https://youranimes.tw/animes/5426",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189069:OP:1": [{
    label: "動畫官方網站：主題曲、演唱者與官方配信頁",
    url: "https://milkygalacticuniverse.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "シンエイ動画官方作品頁：主題曲與演唱者資料",
    url: "https://shin-ei-animation.jp/works/milkysubway/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方唱片頁：收錄作品交叉核對",
    url: "https://www.sonymusic.co.jp/artist/CANDIES/discography/buy/SRCL-4351",
    language: "ja",
    role: "first_party"
  }, {
    label: "記憶の記録 LIBRARY：原始專輯、曲目與發行日交叉核對",
    url: "https://www.kiokunokiroku.jp/artist/000484/archive/008378",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：動畫搭配、作詞、作曲與編曲交叉核對",
    url: "https://www.uta-net.com/song/219943/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5774",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189069:OP:2": [{
    label: "動畫官方消息：第 1 話片頭分類、演唱與完整製作名單",
    url: "https://back-cms.milkygalacticuniverse.com/158/",
    language: "ja",
    role: "first_party"
  }, {
    label: "MindaRyn 官方作品頁：發行日、製作名單與官方影片",
    url: "https://mindaryn.com/discography/altair-and-vega/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Bandai Namco Music Live 官方消息：第 1 話片頭、發行日、製作名單與影片",
    url: "https://pylonport.bandainamcomusiclive.co.jp/news/311",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：第 1 話片頭與製作名單交叉核對",
    url: "https://www.uta-net.com/song/379448/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與第 1 話片頭影片交叉核對",
    url: "https://youranimes.tw/animes/5774",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185544:OP:1": [{
    label: "動畫官方網站：片頭曲與演唱者資料",
    url: "https://tsuihosha-shokudo.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Dannie May 官方作品頁：創作名單與數位配信頁",
    url: "https://danniemay.com/disco/33th-single%EF%BC%BBdigital%EF%BC%BD%E3%83%A6%E3%83%8B%E3%83%BC%E3%82%AF/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：動畫搭配、發行日、作詞、作曲與編曲交叉核對",
    url: "https://www.uta-net.com/song/376080/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5633",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185544:ED:1": [{
    label: "動畫官方網站：片尾曲與演唱者資料",
    url: "https://tsuihosha-shokudo.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "超ときめき♡宣伝部官方消息：動畫片尾曲分類與演唱資料",
    url: "https://toki-sen.com/contents/939957",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：動畫搭配、發行日、作詞、作曲與編曲交叉核對",
    url: "https://www.uta-net.com/song/376602/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5633",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186561:OP:1": [{
    label: "Cloud Nine 官方消息：動畫片頭曲、製作名單、發行日與配信頁",
    url: "https://cloud9pro.co.jp/news/p/11567/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方作品頁：數位單曲與發行日",
    url: "https://www.ponycanyon.co.jp/music/PCSP000006631",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方消息：完整 MV、動畫搭配、製作名單與發行日",
    url: "https://news.ponycanyon.co.jp/2025/07/112924",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5704",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186561:ED:1": [{
    label: "Pony Canyon 官方作品頁：數位單曲資料",
    url: "https://www.ponycanyon.co.jp/music/PCSP000006516",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲、演唱者與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5704",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "繁體中文維基百科：主題曲分類、演唱者與製作名單交叉核對",
    url: "https://zh.wikipedia.org/wiki/%E6%B0%A3%E7%B5%95%E5%8B%87%E8%80%85%E8%88%87%E6%9A%97%E6%AE%BA%E5%85%AC%E4%B8%BB",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180794:OP:1": [{
    label: "動畫官方消息：片頭曲、演唱者、完整製作名單與發行日",
    url: "https://gacen-girl-anime.com/news/index00200000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方音樂頁：片頭曲、雙人演唱與製作名單",
    url: "https://gacen-girl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：片頭曲、演唱者與製作名單交叉核對",
    url: "https://www.uta-net.com/song/376133/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5437",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "繁體中文維基百科：作品名稱、片頭曲、演唱者與製作名單交叉核對",
    url: "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%A8%82%E5%A0%B4%E5%B0%91%E5%A5%B3%E7%9A%84%E7%95%B0%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180794:ED:1": [{
    label: "動畫官方消息：片尾曲、演唱者與完整製作名單",
    url: "https://gacen-girl-anime.com/news/index00120000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方消息：片尾曲與發行日",
    url: "https://gacen-girl-anime.com/news/index00200000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方音樂頁：片尾曲、演唱者、製作名單與配信入口",
    url: "https://gacen-girl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5437",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "繁體中文維基百科：作品名稱、片尾曲、演唱者與製作名單交叉核對",
    url: "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%A8%82%E5%A0%B4%E5%B0%91%E5%A5%B3%E7%9A%84%E7%95%B0%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "196229:OP:1": [{
    label: "Takara Tomy 官方播出頁：主題曲分類、演唱者與完整製作名單",
    url: "https://www.takaratomy.co.jp/products/tomica/jobraver/anime/broadcast/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Takara Tomy 官方新聞稿：片頭主題曲、演唱者與完整製作名單",
    url: "https://www.takaratomy.co.jp/product_release/pdf/p250516.pdf",
    language: "ja",
    role: "first_party"
  }, {
    label: "ORICON NEWS：2025 電視動畫與主題曲交叉核對",
    url: "https://www.oricon.co.jp/anime/187/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "アニソン・オンライン：主題曲與演唱者交叉核對",
    url: "https://anison.online/anime/5312",
    language: "ja",
    role: "cross_check"
  }, {
    label: "PChome：繁體中文系列名稱交叉核對",
    url: "https://24h.pchome.com.tw/books/prod/DJBF1Z-A900JVNCW",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179885:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、演唱者、完整製作名單與實體單曲資料",
    url: "https://tsuiho-shiromadoshi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "梶原岳人官方作品頁：單曲、動畫搭配與實體發行資料",
    url: "https://avex.jp/kajiwaragakuto/discography/?c=single",
    language: "ja",
    role: "first_party"
  }, {
    label: "梶原岳人官方消息：數位單曲先行配信日",
    url: "https://avex.jp/kajiwaragakuto/news/detail.php?id=1126205",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5390",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：2025 夏季片頭曲與演唱者交叉核對",
    url: "https://home.gamer.com.tw/artwork.php?sn=6167561",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179885:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、演唱者、完整製作名單與數位配信日",
    url: "https://tsuiho-shiromadoshi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ChouCho 官方完整 MV：動畫搭配與完整歌曲",
    url: "https://www.youtube.com/watch?v=lucxQJk-KLI",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music：數位單曲與發行日",
    url: "https://music.apple.com/jp/song/1820168761",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5390",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：2025 夏季片尾曲與演唱者交叉核對",
    url: "https://home.gamer.com.tw/artwork.php?sn=6167561",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179678:OP:1": [{
    label: "動畫官方網站：無字幕片頭、數位配信與單曲資料",
    url: "https://nube-anime.com/news/1492/",
    language: "ja",
    role: "first_party"
  }, {
    label: "慈愚挫愚官方網站：數位單曲與發行日",
    url: "https://zigzag.asia/works/haishin-014.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376209/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286773",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭影片交叉核對",
    url: "https://youranimes.tw/animes/5360",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179678:ED:1": [{
    label: "動畫官方網站：無字幕片尾與數位配信資料",
    url: "https://nube-anime.com/news/1602/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Chilli Beans. 官方作品頁：數位單曲與發行入口",
    url: "https://chilli-beans.com/discography/detail/5532/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Chilli Beans. 官方新聞：動畫搭配與發行日",
    url: "https://chilli-beans.com/news/detail/34262",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376337/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286773",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾影片交叉核對",
    url: "https://youranimes.tw/animes/5360",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "193883:OP:1": [{
    label: "動畫官方網站：作品與主題曲資料",
    url: "https://chibigodzilla.jp/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：發行日與動畫搭配資料",
    url: "https://wmg.jp/wedcamp/discography/31405/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：無字幕片頭影片資料",
    url: "https://wmg.jp/wedcamp/news/90120/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：完整 MV 資料",
    url: "https://wmg.jp/wedcamp/news/90142/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/375984/",
    language: "ja",
    role: "cross_check"
  }],
  "156395:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://busunihanatabawo.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "TWS 官方網站：動畫搭配與詞曲編資料",
    url: "https://tws-official.jp/news/99f75560b878",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/3974",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "156395:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://busunihanatabawo.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "VAP 官方新聞稿：發行與完整 MV 資料",
    url: "https://prtimes.jp/main/html/rd/p/000000121.000034440.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376492/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/3974",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:OP:1": [{
    label: "動畫官方網站：京都篇片頭曲",
    url: "https://tougenanki-anime.com/music/op/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞稿：發行、完整 MV 與無字幕片頭影片",
    url: "https://prtimes.jp/main/html/rd/p/000002024.000031071.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "THE ORAL CIGARETTES 官方網站：動畫 MV",
    url: "https://theoralcigarettes.com/news/detail/3047",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376218/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:OP:2": [{
    label: "動畫官方網站：練馬篇片頭曲",
    url: "https://tougenanki-anime.com/music/op2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "超学生官方網站：單曲發行資料",
    url: "https://chogakusei.com/discography",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380958/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:ED:1": [{
    label: "動畫官方網站：京都篇片尾曲",
    url: "https://tougenanki-anime.com/music/ed/",
    language: "ja",
    role: "first_party"
  }, {
    label: "BAND-MAID 官方網站：發行與完整 MV 資料",
    url: "https://bandmaid.tokyo/musics/19155",
    language: "ja",
    role: "first_party"
  }, {
    label: "波麗佳音台灣：繁體中文發行與 MV 資料",
    url: "https://ponycanyon.com.tw/post/2788/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376543/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:ED:2": [{
    label: "動畫官方網站：練馬篇片尾曲",
    url: "https://tougenanki-anime.com/music/ed2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：發行與完整 MV 資料",
    url: "https://news.ponycanyon.co.jp/2025/10/115143",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380937/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185965:OP:1": [{
    label: "動畫官方網站：第一季度片頭曲與發行資料",
    url: "https://2solocamp-anime.com/music/op.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "スカート官方網站：動畫搭配與發行資料",
    url: "https://skirtskirtskirt.com/news/post/5840",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376140/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5658",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185965:OP:2": [{
    label: "動畫官方網站：第二季度片頭曲與發行資料",
    url: "https://2solocamp-anime.com/music/op2.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "LDH 官方新聞：動畫搭配、發行與完整 MV 資料",
    url: "https://www.ldh.co.jp/news/detail.php?lang=jpn&newsid=0000052169&site=TRIBE",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380656/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5658",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185965:ED:1": [{
    label: "動畫官方網站：片尾曲、發行與完整製作名單",
    url: "https://2solocamp-anime.com/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "オーイシマサヨシ官方網站：單曲發行與完整製作名單",
    url: "https://www.014014.jp/discography/6954",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376259/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5658",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198745:OP:1": [{
    label: "ABC Animation 官方唱片頁：片頭曲、發行日與完整製作名單",
    url: "https://www.abc-anime.co.jp/music/detail?id=1",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/381649/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "三隻老虎的原聲帶筆記：繁體中文作品名稱與季度音樂資料交叉核對",
    url: "https://santora.tw/2025-summer-anime/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198745:ED:1": [{
    label: "ABC Animation 官方唱片頁：片尾曲、發行日與完整製作名單",
    url: "https://www.abc-anime.co.jp/music/detail?id=2",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/381652/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "三隻老虎的原聲帶筆記：繁體中文作品名稱與季度音樂資料交叉核對",
    url: "https://santora.tw/2025-summer-anime/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "194088:ED:1": [{
    label: "東京電視台官方新聞稿：第十五期片尾曲資料",
    url: "https://www.tv-tokyo.co.jp/information/202506/5057.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "ナオト・インティライミ官方網站：動畫搭配與正式曲名",
    url: "https://www.nananaoto.com/news/ENJ_naoto_news_6ce0462a9f6e48ac8dfdf7e48d4e9726",
    language: "ja",
    role: "first_party"
  }, {
    label: "ナオト・インティライミ官方網站：發行日、Lyric Video 與發行入口",
    url: "https://www.nananaoto.com/news/ENJ_naoto_news_3b7a976fb0f60351d96a3b97923e7c2a",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376618/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：季度作品與片尾曲交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E6%9A%97%E8%8A%9D%E5%B1%85",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166215:OP:1": [{
    label: "動畫官方網站：主題曲與製作名單",
    url: "https://utamille.com/music/post-7/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：演唱組合、單曲發行日與完整製作名單",
    url: "https://news.ponycanyon.co.jp/2025/05/111101",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：曲名、發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375907/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲交叉核對",
    url: "https://youranimes.tw/animes/4331/videos",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：正式中文作品名稱、演唱組合與製作名單交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E6%AD%8C%E8%81%B2%E6%98%AF%E6%B3%95%E5%BC%8F%E5%8D%83%E5%B1%A4%E9%85%A5",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175914:OP:1": [{
    label: "動畫官方網站：第二季片頭曲與作品搭配資料",
    url: "https://yofukashi-no-uta.com/news/20250605_130/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：數位發行日與動畫搭配資料",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/info/574463",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：正式 MV、發行入口與單曲資料",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/info/575650",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲名單交叉核對",
    url: "https://www.uta-net.com/song/376217/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175914:ED:1": [{
    label: "動畫官方網站：第二季片尾曲與作品搭配資料",
    url: "https://yofukashi-no-uta.com/news/20250704_183/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：數位發行日、發行入口與單曲資料",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/info/575650",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲名單交叉核對",
    url: "https://www.uta-net.com/song/376216/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175914:ED:2": [{
    label: "動畫第一季官方網站：正式歌曲名稱與作品搭配資料",
    url: "https://yofukashi-no-uta.com/1st/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方數位單曲頁：正式曲名與原始發行日",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/discography/buy/AIXX01411B01A",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲名單交叉核對",
    url: "https://www.uta-net.com/song/260226/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179344:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://kanokari-official.com/4th/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：數位發行日與正式發行入口",
    url: "https://www.sonymusic.co.jp/artist/claris/info/575423",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：正式 MV 與歌曲發行資料",
    url: "https://www.sonymusic.co.jp/artist/claris/info/575422",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=49141",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179344:ED:1": [{
    label: "動畫官方網站：片尾曲、作詞與作曲名單",
    url: "https://kanokari-official.com/4th/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "リーガルリリー官方新聞：數位發行日、正式 MV 與發行入口",
    url: "https://www.office-augusta.com/regallily/news/?post=news-20250701",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲名單交叉核對",
    url: "https://www.uta-net.com/song/375577/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=49141",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "183128:OP:1": [{
    label: "動畫官方網站：片頭曲與數位發行日",
    url: "https://karaoke-muchusa.com/muchusa/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "A-Sketch 官方唱片頁：發行日與完整製作名單",
    url: "https://www.a-sketch.com/discography/%E3%83%A9%E3%83%96%E3%83%AB/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45336",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：片頭曲與製作名單交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E7%82%BA%E4%BD%A0%E8%91%97%E8%BF%B7",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "183128:ED:1": [{
    label: "動畫官方網站：片尾曲與數位發行日",
    url: "https://karaoke-muchusa.com/muchusa/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "山下大輝官方唱片頁：動畫搭配、發行日與完整製作名單",
    url: "https://yamashitadaiki.com/discography/1171/",
    language: "ja",
    role: "first_party"
  }, {
    label: "A-Sketch 官方唱片頁：完整製作名單與發行入口",
    url: "https://www.a-sketch.com/discography/%E5%B1%B1%E4%B8%8B%E5%A4%A7%E8%BC%9D-x-%E7%95%A0%E4%B8%AD%E7%A5%90%E3%80%8C%E5%BE%AE%E7%82%AD%E9%85%B8%E3%82%A2%E3%83%89%E3%83%AC%E3%82%BB%E3%83%B3%E3%82%B9%E3%80%8D/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45336",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：片尾曲與製作名單交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E7%82%BA%E4%BD%A0%E8%91%97%E8%BF%B7",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198408:ED:1": [{
    label: "動畫官方網站：主題曲、演唱者與完整製作名單",
    url: "https://latair.jp/tvanime/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：主題曲、製作名單與官方影片",
    url: "https://latair.jp/2025/08/14/latair0905/",
    language: "ja",
    role: "first_party"
  }, {
    label: "CLASS EARTH 官方新聞稿：主題曲與作品搭配資料",
    url: "https://prtimes.jp/main/html/rd/p/000000033.000121038.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "ORICON NEWS：作品與主題曲交叉核對",
    url: "https://www.oricon.co.jp/anime/428/",
    language: "ja",
    role: "cross_check"
  }],
  "183127:OP:1": [{
    label: "動畫官方網站：片頭曲與作品搭配資料",
    url: "https://karaoke-muchusa.com/karaoke/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方唱片頁：發行日與正式 MV",
    url: "https://wmg.jp/ayumu-imazu/discography/31724/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方新聞：數位發行日與動畫搭配資料",
    url: "https://wmg.jp/ayumu-imazu/news/90155/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲與編曲名單交叉核對",
    url: "https://www.uta-net.com/song/377098/",
    language: "ja",
    role: "cross_check"
  }],
  "181841:OP:1": [{
    label: "動畫官方網站：片頭曲與發行資料",
    url: "https://city-the-animation.com/music/opening/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：作品發行資料",
    url: "https://news.ponycanyon.co.jp/2025/05/111305",
    language: "ja",
    role: "first_party"
  }, {
    label: "Prime Video 台灣：繁體中文作品與集數交叉核對",
    url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "181841:ED:1": [{
    label: "動畫官方網站：片尾曲與發行資料",
    url: "https://city-the-animation.com/music/ending/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：作品發行與 MV 資料",
    url: "https://news.ponycanyon.co.jp/2025/07/112579",
    language: "ja",
    role: "first_party"
  }, {
    label: "Prime Video 台灣：繁體中文作品與集數交叉核對",
    url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "181841:ED:3": [{
    label: "動畫官方網站：第 11 話資料",
    url: "https://city-the-animation.com/story/11/",
    language: "ja",
    role: "first_party"
  }, {
    label: "美國國會圖書館：器樂曲與作曲者資料交叉核對",
    url: "https://lcweb2.loc.gov/static/programs/national-recording-preservation-board/documents/Mambo-No-5_Firmat.pdf",
    language: "en",
    role: "cross_check"
  }, {
    label: "Prime Video 台灣：繁體中文第 11 話交叉核對",
    url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175124:OP:1": [{
    label: "動畫官方網站：片頭曲資料",
    url: "https://nyailivi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "THE YELLOW MONKEY 官方歌詞頁：作詞與作曲資料",
    url: "https://theyellowmonkeysuper.jp/lyrics/detail/1029/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：發行與動畫搭配資料",
    url: "https://wmg.jp/theyellowmonkey/news/90143/",
    language: "ja",
    role: "first_party"
  }, {
    label: "VGMdb：唱片編曲資料交叉核對",
    url: "https://vgmdb.net/album/152460",
    language: "en",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286804",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175124:ED:1": [{
    label: "動畫官方網站：片尾曲資料",
    url: "https://nyailivi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WANIMA 官方網站：作品與發行資料",
    url: "https://wanima.net/musics/19109",
    language: "ja",
    role: "first_party"
  }, {
    label: "WANIMA 官方網站：動畫搭配與 MV 資料",
    url: "https://wanima.net/contents/960452",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376149/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與片尾曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286804",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179828:OP:1": [{
    label: "動畫官方網站：片頭曲、影片與發行資料",
    url: "https://cuckoos-anime.com/news.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Labels 官方新聞稿：製作名單、MV 與發行資料",
    url: "https://prtimes.jp/main/html/rd/p/000004609.000013546.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫瘋：繁體中文主題曲與完整製作名單交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5377",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179828:ED:1": [{
    label: "動畫官方網站：片尾曲、影片與發行資料",
    url: "https://cuckoos-anime.com/news.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "22/7 官方網站：製作名單、MV 與發行資料",
    url: "https://nanabunnonijyuuni-mobile.com/s/n110/news/detail/10840",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方唱片頁：作品與動畫搭配資料",
    url: "https://www.sonymusic.co.jp/artist/nanabunnonijyuuni/discography/SRCL-13336",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫瘋：繁體中文主題曲與完整製作名單交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5377",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182309:OP:1": [{
    label: "動畫官方網站：片頭曲與合作歌手資料",
    url: "https://grandblue-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "湘南乃風官方網站：完整歌曲、發行與配信資料",
    url: "https://www.134r.com/news/detail.html?id=9335",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：唱片與發行資料",
    url: "https://www.universal-music.co.jp/shounannokaze/products/up1as-02840/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380539/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與台灣播出資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=288001",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5491",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182309:ED:1": [{
    label: "動畫官方網站：片尾曲、合作歌手與發行資料",
    url: "https://grandblue-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "SEAMO 官方網站：動畫搭配與配信資料",
    url: "https://seamo.jp/contents/959127",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376306/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與台灣播出資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=288001",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5491",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184591:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://www.watanare-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：作品、MV 與發行資料",
    url: "https://www.sonymusic.co.jp/artist/nanaoakari/info/575468",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376166/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "動畫瘋：繁體中文作品與主題曲交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5574",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184591:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://www.watanare-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "フィロソフィーのダンス官方網站：動畫搭配與發行資料",
    url: "https://danceforphilosophy.com/news/2025/06/10/5655",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方唱片頁：作品與發行資料",
    url: "https://www.sonymusic.co.jp/artist/philosophynodance/discography/SRCL-13389",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376528/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "動畫瘋：繁體中文作品與主題曲交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5574",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "173780:OP:1": [{
    label: "動畫官方網站：第四季片頭曲與演唱者資料",
    url: "https://shieldhero-anime.jp/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "日本哥倫比亞官方唱片頁：完整製作名單與發行資料",
    url: "https://columbia.jp/madkid/disco/resolution.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376402/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=284346",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/4965",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "173780:ED:1": [{
    label: "動畫官方網站：第四季片尾曲與演唱者資料",
    url: "https://shieldhero-anime.jp/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "日本哥倫比亞官方唱片頁：動畫搭配、MV 與發行資料",
    url: "https://columbia.jp/artist-info/fujikawachiai/discography/COKM-45814.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "藤川千愛官方網站：完整 MV 資料",
    url: "https://fujikawachiai.com/news/new_mv/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376247/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=284346",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/4965",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177880:OP:1": [{
    label: "動畫官方網站：第四季片頭曲與日語改編資料",
    url: "https://osomatsusan.com/news/detail/?id=1125264",
    language: "ja",
    role: "first_party"
  }, {
    label: "DA PUMP 官方網站：完整製作名單與動畫搭配資料",
    url: "https://dapump-fc.jp/news/detail/915",
    language: "ja",
    role: "first_party"
  }, {
    label: "avex 官方新聞：唱片、MV 與配信資料",
    url: "https://avexnet.jp/news/1027003",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376018/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286655",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5269",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177880:ED:1": [{
    label: "動畫官方網站：片尾曲、演唱組合與完整製作名單",
    url: "https://osomatsusan.com/news/detail/?id=1125436",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方唱片頁：演唱角色、版本與發行資料",
    url: "https://osomatsusan.com/bd-dvd-cd/detail/?id=1021053",
    language: "ja",
    role: "first_party"
  }, {
    label: "あたらよ官方網站：動畫搭配與完整製作名單",
    url: "https://atarayo-jp.com/contents/942360",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380723/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286655",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5269",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "151799:OP:1": [{
    label: "動畫官方音樂頁：唯一片頭曲條目、完整演出名義與發行資料",
    url: "https://newpsg.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：片頭曲、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376855/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Tower Records：唱片曲目與編曲資料交叉核對",
    url: "https://tower.jp/item/6853227",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品、片頭曲與 Ver.2 影片交叉核對",
    url: "https://youranimes.tw/animes/4368",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "151799:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、演出名義與發行資料",
    url: "https://newpsg.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "m-flo 官方網站：片尾曲搭配、演唱合作與配信資料",
    url: "https://m-flo.com/news/26",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：片尾曲、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376608/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Tower Records：唱片曲目與編曲資料交叉核對",
    url: "https://tower.jp/item/6853227",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/4368",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177887:OP:1": [{
    label: "Netflix 官方新聞：久石讓負責片頭、片尾與劇中歌曲",
    url: "https://about.netflix.com/ja/news/leviathan-takes-flight-on-july-10",
    language: "ja",
    role: "first_party"
  }, {
    label: "Qobuz／Netflix Music：原聲帶版本、作詞、作曲與配器資料交叉核對",
    url: "https://www.qobuz.com/us-en/album/leviathan-soundtrack-from-the-netflix-series-nobuko-toda-kazuma-jinnouchi/z8p6zgbtcmwib",
    language: "en",
    role: "cross_check"
  }, {
    label: "MusicBrainz：作品別名、作詞與作曲資料交叉核對",
    url: "https://musicbrainz.org/work/b621aa3d-03ba-4649-b58d-8a73de669241",
    language: "en",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5271",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177887:ED:1": [{
    label: "Netflix 官方新聞：久石讓負責片頭、片尾與劇中歌曲",
    url: "https://about.netflix.com/ja/news/leviathan-takes-flight-on-july-10",
    language: "ja",
    role: "first_party"
  }, {
    label: "Qobuz／Netflix Music：原聲帶演唱、作詞、作曲與配器資料交叉核對",
    url: "https://www.qobuz.com/us-en/album/leviathan-soundtrack-from-the-netflix-series-nobuko-toda-kazuma-jinnouchi/z8p6zgbtcmwib",
    language: "en",
    role: "cross_check"
  }, {
    label: "JOYSOUND：日文歌名、演唱、作詞與作曲資料交叉核對",
    url: "https://www.joysound.com/web/search/song/1123344",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5271",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178090:OP:1": [{
    label: "動畫官方音樂頁：第 2 期片頭曲、製作名單與發行資料",
    url: "https://dainanaoji.com/music",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5294",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片頭曲與製作名單交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=140000",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178090:ED:1": [{
    label: "動畫官方音樂頁：第 2 期片尾曲、製作名單與發行資料",
    url: "https://dainanaoji.com/music",
    language: "ja",
    role: "first_party"
  }, {
    label: "Lantis 官方商品頁：片尾曲曲目與製作名單",
    url: "https://www.lantis.jp/release-item/LACM-34706.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5294",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片尾曲與製作名單交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=140000",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178886:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、主唱與完整製作名單",
    url: "https://mikadono.family/music/op.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片頭曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "178886:ED:1": [{
    label: "動畫官方音樂頁：三首角色片尾曲與演唱名義",
    url: "https://mikadono.family/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aniplex 官方新聞：一輝版片尾曲、製作名單與無字幕影片",
    url: "https://www.aniplex.co.jp/news/detail/?id=68254",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方角色歌曲專輯頁：三首片尾曲收錄資料",
    url: "https://mikadono.family/music/cd.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與三首片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片尾曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "178886:ED:2": [{
    label: "動畫官方音樂頁：三首角色片尾曲與演唱名義",
    url: "https://mikadono.family/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aniplex 官方新聞：二琥版片尾曲、製作名單與無字幕影片",
    url: "https://www.aniplex.co.jp/news/detail/?id=68299",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方角色歌曲專輯頁：三首片尾曲收錄資料",
    url: "https://mikadono.family/music/cd.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與三首片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片尾曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "178886:ED:3": [{
    label: "動畫官方音樂頁：三首角色片尾曲與演唱名義",
    url: "https://mikadono.family/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aniplex 官方新聞：三和版片尾曲、製作名單與無字幕影片",
    url: "https://www.aniplex.co.jp/news/detail/?id=68366",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方角色歌曲專輯頁：三首片尾曲收錄資料",
    url: "https://mikadono.family/music/cd.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與三首片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片尾曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "185755:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://puniru-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286621",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5647",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185755:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://puniru-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：第二期歌曲專輯與翻唱資料",
    url: "https://puniru-anime.com/music/album02/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與季度交叉核對",
    url: "https://youranimes.tw/animes/5647",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184574:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://dekinnomogura.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "syudou 官方網站：作品與發行資料",
    url: "https://syudou.com/disco/%E7%A5%9E%E9%A0%BC%E3%81%BF/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5572",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184574:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://dekinnomogura.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aile The Shota 官方網站：客席演出與動畫搭配資料",
    url: "https://ailetheshota.tokyo/topic/dekinnomogura/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376277/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5572",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179879:OP:1": [{
    label: "動畫官方網站：片頭曲、發行與影片資料",
    url: "https://zutaboro-anime.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：作詞、作曲與編曲資料",
    url: "https://www.sonymusic.co.jp/artist/krage/info/576315",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5391",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179879:ED:1": [{
    label: "動畫官方網站：片尾曲、發行與影片資料",
    url: "https://zutaboro-anime.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Myuk 官方網站：作品、作詞、作曲與編曲資料",
    url: "https://myuk.jp/867/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5391",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186003:OP:1": [{
    label: "動畫官方網站：片頭曲資料",
    url: "https://www.fermat-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：作品發行與影片資料",
    url: "https://www.universal-music.co.jp/oshikikeigo/news/2025-06-13/",
    language: "ja",
    role: "first_party"
  }, {
    label: "音樂Natalie：作詞、作曲與編曲資料",
    url: "https://natalie.mu/music/pickup/oshikikeigo",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5661",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186003:ED:1": [{
    label: "動畫官方網站：片尾曲資料",
    url: "https://www.fermat-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "DXTEEN 官方繁體中文唱片頁：作品與動畫搭配資料",
    url: "https://dxteen.com/discography/detail/33/?lang=zh-tw",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376607/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5661",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184034:OP:1": [{
    label: "動畫官方網站：片頭曲與發行資料",
    url: "https://hotel-inhumans.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "imase 官方網站：作品發行資料",
    url: "https://www.imase-official.com/news/detail/324",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5554",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184034:ED:1": [{
    label: "動畫官方網站：片尾曲與發行資料",
    url: "https://hotel-inhumans.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：作品、影片與發行資料",
    url: "https://www.universal-music.co.jp/noa/news/2025-08-06/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376114/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5554",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "157960:OP:1": [{
    label: "動畫官方網站：主題曲與完整製作名單",
    url: "https://bullet-bullet.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "CHANMINA 官方網站：作品發行資料",
    url: "https://chanmina.com/discography/detail/43/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286389",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "157960:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://bullet-bullet.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：作品與發行資料",
    url: "https://wmg.jp/newspeak/discography/31707/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286389",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180929:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://rurinohouseki.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片與發行頁",
    url: "https://www.sonymusic.co.jp/artist/yasudarei/info/576243",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1872/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180929:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://rurinohouseki.com/music/?id=ed",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片與發行資料",
    url: "https://www.sonymusic.co.jp/artist/HanaHope/info/575991",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1872/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179966:OP:1": [{
    label: "動畫官方網站：片頭曲與共同發行資料",
    url: "https://silentwitch.net/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片頭影片公告",
    url: "https://silentwitch.net/news/?article_id=68152",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片公告",
    url: "https://www.sonymusic.co.jp/artist/hitsujibungaku/info/575459",
    language: "ja",
    role: "first_party"
  }, {
    label: "台灣索尼音樂：繁體中文作品與主題曲交叉核對",
    url: "https://www.sonymusic.com.tw/album/d-o-n-t-l-a-u-g-h-i-t-o-f-f/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Tower Records：作詞、作曲與編曲資料",
    url: "https://tower.jp/item/7109461",
    language: "ja",
    role: "cross_check"
  }],
  "179966:ED:1": [{
    label: "動畫官方網站：片尾曲與共同發行資料",
    url: "https://silentwitch.net/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片尾影片公告",
    url: "https://silentwitch.net/news/?article_id=68207",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片公告",
    url: "https://www.sonymusic.co.jp/artist/hitsujibungaku/info/573730",
    language: "ja",
    role: "first_party"
  }, {
    label: "台灣索尼音樂：繁體中文片尾曲資料",
    url: "https://www.sonymusic.com.tw/album/mild-days/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Tower Records：作詞、作曲與編曲資料",
    url: "https://tower.jp/item/7109461",
    language: "ja",
    role: "cross_check"
  }],
  "185519:OP:1": [{
    label: "動畫官方網站：片頭曲、製作名單與發行頁",
    url: "https://www.foodcourtjk-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌手官方網站：音樂影片公告",
    url: "https://oisiclemelonpan.com/news/3526/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1857/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185519:ED:1": [{
    label: "動畫官方網站：唯一片尾曲、製作名單與發行頁",
    url: "https://www.foodcourtjk-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：片尾曲串流公告",
    url: "https://www.foodcourtjk-anime.com/news/post-31",
    language: "ja",
    role: "first_party"
  }, {
    label: "KADOKAWA 官方影片：同曲特別片尾影片",
    url: "https://www.youtube.com/watch?v=_vORepjHH7M",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1857/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177761:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://nine-anime.marv.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片頭影片公告",
    url: "https://nine-anime.marv.jp/news/post-42/",
    language: "ja",
    role: "first_party"
  }, {
    label: "9-nine 官方網站：OP&ED 串流發行公告",
    url: "https://9-nine-project.com/news/info/145/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=139603",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177761:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://nine-anime.marv.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片尾影片公告",
    url: "https://nine-anime.marv.jp/news/post-45",
    language: "ja",
    role: "first_party"
  }, {
    label: "9-nine 官方網站：OP&ED 串流發行公告",
    url: "https://9-nine-project.com/news/info/145/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=139603",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180425:OP:1": [{
    label: "動畫官方網站：片頭曲與發行資料",
    url: "https://amekimi-anime.com/music/oped.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "鈴木真海子官方網站：作品發行資料",
    url: "https://www.suzukimamiko.com/music/project-single-ameto",
    language: "ja",
    role: "first_party"
  }, {
    label: "Qobuz：作品製作名單交叉核對",
    url: "https://www.qobuz.com/jp-ja/album/-/ryhwuykb73zya",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=287297",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180425:ED:1": [{
    label: "動畫官方網站：片尾曲與發行資料",
    url: "https://amekimi-anime.com/music/oped.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "菅原圭官方網站：單曲發行資料",
    url: "https://kei-sugawara.jp/musics/19300",
    language: "ja",
    role: "first_party"
  }, {
    label: "菅原圭官方網站：作品製作名單",
    url: "https://kei-sugawara.jp/musics/20590",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=287297",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177175:OP:1": [{
    label: "動畫官方網站：無字幕片頭與製作名單",
    url: "https://arknights-anime.jp/news/40",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：單曲、MV 與完整製作名單",
    url: "https://www.sonymusic.co.jp/artist/ReoNa/info/575622",
    language: "ja",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71503/arknights-rise-from-ember-anime-season-3rd-in-july-2025",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177175:ED:1": [{
    label: "動畫官方網站：片尾 MV、發行與製作名單",
    url: "https://arknights-anime.jp/news/44",
    language: "ja",
    role: "first_party"
  }, {
    label: "糸奇はな官方網站：主唱、作詞與作曲資料",
    url: "https://110ki.com/profile/",
    language: "ja",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71503/arknights-rise-from-ember-anime-season-3rd-in-july-2025",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177175:ED:2": [{
    label: "動畫官方網站：最終話片尾、影片與製作名單",
    url: "https://arknights-anime.jp/news/46",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：最終話片尾發行資料",
    url: "https://www.sonymusic.co.jp/artist/ReoNa/info/576982",
    language: "ja",
    role: "first_party"
  }, {
    label: "PRTS 中文資料庫：三首主題曲交叉核對",
    url: "https://prts.wiki/w/%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%EF%BC%9A%E7%84%B0%E7%83%AC%E6%9B%99%E6%98%8E",
    language: "zh-Hans",
    role: "cross_check"
  }],
  "181444:OP:1": [{
    label: "動畫官方網站：Opening Music",
    url: "https://kaoruhana-anime.com/music/op.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "キタニタツヤ官方網站：CD 與 MV 資料",
    url: "https://tatsuyakitani.com/news/2265/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286652",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "Qobuz：詞曲編資料交叉核對",
    url: "https://www.qobuz.com/jp-ja/album/your-gaze-crepuscular-tatsuya-kitani/p2glqvqeilcfa",
    language: "ja",
    role: "cross_check"
  }],
  "181444:ED:1": [{
    label: "動畫官方網站：Ending Music",
    url: "https://kaoruhana-anime.com/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "汐れいら官方網站：發行與詞曲資料",
    url: "https://ushioreira.com/blogs/discography/%E3%83%8F%E3%83%AC%E3%81%AE%E6%97%A5%E3%81%AB",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286652",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "UtaTen：編曲資料交叉核對",
    url: "https://utaten.com/songWriter/15902",
    language: "ja",
    role: "cross_check"
  }],
  "178025:OP:1": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286936",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178025:OP:2": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：第 2 期主題曲公告",
    url: "https://gachiakuta-anime.com/news/detail/?id=1128704",
    language: "ja",
    role: "first_party"
  }],
  "178025:ED:1": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ALLT STUDIO：發行與 MV 公告",
    url: "https://alltstudio.jp/news/681/",
    language: "ja",
    role: "first_party"
  }],
  "178025:ED:2": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：第 2 期主題曲公告",
    url: "https://gachiakuta-anime.com/news/detail/?id=1128704",
    language: "ja",
    role: "first_party"
  }, {
    label: "カラノア官方網站：發行與 MV 公告",
    url: "https://karanoah.fanpla.jp/news/detail/57640",
    language: "ja",
    role: "first_party"
  }],
  "184237:OP:1": [{
    label: "動畫官方網站：第 1 季第 2 部 Music",
    url: "https://sakamotodays.jp/1st/music/season1-part2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Kroi 官方唱片資料",
    url: "https://kroi.net/discography/detail/5281/",
    language: "ja",
    role: "first_party"
  }, {
    label: "波麗佳音台灣：繁體中文發行資料",
    url: "https://ponycanyon.com.tw/post/2520/",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "UtaTen：詞曲編資料交叉核對",
    url: "https://utaten.com/songWriter/60999/",
    language: "ja",
    role: "cross_check"
  }],
  "184237:ED:1": [{
    label: "動畫官方網站：第 1 季第 2 部 Music",
    url: "https://sakamotodays.jp/1st/music/season1-part2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "go!go!vanillas 官方 EP 資料",
    url: "https://gogovanillas.com/news/detail/5488",
    language: "ja",
    role: "first_party"
  }],
  "185660:OP:1": [{
    label: "動畫官方網站：Music",
    url: "https://anime-dandadan.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "アイナ・ジ・エンド官方公告：主題曲、發行日與詞曲名單",
    url: "https://www.ainatheend.jp/news/detail.php?id=1125067",
    language: "ja",
    role: "first_party"
  }, {
    label: "Avex 官方發行資料",
    url: "https://avexnet.jp/release/1020983",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：アイナ・ジ・エンド單曲",
    url: "https://music.apple.com/tw/song/1821087731",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Hypebeast 繁體中文：第 2 季 OP／ED 交叉核對",
    url: "https://hypebeast.com/zh/2025/7/dan-da-dan-season-2-op-ed-release",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185660:ED:1": [{
    label: "動畫官方網站：Music",
    url: "https://anime-dandadan.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WurtS 官方網站：合作 MV 與串流入口",
    url: "https://wurts.jp/2665/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WurtS 官方作品頁：數位發行日",
    url: "https://wurts.jp/2675/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WurtS 官方公告：片尾曲與配信日期",
    url: "https://wurts.jp/2625/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：WurtS 單曲",
    url: "https://music.apple.com/tw/song/1824189859",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Hypebeast 繁體中文：第 2 季 OP／ED 交叉核對",
    url: "https://hypebeast.com/zh/2025/7/dan-da-dan-season-2-op-ed-release",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177689:OP:1": [{
    label: "動畫官方網站：Music",
    url: "https://hikanatsu-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Vaundy 官方網站：MV 與發行資料",
    url: "https://vaundy.jp/news/detail/10936",
    language: "ja",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文片頭曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/72144/the-summer-hikaru-died-netflix-animation-release-in-july",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177689:ED:1": [{
    label: "動畫官方網站：Music",
    url: "https://hikanatsu-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞稿：MV 與發行資料",
    url: "https://prtimes.jp/main/html/rd/p/000004583.000013546.html",
    language: "ja",
    role: "first_party"
  }],
  "178754:OP:1": [{
    label: "動畫官方網站：第 2 期 Music",
    url: "https://kaiju-no8.net/music/season2.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：AURORA 數位單曲作品頁",
    url: "https://www.universal-music.co.jp/aurora/products/00602478611926/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：AURORA 發行新聞",
    url: "https://www.universal-music.co.jp/aurora/news/2025-07-18/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：AURORA 單曲",
    url: "https://music.apple.com/tw/song/1823156201",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=287463",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178754:ED:1": [{
    label: "動畫官方網站：第 2 期 Music",
    url: "https://kaiju-no8.net/music/season2.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：OneRepublic 數位單曲作品頁",
    url: "https://www.universal-music.co.jp/onerepublic/products/ui1as-00664/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：OneRepublic 發行新聞",
    url: "https://www.universal-music.co.jp/onerepublic/news/2025-07-25/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：OneRepublic 單曲",
    url: "https://music.apple.com/tw/song/1826134951",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "COOL-STYLE：繁體中文片尾曲與發行日交叉核對",
    url: "https://www.cool-style.com.tw/wd2/archives/1215036-%E3%80%8A%E6%80%AA%E7%8D%B8-8-%E8%99%9F%E3%80%8B%E7%AC%AC%E4%BA%8C%E5%AD%A3-ed%E3%80%88beautiful-colors%E3%80%89%E5%85%AC%E9%96%8B%EF%BC%81%E6%90%96%E6%BB%BE%E5%A4%A9%E5%9C%98-onerepublic-%E7%8D%BB/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185407:OP:1": [{
    label: "TBS 動畫官方網站：音樂資料",
    url: "https://www.tbs.co.jp/anime/takopi_project/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ano 官方公告：動畫片頭曲、專輯收錄與發行日",
    url: "https://ano-official.com/news/detail/74046",
    language: "ja",
    role: "first_party"
  }, {
    label: "ano 官方作品頁：專輯發行日與完整創作 credit",
    url: "https://ano-official.com/discography/detail/6626/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架資料",
    url: "https://music.apple.com/tw/song/1889741674",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71910/toko-p-animation-release-in-2025-june",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=142775",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185407:ED:1": [{
    label: "TBS 動畫官方網站：音樂資料",
    url: "https://www.tbs.co.jp/anime/takopi_project/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Tele 官方作品頁：數位 EP 發行日與動畫版收錄資料",
    url: "https://tele.jp.net/music/%E7%A1%9D%E5%AD%90%E3%81%AE%E7%B7%9A/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Tele 官方公告：數位發行日與跨平台入口",
    url: "https://tele.jp.net/news/1454/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架資料",
    url: "https://music.apple.com/tw/song/1820349965",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71910/toko-p-animation-release-in-2025-june",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=142775",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175035:ED:1": [{
    label: "Netflix 官方新聞：新篇章主題曲",
    url: "https://about.netflix.com/ja/news/pokemon-concierge-new-episodes-premieres-september-4",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方唱片頁：數位發行日與正式 MV",
    url: "https://wmg.jp/tatsuro/discography/32013/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方新聞：新篇章主題曲資料",
    url: "https://wmg.jp/tatsuro/news/90179/",
    language: "ja",
    role: "first_party"
  }, {
    label: "山下達郎官方網站：正式發行與作品搭配資料",
    url: "https://www.tatsuro.co.jp/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Netflix 台灣：繁體中文正式作品名稱與新篇章集數",
    url: "https://www.netflix.com/tw/title/81186864",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "台灣寶可夢官方網站：繁體中文正式作品名稱",
    url: "https://tw.portal-pokemon.com/topics/post-5316/",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲與數位發行日交叉核對",
    url: "https://www.uta-net.com/song/379460/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Tower Records：作詞、作曲與編曲名單交叉核對",
    url: "https://tower.jp/item/6971263/%E3%82%AA%E3%83%8E%E3%83%9E%E3%83%88%E3%83%9AISLAND-MOVE-ON",
    language: "ja",
    role: "cross_check"
  }],
  "186043:ED:1": [{
    label: "Sanrio 官方新聞稿：主題曲與 MV",
    url: "https://prtimes.jp/main/html/rd/p/000000665.000037629.html",
    language: "ja",
    role: "first_party"
  }],
  "189117:OP:1": [{
    label: "動畫官方音樂頁：第 4 期第 2 部分片頭曲",
    url: "https://dr-stone.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "KANA-BOON 官方網站：完整 MV、動畫搭配與配信資料",
    url: "https://sp.kanaboon.jp/news/detail/2588",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376403/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5789",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189117:ED:1": [{
    label: "動畫官方音樂頁：第 4 期第 2 部分片尾曲",
    url: "https://dr-stone.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "音羽-otoha- 官方網站：完整 MV 與動畫搭配資料",
    url: "https://otohaofficial.com/contents/961719",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：特別版片尾曲與動畫 MV",
    url: "https://dr-stone.jp/news/5684/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Labels 官方音源：完整作詞、作曲與編曲名單",
    url: "https://www.youtube.com/watch?v=85lz1dqGKOA",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376444/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5789",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "195209:OP:1": [{
    label: "動畫官方網站：作品與片頭曲資料",
    url: "https://animationid.com/kizudarakeseijo/",
    language: "ja",
    role: "first_party"
  }, {
    label: "AnimationID 官方新聞稿：片頭曲與鷲尾伶菜訪談",
    url: "https://prtimes.jp/main/html/rd/p/000001509.000007785.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5479",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145415",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "195209:ED:1": [{
    label: "動畫官方網站：作品與片尾曲資料",
    url: "https://animationid.com/kizudarakeseijo/",
    language: "ja",
    role: "first_party"
  }, {
    label: "AnimationID 官方新聞稿：片尾曲與のんぴー訪談",
    url: "https://prtimes.jp/main/html/rd/p/000001508.000007785.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/385921/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5479",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145415",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "193238:ED:1": [{
    label: "コミックナタリー：片尾主題曲交叉核對",
    url: "https://natalie.mu/comic/news/627063",
    language: "ja",
    role: "cross_check"
  }]
} satisfies CuratedThemeSourceOverrideMap;
