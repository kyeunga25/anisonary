import { describe, expect, it } from "vitest";
import { buildCreatorSearchHref, MAX_CATALOG_QUERY_LENGTH, parseCreatorSearchHash } from "@/utils/creator-search";

describe("creator search entry links", () => {
  it("round-trips international names and punctuation in a same-origin fragment only", () => {
    for (const name of ["米津玄師", "pal@pop", "A+B & C#", "O'Artist (CV.例)", "<img src=x>", "歌手🎵"]) {
      const href = buildCreatorSearchHref(name);
      expect(href).toBeDefined();
      const url = new URL(href!, "https://catalogue.example");
      expect(url.origin).toBe("https://catalogue.example");
      expect(url.pathname).toBe("/search/");
      expect(url.search).toBe("");
      expect(parseCreatorSearchHash(url.hash)).toBe(name);
    }
  });

  it("preserves the input length boundary and never truncates an ensemble name", () => {
    const name = "歌".repeat(MAX_CATALOG_QUERY_LENGTH);
    expect(parseCreatorSearchHash(new URL(buildCreatorSearchHref(name)!, "https://catalogue.example").hash)).toBe(name);
    expect(buildCreatorSearchHref(`${name}手`)).toBeUndefined();
    expect(parseCreatorSearchHash(`#creator=${encodeURIComponent(`${name}手`)}`)).toBeUndefined();
    expect(buildCreatorSearchHref("🎵".repeat(MAX_CATALOG_QUERY_LENGTH / 2))).toBeDefined();
    expect(buildCreatorSearchHref(`${"🎵".repeat(MAX_CATALOG_QUERY_LENGTH / 2)}a`)).toBeUndefined();
  });

  it("rejects empty, altered, control-character and malformed Unicode names", () => {
    for (const name of ["", " ", " CHAI", "CHAI ", "A\nB", "A\tB", "A\0B", "A\u007fB", "A\u0085B", "A\u2028B", "A\u2029B", "\ud800", "\udc00"]) {
      expect(buildCreatorSearchHref(name)).toBeUndefined();
    }
  });

  it("keeps the catalogue's instrumental marker as text while allowing credited composers", () => {
    expect(buildCreatorSearchHref("(インストゥルメンタル)")).toBeUndefined();
    expect(parseCreatorSearchHash(`#creator=${encodeURIComponent("(インストゥルメンタル)")}`)).toBeUndefined();
    expect(buildCreatorSearchHref("久石譲")).toBeDefined();
    expect(buildCreatorSearchHref("(K)NoW_NAME")).toBeDefined();
  });

  it("accepts only one bounded creator condition and decodes it exactly once", () => {
    for (const hash of ["", "#", "#creator=", "#query=CHAI", "#creator=CHAI&creator=LiSA", "#creator=CHAI&year=2019", "#creator=%", "#creator=%E0%A4%A", "#creator=%ED%A0%80", "#creator=%0ACHAl", `#creator=${"%61".repeat(1_000)}`]) {
      expect(parseCreatorSearchHash(hash)).toBeUndefined();
    }
    expect(parseCreatorSearchHash("#creator=A%2BB%20%26%20C")).toBe("A+B & C");
    expect(parseCreatorSearchHash("#creator=%253Cscript%253E")).toBe("%3Cscript%3E");
  });
});
