# Industrials — write one group note (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do not touch the database. Repo R =
`C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`.

## Background
The owner merged two sectors, Industrial Manufacturing (21 companies) and Industrial Products (13), into one sector
**Industrials**, split into three group tabs (like Auto Related: `R/lib/sector-overviews/auto-related.ts`). Today the
parent `R/lib/sector-overviews/industrials.ts` still shows the two OLD notes as tabs:
- `R/lib/sector-overviews/industrial-manufacturing.ts` + `-businesses.ts` + `card-data/industrial-manufacturing.ts`
- `R/lib/sector-overviews/industrial-products.ts` + `-businesses.ts` + `card-data/industrial-products.ts`
Both are deep, checked research (Q1 FY27; written in Sep 2026). You write ONE new group note from them.

## Your group
Given in your prompt: its slug, label, export names and the exact company keys (the OLD notes' `verdicts[].company`).

## Files to create (create only these; do NOT edit any existing file)
1. `R/lib/sector-overviews/industrials-<slug>.ts` — `export const industrials<Name>: SectorOverview` with
   `sector: 'Industrials'`, `title: '<label>'`, `format: 'ranked'`, `lastUpdated: '2026-09-30'`, `asOfQuarter: 'Q1 FY27'`,
   `businesses: industrials<Name>Businesses`, `valuation`/charts wired exactly as the old notes do (copy their pattern).
2. `R/lib/sector-overviews/industrials-<slug>-businesses.ts` — Tab 2 for your companies.
3. `R/lib/sector-overviews/card-data/industrials-<slug>.ts` — the chart data and valuation inputs for your companies.

## What to carry over, what to write
- **Per-company material moves verbatim** from the old notes: each company's verdict object (`verdicts[]` entry), its
  Tab 2 profile and chart data, its valuation input, and any company rows in comparison tables/metrics. Do NOT change
  any company's call (own/follow/wait/pass/avoid), its view, its price-check inputs or its figures.
- **Write fresh the group-level Tab 1**: the standfirst, the sector analysis sections, the ranking, the comparison
  tables/metrics (only your companies), the demand drivers and risks that matter for THIS group, "what to own / what to
  watch" and the closing lines. Follow the structure, section kinds and depth of the old notes (read
  `R/lib/sector-overviews/types.ts` and both old notes fully first). Rank your companies 1..N afresh within the group
  (the old ranks were within the old sectors).
- **Facts only from the two old notes** (their text, tables and `sources`). No new research, no invented numbers. Carry
  over the sources you use.
- House rules: plain English, short sentences, ₹/cr, bold company names and conclusions, balanced `**`. Price-dependent
  figures use the live placeholders exactly as the old notes do (`{need:KEY|n}`, `{Label:KEY|Fits}`, `{pe:KEY|x}` …); every
  KEY you use must be a company in YOUR valuation inputs. Never hard-code P/E multiples in prose. See
  `R/tools/notes/docs/LIVE_TEXT_BRIEF.md`.

## Check before you finish
- `npx tsc --noEmit -p .` from R must be clean (other helpers are writing sibling files at the same time; only fix
  errors in your own files).
- Read `R/scripts/check-notes.ts` and make sure your note satisfies every rule it applies (verdict companies are
  exactly your group's keys, every Tab 2 profile has a `Verdict:` line matching the verdict, placeholders' keys exist,
  balanced `**`, etc.). Write a small scratch script under your own scratch folder (not in R) that imports your note
  and runs those same checks, and make it pass.

Report in under 100 words: files written, ranking, anything you could not carry over.
