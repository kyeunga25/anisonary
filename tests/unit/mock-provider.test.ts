import { describe, expect, it } from "vitest";
import { MockProvider } from "@/data/mock-provider";

describe("MockProvider anime details", () => {
  it("returns complete OP and ED detail for the showcase title", async () => {
    const anime = await new MockProvider().getAnime("yoake-no-polaris");

    expect(anime?.themes).toHaveLength(2);
    expect(anime?.themes.map((theme) => `${theme.type}${theme.sequence}`)).toEqual(["OP1", "ED1"]);
    expect(anime?.themes[0]?.credits.some((credit) => credit.role === "lyrics")).toBe(true);
    expect(anime?.themes[0]?.videos[0]?.embeddable).toBe(true);
    expect(anime?.themes[1]?.videos[0]?.embeddable).toBe(false);
    expect(anime?.themes[0]?.links.map((link) => link.linkType)).toEqual([
      "direct_track",
      "search_result",
      "official_landing_page"
    ]);
    expect(anime?.sources[0]?.verifiedAt).toBe("2026-07-14");
  });

  it("provides at least three official video fixtures across the mock catalogue", async () => {
    const provider = new MockProvider();
    const seasons = await provider.getSeasons();
    const details = await Promise.all(seasons.map((season) => provider.getSeason(season.id)));
    const anime = await Promise.all(
      details.flatMap((season) => season?.anime ?? []).map((item) => provider.getAnime(item.slug))
    );
    const videos = anime.flatMap((item) => item?.themes.flatMap((theme) => theme.videos) ?? []);

    expect(videos.length).toBeGreaterThanOrEqual(3);
    expect(videos.every((video) => video.officialStatus === "official")).toBe(true);
  });

  it("provides a multi-player fixture for independent lazy-load state", async () => {
    const anime = await new MockProvider().getAnime("tomoshibi-no-yakusoku");
    const embeddableVideos = anime?.themes.flatMap((theme) => theme.videos).filter((video) => video.embeddable);

    expect(embeddableVideos).toHaveLength(2);
  });

  it("preserves a truthful empty state for an unannounced title", async () => {
    const anime = await new MockProvider().getAnime("signal-nocturne");

    expect(anime?.status).toBe("upcoming");
    expect(anime?.themes).toEqual([]);
  });

  it("returns null for an unknown slug", async () => {
    await expect(new MockProvider().getAnime("not-a-real-slug")).resolves.toBeNull();
  });

  it("returns isolated copies of nested theme data", async () => {
    const provider = new MockProvider();
    const first = await provider.getAnime("yoake-no-polaris");
    const second = await provider.getAnime("yoake-no-polaris");

    first?.themes[0]?.credits.push({ name: "Mutation", role: "other" });
    expect(second?.themes[0]?.credits.some((credit) => credit.name === "Mutation")).toBe(false);
  });
});
