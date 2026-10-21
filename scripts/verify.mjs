import { spawnSync } from "node:child_process";
import { assertVerifiedBuild, buildInputDigest, canReuseLocalBuild } from "./build-state.mjs";

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.error || result.status !== 0) throw new Error(`Verification stopped: ${args.join(" ")}`);
}

function npm(script) {
  run(process.platform === "win32" ? "npm.cmd" : "npm", ["run", script]);
}

try {
  const mode = process.argv[2];
  if (!["batch", "full"].includes(mode)) throw new Error("Choose verify:batch or verify:full.");
  const inputs = await buildInputDigest();
  if (mode === "full") {
    npm("public:check");
    run(process.platform === "win32" ? "npm.cmd" : "npm", ["audit", "--audit-level=low"]);
  }
  npm("test");
  let reusable = false;
  if (await canReuseLocalBuild()) {
    try { await assertVerifiedBuild(); reusable = true; } catch { /* A fresh build is required. */ }
  }
  if (reusable) console.log("Reusing the matching verified build: source, environment and artifact hashes agree.");
  else npm("build");
  npm(mode === "batch" ? "catalog:stats:update" : "catalog:stats:check");
  if (mode === "batch") npm("public:check");
  if (mode === "full") {
    npm("cf:check");
    npm("test:e2e:built");
  }
  run("git", ["diff", "--check"]);
  if (await buildInputDigest() !== inputs) throw new Error("Verification inputs changed during the run. Repeat after edits finish.");
  console.log(`Verification passed (${mode}); catalogue completion and deployment are assessed separately.`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
