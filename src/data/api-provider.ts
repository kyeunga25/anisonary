import type { PublicDataProvider } from "@/data/provider";
import type {
  PublicAnimeCard,
  PublicAnimeDetail,
  PublicCatalogReference,
  PublicCreatorCredit,
  PublicExternalLink,
  PublicSeasonDetail,
  PublicSeasonSummary,
  PublicTheme,
  PublicVideo,
  Quarter
} from "@/types/public-api";

const DEFAULT_TIMEOUT_MS = 10_000;
const MAX_TIMEOUT_MS = 60_000;
const MAX_TEXT_LENGTH = 500;
const seasonIdPattern = /^\d{4}-(winter|spring|summer|fall)$/;
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const broadcastTimePattern = /^(?:[01]\d|2\d):[0-5]\d$/;
const iso8601Pattern = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/;
const youtubeVideoIdPattern = /^[A-Za-z0-9_-]{11}$/;

const quarters = ["winter", "spring", "summer", "fall"] as const;
const creatorRoles = ["vocals", "lyrics", "composition", "arrangement", "other"] as const;
const videoTypes = [
  "creditless_op",
  "creditless_ed",
  "tv_size",
  "full_music_video",
  "official_audio",
  "other"
] as const;
const linkTypes = [
  "direct_track",
  "direct_album",
  "search_result",
  "official_landing_page",
  "physical_purchase",
  "digital_purchase"
] as const;
const linkRegions = ["JP", "HK", "TW", "GLOBAL", "UNKNOWN"] as const;
const animeStatuses = ["upcoming", "airing", "finished", "unknown"] as const;

class ContractError extends Error {}

function invalidContract(): never {
  throw new ContractError("Public API contract validation failed");
}

function record(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) invalidContract();
  return value as Record<string, unknown>;
}

function text(value: unknown, maxLength = MAX_TEXT_LENGTH): string {
  if (typeof value !== "string" || value.length === 0 || value.length > maxLength || value.trim() !== value) {
    invalidContract();
  }
  return value;
}

function optionalText(value: unknown, maxLength = MAX_TEXT_LENGTH): string | undefined {
  return value === undefined ? undefined : text(value, maxLength);
}

function bool(value: unknown): boolean {
  if (typeof value !== "boolean") invalidContract();
  return value;
}

function optionalBool(value: unknown): boolean | undefined {
  return value === undefined ? undefined : bool(value);
}

function integer(value: unknown, min: number, max: number): number {
  if (!Number.isInteger(value) || (value as number) < min || (value as number) > max) invalidContract();
  return value as number;
}

function optionalInteger(value: unknown, min: number, max: number): number | undefined {
  return value === undefined ? undefined : integer(value, min, max);
}

function oneOf<T extends string>(value: unknown, allowed: readonly T[]): T {
  if (typeof value !== "string" || !allowed.includes(value as T)) invalidContract();
  return value as T;
}

function array(value: unknown, minLength: number, maxLength: number): unknown[] {
  if (!Array.isArray(value) || value.length < minLength || value.length > maxLength) invalidContract();
  return value;
}

function httpsUrl(value: unknown): string {
  const candidate = text(value, 2_048);
  let parsed: URL;
  try {
    parsed = new URL(candidate);
  } catch {
    invalidContract();
  }
  if (parsed.protocol !== "https:" || parsed.username || parsed.password) invalidContract();
  return parsed.href;
}

function optionalHttpsUrl(value: unknown): string | undefined {
  return value === undefined ? undefined : httpsUrl(value);
}

function iso8601(value: unknown): string {
  const candidate = text(value, 40);
  const [year, month, day] = candidate.slice(0, 10).split("-").map(Number);
  const calendarDate = new Date(Date.UTC(year!, month! - 1, day!));
  if (
    !iso8601Pattern.test(candidate) ||
    Number.isNaN(Date.parse(candidate)) ||
    calendarDate.getUTCFullYear() !== year ||
    calendarDate.getUTCMonth() + 1 !== month ||
    calendarDate.getUTCDate() !== day
  ) {
    invalidContract();
  }
  return candidate;
}

function optionalIso8601(value: unknown): string | undefined {
  return value === undefined ? undefined : iso8601(value);
}

function slug(value: unknown, maxLength = 160): string {
  const candidate = text(value, maxLength);
  if (!slugPattern.test(candidate)) invalidContract();
  return candidate;
}

function unique(values: string[]): void {
  if (new Set(values).size !== values.length) invalidContract();
}

function parseSeasonSummary(value: unknown): PublicSeasonSummary {
  const item = record(value);
  const id = text(item.id, 20);
  const year = integer(item.year, 2000, 2100);
  const quarter = oneOf(item.quarter, quarters) as Quarter;
  if (!seasonIdPattern.test(id) || id !== `${year}-${quarter}`) invalidContract();

  return {
    id,
    year,
    quarter,
    titleZhHant: text(item.titleZhHant),
    titleJa: text(item.titleJa)
  };
}

function parseCatalogReference(value: unknown): PublicCatalogReference {
  const item = record(value);
  return {
    id: oneOf(item.id, ["annict", "bangumi"] as const),
    name: text(item.name),
    locale: oneOf(item.locale, ["ja", "zh"] as const),
    languageLabel: text(item.languageLabel),
    role: text(item.role, 1_000),
    catalogUrl: httpsUrl(item.catalogUrl),
    documentationUrl: httpsUrl(item.documentationUrl),
    apiQueryUrl: httpsUrl(item.apiQueryUrl),
    accessNote: text(item.accessNote, 1_000),
    limitations: text(item.limitations, 1_000)
  };
}

function parseAnimeCard(value: unknown): PublicAnimeCard {
  const item = record(value);
  const card: PublicAnimeCard = {
    id: slug(item.id),
    slug: slug(item.slug),
    titleJa: text(item.titleJa),
    posterAlt: text(item.posterAlt, 1_000),
    opCount: integer(item.opCount, 0, 99),
    edCount: integer(item.edCount, 0, 99),
    hasOfficialVideo: bool(item.hasOfficialVideo)
  };

  const titleZhHant = optionalText(item.titleZhHant);
  const titleRomaji = optionalText(item.titleRomaji);
  const posterUrl = optionalHttpsUrl(item.posterUrl);
  const bannerUrl = optionalHttpsUrl(item.bannerUrl);
  const bannerAlt = optionalText(item.bannerAlt, 1_000);
  const imageSourceUrl = optionalHttpsUrl(item.imageSourceUrl);
  const imageSourceLabel = optionalText(item.imageSourceLabel);
  const editorialWeekday = optionalInteger(item.editorialWeekday, 1, 7);
  const broadcastTimeJst = optionalText(item.broadcastTimeJst, 5);
  const broadcastLabel = optionalText(item.broadcastLabel, 1_000);
  const completionPercent = optionalInteger(item.completionPercent, 0, 100);

  if (broadcastTimeJst !== undefined && !broadcastTimePattern.test(broadcastTimeJst)) invalidContract();
  if ((bannerUrl === undefined) !== (bannerAlt === undefined)) invalidContract();
  if ((imageSourceUrl === undefined) !== (imageSourceLabel === undefined)) invalidContract();

  if (titleZhHant !== undefined) card.titleZhHant = titleZhHant;
  if (titleRomaji !== undefined) card.titleRomaji = titleRomaji;
  if (posterUrl !== undefined) card.posterUrl = posterUrl;
  if (bannerUrl !== undefined) card.bannerUrl = bannerUrl;
  if (bannerAlt !== undefined) card.bannerAlt = bannerAlt;
  if (imageSourceUrl !== undefined) card.imageSourceUrl = imageSourceUrl;
  if (imageSourceLabel !== undefined) card.imageSourceLabel = imageSourceLabel;
  if (editorialWeekday !== undefined) card.editorialWeekday = editorialWeekday;
  if (broadcastTimeJst !== undefined) card.broadcastTimeJst = broadcastTimeJst;
  if (broadcastLabel !== undefined) card.broadcastLabel = broadcastLabel;
  if (completionPercent !== undefined) card.completionPercent = completionPercent;

  return card;
}

function parseCreatorCredit(value: unknown): PublicCreatorCredit {
  const item = record(value);
  const credit: PublicCreatorCredit = {
    name: text(item.name),
    role: oneOf(item.role, creatorRoles)
  };
  const creatorSlug = item.creatorSlug === undefined ? undefined : slug(item.creatorSlug);
  if (creatorSlug !== undefined) credit.creatorSlug = creatorSlug;
  return credit;
}

function parseVideo(value: unknown): PublicVideo {
  const item = record(value);
  const youtubeVideoId = text(item.youtubeVideoId, 11);
  if (!youtubeVideoIdPattern.test(youtubeVideoId)) invalidContract();
  return {
    youtubeVideoId,
    title: text(item.title, 1_000),
    type: oneOf(item.type, videoTypes),
    channelName: text(item.channelName),
    officialStatus: oneOf(item.officialStatus, ["official", "licensed"] as const),
    embeddable: bool(item.embeddable)
  };
}

function parseExternalLink(value: unknown): PublicExternalLink {
  const item = record(value);
  return {
    platform: text(item.platform),
    label: text(item.label, 1_000),
    url: httpsUrl(item.url),
    linkType: oneOf(item.linkType, linkTypes),
    region: oneOf(item.region, linkRegions)
  };
}

function parseTheme(value: unknown): PublicTheme {
  const item = record(value);
  const theme: PublicTheme = {
    id: slug(item.id),
    type: oneOf(item.type, ["OP", "ED"] as const),
    sequence: integer(item.sequence, 1, 99),
    titleJa: text(item.titleJa),
    artistDisplayName: text(item.artistDisplayName),
    credits: array(item.credits, 0, 50).map(parseCreatorCredit),
    videos: array(item.videos, 0, 50).map(parseVideo),
    links: array(item.links, 0, 50).map(parseExternalLink),
    sourceLabels: array(item.sourceLabels, 1, 50).map((label) => text(label))
  };

  unique(theme.sourceLabels);
  unique(theme.videos.map((video) => video.youtubeVideoId));

  const titleRomaji = optionalText(item.titleRomaji);
  const titleZhHant = optionalText(item.titleZhHant);
  const versionLabel = optionalText(item.versionLabel);
  const releaseDate = optionalIso8601(item.releaseDate);
  const lastVerifiedAt = optionalIso8601(item.lastVerifiedAt);
  if (titleRomaji !== undefined) theme.titleRomaji = titleRomaji;
  if (titleZhHant !== undefined) theme.titleZhHant = titleZhHant;
  if (versionLabel !== undefined) theme.versionLabel = versionLabel;
  if (releaseDate !== undefined) theme.releaseDate = releaseDate;
  if (lastVerifiedAt !== undefined) theme.lastVerifiedAt = lastVerifiedAt;

  return theme;
}

function parseSource(value: unknown): PublicAnimeDetail["sources"][number] {
  const item = record(value);
  const source: PublicAnimeDetail["sources"][number] = {
    label: text(item.label, 1_000),
    url: httpsUrl(item.url)
  };
  const verifiedAt = optionalIso8601(item.verifiedAt);
  if (verifiedAt !== undefined) source.verifiedAt = verifiedAt;
  return source;
}

function parseSeasonDetail(value: unknown): PublicSeasonDetail {
  const item = record(value);
  const summary = parseSeasonSummary(item);
  const anime = array(item.anime, 0, 500).map(parseAnimeCard);
  unique(anime.map((card) => card.id));
  unique(anime.map((card) => card.slug));

  const detail: PublicSeasonDetail = { ...summary, anime };
  if (item.catalogReferences !== undefined) {
    const catalogReferences = array(item.catalogReferences, 0, 10).map(parseCatalogReference);
    unique(catalogReferences.map((reference) => reference.id));
    detail.catalogReferences = catalogReferences;
  }
  const isMockData = optionalBool(item.isMockData);
  if (isMockData !== undefined) detail.isMockData = isMockData;
  return detail;
}

function parseAnimeDetail(value: unknown): PublicAnimeDetail {
  const item = record(value);
  const card = parseAnimeCard(item);
  const themes = array(item.themes, 0, 100).map(parseTheme);
  const sources = array(item.sources, 1, 100).map(parseSource);
  unique(themes.map((theme) => theme.id));
  unique(themes.map((theme) => `${theme.type}-${theme.sequence}`));
  unique(sources.map((source) => source.url));

  if (themes.filter((theme) => theme.type === "OP").length !== card.opCount) invalidContract();
  if (themes.filter((theme) => theme.type === "ED").length !== card.edCount) invalidContract();
  if (themes.some((theme) => theme.videos.length > 0) !== card.hasOfficialVideo) invalidContract();

  const detail: PublicAnimeDetail = {
    ...card,
    status: oneOf(item.status, animeStatuses),
    themes,
    sources
  };

  const officialSiteUrl = optionalHttpsUrl(item.officialSiteUrl);
  const anilistUrl = optionalHttpsUrl(item.anilistUrl);
  const bangumiUrl = optionalHttpsUrl(item.bangumiUrl);
  if (officialSiteUrl !== undefined) detail.officialSiteUrl = officialSiteUrl;
  if (anilistUrl !== undefined) detail.anilistUrl = anilistUrl;
  if (bangumiUrl !== undefined) detail.bangumiUrl = bangumiUrl;
  return detail;
}

function parseSeasonList(value: unknown): PublicSeasonSummary[] {
  const seasons = array(value, 1, 100).map(parseSeasonSummary);
  unique(seasons.map((season) => season.id));
  return seasons;
}

function normalizeBaseUrl(value: string): string {
  let parsed: URL;
  try {
    parsed = new URL(value.trim());
  } catch {
    throw new Error("Anisonary API has an invalid base URL");
  }

  const isLocalHttp = parsed.protocol === "http:" && ["localhost", "127.0.0.1", "[::1]"].includes(parsed.hostname);
  if (
    (parsed.protocol !== "https:" && !isLocalHttp) ||
    parsed.username ||
    parsed.password ||
    parsed.search ||
    parsed.hash
  ) {
    throw new Error("Anisonary API has an invalid base URL");
  }
  return parsed.href.replace(/\/$/, "");
}

async function readJson(response: Response): Promise<unknown> {
  if (!response.ok) throw new Error(`Anisonary API request failed (${response.status})`);
  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  if (!/^(?:application\/json|[^;\s]+\/[^;\s]+\+json)(?:\s*;|$)/.test(contentType)) {
    throw new Error("Anisonary API returned an invalid content type");
  }
  try {
    return await response.json();
  } catch {
    throw new Error("Anisonary API returned invalid JSON");
  }
}

export interface ApiProviderOptions {
  fetch?: typeof fetch;
  timeoutMs?: number;
}

export class ApiProvider implements PublicDataProvider {
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;
  private readonly timeoutMs: number;

  constructor(baseUrl: string, options: ApiProviderOptions = {}) {
    this.baseUrl = normalizeBaseUrl(baseUrl);
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    if (!Number.isInteger(this.timeoutMs) || this.timeoutMs < 1 || this.timeoutMs > MAX_TIMEOUT_MS) {
      throw new Error("Anisonary API has an invalid request timeout");
    }
  }

  private async request(path: string, allowNotFound = false): Promise<unknown | null> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);
    try {
      let response: Response;
      try {
        response = await this.fetchImpl(`${this.baseUrl}${path}`, {
          headers: { Accept: "application/json" },
          redirect: "error",
          signal: controller.signal
        });
      } catch {
        if (controller.signal.aborted) throw new Error("Anisonary API request timed out");
        throw new Error("Anisonary API request failed");
      }
      if (allowNotFound && response.status === 404) return null;
      return await readJson(response);
    } finally {
      clearTimeout(timeout);
    }
  }

  async getSeasons(): Promise<PublicSeasonSummary[]> {
    const data = await this.request("/seasons");
    try {
      return parseSeasonList(data);
    } catch {
      throw new Error("Anisonary API returned an invalid season list");
    }
  }

  async getSeason(seasonId: string): Promise<PublicSeasonDetail | null> {
    if (!seasonIdPattern.test(seasonId)) throw new Error("Anisonary API received an invalid season ID");
    const data = await this.request(`/seasons/${encodeURIComponent(seasonId)}`, true);
    if (data === null) return null;
    try {
      const season = parseSeasonDetail(data);
      if (season.id !== seasonId) invalidContract();
      return season;
    } catch {
      throw new Error("Anisonary API returned an invalid season payload");
    }
  }

  async getAnime(requestedSlug: string): Promise<PublicAnimeDetail | null> {
    if (!slugPattern.test(requestedSlug) || requestedSlug.length > 160) {
      throw new Error("Anisonary API received an invalid anime slug");
    }
    const data = await this.request(`/anime/${encodeURIComponent(requestedSlug)}`, true);
    if (data === null) return null;
    try {
      const anime = parseAnimeDetail(data);
      if (anime.slug !== requestedSlug) invalidContract();
      return anime;
    } catch {
      throw new Error("Anisonary API returned an invalid anime payload");
    }
  }
}
