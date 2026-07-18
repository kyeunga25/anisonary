import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://anisonary.k-y.cc",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith("/404")
    })
  ],
  build: {
    format: "directory"
  }
});
