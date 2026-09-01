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
    anilistId: 131942,
    themeKeys: ["OP:1", "ED:1"],
    label: "《JOJO的奇妙冒險：石之海》官方音樂頁：第一部分 OP／ED",
    firstPartyUrl: "https://jojo-portal.com/en/anime/so/music/",
    crossCheckUrl: "https://animethemes.moe/anime/jo_jo_no_kimyou_na_bouken_part_6_stone_ocean",
  },
  {
    anilistId: 130389,
    themeKeys: ["OP:1"],
    label: "《魔法科高中的劣等生 追憶篇》官方音樂頁：主題曲與演唱者",
    firstPartyUrl: "https://mahouka.jp/tsuioku/music/",
    crossCheckUrl: "https://www.joysound.com/web/s/karaoke/contents/anime/list_2201",
    crossCheckLanguage: "ja",
  },
  {
    anilistId: 140700,
    themeKeys: ["ED:1"],
    label: "Yostar Pictures 官方作品頁：片尾曲與演唱組合",
    firstPartyUrl: "https://yostar-pictures.co.jp/works/detail/2015/",
    crossCheckUrl: "https://www.joysound.com/web/s/karaoke/contents/anime/list_2201",
    crossCheckLanguage: "ja",
  },
  {
    anilistId: 131681,
    themeKeys: ["OP:1", "ED:1"],
    label: "《進擊的巨人 The Final Season》官方音樂頁：Part 2 OP／ED",
    firstPartyUrl: "https://shingeki.tv/final/music/",
    crossCheckUrl: "https://animethemes.moe/anime/shingeki_no_kyojin_the_final_season_part_2",
  },
  {
    anilistId: 132405,
    themeKeys: ["OP:1", "ED:1"],
    label: "《戀上換裝娃娃》第一季官方音樂頁：OP／ED",
    firstPartyUrl: "https://bisquedoll-anime.com/1st/music/",
    crossCheckUrl: "https://animethemes.moe/anime/sono_bisque_doll_wa_koi_wo_suru",
  },
  {
    anilistId: 131548,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3"],
    label: "《明日同學的水手服》官方音樂頁：OP 與三組 ED 用途",
    firstPartyUrl: "https://akebi-chan.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/akebi_chan_no_sailor_fuku",
  },
  {
    anilistId: 138424,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4", "ED:5", "ED:6", "ED:7", "ED:8"],
    label: "《擅長捉弄人的高木同學》第三季官方音樂頁：OP 與八首輪替 ED",
    firstPartyUrl: "https://takagi3.me/3rd/music/",
    crossCheckUrl: "https://animethemes.moe/anime/karakai_jouzu_no_takagi_san_3",
  },
  {
    anilistId: 125682,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《CUE!》官方第一季度唱片頁：OP 與輪替 ED",
    firstPartyUrl: "https://cue-animation.jp/product/cd/oped/",
    crossCheckUrl: "https://animethemes.moe/anime/cue",
  },
  {
    anilistId: 125682,
    themeKeys: ["OP:2", "ED:3", "ED:4", "ED:5"],
    label: "《CUE!》官方第二季度唱片頁：OP 與輪替 ED",
    firstPartyUrl: "https://cue-animation.jp/product/cd/oped2/",
    crossCheckUrl: "https://animethemes.moe/anime/cue",
  },
  {
    anilistId: 122808,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《超異域公主連結！Re:Dive》第二季官方音樂頁",
    firstPartyUrl: "https://anime.priconne-redive.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/princess_connect_redive_season_2",
  },
  {
    anilistId: 130591,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3"],
    label: "《食鏽末世錄》官方音樂頁：OP 與三種 ED",
    firstPartyUrl: "https://sabikuibisco.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/sabikui_bisco",
  },
  {
    anilistId: 127549,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《SLOW LOOP》官方歌曲公告：OP、ED 與特別 ED",
    firstPartyUrl: "https://slowlooptv.com/news/article_0016.html",
    crossCheckUrl: "https://animethemes.moe/anime/slow_loop",
  },
  {
    anilistId: 143415,
    themeKeys: ["OP:1"],
    label: "日本哥倫比亞官方發行公告：《午間的修卡先生》主題曲",
    firstPartyUrl: "https://prtimes.jp/main/html/rd/p/000002258.000019470.html",
    crossCheckUrl: "https://www.joysound.com/web/s/karaoke/contents/anime/list_2201",
    crossCheckLanguage: "ja",
  },
  {
    anilistId: 139592,
    themeKeys: ["OP:1", "ED:1"],
    label: "Tales Channel 官方作品頁：動畫 OP／ED 與演唱者",
    firstPartyUrl: "https://tales-ch.jp/titles/toluminaria/",
    crossCheckUrl: "https://frederic-official.com/news/detail/2086",
    crossCheckLanguage: "ja",
  },
  {
    anilistId: 101705,
    themeKeys: ["ED:1"],
    label: "《地球外少年少女》官方音樂頁：一般主題曲分類與演唱者",
    firstPartyUrl: "https://chikyugai.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/chikyuugai_shounen_shoujo",
  },
  {
    anilistId: 137378,
    themeKeys: ["OP:1", "ED:1"],
    label: "《永遠的831》官方網站：開場曲與一般主題曲",
    firstPartyUrl: "https://www.wowow.co.jp/detail/170982",
    crossCheckUrl: "https://angela-official.com/news/10853",
    crossCheckLanguage: "ja",
  },
  {
    anilistId: 140502,
    themeKeys: ["OP:1", "ED:1"],
    label: "《白領羽球部》官方音樂頁：OP／ED",
    firstPartyUrl: "https://rymansclub.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/rymans_club",
  },
  {
    anilistId: 139589,
    themeKeys: ["OP:1", "ED:1"],
    label: "《小太郎一個人生活》官方音樂頁：OP／ED",
    firstPartyUrl: "https://kotaro-anime.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/kotarou_wa_hitorigurashi",
  },
  {
    anilistId: 124060,
    themeKeys: ["OP:1", "ED:1"],
    label: "《薔薇王的葬列》官方前半音樂公告：OP／ED",
    firstPartyUrl: "https://baraou-anime.com/news/20211024/",
    crossCheckUrl: "https://animethemes.moe/anime/baraou_no_souretsu",
  },
  {
    anilistId: 124060,
    themeKeys: ["OP:2", "ED:2"],
    label: "《薔薇王的葬列》官方後半唱片頁：OP／ED",
    firstPartyUrl: "https://baraou-anime.com/goods/music/music02.html",
    crossCheckUrl: "https://animethemes.moe/anime/baraou_no_souretsu",
  },
  {
    anilistId: 109820,
    themeKeys: ["OP:1", "ED:1"],
    label: "Victor Entertainment 官方發行頁：《鏽色鎧甲 黎明》主題曲",
    firstPartyUrl: "https://www.jvcmusic.co.jp/-/News/A027043/1.html",
    crossCheckUrl: "https://animethemes.moe/anime/sabiiro_no_armor_reimei",
  },
  {
    anilistId: 135136,
    themeKeys: ["OP:1", "ED:1"],
    label: "《瓦尼塔斯的手札》官方音樂頁：後半 OP／ED",
    firstPartyUrl: "https://vanitas-anime.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/vanitas_no_karte_part_2",
  },
  {
    anilistId: 136428,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《怪人開發部的黑井津小姐》官方音樂頁：OP 與兩組 ED",
    firstPartyUrl: "https://kuroitsusan-anime.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/kaijin_kaihatsu_bu_no_kuroitsu_san",
  },
  {
    anilistId: 126288,
    themeKeys: ["OP:1", "ED:1"],
    label: "《佐佐木與宮野》第一季官方音樂頁：OP／ED",
    firstPartyUrl: "https://sasamiya.com/1st/music/index.html",
    crossCheckUrl: "https://animethemes.moe/anime/sasaki_to_miyano",
  },
  {
    anilistId: 140643,
    themeKeys: ["OP:1", "ED:1"],
    label: "《東京24區》官方音樂頁：OP／ED",
    firstPartyUrl: "https://tokyo24project.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/tokyo_24_ku",
  },
  {
    anilistId: 142216,
    themeKeys: ["OP:1", "ED:1"],
    label: "Sony Music 官方公告：《女學。II》OP／ED 曲名與影片",
    firstPartyUrl: "https://www.sonymusic.co.jp/artist/Lucky2/info/537030",
    crossCheckUrl: "https://animemusicranking.com/ja/series/317/",
    crossCheckLanguage: "ja",
  },
  {
    anilistId: 144852,
    themeKeys: ["ED:1"],
    label: "演出者官方公告：《寶寶本部長》新作 ED 與演唱者",
    firstPartyUrl: "https://www.yuiyuimakino.com/news/detail.php?id=579",
    crossCheckUrl: "https://www.anisil.com/animes/5203-%E8%B5%A4%E3%81%A1%E3%82%83%E3%82%93%E6%9C%AC%E9%83%A8%E9%95%B7%28%E7%AC%AC2%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%29",
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
      label: group.crossCheckUrl.includes("animethemes.moe")
        ? "AnimeThemes：OP／ED 用途、版本與演唱者交叉核對"
        : "日文歌曲資料：季度用途與演唱者交叉核對",
      url: group.crossCheckUrl,
      language: group.crossCheckLanguage ?? "en",
      role: "cross_check",
    },
  ];
}

export const curated2022WinterThemeSources = Object.fromEntries(
  reviewedThemeGroups.flatMap((group) => group.themeKeys.map((themeKey) => [
    `${group.anilistId}:${themeKey}`,
    sourcesFor(group),
  ])),
) satisfies CuratedThemeSourceOverrideMap;
