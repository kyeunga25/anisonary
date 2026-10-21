import { createHash } from "node:crypto";
import { lstat, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";

const inputDirectories = ["src", "public", "scripts", "tests"];
const inputFiles = [
  "package.json", "package-lock.json", "astro.config.mjs", "tsconfig.json",
  "playwright.config.ts", "vitest.config.ts", "vitest.live.config.ts", "wrangler.jsonc", ".nvmrc"
];
const environmentKeys = [
  "PUBLIC_API_BASE_URL", "PUBLIC_SITE_URL", "PUBLIC_DEFAULT_SEASON",
  "PUBLIC_TIMEZONE", "ANISONARY_REQUIRE_API_DATA", "NODE_ENV"
];
const receiptPath = ".astro/anisonary-build.json";

export async function listFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isSymbolicLink()) throw new Error("Build verification does not accept symbolic-link inputs or artifacts.");
    if (entry.isDirectory()) files.push(...await listFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files.sort();
}

async function digestFiles(root, files, prefix = "") {
  const hash = createHash("sha256").update(prefix);
  for (const file of [...files].sort()) {
    const content = await readFile(file);
    hash.update(JSON.stringify([relative(root, file).replaceAll("\\", "/"), content.length]));
    hash.update(content);
  }
  return hash.digest("hex");
}

export async function canReuseLocalBuild(root = process.cwd(), environment = process.env) {
  if (environment.PUBLIC_API_BASE_URL?.trim()) return false;
  const files = (await readdir(root)).filter((name) =>
    /^\.env(?:\.|$)/.test(name) && name !== ".env.example" && !name.endsWith(".example")
  );
  for (const name of files) {
    // Do not resolve dotenv values or log them. Any actual environment-file
    // assignment could select changing remote data, including an empty value.
    if (!(await lstat(resolve(root, name))).isFile()) return false;
    const source = await readFile(resolve(root, name), "utf8");
    if (/^\s*(?:export\s+)?PUBLIC_API_BASE_URL\s*(?:=|:\s)/m.test(source)) return false;
  }
  return true;
}

export async function buildInputDigest(root = process.cwd(), environment = process.env) {
  const files = [];
  for (const directory of inputDirectories) files.push(...await listFiles(resolve(root, directory)));
  const environmentFiles = (await readdir(root)).filter((name) => /^\.env(?:\.|$)/.test(name));
  for (const name of [...inputFiles, ...environmentFiles]) {
    const path = resolve(root, name);
    try {
      const stat = await lstat(path);
      if (!stat.isFile()) throw new Error("Build configuration must be a regular file.");
      files.push(path);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  // Configuration values and local environment files contribute only to a hash.
  // The receipt stays outside dist and never contains their original values.
  const settings = JSON.stringify([process.version, environmentKeys.map((key) => [key, environment[key] ?? ""])]);
  return digestFiles(root, files, settings);
}

async function artifactDigest(root) {
  for (const name of ["index.html", "_headers", "sw.js", "api/v1/seasons.json"]) {
    if (!(await lstat(resolve(root, name))).isFile()) throw new Error("The verified build is incomplete.");
  }
  return digestFiles(root, await listFiles(root));
}

export async function recordVerifiedBuild(expectedInput, root = process.cwd(), environment = process.env) {
  const artifacts = await artifactDigest(resolve(root, "dist"));
  if (await buildInputDigest(root, environment) !== expectedInput) {
    throw new Error("Build inputs changed during verification. Run npm run build again after edits finish.");
  }
  const path = resolve(root, receiptPath);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify({ version: 1, inputs: expectedInput, artifacts })}\n`);
}

export async function assertVerifiedBuild(root = process.cwd(), environment = process.env) {
  try {
    const receipt = JSON.parse(await readFile(resolve(root, receiptPath), "utf8"));
    if (receipt.version !== 1 || receipt.inputs !== await buildInputDigest(root, environment)
      || receipt.artifacts !== await artifactDigest(resolve(root, "dist"))) throw new Error("Build mismatch");
  } catch {
    throw new Error("No matching verified build. Run npm run build before reusing dist or generating catalogue statistics.");
  }
}
