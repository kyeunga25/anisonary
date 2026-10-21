import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { gzipSync } from "node:zlib";
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

async function readHeaderRules(root) {
  try {
    const source = await readFile(resolve(root, "_headers"), "utf8");
    const lines = source.replaceAll("\r\n", "\n").split("\n");
    const rules = [];
    let rule;
    for (const line of lines) {
      if (!line.trim() || line.trim().startsWith("#")) continue;
      if (!/^\s/.test(line)) {
        rule = { path: line.trim(), headers: {} };
        rules.push(rule);
        continue;
      }
      if (!rule) continue;
      const separator = line.indexOf(":");
      if (separator === -1) continue;
      rule.headers[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
    }
    return rules;
  } catch {
    return [];
  }
}

export async function startStaticServer(rootArgument, portArgument) {
  const root = resolve(rootArgument);
  const port = Number(portArgument);
  const rules = await readHeaderRules(root);
  const headersFor = (pathname) => Object.assign({}, ...rules.filter((rule) =>
    rule.path.endsWith("*") ? pathname.startsWith(rule.path.slice(0, -1)) : pathname === rule.path
  ).map((rule) => rule.headers));

  const server = createServer(async (request, response) => {
    const pathname = decodeURIComponent(new URL(request.url ?? "/", "http://localhost").pathname);
    const headers = headersFor(pathname);
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
      // Exercise transparent HTTP decompression as well as the raw JSON path.
      const acceptsGzip = (request.headers["accept-encoding"] ?? "").split(",").some((value) => {
        const [coding, quality = "q=1"] = value.trim().split(";").map((part) => part.trim());
        return coding === "gzip" && Number(quality.replace(/^q=/, "")) > 0;
      });
      if (pathname.startsWith("/search-index/") && acceptsGzip) {
        const compressed = gzipSync(body);
        response.writeHead(200, { ...headers, "Content-Type": contentType, "Content-Encoding": "gzip", "Vary": "Accept-Encoding" }).end(compressed);
        return;
      }
      response.writeHead(200, { ...headers, "Content-Type": contentType }).end(body);
    } catch {
      try {
        const notFound = await readFile(resolve(root, "404.html"));
        response.writeHead(404, { ...headers, "Content-Type": contentTypes[".html"] }).end(notFound);
      } catch {
        response.writeHead(404, { ...headers, "Content-Type": contentTypes[".txt"] }).end("Not found");
      }
    }
  });
  await new Promise((accept, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", accept);
  });
  return server;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const [root, port] = process.argv.slice(2);
  if (!root || !port) throw new Error("Usage: node static-server.mjs <root> <port>");
  await startStaticServer(root, port);
}
