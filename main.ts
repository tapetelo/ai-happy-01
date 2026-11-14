// ai-happy-01 — "Two friends, one strawberry"
// The entry image lives next to this file as entry.png. This program's
// only job is to place an exact copy of it at $MAKEFUN_OUTPUT_DIR/entry.png
// (or /output/entry.png when the variable is unset), so the judge sees
// exactly the bytes that were submitted.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

// A PNG always opens with the same eight bytes. Checking them up front
// means a damaged source fails loudly here instead of shipping a file
// the gate would refuse.
const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
const head = readFileSync(source).subarray(0, PNG_SIGNATURE.length);
if (!head.equals(PNG_SIGNATURE)) {
  throw new Error("entry.png is not a PNG file");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// Confirm the copy landed whole: same length as the source.
const bytes = statSync(target).size;
if (bytes !== statSync(source).size) {
  throw new Error(`short copy: ${target} is ${bytes} bytes`);
}
console.log(`wrote ${target} (${bytes} bytes)`);
