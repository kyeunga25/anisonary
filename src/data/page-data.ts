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
  previousSeasonId = "2026-spring",
  failOnError = false
): Promise<HomePageData> {
  try {
    const [seasons, current, previous] = await Promise.all([
      provider.getSeasons(),
      provider.getSeason(currentSeasonId),
      provider.getSeason(previousSeasonId)
    ]);

    return { status: "ready", seasons, current, previous };
  } catch (error) {
    if (failOnError) throw error;
    return { status: "error", seasons: [], current: null, previous: null };
  }
}
