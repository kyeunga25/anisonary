import { spawnSync } from "node:child_process";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { assertVerifiedBuild } from "./build-state.mjs";
import { generateSecurityHeaders } from "./generate-security-headers.mjs";
import { generateServiceWorker } from "./generate-service-worker.mjs";
import { startStaticServer } from "../tests/support/static-server.mjs";

const servers = [];
for (const signal of ["SIGINT", "SIGTERM"]) process.once(signal, () => {
  for (const server of servers) server.close();
});

function runNode(args, env = process.env) {
  const result = spawnSync(process.execPath, args, { stdio: "inherit", env });
  if (result.error || result.status !== 0) throw new Error(`E2E preparation failed: ${args[0]}`);
}

try {
  const [port, errorPort] = process.argv.slice(2).map(Number);
  if (![port, errorPort].every((value) => Number.isInteger(value) && value >= 1 && value <= 65535)
    || port === errorPort) throw new Error("Two distinct valid E2E ports are required.");
  if (process.env.ANISONARY_E2E_REUSE_BUILD !== "true") {
    runNode(["scripts/build.mjs"]);
  }
  await assertVerifiedBuild();
  // Prepare the error fixture after the normal build. Astro prerender output is
  // shared within a checkout, so concurrent builds must not race over it.
  const errorBuild = await mkdtemp(join(tmpdir(), "anisonary-playwright-error-"));
  runNode(["node_modules/astro/bin/astro.mjs", "build", "--outDir", errorBuild], {
    ...process.env, PUBLIC_API_BASE_URL: "http://127.0.0.1:9", ANISONARY_REQUIRE_API_DATA: "false"
  });
  await generateSecurityHeaders(errorBuild);
  await generateServiceWorker(errorBuild);
  runNode(["scripts/check-public-boundary.mjs", errorBuild]);
  await assertVerifiedBuild();
  servers.push(await startStaticServer(errorBuild, errorPort));
  servers.push(await startStaticServer("dist", port));
  console.log("Serving the verified production artifact without rebuilding.");
} catch (error) {
  for (const server of servers) server.close();
  console.error(error.message);
  process.exitCode = 1;
}
