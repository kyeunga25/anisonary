import { execFileSync } from "node:child_process";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { gzipSync } from "node:zlib";
import { expect, it } from "vitest";
import { curatedAnimeDetails, curatedSeasonDetails } from "@/data/curated-data";
import { CuratedProvider } from "@/data/curated-provider";
import { loadCatalogSearchData } from "@/data/page-data";
import { buildCatalogSearchIndex } from "@/utils/catalog-search-index";
import { getPlaylistRows } from "@/utils/song-playlist";
import { summarizeCatalog } from "../../scripts/catalog-statistics.mjs";
import { assertVerifiedBuild, buildInputDigest, canReuseLocalBuild, recordVerifiedBuild } from "../../scripts/build-state.mjs";
import { createProjectBackup, restoreProjectBackup, verifyProjectBackup } from "../../scripts/backup-project.mjs";
import { collectPrecacheManifest } from "../../scripts/generate-service-worker.mjs";

it("counts catalogue statistics using the same confirmed quarterly uses as the public playlist", async () => {
  const data = await loadCatalogSearchData(new CuratedProvider(), true);
  const index = buildCatalogSearchIndex(data.entries);
  const stats = summarizeCatalog(curatedSeasonDetails, curatedAnimeDetails);
  const options = {
    query: "", scope: "all" as const, year: "", quarter: "", type: "all" as const,
    sort: "newest" as const, videoOnly: false, weekday: "", includeEmpty: false
  };
  expect(stats.anime).toBe(curatedAnimeDetails.length);
  expect(stats.uses).toBe(getPlaylistRows(index, options).length);
  for (const season of stats.quarters) {
    const rows = getPlaylistRows(index, { ...options, year: String(season.year), quarter: season.quarter });
    expect(season.uses, season.id).toBe(rows.length);
    for (const type of ["OP", "ED", "IN", "TS"] as const) {
      expect(season.types[type], `${season.id}:${type}`).toBe(rows.filter((row) => row.theme?.type === type).length);
    }
  }
  // Partial song registration must remain explicit, rather than turning each use
  // into a supposedly unique song or counting legacy ID aliases as new records.
  const sample = structuredClone(curatedAnimeDetails.find((anime) => anime.themes.length >= 3)!);
  sample.themes = sample.themes.slice(0, 3);
  const membership = structuredClone(curatedSeasonDetails.find((season) => season.anime.some((card) => card.slug === sample.slug))!);
  membership.anime = membership.anime.filter((card) => card.slug === sample.slug);
  sample.themes.forEach((theme) => { theme.seasonIds = [membership.id]; });
  sample.themes[0]!.songId = "shared-song";
  sample.themes[1]!.songId = "shared-song";
  sample.themes[0]!.idAliases = ["retired-use"];
  delete sample.themes[2]!.songId;
  const partial = summarizeCatalog([membership], [sample]);
  expect(partial.uses).toBe(3);
  expect(partial.registeredSongs).toBe(1);
  expect(partial.usesWithoutSongId).toBe(1);
});

it("counts explicit basic reviews and overlapping quarterly gaps once, without treating unregistered uses as unique songs", () => {
  const sample = structuredClone(curatedAnimeDetails.find((anime) => anime.themes.length >= 4)!);
  sample.themes = sample.themes.slice(0, 4);
  const season = structuredClone(curatedSeasonDetails.find((entry) => entry.anime.some((card) => card.slug === sample.slug))!);
  season.anime = season.anime.filter((card) => card.slug === sample.slug);
  sample.themes.forEach((theme) => {
    theme.seasonIds = [season.id];
    theme.songId = "shared-pending-song";
    theme.dataStatus!.pendingFields = [];
    theme.dataStatus!.basic = "field_evidence_recorded";
  });
  sample.themes[0]!.dataStatus!.pendingFields = ["basic_evidence", "use_quarters"];
  sample.themes[1]!.dataStatus!.basic = "sources_recorded";
  sample.themes[1]!.dataStatus!.pendingFields = ["use_quarters"];
  sample.themes[2]!.dataStatus!.pendingFields = ["use_quarters"];
  delete sample.themes[2]!.songId;
  const next = structuredClone(season);
  next.id = `${season.year}-${season.quarter === "winter" ? "spring" : "winter"}`;
  next.quarter = season.quarter === "winter" ? "spring" : "winter";
  sample.themes[3]!.seasonIds = [season.id, next.id];
  const empty = { ...structuredClone(sample), id: "empty-work", slug: "empty-work", themes: [], themeAvailability: "pending_verification" as const };
  const notUsed = { ...structuredClone(empty), id: "no-independent-themes", slug: "no-independent-themes", themeAvailability: "not_used" as const };
  const stats = summarizeCatalog([season, next], [sample, empty, notUsed]);
  expect(stats.fieldEvidence).toBe(3);
  expect(stats.progress).toEqual({
    basicEvidenceMissingUses: 1, explicitBasicReviewUses: 1, basicReadyQuarterPendingUses: 1,
    corePendingUses: 3, quarterPendingUses: 3, distinctSongIdsAmongCorePendingUses: 1,
    corePendingUsesWithoutSongId: 1, animeAllStoredUsesCoreReady: 0, animeWithStoredUseCoreGaps: 1,
    animeWithoutScopedUses: 2, animeWithoutScopedUsesNotUsed: 1
  });
  expect(stats.years[0]!.uses).toBe(4);
  expect(stats.years[0]!.progress.corePendingUses).toBe(3);
  expect(stats.quarters.find((entry) => entry.id === next.id)!.progress.corePendingUses).toBe(0);
});

it("automatically reuses only local catalogue mode, while retaining receipts for an explicit API build", async () => {
  const root = await mkdtemp(join(tmpdir(), "anisonary-build-mode-"));
  for (const directory of ["src", "public", "scripts", "tests", "dist/api/v1"]) {
    await mkdir(join(root, directory), { recursive: true });
  }
  const environment = { PUBLIC_API_BASE_URL: "" };
  await writeFile(join(root, ".env.example"), "PUBLIC_API_BASE_URL=https://template.example/api/v1\n");
  await writeFile(join(root, ".env.production.example"), "PUBLIC_API_BASE_URL=\n");
  await writeFile(join(root, ".env"), "# PUBLIC_API_BASE_URL=https://comment.example\nPUBLIC_SITE_URL=https://catalog.example\n");
  await expect(canReuseLocalBuild(root, environment)).resolves.toBe(true);
  await expect(canReuseLocalBuild(root, { PUBLIC_API_BASE_URL: "  https://catalog.example/api/v1  " })).resolves.toBe(false);
  await writeFile(join(root, ".env.production.local"), "export PUBLIC_API_BASE_URL=\n");
  await expect(canReuseLocalBuild(root, environment)).resolves.toBe(false);
  await writeFile(join(root, ".env.production.local"), "PUBLIC_API_BASE_URL: https://catalog.example/api/v1\n");
  await expect(canReuseLocalBuild(root, environment)).resolves.toBe(false);
  for (const [name, content] of Object.entries({
    "index.html": "<main>Explicit API snapshot</main>", "_headers": "/*\n", "sw.js": "// offline fallback\n", "api/v1/seasons.json": "[]"
  })) await writeFile(join(root, "dist", name), content);
  const inputs = await buildInputDigest(root, environment);
  await recordVerifiedBuild(inputs, root, environment);
  await expect(assertVerifiedBuild(root, environment)).resolves.toBeUndefined();
  await expect(canReuseLocalBuild(root, environment)).resolves.toBe(false);
});

it("refuses reused builds after source, environment or artifact changes and detects edits during a build", async () => {
  const root = await mkdtemp(join(tmpdir(), "anisonary-build-state-"));
  for (const directory of ["src", "public", "scripts", "tests", "dist/api/v1"]) {
    await mkdir(join(root, directory), { recursive: true });
  }
  await writeFile(join(root, "src/catalog.ts"), "export const reviewed = true;\n");
  for (const [name, content] of Object.entries({
    "index.html": "<main>Reviewed catalogue</main>",
    "_headers": "/*\n  X-Content-Type-Options: nosniff\n",
    "sw.js": "// public offline worker\n",
    "api/v1/seasons.json": "[]"
  })) await writeFile(join(root, "dist", name), content);
  const environment = { PUBLIC_SITE_URL: "https://catalog.example" };
  const original = await buildInputDigest(root, environment);
  await recordVerifiedBuild(original, root, environment);
  await expect(assertVerifiedBuild(root, environment)).resolves.toBeUndefined();
  await mkdir(join(root, "docs"));
  await writeFile(join(root, "docs/CATALOG_STATS.md"), "Generated field inventory\n");
  await expect(assertVerifiedBuild(root, environment)).resolves.toBeUndefined();
  await expect(assertVerifiedBuild(root, { ...environment, PUBLIC_API_BASE_URL: "https://other.example/api/v1" })).rejects.toThrow("No matching verified build");
  await writeFile(join(root, "dist/index.html"), "<main>Unexpected artifact</main>");
  await expect(assertVerifiedBuild(root, environment)).rejects.toThrow("No matching verified build");
  await writeFile(join(root, "dist/index.html"), "<main>Reviewed catalogue</main>");
  await writeFile(join(root, "src/catalog.ts"), "export const reviewed = false;\n");
  await expect(assertVerifiedBuild(root, environment)).rejects.toThrow("No matching verified build");
  await expect(recordVerifiedBuild(original, root, environment)).rejects.toThrow("changed during verification");
});

it("backs up uncommitted public sources, restores their bytes, and refuses corruption or unsafe replacement", async () => {
  const root = await mkdtemp(join(tmpdir(), "anisonary-backup-"));
  await mkdir(join(root, "scripts"));
  await mkdir(join(root, "src"));
  await writeFile(join(root, "scripts/check-public-boundary.mjs"), await readFile(resolve("scripts/check-public-boundary.mjs")));
  await writeFile(join(root, ".gitignore"), ".env.local\n.private/\n");
  await writeFile(join(root, ".env.local"), "LOCAL_SETTING=excluded\n");
  await writeFile(join(root, "src/catalog.ts"), 'export const id = "stable-song-id";\n');
  await writeFile(join(root, "README.md"), "動畫歌曲目錄\n");
  execFileSync("git", ["init", "--quiet", root]);
  const path = await createProjectBackup(root);
  const snapshot = await verifyProjectBackup(path);
  expect(snapshot.files.map((file: { path: string }) => file.path)).toEqual([".gitignore", "README.md", "scripts/check-public-boundary.mjs", "src/catalog.ts"]);
  const restored = join(root, "restored");
  expect(await restoreProjectBackup(path, restored)).toBe(snapshot.files.length);
  for (const file of snapshot.files) {
    expect(await readFile(join(restored, file.path))).toEqual(await readFile(join(root, file.path)));
  }
  await expect(restoreProjectBackup(path, restored)).rejects.toThrow();
  const corrupt = join(root, "corrupt.json.gz");
  snapshot.files[0].content = Buffer.from("Changed file").toString("base64");
  await writeFile(corrupt, gzipSync(JSON.stringify(snapshot)));
  await expect(verifyProjectBackup(corrupt)).rejects.toThrow("checksum mismatch");
  snapshot.files[0].path = "../outside";
  await writeFile(corrupt, gzipSync(JSON.stringify(snapshot)));
  await expect(verifyProjectBackup(corrupt)).rejects.toThrow("Invalid backup path");
});

it("keeps offline precaching independent of catalogue growth and enforces a small asset budget", async () => {
  const root = await mkdtemp(join(tmpdir(), "anisonary-precache-"));
  for (const directory of ["_astro", "offline", "search", "api/v1"]) await mkdir(join(root, directory), { recursive: true });
  await writeFile(join(root, "offline/index.html"), "Connection unavailable");
  await writeFile(join(root, "_astro/shared.css"), "body{color:navy}");
  await writeFile(join(root, "search/index.html"), Buffer.alloc(600 * 1024, "x"));
  await writeFile(join(root, "api/v1/seasons.json"), "[]");
  const manifest = await collectPrecacheManifest(root);
  expect(manifest.map((entry: { url: string }) => entry.url)).toEqual(["/_astro/shared.css", "/offline/"]);
  await writeFile(join(root, "_astro/shared.css"), Buffer.alloc(512 * 1024, "x"));
  await expect(collectPrecacheManifest(root)).rejects.toThrow("precache budget");
});
