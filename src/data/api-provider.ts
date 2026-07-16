import type { PublicDataProvider } from "@/data/provider";
import type { PublicAnimeDetail, PublicSeasonDetail, PublicSeasonSummary, Quarter } from "@/types/public-api";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isSeasonSummary(value: unknown): value is PublicSeasonSummary {
  if (!isRecord(value)) return false;
  return (
    typeof value.id === "string" &&
    typeof value.year === "number" &&
    ["winter", "spring", "summer", "fall"].includes(value.quarter as Quarter) &&
    typeof value.titleZhHant === "string" &&
    typeof value.titleJa === "string"
  );
}

async function readJson(response: Response): Promise<unknown> {
  if (!response.ok) throw new Error(`Anisonary API request failed (${response.status})`);
  return response.json();
}

export class ApiProvider implements PublicDataProvider {
  constructor(private readonly baseUrl: string) {}

  private async request(path: string): Promise<unknown> {
    const response = await fetch(`${this.baseUrl.replace(/\/$/, "")}${path}`, {
      headers: { Accept: "application/json" }
    });
    return readJson(response);
  }

  async getSeasons(): Promise<PublicSeasonSummary[]> {
    const data = await this.request("/seasons");
    if (!Array.isArray(data) || !data.every(isSeasonSummary)) {
      throw new Error("Anisonary API returned an invalid season list");
    }
    return data;
  }

  async getSeason(seasonId: string): Promise<PublicSeasonDetail | null> {
    const response = await fetch(`${this.baseUrl.replace(/\/$/, "")}/seasons/${encodeURIComponent(seasonId)}`, {
      headers: { Accept: "application/json" }
    });
    if (response.status === 404) return null;
    const data = await readJson(response);
    if (!isSeasonSummary(data) || !isRecord(data) || !Array.isArray(data.anime)) {
      throw new Error("Anisonary API returned an invalid season payload");
    }
    return data as unknown as PublicSeasonDetail;
  }

  async getAnime(slug: string): Promise<PublicAnimeDetail | null> {
    const response = await fetch(`${this.baseUrl.replace(/\/$/, "")}/anime/${encodeURIComponent(slug)}`, {
      headers: { Accept: "application/json" }
    });
    if (response.status === 404) return null;
    const data = await readJson(response);
    if (!isRecord(data) || typeof data.slug !== "string" || !Array.isArray(data.themes)) {
      throw new Error("Anisonary API returned an invalid anime payload");
    }
    return data as unknown as PublicAnimeDetail;
  }
}
