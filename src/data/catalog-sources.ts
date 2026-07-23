import type { PublicCatalogReference, Quarter } from "@/types/public-api";

export interface CatalogSourceDefinition {
  id: PublicCatalogReference["id"];
  name: string;
  locale: PublicCatalogReference["locale"];
  languageLabel: string;
  role: string;
  documentationUrl: string;
  authMode: "public-read" | "oauth-token";
  fields: string[];
  limitations: string;
}

export const catalogSourceDefinitions: CatalogSourceDefinition[] = [
  {
    id: "annict",
    name: "Annict",
    locale: "ja",
    languageLabel: "日本語",
    role: "日本季度全集基準",
    documentationUrl: "https://docs.annict.com/docs/ja/api/v1/works",
    authMode: "oauth-token",
    fields: ["季度作品範圍", "原文標題", "媒體類型", "首播日", "動畫官方網站"],
    limitations: "社群維護資料可能較官方公布稍遲；播出時間、曲名與 Credits 仍須回到作品官網確認。"
  },
  {
    id: "bangumi",
    name: "Bangumi 番組計劃",
    locale: "zh",
    languageLabel: "中文",
    role: "中文條目與季度缺口交叉核對",
    documentationUrl: "https://bangumi.github.io/api/",
    authMode: "public-read",
    fields: ["原文標題", "中文名初步對照", "首播日期", "媒體類型", "條目圖像"],
    limitations: "name_cn 通常是簡體中文且屬社群資料，不可直接當作台港正式繁中譯名；月份結果亦要再核對是否日本新番。"
  }
];

const quarterStartMonth: Record<Quarter, 1 | 4 | 7 | 10> = {
  winter: 1,
  spring: 4,
  summer: 7,
  fall: 10
};

export function buildAnnictSeasonUrl(year: number, quarter: Quarter): string {
  return `https://annict.com/works/${year}-${quarter}?display=list_detailed`;
}

export function buildAnnictApiQueryUrl(year: number, quarter: Quarter): string {
  const url = new URL("https://api.annict.com/v1/works");
  url.searchParams.set("filter_season", `${year}-${quarter}`);
  url.searchParams.set("per_page", "50");
  url.searchParams.set("sort_season", "asc");
  return url.toString();
}

export function buildBangumiCatalogUrl(year: number): string {
  return `https://bgm.tv/anime/browser/%E6%97%A5%E6%9C%AC/airtime/${year}`;
}

export function buildBangumiApiQueryUrl(year: number, quarter: Quarter): string {
  const url = new URL("https://api.bgm.tv/v0/subjects");
  url.searchParams.set("type", "2");
  url.searchParams.set("year", String(year));
  url.searchParams.set("month", String(quarterStartMonth[quarter]));
  url.searchParams.set("sort", "date");
  url.searchParams.set("limit", "100");
  url.searchParams.set("offset", "0");
  return url.toString();
}

export function buildSeasonCatalogReferences(year: number, quarter: Quarter): PublicCatalogReference[] {
  return catalogSourceDefinitions.map((source): PublicCatalogReference => {
    if (source.id === "annict") {
      return {
        id: source.id,
        name: source.name,
        locale: source.locale,
        languageLabel: source.languageLabel,
        role: source.role,
        catalogUrl: buildAnnictSeasonUrl(year, quarter),
        documentationUrl: source.documentationUrl,
        apiQueryUrl: buildAnnictApiQueryUrl(year, quarter),
        accessNote: "季度頁可直接瀏覽；API 使用 OAuth 2.0 token，token 不得寫入 repository。",
        limitations: source.limitations
      };
    }

    return {
      id: source.id,
      name: source.name,
      locale: source.locale,
      languageLabel: source.languageLabel,
      role: source.role,
      catalogUrl: buildBangumiCatalogUrl(year),
      documentationUrl: source.documentationUrl,
      apiQueryUrl: buildBangumiApiQueryUrl(year, quarter),
      accessNote: "browse endpoint 可公開讀取；程式化存取要使用具名 User-Agent，並按 total／offset 完成分頁。",
      limitations: source.limitations
    };
  });
}
