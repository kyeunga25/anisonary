import type { PublicVideo } from "@/types/public-api";

const youtubeIdPattern = /^[A-Za-z0-9_-]{11}$/;

const videoTypeLabels: Record<PublicVideo["type"], string> = {
  creditless_op: "無字幕 OP",
  creditless_ed: "無字幕 ED",
  tv_size: "TV Size",
  full_music_video: "完整 MV",
  official_audio: "官方音源",
  other: "其他官方影片"
};

export function isValidYouTubeVideoId(value: string): boolean {
  return youtubeIdPattern.test(value);
}

export function youtubeThumbnailUrl(videoId: string): string | null {
  return isValidYouTubeVideoId(videoId) ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
}

export function youtubeEmbedUrl(videoId: string): string | null {
  if (!isValidYouTubeVideoId(videoId)) return null;
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0`;
}

export function youtubeWatchUrl(videoId: string): string | null {
  return isValidYouTubeVideoId(videoId) ? `https://www.youtube.com/watch?v=${videoId}` : null;
}

export function videoTypeLabel(type: PublicVideo["type"]): string {
  return videoTypeLabels[type];
}
