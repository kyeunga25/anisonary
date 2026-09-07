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
    seasonIds: ["2019-summer"],
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
        ]
      }
    ]
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
        artistDisplayName: "まふまふ"
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
        ]
      }
    ]
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
        ]
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
        ]
      }
    ]
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
        releaseDate: "2019-07-24"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "マッチョアネーム？",
        artistDisplayName: "街雄鳴造(CV：石川界人)",
        releaseDate: "2019-07-24"
      }
    ]
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
        releaseDate: "2019-07-17"
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
        ]
      }
    ]
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
            name: "ラティナ（CV：高尾奏音）",
            role: "vocals"
          },
          {
            name: "渡部紫緒",
            role: "lyrics"
          },
          {
            name: "松坂康司",
            role: "composition"
          },
          {
            name: "佐藤清喜",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "This is 勇者, but 残念!?",
        artistDisplayName: "デイル（CV：岡本信彦）",
        releaseDate: "2019-07-24",
        credits: [
          {
            name: "デイル（CV：岡本信彦）",
            role: "vocals"
          },
          {
            name: "hisakuni",
            role: "lyrics"
          },
          {
            name: "hisakuni",
            role: "composition"
          },
          {
            name: "hisakuni",
            role: "arrangement"
          }
        ]
      }
    ]
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
            name: "田中望（CV：赤﨑千夏）、菊池茜（CV：戸松遥）、鷺宮しおり（CV：豊崎愛生）",
            role: "vocals"
          },
          {
            name: "山崎真吾",
            role: "lyrics"
          },
          {
            name: "山崎真吾",
            role: "composition"
          },
          {
            name: "山崎真吾",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "青春のリバーブ",
        artistDisplayName: "田中望（CV：赤﨑千夏）、菊池茜（CV：戸松遥）、鷺宮しおり（CV：豊崎愛生）",
        releaseDate: "2019-07-24",
        credits: [
          {
            name: "田中望（CV：赤﨑千夏）、菊池茜（CV：戸松遥）、鷺宮しおり（CV：豊崎愛生）",
            role: "vocals"
          },
          {
            name: "Agasa.K",
            role: "lyrics"
          },
          {
            name: "Agasa.K",
            role: "composition"
          },
          {
            name: "Agasa.K",
            role: "arrangement"
          }
        ]
      }
    ]
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
        artistDisplayName: "BURNOUT SYNDROMES"
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "三原色",
        artistDisplayName: "PELICAN FANCLUB"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "LIFE",
        artistDisplayName: "Rude-α"
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "夢のような",
        artistDisplayName: "佐伯ユウスケ"
      }
    ]
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
        versionLabel: "第 1 季前半片頭曲"
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "MAYDAY feat. Ryo from CRYSTAL LAKE",
        artistDisplayName: "coldrain",
        releaseDate: "2019-08-28",
        versionLabel: "第 1 季後半片頭曲"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "veil",
        artistDisplayName: "須田景凪",
        versionLabel: "第 1 季前半片尾曲"
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "脳内",
        artistDisplayName: "Lenny code fiction",
        releaseDate: "2019-12-11",
        versionLabel: "第 1 季後半片尾曲"
      }
    ]
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
        releaseDate: "2019-08-28"
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
        ]
      }
    ]
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
        releaseDate: "2019-08-07"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ユメシンデレラ",
        artistDisplayName: "麻倉もも",
        releaseDate: "2019-09-04",
        credits: [
          {
            name: "麻倉もも",
            role: "vocals"
          },
          {
            name: "HoneyWorks",
            role: "lyrics"
          },
          {
            name: "HoneyWorks",
            role: "composition"
          },
          {
            name: "HoneyWorks",
            role: "arrangement"
          }
        ]
      }
    ]
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
            name: "梶浦由記",
            role: "composition"
          },
          {
            name: "梶浦由記",
            role: "arrangement"
          }
        ]
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "雲雀",
        artistDisplayName: "ASCA",
        credits: [
          {
            name: "ASCA",
            role: "vocals"
          },
          {
            name: "梶浦由記",
            role: "lyrics"
          },
          {
            name: "梶浦由記",
            role: "composition"
          },
          {
            name: "梶浦由記",
            role: "arrangement"
          }
        ]
      }
    ]
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
        releaseDate: "2019-07-17"
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Lasting Song",
        artistDisplayName: "高垣彩陽",
        releaseDate: "2019-08-21"
      }
    ]
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
        releaseDate: "2019-07-24"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "僕を見つけて",
        artistDisplayName: "fhána",
        releaseDate: "2019-08-07",
        credits: [
          {
            name: "fhána",
            role: "vocals"
          },
          {
            name: "林英樹",
            role: "lyrics"
          },
          {
            name: "佐藤純一",
            role: "composition"
          },
          {
            name: "佐藤純一",
            role: "arrangement"
          }
        ]
      }
    ]
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
            name: "KiRaRe",
            role: "vocals"
          },
          {
            name: "高瀬愛虹",
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
        ]
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
        ]
      }
    ]
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
        versionLabel: "2019 年動畫前半"
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "Dark Crow",
        artistDisplayName: "MAN WITH A MISSION",
        releaseDate: "2019-10-23",
        versionLabel: "2019 年動畫後半"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Torches",
        artistDisplayName: "Aimer",
        releaseDate: "2019-08-14",
        versionLabel: "2019 年動畫前半"
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Drown",
        artistDisplayName: "milet",
        releaseDate: "2019-11-06",
        versionLabel: "2019 年動畫後半"
      }
    ]
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
        releaseDate: "2019-09-18"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "牙と翼",
        artistDisplayName: "May'n",
        releaseDate: "2019-07-31",
        credits: [
          {
            name: "May'n",
            role: "vocals"
          },
          {
            name: "宮川弾",
            role: "lyrics"
          },
          {
            name: "川崎智哉",
            role: "composition"
          },
          {
            name: "佐藤純一",
            role: "arrangement"
          }
        ]
      }
    ]
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
        releaseDate: "2019-07-24"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ハジメノウタ",
        artistDisplayName: "DracoVirgo",
        releaseDate: "2019-09-04"
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
        releaseDate: "2019-08-21"
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Connected",
        artistDisplayName: "ティラナ・エクセディリカ（CV：吉岡茉祐）",
        releaseDate: "2019-08-07"
      }
    ]
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
        releaseDate: "2019-10-16"
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
        ]
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
        ]
      }
    ]
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
