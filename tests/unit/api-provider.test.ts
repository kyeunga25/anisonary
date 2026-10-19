import { expect, it, vi } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { smokePublicApi } from "@/data/api-smoke";
import { CuratedProvider } from "@/data/curated-provider";
import { curatedAnimeDetails, curatedSeasonDetails } from "@/data/curated-data";
import { publicJsonResponse } from "@/data/public-api-assets";
import { deriveThemeDataStatus } from "@/utils/theme-data-status";

it("rejects unsafe or inconsistent external API data and bounds failed requests", async () => {
  const season = curatedSeasonDetails[0]!;
  const anime = curatedAnimeDetails.find((detail) => detail.themes.length > 0)!;
  const fetchMock = vi.fn<typeof fetch>();
  const provider = new ApiProvider("https://catalog.example/api/v1", { fetch: fetchMock });

  for (const baseUrl of ["http://catalog.example/api/v1", "https://user:password@catalog.example/api/v1", "https://catalog.example/api/v1?token=fixture"]) {
    expect(() => new ApiProvider(baseUrl)).toThrow();
  }
  await expect(provider.getSeason("../unpublished")).rejects.toThrow();
  await expect(provider.getAnime("invalid/slug")).rejects.toThrow();
  expect(fetchMock).not.toHaveBeenCalled();

  const unsafeSeason = structuredClone(season);
  unsafeSeason.anime[0]!.posterUrl = "https://tracker.example.test/poster.jpg";
  const unsafeAnime = structuredClone(anime);
  unsafeAnime.themes[0]!.sources[0]!.url = "javascript:alert(1)";
  const inconsistentAnime = { ...anime, opCount: anime.opCount + 1 };
  for (const payload of [unsafeSeason, { ...season, id: "2099-winter" }]) {
    fetchMock.mockImplementation(async () => publicJsonResponse(payload));
    await expect(provider.getSeason(season.id)).rejects.toThrow("invalid season payload");
  }
  for (const payload of [unsafeAnime, inconsistentAnime, { ...anime, themes: [] }]) {
    fetchMock.mockImplementation(async () => publicJsonResponse(payload));
    await expect(provider.getAnime(anime.slug)).rejects.toThrow("invalid anime payload");
  }

  fetchMock.mockImplementation(async () => publicJsonResponse({ ...anime, unpublishedField: "discard" }));
  await expect(provider.getAnime(anime.slug)).resolves.toEqual(anime);
  expect(fetchMock).toHaveBeenLastCalledWith(expect.any(String), expect.objectContaining({
    redirect: "error", signal: expect.any(AbortSignal)
  }));

  fetchMock.mockImplementation(async () => new Response(null, { status: 404 }));
  await expect(provider.getSeason("2099-winter")).resolves.toBeNull();
  await expect(provider.getAnime("unknown-anime")).resolves.toBeNull();
  for (const response of [
    new Response(null, { status: 503 }),
    new Response("<html>unavailable</html>", { headers: { "Content-Type": "text/html" } }),
    new Response("not JSON", { headers: { "Content-Type": "application/json" } })
  ]) {
    fetchMock.mockResolvedValue(response);
    await expect(provider.getSeasons()).rejects.toThrow();
  }

  fetchMock.mockImplementation(async () => publicJsonResponse(season));
  await expect(new ApiProvider("https://catalog.example/api/v1", {
    fetch: fetchMock, maxResponseBytes: 32
  }).getSeason(season.id)).rejects.toThrow("response is too large");
  const stalledFetch: typeof fetch = (_input, init) => new Promise((_resolve, reject) => {
    init?.signal?.addEventListener("abort", () => reject(new DOMException("Aborted", "AbortError")));
  });
  await expect(new ApiProvider("https://catalog.example/api/v1", {
    fetch: stalledFetch, timeoutMs: 10
  }).getSeasons()).rejects.toThrow("timed out");

  const curated = new CuratedProvider();
  await expect(smokePublicApi({
    getSeasons: () => curated.getSeasons(),
    getSeason: (id) => curated.getSeason(id),
    getAnime: async (slug) => {
      const detail = await curated.getAnime(slug);
      return detail ? { ...detail, titleJa: `${detail.titleJa} drift` } : null;
    }
  })).rejects.toThrow("card/detail drift");
  await expect(smokePublicApi({
    getSeasons: () => curated.getSeasons(),
    getSeason: (id) => curated.getSeason(id),
    getAnime: async (slug) => {
      const detail = structuredClone(await curated.getAnime(slug));
      if (detail?.themes[0]) detail.themes[0].seasonIds = ["2099-winter"];
      return detail;
    }
  })).rejects.toThrow("theme season membership drift");
});

it("keeps pending verification distinct from documented songs and confirmed absence", async () => {
  const anime = structuredClone(curatedAnimeDetails.find((detail) => detail.themes.length > 0)!);
  const pending = { ...anime, themes: [], opCount: 0, edCount: 0, hasOfficialVideo: false, themeAvailability: "pending_verification" };
  const fetchMock = vi.fn<typeof fetch>();
  const provider = new ApiProvider("https://catalog.example/api/v1", { fetch: fetchMock });
  fetchMock.mockImplementation(async () => publicJsonResponse(pending));
  await expect(provider.getAnime(anime.slug)).resolves.toEqual(pending);
  for (const payload of [
    { ...pending, themeAvailability: "documented" },
    { ...anime, themeAvailability: "pending_verification" }
  ]) {
    fetchMock.mockImplementation(async () => publicJsonResponse(payload));
    await expect(provider.getAnime(anime.slug)).rejects.toThrow("invalid anime payload");
  }
});

it("preserves optional song relations and independent evidence dates while rejecting broken relationships", async () => {
  const anime = structuredClone(curatedAnimeDetails.find((detail) => detail.themes.length > 1 && detail.themes.some((theme) => (
    (theme.recordings?.length ?? 0) > 1 && (theme.releases?.length ?? 0) > 0
  )))!);
  expect(anime).toBeDefined();
  const index = anime.themes.findIndex((theme) => (
    (theme.recordings?.length ?? 0) > 1 && (theme.releases?.length ?? 0) > 0
  ));
  const fixtureTheme = anime.themes[index]!;
  fixtureTheme.idAliases = ["retired-theme-use"];
  fixtureTheme.usageLabel = "ABEMA限定先行配信版";
  fixtureTheme.seasonIds = curatedSeasonDetails.filter((season) =>
    season.anime.some((card) => card.slug === anime.slug)
  ).map((season) => season.id);
  const useSource = fixtureTheme.sources.find((source) => source.role === "first_party")!;
  fixtureTheme.evidence!.push({
    target: "anime_use", targetId: fixtureTheme.id, fields: ["usage"],
    sourceUrls: [useSource.url], verifiedAt: useSource.verifiedAt
  });
  const retainedSource = fixtureTheme.sources.find((source) => !fixtureTheme.evidence!.some((evidence) => evidence.sourceUrls.includes(source.url)))!;
  expect(retainedSource).toBeDefined();
  retainedSource.verifiedAt = "2001-01-01";
  fixtureTheme.lastVerifiedAt = fixtureTheme.sources.map((source) => source.verifiedAt).sort().at(-1)!;
  const fetchMock = vi.fn<typeof fetch>();
  const provider = new ApiProvider("https://catalog.example/api/v1", { fetch: fetchMock });
  fetchMock.mockImplementation(async () => publicJsonResponse(anime));
  const parsed = await provider.getAnime(anime.slug);
  expect(parsed).toEqual(anime);
  const theme = parsed!.themes[index]!;
  expect(new Set(theme.sources.map((source) => source.verifiedAt)).size).toBeGreaterThan(1);
  expect(theme.lastVerifiedAt).toBe(theme.sources.map((source) => source.verifiedAt).sort().at(-1));

  for (const date of [{ value: "2026", precision: "year" }, { value: "2026-07", precision: "month" }]) {
    const payload = structuredClone(anime);
    Object.assign(payload.themes[index]!.releases![0]!, { date });
    fetchMock.mockImplementation(async () => publicJsonResponse(payload));
    expect((await provider.getAnime(anime.slug))!.themes[index]!.releases![0]!.date).toEqual(date);
  }

  const mutations = [
    (theme: typeof anime.themes[number]) => { theme.seasonIds = []; },
    (theme: typeof anime.themes[number]) => { theme.seasonIds = ["2025-autumn"]; },
    (theme: typeof anime.themes[number]) => { theme.seasonIds = [theme.seasonIds![0]!, theme.seasonIds![0]!]; },
    (theme: typeof anime.themes[number]) => { theme.evidence = theme.evidence!.filter((item) => item.target !== "anime_use"); },
    (theme: typeof anime.themes[number]) => { theme.idAliases = [theme.id]; },
    (theme: typeof anime.themes[number]) => { theme.idAliases = []; },
    (theme: typeof anime.themes[number]) => { theme.idAliases = ["retired-theme-use", "retired-theme-use"]; },
    (theme: typeof anime.themes[number]) => { theme.idAliases = [anime.themes.find((other) => other.id !== theme.id)!.id]; },
    (theme: typeof anime.themes[number]) => { Object.assign(theme, { usageLabel: { platform: "ABEMA" } }); },
    (theme: typeof anime.themes[number]) => { theme.releases![0]!.tracks[0]!.recordingId = "missing-recording"; },
    (theme: typeof anime.themes[number]) => { theme.links[0]!.releaseId = "missing-release"; },
    (theme: typeof anime.themes[number]) => { theme.recordings!.push({ ...theme.recordings![0]! }); },
    (theme: typeof anime.themes[number]) => { theme.evidence![0]!.sourceUrls = ["https://unknown.example/evidence"]; },
    (theme: typeof anime.themes[number]) => { theme.evidence![0]!.verifiedAt = "2099-01-01"; },
    (theme: typeof anime.themes[number]) => { theme.releases![0]!.date = { value: "2026-02-30", precision: "day" }; },
    (theme: typeof anime.themes[number]) => { theme.releases![0]!.date = { value: "2026-07-08", precision: "month" }; },
    (theme: typeof anime.themes[number]) => { theme.evidence = []; },
    (theme: typeof anime.themes[number]) => { theme.credits.push({ name: "Group member fixture", role: "group_member" }); },
    (theme: typeof anime.themes[number]) => { theme.links[0]!.url = "javascript:alert(1)"; }
  ];
  for (const mutate of mutations) {
    const payload = structuredClone(anime);
    mutate(payload.themes[index]!);
    fetchMock.mockImplementation(async () => publicJsonResponse(payload));
    await expect(provider.getAnime(anime.slug)).rejects.toThrow("invalid anime payload");
  }
});

it("keeps per-use data status compatible with legacy payloads and rejects inflated completeness", async () => {
  const anime = structuredClone(curatedAnimeDetails.find((detail) => detail.themes.some((theme) => theme.evidence))!);
  const fetchMock = vi.fn<typeof fetch>();
  const provider = new ApiProvider("https://catalog.example/api/v1", { fetch: fetchMock });
  fetchMock.mockImplementation(async () => publicJsonResponse(anime));
  await expect(provider.getAnime(anime.slug)).resolves.toEqual(anime);
  const legacy = structuredClone(anime);
  legacy.themes.forEach((theme) => { delete theme.dataStatus; });
  fetchMock.mockImplementation(async () => publicJsonResponse(legacy));
  await expect(provider.getAnime(anime.slug)).resolves.toEqual(legacy);

  const theme = anime.themes[0]!;
  theme.credits = [{ name: theme.artistDisplayName, role: "songwriting" }];
  delete theme.recordings;
  delete theme.releases;
  theme.videos = [];
  theme.links = [{ platform: "作品官網", label: "官方入口", url: "https://official.example/", linkType: "official_landing_page", region: "UNKNOWN" }];
  const status = deriveThemeDataStatus(theme, [{ fields: ["releases"], note: "收錄版本待核對", resumeWhen: "官方完整曲目表公布", checkedAt: "2026-10-19" }]);
  expect(status.details.credits).toBe("not_recorded");
  expect(status.details.platforms).toBe("entry_links_only");
  expect(status.pendingFields).toEqual(expect.arrayContaining(["lyrics", "composition", "arrangement", "recordings", "official_video", "releases", "platform_links"]));

  const unassigned = structuredClone(anime);
  const unassignedTheme = unassigned.themes[0]!;
  unassignedTheme.seasonIds = [];
  unassignedTheme.dataStatus = deriveThemeDataStatus(unassignedTheme, [{
    fields: ["use_quarters"], note: "用途季度尚未逐曲核對", resumeWhen: "取得明確使用集數與播出日期的證據"
  }]);
  fetchMock.mockImplementation(async () => publicJsonResponse(unassigned));
  await expect(provider.getAnime(unassigned.slug)).resolves.toEqual(unassigned);
  for (const status of [undefined, deriveThemeDataStatus(unassignedTheme)]) {
    const missingFollowUp = structuredClone(unassigned);
    if (status) missingFollowUp.themes[0]!.dataStatus = status;
    else delete missingFollowUp.themes[0]!.dataStatus;
    fetchMock.mockImplementation(async () => publicJsonResponse(missingFollowUp));
    await expect(provider.getAnime(unassigned.slug)).rejects.toThrow("invalid anime payload");
  }

  const payload = structuredClone(curatedAnimeDetails.find((detail) => detail.themes.some((theme) => theme.dataStatus?.followUp))!);
  expect(payload).toBeDefined();
  const index = payload.themes.findIndex((theme) => theme.dataStatus?.followUp);
  fetchMock.mockImplementation(async () => publicJsonResponse(payload));
  const parsed = await provider.getAnime(payload.slug);
  expect(parsed!.themes[index]!.dataStatus).toEqual(payload.themes[index]!.dataStatus);
  const mutations = [
    (data: Record<string, unknown>) => { data.basic = "complete"; },
    (data: Record<string, unknown>) => { data.basicVerifiedAt = "2099-01-01"; },
    (data: Record<string, unknown>) => { data.pendingFields = []; },
    (data: Record<string, unknown>) => { data.details = { ...(data.details as object), platforms: "exact_links_recorded" }; },
    (data: Record<string, unknown>) => { data.followUp = [{ fields: [], note: "Gap", resumeWhen: "Source" }]; },
    (data: Record<string, unknown>) => { data.followUp = [{ fields: ["releases"], note: "Gap", resumeWhen: "Source", checkedAt: "2026-02-30" }]; }
  ];
  for (const mutate of mutations) {
    const invalid = structuredClone(payload);
    mutate(invalid.themes[index]!.dataStatus as unknown as Record<string, unknown>);
    fetchMock.mockImplementation(async () => publicJsonResponse(invalid));
    await expect(provider.getAnime(invalid.slug)).rejects.toThrow("invalid anime payload");
  }
});
