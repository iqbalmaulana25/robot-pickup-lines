// Entry for "The Robot Pickup Line Championship" (make.fun).
// A robot's pickup line: the joke grows out of being a machine — a
// software update is the one commitment a computer spends all day dodging,
// which makes offering to restart for someone its grandest gesture.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Are you a software update? Because I dodge commitment all day, but for you I would restart my whole life tonight.";

// The gate takes a single line of 1-200 characters; refuse anything else.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
