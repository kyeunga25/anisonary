import type { PublicAnimeCard } from "@/types/public-api";

export const editorialWeekdays = [
  { value: 1, shortLabel: "週一", sectionLabel: "星期一" },
  { value: 2, shortLabel: "週二", sectionLabel: "星期二" },
  { value: 3, shortLabel: "週三", sectionLabel: "星期三" },
  { value: 4, shortLabel: "週四", sectionLabel: "星期四" },
  { value: 5, shortLabel: "週五", sectionLabel: "星期五" },
  { value: 6, shortLabel: "週六", sectionLabel: "星期六" },
  { value: 7, shortLabel: "週日", sectionLabel: "星期日" }
] as const;

export function weekdayShortLabel(value?: number): string {
  return editorialWeekdays.find((day) => day.value === value)?.shortLabel ?? "不定期";
}

export function formatBroadcastLabel(anime: PublicAnimeCard): string {
  if (anime.broadcastLabel) return anime.broadcastLabel;
  const weekday = weekdayShortLabel(anime.editorialWeekday);
  return anime.broadcastTimeJst ? `${weekday} ${anime.broadcastTimeJst} (JST)` : weekday;
}
