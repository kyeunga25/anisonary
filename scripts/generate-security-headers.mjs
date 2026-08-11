import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";

const approvedImageOrigins = new Set(["https://s4.anilist.co"]);
const approvedFrameOrigins = new Set(["https://www.youtube-nocookie.com"]);
const dataScriptTypes = new Set(["application/ld+json"]);
const maximumHeaderLineLength = 2_000;

async function listHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listHtmlFiles(path));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      files.push(path);
    }
  }

  return files;
}

function attributeValue(attributes, name) {
  const match = attributes.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i"));
  return match?.[2];
}

function hashSource(content) {
  return `'sha256-${createHash("sha256").update(content).digest("base64")}'`;
}

function assertApprovedImageSource(source, sourceName) {
  try {
    const absoluteSource = source.startsWith("//") ? `https:${source}` : source;
    const origin = new URL(absoluteSource).origin;
    if (!approvedImageOrigins.has(origin)) {
      throw new Error(`${sourceName} uses an unapproved remote image origin: ${origin}`);
    }
  } catch (error) {
    if (error instanceof TypeError) return;
    throw error;
  }
}

function srcsetSources(attributes) {
  const srcset = attributeValue(attributes, "srcset");
  if (!srcset) return [];
  return srcset.split(",")
    .map((candidate) => candidate.trim().split(/\s+/, 1)[0])
    .filter(Boolean);
}

export function inspectHtmlForPolicy(html, sourceName = "HTML output") {
  const scriptHashes = new Set();
  const styleHashes = new Set();

  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attributes, content] = match;
    if (/\bsrc\s*=/.test(attributes)) continue;

    const type = attributeValue(attributes, "type")?.toLowerCase().split(";", 1)[0].trim();
    if (type && dataScriptTypes.has(type)) continue;
    if (content.trim()) scriptHashes.add(hashSource(content));
  }

  for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    const content = match[1];
    if (content.trim()) styleHashes.add(hashSource(content));
  }

  const markupOnly = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "");

  for (const tag of markupOnly.matchAll(/<[a-z][^>]*>/gi)) {
    const unsafeAttribute = tag[0].match(/\s(on[a-z]+|style)\s*=/i)?.[1];
    if (unsafeAttribute) {
      throw new Error(`${sourceName} contains prohibited inline ${unsafeAttribute} attribute`);
    }
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    const source = attributeValue(match[1], "src");
    if (source) assertApprovedImageSource(source, sourceName);
    for (const candidate of srcsetSources(match[1])) {
      assertApprovedImageSource(candidate, sourceName);
    }
  }

  for (const match of html.matchAll(/<source\b([^>]*)>/gi)) {
    for (const candidate of srcsetSources(match[1])) {
      assertApprovedImageSource(candidate, sourceName);
    }
  }

  for (const match of html.matchAll(/\bdata-embed-url\s*=\s*(["'])(.*?)\1/gi)) {
    const source = match[2].replaceAll("&amp;", "&");
    const origin = new URL(source).origin;
    if (!approvedFrameOrigins.has(origin)) {
      throw new Error(`${sourceName} uses an unapproved remote frame origin: ${origin}`);
    }
  }

  return { scriptHashes, styleHashes };
}

export function buildContentSecurityPolicy(scriptHashes, styleHashes) {
  const directives = [
    ["default-src", "'self'"],
    ["base-uri", "'self'"],
    ["object-src", "'none'"],
    ["frame-ancestors", "'none'"],
    ["form-action", "'self'"],
    ["script-src", "'self'", ...[...scriptHashes].sort()],
    ["script-src-attr", "'none'"],
    ["style-src", "'self'", ...[...styleHashes].sort()],
    ["style-src-attr", "'none'"],
    ["img-src", "'self'", ...approvedImageOrigins],
    ["font-src", "'self'"],
    ["connect-src", "'self'"],
    ["media-src", "'none'"],
    ["frame-src", ...approvedFrameOrigins],
    ["worker-src", "'self'"],
    ["manifest-src", "'self'"]
  ];

  return directives.map((directive) => directive.join(" ")).join("; ");
}

export function injectContentSecurityPolicy(headersSource, policy) {
  const newline = headersSource.includes("\r\n") ? "\r\n" : "\n";
  const hasTrailingNewline = headersSource.endsWith("\n");
  const lines = headersSource.replaceAll("\r\n", "\n").split("\n");
  const globalRule = lines.findIndex((line) => line.trim() === "/*");

  if (globalRule === -1) {
    throw new Error("_headers must contain a global /* rule");
  }

  let end = globalRule + 1;
  while (end < lines.length && /^\s+\S/.test(lines[end])) end += 1;

  const existing = lines.findIndex(
    (line, index) => index > globalRule && index < end && /^\s*Content-Security-Policy\s*:/i.test(line)
  );
  const header = `  Content-Security-Policy: ${policy}`;

  if (header.length > maximumHeaderLineLength) {
    throw new Error(`Content-Security-Policy header exceeds ${maximumHeaderLineLength} characters`);
  }

  if (existing === -1) lines.splice(globalRule + 1, 0, header);
  else lines[existing] = header;

  let output = lines.join(newline);
  if (hasTrailingNewline && !output.endsWith(newline)) output += newline;
  return output;
}

export async function generateSecurityHeaders(outputDirectory = "dist") {
  const root = resolve(outputDirectory);
  const htmlFiles = await listHtmlFiles(root);
  const scriptHashes = new Set();
  const styleHashes = new Set();

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const sourceName = relative(root, file).split(sep).join("/");
    const inspected = inspectHtmlForPolicy(html, sourceName);
    inspected.scriptHashes.forEach((hash) => scriptHashes.add(hash));
    inspected.styleHashes.forEach((hash) => styleHashes.add(hash));
  }

  const policy = buildContentSecurityPolicy(scriptHashes, styleHashes);
  const headersPath = resolve(root, "_headers");
  const headersSource = await readFile(headersPath, "utf8");
  await writeFile(headersPath, injectContentSecurityPolicy(headersSource, policy), "utf8");

  return { htmlFiles: htmlFiles.length, policy, scriptHashes, styleHashes };
}

const entryPath = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : undefined;
if (entryPath === import.meta.url) {
  const result = await generateSecurityHeaders(process.argv[2] ?? "dist");
  console.log(
    `Generated CSP for ${result.htmlFiles} HTML files with ${result.scriptHashes.size} script and ${result.styleHashes.size} style hashes.`
  );
}
