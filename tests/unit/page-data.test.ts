import { expect, it } from "vitest";
import { curatedSeasons } from "@/data/curated-data";
import { loadCatalogDirectoryData, loadCatalogSearchData } from "@/data/page-data";
import type { PublicDataProvider } from "@/data/provider";

it("keeps provider failures public-safe and refuses incomplete data when a build requires the API", async () => {
  const failure = new Error("unpublished upstream detail");
  const unavailable: PublicDataProvider = {
    getSeasons: async () => { throw failure; },
    getSeason: async () => { throw failure; },
    getAnime: async () => { throw failure; }
  };
  await expect(loadCatalogSearchData(unavailable)).resolves.toEqual({ status: "error", entries: [] });
  await expect(loadCatalogDirectoryData(unavailable)).resolves.toEqual({ status: "error", seasons: [] });
  await expect(loadCatalogSearchData(unavailable, true)).rejects.toBe(failure);
  await expect(loadCatalogDirectoryData(unavailable, true)).rejects.toBe(failure);

  const incomplete: PublicDataProvider = {
    getSeasons: async () => [curatedSeasons[0]!],
    getSeason: async () => null,
    getAnime: async () => null
  };
  await expect(loadCatalogSearchData(incomplete, true)).rejects.toThrow("Season detail is missing");
  await expect(loadCatalogDirectoryData(incomplete, true)).rejects.toThrow("missing or inconsistent");
});
