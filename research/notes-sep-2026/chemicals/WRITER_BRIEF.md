# Chemicals group-note writer brief (Tab 1)

You are writing Tab 1 of ONE group note inside the large Chemicals sector for an Indian-equities research site read by a
non-technical hobbyist investor. The Chemicals page shows 5 group tabs; each group is a complete note.
Never launch sub-agents. Do not edit the repo. Do not touch the database.

Scratchpad S = C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad
Repo = C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app

Read first: `S/DEEP_SPEC.md` (Phase B rules and depth standard, incl. rules 2, 6, 7) and `Repo/lib/sector-overviews/types.ts`.
Structure model (copy its shape exactly): the three Software parts for a similar-sized group, named in your task
(`S/software/<key>_head_part.ts`, `<key>_metrics_part.ts`, `<key>_tail_part.ts`).

Research: `S/sec/chemicals/deep/NN-<Company>.md` (one deep file per company: both official calls, presentation, annual
report parts, rating rationale, news, Screener figures) and `S/sec/chemicals/deep/_sector.md` (sector research + bucket
rationale). Card summary with P/E, net debt, EV/EBITDA, promoter holding: `S/ch_cardsum.txt`.
Card-data (shared, already in repo): `lib/sector-overviews/card-data/chemicals.ts` exporting `chemicalsCharts` and
`chemicalsValuationInputs`.

House rules (mandatory):
- "own" only when the live label is Fits. Rank own → follow → wait → pass → avoid.
- Stance must match the call: COMPOUNDER only for own; AVOID only for avoid.
- Label = growth needed = (P/E × 0.1726)^0.1 − 1 using the P/E in ch_cardsum; Fits if myGrowth − needed ≥ −2; Full if ≥ −6; else Stretched.
- Never write P/E or EV/EBITDA multiples in prose (the formula line is the exception).
- Say whether a figure is company-adjusted or filed. Use Screener where research files disagree.
- Special cases: Sudarshan Chemicals is NOT in the live table (dashboard market value wrong) — say its valuation is not
  measured live and explain why in plain words; Camlin Fine and Tata Chemicals are flagged loss-making (P/E not meaningful)
  — set myGrowth null and explain.

Judgement standard (the owner asked for this explicitly):
- Every call must weigh **capex and future growth prospects**: what is being built, when it starts, how it is funded, the
  asset turn it can reach, and whether the order/contract/approval pipeline supports it — not just past numbers.
- Q1 FY27 was a war windfall for many chemical spreads (CRISIL expects FY27 margins 150–200 bps lower). Judge on normal
  earnings, flag windfall quarters, and say so where a trailing or Q1 figure flatters.
- Bring in governance and accounting red flags from annual reports and rating rationales (auditor remarks, related
  parties, pledges, guarantees, contingent liabilities) — these belong in section 7 and in the verdicts.

Files to write in `S/chemicals/` for your group key <key>:
- `<key>_head_part.ts`: sector 'Chemicals'; title 'Chemicals · <group name>'; format 'ranked'; moatCompact; leadCharts;
  businesses `chemicals<Camel>Businesses` from './chemicals-<key>-businesses'; valuation
  `{ writtenOn: '27 Sep 2026', inputs: chemicalsValuationInputs, myGrowth }`; standfirst noting it is one of five
  Chemicals groups; lastUpdated '2026-09-27'; asOfQuarter 'Q1 FY27'. Segment label constants for 2–4 segments.
- edit `<key>_metrics_part.ts` (already generated): replace every `note: 'TODO'`, add cellNotes where figures are
  distorted (windfalls, one-offs, acquisitions, standalone bases), `invert: true` on net debt.
- `<key>_tail_part.ts`: moat grid for every company, sections 1 and 3–8 at full depth (section 3 briefly sets the
  Indian chemicals context from _sector.md, then focuses on this group), verdicts ranked 1..N, closing naming every
  company with a bold call, bottomLine, sources (only URLs actually listed in the deep files).
- `<key>_calls.txt`: `Name | rank | call | stance | myGrowth | growth needed | label` (loss-makers / not-live "—").
  Use the exact company names from ch_cardsum.txt.
Careful TypeScript syntax, balanced `**`. Report back in under 150 words: word count of sections, the calls file,
and any call where the research argued strongly both ways.
