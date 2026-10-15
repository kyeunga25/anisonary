import type { PublicAnimeDetail, PublicCreatorCredit, PublicTheme } from "@/types/public-api";

const roleLabels: Record<PublicCreatorCredit["role"], string> = {
  vocals: "演唱",
  lyrics: "作詞",
  translation: "譯詞",
  composition: "作曲",
  songwriting: "詞曲",
  arrangement: "編曲",
  group_member: "團隊成員",
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

export function themeTypeLabel(theme: Pick<PublicTheme, "type" | "sequence">): string {
  if (theme.type === "IN") return "劇中歌";
  if (theme.type === "TS") return "主題歌";
  return `${theme.type}${theme.sequence}`;
}

export function animeStatusLabel(status: PublicAnimeDetail["status"]): string {
  return statusLabels[status];
}
