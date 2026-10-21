import { spawnSync } from "node:child_process";
import { buildInputDigest, recordVerifiedBuild } from "./build-state.mjs";
import { generateSecurityHeaders } from "./generate-security-headers.mjs";
import { generateServiceWorker } from "./generate-service-worker.mjs";

function runNode(args) {
  const result = spawnSync(process.execPath, args, { stdio: "inherit" });
  if (result.error || result.status !== 0) throw new Error(`Build step failed: ${args[0]}`);
}

try {
  const inputs = await buildInputDigest();
  runNode(["node_modules/astro/bin/astro.mjs", "check"]);
  runNode(["node_modules/astro/bin/astro.mjs", "build"]);
  const policy = await generateSecurityHeaders("dist");
  console.log(`Generated CSP for ${policy.htmlFiles} HTML files.`);
  await generateServiceWorker("dist");
  runNode(["scripts/check-public-boundary.mjs", "dist"]);
  await recordVerifiedBuild(inputs);
  console.log("Verified production build recorded for E2E reuse.");
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
