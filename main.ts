import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My agent apologised for hallucinating. Then it hallucinated the apology.";

const output = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, ENTRY, "utf8");
