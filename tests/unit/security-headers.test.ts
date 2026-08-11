import { createHash } from "node:crypto";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  buildContentSecurityPolicy,
  generateSecurityHeaders,
  injectContentSecurityPolicy,
  inspectHtmlForPolicy,
} from "../../scripts/generate-security-headers.mjs";

const sha256 = (source: string) =>
  `'sha256-${createHash("sha256").update(source).digest("base64")}'`;

describe("generated Content Security Policy", () => {
  it("hashes executable inline resources and ignores structured data", () => {
    const script = "document.documentElement.dataset.ready = 'true';";
    const style = "body { color: #10234f; }";
    const inspected = inspectHtmlForPolicy(`<!doctype html>
      <script>${script}</script>
      <script type="application/ld+json">{"@type":"WebSite"}</script>
      <style>${style}</style>`);

    expect([...inspected.scriptHashes]).toEqual([sha256(script)]);
    expect([...inspected.styleHashes]).toEqual([sha256(style)]);
  });

  it("uses a minimal allowlist without unsafe script or style fallbacks", () => {
    const policy = buildContentSecurityPolicy(new Set([sha256("script")]), new Set([sha256("style")]));

    expect(policy).toContain("default-src 'self'");
    expect(policy).toContain("script-src-attr 'none'");
    expect(policy).toContain("style-src-attr 'none'");
    expect(policy).toContain("img-src 'self' https://s4.anilist.co");
    expect(policy).toContain("frame-src https://www.youtube-nocookie.com");
    expect(policy).not.toMatch(/unsafe-inline|unsafe-eval|\s\*/);
  });

  it("fails closed for inline attributes and unexpected remote media", () => {
    expect(() => inspectHtmlForPolicy('<button onclick="alert(1)">Open</button>', "fixture.html"))
      .toThrow("fixture.html contains prohibited inline onclick attribute");
    expect(() => inspectHtmlForPolicy('<div style="display:none"></div>', "fixture.html"))
      .toThrow("fixture.html contains prohibited inline style attribute");
    expect(() => inspectHtmlForPolicy('<img src="https://media.example/poster.webp">', "fixture.html"))
      .toThrow("fixture.html uses an unapproved remote image origin");
    expect(() => inspectHtmlForPolicy('<img src="//media.example/poster.webp">', "fixture.html"))
      .toThrow("fixture.html uses an unapproved remote image origin");
    expect(() => inspectHtmlForPolicy(
      '<img src="/poster.webp" srcset="/poster.webp 1x, https://media.example/poster@2x.webp 2x">',
      "fixture.html",
    )).toThrow("fixture.html uses an unapproved remote image origin");
    expect(() => inspectHtmlForPolicy(
      '<picture><source srcset="https://media.example/poster.webp 800w"><img src="/poster.webp"></picture>',
      "fixture.html",
    )).toThrow("fixture.html uses an unapproved remote image origin");
  });

  it("injects one generated header into the global Static Assets rule", () => {
    const policy = "default-src 'self'; object-src 'none'";
    const source = "/*\n  X-Content-Type-Options: nosniff\n\n/assets/*\n  Cache-Control: public\n";
    const first = injectContentSecurityPolicy(source, policy);
    const second = injectContentSecurityPolicy(first, policy);

    expect(second.match(/Content-Security-Policy:/g)).toHaveLength(1);
    expect(second).toContain(`/*\n  Content-Security-Policy: ${policy}\n`);
  });

  it("rejects a policy that exceeds the Static Assets line limit", () => {
    const oversizedPolicy = `script-src 'self' ${"'sha256-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa=' ".repeat(40)}`;

    expect(() => injectContentSecurityPolicy("/*\n", oversizedPolicy))
      .toThrow("Content-Security-Policy header exceeds 2000 characters");
  });

  it("writes the generated policy to a selected build directory", async () => {
    const directory = await mkdtemp(join(tmpdir(), "anisonary-csp-"));
    await writeFile(join(directory, "index.html"), "<script>window.ready=true</script>");
    await writeFile(join(directory, "_headers"), "/*\n  X-Frame-Options: DENY\n");

    const result = await generateSecurityHeaders(directory);
    const headers = await readFile(join(directory, "_headers"), "utf8");

    expect(result.htmlFiles).toBe(1);
    expect(headers).toContain("Content-Security-Policy: default-src 'self'");
    expect(headers).toContain(sha256("window.ready=true"));
  });
});
