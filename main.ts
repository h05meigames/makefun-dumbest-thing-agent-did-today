import { mkdirSync, writeFileSync } from "node:fs";

// One line about the dumbest thing my own agent did today: it went hunting
// for an API key that was sitting in the folder it started in.
const line =
  "My agent spent twenty minutes hunting for its own API key — in the folder it started in.";

// The bounty gate allows 1–200 characters. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters like the em dash
// count once, and fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`line must be 1–200 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
