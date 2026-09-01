import type { CuratedThemeSourceOverrideMap, CuratedThemeSourceSeed } from "@/data/curated-theme-sources/types";

interface ReviewedThemeGroup {
  anilistId: number;
  themeKeys: readonly `${"OP" | "ED"}:${number}`[];
  label: string;
  firstPartyUrl: string;
  crossCheckUrl: string;
}

const reviewedThemeGroups: readonly ReviewedThemeGroup[] = [
  {
    anilistId: 131149,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《暮蟬悲鳴時卒》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://higurashianime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/higurashi_no_naku_koro_ni_sotsu"
  },
  {
    anilistId: 131150,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《緋紅結繫》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://snx-anime.net/music/",
    crossCheckUrl: "https://animethemes.moe/anime/scarlet_nexus"
  },
  {
    anilistId: 122441,
    themeKeys: ["OP:1", "ED:1"],
    label: "《桃子男孩渡海而來》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://peachboyriverside.com/",
    crossCheckUrl: "https://animethemes.moe/anime/peach_boy_riverside"
  },
  {
    anilistId: 114065,
    themeKeys: ["OP:1", "ED:1"],
    label: "《我們的重製人生》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://bokurema.com/news/83/",
    crossCheckUrl: "https://animethemes.moe/anime/bokutachi_no_remake"
  },
  {
    anilistId: 120209,
    themeKeys: ["OP:1", "ED:1"],
    label: "《轉生成女性向遊戲只有毀滅 END 的壞人大小姐 X》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://hamehura-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/otome_game_no_hametsu_flag_shika_nai_akuyaku_reijou_ni_tensei_shiteshimatta_x"
  },
  {
    anilistId: 126192,
    themeKeys: ["OP:1", "ED:1"],
    label: "《女朋友 and 女朋友》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kanokano-anime.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/kanojo_mo_kanojo"
  },
  {
    anilistId: 127688,
    themeKeys: ["OP:1", "ED:1"],
    label: "《魔法科高中的優等生》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://mahouka-yuutousei.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/mahouka_koukou_no_yuutousei"
  },
  {
    anilistId: 131646,
    themeKeys: ["OP:1", "ED:1"],
    label: "《瓦尼塔斯的手札》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://vanitas-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/vanitas_no_karte"
  },
  {
    anilistId: 117612,
    themeKeys: ["OP:1", "ED:1"],
    label: "《現實主義勇者的王國重建記》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://genkoku-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/genjitsu_shugi_yuusha_no_oukoku_saikenki"
  },
  {
    anilistId: 125446,
    themeKeys: ["OP:1"],
    label: "《歌劇少女！！》官方音樂頁：片頭曲〈星のオーケストラ〉",
    firstPartyUrl: "https://kageki-anime.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/kageki_shoujo"
  },
  {
    anilistId: 125446,
    themeKeys: ["ED:1", "ED:2"],
    label: "《歌劇少女！！》官方片尾曲頁：片尾曲與演唱組合",
    firstPartyUrl: "https://kageki-anime.com/music/ed.html",
    crossCheckUrl: "https://animethemes.moe/anime/kageki_shoujo"
  },
  {
    anilistId: 125446,
    themeKeys: ["ED:3", "ED:4", "ED:5"],
    label: "《歌劇少女！！》官方音樂集頁：特殊片尾曲與演唱版本",
    firstPartyUrl: "https://kageki-anime.com/music/music_collection.html",
    crossCheckUrl: "https://animethemes.moe/anime/kageki_shoujo"
  },
  {
    anilistId: 125640,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4"],
    label: "《三一萬能俠 ARC》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://getterrobot-arc.com/",
    crossCheckUrl: "https://animethemes.moe/anime/getter_robo_arc"
  },
  {
    anilistId: 127721,
    themeKeys: ["OP:1", "ED:1"],
    label: "《IDOLiSH7 偶像星願 Third BEAT!》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://idolish7.com/aninana/news_cat/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idolish7_third_beat"
  },
  {
    anilistId: 128712,
    themeKeys: ["OP:1", "ED:1"],
    label: "《偵探已經，死了。》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://tanmoshi-anime.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/tantei_wa_mou_shindeiru"
  },
  {
    anilistId: 129277,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《死神少爺與黑女僕》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://bocchan-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/shinigami_bocchan_to_kuro_maid"
  },
  {
    anilistId: 130549,
    themeKeys: ["OP:1", "ED:1"],
    label: "《RE-MAIN》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://re-main.net/",
    crossCheckUrl: "https://animethemes.moe/anime/re_main"
  },
  {
    anilistId: 112802,
    themeKeys: ["OP:1", "ED:1"],
    label: "《陰晴不定的體操哥哥》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/uramichi/music/",
    crossCheckUrl: "https://animethemes.moe/anime/uramichi_oniisan"
  },
  {
    anilistId: 116742,
    themeKeys: ["OP:1", "ED:1"],
    label: "《關於我轉生變成史萊姆這檔事 第二季 第二季度》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.ten-sura.com/anime/tensura",
    crossCheckUrl: "https://animethemes.moe/anime/tensei_shitara_slime_datta_ken_2nd_season_part_2"
  },
  {
    anilistId: 126546,
    themeKeys: ["OP:1", "ED:1"],
    label: "《精靈幻想記》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://seireigensouki.com/",
    crossCheckUrl: "https://animethemes.moe/anime/seirei_gensouki"
  },
  {
    anilistId: 114302,
    themeKeys: ["OP:1", "ED:1"],
    label: "《開掛藥師的異世界悠閒生活》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.cheat-kusushi.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/cheat_kusushi_no_slow_life_isekai_ni_tsukurou_drugstore"
  },
  {
    anilistId: 125206,
    themeKeys: ["OP:1"],
    label: "《月光下的異世界之旅》官方片頭曲頁：〈ギャンブル〉",
    firstPartyUrl: "https://tsukimichi.com/1st/music/op/",
    crossCheckUrl: "https://animethemes.moe/anime/tsuki_ga_michibiku_isekai_douchuu"
  },
  {
    anilistId: 125206,
    themeKeys: ["ED:1"],
    label: "《月光下的異世界之旅》官方消息：第 1 話特殊片尾曲",
    firstPartyUrl: "https://tsukimichi.com/1st/news/323/",
    crossCheckUrl: "https://animethemes.moe/anime/tsuki_ga_michibiku_isekai_douchuu"
  },
  {
    anilistId: 125206,
    themeKeys: ["ED:2"],
    label: "《月光下的異世界之旅》官方片尾曲頁：〈ビューティフル・ドリーマー〉",
    firstPartyUrl: "https://tsukimichi.com/1st/music/ed/",
    crossCheckUrl: "https://animethemes.moe/anime/tsuki_ga_michibiku_isekai_douchuu"
  },
  {
    anilistId: 125909,
    themeKeys: ["OP:1", "OP:2", "OP:3", "OP:4"],
    label: "《TSUKIPRO THE ANIMATION 2》官方音樂頁：四組片頭曲",
    firstPartyUrl: "https://tsukipro-anime.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukipro_the_animation_2"
  },
  {
    anilistId: 125909,
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
      "ED:13"
    ],
    label: "《TSUKIPRO THE ANIMATION 2》官方片尾曲合輯：第 1 至 13 話歌曲",
    firstPartyUrl: "https://tsukipro-anime.com/music/item-10/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukipro_the_animation_2"
  },
  {
    anilistId: 107717,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《小林家的龍女僕S》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://maidragon.jp/2nd/product/cd/soundtrack/",
    crossCheckUrl: "https://animethemes.moe/anime/kobayashi_san_chi_no_maid_dragon_s"
  },
  {
    anilistId: 120608,
    themeKeys: ["OP:1", "ED:1"],
    label: "《暗黑企業的迷宮》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://meikyubc-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/meikyuu_black_company"
  },
  {
    anilistId: 128545,
    themeKeys: ["OP:1", "OP:2"],
    label: "《白沙的 Aquatope》官方片頭曲頁：第一、二季度 OP",
    firstPartyUrl: "https://aquatope-anime.com/music-op/",
    crossCheckUrl: "https://animethemes.moe/anime/shiroi_suna_no_aquatope"
  },
  {
    anilistId: 128545,
    themeKeys: ["ED:1", "ED:2"],
    label: "《白沙的 Aquatope》官方片尾曲頁：第一、二季度 ED",
    firstPartyUrl: "https://aquatope-anime.com/music-ed/",
    crossCheckUrl: "https://animethemes.moe/anime/shiroi_suna_no_aquatope"
  },
  {
    anilistId: 127366,
    themeKeys: ["OP:1", "ED:1"],
    label: "《我立於百萬生命之上 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://1000000-lives.com/",
    crossCheckUrl: "https://animethemes.moe/anime/100_man_no_inochi_no_ue_ni_ore_wa_tatteiru_2nd_season"
  },
  {
    anilistId: 130997,
    themeKeys: ["OP:1", "ED:1"],
    label: "《D_CIDE TRAUMEREI THE ANIMATION》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://dctm-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/d_cide_traumerei_the_animation"
  },
  {
    anilistId: 114979,
    themeKeys: ["OP:1"],
    label: "《Love Live！Superstar!!》第一方 OP 影片：曲名與演唱者",
    firstPartyUrl: "https://www.youtube.com/watch?v=HGkoec4genw",
    crossCheckUrl: "https://animethemes.moe/anime/love_live_superstar"
  },
  {
    anilistId: 114979,
    themeKeys: ["ED:1"],
    label: "《Love Live！Superstar!!》第一方 ED 影片：曲名與演唱者",
    firstPartyUrl: "https://www.youtube.com/watch?v=A1bleJVhZeY",
    crossCheckUrl: "https://animethemes.moe/anime/love_live_superstar"
  },
  {
    anilistId: 135108,
    themeKeys: ["ED:1"],
    label: "《闇芝居 第九季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/yamishibai9/",
    crossCheckUrl: "https://animethemes.moe/anime/yami_shibai_9"
  },
  {
    anilistId: 126047,
    themeKeys: ["OP:1", "ED:1"],
    label: "《見面5秒後開始戰鬥》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://dea5-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/deatte_5_byou_de_battle"
  },
  {
    anilistId: 117989,
    themeKeys: ["OP:1", "ED:1"],
    label: "《女神宿舍的管理員。》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://megamiryou.com/",
    crossCheckUrl: "https://animethemes.moe/anime/megami_ryou_no_ryoubo_kun"
  },
  {
    anilistId: 125868,
    themeKeys: ["OP:1", "ED:1"],
    label: "《暗夜第六感 2041》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://nighthead2041.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/night_head_2041"
  },
  {
    anilistId: 131880,
    themeKeys: ["ED:1"],
    label: "《Obey Me!》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.youtube.com/watch?v=ppB30grCZcA",
    crossCheckUrl: "https://animethemes.moe/anime/obey_me"
  },
  {
    anilistId: 132126,
    themeKeys: ["ED:1"],
    label: "《漂流少年》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime.shochiku.co.jp/sonny-boy/",
    crossCheckUrl: "https://animethemes.moe/anime/sonny_boy"
  },
  {
    anilistId: 128703,
    themeKeys: ["ED:1"],
    label: "《突擊莉莉 Fruits》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime.assaultlily-pj.com/fruits/",
    crossCheckUrl: "https://animethemes.moe/anime/assault_lily_fruits"
  },
  {
    anilistId: 122434,
    themeKeys: ["OP:1", "ED:1"],
    label: "《平穩世代的韋駄天們》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://idaten-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/heion_sedai_no_idaten_tachi"
  },
  {
    anilistId: 117002,
    themeKeys: ["OP:1", "ED:1"],
    label: "《魔法紀錄 魔法少女小圓外傳 第二季：覺醒前夜》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime.magireco.com/",
    crossCheckUrl: "https://animethemes.moe/anime/magia_record_mahou_shoujo_madokamagica_gaiden_2nd_season"
  },
  {
    anilistId: 132456,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《賈希大人不氣餒！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://jahysama-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/jahy_sama_wa_kujikenai"
  },
  {
    anilistId: 122052,
    themeKeys: ["OP:1", "ED:1"],
    label: "《海賊王女》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://fena-pirate-princess.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kaizoku_oujo"
  }
];

function sourcesFor(group: ReviewedThemeGroup): readonly CuratedThemeSourceSeed[] {
  return [
    {
      label: group.label,
      url: group.firstPartyUrl,
      language: group.firstPartyUrl.includes("youtube.com") ? "multi" : "ja",
      role: "first_party"
    },
    {
      label: "AnimeThemes：OP／ED 用途、版本與演唱者交叉核對",
      url: group.crossCheckUrl,
      language: "en",
      role: "cross_check"
    }
  ];
}

export const curated2021SummerThemeSources = Object.fromEntries(
  reviewedThemeGroups.flatMap((group) =>
    group.themeKeys.map((themeKey) => [`${group.anilistId}:${themeKey}`, sourcesFor(group)])
  )
) satisfies CuratedThemeSourceOverrideMap;
