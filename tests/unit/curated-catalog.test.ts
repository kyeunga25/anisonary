import { expect, it } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { smokePublicApi } from "@/data/api-smoke";
import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";
import { curatedAnimeSeeds } from "@/data/curated-seeds";
import { loadCatalogSearchData } from "@/data/page-data";
import { publicJsonResponse } from "@/data/public-api-assets";
import { buildCatalogSearchIndex, serializeCatalogSearchIndex } from "@/utils/catalog-search-index";
import { getPlaylistRows, playlistRowHref } from "@/utils/song-playlist";

it("keeps the whole reviewed catalogue consistent across seasons, details, sources and search", async () => {
  const seasons = new Map(curatedSeasonDetails.map((season) => [season.id, season]));
  const anime = new Map(curatedAnimeDetails.map((detail) => [detail.slug, detail]));
  expect(curatedSeasons.length).toBeGreaterThan(0);
  expect(anime.size).toBe(curatedAnimeSeeds.length);
  expect(new Set(curatedAnimeDetails.map((detail) => detail.id)).size).toBe(anime.size);

  // Exercise the public JSON contract, rather than copying catalogue content into snapshots.
  const provider = new ApiProvider("https://catalog.example/api/v1", {
    fetch: async (input) => {
      const path = new URL(input instanceof Request ? input.url : String(input)).pathname;
      const payload = path === "/api/v1/seasons.json" ? curatedSeasons
        : path.startsWith("/api/v1/seasons/") ? seasons.get(path.split("/").at(-1)!.replace(/\.json$/, ""))
        : anime.get(path.split("/").at(-1)!.replace(/\.json$/, ""));
      return payload ? publicJsonResponse(payload) : new Response(null, { status: 404 });
    }
  });
  await expect(smokePublicApi(provider)).resolves.toEqual({
    seasonCount: curatedSeasons.length,
    animeCount: anime.size
  });

  const animeById = new Map(curatedAnimeDetails.map((detail) => [detail.id, detail]));
  for (const seed of curatedAnimeSeeds) {
    expect(animeById.has(seed.id), `Missing reviewed work: ${seed.id}`).toBe(true);
  }
  for (const detail of curatedAnimeDetails) {
    expect(JSON.stringify(detail), detail.slug).not.toMatch(/example\.(?:com|test)|mock-posters/);
  }

  const search = await loadCatalogSearchData(provider, true);
  expect(search.status).toBe("ready");
  expect(search.entries).toHaveLength(anime.size);
  expect(new Set(search.entries.map((entry) => entry.anime.slug)).size).toBe(anime.size);
  for (const entry of search.entries) {
    expect(entry.anime, entry.anime.slug).toEqual(anime.get(entry.anime.slug));
    expect(entry.seasons.map((season) => season.id).sort(), entry.anime.slug).toEqual(
      curatedSeasonDetails.filter((season) => season.anime.some((card) => card.slug === entry.anime.slug))
        .map((season) => season.id).sort()
    );
  }
  const index = buildCatalogSearchIndex(search.entries);
  const rows = getPlaylistRows(index, {
    query: "", scope: "all", year: "", quarter: "", type: "all", sort: "newest", videoOnly: false, weekday: "", includeEmpty: false
  });
  const themeCount = curatedAnimeDetails.reduce((count, detail) => count + detail.themes.length, 0);
  expect(rows).toHaveLength(themeCount);
  expect(new Set(rows.map((row) => `${row.anime.slug}:${row.theme?.id}`)).size).toBe(themeCount);
  for (const row of rows) {
    expect(row.anime.seasons.some((season) => season.id === row.season.id)).toBe(true);
    expect(playlistRowHref(row)).toBe(`/anime/${row.anime.slug}/`);
  }
  // Official external videos remain discoverable before embedding metadata is
  // available. A bare YouTube URL cannot establish official provenance.
  const videoOptions = {
    query: "", scope: "all" as const, year: "", quarter: "", type: "all" as const, sort: "newest" as const,
    videoOnly: true, weekday: "", includeEmpty: false
  };
  const externalOnly = curatedAnimeDetails.flatMap((detail) => detail.themes).find((theme) => (
    !theme.videos.length && theme.links.some((link) => link.platform === "YouTube"
      && theme.evidence?.some((evidence) => evidence.target === "link" && evidence.targetId === link.url
        && evidence.sourceUrls.some((url) => theme.sources.some((source) => source.url === url && source.role === "first_party"))))
  ))!;
  expect(externalOnly).toBeDefined();
  expect(getPlaylistRows(index, videoOptions).some((row) => row.theme?.id === externalOnly.id)).toBe(true);
  const unproven = structuredClone(search.entries.slice(0, 1));
  unproven[0]!.anime.themes.forEach((theme) => {
    theme.videos = [];
    theme.evidence = [];
    theme.links = [{ platform: "YouTube", label: "Unproven video fixture", url: "https://www.youtube.com/watch?v=abcdefghijk", linkType: "direct_track", region: "GLOBAL" }];
  });
  expect(getPlaylistRows(buildCatalogSearchIndex(unproven), videoOptions)).toEqual([]);
  const serialized = serializeCatalogSearchIndex(index);
  expect(JSON.parse(serialized)).toHaveLength(anime.size);
  expect(serialized).not.toMatch(/posterUrl|bannerUrl|youtubeVideoId|catalogReferences/);
  // Enrichment must be searchable without adding a row for each recording or edition.
  const enriched = curatedAnimeDetails.flatMap((detail) => detail.themes).find((theme) => theme.releases?.some((release) => release.title !== theme.titleJa))!;
  const releaseTitle = enriched.releases!.find((release) => release.title !== enriched.titleJa)!.title;
  const releaseMatches = getPlaylistRows(index, {
    query: releaseTitle, scope: "songs", year: "", quarter: "", type: "all", sort: "newest", videoOnly: false, weekday: "", includeEmpty: false
  });
  expect(releaseMatches.some((row) => row.theme?.id === enriched.id)).toBe(true);
  expect(releaseMatches.filter((row) => row.theme?.id === enriched.id)).toHaveLength(1);
  for (const seed of curatedAnimeSeeds.filter((seed) => seed.metadataVerifiedAt && seed.themes.some((theme) => theme.evidence))) {
    const detail = animeById.get(seed.id)!;
    expect(detail.verifiedAt).toBe(seed.metadataVerifiedAt);
    expect(detail.sources.every((source) => source.verifiedAt === seed.metadataVerifiedAt)).toBe(true);
  }
  // Newly announced uses can opt out of inheriting evidence reviewed for older songs.
  for (const seed of curatedAnimeSeeds) {
    for (const authored of seed.themes.filter((theme) => theme.sourceMode === "explicit")) {
      const published = animeById.get(seed.id)!.themes.find((theme) => theme.type === authored.type && theme.sequence === authored.sequence)!;
      expect(published.sources.map((source) => source.url).sort()).toEqual(
        [...new Set(authored.sources!.map((source) => source.url))].sort()
      );
      expect(published.sources.some((source) => source.role === "first_party")).toBe(true);
      expect(published.sources.some((source) => source.role === "cross_check")).toBe(true);
    }
  }
});
