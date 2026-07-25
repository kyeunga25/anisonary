import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";

const [rootArgument, portArgument] = process.argv.slice(2);

if (!rootArgument || !portArgument) {
  throw new Error("Usage: node static-server.mjs <root> <port>");
}

const root = resolve(rootArgument);
const port = Number(portArgument);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webp": "image/webp"
};

async function readGlobalHeaders() {
  try {
    const source = await readFile(resolve(root, "_headers"), "utf8");
    const lines = source.replaceAll("\r\n", "\n").split("\n");
    const globalRule = lines.findIndex((line) => line.trim() === "/*");
    if (globalRule === -1) return {};

    const headers = {};
    for (let index = globalRule + 1; index < lines.length; index += 1) {
      const line = lines[index];
      if (!/^\s+\S/.test(line)) break;
      const separator = line.indexOf(":");
      if (separator === -1) continue;
      headers[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
    }
    return headers;
  } catch {
    return {};
  }
}

const globalHeaders = await readGlobalHeaders();

createServer(async (request, response) => {
  const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
  const relativePath = pathname === "/"
    ? "index.html"
    : pathname.endsWith("/")
      ? `${pathname.slice(1)}index.html`
      : pathname.slice(1);
  const filePath = resolve(root, relativePath);

  if (filePath !== root && !filePath.startsWith(`${root}${sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const body = await readFile(filePath);
    const contentType = contentTypes[extname(filePath)] ?? "application/octet-stream";
    response.writeHead(200, { ...globalHeaders, "Content-Type": contentType }).end(body);
  } catch {
    try {
      const notFound = await readFile(resolve(root, "404.html"));
      response.writeHead(404, { ...globalHeaders, "Content-Type": contentTypes[".html"] }).end(notFound);
    } catch {
      response.writeHead(404, { ...globalHeaders, "Content-Type": contentTypes[".txt"] }).end("Not found");
    }
  }
}).listen(port, "127.0.0.1");
