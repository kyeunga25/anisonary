import type { CuratedAnimeSeed } from "@/data/curated-seeds/types";

type Spring2020SeedInput = Omit<
  CuratedAnimeSeed,
  | "id"
  | "seasonIds"
  | "editorialWeekday"
  | "status"
  | "anilistUrl"
  | "imageSourceUrl"
  | "imageSourceLabel"
  | "wikipediaUrl"
  | "verifiedAt"
>;

const wikipediaUrl =
  "https://zh.wikipedia.org/wiki/2020%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8";

function spring2020Seed(row: Spring2020SeedInput): CuratedAnimeSeed {
  const anilistUrl = `https://anilist.co/anime/${row.anilistId}`;
  const weekday = new Date(`${row.startDate}T00:00:00Z`).getUTCDay();

  return {
    ...row,
    id: `curated-${row.anilistId}`,
    seasonIds: ["2020-spring"],
    editorialWeekday: weekday || 7,
    status: "finished",
    anilistUrl,
    imageSourceUrl: anilistUrl,
    imageSourceLabel: "AniList 公開媒體頁",
    wikipediaUrl,
    verifiedAt: "2026-09-02",
  };
}

const curated2020SpringSeedRows: CuratedAnimeSeed[] = [
  spring2020Seed({
    anilistId: 110130,
    slug: "tamayomi",
    startDate: "2020-04-01",
    titleJa: "球詠",
    titleZhHant: "球詠",
    titleRomaji: "Tamayomi",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110130-QqvIQ5B2X3EJ.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110130-lRahMRPDBC1Y.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://tamayomi.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/125",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/tamayomi",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Never Let You Go!",
        artistDisplayName: "七穂",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "プラスマイナスゼロの法則",
        artistDisplayName:
          "新越谷高校女子野球部 (前田佳織里、天野聡美、野口瑠璃子、橋本鞠衣、永野愛理、北川里奈、富田美憂、宮本侑芽、本泉莉奈、白城なお)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116789,
    slug: "micchiri-wanko-animation",
    startDate: "2020-04-01",
    titleJa: "みっちりわんこ！あにめ～しょん",
    titleZhHant: "全力狗！Animation",
    titleRomaji: "Micchiri Wanko! Animation",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116789-QCRGjlJzvLjl.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/kinder/intro/sakuhin22/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/109",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [],
  }),
  spring2020Seed({
    anilistId: 106319,
    slug: "hachinan-tte-sore-wa-nai-deshou",
    startDate: "2020-04-02",
    titleJa: "八男って、それはないでしょう！",
    titleZhHant: "八男？別鬧了！",
    titleRomaji: "Hachi-nan tte, Sore wa Nai deshou!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106319-LDDmqyV2rs4D.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106319-TxPcI4yFDNfe.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://shin-ei-animation.jp/works/hachinan/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/116",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/hachi_nan_tte_sore_wa_nai_deshou",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "時空の迷い人",
        artistDisplayName: "デーモン閣下 × 宝野アリカ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "月明かりのMonologue",
        artistDisplayName: "AKINO arai × AKINO from bless4",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113311,
    slug: "kakushigoto",
    startDate: "2020-04-02",
    titleJa: "かくしごと",
    titleZhHant: "隱瞞之事",
    titleRomaji: "Kakushigoto",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113311-6bSvvCHBpjpI.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113311-T1FWgCflSKtl.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://kakushigoto-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/19",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/kakushigoto",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ちいさな日々",
        artistDisplayName: "flumpool",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "君は天然色",
        artistDisplayName: "大滝詠一",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 115230,
    slug: "kami-no-tou-tower-of-god",
    startDate: "2020-04-02",
    titleJa: "神之塔 -Tower of God-",
    titleZhHant: "神之塔 -Tower of God-",
    titleRomaji: "Kami no Tou: Tower of God",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115230-QHOdSN7yt8ab.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115230-wjDIxW77TLv3.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://tog-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/247",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/kami_no_tou",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "TOP -Japanese ver.-",
        artistDisplayName: "Stray Kids",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "SLUMP -Japanese ver.-",
        artistDisplayName: "Stray Kids",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116258,
    slug: "norimono-man-mobile-land-no-car-kun",
    startDate: "2020-04-02",
    titleJa: "のりものまん モービルランドのカークン",
    titleZhHant: "交通工具人 移動樂園的跑車君",
    titleRomaji: "Norimono Man: Mobile Land no Car-kun",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116258-dxkCAk1PC7PV.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://norimonoman.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/139",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/norimono_man_mobile_land_no_car_kun",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "かっとびモービルランド",
        artistDisplayName: "カークン（CV：高垣彩陽）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 111500,
    slug: "shin-sakura-taisen-the-animation",
    startDate: "2020-04-03",
    titleJa: "新サクラ大戦 the Animation",
    titleZhHant: "新櫻花大戰 the Animation",
    titleRomaji: "Shin Sakura Taisen the Animation",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111500-YqqWk16db7FX.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111500-p0hOAFSghFKQ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.sakura-taisen.com/index.html",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/241",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/shin_sakura_taisen_the_animation",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "檄！帝国華撃団〈新章〉",
        artistDisplayName:
          "帝国歌劇団・花組 [天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)]",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "桜夢見し",
        artistDisplayName:
          "帝国歌劇団・花組 [天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)]、エリス (CV.水樹奈々)、ランスロット (CV.沼倉愛美)、ホワン・ユイ (CV.上坂すみれ)]",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "スタァ誕生 花組ver. (with クラーラ)",
        artistDisplayName:
          "天宮さくら (CV.佐倉綾音)、東雲初穂 (CV.内田真礼)、望月あざみ (CV.山村響)、アナスタシア・パルマ (CV.福原綾香)、クラリス (CV.早見沙織)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116786,
    slug: "beyblade-burst-sparking",
    startDate: "2020-04-03",
    titleJa: "ベイブレードバースト スパーキング",
    titleZhHant: "戰鬥陀螺 爆烈世代 超王",
    titleRomaji: "Beyblade Burst Sparking",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116786-ZIUM2E11AK0y.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/116786-pFUeB9WaAtJs.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://beyblade.jp/campaign/5th/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/329",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/beyblade_burst_super_king",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "スパーキング・レボリューション",
        artistDisplayName: "土屋飛鳥・遠藤ナオキ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "スパーキング・レボリューション (インストゥルメンタル)",
        artistDisplayName: "(インストゥルメンタル)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 109856,
    slug: "listeners",
    startDate: "2020-04-04",
    titleJa: "LISTENERS リスナーズ",
    titleZhHant: "LISTENERS 聆聽者",
    titleRomaji: "LISTENERS",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109856-zDYLvuF4Vuno.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109856-rW8JlTsPbjey.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://listeners.rocks/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/282",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/listeners",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Into the blue's",
        artistDisplayName: "ACCAMER",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Muse",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Borders",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "Slip out!",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "Rainy lain",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "Top of ocean",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "Trauma",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "Dilemma",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "Fairy tale",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 9,
        titleJa: "Slumber",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 10,
        titleJa: "Love song",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 11,
        titleJa: "Listeners",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
      {
        type: "ED",
        sequence: 12,
        titleJa: "Into the blue's（modern ver.）",
        artistDisplayName: "ミュウ（CV：高橋李依）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 110547,
    slug: "arte",
    startDate: "2020-04-04",
    titleJa: "アルテ",
    titleZhHant: "阿爾蒂",
    titleRomaji: "Arte",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110547-Jo4VNdR3DlOx.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110547-uB6fv50H0hFU.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://arte-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/432",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/arte",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "クローバー",
        artistDisplayName: "坂本真綾",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "晴れ模様",
        artistDisplayName: "安野希世乃",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112302,
    slug: "major-2nd-season-2",
    startDate: "2020-04-04",
    titleJa: "メジャー2nd 第２シリーズ",
    titleZhHant: "棒球大聯盟2nd 第二季",
    titleRomaji: "Major 2nd Season 2",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112302-VZZnJ1NY0waA.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112302-kbVmGx7EgmCg.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.shopro.co.jp/tv/major2nd/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/427",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/major_2nd_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Answer",
        artistDisplayName: "家入レオ",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "白い泥",
        artistDisplayName: "上白石萌音",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "One",
        artistDisplayName: "SHE'S",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "IDENTITY",
        artistDisplayName: "雨のパレード",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112353,
    slug: "nami-yo-kiitekure",
    startDate: "2020-04-04",
    titleJa: "波よ聞いてくれ",
    titleZhHant: "聽我的電波吧",
    titleRomaji: "Nami yo Kiitekure",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112353-hAtUOoapou7V.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112353-cyIzHUCz2pML.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://namiyo-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/275",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/nami_yo_kiitekure",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "aranami",
        artistDisplayName: "tacica",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Pride",
        artistDisplayName: "遥海",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114072,
    slug: "yugioh-sevens",
    startDate: "2020-04-04",
    titleJa: "遊☆戯☆王SEVENS",
    titleZhHant: "遊戲王SEVENS",
    titleRomaji: "Yu☆Gi☆Oh! SEVENS",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114072-3C6Bbv490sNj.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114072-skJElBIWDt69.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/yugioh-sevens/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/3283",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/yugioh_sevens",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ナナナナナナナ",
        artistDisplayName: "佐伯ユウスケ",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "ハレヴタイ",
        artistDisplayName: "The Brow Beat",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ゴーハ第7小学校校歌",
        artistDisplayName:
          "遊我（CV：石橋陽彩）、ルーク（CV：八代拓）、ガクト（CV：花江夏樹）",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ミニスケープ",
        artistDisplayName: "ロアロミン（霧島ロア CV：古田一紀）",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "ゴーハ第7小学校校歌（ルーク ver.）",
        artistDisplayName: "ルーク（CV：八代拓）",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "ゴーハ第7小学校校歌（4人合唱 ver.）",
        artistDisplayName:
          "遊我（CV：石橋陽彩）、ルーク（CV：八代拓）、ガクト（CV：花江夏樹）、ロミン（CV：楠木ともり）",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "ゴーハ第7小学校校歌（遊我 ver.）",
        artistDisplayName: "遊我（CV：石橋陽彩）",
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "ゴーハ第7小学校校歌（ガクト ver.）",
        artistDisplayName: "ガクト（CV：花江夏樹）",
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "ゴーハ第7小学校校歌（ロミン ver.）",
        artistDisplayName: "ロミン（CV：楠木ともり）",
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "Never Looking Back",
        artistDisplayName: "シズクノメ",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114411,
    slug: "bungou-to-alchemist-shinpan-no-haguruma",
    startDate: "2020-04-04",
    titleJa: "文豪とアルケミスト ～審判ノ歯車～",
    titleZhHant: "文豪與鍊金術師 ～審判的齒輪～",
    titleRomaji: "Bungou to Alchemist: Shinpan no Haguruma",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114411-PnXaweOf99xA.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/bungo-alchemist/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/183",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/bungou_to_alchemist_shinpan_no_haguruma",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "グッド・バイ",
        artistDisplayName: "浦島坂田船",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "藪の中のジンテーゼ",
        artistDisplayName: "南條愛乃",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 117096,
    slug: "asatir-mirai-no-mukashibanashi",
    startDate: "2020-04-04",
    titleJa: "アサティール 未来の昔ばなし",
    titleZhHant: "阿薩里爾未來的民間故事",
    titleRomaji: "Asatir: Mirai no Mukashibanashi",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117096-Ealg1PSeoeqh.jpg",
    broadcastLabel: "海外先行公開／日本其後播出",
    officialSiteUrl:
      "https://prtimes.jp/main/html/rd/p/000001122.000007676.html",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/301",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/asatir_mirai_no_mukashibanashi",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "未来の昔ばなし",
        artistDisplayName: "渡部沙智子",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "記憶の向こう",
        artistDisplayName: "渡部沙智子",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 132696,
    slug: "oshiri-tantei-4",
    startDate: "2020-04-04",
    titleJa: "おしりたんてい (第4シリーズ)",
    titleZhHant: "屁屁偵探 第四季",
    titleRomaji: "Oshiri Tantei 4",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132696-TIe7Ebn0vVSP.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://oshiri-tantei.com/",
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/202004/"],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ププッとフムッとかいけつダンス",
        artistDisplayName: "伊勢大貴",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 103110,
    slug: "idolish7-second-beat",
    startDate: "2020-04-05",
    titleJa: "アイドリッシュセブン Second BEAT!",
    titleZhHant: "IDOLiSH7 偶像星願 Second BEAT!",
    titleRomaji: "IDOLiSH7: Second BEAT!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx103110-tmjraaFRlEt5.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/103110-LBD6QsNabGhj.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://idolish7.com/aninana/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/95",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/idolish7_second_beat",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "DiSCOVER THE FUTURE",
        artistDisplayName: "IDOLiSH7",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ミライノーツを奏でて",
        artistDisplayName: "Re:vale",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "DESTINY",
        artistDisplayName: "TRIGGER",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "It's ALL-for you-",
        artistDisplayName: "Re:vale",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "Last Dimension",
        artistDisplayName: "TRIGGER",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 104647,
    slug: "hamefura",
    startDate: "2020-04-05",
    titleJa: "乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった…",
    titleZhHant: "轉生成女性向遊戲只有毀滅 END 的壞人大小姐",
    titleRomaji:
      "Otome Game no Hametsu Flag shika Nai Akuyaku Reijou ni Tensei shiteshimatta…",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104647-dMGZSavRxHcM.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104647-emIYPiyZZJnl.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://hamehura-anime.com/1st/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/111",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/otome_game_no_hametsu_flag_shika_nai_akuyaku_reijou_ni_tensei_shiteshimatta",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "乙女のルートはひとつじゃない！",
        artistDisplayName: "angela",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "BAD END",
        artistDisplayName: "蒼井翔太",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 108241,
    slug: "gleipnir",
    startDate: "2020-04-05",
    titleJa: "グレイプニル",
    titleZhHant: "格萊普尼爾",
    titleRomaji: "Gleipnir",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108241-Mc28QvkdUkfp.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108241-Cbfv8GHRMFoQ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://gleipnir-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/218",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/gleipnir",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Altern-ate-",
        artistDisplayName: "H-el-ical//",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "雨と体液と匂い",
        artistDisplayName: "Mili",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 108266,
    slug: "tsugu-tsugumomo",
    startDate: "2020-04-05",
    titleJa: "継つぐもも",
    titleZhHant: "繼怪怪守護神",
    titleRomaji: "Tsugu Tsugumomo",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108266-XIxj8RVcidLX.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://tsugumomo.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/353",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/tsugu_tsugumomo",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "風吹けば月夜の果てに",
        artistDisplayName: "A応P",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "春、奏で",
        artistDisplayName: "東城陽奏",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 109020,
    slug: "yesterday-wo-utatte",
    startDate: "2020-04-05",
    titleJa: "イエスタデイをうたって",
    titleZhHant: "昨日之歌",
    titleRomaji: "Yesterday wo Utatte",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109020-sRBusiVXbsLH.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109020-TclHkkKtYgcQ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://singyesterday.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/110",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/yesterday_wo_utatte",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "籠の中に鳥",
        artistDisplayName: "ユアネス",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "葵橋",
        artistDisplayName: "さユり",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "イエスタデイをうたって",
        artistDisplayName: "agehasprings feat あにー(TaNaBaTa)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 111310,
    slug: "mewkledreamy",
    startDate: "2020-04-05",
    titleJa: "ミュークルドリーミー",
    titleZhHant: "夢夢貓",
    titleRomaji: "Mewkledreamy",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111310-KTLldElz3BSp.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111310-5MdRG9K0IGkZ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/mewkledreamy/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2994",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/mewkledreamy",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ミライくるくるユメくるる！",
        artistDisplayName: "澤田真里愛",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "トキメキコレクター",
        artistDisplayName: "澤田真里愛",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 111323,
    slug: "gal-to-kyouryuu",
    startDate: "2020-04-05",
    titleJa: "ギャルと恐竜",
    titleZhHant: "辣妹與恐龍",
    titleRomaji: "Gal to Kyouryuu",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111323-quqYgAchD9PM.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111323-6VubjN9ROpKb.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.galkyo.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/372",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/gal_to_kyouryuu",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "恐竜あげみざわ☆",
        artistDisplayName:
          "恐竜フレンズ [楓 (CV.島袋美由利)、山田 (CV.夏吉ゆうこ)、先パイ (CV.工藤夕希)、翔太 (CV.山下誠一郎)]",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Peaceful Days",
        artistDisplayName: "高橋竜子 (高橋洋子)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113570,
    slug: "shachou-battle-no-jikan-desu",
    startDate: "2020-04-05",
    titleJa: "社長、バトルの時間です！",
    titleZhHant: "社長，戰鬥的時間到了！",
    titleRomaji: "Shachou, Battle no Jikan desu!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113570-c0YmZUj7f5eH.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113570-xo85csMd6NE9.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://shachibato-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/185",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/shachou_battle_no_jikan_desu",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Hurry Love",
        artistDisplayName: "和氣あず未",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "おやすみ",
        artistDisplayName: "ユトリア(CV.市ノ瀬加那)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113693,
    slug: "honzuki-no-gekokujou-2",
    startDate: "2020-04-05",
    titleJa: "本好きの下剋上 司書になるためには手段を選んでいられません 第2期",
    titleZhHant: "小書痴的下剋上 為了成為圖書管理員不擇手段！第二季",
    titleRomaji:
      "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113693-3tHbslFxD47R.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113693-i9Wm6xjTlQGQ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://booklove-anime.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/165",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/honzuki_no_gekokujou_shisho_ni_naru_tame_ni_wa_shudan_wo_erandeiraremasen_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "つむじかぜ",
        artistDisplayName: "諸星すみれ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "エフェメラをあつめて",
        artistDisplayName: "鈴木みのり",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113990,
    slug: "kiratto-prichan-season-3",
    startDate: "2020-04-05",
    titleJa: "キラッとプリ☆チャン シーズン3",
    titleZhHant: "閃躍吧！星夢頻道 第三季",
    titleRomaji: "Kiratto Pri☆Chan Season 3",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113990-YgKXiAQbojVB.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/prichan/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/332",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/kiratto_prichan_3rd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "イルミナージュ・ランド",
        artistDisplayName: "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "ルミナンスプリンセス",
        artistDisplayName: "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
      },
      {
        type: "OP",
        sequence: 3,
        titleJa: "ドリーミング☆チャンネル!",
        artistDisplayName: "Run Girls, Run! (林鼓子、森嶋優花、厚木那奈美)",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "A・B・C・Dいいね★ダンス",
        artistDisplayName:
          "GOGO!MASCOTS [キラッCHU (CV.山下七海)、メルパン (CV.大森日雅)、ラビリィ (CV.田中美海)]",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "One Heart（Miracle StAr ver.）",
        artistDisplayName:
          "Miracle StAr [桃山みらい (CV.林鼓子)、萌黄えも (CV.久保田未夢)、青葉りんか (CV.厚木那奈美)、赤城あんな (CV.芹澤優)、緑川さら (CV.若井友希)、紫藤める (CV.森嶋優花)]",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "One Heart (Meltic StAr ver.)",
        artistDisplayName:
          "Meltic StAr [赤城あんな (CV.芹澤優)、緑川さら (CV.若井友希)、紫藤める (CV.森嶋優花)]",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "One Heart (Miracle☆Kiratts ver.)",
        artistDisplayName:
          "Miracle☆Kiratts [桃山みらい (CV.林鼓子)、萌黄えも (CV.久保田未夢)、青葉りんか (CV.厚木那奈美)]",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114717,
    slug: "tomica-kizuna-gattai-earth-granner",
    startDate: "2020-04-05",
    titleJa: "トミカ絆合体 アースグランナー",
    titleZhHant: "先鋒飛車 極速合體 地球防衛隊",
    titleRomaji: "Tomica Kizuna Gattai: Earth Granner",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114717-BrI8RVqye7Sd.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-osaka.co.jp/ip4/earth-granner/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/333",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/tomica_kizuna_gattai_earth_granner",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "世界が君を必要とする時が来たんだ",
        artistDisplayName: "オーイシマサヨシ",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "僕らがヒーロー",
        artistDisplayName: "ダ・ヴィンチ：ポワロ(凛＋原田謙太)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114811,
    slug: "digimon-adventure-2020",
    startDate: "2020-04-05",
    titleJa: "デジモンアドベンチャー:",
    titleZhHant: "數碼寶貝：",
    titleRomaji: "Digimon Adventure:",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114811-SLZ6cMMhx6Im.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114811-0vsPGTLAOKPu.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.toei-anim.co.jp/tv/digimon/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/55",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/digimon_adventure_2020",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "未確認飛行船",
        artistDisplayName: "谷本貴義",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "悔しさは種",
        artistDisplayName: "藤川千愛",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Q?",
        artistDisplayName: "Reol",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "Mind game",
        artistDisplayName: "Maica_n",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "オーバーシーズ・ハイウェイ",
        artistDisplayName: "ウォルピスカーター",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "Dreamers",
        artistDisplayName: "ATEEZ",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116793,
    slug: "motto-majime-ni-fumajime-kaiketsu-zorori",
    startDate: "2020-04-05",
    titleJa: "もっと! まじめにふまじめ かいけつゾロリ",
    titleZhHant: "更多！認真地不認真的怪傑佐羅力",
    titleRomaji: "Motto! Majime ni Fumajime Kaiketsu Zorori",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116793-6TUNMzgucLpk.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.zorori.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/138",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "もっと！もっと！かいけつゾロリ",
        artistDisplayName: "ゾロリ (CV.山寺宏一)",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "シャラララ",
        artistDisplayName: "OnePixcel",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 118630,
    slug: "duel-masters-king-2020",
    startDate: "2020-04-05",
    titleJa: "デュエル・マスターズキング",
    titleZhHant: "決鬥大師 King",
    titleRomaji: "Duel Masters King",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx118630-tSFqf4Qlgv1m.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/dm_king/",
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/202004/"],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "キンキラKING！",
        artistDisplayName: "はやぶさ",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "No Rain, No Rainbow",
        artistDisplayName: "水樹奈々",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ともだちだから",
        artistDisplayName: "上月せれな",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "百花繚乱ココロモヨウ",
        artistDisplayName: "WAWAWA",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "スタート！",
        artistDisplayName: "佐々木李子",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 107294,
    slug: "jashin-chan-dropkick-dash",
    startDate: "2020-04-06",
    titleJa: "邪神ちゃんドロップキック’（ダッシュ）",
    titleZhHant: "邪神與廚二病少女 第二季",
    titleRomaji: "Jashin-chan Dropkick’",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107294-zWscZpb7wYLH.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://jashinchan.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/56",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/jashin_chan_dropkick_2020",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "時としてバイオレンス",
        artistDisplayName: "halca",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Love Satisfaction",
        artistDisplayName: "ZAMB",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "CHI☆TO☆SE愛歌",
        artistDisplayName: "邪神ちゃん (CV.鈴木愛奈)、リエール (CV.花井美春)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 110458,
    slug: "shironeko-project-zero-chronicle",
    startDate: "2020-04-06",
    titleJa: "白猫プロジェクトZERO CHRONICLE",
    titleZhHant: "白貓 Project Zero Chronicle 零之紀元",
    titleRomaji: "Shironeko Project: ZERO CHRONICLE",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110458-Fnh88lYo5pfl.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110458-qXLCQ16XUVRu.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl:
      "https://colopl.co.jp/shironekoproject/animation/zero_chronicle/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/415",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/shironeko_project_zero_chronicle",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "天秤-Libra-",
        artistDisplayName: "西川貴教＋ASCA",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "through the dark",
        artistDisplayName: "安田レイ",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113108,
    slug: "kingdom-3rd-season",
    startDate: "2020-04-06",
    titleJa: "キングダム 第3シリーズ",
    titleZhHant: "王者天下 第三季",
    titleRomaji: "Kingdom 3rd Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113108-ArjAmFLubVyu.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://kingdom-anime.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/60",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/kingdom_3rd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "TOMORROW",
        artistDisplayName: "BiSH",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "STACKiNG",
        artistDisplayName: "BiSH",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Deep inside",
        artistDisplayName: "waterweed",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "kIng",
        artistDisplayName: "鈴木瑛美子",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 115199,
    slug: "poccolies",
    startDate: "2020-04-06",
    titleJa: "ぽっこりーず",
    titleZhHant: "胖腹動物的生活",
    titleRomaji: "Poccolies",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115199-ta7IspS4uVSn.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115199-XKc43AYC7E25.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.bs4.jp/poccolies/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/105",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "Go Go Poccolies",
        artistDisplayName: "においさん (CV.逢来りん)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116248,
    slug: "garugaku-sei-girls-square-gakuin",
    startDate: "2020-04-06",
    titleJa: "ガル学。〜聖ガールズスクエア学院〜",
    titleZhHant: "女學。～聖女斯克威爾學院～",
    titleRomaji: "Garugaku.: Sei Girls Square Gakuin",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116248-xpAfte1Hy4qm.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://garugaku.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/400",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "センチメートル",
        artistDisplayName: "Girls²",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "サクラ道！",
        artistDisplayName: "east²",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Shining You, Shining Me ～夢のチカラで～",
        artistDisplayName: "south²",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "ワチャ×2",
        artistDisplayName: "west²",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "セーノでGo！",
        artistDisplayName: "east²",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "オールOK！",
        artistDisplayName: "east²",
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "ねっ！",
        artistDisplayName: "east²",
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "愛×2",
        artistDisplayName: "west²",
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "サ×3 サイコー",
        artistDisplayName: "west²",
      },
      {
        type: "ED",
        sequence: 9,
        titleJa: "Never Give Up 〜うつむかず顔を上へあげて〜",
        artistDisplayName: "south²",
      },
      {
        type: "ED",
        sequence: 10,
        titleJa: "ありがとう 〜ひとことあなたに〜",
        artistDisplayName: "south²",
      },
      {
        type: "ED",
        sequence: 11,
        titleJa: "Shine！",
        artistDisplayName: "east²",
      },
      {
        type: "ED",
        sequence: 12,
        titleJa: "Holy Magic 〜大人になっても解けない魔法〜",
        artistDisplayName: "south²",
      },
      {
        type: "ED",
        sequence: 13,
        titleJa: "ワキ アイ×2",
        artistDisplayName: "west²",
      },
      {
        type: "ED",
        sequence: 14,
        titleJa: "Congratulations 〜新しい夢の扉〜",
        artistDisplayName: "south²",
      },
      {
        type: "ED",
        sequence: 15,
        titleJa: "つなぐ！",
        artistDisplayName: "east²",
      },
      {
        type: "ED",
        sequence: 16,
        titleJa: "ツナグツナグ",
        artistDisplayName: "Girls²",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 107871,
    slug: "princess-connect-redive",
    startDate: "2020-04-07",
    titleJa: "プリンセスコネクト！Re:Dive",
    titleZhHant: "超異域公主連結！Re:Dive",
    titleRomaji: "Princess Connect! Re:Dive",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107871-ZOh7oeDd0kq9.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107871-Pfc2rj2u8177.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://anime.priconne-redive.jp/archive/1st/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/115",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/princess_connect_redive",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Lost Princess",
        artistDisplayName:
          "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "それでもともに歩いていく",
        artistDisplayName:
          "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Connecting Happy!!",
        artistDisplayName:
          "ペコリーヌ (CV.M・A・O)、コッコロ (CV.伊藤美来)、キャル (CV.立花理香)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 109019,
    slug: "houkago-teibou-nisshi",
    startDate: "2020-04-07",
    titleJa: "放課後ていぼう日誌",
    titleZhHant: "放學後堤防日誌",
    titleRomaji: "Houkago Teibou Nisshi",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109019-xlrVQRdo1EQi.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109019-CI5tlvudZ3zS.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://teibotv.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/367",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/houkago_teibou_nisshi",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "SEA HORIZON",
        artistDisplayName:
          "海野高校ていぼう部（高尾奏音、川井田夏海、篠原侑、明坂聡美）",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "釣りの世界へ",
        artistDisplayName:
          "海野高校ていぼう部（高尾奏音、川井田夏海、篠原侑、明坂聡美）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 111762,
    slug: "fruits-basket-2nd-season",
    startDate: "2020-04-07",
    titleJa: "フルーツバスケット 2nd Season",
    titleZhHant: "魔法水果籃 第二季",
    titleRomaji: "Fruits Basket: 2nd Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111762-C8TNf5uRlVNQ.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/111762-VvlNooo9xZa4.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://fruba.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/114",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/fruits_basket_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "プリズム",
        artistDisplayName: "AmPm feat. みゆな",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "HOME",
        artistDisplayName: "土岐麻子",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ad meliora",
        artistDisplayName: "THE CHARM PARK",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "馳せろ未来",
        artistDisplayName: "ウタ・アリィ",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "Eden",
        artistDisplayName: "MONKEY MAJIK",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112325,
    slug: "shadowverse",
    startDate: "2020-04-07",
    titleJa: "シャドウバース",
    titleZhHant: "闇影詩章",
    titleRomaji: "Shadowverse",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112325-NXi6RerKkbi6.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112325-CWJosUmhchU4.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://anime.shadowverse.jp/archive/1st/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/437",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/shadowverse",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "キリフダ",
        artistDisplayName: "PENGUIN RESEARCH",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "新世界",
        artistDisplayName: "FLOW",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ハピネス*センセ－ション",
        artistDisplayName: "小倉唯",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "心誰にも",
        artistDisplayName: "ゲーム実況者わくわくバンド",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116408,
    slug: "anoyo-no-subete-wa-obakegumi",
    startDate: "2020-04-07",
    titleJa: "あの世のすべては, おばけぐみっ!",
    titleZhHant: "那個世界全部都是妖怪！",
    titleRomaji: "Anoyo no Subete wa, Obakegumi!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b116408-OXGNh2Ii3Wi0.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.stellapro.co.jp/waresyo3.html",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/38",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "忍",
        artistDisplayName: "ZIPANG",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ミネルバ",
        artistDisplayName: "sanaco",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 117325,
    slug: "puso-ni-comi-okawari",
    startDate: "2020-04-07",
    titleJa: "ぷそ煮コミおかわり",
    titleZhHant: "ぷそ煮コミおかわり",
    titleRomaji: "Puso Ni Comi: Okawari",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117325-f1ijlg6Ow73I.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/117325-n2oEKX5VEFB1.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://pso2.jp/players/campaign/pusoni_anime2/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2726",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "煮コ☆ミュニケーション",
        artistDisplayName: "あまね＋ビートまりお（COOL&CREATE）",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "煮コ☆ミュニケーション（みたらし＆テトラ ver.）",
        artistDisplayName: "みたらし（CV：田辺留依）＆テトラ（CV：引坂理絵）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 115892,
    slug: "komatta-jiisan",
    startDate: "2020-04-08",
    titleJa: "困ったじいさん",
    titleZhHant: "困擾爺爺",
    titleRomaji: "Komatta Jii-san",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b115892-0fiyi2el7DrM.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115892-9T99iSUq34oo.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.bs4.jp/komatta-jiisan/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/68",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "じいさんのラブラブ♡スキャット",
        artistDisplayName: "じいさん（CV：日野聡）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116791,
    slug: "neko-neko-nihonshi-5",
    startDate: "2020-04-08",
    titleJa: "ねこねこ日本史 第5シリーズ",
    titleZhHant: "喵的咧～貓咪戲說日本史 第五季",
    titleRomaji: "Neko Neko Nihonshi 5th Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116791-T92IxbomsJsf.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://neco-neco.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/2261",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ぐるぐる",
        artistDisplayName: "Girls²",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "ジャパニーズSTAR",
        artistDisplayName: "Girls²",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ねこじゃらそーかけるまほうひみこ",
        artistDisplayName: "近藤利樹 feat.ASOBOiSM",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ねこねこ日本史おぼえ歌〜全時代丸分かり♪〜",
        artistDisplayName: "Girls²",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114233,
    slug: "gundam-build-divers-rerise-2",
    startDate: "2020-04-09",
    titleJa: "ガンダムビルドダイバーズRe:RISE 2nd Season",
    titleZhHant: "鋼彈創鬥者 潛網大戰 Re:RISE 第二季",
    titleRomaji: "Gundam Build Divers Re:RISE 2nd Season",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114233-FUlAGLqFOVrT.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.sunrise-inc.co.jp/work/detail.php?cid=446",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/145",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/gundam_build_divers_rerise_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "HATENA",
        artistDisplayName: "PENGUIN RESEARCH",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Twinkle",
        artistDisplayName: "スピラ・スピカ",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ハートフル",
        artistDisplayName: "スピラ・スピカ",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "リライズ",
        artistDisplayName: "スピラ・スピカ",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112444,
    slug: "appare-ranman",
    startDate: "2020-04-10",
    titleJa: "天晴爛漫！",
    titleZhHant: "天晴爛漫！",
    titleRomaji: "Appare-Ranman!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112444-S7bhKskrAqSI.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112444-jl2dffsH64I7.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://appareranman.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/304",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/appare_ranman",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "I got it!",
        artistDisplayName: "Mia REGINA",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "I'm Nobody",
        artistDisplayName: "森久保祥太郎",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112534,
    slug: "mashin-eiyuuden-wataru-shichikon-no-ryuujinmaru",
    startDate: "2020-04-10",
    titleJa: "魔神英雄伝ワタル 七魂の龍神丸",
    titleZhHant: "魔神英雄傳 七魂的龍神丸",
    titleRomaji: "Mashin Eiyuuden Wataru: Shichi Kon no Ryuujinmaru",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112534-mS6QUAeU21vO.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://tamashii.jp/special/wataru/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/163",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "STEP",
        artistDisplayName: "a・chi-a・chi",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "Fight!",
        artistDisplayName: "高橋由美子",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "a・chi-a・chiアドベンチャー",
        artistDisplayName: "a・chi-a・chi",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "君に止まらない〜MY GIRL, MY LOVE",
        artistDisplayName: "高橋由美子",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114888,
    slug: "fugou-keiji-balance-unlimited",
    startDate: "2020-04-10",
    titleJa: "富豪刑事 Balance:UNLIMITED",
    titleZhHant: "富豪刑警 Balance: UNLIMITED",
    titleRomaji: "Fugou Keiji: Balance:UNLIMITED",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114888-lgecUF3O1AWS.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114888-YVXJvMnuWCDb.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.fugoukeiji-bul.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/113",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/fugou_keiji_balanceunlimited",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "NAVIGATOR",
        artistDisplayName: "SixTONES",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Welcome My Friend",
        artistDisplayName: "OKAMOTO'S",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114891,
    slug: "zashiki-warashi-no-tatami-chan",
    startDate: "2020-04-10",
    titleJa: "ざしきわらしのタタミちゃん",
    titleZhHant: "座敷童子塌塌米醬",
    titleRomaji: "Zashiki-Warashi no Tatami-chan",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114891-XMuVHEbi68mJ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://tatamichan.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/270",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/zashiki_warashi_no_tatami_chan",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "CATCH YOUR SWEET MIND",
        artistDisplayName: "ORESAMA",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 112641,
    slug: "kaguya-sama-wa-kokurasetai-2",
    startDate: "2020-04-11",
    titleJa: "かぐや様は告らせたい？～天才たちの恋愛頭脳戦～",
    titleZhHant: "輝夜姬想讓人告白？～天才們的戀愛頭腦戰～ 第二季",
    titleRomaji: "Kaguya-sama wa Kokurasetai?: Tensaitachi no Renai Zunousen",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112641-zoGC8d6FaPXU.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112641-mKZe0zng0ndV.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://kaguya.love/2nd/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/49",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/kaguya_sama_wa_kokurasetai_tensai_tachi_no_renai_zunousen_2020",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "DADDY! DADDY! DO! feat.鈴木愛理",
        artistDisplayName: "鈴木雅之",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "風に吹かれて",
        artistDisplayName: "福原遥",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113051,
    slug: "argonavis-from-bang-dream",
    startDate: "2020-04-11",
    titleJa: "アルゴナビス from BanG Dream!",
    titleZhHant: "ARGONAVIS from BanG Dream！",
    titleRomaji: "ARGONAVIS from BanG Dream!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113051-R2V4aqfv0pau.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113051-O0OIEfTcXrQY.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://bushiroad.com/media/11496",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/428",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/argonavis_from_bang_dream",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "星がはじまる",
        artistDisplayName: "Argonavis",
      },
      {
        type: "OP",
        sequence: 2,
        titleJa: "SCATTER",
        artistDisplayName: "GYROAXIA",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "雨上がりの坂道",
        artistDisplayName: "Argonavis",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ゴールライン",
        artistDisplayName: "Argonavis",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "LIAR",
        artistDisplayName: "GYROAXIA",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114043,
    slug: "shokugeki-no-souma-gou-no-sara",
    startDate: "2020-04-11",
    titleJa: "食戟のソーマ 豪ノ皿",
    titleZhHant: "食戟之靈 第五季：豪之皿",
    titleRomaji: "Shokugeki no Souma: Gou no Sara",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114043-QkgiycojrojN.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114043-5RRtoLPrzQ0P.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.lantis.jp/title/shokugeki/disco_all.html",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/74",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/shokugeki_no_souma_gou_no_sara",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ラストチャプター",
        artistDisplayName: "nano.RIPE",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Crossing Road",
        artistDisplayName: "渕上舞",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 114402,
    slug: "hakushon-daimaou-2020",
    startDate: "2020-04-11",
    titleJa: "ハクション大魔王2020",
    titleZhHant: "噴嚏大魔王2020",
    titleRomaji: "Hakushon Daimaou 2020",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114402-1PtmZciRzBqD.png",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.ytv.co.jp/hakushon2020/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/140",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/hakushon_daimaou",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "サテスハクション",
        artistDisplayName: "奥田民生",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "あくびをすれば",
        artistDisplayName: "フレンズ",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "フレフレ",
        artistDisplayName: "中川翔子",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 108629,
    slug: "kitsutsuki-tantei-dokoro",
    startDate: "2020-04-13",
    titleJa: "啄木鳥探偵處",
    titleZhHant: "啄木鳥偵探社",
    titleRomaji: "Kitsutsuki Tantei Dokoro",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108629-KZRQimMl3eGN.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108629-FOCCY5WmkVzh.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://kimikoe.com/kitsutsuki/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/58",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/kitsutsuki_tanteidokoro",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "本日モ誠ニ晴天也",
        artistDisplayName: "古川慎",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "ゴンドラの唄",
        artistDisplayName:
          "NOW ON AIR (飯野美紗子、片平美那、岩淵桃音、神戸光歩、鈴木陽斗実、田中有紀)",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 116320,
    slug: "tv-yarou-nanaana-kaibutsu-kraken-wo-oe",
    startDate: "2020-04-16",
    titleJa: "テレビ野郎 ナナーナ 怪物クラーケンを追え！",
    titleZhHant: "香蕉怪大叔 吶吶～吶 北海妖怪追追追！",
    titleRomaji: "TV Yarou Nanaana: Kaibutsu Kraken wo Oe!",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116320-UTTrMFuyP8GC.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/nana-na/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/86",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    themes: [],
  }),
  spring2020Seed({
    anilistId: 115186,
    slug: "bessatsu-olympia-kyklos",
    startDate: "2020-04-20",
    titleJa: "別冊オリンピア・キュクロス",
    titleZhHant: "別冊奧林匹克之環",
    titleRomaji: "Bessatsu Olympia Kyklos",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115186-WZrskMhidMgg.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115186-wZCv5CzSrQiZ.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://bessatsu-olympia-kyklos.com/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/150",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/olympia_kyklos",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ウィリアム・テル序曲",
        artistDisplayName: "片桐仁 & 林彰人",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "君はヘレネス",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "ZE.N.RA",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 3,
        titleJa: "男のアレーテー",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 4,
        titleJa: "始まりはいつもゼウス",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 5,
        titleJa: "涙のエーゲ海",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 6,
        titleJa: "今夜はシンポジオン",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 7,
        titleJa: "スイート・オリンピア",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 8,
        titleJa: "エンドレスサマー",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 9,
        titleJa: "立てろ！トロパイオン",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 10,
        titleJa: "スパルタ人こわい",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 11,
        titleJa: "国外では別の顔",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 12,
        titleJa: "さよならスパルタ",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 13,
        titleJa: "LADY discrimination",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 14,
        titleJa: "君は何スロン",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 15,
        titleJa: "夢のマーケット",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 16,
        titleJa: "ずるい皇帝（ひと）",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 17,
        titleJa: "君のペッソイ",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 18,
        titleJa: "哲学者の食卓",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 19,
        titleJa: "ヘルマ！ヘルマ！ヘルマ！",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 20,
        titleJa: "BURNING FIRE",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 21,
        titleJa: "村人A",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 22,
        titleJa: "君の白い嘘",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 23,
        titleJa: "サヨナラの折に…",
        artistDisplayName: "林彰人",
      },
      {
        type: "ED",
        sequence: 24,
        titleJa: "東京トリンピック音頭",
        artistDisplayName: "林彰人",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 106154,
    slug: "koukaku-kidoutai-sac-2045",
    startDate: "2020-04-23",
    titleJa: "攻殻機動隊 SAC_2045",
    titleZhHant: "攻殼機動隊：SAC_2045",
    titleRomaji: "Koukaku Kidoutai: SAC_2045",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106154-14XxxKUUwh13.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106154-JDhZHkfHVsMK.jpg",
    broadcastLabel: "全球網絡首播",
    officialSiteUrl: "https://www.ghostintheshell-sac2045.jp/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/57",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/ghost_in_the_shell_sac_2045",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "Fly with me",
        artistDisplayName: "millennium parade × ghost in the shell: SAC_2045",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "sustain++;",
        artistDisplayName: "Mili",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 124341,
    slug: "arad-gyakuten-no-wa",
    startDate: "2020-04-23",
    titleJa: "アラド：逆転の輪",
    titleZhHant: "阿拉德：逆轉之輪",
    titleRomaji: "Arad: Gyakuten no Wa",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124341-HFlKVdhZ9lDS.png",
    broadcastLabel: "海外先行公開／日本其後播出",
    officialSiteUrl: "https://www.tv-tokyo.co.jp/anime/arad_gia/",
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/202004/"],
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "ORATIO",
        artistDisplayName: "新田恵海",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "朝焼けアプローチ",
        artistDisplayName: "Prima Porta",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 113906,
    slug: "bang-dream-garupa-pico-oomori",
    startDate: "2020-05-07",
    titleJa: "BanG Dream! ガルパ☆ピコ~大盛り~",
    titleZhHant: "BanG Dream！迷你少女樂團派對★PICO 第二季：大碗公",
    titleRomaji: "BanG Dream! Garupa☆Pico: Oomori",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113906-XWfukSUYMS5K.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113906-dW6ib2eJYPzu.jpg",
    broadcastLabel: "日本首播／時間未整理",
    officialSiteUrl: "https://bushiroad.com/media/11056",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/414",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/bang_dream_garupapico_oomori",
    themes: [
      {
        type: "ED",
        sequence: 1,
        titleJa: "大盛り一丁！ガルパ☆ピコ",
        artistDisplayName:
          "戸山香澄（CV：愛美）×美竹蘭（CV：佐倉綾音）×丸山彩（CV：前島亜美）×湊友希那（CV：相羽あいな）×弦巻こころ（CV：伊藤美来）",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 115656,
    slug: "cardfight-vanguard-gaiden-if",
    startDate: "2020-05-30",
    titleJa: "カードファイト!! ヴァンガード外伝 イフ-if-",
    titleZhHant: "卡片戰鬥!! 先導者 外傳 -if-",
    titleRomaji: "Cardfight!! Vanguard Gaiden: if",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx115656-Dt4eRb2enm3p.jpg",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/115656-tNhjPXB3FYfa.jpg",
    broadcastLabel: "日本首播／受疫情影響曾延期或停播",
    officialSiteUrl: "https://www.bs-tvtokyo.co.jp/cf-vanguard-if/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/147",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl:
      "https://animethemes.moe/anime/cardfight_vanguard_gaiden_if",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "What-if Wonderland!!",
        artistDisplayName: "Argonavis",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "Gonna be right",
        artistDisplayName:
          "Peaky P-key [山手響子 (CV.愛美)、犬寄しのぶ (CV.高木美佑)、笹子・ジェニファー・由香 (CV.小泉萌香)、清水絵空 (CV.倉知玲鳳)]",
      },
      {
        type: "ED",
        sequence: 2,
        titleJa: "Horizontal Oath",
        artistDisplayName:
          "燐舞曲 [青柳椿 (CV.加藤里保菜)、月見山渚 (CV.大塚紗英)、矢野緋彩 (CV.もものはるな)、三宅葵依 (CV.つんこ)]",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 110349,
    slug: "great-pretender",
    startDate: "2020-06-02",
    titleJa: "GREAT PRETENDER",
    titleZhHant: "GREAT PRETENDER 大欺詐師",
    titleRomaji: "GREAT PRETENDER",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110349-59hhZ9CNHVdk.png",
    bannerUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110349-bGG1E4uunLoq.jpg",
    broadcastLabel: "全球網絡首播",
    officialSiteUrl: "https://www.greatpretender.jp/",
    sourceReferenceUrls: ["https://acgsecrets.hk/bangumi/202004/"],
    animeThemesUrl: "https://animethemes.moe/anime/great_pretender",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "G.P.",
        artistDisplayName: "やまだ豊",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "The Great Pretender",
        artistDisplayName: "Freddie Mercury",
      },
    ],
  }),
  spring2020Seed({
    anilistId: 108522,
    slug: "baki-dai-raitaisai-hen",
    startDate: "2020-06-04",
    titleJa: "バキ 大擂台賽編",
    titleZhHant: "刃牙 大擂賽篇",
    titleRomaji: "Baki: Dai Raitaisai-hen",
    posterUrl:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108522-XQmYISWCnTGg.jpg",
    broadcastLabel: "全球網絡首播",
    officialSiteUrl: "https://baki-anime.jp/2nd/",
    sourceReferenceUrls: [
      "https://youranimes.tw/animes/184",
      "https://acgsecrets.hk/bangumi/202004/",
    ],
    animeThemesUrl: "https://animethemes.moe/anime/baki_2nd_season",
    themes: [
      {
        type: "OP",
        sequence: 1,
        titleJa: "情熱は覚えている",
        artistDisplayName: "GRANRODEO",
      },
      {
        type: "ED",
        sequence: 1,
        titleJa: "DEAD STROKE",
        artistDisplayName: "藤田恵名",
      },
    ],
  }),
];

export const curated2020SpringSeeds: CuratedAnimeSeed[] =
  curated2020SpringSeedRows;

export const curated2020SpringAnimeIds = curated2020SpringSeeds.map(
  ({ anilistId }) => anilistId,
);
