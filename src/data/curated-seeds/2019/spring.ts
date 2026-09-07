import { getCuratedAnimeKey } from "@/data/curated-seeds/identity";
import type { CuratedAnimeSeed, CuratedCatalogueSeed, NativeCuratedAnimeSeed } from "@/data/curated-seeds/types";

type Spring2019SeedInput = Omit<
  CuratedAnimeSeed,
  | "id" | "seasonIds" | "editorialWeekday" | "status" | "anilistUrl"
  | "sourceReferenceUrls" | "verifiedAt"
> & Partial<Pick<CuratedAnimeSeed, "sourceReferenceUrls">>;

function spring2019Seed(row: Spring2019SeedInput): CuratedAnimeSeed {
  const weekday = new Date(`${row.startDate}T00:00:00Z`).getUTCDay();
  return {
    ...row,
    id: `curated-${row.anilistId}`,
    seasonIds: ["2019-spring"],
    editorialWeekday: weekday || 7,
    status: "finished",
    anilistUrl: `https://anilist.co/anime/${row.anilistId}`,
    wikipediaUrl: row.wikipediaUrl ?? "https://youranimes.tw/bangumi/201904",
    sourceReferenceUrls: row.sourceReferenceUrls ?? ["https://acgsecrets.hk/bangumi/201904/"],
    verifiedAt: "2026-09-07"
  };
}

const curated2019SpringSeedRows: Spring2019SeedInput[] = [
  {
    "anilistId": 108039,
    "slug": "gundam-the-origin-zenya-akai-suisei",
    "startDate": "2019-04-29",
    "titleJa": "機動戦士ガンダム THE ORIGIN 前夜 赤い彗星",
    "titleZhHant": "機動戰士鋼彈 THE ORIGIN 前夜 赤い彗星",
    "titleRomaji": "Kidou Senshi Gundam: THE ORIGIN - Zenya Akai Suisei",
    "officialSiteUrl": "https://www.gundam-the-origin.net/tv/",
    "wikipediaUrl": "https://youranimes.tw/animes/4690",
    "identifierSource": {
      "label": "動畫官方首集：2019 年 13 話電視重編版識別與首播日期",
      "url": "https://www.gundam-the-origin.net/tv/episodes01.html",
      "language": "ja"
    },
    "sourceReferenceUrls": [
      "https://uzurea.net/vc/187936/"
    ],
    "broadcastTimeJst": "00:35",
    "broadcastLabel": "NHK 綜合每週一 00:35（日本時間；2019 年 13 話電視重編版）",
    "themes": [
      {
        "type": "OP",
        "sequence": 1,
        "titleJa": "宇宙の詩 ～Higher and Higher～",
        "artistDisplayName": "LUNA SEA",
        "releaseDate": "2019-05-29",
        "versionLabel": "2019 年 TV 版 OP，CD 單曲版",
        "credits": []
      },
      {
        "type": "OP",
        "sequence": 2,
        "titleJa": "悲壮美",
        "artistDisplayName": "LUNA SEA",
        "releaseDate": "2019-05-29",
        "versionLabel": "2019 年 TV 版 OP，CD 單曲版",
        "credits": []
      },
      {
        "type": "OP",
        "sequence": 3,
        "titleJa": "BEYOND THE TIME ～メビウスの宇宙を越えて～",
        "artistDisplayName": "LUNA SEA",
        "releaseDate": "2019-09-06",
        "versionLabel": "LUNA SEA 翻唱版，數位配信",
        "credits": [
          {
            "name": "小室みつ子",
            "role": "lyrics"
          },
          {
            "name": "小室哲哉",
            "role": "composition"
          },
          {
            "name": "LUNA SEA",
            "role": "arrangement"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 1,
        "titleJa": "めぐりあい",
        "artistDisplayName": "SUGIZO feat. GLIM SPANKY",
        "releaseDate": "2019-06-11",
        "versionLabel": "2019 年翻唱版；完整版配信，串流另提供 TV Size",
        "credits": [
          {
            "name": "井荻麟",
            "role": "lyrics"
          },
          {
            "name": "売野雅勇",
            "role": "lyrics"
          },
          {
            "name": "井上大輔",
            "role": "composition"
          },
          {
            "name": "SUGIZO",
            "role": "arrangement"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 2,
        "titleJa": "水の星へ愛をこめて",
        "artistDisplayName": "SUGIZO feat. コムアイ（水曜日のカンパネラ）",
        "releaseDate": "2019-06-18",
        "versionLabel": "2019 年翻唱版；完整版配信，串流另提供 TV Size",
        "credits": [
          {
            "name": "コムアイ（水曜日のカンパネラ）",
            "role": "vocals"
          },
          {
            "name": "売野雅勇",
            "role": "lyrics"
          },
          {
            "name": "ニール・セダカ",
            "role": "composition"
          },
          {
            "name": "SUGIZO",
            "role": "arrangement"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 3,
        "titleJa": "A Red Ray",
        "artistDisplayName": "SUGIZO feat. miwa",
        "releaseDate": "2019-06-25",
        "versionLabel": "完整版配信，串流另提供 TV Size；另有第 12 話片尾畫面版本",
        "credits": [
          {
            "name": "miwa",
            "role": "vocals"
          },
          {
            "name": "miwa",
            "role": "lyrics"
          },
          {
            "name": "SUGIZO",
            "role": "composition"
          },
          {
            "name": "SUGIZO",
            "role": "arrangement"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 4,
        "titleJa": "光の涯",
        "artistDisplayName": "SUGIZO feat. アイナ・ジ・エンド（BiSH）",
        "releaseDate": "2019-08-13",
        "versionLabel": "最終話 ED，アイナ・ジ・エンド演唱版；完整版配信，串流另提供 TV Size",
        "credits": [
          {
            "name": "アイナ・ジ・エンド（BiSH）",
            "role": "vocals"
          },
          {
            "name": "MORRIE",
            "role": "lyrics"
          },
          {
            "name": "SUGIZO",
            "role": "composition"
          },
          {
            "name": "SUGIZO",
            "role": "arrangement"
          }
        ]
      }
    ]
  },
  {
    "anilistId": 105749,
    "slug": "diamond-no-ace-act-ii",
    "startDate": "2019-04-02",
    "titleJa": "ダイヤのA actⅡ",
    "titleZhHant": "鑽石王牌 act2",
    "titleRomaji": "Diamond no Ace act II",
    "officialSiteUrl": "https://diaace.com/",
    "wikipediaUrl": "https://youranimes.tw/animes/504",
    "identifierSource": {
      "label": "AniList 公開作品頁：2019 年 TV 版識別與季度",
      "url": "https://anilist.co/anime/105749/Diamond-no-Ace-act-II/",
      "language": "en"
    },
    "broadcastTimeJst": "17:55",
    "broadcastLabel": "東京電視台系列每週二 17:55（日本時間）",
    "themes": [
      {
        "type": "OP",
        "sequence": 1,
        "titleJa": "はじまりのうた",
        "artistDisplayName": "GLAY",
        "releaseDate": "2019-07-02",
        "versionLabel": "完整版 CD；TV Size 於 2019-04-02 配信",
        "credits": [
          {
            "name": "TERU",
            "role": "lyrics"
          },
          {
            "name": "TERU",
            "role": "composition"
          }
        ]
      },
      {
        "type": "OP",
        "sequence": 2,
        "titleJa": "流星のHowl",
        "artistDisplayName": "GLAY",
        "releaseDate": "2020-08-12",
        "versionLabel": "完整版 CD；官方影片為 TV 版",
        "credits": [
          {
            "name": "TAKURO",
            "role": "lyrics"
          },
          {
            "name": "TERU",
            "role": "composition"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 1,
        "titleJa": "ゴールデンアフタースクール",
        "artistDisplayName": "OxT",
        "releaseDate": "2019-04-17",
        "versionLabel": "CD 單曲版；另收錄 TV edit",
        "credits": []
      },
      {
        "type": "ED",
        "sequence": 2,
        "titleJa": "鼓動エスカレーション",
        "artistDisplayName": "内田真礼",
        "releaseDate": "2019-07-10",
        "versionLabel": "CD 單曲版",
        "credits": [
          {
            "name": "内田真礼",
            "role": "vocals"
          },
          {
            "name": "hotaru",
            "role": "lyrics"
          },
          {
            "name": "Tom-H@ck",
            "role": "composition"
          },
          {
            "name": "KanadeYUK",
            "role": "arrangement"
          },
          {
            "name": "Tom-H@ck",
            "role": "arrangement"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 3,
        "titleJa": "チャンス！",
        "artistDisplayName": "三森すずこ",
        "releaseDate": "2019-12-04",
        "versionLabel": "CD 單曲版；另收錄 TV size",
        "credits": [
          {
            "name": "三森すずこ",
            "role": "vocals"
          },
          {
            "name": "hotaru",
            "role": "lyrics"
          },
          {
            "name": "大石昌良",
            "role": "composition"
          },
          {
            "name": "大石昌良",
            "role": "arrangement"
          },
          {
            "name": "yamazo",
            "role": "arrangement"
          }
        ]
      },
      {
        "type": "ED",
        "sequence": 4,
        "titleJa": "Everlasting Dream",
        "artistDisplayName": "OxT",
        "releaseDate": "2020-02-05",
        "versionLabel": "CD 單曲版；另收錄 TV edit",
        "credits": []
      }
    ]
  },
  {
    anilistId: 97995,
    slug: "kono-yo-no-hate-de-koi-wo-utau-shoujo-yu-no",
    startDate: "2019-04-02",
    titleJa: "この世の果てで恋を唄う少女YU-NO",
    titleZhHant: "YU-NO 在這世界盡頭詠唱愛的少女",
    titleRomaji: "Kono Yo no Hate de Koi wo Utau Shoujo YU-NO",
    officialSiteUrl: "https://yuno-anime.com/top/",
    wikipediaUrl: "https://youranimes.tw/animes/4694",
    identifierSource: {
      label: "AniList 公開作品頁：2019 年 TV 版識別與季度",
      url: "https://anilist.co/anime/97995/Kono-Yo-no-Hate-de-Koi-wo-Utau-Shoujo-YUNO",
      language: "en"
    },
    broadcastTimeJst: "23:00",
    broadcastLabel: "AT-X 每週二 23:00（日本時間；2019 年 TV 版）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "この世の果てで恋を唄う少女",
        artistDisplayName: "亜咲花",
        versionLabel: "現世編 OP，完整版高解析音源；TV Size 於 2019-04-02、CD 於 2019-04-24 發行",
        releaseDate: "2019-04-17",
        credits: [
          { name: "亜咲花", role: "vocals" },
          { name: "志倉千代丸", role: "lyrics" },
          { name: "志倉千代丸", role: "composition" },
          { name: "悠木真一", role: "arrangement" }
        ]
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "MOTHER",
        artistDisplayName: "鈴木このみ",
        versionLabel: "異世界編 OP，完整版專輯收錄；TV Size 於 2019-08-07 先行配信",
        releaseDate: "2019-11-06",
        credits: [
          { name: "鈴木このみ", role: "vocals" },
          { name: "志倉千代丸", role: "lyrics" },
          { name: "志倉千代丸", role: "composition" },
          { name: "高木龍一（Dream Monster）", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "真理の鏡、剣乃ように",
        artistDisplayName: "鈴木このみ",
        versionLabel: "現世編 ED，完整版單曲；官方影片為 TV Size MV",
        releaseDate: "2019-05-08",
        credits: [
          { name: "鈴木このみ", role: "vocals" },
          { name: "志倉千代丸", role: "lyrics" },
          { name: "志倉千代丸", role: "composition" },
          { name: "白戸佑輔", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "神の数式",
        artistDisplayName: "亜咲花",
        versionLabel: "異世界編 ED，完整版專輯收錄；TV Size 於 2019-08-07 先行配信",
        releaseDate: "2019-10-07",
        credits: [
          { name: "亜咲花", role: "vocals" },
          { name: "志倉千代丸", role: "lyrics" },
          { name: "志倉千代丸", role: "composition" },
          { name: "悠木真一", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 104989,
    slug: "hachigatsu-no-cinderella-nine",
    startDate: "2019-04-07",
    titleJa: "八月のシンデレラナイン",
    titleZhHant: "八月的棒球甜心",
    titleRomaji: "Hachigatsu no Cinderella Nine",
    officialSiteUrl: "https://anime-hachinai.com/",
    wikipediaUrl: "https://youranimes.tw/animes/494",
    animeThemesUrl: "https://animethemes.moe/anime/hachigatsu_no_cinderella_nine",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/hachigatsu_no_cinderella_nine?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:35",
    broadcastLabel: "東京電視台 每週日 25:35（日本時間；2019 年原始 TV 版）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "エチュード",
        artistDisplayName: "みゆはん",
        versionLabel: "完整版單曲；TV Size 於 2019-05-01 先行配信",
        releaseDate: "2019-05-22",
        credits: [
          { name: "みゆはん", role: "vocals" },
          { name: "菅波栄純", role: "lyrics" },
          { name: "菅波栄純", role: "composition" },
          { name: "菅波栄純", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "どんなときも。",
        artistDisplayName: "有原翼（CV：西田望見）、東雲龍（CV：近藤玲奈）、野崎夕姫（CV：南早紀）、河北智恵（CV：井上ほの花）",
        versionLabel: "2019 年 TV 版四人翻唱；完整版先行配信，迷你專輯於 2019-08-09 發行",
        releaseDate: "2019-06-17",
        credits: [
          { name: "有原翼（CV：西田望見）", role: "vocals" },
          { name: "東雲龍（CV：近藤玲奈）", role: "vocals" },
          { name: "野崎夕姫（CV：南早紀）", role: "vocals" },
          { name: "河北智恵（CV：井上ほの花）", role: "vocals" },
          { name: "槇原敬之", role: "lyrics" },
          { name: "槇原敬之", role: "composition" },
          { name: "久下真音", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 104284,
    slug: "chou-kadou-girl-amazing-stranger",
    startDate: "2019-04-06",
    titleJa: "超可動ガール1/6",
    titleZhHant: "超可動女孩 1/6",
    titleRomaji: "Chou Kadou Girl ⅙: Amazing Stranger",
    wikipediaUrl: "https://youranimes.tw/animes/492",
    animeThemesUrl: "https://animethemes.moe/anime/chou_kadou_girl_amazing_stranger",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/chou_kadou_girl_amazing_stranger?include=resources",
      language: "en"
    },
    broadcastLabel: "日本首播／時間未整理（電視短篇）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "それゆけ！恋ゴコロ",
        artistDisplayName: "A応P",
        releaseDate: "2019-05-10",
        youtubeUrl: "https://www.youtube.com/watch?v=GfVF3xC3LuE",
        credits: [
          { name: "浅野まこと", role: "lyrics" },
          { name: "James Panda Jr.", role: "composition" },
          { name: "前口 渉", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ONE",
        artistDisplayName: "東城陽奏",
        versionLabel: "數位先行配信版",
        releaseDate: "2019-04-27",
        youtubeUrl: "https://www.youtube.com/watch?v=lLAPyH9IdpM",
        credits: [
          { name: "東城陽奏", role: "vocals" },
          { name: "東城陽奏", role: "lyrics" },
          { name: "千葉\"naotyu-\"直樹", role: "composition" }
        ]
      }
    ]
  },
  {
    anilistId: 102064,
    slug: "yatogame-chan-kansatsu-nikki",
    startDate: "2019-04-04",
    titleJa: "八十亀ちゃんかんさつにっき",
    titleZhHant: "八十龜醬觀察日記",
    titleRomaji: "Yatogame-chan Kansatsu Nikki",
    officialSiteUrl: "https://yatogame.nagoya/housouhaisin2/",
    wikipediaUrl: "https://youranimes.tw/animes/2024",
    animeThemesUrl: "https://animethemes.moe/anime/yatogame_chan_kansatsu_nikki",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/yatogame_chan_kansatsu_nikki?include=resources",
      language: "en"
    },
    broadcastTimeJst: "19:53",
    broadcastLabel: "愛知電視台 每週四 19:53（日本時間；首話 18:55，第 2、3 話 20:49）",
    themes: []
  },
  {
    anilistId: 104578,
    slug: "shingeki-no-kyojin-season-3-part-2",
    startDate: "2019-04-28",
    titleJa: "進撃の巨人 Season 3 Part.2",
    titleZhHant: "進擊的巨人 第三季 第二季度",
    titleRomaji: "Shingeki no Kyojin Season 3 Part 2",
    officialSiteUrl: "https://shingeki.tv/season3/",
    wikipediaUrl: "https://youranimes.tw/animes/570",
    animeThemesUrl: "https://animethemes.moe/anime/shingeki_no_kyojin_season_3_part_2",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/shingeki_no_kyojin_season_3_part_2?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:10",
    broadcastLabel: "NHK 綜合 每週日 24:10（日本時間；關西 24:45）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "憧憬と屍の道",
        artistDisplayName: "Linked Horizon",
        versionLabel: "第三季 Part.2；完整版單曲，TV Size 於 2019-04-29 先行配信",
        releaseDate: "2019-06-19",
        youtubeUrl: "https://www.youtube.com/watch?v=czJHHta2vz8",
        credits: [
          { name: "Revo", role: "lyrics" },
          { name: "Revo", role: "composition" },
          { name: "Revo", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Name of Love",
        artistDisplayName: "cinema staff",
        versionLabel: "第三季 Part.2；完整版先行串流，同日推出 TV Size，CD 於 2019-05-29 發行",
        releaseDate: "2019-04-29",
        youtubeUrl: "https://www.youtube.com/watch?v=6321GKongXw",
        credits: [
          { name: "Sohei Mishima", role: "lyrics" },
          { name: "Cinema Staff", role: "composition" },
          { name: "Youichiro Nomura", role: "composition" }
        ]
      }
    ]
  },
  {
    anilistId: 104454,
    slug: "isekai-quartet",
    startDate: "2019-04-09",
    titleJa: "異世界かるてっと",
    titleZhHant: "異世界四重奏",
    titleRomaji: "Isekai Quartet",
    officialSiteUrl: "https://isekai-quartet.com/onair-s1.html",
    wikipediaUrl: "https://youranimes.tw/animes/911",
    animeThemesUrl: "https://animethemes.moe/anime/isekai_quartet",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/isekai_quartet?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:30",
    broadcastLabel: "TOKYO MX 每週二 24:30（日本時間；AbemaTV 24:00 先行配信）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "異世界かるてっと",
        artistDisplayName: "アインズ（CV：日野 聡）、カズマ（CV：福島 潤）、スバル（CV：小林裕介）、ターニャ（CV：悠木 碧）",
        versionLabel: "第一季 OP；角色合唱版",
        releaseDate: "2019-05-29",
        credits: [
          { name: "アインズ（CV：日野 聡）", role: "vocals" },
          { name: "カズマ（CV：福島 潤）", role: "vocals" },
          { name: "スバル（CV：小林裕介）", role: "vocals" },
          { name: "ターニャ（CV：悠木 碧）", role: "vocals" },
          { name: "大石 昌良", role: "lyrics" },
          { name: "大石 昌良", role: "composition" },
          { name: "大石 昌良", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "異世界ガールズ♡トーク",
        artistDisplayName: "アルベド（CV：原 由実）、アクア（CV：雨宮 天）、エミリア（CV：高橋李依）、ターニャ（CV：悠木 碧）",
        versionLabel: "第一季 ED；角色合唱版",
        releaseDate: "2019-05-29",
        credits: [
          { name: "アルベド（CV：原 由実）", role: "vocals" },
          { name: "アクア（CV：雨宮 天）", role: "vocals" },
          { name: "エミリア（CV：高橋李依）", role: "vocals" },
          { name: "ターニャ（CV：悠木 碧）", role: "vocals" },
          { name: "Kagura.A", role: "lyrics" },
          { name: "前山田健一", role: "composition" },
          { name: "三好啓太", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Hollow Veil",
        artistDisplayName: "nonoc",
        versionLabel: "第一季第 5 話特別片尾；收錄於 star*frost 單曲",
        releaseDate: "2019-08-07",
        credits: [
          { name: "nonoc", role: "vocals" },
          { name: "nonoc", role: "lyrics" },
          { name: "安田史生", role: "lyrics" },
          { name: "田口史也", role: "composition" },
          { name: "越前谷直樹", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 104212,
    slug: "namu-amida-butsu-rendai-utena",
    startDate: "2019-04-08",
    titleJa: "なむあみだ仏っ！-蓮台 UTENA-",
    titleZhHant: "南無阿彌陀佛!-蓮台 UTENA-",
    titleRomaji: "Namu Amida Butsu!: Rendai Utena",
    wikipediaUrl: "https://youranimes.tw/animes/2295",
    animeThemesUrl: "https://animethemes.moe/anime/namu_amida_butsu_rendai_utena",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/namu_amida_butsu_rendai_utena?include=resources",
      language: "en"
    },
    broadcastTimeJst: "20:00",
    broadcastLabel: "AT-X 每週一 20:00（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "天唄",
        artistDisplayName: "帝釈天（CV：水中雅章）",
        credits: [
          { name: "帝釈天（CV：水中雅章）", role: "vocals" },
          { name: "深川琴美", role: "lyrics" },
          { name: "三好啓太", role: "composition" },
          { name: "三好啓太", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ルビー",
        artistDisplayName: "大橋ちっぽけ",
        versionLabel: "動畫 ED；數位先行配信，專輯於 2019-03-13 發行",
        releaseDate: "2019-01-15",
        youtubeUrl: "https://www.youtube.com/watch?v=ZjOMpO535uU",
        credits: [
          { name: "大橋ちっぽけ", role: "vocals" },
          { name: "大橋ちっぽけ", role: "lyrics" },
          { name: "大橋ちっぽけ", role: "composition" },
          { name: "akkin", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 105334,
    slug: "fruits-basket-2019",
    startDate: "2019-04-05",
    titleJa: "フルーツバスケット 1st season",
    titleZhHant: "魔法水果籃",
    titleRomaji: "Fruits Basket (2019)",
    officialSiteUrl: "https://fruba.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/fruits_basket_2019",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/fruits_basket_2019?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:23",
    broadcastLabel: "東京電視台 每週五 25:23（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Again",
        artistDisplayName: "Beverly",
        versionLabel: "第一季第 1 cour；日文原版",
        releaseDate: "2019-04-12",
        youtubeUrl: "https://www.youtube.com/watch?v=80oOmZSMlx0",
        credits: [{ name: "Beverly", role: "vocals" }]
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "Chime",
        artistDisplayName: "大塚 愛",
        versionLabel: "第一季第 2 cour；數位先行配信，CD 於 2019-09-04 發行",
        releaseDate: "2019-07-05",
        youtubeUrl: "https://www.youtube.com/watch?v=3RJqEL2uHiE",
        credits: [{ name: "大塚 愛", role: "vocals" }]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Lucky Ending",
        artistDisplayName: "ビッケブランカ",
        versionLabel: "第一季第 1 cour；數位配信版",
        releaseDate: "2019-04-10",
        credits: [{ name: "ビッケブランカ", role: "vocals" }]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "One Step Closer",
        artistDisplayName: "INTERSECTION",
        versionLabel: "第一季第 2 cour；數位配信版",
        releaseDate: "2019-07-19",
        youtubeUrl: "https://www.youtube.com/watch?v=YMMAqoQ9bEY",
        credits: [
          { name: "Nicole Morier", role: "songwriting" },
          { name: "Drew Erickson", role: "songwriting" },
          { name: "William Aoyama", role: "songwriting" }
        ]
      }
    ]
  },
  {
    anilistId: 103302,
    slug: "kono-oto-tomare",
    startDate: "2019-04-06",
    titleJa: "この音とまれ！",
    titleZhHant: "一弦定音！",
    titleRomaji: "Kono Oto Tomare!",
    animeThemesUrl: "https://animethemes.moe/anime/kono_oto_tomare",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/kono_oto_tomare?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:00",
    broadcastLabel: "日本首播 每週六 25:00（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Tone",
        artistDisplayName: "蒼井翔太",
        versionLabel: "第 1 cour OP；單曲版",
        releaseDate: "2019-04-10",
        youtubeUrl: "https://www.youtube.com/watch?v=0qbeG0lM3mU",
        credits: [
          { name: "蒼井翔太", role: "vocals" },
          { name: "園田健太郎", role: "lyrics" },
          { name: "園田健太郎", role: "composition" },
          { name: "日比野裕史", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Speechless",
        artistDisplayName: "内田雄馬",
        versionLabel: "第 1 cour ED；單曲版",
        releaseDate: "2019-05-08",
        youtubeUrl: "https://www.youtube.com/watch?v=rrq4OcYwiiE",
        credits: [
          { name: "内田雄馬", role: "vocals" },
          { name: "前迫潤哉", role: "lyrics" },
          { name: "前迫潤哉", role: "composition" },
          { name: "工藤政人", role: "composition" },
          { name: "工藤政人", role: "arrangement" },
          { name: "早川博隆", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 103555,
    slug: "mix-meisei-story",
    startDate: "2019-04-06",
    titleJa: "MIX",
    titleZhHant: "MIX",
    titleRomaji: "Mix: Meisei Story",
    officialSiteUrl: "https://www.aniplex.co.jp/mix/1st/",
    animeThemesUrl: "https://animethemes.moe/anime/mix_meisei_story",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/mix_meisei_story?include=resources",
      language: "en"
    },
    broadcastTimeJst: "17:30",
    broadcastLabel: "讀賣電視台／日本電視台 每週六 17:30（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "イコール",
        artistDisplayName: "sumika",
        releaseDate: "2019-06-12",
        credits: []
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "VS",
        artistDisplayName: "ポルノグラフィティ",
        versionLabel: "2019 年 7 月起的 OP",
        releaseDate: "2019-07-31",
        credits: [
          { name: "新藤晴一", role: "lyrics" },
          { name: "新藤晴一", role: "composition" },
          { name: "近藤隆史", role: "arrangement" },
          { name: "田中ユウスケ", role: "arrangement" },
          { name: "Porno Graffitti", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "君に届くまで",
        artistDisplayName: "Little Glee Monster",
        versionLabel: "期間生產限定動畫盤另收錄 TV Size",
        releaseDate: "2019-05-29",
        credits: [
          { name: "いしわたり淳治", role: "lyrics" },
          { name: "水野良樹", role: "composition" }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "君に伝えたストーリー",
        artistDisplayName: "Qyoto",
        versionLabel: "2019-07-13 起的 ED；期間生產限定盤另收錄 TV Size",
        releaseDate: "2019-07-31",
        credits: [
          { name: "中園勇樹", role: "vocals" },
          { name: "中園勇樹", role: "lyrics" }
        ]
      }
    ]
  },
  {
    anilistId: 101281,
    slug: "carole-and-tuesday",
    startDate: "2019-04-10",
    titleJa: "キャロル＆チューズデイ",
    titleZhHant: "凱洛與塔斯黛",
    titleRomaji: "Carole & Tuesday",
    officialSiteUrl: "https://www.fujitv.co.jp/b_hp/caroleandtuesday/",
    wikipediaUrl: "https://www.netflix.com/tw/title/80992137",
    animeThemesUrl: "https://animethemes.moe/anime/carole_tuesday",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/carole_tuesday?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:55",
    broadcastLabel: "富士電視台 每週三 24:55（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Kiss Me",
        artistDisplayName: "キャロル＆チューズデイ（Vo. Nai Br.XX＆Celeina Ann）",
        versionLabel: "前半播出部分；單曲另收錄 TV size ver.",
        releaseDate: "2019-05-29",
        credits: [
          { name: "Nai Br.XX", role: "vocals" },
          { name: "Celeina Ann", role: "vocals" },
          { name: "Nulbarich", role: "lyrics" },
          { name: "Nulbarich", role: "composition" },
          { name: "Nulbarich", role: "arrangement" }
        ]
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "Polly Jean",
        artistDisplayName: "キャロル＆チューズデイ（Vo. Nai Br.XX＆Celeina Ann）",
        versionLabel: "後半播出部分；單曲另收錄 TV size ver.",
        releaseDate: "2019-08-28",
        credits: [
          { name: "Nai Br.XX", role: "vocals" },
          { name: "Celeina Ann", role: "vocals" },
          { name: "LEO今井", role: "lyrics" },
          { name: "小山田圭吾", role: "composition" },
          { name: "小山田圭吾", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Hold Me Now",
        artistDisplayName: "キャロル＆チューズデイ（Vo. Nai Br.XX＆Celeina Ann）",
        versionLabel: "前半播出部分；單曲另收錄 TV size ver.",
        releaseDate: "2019-05-29",
        credits: [
          { name: "Nai Br.XX", role: "vocals" },
          { name: "Celeina Ann", role: "vocals" },
          { name: "Benny Sings", role: "lyrics" },
          { name: "Benny Sings", role: "composition" },
          { name: "Benny Sings", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Not Afraid",
        artistDisplayName: "アンジェラ（Vo. Alisa）",
        versionLabel: "後半播出部分；單曲另收錄 TV size ver.",
        releaseDate: "2019-08-28",
        credits: [
          { name: "Alisa", role: "vocals" },
          { name: "Lido", role: "lyrics" },
          { name: "Lido", role: "composition" },
          { name: "Lido", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 105928,
    slug: "robihachi",
    startDate: "2019-04-08",
    titleJa: "RobiHachi",
    titleZhHant: "RobiHachi",
    titleRomaji: "RobiHachi",
    officialSiteUrl: "https://robihachi.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/robihachi",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/robihachi?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:30",
    broadcastLabel: "AT-X／AbemaTV 每週一 23:30（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "天才のプレイリスト",
        artistDisplayName: "Hatchi feat. Robby（CV：河本啓佑／中井和哉）",
        versionLabel: "單曲一般版由 Hatchi 演唱；另收錄 H☆R version",
        releaseDate: "2019-04-24",
        youtubeUrl: "https://www.youtube.com/watch?v=YqxmjDgTLEc",
        credits: [{ name: "Hatchi（CV：河本啓佑）", role: "vocals" }]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Dancing to Night 〜君への最短ワープ航路〜",
        artistDisplayName: "Allo&Gras feat.Yang（CV：木村 昴／徳留慎乃佑／杉田智和）",
        releaseDate: "2019-04-24",
        credits: [
          { name: "木村 昴", role: "vocals" },
          { name: "徳留慎乃佑", role: "vocals" },
          { name: "杉田智和", role: "vocals" }
        ]
      }
    ]
  },
  {
    anilistId: 106568,
    slug: "bakumatsu-crisis",
    startDate: "2019-04-04",
    titleJa: "BAKUMATSUクライシス",
    titleZhHant: "戀愛幕末男友外傳 危機",
    titleRomaji: "Bakumatsu: Crisis",
    officialSiteUrl: "https://www.tbs.co.jp/anime/BAKUMATSU/",
    animeThemesUrl: "https://animethemes.moe/anime/bakumatsu_crisis",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/bakumatsu_crisis?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:58",
    broadcastLabel: "TBS 每週四 25:58（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Brave Rejection",
        artistDisplayName: "Hi!Superb",
        releaseDate: "2019-04-17",
        credits: []
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "青き炎",
        titleRomaji: "Aoki Homura",
        artistDisplayName: "Zwei",
        releaseDate: "2019-04-17",
        credits: []
      }
    ]
  },
  {
    anilistId: 101261,
    slug: "sarazanmai",
    startDate: "2019-04-11",
    titleJa: "さらざんまい",
    titleZhHant: "皿三昧",
    titleRomaji: "Sarazanmai",
    officialSiteUrl: "https://sarazanmai.com/",
    wikipediaUrl: "https://acgsecrets.hk/bangumi/201904/",
    animeThemesUrl: "https://animethemes.moe/anime/sarazanmai",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/sarazanmai?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:55",
    broadcastLabel: "富士電視台 每週四 24:55（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "まっさら",
        artistDisplayName: "KANA-BOON",
        youtubeUrl: "https://www.youtube.com/watch?v=KBhUW6PpwMY",
        releaseDate: "2019-06-12",
        credits: [
          { name: "谷口鮪", role: "vocals" },
          { name: "谷口鮪", role: "lyrics" },
          { name: "谷口鮪", role: "composition" },
          { name: "KANA-BOON", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "スタンドバイミー",
        artistDisplayName: "the peggies",
        youtubeUrl: "https://www.youtube.com/watch?v=x6zyKrHv12k",
        releaseDate: "2019-05-29",
        credits: [
          { name: "北澤ゆうほ", role: "vocals" },
          { name: "北澤ゆうほ", role: "lyrics" }
        ]
      }
    ]
  },
  {
    anilistId: 102939,
    slug: "mayonaka-no-occult-koumuin",
    startDate: "2019-04-07",
    titleJa: "真夜中のオカルト公務員",
    titleZhHant: "深夜的超自然公務員",
    titleRomaji: "Mayonaka no Occult Koumuin",
    officialSiteUrl: "https://occultkoumuin.com/",
    animeThemesUrl: "https://animethemes.moe/anime/mayonaka_no_occult_koumuin",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/mayonaka_no_occult_koumuin?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:30",
    broadcastLabel: "TOKYO MX／SUN TV／BS11 每週日 24:30（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "dis-communicate",
        artistDisplayName: "福山 潤",
        versionLabel: "動畫盤另收錄 dis-communicate TV edit",
        youtubeUrl: "https://www.youtube.com/watch?v=sta4kFzyLDI",
        releaseDate: "2019-04-24",
        credits: [
          { name: "福山 潤", role: "vocals" },
          { name: "福山 潤", role: "lyrics" },
          { name: "松井洋平", role: "lyrics" },
          { name: "eba", role: "composition" },
          { name: "eba", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "約束のOverture",
        artistDisplayName: "土岐隼一",
        versionLabel: "動畫盤另收錄 約束のOverture TV edit",
        youtubeUrl: "https://www.youtube.com/watch?v=ij4l4RR-H4c",
        releaseDate: "2019-05-15",
        credits: [
          { name: "土岐隼一", role: "vocals" },
          { name: "shungo.", role: "lyrics" },
          { name: "高木龍一", role: "composition" },
          { name: "高木龍一", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 107418,
    slug: "fairy-gone",
    startDate: "2019-04-07",
    titleJa: "Fairy gone フェアリーゴーン",
    titleZhHant: "Fairy gone",
    titleRomaji: "Fairy Gone",
    officialSiteUrl: "https://www.fairygone.com/",
    animeThemesUrl: "https://animethemes.moe/anime/fairy_gone",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/fairy_gone?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:00",
    broadcastLabel: "TOKYO MX／BS11／AT-X 每週日 24:00（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "KNOCK on the CORE",
        artistDisplayName: "(K)NoW_NAME",
        versionLabel: "TV Size 另行配信；單曲版：2019-04-24",
        youtubeUrl: "https://www.youtube.com/watch?v=B8BAqO-p9LU",
        releaseDate: "2019-04-24",
        credits: [
          { name: "Ayaka Tachibana", role: "vocals" },
          { name: "AIJ", role: "vocals" },
          { name: "宮崎誠", role: "composition" },
          { name: "宮崎誠", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Ash-like Snow",
        artistDisplayName: "(K)NoW_NAME",
        versionLabel: "TV Size 另行配信；單曲版：2019-04-24",
        youtubeUrl: "https://www.youtube.com/watch?v=ee855kKPujc",
        releaseDate: "2019-04-24",
        credits: [
          { name: "NIKIIE", role: "vocals" },
          { name: "eNu", role: "lyrics" },
          { name: "宮崎誠", role: "composition" },
          { name: "宮崎誠", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 100112,
    slug: "kenja-no-mago",
    startDate: "2019-04-10",
    titleJa: "賢者の孫",
    titleZhHant: "賢者之孫",
    titleRomaji: "Kenja no Mago",
    officialSiteUrl: "https://kenja-no-mago.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/kenja_no_mago",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/kenja_no_mago?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:30",
    broadcastLabel: "AT-X 每週三 23:30（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "アルティメット☆MAGIC",
        artistDisplayName: "i☆Ris",
        youtubeUrl: "https://www.youtube.com/watch?v=3PblQhyRoF4",
        releaseDate: "2019-05-22",
        credits: [
          { name: "廣瀬祐輝", role: "lyrics" },
          { name: "廣瀬祐輝", role: "composition" },
          { name: "久下真音", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "圧倒的 Vivid Days",
        artistDisplayName: "吉七味。",
        versionLabel: "第6話使用 MV 畫面",
        youtubeUrl: "https://www.youtube.com/watch?v=z-Jxu8p3iSY",
        releaseDate: "2019-06-19",
        credits: [
          { name: "吉七味。", role: "vocals" },
          { name: "織田あすか", role: "lyrics" },
          { name: "都丸椋太", role: "composition" },
          { name: "都丸椋太", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 101597,
    slug: "gunjou-no-magmel",
    startDate: "2019-04-07",
    titleJa: "群青のマグメル",
    titleZhHant: "拾又之國",
    titleRomaji: "Gunjou no Magmel",
    officialSiteUrl: "https://gunjyo-magumeru.com/",
    animeThemesUrl: "https://animethemes.moe/anime/gunjou_no_magmel",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/gunjou_no_magmel?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:00",
    broadcastLabel: "TOKYO MX 每週日 22:00（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Dash&Daaash!!",
        artistDisplayName: "風男塾",
        versionLabel: "TV Size：2019-06-05；完整版：2019-06-19",
        youtubeUrl: "https://www.youtube.com/watch?v=361yH_xuBfg",
        releaseDate: "2019-06-19",
        credits: [
          { name: "Q-MHz", role: "lyrics" },
          { name: "Q-MHz", role: "composition" },
          { name: "Q-MHz", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "The Key",
        artistDisplayName: "a flood of circle",
        versionLabel: "動畫片尾剪輯版另收錄為 The Key -群青のマグメルver.-",
        youtubeUrl: "https://www.youtube.com/watch?v=ALzdd-M-DWA",
        releaseDate: "2019-04-24",
        credits: [
          { name: "佐々木亮介", role: "vocals" },
          { name: "佐々木亮介", role: "lyrics" },
          { name: "佐々木亮介", role: "composition" },
          { name: "a flood of circle", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 101814,
    slug: "shoumetsu-toshi",
    startDate: "2019-04-07",
    titleJa: "消滅都市",
    titleZhHant: "消滅都市",
    titleRomaji: "Shoumetsu Toshi",
    officialSiteUrl: "https://shoumetsutoshi-anime.com/",
    animeThemesUrl: "https://animethemes.moe/anime/shoumetsu_toshi",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/shoumetsu_toshi?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:30",
    broadcastLabel: "TOKYO MX 每週日 23:30（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "答",
        artistDisplayName: "阿部真央",
        versionLabel: "TV Size：2019-04-08；完整版：2019-05-08",
        youtubeUrl: "https://www.youtube.com/watch?v=SYMNL0dIfx4",
        releaseDate: "2019-05-08",
        credits: [
          { name: "阿部真央", role: "vocals" },
          { name: "阿部真央", role: "lyrics" },
          { name: "阿部真央", role: "composition" },
          { name: "akkin", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "With Your Breath",
        artistDisplayName: "SPR5",
        youtubeUrl: "https://www.youtube.com/watch?v=wZ3Fe1JeecE",
        releaseDate: "2019-04-24",
        credits: [
          { name: "社本悠", role: "vocals" },
          { name: "岩井映美里", role: "vocals" },
          { name: "直田姫奈", role: "vocals" },
          { name: "大西亜玖璃", role: "vocals" },
          { name: "園山ひかり", role: "vocals" },
          { name: "太田彩華", role: "lyrics" },
          { name: "俊龍", role: "lyrics" },
          { name: "俊龍", role: "composition" },
          { name: "山口高始", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 106051,
    slug: "senryuu-shoujo",
    startDate: "2019-04-05",
    titleJa: "川柳少女",
    titleZhHant: "川柳少女",
    titleRomaji: "Senryuu Shoujo",
    officialSiteUrl: "https://www.mbs.jp/senryu-girl/",
    animeThemesUrl: "https://animethemes.moe/anime/senryuu_shoujo",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/senryuu_shoujo?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:55",
    broadcastLabel: "MBS／TBS 每週五 25:55；首話 TBS 25:42／MBS 26:10（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "コトノハノオモイ",
        artistDisplayName: "井上苑子",
        youtubeUrl: "https://www.youtube.com/watch?v=AR5gokS91wg",
        credits: [{ name: "井上苑子", role: "vocals" }]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ORDINARY LOVE",
        artistDisplayName: "逢田梨香子",
        releaseDate: "2019-04-05",
        credits: [
          { name: "逢田梨香子", role: "vocals" },
          { name: "Satomi", role: "lyrics" },
          { name: "青木康平", role: "composition" },
          { name: "田中隼人", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 105989,
    slug: "midara-na-ao-chan-wa-benkyou-ga-dekinai",
    startDate: "2019-04-05",
    titleJa: "みだらな青ちゃんは勉強ができない",
    titleZhHant: "滿腦都是○○的我沒辦法談戀愛",
    titleRomaji: "Midara na Ao-chan wa Benkyou ga Dekinai",
    officialSiteUrl: "https://animaru.jp/anmr/shop/prg/aochan",
    animeThemesUrl: "https://animethemes.moe/anime/midara_na_ao_chan_wa_benkyou_ga_dekinai",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/midara_na_ao_chan_wa_benkyou_ga_dekinai?include=resources",
      language: "en"
    },
    broadcastTimeJst: "26:10",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "WONDERFUL WONDER",
        artistDisplayName: "エドガー・サリヴァン",
        youtubeUrl: "https://www.youtube.com/watch?v=tYyNMqcfiFw",
        releaseDate: "2019-04-05",
        credits: []
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "恋はミラクル",
        artistDisplayName: "スピラ・スピカ",
        youtubeUrl: "https://www.youtube.com/watch?v=Uc7Dp_pFO_k",
        releaseDate: "2019-04-06",
        credits: [
          { name: "幹葉", role: "vocals" },
          { name: "幹葉", role: "lyrics" },
          { name: "寺西裕二", role: "lyrics" },
          { name: "寺西裕二", role: "composition" },
          { name: "重永亮介", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 101386,
    slug: "hitoribocchi-no-marumaru-seikatsu",
    startDate: "2019-04-05",
    titleJa: "ひとりぼっちの○○生活",
    titleZhHant: "一個人的○○小日子",
    titleRomaji: "Hitoribocchi no Marumaru Seikatsu",
    officialSiteUrl: "https://hitoribocchi.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/hitoribocchi_no_marumaru_seikatsu",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/hitoribocchi_no_marumaru_seikatsu?include=resources",
      language: "en"
    },
    broadcastTimeJst: "26:25",
    broadcastLabel: "MBS／TBS 每週五 26:25（日本時間）",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ひとりぼっちのモノローグ",
        artistDisplayName: "一里ぼっち（CV：森下千咲）、砂尾なこ（CV：田中美海）、本庄アル（CV：鬼頭明里）、ソトカ・ラキター（CV：黒瀬ゆうこ）",
        releaseDate: "2019-05-29",
        credits: [
          { name: "一里ぼっち（CV：森下千咲）", role: "vocals" },
          { name: "砂尾なこ（CV：田中美海）", role: "vocals" },
          { name: "本庄アル（CV：鬼頭明里）", role: "vocals" },
          { name: "ソトカ・ラキター（CV：黒瀬ゆうこ）", role: "vocals" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ね、いっしょにかえろ。",
        artistDisplayName: "一里ぼっち（CV：森下千咲）",
        releaseDate: "2019-05-29",
        credits: [{ name: "一里ぼっち（CV：森下千咲）", role: "vocals" }]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "爆笑ぼっち塾 校歌",
        artistDisplayName: "一里ぼっち（CV：森下千咲）、砂尾なこ（CV：田中美海）、本庄アル（CV：鬼頭明里）、ソトカ・ラキター（CV：黒瀬ゆうこ）",
        versionLabel: "第6話片尾",
        releaseDate: "2019-05-29",
        credits: [
          { name: "一里ぼっち（CV：森下千咲）", role: "vocals" },
          { name: "砂尾なこ（CV：田中美海）", role: "vocals" },
          { name: "本庄アル（CV：鬼頭明里）", role: "vocals" },
          { name: "ソトカ・ラキター（CV：黒瀬ゆうこ）", role: "vocals" }
        ]
      }
    ]
  },
  {
    anilistId: 103900,
    slug: "bokutachi-wa-benkyou-ga-dekinai-1st-season",
    startDate: "2019-04-06",
    titleJa: "ぼくたちは勉強ができない",
    titleZhHant: "我們真的學不來！",
    titleRomaji: "Bokutachi wa Benkyou ga Dekinai",
    officialSiteUrl: "https://boku-ben.com/",
    animeThemesUrl: "https://animethemes.moe/anime/bokutachi_wa_benkyou_ga_dekinai",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/bokutachi_wa_benkyou_ga_dekinai?include=resources",
      language: "en"
    },
    broadcastTimeJst: "24:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "セイシュンゼミナール",
        artistDisplayName: "Study",
        releaseDate: "2019-05-29",
        credits: [
          { name: "古橋文乃（CV：白石晴香）", role: "vocals" },
          { name: "緒方理珠（CV：富田美憂）", role: "vocals" },
          { name: "武元うるか（CV：鈴代紗弓）", role: "vocals" },
          { name: "こだまさおり", role: "lyrics" },
          { name: "山田高弘", role: "composition" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Never Give It Up!!",
        artistDisplayName: "Study",
        releaseDate: "2019-05-29",
        credits: [
          { name: "古橋文乃（CV：白石晴香）", role: "vocals" },
          { name: "緒方理珠（CV：富田美憂）", role: "vocals" },
          { name: "武元うるか（CV：鈴代紗弓）", role: "vocals" },
          { name: "川田まみ", role: "lyrics" },
          { name: "井内舞子", role: "composition" }
        ]
      }
    ]
  },
  {
    anilistId: 101922,
    slug: "kimetsu-no-yaiba",
    startDate: "2019-04-06",
    titleJa: "鬼滅の刃 竈門炭治郎 立志編",
    titleZhHant: "鬼滅之刃 竈門炭治郎 立志篇",
    titleRomaji: "Kimetsu no Yaiba",
    officialSiteUrl: "https://kimetsu.com/anime/risshihen/",
    animeThemesUrl: "https://animethemes.moe/anime/kimetsu_no_yaiba",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/kimetsu_no_yaiba?include=resources",
      language: "en"
    },
    broadcastTimeJst: "23:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "紅蓮華",
        artistDisplayName: "LiSA",
        youtubeUrl: "https://www.youtube.com/watch?v=x1FV6IrjZCY",
        releaseDate: "2019-04-22",
        credits: [
          { name: "LiSA", role: "vocals" },
          { name: "LiSA", role: "lyrics" },
          { name: "草野華余子", role: "composition" },
          { name: "江口 亮", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "from the edge",
        artistDisplayName: "FictionJunction feat. LiSA",
        releaseDate: "2019-09-02",
        credits: [
          { name: "LiSA", role: "vocals" },
          { name: "梶浦由記", role: "lyrics" },
          { name: "梶浦由記", role: "composition" },
          { name: "梶浦由記", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "竈門炭治郎のうた",
        artistDisplayName: "椎名豪 featuring 中川奈美",
        versionLabel: "第19話片尾／兼插入歌",
        releaseDate: "2019-08-30",
        credits: [
          { name: "中川奈美", role: "vocals" },
          { name: "ufotable", role: "lyrics" },
          { name: "椎名 豪", role: "composition" },
          { name: "椎名 豪", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 97668,
    slug: "one-punch-man-2nd-season",
    startDate: "2019-04-09",
    titleJa: "ワンパンマン 第2期",
    titleZhHant: "一拳超人 第二季",
    titleRomaji: "One Punch Man 2nd Season",
    officialSiteUrl: "https://onepunchman-anime.net/",
    animeThemesUrl: "https://animethemes.moe/anime/one_punch_man_2nd_season",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/one_punch_man_2nd_season?include=resources",
      language: "en"
    },
    broadcastTimeJst: "25:35",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "静寂のアポストル",
        artistDisplayName: "JAM Project",
        youtubeUrl: "https://www.youtube.com/watch?v=qR6NtzkeqCI",
        versionLabel: "日本播出版",
        releaseDate: "2019-04-24",
        credits: [
          { name: "JAM Project", role: "vocals" },
          { name: "森雪之丞", role: "lyrics" },
          { name: "ヒカルド・クルーズ", role: "composition" },
          { name: "宮崎誠", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "地図が無くても戻るから",
        artistDisplayName: "古川慎",
        youtubeUrl: "https://www.youtube.com/watch?v=MeK5M0M8U8A",
        releaseDate: "2019-05-22",
        credits: [
          { name: "古川慎", role: "vocals" },
          { name: "畑亜貴", role: "lyrics" },
          { name: "本多友紀（Arte Refact）", role: "composition" },
          { name: "本多友紀（Arte Refact）", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 105914,
    slug: "sewayaki-kitsune-no-senko-san",
    startDate: "2019-04-10",
    titleJa: "世話やきキツネの仙狐さん",
    titleZhHant: "請讓我撒嬌，仙狐大人！",
    titleRomaji: "Sewayaki Kitsune no Senko-san",
    officialSiteUrl: "https://senkosan.com/",
    animeThemesUrl: "https://animethemes.moe/anime/sewayaki_kitsune_no_senko_san",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/sewayaki_kitsune_no_senko_san?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "今宵mofumofu!!",
        artistDisplayName: "仙狐（CV：和氣あず未）、シロ（CV：内田真礼）",
        releaseDate: "2019-05-29",
        credits: [
          { name: "仙狐（CV：和氣あず未）", role: "vocals" },
          { name: "シロ（CV：内田真礼）", role: "vocals" },
          { name: "Agasa.K", role: "lyrics" },
          { name: "Agasa.K", role: "composition" },
          { name: "Agasa.K", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "もっふもふ DE よいのじゃよ",
        artistDisplayName: "仙狐（CV：和氣あず未）",
        releaseDate: "2019-05-29",
        credits: [
          { name: "仙狐（CV：和氣あず未）", role: "vocals" },
          { name: "篠崎あやと", role: "lyrics" },
          { name: "篠崎あやと", role: "composition" },
          { name: "篠崎あやと", role: "arrangement" }
        ]
      }
    ]
  },
  {
    anilistId: 103223,
    slug: "bungou-stray-dogs-3rd-season",
    startDate: "2019-04-12",
    titleJa: "文豪ストレイドッグス 第3シーズン",
    titleZhHant: "文豪Stray Dogs 第三季",
    titleRomaji: "Bungou Stray Dogs 3rd Season",
    officialSiteUrl: "https://bungo-stray-dogs.jp/",
    animeThemesUrl: "https://animethemes.moe/anime/bungou_stray_dogs_3rd_season",
    identifierSource: {
      label: "AnimeThemes：作品識別交叉連結",
      url: "https://api.animethemes.moe/anime/bungou_stray_dogs_3rd_season?include=resources",
      language: "en"
    },
    broadcastTimeJst: "22:30",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "セツナの愛",
        artistDisplayName: "GRANRODEO",
        releaseDate: "2019-05-08",
        credits: [
          { name: "GRANRODEO", role: "vocals" },
          { name: "谷山紀章", role: "lyrics" },
          { name: "飯塚昌明", role: "composition" },
          { name: "飯塚昌明", role: "arrangement" }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Lily",
        artistDisplayName: "ラックライフ",
        releaseDate: "2019-05-08",
        credits: [
          { name: "ラックライフ", role: "vocals" },
          { name: "PON", role: "lyrics" },
          { name: "PON", role: "composition" },
          { name: "本間昭光", role: "arrangement" },
          { name: "ラックライフ", role: "arrangement" }
        ]
      }
    ]
  }
];

const strikeWitches501EndingRows = [
  [1, "Treasure of life #1", "宮藤芳佳（CV：福圓美里）", "福圓美里"],
  [2, "Treasure of life #2", "エーリカ・ハルトマン（CV：野川さくら）", "野川さくら"],
  [3, "Treasure of life #3", "ミーナ・ディートリンデ・ヴィルケ（CV：田中理恵）", "田中理恵"],
  [4, "Treasure of life #4", "ゲルトルート・バルクホルン（CV：園崎未恵）", "園崎未恵"],
  [5, "Treasure of life #5", "坂本美緒（CV：世戸さおり）", "世戸さおり"],
  [6, "Treasure of life #6", "シャーロット・E・イェーガー（CV：小清水亜美）", "小清水亜美"],
  [7, "Treasure of life #7", "フランチェスカ・ルッキーニ（CV：斎藤千和）", "斎藤千和"],
  [8, "Treasure of life #8", "サーニャ・V・リトヴャク（CV：門脇舞以）", "門脇舞以"],
  [9, "Treasure of life #9", "エイラ・イルマタル・ユーティライネン（CV：大橋歩夕）", "大橋歩夕"],
  [10, "Treasure of life #10", "リネット・ビショップ（CV：名塚佳織）", "名塚佳織"],
  [11, "Treasure of life #11", "ペリーヌ・クロステルマン（CV：沢城みゆき）", "沢城みゆき"],
  [12, "Treasure of life #12", "第501統合戦闘航空団", "第501統合戦闘航空団"]
] as const;

const independentSpringSeeds: NativeCuratedAnimeSeed[] = [{
  id: "catalog-strike-witches-501-2019",
  slug: "strike-witches-501-takeoff-2019",
  titleJa: "ストライクウィッチーズ 501部隊発進しますっ！",
  titleZhHant: "強襲魔女 501部隊出動！",
  seasonIds: ["2019-spring"],
  startDate: "2019-04-09",
  editorialWeekday: 2,
  broadcastTimeJst: "24:45",
  broadcastLabel: "TOKYO MX 每週二 24:45（日本時間；2019 年 TV 短篇）",
  status: "finished",
  verifiedAt: "2026-09-07",
  officialSiteUrl: "https://w-witch.jp/501_takeoff/",
  identifierSource: {
    label: "動畫官方：2019 年 TV 版作品識別與首播時段",
    url: "https://w-witch.jp/501_takeoff/onair/",
    language: "ja"
  },
  wikipediaUrl: "https://youranimes.tw/bangumi/201904",
  sourceReferenceUrls: [
    "https://youranimes.tw/animes/1192",
    "https://www.animatetimes.com/tag/details.php?id=15506"
  ],
  themes: [{
    type: "OP", sequence: 1,
    titleJa: "空が呼ぶほうへ",
    artistDisplayName: "石田燿子",
    releaseDate: "2019-04-24",
    versionLabel: "2019 年 TV 版 OP／CD 完整版；官方影片為短版 MV",
    credits: [
      { name: "石田燿子", role: "vocals" },
      { name: "ミズノゲンキ", role: "lyrics" },
      { name: "睦月周平", role: "composition" },
      { name: "睦月周平", role: "arrangement" }
    ]
  }, ...strikeWitches501EndingRows.map(([sequence, titleJa, artistDisplayName, vocalist]) => ({
    type: "ED" as const, sequence, titleJa, artistDisplayName,
    releaseDate: "2019-06-26",
    versionLabel: `TV 輪替 ED #${sequence}／CD 完整版；作曲署名待核對${sequence === 12 ? "；官方影片為試聽短版" : ""}`,
    credits: [
      { name: vocalist, role: "vocals" as const },
      { name: "荘野ジュリ", role: "lyrics" as const },
      { name: "滝澤俊輔", role: "arrangement" as const }
    ]
  }))]
}, {
  id: "catalog-gonjiro-2019",
  slug: "gonjiro-2019",
  titleJa: "けだまのゴンじろー",
  titleZhHant: "毛球權次郎",
  seasonIds: ["2019-spring"],
  startDate: "2019-04-06",
  editorialWeekday: 6,
  broadcastTimeJst: "10:00",
  broadcastLabel: "東京電視台每週六 10:00（日本時間；2019 年 TV 版）",
  status: "finished",
  verifiedAt: "2026-09-07",
  officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/gonjiro/",
  identifierSource: {
    label: "東京電視台：作品識別、首播日期與播出時段",
    url: "https://www.tv-tokyo.co.jp/anime/gonjiro/onair/",
    language: "ja"
  },
  wikipediaUrl: "https://youranimes.tw/bangumi/201904",
  sourceReferenceUrls: [
    "https://youranimes.tw/animes/3711",
    "https://www.sonymusic.co.jp/artist/DemonKakka/info/507323"
  ],
  themes: [{
    type: "OP", sequence: 1,
    titleJa: "レッツ！ゴンじろー",
    artistDisplayName: "CHAI",
    releaseDate: "2019-07-24",
    versionLabel: "CD 完整版；TV 使用アニメオープニングver.",
    credits: [
      { name: "ユウキ", role: "lyrics" },
      { name: "マナ", role: "composition" },
      { name: "カナ", role: "composition" },
      { name: "CHAI", role: "arrangement" }
    ]
  }, {
    type: "ED", sequence: 1,
    titleJa: "わさわさわさ！",
    artistDisplayName: "デーモン閣下",
    releaseDate: "2019-07-24",
    versionLabel: "CD 完整版；アニメエンディングver. 已於 2019-04-06 先行配信",
    credits: [
      { name: "デーモン閣下", role: "lyrics" },
      { name: "デーモン閣下", role: "composition" },
      { name: "pal@pop", role: "composition" },
      { name: "pal@pop", role: "arrangement" }
    ]
  }]
}];

export const curated2019SpringSeeds: CuratedCatalogueSeed[] = [
  ...independentSpringSeeds,
  ...curated2019SpringSeedRows.map(spring2019Seed)
];
export const curated2019SpringAnimeIds = curated2019SpringSeeds.map(getCuratedAnimeKey);
