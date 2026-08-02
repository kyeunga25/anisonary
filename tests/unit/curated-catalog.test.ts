import { describe, expect, it } from "vitest";
import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";
import { CuratedProvider } from "@/data/curated-provider";

describe("curated public catalogue", () => {
  it("publishes all four reviewed seasonal snapshots", () => {
    expect(curatedSeasons.map((season) => season.id)).toEqual([
      "2026-summer",
      "2026-spring",
      "2026-winter",
      "2025-summer"
    ]);
    expect(curatedSeasonDetails).toHaveLength(4);
    expect(curatedSeasonDetails.map((season) => season.anime.length)).toEqual([70, 70, 66, 75]);
    expect(curatedSeasonDetails.map((season) => [season.id, season.reviewState, season.verifiedAt])).toEqual([
      ["2026-summer", "reviewed", "2026-08-02"],
      ["2026-spring", "reviewed", "2026-08-02"],
      ["2026-winter", "reviewed", "2026-07-28"],
      ["2025-summer", "reviewed", "2026-08-02"]
    ]);
    expect(curatedAnimeDetails).toHaveLength(280);
    expect(curatedAnimeDetails.filter((anime) => anime.themes.length > 0)).toHaveLength(269);
    expect(curatedAnimeDetails.flatMap((anime) => anime.themes)).toHaveLength(615);
    const youtubeLinks = curatedAnimeDetails
      .flatMap((anime) => anime.themes)
      .flatMap((theme) => theme.links)
      .filter((link) => link.platform === "YouTube");
    expect(youtubeLinks).toHaveLength(392);
    expect(youtubeLinks.every((link) => new URL(link.url).hostname === "www.youtube.com")).toBe(true);
  });

  it("keeps every season card connected to one complete detail record", () => {
    const slugs = curatedAnimeDetails.map((anime) => anime.slug);
    const ids = curatedAnimeDetails.map((anime) => anime.id);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(ids).size).toBe(ids.length);

    for (const season of curatedSeasonDetails) {
      for (const card of season.anime) {
        const detail = curatedAnimeDetails.find((anime) => anime.slug === card.slug);
        expect(detail, card.slug).toBeDefined();
        expect(detail?.titleJa).toBeTruthy();
        expect(detail?.titleZhHant).toBeTruthy();
        expect(detail?.themes).toHaveLength(card.opCount + card.edCount);
      }
    }
  });

  it("uses traceable HTTPS artwork and reviewed public sources", () => {
    const newlyReviewedIds = new Set(
      curatedSeasonDetails
        .filter((season) => season.id === "2026-winter" || season.id === "2025-summer")
        .flatMap((season) => season.anime.map((anime) => anime.id))
    );

    for (const anime of curatedAnimeDetails) {
      expect(anime.posterUrl).toMatch(/^https:\/\/s4\.anilist\.co\//);
      if (anime.bannerUrl) expect(anime.bannerUrl).toMatch(/^https:\/\/s4\.anilist\.co\//);
      expect(anime.imageSourceUrl).toMatch(/^https:\/\/anilist\.co\/anime\//);
      expect(anime.posterAlt).toContain(anime.titleJa);
      expect(anime.reviewState).toBe("reviewed");
      expect(anime.sources.length).toBeGreaterThanOrEqual(2);
      expect(anime.sources.some((source) => source.role === "first_party")).toBe(true);
      expect(anime.sources.some((source) => source.role !== "first_party")).toBe(true);

      for (const item of anime.sources) {
        expect(item.url).toMatch(/^https:\/\//);
        expect(item.url).not.toContain("example.com");
        expect(["zh-Hant", "zh-Hans", "ja", "en", "multi"]).toContain(item.language);
        expect(item.verifiedAt).toBe(anime.verifiedAt);
      }

      for (const item of anime.themes) {
        const expectedVerifiedAt = item.id === "hyakki-yakou-shou-ed-1" || item.id === "chikyuu-daisuki-kikkun-ed-1"
          ? "2026-08-02"
          : newlyReviewedIds.has(anime.id) ? "2026-07-28" : "2026-07-25";
        expect(item.titleJa).toBeTruthy();
        expect(item.artistDisplayName).toBeTruthy();
        expect(item.reviewState).toBe("reviewed");
        expect(item.sources.length).toBeGreaterThanOrEqual(2);
        expect(item.sources.some((source) => source.role === "first_party")).toBe(true);
        expect(item.sources.some((source) => source.role === "cross_check")).toBe(true);
        expect(item.sourceLabels).toEqual([...new Set(item.sources.map((source) => source.label))]);
        expect(item.lastVerifiedAt).toBe(expectedVerifiedAt);
        for (const source of item.sources) {
          expect(source.url).toMatch(/^https:\/\//);
          expect(source.url).not.toContain("example.com");
          expect(["zh-Hant", "zh-Hans", "ja", "en", "multi"]).toContain(source.language);
          expect(source.verifiedAt).toBe(expectedVerifiedAt);
        }
        for (const link of item.links) expect(link.url).toMatch(/^https:\/\//);
      }

      expect(anime.hasOfficialVideo).toBe(anime.themes.some((item) =>
        item.videos.length > 0 || item.links.some((link) => link.platform === "YouTube")
      ));
    }
  });

  it("includes manually verified themes missed by the seasonal song indexes", () => {
    const expectedThemes = [
      ["choppers", "OP", "トニートニートニーチョッパー", "ももすももす"],
      ["enen-no-shouboutai-san-no-shou-part-2", "OP", "Ignis -イグニス-", "西川貴教"],
      ["trigun-stargaze", "ED", "スターダスト", "FOMARE"],
      ["prism-rondo", "ED", "star flower", "Chilli Beans."],
      ["ginga-tokkyuu-milky-subway", "OP", "Altair and Vega", "MindaRyn"],
      ["poke-mon-concierge-part-2", "ED", "オノマトペ ISLAND", "山下達郎"],
      ["chikyuu-no-latair", "ED", "地球のオーケストラ", "アースセイバーズ"]
    ] as const;

    for (const [slug, type, titleJa, artist] of expectedThemes) {
      const theme = curatedAnimeDetails
        .find((anime) => anime.slug === slug)
        ?.themes.find((item) => item.type === type && item.titleJa === titleJa);
      expect(theme, `${slug}:${type}:${titleJa}`).toBeDefined();
      expect(theme?.artistDisplayName).toContain(artist);
    }
  });

  it("preserves the verified second-season credits for Youjo Senki", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "youjo-senki-2");
    expect(anime?.titleJa).toBe("幼女戦記Ⅱ");
    expect(anime?.titleZhHant).toBe("幼女戰記Ⅱ");
    expect(anime?.themes[0]?.credits).toEqual(expect.arrayContaining([
      { name: "MYTH & ROID", role: "lyrics" },
      { name: "MYTH & ROID", role: "composition" },
      { name: "MYTH & ROID", role: "arrangement" }
    ]));
    expect(anime?.themes[1]?.credits).toEqual(expect.arrayContaining([
      { name: "hotaru", role: "lyrics" },
      { name: "中野雅之", role: "composition" },
      { name: "中野雅之", role: "arrangement" }
    ]));
  });

  it("includes the verified Mushoku Tensei III creditless ending", () => {
    const anime = curatedAnimeDetails.find((item) => item.slug === "mushoku-tensei-3");
    const ending = anime?.themes.find((item) => item.id === "mushoku-tensei-3-ed-1");

    expect(anime?.hasOfficialVideo).toBe(true);
    expect(ending?.videos).toContainEqual(expect.objectContaining({
      youtubeVideoId: "UKcJqQqiXq0",
      type: "creditless_ed",
      officialStatus: "official"
    }));
  });

  it("returns defensive copies from the default repository provider", async () => {
    const provider = new CuratedProvider();
    const first = await provider.getAnime("akane-banashi");
    const second = await provider.getAnime("akane-banashi");
    expect(first).not.toBe(second);
    expect(await provider.getAnime("not-a-real-slug")).toBeNull();
  });
});
