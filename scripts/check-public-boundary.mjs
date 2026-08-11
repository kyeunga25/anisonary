import { execFileSync } from "node:child_process";
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
  if (bytes.includes(0)) continue;

  const text = bytes.toString("utf8");
  for (const { category, pattern } of secretPatterns) {
    if (pattern.test(text)) findings.push({ category, path: publicPath });
  }
  if (privateArchitectureMarkers.some((marker) => text.includes(marker))) {
    findings.push({ category: "private-architecture-detail", path: publicPath });
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
