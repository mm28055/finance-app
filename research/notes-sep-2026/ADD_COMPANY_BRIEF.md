# Add companies to an existing sector note (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT commit. Do not change the database. Repo R =
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`. Scratchpad S =
`C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad`.
Owner is a non-technical long-term investor; your report goes to me. Today is 28 Sep 2026. Other helpers are editing
other notes at the same time — edit ONLY the files named in your task. Screener is rate-limited and shared: at most one
Screener request every 5 seconds, and no more than ~12 Screener requests in total.

The owner has moved these companies into this sector (or added them); the note does not cover them yet. Add each one at
the SAME depth as the companies already in the note.

## 1. Research (Phase A1 of S/DEEP_SPEC.md — read it and follow it exactly)
Input: `S/sec/adds/<NN>-<Company>.md` (dashboard metrics, stored analyses and the last two call transcripts). Read both
calls in full, the latest investor presentation, the FY26 annual report (only the parts DEEP_SPEC lists), the latest
rating rationale, and material news. Numbers from Screener (raw page), never the dashboard block. Write
`S/sec/adds/deep/<NN>-<Company>.md` (1,800–2,500 words, DEEP_SPEC headings). Give capex and future growth full weight.

## 2. Card data (charts + valuation inputs) — from Screener pages, spliced into the note's card-data file
- `cd S/scr && python fetch.py "<Company name>"` → saves `<CODE>.html` and `<CODE>_s.html`, prints the code and whether
  the consolidated page has figures. Then `python card.py <CODE>` (or `<CODE>_s` if consolidated is empty) → writes
  `S/cards/<CODE>.json`.
- Generate the card-data entries WITHOUT editing chartdata.py (other helpers use it): write a small python in S with a
  unique name that does `import sys; sys.path.insert(0, 'S/scr'); import chartdata; chartdata.REPO = '<unique temp dir>';
  chartdata.CONFIG = {'<slug>': {'<exact company name>': ('<CODE or CODE_s>', None, <input or None>, <invcash bool>)}};
  chartdata.main('<slug>')`. Look at chartdata.py CONFIG entries for this sector to choose the same input index
  (WPI) and invcash convention as similar companies. It writes a temp `<slug>.ts` and prints the metric series and the
  valuation line.
- Splice the new company's entry into BOTH objects of `R/lib/sector-overviews/card-data/<card-data file>.ts` (the Charts
  object and the ...ValuationInputs object) — insert, do not regenerate or reorder the existing file; keep every
  existing entry and override untouched. If the company is loss-making after tax, add `"lossMaking": true` to its
  valuation input. The company key must be the EXACT database name given in your task.

## 3. Tab 1 (`R/lib/sector-overviews/<note>.ts`)
Read the whole note first. Then integrate each company as if it had always been there:
- `myGrowth` (my base-case earnings growth, a judgement from the research; null for loss-makers) and a `verdicts` entry
  (what / view / watch; `rank` placed in order own → follow → wait → pass → avoid, renumbering others; `stance` consistent:
  COMPOUNDER only for own, AVOID only for avoid; `segment` = one of the note's segment constants, or add one if needed).
  House rule: "own" only when the live label is Fits. Label: needed = (P/E × 0.1726)^0.1 − 1 with the P/E from your
  valuation input; Fits if myGrowth − needed ≥ −2, Full if ≥ −6, else Stretched.
- Moat grid row; every section-2 metric series the note has (use the printed metric arrays; add cellNotes where a
  figure is distorted); section-6 growth-estimate table and "Guidance, capex and track record" table rows (Q4-call
  promises vs Q1 delivery); section 3–8 text where the company belongs (a paragraph in the right points, not a clause);
  section 8 valuation points; section 1 recommendation paragraph; the closing line (bold call); sources (only URLs you
  actually opened). Update any typed counts ("twelve companies") consistently.
- Price-dependent figures in prose use LIVE placeholders (see S/LIVE_TEXT_BRIEF.md): `{need:KEY|n}`, `{label:KEY|fits}`,
  `{pe:KEY|x}`, `{mcap:KEY|₹xcr}`, counts `{count:fits|three}` — KEY = the exact valuation-inputs key. Never hard-code
  P/E or EV/EBITDA multiples in prose. Latest call wins over older statements (older only as dated history).
- Plain English, short sentences, ₹/cr/lakh, bold company names and conclusions, balanced `**`.

## 4. Tab 2 (`R/lib/sector-overviews/<note>-businesses.ts`)
Add one `BusinessProfile` per company following `S/CARD_SPEC.md` exactly (charts: `<ChartsVar>['<exact name>']`),
in the note's rank order, with the verdict line matching your call (`**Verdict: <call>.**`). If the intro's
"businesses in plain words" or "ways of earning" table needs the company's segment, add it.

## 5. Checks (repo root) — all must pass
`npx tsc --noEmit -p .` (no errors in your files); `npx tsx check-overview.tmp.ts <exportName> <note>.ts` (nothing
unmatched / uncovered / not-in-closing, bold balanced — the new companies must no longer be "uncovered");
`npx tsx check-live-tokens.tmp.ts "<Sector name>"` (0 problems). Delete your temp files.

Report in under 200 words per company: code used, call | rank | stance | myGrowth | needed | label, the 2–3 key facts
behind the call, stored-data errors found, and any existing statement in the note you had to change.
