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
    key: "113585:OP:1",
    label: "《花樣滑冰Stars》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://skateleadingstars.com/",
    crossCheckUrl: "https://animethemes.moe/anime/skate_leadingstars",
  },
  {
    key: "113585:ED:1",
    label: "《花樣滑冰Stars》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://skateleadingstars.com/",
    crossCheckUrl: "https://animethemes.moe/anime/skate_leadingstars",
  },
  {
    key: "127536:OP:1",
    label: "《幼女社長》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://mujina-company.com/",
    crossCheckUrl: "https://animethemes.moe/anime/youjo_shachou",
  },
  {
    key: "127536:ED:1",
    label: "《幼女社長》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://mujina-company.com/",
    crossCheckUrl: "https://animethemes.moe/anime/youjo_shachou",
  },
  {
    key: "112649:OP:1",
    label:
      "《比方說，這是個出身魔王關附近的少年在新手村生活的故事》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://lasdan.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/tatoeba_last_dungeon_mae_no_mura_no_shounen_ga_joban_no_machi_de_kurasu_youna_monogatari",
  },
  {
    key: "112649:ED:1",
    label:
      "《比方說，這是個出身魔王關附近的少年在新手村生活的故事》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://lasdan.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/tatoeba_last_dungeon_mae_no_mura_no_shounen_ga_joban_no_machi_de_kurasu_youna_monogatari",
  },
  {
    key: "116287:OP:1",
    label: "《裏世界遠足》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://othersidepicnic.com/",
    crossCheckUrl: "https://animethemes.moe/anime/urasekai_picnic",
  },
  {
    key: "116287:ED:1",
    label: "《裏世界遠足》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://othersidepicnic.com/",
    crossCheckUrl: "https://animethemes.moe/anime/urasekai_picnic",
  },
  {
    key: "124131:OP:1",
    label: "《演劇偶像》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://gekidol.com/products/dvdbox.php",
    crossCheckUrl: "https://animethemes.moe/anime/gekidol",
  },
  {
    key: "124131:OP:2",
    label: "《演劇偶像》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://gekidol.com/products/dvdbox.php",
    crossCheckUrl: "https://animethemes.moe/anime/gekidol",
  },
  {
    key: "124131:ED:1",
    label: "《演劇偶像》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://gekidol.com/products/dvdbox.php",
    crossCheckUrl: "https://animethemes.moe/anime/gekidol",
  },
  {
    key: "124131:ED:2",
    label: "《演劇偶像》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://gekidol.com/products/dvdbox.php",
    crossCheckUrl: "https://animethemes.moe/anime/gekidol",
  },
  {
    key: "124131:ED:3",
    label: "《演劇偶像》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://gekidol.com/products/dvdbox.php",
    crossCheckUrl: "https://animethemes.moe/anime/gekidol",
  },
  {
    key: "124131:ED:4",
    label: "《演劇偶像》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://gekidol.com/products/dvdbox.php",
    crossCheckUrl: "https://animethemes.moe/anime/gekidol",
  },
  {
    key: "124223:OP:1",
    label: "《賽馬娘 Pretty Derby 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl:
      "https://anime-umamusume.jp/archive/2nd/music/detail_354.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/uma_musume_pretty_derby_season_2",
  },
  {
    key: "124223:ED:1",
    label: "《賽馬娘 Pretty Derby 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl:
      "https://anime-umamusume.jp/archive/2nd/music/detail_354.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/uma_musume_pretty_derby_season_2",
  },
  {
    key: "124223:ED:2",
    label: "《賽馬娘 Pretty Derby 第二季》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl:
      "https://anime-umamusume.jp/archive/2nd/music/detail_357.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/uma_musume_pretty_derby_season_2",
  },
  {
    key: "124223:ED:3",
    label: "《賽馬娘 Pretty Derby 第二季》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl:
      "https://anime-umamusume.jp/archive/2nd/music/detail_357.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/uma_musume_pretty_derby_season_2",
  },
  {
    key: "124223:ED:4",
    label: "《賽馬娘 Pretty Derby 第二季》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl:
      "https://anime-umamusume.jp/archive/2nd/music/detail_936.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/uma_musume_pretty_derby_season_2",
  },
  {
    key: "124223:ED:5",
    label: "《賽馬娘 Pretty Derby 第二季》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl:
      "https://anime-umamusume.jp/archive/2nd/music/detail_936.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/uma_musume_pretty_derby_season_2",
  },
  {
    key: "109010:OP:1",
    label: "《ICHU偶像進行曲》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://etoile-anime.jp/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/ichu_halfway_through_the_idol",
  },
  {
    key: "109010:OP:2",
    label: "《ICHU偶像進行曲》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://etoile-anime.jp/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/ichu_halfway_through_the_idol",
  },
  {
    key: "109010:ED:1",
    label: "《ICHU偶像進行曲》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://etoile-anime.jp/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/ichu_halfway_through_the_idol",
  },
  {
    key: "109010:ED:2",
    label: "《ICHU偶像進行曲》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://etoile-anime.jp/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/ichu_halfway_through_the_idol",
  },
  {
    key: "119661:OP:1",
    label:
      "《Re：從零開始的異世界生活 第二季 後半部》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://re-zero-anime.jp/tv/music/tv2.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/rezero_kara_hajimeru_isekai_seikatsu_2nd_season_part_2",
  },
  {
    key: "119661:ED:1",
    label:
      "《Re：從零開始的異世界生活 第二季 後半部》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://re-zero-anime.jp/tv/music/tv2.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/rezero_kara_hajimeru_isekai_seikatsu_2nd_season_part_2",
  },
  {
    key: "119661:ED:2",
    label:
      "《Re：從零開始的異世界生活 第二季 後半部》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://re-zero-anime.jp/tv/music/tv2.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/rezero_kara_hajimeru_isekai_seikatsu_2nd_season_part_2",
  },
  {
    key: "104459:OP:1",
    label: "《搖曳露營△ 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://yurucamp.jp/second/",
    crossCheckUrl: "https://animethemes.moe/anime/yuru_camp_season_2",
  },
  {
    key: "104459:ED:1",
    label: "《搖曳露營△ 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://yurucamp.jp/second/",
    crossCheckUrl: "https://animethemes.moe/anime/yuru_camp_season_2",
  },
  {
    key: "113476:OP:1",
    label: "《SHOW BY ROCK!! STARS!!》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://showbyrock-anime-s.com/",
    crossCheckUrl: "https://animethemes.moe/anime/show_by_rock_stars",
  },
  {
    key: "113476:ED:1",
    label: "《SHOW BY ROCK!! STARS!!》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://showbyrock-anime-s.com/",
    crossCheckUrl: "https://animethemes.moe/anime/show_by_rock_stars",
  },
  {
    key: "114194:OP:1",
    label: "《BEASTARS 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://bst-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/beastars_2nd_season",
  },
  {
    key: "114194:ED:1",
    label: "《BEASTARS 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://bst-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/beastars_2nd_season",
  },
  {
    key: "114301:OP:1",
    label: "《Hortensia SAGA 蒼之騎士團》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://site.animehorsaga.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/hortensia_saga_tv",
  },
  {
    key: "114301:ED:1",
    label: "《Hortensia SAGA 蒼之騎士團》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://site.animehorsaga.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/hortensia_saga_tv",
  },
  {
    key: "114301:ED:2",
    label: "《Hortensia SAGA 蒼之騎士團》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://site.animehorsaga.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/hortensia_saga_tv",
  },
  {
    key: "119123:OP:1",
    label: "《裝甲娘戰機》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://soukou-musume-senki.com/",
    crossCheckUrl: "https://animethemes.moe/anime/soukou_musume_senki",
  },
  {
    key: "119123:ED:1",
    label: "《裝甲娘戰機》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://soukou-musume-senki.com/",
    crossCheckUrl: "https://animethemes.moe/anime/soukou_musume_senki",
  },
  {
    key: "127692:OP:1",
    label: "《ABC修業日記》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.fumiyafujii.net/info/2020/11/30/5126",
    crossCheckUrl: "https://animethemes.moe/anime/abciee_shuugyou_nikki",
  },
  {
    key: "103632:OP:1",
    label: "《轉生成蜘蛛又怎樣！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kumo-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kumo_desu_ga_nani_ka",
  },
  {
    key: "103632:ED:1",
    label: "《轉生成蜘蛛又怎樣！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kumo-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kumo_desu_ga_nani_ka",
  },
  {
    key: "103632:OP:2",
    label: "《轉生成蜘蛛又怎樣！》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://kumo-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kumo_desu_ga_nani_ka",
  },
  {
    key: "103632:ED:2",
    label: "《轉生成蜘蛛又怎樣！》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://kumo-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kumo_desu_ga_nani_ka",
  },
  {
    key: "108631:OP:1",
    label: "《工作細胞 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://hataraku-saibou.com/",
    crossCheckUrl: "https://animethemes.moe/anime/hataraku_saibou_2021",
  },
  {
    key: "108631:ED:1",
    label: "《工作細胞 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://hataraku-saibou.com/",
    crossCheckUrl: "https://animethemes.moe/anime/hataraku_saibou_2021",
  },
  {
    key: "108725:OP:1",
    label: "《約定的夢幻島 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://neverland-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/yakusoku_no_neverland_2nd_season",
  },
  {
    key: "108725:ED:1",
    label: "《約定的夢幻島 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://neverland-anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/yakusoku_no_neverland_2nd_season",
  },
  {
    key: "109261:OP:1",
    label: "《五等分的新娘 ∬》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.tbs.co.jp/anime/5hanayome/2nd/",
    crossCheckUrl: "https://animethemes.moe/anime/gotoubun_no_hanayome_2021",
  },
  {
    key: "109261:ED:1",
    label: "《五等分的新娘 ∬》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.tbs.co.jp/anime/5hanayome/2nd/",
    crossCheckUrl: "https://animethemes.moe/anime/gotoubun_no_hanayome_2021",
  },
  {
    key: "109261:ED:2",
    label: "《五等分的新娘 ∬》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.tbs.co.jp/anime/5hanayome/2nd/",
    crossCheckUrl: "https://animethemes.moe/anime/gotoubun_no_hanayome_2021",
  },
  {
    key: "112443:OP:1",
    label: "《弱角友崎同學》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://tomozaki-koushiki.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/jaku_chara_tomozaki_kun",
  },
  {
    key: "112443:ED:1",
    label: "《弱角友崎同學》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://tomozaki-koushiki.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/jaku_chara_tomozaki_kun",
  },
  {
    key: "112443:ED:2",
    label: "《弱角友崎同學》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://tomozaki-koushiki.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/jaku_chara_tomozaki_kun",
  },
  {
    key: "112443:ED:3",
    label: "《弱角友崎同學》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://tomozaki-koushiki.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/jaku_chara_tomozaki_kun",
  },
  {
    key: "112443:ED:4",
    label: "《弱角友崎同學》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://tomozaki-koushiki.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/jaku_chara_tomozaki_kun",
  },
  {
    key: "112443:ED:5",
    label: "《弱角友崎同學》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://tomozaki-koushiki.com/music/",
    crossCheckUrl: "https://animethemes.moe/anime/jaku_chara_tomozaki_kun",
  },
  {
    key: "113231:OP:1",
    label: "《2.43 清陰高中男子排球社》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://243anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/243_seiin_koukou_danshi_volley_bu",
  },
  {
    key: "113231:ED:1",
    label: "《2.43 清陰高中男子排球社》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://243anime.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/243_seiin_koukou_danshi_volley_bu",
  },
  {
    key: "117533:OP:1",
    label: "《工作細胞 BLACK》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://saibou-black.com/",
    crossCheckUrl: "https://animethemes.moe/anime/hataraku_saibou_black",
  },
  {
    key: "117533:ED:1",
    label: "《工作細胞 BLACK》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://saibou-black.com/",
    crossCheckUrl: "https://animethemes.moe/anime/hataraku_saibou_black",
  },
  {
    key: "117696:OP:1",
    label: "《天地創造設計部》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://tendebu.jp/news/detail.php?id=1087425",
    crossCheckUrl: "https://animethemes.moe/anime/tenchi_souzou_design_bu",
  },
  {
    key: "117696:ED:1",
    label: "《天地創造設計部》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://tendebu.jp/news/detail.php?id=1087425",
    crossCheckUrl: "https://animethemes.moe/anime/tenchi_souzou_design_bu",
  },
  {
    key: "117696:ED:2",
    label: "《天地創造設計部》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://tendebu.jp/news/detail.php?id=1087425",
    crossCheckUrl: "https://animethemes.moe/anime/tenchi_souzou_design_bu",
  },
  {
    key: "124555:OP:1",
    label: "《IDOLLS!》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://wsy-idolls.com/",
    crossCheckUrl: "https://animethemes.moe/anime/idolls_idol_survival",
  },
  {
    key: "124555:ED:1",
    label: "《IDOLLS!》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://wsy-idolls.com/",
    crossCheckUrl: "https://animethemes.moe/anime/idolls_idol_survival",
  },
  {
    key: "114307:OP:1",
    label: "《BACK ARROW》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://back-arrow.com/",
    crossCheckUrl: "https://animethemes.moe/anime/back_arrow",
  },
  {
    key: "114307:ED:1",
    label: "《BACK ARROW》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://back-arrow.com/",
    crossCheckUrl: "https://animethemes.moe/anime/back_arrow",
  },
  {
    key: "114307:OP:2",
    label: "《BACK ARROW》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://back-arrow.com/",
    crossCheckUrl: "https://animethemes.moe/anime/back_arrow",
  },
  {
    key: "114307:ED:2",
    label: "《BACK ARROW》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://back-arrow.com/",
    crossCheckUrl: "https://animethemes.moe/anime/back_arrow",
  },
  {
    key: "116944:OP:1",
    label: "《WIXOSS DIVA(A)LIVE》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.takaratomy.co.jp/products/en.wixoss/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/wixoss_divaalive",
  },
  {
    key: "116944:ED:1",
    label: "《WIXOSS DIVA(A)LIVE》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.takaratomy.co.jp/products/en.wixoss/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/wixoss_divaalive",
  },
  {
    key: "116944:ED:2",
    label: "《WIXOSS DIVA(A)LIVE》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.takaratomy.co.jp/products/en.wixoss/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/wixoss_divaalive",
  },
  {
    key: "116944:ED:3",
    label: "《WIXOSS DIVA(A)LIVE》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://www.takaratomy.co.jp/products/en.wixoss/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/wixoss_divaalive",
  },
  {
    key: "116944:ED:4",
    label: "《WIXOSS DIVA(A)LIVE》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://www.takaratomy.co.jp/products/en.wixoss/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/wixoss_divaalive",
  },
  {
    key: "116944:ED:5",
    label: "《WIXOSS DIVA(A)LIVE》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://www.takaratomy.co.jp/products/en.wixoss/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/wixoss_divaalive",
  },
  {
    key: "116944:ED:6",
    label: "《WIXOSS DIVA(A)LIVE》第一方歌曲資料：ED6 用途與演唱者",
    firstPartyUrl: "https://www.takaratomy.co.jp/products/en.wixoss/anime/",
    crossCheckUrl: "https://animethemes.moe/anime/wixoss_divaalive",
  },
  {
    key: "118375:OP:1",
    label: "《只有我能進入的隱藏迷宮》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kakushidungeon-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/ore_dake_haireru_kakushi_dungeon",
  },
  {
    key: "118375:ED:1",
    label: "《只有我能進入的隱藏迷宮》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kakushidungeon-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/ore_dake_haireru_kakushi_dungeon",
  },
  {
    key: "123785:OP:1",
    label: "《Praeter之傷》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://project-scard.com/cd/op/",
    crossCheckUrl:
      "https://animethemes.moe/anime/project_scard_praeter_no_kizu",
  },
  {
    key: "123785:ED:1",
    label: "《Praeter之傷》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.fwinc.co.jp/cd/65409/",
    crossCheckUrl:
      "https://animethemes.moe/anime/project_scard_praeter_no_kizu",
  },
  {
    key: "113814:OP:1",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "113814:ED:1",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "113814:ED:2",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "113814:ED:3",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "113814:ED:4",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "113814:ED:5",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "113814:ED:6",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：ED6 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "113814:ED:7",
    label: "《IDOLY PRIDE 偶像榮耀》第一方歌曲資料：ED7 用途與演唱者",
    firstPartyUrl: "https://anime.idolypride.jp/music/",
    crossCheckUrl: "https://animethemes.moe/anime/idoly_pride",
  },
  {
    key: "114085:OP:1",
    label: "《怪物事變》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://kemonojihen-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kemono_jihen",
  },
  {
    key: "114085:ED:1",
    label: "《怪物事變》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://kemonojihen-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kemono_jihen",
  },
  {
    key: "114087:OP:1",
    label: "《境界觸發者 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/wt/",
    crossCheckUrl: "https://animethemes.moe/anime/world_trigger_2nd_season",
  },
  {
    key: "114087:ED:1",
    label: "《境界觸發者 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/wt/",
    crossCheckUrl: "https://animethemes.moe/anime/world_trigger_2nd_season",
  },
  {
    key: "123779:OP:1",
    label: "《怪病醫拉姆尼》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://ramune-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kai_byoui_ramune",
  },
  {
    key: "123779:ED:1",
    label: "《怪病醫拉姆尼》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://ramune-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kai_byoui_ramune",
  },
  {
    key: "124080:OP:1",
    label: "《堀與宮村》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://horimiya-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/horimiya",
  },
  {
    key: "124080:ED:1",
    label: "《堀與宮村》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://horimiya-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/horimiya",
  },
  {
    key: "124153:OP:1",
    label: "《SK8 the Infinity》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://sk8-project.com/",
    crossCheckUrl: "https://animethemes.moe/anime/sk",
  },
  {
    key: "124153:ED:1",
    label: "《SK8 the Infinity》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://sk8-project.com/",
    crossCheckUrl: "https://animethemes.moe/anime/sk",
  },
  {
    key: "124394:ED:1",
    label: "《八十龜醬觀察日記 第三季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://yatogame.nagoya/",
    crossCheckUrl:
      "https://animethemes.moe/anime/yatogame_chan_kansatsu_nikki_sansatsume",
  },
  {
    key: "128872:OP:1",
    label: "《偶像學園Planet！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.aikatsu.com/planet/products/cd/oped_ap/",
    crossCheckUrl:
      "https://zh.wikipedia.org/wiki/%E5%81%B6%E5%83%8F%E5%AD%B8%E5%9C%92Planet%EF%BC%81",
  },
  {
    key: "128872:ED:1",
    label: "《偶像學園Planet！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.aikatsu.com/planet/products/cd/oped_ap/",
    crossCheckUrl:
      "https://zh.wikipedia.org/wiki/%E5%81%B6%E5%83%8F%E5%AD%B8%E5%9C%92Planet%EF%BC%81",
  },
  {
    key: "106503:OP:1",
    label: "《EX-ARM》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.exarm-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ex_arm",
  },
  {
    key: "106503:ED:1",
    label: "《EX-ARM》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.exarm-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/ex_arm",
  },
  {
    key: "108465:OP:1",
    label:
      "《無職轉生～到了異世界就拿出真本事～》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://mushokutensei.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/mushoku_tensei_isekai_ittara_honki_dasu",
  },
  {
    key: "108465:ED:1",
    label:
      "《無職轉生～到了異世界就拿出真本事～》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://mushokutensei.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/mushoku_tensei_isekai_ittara_honki_dasu",
  },
  {
    key: "108465:OP:2",
    label:
      "《無職轉生～到了異世界就拿出真本事～》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://mushokutensei.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/mushoku_tensei_isekai_ittara_honki_dasu",
  },
  {
    key: "109403:OP:1",
    label: "《悠悠哉哉少女日和 NON STOP》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://nonnontv.com/tvanime/",
    crossCheckUrl: "https://animethemes.moe/anime/non_non_biyori_nonstop",
  },
  {
    key: "109403:ED:1",
    label: "《悠悠哉哉少女日和 NON STOP》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://nonnontv.com/tvanime/",
    crossCheckUrl: "https://animethemes.moe/anime/non_non_biyori_nonstop",
  },
  {
    key: "126678:ED:1",
    label: "《闇芝居 第八季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/yamishibai8/",
    crossCheckUrl: "https://animethemes.moe/anime/yami_shibai_8",
  },
  {
    key: "108511:OP:1",
    label:
      "《關於我轉生變成史萊姆這檔事 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.ten-sura.com/anime/tensura",
    crossCheckUrl:
      "https://animethemes.moe/anime/tensei_shitara_slime_datta_ken_2nd_season",
  },
  {
    key: "108511:ED:1",
    label:
      "《關於我轉生變成史萊姆這檔事 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.ten-sura.com/anime/tensura",
    crossCheckUrl:
      "https://animethemes.moe/anime/tensei_shitara_slime_datta_ken_2nd_season",
  },
  {
    key: "114304:OP:1",
    label: "《廚神小當家 第二季》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://cookingmaster-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shin_chuuka_ichiban_2nd_season",
  },
  {
    key: "114304:ED:1",
    label: "《廚神小當家 第二季》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://cookingmaster-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shin_chuuka_ichiban_2nd_season",
  },
  {
    key: "114473:OP:1",
    label: "《碧藍航線 微速前進！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://straycats.co.jp/news/music/news-80/",
    crossCheckUrl: "https://animethemes.moe/anime/azur_lane_bisoku_zenshin",
  },
  {
    key: "114473:ED:1",
    label: "《碧藍航線 微速前進！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://straycats.co.jp/news/music/news-80/",
    crossCheckUrl: "https://animethemes.moe/anime/azur_lane_bisoku_zenshin",
  },
  {
    key: "130402:OP:1",
    label: "《WAVE!! ~來衝浪吧!!~》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://wave-anime.com/discography/detail.php?id=1017896",
    crossCheckUrl: "https://anime-song-info.com/202101-winter-song/",
  },
  {
    key: "130402:ED:1",
    label: "《WAVE!! ~來衝浪吧!!~》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://wave-anime.com/discography/detail.php?id=1017896",
    crossCheckUrl: "https://anime-song-info.com/202101-winter-song/",
  },
  {
    key: "114862:OP:1",
    label: "《記錄的地平線 第三季：圓桌崩壞》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl:
      "https://www6.nhk.or.jp/anime/program/detail.html?i=loghorizon3",
    crossCheckUrl: "https://animethemes.moe/anime/log_horizon_entaku_houkai",
  },
  {
    key: "114862:ED:1",
    label: "《記錄的地平線 第三季：圓桌崩壞》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl:
      "https://www6.nhk.or.jp/anime/program/detail.html?i=loghorizon3",
    crossCheckUrl: "https://animethemes.moe/anime/log_horizon_entaku_houkai",
  },
  {
    key: "116752:OP:1",
    label: "《七大罪 第四季：憤怒的審判》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.7-taizai.net/",
    crossCheckUrl:
      "https://animethemes.moe/anime/nanatsu_no_taizai_funnu_no_shinpan",
  },
  {
    key: "116752:ED:1",
    label: "《七大罪 第四季：憤怒的審判》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.7-taizai.net/",
    crossCheckUrl:
      "https://animethemes.moe/anime/nanatsu_no_taizai_funnu_no_shinpan",
  },
  {
    key: "116752:OP:2",
    label: "《七大罪 第四季：憤怒的審判》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://www.7-taizai.net/",
    crossCheckUrl:
      "https://animethemes.moe/anime/nanatsu_no_taizai_funnu_no_shinpan",
  },
  {
    key: "116752:ED:2",
    label: "《七大罪 第四季：憤怒的審判》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.7-taizai.net/",
    crossCheckUrl:
      "https://animethemes.moe/anime/nanatsu_no_taizai_funnu_no_shinpan",
  },
  {
    key: "120150:ED:1",
    label: "《文豪野犬 汪！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://bungo-stray-dogs-wan.com/",
    crossCheckUrl: "https://animethemes.moe/anime/bungou_stray_dogs_wan",
  },
  {
    key: "120150:ED:2",
    label: "《文豪野犬 汪！》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://bungo-stray-dogs-wan.com/",
    crossCheckUrl: "https://animethemes.moe/anime/bungou_stray_dogs_wan",
  },
  {
    key: "121681:OP:1",
    label: "《世界魔女出動！》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:1",
    label: "《世界魔女出動！》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:2",
    label: "《世界魔女出動！》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:3",
    label: "《世界魔女出動！》第一方歌曲資料：ED3 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:4",
    label: "《世界魔女出動！》第一方歌曲資料：ED4 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:5",
    label: "《世界魔女出動！》第一方歌曲資料：ED5 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:6",
    label: "《世界魔女出動！》第一方歌曲資料：ED6 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:7",
    label: "《世界魔女出動！》第一方歌曲資料：ED7 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:8",
    label: "《世界魔女出動！》第一方歌曲資料：ED8 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:9",
    label: "《世界魔女出動！》第一方歌曲資料：ED9 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:10",
    label: "《世界魔女出動！》第一方歌曲資料：ED10 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:11",
    label: "《世界魔女出動！》第一方歌曲資料：ED11 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "121681:ED:12",
    label: "《世界魔女出動！》第一方歌曲資料：ED12 用途與演唱者",
    firstPartyUrl: "https://w-witch.jp/ww_takeoff/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/world_witches_hasshin_shimasu",
  },
  {
    key: "124845:OP:1",
    label: "《奇蛋物語》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://wonder-egg-priority.com/",
    crossCheckUrl: "https://animethemes.moe/anime/wonder_egg_priority",
  },
  {
    key: "124845:ED:1",
    label: "《奇蛋物語》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://wonder-egg-priority.com/",
    crossCheckUrl: "https://animethemes.moe/anime/wonder_egg_priority",
  },
  {
    key: "113936:OP:1",
    label: "《Dr.STONE 新石紀戰爭》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://dr-stone.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/dr_stone_stone_wars",
  },
  {
    key: "113936:ED:1",
    label: "《Dr.STONE 新石紀戰爭》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://dr-stone.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/dr_stone_stone_wars",
  },
  {
    key: "127689:ED:1",
    label: "《金塔馬尼狗》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://prtimes.jp/main/html/rd/p/000000735.000029501.html",
    crossCheckUrl: "https://acgsecrets.hk/anime/717/",
  },
  {
    key: "117085:OP:1",
    label: "《魔術士歐菲流浪之旅 基姆拉克篇》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://ssorphen-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/majutsushi_orphen_hagure_tabi_kimluck_hen",
  },
  {
    key: "117085:ED:1",
    label: "《魔術士歐菲流浪之旅 基姆拉克篇》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://ssorphen-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/majutsushi_orphen_hagure_tabi_kimluck_hen",
  },
  {
    key: "128563:ED:1",
    label: "《D4DJ Petit Mix》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://d4dj-pj.com/discography/post-29",
    crossCheckUrl: "https://anime.d4dj-pj.com/petit-mix/cast-staff/",
  },
  {
    key: "130296:OP:1",
    label: "《異能のアイシス》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://prtimes.jp/main/html/rd/p/000000003.000074075.html",
    crossCheckUrl: "https://youranimes.tw/animes/1318",
  },
  {
    key: "130296:ED:1",
    label: "《異能のアイシス》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://prtimes.jp/main/html/rd/p/000000003.000074075.html",
    crossCheckUrl: "https://youranimes.tw/animes/1318",
  },
  {
    key: "110200:OP:1",
    label: "《吸血鬼之愛》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.vladlove.com/music.html",
    crossCheckUrl: "https://animethemes.moe/anime/vlad_love",
  },
  {
    key: "110200:OP:2",
    label: "《吸血鬼之愛》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://www.vladlove.com/music.html",
    crossCheckUrl: "https://animethemes.moe/anime/vlad_love",
  },
  {
    key: "110200:ED:1",
    label: "《吸血鬼之愛》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.vladlove.com/music.html",
    crossCheckUrl: "https://animethemes.moe/anime/vlad_love",
  },
  {
    key: "110200:ED:2",
    label: "《吸血鬼之愛》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.vladlove.com/music.html",
    crossCheckUrl: "https://animethemes.moe/anime/vlad_love",
  },
  {
    key: "127691:ED:1",
    label: "《斯娜與瑪努的奇妙沙漠》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://suna-manu.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/okashi_na_sabaku_no_suna_to_manu",
  },
  {
    key: "117067:OP:1",
    label: "《舞伎家的料理人》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://tsujiayano.com/news/1108.html",
    crossCheckUrl: "https://tsujiayano.com/news/1152.html",
  },
  {
    key: "125428:OP:1",
    label: "《天空侵犯》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://high-rise-invasion.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tenkuu_shinpan",
  },
  {
    key: "125428:ED:1",
    label: "《天空侵犯》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://high-rise-invasion.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tenkuu_shinpan",
  },
  {
    key: "126905:OP:1",
    label: "《熱情閃耀光之美少女》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/tropical-rouge_precure/",
    crossCheckUrl: "https://animethemes.moe/anime/tropical_rouge_precure",
  },
  {
    key: "126905:ED:1",
    label: "《熱情閃耀光之美少女》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/tropical-rouge_precure/",
    crossCheckUrl: "https://animethemes.moe/anime/tropical_rouge_precure",
  },
  {
    key: "126905:ED:2",
    label: "《熱情閃耀光之美少女》第一方歌曲資料：ED2 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/tropical-rouge_precure/",
    crossCheckUrl: "https://animethemes.moe/anime/tropical_rouge_precure",
  },
  {
    key: "126905:OP:2",
    label: "《熱情閃耀光之美少女》第一方歌曲資料：OP2 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/tropical-rouge_precure/",
    crossCheckUrl: "https://animethemes.moe/anime/tropical_rouge_precure",
  },
  {
    key: "126905:OP:3",
    label: "《熱情閃耀光之美少女》第一方歌曲資料：OP3 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/tropical-rouge_precure/",
    crossCheckUrl: "https://animethemes.moe/anime/tropical_rouge_precure",
  },
  {
    key: "130707:OP:1",
    label: "《教教我吧北齋！-THE ANIMATION-》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl: "https://www.hokusai-anime.jp/sp/music.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/oshiete_hokusai_the_animation",
  },
  {
    key: "130707:ED:1",
    label: "《教教我吧北齋！-THE ANIMATION-》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.hokusai-anime.jp/sp/music.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/oshiete_hokusai_the_animation",
  },
  {
    key: "102498:ED:1",
    label: "《B：彼之初 第二季：繼承》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl: "https://www.b-animation.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/b_the_beginning_succession",
  },
  {
    key: "131118:ED:1",
    label: "《實況野球 威力高中篇》第一方歌曲資料：ED1 用途與演唱者",
    firstPartyUrl:
      "https://www.konami.com/games/corporate/ja/news/topics/20210318/",
    crossCheckUrl: "https://annict.com/works/8001",
  },
  {
    key: "149040:OP:1",
    label: "《房東與我 第三輯》第一方歌曲資料：OP1 用途與演唱者",
    firstPartyUrl:
      "https://www.jvcmusic.co.jp/-/Discography/A013518/VE3WA-18671.html",
    crossCheckUrl: "https://www.mau2.com/anime/ooyasantoboku/ep/13",
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

export const curated2021WinterThemeSources = Object.fromEntries(
  reviewedThemeSources.map((row) => [row.key, sourcesFor(row)]),
) satisfies CuratedThemeSourceOverrideMap;
