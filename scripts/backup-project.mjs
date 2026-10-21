import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { lstat, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { gzipSync, gunzipSync } from "node:zlib";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_SNAPSHOT_BYTES = 128 * 1024 * 1024;
const excludedDirectories = new Set([".git", ".private", ".catalog", ".astro", ".wrangler", "node_modules", "dist", "coverage", "test-results", "playwright-report"]);
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");

function validatePath(path) {
  if (typeof path !== "string" || !path || isAbsolute(path) || path.includes("\\") || path.includes("\0")) throw new Error("Invalid backup path.");
  const parts = path.split("/");
  if (parts.some((part) => !part || part === "." || part === ".." || excludedDirectories.has(part))) throw new Error("Invalid backup path.");
  const name = parts.at(-1);
  if ((/^\.env(?:\.|$)/.test(name) && name !== ".env.example")
    || (/^\.dev\.vars(?:\.|$)/.test(name) && name !== ".dev.vars.example")
    || /\.(?:db|key|pem|sqlite3?|log|trace)$/i.test(name)) throw new Error("Backups accept public project files only.");
}

async function readProjectFile(root, path) {
  validatePath(path);
  let current = root;
  const parts = path.split("/");
  for (let i = 0; i < parts.length; i += 1) {
    current = resolve(current, parts[i]);
    const info = await lstat(current);
    if (i === parts.length - 1 ? !info.isFile() || info.size > MAX_FILE_BYTES : !info.isDirectory()) {
      throw new Error("Backup inputs must be regular public files within the file budget.");
    }
  }
  return readFile(current);
}

function listProjectFiles(root) {
  return [...new Set(execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], {
    cwd: root, encoding: "utf8", maxBuffer: MAX_SNAPSHOT_BYTES
  }).split("\0").filter(Boolean))].sort();
}

export async function createProjectBackup(root = process.cwd()) {
  root = resolve(root);
  execFileSync(process.execPath, [resolve(root, "scripts/check-public-boundary.mjs")], { cwd: root, stdio: "inherit" });
  const paths = listProjectFiles(root);
  const files = [];
  for (const path of paths) {
    const bytes = await readProjectFile(root, path);
    files.push({ path, sha256: digest(bytes), content: bytes.toString("base64") });
  }
  // Include uncommitted and untracked public files, and reject a moving snapshot.
  if (JSON.stringify(paths) !== JSON.stringify(listProjectFiles(root))) throw new Error("Project files changed during backup. Retry after edits finish.");
  for (const file of files) {
    if (digest(await readProjectFile(root, file.path)) !== file.sha256) throw new Error("Project files changed during backup. Retry after edits finish.");
  }
  const snapshot = Buffer.from(JSON.stringify({ format: "anisonary-project-backup", version: 1, createdAt: new Date().toISOString(), files }));
  if (snapshot.length > MAX_SNAPSHOT_BYTES) throw new Error("Project backup exceeds the snapshot budget.");
  const directory = resolve(root, ".private/backups");
  await mkdir(directory, { recursive: true, mode: 0o700 });
  const path = resolve(directory, `project-${new Date().toISOString().replaceAll(":", "-")}-${randomUUID().slice(0, 8)}.json.gz`);
  await writeFile(path, gzipSync(snapshot), { flag: "wx", mode: 0o600 });
  await verifyProjectBackup(path);
  return path;
}

export async function verifyProjectBackup(path) {
  const snapshot = JSON.parse(gunzipSync(await readFile(path), { maxOutputLength: MAX_SNAPSHOT_BYTES }).toString("utf8"));
  if (snapshot.format !== "anisonary-project-backup" || snapshot.version !== 1 || !Array.isArray(snapshot.files) || !snapshot.files.length) {
    throw new Error("Unsupported or empty project backup.");
  }
  const seen = new Set();
  for (const file of snapshot.files) {
    validatePath(file.path);
    if (seen.has(file.path) || typeof file.content !== "string" || !/^[A-Za-z0-9+/]*={0,2}$/.test(file.content)) throw new Error("Invalid backup entry.");
    const bytes = Buffer.from(file.content, "base64");
    if (bytes.length > MAX_FILE_BYTES || digest(bytes) !== file.sha256) throw new Error("Backup checksum mismatch.");
    seen.add(file.path);
  }
  return snapshot;
}

export async function restoreProjectBackup(path, destination) {
  const snapshot = await verifyProjectBackup(path);
  const root = resolve(destination);
  // A new directory prevents accidental replacement of an existing checkout.
  await mkdir(root);
  for (const file of snapshot.files) {
    const target = resolve(root, file.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, Buffer.from(file.content, "base64"), { flag: "wx" });
  }
  return snapshot.files.length;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try {
    const [mode, path, destination, ...extra] = process.argv.slice(2);
    if (extra.length || (mode === "--restore" ? !path || !destination : destination)) throw new Error("Use backup, backup:check -- <file>, or backup:restore -- <file> <new-directory>.");
    if (mode === "--check" && path) console.log(`Backup verified: ${(await verifyProjectBackup(path)).files.length} public project files.`);
    else if (mode === "--restore" && path && destination) console.log(`Restored ${await restoreProjectBackup(path, destination)} public project files to a new directory.`);
    else if (!mode) console.log(`Local project backup: ${await createProjectBackup()}`);
    else throw new Error("Use backup, backup:check -- <file>, or backup:restore -- <file> <new-directory>.");
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
