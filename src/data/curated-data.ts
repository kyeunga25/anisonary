import { buildSeasonCatalogReferences, getSeasonSnapshotVerifiedAt } from "@/data/catalog-sources";
import { curatedSeasonRegistry } from "@/data/curated-season-registry";
import { curatedThemeSourceOverrides as themeSourceOverrides } from "@/data/curated-theme-sources";
import { curatedThemeVideoOverrides as videoOverrides } from "@/data/curated-theme-videos";
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
  PublicThemeSource
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
