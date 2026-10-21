import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { gzipSync } from "node:zlib";
import { assertVerifiedBuild, listFiles } from "./build-state.mjs";
import { renderBuildFootprint, renderCatalogStatistics, summarizeCatalog } from "./catalog-statistics.mjs";

try {
  const mode = process.argv[2];
  if (mode !== undefined && !["--write", "--check"].includes(mode)) throw new Error("Use catalog:stats, catalog:stats:update or catalog:stats:check.");
  await assertVerifiedBuild();
  const root = resolve("dist");
  const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
  const summaries = await readJson(resolve(root, "api/v1/seasons.json"));
  const seasons = await Promise.all(summaries.map((season) => {
    if (!/^\d{4}-(winter|spring|summer|fall)$/.test(season.id)) throw new Error("Invalid season identity in statistics inputs.");
    return readJson(resolve(root, `api/v1/seasons/${season.id}.json`));
  }));
  const animeDirectory = resolve(root, "api/v1/anime");
  const anime = await Promise.all((await readdir(animeDirectory)).filter((file) => file.endsWith(".json")).sort()
    .map((file) => readJson(resolve(animeDirectory, file))));
  const stats = summarizeCatalog(seasons, anime);
  const files = await listFiles(root);
  const sizes = new Map(await Promise.all(files.map(async (file) => [relative(root, file).replaceAll("\\", "/"), (await stat(file)).size])));
  const search = await readFile(resolve(root, "search/index.html"), "utf8");
  const index = search.match(/<script\b[^>]*data-search-manifest[^>]*>([\s\S]*?)<\/script>/);
  const manifest = (await readFile(resolve(root, "sw.js"), "utf8")).match(/const PRECACHE_URLS = (\[[\s\S]*?\]);/);
  if (!index || !manifest) throw new Error("Missing search or offline manifest in statistics inputs.");
  const searchManifest = JSON.parse(index[1]);
  let searchGzipBytes = 0;
  for (const chunk of searchManifest.chunks) {
    if (!/^\/search-index\/[a-f0-9]{64}\.json$/.test(chunk.url) || sizes.get(chunk.url.slice(1)) !== chunk.bytes) throw new Error("Search manifest references an absent or inconsistent artifact.");
    searchGzipBytes += gzipSync(await readFile(resolve(root, chunk.url.slice(1)))).byteLength;
  }
  let searchRoutingGzipBytes = 0;
  for (const bucket of searchManifest.routing.buckets) {
    if (!/^\/search-index\/[a-f0-9]{64}\.json$/.test(bucket.url) || sizes.get(bucket.url.slice(1)) !== bucket.bytes) throw new Error("Search routing manifest references an absent or inconsistent artifact.");
    searchRoutingGzipBytes += gzipSync(await readFile(resolve(root, bucket.url.slice(1)))).byteLength;
  }
  const urls = JSON.parse(manifest[1]);
  const capacity = {
    html: files.filter((file) => file.endsWith(".html")).length,
    files: files.length, bytes: [...sizes.values()].reduce((sum, size) => sum + size, 0),
    searchHtmlBytes: Buffer.byteLength(search), searchIndexBytes: searchManifest.bytes,
    searchManifestBytes: Buffer.byteLength(index[1]), searchChunks: searchManifest.chunks.length,
    searchIndexDecodedBytes: searchManifest.decodedBytes, searchGzipBytes,
    searchRoutingBytes: searchManifest.routing.bytes, searchRoutingBuckets: searchManifest.routing.buckets.length, searchRoutingGzipBytes,
    precacheUrls: urls.length,
    precacheBytes: urls.reduce((sum, url) => {
      const path = url === "/" ? "index.html" : `${url.slice(1)}${url.endsWith("/") ? "index.html" : ""}`;
      const size = sizes.get(path);
      if (size === undefined) throw new Error("Offline manifest references an absent artifact.");
      return sum + size;
    }, 0)
  };
  const document = renderCatalogStatistics(stats);
  await assertVerifiedBuild();
  if (mode === "--write") {
    await writeFile("docs/CATALOG_STATS.md", document);
    console.log("Updated docs/CATALOG_STATS.md from the verified public snapshot.");
  } else if (mode === "--check") {
    let existing;
    try { existing = await readFile("docs/CATALOG_STATS.md", "utf8"); } catch { existing = ""; }
    if (existing !== document) throw new Error("Catalogue statistics are stale. Run npm run catalog:stats:update after a verified build.");
    console.log("Catalogue statistics match the verified build.");
  } else console.log(`${document}\n${renderBuildFootprint(capacity)}`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
