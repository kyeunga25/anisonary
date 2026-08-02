import { buildSeasonCatalogReferences, getSeasonSnapshotVerifiedAt } from "@/data/catalog-sources";
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
  PublicThemeSource,
  PublicVideo
} from "@/types/public-api";

const defaultVerifiedAt = "2026-07-25";

const themeOverrides: Record<string, Partial<CuratedThemeSeed>> = {
  "147105:ED:2": { titleJa: "夜に浮かぶ", titleRomaji: "Yoru ni Ukabu" },
  "147105:ED:3": { titleJa: "光", titleRomaji: "Hikari" },
  "178789:OP:2": { titleJa: "芽吹の唄", titleRomaji: "Mebuki no Uta", artistDisplayName: "大原ゆい子" },
  "177699:ED:1": { artistDisplayName: "MILLENNIUM PARADE feat. Saya Gray, Daniel Caesar" },
  "213426:ED:1": {
    titleJa: "防衛ライン（だいたい平和です）",
    titleRomaji: "Bouei Line (Daitai Heiwa Desu)",
    artistDisplayName: "まめぞう合唱団"
  }
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

const themeSourceOverrides: Record<string, Omit<PublicThemeSource, "verifiedAt">[]> = {
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

const themeVerifiedAtOverrides: Record<string, string> = {
  "207675:ED:1": "2026-08-02",
  "213426:ED:1": "2026-08-02"
};

const animeOfficialSourceOverrides: Record<number, { label: string; url: string }> = {
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
    label: "動畫官方網站：作品與播出資料",
    url: "https://busunihanatabawo.com/"
  },
  198408: {
    label: "作品官方網站：作品與播出資料",
    url: "https://latair.jp/"
  }
};

const animeVerifiedAtOverrides: Record<number, string> = {
  207675: "2026-08-02",
  213426: "2026-08-02",
  199486: "2026-08-02",
  177887: "2026-08-02",
  196063: "2026-08-02",
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
      label: `${video.channelName} 官方影片`,
      url: `https://www.youtube.com/watch?v=${video.youtubeVideoId}`,
      language: "ja" as const,
      role: "first_party" as const,
      verifiedAt
    })),
    ...(linkOverrides[key] ?? []).map((link) => ({
      label: link.label,
      url: canonicalHttpsUrl(link.url),
      language: "ja" as const,
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

  return [...new Map(candidates.map((source) => [source.url, source])).values()];
}

function toTheme(seed: CuratedAnimeSeed, originalTheme: CuratedThemeSeed): PublicTheme {
  const key = themeKey(seed.anilistId, originalTheme);
  const theme = { ...originalTheme, ...themeOverrides[key] };
  const verifiedAt = themeVerifiedAtOverrides[key] ?? seed.verifiedAt ?? defaultVerifiedAt;
  const sources = buildThemeSources(seed, theme, key, verifiedAt);

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
  ].filter((item) => item.url.startsWith("https://"));
  const normalized = candidates.map((item) => ({ ...item, url: canonicalHttpsUrl(item.url) }));
  const unique = new Map<string, PublicAnimeDetail["sources"][number]>();
  for (const item of normalized) {
    if (!unique.has(item.url)) unique.set(item.url, item);
  }
  return [...unique.values()];
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
  const animeVerifiedAt = animeVerifiedAtOverrides[seed.anilistId];
  const verifiedAt = [
    ...(animeVerifiedAt ? [animeVerifiedAt] : []),
    seed.verifiedAt ?? defaultVerifiedAt,
    ...themes.flatMap((theme) => theme.sources.map((source) => source.verifiedAt))
  ].sort((left, right) => right.localeCompare(left))[0]!;
  const officialSource = animeOfficialSource(seed);

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
    themes: _themes,
    sources: _sources,
    ...card
  } = anime;
  return card;
}

export const curatedSeasons: PublicSeasonSummary[] = [
  { id: "2026-summer", year: 2026, quarter: "summer", titleZhHant: "夏季動畫", titleJa: "2026年夏アニメ" },
  { id: "2026-spring", year: 2026, quarter: "spring", titleZhHant: "春季動畫", titleJa: "2026年春アニメ" },
  { id: "2026-winter", year: 2026, quarter: "winter", titleZhHant: "冬季動畫", titleJa: "2026年冬アニメ" },
  { id: "2025-summer", year: 2025, quarter: "summer", titleZhHant: "夏季動畫", titleJa: "2025年夏アニメ" }
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

export const curatedSeasonDetails: PublicSeasonDetail[] = curatedSeasons.map((season) => ({
  ...season,
  anime: cardsForSeason(season.id as keyof typeof curatedSeasonAnimeIds),
  reviewState: "reviewed",
  verifiedAt: getSeasonSnapshotVerifiedAt(season.year, season.quarter),
  catalogReferences: buildSeasonCatalogReferences(season.year, season.quarter)
}));
