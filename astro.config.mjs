import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://anisonary.k-y.cc",
  output: "static",
  build: {
    format: "directory"
  }
});
