import type { PublicAnimeDetail, PublicCreatorCredit } from "@/types/public-api";

const roleLabels: Record<PublicCreatorCredit["role"], string> = {
  vocals: "演唱",
  lyrics: "作詞",
  composition: "作曲",
  arrangement: "編曲",
  other: "其他"
};

const statusLabels: Record<PublicAnimeDetail["status"], string> = {
  upcoming: "待播出",
  airing: "放送中",
  finished: "已完結",
  unknown: "狀態待確認"
};

export function creditRoleLabel(role: PublicCreatorCredit["role"]): string {
  return roleLabels[role];
}

export function animeStatusLabel(status: PublicAnimeDetail["status"]): string {
  return statusLabels[status];
}
