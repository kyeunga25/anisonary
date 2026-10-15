import { searchCatalog, type CatalogSearchIndex, type CatalogSearchOptions } from "@/utils/catalog-search-index";
import { compareSeasonsNewestFirst } from "@/utils/season";

export type PlaylistSort = "newest" | "oldest" | "song" | "anime" | "artist";
export type PlaylistOptions = CatalogSearchOptions & {
  sort: PlaylistSort;
  videoOnly: boolean;
  weekday: string;
  includeEmpty: boolean;
};
export type PlaylistRow = {
  anime: CatalogSearchIndex[number];
  theme: CatalogSearchIndex[number]["themes"][number] | undefined;
  season: CatalogSearchIndex[number]["season"];
};
export const PLAYLIST_PAGE_SIZE = 24;
const collator = new Intl.Collator("zh-Hant", { numeric: true, sensitivity: "base" });

export function getPlaylistRows(index: CatalogSearchIndex, options: PlaylistOptions): PlaylistRow[] {
  const rows = searchCatalog(index, options).flatMap<PlaylistRow>(({ anime, themes, season }) => {
    if (options.weekday && String(anime.editorialWeekday ?? 0) !== options.weekday) return [];
    // A work can belong to several quarters. Show it once, using the newest
    // matching membership rather than the provider's incidental entry order.
    const memberships = anime.seasons.filter((entry) =>
      (!options.year || String(entry.year) === options.year) && (!options.quarter || entry.quarter === options.quarter)
    ).sort(compareSeasonsNewestFirst);
    const displaySeason = memberships[0] ?? season;
    const selected = themes.filter((theme) => !options.videoOnly || theme.hasOfficialVideo);
    if (!selected.length) {
      return options.includeEmpty && !themes.length && !options.videoOnly
        ? [{ anime, theme: undefined, season: displaySeason }]
        : [];
    }
    return selected.map((theme) => ({ anime, theme, season: displaySeason }));
  });
  return rows.sort((left, right) => {
    const bySeason = compareSeasonsNewestFirst(left.season, right.season);
    const byAnime = collator.compare(left.anime.titleZhHant ?? left.anime.titleJa, right.anime.titleZhHant ?? right.anime.titleJa);
    const typeOrder = { OP: 0, ED: 1, IN: 2, TS: 3 };
    const byTheme = (left.theme ? typeOrder[left.theme.type] : 4) - (right.theme ? typeOrder[right.theme.type] : 4)
      || (left.theme?.sequence ?? 0) - (right.theme?.sequence ?? 0);
    if (options.sort === "song") return collator.compare(left.theme?.titleJa ?? "", right.theme?.titleJa ?? "") || byAnime || byTheme;
    if (options.sort === "artist") return collator.compare(left.theme?.artistDisplayName ?? "", right.theme?.artistDisplayName ?? "") || byAnime || byTheme;
    if (options.sort === "anime") return byAnime || bySeason || byTheme;
    return (options.sort === "oldest" ? -bySeason : bySeason) || byAnime || byTheme;
  });
}

export function playlistRowHref(row: PlaylistRow, songAnchor = false): string {
  const href = `/anime/${encodeURIComponent(row.anime.slug)}/`;
  return songAnchor && row.theme ? `${href}#theme-${encodeURIComponent(row.theme.id)}` : href;
}

export function playlistSeasonLabel(row: PlaylistRow): string {
  return `${row.season.year} ${row.season.titleZhHant.replace("動畫", "")}`;
}
