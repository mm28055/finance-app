# Auto Related group-note writer brief (Tab 1)

You are writing Tab 1 of ONE group note inside the large Auto Related sector for an Indian-equities research site read by a
non-technical hobbyist investor. The Auto Related page shows 5 group tabs; each group is a complete note.
Never launch sub-agents. Do not edit the repo. Do not touch the database.

Scratchpad S = C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad
Repo = C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app

Read first: `S/DEEP_SPEC.md` (Phase B rules and depth standard, incl. rules 2, 6, 7) and `Repo/lib/sector-overviews/types.ts`.
Structure model (copy its shape exactly): the three Chemicals parts for a similar-sized group, named in your task
(`S/chemicals/<key>_head_part.ts`, `<key>_metrics_part.ts`, `<key>_tail_part.ts`), and the published
`Repo/lib/sector-overviews/chemicals-<key>.ts`.

Research: `S/sec/auto/deep/NN-<Company>.md` (one deep file per company: both official calls, presentation, annual
report parts, rating rationale, news, Screener figures) and `S/sec/auto/deep/_sector.md` (sector research + bucket
rationale). Card summary with P/E, net debt, EV/EBITDA, promoter holding: `S/au_cardsum.txt`.
Card-data (shared, already in repo): `lib/sector-overviews/card-data/auto-related.ts` exporting `autoRelatedCharts` and
`autoRelatedValuationInputs`.

House rules (mandatory):
- "own" only when the live label is Fits. Rank own → follow → wait → pass → avoid.
- Stance must match the call: COMPOUNDER only for own; AVOID only for avoid.
- Label = growth needed = (P/E × 0.1726)^0.1 − 1 using the P/E in au_cardsum; Fits if myGrowth − needed ≥ −2; Full if ≥ −6; else Stretched.
- Never write P/E or EV/EBITDA multiples in prose (the formula line is the exception).
- Say whether a figure is company-adjusted or filed. Use Screener where research files disagree.
- Special cases: **Shriram Pistons** is NOT in the live table (the dashboard's market value is about ten times too
  high) — say its valuation is not measured live and why, in plain words. Several companies use standalone pages on
  Screener (see the chart data notes); say so where it matters.

Judgement standard (the owner asked for this explicitly):
- Every call must weigh **capex and future growth prospects**: what is being built, when it starts, how it is funded, the
  asset turn it can reach, and whether the order/contract/approval pipeline supports it — not just past numbers.
- Vehicle volumes are cyclical: domestic CV is expected to turn down in H2 FY27 and US trucks after the pre-buy; 2W/PV
  got a GST-cut lift. Judge on content per vehicle, new orders, exports and EV exposure, not just the latest quarter.
- Bring in governance and accounting red flags from annual reports and rating rationales (auditor remarks, related
  parties, pledges, guarantees, contingent liabilities) — these belong in section 7 and in the verdicts.

Files to write in `S/autorel/` for your group key <key>:
- `<key>_head_part.ts`: sector 'Auto Related'; title 'Auto Related · <group name>'; format 'ranked'; moatCompact; leadCharts;
  businesses `autoRelated<Camel>Businesses` from './auto-related-<key>-businesses'; valuation
  `{ writtenOn: '28 Sep 2026', inputs: autoRelatedValuationInputs, myGrowth }`; standfirst noting it is one of five
  Auto Related groups; lastUpdated '2026-09-28'; asOfQuarter 'Q1 FY27'. Segment label constants for 2–4 segments.
- edit `<key>_metrics_part.ts` (already generated): replace every `note: 'TODO'`, add cellNotes where figures are
  distorted (windfalls, one-offs, acquisitions, standalone bases), `invert: true` on net debt.
- `<key>_tail_part.ts`: moat grid for every company, sections 1 and 3–8 at full depth (section 3 briefly sets the
  Indian auto components context from _sector.md, then focuses on this group), verdicts ranked 1..N, closing naming every
  company with a bold call, bottomLine, sources (only URLs actually listed in the deep files).
- `<key>_calls.txt`: `Name | rank | call | stance | myGrowth | growth needed | label` (loss-makers / not-live "—").
  Use the exact company names from au_cardsum.txt.
Careful TypeScript syntax, balanced `**`. Report back in under 150 words: word count of sections, the calls file,
and any call where the research argued strongly both ways.
