import { describe, expect, it } from "vitest";
import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";
import { CuratedProvider } from "@/data/curated-provider";

describe("curated public catalogue", () => {
  it("publishes the reviewed spring and summer 2026 slices", () => {
    expect(curatedSeasons.map((season) => season.id)).toEqual(["2026-summer", "2026-spring"]);
    expect(curatedSeasonDetails).toHaveLength(2);
    expect(curatedSeasonDetails.map((season) => season.anime.length)).toEqual([4, 4]);
    expect(curatedAnimeDetails).toHaveLength(8);
  });

  it("keeps every season card connected to one complete detail record", () => {
    const slugs = curatedAnimeDetails.map((anime) => anime.slug);
    expect(new Set(slugs).size).toBe(slugs.length);

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
    for (const anime of curatedAnimeDetails) {
      expect(anime.posterUrl).toMatch(/^https:\/\/s4\.anilist\.co\//);
      expect(anime.bannerUrl).toMatch(/^https:\/\/s4\.anilist\.co\//);
      expect(anime.imageSourceUrl).toMatch(/^https:\/\/anilist\.co\/anime\//);
      expect(anime.posterAlt).toContain(anime.titleJa);
      expect(anime.sources.length).toBeGreaterThanOrEqual(2);

      for (const item of anime.sources) {
        expect(item.url).toMatch(/^https:\/\//);
        expect(item.url).not.toContain("example.com");
        expect(item.verifiedAt).toBe("2026-07-24");
      }

      for (const item of anime.themes) {
        expect(item.titleJa).toBeTruthy();
        expect(item.artistDisplayName).toBeTruthy();
        expect(item.lastVerifiedAt).toBe("2026-07-24");
        expect(item.sourceLabels[0]).not.toMatch(/mock/i);
      }
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

  it("returns defensive copies from the default repository provider", async () => {
    const provider = new CuratedProvider();
    const first = await provider.getAnime("akane-banashi");
    const second = await provider.getAnime("akane-banashi");
    expect(first).not.toBe(second);
    expect(await provider.getAnime("not-a-real-slug")).toBeNull();
  });
});
