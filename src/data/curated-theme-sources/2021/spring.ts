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
    key: "124786:OP:1",
    label: "《哥吉拉 奇異點》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://godzilla-sp.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/godzilla_sp",
  },
  {
    key: "124786:ED:1",
    label: "《哥吉拉 奇異點》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://godzilla-sp.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/godzilla_sp",
  },
  {
    key: "117193:OP:1",
    label: "《我的英雄學院 第五季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://heroaca.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/boku_no_hero_academia_5th_season",
  },
  {
    key: "117193:ED:1",
    label: "《我的英雄學院 第五季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://heroaca.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/boku_no_hero_academia_5th_season",
  },
  {
    key: "117193:OP:2",
    label: "《我的英雄學院 第五季》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://heroaca.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/boku_no_hero_academia_5th_season",
  },
  {
    key: "117193:ED:2",
    label: "《我的英雄學院 第五季》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://heroaca.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/boku_no_hero_academia_5th_season",
  },
  {
    key: "114840:OP:1",
    label: "《如果這叫愛情感覺會很噁心》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://koikimo.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/koi_to_yobu_ni_wa_kimochi_warui",
  },
  {
    key: "114840:ED:1",
    label: "《如果這叫愛情感覺會很噁心》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://koikimo.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/koi_to_yobu_ni_wa_kimochi_warui",
  },
  {
    key: "129664:OP:1",
    label:
      "《擾亂 THE PRINCESS OF SNOW AND BLOOD》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://joran.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/jouran_the_princess_of_snow_and_blood",
  },
  {
    key: "129664:ED:1",
    label:
      "《擾亂 THE PRINCESS OF SNOW AND BLOOD》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://joran.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/jouran_the_princess_of_snow_and_blood",
  },
  {
    key: "119675:OP:1",
    label: "《通靈王（2021）》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "119675:ED:1",
    label: "《通靈王（2021）》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "119675:ED:2",
    label: "《通靈王（2021）》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "119675:ED:3",
    label: "《通靈王（2021）》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "119675:OP:2",
    label: "《通靈王（2021）》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "119675:ED:4",
    label: "《通靈王（2021）》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "119675:ED:5",
    label: "《通靈王（2021）》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "119675:ED:6",
    label: "《通靈王（2021）》第一方歌曲資料：ED6 用途與演唱者",
    firstPartyUrl: "https://shamanking-project.com/shamanking/music",
    crossCheckUrl: "https://animethemes.moe/anime/shaman_king_2021",
  },
  {
    key: "125351:ED:1",
    label: "《義呆利 World★Stars》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://hetalia-ws.com/",
    crossCheckUrl: "https://animethemes.moe/anime/hetalia_worldstars",
  },
  {
    key: "113950:ED:1",
    label: "《SSSS.DYNAZENON》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://dynazenon.net/",
    crossCheckUrl: "https://animethemes.moe/anime/ssssdynazenon",
  },
  {
    key: "113950:OP:1",
    label: "《SSSS.DYNAZENON》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://dynazenon.net/",
    crossCheckUrl: "https://animethemes.moe/anime/ssssdynazenon",
  },
  {
    key: "120859:OP:1",
    label: "《灼熱卡巴迪》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/kabaddi/",
    crossCheckUrl: "https://animethemes.moe/anime/shakunetsu_kabaddi",
  },
  {
    key: "120859:ED:1",
    label: "《灼熱卡巴迪》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/kabaddi/",
    crossCheckUrl: "https://animethemes.moe/anime/shakunetsu_kabaddi",
  },
  {
    key: "121962:OP:1",
    label: "《卡片戰鬥!! 先導者 overDress》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://anime.cf-vanguard.com/overdress/",
    crossCheckUrl: "https://animethemes.moe/anime/cardfight_vanguard_overdress",
  },
  {
    key: "121962:ED:1",
    label: "《卡片戰鬥!! 先導者 overDress》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://anime.cf-vanguard.com/overdress/",
    crossCheckUrl: "https://animethemes.moe/anime/cardfight_vanguard_overdress",
  },
  {
    key: "121962:ED:2",
    label: "《卡片戰鬥!! 先導者 overDress》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl:
      "https://love-annex.jp/works/tv%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E3%82%AB%E3%83%BC%E3%83%89%E3%83%95%E3%82%A1%E3%82%A4%E3%83%88-%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%83%89-overdress%E3%80%8D%E7%AC%AC%E5%85%AD/",
    crossCheckUrl: "https://animethemes.moe/anime/cardfight_vanguard_overdress",
  },
  {
    key: "122148:OP:1",
    label: "《燒窯的話也要馬克杯》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://yakumo-project.com/",
    crossCheckUrl: "https://animethemes.moe/anime/yakunara_mug_cup_mo",
  },
  {
    key: "122148:ED:1",
    label: "《燒窯的話也要馬克杯》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://yakumo-project.com/",
    crossCheckUrl: "https://animethemes.moe/anime/yakunara_mug_cup_mo",
  },
  {
    key: "122348:ED:1",
    label: "《真白之音》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://mashironooto-official.com/",
    crossCheckUrl: "https://animethemes.moe/anime/mashiro_no_oto",
  },
  {
    key: "122348:OP:1",
    label: "《真白之音》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://mashironooto-official.com/",
    crossCheckUrl: "https://animethemes.moe/anime/mashiro_no_oto",
  },
  {
    key: "122348:OP:2",
    label: "《真白之音》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://mashironooto-official.com/",
    crossCheckUrl: "https://animethemes.moe/anime/mashiro_no_oto",
  },
  {
    key: "128546:OP:1",
    label: "《Vivy -Fluorite Eye's Song-》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://vivy-portal.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/vivy_fluorite_eyes_song",
  },
  {
    key: "112376:OP:1",
    label: "《龍先生、想要買個家。》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://doraie.com/",
    crossCheckUrl: "https://animethemes.moe/anime/dragon_ie_wo_kau",
  },
  {
    key: "112376:ED:1",
    label: "《龍先生、想要買個家。》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://doraie.com/",
    crossCheckUrl: "https://animethemes.moe/anime/dragon_ie_wo_kau",
  },
  {
    key: "113359:ED:1",
    label: "《NOMAD MEGALO BOX 2 機甲拳擊 2》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://megalobox.com/",
    crossCheckUrl: "https://animethemes.moe/anime/nomad_megalo_box_2",
  },
  {
    key: "113359:OP:1",
    label: "《NOMAD MEGALO BOX 2 機甲拳擊 2》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://megalobox.com/",
    crossCheckUrl: "https://animethemes.moe/anime/nomad_megalo_box_2",
  },
  {
    key: "113359:ED:2",
    label: "《NOMAD MEGALO BOX 2 機甲拳擊 2》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://megalobox.com/",
    crossCheckUrl: "https://animethemes.moe/anime/nomad_megalo_box_2",
  },
  {
    key: "116588:OP:1",
    label: "《戰鬥員派遣中！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kisaragi-co.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/sentouin_hakenshimasu",
  },
  {
    key: "116588:ED:1",
    label: "《戰鬥員派遣中！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kisaragi-co.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/sentouin_hakenshimasu",
  },
  {
    key: "123494:OP:1",
    label: "《再見了，我的克拉默》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://sayonara-cramer.com/tv/",
    crossCheckUrl: "https://animethemes.moe/anime/sayonara_watashi_no_cramer",
  },
  {
    key: "123494:ED:1",
    label: "《再見了，我的克拉默》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://sayonara-cramer.com/tv/",
    crossCheckUrl: "https://animethemes.moe/anime/sayonara_watashi_no_cramer",
  },
  {
    key: "124858:OP:1",
    label: "《憂國的莫里亞蒂 後半部》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://moriarty-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/yuukoku_no_moriarty_2nd_season",
  },
  {
    key: "124858:ED:1",
    label: "《憂國的莫里亞蒂 後半部》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://moriarty-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/yuukoku_no_moriarty_2nd_season",
  },
  {
    key: "130512:OP:1",
    label: "《Mazica Party》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.tv-osaka.co.jp/mazicaparty/",
    crossCheckUrl: "https://animethemes.moe/anime/mazica_party",
  },
  {
    key: "130512:ED:1",
    label: "《Mazica Party》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.tv-osaka.co.jp/mazicaparty/",
    crossCheckUrl: "https://animethemes.moe/anime/mazica_party",
  },
  {
    key: "114232:OP:1",
    label: "《刮掉鬍子的我與撿到的女高中生》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.ponycanyon.co.jp/music/PCCG000002011",
    crossCheckUrl:
      "https://animethemes.moe/anime/hige_wo_soru_soshite_joshikousei_wo_hirou",
  },
  {
    key: "114232:ED:1",
    label: "《刮掉鬍子的我與撿到的女高中生》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://news.ponycanyon.co.jp/2020/12/44888",
    crossCheckUrl:
      "https://animethemes.moe/anime/hige_wo_soru_soshite_joshikousei_wo_hirou",
  },
  {
    key: "129386:OP:1",
    label: "《七騎士：革命 -英雄的繼承者-》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://sevenknights-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/seven_knights_revolution_eiyuu_no_keishousha",
  },
  {
    key: "129386:ED:1",
    label: "《七騎士：革命 -英雄的繼承者-》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://sevenknights-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/seven_knights_revolution_eiyuu_no_keishousha",
  },
  {
    key: "129386:ED:2",
    label: "《七騎士：革命 -英雄的繼承者-》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://sevenknights-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/seven_knights_revolution_eiyuu_no_keishousha",
  },
  {
    key: "115183:ED:1",
    label: "《MARS RED》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://marsred.tv/",
    crossCheckUrl: "https://animethemes.moe/anime/mars_red",
  },
  {
    key: "115183:OP:1",
    label: "《MARS RED》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://marsred.tv/",
    crossCheckUrl: "https://animethemes.moe/anime/mars_red",
  },
  {
    key: "116741:OP:1",
    label:
      "《關於我轉生變成史萊姆這檔事 轉生史萊姆日記》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.ten-sura.com/goods_event/goods/cd/post/5630",
    crossCheckUrl:
      "https://animethemes.moe/anime/tensura_nikki_tensei_shitara_slime_datta_ken",
  },
  {
    key: "116741:ED:1",
    label:
      "《關於我轉生變成史萊姆這檔事 轉生史萊姆日記》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.ten-sura.com/goods_event/goods/cd/post/5630",
    crossCheckUrl:
      "https://animethemes.moe/anime/tensura_nikki_tensei_shitara_slime_datta_ken",
  },
  {
    key: "116741:ED:2",
    label:
      "《關於我轉生變成史萊姆這檔事 轉生史萊姆日記》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.ten-sura.com/goods_event/goods/cd/post/5630",
    crossCheckUrl:
      "https://animethemes.moe/anime/tensura_nikki_tensei_shitara_slime_datta_ken",
  },
  {
    key: "123802:OP:1",
    label: "《聖女魔力無所不能》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://seijyonomaryoku.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/seijo_no_maryoku_wa_bannou_desu",
  },
  {
    key: "123802:ED:1",
    label: "《聖女魔力無所不能》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://seijyonomaryoku.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/seijo_no_maryoku_wa_bannou_desu",
  },
  {
    key: "123802:ED:2",
    label: "《聖女魔力無所不能》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://seijyonomaryoku.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/seijo_no_maryoku_wa_bannou_desu",
  },
  {
    key: "124194:OP:1",
    label: "《魔法水果籃 The Final》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://fruba.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/fruits_basket_the_final",
  },
  {
    key: "124194:ED:1",
    label: "《魔法水果籃 The Final》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://fruba.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/fruits_basket_the_final",
  },
  {
    key: "128547:OP:1",
    label: "《奇巧計程車》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://oddtaxi.jp/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/odd_taxi",
  },
  {
    key: "128547:ED:1",
    label: "《奇巧計程車》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://oddtaxi.jp/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/odd_taxi",
  },
  {
    key: "128547:ED:2",
    label: "《奇巧計程車》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://news.ponycanyon.co.jp/2021/05/53546",
    crossCheckUrl: "https://animethemes.moe/anime/odd_taxi",
  },
  {
    key: "113418:OP:1",
    label: "《本田小狼與我》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://supercub-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/super_cub",
  },
  {
    key: "113418:ED:1",
    label: "《本田小狼與我》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://supercub-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/super_cub",
  },
  {
    key: "126791:ED:1",
    label:
      "《如果究極進化的完全沉浸 RPG 比現實還更像垃圾遊戲的話》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://fulldive-rpg.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kyuukyoku_shinka_shita_full_dive_rpg_ga_genjitsu_yori_mo_kusoge_dattara",
  },
  {
    key: "126791:OP:1",
    label:
      "《如果究極進化的完全沉浸 RPG 比現實還更像垃圾遊戲的話》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://fulldive-rpg.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kyuukyoku_shinka_shita_full_dive_rpg_ga_genjitsu_yori_mo_kusoge_dattara",
  },
  {
    key: "110733:OP:1",
    label: "《佐賀偶像是傳奇 捲土重來》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://zombielandsaga.com/news/detail.php?id=1089862",
    crossCheckUrl: "https://animethemes.moe/anime/zombieland_saga_revenge",
  },
  {
    key: "110733:ED:1",
    label: "《佐賀偶像是傳奇 捲土重來》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://zombielandsaga.com/news/detail.php?id=1089862",
    crossCheckUrl: "https://animethemes.moe/anime/zombieland_saga_revenge",
  },
  {
    key: "125426:OP:1",
    label: "《極道主夫》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.youtube.com/watch?v=r2kEj9zXzBA",
    crossCheckUrl: "https://animethemes.moe/anime/gokushufudou",
  },
  {
    key: "125426:ED:1",
    label: "《極道主夫》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.youtube.com/watch?v=r2kEj9zXzBA",
    crossCheckUrl: "https://animethemes.moe/anime/gokushufudou",
  },
  {
    key: "126664:OP:1",
    label: "《SD鋼彈世界 群英集》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://en.gundam.info/",
    crossCheckUrl: "https://animethemes.moe/anime/sd_gundam_world_heroes",
  },
  {
    key: "126664:ED:1",
    label: "《SD鋼彈世界 群英集》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://en.gundam.info/",
    crossCheckUrl: "https://animethemes.moe/anime/sd_gundam_world_heroes",
  },
  {
    key: "126664:OP:2",
    label: "《SD鋼彈世界 群英集》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://en.gundam.info/",
    crossCheckUrl: "https://animethemes.moe/anime/sd_gundam_world_heroes",
  },
  {
    key: "126664:ED:2",
    label: "《SD鋼彈世界 群英集》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://en.gundam.info/",
    crossCheckUrl: "https://animethemes.moe/anime/sd_gundam_world_heroes",
  },
  {
    key: "128399:OP:1",
    label:
      "《Fairy 蘭丸 ～讓我來幫助你的心～》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://f-ran.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/fairy_ranmaru_anata_no_kokoro_otasuke_shimasu",
  },
  {
    key: "128399:ED:1",
    label:
      "《Fairy 蘭丸 ～讓我來幫助你的心～》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://f-ran.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/fairy_ranmaru_anata_no_kokoro_otasuke_shimasu",
  },
  {
    key: "117448:OP:1",
    label:
      "《異世界魔王與召喚少女的奴隸魔術Ω》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://isekaimaou-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/isekai_maou_to_shoukan_shoujo_no_dorei_majutsu_o",
  },
  {
    key: "117448:ED:1",
    label:
      "《異世界魔王與召喚少女的奴隸魔術Ω》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://isekaimaou-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/isekai_maou_to_shoukan_shoujo_no_dorei_majutsu_o",
  },
  {
    key: "125839:OP:1",
    label: "《後空翻少年!!》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://bakuten-pr.com/",
    crossCheckUrl: "https://animethemes.moe/anime/bakuten",
  },
  {
    key: "125839:ED:1",
    label: "《後空翻少年!!》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://bakuten-pr.com/",
    crossCheckUrl: "https://animethemes.moe/anime/bakuten",
  },
  {
    key: "128737:OP:1",
    label: "《新幹線變形機器人 Z》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.shinkalion.com/series2/onair/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shinkansen_henkei_robo_shinkalion_z_the_animation",
  },
  {
    key: "128737:ED:1",
    label: "《新幹線變形機器人 Z》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.shinkalion.com/series2/onair/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shinkansen_henkei_robo_shinkalion_z_the_animation",
  },
  {
    key: "128737:ED:2",
    label: "《新幹線變形機器人 Z》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.shinkalion.com/series2/onair/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shinkansen_henkei_robo_shinkalion_z_the_animation",
  },
  {
    key: "128737:ED:3",
    label: "《新幹線變形機器人 Z》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://www.shinkalion.com/series2/onair/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shinkansen_henkei_robo_shinkalion_z_the_animation",
  },
  {
    key: "128737:ED:4",
    label: "《新幹線變形機器人 Z》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://www.shinkalion.com/series2/onair/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shinkansen_henkei_robo_shinkalion_z_the_animation",
  },
  {
    key: "112608:OP:1",
    label:
      "《持續狩獵史萊姆三百年，不知不覺就練到LV MAX》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://1st.slime300-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/slime_taoshite_300_nen_shiranai_uchi_ni_level_max_ni_nattemashita",
  },
  {
    key: "112608:ED:1",
    label:
      "《持續狩獵史萊姆三百年，不知不覺就練到LV MAX》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://1st.slime300-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/slime_taoshite_300_nen_shiranai_uchi_ni_level_max_ni_nattemashita",
  },
  {
    key: "120376:OP:1",
    label: "《美麗新世界 The Animation》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl:
      "https://www.jp.square-enix.com/music/sem/page/subarashiki/animeost/",
    crossCheckUrl:
      "https://animethemes.moe/anime/subarashiki_kono_sekai_the_animation",
  },
  {
    key: "120376:OP:2",
    label: "《美麗新世界 The Animation》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl:
      "https://www.jp.square-enix.com/music/sem/page/subarashiki/animeost/",
    crossCheckUrl:
      "https://animethemes.moe/anime/subarashiki_kono_sekai_the_animation",
  },
  {
    key: "120376:ED:1",
    label: "《美麗新世界 The Animation》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl:
      "https://www.jp.square-enix.com/music/sem/page/subarashiki/animeost/",
    crossCheckUrl:
      "https://animethemes.moe/anime/subarashiki_kono_sekai_the_animation",
  },
  {
    key: "129814:OP:1",
    label: "《BLUE REFLECTION : 澪》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.bluereflection-ray.com/",
    crossCheckUrl: "https://animethemes.moe/anime/blue_reflection_ray",
  },
  {
    key: "129814:ED:1",
    label: "《BLUE REFLECTION : 澪》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.bluereflection-ray.com/",
    crossCheckUrl: "https://animethemes.moe/anime/blue_reflection_ray",
  },
  {
    key: "129814:OP:2",
    label: "《BLUE REFLECTION : 澪》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://www.bluereflection-ray.com/",
    crossCheckUrl: "https://animethemes.moe/anime/blue_reflection_ray",
  },
  {
    key: "129814:ED:2",
    label: "《BLUE REFLECTION : 澪》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.bluereflection-ray.com/",
    crossCheckUrl: "https://animethemes.moe/anime/blue_reflection_ray",
  },
  {
    key: "113428:ED:1",
    label: "《美少年偵探團》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://bishonen-tanteidan.com/",
    crossCheckUrl: "https://animethemes.moe/anime/bishounen_tanteidan",
  },
  {
    key: "113428:OP:1",
    label: "《美少年偵探團》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://bishonen-tanteidan.com/",
    crossCheckUrl: "https://animethemes.moe/anime/bishounen_tanteidan",
  },
  {
    key: "113428:ED:2",
    label: "《美少年偵探團》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://bishonen-tanteidan.com/",
    crossCheckUrl: "https://animethemes.moe/anime/bishounen_tanteidan",
  },
  {
    key: "116589:OP:1",
    label: "《86─不存在的戰區─》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://anime-86.com/",
    crossCheckUrl: "https://animethemes.moe/anime/86",
  },
  {
    key: "116589:ED:1",
    label: "《86─不存在的戰區─》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://anime-86.com/",
    crossCheckUrl: "https://animethemes.moe/anime/86",
  },
  {
    key: "116589:ED:2",
    label: "《86─不存在的戰區─》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://anime-86.com/",
    crossCheckUrl: "https://animethemes.moe/anime/86",
  },
  {
    key: "119683:OP:1",
    label: "《EDENS ZERO 伊甸星原》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://edens-zero.net/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/edens_zero",
  },
  {
    key: "119683:ED:1",
    label: "《EDENS ZERO 伊甸星原》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://edens-zero.net/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/edens_zero",
  },
  {
    key: "119683:OP:2",
    label: "《EDENS ZERO 伊甸星原》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://edens-zero.net/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/edens_zero",
  },
  {
    key: "119683:ED:2",
    label: "《EDENS ZERO 伊甸星原》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://edens-zero.net/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/edens_zero",
  },
  {
    key: "120120:OP:1",
    label: "《東京復仇者》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://tokyo-revengers-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tokyo_revengers",
  },
  {
    key: "120120:ED:1",
    label: "《東京復仇者》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://tokyo-revengers-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tokyo_revengers",
  },
  {
    key: "120120:ED:2",
    label: "《東京復仇者》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://tokyo-revengers-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tokyo_revengers",
  },
  {
    key: "120534:OP:1",
    label: "《大運動會 ReSTART!》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://daiundoukai-restart.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/battle_athletess_daiundoukai_restart",
  },
  {
    key: "120534:ED:1",
    label: "《大運動會 ReSTART!》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://daiundoukai-restart.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/battle_athletess_daiundoukai_restart",
  },
  {
    key: "120534:ED:2",
    label: "《大運動會 ReSTART!》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://daiundoukai-restart.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/battle_athletess_daiundoukai_restart",
  },
  {
    key: "120697:OP:1",
    label: "《不要欺負我，長瀞同學》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.nagatorosan.jp/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/ijiranaide_nagatoro_san",
  },
  {
    key: "120697:ED:1",
    label: "《不要欺負我，長瀞同學》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.nagatorosan.jp/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/ijiranaide_nagatoro_san",
  },
  {
    key: "125038:OP:1",
    label: "《SHADOWS HOUSE 影宅》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://shadowshouse-anime.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/shadows_house",
  },
  {
    key: "125038:ED:1",
    label: "《SHADOWS HOUSE 影宅》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://shadowshouse-anime.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/shadows_house",
  },
  {
    key: "125038:ED:2",
    label: "《SHADOWS HOUSE 影宅》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://shadowshouse-anime.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/shadows_house",
  },
  {
    key: "130777:OP:1",
    label: "《萌可魯玩偶貓 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://mewkledreamy.com/",
    crossCheckUrl: "https://animethemes.moe/anime/mewkledreamy_mix",
  },
  {
    key: "130777:ED:1",
    label: "《萌可魯玩偶貓 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://mewkledreamy.com/",
    crossCheckUrl: "https://animethemes.moe/anime/mewkledreamy_mix",
  },
  {
    key: "114535:OP:1",
    label: "《給不滅的你》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.anime-fumetsunoanatae.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/fumetsu_no_anata_e",
  },
  {
    key: "114535:ED:1",
    label: "《給不滅的你》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.anime-fumetsunoanatae.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/fumetsu_no_anata_e",
  },
  {
    key: "124675:OP:1",
    label: "《青梅竹馬絕對不會輸的戀愛喜劇》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://osamake.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/osananajimi_ga_zettai_ni_makenai_love_comedy",
  },
  {
    key: "124675:ED:1",
    label: "《青梅竹馬絕對不會輸的戀愛喜劇》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://osamake.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/osananajimi_ga_zettai_ni_makenai_love_comedy",
  },
  {
    key: "125867:OP:1",
    label: "《拳鬥暗黑傳 The Roman Fighter》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://cestvs-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/cestvs_the_roman_fighter",
  },
  {
    key: "125867:ED:1",
    label: "《拳鬥暗黑傳 The Roman Fighter》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://cestvs-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/cestvs_the_roman_fighter",
  },
  {
    key: "116338:OP:1",
    label: "《入間同學入魔了！第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www6.nhk.or.jp/anime/program/detail.html?i=iruma",
    crossCheckUrl:
      "https://animethemes.moe/anime/mairimashita_iruma_kun_2nd_season",
  },
  {
    key: "116338:ED:1",
    label: "《入間同學入魔了！第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www6.nhk.or.jp/anime/program/detail.html?i=iruma",
    crossCheckUrl:
      "https://animethemes.moe/anime/mairimashita_iruma_kun_2nd_season",
  },
  {
    key: "116338:ED:2",
    label: "《入間同學入魔了！第二季》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www6.nhk.or.jp/anime/program/detail.html?i=iruma",
    crossCheckUrl:
      "https://animethemes.moe/anime/mairimashita_iruma_kun_2nd_season",
  },
  {
    key: "101216:OP:1",
    label: "《干支魂～貓客萬來～》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://etotama.com/nyankyakubanrai/media/",
    crossCheckUrl: "https://animethemes.moe/anime/etotama_nyankyaku_banrai",
  },
  {
    key: "101216:ED:1",
    label: "《干支魂～貓客萬來～》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://etotama.com/nyankyakubanrai/media/",
    crossCheckUrl: "https://animethemes.moe/anime/etotama_nyankyaku_banrai",
  },
  {
    key: "127399:OP:1",
    label: "《終末的女武神》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://ragnarok-official.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/shuumatsu_no_walkure",
  },
  {
    key: "127399:ED:1",
    label: "《終末的女武神》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://ragnarok-official.com/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/shuumatsu_no_walkure",
  },
];

function sourcesFor(
  row: ReviewedThemeSource,
): readonly CuratedThemeSourceSeed[] {
  return [
    {
      label: row.label,
      url: row.firstPartyUrl,
      language: row.firstPartyUrl.includes("youtube.com")
        ? "multi"
        : row.firstPartyUrl.includes("en.gundam.info")
          ? "en"
          : "ja",
      role: "first_party",
    },
    {
      label: "AnimeThemes：OP／ED 用途、版本與演唱者交叉核對",
      url: row.crossCheckUrl,
      language: "en",
      role: "cross_check",
    },
  ];
}

export const curated2021SpringThemeSources = Object.fromEntries(
  reviewedThemeSources.map((row) => [row.key, sourcesFor(row)]),
) satisfies CuratedThemeSourceOverrideMap;
