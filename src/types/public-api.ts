export type Quarter = "winter" | "spring" | "summer" | "fall";
export type PublicSourceLanguage = "zh-Hant" | "zh-Hans" | "ja" | "en" | "multi";
export type PublicReviewState = "reviewed";
export type PublicThemeAvailability = "documented" | "not_announced" | "pending_verification" | "not_used";

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
  role:
    | "vocals"
    | "lyrics"
    | "translation"
    | "composition"
    | "songwriting"
    | "arrangement"
    | "group_member"
    | "other";
  creatorSlug?: string;
  groupName?: string;
}

export interface PublicVideo {
  youtubeVideoId: string;
  title: string;
  type:
    | "creditless_op"
    | "creditless_ed"
    | "tv_size"
    | "full_music_video"
    | "music_video"
    | "art_track"
    | "lyric_video"
    | "live"
    | "pv"
    | "official_audio"
    | "other";
  channelName: string;
  officialStatus: "official" | "licensed";
  embeddable: boolean;
  embedAvailability?: "unknown";
  recordingId?: string;
  releaseId?: string;
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
  recordingId?: string;
  releaseId?: string;
  verifiedAt?: string;
  availability?: "available" | "unavailable" | "unknown";
}

export interface PublicThemeSource {
  label: string;
  url: string;
  language: PublicSourceLanguage;
  role: "first_party" | "cross_check";
  verifiedAt: string;
}

export interface PublicRecording {
  id: string;
  title: string;
  format: "full" | "tv" | "short" | "unknown";
  kind: "vocal" | "instrumental" | "rearrangement" | "character" | "live" | "remix";
  credits?: PublicCreatorCredit[];
}

export interface PublicRelease {
  id: string;
  title: string;
  type: "single" | "album" | "ep" | "compilation" | "soundtrack";
  artistDisplayName: string;
  date?: { value: string; precision: "year" | "month" | "day" };
  label?: string;
  region?: PublicExternalLink["region"];
  edition?: string;
  catalogNumber?: string;
  // Only tracks related to this song; this is not a complete release tracklist.
  tracks: { title: string; recordingId?: string; disc?: number; position?: number }[];
}

export type PublicEvidenceField =
  | "title" | "artist" | "usage" | "credits" | "format" | "kind"
  | "date" | "edition" | "catalog_number" | "tracklist" | "url" | "type" | "availability";

export interface PublicFieldEvidence {
  target: "song" | "anime_use" | "credits" | "recording" | "release" | "video" | "link";
  targetId?: string;
  fields: PublicEvidenceField[];
  sourceUrls: string[];
  verifiedAt: string;
}

export type PublicThemeDataField =
  | "basic_evidence" | "use_quarters" | "lyrics" | "composition" | "arrangement"
  | "recordings" | "recording_format" | "official_video" | "video_metadata"
  | "releases" | "platform_links" | "platform_availability";

export interface PublicThemeFollowUp {
  fields: PublicThemeDataField[];
  note: string;
  resumeWhen: string;
  checkedAt?: string;
}

// An inventory of saved fields, not a claim that every version has been found.
export interface PublicThemeDataStatus {
  basis: "stored_fields_and_evidence";
  basic: "field_evidence_recorded" | "sources_recorded";
  basicVerifiedAt?: string;
  details: {
    credits: "not_recorded" | "partial" | "roles_recorded";
    recordings: "not_recorded" | "format_unknown" | "recorded";
    videos: "not_recorded" | "links_only" | "recorded";
    releases: "not_recorded" | "recorded";
    platforms: "not_recorded" | "entry_links_only" | "exact_links_recorded";
  };
  pendingFields: PublicThemeDataField[];
  followUp?: PublicThemeFollowUp[];
}

export interface PublicTheme {
  id: string;
  // Confirmed use quarters; [] explicitly means unverified, omitted legacy records
  // retain work-level membership. Empty arrays require a follow-up in dataStatus.
  seasonIds?: string[];
  // Retired duplicate IDs resolve to this use without adding another song row.
  idAliases?: string[];
  type: "OP" | "ED" | "IN" | "TS";
  sequence: number;
  titleJa: string;
  titleRomaji?: string;
  titleZhHant?: string;
  artistDisplayName: string;
  credits: PublicCreatorCredit[];
  usageLabel?: string;
  versionLabel?: string;
  releaseDate?: string;
  songId?: string;
  recordings?: PublicRecording[];
  releases?: PublicRelease[];
  evidence?: PublicFieldEvidence[];
  dataStatus?: PublicThemeDataStatus;
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
  themeAvailability: PublicThemeAvailability;
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
  coverageNote?: string;
  reviewState: PublicReviewState;
  verifiedAt: string;
  catalogReferences: PublicCatalogReference[];
  isMockData?: boolean;
}
