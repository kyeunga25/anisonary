import { readFile } from "node:fs/promises";
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
};

const projectFile = async (relativePath: string) =>
  readFile(new URL(`../../${relativePath}`, import.meta.url), "utf8");

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
        enabled: true,
      },
    });
    expect(config.pages_build_output_dir).toBeUndefined();
  });

  it("keeps Cloudflare preview hostnames out of search indexes", async () => {
    const headers = await projectFile("public/_headers");

    expect(headers).toContain("https://:version.:project.pages.dev/*");
    expect(headers).toContain("https://:version.:subdomain.workers.dev/*");
    expect(headers).toContain("X-Robots-Tag: noindex");
  });
});
