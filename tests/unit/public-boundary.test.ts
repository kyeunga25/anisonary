import { execFileSync, spawnSync } from "node:child_process";
import { mkdtemp, rmdir, unlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { afterEach, describe, expect, it } from "vitest";

const checker = resolve("scripts/check-public-boundary.mjs");
const temporaryFiles: Array<{ directory: string; file: string }> = [];

async function artifactFile(name: string, contents: string): Promise<string> {
  const directory = await mkdtemp(join(tmpdir(), "anisonary-public-boundary-"));
  const file = join(directory, name);
  await writeFile(file, contents, "utf8");
  temporaryFiles.push({ directory, file });
  return directory;
}

afterEach(async () => {
  while (temporaryFiles.length > 0) {
    const item = temporaryFiles.pop();
    if (!item) continue;
    await unlink(item.file);
    await rmdir(item.directory);
  }
});

describe("public artifact boundary", () => {
  it("accepts a small public artifact", async () => {
    const directory = await artifactFile("index.html", "<!doctype html><title>Public catalogue</title>");

    const output = execFileSync(process.execPath, [checker, directory], { encoding: "utf8" });

    expect(output).toContain("Public boundary check passed for 1 built artifact files.");
  });

  it("rejects source maps and private local paths without echoing file contents", async () => {
    const privatePath = ["", "Users", "example", "private-data"].join("/");
    const directory = await artifactFile("bundle.js.map", privatePath);

    const result = spawnSync(process.execPath, [checker, directory], { encoding: "utf8" });

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("prohibited-artifact-file");
    expect(result.stderr).toContain("personal-path");
    expect(result.stderr).not.toContain(privatePath);
  });
});
