import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

type Fall2019SeedInput = Omit<
  CuratedAnimeSeed,
  | "id"
  | "seasonIds"
  | "editorialWeekday"
  | "status"
  | "anilistUrl"
  | "imageSourceUrl"
  | "imageSourceLabel"
  | "wikipediaUrl"
  | "sourceReferenceUrls"
  | "verifiedAt"
> & Partial<Pick<CuratedAnimeSeed, "seasonIds">>;

const wikipediaUrl =
  "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8";
const chineseSeasonUrl = "https://acgsecrets.hk/bangumi/201910/";
const japaneseSeasonUrl = "https://www.kansou.me/archive/2019_autumn.html";

function fall2019Seed(row: Fall2019SeedInput): CuratedAnimeSeed {
  const anilistUrl = `https://anilist.co/anime/${row.anilistId}`;
  const weekday = new Date(`${row.startDate}T00:00:00Z`).getUTCDay();

  return {
    ...row,
    id: `curated-${row.anilistId}`,
    seasonIds: row.seasonIds ?? ["2019-fall"],
    editorialWeekday: weekday || 7,
    status: "finished",
    anilistUrl,
    imageSourceUrl: anilistUrl,
    imageSourceLabel: "AniList 公開媒體頁",
    wikipediaUrl,
    sourceReferenceUrls: [chineseSeasonUrl, japaneseSeasonUrl],
    verifiedAt: "2026-09-02",
  };
}

const curated2019FallSeedRows: Fall2019SeedInput[] = [
  {
    anilistId: 110382,
    slug: "mini-yuri",
    startDate: "2019-09-25",
    titleJa: "みにゆり",
    titleZhHant: "迷你百合",
    titleRomaji: "Mini Yuri",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110382-TMOFR9PIjyt3.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110382-EOQinQ6DXd91.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://yuruyuri.com/miniyuri/",
    themes: [],
  },
  {
    anilistId: 100780,
    slug: "ginga-eiyuu-densetsu-die-neue-these-seiran",
    startDate: "2019-09-26",
    titleJa: "銀河英雄伝説 Die Neue These 星乱",
    titleZhHant: "銀河英雄傳說 Die Neue These 星亂",
    titleRomaji: "Ginga Eiyuu Densetsu: Die Neue These - Seiran",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100780-0umTIigEolK8.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100780-KdLpklET0Yh3.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://gineiden-anime.com/",
    animeThemesUrl:
      "https://animethemes.moe/anime/ginga_eiyuu_densetsu_die_neue_these_seiran",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Binary Star",
        artistDisplayName: "SawanoHiroyuki[nZk]:Uru",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Tranquility",
        artistDisplayName: "SawanoHiroyuki[nZk]:Anly",
      },
    ],
  },
  {
    anilistId: 112036,
    slug: "mono-no-kamisama-cocotama",
    startDate: "2019-09-26",
    titleJa: "モノのかみさま ここたま",
    titleZhHant: "萬物之神 神仙精靈",
    titleRomaji: "Mono no Kamisama: Cocotama",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112036-EiumCix3gG5F.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://coco-tama.com/mono/",
    animeThemesUrl: "https://animethemes.moe/anime/mono_no_kamisama_cocotama",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ハッピーここたまダンス！",
        artistDisplayName: "ERIKA、正木郁",
      },
    ],
  },
  {
    anilistId: 110089,
    slug: "kaijuu-step-wandabada",
    startDate: "2019-09-27",
    titleJa: "かいじゅうステップ ワンダバダ",
    titleZhHant: "怪獸步驟 Wandabada",
    titleRomaji: "Kaijuu Step Wandabada",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110089-2GtGpSRNhAeR.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://www6.nhk.or.jp/anime/topics/detail.html?i=5354",
    themes: [],
  },
  {
    anilistId: 110881,
    slug: "bananya-fushigi-na-nakamatachi",
    startDate: "2019-10-01",
    titleJa: "ばなにゃ ふしぎななかまたち",
    titleZhHant: "香蕉喵 不可思議的夥伴們",
    titleRomaji: "Bananya: Fushigi na Nakamatachi",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110881-GCLFxS80cmsb.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110881-DTIizARCzWzy.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://bananya.jp/",
    themes: [],
  },
  {
    anilistId: 101239,
    slug: "ahiru-no-sora",
    startDate: "2019-10-02",
    titleJa: "あひるの空",
    titleZhHant: "籃球少年王",
    titleRomaji: "Ahiru no Sora",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101239-iGhniUbzVgpn.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101239-3xMk1BuT06HX.jpg",
    broadcastLabel: "2019日本TV原系列，10/2開播；2020年3月前週三18:25–18:55，4月後17:55–18:25。另有BSテレビ東京第12話2019/12/18深夜24:30–24:59完整單話槽；節目槽非淨片長，歌曲分2019秋及2020冬／春／夏核對。",
    officialSiteUrl: "https://ahirunosora.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/ahiru_no_sora",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Happy Go Ducky!",
        artistDisplayName: "the pillows",

"followUp": [],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ahirunosora.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ahiru_no_sora",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "KING AMUSEMENT CREATIVE 官方影片",
    "url": "https://www.youtube.com/watch?v=J5b_S_nHjmY",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://pillows.jp/s/disco/20191009/",
    "label": "第一方曲目資料：the pillows公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://anime-song-info.com/ahirunosora-op-ed-20sm/",
    "label": "歌曲交叉資料：アニしま",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.mau2.com/anime/ahirunosora",
    "label": "歌曲交叉資料：まうまう☆ アニメ声優情報",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"seasonIds": [
  "2019-fall"
],
"songId": "ahiru-no-sora-op-1-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://pillows.jp/s/disco/20191009/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://pillows.jp/s/disco/20191009/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-1-song",
    "fields": [
      "title"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
      {
        type: "OP",
        sequence: 2,
        titleJa: "ネバーマインド",
        artistDisplayName: "flumpool",

"followUp": [
  {
    "fields": [
      "basic_evidence",
      "use_quarters"
    ],
    "note": "本曲仍待第一方明示原TV版曲名、演唱與用途。實際使用季度亦待核對，暫不列入季度曲目。",
    "resumeWhen": "取得原TV版逐曲第一方資料，或完成本曲版本身分的個別核對後補充。取得逐話用曲與播出日期資料後再補用途季度。",
    "checkedAt": "2026-10-31"
  }
],
"seasonIds": [],
},
      {
        type: "OP",
        sequence: 3,
        titleJa: "ハミングバード",
        artistDisplayName: "BLUE ENCOUNT",

"followUp": [],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ahirunosora.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ahiru_no_sora",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "KING AMUSEMENT CREATIVE 官方影片",
    "url": "https://www.youtube.com/watch?v=duvGhKdbmYM",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://blueencount.jp/news/detail/3042",
    "label": "第一方曲目資料：BLUE ENCOUNTオフィシャルサイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://anime-song-info.com/ahirunosora-op-ed-20sm/",
    "label": "歌曲交叉資料：アニしま",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.mau2.com/anime/ahirunosora",
    "label": "歌曲交叉資料：まうまう☆ アニメ声優情報",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"seasonIds": [
  "2020-spring"
],
"songId": "ahiru-no-sora-op-3-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-3-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://blueencount.jp/news/detail/3042"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-3",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://blueencount.jp/news/detail/3042"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-3-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-3",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-3-song",
    "fields": [
      "title"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-3",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
      {
        type: "OP",
        sequence: 4,
        titleJa: "Rebirth",
        artistDisplayName: "ACIDMAN",

"followUp": [],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ahirunosora.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ahiru_no_sora",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "KING AMUSEMENT CREATIVE 官方影片",
    "url": "https://www.youtube.com/watch?v=0OW-WVDE6og",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://acidman.jp/newsinfo/20200904/",
    "label": "第一方曲目資料：ACIDMAN OFFICIAL WEBSITE",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://anime-song-info.com/ahirunosora-op-ed-20sm/",
    "label": "歌曲交叉資料：アニしま",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.mau2.com/anime/ahirunosora",
    "label": "歌曲交叉資料：まうまう☆ アニメ声優情報",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"seasonIds": [
  "2020-summer"
],
"songId": "ahiru-no-sora-op-4-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-4-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://acidman.jp/newsinfo/20200904/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-4",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://acidman.jp/newsinfo/20200904/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-4-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-4",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-op-4-song",
    "fields": [
      "title"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-op-4",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "ツバサ",
        artistDisplayName: "saji",

"followUp": [],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ahirunosora.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ahiru_no_sora",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "KING AMUSEMENT CREATIVE 官方影片",
    "url": "https://www.youtube.com/watch?v=P9F9jayA1as",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://www.tv-tokyo.co.jp/broad_bstvtokyo/program/detail/201912/25585_201912182430.html",
    "label": "第一方曲目資料：テレビ東京・BSテレビ東京公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://anime-song-info.com/ahirunosora-op-ed-20sm/",
    "label": "歌曲交叉資料：アニしま",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.mau2.com/anime/ahirunosora",
    "label": "歌曲交叉資料：まうまう☆ アニメ声優情報",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"seasonIds": [
  "2019-fall"
],
"songId": "ahiru-no-sora-ed-1-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.tv-tokyo.co.jp/broad_bstvtokyo/program/detail/201912/25585_201912182430.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.tv-tokyo.co.jp/broad_bstvtokyo/program/detail/201912/25585_201912182430.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-1-song",
    "fields": [
      "title"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 2,
        titleJa: "Over",
        artistDisplayName: "内田雄馬",

"followUp": [],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ahirunosora.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ahiru_no_sora",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "KING AMUSEMENT CREATIVE 官方影片",
    "url": "https://www.youtube.com/watch?v=bjSL3JGJboo",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://www.uchidayuma.com/information/?id=245",
    "label": "第一方曲目資料：内田雄馬公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://anime-song-info.com/ahirunosora-op-ed-20sm/",
    "label": "歌曲交叉資料：アニしま",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.mau2.com/anime/ahirunosora",
    "label": "歌曲交叉資料：まうまう☆ アニメ声優情報",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"seasonIds": [
  "2020-winter"
],
"credits": [
  {
    "name": "内田雄馬",
    "role": "vocals"
  },
  {
    "name": "SHOW",
    "role": "lyrics"
  },
  {
    "name": "SHOW",
    "role": "composition"
  },
  {
    "name": "Mitsu.J",
    "role": "composition"
  },
  {
    "name": "Mitsu.J",
    "role": "arrangement"
  }
],
"songId": "ahiru-no-sora-ed-2-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.uchidayuma.com/information/?id=245"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.uchidayuma.com/information/?id=245"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-2-song",
    "fields": [
      "title"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://www.uchidayuma.com/information/?id=245"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 3,
        titleJa: "光射す方へ",
        artistDisplayName: "宮野真守",

"followUp": [
  {
    "fields": [
      "basic_evidence",
      "use_quarters"
    ],
    "note": "原TV用曲與另列Album ver.的曲名及用途關係仍待核對，暫保留原資料。實際使用季度亦待核對，暫不列入季度曲目。",
    "resumeWhen": "取得原TV版逐曲第一方資料，或完成本曲版本身分的個別核對後補充。取得逐話用曲與播出日期資料後再補用途季度。",
    "checkedAt": "2026-10-31"
  }
],
"seasonIds": [],
},
      {
        type: "ED",
        sequence: 4,
        titleJa: "太陽ランナー",
        artistDisplayName: "阪本奨悟",

"followUp": [],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ahirunosora.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ahiru_no_sora",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "KING AMUSEMENT CREATIVE 官方影片",
    "url": "https://www.youtube.com/watch?v=6SWVTQQJYns",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://www.a-sketch.com/artist/%E9%98%AA%E6%9C%AC%E5%A5%A8%E6%82%9F-2/",
    "label": "第一方曲目資料：A-Sketch Official Site",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://anime-song-info.com/ahirunosora-op-ed-20sm/",
    "label": "歌曲交叉資料：アニしま",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.mau2.com/anime/ahirunosora",
    "label": "歌曲交叉資料：まうまう☆ アニメ声優情報",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"seasonIds": [
  "2020-summer"
],
"songId": "ahiru-no-sora-ed-4-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-4-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.a-sketch.com/artist/%E9%98%AA%E6%9C%AC%E5%A5%A8%E6%82%9F-2/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-4",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.a-sketch.com/artist/%E9%98%AA%E6%9C%AC%E5%A5%A8%E6%82%9F-2/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-4-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-4",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/ahirunosora-op-ed-20sm/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ahiru-no-sora-ed-4-song",
    "fields": [
      "title"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ahiru-no-sora-ed-4",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.mau2.com/anime/ahirunosora"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://ahirunosora.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/101239",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/ahiru_no_sora",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://www.tv-tokyo.co.jp/broad_bstvtokyo/program/detail/201912/25585_201912182430.html",
    "label": "第一方播出資料：テレビ東京・BSテレビ東京公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://zh.wikipedia.org/wiki/%E7%B1%83%E7%90%83%E5%B0%91%E5%B9%B4%E7%8E%8B",
    "label": "播出交叉資料：中文維基百科",
    "role": "broadcast_cross_check",
    "language": "zh-Hant",
    "verifiedAt": "2026-10-31"
  }
],
"seasonIds": [
  "2019-fall",
  "2020-winter",
  "2020-spring",
  "2020-summer"
],
},
  {
    anilistId: 105156,
    slug: "shinchou-yuusha-kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru",
    startDate: "2019-10-02",
    titleJa: "慎重勇者～この勇者が俺ＴＵＥＥＥくせに慎重すぎる～",
    titleZhHant: "慎重勇者～這個勇者明明超TUEEE卻過度謹慎～",
    titleRomaji:
      "Shinchou Yuusha: Kono Yuusha ga Ore TUEEE Kuse ni Shinchou Sugiru",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105156-ZVtxISdoUqnY.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105156-AER446HoeuJZ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://shincho-yusha.jp/",
    animeThemesUrl:
      "https://animethemes.moe/anime/shinchou_yuusha_kono_yuusha_ga_ore_tueee_kuse_ni_shinchou_sugiru",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "TIT FOR TAT",
        artistDisplayName: "MYTH & ROID",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "be perfect, plz!",
        artistDisplayName: "安月名莉子",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 2,
        titleJa: "さいしょからずっと",
        artistDisplayName: "安月名莉子",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "url": "https://shincho-yusha.jp/",
    "label": "第一方播出資料：TVアニメ「慎重勇者」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/105156",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/shinchou_yuusha_kono_yuusha_ga_ore_tueee_kuse_ni_shinchou_sugiru",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  }
],
},
  {
    anilistId: 107339,
    slug: "hataage-kemono-michi",
    startDate: "2019-10-02",
    titleJa: "旗揚！けものみち",
    titleZhHant: "萌獸寵物店",
    titleRomaji: "Hataage! Kemono Michi",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107339-3mKBCMAUN896.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107339-Ph3vd3csS9M6.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://hataage-kemonomichi.com/",
    animeThemesUrl: "https://animethemes.moe/anime/hataage_kemono_michi",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "闘魂（ファイト）！ケモナーマスク",
        artistDisplayName: "NoB with ケモナーマスク（CV：小西克幸）",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "アネクドット",
        artistDisplayName: "ももすももす",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://hataage-kemonomichi.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/107339",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/hataage_kemono_michi",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://hataage-kemonomichi.com/onair/",
    "label": "第一方播出資料：TVアニメ「旗揚！けものみち」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
},
  {
    anilistId: 108040,
    slug: "radiant-2",
    startDate: "2019-10-02",
    titleJa: "ラディアン2",
    titleZhHant: "虛空魔境 第二季",
    titleRomaji: "Radiant 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108040-FYeFAH75GZ0c.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108040-juy2tqQNhiMe.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://anime-radiant.com/",
    animeThemesUrl: "https://animethemes.moe/anime/radiant_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ナラク",
        artistDisplayName: "Halo at 四畳半",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "ちっとも知らなかった",
        artistDisplayName: "NakamuraEmi",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://anime-radiant.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/108040",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/radiant_2nd_season",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://thetv.jp/program/0000957311/",
    "label": "播出交叉資料：WEBザテレビジョン",
    "role": "broadcast_cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.allcinema.net/cinema/367287",
    "label": "播出交叉資料：allcinema",
    "role": "broadcast_cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
},
  {
    anilistId: 110811,
    slug: "urashimasakatasen-no-nichijou",
    startDate: "2019-10-02",
    titleJa: "浦島坂田船の日常",
    titleZhHant: "浦島坂田船的日常",
    titleRomaji: "Urashimasakatasen no Nichijou",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b110811-evuKZhe2Gzwq.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110811-Cjww2prgUelS.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://nbcuni-music.com/urashimasakatasen/anime/",
    animeThemesUrl:
      "https://animethemes.moe/anime/urashimasakatasen_no_nichijou",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "カレンダーリマインダー",
        artistDisplayName: "浦島坂田船",
      },
    ],
  },
  {
    anilistId: 104115,
    slug: "houkago-saikoro-club",
    startDate: "2019-10-03",
    titleJa: "放課後さいころ倶楽部",
    titleZhHant: "放學後桌遊俱樂部",
    titleRomaji: "Houkago Saikoro Club",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104115-7aStzqclhn6z.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104115-hTIuAGYjjAL4.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://saikoro-club.com/",
    animeThemesUrl: "https://animethemes.moe/anime/houkago_saikoro_club",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Present Moment",
        artistDisplayName: "富田美憂",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "On the Board",
        artistDisplayName:
          "武笠美姫（CV：宮下早紀）、高屋敷綾（CV：高野麻里佳）、大野翠（CV：富田美憂）",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://saikoro-club.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/104115",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/houkago_saikoro_club",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://www.saikoro-club.com/onair/index.html",
    "label": "第一方播出資料：アニメ「放課後さいころ倶楽部」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
},
  {
    anilistId: 104159,
    slug: "azur-lane",
    startDate: "2019-10-03",
    titleJa: "アズールレーン",
    titleZhHant: "碧藍航線",
    titleRomaji: "Azur Lane",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104159-xJoXzhEmtohE.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104159-fEdAUSZV39a7.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://azurlane-anime.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/azur_lane",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "graphite/diamond",
        artistDisplayName: "May'n",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "光の道標",
        artistDisplayName: "鹿乃",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://azurlane-anime.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/104159",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/azur_lane",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://azurlane-anime.jp/news/news_20190914_01.html",
    "label": "第一方播出資料：TVアニメーション「アズールレーン」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
},
  {
    anilistId: 104464,
    slug: "ore-wo-suki-nano-wa-omae-dake-ka-yo",
    startDate: "2019-10-03",
    titleJa: "俺を好きなのはお前だけかよ",
    titleZhHant: "喜歡本大爺的竟然就妳一個？",
    titleRomaji: "Ore wo Suki nano wa Omae dake ka yo",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104464-UdOCt3uyA2K9.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104464-XbfWyamahIAu.jpg",
    broadcastLabel: "2019年10月2日編排水曜24:30起日本TV放送；2020年第12話再播單話30分鐘槽只作同版形式旁證，不作首播或歌曲啟用日。",
    officialSiteUrl: "https://ore.ski/tv/",
    animeThemesUrl:
      "https://animethemes.moe/anime/ore_wo_suki_nano_wa_omae_dake_ka_yo",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "パパパ",
        artistDisplayName: "斉藤朱夏",

"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "原TV歌曲基本資料已核對；逐曲使用季度仍待核對，既有季度入口保留。",
    "resumeWhen": "取得同版本逐話用曲及播出日期的直接資料後，補充本曲確切使用季度。",
    "checkedAt": "2026-10-31"
  }
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ore.ski/tv/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ore_wo_suki_nano_wa_omae_dake_ka_yo",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://prtimes.jp/main/html/rd/p/000001845.000016356.html",
    "label": "第一方曲目資料：株式会社アニプレックス",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://animemusicranking.com/ja/anime/52/",
    "label": "歌曲交叉資料：アニソンチャート",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"credits": [
  {
    "name": "斉藤朱夏",
    "role": "vocals"
  },
  {
    "name": "ハヤシケイ",
    "role": "lyrics"
  },
  {
    "name": "ハヤシケイ",
    "role": "composition"
  },
  {
    "name": "堀江晶太",
    "role": "arrangement"
  }
],
"songId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-op-1-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://prtimes.jp/main/html/rd/p/000001845.000016356.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://prtimes.jp/main/html/rd/p/000001845.000016356.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://animemusicranking.com/ja/anime/52/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://animemusicranking.com/ja/anime/52/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://prtimes.jp/main/html/rd/p/000001845.000016356.html"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "ハナコトバ",
        artistDisplayName:
          "パンジー（CV：戸松遥）、ひまわり（CV：白石晴香）、コスモス（CV：三澤紗千香）",

"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "原TV歌曲基本資料已核對；逐曲使用季度仍待核對，既有季度入口保留。",
    "resumeWhen": "取得同版本逐話用曲及播出日期的直接資料後，補充本曲確切使用季度。",
    "checkedAt": "2026-10-31"
  }
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://ore.ski/tv/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/ore_wo_suki_nano_wa_omae_dake_ka_yo",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://prtimes.jp/main/html/rd/p/000001845.000016356.html",
    "label": "第一方曲目資料：株式会社アニプレックス",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://animemusicranking.com/ja/anime/52/",
    "label": "歌曲交叉資料：アニソンチャート",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"songId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-ed-1-song",
"evidence": [
  {
    "target": "song",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://prtimes.jp/main/html/rd/p/000001845.000016356.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://prtimes.jp/main/html/rd/p/000001845.000016356.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://animemusicranking.com/ja/anime/52/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "ore-wo-suki-nano-wa-omae-dake-ka-yo-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://animemusicranking.com/ja/anime/52/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "url": "https://ore.ski/tv/",
    "label": "第一方播出資料：TVアニメ「俺を好きなのはお前だけかよ」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/104464",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/ore_wo_suki_nano_wa_omae_dake_ka_yo",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://ore.ski/onair/",
    "label": "第一方播出資料：TVアニメ「俺を好きなのはお前だけかよ」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://prtimes.jp/main/html/rd/p/000001845.000016356.html",
    "label": "第一方播出資料：株式会社アニプレックス",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  }
],
},
  {
    anilistId: 108268,
    slug: "honzuki-no-gekokujou-shisho-ni-naru-tame-ni-wa-shudan-wo-erandeiraremasen",
    startDate: "2019-10-03",
    titleJa: "本好きの下剋上 司書になるためには手段を選んでいられません",
    titleZhHant: "小書痴的下剋上：為了成為圖書管理員不擇手段！",
    titleRomaji:
      "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108268-Dtt82uOi3vq5.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108268-JbUzGiUlmCTy.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://booklove-anime.jp/",
    animeThemesUrl:
      "https://animethemes.moe/anime/honzuki_no_gekokujou_shisho_ni_naru_tame_ni_wa_shudan_wo_erandeiraremasen",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "真っ白",
        artistDisplayName: "諸星すみれ",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "髪飾りの天使",
        artistDisplayName: "中島愛",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://booklove-anime.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/108268",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/honzuki_no_gekokujou_shisho_ni_naru_tame_ni_wa_shudan_wo_erandeiraremasen",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A",
    "label": "播出交叉資料：維基百科條目貢獻者",
    "role": "broadcast_cross_check",
    "language": "zh-Hant",
    "verifiedAt": "2026-10-31"
  }
],
},
  {
    anilistId: 108388,
    slug: "choujin-koukousei-tachi-wa-isekai-demo-yoyuu-de-ikinuku-you-desu",
    startDate: "2019-10-03",
    titleJa: "超人高校生たちは異世界でも余裕で生き抜くようです!",
    titleZhHant: "超人高中生們即便在異世界也能從容生存！",
    titleRomaji:
      "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108388-DV17bODJAKlR.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108388-eZP0Niki1Ca2.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://choyoyu.com/",
    animeThemesUrl:
      "https://animethemes.moe/anime/choujin_koukousei_tachi_wa_isekai_demo_yoyuu_de_ikinuku_you_desu",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "はじめてのかくめい！",
        artistDisplayName: "DIALOGUE+",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "dear my distance",
        artistDisplayName: "鬼頭明里",

"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本版日本TV的完整常規播出時段或單話長度仍待核對，歌曲基本證據尚未完成。",
    "resumeWhen": "取得同版本完整播出時段或正版單話長度的直接資料後，再核歌曲原名、演唱名義與用途。",
    "checkedAt": "2026-10-31"
  }
],
},
    ],
  },
  {
    anilistId: 114234,
    slug: "egg-car",
    startDate: "2019-10-03",
    titleJa: "エッグカー",
    titleZhHant: "奔奔小飛車",
    titleRomaji: "Egg Car",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114234-Rvgp9oF403dl.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114234-nMethBTzNDZt.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/eggcar/",
    themes: [],
  },
  {
    anilistId: 187054,
    slug: "sylvanian-families-mini-story-clover",
    startDate: "2019-10-03",
    titleJa: "シルバニアファミリー ミニストーリー クローバー",
    titleZhHant: "森林家族 Mini Story Clover",
    titleRomaji: "Sylvanian Families: Mini Story Clover",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b187054-RMS4pJQoREwY.png",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://www.sylvanianfamilies.com/ja-jp/first-guide/",
    themes: [],
  },
  {
    anilistId: 109089,
    slug: "chuubyou-gekihatsu-boy-tv",
    startDate: "2019-10-04",
    titleJa: "厨病激発ボーイ (TV)",
    titleZhHant: "廚病激發 BOY",
    titleRomaji: "Chuubyou Gekihatsu Boy (TV)",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109089-NTqWUW1w9dpb.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109089-usL6o1ncaG2Q.jpg",
    broadcastLabel: "2019年10月4日起日本TV；MX星期五22:30–23:00完整30分鐘常規槽（非淨片長）；配信起點與矛盾AT-X欄另分。",
    officialSiteUrl: "https://chubyou.net/",
    animeThemesUrl: "https://animethemes.moe/anime/chuubyou_gekihatsu_boy",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "厨病激発ボーイ",
        artistDisplayName: "皆神高校ヒーロー部",

"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "原TV歌曲基本資料已核對；逐曲使用季度仍待核對，既有季度入口保留。",
    "resumeWhen": "取得同版本逐話用曲及播出日期的直接資料後，補充本曲確切使用季度。",
    "checkedAt": "2026-10-31"
  }
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://chubyou.net/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/chuubyou_gekihatsu_boy",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://chubyou.net/music.html",
    "label": "第一方曲目資料：TVアニメ「厨病激発ボーイ」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.animatetimes.com/news/details.php?id=1565873966",
    "label": "歌曲交叉資料：アニメイトタイムズ",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://zh.wikipedia.org/wiki/%E5%BB%9A%E7%97%85%E6%BF%80%E7%99%BCBOY",
    "label": "歌曲交叉資料：維基百科條目貢獻者",
    "role": "cross_check",
    "language": "zh-Hant",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"credits": [
  {
    "name": "皆神高校ヒーロー部",
    "role": "vocals"
  },
  {
    "name": "れるりり",
    "role": "lyrics"
  },
  {
    "name": "れるりり",
    "role": "composition"
  },
  {
    "name": "AstroNoteS",
    "role": "arrangement"
  }
],
"songId": "chuubyou-gekihatsu-boy-tv-op-1-song",
"evidence": [
  {
    "target": "song",
    "targetId": "chuubyou-gekihatsu-boy-tv-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://chubyou.net/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "chuubyou-gekihatsu-boy-tv-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://chubyou.net/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "chuubyou-gekihatsu-boy-tv-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.animatetimes.com/news/details.php?id=1565873966"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "chuubyou-gekihatsu-boy-tv-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.animatetimes.com/news/details.php?id=1565873966"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://chubyou.net/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%BB%9A%E7%97%85%E6%BF%80%E7%99%BCBOY"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
      {
        type: "ED",
        sequence: 1,
        titleJa: "Here comes The SUN",
        artistDisplayName: "仲村宗悟",

"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "原TV歌曲基本資料已核對；逐曲使用季度仍待核對，既有季度入口保留。",
    "resumeWhen": "取得同版本逐話用曲及播出日期的直接資料後，補充本曲確切使用季度。",
    "checkedAt": "2026-10-31"
  }
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://chubyou.net/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/chuubyou_gekihatsu_boy",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://chubyou.net/music.html",
    "label": "第一方曲目資料：TVアニメ「厨病激発ボーイ」公式サイト",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://www.animatetimes.com/news/details.php?id=1565873966",
    "label": "歌曲交叉資料：アニメイトタイムズ",
    "role": "cross_check",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://zh.wikipedia.org/wiki/%E5%BB%9A%E7%97%85%E6%BF%80%E7%99%BCBOY",
    "label": "歌曲交叉資料：維基百科條目貢獻者",
    "role": "cross_check",
    "language": "zh-Hant",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"credits": [
  {
    "name": "仲村宗悟",
    "role": "vocals"
  },
  {
    "name": "ChouCho",
    "role": "lyrics"
  },
  {
    "name": "ChouCho",
    "role": "composition"
  },
  {
    "name": "村山☆潤",
    "role": "arrangement"
  }
],
"songId": "chuubyou-gekihatsu-boy-tv-ed-1-song",
"evidence": [
  {
    "target": "song",
    "targetId": "chuubyou-gekihatsu-boy-tv-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://chubyou.net/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "chuubyou-gekihatsu-boy-tv-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://chubyou.net/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "chuubyou-gekihatsu-boy-tv-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.animatetimes.com/news/details.php?id=1565873966"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "chuubyou-gekihatsu-boy-tv-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.animatetimes.com/news/details.php?id=1565873966"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "chuubyou-gekihatsu-boy-tv-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%BB%9A%E7%97%85%E6%BF%80%E7%99%BCBOY"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "chuubyou-gekihatsu-boy-tv-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%BB%9A%E7%97%85%E6%BF%80%E7%99%BCBOY"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://chubyou.net/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%BB%9A%E7%97%85%E6%BF%80%E7%99%BCBOY"
    ],
    "verifiedAt": "2026-10-31"
  }
],
},
    ],

"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://chubyou.net/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AniList：作品識別與公開圖像",
    "url": "https://anilist.co/anime/109089",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://zh.wikipedia.org/wiki/2019%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/chuubyou_gekihatsu_boy",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201910/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_autumn.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-02"
  },
  {
    "url": "https://www.deen.co.jp/news/20190906-2",
    "label": "第一方播出資料：スタジオディーン",
    "role": "first_party",
    "language": "ja",
    "verifiedAt": "2026-10-31"
  },
  {
    "url": "https://zh.wikipedia.org/wiki/%E5%BB%9A%E7%97%85%E6%BF%80%E7%99%BCBOY",
    "label": "播出交叉資料：維基百科條目貢獻者",
    "role": "broadcast_cross_check",
    "language": "zh-Hant",
    "verifiedAt": "2026-10-31"
  }
],
},
  {
    anilistId: 110788,
    slug: "zoids-wild-zero",
    startDate: "2019-10-04",
    titleJa: "ゾイドワイルド ZERO",
    titleZhHant: "機獸戰記 狂野爆發 ZERO",
    titleRomaji: "Zoids Wild ZERO",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110788-2CGGh39Z2yUJ.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl:
      "https://www.takaratomy.co.jp/products/anime-zoidswild-zero/",
    animeThemesUrl: "https://animethemes.moe/anime/zoids_wild_zero",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "blue blue blue",
        artistDisplayName: "Ivy to Fraudulent Game",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "Player",
        artistDisplayName: "MAGIC OF LiFE",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ヒカリ",
        artistDisplayName: "千田葉月",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "DOOR",
        artistDisplayName: "荒井麻珠",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "夢の轍",
        artistDisplayName: "H△G",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "名もなき旅",
        artistDisplayName: "千田葉月",
      },
    ],
  },
  {
    anilistId: 110789,
    slug: "null-peta",
    startDate: "2019-10-04",
    titleJa: "ぬるぺた",
    titleZhHant: "NULL & PETA",
    titleRomaji: "Null Peta",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110789-BElJ4Jcqq9Fl.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110789-3MXXT57dSTLW.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://nullpeta.com/",
    animeThemesUrl: "https://animethemes.moe/anime/null_peta",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "#NULL!*Peta",
        artistDisplayName: "ぬる（CV：和氣あず未）、ぺた（CV：上田麗奈）",
      },
    ],
  },
  {
    anilistId: 103275,
    slug: "fate-grand-order-zettai-majuu-sensen-babylonia",
    startDate: "2019-10-05",
    titleJa: "Fate/Grand Order -絶対魔獣戦線バビロニア-",
    titleZhHant: "Fate/Grand Order -絕對魔獸戰線巴比倫尼亞-",
    titleRomaji: "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103275-SN0wwshS3tWA.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103275-9vSzr7YzbXQb.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://anime.fate-go.jp/ep7-tv/",
    animeThemesUrl:
      "https://animethemes.moe/anime/fategrand_order_zettai_majuu_sensen_babylonia",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Phantom Joke",
        artistDisplayName: "UNISON SQUARE GARDEN",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "星が降るユメ",
        artistDisplayName: "藍井エイル",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Prover",
        artistDisplayName: "milet",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "Tell me",
        artistDisplayName: "milet",
      },
    ],
  },
  {
    anilistId: 107346,
    slug: "granblue-fantasy-the-animation-season-2",
    startDate: "2019-10-05",
    titleJa: "GRANBLUE FANTASY The Animation Season 2",
    titleZhHant: "碧藍幻想 The Animation Season 2",
    titleRomaji: "GRANBLUE FANTASY The Animation Season 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107346-KZQFFzxrCH3g.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107346-hR3d4HR7zFuX.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://anime.granbluefantasy.jp/",
    animeThemesUrl:
      "https://animethemes.moe/anime/granblue_fantasy_the_animation_season_2",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Stay With Me",
        artistDisplayName: "Seven Billion Dots",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "蒼",
        artistDisplayName: "adieu",
      },
    ],
  },
  {
    anilistId: 107693,
    slug: "mairimashita-iruma-kun",
    startDate: "2019-10-05",
    titleJa: "魔入りました！入間くん",
    titleZhHant: "入間同學入魔了！",
    titleRomaji: "Mairimashita! Iruma-kun",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107693-A9bSSFAMxA6j.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107693-h0syT88giDiw.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.nhk-character.com/chara/iruma/",
    animeThemesUrl: "https://animethemes.moe/anime/mairimashita_iruma_kun",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Magical Babyrinth",
        artistDisplayName: "DA PUMP",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "デビきゅー",
        artistDisplayName: "芹澤優",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "悪魔学校バビルス校歌",
        artistDisplayName: "悪魔学校バビルス 生徒の皆さん",
      },
    ],
  },
  {
    anilistId: 109321,
    slug: "val-x-love",
    startDate: "2019-10-05",
    titleJa: "戦×恋",
    titleZhHant: "戰×戀",
    titleRomaji: "Val x Love",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109321-uRusf0ug6AQ0.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://val-love.com/",
    animeThemesUrl: "https://animethemes.moe/anime/val_x_love",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "for...",
        artistDisplayName: "逢田梨香子",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "UP-DATE × PLEASE!!! ver 1.7.8",
        artistDisplayName:
          "早乙女一千花（CV：内山夕実）、早乙女七樹（CV：本渡楓）、早乙女八雲（CV：河瀬茉希）",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "UP-DATE × PLEASE!!! ver 3.4.5",
        artistDisplayName:
          "早乙女三沙（CV：清水彩香）、早乙女四乃（CV：逢田梨香子）、早乙女五夜（CV：加隈亜衣）",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "UP-DATE × PLEASE!!! ver 2.6.9",
        artistDisplayName:
          "早乙女二葉（CV：原由実）、早乙女六海（CV：日高里菜）、早乙女九瑠璃（CV：小岩井ことり）",
      },
    ],
  },
  {
    anilistId: 111082,
    slug: "aikatsu-on-parade",
    startDate: "2019-10-05",
    titleJa: "アイカツオンパレード！",
    titleZhHant: "偶像活動 on Parade！",
    titleRomaji: "Aikatsu on Parade!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111082-T2wx2iPk9jHS.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111082-w4AEfiWpL4hz.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/aikatsuonparade/",
    animeThemesUrl: "https://animethemes.moe/anime/aikatsu_on_parade",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "君のEntrance",
        artistDisplayName: "らき・あいね・みお from BEST FRIENDS!",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "アイドル活動！オンパレード！ver.",
        artistDisplayName:
          "らき・あいね・みお from BEST FRIENDS!／わか・るか・せな",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "So Beautiful Story",
        artistDisplayName: "るか・せな from AIKATSU☆STARS!",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "Good morning my dream",
        artistDisplayName: "るか・もな・みき from AIKATSU☆STARS!",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "チュチュ・バレリーナ",
        artistDisplayName: "るか・もな・みき from AIKATSU☆STARS!",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "カレンダーガール",
        artistDisplayName: "わか・ふうり・すなお from STAR☆ANIS",
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "オリジナルスター☆彡",
        artistDisplayName:
          "わか・ふうり・すなお・れみ・もえ・えり・ゆな・りすこ from STAR☆ANIS",
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "Precious",
        artistDisplayName: "りすこ・わか・ふうり・もな from STAR☆ANIS",
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "アリスブルーのキス〜Another Color〜",
        artistDisplayName:
          "モア・ザン・トゥルー［Vo.ナオ／涼川直人（CV：豊永利行）］",
      },
      {
        type: "ED",
        sequence: 9,
        titleJa: "lucky train!",
        artistDisplayName: "るか・もな・みき from AIKATSU☆STARS!",
      },
      {
        type: "ED",
        sequence: 10,
        titleJa: "プライド",
        artistDisplayName: "カレン・ミライ from BEST FRIENDS!",
      },
      {
        type: "ED",
        sequence: 11,
        titleJa: "ヒラリ／ヒトリ／キラリ",
        artistDisplayName:
          "わか・ふうり・すなお・れみ・もえ・えり・ゆな・りすこ from STAR☆ANIS",
      },
      {
        type: "ED",
        sequence: 12,
        titleJa: "森のひかりのピルエット",
        artistDisplayName: "せな・るか from AIKATSU☆STARS!",
      },
      {
        type: "ED",
        sequence: 13,
        titleJa: "Be Star",
        artistDisplayName: "ひびき from BEST FRIENDS!",
      },
      {
        type: "ED",
        sequence: 14,
        titleJa: "Bon Bon Voyage!",
        artistDisplayName: "りさ・みほ from AIKATSU☆STARS!",
      },
      {
        type: "ED",
        sequence: 15,
        titleJa: "episode Solo",
        artistDisplayName: "るか・ななせ・かな・みほ from AIKATSU☆STARS!",
      },
      {
        type: "ED",
        sequence: 16,
        titleJa: "Believe it",
        artistDisplayName: "カレン・ミライ from BEST FRIENDS!",
      },
    ],
  },
  {
    anilistId: 105246,
    slug: "actors-songs-connection",
    startDate: "2019-10-06",
    titleJa: "ACTORS -Songs Connection-",
    titleZhHant: "ACTORS -Songs Connection-",
    titleRomaji: "ACTORS: Songs Connection",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105246-xQ5Mx0g1cM5a.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105246-5nxYPRpD9rhV.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://actorsmusic.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/actors_songs_connection",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ティターニア",
        artistDisplayName:
          "サクタスケ［音之宮朔（CV：梶原岳人）、神樂蒼介（CV：浦田わたる）、往田詩（CV：保住有哉）］",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "INAZUMA SHOCK（サクタスケ Ver.）",
        artistDisplayName:
          "サクタスケ［音之宮朔（CV：梶原岳人）、神樂蒼介（CV：浦田わたる）、往田詩（CV：保住有哉）］",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "INAZUMA SHOCK（考古学部 Ver.）",
        artistDisplayName:
          "丸目千熊（CV：木村昴）、円城寺三毛（CV：小野友樹）、秋月甲斐（CV：江口拓也）",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "INAZUMA SHOCK（歌唱部 Ver.）",
        artistDisplayName:
          "鑑香水月（CV：野島健児）、五月女燎（CV：坪井智浩）、葛野大路颯馬（CV：置鮎龍太郎）、光司陽太（CV：保志総一朗）",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "ときのねいろ〜天翔学園校歌〜",
        artistDisplayName:
          "小田原牧（CV：速水奨）、飯盛駆（CV：浅沼晋太郎）、高天神一兎（CV：逢坂良太）、一乗谷羚（CV：緑川光）",
      },
    ],
  },
  {
    anilistId: 108554,
    slug: "keishicho-tokumu-bu-tokushu-kyoaku-han-taisaku-shitsu-dai-nana-ka-tokunana",
    startDate: "2019-10-06",
    titleJa: "警視庁 特務部 特殊凶悪犯対策室 第七課 -トクナナ-",
    titleZhHant: "特勤局對策室第七課",
    titleRomaji:
      "Keishicho Tokumu-bu Tokushu Kyoaku-han Taisaku-Shitsu Dai-Nana-ka: Tokunana",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108554-e9tmHhFJ25Ct.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108554-Y94QCdHQegFZ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tokunana.jp/",
    animeThemesUrl:
      "https://animethemes.moe/anime/keishichou_tokumubu_tokushu_kyouakuhan_taisakushitsu_dainanaka_tokunana",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Take On Fever",
        artistDisplayName: "OLDCODEX",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "One Wish",
        artistDisplayName: "SCREEN mode",
      },
    ],
  },
  {
    anilistId: 108891,
    slug: "kono-oto-tomare-2",
    startDate: "2019-10-06",
    titleJa: "この音とまれ！2",
    titleZhHant: "一弦定音！第二季",
    titleRomaji: "Kono Oto Tomare! 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108891-RTZQkwjWsFi9.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108891-C3mfowQMhxma.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.konooto-anime.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/kono_oto_tomare_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Harmony",
        artistDisplayName: "蒼井翔太",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Rainbow",
        artistDisplayName: "内田雄馬",
      },
    ],
  },
  {
    anilistId: 110229,
    slug: "bokutachi-wa-benkyou-ga-dekinai",
    startDate: "2019-10-06",
    titleJa: "ぼくたちは勉強ができない！",
    titleZhHant: "我們真的學不來！第二季",
    titleRomaji: "Bokutachi wa Benkyou ga Dekinai!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110229-uBjHp2cbXYVL.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110229-8HairUoHsVUN.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://boku-ben.com/",
    animeThemesUrl:
      "https://animethemes.moe/anime/bokutachi_wa_benkyou_ga_dekinai_2",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Can now, Can now",
        artistDisplayName: "Study",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "放課後のリバティ",
        artistDisplayName: "halca",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "関係≧方程式",
        artistDisplayName: "Study",
      },
    ],
  },
  {
    anilistId: 111728,
    slug: "taeko-no-nichijou",
    startDate: "2019-10-06",
    titleJa: "耐え子の日常",
    titleZhHant: "耐子日常",
    titleRomaji: "Taeko no Nichijou",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111728-HKke26nSgdWd.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://www.dle.jp/jp/brands/taeko.html",
    themes: [],
  },
  {
    anilistId: 101227,
    slug: "watashi-nouryoku-wa-heikinchi-de-tte-itta-yo-ne",
    startDate: "2019-10-07",
    titleJa: "私、能力は平均値でって言ったよね！",
    titleZhHant: "我，不是說了能力要平均值嗎？",
    titleRomaji: "Watashi, Nouryoku wa Heikinchi de tte Itta yo ne!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101227-PUPavhaClwfa.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101227-hGIZHBjTowqe.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://noukin-anime.com/",
    animeThemesUrl:
      "https://animethemes.moe/anime/watashi_nouryoku_wa_heikinchi_de_tte_itta_yo_ne",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "スマイルスキル＝スキスキル！",
        artistDisplayName:
          "赤き誓い［マイル（CV：和氣あず未）、レーナ（CV：徳井青空）、メーヴィス（CV：内村史子）、ポーリン（CV：田澤茉純）］",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ゲンザイ↑バンザイ↑",
        artistDisplayName: "マイル（CV：和氣あず未）",
      },
    ],
  },
  {
    anilistId: 101349,
    slug: "babylon",
    startDate: "2019-10-07",
    titleJa: "バビロン",
    titleZhHant: "巴比倫",
    titleRomaji: "Babylon",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101349-AWy5SjUS8mYZ.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101349-5LUS8ZRP4ZiM.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://babylon-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/babylon",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "Live and let die",
        artistDisplayName: "Q-MHz feat. uloco.",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "イノチ食ム魂",
        artistDisplayName: "Q-MHz feat. 小松未可子",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "イノチ食ム魂（requiem ver.）",
        artistDisplayName: "Q-MHz feat. 小松未可子",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "The next new world that no one knows（blood stained ver.）",
        artistDisplayName: "Q-MHz feat. *Namirin",
      },
    ],
  },
  {
    anilistId: 104158,
    slug: "stand-my-heroes-piece-of-truth",
    startDate: "2019-10-07",
    titleJa: "スタンドマイヒーローズ PIECE OF TRUTH",
    titleZhHant: "募戀英雄 PIECE OF TRUTH",
    titleRomaji: "Stand My Heroes: PIECE OF TRUTH",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104158-Jn8LRgfii5Kx.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104158-Aj3NTw9lxMkp.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.standmyheroes.tv/",
    animeThemesUrl:
      "https://animethemes.moe/anime/stand_my_heroes_piece_of_truth",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Thought I Knew ft.ra'z, Hayes",
        artistDisplayName: "YVY",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Precious My Heroes",
        artistDisplayName: "fox capture plan feat. 宮本一粋",
      },
    ],
  },
  {
    anilistId: 108358,
    slug: "phantasy-star-online-2-episode-oracle",
    startDate: "2019-10-07",
    titleJa: "PHANTASY STAR ONLINE 2 EPISODE ORACLE",
    titleZhHant: "夢幻之星 Online 2 Episode Oracle",
    titleRomaji: "PHANTASY STAR ONLINE 2: EPISODE ORACLE",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108358-9Y0qXz0o101z.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://pso2.jp/anime_eporacle/",
    animeThemesUrl:
      "https://animethemes.moe/anime/phantasy_star_online_2_episode_oracle",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Destiny",
        artistDisplayName: "Aimee Blackschleger",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "UniVerse",
        artistDisplayName: "Aimee Blackschleger",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Timeless Fortune",
        artistDisplayName: "有坂美香",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "永遠のencore",
        artistDisplayName: "クーナ（CV：喜多村英梨）",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "それいゆ -Dear Destiny-",
        artistDisplayName: "桃井はるこ",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "Living on like stars",
        artistDisplayName: "有坂美香",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "Hello",
        artistDisplayName: "Monique Dehaney",
      },
    ],
  },
  {
    anilistId: 109562,
    slug: "fairy-gone-2",
    startDate: "2019-10-07",
    titleJa: "フェアリーゴーン 2",
    titleZhHant: "Fairy Gone 第二季",
    titleRomaji: "Fairy Gone 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109562-IA0G6Hce2VGM.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109562-2vHcq0CaeoLi.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.fairygone.com/",
    animeThemesUrl: "https://animethemes.moe/anime/fairy_gone_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "STILL STANDING",
        artistDisplayName: "(K)NoW_NAME",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Stay Gold",
        artistDisplayName: "(K)NoW_NAME",
      },
    ],
  },
  {
    anilistId: 110867,
    slug: "africa-no-salaryman-tv",
    startDate: "2019-10-07",
    titleJa: "アフリカのサラリーマン (TV)",
    titleZhHant: "非洲的動物上班族",
    titleRomaji: "Africa no Salaryman (TV)",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110867-93WWQaUgpUOS.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110867-cxnQulm8NHmW.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://afusara.com/",
    animeThemesUrl: "https://animethemes.moe/anime/africa_no_salaryman",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Soul Flag",
        artistDisplayName: "下野紘",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ホワイトカラーエレジー",
        artistDisplayName: "ライオン（CV：大塚明夫）",
      },
    ],
  },
  {
    anilistId: 100246,
    slug: "z-x-code-reunion",
    startDate: "2019-10-08",
    titleJa: "Z/X Code reunion",
    titleZhHant: "Z/X Code reunion",
    titleRomaji: "Z/X: Code reunion",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100246-Lx3geAxrhAU9.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100246-zpAZWDQl22sb.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.zxtcg.com/reunion/",
    animeThemesUrl: "https://animethemes.moe/anime/zx_code_reunion",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Destiny",
        artistDisplayName: "小倉唯",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ガール・ミーツ・ガール",
        artistDisplayName: "小倉唯、内田彩",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ガール・ミーツ・ガール",
        artistDisplayName: "水瀬いのり、長縄まりあ",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "ガール・ミーツ・ガール",
        artistDisplayName: "鈴木愛奈、富田美憂",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "ガール・ミーツ・ガール",
        artistDisplayName:
          "小倉唯、内田彩、水瀬いのり、長縄まりあ、鈴木愛奈、富田美憂",
      },
    ],
  },
  {
    anilistId: 110810,
    slug: "kandagawa-jet-girls",
    startDate: "2019-10-08",
    titleJa: "神田川JET GIRLS",
    titleZhHant: "神田川 JET GIRLS",
    titleRomaji: "Kandagawa JET GIRLS",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110810-dJEpyDWfzbfX.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110810-O9fJXhXPWU50.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://kjganime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/kandagawa_jet_girls",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "BULLET MERMAID",
        artistDisplayName: "波黄凛（CV：篠原侑）、蒼井ミサ（CV：小原莉子）",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "RIVALS",
        artistDisplayName: "田所あずさ",
      },
    ],
  },
  {
    anilistId: 131741,
    slug: "eily-wa-ou-sama",
    startDate: "2019-10-08",
    titleJa: "エイリは王さま！",
    titleZhHant: "Eily 是國王！",
    titleRomaji: "Eily wa Ou-sama!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131741-J9MFMIAAJGZI.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://www.youtube.com/watch?v=LBVm_Q2ATxM",
    themes: [],
  },
  {
    anilistId: 108928,
    slug: "nanatsu-no-taizai-kamigami-no-gekirin",
    startDate: "2019-10-09",
    titleJa: "七つの大罪 神々の逆鱗",
    titleZhHant: "七大罪 眾神的逆鱗",
    titleRomaji: "Nanatsu no Taizai: Kamigami no Gekirin",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108928-DuyUzi0JyPIr.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108928-QzElQ1VVSFoC.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.7-taizai.net/",
    animeThemesUrl:
      "https://animethemes.moe/anime/nanatsu_no_taizai_kamigami_no_gekirin",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ROB THE FRONTIER",
        artistDisplayName: "UVERworld",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "delete",
        artistDisplayName: "シド",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Regeneration",
        artistDisplayName: "雨宮天",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Good day",
        artistDisplayName: "足立佳奈",
      },
    ],
  },
  {
    anilistId: 177229,
    slug: "ponkotsu-quest-maou-to-haken-no-mamono-tachi-season-6",
    startDate: "2019-10-09",
    titleJa: "ポンコツクエスト〜魔王と派遣の魔物たち〜 シーズン6",
    titleZhHant: "廢柴任務 Season 6",
    titleRomaji: "Ponkotsu Quest: Maou to Haken no Mamono-tachi Season 6",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b177229-9yZdNBZUAdtX.png",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://www.vap.co.jp/ponque/",
    themes: [],
  },
  {
    anilistId: 104722,
    slug: "assassins-pride",
    startDate: "2019-10-10",
    titleJa: "アサシンズプライド",
    titleZhHant: "刺客守則",
    titleRomaji: "Assassins Pride",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104722-XVscwgdGzfnO.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104722-7dWzHxfVcHps.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://assassinspride-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/assassins_pride",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Share the light",
        artistDisplayName: "Run Girls, Run!",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "異人たちの時間",
        artistDisplayName: "メリダ＝アンジェル（CV：楠木ともり）",
      },
    ],
  },
  {
    anilistId: 107660,
    slug: "beastars",
    startDate: "2019-10-10",
    titleJa: "BEASTARS",
    titleZhHant: "BEASTARS",
    titleRomaji: "BEASTARS",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107660-hgknnyaLchJW.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107660-AxwrzHkXzYYN.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://bst-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/beastars",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Wild Side",
        artistDisplayName: "ALI",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Le zoo",
        artistDisplayName: "YURiKA",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "眠れる本能",
        artistDisplayName: "YURiKA",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "マーブル",
        artistDisplayName: "YURiKA",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "月に浮かぶ物語",
        artistDisplayName: "YURiKA",
      },
    ],
  },
  {
    anilistId: 109616,
    slug: "mugen-no-juunin-immortal",
    startDate: "2019-10-10",
    titleJa: "無限の住人-IMMORTAL-",
    titleZhHant: "無限之住人-IMMORTAL-",
    titleRomaji: "Mugen no Juunin: IMMORTAL",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109616-cPuNKosITAvn.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109616-WLWOWPGkfauS.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://mugen-immortal.com/",
    animeThemesUrl: "https://animethemes.moe/anime/mugen_no_juunin_immortal",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "SURVIVE OF VISION",
        artistDisplayName: "清春",
      },
    ],
  },
  {
    anilistId: 110786,
    slug: "gundam-build-divers-re-rise",
    startDate: "2019-10-10",
    titleJa: "ガンダムビルドダイバーズRe:RISE",
    titleZhHant: "鋼彈創鬥者 潛網大戰 Re:RISE",
    titleRomaji: "Gundam Build Divers Re:RISE",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110786-fkPT1rFx9VFU.png",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://gundam-bd.net/",
    animeThemesUrl: "https://animethemes.moe/anime/gundam_build_divers_rerise",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Re:RISE",
        artistDisplayName: "スピラ・スピカ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "MAGIC TIME",
        artistDisplayName: "スダンナユズユリー",
      },
    ],
  },
  {
    anilistId: 104052,
    slug: "hoshiai-no-sora",
    startDate: "2019-10-11",
    titleJa: "星合の空",
    titleZhHant: "星合之空",
    titleRomaji: "Hoshiai no Sora",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104052-vjxtx7LJiTgb.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104052-Vib9hMVeVHN6.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tbs.co.jp/anime/hoshiai/",
    animeThemesUrl: "https://animethemes.moe/anime/hoshiai_no_sora",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "水槽",
        artistDisplayName: "中島愛",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "籠の中の僕らは",
        artistDisplayName: "AIKI from bless4",
      },
    ],
  },
  {
    anilistId: 108478,
    slug: "no-guns-life",
    startDate: "2019-10-11",
    titleJa: "ノー・ガンズ・ライフ",
    titleZhHant: "非槍人生",
    titleRomaji: "No Guns Life",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108478-yHMnmQCtHSDb.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108478-1maWWL3g3vzO.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://nogunslife.com/",
    animeThemesUrl: "https://animethemes.moe/anime/no_guns_life",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "MOTOR CITY",
        artistDisplayName: "浅井健一",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Game Over",
        artistDisplayName: "DATS",
      },
    ],
  },
  {
    anilistId: 103638,
    slug: "kabukichou-sherlock",
    startDate: "2019-10-12",
    titleJa: "歌舞伎町シャーロック",
    titleZhHant: "歌舞伎町夏洛克",
    titleRomaji: "Kabukichou Sherlock",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103638-eXZ6Ux4cqmlF.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103638-gvJpnTloKSPu.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://pipecat-kabukicho.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/kabukichou_sherlock",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "CAPTURE",
        artistDisplayName: "EGO-WRAPPIN'",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "百億光年",
        artistDisplayName: "ロザリーナ",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "パレード",
        artistDisplayName: "石崎ひゅーい",
      },
    ],
  },
  {
    anilistId: 104276,
    slug: "boku-no-hero-academia-4",
    startDate: "2019-10-12",
    titleJa: "僕のヒーローアカデミア４",
    titleZhHant: "我的英雄學院 第4季",
    titleRomaji: "Boku no Hero Academia 4",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104276-SnEowMvesWIE.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104276-PQO1pcNzzWT0.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://heroaca.com/",
    animeThemesUrl:
      "https://animethemes.moe/anime/boku_no_hero_academia_4th_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ポラリス",
        artistDisplayName: "BLUE ENCOUNT",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "スターマーカー",
        artistDisplayName: "KANA-BOON",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "航海の唄",
        artistDisplayName: "さユり",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Shout Baby",
        artistDisplayName: "緑黄色社会",
      },
    ],
  },
  {
    anilistId: 107666,
    slug: "shin-chuuka-ichiban",
    startDate: "2019-10-12",
    titleJa: "真・中華一番！",
    titleZhHant: "真・中華一番！",
    titleRomaji: "Shin Chuuka Ichiban!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b107666-7X6hemlnrRb4.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107666-z9nzjIZteYER.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://cookingmaster-anime.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/shin_chuuka_ichiban",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "光福論",
        artistDisplayName: "クアイフ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "パラダイムシフト",
        artistDisplayName: "Brian the Sun",
      },
    ],
  },
  {
    anilistId: 109963,
    slug: "shokugeki-no-souma-shin-no-sara",
    startDate: "2019-10-12",
    titleJa: "食戟のソーマ 神ノ皿",
    titleZhHant: "食戟之靈 神之皿",
    titleRomaji: "Shokugeki no Souma: Shin no Sara",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109963-t8E9axH0Dvrn.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109963-hB2vzg1LhxkB.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://shokugekinosoma.com/4thplate/",
    animeThemesUrl:
      "https://animethemes.moe/anime/shokugeki_no_souma_shin_no_sara",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Chronos",
        artistDisplayName: "STEREO DIVE FOUNDATION",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "エンブレム",
        artistDisplayName: "nano.RIPE",
      },
    ],
  },
  {
    anilistId: 104679,
    slug: "rifle-is-beautiful",
    startDate: "2019-10-13",
    titleJa: "ライフル・イズ・ビューティフル",
    titleZhHant: "美妙射擊部",
    titleRomaji: "Rifle Is Beautiful",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104679-wGUXfMYSRXSW.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104679-ROmxv23af4Vd.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://chidori-high-school.com/",
    animeThemesUrl: "https://animethemes.moe/anime/rifle_is_beautiful",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Let's go! ライフリング4!!!!",
        artistDisplayName: "ライフリング4",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "夕焼けフレンズ",
        artistDisplayName: "ライフリング4",
      },
    ],
  },
  {
    anilistId: 108759,
    slug: "sword-art-online-alicization-war-of-underworld",
    startDate: "2019-10-13",
    titleJa: "ソードアート・オンライン アリシゼーション War of Underworld",
    titleZhHant: "刀劍神域 Alicization War of Underworld",
    titleRomaji: "Sword Art Online: Alicization - War of Underworld",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108759-jcXbDf9BJTcb.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108759-HGsEWBcisLmO.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://sao-alicization.net/",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Resolution",
        artistDisplayName: "戸松遥",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "unlasting",
        artistDisplayName: "LiSA",
      },
    ],
  },
  {
    anilistId: 111400,
    slug: "tenka-hyakken-meiji-kan-e-youkoso",
    startDate: "2019-10-13",
    titleJa: "天華百剣 ~めいじ館へようこそ!~",
    titleZhHant: "天華百劍 ～歡迎來到銘治館！～",
    titleRomaji: "Tenka Hyakken: Meiji-kan e Youkoso!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111400-Hvmsm0bG3Vmg.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://tenkahyakken.jp/special/anime/",
    animeThemesUrl:
      "https://animethemes.moe/anime/tenka_hyakken_meiji_kan_e_youkoso",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "紅、華を咲かせて",
        artistDisplayName: "御華見衆 椿組",
      },
    ],
  },
  {
    anilistId: 107993,
    slug: "super-shiro",
    startDate: "2019-10-14",
    titleJa: "SUPER SHIRO",
    titleZhHant: "SUPER SHIRO",
    titleRomaji: "SUPER SHIRO",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107993-vf1wjusuIlQW.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107993-62dJNGchYGET.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://www.shinchan-app.jp/super-shiro/",
    animeThemesUrl: "https://animethemes.moe/anime/super_shiro",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "SUPER SHIRO",
        artistDisplayName: "みゆはん",
      },
    ],
  },
  {
    anilistId: 101215,
    slug: "chihayafuru-3",
    startDate: "2019-10-23",
    titleJa: "ちはやふる 3",
    titleZhHant: "花牌情緣3",
    titleRomaji: "Chihayafuru 3",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101215-8TTRNAYJnPMW.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101215-14xKRtRqw7qr.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.ntv.co.jp/chihayafuru/",
    animeThemesUrl: "https://animethemes.moe/anime/chihayafuru_3",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "COLORFUL",
        artistDisplayName: "99RadioService",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "一目惚れ",
        artistDisplayName: "バンドハラスメント",
      },
    ],
  },
  {
    anilistId: 108307,
    slug: "psycho-pass-3",
    startDate: "2019-10-24",
    titleJa: "PSYCHO-PASS サイコパス3",
    titleZhHant: "PSYCHO-PASS 心靈判官 3",
    titleRomaji: "PSYCHO-PASS 3",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108307-2vfdTNsxoS8H.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108307-A5gEsxq66Nn9.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://psycho-pass.com/3rd/",
    animeThemesUrl: "https://animethemes.moe/anime/psycho_pass_3",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Q-vism",
        artistDisplayName: "Who-ya Extended",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "bullet",
        artistDisplayName: "Cö shu Nie",
      },
    ],
  },
  {
    anilistId: 116222,
    slug: "ninja-box-2nd-season",
    startDate: "2019-10-24",
    titleJa: "ニンジャボックス シーズン２",
    titleZhHant: "NINJA BOX 第二季",
    titleRomaji: "Ninja Box 2nd Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b116222-xKFmhAe7QoAL.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://ninjabox.bn-ent.net/anime/",
    themes: [],
  },
  {
    anilistId: 108581,
    slug: "hi-score-girl-ii",
    startDate: "2019-10-26",
    titleJa: "ハイスコアガール II",
    titleZhHant: "高分少女II",
    titleRomaji: "Hi Score Girl II",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b108581-gmxhJcBbITCl.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108581-QR0eNPQybREZ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://hi-score-girl.com/",
    animeThemesUrl: "https://animethemes.moe/anime/high_score_girl_ii",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "flash",
        artistDisplayName: "sora tob sakana",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "アンノウン・ワールドマップ",
        artistDisplayName: "やくしまるえつこ",
      },
    ],
  },
  {
    anilistId: 111048,
    slug: "kengan-ashura-part-2",
    metadataVerifiedAt: "2026-09-02",
    startDate: "2019-10-31",
    titleJa: "ケンガンアシュラ Part 2",
    titleZhHant: "拳願阿修羅 Part 2",
    titleRomaji: "Kengan Ashura Part 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111048-eN50zZM0YqkL.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111048-BPc3ZWPcjUVA.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://kengan.net/",
    animeThemesUrl: "https://animethemes.moe/anime/kengan_ashura_part_2",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "KING & ASHLEY",
        artistDisplayName: "MY FIRST STORY",
        versionLabel: "2019 年 Netflix 配信版",
        lastVerifiedAt: "2026-09-07",
        releaseDate: "2019-07-04",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "哀紫電一閃",
        artistDisplayName: "オメでたい頭でなにより",
        versionLabel: "2020 年電視播出版（第 13 話起）",
        lastVerifiedAt: "2026-09-07",
        releaseDate: "2020-04-03",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Born This Way",
        artistDisplayName: "BAD HOP",
        versionLabel: "2019 年 Netflix 配信版",
        lastVerifiedAt: "2026-09-07",
        credits: [
          { name: "YZERR", role: "vocals" },
          { name: "Vingo", role: "vocals" },
          { name: "Bark", role: "vocals" },
        ],
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ASHURA",
        artistDisplayName: "TAEYO",
        versionLabel: "2020 年電視播出版（第 13 話起）",
        lastVerifiedAt: "2026-09-07",
      },
    ],
  },
  {
    anilistId: 113655,
    slug: "shiohi-girls-vongole-bianco",
    startDate: "2019-11-13",
    titleJa: "しおひガールズ ボンゴレビアンコ",
    titleZhHant: "鹽分少女 Vongole Bianco",
    titleRomaji: "Shiohi Girls Vongole Bianco",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113655-pgIQ56Myer96.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113655-wNPD4OThuspy.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://shiohigirls-vb.com/",
    themes: [],
  },
  {
  "anilistId": 112153,
  "slug": "pocket-monsters-2019",
  "startDate": "2019-11-17",
  "titleJa": "ポケットモンスター (2019)",
  "titleZhHant": "寶可夢 旅途",
  "titleRomaji": "Pocket Monsters (2019)",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112153-LK1lpFz3vlvl.png",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112153-01RDuvgGTXjp.jpg",
  "broadcastLabel": "日本首播／時間未整理",
  "officialSiteUrl": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
  "animeThemesUrl": "https://animethemes.moe/anime/pokemon_2019",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "1・2・3",
      "artistDisplayName": "After the Rain（そらる×まふまふ）",
      "id": "pocket-monsters-2019-op-1",
      "songId": "pocket-monsters-2019-op-1-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://uni-mafumafu.jp/discography/76/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/artist/takanorinishikawa/info/520649",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-winter",
        "2020-spring",
        "2020-summer"
      ],
      "credits": [
        {
          "name": "まふまふ",
          "role": "lyrics"
        },
        {
          "name": "まふまふ",
          "role": "composition"
        },
        {
          "name": "まふまふ",
          "role": "arrangement"
        },
        {
          "name": "そらる",
          "role": "vocals"
        },
        {
          "name": "まふまふ",
          "role": "vocals"
        }
      ],
      "usageLabel": "第1～31話OP；本次只列2020年仍使用季度",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/76/",
            "https://www.sonymusic.co.jp/artist/takanorinishikawa/info/520649",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/76/",
            "https://www.sonymusic.co.jp/artist/takanorinishikawa/info/520649",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/76/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "official_video",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈1・2・3〉：まふまふ原曲頁直接明歌唱After the Rain（そらる×まふまふ）及完整LCA；Sony2020/7/30稱現担当且8/9接棒，2022原期公告明四個演唱版歌い継ぐ同曲。中文逐話OP1～31及日本播日串2020冬／春／夏，疫情停播不等整季無原曲使用；2019起用不新增2019歌曲或刷新首播metadata。",
          "resumeWhen": "詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "1・2・3",
      "artistDisplayName": "西川くんとキリショー",
      "id": "pocket-monsters-2019-op-2",
      "songId": "pocket-monsters-2019-op-1-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://uni-mafumafu.jp/discography/334/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/artist/takanorinishikawa/info/520649",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer",
        "2020-fall"
      ],
      "credits": [
        {
          "name": "まふまふ",
          "role": "lyrics"
        },
        {
          "name": "まふまふ",
          "role": "composition"
        },
        {
          "name": "まふまふ",
          "role": "arrangement"
        },
        {
          "name": "田中秀和（MONACA）",
          "role": "arrangement"
        }
      ],
      "usageLabel": "第32～49話OP；2020年8月9日接棒",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/334/",
            "https://www.sonymusic.co.jp/artist/takanorinishikawa/info/520649",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/334/",
            "https://www.sonymusic.co.jp/artist/takanorinishikawa/info/520649",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/334/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "official_video",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈1・2・3〉：Sony原2020/7/30公告直接8/9起西川くんとキリショーver.，原作者逐曲頁明詞曲まふまふ、編曲まふまふ／田中秀和（MONACA）；兩中文曲表32～49與日本TV日期交叉summer／fall。官方直接同曲リアレンジ與歌い継ぐ鏈才提共原OP1-song；不由兩人成團簡介推個別歌唱，不建立錄音。",
          "resumeWhen": "詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    },
    {
      "type": "OP",
      "sequence": 3,
      "titleJa": "1・2・3",
      "artistDisplayName": "からあげ姉妹（生田絵梨花・松村沙友理 from 乃木坂46）",
      "id": "pocket-monsters-2019-op-3",
      "songId": "pocket-monsters-2019-op-1-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://uni-mafumafu.jp/discography/329/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://uni-mafumafu.jp/news/34/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202107/25680_202107161855.html",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-winter",
        "2021-spring",
        "2021-summer",
        "2021-fall",
        "2022-winter"
      ],
      "credits": [
        {
          "name": "まふまふ",
          "role": "lyrics"
        },
        {
          "name": "まふまふ",
          "role": "composition"
        },
        {
          "name": "APAZZI",
          "role": "arrangement"
        },
        {
          "name": "Akira Sunset",
          "role": "arrangement"
        },
        {
          "name": "生田絵梨花",
          "role": "vocals"
        },
        {
          "name": "松村沙友理",
          "role": "vocals"
        }
      ],
      "usageLabel": "第50～99話OP；2021年1月8日起",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/329/",
            "https://uni-mafumafu.jp/news/34/",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
            "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202107/25680_202107161855.html"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/329/",
            "https://uni-mafumafu.jp/news/34/",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
            "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202107/25680_202107161855.html"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/329/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "official_video",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈1・2・3〉：原作者2021/1/7公告直接1/8起からあげ姉妹接前兩版，逐曲頁「うた」欄列生田絵梨花・松村沙友理及APAZZI／Akira Sunset編曲；此是本曲實唱不是cast。2021/7/16原TV節目同曲名義確證summer，中文50～99及日本首播日串2021四季至2022冬，不用2/19配信日當TV起點；官方同曲接棒才共原OP1-song。",
          "resumeWhen": "詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    },
    {
      "type": "OP",
      "sequence": 4,
      "titleJa": "1・2・3",
      "artistDisplayName": "サトシ＆ゴウ（CV：松本梨香＆山下大輝）",
      "id": "pocket-monsters-2019-op-4",
      "songId": "pocket-monsters-2019-op-1-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://uni-mafumafu.jp/discography/320/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/news/index_8.html",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [
        "2022-winter",
        "2022-spring",
        "2022-summer",
        "2022-fall"
      ],
      "credits": [
        {
          "name": "まふまふ",
          "role": "lyrics"
        },
        {
          "name": "まふまふ",
          "role": "composition"
        },
        {
          "name": "田中秀和",
          "role": "arrangement"
        },
        {
          "name": "松本梨香（サトシ）",
          "role": "vocals"
        },
        {
          "name": "山下大輝（ゴウ）",
          "role": "vocals"
        }
      ],
      "usageLabel": "第100話起OP；2022年3月4日起",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/320/",
            "https://www.tv-tokyo.co.jp/anime/pocketmonster/news/index_8.html",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/320/",
            "https://www.tv-tokyo.co.jp/anime/pocketmonster/news/index_8.html",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-4"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-op-4"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-4"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-op-4"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/320/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "official_video",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈1・2・3〉：原TV2022/3/4公告明サトシ＆ゴウ接棒「1・2・3」，Sony8月原公告明四版同曲歌い継ぐ；原作者逐曲「うた」直接列兩角色CV與田中秀和編曲。中文100話起及日本播日串2022冬春夏秋；不由3/16先行音樂配信推TV起用。最終話是否無OP或兼ED另為衝突，這裡不宣稱第136話實際OP，不將2023別頁with my friends用途搬入。",
          "resumeWhen": "詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "ポケモンしりとり（ピカチュウ→ミュウVer.）",
      "artistDisplayName": "ポケモン音楽クラブ（増田順一／パソコン音楽クラブ／ポケモンキッズ2019）",
      "id": "pocket-monsters-2019-ed-1",
      "songId": "pocket-monsters-2019-ed-1-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ポケモン公式YouTubeチャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=pgRfBigHj9c",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.pasoconongaku.club/works/pokemonshiritori1/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.mau2.com/anime/pocketmonster-r2-2",
          "label": "本期逐話ED版別交叉；只曲名與用途，不從聲優表推artist；ザマゼンダ採FP原字形。",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "只日本原TV逐話日期交叉；版本輪替備註不一致，不作本版正面歌曲身份或用途。",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-winter",
        "2020-fall",
        "2021-winter",
        "2021-spring"
      ],
      "credits": [
        {
          "name": "パソコン音楽クラブ",
          "role": "lyrics"
        },
        {
          "name": "ポケモンタイプ相性覚え隊",
          "role": "lyrics"
        },
        {
          "name": "パソコン音楽クラブ",
          "role": "composition"
        },
        {
          "name": "パソコン音楽クラブ",
          "role": "arrangement"
        },
        {
          "name": "ポケモン音楽クラブ",
          "role": "vocals"
        }
      ],
      "usageLabel": "TV ED ピカチュウ→ミュウ版；2019使用段不列本次季度",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/pokemonshiritori1/",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/pokemonshiritori1/"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/pocketmonster-r2-2"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/pocketmonster-r2-2"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/pokemonshiritori1/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "video_metadata",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈ポケモンしりとり（ピカチュウ→ミュウVer.）〉：作曲團隊原作品頁直接列精確兩版及TV ED、Vocal正式團體名義與已列LCA；不從増田順一producer或團體子項推個人皆歌唱。52Poke明2～19及40之後偶數話，Mau2直接56／58等版別與中文日本TV日期串冬2021、62等串春，配合2020冬與40話秋；TV電影宣傳48～54例外不混版本。中文Wiki版本輪替備註不一致，只借逐話日本日期，不正面支持本版usage。 原creator直接詞作欄另列ポケモンタイプ相性覚え隊，已按逐曲明示保存；Sony概述僅列パソコン音楽クラブ，沒有用概述省略直接共同署名。兩版仍保原各自songID，不因full影像或相同base標題自動合併。",
          "resumeWhen": "詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "ポケモンしりとり（ミュウ→ザマゼンタVer.）",
      "artistDisplayName": "ポケモン音楽クラブ（増田順一／パソコン音楽クラブ／ポケモンキッズ2019）",
      "id": "pocket-monsters-2019-ed-2",
      "songId": "pocket-monsters-2019-ed-2-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.pasoconongaku.club/works/pokemonshiritori2/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.mau2.com/anime/pocketmonster-r2-2",
          "label": "本期逐話ED版別交叉；只曲名與用途，不從聲優表推artist；ザマゼンダ採FP原字形。",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "只日本原TV逐話日期交叉；版本輪替備註不一致，不作本版正面歌曲身份或用途。",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall",
        "2021-winter",
        "2021-spring"
      ],
      "credits": [
        {
          "name": "パソコン音楽クラブ",
          "role": "lyrics"
        },
        {
          "name": "ポケモンタイプ相性覚え隊",
          "role": "lyrics"
        },
        {
          "name": "パソコン音楽クラブ",
          "role": "composition"
        },
        {
          "name": "パソコン音楽クラブ",
          "role": "arrangement"
        },
        {
          "name": "ポケモン音楽クラブ",
          "role": "vocals"
        }
      ],
      "usageLabel": "TV ED ミュウ→ザマゼンタ版；第20話起與後續奇數話輪替",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/pokemonshiritori2/",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/pokemonshiritori2/"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/pocketmonster-r2-2"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/pocketmonster-r2-2"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/pokemonshiritori2/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "official_video",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈ポケモンしりとり（ミュウ→ザマゼンタVer.）〉：作曲團隊原作品頁直接明精確本版TV ED、正式名義及已列LCA。52Poke20～39與41後奇數話，Mau2本版55／57及61／69，配中文日本TV4/5、2/12、4/9、6/4等實日串2020春夏秋及2021冬春；不由4/5商品日單獨推季度。Mau2一處ザマゼンダ字形與原名不同採第一方ザマゼンタ，中文Wiki輪替錯界排除正面用途。 原creator直接詞作欄另列ポケモンタイプ相性覚え隊，已按逐曲明示保存；Sony概述僅列パソコン音楽クラブ，沒有用概述省略直接共同署名。兩版仍保原各自songID，不因full影像或相同base標題自動合併。",
          "resumeWhen": "詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "バツグンタイプ",
      "artistDisplayName": "ポケモン音楽クラブ（増田順一／パソコン音楽クラブ／ポケモンキッズ2019）",
      "id": "pocket-monsters-2019-ed-3",
      "songId": "pocket-monsters-2019-ed-3-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.pasoconongaku.club/works/batsuguntype/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202107/25680_202107161855.html",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-spring",
        "2021-summer",
        "2021-fall",
        "2022-winter",
        "2022-spring",
        "2022-summer",
        "2022-fall"
      ],
      "credits": [
        {
          "name": "パソコン音楽クラブ",
          "role": "lyrics"
        },
        {
          "name": "ポケモンタイプ相性覚え隊",
          "role": "lyrics"
        },
        {
          "name": "パソコン音楽クラブ",
          "role": "composition"
        },
        {
          "name": "パソコン音楽クラブ",
          "role": "arrangement"
        },
        {
          "name": "ポケモン音楽クラブ",
          "role": "vocals"
        }
      ],
      "usageLabel": "第71話起TV ED；特殊最終話另核",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/batsuguntype/",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
            "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202107/25680_202107161855.html"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/batsuguntype/",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
            "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/202107/25680_202107161855.html"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.pasoconongaku.club/works/batsuguntype/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "official_video",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈バツグンタイプ〉：creator原頁直接明ED、本曲正式名義、共同詞作及曲編；Sony原2022/8月明本期ED，2021/7/16原TV節目亦直接列ED。中文71話6/18起至135的日本TV日期跨2021春夏秋與2022四季，僅本期範圍；每話歌詞／畫面輪替不自動多造song或recording。12/16最終話節目頁的通用ED欄與逐話CC不一致，不用該頁證136話仍用此曲。",
          "resumeWhen": "詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "1・2・3",
      "artistDisplayName": "After the Rain（そらる×まふまふ）",
      "id": "pocket-monsters-2019-ed-4",
      "songId": "pocket-monsters-2019-ed-4-song",
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/pokemon_2019",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://uni-mafumafu.jp/discography/76/",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://www.sonymusic.co.jp/PR/pokemon/info/544028",
          "label": "第一方本曲原名、演唱名義與已列資料",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        },
        {
          "url": "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94",
          "label": "本期原名、名義與OP／ED／插曲用途交叉核對",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-22"
        }
      ],
      "links": [
        {
          "platform": "作品官網",
          "label": "作品官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/pocketmonster/",
          "linkType": "official_landing_page",
          "region": "JP"
        }
      ],
      "sourceMode": "explicit",
      "seasonIds": [],
      "credits": [
        {
          "name": "まふまふ",
          "role": "lyrics"
        },
        {
          "name": "まふまふ",
          "role": "composition"
        },
        {
          "name": "まふまふ",
          "role": "arrangement"
        }
      ],
      "usageLabel": "既有ED候選；2020年以後本演唱版TV用途待核",
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/76/",
            "https://www.sonymusic.co.jp/PR/pokemon/info/544028"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://animethemes.moe/anime/pokemon_2019"
          ],
          "verifiedAt": "2026-09-02",
          "targetId": "pocket-monsters-2019-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://wiki.52poke.com/zh-hant/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E6%97%85%E9%80%94"
          ],
          "verifiedAt": "2026-10-22",
          "targetId": "pocket-monsters-2019-ed-4-song"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://uni-mafumafu.jp/discography/76/"
          ],
          "verifiedAt": "2026-10-22"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "recordings",
            "official_video",
            "releases",
            "platform_links",
            "platform_availability"
          ],
          "note": "〈1・2・3〉：原候選After the Rain同曲身分與LCA可由原作者／Sony逐曲資料證，但兩輪未得2020年以後此演唱版TV ED第一方。52Poke一處將原第1話與重編號132話ED寫After the Rain，中文Wiki與逐話英日CC指2022/12/16最終話為サトシ＆ゴウ版；官方節目頁又只通用バツグンタイプ欄，不能由此推After the Rain或偷改既有歌手。保原ED4 ID／type／序號／songID與舊名義，held空季度；2019首話ED線索不算2020～2026已證用途。",
          "resumeWhen": "待原期官方逐話歌曲credit、製播方或唱片／藝人具名公告直接明After the Rain版1・2・3於2020～2026哪一原TV話作ED，才解除held並分季；若只有2019第1話則另記範圍外用途，不填2020季度。最終話若欲核サトシ＆ゴウ特殊ED需獨立第一方，不用錯編號CC／節目通用曲欄代替或無證改歌手。詳細階段沿本曲已核來源，待第一方逐曲明示尚缺實唱／作者、錄音版本、官方影片形式、發行收錄及正版平台後才補相應欄位；不由cast、團體名冊、MV或同CD推全員歌唱、full／TV錄音或更多用途。2019起播日期、metadata及2023目標是寶可夢大師另頁已核用途保持，後續只在原期逐話證據改變時調整本曲季度。",
          "checkedAt": "2026-10-22"
        }
      ],
      "lastVerifiedAt": "2026-10-22"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "seasonIds": [
    "2019-fall",
    "2020-fall",
    "2020-spring",
    "2020-summer",
    "2020-winter",
    "2021-fall",
    "2021-spring",
    "2021-summer",
    "2021-winter",
    "2022-fall",
    "2022-spring",
    "2022-summer",
    "2022-winter"
  ]
},
  {
    anilistId: 109639,
    slug: "kyouryuu-shoujo-gauko",
    startDate: "2019-11-22",
    titleJa: "恐竜少女ガウ子",
    titleZhHant: "恐龍女孩高子",
    titleRomaji: "Kyouryuu Shoujo Gauko",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b109639-dYkX119PtRm9.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109639-9UrObZ8jeXhJ.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://www.netflix.com/jp/title/80216180",
    themes: [],
  },
  {
    anilistId: 104979,
    slug: "iya-na-kao-sare-nagara-opantsu-misete-moraitai-2",
    startDate: "2019-11-23",
    titleJa: "嫌な顔されながらおパンツ見せてもらいたい 2",
    titleZhHant: "想看她一臉嫌惡地露出內褲 第二季",
    titleRomaji: "Iya na Kao sare nagara Opantsu Misete Moraitai 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104979-GyV2oj4lKHD2.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104979-m7hjtMJJHi7c.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://iyapan-anime.com/",
    themes: [],
  },
  {
    anilistId: 108598,
    slug: "levius",
    startDate: "2019-11-28",
    titleJa: "レビウス",
    titleZhHant: "列比烏斯",
    titleRomaji: "Levius",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108598-RGcBgF8J7fec.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108598-JNOQkmj0zBHI.jpg",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://levius.net/",
    animeThemesUrl: "https://animethemes.moe/anime/levius",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "wit and love",
        artistDisplayName: "謎女",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "child dancer",
        artistDisplayName: "謎女",
      },
    ],
  },
  {
    anilistId: 138953,
    slug: "mukashi-keiba-nashi",
    startDate: "2019-11-30",
    titleJa: "むかしケイバなし",
    titleZhHant: "往昔賽馬物語",
    titleRomaji: "Mukashi Keiba Nashi",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b138953-wBBevhqPscbL.jpg",
    broadcastLabel: "日本電視首播／短篇系列",
    officialSiteUrl: "https://www.asahi.co.jp/keibanashi/",
    themes: [],
  },
  {
    anilistId: 111964,
    slug: "obsolete",
    startDate: "2019-12-03",
    titleJa: "OBSOLETE（オブソリート）",
    titleZhHant: "OBSOLETE",
    titleRomaji: "OBSOLETE",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111964-lNX9tvzbiIm7.png",
    broadcastLabel: "日本網絡首播／時間未整理",
    officialSiteUrl: "https://project-obsolete.com/",
    themes: [],
  },
];

export const curated2019FallSeeds: CuratedAnimeSeed[] =
  curated2019FallSeedRows.map(fall2019Seed);

export const curated2019FallAnimeIds = curated2019FallSeeds.map(
  ({ anilistId }) => anilistId,
);
