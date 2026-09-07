import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

type Spring2019SeedInput = Omit<
  CuratedAnimeSeed,
  | "id" | "seasonIds" | "editorialWeekday" | "status" | "anilistUrl"
  | "wikipediaUrl" | "sourceReferenceUrls" | "verifiedAt"
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
    wikipediaUrl: "https://youranimes.tw/bangumi/201904",
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/201904/"],
    verifiedAt: "2026-09-07"
  };
}

const curated2019SpringSeedRows: Spring2019SeedInput[] = [
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
