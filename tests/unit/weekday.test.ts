import { describe, expect, it } from "vitest";
import type { PublicAnimeCard } from "@/types/public-api";
import { formatBroadcastLabel, groupByEditorialWeekday, parseBroadcastTimeJst } from "@/utils/weekday";

const baseAnime: PublicAnimeCard = {
  id: "mock", slug: "mock", titleJa: "モック", posterAlt: "Mock poster", opCount: 1, edCount: 1,
  hasOfficialVideo: false
};

describe("Japanese editorial weekday utilities", () => {
  it("keeps late-night 25:30 as the editorial day's display time", () => {
    const anime = { ...baseAnime, editorialWeekday: 1, broadcastTimeJst: "25:30" };
    expect(formatBroadcastLabel(anime)).toBe("週一 25:30 (JST)");
    expect(parseBroadcastTimeJst("25:30")).toMatchObject({ normalizedHour: 1, dayOffset: 1 });
  });

  it("rejects invalid late-night values", () => {
    expect(parseBroadcastTimeJst("48:00")).toBeNull();
    expect(parseBroadcastTimeJst("25:99")).toBeNull();
  });

  it("groups weekdays without shifting 25:00+ broadcasts", () => {
    const monday = { ...baseAnime, id: "monday", editorialWeekday: 1, broadcastTimeJst: "25:30" };
    const tuesday = { ...baseAnime, id: "tuesday", editorialWeekday: 2, broadcastTimeJst: "01:30" };
    const groups = groupByEditorialWeekday([monday, tuesday]);
    expect(groups.get("1")?.map((item) => item.id)).toEqual(["monday"]);
    expect(groups.get("2")?.map((item) => item.id)).toEqual(["tuesday"]);
  });

  it("places missing weekdays in the irregular group", () => {
    const groups = groupByEditorialWeekday([{ ...baseAnime, id: "irregular" }]);
    expect(groups.get("irregular")?.[0]?.id).toBe("irregular");
  });
});
