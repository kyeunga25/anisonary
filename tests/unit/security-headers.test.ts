import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { expect, it } from "vitest";
import { generateSecurityHeaders } from "../../scripts/generate-security-headers.mjs";
import { buildCatalogSearchIndex, serializeCatalogSearchIndex } from "@/utils/catalog-search-index";
import { serializeJsonLd } from "@/utils/seo";

it("packages safe public HTML with an enforced CSP and rejects unsafe markup or private artifacts", async () => {
  const directory = await mkdtemp(join(tmpdir(), "anisonary-artifact-"));
  const htmlPath = join(directory, "index.html");
  const script = "document.documentElement.dataset.ready = 'true';";
  await writeFile(htmlPath, `<script>${script}</script><script type="application/json">{"title":"catalogue"}</script><style>body{color:navy}</style>`);
  await writeFile(join(directory, "_headers"), "/*\n  Referrer-Policy: no-referrer\n");
  const inspected = await generateSecurityHeaders(directory);
  expect(inspected.scriptHashes.size).toBe(1);
  const headers = await readFile(join(directory, "_headers"), "utf8");
  expect(headers).toContain(`'sha256-${createHash("sha256").update(script).digest("base64")}'`);
  expect(headers).toContain("script-src-attr 'none'");
  expect(headers).toContain("frame-src https://www.youtube-nocookie.com");
  expect(headers).not.toMatch(/unsafe-inline|unsafe-eval/);

  const checkArtifact = () => spawnSync(process.execPath, [resolve("scripts/check-public-boundary.mjs"), directory], { encoding: "utf8" });
  expect(checkArtifact().status).toBe(0);
  for (const markup of [
    '<button onclick="alert(1)">Open</button>',
    '<div style="display:none"></div>',
    '<img src="https://tracker.example.test/poster.jpg">',
    '<img src="/poster.jpg" srcset="https://tracker.example.test/poster.jpg 2x">',
    '<div data-embed-url="https://tracker.example.test/frame"></div>'
  ]) {
    await writeFile(htmlPath, markup);
    await expect(generateSecurityHeaders(directory), markup).rejects.toThrow();
  }

  const injectedText = "</script><script>alert(1)</script>";
  const index: ReturnType<typeof buildCatalogSearchIndex> = [{
    slug: "fixture", titleJa: injectedText, titleZhHant: undefined, titleRomaji: undefined,
    availability: "not_announced", season: { id: "2026-summer", year: 2026, quarter: "summer", titleJa: "夏", titleZhHant: "夏季動畫" },
    seasons: [], editorialWeekday: undefined, searchText: injectedText, themes: []
  }];
  for (const serialized of [serializeJsonLd({ name: injectedText }), serializeCatalogSearchIndex(index)]) {
    expect(serialized).not.toContain("</script>");
  }
  expect(JSON.parse(serializeCatalogSearchIndex(index))[0].titleJa).toBe(injectedText);

  const privatePath = ["", "Users", "example", "unpublished"].join("/");
  await writeFile(htmlPath, privatePath);
  await writeFile(join(directory, "bundle.js.map"), "{}");
  const rejected = checkArtifact();
  expect(rejected.status).toBe(1);
  expect(rejected.stderr).toContain("prohibited-artifact-file");
  expect(rejected.stderr).toContain("personal-path");
  expect(rejected.stderr).not.toContain(privatePath);
});
