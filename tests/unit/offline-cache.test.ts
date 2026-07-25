import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  collectPrecacheManifest,
  generateServiceWorker,
  renderServiceWorker,
} from "../../scripts/generate-service-worker.mjs";

describe("offline static catalogue", () => {
  it("pre-caches only public same-origin build files with content revisions", async () => {
    const directory = await mkdtemp(join(tmpdir(), "anisonary-offline-"));
    await mkdir(join(directory, "search"), { recursive: true });
    await mkdir(join(directory, "api", "v1"), { recursive: true });
    await mkdir(join(directory, "mock-posters"), { recursive: true });
    await writeFile(join(directory, "index.html"), "home");
    await writeFile(join(directory, "search", "index.html"), "search");
    await writeFile(join(directory, "manifest.webmanifest"), "{}");
    await writeFile(join(directory, "api", "v1", "seasons.json"), "[]");
    await writeFile(join(directory, "404.html"), "not found");
    await writeFile(join(directory, "_headers"), "headers");
    await writeFile(join(directory, "mock-posters", "fixture.webp"), "fixture");

    const manifest = await collectPrecacheManifest(directory);

    expect(manifest.map(({ url }: { url: string }) => url)).toEqual([
      "/",
      "/manifest.webmanifest",
      "/search/",
    ]);
    expect(manifest.every(({ revision }: { revision: string }) => /^[a-f0-9]{16}$/.test(revision))).toBe(true);
  });

  it("generates a deterministic, same-origin-only service worker without runtime writes", async () => {
    const source = renderServiceWorker([
      { url: "/", revision: "1111111111111111" },
      { url: "/offline/", revision: "2222222222222222" },
    ]);

    expect(source).toContain('if (url.origin !== self.location.origin) return;');
    expect(source).toContain('await caches.match("/offline/")');
    expect(source).not.toContain("cache.put(");
    expect(source).not.toContain("searchParams");
  });

  it("writes the generated worker into the selected static output directory", async () => {
    const directory = await mkdtemp(join(tmpdir(), "anisonary-worker-"));
    await writeFile(join(directory, "index.html"), "home");

    await generateServiceWorker(directory);

    const source = await readFile(join(directory, "sw.js"), "utf8");
    expect(source).toContain('const PRECACHE_URLS = [\n  "/"\n];');
  });
});
