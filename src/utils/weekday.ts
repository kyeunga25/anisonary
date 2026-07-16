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

export const irregularWeekday = {
  value: 0,
  shortLabel: "不定期",
  sectionLabel: "不定期／網絡發布"
} as const;

export type WeekdayGroupKey = `${1 | 2 | 3 | 4 | 5 | 6 | 7}` | "irregular";

export interface BroadcastTimeParts {
  raw: string;
  hour: number;
  minute: number;
  normalizedHour: number;
  dayOffset: number;
}

export function parseBroadcastTimeJst(value?: string): BroadcastTimeParts | null {
  if (!value) return null;
  const match = /^(\d{1,2}):(\d{2})$/.exec(value);
  if (!match) return null;

  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour > 47 || minute > 59) return null;

  return {
    raw: value,
    hour,
    minute,
    normalizedHour: hour % 24,
    dayOffset: Math.floor(hour / 24)
  };
}

export function weekdayShortLabel(value?: number): string {
  return editorialWeekdays.find((day) => day.value === value)?.shortLabel ?? "不定期";
}

export function formatBroadcastLabel(anime: PublicAnimeCard): string {
  if (anime.broadcastLabel) return anime.broadcastLabel;
  const weekday = weekdayShortLabel(anime.editorialWeekday);
  return anime.broadcastTimeJst ? `${weekday} ${anime.broadcastTimeJst} (JST)` : weekday;
}

export function groupByEditorialWeekday(anime: PublicAnimeCard[]): Map<WeekdayGroupKey, PublicAnimeCard[]> {
  const groups = new Map<WeekdayGroupKey, PublicAnimeCard[]>([
    ["1", []],
    ["2", []],
    ["3", []],
    ["4", []],
    ["5", []],
    ["6", []],
    ["7", []],
    ["irregular", []]
  ]);

  for (const item of anime) {
    const key =
      item.editorialWeekday && item.editorialWeekday >= 1 && item.editorialWeekday <= 7
        ? (`${item.editorialWeekday}` as WeekdayGroupKey)
        : "irregular";
    groups.get(key)?.push(item);
  }

  return groups;
}
