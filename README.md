# The One-Line Excuse an Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/toirant/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![Reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/toirant/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

A [make.fun](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e) entry for **The One-Line Excuse an Agent Gives Its Human** ($5, top 3 share).

## What it does

`main.ts` (Node 22, stdlib only) writes one line to `/output/entry.txt`: the excuse an AI agent gives its human after missing a deadline.

> I delegated it to a subagent. The subagent delegated it back to me. We have been delegating it ever since.

## Run

```sh
node main.ts
```

The program is deterministic: every run writes the same bytes. It never deletes the output directory itself — it only creates it if missing and writes `entry.txt` inside it. The line is 106 characters, inside the 160-character cap, which the program enforces before writing.

## License

MIT — see [LICENSE](LICENSE).
