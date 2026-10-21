import { defineConfig } from "@playwright/test";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const host = "127.0.0.1";
const port = Number(process.env.ANISONARY_E2E_PORT ?? "4321");
const baseURL = `http://${host}:${port}`;
const errorStatePort = Number(process.env.ANISONARY_E2E_ERROR_PORT ?? String(port + 1));
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: mkdtempSync(join(tmpdir(), "anisonary-playwright-results-")),
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
  webServer: {
    command: `node scripts/serve-e2e.mjs ${port} ${errorStatePort}`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 120_000
  }
});
