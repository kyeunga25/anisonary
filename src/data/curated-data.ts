import { buildSeasonCatalogReferences, getSeasonSnapshotVerifiedAt } from "@/data/catalog-sources";
import { curatedSeasonRegistry } from "@/data/curated-season-registry";
import {
  curatedAnimeSeeds,
  curatedSeasonAnimeIds,
  type CuratedAnimeSeed,
  type CuratedThemeSeed
} from "@/data/curated-seeds";
import type {
  PublicAnimeCard,
  PublicAnimeDetail,
  PublicCreatorCredit,
  PublicExternalLink,
  PublicSeasonDetail,
  PublicSeasonSummary,
  PublicTheme,
  PublicThemeAvailability,
  PublicThemeSource,
  PublicVideo
} from "@/types/public-api";

const defaultVerifiedAt = "2026-07-25";
type AnimeSourceSeed = Omit<PublicAnimeDetail["sources"][number], "verifiedAt">;

const themeOverrides: Record<string, Partial<CuratedThemeSeed>> = {
  "185753:OP:1": {
    artistDisplayName: "芹澤 優",
    youtubeUrl: "https://www.youtube.com/watch?v=M1Nj1mcgBns"
  },
  "185753:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=ngvqsIH11X8" },
  "187264:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=Jp6G6iiKMBc" },
  "187264:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=fj6ag_NdfFc" },
  "178005:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=cugf5FQ4fLE" },
  "178005:ED:1": {
    titleJa: "花と夢",
    titleRomaji: "Hana to Yume",
    youtubeUrl: "https://www.youtube.com/watch?v=_2dl3blJgy8"
  },
  "167152:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=h4I4frynoOo" },
  "198720:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=5ipBq1-qZlM" },
  "198720:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=_EEMJOr1NLA" },
  "197731:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=KOhrAtk6BLw" },
  "197731:ED:1": {
    titleRomaji: "Ashita Tenki ni Naare",
    youtubeUrl: "https://www.youtube.com/watch?v=UQYuIdD-dwk"
  },
  "195322:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=bJFqYBcIMcc" },
  "195322:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=S3HQmsf7BSY" },
  "177385:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=g_nDJVMvSD8" },
  "177385:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=fyzUQiDSXqs" },
  "166521:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=YcRYX8hwQ8Y" },
  "166521:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=SrmET-l5P_4" },
  "194028:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=kinVGoEF3O4" },
  "194028:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=kCERfeJ2HWI" },
  "166613:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=gHIA3Mhc618" },
  "166613:ED:1": {
    artistDisplayName: "女王蜂",
    youtubeUrl: "https://www.youtube.com/watch?v=N-Go4JtUw6U"
  },
  "163144:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=9PZ3t1RD9Rk" },
  "163144:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=Dz3TitQnWvo" },
  "166617:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=tcC9g9dlv58" },
  "166617:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=P7ZcQSEP6PU" },
  "189275:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=-hPpXrlgncE" },
  "189275:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=o076YrFjZsA" },
  "177679:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=wTDmqzeugx8" },
  "177679:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=MFNM8RXPDuE" },
  "180746:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=VugBZB4gNGk" },
  "180746:ED:1": {
    titleRomaji: "Inori",
    artistDisplayName: "藤川千愛",
    youtubeUrl: "https://www.youtube.com/watch?v=9_wI_FRMrcI"
  },
  "177580:OP:1": {
    titleRomaji: "Adrena",
    youtubeUrl: "https://www.youtube.com/watch?v=lU1wZMytGvY"
  },
  "177580:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=QnFRBzxmC4s" },
  "185514:OP:1": {
    titleRomaji: "Mahoutsukai no Nikki",
    youtubeUrl: "https://www.youtube.com/watch?v=FXq7zmbs1ws"
  },
  "185514:ED:1": {
    titleRomaji: "Kimi wa",
    youtubeUrl: "https://www.youtube.com/watch?v=jCP_ZA_ga30"
  },
  "182255:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=C0BG3B7aksU" },
  "182255:ED:1": { youtubeUrl: "https://www.youtube.com/watch?v=FY4Bx2qtkRM" },
  "182255:ED:2": { youtubeUrl: "https://www.youtube.com/watch?v=R5cBm08p_jE" },
  "182587:ED:1": { titleRomaji: "Serenade" },
  "159483:OP:1": { titleRomaji: "Hyakunichisou" },
  "159483:OP:2": {
    titleJa: "ヒャクニチソウ",
    titleRomaji: "Hyakunichisou",
    artistDisplayName: "戸倉家の姫たち"
  },
  "159483:ED:1": { titleRomaji: "Moshimo" },
  "159483:ED:2": {
    titleJa: "フラッシュバック",
    titleRomaji: "Flashback",
    artistDisplayName: "Q.I.S.(北澤ゆうほ)"
  },
  "159483:ED:3": {
    titleRomaji: "sincerity flower",
    artistDisplayName: "結城アイラ"
  },
  "159483:ED:4": {
    titleRomaji: "Strike freedom!",
    artistDisplayName: "アザミ"
  },
  "159483:ED:5": {
    titleJa: "夏の住処",
    titleRomaji: "Natsu no Sumika",
    artistDisplayName: "やなぎなぎ"
  },
  "191994:OP:1": { titleRomaji: "Feathered Dreams" },
  "191994:ED:1": { titleRomaji: "Drive Your Heart" },
  "191994:ED:2": { titleRomaji: "Shien" },
  "191994:ED:3": { titleRomaji: "Page" },
  "191994:ED:4": { titleRomaji: "Color of Us" },
  "191994:ED:5": { titleRomaji: "Starring Jibun" },
  "191994:ED:6": { titleRomaji: "Suki x Suki x Colorfully" },
  "191994:ED:7": { titleRomaji: "Mayonaka Yuuenchi" },
  "191994:ED:8": { titleRomaji: "'FIGHT' ADDICT" },
  "191994:ED:9": { titleRomaji: "Part of the Life" },
  "191994:ED:10": { titleRomaji: "‘S/’ The Way" },
  "169420:OP:1": {
    titleRomaji: "Yuurei ni Naritai",
    artistDisplayName: "『ユイカ』"
  },
  "169420:OP:2": { titleRomaji: "Futaribun" },
  "169420:ED:1": { titleRomaji: "Ai Ai Ai Ai Ai" },
  "169420:ED:2": { titleRomaji: "Shippai Shinai Menhera no Sodatekata" },
  "173335:OP:1": { titleRomaji: "Utahime" },
  "173335:ED:1": {
    titleRomaji: "Tsuioku",
    youtubeUrl: "https://www.youtube.com/watch?v=m9UFr5RyZeE"
  },
  "173335:ED:2": {
    artistDisplayName: "ヰ世界情緒",
    youtubeUrl: "https://www.youtube.com/watch?v=2ErDR6ku6UY"
  },
  "173335:ED:3": {
    titleJa: "閃光だった",
    titleRomaji: "Senkou Datta",
    artistDisplayName: "理芽",
    youtubeUrl: "https://www.youtube.com/watch?v=LYnF2X_mnBI"
  },
  "173335:ED:4": {
    titleJa: "距離。",
    titleRomaji: "Kyori.",
    artistDisplayName: "春猿火",
    youtubeUrl: "https://www.youtube.com/watch?v=pn-4lkMEjUQ"
  },
  "173335:ED:5": {
    titleJa: "シャングリラ",
    titleRomaji: "Shangri-La",
    artistDisplayName: "幸祜",
    youtubeUrl: "https://www.youtube.com/watch?v=Dqey9ZXH5Mk"
  },
  "173335:ED:6": {
    titleJa: "ひとえに壊れて",
    titleRomaji: "Hitoe ni Kowarete",
    artistDisplayName: "花譜",
    youtubeUrl: "https://www.youtube.com/watch?v=VMkIQ3gD494"
  },
  "173335:ED:7": {
    titleJa: "閃光だった（Rearranged ver.）",
    titleRomaji: "Senkou Datta (Rearranged ver.)",
    artistDisplayName: "理芽 × 幸祜",
    youtubeUrl: "https://www.youtube.com/watch?v=wz696q7pdeI"
  },
  "173335:ED:8": {
    titleJa: "BREATHE（Rearranged ver.）",
    artistDisplayName: "ヰ世界情緒 × 春猿火",
    youtubeUrl: "https://www.youtube.com/watch?v=2QCSQPC829g"
  },
  "173335:ED:9": {
    titleJa: "欲望",
    titleRomaji: "Yokubou",
    youtubeUrl: "https://www.youtube.com/watch?v=RVcJUSYS6_8"
  },
  "173335:ED:10": {
    titleJa: "電脳 sinka ver.",
    titleRomaji: "Dennou sinka ver.",
    youtubeUrl: "https://www.youtube.com/watch?v=zWyXgjQJfFU"
  },
  "171046:OP:1": { titleRomaji: "Snowdrop" },
  "171046:ED:1": {
    titleJa: "水平線は僕の古傷 広川卯月 Short Ver.",
    titleRomaji: "Suiheisen wa Boku no Furukizu (Uzuki Hirokawa Short Ver.)",
    artistDisplayName: "広川卯月（CV.雨宮天）",
    youtubeUrl: "https://www.youtube.com/watch?v=JZX93La1KwM"
  },
  "171046:ED:2": {
    titleJa: "水平線は僕の古傷 赤城郁実 Short Ver.",
    titleRomaji: "Suiheisen wa Boku no Furukizu (Ikumi Akagi Short Ver.)",
    artistDisplayName: "赤城郁実（CV.山根綺）",
    youtubeUrl: "https://www.youtube.com/watch?v=C7JnK625UnY"
  },
  "171046:ED:3": {
    titleJa: "水平線は僕の古傷 姫路紗良 Short Ver.",
    titleRomaji: "Suiheisen wa Boku no Furukizu (Sara Himeji Short Ver.)",
    artistDisplayName: "姫路紗良（CV.小原好美）",
    youtubeUrl: "https://www.youtube.com/watch?v=KB4wQXFBdpg"
  },
  "171046:ED:4": {
    titleJa: "水平線は僕の古傷 霧島透子 Short Ver.",
    titleRomaji: "Suiheisen wa Boku no Furukizu (Touko Kirishima Short Ver.)",
    artistDisplayName: "霧島透子",
    youtubeUrl: "https://www.youtube.com/watch?v=eguA2RhRU9s"
  },
  "171046:ED:5": {
    titleJa: "水平線は僕の古傷 岩見沢寧々 Short Ver.",
    titleRomaji: "Suiheisen wa Boku no Furukizu (Nene Iwamizawa Short Ver.)",
    artistDisplayName: "岩見沢寧々（CV.上田麗奈）",
    youtubeUrl: "https://www.youtube.com/watch?v=2FFAGSH5mYE"
  },
  "171046:ED:6": {
    titleJa: "水平線は僕の古傷",
    titleRomaji: "Suiheisen wa Boku no Furukizu",
    artistDisplayName:
      "広川卯月（CV.雨宮天）、赤城郁実（CV.山根綺）、姫路紗良（CV.小原好美）、岩見沢寧々（CV.上田麗奈）",
    youtubeUrl: "https://www.youtube.com/watch?v=d3PyUcXxG6k"
  },
  "188138:OP:1": {
    titleJa: "ハイカラ de GO!!",
    titleRomaji: "Haikara de GO!!",
    artistDisplayName: "ハイカラ浪漫団",
    youtubeUrl: "https://www.youtube.com/watch?v=3QGgv52xJiI"
  },
  "188138:ED:1": {
    titleJa: "残光 in your eyes",
    titleRomaji: "Zankou in your eyes",
    artistDisplayName: "蛮華羅新鋭隊",
    youtubeUrl: "https://www.youtube.com/watch?v=3QGgv52xJiI"
  },
  "188653:ED:1": {
    type: "OP",
    titleJa: "ぷにぷにぷにるんず ぷにックスバージョン",
    titleRomaji: "Puni Puni Punirunes Punix Version",
    artistDisplayName: "ななひら"
  },
  "177880:ED:1": { artistDisplayName: "ひとみ from あたらよ＆松野家6兄弟" },
  "151799:OP:1": { artistDisplayName: "TeddyLoid & ☆Taku Takahashi with Ashley & E.V.P" },
  "177887:OP:1": { titleRomaji: "Paths Combine" },
  "177887:ED:1": { titleRomaji: "The Sky Ahead" },
  "178090:OP:1": { youtubeUrl: "https://www.youtube.com/watch?v=WZ-xST_J04g" },
  "180425:OP:1": { titleRomaji: "Ame to", artistDisplayName: "鈴木真海子" },
  "189326:OP:1": { titleRomaji: "Kagome Kagome" },
  "170113:ED:1": { titleRomaji: "Shoujo no Susume" },
  "180460:ED:1": {
    artistDisplayName: "真白（CV.花澤香菜）VS愉快なおじさんたち（CV.杉田智和）"
  },
  "180460:ED:2": {
    titleRomaji: "Kaere Sorrento e",
    artistDisplayName: "真白（CV.花澤香菜）"
  },
  "189069:OP:1": {
    titleRomaji: "Gingakei made Tonde Ike!",
    youtubeUrl: "https://www.youtube.com/watch?v=QbfPKfEuqCY"
  },
  "185544:OP:1": { titleRomaji: "Unique" },
  "185544:ED:1": { titleRomaji: "Magokoro My Heart" },
  "186561:OP:1": { titleRomaji: "Tenden Barabara" },
  "186561:ED:1": {
    titleRomaji: "Sukima Jikan",
    artistDisplayName: "シエル（CV：佐伯伊織）・アネモネ（CV：上田 瞳）・ゴア（CV：白石晴香）",
    youtubeUrl: "https://www.youtube.com/watch?v=KnU-i-_fe58"
  },
  "180794:OP:1": {
    titleJa: "ふたりのスタートボタン",
    titleRomaji: "Futari no Start Button",
    artistDisplayName: "リリー・ベイカー（CV：天城サリー）・草壁葵衣（CV：小山内怜央）",
    youtubeUrl: "https://www.youtube.com/watch?v=BLX7qZwt--w"
  },
  "180794:ED:1": {
    artistDisplayName: "リリー・ベイカー（CV：天城サリー）"
  },
  "196229:OP:1": {
    titleRomaji: "Tokusou Gattai! Jobraver",
    artistDisplayName: "悠佑（fromいれいす）",
    youtubeUrl: "https://www.youtube.com/watch?v=pwMtFNWtKWw"
  },
  "179885:OP:1": { titleRomaji: "Junjou de Are." },
  "179885:ED:1": { titleRomaji: "Hikari Sasu Tobira", artistDisplayName: "ChouCho" },
  "181444:OP:1": { titleRomaji: "Manazashi wa Hikari" },
  "181444:ED:1": { titleRomaji: "Hare no Hi ni" },
  "178025:ED:1": { titleRomaji: "Tomoshibi" },
  "178025:ED:2": { titleRomaji: "Ban" },
  "184237:ED:1": { titleRomaji: "Dandelion" },
  "147105:ED:2": { titleJa: "夜に浮かぶ", titleRomaji: "Yoru ni Ukabu" },
  "147105:ED:3": { titleJa: "光", titleRomaji: "Hikari" },
  "175914:ED:1": { titleRomaji: "Nemure" },
  "175914:ED:2": { titleJa: "よふかしのうた", titleRomaji: "Yofukashi no Uta" },
  "193883:OP:1": {
    youtubeUrl: "https://www.youtube.com/watch?v=ZAP6ravVi8k"
  },
  "179344:OP:1": {
    youtubeUrl: "https://www.youtube.com/watch?v=q9YrWVr4dvI"
  },
  "179344:ED:1": {
    titleJa: "ぼくのベガ",
    titleRomaji: "Boku no Vega",
    artistDisplayName: "リーガルリリー",
    youtubeUrl: "https://www.youtube.com/watch?v=jrGOylZ63oE"
  },
  "186043:ED:1": { titleJa: "Kawaii (Prod. Gen Hoshino)" },
  "189117:ED:1": { artistDisplayName: "音羽-otoha-" },
  "195209:OP:1": { artistDisplayName: "鷲尾伶菜" },
  "177474:OP:1": {
    titleJa: "OVERNIGHT",
    artistDisplayName: "THE ORAL CIGARETTES",
    youtubeUrl: "https://www.youtube.com/watch?v=bL7eFBy5Iz8"
  },
  "177474:OP:2": {
    titleJa: "阿弥陀籤",
    titleRomaji: "Amidakuji",
    artistDisplayName: "超学生",
    youtubeUrl: "https://www.youtube.com/watch?v=yI3PSYmU8ig"
  },
  "177474:ED:2": { youtubeUrl: "https://www.youtube.com/watch?v=WHUpja-jFVk" },
  "185965:OP:2": {
    titleJa: "ふたりでいようか",
    titleRomaji: "Futari de Iyou ka",
    artistDisplayName: "HOKUTO",
    youtubeUrl: "https://www.youtube.com/watch?v=YHHAaTqZ0hw"
  },
  "194088:ED:1": {
    titleJa: "だぅと",
    titleRomaji: "Dauto",
    artistDisplayName: "ナオト・インティライミ",
    youtubeUrl: "https://www.youtube.com/watch?v=dH_4eKIK4fE"
  },
  "166215:OP:1": {
    titleJa: "思い出話",
    titleRomaji: "Omoidebanashi",
    artistDisplayName: "手鞠沢高校アカペラ部",
    youtubeUrl: "https://www.youtube.com/watch?v=OuV9MwBVVzg"
  },
  "183127:OP:1": {
    youtubeUrl: "https://www.youtube.com/watch?v=-bt4cX7dCT8"
  },
  "175035:ED:1": {
    titleJa: "オノマトペISLAND",
    youtubeUrl: "https://www.youtube.com/watch?v=Ks03nrhi2NU"
  },
  "198408:ED:1": {
    youtubeUrl: "https://www.youtube.com/watch?v=HDkb3oEJgUs"
  },
  "178789:OP:2": { titleJa: "芽吹の唄", titleRomaji: "Mebuki no Uta", artistDisplayName: "大原ゆい子" },
  "177699:ED:1": { artistDisplayName: "MILLENNIUM PARADE feat. Saya Gray, Daniel Caesar" },
  "213426:ED:1": {
    titleJa: "防衛ライン（だいたい平和です）",
    titleRomaji: "Bouei Line (Daitai Heiwa Desu)",
    artistDisplayName: "まめぞう合唱団"
  }
};

const excludedThemeKeys = new Set([
  // The official anime, artist and Traditional Chinese pages list one generic
  // theme song, not separate opening and ending tracks. Keep its navigation
  // record under OP1 and label the official classification explicitly:
  // https://yushakei-pj.com/music/
  "167152:ED:1",
  // The official music page lists one ending. ED2 repeats the same song in
  // Romanized form while ED1 preserves its original Japanese title:
  // https://shiboyugi-anime.com/music/
  "180746:ED:2",
  // The official music page and announcement list BABY only as the ending.
  // This extra seed duplicates the same song under OP2:
  // https://hanakimi-anime.com/news/?article_id=69096
  "177580:OP:2",
  // The official music page lists exactly one OP and one ED. These two seeds
  // repeat the same songs under Romanized titles and swap their classifications:
  // https://champignon-pr.com/
  "185514:OP:2",
  "185514:ED:2",
  // The official music page lists one opening. This seed is the later special
  // music video for the same song, so the video belongs on OP1 instead:
  // https://frieren-anime.jp/music/2nd/
  "182255:OP:2",
  // The season-three music page lists one opening. OP2 repeats the same track
  // under CHANMINA's English artist spelling rather than representing a new theme:
  // https://ichigoproduction.com/Season3/music/
  "182587:OP:2",
  // AniList 196063 is the separate one-minute official mini anime. Its seed
  // inherited the parent TV series songs, but the mini episodes have no OP/ED listing:
  // https://www.youtube.com/watch?v=lEzijOwAOOw
  "196063:OP:1",
  "196063:ED:1",
  // The official music page lists one opening; this seed is the creditless video for the same track:
  // https://bullet-bullet.com/music.html
  "157960:OP:2",
  // The two official videos are alternate creditless openings for the same song, not separate themes:
  // https://newpsg.com/music/
  "151799:OP:2",
  "185660:ED:2",
  // The official music page lists one ending; this seed is a special movie for the same track:
  // https://www.foodcourtjk-anime.com/music/
  "185519:ED:2",
  "184237:OP:2",
  // The anime officially classifies this as an insert song, outside this public OP/ED contract:
  // https://kaoruhana-anime.com/news/?article_id=69692
  "181444:ED:2"
]);

const themeVersionLabelOverrides: Record<string, string> = {
  "167152:OP:1": "主題歌（官方分類）",
  "178005:ED:2": "第 5 話特別 ED",
  "182255:ED:2": "第 38 話特別 ED"
};

const excludedSourceUrls = new Set([
  // The AnimeThemes record currently contains no theme entries for this season,
  // so it cannot support the seed's superseded ED classification.
  "https://animethemes.moe/anime/punirunes_puni_3"
]);

const extraThemes: Record<number, CuratedThemeSeed[]> = {
  178005: [
    {
      type: "ED",
      sequence: 2,
      titleJa: "RAIN",
      artistDisplayName: "F/ACE",
      youtubeUrl: "https://www.youtube.com/watch?v=d4euM3A77Xw"
    }
  ],
  204698: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "delulu",
      artistDisplayName: "冨岡 愛"
    }
  ],
  205772: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "Telepathy",
      artistDisplayName: "IS:SUE"
    }
  ],
  206950: [
    {
      type: "OP",
      sequence: 1,
      titleJa: "こんにちワールド",
      titleRomaji: "Konnichi World",
      artistDisplayName: "DJクマーバ（CV：ファイルーズあい）"
    }
  ],
  212308: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "we are エケチャン！",
      artistDisplayName: "Mashinomi"
    }
  ],
  198411: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "グッドラック！マイフレンド feat.ムロツヨシ & さかなクン",
      artistDisplayName: "東京スカパラダイスオーケストラ"
    }
  ],
  204269: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "おでかけ",
      artistDisplayName: "子ザメちゃん（CV：花澤香菜）"
    }
  ],
  202386: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "CUE CUE CUTE",
      artistDisplayName: "Hey! Say! JUMP"
    }
  ],
  181867: [
    {
      type: "OP",
      sequence: 1,
      titleJa: "クリプトニンジャ咲耶",
      artistDisplayName: "宮原永海"
    }
  ],
  199486: [
    {
      type: "OP",
      sequence: 1,
      titleJa: "萌やせ！ネコ魂",
      titleRomaji: "Moyase! Neko Damashii",
      artistDisplayName: "ゴロ助（CV：逢来りん）"
    }
  ],
  173335: [
    {
      type: "ED",
      sequence: 11,
      titleJa: "魔女(真) sinka ver.",
      artistDisplayName: "V.W.P",
      youtubeUrl: "https://www.youtube.com/watch?v=ofTllighKyE"
    }
  ],
  177175: [
    {
      type: "ED",
      sequence: 2,
      titleJa: "生命換装",
      titleRomaji: "Seimei Kansou",
      artistDisplayName: "ReoNa",
      youtubeUrl: "https://www.youtube.com/watch?v=0xR91gHai4k"
    }
  ],
  169228: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "愛をとりもどせ!!",
      artistDisplayName: "Toshl"
    }
  ],
  178886: [
    {
      type: "ED",
      sequence: 2,
      titleJa: "One Road",
      artistDisplayName: "帝乃二琥（CV.古賀葵）",
      youtubeUrl: "https://www.youtube.com/watch?v=FTsXmDzsBMU"
    },
    {
      type: "ED",
      sequence: 3,
      titleJa: "Sunrise Prism",
      artistDisplayName: "帝乃三和（CV.青山吉能）",
      youtubeUrl: "https://www.youtube.com/watch?v=Jh7AAapWJ-A"
    }
  ],
  193238: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "学校では教えてくれないこと",
      titleRomaji: "Gakkou de wa Oshiete Kurenai Koto",
      artistDisplayName: "OCHA NORMA",
      youtubeUrl: "https://www.youtube.com/watch?v=5E4EprwFUEY"
    }
  ]
};

const chineseTitleOverrides: Record<number, string> = {
  135865: "幼女戰記Ⅱ",
  169228: "北斗神拳 -FIST OF THE NORTH STAR-",
  177887: "利維坦號戰記",
  178090: "轉生為第七王子，隨心所欲的魔法學習之路 第二季",
  178789: "無職轉生Ⅲ～到了異世界就拿出真本事～",
  185407: "章魚嗶的原罪",
  185753: "MF GHOST 燃油車鬥魂 第三季",
  189275: "金牌得主 第二季",
  189326: "地縛少年花子君2 後篇",
  196063: "為丑女獻上花束 迷你動畫",
  198745: "週刊輕小說動畫"
};

const slugOverrides: Record<number, string> = {
  169582: "saikyou-degarashi-ouji"
};

const videoOverrides: Record<string, PublicVideo[]> = {
  "185753:OP:1": [{
    youtubeVideoId: "M1Nj1mcgBns",
    title: "ノンクレジットOP│TVアニメ『#MFゴースト 3rd Season』オープニング・テーマ 芹澤 優「TIMELESS POWER feat. MOTSU」",
    type: "creditless_op",
    channelName: "TVアニメ「MFゴースト」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "59aw0ps3spE",
    title: "【芹澤 優】「TIMELESS POWER feat. MOTSU」MV【TVアニメ『 #MFゴースト 3rd Season』オープニング・テーマ】",
    type: "full_music_video",
    channelName: "i☆Ris 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "185753:ED:1": [{
    youtubeVideoId: "ngvqsIH11X8",
    title: "ノンクレジットED│TVアニメ『#MFゴースト 3rd Season』エンディング・テーマ Himika Akaneya「予感の途中 Prod. ☆Taku Takahashi (m-flo)」",
    type: "creditless_ed",
    channelName: "TVアニメ「MFゴースト」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "60SUZFfx5BM",
    title: "TVアニメ『#MFゴースト 3rd Season』エンディング・テーマ Himika Akaneya NEW Single「予感の途中 Prod. ☆Taku Takahashi (m-flo)」",
    type: "full_music_video",
    channelName: "i☆Ris 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "187264:OP:1": [{
    youtubeVideoId: "Jp6G6iiKMBc",
    title: "TVアニメ『勇者パーティを追い出された器用貧乏』ノンクレジットオープニング｜常闇トワ「シルベ」",
    type: "creditless_op",
    channelName: "バンダイナムコフィルムワークス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "eUmwR0x55JU",
    title: "シルベ / 常闇トワ (official)",
    type: "full_music_video",
    channelName: "Towa Ch. 常闇トワ",
    officialStatus: "official",
    embeddable: true
  }],
  "187264:ED:1": [{
    youtubeVideoId: "fj6ag_NdfFc",
    title: "TVアニメ『勇者パーティを追い出された器用貧乏』ノンクレジットエンディング｜Nowlu「sukuu」",
    type: "creditless_ed",
    channelName: "バンダイナムコフィルムワークス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "-Gl_0CqyUjU",
    title: "sukuu",
    type: "official_audio",
    channelName: "Nowlu - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "178005:OP:1": [{
    youtubeVideoId: "cugf5FQ4fLE",
    title: "TVアニメ「多聞くん今どっち！？」ノンクレジットオープニング映像｜F/ACE「Sweet Magic」",
    type: "creditless_op",
    channelName: "アニメ「多聞くん今どっち!?」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "H6L4hKqDcME",
    title: "Sweet Magic",
    type: "official_audio",
    channelName: "F/ACE from the stage - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "178005:ED:1": [{
    youtubeVideoId: "_2dl3blJgy8",
    title: "TVアニメ「多聞くん今どっち！？」ノンクレジットエンディング映像｜F/ACE「花と夢」",
    type: "creditless_ed",
    channelName: "アニメ「多聞くん今どっち!?」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "MPWiQeMVqKg",
    title: "花と夢",
    type: "official_audio",
    channelName: "F/ACE from the stage - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "178005:ED:2": [{
    youtubeVideoId: "d4euM3A77Xw",
    title: "TVアニメ「多聞くん今どっち！？」第5話ノンクレジットエンディング映像｜F/ACE「RAIN」",
    type: "creditless_ed",
    channelName: "アニメ「多聞くん今どっち!?」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "rwC4f83gnNA",
    title: "RAIN",
    type: "official_audio",
    channelName: "F/ACE from the stage - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "167152:OP:1": [{
    youtubeVideoId: "h4I4frynoOo",
    title: "TVアニメ『勇者刑に処す』ノンクレジット主題歌映像│SPYAIR「Kill the Noise」",
    type: "other",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "N79bSihoRUk",
    title: "SPYAIR『Kill the Noise』Music Video（TVアニメ『勇者刑に処す』主題歌）",
    type: "full_music_video",
    channelName: "SPYAIR Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "198720:OP:1": [{
    youtubeVideoId: "5ipBq1-qZlM",
    title: "Blacker Co., Ltd. / イツカ▶︎（TV size）",
    type: "tv_size",
    channelName: "イツカ▶︎_official",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "rnc0_R6CVcM",
    title: "【LIVE MV】Blacker Co., Ltd.／イツカ▶︎",
    type: "full_music_video",
    channelName: "イツカ▶︎_official",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "peJQ2-g7I_4",
    title: "Blacker Co., Ltd.",
    type: "official_audio",
    channelName: "イツカ▶︎_official",
    officialStatus: "official",
    embeddable: true
  }],
  "198720:ED:1": [{
    youtubeVideoId: "_EEMJOr1NLA",
    title: "The Canbellz「Elegy of the Enemies」Music Video",
    type: "full_music_video",
    channelName: "神戸シンキ / The Canbellz",
    officialStatus: "official",
    embeddable: true
  }],
  "197731:OP:1": [{
    youtubeVideoId: "KOhrAtk6BLw",
    title: "TVアニメ「拷問バイトくんの日常」ノンクレジットオープニングムービー",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "RMNOzJBD5P0",
    title: "GRANRODEO / GO GO PARADISE!!",
    type: "full_music_video",
    channelName: "GRANRODEO",
    officialStatus: "official",
    embeddable: true
  }],
  "197731:ED:1": [{
    youtubeVideoId: "UQYuIdD-dwk",
    title: "TVアニメ「拷問バイトくんの日常」ノンクレジットエンディングムービー",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "24CI2Pj89GM",
    title: "寺島拓篤 / 明日天気になぁれ Music Video",
    type: "full_music_video",
    channelName: "Takuma Terashima Official Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "195322:OP:1": [{
    youtubeVideoId: "bJFqYBcIMcc",
    title: "TVアニメ『ヴィジランテ -僕のヒーローアカデミア ILLEGALS-』第2期 オープニングムービー | OPテーマ：すりぃ「CATCH!!!」",
    type: "other",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "0bJgiyfYASs",
    title: "CATCH!!! / すりぃ",
    type: "full_music_video",
    channelName: "すりぃ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "-VabYsRSrH8",
    title: "すりぃ『CATCH!!!』ANIME MUSIC VIDEO",
    type: "other",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "195322:ED:1": [{
    youtubeVideoId: "S3HQmsf7BSY",
    title: "TVアニメ『ヴィジランテ -僕のヒーローアカデミア ILLEGALS-』第2期 ノンクレジットエンディングムービー",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "dpQHoYqbT0o",
    title: "シャイトープ「ミス・ユー」Music Video",
    type: "full_music_video",
    channelName: "シャイトープ",
    officialStatus: "official",
    embeddable: true
  }],
  "177385:OP:1": [{
    youtubeVideoId: "g_nDJVMvSD8",
    title: "TVアニメ『違国日記』ノンクレジットオープニング映像｜TOMOO「ソナーレ」",
    type: "creditless_op",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "V_f_r5YE12I",
    title: "TOMOO - ソナーレ【OFFICIAL MUSIC VIDEO】",
    type: "full_music_video",
    channelName: "TOMOO",
    officialStatus: "official",
    embeddable: true
  }],
  "177385:ED:1": [{
    youtubeVideoId: "fyzUQiDSXqs",
    title: "TVアニメ『違国日記』ノンクレジットエンディング映像｜Bialystocks「言伝」",
    type: "creditless_ed",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "HwWJ76pZ9us",
    title: "Bialystocks - 言伝【Official Audio】",
    type: "official_audio",
    channelName: "Bialystocks - ビアリストックス",
    officialStatus: "official",
    embeddable: true
  }],
  "166521:OP:1": [{
    youtubeVideoId: "YcRYX8hwQ8Y",
    title: "TVアニメ「ゴールデンカムイ」（最終章）ノンクレジットOP／OPテーマ：Awich × ALI「黄金の彼方」",
    type: "creditless_op",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "mDKh85rae2c",
    title: "Awich × ALI - 黄金の彼方 (Golden Horizon) / アニメ「ゴールデンカムイ」(Golden Kamuy) 最終章OP",
    type: "full_music_video",
    channelName: "Awich",
    officialStatus: "official",
    embeddable: true
  }],
  "166521:ED:1": [{
    youtubeVideoId: "SrmET-l5P_4",
    title: "TVアニメ「ゴールデンカムイ」（最終章）ノンクレジットED／EDテーマ：Ken Yokoyama「The Ballad」",
    type: "creditless_ed",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "87DfPstuyFI",
    title: "Ken Yokoyama「The Ballad」×TVアニメ『ゴールデンカムイ』スペシャルMV",
    type: "other",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }],
  "194028:OP:1": [{
    youtubeVideoId: "kinVGoEF3O4",
    title: "TVアニメ「綺麗にしてもらえますか。」ノンクレジットOP | ゆう。「綺麗。」",
    type: "creditless_op",
    channelName: "ハピネット【アニメ公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "pKrg4_m_9e4",
    title: "ゆう。「綺麗。」Music Video／TVアニメ「綺麗にしてもらえますか。」OP主題歌【じん書き下ろし】",
    type: "full_music_video",
    channelName: "ゆう。",
    officialStatus: "official",
    embeddable: true
  }],
  "194028:ED:1": [{
    youtubeVideoId: "kCERfeJ2HWI",
    title: "TVアニメ「綺麗にしてもらえますか。」ノンクレジットED | 清浦夏実「若葉のころ」",
    type: "creditless_ed",
    channelName: "ハピネット【アニメ公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "swPFCbVwhXo",
    title: "「若葉のころ」清浦夏実　Music Video",
    type: "full_music_video",
    channelName: "FlyingDog",
    officialStatus: "official",
    embeddable: true
  }],
  "172463:OP:1": [{
    youtubeVideoId: "Xr032EhUDPw",
    title: "TVアニメ『呪術廻戦』第3期「死滅回游 前編」ノンクレジットOPムービー／OPテーマ：King Gnu「AIZO」｜毎週木曜深夜0時26分（24時26分）～MBS/TBS系28局にて放送中!!",
    type: "creditless_op",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "zz2a9Q2Wru0",
    title: "King Gnu - AIZO",
    type: "full_music_video",
    channelName: "King Gnu official YouTube channel",
    officialStatus: "official",
    embeddable: true
  }],
  "172463:ED:1": [{
    youtubeVideoId: "-i8LR9-WVps",
    title: "TVアニメ『呪術廻戦』第3期「死滅回游 前編」ノンクレジットEDムービー／EDテーマ：jo0ji「よあけのうた」｜毎週木曜深夜0時26分（24時26分）～MBS/TBS系28局にて放送中!!",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ufcDIOS1HRo",
    title: "jo0ji「よあけのうた」Official Music Video | TVアニメ『呪術廻戦』「死滅回游 前編」エンディングテーマ",
    type: "full_music_video",
    channelName: "jo0ji",
    officialStatus: "official",
    embeddable: true
  }],
  "166613:OP:1": [{
    youtubeVideoId: "gHIA3Mhc618",
    title: "TVアニメ『地獄楽』第二期 ノンクレジットオープニング｜「かすかなはな」キタニタツヤ feat. BABYMETAL",
    type: "creditless_op",
    channelName: "TWIN ENGINE",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "t1gkIY4XvJ0",
    title: "かすかなはな / キタニタツヤ feat. BABYMETAL - Kasuka na Hana (A Faint Flower)",
    type: "full_music_video",
    channelName: "キタニタツヤ / Tatsuya Kitani",
    officialStatus: "official",
    embeddable: true
  }],
  "166613:ED:1": [{
    youtubeVideoId: "N-Go4JtUw6U",
    title: "TVアニメ『地獄楽』第二期 ノンクレジットエンディング｜「PERSONAL」女王蜂",
    type: "creditless_ed",
    channelName: "TWIN ENGINE",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "vhqSCwhcgBY",
    title: "『PERSONAL』Official MV",
    type: "full_music_video",
    channelName: "女王蜂 / QUEEN BEE official YouTube channel",
    officialStatus: "official",
    embeddable: true
  }],
  "163144:OP:1": [{
    youtubeVideoId: "9PZ3t1RD9Rk",
    title: "『TRIGUN STARGAZE』オープニング映像｜ano「ピカレスクヒーロー」",
    type: "tv_size",
    channelName: "TOHO animation",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "rs2WNAF2w54",
    title: "ano「ピカレスクヒーロー」Music Video",
    type: "full_music_video",
    channelName: "ano official channel",
    officialStatus: "official",
    embeddable: true
  }],
  "163144:ED:1": [{
    youtubeVideoId: "Dz3TitQnWvo",
    title: "『TRIGUN STARGAZE』エンディングノンクレジット映像｜FOMARE「スターダスト」",
    type: "creditless_ed",
    channelName: "TOHO animation",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "_TMBbiA-aRg",
    title: "FOMARE「スターダスト」アニメMV｜アニメ『TRIGUN STARGAZE』EDテーマ",
    type: "full_music_video",
    channelName: "TOHO animation",
    officialStatus: "official",
    embeddable: true
  }],
  "166617:OP:1": [{
    youtubeVideoId: "tcC9g9dlv58",
    title: "TVアニメ『Fate/strange Fake』ノンクレジットオープニングアニメーション｜「PROVANT」SawanoHiroyuki[nZk]:Jean-Ken Johnny & TAKUMA",
    type: "creditless_op",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "bQVMACYeCYs",
    title: "SawanoHiroyuki[nZk]:Jean-Ken Johnny & TAKUMA『PROVANT』 Music Video",
    type: "full_music_video",
    channelName: "澤野弘之 / SawanoHiroyuki[nZk]",
    officialStatus: "official",
    embeddable: true
  }],
  "166617:ED:1": [{
    youtubeVideoId: "P7ZcQSEP6PU",
    title: "TVアニメ『Fate/strange Fake』ノンクレジットエンディングアニメーション ver.1｜「潜在的なアイ」13.3g",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "rHlLzmlc69I",
    title: "TVアニメ『Fate/strange Fake』ノンクレジットエンディングアニメーション ver.2｜「潜在的なアイ」13.3g",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "LeK0WZqC-As",
    title: "13.3g「潜在的なアイ」MV (TVアニメ『Fate/strange Fake』エンディングテーマ)",
    type: "full_music_video",
    channelName: "13.3g",
    officialStatus: "official",
    embeddable: true
  }],
  "189275:OP:1": [{
    youtubeVideoId: "-hPpXrlgncE",
    title: "TVアニメ『メダリスト』第2期ノンクレジットオープニング映像｜HANA「Cold Night」",
    type: "creditless_op",
    channelName: "TVアニメ『メダリスト』公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "y0buouJde-g",
    title: "HANA / Cold Night -Music Video-",
    type: "full_music_video",
    channelName: "HANA official",
    officialStatus: "official",
    embeddable: true
  }],
  "189275:ED:1": [{
    youtubeVideoId: "o076YrFjZsA",
    title: "TVアニメ『メダリスト』第2期 ノンクレジットエンディング映像｜Conton Candy「Rookies」",
    type: "creditless_ed",
    channelName: "TVアニメ『メダリスト』公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "8_zBmELClV8",
    title: "Conton Candy - Rookies [Official Video]｜TVアニメ『メダリスト』第2期エンディング主題歌",
    type: "full_music_video",
    channelName: "Conton Candy",
    officialStatus: "official",
    embeddable: true
  }],
  "177679:OP:1": [{
    youtubeVideoId: "wTDmqzeugx8",
    title: "TVアニメ『ダーウィン事変』オープニング主題歌 Official髭男dism「Make Me Wonder」ノンクレジットアニメ映像／2026.01.06 24:00～ ON AIR",
    type: "creditless_op",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "LU7xD_yx43c",
    title: "Official髭男dism - Make Me Wonder [Official Video]",
    type: "full_music_video",
    channelName: "Official髭男dism",
    officialStatus: "official",
    embeddable: true
  }],
  "177679:ED:1": [{
    youtubeVideoId: "MFNM8RXPDuE",
    title: "【エンディング主題歌解禁】TVアニメ『ダーウィン事変』エンディング主題歌 a子「Turn It Up」ノンクレジットアニメ映像／毎週火曜24:00～放送中",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "T57HYBSkci8",
    title: "a子 - Turn It Up : MUSIC VIDEO",
    type: "full_music_video",
    channelName: "a子",
    officialStatus: "official",
    embeddable: true
  }],
  "180746:OP:1": [{
    youtubeVideoId: "VugBZB4gNGk",
    title: "TVアニメ「死亡遊戯で飯を食う。」ノンクレジットOP映像｜『¬Ersterbend』作曲・編曲：LIN（MADKID）",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }],
  "180746:ED:1": [{
    youtubeVideoId: "9_wI_FRMrcI",
    title: "TVアニメ「死亡遊戯で飯を食う。」ノンクレジットED映像｜『祈り』歌：藤川千愛",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "3l4Yu6HMBwg",
    title: "祈り／藤川千愛 TVアニメ『死亡遊戯で飯を食う。』EDテーマ",
    type: "full_music_video",
    channelName: "Chiai Fujikawa",
    officialStatus: "official",
    embeddable: true
  }],
  "177580:OP:1": [{
    youtubeVideoId: "lU1wZMytGvY",
    title: "TVアニメ『花ざかりの君たちへ』ノンクレジットオープニング映像｜YOASOBI「アドレナ」",
    type: "creditless_op",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ARqP5ohiubY",
    title: "YOASOBI「アドレナ」Official Music Video",
    type: "full_music_video",
    channelName: "YOASOBI",
    officialStatus: "official",
    embeddable: true
  }],
  "177580:ED:1": [{
    youtubeVideoId: "QnFRBzxmC4s",
    title: "TVアニメ『花ざかりの君たちへ』ノンクレジットエンディング映像｜YOASOBI「BABY」",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "tWqZxTAy7rU",
    title: "YOASOBI「BABY」Official Music Video",
    type: "full_music_video",
    channelName: "YOASOBI",
    officialStatus: "official",
    embeddable: true
  }],
  "185514:OP:1": [{
    youtubeVideoId: "FXq7zmbs1ws",
    title: "TVアニメ『シャンピニオンの魔女』ノンクレジットオープニング",
    type: "creditless_op",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Eqp5nUfNYKo",
    title: "魔法使いの日記",
    type: "full_music_video",
    channelName: "ロス",
    officialStatus: "official",
    embeddable: true
  }],
  "185514:ED:1": [{
    youtubeVideoId: "jCP_ZA_ga30",
    title: "TVアニメ『シャンピニオンの魔女』ノンクレジットエンディング",
    type: "creditless_ed",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "nzUr2Px5OfU",
    title: "TVアニメ『シャンピニオンの魔女』ED主題歌「君は」Official Music Video",
    type: "full_music_video",
    channelName: "MsOOJA Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "182255:OP:1": [{
    youtubeVideoId: "C0BG3B7aksU",
    title: "『葬送のフリーレン』第2期ノンクレジットオープニング映像／OPテーマ：「lulu.」Mrs. GREEN APPLE",
    type: "creditless_op",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "-kpHrSd2wOc",
    title: "Mrs. GREEN APPLE「lulu.」×『葬送のフリーレン』第2期 SPECIAL MUSIC VIDEO (MV)",
    type: "other",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "MjeiIal1ZR0",
    title: "Mrs. GREEN APPLE「lulu.」Official Music Video",
    type: "full_music_video",
    channelName: "Mrs. GREEN APPLE",
    officialStatus: "official",
    embeddable: true
  }],
  "182255:ED:1": [{
    youtubeVideoId: "FY4Bx2qtkRM",
    title: "『葬送のフリーレン』第2期ノンクレジットエンディング映像／EDテーマ：「The Story of Us」milet",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "vQ8cH94ty3Y",
    title: "milet「The Story of Us」×『葬送のフリーレン』第2期 SPECIAL MUSIC VIDEO (MV)",
    type: "other",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "_1NbGbYG4qg",
    title: "milet「The Story of Us」MUSIC VIDEO (TVアニメ『葬送のフリーレン』第2期エンディングテーマ)",
    type: "full_music_video",
    channelName: "milet Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "182255:ED:2": [{
    youtubeVideoId: "R5cBm08p_jE",
    title: "『葬送のフリーレン』第2期最終第38話 特殊EDノンクレジット版／特別EDテーマ：「Trace」milet",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "182587:OP:1": [{
    youtubeVideoId: "QgIQbeRzkkc",
    title: "【推しの子】第3期ノンクレジットオープニング｜ちゃんみな「TEST ME」",
    type: "creditless_op",
    channelName: "Anime 【OSHI NO KO】 Official Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "hQ4-H-nNNz4",
    title: "ちゃんみな - TEST ME (Official Music Video)",
    type: "full_music_video",
    channelName: "ちゃんみな [CHANMINA]",
    officialStatus: "official",
    embeddable: true
  }],
  "182587:ED:1": [{
    youtubeVideoId: "ZWvFR00t-NE",
    title: "【推しの子】第3期ノンクレジットエンディング｜なとり「セレナーデ」",
    type: "creditless_ed",
    channelName: "Anime 【OSHI NO KO】 Official Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "gNg2Qw5R-Q4",
    title: "なとり - セレナーデ",
    type: "full_music_video",
    channelName: "なとり / natori",
    officialStatus: "official",
    embeddable: true
  }],
  "204698:ED:1": [{
    youtubeVideoId: "21RP0XW0nD4",
    title: "【TVアニメ『ゲルぴよ』】2026年1月21日(水) 21:54〜 TOKYO MX1にて放送スタートピヨ！",
    type: "other",
    channelName: "TOKYO MX",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "tVdQqZTsNOY",
    title: "冨岡 愛 - delulu (Music Video)",
    type: "full_music_video",
    channelName: "Tomioka Ai",
    officialStatus: "official",
    embeddable: true
  }],
  "205772:ED:1": [{
    youtubeVideoId: "wM3E9LXHmu0",
    title: "TVアニメ「キャンディーカリエス」主題歌入りメインPV｜4/15(水)23時56分からTBS「よるのブランチ」内にて放送開始！",
    type: "other",
    channelName: "Candy Caries",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "PBIG3mjkLfU",
    title: "IS:SUE (イッシュ) 'Telepathy'",
    type: "full_music_video",
    channelName: "IS:SUE",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "_xbVORxvC5M",
    title: "IS:SUE (イッシュ) 'Telepathy' Animation Music Video",
    type: "other",
    channelName: "IS:SUE",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Ql5mn3Uy_oM",
    title: "CANDY CARIES 蛀在糖糖裡 第01話【小心瘋狂牙醫】| Muse木棉花 新番 動畫 線上睇",
    type: "other",
    channelName: "Muse木棉花-HK",
    officialStatus: "licensed",
    embeddable: true
  }],
  "206950:OP:1": [{
    youtubeVideoId: "r42sa3uFJMk",
    title: "【うた】こんにちワールド★TVアニメ「クマーバ」シーズン3ノンクレジットOPムービー",
    type: "creditless_op",
    channelName: "クマーバチャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "QYuEX3Q-Tgw",
    title: "【うた】こんにちワールド★テレビアニメ「クマーバ」主題歌フルMV",
    type: "full_music_video",
    channelName: "クマーバチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "212308:ED:1": [{
    youtubeVideoId: "CkIJQ9chwpA",
    title: "『パンの赤ちゃん』第1話「ごめんね」",
    type: "other",
    channelName: "パンの赤ちゃん【公式】 / BABIES OF BREAD",
    officialStatus: "official",
    embeddable: true
  }],
  "198411:ED:1": [{
    youtubeVideoId: "duNgBS-ytF4",
    title: "アニメ「ねずみくんのチョッキ」ノンクレジットED",
    type: "creditless_ed",
    channelName: "ポプラ社",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "UcqQ8xO468s",
    title: "グッドラック！マイフレンド feat.ムロツヨシ & さかなクン / TOKYO SKA PARADISE ORCHESTRA",
    type: "full_music_video",
    channelName: "TOKYO SKA PARADISE ORCHESTRA OFFICIAL",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "K8l-wjqbt0Q",
    title: "グッドラック！マイフレンド feat.ムロツヨシ & さかなクン [ダンスビデオ] / TOKYO SKA PARADISE ORCHESTRA",
    type: "other",
    channelName: "TOKYO SKA PARADISE ORCHESTRA OFFICIAL",
    officialStatus: "official",
    embeddable: true
  }],
  "204269:ED:1": [{
    youtubeVideoId: "qsVhOeicRR4",
    title: "アニメ『おでかけ子ザメ』シーズン2 ノンクレジットED映像",
    type: "creditless_ed",
    channelName: "アニメ『おでかけ子ザメ』チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "202386:ED:1": [{
    youtubeVideoId: "42sALQ9hzKI",
    title: "『小3アシベ QQゴマちゃん』歌詞付きのノンクレジットエンディング映像｜Hey! Say! JUMP「CUE CUE CUTE」",
    type: "creditless_ed",
    channelName: "アニメ小3アシベQQゴマちゃん公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Ljs6_vRkYVg",
    title: "Hey! Say! JUMP - CUE CUE CUTE [Official Music Video]",
    type: "full_music_video",
    channelName: "Hey! Say! JUMP",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ezbMU3U5omI",
    title: "「CUE CUE CUTE」×「小３アシベ QQゴマちゃん」Special Collaboration Video",
    type: "other",
    channelName: "Hey! Say! JUMP",
    officialStatus: "official",
    embeddable: true
  }],
  "181867:OP:1": [{
    youtubeVideoId: "RMX-mfwzOaA",
    title: "【番組オープニング映像】『忍ばない！クリプトニンジャ咲耶』【10月3日（火）放送スタート！】",
    type: "tv_size",
    channelName: "ファンワークス",
    officialStatus: "official",
    embeddable: true
  }],
  "199486:OP:1": [{
    youtubeVideoId: "_f_tbeoXuH4",
    title: "ゴロ助(CV：逢来りん)「萌やせ！ネコ魂」(Full ver.)MV/ネコこのゴロ～天下統一編～",
    type: "full_music_video",
    channelName: "エクサインターナショナル",
    officialStatus: "licensed",
    embeddable: true
  }],
  "159483:OP:1": [{
    youtubeVideoId: "ZUcsckCrr7U",
    title: "TVアニメ「Turkey!」ノンクレジットOP｜長野県一刻館高校ボウリング部『ヒャクニチソウ』",
    type: "creditless_op",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "159483:OP:2": [{
    youtubeVideoId: "-V4zQpTOVJw",
    title: "TVアニメ「Turkey!」ノンクレジットOP｜戸倉家の姫たち『ヒャクニチソウ』",
    type: "creditless_op",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "159483:ED:1": [{
    youtubeVideoId: "2F2UrZJHUug",
    title: "TVアニメ「Turkey!」ノンクレジットED｜太陽と踊れ月夜に唄え『もしも』",
    type: "creditless_ed",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "159483:ED:2": [{
    youtubeVideoId: "Q21T1S5SctM",
    title: "【Turkey!】『フラッシュバック』スペシャルPV",
    type: "other",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "159483:ED:3": [{
    youtubeVideoId: "urmtWrN2CXA",
    title: "【Turkey!】『sincerity flower』スペシャルPV",
    type: "other",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "159483:ED:4": [{
    youtubeVideoId: "wkGN3vyNYEQ",
    title: "【Turkey!】『Strike freedom!』スペシャルPV",
    type: "other",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "159483:ED:5": [{
    youtubeVideoId: "UczUQ-B912M",
    title: "【Turkey!】『夏の住処』スペシャルPV",
    type: "other",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:OP:1": [{
    youtubeVideoId: "gr73cn_ny3k",
    title: "【ノンクレジット映像】TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』OPテーマ『Feathered Dreams』Morfonica",
    type: "creditless_op",
    channelName: "ヴァンガードチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:1": [{
    youtubeVideoId: "xj6tnuuMz-E",
    title: "【ノンクレジット映像】TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』EDテーマ『Drive Your Heart』Poppin'Party",
    type: "creditless_ed",
    channelName: "ヴァンガードチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:2": [{
    youtubeVideoId: "VxQQKMGmzcE",
    title: "Roselia『紫炎』（TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』ED映像）",
    type: "tv_size",
    channelName: "BanG Dream Channel☆",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:3": [{
    youtubeVideoId: "RwS6Q2hnIA4",
    title: "【ノンクレジット映像】TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』EDテーマ『残痕字』MyGO!!!!!",
    type: "creditless_ed",
    channelName: "ヴァンガードチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:4": [{
    youtubeVideoId: "1QCacwd8HQE",
    title: "【ノンクレジット映像】TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』EDテーマ『Color of Us』Morfonica",
    type: "creditless_ed",
    channelName: "ヴァンガードチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:5": [{
    youtubeVideoId: "qYtFE_XRFXA",
    title: "【ノンクレジット映像】TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』EDテーマ『スタ〜リング ☆じぶん☆』ハロー、ハッピーワールド！",
    type: "creditless_ed",
    channelName: "ヴァンガードチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:6": [{
    youtubeVideoId: "VADmXjRvxfo",
    title: "【ノンクレジット映像】TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』EDテーマ『スキ×すき×カラフリィ』Pastel＊Palettes",
    type: "creditless_ed",
    channelName: "ヴァンガードチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:7": [{
    youtubeVideoId: "xblcm6pDbJk",
    title: "夢限大みゅーたいぷ『真夜中遊園地』（TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』ED映像）",
    type: "tv_size",
    channelName: "BanG Dream Channel☆",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:8": [{
    youtubeVideoId: "nYHPbzzImlU",
    title: "RAISE A SUILEN『'FIGHT' ADDICT』（TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』ED映像）",
    type: "tv_size",
    channelName: "BanG Dream Channel☆",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:9": [{
    youtubeVideoId: "wIgHxTWqeQg",
    title: "Afterglow『Part of the Life』（TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』ED映像）",
    type: "tv_size",
    channelName: "BanG Dream Channel☆",
    officialStatus: "official",
    embeddable: true
  }],
  "191994:ED:10": [{
    youtubeVideoId: "VgO1a_9h8Z8",
    title: "Ave Mujica『‘S/’ The Way』（TVアニメ『カードファイト!! ヴァンガード Divinez デラックス決勝編』ED映像）",
    type: "tv_size",
    channelName: "BanG Dream Channel☆",
    officialStatus: "official",
    embeddable: true
  }],
  "169420:OP:1": [{
    youtubeVideoId: "VWbhpovWyE8",
    title: "TVアニメ「渡くんの××が崩壊寸前」ノンテロップOP映像／『ユイカ』",
    type: "creditless_op",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "jJU6BcFYELw",
    title: "ゆうれいになりたい / 『ユイカ』【MV】",
    type: "full_music_video",
    channelName: "『ユイカ』",
    officialStatus: "official",
    embeddable: true
  }],
  "169420:OP:2": [{
    youtubeVideoId: "spkbC8mqdWk",
    title: "TVアニメ「渡くんの××が崩壊寸前」第2クールノンテロップOP映像／shallm",
    type: "creditless_op",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Q7ECS0QU6s8",
    title: "【shallm】ふたりぶん (Music Video)",
    type: "full_music_video",
    channelName: "shallm",
    officialStatus: "official",
    embeddable: true
  }],
  "169420:ED:1": [{
    youtubeVideoId: "58BggoIdOdA",
    title: "TVアニメ「渡くんの××が崩壊寸前」ノンテロップED映像／PEDRO",
    type: "creditless_ed",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "fv0SRNXpMBQ",
    title: "TVアニメ「渡くんの××が崩壊寸前」EDテーマ「愛愛愛愛愛」アニメMV",
    type: "full_music_video",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }],
  "169420:ED:2": [{
    youtubeVideoId: "LXE81S0RAkE",
    title: "TVアニメ「渡くんの××が崩壊寸前」第2クールノンテロップED映像／平手友梨奈",
    type: "creditless_ed",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "yU1G7roiczk",
    title: "平手友梨奈『失敗しないメンヘラの育て方』MUSIC VIDEO",
    type: "full_music_video",
    channelName: "平手友梨奈",
    officialStatus: "official",
    embeddable: true
  }],
  "188653:ED:1": [{
    youtubeVideoId: "36fLHF_4pmw",
    title: "ぷにぷにぷにるんず フルマックスバージョン",
    type: "other",
    channelName: "ななひら / Nanahira",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "6ygzjl8U2vI",
    title: "あいるんとコラボ！ぷにぷにぷにるんず ぷにックスバージョン",
    type: "other",
    channelName: "クマーバチャンネル",
    officialStatus: "licensed",
    embeddable: true
  }],
  "173335:OP:1": [{
    youtubeVideoId: "xBQePsKtiDE",
    title: "TVアニメ『神椿市建設中。』ノンクレジットOP映像｜V.W.P「歌姫」",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "yMM8hrAnbTc",
    title: "【Original MV】歌姫/ V.W.P #25【神椿市建設中。】",
    type: "full_music_video",
    channelName: "V.W.P -Virtual Witch Phenomenon-",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:1": [{
    youtubeVideoId: "m9UFr5RyZeE",
    title: "【Original MV】追憶/ V.W.P #24【神椿市建設中。】",
    type: "full_music_video",
    channelName: "V.W.P -Virtual Witch Phenomenon-",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:2": [{
    youtubeVideoId: "2ErDR6ku6UY",
    title: "ヰ世界情緒 #59「BREATHE」【Official Music Video】",
    type: "full_music_video",
    channelName: "ヰ世界情緒 -Isekaijoucho-",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:3": [{
    youtubeVideoId: "LYnF2X_mnBI",
    title: "理芽 - 閃光だった / RIM - INSIGHT｜from 神椿",
    type: "full_music_video",
    channelName: "RIM",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:4": [{
    youtubeVideoId: "pn-4lkMEjUQ",
    title: "春猿火 #59「距離。」【Official Music Video】",
    type: "full_music_video",
    channelName: "春猿火 / Harusaruhi",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:5": [{
    youtubeVideoId: "Dqey9ZXH5Mk",
    title: "No.043 幸祜 -KOKO- 「シャングリラ」【Official Music Video】",
    type: "full_music_video",
    channelName: "幸祜 - KOKO -",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:6": [{
    youtubeVideoId: "VMkIQ3gD494",
    title: "花譜 #152 「ひとえに壊れて」【オリジナルMV】",
    type: "full_music_video",
    channelName: "KAF",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:7": [{
    youtubeVideoId: "wz696q7pdeI",
    title: "閃光だった (Rearranged Ver.) - 理芽×幸祜 / RIM & KOKO｜from 神椿",
    type: "full_music_video",
    channelName: "RIM",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:8": [{
    youtubeVideoId: "2QCSQPC829g",
    title: "ヰ世界情緒 × 春猿火 #60「BREATHE(Rearranged ver.)」【Official Music Video】",
    type: "full_music_video",
    channelName: "ヰ世界情緒 -Isekaijoucho-",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:9": [{
    youtubeVideoId: "RVcJUSYS6_8",
    title: "【Original MV】欲望/ V.W.P #26【神椿市建設中。】",
    type: "full_music_video",
    channelName: "V.W.P -Virtual Witch Phenomenon-",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:10": [{
    youtubeVideoId: "zWyXgjQJfFU",
    title: "【Original MV】電脳 sinka ver / V.W.P #27【神椿市建設中。】",
    type: "full_music_video",
    channelName: "V.W.P -Virtual Witch Phenomenon-",
    officialStatus: "official",
    embeddable: true
  }],
  "173335:ED:11": [{
    youtubeVideoId: "ofTllighKyE",
    title: "【Original MV】魔女(真) sinka ver / V.W.P #28【神椿市建設中。】",
    type: "full_music_video",
    channelName: "V.W.P -Virtual Witch Phenomenon-",
    officialStatus: "official",
    embeddable: true
  }],
  "171046:OP:1": [{
    youtubeVideoId: "T2dF1HIVEZs",
    title: "アニメ「青春ブタ野郎はサンタクロースの夢を見ない」ノンクレジットオープニング映像 | Conton Candy「スノウドロップ」",
    type: "creditless_op",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "4cBCgc5Gb88",
    title: "Conton Candy - スノウドロップ / Snow Drop [Official Video]｜アニメ「青春ブタ野郎はサンタクロースの夢を見ない」オープニングテーマ",
    type: "full_music_video",
    channelName: "Conton Candy",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "vrW5WU_rcXc",
    title: "Conton Candy - スノウドロップ / Snow Drop [青春ブタ野郎はサンタクロースの夢を見ない Collaboration Video]",
    type: "other",
    channelName: "Conton Candy",
    officialStatus: "official",
    embeddable: true
  }],
  "171046:ED:1": [{
    youtubeVideoId: "JZX93La1KwM",
    title: "アニメ「青春ブタ野郎はサンタクロースの夢を見ない」ノンクレジットエンディング映像 |「水平線は僕の古傷」広川卯月",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "171046:ED:2": [{
    youtubeVideoId: "C7JnK625UnY",
    title: "アニメ「青春ブタ野郎はサンタクロースの夢を見ない」ノンクレジットエンディング映像 |「水平線は僕の古傷」赤城郁実",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "171046:ED:3": [{
    youtubeVideoId: "KB4wQXFBdpg",
    title: "アニメ「青春ブタ野郎はサンタクロースの夢を見ない」ノンクレジットエンディング映像 |「水平線は僕の古傷」姫路紗良",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "171046:ED:4": [{
    youtubeVideoId: "eguA2RhRU9s",
    title: "The Horizon Is My Scar Toko Kirishima Short Version",
    type: "official_audio",
    channelName: "Touko Kirishima - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "171046:ED:5": [{
    youtubeVideoId: "2FFAGSH5mYE",
    title: "アニメ「青春ブタ野郎はサンタクロースの夢を見ない」ノンクレジットエンディング映像 |「水平線は僕の古傷」岩見沢寧々",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "171046:ED:6": [{
    youtubeVideoId: "d3PyUcXxG6k",
    title: "suiheisen ha boku no hurukizu",
    type: "official_audio",
    channelName: "Uzuki Hirokawa(CV:Sora Amamiya) - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "188138:OP:1": [{
    youtubeVideoId: "3QGgv52xJiI",
    title: "『美男高校地球防衛部ハイカラ！』OP&ED発売中CM",
    type: "other",
    channelName: "美男高校地球防衛部",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "L5AiuCQE-BY",
    title: "『美男高校地球防衛部ハイカラ！』PV",
    type: "other",
    channelName: "美男高校地球防衛部",
    officialStatus: "official",
    embeddable: true
  }],
  "188138:ED:1": [{
    youtubeVideoId: "3QGgv52xJiI",
    title: "『美男高校地球防衛部ハイカラ！』OP&ED発売中CM",
    type: "other",
    channelName: "美男高校地球防衛部",
    officialStatus: "official",
    embeddable: true
  }],
  "155838:OP:1": [{
    youtubeVideoId: "_SpiB2tqgcg",
    title: "TVアニメ『強くてニューサーガ』ノンクレジットオープニングテーマ｜4s4ki「演者」",
    type: "creditless_op",
    channelName: "アルファポリス公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "oZUzDN5QIok",
    title: "4s4ki - 演者 (Official Music Video)",
    type: "full_music_video",
    channelName: "4s4ki",
    officialStatus: "official",
    embeddable: true
  }],
  "155838:ED:1": [{
    youtubeVideoId: "465x4w84mUc",
    title: "TVアニメ『強くてニューサーガ』ノンクレジットエンディングテーマ｜甲田まひる「her」",
    type: "creditless_ed",
    channelName: "アルファポリス公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "M7Rb8X38YxY",
    title: "甲田まひる (Mahiru Coda) - her (Official Music Video) 【アニメ『#強くてニューサーガ』ED】",
    type: "full_music_video",
    channelName: "甲田まひる（Mahiru Coda）",
    officialStatus: "official",
    embeddable: true
  }],
  "178869:OP:1": [{
    youtubeVideoId: "Y9X49sAp-M8",
    title: "TVアニメ「クレバテス-魔獣の王と赤子と屍の勇者-」ノンクレジットOP",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "0uwIeG0ozOk",
    title: "前島麻由「Ruler」Music Video（TVアニメ「クレバテス-魔獣の王と赤子と屍の勇者-」オープニング主題歌）",
    type: "full_music_video",
    channelName: "前島麻由 YouTube Official Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "178869:ED:1": [{
    youtubeVideoId: "d4rp4rBPQks",
    title: "TVアニメ「クレバテス-魔獣の王と赤子と屍の勇者-」ノンクレジットED",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "OdCVg3iGEFg",
    title: "Ellie Goulding - Destiny (Official Video)",
    type: "full_music_video",
    channelName: "EllieGouldingVEVO",
    officialStatus: "official",
    embeddable: true
  }],
  "187387:OP:1": [{
    youtubeVideoId: "-Bdqz9qWD2Q",
    title: "『陰陽廻天 Re:バース』ノンクレジットオープニング｜Who-ya Extended「CRY OUT CRY OVER」",
    type: "creditless_op",
    channelName: "【フジテレビ】アニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "vchCprjoiHY",
    title: "Who-ya Extended 「CRY OUT CRY OVER」 MUSIC VIDEO (TVアニメ『陰陽廻天 Re:バース』オープニングテーマ)",
    type: "full_music_video",
    channelName: "Who-ya Extended official YouTube channel",
    officialStatus: "official",
    embeddable: true
  }],
  "187387:ED:1": [{
    youtubeVideoId: "nx8_hvbyB0A",
    title: "『陰陽廻天 Re:バース』ノンクレジットエンディング｜9Lana「TURN OVER」",
    type: "creditless_ed",
    channelName: "【フジテレビ】アニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "oYr-W71m2Is",
    title: "【MV】「TURN OVER」/ 9Lana",
    type: "full_music_video",
    channelName: "9Lana",
    officialStatus: "official",
    embeddable: true
  }],
  "169440:OP:1": [{
    youtubeVideoId: "2wSAIf9xb3w",
    title: "「自動販売機に生まれ変わった俺は迷宮を彷徨う2nd season」オープニング　BRADIO「未来サイダー」",
    type: "tv_size",
    channelName: "アニメ「自動販売機に生まれ変わった俺は迷宮を彷徨う」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "nYrbevdC-NQ",
    title: "BRADIO - 未来サイダー【TVアニメ「自動販売機に生まれ変わった俺は迷宮を彷徨う 2nd season」OP】 OFFICIAL MUSIC VIDEO",
    type: "full_music_video",
    channelName: "BRADIO",
    officialStatus: "official",
    embeddable: true
  }],
  "169440:ED:1": [{
    youtubeVideoId: "lS4-iBLiQL8",
    title: "「自動販売機に生まれ変わった俺は迷宮を彷徨う2nd season」ノンクレジットエンディング　相羽あいな「僕だけの地平線」",
    type: "creditless_ed",
    channelName: "アニメ「自動販売機に生まれ変わった俺は迷宮を彷徨う」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "yyB6FxfCtW8",
    title: "僕だけの地平線",
    type: "official_audio",
    channelName: "Aina Aiba - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "185505:OP:1": [{
    youtubeVideoId: "xmNorNQsp4A",
    title: "TVアニメ「ネクロノミ子のコズミックホラーショウ」ノンクレジットオープニング映像｜緑仙「確証論」",
    type: "creditless_op",
    channelName: "Cygamesアニメすきすき",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ObGB9fZHtu0",
    title: "【MV】確証論 / 緑仙　TVアニメ「ネクロノミ子のコズミックホラーショウ」オープニング主題歌",
    type: "full_music_video",
    channelName: "緑仙 / Ryushen",
    officialStatus: "official",
    embeddable: true
  }],
  "185505:ED:1": [{
    youtubeVideoId: "6VgI1QcAE0Q",
    title: "TVアニメ「ネクロノミ子のコズミックホラーショウ」ノンクレジットエンディング映像｜Vell「PANDORA feat.のあ(from カラフルピーチ)」",
    type: "creditless_ed",
    channelName: "Cygamesアニメすきすき",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "dy9S_OIp-wQ",
    title: "Vell - PANDORA feat.のあ (from カラフルピーチ)　TVアニメ「ネクロノミ子のコズミックホラーショウ」エンディング主題歌",
    type: "full_music_video",
    channelName: "Vell",
    officialStatus: "official",
    embeddable: true
  }],
  "186052:OP:1": [{
    youtubeVideoId: "wxdHpj7r6Rc",
    title: "TVアニメ『水属性の魔法使い』ノンクレジットオープニング",
    type: "creditless_op",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "kJ5p2LTw3Cc",
    title: "Blue Motion",
    type: "official_audio",
    channelName: "名誉伝説",
    officialStatus: "official",
    embeddable: true
  }],
  "186052:ED:1": [{
    youtubeVideoId: "C8kHWlQDTx0",
    title: "TVアニメ『水属性の魔法使い』ノンクレジットエンディング",
    type: "creditless_ed",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "sOskREY8Ihw",
    title: "たゆたうままに／みさき【Live Performance Video】",
    type: "other",
    channelName: "みさき",
    officialStatus: "official",
    embeddable: true
  }],
  "178675:OP:1": [{
    youtubeVideoId: "HbocaCxe5gU",
    title: "【ノンクレジットOP】TVアニメ「ばっどがーる」| 天狼群「すーぱーびっぐらぶ！」",
    type: "creditless_op",
    channelName: "KING AMUSEMENT CREATIVE official channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "n9cTW8IKD0w",
    title: "すーぱーびっぐらぶ！",
    type: "official_audio",
    channelName: "TENROGUN - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "178675:ED:1": [{
    youtubeVideoId: "lGSdTT5XW_s",
    title: "【ノンクレジットED】TVアニメ「ばっどがーる」| 天狼群「BAD SURPRISE」",
    type: "creditless_ed",
    channelName: "KING AMUSEMENT CREATIVE official channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "T_q7ulTOxFw",
    title: "BAD SURPRISE",
    type: "official_audio",
    channelName: "TENROGUN - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "178675:ED:2": [{
    youtubeVideoId: "IgqIpKWD0wU",
    title: "【スペシャルED】TVアニメ「ばっどがーる」| 瑠璃葉るら(CV.花井美春)「はーと掻き回してアゲル♡」",
    type: "other",
    channelName: "KING AMUSEMENT CREATIVE official channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "sAXoDCvRyhA",
    title: "はーと掻き回してアゲル♡",
    type: "official_audio",
    channelName: "Rura Ruriha(CV.Miharu Hanai) - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "178433:OP:1": [{
    youtubeVideoId: "HsgEZJbp58c",
    title: "TVアニメ「異世界黙示録マイノグーラ～破滅の文明で始める世界征服～」ノンクレジットOP | 佐々木李子「Majestic Catastrophe」",
    type: "creditless_op",
    channelName: "ハピネット【アニメ公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "IlriEKE8iBU",
    title: "佐々木李子「Majestic Catastrophe 」(TVアニメ『異世界黙示録マイノグーラ～破滅の文明で始める世界征服～』OP主題歌)",
    type: "full_music_video",
    channelName: "佐々木李子",
    officialStatus: "official",
    embeddable: true
  }],
  "178433:ED:1": [{
    youtubeVideoId: "JfgPB5nziX8",
    title: "TVアニメ「異世界黙示録マイノグーラ～破滅の文明で始める世界征服～」ノンクレジットED | 寺島拓篤「more than W」",
    type: "creditless_ed",
    channelName: "ハピネット【アニメ公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "6ImTrobSMFk",
    title: "寺島拓篤 / 12th Single \" more than W \" Animation Lyric Video (TVアニメ『異世界黙示録マイノグーラ～破滅の文明で始める世界征服～』ED主題歌)",
    type: "other",
    channelName: "Takuma Terashima Official Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "189326:OP:1": [{
    youtubeVideoId: "5cevONCM6p4",
    title: "TVアニメ『地縛少年花子くん２』後編ノンクレジットオープニング",
    type: "creditless_op",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ALMhSqje8UU",
    title: "オーイシマサヨシ - かごめかごめ [Official Video]",
    type: "full_music_video",
    channelName: "Masayoshi Oishi",
    officialStatus: "official",
    embeddable: true
  }],
  "189326:ED:1": [{
    youtubeVideoId: "zIPdM4fGk70",
    title: "TVアニメ『地縛少年花子くん２』後編ノンクレジットエンディング",
    type: "creditless_ed",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "I37_89gai64",
    title: "moment",
    type: "official_audio",
    channelName: "鬼頭明里 Official Artist Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "170113:OP:1": [{
    youtubeVideoId: "rbruZu_xiDA",
    title: "TVアニメ『公女殿下の家庭教師』ノンクレジットOPムービー｜前島亜美「Wish for you」",
    type: "creditless_op",
    channelName: "GREE Entertainment ANIME & GAME【公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "sJ3zUFbHBZc",
    title: "前島亜美「Wish for you」-Music Video-",
    type: "full_music_video",
    channelName: "前島亜美",
    officialStatus: "official",
    embeddable: true
  }],
  "170113:ED:1": [{
    youtubeVideoId: "QMTfG-7RBcI",
    title: "TVアニメ『公女殿下の家庭教師』ノンクレジットEDムービー｜岡咲美保「少女のすゝめ」",
    type: "creditless_ed",
    channelName: "GREE Entertainment ANIME & GAME【公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "3QFdvtAO8I8",
    title: "岡咲美保「少女のすゝめ」MUSIC VIDEO【公女殿下の家庭教師 EDテーマ】",
    type: "full_music_video",
    channelName: "Miho Okasaki",
    officialStatus: "official",
    embeddable: true
  }],
  "180460:OP:1": [{
    youtubeVideoId: "QEHlMHce05M",
    title: "TVアニメ『まったく最近の探偵ときたら』ノンクレジットオープニング映像｜岡崎体育「Suffer」",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "n8Kqnurces4",
    title: "岡崎体育「Suffer」Music Video",
    type: "full_music_video",
    channelName: "okazakitaiiku Official Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "180460:ED:1": [{
    youtubeVideoId: "63MdWK5-Ogk",
    title: "TVアニメ『まったく最近の探偵ときたら』ノンクレジットエンディング映像｜「GORI☆GORI Feez e-Girl!!」真白(CV:花澤香菜)VS愉快なおじさんたち(CV:杉田智和)",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "3GK-Wea79pQ",
    title: "GORI☆GORI Feez e-Girl!!",
    type: "official_audio",
    channelName: "真白（CV：花澤香菜）VS 愉快なおじさんたち（CV：杉田智和） - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "180460:ED:2": [{
    youtubeVideoId: "h5N8L66avCM",
    title: "「帰れソレントへ」歌：真白（CV.花澤香菜）｜TVアニメ『まったく最近の探偵ときたら』第11話特殊エンディング楽曲【ノンクレジット映像】",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }],
  "189069:OP:1": [{
    youtubeVideoId: "QbfPKfEuqCY",
    title: "第3話「チハルとマキナ」│アニメ『銀河特急 ミルキー☆サブウェイ』本編",
    type: "other",
    channelName: "MILKY☆SUBWAY THE GALACTIC LIMITED EXPRESS",
    officialStatus: "official",
    embeddable: true
  }],
  "189069:OP:2": [{
    youtubeVideoId: "6vK8A3npElM",
    title: "MindaRyn「Altair and Vega」PV│アニメ『銀河特急 ミルキー☆サブウェイ』",
    type: "other",
    channelName: "MILKY☆SUBWAY THE GALACTIC LIMITED EXPRESS",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "9y7LyfrbDDE",
    title: "Altair and Vega",
    type: "official_audio",
    channelName: "MindaRyn _",
    officialStatus: "official",
    embeddable: true
  }],
  "185544:OP:1": [{
    youtubeVideoId: "fu8Z_vVYuNg",
    title: "TVアニメ「追放者食堂へようこそ！」ノンクレジットOP映像｜Dannie May「ユニーク」",
    type: "creditless_op",
    channelName: "TVアニメ「追放者食堂へようこそ!」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "q44nWv5L38M",
    title: "Dannie May「ユニーク」（MUSIC VIDEO) 【TVアニメ「追放者食堂へようこそ！」OPテーマ】",
    type: "full_music_video",
    channelName: "Dannie May",
    officialStatus: "official",
    embeddable: true
  }],
  "185544:ED:1": [{
    youtubeVideoId: "idskIUheaa4",
    title: "TVアニメ「追放者食堂へようこそ！」ノンクレジットED映像｜超ときめき♡宣伝部「まごころ My Heart」",
    type: "creditless_ed",
    channelName: "TVアニメ「追放者食堂へようこそ!」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "qSR0aW1YdcU",
    title: "超ときめき♡宣伝部 / 「まごころ My Heart」Live at 大阪城ホール",
    type: "other",
    channelName: "Cho Tokimeki♡Sendenbu Official（超ときめき♡宣伝部）",
    officialStatus: "official",
    embeddable: true
  }],
  "186561:OP:1": [{
    youtubeVideoId: "KwokenvxcbM",
    title: "TVアニメ「気絶勇者と暗殺姫」ノンクレジットOP：吉乃「天伝バラバラ」",
    type: "creditless_op",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "q998CIH1QnM",
    title: "【Official MV】天伝バラバラ/吉乃",
    type: "full_music_video",
    channelName: "吉乃",
    officialStatus: "official",
    embeddable: true
  }],
  "186561:ED:1": [{
    youtubeVideoId: "KnU-i-_fe58",
    title: "TVアニメ「気絶勇者と暗殺姫」ノンクレジットED：シエル（CV:佐伯伊織）アネモネ（CV:上田 瞳）ゴア（CV:白石晴香）「スキマジカン」",
    type: "creditless_ed",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "21tJh5oL8uc",
    title: "TVアニメ「気絶勇者と暗殺姫」EDテーマ 『スキマジカン』フルサイズ（歌い分けver.）",
    type: "official_audio",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "2VNqtpMHqGc",
    title: "TVアニメ「気絶勇者と暗殺姫」EDテーマ 『スキマジカン』視聴動画",
    type: "other",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "180794:OP:1": [{
    youtubeVideoId: "BLX7qZwt--w",
    title: "TVアニメ『ゲーセン少女と異文化交流』ノンクレジットOP｜「ふたりのスタートボタン」リリー・ベイカー(CV：天城サリー)、草壁葵衣(CV：小山内怜央)",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "YvgqX4aYeYM",
    title: "ふたりのスタートボタン",
    type: "official_audio",
    channelName: "リリー・ベイカー（CV：天城サリー）、草壁葵衣（CV：小山内怜央） - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "180794:ED:1": [{
    youtubeVideoId: "CldOd2aIo9s",
    title: "TVアニメ『ゲーセン少女と異文化交流』ノンクレジットED｜「Amusing Flavor」リリー・ベイカー(CV：天城サリー)",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "-axB2oLf-rk",
    title: "Amusing Flavor",
    type: "official_audio",
    channelName: "リリー・ベイカー（CV：天城サリー） - Topic",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "NWlYoswlS5E",
    title: "TVアニメ『ゲーセン少女と異文化交流』EDテーマ『Amusing Flavor』ショートPV",
    type: "other",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }],
  "196229:OP:1": [{
    youtubeVideoId: "pwMtFNWtKWw",
    title: "【ジョブレイバー】トミカヒーローズ ジョブレイバー 特装合体ロボ しゅだいかどうが「特装合体！ジョブレイバー」【みんなで歌おう！】",
    type: "other",
    channelName: "タカラトミー",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "c-W2qQdKtV8",
    title: "【ジョブレイバー】トミカヒーローズ ジョブレイバー 特装合体ロボ うたってみよう！しゅだいかどうが「特装合体！ジョブレイバー」【カラオケ動画】",
    type: "other",
    channelName: "タカラトミー",
    officialStatus: "official",
    embeddable: true
  }],
  "179885:OP:1": [{
    youtubeVideoId: "K40kD2uUxsw",
    title: "TVアニメ「勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～」ノンクレジットオープニング｜梶原岳人「純情であれ。」",
    type: "creditless_op",
    channelName: "ハピネット【アニメ公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "vfrLFCX9rhQ",
    title: "純情であれ。",
    type: "official_audio",
    channelName: "Gakuto Kajiwara",
    officialStatus: "official",
    embeddable: true
  }],
  "179885:ED:1": [{
    youtubeVideoId: "-9U80m51qWE",
    title: "TVアニメ「勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～」ノンクレジットエンディング｜ChouCho「光射す扉」",
    type: "creditless_ed",
    channelName: "ハピネット【アニメ公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "lucxQJk-KLI",
    title: "[Official MV] ChouCho - 光射す扉(TVアニメ『勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～』ED主題歌 )",
    type: "full_music_video",
    channelName: "ChouCho Official Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Gjo1JxNHrHU",
    title: "[Official Audio] ChouCho - 光射す扉 (TVアニメ『勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～』ED主題歌)",
    type: "official_audio",
    channelName: "ChouCho Official Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "179678:OP:1": [{
    youtubeVideoId: "-_lYCBqyNYo",
    title: "『地獄先生ぬ～べ～』 ノンクレOP映像 / Hell Teacher: Jigoku Sensei Nube Clean OP",
    type: "creditless_op",
    channelName: "It's Anime powered by REMOW",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "bezvNBpQk0E",
    title: "-真天地開闢集団- ジグザグ「P0WER-悪霊退散-」MV",
    type: "full_music_video",
    channelName: "真天地開闢集団ジグザグ",
    officialStatus: "official",
    embeddable: true
  }],
  "179678:ED:1": [{
    youtubeVideoId: "2or2lWw6RXA",
    title: "『地獄先生ぬ～べ～』 ノンクレED映像 / Hell Teacher: Jigoku Sensei Nube Clean ED",
    type: "creditless_ed",
    channelName: "It's Anime powered by REMOW",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "yhnJAI2qPRY",
    title: "Chilli Beans. - ひまわり (Official Music Video)【TVアニメ「地獄先生ぬ～べ～」エンディングテーマ】",
    type: "full_music_video",
    channelName: "Chilli Beans.",
    officialStatus: "official",
    embeddable: true
  }],
  "193883:OP:1": [{
    youtubeVideoId: "ZAP6ravVi8k",
    title: "TVアニメ『ちびゴジラの逆襲』ノンクレジットオープニング映像／2025年7月2日（水）より放送開始！",
    type: "creditless_op",
    channelName: "ちびゴジラ公式チャンネル Chibi Godzilla channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "3ymaUz2ECfQ",
    title: "水曜日のカンパネラ『怪獣島』",
    type: "full_music_video",
    channelName: "水曜日のカンパネラ",
    officialStatus: "official",
    embeddable: true
  }],
  "156395:OP:1": [{
    youtubeVideoId: "sUP7rjlcWkY",
    title: "TVアニメ『ブスに花束を。』ノンクレジットオープニング映像｜TWS「BLOOM (feat. Ayumu Imazu)」",
    type: "creditless_op",
    channelName: "TVアニメ『ブスに花束を。』公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Bc-hWqZxZ6I",
    title: "BLOOM",
    type: "other",
    channelName: "TWS - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "156395:ED:1": [{
    youtubeVideoId: "jEJvz7l-AsI",
    title: "TVアニメ『ブスに花束を。』ノンクレジットエンディング映像｜GLASGOW「スーベニア」",
    type: "creditless_ed",
    channelName: "TVアニメ『ブスに花束を。』公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "NVr3Isl8zk0",
    title: "【MV】GLASGOW / スーベニア（TVアニメ「ブスに花束を。」エンディングテーマ）",
    type: "full_music_video",
    channelName: "GLASGOW",
    officialStatus: "official",
    embeddable: true
  }],
  "177474:OP:1": [{
    youtubeVideoId: "bL7eFBy5Iz8",
    title: "TVアニメ『桃源暗鬼』京都編　ノンクレジットオープニング映像",
    type: "creditless_op",
    channelName: "『桃源暗鬼』プロジェクト公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "xYT7E72vT1s",
    title: "THE ORAL CIGARETTES「OVERNIGHT」Music Video (TVアニメ『桃源暗鬼』OP主題歌）",
    type: "full_music_video",
    channelName: "THE ORAL CIGARETTES",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "POGLi9LRHd4",
    title: "THE ORAL CIGARETTES「OVERNIGHT」Anime Music Video (TVアニメ『桃源暗鬼』OP主題歌）",
    type: "other",
    channelName: "THE ORAL CIGARETTES",
    officialStatus: "official",
    embeddable: true
  }],
  "177474:OP:2": [{
    youtubeVideoId: "yI3PSYmU8ig",
    title: "練馬編ノンクレジットオープニング映像 | 超学生「阿弥陀籤」【#桃源暗鬼 】",
    type: "creditless_op",
    channelName: "『桃源暗鬼』プロジェクト公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "D8GybKU4Wso",
    title: "超学生「阿弥陀籤 - Amidakuji」MV - TVアニメ『桃源暗鬼』Ver. -",
    type: "full_music_video",
    channelName: "Chogakusei Official",
    officialStatus: "official",
    embeddable: true
  }],
  "177474:ED:1": [{
    youtubeVideoId: "UVaJ-BQAQLU",
    title: "TVアニメ『桃源暗鬼』京都編　ノンクレジットエンディング映像",
    type: "creditless_ed",
    channelName: "『桃源暗鬼』プロジェクト公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "3kMIh0_Wkpk",
    title: "BAND-MAID / What is justice? (Official Music Video) TVアニメ「桃源暗鬼」エンディング主題歌",
    type: "full_music_video",
    channelName: "BAND-MAID",
    officialStatus: "official",
    embeddable: true
  }],
  "177474:ED:2": [{
    youtubeVideoId: "WHUpja-jFVk",
    title: "練馬編ノンクレジットエンディング映像 | eill「ACTION」【#桃源暗鬼 】",
    type: "creditless_ed",
    channelName: "『桃源暗鬼』プロジェクト公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Vb81OSHCfw4",
    title: "eill | ACTION (Official Music Video)",
    type: "full_music_video",
    channelName: "eill official",
    officialStatus: "official",
    embeddable: true
  }],
  "185965:OP:1": [{
    youtubeVideoId: "8TkTZeCJc3M",
    title: "TVアニメ『ふたりソロキャンプ』ノンテロップOP｜スカート「灯りは遠く」",
    type: "creditless_op",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }],
  "185965:OP:2": [{
    youtubeVideoId: "YHHAaTqZ0hw",
    title: "HOKUTO - ふたりでいようか (Official Music Video)",
    type: "full_music_video",
    channelName: "HOKUTO",
    officialStatus: "official",
    embeddable: true
  }],
  "185965:ED:1": [{
    youtubeVideoId: "FiprFdhKpq4",
    title: "TVアニメ『ふたりソロキャンプ』ノンテロップED｜オーイシマサヨシ「ふたりキャンプ feat.SPECIAL OTHERS」",
    type: "creditless_ed",
    channelName: "ぽにきゃん-Anime PONY CANYON",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "mGsf9W28gCM",
    title: "Futari Camp",
    type: "other",
    channelName: "Masayoshi Oishi - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "198745:OP:1": [{
    youtubeVideoId: "w6ctiNUEQOk",
    title: "TVアニメ「週刊ラノベアニメ」ノンクレジットOP",
    type: "creditless_op",
    channelName: "ラノベアニメ【公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "glaiG2Q9Ei8",
    title: "吉武千颯 『Hajimariの合図』Music Video",
    type: "full_music_video",
    channelName: "ABC Animation Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "198745:ED:1": [{
    youtubeVideoId: "H1f-zAyxE6w",
    title: "TVアニメ「週刊ラノベアニメ」ノンクレジットED",
    type: "creditless_ed",
    channelName: "ラノベアニメ【公式】",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "pYq8ddtJ9MU",
    title: "七瀬彩夏『群青と未完の彼方』MUSIC VIDEO",
    type: "full_music_video",
    channelName: "ABC Animation Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "194088:ED:1": [{
    youtubeVideoId: "dH_4eKIK4fE",
    title: "ナオト・インティライミ「だぅと」Lyric Video",
    type: "other",
    channelName: "Naoto Inti Raymi Official Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "166215:OP:1": [{
    youtubeVideoId: "OuV9MwBVVzg",
    title: "うたごえはミルフィーユ「思い出話」Music Video",
    type: "full_music_video",
    channelName: "うたごえはミルフィーユ",
    officialStatus: "official",
    embeddable: true
  }],
  "183128:OP:1": [{
    youtubeVideoId: "6SohipajDTE",
    title: "TVアニメ『夢中さ、きみに。』ノンクレジットOP | 須田景凪「ラブル」",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "O2W9VK0KIZc",
    title: "須田景凪 – ラブル / Keina Suda – Rubble (Music Video)",
    type: "full_music_video",
    channelName: "須田景凪 バルーン",
    officialStatus: "official",
    embeddable: true
  }],
  "183128:ED:1": [{
    youtubeVideoId: "X3JEsa-jwX0",
    title: "TVアニメ『夢中さ、きみに。』ノンクレジットED | 山下大輝 × 畠中祐「微炭酸アドレセンス」",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "yh3DiDOPwqo",
    title: "山下大輝 × 畠中祐「微炭酸アドレセンス」Music Video",
    type: "full_music_video",
    channelName: "山下大輝 / Daiki Yamashita Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "198408:ED:1": [{
    youtubeVideoId: "HDkb3oEJgUs",
    title: "【2025年9月5日放送開始！】生物多様性を楽しく学ぶアニメ『地球のラテール』",
    type: "other",
    channelName: "Earth Saverチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "181841:OP:1": [{
    youtubeVideoId: "10eZAXGuVT4",
    title: "TVアニメ『CITY THE ANIMATION』ノンクレジットオープニング主題歌映像／Furui Riho「Hello」",
    type: "creditless_op",
    channelName: "京アニチャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "JxyACq69HgA",
    title: "Furui Riho - Hello (Official Music Video)",
    type: "full_music_video",
    channelName: "Furui Riho",
    officialStatus: "official",
    embeddable: true
  }],
  "181841:ED:1": [{
    youtubeVideoId: "bP9yvQKl02Q",
    title: "TVアニメ『CITY THE ANIMATION』ノンクレジットエンディング主題歌映像／TOMOO「LUCKY」",
    type: "creditless_ed",
    channelName: "京アニチャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "B6W3pvmWmX0",
    title: "TOMOO - LUCKY【OFFICIAL MUSIC VIDEO】",
    type: "full_music_video",
    channelName: "TOMOO",
    officialStatus: "official",
    embeddable: true
  }],
  "175124:OP:1": [{
    youtubeVideoId: "_Ki5aP9DBYw",
    title: "TVアニメ『ニャイト・オブ・ザ・リビングキャット』ノンクレジットOP映像｜THE YELLOW MONKEY「CAT CITY」",
    type: "creditless_op",
    channelName: "ソニー・ピクチャーズ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "L-OuFdRYHl8",
    title: "THE YELLOW MONKEY - CAT CITY(Official Music Video)",
    type: "full_music_video",
    channelName: "THE YELLOW MONKEY",
    officialStatus: "official",
    embeddable: true
  }],
  "175124:ED:1": [{
    youtubeVideoId: "gkWcg8wmu_8",
    title: "TVアニメ『ニャイト・オブ・ザ・リビングキャット』ノンクレジットED映像｜WANIMA「Matatabi」",
    type: "creditless_ed",
    channelName: "ソニー・ピクチャーズ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Uhku33YQNZA",
    title: "WANIMA 「Matatabi」OFFICIAL MUSIC VIDEO - アニメ『ニャイト・オブ・ザ・リビングキャット』EDテーマ",
    type: "full_music_video",
    channelName: "WANIMA",
    officialStatus: "official",
    embeddable: true
  }],
  "179828:OP:1": [{
    youtubeVideoId: "RVOwhB5wEkA",
    title: "TVアニメ『カッコウの許嫁Season2』ノンクレジットOP｜asmi「君がくれたもの」",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "mv_4JVTkog8",
    title: "君がくれたもの - asmi (Official Music Video)",
    type: "full_music_video",
    channelName: "asmi Official Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "179828:ED:1": [{
    youtubeVideoId: "HsfGYPHErTg",
    title: "TVアニメ『カッコウの許嫁Season2』ノンクレジットED｜22/7「あなたでなくちゃ」",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "NkmkyggvPns",
    title: "22/7 15th single『あなたでなくちゃ』music video（アニメ「カッコウの許嫁Season2」EDテーマ）",
    type: "full_music_video",
    channelName: "22/7 OFFICIAL YouTube CHANNEL",
    officialStatus: "official",
    embeddable: true
  }],
  "182309:OP:1": [{
    youtubeVideoId: "kHfGSs6A3xU",
    title: "TVアニメ『ぐらんぶる』Season 2ノンクレジットOP",
    type: "creditless_op",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "eFj2sr4qd4M",
    title: "湘南乃風 feat. 新しい学校のリーダーズ「青春永遠」- 湘南乃風 熱唱甲子園 -",
    type: "other",
    channelName: "湘南乃風",
    officialStatus: "official",
    embeddable: true
  }],
  "182309:ED:1": [{
    youtubeVideoId: "_gLM5qjn5Hk",
    title: "TVアニメ『ぐらんぶる』Season 2ノンクレジットED",
    type: "creditless_ed",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "znI3ld4OJco",
    title: "裸でどつきあい feat. May'n",
    type: "official_audio",
    channelName: "Seamo - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "184591:OP:1": [{
    youtubeVideoId: "rV_lQGGtPt0",
    title: "ナナヲアカリ「ムリムリ進化論」｜TVアニメ『わたしが恋人になれるわけないじゃん、ムリムリ！（※ムリじゃなかった!?）』オープニング映像 #わたなれ",
    type: "creditless_op",
    channelName: "集英社DeNAプロジェクツ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "o4OsvOqHnZM",
    title: "ムリムリ進化論 / ナナヲアカリ",
    type: "full_music_video",
    channelName: "ナナヲアカリ OFFICIAL",
    officialStatus: "official",
    embeddable: true
  }],
  "184591:ED:1": [{
    youtubeVideoId: "iVAVffggNlw",
    title: "#わたなれ ノンクレジットエンディング映像｜EDテーマ▶フィロソフィーのダンス「迷っちゃうわ」",
    type: "creditless_ed",
    channelName: "集英社DeNAプロジェクツ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ueF7bFkHiAQ",
    title: "フィロソフィーのダンス「迷っちゃうわ」MV",
    type: "full_music_video",
    channelName: "フィロソフィーのダンス Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "173780:OP:1": [{
    youtubeVideoId: "SJxVzZy_hF8",
    title: "TVアニメ『盾の勇者の成り上がり Season 4』ノンクレジットOP｜MADKID『Resolution』",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "MJkJ3NVQgO4",
    title: "MADKID / Resolution [Music Video] ('The Rising of the Shield Hero' Season 4 Opening Theme)",
    type: "full_music_video",
    channelName: "MADKID OFFICIAL",
    officialStatus: "official",
    embeddable: true
  }],
  "173780:ED:1": [{
    youtubeVideoId: "SHT6PLktB6o",
    title: "TVアニメ『盾の勇者の成り上がり Season 4』ノンクレジットED｜藤川千愛『永遠に一回の』",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "u6gAScS2oiU",
    title: "永遠に一回の／藤川千愛　TVアニメ『盾の勇者の成り上がり Season 4』EDテーマ",
    type: "full_music_video",
    channelName: "藤川千愛",
    officialStatus: "official",
    embeddable: true
  }],
  "177880:OP:1": [{
    youtubeVideoId: "w_qoJn4-DUQ",
    title: "TVアニメ「おそ松さん」第4期ノンクレジットOP／「おそ松さんのボンバシェー！」DA PUMP",
    type: "creditless_op",
    channelName: "TVアニメ「おそ松さん」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "xyUNHFok2C0",
    title: "【MV】おそ松さんのボンバシェー！ / DA PUMP【TVアニメ「おそ松さん」第4期 オープニングテーマ】",
    type: "full_music_video",
    channelName: "DA PUMP",
    officialStatus: "official",
    embeddable: true
  }],
  "177880:ED:1": [{
    youtubeVideoId: "Kd7GLhMtAXA",
    title: "TVアニメ「おそ松さん」第4期ノンクレジットED／「バディ」ひとみ from あたらよ＆松野家6兄弟",
    type: "creditless_ed",
    channelName: "TVアニメ「おそ松さん」公式",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "TKIdS2GY-rw",
    title: "バディ",
    type: "official_audio",
    channelName: "Release - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "151799:OP:1": [{
    youtubeVideoId: "4AXQpImawSQ",
    title: "『New PANTY & STOCKING with GARTERBELT』ノンクレジットオープニング映像",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "9tE-PUcb6os",
    title: "【Ver.2】『New PANTY & STOCKING with GARTERBELT』ノンクレジットオープニング映像",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "zCQFqVJiuVg",
    title: "Theme of New PANTY ＆ STOCKING (Long Version) - (Official Audio)",
    type: "official_audio",
    channelName: "Music of New PANTY & STOCKING with GARTERBELT",
    officialStatus: "official",
    embeddable: true
  }],
  "151799:ED:1": [{
    youtubeVideoId: "v1daqPsmVFs",
    title: "『New PANTY ＆ STOCKING with GARTERBELT』ノンクレジットエンディング映像",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }],
  "177887:OP:1": [{
    youtubeVideoId: "rUUIjlT_7Dg",
    title: "Leviathan OP | Paths Combine by Joe Hisaishi | Netflix Anime",
    type: "creditless_op",
    channelName: "Netflix Anime",
    officialStatus: "official",
    embeddable: true
  }],
  "177887:ED:1": [{
    youtubeVideoId: "OIUgq1qA1n4",
    title: "Leviathan ED | The Sky Ahead by Joe Hisaishi feat. Diana Garnet | Netflix Anime",
    type: "creditless_ed",
    channelName: "Netflix Anime",
    officialStatus: "official",
    embeddable: true
  }],
  "178090:OP:1": [{
    youtubeVideoId: "WZ-xST_J04g",
    title: "『転生したら第七王子だったので、気ままに魔術を極めます 第2期』ノンクレジットオープニング映像｜樋口楓「CALLING†」",
    type: "creditless_op",
    channelName: "isekai channel @バンダイナムコフィルムワークス",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "gPBwiuijMQg",
    title: "樋口楓「CALLING†」Music Video【TVアニメ「転生したら第七王子だったので、気ままに魔術を極めます 第2期」OP主題歌】",
    type: "full_music_video",
    channelName: "樋口楓【にじさんじ所属】",
    officialStatus: "official",
    embeddable: true
  }],
  "178090:ED:1": [{
    youtubeVideoId: "LV0EaKjqMAo",
    title: "『転生したら第七王子だったので、気ままに魔術を極めます 第2期』ノンクレジットエンディング映像｜岬なこ「Meteor」",
    type: "creditless_ed",
    channelName: "isekai channel @バンダイナムコフィルムワークス",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ZQTbnRejazA",
    title: "岬なこ「Meteor」 Music Video",
    type: "full_music_video",
    channelName: "岬なこ Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "178886:OP:1": [{
    youtubeVideoId: "FRJkSEKZ0Ss",
    title: "TVアニメ『帝乃三姉妹は案外、チョロい。』オープニング映像｜「君にふさわしい奇跡」日曜日のメゾンデ",
    type: "creditless_op",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "coZT_PK-nxc",
    title: "君にふさわしい奇跡（from「帝乃三姉妹は案外、チョロい。」） / 日曜日のメゾンデ",
    type: "full_music_video",
    channelName: "MAISONdes -メゾン・デ- / 日曜日のメゾンデ",
    officialStatus: "official",
    embeddable: true
  }],
  "178886:ED:1": [{
    youtubeVideoId: "qIeLqPMjk6s",
    title: "TVアニメ『帝乃三姉妹は案外、チョロい。』エンディング映像｜「曖昧グラフィティ」帝乃一輝（CV.天海由梨奈）",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "178886:ED:2": [{
    youtubeVideoId: "FTsXmDzsBMU",
    title: "TVアニメ『帝乃三姉妹は案外、チョロい。』エンディング映像｜「One Road」帝乃二琥（CV.古賀葵）",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "178886:ED:3": [{
    youtubeVideoId: "Jh7AAapWJ-A",
    title: "TVアニメ『帝乃三姉妹は案外、チョロい。』エンディング映像｜「Sunrise Prism」帝乃三和（CV.青山吉能）",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "185755:OP:1": [{
    youtubeVideoId: "RhYMhoPx0O4",
    title: "TVアニメ『ぷにるはかわいいスライム』第2期“ぷにかわ”OPムービー(ノンクレジット)／OPテーマ「Brun-Brun」ぷにる（CV：篠原 侑）",
    type: "creditless_op",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "185755:ED:1": [{
    youtubeVideoId: "dWtvWZ50Uk0",
    title: "TVアニメ『ぷにるはかわいいスライム』第2期“ぷにかわ”EDムービー(ノンクレジット)／EDテーマ「青と夏」ぷにる（CV：篠原 侑）",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "184574:OP:1": [{
    youtubeVideoId: "i0XigEENjpM",
    title: "TVアニメ『出禁のモグラ』ノンクレジットオープニング映像 │ ♪syudou「神頼み」",
    type: "creditless_op",
    channelName: "avex pictures",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "l3HWRidBqTw",
    title: "【syudou】神頼み",
    type: "full_music_video",
    channelName: "syudou",
    officialStatus: "official",
    embeddable: true
  }],
  "184574:ED:1": [{
    youtubeVideoId: "R3biGiurkOY",
    title: "TVアニメ『出禁のモグラ』ノンクレジットエンディング映像 │ ♪椎乃味醂「喧騒 feat. Aile The Shota」",
    type: "creditless_ed",
    channelName: "avex pictures",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "t9E9BQ83BIU",
    title: "椎乃味醂 - 喧騒 (ft. Aile The Shota)",
    type: "full_music_video",
    channelName: "椎乃味醂",
    officialStatus: "official",
    embeddable: true
  }],
  "179879:OP:1": [{
    youtubeVideoId: "TxzfhanFwHI",
    title: "「ずたぼろ令嬢は姉の元婚約者に溺愛される」ノンクレジットオープニング ｜ krage「月蝕」",
    type: "creditless_op",
    channelName: "日活アニメチャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "OMPs6_EmoP0",
    title: "krage - 月蝕 (Music Video)",
    type: "full_music_video",
    channelName: "krage Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "179879:ED:1": [{
    youtubeVideoId: "LZnXIc0bM_4",
    title: "「ずたぼろ令嬢は姉の元婚約者に溺愛される」ノンクレジットエンディング ｜ Myuk「マリー」",
    type: "creditless_ed",
    channelName: "日活アニメチャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "qBkdlGHv_ug",
    title: "Myuk - マリー (Music Video) 【Prod by Guiano】",
    type: "full_music_video",
    channelName: "Myuk",
    officialStatus: "official",
    embeddable: true
  }],
  "186003:OP:1": [{
    youtubeVideoId: "ByuXopW9FTg",
    title: "アニメ「フェルマーの料理」ノンクレジットOP「メイラード」OSHIKIKEIGO",
    type: "creditless_op",
    channelName: "スカパー・ピクチャーズ チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "w5ZVt5-qXqw",
    title: "OSHIKIKEIGO - 「メイラード」 (Official Music Video)",
    type: "full_music_video",
    channelName: "OSHIKIKEIGO",
    officialStatus: "official",
    embeddable: true
  }],
  "186003:ED:1": [{
    youtubeVideoId: "0CM2i95JvwE",
    title: "アニメ「フェルマーの料理」ノンクレジットED「Change Over」DXTEEN",
    type: "creditless_ed",
    channelName: "スカパー・ピクチャーズ チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "184034:OP:1": [{
    youtubeVideoId: "ATiEBvuxBQw",
    title: "TVアニメ「ホテル・インヒューマンズ」ノンクレジットOP",
    type: "creditless_op",
    channelName: "テレ東アニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "b2RNMNoTnJA",
    title: "【imase】ミスター・ムーンライト（MV）",
    type: "full_music_video",
    channelName: "imase",
    officialStatus: "official",
    embeddable: true
  }],
  "184034:ED:1": [{
    youtubeVideoId: "usKne28i008",
    title: "アニメ『ホテル・インヒューマンズ』ノンクレジットエンディング映像／NOA「Merry Go Round」",
    type: "creditless_ed",
    channelName: "NOA",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "agN5U3CxT2Q",
    title: "NOA - Merry Go Round 【Official Music Video】",
    type: "full_music_video",
    channelName: "NOA",
    officialStatus: "official",
    embeddable: true
  }],
  "157960:OP:1": [{
    youtubeVideoId: "zCvfrOnhShU",
    title: "ちゃんみな – WORK HARD (『BULLET/BULLET』 ノンクレジットOP映像)",
    type: "creditless_op",
    channelName: "ちゃんみな [CHANMINA]",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "HCdLEiXoxwg",
    title: "ちゃんみな - WORK HARD (Official Music Video)",
    type: "full_music_video",
    channelName: "ちゃんみな [CHANMINA]",
    officialStatus: "official",
    embeddable: true
  }],
  "157960:ED:1": [{
    youtubeVideoId: "Z3-arFGHmU0",
    title: "アニメ『BULLET/BULLET』ノンクレジットエンディング映像",
    type: "creditless_ed",
    channelName: "Newspeak Jp",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "nEFEkZ-GXrY",
    title: "Newspeak - Glass Door (Official Music Video)",
    type: "full_music_video",
    channelName: "Newspeak Jp",
    officialStatus: "official",
    embeddable: true
  }],
  "180929:OP:1": [{
    youtubeVideoId: "YDOARwO2SNk",
    title: "「瑠璃の宝石」ノンクレジットオープニング映像｜安田レイ『光のすみか』",
    type: "creditless_op",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Lo-OjEM6qYc",
    title: "安田レイ「光のすみか」Music Video TVアニメ『瑠璃の宝石』オープニングテーマ",
    type: "full_music_video",
    channelName: "安田レイ Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "180929:ED:1": [{
    youtubeVideoId: "CtA_47WtzzY",
    title: "「瑠璃の宝石」ノンクレジットエンディング映像｜Hana Hope『サファイア』",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "uZu7powiHGM",
    title: "Hana Hope - サファイア",
    type: "full_music_video",
    channelName: "Hana Hope",
    officialStatus: "official",
    embeddable: true
  }],
  "179966:OP:1": [{
    youtubeVideoId: "8dky0A7Gx1c",
    title: "『サイレント・ウィッチ 沈黙の魔女の隠しごと』ノンクレジットオープニング｜羊文学『Feel』",
    type: "creditless_op",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "bVrPoCfMZCE",
    title: "羊文学 – Feel (Official Music Video) [TVアニメ『サイレント・ウィッチ 沈黙の魔女の隠しごと』オープニング主題歌]",
    type: "full_music_video",
    channelName: "羊文学",
    officialStatus: "official",
    embeddable: true
  }],
  "179966:ED:1": [{
    youtubeVideoId: "ZssInPdN6o8",
    title: "『サイレント・ウィッチ 沈黙の魔女の隠しごと』ノンクレジットエンディング｜羊文学『mild days』",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Wpa4u04yQyw",
    title: "羊文学 – mild days (Official Music Video) [TVアニメ『サイレント・ウィッチ 沈黙の魔女の隠しごと』エンディング主題歌]",
    type: "full_music_video",
    channelName: "羊文学",
    officialStatus: "official",
    embeddable: true
  }],
  "185519:OP:1": [{
    youtubeVideoId: "Mes1XCDZYTo",
    title: "TVアニメ「フードコートで、また明日。」ノンクレジットオープニング映像",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "1L0bMfq94KA",
    title: "おいしくるメロンパン「未完成に瞬いて」Music Video",
    type: "full_music_video",
    channelName: "おいしくるメロンパン",
    officialStatus: "official",
    embeddable: true
  }],
  "185519:ED:1": [{
    youtubeVideoId: "CLVx27ALbgs",
    title: "TVアニメ「フードコートで、また明日。」ノンクレジットエンディング映像",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "_vORepjHH7M",
    title: "TVアニメ『フードコートで、また明日。』EDテーマ「となりあわせ。」スペシャルエンディングムービー",
    type: "other",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }],
  "177761:OP:1": [{
    youtubeVideoId: "UpbWNBDQ4TQ",
    title: "TVアニメ『9-nine- Ruler’s Crown』 |ノンクレジットオープニング映像「ResoNAnce」あらき",
    type: "creditless_op",
    channelName: "ぱれっとチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "177761:ED:1": [{
    youtubeVideoId: "O41bylC8_MI",
    title: "TVアニメ『9-nine- Ruler’s Crown』 |ノンクレジットエンディング映像「Pale Blaze」米倉千尋",
    type: "creditless_ed",
    channelName: "ぱれっとチャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "177175:OP:1": [{
    youtubeVideoId: "m6i-frdBemo",
    title: "TVアニメ『アークナイツ【焔燼曙明/RISE FROM EMBER】』ノンクレジットオープニング映像",
    type: "creditless_op",
    channelName: "アークナイツ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "lrF8dqA74DQ",
    title: "ReoNa「End of Days」Official Music Video",
    type: "full_music_video",
    channelName: "ReoNa official YouTube channel",
    officialStatus: "official",
    embeddable: true
  }],
  "177175:ED:1": [{
    youtubeVideoId: "H-xK8jKq-9I",
    title: "TVアニメ『アークナイツ【焔燼曙明/RISE FROM EMBER】』ノンクレジットエンディング映像",
    type: "creditless_ed",
    channelName: "アークナイツ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "cdI3pFxfw50",
    title: "TVアニメ『アークナイツ【焔燼曙明/RISE FROM EMBER】』EDテーマ『Truth』Music Video",
    type: "full_music_video",
    channelName: "アークナイツ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "177175:ED:2": [{
    youtubeVideoId: "0xR91gHai4k",
    title: "「アークナイツ」TVアニメシリーズ完結記念映像｜ReoNa「生命換装」",
    type: "full_music_video",
    channelName: "アークナイツ 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "180425:OP:1": [{
    youtubeVideoId: "OOmuZxXI4lU",
    title: "TVアニメ「雨と君と」ノンテロップオープニング映像",
    type: "creditless_op",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "T0PYzggLT9w",
    title: "鈴木真海子 - 雨と (official music video)",
    type: "full_music_video",
    channelName: "鈴木真海子 / mamiko suzuki",
    officialStatus: "official",
    embeddable: true
  }],
  "180425:ED:1": [{
    youtubeVideoId: "XYJ1xCEUTxg",
    title: "TVアニメ「雨と君と」ノンテロップエンディング映像",
    type: "creditless_ed",
    channelName: "NBCUniversal Anime/Music",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "tkc_QRHMkro",
    title: "菅原圭 - filled (Official Video)",
    type: "full_music_video",
    channelName: "菅原圭",
    officialStatus: "official",
    embeddable: true
  }],
  "181444:OP:1": [{
    youtubeVideoId: "8WLNNu78mUk",
    title: "TVアニメ『薫る花は凛と咲く』ノンクレジットオープニングムービー｜キタニタツヤ「まなざしは光」",
    type: "creditless_op",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "fvrS1KjmG-g",
    title: "まなざしは光 / キタニタツヤ - Your Gaze, Crepuscular / Tatsuya Kitani",
    type: "full_music_video",
    channelName: "キタニタツヤ / Tatsuya Kitani",
    officialStatus: "official",
    embeddable: true
  }],
  "181444:ED:1": [{
    youtubeVideoId: "W4fND8qaTtE",
    title: "TVアニメ『薫る花は凛と咲く』ノンクレジットエンディングムービー｜汐れいら「ハレの日に」",
    type: "creditless_ed",
    channelName: "アニプレックス チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "wUPbV0Oz6Io",
    title: "汐れいら / ハレの日に【Official Music Video】TVアニメ『薫る花は凛と咲く』ver.",
    type: "full_music_video",
    channelName: "汐れいら",
    officialStatus: "official",
    embeddable: true
  }],
  "178025:OP:1": [{
    youtubeVideoId: "JxX7WU5DQug",
    title: "Anime Series Gachiakuta Non-credit Opening Video ／Paledusk「HUGs」",
    type: "creditless_op",
    channelName: "“GACHIAKUTA” Anime Official Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "pF8yG4YNyPw",
    title: "Paledusk / HUGs (Official Music Video)",
    type: "full_music_video",
    channelName: "Paledusk",
    officialStatus: "official",
    embeddable: true
  }],
  "178025:OP:2": [{
    youtubeVideoId: "AqWR546Xy8A",
    title: "Anime Series Gachiakuta 2nd Cour Non-credit Opening Video／Mori Calliope「LET’S JUST CRASH」",
    type: "creditless_op",
    channelName: "“GACHIAKUTA” Anime Official Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "do8EmK-XoAg",
    title: "【MV】LET'S JUST CRASH - Mori Calliope (GACHIAKUTA TV Anime 2nd Opening)",
    type: "full_music_video",
    channelName: "Mori Calliope Ch. hololive-EN",
    officialStatus: "official",
    embeddable: true
  }],
  "178025:ED:1": [{
    youtubeVideoId: "_r8XHQtADlQ",
    title: "Anime Series Gachiakuta Non-credit Ending Video ／DUSTCELL「TOMOSHIBI」",
    type: "creditless_ed",
    channelName: "“GACHIAKUTA” Anime Official Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "iG1AOY9QjHw",
    title: "DUSTCELL - 灯火 / TOMOSHIBI TV Anime『ガチアクタ』Collaboration Music Video",
    type: "full_music_video",
    channelName: "DUSTCELL",
    officialStatus: "official",
    embeddable: true
  }],
  "178025:ED:2": [{
    youtubeVideoId: "08TGBLLK8RE",
    title: "Anime Series Gachiakuta 2nd Cour Non-credit Ending Video／karanoah「BAN」",
    type: "creditless_ed",
    channelName: "“GACHIAKUTA” Anime Official Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "qCSI5MHYBYA",
    title: "カラノア - 番 (Official Music Video)",
    type: "full_music_video",
    channelName: "カラノア",
    officialStatus: "official",
    embeddable: true
  }],
  "184237:OP:1": [{
    youtubeVideoId: "YNYkTXknYjE",
    title: "TVアニメ『SAKAMOTO DAYS』第2クール オープニング映像│Kroi「Method」",
    type: "creditless_op",
    channelName: "TMSアニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "VuLIn8ZHgxw",
    title: "Kroi「Method」アニメMV│TVアニメ『SAKAMOTO DAYS』第2クール",
    type: "full_music_video",
    channelName: "TMSアニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "oioOfrRKhrI",
    title: "Kroi - Method [Official Video]",
    type: "full_music_video",
    channelName: "Kroi",
    officialStatus: "official",
    embeddable: true
  }],
  "184237:ED:1": [{
    youtubeVideoId: "3u8JxBtxt5k",
    title: "TVアニメ『SAKAMOTO DAYS』第2クール ノンクレジットエンディング",
    type: "creditless_ed",
    channelName: "TMSアニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "N7NGiZsi1VQ",
    title: "go!go!vanillas - ダンデライオン [Music Video]",
    type: "full_music_video",
    channelName: "go!go!vanillas",
    officialStatus: "official",
    embeddable: true
  }],
  "185660:OP:1": [{
    youtubeVideoId: "ZWjbvYWUMHo",
    title: "TVアニメ『ダンダダン』第2期オープニング映像｜アイナ・ジ・エンド『革命道中』",
    type: "creditless_op",
    channelName: "MBS animation 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "NLIGDjKBLY0",
    title: "アイナ・ジ・エンド『革命道中 - On The Way』Official Music Video",
    type: "full_music_video",
    channelName: "アイナ・ジ・エンド Official",
    officialStatus: "official",
    embeddable: true
  }],
  "185660:ED:1": [{
    youtubeVideoId: "LxUeFYhLE0U",
    title: "TVアニメ『ダンダダン』第2期エンディング映像｜WurtS『どうかしてる』",
    type: "creditless_ed",
    channelName: "MBS animation 公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "we3tmndN4Es",
    title: "WurtS『どうかしてる』× TVアニメ『ダンダダン』Collaboration Music Video",
    type: "full_music_video",
    channelName: "WurtS",
    officialStatus: "official",
    embeddable: true
  }],
  "177689:OP:1": [{
    youtubeVideoId: "UP7la6a1H1g",
    title: "『光が死んだ夏』ノンクレジットオープニング『再会』Vaundy",
    type: "creditless_op",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "WcaSSvtHFeM",
    title: "Vaundy『再会』Music Video",
    type: "full_music_video",
    channelName: "Vaundy",
    officialStatus: "official",
    embeddable: true
  }],
  "177689:ED:1": [{
    youtubeVideoId: "_dq21OHPJTk",
    title: "『光が死んだ夏』ノンクレジットエンディング『あなたはかいぶつ』TOOBOE",
    type: "creditless_ed",
    channelName: "KADOKAWAanime",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "iKBc6dMskmw",
    title: "TOOBOE『あなたはかいぶつ』Music Video",
    type: "full_music_video",
    channelName: "TOOBOE",
    officialStatus: "official",
    embeddable: true
  }],
  "178754:OP:1": [{
    youtubeVideoId: "rH8FCwzOdpI",
    title: "アニメ『怪獣８号』第２期ノンクレジットOP",
    type: "creditless_op",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "cgM1K48shdI",
    title: "AURORA『You Can't Run From Yourself』Lyric Video",
    type: "other",
    channelName: "AURORA",
    officialStatus: "official",
    embeddable: true
  }],
  "178754:ED:1": [{
    youtubeVideoId: "R5AHlP2cny0",
    title: "アニメ『怪獣８号』第２期ノンクレジットED",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "_EmKiQknNHY",
    title: "OneRepublic『Beautiful Colors』Official Music Video",
    type: "full_music_video",
    channelName: "OneRepublic",
    officialStatus: "official",
    embeddable: true
  }],
  "185407:OP:1": [{
    youtubeVideoId: "ciFvLHCThdg",
    title: "アニメ『タコピーの原罪』ノンクレジットOP映像",
    type: "creditless_op",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "s7FgdaGOw9s",
    title: "ano『ハッピーラッキーチャッピー』×アニメ『タコピーの原罪』Collaboration MV",
    type: "full_music_video",
    channelName: "ano official channel",
    officialStatus: "official",
    embeddable: true
  }],
  "185407:ED:1": [{
    youtubeVideoId: "uA50rpzCKqY",
    title: "アニメ『タコピーの原罪』ノンクレジットED映像",
    type: "creditless_ed",
    channelName: "TBSアニメ",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "drS7STiDBCY",
    title: "Tele『硝子の線』Music Video",
    type: "full_music_video",
    channelName: "Tele",
    officialStatus: "official",
    embeddable: true
  }],
  "175914:OP:1": [{
    youtubeVideoId: "l5S0JhqULAU",
    title: "TVアニメ『よふかしのうた Season2』ノンクレジット・オープニング映像",
    type: "creditless_op",
    channelName: "【フジテレビ】アニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ce6yxES9oLA",
    title: "Creepy Nuts - Mirage (Official Music Video)",
    type: "full_music_video",
    channelName: "Creepy Nuts",
    officialStatus: "official",
    embeddable: true
  }],
  "175914:ED:1": [{
    youtubeVideoId: "K5T_aKoN31Q",
    title: "TVアニメ『よふかしのうた Season2』ノンクレジット・エンディング映像",
    type: "creditless_ed",
    channelName: "【フジテレビ】アニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "iL4Gq4qe8ok",
    title: "Creepy Nuts - 眠れ",
    type: "full_music_video",
    channelName: "Creepy Nuts",
    officialStatus: "official",
    embeddable: true
  }],
  "175914:ED:2": [{
    youtubeVideoId: "pFvJaDwnwXk",
    title: "『よふかしのうた Season2』第12夜 ノンクレジット・エンディング映像",
    type: "creditless_ed",
    channelName: "【フジテレビ】アニメ公式チャンネル",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "H64uBYufE_I",
    title: "よふかしのうた - Yofukashino Uta",
    type: "other",
    channelName: "Creepy Nuts - Topic",
    officialStatus: "official",
    embeddable: true
  }],
  "179344:OP:1": [{
    youtubeVideoId: "VOdmjxK8QGQ",
    title: "『彼女、お借りします』第4期 ClariS「Umitsuki」ノンクレジットOP",
    type: "creditless_op",
    channelName: "DMM pictures",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "q9YrWVr4dvI",
    title: "ClariS『Umitsuki』Music Video",
    type: "full_music_video",
    channelName: "ClariS Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "179344:ED:1": [{
    youtubeVideoId: "4G_FxiIALwo",
    title: "『彼女、お借りします』第4期 リーガルリリー「ぼくのベガ」ノンクレジットED",
    type: "creditless_ed",
    channelName: "DMM pictures",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "jrGOylZ63oE",
    title: "リーガルリリー『ぼくのベガ』Music Video",
    type: "full_music_video",
    channelName: "リーガルリリー Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "183127:OP:1": [{
    youtubeVideoId: "Jh9atzsn2MM",
    title: "TVアニメ『カラオケ行こ！』ノンクレジットOP",
    type: "creditless_op",
    channelName: "KADOKAWA Anime Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "-bt4cX7dCT8",
    title: "Ayumu Imazu - HOWL [Music Video]",
    type: "full_music_video",
    channelName: "Ayumu Imazu",
    officialStatus: "official",
    embeddable: true
  }],
  "186043:ED:1": [{
    youtubeVideoId: "DY4ckIx94xw",
    title: "LE SSERAFIM『Kawaii (Prod. Gen Hoshino)』Official MV",
    type: "full_music_video",
    channelName: "HYBE LABELS",
    officialStatus: "official",
    embeddable: true
  }],
  "189117:OP:1": [{
    youtubeVideoId: "HNYp4T0kMNU",
    title: "『Dr.STONE SCIENCE FUTURE』第2クール ノンクレジットOP",
    type: "creditless_op",
    channelName: "TOHO animation",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "zc6OMsBN-As",
    title: "KANA-BOON『SUPERNOVA』Music Video",
    type: "full_music_video",
    channelName: "KANA-BOON Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "189117:ED:1": [{
    youtubeVideoId: "slJjDE64mFY",
    title: "『Dr.STONE SCIENCE FUTURE』第2クール ノンクレジットED",
    type: "creditless_ed",
    channelName: "TOHO animation",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "SZhcN4jVVzA",
    title: "音羽-otoha-『no man's world』Music Video",
    type: "full_music_video",
    channelName: "音羽-otoha-",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "Yxp_4KspixU",
    title: "音羽-otoha-『no man's world -for lonely scientist-』第2クールEDアニメMV",
    type: "other",
    channelName: "TOHO animation",
    officialStatus: "official",
    embeddable: true
  }],
  "195209:OP:1": [{
    youtubeVideoId: "hAPAvHr0Igw",
    title: "TVアニメ『傷だらけ聖女より報復をこめて』ノンクレジットOP",
    type: "creditless_op",
    channelName: "AnimationID",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "ORVnmnN613U",
    title: "鷲尾伶菜『DiZZY』Official Lyric Video",
    type: "full_music_video",
    channelName: "鷲尾伶菜 Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }, {
    youtubeVideoId: "GKsHN5NUs6c",
    title: "鷲尾伶菜『DiZZY』Studio Live Session",
    type: "other",
    channelName: "鷲尾伶菜 Official YouTube Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "195209:ED:1": [{
    youtubeVideoId: "v4Ds22elMHo",
    title: "TVアニメ『傷だらけ聖女より報復をこめて』ノンクレジットED",
    type: "creditless_ed",
    channelName: "AnimationID",
    officialStatus: "official",
    embeddable: true
  }],
  "193238:ED:1": [{
    youtubeVideoId: "5E4EprwFUEY",
    title: "OCHA NORMA『学校では教えてくれないこと』Promotion Edit",
    type: "full_music_video",
    channelName: "OCHA NORMA",
    officialStatus: "official",
    embeddable: true
  }],
  "175035:ED:1": [{
    youtubeVideoId: "Ks03nrhi2NU",
    title: "山下達郎『オノマトペISLAND』ポケモンコンシェルジュ コラボMV",
    type: "full_music_video",
    channelName: "山下達郎 Tatsuro Yamashita",
    officialStatus: "official",
    embeddable: true
  }],
  "177699:OP:1": [{
    youtubeVideoId: "-TEMcbY2JGs",
    title: "《攻殻機動隊 THE GHOST IN THE SHELL》官方影片",
    type: "other",
    channelName: "Ghost in the Shell Official",
    officialStatus: "official",
    embeddable: true
  }],
  "135865:OP:1": [{
    youtubeVideoId: "kUvhvkPDvm0",
    title: "《幼女戦記Ⅱ》メインPV第2弾",
    type: "other",
    channelName: "KADOKAWA Anime Channel",
    officialStatus: "official",
    embeddable: true
  }],
  "178789:ED:1": [{
    youtubeVideoId: "UKcJqQqiXq0",
    title: "『無職転生Ⅲ ～異世界行ったら本気だす～』ノンクレジットED映像",
    type: "creditless_ed",
    channelName: "TOHO animation チャンネル",
    officialStatus: "official",
    embeddable: true
  }],
  "196935:OP:1": [{
    youtubeVideoId: "33pSxvDNnIQ",
    title: "TVアニメ『あかね噺』ノンクレジットOP",
    type: "creditless_op",
    channelName: "tv asahi animation",
    officialStatus: "official",
    embeddable: true
  }],
  "196935:ED:1": [{
    youtubeVideoId: "wacbFJzImfk",
    title: "TVアニメ『あかね噺』ノンクレジットED",
    type: "creditless_ed",
    channelName: "tv asahi animation",
    officialStatus: "official",
    embeddable: true
  }],
  "147105:OP:1": [{
    youtubeVideoId: "0BrBWvjGmWc",
    title: "TVアニメ『とんがり帽子のアトリエ』メインPV",
    type: "other",
    channelName: "avex pictures",
    officialStatus: "official",
    embeddable: true
  }],
  "169228:OP:1": [{
    youtubeVideoId: "zBc0oFYivr4",
    title: "『北斗の拳 -FIST OF THE NORTH STAR-』メインPV",
    type: "other",
    channelName: "Warner Bros. Japan Anime",
    officialStatus: "official",
    embeddable: true
  }],
  "189046:OP:1": [{
    youtubeVideoId: "i8EjBP85cCc",
    title: "『Re:ゼロから始める異世界生活』4th season メインPV第2弾",
    type: "other",
    channelName: "KADOKAWA Anime Channel",
    officialStatus: "official",
    embeddable: true
  }]
};

const videoSourceLanguageOverrides: Record<string, PublicThemeSource["language"]> = {
  Ql5mn3Uy_oM: "zh-Hant"
};

const faceVocalCredits: PublicCreatorCredit[] = [
  { name: "福原多聞（CV.波多野 翔）", role: "vocals" },
  { name: "坂口桜利（CV.千葉翔也）", role: "vocals" },
  { name: "橘 敬人（CV.畠中 祐）", role: "vocals" },
  { name: "石橋ナツキ（CV.天﨑滉平）", role: "vocals" },
  { name: "甲斐倫太郎（CV.長岡龍歩）", role: "vocals" }
];

const vocalCreditOverrides: Record<string, PublicCreatorCredit[]> = {
  "185753:OP:1": [
    { name: "芹澤 優", role: "vocals" },
    { name: "MOTSU", role: "vocals" }
  ],
  "185753:ED:1": [{ name: "Himika Akaneya", role: "vocals" }],
  "178005:OP:1": faceVocalCredits,
  "178005:ED:1": faceVocalCredits,
  "178005:ED:2": faceVocalCredits,
  "167152:OP:1": [{ name: "YOSUKE", role: "vocals" }],
  "198720:OP:1": [{ name: "イツカ▶︎", role: "vocals" }],
  "198720:ED:1": [{ name: "神戸シンキ", role: "vocals" }],
  "180746:OP:1": [],
  "177580:OP:1": [{ name: "ikura", role: "vocals" }],
  "177580:ED:1": [{ name: "ikura", role: "vocals" }],
  "198411:ED:1": [
    { name: "ムロツヨシ", role: "vocals" },
    { name: "茂木欣一", role: "vocals" }
  ],
  "188138:OP:1": [
    { name: "高野大河", role: "vocals" },
    { name: "長岡龍歩", role: "vocals" },
    { name: "観世智顕", role: "vocals" },
    { name: "小池貴大", role: "vocals" },
    { name: "草野太一", role: "vocals" }
  ],
  "188138:ED:1": [
    { name: "前野智昭", role: "vocals" },
    { name: "阿座上洋平", role: "vocals" },
    { name: "山下大輝", role: "vocals" }
  ],
  "171046:ED:6": [
    { name: "広川卯月（CV.雨宮天）", role: "vocals" },
    { name: "赤城郁実（CV.山根綺）", role: "vocals" },
    { name: "姫路紗良（CV.小原好美）", role: "vocals" },
    { name: "岩見沢寧々（CV.上田麗奈）", role: "vocals" }
  ],
  "173335:ED:7": [
    { name: "理芽", role: "vocals" },
    { name: "幸祜", role: "vocals" }
  ],
  "173335:ED:8": [
    { name: "ヰ世界情緒", role: "vocals" },
    { name: "春猿火", role: "vocals" }
  ],
  "181841:ED:3": [],
  "198745:ED:1": [
    { name: "七瀬彩夏", role: "vocals" }
  ],
  "184574:ED:1": [
    { name: "Aile The Shota", role: "vocals" }
  ],
  "185505:ED:1": [
    { name: "のあ(from カラフルピーチ)", role: "vocals" }
  ],
  "178675:OP:1": [
    { name: "優谷優（CV.橘杏咲）", role: "vocals" },
    { name: "水鳥亜鳥（CV.花宮初奈）", role: "vocals" },
    { name: "涼風涼（CV.松岡美里）", role: "vocals" },
    { name: "瑠璃葉るら（CV.花井美春）", role: "vocals" }
  ],
  "178675:ED:1": [
    { name: "優谷優（CV.橘杏咲）", role: "vocals" },
    { name: "水鳥亜鳥（CV.花宮初奈）", role: "vocals" },
    { name: "涼風涼（CV.松岡美里）", role: "vocals" },
    { name: "瑠璃葉るら（CV.花井美春）", role: "vocals" }
  ],
  "182309:OP:1": [
    { name: "湘南乃風", role: "vocals" },
    { name: "新しい学校のリーダーズ", role: "vocals" }
  ],
  "182309:ED:1": [
    { name: "SEAMO", role: "vocals" },
    { name: "May'n", role: "vocals" }
  ],
  "177880:ED:1": [
    { name: "ひとみ from あたらよ", role: "vocals" },
    { name: "松野家6兄弟", role: "vocals" }
  ],
  "151799:OP:1": [
    { name: "Ashley", role: "vocals" },
    { name: "E.V.P", role: "vocals" }
  ],
  "151799:ED:1": [
    { name: "VERBAL", role: "vocals" },
    { name: "Adee A.", role: "vocals" }
  ],
  "177887:OP:1": [],
  "177887:ED:1": [
    { name: "ダイアナ・ガーネット", role: "vocals" }
  ],
  "178886:OP:1": [
    { name: "礼衣", role: "vocals" }
  ],
  "183128:ED:1": [
    { name: "山下大輝", role: "vocals" },
    { name: "畠中祐", role: "vocals" }
  ],
  "198408:ED:1": [
    { name: "アースセイバーズ（カナデ CV.谷江玲音と子どもたち）", role: "vocals" },
    { name: "ラテール（CV.田村ゆかり）", role: "vocals" }
  ],
  "180460:ED:1": [
    { name: "真白（CV.花澤香菜）", role: "vocals" },
    { name: "愉快なおじさんたち（CV.杉田智和）", role: "vocals" }
  ],
  "180460:ED:2": [
    { name: "真白（CV.花澤香菜）", role: "vocals" }
  ],
  "186561:ED:1": [
    { name: "シエル（CV：佐伯伊織）", role: "vocals" },
    { name: "アネモネ（CV：上田 瞳）", role: "vocals" },
    { name: "ゴア（CV：白石晴香）", role: "vocals" }
  ],
  "180794:OP:1": [
    { name: "リリー・ベイカー（CV：天城サリー）", role: "vocals" },
    { name: "草壁葵衣（CV：小山内怜央）", role: "vocals" }
  ]
};

const santaClausEndingCredits: PublicCreatorCredit[] = [
  { name: "児玉雨子", role: "lyrics" },
  { name: "カワイヒデヒロ（fox capture plan）", role: "composition" },
  { name: "カワイヒデヒロ（fox capture plan）", role: "arrangement" }
];

const creditOverrides: Record<string, PublicCreatorCredit[]> = {
  "185753:OP:1": [
    { name: "MOTSU", role: "lyrics" },
    { name: "MOTSU", role: "composition" },
    { name: "大久保薫", role: "arrangement" }
  ],
  "185753:ED:1": [
    { name: "☆Taku Takahashi (m-flo)", role: "lyrics" },
    { name: "ARAKI", role: "lyrics" },
    { name: "☆Taku Takahashi (m-flo)", role: "composition" },
    { name: "ARAKI", role: "composition" },
    { name: "☆Taku Takahashi (m-flo)", role: "arrangement" },
    { name: "Mitsunori Ikeda", role: "arrangement" }
  ],
  "187264:OP:1": [
    { name: "古閑翔平（YOURNESS）", role: "lyrics" },
    { name: "古閑翔平（YOURNESS）", role: "composition" },
    { name: "古閑翔平（YOURNESS）", role: "arrangement" }
  ],
  "187264:ED:1": [
    { name: "Nowlu", role: "lyrics" },
    { name: "クレハリュウイチ", role: "composition" },
    { name: "クレハリュウイチ", role: "arrangement" }
  ],
  "178005:OP:1": [
    { name: "Soma Genda", role: "lyrics" },
    { name: "Dirty Orange", role: "composition" },
    { name: "Soma Genda", role: "composition" },
    { name: "Dirty Orange", role: "arrangement" }
  ],
  "178005:ED:1": [
    { name: "城田優", role: "lyrics" },
    { name: "城田優", role: "composition" },
    { name: "Mitsu.J", role: "composition" },
    { name: "Mitsu.J", role: "arrangement" }
  ],
  "178005:ED:2": [
    { name: "師走ゆき", role: "lyrics" },
    { name: "SHOW", role: "lyrics" },
    { name: "Mitsu.J", role: "composition" },
    { name: "Mitsu.J", role: "arrangement" }
  ],
  "167152:OP:1": [
    { name: "MOMIKEN", role: "lyrics" },
    { name: "UZ", role: "composition" },
    { name: "UZ", role: "arrangement" },
    { name: "tasuku", role: "arrangement" }
  ],
  "198720:OP:1": [
    { name: "三浦誠司", role: "lyrics" },
    { name: "三浦誠司", role: "composition" },
    { name: "三浦誠司", role: "arrangement" }
  ],
  "198720:ED:1": [
    { name: "神戸シンキ", role: "lyrics" },
    { name: "神戸シンキ", role: "composition" },
    { name: "神戸シンキ", role: "arrangement" },
    { name: "佐藤希久生", role: "arrangement" }
  ],
  "197731:OP:1": [
    { name: "谷山紀章", role: "lyrics" },
    { name: "飯塚昌明", role: "composition" },
    { name: "飯塚昌明", role: "arrangement" }
  ],
  "197731:ED:1": [
    { name: "寺島拓篤", role: "lyrics" },
    { name: "海野水玉", role: "composition" },
    { name: "Seiji Iwasaki", role: "composition" },
    { name: "Seiji Iwasaki", role: "arrangement" }
  ],
  "195322:OP:1": [
    { name: "すりぃ", role: "lyrics" },
    { name: "すりぃ", role: "composition" },
    { name: "すりぃ", role: "arrangement" }
  ],
  "195322:ED:1": [
    { name: "佐々木想", role: "lyrics" },
    { name: "佐々木想", role: "composition" },
    { name: "花井諒", role: "arrangement" },
    { name: "シャイトープ", role: "arrangement" }
  ],
  "177385:OP:1": [
    { name: "TOMOO", role: "lyrics" },
    { name: "TOMOO", role: "composition" },
    { name: "小西遼（象眠舎、CRCK/LCKS）", role: "arrangement" }
  ],
  "177385:ED:1": [
    { name: "菊池剛", role: "lyrics" },
    { name: "甫木元空", role: "lyrics" },
    { name: "菊池剛", role: "composition" }
  ],
  "166521:OP:1": [
    { name: "Awich", role: "lyrics" },
    { name: "LEO", role: "lyrics" },
    { name: "Chaki Zulu", role: "composition" },
    { name: "LEO", role: "composition" },
    { name: "Ryo’LEFTY’Miyata", role: "composition" },
    { name: "Chaki Zulu", role: "arrangement" }
  ],
  "166521:ED:1": [
    { name: "Ken", role: "lyrics" },
    { name: "Ken", role: "composition" }
  ],
  "194028:OP:1": [
    { name: "じん", role: "lyrics" },
    { name: "じん", role: "composition" },
    { name: "すくろーす", role: "arrangement" }
  ],
  "194028:ED:1": [
    { name: "清浦夏実", role: "lyrics" },
    { name: "北川勝利", role: "composition" },
    { name: "北川勝利", role: "arrangement" }
  ],
  "172463:OP:1": [
    { name: "常田大希", role: "lyrics" },
    { name: "常田大希", role: "composition" },
    { name: "King Gnu", role: "arrangement" }
  ],
  "172463:ED:1": [
    { name: "jo0ji", role: "lyrics" },
    { name: "jo0ji", role: "composition" },
    { name: "Ayatake Ezaki", role: "arrangement" },
    { name: "Koki Furukawa", role: "arrangement" },
    { name: "jo0ji", role: "arrangement" }
  ],
  "166613:OP:1": [
    { name: "Tatsuya Kitani", role: "lyrics" },
    { name: "Tatsuya Kitani", role: "composition" },
    { name: "Tatsuya Kitani", role: "arrangement" }
  ],
  "166613:ED:1": [
    { name: "薔薇園アヴ", role: "lyrics" },
    { name: "薔薇園アヴ", role: "composition" },
    { name: "女王蜂", role: "arrangement" },
    { name: "塚田耕司", role: "arrangement" }
  ],
  "163144:OP:1": [
    { name: "あの", role: "lyrics" },
    { name: "DAIDAI(Paledusk)", role: "composition" },
    { name: "DAIDAI(Paledusk)", role: "arrangement" }
  ],
  "163144:ED:1": [
    { name: "アマダシンスケ", role: "lyrics" },
    { name: "アマダシンスケ", role: "composition" },
    { name: "FOMARE", role: "arrangement" }
  ],
  "166617:OP:1": [
    { name: "Benjamin＋cAnON.", role: "lyrics" },
    { name: "Hiroyuki SAWANO", role: "composition" },
    { name: "Hiroyuki SAWANO", role: "arrangement" }
  ],
  "166617:ED:1": [
    { name: "藤丸将太", role: "lyrics" },
    { name: "13.3g", role: "composition" },
    { name: "HIDEO NEKOTA", role: "arrangement" }
  ],
  "189275:OP:1": [
    { name: "CHANMINA", role: "lyrics" },
    { name: "CHANMINA", role: "composition" },
    { name: "SANGWOO", role: "composition" }
  ],
  "189275:ED:1": [
    { name: "Conton Candy", role: "lyrics" },
    { name: "Conton Candy", role: "composition" },
    { name: "野村陽一郎", role: "arrangement" },
    { name: "Conton Candy", role: "arrangement" }
  ],
  "177679:OP:1": [
    { name: "藤原聡", role: "lyrics" },
    { name: "藤原聡", role: "composition" },
    { name: "Official髭男dism", role: "arrangement" }
  ],
  "177679:ED:1": [
    { name: "a子", role: "lyrics" },
    { name: "a子", role: "composition" },
    { name: "中村エイジ", role: "arrangement" }
  ],
  "180746:OP:1": [
    { name: "LIN（MADKID）", role: "composition" },
    { name: "LIN（MADKID）", role: "arrangement" }
  ],
  "180746:ED:1": [
    { name: "藤川千愛", role: "lyrics" },
    { name: "近藤世真（ElementsGarden）", role: "composition" },
    { name: "近藤世真（ElementsGarden）", role: "arrangement" }
  ],
  "177580:OP:1": [
    { name: "Ayase", role: "lyrics" },
    { name: "Ayase", role: "composition" },
    { name: "Ayase", role: "arrangement" }
  ],
  "177580:ED:1": [
    { name: "Ayase", role: "lyrics" },
    { name: "Ayase", role: "composition" },
    { name: "Ayase", role: "arrangement" }
  ],
  "185514:OP:1": [
    { name: "ロス", role: "lyrics" },
    { name: "ロス", role: "composition" },
    { name: "100回嘔吐", role: "arrangement" }
  ],
  "185514:ED:1": [
    { name: "Ms.OOJA", role: "lyrics" },
    { name: "Ryuichi Kureha", role: "lyrics" },
    { name: "Soundbreakers", role: "lyrics" },
    { name: "Soundbreakers", role: "composition" },
    { name: "Ms.OOJA", role: "composition" },
    { name: "Ryuichi Kureha", role: "composition" }
  ],
  "182255:OP:1": [
    { name: "大森元貴", role: "lyrics" },
    { name: "大森元貴", role: "composition" },
    { name: "兼松 衆", role: "arrangement" },
    { name: "大森元貴", role: "arrangement" }
  ],
  "182255:ED:1": [
    { name: "milet", role: "lyrics" },
    { name: "milet", role: "composition" },
    { name: "野村陽一郎", role: "composition" },
    { name: "Evan Call", role: "arrangement" }
  ],
  "182255:ED:2": [
    { name: "milet", role: "lyrics" },
    { name: "milet", role: "composition" },
    { name: "野村陽一郎", role: "composition" },
    { name: "野村陽一郎", role: "arrangement" }
  ],
  "182587:OP:1": [
    { name: "ちゃんみな", role: "lyrics" },
    { name: "ちゃんみな", role: "composition" },
    { name: "Ryosuke \"Dr. R\" Sakai", role: "composition" },
    { name: "Ryosuke \"Dr. R\" Sakai", role: "arrangement" }
  ],
  "182587:ED:1": [
    { name: "なとり", role: "lyrics" },
    { name: "なとり", role: "composition" },
    { name: "ツミキ", role: "arrangement" },
    { name: "なとり", role: "arrangement" }
  ],
  "204698:ED:1": [
    { name: "冨岡 愛", role: "lyrics" },
    { name: "冨岡 愛", role: "composition" },
    { name: "MANABOON", role: "arrangement" }
  ],
  "205772:ED:1": [
    { name: "Chiaki Nagasawa", role: "lyrics" },
    { name: "Saori Nagano", role: "lyrics" },
    { name: "Takahito Nakamura", role: "lyrics" },
    { name: "Konomi Fujimura", role: "lyrics" },
    { name: "Rose Blueming", role: "lyrics" },
    { name: "Hiyori Nara", role: "lyrics" },
    { name: "N1K0", role: "lyrics" },
    { name: "Chiaki Nagasawa", role: "composition" },
    { name: "Saori Nagano", role: "composition" },
    { name: "Takahito Nakamura", role: "composition" },
    { name: "Takahito Nakamura", role: "arrangement" }
  ],
  "206950:OP:1": [
    { name: "田村歩美", role: "lyrics" },
    { name: "田村歩美", role: "composition" },
    { name: "田村歩美", role: "arrangement" }
  ],
  "212308:ED:1": [
    { name: "Mashinomi", role: "lyrics" },
    { name: "Mashinomi", role: "composition" },
    { name: "maigoishi", role: "arrangement" }
  ],
  "198411:ED:1": [
    { name: "谷中敦", role: "lyrics" },
    { name: "NARGO", role: "composition" },
    { name: "東京スカパラダイスオーケストラ", role: "arrangement" },
    { name: "さかなクン（ソプラノサックス）", role: "other" }
  ],
  "204269:ED:1": [
    { name: "子ザメちゃん", role: "lyrics" },
    { name: "橘亮祐", role: "composition" },
    { name: "篠崎あやと", role: "composition" },
    { name: "橘亮祐", role: "arrangement" },
    { name: "篠崎あやと", role: "arrangement" }
  ],
  "202386:ED:1": [
    { name: "三島想平（cinema staff）", role: "lyrics" },
    { name: "三島想平（cinema staff）", role: "composition" },
    { name: "三島想平（cinema staff）", role: "arrangement" }
  ],
  "181867:OP:1": [
    { name: "妹尾達也", role: "lyrics" },
    { name: "妹尾達也", role: "composition" }
  ],
  "199486:OP:1": [
    { name: "STUDY優作", role: "lyrics" },
    { name: "中西ゆういちろう", role: "composition" }
  ],
  "159483:OP:1": [
    { name: "北澤ゆうほ", role: "lyrics" },
    { name: "北澤ゆうほ", role: "composition" },
    { name: "川口圭太", role: "arrangement" }
  ],
  "159483:OP:2": [
    { name: "北澤ゆうほ", role: "lyrics" },
    { name: "北澤ゆうほ", role: "composition" },
    { name: "川口圭太", role: "arrangement" }
  ],
  "159483:ED:1": [
    { name: "Akki", role: "lyrics" },
    { name: "Akki", role: "composition" },
    { name: "Akki", role: "arrangement" }
  ],
  "159483:ED:2": [
    { name: "北澤ゆうほ", role: "lyrics" },
    { name: "北澤ゆうほ", role: "composition" },
    { name: "北澤ゆうほ", role: "arrangement" },
    { name: "川口圭太", role: "arrangement" }
  ],
  "159483:ED:3": [
    { name: "結城アイラ", role: "lyrics" },
    { name: "結城アイラ", role: "composition" },
    { name: "谷ナオキ", role: "arrangement" }
  ],
  "159483:ED:4": [
    { name: "アザミ", role: "lyrics" },
    { name: "アザミ", role: "composition" },
    { name: "アザミ", role: "arrangement" }
  ],
  "159483:ED:5": [
    { name: "やなぎなぎ", role: "lyrics" },
    { name: "やなぎなぎ", role: "composition" },
    { name: "やなぎなぎ", role: "arrangement" }
  ],
  "191994:OP:1": [
    { name: "織田あすか(Elements Garden)", role: "lyrics" },
    { name: "藤田淳平(Elements Garden)", role: "composition" },
    { name: "藤田淳平(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:1": [
    { name: "中村航", role: "lyrics" },
    { name: "藤永龍太郎(Elements Garden)", role: "composition" },
    { name: "藤永龍太郎(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:2": [
    { name: "織田あすか(Elements Garden)", role: "lyrics" },
    { name: "藤田淳平(Elements Garden)", role: "composition" },
    { name: "藤田淳平(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:3": [
    { name: "藤原優樹(SUPA LOVE)", role: "lyrics" },
    { name: "長谷川大介(SUPA LOVE)", role: "composition" },
    { name: "長谷川大介(SUPA LOVE)", role: "arrangement" }
  ],
  "191994:ED:4": [
    { name: "織田あすか(Elements Garden)", role: "lyrics" },
    { name: "近藤世真(Elements Garden)", role: "composition" },
    { name: "近藤世真(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:5": [
    { name: "織田あすか(Elements Garden)", role: "lyrics" },
    { name: "藤間仁(Elements Garden)", role: "composition" },
    { name: "藤間仁(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:6": [
    { name: "織田あすか(Elements Garden)", role: "lyrics" },
    { name: "岩橋星実(Elements Garden)", role: "composition" },
    { name: "岩橋星実(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:7": [
    { name: "烏屋茶房", role: "lyrics" },
    { name: "哥丸雄貴", role: "composition" },
    { name: "哥丸雄貴", role: "arrangement" },
    { name: "堀江晶太", role: "arrangement" }
  ],
  "191994:ED:8": [
    { name: "織田あすか(Elements Garden)", role: "lyrics" },
    { name: "上松範康(Elements Garden)", role: "composition" },
    { name: "菊田大介(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:9": [
    { name: "織田あすか(Elements Garden)", role: "lyrics" },
    { name: "都丸椋太(Elements Garden)", role: "composition" },
    { name: "都丸椋太(Elements Garden)", role: "arrangement" }
  ],
  "191994:ED:10": [
    { name: "Diggy-MO’", role: "lyrics" },
    { name: "Diggy-MO’", role: "composition" },
    { name: "木下龍平(SUPA LOVE)", role: "composition" },
    { name: "Diggy-MO’", role: "arrangement" },
    { name: "木下龍平(SUPA LOVE)", role: "arrangement" }
  ],
  "169420:OP:1": [
    { name: "『ユイカ』", role: "lyrics" },
    { name: "『ユイカ』", role: "composition" },
    { name: "花井諒", role: "arrangement" }
  ],
  "169420:OP:2": [
    { name: "lia", role: "lyrics" },
    { name: "lia", role: "composition" },
    { name: "Naoki Itai", role: "arrangement" },
    { name: "Yusuke Koshiro", role: "arrangement" }
  ],
  "169420:ED:1": [
    { name: "アユニ・D", role: "lyrics" },
    { name: "アユニ・D", role: "composition" },
    { name: "友成空", role: "arrangement" }
  ],
  "169420:ED:2": [
    { name: "Takahashi Shiho", role: "lyrics" },
    { name: "MUSOH", role: "composition" },
    { name: "MUSOH", role: "arrangement" }
  ],
  "188653:ED:1": [
    { name: "篠崎あやと", role: "lyrics" },
    { name: "橘亮祐", role: "lyrics" },
    { name: "篠崎あやと", role: "composition" },
    { name: "橘亮祐", role: "composition" },
    { name: "篠崎あやと", role: "arrangement" },
    { name: "橘亮祐", role: "arrangement" }
  ],
  "188138:OP:1": [
    { name: "hotaru", role: "lyrics" },
    { name: "奥井康介", role: "composition" },
    { name: "奥井康介", role: "arrangement" }
  ],
  "188138:ED:1": [
    { name: "hotaru", role: "lyrics" },
    { name: "園田健太郎", role: "composition" },
    { name: "園田健太郎", role: "arrangement" }
  ],
  "171046:OP:1": [
    { name: "Conton Candy", role: "lyrics" },
    { name: "Conton Candy", role: "composition" },
    { name: "Conton Candy", role: "arrangement" }
  ],
  "171046:ED:1": santaClausEndingCredits,
  "171046:ED:2": santaClausEndingCredits,
  "171046:ED:3": santaClausEndingCredits,
  "171046:ED:4": santaClausEndingCredits,
  "171046:ED:5": santaClausEndingCredits,
  "171046:ED:6": santaClausEndingCredits,
  "173335:OP:1": [
    { name: "笹川真生", role: "lyrics" },
    { name: "笹川真生", role: "composition" },
    { name: "笹川真生", role: "arrangement" }
  ],
  "173335:ED:1": [
    { name: "Kanata Okajima", role: "lyrics" },
    { name: "Shao Hao", role: "lyrics" },
    { name: "Nay Shalom", role: "lyrics" },
    { name: "Kanata Okajima", role: "composition" },
    { name: "Shao Hao", role: "composition" },
    { name: "Nay Shalom", role: "composition" },
    { name: "Itamar Lapidot", role: "arrangement" },
    { name: "Shao Hao", role: "arrangement" },
    { name: "Nay Shalom", role: "arrangement" }
  ],
  "173335:ED:2": [
    { name: "香椎モイミ", role: "lyrics" },
    { name: "香椎モイミ", role: "composition" },
    { name: "香椎モイミ", role: "arrangement" }
  ],
  "173335:ED:3": [
    { name: "笹川真生", role: "lyrics" },
    { name: "笹川真生", role: "composition" },
    { name: "笹川真生", role: "arrangement" }
  ],
  "173335:ED:4": [
    { name: "kenkaiyosi", role: "lyrics" },
    { name: "kenkaiyosi", role: "composition" },
    { name: "kenkaiyosi", role: "arrangement" },
    { name: "Kenta Matsuba", role: "arrangement" }
  ],
  "173335:ED:5": [
    { name: "Aira（Dream Monster）", role: "lyrics" },
    { name: "Aira（Dream Monster）", role: "composition" },
    { name: "Aira（Dream Monster）", role: "arrangement" }
  ],
  "173335:ED:6": [
    { name: "Neuron（Empty old City）", role: "lyrics" },
    { name: "Neuron（Empty old City）", role: "composition" },
    { name: "Neuron（Empty old City）", role: "arrangement" }
  ],
  "173335:ED:7": [
    { name: "笹川真生", role: "lyrics" },
    { name: "笹川真生", role: "composition" },
    { name: "朝比奈健人", role: "arrangement" }
  ],
  "173335:ED:8": [
    { name: "香椎モイミ", role: "lyrics" },
    { name: "香椎モイミ", role: "composition" },
    { name: "朝比奈健人", role: "arrangement" }
  ],
  "173335:ED:9": [
    { name: "biz", role: "lyrics" },
    { name: "ZERA", role: "lyrics" },
    { name: "biz", role: "composition" },
    { name: "ZERA", role: "composition" },
    { name: "biz", role: "arrangement" },
    { name: "ZERA", role: "arrangement" },
    { name: "Li-OH", role: "arrangement" }
  ],
  "173335:ED:10": [
    { name: "カンザキイオリ", role: "lyrics" },
    { name: "カンザキイオリ", role: "composition" },
    { name: "及川創介", role: "arrangement" }
  ],
  "173335:ED:11": [
    { name: "カンザキイオリ", role: "lyrics" },
    { name: "たかやん", role: "lyrics" },
    { name: "カンザキイオリ", role: "composition" },
    { name: "朝比奈健人", role: "arrangement" }
  ],
  "155838:OP:1": [
    { name: "4s4ki", role: "lyrics" },
    { name: "4s4ki", role: "composition" },
    { name: "NUU$HI", role: "composition" },
    { name: "4s4ki", role: "arrangement" },
    { name: "NUU$HI", role: "arrangement" }
  ],
  "155838:ED:1": [
    { name: "甲田まひる", role: "lyrics" },
    { name: "甲田まひる", role: "composition" },
    { name: "野村陽一郎", role: "composition" },
    { name: "野村陽一郎", role: "arrangement" }
  ],
  "178869:OP:1": [
    { name: "川田まみ", role: "lyrics" },
    { name: "中沢伴行", role: "composition" },
    { name: "fumi", role: "composition" },
    { name: "中沢伴行", role: "arrangement" },
    { name: "fumi", role: "arrangement" }
  ],
  "178869:ED:1": [
    { name: "Ellie Goulding", role: "songwriting" },
    { name: "Jack Rochon", role: "songwriting" },
    { name: "Kurtis Wells", role: "songwriting" },
    { name: "Livvi Franc", role: "songwriting" }
  ],
  "187387:OP:1": [
    { name: "Who-ya Extended", role: "lyrics" },
    { name: "Who-ya Extended", role: "composition" },
    { name: "Who-ya Extended", role: "arrangement" }
  ],
  "187387:ED:1": [
    { name: "Tana.H", role: "lyrics" },
    { name: "Tana.H", role: "composition" },
    { name: "KOHEI KIRIAKE", role: "composition" },
    { name: "Marchin", role: "composition" }
  ],
  "169440:OP:1": [
    { name: "真行寺貴秋", role: "lyrics" },
    { name: "BRADIO", role: "composition" },
    { name: "BRADIO", role: "arrangement" }
  ],
  "169440:ED:1": [
    { name: "カシラテ", role: "lyrics" },
    { name: "先田貴裕", role: "composition" },
    { name: "先田貴裕", role: "arrangement" }
  ],
  "185505:OP:1": [
    { name: "緑仙", role: "lyrics" },
    { name: "RUCCA", role: "lyrics" },
    { name: "eba", role: "composition" },
    { name: "eba", role: "arrangement" }
  ],
  "185505:ED:1": [
    { name: "Vell", role: "lyrics" },
    { name: "Vell", role: "composition" },
    { name: "Vell", role: "arrangement" }
  ],
  "186052:OP:1": [
    { name: "けっさく", role: "lyrics" },
    { name: "けっさく", role: "composition" }
  ],
  "186052:ED:1": [
    { name: "みさき", role: "lyrics" },
    { name: "みさき", role: "composition" },
    { name: "本間昭光", role: "arrangement" }
  ],
  "178675:OP:1": [
    { name: "烏屋茶房", role: "lyrics" },
    { name: "ヒゲドライバー", role: "composition" },
    { name: "ヒゲドライバー", role: "arrangement" }
  ],
  "178675:ED:1": [
    { name: "ZAQ", role: "lyrics" },
    { name: "ZAQ", role: "composition" },
    { name: "ZAQ", role: "arrangement" }
  ],
  "178675:ED:2": [
    { name: "MUTEKI DEAD SNAKE", role: "lyrics" },
    { name: "MUTEKI DEAD SNAKE", role: "composition" },
    { name: "MUTEKI DEAD SNAKE", role: "arrangement" }
  ],
  "178433:OP:1": [
    { name: "真崎エリカ", role: "lyrics" },
    { name: "アッシュ井上(Dream Monster)", role: "composition" },
    { name: "アッシュ井上(Dream Monster)", role: "arrangement" }
  ],
  "178433:ED:1": [
    { name: "寺島拓篤", role: "lyrics" },
    { name: "TAKE(FLOW)", role: "composition" },
    { name: "TAKE(FLOW)", role: "arrangement" }
  ],
  "189326:OP:1": [
    { name: "大石昌良", role: "lyrics" },
    { name: "大石昌良", role: "composition" },
    { name: "大石昌良", role: "arrangement" }
  ],
  "189326:ED:1": [
    { name: "Saku", role: "lyrics" },
    { name: "Saku", role: "composition" },
    { name: "Saku", role: "arrangement" }
  ],
  "170113:OP:1": [
    { name: "Imaban", role: "lyrics" },
    { name: "Imaban", role: "composition" },
    { name: "石倉誉之", role: "arrangement" },
    { name: "Imaban", role: "arrangement" }
  ],
  "170113:ED:1": [
    { name: "秋田涼一", role: "lyrics" },
    { name: "澤田 空海理", role: "composition" },
    { name: "澤田 空海理", role: "arrangement" }
  ],
  "180460:OP:1": [
    { name: "岡崎体育", role: "lyrics" },
    { name: "岡崎体育", role: "composition" },
    { name: "岡崎体育", role: "arrangement" },
    { name: "dustbox", role: "arrangement" }
  ],
  "180460:ED:1": [
    { name: "花園姫子", role: "lyrics" },
    { name: "花園姫子", role: "composition" },
    { name: "花園姫子", role: "arrangement" }
  ],
  "180460:ED:2": [
    { name: "Giambattista De Curtis", role: "lyrics" },
    { name: "徳永政太郎", role: "translation" },
    { name: "Ernesto De Curtis", role: "composition" },
    { name: "菊谷知樹", role: "arrangement" }
  ],
  "189069:OP:1": [
    { name: "喜多條忠", role: "lyrics" },
    { name: "吉田拓郎", role: "composition" },
    { name: "馬飼野康二", role: "arrangement" }
  ],
  "189069:OP:2": [
    { name: "亀山陽平", role: "lyrics" },
    { name: "土井浩平", role: "composition" },
    { name: "土井浩平", role: "arrangement" }
  ],
  "185544:OP:1": [
    { name: "マサ", role: "lyrics" },
    { name: "マサ", role: "composition" },
    { name: "田中タリラ", role: "arrangement" }
  ],
  "185544:ED:1": [
    { name: "スノヒロ", role: "lyrics" },
    { name: "三好啓太", role: "composition" },
    { name: "三好啓太", role: "arrangement" }
  ],
  "186561:OP:1": [
    { name: "柊マグネタイト", role: "lyrics" },
    { name: "柊マグネタイト", role: "composition" },
    { name: "柊マグネタイト", role: "arrangement" }
  ],
  "186561:ED:1": [
    { name: "小鷲翔太", role: "lyrics" },
    { name: "小鷲翔太", role: "composition" },
    { name: "小鷲翔太", role: "arrangement" }
  ],
  "180794:OP:1": [
    { name: "TAG", role: "lyrics" },
    { name: "TAG", role: "composition" },
    { name: "TAG", role: "arrangement" }
  ],
  "180794:ED:1": [
    { name: "t+pazolite", role: "lyrics" },
    { name: "t+pazolite", role: "composition" },
    { name: "t+pazolite", role: "arrangement" }
  ],
  "196229:OP:1": [
    { name: "酒井陽一", role: "lyrics" },
    { name: "酒井陽一", role: "composition" },
    { name: "酒井陽一", role: "arrangement" }
  ],
  "179885:OP:1": [
    { name: "梶原岳人", role: "lyrics" },
    { name: "梶原岳人", role: "composition" },
    { name: "フワリ（Dream Monster）", role: "arrangement" }
  ],
  "179885:ED:1": [
    { name: "ChouCho", role: "lyrics" },
    { name: "ChouCho", role: "composition" },
    { name: "村山☆潤", role: "arrangement" }
  ],
  "179678:OP:1": [
    { name: "命-mikoto-", role: "lyrics" },
    { name: "命-mikoto-", role: "composition" },
    { name: "命-mikoto-", role: "arrangement" }
  ],
  "179678:ED:1": [
    { name: "Chilli Beans.", role: "lyrics" },
    { name: "Chilli Beans.", role: "composition" },
    { name: "Chilli Beans.", role: "arrangement" }
  ],
  "193883:OP:1": [
    { name: "ケンモチヒデフミ", role: "lyrics" },
    { name: "ケンモチヒデフミ", role: "composition" }
  ],
  "156395:OP:1": [
    { name: "Ayumu Imazu", role: "lyrics" },
    { name: "Ayumu Imazu", role: "composition" },
    { name: "A.G.O", role: "composition" },
    { name: "Ayumu Imazu", role: "arrangement" },
    { name: "A.G.O", role: "arrangement" }
  ],
  "156395:ED:1": [
    { name: "藤本栄太", role: "lyrics" },
    { name: "やさしさ", role: "lyrics" },
    { name: "アラタニ", role: "composition" },
    { name: "やさしさ", role: "composition" },
    { name: "GLASGOW", role: "arrangement" }
  ],
  "177474:OP:1": [
    { name: "山中拓也", role: "lyrics" },
    { name: "山中拓也", role: "composition" },
    { name: "THE ORAL CIGARETTES", role: "arrangement" },
    { name: "辻村有記", role: "arrangement" }
  ],
  "177474:OP:2": [
    { name: "辻村有記", role: "lyrics" },
    { name: "辻村有記", role: "composition" },
    { name: "辻村有記", role: "arrangement" }
  ],
  "177474:ED:1": [
    { name: "小鳩ミク", role: "lyrics" },
    { name: "BAND-MAID", role: "composition" }
  ],
  "177474:ED:2": [
    { name: "eill", role: "lyrics" },
    { name: "eill", role: "composition" },
    { name: "Ryo'LEFTY'Miyata", role: "composition" },
    { name: "eill", role: "arrangement" },
    { name: "Ryo'LEFTY'Miyata", role: "arrangement" },
    { name: "nabeLTD", role: "arrangement" },
    { name: "Katsushiro Sato", role: "arrangement" }
  ],
  "185965:OP:1": [
    { name: "澤部渡", role: "lyrics" },
    { name: "澤部渡", role: "composition" },
    { name: "スカート", role: "arrangement" }
  ],
  "185965:OP:2": [
    { name: "Furui Riho", role: "lyrics" },
    { name: "Furui Riho", role: "composition" },
    { name: "knoak", role: "arrangement" }
  ],
  "185965:ED:1": [
    { name: "大石昌良", role: "lyrics" },
    { name: "大石昌良", role: "composition" },
    { name: "大石昌良", role: "arrangement" },
    { name: "SPECIAL OTHERS", role: "arrangement" }
  ],
  "198745:OP:1": [
    { name: "北川悠仁", role: "lyrics" },
    { name: "北川悠仁", role: "composition" },
    { name: "佐々木“コジロー”貴之", role: "composition" },
    { name: "佐々木“コジロー”貴之", role: "arrangement" }
  ],
  "198745:ED:1": [
    { name: "こだまさおり", role: "lyrics" },
    { name: "佐々木“コジロー”貴之", role: "composition" },
    { name: "佐々木“コジロー”貴之", role: "arrangement" }
  ],
  "194088:ED:1": [
    { name: "ナオト・インティライミ", role: "lyrics" },
    { name: "ナオト・インティライミ", role: "composition" },
    { name: "ナオト・インティライミ", role: "arrangement" },
    { name: "大久保薫", role: "arrangement" }
  ],
  "166215:OP:1": [
    { name: "Taiki Azegami (ARTribe)", role: "lyrics" },
    { name: "N1K0 (ARTribe)", role: "lyrics" },
    { name: "Taiki Azegami (ARTribe)", role: "composition" },
    { name: "細井涼介", role: "arrangement" }
  ],
  "175914:OP:1": [
    { name: "R-指定", role: "lyrics" },
    { name: "DJ松永", role: "composition" }
  ],
  "175914:ED:1": [
    { name: "R-指定", role: "lyrics" },
    { name: "DJ松永", role: "composition" }
  ],
  "175914:ED:2": [
    { name: "R-指定", role: "lyrics" },
    { name: "DJ松永", role: "composition" }
  ],
  "179344:OP:1": [
    { name: "ClariS", role: "lyrics" },
    { name: "栗林悟", role: "composition" },
    { name: "栗原暁(Jazzinʼpark)", role: "composition" },
    { name: "栗林悟", role: "arrangement" }
  ],
  "179344:ED:1": [
    { name: "たかはしほのか", role: "lyrics" },
    { name: "たかはしほのか", role: "composition" },
    { name: "リーガルリリー", role: "arrangement" }
  ],
  "183128:OP:1": [
    { name: "須田景凪", role: "lyrics" },
    { name: "須田景凪", role: "composition" },
    { name: "須田景凪", role: "arrangement" },
    { name: "赤山コウ", role: "arrangement" }
  ],
  "183128:ED:1": [
    { name: "OHTORA", role: "lyrics" },
    { name: "OHTORA", role: "composition" },
    { name: "maeshima soshi", role: "composition" },
    { name: "maeshima soshi", role: "arrangement" }
  ],
  "198408:ED:1": [
    { name: "高岸遥", role: "lyrics" },
    { name: "高岸楓", role: "lyrics" },
    { name: "野崎良太", role: "composition" },
    { name: "野崎良太", role: "arrangement" }
  ],
  "183127:OP:1": [
    { name: "Ayumu Imazu", role: "lyrics" },
    { name: "Ayumu Imazu", role: "composition" },
    { name: "D&H (PURPLE NIGHT)", role: "composition" },
    { name: "Ayumu Imazu", role: "arrangement" },
    { name: "D&H (PURPLE NIGHT)", role: "arrangement" }
  ],
  "175035:ED:1": [
    { name: "山下達郎", role: "lyrics" },
    { name: "山下達郎", role: "composition" },
    { name: "山下達郎", role: "arrangement" }
  ],
  "181841:OP:1": [
    { name: "Furui Riho", role: "lyrics" },
    { name: "Furui Riho", role: "composition" },
    { name: "knoak", role: "arrangement" },
    { name: "Sayo Oyama", role: "arrangement" }
  ],
  "181841:ED:1": [
    { name: "TOMOO", role: "lyrics" },
    { name: "TOMOO", role: "composition" },
    { name: "Ryo Konishi", role: "arrangement" }
  ],
  "181841:ED:3": [
    { name: "Dámaso Pérez Prado", role: "composition" }
  ],
  "175124:OP:1": [
    { name: "吉井和哉", role: "lyrics" },
    { name: "菊地英昭", role: "composition" },
    { name: "THE YELLOW MONKEY", role: "arrangement" }
  ],
  "175124:ED:1": [
    { name: "KENTA", role: "lyrics" },
    { name: "KENTA", role: "composition" },
    { name: "WANIMA", role: "arrangement" }
  ],
  "179828:OP:1": [
    { name: "asmi", role: "lyrics" },
    { name: "asmi", role: "composition" },
    { name: "Taro Ishida", role: "arrangement" }
  ],
  "179828:ED:1": [
    { name: "秋元康", role: "lyrics" },
    { name: "中山翔吾", role: "composition" },
    { name: "中山翔吾", role: "arrangement" }
  ],
  "182309:OP:1": [
    { name: "湘南乃風", role: "lyrics" },
    { name: "yonkey", role: "lyrics" },
    { name: "新しい学校のリーダーズ", role: "lyrics" },
    { name: "湘南乃風", role: "composition" },
    { name: "yonkey", role: "composition" },
    { name: "湘南乃風", role: "arrangement" },
    { name: "yonkey", role: "arrangement" }
  ],
  "182309:ED:1": [
    { name: "Naoki Takada", role: "lyrics" },
    { name: "Naoki Takada", role: "composition" },
    { name: "Giz'Mo(from Jam9)", role: "composition" },
    { name: "Shintaro“Growth”Izutsu", role: "arrangement" }
  ],
  "184591:OP:1": [
    { name: "ナユタセイジ", role: "lyrics" },
    { name: "ナユタセイジ", role: "composition" },
    { name: "やしきん", role: "arrangement" }
  ],
  "184591:ED:1": [
    { name: "木下龍平", role: "lyrics" },
    { name: "木下龍平", role: "composition" },
    { name: "木下龍平", role: "arrangement" }
  ],
  "173780:OP:1": [
    { name: "LIN", role: "lyrics" },
    { name: "YUKI", role: "lyrics" },
    { name: "敬也-amazuti-", role: "composition" },
    { name: "GAK-amazuti-", role: "composition" },
    { name: "GAK-amazuti-", role: "arrangement" }
  ],
  "173780:ED:1": [
    { name: "藤川千愛", role: "lyrics" },
    { name: "竹田祐介(Elements Garden)", role: "composition" },
    { name: "竹田祐介(Elements Garden)", role: "arrangement" }
  ],
  "177880:OP:1": [
    { name: "m.c.A・T", role: "lyrics" },
    { name: "Tarcsi Zoltán Jolly", role: "composition" },
    { name: "Ha-ne(Relic Lyric, inc.)", role: "arrangement" }
  ],
  "177880:ED:1": [
    { name: "亀田誠治", role: "lyrics" },
    { name: "亀田誠治", role: "composition" },
    { name: "亀田誠治", role: "arrangement" }
  ],
  "151799:OP:1": [
    { name: "☆Taku Takahashi", role: "lyrics" },
    { name: "Ashley", role: "lyrics" },
    { name: "E.V.P", role: "lyrics" },
    { name: "TeddyLoid", role: "composition" },
    { name: "☆Taku Takahashi", role: "composition" },
    { name: "☆Taku Takahashi", role: "arrangement" },
    { name: "TeddyLoid", role: "arrangement" }
  ],
  "151799:ED:1": [
    { name: "VERBAL", role: "lyrics" },
    { name: "Adee A.", role: "lyrics" },
    { name: "☆Taku Takahashi", role: "composition" },
    { name: "Adee A.", role: "composition" },
    { name: "☆Taku Takahashi", role: "arrangement" },
    { name: "TAAR", role: "arrangement" },
    { name: "MONJOE", role: "arrangement" }
  ],
  "177887:OP:1": [
    { name: "鈴木麻実子", role: "lyrics" },
    { name: "久石譲", role: "composition" },
    { name: "戸田信子", role: "arrangement" },
    { name: "Robin Hoffmann", role: "arrangement" }
  ],
  "177887:ED:1": [
    { name: "鈴木麻実子", role: "lyrics" },
    { name: "久石譲", role: "composition" },
    { name: "戸田信子", role: "arrangement" },
    { name: "Robin Hoffmann", role: "arrangement" }
  ],
  "178090:OP:1": [
    { name: "安藤紗々", role: "lyrics" },
    { name: "光増ハジメ(FirstCall)", role: "composition" },
    { name: "光増ハジメ(FirstCall)", role: "arrangement" }
  ],
  "178090:ED:1": [
    { name: "喜介", role: "lyrics" },
    { name: "BOUNCEBACK（Blue Bird's Nest）", role: "composition" },
    { name: "倉内達矢", role: "arrangement" }
  ],
  "178886:OP:1": [
    { name: "くじら", role: "lyrics" },
    { name: "くじら", role: "composition" },
    { name: "くじら", role: "arrangement" }
  ],
  "178886:ED:1": [
    { name: "叶人", role: "lyrics" },
    { name: "藤井健太郎", role: "composition" },
    { name: "藤井健太郎", role: "arrangement" }
  ],
  "178886:ED:2": [
    { name: "叶人", role: "lyrics" },
    { name: "Meis Clauson", role: "composition" },
    { name: "Meis Clauson", role: "arrangement" }
  ],
  "178886:ED:3": [
    { name: "叶人", role: "lyrics" },
    { name: "藤井亮太", role: "composition" },
    { name: "谷ナオキ", role: "arrangement" }
  ],
  "185755:OP:1": [
    { name: "森いづみ", role: "lyrics" },
    { name: "森いづみ", role: "composition" },
    { name: "森いづみ", role: "arrangement" }
  ],
  "185755:ED:1": [
    { name: "大森元貴", role: "lyrics" },
    { name: "大森元貴", role: "composition" },
    { name: "森いづみ", role: "arrangement" }
  ],
  "184574:OP:1": [
    { name: "syudou", role: "lyrics" },
    { name: "syudou", role: "composition" },
    { name: "木内友軌", role: "arrangement" },
    { name: "花井諒", role: "arrangement" }
  ],
  "184574:ED:1": [
    { name: "椎乃味醂", role: "lyrics" },
    { name: "椎乃味醂", role: "composition" },
    { name: "椎乃味醂", role: "arrangement" },
    { name: "Aile The Shota", role: "arrangement" }
  ],
  "179879:OP:1": [
    { name: "内澤崇仁", role: "lyrics" },
    { name: "内澤崇仁", role: "composition" },
    { name: "内澤崇仁", role: "arrangement" }
  ],
  "179879:ED:1": [
    { name: "Guiano", role: "lyrics" },
    { name: "Guiano", role: "composition" },
    { name: "Guiano", role: "arrangement" }
  ],
  "186003:OP:1": [
    { name: "OSHIKIKEIGO", role: "lyrics" },
    { name: "OSHIKIKEIGO", role: "composition" },
    { name: "OSHIKIKEIGO", role: "arrangement" }
  ],
  "186003:ED:1": [
    { name: "Susumu Kawaguchi", role: "lyrics" },
    { name: "Shun Kusakawa", role: "lyrics" },
    { name: "Susumu Kawaguchi", role: "composition" },
    { name: "Shun Kusakawa", role: "composition" },
    { name: "Susumu Kawaguchi", role: "arrangement" }
  ],
  "184034:OP:1": [
    { name: "imase", role: "lyrics" },
    { name: "imase", role: "composition" },
    { name: "久保田真悟（Jazzin'park）", role: "arrangement" }
  ],
  "184034:ED:1": [
    { name: "Sunny", role: "lyrics" },
    { name: "NOA", role: "lyrics" },
    { name: "UTA", role: "composition" },
    { name: "Sunny", role: "composition" },
    { name: "NOA", role: "composition" }
  ],
  "157960:OP:1": [
    { name: "ちゃんみな", role: "lyrics" },
    { name: "ちゃんみな", role: "composition" },
    { name: "SLAY", role: "composition" },
    { name: "AVIN", role: "composition" },
    { name: "stevenc4stle", role: "composition" },
    { name: "Opro", role: "composition" },
    { name: "AVIN", role: "arrangement" },
    { name: "SLAY", role: "arrangement" },
    { name: "stevenc4stle", role: "arrangement" },
    { name: "Opro", role: "arrangement" }
  ],
  "157960:ED:1": [
    { name: "Rei", role: "lyrics" },
    { name: "Rei", role: "composition" },
    { name: "Newspeak", role: "arrangement" }
  ],
  "180929:OP:1": [
    { name: "安田レイ", role: "lyrics" },
    { name: "大濱健悟", role: "composition" },
    { name: "玉井健二", role: "arrangement" },
    { name: "南田健吾", role: "arrangement" }
  ],
  "180929:ED:1": [
    { name: "矢野水音", role: "lyrics" },
    { name: "宅見将典", role: "composition" },
    { name: "宅見将典", role: "arrangement" }
  ],
  "179966:OP:1": [
    { name: "塩塚モエカ", role: "lyrics" },
    { name: "塩塚モエカ", role: "composition" },
    { name: "羊文学", role: "arrangement" }
  ],
  "179966:ED:1": [
    { name: "塩塚モエカ", role: "lyrics" },
    { name: "塩塚モエカ", role: "composition" },
    { name: "羊文学", role: "arrangement" }
  ],
  "185519:OP:1": [
    { name: "ナカシマ", role: "lyrics" },
    { name: "ナカシマ", role: "composition" },
    { name: "おいしくるメロンパン", role: "arrangement" }
  ],
  "185519:ED:1": [
    { name: "三好啓太", role: "lyrics" },
    { name: "三好啓太", role: "composition" },
    { name: "三好啓太", role: "arrangement" }
  ],
  "177761:OP:1": [
    { name: "山口たこ（Crearts）", role: "lyrics" },
    { name: "堀江晶太", role: "composition" },
    { name: "堀江晶太", role: "arrangement" }
  ],
  "177761:ED:1": [
    { name: "山口たこ（Crearts）", role: "lyrics" },
    { name: "堀江晶太", role: "composition" },
    { name: "堀江晶太", role: "arrangement" }
  ],
  "180425:OP:1": [
    { name: "鈴木真海子", role: "lyrics" },
    { name: "鈴木真海子", role: "composition" },
    { name: "ryo takahashi", role: "composition" },
    { name: "ryo takahashi", role: "arrangement" }
  ],
  "180425:ED:1": [
    { name: "菅原圭", role: "lyrics" },
    { name: "菅原圭", role: "composition" },
    { name: "Naoki Itai", role: "arrangement" }
  ],
  "177175:OP:1": [
    { name: "ハヤシケイ（LIVE LAB.）", role: "lyrics" },
    { name: "ReoNa", role: "lyrics" },
    { name: "rui（fade）", role: "lyrics" },
    { name: "rui（fade）", role: "composition" },
    { name: "堀江晶太", role: "arrangement" },
    { name: "宮野幸子（SHANGRI-LA INC.）", role: "arrangement" }
  ],
  "177175:ED:1": [
    { name: "糸奇はな", role: "lyrics" },
    { name: "糸奇はな", role: "composition" },
    { name: "兼松 衆", role: "arrangement" }
  ],
  "177175:ED:2": [
    { name: "傘村トータ（LIVE LAB.）", role: "lyrics" },
    { name: "傘村トータ（LIVE LAB.）", role: "composition" },
    { name: "宮野幸子（SHANGRI-LA INC.）", role: "arrangement" }
  ],
  "181444:OP:1": [
    { name: "キタニタツヤ", role: "lyrics" },
    { name: "キタニタツヤ", role: "composition" },
    { name: "キタニタツヤ", role: "arrangement" }
  ],
  "181444:ED:1": [
    { name: "汐れいら", role: "lyrics" },
    { name: "汐れいら", role: "composition" },
    { name: "上口浩平", role: "arrangement" }
  ],
  "178025:OP:1": [
    { name: "KAITO", role: "lyrics" },
    { name: "DAIDAI", role: "composition" },
    { name: "DAIDAI", role: "arrangement" }
  ],
  "178025:OP:2": [
    { name: "syudou", role: "lyrics" },
    { name: "Mori Calliope", role: "lyrics" },
    { name: "syudou", role: "composition" },
    { name: "syudou", role: "arrangement" }
  ],
  "178025:ED:1": [
    { name: "Misumi", role: "lyrics" },
    { name: "Misumi", role: "composition" },
    { name: "Misumi", role: "arrangement" }
  ],
  "178025:ED:2": [
    { name: "雄大", role: "lyrics" },
    { name: "雄大", role: "composition" },
    { name: "カラノア", role: "arrangement" },
    { name: "永田涼司", role: "arrangement" }
  ],
  "184237:OP:1": [
    { name: "内田怜央", role: "lyrics" },
    { name: "Kroi", role: "composition" },
    { name: "Kroi", role: "arrangement" }
  ],
  "184237:ED:1": [
    { name: "牧達弥", role: "lyrics" },
    { name: "牧達弥", role: "composition" },
    { name: "go!go!vanillas", role: "arrangement" },
    { name: "井上惇志(showmore)", role: "arrangement" }
  ],
  "185660:OP:1": [
    { name: "アイナ・ジ・エンド", role: "lyrics" },
    { name: "Shin Sakiura", role: "lyrics" },
    { name: "アイナ・ジ・エンド", role: "composition" },
    { name: "Shin Sakiura", role: "composition" },
    { name: "Shin Sakiura", role: "arrangement" }
  ],
  "185660:ED:1": [
    { name: "WurtS", role: "lyrics" },
    { name: "WurtS", role: "composition" },
    { name: "WurtS", role: "arrangement" },
    { name: "Singo Kubota［Jazzin'park］", role: "arrangement" }
  ],
  "177689:OP:1": [
    { name: "Vaundy", role: "lyrics" },
    { name: "Vaundy", role: "composition" },
    { name: "Vaundy", role: "arrangement" }
  ],
  "177689:ED:1": [
    { name: "TOOBOE", role: "lyrics" },
    { name: "TOOBOE", role: "composition" },
    { name: "TOOBOE", role: "arrangement" }
  ],
  "178754:OP:1": [
    { name: "AURORA", role: "songwriting" },
    { name: "Fredrik Svabø", role: "songwriting" }
  ],
  "178754:ED:1": [
    { name: "Ryan Tedder", role: "songwriting" },
    { name: "Brent Kutzle", role: "songwriting" },
    { name: "Josh Varnadore", role: "songwriting" },
    { name: "Jeff Owen", role: "songwriting" },
    { name: "Tyler Spry", role: "songwriting" }
  ],
  "185407:OP:1": [
    { name: "あの", role: "lyrics" },
    { name: "あの", role: "composition" },
    { name: "TAKU INOUE", role: "arrangement" }
  ],
  "185407:ED:1": [
    { name: "谷口喜多朗", role: "lyrics" },
    { name: "谷口喜多朗", role: "composition" },
    { name: "谷口喜多朗", role: "arrangement" }
  ],
  "186043:ED:1": [
    { name: "星野源", role: "lyrics" },
    { name: "星野源", role: "composition" },
    { name: "星野源", role: "arrangement" }
  ],
  "189117:OP:1": [
    { name: "谷口鮪", role: "lyrics" },
    { name: "谷口鮪", role: "composition" },
    { name: "KANA-BOON", role: "arrangement" }
  ],
  "189117:ED:1": [
    { name: "音羽-otoha-", role: "lyrics" },
    { name: "音羽-otoha-", role: "composition" },
    { name: "音羽-otoha-", role: "arrangement" },
    { name: "赤山コウ", role: "arrangement" }
  ],
  "195209:OP:1": [
    { name: "鷲尾伶菜", role: "lyrics" },
    { name: "Kristi", role: "lyrics" },
    { name: "中山翔吾", role: "lyrics" },
    { name: "中山翔吾", role: "composition" },
    { name: "中山翔吾", role: "arrangement" }
  ],
  "195209:ED:1": [
    { name: "Nonpy", role: "lyrics" },
    { name: "Nonpy", role: "composition" },
    { name: "Shuya Masayoshi", role: "composition" },
    { name: "Shuya Masayoshi", role: "arrangement" }
  ],
  "193238:ED:1": [
    { name: "星部ショウ", role: "lyrics" },
    { name: "星部ショウ", role: "composition" },
    { name: "星部ショウ", role: "arrangement" }
  ],
  "135865:OP:1": [
    { name: "MYTH & ROID", role: "lyrics" },
    { name: "MYTH & ROID", role: "composition" },
    { name: "MYTH & ROID", role: "arrangement" }
  ],
  "135865:ED:1": [
    { name: "hotaru", role: "lyrics" },
    { name: "中野雅之", role: "composition" },
    { name: "中野雅之", role: "arrangement" }
  ],
  "178789:ED:1": [
    { name: "シノダ", role: "lyrics" },
    { name: "シノダ", role: "composition" }
  ]
};

const linkOverrides: Record<string, PublicExternalLink[]> = {
  "185753:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://avex.lnk.to/TIMELESSPOWERFULL",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1875142987",
    linkType: "direct_track",
    region: "TW"
  }],
  "185753:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://avex.lnk.to/MF3_edfull",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1872060415",
    linkType: "direct_track",
    region: "TW"
  }],
  "187264:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://cover.lnk.to/kWY400",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1863610138",
    linkType: "direct_track",
    region: "TW"
  }],
  "187264:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://bnml.lnk.to/6jnFr4CZ",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1858500631",
    linkType: "direct_track",
    region: "TW"
  }],
  "178005:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tamon-anime.lnk.to/SweetMagic",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1860466124",
    linkType: "direct_track",
    region: "TW"
  }],
  "178005:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tamon-animate.lnk.to/HanatoYume",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1860466031",
    linkType: "direct_track",
    region: "TW"
  }],
  "178005:ED:2": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tamon-animate.lnk.to/RAIN",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1869010808",
    linkType: "direct_track",
    region: "TW"
  }],
  "167152:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://spyair.lnk.to/IbfG7f",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/kill-the-noise/1863580179?i=1863580182",
    linkType: "direct_track",
    region: "TW"
  }],
  "198720:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://fwinc.lnk.to/Cd0LFp",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/blacker-co-ltd/1870506510?i=1870506513",
    linkType: "direct_track",
    region: "TW"
  }],
  "198720:ED:1": [{
    platform: "TuneCore Japan",
    label: "官方跨平台數位發行頁",
    url: "https://linkco.re/V16FShUV",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/elegy-of-the-enemies/1862389731?i=1862389732",
    linkType: "direct_track",
    region: "TW"
  }],
  "197731:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://laglean.lnk.to/GOPARA",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/go-go-paradise/1854314594?i=1854314684",
    linkType: "direct_track",
    region: "TW"
  }],
  "197731:ED:1": [{
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/%E6%98%8E%E6%97%A5%E5%A4%A9%E6%B0%97%E3%81%AB%E3%81%AA%E3%81%81%E3%82%8C/1856530836?i=1856530837",
    linkType: "direct_track",
    region: "TW"
  }],
  "195322:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://threee.lnk.to/cth",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/catch/1862662169?i=1862662591",
    linkType: "direct_track",
    region: "TW"
  }],
  "195322:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://erj.lnk.to/i7vHwW",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/%E3%83%9F%E3%82%B9-%E3%83%A6%E3%83%BC/1859601190?i=1859601193",
    linkType: "direct_track",
    region: "TW"
  }],
  "177385:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tomoo.lnk.to/sonare",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/sonare/1862338474",
    linkType: "direct_track",
    region: "TW"
  }],
  "177385:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://bialystocks.lnk.to/kotodute",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/kotozute/1860510461",
    linkType: "direct_track",
    region: "TW"
  }],
  "166521:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://lnk.to/GoldenHorizon",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1842061212",
    linkType: "direct_track",
    region: "TW"
  }],
  "166521:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://ken-yokoyama.lnk.to/theballad",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1861402066",
    linkType: "direct_track",
    region: "TW"
  }],
  "194028:OP:1": [{
    platform: "FlyingDog",
    label: "官方串流平台頁",
    url: "https://www.jvcmusic.co.jp/-/Streaming/VE3WT-12194/A/1.html",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1860787388",
    linkType: "direct_track",
    region: "TW"
  }],
  "194028:ED:1": [{
    platform: "FlyingDog",
    label: "官方串流平台頁",
    url: "https://www.jvcmusic.co.jp/-/Streaming/VE3WT-12206/A/1.html",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1860787616",
    linkType: "direct_track",
    region: "TW"
  }],
  "172463:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://kinggnu.lnk.to/AIZO",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1860538548",
    linkType: "direct_track",
    region: "TW"
  }],
  "172463:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://jo0ji.lnk.to/Yoakenouta",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1860793850",
    linkType: "direct_track",
    region: "TW"
  }],
  "166613:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tatsuya-kitani.lnk.to/KasukanaHana",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1866806793",
    linkType: "direct_track",
    region: "TW"
  }],
  "166613:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://queenbee.lnk.to/PERSONAL",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1864160080",
    linkType: "direct_track",
    region: "TW"
  }],
  "163144:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tf.lnk.to/PicaresqueHero",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1889745515",
    linkType: "direct_track",
    region: "TW"
  }],
  "163144:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tf.lnk.to/fomare_stardust",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1859576625",
    linkType: "direct_track",
    region: "TW"
  }],
  "166617:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://nzk.lnk.to/PROVANT_DG",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1858500507",
    linkType: "direct_track",
    region: "TW"
  }],
  "166617:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://13-3g.lnk.to/UnseenAi",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1863631438",
    linkType: "direct_track",
    region: "TW"
  }],
  "189275:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://hana-brave.lnk.to/Cold_Night_DG",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/cold-night-single/1867687784?i=1867687787",
    linkType: "direct_track",
    region: "TW"
  }],
  "189275:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://contoncandy.lnk.to/Rookies",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1867415955",
    linkType: "direct_track",
    region: "TW"
  }],
  "177679:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://hgdn.lnk.to/Make_Me_Wonder",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1860741263",
    linkType: "direct_track",
    region: "TW"
  }],
  "177679:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://lnk.to/ako_Turn_It_Up",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1864085295",
    linkType: "direct_track",
    region: "TW"
  }],
  "180746:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://lin-mdkd.lnk.to/Ersterbend",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/ersterbend/1861647816?i=1861647817",
    linkType: "direct_track",
    region: "TW"
  }],
  "180746:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://chiaifujikawa.lnk.to/Inori",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/inori/1861647375?i=1861647376",
    linkType: "direct_track",
    region: "TW"
  }],
  "177580:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://lnk.to/yoasobi-adrena",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/%E3%82%A2%E3%83%89%E3%83%AC%E3%83%8A/1861370948?i=1861370949",
    linkType: "direct_track",
    region: "TW"
  }],
  "177580:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://lnk.to/yoasobi-baby",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/baby/1861370983?i=1861370984",
    linkType: "direct_track",
    region: "TW"
  }],
  "185514:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://rosu.lnk.to/diary",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/wizards-diary/1864141780?i=1864141796",
    linkType: "direct_track",
    region: "TW"
  }],
  "185514:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://msooja.lnk.to/justyou",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/just-you/1863324174?i=1863324343",
    linkType: "direct_track",
    region: "TW"
  }],
  "182255:OP:1": [{
    platform: "Universal Music",
    label: "官方跨平台數位發行頁",
    url: "https://lnk.to/MGA_lulu_0112",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/lulu/1867354077?i=1867354081",
    linkType: "direct_track",
    region: "TW"
  }],
  "182255:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://milet.lnk.to/TheStoryofUs",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/the-story-of-us/1863631186?i=1863631485",
    linkType: "direct_track",
    region: "TW"
  }],
  "182255:ED:2": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://milet.lnk.to/TheStoryofUs_SG",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/trace/1878095288?i=1878095294",
    linkType: "direct_track",
    region: "TW"
  }],
  "182587:OP:1": [{
    platform: "NO LABEL MUSIC",
    label: "官方跨平台數位發行頁",
    url: "https://nolabel.lnk.to/TEST_ME",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/test-me/1866862251?i=1866862252",
    linkType: "direct_track",
    region: "TW"
  }],
  "182587:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://natori.lnk.to/Serenade",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/%E3%82%BB%E3%83%AC%E3%83%8A%E3%83%BC%E3%83%87/1871971722?i=1871971723",
    linkType: "direct_track",
    region: "TW"
  }, {
    platform: "Sony Music",
    label: "官方實體單曲訂購頁",
    url: "https://natori.lnk.to/Serenade_PKG",
    linkType: "physical_purchase",
    region: "JP"
  }],
  "204698:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tomiokaai.lnk.to/delulu",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/delulu/1834861290?i=1834861291",
    linkType: "direct_track",
    region: "TW"
  }],
  "205772:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://is-sue.lnk.to/QUARTET_AL",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/telepathy/1891308308?i=1891308582",
    linkType: "direct_track",
    region: "TW"
  }],
  "206950:OP:1": [{
    platform: "Linkfire",
    label: "官方跨平台發行頁",
    url: "https://lnk.to/dj_kw",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/album/konnichi-world/1736250595?i=1736250600",
    linkType: "direct_track",
    region: "TW"
  }],
  "198411:ED:1": [{
    platform: "avex",
    label: "官方跨平台發行頁",
    url: "https://tokyoska.lnk.to/GoodLuckMyFriend",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "204269:ED:1": [{
    platform: "NexTone.Link",
    label: "官方跨平台發行頁",
    url: "https://nex-tone.link/hpkxzLKJF",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "202386:ED:1": [{
    platform: "Storm Labels",
    label: "官方數位發行頁",
    url: "https://heysayjump.lnk.to/CCC",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "181867:OP:1": [{
    platform: "Apple Music",
    label: "Apple Music 官方歌曲頁",
    url: "https://music.apple.com/jp/song/1715232588",
    linkType: "direct_track",
    region: "JP"
  }],
  "199486:OP:1": [{
    platform: "TuneCore Japan",
    label: "官方數位發行頁",
    url: "https://linkco.re/R8VfCUUr",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "159483:OP:1": [{
    platform: "Pony Canyon",
    label: "官方數位發行頁",
    url: "https://lnk.to/Hyakunichisou",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "159483:OP:2": [{
    platform: "Pony Canyon",
    label: "官方角色歌專輯發行頁",
    url: "https://lnk.to/SideProject03",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "159483:ED:1": [{
    platform: "Pony Canyon",
    label: "官方數位發行頁",
    url: "https://taiyotsukiyo.lnk.to/moshimo",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "159483:ED:2": [{
    platform: "Pony Canyon",
    label: "官方數位發行頁",
    url: "https://lnk.to/Q.I.S._flashback",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "159483:ED:3": [{
    platform: "Pony Canyon",
    label: "官方數位發行頁",
    url: "https://lnk.to/sincerityflower",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "159483:ED:4": [{
    platform: "Pony Canyon",
    label: "官方數位發行頁",
    url: "https://lnk.to/Strikefreedom",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "159483:ED:5": [{
    platform: "Pony Canyon",
    label: "官方數位發行頁",
    url: "https://lnk.to/natsunosumika",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:OP:1": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/Morfonica_FD_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:1": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/PoppinParty_DYH_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:2": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/Roselia_VF_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:3": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/MyGO_PG_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:4": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/Morfonica_CoU_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:5": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/HHW_SM_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:6": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/PastelPalettes_SC_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:7": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/yumemita_MY_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:8": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/RAS_FA_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:9": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/Afterglow_PotL_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "191994:ED:10": [{
    platform: "Bushiroad Music",
    label: "官方 TV Size 數位發行頁",
    url: "https://bmu.lnk.to/AveMujica_Stw_TVwe",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "169420:OP:1": [{
    platform: "Universal Music Japan",
    label: "官方數位發行頁",
    url: "https://yuika.lnk.to/yuureiWE",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "169420:OP:2": [{
    platform: "Universal Music Japan",
    label: "官方數位發行頁",
    url: "https://www.universal-music.co.jp/shallm/products/uv1as-02043/",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "169420:ED:1": [{
    platform: "PEDRO",
    label: "官方數位發行頁",
    url: "https://lnk.to/PEDRO_love",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "169420:ED:2": [{
    platform: "Cloud Nine",
    label: "官方數位發行頁",
    url: "https://hirate-yurina.lnk.to/menheraPR",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "188138:OP:1": [{
    platform: "Pony Canyon",
    label: "官方 OP／ED 數位發行頁",
    url: "https://lnk.to/boueibuhaikara_OPED",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "188138:ED:1": [{
    platform: "Pony Canyon",
    label: "官方 OP／ED 數位發行頁",
    url: "https://lnk.to/boueibuhaikara_OPED",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:OP:1": [{
    platform: "PHENOMENON RECORD",
    label: "官方數位發行頁",
    url: "https://phenomenon-record.lnk.to/DIVA",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:1": [{
    platform: "PHENOMENON RECORD",
    label: "官方數位發行頁",
    url: "https://phenomenon-record.lnk.to/Chase-the-Day",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:2": [{
    platform: "ZULA",
    label: "官方數位發行頁",
    url: "https://zula.link-map.jp/links/BREATHE",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:3": [{
    platform: "ZULA",
    label: "官方數位發行頁",
    url: "https://zula.link-map.jp/links/rim_insight",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:4": [{
    platform: "ZULA",
    label: "官方數位發行頁",
    url: "https://zula.link-map.jp/links/pVFdguRj",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:5": [{
    platform: "ZULA",
    label: "官方數位發行頁",
    url: "https://zula.link-map.jp/links/_E2vuTUi",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:6": [{
    platform: "PHENOMENON RECORD",
    label: "官方數位發行頁",
    url: "https://phenomenon-record.lnk.to/Unraveling",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:7": [{
    platform: "ZULA",
    label: "官方數位發行頁",
    url: "https://zula.link-map.jp/links/rimkoko-insightrearr",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:8": [{
    platform: "ZULA",
    label: "官方數位發行頁",
    url: "https://zula.link-map.jp/links/BREATHE_RE",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:9": [{
    platform: "PHENOMENON RECORD",
    label: "官方專輯發行頁",
    url: "https://phenomenon-record.lnk.to/Awakening",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:10": [{
    platform: "V.W.P",
    label: "官方藝人發行頁",
    url: "https://vwp.lnk.to/artist",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173335:ED:11": [{
    platform: "PHENOMENON RECORD",
    label: "官方數位發行頁",
    url: "https://phenomenon-record.lnk.to/Witchtruesinkaver",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "171046:OP:1": [{
    platform: "Sony Music Labels",
    label: "官方數位發行頁",
    url: "https://contoncandy.lnk.to/SnowDrop",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "171046:ED:1": [{
    platform: "Aniplex",
    label: "卯月版本官方數位發行頁",
    url: "https://anxmusic.lnk.to/hUQqCz",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "171046:ED:2": [{
    platform: "Aniplex",
    label: "郁實版本官方數位發行頁",
    url: "https://anxmusic.lnk.to/oi6iCN",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "171046:ED:3": [{
    platform: "Aniplex",
    label: "紗良版本官方數位發行頁",
    url: "https://anxmusic.lnk.to/PvaXSM",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "171046:ED:4": [{
    platform: "Apple Music",
    label: "霧島透子版本數位單曲",
    url: "https://music.apple.com/hk/album/%E6%B0%B4%E5%B9%B3%E7%B7%9A%E3%81%AF%E5%83%95%E3%81%AE%E5%8F%A4%E5%82%B7-%E9%9C%A7%E5%B3%B6%E9%80%8F%E5%AD%90-short-ver-single/1836081218",
    linkType: "direct_album",
    region: "HK"
  }],
  "171046:ED:5": [{
    platform: "Aniplex",
    label: "寧寧版本官方數位發行頁",
    url: "https://anxmusic.lnk.to/Khxatu",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "171046:ED:6": [{
    platform: "Aniplex",
    label: "官方原聲帶曲目頁",
    url: "https://ao-buta.com/santa/music/ost.html",
    linkType: "direct_album",
    region: "JP"
  }],
  "155838:OP:1": [{
    platform: "Victor Entertainment",
    label: "官方發行頁",
    url: "https://www.jvcmusic.co.jp/-/Linkall/VE3WT-11789.html",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "155838:ED:1": [{
    platform: "Warner Music Japan",
    label: "官方發行頁",
    url: "https://mahirucoda.lnk.to/her",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178869:OP:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/A00196082",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "178869:ED:1": [{
    platform: "Universal Music",
    label: "官方發行頁",
    url: "https://elliegoulding.lnk.to/destiny",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "187387:OP:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://who-yaextended.lnk.to/CRYOUTCRYOVER",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "187387:ED:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://9lana.lnk.to/TURN_OVERWN",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "169440:OP:1": [{
    platform: "BRADIO",
    label: "官方專輯與配信頁",
    url: "https://lnk.to/funkfire",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "169440:ED:1": [{
    platform: "Apple Music",
    label: "官方數位單曲",
    url: "https://music.apple.com/jp/album/my-own-horizon-single/1834061522",
    linkType: "direct_album",
    region: "JP"
  }],
  "185505:OP:1": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://ryushen.lnk.to/kakushoronWE",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185505:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/A00195170",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "186052:OP:1": [{
    platform: "Apple Music",
    label: "官方數位單曲",
    url: "https://music.apple.com/jp/song/1825825583",
    linkType: "direct_track",
    region: "JP"
  }],
  "186052:ED:1": [{
    platform: "Universal Music Japan",
    label: "官方數位單曲頁",
    url: "https://www.universal-music.co.jp/misaki/products/uk1as-03272/",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "178675:OP:1": [{
    platform: "King Records",
    label: "官方專輯與配信頁",
    url: "https://tenrogun.lnk.to/KING_OF_EVIL",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178675:ED:1": [{
    platform: "King Records",
    label: "官方專輯與配信頁",
    url: "https://tenrogun.lnk.to/KING_OF_EVIL",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178675:ED:2": [{
    platform: "King Records",
    label: "官方專輯與配信頁",
    url: "https://tenrogun.lnk.to/KING_OF_EVIL",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178433:OP:1": [{
    platform: "Lantis",
    label: "官方數位單曲配信頁",
    url: "https://lnk.to/LZC-3126",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178433:ED:1": [{
    platform: "Apple Music",
    label: "官方數位單曲",
    url: "https://music.apple.com/jp/album/more-than-w-single/1818305545",
    linkType: "direct_album",
    region: "JP"
  }],
  "189326:OP:1": [{
    platform: "Pony Canyon",
    label: "官方發行頁",
    url: "https://014014.lnk.to/kagomekagome",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "189326:ED:1": [{
    platform: "Pony Canyon",
    label: "官方發行頁",
    url: "https://kitoakari.lnk.to/moment",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "170113:OP:1": [{
    platform: "King Records",
    label: "官方發行頁",
    url: "https://ami-maeshima.lnk.to/1stSG-Wishforyou",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "170113:ED:1": [{
    platform: "King Records",
    label: "官方專輯與配信頁",
    url: "https://okasakimiho.lnk.to/SHAKING",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180460:OP:1": [{
    platform: "Sony Music",
    label: "官方數位單曲配信頁",
    url: "https://okazakitaiiku.lnk.to/Suffer",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180460:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方數位單曲配信頁",
    url: "https://nex-tone.link/aykGS4DGu",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180460:ED:2": [{
    platform: "KADOKAWA",
    label: "官方原聲帶與配信頁",
    url: "https://lnk.to/sD0agp",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "189069:OP:1": [{
    platform: "Sony Music",
    label: "官方數位配信頁",
    url: "https://lgp.lnk.to/Gingakeimade",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "189069:OP:2": [{
    platform: "Lantis",
    label: "官方數位單曲配信頁",
    url: "https://lnk.to/LZC-3263",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185544:OP:1": [{
    platform: "Dannie May",
    label: "官方數位單曲配信頁",
    url: "https://dannie.lnk.to/Unique",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185544:ED:1": [{
    platform: "Apple Music",
    label: "官方數位單曲",
    url: "https://music.apple.com/jp/album/%E3%81%BE%E3%81%94%E3%81%93%E3%82%8D-my-heart-single/1822948921",
    linkType: "direct_album",
    region: "JP"
  }],
  "186561:OP:1": [{
    platform: "Pony Canyon",
    label: "官方數位單曲配信頁",
    url: "https://lnk.to/TendenBarabara",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "186561:ED:1": [{
    platform: "Pony Canyon",
    label: "官方數位單曲配信頁",
    url: "https://lnk.to/PocketMoment",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180794:OP:1": [{
    platform: "NexTone LinkCore",
    label: "官方 OP／ED 數位配信頁",
    url: "https://nex-tone.link/hVcyQjV8s",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180794:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方 OP／ED 數位配信頁",
    url: "https://nex-tone.link/hVcyQjV8s",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "196229:OP:1": [{
    platform: "Takara Tomy",
    label: "官方主題曲與播出資料",
    url: "https://www.takaratomy.co.jp/products/tomica/jobraver/anime/broadcast/",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "179885:OP:1": [{
    platform: "Avex",
    label: "官方單曲與數位配信頁",
    url: "https://avex.lnk.to/gakutokajiwara",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179885:ED:1": [{
    platform: "Lantis",
    label: "官方數位單曲配信頁",
    url: "https://lnk.to/LZC-3151",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179678:OP:1": [{
    platform: "CRIMZON",
    label: "官方發行頁",
    url: "https://zigzag.lnk.to/P0WER-AkuryoTaisan-",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179678:ED:1": [{
    platform: "A.S.A.B",
    label: "官方發行頁",
    url: "https://asab.lnk.to/CB_himawari",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "193883:OP:1": [{
    platform: "Warner Music Japan",
    label: "官方發行頁",
    url: "https://wed-camp.lnk.to/monsterisland",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "156395:OP:1": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://tws.lnk.to/bloomWE",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "156395:ED:1": [{
    platform: "VAP",
    label: "官方發行頁",
    url: "https://vap.lnk.to/souvenir",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177474:OP:1": [{
    platform: "THE ORAL CIGARETTES",
    label: "官方發行頁",
    url: "https://oral.lnk.to/OVERNIGHTPR",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177474:OP:2": [{
    platform: "超学生",
    label: "官方發行頁",
    url: "https://lnk.to/chogakusei_amidakuji",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177474:ED:1": [{
    platform: "BAND-MAID",
    label: "官方發行頁",
    url: "https://band-maid.lnk.to/What_is_justice",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177474:ED:2": [{
    platform: "Pony Canyon",
    label: "官方發行頁",
    url: "https://eill.lnk.to/ACTION",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185965:OP:1": [{
    platform: "Pony Canyon",
    label: "官方發行頁",
    url: "https://lnk.to/akarihatooku",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185965:OP:2": [{
    platform: "LDH",
    label: "官方發行頁",
    url: "https://lnk.to/FUTARIDEIYOUKA",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185965:ED:1": [{
    platform: "Pony Canyon",
    label: "官方發行頁",
    url: "https://014014.lnk.to/futaricamp",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "198745:OP:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/A00197639",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "198745:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/A00197640",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "194088:ED:1": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://naoto.lnk.to/Doubt",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "166215:OP:1": [{
    platform: "Apple Music",
    label: "官方單曲音源",
    url: "https://music.apple.com/jp/song/1820353512",
    linkType: "direct_track",
    region: "JP"
  }],
  "175914:OP:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://smar.lnk.to/Mirage",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "175914:ED:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://smar.lnk.to/Nemure",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "175914:ED:2": [{
    platform: "Sony Music Labels",
    label: "Sony Music 官方數位單曲頁",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/discography/buy/AIXX01411B01A",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "179344:OP:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://claris.lnk.to/Umitsuki",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179344:ED:1": [{
    platform: "Ki/oon Music",
    label: "官方發行頁",
    url: "https://kmu.lnk.to/MyDearVega",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "183128:OP:1": [{
    platform: "A-Sketch",
    label: "官方發行頁",
    url: "https://keinasuda.lnk.to/rubble",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "183128:ED:1": [{
    platform: "A-Sketch",
    label: "官方發行頁",
    url: "https://a-sketch-inc.lnk.to/Daiki_Yamashita_x_Tasuku_Hatanaka_bitansan_adolescence",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "198408:ED:1": [{
    platform: "TuneCore Japan",
    label: "官方發行頁",
    url: "https://linkco.re/GD9S5SCP",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "183127:OP:1": [{
    platform: "Warner Music Japan",
    label: "官方發行頁",
    url: "https://ayumu.lnk.to/HOWL",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "175035:ED:1": [{
    platform: "Warner Music Japan",
    label: "官方發行頁",
    url: "https://tatsuroyamashita.lnk.to/ONMTPISLNDPu",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "181841:OP:1": [{
    platform: "Pony Canyon",
    label: "官方發行頁",
    url: "https://furuiriho.lnk.to/hello",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "181841:ED:1": [{
    platform: "Pony Canyon",
    label: "官方發行頁",
    url: "https://tomoo.lnk.to/LUCKY",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "175124:OP:1": [{
    platform: "Warner Music Japan",
    label: "官方發行頁",
    url: "https://tym.lnk.to/catcity",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "175124:ED:1": [{
    platform: "Warner Music Japan",
    label: "官方發行頁",
    url: "https://wanima.lnk.to/matatabi",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179828:OP:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://asmi.lnk.to/AllYouGaveMeWN",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179828:ED:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://227.lnk.to/Anatadenakucha",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "182309:OP:1": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://snkz.lnk.to/sstw_fullsz",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "182309:ED:1": [{
    platform: "avex pictures",
    label: "官方發行頁",
    url: "https://avex.lnk.to/GB2_ED",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "184591:OP:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://nanaoakari.lnk.to/wPOGAC",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "184591:ED:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://philosophynodance.lnk.to/Mayocchauwa",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173780:OP:1": [{
    platform: "Nippon Columbia",
    label: "官方發行頁",
    url: "https://mdkd.lnk.to/Resolution",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "173780:ED:1": [{
    platform: "Nippon Columbia",
    label: "官方發行頁",
    url: "https://chiaifujikawa.lnk.to/eien",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177880:OP:1": [{
    platform: "avex music creative",
    label: "官方發行頁",
    url: "https://dapump.lnk.to/stdl_back2daunity",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177880:ED:1": [{
    platform: "avex pictures",
    label: "官方發行頁",
    url: "https://avex.lnk.to/oso4_ED",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "151799:OP:1": [{
    platform: "FlyingDog",
    label: "官方發行頁",
    url: "https://jvcmusic.lnk.to/EP_themeofnew_pantystocking_pre",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "151799:ED:1": [{
    platform: "FlyingDog",
    label: "官方發行頁",
    url: "https://jvcmusic.lnk.to/EP_themeofnew_pantystocking_pre",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177887:OP:1": [{
    platform: "Apple Music",
    label: "Netflix Music 官方原聲帶",
    url: "https://music.apple.com/us/album/leviathan-soundtrack-from-the-netflix-series/1821632011",
    linkType: "direct_album",
    region: "GLOBAL"
  }],
  "177887:ED:1": [{
    platform: "Apple Music",
    label: "Netflix Music 官方原聲帶",
    url: "https://music.apple.com/us/album/leviathan-soundtrack-from-the-netflix-series/1821632011",
    linkType: "direct_album",
    region: "GLOBAL"
  }],
  "178090:OP:1": [{
    platform: "Lantis",
    label: "Lantis 官方配信頁",
    url: "https://lnk.to/LZC-3127",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178090:ED:1": [{
    platform: "Lantis",
    label: "Lantis 官方配信頁",
    url: "https://lnk.to/LACM-24706d",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178886:OP:1": [{
    platform: "日曜日のメゾンデ",
    label: "官方配信頁",
    url: "https://orcd.co/nichimezo_miracle",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178886:ED:1": [{
    platform: "Aniplex",
    label: "官方角色歌曲專輯",
    url: "https://online.aniplex.co.jp/itemoXHmEHFY.html",
    linkType: "direct_album",
    region: "JP"
  }],
  "178886:ED:2": [{
    platform: "Aniplex",
    label: "官方角色歌曲專輯",
    url: "https://online.aniplex.co.jp/itemoXHmEHFY.html",
    linkType: "direct_album",
    region: "JP"
  }],
  "178886:ED:3": [{
    platform: "Aniplex",
    label: "官方角色歌曲專輯",
    url: "https://online.aniplex.co.jp/itemoXHmEHFY.html",
    linkType: "direct_album",
    region: "JP"
  }],
  "189117:OP:1": [{
    platform: "Ki/oon Music",
    label: "官方配信頁",
    url: "https://kmu.lnk.to/SUPERNOVA",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "189117:ED:1": [{
    platform: "音羽-otoha-",
    label: "官方唱片頁",
    url: "https://otohaofficial.com/musics/19736",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "195209:OP:1": [{
    platform: "Apple Music",
    label: "官方單曲",
    url: "https://music.apple.com/jp/song/1822186335",
    linkType: "direct_track",
    region: "JP"
  }],
  "195209:ED:1": [{
    platform: "Apple Music",
    label: "官方單曲",
    url: "https://music.apple.com/jp/song/1821600576",
    linkType: "direct_track",
    region: "JP"
  }],
  "185755:OP:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/nXrVJW3Ar",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "185755:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/WMXKNMN8J",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "184574:OP:1": [{
    platform: "syudou",
    label: "官方發行頁",
    url: "https://syudou.lnk.to/kamidanomi",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "184574:ED:1": [{
    platform: "FAVES",
    label: "官方發行頁",
    url: "https://orcd.co/sheenomirin_harmony",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179879:OP:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://krage.lnk.to/cIqazD",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179879:ED:1": [{
    platform: "Sony Music Labels",
    label: "官方發行頁",
    url: "https://myuk.lnk.to/DearMarie",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "186003:OP:1": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://oshikikeigo.lnk.to/Maillard",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "186003:ED:1": [{
    platform: "LAPONE ENTERTAINMENT / Universal Music",
    label: "官方發行頁",
    url: "https://dxteen.com/news/detail/1289",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "184034:OP:1": [{
    platform: "Universal Music / Virgin Music",
    label: "官方發行頁",
    url: "https://imase.lnk.to/mr_moonlightPR",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "184034:ED:1": [{
    platform: "Universal Music / Virgin Music",
    label: "官方發行頁",
    url: "https://noa.lnk.to/merrygoroundPR",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "157960:OP:1": [{
    platform: "NO LABEL MUSIC / Sony Music Labels",
    label: "官方發行頁",
    url: "https://nolabel.lnk.to/WORKHARD",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "157960:ED:1": [{
    platform: "Warner Music Japan",
    label: "官方發行頁",
    url: "https://newspeakjp.lnk.to/GlassDoorPu",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180929:OP:1": [{
    platform: "SACRA MUSIC",
    label: "官方發行頁",
    url: "https://reiyasuda.lnk.to/hikarinosumika",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180929:ED:1": [{
    platform: "Sony Music Associated Records",
    label: "官方發行頁",
    url: "https://smar.lnk.to/XnLtN8",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179966:OP:1": [{
    platform: "F.C.L.S. / Sony Music Labels",
    label: "官方發行頁",
    url: "https://hitsujibungaku.lnk.to/Feel_milddays",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "179966:ED:1": [{
    platform: "F.C.L.S. / Sony Music Labels",
    label: "官方發行頁",
    url: "https://hitsujibungaku.lnk.to/Feel_milddays",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185519:OP:1": [{
    platform: "TOY'S FACTORY",
    label: "官方發行頁",
    url: "https://oisiclemelonpan.lnk.to/YoungGlow_Pre",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185519:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/nHgmT6Tim",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177761:OP:1": [{
    platform: "LinkCore",
    label: "官方發行頁",
    url: "https://linkco.re/zM5HMA0e",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177761:ED:1": [{
    platform: "LinkCore",
    label: "官方發行頁",
    url: "https://linkco.re/zM5HMA0e",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180425:OP:1": [{
    platform: "Sony Music",
    label: "官方發行頁",
    url: "https://suzukimamiko.lnk.to/ameto.SG",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "180425:ED:1": [{
    platform: "Sony Music",
    label: "官方發行頁",
    url: "https://keisugawara.lnk.to/filled_EP",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177175:OP:1": [{
    platform: "SACRA MUSIC",
    label: "官方發行頁",
    url: "https://reona.lnk.to/EndofDays",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177175:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/A00199631",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177175:ED:2": [{
    platform: "SACRA MUSIC",
    label: "官方發行頁",
    url: "https://reona.lnk.to/Seimeikanso",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "181444:OP:1": [{
    platform: "Sony Music",
    label: "官方發行頁",
    url: "https://kitanitatsuya.lnk.to/DeK8YcHP",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "181444:ED:1": [{
    platform: "Epic Records Japan",
    label: "官方發行頁",
    url: "https://erj.lnk.to/mhlpXu",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178025:OP:1": [{
    platform: "A.S.A.B",
    label: "官方發行頁",
    url: "https://asab.lnk.to/HUGs",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178025:OP:2": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://lnk.to/mc_ljc",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178025:ED:1": [{
    platform: "ALLT STUDIO",
    label: "官方發行頁",
    url: "https://lnkfi.re/dustcell_tomoshibi_250716",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178025:ED:2": [{
    platform: "A.S.A.B",
    label: "官方發行頁",
    url: "https://asab.lnk.to/karanoah_ban",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "184237:OP:1": [{
    platform: "IRORI Records",
    label: "官方發行頁",
    url: "https://lnk.to/Kroi_Method",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "184237:ED:1": [{
    platform: "IRORI Records",
    label: "官方發行頁",
    url: "https://lnk.to/ggv_Dandelion",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "185660:OP:1": [{
    platform: "Avex",
    label: "官方發行頁",
    url: "https://aina.lnk.to/OnTheWay",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1821087731",
    linkType: "direct_track",
    region: "TW"
  }],
  "185660:ED:1": [{
    platform: "WurtS",
    label: "官方發行頁",
    url: "https://lnk.to/WurtS_ds",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1824189859",
    linkType: "direct_track",
    region: "TW"
  }],
  "177689:OP:1": [{
    platform: "Vaundy",
    label: "官方發行頁",
    url: "https://lnk.to/Vaundy_saikai",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "177689:ED:1": [{
    platform: "Sony Music",
    label: "官方發行頁",
    url: "https://tooboe.lnk.to/youaremymonster",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }],
  "178754:OP:1": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://umj.lnk.to/AURORA_YCRFY",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1823156201",
    linkType: "direct_track",
    region: "TW"
  }],
  "178754:ED:1": [{
    platform: "Universal Music Japan",
    label: "官方發行頁",
    url: "https://umj.lnk.to/1R_BC",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1826134951",
    linkType: "direct_track",
    region: "TW"
  }],
  "185407:OP:1": [{
    platform: "ano",
    label: "ano 官方專輯作品頁",
    url: "https://ano-official.com/discography/detail/6626/",
    linkType: "official_landing_page",
    region: "JP"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1889741674",
    linkType: "direct_track",
    region: "TW"
  }],
  "185407:ED:1": [{
    platform: "Linkfire",
    label: "官方跨平台數位發行頁",
    url: "https://tele.lnk.to/garasunosen",
    linkType: "official_landing_page",
    region: "GLOBAL"
  }, {
    platform: "Apple Music",
    label: "Apple Music 台灣",
    url: "https://music.apple.com/tw/song/1820349965",
    linkType: "direct_track",
    region: "TW"
  }],
  "135865:OP:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/GPsD8PYbf",
    linkType: "official_landing_page",
    region: "JP"
  }],
  "135865:ED:1": [{
    platform: "NexTone LinkCore",
    label: "官方發行頁",
    url: "https://nex-tone.link/U4sZm3zRR",
    linkType: "official_landing_page",
    region: "JP"
  }]
};

const turkeyCrossCheckSources = [{
  label: "你的動畫：繁體中文作品名稱、主題曲與官方影片交叉核對",
  url: "https://youranimes.tw/animes/4078",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "繁體中文作品頁：第 9 話替換片頭與各話片尾使用情況交叉核對",
  url: "https://zh.wikipedia.org/wiki/%E4%BF%9D%E9%BD%A1%E7%90%83%E5%B0%91%E5%A5%B3%EF%BC%81",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const turkeyOpeningThemeSources = [{
  label: "動畫官方音樂頁：兩個片頭演唱版本、完整 credit 與角色歌專輯發行日",
  url: "https://turkey-project.com/music/",
  language: "ja",
  role: "first_party"
}, ...turkeyCrossCheckSources] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const turkeyMainEndingThemeSources = [{
  label: "動畫官方音樂頁：主片尾曲名、演唱者與完整 credit",
  url: "https://turkey-project.com/music/musiced/",
  language: "ja",
  role: "first_party"
}, ...turkeyCrossCheckSources] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const turkeyEpisodeEndingThemeSources = [{
  label: "動畫官方各話片尾頁：替換曲目、使用話數、發行日與完整 credit",
  url: "https://turkey-project.com/music/musicedlist/",
  language: "ja",
  role: "first_party"
}, ...turkeyCrossCheckSources] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const kamitsubakiThemeSources = [{
  label: "動畫官方網站：全 13 曲與逐話片尾對照",
  url: "https://kamitsubaki-anime.jp/music/",
  language: "ja",
  role: "first_party"
}, {
  label: "FINDME STORE：官方專輯完整曲目",
  url: "https://findmestore.thinkr.jp/products/ktr-000-0210",
  language: "ja",
  role: "first_party"
}, {
  label: "繁體中文作品頁：逐話片尾與創作 credit 交叉核對",
  url: "https://zh.wikipedia.org/wiki/%E7%A5%9E%E6%A4%BF%E5%B8%82%E5%BB%BA%E8%A8%AD%E4%B8%AD%E3%80%82",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const santaClausThemeSources = [{
  label: "動畫官方網站：主題曲、角色歌手與發行入口",
  url: "https://ao-buta.com/santa/",
  language: "ja",
  role: "first_party"
}, {
  label: "動畫官方網站：官方無字幕主題曲影片",
  url: "https://ao-buta.com/santa/movie/",
  language: "ja",
  role: "first_party"
}, {
  label: "AnimeThemes：逐話演唱版本交叉核對",
  url: "https://animethemes.moe/anime/seishun_buta_yarou_wa_santa_claus_no_yume_wo_minai",
  language: "en",
  role: "cross_check"
}, {
  label: "巴哈姆特：繁體中文作品名稱與主題曲交叉核對",
  url: "https://acg.gamer.com.tw/acgDetail.php?s=136745",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const santaClausEndingSources = [
  ...santaClausThemeSources,
  {
    label: "歌ネット：完整片尾版演唱者、發行日與創作 credit",
    url: "https://www.uta-net.com/song/381284/",
    language: "ja",
    role: "cross_check"
  }
] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const vanguardDeluxeFinalsThemeSources = [{
  label: "動畫官方音樂頁：片頭與第 2 至 11 話輪替片尾、演唱者及完整 credit",
  url: "https://anime.cf-vanguard.com/vgd/music/finals/",
  language: "ja",
  role: "first_party"
}, {
  label: "你的動畫：繁體中文作品名稱、播出資料與官方影片交叉核對",
  url: "https://youranimes.tw/animes/5826",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "繁體中文作品頁：逐話輪替片尾與創作 credit 交叉核對",
  url: "https://zh.wikipedia.org/wiki/%E5%8D%A1%E7%89%87%E6%88%B0%E9%AC%A5%E5%85%88%E5%B0%8E%E8%80%85",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const watariThemeSources = [{
  label: "動畫官方音樂頁：兩季度 OP／ED 曲名與演唱者",
  url: "https://watarikunxx-anime.com/music/index.html",
  language: "ja",
  role: "first_party"
}, {
  label: "巴哈姆特 GNN：繁體中文作品名稱與首季度 OP／ED 分類",
  url: "https://gnn.gamer.com.tw/detail.php?sn=287110",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "你的動畫：繁體中文作品名稱、兩季度播出與影片交叉核對",
  url: "https://youranimes.tw/animes/4594",
  language: "zh-Hant",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const haikaraThemeSources = [{
  label: "動畫官方音樂頁：曲名、演唱成員與完整創作 credit",
  url: "https://boueibu.com/hc/music.html",
  language: "ja",
  role: "first_party"
}, {
  label: "動畫官方新聞：7 月 9 日先行配信與官方發行入口",
  url: "https://boueibu.com/hc/news/article024.html",
  language: "ja",
  role: "first_party"
}, {
  label: "Pony Canyon：OP／ED 實體發行與完整 credit",
  url: "https://www.ponycanyon.co.jp/music/PCCG000070551",
  language: "ja",
  role: "first_party"
}, {
  label: "ACG Secrets.HK：繁體中文作品名稱與聲優交叉核對",
  url: "https://acgsecrets.hk/anime/1866/",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "AnimeThemes：片頭與片尾分類交叉核對",
  url: "https://animethemes.moe/anime/binan_koukou_chikyuu_boueibu_haikara",
  language: "en",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const punirunesPuni3ThemeSources = [{
  label: "TAKARA TOMY 第 3 期官方資料：主題曲、演唱者與完整創作 credit",
  url: "https://www.takaratomy.co.jp/product_release/pdf/p250530.pdf",
  language: "ja",
  role: "first_party"
}, {
  label: "東京電視台主題歌表：第 3 期片頭曲分類",
  url: "https://www.tv-tokyo.co.jp/anime/song/",
  language: "ja",
  role: "first_party"
}, {
  label: "你的動畫：繁體中文作品名稱與第 3 期播出資料",
  url: "https://youranimes.tw/animes/5885",
  language: "zh-Hant",
  role: "cross_check"
}, {
  label: "TV Guide：第 3 期片頭曲分類交叉核對",
  url: "https://www.tvguide.or.jp/db/anime/punirunes/season3/episode12/",
  language: "ja",
  role: "cross_check"
}] satisfies Omit<PublicThemeSource, "verifiedAt">[];

const themeSourceOverrides: Record<string, Omit<PublicThemeSource, "verifiedAt">[]> = {
  "185753:OP:1": [{
    label: "動畫官方公告：第三季片頭曲、歌手與播出資料",
    url: "https://mfg-anime.com/news/detail.php?id=1129699",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方頻道：無字幕片頭影片",
    url: "https://www.youtube.com/watch?v=M1Nj1mcgBns",
    language: "ja",
    role: "first_party"
  }, {
    label: "Avex Pictures 官方公告：完整數位發行日與音樂錄影帶",
    url: "https://avex-pictures.co.jp/topic/56914/",
    language: "ja",
    role: "first_party"
  }, {
    label: "芹澤優官方作品頁：作詞、作曲、編曲與實體發行資料",
    url: "https://yu-serizawa.com/discography/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架資料",
    url: "https://music.apple.com/tw/song/1875142987",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "動畫官方繁中公告：第三季片頭曲與歌手",
    url: "https://mfg-anime.com/zh-CHT/news/detail.php?id=1129699",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=295937",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185753:ED:1": [{
    label: "動畫官方公告：第三季片尾曲、歌手與播出資料",
    url: "https://mfg-anime.com/news/detail.php?id=1129699",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方頻道：無字幕片尾影片",
    url: "https://www.youtube.com/watch?v=ngvqsIH11X8",
    language: "ja",
    role: "first_party"
  }, {
    label: "Avex Pictures 官方公告：完整數位發行日與音樂錄影帶",
    url: "https://avex-pictures.co.jp/topic/76324/",
    language: "ja",
    role: "first_party"
  }, {
    label: "i☆Ris 官方作品頁：作詞、作曲、編曲與實體發行資料",
    url: "https://iris.dive2ent.com/discography/detail.php?id=1021279",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架資料",
    url: "https://music.apple.com/tw/song/1872060415",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "動畫官方繁中公告：第三季片尾曲與歌手",
    url: "https://mfg-anime.com/zh-CHT/news/detail.php?id=1129699",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=295937",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "187264:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、歌手與完整創作 credit",
    url: "https://kiyou-bimbou.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片頭曲及動畫搭配",
    url: "https://kiyou-bimbou.com/news/?p=156%2F",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方頻道：無字幕片頭影片",
    url: "https://www.youtube.com/watch?v=Jp6G6iiKMBc",
    language: "ja",
    role: "first_party"
  }, {
    label: "Hololive Production 官方公告：數位首發日、動畫搭配與完整 credit",
    url: "https://hololivepro.com/news/20260103-01-267/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Hololive 官方音樂頁：數位發行日與串流入口",
    url: "https://hololive.hololivepro.com/music/694/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1863610138",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、主題曲與完整 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=144010",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "187264:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、歌手與完整創作 credit",
    url: "https://kiyou-bimbou.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方頻道：無字幕片尾影片",
    url: "https://www.youtube.com/watch?v=fj6ag_NdfFc",
    language: "ja",
    role: "first_party"
  }, {
    label: "Bandai Namco Music Live 官方公告：片尾曲、歌手與完整 credit",
    url: "https://pylonport.bandainamcomusiclive.co.jp/news/459",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1858500631",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、主題曲與完整 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=144010",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178005:OP:1": [{
    label: "動畫官方 CD 頁：片頭曲、F/ACE 成員與完整創作 credit",
    url: "https://www.tamon-anime.com/music/cd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片頭曲數位發行日與串流入口",
    url: "https://www.tamon-anime.com/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：無字幕片頭與片尾分類",
    url: "https://tamon-anime.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方頻道：無字幕片頭影片",
    url: "https://www.youtube.com/watch?v=cugf5FQ4fLE",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方藝人頁：歌曲與數位發行資料",
    url: "https://www.kingrecords.co.jp/cs/artist/artist.aspx?artist=46731",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1860466124",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=139909",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178005:ED:1": [{
    label: "動畫官方 CD 頁：片尾曲、F/ACE 成員與完整創作 credit",
    url: "https://www.tamon-anime.com/music/cd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片尾曲數位發行日與串流入口",
    url: "https://www.tamon-anime.com/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：無字幕片頭與片尾分類",
    url: "https://tamon-anime.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方頻道：無字幕片尾影片",
    url: "https://www.youtube.com/watch?v=_2dl3blJgy8",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方藝人頁：歌曲與數位發行資料",
    url: "https://www.kingrecords.co.jp/cs/artist/artist.aspx?artist=46731",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1860466031",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特討論區：繁體中文片尾曲名稱與官方影片交叉核對",
    url: "https://forum.gamer.com.tw/C.php?bsn=45244&snA=48",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178005:ED:2": [{
    label: "動畫官方公告：第 5 話特別片尾曲與數位發行日",
    url: "https://www.tamon-anime.com/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：第 5 話片尾曲與第 12 話劇中歌分類",
    url: "https://tamon-anime.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方頻道：第 5 話無字幕片尾影片",
    url: "https://www.youtube.com/watch?v=d4euM3A77Xw",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目、完整 credit 與數位上架日",
    url: "https://music.apple.com/tw/song/1869010808",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "LiTV：繁體中文第 5 話授權頁與片尾曲交叉核對",
    url: "https://www.litv.tv/comic/watch/VOD00388107",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "UtaTen：作詞、作曲與編曲 credit 交叉核對",
    url: "https://utaten.com/lyric/mi26012903/",
    language: "ja",
    role: "cross_check"
  }],
  "167152:OP:1": [{
    label: "動畫官方音樂頁：唯一主題曲分類、歌手及發行資料",
    url: "https://yushakei-pj.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：無字幕主題歌影片與官方分類",
    url: "https://yushakei-pj.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：動畫主題曲與數位發行日",
    url: "https://www.sonymusic.co.jp/artist/spyair/info/580281",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/kill-the-noise/1863580179?i=1863580182",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、唯一主題曲與完整 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=134169",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198720:OP:1": [{
    label: "動畫官方網站：第一季度片頭、片尾曲分類及歌手",
    url: "https://zakoban.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Frontier Works 官方發行頁：片頭曲及數位發行日",
    url: "https://www.fwinc.co.jp/digitalmusic/107169/",
    language: "ja",
    role: "first_party"
  }, {
    label: "作詞作曲編曲者公開製作記錄：片頭曲完整創作 credit",
    url: "https://note.com/miuraseiji/n/n2a6e3d3bd26e",
    language: "ja",
    role: "first_party"
  }, {
    label: "COAMIX 官方繁中公告：上半季度作品名稱及片頭片尾曲",
    url: "https://www.coamix.co.jp/zh-tw/topics/hokuto_zako_260105",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及第一季度片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=148359",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198720:ED:1": [{
    label: "動畫官方網站：第一季度片頭、片尾曲分類及歌手",
    url: "https://zakoban.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "TuneCore Japan 官方發行頁：片尾曲分類與主唱、作詞及作曲 credit",
    url: "https://linkco.re/V16FShUV?lang=ja",
    language: "ja",
    role: "first_party"
  }, {
    label: "The Canbellz 官方公告：片尾曲分類及日本數位發行日",
    url: "https://shinxx.com/news/202510/4828/",
    language: "ja",
    role: "first_party"
  }, {
    label: "COAMIX 官方繁中公告：上半季度作品名稱及片頭片尾曲",
    url: "https://www.coamix.co.jp/zh-tw/topics/hokuto_zako_260105",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及第一季度片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=148359",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "197731:OP:1": [{
    label: "動畫官方公告：片頭曲分類及完整創作 credit",
    url: "https://goumonbaitokun.com/news/article019.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "GRANRODEO 官方公告：片頭曲與先行數位發行日",
    url: "https://granrodeo.net/contents/1012616",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145933",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "197731:ED:1": [{
    label: "動畫官方公告：片尾曲分類及完整創作 credit",
    url: "https://goumonbaitokun.com/news/article019.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "寺島拓篤官方公告：片尾曲、完整 credit 與先行數位發行日",
    url: "https://takuma-terashima.lantis.jp/news/2338/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145933",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "195322:OP:1": [{
    label: "動畫官方音樂頁：第 2 期片頭曲、歌手及官方數位發行入口",
    url: "https://vigilante-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片頭曲動畫 MV 與歌手資料",
    url: "https://vigilante-anime.com/news/20260309_01.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/catch/1862662169?i=1862662591",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "動畫歌曲資料頁：片頭曲完整創作 credit 與影片交叉核對",
    url: "https://anime-song-info.com/vigilante-op-ed-25sp/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=143058",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "195322:ED:1": [{
    label: "動畫官方音樂頁：第 2 期片尾曲、歌手及官方數位發行入口",
    url: "https://vigilante-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方訪談：片尾曲創作背景與作品對應關係",
    url: "https://vigilante-anime.com/interview/interview24.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/%E3%83%9F%E3%82%B9-%E3%83%A6%E3%83%BC/1859601190?i=1859601193",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "LisAni：片尾曲完整創作 credit 與正式影片交叉核對",
    url: "https://www.lisani.jp/0000301575/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=143058",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177385:OP:1": [{
    label: "動畫官方音樂頁：片頭曲分類、歌手及創作背景",
    url: "https://ikoku-anime.com/music/opening/",
    language: "ja",
    role: "first_party"
  }, {
    label: "PONY CANYON 官方公告：片頭曲完整 credit 與數位發行日",
    url: "https://news.ponycanyon.co.jp/2025/12/117648",
    language: "ja",
    role: "first_party"
  }, {
    label: "PONY CANYON 官方公告：無字幕片頭影片",
    url: "https://news.ponycanyon.co.jp/2026/01/117785",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/sonare/1862338474",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片頭曲與創作 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=139183",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177385:ED:1": [{
    label: "動畫官方音樂頁：片尾曲分類、歌手及創作背景",
    url: "https://ikoku-anime.com/music/ending/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片尾曲及數位發行日",
    url: "https://ikoku-anime.com/news/post-16",
    language: "ja",
    role: "first_party"
  }, {
    label: "PONY CANYON 官方公告：片尾曲作詞與作曲 credit",
    url: "https://news.ponycanyon.co.jp/2025/11/116103",
    language: "ja",
    role: "first_party"
  }, {
    label: "PONY CANYON 官方公告：無字幕片尾影片",
    url: "https://news.ponycanyon.co.jp/2026/01/117780",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/kotozute/1860510461",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=139183",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166521:OP:1": [{
    label: "動畫官方最終章音樂頁：片頭曲分類及正式收錄資料",
    url: "https://kamuy-anime.com/music/index6.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方劇場先行版音樂頁：歌曲數位發行日與官方發行入口",
    url: "https://kamuy-anime.com/music/index5.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞列表：無字幕片頭影片",
    url: "https://kamuy-anime.com/news/list00010001.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "ALI 官方發行公告：完整創作 credit、數位發行日與官方發行入口",
    url: "https://alienlibertyinternational.com/cate/2293",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan 官方藝人頁：完整音樂錄影帶",
    url: "https://www.universal-music.co.jp/awich/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1842061212",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=133646",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166521:ED:1": [{
    label: "動畫官方最終章音樂頁：片尾曲分類與正式收錄資料",
    url: "https://kamuy-anime.com/music/index6.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片尾曲、數位發行日與官方發行入口",
    url: "https://kamuy-anime.com/news/index06580000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞列表：無字幕片尾影片",
    url: "https://kamuy-anime.com/news/list00010001.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pizza of Death 官方特設頁：單曲收錄資料與特別影片",
    url: "https://www.pizzaofdeath.com/kentheballad/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1861402066",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "LisAni：片尾曲完整創作 credit、數位發行日與影片交叉核對",
    url: "https://www.lisani.jp/0000299705/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=133646",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "194028:OP:1": [{
    label: "動畫官方音樂頁：片頭曲分類與完整創作 credit",
    url: "https://kinishite.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片頭影片",
    url: "https://kinishite.com/news/post-97",
    language: "ja",
    role: "first_party"
  }, {
    label: "FlyingDog 官方曲目頁：數位發行日",
    url: "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A029783/VE3WT-12194.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌手官方 YouTube：完整音樂錄影帶",
    url: "https://www.youtube.com/watch?v=pKrg4_m_9e4",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1860787388",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與播映資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=298480",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "194028:ED:1": [{
    label: "動畫官方音樂頁：片尾曲分類與完整創作 credit",
    url: "https://kinishite.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片尾影片",
    url: "https://kinishite.com/news/post-99",
    language: "ja",
    role: "first_party"
  }, {
    label: "FlyingDog 官方曲目頁：數位發行日",
    url: "https://www.jvcmusic.co.jp/flyingdog/-/Discography/A021332/VE3WT-12206.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "FlyingDog 官方 YouTube：完整音樂錄影帶",
    url: "https://www.youtube.com/watch?v=swPFCbVwhXo",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1860787616",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與播映資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=298480",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "172463:OP:1": [{
    label: "動畫官方影片頁：第 3 期片頭曲分類",
    url: "https://jujutsukaisen.jp/movie/index_music.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片頭及片尾影片",
    url: "https://jujutsukaisen.jp/news/20260109_06.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Gnu 官方曲目頁：數位發行日與官方串流入口",
    url: "https://kinggnu.jp/music/AIZO/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：完整音樂錄影帶",
    url: "https://www.sonymusic.co.jp/artist/kinggnu/info/580344",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1860538548",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片頭曲與創作 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=137133",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "172463:ED:1": [{
    label: "動畫官方音樂頁：第 3 期片尾曲分類與正式收錄資料",
    url: "https://jujutsukaisen.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片尾曲、數位發行日與官方串流入口",
    url: "https://jujutsukaisen.jp/news/20260109_05.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片頭及片尾影片",
    url: "https://jujutsukaisen.jp/news/20260109_06.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：完整音樂錄影帶",
    url: "https://www.sonymusic.co.jp/artist/jo0ji/info/580237",
    language: "ja",
    role: "first_party"
  }, {
    label: "台灣索尼音樂：繁體中文曲目與動畫搭配資料",
    url: "https://sonymusic.com.tw/album/yoake-no-uta/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1860793850",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片尾曲與創作 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=137133",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166613:OP:1": [{
    label: "動畫官方音樂頁：第 2 期片頭曲、創作 credit 與數位發行日",
    url: "https://www.jigokuraku.com/music/op/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：第 2 期無字幕片頭影片",
    url: "https://www.jigokuraku.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "キタニタツヤ官方公告：數位發行與跨平台串流入口",
    url: "https://tatsuyakitani.com/news/2372/",
    language: "ja",
    role: "first_party"
  }, {
    label: "キタニタツヤ官方公告：完整音樂錄影帶",
    url: "https://tatsuyakitani.com/news/2419/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1866806793",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片頭曲與創作 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=133793",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166613:ED:1": [{
    label: "動畫官方音樂頁：第 2 期片尾曲與創作 credit",
    url: "https://www.jigokuraku.com/music/ed/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：第 2 期無字幕片尾影片",
    url: "https://www.jigokuraku.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：數位發行日",
    url: "https://www.sonymusic.co.jp/artist/ziyoou-vachi/info/580264",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：完整音樂錄影帶",
    url: "https://www.sonymusic.co.jp/artist/ziyoou-vachi/info/580303",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1864160080",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片尾曲與創作 credit 交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=133793",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "163144:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、創作 credit、數位發行日與串流入口",
    url: "https://trigun-anime.com/music/op.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：90 秒片頭與無字幕片尾影片",
    url: "https://trigun-anime.com/news/?p=817",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：兩首主題曲的數位發行與創作 credit",
    url: "https://trigun-anime.com/news/?p=815",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1889745515",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品頁與播映資料交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=131293",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "163144:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、創作 credit、數位發行日與串流入口",
    url: "https://trigun-anime.com/music/ed.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：90 秒片頭與無字幕片尾影片",
    url: "https://trigun-anime.com/news/?p=817",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：兩首主題曲的數位發行與創作 credit",
    url: "https://trigun-anime.com/news/?p=815",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1859576625",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品頁與播映資料交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=131293",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166617:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、歌手、數位發行日與串流入口",
    url: "https://fate-strange-fake.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片頭及片尾主題曲的先行數位發行",
    url: "https://fate-strange-fake.com/news/?article_id=69290",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：片頭曲、數位發行與無字幕片頭影片",
    url: "https://www.sonymusic.co.jp/artist/sawanohiroyukinzk/info/579442",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1858500507",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品頁與播映資料交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=133843",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166617:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、歌手、數位發行日與串流入口",
    url: "https://fate-strange-fake.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：片尾曲、數位發行與正式收錄資訊",
    url: "https://fate-strange-fake.com/news/?article_id=69290",
    language: "ja",
    role: "first_party"
  }, {
    label: "13.3g 官方曲目頁：創作 credit、數位發行與完整音樂錄影帶",
    url: "https://13-3g.fanpla.jp/discography/detail/6174/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1863631438",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品頁與播映資料交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=133843",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189275:OP:1": [{
    label: "動畫官方音樂頁：第 2 期片頭曲、創作 credit、數位發行日與串流入口",
    url: "https://medalist-pr.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞頁：第 2 期無字幕片頭及片尾影片",
    url: "https://medalist-pr.com/news.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "HANA 官方公告：數位發行與動畫搭配",
    url: "https://hana.b-rave.tokyo/music/coldnight/",
    language: "ja",
    role: "first_party"
  }, {
    label: "HANA 官方影片頁：完整音樂錄影帶",
    url: "https://hana.b-rave.tokyo/movie/mv/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/cold-night-single/1867687784?i=1867687787",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=144542",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189275:ED:1": [{
    label: "動畫官方音樂頁：第 2 期片尾曲、數位發行日與串流入口",
    url: "https://medalist-pr.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞頁：第 2 期無字幕片頭及片尾影片",
    url: "https://medalist-pr.com/news.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Conton Candy 官方公告：數位發行與無字幕片尾影片",
    url: "https://contoncandy.fanpla.jp/news/detail/67612",
    language: "ja",
    role: "first_party"
  }, {
    label: "Conton Candy 官方公告：完整音樂錄影帶",
    url: "https://contoncandy.fanpla.jp/news/detail/68276",
    language: "ja",
    role: "first_party"
  }, {
    label: "Conton Candy 官方曲目頁：數位發行日與串流入口",
    url: "https://contoncandy.fanpla.jp/discography/detail/6283/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲 credit 交叉核對",
    url: "https://www.uta-net.com/song/387322/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1867415955",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=144542",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177679:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、歌手、數位發行日與串流入口",
    url: "https://darwinsincident.net/music/opening.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片頭影片與主題曲",
    url: "https://darwinsincident.net/news/20260105_01.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Official髭男dism 官方公告：數位發行日、動畫搭配與串流入口",
    url: "https://higedan.com/news/detail/101536",
    language: "ja",
    role: "first_party"
  }, {
    label: "Official髭男dism 官方頻道：完整音樂錄影帶",
    url: "https://www.youtube.com/watch?v=LU7xD_yx43c",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲 credit 交叉核對",
    url: "https://www.uta-net.com/song/385918/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1860741263",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與播映資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=282119",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177679:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、歌手、數位發行日與串流入口",
    url: "https://darwinsincident.net/music/ending.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片尾影片與主題曲",
    url: "https://darwinsincident.net/news/20260107_01.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "PONY CANYON 官方公告：數位發行、動畫搭配與完整音樂錄影帶",
    url: "https://news.ponycanyon.co.jp/2026/02/118799",
    language: "ja",
    role: "first_party"
  }, {
    label: "a子官方頻道：完整音樂錄影帶與創作 credit",
    url: "https://www.youtube.com/watch?v=T57HYBSkci8",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲 credit 交叉核對",
    url: "https://www.uta-net.com/song/386408/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/song/1864085295",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與播映資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=282119",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180746:OP:1": [{
    label: "動畫官方音樂頁：唯一純器樂片頭曲與作曲編曲 credit",
    url: "https://shiboyugi-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：無字幕片頭與片尾分類",
    url: "https://shiboyugi-anime.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、純器樂片頭及片尾資料交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=141219",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180746:ED:1": [{
    label: "動畫官方音樂頁：唯一片尾曲與完整創作 credit",
    url: "https://shiboyugi-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：無字幕片頭與片尾分類",
    url: "https://shiboyugi-anime.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "日本哥倫比亞官方公告：數位發行日與 MV",
    url: "https://columbia.jp/artist-info/fujikawachiai/info/92540.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、純器樂片頭及片尾資料交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=141219",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177580:OP:1": [{
    label: "動畫官方音樂頁：第 1 期唯一片頭曲與完整創作 credit",
    url: "https://hanakimi-anime.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：第 1 期片頭與片尾曲分類",
    url: "https://hanakimi-anime.com/news/?article_id=69096",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=295227",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177580:ED:1": [{
    label: "動畫官方音樂頁：第 1 期唯一片尾曲與完整創作 credit",
    url: "https://hanakimi-anime.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：第 1 期片頭與片尾曲分類",
    url: "https://hanakimi-anime.com/news/?article_id=69096",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=295227",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185514:OP:1": [{
    label: "動畫官方音樂頁：唯一片頭曲、完整創作 credit 與數位發行日",
    url: "https://champignon-pr.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145458",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185514:ED:1": [{
    label: "動畫官方音樂頁：唯一片尾曲、完整創作 credit 與數位發行日",
    url: "https://champignon-pr.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145458",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182255:OP:1": [{
    label: "動畫官方音樂頁：第 2 期唯一片頭曲、創作 credit 與數位發行日",
    url: "https://frieren-anime.jp/music/2nd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片頭與片尾分類",
    url: "https://frieren-anime.jp/news/4710/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/lulu/1867354077?i=1867354081",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=141647",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182255:ED:1": [{
    label: "動畫官方音樂頁：第 2 期片尾曲、創作 credit 與數位發行日",
    url: "https://frieren-anime.jp/music/2nd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：無字幕片頭與片尾分類",
    url: "https://frieren-anime.jp/news/4710/",
    language: "ja",
    role: "first_party"
  }, {
    label: "台灣索尼音樂：繁體中文曲目與片尾分類",
    url: "https://www.sonymusic.com.tw/album/the-story-of-us/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/the-story-of-us/1863631186?i=1863631485",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：完整作詞、作曲、編曲 credit 交叉核對",
    url: "https://www.uta-net.com/song/386441/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱及片頭片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=141647",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182255:ED:2": [{
    label: "動畫官方公告：第 38 話特別片尾分類與使用情境",
    url: "https://frieren-anime.jp/news/5419/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：第 38 話特別片尾無字幕映像",
    url: "https://frieren-anime.jp/news/5471/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：特別片尾分類與發行資料",
    url: "https://www.sonymusic.co.jp/artist/milet_music/info/582150",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/trace/1878095288?i=1878095294",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：完整作詞、作曲、編曲與片尾分類交叉核對",
    url: "https://www.uta-net.com/song/388882/",
    language: "ja",
    role: "cross_check"
  }],
  "182587:OP:1": [{
    label: "動畫官方音樂頁：第 3 期唯一片頭曲與演唱者",
    url: "https://ichigoproduction.com/Season3/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：第 3 期片頭曲發表",
    url: "https://ichigoproduction.com/Season3/news/index00670000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "台灣索尼音樂：繁體中文曲目、動畫用途與藝名對照",
    url: "https://sonymusic.com.tw/album/test-me/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/test-me/1866862251?i=1866862252",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "ABEMA TIMES 繁體中文版：無字幕片頭與片尾分類交叉核對",
    url: "https://times.abema.tv/zt/articles/-/10221525",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182587:ED:1": [{
    label: "動畫官方音樂頁：第 3 期唯一片尾曲與演唱者",
    url: "https://ichigoproduction.com/Season3/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：第 3 期片尾曲發表",
    url: "https://ichigoproduction.com/Season3/news/index00560000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方公告：片尾曲分類",
    url: "https://www.sonymusic.co.jp/artist/natori/info/578563",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方發行公告：共同編曲與實體發行日",
    url: "https://www.sonymusic.co.jp/artist/natori/info/580062",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/%E3%82%BB%E3%83%AC%E3%83%8A%E3%83%BC%E3%83%87/1871971722?i=1871971723",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "ABEMA TIMES 繁體中文版：無字幕片頭與片尾分類交叉核對",
    url: "https://times.abema.tv/zt/articles/-/10221525",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "204698:ED:1": [{
    label: "TOKYO MX 動畫官網：主題歌曲名、演唱及作詞作曲",
    url: "https://s.mxtv.jp/anime/gelpiyo/",
    language: "ja",
    role: "first_party"
  }, {
    label: "TOKYO MX 官方新聞稿：作品與主題歌曲目",
    url: "https://s.mxtv.jp/company/press/20251224_l54794fsajakig0y3g7oug588a0l6t.pdf",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與原始發行日",
    url: "https://music.apple.com/tw/album/delulu/1834861290?i=1834861291",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲、編曲及發行日交叉核對",
    url: "https://www.uta-net.com/song/379192/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Dcard 動漫歌整理：繁體中文片尾分類交叉核對",
    url: "https://www.dcard.tw/@rickylin0121/post/261118194/b/1",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "205772:ED:1": [{
    label: "動畫官方公告：主題歌曲名與演唱者",
    url: "https://www.candycaries.com/news/detail.php?id=23177",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：主題歌版主宣傳片",
    url: "https://www.candycaries.com/news/detail.php?id=23255",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌手官方公告：主題歌曲名與專輯收錄",
    url: "https://is-sue.jp/news/detail/655",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：主題歌動畫 MV",
    url: "https://www.candycaries.com/news/detail.php?id=23851",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架日",
    url: "https://music.apple.com/tw/album/telepathy/1891308308?i=1891308582",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：完整作詞、作曲及編曲 credit 交叉核對",
    url: "https://www.uta-net.com/song/393103/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "你的動畫：繁體中文作品名稱與主題歌曲目交叉核對",
    url: "https://youranimes.tw/animes/6365",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "206950:OP:1": [{
    label: "動畫官方網站：Season 3 沿用主題曲及作品資料",
    url: "https://kumarba.com/pages/tv-anime",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：原始演唱、作詞作曲及數位發行日",
    url: "https://kumarba.com/blogs/news/131",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與原始發行日",
    url: "https://music.apple.com/tw/album/konnichi-world/1736250595?i=1736250600",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：編曲 credit 與發行日交叉核對",
    url: "https://www.uta-net.com/song/352581/",
    language: "ja",
    role: "cross_check"
  }],
  "212308:ED:1": [{
    label: "動畫官方網站：電視版片尾分類、歌手及完整創作 credit",
    url: "https://www.ktv.jp/pan-aka-tv/",
    language: "ja",
    role: "first_party"
  }, {
    label: "製作公司公告：2026 電視版與 2024 短篇版的版本區分",
    url: "https://prtimes.jp/main/html/rd/p/000000542.000024007.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "ORICON：電視版片尾曲分類與歌手交叉核對",
    url: "https://www.oricon.co.jp/anime/1114/",
    language: "ja",
    role: "cross_check"
  }],
  "198411:ED:1": [{
    label: "動畫官方網站：作品、主題曲與播出資料",
    url: "https://www.poplar.co.jp/pr/anime-nezumikun/",
    language: "ja",
    role: "first_party"
  }, {
    label: "avex 官方公告：作品關聯、歌手與完整演奏創作 credit",
    url: "https://avexnet.jp/news/1031751",
    language: "ja",
    role: "first_party"
  }, {
    label: "avex 官方唱片頁：數位發行日與官方發行入口",
    url: "https://avexnet.jp/release/1021455",
    language: "ja",
    role: "first_party"
  }, {
    label: "愛貝克思台灣：繁體中文歌名、作品關聯與製作名單",
    url: "https://www.avex.com.tw/Artist/artist.asp?ArtistCode=TKSKAJ",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "アニソン・オンライン：片尾曲分類交叉核對",
    url: "https://anison.online/anime/5626",
    language: "ja",
    role: "cross_check"
  }],
  "204269:ED:1": [{
    label: "動畫官方音樂頁：片尾分類、歌手、創作 credit 與發行日",
    url: "https://odekake-kozame.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方公告：第 2 季片尾曲與無字幕片尾映像",
    url: "https://odekake-kozame.com/news/?id=20260412_1&mode=detail",
    language: "ja",
    role: "first_party"
  }, {
    label: "你的動畫：繁體中文作品名稱與片尾動畫消息交叉核對",
    url: "https://youranimes.tw/animes/6199",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "202386:ED:1": [{
    label: "動畫官方網站：片尾分類、歌手及作詞作曲編曲 credit",
    url: "https://qq-gomachan.com/music/cue-cue-cute/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Storm Labels 官方唱片頁：數位發行日與官方發行入口",
    url: "https://web.storm-labels.co.jp/s/st/discography/LCDA-0403",
    language: "ja",
    role: "first_party"
  }, {
    label: "你的動畫：繁體中文作品與主題曲資料交叉核對",
    url: "https://youranimes.tw/animes/6139",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "181867:OP:1": [{
    label: "動畫製作公司：OP 分類、歌手、作詞作曲 credit 與發行日",
    url: "https://fanworks.co.jp/news/cn231110/",
    language: "ja",
    role: "first_party"
  }, {
    label: "allcinema：第 3 期沿用主題曲及 credit 交叉核對",
    url: "https://www.allcinema.net/cinema/396974",
    language: "ja",
    role: "cross_check"
  }, {
    label: "你的動畫：繁體中文第 3 期作品資料交叉核對",
    url: "https://youranimes.tw/animes/5904",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "199486:OP:1": [{
    label: "關西電視台與 MMDGP 新聞稿：主題曲、歌手及作詞作曲 credit",
    url: "https://www.atpress.ne.jp/news/439592",
    language: "ja",
    role: "first_party"
  }, {
    label: "TuneCore Japan 官方發行頁：歌手、作詞作曲 credit 與串流入口",
    url: "https://linkco.re/R8VfCUUr",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位單曲發行日交叉核對",
    url: "https://music.apple.com/jp/album/moe-cat-spirit-single/1832975750",
    language: "ja",
    role: "cross_check"
  }, {
    label: "你的動畫：繁體中文作品資料與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5912",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "動畫歌曲發行索引：OP 分類與發行資料交叉核對",
    url: "https://anison-alacarte.hatenablog.com/entry/2025/08/17/090000",
    language: "ja",
    role: "cross_check"
  }],
  "159483:OP:1": [
    ...turkeyOpeningThemeSources,
    {
      label: "動畫官方新聞：片頭數位發行日與官方發行入口",
      url: "https://turkey-project.com/news/406/",
      language: "ja",
      role: "first_party"
    }
  ],
  "159483:OP:2": turkeyOpeningThemeSources,
  "159483:ED:1": [
    ...turkeyMainEndingThemeSources,
    {
      label: "Pony Canyon 官方唱片頁：主片尾數位發行日",
      url: "https://www.ponycanyon.co.jp/music/PCSP000006657",
      language: "ja",
      role: "first_party"
    }
  ],
  "159483:ED:2": turkeyEpisodeEndingThemeSources,
  "159483:ED:3": turkeyEpisodeEndingThemeSources,
  "159483:ED:4": turkeyEpisodeEndingThemeSources,
  "159483:ED:5": [
    ...turkeyEpisodeEndingThemeSources,
    {
      label: "やなぎなぎ官方網站：第 9 話歌曲與數位發行日",
      url: "https://yanaginagi.net/information/turkey_song/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:OP:1": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：片頭 TV Size 發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4115/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:1": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 1 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4120/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:2": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 2 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4123/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:3": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 3 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4124/",
      language: "ja",
      role: "first_party"
    }, {
      label: "Animate Times：特殊曲名讀音「Page」交叉核對",
      url: "https://animatetimes.com/news/details.php?id=1761101185&p=5",
      language: "ja",
      role: "cross_check"
    }
  ],
  "191994:ED:4": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 4 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4126/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:5": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 5 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4134/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:6": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 6 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4138/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:7": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 7 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4139/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:8": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 8 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4143/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:9": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 9 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4149/",
      language: "ja",
      role: "first_party"
    }
  ],
  "191994:ED:10": [
    ...vanguardDeluxeFinalsThemeSources,
    {
      label: "BanG Dream 官方唱片頁：第 10 首輪替片尾發行日、credit 與串流入口",
      url: "https://bang-dream.com/discographies/4152/",
      language: "ja",
      role: "first_party"
    }
  ],
  "169420:OP:1": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：首季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00090000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Universal Music Japan：片頭曲發行日與官方發行入口",
      url: "https://www.universal-music.co.jp/yuika/news/2025-07-11/",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：片頭曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/377099/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "169420:OP:2": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：第二季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00270000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Universal Music Japan：第二季度片頭曲發行日",
      url: "https://www.universal-music.co.jp/shallm/news/2025-10-10/",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：第二季度片頭曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/381350/?target=art",
      language: "ja",
      role: "cross_check"
    }
  ],
  "169420:ED:1": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：首季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00090000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "PEDRO 官方新聞：片尾曲發行日與官方發行入口",
      url: "https://www.pedro.tokyo/news/detail/941",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：片尾曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/376023/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "169420:ED:2": [
    ...watariThemeSources,
    {
      label: "動畫官方新聞：第二季度片頭與片尾主題曲",
      url: "https://watarikunxx-anime.com/news/index00270000.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Cloud Nine 官方新聞：第二季度片尾曲發行日與創作 credit",
      url: "https://cloud9pro.co.jp/news/p/12931/",
      language: "ja",
      role: "first_party"
    }, {
      label: "歌ネット：第二季度片尾曲完整創作 credit 交叉核對",
      url: "https://www.uta-net.com/song/381393/?target=composer",
      language: "ja",
      role: "cross_check"
    }
  ],
  "188653:ED:1": punirunesPuni3ThemeSources,
  "188138:OP:1": [
    ...haikaraThemeSources,
    {
      label: "歌ネット：片頭作詞、作曲與編曲資料交叉核對",
      url: "https://www.uta-net.com/song/376397/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "188138:ED:1": [
    ...haikaraThemeSources,
    {
      label: "歌ネット：片尾作詞、作曲與編曲資料交叉核對",
      url: "https://www.uta-net.com/song/376396/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "171046:OP:1": [
    ...santaClausThemeSources,
    {
      label: "歌ネット：數位發行日與完整創作 credit",
      url: "https://www.uta-net.com/song/376288/?target=art",
      language: "ja",
      role: "cross_check"
    }, {
      label: "Apple Music 日本：數位單曲發行日交叉核對",
      url: "https://music.apple.com/jp/album/%E3%82%B9%E3%83%8E%E3%82%A6%E3%83%89%E3%83%AD%E3%83%83%E3%83%97-single/1820147480",
      language: "ja",
      role: "cross_check"
    }
  ],
  "171046:ED:1": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：卯月版本影片與 7 月 6 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68161",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 1 卷：第 1 至 3 話與卯月 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/index.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:2": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：郁實版本影片與 7 月 27 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68329",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 2 卷：第 4 至 7 話與郁實 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/02.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:3": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：紗良版本影片與 8 月 24 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68512",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 3 卷：第 8 至 10 話與紗良 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/03.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:4": [
    ...santaClausEndingSources,
    {
      label: "動畫官方第 4 卷：第 11 至 13 話與霧島透子 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/04.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Apple Music 香港：霧島透子短版與 9 月 14 日發行日",
      url: "https://music.apple.com/hk/album/%E6%B0%B4%E5%B9%B3%E7%B7%9A%E3%81%AF%E5%83%95%E3%81%AE%E5%8F%A4%E5%82%B7-%E9%9C%A7%E5%B3%B6%E9%80%8F%E5%AD%90-short-ver-single/1836081218",
      language: "zh-Hant",
      role: "cross_check"
    }
  ],
  "171046:ED:5": [
    ...santaClausEndingSources,
    {
      label: "動畫官方新聞：寧寧版本影片與 9 月 21 日配信",
      url: "https://ao-buta.com/santa/news/?article_id=68771",
      language: "ja",
      role: "first_party"
    }, {
      label: "動畫官方第 4 卷：第 11 至 13 話與寧寧 Full Ver.",
      url: "https://ao-buta.com/santa/bddvd/04.html",
      language: "ja",
      role: "first_party"
    }
  ],
  "171046:ED:6": [
    ...santaClausEndingSources,
    {
      label: "動畫官方原聲帶：四人完整版與 9 月 24 日發行日",
      url: "https://ao-buta.com/santa/music/ost.html",
      language: "ja",
      role: "first_party"
    }, {
      label: "Apple Music 日本：四人完整版曲目與發行日",
      url: "https://music.apple.com/jp/song/1838651290",
      language: "ja",
      role: "cross_check"
    }
  ],
  "173335:OP:1": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：數位發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/04/7838/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:1": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 0 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/09/7844/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:2": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 2 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/23/8019/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:3": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 3 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/07/30/8101/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:4": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 4 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/08/06/8164/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:5": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 5 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/08/13/8209/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:6": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 6 話片尾、發行日與完整創作 credit",
      url: "https://kamitsubaki.jp/news/2025/08/20/8273/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:7": [...kamitsubakiThemeSources],
  "173335:ED:8": [
    ...kamitsubakiThemeSources,
    {
      label: "KAMITSUBAKI STUDIO：第 8 話片尾與完整創作 credit",
      url: "https://kamitsubaki.jp/discography/harusaruhi/8863/",
      language: "ja",
      role: "first_party"
    }
  ],
  "173335:ED:9": [
    ...kamitsubakiThemeSources,
    {
      label: "歌ネット：原始發行日與編曲 credit 交叉核對",
      url: "https://www.uta-net.com/song/352282/",
      language: "ja",
      role: "cross_check"
    }
  ],
  "173335:ED:10": [
    ...kamitsubakiThemeSources,
    {
      label: "Apple Music 台灣：數位單曲發行日交叉核對",
      url: "https://music.apple.com/tw/album/%E9%9B%BB%E8%84%B3-sinka-ver-feat-%E8%8A%B1%E8%AD%9C-%E7%90%86%E8%8A%BD-%E6%98%A5%E7%8C%BF%E7%81%AB-%E3%83%B0%E4%B8%96%E7%95%8C%E6%83%85%E7%B7%92-%E5%B9%B8%E7%A5%9C-single/1837327942",
      language: "zh-Hant",
      role: "cross_check"
    }
  ],
  "173335:ED:11": [...kamitsubakiThemeSources],
  "155838:OP:1": [{
    label: "動畫官方網站：無字幕片頭影片",
    url: "https://tsuyosaga-pr.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "4s4ki 官方作品頁：數位單曲與發行日",
    url: "https://4s4ki.xyz/discography/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Victor Entertainment：發行日與動畫搭配資料",
    url: "https://www.jvcmusic.co.jp/-/Linkall/VE3WT-11789.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376007/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "遊戲基地：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://news.gamebase.com.tw/news/detail/99433765",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "155838:ED:1": [{
    label: "動畫官方網站：無字幕片尾影片",
    url: "https://tsuyosaga-pr.com/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：數位單曲與發行日",
    url: "https://wmg.jp/mahirucoda/discography/31681/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Artists：動畫搭配、無字幕片尾與發行日",
    url: "https://www.sma.co.jp/s/sma/news/detail/110938?ima=0000&link=ROBO004",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/377110/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "遊戲基地：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://news.gamebase.com.tw/news/detail/99433765",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178869:OP:1": [{
    label: "動畫官方網站：主題曲、創作 credit、發行日與無字幕片頭",
    url: "https://clevatess.com/1st/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "前島麻由官方作品頁：數位單曲、動畫搭配與發行日",
    url: "https://mayumaeshima.com/discography/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375807/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5325",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178869:ED:1": [{
    label: "動畫官方網站：片尾曲與無字幕片尾",
    url: "https://clevatess.com/1st/music/ed.php",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：正式單曲與發行日",
    url: "https://www.universal-music.co.jp/elliegoulding/products/00602488232579/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Shazam：歌曲作者名單交叉核對",
    url: "https://www.shazam.com/song/1850005429/destiny",
    language: "en",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5325",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "187387:OP:1": [{
    label: "Sony Music：完整 MV、動畫搭配與官方發行入口",
    url: "https://ssl.sme.co.jp/artist/wyxt/info/575903",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：實體單曲、無字幕片頭與發行資料",
    url: "https://www.sonymusic.co.jp/artist/wyxt/info/576587",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375988/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Apple Music 台灣：數位發行日與曲目交叉核對",
    url: "https://music.apple.com/tw/album/cry-out-cry-over-single/1821801082",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5743",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "187387:ED:1": [{
    label: "Sony Music：數位發行日、動畫搭配與官方發行入口",
    url: "https://www.sonymusic.co.jp/artist/9Lana/info/575160",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：完整 MV 與實體單曲資料",
    url: "https://www.sonymusic.co.jp/artist/9Lana/info/575921",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/375895/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5743",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "169440:OP:1": [{
    label: "動畫第二季官方網站：主題曲與實體專輯資料",
    url: "https://jihanki-anime.com/2nd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：片頭與片尾影片",
    url: "https://up-info.news/jihanki-anime/article/20250723_2nd_op_ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "BRADIO 官方消息：先行配信日與動畫搭配",
    url: "https://bradio.jp/news/detail/1928",
    language: "ja",
    role: "first_party"
  }, {
    label: "BRADIO 官方消息：完整 MV 與專輯資料",
    url: "https://bradio.jp/news/detail/1948",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位首發日交叉核對",
    url: "https://music.apple.com/jp/song/1815216677",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲、編曲與專輯發售日交叉核對",
    url: "https://www.uta-net.com/song/375608/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱交叉核對",
    url: "https://youranimes.tw/animes/4614",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "169440:ED:1": [{
    label: "動畫第二季官方網站：片尾曲與創作 credit",
    url: "https://jihanki-anime.com/2nd/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：片頭與無字幕片尾影片",
    url: "https://up-info.news/jihanki-anime/article/20250723_2nd_op_ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：數位發行日與創作 credit",
    url: "https://up-info.news/jihanki-anime/article/20250827_ed2_aibaaina.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位單曲、發行日與唱片公司",
    url: "https://music.apple.com/jp/album/my-own-horizon-single/1834061522",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲、編曲與發行日交叉核對",
    url: "https://www.uta-net.com/song/381058/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱交叉核對",
    url: "https://youranimes.tw/animes/4614",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185505:OP:1": [{
    label: "動畫官方網站：主題曲與演唱者資料",
    url: "https://anime-necronomico.help/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：數位發行日、動畫搭配與完整 MV",
    url: "https://www.universal-music.co.jp/ryushen/news/2025-07-02-3/",
    language: "ja",
    role: "first_party"
  }, {
    label: "F.M.F：發行日與創作 credit",
    url: "https://www.fmf-music.com/feat-works/%E7%B7%91%E4%BB%99-2/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375512/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5625",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185505:ED:1": [{
    label: "動畫官方網站：主題曲、演唱者與唱片公司資料",
    url: "https://anime-necronomico.help/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位發行日交叉核對",
    url: "https://music.apple.com/jp/song/1819846354",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376457/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5625",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186052:OP:1": [{
    label: "動畫官方新聞：主題曲與無字幕片頭影片",
    url: "https://mizuzokusei-anime.com/news/post-55",
    language: "ja",
    role: "first_party"
  }, {
    label: "名誉伝説官方作品頁：數位單曲",
    url: "https://meiyodensetsu.com/discography/66/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位發行日交叉核對",
    url: "https://music.apple.com/jp/song/1825825583",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/377031/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5663",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186052:ED:1": [{
    label: "動畫官方新聞：主題曲與無字幕片尾影片",
    url: "https://mizuzokusei-anime.com/news/post-55",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：數位單曲與發行日",
    url: "https://www.universal-music.co.jp/misaki/products/uk1as-03272/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：動畫搭配與歌曲背景",
    url: "https://www.universal-music.co.jp/misaki/news/2025-06-13/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375850/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5663",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178675:OP:1": [{
    label: "動畫官方網站：主題曲與數位發行日",
    url: "https://badgirl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方新聞：片頭曲與演唱組合",
    url: "https://news.kingrecords.co.jp/2025/06/39728/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方商品頁：專輯曲目與演唱成員",
    url: "https://www.kingrecords.co.jp/cs/g/gKICA-2640/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380619/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5311",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178675:ED:1": [{
    label: "動畫官方網站：主題曲與數位發行日",
    url: "https://badgirl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：無字幕片尾、創作 credit 與演唱成員",
    url: "https://badgirl-anime.com/news/20250701_160/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方商品頁：專輯曲目與演唱成員",
    url: "https://www.kingrecords.co.jp/cs/g/gKICA-2640/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380614/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5311",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178675:ED:2": [{
    label: "動畫官方網站：主題曲與數位發行日",
    url: "https://badgirl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方商品頁：專輯曲目與演唱資料",
    url: "https://www.kingrecords.co.jp/cs/g/gKICA-2640/",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方專輯介紹：曲目與配信頁",
    url: "https://news.kingrecords.co.jp/2025/09/43682/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380615/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與特別片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5311",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178433:OP:1": [{
    label: "動畫官方網站：片頭主題曲與演唱者資料",
    url: "https://mynoghra-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "佐々木李子官方作品頁：先行配信日、創作 credit 與完整 MV",
    url: "https://sasakirico.com/discography.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376221/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5300",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178433:ED:1": [{
    label: "動畫官方網站：片尾主題曲與演唱者資料",
    url: "https://mynoghra-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "寺島拓篤官方新聞：作詞、作曲與編曲 credit",
    url: "https://takuma-terashima.lantis.jp/news/2256/",
    language: "ja",
    role: "first_party"
  }, {
    label: "寺島拓篤官方新聞：數位先行配信日",
    url: "https://takuma-terashima.lantis.jp/news/2263/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 日本：數位單曲與發行日交叉核對",
    url: "https://music.apple.com/jp/album/more-than-w-single/1818305545",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376225/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5300",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189326:OP:1": [{
    label: "動畫官方網站：後篇片頭曲、創作 credit 與數位發行日",
    url: "https://hanakokun.com/2nd/music/music20250618_01/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：後篇無字幕片頭",
    url: "https://hanakokun.com/2nd/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：完整 MV、數位發行與實體單曲資料",
    url: "https://news.ponycanyon.co.jp/2025/07/112752",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375880/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5803",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189326:ED:1": [{
    label: "動畫官方網站：後篇片尾曲、創作 credit 與數位發行日",
    url: "https://hanakokun.com/2nd/music/music20250618_02/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方影片頁：後篇無字幕片尾",
    url: "https://hanakokun.com/2nd/movie/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方作品頁：數位單曲與發行日",
    url: "https://www.ponycanyon.co.jp/music/PCSP000006624",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：數位發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375881/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5803",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "170113:OP:1": [{
    label: "動畫官方網站：片頭曲、創作 credit 與實體單曲資料",
    url: "https://koujodenka-anime.com/products/detail/i2on4skfkrn9/",
    language: "ja",
    role: "first_party"
  }, {
    label: "前島亜美官方消息：數位先行配信日",
    url: "https://maeshima-ami.net/contents/956548",
    language: "ja",
    role: "first_party"
  }, {
    label: "前島亜美官方作品頁：完整 MV、實體單曲與創作 credit",
    url: "https://maeshima-ami.net/musics/18699",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376296/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/4818",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "170113:ED:1": [{
    label: "動畫官方網站：片尾曲、創作 credit 與專輯資料",
    url: "https://koujodenka-anime.com/products/detail/ho9ktey11y/",
    language: "ja",
    role: "first_party"
  }, {
    label: "岡咲美保官方消息：專輯曲目、創作 credit 與發行日",
    url: "https://www.okasakimiho.com/news/20250420_08.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "King Records 官方消息：數位先行配信日與完整 MV",
    url: "https://news.kingrecords.co.jp/2025/06/40407/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375886/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/4818",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180460:OP:1": [{
    label: "動畫官方網站：片頭曲、演唱者、配信頁與發行日",
    url: "https://mattan-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方消息：作詞、作曲、編曲與數位發行日",
    url: "https://www.sonymusic.co.jp/artist/okazakitaiiku/info/574487",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Artists 官方消息：完整 MV",
    url: "https://www.sma.co.jp/s/sma/news/detail/110995?link=ROBO009",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲、編曲與發行日交叉核對",
    url: "https://www.uta-net.com/song/375667/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5426",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180460:ED:1": [{
    label: "動畫官方網站：片尾曲、演唱者、配信頁與發行日",
    url: "https://mattan-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "KADOKAWA 動畫官方頻道：無字幕片尾影片",
    url: "https://www.youtube.com/watch?v=63MdWK5-Ogk",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：作詞、作曲、編曲與發行日交叉核對",
    url: "https://music.apple.com/tw/song/1821384771",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲、編曲與發行日交叉核對",
    url: "https://www.uta-net.com/song/375804/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5426",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180460:ED:2": [{
    label: "KADOKAWA 動畫官方頻道：第 11 話特殊片尾曲與無字幕影片",
    url: "https://www.youtube.com/watch?v=h5N8L66avCM",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：原聲帶配信頁與發行日",
    url: "https://mattan-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "アニシル：第 11 話使用集數、譯詞、作曲與編曲交叉核對",
    url: "https://www.anisil.com/animes/6354-%E3%81%BE%E3%81%A3%E3%81%9F%E3%81%8F%E6%9C%80%E8%BF%91%E3%81%AE%E6%8E%A2%E5%81%B5%E3%81%A8%E3%81%8D%E3%81%9F%E3%82%89",
    language: "ja",
    role: "cross_check"
  }, {
    label: "平成與令和電視動畫資料庫：原詞、譯詞、作曲、編曲與發行日交叉核對",
    url: "https://televimanga.blog.jp/archives/90008939.html",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與特殊片尾影片交叉核對",
    url: "https://youranimes.tw/animes/5426",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189069:OP:1": [{
    label: "動畫官方網站：主題曲、演唱者與官方配信頁",
    url: "https://milkygalacticuniverse.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "シンエイ動画官方作品頁：主題曲與演唱者資料",
    url: "https://shin-ei-animation.jp/works/milkysubway/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方唱片頁：收錄作品交叉核對",
    url: "https://www.sonymusic.co.jp/artist/CANDIES/discography/buy/SRCL-4351",
    language: "ja",
    role: "first_party"
  }, {
    label: "記憶の記録 LIBRARY：原始專輯、曲目與發行日交叉核對",
    url: "https://www.kiokunokiroku.jp/artist/000484/archive/008378",
    language: "ja",
    role: "cross_check"
  }, {
    label: "歌ネット：動畫搭配、作詞、作曲與編曲交叉核對",
    url: "https://www.uta-net.com/song/219943/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5774",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189069:OP:2": [{
    label: "動畫官方消息：第 1 話片頭分類、演唱與完整製作名單",
    url: "https://back-cms.milkygalacticuniverse.com/158/",
    language: "ja",
    role: "first_party"
  }, {
    label: "MindaRyn 官方作品頁：發行日、製作名單與官方影片",
    url: "https://mindaryn.com/discography/altair-and-vega/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Bandai Namco Music Live 官方消息：第 1 話片頭、發行日、製作名單與影片",
    url: "https://pylonport.bandainamcomusiclive.co.jp/news/311",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：第 1 話片頭與製作名單交叉核對",
    url: "https://www.uta-net.com/song/379448/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與第 1 話片頭影片交叉核對",
    url: "https://youranimes.tw/animes/5774",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185544:OP:1": [{
    label: "動畫官方網站：片頭曲與演唱者資料",
    url: "https://tsuihosha-shokudo.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Dannie May 官方作品頁：創作名單與數位配信頁",
    url: "https://danniemay.com/disco/33th-single%EF%BC%BBdigital%EF%BC%BD%E3%83%A6%E3%83%8B%E3%83%BC%E3%82%AF/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：動畫搭配、發行日、作詞、作曲與編曲交叉核對",
    url: "https://www.uta-net.com/song/376080/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5633",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185544:ED:1": [{
    label: "動畫官方網站：片尾曲與演唱者資料",
    url: "https://tsuihosha-shokudo.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "超ときめき♡宣伝部官方消息：動畫片尾曲分類與演唱資料",
    url: "https://toki-sen.com/contents/939957",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：動畫搭配、發行日、作詞、作曲與編曲交叉核對",
    url: "https://www.uta-net.com/song/376602/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5633",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186561:OP:1": [{
    label: "Cloud Nine 官方消息：動畫片頭曲、製作名單、發行日與配信頁",
    url: "https://cloud9pro.co.jp/news/p/11567/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方作品頁：數位單曲與發行日",
    url: "https://www.ponycanyon.co.jp/music/PCSP000006631",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方消息：完整 MV、動畫搭配、製作名單與發行日",
    url: "https://news.ponycanyon.co.jp/2025/07/112924",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5704",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186561:ED:1": [{
    label: "Pony Canyon 官方作品頁：數位單曲資料",
    url: "https://www.ponycanyon.co.jp/music/PCSP000006516",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲、演唱者與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5704",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "繁體中文維基百科：主題曲分類、演唱者與製作名單交叉核對",
    url: "https://zh.wikipedia.org/wiki/%E6%B0%A3%E7%B5%95%E5%8B%87%E8%80%85%E8%88%87%E6%9A%97%E6%AE%BA%E5%85%AC%E4%B8%BB",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180794:OP:1": [{
    label: "動畫官方消息：片頭曲、演唱者、完整製作名單與發行日",
    url: "https://gacen-girl-anime.com/news/index00200000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方音樂頁：片頭曲、雙人演唱與製作名單",
    url: "https://gacen-girl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：片頭曲、演唱者與製作名單交叉核對",
    url: "https://www.uta-net.com/song/376133/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5437",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "繁體中文維基百科：作品名稱、片頭曲、演唱者與製作名單交叉核對",
    url: "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%A8%82%E5%A0%B4%E5%B0%91%E5%A5%B3%E7%9A%84%E7%95%B0%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180794:ED:1": [{
    label: "動畫官方消息：片尾曲、演唱者與完整製作名單",
    url: "https://gacen-girl-anime.com/news/index00120000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方消息：片尾曲與發行日",
    url: "https://gacen-girl-anime.com/news/index00200000.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方音樂頁：片尾曲、演唱者、製作名單與配信入口",
    url: "https://gacen-girl-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5437",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "繁體中文維基百科：作品名稱、片尾曲、演唱者與製作名單交叉核對",
    url: "https://zh.wikipedia.org/wiki/%E9%81%8A%E6%A8%82%E5%A0%B4%E5%B0%91%E5%A5%B3%E7%9A%84%E7%95%B0%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "196229:OP:1": [{
    label: "Takara Tomy 官方播出頁：主題曲分類、演唱者與完整製作名單",
    url: "https://www.takaratomy.co.jp/products/tomica/jobraver/anime/broadcast/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Takara Tomy 官方新聞稿：片頭主題曲、演唱者與完整製作名單",
    url: "https://www.takaratomy.co.jp/product_release/pdf/p250516.pdf",
    language: "ja",
    role: "first_party"
  }, {
    label: "ORICON NEWS：2025 電視動畫與主題曲交叉核對",
    url: "https://www.oricon.co.jp/anime/187/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "アニソン・オンライン：主題曲與演唱者交叉核對",
    url: "https://anison.online/anime/5312",
    language: "ja",
    role: "cross_check"
  }, {
    label: "PChome：繁體中文系列名稱交叉核對",
    url: "https://24h.pchome.com.tw/books/prod/DJBF1Z-A900JVNCW",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179885:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、演唱者、完整製作名單與實體單曲資料",
    url: "https://tsuiho-shiromadoshi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "梶原岳人官方作品頁：單曲、動畫搭配與實體發行資料",
    url: "https://avex.jp/kajiwaragakuto/discography/?c=single",
    language: "ja",
    role: "first_party"
  }, {
    label: "梶原岳人官方消息：數位單曲先行配信日",
    url: "https://avex.jp/kajiwaragakuto/news/detail.php?id=1126205",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片頭曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5390",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：2025 夏季片頭曲與演唱者交叉核對",
    url: "https://home.gamer.com.tw/artwork.php?sn=6167561",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179885:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、演唱者、完整製作名單與數位配信日",
    url: "https://tsuiho-shiromadoshi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ChouCho 官方完整 MV：動畫搭配與完整歌曲",
    url: "https://www.youtube.com/watch?v=lucxQJk-KLI",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music：數位單曲與發行日",
    url: "https://music.apple.com/jp/song/1820168761",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱、片尾曲與官方動畫交叉核對",
    url: "https://youranimes.tw/animes/5390",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：2025 夏季片尾曲與演唱者交叉核對",
    url: "https://home.gamer.com.tw/artwork.php?sn=6167561",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179678:OP:1": [{
    label: "動畫官方網站：無字幕片頭、數位配信與單曲資料",
    url: "https://nube-anime.com/news/1492/",
    language: "ja",
    role: "first_party"
  }, {
    label: "慈愚挫愚官方網站：數位單曲與發行日",
    url: "https://zigzag.asia/works/haishin-014.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376209/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286773",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭影片交叉核對",
    url: "https://youranimes.tw/animes/5360",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179678:ED:1": [{
    label: "動畫官方網站：無字幕片尾與數位配信資料",
    url: "https://nube-anime.com/news/1602/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Chilli Beans. 官方作品頁：數位單曲與發行入口",
    url: "https://chilli-beans.com/discography/detail/5532/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Chilli Beans. 官方新聞：動畫搭配與發行日",
    url: "https://chilli-beans.com/news/detail/34262",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376337/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特 GNN：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286773",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾影片交叉核對",
    url: "https://youranimes.tw/animes/5360",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "193883:OP:1": [{
    label: "動畫官方網站：作品與主題曲資料",
    url: "https://chibigodzilla.jp/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：發行日與動畫搭配資料",
    url: "https://wmg.jp/wedcamp/discography/31405/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：無字幕片頭影片資料",
    url: "https://wmg.jp/wedcamp/news/90120/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：完整 MV 資料",
    url: "https://wmg.jp/wedcamp/news/90142/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/375984/",
    language: "ja",
    role: "cross_check"
  }],
  "156395:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://busunihanatabawo.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "TWS 官方網站：動畫搭配與詞曲編資料",
    url: "https://tws-official.jp/news/99f75560b878",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/3974",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "156395:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://busunihanatabawo.com/",
    language: "ja",
    role: "first_party"
  }, {
    label: "VAP 官方新聞稿：發行與完整 MV 資料",
    url: "https://prtimes.jp/main/html/rd/p/000000121.000034440.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376492/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/3974",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:OP:1": [{
    label: "動畫官方網站：京都篇片頭曲",
    url: "https://tougenanki-anime.com/music/op/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞稿：發行、完整 MV 與無字幕片頭影片",
    url: "https://prtimes.jp/main/html/rd/p/000002024.000031071.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "THE ORAL CIGARETTES 官方網站：動畫 MV",
    url: "https://theoralcigarettes.com/news/detail/3047",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376218/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:OP:2": [{
    label: "動畫官方網站：練馬篇片頭曲",
    url: "https://tougenanki-anime.com/music/op2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "超学生官方網站：單曲發行資料",
    url: "https://chogakusei.com/discography",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380958/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:ED:1": [{
    label: "動畫官方網站：京都篇片尾曲",
    url: "https://tougenanki-anime.com/music/ed/",
    language: "ja",
    role: "first_party"
  }, {
    label: "BAND-MAID 官方網站：發行與完整 MV 資料",
    url: "https://bandmaid.tokyo/musics/19155",
    language: "ja",
    role: "first_party"
  }, {
    label: "波麗佳音台灣：繁體中文發行與 MV 資料",
    url: "https://ponycanyon.com.tw/post/2788/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376543/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177474:ED:2": [{
    label: "動畫官方網站：練馬篇片尾曲",
    url: "https://tougenanki-anime.com/music/ed2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：發行與完整 MV 資料",
    url: "https://news.ponycanyon.co.jp/2025/10/115143",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380937/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5224",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185965:OP:1": [{
    label: "動畫官方網站：第一季度片頭曲與發行資料",
    url: "https://2solocamp-anime.com/music/op.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "スカート官方網站：動畫搭配與發行資料",
    url: "https://skirtskirtskirt.com/news/post/5840",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376140/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5658",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185965:OP:2": [{
    label: "動畫官方網站：第二季度片頭曲與發行資料",
    url: "https://2solocamp-anime.com/music/op2.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "LDH 官方新聞：動畫搭配、發行與完整 MV 資料",
    url: "https://www.ldh.co.jp/news/detail.php?lang=jpn&newsid=0000052169&site=TRIBE",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380656/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5658",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185965:ED:1": [{
    label: "動畫官方網站：片尾曲、發行與完整製作名單",
    url: "https://2solocamp-anime.com/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "オーイシマサヨシ官方網站：單曲發行與完整製作名單",
    url: "https://www.014014.jp/discography/6954",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376259/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲次序交叉核對",
    url: "https://youranimes.tw/animes/5658",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198745:OP:1": [{
    label: "ABC Animation 官方唱片頁：片頭曲、發行日與完整製作名單",
    url: "https://www.abc-anime.co.jp/music/detail?id=1",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/381649/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "三隻老虎的原聲帶筆記：繁體中文作品名稱與季度音樂資料交叉核對",
    url: "https://santora.tw/2025-summer-anime/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198745:ED:1": [{
    label: "ABC Animation 官方唱片頁：片尾曲、發行日與完整製作名單",
    url: "https://www.abc-anime.co.jp/music/detail?id=2",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/381652/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "三隻老虎的原聲帶筆記：繁體中文作品名稱與季度音樂資料交叉核對",
    url: "https://santora.tw/2025-summer-anime/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "194088:ED:1": [{
    label: "東京電視台官方新聞稿：第十五期片尾曲資料",
    url: "https://www.tv-tokyo.co.jp/information/202506/5057.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "ナオト・インティライミ官方網站：動畫搭配與正式曲名",
    url: "https://www.nananaoto.com/news/ENJ_naoto_news_6ce0462a9f6e48ac8dfdf7e48d4e9726",
    language: "ja",
    role: "first_party"
  }, {
    label: "ナオト・インティライミ官方網站：發行日、Lyric Video 與發行入口",
    url: "https://www.nananaoto.com/news/ENJ_naoto_news_3b7a976fb0f60351d96a3b97923e7c2a",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376618/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：季度作品與片尾曲交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E6%9A%97%E8%8A%9D%E5%B1%85",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "166215:OP:1": [{
    label: "動畫官方網站：主題曲與製作名單",
    url: "https://utamille.com/music/post-7/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：演唱組合、單曲發行日與完整製作名單",
    url: "https://news.ponycanyon.co.jp/2025/05/111101",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：曲名、發行日、作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/375907/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與主題曲交叉核對",
    url: "https://youranimes.tw/animes/4331/videos",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：正式中文作品名稱、演唱組合與製作名單交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E6%AD%8C%E8%81%B2%E6%98%AF%E6%B3%95%E5%BC%8F%E5%8D%83%E5%B1%A4%E9%85%A5",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175914:OP:1": [{
    label: "動畫官方網站：第二季片頭曲與作品搭配資料",
    url: "https://yofukashi-no-uta.com/news/20250605_130/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：數位發行日與動畫搭配資料",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/info/574463",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：正式 MV、發行入口與單曲資料",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/info/575650",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲名單交叉核對",
    url: "https://www.uta-net.com/song/376217/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175914:ED:1": [{
    label: "動畫官方網站：第二季片尾曲與作品搭配資料",
    url: "https://yofukashi-no-uta.com/news/20250704_183/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：數位發行日、發行入口與單曲資料",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/info/575650",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲名單交叉核對",
    url: "https://www.uta-net.com/song/376216/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175914:ED:2": [{
    label: "動畫第一季官方網站：正式歌曲名稱與作品搭配資料",
    url: "https://yofukashi-no-uta.com/1st/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方數位單曲頁：正式曲名與原始發行日",
    url: "https://www.sonymusic.co.jp/artist/creepynuts/discography/buy/AIXX01411B01A",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲名單交叉核對",
    url: "https://www.uta-net.com/song/260226/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45303",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179344:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://kanokari-official.com/4th/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：數位發行日與正式發行入口",
    url: "https://www.sonymusic.co.jp/artist/claris/info/575423",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：正式 MV 與歌曲發行資料",
    url: "https://www.sonymusic.co.jp/artist/claris/info/575422",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=49141",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179344:ED:1": [{
    label: "動畫官方網站：片尾曲、作詞與作曲名單",
    url: "https://kanokari-official.com/4th/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "リーガルリリー官方新聞：數位發行日、正式 MV 與發行入口",
    url: "https://www.office-augusta.com/regallily/news/?post=news-20250701",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲名單交叉核對",
    url: "https://www.uta-net.com/song/375577/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=49141",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "183128:OP:1": [{
    label: "動畫官方網站：片頭曲與數位發行日",
    url: "https://karaoke-muchusa.com/muchusa/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "A-Sketch 官方唱片頁：發行日與完整製作名單",
    url: "https://www.a-sketch.com/discography/%E3%83%A9%E3%83%96%E3%83%AB/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45336",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：片頭曲與製作名單交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E7%82%BA%E4%BD%A0%E8%91%97%E8%BF%B7",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "183128:ED:1": [{
    label: "動畫官方網站：片尾曲與數位發行日",
    url: "https://karaoke-muchusa.com/muchusa/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "山下大輝官方唱片頁：動畫搭配、發行日與完整製作名單",
    url: "https://yamashitadaiki.com/discography/1171/",
    language: "ja",
    role: "first_party"
  }, {
    label: "A-Sketch 官方唱片頁：完整製作名單與發行入口",
    url: "https://www.a-sketch.com/discography/%E5%B1%B1%E4%B8%8B%E5%A4%A7%E8%BC%9D-x-%E7%95%A0%E4%B8%AD%E7%A5%90%E3%80%8C%E5%BE%AE%E7%82%AD%E9%85%B8%E3%82%A2%E3%83%89%E3%83%AC%E3%82%BB%E3%83%B3%E3%82%B9%E3%80%8D/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/animeVideo.php?sn=45336",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "中文維基百科繁體版：片尾曲與製作名單交叉核對",
    url: "https://zh.wikipedia.org/zh-hant/%E7%82%BA%E4%BD%A0%E8%91%97%E8%BF%B7",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "198408:ED:1": [{
    label: "動畫官方網站：主題曲、演唱者與完整製作名單",
    url: "https://latair.jp/tvanime/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：主題曲、製作名單與官方影片",
    url: "https://latair.jp/2025/08/14/latair0905/",
    language: "ja",
    role: "first_party"
  }, {
    label: "CLASS EARTH 官方新聞稿：主題曲與作品搭配資料",
    url: "https://prtimes.jp/main/html/rd/p/000000033.000121038.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "ORICON NEWS：作品與主題曲交叉核對",
    url: "https://www.oricon.co.jp/anime/428/",
    language: "ja",
    role: "cross_check"
  }],
  "183127:OP:1": [{
    label: "動畫官方網站：片頭曲與作品搭配資料",
    url: "https://karaoke-muchusa.com/karaoke/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方唱片頁：發行日與正式 MV",
    url: "https://wmg.jp/ayumu-imazu/discography/31724/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方新聞：數位發行日與動畫搭配資料",
    url: "https://wmg.jp/ayumu-imazu/news/90155/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特動畫瘋：繁體中文正式作品名稱與授權播映資料",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲與編曲名單交叉核對",
    url: "https://www.uta-net.com/song/377098/",
    language: "ja",
    role: "cross_check"
  }],
  "181841:OP:1": [{
    label: "動畫官方網站：片頭曲與發行資料",
    url: "https://city-the-animation.com/music/opening/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：作品發行資料",
    url: "https://news.ponycanyon.co.jp/2025/05/111305",
    language: "ja",
    role: "first_party"
  }, {
    label: "Prime Video 台灣：繁體中文作品與集數交叉核對",
    url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "181841:ED:1": [{
    label: "動畫官方網站：片尾曲與發行資料",
    url: "https://city-the-animation.com/music/ending/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Pony Canyon 官方新聞：作品發行與 MV 資料",
    url: "https://news.ponycanyon.co.jp/2025/07/112579",
    language: "ja",
    role: "first_party"
  }, {
    label: "Prime Video 台灣：繁體中文作品與集數交叉核對",
    url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "181841:ED:3": [{
    label: "動畫官方網站：第 11 話資料",
    url: "https://city-the-animation.com/story/11/",
    language: "ja",
    role: "first_party"
  }, {
    label: "美國國會圖書館：器樂曲與作曲者資料交叉核對",
    url: "https://lcweb2.loc.gov/static/programs/national-recording-preservation-board/documents/Mambo-No-5_Firmat.pdf",
    language: "en",
    role: "cross_check"
  }, {
    label: "Prime Video 台灣：繁體中文第 11 話交叉核對",
    url: "https://www.primevideo.com/-/zh_TW/detail/0S1DSDV3YPNM8W8GZQK8FJTZ9H",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175124:OP:1": [{
    label: "動畫官方網站：片頭曲資料",
    url: "https://nyailivi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "THE YELLOW MONKEY 官方歌詞頁：作詞與作曲資料",
    url: "https://theyellowmonkeysuper.jp/lyrics/detail/1029/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：發行與動畫搭配資料",
    url: "https://wmg.jp/theyellowmonkey/news/90143/",
    language: "ja",
    role: "first_party"
  }, {
    label: "VGMdb：唱片編曲資料交叉核對",
    url: "https://vgmdb.net/album/152460",
    language: "en",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286804",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175124:ED:1": [{
    label: "動畫官方網站：片尾曲資料",
    url: "https://nyailivi.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WANIMA 官方網站：作品與發行資料",
    url: "https://wanima.net/musics/19109",
    language: "ja",
    role: "first_party"
  }, {
    label: "WANIMA 官方網站：動畫搭配與 MV 資料",
    url: "https://wanima.net/contents/960452",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376149/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與片尾曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286804",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179828:OP:1": [{
    label: "動畫官方網站：片頭曲、影片與發行資料",
    url: "https://cuckoos-anime.com/news.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Labels 官方新聞稿：製作名單、MV 與發行資料",
    url: "https://prtimes.jp/main/html/rd/p/000004609.000013546.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫瘋：繁體中文主題曲與完整製作名單交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5377",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179828:ED:1": [{
    label: "動畫官方網站：片尾曲、影片與發行資料",
    url: "https://cuckoos-anime.com/news.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "22/7 官方網站：製作名單、MV 與發行資料",
    url: "https://nanabunnonijyuuni-mobile.com/s/n110/news/detail/10840",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方唱片頁：作品與動畫搭配資料",
    url: "https://www.sonymusic.co.jp/artist/nanabunnonijyuuni/discography/SRCL-13336",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫瘋：繁體中文主題曲與完整製作名單交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5377",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182309:OP:1": [{
    label: "動畫官方網站：片頭曲與合作歌手資料",
    url: "https://grandblue-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "湘南乃風官方網站：完整歌曲、發行與配信資料",
    url: "https://www.134r.com/news/detail.html?id=9335",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：唱片與發行資料",
    url: "https://www.universal-music.co.jp/shounannokaze/products/up1as-02840/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380539/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與台灣播出資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=288001",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5491",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "182309:ED:1": [{
    label: "動畫官方網站：片尾曲、合作歌手與發行資料",
    url: "https://grandblue-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "SEAMO 官方網站：動畫搭配與配信資料",
    url: "https://seamo.jp/contents/959127",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376306/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與台灣播出資料交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=288001",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5491",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184591:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://www.watanare-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞：作品、MV 與發行資料",
    url: "https://www.sonymusic.co.jp/artist/nanaoakari/info/575468",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376166/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "動畫瘋：繁體中文作品與主題曲交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5574",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184591:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://www.watanare-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "フィロソフィーのダンス官方網站：動畫搭配與發行資料",
    url: "https://danceforphilosophy.com/news/2025/06/10/5655",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方唱片頁：作品與發行資料",
    url: "https://www.sonymusic.co.jp/artist/philosophynodance/discography/SRCL-13389",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376528/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "動畫瘋：繁體中文作品與主題曲交叉核對",
    url: "https://ani.gamer.com.tw/seasonal.php?c=2025_S3",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5574",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "173780:OP:1": [{
    label: "動畫官方網站：第四季片頭曲與演唱者資料",
    url: "https://shieldhero-anime.jp/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "日本哥倫比亞官方唱片頁：完整製作名單與發行資料",
    url: "https://columbia.jp/madkid/disco/resolution.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376402/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=284346",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/4965",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "173780:ED:1": [{
    label: "動畫官方網站：第四季片尾曲與演唱者資料",
    url: "https://shieldhero-anime.jp/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "日本哥倫比亞官方唱片頁：動畫搭配、MV 與發行資料",
    url: "https://columbia.jp/artist-info/fujikawachiai/discography/COKM-45814.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "藤川千愛官方網站：完整 MV 資料",
    url: "https://fujikawachiai.com/news/new_mv/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376247/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=284346",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/4965",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177880:OP:1": [{
    label: "動畫官方網站：第四季片頭曲與日語改編資料",
    url: "https://osomatsusan.com/news/detail/?id=1125264",
    language: "ja",
    role: "first_party"
  }, {
    label: "DA PUMP 官方網站：完整製作名單與動畫搭配資料",
    url: "https://dapump-fc.jp/news/detail/915",
    language: "ja",
    role: "first_party"
  }, {
    label: "avex 官方新聞：唱片、MV 與配信資料",
    url: "https://avexnet.jp/news/1027003",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376018/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286655",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5269",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177880:ED:1": [{
    label: "動畫官方網站：片尾曲、演唱組合與完整製作名單",
    url: "https://osomatsusan.com/news/detail/?id=1125436",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方唱片頁：演唱角色、版本與發行資料",
    url: "https://osomatsusan.com/bd-dvd-cd/detail/?id=1021053",
    language: "ja",
    role: "first_party"
  }, {
    label: "あたらよ官方網站：動畫搭配與完整製作名單",
    url: "https://atarayo-jp.com/contents/942360",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/380723/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286655",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5269",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "151799:OP:1": [{
    label: "動畫官方音樂頁：唯一片頭曲條目、完整演出名義與發行資料",
    url: "https://newpsg.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：片頭曲、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376855/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Tower Records：唱片曲目與編曲資料交叉核對",
    url: "https://tower.jp/item/6853227",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品、片頭曲與 Ver.2 影片交叉核對",
    url: "https://youranimes.tw/animes/4368",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "151799:ED:1": [{
    label: "動畫官方音樂頁：片尾曲、演出名義與發行資料",
    url: "https://newpsg.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "m-flo 官方網站：片尾曲搭配、演唱合作與配信資料",
    url: "https://m-flo.com/news/26",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：片尾曲、作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376608/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Tower Records：唱片曲目與編曲資料交叉核對",
    url: "https://tower.jp/item/6853227",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/4368",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177887:OP:1": [{
    label: "Netflix 官方新聞：久石讓負責片頭、片尾與劇中歌曲",
    url: "https://about.netflix.com/ja/news/leviathan-takes-flight-on-july-10",
    language: "ja",
    role: "first_party"
  }, {
    label: "Qobuz／Netflix Music：原聲帶版本、作詞、作曲與配器資料交叉核對",
    url: "https://www.qobuz.com/us-en/album/leviathan-soundtrack-from-the-netflix-series-nobuko-toda-kazuma-jinnouchi/z8p6zgbtcmwib",
    language: "en",
    role: "cross_check"
  }, {
    label: "MusicBrainz：作品別名、作詞與作曲資料交叉核對",
    url: "https://musicbrainz.org/work/b621aa3d-03ba-4649-b58d-8a73de669241",
    language: "en",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5271",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177887:ED:1": [{
    label: "Netflix 官方新聞：久石讓負責片頭、片尾與劇中歌曲",
    url: "https://about.netflix.com/ja/news/leviathan-takes-flight-on-july-10",
    language: "ja",
    role: "first_party"
  }, {
    label: "Qobuz／Netflix Music：原聲帶演唱、作詞、作曲與配器資料交叉核對",
    url: "https://www.qobuz.com/us-en/album/leviathan-soundtrack-from-the-netflix-series-nobuko-toda-kazuma-jinnouchi/z8p6zgbtcmwib",
    language: "en",
    role: "cross_check"
  }, {
    label: "JOYSOUND：日文歌名、演唱、作詞與作曲資料交叉核對",
    url: "https://www.joysound.com/web/search/song/1123344",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5271",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178090:OP:1": [{
    label: "動畫官方音樂頁：第 2 期片頭曲、製作名單與發行資料",
    url: "https://dainanaoji.com/music",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5294",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片頭曲與製作名單交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=140000",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178090:ED:1": [{
    label: "動畫官方音樂頁：第 2 期片尾曲、製作名單與發行資料",
    url: "https://dainanaoji.com/music",
    language: "ja",
    role: "first_party"
  }, {
    label: "Lantis 官方商品頁：片尾曲曲目與製作名單",
    url: "https://www.lantis.jp/release-item/LACM-34706.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5294",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱、片尾曲與製作名單交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=140000",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178886:OP:1": [{
    label: "動畫官方音樂頁：片頭曲、主唱與完整製作名單",
    url: "https://mikadono.family/music/op.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片頭曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "178886:ED:1": [{
    label: "動畫官方音樂頁：三首角色片尾曲與演唱名義",
    url: "https://mikadono.family/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aniplex 官方新聞：一輝版片尾曲、製作名單與無字幕影片",
    url: "https://www.aniplex.co.jp/news/detail/?id=68254",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方角色歌曲專輯頁：三首片尾曲收錄資料",
    url: "https://mikadono.family/music/cd.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與三首片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片尾曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "178886:ED:2": [{
    label: "動畫官方音樂頁：三首角色片尾曲與演唱名義",
    url: "https://mikadono.family/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aniplex 官方新聞：二琥版片尾曲、製作名單與無字幕影片",
    url: "https://www.aniplex.co.jp/news/detail/?id=68299",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方角色歌曲專輯頁：三首片尾曲收錄資料",
    url: "https://mikadono.family/music/cd.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與三首片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片尾曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "178886:ED:3": [{
    label: "動畫官方音樂頁：三首角色片尾曲與演唱名義",
    url: "https://mikadono.family/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aniplex 官方新聞：三和版片尾曲、製作名單與無字幕影片",
    url: "https://www.aniplex.co.jp/news/detail/?id=68366",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方角色歌曲專輯頁：三首片尾曲收錄資料",
    url: "https://mikadono.family/music/cd.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品名稱與三首片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5326",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：片尾曲作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/tieup/19263/",
    language: "ja",
    role: "cross_check"
  }],
  "185755:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://puniru-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文作品與片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286621",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5647",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185755:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://puniru-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：第二期歌曲專輯與翻唱資料",
    url: "https://puniru-anime.com/music/album02/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與季度交叉核對",
    url: "https://youranimes.tw/animes/5647",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184574:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://dekinnomogura.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "syudou 官方網站：作品與發行資料",
    url: "https://syudou.com/disco/%E7%A5%9E%E9%A0%BC%E3%81%BF/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5572",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184574:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://dekinnomogura.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Aile The Shota 官方網站：客席演出與動畫搭配資料",
    url: "https://ailetheshota.tokyo/topic/dekinnomogura/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376277/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5572",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179879:OP:1": [{
    label: "動畫官方網站：片頭曲、發行與影片資料",
    url: "https://zutaboro-anime.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：作詞、作曲與編曲資料",
    url: "https://www.sonymusic.co.jp/artist/krage/info/576315",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5391",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179879:ED:1": [{
    label: "動畫官方網站：片尾曲、發行與影片資料",
    url: "https://zutaboro-anime.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Myuk 官方網站：作品、作詞、作曲與編曲資料",
    url: "https://myuk.jp/867/",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文作品與主題曲交叉核對",
    url: "https://youranimes.tw/animes/5391",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186003:OP:1": [{
    label: "動畫官方網站：片頭曲資料",
    url: "https://www.fermat-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：作品發行與影片資料",
    url: "https://www.universal-music.co.jp/oshikikeigo/news/2025-06-13/",
    language: "ja",
    role: "first_party"
  }, {
    label: "音樂Natalie：作詞、作曲與編曲資料",
    url: "https://natalie.mu/music/pickup/oshikikeigo",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5661",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "186003:ED:1": [{
    label: "動畫官方網站：片尾曲資料",
    url: "https://www.fermat-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "DXTEEN 官方繁體中文唱片頁：作品與動畫搭配資料",
    url: "https://dxteen.com/discography/detail/33/?lang=zh-tw",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376607/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5661",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184034:OP:1": [{
    label: "動畫官方網站：片頭曲與發行資料",
    url: "https://hotel-inhumans.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "imase 官方網站：作品發行資料",
    url: "https://www.imase-official.com/news/detail/324",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5554",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "184034:ED:1": [{
    label: "動畫官方網站：片尾曲與發行資料",
    url: "https://hotel-inhumans.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：作品、影片與發行資料",
    url: "https://www.universal-music.co.jp/noa/news/2025-08-06/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376114/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：台灣繁體中文主題曲交叉核對",
    url: "https://youranimes.tw/animes/5554",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "157960:OP:1": [{
    label: "動畫官方網站：主題曲與完整製作名單",
    url: "https://bullet-bullet.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "CHANMINA 官方網站：作品發行資料",
    url: "https://chanmina.com/discography/detail/43/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286389",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "157960:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://bullet-bullet.com/music.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan：作品與發行資料",
    url: "https://wmg.jp/newspeak/discography/31707/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特電玩資訊站：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286389",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180929:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://rurinohouseki.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片與發行頁",
    url: "https://www.sonymusic.co.jp/artist/yasudarei/info/576243",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1872/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180929:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://rurinohouseki.com/music/?id=ed",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片與發行資料",
    url: "https://www.sonymusic.co.jp/artist/HanaHope/info/575991",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1872/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "179966:OP:1": [{
    label: "動畫官方網站：片頭曲與共同發行資料",
    url: "https://silentwitch.net/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片頭影片公告",
    url: "https://silentwitch.net/news/?article_id=68152",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片公告",
    url: "https://www.sonymusic.co.jp/artist/hitsujibungaku/info/575459",
    language: "ja",
    role: "first_party"
  }, {
    label: "台灣索尼音樂：繁體中文作品與主題曲交叉核對",
    url: "https://www.sonymusic.com.tw/album/d-o-n-t-l-a-u-g-h-i-t-o-f-f/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Tower Records：作詞、作曲與編曲資料",
    url: "https://tower.jp/item/7109461",
    language: "ja",
    role: "cross_check"
  }],
  "179966:ED:1": [{
    label: "動畫官方網站：片尾曲與共同發行資料",
    url: "https://silentwitch.net/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片尾影片公告",
    url: "https://silentwitch.net/news/?article_id=68207",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Japan：完整音樂影片公告",
    url: "https://www.sonymusic.co.jp/artist/hitsujibungaku/info/573730",
    language: "ja",
    role: "first_party"
  }, {
    label: "台灣索尼音樂：繁體中文片尾曲資料",
    url: "https://www.sonymusic.com.tw/album/mild-days/",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Tower Records：作詞、作曲與編曲資料",
    url: "https://tower.jp/item/7109461",
    language: "ja",
    role: "cross_check"
  }],
  "185519:OP:1": [{
    label: "動畫官方網站：片頭曲、製作名單與發行頁",
    url: "https://www.foodcourtjk-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌手官方網站：音樂影片公告",
    url: "https://oisiclemelonpan.com/news/3526/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1857/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185519:ED:1": [{
    label: "動畫官方網站：唯一片尾曲、製作名單與發行頁",
    url: "https://www.foodcourtjk-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：片尾曲串流公告",
    url: "https://www.foodcourtjk-anime.com/news/post-31",
    language: "ja",
    role: "first_party"
  }, {
    label: "KADOKAWA 官方影片：同曲特別片尾影片",
    url: "https://www.youtube.com/watch?v=_vORepjHH7M",
    language: "ja",
    role: "first_party"
  }, {
    label: "ACG Secrets：香港繁體中文主題曲交叉核對",
    url: "https://acgsecrets.hk/anime/1857/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177761:OP:1": [{
    label: "動畫官方網站：片頭曲與完整製作名單",
    url: "https://nine-anime.marv.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片頭影片公告",
    url: "https://nine-anime.marv.jp/news/post-42/",
    language: "ja",
    role: "first_party"
  }, {
    label: "9-nine 官方網站：OP&ED 串流發行公告",
    url: "https://9-nine-project.com/news/info/145/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=139603",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177761:ED:1": [{
    label: "動畫官方網站：片尾曲與完整製作名單",
    url: "https://nine-anime.marv.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：無字幕片尾影片公告",
    url: "https://nine-anime.marv.jp/news/post-45",
    language: "ja",
    role: "first_party"
  }, {
    label: "9-nine 官方網站：OP&ED 串流發行公告",
    url: "https://9-nine-project.com/news/info/145/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=139603",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180425:OP:1": [{
    label: "動畫官方網站：片頭曲與發行資料",
    url: "https://amekimi-anime.com/music/oped.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "鈴木真海子官方網站：作品發行資料",
    url: "https://www.suzukimamiko.com/music/project-single-ameto",
    language: "ja",
    role: "first_party"
  }, {
    label: "Qobuz：作品製作名單交叉核對",
    url: "https://www.qobuz.com/jp-ja/album/-/ryhwuykb73zya",
    language: "ja",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=287297",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "180425:ED:1": [{
    label: "動畫官方網站：片尾曲與發行資料",
    url: "https://amekimi-anime.com/music/oped.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "菅原圭官方網站：單曲發行資料",
    url: "https://kei-sugawara.jp/musics/19300",
    language: "ja",
    role: "first_party"
  }, {
    label: "菅原圭官方網站：作品製作名單",
    url: "https://kei-sugawara.jp/musics/20590",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=287297",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177175:OP:1": [{
    label: "動畫官方網站：無字幕片頭與製作名單",
    url: "https://arknights-anime.jp/news/40",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：單曲、MV 與完整製作名單",
    url: "https://www.sonymusic.co.jp/artist/ReoNa/info/575622",
    language: "ja",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71503/arknights-rise-from-ember-anime-season-3rd-in-july-2025",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177175:ED:1": [{
    label: "動畫官方網站：片尾 MV、發行與製作名單",
    url: "https://arknights-anime.jp/news/44",
    language: "ja",
    role: "first_party"
  }, {
    label: "糸奇はな官方網站：主唱、作詞與作曲資料",
    url: "https://110ki.com/profile/",
    language: "ja",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71503/arknights-rise-from-ember-anime-season-3rd-in-july-2025",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177175:ED:2": [{
    label: "動畫官方網站：最終話片尾、影片與製作名單",
    url: "https://arknights-anime.jp/news/46",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music：最終話片尾發行資料",
    url: "https://www.sonymusic.co.jp/artist/ReoNa/info/576982",
    language: "ja",
    role: "first_party"
  }, {
    label: "PRTS 中文資料庫：三首主題曲交叉核對",
    url: "https://prts.wiki/w/%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%EF%BC%9A%E7%84%B0%E7%83%AC%E6%9B%99%E6%98%8E",
    language: "zh-Hans",
    role: "cross_check"
  }],
  "181444:OP:1": [{
    label: "動畫官方網站：Opening Music",
    url: "https://kaoruhana-anime.com/music/op.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "キタニタツヤ官方網站：CD 與 MV 資料",
    url: "https://tatsuyakitani.com/news/2265/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286652",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "Qobuz：詞曲編資料交叉核對",
    url: "https://www.qobuz.com/jp-ja/album/your-gaze-crepuscular-tatsuya-kitani/p2glqvqeilcfa",
    language: "ja",
    role: "cross_check"
  }],
  "181444:ED:1": [{
    label: "動畫官方網站：Ending Music",
    url: "https://kaoruhana-anime.com/music/ed.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "汐れいら官方網站：發行與詞曲資料",
    url: "https://ushioreira.com/blogs/discography/%E3%83%8F%E3%83%AC%E3%81%AE%E6%97%A5%E3%81%AB",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文主題曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286652",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "UtaTen：編曲資料交叉核對",
    url: "https://utaten.com/songWriter/15902",
    language: "ja",
    role: "cross_check"
  }],
  "178025:OP:1": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=286936",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178025:OP:2": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：第 2 期主題曲公告",
    url: "https://gachiakuta-anime.com/news/detail/?id=1128704",
    language: "ja",
    role: "first_party"
  }],
  "178025:ED:1": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ALLT STUDIO：發行與 MV 公告",
    url: "https://alltstudio.jp/news/681/",
    language: "ja",
    role: "first_party"
  }],
  "178025:ED:2": [{
    label: "動畫官方網站：Music",
    url: "https://gachiakuta-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方網站：第 2 期主題曲公告",
    url: "https://gachiakuta-anime.com/news/detail/?id=1128704",
    language: "ja",
    role: "first_party"
  }, {
    label: "カラノア官方網站：發行與 MV 公告",
    url: "https://karanoah.fanpla.jp/news/detail/57640",
    language: "ja",
    role: "first_party"
  }],
  "184237:OP:1": [{
    label: "動畫官方網站：第 1 季第 2 部 Music",
    url: "https://sakamotodays.jp/1st/music/season1-part2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Kroi 官方唱片資料",
    url: "https://kroi.net/discography/detail/5281/",
    language: "ja",
    role: "first_party"
  }, {
    label: "波麗佳音台灣：繁體中文發行資料",
    url: "https://ponycanyon.com.tw/post/2520/",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "UtaTen：詞曲編資料交叉核對",
    url: "https://utaten.com/songWriter/60999/",
    language: "ja",
    role: "cross_check"
  }],
  "184237:ED:1": [{
    label: "動畫官方網站：第 1 季第 2 部 Music",
    url: "https://sakamotodays.jp/1st/music/season1-part2/",
    language: "ja",
    role: "first_party"
  }, {
    label: "go!go!vanillas 官方 EP 資料",
    url: "https://gogovanillas.com/news/detail/5488",
    language: "ja",
    role: "first_party"
  }],
  "185660:OP:1": [{
    label: "動畫官方網站：Music",
    url: "https://anime-dandadan.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "アイナ・ジ・エンド官方公告：主題曲、發行日與詞曲名單",
    url: "https://www.ainatheend.jp/news/detail.php?id=1125067",
    language: "ja",
    role: "first_party"
  }, {
    label: "Avex 官方發行資料",
    url: "https://avexnet.jp/release/1020983",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：アイナ・ジ・エンド單曲",
    url: "https://music.apple.com/tw/song/1821087731",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Hypebeast 繁體中文：第 2 季 OP／ED 交叉核對",
    url: "https://hypebeast.com/zh/2025/7/dan-da-dan-season-2-op-ed-release",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185660:ED:1": [{
    label: "動畫官方網站：Music",
    url: "https://anime-dandadan.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WurtS 官方網站：合作 MV 與串流入口",
    url: "https://wurts.jp/2665/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WurtS 官方作品頁：數位發行日",
    url: "https://wurts.jp/2675/",
    language: "ja",
    role: "first_party"
  }, {
    label: "WurtS 官方公告：片尾曲與配信日期",
    url: "https://wurts.jp/2625/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：WurtS 單曲",
    url: "https://music.apple.com/tw/song/1824189859",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "Hypebeast 繁體中文：第 2 季 OP／ED 交叉核對",
    url: "https://hypebeast.com/zh/2025/7/dan-da-dan-season-2-op-ed-release",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177689:OP:1": [{
    label: "動畫官方網站：Music",
    url: "https://hikanatsu-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Vaundy 官方網站：MV 與發行資料",
    url: "https://vaundy.jp/news/detail/10936",
    language: "ja",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文片頭曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/72144/the-summer-hikaru-died-netflix-animation-release-in-july",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "177689:ED:1": [{
    label: "動畫官方網站：Music",
    url: "https://hikanatsu-anime.com/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music 官方新聞稿：MV 與發行資料",
    url: "https://prtimes.jp/main/html/rd/p/000004583.000013546.html",
    language: "ja",
    role: "first_party"
  }],
  "178754:OP:1": [{
    label: "動畫官方網站：第 2 期 Music",
    url: "https://kaiju-no8.net/music/season2.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：AURORA 數位單曲作品頁",
    url: "https://www.universal-music.co.jp/aurora/products/00602478611926/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：AURORA 發行新聞",
    url: "https://www.universal-music.co.jp/aurora/news/2025-07-18/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：AURORA 單曲",
    url: "https://music.apple.com/tw/song/1823156201",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "巴哈姆特 GNN：繁體中文片頭曲交叉核對",
    url: "https://gnn.gamer.com.tw/detail.php?sn=287463",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "178754:ED:1": [{
    label: "動畫官方網站：第 2 期 Music",
    url: "https://kaiju-no8.net/music/season2.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：OneRepublic 數位單曲作品頁",
    url: "https://www.universal-music.co.jp/onerepublic/products/ui1as-00664/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Universal Music Japan：OneRepublic 發行新聞",
    url: "https://www.universal-music.co.jp/onerepublic/news/2025-07-25/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：OneRepublic 單曲",
    url: "https://music.apple.com/tw/song/1826134951",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "COOL-STYLE：繁體中文片尾曲與發行日交叉核對",
    url: "https://www.cool-style.com.tw/wd2/archives/1215036-%E3%80%8A%E6%80%AA%E7%8D%B8-8-%E8%99%9F%E3%80%8B%E7%AC%AC%E4%BA%8C%E5%AD%A3-ed%E3%80%88beautiful-colors%E3%80%89%E5%85%AC%E9%96%8B%EF%BC%81%E6%90%96%E6%BB%BE%E5%A4%A9%E5%9C%98-onerepublic-%E7%8D%BB/",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185407:OP:1": [{
    label: "TBS 動畫官方網站：音樂資料",
    url: "https://www.tbs.co.jp/anime/takopi_project/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "ano 官方公告：動畫片頭曲、專輯收錄與發行日",
    url: "https://ano-official.com/news/detail/74046",
    language: "ja",
    role: "first_party"
  }, {
    label: "ano 官方作品頁：專輯發行日與完整創作 credit",
    url: "https://ano-official.com/discography/detail/6626/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架資料",
    url: "https://music.apple.com/tw/song/1889741674",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71910/toko-p-animation-release-in-2025-june",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=142775",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "185407:ED:1": [{
    label: "TBS 動畫官方網站：音樂資料",
    url: "https://www.tbs.co.jp/anime/takopi_project/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Tele 官方作品頁：數位 EP 發行日與動畫版收錄資料",
    url: "https://tele.jp.net/music/%E7%A1%9D%E5%AD%90%E3%81%AE%E7%B7%9A/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Tele 官方公告：數位發行日與跨平台入口",
    url: "https://tele.jp.net/news/1454/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Apple Music 台灣：繁體中文地區曲目與數位上架資料",
    url: "https://music.apple.com/tw/song/1820349965",
    language: "zh-Hant",
    role: "first_party"
  }, {
    label: "4Gamers：繁體中文主題曲交叉核對",
    url: "https://www.4gamers.com.tw/news/detail/71910/toko-p-animation-release-in-2025-june",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與主題曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=142775",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "175035:ED:1": [{
    label: "Netflix 官方新聞：新篇章主題曲",
    url: "https://about.netflix.com/ja/news/pokemon-concierge-new-episodes-premieres-september-4",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方唱片頁：數位發行日與正式 MV",
    url: "https://wmg.jp/tatsuro/discography/32013/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Warner Music Japan 官方新聞：新篇章主題曲資料",
    url: "https://wmg.jp/tatsuro/news/90179/",
    language: "ja",
    role: "first_party"
  }, {
    label: "山下達郎官方網站：正式發行與作品搭配資料",
    url: "https://www.tatsuro.co.jp/news/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Netflix 台灣：繁體中文正式作品名稱與新篇章集數",
    url: "https://www.netflix.com/tw/title/81186864",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "台灣寶可夢官方網站：繁體中文正式作品名稱",
    url: "https://tw.portal-pokemon.com/topics/post-5316/",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "歌ネット：作詞、作曲與數位發行日交叉核對",
    url: "https://www.uta-net.com/song/379460/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "Tower Records：作詞、作曲與編曲名單交叉核對",
    url: "https://tower.jp/item/6971263/%E3%82%AA%E3%83%8E%E3%83%9E%E3%83%88%E3%83%9AISLAND-MOVE-ON",
    language: "ja",
    role: "cross_check"
  }],
  "186043:ED:1": [{
    label: "Sanrio 官方新聞稿：主題曲與 MV",
    url: "https://prtimes.jp/main/html/rd/p/000000665.000037629.html",
    language: "ja",
    role: "first_party"
  }],
  "189117:OP:1": [{
    label: "動畫官方音樂頁：第 4 期第 2 部分片頭曲",
    url: "https://dr-stone.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "KANA-BOON 官方網站：完整 MV、動畫搭配與配信資料",
    url: "https://sp.kanaboon.jp/news/detail/2588",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/376403/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5789",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "189117:ED:1": [{
    label: "動畫官方音樂頁：第 4 期第 2 部分片尾曲",
    url: "https://dr-stone.jp/music/",
    language: "ja",
    role: "first_party"
  }, {
    label: "音羽-otoha- 官方網站：完整 MV 與動畫搭配資料",
    url: "https://otohaofficial.com/contents/961719",
    language: "ja",
    role: "first_party"
  }, {
    label: "動畫官方新聞：特別版片尾曲與動畫 MV",
    url: "https://dr-stone.jp/news/5684/",
    language: "ja",
    role: "first_party"
  }, {
    label: "Sony Music Labels 官方音源：完整作詞、作曲與編曲名單",
    url: "https://www.youtube.com/watch?v=85lz1dqGKOA",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞與作曲資料交叉核對",
    url: "https://www.uta-net.com/song/376444/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5789",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "195209:OP:1": [{
    label: "動畫官方網站：作品與片頭曲資料",
    url: "https://animationid.com/kizudarakeseijo/",
    language: "ja",
    role: "first_party"
  }, {
    label: "AnimationID 官方新聞稿：片頭曲與鷲尾伶菜訪談",
    url: "https://prtimes.jp/main/html/rd/p/000001509.000007785.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://youranimes.tw/animes/5479",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片頭曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145415",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "195209:ED:1": [{
    label: "動畫官方網站：作品與片尾曲資料",
    url: "https://animationid.com/kizudarakeseijo/",
    language: "ja",
    role: "first_party"
  }, {
    label: "AnimationID 官方新聞稿：片尾曲與のんぴー訪談",
    url: "https://prtimes.jp/main/html/rd/p/000001508.000007785.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "歌ネット：作詞、作曲與編曲資料交叉核對",
    url: "https://www.uta-net.com/song/385921/",
    language: "ja",
    role: "cross_check"
  }, {
    label: "YourAnimes：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://youranimes.tw/animes/5479",
    language: "zh-Hant",
    role: "cross_check"
  }, {
    label: "巴哈姆特：繁體中文作品名稱與片尾曲交叉核對",
    url: "https://acg.gamer.com.tw/acgDetail.php?s=145415",
    language: "zh-Hant",
    role: "cross_check"
  }],
  "193238:ED:1": [{
    label: "コミックナタリー：片尾主題曲交叉核對",
    url: "https://natalie.mu/comic/news/627063",
    language: "ja",
    role: "cross_check"
  }],
  "207675:ED:1": [{
    label: "動畫官方網站：Music",
    url: "https://publications.asahi.com/feature/hyakki-anime/",
    language: "ja",
    role: "first_party"
  }],
  "213426:ED:1": [{
    label: "TOKYO MX 官方新聞稿",
    url: "https://s.mxtv.jp/company/press/20260426_gyzj7w8cvl0nm3q9qrap8551yrvwn1.pdf",
    language: "ja",
    role: "first_party"
  }]
};

const themeReleaseDateOverrides: Record<string, string> = {
  "185753:OP:1": "2026-02-16",
  "185753:ED:1": "2026-03-02",
  "187264:OP:1": "2026-01-04",
  "187264:ED:1": "2026-01-11",
  "178005:OP:1": "2026-01-04",
  "178005:ED:1": "2026-01-11",
  "178005:ED:2": "2026-02-01",
  "185407:OP:1": "2025-06-04",
  "185407:ED:1": "2025-06-25",
  "178754:OP:1": "2025-07-18",
  "178754:ED:1": "2025-07-25",
  "185660:OP:1": "2025-07-02",
  "185660:ED:1": "2025-07-11",
  "167152:OP:1": "2026-01-15",
  "198720:OP:1": "2026-02-14",
  "198720:ED:1": "2025-12-18",
  "197731:OP:1": "2026-01-05",
  "197731:ED:1": "2026-01-12",
  "195322:OP:1": "2026-01-05",
  "195322:ED:1": "2026-01-06",
  "177385:OP:1": "2026-01-07",
  "177385:ED:1": "2026-01-05",
  "166521:OP:1": "2025-10-08",
  "166521:ED:1": "2026-01-13",
  "194028:OP:1": "2026-01-06",
  "194028:ED:1": "2026-01-06",
  "172463:OP:1": "2026-01-09",
  "172463:ED:1": "2026-01-10",
  "166613:OP:1": "2026-01-12",
  "166613:ED:1": "2026-01-14",
  "163144:OP:1": "2026-01-14",
  "163144:ED:1": "2026-01-14",
  "166617:OP:1": "2026-01-04",
  "166617:ED:1": "2026-01-11",
  "189275:OP:1": "2026-01-24",
  "189275:ED:1": "2026-01-25",
  "177679:OP:1": "2025-12-29",
  "177679:ED:1": "2026-01-21",
  "180746:OP:1": "2026-01-07",
  "180746:ED:1": "2026-01-07",
  "177580:OP:1": "2026-01-04",
  "177580:ED:1": "2026-01-11",
  "185514:OP:1": "2026-01-09",
  "185514:ED:1": "2026-01-09",
  "182255:OP:1": "2026-01-12",
  "182255:ED:1": "2026-01-16",
  "182255:ED:2": "2026-03-04",
  "182587:OP:1": "2026-01-14",
  "182587:ED:1": "2026-01-21",
  "204698:ED:1": "2025-09-03",
  "205772:ED:1": "2026-05-18",
  "206950:OP:1": "2024-04-06",
  "198411:ED:1": "2026-04-08",
  "204269:ED:1": "2026-05-30",
  "202386:ED:1": "2026-06-22",
  "181867:OP:1": "2023-11-15",
  "199486:OP:1": "2025-08-14",
  "159483:OP:1": "2025-07-09",
  "159483:OP:2": "2025-09-24",
  "159483:ED:1": "2025-07-16",
  "159483:ED:2": "2025-07-30",
  "159483:ED:3": "2025-08-13",
  "159483:ED:4": "2025-08-20",
  "159483:ED:5": "2025-09-03",
  "191994:OP:1": "2025-07-06",
  "191994:ED:1": "2025-07-13",
  "191994:ED:2": "2025-07-20",
  "191994:ED:3": "2025-07-27",
  "191994:ED:4": "2025-08-03",
  "191994:ED:5": "2025-08-10",
  "191994:ED:6": "2025-08-24",
  "191994:ED:7": "2025-08-31",
  "191994:ED:8": "2025-09-07",
  "191994:ED:9": "2025-09-21",
  "191994:ED:10": "2025-09-28",
  "169420:OP:1": "2025-07-25",
  "169420:OP:2": "2025-10-10",
  "169420:ED:1": "2025-07-09",
  "169420:ED:2": "2025-10-29",
  "188138:OP:1": "2025-07-09",
  "188138:ED:1": "2025-07-09",
  "171046:OP:1": "2025-07-06",
  "171046:ED:1": "2025-07-06",
  "171046:ED:2": "2025-07-27",
  "171046:ED:3": "2025-08-24",
  "171046:ED:4": "2025-09-14",
  "171046:ED:5": "2025-09-21",
  "171046:ED:6": "2025-09-24",
  "173335:OP:1": "2025-07-04",
  "173335:ED:1": "2025-07-09",
  "173335:ED:2": "2025-07-23",
  "173335:ED:3": "2025-07-30",
  "173335:ED:4": "2025-08-06",
  "173335:ED:5": "2025-08-13",
  "173335:ED:6": "2025-08-20",
  "173335:ED:7": "2025-08-27",
  "173335:ED:8": "2025-09-03",
  "173335:ED:9": "2024-03-27",
  "173335:ED:10": "2025-09-17",
  "173335:ED:11": "2025-10-01",
  "155838:OP:1": "2025-07-09",
  "155838:ED:1": "2025-07-25",
  "178869:OP:1": "2025-07-03",
  "178869:ED:1": "2025-11-12",
  "187387:OP:1": "2025-07-03",
  "187387:ED:1": "2025-07-02",
  "169440:OP:1": "2025-07-02",
  "169440:ED:1": "2025-09-03",
  "185505:OP:1": "2025-07-02",
  "185505:ED:1": "2025-07-09",
  "186052:OP:1": "2025-07-23",
  "186052:ED:1": "2025-07-04",
  "178675:OP:1": "2025-07-05",
  "178675:ED:1": "2025-07-05",
  "178675:ED:2": "2025-08-17",
  "178433:OP:1": "2025-07-07",
  "178433:ED:1": "2025-07-07",
  "189326:OP:1": "2025-07-06",
  "189326:ED:1": "2025-07-06",
  "170113:OP:1": "2025-07-06",
  "170113:ED:1": "2025-06-27",
  "180460:OP:1": "2025-07-02",
  "180460:ED:1": "2025-07-02",
  "180460:ED:2": "2025-09-24",
  "189069:OP:1": "1977-12-05",
  "189069:OP:2": "2025-08-30",
  "185544:OP:1": "2025-07-02",
  "185544:ED:1": "2025-07-04",
  "186561:OP:1": "2025-07-11",
  "186561:ED:1": "2025-07-11",
  "180794:OP:1": "2025-07-07",
  "180794:ED:1": "2025-07-07",
  "179885:OP:1": "2025-07-04",
  "179885:ED:1": "2025-07-11",
  "179678:OP:1": "2025-07-09",
  "179678:ED:1": "2025-07-16",
  "193883:OP:1": "2025-07-02",
  "198745:OP:1": "2025-09-24",
  "198745:ED:1": "2025-09-24",
  "194088:ED:1": "2025-07-16",
  "166215:OP:1": "2025-07-23",
  "175914:OP:1": "2025-07-04",
  "175914:ED:1": "2025-07-05",
  "175914:ED:2": "2018-12-12",
  "179344:OP:1": "2025-07-12",
  "179344:ED:1": "2025-07-01",
  "183128:OP:1": "2025-08-20",
  "183128:ED:1": "2025-08-22",
  "198408:ED:1": "2025-09-25",
  "183127:OP:1": "2025-07-25",
  "175035:ED:1": "2025-09-04"
};

const themeVerifiedAtOverrides: Record<string, string> = {
  "185753:OP:1": "2026-08-11",
  "185753:ED:1": "2026-08-11",
  "187264:OP:1": "2026-08-11",
  "187264:ED:1": "2026-08-11",
  "178005:OP:1": "2026-08-11",
  "178005:ED:1": "2026-08-11",
  "178005:ED:2": "2026-08-11",
  "167152:OP:1": "2026-08-11",
  "198720:OP:1": "2026-08-11",
  "198720:ED:1": "2026-08-11",
  "197731:OP:1": "2026-08-11",
  "197731:ED:1": "2026-08-11",
  "195322:OP:1": "2026-08-11",
  "195322:ED:1": "2026-08-11",
  "177385:OP:1": "2026-08-11",
  "177385:ED:1": "2026-08-11",
  "166521:OP:1": "2026-08-11",
  "166521:ED:1": "2026-08-11",
  "194028:OP:1": "2026-08-11",
  "194028:ED:1": "2026-08-11",
  "172463:OP:1": "2026-08-11",
  "172463:ED:1": "2026-08-11",
  "166613:OP:1": "2026-08-11",
  "166613:ED:1": "2026-08-11",
  "163144:OP:1": "2026-08-11",
  "163144:ED:1": "2026-08-11",
  "166617:OP:1": "2026-08-11",
  "166617:ED:1": "2026-08-11",
  "189275:OP:1": "2026-08-11",
  "189275:ED:1": "2026-08-11",
  "177679:OP:1": "2026-08-11",
  "177679:ED:1": "2026-08-11",
  "180746:OP:1": "2026-08-10",
  "180746:ED:1": "2026-08-10",
  "177580:OP:1": "2026-08-10",
  "177580:ED:1": "2026-08-10",
  "185514:OP:1": "2026-08-10",
  "185514:ED:1": "2026-08-10",
  "182255:OP:1": "2026-08-10",
  "182255:ED:1": "2026-08-10",
  "182255:ED:2": "2026-08-10",
  "182587:OP:1": "2026-08-10",
  "182587:ED:1": "2026-08-10",
  "204698:ED:1": "2026-08-10",
  "205772:ED:1": "2026-08-10",
  "206950:OP:1": "2026-08-10",
  "212308:ED:1": "2026-08-10",
  "198411:ED:1": "2026-08-10",
  "204269:ED:1": "2026-08-10",
  "202386:ED:1": "2026-08-10",
  "181867:OP:1": "2026-08-10",
  "199486:OP:1": "2026-08-10",
  "159483:OP:1": "2026-08-10",
  "159483:OP:2": "2026-08-10",
  "159483:ED:1": "2026-08-10",
  "159483:ED:2": "2026-08-10",
  "159483:ED:3": "2026-08-10",
  "159483:ED:4": "2026-08-10",
  "159483:ED:5": "2026-08-10",
  "191994:OP:1": "2026-08-10",
  "191994:ED:1": "2026-08-10",
  "191994:ED:2": "2026-08-10",
  "191994:ED:3": "2026-08-10",
  "191994:ED:4": "2026-08-10",
  "191994:ED:5": "2026-08-10",
  "191994:ED:6": "2026-08-10",
  "191994:ED:7": "2026-08-10",
  "191994:ED:8": "2026-08-10",
  "191994:ED:9": "2026-08-10",
  "191994:ED:10": "2026-08-10",
  "169420:OP:1": "2026-08-10",
  "169420:OP:2": "2026-08-10",
  "169420:ED:1": "2026-08-10",
  "169420:ED:2": "2026-08-10",
  "188653:ED:1": "2026-08-10",
  "188138:OP:1": "2026-08-10",
  "188138:ED:1": "2026-08-10",
  "171046:OP:1": "2026-08-10",
  "171046:ED:1": "2026-08-10",
  "171046:ED:2": "2026-08-10",
  "171046:ED:3": "2026-08-10",
  "171046:ED:4": "2026-08-10",
  "171046:ED:5": "2026-08-10",
  "171046:ED:6": "2026-08-10",
  "173335:OP:1": "2026-08-10",
  "173335:ED:1": "2026-08-10",
  "173335:ED:2": "2026-08-10",
  "173335:ED:3": "2026-08-10",
  "173335:ED:4": "2026-08-10",
  "173335:ED:5": "2026-08-10",
  "173335:ED:6": "2026-08-10",
  "173335:ED:7": "2026-08-10",
  "173335:ED:8": "2026-08-10",
  "173335:ED:9": "2026-08-10",
  "173335:ED:10": "2026-08-10",
  "173335:ED:11": "2026-08-10",
  "155838:OP:1": "2026-08-10",
  "155838:ED:1": "2026-08-10",
  "178869:OP:1": "2026-08-10",
  "178869:ED:1": "2026-08-10",
  "187387:OP:1": "2026-08-10",
  "187387:ED:1": "2026-08-10",
  "169440:OP:1": "2026-08-10",
  "169440:ED:1": "2026-08-10",
  "185505:OP:1": "2026-08-10",
  "185505:ED:1": "2026-08-10",
  "186052:OP:1": "2026-08-10",
  "186052:ED:1": "2026-08-10",
  "178675:OP:1": "2026-08-10",
  "178675:ED:1": "2026-08-10",
  "178675:ED:2": "2026-08-10",
  "178433:OP:1": "2026-08-10",
  "178433:ED:1": "2026-08-10",
  "189326:OP:1": "2026-08-10",
  "189326:ED:1": "2026-08-10",
  "170113:OP:1": "2026-08-10",
  "170113:ED:1": "2026-08-10",
  "180460:OP:1": "2026-08-10",
  "180460:ED:1": "2026-08-10",
  "180460:ED:2": "2026-08-10",
  "189069:OP:1": "2026-08-10",
  "189069:OP:2": "2026-08-10",
  "185544:OP:1": "2026-08-10",
  "185544:ED:1": "2026-08-10",
  "186561:OP:1": "2026-08-10",
  "186561:ED:1": "2026-08-10",
  "180794:OP:1": "2026-08-10",
  "180794:ED:1": "2026-08-10",
  "196229:OP:1": "2026-08-10",
  "179885:OP:1": "2026-08-10",
  "179885:ED:1": "2026-08-10",
  "179678:OP:1": "2026-08-10",
  "179678:ED:1": "2026-08-10",
  "193883:OP:1": "2026-08-10",
  "156395:OP:1": "2026-08-10",
  "156395:ED:1": "2026-08-10",
  "177474:OP:1": "2026-08-10",
  "177474:OP:2": "2026-08-10",
  "177474:ED:1": "2026-08-10",
  "177474:ED:2": "2026-08-10",
  "185965:OP:1": "2026-08-10",
  "185965:OP:2": "2026-08-10",
  "185965:ED:1": "2026-08-10",
  "198745:OP:1": "2026-08-10",
  "198745:ED:1": "2026-08-10",
  "194088:ED:1": "2026-08-10",
  "166215:OP:1": "2026-08-10",
  "175914:OP:1": "2026-08-10",
  "175914:ED:1": "2026-08-10",
  "175914:ED:2": "2026-08-10",
  "183128:OP:1": "2026-08-10",
  "183128:ED:1": "2026-08-10",
  "198408:ED:1": "2026-08-10",
  "181841:OP:1": "2026-08-10",
  "181841:ED:1": "2026-08-10",
  "181841:ED:3": "2026-08-10",
  "175124:OP:1": "2026-08-10",
  "175124:ED:1": "2026-08-10",
  "179828:OP:1": "2026-08-10",
  "179828:ED:1": "2026-08-10",
  "182309:OP:1": "2026-08-10",
  "182309:ED:1": "2026-08-10",
  "184591:OP:1": "2026-08-10",
  "184591:ED:1": "2026-08-10",
  "173780:OP:1": "2026-08-10",
  "173780:ED:1": "2026-08-10",
  "177880:OP:1": "2026-08-10",
  "177880:ED:1": "2026-08-10",
  "151799:OP:1": "2026-08-10",
  "151799:ED:1": "2026-08-10",
  "177887:OP:1": "2026-08-10",
  "177887:ED:1": "2026-08-10",
  "178090:OP:1": "2026-08-10",
  "178090:ED:1": "2026-08-10",
  "178886:OP:1": "2026-08-10",
  "178886:ED:1": "2026-08-10",
  "178886:ED:2": "2026-08-10",
  "178886:ED:3": "2026-08-10",
  "185755:OP:1": "2026-08-10",
  "185755:ED:1": "2026-08-10",
  "184574:OP:1": "2026-08-10",
  "184574:ED:1": "2026-08-10",
  "179879:OP:1": "2026-08-10",
  "179879:ED:1": "2026-08-10",
  "186003:OP:1": "2026-08-10",
  "186003:ED:1": "2026-08-10",
  "184034:OP:1": "2026-08-10",
  "184034:ED:1": "2026-08-10",
  "157960:OP:1": "2026-08-10",
  "157960:ED:1": "2026-08-10",
  "180929:OP:1": "2026-08-10",
  "180929:ED:1": "2026-08-10",
  "179966:OP:1": "2026-08-10",
  "179966:ED:1": "2026-08-10",
  "185519:OP:1": "2026-08-10",
  "185519:ED:1": "2026-08-10",
  "177761:OP:1": "2026-08-10",
  "177761:ED:1": "2026-08-10",
  "180425:OP:1": "2026-08-10",
  "180425:ED:1": "2026-08-10",
  "177175:OP:1": "2026-08-10",
  "177175:ED:1": "2026-08-10",
  "177175:ED:2": "2026-08-10",
  "181444:OP:1": "2026-08-10",
  "181444:ED:1": "2026-08-10",
  "178025:OP:1": "2026-08-10",
  "178025:OP:2": "2026-08-10",
  "178025:ED:1": "2026-08-10",
  "178025:ED:2": "2026-08-10",
  "184237:OP:1": "2026-08-10",
  "184237:ED:1": "2026-08-10",
  "185660:OP:1": "2026-08-11",
  "185660:ED:1": "2026-08-11",
  "177689:OP:1": "2026-08-10",
  "177689:ED:1": "2026-08-10",
  "178754:OP:1": "2026-08-11",
  "178754:ED:1": "2026-08-11",
  "185407:OP:1": "2026-08-11",
  "185407:ED:1": "2026-08-11",
  "175035:ED:1": "2026-08-10",
  "179344:OP:1": "2026-08-10",
  "179344:ED:1": "2026-08-10",
  "183127:OP:1": "2026-08-10",
  "186043:ED:1": "2026-08-10",
  "189117:OP:1": "2026-08-10",
  "189117:ED:1": "2026-08-10",
  "195209:OP:1": "2026-08-10",
  "195209:ED:1": "2026-08-10",
  "193238:ED:1": "2026-08-10",
  "207675:ED:1": "2026-08-02",
  "213426:ED:1": "2026-08-02"
};

const animeOfficialSourceOverrides: Record<number, { label: string; url: string }> = {
  181867: {
    label: "動畫製作公司：第 3 期作品與播出資料",
    url: "https://fanworks.co.jp/news/cn_20250614/"
  },
  207675: {
    label: "動畫官方網站：作品與播出資料",
    url: "https://publications.asahi.com/feature/hyakki-anime/"
  },
  213426: {
    label: "TOKYO MX 官方新聞稿：作品與播出資料",
    url: "https://s.mxtv.jp/company/press/20260426_gyzj7w8cvl0nm3q9qrap8551yrvwn1.pdf"
  },
  199486: {
    label: "dアニメストア：官方配信資料",
    url: "https://animestore.docomo.ne.jp/animestore/CQ/notice-11863"
  },
  177887: {
    label: "Netflix 官方作品新聞",
    url: "https://about.netflix.com/ja/news/leviathan-takes-flight-on-july-10"
  },
  196063: {
    label: "動畫官方 YouTube：迷你動畫第 1 話",
    url: "https://www.youtube.com/watch?v=lEzijOwAOOw"
  },
  198408: {
    label: "作品官方網站：作品與播出資料",
    url: "https://latair.jp/"
  }
};

const animeSourceOverrides: Record<number, AnimeSourceSeed[]> = {
  203472: [{
    label: "DLE 官方公告：作品、配信方式與音樂 staff",
    url: "https://www.dle.jp/jp/news/takanotsume/3567.html",
    language: "ja",
    role: "first_party"
  }, {
    label: "鷹の爪官方第 1 話：開頭與片尾格式核對",
    url: "https://www.youtube.com/watch?v=qmF8mGKzL8Q",
    language: "ja",
    role: "first_party"
  }, {
    label: "鷹の爪官方第 12 話：開頭與片尾格式核對",
    url: "https://www.youtube.com/watch?v=a8WCyAclReU",
    language: "ja",
    role: "first_party"
  }]
};

const themeAvailabilityOverrides: Record<number, PublicThemeAvailability> = {
  196063: "not_used",
  203472: "not_used"
};

const animeVerifiedAtOverrides: Record<number, string> = {
  185407: "2026-08-11",
  178754: "2026-08-11",
  185660: "2026-08-11",
  185753: "2026-08-11",
  187264: "2026-08-11",
  178005: "2026-08-11",
  167152: "2026-08-11",
  198720: "2026-08-11",
  197731: "2026-08-11",
  195322: "2026-08-11",
  177385: "2026-08-11",
  166521: "2026-08-11",
  194028: "2026-08-11",
  172463: "2026-08-11",
  166613: "2026-08-11",
  163144: "2026-08-11",
  166617: "2026-08-11",
  189275: "2026-08-11",
  177679: "2026-08-11",
  180746: "2026-08-10",
  177580: "2026-08-10",
  185514: "2026-08-10",
  182255: "2026-08-10",
  182587: "2026-08-10",
  204698: "2026-08-10",
  205772: "2026-08-10",
  206950: "2026-08-10",
  212308: "2026-08-10",
  198411: "2026-08-10",
  204269: "2026-08-10",
  202386: "2026-08-10",
  181867: "2026-08-10",
  159483: "2026-08-10",
  191994: "2026-08-10",
  169420: "2026-08-10",
  188653: "2026-08-10",
  188138: "2026-08-10",
  171046: "2026-08-10",
  173335: "2026-08-10",
  155838: "2026-08-10",
  178869: "2026-08-10",
  187387: "2026-08-10",
  169440: "2026-08-10",
  185505: "2026-08-10",
  186052: "2026-08-10",
  178675: "2026-08-10",
  178433: "2026-08-10",
  189326: "2026-08-10",
  170113: "2026-08-10",
  180460: "2026-08-10",
  189069: "2026-08-10",
  185544: "2026-08-10",
  186561: "2026-08-10",
  180794: "2026-08-10",
  196229: "2026-08-10",
  179885: "2026-08-10",
  179678: "2026-08-10",
  193883: "2026-08-10",
  175914: "2026-08-10",
  207675: "2026-08-02",
  213426: "2026-08-02",
  199486: "2026-08-10",
  177887: "2026-08-02",
  196063: "2026-08-10",
  203472: "2026-08-10",
  198408: "2026-08-02"
};

function themeKey(anilistId: number, theme: Pick<CuratedThemeSeed, "type" | "sequence">): string {
  return `${anilistId}:${theme.type}:${theme.sequence}`;
}

function canonicalHttpsUrl(url: string): string {
  return new URL(url).href;
}

function publicSlug(seed: CuratedAnimeSeed): string {
  return slugOverrides[seed.anilistId] ?? seed.slug;
}

function themeLink(seed: CuratedAnimeSeed, theme: CuratedThemeSeed): PublicExternalLink[] {
  if (theme.youtubeUrl) {
    return [{
      platform: "YouTube",
      label: "官方公開影片",
      url: theme.youtubeUrl,
      linkType: "direct_track",
      region: "GLOBAL"
    }];
  }

  if (seed.officialSiteUrl) {
    return [{
      platform: "作品官網",
      label: "作品官方網站",
      url: canonicalHttpsUrl(seed.officialSiteUrl),
      linkType: "official_landing_page",
      region: "JP"
    }];
  }

  return [];
}

function buildThemeSources(
  seed: CuratedAnimeSeed,
  theme: CuratedThemeSeed,
  key: string,
  verifiedAt: string
): PublicThemeSource[] {
  const candidates: PublicThemeSource[] = [
    ...(themeSourceOverrides[key] ?? []).map((source) => ({ ...source, verifiedAt })),
    ...(theme.youtubeUrl ? [{
      label: "官方 YouTube 影片",
      url: canonicalHttpsUrl(theme.youtubeUrl),
      language: "ja" as const,
      role: "first_party" as const,
      verifiedAt
    }] : []),
    ...(videoOverrides[key] ?? []).map((video) => ({
      label: `${video.channelName} ${video.officialStatus === "official" ? "官方" : "授權"}影片`,
      url: `https://www.youtube.com/watch?v=${video.youtubeVideoId}`,
      language: videoSourceLanguageOverrides[video.youtubeVideoId] ?? "ja",
      role: video.officialStatus === "official" ? "first_party" as const : "cross_check" as const,
      verifiedAt
    })),
    ...(linkOverrides[key] ?? []).map((link) => ({
      label: link.label,
      url: canonicalHttpsUrl(link.url),
      language: link.region === "TW" || link.region === "HK"
        ? "zh-Hant" as const
        : "ja" as const,
      role: "first_party" as const,
      verifiedAt
    })),
    ...(seed.officialSiteUrl ? [{
      label: "動畫官方網站",
      url: canonicalHttpsUrl(seed.officialSiteUrl),
      language: "ja" as const,
      role: "first_party" as const,
      verifiedAt
    }] : []),
    ...(seed.animeThemesUrl ? [{
      label: "AnimeThemes",
      url: canonicalHttpsUrl(seed.animeThemesUrl),
      language: "en" as const,
      role: "cross_check" as const,
      verifiedAt
    }] : []),
    ...(seed.uzureaUrl ? [{
      label: "UZUREA 主題曲清單",
      url: canonicalHttpsUrl(seed.uzureaUrl),
      language: "ja" as const,
      role: "cross_check" as const,
      verifiedAt
    }] : [])
  ];

  return [...new Map(
    candidates
      .filter((source) => !excludedSourceUrls.has(canonicalHttpsUrl(source.url)))
      .map((source) => [source.url, source])
  ).values()];
}

function toTheme(seed: CuratedAnimeSeed, originalTheme: CuratedThemeSeed): PublicTheme {
  const key = themeKey(seed.anilistId, originalTheme);
  const theme = { ...originalTheme, ...themeOverrides[key] };
  const releaseDate = themeReleaseDateOverrides[key];
  const versionLabel = themeVersionLabelOverrides[key];
  const verifiedAt = themeVerifiedAtOverrides[key] ?? seed.verifiedAt ?? defaultVerifiedAt;
  const sources = buildThemeSources(seed, theme, key, verifiedAt);

  return {
    id: `${publicSlug(seed)}-${theme.type.toLowerCase()}-${theme.sequence}`,
    type: theme.type,
    sequence: theme.sequence,
    titleJa: theme.titleJa,
    ...(theme.titleRomaji ? { titleRomaji: theme.titleRomaji } : {}),
    artistDisplayName: theme.artistDisplayName,
    ...(versionLabel ? { versionLabel } : {}),
    ...(releaseDate ? { releaseDate } : {}),
    credits: [
      ...(vocalCreditOverrides[key] ?? [{ name: theme.artistDisplayName, role: "vocals" }]),
      ...(creditOverrides[key] ?? [])
    ],
    videos: videoOverrides[key] ?? [],
    links: [...themeLink(seed, theme), ...(linkOverrides[key] ?? [])],
    sources,
    reviewState: "reviewed",
    sourceLabels: [...new Set(sources.map((source) => source.label))],
    lastVerifiedAt: verifiedAt
  };
}

function animeOfficialSource(seed: CuratedAnimeSeed): { label: string; url: string } | undefined {
  if (seed.officialSiteUrl) {
    return { label: "動畫官方網站：作品與播出資料", url: seed.officialSiteUrl };
  }
  return animeOfficialSourceOverrides[seed.anilistId];
}

function referenceLanguage(url: string): PublicAnimeDetail["sources"][number]["language"] {
  const hostname = new URL(url).hostname;
  if (hostname === "bgm.tv") return "zh-Hans";
  if (hostname === "about.netflix.com") return "multi";
  return "ja";
}

function buildSources(seed: CuratedAnimeSeed, verifiedAt: string): PublicAnimeDetail["sources"] {
  const officialSource = animeOfficialSource(seed);
  const candidates: PublicAnimeDetail["sources"] = [
    ...(officialSource ? [{
      ...officialSource,
      language: "ja" as const,
      role: "first_party" as const,
      verifiedAt
    }] : []),
    ...(animeSourceOverrides[seed.anilistId] ?? []).map((source) => ({ ...source, verifiedAt })),
    {
      label: "AniList：作品識別與公開圖像",
      url: seed.anilistUrl,
      language: "en" as const,
      role: "identifier" as const,
      verifiedAt
    },
    {
      label: "繁體中文季度列表交叉對照",
      url: seed.wikipediaUrl,
      language: "zh-Hant" as const,
      role: "localized_cross_check" as const,
      verifiedAt
    },
    ...(seed.animeThemesUrl ? [{
      label: "AnimeThemes：OP／ED 曲目交叉核對",
      url: seed.animeThemesUrl,
      language: "en" as const,
      role: "theme_cross_check" as const,
      verifiedAt
    }] : []),
    ...(seed.uzureaUrl ? [{
      label: "UZUREA：季度主題曲與官方影片索引",
      url: seed.uzureaUrl,
      language: "ja" as const,
      role: "theme_cross_check" as const,
      verifiedAt
    }] : []),
    ...seed.sourceReferenceUrls.map((url) => ({
      label: "季度首播公開來源",
      url,
      language: referenceLanguage(url),
      role: "broadcast_cross_check" as const,
      verifiedAt
    }))
  ].filter((item) =>
    item.url.startsWith("https://")
    && !excludedSourceUrls.has(canonicalHttpsUrl(item.url))
  );
  const normalized = candidates.map((item) => ({ ...item, url: canonicalHttpsUrl(item.url) }));
  const unique = new Map<string, PublicAnimeDetail["sources"][number]>();
  for (const item of normalized) {
    if (!unique.has(item.url)) unique.set(item.url, item);
  }
  return [...unique.values()];
}

function toDetail(seed: CuratedAnimeSeed): PublicAnimeDetail {
  const themeSeeds = [...seed.themes, ...(extraThemes[seed.anilistId] ?? [])]
    .filter((theme) => !excludedThemeKeys.has(themeKey(seed.anilistId, theme)));
  const themes = themeSeeds
    .map((theme) => toTheme(seed, theme))
    .sort((left, right) =>
      left.type === right.type
        ? left.sequence - right.sequence
        : left.type === "OP" ? -1 : 1
    );
  const hasOfficialVideo = themeSeeds.some((theme) =>
    Boolean(theme.youtubeUrl) || Boolean(videoOverrides[themeKey(seed.anilistId, theme)]?.length)
  );
  const animeVerifiedAt = animeVerifiedAtOverrides[seed.anilistId];
  const verifiedAt = [
    ...(animeVerifiedAt ? [animeVerifiedAt] : []),
    seed.verifiedAt ?? defaultVerifiedAt,
    ...themes.flatMap((theme) => theme.sources.map((source) => source.verifiedAt))
  ].sort((left, right) => right.localeCompare(left))[0]!;
  const officialSource = animeOfficialSource(seed);
  const themeAvailability = themeAvailabilityOverrides[seed.anilistId]
    ?? (themes.length > 0 ? "documented" : "not_announced");

  return {
    id: seed.id,
    slug: publicSlug(seed),
    titleJa: seed.titleJa,
    titleZhHant: chineseTitleOverrides[seed.anilistId] ?? seed.titleZhHant,
    titleRomaji: seed.titleRomaji,
    posterUrl: seed.posterUrl,
    posterAlt: `《${seed.titleJa}》公開直式視覺`,
    ...(seed.bannerUrl ? {
      bannerUrl: seed.bannerUrl,
      bannerAlt: `《${seed.titleJa}》公開橫幅視覺`
    } : {}),
    imageSourceUrl: seed.imageSourceUrl,
    imageSourceLabel: seed.imageSourceLabel,
    editorialWeekday: seed.editorialWeekday,
    ...(seed.broadcastTimeJst ? { broadcastTimeJst: seed.broadcastTimeJst } : {}),
    ...(seed.broadcastLabel ? { broadcastLabel: seed.broadcastLabel } : {}),
    opCount: themes.filter((theme) => theme.type === "OP").length,
    edCount: themes.filter((theme) => theme.type === "ED").length,
    hasOfficialVideo,
    ...(officialSource ? { officialSiteUrl: canonicalHttpsUrl(officialSource.url) } : {}),
    anilistUrl: seed.anilistUrl,
    status: seed.status,
    reviewState: "reviewed",
    verifiedAt,
    themeAvailability,
    themes,
    sources: buildSources(seed, verifiedAt)
  };
}

function toCard(anime: PublicAnimeDetail): PublicAnimeCard {
  const {
    officialSiteUrl: _officialSiteUrl,
    anilistUrl: _anilistUrl,
    bangumiUrl: _bangumiUrl,
    status: _status,
    reviewState: _reviewState,
    verifiedAt: _verifiedAt,
    themeAvailability: _themeAvailability,
    themes: _themes,
    sources: _sources,
    ...card
  } = anime;
  return card;
}

export const curatedSeasons: PublicSeasonSummary[] = curatedSeasonRegistry.map(({
  id,
  year,
  quarter,
  titleZhHant,
  titleJa
}) => ({ id, year, quarter, titleZhHant, titleJa }));

export const curatedAnimeDetails = curatedAnimeSeeds.map(toDetail);

const detailByAniListId = new Map(
  curatedAnimeSeeds.map((seed, index) => [seed.anilistId, curatedAnimeDetails[index]!])
);

function cardsForSeason(seasonId: keyof typeof curatedSeasonAnimeIds): PublicAnimeCard[] {
  return curatedSeasonAnimeIds[seasonId].map((anilistId) => {
    const detail = detailByAniListId.get(anilistId);
    if (!detail) throw new Error(`Missing curated detail for AniList ${anilistId}`);
    return toCard(detail);
  });
}

export const curatedSeasonDetails: PublicSeasonDetail[] = curatedSeasons.map((season) => ({
  ...season,
  anime: cardsForSeason(season.id as keyof typeof curatedSeasonAnimeIds),
  reviewState: "reviewed",
  verifiedAt: getSeasonSnapshotVerifiedAt(season.year, season.quarter),
  catalogReferences: buildSeasonCatalogReferences(season.year, season.quarter)
}));
