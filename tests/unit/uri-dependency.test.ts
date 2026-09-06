import { describe, expect, it } from "vitest";
import { normalize, parse, resolve } from "fast-uri";

// Regression cases from the fast-uri v3.1.6 security advisories.
// These checks only parse strings; they never make network requests.
describe("URI dependency security regressions", () => {
  it("canonicalizes scheme-relative IDN hosts before returning the resolved URL", () => {
    const result = resolve("https://example.org/", "//münich.example/");
    expect(result).toBe("https://xn--mnich-kva.example/");
    expect(parse(result).host).toBe(new URL(result).host);
  });

  it("does not turn a nested encoded hostname into localhost", () => {
    const input = "http://%256c%256f%2563%2561%256c%2568%256f%2573%2574/";
    expect(normalize(input)).toBe(input);
  });

  it.each(["::not-valid", "fc00::not-hex", "fe80::not-hex"])(
    "reports malformed IPv6 host %s instead of silently changing its address",
    (host) => {
      expect(parse(`http://[${host}]/private`).error).toBeTruthy();
    }
  );

  it.each(["%2f%2fevil.example:/pwn", "%u002f%u002fevil.example:/pwn", "%0d%0a:/path"])(
    "does not decode an invalid scheme into URI structure or header characters: %s",
    (input) => {
      const result = normalize(input);
      expect(result).toBe(input);
      expect(result).not.toMatch(/[\r\n]/);
      expect(parse(result).host).toBeUndefined();
    }
  );
});
