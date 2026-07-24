import { describe, expect, it, vi } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { curatedAnimeDetails, curatedSeasonDetails, curatedSeasons } from "@/data/curated-data";

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

describe("ApiProvider public contract", () => {
  it("accepts only absolute HTTPS API URLs, with an HTTP localhost exception", () => {
    expect(() => new ApiProvider("https://api.anisonary.k-y.cc/v1/")).not.toThrow();
    expect(() => new ApiProvider("http://localhost:8787/v1")).not.toThrow();

    for (const baseUrl of [
      "http://api.anisonary.k-y.cc/v1",
      "ftp://api.anisonary.k-y.cc/v1",
      "https://user:password@api.anisonary.k-y.cc/v1",
      "https://api.anisonary.k-y.cc/v1?token=secret",
      "https://api.anisonary.k-y.cc/v1#fragment"
    ]) {
      expect(() => new ApiProvider(baseUrl), baseUrl).toThrow("invalid base URL");
    }
  });

  it("validates, normalizes and sanitizes the season list", async () => {
    const payload = structuredClone(curatedSeasons).map((season, index) =>
      index === 0 ? { ...season, internalConfidence: 0.99 } : season
    );
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(payload));
    const provider = new ApiProvider("https://api.anisonary.k-y.cc/v1/", { fetch: fetchMock });

    const seasons = await provider.getSeasons();

    expect(seasons).toEqual(curatedSeasons);
    expect(seasons[0]).not.toHaveProperty("internalConfidence");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.anisonary.k-y.cc/v1/seasons",
      expect.objectContaining({
        headers: { Accept: "application/json" },
        redirect: "error",
        signal: expect.any(AbortSignal)
      })
    );
  });

  it("rejects duplicate seasons and inconsistent season identities", async () => {
    const duplicateFetch = vi.fn<typeof fetch>().mockResolvedValue(
      jsonResponse([curatedSeasons[0], curatedSeasons[0]])
    );
    await expect(
      new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: duplicateFetch }).getSeasons()
    ).rejects.toThrow("invalid season list");

    const payload = structuredClone(curatedSeasonDetails[0]!);
    payload.id = "2026-spring";
    payload.quarter = "spring";
    const mismatchFetch = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(payload));
    await expect(
      new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: mismatchFetch }).getSeason("2026-summer")
    ).rejects.toThrow("invalid season payload");
  });

  it("rejects invalid nested card fields instead of trusting a top-level cast", async () => {
    const payload = structuredClone(curatedSeasonDetails[0]!);
    payload.anime[0]!.posterUrl = "javascript:alert(1)";
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(payload));

    await expect(
      new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: fetchMock }).getSeason("2026-summer")
    ).rejects.toThrow("invalid season payload");
  });

  it("validates and sanitizes complete anime details", async () => {
    const payload = structuredClone(curatedAnimeDetails[0]!) as typeof curatedAnimeDetails[number] & {
      privateSourceAdapter?: string;
    };
    payload.privateSourceAdapter = "must-not-cross-the-public-contract";
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(payload));
    const provider = new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: fetchMock });

    const anime = await provider.getAnime(payload.slug);

    expect(anime).toEqual(curatedAnimeDetails[0]);
    expect(anime).not.toHaveProperty("privateSourceAdapter");
  });

  it("accepts every reviewed repository fixture as a production-like API response", async () => {
    for (const season of curatedSeasonDetails) {
      const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(season));
      const provider = new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: fetchMock });
      await expect(provider.getSeason(season.id)).resolves.toEqual(season);
    }

    for (const anime of curatedAnimeDetails) {
      const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(anime));
      const provider = new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: fetchMock });
      await expect(provider.getAnime(anime.slug)).resolves.toEqual(anime);
    }
  });

  it("rejects unsafe nested links and list/detail count drift", async () => {
    const unsafeLinkPayload = structuredClone(curatedAnimeDetails[0]!);
    unsafeLinkPayload.themes[0]!.links[0]!.url = "http://tracker.example.test/song";
    const unsafeFetch = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(unsafeLinkPayload));
    await expect(
      new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: unsafeFetch }).getAnime(unsafeLinkPayload.slug)
    ).rejects.toThrow("invalid anime payload");

    const countDriftPayload = structuredClone(curatedAnimeDetails[0]!);
    countDriftPayload.opCount = 2;
    const countFetch = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(countDriftPayload));
    await expect(
      new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: countFetch }).getAnime(countDriftPayload.slug)
    ).rejects.toThrow("invalid anime payload");

    const invalidDatePayload = structuredClone(curatedAnimeDetails[0]!);
    invalidDatePayload.sources[0]!.verifiedAt = "2026-02-31";
    const dateFetch = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse(invalidDatePayload));
    await expect(
      new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: dateFetch }).getAnime(invalidDatePayload.slug)
    ).rejects.toThrow("invalid anime payload");
  });

  it("returns null only for 404 and rejects non-JSON success responses", async () => {
    const notFoundFetch = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ message: "not found" }, 404));
    const provider = new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: notFoundFetch });

    await expect(provider.getSeason("2026-winter")).resolves.toBeNull();
    await expect(provider.getAnime("unknown-anime")).resolves.toBeNull();

    const htmlFetch = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify(curatedSeasons), {
        status: 200,
        headers: { "Content-Type": "text/html" }
      })
    );
    await expect(
      new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: htmlFetch }).getSeasons()
    ).rejects.toThrow("invalid content type");
  });

  it("rejects invalid request identities before making a network request", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    const provider = new ApiProvider("https://api.anisonary.k-y.cc/v1", { fetch: fetchMock });

    await expect(provider.getSeason("../private")).rejects.toThrow("invalid season ID");
    await expect(provider.getAnime("invalid/slug")).rejects.toThrow("invalid anime slug");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("aborts a stalled request at the configured timeout", async () => {
    const stalledFetch = vi.fn<typeof fetch>().mockImplementation((_input, init) =>
      new Promise((_resolve, reject) => {
        init?.signal?.addEventListener("abort", () => {
          reject(new DOMException("Aborted", "AbortError"));
        });
      })
    );
    const provider = new ApiProvider("https://api.anisonary.k-y.cc/v1", {
      fetch: stalledFetch,
      timeoutMs: 10
    });

    await expect(provider.getSeasons()).rejects.toThrow("timed out");
  });
});
