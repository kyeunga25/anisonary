export type Quarter = "winter" | "spring" | "summer" | "fall";
export type PublicSourceLanguage = "zh-Hant" | "zh-Hans" | "ja" | "en" | "multi";
export type PublicReviewState = "reviewed";

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
  language: PublicSourceLanguage;
  role: string;
  sourceRole: "inventory" | "cross_check";
  reviewState: PublicReviewState;
  verifiedAt: string;
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

export interface PublicThemeSource {
  label: string;
  url: string;
  language: PublicSourceLanguage;
  role: "first_party" | "cross_check";
  verifiedAt: string;
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
  sources: PublicThemeSource[];
  reviewState: PublicReviewState;
  // API v1 compatibility alias. New consumers should use sources.
  sourceLabels: string[];
  // API v1 compatibility alias. New consumers should use sources[].verifiedAt.
  lastVerifiedAt?: string;
}

export interface PublicAnimeDetail extends PublicAnimeCard {
  officialSiteUrl?: string;
  anilistUrl?: string;
  bangumiUrl?: string;
  status: "upcoming" | "airing" | "finished" | "unknown";
  reviewState: PublicReviewState;
  verifiedAt: string;
  themes: PublicTheme[];
  sources: {
    label: string;
    url: string;
    language: PublicSourceLanguage;
    role:
      | "first_party"
      | "identifier"
      | "localized_cross_check"
      | "theme_cross_check"
      | "broadcast_cross_check";
    verifiedAt: string;
  }[];
}

export interface PublicSeasonDetail extends PublicSeasonSummary {
  anime: PublicAnimeCard[];
  reviewState: PublicReviewState;
  verifiedAt: string;
  catalogReferences: PublicCatalogReference[];
  isMockData?: boolean;
}
