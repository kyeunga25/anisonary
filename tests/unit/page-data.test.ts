import { describe, expect, it } from "vitest";
import { loadHomePageData } from "@/data/page-data";
import { MockProvider } from "@/data/mock-provider";
import type { PublicDataProvider } from "@/data/provider";

describe("home page data states", () => {
  it("returns a ready state when the provider responds", async () => {
    const result = await loadHomePageData(new MockProvider());

    expect(result.status).toBe("ready");
    expect(result.current?.id).toBe("2026-summer");
    expect(result.previous?.id).toBe("2026-spring");
  });

  it("returns a safe public error state without exposing provider details", async () => {
    const failingProvider: PublicDataProvider = {
      getSeasons: async () => {
        throw new Error("private upstream detail");
      },
      getSeason: async () => {
        throw new Error("private upstream detail");
      },
      getAnime: async () => {
        throw new Error("private upstream detail");
      }
    };

    const result = await loadHomePageData(failingProvider);

    expect(result).toEqual({
      status: "error",
      seasons: [],
      current: null,
      previous: null
    });
    expect(JSON.stringify(result)).not.toContain("private upstream detail");
  });

  it("fails the build when production requires API data", async () => {
    const failure = new Error("production API unavailable");
    const failingProvider: PublicDataProvider = {
      getSeasons: async () => {
        throw failure;
      },
      getSeason: async () => {
        throw failure;
      },
      getAnime: async () => {
        throw failure;
      }
    };

    await expect(
      loadHomePageData(failingProvider, "2026-summer", "2026-spring", true)
    ).rejects.toBe(failure);
  });
});
