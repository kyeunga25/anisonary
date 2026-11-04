import { expect, it } from "vitest";
import type { PublicAnimeCard } from "@/types/public-api";
import { groupAnimeForBrowse, toAnimeBrowseCard } from "@/utils/anime-browse";

const base: PublicAnimeCard = {
  id: "browse-fixture", slug: "browse-fixture", titleJa: "作品", posterAlt: "作品",
  editorialWeekday: 5, broadcastTimeJst: "01:58", opCount: 1, edCount: 1,
  hasOfficialVideo: false
};

it("keeps mixed TV and streaming notes in the first stated broadcast group", () => {
  for (const [broadcastLabel, category, group] of [
  ["日本原TV：週五01:58；串流另記", "television", "weekday-5"],
  ["日本TV：週日22:30；23:00是配信開始，不當TV結束", "television", "weekday-5"],
  ["日本電視首播；網路配信另列", "television", "weekday-5"],
  ["テレビ放送後に配信", "television", "weekday-5"],
  ["WEB原播；其後TV播出", "streaming", "streaming"],
  ["ONA原播；日本テレビ放送另列", "streaming", "streaming"],
  ["網絡首播；TV重播另記", "streaming", "streaming"],
  ["先行配信；其後日本TV首播", "streaming", "streaming"],
  ["日本原TV", "television", "weekday-5"],
  ["配信限定", "streaming", "streaming"],
  ["播出時刻待補", "scheduled", "weekday-5"],
  ["WEBTOON原作", "scheduled", "weekday-5"]
] as const) {
  const anime = { ...base, broadcastLabel };
  const original = structuredClone(anime);
  expect(toAnimeBrowseCard(anime).category).toBe(category);
  expect(groupAnimeForBrowse([anime]).map(({ id }) => id)).toEqual([group]);
  expect(anime).toEqual(original);
  }
});

it("keeps TV weekday grouping and the existing unknown-time fallback", () => {
  const sunday = { ...base, editorialWeekday: 7, broadcastLabel: "日本TV；配信另記" };
  expect(groupAnimeForBrowse([sunday]).map(({ id }) => id)).toEqual(["weekday-7"]);
  const unknown = { ...base, editorialWeekday: undefined, broadcastTimeJst: undefined };
  expect(toAnimeBrowseCard(unknown).category).toBe("unclassified");
  expect(groupAnimeForBrowse([unknown]).map(({ id }) => id)).toEqual(["unscheduled"]);
});
