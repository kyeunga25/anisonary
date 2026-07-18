import { describe, expect, it } from "vitest";
import { externalLinkTypeLabel } from "@/utils/links";

describe("external link labels", () => {
  it("distinguishes direct, search, official, and purchase destinations", () => {
    expect(externalLinkTypeLabel("direct_track")).toBe("直接歌曲");
    expect(externalLinkTypeLabel("direct_album")).toBe("直接專輯");
    expect(externalLinkTypeLabel("search_result")).toBe("搜尋結果");
    expect(externalLinkTypeLabel("official_landing_page")).toBe("官方頁面");
    expect(externalLinkTypeLabel("physical_purchase")).toBe("實體購買");
    expect(externalLinkTypeLabel("digital_purchase")).toBe("數位購買");
  });
});
