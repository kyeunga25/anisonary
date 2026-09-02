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
    anilistId: 110130,
    themeKeys: ["OP:1", "ED:1"],
    label: "《球詠》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://tamayomi.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tamayomi",
  },
  {
    anilistId: 106319,
    themeKeys: ["OP:1", "ED:1"],
    label: "《八男？別鬧了！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.fwinc.co.jp/news/57755/",
    crossCheckUrl:
      "https://animethemes.moe/anime/hachi_nan_tte_sore_wa_nai_deshou",
  },
  {
    anilistId: 113311,
    themeKeys: ["OP:1", "ED:1"],
    label: "《隱瞞之事》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kakushigoto-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kakushigoto",
  },
  {
    anilistId: 115230,
    themeKeys: ["OP:1", "ED:1"],
    label: "《神之塔 -Tower of God-》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://tog-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kami_no_tou",
  },
  {
    anilistId: 116258,
    themeKeys: ["OP:1"],
    label: "《交通工具人 移動樂園的跑車君》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://norimonoman.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/norimono_man_mobile_land_no_car_kun",
  },
  {
    anilistId: 111500,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《新櫻花大戰 the Animation》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://www.segasammy.co.jp/cms/wp-content/uploads/2023/03/202003_4q_kabutsu_j_final.pdf",
    crossCheckUrl:
      "https://animethemes.moe/anime/shin_sakura_taisen_the_animation",
  },
  {
    anilistId: 116786,
    themeKeys: ["OP:1", "ED:1"],
    label: "《戰鬥陀螺 爆烈世代 超王》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.beyblade.jp/news/2418/",
    crossCheckUrl: "https://animethemes.moe/anime/beyblade_burst_super_king",
  },
  {
    anilistId: 109856,
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
      "ED:12",
    ],
    label: "《LISTENERS 聆聽者》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://listeners.rocks/music.html",
    crossCheckUrl: "https://animethemes.moe/anime/listeners",
  },
  {
    anilistId: 110547,
    themeKeys: ["OP:1", "ED:1"],
    label: "《阿爾蒂》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://arte-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/arte",
  },
  {
    anilistId: 112302,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《棒球大聯盟2nd 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.shopro.co.jp/tv/major2nd/",
    crossCheckUrl: "https://animethemes.moe/anime/major_2nd_2nd_season",
  },
  {
    anilistId: 112353,
    themeKeys: ["OP:1", "ED:1"],
    label: "《聽我的電波吧》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://namiyo-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/nami_yo_kiitekure",
  },
  {
    anilistId: 114072,
    themeKeys: [
      "OP:1",
      "OP:2",
      "ED:1",
      "ED:2",
      "ED:3",
      "ED:4",
      "ED:5",
      "ED:6",
      "ED:7",
      "ED:8",
    ],
    label: "《遊戲王SEVENS》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/staff/",
    crossCheckUrl: "https://animethemes.moe/anime/yugioh_sevens",
  },
  {
    anilistId: 114411,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《文豪與鍊金術師 ～審判的齒輪～》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://store.nbcuni.co.jp/s/nbcu/artist/5709",
    crossCheckUrl:
      "https://animethemes.moe/anime/bungou_to_alchemist_shinpan_no_haguruma",
  },
  {
    anilistId: 117096,
    themeKeys: ["OP:1", "ED:1"],
    label: "《阿薩里爾未來的民間故事》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://prtimes.jp/main/html/rd/p/000001122.000007676.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/asatir_mirai_no_mukashibanashi",
  },
  {
    anilistId: 132696,
    themeKeys: ["OP:1"],
    label: "《屁屁偵探 第四季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://oshiri-tantei.com/news/2020091401.html",
    crossCheckUrl: "https://myanimelist.net/anime/41778",
  },
  {
    anilistId: 103110,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4"],
    label:
      "《IDOLiSH7 偶像星願 Second BEAT!》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://idolish7.com/aninana/",
    crossCheckUrl: "https://animethemes.moe/anime/idolish7_second_beat",
  },
  {
    anilistId: 104647,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《轉生成女性向遊戲只有毀滅 END 的壞人大小姐》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://hamehura-anime.com/1st/",
    crossCheckUrl:
      "https://animethemes.moe/anime/otome_game_no_hametsu_flag_shika_nai_akuyaku_reijou_ni_tensei_shiteshimatta",
  },
  {
    anilistId: 108241,
    themeKeys: ["OP:1", "ED:1"],
    label: "《格萊普尼爾》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://gleipnir-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/gleipnir",
  },
  {
    anilistId: 108266,
    themeKeys: ["OP:1", "ED:1"],
    label: "《繼怪怪守護神》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://tsugumomo.com/",
    crossCheckUrl: "https://animethemes.moe/anime/tsugu_tsugumomo",
  },
  {
    anilistId: 109020,
    themeKeys: ["ED:1", "ED:2", "ED:3"],
    label: "《昨日之歌》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://singyesterday.com/",
    crossCheckUrl: "https://animethemes.moe/anime/yesterday_wo_utatte",
  },
  {
    anilistId: 111310,
    themeKeys: ["OP:1", "ED:1"],
    label: "《夢夢貓》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/mewkledreamy/staff/",
    crossCheckUrl: "https://animethemes.moe/anime/mewkledreamy",
  },
  {
    anilistId: 111323,
    themeKeys: ["OP:1", "ED:1"],
    label: "《辣妹與恐龍》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.galkyo.com/staff/",
    crossCheckUrl: "https://animethemes.moe/anime/gal_to_kyouryuu",
  },
  {
    anilistId: 113570,
    themeKeys: ["OP:1", "ED:1"],
    label: "《社長，戰鬥的時間到了！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://shachibato-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/shachou_battle_no_jikan_desu",
  },
  {
    anilistId: 113693,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《小書痴的下剋上 為了成為圖書管理員不擇手段！第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://booklove-anime.jp/",
    crossCheckUrl:
      "https://animethemes.moe/anime/honzuki_no_gekokujou_shisho_ni_naru_tame_ni_wa_shudan_wo_erandeiraremasen_2nd_season",
  },
  {
    anilistId: 113990,
    themeKeys: ["OP:1", "OP:2", "OP:3", "ED:1", "ED:2", "ED:3", "ED:4"],
    label: "《閃躍吧！星夢頻道 第三季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/prichan/",
    crossCheckUrl: "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
  },
  {
    anilistId: 114717,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《先鋒飛車 極速合體 地球防衛隊》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://www.takaratomy.co.jp/products/tomica/earthgranner/mov.htm",
    crossCheckUrl:
      "https://animethemes.moe/anime/tomica_kizuna_gattai_earth_granner",
  },
  {
    anilistId: 114811,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3", "ED:4", "ED:5"],
    label: "《數碼寶貝：》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.toei-anim.co.jp/tv/digimon/",
    crossCheckUrl: "https://animethemes.moe/anime/digimon_adventure_2020",
  },
  {
    anilistId: 116793,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《更多！認真地不認真的怪傑佐羅力》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.zorori.jp/",
    crossCheckUrl: "https://anison.online/anime/925",
  },
  {
    anilistId: 118630,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2", "ED:3"],
    label: "《決鬥大師 King》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/dm_king/",
    crossCheckUrl: "https://anison.online/anime/902",
  },
  {
    anilistId: 107294,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《邪神與廚二病少女 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://jashinchan.com/news/2439",
    crossCheckUrl: "https://animethemes.moe/anime/jashin_chan_dropkick_2020",
  },
  {
    anilistId: 110458,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《白貓 Project Zero Chronicle 零之紀元》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl:
      "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/music/",
    crossCheckUrl:
      "https://animethemes.moe/anime/shironeko_project_zero_chronicle",
  },
  {
    anilistId: 113108,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《王者天下 第三季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kingdom-anime.com/",
    crossCheckUrl: "https://animethemes.moe/anime/kingdom_3rd_season",
  },
  {
    anilistId: 115199,
    themeKeys: ["ED:1"],
    label: "《胖腹動物的生活》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.youtube.com/channel/UCXot6o6ERf3KgVOj6Rdyobg",
    crossCheckUrl: "https://anison.online/anime/918",
  },
  {
    anilistId: 116248,
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
      "ED:12",
      "ED:13",
      "ED:14",
      "ED:15",
      "ED:16",
    ],
    label: "《女學。～聖女斯克威爾學院～》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://garugaku.com/",
    crossCheckUrl: "https://anison.online/anime/886",
  },
  {
    anilistId: 107871,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《超異域公主連結！Re:Dive》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime.priconne-redive.jp/archive/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/princess_connect_redive",
  },
  {
    anilistId: 109019,
    themeKeys: ["OP:1", "ED:1"],
    label: "《放學後堤防日誌》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://teibotv.com/",
    crossCheckUrl: "https://animethemes.moe/anime/houkago_teibou_nisshi",
  },
  {
    anilistId: 111762,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2", "ED:3"],
    label: "《魔法水果籃 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://fruba.jp/blu-ray_dvd_cd/?season=2",
    crossCheckUrl: "https://animethemes.moe/anime/fruits_basket_2nd_season",
  },
  {
    anilistId: 112325,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《闇影詩章》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://anime.shadowverse.jp/archive/1st/",
    crossCheckUrl: "https://animethemes.moe/anime/shadowverse",
  },
  {
    anilistId: 116408,
    themeKeys: ["OP:1", "ED:1"],
    label: "《那個世界全部都是妖怪！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.stellapro.co.jp/waresyo3.html",
    crossCheckUrl: "https://myanimelist.net/anime/41440",
  },
  {
    anilistId: 117325,
    themeKeys: ["OP:1", "ED:1"],
    label: "《ぷそ煮コミおかわり》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://pso2.jp/players/campaign/pusoni_anime2/",
    crossCheckUrl: "https://myanimelist.net/anime/41634",
  },
  {
    anilistId: 115892,
    themeKeys: ["ED:1"],
    label: "《困擾爺爺》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.bs4.jp/komatta-jiisan/",
    crossCheckUrl: "https://dengekionline.com/articles/31823/",
  },
  {
    anilistId: 116791,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label:
      "《喵的咧～貓咪戲說日本史 第五季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://neco-neco.jp/music/",
    crossCheckUrl: "https://anison.online/anime/906",
  },
  {
    anilistId: 114233,
    themeKeys: ["OP:1", "ED:1", "ED:2", "ED:3"],
    label:
      "《鋼彈創鬥者 潛網大戰 Re:RISE 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.sunrise-inc.co.jp/work/topics.php?id=17649",
    crossCheckUrl:
      "https://animethemes.moe/anime/gundam_build_divers_rerise_2nd_season",
  },
  {
    anilistId: 112444,
    themeKeys: ["OP:1", "ED:1"],
    label: "《天晴爛漫！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://appareranman.com/",
    crossCheckUrl: "https://animethemes.moe/anime/appare_ranman",
  },
  {
    anilistId: 112534,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2"],
    label: "《魔神英雄傳 七魂的龍神丸》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://tamashii.jp/special/wataru/",
    crossCheckUrl: "https://anison.online/anime/920",
  },
  {
    anilistId: 114888,
    themeKeys: ["OP:1", "ED:1"],
    label: "《富豪刑警 Balance: UNLIMITED》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.fugoukeiji-bul.com/",
    crossCheckUrl: "https://animethemes.moe/anime/fugou_keiji_balanceunlimited",
  },
  {
    anilistId: 114891,
    themeKeys: ["ED:1"],
    label: "《座敷童子塌塌米醬》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://tatamichan.com/",
    crossCheckUrl:
      "https://animethemes.moe/anime/zashiki_warashi_no_tatami_chan",
  },
  {
    anilistId: 112641,
    themeKeys: ["OP:1", "ED:1"],
    label:
      "《輝夜姬想讓人告白？～天才們的戀愛頭腦戰～ 第二季》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kaguya.love/2nd/",
    crossCheckUrl:
      "https://animethemes.moe/anime/kaguya_sama_wa_kokurasetai_tensai_tachi_no_renai_zunousen_2020",
  },
  {
    anilistId: 113051,
    themeKeys: ["OP:1", "OP:2", "ED:1", "ED:2", "ED:3"],
    label: "《ARGONAVIS from BanG Dream！》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://bushiroad.com/media/11496",
    crossCheckUrl: "https://animethemes.moe/anime/argonavis_from_bang_dream",
  },
  {
    anilistId: 114043,
    themeKeys: ["OP:1", "ED:1"],
    label: "《食戟之靈 第五季：豪之皿》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.lantis.jp/title/shokugeki/disco_all.html",
    crossCheckUrl:
      "https://animethemes.moe/anime/shokugeki_no_souma_gou_no_sara",
  },
  {
    anilistId: 114402,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《噴嚏大魔王2020》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.ytv.co.jp/hakushon2020/",
    crossCheckUrl: "https://animethemes.moe/anime/hakushon_daimaou",
  },
  {
    anilistId: 108629,
    themeKeys: ["OP:1", "ED:1"],
    label: "《啄木鳥偵探社》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://kimikoe.com/kitsutsuki/",
    crossCheckUrl: "https://animethemes.moe/anime/kitsutsuki_tanteidokoro",
  },
  {
    anilistId: 115186,
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
      "ED:12",
      "ED:13",
      "ED:14",
      "ED:15",
      "ED:16",
      "ED:17",
      "ED:18",
      "ED:19",
      "ED:20",
      "ED:21",
      "ED:22",
      "ED:23",
      "ED:24",
    ],
    label: "《別冊奧林匹克之環》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://bessatsu-olympia-kyklos.com/",
    crossCheckUrl: "https://animethemes.moe/anime/olympia_kyklos",
  },
  {
    anilistId: 106154,
    themeKeys: ["OP:1", "ED:1"],
    label: "《攻殼機動隊：SAC_2045》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.ghostintheshell-sac2045.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/ghost_in_the_shell_sac_2045",
  },
  {
    anilistId: 124341,
    themeKeys: ["OP:1", "ED:1"],
    label: "《阿拉德：逆轉之輪》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.tv-tokyo.co.jp/anime/arad_gia/",
    crossCheckUrl: "https://myanimelist.net/anime/38416",
  },
  {
    anilistId: 113906,
    themeKeys: ["ED:1"],
    label:
      "《BanG Dream！迷你少女樂團派對★PICO 第二季：大碗公》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.youtube.com/watch?v=Veb7GRKI5rM",
    crossCheckUrl: "https://animethemes.moe/anime/bang_dream_garupapico_oomori",
  },
  {
    anilistId: 115656,
    themeKeys: ["OP:1", "ED:1", "ED:2"],
    label: "《卡片戰鬥!! 先導者 外傳 -if-》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.bs-tvtokyo.co.jp/cf-vanguard-if/",
    crossCheckUrl: "https://animethemes.moe/anime/cardfight_vanguard_gaiden_if",
  },
  {
    anilistId: 110349,
    themeKeys: ["OP:1", "ED:1"],
    label: "《GREAT PRETENDER 大欺詐師》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://www.greatpretender.jp/",
    crossCheckUrl: "https://animethemes.moe/anime/great_pretender",
  },
  {
    anilistId: 108522,
    themeKeys: ["OP:1", "ED:1"],
    label: "《刃牙 大擂賽篇》第一方歌曲資料：OP／ED 用途與演唱者",
    firstPartyUrl: "https://baki-anime.jp/2nd/",
    crossCheckUrl: "https://animethemes.moe/anime/baki_2nd_season",
  },
];

function sourcesFor(
  group: ReviewedThemeGroup,
): readonly CuratedThemeSourceSeed[] {
  const crossCheckIsJapanese = [
    "anison.online",
    "dengekionline.com",
    "myanimelist.net",
  ].some((host) => group.crossCheckUrl.includes(host));

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
      language: crossCheckIsJapanese ? "ja" : "multi",
      role: "cross_check",
    },
  ];
}

export const curated2020SpringThemeSources = Object.fromEntries(
  reviewedThemeGroups.flatMap((group) =>
    group.themeKeys.map((themeKey) => [
      `${group.anilistId}:${themeKey}`,
      sourcesFor(group),
    ]),
  ),
) satisfies CuratedThemeSourceOverrideMap;
