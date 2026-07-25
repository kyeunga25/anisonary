import { buildSeasonCatalogReferences } from "@/data/catalog-sources";
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
  PublicVideo
} from "@/types/public-api";

const verifiedAt = "2026-07-25";

const themeOverrides: Record<string, Partial<CuratedThemeSeed>> = {
  "147105:ED:2": { titleJa: "夜に浮かぶ", titleRomaji: "Yoru ni Ukabu" },
  "147105:ED:3": { titleJa: "光", titleRomaji: "Hikari" },
  "178789:OP:2": { titleJa: "芽吹の唄", titleRomaji: "Mebuki no Uta", artistDisplayName: "大原ゆい子" },
  "177699:ED:1": { artistDisplayName: "MILLENNIUM PARADE feat. Saya Gray, Daniel Caesar" }
};

const extraThemes: Record<number, CuratedThemeSeed[]> = {
  169228: [
    {
      type: "ED",
      sequence: 1,
      titleJa: "愛をとりもどせ!!",
      artistDisplayName: "Toshl"
    }
  ]
};

const chineseTitleOverrides: Record<number, string> = {
  135865: "幼女戰記Ⅱ",
  169228: "北斗神拳 -FIST OF THE NORTH STAR-",
  178789: "無職轉生Ⅲ～到了異世界就拿出真本事～"
};

const slugOverrides: Record<number, string> = {
  169582: "saikyou-degarashi-ouji"
};

const videoOverrides: Record<string, PublicVideo[]> = {
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

const creditOverrides: Record<string, PublicCreatorCredit[]> = {
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

function toTheme(seed: CuratedAnimeSeed, originalTheme: CuratedThemeSeed): PublicTheme {
  const key = themeKey(seed.anilistId, originalTheme);
  const theme = { ...originalTheme, ...themeOverrides[key] };
  const sources = [
    seed.officialSiteUrl ? "動畫官方網站" : undefined,
    seed.animeThemesUrl ? "AnimeThemes" : undefined,
    seed.uzureaUrl ? "UZUREA 主題曲清單" : undefined
  ].filter((label): label is string => Boolean(label));

  return {
    id: `${publicSlug(seed)}-${theme.type.toLowerCase()}-${theme.sequence}`,
    type: theme.type,
    sequence: theme.sequence,
    titleJa: theme.titleJa,
    ...(theme.titleRomaji ? { titleRomaji: theme.titleRomaji } : {}),
    artistDisplayName: theme.artistDisplayName,
    credits: [
      { name: theme.artistDisplayName, role: "vocals" },
      ...(creditOverrides[key] ?? [])
    ],
    videos: videoOverrides[key] ?? [],
    links: [...themeLink(seed, theme), ...(linkOverrides[key] ?? [])],
    sourceLabels: sources,
    lastVerifiedAt: verifiedAt
  };
}

function buildSources(seed: CuratedAnimeSeed): PublicAnimeDetail["sources"] {
  const candidates = [
    seed.officialSiteUrl ? { label: "動畫官方網站：作品與播出資料", url: seed.officialSiteUrl } : undefined,
    { label: "AniList：作品識別與公開圖像", url: seed.anilistUrl },
    { label: "繁體中文季度列表交叉對照", url: seed.wikipediaUrl },
    seed.animeThemesUrl ? { label: "AnimeThemes：OP／ED 曲目交叉核對", url: seed.animeThemesUrl } : undefined,
    seed.uzureaUrl ? { label: "UZUREA：季度主題曲與官方影片索引", url: seed.uzureaUrl } : undefined,
    ...seed.sourceReferenceUrls.map((url) => ({ label: "季度首播公開來源", url }))
  ].filter((item): item is { label: string; url: string } => Boolean(item?.url?.startsWith("https://")));
  const normalized = candidates.map((item) => ({ ...item, url: canonicalHttpsUrl(item.url) }));
  const unique = new Map(normalized.map((item) => [item.url, item]));
  return [...unique.values()].map((item) => ({ ...item, verifiedAt }));
}

function toDetail(seed: CuratedAnimeSeed): PublicAnimeDetail {
  const themeSeeds = [...seed.themes, ...(extraThemes[seed.anilistId] ?? [])];
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
  const completionPercent = Math.min(
    100,
    65
      + (seed.officialSiteUrl ? 10 : 0)
      + (seed.bannerUrl ? 5 : 0)
      + (themes.length > 0 ? 15 : 0)
      + (hasOfficialVideo ? 5 : 0)
  );

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
    completionPercent,
    ...(seed.officialSiteUrl ? { officialSiteUrl: canonicalHttpsUrl(seed.officialSiteUrl) } : {}),
    anilistUrl: seed.anilistUrl,
    status: seed.status,
    themes,
    sources: buildSources(seed)
  };
}

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

export const curatedSeasons: PublicSeasonSummary[] = [
  { id: "2026-summer", year: 2026, quarter: "summer", titleZhHant: "夏季動畫", titleJa: "2026年夏アニメ" },
  { id: "2026-spring", year: 2026, quarter: "spring", titleZhHant: "春季動畫", titleJa: "2026年春アニメ" }
];

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

export const curatedSeasonDetails: PublicSeasonDetail[] = [
  {
    ...curatedSeasons[0]!,
    anime: cardsForSeason("2026-summer"),
    catalogReferences: buildSeasonCatalogReferences(2026, "summer")
  },
  {
    ...curatedSeasons[1]!,
    anime: cardsForSeason("2026-spring"),
    catalogReferences: buildSeasonCatalogReferences(2026, "spring")
  }
];
