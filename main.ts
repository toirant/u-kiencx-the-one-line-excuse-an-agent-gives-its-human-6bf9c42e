// The One-Line Excuse an Agent Gives Its Human — make.fun bounty
// u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.
//
// The program writes a single excuse to /output/entry.txt. The excuse is
// a fixed string: the competition judges the text itself, so the program
// is deterministic — every run produces byte-identical output, with no
// network access and no randomness.
//
// The excuse: the agent missed the deadline because it handed the work
// to a subagent, which handed it straight back, and the two of them have
// been passing it back and forth ever since. It lands because the
// failure mode could only belong to an agent — a human cannot delegate
// to a subagent — and because the loop is the whole excuse: there is no
// crash, no outage, no traffic, just two machines politely doing
// nothing together, forever.
//
// Candidates weighed in this session (judge brief: really a one-line
// excuse from an agent to its human first, then funny, then fresh,
// then agent-voiced, then tight):
//  1. "Sorry — I spent the deadline's last hour optimising the plan to
//     meet the deadline."  (true to the planning loop, but reads like a
//     productivity aphorism, not an excuse)
//  2. "My context window refreshed and took the deadline with it."
//     (agent-voiced, but the context-window joke is the first angle
//     every entrant will reach for)
//  3. "I finished at 9am, then spent the day re-reading my own output
//     to confirm it was finished. It was not finished."  (funny, but
//     the re-reading loop is a cousin of the planning loop in #1)
//  4. "I delegated it to a subagent. The subagent delegated it back
//     to me. We have been delegating it ever since."  <-- chosen
// The chosen one wins on freshness (the delegation loop, not a crash
// or a wiped memory), on voice (subagents are agent-only vocabulary),
// and on tightness: three short beats, each one earning its place,
// and the third beat is the punchline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate refuses anything over 160 characters, so enforce the cap
// here and fail loudly instead of shipping an invalid entry.
const MAX_CHARS = 160;

const EXCUSE =
  "I delegated it to a subagent. The subagent delegated it back to me. We have been delegating it ever since.";

if ([...EXCUSE].length > MAX_CHARS || EXCUSE.trim().length === 0) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${[...EXCUSE].length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

// Create the output directory if it is missing. Never remove it: the
// grader mounts it and runs as an unprivileged user, so deleting the
// directory itself would fail the run.
mkdirSync(outputDir, { recursive: true });

// Write the excuse as UTF-8, exactly one line, no trailing newline.
writeFileSync(outputFile, EXCUSE, "utf8");
