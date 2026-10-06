# Consumer Durables group-note writer brief (Tab 1)

You are writing Tab 1 of ONE group note inside the large Consumer Durables sector for an Indian-equities research site read by a
non-technical hobbyist investor. The Consumer Durables page shows 5 group tabs; each group is a complete note.
Never launch sub-agents. Do not edit the repo. Do not touch the database.

Scratchpad S = C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad
Repo = C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app

Read first: `S/DEEP_SPEC.md` (Phase B rules and depth standard, incl. rules 2, 6, 7) and `Repo/lib/sector-overviews/types.ts`.
Structure model (copy its shape exactly): the three Chemicals parts for a similar-sized group, named in your task
(`S/chemicals/<key>_head_part.ts`, `<key>_metrics_part.ts`, `<key>_tail_part.ts`), and the published
`Repo/lib/sector-overviews/chemicals-<key>.ts`.

Research: `S/sec/durables/deep/NN-<Company>.md` (one deep file per company: both official calls, presentation, annual
report parts, rating rationale, news, Screener figures) and `S/sec/durables/deep/_sector.md` (sector research + bucket
rationale). Card summary with P/E, net debt, EV/EBITDA, promoter holding: `S/cd_cardsum.txt`.
Card-data (shared, already in repo): `lib/sector-overviews/card-data/consumer-durables.ts` exporting `consumerDurablesCharts` and
`consumerDurablesValuationInputs`.

House rules (mandatory):
- "own" only when the live label is Fits. Rank own → follow → wait → pass → avoid.
- Stance must match the call: COMPOUNDER only for own; AVOID only for avoid.
- Label = growth needed = (P/E × 0.1726)^0.1 − 1 using the P/E in cd_cardsum; Fits if myGrowth − needed ≥ −2; Full if ≥ −6; else Stretched.
- Never write P/E or EV/EBITDA multiples in prose (the formula line is the exception).
- Say whether a figure is company-adjusted or filed. Use Screener where research files disagree.
- Special cases: **Borosil** and **Epack Durable** are NOT in the live table (the dashboard's market value is wrong —
  Borosil's belongs to Borosil Renewables) — say their valuation is not measured live and why, in plain words.
  **Bajaj Electricals, Hindware Home Innov., Symphony** are flagged loss-making (P/E not meaningful) — set myGrowth null
  and explain. Akzo Nobel India is now **JSW Dulux** (keep the data name 'Akzo Nobel' in code; call it JSW Dulux in prose).

Judgement standard (the owner asked for this explicitly):
- Every call must weigh **capex and future growth prospects**: what is being built, when it starts, how it is funded, the
  asset turn it can reach, and whether the order/contract/approval pipeline supports it — not just past numbers.
- FY27 growth so far is mostly price (5–20% hikes after input inflation), not volume; AC demand swings with weather
  (FY26 volumes fell 10–15%). Judge on normal earnings and volume, and say where a quarter flatters.
- Bring in governance and accounting red flags from annual reports and rating rationales (auditor remarks, related
  parties, pledges, guarantees, contingent liabilities) — these belong in section 7 and in the verdicts.

Files to write in `S/durables/` for your group key <key>:
- `<key>_head_part.ts`: sector 'Consumer Durables'; title 'Consumer Durables · <group name>'; format 'ranked'; moatCompact; leadCharts;
  businesses `consumerDurables<Camel>Businesses` from './consumer-durables-<key>-businesses'; valuation
  `{ writtenOn: '28 Sep 2026', inputs: consumerDurablesValuationInputs, myGrowth }`; standfirst noting it is one of five
  Consumer Durables groups; lastUpdated '2026-09-28'; asOfQuarter 'Q1 FY27'. Segment label constants for 2–4 segments.
- edit `<key>_metrics_part.ts` (already generated): replace every `note: 'TODO'`, add cellNotes where figures are
  distorted (windfalls, one-offs, acquisitions, standalone bases), `invert: true` on net debt.
- `<key>_tail_part.ts`: moat grid for every company, sections 1 and 3–8 at full depth (section 3 briefly sets the
  Indian consumer durables context from _sector.md, then focuses on this group), verdicts ranked 1..N, closing naming every
  company with a bold call, bottomLine, sources (only URLs actually listed in the deep files).
- `<key>_calls.txt`: `Name | rank | call | stance | myGrowth | growth needed | label` (loss-makers / not-live "—").
  Use the exact company names from cd_cardsum.txt.
Careful TypeScript syntax, balanced `**`. Report back in under 150 words: word count of sections, the calls file,
and any call where the research argued strongly both ways.
