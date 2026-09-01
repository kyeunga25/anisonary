import type {
  CuratedThemeSourceOverrideMap,
  CuratedThemeSourceSeed,
} from "@/data/curated-theme-sources/types";

interface ReviewedThemeSource {
  key: string;
  label: string;
  firstPartyUrl: string;
  crossCheckUrl: string;
}

const reviewedThemeSources: readonly ReviewedThemeSource[] = [
  {
    key: "122632:OP:1",
    label: "《最響神相撲道！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.kamizmode-anime.com/staff-cast/",
    crossCheckUrl: "https://www.kamizmode-anime.com/bdbox/",
  },
  {
    key: "122632:ED:1",
    label: "《最響神相撲道！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.kamizmode-anime.com/staff-cast/",
    crossCheckUrl: "https://www.kamizmode-anime.com/bdbox/",
  },
  {
    key: "114446:OP:1",
    label: "《暮蟬悲鳴時業》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://higurashianime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/higurashi_no_naku_koro_ni_gou",
  },
  {
    key: "114446:ED:1",
    label: "《暮蟬悲鳴時業》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://higurashianime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/higurashi_no_naku_koro_ni_gou",
  },
  {
    key: "114446:ED:2",
    label: "《暮蟬悲鳴時業》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://higurashianime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/higurashi_no_naku_koro_ni_gou",
  },
  {
    key: "114446:ED:3",
    label: "《暮蟬悲鳴時業》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://higurashianime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/higurashi_no_naku_koro_ni_gou",
  },
  {
    key: "112479:OP:1",
    label: "《突擊莉莉 BOUQUET》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://anime.assaultlily-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/assault_lily_bouquet",
  },
  {
    key: "112479:ED:1",
    label: "《突擊莉莉 BOUQUET》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://anime.assaultlily-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/assault_lily_bouquet",
  },
  {
    key: "112479:ED:2",
    label: "《突擊莉莉 BOUQUET》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://anime.assaultlily-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/assault_lily_bouquet",
  },
  {
    key: "112479:ED:3",
    label: "《突擊莉莉 BOUQUET》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://anime.assaultlily-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/assault_lily_bouquet",
  },
  {
    key: "112479:ED:4",
    label: "《突擊莉莉 BOUQUET》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://anime.assaultlily-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/assault_lily_bouquet",
  },
  {
    key: "112609:OP:1",
    label: "《魔女之旅》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://majotabi.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/majo_no_tabitabi",
  },
  {
    key: "112609:ED:1",
    label: "《魔女之旅》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://majotabi.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/majo_no_tabitabi",
  },
  {
    key: "116242:OP:1",
    label: "《我立於百萬生命之上》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://1000000-lives.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/100_man_no_inochi_no_ue_ni_ore_wa_tatteiru",
  },
  {
    key: "116242:OP:2",
    label: "《我立於百萬生命之上》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://1000000-lives.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/100_man_no_inochi_no_ue_ni_ore_wa_tatteiru",
  },
  {
    key: "116242:ED:1",
    label: "《我立於百萬生命之上》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://1000000-lives.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/100_man_no_inochi_no_ue_ni_ore_wa_tatteiru",
  },
  {
    key: "112124:OP:1",
    label:
      "《在地下城尋求邂逅是否搞錯了什麼 第三季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://danmachi.com/danmachi3/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dungeon_ni_deai_wo_motomeru_no_wa_machigatteiru_darou_ka_iii",
  },
  {
    key: "112124:ED:1",
    label:
      "《在地下城尋求邂逅是否搞錯了什麼 第三季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://danmachi.com/danmachi3/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dungeon_ni_deai_wo_motomeru_no_wa_machigatteiru_darou_ka_iii",
  },
  {
    key: "113415:OP:1",
    label: "《咒術迴戰》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://jujutsukaisen.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/jujutsu_kaisen",
  },
  {
    key: "113415:OP:2",
    label: "《咒術迴戰》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://jujutsukaisen.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/jujutsu_kaisen",
  },
  {
    key: "113415:ED:1",
    label: "《咒術迴戰》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://jujutsukaisen.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/jujutsu_kaisen",
  },
  {
    key: "113415:ED:2",
    label: "《咒術迴戰》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://jujutsukaisen.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/jujutsu_kaisen",
  },
  {
    key: "113538:OP:1",
    label:
      "《排球少年!! 第四季：TO THE TOP 後半部》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://haikyu.jp/index2.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/haikyuu_to_the_top_2nd_season",
  },
  {
    key: "113538:ED:1",
    label:
      "《排球少年!! 第四季：TO THE TOP 後半部》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://haikyu.jp/index2.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/haikyuu_to_the_top_2nd_season",
  },
  {
    key: "113538:ED:2",
    label:
      "《排球少年!! 第四季：TO THE TOP 後半部》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://haikyu.jp/index2.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/haikyuu_to_the_top_2nd_season",
  },
  {
    key: "113652:OP:1",
    label: "《催眠麥克風》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://hypnosismic-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hypnosis_mic_division_rap_battle_rhyme_anima",
  },
  {
    key: "113652:ED:1",
    label: "《催眠麥克風》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://hypnosismic-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hypnosis_mic_division_rap_battle_rhyme_anima",
  },
  {
    key: "113652:ED:2",
    label: "《催眠麥克風》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://hypnosismic-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hypnosis_mic_division_rap_battle_rhyme_anima",
  },
  {
    key: "113652:ED:3",
    label: "《催眠麥克風》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://hypnosismic-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hypnosis_mic_division_rap_battle_rhyme_anima",
  },
  {
    key: "113652:ED:4",
    label: "《催眠麥克風》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://hypnosismic-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hypnosis_mic_division_rap_battle_rhyme_anima",
  },
  {
    key: "113652:ED:5",
    label: "《催眠麥克風》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://hypnosismic-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hypnosis_mic_division_rap_battle_rhyme_anima",
  },
  {
    key: "113970:OP:1",
    label:
      "《Love Live！虹咲學園學園偶像同好會》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.lovelive-anime.jp/nijigasaki/",
    crossCheckUrl:
      "https://animethemes.moe/anime/love_live_nijigasaki_gakuen_school_idol_doukoukai",
  },
  {
    key: "113970:ED:1",
    label:
      "《Love Live！虹咲學園學園偶像同好會》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.lovelive-anime.jp/nijigasaki/",
    crossCheckUrl:
      "https://animethemes.moe/anime/love_live_nijigasaki_gakuen_school_idol_doukoukai",
  },
  {
    key: "114099:OP:1",
    label: "《勇者鬥惡龍 達伊的大冒險》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://dq-dai.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dragon_quest_dai_no_daibouken_2020",
  },
  {
    key: "114099:OP:2",
    label: "《勇者鬥惡龍 達伊的大冒險》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://dq-dai.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dragon_quest_dai_no_daibouken_2020",
  },
  {
    key: "114099:ED:1",
    label: "《勇者鬥惡龍 達伊的大冒險》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://dq-dai.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dragon_quest_dai_no_daibouken_2020",
  },
  {
    key: "114099:ED:2",
    label: "《勇者鬥惡龍 達伊的大冒險》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://dq-dai.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dragon_quest_dai_no_daibouken_2020",
  },
  {
    key: "114099:ED:3",
    label: "《勇者鬥惡龍 達伊的大冒險》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://dq-dai.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dragon_quest_dai_no_daibouken_2020",
  },
  {
    key: "114099:ED:4",
    label: "《勇者鬥惡龍 達伊的大冒險》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://dq-dai.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/dragon_quest_dai_no_daibouken_2020",
  },
  {
    key: "114263:ED:1",
    label: "《鐵路浪漫譚》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://railromanesque.jp/anime01/",
    crossCheckUrl: "https://animethemes.moe/anime/rail_romanesque",
  },
  {
    key: "114263:ED:2",
    label: "《鐵路浪漫譚》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://railromanesque.jp/anime01/",
    crossCheckUrl: "https://animethemes.moe/anime/rail_romanesque",
  },
  {
    key: "114263:ED:3",
    label: "《鐵路浪漫譚》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://railromanesque.jp/anime01/",
    crossCheckUrl: "https://animethemes.moe/anime/rail_romanesque",
  },
  {
    key: "116173:OP:1",
    label: "《戰翼的希格德莉法》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://sigururi.com/",
    crossCheckUrl: "https://animethemes.moe/anime/senyoku_no_sigrdrifa",
  },
  {
    key: "116173:ED:1",
    label: "《戰翼的希格德莉法》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://sigururi.com/",
    crossCheckUrl: "https://animethemes.moe/anime/senyoku_no_sigrdrifa",
  },
  {
    key: "116173:ED:2",
    label: "《戰翼的希格德莉法》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://sigururi.com/",
    crossCheckUrl: "https://animethemes.moe/anime/senyoku_no_sigrdrifa",
  },
  {
    key: "116267:OP:1",
    label: "《總之就是很可愛》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://tonikawa.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tonikaku_kawaii",
  },
  {
    key: "116267:ED:1",
    label: "《總之就是很可愛》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://tonikawa.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tonikaku_kawaii",
  },
  {
    key: "116700:ED:1",
    label: "《汪汪與喵喵》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.lantis.jp/release-item/LACM-24073.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/inu_to_neko_docchi_mo_katteru_to_mainichi_tanoshii",
  },
  {
    key: "116700:ED:2",
    label: "《汪汪與喵喵》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.lantis.jp/release-item/LACM-24073.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/inu_to_neko_docchi_mo_katteru_to_mainichi_tanoshii",
  },
  {
    key: "118376:OP:1",
    label: "《王之逆襲: 意志的繼承者》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.anime-kings-raid.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kings_raid_ishi_wo_tsugumono_tachi",
  },
  {
    key: "118376:OP:2",
    label: "《王之逆襲: 意志的繼承者》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://www.anime-kings-raid.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kings_raid_ishi_wo_tsugumono_tachi",
  },
  {
    key: "118376:ED:1",
    label: "《王之逆襲: 意志的繼承者》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.anime-kings-raid.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kings_raid_ishi_wo_tsugumono_tachi",
  },
  {
    key: "118376:ED:2",
    label: "《王之逆襲: 意志的繼承者》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.anime-kings-raid.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kings_raid_ishi_wo_tsugumono_tachi",
  },
  {
    key: "118399:OP:1",
    label: "《半妖的夜叉姬》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://hanyo-yashahime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hanyou_no_yashahime_sengoku_otogizoushi",
  },
  {
    key: "118399:OP:2",
    label: "《半妖的夜叉姬》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://hanyo-yashahime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hanyou_no_yashahime_sengoku_otogizoushi",
  },
  {
    key: "118399:ED:1",
    label: "《半妖的夜叉姬》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://hanyo-yashahime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hanyou_no_yashahime_sengoku_otogizoushi",
  },
  {
    key: "118399:ED:2",
    label: "《半妖的夜叉姬》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://hanyo-yashahime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hanyou_no_yashahime_sengoku_otogizoushi",
  },
  {
    key: "112300:OP:1",
    label:
      "《魔法科高中的劣等生 第二季：來訪者篇》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://mahouka.jp/2nd/",
    crossCheckUrl:
      "https://animethemes.moe/anime/mahouka_koukou_no_rettousei_raihousha_hen",
  },
  {
    key: "112300:ED:1",
    label:
      "《魔法科高中的劣等生 第二季：來訪者篇》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://mahouka.jp/2nd/",
    crossCheckUrl:
      "https://animethemes.moe/anime/mahouka_koukou_no_rettousei_raihousha_hen",
  },
  {
    key: "115740:OP:1",
    label: "《眾神眷顧的男人》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kamihiro-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kami_tachi_ni_hirowareta_otoko",
  },
  {
    key: "115740:ED:1",
    label: "《眾神眷顧的男人》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kamihiro-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kami_tachi_ni_hirowareta_otoko",
  },
  {
    key: "117343:OP:1",
    label: "《無能力者娜娜》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://munounanana.com/",
    crossCheckUrl: "https://animethemes.moe/anime/munou_na_nana",
  },
  {
    key: "117343:ED:1",
    label: "《無能力者娜娜》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://munounanana.com/",
    crossCheckUrl: "https://animethemes.moe/anime/munou_na_nana",
  },
  {
    key: "117757:OP:1",
    label: "《攀岩少女！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://iwakakeru-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/iwa_kakeru_sport_climbing_girls",
  },
  {
    key: "117757:ED:1",
    label: "《攀岩少女！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://iwakakeru-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/iwa_kakeru_sport_climbing_girls",
  },
  {
    key: "117757:ED:2",
    label: "《攀岩少女！》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://iwakakeru-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/iwa_kakeru_sport_climbing_girls",
  },
  {
    key: "117757:ED:3",
    label: "《攀岩少女！》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://iwakakeru-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/iwa_kakeru_sport_climbing_girls",
  },
  {
    key: "117757:ED:4",
    label: "《攀岩少女！》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://iwakakeru-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/iwa_kakeru_sport_climbing_girls",
  },
  {
    key: "117757:ED:5",
    label: "《攀岩少女！》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://iwakakeru-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/iwa_kakeru_sport_climbing_girls",
  },
  {
    key: "125264:ED:1",
    label: "《萌蛙匹克－情感的色彩－》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://pickles-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kaeru_no_pickles_kimochi_no_iro",
  },
  {
    key: "110355:OP:1",
    label: "《黃金神威 第三季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kamuy-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/golden_kamuy_3rd_season",
  },
  {
    key: "110355:ED:1",
    label: "《黃金神威 第三季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kamuy-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/golden_kamuy_3rd_season",
  },
  {
    key: "125153:OP:1",
    label:
      "《秘密結社 鷹之爪 ～Golden Spell～》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://xn--u9j429qiq1a.jp/gs/",
    crossCheckUrl:
      "https://animethemes.moe/anime/himitsukessha_taka_no_tsume_golden_spell",
  },
  {
    key: "125153:ED:1",
    label:
      "《秘密結社 鷹之爪 ～Golden Spell～》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://xn--u9j429qiq1a.jp/gs/",
    crossCheckUrl:
      "https://animethemes.moe/anime/himitsukessha_taka_no_tsume_golden_spell",
  },
  {
    key: "111324:OP:1",
    label: "《池袋西口公園》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://iwgp-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ikebukuro_west_gate_park",
  },
  {
    key: "111324:ED:1",
    label: "《池袋西口公園》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://iwgp-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ikebukuro_west_gate_park",
  },
  {
    key: "111324:ED:2",
    label: "《池袋西口公園》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://iwgp-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ikebukuro_west_gate_park",
  },
  {
    key: "111324:ED:3",
    label: "《池袋西口公園》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://iwgp-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ikebukuro_west_gate_park",
  },
  {
    key: "111428:OP:1",
    label: "《在魔王城說晚安》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://maoujo-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/maoujou_de_oyasumi",
  },
  {
    key: "111428:ED:1",
    label: "《在魔王城說晚安》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://maoujo-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/maoujou_de_oyasumi",
  },
  {
    key: "116147:ED:1",
    label: "《One Room 第三季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://oneroom-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/one_room_3rd_season",
  },
  {
    key: "116147:ED:2",
    label: "《One Room 第三季》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://oneroom-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/one_room_3rd_season",
  },
  {
    key: "116147:ED:3",
    label: "《One Room 第三季》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://oneroom-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/one_room_3rd_season",
  },
  {
    key: "116147:ED:4",
    label: "《One Room 第三季》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://oneroom-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/one_room_3rd_season",
  },
  {
    key: "116147:ED:5",
    label: "《One Room 第三季》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://oneroom-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/one_room_3rd_season",
  },
  {
    key: "157171:OP:1",
    label: "《無論如何都想加入生肖 2》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://etononeko.jp/",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=16828",
  },
  {
    key: "157171:OP:2",
    label: "《無論如何都想加入生肖 2》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://etononeko.jp/",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=16828",
  },
  {
    key: "157171:ED:1",
    label: "《無論如何都想加入生肖 2》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://etononeko.jp/",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=16828",
  },
  {
    key: "105244:OP:1",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:OP:2",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:1",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:2",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:3",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:4",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:5",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:6",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED6 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:7",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED7 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:8",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED8 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:9",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED9 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:10",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED10 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:11",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED11 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:12",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED12 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "105244:ED:13",
    label: "《月歌。 THE ANIMATION 2》第一方歌曲資料：ED13 用途與演唱者",
    firstPartyUrl: "https://tsukino-pro.com/release_info/tkut-0276/",
    crossCheckUrl: "https://animethemes.moe/anime/tsukiuta_the_animation_2",
  },
  {
    key: "112667:OP:1",
    label:
      "《這是妳與我的最後戰場，或是開創世界的聖戰》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kimisentv.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kimi_to_boku_no_saigo_no_senjou_aruiwa_sekai_ga_hajimaru_seisen",
  },
  {
    key: "112667:ED:1",
    label:
      "《這是妳與我的最後戰場，或是開創世界的聖戰》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kimisentv.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kimi_to_boku_no_saigo_no_senjou_aruiwa_sekai_ga_hajimaru_seisen",
  },
  {
    key: "114340:OP:1",
    label: "《熊熊勇闖異世界》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kumakumakumabear.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/kuma_kuma_kuma_bear",
  },
  {
    key: "114340:ED:1",
    label: "《熊熊勇闖異世界》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kumakumakumabear.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/kuma_kuma_kuma_bear",
  },
  {
    key: "114340:ED:2",
    label: "《熊熊勇闖異世界》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://kumakumakumabear.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/kuma_kuma_kuma_bear",
  },
  {
    key: "121567:OP:1",
    label:
      "《儘管如此也要努力！魔法少女胡桃 第三季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.lantis.jp/title/seizeiganbare/disco.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/seizei_ganbare_mahou_shoujo_kurumi_3rd_season",
  },
  {
    key: "121567:ED:1",
    label:
      "《儘管如此也要努力！魔法少女胡桃 第三季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.lantis.jp/title/seizeiganbare/disco.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/seizei_ganbare_mahou_shoujo_kurumi_3rd_season",
  },
  {
    key: "121567:ED:2",
    label:
      "《儘管如此也要努力！魔法少女胡桃 第三季》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.lantis.jp/title/seizeiganbare/disco.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/seizei_ganbare_mahou_shoujo_kurumi_3rd_season",
  },
  {
    key: "103119:OP:1",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:1",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:2",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:3",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:4",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:5",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:6",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED6 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:7",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED7 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:8",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED8 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:9",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED9 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:10",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED10 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:11",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED11 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "103119:ED:12",
    label: "《強襲魔女 通往柏林之路》第一方歌曲資料：ED12 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/strike_witches-rtb/",
    crossCheckUrl:
      "https://animethemes.moe/anime/strike_witches_road_to_berlin",
  },
  {
    key: "116005:OP:1",
    label: "《大貴族》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://noblesse-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/noblesse",
  },
  {
    key: "116005:ED:1",
    label: "《大貴族》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://noblesse-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/noblesse",
  },
  {
    key: "116566:OP:1",
    label: "《惡玉Drive》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://akudama-drive.com/",
    crossCheckUrl: "https://animethemes.moe/anime/akudama_drive",
  },
  {
    key: "116566:ED:1",
    label: "《惡玉Drive》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://akudama-drive.com/",
    crossCheckUrl: "https://animethemes.moe/anime/akudama_drive",
  },
  {
    key: "117086:ED:1",
    label: "《小碧藍幻想！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://guraburu.granbluefantasy.jp/bd/",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=16710",
  },
  {
    key: "117086:ED:2",
    label: "《小碧藍幻想！》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://guraburu.granbluefantasy.jp/bd/",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=16710",
  },
  {
    key: "117086:ED:3",
    label: "《小碧藍幻想！》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://guraburu.granbluefantasy.jp/bd/",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=16710",
  },
  {
    key: "109287:OP:1",
    label: "《安達與島村》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.tbs.co.jp/anime/adashima/",
    crossCheckUrl: "https://animethemes.moe/anime/adachi_to_shimamura",
  },
  {
    key: "109287:ED:1",
    label: "《安達與島村》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.tbs.co.jp/anime/adashima/",
    crossCheckUrl: "https://animethemes.moe/anime/adachi_to_shimamura",
  },
  {
    key: "126650:OP:1",
    label: "《射擊覺醒！激鬥瓶蓋人》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl:
      "https://www.takaratomy.co.jp/product_release/pdf/p200915_01.pdf",
    crossCheckUrl: "https://www.animatetimes.com/tag/details.php?id=16677",
  },
  {
    key: "104198:OP:1",
    label: "《請問您今天要來點兔子嗎？ BLOOM》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://gochiusa.com/bloom/",
    crossCheckUrl:
      "https://animethemes.moe/anime/gochuumon_wa_usagi_desu_ka_bloom",
  },
  {
    key: "104198:ED:1",
    label: "《請問您今天要來點兔子嗎？ BLOOM》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://gochiusa.com/bloom/",
    crossCheckUrl:
      "https://animethemes.moe/anime/gochuumon_wa_usagi_desu_ka_bloom",
  },
  {
    key: "104198:ED:2",
    label: "《請問您今天要來點兔子嗎？ BLOOM》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://gochiusa.com/bloom/",
    crossCheckUrl:
      "https://animethemes.moe/anime/gochuumon_wa_usagi_desu_ka_bloom",
  },
  {
    key: "110632:OP:1",
    label: "《前說！MAESETSU》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://maesetsu.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/maesetsu",
  },
  {
    key: "110632:OP:2",
    label: "《前說！MAESETSU》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://maesetsu.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/maesetsu",
  },
  {
    key: "110632:ED:1",
    label: "《前說！MAESETSU》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://maesetsu.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/maesetsu",
  },
  {
    key: "110632:ED:2",
    label: "《前說！MAESETSU》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://maesetsu.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/maesetsu",
  },
  {
    key: "114124:OP:1",
    label: "《憂國的莫里亞蒂》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://moriarty-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/yuukoku_no_moriarty",
  },
  {
    key: "114124:ED:1",
    label: "《憂國的莫里亞蒂》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://moriarty-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/yuukoku_no_moriarty",
  },
  {
    key: "118419:OP:1",
    label: "《成神之日》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kamisama-day.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/kamisama_ni_natta_hi",
  },
  {
    key: "118419:ED:1",
    label: "《成神之日》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kamisama-day.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/kamisama_ni_natta_hi",
  },
  {
    key: "118419:ED:2",
    label: "《成神之日》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://kamisama-day.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/kamisama_ni_natta_hi",
  },
  {
    key: "122807:OP:1",
    label: "《體操武士》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://taiso-samurai.com/",
    crossCheckUrl: "https://animethemes.moe/anime/taisou_zamurai",
  },
  {
    key: "122807:ED:1",
    label: "《體操武士》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://taiso-samurai.com/",
    crossCheckUrl: "https://animethemes.moe/anime/taisou_zamurai",
  },
  {
    key: "125887:OP:1",
    label: "《拜託了！Patron大人》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.onepato.com/news/",
    crossCheckUrl: "https://prtimes.jp/main/html/rd/p/000000481.000031422.html",
  },
  {
    key: "108713:OP:1",
    label: "《滿溢的水果塔》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://ochifuru-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ochikobore_fruit_tart",
  },
  {
    key: "108713:ED:1",
    label: "《滿溢的水果塔》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://ochifuru-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ochikobore_fruit_tart",
  },
  {
    key: "111145:OP:1",
    label: "《A3! SEASON AUTUMN & WINTER》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.a3-animation.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/a3_season_autumn_winter",
  },
  {
    key: "111145:ED:1",
    label: "《A3! SEASON AUTUMN & WINTER》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.a3-animation.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/a3_season_autumn_winter",
  },
  {
    key: "111145:ED:2",
    label: "《A3! SEASON AUTUMN & WINTER》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.a3-animation.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/a3_season_autumn_winter",
  },
  {
    key: "111145:ED:3",
    label: "《A3! SEASON AUTUMN & WINTER》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://www.a3-animation.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/a3_season_autumn_winter",
  },
  {
    key: "117755:OP:1",
    label: "《光之戰記 -ZUERST-》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://magatsu-wahrheit-zuerst.com/",
    crossCheckUrl: "https://animethemes.moe/anime/magatsu_wahrheit_zuerst",
  },
  {
    key: "117755:ED:1",
    label: "《光之戰記 -ZUERST-》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://magatsu-wahrheit-zuerst.com/",
    crossCheckUrl: "https://animethemes.moe/anime/magatsu_wahrheit_zuerst",
  },
  {
    key: "120851:OP:1",
    label: "《阿松 第三季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:OP:2",
    label: "《阿松 第三季》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:OP:3",
    label: "《阿松 第三季》第一方歌曲資料：OP3 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:ED:1",
    label: "《阿松 第三季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:ED:2",
    label: "《阿松 第三季》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:ED:3",
    label: "《阿松 第三季》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:ED:4",
    label: "《阿松 第三季》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:ED:5",
    label: "《阿松 第三季》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "120851:ED:6",
    label: "《阿松 第三季》第一方歌曲資料：ED6 用途與演唱者",
    firstPartyUrl: "https://osomatsusan.com/3rd/bd-dvd-cd/",
    crossCheckUrl: "https://animethemes.moe/anime/osomatsu_san_3",
  },
  {
    key: "124028:ED:1",
    label: "《僅此是瓶頸》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://soredakega-neck.com/",
    crossCheckUrl: "https://animethemes.moe/anime/sore_dake_ga_neck",
  },
  {
    key: "122137:ED:1",
    label: "《土下座跪求給看》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://dogeza-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/dogeza_de_tanondemita",
  },
  {
    key: "125870:ED:1",
    label: "《別說是糞作！Animation》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://anime-kusoge.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kusoge_tte_iuna_animation",
  },
  {
    key: "115069:OP:1",
    label: "《D4DJ First Mix》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://anime.d4dj-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/d4dj_first_mix",
  },
  {
    key: "115069:ED:1",
    label: "《D4DJ First Mix》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://anime.d4dj-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/d4dj_first_mix",
  },
  {
    key: "115069:ED:2",
    label: "《D4DJ First Mix》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://anime.d4dj-pj.com/",
    crossCheckUrl: "https://animethemes.moe/anime/d4dj_first_mix",
  },
  {
    key: "126315:ED:1",
    label: "《薰的重要事物》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl:
      "https://www.lantis.jp/artist/ninomiyayui/news_1602428400.html",
    crossCheckUrl: "https://spice.eplus.jp/articles/279872",
  },
  {
    key: "126831:ED:1",
    label: "《東京GAMBO》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl:
      "https://www.universal-music.co.jp/mogami-moga/news/2020-12-16-3/",
    crossCheckUrl: "https://www.oricon.co.jp/news/2177157/",
  },
  {
    key: "110277:OP:1",
    label:
      "《進擊的巨人 第四季：The Final Season》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://shingeki.tv/final/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shingeki_no_kyojin_the_final_season",
  },
  {
    key: "110277:ED:1",
    label:
      "《進擊的巨人 第四季：The Final Season》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://shingeki.tv/final/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shingeki_no_kyojin_the_final_season",
  },
  {
    key: "179778:OP:1",
    label: "《瀕危物種旬》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://screenonline.jp/_ct/17416905",
    crossCheckUrl: "https://animeschedule.net/anime/zetsumetsu-kigu-shun-2020",
  },
  {
    key: "131999:ED:1",
    label: "《禁男女子》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://firebug.jp/news/20201228-2",
    crossCheckUrl: "https://animeschedule.net/anime/kindan-joshi",
  },
  {
    key: "136642:OP:1",
    label: "《對盤！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://prtimes.jp/main/html/rd/p/000000034.000044525.html",
    crossCheckUrl: "https://animeschedule.net/anime/taiban",
  },
  {
    key: "136642:ED:1",
    label: "《對盤！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://prtimes.jp/main/html/rd/p/000000034.000044525.html",
    crossCheckUrl: "https://animeschedule.net/anime/taiban",
  },
];

function sourcesFor(
  row: ReviewedThemeSource,
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
      language: row.crossCheckUrl.includes("youranimes.tw")
        ? "zh-Hant"
        : "multi",
      role: "cross_check",
    },
  ];
}

export const curated2020FallThemeSources = Object.fromEntries(
  reviewedThemeSources.map((row) => [row.key, sourcesFor(row)]),
) satisfies CuratedThemeSourceOverrideMap;
