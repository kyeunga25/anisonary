import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, mkdtemp, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { expect, it } from "vitest";
import { encodeSearchRoutingBucket } from "@/utils/catalog-search-routing";

async function inspectRouting(source: string) {
  const root = await mkdtemp(join(tmpdir(), "anisonary-routing-boundary-"));
  await mkdir(join(root, "songs"));
  await mkdir(join(root, "search-index"));
  const digest = (value: string) => createHash("sha256").update(value).digest("hex");
  const chunk = "[]";
  const chunkUrl = `/search-index/${digest(chunk)}.json`;
  const url = `/search-index/${digest(source)}.json`;
  const bytes = Buffer.byteLength(source);
  const manifest = {
    version: 3, bytes: 2, decodedBytes: 2, entries: 1,
    chunks: [{ url: chunkUrl, bytes: 2, decodedBytes: 2, entries: 1, seasons: ["2022-spring"] }],
    routing: { version: 1, bytes, buckets: [{ bucket: 21, url, bytes, records: 1 }] }
  };
  await writeFile(join(root, "search-index", `${digest(chunk)}.json`), chunk);
  await writeFile(join(root, "search-index", `${digest(source)}.json`), source);
  await writeFile(join(root, "songs/index.html"), `<script type="application/json" data-search-manifest>${JSON.stringify(manifest)}</script>`);
  return spawnSync(process.execPath, [resolve("scripts/check-public-boundary.mjs"), root], { encoding: "utf8" });
}

it("accepts a manifest-bound numeric routing payload despite an incidental text marker", async () => {
  const source = encodeSearchRoutingBucket(21, 1, new Map([[0x00b93415, new Uint8Array([1])]]));
  expect(JSON.parse(source).data).toBe(["FT", "S5", "AAE="].join(""));
  const result = await inspectRouting(source);
  expect(result.stderr).toBe("");
  expect(result.status).toBe(0);
});

it("rejects unexpected routing metadata and still scans its original plaintext", async () => {
  const source = JSON.stringify({ version: 1, chunks: 1, bucket: 21, data: "FT" + "S5AAE=", note: ["private", " D1"].join("") });
  const result = await inspectRouting(source);
  expect(result.status).toBe(1);
  expect(result.stderr).toContain("invalid-search-routing");
  expect(result.stderr).toContain("private-architecture-detail");
});

it("rejects encoded private text that is not a valid numeric routing table", async () => {
  const data = Buffer.from(["private", " D1"].join("")).toString("base64");
  const result = await inspectRouting(JSON.stringify({ version: 1, chunks: 1, bucket: 21, data }));
  expect(result.status).toBe(1);
  expect(result.stderr).toContain("invalid-search-routing");
});
