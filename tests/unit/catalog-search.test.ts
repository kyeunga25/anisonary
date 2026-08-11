import { describe, expect, it } from "vitest";
import { CuratedProvider } from "@/data/curated-provider";
import {
  buildAnimeSearchText,
  buildThemeSearchText,
  matchesCatalogSearchTokens,
  normalizeCatalogSearchText,
  tokenizeCatalogSearchQuery
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
    expect(themeText.split(" ")).toContain("op");
    expect(themeText.split(" ")).toContain("theme");
  });

  it("matches every normalized query token across a combined catalogue result", () => {
    const searchText = normalizeCatalogSearchText(
      "幼女戦記Ⅱ Youjo Senki II Why? RED induction MYTH & ROID"
    );
    const tokens = tokenizeCatalogSearchQuery("  ＭＹＴＨ   幼女  ");

    expect(tokens).toEqual(["myth", "幼女"]);
    expect(matchesCatalogSearchTokens(searchText, tokens)).toBe(true);
    expect(matchesCatalogSearchTokens(searchText, ["myth", "不存在"])).toBe(false);
    expect(matchesCatalogSearchTokens(searchText, [])).toBe(true);
  });

  it("canonicalizes category aliases once per query and removes duplicate tokens", () => {
    expect(tokenizeCatalogSearchQuery("片頭曲 ＭＹＴＨ opening 主題曲")).toEqual([
      "op",
      "myth",
      "theme"
    ]);
    expect(tokenizeCatalogSearchQuery("片尾 ED ending")).toEqual(["ed"]);
  });
});
