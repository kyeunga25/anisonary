import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join, relative, resolve } from "node:path";

const MAX_FILE_BYTES = 5 * 1024 * 1024;
const IMAGE_EXTENSIONS = new Set([".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const PROHIBITED_ARTIFACT_EXTENSIONS = new Set([".db", ".key", ".log", ".map", ".pem", ".sqlite", ".sqlite3"]);
const PROHIBITED_ARTIFACT_NAMES = new Set([".dev.vars", ".env", ".git", ".wrangler"]);
const binaryGeneratorMarker = Buffer.from(["Open", "AI"].join(""), "utf8");

const secretPatterns = [
  {
    category: "private-key",
    pattern: new RegExp(["-----BEGIN ", "(?:RSA |EC |OPENSSH )?", "PRIVATE KEY-----"].join(""), "u")
  },
  {
    category: "github-token",
    pattern: new RegExp(`\\b(?:${["gh", "[pousr]_"].join("")}[A-Za-z0-9_]{20,}|${["github", "_pat_"].join("")}[A-Za-z0-9_]{20,})\\b`, "u")
  },
  {
    category: "openai-token",
    pattern: new RegExp(`\\b${["s", "k-"].join("")}(?:proj-)?[A-Za-z0-9_-]{20,}\\b`, "u")
  },
  {
    category: "aws-access-key",
    pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/u
  },
  {
    category: "credentialed-database-url",
    pattern: /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis):\/\/[^\s:/@]+:[^\s@]+@[^\s]+/iu
  },
  {
    category: "cloud-resource-id",
    pattern: /\b(?:account|zone|database|namespace|deployment)[_-]?id\s*[:=]\s*["']?[0-9a-f]{32,64}["']?/iu
  },
  {
    category: "personal-path",
    pattern: /\/Users\/[^/\s"']+/u
  },
  {
    category: "personal-email",
    pattern: new RegExp(`\\b[A-Z0-9._%+-]+@(?:${["gmail", "outlook", "icloud", "yahoo", "protonmail"].join("|")})\\.[A-Z]{2,}\\b`, "iu")
  }
];

const privateArchitectureMarkers = [
  ["CATALOG", "_EXPORT_ORIGIN"].join(""),
  ["CATALOG", "_ACCESS_CLIENT_ID"].join(""),
  ["CATALOG", "_ACCESS_CLIENT_SECRET"].join(""),
  ["ANISONARY", "_SNAPSHOT_PATH"].join(""),
  ["ANISONARY", "_REQUIRE_RELEASE_DATA"].join(""),
  ["private", " D1"].join(""),
  ["private", " R2"].join(""),
  ["Access", " service token"].join(""),
  ["FT", "S5"].join(""),
  ["row", " version"].join("")
];

const findings = [];
const artifactArgument = process.argv[2];
const artifactRoot = artifactArgument ? resolve(artifactArgument) : undefined;

function listArtifactFiles(root) {
  const files = [];
  const pending = [root];

  while (pending.length > 0) {
    const directory = pending.pop();
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const fullPath = join(directory, entry.name);
      const publicPath = relative(process.cwd(), fullPath);
      if (entry.isSymbolicLink()) {
        findings.push({ category: "artifact-symbolic-link", path: publicPath });
      } else if (entry.isDirectory()) {
        if (PROHIBITED_ARTIFACT_NAMES.has(entry.name)) {
          findings.push({ category: "prohibited-artifact-path", path: publicPath });
        } else {
          pending.push(fullPath);
        }
      } else if (entry.isFile()) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
}

let files;
if (artifactRoot) {
  try {
    if (!statSync(artifactRoot).isDirectory()) throw new Error("not a directory");
  } catch {
    console.error(JSON.stringify({ status: "blocked", findings: [{ category: "artifact-directory-missing", path: artifactArgument }] }, null, 2));
    process.exit(1);
  }
  files = listArtifactFiles(artifactRoot);
} else {
  const listed = execFileSync(
    "git",
    ["ls-files", "--cached", "--others", "--exclude-standard", "-z"],
    { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 }
  );
  files = listed.split("\0").filter(Boolean).sort();
}

let scanned = 0;

// Only generated numeric routing payloads can be excluded from text matching.
// Keep this self-contained: backup fixtures copy this checker without imports.
const routingPaths = new Map();
const verifiedRoutingPaths = new Set();
let routingManifestValid = false;
const exactKeys = (value, keys) => value && typeof value === "object" && !Array.isArray(value)
  && Object.keys(value).length === keys.length && keys.every((key) => Object.hasOwn(value, key));
const integer = (value, minimum, maximum) => Number.isSafeInteger(value) && value >= minimum && value <= maximum;
const chunkPath = /^\/search-index\/([a-f0-9]{64})\.json$/u;
if (artifactRoot) {
  try {
    const html = readFileSync(join(artifactRoot, "songs/index.html"), "utf8");
    const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/giu)]
      .filter((match) => /\bdata-search-manifest(?:\s|=|$)/u.test(match[1]));
    if (scripts.length !== 1 || !/\btype\s*=\s*["']application\/json["']/iu.test(scripts[0][1])) throw new Error();
    const source = scripts[0][2];
    const value = JSON.parse(source);
    if (Buffer.byteLength(source) > 64 * 1024
      || !exactKeys(value, ["version", "bytes", "decodedBytes", "entries", "chunks", "routing"])
      || value.version !== 3 || !Array.isArray(value.chunks) || !integer(value.chunks.length, 1, 10000)
      || !integer(value.bytes, 0, 8 * 1024 * 1024) || !integer(value.decodedBytes, 0, 8 * 1024 * 1024)
      || !integer(value.entries, 0, 10000)) throw new Error();
    const paths = new Set();
    for (const chunk of value.chunks) {
      if (!exactKeys(chunk, ["url", "bytes", "decodedBytes", "entries", "seasons"])
        || typeof chunk.url !== "string" || !chunkPath.test(chunk.url) || paths.has(chunk.url)
        || !integer(chunk.bytes, 1, 256 * 1024) || !integer(chunk.decodedBytes, 2, 256 * 1024)
        || !integer(chunk.entries, 1, 10000) || !Array.isArray(chunk.seasons) || !chunk.seasons.length
        || chunk.seasons.some((season) => typeof season !== "string" || !/^\d{4}-(winter|spring|summer|fall)$/u.test(season))) throw new Error();
      paths.add(chunk.url);
    }
    for (const key of ["bytes", "decodedBytes", "entries"]) {
      if (value.chunks.reduce((sum, chunk) => sum + chunk[key], 0) !== value[key]) throw new Error();
    }
    const routing = value.routing;
    if (!exactKeys(routing, ["version", "bytes", "buckets"]) || routing.version !== 1
      || !integer(routing.bytes, 0, 8 * 1024 * 1024 - value.bytes)
      || !Array.isArray(routing.buckets) || routing.buckets.length > 64) throw new Error();
    const buckets = new Set();
    for (const bucket of routing.buckets) {
      if (!exactKeys(bucket, ["bucket", "url", "bytes", "records"])
        || !integer(bucket.bucket, 0, 63) || buckets.has(bucket.bucket)
        || typeof bucket.url !== "string" || !chunkPath.test(bucket.url) || paths.has(bucket.url)
        || !integer(bucket.bytes, 1, 256 * 1024) || !integer(bucket.records, 1, 256 * 1024)
        || bucket.records * (4 + Math.ceil(value.chunks.length / 8)) > 256 * 1024) throw new Error();
      buckets.add(bucket.bucket);
      paths.add(bucket.url);
      routingPaths.set(bucket.url, { ...bucket, chunks: value.chunks.length });
    }
    if (routing.buckets.reduce((sum, bucket) => sum + bucket.bytes, 0) !== routing.bytes) throw new Error();
    routingManifestValid = true;
  } catch {
    // No exemption is available without the exact published manifest contract.
  }
}

function routingMetadata(file, bytes, text) {
  if (!artifactRoot) return undefined;
  const url = `/${relative(artifactRoot, file).split("\\").join("/")}`;
  if (!chunkPath.test(url)) return undefined;
  let value;
  try { value = JSON.parse(text); } catch { /* Invalid candidates are scanned raw below. */ }
  const descriptor = routingPaths.get(url);
  if (!descriptor && !(value && !Array.isArray(value)
    && ["data", "chunks", "bucket"].some((key) => Object.hasOwn(value, key)))
    && !/"data"\s*:/u.test(text)) return undefined;
  try {
    if (!routingManifestValid || !descriptor || !exactKeys(value, ["version", "chunks", "bucket", "data"])
      || value.version !== 1 || value.chunks !== descriptor.chunks || value.bucket !== descriptor.bucket
      || typeof value.data !== "string" || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u.test(value.data)
      || text !== JSON.stringify(value) || bytes.length !== descriptor.bytes
      || createHash("sha256").update(bytes).digest("hex") !== chunkPath.exec(url)[1]) throw new Error();
    const data = Buffer.from(value.data, "base64");
    const stride = 4 + Math.ceil(value.chunks / 8);
    if (data.toString("base64") !== value.data || data.length !== descriptor.records * stride) throw new Error();
    let previous = -1;
    for (let offset = 0; offset < data.length; offset += stride) {
      const feature = data.readUInt32LE(offset);
      const memberships = data.subarray(offset + 4, offset + stride);
      if (feature <= previous || feature % 64 !== value.bucket || !memberships.some(Boolean)
        || (value.chunks % 8 && memberships.at(-1) >>> (value.chunks % 8))) throw new Error();
      previous = feature;
    }
    verifiedRoutingPaths.add(url);
    return JSON.stringify({ ...value, data: "" });
  } catch {
    findings.push({ category: "invalid-search-routing", path: relative(process.cwd(), file) });
    return undefined;
  }
}

for (const file of files) {
  const publicPath = artifactRoot ? relative(process.cwd(), file) : file;
  if (artifactRoot && (
    PROHIBITED_ARTIFACT_EXTENSIONS.has(extname(file).toLowerCase())
    || PROHIBITED_ARTIFACT_NAMES.has(basename(file))
    || basename(file).startsWith(".env.")
  )) {
    findings.push({ category: "prohibited-artifact-file", path: publicPath });
  }

  let size;
  try {
    size = statSync(file).size;
  } catch {
    continue;
  }
  if (size > MAX_FILE_BYTES) {
    findings.push({ category: "oversized-unreviewed-file", path: publicPath });
    continue;
  }

  const bytes = readFileSync(file);
  scanned += 1;
  if (IMAGE_EXTENSIONS.has(extname(file).toLowerCase()) && bytes.includes(binaryGeneratorMarker)) {
    findings.push({ category: "generated-image-metadata", path: publicPath });
  }
  const rawText = bytes.toString("utf8");
  const text = routingMetadata(file, bytes, rawText) ?? rawText;
  if (bytes.includes(0) && !(artifactRoot && chunkPath.test(`/${relative(artifactRoot, file).split("\\").join("/")}`))) continue;
  for (const { category, pattern } of secretPatterns) {
    if (pattern.test(text)) findings.push({ category, path: publicPath });
  }
  if (privateArchitectureMarkers.some((marker) => text.includes(marker))) {
    findings.push({ category: "private-architecture-detail", path: publicPath });
  }
}

if (routingManifestValid) {
  for (const url of routingPaths.keys()) {
    if (!verifiedRoutingPaths.has(url)) findings.push({ category: "invalid-search-routing", path: url });
  }
}

if (!artifactRoot && files.some((file) => file === ".private" || file.startsWith(".private/"))) {
  findings.push({ category: "tracked-private-workspace", path: ".private/" });
}

if (findings.length > 0) {
  console.error(JSON.stringify({ status: "blocked", findings }, null, 2));
  process.exitCode = 1;
} else {
  const scope = artifactRoot ? "built artifact" : "repository";
  console.log(`Public boundary check passed for ${scanned} ${scope} files.`);
}
