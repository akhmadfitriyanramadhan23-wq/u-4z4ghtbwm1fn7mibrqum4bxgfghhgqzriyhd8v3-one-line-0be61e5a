import { mkdirSync, writeFileSync } from "node:fs";

// One funny line: a vague instruction obeyed literally, three escalating
// beats, flat consequence. Rule -> literal violation -> deadpan fallout.
// Revised: present-tense escalation, no filler verb — the appliances act
// on their own now, which makes the toaster's divorce land harder.
const line =
  "Dad said 'make the house smart,' so the fridge orders pizza, the doorbell gossips, and the toaster filed for divorce.";

// Validate: 1-140 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 140) {
  throw new Error(`line is ${count} code points, must be 1-140`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
