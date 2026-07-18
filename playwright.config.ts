import { defineConfig } from "@playwright/test";

const host = "127.0.0.1";
const port = 4321;
const baseURL = `http://${host}:${port}`;
const errorStatePort = 4322;
const errorStateURL = `http://${host}:${errorStatePort}`;
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  ...(isCI ? { workers: 1 } : {}),
  reporter: [["list"]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure"
  },
  webServer: [
    {
      command: `node node_modules/astro/bin/astro.mjs build --outDir /tmp/anisonary-playwright-main && node tests/support/static-server.mjs /tmp/anisonary-playwright-main ${port}`,
      url: baseURL,
      reuseExistingServer: !isCI,
      timeout: 120_000
    },
    {
      command: `PUBLIC_API_BASE_URL=http://127.0.0.1:9 npx astro build --outDir /tmp/anisonary-playwright-error && node tests/support/static-server.mjs /tmp/anisonary-playwright-error ${errorStatePort}`,
      url: errorStateURL,
      reuseExistingServer: !isCI,
      timeout: 120_000
    }
  ]
});
