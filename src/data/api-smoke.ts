import type { PublicDataProvider } from "@/data/provider";
import type {
  PublicAnimeCard,
  PublicSeasonDetail,
  PublicSeasonSummary
} from "@/types/public-api";

const MAX_SMOKE_ANIME = 2_000;
const SMOKE_CONCURRENCY = 8;

export interface ApiSmokeResult {
  seasonCount: number;
  animeCount: number;
}

export interface ApiSmokeOptions {
  missingSeasonId?: string;
  missingAnimeSlug?: string;
}

function fail(message: string): never {
  throw new Error(`Anisonary API smoke failed: ${message}`);
}

function seasonMatches(summary: PublicSeasonSummary, detail: PublicSeasonDetail): boolean {
  return (
    summary.id === detail.id &&
    summary.year === detail.year &&
    summary.quarter === detail.quarter &&
    summary.titleZhHant === detail.titleZhHant &&
    summary.titleJa === detail.titleJa
  );
}

function animeCardMatches(card: PublicAnimeCard, detail: PublicAnimeCard): boolean {
  return (
    card.id === detail.id &&
    card.slug === detail.slug &&
    card.titleJa === detail.titleJa &&
    card.titleZhHant === detail.titleZhHant &&
    card.titleRomaji === detail.titleRomaji &&
    card.posterUrl === detail.posterUrl &&
    card.posterAlt === detail.posterAlt &&
    card.bannerUrl === detail.bannerUrl &&
    card.bannerAlt === detail.bannerAlt &&
    card.imageSourceUrl === detail.imageSourceUrl &&
    card.imageSourceLabel === detail.imageSourceLabel &&
    card.editorialWeekday === detail.editorialWeekday &&
    card.broadcastTimeJst === detail.broadcastTimeJst &&
    card.broadcastLabel === detail.broadcastLabel &&
    card.opCount === detail.opCount &&
    card.edCount === detail.edCount &&
    card.hasOfficialVideo === detail.hasOfficialVideo
  );
}

async function mapWithConcurrency<T, Result>(
  values: readonly T[],
  mapper: (value: T) => Promise<Result>
): Promise<Result[]> {
  const results = new Array<Result>(values.length);
  let nextIndex = 0;
  const workers = Array.from({ length: Math.min(SMOKE_CONCURRENCY, values.length) }, async () => {
    while (nextIndex < values.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(values[currentIndex]!);
    }
  });
  await Promise.all(workers);
  return results;
}

export async function smokePublicApi(
  provider: PublicDataProvider,
  options: ApiSmokeOptions = {}
): Promise<ApiSmokeResult> {
  const missingSeasonId = options.missingSeasonId ?? "2099-winter";
  const missingAnimeSlug = options.missingAnimeSlug ?? "anisonary-contract-smoke-not-found";
  const seasons = await provider.getSeasons();

  const seasonDetails = await mapWithConcurrency(seasons, async (summary) => {
    const detail = await provider.getSeason(summary.id);
    if (!detail) fail(`missing season detail for ${summary.id}`);
    if (!seasonMatches(summary, detail)) fail(`season summary drift for ${summary.id}`);
    if (detail.isMockData === true) fail(`production season ${summary.id} is marked as Mock Data`);
    return detail;
  });

  const cards = seasonDetails.flatMap((season) => season.anime);
  if (cards.length > MAX_SMOKE_ANIME) fail("catalogue exceeds the 2,000-entry smoke limit");

  const cardsBySlug = new Map<string, PublicAnimeCard>();
  for (const card of cards) {
    const existing = cardsBySlug.get(card.slug);
    if (existing && !animeCardMatches(existing, card)) {
      fail(`season card drift for ${card.slug}`);
    }
    cardsBySlug.set(card.slug, card);
  }

  await mapWithConcurrency([...cardsBySlug.values()], async (card) => {
    const detail = await provider.getAnime(card.slug);
    if (!detail) fail(`missing anime detail for ${card.slug}`);
    if (!animeCardMatches(card, detail)) fail(`anime card/detail drift for ${card.slug}`);
  });

  const [unknownSeason, unknownAnime] = await Promise.all([
    provider.getSeason(missingSeasonId),
    provider.getAnime(missingAnimeSlug)
  ]);
  if (unknownSeason !== null) fail(`unknown season ${missingSeasonId} did not return 404`);
  if (unknownAnime !== null) fail(`unknown anime ${missingAnimeSlug} did not return 404`);

  return { seasonCount: seasons.length, animeCount: cardsBySlug.size };
}
