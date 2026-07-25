import { describe, expect, it } from "vitest";
import { ApiProvider } from "@/data/api-provider";
import { smokePublicApi } from "@/data/api-smoke";

describe("live Anisonary public API", () => {
  it("passes the complete public contract and cross-endpoint consistency gate", async () => {
    const baseUrl = process.env.PUBLIC_API_BASE_URL?.trim();
    if (!baseUrl) {
      throw new Error("PUBLIC_API_BASE_URL is required for the live API smoke test");
    }

    const result = await smokePublicApi(new ApiProvider(baseUrl));
    expect(result.seasonCount).toBeGreaterThan(0);
    expect(result.animeCount).toBeGreaterThan(0);
  });
});
