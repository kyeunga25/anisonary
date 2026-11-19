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
    anilistId: 113472,
    themeKeys: [
      "OP:1",
      "OP:2",
      "OP:3",
      "ED:1",
      "ED:2",
      "ED:3",
      "ED:4",
      "ED:5",
      "ED:6",
      "ED:7",
      "ED:8",
      "ED:9",
      "ED:10",
      "ED:11",
    ],
    label: "《妖怪學園Y ～第N類接觸～》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/youkai-watch2020/",
    crossCheckUrl:
      "https://animethemes.moe/anime/youkai_watch_jam_youkai_gakuen_y_n_to_no_souguu",
  },
  {
    anilistId: 108092,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《戀愛中的小行星》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://koiastv.com/",
    crossCheckUrl: "https://animethemes.moe/anime/koisuru_asteroid",
  },
  {
    anilistId: 105190,
    themeKeys: ["OP:1", "ED:1"],
    label: "《達爾文遊戲》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://darwins-game.com/",
    crossCheckUrl: "https://animethemes.moe/anime/darwins_game",
  },
  {
    anilistId: 114417,
    themeKeys: ["OP:1"],
    label: "《へんたつ》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.aniplex.co.jp/news/detail/?id=53447",
    crossCheckUrl: "https://animethemes.moe/anime/hentatsu",
  },
  {
    anilistId: 104051,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《魔法紀錄 魔法少女小圓外傳》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime.magireco.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/magia_record_mahou_shoujo_madokamagica_gaiden",
  },
  {
    anilistId: 110090,
    themeKeys: ["ED:1"],
    label: "《八十龜醬觀察日記 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://yatogame.nagoya/",
    crossCheckUrl:
      "https://animethemes.moe/anime/yatogame_chan_kansatsu_nikki_nisatsume",
  },
  {
    anilistId: 113469,
    themeKeys: ["ED:1", "ED:2", "ED:3", "ED:4", "ED:5", "ED:6", "ED:7"],
    label: "《Rebirth》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://rebirth-fy.com/anime/",
    crossCheckUrl: "https://bushiroad-music.com/topics/881/",
  },
  {
    anilistId: 101350,
    themeKeys: ["OP:1", "ED:1"],
    label: "《pet》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://pet-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/pet",
  },
  {
    anilistId: 104461,
    themeKeys: ["ED:1"],
    label: "《房間露營△》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://yurucamp.jp/first/heyacamp/",
    crossCheckUrl: "https://animethemes.moe/anime/heya_camp",
  },
  {
    anilistId: 109298,
    themeKeys: ["OP:1", "ED:1"],
    label: "《別對映像研出手！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://eizouken-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/eizouken_ni_wa_te_wo_dasu_na",
  },
  {
    anilistId: 110350,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《ID:INVADED》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://id-invaded-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/idinvaded",
  },
  {
    anilistId: 114657,
    themeKeys: ["OP:1"],
    label: "《まるまるマヌル》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://music.apple.com/jp/song/1540037058",
    crossCheckUrl: "https://youranimes.tw/animes/173",
  },
  {
    anilistId: 101367,
    themeKeys: ["OP:1", "ED:1"],
    label: "《魔術士歐菲流浪之旅》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://ssorphen-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/majutsushi_orphen_hagure_tabi",
  },
  {
    anilistId: 112293,
    themeKeys: ["OP:1", "ED:1"],
    label: "《成群結伴！西頓學園》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime-seton.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/murenase_seton_gakuen",
  },
  {
    anilistId: 113397,
    themeKeys: ["ED:1"],
    label: "《緣結熊本》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://insprdia.jp/",
    crossCheckUrl: "https://www.mau2.com/anime/natunagu",
  },
  {
    anilistId: 106479,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《怕痛的我，把防禦力點滿就對了。》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://bofuri.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/itai_no_wa_iya_nano_de_bougyoryoku_ni_kyokufuri_shitai_to_omoimasu",
  },
  {
    anilistId: 108628,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3"],
    label: "《number24》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://number24-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/number24",
  },
  {
    anilistId: 113463,
    themeKeys: ["ED:1"],
    label: "《フライングベイビーズ☆プチ》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://hulaingbabies.com/",
    crossCheckUrl: "https://youranimes.tw/animes/399",
  },
  {
    anilistId: 98515,
    themeKeys: ["OP:1", "ED:1"],
    label: "《奇幻怪盜 Hatena☆Illusion》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://hatenaillusion-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/hatenaillusion",
  },
  {
    anilistId: 101168,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《掠奪者》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://plunderer-info.com/",
    crossCheckUrl: "https://animethemes.moe/anime/plunderer",
  },
  {
    anilistId: 106863,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3"],
    label: "《貓娘樂園》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://nekopara-anime.com/ja/",
    crossCheckUrl: "https://animethemes.moe/anime/nekopara",
  },
  {
    anilistId: 107420,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《〈Infinite Dendrogram〉-無盡連鎖-》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.dendro-anime.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/infinite_dendrogram",
  },
  {
    anilistId: 108450,
    themeKeys: ["OP:1", "ED:1"],
    label: "《空挺 Dragons》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://drifting-dragons.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/kuutei_dragons",
  },
  {
    anilistId: 111951,
    themeKeys: ["OP:1", "ED:1"],
    label: "《寶石商人理察的謎鑑定》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://jeweler-richard.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/housekishou_richard_shi_no_nazo_kantei",
  },
  {
    anilistId: 113470,
    themeKeys: ["OP:1", "OP:2", "ED:1"],
    label: "《SHOW BY ROCK!! 活力棉花糖!!》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://showbyrock-anime-m.com/sp/",
    crossCheckUrl: "https://animethemes.moe/anime/show_by_rock_mashumairesh",
  },
  {
    anilistId: 104391,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label:
      "《神推偶像登上武道館我就死而無憾》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://oshibudo.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/oshi_ga_budoukan_ittekuretara_shinu",
  },
  {
    anilistId: 104462,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《科學超電磁砲T》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://toaru-project.com/railgun_3/",
    crossCheckUrl: "https://animethemes.moe/anime/toaru_kagaku_no_railgun_t",
  },
  {
    anilistId: 108463,
    themeKeys: ["OP:1", "ED:1"],
    label: "《地縛少年花子君》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tbs.co.jp/anime/hanakokun/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/jibaku_shounen_hanako_kun",
  },
  {
    anilistId: 108617,
    themeKeys: ["OP:1", "ED:1"],
    label: "《索瑪麗與森林之神》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://somali-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/somali_to_mori_no_kamisama",
  },
  {
    anilistId: 109964,
    themeKeys: [
      "OP:1",
      "ED:1",
      "ED:2",
      "ED:3",
      "ED:4",
      "ED:5",
      "ED:6",
      "ED:7",
      "ED:8",
      "ED:9",
      "ED:10",
      "ED:11",
    ],
    label:
      "《家有圓圓？！～我家的圓圓你知道嗎？～》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://uchitama.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/uchi_tama_uchi_no_tama_shirimasen_ka",
  },
  {
    anilistId: 99807,
    themeKeys: [
      "OP:1",
      "ED:1",
      "ED:2",
      "ED:3",
      "ED:4",
      "ED:5",
      "ED:6",
      "ED:7",
      "ED:8",
      "ED:9",
    ],
    label: "《22/7》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://227anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/227",
  },
  {
    anilistId: 104936,
    themeKeys: ["OP:1", "ED:1"],
    label: "《暗黑破壞神在身邊。》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://bokuhaka-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/boku_no_tonari_ni_ankoku_hakaishin_ga_imasu",
  },
  {
    anilistId: 106625,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《排球少年!! 第四季： TO THE TOP》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://haikyu.jp/season4/",
    crossCheckUrl: "https://animethemes.moe/anime/haikyuu_to_the_top",
  },
  {
    anilistId: 107067,
    themeKeys: ["OP:1", "ED:1"],
    label: "《試證明理科生已墜入情網。》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://rikekoi.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/rikei_ga_koi_ni_ochita_no_de_shoumei_shitemita",
  },
  {
    anilistId: 110495,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4", "ED:5"],
    label: "《言靈少女》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kotodama-shoujo.com/movie/",
    crossCheckUrl: "https://youranimes.tw/animes/323",
  },
  {
    anilistId: 110613,
    themeKeys: ["OP:1", "ED:1"],
    label: "《織田肉桂信長》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://nobunaga-cinnamon.com/",
    crossCheckUrl: "https://animethemes.moe/anime/oda_cinnamon_nobunaga",
  },
  {
    anilistId: 111501,
    themeKeys: ["OP:1", "ED:1"],
    label: "《請在伸展台上微笑》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://runway-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/runway_de_waratte",
  },
  {
    anilistId: 107201,
    themeKeys: ["OP:1", "ED:1"],
    label: "《虛構推理》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kyokousuiri.jp/season1/",
    crossCheckUrl: "https://animethemes.moe/anime/kyokou_suiri",
  },
  {
    anilistId: 105228,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4", "ED:5", "ED:6"],
    label: "《異獸魔都》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://dorohedoro.net/goods/music.html",
    crossCheckUrl: "https://animethemes.moe/anime/dorohedoro",
  },
  {
    anilistId: 110615,
    themeKeys: ["OP:1", "ED:1"],
    label: "《ARP Backstage Pass》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://arp-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/arp_backstage_pass",
  },
  {
    anilistId: 107651,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《A3! SEASON SPRING & SUMMER》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.a3-animation.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/a3_season_spring_summer",
  },
  {
    anilistId: 110178,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《異世界四重奏2》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://isekai-quartet.com/tv/",
    crossCheckUrl: "https://animethemes.moe/anime/isekai_quartet_2",
  },
  {
    anilistId: 101634,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3"],
    label: "《BanG Dream！第三季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime.bang-dream.com/3rd/",
    crossCheckUrl: "https://animethemes.moe/anime/bang_dream_3rd_season",
  },
  {
    anilistId: 114448,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《聖鬥士星矢：黃道十二宮戰士 Part 2》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.saintseiya-kotz.com/pc/music/",
    crossCheckUrl: "https://youranimes.tw/animes/137",
  },
  {
    anilistId: 112033,
    themeKeys: [
      "OP:1",
      "ED:1",
      "ED:2",
      "ED:3",
      "ED:4",
      "ED:5",
      "ED:6",
      "ED:7",
      "ED:8",
    ],
    label: "《ZENONZARD THE ANIMATION》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.aicarddass.com/zenonzard/anime/",
    crossCheckUrl: "https://anison.online/season?season_id=13",
  },
  {
    anilistId: 112748,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《元氣魔法 ♥ 光之美少女》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/healingood_precure/",
    crossCheckUrl: "https://animethemes.moe/anime/healin_goodprecure",
  },
  {
    anilistId: 109586,
    themeKeys: ["OP:1", "ED:1"],
    label: "《蟲籠的卡伽斯特爾》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.cagaster.com/",
    crossCheckUrl: "https://animethemes.moe/anime/mushikago_no_cagaster",
  },
  {
    anilistId: 110354,
    themeKeys: ["OP:1", "ED:1"],
    label: "《動物新世代 BNA》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://bna-anime.com/music/",
    crossCheckUrl: "https://anison.online/season?season_id=13",
  },
  {
    anilistId: 115519,
    themeKeys: [
      "ED:1",
      "ED:2",
      "ED:3",
      "ED:4",
      "ED:5",
      "ED:6",
      "ED:7",
      "ED:8",
      "ED:9",
      "ED:10",
      "ED:11",
      "ED:12",
      "ED:13",
      "ED:14",
      "ED:15",
      "ED:16",
    ],
    label: "《灰姑娘女孩劇場 Extra Stage》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://cinderella-library.idolmaster-official.jp/history/detail/?p=20200324_1",
    crossCheckUrl: "https://anison.online/season?season_id=13",
  },
  {
    anilistId: 112686,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《7SEEDS 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://7seeds.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/7_seeds_2nd_season",
  },
  {
    anilistId: 131459,
    themeKeys: ["OP:1", "ED:1"],
    label: "《WASIMO 第八季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.nhk.jp/p/wasimo/ts/K7N4Z3MV5X/",
    crossCheckUrl: "https://anison.online/season?season_id=13",
  },
];

function sourcesFor(
  row: ReviewedThemeGroup,
): readonly CuratedThemeSourceSeed[] {
  return [
    {
      label: row.label,
      url: row.firstPartyUrl,
      language: row.firstPartyUrl.includes("youtube.com") ? "multi" : "ja",
      role: "first_party",
    },
    {
      label: "公開資料：OP／ED 用途、版本與演唱者交叉核對",
      url: row.crossCheckUrl,
      language:
        row.crossCheckUrl.includes("youranimes.tw") ||
        row.crossCheckUrl.includes("acgsecrets.hk")
          ? "zh-Hant"
          : "multi",
      role: "cross_check",
    },
  ];
}

export const curated2020WinterThemeSources = Object.fromEntries(
  reviewedThemeGroups.flatMap((row) =>
    row.themeKeys.map((themeKey) => [
      `${row.anilistId}:${themeKey}`,
      sourcesFor(row),
    ]),
  ),
) satisfies CuratedThemeSourceOverrideMap;
