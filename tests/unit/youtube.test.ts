import { describe, expect, it } from "vitest";
import {
  isValidYouTubeVideoId,
  videoTypeLabel,
  youtubeEmbedUrl,
  youtubeThumbnailUrl,
  youtubeWatchUrl
} from "@/utils/youtube";

describe("YouTube helpers", () => {
  it("accepts the documented 11-character video id format", () => {
    expect(isValidYouTubeVideoId("M7lc1UVf-VE")).toBe(true);
    expect(isValidYouTubeVideoId("too-short")).toBe(false);
    expect(isValidYouTubeVideoId("invalid/id!" )).toBe(false);
  });

  it("builds thumbnail, privacy-enhanced embed, and watch URLs", () => {
    expect(youtubeThumbnailUrl("M7lc1UVf-VE")).toBe("https://i.ytimg.com/vi/M7lc1UVf-VE/hqdefault.jpg");
    expect(youtubeEmbedUrl("M7lc1UVf-VE")).toBe("https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?autoplay=0&rel=0");
    expect(youtubeWatchUrl("M7lc1UVf-VE")).toBe("https://www.youtube.com/watch?v=M7lc1UVf-VE");
  });

  it("does not generate URLs for malformed ids", () => {
    expect(youtubeThumbnailUrl("bad")).toBeNull();
    expect(youtubeEmbedUrl("bad")).toBeNull();
    expect(youtubeWatchUrl("bad")).toBeNull();
  });

  it("provides visible video-type labels", () => {
    expect(videoTypeLabel("creditless_op")).toBe("無字幕 OP");
    expect(videoTypeLabel("official_audio")).toBe("官方音源");
  });
});
