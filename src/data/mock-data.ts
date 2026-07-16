import type {
  PublicAnimeCard,
  PublicAnimeDetail,
  PublicSeasonDetail,
  PublicSeasonSummary,
  PublicTheme
} from "@/types/public-api";

export const MOCK_DATA_NOTICE = "目前顯示的是開發用 Mock Data，並非真實 production 資料。";

export const mockSeasons: PublicSeasonSummary[] = [
  { id: "2026-summer", year: 2026, quarter: "summer", titleZhHant: "夏季動畫", titleJa: "2026年夏アニメ" },
  { id: "2026-spring", year: 2026, quarter: "spring", titleZhHant: "春季動畫", titleJa: "2026年春アニメ" }
];

const poster = {
  platform: "/mock-posters/afterglow-platform.png",
  sky: "/mock-posters/sky-cartographer.png",
  lantern: "/mock-posters/lantern-rain.png",
  whale: "/mock-posters/whale-observatory.png"
} as const;

const summerCoreAnime: PublicAnimeCard[] = [
  {
    id: "mock-summer-01", slug: "yoake-no-polaris", titleJa: "夜明けのポラリス", titleZhHant: "黎明的北極星",
    posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", editorialWeekday: 1,
    broadcastTimeJst: "25:30", opCount: 1, edCount: 1, hasOfficialVideo: true, completionPercent: 92
  },
  {
    id: "mock-summer-02", slug: "sora-no-chizu", titleJa: "空の地図をひらいて", titleZhHant: "展開天空的地圖",
    posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", editorialWeekday: 2,
    broadcastTimeJst: "22:30", opCount: 1, edCount: 1, hasOfficialVideo: true, completionPercent: 88
  },
  {
    id: "mock-summer-03", slug: "tomoshibi-no-yakusoku", titleJa: "灯火の約束", titleZhHant: "燈火之約",
    posterUrl: poster.lantern, posterAlt: "原創 Mock 海報：雨夜提燈的少年", editorialWeekday: 3,
    broadcastTimeJst: "23:00", opCount: 1, edCount: 2, hasOfficialVideo: true, completionPercent: 100
  },
  {
    id: "mock-summer-04", slug: "shinkai-no-melody", titleJa: "深海のメロディ", titleZhHant: "深海的旋律",
    posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", editorialWeekday: 4,
    broadcastTimeJst: "22:30", opCount: 1, edCount: 1, hasOfficialVideo: false, completionPercent: 74
  },
  {
    id: "mock-summer-05", slug: "houkago-reflection", titleJa: "放課後リフレクション", titleZhHant: "放學後的映照",
    posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", editorialWeekday: 5,
    broadcastTimeJst: "25:05", opCount: 1, edCount: 1, hasOfficialVideo: false, completionPercent: 66
  },
  {
    id: "mock-summer-06", slug: "kazakiri-no-uta", titleJa: "風斬りの詩", titleZhHant: "疾風斬詩",
    posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", editorialWeekday: 6,
    broadcastTimeJst: "24:30", opCount: 1, edCount: 2, hasOfficialVideo: true, completionPercent: 84
  },
  {
    id: "mock-summer-07", slug: "nichiyou-no-orbit", titleJa: "日曜のオービット", titleZhHant: "星期日的軌道",
    posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", editorialWeekday: 7,
    broadcastTimeJst: "21:30", opCount: 1, edCount: 1, hasOfficialVideo: false, completionPercent: 58
  },
  {
    id: "mock-summer-08", slug: "signal-nocturne", titleJa: "シグナル・ノクターン", titleZhHant: "訊號夜曲",
    posterAlt: "海報尚未公開", broadcastLabel: "不定期網絡發布", opCount: 0, edCount: 0,
    hasOfficialVideo: false, completionPercent: 22
  }
];

interface CompanionSeed {
  id: string;
  slug: string;
  titleJa: string;
  titleZhHant: string;
  editorialWeekday: 1 | 2;
  broadcastTimeJst: string;
  posterUrl: string;
  posterAlt: string;
  hasOfficialVideo: boolean;
  completionPercent: number;
}

const companion = (seed: CompanionSeed): PublicAnimeCard => ({
  ...seed,
  opCount: 1,
  edCount: 1
});

const summerCompanions: PublicAnimeCard[] = [
  companion({ id: "mock-summer-09", slug: "hoshi-no-terminal", titleJa: "星のターミナル", titleZhHant: "星之終點站", editorialWeekday: 1, broadcastTimeJst: "20:00", posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", hasOfficialVideo: false, completionPercent: 81 }),
  companion({ id: "mock-summer-10", slug: "ameiro-cadence", titleJa: "雨色カデンツァ", titleZhHant: "雨色華彩", editorialWeekday: 1, broadcastTimeJst: "22:15", posterUrl: poster.lantern, posterAlt: "原創 Mock 海報：雨夜提燈的少年", hasOfficialVideo: true, completionPercent: 93 }),
  companion({ id: "mock-summer-11", slug: "aoi-kujira", titleJa: "蒼い鯨の手紙", titleZhHant: "藍鯨的信", editorialWeekday: 1, broadcastTimeJst: "23:45", posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", hasOfficialVideo: true, completionPercent: 76 }),
  companion({ id: "mock-summer-12", slug: "tasogare-spectrum", titleJa: "黄昏スペクトラム", titleZhHant: "黃昏光譜", editorialWeekday: 1, broadcastTimeJst: "26:00", posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", hasOfficialVideo: false, completionPercent: 64 }),
  companion({ id: "mock-summer-13", slug: "tenkuu-post", titleJa: "天空郵便局", titleZhHant: "天空郵局", editorialWeekday: 2, broadcastTimeJst: "20:30", posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", hasOfficialVideo: true, completionPercent: 97 }),
  companion({ id: "mock-summer-14", slug: "yoru-no-rondo", titleJa: "夜のロンド", titleZhHant: "夜之迴旋曲", editorialWeekday: 2, broadcastTimeJst: "22:00", posterUrl: poster.lantern, posterAlt: "原創 Mock 海報：雨夜提燈的少年", hasOfficialVideo: false, completionPercent: 69 }),
  companion({ id: "mock-summer-15", slug: "aquarium-letter", titleJa: "水族館からの手紙", titleZhHant: "水族館來信", editorialWeekday: 2, broadcastTimeJst: "24:00", posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", hasOfficialVideo: true, completionPercent: 86 }),
  companion({ id: "mock-summer-16", slug: "platform-zero", titleJa: "零番線プラットフォーム", titleZhHant: "零號月台", editorialWeekday: 2, broadcastTimeJst: "25:15", posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", hasOfficialVideo: false, completionPercent: 55 })
];

const summerAnime = [...summerCoreAnime, ...summerCompanions];

const springCoreAnime: PublicAnimeCard[] = [
  {
    id: "mock-spring-01", slug: "sakura-memory", titleJa: "桜色のメモワール", titleZhHant: "櫻色的回憶",
    posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", editorialWeekday: 1,
    broadcastTimeJst: "21:30", opCount: 1, edCount: 1, hasOfficialVideo: true, completionPercent: 100
  },
  {
    id: "mock-spring-02", slug: "hoshikuzu-eclipse", titleJa: "星屑エクリプス", titleZhHant: "星屑蝕刻",
    posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", editorialWeekday: 2,
    broadcastTimeJst: "23:30", opCount: 1, edCount: 2, hasOfficialVideo: true, completionPercent: 100
  },
  {
    id: "mock-spring-03", slug: "kanata-no-compass", titleJa: "彼方のコンパス", titleZhHant: "彼方的指南針",
    posterUrl: poster.lantern, posterAlt: "原創 Mock 海報：雨夜提燈的少年", editorialWeekday: 3,
    broadcastTimeJst: "24:30", opCount: 1, edCount: 1, hasOfficialVideo: false, completionPercent: 96
  },
  {
    id: "mock-spring-04", slug: "tsubasa-no-prelude", titleJa: "翼雨のプレリュード", titleZhHant: "翼雨的前奏曲",
    posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", editorialWeekday: 4,
    broadcastTimeJst: "22:00", opCount: 1, edCount: 1, hasOfficialVideo: true, completionPercent: 91
  },
  {
    id: "mock-spring-05", slug: "glass-note", titleJa: "硝子の音符", titleZhHant: "玻璃音符",
    posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", editorialWeekday: 5,
    broadcastTimeJst: "23:45", opCount: 1, edCount: 1, hasOfficialVideo: false, completionPercent: 82
  },
  {
    id: "mock-spring-06", slug: "blue-hour-ensemble", titleJa: "蒼時アンサンブル", titleZhHant: "蒼時合奏",
    posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", editorialWeekday: 6,
    broadcastTimeJst: "24:00", opCount: 1, edCount: 1, hasOfficialVideo: true, completionPercent: 78
  },
  {
    id: "mock-spring-07", slug: "long-orbit", titleJa: "ロング・オービット", titleZhHant: "漫長軌道",
    posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", editorialWeekday: 7,
    broadcastTimeJst: "20:00", broadcastLabel: "跨季度續播・週日 20:00 (JST)", opCount: 1, edCount: 1,
    hasOfficialVideo: false, completionPercent: 72
  },
  {
    id: "mock-spring-08", slug: "letter-from-the-moon", titleJa: "月からの手紙", titleZhHant: "月亮寄來的信",
    posterUrl: poster.lantern, posterAlt: "原創 Mock 海報：雨夜提燈的少年", broadcastLabel: "不定期網絡發布",
    opCount: 0, edCount: 1, hasOfficialVideo: false, completionPercent: 48
  }
];

const springCompanions: PublicAnimeCard[] = [
  companion({ id: "mock-spring-09", slug: "haru-no-signal", titleJa: "春のシグナル", titleZhHant: "春日訊號", editorialWeekday: 1, broadcastTimeJst: "20:30", posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", hasOfficialVideo: true, completionPercent: 98 }),
  companion({ id: "mock-spring-10", slug: "cloud-atlas", titleJa: "雲上アトラス", titleZhHant: "雲上圖鑑", editorialWeekday: 1, broadcastTimeJst: "22:00", posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", hasOfficialVideo: false, completionPercent: 84 }),
  companion({ id: "mock-spring-11", slug: "lantern-score", titleJa: "灯籠スコア", titleZhHant: "燈籠樂譜", editorialWeekday: 1, broadcastTimeJst: "24:30", posterUrl: poster.lantern, posterAlt: "原創 Mock 海報：雨夜提燈的少年", hasOfficialVideo: true, completionPercent: 91 }),
  companion({ id: "mock-spring-12", slug: "oceanic-room", titleJa: "海洋観測室", titleZhHant: "海洋觀測室", editorialWeekday: 1, broadcastTimeJst: "25:45", posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", hasOfficialVideo: false, completionPercent: 71 }),
  companion({ id: "mock-spring-13", slug: "blue-ticket", titleJa: "青空の切符", titleZhHant: "藍天車票", editorialWeekday: 2, broadcastTimeJst: "19:30", posterUrl: poster.sky, posterAlt: "原創 Mock 海報：仰望浮空島的製圖少年", hasOfficialVideo: true, completionPercent: 95 }),
  companion({ id: "mock-spring-14", slug: "rainy-allegro", titleJa: "雨音アレグロ", titleZhHant: "雨聲快板", editorialWeekday: 2, broadcastTimeJst: "21:45", posterUrl: poster.lantern, posterAlt: "原創 Mock 海報：雨夜提燈的少年", hasOfficialVideo: false, completionPercent: 79 }),
  companion({ id: "mock-spring-15", slug: "whale-calendar", titleJa: "鯨のカレンダー", titleZhHant: "鯨魚日曆", editorialWeekday: 2, broadcastTimeJst: "23:15", posterUrl: poster.whale, posterAlt: "原創 Mock 海報：在深海觀景台仰望鯨魚的少年", hasOfficialVideo: true, completionPercent: 88 }),
  companion({ id: "mock-spring-16", slug: "last-local", titleJa: "最終ローカル線", titleZhHant: "最後的地方線", editorialWeekday: 2, broadcastTimeJst: "25:00", posterUrl: poster.platform, posterAlt: "原創 Mock 海報：黃昏車站上的少女", hasOfficialVideo: false, completionPercent: 62 })
];

const springAnime = [...springCoreAnime, ...springCompanions];

export const mockSeasonDetails: PublicSeasonDetail[] = [
  { ...mockSeasons[0]!, anime: summerAnime, isMockData: true },
  { ...mockSeasons[1]!, anime: springAnime, isMockData: true }
];

const verifiedAt = "2026-07-14";

function makeGenericTheme(anime: PublicAnimeCard, type: "OP" | "ED", sequence: number): PublicTheme {
  return {
    id: `${anime.id}-${type.toLowerCase()}-${sequence}`,
    type,
    sequence,
    titleJa: `${anime.titleJa} ${type === "OP" ? "オープニング" : "エンディング"} ${sequence}`,
    titleZhHant: `${anime.titleZhHant ?? anime.titleJa}・${type}${sequence}`,
    artistDisplayName: "Anisonary Mock Ensemble",
    credits: [{ name: "Anisonary Mock Ensemble", role: "vocals" }],
    videos: [],
    links: [],
    sourceLabels: ["Mock 動畫官網"],
    lastVerifiedAt: verifiedAt
  };
}

const yoakeThemes: PublicTheme[] = [
  {
    id: "mock-summer-01-op-1",
    type: "OP",
    sequence: 1,
    titleJa: "星を待つホーム",
    titleZhHant: "等待星辰的月台",
    artistDisplayName: "Lumen Note",
    credits: [
      { name: "Lumen Note", role: "vocals" },
      { name: "朝倉 凪", role: "lyrics" },
      { name: "水瀬 透", role: "composition" },
      { name: "Lumen Note", role: "arrangement" }
    ],
    videos: [],
    links: [],
    sourceLabels: ["Mock 動畫官網"],
    lastVerifiedAt: verifiedAt
  },
  {
    id: "mock-summer-01-ed-1",
    type: "ED",
    sequence: 1,
    titleJa: "帰り道の余白",
    titleZhHant: "歸途的留白",
    artistDisplayName: "Aoi Kisaragi",
    credits: [
      { name: "Aoi Kisaragi", role: "vocals" },
      { name: "Aoi Kisaragi", role: "lyrics" },
      { name: "Aoi Kisaragi", role: "composition" }
    ],
    videos: [],
    links: [],
    sourceLabels: ["Mock 唱片公司"],
    lastVerifiedAt: verifiedAt
  }
];

function makeMockAnimeDetail(anime: PublicAnimeCard): PublicAnimeDetail {
  const themes = anime.slug === "yoake-no-polaris"
    ? yoakeThemes
    : [
        ...Array.from({ length: anime.opCount }, (_, index) => makeGenericTheme(anime, "OP", index + 1)),
        ...Array.from({ length: anime.edCount }, (_, index) => makeGenericTheme(anime, "ED", index + 1))
      ];

  return {
    ...anime,
    ...(anime.slug === "yoake-no-polaris" ? { titleRomaji: "Yoake no Polaris" } : {}),
    officialSiteUrl: `https://example.com/anisonary-mock/${anime.slug}`,
    anilistUrl: `https://example.com/anisonary-mock/${anime.slug}/anilist`,
    bangumiUrl: `https://example.com/anisonary-mock/${anime.slug}/bangumi`,
    status: anime.slug === "signal-nocturne" ? "upcoming" : "airing",
    themes,
    sources: [
      {
        label: themes.length > 0 ? "Mock 動畫官網" : "Mock 交叉驗證資料",
        url: `https://example.com/anisonary-mock/${anime.slug}/source`,
        verifiedAt
      }
    ]
  };
}

export const mockAnimeDetails: PublicAnimeDetail[] = mockSeasonDetails
  .flatMap((season) => season.anime)
  .map(makeMockAnimeDetail);
