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
  {"anilistId":138714,"themeKeys":["OP:1","ED:1"],"label":"《平家物語》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://news.ponycanyon.co.jp/2021/09/59735","crossCheckUrl":"https://animethemes.moe/anime/heike_monogatari"},
  {"anilistId":137877,"themeKeys":["ED:1"],"label":"《加油吧同期醬》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://doukichan-anime.com/","crossCheckUrl":"https://animethemes.moe/anime/ganbare_douki_chan"},
  {"anilistId":139449,"themeKeys":["ED:1"],"label":"《星期一的豐滿 第二季》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://tawawa2-anime.com/","crossCheckUrl":"https://animethemes.moe/anime/getsuyoubi_no_tawawa_2"},
  {"anilistId":128705,"themeKeys":["OP:1","ED:1"],"label":"《藍色時期》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://blue-period.jp/","crossCheckUrl":"https://animethemes.moe/anime/blue_period"},
  {"anilistId":124195,"themeKeys":["OP:1","ED:1"],"label":"《範馬刃牙》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://baki-anime.jp/","crossCheckUrl":"https://animethemes.moe/anime/hanma_baki_son_of_ogre"},
  {"anilistId":87502,"themeKeys":["OP:1","ED:1","ED:2"],"label":"《百萬噸級武藏》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.universal-music.co.jp/level5/news/2022-06-28/","crossCheckUrl":"https://animethemes.moe/anime/megaton_kyuu_musashi"},
  {"anilistId":126790,"themeKeys":["OP:1","ED:1"],"label":"《SELECTION PROJECT》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://pjselection.com/","crossCheckUrl":"https://animethemes.moe/anime/selection_project"},
  {"anilistId":122292,"themeKeys":["OP:1","ED:1"],"label":"《結城友奈是勇者 -大滿開之章-》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://yuyuyu.tv/daimankai/product/","crossCheckUrl":"https://animethemes.moe/anime/yuuki_yuuna_wa_yuusha_de_aru_dai_mankai_no_shou"},
  {"anilistId":131264,"themeKeys":["OP:1","ED:1","OP:2","ED:2"],"label":"《半妖的夜叉姬 貮之章》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://hanyo-yashahime.com/music/","crossCheckUrl":"https://animethemes.moe/anime/hanyou_no_yashahime_sengoku_otogizoushi_ni_no_shou"},
  {"anilistId":132806,"themeKeys":["OP:1","ED:1"],"label":"《異世界食堂2》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://isekai-shokudo2.com/music.html","crossCheckUrl":"https://animethemes.moe/anime/isekai_shokudou_2"},
  {"anilistId":135939,"themeKeys":["OP:1","ED:1","ED:2"],"label":"《燒窯的話也要馬克杯  第二季》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://yakumo-project.com/music/","crossCheckUrl":"https://animethemes.moe/anime/yakunara_mug_cup_mo_niban_gama"},
  {"anilistId":137227,"themeKeys":["ED:1"],"label":"《女孩遇見男孩》第一方歌曲資料：官方主題歌與演唱者","firstPartyUrl":"https://dejimeetsgirl.okinawa/","crossCheckUrl":"https://animethemes.moe/anime/deji_meets_girl"},
  {"anilistId":109745,"themeKeys":["OP:1","ED:1"],"label":"《萬能戰士無比敵》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://muteking.jp/music/","crossCheckUrl":"https://animethemes.moe/anime/muteking_the_dancing_hero"},
  {"anilistId":126897,"themeKeys":["OP:1","ED:1"],"label":"《三角窗外是黑夜》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://sankakumado-anime.com/discography/","crossCheckUrl":"https://animethemes.moe/anime/sankaku_mado_no_sotogawa_wa_yoru"},
  {"anilistId":131083,"themeKeys":["OP:1","ED:1"],"label":"《陰陽眼見子》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://mierukochan.jp/music.html","crossCheckUrl":"https://animethemes.moe/anime/mieruko_chan"},
  {"anilistId":131586,"themeKeys":["OP:1","ED:1","ED:2","ED:3"],"label":"《86─不存在的戰區─ 第二季度》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://anime-86.com/music/","crossCheckUrl":"https://animethemes.moe/anime/86_2nd_season"},
  {"anilistId":132071,"themeKeys":["OP:1","ED:1"],"label":"《特斯拉筆記》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://teslanote.net/news/66/","crossCheckUrl":"https://animethemes.moe/anime/tesla_note"},
  {"anilistId":133510,"themeKeys":["OP:1","ED:1"],"label":"《群馬寶寶》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://gunmachan-official.jp/animation/","crossCheckUrl":"https://animethemes.moe/anime/gunma_chan"},
  {"anilistId":136119,"themeKeys":["OP:1","ED:1","OP:2","ED:2","OP:3","ED:3"],"label":"《星光魔法》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://avex.jp/primagi/discography/","crossCheckUrl":"https://animethemes.moe/anime/waccha_primagi"},
  {"anilistId":137309,"themeKeys":["OP:1","ED:1","ED:2","ED:3","ED:4","ED:5","ED:6"],"label":"《數碼暴龍 幽靈遊戲》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.toei-anim.co.jp/tv/digimon_ghost_game/about/music.php","crossCheckUrl":"https://animethemes.moe/anime/digimon_ghost_game"},
  {"anilistId":118103,"themeKeys":["OP:1","ED:1"],"label":"《吸血鬼馬上死》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://sugushinu-anime.jp/season1/music/","crossCheckUrl":"https://animethemes.moe/anime/kyuuketsuki_sugu_shinu"},
  {"anilistId":127720,"themeKeys":["OP:1","ED:1","OP:2","OP:3","OP:4","OP:5"],"label":"《無職轉生～到了異世界就拿出真本事～ 第二季度》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://mushokutensei.jp/music/","crossCheckUrl":"https://animethemes.moe/anime/mushoku_tensei_isekai_ittara_honki_dasu_part_2"},
  {"anilistId":131019,"themeKeys":["OP:1","ED:1"],"label":"《月與萊卡與吸血公主》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://tsuki-laika-nosferatu.com/staffcast","crossCheckUrl":"https://animethemes.moe/anime/tsuki_to_laika_to_nosferatu"},
  {"anilistId":128827,"themeKeys":["ED:1","OP:1","ED:2","ED:3"],"label":"《卡片戰鬥!! 先導者 overDress 第二季》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://anime.cf-vanguard.com/vgd/archive/overdress/staff-cast/","crossCheckUrl":"https://animethemes.moe/anime/cardfight_vanguard_overdress_season_2"},
  {"anilistId":129068,"themeKeys":["OP:1","ED:1"],"label":"《進化果實～不知不覺踏上勝利的人生～》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.tv-tokyo.co.jp/anime/shinkanomi/staff/","crossCheckUrl":"https://animethemes.moe/anime/shinka_no_mi_shiranai_uchi_ni_kachigumi_jinsei"},
  {"anilistId":131005,"themeKeys":["OP:1","ED:1"],"label":"《境界戰機》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.kyoukai-senki.net/staffcast/","crossCheckUrl":"https://animethemes.moe/anime/kyoukai_senki"},
  {"anilistId":126213,"themeKeys":["OP:1","ED:1"],"label":"《因為不是真正的夥伴而被逐出勇者隊伍，流落到邊境展開慢活人生》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://shinnonakama.com/music/","crossCheckUrl":"https://animethemes.moe/anime/shin_no_nakama_ja_nai_to_yuusha_no_party_wo_oidasareta_node_henkyou_de_slow_life_suru_koto_ni_shimashita"},
  {"anilistId":126793,"themeKeys":["OP:1","ED:1"],"label":"《橘色榮耀！PRIDE OF ORANGE》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://puraore.com/goods/disc.html","crossCheckUrl":"https://animethemes.moe/anime/puraore_pride_of_orange"},
  {"anilistId":129898,"themeKeys":["OP:1","ED:1","ED:2"],"label":"《世界頂尖的暗殺者轉生為異世界貴族》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://ansatsu-kizoku.jp/goods/music/","crossCheckUrl":"https://animethemes.moe/anime/sekai_saikou_no_ansatsusha_isekai_kizoku_ni_tensei_suru"},
  {"anilistId":131565,"themeKeys":["OP:1","ED:1"],"label":"《宿命迴響：命運節拍》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://anime.takt-op.jp/music/","crossCheckUrl":"https://animethemes.moe/anime/takt_op_destiny"},
  {"anilistId":108987,"themeKeys":["OP:1","ED:1"],"label":"《SAKUGAN》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://sakugan-anime.com/music/","crossCheckUrl":"https://animethemes.moe/anime/sakugan"},
  {"anilistId":112716,"themeKeys":["OP:1","ED:1"],"label":"《Muv-Luv Alternative》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://muv-luv-alternative-anime.com/staff/","crossCheckUrl":"https://animethemes.moe/anime/muv_luv_alternative"},
  {"anilistId":132193,"themeKeys":["OP:1","ED:1"],"label":"《極道主夫 Part 2》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.uchikubi.com/music.html","crossCheckUrl":"https://prtimes.jp/main/html/rd/p/000000457.000047877.html"},
  {"anilistId":133965,"themeKeys":["OP:1","ED:1","ED:2"],"label":"《古見同學是溝通魯蛇》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://komisan-official.com/music/","crossCheckUrl":"https://animethemes.moe/anime/komi_san_wa_comyushou_desu"},
  {"anilistId":127401,"themeKeys":["OP:1","ED:1","ED:2"],"label":"《Platinum End 白金終局》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://anime-platinumend.com/music/","crossCheckUrl":"https://animethemes.moe/anime/platinum_end"},
  {"anilistId":127412,"themeKeys":["OP:1"],"label":"《大正處女御伽話》第一方歌曲資料：OP 與演唱者","firstPartyUrl":"https://taisho-otome.com/music/1st-op1/","crossCheckUrl":"https://animethemes.moe/anime/taishou_otome_otogibanashi"},
  {"anilistId":127412,"themeKeys":["ED:1"],"label":"《大正處女御伽話》第一方歌曲資料：ED 與演唱者","firstPartyUrl":"https://taisho-otome.com/music/1st-ed1/","crossCheckUrl":"https://animethemes.moe/anime/taishou_otome_otogibanashi"},
  {"anilistId":131584,"themeKeys":["OP:1","ED:1","ED:2","ED:3","ED:4"],"label":"《VISUAL PRISON 視覺監獄》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://visualprison.com/music/artist.html","crossCheckUrl":"https://animethemes.moe/anime/visual_prison"},
  {"anilistId":132473,"themeKeys":["OP:1","ED:1"],"label":"《世界盡頭的聖騎士》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://farawaypaladin.com/music","crossCheckUrl":"https://animethemes.moe/anime/saihate_no_paladin"},
  {"anilistId":105119,"themeKeys":["OP:1","ED:1"],"label":"《四季櫻》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://shikizakura-anime.com/music/","crossCheckUrl":"https://animethemes.moe/anime/shikizakura"},
  {"anilistId":120646,"themeKeys":["OP:1","ED:1"],"label":"《前輩有夠煩》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://senpaiga-uzai-anime.com/music/","crossCheckUrl":"https://animethemes.moe/anime/senpai_ga_uzai_kouhai_no_hanashi"},
  {"anilistId":127400,"themeKeys":["OP:1","ED:1"],"label":"《境界觸發者 第三季》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.toei-anim.co.jp/tv/wt/music/","crossCheckUrl":"https://animethemes.moe/anime/world_trigger_3rd_season"},
  {"anilistId":129874,"themeKeys":["OP:1","ED:1","ED:2"],"label":"《鬼滅之刃：無限列車篇》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://kimetsu.com/anime/mugenresshahen_tv/music/","crossCheckUrl":"https://animethemes.moe/anime/kimetsu_no_yaiba_mugen_ressha_hen"},
  {"anilistId":132525,"themeKeys":["OP:1","ED:1"],"label":"《Build Divide: Code Black》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://anime.build-divide.com/black/music/","crossCheckUrl":"https://animethemes.moe/anime/build_divide_code_black"},
  {"anilistId":134623,"themeKeys":["OP:1","ED:1","ED:2"],"label":"《魯邦三世 第六季》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.lupin-3rd.net/part6/music/","crossCheckUrl":"https://animethemes.moe/anime/lupin_iii_part_6"},
  {"anilistId":126393,"themeKeys":["OP:1","ED:1"],"label":"《鬥神姬》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://ag-f.net/2021/10/05/2021100502/","crossCheckUrl":"https://www.joysound.com/web/s/karaoke/contents/anime/list_2110"},
  {"anilistId":131878,"themeKeys":["OP:1","ED:1"],"label":"《逆轉世界的電池少女》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://denchi-project.com/music.html","crossCheckUrl":"https://animethemes.moe/anime/gyakuten_sekai_no_denchi_shoujo"},
  {"anilistId":132528,"themeKeys":["ED:1"],"label":"《鍵等》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://kaginado.com/staff-cast/","crossCheckUrl":"https://animethemes.moe/anime/kaginado"},
  {"anilistId":136947,"themeKeys":["OP:1","ED:1"],"label":"《狂熱深淵 迷失的孩子》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.jp.square-enix.com/deepinsanity/anime/goods/","crossCheckUrl":"https://animethemes.moe/anime/deep_insanity_the_lost_child"},
  {"anilistId":113717,"themeKeys":["OP:1","ED:1","OP:2","ED:2"],"label":"《國王排名》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://osama-ranking.com/music/","crossCheckUrl":"https://animethemes.moe/anime/ousama_ranking"},
  {"anilistId":133411,"themeKeys":["ED:1"],"label":"《180秒能讓你的耳朵感到幸福嗎？》第一方歌曲資料：官方主題歌與演唱者","firstPartyUrl":"https://www.180-kimimimi.jp/","crossCheckUrl":"https://animethemes.moe/anime/180_byou_de_kimi_no_mimi_wo_shiawase_ni_dekiru_ka"},
  {"anilistId":105931,"themeKeys":["OP:1","ED:1","ED:2","ED:3","ED:4","ED:5","ED:6","ED:7","ED:8","ED:9","ED:10","ED:11","ED:12","ED:13"],"label":"《銀翼殺手：黑蓮花》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://www.universalmusic.ca/2021/10/22/blade-runner-black-lotus-soundtrack-arrives-november-5th/","crossCheckUrl":"https://animethemes.moe/anime/blade_runner_black_lotus"},
  {"anilistId":109946,"themeKeys":["OP:1","ED:1"],"label":"《超級小偷》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://columbia.jp/artist-info/towatei/discography/COCB-54340.html","crossCheckUrl":"https://animethemes.moe/anime/super_crooks"},
  {"anilistId":132679,"themeKeys":["OP:1"],"label":"《Idol Land 星光樂園》官方片頭影片：OP 與演唱者","firstPartyUrl":"https://www.youtube.com/watch?v=4oijRi1XT18","crossCheckUrl":"https://animemusicranking.com/ja/anime/4381/"},
  {"anilistId":142329,"themeKeys":["OP:1","ED:1"],"label":"《鬼滅之刃：遊郭篇》第一方歌曲資料：OP／ED 與演唱者","firstPartyUrl":"https://kimetsu.com/anime/yukakuhen/music/","crossCheckUrl":"https://animethemes.moe/anime/kimetsu_no_yaiba_yuukaku_hen"},
];

function sourcesFor(group: ReviewedThemeGroup): readonly CuratedThemeSourceSeed[] {
  return [
    {
      label: group.label,
      url: group.firstPartyUrl,
      language: group.firstPartyUrl.includes("universalmusic.ca") ? "en" : "ja",
      role: "first_party",
    },
    {
      label: group.crossCheckUrl.includes("animethemes.moe")
        ? "AnimeThemes：OP／ED 用途、版本與演唱者交叉核對"
        : "日文公開歌曲資料：用途與演唱者交叉核對",
      url: group.crossCheckUrl,
      language: group.crossCheckUrl.includes("animethemes.moe") ? "en" : "ja",
      role: "cross_check",
    },
  ];
}

export const curated2021FallThemeSources = Object.fromEntries(
  reviewedThemeGroups.flatMap((group) => group.themeKeys.map((themeKey) => [
    `${group.anilistId}:${themeKey}`,
    sourcesFor(group),
  ])),
) satisfies CuratedThemeSourceOverrideMap;
