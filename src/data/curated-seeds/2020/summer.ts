import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

type Summer2020SeedInput = Omit<
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

function summer2020Seed(row: Summer2020SeedInput): CuratedAnimeSeed {
  const anilistUrl = `https://anilist.co/anime/${row.anilistId}`;
  const weekday = new Date(`${row.startDate}T00:00:00Z`).getUTCDay();

  return {
    ...row,
    id: `curated-${row.anilistId}`,
    seasonIds: row.seasonIds ?? ["2020-summer"],
    editorialWeekday: row.editorialWeekday ?? (weekday || 7),
    status: "finished",
    anilistUrl,
    imageSourceUrl: anilistUrl,
    imageSourceLabel: "AniList 公開媒體頁",
    wikipediaUrl,
    verifiedAt: "2026-09-02",
  };
}

const curated2020SummerSeedRows: CuratedAnimeSeed[] = [
  summer2020Seed({
    anilistId: 116259,
    slug: "obake-zukan-2020",
    startDate: "2020-07-01",
    titleJa: "おばけずかん",
    titleZhHant: "小妖怪",
    titleRomaji: "Obake Zukan",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116259-xm1SLrhBB3mg.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl:
      "https://www.shopro.co.jp/tv/obakezukan/1st_series/index.html",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/380",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "おばけずかんのうた ～いつでも どこでも～",
        titleRomaji: "Obake Zukan no Uta ~Itsudemo Dokodemo~",
        artistDisplayName: "ボーニャン（CV：水樹奈々）",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "おばけずかんのうた",
        titleRomaji: "Obake Zukan no Uta",
        artistDisplayName: "水樹奈々",
      },
    ],
  }),
  summer2020Seed({
  "anilistId": 104937,
  "slug": "lapis-relights",
  "startDate": "2020-07-04",
  "titleJa": "Lapis Re:LiGHTs（ラピスリライツ）",
  "titleZhHant": "Lapis Re:LiGHTs ～這個世界的偶像會用魔法～",
  "titleRomaji": "Lapis Re:LiGHTs",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104937-2TM6AffYAvxM.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104937-kZrHZnooNBNV.jpg",
  "broadcastLabel": "原期TOKYO MX／BS11 7月4日週六22:00；ABEMA同時配信、AT-X7月6日21:30分列，不混首TV。",
  "officialSiteUrl": "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/338",
    "https://acgsecrets.hk/bangumi/202007/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/lapis_relights",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "私たちのSTARTRAIL",
      "titleRomaji": "Watashi-tachi no STARTRAIL",
      "artistDisplayName": "ラピスリライツ・スターズ",
      "id": "lapis-relights-op-1",
      "songId": "lapis-relights-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "url": "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/lapis_relights",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ラピスリライツ公式チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=_qGD3hDAdS0",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ラピスリライツ・スターズ",
          "role": "vocals"
        },
        {
          "name": "松原さらり",
          "role": "lyrics"
        },
        {
          "name": "南田健吾",
          "role": "composition"
        },
        {
          "name": "南田健吾",
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
            "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-op-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html"
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
          "note": "原期片頭／片尾用途、原名與正式團體名義已核，確認2020夏；同頁創作資料逐職位保存。",
          "resumeWhen": "待本曲可直接核對音源、發行品與平台資料時補充，不由團員名單推逐人實唱。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "プラネタリウム",
      "titleRomaji": "Planetarium",
      "artistDisplayName": "LiGHTs",
      "id": "lapis-relights-ed-1",
      "songId": "lapis-relights-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "url": "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/lapis_relights",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ラピスリライツ公式チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=MKoh5jdNiGU",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "LiGHTs",
          "role": "vocals"
        },
        {
          "name": "秋浦智裕",
          "role": "lyrics"
        },
        {
          "name": "秋浦智裕",
          "role": "composition"
        },
        {
          "name": "秋浦智裕",
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
            "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-1"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html"
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
          "note": "原期片頭／片尾用途、原名與正式團體名義已核，確認2020夏；同頁創作資料逐職位保存。",
          "resumeWhen": "待本曲可直接核對音源、發行品與平台資料時補充，不由團員名單推逐人實唱。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "Midnight Sapphire",
      "artistDisplayName": "IV KLORE",
      "id": "lapis-relights-ed-2",
      "songId": "lapis-relights-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/lapis_relights",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ラピスリライツ公式チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=lCMPUzgiETI",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.klab.com/jp/press/release/2020/0811/post_6.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "IV KLORE",
          "role": "vocals"
        },
        {
          "name": "石川絵理",
          "role": "lyrics"
        },
        {
          "name": "小高光太郎",
          "role": "composition"
        },
        {
          "name": "UiNA",
          "role": "composition"
        },
        {
          "name": "小高光太郎",
          "role": "arrangement"
        },
        {
          "name": "石倉誉之",
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
            "https://www.klab.com/jp/press/release/2020/0811/post_6.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-2-song"
        },
        {
          "target": "credits",
          "fields": [
            "credits"
          ],
          "sourceUrls": [
            "https://www.klab.com/jp/press/release/2020/0811/post_6.html"
          ],
          "verifiedAt": "2026-10-24"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters"
          ],
          "note": "歌曲原名已核，原期特殊片尾用途仍待第一方直接資料；現有名義保留，不以MV或演唱會推用途。",
          "resumeWhen": "待官方逐話片尾credit直接明Midnight Sapphire為第6話ED後恢復用途季度；現有動畫公開及MV文字不足。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "私の名は、光。",
      "titleRomaji": "Watashi no Na wa, Hikari.",
      "artistDisplayName": "LiGHTs",
      "id": "lapis-relights-ed-3",
      "songId": "lapis-relights-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/lapis_relights",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ラピスリライツ公式チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=2pm28PVSYBc",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.klab.com/jp/blog/pr/2022/post-13.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "LiGHTs",
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
            "https://www.klab.com/jp/blog/pr/2022/post-13.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-3-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters"
          ],
          "note": "歌曲原名已核，原期特殊片尾用途仍待第一方直接資料；現有名義保留，不以MV或演唱會推用途。",
          "resumeWhen": "待原期第10話官方片尾credit明本曲ED與正式名義後恢復；中文交叉題名有誤植，不授原名。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 4,
      "titleJa": "A.R.I.A",
      "artistDisplayName": "LiGHTs",
      "id": "lapis-relights-ed-4",
      "songId": "lapis-relights-ed-4-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/lapis_relights",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ラピスリライツ公式チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=NiSF9gP6cpQ",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://www.klab.com/jp/press/release/2021/0907/ar1st.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "LiGHTs",
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
            "https://www.klab.com/jp/press/release/2021/0907/ar1st.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-4-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "lapis-relights-ed-4-song"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "use_quarters"
          ],
          "note": "歌曲原名已核，原期特殊片尾用途仍待第一方直接資料；現有名義保留，不以MV或演唱會推用途。",
          "resumeWhen": "待原期第12話官方片尾credit或逐曲CD資料明A.R.I.A正式名義及ED；演唱會曲目只授題名，不推TV錄音。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.klab.com/jp/press/release/2020/0811/post_6.html",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/Lapis_Re%3ALights_%EF%BD%9E%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C%E7%9A%84%E5%81%B6%E5%83%8F%E6%9C%83%E7%94%A8%E9%AD%94%E6%B3%95%EF%BD%9E",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "22:00",
  "seasonIds": [
    "2020-summer"
  ]
}),
  summer2020Seed({
  "anilistId": 112301,
  "slug": "maou-gakuin-no-futekigousha",
  "startDate": "2020-07-04",
  "titleJa": "魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～",
  "titleZhHant": "魔王學院的不適任者～史上最強的魔王始祖，轉生就讀子孫們的學校～",
  "titleRomaji": "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112301-f88Fs2es4pSr.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112301-e50SRjhGDGUu.jpg",
  "broadcastLabel": "2020年7月4日23:30 TOKYO MX等原期首播",
  "officialSiteUrl": "https://maohgakuin.com/1st/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/52",
    "https://acgsecrets.hk/bangumi/202007/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/maou_gakuin_no_futekigousha_shijou_saikyou_no_maou_no_shiso_tensei_shite_shison_tachi_no_gakkou_e",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "正解不正解",
      "titleRomaji": "Seikai Fuseikai",
      "artistDisplayName": "CIVILIAN",
      "id": "maou-gakuin-no-futekigousha-op-1",
      "songId": "maou-gakuin-no-futekigousha-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://maohgakuin.com/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/maou_gakuin_no_futekigousha_shijou_saikyou_no_maou_no_shiso_tensei_shite_shison_tachi_no_gakkou_e",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "CIVILIAN official 官方影片",
          "url": "https://www.youtube.com/watch?v=QvBAOfmpAzY",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://maohgakuin.com/1st/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "CIVILIAN",
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
            "https://maohgakuin.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://maohgakuin.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-1"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "正解不正解 feat.アノス・ヴォルディゴード",
      "titleRomaji": "Seikai Fuseikai",
      "artistDisplayName": "CIVILIAN feat. アノス・ヴォルディゴード（CV：鈴木達央）",
      "id": "maou-gakuin-no-futekigousha-op-2",
      "songId": "maou-gakuin-no-futekigousha-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://maohgakuin.com/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/maou_gakuin_no_futekigousha_shijou_saikyou_no_maou_no_shiso_tensei_shite_shison_tachi_no_gakkou_e",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://maohgakuin.com/1st/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://maohgakuin.com/1st/news/?id=54650",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "CIVILIAN feat. アノス・ヴォルディゴード（CV：鈴木達央）",
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
            "https://maohgakuin.com/1st/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-2-song"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://maohgakuin.com/1st/news/?id=54650"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://maohgakuin.com/1st/news/?id=54650"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-2"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-op-2"
        }
      ],
      "followUp": [
        {
          "fields": [
            "basic_evidence",
            "lyrics",
            "composition",
            "arrangement",
            "recordings",
            "releases",
            "platform_links"
          ],
          "note": "官方明角色版本曲名、第4話片頭及角色主唱；現有完整演唱名義仍待逐曲署名確認。",
          "resumeWhen": "待原期版本單獨署名明確列完整演唱名義，再核現有CIVILIAN feat.角色的寫法；不以主唱敘述代完整名單。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "ハミダシモノ",
      "titleRomaji": "Hamidashimono",
      "artistDisplayName": "楠木ともり",
      "id": "maou-gakuin-no-futekigousha-ed-1",
      "songId": "maou-gakuin-no-futekigousha-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://maohgakuin.com/1st/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/maou_gakuin_no_futekigousha_shijou_saikyou_no_maou_no_shiso_tensei_shite_shison_tachi_no_gakkou_e",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "楠木ともり Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=UNxVF1d_Tes",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://maohgakuin.com/1st/music/?page=ed",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "楠木ともり",
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
            "https://maohgakuin.com/1st/music/?page=ed"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://maohgakuin.com/1st/music/?page=ed"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "maou-gakuin-no-futekigousha-ed-1-song"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://maohgakuin.com/1st/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://ja.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%A6%E9%99%A2%E3%81%AE%E4%B8%8D%E9%81%A9%E5%90%88%E8%80%85",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E7%8E%8B%E5%AD%B8%E9%99%A2%E7%9A%84%E4%B8%8D%E9%81%A9%E4%BB%BB%E8%80%85",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "23:30",
  "seasonIds": [
    "2020-summer"
  ]
}),
  summer2020Seed({
  "anilistId": 112818,
  "slug": "dokyuu-hentai-hxeros",
  "startDate": "2020-07-04",
  "titleJa": "ド級編隊エグゼロス",
  "titleZhHant": "弩級戰隊 HXEROS",
  "titleRomaji": "Dokyuu Hentai HxEros",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112818-9sOdhLPYX3eL.jpg",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112818-l9jhlxOIv2kQ.jpg",
  "broadcastLabel": "2020年7月3日24:00 TOKYO MX等；實曆7月4日00:00",
  "officialSiteUrl": "https://hxeros.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/379",
    "https://acgsecrets.hk/bangumi/202007/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/dokyuu_hentai_hxeros",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Wake Up H×ERO! feat.炎城烈人",
      "artistDisplayName": "HXEROS SYNDROMES feat. 炎城烈人（CV：松岡禎丞）",
      "id": "dokyuu-hentai-hxeros-op-1",
      "songId": "dokyuu-hentai-hxeros-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "url": "https://hxeros.com/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/dokyuu_hentai_hxeros",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "BURNOUT SYNDROMES Official YouTube Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=mHb0c5uE3Lw",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://hxeros.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E3%83%89%E7%B4%9A%E7%B7%A8%E9%9A%8A%E3%82%A8%E3%82%B0%E3%82%BC%E3%83%AD%E3%82%B9",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%BC%A9%E7%B4%9A%E6%88%B0%E9%9A%8AHXEROS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "HXEROS SYNDROMES feat. 炎城烈人（CV：松岡禎丞）",
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
            "https://hxeros.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://hxeros.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%89%E7%B4%9A%E7%B7%A8%E9%9A%8A%E3%82%A8%E3%82%B0%E3%82%BC%E3%83%AD%E3%82%B9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%89%E7%B4%9A%E7%B7%A8%E9%9A%8A%E3%82%A8%E3%82%B0%E3%82%BC%E3%83%AD%E3%82%B9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%BC%A9%E7%B4%9A%E6%88%B0%E9%9A%8AHXEROS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%BC%A9%E7%B4%9A%E6%88%B0%E9%9A%8AHXEROS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-op-1"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "Lost emotion",
      "artistDisplayName": "星乃雲母（CV：加隈亜衣）",
      "id": "dokyuu-hentai-hxeros-ed-1",
      "songId": "dokyuu-hentai-hxeros-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "url": "https://hxeros.com/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/dokyuu_hentai_hxeros",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "アニプレックス チャンネル 官方影片",
          "url": "https://www.youtube.com/watch?v=1VlpZrAzV20",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://hxeros.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E3%83%89%E7%B4%9A%E7%B7%A8%E9%9A%8A%E3%82%A8%E3%82%B0%E3%82%BC%E3%83%AD%E3%82%B9",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E5%BC%A9%E7%B4%9A%E6%88%B0%E9%9A%8AHXEROS",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "星乃雲母（CV：加隈亜衣）",
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
            "https://hxeros.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://hxeros.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%89%E7%B4%9A%E7%B7%A8%E9%9A%8A%E3%82%A8%E3%82%B0%E3%82%BC%E3%83%AD%E3%82%B9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E3%83%89%E7%B4%9A%E7%B7%A8%E9%9A%8A%E3%82%A8%E3%82%B0%E3%82%BC%E3%83%AD%E3%82%B9"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%BC%A9%E7%B4%9A%E6%88%B0%E9%9A%8AHXEROS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E5%BC%A9%E7%B4%9A%E6%88%B0%E9%9A%8AHXEROS"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "dokyuu-hentai-hxeros-ed-1"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://hxeros.com/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://ja.wikipedia.org/wiki/%E3%83%89%E7%B4%9A%E7%B7%A8%E9%9A%8A%E3%82%A8%E3%82%B0%E3%82%BC%E3%83%AD%E3%82%B9",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E5%BC%A9%E7%B4%9A%E6%88%B0%E9%9A%8AHXEROS",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "00:00",
  "seasonIds": [
    "2020-summer"
  ]
}),
  summer2020Seed({
  "anilistId": 114236,
  "slug": "enen-no-shouboutai-ni-no-shou",
  "startDate": "2020-07-04",
  "titleJa": "炎炎ノ消防隊 弐ノ章",
  "titleZhHant": "炎炎消防隊 貳之章",
  "titleRomaji": "Enen no Shouboutai: Ni no Shou",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114236-wfQOWF0Ii3h2.png",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114236-6nbw38bHeXYQ.jpg",
  "broadcastLabel": "2020年7月3日25:55 MBS/TBS等；實曆7月4日01:55",
  "officialSiteUrl": "https://fireforce-anime.jp/season2/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/223",
    "https://acgsecrets.hk/bangumi/202007/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/enen_no_shouboutai_ni_no_shou",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "SPARK-AGAIN",
      "artistDisplayName": "Aimer",
      "id": "enen-no-shouboutai-ni-no-shou-op-1",
      "songId": "enen-no-shouboutai-ni-no-shou-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://fireforce-anime.jp/season2/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/enen_no_shouboutai_ni_no_shou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "炎炎ノ消防隊 官方影片",
          "url": "https://www.youtube.com/watch?v=5cAXZQgiw_k",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://fireforce-anime.jp/season2/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Aimer",
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
            "https://fireforce-anime.jp/season2/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://fireforce-anime.jp/season2/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-1"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "OP",
      "sequence": 2,
      "titleJa": "Torch of Liberty",
      "artistDisplayName": "KANA-BOON",
      "id": "enen-no-shouboutai-ni-no-shou-op-2",
      "songId": "enen-no-shouboutai-ni-no-shou-op-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://fireforce-anime.jp/season2/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/enen_no_shouboutai_ni_no_shou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "炎炎ノ消防隊 官方影片",
          "url": "https://www.youtube.com/watch?v=ZfFmJVHeQkY",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://fireforce-anime.jp/season2/music/2nd.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "KANA-BOON",
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
            "https://fireforce-anime.jp/season2/music/2nd.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://fireforce-anime.jp/season2/music/2nd.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-op-2"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "ID",
      "artistDisplayName": "サイダーガール",
      "id": "enen-no-shouboutai-ni-no-shou-ed-1",
      "songId": "enen-no-shouboutai-ni-no-shou-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://fireforce-anime.jp/season2/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/enen_no_shouboutai_ni_no_shou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "サイダーガール 官方影片",
          "url": "https://www.youtube.com/watch?v=Lavdgx5xHZg",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://fireforce-anime.jp/season2/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "サイダーガール",
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
            "https://fireforce-anime.jp/season2/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://fireforce-anime.jp/season2/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-1"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 2,
      "titleJa": "ディザイア",
      "artistDisplayName": "PELICAN FANCLUB",
      "id": "enen-no-shouboutai-ni-no-shou-ed-2",
      "songId": "enen-no-shouboutai-ni-no-shou-ed-2-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-fall"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://fireforce-anime.jp/season2/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/enen_no_shouboutai_ni_no_shou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "PELICAN FANCLUB OFFICIAL 官方影片",
          "url": "https://www.youtube.com/watch?v=K_Q0iY_jKBs",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://fireforce-anime.jp/season2/music/2nd.php",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "PELICAN FANCLUB",
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
            "https://fireforce-anime.jp/season2/music/2nd.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://fireforce-anime.jp/season2/music/2nd.php"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-2"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-2-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-2"
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
          "note": "已核對原曲名、正式名義及本期用途；逐人歌唱與創作未由團員或cast推定。",
          "resumeWhen": "待本曲第一方逐角色創作或歌唱署名與正版音源資料再補詳細。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 3,
      "titleJa": "インフェルノ",
      "artistDisplayName": "Mrs. GREEN APPLE",
      "id": "enen-no-shouboutai-ni-no-shou-ed-3",
      "songId": "enen-no-shouboutai-ni-no-shou-ed-3-song",
      "sourceMode": "explicit",
      "seasonIds": [],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://fireforce-anime.jp/season2/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/enen_no_shouboutai_ni_no_shou",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Mrs. GREEN APPLE 官方影片",
          "url": "https://www.youtube.com/watch?v=wfCcs0vLysk",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://fireforce-anime.jp/season1/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "Mrs. GREEN APPLE",
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
            "https://fireforce-anime.jp/season1/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-3-song"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "enen-no-shouboutai-ni-no-shou-ed-3-song"
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
          "note": "歌曲身分已核，弐ノ章最終話片尾分類尚缺第一方直接資料。",
          "resumeWhen": "待本期最終話官方片尾說明、原播出字幕資料或權利方明文列本曲為片尾，再核用途與季度。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://fireforce-anime.jp/season2/news/detail.php?d=200624_01",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://ja.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E3%83%8E%E6%B6%88%E9%98%B2%E9%9A%8A",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E7%82%8E%E7%82%8E%E6%B6%88%E9%98%B2%E9%9A%8A_%28%E5%8B%95%E7%95%AB%29",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 6,
  "broadcastTimeJst": "01:55",
  "seasonIds": [
    "2020-summer",
    "2020-fall"
  ]
}),
  summer2020Seed({
    anilistId: 112258,
    slug: "chou-futsuu-toshi-kashiwa-densetsu-r",
    startDate: "2020-07-06",
    titleJa: "超普通都市カシワ伝説R",
    titleZhHant: "超普通都市柏傳說R",
    titleRomaji: "Chou Futsuu Toshi Kashiwa Densetsu R",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112258-euCskvIy0fix.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://3rd.chofutsu.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/131",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "おかしーわ！",
        titleRomaji: "Okashii-wa!",
        artistDisplayName: "成海ひいな",
      },
    ],
  }),
  summer2020Seed({
  "anilistId": 116006,
  "slug": "the-god-of-high-school",
  "startDate": "2020-07-06",
  "titleJa": "THE GOD OF HIGH SCHOOL ゴッド・オブ・ハイスクール",
  "titleZhHant": "高校之神",
  "titleRomaji": "THE GOD OF HIGH SCHOOL",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116006-Wt8JSA1ZQxlM.png",
  "bannerUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/116006-e7ZL1RJnabp1.jpg",
  "broadcastLabel": "AT-X本期原首播7月6日23:30；TokyoMX7月6日24:00較晚，重播與配信分開。",
  "officialSiteUrl": "https://goh-anime.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/214",
    "https://acgsecrets.hk/bangumi/202007/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/the_god_of_high_school",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "Contradiction feat. Tyler Carter",
      "artistDisplayName": "KSUKE",
      "id": "the-god-of-high-school-op-1",
      "songId": "the-god-of-high-school-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://goh-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/the_god_of_high_school",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "KSUKE 官方影片",
          "url": "https://www.youtube.com/watch?v=pkw_Hl3qXCs",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://goh-anime.com/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AB%98%E6%A0%A1%E4%B9%8B%E7%A5%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/The_God_of_High_School",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "KSUKE",
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
            "https://goh-anime.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://goh-anime.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AB%98%E6%A0%A1%E4%B9%8B%E7%A5%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AB%98%E6%A0%A1%E4%B9%8B%E7%A5%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://en.wikipedia.org/wiki/The_God_of_High_School"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://en.wikipedia.org/wiki/The_God_of_High_School"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-op-1"
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
          "note": "本期正式曲名、歌唱名義與片頭／片尾用途及夏季已核；既有用途及影音保持。",
          "resumeWhen": "待本曲直接逐曲詞曲編、音源或發行資訊可讀時再補；不從一般團員、角色名冊推個別實唱。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "WIN",
      "artistDisplayName": "CIX",
      "id": "the-god-of-high-school-ed-1",
      "songId": "the-god-of-high-school-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "label": "動畫官方網站",
          "url": "https://goh-anime.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/the_god_of_high_school",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "CIX Official 官方影片",
          "url": "https://www.youtube.com/watch?v=rSHbV5010kw",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://goh-anime.com/music/ed.html",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AB%98%E6%A0%A1%E4%B9%8B%E7%A5%9E",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        },
        {
          "url": "https://en.wikipedia.org/wiki/The_God_of_High_School",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "en",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "CIX",
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
            "https://goh-anime.com/music/ed.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://goh-anime.com/music/ed.html"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AB%98%E6%A0%A1%E4%B9%8B%E7%A5%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AB%98%E6%A0%A1%E4%B9%8B%E7%A5%9E"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://en.wikipedia.org/wiki/The_God_of_High_School"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://en.wikipedia.org/wiki/The_God_of_High_School"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "the-god-of-high-school-ed-1"
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
          "note": "本期正式曲名、歌唱名義與片頭／片尾用途及夏季已核；既有用途及影音保持。",
          "resumeWhen": "待本曲直接逐曲詞曲編、音源或發行資訊可讀時再補；不從一般團員、角色名冊推個別實唱。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://goh-anime.com/onair/",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://en.wikipedia.org/wiki/The_God_of_High_School",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "en",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 1,
  "broadcastTimeJst": "23:30",
  "seasonIds": [
    "2020-summer"
  ]
}),
  summer2020Seed({
    anilistId: 108941,
    slug: "umayon",
    startDate: "2020-07-07",
    titleJa: "うまよん",
    titleZhHant: "賽馬娘四格",
    titleRomaji: "Umayon",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108941-QDNpgawkxytg.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://umamusume.jp/umayon/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/161",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/umayon",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "ぴょいっと♪はれるや！",
        titleRomaji: "Pyoitto♪Hallelujah!",
        artistDisplayName:
          "スペシャルウィーク（CV：和氣あず未）、グラスワンダー（CV：前田玲奈）、エルコンドルパサー（CV：髙橋ミナミ）、セイウンスカイ（CV：鬼頭明里）、キングヘイロー（CV：佐伯伊織）",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Ring Ring ダイアリー",
        titleRomaji: "Ring Ring Diary",
        artistDisplayName:
          "トウカイテイオー（CV：Machico）、シンボリルドルフ（CV：田所あずさ）、エアグルーヴ（CV：青木瑠璃子）、フジキセキ（CV：松井恵理子）、ヒシアマゾン（CV：巽悠衣子）",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "逃げ切りっ！Fallin' Love",
        titleRomaji: "Nigekiri! Fallin' Love",
        artistDisplayName:
          "サイレンススズカ（CV：高野麻里佳）、スマートファルコン（CV：大和田仁美）、ミホノブルボン（CV：長谷川育美）、マルゼンスキー（CV：Lynn）、アイネスフウジン（CV：嶺内ともみ）",
      },
    ],
  }),
  summer2020Seed({
  "anilistId": 110028,
  "slug": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2",
  "startDate": "2020-07-07",
  "titleJa": "ムヒョとロージーの魔法律相談事務所 2",
  "titleZhHant": "魔法律事務所 第二季",
  "titleRomaji": "Muhyo to Rouji no Mahouritsu Soudan Jimusho 2",
  "posterUrl": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110028-bosDZpze4Chn.png",
  "broadcastLabel": "Animax本期原首播7月7日19:00，其他台後播與重播另列。",
  "officialSiteUrl": "https://mahouritsu.com/",
  "sourceReferenceUrls": [
    "https://youranimes.tw/animes/23",
    "https://acgsecrets.hk/bangumi/202007/"
  ],
  "animeThemesUrl": "https://animethemes.moe/anime/muhyo_to_rouji_no_mahouritsu_soudan_jimusho_2nd_season",
  "themes": [
    {
      "type": "OP",
      "sequence": 1,
      "titleJa": "イノチノアカシ",
      "titleRomaji": "Inochi no Akashi",
      "artistDisplayName": "ZAQ",
      "id": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-op-1",
      "songId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-op-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "url": "https://mahouritsu.com/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/muhyo_to_rouji_no_mahouritsu_soudan_jimusho_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "ZAQ Official Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=Xa7vbqA_k2o",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://mahouritsu.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "ZAQ",
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
            "https://mahouritsu.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://mahouritsu.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-op-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-op-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-op-1"
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
          "note": "本期正式曲名、歌唱名義與片頭／片尾用途及夏季已核；既有用途及影音保持。",
          "resumeWhen": "待本曲直接逐曲詞曲編、音源或發行資訊可讀時再補；不從一般團員、角色名冊推個別實唱。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    },
    {
      "type": "ED",
      "sequence": 1,
      "titleJa": "Proud Days",
      "artistDisplayName": "NOW ON AIR",
      "id": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-ed-1",
      "songId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-ed-1-song",
      "sourceMode": "explicit",
      "seasonIds": [
        "2020-summer"
      ],
      "sources": [
        {
          "url": "https://mahouritsu.com/music/",
          "label": "第一方本曲資料；支持欄位依逐曲證據",
          "role": "first_party",
          "language": "ja",
          "verifiedAt": "2026-10-24"
        },
        {
          "label": "AnimeThemes",
          "url": "https://animethemes.moe/anime/muhyo_to_rouji_no_mahouritsu_soudan_jimusho_2nd_season",
          "language": "en",
          "role": "cross_check",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "Lantis Channel 官方影片",
          "url": "https://www.youtube.com/watch?v=pkQHV_45Bpk",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "label": "動畫官方網站",
          "url": "https://mahouritsu.com/",
          "language": "ja",
          "role": "first_party",
          "verifiedAt": "2026-09-02"
        },
        {
          "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80",
          "label": "本曲逐欄交叉資料；未明欄位不作證",
          "role": "cross_check",
          "language": "zh-Hant",
          "verifiedAt": "2026-10-24"
        }
      ],
      "credits": [
        {
          "name": "NOW ON AIR",
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
            "https://mahouritsu.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://mahouritsu.com/music/"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-ed-1"
        },
        {
          "target": "song",
          "fields": [
            "title",
            "artist"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-ed-1-song"
        },
        {
          "target": "anime_use",
          "fields": [
            "usage"
          ],
          "sourceUrls": [
            "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80"
          ],
          "verifiedAt": "2026-10-24",
          "targetId": "muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2-ed-1"
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
          "note": "本期正式曲名、歌唱名義與片頭／片尾用途及夏季已核；既有用途及影音保持。",
          "resumeWhen": "待本曲直接逐曲詞曲編、音源或發行資訊可讀時再補；不從一般團員、角色名冊推個別實唱。",
          "checkedAt": "2026-10-24"
        }
      ],
      "lastVerifiedAt": "2026-10-24"
    }
  ],
  "metadataVerifiedAt": "2026-09-02",
  "metadataSources": [
    {
      "url": "https://www.deen.co.jp/works-archives/muhyoroji",
      "label": "第一方原期TV播出日期資料；僅日期時分",
      "role": "first_party",
      "language": "ja",
      "verifiedAt": "2026-10-24"
    },
    {
      "url": "https://zh.wikipedia.org/wiki/%E9%AD%94%E6%B3%95%E5%BE%8B%E4%BA%8B%E5%8B%99%E6%89%80",
      "label": "原期TV播出日期交叉資料；僅日期時分",
      "role": "broadcast_cross_check",
      "language": "zh-Hant",
      "verifiedAt": "2026-10-24"
    }
  ],
  "editorialWeekday": 2,
  "broadcastTimeJst": "19:00",
  "seasonIds": [
    "2020-summer"
  ]
}),
  summer2020Seed({
    anilistId: 108632,
    slug: "re-zero-kara-hajimeru-isekai-seikatsu-2nd-season",
    startDate: "2020-07-08",
    titleJa: "Re:ゼロから始める異世界生活 2nd Season",
    titleZhHant: "Re：從零開始的異世界生活 第二季",
    titleRomaji: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108632-lQWnmw7XaNOK.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108632-yeLbrgPN4Oni.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://re-zero.com/tv/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/21",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/rezero_kara_hajimeru_isekai_seikatsu_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Realize",
        artistDisplayName: "鈴木このみ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Memento",
        artistDisplayName: "nonoc",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 110353,
    slug: "deca-dence",
    startDate: "2020-07-08",
    titleJa: "デカダンス",
    titleZhHant: "DECA-DENCE",
    titleRomaji: "Deca-Dence",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110353-XGYSsii7qJeK.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110353-ZKkmemQSFP7L.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://decadence-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/51",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/deca_dence",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Theater of Life",
        artistDisplayName: "鈴木このみ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "記憶の箱舟",
        titleRomaji: "Kioku no Hakobune",
        artistDisplayName: "伊東歌詞太郎",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 112357,
    slug: "nihon-chinbotsu-2020",
    startDate: "2020-07-09",
    titleJa: "日本沈没2020",
    titleZhHant: "日本沉沒2020",
    titleRomaji: "Nihon Chinbotsu: 2020",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112357-N03rYtjPxJtE.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112357-EYHpCNuYJXlZ.jpg",
    broadcastLabel: "Netflix 網絡首播",
    officialSiteUrl: "https://japansinks2020.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/186",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/nihon_chinbotsu_2020",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "a life",
        artistDisplayName: "大貫妙子＆坂本龍一",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "景色",
        titleRomaji: "Keshiki",
        artistDisplayName: "花譜",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 108489,
    slug: "yahari-ore-no-seishun-love-come-wa-machigatteiru-kan",
    startDate: "2020-07-10",
    titleJa: "やはり俺の青春ラブコメはまちがっている。完",
    titleZhHant: "果然我的青春戀愛喜劇搞錯了。完",
    titleRomaji: "Yahari Ore no Seishun Love Come wa Machigatteiru. Kan",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108489-yGmYCE6dhFta.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108489-z4DheppQdxo4.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tbs.co.jp/anime/oregairu/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/384",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/yahari_ore_no_seishun_love_comedy_wa_machigatteiru_kan",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "芽ぐみの雨",
        titleRomaji: "Megumi no Ame",
        artistDisplayName: "やなぎなぎ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ダイヤモンドの純度",
        titleRomaji: "Diamond no Jundo",
        artistDisplayName:
          "雪ノ下雪乃（CV：早見沙織）＆由比ヶ浜結衣（CV：東山奈央）",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ダイヤモンドの純度 ～Yui Ballade～",
        titleRomaji: "Diamond no Jundo ~Yui Ballade~",
        artistDisplayName: "由比ヶ浜結衣（CV：東山奈央）",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "ダイヤモンドの純度 ～Yukino Ballade～",
        titleRomaji: "Diamond no Jundo ~Yukino Ballade~",
        artistDisplayName: "雪ノ下雪乃（CV：早見沙織）",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "ユキトキ",
        titleRomaji: "Yukitoki",
        artistDisplayName: "やなぎなぎ",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 112803,
    slug: "no-guns-life-2",
    startDate: "2020-07-10",
    titleJa: "ノー・ガンズ・ライフ 2",
    titleZhHant: "NO GUNS LIFE 非槍人生 第二季",
    titleRomaji: "No Guns Life 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112803-GTBPrkKvlyV5.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112803-nY631RWlndb0.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl:
      "https://www.sonymusic.co.jp/artist/sawanohiroyukinzk/info/516505",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/130",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/no_guns_life_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Chaos Drifters",
        artistDisplayName: "SawanoHiroyuki[nZk]:Jean-Ken Johnny",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "new world",
        artistDisplayName: "THIS IS JAPAN",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 115113,
    slug: "uzaki-chan-wa-asobitai",
    startDate: "2020-07-10",
    titleJa: "宇崎ちゃんは遊びたい！",
    titleZhHant: "宇崎學妹想要玩！",
    titleRomaji: "Uzaki-chan wa Asobitai!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115113-bJDZV7kP0XrP.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115113-wIWyzBlDR5Kt.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://uzakichan.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/377",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/uzaki_chan_wa_asobitai",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "なだめスかし Negotiation",
        titleRomaji: "Nadame Sukashi Negotiation",
        artistDisplayName: "鹿乃と宇崎ちゃん（CV：大空直美）",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ココロノック",
        titleRomaji: "Kokoro Knock",
        artistDisplayName: "YuNi",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 111965,
    slug: "peter-grill-to-kenja-no-jikan",
    startDate: "2020-07-11",
    titleJa: "ピーターグリルと賢者の時間",
    titleZhHant: "彼得・格里爾的賢者時間",
    titleRomaji: "Peter Grill to Kenja no Jikan",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111965-iUYaDivDR4BG.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111965-i9aeO9gvuH8e.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://petergrill-anime.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/376",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/peter_grill_to_kenja_no_jikan",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "つらぬいて憂鬱",
        titleRomaji: "Tsuranuite Yuuutsu",
        artistDisplayName: "二ノ宮ゆい",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ヨリドコロ",
        titleRomaji: "Yoridokoro",
        artistDisplayName: "Hilcrhyme",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 113813,
    slug: "kanojo-okarishimasu",
    startDate: "2020-07-11",
    titleJa: "彼女、お借りします",
    titleZhHant: "出租女友",
    titleRomaji: "Kanojo, Okarishimasu",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113813-SnljeXpU3Pw7.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113813-Al8VofQuNQHV.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://kanokari-official.com/1st/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/271",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/kanojo_okarishimasu",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "センチメートル",
        titleRomaji: "Centimeter",
        artistDisplayName: "the peggies",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "告白バンジージャンプ",
        titleRomaji: "Kokuhaku Bungee Jump",
        artistDisplayName: "halca",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "FIRST DROP",
        artistDisplayName: "halca",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "センチメートル",
        titleRomaji: "Centimeter",
        artistDisplayName: "the peggies",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 117150,
    slug: "get-up-get-live-geragera",
    startDate: "2020-07-11",
    titleJa: "GET UP! GET LIVE! #げらげら",
    titleZhHant: "GET UP! GET LIVE! #GERA GERA",
    titleRomaji: "GET UP! GET LIVE! #Geragera",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117150-zw3TD0qTKwJv.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/117150-llKmXa7ucmR1.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.mbs.jp/getup_getlive/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/319",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    themes: [],
  }),
  summer2020Seed({
    anilistId: 113286,
    slug: "monster-musume-no-oisha-san",
    startDate: "2020-07-12",
    titleJa: "モンスター娘のお医者さん",
    titleZhHant: "魔物娘的醫生",
    titleRomaji: "Monster Musume no Oisha-san",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113286-AUS3PAJ5n6BU.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113286-IMxXxg80jnuX.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://mon-isha-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/375",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/monster_musume_no_oisha_san",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "カンパネラ響く空で",
        titleRomaji: "Campanella Hibiku Sora de",
        artistDisplayName: "ARCANA PROJECT",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "やさしさの名前",
        titleRomaji: "Yasashisa no Namae",
        artistDisplayName: "鈴木愛奈",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 114308,
    slug: "sword-art-online-alicization-war-of-underworld-part-2",
    startDate: "2020-07-12",
    titleJa:
      "ソードアート・オンライン アリシゼーション War of Underworld 最終章 (2nd Season)",
    titleZhHant: "刀劍神域 Alicization War of Underworld 最終章",
    titleRomaji: "Sword Art Online: Alicization - War of Underworld Part 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114308-8UBiS7U9buzu.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114308-VuYDoBJMbU1i.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://sao-alicization.net/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/204",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/sword_art_online_alicization_war_of_underworld_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ANIMA",
        artistDisplayName: "ReoNa",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "I will...",
        artistDisplayName: "藍井エイル",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 120180,
    slug: "ninja-collection",
    startDate: "2020-07-13",
    titleJa: "忍者コレクション",
    titleZhHant: "忍者收藏",
    titleRomaji: "Ninja Collection",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b120180-NSws10rGLbIZ.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/120180-F8lvQpsrIgNo.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/nin_colle/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/291",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/ninja_collection",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "忍び足でウンザウンザを踊る",
        titleRomaji: "Shinobiashi de Unzaunza wo Odoru",
        artistDisplayName: "バックドロップシンデレラ",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 110446,
    slug: "gibiate",
    startDate: "2020-07-15",
    titleJa: "ジビエート",
    titleZhHant: "GIBIATE 獵魔武士",
    titleRomaji: "Gibiate",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b110446-vqrjx22U4T9N.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110446-JSsP9M627xU9.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://gibiate.com/anime/jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/378",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/gibiate",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "GIBIATE",
        artistDisplayName: "吉田兄弟 feat. SUGIZO",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ENDLESS ～時を超えて～",
        titleRomaji: "ENDLESS ~Toki wo Koete~",
        artistDisplayName: "SUGIZO feat. 大黒摩季",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 122248,
    slug: "tadaima-chibigodzilla",
    startDate: "2020-07-15",
    titleJa: "ただいま！ちびゴジラ",
    titleZhHant: "小哥斯拉回家了！",
    titleRomaji: "Tadaima! Chibigodzilla",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b122248-8t1YvCNIj8mM.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/122248-G0PDvLJjhUVU.jpg",
    broadcastLabel: "日本網絡首播／短篇系列",
    officialSiteUrl: "https://tohoentertainmentonline.com/shop/brand/GS/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/1256",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    themes: [],
  }),
  summer2020Seed({
    anilistId: 110371,
    slug: "koi-to-producer-evol-love",
    startDate: "2020-07-16",
    titleJa: "恋とプロデューサー～EVOL×LOVE～",
    titleZhHant: "戀與製作人",
    titleRomaji: "Koi to Producer: EVOL×LOVE",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110371-iQC5FQ6FuTuX.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110371-u9vKhGyX8E77.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://koipro-anime.love/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2737",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/koi_to_producer_evollove",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "鈍色の夜明け",
        titleRomaji: "Nibi-iro no Yoake",
        artistDisplayName: "三浦祐太朗",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "舞い降りてきた雪",
        titleRomaji: "Maiorite Kita Yuki",
        artistDisplayName: "恋とプロデューサー featuring 鈴木このみ",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 119696,
    slug: "valkyrie-no-shokutaku-ii",
    startDate: "2020-07-17",
    titleJa: "戦乙女の食卓Ⅱ",
    titleZhHant: "女武神的餐桌II",
    titleRomaji: "Valkyrie no Shokutaku II",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx119696-JjixBLB2fgMj.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/119696-mVAmacREtSEl.jpg",
    broadcastLabel: "中國網絡首播／日本於 2021 年夏季播出",
    officialSiteUrl: "https://www.bs4.jp/valkyrie2/",
    sourceReferenceUrls: [
      "https://www.bs4.jp/valkyrie2/",
      "https://anilist.co/anime/119696",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "私の天命",
        titleRomaji: "Watashi no Tenmei",
        artistDisplayName:
          "ロザリア・アリーン（CV：古賀葵）、リリア・アリーン（CV：芹澤優）",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "あなたとの約束",
        titleRomaji: "Anata to no Yakusoku",
        artistDisplayName: "テレサ・アポカリプス（CV：田村ゆかり）",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 120046,
    slug: "ani-ni-tsukeru-kusuri-wa-nai-4",
    startDate: "2020-08-05",
    titleJa: "兄に付ける薬はない！4",
    titleZhHant: "快把我哥帶走 第4季",
    titleRomaji: "Ani ni Tsukeru Kusuri wa Nai! 4",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120046-YWcYUdha79t5.jpg",
    broadcastLabel: "中國網絡首播／日本於 2020 年秋季播出",
    officialSiteUrl: "https://anitsuke.com/",
    sourceReferenceUrls: [
      "https://fanworks.co.jp/news/anitsuke0902/",
      "https://anilist.co/anime/120046",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Come on youth",
        artistDisplayName: "王玥＆鶴森Mori",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 121684,
    slug: "kyoshin-to-hyouka-no-shiro",
    startDate: "2020-08-08",
    titleJa: "巨神と氷華の城",
    titleZhHant: "巨神與冰華之城",
    titleRomaji: "Kyoshin to Hyouka no Shiro",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx121684-VOEm4ipW5uoA.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/121684-ZzFDvvuRizcC.jpg",
    broadcastLabel: "日本網絡首播／短篇系列",
    officialSiteUrl: "https://www.ncctv.co.jp/minamishimabara/anime.html",
    sourceReferenceUrls: [
      "https://www.city.minamishimabara.lg.jp/kiji0038755/index.html",
      "https://anilist.co/anime/121684",
    ],
    themes: [],
  }),
  summer2020Seed({
    anilistId: 110857,
    slug: "aggressive-retsuko-season-3",
    startDate: "2020-08-27",
    titleJa: "アグレッシブ烈子 シーズン3",
    titleZhHant: "衝吧烈子 第三季",
    titleRomaji: "Aggressive Retsuko Season 3",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110857-hrnuyBLnnCDX.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110857-LiKgYrux52w7.jpg",
    broadcastLabel: "Netflix 網絡首播",
    officialSiteUrl: "https://www.netflix.com/tw/title/80198505",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/3061",
      "https://corporate.sanrio.co.jp/news/assets/pdf/2020/20220301124545498s.pdf",
    ],
    themes: [],
  }),
  summer2020Seed({
    anilistId: 114943,
    slug: "battle-spirits-kakumei-no-gallet",
    startDate: "2020-08-28",
    titleJa: "バトルスピリッツ 赫盟のガレット",
    titleZhHant: "Battle Spirits 赫盟的加雷特",
    titleRomaji: "Battle Spirits: Kakumei no Gallet",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114943-5arViLxJRtL7.jpg",
    broadcastLabel: "日本網絡首播／短篇系列",
    officialSiteUrl: "https://www.bn-pictures.co.jp/battlespirits/Gallet/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2874",
      "https://www.bn-pictures.co.jp/news/news_detail.html?id=18077",
    ],
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "BREAK THE CHAIN",
        artistDisplayName: "玉置成実",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 120325,
    slug: "fushigi-dagashiya-zenitendou",
    startDate: "2020-09-08",
    titleJa: "ふしぎ駄菓子屋 銭天堂",
    titleZhHant: "神奇柑仔店",
    titleRomaji: "Fushigi Dagashiya: Zenitendou",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120325-ubMgHRUT5dgJ.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.toei-anim.co.jp/tv/zenitendo/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/4940",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "奇想天外ふしぎをどうぞ",
        titleRomaji: "Kisoutengai Fushigi wo Douzo",
        artistDisplayName: "野田愛実",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "はにゃ○満点、銭天堂。",
        titleRomaji: "Hanya Manten, Zenitendou.",
        artistDisplayName: "KOCHO",
      },
    ],
  }),
  summer2020Seed({
    anilistId: 108356,
    slug: "dragons-dogma",
    startDate: "2020-09-17",
    titleJa: "ドラゴンズドグマ",
    titleZhHant: "龍族教義",
    titleRomaji: "Dragon’s Dogma",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108356-qxHmuNVZFRwJ.png",
    broadcastLabel: "Netflix 網絡首播",
    officialSiteUrl: "https://www.netflix.com/tw/title/80992784",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/37",
      "https://acgsecrets.hk/bangumi/202007/",
    ],
    themes: [],
  }),
];

export const curated2020SummerSeeds: CuratedAnimeSeed[] =
  curated2020SummerSeedRows;

export const curated2020SummerAnimeIds = [...curated2020SummerSeeds.map(
  ({ anilistId }) => anilistId,
), 8687, 966, 6149];
