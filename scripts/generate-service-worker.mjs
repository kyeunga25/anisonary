import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";

const precacheFiles = new Set(["offline/index.html", "favicon.svg", "manifest.webmanifest"]);
const MAX_PRECACHE_BYTES = 512 * 1024;

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
  let totalBytes = 0;

  for (const file of files) {
    const relativePath = relative(root, file);
    const normalized = relativePath.split(sep).join("/");
    if (!precacheFiles.has(normalized) && !normalized.startsWith("_astro/")) continue;

    const content = await readFile(file);
    totalBytes += content.length;
    if (totalBytes > MAX_PRECACHE_BYTES) throw new Error("Offline fallback exceeds the 512 KiB precache budget.");
    manifest.push({
      url: publicUrl(relativePath),
      revision: createHash("sha256").update(content).digest("hex").slice(0, 16)
    });
  }

  if (!manifest.some(({ url }) => url === "/offline/")) throw new Error("The offline fallback page is missing.");
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
const NAVIGATION_TIMEOUT_MS = 5000;
const PRECACHE_URLS = ${JSON.stringify(urls, null, 2)};

async function fetchNavigation(request) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), NAVIGATION_TIMEOUT_MS);
  try {
    return await fetch(request, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

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
        return await fetchNavigation(request);
      } catch {
        const cache = await caches.open(CACHE_NAME);
        return await cache.match("/offline/") ?? Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cachedAsset = await cache.match(request);
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
