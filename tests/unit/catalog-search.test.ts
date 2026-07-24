import { describe, expect, it } from "vitest";
import { CuratedProvider } from "@/data/curated-provider";
import {
  buildAnimeSearchText,
  buildThemeSearchText,
  normalizeCatalogSearchText
} from "@/utils/catalog-search";

describe("catalogue search index", () => {
  it("normalizes width, case, and repeated whitespace without changing the source text", () => {
    const source = "  ＭＹＴＨ   &  ＲＯＩＤ  ";

    expect(normalizeCatalogSearchText(source)).toBe("myth & roid");
    expect(source).toBe("  ＭＹＴＨ   &  ＲＯＩＤ  ");
  });

  it("indexes Japanese, Traditional Chinese, Romaji, song, artist, and credit names", async () => {
    const provider = new CuratedProvider();
    const season = (await provider.getSeasons()).find(({ id }) => id === "2026-summer")!;
    const anime = (await provider.getAnime("youjo-senki-2"))!;
    const op = anime.themes.find(({ type }) => type === "OP")!;

    const animeText = buildAnimeSearchText(anime, season);
    const themeText = buildThemeSearchText(op);

    expect(animeText).toContain("幼女戦記ii");
    expect(animeText).toContain("幼女戰記ii");
    expect(animeText).toContain("youjo senki ii");
    expect(normalizeCatalogSearchText("幼女戰記Ⅱ")).toBe("幼女戰記ii");
    expect(themeText).toContain("why? red induction");
    expect(themeText).toContain("myth & roid");
  });
});
