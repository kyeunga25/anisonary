import type { PublicSeasonSummary, Quarter } from "@/types/public-api";

const quarterOrder: Record<Quarter, number> = {
  winter: 1,
  spring: 2,
  summer: 3,
  fall: 4
};

export function seasonIdLabel(id: string): string {
  const match = /^(\d{4})-(winter|spring|summer|fall)$/.exec(id);
  const labels: Record<Quarter, string> = { winter: "冬季", spring: "春季", summer: "夏季", fall: "秋季" };
  return match ? `${match[1]} ${labels[match[2] as Quarter]}` : id;
}

export function compareSeasonsNewestFirst(a: PublicSeasonSummary, b: PublicSeasonSummary): number {
  return b.year - a.year || quarterOrder[b.quarter] - quarterOrder[a.quarter];
}
