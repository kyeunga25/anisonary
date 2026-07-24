import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";

const excludedFiles = new Set(["404.html", "_headers", "sw.js"]);
const excludedDirectories = new Set(["mock-posters"]);

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(path));
    } else if (entry.isFile()) {
      files.push(path);
    }
  }

  return files;
}

function publicUrl(relativePath) {
  const normalized = relativePath.split(sep).join("/");
  if (normalized === "index.html") return "/";
  if (normalized.endsWith("/index.html")) {
    return `/${normalized.slice(0, -"index.html".length)}`;
  }
  return `/${normalized}`;
}

export async function collectPrecacheManifest(outputDirectory) {
  const root = resolve(outputDirectory);
  const files = await listFiles(root);
  const manifest = [];

  for (const file of files) {
    const relativePath = relative(root, file);
    const segments = relativePath.split(sep);
    if (excludedFiles.has(relativePath) || excludedDirectories.has(segments[0])) continue;

    const content = await readFile(file);
    manifest.push({
      url: publicUrl(relativePath),
      revision: createHash("sha256").update(content).digest("hex").slice(0, 16)
    });
  }

  return manifest.sort((left, right) => left.url.localeCompare(right.url));
}

export function renderServiceWorker(manifest) {
  const signature = createHash("sha256")
    .update(JSON.stringify(manifest))
    .digest("hex")
    .slice(0, 12);
  const urls = manifest.map(({ url }) => url);

  return `const CACHE_PREFIX = "anisonary-public-";
const CACHE_NAME = \`\${CACHE_PREFIX}${signature}\`;
const PRECACHE_URLS = ${JSON.stringify(urls, null, 2)};

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(PRECACHE_URLS);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        return await fetch(request);
      } catch {
        const cachedPage = await caches.match(url.pathname);
        return cachedPage ?? await caches.match("/offline/") ?? Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cachedAsset = await caches.match(request);
    return cachedAsset ?? fetch(request);
  })());
});
`;
}

export async function generateServiceWorker(outputDirectory = "dist") {
  const root = resolve(outputDirectory);
  const manifest = await collectPrecacheManifest(root);
  const source = renderServiceWorker(manifest);
  await writeFile(resolve(root, "sw.js"), source, "utf8");
  return manifest;
}

const entryPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : undefined;
if (entryPath === import.meta.url) {
  await generateServiceWorker(process.argv[2] ?? "dist");
}
