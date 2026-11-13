// Post-build fix for a Next.js static-export bug on Windows.
//
// Root cause (present in next@16.4.6 and on the canary branch as of 2026-11):
//   next/dist/export/index.js lists each page's segment-prefetch files with
//   path.relative(), which returns backslash-separated paths on Windows
//   (e.g. "docs\$d$slug\__PAGE__.segment.rsc"). It then passes them to
//   convertSegmentPathToStaticExportFilename(), which only replaces forward
//   slashes with dots. The surviving backslashes become real folders, so the
//   build writes   docs/getting-started/__next.docs/$d$slug/__PAGE__.txt
//   while the client router requests
//                  docs/getting-started/__next.docs.$d$slug.__PAGE__.txt
//   and every prefetch 404s. Builds on Linux/macOS are not affected.
//
// This script moves each misplaced file to the flat name the client expects
// and removes the then-empty folders, producing the same output a Linux build
// would. It only touches folders named "__next.*" inside ./out, never
// overwrites an existing file, and is a no-op when the output is already
// correct (non-Windows builds, or running it twice).
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
let moved = 0;
let skipped = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      flatten(dir, full, [entry.name]);
      fs.rmSync(full, { recursive: true, force: true });
    } else if (entry.name !== "_next") {
      walk(full);
    }
  }
}

function flatten(routeDir, dir, parts) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      flatten(routeDir, full, [...parts, entry.name]);
    } else if (entry.name.endsWith(".txt")) {
      const target = path.join(routeDir, [...parts, entry.name].join("."));
      if (fs.existsSync(target)) {
        skipped++;
      } else {
        fs.renameSync(full, target);
        moved++;
      }
    }
  }
}

if (fs.existsSync(root)) {
  walk(root);
  console.log(`postbuild: fixed ${moved} prefetch file(s)${skipped ? `, ${skipped} already present` : ""}`);
}
