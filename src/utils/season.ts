import type { PublicSeasonSummary, Quarter } from "@/types/public-api";

const SEASON_PATTERN = /^(?<year>\d{4})-(?<quarter>winter|spring|summer|fall)$/;

const quarterOrder: Record<Quarter, number> = {
  winter: 1,
  spring: 2,
  summer: 3,
  fall: 4
};

export function parseSeasonSlug(slug: string): { year: number; quarter: Quarter } | null {
  const match = SEASON_PATTERN.exec(slug);
  if (!match?.groups) return null;

  return {
    year: Number(match.groups.year),
    quarter: match.groups.quarter as Quarter
  };
}

export function isSeasonSlug(slug: string): boolean {
  return parseSeasonSlug(slug) !== null;
}

export function compareSeasonsNewestFirst(a: PublicSeasonSummary, b: PublicSeasonSummary): number {
  return b.year - a.year || quarterOrder[b.quarter] - quarterOrder[a.quarter];
}

export function seasonDisplayTitle(season: PublicSeasonSummary): string {
  return `${season.year} ${season.titleZhHant}`;
}
