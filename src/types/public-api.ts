export type Quarter = "winter" | "spring" | "summer" | "fall";

export interface PublicSeasonSummary {
  id: string;
  year: number;
  quarter: Quarter;
  titleZhHant: string;
  titleJa: string;
}

export interface PublicCatalogReference {
  id: "annict" | "bangumi";
  name: string;
  locale: "ja" | "zh";
  languageLabel: string;
  role: string;
  catalogUrl: string;
  documentationUrl: string;
  apiQueryUrl: string;
  accessNote: string;
  limitations: string;
}

export interface PublicAnimeCard {
  id: string;
  slug: string;
  titleJa: string;
  titleZhHant?: string;
  titleRomaji?: string;
  posterUrl?: string;
  posterAlt: string;
  bannerUrl?: string;
  bannerAlt?: string;
  imageSourceUrl?: string;
  imageSourceLabel?: string;
  editorialWeekday?: number;
  broadcastTimeJst?: string;
  broadcastLabel?: string;
  opCount: number;
  edCount: number;
  hasOfficialVideo: boolean;
  completionPercent?: number;
}

export interface PublicCreatorCredit {
  name: string;
  role: "vocals" | "lyrics" | "composition" | "arrangement" | "other";
  creatorSlug?: string;
}

export interface PublicVideo {
  youtubeVideoId: string;
  title: string;
  type:
    | "creditless_op"
    | "creditless_ed"
    | "tv_size"
    | "full_music_video"
    | "official_audio"
    | "other";
  channelName: string;
  officialStatus: "official" | "licensed";
  embeddable: boolean;
}

export type PublicLinkType =
  | "direct_track"
  | "direct_album"
  | "search_result"
  | "official_landing_page"
  | "physical_purchase"
  | "digital_purchase";

export interface PublicExternalLink {
  platform: string;
  label: string;
  url: string;
  linkType: PublicLinkType;
  region: "JP" | "HK" | "TW" | "GLOBAL" | "UNKNOWN";
}

export interface PublicTheme {
  id: string;
  type: "OP" | "ED";
  sequence: number;
  titleJa: string;
  titleRomaji?: string;
  titleZhHant?: string;
  artistDisplayName: string;
  credits: PublicCreatorCredit[];
  versionLabel?: string;
  releaseDate?: string;
  videos: PublicVideo[];
  links: PublicExternalLink[];
  sourceLabels: string[];
  lastVerifiedAt?: string;
}

export interface PublicAnimeDetail extends PublicAnimeCard {
  officialSiteUrl?: string;
  anilistUrl?: string;
  bangumiUrl?: string;
  status: "upcoming" | "airing" | "finished" | "unknown";
  themes: PublicTheme[];
  sources: {
    label: string;
    url: string;
    verifiedAt?: string;
  }[];
}

export interface PublicSeasonDetail extends PublicSeasonSummary {
  anime: PublicAnimeCard[];
  catalogReferences?: PublicCatalogReference[];
  isMockData?: boolean;
}
