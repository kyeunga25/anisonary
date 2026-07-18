import type { PublicLinkType } from "@/types/public-api";

const linkTypeLabels: Record<PublicLinkType, string> = {
  direct_track: "直接歌曲",
  direct_album: "直接專輯",
  search_result: "搜尋結果",
  official_landing_page: "官方頁面",
  physical_purchase: "實體購買",
  digital_purchase: "數位購買"
};

export function externalLinkTypeLabel(type: PublicLinkType): string {
  return linkTypeLabels[type];
}
