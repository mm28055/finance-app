# Make price-dependent numbers in sector notes live (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT commit. Do not touch the database or fetch anything from the web. Repo:
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`. Edit ONLY the note files named in your task
(`lib/sector-overviews/<file>.ts` and its `-businesses.ts`; never card-data files).

## Why
The notes' text types numbers that depend on today's share price ("at a P/E of about 38.7 it needs about 21% a year
against my ~18%, which is Full"). The live table beside them updates daily, so the typed text goes stale and
contradicts it. The page now supports live placeholders inside any note text (rendered by RichText):

| Placeholder | Shows (live) | Example output |
|---|---|---|
| `{pe:KEY|38.7}` | P/E, 1 decimal (whole number ≥100) | 38.7 |
| `{ev:KEY|23.9}` | EV/EBITDA, 1 decimal | 23.9 |
| `{need:KEY|21}` | growth a year the price needs, whole % (write the % sign after it) | 21 |
| `{mcap:KEY|₹3,322cr}` | market value | ₹3,322cr |
| `{label:KEY|full}` / `{Label:KEY|Full}` | price check: fits / full / stretched (Label = capitalised) | full |
| `{count:fits|three}` `{Count:full|Nine}` | how many companies in THIS note's live table are fits / full / stretched / live, as a word | three |

KEY must be EXACTLY the company's key in the note's valuation inputs (the object `valuation.inputs` the note points to,
i.e. the `...ValuationInputs` export in `lib/sector-overviews/card-data/<x>.ts` — check the exact spelling, e.g.
"The Anup Enginee", "Action Const.Eq."). The text after `|` is the value as currently written (keep it exactly), used
only when no live value exists. A worked example is already in lib/sector-overviews/industrial-manufacturing.ts
(search `{need:The Anup Enginee`).

## What to convert
Only statements of TODAY's valuation for a company that IS in the note's valuation inputs (measured live):
its P/E, EV/EBITDA, market value, the growth its price needs, and its price-check label; and the counts in
valuation summary sentences ("Three of the sixteen companies fit, nine are full and four are stretched" →
"{Count:fits|Three} of the {count:live|sixteen} companies fit, {count:full|nine} are full and {count:stretched|four} are stretched").
Keep grammar sensible for other outcomes; minor number agreement ("one ... fit") is acceptable.

## What NOT to convert
- My growth estimates ("my ~18%") — they are my view; leave typed.
- Anything historical or dated ("in May it traded at 45x", "since the IPO"), anything about companies NOT in the
  valuation inputs (e.g. "on Screener's price it would need about 16%"), generic hurdle lists ("11% at 16–17x, 16% at
  25–27x ..."), numbers from filings (sales, profit, order book, debt, capex), and labels that are the name of a group
  heading (e.g. a point titled "Full: prices that ask a little more than I expect" stays as it is — its membership is
  a written judgement).
- Do not change any other wording, calls, ranks, stances, myGrowth or figures.
Do not put a placeholder inside `**bold**` markers that would break balance — a placeholder inside bold is fine
(`**{Label:X|Full}**`), just keep the `**` pairs balanced.

## Checks (repo root)
- `npx tsc --noEmit -p .` — no errors in your files.
- `npx tsx check-live-tokens.tmp.ts "<Sector name>"` for each of your sectors (sector name exactly as in the note's
  `sector:` field) — must report 0 problems.
- `npx tsx check-overview.tmp.ts <exportName> <file>.ts` if it exists — balanced bold, nothing unmatched.

Report in under 80 words per note: number of placeholders added, anything you deliberately left typed and why.
