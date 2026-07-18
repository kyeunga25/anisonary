import { describe, expect, it } from "vitest";
import { MockProvider } from "@/data/mock-provider";
import { buildAnimeJsonLd, buildSeasonJsonLd, serializeJsonLd } from "@/utils/seo";

const site = "https://anisonary.example/";

describe("SEO structured data", () => {
  it("builds a season collection whose items use canonical anime URLs", async () => {
    const season = await new MockProvider().getSeason("2026-summer");
    expect(season).not.toBeNull();

    const jsonLd = buildSeasonJsonLd(season!, site);
    const mainEntity = jsonLd.mainEntity as { numberOfItems: number; itemListElement: unknown[] };

    expect(jsonLd["@type"]).toBe("CollectionPage");
    expect(mainEntity.numberOfItems).toBe(season!.anime.length);
    expect(JSON.stringify(mainEntity.itemListElement)).toContain(
      "https://anisonary.example/anime/yoake-no-polaris/"
    );
  });

  it("builds an anime TVSeries document from data visible on the page", async () => {
    const provider = new MockProvider();
    const [anime, seasons] = await Promise.all([
      provider.getAnime("yoake-no-polaris"),
      provider.getSeasons()
    ]);

    const jsonLd = buildAnimeJsonLd(anime!, seasons[0]!, site);

    expect(jsonLd).toMatchObject({
      "@type": "TVSeries",
      name: "夜明けのポラリス",
      url: "https://anisonary.example/anime/yoake-no-polaris/"
    });
    expect(jsonLd.alternateName).toContain("黎明的北極星");
  });

  it("escapes markup that could close a JSON-LD script element", () => {
    const serialized = serializeJsonLd({
      "@context": "https://schema.org",
      name: "</script><script>alert(1)</script>"
    });

    expect(serialized).not.toContain("</script>");
    expect(serialized).toContain("\\u003c/script>");
  });
});
