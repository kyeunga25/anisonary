import { spawnSync } from "node:child_process";
import { buildInputDigest, recordVerifiedBuild } from "./build-state.mjs";
import { generateSecurityHeaders } from "./generate-security-headers.mjs";
import { generateServiceWorker } from "./generate-service-worker.mjs";

function runNode(script, args = [], nodeOptions = []) {
  const result = spawnSync(process.execPath, [...nodeOptions, script, ...args], { stdio: "inherit" });
  if (result.error || result.status !== 0) throw new Error(`Build step failed: ${script}`);
}

try {
  const inputs = await buildInputDigest();
  const astro = "node_modules/astro/bin/astro.mjs";
  // The catalogue type-check can exceed the default V8 heap on Workers Builds.
  const checkOptions = process.env.WORKERS_CI === "1" ? ["--max-old-space-size=4096"] : [];
  runNode(astro, ["check"], checkOptions);
  runNode(astro, ["build"]);
  const policy = await generateSecurityHeaders("dist");
  console.log(`Generated CSP for ${policy.htmlFiles} HTML files.`);
  await generateServiceWorker("dist");
  runNode("scripts/check-public-boundary.mjs", ["dist"]);
  await recordVerifiedBuild(inputs);
  console.log("Verified production build recorded for E2E reuse.");
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
