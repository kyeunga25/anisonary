import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

type Spring2020SeedInput = Omit<
  CuratedAnimeSeed,
  | "id"
  | "seasonIds"
  | "editorialWeekday"
  | "status"
  | "anilistUrl"
  | "imageSourceUrl"
  | "imageSourceLabel"
  | "wikipediaUrl"
  | "verifiedAt"
> & Partial<Pick<CuratedAnimeSeed, "seasonIds" | "editorialWeekday">>;

const wikipediaUrl =
  "https://zh.wikipedia.org/wiki/2020%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8";

function spring2020Seed(row: Spring2020SeedInput): CuratedAnimeSeed {
  const anilistUrl = `https://anilist.co/anime/${row.anilistId}`;
  const weekday = new Date(`${row.startDate}T00:00:00Z`).getUTCDay();

  return {
    ...row,
    id: `curated-${row.anilistId}`,
    seasonIds: row.seasonIds ?? ["2020-spring"],
    editorialWeekday: row.editorialWeekday ?? (weekday || 7),
    status: "finished",
    anilistUrl,
    imageSourceUrl: anilistUrl,
    imageSourceLabel: "AniList 公開媒體頁",
    wikipediaUrl,
    verifiedAt: "2026-09-02",
  };
}

const curated2020SpringSeedRows: CuratedAnimeSeed[] = [
  spring2020Seed({
  "anilistId": 110130,
  "slug": "tamayomi",
  "startDate": "2020-04-01",
  "titleJa": "球詠",
  "titleZhHant": "球詠",
  "titleRomaji": "Tamayomi",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110130-QqvIQ5B2X3EJ.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110130-lRahMRPDBC1Y.jpg",
  "broadcastLabel": "2020-04-01起・AT-X・水曜22:00（JST）；其他深夜台與4月網播分開",
  "officialSiteUrl": "https://tamayomi.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/125",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/tamayomi",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Never Let You Go!",
      "artistDisplayName": "七穂",
      "id": "tamayomi-op-1",
      "songId": "tamayomi-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://tamayomi.com/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/tamayomi",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Naho - Topic 授權影片",
          "url": "https://www.youtube.com/watch?v=RaX0jcouyzw",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%90%83%E5%92%8F",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tamayomi.com/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "七穂",
          "role": "vocals"
        },
        {
          "name": "麻枝 准",
          "role": "lyrics"
        },
        {
          "name": "麻枝 准",
          "role": "composition"
        },
        {
          "name": "MANYO",
          "role": "arrangement"
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
            "https://tamayomi.com/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://tamayomi.com/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%90%83%E5%92%8F"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%90%83%E5%92%8F"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://tamayomi.com/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期原名、正式名義與常規用途已核，確認2020春；創作/歌唱僅同頁本曲明文。",
          "resumeWhen": "可選音源/影片/發行/平台資料待本曲直接證據再補，不刷新未讀來源或推新用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "プラスマイナスゼロの法則",
      "artistDisplayName": "新越谷高校女子野球部 (前田佳織里、天野聡美、野口瑠璃子、橋本鞠衣、永野愛理、北川里奈、富田美憂、宮本侑芽、本泉莉奈、白城なお)",
      "id": "tamayomi-ed-1",
      "songId": "tamayomi-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://tamayomi.com/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/tamayomi",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Release - Topic 授權影片",
          "url": "https://www.youtube.com/watch?v=4Sz9gSjs-nA",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%90%83%E5%92%8F",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tamayomi.com/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "新越谷高校女子野球部 (前田佳織里、天野聡美、野口瑠璃子、橋本鞠衣、永野愛理、北川里奈、富田美憂、宮本侑芽、本泉莉奈、白城なお)",
          "role": "vocals"
        },
        {
          "name": "麻枝 准",
          "role": "lyrics"
        },
        {
          "name": "麻枝 准",
          "role": "composition"
        },
        {
          "name": "MANYO",
          "role": "arrangement"
        },
        {
          "name": "前田佳織里",
          "role": "vocals"
        },
        {
          "name": "天野聡美",
          "role": "vocals"
        },
        {
          "name": "野口瑠璃子",
          "role": "vocals"
        },
        {
          "name": "橋本鞠衣",
          "role": "vocals"
        },
        {
          "name": "永野愛理",
          "role": "vocals"
        },
        {
          "name": "北川里奈",
          "role": "vocals"
        },
        {
          "name": "富田美憂",
          "role": "vocals"
        },
        {
          "name": "宮本侑芽",
          "role": "vocals"
        },
        {
          "name": "本泉莉奈",
          "role": "vocals"
        },
        {
          "name": "白城なお",
          "role": "vocals"
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
            "https://tamayomi.com/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://tamayomi.com/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%90%83%E5%92%8F"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%90%83%E5%92%8F"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tamayomi-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://tamayomi.com/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期原名、正式名義與常規用途已核，確認2020春；創作/歌唱僅同頁本曲明文。",
          "resumeWhen": "可選音源/影片/發行/平台資料待本曲直接證據再補，不刷新未讀來源或推新用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.tamayomi.com/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E7%90%83%E5%92%8F",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 3,
  "broadcastTimeJst": "22:00",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
    anilistId: 116789,
    slug: "micchiri-wanko-animation",
    startDate: "2020-04-01",
    titleJa: "みっちりわんこ！あにめ～しょん",
    titleZhHant: "全力狗！Animation",
    titleRomaji: "Micchiri Wanko! Animation",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116789-QCRGjlJzvLjl.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/kinder/intro/sakuhin22/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/109",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [],
  }),
  spring2020Seed({
  "anilistId": 106319,
  "slug": "hachinan-tte-sore-wa-nai-deshou",
  "startDate": "2020-04-02",
  "titleJa": "八男って、それはないでしょう！",
  "titleZhHant": "八男？別鬧了！",
  "titleRomaji": "Hachi-nan tte, Sore wa Nai deshou!",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106319-LDDmqyV2rs4D.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106319-TxPcI4yFDNfe.jpg",
  "broadcastLabel": "2020年4月2日21:00 AT-X原首播",
  "officialSiteUrl": "https://shin-ei-animation.jp/works/hachinan/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/116",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/hachi_nan_tte_sore_wa_nai_deshou",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "時空の迷い人",
      "artistDisplayName": "デーモン閣下 × 宝野アリカ",
      "id": "hachinan-tte-sore-wa-nai-deshou-op-1",
      "songId": "hachinan-tte-sore-wa-nai-deshou-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《八男？別鬧了！》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.fwinc.co.jp/news/57755/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/hachi_nan_tte_sore_wa_nai_deshou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "FRONTIERWORKS 官方影片",
          "url": "https://www.youtube.com/watch?v=hLuEcDn1YgI",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://shin-ei-animation.jp/works/hachinan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026675/VTCL-35316.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.animatetimes.com/news/details.php?id=1585831171",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%85%AB%E7%94%B7%EF%BC%9F%E5%88%A5%E9%AC%A7%E4%BA%86%EF%BC%81",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "デーモン閣下 × 宝野アリカ",
          "role": "vocals"
        },
        {
          "name": "デーモン閣下",
          "role": "lyrics"
        },
        {
          "name": "宝野アリカ",
          "role": "lyrics"
        },
        {
          "name": "デーモン閣下",
          "role": "composition"
        },
        {
          "name": "Anders Rydholm",
          "role": "arrangement"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026675/VTCL-35316.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026675/VTCL-35316.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1585831171"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1585831171"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%85%AB%E7%94%B7%EF%BC%9F%E5%88%A5%E9%AC%A7%E4%BA%86%EF%BC%81"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%85%AB%E7%94%B7%EF%BC%9F%E5%88%A5%E9%AC%A7%E4%BA%86%EF%BC%81"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026675/VTCL-35316.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期曲名、正式歌唱名義及春季用途已核；原ID及影音保留。",
          "resumeWhen": "待同頁精確音源／發行資料可用再補可選欄位，不推定新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "月明かりのMonologue",
      "artistDisplayName": "AKINO arai × AKINO from bless4",
      "id": "hachinan-tte-sore-wa-nai-deshou-ed-1",
      "songId": "hachinan-tte-sore-wa-nai-deshou-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《八男？別鬧了！》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.fwinc.co.jp/news/57755/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/hachi_nan_tte_sore_wa_nai_deshou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "FRONTIERWORKS 官方影片",
          "url": "https://www.youtube.com/watch?v=k5dg1AMfxTQ",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://shin-ei-animation.jp/works/hachinan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026676/VTCL-35317.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.animatetimes.com/news/details.php?id=1585831171",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%85%AB%E7%94%B7%EF%BC%9F%E5%88%A5%E9%AC%A7%E4%BA%86%EF%BC%81",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "AKINO arai × AKINO from bless4",
          "role": "vocals"
        },
        {
          "name": "Motokiyo",
          "role": "lyrics"
        },
        {
          "name": "Motokiyo",
          "role": "composition"
        },
        {
          "name": "Motokiyo",
          "role": "arrangement"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026676/VTCL-35317.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026676/VTCL-35317.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1585831171"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1585831171"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%85%AB%E7%94%B7%EF%BC%9F%E5%88%A5%E9%AC%A7%E4%BA%86%EF%BC%81"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%85%AB%E7%94%B7%EF%BC%9F%E5%88%A5%E9%AC%A7%E4%BA%86%EF%BC%81"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hachinan-tte-sore-wa-nai-deshou-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026676/VTCL-35317.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期曲名、正式歌唱名義及春季用途已核；原ID及影音保留。",
          "resumeWhen": "待同頁精確音源／發行資料可用再補可選欄位，不推定新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://prtimes.jp/main/html/rd/p/000001782.000016756.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://www.animatetimes.com/news/details.php?id=1585831171",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 4,
  "broadcastTimeJst": "21:00",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 113311,
  "slug": "kakushigoto",
  "startDate": "2020-04-02",
  "titleJa": "かくしごと",
  "titleZhHant": "隱瞞之事",
  "titleRomaji": "Kakushigoto",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113311-6bSvvCHBpjpI.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113311-T1FWgCflSKtl.jpg",
  "broadcastLabel": "2020年4月2日23:30 BS日テレ／AT-X原首播",
  "officialSiteUrl": "https://kakushigoto-anime.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/19",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/kakushigoto",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "ちいさな日々",
      "artistDisplayName": "flumpool",
      "id": "kakushigoto-op-1",
      "songId": "kakushigoto-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://kakushigoto-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kakushigoto",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "avex pictures 官方影片",
          "url": "https://www.youtube.com/watch?v=cHYeFFGcjdc",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://kakushigoto-anime.com/tv/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%9A%B1%E7%9E%9E%E4%B9%8B%E4%BA%8B",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "flumpool",
          "role": "vocals"
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
            "https://kakushigoto-anime.com/tv/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://kakushigoto-anime.com/tv/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%9A%B1%E7%9E%9E%E4%B9%8B%E4%BA%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%9A%B1%E7%9E%9E%E4%B9%8B%E4%BA%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期曲名、正式歌唱名義及春季用途已核；原ID及影音保留。",
          "resumeWhen": "待同頁精確音源／發行資料可用再補可選欄位，不推定新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "君は天然色",
      "artistDisplayName": "大滝詠一",
      "id": "kakushigoto-ed-1",
      "songId": "kakushigoto-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://kakushigoto-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kakushigoto",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "avex pictures 官方影片",
          "url": "https://www.youtube.com/watch?v=tOv4k7wmzoE",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://kakushigoto-anime.com/tv/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%9A%B1%E7%9E%9E%E4%B9%8B%E4%BA%8B",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "大滝詠一",
          "role": "vocals"
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
            "https://kakushigoto-anime.com/tv/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://kakushigoto-anime.com/tv/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%9A%B1%E7%9E%9E%E4%B9%8B%E4%BA%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%9A%B1%E7%9E%9E%E4%B9%8B%E4%BA%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kakushigoto-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期曲名、正式歌唱名義及春季用途已核；原ID及影音保留。",
          "resumeWhen": "待同頁精確音源／發行資料可用再補可選欄位，不推定新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://kakushigoto-anime.com/tv/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 4,
  "broadcastTimeJst": "23:30",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 115230,
  "slug": "kami-no-tou-tower-of-god",
  "startDate": "2020-04-02",
  "titleJa": "神之塔 -Tower of God-",
  "titleZhHant": "神之塔 -Tower of God-",
  "titleRomaji": "Kami no Tou: Tower of God",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115230-QHOdSN7yt8ab.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115230-wjDIxW77TLv3.jpg",
  "broadcastLabel": "2020年4月2日00:30日本原TV（官方地上波同時欄4/1水24:30換日）",
  "officialSiteUrl": "https://tog-anime.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/247",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/kami_no_tou",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "TOP -Japanese ver.-",
      "artistDisplayName": "Stray Kids",
      "id": "kami-no-tou-tower-of-god-op-1",
      "songId": "kami-no-tou-tower-of-god-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://tog-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kami_no_tou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Stray Kids Japan Official YouTube 官方影片",
          "url": "https://www.youtube.com/watch?v=o7lqCcE4Lho",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.sonymusic.co.jp/artist/StrayKids/discography/buy/ESCL-5435",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://tog-anime.com/1st/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%A5%9E%E4%B9%8B%E5%A1%94",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.animatetimes.com/news/details.php?id=1589947435",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Stray Kids",
          "role": "vocals"
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
            "https://www.sonymusic.co.jp/artist/StrayKids/discography/buy/ESCL-5435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://tog-anime.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.sonymusic.co.jp/artist/StrayKids/discography/buy/ESCL-5435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%A5%9E%E4%B9%8B%E5%A1%94"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%A5%9E%E4%B9%8B%E5%A1%94"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1589947435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1589947435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期常規用途、原名與正式演唱名義已核，確認2020春。",
          "resumeWhen": "待本曲音源與正版平台直接資料可核再補；不由商品或影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "SLUMP -Japanese ver.-",
      "artistDisplayName": "Stray Kids",
      "id": "kami-no-tou-tower-of-god-ed-1",
      "songId": "kami-no-tou-tower-of-god-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://tog-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kami_no_tou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Stray Kids Japan Official YouTube 官方影片",
          "url": "https://www.youtube.com/watch?v=7SPnJMGB9u4",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.sonymusic.co.jp/artist/StrayKids/discography/buy/ESCL-5435",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://tog-anime.com/1st/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%A5%9E%E4%B9%8B%E5%A1%94",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.animatetimes.com/news/details.php?id=1589947435",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Stray Kids",
          "role": "vocals"
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
            "https://www.sonymusic.co.jp/artist/StrayKids/discography/buy/ESCL-5435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://tog-anime.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.sonymusic.co.jp/artist/StrayKids/discography/buy/ESCL-5435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%A5%9E%E4%B9%8B%E5%A1%94"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%A5%9E%E4%B9%8B%E5%A1%94"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1589947435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1589947435"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kami-no-tou-tower-of-god-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期常規用途、原名與正式演唱名義已核，確認2020春。",
          "resumeWhen": "待本曲音源與正版平台直接資料可核再補；不由商品或影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://tog-anime.com/1st/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E7%A5%9E%E4%B9%8B%E5%A1%94",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 4,
  "broadcastTimeJst": "00:30",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
    anilistId: 116258,
    slug: "norimono-man-mobile-land-no-car-kun",
    startDate: "2020-04-02",
    titleJa: "のりものまん モービルランドのカークン",
    titleZhHant: "交通工具人 移動樂園的跑車君",
    titleRomaji: "Norimono Man: Mobile Land no Car-kun",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116258-dxkCAk1PC7PV.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://norimonoman.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/139",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/norimono_man_mobile_land_no_car_kun",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "かっとびモービルランド",
        artistDisplayName: "カークン（CV：高垣彩陽）",
      },
    ],
  }),
  spring2020Seed({
  "anilistId": 111500,
  "slug": "shin-sakura-taisen-the-animation",
  "startDate": "2020-04-03",
  "titleJa": "新サクラ大戦 the Animation",
  "titleZhHant": "新櫻花大戰 the Animation",
  "titleRomaji": "Shin Sakura Taisen the Animation",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111500-YqqWk16db7FX.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111500-p0hOAFSghFKQ.jpg",
  "broadcastLabel": "2020年4月3日22:00 TOKYO MX日本原首播",
  "officialSiteUrl": "https://www.sakura-taisen.com/index.html",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/241",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/shin_sakura_taisen_the_animation",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "檄！帝国華撃団〈新章〉",
      "artistDisplayName": "帝国歌劇団・花組 [天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)]",
      "id": "shin-sakura-taisen-the-animation-op-1",
      "songId": "shin-sakura-taisen-the-animation-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《新櫻花大戰 the Animation》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.segasammy.co.jp/cms/wp-content/uploads/2023/03/202003_4q_kabutsu_j_final.pdf",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/shin_sakura_taisen_the_animation",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ponycanyon 官方影片",
          "url": "https://www.youtube.com/watch?v=fEtFsUvgDMk",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.sakura-taisen.com/index.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://sakura-taisen.com/info/2020/20200227_04.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://sakura-taisen.com/info/2019/20190915_02.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%96%B0%E6%AB%BB%E8%8A%B1%E5%A4%A7%E6%88%B0",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5630",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "帝国歌劇団・花組 [天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)]",
          "role": "vocals"
        }
      ],
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://sakura-taisen.com/info/2020/20200227_04.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://sakura-taisen.com/info/2019/20190915_02.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://sakura-taisen.com/info/2020/20200227_04.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%B0%E6%AB%BB%E8%8A%B1%E5%A4%A7%E6%88%B0"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%B0%E6%AB%BB%E8%8A%B1%E5%A4%A7%E6%88%B0"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5630"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5630"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期常規用途、原名與正式演唱名義已核，確認2020春。",
          "resumeWhen": "待本曲音源與正版平台直接資料可核再補；不由商品或影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "桜夢見し",
      "artistDisplayName": "帝国歌劇団・花組＆エリス、ランスロット、ユイ",
      "id": "shin-sakura-taisen-the-animation-ed-1",
      "songId": "shin-sakura-taisen-the-animation-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《新櫻花大戰 the Animation》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.segasammy.co.jp/cms/wp-content/uploads/2023/03/202003_4q_kabutsu_j_final.pdf",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/shin_sakura_taisen_the_animation",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Teikokukagekidan hanagumi&Ellis,Lancelot,Yui Ayane Sakura(Sakura Amam... - Topic 授權影片",
          "url": "https://www.youtube.com/watch?v=sYW5Htp9w3g",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.sakura-taisen.com/index.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://sakura-taisen-theanimation.com/music/music01.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://sakura-taisen.com/info/2020/20200227_04.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%96%B0%E6%AB%BB%E8%8A%B1%E5%A4%A7%E6%88%B0",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5630",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "帝国歌劇団・花組 [天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)]、エリス (CV.水樹奈々)、ランスロット (CV.沼倉愛美)、ホワン・ユイ (CV.上坂すみれ)]",
          "role": "vocals"
        },
        {
          "name": "藤林聖子",
          "role": "lyrics"
        },
        {
          "name": "田中公平",
          "role": "composition"
        },
        {
          "name": "岸村正実",
          "role": "arrangement"
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
            "https://sakura-taisen-theanimation.com/music/music01.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://sakura-taisen.com/info/2020/20200227_04.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://sakura-taisen-theanimation.com/music/music01.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://sakura-taisen.com/info/2020/20200227_04.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%B0%E6%AB%BB%E8%8A%B1%E5%A4%A7%E6%88%B0"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%B0%E6%AB%BB%E8%8A%B1%E5%A4%A7%E6%88%B0"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5630"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5630"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://sakura-taisen-theanimation.com/music/music01.php"
          ],
          "verifiedAt": "2026-10-24"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://sakura-taisen.com/info/2020/20200227_04.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期常規用途、原名與正式演唱名義已核，確認2020春。",
          "resumeWhen": "待本曲音源與正版平台直接資料可核再補；不由商品或影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "スタァ誕生 花組ver. (with クラーラ)",
      "artistDisplayName": "天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)",
      "id": "shin-sakura-taisen-the-animation-ed-2",
      "songId": "shin-sakura-taisen-the-animation-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "《新櫻花大戰 the Animation》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.segasammy.co.jp/cms/wp-content/uploads/2023/03/202003_4q_kabutsu_j_final.pdf",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/shin_sakura_taisen_the_animation",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Release - Topic 授權影片",
          "url": "https://www.youtube.com/watch?v=prEwkptn98s",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.sakura-taisen.com/index.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://sakura-taisen-theanimation.com/music/music02.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5630",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)",
          "role": "vocals"
        }
      ],
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://sakura-taisen-theanimation.com/music/music02.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5630"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shin-sakura-taisen-the-animation-ed-2-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名保留；本期特殊片尾用途與精確歌唱版本尚待直接第一方明示。",
          "resumeWhen": "待原期末話官方逐曲credit直接明示此版本片尾用途與含クラーラ的歌唱名義，再核季度；不只由交叉頁或OST收錄授用。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://sakura-taisen-theanimation.com/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://ja.wikipedia.org/wiki/%E6%96%B0%E3%82%B5%E3%82%AF%E3%83%A9%E5%A4%A7%E6%88%A6_the_Animation",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 5,
  "broadcastTimeJst": "22:00",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
    anilistId: 116786,
    slug: "beyblade-burst-sparking",
    startDate: "2020-04-03",
    titleJa: "ベイブレードバースト スパーキング",
    titleZhHant: "戰鬥陀螺 爆烈世代 超王",
    titleRomaji: "Beyblade Burst Sparking",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116786-ZIUM2E11AK0y.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/116786-pFUeB9WaAtJs.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://beyblade.jp/campaign/5th/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/329",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/beyblade_burst_super_king",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "スパーキング・レボリューション",
        artistDisplayName: "土屋飛鳥・遠藤ナオキ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "スパーキング・レボリューション (インストゥルメンタル)",
        artistDisplayName: "(インストゥルメンタル)",
      },
    ],
  }),
  spring2020Seed({
  "anilistId": 109856,
  "slug": "listeners",
  "startDate": "2020-04-04",
  "titleJa": "LISTENERS リスナーズ",
  "titleZhHant": "LISTENERS 聆聽者",
  "titleRomaji": "LISTENERS",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109856-zDYLvuF4Vuno.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109856-rW8JlTsPbjey.jpg",
  "broadcastLabel": "2020年4月4日01:55 MBS/TBS原TV（官方4/3金25:55換日）",
  "officialSiteUrl": "https://listeners.rocks/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/282",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/listeners",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Into the blue's",
      "artistDisplayName": "ACCAMER",
      "id": "listeners-op-1",
      "songId": "listeners-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ACCAMER",
          "role": "vocals"
        },
        {
          "name": "じん",
          "role": "lyrics"
        },
        {
          "name": "じん",
          "role": "composition"
        },
        {
          "name": "菅波栄純",
          "role": "arrangement"
        },
        {
          "name": "じん",
          "role": "arrangement"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "官方原頁明本曲OP、ACCAMER與同頁詞曲編，配原期TV及獨立交叉核春季。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "Muse",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-1",
      "songId": "listeners-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "Borders",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-2",
      "songId": "listeners-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "Slip out!",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-3",
      "songId": "listeners-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-3"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "Rainy lain",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-4",
      "songId": "listeners-ed-4-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-4-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-4"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-4-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-4"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 5,
      "titleJa": "Top of ocean",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-5",
      "songId": "listeners-ed-5-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-5-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-5"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-5-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-5"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 6,
      "titleJa": "Trauma",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-6",
      "songId": "listeners-ed-6-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-6-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-6"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-6-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-6"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 7,
      "titleJa": "Dilemma",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-7",
      "songId": "listeners-ed-7-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-7-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-7"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-7-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-7"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 8,
      "titleJa": "Fairy tale",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-8",
      "songId": "listeners-ed-8-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-8-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-8"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-8-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-8"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 9,
      "titleJa": "Slumber",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-9",
      "songId": "listeners-ed-9-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-9-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-9"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-9-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-9"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 10,
      "titleJa": "Love song",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-10",
      "songId": "listeners-ed-10-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-10-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-10"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-10-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-10"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 11,
      "titleJa": "Listeners",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-11",
      "songId": "listeners-ed-11-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-11-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-11"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-11-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-11"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 12,
      "titleJa": "Into the blue's（modern ver.）",
      "artistDisplayName": "ミュウ（CV：高橋李依）",
      "id": "listeners-ed-12",
      "songId": "listeners-ed-12-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://listeners.rocks/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/listeners",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://listeners.rocks/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ミュウ（CV：高橋李依）",
          "role": "vocals"
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
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-12-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://listeners.rocks/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-12"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-12-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "listeners-ed-12"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期整部播於2020春；官方ED主題歌album逐曲列本曲與ミュウ名義，與獨立曲表合讀，不用album發售日或TRACK編號推季度。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://listeners.rocks/index.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/LISTENERS_%E8%81%86%E8%81%BD%E8%80%85",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "01:55",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 110547,
  "slug": "arte",
  "startDate": "2020-04-04",
  "titleJa": "アルテ",
  "titleZhHant": "阿爾蒂",
  "titleRomaji": "Arte",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110547-Jo4VNdR3DlOx.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110547-uB6fv50H0hFU.jpg",
  "broadcastLabel": "日本首播／時間未整理",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/432",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/arte",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "クローバー",
      "artistDisplayName": "坂本真綾",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A008957/VE3WA-18687.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/arte",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Asmik Ace 官方影片",
          "url": "https://www.youtube.com/watch?v=Vy6W-5g91L4",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E8%92%82_%28%E6%BC%AB%E7%94%BB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "id": "arte-op-1",
      "songId": "arte-op-1-song",
      "seasonIds": [
        "2020-spring"
      ],
      "credits": [
        {
          "name": "坂本真綾",
          "role": "vocals"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A008957/VE3WA-18687.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A008957/VE3WA-18687.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E8%92%82_%28%E6%BC%AB%E7%94%BB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E8%92%82_%28%E6%BC%AB%E7%94%BB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "已核本期原曲名、正式演唱名義與動畫用途；來源日期只按實讀更新。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "晴れ模様",
      "artistDisplayName": "安野希世乃",
      "sourceMode": "explicit",
      "sources": [
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025792/VTCL-35314.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/arte",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Asmik Ace 官方影片",
          "url": "https://www.youtube.com/watch?v=FECc7J4RWkg",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E8%92%82_%28%E6%BC%AB%E7%94%BB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "id": "arte-ed-1",
      "songId": "arte-ed-1-song",
      "seasonIds": [
        "2020-spring"
      ],
      "credits": [
        {
          "name": "安野希世乃",
          "role": "vocals"
        },
        {
          "name": "西直紀",
          "role": "lyrics"
        },
        {
          "name": "山本玲史",
          "role": "lyrics"
        },
        {
          "name": "山本玲史",
          "role": "composition"
        },
        {
          "name": "h-wonder",
          "role": "arrangement"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025792/VTCL-35314.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025792/VTCL-35314.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E8%92%82_%28%E6%BC%AB%E7%94%BB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E8%92%82_%28%E6%BC%AB%E7%94%BB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "arte-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025792/VTCL-35314.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "已核本期原曲名、正式演唱名義與動畫用途；來源日期只按實讀更新。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A008957/VE3WA-18687.html",
      "label": "發行方動畫作品標題資料",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E9%98%BF%E5%B0%94%E8%92%82_%28%E6%BC%AB%E7%94%BB%29",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 112302,
  "slug": "major-2nd-season-2",
  "startDate": "2020-04-04",
  "titleJa": "メジャー2nd 第２シリーズ",
  "titleZhHant": "棒球大聯盟2nd 第二季",
  "titleRomaji": "Major 2nd Season 2",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112302-VZZnJ1NY0waA.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112302-kbVmGx7EgmCg.jpg",
  "broadcastLabel": "日本首播／時間未整理",
  "officialSiteUrl": "https://www.shopro.co.jp/tv/major2nd/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/427",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/major_2nd_2nd_season",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Answer",
      "artistDisplayName": "家入レオ",
      "id": "major-2nd-season-2-op-1",
      "songId": "major-2nd-season-2-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.shopro.co.jp/tv/major2nd/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/major_2nd_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "家入レオ 官方影片",
          "url": "https://www.youtube.com/watch?v=uL3Jqtc4L7g",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.jvcmusic.co.jp/-/Discography/A023686/VICL-65372.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "家入レオ",
          "role": "vocals"
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
            "https://www.jvcmusic.co.jp/-/Discography/A023686/VICL-65372.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/-/Discography/A023686/VICL-65372.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "發行方明本作第2系列OP；中文逐曲CC限定#1–13，並記#8延期至7/11，故保春及夏而不泛授秋。",
          "resumeWhen": "待同版第一方逐曲創作、錄音及發行資料可讀時補可選欄位，保留既有媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "白い泥",
      "artistDisplayName": "上白石萌音",
      "id": "major-2nd-season-2-op-2",
      "songId": "major-2nd-season-2-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.shopro.co.jp/tv/major2nd/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/major_2nd_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "UNIVERSAL MUSIC JAPAN 官方影片",
          "url": "https://www.youtube.com/watch?v=ZrQuao0qp_M",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://kamishiraishimone.com/contents/331351",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "上白石萌音",
          "role": "vocals"
        },
        {
          "name": "橋本絵莉子",
          "role": "lyrics"
        },
        {
          "name": "橋本絵莉子",
          "role": "composition"
        },
        {
          "name": "清水俊也",
          "role": "arrangement"
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
            "https://kamishiraishimone.com/contents/331351"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://kamishiraishimone.com/contents/331351"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-op-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://kamishiraishimone.com/contents/331351"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "use_quarters",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "藝人原期公告明8/22起本作OP，故夏季有直接用途證；本次不由全劇11月終日推本曲秋季續用。",
          "resumeWhen": "待10–11月原期逐話或發行方明示本曲續用，並交叉該集實日，才補秋季；保既有ID與媒體。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "One",
      "artistDisplayName": "SHE'S",
      "id": "major-2nd-season-2-ed-1",
      "songId": "major-2nd-season-2-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.shopro.co.jp/tv/major2nd/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/major_2nd_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "SHE'S Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=swxyb2OhCY0",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "SHE'S",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-ed-1-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "保留既有曲名與名義；中文CC有本期ED用途，但原第一方頁維護／不可讀，未以搜尋索引或CC單獨授本次用途。",
          "resumeWhen": "待原製作站恢復或發行方可讀本曲原期ED明文，取得正式名義與季度交叉後再核；不以MV或一般專輯收錄推ED。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "IDENTITY",
      "artistDisplayName": "雨のパレード",
      "id": "major-2nd-season-2-ed-2",
      "songId": "major-2nd-season-2-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.shopro.co.jp/tv/major2nd/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/major_2nd_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "雨のパレード 官方影片",
          "url": "https://www.youtube.com/watch?v=2VsaGe_C0iE",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "雨のパレード",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "major-2nd-season-2-ed-2-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "保留既有曲名與名義；中文CC有本期ED用途，但原第一方頁維護／不可讀，未以搜尋索引或CC單獨授本次用途。",
          "resumeWhen": "待原製作站恢復或發行方可讀本曲原期ED明文，取得正式名義與季度交叉後再核；不以MV或一般專輯收錄推ED。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.jvcmusic.co.jp/-/Discography/A023686/VICL-65372.html",
      "label": "發行方動畫作品標題資料",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E6%A3%92%E7%90%83%E5%A4%A7%E8%81%AF%E7%9B%9F2nd",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "seasonIds": [
    "2020-spring",
    "2020-summer",
    "2020-fall"
  ]
}),
  spring2020Seed({
  "anilistId": 112353,
  "slug": "nami-yo-kiitekure",
  "startDate": "2020-04-04",
  "titleJa": "波よ聞いてくれ",
  "titleZhHant": "聽我的電波吧",
  "titleRomaji": "Nami yo Kiitekure",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112353-hAtUOoapou7V.png",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112353-cyIzHUCz2pML.jpg",
  "broadcastLabel": "2020年4月4日02:25 MBS／TBS原首播（公告4/3週五深夜換日）",
  "officialSiteUrl": "https://namiyo-anime.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/275",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/nami_yo_kiitekure",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "aranami",
      "artistDisplayName": "tacica",
      "id": "nami-yo-kiitekure-op-1",
      "songId": "nami-yo-kiitekure-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://namiyo-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/nami_yo_kiitekure",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "tacica 官方影片",
          "url": "https://www.youtube.com/watch?v=xnZn1NwYUhc",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://namiyo-anime.com/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E8%81%BD%E6%88%91%E7%9A%84%E9%9B%BB%E6%B3%A2%E5%90%A7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://namiyo-anime.com/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "tacica",
          "role": "vocals"
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
            "https://namiyo-anime.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://namiyo-anime.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%81%BD%E6%88%91%E7%9A%84%E9%9B%BB%E6%B3%A2%E5%90%A7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%81%BD%E6%88%91%E7%9A%84%E9%9B%BB%E6%B3%A2%E5%90%A7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名、正式名義及所列原TV用途季度已核；保既有ID、歌曲關係與影音。",
          "resumeWhen": "待本曲直接音源／發行／平台資料再補可選欄位，不推新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "Pride",
      "artistDisplayName": "遥海",
      "id": "nami-yo-kiitekure-ed-1",
      "songId": "nami-yo-kiitekure-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://namiyo-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/nami_yo_kiitekure",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "遥海 官方影片",
          "url": "https://www.youtube.com/watch?v=X8Gyw7x1lA8",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://namiyo-anime.com/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E8%81%BD%E6%88%91%E7%9A%84%E9%9B%BB%E6%B3%A2%E5%90%A7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://namiyo-anime.com/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "遥海",
          "role": "vocals"
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
            "https://namiyo-anime.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://namiyo-anime.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%81%BD%E6%88%91%E7%9A%84%E9%9B%BB%E6%B3%A2%E5%90%A7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%81%BD%E6%88%91%E7%9A%84%E9%9B%BB%E6%B3%A2%E5%90%A7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "nami-yo-kiitekure-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名、正式名義及所列原TV用途季度已核；保既有ID、歌曲關係與影音。",
          "resumeWhen": "待本曲直接音源／發行／平台資料再補可選欄位，不推新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://namiyo-anime.com/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E8%81%BD%E6%88%91%E7%9A%84%E9%9B%BB%E6%B3%A2%E5%90%A7",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "02:25",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 114072,
  "slug": "yugioh-sevens",
  "startDate": "2020-04-04",
  "titleJa": "遊☆戯☆王SEVENS",
  "titleZhHant": "遊戲王SEVENS",
  "titleRomaji": "Yu☆Gi☆Oh! SEVENS",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114072-3C6Bbv490sNj.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114072-skJElBIWDt69.jpg",
  "broadcastLabel": "2020年4月4日07:30 テレビ東京系列原首播；2021年4月日曜搬檔另列",
  "officialSiteUrl": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/3283",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/yugioh_sevens",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "ナナナナナナナ",
      "artistDisplayName": "佐伯ユウスケ",
      "id": "yugioh-sevens-op-1",
      "songId": "yugioh-sevens-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall",
        "2021-winter",
        "2021-spring"
      ],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "佐伯ユウスケ",
          "role": "vocals"
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
            "https://www.saekiyouthk.jp/information-2020"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.saekiyouthk.jp/information-2020"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名、正式名義及所列原TV用途季度已核；保既有ID、歌曲關係與影音。",
          "resumeWhen": "待本曲直接音源／發行／平台資料再補可選欄位，不推新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "ハレヴタイ",
      "artistDisplayName": "The Brow Beat",
      "id": "yugioh-sevens-op-2",
      "songId": "yugioh-sevens-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-spring",
        "2021-summer",
        "2021-fall",
        "2022-winter"
      ],
      "sources": [
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://mantan-web.jp/article/20210527dog00m200054000c.html",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.4gamer.net/games/503/G050353/20210528051/",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/episodes/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "The Brow Beat",
          "role": "vocals"
        },
        {
          "name": "Ryuji",
          "role": "lyrics"
        },
        {
          "name": "HAKUEI",
          "role": "lyrics"
        },
        {
          "name": "HAKUEI",
          "role": "composition"
        },
        {
          "name": "tatsuo",
          "role": "arrangement"
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
            "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://mantan-web.jp/article/20210527dog00m200054000c.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://mantan-web.jp/article/20210527dog00m200054000c.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-op-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名、正式名義及所列原TV用途季度已核；保既有ID、歌曲關係與影音。",
          "resumeWhen": "待本曲直接音源／發行／平台資料再補可選欄位，不推新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "ゴーハ第7小学校校歌",
      "artistDisplayName": "遊我（CV：石橋陽彩）、ルーク（CV：八代拓）、ガクト（CV：花江夏樹）",
      "id": "yugioh-sevens-ed-1",
      "songId": "yugioh-sevens-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall"
      ],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9909/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "遊我（CV：石橋陽彩）、ルーク（CV：八代拓）、ガクト（CV：花江夏樹）",
          "role": "vocals"
        },
        {
          "name": "佐伯ユウスケ",
          "role": "lyrics"
        },
        {
          "name": "佐伯ユウスケ",
          "role": "composition"
        },
        {
          "name": "佐伯ユウスケ",
          "role": "arrangement"
        },
        {
          "name": "石橋陽彩",
          "role": "vocals"
        },
        {
          "name": "八代拓",
          "role": "vocals"
        },
        {
          "name": "花江夏樹",
          "role": "vocals"
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
            "https://www.marv.jp/titles/mc/9909/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9909/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9909/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名、正式名義及所列原TV用途季度已核；保既有ID、歌曲關係與影音。",
          "resumeWhen": "待本曲直接音源／發行／平台資料再補可選欄位，不推新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "ミニスケープ",
      "artistDisplayName": "ロアロミン（霧島ロア CV：古田一紀）",
      "id": "yugioh-sevens-ed-2",
      "songId": "yugioh-sevens-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.marv.jp/titles/mc/9909/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ロアロミン（霧島ロア CV：古田一紀）",
          "role": "vocals"
        },
        {
          "name": "eNu",
          "role": "lyrics"
        },
        {
          "name": "馬渕直純",
          "role": "composition"
        },
        {
          "name": "馬渕直純",
          "role": "arrangement"
        },
        {
          "name": "古田一紀",
          "role": "vocals"
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
            "https://www.marv.jp/titles/mc/9909/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9909/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/9909/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名、正式名義及所列原TV用途季度已核；保既有ID、歌曲關係與影音。",
          "resumeWhen": "待本曲直接音源／發行／平台資料再補可選欄位，不推新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "ゴーハ第7小学校校歌（ルーク ver.）",
      "artistDisplayName": "ルーク（CV：八代拓）",
      "id": "yugioh-sevens-ed-3",
      "songId": "yugioh-sevens-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://pc.dwango.jp/portals/tieup/26653",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ルーク（CV：八代拓）",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://pc.dwango.jp/portals/tieup/26653"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-3-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links",
            "basic_evidence",
            "use_quarters"
          ],
          "note": "本版本曲名及演唱名義有交叉資料；原期動畫實際使用及季度待確認。",
          "resumeWhen": "待原期官方逐話資料明列本版本用途及播出集數，並取得權利方對本曲名與演唱名義的直接資料後，再核對原播出日期與季度。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "ゴーハ第7小学校校歌（4人合唱 ver.）",
      "artistDisplayName": "遊我（CV：石橋陽彩）、ルーク（CV：八代拓）、ガクト（CV：花江夏樹）、ロミン（CV：楠木ともり）",
      "id": "yugioh-sevens-ed-4",
      "songId": "yugioh-sevens-ed-4-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://pc.dwango.jp/portals/tieup/26653",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "遊我（CV：石橋陽彩）、ルーク（CV：八代拓）、ガクト（CV：花江夏樹）、ロミン（CV：楠木ともり）",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://pc.dwango.jp/portals/tieup/26653"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-4-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links",
            "basic_evidence",
            "use_quarters"
          ],
          "note": "本版本曲名及演唱名義有交叉資料；原期動畫實際使用及季度待確認。",
          "resumeWhen": "待原期官方逐話資料明列本版本用途及播出集數，並取得權利方對本曲名與演唱名義的直接資料後，再核對原播出日期與季度。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 5,
      "titleJa": "ゴーハ第7小学校校歌（遊我 ver.）",
      "artistDisplayName": "遊我（CV：石橋陽彩）",
      "id": "yugioh-sevens-ed-5",
      "songId": "yugioh-sevens-ed-5-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://pc.dwango.jp/portals/tieup/26653",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "遊我（CV：石橋陽彩）",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-5-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://pc.dwango.jp/portals/tieup/26653"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-5-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links",
            "basic_evidence",
            "use_quarters"
          ],
          "note": "本版本曲名及演唱名義有交叉資料；原期動畫實際使用及季度待確認。",
          "resumeWhen": "待原期官方逐話資料明列本版本用途及播出集數，並取得權利方對本曲名與演唱名義的直接資料後，再核對原播出日期與季度。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 6,
      "titleJa": "ゴーハ第7小学校校歌（ガクト ver.）",
      "artistDisplayName": "ガクト（CV：花江夏樹）",
      "id": "yugioh-sevens-ed-6",
      "songId": "yugioh-sevens-ed-6-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://pc.dwango.jp/portals/tieup/26653",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ガクト（CV：花江夏樹）",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-6-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://pc.dwango.jp/portals/tieup/26653"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-6-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links",
            "basic_evidence",
            "use_quarters"
          ],
          "note": "本版本曲名及演唱名義有交叉資料；原期動畫實際使用及季度待確認。",
          "resumeWhen": "待原期官方逐話資料明列本版本用途及播出集數，並取得權利方對本曲名與演唱名義的直接資料後，再核對原播出日期與季度。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 7,
      "titleJa": "ゴーハ第7小学校校歌（ロミン ver.）",
      "artistDisplayName": "ロミン（CV：楠木ともり）",
      "id": "yugioh-sevens-ed-7",
      "songId": "yugioh-sevens-ed-7-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "《遊戲王SEVENS》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://pc.dwango.jp/portals/tieup/26653",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ロミン（CV：楠木ともり）",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-7-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://pc.dwango.jp/portals/tieup/26653"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-7-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links",
            "basic_evidence",
            "use_quarters"
          ],
          "note": "本版本曲名及演唱名義有交叉資料；原期動畫實際使用及季度待確認。",
          "resumeWhen": "待原期官方逐話資料明列本版本用途及播出集數，並取得權利方對本曲名與演唱名義的直接資料後，再核對原播出日期與季度。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 8,
      "titleJa": "Never Looking Back",
      "artistDisplayName": "シズクノメ",
      "id": "yugioh-sevens-ed-8",
      "songId": "yugioh-sevens-ed-8-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-spring",
        "2021-summer",
        "2021-fall",
        "2022-winter"
      ],
      "sources": [
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/yugioh_sevens",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.marv.jp/titles/mc/10151/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://mantan-web.jp/article/20210527dog00m200054000c.html",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.4gamer.net/games/503/G050353/20210528051/",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.saekiyouthk.jp/information-2020",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/episodes/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "シズクノメ",
          "role": "vocals"
        },
        {
          "name": "ミチヒロモトキ",
          "role": "lyrics"
        },
        {
          "name": "ミチヒロモトキ",
          "role": "composition"
        },
        {
          "name": "渡辺拓也",
          "role": "arrangement"
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
            "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/10151/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.marv.jp/titles/mc/10151/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%88%B2%E7%8E%8BSEVENS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://mantan-web.jp/article/20210527dog00m200054000c.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://mantan-web.jp/article/20210527dog00m200054000c.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "yugioh-sevens-ed-8"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原曲名、正式名義及所列原TV用途季度已核；保既有ID、歌曲關係與影音。",
          "resumeWhen": "待本曲直接音源／發行／平台資料再補可選欄位，不推新錄音或其他用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.saekiyouthk.jp/information-2020",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://en.wikipedia.org/wiki/List_of_Yu-Gi-Oh%21_Sevens_episodes",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "en",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "07:30",
  "seasonIds": [
    "2020-spring",
    "2020-summer",
    "2020-fall",
    "2021-winter",
    "2021-spring",
    "2021-summer",
    "2021-fall",
    "2022-winter"
  ]
}),
  spring2020Seed({
  "anilistId": 114411,
  "slug": "bungou-to-alchemist-shinpan-no-haguruma",
  "startDate": "2020-04-04",
  "titleJa": "文豪とアルケミスト ～審判ノ歯車～",
  "titleZhHant": "文豪與鍊金術師 ～審判的齒輪～",
  "titleRomaji": "Bungou to Alchemist: Shinpan no Haguruma",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114411-PnXaweOf99xA.jpg",
  "broadcastLabel": "2020年4月4日01:23 テレビ東京原首播（公告4/3金曜深夜換日）；3/28先行配信另列",
  "officialSiteUrl": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/183",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/bungou_to_alchemist_shinpan_no_haguruma",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "グッド・バイ",
      "artistDisplayName": "浦島坂田船",
      "id": "bungou-to-alchemist-shinpan-no-haguruma-op-1",
      "songId": "bungou-to-alchemist-shinpan-no-haguruma-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《文豪與鍊金術師 ～審判的齒輪～》第一方歌曲資料：曲名與演唱者",
          "url": "https://store.nbcuni.co.jp/s/nbcu/artist/5709",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/bungou_to_alchemist_shinpan_no_haguruma",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "NBCUniversal Anime/Music 官方影片",
          "url": "https://www.youtube.com/watch?v=IK2UjYIxsFo",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://nbcuni-music.com/news/index00950000.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E8%88%87%E9%8D%8A%E9%87%91%E8%A1%93%E5%B8%AB",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E3%81%A8%E3%82%A2%E3%83%AB%E3%82%B1%E3%83%9F%E3%82%B9%E3%83%88",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/news/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "浦島坂田船",
          "role": "vocals"
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
            "https://nbcuni-music.com/news/index00950000.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://nbcuni-music.com/news/index00950000.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E8%88%87%E9%8D%8A%E9%87%91%E8%A1%93%E5%B8%AB"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E8%88%87%E9%8D%8A%E9%87%91%E8%A1%93%E5%B8%AB"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E3%81%A8%E3%82%A2%E3%83%AB%E3%82%B1%E3%83%9F%E3%82%B9%E3%83%88"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E3%81%A8%E3%82%A2%E3%83%AB%E3%82%B1%E3%83%9F%E3%82%B9%E3%83%88"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "use_quarters",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期OP／ED身分、名義與春季用途已核；延播至夏季的逐曲使用尚待直接話數署名。",
          "resumeWhen": "待2020年7–8月原期逐話OP／ED信用或權利方明示延用本曲，再補夏季；不以全作延播推每曲跨季。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "藪の中のジンテーゼ",
      "artistDisplayName": "南條愛乃",
      "id": "bungou-to-alchemist-shinpan-no-haguruma-ed-1",
      "songId": "bungou-to-alchemist-shinpan-no-haguruma-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《文豪與鍊金術師 ～審判的齒輪～》第一方歌曲資料：曲名與演唱者",
          "url": "https://store.nbcuni.co.jp/s/nbcu/artist/5709",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/bungou_to_alchemist_shinpan_no_haguruma",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "NBCUniversal Anime/Music 官方影片",
          "url": "https://www.youtube.com/watch?v=7l1KCVLev60",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://nbcuni-music.com/news/index00950000.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E8%88%87%E9%8D%8A%E9%87%91%E8%A1%93%E5%B8%AB",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E3%81%A8%E3%82%A2%E3%83%AB%E3%82%B1%E3%83%9F%E3%82%B9%E3%83%88",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/news/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "南條愛乃",
          "role": "vocals"
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
            "https://nbcuni-music.com/news/index00950000.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://nbcuni-music.com/news/index00950000.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E8%88%87%E9%8D%8A%E9%87%91%E8%A1%93%E5%B8%AB"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E8%88%87%E9%8D%8A%E9%87%91%E8%A1%93%E5%B8%AB"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E3%81%A8%E3%82%A2%E3%83%AB%E3%82%B1%E3%83%9F%E3%82%B9%E3%83%88"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E3%81%A8%E3%82%A2%E3%83%AB%E3%82%B1%E3%83%9F%E3%82%B9%E3%83%88"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "bungou-to-alchemist-shinpan-no-haguruma-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "use_quarters",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原期OP／ED身分、名義與春季用途已核；延播至夏季的逐曲使用尚待直接話數署名。",
          "resumeWhen": "待2020年7–8月原期逐話OP／ED信用或權利方明示延用本曲，再補夏季；不以全作延播推每曲跨季。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/news/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://ja.wikipedia.org/wiki/%E6%96%87%E8%B1%AA%E3%81%A8%E3%82%A2%E3%83%AB%E3%82%B1%E3%83%9F%E3%82%B9%E3%83%88",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "01:23",
  "seasonIds": [
    "2020-spring",
    "2020-summer"
  ]
}),
  spring2020Seed({
  "anilistId": 117096,
  "slug": "asatir-mirai-no-mukashibanashi",
  "startDate": "2020-04-04",
  "titleJa": "アサティール 未来の昔ばなし",
  "titleZhHant": "阿薩里爾未來的民間故事",
  "titleRomaji": "Asatir: Mirai no Mukashibanashi",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117096-Ealg1PSeoeqh.jpg",
  "broadcastLabel": "2020年4月4日08:00 J:テレ日本初放送",
  "officialSiteUrl": "https://prtimes.jp/main/html/rd/p/000001122.000007676.html",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/301",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/asatir_mirai_no_mukashibanashi",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "未来の昔ばなし",
      "artistDisplayName": "渡部沙智子",
      "id": "asatir-mirai-no-mukashibanashi-op-1",
      "songId": "asatir-mirai-no-mukashibanashi-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://prtimes.jp/main/html/rd/p/000001122.000007676.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/asatir_mirai_no_mukashibanashi",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Manga Productions 官方影片",
          "url": "https://www.youtube.com/watch?v=wcQklA1wXRA",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.animatetimes.com/tag/details.php?id=9568",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B5%E3%83%86%E3%82%A3%E3%83%BC%E3%83%AB_%E6%9C%AA%E6%9D%A5%E3%81%AE%E6%98%94%E3%81%B0%E3%81%AA%E3%81%97",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "渡部沙智子",
          "role": "vocals"
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
            "https://www.animatetimes.com/tag/details.php?id=9568"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "asatir-mirai-no-mukashibanashi-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B5%E3%83%86%E3%82%A3%E3%83%BC%E3%83%AB_%E6%9C%AA%E6%9D%A5%E3%81%AE%E6%98%94%E3%81%B0%E3%81%AA%E3%81%97"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "asatir-mirai-no-mukashibanashi-op-1-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲身分與本期用途尚待直接第一方確認；原用途ID/名義保留。",
          "resumeWhen": "待2020日本語原期官方歌曲credit可直接取得，確認本期曲名/演唱/OPED用途；不將2024續期同名曲直接套回。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "記憶の向こう",
      "artistDisplayName": "渡部沙智子",
      "id": "asatir-mirai-no-mukashibanashi-ed-1",
      "songId": "asatir-mirai-no-mukashibanashi-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://prtimes.jp/main/html/rd/p/000001122.000007676.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/asatir_mirai_no_mukashibanashi",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.animatetimes.com/tag/details.php?id=9568",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B5%E3%83%86%E3%82%A3%E3%83%BC%E3%83%AB_%E6%9C%AA%E6%9D%A5%E3%81%AE%E6%98%94%E3%81%B0%E3%81%AA%E3%81%97",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "渡部沙智子",
          "role": "vocals"
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
            "https://www.animatetimes.com/tag/details.php?id=9568"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "asatir-mirai-no-mukashibanashi-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B5%E3%83%86%E3%82%A3%E3%83%BC%E3%83%AB_%E6%9C%AA%E6%9D%A5%E3%81%AE%E6%98%94%E3%81%B0%E3%81%AA%E3%81%97"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "asatir-mirai-no-mukashibanashi-ed-1-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲身分與本期用途尚待直接第一方確認；原用途ID/名義保留。",
          "resumeWhen": "待2020日本語原期官方歌曲credit可直接取得，確認本期曲名/演唱/OPED用途；不將2024續期同名曲直接套回。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://prtimes.jp/main/html/rd/p/000001122.000007676.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%82%B5%E3%83%86%E3%82%A3%E3%83%BC%E3%83%AB_%E6%9C%AA%E6%9D%A5%E3%81%AE%E6%98%94%E3%81%B0%E3%81%AA%E3%81%97",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "08:00",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 132696,
  "slug": "oshiri-tantei-4",
  "startDate": "2020-04-04",
  "titleJa": "おしりたんてい (第4シリーズ)",
  "titleZhHant": "屁屁偵探 第四季",
  "titleRomaji": "Oshiri Tantei 4",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132696-TIe7Ebn0vVSP.jpg",
  "broadcastLabel": "2020年4月4日09:00 NHK Eテレ原期本放送",
  "officialSiteUrl": "https://oshiri-tantei.com/",
  "sourceReferenceUrls": [
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "ププッとフムッとかいけつダンス",
      "artistDisplayName": "伊勢大貴",
      "id": "oshiri-tantei-4-op-1",
      "songId": "oshiri-tantei-4-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://oshiri-tantei.com/news/2020091401.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://myanimelist.net/anime/41778",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://oshiri-tantei.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://columbia.jp/oshiri-tantei/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5604",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "伊勢大貴",
          "role": "vocals"
        },
        {
          "name": "藤本記子",
          "role": "lyrics"
        },
        {
          "name": "小杉保夫",
          "role": "composition"
        },
        {
          "name": "高木洋",
          "role": "arrangement"
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
            "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "oshiri-tantei-4-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://columbia.jp/oshiri-tantei/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "oshiri-tantei-4-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://oshiri-tantei.com/news/2020091401.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "oshiri-tantei-4-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "oshiri-tantei-4-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5604"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "oshiri-tantei-4-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5604"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "oshiri-tantei-4-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://lineup.toei-anim.co.jp/ja/tv/oshiri/song/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期曲名、正式歌唱與用途季度已核。",
          "resumeWhen": "待直接音源與正版發行細項資料可核再補，不由影片或專輯推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://oshiri-tantei.com/news/2020030301.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E5%B1%81%E5%B1%81%E5%81%B5%E6%8E%A2",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://cal.syoboi.jp/tid/5604",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "09:00",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 103110,
  "slug": "idolish7-second-beat",
  "startDate": "2020-04-05",
  "titleJa": "アイドリッシュセブン Second BEAT!",
  "titleZhHant": "IDOLiSH7 偶像星願 Second BEAT!",
  "titleRomaji": "IDOLiSH7: Second BEAT!",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103110-tmjraaFRlEt5.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103110-LBD6QsNabGhj.jpg",
  "broadcastLabel": "日本首播／受疫情影響曾延期或停播",
  "officialSiteUrl": "https://idolish7.com/aninana/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/95",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/idolish7_second_beat",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "DiSCOVER THE FUTURE",
      "artistDisplayName": "IDOLiSH7",
      "id": "idolish7-second-beat-op-1",
      "songId": "idolish7-second-beat-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://idolish7.com/aninana/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/idolish7_second_beat",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://idolish7.com/aninana/news/?p=1401",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://idolish7.lantis.jp/discography/laca-9784/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/IDOLiSH7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5608",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "IDOLiSH7",
          "role": "vocals"
        },
        {
          "name": "結城アイラ",
          "role": "lyrics"
        },
        {
          "name": "kz",
          "role": "composition"
        },
        {
          "name": "kz",
          "role": "arrangement"
        },
        {
          "name": "真部 裕",
          "role": "arrangement"
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
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5608"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5608"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期曲名、正式歌唱與用途季度已核。",
          "resumeWhen": "待直接音源與正版發行細項資料可核再補，不由影片或專輯推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "ミライノーツを奏でて",
      "artistDisplayName": "Re:vale",
      "id": "idolish7-second-beat-ed-1",
      "songId": "idolish7-second-beat-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://idolish7.com/aninana/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/idolish7_second_beat",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://idolish7.com/aninana/news/?p=1401",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://idolish7.lantis.jp/discography/laca-9784/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/IDOLiSH7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5608",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Re:vale",
          "role": "vocals"
        },
        {
          "name": "真崎エリカ",
          "role": "lyrics"
        },
        {
          "name": "山本玲史",
          "role": "composition"
        },
        {
          "name": "川崎智哉",
          "role": "arrangement"
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
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5608"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5608"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期曲名、正式歌唱與用途季度已核。",
          "resumeWhen": "待直接音源與正版發行細項資料可核再補，不由影片或專輯推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "DESTINY",
      "artistDisplayName": "TRIGGER",
      "id": "idolish7-second-beat-ed-2",
      "songId": "idolish7-second-beat-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://idolish7.com/aninana/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/idolish7_second_beat",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://idolish7.com/news/2017/5843",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5608",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/IDOLiSH7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "TRIGGER",
          "role": "vocals"
        },
        {
          "name": "結城アイラ",
          "role": "lyrics"
        },
        {
          "name": "草野将史",
          "role": "composition"
        },
        {
          "name": "草野将史",
          "role": "arrangement"
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
            "https://idolish7.com/news/2017/5843"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5608"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-2-song"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://idolish7.com/news/2017/5843"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲TRIGGER身分已核；本期第5話片尾僅交叉直接列明，第一方他期片尾資料不挪用。",
          "resumeWhen": "待Second BEAT第5話官方本曲片尾credit；不由Vibrato或遊戲原曲商品授本期ED。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "It's ALL-for you-",
      "artistDisplayName": "Re:vale",
      "id": "idolish7-second-beat-ed-3",
      "songId": "idolish7-second-beat-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://idolish7.com/aninana/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/idolish7_second_beat",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://idolish7.com/aninana/news/?p=1401",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://idolish7.lantis.jp/discography/laca-9784/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5608",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/IDOLiSH7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Re:vale",
          "role": "vocals"
        },
        {
          "name": "結城アイラ",
          "role": "lyrics"
        },
        {
          "name": "山本玲史",
          "role": "composition"
        },
        {
          "name": "陶山 隼",
          "role": "arrangement"
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
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5608"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5608"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "官方明本期第10話ED、正式歌唱Re:vale；個別唱者不由cast推定，中文單曲歌手欄不授團體名義。",
          "resumeWhen": "待直接音源與正版發行細項資料可核再補，不由影片或專輯推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "Last Dimension",
      "artistDisplayName": "TRIGGER",
      "id": "idolish7-second-beat-ed-4",
      "songId": "idolish7-second-beat-ed-4-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://idolish7.com/aninana/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/idolish7_second_beat",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://idolish7.com/aninana/discography/?p=1432",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/IDOLiSH7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5608",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "TRIGGER",
          "role": "vocals"
        }
      ],
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/discography/?p=1432"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-ed-4-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "官方第12話無字幕片尾標本曲；另一第一方明同話交響版插曲，交叉頁只列插曲，精確版本/片尾交叉尚待核。",
          "resumeWhen": "待本期第12話原片尾歌唱credit與獨立精確片尾交叉，釐清原標題與交響版；不轉型、不新增重複用途或錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "id": "idolish7-second-beat-in-1",
      "type": "IN",
      "sequence": 1,
      "titleJa": "激情",
      "artistDisplayName": "TRIGGER & IDOLiSH7",
      "credits": [
        {
          "name": "水野良樹",
          "role": "lyrics"
        },
        {
          "name": "水野良樹",
          "role": "composition"
        },
        {
          "name": "鈴木Daichi秀行",
          "role": "arrangement"
        }
      ],
      "links": [],
      "songId": "idolish7-second-beat-in-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall"
      ],
      "sources": [
        {
          "url": "https://idolish7.com/aninana/news/?p=1401",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://idolish7.lantis.jp/discography/laca-9784/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/IDOLiSH7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
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
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-in-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-in-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-in-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://idolish7.lantis.jp/discography/laca-9784/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-in-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-in-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/IDOLiSH7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "idolish7-second-beat-in-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://idolish7.com/aninana/news/?p=1401"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期插曲用途與正式曲名、歌唱名義已核。",
          "resumeWhen": "待正版音源及發行細項逐項核；不繼承其他用途媒體或推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [],
  "seasonIds": [
    "2020-spring",
    "2020-fall"
  ]
}),
  spring2020Seed({
  "anilistId": 104647,
  "slug": "hamefura",
  "startDate": "2020-04-05",
  "titleJa": "乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…",
  "titleZhHant": "轉生成女性向遊戲只有毀滅 END 的壞人大小姐",
  "titleRomaji": "Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta…",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104647-dMGZSavRxHcM.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104647-emIYPiyZZJnl.jpg",
  "broadcastLabel": "日本首播／時間未整理",
  "officialSiteUrl": "https://hamehura-anime.com/1st/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/111",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/otome_game_no_hametsu_flag_shika_nai_akuyaku_reijou_ni_tensei_shiteshimatta",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "乙女のルートはひとつじゃない！",
      "artistDisplayName": "angela",
      "id": "hamefura-op-1",
      "songId": "hamefura-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://hamehura-anime.com/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/otome_game_no_hametsu_flag_shika_nai_akuyaku_reijou_ni_tensei_shiteshimatta",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Asmik Ace 官方影片",
          "url": "https://www.youtube.com/watch?v=00zguIZOXlA",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://hamehura-anime.com/1st/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.kingrecords.co.jp/cs/g/gKICS-93995/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.animatetimes.com/news/details.php?id=1586013258",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "angela",
          "role": "vocals"
        },
        {
          "name": "atsuko",
          "role": "lyrics"
        },
        {
          "name": "atsuko",
          "role": "composition"
        },
        {
          "name": "KATSU",
          "role": "composition"
        },
        {
          "name": "KATSU",
          "role": "arrangement"
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
            "https://hamehura-anime.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.kingrecords.co.jp/cs/g/gKICS-93995/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://hamehura-anime.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.kingrecords.co.jp/cs/g/gKICS-93995/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1586013258"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1586013258"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://hamehura-anime.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期曲名、正式歌唱與用途季度已核。",
          "resumeWhen": "待直接音源與正版發行細項資料可核再補，不由影片或專輯推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "BAD END",
      "artistDisplayName": "蒼井翔太",
      "id": "hamefura-ed-1",
      "songId": "hamefura-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://hamehura-anime.com/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/otome_game_no_hametsu_flag_shika_nai_akuyaku_reijou_ni_tensei_shiteshimatta",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Asmik Ace 官方影片",
          "url": "https://www.youtube.com/watch?v=_OkkUm7wW9I",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://hamehura-anime.com/1st/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.animatetimes.com/news/details.php?id=1586013258",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "蒼井翔太",
          "role": "vocals"
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
            "https://hamehura-anime.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://hamehura-anime.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1586013258"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.animatetimes.com/news/details.php?id=1586013258"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期曲名、正式歌唱與用途季度已核。",
          "resumeWhen": "待直接音源與正版發行細項資料可核再補，不由影片或專輯推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "id": "hamefura-in-1",
      "type": "IN",
      "sequence": 1,
      "titleJa": "君の影、オレンジの空",
      "artistDisplayName": "angela",
      "credits": [
        {
          "name": "atsuko",
          "role": "lyrics"
        },
        {
          "name": "atsuko",
          "role": "composition"
        },
        {
          "name": "KATSU",
          "role": "composition"
        },
        {
          "name": "KATSU",
          "role": "arrangement"
        }
      ],
      "links": [],
      "songId": "hamefura-in-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://hamehura-anime.com/1st/news/929/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.kingrecords.co.jp/cs/g/gKICS-93995/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
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
            "https://hamehura-anime.com/1st/news/929/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-in-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.kingrecords.co.jp/cs/g/gKICS-93995/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-in-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://hamehura-anime.com/1st/news/929/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-in-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.kingrecords.co.jp/cs/g/gKICS-93995/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-in-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-in-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%BD%89%E7%94%9F%E6%88%90%E5%A5%B3%E6%80%A7%E5%90%91%E9%81%8A%E6%88%B2%E5%8F%AA%E6%9C%89%E6%AF%80%E6%BB%85END%E7%9A%84%E5%A3%9E%E4%BA%BA%E5%A4%A7%E5%B0%8F%E5%A7%90"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "hamefura-in-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://hamehura-anime.com/1st/news/929/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期插曲用途與正式曲名、歌唱名義已核。",
          "resumeWhen": "待正版音源及發行細項逐項核；不繼承其他用途媒體或推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [],
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 108241,
  "slug": "gleipnir",
  "startDate": "2020-04-05",
  "titleJa": "グレイプニル",
  "titleZhHant": "格萊普尼爾",
  "titleRomaji": "Gleipnir",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108241-Mc28QvkdUkfp.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108241-Cbfv8GHRMFoQ.jpg",
  "broadcastLabel": "日本首播／時間未整理",
  "officialSiteUrl": "https://gleipnir-anime.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/218",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/gleipnir",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Altern-ate-",
      "artistDisplayName": "H-el-ical//",
      "id": "gleipnir-op-1",
      "songId": "gleipnir-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://gleipnir-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/gleipnir",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "NBCUniversal Anime/Music 官方影片",
          "url": "https://www.youtube.com/watch?v=IRlkL36RCu0",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://nbcuni-music.com/news/index00880000.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%A0%BC%E8%90%8A%E6%99%AE%E5%B0%BC%E7%88%BE_%28%E6%BC%AB%E7%95%AB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "H-el-ical//",
          "role": "vocals"
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
            "https://nbcuni-music.com/news/index00880000.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "gleipnir-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://nbcuni-music.com/news/index00880000.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "gleipnir-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%A0%BC%E8%90%8A%E6%99%AE%E5%B0%BC%E7%88%BE_%28%E6%BC%AB%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "gleipnir-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%A0%BC%E8%90%8A%E6%99%AE%E5%B0%BC%E7%88%BE_%28%E6%BC%AB%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "gleipnir-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "已核本期片頭原名、正式演唱名義與2020春用途；未取得同頁詞曲編直接署名。",
          "resumeWhen": "待本曲發行方直接創作署名再補可選欄位，不由團體／計畫介紹推個人歌唱。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "雨と体液と匂い",
      "artistDisplayName": "Mili",
      "id": "gleipnir-ed-1",
      "songId": "gleipnir-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://gleipnir-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/gleipnir",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Mili 官方影片",
          "url": "https://www.youtube.com/watch?v=HrkFQAQyFGc",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%A0%BC%E8%90%8A%E6%99%AE%E5%B0%BC%E7%88%BE_%28%E6%BC%AB%E7%95%AB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Mili",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E6%A0%BC%E8%90%8A%E6%99%AE%E5%B0%BC%E7%88%BE_%28%E6%BC%AB%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "gleipnir-ed-1-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "交叉資料載有本期片尾，但直接第一方原文尚不足，暫不登記本期用途與季度。",
          "resumeWhen": "待原期動畫或Mili發行方可讀普通頁明示本曲片尾用途與正式名義；原官網未讀成功、播映平台地區限制不繞過，兩輪後保留。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://nbcuni-music.com/news/index00880000.html",
      "label": "發行方動畫作品標題資料",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E6%A0%BC%E8%90%8A%E6%99%AE%E5%B0%BC%E7%88%BE_%28%E6%BC%AB%E7%95%AB%29",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 108266,
  "slug": "tsugu-tsugumomo",
  "startDate": "2020-04-05",
  "titleJa": "継つぐもも",
  "titleZhHant": "繼怪怪守護神",
  "titleRomaji": "Tsugu Tsugumomo",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108266-XIxj8RVcidLX.jpg",
  "broadcastLabel": "2020年4月5日21:30 AT-X原TV首話",
  "officialSiteUrl": "https://tsugumomo.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/353",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/tsugu_tsugumomo",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "風吹けば月夜の果てに",
      "artistDisplayName": "A応P",
      "id": "tsugu-tsugumomo-op-1",
      "songId": "tsugu-tsugumomo-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://tsugumomo.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/tsugu_tsugumomo",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "A応P 官方影片",
          "url": "https://www.youtube.com/watch?v=6x20QE4cNew",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%80%AA%E6%80%AA%E5%AE%88%E8%AD%B7%E7%A5%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://eiga.com/news/20200131/2/",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "A応P",
          "role": "vocals"
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
            "https://zh.wikipedia.org/wiki/%E6%80%AA%E6%80%AA%E5%AE%88%E8%AD%B7%E7%A5%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://eiga.com/news/20200131/2/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-op-1-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "獨立交叉頁記有本期片頭原名與正式名義；原官網正文未能讀取，暫不授第一方用途及季度。",
          "resumeWhen": "待原期動畫或A応P發行方可讀頁直接明示本曲OP及正式名義，維持兩輪後續查；不以既有MV標題或成員名單補證。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "春、奏で",
      "artistDisplayName": "東城陽奏",
      "id": "tsugu-tsugumomo-ed-1",
      "songId": "tsugu-tsugumomo-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://tsugumomo.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/tsugu_tsugumomo",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "東城陽奏 Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=S-Pu7IqW8II",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://linkco.re/vXPMdpMA?lang=ja",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%80%AA%E6%80%AA%E5%AE%88%E8%AD%B7%E7%A5%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://eiga.com/news/20200131/2/",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.at-x.com/pdf/program/9f53a29e8766dd8ad6b93fb67d926e46.pdf",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "東城陽奏",
          "role": "vocals"
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
            "https://linkco.re/vXPMdpMA?lang=ja"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://linkco.re/vXPMdpMA?lang=ja"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%80%AA%E6%80%AA%E5%AE%88%E8%AD%B7%E7%A5%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%80%AA%E6%80%AA%E5%AE%88%E8%AD%B7%E7%A5%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://eiga.com/news/20200131/2/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://eiga.com/news/20200131/2/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tsugu-tsugumomo-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本人發佈於TuneCore的履歷明示本期ED原名與歌唱名義；合原期播出表與獨立交叉核2020春。",
          "resumeWhen": "待本曲第一方逐曲詞曲編署名再補可選欄位；頁內NEW的詞曲不移用本曲，發行月不代使用季度。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.at-x.com/pdf/program/9f53a29e8766dd8ad6b93fb67d926e46.pdf",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E6%80%AA%E6%80%AA%E5%AE%88%E8%AD%B7%E7%A5%9E",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 7,
  "broadcastTimeJst": "21:30",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
    anilistId: 109020,
    slug: "yesterday-wo-utatte",
    startDate: "2020-04-05",
    titleJa: "イエスタデイをうたって",
    titleZhHant: "昨日之歌",
    titleRomaji: "Yesterday wo Utatte",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109020-sRBusiVXbsLH.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109020-TclHkkKtYgcQ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://singyesterday.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/110",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/yesterday_wo_utatte",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "籠の中に鳥",
        artistDisplayName: "ユアネス",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "葵橋",
        artistDisplayName: "さユり",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "イエスタデイをうたって",
        artistDisplayName: "agehasprings feat あにー(TaNaBaTa)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 111310,
    slug: "mewkledreamy",
    startDate: "2020-04-05",
    titleJa: "ミュークルドリーミー",
    titleZhHant: "夢夢貓",
    titleRomaji: "Mewkledreamy",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111310-KTLldElz3BSp.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111310-5MdRG9K0IGkZ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/mewkledreamy/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2994",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/mewkledreamy",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ミライくるくるユメくるる！",
        artistDisplayName: "澤田真里愛",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "トキメキコレクター",
        artistDisplayName: "澤田真里愛",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 111323,
    slug: "gal-to-kyouryuu",
    startDate: "2020-04-05",
    titleJa: "ギャルと恐竜",
    titleZhHant: "辣妹與恐龍",
    titleRomaji: "Gal to Kyouryuu",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111323-quqYgAchD9PM.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111323-6VubjN9ROpKb.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.galkyo.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/372",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/gal_to_kyouryuu",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "恐竜あげみざわ☆",
        artistDisplayName:
          "恐竜フレンズ [楓 (CV.島袋美由利)、山田 (CV.夏吉ゆうこ)、先パイ (CV.工藤夕希)、翔太 (CV.山下誠一郎)]",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Peaceful Days",
        artistDisplayName: "高橋竜子 (高橋洋子)",
      },
    ],
  }),
  spring2020Seed({
  "anilistId": 113570,
  "slug": "shachou-battle-no-jikan-desu",
  "startDate": "2020-04-05",
  "titleJa": "社長、バトルの時間です！",
  "titleZhHant": "社長，戰鬥的時間到了！",
  "titleRomaji": "Shachou, Battle no Jikan desu!",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113570-c0YmZUj7f5eH.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113570-xo85csMd6NE9.jpg",
  "broadcastLabel": "2020-04-05起・AT-X・日曜23:30（JST）；深夜其他台與配信分開",
  "officialSiteUrl": "https://shachibato-anime.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/185",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/shachou_battle_no_jikan_desu",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Hurry Love",
      "artistDisplayName": "和氣あず未",
      "id": "shachou-battle-no-jikan-desu-op-1",
      "songId": "shachou-battle-no-jikan-desu-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://shachibato-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/shachou_battle_no_jikan_desu",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "KADOKAWAanime 官方影片",
          "url": "https://www.youtube.com/watch?v=cfS98EgeJe0",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://shachibato-anime.com/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E9%95%B7%EF%BC%8C%E6%88%B0%E9%AC%A5%E7%9A%84%E6%99%82%E9%96%93%E5%88%B0%E4%BA%86%EF%BC%81",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5617",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://shachibato-anime.com/onair.html",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "和氣あず未",
          "role": "vocals"
        },
        {
          "name": "俊龍",
          "role": "lyrics"
        },
        {
          "name": "俊龍",
          "role": "composition"
        },
        {
          "name": "Sizuk",
          "role": "arrangement"
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
            "https://shachibato-anime.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://shachibato-anime.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%A4%BE%E9%95%B7%EF%BC%8C%E6%88%B0%E9%AC%A5%E7%9A%84%E6%99%82%E9%96%93%E5%88%B0%E4%BA%86%EF%BC%81"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5617"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5617"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://shachibato-anime.com/music.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期原曲名、正式演唱名義、用途及2020春季已核；既有ID、歌曲關係與影音保留。",
          "resumeWhen": "待本曲直接音源／發行／平台資料可核時補可選欄位；不由coupling或MV推新增動畫用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "おやすみ",
      "artistDisplayName": "ユトリア(CV.市ノ瀬加那)",
      "id": "shachou-battle-no-jikan-desu-ed-1",
      "songId": "shachou-battle-no-jikan-desu-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://shachibato-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/shachou_battle_no_jikan_desu",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "KADOKAWAanime 官方影片",
          "url": "https://www.youtube.com/watch?v=9cMvQgjVRr4",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://shachibato-anime.com/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://cal.syoboi.jp/tid/5617",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://shachibato-anime.com/onair.html",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ユトリア(CV.市ノ瀬加那)",
          "role": "vocals"
        },
        {
          "name": "武田城以",
          "role": "lyrics"
        },
        {
          "name": "武田城以",
          "role": "composition"
        },
        {
          "name": "武田城以",
          "role": "arrangement"
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
            "https://shachibato-anime.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://shachibato-anime.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5617"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://cal.syoboi.jp/tid/5617"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shachou-battle-no-jikan-desu-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://shachibato-anime.com/music.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期原曲名、正式演唱名義、用途及2020春季已核；既有ID、歌曲關係與影音保留。",
          "resumeWhen": "待本曲直接音源／發行／平台資料可核時補可選欄位；不由coupling或MV推新增動畫用途。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://shachibato-anime.com/music.html",
      "label": "動畫官方作品標題資料",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://shachibato-anime.com/onair.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E7%A4%BE%E9%95%B7%EF%BC%8C%E6%88%B0%E9%AC%A5%E7%9A%84%E6%99%82%E9%96%93%E5%88%B0%E4%BA%86%EF%BC%81",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://cal.syoboi.jp/tid/5617",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 7,
  "broadcastTimeJst": "23:30",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 113693,
  "slug": "honzuki-no-gekokujou-2",
  "startDate": "2020-04-05",
  "titleJa": "本好きの下剋上 司書になるためには手段を選んでいられません 第2期",
  "titleZhHant": "小書痴的下剋上 為了成為圖書管理員不擇手段！第二季",
  "titleRomaji": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113693-3tHbslFxD47R.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113693-i9Wm6xjTlQGQ.jpg",
  "broadcastLabel": "ABCテレビ原期初回（通常26:10、初回のみ26:15）",
  "officialSiteUrl": "https://booklove-anime.jp/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/165",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/honzuki_no_gekokujou_shisho_ni_naru_tame_ni_wa_shudan_wo_erandeiraremasen_2nd_season",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "つむじかぜ",
      "artistDisplayName": "諸星すみれ",
      "id": "honzuki-no-gekokujou-2-op-1",
      "songId": "honzuki-no-gekokujou-2-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://booklove-anime.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/honzuki_no_gekokujou_shisho_ni_naru_tame_ni_wa_shudan_wo_erandeiraremasen_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Sumire Morohoshi 官方影片",
          "url": "https://www.youtube.com/watch?v=d6gFW81dInI",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026544/VTZL-171.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "諸星すみれ",
          "role": "vocals"
        },
        {
          "name": "岩里祐穂",
          "role": "lyrics"
        },
        {
          "name": "白戸佑輔",
          "role": "composition"
        },
        {
          "name": "白戸佑輔",
          "role": "arrangement"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026544/VTZL-171.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026544/VTZL-171.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026544/VTZL-171.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "エフェメラをあつめて",
      "artistDisplayName": "鈴木みのり",
      "id": "honzuki-no-gekokujou-2-ed-1",
      "songId": "honzuki-no-gekokujou-2-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://booklove-anime.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/honzuki_no_gekokujou_shisho_ni_naru_tame_ni_wa_shudan_wo_erandeiraremasen_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "鈴木みのり 官方影片",
          "url": "https://www.youtube.com/watch?v=-5AmqQmfbMU",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025540/VE3WA-18757.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "鈴木みのり",
          "role": "vocals"
        },
        {
          "name": "やなぎなぎ",
          "role": "lyrics"
        },
        {
          "name": "kz",
          "role": "composition"
        },
        {
          "name": "kz",
          "role": "arrangement"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025540/VE3WA-18757.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025540/VE3WA-18757.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "honzuki-no-gekokujou-2-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A025540/VE3WA-18757.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://mypage.syosetu.com/mypageblog/view/userid/372556/blogkey/2535988/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E5%B0%8F%E6%9B%B8%E7%97%B4%E7%9A%84%E4%B8%8B%E5%89%8B%E4%B8%8A",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 7,
  "broadcastTimeJst": "02:15",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 113990,
  "slug": "kiratto-prichan-season-3",
  "startDate": "2020-04-05",
  "titleJa": "キラッとプリ☆チャン シーズン3",
  "titleZhHant": "閃躍吧！星夢頻道 第三季",
  "titleRomaji": "Kiratto Pri☆Chan Season 3",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113990-YgKXiAQbojVB.jpg",
  "broadcastLabel": "日本首播／受疫情影響曾延期或停播",
  "officialSiteUrl": "https://www.tv-tokyo.co.jp/anime/prichan/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/332",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "イルミナージュ・ランド",
      "artistDisplayName": "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
      "id": "kiratto-prichan-season-3-op-1",
      "songId": "kiratto-prichan-season-3-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/prichan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "avex pictures 官方影片",
          "url": "https://www.youtube.com/watch?v=2JJ5a_hG3IU",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://rungirlsrun.jp/discography/detail.php?id=1017496",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://avex.jp/prichan/discography/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kiratto_Pri_Chan_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
          "role": "vocals"
        },
        {
          "name": "只野菜摘",
          "role": "lyrics"
        },
        {
          "name": "瀬尾祥太郎",
          "role": "composition"
        },
        {
          "name": "瀬尾祥太郎",
          "role": "arrangement"
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
            "https://rungirlsrun.jp/discography/detail.php?id=1017496"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://rungirlsrun.jp/discography/detail.php?id=1017496"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://rungirlsrun.jp/discography/detail.php?id=1017496"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "ルミナンスプリンセス",
      "artistDisplayName": "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
      "id": "kiratto-prichan-season-3-op-2",
      "songId": "kiratto-prichan-season-3-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall",
        "2021-winter"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/prichan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "avex 官方影片",
          "url": "https://www.youtube.com/watch?v=SrMkx_P9cgw",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://rungirlsrun.jp/news/detail.php?id=1086519",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://avex.jp/prichan/discography/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kiratto_Pri_Chan_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
          "role": "vocals"
        },
        {
          "name": "真崎エリカ",
          "role": "lyrics"
        },
        {
          "name": "酒井拓也",
          "role": "composition"
        },
        {
          "name": "酒井拓也",
          "role": "arrangement"
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
            "https://rungirlsrun.jp/news/detail.php?id=1086519"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://rungirlsrun.jp/news/detail.php?id=1086519"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-2"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://rungirlsrun.jp/news/detail.php?id=1086519"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 3,
      "titleJa": "ドリーミング☆チャンネル!",
      "artistDisplayName": "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
      "id": "kiratto-prichan-season-3-op-3",
      "songId": "kiratto-prichan-season-3-op-3-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-winter",
        "2021-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/prichan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "avex 官方影片",
          "url": "https://www.youtube.com/watch?v=q9WpV51PRSs",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://rungirlsrun.jp/news/detail.php?id=1090159",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://avex.jp/prichan/discography/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kiratto_Pri_Chan_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
          "role": "vocals"
        },
        {
          "name": "松井洋平",
          "role": "lyrics"
        },
        {
          "name": "本多友紀",
          "role": "composition"
        },
        {
          "name": "河合泰志",
          "role": "arrangement"
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
            "https://rungirlsrun.jp/news/detail.php?id=1090159"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://rungirlsrun.jp/news/detail.php?id=1090159"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-3"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-op-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://rungirlsrun.jp/news/detail.php?id=1090159"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "官方歌曲公告正文明3月14日起、頁面header日期與正文不一致；季度依獨立原日版逐話日期，不把header當首用日。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "A・B・C・Dいいね★ダンス",
      "artistDisplayName": "GOGO!MASCOTS [キラッCHU (CV.山下七海)、メルパン (CV.大森日雅)、ラビリィ (CV.田中美海)]",
      "id": "kiratto-prichan-season-3-ed-1",
      "songId": "kiratto-prichan-season-3-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall",
        "2021-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/prichan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://avex.jp/prichan/news/detail.php?artist_cd=KIRAP&id=1087344",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://avex.jp/prichan/discography/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kiratto_Pri_Chan_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "GOGO!MASCOTS [キラッCHU (CV.山下七海)、メルパン (CV.大森日雅)、ラビリィ (CV.田中美海)]",
          "role": "vocals"
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
            "https://avex.jp/prichan/news/detail.php?artist_cd=KIRAP&id=1087344"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/news/detail.php?artist_cd=KIRAP&id=1087344"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原日版103–128及152話同曲ED；152話2021春特殊回用另核，不由整作跨季泛授。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "One Heart",
      "artistDisplayName": "Miracle StAr [桃山みらい (CV.林鼓子)、萌黄えも (CV.久保田未夢)、青葉りんか (CV.厚木那奈美)、赤城あんな (CV.芹澤優)、緑川さら (CV.若井友希)、紫藤める (CV.森嶋優花)]",
      "id": "kiratto-prichan-season-3-ed-2",
      "songId": "kiratto-prichan-season-3-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall",
        "2021-winter",
        "2021-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/prichan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://avex.jp/prichan/news/detail.php?artist_cd=KIRAP&id=1090046",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://avex.jp/prichan/discography/detail.php?id=1018285",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kiratto_Pri_Chan_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Miracle StAr [桃山みらい (CV.林鼓子)、萌黄えも (CV.久保田未夢)、青葉りんか (CV.厚木那奈美)、赤城あんな (CV.芹澤優)、緑川さら (CV.若井友希)、紫藤める (CV.森嶋優花)]",
          "role": "vocals"
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
            "https://avex.jp/prichan/news/detail.php?artist_cd=KIRAP&id=1090046"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/detail.php?id=1018285"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/news/detail.php?artist_cd=KIRAP&id=1090046"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-2"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/detail.php?id=1018285"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "One Heart (Meltic StAr ver.)",
      "artistDisplayName": "Meltic StAr [赤城あんな (CV.芹澤優)、緑川さら (CV.若井友希)、紫藤める (CV.森嶋優花)]",
      "id": "kiratto-prichan-season-3-ed-3",
      "songId": "kiratto-prichan-season-3-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/prichan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://avex.jp/prichan/discography/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kiratto_Pri_Chan_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Meltic StAr [赤城あんな (CV.芹澤優)、緑川さら (CV.若井友希)、紫藤める (CV.森嶋優花)]",
          "role": "vocals"
        }
      ],
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-3-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "精確角色版歌曲身分可與本期實際片尾用途分開；用途仍待第一方逐話確認。",
          "resumeWhen": "待原期官方逐話歌唱credit明本版本實際用途，再合獨立交叉；兩輪後保留，不以商品版本曲目推TV。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "One Heart (Miracle☆Kiratts ver.)",
      "artistDisplayName": "Miracle☆Kiratts [桃山みらい (CV.林鼓子)、萌黄えも (CV.久保田未夢)、青葉りんか (CV.厚木那奈美)]",
      "id": "kiratto-prichan-season-3-ed-4",
      "songId": "kiratto-prichan-season-3-ed-4-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/prichan/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://avex.jp/prichan/discography/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kiratto_Pri_Chan_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Miracle☆Kiratts [桃山みらい (CV.林鼓子)、萌黄えも (CV.久保田未夢)、青葉りんか (CV.厚木那奈美)]",
          "role": "vocals"
        }
      ],
      "evidence": [
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://avex.jp/prichan/discography/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%98%9F%E5%85%89%E9%A0%BB%E9%81%93"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kiratto-prichan-season-3-ed-4-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "精確角色版歌曲身分可與本期實際片尾用途分開；用途仍待第一方逐話確認。",
          "resumeWhen": "待原期官方逐話歌唱credit明本版本實際用途，再合獨立交叉；兩輪後保留，不以商品版本曲目推TV。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [],
  "seasonIds": [
    "2020-spring",
    "2020-summer",
    "2020-fall",
    "2021-winter",
    "2021-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 114717,
  "slug": "tomica-kizuna-gattai-earth-granner",
  "startDate": "2020-04-05",
  "titleJa": "トミカ絆合体 アースグランナー",
  "titleZhHant": "先鋒飛車 極速合體 地球防衛隊",
  "titleRomaji": "Tomica Kizuna Gattai: Earth Granner",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114717-BrI8RVqye7Sd.jpg",
  "broadcastLabel": "テレビ大阪・テレビ東京系列原期初回",
  "officialSiteUrl": "https://www.tv-osaka.co.jp/ip4/earth-granner/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/333",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/tomica_kizuna_gattai_earth_granner",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "世界が君を必要とする時が来たんだ",
      "artistDisplayName": "オーイシマサヨシ",
      "id": "tomica-kizuna-gattai-earth-granner-op-1",
      "songId": "tomica-kizuna-gattai-earth-granner-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall",
        "2021-winter"
      ],
      "sources": [
        {
          "label": "《先鋒飛車 極速合體 地球防衛隊》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.takaratomy.co.jp/products/tomica/earthgranner/mov.htm",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/tomica_kizuna_gattai_earth_granner",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Masayoshi Oishi 官方影片",
          "url": "https://www.youtube.com/watch?v=MbFyOtpwx5s",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-osaka.co.jp/ip4/earth-granner/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.tv-osaka.co.jp/ip4/earth-granner/news/1883527_13022.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%9F%E3%82%AB%E7%B5%86%E5%90%88%E4%BD%93_%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "オーイシマサヨシ",
          "role": "vocals"
        },
        {
          "name": "大石昌良",
          "role": "lyrics"
        },
        {
          "name": "大石昌良",
          "role": "composition"
        },
        {
          "name": "大石昌良",
          "role": "arrangement"
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
            "https://www.tv-osaka.co.jp/ip4/earth-granner/news/1883527_13022.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.tv-osaka.co.jp/ip4/earth-granner/news/1883527_13022.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%9F%E3%82%AB%E7%B5%86%E5%90%88%E4%BD%93_%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%9F%E3%82%AB%E7%B5%86%E5%90%88%E4%BD%93_%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.tv-osaka.co.jp/ip4/earth-granner/news/1883527_13022.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "僕らがヒーロー",
      "artistDisplayName": "ダ・ヴィンチ：ポワロ(凛＋原田謙太)",
      "id": "tomica-kizuna-gattai-earth-granner-ed-1",
      "songId": "tomica-kizuna-gattai-earth-granner-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall",
        "2021-winter"
      ],
      "sources": [
        {
          "label": "《先鋒飛車 極速合體 地球防衛隊》第一方歌曲資料：曲名與演唱者",
          "url": "https://www.takaratomy.co.jp/products/tomica/earthgranner/mov.htm",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/tomica_kizuna_gattai_earth_granner",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ぽにきゃん-Anime PONY CANYON 官方影片",
          "url": "https://www.youtube.com/watch?v=D_D2hSzf0C0",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-osaka.co.jp/ip4/earth-granner/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://prtimes.jp/main/html/rd/p/000000674.000020945.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%9F%E3%82%AB%E7%B5%86%E5%90%88%E4%BD%93_%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ダ・ヴィンチ：ポワロ(凛＋原田謙太)",
          "role": "vocals"
        },
        {
          "name": "島崎貴光",
          "role": "lyrics"
        },
        {
          "name": "島崎貴光",
          "role": "composition"
        },
        {
          "name": "島崎貴光",
          "role": "arrangement"
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
            "https://prtimes.jp/main/html/rd/p/000000674.000020945.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://prtimes.jp/main/html/rd/p/000000674.000020945.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%9F%E3%82%AB%E7%B5%86%E5%90%88%E4%BD%93_%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%9F%E3%82%AB%E7%B5%86%E5%90%88%E4%BD%93_%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "tomica-kizuna-gattai-earth-granner-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://prtimes.jp/main/html/rd/p/000000674.000020945.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://prtimes.jp/main/html/rd/p/000000674.000020945.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%9F%E3%82%AB%E7%B5%86%E5%90%88%E4%BD%93_%E3%82%A2%E3%83%BC%E3%82%B9%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%8A%E3%83%BC",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 7,
  "broadcastTimeJst": "09:30",
  "seasonIds": [
    "2020-spring",
    "2020-summer",
    "2020-fall",
    "2021-winter"
  ]
}),
  spring2020Seed({
  "anilistId": 114811,
  "slug": "digimon-adventure-2020",
  "startDate": "2020-04-05",
  "titleJa": "デジモンアドベンチャー:",
  "titleZhHant": "數碼寶貝：",
  "titleRomaji": "Digimon Adventure:",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114811-SLZ6cMMhx6Im.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114811-0vsPGTLAOKPu.jpg",
  "broadcastLabel": "日本首播／時間未整理",
  "officialSiteUrl": "https://www.toei-anim.co.jp/tv/digimon/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/55",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/digimon_adventure_2020",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "未確認飛行船",
      "artistDisplayName": "谷本貴義",
      "id": "digimon-adventure-2020-op-1",
      "songId": "digimon-adventure-2020-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall",
        "2021-winter",
        "2021-spring",
        "2021-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.toei-anim.co.jp/tv/digimon/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/digimon_adventure_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "東映アニメーション公式YouTubeチャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=aPPCXVBHPhw",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/about/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "谷本貴義",
          "role": "vocals"
        },
        {
          "name": "森由里子",
          "role": "lyrics"
        },
        {
          "name": "馬渕直純",
          "role": "composition"
        },
        {
          "name": "馬渕直純",
          "role": "arrangement"
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
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "悔しさは種",
      "artistDisplayName": "藤川千愛",
      "id": "digimon-adventure-2020-ed-1",
      "songId": "digimon-adventure-2020-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.toei-anim.co.jp/tv/digimon/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/digimon_adventure_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Chiai Fujikawa 官方影片",
          "url": "https://www.youtube.com/watch?v=ZLtg9XI01Hc",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/about/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "藤川千愛",
          "role": "vocals"
        },
        {
          "name": "藤川千愛",
          "role": "lyrics"
        },
        {
          "name": "藤永龍太郎",
          "role": "composition"
        },
        {
          "name": "藤永龍太郎",
          "role": "arrangement"
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
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "Q?",
      "artistDisplayName": "Reol",
      "id": "digimon-adventure-2020-ed-2",
      "songId": "digimon-adventure-2020-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer",
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.toei-anim.co.jp/tv/digimon/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/digimon_adventure_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "東映アニメーション公式YouTubeチャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=ks-KJWs_3uk",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/about/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/news/2020083001.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Reol",
          "role": "vocals"
        },
        {
          "name": "Reol",
          "role": "lyrics"
        },
        {
          "name": "Giga",
          "role": "composition"
        },
        {
          "name": "Reol",
          "role": "composition"
        },
        {
          "name": "Giga",
          "role": "arrangement"
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
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2020083001.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-2"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2020083001.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "Mind game",
      "artistDisplayName": "Maica_n",
      "id": "digimon-adventure-2020-ed-3",
      "songId": "digimon-adventure-2020-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall",
        "2021-winter"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.toei-anim.co.jp/tv/digimon/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/digimon_adventure_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "東映アニメーション公式YouTubeチャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=sdQwCfi90DE",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/about/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/news/2020111301.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Maica_n",
          "role": "vocals"
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
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2020111301.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-3"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2020111301.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-3"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "オーバーシーズ・ハイウェイ",
      "artistDisplayName": "ウォルピスカーター",
      "id": "digimon-adventure-2020-ed-4",
      "songId": "digimon-adventure-2020-ed-4-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-winter",
        "2021-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.toei-anim.co.jp/tv/digimon/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/digimon_adventure_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "東映アニメーション公式YouTubeチャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=srExFEuO2OU",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/about/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/news/2021022601.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/news/2021031001.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ウォルピスカーター",
          "role": "vocals"
        },
        {
          "name": "ウォルピスカーター",
          "role": "lyrics"
        },
        {
          "name": "Orangestar",
          "role": "lyrics"
        },
        {
          "name": "Orangestar",
          "role": "composition"
        },
        {
          "name": "ルワン",
          "role": "arrangement"
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
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021022601.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021031001.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021022601.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021031001.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-4"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021031001.php"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 5,
      "titleJa": "Dreamers",
      "artistDisplayName": "ATEEZ",
      "id": "digimon-adventure-2020-ed-5",
      "songId": "digimon-adventure-2020-ed-5-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.toei-anim.co.jp/tv/digimon/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/digimon_adventure_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "東映アニメーション公式YouTubeチャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=D2m-evQN6jM",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/about/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/news/2021062401.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ATEEZ",
          "role": "vocals"
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
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-5-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021062401.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-5-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/about/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-5"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021062401.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-5"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-5-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-ed-5"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "id": "digimon-adventure-2020-in-1",
      "type": "IN",
      "sequence": 1,
      "titleJa": "Be The Winners",
      "artistDisplayName": "谷本貴義",
      "credits": [],
      "links": [],
      "songId": "digimon-adventure-2020-in-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer",
        "2020-fall",
        "2021-winter",
        "2021-spring",
        "2021-summer"
      ],
      "sources": [
        {
          "url": "https://columbia.jp/artist-info/tanimototakayoshi/discography/COCC-17780.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
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
            "https://columbia.jp/artist-info/tanimototakayoshi/discography/COCC-17780.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://columbia.jp/artist-info/tanimototakayoshi/discography/COCC-17780.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲的原名、演唱名義、本期插曲用途與已確認季度均已核對；創作署名、音源版本、官方影片及發行品資料仍待補齊。",
          "resumeWhen": "待權利方公開本曲創作署名及正式發行資料後，補核音源規格、官方影片與各正版平台的對應項目。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "id": "digimon-adventure-2020-in-2",
      "type": "IN",
      "sequence": 2,
      "titleJa": "X-treme Fight",
      "artistDisplayName": "谷本貴義",
      "credits": [],
      "links": [],
      "songId": "digimon-adventure-2020-in-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer",
        "2020-fall",
        "2021-winter",
        "2021-spring",
        "2021-summer"
      ],
      "sources": [
        {
          "url": "https://columbia.jp/artist-info/tanimototakayoshi/discography/COCC-17780.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
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
            "https://columbia.jp/artist-info/tanimototakayoshi/discography/COCC-17780.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://columbia.jp/artist-info/tanimototakayoshi/discography/COCC-17780.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲的原名、演唱名義、本期插曲用途與已確認季度均已核對；創作署名、音源版本、官方影片及發行品資料仍待補齊。",
          "resumeWhen": "待權利方公開本曲創作署名及正式發行資料後，補核音源規格、官方影片與各正版平台的對應項目。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "id": "digimon-adventure-2020-in-3",
      "type": "IN",
      "sequence": 3,
      "titleJa": "Break the chain",
      "artistDisplayName": "谷本貴義",
      "credits": [
        {
          "name": "谷本貴義",
          "role": "lyrics"
        },
        {
          "name": "谷本貴義",
          "role": "composition"
        },
        {
          "name": "谷本貴義",
          "role": "arrangement"
        }
      ],
      "links": [],
      "songId": "digimon-adventure-2020-in-3-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall",
        "2021-winter",
        "2021-spring",
        "2021-summer"
      ],
      "sources": [
        {
          "url": "https://www.toei-anim.co.jp/tv/digimon/news/2021042401.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
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
            "https://www.toei-anim.co.jp/tv/digimon/news/2021042401.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021042401.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%95%B0%E7%A0%81%E5%AE%9D%E8%B4%9D%E5%A4%A7%E5%86%92%E9%99%A9%EF%BC%9A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "digimon-adventure-2020-in-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.toei-anim.co.jp/tv/digimon/news/2021042401.php"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲的原名、演唱名義、本期插曲用途、已確認季度及三項創作署名均已核對；音源版本、官方影片及發行品資料仍待補齊。",
          "resumeWhen": "待權利方公開本曲正式音源規格、官方影片、發行品及正版平台項目後，補齊對應欄位。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [],
  "seasonIds": [
    "2020-spring",
    "2020-summer",
    "2020-fall",
    "2021-winter",
    "2021-spring",
    "2021-summer"
  ]
}),
  spring2020Seed({
  "anilistId": 116793,
  "slug": "motto-majime-ni-fumajime-kaiketsu-zorori",
  "startDate": "2020-04-05",
  "titleJa": "もっと! まじめにふまじめ かいけつゾロリ",
  "titleZhHant": "更多！認真地不認真的怪傑佐羅力",
  "titleRomaji": "Motto! Majime ni Fumajime Kaiketsu Zorori",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116793-6TUNMzgucLpk.jpg",
  "broadcastLabel": "2020年4月5日19:00 NHK Eテレ原TV首話",
  "officialSiteUrl": "https://www.zorori.jp/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/138",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "もっと！もっと！かいけつゾロリ",
      "artistDisplayName": "ゾロリ (CV.山寺宏一)",
      "id": "motto-majime-ni-fumajime-kaiketsu-zorori-op-1",
      "songId": "motto-majime-ni-fumajime-kaiketsu-zorori-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.zorori.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/925",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "【公式】BN Picturesチャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=iUlEnyuu3wg",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://columbia.jp/prod-info/COCA-17782/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%80%AA%E4%BF%A0%E4%BD%90%E7%BE%85%E5%88%A9",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ゾロリ (CV.山寺宏一)",
          "role": "vocals"
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
            "https://columbia.jp/prod-info/COCA-17782/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://columbia.jp/prod-info/COCA-17782/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%80%AA%E4%BF%A0%E4%BD%90%E7%BE%85%E5%88%A9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%80%AA%E4%BF%A0%E4%BD%90%E7%BE%85%E5%88%A9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "use_quarters",
            "recordings",
            "releases",
            "platform_links",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "已確認本期片頭與春季用途；夏秋延用尚待直接逐曲／逐話證據，不從全作末話日推定。",
          "resumeWhen": "待原期逐話音樂署名或製作方逐曲季別公告直接確認2020夏、秋的本曲延用；第一期與後續系列分開。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "シャラララ",
      "artistDisplayName": "ONEPIXCEL",
      "id": "motto-majime-ni-fumajime-kaiketsu-zorori-ed-1",
      "songId": "motto-majime-ni-fumajime-kaiketsu-zorori-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.zorori.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/925",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ONEPIXCEL 官方影片",
          "url": "https://www.youtube.com/watch?v=pkLHQ0VhXjw",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://columbia.jp/prod-info/COCA-17782/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://columbia.jp/artist-info/onepixcel/info/69750.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%80%AA%E4%BF%A0%E4%BD%90%E7%BE%85%E5%88%A9",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "OnePixcel",
          "role": "vocals"
        },
        {
          "name": "HIROMI",
          "role": "lyrics"
        },
        {
          "name": "STARFISH",
          "role": "composition"
        },
        {
          "name": "ELLEN BERG",
          "role": "composition"
        },
        {
          "name": "BIG-F",
          "role": "composition"
        },
        {
          "name": "STARFISH",
          "role": "arrangement"
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
            "https://columbia.jp/prod-info/COCA-17782/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://columbia.jp/artist-info/onepixcel/info/69750.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://columbia.jp/prod-info/COCA-17782/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%80%AA%E4%BF%A0%E4%BD%90%E7%BE%85%E5%88%A9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%80%AA%E4%BF%A0%E4%BD%90%E7%BE%85%E5%88%A9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "motto-majime-ni-fumajime-kaiketsu-zorori-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://columbia.jp/artist-info/onepixcel/info/69750.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "use_quarters",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "已確認本期片尾與春季用途；夏秋延用尚待直接逐曲／逐話證據，不從全作末話日推定。",
          "resumeWhen": "待原期逐話音樂署名或製作方逐曲季別公告直接確認2020夏、秋的本曲延用；第一期與後續系列分開。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://columbia.jp/prod-info/COCA-17782/",
      "label": "本期作品名稱資料",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://columbia.jp/artist-info/onepixcel/info/69750.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://www.zorori.jp/story/001.php",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://www.zorori.jp/story/025.php",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E4%BD%90%E7%BE%85%E5%8A%9B%E5%8B%95%E7%95%AB%E9%9B%86%E6%95%B8%E5%88%97%E8%A1%A8",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 7,
  "broadcastTimeJst": "19:00",
  "seasonIds": [
    "2020-spring",
    "2020-summer",
    "2020-fall"
  ]
}),
  spring2020Seed({
  "anilistId": 118630,
  "slug": "duel-masters-king-2020",
  "startDate": "2020-04-05",
  "titleJa": "デュエル・マスターズキング",
  "titleZhHant": "決鬥大師 King",
  "titleRomaji": "Duel Masters King",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx118630-tSFqf4Qlgv1m.png",
  "broadcastLabel": "2020年4月5日08:30 テレビ東京系原TV首話",
  "officialSiteUrl": "https://www.tv-tokyo.co.jp/anime/dm_king/",
  "sourceReferenceUrls": [
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "キンキラKING！",
      "artistDisplayName": "はやぶさ",
      "id": "duel-masters-king-2020-op-1",
      "songId": "duel-masters-king-2020-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/dm_king/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/902",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://8823.click/news/20200806_news/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.ttmnet.co.jp/theme/2020-6/?id=theme-fri",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.ttmnet.co.jp/theme/2020-8/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.joysound.com/web/search/title/28131",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.mau2.com/anime/duelmastersking",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "はやぶさ",
          "role": "vocals"
        },
        {
          "name": "前山田健一",
          "role": "lyrics"
        },
        {
          "name": "前山田健一",
          "role": "composition"
        },
        {
          "name": "前山田健一",
          "role": "arrangement"
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
            "https://8823.click/news/20200806_news/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-6/?id=theme-fri"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-8/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-6/?id=theme-fri"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-8/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.joysound.com/web/search/title/28131"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://8823.click/news/20200806_news/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲原名、正式名義與已確認原期用途季度已核對；可選欄位依現有資料另待補。",
          "resumeWhen": "待原期權利方逐曲公開尚缺欄位或其他使用資料後續核，不從商品、影片或cast推定。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "No Rain, No Rainbow",
      "artistDisplayName": "水樹奈々",
      "id": "duel-masters-king-2020-op-2",
      "songId": "duel-masters-king-2020-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/dm_king/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/902",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "水樹奈々 官方影片",
          "url": "https://www.youtube.com/watch?v=weZIhAQZRm0",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://cnt.kingrecords.co.jp/high-resolution/anime/13537.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.ttmnet.co.jp/theme/2020-10/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.joysound.com/web/search/title/28131",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.mau2.com/anime/duelmastersking",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "水樹奈々",
          "role": "vocals"
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
            "https://cnt.kingrecords.co.jp/high-resolution/anime/13537.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-10/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-10/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.joysound.com/web/search/title/28131"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-op-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "use_quarters",
            "recordings",
            "releases",
            "platform_links",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "本曲秋季原TV用途已由2020/10月別第一方與獨立交叉確認；2021冬延用仍待原期直接逐曲資料。",
          "resumeWhen": "待2021冬原期播出單位月別曲目或逐話官方credit直接列本曲，再補冬季；不以47話完結日推全曲跨季。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "ともだちだから",
      "artistDisplayName": "上月せれな",
      "id": "duel-masters-king-2020-ed-1",
      "songId": "duel-masters-king-2020-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/dm_king/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/902",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "上月せれな（せれちゅ） 官方影片",
          "url": "https://www.youtube.com/watch?v=cnylWKjeAsA",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.ttmnet.co.jp/theme/2020-6/?id=theme-fri",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.joysound.com/web/search/title/28131",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.mau2.com/anime/duelmastersking",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "上月せれな",
          "role": "vocals"
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
            "https://www.ttmnet.co.jp/theme/2020-6/?id=theme-fri"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-6/?id=theme-fri"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.joysound.com/web/search/title/28131"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "本曲原名、正式名義與已確認原期用途季度已核對；可選欄位依現有資料另待補。",
          "resumeWhen": "待原期權利方逐曲公開尚缺欄位或其他使用資料後續核，不從商品、影片或cast推定。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "百花繚乱ココロモヨウ",
      "artistDisplayName": "WAWAWA",
      "id": "duel-masters-king-2020-ed-2",
      "songId": "duel-masters-king-2020-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/dm_king/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/902",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Wawawa - Topic 授權影片",
          "url": "https://www.youtube.com/watch?v=I8ozQow48As",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.ttmnet.co.jp/theme/2020-8/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://store.universal-music.co.jp/collections/wawawa/products/dsku11236",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.joysound.com/web/search/title/28131",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.mau2.com/anime/duelmastersking",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "WAWAWA",
          "role": "vocals"
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
            "https://www.ttmnet.co.jp/theme/2020-8/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://store.universal-music.co.jp/collections/wawawa/products/dsku11236"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-8/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-2"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://store.universal-music.co.jp/collections/wawawa/products/dsku11236"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.joysound.com/web/search/title/28131"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "本曲原名、正式名義與已確認原期用途季度已核對；可選欄位依現有資料另待補。",
          "resumeWhen": "待原期權利方逐曲公開尚缺欄位或其他使用資料後續核，不從商品、影片或cast推定。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "スタート！",
      "artistDisplayName": "佐々木李子",
      "id": "duel-masters-king-2020-ed-3",
      "songId": "duel-masters-king-2020-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.tv-tokyo.co.jp/anime/dm_king/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/902",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "佐々木李子 官方影片",
          "url": "https://www.youtube.com/watch?v=Dn9pFk43SZ8",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://sasakirico.com/schedule_detail.html?id=787",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.ttmnet.co.jp/theme/2020-10/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.joysound.com/web/search/title/28131",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.mau2.com/anime/duelmastersking",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "佐々木李子",
          "role": "vocals"
        },
        {
          "name": "佐々木李子",
          "role": "lyrics"
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
            "https://sasakirico.com/schedule_detail.html?id=787"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-10/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.ttmnet.co.jp/theme/2020-10/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.joysound.com/web/search/title/28131"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/duelmastersking"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "duel-masters-king-2020-ed-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://sasakirico.com/schedule_detail.html?id=787"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "use_quarters",
            "recordings",
            "releases",
            "platform_links",
            "composition",
            "arrangement"
          ],
          "note": "本曲秋季原TV用途已由2020/10月別第一方與獨立交叉確認；2021冬延用仍待原期直接逐曲資料。",
          "resumeWhen": "待2021冬原期播出單位月別曲目或逐話官方credit直接列本曲，再補冬季；不以47話完結日推全曲跨季。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.tv-tokyo.co.jp/anime/dm_king/",
      "label": "本期作品名稱資料",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://www.tv-tokyo.co.jp/anime/dm_king/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E6%B1%BA%E9%AC%A5%E5%A4%A7%E5%B8%AB",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 7,
  "broadcastTimeJst": "08:30",
  "seasonIds": [
    "2020-spring",
    "2020-summer",
    "2020-fall",
    "2021-winter"
  ]
}),
  spring2020Seed({
  "anilistId": 107294,
  "slug": "jashin-chan-dropkick-dash",
  "startDate": "2020-04-06",
  "titleJa": "邪神ちゃんドロップキック’（ダッシュ）",
  "titleZhHant": "邪神與廚二病少女 第二季",
  "titleRomaji": "Jashin-chan Dropkick’",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107294-zWscZpb7wYLH.jpg",
  "broadcastLabel": "2020年4月6日22:30 AT-X原TV首話；MX深夜另換日",
  "officialSiteUrl": "https://jashinchan.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/56",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/jashin_chan_dropkick_2020",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "時としてバイオレンス",
      "artistDisplayName": "halca",
      "id": "jashin-chan-dropkick-dash-op-1",
      "songId": "jashin-chan-dropkick-dash-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《邪神與廚二病少女 第二季》第一方歌曲資料：曲名與演唱者",
          "url": "https://jashinchan.com/news/2439",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/jashin_chan_dropkick_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "[official]DROPKICK ON MY DEVIL! 官方影片",
          "url": "https://www.youtube.com/watch?v=kEQ3tEGKUa0",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://jashinchan.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://jashinchan.com/disc",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.sonymusic.co.jp/artist/halca/info/516338",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%82%AA%E7%A5%9E%E8%88%87%E5%BB%9A%E4%BA%8C%E7%97%85%E5%B0%91%E5%A5%B3",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "halca",
          "role": "vocals"
        },
        {
          "name": "宮嶋淳子",
          "role": "lyrics"
        },
        {
          "name": "原一博",
          "role": "composition"
        },
        {
          "name": "川崎智哉",
          "role": "arrangement"
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
            "https://jashinchan.com/disc"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.sonymusic.co.jp/artist/halca/info/516338"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://jashinchan.com/disc"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%82%AA%E7%A5%9E%E8%88%87%E5%BB%9A%E4%BA%8C%E7%97%85%E5%B0%91%E5%A5%B3"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%82%AA%E7%A5%9E%E8%88%87%E5%BB%9A%E4%BA%8C%E7%97%85%E5%B0%91%E5%A5%B3"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://jashinchan.com/disc"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲原名、正式名義與已確認原期用途季度已核對；可選欄位依現有資料另待補。",
          "resumeWhen": "待原期權利方逐曲公開尚缺欄位或其他使用資料後續核，不從商品、影片或cast推定。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "Love Satisfaction",
      "artistDisplayName": "ZAMB",
      "id": "jashin-chan-dropkick-dash-ed-1",
      "songId": "jashin-chan-dropkick-dash-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《邪神與廚二病少女 第二季》第一方歌曲資料：曲名與演唱者",
          "url": "https://jashinchan.com/news/2439",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/jashin_chan_dropkick_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "[official]DROPKICK ON MY DEVIL! 官方影片",
          "url": "https://www.youtube.com/watch?v=TyL3euwKPXM",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://jashinchan.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://jashinchan.com/disc",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://prtimes.jp/main/html/rd/p/000002369.000013546.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%82%AA%E7%A5%9E%E8%88%87%E5%BB%9A%E4%BA%8C%E7%97%85%E5%B0%91%E5%A5%B3",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ZAMB",
          "role": "vocals"
        },
        {
          "name": "図画泉美",
          "role": "lyrics"
        },
        {
          "name": "木田竜也",
          "role": "composition"
        },
        {
          "name": "木田竜也",
          "role": "arrangement"
        },
        {
          "name": "GAK",
          "role": "arrangement"
        },
        {
          "name": "長戸大幸",
          "role": "arrangement"
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
            "https://jashinchan.com/disc"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://prtimes.jp/main/html/rd/p/000002369.000013546.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://jashinchan.com/disc"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%82%AA%E7%A5%9E%E8%88%87%E5%BB%9A%E4%BA%8C%E7%97%85%E5%B0%91%E5%A5%B3"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%82%AA%E7%A5%9E%E8%88%87%E5%BB%9A%E4%BA%8C%E7%97%85%E5%B0%91%E5%A5%B3"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://jashinchan.com/disc"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲原名、正式名義與已確認原期用途季度已核對；可選欄位依現有資料另待補。",
          "resumeWhen": "待原期權利方逐曲公開尚缺欄位或其他使用資料後續核，不從商品、影片或cast推定。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "CHI☆TO☆SE愛歌",
      "artistDisplayName": "邪神ちゃん (CV.鈴木愛奈)、リエール (CV.花井美春)",
      "id": "jashin-chan-dropkick-dash-ed-2",
      "songId": "jashin-chan-dropkick-dash-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "url": "https://jashinchan.com/news/2439",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/jashin_chan_dropkick_2020",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "[official]DROPKICK ON MY DEVIL! 官方影片",
          "url": "https://www.youtube.com/watch?v=Jkf6Rq3i8e4",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://jashinchan.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        }
      ],
      "credits": [
        {
          "name": "邪神ちゃん (CV.鈴木愛奈)、リエール (CV.花井美春)",
          "role": "vocals"
        },
        {
          "name": "筆安一幸",
          "role": "lyrics"
        },
        {
          "name": "TORIENA",
          "role": "composition"
        },
        {
          "name": "TORIENA",
          "role": "arrangement"
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
            "https://jashinchan.com/news/2439"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "jashin-chan-dropkick-dash-ed-2-song"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://jashinchan.com/news/2439"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "千歲篇片尾曲身分與創作有直接資料，原TV／配信版的精確用途季度及獨立交叉仍待核；保留原用途及影音。",
          "resumeWhen": "待原期官方逐話音樂credit直接對應千歲篇使用集與TV實播日，再合獨立交叉；不以4/30下載發售日推季度，兩輪後保留。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://jashinchan.com/disc",
      "label": "本期作品名稱資料",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://jashinchan.com/onair",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E9%82%AA%E7%A5%9E%E8%88%87%E5%BB%9A%E4%BA%8C%E7%97%85%E5%B0%91%E5%A5%B3",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 1,
  "broadcastTimeJst": "22:30",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 110458,
  "slug": "shironeko-project-zero-chronicle",
  "startDate": "2020-04-06",
  "titleJa": "白猫プロジェクトZERO CHRONICLE",
  "titleZhHant": "白貓 Project Zero Chronicle 零之紀元",
  "titleRomaji": "Shironeko Project: ZERO CHRONICLE",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110458-Fnh88lYo5pfl.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110458-qXLCQ16XUVRu.jpg",
  "broadcastLabel": "2020/4/6(月)22:00 AT-X原期TV；官方原onair安排與中文原TV期間吻合，配信及10月他台後播分開。",
  "officialSiteUrl": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/415",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/shironeko_project_zero_chronicle",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "天秤-Libra-",
      "artistDisplayName": "西川貴教＋ASCA",
      "id": "shironeko-project-zero-chronicle-op-1",
      "songId": "shironeko-project-zero-chronicle-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/shironeko_project_zero_chronicle",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "西川貴教 官方影片",
          "url": "https://www.youtube.com/watch?v=ChqAonaHTgA",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%B2%93Project",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "西川貴教＋ASCA",
          "role": "vocals"
        },
        {
          "name": "RUCCA",
          "role": "lyrics"
        },
        {
          "name": "菊田大介",
          "role": "composition"
        },
        {
          "name": "菊田大介",
          "role": "arrangement"
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
            "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%B2%93Project"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%B2%93Project"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲原名、正式演唱名義、本期用途及已確認季度已核對；既有歌曲識別、用途序號與影音保留。",
          "resumeWhen": "待權利方提供本曲尚缺的直接創作署名、可識別音源規格、官方影片、發行收錄及正版平台資料後補齊相應欄位；不由商品或影片數量推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "through the dark",
      "artistDisplayName": "安田レイ",
      "id": "shironeko-project-zero-chronicle-ed-1",
      "songId": "shironeko-project-zero-chronicle-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "url": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/shironeko_project_zero_chronicle",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "安田レイ Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=TlFwALKWkss",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%B2%93Project",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/onair/",
          "label": "本期播出日期參考；不作歌曲或用途證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "安田レイ",
          "role": "vocals"
        },
        {
          "name": "安田レイ",
          "role": "lyrics"
        },
        {
          "name": "Jeff Miyahara",
          "role": "composition"
        },
        {
          "name": "Kuraaki Hori",
          "role": "composition"
        },
        {
          "name": "Jeff Miyahara",
          "role": "arrangement"
        },
        {
          "name": "Kuraaki Hori",
          "role": "arrangement"
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
            "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%B2%93Project"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%B2%93Project"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "shironeko-project-zero-chronicle-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本曲原名、正式演唱名義、本期用途及已確認季度已核對；既有歌曲識別、用途序號與影音保留。",
          "resumeWhen": "待權利方提供本曲尚缺的直接創作署名、可識別音源規格、官方影片、發行收錄及正版平台資料後補齊相應欄位；不由商品或影片數量推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E7%99%BD%E8%B2%93Project",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 1,
  "broadcastTimeJst": "22:00",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 113108,
  "slug": "kingdom-3rd-season",
  "startDate": "2020-04-06",
  "titleJa": "キングダム 第3シリーズ",
  "titleZhHant": "王者天下 第三季",
  "titleRomaji": "Kingdom 3rd Season",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113108-ArjAmFLubVyu.jpg",
  "broadcastLabel": "2020/4/6(月)00:15 NHK総合原第3系列；原日曜深夜安排換實曆日，2021/4重播及5月第5話續播另列。",
  "officialSiteUrl": "https://kingdom-anime.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/60",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/kingdom_3rd_season",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "TOMORROW",
      "artistDisplayName": "BiSH",
      "id": "kingdom-3rd-season-op-1",
      "songId": "kingdom-3rd-season-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2021-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://kingdom-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kingdom_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.nhk-ep.co.jp/wp-content/uploads/2020/04/Newsletter202004-05.pdf",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kingdom_%28Japanese_TV_series%29_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "BiSH",
          "role": "vocals"
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
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.nhk-ep.co.jp/wp-content/uploads/2020/04/Newsletter202004-05.pdf"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.nhk-ep.co.jp/wp-content/uploads/2020/04/Newsletter202004-05.pdf"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links",
            "official_video",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "第三系列本曲原名、歌唱與OP／ED用途已核；逐話原播日期區分停播與續播後的使用季度，創作署名等可選欄位待補。",
          "resumeWhen": "待權利方提供本曲尚缺的直接創作署名、可識別音源規格、官方影片、發行收錄及正版平台資料後補齊相應欄位；不由商品或影片數量推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "STACKiNG",
      "artistDisplayName": "BiSH",
      "id": "kingdom-3rd-season-op-2",
      "songId": "kingdom-3rd-season-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-summer",
        "2021-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://kingdom-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kingdom_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kingdom_%28Japanese_TV_series%29_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "BiSH",
          "role": "vocals"
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
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-op-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links",
            "official_video",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "第三系列本曲原名、歌唱與OP／ED用途已核；逐話原播日期區分停播與續播後的使用季度，創作署名等可選欄位待補。",
          "resumeWhen": "待權利方提供本曲尚缺的直接創作署名、可識別音源規格、官方影片、發行收錄及正版平台資料後補齊相應欄位；不由商品或影片數量推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "Deep inside",
      "artistDisplayName": "waterweed",
      "id": "kingdom-3rd-season-ed-1",
      "songId": "kingdom-3rd-season-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2021-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://kingdom-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kingdom_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.nhk-ep.co.jp/wp-content/uploads/2020/04/Newsletter202004-05.pdf",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kingdom_%28Japanese_TV_series%29_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "waterweed",
          "role": "vocals"
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
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://www.nhk-ep.co.jp/wp-content/uploads/2020/04/Newsletter202004-05.pdf"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.nhk-ep.co.jp/wp-content/uploads/2020/04/Newsletter202004-05.pdf"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links",
            "official_video",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "第三系列本曲原名、歌唱與OP／ED用途已核；逐話原播日期區分停播與續播後的使用季度，創作署名等可選欄位待補。",
          "resumeWhen": "待權利方提供本曲尚缺的直接創作署名、可識別音源規格、官方影片、發行收錄及正版平台資料後補齊相應欄位；不由商品或影片數量推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "kIng",
      "artistDisplayName": "鈴木瑛美子",
      "id": "kingdom-3rd-season-ed-2",
      "songId": "kingdom-3rd-season-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2021-summer",
        "2021-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://kingdom-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/kingdom_3rd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/List_of_Kingdom_%28Japanese_TV_series%29_episodes",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "鈴木瑛美子",
          "role": "vocals"
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
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://kingdom-anime.com/discography/detail.php?id=1019003&season=4"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%80%85%E5%A4%A9%E4%B8%8B"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "kingdom-3rd-season-ed-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links",
            "official_video",
            "lyrics",
            "composition",
            "arrangement"
          ],
          "note": "第三系列本曲原名、歌唱與OP／ED用途已核；逐話原播日期區分停播與續播後的使用季度，創作署名等可選欄位待補。",
          "resumeWhen": "待權利方提供本曲尚缺的直接創作署名、可識別音源規格、官方影片、發行收錄及正版平台資料後補齊相應欄位；不由商品或影片數量推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.nhk-ep.co.jp/wp-content/uploads/2020/04/Newsletter202004-05.pdf",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://en.wikipedia.org/wiki/List_of_Kingdom_%28Japanese_TV_series%29_episodes",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "en",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 1,
  "broadcastTimeJst": "00:15",
  "seasonIds": [
    "2020-spring",
    "2021-spring",
    "2021-summer",
    "2021-fall"
  ]
}),
  spring2020Seed({
    anilistId: 115199,
    slug: "poccolies",
    startDate: "2020-04-06",
    titleJa: "ぽっこりーず",
    titleZhHant: "胖腹動物的生活",
    titleRomaji: "Poccolies",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115199-ta7IspS4uVSn.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115199-XKc43AYC7E25.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.bs4.jp/poccolies/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/105",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "Go Go Poccolies",
        artistDisplayName: "においさん (CV.逢来りん)",
      },
    ],
  }),
  spring2020Seed({
  "anilistId": 116248,
  "slug": "garugaku-sei-girls-square-gakuin",
  "startDate": "2020-04-06",
  "titleJa": "ガル学。〜聖ガールズスクエア学院〜",
  "titleZhHant": "女學。～聖女斯克威爾學院～",
  "titleRomaji": "Garugaku.: Sei Girls Square Gakuin",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116248-xpAfte1Hy4qm.jpg",
  "broadcastLabel": "日本首播／時間未整理",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/400",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "センチメートル",
      "artistDisplayName": "Girls²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Girls² Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=kx-NeOXxIZc",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "サクラ道！",
      "artistDisplayName": "east²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Girls² Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=5IbpPNsBLac",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "Shining You, Shining Me ～夢のチカラで～",
      "artistDisplayName": "south²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "ワチャ×2",
      "artistDisplayName": "west²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Girls² Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=9zSRpXk74i4",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "セーノでGo！",
      "artistDisplayName": "east²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 5,
      "titleJa": "オールOK！",
      "artistDisplayName": "east²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 6,
      "titleJa": "ねっ！",
      "artistDisplayName": "east²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 7,
      "titleJa": "愛×2",
      "artistDisplayName": "west²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 8,
      "titleJa": "サ×3 サイコー",
      "artistDisplayName": "west²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 9,
      "titleJa": "Never Give Up 〜うつむかず顔を上へあげて〜",
      "artistDisplayName": "south²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 10,
      "titleJa": "ありがとう 〜ひとことあなたに〜",
      "artistDisplayName": "south²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 11,
      "titleJa": "Shine！",
      "artistDisplayName": "east²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Girls² Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=U8IrD0EBcQg",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 12,
      "titleJa": "Holy Magic 〜大人になっても解けない魔法〜",
      "artistDisplayName": "south²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 13,
      "titleJa": "ワキ アイ×2",
      "artistDisplayName": "west²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 14,
      "titleJa": "Congratulations 〜新しい夢の扉〜",
      "artistDisplayName": "south²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Girls² Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=bcgWhtCYhss",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 15,
      "titleJa": "つなぐ！",
      "artistDisplayName": "east²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    },
    {
      "type": "ED",
      "sequence": 16,
      "titleJa": "ツナグツナグ",
      "artistDisplayName": "Girls²",
      "sources": [
        {
          "label": "公開歌曲資料：用途與演唱者交叉核對",
          "url": "https://anison.online/anime/886",
          "language": "ja",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Girls² Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=yVApjb-iH1Q",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "原期作品識別／非逐曲身分用途證據",
          "url": "https://www.ohast.jp/info/200303.php",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-10-24"
        }
      ],
      "links": [],
      "sourceMode": "explicit"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "label": "原期作品識別／非逐曲身分用途證據",
      "url": "https://www.ohast.jp/info/200303.php",
      "language": "ja",
      "role": "first_party",
      "verifiedAt": "2026-10-24"
    }
  ]
}),
  spring2020Seed({
  "anilistId": 107871,
  "slug": "princess-connect-redive",
  "startDate": "2020-04-07",
  "titleJa": "プリンセスコネクト！Re:Dive",
  "titleZhHant": "超異域公主連結！Re:Dive",
  "titleRomaji": "Princess Connect! Re:Dive",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107871-ZOh7oeDd0kq9.png",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107871-Pfc2rj2u8177.jpg",
  "broadcastLabel": "TOKYO MX 原期初回",
  "officialSiteUrl": "https://anime.priconne-redive.jp/archive/1st/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/115",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/princess_connect_redive",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Lost Princess",
      "artistDisplayName": "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
      "id": "princess-connect-redive-op-1",
      "songId": "princess-connect-redive-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://anime.priconne-redive.jp/archive/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/princess_connect_redive",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "プリンセスコネクト!Re:Dive チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=ti4UkmHI94M",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://columbia.jp/prod-info/COCC-17763/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E8%B6%85%E7%95%B0%E5%9F%9F%E5%85%AC%E4%B8%BB%E9%80%A3%E7%B5%90%E2%98%86Re:Dive",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
          "role": "vocals"
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
            "https://columbia.jp/prod-info/COCC-17763/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://columbia.jp/prod-info/COCC-17763/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%B6%85%E7%95%B0%E5%9F%9F%E5%85%AC%E4%B8%BB%E9%80%A3%E7%B5%90%E2%98%86Re:Dive"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%B6%85%E7%95%B0%E5%9F%9F%E5%85%AC%E4%B8%BB%E9%80%A3%E7%B5%90%E2%98%86Re:Dive"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-op-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "それでもともに歩いていく",
      "artistDisplayName": "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
      "id": "princess-connect-redive-ed-1",
      "songId": "princess-connect-redive-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://anime.priconne-redive.jp/archive/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/princess_connect_redive",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "プリンセスコネクト!Re:Dive チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=Ldw0DCsTt6U",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://columbia.jp/prod-info/COCC-17763/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E8%B6%85%E7%95%B0%E5%9F%9F%E5%85%AC%E4%B8%BB%E9%80%A3%E7%B5%90%E2%98%86Re:Dive",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
          "role": "vocals"
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
            "https://columbia.jp/prod-info/COCC-17763/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://columbia.jp/prod-info/COCC-17763/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%B6%85%E7%95%B0%E5%9F%9F%E5%85%AC%E4%B8%BB%E9%80%A3%E7%B5%90%E2%98%86Re:Dive"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E8%B6%85%E7%95%B0%E5%9F%9F%E5%85%AC%E4%B8%BB%E9%80%A3%E7%B5%90%E2%98%86Re:Dive"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "princess-connect-redive-ed-1"
        }
      ],
      "followUp": [
        {
          "fields": [
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "Connecting Happy!!",
      "artistDisplayName": "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
      "id": "princess-connect-redive-ed-2",
      "songId": "princess-connect-redive-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://anime.priconne-redive.jp/archive/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/princess_connect_redive",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "プリンセスコネクト!Re:Dive チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=0rcl2mrhmLg",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        }
      ],
      "credits": [
        {
          "name": "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
          "role": "vocals"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "既有Connecting Happy!!用途未取得本期逐話第一方證據；保原身份、媒體及ID，季度待核。",
          "resumeWhen": "待原期官方逐話歌唱credit明本版本實際用途，再合獨立交叉；兩輪後保留，不以商品版本曲目推TV。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-09-02"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://anime.priconne-redive.jp/archive/1st/news/detail_id0014.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E8%B6%85%E7%95%B0%E5%9F%9F%E5%85%AC%E4%B8%BB%E9%80%A3%E7%B5%90%E2%98%86Re:Dive",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 2,
  "broadcastTimeJst": "00:30",
  "seasonIds": [
    "2020-spring"
  ]
}),
  spring2020Seed({
  "anilistId": 109019,
  "slug": "houkago-teibou-nisshi",
  "startDate": "2020-04-07",
  "titleJa": "放課後ていぼう日誌",
  "titleZhHant": "放學後堤防日誌",
  "titleRomaji": "Houkago Teibou Nisshi",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109019-xlrVQRdo1EQi.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109019-CI5tlvudZ3zS.jpg",
  "broadcastLabel": "日本首播／受疫情影響曾延期或停播",
  "officialSiteUrl": "https://teibotv.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/367",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/houkago_teibou_nisshi",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "SEA HORIZON",
      "artistDisplayName": "海野高校ていぼう部（高尾奏音、川井田夏海、篠原侑、明坂聡美）",
      "id": "houkago-teibou-nisshi-op-1",
      "songId": "houkago-teibou-nisshi-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://teibotv.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/houkago_teibou_nisshi",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://teibotv.com/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://teibotv.com/news.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%94%BE%E5%AD%B8%E5%BE%8C%E5%A0%A4%E9%98%B2%E6%97%A5%E8%AA%8C",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "海野高校ていぼう部（高尾奏音、川井田夏海、篠原侑、明坂聡美）",
          "role": "vocals"
        },
        {
          "name": "深川琴美",
          "role": "lyrics"
        },
        {
          "name": "ZAI-ON",
          "role": "composition"
        },
        {
          "name": "ZAI-ON",
          "role": "arrangement"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://teibotv.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://teibotv.com/news.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://teibotv.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://teibotv.com/news.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%94%BE%E5%AD%B8%E5%BE%8C%E5%A0%A4%E9%98%B2%E6%97%A5%E8%AA%8C"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%94%BE%E5%AD%B8%E5%BE%8C%E5%A0%A4%E9%98%B2%E6%97%A5%E8%AA%8C"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "釣りの世界へ",
      "artistDisplayName": "海野高校ていぼう部（高尾奏音、川井田夏海、篠原侑、明坂聡美）",
      "id": "houkago-teibou-nisshi-ed-1",
      "songId": "houkago-teibou-nisshi-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://teibotv.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/houkago_teibou_nisshi",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://teibotv.com/music.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://teibotv.com/news.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E6%94%BE%E5%AD%B8%E5%BE%8C%E5%A0%A4%E9%98%B2%E6%97%A5%E8%AA%8C",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "海野高校ていぼう部（高尾奏音、川井田夏海、篠原侑、明坂聡美）",
          "role": "vocals"
        },
        {
          "name": "山田裕介",
          "role": "lyrics"
        },
        {
          "name": "ZAI-ON",
          "role": "composition"
        },
        {
          "name": "ZAI-ON",
          "role": "arrangement"
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
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://teibotv.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://teibotv.com/news.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://teibotv.com/music.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://teibotv.com/news.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%94%BE%E5%AD%B8%E5%BE%8C%E5%A0%A4%E9%98%B2%E6%97%A5%E8%AA%8C"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E6%94%BE%E5%AD%B8%E5%BE%8C%E5%A0%A4%E9%98%B2%E6%97%A5%E8%AA%8C"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "houkago-teibou-nisshi-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A026685/VTCL-35318.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [],
  "seasonIds": [
    "2020-spring",
    "2020-summer"
  ]
}),
  spring2020Seed({
  "anilistId": 111762,
  "slug": "fruits-basket-2nd-season",
  "startDate": "2020-04-07",
  "titleJa": "フルーツバスケット 2nd Season",
  "titleZhHant": "魔法水果籃 第二季",
  "titleRomaji": "Fruits Basket: 2nd Season",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111762-C8TNf5uRlVNQ.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111762-VvlNooo9xZa4.jpg",
  "broadcastLabel": "テレビ東京 原2nd初回",
  "officialSiteUrl": "https://fruba.jp/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/114",
    "https://acgsecrets.hk/bangumi/202004/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/fruits_basket_2nd_season",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "プリズム",
      "artistDisplayName": "AmPm feat. みゆな",
      "id": "fruits-basket-2nd-season-op-1",
      "songId": "fruits-basket-2nd-season-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《魔法水果籃 第二季》第一方歌曲資料：曲名與演唱者",
          "url": "https://fruba.jp/blu-ray_dvd_cd/?season=2",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/fruits_basket_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://fruba.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.tms-e.co.jp/alltitles/2020s/745102.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "AmPm feat. みゆな",
          "role": "vocals"
        },
        {
          "name": "みゆな",
          "role": "lyrics"
        },
        {
          "name": "AmPm",
          "role": "composition"
        },
        {
          "name": "Kris Roche",
          "role": "composition"
        },
        {
          "name": "Yoshinori Ito",
          "role": "composition"
        },
        {
          "name": "AmPm",
          "role": "arrangement"
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
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "HOME",
      "artistDisplayName": "土岐麻子",
      "id": "fruits-basket-2nd-season-op-2",
      "songId": "fruits-basket-2nd-season-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "《魔法水果籃 第二季》第一方歌曲資料：曲名與演唱者",
          "url": "https://fruba.jp/blu-ray_dvd_cd/?season=2",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/fruits_basket_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://fruba.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.tms-e.co.jp/alltitles/2020s/745102.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "土岐麻子",
          "role": "vocals"
        },
        {
          "name": "土岐麻子",
          "role": "lyrics"
        },
        {
          "name": "トオミヨウ",
          "role": "composition"
        },
        {
          "name": "トオミヨウ",
          "role": "arrangement"
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
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-op-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "ad meliora",
      "artistDisplayName": "THE CHARM PARK",
      "id": "fruits-basket-2nd-season-ed-1",
      "songId": "fruits-basket-2nd-season-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring"
      ],
      "sources": [
        {
          "label": "《魔法水果籃 第二季》第一方歌曲資料：曲名與演唱者",
          "url": "https://fruba.jp/blu-ray_dvd_cd/?season=2",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/fruits_basket_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://fruba.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.tms-e.co.jp/alltitles/2020s/745102.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://fruba.jp/news/detail.php?id=1084108",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "THE CHARM PARK",
          "role": "vocals"
        },
        {
          "name": "THE CHARM PARK",
          "role": "lyrics"
        },
        {
          "name": "fifi léger",
          "role": "lyrics"
        },
        {
          "name": "THE CHARM PARK",
          "role": "composition"
        },
        {
          "name": "THE CHARM PARK",
          "role": "arrangement"
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
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-1-song"
        },
        {
          "target": "song",
          "fields": [
            "artist"
          ],
          "sourceUrls": [
            "https://fruba.jp/news/detail.php?id=1084108"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "保原TV展示ad meliora；官方2020公告acoustic mix用於BD/後續配信，回顧頁名稱不據以確認原TV音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "IN",
      "sequence": 2,
      "titleJa": "馳せる未来",
      "artistDisplayName": "ウタ・アリィ",
      "id": "fruits-basket-2nd-season-ed-2",
      "songId": "fruits-basket-2nd-season-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-spring",
        "2020-summer"
      ],
      "sources": [
        {
          "label": "《魔法水果籃 第二季》第一方歌曲資料：曲名與演唱者",
          "url": "https://fruba.jp/blu-ray_dvd_cd/?season=2",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/fruits_basket_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://fruba.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://ena0415.com/works",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://note.com/ena_note0415/n/nf04b897ddd00",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://www.mau2.com/anime/fruitsbasket-r2-2/ep/7",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ウタ・アリィ",
          "role": "vocals"
        },
        {
          "name": "ENA☆",
          "role": "lyrics"
        },
        {
          "name": "横山克",
          "role": "composition"
        },
        {
          "name": "横山克",
          "role": "arrangement"
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
            "https://ena0415.com/works"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://note.com/ena_note0415/n/nf04b897ddd00"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ena0415.com/works"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://note.com/ena_note0415/n/nf04b897ddd00"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/fruitsbasket-r2-2/ep/7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.mau2.com/anime/fruitsbasket-r2-2/ep/7"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-2"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://note.com/ena_note0415/n/nf04b897ddd00"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "原用途保同一ID與序號；直接官方本曲插曲及逐話交叉支持用途更正，無新歌曲或錄音。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "Eden",
      "artistDisplayName": "MONKEY MAJIK",
      "id": "fruits-basket-2nd-season-ed-3",
      "songId": "fruits-basket-2nd-season-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "《魔法水果籃 第二季》第一方歌曲資料：曲名與演唱者",
          "url": "https://fruba.jp/blu-ray_dvd_cd/?season=2",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/fruits_basket_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://fruba.jp/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.tms-e.co.jp/alltitles/2020s/745102.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "MONKEY MAJIK",
          "role": "vocals"
        },
        {
          "name": "Maynard",
          "role": "lyrics"
        },
        {
          "name": "Blaise",
          "role": "lyrics"
        },
        {
          "name": "TAX",
          "role": "lyrics"
        },
        {
          "name": "Maynard",
          "role": "composition"
        },
        {
          "name": "Blaise",
          "role": "composition"
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
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-3"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-3-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "fruits-basket-2nd-season-ed-3"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.tms-e.co.jp/alltitles/2020s/745102.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "本期歌曲身分、用途與逐曲季度已核；未新增個別歌唱或音源版本。",
          "resumeWhen": "待同曲直接音源/發行細項證據再補，不由既有影片推新錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.tv-tokyo.co.jp/anime/fruba2/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E6%B0%B4%E6%9E%9C%E7%B1%83",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 2,
  "broadcastTimeJst": "01:30",
  "seasonIds": [
    "2020-spring",
    "2020-summer"
  ]
}),
  spring2020Seed({
    anilistId: 112325,
    slug: "shadowverse",
    startDate: "2020-04-07",
    titleJa: "シャドウバース",
    titleZhHant: "闇影詩章",
    titleRomaji: "Shadowverse",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112325-NXi6RerKkbi6.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112325-CWJosUmhchU4.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://anime.shadowverse.jp/archive/1st/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/437",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/shadowverse",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "キリフダ",
        artistDisplayName: "PENGUIN RESEARCH",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "新世界",
        artistDisplayName: "FLOW",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ハピネス*センセ－ション",
        artistDisplayName: "小倉唯",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "心誰にも",
        artistDisplayName: "ゲーム実況者わくわくバンド",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116408,
    slug: "anoyo-no-subete-wa-obakegumi",
    startDate: "2020-04-07",
    titleJa: "あの世のすべては, おばけぐみっ!",
    titleZhHant: "那個世界全部都是妖怪！",
    titleRomaji: "Anoyo no Subete wa, Obakegumi!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b116408-OXGNh2Ii3Wi0.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.stellapro.co.jp/waresyo3.html",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/38",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "忍",
        artistDisplayName: "ZIPANG",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ミネルバ",
        artistDisplayName: "sanaco",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 117325,
    slug: "puso-ni-comi-okawari",
    startDate: "2020-04-07",
    titleJa: "ぷそ煮コミおかわり",
    titleZhHant: "ぷそ煮コミおかわり",
    titleRomaji: "Puso Ni Comi: Okawari",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117325-f1ijlg6Ow73I.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/117325-n2oEKX5VEFB1.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://pso2.jp/players/campaign/pusoni_anime2/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2726",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "煮コ☆ミュニケーション",
        artistDisplayName: "あまね＋ビートまりお（COOL&CREATE）",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "煮コ☆ミュニケーション（みたらし＆テトラ ver.）",
        artistDisplayName: "みたらし（CV：田辺留依）＆テトラ（CV：引坂理絵）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 115892,
    slug: "komatta-jiisan",
    startDate: "2020-04-08",
    titleJa: "困ったじいさん",
    titleZhHant: "困擾爺爺",
    titleRomaji: "Komatta Jii-san",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b115892-0fiyi2el7DrM.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115892-9T99iSUq34oo.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.bs4.jp/komatta-jiisan/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/68",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "じいさんのラブラブ♡スキャット",
        artistDisplayName: "じいさん（CV：日野聡）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116791,
    slug: "neko-neko-nihonshi-5",
    startDate: "2020-04-08",
    titleJa: "ねこねこ日本史 第5シリーズ",
    titleZhHant: "喵的咧～貓咪戲說日本史 第五季",
    titleRomaji: "Neko Neko Nihonshi 5th Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116791-T92IxbomsJsf.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://neco-neco.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2261",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ぐるぐる",
        artistDisplayName: "Girls²",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "ジャパニーズSTAR",
        artistDisplayName: "Girls²",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ねこじゃらそーかけるまほうひみこ",
        artistDisplayName: "近藤利樹 feat.ASOBOiSM",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ねこねこ日本史おぼえ歌〜全時代丸分かり♪〜",
        artistDisplayName: "Girls²",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114233,
    slug: "gundam-build-divers-rerise-2",
    startDate: "2020-04-09",
    titleJa: "ガンダムビルドダイバーズRe:RISE 2nd Season",
    titleZhHant: "鋼彈創鬥者 潛網大戰 Re:RISE 第二季",
    titleRomaji: "Gundam Build Divers Re:RISE 2nd Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114233-FUlAGLqFOVrT.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.sunrise-inc.co.jp/work/detail.php?cid=446",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/145",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/gundam_build_divers_rerise_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "HATENA",
        artistDisplayName: "PENGUIN RESEARCH",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Twinkle",
        artistDisplayName: "スピラ・スピカ",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ハートフル",
        artistDisplayName: "スピラ・スピカ",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "リライズ",
        artistDisplayName: "スピラ・スピカ",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112444,
    slug: "appare-ranman",
    startDate: "2020-04-10",
    titleJa: "天晴爛漫！",
    titleZhHant: "天晴爛漫！",
    titleRomaji: "Appare-Ranman!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112444-S7bhKskrAqSI.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112444-jl2dffsH64I7.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://appareranman.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/304",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/appare_ranman",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "I got it!",
        artistDisplayName: "Mia REGINA",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "I'm Nobody",
        artistDisplayName: "森久保祥太郎",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112534,
    slug: "mashin-eiyuuden-wataru-shichikon-no-ryuujinmaru",
    startDate: "2020-04-10",
    titleJa: "魔神英雄伝ワタル 七魂の龍神丸",
    titleZhHant: "魔神英雄傳 七魂的龍神丸",
    titleRomaji: "Mashin Eiyuuden Wataru: Shichi Kon no Ryuujinmaru",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112534-mS6QUAeU21vO.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://tamashii.jp/special/wataru/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/163",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "STEP",
        artistDisplayName: "a・chi-a・chi",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "Fight!",
        artistDisplayName: "高橋由美子",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "a・chi-a・chiアドベンチャー",
        artistDisplayName: "a・chi-a・chi",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "君に止まらない〜MY GIRL, MY LOVE",
        artistDisplayName: "高橋由美子",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114888,
    slug: "fugou-keiji-balance-unlimited",
    startDate: "2020-04-10",
    titleJa: "富豪刑事 Balance:UNLIMITED",
    titleZhHant: "富豪刑警 Balance: UNLIMITED",
    titleRomaji: "Fugou Keiji: Balance:UNLIMITED",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114888-lgecUF3O1AWS.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114888-YVXJvMnuWCDb.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.fugoukeiji-bul.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/113",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/fugou_keiji_balanceunlimited",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "NAVIGATOR",
        artistDisplayName: "SixTONES",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Welcome My Friend",
        artistDisplayName: "OKAMOTO'S",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114891,
    slug: "zashiki-warashi-no-tatami-chan",
    startDate: "2020-04-10",
    titleJa: "ざしきわらしのタタミちゃん",
    titleZhHant: "座敷童子塌塌米醬",
    titleRomaji: "Zashiki-Warashi no Tatami-chan",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114891-XMuVHEbi68mJ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://tatamichan.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/270",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/zashiki_warashi_no_tatami_chan",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "CATCH YOUR SWEET MIND",
        artistDisplayName: "ORESAMA",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112641,
    slug: "kaguya-sama-wa-kokurasetai-2",
    startDate: "2020-04-11",
    titleJa: "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
    titleZhHant: "輝夜姬想讓人告白？～天才們的戀愛頭腦戰～ 第二季",
    titleRomaji: "Kaguya-sama wa Kokurasetai?: Tensaitachi no Renai Zunousen",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112641-zoGC8d6FaPXU.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112641-mKZe0zng0ndV.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://kaguya.love/2nd/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/49",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/kaguya_sama_wa_kokurasetai_tensai_tachi_no_renai_zunousen_2020",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "DADDY! DADDY! DO! feat.鈴木愛理",
        artistDisplayName: "鈴木雅之",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "風に吹かれて",
        artistDisplayName: "福原遥",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113051,
    slug: "argonavis-from-bang-dream",
    startDate: "2020-04-11",
    titleJa: "アルゴナビス from BanG Dream!",
    titleZhHant: "ARGONAVIS from BanG Dream！",
    titleRomaji: "ARGONAVIS from BanG Dream!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113051-R2V4aqfv0pau.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113051-O0OIEfTcXrQY.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://bushiroad.com/media/11496",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/428",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/argonavis_from_bang_dream",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "星がはじまる",
        artistDisplayName: "Argonavis",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "SCATTER",
        artistDisplayName: "GYROAXIA",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "雨上がりの坂道",
        artistDisplayName: "Argonavis",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ゴールライン",
        artistDisplayName: "Argonavis",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "LIAR",
        artistDisplayName: "GYROAXIA",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114043,
    slug: "shokugeki-no-souma-gou-no-sara",
    startDate: "2020-04-11",
    titleJa: "食戟のソーマ 豪ノ皿",
    titleZhHant: "食戟之靈 第五季：豪之皿",
    titleRomaji: "Shokugeki no Souma: Gou no Sara",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114043-QkgiycojrojN.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114043-5RRtoLPrzQ0P.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.lantis.jp/title/shokugeki/disco_all.html",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/74",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/shokugeki_no_souma_gou_no_sara",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ラストチャプター",
        artistDisplayName: "nano.RIPE",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Crossing Road",
        artistDisplayName: "渕上舞",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114402,
    slug: "hakushon-daimaou-2020",
    startDate: "2020-04-11",
    titleJa: "ハクション大魔王2020",
    titleZhHant: "噴嚏大魔王2020",
    titleRomaji: "Hakushon Daimaou 2020",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114402-1PtmZciRzBqD.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.ytv.co.jp/hakushon2020/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/140",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/hakushon_daimaou",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "サテスハクション",
        artistDisplayName: "奥田民生",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "あくびをすれば",
        artistDisplayName: "フレンズ",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "フレフレ",
        artistDisplayName: "中川翔子",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 108629,
    slug: "kitsutsuki-tantei-dokoro",
    startDate: "2020-04-13",
    titleJa: "啄木鳥探偵處",
    titleZhHant: "啄木鳥偵探社",
    titleRomaji: "Kitsutsuki Tantei Dokoro",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108629-KZRQimMl3eGN.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108629-FOCCY5WmkVzh.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://kimikoe.com/kitsutsuki/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/58",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/kitsutsuki_tanteidokoro",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "本日モ誠ニ晴天也",
        artistDisplayName: "古川慎",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ゴンドラの唄",
        artistDisplayName:
          "NOW ON AIR (飯野美紗子、片平美那、岩淵桃音、神戸光歩、鈴木陽斗実、田中有紀)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116320,
    slug: "tv-yarou-nanaana-kaibutsu-kraken-wo-oe",
    startDate: "2020-04-16",
    titleJa: "テレビ野郎 ナナーナ 怪物クラーケンを追え！",
    titleZhHant: "香蕉怪大叔 吶吶～吶 北海妖怪追追追！",
    titleRomaji: "TV Yarou Nanaana: Kaibutsu Kraken wo Oe!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116320-UTTrMFuyP8GC.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/nana-na/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/86",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [],
  }),
  spring2020Seed({
    anilistId: 115186,
    slug: "bessatsu-olympia-kyklos",
    startDate: "2020-04-20",
    titleJa: "別冊オリンピア・キュクロス",
    titleZhHant: "別冊奧林匹克之環",
    titleRomaji: "Bessatsu Olympia Kyklos",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115186-WZrskMhidMgg.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115186-wZCv5CzSrQiZ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://bessatsu-olympia-kyklos.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/150",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/olympia_kyklos",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ウィリアム・テル序曲",
        artistDisplayName: "片桐仁 & 林彰人",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "君はヘレネス",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ZE.N.RA",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "男のアレーテー",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "始まりはいつもゼウス",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "涙のエーゲ海",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "今夜はシンポジオン",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "スイート・オリンピア",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "エンドレスサマー",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 9,
        titleJa: "立てろ！トロパイオン",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 10,
        titleJa: "スパルタ人こわい",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 11,
        titleJa: "国外では別の顔",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 12,
        titleJa: "さよならスパルタ",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 13,
        titleJa: "LADY discrimination",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 14,
        titleJa: "君は何スロン",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 15,
        titleJa: "夢のマーケット",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 16,
        titleJa: "ずるい皇帝（ひと）",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 17,
        titleJa: "君のペッソイ",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 18,
        titleJa: "哲学者の食卓",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 19,
        titleJa: "ヘルマ！ヘルマ！ヘルマ！",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 20,
        titleJa: "BURNING FIRE",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 21,
        titleJa: "村人A",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 22,
        titleJa: "君の白い嘘",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 23,
        titleJa: "サヨナラの折に…",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 24,
        titleJa: "東京トリンピック音頭",
        artistDisplayName: "林彰人",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 106154,
    slug: "koukaku-kidoutai-sac-2045",
    startDate: "2020-04-23",
    titleJa: "攻殻機動隊 SAC_2045",
    titleZhHant: "攻殼機動隊：SAC_2045",
    titleRomaji: "Koukaku Kidoutai: SAC_2045",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106154-14XxxKUUwh13.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106154-JDhZHkfHVsMK.jpg",
    broadcastLabel: "全球網絡首播",
    officialSiteUrl: "https://www.ghostintheshell-sac2045.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/57",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/ghost_in_the_shell_sac_2045",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Fly with me",
        artistDisplayName: "millennium parade × ghost in the shell: SAC_2045",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "sustain++;",
        artistDisplayName: "Mili",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 124341,
    slug: "arad-gyakuten-no-wa",
    startDate: "2020-04-23",
    titleJa: "アラド：逆転の輪",
    titleZhHant: "阿拉德：逆轉之輪",
    titleRomaji: "Arad: Gyakuten no Wa",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124341-HFlKVdhZ9lDS.png",
    broadcastLabel: "海外先行公開／日本其後播出",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/arad_gia/",
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/202004/"],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ORATIO",
        artistDisplayName: "新田恵海",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "朝焼けアプローチ",
        artistDisplayName: "Prima Porta",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113906,
    slug: "bang-dream-garupa-pico-oomori",
    startDate: "2020-05-07",
    titleJa: "BanG Dream! ガルパ☆ピコ~大盛り~",
    titleZhHant: "BanG Dream！迷你少女樂團派對★PICO 第二季：大碗公",
    titleRomaji: "BanG Dream! Garupa☆Pico: Oomori",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113906-XWfukSUYMS5K.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113906-dW6ib2eJYPzu.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://bushiroad.com/media/11056",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/414",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/bang_dream_garupapico_oomori",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "大盛り一丁！ガルパ☆ピコ",
        artistDisplayName:
          "戸山香澄（CV：愛美）×美竹蘭（CV：佐倉綾音）×丸山彩（CV：前島亜美）×湊友希那（CV：相羽あいな）×弦巻こころ（CV：伊藤美来）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 115656,
    slug: "cardfight-vanguard-gaiden-if",
    startDate: "2020-05-30",
    titleJa: "カードファイト!! ヴァンガード外伝 イフ-if-",
    titleZhHant: "卡片戰鬥!! 先導者 外傳 -if-",
    titleRomaji: "Cardfight!! Vanguard Gaiden: if",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115656-Dt4eRb2enm3p.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115656-tNhjPXB3FYfa.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.bs-tvtokyo.co.jp/cf-vanguard-if/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/147",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/cardfight_vanguard_gaiden_if",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "What-if Wonderland!!",
        artistDisplayName: "Argonavis",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Gonna be right",
        artistDisplayName:
          "Peaky P-key [山手響子 (CV.愛美)、犬寄しのぶ (CV.高木美佑)、笹子・ジェニファー・由香 (CV.小泉萌香)、清水絵空 (CV.倉知玲鳳)]",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Horizontal Oath",
        artistDisplayName:
          "燐舞曲 [青柳椿 (CV.加藤里保菜)、月見山渚 (CV.大塚紗英)、矢野緋彩 (CV.もものはるな)、三宅葵依 (CV.つんこ)]",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 110349,
    slug: "great-pretender",
    startDate: "2020-06-02",
    titleJa: "GREAT PRETENDER",
    titleZhHant: "GREAT PRETENDER 大欺詐師",
    titleRomaji: "GREAT PRETENDER",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110349-59hhZ9CNHVdk.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110349-bGG1E4uunLoq.jpg",
    broadcastLabel: "全球網絡首播",
    officialSiteUrl: "https://www.greatpretender.jp/",
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/202004/"],
    animeThemesUrl: "https://animethemes.moe/anime/great_pretender",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "G.P.",
        artistDisplayName: "やまだ豊",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "The Great Pretender",
        artistDisplayName: "Freddie Mercury",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 108522,
    slug: "baki-dai-raitaisai-hen",
    startDate: "2020-06-04",
    titleJa: "バキ 大擂台賽編",
    titleZhHant: "刃牙 大擂賽篇",
    titleRomaji: "Baki: Dai Raitaisai-hen",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108522-XQmYISWCnTGg.jpg",
    broadcastLabel: "全球網絡首播",
    officialSiteUrl: "https://baki-anime.jp/2nd/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/184",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/baki_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "情熱は覚えている",
        artistDisplayName: "GRANRODEO",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "DEAD STROKE",
        artistDisplayName: "藤田恵名",
      },
    ],
  }),
];

export const curated2020SpringSeeds: CuratedAnimeSeed[] =
  curated2020SpringSeedRows;

export const curated2020SpringAnimeIds = [...curated2020SpringSeeds.map(
  ({ anilistId }) => anilistId,
), 8687, 966, 6149];
