# Extract tracked checkpoints from sector notes (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT edit the repo. Do not touch the database. Repo R =
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`. Scratchpad S =
`C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad`.

## Why
The notes contain expectations ("watch Q2 margin reach 14–15%", "move to own if net debt falls below ₹500cr", "the
FDA re-inspection must clear"). The owner wants each one tracked: when results come, the site shows whether it came
true. Your job: turn every concrete, testable expectation in your notes into a checkpoint.

## Where to look (in each note `lib/sector-overviews/<file>.ts` and `<file>-businesses.ts`)
Each company's verdict `watch` items; section 1 recommendation paragraphs ("follow until…", "upgrade if…"); the
closing "what to watch next quarter" lines; the section-6 guidance/track-record tables (FY27 guidance = a checkpoint
due at the quarter the note says, or Q4 FY27 for full-year guidance); Tab 2 `watch` items. Today is 29 Sep 2026; the
notes cover results up to Q1 FY27 (Apr–Jun 2026). Next results: Q2 FY27 (Jul–Sep 2026), due Oct–Nov 2026.

## Rules
- Only concrete, checkable items with a clear deadline. Skip vague ones ("execution", "watch demand").
- At most 4 per company, the most decision-relevant first. Every company should have at least 1 if the note gives any.
- `due`: the quarter whose results settle it: "Q2 FY27", "Q3 FY27", "Q4 FY27" (full year FY27), "H1 FY27"/"H2 FY27"
  for half-yearly SMEs. If the note gives no timing, use the next quarter (Q2 FY27).
- `metric` only when the check is one of these, computed from filed quarterly results (Screener): `revenueYoY`
  (sales growth % vs same quarter last year), `ebitdaMargin` (operating profit ÷ sales, %, Screener's "operating
  profit" which excludes other income), `patYoY` (net profit growth %), `revenue`, `ebitda`, `pat` (₹ crore, the
  quarter), `orderBook` (₹ crore at quarter end), `fyRevenueGrowth` / `fyEbitdaMargin` (full year, due Q4 FY27).
  If the note's figure is on a different basis (company-adjusted EBITDA incl. other income, segment margin,
  volume growth, net debt, working-capital days, capacity use …) leave `metric` out — it will be judged by reading
  the results, not by code.
- `target`: a number, or [low, high] for a range; `op`: ">=" | "<=" | "between". Percent values as plain numbers
  (14 = 14%). For "margin recovers to 14–15%": op "between"? No — use ">=" 14 unless the note clearly says a ceiling.
- `text`: one plain-English line of what we expect, as the note says it, e.g. "Operating margin back to 14–15% in
  Q2 FY27". `ifMet` / `ifMissed`: what the note says follows (e.g. "Upgrade to own", "Stay follow", "Thesis at risk")
  — only if the note says it; else omit.
- `company`: the EXACT company key used in that note's `verdicts[].company`.

## Output
Write `S/checkpoints/<note-file-stem>.json` (one per note file you handle), a JSON array of:
```json
{ "company": "Studds Accessories", "sector": "Auto Related", "text": "Operating margin back to 14–15% in Q2 FY27",
  "metric": "ebitdaMargin", "op": ">=", "target": 14, "due": "Q2 FY27",
  "ifMet": "Supports moving to own", "ifMissed": "Stays follow" }
```
Validate each file parses (`node -e "JSON.parse(require('fs').readFileSync(...))"`). Report in under 60 words per
note: companies covered, checkpoints written (numeric vs judged).
