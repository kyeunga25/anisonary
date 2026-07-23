import { describe, expect, it } from "vitest";
import {
  buildAnnictApiQueryUrl,
  buildAnnictSeasonUrl,
  buildBangumiApiQueryUrl,
  buildBangumiCatalogUrl,
  buildSeasonCatalogReferences,
  catalogSourceDefinitions
} from "@/data/catalog-sources";
import { curatedSeasonDetails } from "@/data/curated-data";

describe("season catalogue source registry", () => {
  it("keeps one Japanese and one Chinese coverage source", () => {
    expect(catalogSourceDefinitions.map((source) => source.id)).toEqual(["annict", "bangumi"]);
    expect(catalogSourceDefinitions.map((source) => source.locale)).toEqual(["ja", "zh"]);
    expect(catalogSourceDefinitions.find((source) => source.id === "bangumi")?.limitations).toContain("簡體中文");
  });

  it("builds stable Annict season and API references without exposing a token", () => {
    expect(buildAnnictSeasonUrl(2026, "summer")).toBe(
      "https://annict.com/works/2026-summer?display=list_detailed"
    );

    const url = new URL(buildAnnictApiQueryUrl(2026, "spring"));
    expect(url.origin + url.pathname).toBe("https://api.annict.com/v1/works");
    expect(url.searchParams.get("filter_season")).toBe("2026-spring");
    expect(url.searchParams.get("per_page")).toBe("50");
    expect(url.search).not.toMatch(/access_token|bearer|secret/i);
  });

  it("uses Bangumi's stable browse endpoint and maps quarters to start months", () => {
    expect(buildBangumiCatalogUrl(2026)).toBe(
      "https://bgm.tv/anime/browser/%E6%97%A5%E6%9C%AC/airtime/2026"
    );

    const spring = new URL(buildBangumiApiQueryUrl(2026, "spring"));
    const summer = new URL(buildBangumiApiQueryUrl(2026, "summer"));
    expect(spring.origin + spring.pathname).toBe("https://api.bgm.tv/v0/subjects");
    expect(spring.pathname).not.toContain("/search/");
    expect(spring.searchParams.get("type")).toBe("2");
    expect(spring.searchParams.get("month")).toBe("4");
    expect(summer.searchParams.get("month")).toBe("7");
    expect(summer.searchParams.get("limit")).toBe("100");
    expect(summer.searchParams.get("offset")).toBe("0");
  });

  it("attaches both generated references to every curated season", () => {
    for (const season of curatedSeasonDetails) {
      expect(season.catalogReferences).toEqual(buildSeasonCatalogReferences(season.year, season.quarter));
      expect(season.catalogReferences?.map((reference) => reference.id)).toEqual(["annict", "bangumi"]);
    }
  });
});
