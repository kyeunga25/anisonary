import type { PublicTheme, PublicThemeDataField, PublicThemeDataStatus, PublicThemeFollowUp } from "@/types/public-api";

export const themeDataFields = [
  "basic_evidence", "lyrics", "composition", "arrangement", "recordings",
  "recording_format", "official_video", "video_metadata", "releases",
  "platform_links", "platform_availability"
] as const satisfies readonly PublicThemeDataField[];

export const themeDataFieldLabels: Record<PublicThemeDataField, string> = {
  basic_evidence: "基本欄位證據",
  lyrics: "作詞", composition: "作曲", arrangement: "編曲",
  recordings: "音源版本", recording_format: "音源長度分類",
  official_video: "官方影片", video_metadata: "影片形式／渠道資料",
  releases: "收錄發行品", platform_links: "確切曲目／專輯連結",
  platform_availability: "平台地區可用性"
};

function youtubeId(url: string): string | undefined {
  const parsed = new URL(url);
  const id = parsed.hostname === "youtu.be" ? parsed.pathname.slice(1)
    : ["youtube.com", "www.youtube.com"].includes(parsed.hostname) && parsed.pathname === "/watch"
      ? parsed.searchParams.get("v") : undefined;
  return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : undefined;
}

export function deriveThemeDataStatus(theme: PublicTheme, followUp?: PublicThemeFollowUp[]): PublicThemeDataStatus {
  const pending = new Set<PublicThemeDataField>();
  const basicDates: string[] = [];
  for (const [target, field] of [["song", "title"], ["song", "artist"], ["anime_use", "usage"]] as const) {
    for (const role of ["first_party", "cross_check"] as const) {
      const date = theme.evidence?.filter((evidence) => evidence.target === target && evidence.fields.includes(field)
        && evidence.sourceUrls.some((url) => theme.sources.some((source) => source.url === url && source.role === role)))
        .map((evidence) => evidence.verifiedAt).sort().at(-1);
      if (date) basicDates.push(date);
    }
  }
  const hasBasicEvidence = basicDates.length === 6;
  if (!hasBasicEvidence) pending.add("basic_evidence");

  const roles = ["lyrics", "composition", "arrangement"] as const;
  const recordedRoles = roles.filter((role) => theme.credits.some((credit) => credit.role === role));
  for (const role of roles) if (!recordedRoles.includes(role)) pending.add(role);
  if (!theme.recordings?.length) pending.add("recordings");
  const unknownFormat = theme.recordings?.some((recording) => recording.format === "unknown") ?? false;
  if (unknownFormat) pending.add("recording_format");

  const videoLinks = theme.links.filter((link) => link.platform === "YouTube" && link.linkType === "direct_track"
    && youtubeId(link.url) && (theme.sources.some((source) => source.url === link.url && source.role === "first_party")
      || theme.evidence?.some((evidence) => evidence.target === "link" && evidence.targetId === link.url
        && evidence.sourceUrls.some((url) => theme.sources.some((source) => source.url === url && source.role === "first_party")))));
  if (!theme.videos.length && !videoLinks.length) pending.add("official_video");
  if (videoLinks.some((link) => !theme.videos.some((video) => video.youtubeVideoId === youtubeId(link.url)))) pending.add("video_metadata");
  if (!theme.releases?.length) pending.add("releases");

  const platformLinks = theme.links.filter((link) => !["youtube.com", "www.youtube.com", "youtu.be"].includes(new URL(link.url).hostname));
  const exactLinks = platformLinks.filter((link) => link.linkType === "direct_track" || link.linkType === "direct_album");
  if (!exactLinks.length) pending.add("platform_links");
  if (exactLinks.some((link) => !link.availability || link.availability === "unknown")) pending.add("platform_availability");

  return {
    basis: "stored_fields_and_evidence",
    basic: hasBasicEvidence ? "field_evidence_recorded" : "sources_recorded",
    ...(hasBasicEvidence ? { basicVerifiedAt: basicDates.sort()[0]! } : {}),
    details: {
      credits: recordedRoles.length === roles.length ? "roles_recorded" : recordedRoles.length ? "partial" : "not_recorded",
      recordings: !theme.recordings?.length ? "not_recorded" : unknownFormat ? "format_unknown" : "recorded",
      videos: theme.videos.length ? "recorded" : videoLinks.length ? "links_only" : "not_recorded",
      releases: theme.releases?.length ? "recorded" : "not_recorded",
      platforms: exactLinks.length ? "exact_links_recorded" : platformLinks.length ? "entry_links_only" : "not_recorded"
    },
    pendingFields: themeDataFields.filter((field) => pending.has(field)),
    ...(followUp?.length ? { followUp } : {})
  };
}
