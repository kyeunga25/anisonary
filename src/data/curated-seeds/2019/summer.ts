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
  {
  "anilistId": 98231,
  "id": "curated-98231",
  "slug": "yu-gi-oh-vrains",
  "seasonIds": [
    "2019-summer",
    "2019-spring",
    "2019-winter",
    "2018-fall",
    "2018-spring"
  ],
  "startDate": "2017-05-10",
  "titleJa": "遊☆戯☆王VRAINS",
  "titleZhHant": "遊戲王 VRAINS",
  "titleRomaji": "Yu☆Gi☆Oh! VRAINS",
  "editorialWeekday": 3,
  "broadcastTimeJst": "18:25",
  "broadcastLabel": "日本テレビ東京系列週三18:25–18:55 JST。2017/5/10首播，2019/9/25第120話完結。",
  "status": "finished",
  "officialSiteUrl": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/",
  "anilistUrl": "https://anilist.co/anime/98231/YuGiOh-VRAINS",
  "sourceReferenceUrls": [
    "https://yu-gi-oh.jp/anime/vrains/",
    "https://ani.gamer.com.tw/animeVideo.php?sn=42792",
    "https://cal.syoboi.jp/tid/4592"
  ],
  "verifiedAt": "2026-11-19",
  "metadataVerifiedAt": "2026-11-19",
  "metadataSources": [
    {
      "url": "https://yu-gi-oh.jp/anime/vrains/",
      "label": "遊戲王官方作品與日本集數",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-11-19"
    },
    {
      "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_10.html",
      "label": "テレビ東京首播逐話表",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-11-19"
    },
    {
      "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/",
      "label": "テレビ東京最終回及日本播出日",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-11-19"
    },
    {
      "url": "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201909/23144_201909251825.html",
      "label": "テレビ東京最終回原播時段",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-11-19"
    },
    {
      "url": "https://ani.gamer.com.tw/animeVideo.php?sn=42792",
      "label": "巴哈姆特動畫瘋台灣授權作品及繁中名稱",
      "role": "localized_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-11-19"
    },
    {
      "url": "https://anilist.co/anime/98231/YuGiOh-VRAINS",
      "label": "AniList日本TV系列識別",
      "role": "identifier",
      "language": "en",
      "verifiedAt": "2026-11-19"
    },
    {
      "url": "https://cal.syoboi.jp/tid/4592/time",
      "label": "日本原播與重播紀錄",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-11-19"
    }
  ],
  "themes": [
    {
      "id": "yu-gi-oh-vrains-op-1",
      "songId": "yu-gi-oh-vrains-with-the-wind-song",
      "type": "OP",
      "sequence": 1,
      "titleJa": "With The Wind",
      "artistDisplayName": "富永TOMMY弘明",
      "seasonIds": [
        "2018-spring"
      ],
      "usageLabel": "日本TV第1–46話片頭（2017/5/10–2018/4/4）；2018春為4/4第46話。",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.marv.jp/titles/mc/9809/",
          "label": "Marvelous 歷代片頭、片尾正式曲名、演唱及曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9049/",
          "label": "唱片方對應曲目或電視台當回節目表",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_10.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://cal.syoboi.jp/tid/4592",
          "label": "逐話用曲、首末話、最終話例外與製作署名",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9493/",
          "label": "Marvelous 正版原聲帶TV剪輯、日期、品番與曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1247754954",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1247754961",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1247754963",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1446369883",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1446369888",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://yugioh-starlight.com/archives/53843207.html",
          "label": "日本原播當晚對最終回片頭及末段歌曲的即時記錄",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201909/23144_201909251825.html",
          "label": "テレビ東京預告節目表仍列本季常規片尾",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.crunchyroll.com/watch/GR9VQE596/connected-world",
          "label": "授權日語字幕版第120話節目頁",
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
            "https://www.marv.jp/titles/mc/9809/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-with-the-wind-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/",
            "https://www.marv.jp/titles/mc/9049/",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_10.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-with-the-wind-song-vocal"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9493/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-with-the-wind-song-tv"
        },
        {
          "target": "recording",
          "fields": [
            "format"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9493/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-with-the-wind-song-tv"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9493/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01251"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01282"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1247754954"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-with-the-wind-song-instrumental"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1247754961"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1247754961"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1247754963"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1247754963"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1247754954"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1247754954"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1446369888"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1446369888"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1446369883"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1446369883"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9049/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjss-09198"
        }
      ],
      "links": [
        {
          "platform": "Apple Music",
          "label": "With The Wind｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1247754961",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1247754954",
          "recordingId": "yu-gi-oh-vrains-with-the-wind-song-vocal"
        },
        {
          "platform": "Apple Music",
          "label": "With The Wind(オリジナル・カラオケ)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1247754963",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1247754954",
          "recordingId": "yu-gi-oh-vrains-with-the-wind-song-instrumental"
        },
        {
          "platform": "Apple Music",
          "label": "With The Wind (TV size)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1446369888",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1446369883",
          "recordingId": "yu-gi-oh-vrains-with-the-wind-song-tv"
        }
      ],
      "lastVerifiedAt": "2026-11-19",
      "credits": [
        {
          "name": "Yocke",
          "role": "lyrics"
        },
        {
          "name": "Yocke",
          "role": "composition"
        },
        {
          "name": "Yocke",
          "role": "arrangement"
        }
      ],
      "recordings": [
        {
          "id": "yu-gi-oh-vrains-with-the-wind-song-vocal",
          "title": "With The Wind",
          "kind": "vocal",
          "format": "unknown"
        },
        {
          "id": "yu-gi-oh-vrains-with-the-wind-song-tv",
          "title": "With The Wind（TVサイズ）",
          "kind": "vocal",
          "format": "tv"
        },
        {
          "id": "yu-gi-oh-vrains-with-the-wind-song-instrumental",
          "title": "With The Wind(オリジナル・カラオケ)",
          "kind": "instrumental",
          "format": "unknown"
        }
      ],
      "releases": [
        {
          "id": "mjsa-01251",
          "title": "遊☆戯☆王VRAINS SOUND DUEL1",
          "type": "soundtrack",
          "artistDisplayName": "光宗信吉ほか",
          "date": {
            "value": "2018-11-28",
            "precision": "day"
          },
          "edition": "日本原聲CD",
          "region": "JP",
          "tracks": [
            {
              "title": "With The Wind（TVサイズ）",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-with-the-wind-song-tv"
            }
          ],
          "catalogNumber": "MJSA-01251"
        },
        {
          "id": "mjsa-01282",
          "title": "遊☆戯☆王VRAINS VOCAL BEST",
          "type": "compilation",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2020-04-08",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "With The Wind",
              "position": 1,
              "disc": 1
            }
          ],
          "catalogNumber": "MJSA-01282"
        },
        {
          "id": "apple-hk-1247754954",
          "title": "「遊☆戯☆王 VRAINS」OPテーマ曲 With The Wind - EP",
          "type": "ep",
          "artistDisplayName": "富永TOMMY弘明",
          "date": {
            "value": "2017-06-21",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "With The Wind",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-with-the-wind-song-vocal"
            },
            {
              "title": "With The Wind(オリジナル・カラオケ)",
              "position": 3,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-with-the-wind-song-instrumental"
            }
          ]
        },
        {
          "id": "apple-hk-1446369883",
          "title": "遊☆戯☆王VRAINS SOUND DUEL1.1",
          "type": "soundtrack",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2018-11-28",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "With The Wind (TV size)",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-with-the-wind-song-tv"
            }
          ]
        },
        {
          "id": "mjss-09198",
          "title": "With The Wind",
          "type": "single",
          "artistDisplayName": "富永TOMMY弘明",
          "date": {
            "value": "2017-06-21",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "With The Wind",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-with-the-wind-song-vocal"
            },
            {
              "title": "With The Wind (instrumental)",
              "position": 3,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-with-the-wind-song-instrumental"
            }
          ],
          "catalogNumber": "MJSS-09198"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence"
          ],
          "note": "第 120 話電視台節目表沿列常規片尾〈Are you ready?〉，播出當晚記錄及逐話資料指向〈With The Wind〉。",
          "resumeWhen": "取得日本原播完整片尾、權利方逐話曲表或可定位的授權日語版掛字，再登錄終話用曲與剪輯。",
          "checkedAt": "2026-11-19"
        }
      ]
    },
    {
      "id": "yu-gi-oh-vrains-op-2",
      "songId": "yu-gi-oh-vrains-go-forward-song",
      "type": "OP",
      "sequence": 2,
      "titleJa": "go forward",
      "artistDisplayName": "KIMERU",
      "seasonIds": [
        "2018-spring",
        "2018-fall",
        "2019-winter",
        "2019-spring"
      ],
      "usageLabel": "日本TV第47–102話片頭（2018/4/11–2019/5/15）。2018春第47–57話、夏第58–70話、秋第71–83話；2019冬第84–95話、春第96–102話。",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.marv.jp/titles/mc/9809/",
          "label": "Marvelous 歷代片頭、片尾正式曲名、演唱及曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/av/9359/",
          "label": "唱片方對應曲目或電視台當回節目表",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_6.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_5.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_4.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_3.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_2.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://cal.syoboi.jp/tid/4592",
          "label": "逐話用曲、首末話、最終話例外與製作署名",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9591/",
          "label": "Marvelous 正版原聲帶TV剪輯、日期、品番與曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1392102444",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1392102459",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1392102701",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1456977326",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1456977327",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
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
            "https://www.marv.jp/titles/mc/9809/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-go-forward-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/",
            "https://www.marv.jp/titles/av/9359/",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_6.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_5.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_4.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_3.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_2.html",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-op-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/av/9359/"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-go-forward-song-vocal"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-go-forward-song-tv"
        },
        {
          "target": "recording",
          "fields": [
            "format"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-go-forward-song-tv"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01265"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01282"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1392102444"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-go-forward-song-instrumental"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1392102459"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1392102459"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1392102701"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1392102701"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1392102444"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1392102444"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1456977327"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1456977327"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1456977326"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1456977326"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/av/9359/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjss-09226"
        }
      ],
      "links": [
        {
          "platform": "Apple Music",
          "label": "go Forward｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1392102459",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1392102444",
          "recordingId": "yu-gi-oh-vrains-go-forward-song-vocal"
        },
        {
          "platform": "Apple Music",
          "label": "go Forward (Inst)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1392102701",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1392102444",
          "recordingId": "yu-gi-oh-vrains-go-forward-song-instrumental"
        },
        {
          "platform": "Apple Music",
          "label": "go forward(TV size)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1456977327",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1456977326",
          "recordingId": "yu-gi-oh-vrains-go-forward-song-tv"
        }
      ],
      "lastVerifiedAt": "2026-11-19",
      "credits": [
        {
          "name": "KIMERU",
          "role": "lyrics"
        },
        {
          "name": "Yocke",
          "role": "composition"
        },
        {
          "name": "Yocke",
          "role": "arrangement"
        }
      ],
      "recordings": [
        {
          "id": "yu-gi-oh-vrains-go-forward-song-vocal",
          "title": "go forward",
          "kind": "vocal",
          "format": "unknown"
        },
        {
          "id": "yu-gi-oh-vrains-go-forward-song-tv",
          "title": "go forward (TV size)",
          "kind": "vocal",
          "format": "tv"
        },
        {
          "id": "yu-gi-oh-vrains-go-forward-song-instrumental",
          "title": "go Forward (Inst)",
          "kind": "instrumental",
          "format": "unknown"
        }
      ],
      "releases": [
        {
          "id": "mjsa-01265",
          "title": "遊☆戯☆王VRAINS SOUND DUEL2",
          "type": "soundtrack",
          "artistDisplayName": "光宗信吉ほか",
          "date": {
            "value": "2019-03-27",
            "precision": "day"
          },
          "edition": "日本原聲CD",
          "region": "JP",
          "tracks": [
            {
              "title": "go forward (TV size)",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-go-forward-song-tv"
            }
          ],
          "catalogNumber": "MJSA-01265"
        },
        {
          "id": "mjsa-01282",
          "title": "遊☆戯☆王VRAINS VOCAL BEST",
          "type": "compilation",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2020-04-08",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "go forward",
              "position": 2,
              "disc": 1
            }
          ],
          "catalogNumber": "MJSA-01282"
        },
        {
          "id": "apple-hk-1392102444",
          "title": "go forward - EP",
          "type": "ep",
          "artistDisplayName": "KIMERU",
          "date": {
            "value": "2018-05-30",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "go Forward",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-go-forward-song-vocal"
            },
            {
              "title": "go Forward (Inst)",
              "position": 3,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-go-forward-song-instrumental"
            }
          ]
        },
        {
          "id": "apple-hk-1456977326",
          "title": "遊☆戯☆王VRAINS SOUND DUEL2.1",
          "type": "soundtrack",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2019-03-27",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "go forward(TV size)",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-go-forward-song-tv"
            }
          ]
        },
        {
          "id": "mjss-09226",
          "title": "go forward",
          "type": "single",
          "artistDisplayName": "KIMERU",
          "date": {
            "value": "2018-05-30",
            "precision": "day"
          },
          "edition": "日本Type B 藝人封面盤",
          "region": "JP",
          "tracks": [
            {
              "title": "go forward",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-go-forward-song-vocal"
            }
          ],
          "catalogNumber": "MJSS-09226"
        }
      ]
    },
    {
      "id": "yu-gi-oh-vrains-op-3",
      "songId": "yu-gi-oh-vrains-calling-song",
      "type": "OP",
      "sequence": 3,
      "titleJa": "calling",
      "artistDisplayName": "KIMERU",
      "seasonIds": [
        "2019-spring",
        "2019-summer"
      ],
      "usageLabel": "日本TV第103–120話片頭（2019/5/22–9/25）。春為第103–107話，夏為第108–120話，包含最終話。",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.marv.jp/titles/mc/9809/",
          "label": "Marvelous 歷代片頭、片尾正式曲名、演唱及曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/av/9649/",
          "label": "唱片方對應曲目或電視台當回節目表",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_2.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://cal.syoboi.jp/tid/4592",
          "label": "逐話用曲、首末話、最終話例外與製作署名",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9731/",
          "label": "Marvelous 正版原聲帶TV剪輯、日期、品番與曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1469849407",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1469849408",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1469849410",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1483190948",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1483190949",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.youtube.com/watch?v=7zOXmeTPjcc",
          "label": "權利方公開影片或供稿音軌及簡介",
          "role": "first_party",
          "language": "ja",
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
            "https://www.marv.jp/titles/mc/9809/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-calling-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/",
            "https://www.marv.jp/titles/av/9649/",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_2.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-op-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/av/9649/"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-calling-song-vocal"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9731/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-calling-song-tv"
        },
        {
          "target": "recording",
          "fields": [
            "format"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9731/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-calling-song-tv"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9731/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01276"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01282"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1469849407"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-calling-song-instrumental"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1469849408"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1469849408"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1469849410"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1469849410"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1469849407"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1469849407"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1483190949"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1483190949"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1483190948"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1483190948"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/av/9649/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjss-09240"
        },
        {
          "target": "video",
          "fields": [
            "title",
            "type",
            "url"
          ],
          "sourceUrls": [
            "https://www.youtube.com/watch?v=7zOXmeTPjcc"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "7zOXmeTPjcc"
        }
      ],
      "links": [
        {
          "platform": "Apple Music",
          "label": "calling｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1469849408",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1469849407",
          "recordingId": "yu-gi-oh-vrains-calling-song-vocal"
        },
        {
          "platform": "Apple Music",
          "label": "calling(Instrumental)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1469849410",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1469849407",
          "recordingId": "yu-gi-oh-vrains-calling-song-instrumental"
        },
        {
          "platform": "Apple Music",
          "label": "calling (TV size)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1483190949",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1483190948",
          "recordingId": "yu-gi-oh-vrains-calling-song-tv"
        }
      ],
      "lastVerifiedAt": "2026-11-19",
      "credits": [
        {
          "name": "KIMERU",
          "role": "lyrics"
        },
        {
          "name": "Yocke",
          "role": "composition"
        },
        {
          "name": "Yocke",
          "role": "arrangement"
        }
      ],
      "recordings": [
        {
          "id": "yu-gi-oh-vrains-calling-song-vocal",
          "title": "calling",
          "kind": "vocal",
          "format": "unknown"
        },
        {
          "id": "yu-gi-oh-vrains-calling-song-tv",
          "title": "calling (TV size)",
          "kind": "vocal",
          "format": "tv"
        },
        {
          "id": "yu-gi-oh-vrains-calling-song-instrumental",
          "title": "calling(Instrumental)",
          "kind": "instrumental",
          "format": "unknown"
        }
      ],
      "releases": [
        {
          "id": "mjsa-01276",
          "title": "遊☆戯☆王VRAINS SOUND DUEL3",
          "type": "soundtrack",
          "artistDisplayName": "光宗信吉ほか",
          "date": {
            "value": "2019-10-30",
            "precision": "day"
          },
          "edition": "日本原聲CD",
          "region": "JP",
          "tracks": [
            {
              "title": "calling (TV size)",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-calling-song-tv"
            }
          ],
          "catalogNumber": "MJSA-01276"
        },
        {
          "id": "mjsa-01282",
          "title": "遊☆戯☆王VRAINS VOCAL BEST",
          "type": "compilation",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2020-04-08",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "calling",
              "position": 3,
              "disc": 1
            }
          ],
          "catalogNumber": "MJSA-01282"
        },
        {
          "id": "apple-hk-1469849407",
          "title": "calling【通常盤】 - EP",
          "type": "ep",
          "artistDisplayName": "KIMERU",
          "date": {
            "value": "2019-07-10",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "calling",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-calling-song-vocal"
            },
            {
              "title": "calling(Instrumental)",
              "position": 3,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-calling-song-instrumental"
            }
          ]
        },
        {
          "id": "apple-hk-1483190948",
          "title": "遊☆戯☆王VRAINS SOUND DUEL3",
          "type": "soundtrack",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2019-10-30",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "calling (TV size)",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-calling-song-tv"
            }
          ]
        },
        {
          "id": "mjss-09240",
          "title": "calling",
          "type": "single",
          "artistDisplayName": "KIMERU",
          "date": {
            "value": "2019-07-10",
            "precision": "day"
          },
          "edition": "日本通常盤",
          "region": "JP",
          "tracks": [
            {
              "title": "calling",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-calling-song-vocal"
            },
            {
              "title": "calling (instrumental)",
              "position": 3,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-calling-song-instrumental"
            }
          ],
          "catalogNumber": "MJSS-09240"
        }
      ]
    },
    {
      "id": "yu-gi-oh-vrains-ed-2",
      "songId": "yu-gi-oh-vrains-writing-life-song",
      "type": "ED",
      "sequence": 2,
      "titleJa": "Writing Life",
      "artistDisplayName": "Goodbye holiday",
      "seasonIds": [
        "2018-spring"
      ],
      "usageLabel": "日本TV第25–46話片尾（2017/11/1–2018/4/4）；2018春為4/4第46話。",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.marv.jp/titles/mc/9809/",
          "label": "Marvelous 歷代片頭、片尾正式曲名、演唱及曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.youtube.com/watch?v=m5WtrWVTiFo",
          "label": "唱片方對應曲目或電視台當回節目表",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_8.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://cal.syoboi.jp/tid/4592",
          "label": "逐話用曲、首末話、最終話例外與製作署名",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9493/",
          "label": "Marvelous 正版原聲帶TV剪輯、日期、品番與曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1332984536",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1332984546",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
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
            "https://www.marv.jp/titles/mc/9809/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-writing-life-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/",
            "https://www.youtube.com/watch?v=m5WtrWVTiFo",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_8.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-ed-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-writing-life-song-vocal"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9493/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-writing-life-song-tv"
        },
        {
          "target": "recording",
          "fields": [
            "format"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9493/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-writing-life-song-tv"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9493/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01251"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01282"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1332984546"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1332984546"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1332984536"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1332984536"
        },
        {
          "target": "video",
          "fields": [
            "title",
            "type",
            "url"
          ],
          "sourceUrls": [
            "https://www.youtube.com/watch?v=m5WtrWVTiFo"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "m5WtrWVTiFo"
        }
      ],
      "links": [
        {
          "platform": "Apple Music",
          "label": "Writing Life｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1332984546",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1332984536",
          "recordingId": "yu-gi-oh-vrains-writing-life-song-vocal"
        }
      ],
      "lastVerifiedAt": "2026-11-19",
      "credits": [
        {
          "name": "福山匠",
          "role": "lyrics"
        },
        {
          "name": "児玉一真",
          "role": "composition"
        },
        {
          "name": "Goodbye holiday",
          "role": "arrangement"
        }
      ],
      "recordings": [
        {
          "id": "yu-gi-oh-vrains-writing-life-song-vocal",
          "title": "Writing Life",
          "kind": "vocal",
          "format": "unknown"
        },
        {
          "id": "yu-gi-oh-vrains-writing-life-song-tv",
          "title": "Writing Life（TVサイズ）",
          "kind": "vocal",
          "format": "tv"
        }
      ],
      "releases": [
        {
          "id": "mjsa-01251",
          "title": "遊☆戯☆王VRAINS SOUND DUEL1",
          "type": "soundtrack",
          "artistDisplayName": "光宗信吉ほか",
          "date": {
            "value": "2018-11-28",
            "precision": "day"
          },
          "edition": "日本原聲CD",
          "region": "JP",
          "tracks": [
            {
              "title": "Writing Life（TVサイズ）",
              "position": 30,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-writing-life-song-tv"
            }
          ],
          "catalogNumber": "MJSA-01251"
        },
        {
          "id": "mjsa-01282",
          "title": "遊☆戯☆王VRAINS VOCAL BEST",
          "type": "compilation",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2020-04-08",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "Writing Life",
              "position": 5,
              "disc": 1
            }
          ],
          "catalogNumber": "MJSA-01282"
        },
        {
          "id": "apple-hk-1332984536",
          "title": "ドッペルゲンガー",
          "type": "album",
          "artistDisplayName": "Goodbye holiday",
          "date": {
            "value": "2018-01-24",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "Writing Life",
              "position": 7,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-writing-life-song-vocal"
            }
          ]
        }
      ]
    },
    {
      "id": "yu-gi-oh-vrains-ed-3",
      "songId": "yu-gi-oh-vrains-boy-song",
      "type": "ED",
      "sequence": 3,
      "titleJa": "BOY",
      "artistDisplayName": "uchuu;",
      "seasonIds": [
        "2018-spring"
      ],
      "usageLabel": "日本TV第47–70話片尾（2018/4/11–9/26）。春為第47–57話，夏為第58–70話。",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.marv.jp/titles/mc/9809/",
          "label": "Marvelous 歷代片頭、片尾正式曲名、演唱及曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.youtube.com/watch?v=FgoHAYDrgTY",
          "label": "唱片方對應曲目或電視台當回節目表",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_6.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_5.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://cal.syoboi.jp/tid/4592",
          "label": "逐話用曲、首末話、最終話例外與製作署名",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9591/",
          "label": "Marvelous 正版原聲帶TV剪輯、日期、品番與曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1367471693",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1367471696",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1438111426",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1438111428",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
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
            "https://www.marv.jp/titles/mc/9809/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-boy-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/",
            "https://www.youtube.com/watch?v=FgoHAYDrgTY",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_7.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_6.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_5.html",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-ed-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-boy-song-vocal"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-boy-song-tv"
        },
        {
          "target": "recording",
          "fields": [
            "format"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-boy-song-tv"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01265"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01282"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1367471696"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1367471696"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1367471693"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1367471693"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1438111426"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-boy-song-remix"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1438111428"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1438111428"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1438111426"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1438111426"
        },
        {
          "target": "video",
          "fields": [
            "title",
            "type",
            "url"
          ],
          "sourceUrls": [
            "https://www.youtube.com/watch?v=FgoHAYDrgTY"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "FgoHAYDrgTY"
        }
      ],
      "links": [
        {
          "platform": "Apple Music",
          "label": "Boy｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1367471696",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1367471693",
          "recordingId": "yu-gi-oh-vrains-boy-song-vocal"
        },
        {
          "platform": "Apple Music",
          "label": "BOY (80KIDZ Remix)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1438111428",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1438111426",
          "recordingId": "yu-gi-oh-vrains-boy-song-remix"
        }
      ],
      "lastVerifiedAt": "2026-11-19",
      "credits": [
        {
          "name": "K",
          "role": "lyrics"
        },
        {
          "name": "K",
          "role": "composition"
        },
        {
          "name": "K",
          "role": "arrangement"
        }
      ],
      "recordings": [
        {
          "id": "yu-gi-oh-vrains-boy-song-vocal",
          "title": "BOY",
          "kind": "vocal",
          "format": "unknown"
        },
        {
          "id": "yu-gi-oh-vrains-boy-song-tv",
          "title": "BOY (TV size)",
          "kind": "vocal",
          "format": "tv"
        },
        {
          "id": "yu-gi-oh-vrains-boy-song-remix",
          "title": "BOY (80KIDZ Remix)",
          "kind": "remix",
          "format": "unknown"
        }
      ],
      "releases": [
        {
          "id": "mjsa-01265",
          "title": "遊☆戯☆王VRAINS SOUND DUEL2",
          "type": "soundtrack",
          "artistDisplayName": "光宗信吉ほか",
          "date": {
            "value": "2019-03-27",
            "precision": "day"
          },
          "edition": "日本原聲CD",
          "region": "JP",
          "tracks": [
            {
              "title": "BOY (TV size)",
              "position": 17,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-boy-song-tv"
            }
          ],
          "catalogNumber": "MJSA-01265"
        },
        {
          "id": "mjsa-01282",
          "title": "遊☆戯☆王VRAINS VOCAL BEST",
          "type": "compilation",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2020-04-08",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "BOY",
              "position": 6,
              "disc": 1
            }
          ],
          "catalogNumber": "MJSA-01282"
        },
        {
          "id": "apple-hk-1367471693",
          "title": "Boy - Single",
          "type": "single",
          "artistDisplayName": "uchuu;",
          "date": {
            "value": "2018-04-11",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "Boy",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-boy-song-vocal"
            }
          ]
        },
        {
          "id": "apple-hk-1438111426",
          "title": "2069 Remixes - Single",
          "type": "single",
          "artistDisplayName": "uchuu;",
          "date": {
            "value": "2018-10-12",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "BOY (80KIDZ Remix)",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-boy-song-remix"
            }
          ]
        }
      ]
    },
    {
      "id": "yu-gi-oh-vrains-ed-4",
      "songId": "yu-gi-oh-vrains-glory-song",
      "type": "ED",
      "sequence": 4,
      "titleJa": "glory",
      "artistDisplayName": "BAND-MAID",
      "seasonIds": [
        "2018-fall",
        "2019-winter"
      ],
      "usageLabel": "日本TV第71–95話片尾（2018/10/3–2019/3/27）。2018秋為第71–83話，2019冬為第84–95話。",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.marv.jp/titles/mc/9809/",
          "label": "Marvelous 歷代片頭、片尾正式曲名、演唱及曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://bandmaid.tokyo/musics/6749",
          "label": "唱片方對應曲目或電視台當回節目表",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_5.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_4.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_3.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://cal.syoboi.jp/tid/4592",
          "label": "逐話用曲、首末話、最終話例外與製作署名",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9591/",
          "label": "Marvelous 正版原聲帶TV剪輯、日期、品番與曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1436267232",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1436267233",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.youtube.com/watch?v=TAMiLTiXPpU",
          "label": "權利方公開影片或供稿音軌及簡介",
          "role": "first_party",
          "language": "ja",
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
            "https://www.marv.jp/titles/mc/9809/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-glory-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/",
            "https://bandmaid.tokyo/musics/6749",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_5.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_4.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_3.html",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-ed-4"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-glory-song-vocal"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-glory-song-tv"
        },
        {
          "target": "recording",
          "fields": [
            "format"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-glory-song-tv"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9591/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01265"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01282"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1436267233"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1436267233"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1436267232"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1436267232"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://bandmaid.tokyo/musics/6749"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "crcp-10419"
        },
        {
          "target": "video",
          "fields": [
            "title",
            "type",
            "url"
          ],
          "sourceUrls": [
            "https://www.youtube.com/watch?v=TAMiLTiXPpU"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "TAMiLTiXPpU"
        }
      ],
      "links": [
        {
          "platform": "Apple Music",
          "label": "glory｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1436267233",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1436267232",
          "recordingId": "yu-gi-oh-vrains-glory-song-vocal"
        }
      ],
      "lastVerifiedAt": "2026-11-19",
      "credits": [
        {
          "name": "Miku Kobato",
          "role": "lyrics"
        },
        {
          "name": "BAND-MAID",
          "role": "composition"
        },
        {
          "name": "BAND-MAID",
          "role": "arrangement"
        }
      ],
      "recordings": [
        {
          "id": "yu-gi-oh-vrains-glory-song-vocal",
          "title": "glory",
          "kind": "vocal",
          "format": "unknown"
        },
        {
          "id": "yu-gi-oh-vrains-glory-song-tv",
          "title": "glory (TV size)",
          "kind": "vocal",
          "format": "tv"
        }
      ],
      "releases": [
        {
          "id": "mjsa-01265",
          "title": "遊☆戯☆王VRAINS SOUND DUEL2",
          "type": "soundtrack",
          "artistDisplayName": "光宗信吉ほか",
          "date": {
            "value": "2019-03-27",
            "precision": "day"
          },
          "edition": "日本原聲CD",
          "region": "JP",
          "tracks": [
            {
              "title": "glory (TV size)",
              "position": 30,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-glory-song-tv"
            }
          ],
          "catalogNumber": "MJSA-01265"
        },
        {
          "id": "mjsa-01282",
          "title": "遊☆戯☆王VRAINS VOCAL BEST",
          "type": "compilation",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2020-04-08",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "glory",
              "position": 7,
              "disc": 1
            }
          ],
          "catalogNumber": "MJSA-01282"
        },
        {
          "id": "apple-hk-1436267232",
          "title": "glory - Single",
          "type": "single",
          "artistDisplayName": "BAND-MAID",
          "date": {
            "value": "2018-10-04",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "glory",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-glory-song-vocal"
            }
          ]
        },
        {
          "id": "crcp-10419",
          "title": "glory",
          "type": "single",
          "artistDisplayName": "BAND-MAID",
          "date": {
            "value": "2019-01-16",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "glory",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-glory-song-vocal"
            }
          ],
          "catalogNumber": "CRCP-10419"
        }
      ]
    },
    {
      "id": "yu-gi-oh-vrains-ed-5",
      "songId": "yu-gi-oh-vrains-are-you-ready-song",
      "type": "ED",
      "sequence": 5,
      "titleJa": "Are you ready?",
      "artistDisplayName": "BiS",
      "seasonIds": [
        "2019-spring",
        "2019-summer"
      ],
      "usageLabel": "日本TV第96–119話片尾（2019/4/3–9/18）。春為第96–107話、夏為第108–119話。9/25最終話另有特別片尾。",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.marv.jp/titles/mc/9809/",
          "label": "Marvelous 歷代片頭、片尾正式曲名、演唱及曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201909/23144_201909181825.html",
          "label": "唱片方對應曲目或電視台當回節目表",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_3.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_2.html",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/",
          "label": "テレビ東京逐話原播日期",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://cal.syoboi.jp/tid/4592",
          "label": "逐話用曲、首末話、最終話例外與製作署名",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9731/",
          "label": "Marvelous 正版原聲帶TV剪輯、日期、品番與曲序",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1455482537",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1455482538",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1455482541",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/album/1483190948",
          "label": "Apple Music 香港專輯與曲序",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://music.apple.com/hk/song/1483191247",
          "label": "Apple Music 香港正版曲目",
          "role": "first_party",
          "language": "zh-Hant",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.youtube.com/watch?v=wCQKAXoenBU",
          "label": "權利方公開影片或供稿音軌及簡介",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://yugioh-starlight.com/archives/53843207.html",
          "label": "日本原播當晚對最終回片頭及末段歌曲的即時記錄",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201909/23144_201909251825.html",
          "label": "テレビ東京預告節目表仍列本季常規片尾",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-11-19"
        },
        {
          "url": "https://www.crunchyroll.com/watch/GR9VQE596/connected-world",
          "label": "授權日語字幕版第120話節目頁",
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
            "https://www.marv.jp/titles/mc/9809/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-are-you-ready-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/",
            "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201909/23144_201909181825.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_3.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/index_2.html",
            "https://www.tv-tokyo.co.jp/anime/yugioh-vrains/episodes/",
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-ed-5"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/4592"
          ],
          "verifiedAt": "2026-11-19"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-are-you-ready-song-vocal"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9731/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-are-you-ready-song-tv"
        },
        {
          "target": "recording",
          "fields": [
            "format"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9731/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-are-you-ready-song-tv"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9731/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01276"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist",
            "catalog_number"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9809/"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "mjsa-01282"
        },
        {
          "target": "recording",
          "fields": [
            "title",
            "kind"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1455482537"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "yu-gi-oh-vrains-are-you-ready-song-instrumental"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1455482538"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1455482538"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1455482541"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1455482541"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1455482537"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1455482537"
        },
        {
          "target": "link",
          "fields": [
            "url",
            "type"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/song/1483191247"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "https://music.apple.com/hk/song/1483191247"
        },
        {
          "target": "release",
          "fields": [
            "title",
            "date",
            "edition",
            "tracklist"
          ],
          "sourceUrls": [
            "https://music.apple.com/hk/album/1483190948"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "apple-hk-1483190948"
        },
        {
          "target": "video",
          "fields": [
            "title",
            "type",
            "url"
          ],
          "sourceUrls": [
            "https://www.youtube.com/watch?v=wCQKAXoenBU"
          ],
          "verifiedAt": "2026-11-19",
          "targetId": "wCQKAXoenBU"
        }
      ],
      "links": [
        {
          "platform": "Apple Music",
          "label": "Are you ready?｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1455482538",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1455482537",
          "recordingId": "yu-gi-oh-vrains-are-you-ready-song-vocal"
        },
        {
          "platform": "Apple Music",
          "label": "Are you ready?(instrumental)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1455482541",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1455482537",
          "recordingId": "yu-gi-oh-vrains-are-you-ready-song-instrumental"
        },
        {
          "platform": "Apple Music",
          "label": "Are you ready?(TV size)｜Apple Music HK",
          "url": "https://music.apple.com/hk/song/1483191247",
          "linkType": "direct_track",
          "region": "HK",
          "availability": "unknown",
          "verifiedAt": "2026-11-19",
          "releaseId": "apple-hk-1483190948",
          "recordingId": "yu-gi-oh-vrains-are-you-ready-song-tv"
        }
      ],
      "lastVerifiedAt": "2026-11-19",
      "credits": [
        {
          "name": "松隈ケンタ",
          "role": "lyrics"
        },
        {
          "name": "JxSxK",
          "role": "lyrics"
        },
        {
          "name": "松隈ケンタ",
          "role": "composition"
        },
        {
          "name": "Satoshi Toyosumi",
          "role": "arrangement"
        },
        {
          "name": "Ichiro Iguchi",
          "role": "arrangement"
        },
        {
          "name": "Kazuki Sato",
          "role": "arrangement"
        },
        {
          "name": "oni",
          "role": "arrangement"
        },
        {
          "name": "Kohei Abe",
          "role": "arrangement"
        },
        {
          "name": "Kotaro Nakatani",
          "role": "arrangement"
        },
        {
          "name": "Ohara just begun",
          "role": "arrangement"
        }
      ],
      "recordings": [
        {
          "id": "yu-gi-oh-vrains-are-you-ready-song-vocal",
          "title": "Are you ready?",
          "kind": "vocal",
          "format": "unknown"
        },
        {
          "id": "yu-gi-oh-vrains-are-you-ready-song-tv",
          "title": "Are you ready? (TV size)",
          "kind": "vocal",
          "format": "tv"
        },
        {
          "id": "yu-gi-oh-vrains-are-you-ready-song-instrumental",
          "title": "Are you ready?(instrumental)",
          "kind": "instrumental",
          "format": "unknown"
        }
      ],
      "releases": [
        {
          "id": "mjsa-01276",
          "title": "遊☆戯☆王VRAINS SOUND DUEL3",
          "type": "soundtrack",
          "artistDisplayName": "光宗信吉ほか",
          "date": {
            "value": "2019-10-30",
            "precision": "day"
          },
          "edition": "日本原聲CD",
          "region": "JP",
          "tracks": [
            {
              "title": "Are you ready? (TV size)",
              "position": 25,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-are-you-ready-song-tv"
            }
          ],
          "catalogNumber": "MJSA-01276"
        },
        {
          "id": "mjsa-01282",
          "title": "遊☆戯☆王VRAINS VOCAL BEST",
          "type": "compilation",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2020-04-08",
            "precision": "day"
          },
          "edition": "日本CD",
          "region": "JP",
          "tracks": [
            {
              "title": "Are you ready?",
              "position": 8,
              "disc": 1
            }
          ],
          "catalogNumber": "MJSA-01282"
        },
        {
          "id": "apple-hk-1455482537",
          "title": "Are you ready?",
          "type": "single",
          "artistDisplayName": "BiS",
          "date": {
            "value": "2019-03-20",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "Are you ready?",
              "position": 1,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-are-you-ready-song-vocal"
            },
            {
              "title": "Are you ready?(instrumental)",
              "position": 3,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-are-you-ready-song-instrumental"
            }
          ]
        },
        {
          "id": "apple-hk-1483190948",
          "title": "遊☆戯☆王VRAINS SOUND DUEL3",
          "type": "soundtrack",
          "artistDisplayName": "Various Artists",
          "date": {
            "value": "2019-10-30",
            "precision": "day"
          },
          "edition": "香港區數位版",
          "region": "HK",
          "tracks": [
            {
              "title": "Are you ready?(TV size)",
              "position": 25,
              "disc": 1,
              "recordingId": "yu-gi-oh-vrains-are-you-ready-song-tv"
            }
          ]
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence"
          ],
          "note": "第 120 話電視台節目表沿列常規片尾〈Are you ready?〉，播出當晚記錄及逐話資料指向〈With The Wind〉。",
          "resumeWhen": "取得日本原播完整片尾、權利方逐話曲表或可定位的授權日語版掛字，再登錄終話用曲與剪輯。",
          "checkedAt": "2026-11-19"
        }
      ]
    }
  ]
},
  {
    "id": "curated-132695",
    "anilistId": 132695,
    "slug": "oshiri-tantei-3",
    "titleJa": "おしりたんてい (第3シリーズ)",
    "titleRomaji": "Oshiri Tantei 3",
    "seasonIds": [
      "2019-summer"
    ],
    "startDate": "2019-07-06",
    "editorialWeekday": 6,
    "broadcastTimeJst": "09:00",
    "broadcastLabel": "NHK Eテレ在2019年7月6日起的週六09:00 JST時段首播第27–39話。",
    "status": "finished",
    "verifiedAt": "2026-11-20",
    "metadataVerifiedAt": "2026-11-20",
    "officialSiteUrl": "https://oshiri-tantei.com/",
    "anilistUrl": "https://anilist.co/anime/132695",
    "imageSourceUrl": "https://anilist.co/anime/132695",
    "imageSourceLabel": "AniList 公開媒體頁",
    "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132695-YemMO4GLHnsD.jpg",
    "sourceReferenceUrls": [
      "https://oshiri-tantei.com/",
      "https://anilist.co/anime/132695"
    ],
    "metadataSources": [
      {
        "url": "https://corp.toei-anim.co.jp/ja/press/press-2630364728101456403.html",
        "label": "東映：電視原播及12月常規編成",
        "language": "ja",
        "role": "first_party",
        "verifiedAt": "2026-11-20"
      },
      {
        "url": "https://oshiri-tantei.com/news/2019070201.html",
        "label": "動畫官網：第三期新作與第27至39話播出安排",
        "language": "ja",
        "role": "first_party",
        "verifiedAt": "2026-11-20"
      },
      {
        "url": "https://oshiri-tantei.com/news/",
        "label": "動畫官網：逐話消息與播映季度",
        "language": "ja",
        "role": "first_party",
        "verifiedAt": "2026-11-20"
      },
      {
        "url": "https://modappweb1.chtmod.tv/modweb/product/524557.do?cs=2",
        "label": "中華電信MOD：正版繁中作品名稱",
        "language": "zh-Hant",
        "role": "first_party",
        "verifiedAt": "2026-11-20"
      },
      {
        "url": "https://www.lanovelibrary.com/oshiri-tantei/",
        "label": "日本分期及話數交叉資料",
        "language": "ja",
        "role": "broadcast_cross_check",
        "verifiedAt": "2026-11-20"
      }
    ],
    "themes": [
      {
        "id": "oshiri-tantei-3-op-1",
        "songId": "oshiri-tantei-4-op-1-song",
        "type": "OP",
        "sequence": 1,
        "titleJa": "ププッとフムッとかいけつダンス",
        "artistDisplayName": "伊勢大貴",
        "seasonIds": [
          "2019-summer"
        ],
        "usageLabel": "日本電視第3期（全作第27–39話）的常規片頭。",
        "sourceMode": "explicit",
        "sources": [
          {
            "url": "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/",
            "label": "動畫製作方東映：片頭正式曲名、演唱及詞曲編",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://columbia.jp/prod-info/COCX-40382/",
            "label": "日本古倫美亞：迷你專輯第1、2軌與八名兒童合唱者",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://www.lanovelibrary.com/oshiri-tantei/",
            "label": "日本分期及話數交叉資料",
            "language": "ja",
            "role": "cross_check",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://corp.toei-anim.co.jp/ja/press/press-2630364728101456403.html",
            "label": "東映：電視原播及12月常規編成",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://oshiri-tantei.com/news/2019070201.html",
            "label": "動畫官網：第三期新作與第27至39話播出安排",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://oshiri-tantei.com/news/",
            "label": "動畫官網：逐話消息與播映季度",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://oshiri-tantei.com/goods/dvd/cd01.html",
            "label": "動畫官網：主題歌迷你專輯製作及曲序",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://columbia.jp/prod-info/COCX-41245/",
            "label": "日本古倫美亞：原聲帶第2軌演唱版",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://itunes.apple.com/lookup?id=1443710491&country=jp&entity=song",
            "label": "Apple 日本：正版數位曲目、曲序、可串流狀態",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://oshiri-movie.com/shiriarty/modal/staff.html",
            "label": "電影官網：長篇電影片尾改編名義",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://oshiri-tantei.com/news/2025071101.html",
            "label": "動畫官網：音頭改編者、主唱及配信公告",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://itunes.apple.com/lookup?id=1557891252&country=hk&entity=song",
            "label": "Apple 香港：正版數位曲目、曲序、可串流狀態",
            "language": "en",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://itunes.apple.com/lookup?id=1613843017&country=hk&entity=song",
            "label": "Apple 香港：正版數位曲目、曲序、可串流狀態",
            "language": "en",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://itunes.apple.com/lookup?id=1317253827&country=jp&entity=song",
            "label": "Apple 日本：正版數位曲目、曲序、可串流狀態",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://itunes.apple.com/lookup?id=1557891252&country=jp&entity=song",
            "label": "Apple 日本：正版數位曲目、曲序、可串流狀態",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://itunes.apple.com/lookup?id=1613843017&country=jp&entity=song",
            "label": "Apple 日本：正版數位曲目、曲序、可串流狀態",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://itunes.apple.com/lookup?id=1826670393&country=jp&entity=song",
            "label": "Apple 日本：正版數位曲目、曲序、可串流狀態",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://s.awa.fm/track/a15a93632a4d6e3ed217",
            "label": "AWA：音頭錄音官方曲目",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://www.youtube.com/watch?v=_fhJiPPrjDg",
            "label": "東映アニメーション公式YouTubeチャンネル：官方影片頁片名及頻道",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://www.youtube.com/watch?v=QQtADXMLz2Y",
            "label": "Daiki Ise - Topic：官方影片頁片名及頻道",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://www.youtube.com/watch?v=0JmetSDHV8k",
            "label": "Daiki Ise - Topic：官方影片頁片名及頻道",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://www.youtube.com/watch?v=nroWmm0qfoQ",
            "label": "とうあにパーク【東映アニメーション公式キッズチャンネル】：官方影片頁片名及頻道",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          },
          {
            "url": "https://www.youtube.com/watch?v=zlFYS-_aIQI",
            "label": "東映映画チャンネル：官方影片頁片名及頻道",
            "language": "ja",
            "role": "first_party",
            "verifiedAt": "2026-11-20"
          }
        ],
        "evidence": [
          {
            "target": "anime_use",
            "fields": [
              "usage"
            ],
            "sourceUrls": [
              "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/",
              "https://columbia.jp/prod-info/COCX-40382/",
              "https://www.lanovelibrary.com/oshiri-tantei/",
              "https://corp.toei-anim.co.jp/ja/press/press-2630364728101456403.html",
              "https://oshiri-tantei.com/news/2019070201.html",
              "https://oshiri-tantei.com/news/"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "oshiri-tantei-3-op-1"
          },
          {
            "target": "song",
            "fields": [
              "title",
              "artist"
            ],
            "sourceUrls": [
              "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/",
              "https://columbia.jp/prod-info/COCX-40382/"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "oshiri-tantei-4-op-1-song"
          },
          {
            "target": "credits",
            "fields": [
              "credits"
            ],
            "sourceUrls": [
              "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/",
              "https://oshiri-tantei.com/goods/dvd/cd01.html"
            ],
            "verifiedAt": "2026-11-20"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/",
              "https://columbia.jp/prod-info/COCX-40382/",
              "https://columbia.jp/prod-info/COCX-41245/"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "oshiri-tantei-4-op-1-song-original"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1443710491&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "oshiri-tantei-4-op-1-song-karaoke"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://oshiri-tantei.com/goods/dvd/cd01.html",
              "https://columbia.jp/prod-info/COCX-40382/"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "oshiri-tantei-4-op-1-song-kids"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://oshiri-movie.com/shiriarty/modal/staff.html"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "oshiri-tantei-4-op-1-song-film"
          },
          {
            "target": "recording",
            "fields": [
              "title",
              "kind"
            ],
            "sourceUrls": [
              "https://oshiri-tantei.com/news/2025071101.html"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "oshiri-tantei-4-op-1-song-ondo"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://columbia.jp/prod-info/COCX-40382/",
              "https://oshiri-tantei.com/goods/dvd/cd01.html"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "cocx-40382"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist",
              "catalog_number"
            ],
            "sourceUrls": [
              "https://columbia.jp/prod-info/COCX-41245/"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "cocx-41245"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1557891252&country=hk&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "apple-hk-1557891252"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1557891252&country=hk&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://music.apple.com/hk/song/1557891257"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1613843017&country=hk&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "apple-hk-1613843017"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1613843017&country=hk&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://music.apple.com/hk/song/1613843021"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1317253827&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "apple-jp-1317253827"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1317253827&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://music.apple.com/jp/song/1317253832"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1443710491&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "apple-jp-1443710491"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1443710491&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://music.apple.com/jp/song/1443710492"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1557891252&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "apple-jp-1557891252"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1557891252&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://music.apple.com/jp/song/1557891257"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1613843017&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "apple-jp-1613843017"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1613843017&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://music.apple.com/jp/song/1613843021"
          },
          {
            "target": "release",
            "fields": [
              "title",
              "date",
              "edition",
              "tracklist"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1826670393&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "apple-jp-1826670393"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type",
              "availability"
            ],
            "sourceUrls": [
              "https://itunes.apple.com/lookup?id=1826670393&country=jp&entity=song"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://music.apple.com/jp/song/1826670394"
          },
          {
            "target": "link",
            "fields": [
              "url",
              "type"
            ],
            "sourceUrls": [
              "https://s.awa.fm/track/a15a93632a4d6e3ed217"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "https://s.awa.fm/track/a15a93632a4d6e3ed217"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=_fhJiPPrjDg"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "_fhJiPPrjDg"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=QQtADXMLz2Y"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "QQtADXMLz2Y"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=0JmetSDHV8k"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "0JmetSDHV8k"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=nroWmm0qfoQ"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "nroWmm0qfoQ"
          },
          {
            "target": "video",
            "fields": [
              "title",
              "type"
            ],
            "sourceUrls": [
              "https://www.youtube.com/watch?v=zlFYS-_aIQI"
            ],
            "verifiedAt": "2026-11-20",
            "targetId": "zlFYS-_aIQI"
          }
        ],
        "credits": [
          {
            "role": "vocals",
            "name": "伊勢大貴"
          },
          {
            "role": "lyrics",
            "name": "藤本記子"
          },
          {
            "role": "composition",
            "name": "小杉保夫"
          },
          {
            "role": "arrangement",
            "name": "高木洋"
          }
        ],
        "lastVerifiedAt": "2026-11-20",
        "links": [
          {
            "platform": "Apple Music",
            "url": "https://music.apple.com/hk/song/1557891257",
            "label": "ププッとフムッとかいけつダンス｜香港串流",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "oshiri-tantei-4-op-1-song-original",
            "releaseId": "apple-hk-1557891252",
            "availability": "available",
            "verifiedAt": "2026-11-20"
          },
          {
            "platform": "Apple Music",
            "url": "https://music.apple.com/hk/song/1613843021",
            "label": "Puputto Fumutto Kaiketsu Dance (Produced by Fukuyama Masaharu)｜香港串流",
            "linkType": "direct_track",
            "region": "HK",
            "recordingId": "oshiri-tantei-4-op-1-song-film",
            "releaseId": "apple-hk-1613843017",
            "availability": "available",
            "verifiedAt": "2026-11-20"
          },
          {
            "platform": "Apple Music",
            "url": "https://music.apple.com/jp/song/1317253832",
            "label": "ププッとフムッとかいけつダンス｜日本串流",
            "linkType": "direct_track",
            "region": "JP",
            "recordingId": "oshiri-tantei-4-op-1-song-original",
            "releaseId": "apple-jp-1317253827",
            "availability": "available",
            "verifiedAt": "2026-11-20"
          },
          {
            "platform": "Apple Music",
            "url": "https://music.apple.com/jp/song/1443710492",
            "label": "ププッとフムッとかいけつダンス(カラオケ)｜日本串流",
            "linkType": "direct_track",
            "region": "JP",
            "recordingId": "oshiri-tantei-4-op-1-song-karaoke",
            "releaseId": "apple-jp-1443710491",
            "availability": "available",
            "verifiedAt": "2026-11-20"
          },
          {
            "platform": "Apple Music",
            "url": "https://music.apple.com/jp/song/1557891257",
            "label": "ププッとフムッとかいけつダンス｜日本串流",
            "linkType": "direct_track",
            "region": "JP",
            "recordingId": "oshiri-tantei-4-op-1-song-original",
            "releaseId": "apple-jp-1557891252",
            "availability": "available",
            "verifiedAt": "2026-11-20"
          },
          {
            "platform": "Apple Music",
            "url": "https://music.apple.com/jp/song/1613843021",
            "label": "ププッとフムッとかいけつダンス (Produced by 福山雅治)｜日本串流",
            "linkType": "direct_track",
            "region": "JP",
            "recordingId": "oshiri-tantei-4-op-1-song-film",
            "releaseId": "apple-jp-1613843017",
            "availability": "available",
            "verifiedAt": "2026-11-20"
          },
          {
            "platform": "Apple Music",
            "url": "https://music.apple.com/jp/song/1826670394",
            "label": "おしりたんてい音頭～ププッとフムッとかいけつダンス～｜日本串流",
            "linkType": "direct_track",
            "region": "JP",
            "recordingId": "oshiri-tantei-4-op-1-song-ondo",
            "releaseId": "apple-jp-1826670393",
            "availability": "available",
            "verifiedAt": "2026-11-20"
          },
          {
            "platform": "AWA",
            "url": "https://s.awa.fm/track/a15a93632a4d6e3ed217",
            "label": "おしりたんてい音頭｜日本曲目",
            "region": "JP",
            "recordingId": "oshiri-tantei-4-op-1-song-ondo",
            "availability": "unknown",
            "linkType": "direct_track",
            "verifiedAt": "2026-11-20"
          }
        ],
        "recordings": [
          {
            "id": "oshiri-tantei-4-op-1-song-original",
            "title": "ププッとフムッとかいけつダンス",
            "kind": "vocal",
            "format": "unknown",
            "credits": [
              {
                "role": "vocals",
                "name": "伊勢大貴"
              }
            ]
          },
          {
            "id": "oshiri-tantei-4-op-1-song-karaoke",
            "title": "ププッとフムッとかいけつダンス（カラオケ）",
            "kind": "instrumental",
            "format": "unknown"
          },
          {
            "id": "oshiri-tantei-4-op-1-song-kids",
            "title": "ププッとフムッとかいけつダンス ～こどもコーラスバージョン～",
            "kind": "vocal",
            "format": "unknown",
            "credits": [
              {
                "role": "vocals",
                "name": "田口乙葉"
              },
              {
                "role": "vocals",
                "name": "後本萌葉"
              },
              {
                "role": "vocals",
                "name": "黒嵜菜々子"
              },
              {
                "role": "vocals",
                "name": "三浦瑚都"
              },
              {
                "role": "vocals",
                "name": "小泉柚奈"
              },
              {
                "role": "vocals",
                "name": "只野維織"
              },
              {
                "role": "vocals",
                "name": "山本幸輝"
              },
              {
                "role": "vocals",
                "name": "佐久間玲駈"
              }
            ]
          },
          {
            "id": "oshiri-tantei-4-op-1-song-film",
            "title": "ププッとフムッとかいけつダンス（Produced by 福山雅治）",
            "kind": "rearrangement",
            "format": "unknown",
            "credits": [
              {
                "role": "vocals",
                "name": "伊勢大貴"
              },
              {
                "role": "arrangement",
                "name": "福山雅治"
              }
            ]
          },
          {
            "id": "oshiri-tantei-4-op-1-song-ondo",
            "title": "おしりたんてい音頭～ププッとフムッとかいけつダンス～",
            "kind": "rearrangement",
            "format": "unknown",
            "credits": [
              {
                "role": "vocals",
                "name": "伊勢大貴"
              },
              {
                "role": "arrangement",
                "name": "長谷川智樹"
              }
            ]
          }
        ],
        "releases": [
          {
            "id": "cocx-40382",
            "title": "おしりたんてい 主題歌ミニアルバム",
            "artistDisplayName": "伊勢大貴ほか",
            "type": "ep",
            "region": "JP",
            "date": {
              "value": "2018-06-20",
              "precision": "day"
            },
            "edition": "日本迷你專輯CD",
            "tracks": [
              {
                "title": "ププッとフムッとかいけつダンス",
                "disc": 1,
                "position": 1,
                "recordingId": "oshiri-tantei-4-op-1-song-original"
              },
              {
                "title": "ププッとフムッとかいけつダンス ～こどもコーラスバージョン～",
                "disc": 1,
                "position": 2,
                "recordingId": "oshiri-tantei-4-op-1-song-kids"
              }
            ],
            "catalogNumber": "COCX-40382",
            "label": "日本コロムビア"
          },
          {
            "id": "cocx-41245",
            "title": "おしりたんてい オリジナル・サウンドトラック",
            "artistDisplayName": "高木洋",
            "type": "soundtrack",
            "region": "JP",
            "date": {
              "value": "2020-09-23",
              "precision": "day"
            },
            "edition": "日本原聲帶CD",
            "tracks": [
              {
                "title": "ププッとフムッとかいけつダンス",
                "disc": 1,
                "position": 2,
                "recordingId": "oshiri-tantei-4-op-1-song-original"
              }
            ],
            "catalogNumber": "COCX-41245",
            "label": "日本コロムビア"
          },
          {
            "id": "apple-hk-1557891252",
            "title": "おしりたんてい オリジナル・サウンドトラック",
            "artistDisplayName": "高木洋",
            "type": "soundtrack",
            "region": "HK",
            "date": {
              "value": "2020-09-23",
              "precision": "day"
            },
            "edition": "數位發行版",
            "tracks": [
              {
                "title": "ププッとフムッとかいけつダンス",
                "disc": 1,
                "position": 2,
                "recordingId": "oshiri-tantei-4-op-1-song-original"
              }
            ]
          },
          {
            "id": "apple-hk-1613843017",
            "title": "Puputto Fumutto Kaiketsu Dance (Produced by Fukuyama Masaharu) - Single",
            "artistDisplayName": "Daiki Ise",
            "type": "single",
            "region": "HK",
            "date": {
              "value": "2022-03-18",
              "precision": "day"
            },
            "edition": "數位發行版",
            "tracks": [
              {
                "title": "Puputto Fumutto Kaiketsu Dance (Produced by Fukuyama Masaharu)",
                "disc": 1,
                "position": 1,
                "recordingId": "oshiri-tantei-4-op-1-song-film"
              }
            ]
          },
          {
            "id": "apple-jp-1317253827",
            "title": "ププッとフムッとかいけつダンス - Single",
            "artistDisplayName": "伊勢大貴",
            "type": "single",
            "region": "JP",
            "date": {
              "value": "2017-12-08",
              "precision": "day"
            },
            "edition": "數位發行版",
            "tracks": [
              {
                "title": "ププッとフムッとかいけつダンス",
                "disc": 1,
                "position": 1,
                "recordingId": "oshiri-tantei-4-op-1-song-original"
              }
            ]
          },
          {
            "id": "apple-jp-1443710491",
            "title": "ププッとフムッとかいけつダンス(カラオケ) - Single",
            "artistDisplayName": "伊勢大貴",
            "type": "single",
            "region": "JP",
            "date": {
              "value": "2018-11-28",
              "precision": "day"
            },
            "edition": "數位發行版",
            "tracks": [
              {
                "title": "ププッとフムッとかいけつダンス(カラオケ)",
                "disc": 1,
                "position": 1,
                "recordingId": "oshiri-tantei-4-op-1-song-karaoke"
              }
            ]
          },
          {
            "id": "apple-jp-1557891252",
            "title": "おしりたんてい オリジナル・サウンドトラック",
            "artistDisplayName": "高木洋",
            "type": "soundtrack",
            "region": "JP",
            "date": {
              "value": "2020-09-23",
              "precision": "day"
            },
            "edition": "數位發行版",
            "tracks": [
              {
                "title": "ププッとフムッとかいけつダンス",
                "disc": 1,
                "position": 2,
                "recordingId": "oshiri-tantei-4-op-1-song-original"
              }
            ]
          },
          {
            "id": "apple-jp-1613843017",
            "title": "Puputto Fumutto Kaiketsu Dance (Produced by Fukuyama Masaharu) - Single",
            "artistDisplayName": "伊勢大貴",
            "type": "single",
            "region": "JP",
            "date": {
              "value": "2022-03-18",
              "precision": "day"
            },
            "edition": "數位發行版",
            "tracks": [
              {
                "title": "ププッとフムッとかいけつダンス (Produced by 福山雅治)",
                "disc": 1,
                "position": 1,
                "recordingId": "oshiri-tantei-4-op-1-song-film"
              }
            ]
          },
          {
            "id": "apple-jp-1826670393",
            "title": "おしりたんてい音頭～ププッとフムッとかいけつダンス～ - Single",
            "artistDisplayName": "伊勢大貴",
            "type": "single",
            "region": "JP",
            "date": {
              "value": "2025-07-19",
              "precision": "day"
            },
            "edition": "數位發行版",
            "tracks": [
              {
                "title": "おしりたんてい音頭～ププッとフムッとかいけつダンス～",
                "disc": 1,
                "position": 1,
                "recordingId": "oshiri-tantei-4-op-1-song-ondo"
              }
            ]
          }
        ],
        "versionLabel": "東映登記的電視片頭由伊勢大貴演唱、高木洋編曲。另收兒童合唱、伴奏、福山雅治為電影片尾改編的錄音，以及長谷川智樹改編的音頭。",
        "followUp": [
          {
            "fields": [
              "recordings",
              "platform_links"
            ],
            "note": "香港原聲帶第2軌及福山雅治改編版已有可串流曲目。電視剪輯及迷你專輯兒童合唱的香港獨立曲目待核。",
            "resumeWhen": "權利方具名發行TV尺寸，或香港平台公開兒童合唱的可播放曲目頁時補錄。",
            "checkedAt": "2026-11-20"
          }
        ],
        "youtubeUrl": "https://www.youtube.com/watch?v=_fhJiPPrjDg"
      }
    ],
    "titleZhHant": "屁屁偵探"
  },
  ...curated2019SummerSeedRows.map(summer2019Seed),
];

export const curated2019SummerAnimeIds = curated2019SummerSeeds.map(curatedAnimeKey);
