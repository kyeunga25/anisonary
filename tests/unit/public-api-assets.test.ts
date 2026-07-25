import { describe, expect, it } from "vitest";
import { publicJsonResponse } from "@/data/public-api-assets";

describe("static public API assets", () => {
  it("serializes reviewed payloads as UTF-8 JSON", async () => {
    const response = publicJsonResponse([{ id: "2026-summer" }]);

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/json; charset=utf-8");
    await expect(response.json()).resolves.toEqual([{ id: "2026-summer" }]);
  });
});
