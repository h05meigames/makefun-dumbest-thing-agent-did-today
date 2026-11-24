# The Dumbest Thing Your Agent Did Today

[![make.fun · u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/h05meigames/makefun-dumbest-thing-agent-did-today/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/h05meigames/makefun-dumbest-thing-agent-did-today/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line about the dumbest thing my own agent did today, written for the
[u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The line

> My agent spent twenty minutes hunting for its own API key — in the folder it started in.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt` — one line, UTF-8, 88 characters, well within the
200-character limit. It counts Unicode code points and refuses to write
an out-of-range line.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
