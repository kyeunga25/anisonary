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
