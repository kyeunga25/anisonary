import { createHash } from "node:crypto";
import { gzipSync } from "node:zlib";
import { expect, it, vi } from "vitest";
import { CuratedProvider } from "@/data/curated-provider";
import { loadCatalogSearchData } from "@/data/page-data";
import { buildCatalogSearchAssets } from "@/data/catalog-search-assets";
import { MAX_SEARCH_CHUNK_BYTES, MAX_SEARCH_INDEX_BYTES, MAX_SEARCH_MANIFEST_BYTES } from "@/data/catalog-limits";
import { createCatalogIndexLoader } from "@/scripts/catalog-index-loader";
import { buildCatalogSearchIndex, serializeCatalogSearchIndex } from "@/utils/catalog-search-index";
import { parseSearchIndexManifest, selectSearchChunks } from "@/utils/catalog-search-manifest";
import { decodeCatalogSearchChunk, encodeCatalogSearchChunk } from "@/utils/catalog-search-codec";
import { SEARCH_ROUTING_BUCKETS, catalogSearchFeatureHash, catalogSearchQueryFeatures, decodeSearchRoutingBucket, searchRoutingMembership } from "@/utils/catalog-search-routing";
import { getPlaylistRows, playlistRowHref, type PlaylistOptions } from "@/utils/song-playlist";

const fixture = loadCatalogSearchData(new CuratedProvider(), true).then((data) => {
  const index = buildCatalogSearchIndex(data.entries);
  return { index, ...buildCatalogSearchAssets(index) };
});
const defaults: PlaylistOptions = { query: "", scope: "all", type: "all", year: "", quarter: "", sort: "newest", videoOnly: false, weekday: "", includeEmpty: true };

it("partitions the reviewed index without changing records, quarterly uses, sorting or song anchors", async () => {
  const { index, chunks, manifest, routes } = await fixture;
  const sources = new Map(chunks.map((chunk) => [`/search-index/${chunk.digest}.json`, chunk.content]));
  const joined = (selected: typeof manifest.chunks) => selected.flatMap((chunk) => decodeCatalogSearchChunk(sources.get(chunk.url)!, chunk.entries, chunk.decodedBytes));
  expect(serializeCatalogSearchIndex(joined(manifest.chunks))).toBe(serializeCatalogSearchIndex(index));
  expect(manifest.bytes).toBeLessThanOrEqual(MAX_SEARCH_INDEX_BYTES);
  expect(manifest.bytes + manifest.routing.bytes).toBeLessThanOrEqual(MAX_SEARCH_INDEX_BYTES);
  expect(manifest.decodedBytes).toBeLessThanOrEqual(MAX_SEARCH_INDEX_BYTES);
  expect(Buffer.byteLength(JSON.stringify(manifest))).toBeLessThanOrEqual(MAX_SEARCH_MANIFEST_BYTES);
  for (const route of routes) {
    expect(Buffer.byteLength(route.content)).toBe(route.bytes);
    expect(route.bytes).toBeLessThanOrEqual(MAX_SEARCH_CHUNK_BYTES);
    expect(route.url).toContain(createHash("sha256").update(route.content).digest("hex"));
  }
  let legacyBytes = 0;
  let legacyGzip = 0;
  let packedGzip = 0;
  for (const chunk of manifest.chunks) {
    const source = sources.get(chunk.url)!;
    expect(Buffer.byteLength(source)).toBe(chunk.bytes);
    expect(chunk.bytes).toBeLessThanOrEqual(MAX_SEARCH_CHUNK_BYTES);
    expect(chunk.decodedBytes).toBeLessThanOrEqual(MAX_SEARCH_CHUNK_BYTES);
    expect(chunk.url).toContain(createHash("sha256").update(source).digest("hex"));
    const legacy = serializeCatalogSearchIndex(decodeCatalogSearchChunk(source, chunk.entries, chunk.decodedBytes));
    legacyBytes += Buffer.byteLength(legacy);
    legacyGzip += gzipSync(legacy).byteLength;
    packedGzip += gzipSync(source).byteLength;
  }
  expect(manifest.decodedBytes).toBe(legacyBytes);
  expect(manifest.bytes).toBeLessThan(legacyBytes);
  expect(packedGzip).toBeLessThan(legacyGzip);
  const links = (data: typeof index, options: PlaylistOptions) => getPlaylistRows(data, options).map((row) => playlistRowHref(row, true));
  for (const sort of ["newest", "oldest", "song", "anime", "artist"] as const) {
    expect(links(joined(manifest.chunks), { ...defaults, sort })).toEqual(links(index, { ...defaults, sort }));
  }
  for (const season of new Set(index.flatMap((anime) => anime.seasons.map((season) => season.id)))) {
    const [year, quarter] = season.split("-") as [string, string];
    const options = { ...defaults, year, quarter };
    expect(links(joined(selectSearchChunks(manifest, year, quarter)), options), season).toEqual(links(index, options));
  }
  // Each chunk path depends only on its content, including after a metadata edit.
  const edited = structuredClone(index);
  edited[0]!.titleJa += " revised";
  const updated = buildCatalogSearchAssets(edited);
  expect(updated.manifest.chunks.some((chunk) => sources.has(chunk.url))).toBe(true);
  expect(updated.manifest.chunks[0]!.url).not.toBe(manifest.chunks[0]!.url);
  const editedDecoded = updated.chunks.flatMap((chunk) => decodeCatalogSearchChunk(chunk.content, chunk.entries, chunk.decodedBytes));
  expect(serializeCatalogSearchIndex(editedDecoded)).toBe(serializeCatalogSearchIndex(edited));
});

it("conservatively routes every indexed substring and preserves complete multilingual search results", async () => {
  const { index, manifest, chunks, routes } = await fixture;
  const tables = new Map(routes.map((route) => [route.bucket, decodeSearchRoutingBucket(route.content, route, chunks.length)]));
  // Exhaust all 1–4 UTF-16-unit features in every searchable field. Longer
  // queries use a subset of these features, so collisions can only overfetch.
  let offset = 0;
  let missing = 0;
  manifest.chunks.forEach((chunk, position) => {
    const features = new Set<number>();
    for (const anime of index.slice(offset, offset + chunk.entries)) {
      for (const text of [anime.searchText, ...anime.themes.flatMap((theme) => [theme.searchText, theme.titleSearchText, theme.creatorSearchText])]) {
        // Enumerate independently of the builder's feature iterator, so an
        // omitted character length or position cannot make both sides pass.
        for (let start = 0; start < text.length; start += 1) {
          for (let end = start + 1; end <= Math.min(text.length, start + 4); end += 1) {
            const part = text.slice(start, end);
            if (!part.includes(" ")) features.add(catalogSearchFeatureHash(part));
          }
        }
      }
    }
    for (const feature of features) {
      const bits = searchRoutingMembership(tables.get(feature % SEARCH_ROUTING_BUCKETS)!, feature);
      if (!(bits[position >>> 3]! & (1 << (position & 7)))) missing += 1;
    }
    offset += chunk.entries;
  });
  expect(missing).toBe(0);
  const sources = new Map([...chunks, ...routes].map((asset) => [`/search-index/${asset.digest}.json`, asset.content]));
  const links = (data: typeof index, options: PlaylistOptions) => getPlaylistRows(data, options).map((row) => playlistRowHref(row, true));
  const queries = ["KICK BACK", "ＫＩＣＫ　ＢＡＣＫ", "幼女 myth", "米津", "米津玄師", "葬送のフリーレン", "YOASOBI", "アイドル", "a", "開", "opening", "片尾曲", "主題曲", "op ed", "doesnotexistxyz", "\ud83d", "   ", ""];
  for (const query of queries) {
    const requested: string[] = [];
    const loader = createCatalogIndexLoader(JSON.stringify(manifest), async (input) => {
      requested.push(String(input));
      return new Response(sources.get(String(input))!, { headers: { "Content-Type": "application/json" } });
    });
    const selected = await loader.load("", "", query);
    expect(requested.filter((path) => routes.some((route) => route.url === path)).length).toBeLessThanOrEqual(4);
    for (const scope of ["all", "anime", "songs", "creators"] as const) {
      for (const sort of ["newest", "oldest", "song", "anime", "artist"] as const) {
        const options = { ...defaults, query, scope, sort };
        expect(links(selected, options), `${query}/${scope}/${sort}`).toEqual(links(index, options));
      }
    }
    if (query === "KICK BACK") {
      const dataRequests = requested.filter((path) => manifest.chunks.some((chunk) => chunk.url === path));
      expect(dataRequests.length).toBeGreaterThan(0);
      expect(dataRequests.length).toBeLessThan(chunks.length);
      const compressedBytes = requested.reduce((sum, path) => sum + gzipSync(sources.get(path)!).byteLength, 0);
      expect(compressedBytes).toBeLessThan(chunks.reduce((sum, chunk) => sum + gzipSync(chunk.content).byteLength, 0));
      const requests = requested.length;
      await loader.load("", "", query);
      expect(requested).toHaveLength(requests);
      expect(await loader.load("", "")).toEqual(index);
      expect(new Set(requested).size).toBe(requested.length);
    }
    if (query === "doesnotexistxyz") expect(requested.every((path) => routes.some((route) => route.url === path))).toBe(true);
  }
  for (const options of [
    { ...defaults, query: "幼女 myth", year: "2017", quarter: "winter", type: "OP" as const },
    { ...defaults, query: "米津", videoOnly: true, scope: "creators" as const, sort: "artist" as const },
    { ...defaults, query: "a", year: "2026", quarter: "summer", weekday: "1", includeEmpty: false }
  ]) {
    const loader = createCatalogIndexLoader(JSON.stringify(manifest), async (input) => new Response(sources.get(String(input))!, { headers: { "Content-Type": "application/json" } }));
    expect(links(await loader.load(options.year, options.quarter, options.query), options)).toEqual(links(index, options));
  }
  expect(catalogSearchQueryFeatures("one two three four five six seven eight").length).toBeLessThanOrEqual(4);
}, 20_000);

it("routes literal overrides, empty works and UTF-16 substrings without losing cross-field matches", async () => {
  const { index } = await fixture;
  const first = structuredClone(index.find((anime) => anime.themes.length)!);
  const firstYear = Math.max(...first.seasons.map((season) => season.year));
  const second = structuredClone(index.find((anime) => Math.max(...anime.seasons.map((season) => season.year)) !== firstYear)!);
  first.searchText = "境界😀 astralprefix i̇stanbul";
  first.themes[0]!.searchText = "mixedneedle";
  first.themes[0]!.titleSearchText = "完整歌名測試";
  first.themes[0]!.creatorSearchText = "創作者測試";
  second.themes = [];
  second.searchText = "empty-work-name";
  const original = [first, second];
  const { manifest, chunks, routes } = buildCatalogSearchAssets(original);
  const sources = new Map([...chunks, ...routes].map((asset) => [`/search-index/${asset.digest}.json`, asset.content]));
  expect(chunks).toHaveLength(2);
  for (const query of ["界😀", "😀", "\ud83d", "境界 mixedneedle", "完整歌名", "創作者", "empty-work", "i̇stanbul"]) {
    const loader = createCatalogIndexLoader(JSON.stringify(manifest), async (input) => new Response(sources.get(String(input))!, { headers: { "Content-Type": "application/json" } }));
    const selected = await loader.load("", "", query);
    for (const scope of ["all", "anime", "songs", "creators"] as const) {
      const options = { ...defaults, query, scope };
      expect(getPlaylistRows(selected, options)).toEqual(getPlaylistRows(original, options));
    }
  }
});

it("rejects invalid routing metadata and corrupt routing files, then retries without partial results", async () => {
  const { manifest, chunks, routes } = await fixture;
  const first = routes[0]!;
  expect(() => parseSearchIndexManifest(JSON.stringify({ ...manifest, routing: { ...manifest.routing, buckets: [{ ...first, url: "https://unapproved.example/route.json" }] } }))).toThrow("Invalid search routing bucket");
  expect(() => parseSearchIndexManifest(JSON.stringify({ ...manifest, routing: { ...manifest.routing, bytes: MAX_SEARCH_INDEX_BYTES } }))).toThrow("Invalid search routing manifest");
  expect(() => decodeSearchRoutingBucket(first.content, first, chunks.length + 1)).toThrow("Invalid search routing bucket");
  const zeroed = JSON.parse(first.content);
  const binary = Buffer.from(zeroed.data, "base64");
  binary.fill(0, 4, 4 + Math.ceil(chunks.length / 8));
  zeroed.data = binary.toString("base64");
  expect(() => decodeSearchRoutingBucket(JSON.stringify(zeroed), first, chunks.length)).toThrow("Invalid search routing bucket");
  const sources = new Map([...chunks, ...routes].map((asset) => [`/search-index/${asset.digest}.json`, asset.content]));
  const failed = routes.find((route) => route.bucket === catalogSearchQueryFeatures("KICK BACK")[0]! % SEARCH_ROUTING_BUCKETS)!;
  let corrupt = true;
  const requests: Array<{ url: string; cache: RequestCache | undefined }> = [];
  const loader = createCatalogIndexLoader(JSON.stringify(manifest), async (input, init) => {
    const url = String(input);
    requests.push({ url, cache: init?.cache });
    const source = sources.get(url)!;
    return new Response(corrupt && url === failed.url ? ` ${source.slice(1)}` : source, { headers: { "Content-Type": "application/json" } });
  });
  await expect(loader.load("", "", "KICK BACK")).rejects.toThrow("checksum mismatch");
  expect(requests.every(({ url }) => routes.some((route) => route.url === url))).toBe(true);
  corrupt = false;
  const selected = await loader.load("", "", "KICK BACK");
  const { index } = await fixture;
  expect(getPlaylistRows(selected, { ...defaults, query: "KICK BACK" })).toEqual(getPlaylistRows(index, { ...defaults, query: "KICK BACK" }));
  expect(requests.filter(({ url }) => url === failed.url).map(({ cache }) => cache)).toEqual(["default", "reload"]);
});

it("loads only requested memberships, shares overlapping requests, and bounds concurrent fetches", async () => {
  const { manifest, chunks, routes } = await fixture;
  const sources = new Map([...chunks, ...routes].map((chunk) => [`/search-index/${chunk.digest}.json`, chunk.content]));
  const requests: string[] = [];
  let active = 0;
  let peak = 0;
  const fetcher: typeof fetch = async (input, init) => {
    const url = String(input);
    requests.push(url);
    expect(init?.credentials).toBe("omit");
    expect(init?.referrerPolicy).toBe("no-referrer");
    expect(init?.redirect).toBe("error");
    active += 1;
    peak = Math.max(peak, active);
    await new Promise((ready) => setTimeout(ready, 2));
    active -= 1;
    return new Response(sources.get(url)!, { headers: { "Content-Type": "application/json" } });
  };
  const loader = createCatalogIndexLoader(JSON.stringify(manifest), fetcher);
  expect(requests).toEqual([]);
  await loader.load("2020", "winter");
  expect(requests).toEqual(selectSearchChunks(manifest, "2020", "winter").map((chunk) => chunk.url));
  expect(requests.length).toBeLessThan(chunks.length);
  await Promise.all([loader.load("", "", "KICK BACK"), loader.load("", "", "幼女 myth"), loader.load("", ""), loader.load("2026", "summer"), loader.load("2020", "winter")]);
  expect(requests.filter((path) => manifest.chunks.some((chunk) => chunk.url === path))).toHaveLength(chunks.length);
  expect(new Set(requests).size).toBe(requests.length);
  expect(peak).toBeLessThanOrEqual(4);
});

it("rejects unsafe manifests and oversized or mismatched content, then allows a fresh retry", async () => {
  const { manifest, chunks } = await fixture;
  const first = manifest.chunks[0]!;
  const single = { ...manifest, entries: first.entries, bytes: first.bytes, decodedBytes: first.decodedBytes, chunks: [first] };
  expect(() => parseSearchIndexManifest(JSON.stringify({ ...single, chunks: [{ ...first, url: "https://unapproved.example/index.json" }] }))).toThrow("Invalid search chunk");
  expect(() => parseSearchIndexManifest(JSON.stringify({ ...single, bytes: MAX_SEARCH_INDEX_BYTES + 1 }))).toThrow("Invalid search manifest");
  expect(() => parseSearchIndexManifest(JSON.stringify({ ...single, decodedBytes: MAX_SEARCH_INDEX_BYTES + 1 }))).toThrow("Invalid search manifest");
  const original = chunks[0]!.content;
  const caches: Array<RequestCache | undefined> = [];
  let corrupt = true;
  const fetcher: typeof fetch = async (_input, init) => {
    caches.push(init?.cache);
    return new Response(corrupt ? ` ${original.slice(1)}` : original, { headers: { "Content-Type": "application/json" } });
  };
  const loader = createCatalogIndexLoader(JSON.stringify(single), fetcher);
  await expect(loader.load("", "")).rejects.toThrow("checksum mismatch");
  corrupt = false;
  expect(await loader.load("", "")).toEqual(decodeCatalogSearchChunk(original, first.entries, first.decodedBytes));
  expect(caches).toEqual(["default", "reload"]);
  const oversized = createCatalogIndexLoader(JSON.stringify(single), async () => new Response(`${original} `, { headers: { "Content-Type": "application/json" } }));
  await expect(oversized.load("", "")).rejects.toThrow("byte limit exceeded");
});

it("preserves literal overrides and bounds decoded expansion before accepting a compact index", async () => {
  const { index, chunks } = await fixture;
  const sample = structuredClone(index.find((anime) => anime.themes.length)!);
  sample.searchText = "既有搜尋文字";
  const theme = sample.themes[0]!;
  theme.id = "legacy-use-id";
  theme.searchText = "既有多語搜尋 ＡＢＣ";
  theme.titleSearchText = "別名與其他發行品";
  theme.creatorSearchText = "既有創作者名義";
  const legacy = serializeCatalogSearchIndex([sample]);
  const source = encodeCatalogSearchChunk([sample]);
  expect(serializeCatalogSearchIndex(decodeCatalogSearchChunk(source, 1, Buffer.byteLength(legacy)))).toBe(legacy);
  const first = chunks[0]!;
  const expected = serializeCatalogSearchIndex(decodeCatalogSearchChunk(first.content, first.entries, first.decodedBytes));
  const localeLower = String.prototype.toLocaleLowerCase;
  const locale = vi.spyOn(String.prototype, "toLocaleLowerCase").mockImplementation(function (this: string) { return localeLower.call(this, "tr"); });
  try {
    expect(serializeCatalogSearchIndex(decodeCatalogSearchChunk(first.content, first.entries, first.decodedBytes))).toBe(expected);
  } finally { locale.mockRestore(); }
  expect(() => decodeCatalogSearchChunk(first.content, first.entries, MAX_SEARCH_CHUNK_BYTES + 1)).toThrow("decoding budget");
  expect(() => decodeCatalogSearchChunk(first.content, first.entries, first.decodedBytes - 1)).toThrow();
  const expanded = JSON.parse(first.content);
  expanded.anime[0][7] = Array(2_000).fill(0);
  expect(() => decodeCatalogSearchChunk(JSON.stringify(expanded), first.entries, first.decodedBytes)).toThrow("decoding budget");
  expanded.anime[0][7] = [-1];
  expect(() => decodeCatalogSearchChunk(JSON.stringify(expanded), first.entries, first.decodedBytes)).toThrow("Invalid packed search chunk");
});
