import type {
  CuratedThemeSourceOverrideMap,
  CuratedThemeSourceSeed,
} from "@/data/curated-theme-sources/types";

interface ReviewedThemeGroup {
  anilistId: number;
  themeKeys: readonly `${"OP" | "ED"}:${number}`[];
  label: string;
  firstPartyUrl: string;
  crossCheckUrl: string;
  crossCheckLanguage?: CuratedThemeSourceSeed["language"];
}

const reviewedThemeGroups: readonly ReviewedThemeGroup[] = [
  {
    anilistId: 140085,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《闇影詩章 F》官方音樂頁：兩組 OP／ED 曲目",
    firstPartyUrl: "https://anime.shadowverse.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/shadowverse_flame",
  },
  {
    anilistId: 136080,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《魔法紀錄 Final SEASON》官方音樂頁：OP／ED 與最終曲",
    firstPartyUrl: "https://anime.magireco.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/magia_record_mahou_shoujo_madoka_magica_gaiden_final_season_asaki_yume_no_akatsuki",
  },
  {
    anilistId: 133412,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《Healer Girl》官方製作與主題曲資料",
    firstPartyUrl: "https://healer-girl.jp/staff/",
    crossCheckUrl: "https://animethemes.moe/anime/healer_girl",
  },
  {
    anilistId: 130319,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《RPG 不動產》官方音樂頁：OP／ED 與劇中版本",
    firstPartyUrl: "https://rpg-rs.jp/music.html",
    crossCheckUrl: "https://animethemes.moe/anime/rpg_fudousan",
  },
  {
    anilistId: 132532,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《相合之物》官方音樂頁：OP／ED 與特別曲",
    firstPartyUrl: "https://deaimon.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/deaimon",
  },
  {
    anilistId: 138459,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4", "ED:5"],
    label: "《成為女主角！》官方音樂頁：OP 與輪替 ED",
    firstPartyUrl: "https://honeyworks-tvanime.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/heroine_tarumono",
  },
  {
    anilistId: 141774,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4"],
    label: "《派對咖孔明》官方唱片頁：OP、ED 與演唱版本",
    firstPartyUrl: "https://paripikoumei-anime.com/tv/discography/",
    crossCheckUrl: "https://animethemes.moe/anime/paripi_koumei",
  },
  {
    anilistId: 125367,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《輝夜姬想讓人告白－超級浪漫－》官方音樂頁",
    firstPartyUrl: "https://kaguya.love/music/",
    crossCheckUrl: "https://animethemes.moe/anime/kaguya_sama_wa_kokurasetai_ultra_romantic",
  },
  {
    anilistId: 141350,
    themeKeys: [
      "OP:1",
      "ED:1", "ED:2", "ED:3", "ED:4", "ED:5", "ED:6", "ED:7",
      "ED:8", "ED:9", "ED:10", "ED:11", "ED:12", "ED:13",
    ],
    label: "《女忍者椿的心事》官方音樂頁：OP 與十三組輪替 ED",
    firstPartyUrl: "https://kunoichi-tsubaki.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/kunoichi_tsubaki_no_mune_no_uchi",
  },
  {
    anilistId: 129201,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2", "ED:3"],
    label: "《夏日時光》官方音樂頁：前後半 OP／ED 與特別版本",
    firstPartyUrl: "https://summertime-anime.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/summer_time_render",
  },
  {
    anilistId: 134732,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《青之蘆葦》官方音樂頁：前後半 OP／ED",
    firstPartyUrl: "https://aoashi-pr.com/season1/music/",
    crossCheckUrl: "https://animethemes.moe/anime/ao_ashi",
  },
  {
    anilistId: 132052,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《杜鵑婚約》第一季官網：前後半 OP／ED",
    firstPartyUrl: "https://cuckoos-anime.com/season1/",
    crossCheckUrl: "https://animethemes.moe/anime/kakkou_no_iinazuke",
  },
  {
    anilistId: 137281,
    themeKeys: ["OP:1"],
    label: "《不會拿捏距離的阿波連同學》第一季官方 OP 資料",
    firstPartyUrl: "https://aharen-pr.com/1st/music/op/",
    crossCheckUrl: "https://animethemes.moe/anime/aharen_san_wa_hakarenai",
  },
  {
    anilistId: 137281,
    themeKeys: ["ED:1", "ED:2"],
    label: "《不會拿捏距離的阿波連同學》第一季官方 ED 資料",
    firstPartyUrl: "https://aharen-pr.com/1st/music/ed/",
    crossCheckUrl: "https://animethemes.moe/anime/aharen_san_wa_hakarenai",
  },
  {
    anilistId: 140960,
    themeKeys: ["OP:1", "ED:1"],
    label: "《SPY×FAMILY 間諜家家酒》官方音樂頁",
    firstPartyUrl: "https://spy-family.net/tvseries/music/",
    crossCheckUrl: "https://animethemes.moe/anime/spy_x_family",
  },
  {
    anilistId: 148819,
    themeKeys: ["OP:1"],
    label: "IzanagiGames 官方發行公告：動畫主題曲與演唱者",
    firstPartyUrl: "https://izanagigames.co.jp/2022/05/15/%E3%80%90%E6%96%B0%E6%9B%B2%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%80%91%E5%91%82%E5%B8%83%E3%82%AB%E3%83%AB%E3%83%9E%E3%81%AE%E6%96%B0%E6%9B%B2%E3%81%AF%E3%82%A2%E3%83%8B%E3%83%A1%E4%B8%BB%E9%A1%8C/",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=15221",
    crossCheckLanguage: "ja",
  },
];

function sourcesFor(group: ReviewedThemeGroup): readonly CuratedThemeSourceSeed[] {
  return [
    {
      label: group.label,
      url: group.firstPartyUrl,
      language: "ja",
      role: "first_party",
    },
    {
      label: group.anilistId === 148819
        ? "Animate Times：季度身份與主題曲交叉核對"
        : "AnimeThemes：OP／ED 用途、版本與演唱者交叉核對",
      url: group.crossCheckUrl,
      language: group.crossCheckLanguage ?? "en",
      role: "cross_check",
    },
  ];
}

export const curated2022SpringThemeSources = Object.fromEntries(
  reviewedThemeGroups.flatMap((group) => group.themeKeys.map((themeKey) => [
    `${group.anilistId}:${themeKey}`,
    sourcesFor(group),
  ])),
) satisfies CuratedThemeSourceOverrideMap;
