/// <reference types="vitest/config" />

import { getViteConfig } from "astro/config";

export default getViteConfig({
  resolve: {
    alias: {
      "@": decodeURIComponent(new URL("./src", import.meta.url).pathname)
    }
  },
  test: {
    environment: "node",
    include: ["tests/{unit,components}/**/*.test.ts"],
    coverage: {
      reporter: ["text", "html"]
    }
  }
});
