import { describe, expect, it } from "vitest";
import { compareSeasonsNewestFirst, isSeasonSlug, parseSeasonSlug, seasonDisplayTitle } from "@/utils/season";

describe("season utilities", () => {
  it("parses valid season slugs", () => {
    expect(parseSeasonSlug("2026-summer")).toEqual({ year: 2026, quarter: "summer" });
  });

  it("rejects malformed season slugs", () => {
    expect(isSeasonSlug("summer-2026")).toBe(false);
    expect(isSeasonSlug("2026-autumn")).toBe(false);
  });

  it("sorts seasons newest first", () => {
    const seasons = [
      { id: "2025-fall", year: 2025, quarter: "fall" as const, titleZhHant: "秋季動畫", titleJa: "秋" },
      { id: "2026-spring", year: 2026, quarter: "spring" as const, titleZhHant: "春季動畫", titleJa: "春" },
      { id: "2026-summer", year: 2026, quarter: "summer" as const, titleZhHant: "夏季動畫", titleJa: "夏" }
    ];
    expect(seasons.sort(compareSeasonsNewestFirst).map((season) => season.id)).toEqual([
      "2026-summer",
      "2026-spring",
      "2025-fall"
    ]);
  });

  it("builds a Traditional Chinese display title", () => {
    expect(seasonDisplayTitle({ id: "2026-summer", year: 2026, quarter: "summer", titleZhHant: "夏季動畫", titleJa: "夏" })).toBe("2026 夏季動畫");
  });
});
