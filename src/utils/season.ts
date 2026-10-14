import type { PublicSeasonSummary, Quarter } from "@/types/public-api";

const quarterOrder: Record<Quarter, number> = {
  winter: 1,
  spring: 2,
  summer: 3,
  fall: 4
};

export function compareSeasonsNewestFirst(a: PublicSeasonSummary, b: PublicSeasonSummary): number {
  return b.year - a.year || quarterOrder[b.quarter] - quarterOrder[a.quarter];
}
