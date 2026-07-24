import type { PublicDataProvider } from "@/data/provider";
import type {
  PublicAnimeDetail,
  PublicSeasonDetail,
  PublicSeasonSummary
} from "@/types/public-api";

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

export type CatalogSearchData =
  | {
      status: "ready";
      entries: Array<{
        anime: PublicAnimeDetail;
        season: PublicSeasonSummary;
        isMockData: boolean;
      }>;
    }
  | {
      status: "error";
      entries: [];
    };

const CATALOG_FETCH_CONCURRENCY = 8;
const MAX_CATALOG_SEARCH_ENTRIES = 2_000;

async function mapWithConcurrency<T, Result>(
  values: readonly T[],
  concurrency: number,
  mapper: (value: T, index: number) => Promise<Result>
): Promise<Result[]> {
  const results = new Array<Result>(values.length);
  let nextIndex = 0;

  const workers = Array.from(
    { length: Math.min(concurrency, values.length) },
    async () => {
      while (nextIndex < values.length) {
        const currentIndex = nextIndex;
        nextIndex += 1;
        results[currentIndex] = await mapper(values[currentIndex]!, currentIndex);
      }
    }
  );

  await Promise.all(workers);
  return results;
}

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

export async function loadCatalogSearchData(
  provider: PublicDataProvider,
  failOnError = false
): Promise<CatalogSearchData> {
  try {
    const seasons = await provider.getSeasons();
    const seasonDetails = await mapWithConcurrency(
      seasons,
      CATALOG_FETCH_CONCURRENCY,
      async (season) => ({
        season,
        detail: await provider.getSeason(season.id)
      })
    );

    const missingSeason = seasonDetails.find(({ detail }) => detail === null);
    if (missingSeason) {
      throw new Error(`Season detail is missing for ${missingSeason.season.id}`);
    }

    const cards = seasonDetails.flatMap(({ season, detail }) =>
      (detail?.anime ?? []).map((card) => ({
        card,
        season,
        isMockData: Boolean(detail?.isMockData)
      }))
    );
    if (cards.length > MAX_CATALOG_SEARCH_ENTRIES) {
      throw new Error("Catalogue search entry limit exceeded");
    }

    const entries = await mapWithConcurrency(
      cards,
      CATALOG_FETCH_CONCURRENCY,
      async ({ card, season, isMockData }) => {
        const anime = await provider.getAnime(card.slug);
        if (!anime) throw new Error(`Anime detail is missing for ${card.slug}`);
        return { anime, season, isMockData };
      }
    );

    return { status: "ready", entries };
  } catch (error) {
    if (failOnError) throw error;
    return { status: "error", entries: [] };
  }
}
