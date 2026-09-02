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
}

const reviewedThemeGroups: readonly ReviewedThemeGroup[] = [
  {
    anilistId: 116259,
    themeKeys: ["OP:1", "OP:2"],
    label: "《小妖怪》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://www.shopro.co.jp/tv/obakezukan/1st_series/index.html",
    crossCheckUrl: "https://anidb.net/anime/15419",
  },
  {
    anilistId: 104937,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4"],
    label:
      "《Lapis Re:LiGHTs ～這個世界的偶像會用魔法～》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://www.klab.com/jp/press/release/2020/0512/tv20207a.html",
    crossCheckUrl: "https://animethemes.moe/anime/lapis_relights",
  },
  {
    anilistId: 112301,
    themeKeys: ["OP:1", "OP:2", "ED:1"],
    label:
      "《魔王學院的不適任者～史上最強的魔王始祖，轉生就讀子孫們的學校～》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://maohgakuin.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/maou_gakuin_no_futekigousha_shijou_saikyou_no_maou_no_shiso_tensei_shite_shison_tachi_no_gakkou_e",
  },
  {
    anilistId: 112818,
    themeKeys: ["OP:1", "ED:1"],
    label: "《弩級戰隊 HXEROS》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://hxeros.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/dokyuu_hentai_hxeros",
  },
  {
    anilistId: 114236,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2", "ED:3"],
    label: "《炎炎消防隊 貳之章》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://fireforce-anime.jp/season2/",
    crossCheckUrl:
      "https://animethemes.moe/anime/enen_no_shouboutai_ni_no_shou",
  },
  {
    anilistId: 112258,
    themeKeys: ["ED:1"],
    label: "《超普通都市柏傳說R》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://3rd.chofutsu.com/",
    crossCheckUrl: "https://anidb.net/anime/15029",
  },
  {
    anilistId: 116006,
    themeKeys: ["OP:1", "ED:1"],
    label: "《高校之神》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://goh-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/the_god_of_high_school",
  },
  {
    anilistId: 108941,
    themeKeys: ["ED:1", "ED:2", "ED:3"],
    label: "《賽馬娘四格》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://umamusume.jp/umayon/",
    crossCheckUrl: "https://animethemes.moe/anime/umayon",
  },
  {
    anilistId: 110028,
    themeKeys: ["OP:1", "ED:1"],
    label: "《魔法律事務所 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://mahouritsu.com/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/muhyo_to_rouji_no_mahouritsu_soudan_jimusho_2nd_season",
  },
  {
    anilistId: 108632,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《Re：從零開始的異世界生活 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://re-zero.com/tv/",
    crossCheckUrl:
      "https://animethemes.moe/anime/rezero_kara_hajimeru_isekai_seikatsu_2nd_season",
  },
  {
    anilistId: 110353,
    themeKeys: ["OP:1", "ED:1"],
    label: "《DECA-DENCE》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://decadence-anime.com/news.html",
    crossCheckUrl: "https://animethemes.moe/anime/deca_dence",
  },
  {
    anilistId: 112357,
    themeKeys: ["OP:1", "ED:1"],
    label: "《日本沉沒2020》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://japansinks2020.com/",
    crossCheckUrl: "https://animethemes.moe/anime/nihon_chinbotsu_2020",
  },
  {
    anilistId: 108489,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4"],
    label:
      "《果然我的青春戀愛喜劇搞錯了。完》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tbs.co.jp/anime/oregairu/",
    crossCheckUrl:
      "https://animethemes.moe/anime/yahari_ore_no_seishun_love_comedy_wa_machigatteiru_kan",
  },
  {
    anilistId: 112803,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《NO GUNS LIFE 非槍人生 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://www.sonymusic.co.jp/artist/sawanohiroyukinzk/info/516505",
    crossCheckUrl: "https://animethemes.moe/anime/no_guns_life_2nd_season",
  },
  {
    anilistId: 115113,
    themeKeys: ["OP:1", "ED:1"],
    label: "《宇崎學妹想要玩！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://uzakichan.com/special/comment_artist.php",
    crossCheckUrl: "https://animethemes.moe/anime/uzaki_chan_wa_asobitai",
  },
  {
    anilistId: 111965,
    themeKeys: ["OP:1", "ED:1"],
    label: "《彼得・格里爾的賢者時間》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://petergrill-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/peter_grill_to_kenja_no_jikan",
  },
  {
    anilistId: 113813,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3"],
    label: "《出租女友》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kanokari-official.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/kanojo_okarishimasu",
  },
  {
    anilistId: 113286,
    themeKeys: ["OP:1", "ED:1"],
    label: "《魔物娘的醫生》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://mon-isha-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/monster_musume_no_oisha_san",
  },
  {
    anilistId: 114308,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《刀劍神域 Alicization War of Underworld 最終章》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://sao-alicization.net/",
    crossCheckUrl:
      "https://animethemes.moe/anime/sword_art_online_alicization_war_of_underworld_2nd_season",
  },
  {
    anilistId: 120180,
    themeKeys: ["ED:1"],
    label: "《忍者收藏》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/nin_colle/",
    crossCheckUrl: "https://animethemes.moe/anime/ninja_collection",
  },
  {
    anilistId: 110446,
    themeKeys: ["OP:1", "ED:1"],
    label: "《GIBIATE 獵魔武士》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://gibiate.com/anime/jp/",
    crossCheckUrl: "https://animethemes.moe/anime/gibiate",
  },
  {
    anilistId: 110371,
    themeKeys: ["OP:1", "ED:1"],
    label: "《戀與製作人》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://koipro-anime.love/",
    crossCheckUrl: "https://animethemes.moe/anime/koi_to_producer_evollove",
  },
  {
    anilistId: 119696,
    themeKeys: ["OP:1", "ED:1"],
    label: "《女武神的餐桌II》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.bs4.jp/valkyrie2/",
    crossCheckUrl: "https://anidb.net/anime/15614",
  },
  {
    anilistId: 120046,
    themeKeys: ["OP:1"],
    label: "《快把我哥帶走 第4季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anitsuke.com/",
    crossCheckUrl: "https://anidb.net/anime/15600",
  },
  {
    anilistId: 114943,
    themeKeys: ["ED:1"],
    label: "《Battle Spirits 赫盟的加雷特》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://www.bn-pictures.co.jp/news/news_detail.html?id=18077",
    crossCheckUrl: "https://anidb.net/anime/15368",
  },
  {
    anilistId: 120325,
    themeKeys: ["OP:1", "ED:1"],
    label: "《神奇柑仔店》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/zenitendo/",
    crossCheckUrl: "https://cal.syoboi.jp/tid/5742",
  },
];

function sourcesFor(
  group: ReviewedThemeGroup,
): readonly CuratedThemeSourceSeed[] {
  return [
    {
      label: group.label.replace("OP／ED 用途與演唱者", "曲名與演唱者"),
      url: group.firstPartyUrl,
      language: "ja",
      role: "first_party",
    },
    {
      label: group.crossCheckUrl.includes("animethemes.moe")
        ? "AnimeThemes：OP／ED 用途、版本與演唱者交叉核對"
        : "公開歌曲資料：用途與演唱者交叉核對",
      url: group.crossCheckUrl,
      language: group.crossCheckUrl.includes("anidb.net") ? "multi" : "ja",
      role: "cross_check",
    },
  ];
}

export const curated2020SummerThemeSources = Object.fromEntries(
  reviewedThemeGroups.flatMap((group) =>
    group.themeKeys.map((themeKey) => [
      `${group.anilistId}:${themeKey}`,
      sourcesFor(group),
    ]),
  ),
) satisfies CuratedThemeSourceOverrideMap;
