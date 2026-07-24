import { access, readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

type WranglerConfig = {
  name?: string;
  pages_build_output_dir?: string;
  compatibility_date?: string;
  compatibility_flags?: string[];
  workers_dev?: boolean;
  preview_urls?: boolean;
  assets?: {
    directory?: string;
    html_handling?: string;
    not_found_handling?: string;
  };
  routes?: Array<{
    pattern?: string;
    custom_domain?: boolean;
  }>;
  observability?: {
    enabled?: boolean;
  };
  dependencies_instrumentation?: {
    enabled?: boolean;
  };
  send_metrics?: boolean;
};

const projectPath = (relativePath: string) => new URL(`../../${relativePath}`, import.meta.url);
const projectFile = async (relativePath: string) => readFile(projectPath(relativePath), "utf8");

describe("Cloudflare Workers deployment config", () => {
  it("serves the static build with an explicit 404 and production domain", async () => {
    const config = JSON.parse(await projectFile("wrangler.jsonc")) as WranglerConfig;

    expect(config).toMatchObject({
      name: "anisonary",
      compatibility_date: "2026-07-19",
      compatibility_flags: ["nodejs_compat"],
      workers_dev: true,
      preview_urls: true,
      assets: {
        directory: "./dist",
        html_handling: "auto-trailing-slash",
        not_found_handling: "404-page",
      },
      routes: [
        {
          pattern: "anisonary.k-y.cc",
          custom_domain: true,
        },
      ],
      observability: {
        enabled: false,
      },
      dependencies_instrumentation: {
        enabled: false,
      },
      send_metrics: false,
    });
    expect(config.pages_build_output_dir).toBeUndefined();
  });

  it("keeps Wrangler telemetry and error reporting disabled in deployment scripts", async () => {
    const packageJson = JSON.parse(await projectFile("package.json")) as {
      scripts?: Record<string, string>;
    };
    const cloudflareScripts = Object.entries(packageJson.scripts ?? {}).filter(([name]) =>
      name.startsWith("cf:"),
    );

    expect(cloudflareScripts).not.toHaveLength(0);
    for (const [, command] of cloudflareScripts) {
      expect(command).toContain("WRANGLER_SEND_METRICS=false");
      expect(command).toContain("WRANGLER_SEND_ERROR_REPORTS=false");
    }
  });

  it("keeps Cloudflare preview hostnames out of search indexes", async () => {
    const headers = await projectFile("public/_headers");

    expect(headers).toContain("https://:version.:subdomain.workers.dev/*");
    expect(headers).toContain("X-Robots-Tag: noindex");
    expect(headers).not.toContain("pages.dev");
  });

  it("uses long-lived caching only for fingerprinted and repository assets", async () => {
    const headers = await projectFile("public/_headers");

    expect(headers).toContain("/_astro/*");
    expect(headers).toContain("Cache-Control: public, max-age=31536000, immutable");
    expect(headers).toContain("/assets/*");
    expect(headers).toContain(
      "Cache-Control: public, max-age=86400, stale-while-revalidate=604800",
    );
  });

  it("does not disclose the current page URL to external media hosts", async () => {
    const headers = await projectFile("public/_headers");

    expect(headers).toContain("Referrer-Policy: no-referrer");
    expect(headers).not.toContain("Referrer-Policy: strict-origin-when-cross-origin");
  });

  it("keeps macOS Finder metadata out of public assets", async () => {
    await expect(access(projectPath("public/.DS_Store"))).rejects.toMatchObject({ code: "ENOENT" });
  });
});
