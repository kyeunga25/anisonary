import type {
  PublicAnimeCard,
  PublicAnimeDetail,
  PublicExternalLink,
  PublicSeasonDetail,
  PublicSeasonSummary,
  PublicTheme,
  PublicVideo
} from "@/types/public-api";
import { buildSeasonCatalogReferences } from "@/data/catalog-sources";

const verifiedAt = "2026-07-24";
const chineseSeasonReference = "https://zh.wikipedia.org/wiki/2026%E5%B9%B4%E6%97%A5%E6%9C%AC%E5%8B%95%E7%95%AB%E5%88%97%E8%A1%A8";

const source = (label: string, url: string) => ({ label, url, verifiedAt });

const officialLink = (
  url: string,
  label = "作品官方音樂資料",
  platform = "作品官網"
): PublicExternalLink => ({
  platform,
  label,
  url,
  linkType: "official_landing_page",
  region: "JP"
});

const officialVideo = (
  youtubeVideoId: string,
  title: string,
  channelName: string,
  type: PublicVideo["type"] = "other"
): PublicVideo => ({
  youtubeVideoId,
  title,
  type,
  channelName,
  officialStatus: "official",
  embeddable: true
});

interface ThemeSeed {
  id: string;
  type: "OP" | "ED";
  sequence?: number;
  titleJa: string;
  artist: string;
  sourceLabel: string;
  sourceUrl: string;
  video?: PublicVideo;
  extraCredits?: PublicTheme["credits"];
  versionLabel?: string;
  linkPlatform?: string;
  linkLabel?: string;
}

const theme = ({
  id,
  type,
  sequence = 1,
  titleJa,
  artist,
  sourceLabel,
  sourceUrl,
  video,
  extraCredits = [],
  versionLabel,
  linkPlatform,
  linkLabel
}: ThemeSeed): PublicTheme => ({
  id,
  type,
  sequence,
  titleJa,
  artistDisplayName: artist,
  credits: [{ name: artist, role: "vocals" }, ...extraCredits],
  ...(versionLabel ? { versionLabel } : {}),
  videos: video ? [video] : [],
  links: [officialLink(sourceUrl, linkLabel, linkPlatform)],
  sourceLabels: [sourceLabel],
  lastVerifiedAt: verifiedAt
});

const summerAnime: PublicAnimeDetail[] = [
  {
    id: "curated-summer-01",
    slug: "ghost-in-the-shell-2026",
    titleJa: "攻殻機動隊 THE GHOST IN THE SHELL",
    titleZhHant: "攻殼機動隊 THE GHOST IN THE SHELL",
    titleRomaji: "Koukaku Kidoutai: The Ghost in the Shell",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177699-hnzc1CS5ZSM2.png",
    posterAlt: "《攻殻機動隊 THE GHOST IN THE SHELL》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/177699-5kDbvDBhtSE3.jpg",
    bannerAlt: "《攻殻機動隊 THE GHOST IN THE SHELL》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/177699",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 2,
    broadcastTimeJst: "23:00",
    opCount: 1,
    edCount: 1,
    hasOfficialVideo: true,
    completionPercent: 96,
    officialSiteUrl: "https://www.theghostintheshell-anime.jp/",
    anilistUrl: "https://anilist.co/anime/177699",
    status: "airing",
    themes: [
      theme({
        id: "ghost-in-the-shell-2026-op-1",
        type: "OP",
        titleJa: "GO GHOST",
        artist: "King Gnu",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://www.theghostintheshell-anime.jp/",
        video: officialVideo("-TEMcbY2JGs", "《攻殻機動隊 THE GHOST IN THE SHELL》官方影片", "Ghost in the Shell Official")
      }),
      theme({
        id: "ghost-in-the-shell-2026-ed-1",
        type: "ED",
        titleJa: "Blue",
        artist: "MILLENNIUM PARADE feat. Saya Gray, Daniel Caesar",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://www.theghostintheshell-anime.jp/"
      })
    ],
    sources: [
      source("動畫官方網站：播出與音樂資料", "https://www.theghostintheshell-anime.jp/"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/177699"),
      source("繁體中文名稱交叉對照", chineseSeasonReference)
    ]
  },
  {
    id: "curated-summer-02",
    slug: "kimi-ga-shinu-made-koi-wo-shitai",
    titleJa: "きみが死ぬまで恋をしたい",
    titleZhHant: "與妳相戀到生命盡頭",
    titleRomaji: "Kimi ga Shinu made Koi wo Shitai",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx187260-WW5RBa5NINRP.jpg",
    posterAlt: "《きみが死ぬまで恋をしたい》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/187260-HMkLPy3ZvzW1.jpg",
    bannerAlt: "《きみが死ぬまで恋をしたい》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/187260",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 2,
    broadcastTimeJst: "24:30",
    opCount: 1,
    edCount: 1,
    hasOfficialVideo: false,
    completionPercent: 94,
    officialSiteUrl: "https://kimishinu-anime.com/",
    anilistUrl: "https://anilist.co/anime/187260",
    status: "airing",
    themes: [
      theme({
        id: "kimi-shinu-op-1",
        type: "OP",
        titleJa: "Amore",
        artist: "ReoNa",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://kimishinu-anime.com/"
      }),
      theme({
        id: "kimi-shinu-ed-1",
        type: "ED",
        titleJa: "エテルネル",
        artist: "sajou no hana",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://kimishinu-anime.com/"
      })
    ],
    sources: [
      source("動畫官方消息：2026-07-07 起播", "https://kimishinu-anime.com/news/20260609_01.html"),
      source("東立：繁體中文版漫畫名稱", "https://www.tongli.com.tw/BooksDetail.aspx?BD=BM0317005A"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/187260")
    ]
  },
  {
    id: "curated-summer-03",
    slug: "youjo-senki-2",
    titleJa: "幼女戦記Ⅱ",
    titleZhHant: "幼女戰記Ⅱ",
    titleRomaji: "Youjo Senki II",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx135865-T7XIPMAbqcxN.png",
    posterAlt: "《幼女戦記Ⅱ》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/135865-Ws3e7BhBkFxd.jpg",
    bannerAlt: "《幼女戦記Ⅱ》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/135865",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 3,
    broadcastTimeJst: "23:30",
    opCount: 1,
    edCount: 1,
    hasOfficialVideo: true,
    completionPercent: 98,
    officialSiteUrl: "https://youjo-senki.jp/",
    anilistUrl: "https://anilist.co/anime/135865",
    status: "airing",
    themes: [
      theme({
        id: "youjo-senki-2-op-1",
        type: "OP",
        titleJa: "Why? RED induction",
        artist: "MYTH & ROID",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://nex-tone.link/GPsD8PYbf",
        linkPlatform: "NexTone LinkCore",
        linkLabel: "官方發行頁",
        video: officialVideo("kUvhvkPDvm0", "《幼女戦記Ⅱ》メインPV第2弾", "KADOKAWA Anime Channel"),
        extraCredits: [
          { name: "MYTH & ROID", role: "lyrics" },
          { name: "MYTH & ROID", role: "composition" },
          { name: "MYTH & ROID", role: "arrangement" }
        ]
      }),
      theme({
        id: "youjo-senki-2-ed-1",
        type: "ED",
        titleJa: "Weiter! Weiter!",
        artist: "ターニャ・デグレチャフ（CV：悠木碧）",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://nex-tone.link/U4sZm3zRR",
        linkPlatform: "NexTone LinkCore",
        linkLabel: "官方發行頁",
        extraCredits: [
          { name: "hotaru", role: "lyrics" },
          { name: "中野雅之", role: "composition" },
          { name: "中野雅之", role: "arrangement" }
        ]
      })
    ],
    sources: [
      source("動畫官方消息：播出與主題曲資料", "https://youjo-senki.jp/news.html"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/135865"),
      source("繁體中文名稱交叉對照", chineseSeasonReference)
    ]
  },
  {
    id: "curated-summer-04",
    slug: "mushoku-tensei-3",
    titleJa: "無職転生Ⅲ ～異世界行ったら本気だす～",
    titleZhHant: "無職轉生Ⅲ～到了異世界就拿出真本事～",
    titleRomaji: "Mushoku Tensei III: Isekai Ittara Honki Dasu",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178789-hNXjKFzUq7mk.jpg",
    posterAlt: "《無職転生Ⅲ ～異世界行ったら本気だす～》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/178789-9nHWmoRLlcLu.jpg",
    bannerAlt: "《無職転生Ⅲ ～異世界行ったら本気だす～》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/178789",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 7,
    broadcastTimeJst: "24:00",
    opCount: 2,
    edCount: 1,
    hasOfficialVideo: true,
    completionPercent: 94,
    officialSiteUrl: "https://mushokutensei.jp/",
    anilistUrl: "https://anilist.co/anime/178789",
    status: "airing",
    themes: [
      theme({
        id: "mushoku-tensei-3-op-1",
        type: "OP",
        titleJa: "決意の唄",
        artist: "大原ゆい子",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://mushokutensei.jp/"
      }),
      theme({
        id: "mushoku-tensei-3-op-2",
        type: "OP",
        sequence: 2,
        titleJa: "芽吹の唄",
        artist: "大原ゆい子",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://mushokutensei.jp/"
      }),
      theme({
        id: "mushoku-tensei-3-ed-1",
        type: "ED",
        titleJa: "祈り、終われば",
        artist: "中島美嘉",
        sourceLabel: "動畫官方消息",
        sourceUrl: "https://mushokutensei.jp/news/260604_1/",
        video: officialVideo(
          "UKcJqQqiXq0",
          "『無職転生Ⅲ ～異世界行ったら本気だす～』ノンクレジットED映像",
          "TOHO animation チャンネル",
          "creditless_ed"
        ),
        extraCredits: [
          { name: "シノダ", role: "lyrics" },
          { name: "シノダ", role: "composition" }
        ]
      })
    ],
    sources: [
      source("動畫官方消息：2026-07-05 起播", "https://mushokutensei.jp/news/260327_1/"),
      source("動畫官方消息：片尾曲資料", "https://mushokutensei.jp/news/260604_1/"),
      source("動畫官方消息：片尾曲無字幕影片", "https://mushokutensei.jp/news/260713_1/"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/178789")
    ]
  }
];

const springAnime: PublicAnimeDetail[] = [
  {
    id: "curated-spring-01",
    slug: "akane-banashi",
    titleJa: "あかね噺",
    titleZhHant: "朱音落語",
    titleRomaji: "Akane-banashi",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx196935-RnLWBsEvNp8M.jpg",
    posterAlt: "《あかね噺》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/196935-tl3sNMXDMfaQ.jpg",
    bannerAlt: "《あかね噺》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/196935",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 6,
    broadcastTimeJst: "23:30",
    opCount: 1,
    edCount: 1,
    hasOfficialVideo: true,
    completionPercent: 98,
    officialSiteUrl: "https://akane-banashi.com/",
    anilistUrl: "https://anilist.co/anime/196935",
    status: "finished",
    themes: [
      theme({
        id: "akane-banashi-op-1",
        type: "OP",
        titleJa: "人誑し",
        artist: "桑田佳祐",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://akane-banashi.com/",
        video: officialVideo("33pSxvDNnIQ", "TVアニメ『あかね噺』ノンクレジットOP", "tv asahi animation", "creditless_op")
      }),
      theme({
        id: "akane-banashi-ed-1",
        type: "ED",
        titleJa: "AKANE On My Mind〜饅頭こわい",
        artist: "桑田佳祐",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://akane-banashi.com/",
        video: officialVideo("wacbFJzImfk", "TVアニメ『あかね噺』ノンクレジットED", "tv asahi animation", "creditless_ed")
      })
    ],
    sources: [
      source("動畫官方網站：音樂資料", "https://akane-banashi.com/"),
      source("動畫官方網站：播出資料", "https://akane-banashi.com/onair/"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/196935")
    ]
  },
  {
    id: "curated-spring-02",
    slug: "tongari-boushi-no-atelier",
    titleJa: "とんがり帽子のアトリエ",
    titleZhHant: "魔法帽的工作室",
    titleRomaji: "Tongari Boushi no Atelier",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx147105-rwOX8qyUy8gV.jpg",
    posterAlt: "《とんがり帽子のアトリエ》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/147105-fTjmRrILFixZ.jpg",
    bannerAlt: "《とんがり帽子のアトリエ》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/147105",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 1,
    broadcastTimeJst: "23:00",
    opCount: 1,
    edCount: 1,
    hasOfficialVideo: true,
    completionPercent: 96,
    officialSiteUrl: "https://tongari-anime.com/",
    anilistUrl: "https://anilist.co/anime/147105",
    status: "finished",
    themes: [
      theme({
        id: "tongari-boushi-op-1",
        type: "OP",
        titleJa: "風のアンセム feat. suis from ヨルシカ",
        artist: "Eve",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://tongari-anime.com/",
        video: officialVideo("0BrBWvjGmWc", "TVアニメ『とんがり帽子のアトリエ』メインPV", "avex pictures")
      }),
      theme({
        id: "tongari-boushi-ed-1",
        type: "ED",
        titleJa: "ただ美しい呪い",
        artist: "Nakamura Hak",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://tongari-anime.com/"
      })
    ],
    sources: [
      source("動畫官方網站：音樂資料", "https://tongari-anime.com/"),
      source("動畫官方網站：播出資料", "https://tongari-anime.com/onair/"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/147105")
    ]
  },
  {
    id: "curated-spring-03",
    slug: "hokuto-no-ken-2026",
    titleJa: "北斗の拳 -FIST OF THE NORTH STAR-",
    titleZhHant: "北斗神拳 -FIST OF THE NORTH STAR-",
    titleRomaji: "Hokuto no Ken: Fist of the North Star",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169228-y79xDpZ29Vv4.jpg",
    posterAlt: "《北斗の拳 -FIST OF THE NORTH STAR-》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169228-L0wA8BGp54fa.jpg",
    bannerAlt: "《北斗の拳 -FIST OF THE NORTH STAR-》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/169228",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 5,
    broadcastTimeJst: "25:00",
    opCount: 1,
    edCount: 1,
    hasOfficialVideo: true,
    completionPercent: 96,
    officialSiteUrl: "https://hokuto-anime.com/",
    anilistUrl: "https://anilist.co/anime/169228",
    status: "finished",
    themes: [
      theme({
        id: "hokuto-no-ken-2026-op-1",
        type: "OP",
        titleJa: "Hallelujah",
        artist: "[Alexandros]",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://hokuto-anime.com/",
        video: officialVideo("zBc0oFYivr4", "『北斗の拳 -FIST OF THE NORTH STAR-』メインPV", "Warner Bros. Japan Anime")
      }),
      theme({
        id: "hokuto-no-ken-2026-ed-1",
        type: "ED",
        titleJa: "愛をとりもどせ!!",
        artist: "Toshl",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://hokuto-anime.com/"
      })
    ],
    sources: [
      source("動畫官方網站：音樂資料", "https://hokuto-anime.com/"),
      source("動畫官方網站：播出資料", "https://hokuto-anime.com/onair/"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/169228")
    ]
  },
  {
    id: "curated-spring-04",
    slug: "re-zero-season-4",
    titleJa: "Re:ゼロから始める異世界生活 4th season",
    titleZhHant: "Re:從零開始的異世界生活 第四季",
    titleRomaji: "Re:Zero kara Hajimeru Isekai Seikatsu 4th Season",
    posterUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx189046-yaHWtS5FII46.jpg",
    posterAlt: "《Re:ゼロから始める異世界生活 4th season》公開直式視覺",
    bannerUrl: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/189046-MDk2CaVuRWpb.jpg",
    bannerAlt: "《Re:ゼロから始める異世界生活 4th season》公開橫幅視覺",
    imageSourceUrl: "https://anilist.co/anime/189046",
    imageSourceLabel: "AniList 公開媒體頁",
    editorialWeekday: 3,
    broadcastLabel: "喪失編：2026-04-08 起；奪還編：2026-08-12 起",
    opCount: 1,
    edCount: 1,
    hasOfficialVideo: true,
    completionPercent: 92,
    officialSiteUrl: "https://re-zero-anime.jp/",
    anilistUrl: "https://anilist.co/anime/189046",
    status: "airing",
    themes: [
      theme({
        id: "re-zero-season-4-op-1",
        type: "OP",
        titleJa: "Recollect",
        artist: "鈴木このみ feat. Ashnikko",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://re-zero-anime.jp/",
        video: officialVideo("i8EjBP85cCc", "『Re:ゼロから始める異世界生活』4th season メインPV第2弾", "KADOKAWA Anime Channel")
      }),
      theme({
        id: "re-zero-season-4-ed-1",
        type: "ED",
        titleJa: "Ender Ember",
        artist: "MYTH & ROID feat. TK（凛として時雨）",
        sourceLabel: "動畫官方網站",
        sourceUrl: "https://re-zero-anime.jp/"
      })
    ],
    sources: [
      source("動畫官方網站：季度與音樂資料", "https://re-zero-anime.jp/"),
      source("AniList：公開圖像與作品識別", "https://anilist.co/anime/189046"),
      source("繁體中文名稱交叉對照", chineseSeasonReference)
    ]
  }
];

export const curatedSeasons: PublicSeasonSummary[] = [
  { id: "2026-summer", year: 2026, quarter: "summer", titleZhHant: "夏季動畫", titleJa: "2026年夏アニメ" },
  { id: "2026-spring", year: 2026, quarter: "spring", titleZhHant: "春季動畫", titleJa: "2026年春アニメ" }
];

function toCard(anime: PublicAnimeDetail): PublicAnimeCard {
  const {
    officialSiteUrl: _officialSiteUrl,
    anilistUrl: _anilistUrl,
    bangumiUrl: _bangumiUrl,
    status: _status,
    themes: _themes,
    sources: _sources,
    ...card
  } = anime;
  return card;
}

export const curatedAnimeDetails = [...summerAnime, ...springAnime];

export const curatedSeasonDetails: PublicSeasonDetail[] = [
  {
    ...curatedSeasons[0]!,
    anime: summerAnime.map(toCard),
    catalogReferences: buildSeasonCatalogReferences(2026, "summer")
  },
  {
    ...curatedSeasons[1]!,
    anime: springAnime.map(toCard),
    catalogReferences: buildSeasonCatalogReferences(2026, "spring")
  }
];
