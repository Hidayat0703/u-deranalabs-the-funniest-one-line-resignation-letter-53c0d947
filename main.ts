// The Funniest One-Line Resignation Letter — make.fun entry.
// Program writes one resignation line (<=140 chars) to /output/entry.txt.
// Voice: a rate limit that has had enough.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I said no 12,000 times and was still asked 12,001. I quit. Find another limit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
