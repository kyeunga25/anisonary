import type { PublicAnimeCard } from "@/types/public-api";
import { normalizeCatalogSearchText } from "@/utils/catalog-search";
import { editorialWeekdays, formatBroadcastLabel } from "@/utils/weekday";

export const broadcastCategories = [
  { value: "scheduled", label: "定時播出" },
  { value: "streaming", label: "網絡／串流首播" },
  { value: "television", label: "電視播出" },
  { value: "unclassified", label: "播出類型未標示" }
] as const;

export type BroadcastCategory = typeof broadcastCategories[number]["value"];
export interface AnimeBrowseCard {
  anime: PublicAnimeCard;
  category: BroadcastCategory;
  categoryLabel: string;
  weekday?: number;
  broadcastLabel: string;
  searchText: string;
}

export interface AnimeBrowseGroup {
  id: string;
  label: string;
  cards: AnimeBrowseCard[];
}

// This projection reads only the public contract. It never imports authoring
// seeds, writes records, or infers a platform/genre from a title or source URL.
export function toAnimeBrowseCard(anime: PublicAnimeCard): AnimeBrowseCard {
  const label = anime.broadcastLabel ?? "";
  const category: BroadcastCategory = /網絡|網路|串流|配信|\b(?:WEB|ONA)\b/i.test(label)
    ? "streaming"
    : /電視|テレビ|\bTV\b/i.test(label)
      ? "television"
      : anime.broadcastTimeJst ? "scheduled" : "unclassified";
  const weekday = editorialWeekdays.some((day) => day.value === anime.editorialWeekday)
    ? anime.editorialWeekday : undefined;
  const broadcastLabel = label || (weekday ? formatBroadcastLabel(anime) : "播出時間未整理");
  return {
    anime, category, categoryLabel: broadcastCategories.find((item) => item.value === category)!.label,
    ...(weekday ? { weekday } : {}), broadcastLabel,
    searchText: normalizeCatalogSearchText([
      anime.titleJa, anime.titleZhHant, anime.titleRomaji, broadcastLabel
    ].filter(Boolean).join(" "))
  };
}

export function groupAnimeForBrowse(anime: readonly PublicAnimeCard[]): AnimeBrowseGroup[] {
  const groups: AnimeBrowseGroup[] = [
    ...editorialWeekdays.map((day) => ({ id: `weekday-${day.value}`, label: day.sectionLabel, cards: [] })),
    { id: "streaming", label: "網絡／串流首播", cards: [] },
    { id: "unscheduled", label: "播出日未整理", cards: [] }
  ];
  for (const record of anime) {
    const card = toAnimeBrowseCard(record);
    const id = card.category === "streaming" ? "streaming" : card.weekday ? `weekday-${card.weekday}` : "unscheduled";
    groups.find((group) => group.id === id)!.cards.push(card);
  }
  for (const group of groups) {
    group.cards.sort((left, right) =>
      // Keep editorial late-night times (e.g. 25:30) on their original day.
      (left.anime.broadcastTimeJst ?? "99:99").localeCompare(right.anime.broadcastTimeJst ?? "99:99")
      || left.anime.titleJa.localeCompare(right.anime.titleJa, "ja")
      || left.anime.slug.localeCompare(right.anime.slug)
    );
  }
  return groups.filter((group) => group.cards.length > 0);
}
