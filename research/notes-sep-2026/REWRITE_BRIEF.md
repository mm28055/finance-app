# Older-note deep rewrite brief (Phase B)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do not commit. Do not touch the database. Edit ONLY the two note files named in your task
(`lib/sector-overviews/<file>.ts` and `<file>-businesses.ts`) in the repo
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`.

Scratchpad S = C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad

1. Read `S/DEEP_SPEC.md` (Phase B rules and depth standard) and follow it, with ONE change to hard rule 1: you MAY change
   calls, ranks, stances and `myGrowth` where the new deep research clearly supports it, provided the house rules hold:
   - "own" only when the live label is Fits; rank own → follow → wait → pass → avoid;
   - stance must match the call (COMPOUNDER only for own; AVOID only for avoid);
   - label = growth needed (P/E × 0.1726)^0.1 − 1 using `peAtWriting` in the note's card-data valuation inputs
     (the file the note imports from `./card-data/...`); Fits if myGrowth − needed ≥ −2; Full if ≥ −6; else Stretched;
   - loss-makers (no P/E) get myGrowth null; never hard-code P/E or EV/EBITDA multiples in prose;
   - every valuation sentence must agree with the label your numbers imply.
2. Research: every file in `S/sec/<dir>/deep/` (company files + `_sector.md`), all read fully. The older stored research in
   `S/sec/<dir>/` and the current note are background only — the deep files and Screener win where they disagree.
3. Rewrite Tab 1 to the Phase B depth standard (sections 1 and 3–8, verdicts, closing, sources); keep the section-2
   metric data and embeds. Weigh capex and future growth prospects in every call, flag windfall quarters, and bring
   governance/accounting findings (auditor remarks, related parties, pledges, contingent liabilities) into section 7 and
   the verdicts. Fix factual errors in Tab 2 (`-businesses.ts`) that the research exposes and add missing material facts.
4. Checks from the repo root: `npx tsc --noEmit -p .` must be silent; `npx tsx check-overview.tmp.ts <exportName> <file>.ts`
   must show no unmatched / uncovered / not-in-closing and balanced bold.
5. Report back in under 150 words: word count before → after; every call/rank/stance/myGrowth change with a one-line
   reason; the final `Name | call | stance | myGrowth | needed | label` list; Tab-2 fixes.
