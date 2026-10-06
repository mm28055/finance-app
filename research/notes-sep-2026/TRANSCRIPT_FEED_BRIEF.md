# Build: transcripts straight from the exchange (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT commit or push. Repo: `C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`
(Next.js + Prisma on Supabase Postgres; Windows, use bash). Scratchpad S =
`C:/Users/manis/AppData/Local/Temp/claude/C--Users-manis-OneDrive-Documents-source-Test-Project-tijori-app/31c77516-1153-4b67-b723-3a24371b2c56/scratchpad`.
Owner is non-technical; your report goes to me, not to him.

## Goal
Today call transcripts come from Tijori (`scripts/smart-sync.ts`), which downloads the PDF, classifies it, stores it as a
`Transcript` row (quarter slot like "Q1 FY27", or a "General 06 Jul 2026" slot for non-results documents), uploads the PDF
to Supabase storage and runs `processTranscript` (lib/sync-service.ts; financials come from Screener first, guidance is
extracted via lib/guidance-extract.ts). Build a second source: the exchange feed, run daily. Tijori stays on in parallel.

The owner wants four kinds of document kept apart:
1. **Results call** transcript (the quarterly earnings call) → that quarter's slot, full pipeline.
2. **AGM** transcript (Annual General Meeting) → a General slot, analysed; shown on the company card as "AGM".
3. **Special call** (investor/analyst day, acquisition or business-update call, analyst meet transcript) → a General slot,
   analysed; shown as "Special call".
4. **Filings** → the existing daily digest (scripts/sync-filings.ts). Do not change it except for sharing the feed code.
   Transcripts, audio recordings and call schedules must never appear as filings (already skipped there — keep it so).

## What I found (use it)
- NSE feed: `https://www.nseindia.com/api/corporate-announcements?index=equities|sme&from_date=DD-MM-YYYY&to_date=...`
  with a cookie from fetching https://www.nseindia.com/ first (see `nseAnnouncements` in scripts/sync-filings.ts). Match our
  companies by `sm_isin` = Company.isin. Fields: `desc` (category), `attchmntText` (subject), `attchmntFile` (PDF URL),
  `an_dt` ("25-Sep-2026 18:23:48"), `sm_name`. A survey of Aug–Sep 2026 is in `S/nse_survey.json` (our companies only,
  fields co/desc/text/date/file).
- Transcripts are mostly `desc` = "Analysts/Institutional Investor Meet/Con. Call Updates" with "transcript" in the
  subject; a few are under "Updates", "General Updates" or "Shareholders meeting" (AGM transcripts). The subject is often
  just "...has informed the Exchange about Transcript", so the TYPE and QUARTER must come from the PDF text.
  Audio-recording links and call schedules are the same category — skip them (no "transcript" in subject).
- Existing helpers: `lib/doc-type.ts` (`classifyTranscript`, `isRelatedEntityCall`), `lib/quarters.ts`
  (`getFinancialQuarter`, `generalQuarterName`, `isGeneralQuarter`, GENERAL_Q), `lib/retention.ts` (window/pruning),
  smart-sync's `handleFileDownload` (Supabase bucket 'Conf Call Pdfs', path `<sector>/<slot>/<SafeName>_<slot>.pdf`),
  its slot logic (identity by `sourceEventDate` day, General fallback, id scheme `real-<TICKER>-<slot>`), its
  `cleanupOldQuarters`, and scripts/ingest-from-url.ts (a minimal URL → transcript → processTranscript example).
  Reuse; move shared bits into lib/ rather than copy-paste where practical (without changing smart-sync's behaviour).
- NSE covered ~370 of our companies' transcripts in Aug–Sep vs 565 Q1 FY27 transcripts from Tijori. BSE-only companies
  (numeric ticker, often no NSE listing) never appear on NSE; BSE's API is blocked from here. Screener's company page has
  a "Concalls" list (Documents section) with Transcript links (usually bseindia.com AttachHis PDFs, which download fine).

## Build
1. `lib/filings/nse.ts` (or similar): the NSE feed reader shared by sync-filings.ts and the new script.
2. `scripts/sync-exchange-transcripts.ts` with `--from=DD-MM-YYYY --to=DD-MM-YYYY` (default last 3 days), `--dry-run`,
   `--only="Name1,Name2"`, `--source=nse|screener|both` (default both):
   - NSE: our companies' filings whose subject mentions transcript (and not audio/recording only).
   - Screener fallback, only for companies with no NSE listing (decide sensibly, e.g. no NSE match / numeric ticker):
     read the Concalls list, take transcripts dated inside the window. Space Screener requests ≥ 3 s apart, one at a time.
   - For each document: skip if a Transcript for this company already exists with the same event day
     (`sourceEventDate`) or the same file URL. Download, parse text (pdf-parse), then decide the type:
     AGM if the opening text is an Annual General Meeting; results call if `classifyTranscript` says earnings call and it is
     not a related entity's call — its quarter from the text's stated quarter where possible ("quarter ended June 30,
     2026", "Q1 FY27"), else `getFinancialQuarter` of the call date; otherwise special call. If the quarter slot is already
     filled (e.g. by Tijori), do not overwrite: skip if it is the same call (same day), else file as General.
   - Store exactly as smart-sync does (Supabase upload, Transcript row with sourceEventDate = call date if stated, else
     filing date), run `processTranscript`, respect the retention window / cleanup, and log clearly one line per document:
     `company | type | slot | action`.
   - Record the type of General documents so the site can label them AGM vs Special call WITHOUT a schema change (e.g.
     put `AGM` / `SPECIAL` in the storage path or decide at display time from the opening text — your call, keep it simple
     and robust). No Prisma schema changes, no migrations.
3. **Guidance from AGMs and special calls** (owner approved): the row's guidance today comes from the latest non-General
   Analysis (lib/data-service.ts ~line 80–200). If a General analysis NEWER than that quarter's call has guidance with
   basis 'STATED' and a number, show that instead, and make the source visible where the guidance is shown (e.g. tooltip
   or small text "from AGM, 23 Sep" / "from special call, 5 Sep"). Vague comments never override. Make sure
   `processTranscript` runs guidance extraction for General slots too (check line ~494).
4. **Display**: on the expanded company card, General documents should read "AGM · 23 Sep 2026" or
   "Special call · 5 Sep 2026" instead of "General 23 Sep 2026" wherever that label shows. Keep scores and quarter tabs
   unaffected (General is already excluded from scores — keep it so).
5. Add a step to `.github/workflows/sync-filings.yml` (8pm IST job) that runs the new script after the filings step, with
   env DATABASE_URL, DIRECT_URL, GOOGLE_AI_KEY, GOOGLE_AI_KEYS, NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
   (check which env names the code actually reads). The transcript step must not stop the filings commit if it fails
   (continue-on-error or order it after the commit step).

## Test (limits matter)
- `npx tsc --noEmit -p .` clean.
- Dry run over 21-07-2026 → 28-09-2026: print a table of counts by type and by action, and 15 sample lines. Check by
  eye that AGMs (e.g. Metro Brands 23 Sep, Solex Energy 26 Sep, Quess Corp 1 Sep) and special calls are classified right
  and that results calls get the right quarter. Fix misclassifications.
- Live run on AT MOST 4 documents: 2 results-call transcripts for companies that have NO Q1 FY27 transcript in the
  database (so nothing is overwritten), 1 AGM, 1 special call. Another job is using Screener right now; keep Screener use
  to those few (processTranscript reads Screener once per company). Do not run the full live job.
- Verify in the database that the 4 rows exist with the right slots, analyses and (where stated) guidance; check the
  company card in the running dev server (http://localhost:3000, already running) if you can.
- Do not delete or modify any existing Transcript/Analysis rows.

Report back in under 250 words: files changed, how types are decided, dry-run counts, the 4 live results (company, type,
slot, guidance), anything the owner must do (e.g. GitHub secrets names), and open risks.
