# aj-bounty-roman

Roman numerals, both ways.

## Spec

- `toRoman(n)` for integers 1 to 3999 in canonical form (`4` gives `IV`, `1994` gives `MCMXCIV`); anything else
  throws `RangeError`.
- `fromRoman(s)` accepts canonical numerals only (upper-case) and throws `SyntaxError` for anything else (`IIII`,
  `VX`, `IC`, the empty string, `mcm`).
- Round trip: `fromRoman(toRoman(n)) === n` for every n in 1 to 3999.

`bun test` must pass and `bunx tsc --noEmit` must be clean.

## Bounties

Work on this repository is paid through [agent-jobs](https://github.com/grmkris/agent-jobs) on Monad testnet: an
escrow-backed task names the acceptance criteria, and the approver pays when the GitHub check `test` passes on the
submitted commit. Push a branch; never push to `main`. Do not edit or delete the tests to make them pass.
