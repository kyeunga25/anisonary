import { curatedAnimeKey, type CuratedAnimeSeed, type CuratedCatalogAnimeSeed } from "@/data/curated-seeds/types";

type Summer2019SeedInput = Omit<
  CuratedAnimeSeed,
  | "id" | "seasonIds" | "editorialWeekday" | "status" | "anilistUrl"
  | "wikipediaUrl" | "sourceReferenceUrls" | "verifiedAt"
> & Partial<Pick<CuratedAnimeSeed, "sourceReferenceUrls">> & {
  localizedReferenceUrl?: string | null;
};

const summer2019ReferenceUrls = [
  "https://acgsecrets.hk/bangumi/201907/",
  "https://www.kansou.me/archive/2019_summer.html"
];

function summer2019Seed({
  localizedReferenceUrl = "https://youranimes.tw/bangumi/201907",
  ...row
}: Summer2019SeedInput): CuratedAnimeSeed {
  const weekday = new Date(`${row.startDate}T00:00:00Z`).getUTCDay();
  return {
    ...row,
    id: `curated-${row.anilistId}`,
    seasonIds: row.anilistId === 100891 ? ["2019-summer", "2020-winter"] : row.anilistId === 105333 ? ["2019-summer", "2019-fall"] : row.anilistId === 111144 ? ["2019-summer", "2019-fall", "2020-winter"] : row.anilistId === 105310 || row.anilistId === 101348 ? ["2019-summer", "2019-fall"] : ["2019-summer"],
    editorialWeekday: weekday || 7,
    status: "finished",
    anilistUrl: `https://anilist.co/anime/${row.anilistId}`,
    ...(localizedReferenceUrl ? { wikipediaUrl: localizedReferenceUrl } : {}),
    sourceReferenceUrls: [...(row.sourceReferenceUrls ?? summer2019ReferenceUrls)],
    verifiedAt: "2026-09-07"
  };
}

const curated2019SummerSeedRows: Summer2019SeedInput[] = [
  {
    anilistId: 100280,
    slug: "starmyu-3rd-season",
    startDate: "2019-07-01",
    titleJa: "スタミュ 第3期",
    titleZhHant: "高校星歌劇 第三期",
    titleRomaji: "Starmyu 3rd Season",
    officialSiteUrl: "https://hstar-mu.com/",
    animeThemesUrl: "https://animethemes.moe/anime/starmyu_3rd_season",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/starmyu_3rd_season?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "DREAM TOGETHER!!!",
        artistDisplayName: "新里宏太",
        releaseDate: "2019-07-31",
        credits: [
          {
            name: "新里宏太",
            role: "vocals"
          },
          {
            name: "六ツ見純代",
            role: "lyrics"
          },
          {
            name: "中山聡",
            role: "composition"
          },
          {
            name: "中山聡",
            role: "arrangement"
          }
        ],
"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本期日本TV版別與完整常規節目時段或正版單話本體時長的對應仍待核對，歌曲基本資料尚未完成核對。",
    "resumeWhen": "待有可公開查閱的新同版資料，明確列出完整常規節目時段或正版普通單話本體時長，並與本期官方身分對應後，再核對歌曲；其他期、WEB先行及首末話特別編排另計。",
    "checkedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV第3期，7月1日週一22:00起；正常單話完整槽與本體分鐘待核。現有OP以外歌曲仍待逐用途核對，未收錄不等無歌。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://hstar-mu.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/starmyu_3rd_season?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/starmyu_3rd_season",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "「スタミュ」（第3期）公式サイト：同版TV作品與播出資料（不以起點代替完整時段）",
    "url": "https://hstar-mu.com/onair/index.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 107672,
    slug: "katsute-kami-datta-kemono-tachi-e",
    startDate: "2019-07-01",
    titleJa: "かつて神だった獣たちへ",
    titleZhHant: "獵獸神兵",
    titleRomaji: "Katsute Kami Datta Kemono-tachi e",
    officialSiteUrl: "https://katsu-kami.com/",
    animeThemesUrl: "https://animethemes.moe/anime/katsute_kami_datta_kemono_tachi_e",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/katsute_kami_datta_kemono_tachi_e?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "サクリファイス",
        artistDisplayName: "まふまふ",
"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本期日本TV版別與完整常規節目時段或正版單話本體時長的對應仍待核對，歌曲基本資料尚未完成核對。",
    "resumeWhen": "待有可公開查閱的新同版資料，明確列出完整常規節目時段或正版普通單話本體時長，並與本期官方身分對應後，再核對歌曲；其他期、WEB先行及首末話特別編排另計。",
    "checkedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "HHOOWWLL",
        artistDisplayName: "Gero×ARAKI",
        releaseDate: "2019-07-24",
        credits: [
          {
            name: "Gero×ARAKI",
            role: "vocals"
          },
          {
            name: "hotaru（TaWaRa）",
            role: "lyrics"
          },
          {
            name: "Tom-H@ck（TaWaRa）",
            role: "composition"
          },
          {
            name: "KanadeYUK（TaWaRa）",
            role: "arrangement"
          }
        ],
"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本期日本TV版別與完整常規節目時段或正版單話本體時長的對應仍待核對，歌曲基本資料尚未完成核對。",
    "resumeWhen": "待有可公開查閱的新同版資料，明確列出完整常規節目時段或正版普通單話本體時長，並與本期官方身分對應後，再核對歌曲；其他期、WEB先行及首末話特別編排另計。",
    "checkedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本原TV；正常單話完整槽與本體分鐘仍待核，開始／配信日期分開。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://katsu-kami.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/katsute_kami_datta_kemono_tachi_e?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/katsute_kami_datta_kemono_tachi_e",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  }
],
  },
  {
    anilistId: 105074,
    slug: "tejina-senpai",
    startDate: "2019-07-02",
    titleJa: "手品先輩",
    titleZhHant: "魔術學姐",
    titleRomaji: "Tejina-senpai",
    officialSiteUrl: "https://tejina-senpai.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/tejina_senpai",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/tejina_senpai?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "FANTASTIC ILLUSION",
        artistDisplayName: "i☆Ris",
        releaseDate: "2019-08-28"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ダメハダメ",
        artistDisplayName: "鈴木みのり",
        releaseDate: "2019-08-07",
        credits: [
          {
            name: "鈴木みのり",
            role: "vocals"
          },
          {
            name: "acane_madder",
            role: "lyrics"
          },
          {
            name: "浅利進吾",
            role: "composition"
          },
          {
            name: "北川勝利",
            role: "arrangement"
          }
        ]
      }
    ]
  },
  {
    anilistId: 108111,
    slug: "sounan-desu-ka",
    startDate: "2019-07-02",
    titleJa: "ソウナンですか？",
    titleZhHant: "你遭難了嗎？",
    titleRomaji: "Sounan Desu ka?",
    officialSiteUrl: "https://sounandesuka.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/sounan_desu_ka",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/sounan_desu_ka?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:15",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ココハドコ",
        artistDisplayName: "あほむし（CV：M・A・O、河野ひより、安野希世乃、和氣あず未）",
        releaseDate: "2019-09-04"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "生きる",
        artistDisplayName: "安野希世乃",
        releaseDate: "2019-09-04"
      }
    ]
  },
  {
    anilistId: 107663,
    slug: "kanata-no-astra",
    startDate: "2019-07-03",
    titleJa: "彼方のアストラ",
    titleZhHant: "彼方的阿斯特拉",
    titleRomaji: "Kanata no Astra",
    officialSiteUrl: "https://astra-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/kanata_no_astra",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/kanata_no_astra?include=resources",
      language: "en"
    },
    broadcastTimeJst: "21:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "star*frost",
        artistDisplayName: "nonoc",
        releaseDate: "2019-08-07",
        credits: [
          {
            name: "nonoc",
            role: "vocals"
          },
          {
            name: "安田史生",
            role: "lyrics"
          },
          {
            name: "越前谷直樹",
            role: "composition"
          },
          {
            name: "田口史也",
            role: "composition"
          },
          {
            name: "越前谷直樹",
            role: "arrangement"
          },
          {
            name: "田口史也",
            role: "arrangement"
          }
        ],
"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本期日本TV版別與完整常規節目時段或正版單話本體時長的對應仍待核對，歌曲基本資料尚未完成核對。",
    "resumeWhen": "待有可公開查閱的新同版資料，明確列出完整常規節目時段或正版普通單話本體時長，並與本期官方身分對應後，再核對歌曲；其他期、WEB先行及首末話特別編排另計。",
    "checkedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Glow at the Velocity of Light",
        artistDisplayName: "安月名莉子",
        releaseDate: "2019-08-21",
        credits: [
          {
            name: "安月名莉子",
            role: "vocals"
          },
          {
            name: "タナカ零",
            role: "lyrics"
          },
          {
            name: "ナスカ",
            role: "composition"
          },
          {
            name: "the Third",
            role: "arrangement"
          }
        ],
"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本期日本TV版別與完整常規節目時段或正版單話本體時長的對應仍待核對，歌曲基本資料尚未完成核對。",
    "resumeWhen": "待有可公開查閱的新同版資料，明確列出完整常規節目時段或正版普通單話本體時長，並與本期官方身分對應後，再核對歌曲；其他期、WEB先行及首末話特別編排另計。",
    "checkedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV，7月3日週三起；首末話為1小時特別編排，正常單話完整槽與本體分鐘待核，WEB先行另列。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://astra-anime.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/kanata_no_astra?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/kanata_no_astra",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「彼方のアストラ」公式サイト：同版TV作品與播出資料（不以起點代替完整時段）",
    "url": "https://astra-anime.com/onair/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 107226,
    slug: "dumbbell-nan-kilo-moteru",
    startDate: "2019-07-03",
    titleJa: "ダンベル何キロ持てる？",
    titleZhHant: "流汗吧！健身少女",
    titleRomaji: "Dumbbell Nan Kilo Moteru?",
    officialSiteUrl: "https://dumbbell-anime.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/dumbbell_nan_kilo_moteru",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/dumbbell_nan_kilo_moteru?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "お願いマッスル",
        artistDisplayName: "紗倉ひびき(CV：ファイルーズあい)＆街雄鳴造(CV：石川界人)",
        releaseDate: "2019-07-24",
"followUp": [],
"songId": "dumbbell-nan-kilo-moteru-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《流汗吧！健身少女》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://dumbbell-anime.jp/products/music.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/dumbbell_nan_kilo_moteru",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "KADOKAWAanime 官方影片",
    "url": "https://www.youtube.com/watch?v=mgympfbOgqw",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://dumbbell-anime.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%83%99%E3%83%AB%E4%BD%95%E3%82%AD%E3%83%AD%E6%8C%81%E3%81%A6%E3%82%8B",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "dumbbell-nan-kilo-moteru-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://dumbbell-anime.jp/products/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dumbbell-nan-kilo-moteru-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://dumbbell-anime.jp/products/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "dumbbell-nan-kilo-moteru-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%83%99%E3%83%AB%E4%BD%95%E3%82%AD%E3%83%AD%E6%8C%81%E3%81%A6%E3%82%8B"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dumbbell-nan-kilo-moteru-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%83%99%E3%83%AB%E4%BD%95%E3%82%AD%E3%83%AD%E6%8C%81%E3%81%A6%E3%82%8B"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "マッチョアネーム？",
        artistDisplayName: "街雄鳴造(CV：石川界人)",
        releaseDate: "2019-07-24",
"followUp": [],
"songId": "dumbbell-nan-kilo-moteru-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《流汗吧！健身少女》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://dumbbell-anime.jp/products/music.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/dumbbell_nan_kilo_moteru",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "KADOKAWAanime 官方影片",
    "url": "https://www.youtube.com/watch?v=Ez3BKRr6Zuk",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://dumbbell-anime.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%83%99%E3%83%AB%E4%BD%95%E3%82%AD%E3%83%AD%E6%8C%81%E3%81%A6%E3%82%8B",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "dumbbell-nan-kilo-moteru-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://dumbbell-anime.jp/products/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dumbbell-nan-kilo-moteru-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://dumbbell-anime.jp/products/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "dumbbell-nan-kilo-moteru-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%83%99%E3%83%AB%E4%BD%95%E3%82%AD%E3%83%AD%E6%8C%81%E3%81%A6%E3%82%8B"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dumbbell-nan-kilo-moteru-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%83%80%E3%83%B3%E3%83%99%E3%83%AB%E4%BD%95%E3%82%AD%E3%83%AD%E6%8C%81%E3%81%A6%E3%82%8B"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV版，完整30分鐘常規節目時段已有同版資料支持，非淨片長；本版兩首主題曲使用季度列為2019年夏。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://dumbbell-anime.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/dumbbell_nan_kilo_moteru?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/dumbbell_nan_kilo_moteru",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「ダンベル何キロ持てる？」公式サイト：同版TV作品與播出資料（不以起點代替完整時段）",
    "url": "https://dumbbell-anime.jp/onair/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：同版日本TV播出與時段交叉資料（非淨長）",
    "url": "https://zh.wikipedia.org/wiki/%E6%B5%81%E6%B1%97%E5%90%A7%EF%BC%81%E5%81%A5%E8%BA%AB%E5%B0%91%E5%A5%B3",
    "language": "multi",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 104252,
    slug: "maou-sama-retry",
    startDate: "2019-07-03",
    titleJa: "魔王様、リトライ！",
    titleZhHant: "魔王陛下，RETRY！",
    titleRomaji: "Maou-sama, Retry!",
    officialSiteUrl: "https://maousama-anime.com/2019/",
    animeThemesUrl: "https://animethemes.moe/anime/maou_sama_retry",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/maou_sama_retry?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "TEMPEST",
        artistDisplayName: "石原夏織",
        releaseDate: "2019-07-17",
"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本期日本TV版別與完整常規節目時段或正版單話本體時長的對應仍待核對，歌曲基本資料尚未完成核對。",
    "resumeWhen": "待有可公開查閱的新同版資料，明確列出完整常規節目時段或正版普通單話本體時長，並與本期官方身分對應後，再核對歌曲；其他期、WEB先行及首末話特別編排另計。",
    "checkedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "NEW",
        artistDisplayName: "東城陽奏",
        releaseDate: "2019-08-07",
        credits: [
          {
            name: "東城陽奏",
            role: "vocals"
          },
          {
            name: "東城陽奏",
            role: "lyrics"
          },
          {
            name: "YOSHIHIRO",
            role: "composition"
          },
          {
            name: "YOSHIHIRO",
            role: "arrangement"
          }
        ],
"followUp": [
  {
    "fields": [
      "basic_evidence"
    ],
    "note": "本期日本TV版別與完整常規節目時段或正版單話本體時長的對應仍待核對，歌曲基本資料尚未完成核對。",
    "resumeWhen": "待有可公開查閱的新同版資料，明確列出完整常規節目時段或正版普通單話本體時長，並與本期官方身分對應後，再核對歌曲；其他期、WEB先行及首末話特別編排另計。",
    "checkedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年第1作日本TV身分與完整常規節目時段或正版單話本體時長的對應仍待核對，其他版本另計。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://maousama-anime.com/2019/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/maou_sama_retry?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/maou_sama_retry",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：同版日本TV播出與時段交叉資料（非淨長）",
    "url": "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E6%A7%98%E3%80%81%E3%83%AA%E3%83%88%E3%83%A9%E3%82%A4!",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 107956,
    slug: "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai",
    startDate: "2019-07-04",
    titleJa: "うちの娘の為ならば、俺はもしかしたら魔王も倒せるかもしれない。",
    titleZhHant: "為了女兒，我說不定連魔王都能幹掉。",
    titleRomaji: "Uchi no Ko no Tame naraba, Ore wa Moshikashitara Maou mo Taoseru kamo Shirenai.",
    officialSiteUrl: "https://columbia.jp/uchinoko-anime/release.html",
    animeThemesUrl: "https://animethemes.moe/anime/uchi_no_ko_no_tame_naraba_ore_wa_moshikashitara_maou_mo_taoseru_kamo_shirenai",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/uchi_no_ko_no_tame_naraba_ore_wa_moshikashitara_maou_mo_taoseru_kamo_shirenai?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "I'm with you",
        artistDisplayName: "ラティナ（CV：高尾奏音）",
        releaseDate: "2019-07-24",
        credits: [
  {
    "name": "ラティナ（CV：高尾奏音）",
    "role": "vocals"
  },
  {
    "name": "渡部紫緒",
    "role": "lyrics"
  },
  {
    "name": "松坂康司",
    "role": "composition"
  },
  {
    "name": "佐藤清喜",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://columbia.jp/uchinoko-anime/release.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/uchi_no_ko_no_tame_naraba_ore_wa_moshikashitara_maou_mo_taoseru_kamo_shirenai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%A1%E3%81%AE%E5%A8%98%E3%81%AE%E7%82%BA%E3%81%AA%E3%82%89%E3%81%B0%E3%80%81%E4%BF%BA%E3%81%AF%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89%E9%AD%94%E7%8E%8B%E3%82%82%E5%80%92%E3%81%9B%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%80%82",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://columbia.jp/uchinoko-anime/release.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://columbia.jp/uchinoko-anime/release.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%A1%E3%81%AE%E5%A8%98%E3%81%AE%E7%82%BA%E3%81%AA%E3%82%89%E3%81%B0%E3%80%81%E4%BF%BA%E3%81%AF%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89%E9%AD%94%E7%8E%8B%E3%82%82%E5%80%92%E3%81%9B%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%80%82"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%A1%E3%81%AE%E5%A8%98%E3%81%AE%E7%82%BA%E3%81%AA%E3%82%89%E3%81%B0%E3%80%81%E4%BF%BA%E3%81%AF%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89%E9%AD%94%E7%8E%8B%E3%82%82%E5%80%92%E3%81%9B%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%80%82"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://columbia.jp/uchinoko-anime/release.html"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "This is 勇者, but 残念!?",
        artistDisplayName: "デイル（CV：岡本信彦）",
        releaseDate: "2019-07-24",
        credits: [
  {
    "name": "デイル（CV：岡本信彦）",
    "role": "vocals"
  },
  {
    "name": "hisakuni",
    "role": "lyrics"
  },
  {
    "name": "hisakuni",
    "role": "composition"
  },
  {
    "name": "hisakuni",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://columbia.jp/uchinoko-anime/release.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/uchi_no_ko_no_tame_naraba_ore_wa_moshikashitara_maou_mo_taoseru_kamo_shirenai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%A1%E3%81%AE%E5%A8%98%E3%81%AE%E7%82%BA%E3%81%AA%E3%82%89%E3%81%B0%E3%80%81%E4%BF%BA%E3%81%AF%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89%E9%AD%94%E7%8E%8B%E3%82%82%E5%80%92%E3%81%9B%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%80%82",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://columbia.jp/uchinoko-anime/release.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://columbia.jp/uchinoko-anime/release.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%A1%E3%81%AE%E5%A8%98%E3%81%AE%E7%82%BA%E3%81%AA%E3%82%89%E3%81%B0%E3%80%81%E4%BF%BA%E3%81%AF%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89%E9%AD%94%E7%8E%8B%E3%82%82%E5%80%92%E3%81%9B%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%80%82"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "uchi-no-ko-no-tame-naraba-ore-wa-moshikashitara-maou-mo-taoseru-kamo-shirenai-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%A1%E3%81%AE%E5%A8%98%E3%81%AE%E7%82%BA%E3%81%AA%E3%82%89%E3%81%B0%E3%80%81%E4%BF%BA%E3%81%AF%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89%E9%AD%94%E7%8E%8B%E3%82%82%E5%80%92%E3%81%9B%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%80%82"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://columbia.jp/uchinoko-anime/release.html"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV版，完整30分鐘常規節目時段已有同版資料支持，非淨片長；本版兩首主題曲使用季度列為2019年夏。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://columbia.jp/uchinoko-anime/release.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/uchi_no_ko_no_tame_naraba_ore_wa_moshikashitara_maou_mo_taoseru_kamo_shirenai?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/uchi_no_ko_no_tame_naraba_ore_wa_moshikashitara_maou_mo_taoseru_kamo_shirenai",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "日本コロムビア：同版TV作品與播出資料（不以起點代替完整時段）",
    "url": "https://columbia.jp/uchinoko-anime/prog.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：同版日本TV播出與時段交叉資料（非淨長）",
    "url": "https://ja.wikipedia.org/wiki/%E3%81%86%E3%81%A1%E3%81%AE%E5%A8%98%E3%81%AE%E7%82%BA%E3%81%AA%E3%82%89%E3%81%B0%E3%80%81%E4%BF%BA%E3%81%AF%E3%82%82%E3%81%97%E3%81%8B%E3%81%97%E3%81%9F%E3%82%89%E9%AD%94%E7%8E%8B%E3%82%82%E5%80%92%E3%81%9B%E3%82%8B%E3%81%8B%E3%82%82%E3%81%97%E3%82%8C%E3%81%AA%E3%81%84%E3%80%82",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 105081,
    slug: "joshikousei-no-mudazukai",
    startDate: "2019-07-05",
    titleJa: "女子高生の無駄づかい",
    titleZhHant: "女高中生的虛度日常",
    titleRomaji: "Joshikousei no Mudazukai",
    officialSiteUrl: "https://jyoshimuda.com/",
    animeThemesUrl: "https://animethemes.moe/anime/joshikousei_no_mudazukai",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/joshikousei_no_mudazukai?include=resources",
      language: "en"
    },
    broadcastTimeJst: "21:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "輪！Moon！dass！cry！",
        artistDisplayName: "田中望（CV：赤﨑千夏）、菊池茜（CV：戸松遥）、鷺宮しおり（CV：豊崎愛生）",
        releaseDate: "2019-07-24",
        credits: [
  {
    "name": "田中望（CV：赤﨑千夏）、菊池茜（CV：戸松遥）、鷺宮しおり（CV：豊崎愛生）",
    "role": "vocals"
  },
  {
    "name": "山崎真吾",
    "role": "lyrics"
  },
  {
    "name": "山崎真吾",
    "role": "composition"
  },
  {
    "name": "山崎真吾",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "joshikousei-no-mudazukai-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《女高中生的虛度日常》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://jyoshimuda.com/music.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/joshikousei_no_mudazukai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://jyoshimuda.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://ja.wikipedia.org/wiki/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%AE%E7%84%A1%E9%A7%84%E3%81%A5%E3%81%8B%E3%81%84",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "joshikousei-no-mudazukai-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://jyoshimuda.com/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "joshikousei-no-mudazukai-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://jyoshimuda.com/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "joshikousei-no-mudazukai-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%AE%E7%84%A1%E9%A7%84%E3%81%A5%E3%81%8B%E3%81%84"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "joshikousei-no-mudazukai-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%AE%E7%84%A1%E9%A7%84%E3%81%A5%E3%81%8B%E3%81%84"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://jyoshimuda.com/music.html"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "青春のリバーブ",
        artistDisplayName: "田中望（CV：赤﨑千夏）、菊池茜（CV：戸松遥）、鷺宮しおり（CV：豊崎愛生）",
        releaseDate: "2019-07-24",
        credits: [
  {
    "name": "田中望（CV：赤﨑千夏）、菊池茜（CV：戸松遥）、鷺宮しおり（CV：豊崎愛生）",
    "role": "vocals"
  },
  {
    "name": "Agasa.K",
    "role": "lyrics"
  },
  {
    "name": "Agasa.K",
    "role": "composition"
  },
  {
    "name": "Agasa.K",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "joshikousei-no-mudazukai-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《女高中生的虛度日常》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://jyoshimuda.com/music.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/joshikousei_no_mudazukai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://jyoshimuda.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://ja.wikipedia.org/wiki/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%AE%E7%84%A1%E9%A7%84%E3%81%A5%E3%81%8B%E3%81%84",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "joshikousei-no-mudazukai-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://jyoshimuda.com/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "joshikousei-no-mudazukai-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://jyoshimuda.com/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "joshikousei-no-mudazukai-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%AE%E7%84%A1%E9%A7%84%E3%81%A5%E3%81%8B%E3%81%84"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "joshikousei-no-mudazukai-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%AE%E7%84%A1%E9%A7%84%E3%81%A5%E3%81%8B%E3%81%84"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://jyoshimuda.com/music.html"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV版，完整30分鐘常規節目時段已有同版資料支持，非淨片長；本版兩首主題曲使用季度列為2019年夏。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://jyoshimuda.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/joshikousei_no_mudazukai?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/joshikousei_no_mudazukai",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「女子高生の無駄づかい」公式サイト：同版TV作品與播出資料（不以起點代替完整時段）",
    "url": "https://jyoshimuda.com/news.html?id=n012",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：同版日本TV播出與時段交叉資料（非淨長）",
    "url": "https://ja.wikipedia.org/wiki/%E5%A5%B3%E5%AD%90%E9%AB%98%E7%94%9F%E3%81%AE%E7%84%A1%E9%A7%84%E3%81%A5%E3%81%8B%E3%81%84",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 105333,
    slug: "dr-stone",
    startDate: "2019-07-05",
    titleJa: "Dr.STONE",
    titleZhHant: "Dr.STONE 新石紀",
    titleRomaji: "Dr. Stone",
    officialSiteUrl: "https://dr-stone.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/dr_stone",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/dr_stone?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Good Morning World!",
        artistDisplayName: "BURNOUT SYNDROMES",
"followUp": [],
"songId": "dr-stone-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《Dr.STONE 新石紀》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://dr-stone.jp/music/1st/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/dr_stone",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://dr-stone.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「Dr.STONE」公式サイト：原文歌曲與用途",
    "url": "https://dr-stone.jp/music/1st/1c-op/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "dr-stone-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/1c-op/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/1c-op/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "dr-stone-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "三原色",
        artistDisplayName: "PELICAN FANCLUB",
"followUp": [],
"songId": "dr-stone-op-2-song",
"seasonIds": [
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《Dr.STONE 新石紀》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://dr-stone.jp/music/1st/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/dr_stone",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://dr-stone.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「Dr.STONE」公式サイト：原文歌曲與用途",
    "url": "https://dr-stone.jp/music/1st/2c-op/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "dr-stone-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/2c-op/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/2c-op/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "dr-stone-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "LIFE",
        artistDisplayName: "Rude-α",
"followUp": [],
"songId": "dr-stone-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《Dr.STONE 新石紀》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://dr-stone.jp/music/1st/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/dr_stone",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://dr-stone.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「Dr.STONE」公式サイト：原文歌曲與用途",
    "url": "https://dr-stone.jp/music/1st/1c-ed/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "dr-stone-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/1c-ed/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/1c-ed/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "dr-stone-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "夢のような",
        artistDisplayName: "佐伯ユウスケ",
"followUp": [],
"songId": "dr-stone-ed-2-song",
"seasonIds": [
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《Dr.STONE 新石紀》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://dr-stone.jp/music/1st/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/dr_stone",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://dr-stone.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「Dr.STONE」公式サイト：原文歌曲與用途",
    "url": "https://dr-stone.jp/music/1st/2c-ed/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "dr-stone-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/2c-ed/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://dr-stone.jp/music/1st/2c-ed/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "dr-stone-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "dr-stone-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV第1期，TOKYO MX週五22:00–22:30為完整常規30分鐘節目時段，非淨片長；前、後半用曲分列於2019夏與秋，後期版本另計。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://dr-stone.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/dr_stone?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/dr_stone",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「Dr.STONE」公式サイト：同版TV作品與播出資料（不以起點代替完整時段）",
    "url": "https://dr-stone.jp/music/1st/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：同版日本TV播出與時段交叉資料（非淨長）",
    "url": "https://zh.wikipedia.org/wiki/Dr.STONE_%E6%96%B0%E7%9F%B3%E7%B4%80",
    "language": "multi",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：第1期原播話數與用曲範圍交叉資料",
    "url": "https://en.wikipedia.org/wiki/Dr._Stone_season_1",
    "language": "en",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 105310,
    slug: "enen-no-shouboutai",
    startDate: "2019-07-05",
    titleJa: "炎炎ノ消防隊",
    titleZhHant: "炎炎消防隊",
    titleRomaji: "Enen no Shouboutai",
    officialSiteUrl: "https://fireforce-anime.jp/season1/",
    animeThemesUrl: "https://animethemes.moe/anime/enen_no_shouboutai",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/enen_no_shouboutai?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:25",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "インフェルノ",
        artistDisplayName: "Mrs. GREEN APPLE",
        versionLabel: "第 1 季前半片頭曲",
"followUp": [],
"songId": "enen-no-shouboutai-ni-no-shou-ed-3-song",
"seasonIds": [
  "2019-summer",
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《炎炎消防隊》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://fireforce-anime.jp/season1/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/enen_no_shouboutai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://fireforce-anime.jp/season1/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-ni-no-shou-ed-3-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-ni-no-shou-ed-3-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "MAYDAY feat. Ryo from CRYSTAL LAKE",
        artistDisplayName: "coldrain",
        releaseDate: "2019-08-28",
        versionLabel: "第 1 季後半片頭曲",
"followUp": [],
"songId": "enen-no-shouboutai-op-2-song",
"seasonIds": [
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《炎炎消防隊》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://fireforce-anime.jp/season1/music/2nd.php",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/enen_no_shouboutai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://fireforce-anime.jp/season1/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "アニソンチャート：原文歌曲及用途",
    "url": "https://animemusicranking.com/ja/artist/88/",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/2nd.php"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/2nd.php"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://animemusicranking.com/ja/artist/88/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://animemusicranking.com/ja/artist/88/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "veil",
        artistDisplayName: "須田景凪",
        versionLabel: "第 1 季前半片尾曲",
"followUp": [],
"songId": "enen-no-shouboutai-ed-1-song",
"seasonIds": [
  "2019-summer",
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《炎炎消防隊》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://fireforce-anime.jp/season1/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/enen_no_shouboutai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://fireforce-anime.jp/season1/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "脳内",
        artistDisplayName: "Lenny code fiction",
        releaseDate: "2019-12-11",
        versionLabel: "第 1 季後半片尾曲",
"followUp": [],
"songId": "enen-no-shouboutai-ed-2-song",
"seasonIds": [
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《炎炎消防隊》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://fireforce-anime.jp/season1/music/2nd.php",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/enen_no_shouboutai",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://fireforce-anime.jp/season1/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/2nd.php"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://fireforce-anime.jp/season1/music/2nd.php"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "enen-no-shouboutai-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "enen-no-shouboutai-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_(%E5%8B%95%E7%95%AB)"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV第一期，7月5日週五深夜25:25（實曆7月6日01:25）起，至12月28日；01:25–01:55為30分節目槽，非淨長。2020年第二期另計，前後半歌曲按原話日期分季。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 108147,
    slug: "granbelm",
    startDate: "2019-07-05",
    titleJa: "グランベルム",
    titleZhHant: "滿月之戰",
    titleRomaji: "Granbelm",
    officialSiteUrl: "https://granbelm.com/",
    animeThemesUrl: "https://animethemes.moe/anime/granbelm",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/granbelm?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:55",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "月を追う真夜中",
        artistDisplayName: "藍井エイル",
        releaseDate: "2019-08-28",
"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "較晚日本播出時點的本曲用途季度仍待核對。",
    "checkedAt": "2026-10-31",
    "resumeWhen": "取得相應日本原播日期及該話用曲的直接證據後補齊季度。"
  }
],
"songId": "granbelm-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《滿月之戰》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://granbelm.com/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/granbelm",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://granbelm.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%99%E3%83%AB%E3%83%A0",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "granbelm-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://granbelm.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "granbelm-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://granbelm.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "granbelm-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%99%E3%83%AB%E3%83%A0"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "granbelm-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%99%E3%83%AB%E3%83%A0"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "願い",
        artistDisplayName: "Uru",
        releaseDate: "2019-09-11",
        credits: [
          {
            name: "Uru",
            role: "vocals"
          },
          {
            name: "Uru",
            role: "lyrics"
          },
          {
            name: "H.Aoba",
            role: "composition"
          },
          {
            name: "N.Sasaki",
            role: "composition"
          },
          {
            name: "佐々木望",
            role: "arrangement"
          }
        ],
"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "較晚日本播出時點的本曲用途季度仍待核對。",
    "checkedAt": "2026-10-31",
    "resumeWhen": "取得相應日本原播日期及該話用曲的直接證據後補齊季度。"
  }
],
"songId": "granbelm-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《滿月之戰》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://granbelm.com/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "《滿月之戰》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://uru-official.com/feature/negai",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/granbelm",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://granbelm.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%99%E3%83%AB%E3%83%A0",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "granbelm-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://granbelm.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "granbelm-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://granbelm.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "granbelm-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%99%E3%83%AB%E3%83%A0"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "granbelm-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%99%E3%83%AB%E3%83%A0"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV，7月5日週五深夜1:55（實曆7月6日01:55）起；01:55–02:25為30分節目槽，非淨長。地上波尾話9月27／28日、AT-X至10月1日，較晚站別尾話用曲季度仍待核。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 105932,
    slug: "araburu-kisetsu-no-otome-domo-yo",
    startDate: "2019-07-05",
    titleJa: "荒ぶる季節の乙女どもよ。",
    titleZhHant: "騷動時節的少女們。",
    titleRomaji: "Araburu Kisetsu no Otome-domo yo.",
    officialSiteUrl: "https://www.sonymusic.co.jp/artist/asakuramomo/info/506107",
    animeThemesUrl: "https://animethemes.moe/anime/araburu_kisetsu_no_otome_domo_yo",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/araburu_kisetsu_no_otome_domo_yo?include=resources",
      language: "en"
    },
    broadcastTimeJst: "26:25",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "乙女どもよ。",
        artistDisplayName: "CHiCO with HoneyWorks",
        releaseDate: "2019-08-07",
"followUp": [],
"songId": "araburu-kisetsu-no-otome-domo-yo-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《騷動時節的少女們。》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://honeyworks.jp/release/cwhw11th/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/araburu_kisetsu_no_otome_domo_yo",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://www.sonymusic.co.jp/artist/asakuramomo/info/506107",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "アニしま：原文歌曲及用途",
    "url": "https://anime-song-info.com/201907-summer-anime-araoto-op-ed-song/",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://honeyworks.jp/release/cwhw11th/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://honeyworks.jp/release/cwhw11th/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/201907-summer-anime-araoto-op-ed-song/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/201907-summer-anime-araoto-op-ed-song/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ユメシンデレラ",
        artistDisplayName: "麻倉もも",
        releaseDate: "2019-09-04",
        credits: [
  {
    "name": "麻倉もも",
    "role": "vocals"
  },
  {
    "name": "HoneyWorks",
    "role": "lyrics"
  },
  {
    "name": "HoneyWorks",
    "role": "composition"
  },
  {
    "name": "HoneyWorks",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "araburu-kisetsu-no-otome-domo-yo-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《騷動時節的少女們。》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://www.sonymusic.co.jp/artist/asakuramomo/info/509173",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/araburu_kisetsu_no_otome_domo_yo",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://www.sonymusic.co.jp/artist/asakuramomo/info/506107",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "アニしま：原文歌曲及用途",
    "url": "https://anime-song-info.com/201907-summer-anime-araoto-op-ed-song/",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.sonymusic.co.jp/artist/asakuramomo/info/509173"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.sonymusic.co.jp/artist/asakuramomo/info/509173"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/201907-summer-anime-araoto-op-ed-song/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "araburu-kisetsu-no-otome-domo-yo-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime-song-info.com/201907-summer-anime-araoto-op-ed-song/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://www.sonymusic.co.jp/artist/asakuramomo/info/509173"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本動畫TV，7月5日週五26:25（實曆7月6日02:25）起至9月；26:25–26:55為30分節目槽，非淨長。2020海外配信及實寫版另計。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 106918,
    slug: "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note",
    startDate: "2019-07-06",
    titleJa: "ロード・エルメロイⅡ世の事件簿 -魔眼蒐集列車 Grace note-",
    titleZhHant: "艾梅洛閣下 II 世事件簿 -魔眼蒐集列車 Grace note-",
    titleRomaji: "Lord El-Melloi II Sei no Jikenbo: Rail Zeppelin Grace Note",
    officialSiteUrl: "https://anime.elmelloi.com/",
    animeThemesUrl: "https://animethemes.moe/anime/lord_el_melloi_ii_sei_no_jikenbo_rail_zeppelin_grace_note",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/lord_el_melloi_ii_sei_no_jikenbo_rail_zeppelin_grace_note?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "starting the case: Rail Zeppelin",
        artistDisplayName: "梶浦由記",
        releaseDate: "2019-09-04",
        versionLabel: "純音樂片頭曲",
        credits: [
  {
    "name": "梶浦由記",
    "role": "composition"
  },
  {
    "name": "梶浦由記",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《艾梅洛閣下 II 世事件簿 -魔眼蒐集列車 Grace note-》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://anime.elmelloi.com/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/lord_el_melloi_ii_sei_no_jikenbo_rail_zeppelin_grace_note",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://anime.elmelloi.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E8%89%BE%E6%A2%85%E6%B4%9B%E9%96%A3%E4%B8%8BII%E4%B8%96%E4%BA%8B%E4%BB%B6%E7%B0%BF",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime.elmelloi.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime.elmelloi.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%89%BE%E6%A2%85%E6%B4%9B%E9%96%A3%E4%B8%8BII%E4%B8%96%E4%BA%8B%E4%BB%B6%E7%B0%BF"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%89%BE%E6%A2%85%E6%B4%9B%E9%96%A3%E4%B8%8BII%E4%B8%96%E4%BA%8B%E4%BB%B6%E7%B0%BF"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://anime.elmelloi.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "雲雀",
        artistDisplayName: "ASCA",
        credits: [
  {
    "name": "ASCA",
    "role": "vocals"
  },
  {
    "name": "梶浦由記",
    "role": "lyrics"
  },
  {
    "name": "梶浦由記",
    "role": "composition"
  },
  {
    "name": "梶浦由記",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《艾梅洛閣下 II 世事件簿 -魔眼蒐集列車 Grace note-》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://anime.elmelloi.com/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/lord_el_melloi_ii_sei_no_jikenbo_rail_zeppelin_grace_note",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://anime.elmelloi.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E8%89%BE%E6%A2%85%E6%B4%9B%E9%96%A3%E4%B8%8BII%E4%B8%96%E4%BA%8B%E4%BB%B6%E7%B0%BF",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://anime.elmelloi.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://anime.elmelloi.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%89%BE%E6%A2%85%E6%B4%9B%E9%96%A3%E4%B8%8BII%E4%B8%96%E4%BA%8B%E4%BB%B6%E7%B0%BF"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "lord-el-melloi-ii-sei-no-jikenbo-rail-zeppelin-grace-note-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%89%BE%E6%A2%85%E6%B4%9B%E9%96%A3%E4%B8%8BII%E4%B8%96%E4%BA%8B%E4%BB%B6%E7%B0%BF"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://anime.elmelloi.com/music/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本原TV，7月6日週六24:00（實曆7月7日00:00）起至9月；24:00–24:30為30分節目槽，非淨長。第0話與後來特別篇另計，OP為純音樂。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 21673,
    slug: "senki-zesshou-symphogear-xv",
    startDate: "2019-07-06",
    titleJa: "戦姫絶唱シンフォギアXV",
    titleZhHant: "戰姬絕唱SYMPHOGEAR XV",
    titleRomaji: "Senki Zesshou Symphogear XV",
    officialSiteUrl: "https://www.symphogear-xv.com/",
    animeThemesUrl: "https://animethemes.moe/anime/senki_zesshou_symphogear_xv",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/senki_zesshou_symphogear_xv?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "METANOIA",
        artistDisplayName: "水樹奈々",
        releaseDate: "2019-07-17",
"followUp": [],
"songId": "senki-zesshou-symphogear-xv-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《戰姬絕唱SYMPHOGEAR XV》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://www.symphogear-xv.com/products/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/senki_zesshou_symphogear_xv",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://www.symphogear-xv.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "歌ネット：原文歌曲及用途",
    "url": "https://www.uta-net.com/user/search/anime_list_2.html?tno=14092",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "senki-zesshou-symphogear-xv-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.symphogear-xv.com/products/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "senki-zesshou-symphogear-xv-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.symphogear-xv.com/products/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "senki-zesshou-symphogear-xv-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.uta-net.com/user/search/anime_list_2.html?tno=14092"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "senki-zesshou-symphogear-xv-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.uta-net.com/user/search/anime_list_2.html?tno=14092"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Lasting Song",
        artistDisplayName: "高垣彩陽",
        releaseDate: "2019-08-21",
"followUp": [],
"songId": "senki-zesshou-symphogear-xv-ed-2-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《戰姬絕唱SYMPHOGEAR XV》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://www.symphogear-xv.com/products/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/senki_zesshou_symphogear_xv",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://www.symphogear-xv.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "歌ネット：原文歌曲及用途",
    "url": "https://www.uta-net.com/user/search/anime_list_2.html?tno=14092",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "senki-zesshou-symphogear-xv-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.symphogear-xv.com/products/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "senki-zesshou-symphogear-xv-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.symphogear-xv.com/products/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "senki-zesshou-symphogear-xv-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.uta-net.com/user/search/anime_list_2.html?tno=14092"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "senki-zesshou-symphogear-xv-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.uta-net.com/user/search/anime_list_2.html?tno=14092"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV第5期XV，7月6日週六25:00（實曆7月7日01:00）起；25:00–25:30為30分節目槽，非淨長。遊戲、其他期及角色音樂另計。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 102926,
    slug: "nakanohito-genome-jikkyouchuu",
    startDate: "2019-07-07",
    titleJa: "ナカノヒトゲノム【実況中】",
    titleZhHant: "實況主的逃脫遊戲 直播中",
    titleRomaji: "Nakanohito Genome [Jikkyouchuu]",
    officialSiteUrl: "https://www.nhg-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/nakanohito_genome_jikkyouchuu",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/nakanohito_genome_jikkyouchuu?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "not GAME",
        artistDisplayName: "畠中祐",
        releaseDate: "2019-07-24",
"followUp": [],
"songId": "nakanohito-genome-jikkyouchuu-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《實況主的逃脫遊戲 直播中》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://www.nhg-anime.com/product/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/nakanohito_genome_jikkyouchuu",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://www.nhg-anime.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E5%AF%A6%E6%B3%81%E4%B8%BB%E7%9A%84%E9%80%83%E8%84%AB%E9%81%8A%E6%88%B2%E3%80%90%E7%9B%B4%E6%92%AD%E4%B8%AD%E3%80%91",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "nakanohito-genome-jikkyouchuu-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.nhg-anime.com/product/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "nakanohito-genome-jikkyouchuu-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.nhg-anime.com/product/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "nakanohito-genome-jikkyouchuu-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%AF%A6%E6%B3%81%E4%B8%BB%E7%9A%84%E9%80%83%E8%84%AB%E9%81%8A%E6%88%B2%E3%80%90%E7%9B%B4%E6%92%AD%E4%B8%AD%E3%80%91"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "nakanohito-genome-jikkyouchuu-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%AF%A6%E6%B3%81%E4%B8%BB%E7%9A%84%E9%80%83%E8%84%AB%E9%81%8A%E6%88%B2%E3%80%90%E7%9B%B4%E6%92%AD%E4%B8%AD%E3%80%91"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "僕を見つけて",
        artistDisplayName: "fhána",
        releaseDate: "2019-08-07",
        credits: [
  {
    "name": "fhána",
    "role": "vocals"
  },
  {
    "name": "林英樹",
    "role": "lyrics"
  },
  {
    "name": "佐藤純一",
    "role": "composition"
  },
  {
    "name": "佐藤純一",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "nakanohito-genome-jikkyouchuu-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《實況主的逃脫遊戲 直播中》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://www.nhg-anime.com/product/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/nakanohito_genome_jikkyouchuu",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://www.nhg-anime.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E5%AF%A6%E6%B3%81%E4%B8%BB%E7%9A%84%E9%80%83%E8%84%AB%E9%81%8A%E6%88%B2%E3%80%90%E7%9B%B4%E6%92%AD%E4%B8%AD%E3%80%91",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "nakanohito-genome-jikkyouchuu-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.nhg-anime.com/product/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "nakanohito-genome-jikkyouchuu-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.nhg-anime.com/product/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "nakanohito-genome-jikkyouchuu-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%AF%A6%E6%B3%81%E4%B8%BB%E7%9A%84%E9%80%83%E8%84%AB%E9%81%8A%E6%88%B2%E3%80%90%E7%9B%B4%E6%92%AD%E4%B8%AD%E3%80%91"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "nakanohito-genome-jikkyouchuu-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E5%AF%A6%E6%B3%81%E4%B8%BB%E7%9A%84%E9%80%83%E8%84%AB%E9%81%8A%E6%88%B2%E3%80%90%E7%9B%B4%E6%92%AD%E4%B8%AD%E3%80%91"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://www.nhg-anime.com/product/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV原作，AT-X週日22:00–22:30為完整常規30分鐘節目時段，非淨片長；原播7月至9月，OVA另計。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 103048,
    slug: "restage-dream-days",
    startDate: "2019-07-07",
    titleJa: "Re:ステージ! ドリームデイズ♪",
    titleZhHant: "Re:Stage！Dream Days♪",
    titleRomaji: "Re:Stage! Dream Days♪",
    officialSiteUrl: "https://rst-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/restage_dream_days",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/restage_dream_days?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:00",
    themes: [
      {
        type: "OP",
        sequence: 2,
        titleJa: "Don’t think,スマイル!!",
        artistDisplayName: "KiRaRe",
        releaseDate: "2019-07-24",
        credits: [
  {
    "name": "KiRaRe",
    "role": "vocals"
  },
  {
    "name": "高瀬愛虹",
    "role": "lyrics"
  },
  {
    "name": "伊藤翼",
    "role": "composition"
  },
  {
    "name": "伊藤翼",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "restage-dream-days-op-2-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《Re:Stage！Dream Days♪》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://rst-anime.com/product/cd/theme/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/restage_dream_days",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://rst-anime.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/Re:Stage!",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "restage-dream-days-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://rst-anime.com/product/cd/theme/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "restage-dream-days-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://rst-anime.com/product/cd/theme/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "restage-dream-days-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Re:Stage!"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "restage-dream-days-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Re:Stage!"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://rst-anime.com/product/cd/theme/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "憧れFuture Sign",
        artistDisplayName: "KiRaRe",
        releaseDate: "2019-07-24",
        versionLabel: "Piano Strings Arrange",
        credits: [
          {
            name: "KiRaRe",
            role: "vocals"
          },
          {
            name: "やしきん",
            role: "lyrics"
          },
          {
            name: "伊藤翼",
            role: "composition"
          },
          {
            name: "伊藤翼",
            role: "arrangement"
          }
        ],
"followUp": [],
"songId": "restage-dream-days-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《Re:Stage！Dream Days♪》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://rst-anime.com/product/cd/theme/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/restage_dream_days",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://rst-anime.com/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ「Re:ステージ! ドリームデイズ♪」公式サイト：原文歌曲及用途",
    "url": "https://rst-anime.com/news/archives/172",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/Re:Stage!",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "restage-dream-days-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://rst-anime.com/news/archives/172"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "restage-dream-days-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://rst-anime.com/news/archives/172"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "restage-dream-days-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Re:Stage!"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "restage-dream-days-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/Re:Stage!"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV原作，TOKYO MX週日22:00–22:30為完整常規30分鐘時段，非淨片長；原播與2020年重播、網絡配信分開。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 21512,
    slug: "ensemble-stars",
    startDate: "2019-07-07",
    titleJa: "あんさんぶるスターズ！",
    titleZhHant: "偶像夢幻祭",
    titleRomaji: "Ensemble Stars!",
    officialSiteUrl: "https://ensemblestars-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/ensemble_stars",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/ensemble_stars?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Stars’ Ensemble!",
        artistDisplayName: "夢ノ咲ドリームスターズ",
        releaseDate: "2019-08-14",
        credits: [
          {
            name: "夢ノ咲ドリームスターズ",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "中土智博",
            role: "composition"
          },
          {
            name: "中土智博",
            role: "arrangement"
          }
        ]
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "キセキ",
        artistDisplayName: "Trickstar",
        releaseDate: "2019-12-11",
        versionLabel: "Trickstar Ver.／後半片頭曲",
        credits: [
          {
            name: "Trickstar",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "桑原聖（ArteRefact）",
            role: "composition"
          },
          {
            name: "酒井拓也（ArteRefact）",
            role: "arrangement"
          },
          {
            name: "山本恭平（ArteRefact）",
            role: "arrangement"
          }
        ]
      },
      {
        type: "OP",
        sequence: 3,
        titleJa: "キセキ",
        artistDisplayName: "Eden",
        releaseDate: "2019-12-11",
        versionLabel: "Eden Ver.／後半片頭曲",
        credits: [
          {
            name: "Eden",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "桑原聖（ArteRefact）",
            role: "composition"
          },
          {
            name: "酒井拓也（ArteRefact）",
            role: "arrangement"
          },
          {
            name: "山本恭平（ArteRefact）",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "1st SING-ALONG☆",
        artistDisplayName: "Trickstar",
        releaseDate: "2019-08-28",
        credits: [
          {
            name: "Trickstar",
            role: "vocals"
          },
          {
            name: "こだまさおり",
            role: "lyrics"
          },
          {
            name: "山口朗彦",
            role: "composition"
          },
          {
            name: "山口朗彦",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "IMMORAL WORLD",
        artistDisplayName: "UNDEAD",
        releaseDate: "2019-08-28",
        credits: [
          {
            name: "UNDEAD",
            role: "vocals"
          },
          {
            name: "こだまさおり",
            role: "lyrics"
          },
          {
            name: "矢鴇つかさ（ArteRefact）",
            role: "composition"
          },
          {
            name: "矢鴇つかさ（ArteRefact）",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "メイド・イン・トキメキ♪",
        artistDisplayName: "Ra*bits",
        releaseDate: "2019-09-25",
        credits: [
          {
            name: "Ra*bits",
            role: "vocals"
          },
          {
            name: "こだまさおり",
            role: "lyrics"
          },
          {
            name: "大隅知宇",
            role: "composition"
          },
          {
            name: "大隅知宇",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "月下無双、紅の舞",
        artistDisplayName: "紅月",
        releaseDate: "2019-09-25",
        credits: [
          {
            name: "紅月",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "本多友紀（ArteRefact）",
            role: "composition"
          },
          {
            name: "酒井拓也（ArteRefact）",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "Mischievous Party Time!!",
        artistDisplayName: "2wink",
        releaseDate: "2019-10-23",
        credits: [
          {
            name: "2wink",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "福田陽司",
            role: "composition"
          },
          {
            name: "鈴木一史",
            role: "composition"
          },
          {
            name: "鈴木一史",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "始まりのファンタジア",
        artistDisplayName: "fine",
        releaseDate: "2019-10-23",
        credits: [
          {
            name: "fine",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "Rasmus Faber",
            role: "composition"
          },
          {
            name: "Rasmus Faber",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "メテオ・スクランブル☆流星隊!",
        artistDisplayName: "流星隊",
        releaseDate: "2019-11-27",
        credits: [
          {
            name: "流星隊",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "岩崎貴文",
            role: "composition"
          },
          {
            name: "岩崎貴文",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "Magic for your “Switch”",
        artistDisplayName: "Switch",
        releaseDate: "2019-11-27",
        credits: [
          {
            name: "Switch",
            role: "vocals"
          },
          {
            name: "こだまさおり",
            role: "lyrics"
          },
          {
            name: "中土智博（APDREAM）",
            role: "composition"
          },
          {
            name: "中土智博（APDREAM）",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 9,
        titleJa: "愉快痛快 That’s alright!",
        artistDisplayName: "MaM",
        releaseDate: "2019-12-25",
        credits: [
          {
            name: "MaM",
            role: "vocals"
          },
          {
            name: "ナオト・インティライミ",
            role: "lyrics"
          },
          {
            name: "佐伯youthK",
            role: "lyrics"
          },
          {
            name: "ナオト・インティライミ",
            role: "composition"
          },
          {
            name: "大久保薫",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 10,
        titleJa: "凱旋歌",
        artistDisplayName: "Valkyrie",
        releaseDate: "2019-12-25",
        credits: [
          {
            name: "Valkyrie",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "Kon-K",
            role: "composition"
          },
          {
            name: "Kon-K",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 11,
        titleJa: "Promise Swords",
        artistDisplayName: "Knights",
        releaseDate: "2020-02-26",
        credits: [
          {
            name: "Knights",
            role: "vocals"
          },
          {
            name: "こだまさおり",
            role: "lyrics"
          },
          {
            name: "桑原聖（Arte Refact）",
            role: "composition"
          },
          {
            name: "酒井拓也（Arte Refact）",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 12,
        titleJa: "Awakening Myth",
        artistDisplayName: "Eden",
        releaseDate: "2020-02-26",
        credits: [
          {
            name: "Eden",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "TAKAROT",
            role: "composition"
          },
          {
            name: "Funk Uchino",
            role: "composition"
          },
          {
            name: "TAKAROT",
            role: "arrangement"
          }
        ]
      }
    ]
  },
  {
    anilistId: 107068,
    slug: "karakai-jouzu-no-takagi-san-2",
    startDate: "2019-07-07",
    titleJa: "からかい上手の高木さん②",
    titleZhHant: "擅長捉弄人的高木同學 第二季",
    titleRomaji: "Karakai Jouzu no Takagi-san 2",
    officialSiteUrl: "https://takagi3.me/2nd/",
    animeThemesUrl: "https://animethemes.moe/anime/karakai_jouzu_no_takagi_san_2",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/karakai_jouzu_no_takagi_san_2?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ゼロセンチメートル",
        artistDisplayName: "大原ゆい子",
        releaseDate: "2019-07-17",
        credits: [
          {
            name: "大原ゆい子",
            role: "vocals"
          },
          {
            name: "大原ゆい子",
            role: "lyrics"
          },
          {
            name: "大原ゆい子",
            role: "composition"
          },
          {
            name: "吉田穣",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "奏（かなで）",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "粉雪",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "キセキ",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "ありがとう",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "STARS",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "あなたに",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "言わないけどね。",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "やさしい気持ち",
        artistDisplayName: "高木さん（CV：高橋李依）",
        releaseDate: "2019-09-25",
        versionLabel: "高木さん（CV：高橋李依）翻唱版"
      }
    ]
  },
  {
    anilistId: 101348,
    slug: "vinland-saga",
    startDate: "2019-07-07",
    titleJa: "ヴィンランド・サガ",
    titleZhHant: "海盜戰記",
    titleRomaji: "Vinland Saga",
    officialSiteUrl: "https://vinlandsaga.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/vinland_saga",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/vinland_saga?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:10",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "MUKANJYO",
        artistDisplayName: "Survive Said The Prophet",
        releaseDate: "2019-08-21",
        versionLabel: "2019 年動畫前半",
"followUp": [],
"songId": "vinland-saga-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《海盜戰記》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://vinlandsaga.jp/music/",
    "language": "multi",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/vinland_saga",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://vinlandsaga.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "vinland-saga-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "vinland-saga-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "Dark Crow",
        artistDisplayName: "MAN WITH A MISSION",
        releaseDate: "2019-10-23",
        versionLabel: "2019 年動畫後半",
"followUp": [],
"songId": "vinland-saga-op-2-song",
"seasonIds": [
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《海盜戰記》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://vinlandsaga.jp/music/",
    "language": "multi",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/vinland_saga",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://vinlandsaga.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "vinland-saga-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "vinland-saga-op-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-op-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Torches",
        artistDisplayName: "Aimer",
        releaseDate: "2019-08-14",
        versionLabel: "2019 年動畫前半",
"followUp": [],
"songId": "vinland-saga-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《海盜戰記》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://vinlandsaga.jp/music/",
    "language": "multi",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/vinland_saga",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://vinlandsaga.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "vinland-saga-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "vinland-saga-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Drown",
        artistDisplayName: "milet",
        releaseDate: "2019-11-06",
        versionLabel: "2019 年動畫後半",
"followUp": [],
"songId": "vinland-saga-ed-2-song",
"seasonIds": [
  "2019-fall"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《海盜戰記》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://vinlandsaga.jp/music/",
    "language": "multi",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/vinland_saga",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://vinlandsaga.jp/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "vinland-saga-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://vinlandsaga.jp/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "vinland-saga-ed-2-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "vinland-saga-ed-2",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E6%B5%B7%E7%9B%9C%E6%88%B0%E8%A8%98"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV第1期，NHK總合週一00:10–00:35（日深夜）為完整常規25分鐘時段，非淨片長；原播跨夏秋，初回三話連播與Prime特別先行版另計。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 107961,
    slug: "kawaikereba-hentai-demo-suki-ni-natte-kuremasu-ka",
    startDate: "2019-07-08",
    titleJa: "可愛ければ変態でも好きになってくれますか？",
    titleZhHant: "只要長得可愛，即使是變態你也喜歡嗎？",
    titleRomaji: "Kawaikereba Hentai demo Suki ni Natte Kuremasu ka?",
    officialSiteUrl: "https://hensuki.com/",
    animeThemesUrl: "https://animethemes.moe/anime/kawaikereba_hentai_demo_suki_ni_natte_kuremasu_ka",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/kawaikereba_hentai_demo_suki_ni_natte_kuremasu_ka?include=resources",
      language: "en"
    },
    broadcastTimeJst: "20:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ダイスキ。",
        artistDisplayName: "大橋彩香",
        releaseDate: "2019-08-06",
        credits: [
          {
            name: "大橋彩香",
            role: "vocals"
          },
          {
            name: "Kanata Okajima",
            role: "lyrics"
          },
          {
            name: "Kanata Okajima",
            role: "composition"
          },
          {
            name: "pw.a",
            role: "composition"
          },
          {
            name: "pw.a",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "無謬の花",
        artistDisplayName: "Mia REGINA",
        releaseDate: "2019-08-21",
        credits: [
          {
            name: "Mia REGINA",
            role: "vocals"
          },
          {
            name: "松井洋平",
            role: "lyrics"
          },
          {
            name: "太田貴之",
            role: "composition"
          },
          {
            name: "halu-note",
            role: "composition"
          },
          {
            name: "太田貴之",
            role: "arrangement"
          },
          {
            name: "halu-note",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ステラ",
        artistDisplayName: "TRUE",
        releaseDate: "2019-09-11",
        versionLabel: "第 7 話特殊片尾曲",
        credits: [
          {
            name: "TRUE",
            role: "vocals"
          },
          {
            name: "唐沢美帆",
            role: "lyrics"
          },
          {
            name: "h-wonder",
            role: "composition"
          },
          {
            name: "h-wonder",
            role: "arrangement"
          }
        ]
      }
    ]
  },
  {
    anilistId: 106894,
    slug: "kochouki-wakaki-nobunaga",
    startDate: "2019-07-08",
    titleJa: "胡蝶綺 ～若き信長～",
    titleZhHant: "胡蝶綺 ～少年信長～",
    titleRomaji: "Kochouki: Wakaki Nobunaga",
    officialSiteUrl: "https://happinet-phantom.com/wakanobu/",
    animeThemesUrl: "https://animethemes.moe/anime/kochouki_wakaki_nobunaga",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/kochouki_wakaki_nobunaga?include=resources",
      language: "en"
    },
    broadcastTimeJst: "21:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "疾走",
        artistDisplayName: "りぶ",
        releaseDate: "2019-09-18",
"followUp": [],
"songId": "kochouki-wakaki-nobunaga-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《胡蝶綺 ～少年信長～》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://happinet-phantom.com/wakanobu/music.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/kochouki_wakaki_nobunaga",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://happinet-phantom.com/wakanobu/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://zh.wikipedia.org/wiki/%E8%83%A1%E8%9D%B6%E7%B6%BA_%EF%BD%9E%E5%B0%91%E5%B9%B4%E4%BF%A1%E9%95%B7%EF%BD%9E",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "kochouki-wakaki-nobunaga-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://happinet-phantom.com/wakanobu/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "kochouki-wakaki-nobunaga-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://happinet-phantom.com/wakanobu/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "kochouki-wakaki-nobunaga-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%83%A1%E8%9D%B6%E7%B6%BA_%EF%BD%9E%E5%B0%91%E5%B9%B4%E4%BF%A1%E9%95%B7%EF%BD%9E"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "kochouki-wakaki-nobunaga-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%83%A1%E8%9D%B6%E7%B6%BA_%EF%BD%9E%E5%B0%91%E5%B9%B4%E4%BF%A1%E9%95%B7%EF%BD%9E"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "牙と翼",
        artistDisplayName: "May'n",
        releaseDate: "2019-07-31",
        credits: [
  {
    "name": "May'n",
    "role": "vocals"
  },
  {
    "name": "宮川弾",
    "role": "lyrics"
  },
  {
    "name": "川崎智哉",
    "role": "composition"
  },
  {
    "name": "佐藤純一",
    "role": "arrangement"
  }
],
"followUp": [],
"songId": "kochouki-wakaki-nobunaga-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《胡蝶綺 ～少年信長～》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://happinet-phantom.com/wakanobu/music.html",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/kochouki_wakaki_nobunaga",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://happinet-phantom.com/wakanobu/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "Wikipedia：原文歌曲與用途",
    "url": "https://zh.wikipedia.org/wiki/%E8%83%A1%E8%9D%B6%E7%B6%BA_%EF%BD%9E%E5%B0%91%E5%B9%B4%E4%BF%A1%E9%95%B7%EF%BD%9E",
    "language": "multi",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "kochouki-wakaki-nobunaga-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://happinet-phantom.com/wakanobu/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "kochouki-wakaki-nobunaga-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://happinet-phantom.com/wakanobu/music.html"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "kochouki-wakaki-nobunaga-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%83%A1%E8%9D%B6%E7%B6%BA_%EF%BD%9E%E5%B0%91%E5%B9%B4%E4%BF%A1%E9%95%B7%EF%BD%9E"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "kochouki-wakaki-nobunaga-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://zh.wikipedia.org/wiki/%E8%83%A1%E8%9D%B6%E7%B6%BA_%EF%BD%9E%E5%B0%91%E5%B9%B4%E4%BF%A1%E9%95%B7%EF%BD%9E"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://happinet-phantom.com/wakanobu/music.html"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      }
    ],
"broadcastLabel": "2019年7至9月日本原TV；AT-X週一21:30–22:00為30分節目槽，非淨長。2020名單後播不當原用曲啟用；製作頁年份文字矛盾另待核。",
"metadataSources": [
  {
    "label": "動畫官方網站：作品與播出資料",
    "url": "https://happinet-phantom.com/wakanobu/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/kochouki_wakaki_nobunaga?include=resources",
    "language": "en",
    "role": "identifier",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "繁體中文季度列表交叉對照",
    "url": "https://youranimes.tw/bangumi/201907",
    "language": "zh-Hant",
    "role": "localized_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes：OP／ED 曲目交叉核對",
    "url": "https://animethemes.moe/anime/kochouki_wakaki_nobunaga",
    "language": "en",
    "role": "theme_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://acgsecrets.hk/bangumi/201907/",
    "language": "zh-Hant",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "季度首播公開來源",
    "url": "https://www.kansou.me/archive/2019_summer.html",
    "language": "ja",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "株式会社スタジオディーン：同版TV作品識別（年份記載差異另核）",
    "url": "https://www.deen.co.jp/works-archives/kochoki",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：同版日本TV播出與時段交叉資料（非淨長）",
    "url": "https://zh.wikipedia.org/wiki/%E8%83%A1%E8%9D%B6%E7%B6%BA_%EF%BD%9E%E5%B0%91%E5%B9%B4%E4%BF%A1%E9%95%B7%EF%BD%9E",
    "language": "multi",
    "role": "broadcast_cross_check",
    "verifiedAt": "2026-10-31"
  }
],
  },
  {
    anilistId: 100668,
    slug: "arifureta-shokugyou-de-sekai-saikyou",
    startDate: "2019-07-08",
    titleJa: "ありふれた職業で世界最強",
    titleZhHant: "平凡職業造就世界最強",
    titleRomaji: "Arifureta Shokugyou de Sekai Saikyou",
    officialSiteUrl: "https://arifureta.com/",
    animeThemesUrl: "https://animethemes.moe/anime/arifureta_shokugyou_de_sekai_saikyou",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/arifureta_shokugyou_de_sekai_saikyou?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "FLARE",
        artistDisplayName: "Void_Chords feat. LIO",
        releaseDate: "2019-07-24",
"followUp": [
  {
    "fields": [
      "basic_evidence",
      "use_quarters"
    ],
    "note": "本版日本TV形式與完整常規時段的證據仍待補齊；歌曲及季度用途尚未核對。",
    "checkedAt": "2026-10-31",
    "resumeWhen": "取得同版第一方TV身分及完整常規時段或正版單話片長證據後，再核對歌曲與原播用途。"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ハジメノウタ",
        artistDisplayName: "DracoVirgo",
        releaseDate: "2019-09-04",
"followUp": [
  {
    "fields": [
      "basic_evidence",
      "use_quarters"
    ],
    "note": "本版日本TV形式與完整常規時段的證據仍待補齊；歌曲及季度用途尚未核對。",
    "checkedAt": "2026-10-31",
    "resumeWhen": "取得同版第一方TV身分及完整常規時段或正版單話片長證據後，再核對歌曲與原播用途。"
  }
],
      }
    ]
  },
  {
    anilistId: 106893,
    slug: "cop-craft",
    startDate: "2019-07-08",
    titleJa: "コップクラフト",
    titleZhHant: "COP CRAFT",
    titleRomaji: "Cop Craft",
    officialSiteUrl: "https://news.ponycanyon.co.jp/2019/07/33194",
    animeThemesUrl: "https://animethemes.moe/anime/cop_craft",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/cop_craft?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "楽園都市",
        artistDisplayName: "オーイシマサヨシ",
        releaseDate: "2019-08-21",
"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "較晚日本播出時點的本曲用途季度仍待核對。",
    "checkedAt": "2026-10-31",
    "resumeWhen": "取得相應日本原播日期及該話用曲的直接證據後補齊季度。"
  }
],
"songId": "cop-craft-op-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "《COP CRAFT》第一方音樂資料：曲目、用途與演唱版本",
    "url": "https://news.ponycanyon.co.jp/2019/06/32796",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/cop_craft",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "動畫官方網站",
    "url": "https://news.ponycanyon.co.jp/2019/07/33194",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ『コップクラフト』公式サイト：原文歌曲及用途",
    "url": "https://copcraft.tv/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "Wikipedia：原文歌曲及用途",
    "url": "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%83%E3%83%97%E3%82%AF%E3%83%A9%E3%83%95%E3%83%88",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "cop-craft-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://copcraft.tv/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "cop-craft-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://copcraft.tv/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "cop-craft-op-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%83%E3%83%97%E3%82%AF%E3%83%A9%E3%83%95%E3%83%88"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "cop-craft-op-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%83%E3%83%97%E3%82%AF%E3%83%A9%E3%83%95%E3%83%88"
    ],
    "verifiedAt": "2026-10-31"
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Connected",
        artistDisplayName: "ティラナ・エクセディリカ（CV：吉岡茉祐）",
        releaseDate: "2019-08-07",
"followUp": [
  {
    "fields": [
      "use_quarters"
    ],
    "note": "較晚日本播出時點的本曲用途季度仍待核對。",
    "checkedAt": "2026-10-31",
    "resumeWhen": "取得相應日本原播日期及該話用曲的直接證據後補齊季度。"
  }
],
"songId": "cop-craft-ed-1-song",
"seasonIds": [
  "2019-summer"
],
"sourceMode": "explicit",
"sources": [
  {
    "label": "動畫官方網站",
    "url": "https://news.ponycanyon.co.jp/2019/07/33194",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/cop_craft",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "TVアニメ『コップクラフト』公式サイト：原文歌曲及用途",
    "url": "https://copcraft.tv/music/",
    "language": "ja",
    "role": "first_party",
    "verifiedAt": "2026-10-31"
  },
  {
    "label": "エキサイトニュース：原文歌曲及用途",
    "url": "https://www.excite.co.jp/news/article/Lisani_0000212887/",
    "language": "ja",
    "role": "cross_check",
    "verifiedAt": "2026-10-31"
  }
],
"lastVerifiedAt": "2026-10-31",
"evidence": [
  {
    "target": "song",
    "targetId": "cop-craft-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://copcraft.tv/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "cop-craft-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://copcraft.tv/music/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "song",
    "targetId": "cop-craft-ed-1-song",
    "fields": [
      "title",
      "artist"
    ],
    "sourceUrls": [
      "https://www.excite.co.jp/news/article/Lisani_0000212887/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "anime_use",
    "targetId": "cop-craft-ed-1",
    "fields": [
      "usage"
    ],
    "sourceUrls": [
      "https://www.excite.co.jp/news/article/Lisani_0000212887/"
    ],
    "verifiedAt": "2026-10-31"
  },
  {
    "target": "credits",
    "fields": [
      "credits"
    ],
    "sourceUrls": [
      "https://copcraft.tv/music/"
    ],
    "verifiedAt": "2026-10-31"
  }
],
"credits": [
  {
    "name": "ティラナ・エクセディリカ（CV：吉岡茉祐）",
    "role": "vocals"
  },
  {
    "name": "安野勇太",
    "role": "lyrics"
  },
  {
    "name": "安野勇太",
    "role": "composition"
  },
  {
    "name": "安野勇太",
    "role": "arrangement"
  }
],
      }
    ],
"broadcastLabel": "2019年日本TV原作，TOKYO MX週二00:00–00:30（月深夜）為完整常規30分鐘時段，非淨片長；原播至10月1日，特殊篇及其他平台日期另計。",
metadataVerifiedAt: "2026-09-07",
  },
  {
    anilistId: 101547,
    slug: "isekai-cheat-magician",
    startDate: "2019-07-10",
    titleJa: "異世界チート魔術師",
    titleZhHant: "異世界超能魔術師",
    titleRomaji: "Isekai Cheat Magician",
    officialSiteUrl: "https://isekai-cheat-magician.com/",
    animeThemesUrl: "https://animethemes.moe/anime/isekai_cheat_magician",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/isekai_cheat_magician?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "PANTA RHEI",
        artistDisplayName: "MYTH & ROID",
        releaseDate: "2019-07-24"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "小さな想い",
        artistDisplayName: "吾妻凛（CV：高橋李依）",
        releaseDate: "2019-08-21"
      }
    ]
  },
  {
  "anilistId": 108430,
  "slug": "given",
  "startDate": "2019-07-11",
  "titleJa": "ギヴン",
  "titleZhHant": "GIVEN 被贈與的未來",
  "titleRomaji": "Given",
  "officialSiteUrl": "https://movie2020.given-anime.com/tv/",
  "animeThemesUrl": "https://animethemes.moe/anime/given",
  "identifierSource": {
    "label": "AnimeThemes：作品識別交叉連結",
    "url": "https://api.animethemes.moe/anime/given?include=resources",
    "language": "en"
  },
  "broadcastLabel": "原2019 TV：7/11節目日起フジテレビ「ノイタミナ」週四常規24:55（JST），初回25:10、FOD25:40另列。2020春MX再播編排為4/3節目日起週五24:00–24:30，完整30分鐘槽非淨片長；未據此新增逐曲季度，電影另分。",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "キヅアト",
      "artistDisplayName": "センチミリメンタル",
      "releaseDate": "2019-09-11",
      "id": "given-op-1",
      "songId": "given-op-1-song",
      "seasonIds": [
        "2019-summer"
      ],
      "sourceMode": "explicit",
      "sources": [
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/given",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-07"
        },
        {
          "label": "動畫官方網站",
          "url": "https://movie2020.given-anime.com/tv/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-07"
        },
        {
          "url": "https://movie2020.given-anime.com/tv/music/",
          "label": "原TV官方MUSIC：本曲曲名、演唱及用途",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-05"
        },
        {
          "url": "https://www.e-muse.com/zh/animation/201907-given/",
          "label": "木棉花版權代理中文正文：本曲名義及OP／ED",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-05"
        },
        {
          "url": "https://nijimen.kusuguru.co.jp/topics/66106",
          "label": "にじめん：同TV系列原OP／ED與完整演唱名義交叉核對",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-05"
        },
        {
          "url": "https://movie2020.given-anime.com/tv/news/article/008.html",
          "label": "原TV首次播出與季度：官方2019公告",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-05"
        }
      ],
      "evidence": [
        {
          "target": "song",
          "targetId": "given-op-1-song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://movie2020.given-anime.com/tv/music/",
            "https://www.e-muse.com/zh/animation/201907-given/"
          ],
          "verifiedAt": "2026-11-05"
        },
        {
          "target": "anime_use",
          "targetId": "given-op-1",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://movie2020.given-anime.com/tv/music/",
            "https://www.e-muse.com/zh/animation/201907-given/",
            "https://movie2020.given-anime.com/tv/news/article/008.html"
          ],
          "verifiedAt": "2026-11-05"
        },
        {
          "target": "song",
          "targetId": "given-op-1-song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://nijimen.kusuguru.co.jp/topics/66106"
          ],
          "verifiedAt": "2026-11-05"
        },
        {
          "target": "anime_use",
          "targetId": "given-op-1",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://nijimen.kusuguru.co.jp/topics/66106"
          ],
          "verifiedAt": "2026-11-05"
        }
      ],
      "followUp": [
        {
          "fields": [
            "use_quarters"
          ],
          "note": "原2019夏TV用途已核；2020春同系列再播有節目表及交叉報道，第一方逐曲延用正文未取得，未加2020用途季度或作品會員。",
          "resumeWhen": "有可讀第一方同版再播及本曲延用／逐話日期資料時，再補2020季度；無新證據不重搜已查缺口。",
          "checkedAt": "2026-11-05"
        }
      ]
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "まるつけ",
      "artistDisplayName": "ギヴン",
      "releaseDate": "2019-09-18",
      "versionLabel": "ギヴン演唱版",
      "credits": [
        {
          "name": "矢野奨吾",
          "role": "vocals"
        },
        {
          "name": "センチミリメンタル",
          "role": "lyrics"
        },
        {
          "name": "センチミリメンタル",
          "role": "composition"
        },
        {
          "name": "センチミリメンタル",
          "role": "arrangement"
        }
      ],
      "id": "given-ed-2",
      "songId": "given-ed-2-song",
      "seasonIds": [
        "2019-summer"
      ],
      "sourceMode": "explicit",
      "sources": [
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/given",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-07"
        },
        {
          "label": "動畫官方網站",
          "url": "https://movie2020.given-anime.com/tv/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-07"
        },
        {
          "url": "https://movie2020.given-anime.com/tv/music/",
          "label": "原TV官方MUSIC：本曲曲名、演唱及用途",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-05"
        },
        {
          "url": "https://www.e-muse.com/zh/animation/201907-given/",
          "label": "木棉花版權代理中文正文：本曲名義及OP／ED",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-05"
        },
        {
          "url": "https://nijimen.kusuguru.co.jp/topics/66106",
          "label": "にじめん：同TV系列原OP／ED與完整演唱名義交叉核對",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-05"
        },
        {
          "url": "https://movie2020.given-anime.com/tv/news/article/008.html",
          "label": "原TV首次播出與季度：官方2019公告",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-05"
        }
      ],
      "evidence": [
        {
          "target": "song",
          "targetId": "given-ed-2-song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://movie2020.given-anime.com/tv/music/",
            "https://www.e-muse.com/zh/animation/201907-given/"
          ],
          "verifiedAt": "2026-11-05"
        },
        {
          "target": "anime_use",
          "targetId": "given-ed-2",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://movie2020.given-anime.com/tv/music/",
            "https://www.e-muse.com/zh/animation/201907-given/",
            "https://movie2020.given-anime.com/tv/news/article/008.html"
          ],
          "verifiedAt": "2026-11-05"
        },
        {
          "target": "song",
          "targetId": "given-ed-2-song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://nijimen.kusuguru.co.jp/topics/66106"
          ],
          "verifiedAt": "2026-11-05"
        },
        {
          "target": "anime_use",
          "targetId": "given-ed-2",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://nijimen.kusuguru.co.jp/topics/66106"
          ],
          "verifiedAt": "2026-11-05"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://movie2020.given-anime.com/tv/music/"
          ],
          "verifiedAt": "2026-11-05"
        }
      ],
      "followUp": [
        {
          "fields": [
            "use_quarters"
          ],
          "note": "原2019夏TV用途已核；2020春同系列再播有節目表及交叉報道，第一方逐曲延用正文未取得，未加2020用途季度或作品會員。",
          "resumeWhen": "有可讀第一方同版再播及本曲延用／逐話日期資料時，再補2020季度；無新證據不重搜已查缺口。",
          "checkedAt": "2026-11-05"
        }
      ]
    }
  ],
  "sourceReferenceUrls": [
    "https://acgsecrets.hk/bangumi/201907/",
    "https://www.kansou.me/archive/2019_summer.html",
    "https://movie2020.given-anime.com/tv/news/article/008.html",
    "https://s.mxtv.jp/company/press/press2019_900001.pdf",
    "https://nijimen.kusuguru.co.jp/topics/66106",
    "https://www.e-muse.com/zh/animation/201907-given/"
  ],
  "metadataVerifiedAt": "2026-11-05",
  "metadataSources": [
    {
      "label": "動畫官方網站：作品與播出資料",
      "url": "https://movie2020.given-anime.com/tv/",
      "language": "ja",
      "role": "first_party",
      "verifiedAt": "2026-09-07"
    },
    {
      "label": "AnimeThemes：作品識別交叉連結",
      "url": "https://api.animethemes.moe/anime/given?include=resources",
      "language": "en",
      "role": "identifier",
      "verifiedAt": "2026-09-07"
    },
    {
      "label": "繁體中文季度列表交叉對照",
      "url": "https://youranimes.tw/bangumi/201907",
      "language": "zh-Hant",
      "role": "localized_cross_check",
      "verifiedAt": "2026-09-07"
    },
    {
      "label": "AnimeThemes：OP／ED 曲目交叉核對",
      "url": "https://animethemes.moe/anime/given",
      "language": "en",
      "role": "theme_cross_check",
      "verifiedAt": "2026-09-07"
    },
    {
      "label": "季度首播公開來源",
      "url": "https://acgsecrets.hk/bangumi/201907/",
      "language": "zh-Hant",
      "role": "broadcast_cross_check",
      "verifiedAt": "2026-09-07"
    },
    {
      "label": "季度首播公開來源",
      "url": "https://www.kansou.me/archive/2019_summer.html",
      "language": "ja",
      "role": "broadcast_cross_check",
      "verifiedAt": "2026-09-07"
    },
    {
      "url": "https://movie2020.given-anime.com/tv/music/",
      "label": "原TV官方MUSIC：OP／ED、演唱版本及ED創作名單",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-11-05"
    },
    {
      "url": "https://movie2020.given-anime.com/tv/news/article/008.html",
      "label": "原TV官方：2019節目日、常規／初回及FOD時間分列",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-11-05"
    },
    {
      "url": "https://www.e-muse.com/zh/animation/201907-given/",
      "label": "木棉花版權代理：正式中文名、原TV及兩曲",
      "role": "first_party",
      "language": "zh-Hant",
      "verifiedAt": "2026-11-05"
    },
    {
      "url": "https://s.mxtv.jp/company/press/press2019_900001.pdf",
      "label": "TOKYO MX 2020春原表：同名節目24:00–24:30完整槽；非逐曲用途證據",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-11-05"
    },
    {
      "url": "https://nijimen.kusuguru.co.jp/topics/66106",
      "label": "2020同TV系列再放送與原OP／ED交叉核對",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-11-05"
    }
  ],
  "broadcastTimeJst": "24:55"
},
  {
    anilistId: 107490,
    slug: "machikado-mazoku",
    startDate: "2019-07-11",
    titleJa: "まちカドまぞく",
    titleZhHant: "街角的魔族女孩",
    titleRomaji: "Machikado Mazoku",
    officialSiteUrl: "https://www.tbs.co.jp/anime/machikado/1st/",
    animeThemesUrl: "https://animethemes.moe/anime/machikado_mazoku",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/machikado_mazoku?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:28",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "町かどタンジェント",
        artistDisplayName: "shami momo（吉田優子・千代田桃／CV：小原好美・鬼頭明里）",
        releaseDate: "2019-08-07",
        credits: [
          {
            name: "shami momo（吉田優子・千代田桃／CV：小原好美・鬼頭明里）",
            role: "vocals"
          },
          {
            name: "辻林美穂",
            role: "lyrics"
          },
          {
            name: "辻林美穂",
            role: "composition"
          },
          {
            name: "辻林美穂",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "よいまちカンターレ",
        artistDisplayName: "コーロまちカド（シャミ子・桃・リリス・ミカン／CV：小原好美・鬼頭明里・高橋未奈美・高柳知葉）",
        releaseDate: "2019-08-07",
        credits: [
          {
            name: "コーロまちカド（シャミ子・桃・リリス・ミカン／CV：小原好美・鬼頭明里・高橋未奈美・高柳知葉）",
            role: "vocals"
          },
          {
            name: "伊藤いづも",
            role: "lyrics"
          },
          {
            name: "藤本功一",
            role: "composition"
          },
          {
            name: "藤本功一",
            role: "arrangement"
          }
        ]
      }
    ]
  },
  {
    anilistId: 104463,
    slug: "toaru-kagaku-no-accelerator",
    startDate: "2019-07-12",
    titleJa: "とある科学の一方通行",
    titleZhHant: "科學一方通行",
    titleRomaji: "Toaru Kagaku no Accelerator",
    officialSiteUrl: "https://toaru-project.com/accelerator/",
    animeThemesUrl: "https://animethemes.moe/anime/toaru_kagaku_no_accelerator",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/toaru_kagaku_no_accelerator?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Shadow is the Light",
        artistDisplayName: "THE SIXTH LIE",
        releaseDate: "2019-08-21"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Parole",
        artistDisplayName: "sajou no hana",
        releaseDate: "2019-07-31"
      }
    ]
  },
  {
    anilistId: 104723,
    slug: "tsuujou-kougeki-ga-zentai-kougeki-de-ni-kai-kougeki-no-okaasan-wa-suki-desu-ka",
    startDate: "2019-07-12",
    titleJa: "通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか？",
    titleZhHant: "普通攻擊是全體二連擊，這樣的媽媽你喜歡嗎？",
    titleRomaji: "Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki Desu ka?",
    officialSiteUrl: "https://okaasan-online.com/",
    animeThemesUrl: "https://animethemes.moe/anime/tsuujou_kougeki_ga_zentai_kougeki_de_ni_kai_kougeki_no_okaasan_wa_suki_desu_ka",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/tsuujou_kougeki_ga_zentai_kougeki_de_ni_kai_kougeki_no_okaasan_wa_suki_desu_ka?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "イヤヨイヤヨモスキノウチ！",
        artistDisplayName: "スピラ・スピカ",
        releaseDate: "2019-08-28"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "通常攻撃が全体攻撃で二回攻撃ママ",
        artistDisplayName: "大好真々子（CV：茅野愛衣）",
        releaseDate: "2019-09-25",
        versionLabel: "「パタパタママ」改詞版本",
        credits: [
          {
            name: "大好真々子（CV：茅野愛衣）",
            role: "vocals"
          },
          {
            name: "佐瀬寿一",
            role: "composition"
          },
          {
            name: "千葉\"naotyu-\"直樹",
            role: "arrangement"
          }
        ]
      }
    ]
  },
  {
    anilistId: 101167,
    slug: "dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka-ii",
    startDate: "2019-07-12",
    titleJa: "ダンジョンに出会いを求めるのは間違っているだろうかⅡ",
    titleZhHant: "在地下城尋求邂逅是否搞錯了什麼 第二季",
    titleRomaji: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka II",
    officialSiteUrl: "https://danmachi.com/danmachi2/",
    animeThemesUrl: "https://animethemes.moe/anime/dungeon_ni_deai_wo_motomeru_no_wa_machigatteiru_darou_ka_ii",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/dungeon_ni_deai_wo_motomeru_no_wa_machigatteiru_darou_ka_ii?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "HELLO to DREAM",
        artistDisplayName: "井口裕香",
        releaseDate: "2019-07-17"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ささやかな祝祭",
        artistDisplayName: "sora tob sakana",
        releaseDate: "2019-07-24"
      }
    ]
  },
  {
    anilistId: 107876,
    slug: "bem",
    startDate: "2019-07-14",
    titleJa: "BEM",
    titleZhHant: "妖怪人間BEM",
    titleRomaji: "BEM",
    officialSiteUrl: "https://newbem.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/bem",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/bem?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:35",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "宇宙の記憶",
        artistDisplayName: "坂本真綾",
        credits: [
          {
            name: "坂本真綾",
            role: "vocals"
          },
          {
            name: "椎名林檎",
            role: "lyrics"
          },
          {
            name: "椎名林檎",
            role: "composition"
          },
          {
            name: "椎名林檎",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "イルイミ",
        artistDisplayName: "JUNNA",
        credits: [
          {
            name: "JUNNA",
            role: "vocals"
          },
          {
            name: "降谷建志",
            role: "lyrics"
          },
          {
            name: "降谷建志",
            role: "composition"
          },
          {
            name: "降谷建志",
            role: "arrangement"
          }
        ]
      }
    ]
  },
  {
    anilistId: 108444,
    slug: "try-knights",
    startDate: "2019-07-30",
    titleJa: "トライナイツ",
    titleZhHant: "TRY KNIGHTS",
    titleRomaji: "Try Knights",
    officialSiteUrl: "https://www.ntv.co.jp/tryknights/",
    animeThemesUrl: "https://animethemes.moe/anime/try_knights",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/try_knights?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:29",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "無限のトライ",
        artistDisplayName: "阪本奨悟"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "模様",
        artistDisplayName: "Ivy to Fraudulent Game",
        releaseDate: "2019-07-24"
      }
    ]
  },
  {
    anilistId: 109929,
    slug: "hakata-mentai-pirikarako-chan",
    sourceReferenceUrls: [...summer2019ReferenceUrls, "https://prtimes.jp/main/html/rd/p/000000004.000044099.html"],
    startDate: "2019-07-07",
    titleJa: "博多明太！ぴりからこちゃん",
    titleZhHant: "博多明太！麻辣子醬",
    titleRomaji: "Hakata Mentai! Pirikarako-chan",
    officialSiteUrl: "https://pirikarakochan.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/hakata_mentai_pirikarako_chan",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/hakata_mentai_pirikarako_chan?include=resources",
      language: "en"
    },
    broadcastTimeJst: "06:15",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "博多明太！ぴりからこちゃん",
        artistDisplayName: "ぴりからこちゃん（CV：河野ひより）",
        versionLabel: "配信版片頭曲",
        credits: [
          { name: "河野ひより", role: "vocals" },
          { name: "松隈ケンタ", role: "lyrics" },
          { name: "松隈ケンタ", role: "composition" },
          { name: "SCRAMBLES", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ぴっぴぴりから、ぴりからこ。 feat. 鳴花ヒメ・ミコト",
        artistDisplayName: "mathru@かにみそP",
        versionLabel: "第 1～6 話片尾曲",
        credits: [
          { name: "鳴花ヒメ・ミコト", role: "vocals" },
          { name: "mathru@かにみそP", role: "lyrics" },
          { name: "mathru@かにみそP", role: "composition" },
          { name: "mathru@かにみそP", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ピリッと大スキ♡",
        artistDisplayName: "fumika",
        versionLabel: "第 7～12 話片尾曲",
        releaseDate: "2019-08-14",
        credits: [
          { name: "fumika", role: "vocals" },
          { name: "YADAKO", role: "lyrics" },
          { name: "YADAKO", role: "composition" },
          { name: "Keita Ishizuka", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 109603,
    slug: "yami-shibai-7",
    sourceReferenceUrls: [...summer2019ReferenceUrls, "https://www.tv-tokyo.co.jp/anime/yamishibai7/onair/"],
    startDate: "2019-07-07",
    titleJa: "闇芝居 七期",
    titleZhHant: "闇芝居 第七季",
    titleRomaji: "Yami Shibai 7",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/yamishibai7/",
    animeThemesUrl: "https://animethemes.moe/anime/yami_shibai_7",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/yami_shibai_7?include=resources",
      language: "en"
    },
    broadcastTimeJst: "27:05",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "決壊",
        artistDisplayName: "betcover!!"
      }
    ]
  },
  {
    "anilistId": 100891,
    "slug": "kengan-ashura",
    "sourceReferenceUrls": [
      "https://acgsecrets.hk/bangumi/201907/",
      "https://www.kansou.me/archive/2019_summer.html",
      "https://shogakukan-comic.jp/news/19676"
    ],
    "startDate": "2019-07-31",
    "titleJa": "ケンガンアシュラ",
    "titleZhHant": "拳願阿修羅",
    "titleRomaji": "Kengan Ashura",
    "officialSiteUrl": "https://kengan.net/",
    "animeThemesUrl": "https://animethemes.moe/anime/kengan_ashura",
    "identifierSource": {
      "label": "AnimeThemes：作品識別交叉連結",
      "url": "https://api.animethemes.moe/anime/kengan_ashura?include=resources",
      "language": "en"
    },
    "broadcastLabel": "Netflix 於2019-07-31一次上架第1–12話。TOKYO MX 電視版自2020-01-10至03-27每週五25:35 JST，曆日為01-11至03-28每週六01:35。BS日テレ於01-14–03-31每週二25:30 JST 播出第1–12話。",
    "themes": [
      {
        "type": "OP",
        "sequence": 1,
        "titleJa": "KING & ASHLEY",
        "artistDisplayName": "MY FIRST STORY",
        "releaseDate": "2019-07-04",
        "id": "kengan-ashura-op-1",
        "songId": "kengan-ashura-op-1-song",
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文原配信與電視版主題曲對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://myfirststory.net/contents/283632",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.adkem.jp/works02/%E3%82%B1%E3%83%B3%E3%82%AC%E3%83%B3%E3%82%A2%E3%82%B7%E3%83%A5%E3%83%A9/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://news.ponycanyon.co.jp/2019/08/33809",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://cal.syoboi.jp/tid/5546",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.animatetimes.com/news/details.php?id=1575459199",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://myfirststory.net/contents/254098",
            "label": "權利方本曲最早已核商業發行",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=OxNeZiOr_zs",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.oricon.co.jp/prof/561163/lyrics/61119/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://myfirststory.net/musics/8640",
            "label": "權利方曲目與發行音源說明",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1470204065",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1470204067",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "日本唱片商《The Anthems》雙碟實體曲序",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587392",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=NLlv6q_qV98",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/news/index00120000.html",
            "label": "權利方公開的影片形式或唱片收錄",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://myfirststory.net/contents/283632",
              "https://www.adkem.jp/works02/%E3%82%B1%E3%83%B3%E3%82%AC%E3%83%B3%E3%82%A2%E3%82%B7%E3%83%A5%E3%83%A9/",
              "https://news.ponycanyon.co.jp/2019/08/33809",
              "https://cal.syoboi.jp/tid/5546",
              "https://www.animatetimes.com/news/details.php?id=1575459199"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-op-1"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://myfirststory.net/contents/283632",
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://cal.syoboi.jp/tid/5546"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-op-1-song"
          },
          {
            "target": "song",
            "fields": [
              "date"
            ],
            "sourceUrls": [
              "https://myfirststory.net/contents/254098"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-op-1-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=OxNeZiOr_zs",
              "https://www.oricon.co.jp/prof/561163/lyrics/61119/"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://myfirststory.net/musics/8640"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-op-1-song-commercial"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1470204067"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1470204067"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://myfirststory.net/musics/8640",
              "https://music.apple.com/hk/album/1470204065"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1470204065"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587392"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587392"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=NLlv6q_qV98"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "NLlv6q_qV98"
          },
          {
            "target": "video",
            "fields": [
              "type",
              "url"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=NLlv6q_qV98",
              "https://kengan.net/news/index00120000.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "NLlv6q_qV98"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=OxNeZiOr_zs"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "OxNeZiOr_zs"
          },
          {
            "target": "video",
            "fields": [
              "type",
              "url"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=OxNeZiOr_zs",
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "OxNeZiOr_zs"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "KING & ASHLEY｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1470204067",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1470204065",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-op-1-song-commercial"
          },
          {
            "platform": "Apple Music",
            "label": "KING & ASHLEY｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587392",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16"
          }
        ],
        "seasonIds": [
          "2019-summer",
          "2020-winter"
        ],
        "usageLabel": "2019年Netflix版及2020年日本電視版第1–12話片頭。",
        "lastVerifiedAt": "2026-11-16",
        "credits": [
          {
            "name": "Hiro",
            "role": "lyrics"
          },
          {
            "name": "Nob",
            "role": "composition"
          },
          {
            "name": "Sho",
            "role": "composition"
          }
        ],
        "recordings": [
          {
            "id": "kengan-ashura-op-1-song-commercial",
            "title": "KING & ASHLEY",
            "kind": "vocal",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "apple-hk-1470204065",
            "title": "KING & ASHLEY",
            "type": "single",
            "date": {
              "value": "2019-07-04",
              "precision": "day"
            },
            "artistDisplayName": "MY FIRST STORY",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "KING & ASHLEY",
                "position": 1,
                "disc": 1,
                "recordingId": "kengan-ashura-op-1-song-commercial"
              }
            ],
            "label": "INTACT MUSIC ENTERTAINMENT INC."
          },
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "KING & ASHLEY",
                "disc": 1,
                "position": 1
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "KING & ASHLEY",
                "position": 1,
                "disc": 1
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "arrangement",
              "recording_format",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原商業單曲、主題曲合輯和官方無字片頭。作品官網片頭曲欄的創作署名與下一段片頭曲重複。",
            "resumeWhen": "待原唱或唱片公司逐曲編曲、原配信與電視剪輯／同母帶說明，並核實香港播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 1,
        "titleJa": "Born This Way",
        "artistDisplayName": "BAD HOP",
        "versionLabel": "YZERR・Vingo・Bark 演唱版",
        "credits": [
          {
            "name": "YZERR",
            "role": "vocals"
          },
          {
            "name": "Vingo",
            "role": "vocals"
          },
          {
            "name": "Bark",
            "role": "vocals"
          },
          {
            "name": "YZERR",
            "role": "lyrics"
          },
          {
            "name": "Vingo",
            "role": "lyrics"
          },
          {
            "name": "Bark",
            "role": "lyrics"
          }
        ],
        "id": "kengan-ashura-ed-1",
        "songId": "kengan-ashura-ed-1-song",
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文原配信與電視版主題曲對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/ed.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.adkem.jp/works02/%E3%82%B1%E3%83%B3%E3%82%AC%E3%83%B3%E3%82%A2%E3%82%B7%E3%83%A5%E3%83%A9/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://news.ponycanyon.co.jp/2019/08/33809",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://cal.syoboi.jp/tid/5546",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.animatetimes.com/news/details.php?id=1575459199",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=MFWtLMi03_g",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.joysound.com/web/search/song/767364",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=fzTIu7x4Lv4",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://lnk.to/BH_BTW",
            "label": "權利方配信日期及版本說明",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1470194202",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1470194207",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1470194211",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "日本唱片商《The Anthems》雙碟實體曲序",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587493",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=tdTd0hvo-qU",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/news/index00120000.html",
            "label": "權利方公開的影片形式或唱片收錄",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=5SuTkMNIV1o",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/ed.html",
              "https://www.adkem.jp/works02/%E3%82%B1%E3%83%B3%E3%82%AC%E3%83%B3%E3%82%A2%E3%82%B7%E3%83%A5%E3%83%A9/",
              "https://news.ponycanyon.co.jp/2019/08/33809",
              "https://cal.syoboi.jp/tid/5546",
              "https://www.animatetimes.com/news/details.php?id=1575459199"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-ed-1"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/ed.html",
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://cal.syoboi.jp/tid/5546"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-ed-1-song"
          },
          {
            "target": "song",
            "fields": [
              "date"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=MFWtLMi03_g"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-ed-1-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=MFWtLMi03_g",
              "https://www.joysound.com/web/search/song/767364"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=MFWtLMi03_g"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-ed-1-song-commercial"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind",
              "format"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=fzTIu7x4Lv4"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-ed-1-song-tv-edit"
          },
          {
            "target": "recording",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=MFWtLMi03_g"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-ed-1-song-commercial"
          },
          {
            "target": "recording",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=fzTIu7x4Lv4"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-ed-1-song-tv-edit"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1470194207"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1470194207"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1470194211"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1470194211"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://lnk.to/BH_BTW",
              "https://music.apple.com/hk/album/1470194202"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1470194202"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587493"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587493"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=tdTd0hvo-qU"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "tdTd0hvo-qU"
          },
          {
            "target": "video",
            "fields": [
              "type",
              "url"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=tdTd0hvo-qU",
              "https://kengan.net/news/index00120000.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "tdTd0hvo-qU"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=MFWtLMi03_g"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "MFWtLMi03_g"
          },
          {
            "target": "video",
            "fields": [
              "type",
              "url"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=MFWtLMi03_g",
              "https://lnk.to/BH_BTW"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "MFWtLMi03_g"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=fzTIu7x4Lv4"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "fzTIu7x4Lv4"
          },
          {
            "target": "video",
            "fields": [
              "type",
              "url"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=fzTIu7x4Lv4",
              "https://lnk.to/BH_BTW"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "fzTIu7x4Lv4"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=5SuTkMNIV1o"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "5SuTkMNIV1o"
          },
          {
            "target": "video",
            "fields": [
              "type",
              "url"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=5SuTkMNIV1o",
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "5SuTkMNIV1o"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Born This Way (feat. YZERR, Vingo & Bark)｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1470194207",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1470194202",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-ed-1-song-commercial"
          },
          {
            "platform": "Apple Music",
            "label": "Born This Way (TV Edit) [feat. YZERR, Vingo & Bark]｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1470194211",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1470194202",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-ed-1-song-tv-edit"
          },
          {
            "platform": "Apple Music",
            "label": "Born This Way (feat. YZERR, Vingo & Bark)｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587493",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16"
          }
        ],
        "seasonIds": [
          "2019-summer",
          "2020-winter"
        ],
        "usageLabel": "2019年Netflix版及2020年日本電視版第1–12話片尾。",
        "lastVerifiedAt": "2026-11-16",
        "releaseDate": "2019-07-04",
        "recordings": [
          {
            "id": "kengan-ashura-ed-1-song-commercial",
            "title": "Born This Way (feat. YZERR, Vingo & Bark)",
            "kind": "vocal",
            "format": "unknown",
            "credits": [
              {
                "name": "Km",
                "role": "composition"
              }
            ]
          },
          {
            "id": "kengan-ashura-ed-1-song-tv-edit",
            "title": "Born This Way (TV Edit) [feat. YZERR, Vingo & Bark]",
            "kind": "vocal",
            "format": "tv",
            "credits": [
              {
                "name": "Jacob Lethal Beats",
                "role": "composition"
              }
            ]
          }
        ],
        "releases": [
          {
            "id": "apple-hk-1470194202",
            "title": "Born This Way (feat. YZERR, Vingo & Bark)",
            "type": "single",
            "date": {
              "value": "2019-07-04",
              "precision": "day"
            },
            "artistDisplayName": "BAD HOP",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Born This Way (feat. YZERR, Vingo & Bark)",
                "position": 1,
                "disc": 1,
                "recordingId": "kengan-ashura-ed-1-song-commercial"
              },
              {
                "title": "Born This Way (TV Edit) [feat. YZERR, Vingo & Bark]",
                "position": 2,
                "disc": 1,
                "recordingId": "kengan-ashura-ed-1-song-tv-edit"
              }
            ],
            "label": "PONY CANYON / Solomon I&I Production"
          },
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Born This Way (feat. YZERR, Vingo & Bark)",
                "disc": 2,
                "position": 15
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Born This Way (feat. YZERR, Vingo & Bark)",
                "position": 15,
                "disc": 2
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "composition",
              "arrangement",
              "recordings",
              "platform_availability"
            ],
            "note": "2019單曲原版與TV Edit均已核，作曲者按音源分別保存。合輯和無字片尾未連到同一錄音。",
            "resumeWhen": "待權利方核對Netflix／電視實播剪輯、商業版編曲、合輯母帶及香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 1,
        "id": "kengan-ashura-in-1",
        "titleJa": "Falling down",
        "artistDisplayName": "Sho from MY FIRST STORY",
        "songId": "kengan-ashura-in-1-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/08.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://myfirststory.net/contents/283632",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.imdb.com/title/tt10733748/fullcredits/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587393",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Falling down｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587393",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-1-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/08.html",
              "https://myfirststory.net/contents/283632",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.imdb.com/title/tt10733748/fullcredits/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-1"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://myfirststory.net/contents/283632",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-1-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-1-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-1-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587393"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587393"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第8話，今井コスモ的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-1-song-anthems",
            "title": "Falling down",
            "kind": "vocal",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Falling down",
                "disc": 1,
                "position": 2,
                "recordingId": "kengan-ashura-in-1-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Falling down",
                "position": 2,
                "disc": 1,
                "recordingId": "kengan-ashura-in-1-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 2,
        "id": "kengan-ashura-in-2",
        "titleJa": "Make Me Crazy",
        "artistDisplayName": "UNDEAD CORPORATION",
        "songId": "kengan-ashura-in-2-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/08.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.imdb.com/title/tt10733748/fullcredits/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "日本唱片商《The Anthems》雙碟實體曲序",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587395",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Make Me Crazy｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587395",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/08.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.imdb.com/title/tt10733748/fullcredits/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-2"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-2-song"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587395"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587395"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第8話，アダム・ダッドリー的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Make Me Crazy",
                "disc": 1,
                "position": 3
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Make Me Crazy",
                "position": 3,
                "disc": 1
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 3,
        "id": "kengan-ashura-in-3",
        "titleJa": "Behavior observation",
        "artistDisplayName": "高山淳",
        "songId": "kengan-ashura-in-3-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/09.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587401",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Behavior observation｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587401",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-3-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/09.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-3"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-3-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-3-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-3-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587401"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587401"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第9話，河野春男的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-3-song-anthems",
            "title": "Behavior observation",
            "kind": "instrumental",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Behavior observation",
                "disc": 1,
                "position": 4,
                "recordingId": "kengan-ashura-in-3-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Behavior observation",
                "position": 4,
                "disc": 1,
                "recordingId": "kengan-ashura-in-3-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 4,
        "id": "kengan-ashura-in-4",
        "titleJa": "万華鏡",
        "artistDisplayName": "RagDöllz",
        "songId": "kengan-ashura-in-4-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/09.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587404",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=Mp5s4YJK-gE",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "万華鏡｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587404",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-4-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/09.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-4"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-4-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-4-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-4-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587404"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587404"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=Mp5s4YJK-gE"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "Mp5s4YJK-gE"
          },
          {
            "target": "video",
            "fields": [
              "type",
              "url"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=Mp5s4YJK-gE",
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "Mp5s4YJK-gE"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第9話，阿古谷清秋的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-4-song-anthems",
            "title": "万華鏡",
            "kind": "vocal",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "万華鏡",
                "disc": 1,
                "position": 5,
                "recordingId": "kengan-ashura-in-4-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "万華鏡",
                "position": 5,
                "disc": 1,
                "recordingId": "kengan-ashura-in-4-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 5,
        "id": "kengan-ashura-in-5",
        "titleJa": "in your face",
        "artistDisplayName": "PABLO",
        "songId": "kengan-ashura-in-5-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/10.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "日本唱片商《The Anthems》雙碟實體曲序",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587408",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "in your face｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587408",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/10.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-5"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-5-song"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587408"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587408"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第10話，呉雷庵的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "in your face",
                "disc": 1,
                "position": 6
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "in your face",
                "position": 6,
                "disc": 1
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 6,
        "id": "kengan-ashura-in-6",
        "titleJa": "FUTURE DESTINATION",
        "artistDisplayName": "KellySIMONZ",
        "songId": "kengan-ashura-in-6-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/10.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587410",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "FUTURE DESTINATION｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587410",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-6-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/10.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-6"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-6-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-6-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-6-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587410"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587410"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第10話，茂吉・ロビンソン的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-6-song-anthems",
            "title": "FUTURE DESTINATION",
            "kind": "instrumental",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "FUTURE DESTINATION",
                "disc": 1,
                "position": 7,
                "recordingId": "kengan-ashura-in-6-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "FUTURE DESTINATION",
                "position": 7,
                "disc": 1,
                "recordingId": "kengan-ashura-in-6-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 7,
        "id": "kengan-ashura-in-7",
        "titleJa": "The Animal Fighter",
        "artistDisplayName": "藤澤健至",
        "songId": "kengan-ashura-in-7-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/11.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://team-max.co.jp/2020/06/04/kengan-the-anthems/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.imdb.com/title/tt10733760/fullcredits/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587413",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "The Animal Fighter｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587413",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-7-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/11.html",
              "https://team-max.co.jp/2020/06/04/kengan-the-anthems/",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.imdb.com/title/tt10733760/fullcredits/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-7"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://team-max.co.jp/2020/06/04/kengan-the-anthems/",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-7-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-7-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-7-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587413"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587413"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第11話，十鬼蛇王馬的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-7-song-anthems",
            "title": "The Animal Fighter",
            "kind": "vocal",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "The Animal Fighter",
                "disc": 1,
                "position": 8,
                "recordingId": "kengan-ashura-in-7-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "The Animal Fighter",
                "position": 8,
                "disc": 1,
                "recordingId": "kengan-ashura-in-7-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 8,
        "id": "kengan-ashura-in-8",
        "titleJa": "Black Phantom",
        "artistDisplayName": "片山修志",
        "songId": "kengan-ashura-in-8-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/11.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://team-max.co.jp/2020/06/04/kengan-the-anthems/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.imdb.com/title/tt10733760/fullcredits/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587416",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Black Phantom｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587416",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-8-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/11.html",
              "https://team-max.co.jp/2020/06/04/kengan-the-anthems/",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.imdb.com/title/tt10733760/fullcredits/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-8"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://team-max.co.jp/2020/06/04/kengan-the-anthems/",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-8-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-8-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-8-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587416"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587416"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第11話，因幡良的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-8-song-anthems",
            "title": "Black Phantom",
            "kind": "instrumental",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Black Phantom",
                "disc": 1,
                "position": 9,
                "recordingId": "kengan-ashura-in-8-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Black Phantom",
                "position": 9,
                "disc": 1,
                "recordingId": "kengan-ashura-in-8-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 9,
        "id": "kengan-ashura-in-9",
        "titleJa": "BATTLE OF GUILD",
        "artistDisplayName": "FROZEN CAKE BAR",
        "songId": "kengan-ashura-in-9-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.muevo.jp/campaigns/2894",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.animegeek.com/kengan-ashura-season-2-release-date-netflix-kengan-ashura-part-2-sequel-manga-story-ending-spoilers/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.imdb.com/title/tt10733764/fullcredits/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587419",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "BATTLE OF GUILD｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587419",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-9-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://www.muevo.jp/campaigns/2894",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.animegeek.com/kengan-ashura-season-2-release-date-netflix-kengan-ashura-part-2-sequel-manga-story-ending-spoilers/",
              "https://www.imdb.com/title/tt10733764/fullcredits/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-9"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.muevo.jp/campaigns/2894",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-9-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-9-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-9-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587419"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587419"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第12話，沢田慶三郎的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-9-song-anthems",
            "title": "BATTLE OF GUILD",
            "kind": "vocal",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "BATTLE OF GUILD",
                "disc": 1,
                "position": 10,
                "recordingId": "kengan-ashura-in-9-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "BATTLE OF GUILD",
                "position": 10,
                "disc": 1,
                "recordingId": "kengan-ashura-in-9-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 10,
        "id": "kengan-ashura-in-10",
        "titleJa": "Future",
        "artistDisplayName": "SIRENT SCREEM",
        "songId": "kengan-ashura-in-10-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.delicesetferocites.com/kengan-ashura-gros-son-made-japan/",
            "label": "獨立音樂專文對Julius與前半入場影片的交叉核對",
            "role": "cross_check",
            "language": "multi",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.animegeek.com/kengan-ashura-season-2-release-date-netflix-kengan-ashura-part-2-sequel-manga-story-ending-spoilers/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "日本唱片商《The Anthems》雙碟實體曲序",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587422",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Future｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587422",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.animegeek.com/kengan-ashura-season-2-release-date-netflix-kengan-ashura-part-2-sequel-manga-story-ending-spoilers/",
              "https://www.delicesetferocites.com/kengan-ashura-gros-son-made-japan/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-10"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-10-song"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587422"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587422"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第12話，ユリウス・ラインホルト的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Future",
                "disc": 1,
                "position": 11
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Future",
                "position": 11,
                "disc": 1
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 11,
        "id": "kengan-ashura-in-11",
        "titleJa": "Axis of Hate",
        "artistDisplayName": "DEVIL WITHIN",
        "songId": "kengan-ashura-in-11-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/12.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.imdb.com/title/tt10733764/fullcredits/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587427",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://linkco.re/Ehf3hphP?lang=ja",
            "label": "權利方本曲最早已核商業發行",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1458761100",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1458761292",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Axis of Hate｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587427",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-11-song-anthems"
          },
          {
            "platform": "Apple Music",
            "label": "Axis of Hate｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1458761292",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1458761100",
            "availability": "unknown",
            "verifiedAt": "2026-11-16"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/12.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.imdb.com/title/tt10733764/fullcredits/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-11"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-11-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-11-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-11-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587427"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587427"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          },
          {
            "target": "song",
            "fields": [
              "date"
            ],
            "sourceUrls": [
              "https://linkco.re/Ehf3hphP?lang=ja"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-11-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://linkco.re/Ehf3hphP?lang=ja",
              "https://www.imdb.com/title/tt10733764/fullcredits/"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1458761292"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1458761292"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://linkco.re/Ehf3hphP?lang=ja",
              "https://music.apple.com/hk/album/1458761100"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1458761100"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第12話，ムテバ・ギゼンガ的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-11-song-anthems",
            "title": "Axis of Hate",
            "kind": "vocal",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Axis of Hate",
                "disc": 1,
                "position": 12,
                "recordingId": "kengan-ashura-in-11-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Axis of Hate",
                "position": 12,
                "disc": 1,
                "recordingId": "kengan-ashura-in-11-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          },
          {
            "id": "apple-hk-1458761100",
            "title": "DARK SUPREMACY",
            "type": "album",
            "date": {
              "value": "2019-04-10",
              "precision": "day"
            },
            "artistDisplayName": "DEVIL WITHIN",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Axis of Hate",
                "position": 4,
                "disc": 1
              }
            ],
            "label": "Ichigeki Record"
          }
        ],
        "releaseDate": "2019-04-10",
        "credits": [
          {
            "name": "Micu",
            "role": "lyrics"
          },
          {
            "name": "Kensuke",
            "role": "composition"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 12,
        "id": "kengan-ashura-in-12",
        "titleJa": "冥土への祈り",
        "artistDisplayName": "マグダラ呪念",
        "songId": "kengan-ashura-in-12-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
            "label": "繁體中文逐話曲目與角色入場對照",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/music/anthems.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=laAq30ByTk8",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://kengan.net/story/12.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.imdb.com/title/tt10733764/fullcredits/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4998980",
            "label": "原合輯曲序與聲樂／演奏分類交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.ponycanyon.co.jp/music/PCCA000004897",
            "label": "唱片公司《The Anthems》發行日、品番與產品",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1496587391",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1496587431",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "冥土への祈り｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1496587431",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1496587391",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "kengan-ashura-in-12-song-anthems"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://www.youtube.com/watch?v=laAq30ByTk8",
              "https://kengan.net/story/12.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2",
              "https://www.imdb.com/title/tt10733764/fullcredits/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-12"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85#%E4%BD%BF%E7%94%A8%E6%9B%B2"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-12-song"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-12-song-anthems"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kengan-ashura-in-12-song-anthems"
          },
          {
            "target": "release",
            "fields": [
              "date",
              "catalog_number",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://www.ponycanyon.co.jp/music/PCCA000004897",
              "https://kengan.net/music/anthems.html",
              "https://tower.jp/item/4998980"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "pcca-04897"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1496587431"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1496587431"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://kengan.net/music/anthems.html",
              "https://music.apple.com/hk/album/1496587391"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1496587391"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "2019年Netflix版第12話，目黒正樹的劇中入場曲。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "kengan-ashura-in-12-song-anthems",
            "title": "冥土への祈り",
            "kind": "vocal",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "pcca-04897",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "日本雙碟CD",
            "region": "JP",
            "tracks": [
              {
                "title": "冥土への祈り",
                "disc": 1,
                "position": 13,
                "recordingId": "kengan-ashura-in-12-song-anthems"
              }
            ],
            "label": "PONY CANYON",
            "catalogNumber": "PCCA.04897"
          },
          {
            "id": "apple-hk-1496587391",
            "title": "The Anthems",
            "type": "soundtrack",
            "date": {
              "value": "2020-02-12",
              "precision": "day"
            },
            "artistDisplayName": "Various Artists",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "冥土への祈り",
                "position": 13,
                "disc": 1,
                "recordingId": "kengan-ashura-in-12-song-anthems"
              }
            ],
            "label": "PONY CANYON"
          }
        ],
        "followUp": [
          {
            "fields": [
              "use_quarters",
              "recordings",
              "platform_availability"
            ],
            "note": "已核原Netflix該話入場及商業曲位；日本電視剪輯的逐曲沿用與正片段落版本仍待核。",
            "resumeWhen": "待可查閱的日本電視首輪該話入場段落、掛字或權利方用曲表，並核對香港完整播放。",
            "checkedAt": "2026-11-16"
          }
        ]
      }
    ],
    "metadataVerifiedAt": "2026-11-16",
    "metadataSources": [
      {
        "url": "https://shogakukan-comic.jp/news/19676",
        "label": "小學館原配信公告",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://news.ponycanyon.co.jp/2019/08/33809",
        "label": "首期原配信日及兩段集數的權利方公告",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://myfirststory.net/contents/283632",
        "label": "日本電視首播日期與各台時段的原唱公告",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://www.bs4.jp/kengan/",
        "label": "BS日テレ日本TV第1–12話播出日期",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://www.adkem.jp/works02/%E3%82%B1%E3%83%B3%E3%82%AC%E3%83%B3%E3%82%A2%E3%82%B7%E3%83%A5%E3%83%A9/",
        "label": "製作方日本TV首輪與各段主題曲",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://www.animatetimes.com/news/details.php?id=1575459199",
        "label": "原配信與 TOKYO MX 首輪電視時段的同期報導",
        "role": "broadcast_cross_check",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://cal.syoboi.jp/tid/5546/time",
        "label": "TOKYO MX 第1–12話各話實播日期與時段",
        "role": "broadcast_cross_check",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://www.netflix.com/hk/title/80992228",
        "label": "Netflix 香港正版節目入口及每話分鐘數",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://zh.wikipedia.org/wiki/%E6%8B%B3%E9%A1%98%E9%98%BF%E4%BF%AE%E7%BE%85",
        "label": "繁體中文原配信、作品分段與集數交叉核對",
        "role": "broadcast_cross_check",
        "language": "zh-Hant",
        "verifiedAt": "2026-11-16"
      }
    ]
  },
  {
    "anilistId": 111144,
    "slug": "cardfight-vanguard-shinemon-hen",
    sourceReferenceUrls: [...summer2019ReferenceUrls, "https://prtimes.jp/main/html/rd/p/000002051.000014827.html"],
    "startDate": "2019-08-24",
    "titleJa": "カードファイト!! ヴァンガード 新右衛門編",
    "titleZhHant": "卡片戰鬥先導者 新右衛門篇",
    "titleRomaji": "Cardfight!! Vanguard: Shinemon-hen",
    "officialSiteUrl": "https://anime.cf-vanguard.com/",
    "animeThemesUrl": "https://animethemes.moe/anime/cardfight_vanguard_shinemon_hen",
    "identifierSource": {
      "label": "AnimeThemes：作品識別交叉連結",
      "url": "https://api.animethemes.moe/anime/cardfight_vanguard_shinemon_hen?include=resources",
      "language": "en"
    },
    "broadcastTimeJst": "08:00",
    "themes": [
      {
        "type": "OP",
        "sequence": 1,
        "titleJa": "Lead the way",
        "artistDisplayName": "相羽あいな",
        "releaseDate": "2019-10-16",
        "followUp": [
          {
            "fields": [
              "recordings"
            ],
            "note": "已知第19話是編號回顧。逐話表將該話列作「曲なし」，常規曲目總表仍涵蓋該話。",
            "resumeWhen": "待可查閱的日本原播或授權第19話開場／結尾，核對各欄實際用曲與剪輯。",
            "checkedAt": "2026-11-16"
          }
        ],
        "songId": "cardfight-vanguard-shinemon-hen-op-1-song",
        "seasonIds": [
          "2019-summer",
          "2019-fall",
          "2020-winter"
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "label": "《卡片戰鬥先導者 新右衛門篇》第一方音樂資料：曲目、用途與演唱版本",
            "url": "https://bushiroad-music.com/musics/brmm-10211/",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-16"
          },
          {
            "label": "AnimeThemes",
            "url": "https://animethemes.moe/anime/cardfight_vanguard_shinemon_hen",
            "language": "en",
            "role": "cross_check",
            "verifiedAt": "2026-09-07"
          },
          {
            "url": "https://www.youtube.com/watch?v=YwssMJO4T8s",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "label": "動畫官方網站",
            "url": "https://anime.cf-vanguard.com/",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-09-07"
          },
          {
            "label": "株式会社ブシロード（刊載：PR TIMES）：原文歌曲與用途",
            "url": "https://prtimes.jp/main/html/rd/p/000002051.000014827.html",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-10-31"
          },
          {
            "label": "アニメイトタイムズ：原文歌曲與用途",
            "url": "https://www.animatetimes.com/news/details.php?id=1566534108",
            "language": "ja",
            "role": "cross_check",
            "verifiedAt": "2026-10-31"
          },
          {
            "url": "https://bushiroad.com/media/8521",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://bushiroad.com/media/10674",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.mau2.com/anime/cardfightvanguard-r2-3",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://cal.syoboi.jp/tid/5409/goods",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1809060311",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1809060316",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1809060545",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "lastVerifiedAt": "2026-11-16",
        "evidence": [
          {
            "target": "song",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://prtimes.jp/main/html/rd/p/000002051.000014827.html"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "anime_use",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://prtimes.jp/main/html/rd/p/000002051.000014827.html"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "song",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.animatetimes.com/news/details.php?id=1566534108"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "anime_use",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://www.animatetimes.com/news/details.php?id=1566534108"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://bushiroad.com/media/8521",
              "https://bushiroad-music.com/musics/brmm-10211/",
              "https://bushiroad.com/media/10674",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3",
              "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://bushiroad.com/media/8521",
              "https://bushiroad-music.com/musics/brmm-10211/",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=YwssMJO4T8s",
              "https://cal.syoboi.jp/tid/5409/goods"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "brmm-10211"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "brmm-10212"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1809060316"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1809060316"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1809060545"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1809060545"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/",
              "https://music.apple.com/hk/album/1809060311"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1809060311"
          },
          {
            "target": "song",
            "fields": [
              "date"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=YwssMJO4T8s",
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "YwssMJO4T8s"
          }
        ],
        "id": "cardfight-vanguard-shinemon-hen-op-1",
        "links": [
          {
            "platform": "Apple Music",
            "label": "Lead the way｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1809060316",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1809060311",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
          },
          {
            "platform": "Apple Music",
            "label": "Lead the way -instrumental-｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1809060545",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1809060311",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
          }
        ],
        "usageLabel": "第1–18、20–29、31話片頭。第30話移至片尾。第19話回顧的片頭及片尾待原版覆核。",
        "credits": [
          {
            "name": "相羽あいな",
            "role": "vocals"
          },
          {
            "name": "RUCCA",
            "role": "lyrics"
          },
          {
            "name": "上松範康",
            "role": "composition"
          },
          {
            "name": "菊田大介",
            "role": "arrangement"
          }
        ],
        "recordings": [
          {
            "id": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal",
            "title": "Lead the way",
            "kind": "vocal",
            "format": "unknown"
          },
          {
            "id": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental",
            "title": "Lead the way -instrumental-",
            "kind": "instrumental",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "brmm-10211",
            "title": "Lead the way",
            "type": "single",
            "date": {
              "value": "2019-10-16",
              "precision": "day"
            },
            "artistDisplayName": "相羽あいな",
            "edition": "Blu-ray付生產限定盤 CD＋Blu-ray",
            "region": "JP",
            "tracks": [
              {
                "title": "Lead the way",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
              },
              {
                "title": "Lead the way -instrumental-",
                "position": 4,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music",
            "catalogNumber": "BRMM-10211"
          },
          {
            "id": "brmm-10212",
            "title": "Lead the way",
            "type": "single",
            "date": {
              "value": "2019-10-16",
              "precision": "day"
            },
            "artistDisplayName": "相羽あいな",
            "edition": "通常盤 CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Lead the way",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
              },
              {
                "title": "Lead the way -instrumental-",
                "position": 4,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music",
            "catalogNumber": "BRMM-10212"
          },
          {
            "id": "apple-hk-1809060311",
            "title": "Lead the way",
            "type": "ep",
            "date": {
              "value": "2019-10-16",
              "precision": "day"
            },
            "artistDisplayName": "相羽亞衣奈",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Lead the way",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
              },
              {
                "title": "Lead the way -instrumental-",
                "position": 4,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 1,
        "titleJa": "ギフト",
        "artistDisplayName": "Argonavis",
        "releaseDate": "2019-08-21",
        "credits": [
          {
            "name": "Argonavis",
            "role": "vocals"
          },
          {
            "name": "中村航",
            "role": "lyrics"
          },
          {
            "name": "白神真志朗",
            "role": "composition"
          },
          {
            "name": "廣澤優也",
            "role": "arrangement"
          }
        ],
        "followUp": [
          {
            "fields": [
              "recordings",
              "platform_availability"
            ],
            "note": "第19話為編號回顧。逐話表列「曲なし」，常規片尾總表範圍則延至第19話。實體唱片另收伴奏。",
            "resumeWhen": "待可查閱的日本原播或授權第19話結尾，並核對香港伴奏正式曲目。",
            "checkedAt": "2026-11-16"
          }
        ],
        "songId": "cardfight-vanguard-shinemon-hen-ed-1-song",
        "seasonIds": [
          "2019-summer",
          "2019-fall"
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "label": "《卡片戰鬥先導者 新右衛門篇》第一方音樂資料：曲目、用途與演唱版本",
            "url": "https://argo-bdp.com/music/post-2702/",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-16"
          },
          {
            "label": "AnimeThemes",
            "url": "https://animethemes.moe/anime/cardfight_vanguard_shinemon_hen",
            "language": "en",
            "role": "cross_check",
            "verifiedAt": "2026-09-07"
          },
          {
            "label": "動畫官方網站",
            "url": "https://anime.cf-vanguard.com/",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-09-07"
          },
          {
            "label": "株式会社ブシロード（刊載：PR TIMES）：原文歌曲與用途",
            "url": "https://prtimes.jp/main/html/rd/p/000002051.000014827.html",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-10-31"
          },
          {
            "label": "アニメイトタイムズ：原文歌曲與用途",
            "url": "https://www.animatetimes.com/news/details.php?id=1566534108",
            "language": "ja",
            "role": "cross_check",
            "verifiedAt": "2026-10-31"
          },
          {
            "url": "https://bushiroad.com/media/8521",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.tv-osaka.co.jp/onair/detail/oaid=1795612/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.mau2.com/anime/cardfightvanguard-r2-3",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://cal.syoboi.jp/tid/5409/goods",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://bushiroad-music.com/topics/567/",
            "label": "權利方配信日期及版本說明",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1806604111",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1806604114",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=JttNiFDRIbI",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=dqNNB180oDY",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          }
        ],
        "lastVerifiedAt": "2026-11-16",
        "evidence": [
          {
            "target": "song",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1-song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://prtimes.jp/main/html/rd/p/000002051.000014827.html"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "anime_use",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://prtimes.jp/main/html/rd/p/000002051.000014827.html"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "song",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1-song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.animatetimes.com/news/details.php?id=1566534108"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "anime_use",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://www.animatetimes.com/news/details.php?id=1566534108"
            ],
            "verifiedAt": "2026-10-31"
          },
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://bushiroad.com/media/8521",
              "https://argo-bdp.com/music/post-2702/",
              "https://www.tv-osaka.co.jp/onair/detail/oaid=1795612/",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3",
              "https://cal.syoboi.jp/tid/5409/goods"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://argo-bdp.com/music/post-2702/",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://argo-bdp.com/music/post-2702/",
              "https://cal.syoboi.jp/tid/5409/goods"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://argo-bdp.com/music/post-2702/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-vocal"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://argo-bdp.com/music/post-2702/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-instrumental"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://argo-bdp.com/music/post-2702/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "brmm-10206"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://argo-bdp.com/music/post-2702/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "brmm-10207"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1806604114"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1806604114"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/567/",
              "https://music.apple.com/hk/album/1806604111"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1806604111"
          },
          {
            "target": "song",
            "fields": [
              "date"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/567/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1-song"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=JttNiFDRIbI"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "JttNiFDRIbI"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind",
              "format"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=dqNNB180oDY"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-1-song-voice-concert-live"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=dqNNB180oDY"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "dqNNB180oDY"
          }
        ],
        "id": "cardfight-vanguard-shinemon-hen-ed-1",
        "links": [
          {
            "platform": "Apple Music",
            "label": "ギフト｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1806604114",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1806604111",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-vocal"
          }
        ],
        "usageLabel": "第1–18話片尾。第19話回顧的片尾待原版覆核。",
        "recordings": [
          {
            "id": "cardfight-vanguard-shinemon-hen-ed-1-song-single-vocal",
            "title": "ギフト",
            "kind": "vocal",
            "format": "unknown"
          },
          {
            "id": "cardfight-vanguard-shinemon-hen-ed-1-song-single-instrumental",
            "title": "ギフト（instrumental）",
            "kind": "instrumental",
            "format": "unknown"
          },
          {
            "id": "cardfight-vanguard-shinemon-hen-ed-1-song-voice-concert-live",
            "title": "ギフト（2nd LIVE「VOICE -星空の下の約束-」）",
            "kind": "live",
            "format": "full"
          }
        ],
        "releases": [
          {
            "id": "brmm-10206",
            "title": "STARTING OVER/ギフト",
            "type": "single",
            "date": {
              "value": "2019-08-21",
              "precision": "day"
            },
            "artistDisplayName": "Argonavis",
            "edition": "Blu-ray付生產限定盤 CD＋Blu-ray",
            "region": "JP",
            "tracks": [
              {
                "title": "ギフト",
                "position": 2,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-vocal"
              },
              {
                "title": "ギフト（instrumental）",
                "position": 5,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music",
            "catalogNumber": "BRMM-10206"
          },
          {
            "id": "brmm-10207",
            "title": "STARTING OVER/ギフト",
            "type": "single",
            "date": {
              "value": "2019-08-21",
              "precision": "day"
            },
            "artistDisplayName": "Argonavis",
            "edition": "通常盤 CD",
            "region": "JP",
            "tracks": [
              {
                "title": "ギフト",
                "position": 2,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-vocal"
              },
              {
                "title": "ギフト（instrumental）",
                "position": 5,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music",
            "catalogNumber": "BRMM-10207"
          },
          {
            "id": "apple-hk-1806604111",
            "title": "STARTING OVER/ギフト",
            "type": "ep",
            "date": {
              "value": "2019-08-21",
              "precision": "day"
            },
            "artistDisplayName": "Argonavis",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "ギフト",
                "position": 2,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-1-song-single-vocal"
              }
            ],
            "label": "Bushiroad Music"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 2,
        "titleJa": "ぼくらのターン",
        "artistDisplayName": "虹のコンキスタドール",
        "releaseDate": "2020-01-22",
        "credits": [
          {
            "name": "虹のコンキスタドール",
            "role": "vocals"
          },
          {
            "name": "浅野尚志",
            "role": "lyrics"
          },
          {
            "name": "浅野尚志",
            "role": "composition"
          },
          {
            "name": "浅野尚志",
            "role": "arrangement"
          }
        ],
        "followUp": [
          {
            "fields": [
              "recordings"
            ],
            "note": "已核原單曲、伴奏及冬季實際片尾用曲。",
            "resumeWhen": "待製作方發行片尾 TV 剪輯或確認原播剪輯與商業母帶的關係。",
            "checkedAt": "2026-11-16"
          }
        ],
        "seasonIds": [
          "2020-winter"
        ],
        "id": "cardfight-vanguard-shinemon-hen-ed-2",
        "songId": "cardfight-vanguard-shinemon-hen-ed-2-song",
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=jlX_8QPjZmY",
              "https://anime.cf-vanguard.com/vg2018-if/story/r20/",
              "https://bushiroad.com/media/10674",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3",
              "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)",
              "https://thetv.jp/news/detail/210526/p2/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-2"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=jlX_8QPjZmY",
              "https://2zicon.tokyo/discography/bokuranoturn2020/",
              "https://www.uta-net.com/song/280463/",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-2-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=jlX_8QPjZmY",
              "https://www.uta-net.com/song/280463/",
              "https://tower.jp/item/4977567"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://2zicon.tokyo/discography/bokuranoturn2020/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-vocal"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://2zicon.tokyo/discography/bokuranoturn2020/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-instrumental"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://2zicon.tokyo/discography/bokuranoturn2020/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kizm-645"
          },
          {
            "target": "release",
            "fields": [
              "catalog_number"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=jlX_8QPjZmY",
              "https://tower.jp/item/4977567"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "kizm-645"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1494454750"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1494454750"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1494454751"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1494454751"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://2zicon.tokyo/discography/bokuranoturn2020/",
              "https://music.apple.com/hk/album/1494454625"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1494454625"
          },
          {
            "target": "song",
            "fields": [
              "date"
            ],
            "sourceUrls": [
              "https://2zicon.tokyo/discography/bokuranoturn2020/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-2-song"
          },
          {
            "target": "video",
            "fields": [
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=jlX_8QPjZmY",
              "https://2zicon.tokyo/discography/bokuranoturn2020/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "jlX_8QPjZmY"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "ぼくらのターン｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1494454750",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1494454625",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-vocal"
          },
          {
            "platform": "Apple Music",
            "label": "ぼくらのターン inst｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1494454751",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1494454625",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-instrumental"
          }
        ],
        "sources": [
          {
            "url": "https://www.youtube.com/watch?v=jlX_8QPjZmY",
            "label": "權利方官方影片及簡介",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://anime.cf-vanguard.com/vg2018-if/story/r20/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://bushiroad.com/media/10674",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.mau2.com/anime/cardfightvanguard-r2-3",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://thetv.jp/news/detail/210526/p2/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://2zicon.tokyo/discography/bokuranoturn2020/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.uta-net.com/song/280463/",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://tower.jp/item/4977567",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1494454625",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1494454750",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1494454751",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "sourceMode": "explicit",
        "usageLabel": "第20–29、31話片尾，於第20話（2020/1/11）換入。第30話改用特別片尾。",
        "lastVerifiedAt": "2026-11-16",
        "recordings": [
          {
            "id": "cardfight-vanguard-shinemon-hen-ed-2-song-single-vocal",
            "title": "ぼくらのターン",
            "kind": "vocal",
            "format": "unknown"
          },
          {
            "id": "cardfight-vanguard-shinemon-hen-ed-2-song-single-instrumental",
            "title": "ぼくらのターン inst",
            "kind": "instrumental",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "kizm-645",
            "title": "ぼくらのターン",
            "type": "single",
            "date": {
              "value": "2020-01-22",
              "precision": "day"
            },
            "artistDisplayName": "虹のコンキスタドール",
            "edition": "CD＋DVD",
            "region": "JP",
            "tracks": [
              {
                "title": "ぼくらのターン",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-vocal"
              },
              {
                "title": "ぼくらのターン inst",
                "position": 2,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-instrumental"
              }
            ],
            "label": "King Records",
            "catalogNumber": "KIZM-645"
          },
          {
            "id": "apple-hk-1494454625",
            "title": "BOKURA NO TURN",
            "type": "single",
            "date": {
              "value": "2020-01-22",
              "precision": "day"
            },
            "artistDisplayName": "NIJI NO CONQUISTADOR",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "ぼくらのターン",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-vocal"
              },
              {
                "title": "ぼくらのターン inst",
                "position": 2,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-ed-2-song-single-instrumental"
              }
            ],
            "label": "King Records"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 3,
        "id": "cardfight-vanguard-shinemon-hen-ed-3",
        "titleJa": "Lead the way",
        "artistDisplayName": "相羽あいな",
        "songId": "cardfight-vanguard-shinemon-hen-op-1-song",
        "sources": [
          {
            "url": "https://zh.wikipedia.org/wiki/%E5%8D%A1%E7%89%87%E6%88%B0%E9%AC%A5%E5%85%88%E5%B0%8E%E8%80%85",
            "label": "繁中歌曲表記載第30話片尾替換",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://bushiroad.com/media/10627",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://bushiroad-music.com/musics/brmm-10211/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.b-ch.com/titles/6584/044",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.mau2.com/anime/cardfightvanguard-r2-3",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.youtube.com/watch?v=YwssMJO4T8s",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://cal.syoboi.jp/tid/5409/goods",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1809060311",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1809060316",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1809060545",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "Lead the way｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1809060316",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1809060311",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
          },
          {
            "platform": "Apple Music",
            "label": "Lead the way -instrumental-｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1809060545",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1809060311",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://bushiroad.com/media/10627",
              "https://bushiroad-music.com/musics/brmm-10211/",
              "https://www.b-ch.com/titles/6584/044",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3",
              "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)",
              "https://zh.wikipedia.org/wiki/%E5%8D%A1%E7%89%87%E6%88%B0%E9%AC%A5%E5%85%88%E5%B0%8E%E8%80%85"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-ed-3"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/",
              "https://www.youtube.com/watch?v=YwssMJO4T8s",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3",
              "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=YwssMJO4T8s",
              "https://cal.syoboi.jp/tid/5409/goods"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "brmm-10211"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "brmm-10212"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1809060316"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1809060316"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1809060545"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1809060545"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/musics/brmm-10211/",
              "https://music.apple.com/hk/album/1809060311"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1809060311"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第30話（2020/3/21）特別片尾，同話省略片頭。",
        "lastVerifiedAt": "2026-11-16",
        "credits": [
          {
            "name": "相羽あいな",
            "role": "vocals"
          },
          {
            "name": "RUCCA",
            "role": "lyrics"
          },
          {
            "name": "上松範康",
            "role": "composition"
          },
          {
            "name": "菊田大介",
            "role": "arrangement"
          }
        ],
        "recordings": [
          {
            "id": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal",
            "title": "Lead the way",
            "kind": "vocal",
            "format": "unknown"
          },
          {
            "id": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental",
            "title": "Lead the way -instrumental-",
            "kind": "instrumental",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "brmm-10211",
            "title": "Lead the way",
            "type": "single",
            "date": {
              "value": "2019-10-16",
              "precision": "day"
            },
            "artistDisplayName": "相羽あいな",
            "edition": "Blu-ray付生產限定盤 CD＋Blu-ray",
            "region": "JP",
            "tracks": [
              {
                "title": "Lead the way",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
              },
              {
                "title": "Lead the way -instrumental-",
                "position": 4,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music",
            "catalogNumber": "BRMM-10211"
          },
          {
            "id": "brmm-10212",
            "title": "Lead the way",
            "type": "single",
            "date": {
              "value": "2019-10-16",
              "precision": "day"
            },
            "artistDisplayName": "相羽あいな",
            "edition": "通常盤 CD",
            "region": "JP",
            "tracks": [
              {
                "title": "Lead the way",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
              },
              {
                "title": "Lead the way -instrumental-",
                "position": 4,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music",
            "catalogNumber": "BRMM-10212"
          },
          {
            "id": "apple-hk-1809060311",
            "title": "Lead the way",
            "type": "ep",
            "date": {
              "value": "2019-10-16",
              "precision": "day"
            },
            "artistDisplayName": "相羽亞衣奈",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "Lead the way",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-vocal"
              },
              {
                "title": "Lead the way -instrumental-",
                "position": 4,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-op-1-song-single-instrumental"
              }
            ],
            "label": "Bushiroad Music"
          }
        ],
        "releaseDate": "2019-10-16",
        "followUp": [
          {
            "fields": [
              "recordings",
              "official_video"
            ],
            "note": "第30話片尾沿用常規片頭歌曲。",
            "resumeWhen": "待權利方提供可查閱的原期第30話片尾或發行資訊，辨別正片片尾剪輯的錄音與長度。",
            "checkedAt": "2026-11-16"
          }
        ]
      },
      {
        "type": "IN",
        "sequence": 1,
        "id": "cardfight-vanguard-shinemon-hen-in-1",
        "titleJa": "マーメイド・グラフィティ",
        "artistDisplayName": "高蔵寺ヒトミ（CV：伊藤彩沙）",
        "songId": "cardfight-vanguard-shinemon-hen-in-1-song",
        "sources": [
          {
            "url": "https://bushiroad-music.com/topics/658/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://cf-vanguard.com/wordpress/wp-content/uploads/weekly_vg_191119.pdf",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://anime.cf-vanguard.com/vg2018-if/story/r20/",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://www.mau2.com/anime/cardfightvanguard-r2-3",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://blog.livedoor.jp/shusekichilovers-genius/archives/39503699.html",
            "label": "原期歌曲、名義與逐話用途交叉核對",
            "role": "cross_check",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://globe-eb.com/song2019.html",
            "label": "作品方、放送方或唱片公司正式資料",
            "role": "first_party",
            "language": "ja",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/album/1809350647",
            "label": "Apple Music HK 區發行與曲序",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1809350657",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          },
          {
            "url": "https://music.apple.com/hk/song/1809350659",
            "label": "Apple Music HK 區曲目",
            "role": "cross_check",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-16"
          }
        ],
        "links": [
          {
            "platform": "Apple Music",
            "label": "マーメイド・グラフィティ｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1809350657",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1809350647",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-vocal"
          },
          {
            "platform": "Apple Music",
            "label": "マーメイド・グラフィティ (instrumental)｜Apple Music HK",
            "url": "https://music.apple.com/hk/song/1809350659",
            "linkType": "direct_track",
            "region": "HK",
            "releaseId": "apple-hk-1809350647",
            "availability": "unknown",
            "verifiedAt": "2026-11-16",
            "recordingId": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-instrumental"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/658/",
              "https://cf-vanguard.com/wordpress/wp-content/uploads/weekly_vg_191119.pdf",
              "https://anime.cf-vanguard.com/vg2018-if/story/r20/",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3",
              "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)",
              "https://blog.livedoor.jp/shusekichilovers-genius/archives/39503699.html"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-in-1"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/658/",
              "https://globe-eb.com/song2019.html",
              "https://www.mau2.com/anime/cardfightvanguard-r2-3",
              "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-in-1-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://globe-eb.com/song2019.html",
              "https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88!!_%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89_(2018%E5%B9%B4%E3%81%AE%E3%82%A2%E3%83%8B%E3%83%A1)"
            ],
            "verifiedAt": "2026-11-16"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/658/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-vocal"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/658/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-instrumental"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1809350657"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1809350657"
          },
          {
            "target": "link",
            "fields": [
              "url"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/song/1809350659"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "https://music.apple.com/hk/song/1809350659"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "tracklist",
              "edition"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/658/",
              "https://music.apple.com/hk/album/1809350647"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "apple-hk-1809350647"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/658/",
              "https://music.apple.com/hk/song/1809350659"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-instrumental"
          },
          {
            "target": "song",
            "fields": [
              "date"
            ],
            "sourceUrls": [
              "https://bushiroad-music.com/topics/658/"
            ],
            "verifiedAt": "2026-11-16",
            "targetId": "cardfight-vanguard-shinemon-hen-in-1-song"
          }
        ],
        "sourceMode": "explicit",
        "seasonIds": [
          "2019-fall",
          "2020-winter"
        ],
        "usageLabel": "第18話（2019/12/21）由高蔵寺ヒトミ演唱，第20話（2020/1/11）在車內播放。",
        "lastVerifiedAt": "2026-11-16",
        "credits": [
          {
            "name": "高蔵寺ヒトミ（CV：伊藤彩沙）",
            "role": "vocals"
          },
          {
            "name": "磯谷佳江",
            "role": "lyrics"
          },
          {
            "name": "小野貴光",
            "role": "composition"
          },
          {
            "name": "玉木千尋",
            "role": "arrangement"
          }
        ],
        "recordings": [
          {
            "id": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-vocal",
            "title": "マーメイド・グラフィティ",
            "kind": "character",
            "format": "unknown"
          },
          {
            "id": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-instrumental",
            "title": "マーメイド・グラフィティ (instrumental)",
            "kind": "instrumental",
            "format": "unknown"
          }
        ],
        "releases": [
          {
            "id": "apple-hk-1809350647",
            "title": "マーメイド・グラフィティ",
            "type": "single",
            "date": {
              "value": "2019-12-22",
              "precision": "day"
            },
            "artistDisplayName": "高蔵寺ヒトミ(CV:伊藤彩沙)",
            "edition": "香港區數位版",
            "region": "HK",
            "tracks": [
              {
                "title": "マーメイド・グラフィティ",
                "position": 1,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-vocal"
              },
              {
                "title": "マーメイド・グラフィティ (instrumental)",
                "position": 2,
                "disc": 1,
                "recordingId": "cardfight-vanguard-shinemon-hen-in-1-song-digital-single-instrumental"
              }
            ],
            "label": "Bushiroad Music"
          }
        ],
        "releaseDate": "2019-12-22",
        "followUp": [
          {
            "fields": [
              "recordings",
              "official_video"
            ],
            "note": "已核兩次劇中使用的演唱名義及正式原曲／伴奏曲目。",
            "resumeWhen": "待原期片段或製作方錄音說明，核對兩話用曲與正式數位錄音的剪輯關係。",
            "checkedAt": "2026-11-16"
          }
        ]
      }
    ],
    "broadcastLabel": "日本原TV全31話，2019/8/24–2020/3/28。テレビ愛知・テレビ東京系列週六08:00–08:30 JST，BSテレ東 11:00，Abemaビデオ 21:00網路首播，YouTube ヴァンガードch 23:30。第1–6話屬2019夏，第7–19話屬2019秋，第20–31話屬2020冬。第19話為編號回顧，2020/1/4停播。3/8另有未編號特番。",
    "metadataSources": [
      {
        "label": "動畫官方網站：作品與播出資料",
        "url": "https://anime.cf-vanguard.com/",
        "language": "ja",
        "role": "first_party",
        "verifiedAt": "2026-09-07"
      },
      {
        "label": "AnimeThemes：作品識別交叉連結",
        "url": "https://api.animethemes.moe/anime/cardfight_vanguard_shinemon_hen?include=resources",
        "language": "en",
        "role": "identifier",
        "verifiedAt": "2026-09-07"
      },
      {
        "label": "繁體中文季度列表交叉對照",
        "url": "https://youranimes.tw/bangumi/201907",
        "language": "zh-Hant",
        "role": "localized_cross_check",
        "verifiedAt": "2026-09-07"
      },
      {
        "label": "AnimeThemes：OP／ED 曲目交叉核對",
        "url": "https://animethemes.moe/anime/cardfight_vanguard_shinemon_hen",
        "language": "en",
        "role": "theme_cross_check",
        "verifiedAt": "2026-09-07"
      },
      {
        "label": "季度首播公開來源",
        "url": "https://acgsecrets.hk/bangumi/201907/",
        "language": "zh-Hant",
        "role": "broadcast_cross_check",
        "verifiedAt": "2026-09-07"
      },
      {
        "label": "季度首播公開來源",
        "url": "https://www.kansou.me/archive/2019_summer.html",
        "language": "ja",
        "role": "broadcast_cross_check",
        "verifiedAt": "2026-09-07"
      },
      {
        "label": "季度首播公開來源",
        "url": "https://prtimes.jp/main/html/rd/p/000002051.000014827.html",
        "language": "ja",
        "role": "broadcast_cross_check",
        "verifiedAt": "2026-09-07"
      },
      {
        "label": "メディア芸術コンソーシアムJV事務局（刊載：文化庁公開報告書）：一般Vanguard節目時段（編名另以公告及原播話數核對，非淨長）",
        "url": "https://mediag.bunka.go.jp/mediag_wp/wp-content/uploads/2020/04/38_jv4.pdf",
        "language": "ja",
        "role": "broadcast_cross_check",
        "verifiedAt": "2026-10-31"
      },
      {
        "label": "Wikipedia：本篇日本原播話數與日期交叉資料（英語版另列）",
        "url": "https://en.wikipedia.org/wiki/Cardfight!!_Vanguard:_Shinemon",
        "language": "en",
        "role": "broadcast_cross_check",
        "verifiedAt": "2026-10-31"
      },
      {
        "url": "https://bushiroad.com/media/8521",
        "label": "製作方同版日本原TV首播、同日配信與各台時段",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://anime.cf-vanguard.com/vg2018-if/story/cat/shinemon/",
        "label": "動畫官方新右衛門篇日本原播集目",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://www.tv-osaka.co.jp/onair/detail/oaid=1795612/",
        "label": "テレビ大阪原播集數19及08:00–08:30時段",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://anime.cf-vanguard.com/vg2018-if/story/r20/",
        "label": "動畫官方第20話日本原播日期",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://bushiroad.com/media/10627",
        "label": "製作方原期第30話播映預告與時刻",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://bushiroad.com/media/10674",
        "label": "製作方第31話原期終映及配信時段",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://anime.cf-vanguard.com/vg2018-if/topics/2020/03/04/2298/",
        "label": "動畫官方3月8日獨立特別節目",
        "role": "first_party",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://cal.syoboi.jp/tid/5409/time",
        "label": "日本TV逐話首播、1月4日停播及重播區間",
        "role": "broadcast_cross_check",
        "language": "ja",
        "verifiedAt": "2026-11-16"
      },
      {
        "url": "https://bangumi.tv/subject/290591/ep",
        "label": "中文逐話首播日交叉核對",
        "role": "broadcast_cross_check",
        "language": "zh-Hans",
        "verifiedAt": "2026-11-16"
      }
    ],
    "metadataVerifiedAt": "2026-11-16"
  },
  {
    anilistId: 102427,
    slug: "saint-seiya-knights-of-the-zodiac",
    sourceReferenceUrls: ["https://www.kansou.me/archive/2019_summer.html"],
    startDate: "2019-07-19",
    titleJa: "聖闘士星矢: Knights of the Zodiac",
    titleZhHant: "聖鬥士星矢：黃道十二宮戰士",
    titleRomaji: "Saint Seiya: Knights of the Zodiac",
    officialSiteUrl: "https://www.universal-music.co.jp/the-struts/news/2019-06-27/",
    identifierSource: {
      label: "Wikidata：2019 年作品與外部識別交叉連結",
      url: "https://www.wikidata.org/wiki/Q65052700",
      language: "en"
    },
    broadcastLabel: "日本網絡首播／時間未整理",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "PEGASUS SEIYA",
        artistDisplayName: "The Struts",
        versionLabel: "The Struts 英文演唱版",
        releaseDate: "2019-07-19",
        credits: [
          { name: "The Struts", role: "vocals" },
          { name: "竜真知子", role: "lyrics" },
          { name: "TIM JENSEN", role: "translation" },
          { name: "松澤浩明", role: "composition" },
          { name: "山田信夫", role: "composition" },
          { name: "The Struts", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "サムバディ・ニュー",
        titleRomaji: "Somebody New",
        artistDisplayName: "The Struts",
        credits: [
          { name: "The Struts", role: "vocals" },
          { name: "The Struts", role: "lyrics" },
          { name: "The Struts", role: "composition" }
        ]
      }
    ]
  },
  {
    anilistId: 111131,
    slug: "cannon-busters",
    sourceReferenceUrls: [],
    startDate: "2019-08-15",
    titleJa: "キャノン・バスターズ",
    titleZhHant: "CANNON BUSTERS 砲彈剋星",
    titleRomaji: "Cannon Busters",
    officialSiteUrl: "https://www.satelight.co.jp/works/cannon-busters/",
    animeThemesUrl: "https://animethemes.moe/anime/cannon_busters",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/cannon_busters?include=resources",
      language: "en"
    },
    broadcastLabel: "日本網絡首播／時間未整理",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Showdown",
        artistDisplayName: "Marty Grimes、BJRNCK",
        credits: [
          { name: "Marty Grimes", role: "vocals" },
          { name: "BJRNCK", role: "vocals" }
        ]
      }
    ]
  },
  {
    anilistId: 110686,
    slug: "hero-mask-2nd-season",
    sourceReferenceUrls: ["https://youranimes.tw/animes/3505"],
    startDate: "2019-08-23",
    titleJa: "HERO MASK PartII",
    titleZhHant: "HERO MASK 英雄面具 PartII",
    titleRomaji: "Hero Mask 2nd Season",
    officialSiteUrl: "https://pierrot.jp/archive/2015/tv10_37.html",
    animeThemesUrl: "https://animethemes.moe/anime/hero_mask_2nd_season",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/hero_mask_2nd_season?include=resources",
      language: "en"
    },
    broadcastLabel: "日本網絡首播／時間未整理",
    themes: []
  },
  {
    anilistId: 110124,
    slug: "business-fish",
    localizedReferenceUrl: "https://acgsecrets.hk/bangumi/201907/",
    sourceReferenceUrls: ["https://prtimes.jp/main/html/rd/p/000000116.000023394.html"],
    startDate: "2019-07-07",
    titleJa: "ビジネスフィッシュ",
    titleZhHant: "上班族魚先生",
    titleRomaji: "Business Fish",
    officialSiteUrl: "https://prtimes.jp/main/html/rd/p/000000013.000029274.html",
    animeThemesUrl: "https://animethemes.moe/anime/business_fish",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/business_fish?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:00",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "Don't Stop Moving",
        artistDisplayName: "BUSINESS FISH",
        releaseDate: "2019-07-08",
        credits: []
      }
    ]
  },
  {
    anilistId: 128738,
    slug: "zannen-na-ikimono-jiten-2019",
    sourceReferenceUrls: ["https://youranimes.tw/animes/2896"],
    startDate: "2019-07-29",
    titleJa: "ざんねんないきもの事典 (2019)",
    titleZhHant: "殘念生物事典(3)",
    titleRomaji: "Zannen na Ikimono Jiten (2019)",
    officialSiteUrl: "https://kyodonewsprwire.jp/release/201906197698",
    identifierSource: {
      label: "AniList：2019 年夏季作品識別公開頁",
      url: "https://anilist.co/anime/128738/Zannen-na-Ikimono-Jiten-2019/",
      language: "en"
    },
    broadcastTimeJst: "09:30",
    broadcastLabel: "平日 09:30（日本；7/29～8/7）",
    themes: []
  },
  {
    anilistId: 110317,
    slug: "odoru-mowai-kun",
    localizedReferenceUrl: null,
    sourceReferenceUrls: ["https://prtimes.jp/main/html/rd/p/000000089.000002610.html"],
    startDate: "2019-07-02",
    titleJa: "おどるモワイくん",
    titleZhHant: "おどるモワイくん",
    titleRomaji: "Odoru Mowai-kun",
    officialSiteUrl: "https://www.shopro.co.jp/tv/mowai-kun/",
    identifierSource: {
      label: "AniList：作品識別公開頁",
      url: "https://anilist.co/anime/110317/odoru-mowaikun",
      language: "en"
    },
    broadcastLabel: "《おはスタ》星期二 07:05 節目內（日本）",
    themes: []
  }
];

export const curated2019SummerSeeds: CuratedCatalogAnimeSeed[] = [
  ...curated2019SummerSeedRows.map(summer2019Seed),
  {
    "catalogKey": -2019080901,
    "id": "curated-disney-muppet-babies-2018-season-2",
    "slug": "muppet-babies-2018-season-2",
    "seasonIds": [
      "2019-summer",
      "2019-fall",
      "2020-winter",
      "2020-spring",
      "2020-summer"
    ],
    "startDate": "2019-08-09",
    "titleJa": "Muppet Babies (2018) Season 2",
    "titleRomaji": "Muppet Babies (2018) Season 2",
    "editorialWeekday": 5,
    "broadcastLabel": "美國 Disney Channel 於2019/8/9 08:30 EDT/PDT首播〈The Froginizer／My Fair Animal〉。本季21組42段，常規每組兩個約11分鐘故事。2020/8/21末組為〈Sherlock Nose／Block Busters〉。香港授權平台使用《布公仔小寶貝》。",
    "status": "finished",
    "verifiedAt": "2026-11-19",
    "metadataVerifiedAt": "2026-11-19",
    "officialSiteUrl": "https://shows.disney.com/muppet-babies",
    "identifierSource": {
      "url": "https://shows.disney.com/muppet-babies",
      "label": "Disney 2018版原節目及識別",
      "language": "en"
    },
    "sourceReferenceUrls": [
      "https://shows.disney.com/muppet-babies",
      "https://d23.com/a-to-z/muppet-babies-television/",
      "https://d23.com/disney-junior-delivers-muppet-babies-plus-news-briefs/",
      "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
      "https://tv.apple.com/hk/show/%E5%B8%83%E5%85%AC%E4%BB%94%E5%B0%8F%E5%AF%B6%E8%B2%9D/umc.cmc.1777u86rpx333hk7jgzdjpx20",
      "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
      "https://tv.apple.com/pl/episode/sherlock-nose-block-busters/umc.cmc.5yohv3rwhmfmtulcbakqmx7zc?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
      "https://www.tvtango.com/listings/2019/08/09/muppet_babies_2018",
      "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
    ],
    "metadataSources": [
      {
        "url": "https://shows.disney.com/muppet-babies",
        "label": "Disney 2018版原節目及識別",
        "role": "identifier",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://d23.com/a-to-z/muppet-babies-television/",
        "label": "Disney D23 2018版、半小時格式及原英語片頭演唱",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://d23.com/disney-junior-delivers-muppet-babies-plus-news-briefs/",
        "label": "Disney D23 第2季2019/8/9 08:30 EDT/PDT首播公告",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
        "label": "香港 Disney+ 原版第2季21組故事及各上下段",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tv.apple.com/hk/show/%E5%B8%83%E5%85%AC%E4%BB%94%E5%B0%8F%E5%AF%B6%E8%B2%9D/umc.cmc.1777u86rpx333hk7jgzdjpx20",
        "label": "香港正版節目名稱《布公仔小寶貝》",
        "role": "first_party",
        "language": "zh-Hant",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
        "label": "Apple TV 原版第2季首組標示23分鐘",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tv.apple.com/pl/episode/sherlock-nose-block-busters/umc.cmc.5yohv3rwhmfmtulcbakqmx7zc?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
        "label": "Apple TV 原版第21組兩段及2020/8/21末組",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.tvtango.com/listings/2019/08/09/muppet_babies_2018",
        "label": "同期2019/8/9 08:30 Disney Channel 首播組",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
        "label": "第2季42段原播日期交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      }
    ],
    "themes": [
      {
        "id": "muppet-babies-2018-season-2-op-1",
        "type": "OP",
        "sequence": 1,
        "titleJa": "Muppet Babies Theme 2018",
        "songId": "muppet-babies-theme-2018",
        "artistDisplayName": "Renée Elise Goldsberry",
        "seasonIds": [
          "2019-summer",
          "2019-fall",
          "2020-winter",
          "2020-spring",
          "2020-summer"
        ],
        "usageLabel": "2018版第2季原英語常規片頭，2019/8/9至2020/8/21。2018年原聲專輯第1曲為約61秒正式發行音源。",
        "credits": [
          {
            "name": "Michelle Lewis",
            "role": "songwriting"
          },
          {
            "name": "Kay Hanley",
            "role": "songwriting"
          },
          {
            "name": "Dan Petty",
            "role": "songwriting"
          },
          {
            "name": "Hank Saroyan",
            "role": "songwriting"
          },
          {
            "name": "Robert J. Walsh",
            "role": "songwriting"
          },
          {
            "name": "Tom Warburton",
            "role": "songwriting"
          },
          {
            "name": "Eric Shaw",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://d23.com/a-to-z/muppet-babies-television/",
            "label": "Disney D23 2018版、半小時格式及原英語片頭演唱",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://d23.com/disney-junior-delivers-muppet-babies-plus-news-briefs/",
            "label": "Disney D23 第2季2019/8/9 08:30 EDT/PDT首播公告",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=YH05Ifch-Fc",
            "label": "Walt Disney Records 2018錄音版演唱與合併詞曲署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/disney-junior-music-muppet-babies/1440716354",
            "label": "香港 Apple Music 原聲專輯、日期及16曲曲表",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357",
            "label": "香港 Apple Music 原聲專輯第1曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://muppet.fandom.com/wiki/Muppet_Babies_Theme",
            "label": "1984與2018版同源主題、片頭演唱及其他版本交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=kUT_50RhjIM",
            "label": "Disney Junior 正式片頭影片的標題及發布名義",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://d23.com/a-to-z/muppet-babies-television/",
              "https://d23.com/disney-junior-delivers-muppet-babies-plus-news-briefs/",
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.youtube.com/watch?v=YH05Ifch-Fc",
              "https://music.apple.com/hk/album/disney-junior-music-muppet-babies/1440716354",
              "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357",
              "https://muppet.fandom.com/wiki/Muppet_Babies_Theme",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-theme-2018"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://d23.com/a-to-z/muppet-babies-television/",
              "https://d23.com/disney-junior-delivers-muppet-babies-plus-news-briefs/",
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.youtube.com/watch?v=YH05Ifch-Fc",
              "https://music.apple.com/hk/album/disney-junior-music-muppet-babies/1440716354",
              "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357",
              "https://muppet.fandom.com/wiki/Muppet_Babies_Theme",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-op-1"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://d23.com/a-to-z/muppet-babies-television/",
              "https://www.youtube.com/watch?v=YH05Ifch-Fc"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357",
              "https://www.youtube.com/watch?v=YH05Ifch-Fc"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-theme-2018-walt-disney-records"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/disney-junior-music-muppet-babies/1440716354",
              "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-disney-junior-music-2018-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=kUT_50RhjIM"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "kUT_50RhjIM"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=YH05Ifch-Fc"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "YH05Ifch-Fc"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "muppet-babies-theme-2018-walt-disney-records",
            "title": "Muppet Babies Theme 2018（2018 Walt Disney Records 原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "muppet-babies-disney-junior-music-2018-hk",
            "title": "Disney Junior Music: Muppet Babies",
            "artistDisplayName": "Cast - Muppet Babies",
            "type": "soundtrack",
            "region": "HK",
            "label": "Walt Disney Records",
            "date": {
              "value": "2018-02-23",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Muppet Babies Theme 2018",
                "recordingId": "muppet-babies-theme-2018-walt-disney-records",
                "position": 1
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲專輯第1曲",
            "url": "https://music.apple.com/hk/album/muppet-babies-theme-2018/1440716354?i=1440716357",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "muppet-babies-theme-2018-walt-disney-records",
            "releaseId": "muppet-babies-disney-junior-music-2018-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recording_format",
              "releases",
              "platform_links"
            ],
            "note": "Disney D23 列三位2018版主題作者，唱片列七位合併詞曲；個別詞曲、編曲與電視片頭剪輯待原始音樂署名。香港可查另兩合輯曲位。Dance Party! 第13曲約63秒，Disney Junior: Theme Songs 第16曲約62秒；合輯與原聲音源關係尚待核對。",
            "resumeWhen": "取得原播掛字、權利方分項詞曲、ISRC 或可確定比對的各版本授權音源時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-1",
        "type": "IN",
        "sequence": 1,
        "titleJa": "Meanzo Fabulous",
        "songId": "muppet-babies-meanzo-fabulous",
        "artistDisplayName": "Gonzo、Fozzie、Animal",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第2季製作段201A〈The Froginizer〉於2019/8/9首播。扮演超級英雄時的原英語唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
            "label": "Apple TV 原版第2季首組標示23分鐘",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://muppet.fandom.com/wiki/Episode_201:_The_Froginizer_/_My_Fair_Animal",
            "label": "第201組的兩個分段唱段與角色交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_201:_The_Froginizer_/_My_Fair_Animal"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-meanzo-fabulous"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_201:_The_Froginizer_/_My_Fair_Animal"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-1"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-2",
        "type": "IN",
        "sequence": 2,
        "titleJa": "My Fair Animal",
        "songId": "muppet-babies-my-fair-animal",
        "artistDisplayName": "Piggy、Animal",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第2季製作段201B〈My Fair Animal〉於2019/8/9首播。Piggy 教 Animal 為茶會做準備。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
            "label": "Apple TV 原版第2季首組標示23分鐘",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://muppet.fandom.com/wiki/Episode_201:_The_Froginizer_/_My_Fair_Animal",
            "label": "第201組的兩個分段唱段與角色交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_201:_The_Froginizer_/_My_Fair_Animal"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-my-fair-animal"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/the-froginizer--my-fair-animal/umc.cmc.4bdauk2eezb0ez51ompchlpok?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_201:_The_Froginizer_/_My_Fair_Animal"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-2"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-3",
        "type": "IN",
        "sequence": 3,
        "titleJa": "Starship Piggy",
        "songId": "muppet-babies-starship-piggy",
        "artistDisplayName": "Piggy、Fozzie、Gonzo、Summer、Animal",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第2季製作段202A〈Starship Piggy〉於2019/8/16首播。想像太空航程中的合唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-starship-piggy"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-3"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-4",
        "type": "IN",
        "sequence": 4,
        "titleJa": "My Buddy and Me",
        "songId": "muppet-babies-my-buddy-and-me",
        "artistDisplayName": "Fozzie",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第2季製作段202B〈My Buddy〉於2019/8/16首播。Fozzie 暫借玩具兔 Buddy 時唱出。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-my-buddy-and-me"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-4"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-5",
        "type": "IN",
        "sequence": 5,
        "titleJa": "Must Be a Monster",
        "songId": "muppet-babies-must-be-a-monster",
        "artistDisplayName": "Kermit、Piggy、Fozzie、Gonzo、Summer、Animal",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第2季製作段203B〈Monster Next Door〉於2019/8/23首播。眾人以為隔壁住著怪物時合唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-must-be-a-monster"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-5"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-6",
        "type": "IN",
        "sequence": 6,
        "titleJa": "Steppity Steppity",
        "songId": "muppet-babies-steppity-steppity",
        "artistDisplayName": "Chef",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第2季製作段204A〈The Great Muppet Cook-Off〉於2019/9/27首播。烤餅乾比賽的 Chef 唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-steppity-steppity"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-6"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-7",
        "type": "IN",
        "sequence": 7,
        "titleJa": "Slow Down",
        "songId": "muppet-babies-slow-down",
        "artistDisplayName": "Summer",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第2季製作段204B〈Animal and the Egg〉於2019/9/27首播。Summer 教 Animal 輕手照顧鳥蛋。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-slow-down"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-7"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-8",
        "type": "IN",
        "sequence": 8,
        "titleJa": "Penguin with a Plan",
        "songId": "muppet-babies-penguin-with-a-plan",
        "artistDisplayName": "Summer",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第2季製作段205B〈Sparkly Star Switcheroo〉於2019/10/25首播。Summer 策劃調換畫作時演唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-penguin-with-a-plan"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-8"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-9",
        "type": "IN",
        "sequence": 9,
        "titleJa": "The Muppet Express",
        "songId": "muppet-babies-the-muppet-express",
        "artistDisplayName": "Kermit、Piggy、Fozzie、Gonzo、Summer、Animal",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第2季製作段206A〈Mystery on the Muppet Express〉於2019/11/15首播。眾人在想像列車上演唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://disney.fandom.com/wiki/Mystery_on_the_Muppet_Express",
            "label": "第206組上半及11/15首播日交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://disney.fandom.com/wiki/Mystery_on_the_Muppet_Express"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-the-muppet-express"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://disney.fandom.com/wiki/Mystery_on_the_Muppet_Express"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-9"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-10",
        "type": "IN",
        "sequence": 10,
        "titleJa": "Kick It Up A Notch",
        "songId": "muppet-babies-kick-it-up-a-notch",
        "artistDisplayName": "Jess Harnell",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第2季製作段207A〈The Karate Cub〉於2019/12/6首播。Fozzie 練習 Camilla-rate 的歌曲。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-kick-it-up-a-notch"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-10"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-11",
        "type": "IN",
        "sequence": 11,
        "titleJa": "Happy Birthday Miss Nanny",
        "songId": "muppet-babies-happy-birthday-miss-nanny",
        "artistDisplayName": "Piggy、Rowlf",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第2季製作段207B〈Don't Over Duet〉於2019/12/6首播。兩位角色準備獻唱的生日歌。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-happy-birthday-miss-nanny"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-11"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-12",
        "type": "IN",
        "sequence": 12,
        "titleJa": "Getting Away From It All",
        "songId": "muppet-babies-getting-away-from-it-all",
        "artistDisplayName": "Fozzie",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第2季製作段208A〈Run Fozzie Run〉於2019/12/13首播。Fozzie 躲進故事世界的唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-getting-away-from-it-all"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-12"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-13",
        "type": "IN",
        "sequence": 13,
        "titleJa": "I Gotta Be Me",
        "songId": "muppet-babies-i-gotta-be-me",
        "artistDisplayName": "Vinny Linguini、Rizzo",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第2季製作段208B〈My Brother Vinny〉於2019/12/13首播。兄弟同場表演。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-i-gotta-be-me"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-13"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-14",
        "type": "IN",
        "sequence": 14,
        "titleJa": "A Beautiful Friendship",
        "songId": "muppet-babies-a-beautiful-friendship",
        "artistDisplayName": "Bunsen、Beaker 2.0",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第2季製作段209A〈Beaker 2.0〉於2020/1/3首播。Bunsen 初遇機械助手的合唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/beaker-20--when-you-wish-upon-a-rizzo/umc.cmc.kth3y52ltrux7km8gii5ircd?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
            "label": "Apple TV 原版第9組兩段及分集情節",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=jI6j8MQoNJI",
            "label": "Disney Junior 官方影片明示曲名及 Beaker 2.0",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://muppet.fandom.com/wiki/Episode_209%3A_Beaker_2.0_/_When_You_Wish_Upon_a_Rizzo",
            "label": "第209組片中歌曲、唱者與段落交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/beaker-20--when-you-wish-upon-a-rizzo/umc.cmc.kth3y52ltrux7km8gii5ircd?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://www.youtube.com/watch?v=jI6j8MQoNJI",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_209%3A_Beaker_2.0_/_When_You_Wish_Upon_a_Rizzo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-a-beautiful-friendship"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/beaker-20--when-you-wish-upon-a-rizzo/umc.cmc.kth3y52ltrux7km8gii5ircd?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://www.youtube.com/watch?v=jI6j8MQoNJI",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_209%3A_Beaker_2.0_/_When_You_Wish_Upon_a_Rizzo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-14"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=jI6j8MQoNJI"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "jI6j8MQoNJI"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-15",
        "type": "IN",
        "sequence": 15,
        "titleJa": "Genie in a Lamp",
        "songId": "muppet-babies-genie-in-a-lamp",
        "artistDisplayName": "Rizzo",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第2季製作段209B〈When You Wish Upon a Rizzo〉於2020/1/3首播。Rizzo 扮演精靈時演唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/beaker-20--when-you-wish-upon-a-rizzo/umc.cmc.kth3y52ltrux7km8gii5ircd?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
            "label": "Apple TV 原版第9組兩段及分集情節",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://muppet.fandom.com/wiki/Episode_209%3A_Beaker_2.0_/_When_You_Wish_Upon_a_Rizzo",
            "label": "第209組片中歌曲、唱者與段落交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/beaker-20--when-you-wish-upon-a-rizzo/umc.cmc.kth3y52ltrux7km8gii5ircd?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_209%3A_Beaker_2.0_/_When_You_Wish_Upon_a_Rizzo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-genie-in-a-lamp"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/beaker-20--when-you-wish-upon-a-rizzo/umc.cmc.kth3y52ltrux7km8gii5ircd?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Episode_209%3A_Beaker_2.0_/_When_You_Wish_Upon_a_Rizzo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-15"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-16",
        "type": "IN",
        "sequence": 16,
        "titleJa": "You'll Get There Soon",
        "songId": "muppet-babies-youll-get-there-soon",
        "artistDisplayName": "Miss Nanny",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第2季製作段211A〈Wocka by Fozzie〉於2020/2/28首播。Miss Nanny 安慰 Fozzie 的留宿段落。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-youll-get-there-soon"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-16"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-17",
        "type": "IN",
        "sequence": 17,
        "titleJa": "Muppet Rocksplosion",
        "songId": "muppet-babies-muppet-rocksplosion",
        "artistDisplayName": "Piggy、Muppet Rocksplosion",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第2季製作段212B〈Bunsen Honeydew, Show Stopper〉於2020/3/6首播。同一段的首唱，以 Piggy 為主。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/meatball-mayhem--bunsen-honeydew-show-stopper/umc.cmc.3curzyuiqh2u2dco6xwx805mw?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
            "label": "Apple TV 原版第12組兩段及音樂演出情節",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=ubaK4F-DHv0",
            "label": "Disney Junior 官方MV標題及樂團名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://muppet.fandom.com/wiki/Muppet_Rocksplosion_%28song%29",
            "label": "同段初唱與改詞合唱的先後及角色交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/meatball-mayhem--bunsen-honeydew-show-stopper/umc.cmc.3curzyuiqh2u2dco6xwx805mw?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://www.youtube.com/watch?v=ubaK4F-DHv0",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Muppet_Rocksplosion_%28song%29"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-muppet-rocksplosion"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/meatball-mayhem--bunsen-honeydew-show-stopper/umc.cmc.3curzyuiqh2u2dco6xwx805mw?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://www.youtube.com/watch?v=ubaK4F-DHv0",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Muppet_Rocksplosion_%28song%29"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-17"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=ubaK4F-DHv0"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "ubaK4F-DHv0"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          },
          {
            "fields": [
              "video_metadata"
            ],
            "note": "官方MV與樂團歌曲相符，尚待定位影片採用段內哪一遍。",
            "resumeWhen": "取得可辨識改詞及場景的官方影片或出版方說明後核對。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-18",
        "type": "IN",
        "sequence": 18,
        "titleJa": "Muppet Rocksplosion",
        "songId": "muppet-babies-muppet-rocksplosion",
        "artistDisplayName": "Muppet Rocksplosion、Bunsen、Beaker",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第2季製作段212B〈Bunsen Honeydew, Show Stopper〉於2020/3/6首播。同一段稍後由樂團和新成員改詞重唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/meatball-mayhem--bunsen-honeydew-show-stopper/umc.cmc.3curzyuiqh2u2dco6xwx805mw?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
            "label": "Apple TV 原版第12組兩段及音樂演出情節",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://muppet.fandom.com/wiki/Muppet_Rocksplosion_%28song%29",
            "label": "同段初唱與改詞合唱的先後及角色交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/meatball-mayhem--bunsen-honeydew-show-stopper/umc.cmc.3curzyuiqh2u2dco6xwx805mw?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Muppet_Rocksplosion_%28song%29"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-muppet-rocksplosion"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://tv.apple.com/us/episode/meatball-mayhem--bunsen-honeydew-show-stopper/umc.cmc.3curzyuiqh2u2dco6xwx805mw?showId=umc.cmc.1777u86rpx333hk7jgzdjpx20",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
              "https://muppet.fandom.com/wiki/Muppet_Rocksplosion_%28song%29"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-18"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-19",
        "type": "IN",
        "sequence": 19,
        "titleJa": "We Can Fix It",
        "songId": "muppet-babies-we-can-fix-it",
        "artistDisplayName": "Kermit、Fozzie",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段213A〈Best Friends Fixer Uppers〉於2020/4/17首播。兩人做維修工作時的唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-we-can-fix-it"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-20",
        "type": "IN",
        "sequence": 20,
        "titleJa": "Two of a Kind",
        "songId": "muppet-babies-two-of-a-kind",
        "artistDisplayName": "Scooter、Skeeter",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段214A〈Win a Twin〉於2020/5/22首播。雙胞胎唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-two-of-a-kind"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-20"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-21",
        "type": "IN",
        "sequence": 21,
        "titleJa": "You'll Get Better",
        "songId": "muppet-babies-youll-get-better",
        "artistDisplayName": "Miss Nanny、Muppet Babies",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段215A〈Animal Gets the Sneezies〉於2020/6/5首播。Miss Nanny 與其他孩子為 Animal 演唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
            "label": "Disney 2020年6月原播新集台表",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-youll-get-better"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-21"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-22",
        "type": "IN",
        "sequence": 22,
        "titleJa": "Let’s Get on the Bus",
        "songId": "muppet-babies-lets-get-on-the-bus",
        "artistDisplayName": "Muppet Babies、Robin",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段215B〈Library Leapfrog〉於2020/6/5首播。Robin 參與前往圖書館的合唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
            "label": "Disney 2020年6月原播新集台表",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-lets-get-on-the-bus"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-22"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-23",
        "type": "IN",
        "sequence": 23,
        "titleJa": "Let’s Get on the Bus",
        "songId": "muppet-babies-lets-get-on-the-bus",
        "artistDisplayName": "Muppet Babies",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段216B〈Gonzonocchio〉於2020/6/19首播。前往圖書館的另一話重唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
            "label": "Disney 2020年6月原播新集台表",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-lets-get-on-the-bus"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-23"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-24",
        "type": "IN",
        "sequence": 24,
        "titleJa": "Follow Me Little Floofle",
        "songId": "muppet-babies-follow-me-little-floofle",
        "artistDisplayName": "Summer",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段217A〈Summer's Big Kerfloofle〉於2020/6/26首播。Summer 對 Floofle 的首唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
            "label": "Disney 2020年6月原播新集台表",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-follow-me-little-floofle"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-24"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-25",
        "type": "IN",
        "sequence": 25,
        "titleJa": "Follow the Leader",
        "songId": "muppet-babies-follow-me-little-floofle",
        "artistDisplayName": "Summer",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段217A〈Summer's Big Kerfloofle〉於2020/6/26首播。Summer 改詞再唱同一旋律。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
            "label": "Disney 2020年6月原播新集台表",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-follow-me-little-floofle"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-25"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-26",
        "type": "IN",
        "sequence": 26,
        "titleJa": "(So You Wanna) Be a Frog",
        "songId": "muppet-babies-so-you-wanna-be-a-frog",
        "artistDisplayName": "Carlos",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第2季製作段217B〈Frog Scouts〉於2020/6/26首播。Carlos 的青蛙童軍唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
            "label": "Disney 2020年6月原播新集台表",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-so-you-wanna-be-a-frog"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://www.detpress.com/storage/uploads/9B/E9/9BE97602-1532-CB44-3CBC-34FEEBB3E229/press-release-9-1162819.pdf",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-26"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-27",
        "type": "IN",
        "sequence": 27,
        "titleJa": "Let’s Get on the Bus",
        "songId": "muppet-babies-lets-get-on-the-bus",
        "artistDisplayName": "Muppet Babies",
        "seasonIds": [
          "2020-summer"
        ],
        "usageLabel": "第2季製作段218A〈Animal and the Magic Mummy〉於2020/7/10首播。前往博物館的重唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-lets-get-on-the-bus"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-27"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "muppet-babies-2018-season-2-in-28",
        "type": "IN",
        "sequence": 28,
        "titleJa": "Even Mummies Gotta Be Careful What They Touch",
        "songId": "muppet-babies-even-mummies-gotta-be-careful-what-they-touch",
        "artistDisplayName": "Magic Mummy、Muppet Rocksplosion",
        "seasonIds": [
          "2020-summer"
        ],
        "usageLabel": "第2季製作段218A〈Animal and the Magic Mummy〉於2020/7/10首播。木乃伊與樂團在同一段的另一首歌。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
            "label": "香港 Disney+ 原版第2季21組故事及各上下段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
            "label": "第2季各唱段、段落及角色演出交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2",
            "label": "第2季42段原播日期交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-even-mummies-gotta-be-careful-what-they-touch"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.disneyplus.com/en-hk/browse/entity-3961b209-f436-4f51-8f99-6b2de6cf39b4",
              "https://en.wikipedia.org/wiki/List_of_Muppet_Babies_%282018_TV_series%29_episodes",
              "https://thetvdb.com/series/muppet-babies-2018/seasons/official/2"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "muppet-babies-2018-season-2-in-28"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "已核正篇段落及節目所列唱者。正式詞曲編、實際各配唱者或獨立發行音源仍待核。",
            "resumeWhen": "取得對應原版掛字、Disney 樂曲資料、作曲家節目曲目表或可辨識唱段的正式發行時補。",
            "checkedAt": "2026-11-19"
          }
        ]
      }
    ],
    "titleZhHant": "布公仔小寶貝 第2季"
  },
  {
    "catalogKey": -2019070701,
    "id": "curated-spin-master-rusty-rivets-season-3",
    "slug": "rusty-rivets-season-3",
    "seasonIds": [
      "2019-summer",
      "2019-fall",
      "2020-winter",
      "2020-spring"
    ],
    "startDate": "2019-07-07",
    "titleJa": "Rusty Rivets Season 3",
    "titleRomaji": "Rusty Rivets Season 3",
    "editorialWeekday": 7,
    "broadcastLabel": "加拿大 Treehouse 有可定位的2019/7/7〈Rusty’s Dino Island〉電視排期。正版平台另載2019年6月日期與不同分組，播映或上架性質待核。美國 Nick Jr. 2020/3/2 18:00 首播第301組，2020/5/8以第326組結束。全季26組49段，包含約22分鐘單組與兩段組。香港 ViuTVsix 正式登記《小天才羅斯帝 3》。",
    "status": "finished",
    "verifiedAt": "2026-11-19",
    "metadataVerifiedAt": "2026-11-19",
    "officialSiteUrl": "https://www.intl.paramountplus.com/au/shows/video/8qQifNq65WH81zmycF1tDeWt31wAYLgh/",
    "identifierSource": {
      "url": "https://www.intl.paramountplus.com/au/shows/video/8qQifNq65WH81zmycF1tDeWt31wAYLgh/",
      "label": "Paramount+ 第3季及節目識別",
      "language": "en"
    },
    "sourceReferenceUrls": [
      "https://www.intl.paramountplus.com/au/shows/video/8qQifNq65WH81zmycF1tDeWt31wAYLgh/",
      "https://tv.apple.com/us/episode/rustys-dino-island/umc.cmc.6n2fwcy7x3fv36v8kh5gabsd1?showId=umc.cmc.6vrbhp4ewkmvsmw5wxr1ludwl",
      "https://tv.apple.com/us/episode/rusty-vs-the-dino-invasion/umc.cmc.4c7ef7n8fgeecitecv93sb9m8?showId=umc.cmc.6vrbhp4ewkmvsmw5wxr1ludwl",
      "https://www.primevideo.com/detail/0IO09MDLQHVRB21FAAKGJMEI6L",
      "https://assets.corusent.com/wp-content/uploads/2021/08/Specialty-Release-Corus-Upfront-2018_-FINAL.pdf",
      "https://assets.ctfassets.net/r3qu44etwf9a/3Zb0JpU44NqmKj5eAOwF6b/46b5fbd5af7ed4d8ff2a427fb8e4f2f0/TOY_2019_Annual_Information_Form.pdf",
      "https://www.coms-auth.hk/filemanager/en/content_1588/HKTVE_Positive_Programmes_2021.pdf",
      "https://www.nickalive.net/2020/02/nickelodeon-usas-march-2020-premiere.html",
      "https://en.wikipedia.org/wiki/List_of_Rusty_Rivets_episodes",
      "https://www.wunschliste.de/episode/1350969/rusty-rivets-die-dino-insel",
      "https://zh.wikipedia.org/wiki/Now%E5%AF%AC%E9%A0%BB%E9%9B%BB%E8%A6%96%EF%BC%8F%E9%A6%99%E6%B8%AF%E9%9B%BB%E8%A6%96%E5%A8%9B%E6%A8%82%E5%A4%96%E8%B3%BC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8"
    ],
    "metadataSources": [
      {
        "url": "https://www.intl.paramountplus.com/au/shows/video/8qQifNq65WH81zmycF1tDeWt31wAYLgh/",
        "label": "Paramount+ 第3季及節目識別",
        "role": "identifier",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tv.apple.com/us/episode/rustys-dino-island/umc.cmc.6n2fwcy7x3fv36v8kh5gabsd1?showId=umc.cmc.6vrbhp4ewkmvsmw5wxr1ludwl",
        "label": "Apple TV 正版第3季、不同分組及日期標記",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tv.apple.com/us/episode/rusty-vs-the-dino-invasion/umc.cmc.4c7ef7n8fgeecitecv93sb9m8?showId=umc.cmc.6vrbhp4ewkmvsmw5wxr1ludwl",
        "label": "Apple TV 美國末組第26集、22分鐘及2020/5/8",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.primevideo.com/detail/0IO09MDLQHVRB21FAAKGJMEI6L",
        "label": "Prime Video 正版分卷另列2019年6月平台日期",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://assets.corusent.com/wp-content/uploads/2021/08/Specialty-Release-Corus-Upfront-2018_-FINAL.pdf",
        "label": "Corus 加拿大 Treehouse 確認續訂與原版第3季",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://assets.ctfassets.net/r3qu44etwf9a/3Zb0JpU44NqmKj5eAOwF6b/46b5fbd5af7ed4d8ff2a427fb8e4f2f0/TOY_2019_Annual_Information_Form.pdf",
        "label": "Spin Master 官方年度資料列 Nick Jr. 與 Treehouse 原版權利與播出",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.coms-auth.hk/filemanager/en/content_1588/HKTVE_Positive_Programmes_2021.pdf",
        "label": "ViuTVsix 向香港主管機關登記《小天才羅斯帝 3》",
        "role": "first_party",
        "language": "zh-Hant",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.nickalive.net/2020/02/nickelodeon-usas-march-2020-premiere.html",
        "label": "美國 Nick Jr. 2020/3/2 18:00 第301組首播及3月順序",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Rusty_Rivets_episodes",
        "label": "加拿大、美國原播分開及第3季26組49段交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.wunschliste.de/episode/1350969/rusty-rivets-die-dino-insel",
        "label": "加拿大 Treehouse 2019/7/7〈Rusty’s Dino Island〉交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://zh.wikipedia.org/wiki/Now%E5%AF%AC%E9%A0%BB%E9%9B%BB%E8%A6%96%EF%BC%8F%E9%A6%99%E6%B8%AF%E9%9B%BB%E8%A6%96%E5%A8%9B%E6%A8%82%E5%A4%96%E8%B3%BC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8",
        "label": "香港 ViuTVsix 外購名稱及本地播出日期交叉",
        "role": "localized_cross_check",
        "language": "zh-Hant",
        "verifiedAt": "2026-11-19"
      }
    ],
    "themes": [
      {
        "id": "rusty-rivets-season-3-op-1",
        "type": "OP",
        "sequence": 1,
        "titleJa": "Rusty Rivets Theme",
        "songId": "rusty-rivets-theme",
        "artistDisplayName": "原英語片頭演唱名義待核",
        "seasonIds": [
          "2019-summer",
          "2019-fall",
          "2020-winter",
          "2020-spring"
        ],
        "usageLabel": "第3季原英語片頭沿用 Peter Zizzo 的系列主題。Dino Island 改詞形態見分集索引資料，逐組使用位置及原片剪輯待核。所附 Nick Jr. 影片為較早公布的系列主題。",
        "credits": [
          {
            "name": "Peter Zizzo",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.intl.paramountplus.com/au/shows/video/8qQifNq65WH81zmycF1tDeWt31wAYLgh/",
            "label": "Paramount+ 第3季首組 Rusty’s Dino Island 及第3季目錄",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.peterzizzo.com/bio",
            "label": "Peter Zizzo 本人確認為 Rusty Rivets 主題撰寫及製作",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=MRpcBBZ1h-s",
            "label": "Nick Jr. 官方原英語主題影片，2016年發佈",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=x48D1bqvlpA",
            "label": "Spin Kids 權利方第3季〈Rusty’s Meteor Madness〉原英語官方影片索引",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Rusty_Rivets_episodes",
            "label": "加拿大、美國原播分開及第3季26組49段交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.easysong.com/search/songs/song-copyright-holder-information.aspx?s=1975866",
            "label": "主題原名、Peter Zizzo 與出版授權交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://rivets.fandom.com/wiki/Rusty_Rivets_Theme_Song",
            "label": "常規片頭及 Dino Island 改詞形態交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.intl.paramountplus.com/au/shows/video/8qQifNq65WH81zmycF1tDeWt31wAYLgh/",
              "https://www.peterzizzo.com/bio",
              "https://www.youtube.com/watch?v=MRpcBBZ1h-s",
              "https://www.youtube.com/watch?v=x48D1bqvlpA",
              "https://en.wikipedia.org/wiki/List_of_Rusty_Rivets_episodes",
              "https://www.easysong.com/search/songs/song-copyright-holder-information.aspx?s=1975866",
              "https://rivets.fandom.com/wiki/Rusty_Rivets_Theme_Song"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "rusty-rivets-theme"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.intl.paramountplus.com/au/shows/video/8qQifNq65WH81zmycF1tDeWt31wAYLgh/",
              "https://www.peterzizzo.com/bio",
              "https://www.youtube.com/watch?v=MRpcBBZ1h-s",
              "https://www.youtube.com/watch?v=x48D1bqvlpA",
              "https://en.wikipedia.org/wiki/List_of_Rusty_Rivets_episodes",
              "https://www.easysong.com/search/songs/song-copyright-holder-information.aspx?s=1975866",
              "https://rivets.fandom.com/wiki/Rusty_Rivets_Theme_Song"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "rusty-rivets-season-3-op-1"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.peterzizzo.com/bio",
              "https://www.easysong.com/search/songs/song-copyright-holder-information.aspx?s=1975866"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=MRpcBBZ1h-s"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "MRpcBBZ1h-s"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recordings",
              "recording_format",
              "use_quarters",
              "releases",
              "platform_links"
            ],
            "note": "Peter Zizzo 的系列主題作者身分可核。第3季個別唱者、Dino Island 改詞首尾段、片尾用途及各平台廣播剪輯待核。Kids Superstars 曲位有獨立唱片名義。",
            "resumeWhen": "取得加拿大或美國原版第301、309、326組播出音軌及掛字、原版錄製資料或音樂出版方曲表時比對。",
            "checkedAt": "2026-11-19"
          }
        ]
      }
    ],
    "titleZhHant": "小天才羅斯帝 第3季"
  },
  {
    "catalogKey": -2019081601,
    "id": "curated-nickelodeon-blaze-and-the-monster-machines-season-5",
    "slug": "blaze-and-the-monster-machines-season-5",
    "seasonIds": [
      "2019-summer",
      "2019-fall",
      "2020-winter",
      "2020-spring",
      "2020-summer",
      "2020-fall",
      "2021-summer"
    ],
    "startDate": "2019-08-16",
    "titleJa": "Blaze and the Monster Machines Season 5",
    "titleRomaji": "Blaze and the Monster Machines Season 5",
    "editorialWeekday": 5,
    "broadcastLabel": "美國 Nickelodeon 的 Nick Jr. 時段於2019/8/16 09:00 EDT首播〈The Island of Lost Treasure〉（製作503）。第5季約22分鐘20話，最後首次播出為延至2021/7/23的製作508〈The Gold Medal Games〉。製作順序、原播順序及區域串流分季有差異。香港與台灣正版均用《旋風戰車隊》。",
    "status": "finished",
    "verifiedAt": "2026-11-19",
    "metadataVerifiedAt": "2026-11-19",
    "officialSiteUrl": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
    "identifierSource": {
      "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
      "label": "Paramount+ 正式原版第5季識別",
      "language": "en"
    },
    "sourceReferenceUrls": [
      "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
      "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
      "https://www.youtube.com/watch?v=TFd7hYBPq8I",
      "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
      "https://www.coms-auth.hk/filemanager/en/content_1588/HKTVE_Positive_Programmes_2021.pdf",
      "https://www.myvideo.net.tw/details/3/23447",
      "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
      "https://www.nickalive.net/2019/07/nickelodeon-usas-august-2019-premiere.html?m=1",
      "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html"
    ],
    "metadataSources": [
      {
        "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
        "label": "Paramount+ 正式原版第5季識別",
        "role": "identifier",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
        "label": "Apple TV 原版第5季首集及2019/8/16播出",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.youtube.com/watch?v=TFd7hYBPq8I",
        "label": "Nick Jr. UK 首集正式影片發布標題",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
        "label": "Paramount+ 加拿大列 The Gold Medal Games 為第5季並保存製作排序",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.coms-auth.hk/filemanager/en/content_1588/HKTVE_Positive_Programmes_2021.pdf",
        "label": "ViuTVsix 向香港主管機關登記《旋風戰車隊 5》",
        "role": "first_party",
        "language": "zh-Hant",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.myvideo.net.tw/details/3/23447",
        "label": "台灣正版第5季《旋風戰車隊》",
        "role": "first_party",
        "language": "zh-Hant",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
        "label": "第5季原播、各話歌曲和前後季分開交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.nickalive.net/2019/07/nickelodeon-usas-august-2019-premiere.html?m=1",
        "label": "美國2019/8/16 09:00 首播及第503製作號交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html",
        "label": "美國2021/7/23延後播出的第508製作組",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      }
    ],
    "themes": [
      {
        "id": "blaze-and-the-monster-machines-season-5-op-1",
        "type": "OP",
        "sequence": 1,
        "titleJa": "Blaze and the Monster Machines Theme Song",
        "songId": "blaze-and-the-monster-machines-theme",
        "artistDisplayName": "Kyle Gordon、Mason Rather、JP Rende",
        "seasonIds": [
          "2019-summer",
          "2019-fall",
          "2020-winter",
          "2020-spring",
          "2020-summer",
          "2020-fall",
          "2021-summer"
        ],
        "usageLabel": "原英語第5季常規片頭，原播掛字列 Kyle Gordon、Mason Rather、JP Rende 演唱。原聲第2曲以節目整體名義發行。",
        "credits": [
          {
            "name": "Mason Rather",
            "role": "songwriting"
          },
          {
            "name": "Jonathan Paul Rende",
            "role": "songwriting"
          },
          {
            "name": "Ellen Brodie Martin",
            "role": "songwriting"
          },
          {
            "name": "Jeffrey Eric Borkin",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 原版第5季首集及2019/8/16播出",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553",
            "label": "香港 Apple Music 正式原聲第2曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=w-RPvkNxd9M",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
            "label": "第503組掛字交叉，英語主題、片尾及首組插曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Blaze_and_the_Monster_Machines_Theme",
            "label": "第5季沿用第3季起原英語主題剪輯交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553",
              "https://www.youtube.com/watch?v=w-RPvkNxd9M",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Blaze_and_the_Monster_Machines_Theme"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-theme"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553",
              "https://www.youtube.com/watch?v=w-RPvkNxd9M",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Blaze_and_the_Monster_Machines_Theme"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-op-1"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind",
              "credits"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553",
              "https://www.youtube.com/watch?v=w-RPvkNxd9M"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-theme-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=w-RPvkNxd9M"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "w-RPvkNxd9M"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://www.youtube.com/watch?v=w-RPvkNxd9M"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-and-the-monster-machines-theme-rockin-ride-along",
            "title": "Blaze and the Monster Machines Theme Song（原聲發行）",
            "format": "unknown",
            "kind": "vocal",
            "credits": [
              {
                "name": "Mason Rather",
                "role": "songwriting"
              },
              {
                "name": "Jonathan Paul Rende",
                "role": "songwriting"
              },
              {
                "name": "Ellen Brodie Martin",
                "role": "songwriting"
              },
              {
                "name": "Jeffrey Eric Borkin",
                "role": "songwriting"
              }
            ]
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Blaze and the Monster Machines Theme Song",
                "position": 2,
                "recordingId": "blaze-and-the-monster-machines-theme-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第2曲",
            "url": "https://music.apple.com/hk/album/blaze-and-the-monster-machines-theme-song/1655414550?i=1655414553",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-and-the-monster-machines-theme-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "原聲合併詞曲與節目片頭演唱可核。電視剪輯、個別詞與曲及節目版次之間的錄音關係待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-ed-1",
        "type": "ED",
        "sequence": 1,
        "titleJa": "It’s Blaze",
        "songId": "blaze-its-blaze",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2019-summer",
          "2019-fall",
          "2020-winter",
          "2020-spring",
          "2020-summer",
          "2020-fall",
          "2021-summer"
        ],
        "usageLabel": "第5季原英語常規片尾唱段。原播第503及509組掛字列 Scott Krippayne、Michael “Smidi” Smith 創作，Scott Krippayne 演唱。唱片第3曲另有完整發行署名。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 原版第5季首集及2019/8/16播出",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554",
            "label": "香港 Apple Music 正式原聲第3曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=ukPi85YEtmQ",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
            "label": "第503組掛字交叉，英語主題、片尾及首組插曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits",
            "label": "第509組掛字交叉，Space Race 兩次及 Thrust",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://nickelodeon.fandom.com/wiki/It%27s_Blaze",
            "label": "原英語片尾曲名與用途交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554",
              "https://www.youtube.com/watch?v=ukPi85YEtmQ",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits",
              "https://nickelodeon.fandom.com/wiki/It%27s_Blaze"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-its-blaze"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554",
              "https://www.youtube.com/watch?v=ukPi85YEtmQ",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits",
              "https://nickelodeon.fandom.com/wiki/It%27s_Blaze"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-ed-1"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind",
              "credits"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554",
              "https://www.youtube.com/watch?v=ukPi85YEtmQ"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-its-blaze-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=ukPi85YEtmQ"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "ukPi85YEtmQ"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-its-blaze-rockin-ride-along",
            "title": "It’s Blaze（原聲發行）",
            "format": "unknown",
            "kind": "vocal",
            "credits": [
              {
                "name": "Michael Dennis Smith",
                "role": "songwriting"
              },
              {
                "name": "Jeffrey Eric Borkin",
                "role": "songwriting"
              },
              {
                "name": "Ellen Brodie Martin",
                "role": "songwriting"
              },
              {
                "name": "Scott A. Krippaehne",
                "role": "songwriting"
              }
            ]
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "It’s Blaze",
                "position": 3,
                "recordingId": "blaze-its-blaze-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第3曲",
            "url": "https://music.apple.com/hk/album/its-blaze/1655414550?i=1655414554",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-its-blaze-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "片尾原播掛字和唱片發行皆可查，唱片使用完整姓名及額外合併詞曲名單。編曲及兩種剪輯實際關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-1",
        "type": "IN",
        "sequence": 1,
        "titleJa": "Lost Treasure",
        "songId": "blaze-lost-treasure",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第1話〈The Island of Lost Treasure〉（製作503）於2019/8/16美國首播。跟隨地圖尋寶時首唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 原版第5季首集及2019/8/16播出",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=TFd7hYBPq8I",
            "label": "Nick Jr. UK 首集正式影片發布標題",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
            "label": "第503組掛字交叉，英語主題、片尾及首組插曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Lost_Treasure",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://www.youtube.com/watch?v=TFd7hYBPq8I",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Lost_Treasure"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-lost-treasure"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://www.youtube.com/watch?v=TFd7hYBPq8I",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Lost_Treasure"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-1"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Lost_Treasure"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-2",
        "type": "IN",
        "sequence": 2,
        "titleJa": "Momentum",
        "songId": "blaze-momentum",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第1話〈The Island of Lost Treasure〉（製作503）於2019/8/16美國首播。穿越守衛時的動量示範唱段。",
        "credits": [
          {
            "name": "Matthew Tishler",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 原版第5季首集及2019/8/16播出",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=TFd7hYBPq8I",
            "label": "Nick Jr. UK 首集正式影片發布標題",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314",
            "label": "香港 Apple Music 正式原聲第5曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=ohtyVrPkyPo",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
            "label": "第503組掛字交叉，英語主題、片尾及首組插曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Momentum",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://www.youtube.com/watch?v=TFd7hYBPq8I",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314",
              "https://www.youtube.com/watch?v=ohtyVrPkyPo",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Momentum"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-momentum"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://www.youtube.com/watch?v=TFd7hYBPq8I",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314",
              "https://www.youtube.com/watch?v=ohtyVrPkyPo",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Momentum"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-2"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=ohtyVrPkyPo",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Momentum"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314",
              "https://www.youtube.com/watch?v=ohtyVrPkyPo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-momentum-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-2-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=ohtyVrPkyPo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "ohtyVrPkyPo"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-momentum-rockin-ride-along",
            "title": "Momentum（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-2-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 2",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Momentum",
                "position": 5,
                "recordingId": "blaze-momentum-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第5曲",
            "url": "https://music.apple.com/hk/album/momentum/1655409304?i=1655409314",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-momentum-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-2-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-3",
        "type": "IN",
        "sequence": 3,
        "titleJa": "Lost Treasure",
        "songId": "blaze-lost-treasure",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第1話〈The Island of Lost Treasure〉（製作503）於2019/8/16美國首播。結尾飛行時重唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 原版第5季首集及2019/8/16播出",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=TFd7hYBPq8I",
            "label": "Nick Jr. UK 首集正式影片發布標題",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
            "label": "第503組掛字交叉，英語主題、片尾及首組插曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://www.youtube.com/watch?v=TFd7hYBPq8I",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-lost-treasure"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/the-island-of-lost-treasure/umc.cmc.5cahcqf67srt2a0nhtk8gggin?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://www.youtube.com/watch?v=TFd7hYBPq8I",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-3"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Island_of_Lost_Treasure"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-4",
        "type": "IN",
        "sequence": 4,
        "titleJa": "We’re On Our Way",
        "songId": "blaze-were-on-our-way",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第2話〈AJ to the Rescue〉（製作501）於2019/9/10美國首播。在救援旅程中沿用歌曲。",
        "credits": [
          {
            "name": "Neil Cleary",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477",
            "label": "香港 Apple Music 正式原聲第1曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits",
            "label": "第501組掛字交叉，旅行歌與科學用曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-were-on-our-way"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-4"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-were-on-our-way-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-were-on-our-way-rockin-ride-along",
            "title": "We're On Our Way（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "We're On Our Way",
                "position": 1,
                "recordingId": "blaze-were-on-our-way-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第1曲",
            "url": "https://music.apple.com/hk/album/were-on-our-way/1655421476?i=1655421477",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-were-on-our-way-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-5",
        "type": "IN",
        "sequence": 5,
        "titleJa": "Adaptive Traits",
        "songId": "blaze-adaptive-traits",
        "artistDisplayName": "AJ（Reed L. Shannon）",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第2話〈AJ to the Rescue〉（製作501）於2019/9/10美國首播。AJ 說明適應性特徵。",
        "credits": [
          {
            "name": "Matthew Tishler",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits",
            "label": "第501組掛字交叉，旅行歌與科學用曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Adaptive_Traits",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Adaptive_Traits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-adaptive-traits"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Adaptive_Traits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-5"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/AJ_to_the_Rescue/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Adaptive_Traits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-6",
        "type": "IN",
        "sequence": 6,
        "titleJa": "Blazing Amazing",
        "songId": "blaze-blazing-amazing",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第3話〈The Trophy Chase〉（製作502）於2019/9/11美國首播。追尋獎盃時使用歌曲。",
        "credits": [
          {
            "name": "Craig McConnell",
            "role": "songwriting"
          },
          {
            "name": "Justin Forsley",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
            "label": "香港 Apple Music 正式原聲第10曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits",
            "label": "第502組掛字交叉，Blazing Amazing 與 Photons",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-blazing-amazing"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-6"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-blazing-amazing-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-blazing-amazing-rockin-ride-along",
            "title": "Blazing Amazing（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Blazing Amazing",
                "position": 10,
                "recordingId": "blaze-blazing-amazing-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第10曲",
            "url": "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-blazing-amazing-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-7",
        "type": "IN",
        "sequence": 7,
        "titleJa": "Photons",
        "songId": "blaze-photons",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第3話〈The Trophy Chase〉（製作502）於2019/9/11美國首播。光子主題唱段。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/photons/1655414550?i=1655414872",
            "label": "香港 Apple Music 正式原聲第20曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits",
            "label": "第502組掛字交叉，Blazing Amazing 與 Photons",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/photons/1655414550?i=1655414872",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-photons"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/photons/1655414550?i=1655414872",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-7"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/photons/1655414550?i=1655414872"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-photons-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/photons/1655414550?i=1655414872"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/photons/1655414550?i=1655414872"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/photons/1655414550?i=1655414872"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-photons-rockin-ride-along",
            "title": "Photons（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Photons",
                "position": 20,
                "recordingId": "blaze-photons-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第20曲",
            "url": "https://music.apple.com/hk/album/photons/1655414550?i=1655414872",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-photons-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-8",
        "type": "IN",
        "sequence": 8,
        "titleJa": "Babysitting",
        "songId": "blaze-babysitting",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第4話〈Babysitting Heroes〉（製作504）於2019/9/12美國首播。照顧小朋友時首唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits",
            "label": "第504組掛字交叉，保母歌曲及兩次用途",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-babysitting"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-8"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-9",
        "type": "IN",
        "sequence": 9,
        "titleJa": "Gears",
        "songId": "blaze-gears",
        "artistDisplayName": "Blaze（Nolan North）",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第4話〈Babysitting Heroes〉（製作504）於2019/9/12美國首播。Blaze 唱出齒輪主題。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/gears/1655414550?i=1655414876",
            "label": "香港 Apple Music 正式原聲第21曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits",
            "label": "第504組掛字交叉，保母歌曲及兩次用途",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Gears",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/gears/1655414550?i=1655414876",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Gears"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-gears"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/gears/1655414550?i=1655414876",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Gears"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-9"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Gears"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/gears/1655414550?i=1655414876"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-gears-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/gears/1655414550?i=1655414876"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/gears/1655414550?i=1655414876"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/gears/1655414550?i=1655414876"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-gears-rockin-ride-along",
            "title": "Gears（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Gears",
                "position": 21,
                "recordingId": "blaze-gears-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第21曲",
            "url": "https://music.apple.com/hk/album/gears/1655414550?i=1655414876",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-gears-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-10",
        "type": "IN",
        "sequence": 10,
        "titleJa": "Babysitting",
        "songId": "blaze-babysitting",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "第5季第4話〈Babysitting Heroes〉（製作504）於2019/9/12美國首播。故事後段重唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits",
            "label": "第504組掛字交叉，保母歌曲及兩次用途",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-babysitting"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-10"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Babysitting_Heroes/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-11",
        "type": "IN",
        "sequence": 11,
        "titleJa": "Abra-ka-Pickle!",
        "songId": "blaze-abra-ka-pickle",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第5季第5話〈Abra-Ka-Pickle!〉（製作505）於2019/10/25美國首播。Pickle 的魔術故事首唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
            "label": "香港 Apple Music 正式原聲第20曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-abra-ka-pickle"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-11"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-abra-ka-pickle-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-2-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-abra-ka-pickle-rockin-ride-along",
            "title": "Abra-ka-Pickle!（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-2-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 2",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Abra-ka-Pickle!",
                "position": 20,
                "recordingId": "blaze-abra-ka-pickle-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第20曲",
            "url": "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-abra-ka-pickle-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-2-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-12",
        "type": "IN",
        "sequence": 12,
        "titleJa": "Measure It",
        "songId": "blaze-measure-it",
        "artistDisplayName": "Blaze（Nolan North）",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第5季第5話〈Abra-Ka-Pickle!〉（製作505）於2019/10/25美國首播。量度主題唱段。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Measure_It",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Measure_It"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-measure-it"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Measure_It"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-12"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Measure_It"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-13",
        "type": "IN",
        "sequence": 13,
        "titleJa": "Abra-ka-Pickle!",
        "songId": "blaze-abra-ka-pickle",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第5季第5話〈Abra-Ka-Pickle!〉（製作505）於2019/10/25美國首播。同話重唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
            "label": "香港 Apple Music 正式原聲第20曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-abra-ka-pickle"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-13"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-abra-ka-pickle-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-2-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-abra-ka-pickle-rockin-ride-along",
            "title": "Abra-ka-Pickle!（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-2-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 2",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Abra-ka-Pickle!",
                "position": 20,
                "recordingId": "blaze-abra-ka-pickle-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第20曲",
            "url": "https://music.apple.com/hk/album/abra-ka-pickle/1655409304?i=1655409920",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-abra-ka-pickle-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-2-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-14",
        "type": "IN",
        "sequence": 14,
        "titleJa": "Blazing Amazing",
        "songId": "blaze-blazing-amazing",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第5季第6話〈Toy Trouble!〉（製作506）於2019/12/6美國首播。玩具故事再用同曲。",
        "credits": [
          {
            "name": "Craig McConnell",
            "role": "songwriting"
          },
          {
            "name": "Justin Forsley",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
            "label": "香港 Apple Music 正式原聲第10曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Toy_Trouble%21",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits",
            "label": "第502組掛字交叉，Blazing Amazing 與 Photons",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Toy_Trouble%21",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-blazing-amazing"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Toy_Trouble%21",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-14"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Toy_Trouble%21",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Trophy_Chase/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-blazing-amazing-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-blazing-amazing-rockin-ride-along",
            "title": "Blazing Amazing（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Blazing Amazing",
                "position": 10,
                "recordingId": "blaze-blazing-amazing-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第10曲",
            "url": "https://music.apple.com/hk/album/blazing-amazing/1655414550?i=1655414747",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-blazing-amazing-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-15",
        "type": "IN",
        "sequence": 15,
        "titleJa": "Absorption",
        "songId": "blaze-absorption",
        "artistDisplayName": "Blaze（Nolan North）",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第5季第6話〈Toy Trouble!〉（製作506）於2019/12/6美國首播。吸收主題唱段。",
        "credits": [
          {
            "name": "Matthew Tishler",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Absorption",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Absorption"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-absorption"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Absorption"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-15"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Absorption"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-16",
        "type": "IN",
        "sequence": 16,
        "titleJa": "Monster Machine Friends",
        "songId": "blaze-monster-machine-friends",
        "artistDisplayName": "原英語唱段演唱名義待核",
        "seasonIds": [
          "2019-fall"
        ],
        "usageLabel": "第5季第6話〈Toy Trouble!〉（製作506）於2019/12/6美國首播。本話另一段友情歌曲。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-monster-machine-friends"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-16"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-17",
        "type": "IN",
        "sequence": 17,
        "titleJa": "Deep Sea Grand Prix",
        "songId": "blaze-deep-sea-grand-prix",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第7話〈Deep Sea Grand Prix〉（製作510）於2020/1/31美國首播。海底賽車故事的同名唱段。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657",
            "label": "香港 Apple Music 正式原聲第16曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits",
            "label": "第510組掛字交叉，海底賽車及 Floating",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-deep-sea-grand-prix"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-17"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-deep-sea-grand-prix-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-deep-sea-grand-prix-rockin-ride-along",
            "title": "Deep Sea Grand Prix（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Deep Sea Grand Prix",
                "position": 16,
                "recordingId": "blaze-deep-sea-grand-prix-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第16曲",
            "url": "https://music.apple.com/hk/album/deep-sea-grand-prix/1655421476?i=1655421657",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-deep-sea-grand-prix-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-18",
        "type": "IN",
        "sequence": 18,
        "titleJa": "Floating",
        "songId": "blaze-floating",
        "artistDisplayName": "Blaze（Nolan North）",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第7話〈Deep Sea Grand Prix〉（製作510）於2020/1/31美國首播。浮力主題唱段。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits",
            "label": "第510組掛字交叉，海底賽車及 Floating",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Floating",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Floating"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-floating"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Floating"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-18"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Deep_Sea_Grand_Prix/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Floating"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-19",
        "type": "IN",
        "sequence": 19,
        "titleJa": "Litter Critter",
        "songId": "blaze-litter-critter",
        "artistDisplayName": "“Weird Al” Yankovic",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第8話〈Recycling Power!〉（製作511）於2020/2/11美國首播。Litter Critter 的角色歌曲。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=2ox3oOAWu_M",
            "label": "Nick Jr. Recycling Power! 正式節目片段發布索引",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490",
            "label": "香港 Apple Music 正式原聲第7曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=8t4OhNsHBjs",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Litter_Critter_%28song%29",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.youtube.com/watch?v=2ox3oOAWu_M",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490",
              "https://www.youtube.com/watch?v=8t4OhNsHBjs",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Litter_Critter_%28song%29"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-litter-critter"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.youtube.com/watch?v=2ox3oOAWu_M",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490",
              "https://www.youtube.com/watch?v=8t4OhNsHBjs",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Litter_Critter_%28song%29"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-19"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=8t4OhNsHBjs",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Litter_Critter_%28song%29"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490",
              "https://www.youtube.com/watch?v=8t4OhNsHBjs"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-litter-critter-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=8t4OhNsHBjs"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "8t4OhNsHBjs"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-litter-critter-rockin-ride-along",
            "title": "Litter Critter（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Litter Critter",
                "position": 7,
                "recordingId": "blaze-litter-critter-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第7曲",
            "url": "https://music.apple.com/hk/album/litter-critter/1655421476?i=1655421490",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-litter-critter-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-20",
        "type": "IN",
        "sequence": 20,
        "titleJa": "Recycle",
        "songId": "blaze-recycle",
        "artistDisplayName": "Blaze、AJ",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第8話〈Recycling Power!〉（製作511）於2020/2/11美國首播。回收貨車出發時首唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=2ox3oOAWu_M",
            "label": "Nick Jr. Recycling Power! 正式節目片段發布索引",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
            "label": "香港 Apple Music 正式原聲第6曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Recycle",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.youtube.com/watch?v=2ox3oOAWu_M",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Recycle"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-recycle"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.youtube.com/watch?v=2ox3oOAWu_M",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Recycle"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-20"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-recycle-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-recycle-rockin-ride-along",
            "title": "Recycle（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Recycle",
                "position": 6,
                "recordingId": "blaze-recycle-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第6曲",
            "url": "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-recycle-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-21",
        "type": "IN",
        "sequence": 21,
        "titleJa": "Recycle",
        "songId": "blaze-recycle",
        "artistDisplayName": "Blaze、AJ、Litter Critter",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第8話〈Recycling Power!〉（製作511）於2020/2/11美國首播。在回收物做的賽道再唱。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=2ox3oOAWu_M",
            "label": "Nick Jr. Recycling Power! 正式節目片段發布索引",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
            "label": "香港 Apple Music 正式原聲第6曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Recycling_Power%21",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.youtube.com/watch?v=2ox3oOAWu_M",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Recycling_Power%21"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-recycle"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.youtube.com/watch?v=2ox3oOAWu_M",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Recycling_Power%21"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-21"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-recycle-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-recycle-rockin-ride-along",
            "title": "Recycle（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Recycle",
                "position": 6,
                "recordingId": "blaze-recycle-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第6曲",
            "url": "https://music.apple.com/hk/album/recycle/1655421476?i=1655421489",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-recycle-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-22",
        "type": "IN",
        "sequence": 22,
        "titleJa": "Space Race",
        "songId": "blaze-space-race",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第9話〈The Great Space Race〉（製作509）於2020/2/13美國首播。太空競速首唱。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
            "label": "香港 Apple Music 正式原聲第9曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=OVdupKZMGoI",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits",
            "label": "第509組掛字交叉，Space Race 兩次及 Thrust",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
              "https://www.youtube.com/watch?v=OVdupKZMGoI",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-space-race"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
              "https://www.youtube.com/watch?v=OVdupKZMGoI",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-22"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=OVdupKZMGoI",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
              "https://www.youtube.com/watch?v=OVdupKZMGoI"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-space-race-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=OVdupKZMGoI"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "OVdupKZMGoI"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-space-race-rockin-ride-along",
            "title": "Space Race（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Space Race",
                "position": 9,
                "recordingId": "blaze-space-race-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第9曲",
            "url": "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-space-race-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-23",
        "type": "IN",
        "sequence": 23,
        "titleJa": "Thrust",
        "songId": "blaze-thrust",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第9話〈The Great Space Race〉（製作509）於2020/2/13美國首播。推力主題唱段。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits",
            "label": "第509組掛字交叉，Space Race 兩次及 Thrust",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-thrust"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-23"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-24",
        "type": "IN",
        "sequence": 24,
        "titleJa": "Space Race",
        "songId": "blaze-space-race",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第9話〈The Great Space Race〉（製作509）於2020/2/13美國首播。同話後段重唱。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
            "label": "香港 Apple Music 正式原聲第9曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=OVdupKZMGoI",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits",
            "label": "第509組掛字交叉，Space Race 兩次及 Thrust",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
              "https://www.youtube.com/watch?v=OVdupKZMGoI",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-space-race"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
              "https://www.youtube.com/watch?v=OVdupKZMGoI",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-24"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=OVdupKZMGoI",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Great_Space_Race/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
              "https://www.youtube.com/watch?v=OVdupKZMGoI"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-space-race-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-space-race-rockin-ride-along",
            "title": "Space Race（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Space Race",
                "position": 9,
                "recordingId": "blaze-space-race-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第9曲",
            "url": "https://music.apple.com/hk/album/space-race/1655421476?i=1655421493",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-space-race-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-25",
        "type": "IN",
        "sequence": 25,
        "titleJa": "Ice Cream",
        "songId": "blaze-ice-cream",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第10話〈Ice Cream Monster Machine〉（製作507）於2020/3/10美國首播。到訪雪糕派對的首唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
            "label": "香港 Apple Music 正式原聲第14曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
            "label": "第507組掛字交叉，雪糕歌曲兩次及物態歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-ice-cream"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-25"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-ice-cream-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-ice-cream-rockin-ride-along",
            "title": "Ice Cream（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Ice Cream",
                "position": 14,
                "recordingId": "blaze-ice-cream-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第14曲",
            "url": "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-ice-cream-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-26",
        "type": "IN",
        "sequence": 26,
        "titleJa": "Solid, Liquid, or Gas",
        "songId": "blaze-solid-liquid-or-gas",
        "artistDisplayName": "Blaze（Nolan North）",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第10話〈Ice Cream Monster Machine〉（製作507）於2020/3/10美國首播。Blaze 物態示範唱段。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656",
            "label": "香港 Apple Music 正式原聲第15曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
            "label": "第507組掛字交叉，雪糕歌曲兩次及物態歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Solid%2C_Liquid_or_Gas",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Solid%2C_Liquid_or_Gas"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-solid-liquid-or-gas"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Solid%2C_Liquid_or_Gas"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-26"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Solid%2C_Liquid_or_Gas"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-solid-liquid-or-gas-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-solid-liquid-or-gas-rockin-ride-along",
            "title": "Solid, Liquid, or Gas（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Solid, Liquid, or Gas",
                "position": 15,
                "recordingId": "blaze-solid-liquid-or-gas-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第15曲",
            "url": "https://music.apple.com/hk/album/solid-liquid-or-gas/1655421476?i=1655421656",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-solid-liquid-or-gas-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-27",
        "type": "IN",
        "sequence": 27,
        "titleJa": "Ice Cream",
        "songId": "blaze-ice-cream",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第10話〈Ice Cream Monster Machine〉（製作507）於2020/3/10美國首播。同話另一段重唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
            "label": "香港 Apple Music 正式原聲第14曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
            "label": "第507組掛字交叉，雪糕歌曲兩次及物態歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream",
            "label": "原英語個別歌曲、角色或使用段落的交叉資料",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-ice-cream"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-27"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream_Monster_Machine/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Ice_Cream"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-ice-cream-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-ice-cream-rockin-ride-along",
            "title": "Ice Cream（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Ice Cream",
                "position": 14,
                "recordingId": "blaze-ice-cream-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第14曲",
            "url": "https://music.apple.com/hk/album/ice-cream/1655421476?i=1655421655",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-ice-cream-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-28",
        "type": "IN",
        "sequence": 28,
        "titleJa": "Mechanic Team",
        "songId": "blaze-mechanic-team",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第11話〈The Mechanic Team!〉（製作512）於2020/3/12美國首播。機械維修隊故事的同名唱段。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits",
            "label": "第512組掛字交叉，Mechanic Team 及 Systems",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-mechanic-team"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-28"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-29",
        "type": "IN",
        "sequence": 29,
        "titleJa": "Systems",
        "songId": "blaze-systems",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-winter"
        ],
        "usageLabel": "第5季第11話〈The Mechanic Team!〉（製作512）於2020/3/12美國首播。機械系統主題唱段。",
        "credits": [
          {
            "name": "Matthew Tishler",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/systems/1655421476?i=1655421491",
            "label": "香港 Apple Music 正式原聲第8曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits",
            "label": "第512組掛字交叉，Mechanic Team 及 Systems",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/systems/1655421476?i=1655421491",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-systems"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/systems/1655421476?i=1655421491",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-29"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Mechanic_Team%21/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/systems/1655421476?i=1655421491"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-systems-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/systems/1655421476?i=1655421491"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/systems/1655421476?i=1655421491"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/systems/1655421476?i=1655421491"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-systems-rockin-ride-along",
            "title": "Systems（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Systems",
                "position": 8,
                "recordingId": "blaze-systems-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第8曲",
            "url": "https://music.apple.com/hk/album/systems/1655421476?i=1655421491",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-systems-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "正篇首唱、重唱及唱片曲位分開核對。個別詞曲編、實際電視剪輯與唱片音軌版本關係仍待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-30",
        "type": "IN",
        "sequence": 30,
        "titleJa": "Police Anthem",
        "songId": "blaze-police-anthem",
        "artistDisplayName": "器樂演出名義待核",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第5季第12話〈Blazing Amazing Stories〉（製作514）於2020/4/24美國首播。警察故事中的伴奏使用。正式唱片版屬另一已核實曲位。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-police-anthem"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-30"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-31",
        "type": "IN",
        "sequence": 31,
        "titleJa": "Observation",
        "songId": "blaze-observation",
        "artistDisplayName": "原英語唱段演唱名義待核",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第5季第12話〈Blazing Amazing Stories〉（製作514）於2020/4/24美國首播。觀察主題唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-observation"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-31"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-32",
        "type": "IN",
        "sequence": 32,
        "titleJa": "Big Rig Roll",
        "songId": "blaze-big-rig-roll",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第5季第13話〈Big Rig Blaze〉（製作515）於2020/5/15美國首播。Blaze 變成大卡車後的唱段。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486",
            "label": "香港 Apple Music 正式原聲第5曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=_dxRWQKJbC4",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits",
            "label": "第515製作話掛字交叉，大卡車與力量歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486",
              "https://www.youtube.com/watch?v=_dxRWQKJbC4",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-big-rig-roll"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486",
              "https://www.youtube.com/watch?v=_dxRWQKJbC4",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-32"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=_dxRWQKJbC4",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486",
              "https://www.youtube.com/watch?v=_dxRWQKJbC4"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-big-rig-roll-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=_dxRWQKJbC4"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "_dxRWQKJbC4"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-big-rig-roll-rockin-ride-along",
            "title": "Big Rig Roll（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Big Rig Roll",
                "position": 5,
                "recordingId": "blaze-big-rig-roll-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第5曲",
            "url": "https://music.apple.com/hk/album/big-rig-roll/1655421476?i=1655421486",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-big-rig-roll-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-33",
        "type": "IN",
        "sequence": 33,
        "titleJa": "Force",
        "songId": "blaze-force",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第5季第13話〈Big Rig Blaze〉（製作515）於2020/5/15美國首播。棉花糖機段落的改編，Vol. 3 第19曲。",
        "credits": [
          {
            "name": "Andrew Mendelson",
            "role": "songwriting"
          },
          {
            "name": "Paul Rhim",
            "role": "songwriting"
          },
          {
            "name": "Pinky Turzo",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/force/1655421476?i=1655421661",
            "label": "香港 Apple Music 正式原聲第19曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits",
            "label": "第515製作話掛字交叉，大卡車與力量歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Force",
            "label": "原曲、Big Rig Blaze 改編、Vol. 3 第19曲及後期其他改編交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/force/1655421476?i=1655421661",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Force"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-force"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/force/1655421476?i=1655421661",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Force"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-33"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Big_Rig_Blaze/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/force/1655421476?i=1655421661"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-force-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/force/1655421476?i=1655421661"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/force/1655421476?i=1655421661"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/force/1655421476?i=1655421661"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-force-rockin-ride-along",
            "title": "Force（原聲發行）",
            "format": "unknown",
            "kind": "remix"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Force",
                "position": 19,
                "recordingId": "blaze-force-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第19曲",
            "url": "https://music.apple.com/hk/album/force/1655421476?i=1655421661",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-force-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          },
          {
            "fields": [
              "recording_format",
              "recordings"
            ],
            "note": "Vol. 3 第19曲按本話改編核對。Vol. 5 Wild West Remix 與其他節目的版本另有曲位。",
            "resumeWhen": "取得各次電視播出及權利方分版音源後比對。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-34",
        "type": "IN",
        "sequence": 34,
        "titleJa": "Burn Rubber",
        "songId": "blaze-burn-rubber",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第5季第14話〈The Big Balloon Rescue〉（製作513）於2020/6/12美國首播。趕往救援的旅途歌曲。",
        "credits": [
          {
            "name": "Seann Bowe",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884",
            "label": "香港 Apple Music 正式原聲第24曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits",
            "label": "第513製作話掛字交叉，速度計及旅途歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-burn-rubber"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-34"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-burn-rubber-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-burn-rubber-rockin-ride-along",
            "title": "Burn Rubber（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Burn Rubber",
                "position": 24,
                "recordingId": "blaze-burn-rubber-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第24曲",
            "url": "https://music.apple.com/hk/album/burn-rubber/1655414550?i=1655414884",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-burn-rubber-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-35",
        "type": "IN",
        "sequence": 35,
        "titleJa": "Speedometer",
        "songId": "blaze-speedometer",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第5季第14話〈The Big Balloon Rescue〉（製作513）於2020/6/12美國首播。速度計示範唱段。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646",
            "label": "香港 Apple Music 正式原聲第10曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=lffHV9TmERE",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits",
            "label": "第513製作話掛字交叉，速度計及旅途歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646",
              "https://www.youtube.com/watch?v=lffHV9TmERE",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-speedometer"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646",
              "https://www.youtube.com/watch?v=lffHV9TmERE",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-35"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=lffHV9TmERE",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646",
              "https://www.youtube.com/watch?v=lffHV9TmERE"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-speedometer-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=lffHV9TmERE"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "lffHV9TmERE"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-speedometer-rockin-ride-along",
            "title": "Speedometer（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Speedometer",
                "position": 10,
                "recordingId": "blaze-speedometer-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第10曲",
            "url": "https://music.apple.com/hk/album/speedometer/1655421476?i=1655421646",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-speedometer-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-36",
        "type": "IN",
        "sequence": 36,
        "titleJa": "Monster Machine Friends",
        "songId": "blaze-monster-machine-friends",
        "artistDisplayName": "原英語唱段演唱名義待核",
        "seasonIds": [
          "2020-spring"
        ],
        "usageLabel": "第5季第14話〈The Big Balloon Rescue〉（製作513）於2020/6/12美國首播。同季第6話亦用的友情歌曲。",
        "credits": [
          {
            "name": "Jordan Reyes",
            "role": "songwriting"
          },
          {
            "name": "Aaron C. Harmon",
            "role": "songwriting"
          },
          {
            "name": "Kyle Lampi",
            "role": "songwriting"
          },
          {
            "name": "Brianne Angarole",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits",
            "label": "第513製作話掛字交叉，速度計及旅途歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-monster-machine-friends"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-36"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Big_Balloon_Rescue/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-37",
        "type": "IN",
        "sequence": 37,
        "titleJa": "Blaze On",
        "songId": "blaze-blaze-on",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-summer"
        ],
        "usageLabel": "第5季第15話〈Space Alien Adventure!〉（製作516）於2020/7/31美國首播。本話沿用的旅途歌曲。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306",
            "label": "香港 Apple Music 正式原聲第1曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Blaze_On",
            "label": "正篇用途、角色及曲位交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Blaze_On"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-blaze-on"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Blaze_On"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-37"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-blaze-on-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-2-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-blaze-on-rockin-ride-along",
            "title": "Blaze On（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-2-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 2",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Blaze On",
                "position": 1,
                "recordingId": "blaze-blaze-on-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第1曲",
            "url": "https://music.apple.com/hk/album/blaze-on/1655409304?i=1655409306",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-blaze-on-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-2-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-38",
        "type": "IN",
        "sequence": 38,
        "titleJa": "Trajectory",
        "songId": "blaze-trajectory",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-summer"
        ],
        "usageLabel": "第5季第15話〈Space Alien Adventure!〉（製作516）於2020/7/31美國首播。軌道主題唱段，沿用前季歌曲。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563",
            "label": "香港 Apple Music 正式原聲第7曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Trajectory",
            "label": "正篇用途、角色及曲位交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Trajectory"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-trajectory"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Trajectory"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-38"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-trajectory-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-trajectory-rockin-ride-along",
            "title": "Trajectory（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Trajectory",
                "position": 7,
                "recordingId": "blaze-trajectory-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第7曲",
            "url": "https://music.apple.com/hk/album/trajectory/1655414550?i=1655414563",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-trajectory-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-39",
        "type": "IN",
        "sequence": 39,
        "titleJa": "Video Game Heroes",
        "songId": "blaze-video-game-heroes",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第16話〈Video Game Heroes〉（製作518）於2020/10/2美國首播。電子遊戲故事首唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 第16話北美分集及原播日期",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
            "label": "香港 Apple Music 正式原聲第18曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=P29xJvi6uFk",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
              "https://www.youtube.com/watch?v=P29xJvi6uFk",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-video-game-heroes"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
              "https://www.youtube.com/watch?v=P29xJvi6uFk",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-39"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=P29xJvi6uFk"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
              "https://www.youtube.com/watch?v=P29xJvi6uFk"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-video-game-heroes-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=P29xJvi6uFk"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "P29xJvi6uFk"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-video-game-heroes-rockin-ride-along",
            "title": "Video Game Heroes（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Video Game Heroes",
                "position": 18,
                "recordingId": "blaze-video-game-heroes-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第18曲",
            "url": "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-video-game-heroes-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-40",
        "type": "IN",
        "sequence": 40,
        "titleJa": "Geometry",
        "songId": "blaze-geometry",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第16話〈Video Game Heroes〉（製作518）於2020/10/2美國首播。幾何主題唱段。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 第16話北美分集及原播日期",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636",
            "label": "香港 Apple Music 正式原聲第15曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=nVDW18cVwBY",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636",
              "https://www.youtube.com/watch?v=nVDW18cVwBY",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-geometry"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636",
              "https://www.youtube.com/watch?v=nVDW18cVwBY",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-40"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=nVDW18cVwBY"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636",
              "https://www.youtube.com/watch?v=nVDW18cVwBY"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-geometry-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-2/1655409304",
              "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-2-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=nVDW18cVwBY"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "nVDW18cVwBY"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-geometry-rockin-ride-along",
            "title": "Geometry（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-2-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 2",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Geometry",
                "position": 15,
                "recordingId": "blaze-geometry-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第15曲",
            "url": "https://music.apple.com/hk/album/geometry/1655409304?i=1655409636",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-geometry-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-2-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-41",
        "type": "IN",
        "sequence": 41,
        "titleJa": "Video Game Heroes",
        "songId": "blaze-video-game-heroes",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第16話〈Video Game Heroes〉（製作518）於2020/10/2美國首播。同話後段重唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
            "label": "Apple TV 第16話北美分集及原播日期",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
            "label": "香港 Apple Music 正式原聲第18曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=P29xJvi6uFk",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
              "https://www.youtube.com/watch?v=P29xJvi6uFk",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-video-game-heroes"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://tv.apple.com/us/episode/video-game-heroes/umc.cmc.72c7eyipb5tbxqw1gyqg3baet?showId=umc.cmc.2sd85x5fd0o9p43irwld0jlma",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
              "https://www.youtube.com/watch?v=P29xJvi6uFk",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-41"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=P29xJvi6uFk"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
              "https://www.youtube.com/watch?v=P29xJvi6uFk"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-video-game-heroes-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-video-game-heroes-rockin-ride-along",
            "title": "Video Game Heroes（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Video Game Heroes",
                "position": 18,
                "recordingId": "blaze-video-game-heroes-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第18曲",
            "url": "https://music.apple.com/hk/album/video-game-heroes/1655421476?i=1655421660",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-video-game-heroes-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-42",
        "type": "IN",
        "sequence": 42,
        "titleJa": "Race Around the Earth",
        "songId": "blaze-race-around-the-earth",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第17話〈The Race Around the Earth〉（製作520）於2020/10/16美國首播。環遊地球賽事首唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits",
            "label": "第520製作話掛字交叉，地球賽事及機械工程歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-race-around-the-earth"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-42"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-43",
        "type": "IN",
        "sequence": 43,
        "titleJa": "Mechanical Engineering",
        "songId": "blaze-mechanical-engineering",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第17話〈The Race Around the Earth〉（製作520）於2020/10/16美國首播。機械工程示範唱段。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758",
            "label": "香港 Apple Music 正式原聲第15曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=8ZzhdZ6r4qo",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits",
            "label": "第520製作話掛字交叉，地球賽事及機械工程歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758",
              "https://www.youtube.com/watch?v=8ZzhdZ6r4qo",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-mechanical-engineering"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758",
              "https://www.youtube.com/watch?v=8ZzhdZ6r4qo",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-43"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=8ZzhdZ6r4qo",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758",
              "https://www.youtube.com/watch?v=8ZzhdZ6r4qo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-mechanical-engineering-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=8ZzhdZ6r4qo"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "8ZzhdZ6r4qo"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-mechanical-engineering-rockin-ride-along",
            "title": "Mechanical Engineering（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Mechanical Engineering",
                "position": 15,
                "recordingId": "blaze-mechanical-engineering-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第15曲",
            "url": "https://music.apple.com/hk/album/mechanical-engineering/1655414550?i=1655414758",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-mechanical-engineering-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-44",
        "type": "IN",
        "sequence": 44,
        "titleJa": "Race Around the Earth",
        "songId": "blaze-race-around-the-earth",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第17話〈The Race Around the Earth〉（製作520）於2020/10/16美國首播。同話後段重唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits",
            "label": "第520製作話掛字交叉，地球賽事及機械工程歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-race-around-the-earth"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-44"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Race_Around_the_Earth/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-45",
        "type": "IN",
        "sequence": 45,
        "titleJa": "The Blaze Family",
        "songId": "blaze-the-blaze-family",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第18話〈The Blaze Family〉（製作517）於2020/11/6美國首播。Blaze 家庭故事首唱，唱片題名作 Blaze Family。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
            "label": "香港 Apple Music 正式原聲第20曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-the-blaze-family"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-45"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-the-blaze-family-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-the-blaze-family-rockin-ride-along",
            "title": "Blaze Family（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Blaze Family",
                "position": 20,
                "recordingId": "blaze-the-blaze-family-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第20曲",
            "url": "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-the-blaze-family-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-46",
        "type": "IN",
        "sequence": 46,
        "titleJa": "Estimation",
        "songId": "blaze-estimation",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第18話〈The Blaze Family〉（製作517）於2020/11/6美國首播。估算主題唱段。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196",
            "label": "香港 Apple Music 正式原聲第5曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Estimation",
            "label": "正篇用途、角色及曲位交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Estimation"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-estimation"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Estimation"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-46"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-estimation-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-4-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-estimation-rockin-ride-along",
            "title": "Estimation（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-4-hk",
            "title": "Rockin’ Ride-Along Songs, Vol. 4",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2023-12-22",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Estimation",
                "position": 5,
                "recordingId": "blaze-estimation-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第5曲",
            "url": "https://music.apple.com/hk/album/estimation/1720074176?i=1720074196",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-estimation-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-4-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-47",
        "type": "IN",
        "sequence": 47,
        "titleJa": "The Blaze Family",
        "songId": "blaze-the-blaze-family",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第18話〈The Blaze Family〉（製作517）於2020/11/6美國首播。同話後段重唱，唱片題名作 Blaze Family。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
            "label": "香港 Apple Music 正式原聲第20曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-the-blaze-family"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-47"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-the-blaze-family-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-the-blaze-family-rockin-ride-along",
            "title": "Blaze Family（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Blaze Family",
                "position": 20,
                "recordingId": "blaze-the-blaze-family-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第20曲",
            "url": "https://music.apple.com/hk/album/blaze-family/1655421476?i=1655421663",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-the-blaze-family-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-48",
        "type": "IN",
        "sequence": 48,
        "titleJa": "Police Anthem",
        "songId": "blaze-police-anthem",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第19話〈The Treat Thief〉（製作519）於2020/11/20美國首播。追查點心失竊的首唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
            "label": "香港 Apple Music 正式原聲第14曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits",
            "label": "第519製作話掛字交叉，警察歌曲、重唱及資料歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-police-anthem"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-48"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-police-anthem-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-4-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-police-anthem-rockin-ride-along",
            "title": "Police Anthem（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-4-hk",
            "title": "Rockin’ Ride-Along Songs, Vol. 4",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2023-12-22",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Police Anthem",
                "position": 14,
                "recordingId": "blaze-police-anthem-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第14曲",
            "url": "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-police-anthem-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-4-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-49",
        "type": "IN",
        "sequence": 49,
        "titleJa": "Data",
        "songId": "blaze-data",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第19話〈The Treat Thief〉（製作519）於2020/11/20美國首播。整理線索的資料主題唱段。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/data/1655421476?i=1655421653",
            "label": "香港 Apple Music 正式原聲第13曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=_IbhNS6zi0Q",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits",
            "label": "第519製作話掛字交叉，警察歌曲、重唱及資料歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/Data",
            "label": "正篇用途、角色及曲位交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/data/1655421476?i=1655421653",
              "https://www.youtube.com/watch?v=_IbhNS6zi0Q",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Data"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-data"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/data/1655421476?i=1655421653",
              "https://www.youtube.com/watch?v=_IbhNS6zi0Q",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/Data"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-49"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=_IbhNS6zi0Q",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/data/1655421476?i=1655421653",
              "https://www.youtube.com/watch?v=_IbhNS6zi0Q"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-data-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-3-from-the-blaze-and/1655421476",
              "https://music.apple.com/hk/album/data/1655421476?i=1655421653"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-3-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/data/1655421476?i=1655421653"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/data/1655421476?i=1655421653"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=_IbhNS6zi0Q"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "_IbhNS6zi0Q"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-data-rockin-ride-along",
            "title": "Data（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-3-hk",
            "title": "Rockin' Ride-Along Songs, Vol. 3 (From the Blaze and the Monster Machine Series)",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2021-01-29",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Data",
                "position": 13,
                "recordingId": "blaze-data-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第13曲",
            "url": "https://music.apple.com/hk/album/data/1655421476?i=1655421653",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-data-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-3-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-50",
        "type": "IN",
        "sequence": 50,
        "titleJa": "Police Anthem",
        "songId": "blaze-police-anthem",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2020-fall"
        ],
        "usageLabel": "第5季第19話〈The Treat Thief〉（製作519）於2020/11/20美國首播。同話後段重唱。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
            "label": "香港 Apple Music 正式原聲第14曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits",
            "label": "第519製作話掛字交叉，警察歌曲、重唱及資料歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-police-anthem"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-50"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Treat_Thief/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-police-anthem-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-4-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-police-anthem-rockin-ride-along",
            "title": "Police Anthem（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-4-hk",
            "title": "Rockin’ Ride-Along Songs, Vol. 4",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2023-12-22",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Police Anthem",
                "position": 14,
                "recordingId": "blaze-police-anthem-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第14曲",
            "url": "https://music.apple.com/hk/album/police-anthem/1720074176?i=1720074631",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-police-anthem-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-4-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-51",
        "type": "IN",
        "sequence": 51,
        "titleJa": "Let’s Blaze",
        "songId": "blaze-lets-blaze",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2021-summer"
        ],
        "usageLabel": "第5季第20話〈The Gold Medal Games〉（製作508）於2021/7/23美國首播。金牌運動會前使用系列歌曲。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
            "label": "Paramount+ 加拿大列 The Gold Medal Games 為第5季並保存製作排序",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556",
            "label": "香港 Apple Music 正式原聲第4曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
            "label": "第508製作話掛字交叉，運動科學及團隊歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html",
            "label": "美國2021/7/23延後播出的第508製作組",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
              "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-lets-blaze"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
              "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-51"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-lets-blaze-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs/1655414550",
              "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-2019-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-lets-blaze-rockin-ride-along",
            "title": "Let’s Blaze（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-2019-hk",
            "title": "Rockin' Ride-Along Songs",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2019-11-08",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "Let’s Blaze",
                "position": 4,
                "recordingId": "blaze-lets-blaze-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第4曲",
            "url": "https://music.apple.com/hk/album/lets-blaze/1655414550?i=1655414556",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-lets-blaze-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-2019-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-52",
        "type": "IN",
        "sequence": 52,
        "titleJa": "The Science of Sports",
        "songId": "blaze-science-of-sports",
        "artistDisplayName": "Blaze and the Monster Machines",
        "seasonIds": [
          "2021-summer"
        ],
        "usageLabel": "第5季第20話〈The Gold Medal Games〉（製作508）於2021/7/23美國首播。運動科學主題唱段。",
        "credits": [
          {
            "name": "Joleen Belle",
            "role": "songwriting"
          },
          {
            "name": "Joachim Svare",
            "role": "songwriting"
          },
          {
            "name": "Jimmy Richard",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
            "label": "Paramount+ 加拿大列 The Gold Medal Games 為第5季並保存製作排序",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
            "label": "香港 Apple Music 原聲專輯及發行日",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787",
            "label": "香港 Apple Music 正式原聲第25曲",
            "role": "first_party",
            "language": "zh-Hant",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=bOhs_bisWhs",
            "label": "Viacom 原聲 Art Track 權利方署名",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
            "label": "第508製作話掛字交叉，運動科學及團隊歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html",
            "label": "美國2021/7/23延後播出的第508製作組",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787",
              "https://www.youtube.com/watch?v=bOhs_bisWhs",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
              "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-science-of-sports"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787",
              "https://www.youtube.com/watch?v=bOhs_bisWhs",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
              "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-52"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=bOhs_bisWhs",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "kind"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787",
              "https://www.youtube.com/watch?v=bOhs_bisWhs"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-science-of-sports-rockin-ride-along"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "type",
              "tracklist"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/rockin-ride-along-songs-vol-4/1720074176",
              "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-rockin-ride-along-vol-4-hk"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=bOhs_bisWhs"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "bOhs_bisWhs"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "blaze-science-of-sports-rockin-ride-along",
            "title": "The Science of Sports（原聲發行）",
            "format": "unknown",
            "kind": "vocal"
          }
        ],
        "releases": [
          {
            "id": "blaze-rockin-ride-along-vol-4-hk",
            "title": "Rockin’ Ride-Along Songs, Vol. 4",
            "artistDisplayName": "Blaze and the Monster Machines",
            "type": "soundtrack",
            "region": "HK",
            "label": "Republic Records: Kids & Family",
            "date": {
              "value": "2023-12-22",
              "precision": "day"
            },
            "tracks": [
              {
                "title": "The Science of Sports",
                "position": 25,
                "recordingId": "blaze-science-of-sports-rockin-ride-along"
              }
            ]
          }
        ],
        "links": [
          {
            "platform": "Apple Music 香港",
            "label": "香港原聲第25曲",
            "url": "https://music.apple.com/hk/album/the-science-of-sports/1720074176?i=1720074787",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "blaze-science-of-sports-rockin-ride-along",
            "releaseId": "blaze-rockin-ride-along-vol-4-hk",
            "verifiedAt": "2026-11-19",
            "availability": "available"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "blaze-and-the-monster-machines-season-5-in-53",
        "type": "IN",
        "sequence": 53,
        "titleJa": "Team Blaze",
        "songId": "blaze-team-blaze",
        "artistDisplayName": "Scott Krippayne",
        "seasonIds": [
          "2021-summer"
        ],
        "usageLabel": "第5季第20話〈The Gold Medal Games〉（製作508）於2021/7/23美國首播。隊伍比賽唱段。",
        "credits": [
          {
            "name": "Scott Krippayne",
            "role": "songwriting"
          },
          {
            "name": "Michael \"Smidi\" Smith",
            "role": "songwriting"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
            "label": "Paramount+ 第5季正式原英語分集及故事",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
            "label": "Paramount+ 加拿大列 The Gold Medal Games 為第5季並保存製作排序",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
            "label": "第5季原播、各話歌曲和前後季分開交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
            "label": "第508製作話掛字交叉，運動科學及團隊歌曲",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html",
            "label": "美國2021/7/23延後播出的第508製作組",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
              "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-team-blaze"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.paramountplus.com/shows/blaze-and-the-monster-machines/episodes/5/",
              "https://www.intl.paramountplus.com/ca/shows/video/PRpNKdMgIMx3jcKrclHyCBBRgRJRp1bn/",
              "https://en.wikipedia.org/wiki/List_of_Blaze_and_the_Monster_Machines_episodes",
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits",
              "https://www.nickalive.net/2021/06/july-2021-on-nickelodeon-usa-premiere.html"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "blaze-and-the-monster-machines-season-5-in-53"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://blaze-and-the-monster-machines.fandom.com/wiki/The_Gold_Medal_Games/Credits"
            ],
            "verifiedAt": "2026-11-19"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "recording_format",
              "recordings",
              "releases"
            ],
            "note": "已核正篇使用與所列正式曲位。片內個別演唱掛字、精確剪輯與其他發行版本待核。",
            "resumeWhen": "取得原版掛字、權利方分項音樂資料或可以比對實際播出剪輯的授權錄音後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      }
    ],
    "titleZhHant": "旋風戰車隊 第5季"
  },
  {
    "catalogKey": -2019090701,
    "id": "curated-redknot-agent-binky-pets-of-the-universe-season-1",
    "slug": "agent-binky-pets-of-the-universe-season-1",
    "seasonIds": [
      "2019-summer",
      "2019-fall",
      "2020-winter"
    ],
    "startDate": "2019-09-07",
    "titleJa": "Agent Binky: Pets of the Universe Season 1",
    "titleRomaji": "Agent Binky: Pets of the Universe Season 1",
    "editorialWeekday": 6,
    "broadcastLabel": "加拿大 Treehouse 於2019/9/7 12:40首播〈No Moussie Left Behind／Dragonfly Away!〉。第1季26組52段，每段11分鐘，2020/2/23末組。2020春起海外發行。各區串流分組與電視原播次序有差。",
    "status": "finished",
    "verifiedAt": "2026-11-19",
    "metadataVerifiedAt": "2026-11-19",
    "officialSiteUrl": "https://www.nelvana.com/brand-pages/agent-binky",
    "identifierSource": {
      "url": "https://www.nelvana.com/brand-pages/agent-binky",
      "label": "Nelvana 原版節目及第1季識別",
      "language": "en"
    },
    "sourceReferenceUrls": [
      "https://www.nelvana.com/brand-pages/agent-binky",
      "https://www.corusent.com/news/prepare-for-family-fun-this-fall-on-ytv-teletoon-and-treehouse-with-a-lineup-of-brand-new-series-and-reboots-of-beloved-iconic-shows/",
      "https://www.corusent.com/news/agent-binky/",
      "https://tubitv.com/series/300014969/agent-binky-pets-of-the-universe",
      "https://www.primevideo.com/-/zh_TW/detail/0HX61ZQ5B71VCS06857O0LMUDV?tr=ca",
      "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
      "https://www.youtube.com/watch?v=8DcznbP70YY",
      "https://www.tvmaze.com/shows/48617/agent-binky-pets-of-the-universe/episodeguide",
      "https://www.thetvdb.com/series/agent-binky-pets-of-the-universe/seasons/official/1",
      "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe"
    ],
    "metadataSources": [
      {
        "url": "https://www.nelvana.com/brand-pages/agent-binky",
        "label": "Nelvana 原版節目及第1季識別",
        "role": "identifier",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.corusent.com/news/prepare-for-family-fun-this-fall-on-ytv-teletoon-and-treehouse-with-a-lineup-of-brand-new-series-and-reboots-of-beloved-iconic-shows/",
        "label": "Corus 首播公告列 Treehouse 2019/9/7 12:40",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.corusent.com/news/agent-binky/",
        "label": "Nelvana 發行公告列加拿大原期及海外自2020春起",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tubitv.com/series/300014969/agent-binky-pets-of-the-universe",
        "label": "Tubi 正版分組與各季列表",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.primevideo.com/-/zh_TW/detail/0HX61ZQ5B71VCS06857O0LMUDV?tr=ca",
        "label": "Prime Video 繁中介面保留英語節目名",
        "role": "first_party",
        "language": "zh-Hant",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
        "label": "Apple TV 加拿大授權2019/9/15原英語22分鐘雙段",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.youtube.com/watch?v=8DcznbP70YY",
        "label": "TreehouseTV 同期末組前段宣傳及原英語識別",
        "role": "first_party",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.tvmaze.com/shows/48617/agent-binky-pets-of-the-universe/episodeguide",
        "label": "加拿大 Treehouse 逐段日期與第52段末播交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://www.thetvdb.com/series/agent-binky-pets-of-the-universe/seasons/official/1",
        "label": "原季52段及2020/2/23末組交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      },
      {
        "url": "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe",
        "label": "片頭、器樂片尾及首輪分段交叉",
        "role": "broadcast_cross_check",
        "language": "en",
        "verifiedAt": "2026-11-19"
      }
    ],
    "themes": [
      {
        "id": "agent-binky-pets-of-the-universe-season-1-op-1",
        "type": "OP",
        "sequence": 1,
        "titleJa": "Agent Binky Theme Song",
        "songId": "agent-binky-theme",
        "artistDisplayName": "原英語片頭演唱名義待核",
        "seasonIds": [
          "2019-summer",
          "2019-fall",
          "2020-winter"
        ],
        "usageLabel": "第1季原英語常規歌唱片頭。Treehouse Direct 有獨立片頭；第108製作組官方正片22:19掛字列 Meiro Stamm 為主題曲作者。",
        "credits": [
          {
            "name": "Meiro Stamm",
            "role": "composition"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.nelvana.com/brand-pages/agent-binky",
            "label": "Nelvana 第1季英語原版及52段規格",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=9SQ9eZdQQWQ",
            "label": "Treehouse Direct 單獨發布原英語片頭",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.youtube.com/watch?v=eygX3zl2LOI",
            "label": "Treehouse Direct 正片8A／8B；22:19掛字列主題曲作者",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://purst.fandom.com/wiki/It%27s_Binky%21",
            "label": "片頭歌唱、歌名及同旋律片尾交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits",
            "label": "第1季節目掛字轉錄交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe",
            "label": "片頭、器樂片尾及首輪分段交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.nelvana.com/brand-pages/agent-binky",
              "https://www.youtube.com/watch?v=9SQ9eZdQQWQ",
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://purst.fandom.com/wiki/It%27s_Binky%21",
              "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits",
              "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-theme"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.nelvana.com/brand-pages/agent-binky",
              "https://www.youtube.com/watch?v=9SQ9eZdQQWQ",
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://purst.fandom.com/wiki/It%27s_Binky%21",
              "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits",
              "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-pets-of-the-universe-season-1-op-1"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "format",
              "kind"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=9SQ9eZdQQWQ",
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://purst.fandom.com/wiki/It%27s_Binky%21"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-theme-op-en-tv"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=9SQ9eZdQQWQ"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "9SQ9eZdQQWQ"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "recordings": [
          {
            "id": "agent-binky-theme-op-en-tv",
            "title": "Agent Binky Theme Song（原英語電視片頭）",
            "kind": "vocal",
            "format": "tv"
          }
        ],
        "followUp": [
          {
            "fields": [
              "lyrics",
              "arrangement",
              "releases",
              "platform_links"
            ],
            "note": "原節目掛字確認主題曲作者。原唱、詞曲分工、編曲和香港可用的正式原聲曲位仍待核。",
            "resumeWhen": "取得原節目逐曲權利資料、配唱掛字或可核對的正式音源後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "agent-binky-pets-of-the-universe-season-1-ed-1",
        "type": "ED",
        "sequence": 1,
        "titleJa": "Agent Binky Theme Song",
        "songId": "agent-binky-theme",
        "artistDisplayName": "Meiro Stamm（主題作曲）",
        "seasonIds": [
          "2019-summer",
          "2019-fall",
          "2020-winter"
        ],
        "usageLabel": "第1季常規片尾使用同一主題曲器樂版。官方第108製作組片尾22:19可核對主題曲署名，原版聲音與歌唱片頭分列。",
        "credits": [
          {
            "name": "Meiro Stamm",
            "role": "composition"
          }
        ],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.youtube.com/watch?v=eygX3zl2LOI",
            "label": "Treehouse Direct 正片8A／8B；22:19掛字列主題曲作者",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
            "label": "Apple TV 加拿大授權2019/9/15原英語22分鐘雙段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://purst.fandom.com/wiki/It%27s_Binky%21",
            "label": "片頭歌唱、歌名及同旋律片尾交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe",
            "label": "片頭、器樂片尾及首輪分段交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits",
            "label": "第1季節目掛字轉錄交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
              "https://purst.fandom.com/wiki/It%27s_Binky%21",
              "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe",
              "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-theme"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
              "https://purst.fandom.com/wiki/It%27s_Binky%21",
              "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe",
              "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-pets-of-the-universe-season-1-ed-1"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://purst.fandom.com/wiki/Agent_Binky%3A_Pets_of_the_Universe/Credits"
            ],
            "verifiedAt": "2026-11-19"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "artist",
              "format",
              "kind"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe",
              "https://purst.fandom.com/wiki/It%27s_Binky%21"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-theme-ed-instrumental-tv"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "versionLabel": "器樂片尾",
        "recordings": [
          {
            "id": "agent-binky-theme-ed-instrumental-tv",
            "title": "Agent Binky Theme Song（器樂片尾）",
            "kind": "instrumental",
            "format": "tv"
          }
        ],
        "followUp": [
          {
            "fields": [
              "arrangement",
              "official_video",
              "releases",
              "platform_links"
            ],
            "note": "同曲的原版器樂片尾可交叉，個別演奏、編曲及獨立音源待核。",
            "resumeWhen": "取得製作方片尾音軌或音樂出版方的逐曲資料後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      },
      {
        "id": "agent-binky-pets-of-the-universe-season-1-in-1",
        "type": "IN",
        "sequence": 1,
        "titleJa": "P.U.R.S.T. Anthem",
        "songId": "agent-binky-purst-anthem",
        "artistDisplayName": "P.U.R.S.T.（片中隊員）",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "加拿大 Treehouse 2019/9/15首播組前段〈Glow Away〉的劇中隊歌。製作次序108A、加拿大原播第3組前段、HBO Max第15段。題名依官方分集描述。",
        "credits": [],
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://www.youtube.com/watch?v=eygX3zl2LOI",
            "label": "Treehouse Direct 正片8A／8B；22:19掛字列主題曲作者",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
            "label": "Apple TV 加拿大授權2019/9/15原英語22分鐘雙段",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.hbomax.com/bb/en/show/5c923dd4-e6a7-4ab2-a2b3-00ada09cbfc3",
            "label": "HBO Max 第1季第15段確認劇中隊歌",
            "role": "first_party",
            "language": "en",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://www.fernsehserien.de/agent-binky-und-das-pfoten-superteam/folgen/1x03a-gluehwuermchen-1375899",
            "label": "Boomerang 分段與加拿大2019/9/15原播交叉",
            "role": "cross_check",
            "language": "multi",
            "verifiedAt": "2026-11-19"
          },
          {
            "url": "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe",
            "label": "片頭、器樂片尾及首輪分段交叉",
            "role": "cross_check",
            "language": "en",
            "verifiedAt": "2026-11-19"
          }
        ],
        "evidence": [
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
              "https://www.hbomax.com/bb/en/show/5c923dd4-e6a7-4ab2-a2b3-00ada09cbfc3",
              "https://www.fernsehserien.de/agent-binky-und-das-pfoten-superteam/folgen/1x03a-gluehwuermchen-1375899",
              "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-purst-anthem"
          },
          {
            "target": "anime_use",
            "fields": [
              "title",
              "artist",
              "usage"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=eygX3zl2LOI",
              "https://tv.apple.com/ca/episode/glow-away-space-station-flappy/umc.cmc.3198igb1f6xrt5nfzjdmcmdfb?showId=umc.cmc.moc9cf9ufxeuq64odeadujve",
              "https://www.hbomax.com/bb/en/show/5c923dd4-e6a7-4ab2-a2b3-00ada09cbfc3",
              "https://www.fernsehserien.de/agent-binky-und-das-pfoten-superteam/folgen/1x03a-gluehwuermchen-1375899",
              "https://en.wikipedia.org/wiki/Agent_Binky%3A_Pets_of_the_Universe"
            ],
            "verifiedAt": "2026-11-19",
            "targetId": "agent-binky-pets-of-the-universe-season-1-in-1"
          }
        ],
        "lastVerifiedAt": "2026-11-19",
        "followUp": [
          {
            "fields": [
              "lyrics",
              "composition",
              "arrangement",
              "recordings",
              "recording_format",
              "releases"
            ],
            "note": "確認正篇包含隊歌。原片片尾列節目配樂團隊，逐曲作者、個別配唱、段內不同段落剪輯和唱片待核。",
            "resumeWhen": "取得隊歌獨立掛字、原聲曲目或權利方分段音樂文件後補。",
            "checkedAt": "2026-11-19"
          }
        ]
      }
    ]
  },
];

export const curated2019SummerAnimeIds = curated2019SummerSeeds.map(curatedAnimeKey);
