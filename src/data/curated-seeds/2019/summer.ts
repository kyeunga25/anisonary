import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

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
    seasonIds: row.anilistId === 105333 ? ["2019-summer", "2019-fall"] : row.anilistId === 111144 ? ["2019-summer", "2019-fall", "2020-winter"] : row.anilistId === 105310 || row.anilistId === 101348 ? ["2019-summer", "2019-fall"] : ["2019-summer"],
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
    anilistId: 108430,
    slug: "given",
    startDate: "2019-07-11",
    titleJa: "ギヴン",
    titleZhHant: "GIVEN 被贈與的未來",
    titleRomaji: "Given",
    officialSiteUrl: "https://movie2020.given-anime.com/tv/",
    animeThemesUrl: "https://animethemes.moe/anime/given",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/given?include=resources",
      language: "en"
    },
    broadcastLabel: "日本電視首播／時間未整理",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "キヅアト",
        artistDisplayName: "センチミリメンタル",
        releaseDate: "2019-09-11"
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "まるつけ",
        artistDisplayName: "ギヴン",
        releaseDate: "2019-09-18",
        versionLabel: "ギヴン演唱版",
        credits: [
          {
            name: "矢野奨吾",
            role: "vocals"
          },
          {
            name: "センチミリメンタル",
            role: "lyrics"
          },
          {
            name: "センチミリメンタル",
            role: "composition"
          },
          {
            name: "センチミリメンタル",
            role: "arrangement"
          }
        ]
      }
    ]
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
    anilistId: 100891,
    slug: "kengan-ashura",
    sourceReferenceUrls: [...summer2019ReferenceUrls, "https://shogakukan-comic.jp/news/19676"],
    startDate: "2019-07-31",
    titleJa: "ケンガンアシュラ",
    titleZhHant: "拳願阿修羅",
    titleRomaji: "Kengan Ashura",
    officialSiteUrl: "https://kengan.net/",
    animeThemesUrl: "https://animethemes.moe/anime/kengan_ashura",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/kengan_ashura?include=resources",
      language: "en"
    },
    broadcastLabel: "日本網絡首播／時間未整理",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "KING & ASHLEY",
        artistDisplayName: "MY FIRST STORY",
        releaseDate: "2019-07-04"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Born This Way",
        artistDisplayName: "BAD HOP",
        versionLabel: "YZERR・Vingo・Bark 演唱版",
        credits: [
          { name: "YZERR", role: "vocals" },
          { name: "Vingo", role: "vocals" },
          { name: "Bark", role: "vocals" }
        ]
      }
    ]
  },
  {
    anilistId: 111144,
    slug: "cardfight-vanguard-shinemon-hen",
    sourceReferenceUrls: [...summer2019ReferenceUrls, "https://prtimes.jp/main/html/rd/p/000002051.000014827.html"],
    startDate: "2019-08-24",
    titleJa: "カードファイト!! ヴァンガード 新右衛門編",
    titleZhHant: "卡片戰鬥先導者 新右衛門篇",
    titleRomaji: "Cardfight!! Vanguard: Shinemon-hen",
    officialSiteUrl: "https://anime.cf-vanguard.com/",
    animeThemesUrl: "https://animethemes.moe/anime/cardfight_vanguard_shinemon_hen",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/cardfight_vanguard_shinemon_hen?include=resources",
      language: "en"
    },
    broadcastTimeJst: "08:00",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Lead the way",
        artistDisplayName: "相羽あいな",
        releaseDate: "2019-10-16",
"followUp": [],
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
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "AnimeThemes",
    "url": "https://animethemes.moe/anime/cardfight_vanguard_shinemon_hen",
    "language": "en",
    "role": "cross_check",
    "verifiedAt": "2026-09-07"
  },
  {
    "label": "ブシロード公式チャンネル 官方影片",
    "url": "https://www.youtube.com/watch?v=YwssMJO4T8s",
    "language": "ja",
    "role": "first_party",
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
  }
],
"lastVerifiedAt": "2026-10-31",
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
  }
],
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ギフト",
        artistDisplayName: "Argonavis",
        releaseDate: "2019-08-21",
        credits: [
          { name: "Argonavis", role: "vocals" },
          { name: "中村航", role: "lyrics" },
          { name: "白神真志朗", role: "composition" },
          { name: "廣澤優也", role: "arrangement" }
        ],
"followUp": [],
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
    "verifiedAt": "2026-09-07"
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
  }
],
"lastVerifiedAt": "2026-10-31",
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
  }
],
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ぼくらのターン",
        artistDisplayName: "虹のコンキスタドール",
        versionLabel: "2020-01-11 起片尾曲",
        releaseDate: "2020-01-22",
        credits: [
          { name: "虹のコンキスタドール", role: "vocals" },
          { name: "浅野尚志", role: "lyrics" },
          { name: "浅野尚志", role: "composition" },
          { name: "浅野尚志", role: "arrangement" }
        ],
"followUp": [
  {
    "fields": [
      "basic_evidence",
      "use_quarters"
    ],
    "note": "本曲原文曲名、完整演唱名義及片尾用途仍待本篇第一方資料核對，實際使用季度亦待確認。",
    "resumeWhen": "取得《新右衛門編》公開第一方資料明確列出此曲原名、完整演唱名義及片尾用途，並與本篇日本原播日期相互對應後補充。",
    "checkedAt": "2026-10-31"
  }
],
"seasonIds": [],
      }
    ],
"broadcastLabel": "2019年日本TV《新右衛門編》，官方公告8月24日週六08:00起播。一般《ヴァンガード》節目表另列08:00–08:30時段，配合本篇日本原播話數資料核對版別；節目時段非淨片長，本篇原播跨至2020年3月；英語版及重播另計。",
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
  }
],
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

export const curated2019SummerSeeds: CuratedAnimeSeed[] = curated2019SummerSeedRows.map(summer2019Seed);
export const curated2019SummerAnimeIds = curated2019SummerSeeds.map(({ anilistId }) => anilistId);
