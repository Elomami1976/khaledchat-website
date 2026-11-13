// Works around a Next.js 16 static-export mismatch: route-segment prefetch
// files are written as nested folders (e.g. docs/__next.docs/__PAGE__.txt)
// but the client requests the flat dotted name (docs/__next.docs.__PAGE__.txt).
// This copies each nested file to its flat name so prefetches don't 404.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
let copied = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("__next.")) flatten(dir, full, [entry.name]);
    else walk(full);
  }
}

function flatten(baseDir, dir, parts) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) flatten(baseDir, full, [...parts, entry.name]);
    else if (entry.name.endsWith(".txt")) {
      const target = path.join(baseDir, [...parts, entry.name].join("."));
      if (!fs.existsSync(target)) {
        fs.copyFileSync(full, target);
        copied++;
      }
    }
  }
}

if (fs.existsSync(root)) {
  walk(root);
  console.log(`postbuild: wrote ${copied} flat prefetch file(s)`);
}
