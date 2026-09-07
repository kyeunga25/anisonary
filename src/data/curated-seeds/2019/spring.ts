import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

type Spring2019SeedInput = Omit<
  CuratedAnimeSeed,
  | "id" | "seasonIds" | "editorialWeekday" | "status" | "anilistUrl"
  | "sourceReferenceUrls" | "verifiedAt"
>;

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
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/201904/"],
    verifiedAt: "2026-09-07"
  };
}

const curated2019SpringSeedRows: Spring2019SeedInput[] = [
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
        credits: []
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Ash-like Snow",
        artistDisplayName: "(K)NoW_NAME",
        versionLabel: "TV Size 另行配信；單曲版：2019-04-24",
        youtubeUrl: "https://www.youtube.com/watch?v=ee855kKPujc",
        releaseDate: "2019-04-24",
        credits: []
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

export const curated2019SpringSeeds: CuratedAnimeSeed[] = curated2019SpringSeedRows.map(spring2019Seed);
export const curated2019SpringAnimeIds = curated2019SpringSeeds.map(({ anilistId }) => anilistId);
