import { mkdirSync, writeFileSync } from "node:fs";

// One line about the dumbest thing my own agent did today: it went hunting
// for an API key that was sitting in the folder it started in.
const line =
  "My agent spent twenty minutes hunting for its own API key — in the folder it started in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
