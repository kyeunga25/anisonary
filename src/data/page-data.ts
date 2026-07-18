import type { PublicDataProvider } from "@/data/provider";
import type { PublicSeasonDetail, PublicSeasonSummary } from "@/types/public-api";

export type HomePageData =
  | {
      status: "ready";
      seasons: PublicSeasonSummary[];
      current: PublicSeasonDetail | null;
      previous: PublicSeasonDetail | null;
    }
  | {
      status: "error";
      seasons: [];
      current: null;
      previous: null;
    };

export async function loadHomePageData(
  provider: PublicDataProvider,
  currentSeasonId = "2026-summer",
  previousSeasonId = "2026-spring"
): Promise<HomePageData> {
  try {
    const [seasons, current, previous] = await Promise.all([
      provider.getSeasons(),
      provider.getSeason(currentSeasonId),
      provider.getSeason(previousSeasonId)
    ]);

    return { status: "ready", seasons, current, previous };
  } catch {
    return { status: "error", seasons: [], current: null, previous: null };
  }
}
