# Write spec: turn a sector's research into a finished two-tab note (cloud runs)

You are writing a NEW sector note for an Indian-equities research site read by a non-technical private investor.
The research is already done (or you finish it first): `research/<slug>/NN-<Company>.md` and `_sector.md`
on branch `research/<slug>`. You produce a complete, compiling note on a new branch `note/<slug>`.
**Never push to `master`** — the owner's editor reviews each note and publishes it.

Work sequentially; do not launch sub-agents. Commit and push `note/<slug>` after each major step
(charts, Tab 1, Tab 2, final checks) so an interruption loses little.

## 0. Setup
```bash
git fetch origin
git checkout -b note/<slug> origin/master
git checkout origin/research/<slug> -- research/<slug>      # bring the research files in
npm ci                                                     # needed for tsc and tsx
```
If any company file is missing or incomplete in `research/<slug>/`, or `_sector.md` is missing, first complete
the research exactly as `research/tasks/SPEC.md` says (you may commit those files to `note/<slug>` too).

Read these before writing — they are the models to copy exactly for structure and field names:
- `lib/sector-overviews/types.ts`
- `lib/sector-overviews/healthcare.ts` and `healthcare-businesses.ts` (a finished new note built this way)
- `lib/sector-overviews/retail.ts` and `lib/sector-overviews/commercial.ts`
- `research/tasks/CARD_SPEC.md` (how to write each Tab-2 company card)

## 1. Charts and valuation inputs (Screener, via the tools in `research/tools/`)
```bash
cd research/tools
python fetch.py "Company name" ...        # finds each company on Screener, saves pages/CODE.html and CODE_s.html
```
- If a name isn't found, try a shorter name or `code:NSECODE` / `code:BSECODE` (e.g. `code:533259`).
- A consolidated page with empty tables means the company reports standalone only: use `CODE_s` everywhere below.
- `python base.py "Exact Name=CODE" ...  > ../../research/<slug>/_base.txt` — Tab 1 rows (margin, growth, return on capital, cash cycle, cash conversion). Use the **exact company names from the task file** (they must match the site's database names).
- `python card.py CODE ...` then `python wc.py CODE ...` (same codes, `_s` where needed).
- Write `config/<slug>.json`: `{"Exact Name": ["CODE", null, INPUT, investmentsCountAsCash]}` where INPUT is `null`, or
  `["<exact key in wpi.json>", "plain label"]` for the main raw material (e.g. `["Milk","Milk"]`, `["Rice(Basmati)","Basmati rice"]`,
  `["Coffee","Coffee"]`; search wpi.json keys with python), and investmentsCountAsCash is true when the company holds large liquid investments.
- `python chartdata.py <slug> > ../../research/<slug>/_chart.txt` — writes `lib/sector-overviews/card-data/<slug>.ts`
  (exports `<camelSlug>Charts` and `<camelSlug>ValuationInputs`).
- In that card-data file, relabel the generic cost-split labels to fit the sector (e.g. "Materials" → "Milk, grains and packaging",
  "Power and factory costs" → "Power, fuel and plant running"; for services see how healthcare.ts/retail card-data did it).
- For any company with no Screener P/E because it made a loss, add `"lossMaking": true` to its entry in the ValuationInputs object.
- `PYTHONIOENCODING=utf-8 python cardsum.py ../../lib/sector-overviews/card-data/<slug>.ts > ../../research/<slug>/_cardsum.txt`
  then append the `// valuation` block from `_chart.txt` to it.
- `python mk_metrics.py ../../research/<slug>/_base.txt ../../research/<slug>/_chart.txt ../../research/<slug>/metrics_part.ts "Consolidated except X and Y (standalone)."`
  — generates the section-2 chart block with `note: 'TODO'` placeholders.
Commit and push.

## 2. Tab 1 (the analysis) — write `research/<slug>/head_part.ts`, edit `metrics_part.ts`, write `tail_part.ts`
Copy the skeleton of `healthcare.ts` exactly: imports, `Q`/`FY` constants, segment constants, `export const <camelSlug>: SectorOverview = {`
with `sector` (exact DB sector name from the task file title), `title`, `format: 'ranked'`, `businesses: <camelSlug>Businesses`,
`moatCompact: true`, `leadCharts: true`, `valuation: { writtenOn, inputs, myGrowth }`, `standfirst`, `lastUpdated`, `asOfQuarter: 'Q1 FY27'`,
then the metrics block, then moat, sections, verdicts, closing, sources.

- **Segments:** group the companies into 3–5 business-model segments (use the "Suggested buckets" in `_sector.md` if present).
- **Metrics:** keep every value; replace every `note: 'TODO'` with a real 1–3 sentence note; add `cellNotes` where a value is distorted
  (one-offs, lease accounting, demergers, half-year reporters, missing years); if lower net debt is better on the chart, keep `invert: true` as healthcare.ts does.
- **Depth standard (the point of the exercise):** each point is a paragraph of 3–6 sentences: the fact with numbers → what management
  or the report said → why it matters → my view. About 5,000–7,000 words across `sections` for 15–20 companies.
  - Section 1 Recommendation up front (3–4 paragraphs). Section 2 charts (`embed: 'metrics'`).
  - Section 3 The sector: 4 points (value chain; where demand comes from; cycles and policy; what these companies actually depend on)
    + a profit-pool table + a sector table from the sector research with forecasters named.
  - Section 4 Moat: grid (`embed: 'moat'`, `embedFirst: true`) + 5+ points with evidence of share, pricing power, switching costs.
  - Section 5 Margins: 7 points (structural / cyclical / not structural + four working-capital points: biggest drains, getting worse,
    improving, built into the business) + a "Q1 FY27 cash and capital, as stated on the calls" table.
  - Section 6 Growth and capex: 4 "Growth driver:" points; Delivering or beating / Cautious / Missed / Mixed / My outlook; the
    growth-estimate table (low / **base** / high, % a year over 3–5 years); a "Guidance, capex and track record" table with
    `badgeColumn: 3` and a bold badge word first (**Delivered**, **Beat**, **On track**, **Behind**, **Missed**, **Mixed**, **Cut**, **Steady**, **Limited disclosure**), comparing Q4-call promises with Q1 delivery.
  - Section 7 Risks: 5–6 points incl. governance/accounting findings (auditor remarks, related parties, pledges, contingent liabilities).
  - Section 8 Valuation: keep the formula line ("To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly …"),
    5+ labelled points, `embed: 'valuation'`.
  - Verdicts for every company: rank 1..N, stance, segment, `what` (1–2 sentences), `view` (3–4 sentences with key numbers), `watch` (3 items).
  - Closing "9. Summary review": grouped by segment, EVERY company named in bold with a bold call (own / follow / wait / pass / avoid);
    what would change the view; what to watch next quarter; `bottomLine` naming every company.
  - `sources`: Screener line + sector reports + the most useful company documents actually read (real URLs only).
- **myGrowth** = your base-case earnings growth, % a year over 3–5 years (null for loss-makers). The site's live price check uses:
  growth needed = (P/E × 0.1726)^0.1 − 1; **Fits** if mine − needed ≥ −2 points; **Full** if ≥ −6; else **Stretched**.

**House rules (all mandatory):**
1. "own" only when the company's label is **Fits**. Rank own → follow → wait → pass → avoid.
2. Stance must match the call: COMPOUNDER only for an "own"; use PRICED / SCALEUP / CYCLICAL / HARVEST / TURNAROUND / AVOID otherwise
   (AVOID only with an "avoid" call).
3. Never write P/E or EV/EBITDA multiples in prose ("P/E 28", "20 times operating profit") — the live table shows them. Write
   "needs about X% a year". The formula line is the only exception.
4. Every figure must come from the research files, Screener, or the chart data. If undisclosed, say so.
5. Plain English, short sentences, ₹ / cr / lakh, jargon glossed once, company names and conclusions in **bold**, `**` balanced.
6. Where a company's own "adjusted" figures differ from filed figures, say which one you quote.

Assemble: `cat research/<slug>/head_part.ts research/<slug>/metrics_part.ts research/<slug>/tail_part.ts > research/<slug>/note.ts`.
Commit and push.

## 3. Tab 2 (what the companies do)
- Write `research/<slug>/cards.ts` following `research/tasks/CARD_SPEC.md` exactly (one card per company; the inShort verdict line uses the
  call you chose; charts variable `<camelSlug>Charts`). Write in batches of ~4 companies, saving after each batch.
- Write `research/<slug>/biz_head.ts` modelled on the top of `lib/sector-overviews/healthcare-businesses.ts`
  (intro: "How to read this tab", "The businesses, in plain words" per segment, a "ways of earning" table; ends with `const profiles: BusinessProfile[] = [`).

## 4. Install and check
```bash
python research/tools/build_biz.py <slug> research/<slug> <camelSlug>Businesses "Name 1|Name 2|..." cards.ts   # names in rank order
python research/tools/new_note.py <slug> research/<slug> <camelSlug>                                          # copies note.ts in, registers in index.ts
npx tsc --noEmit -p .                                   # must print nothing
npx tsx research/tools/check_note.ts <camelSlug> <slug> <slug>
```
The checker must show no unmatched / uncovered / not-in-closing / missing-from-myGrowth, balanced bold, no hard-coded multiples, and a
label per company that agrees with section 8's groupings and your calls (house rule 1). Fix and re-run until clean.

Commit everything (the note, businesses file, card-data file, index.ts, config json and the research/<slug> working files) and
`git push -u origin note/<slug>`.

## 5. Final message (under 250 words)
Word count of sections; each company's call and label; material findings; anything you could not verify; any company whose Screener P/E
was missing or looked wrong; the branch name.
