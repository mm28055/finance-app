# Build: automatic handling of renames, ISIN/ticker changes, splits, bonuses, demergers (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT commit or push. Repo: `C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`
(Next.js + Prisma on Supabase Postgres; Windows, use bash). Owner is non-technical; report to me.
The owner HAS approved this job changing these Company fields automatically: `isin`, `ticker`, `aliases`, `targetPrice`.
Change nothing else in the database. Do not rename `Company.name` (sector notes and card data are keyed by the stored name).

## Why
Today when a company is renamed (Akzo Nobel → JSW Dulux, Infibeam → AvenuesAI, Sastasundar → Health X), changes its
ticker, or gets a new ISIN after a face-value split, the Screener lookup (lib/sync-service.ts `resolveScreenerUrl`,
scripts/sync-finance.js `resolveScreenerUrl`) and the ISIN-based exchange jobs (scripts/sync-filings.ts,
scripts/sync-exchange-transcripts.ts, lib/filings/nse.ts) silently lose the company. I patched 10 by hand with
`lib/screener-overrides.json` (ISIN → Screener path). Make this self-healing.

## Sources (all verified reachable, plain GET with a browser User-Agent)
- NSE main board list: https://nsearchives.nseindia.com/content/equities/EQUITY_L.csv
  (SYMBOL, NAME OF COMPANY, SERIES, DATE OF LISTING, PAID UP VALUE, MARKET LOT, ISIN NUMBER, FACE VALUE)
- NSE SME list: https://nsearchives.nseindia.com/emerge/corporates/content/SME_EQUITY_L.csv
- Symbol changes: https://nsearchives.nseindia.com/content/equities/symbolchange.csv (name, old symbol, new symbol, date; no header row)
- Name changes: https://nsearchives.nseindia.com/content/equities/namechange.csv (NCH_SYMBOL, NCH_PREV_NAME, NCH_NEW_NAME, NCH_DT)
- Corporate actions: https://www.nseindia.com/api/corporates-corporateActions?index=equities&from_date=DD-MM-YYYY&to_date=DD-MM-YYYY
  (cookie from https://www.nseindia.com/ first, Referer .../companies-listing/corporate-filings-actions; also try index=sme).
  Fields include comp, isin, symbol, subject, exDate. Subjects look like
  "Face Value Split (Sub-Division) - From Rs 10/- Per Share To Re 1/- Per Share", "Bonus 2:1", "Demerger",
  "Scheme Of Arrangement - Bonus Ncrps 4:1" (preference shares — NOT an equity bonus, ignore).
- BSE is blocked from here. BSE-only companies (numeric ticker = BSE code) keep a stable Screener page at
  `/company/<BSE code>/` across renames.

## Build `scripts/sync-corporate-actions.ts` (`--dry-run`, `--days=N` for the corporate-actions look-back, default 10)
1. **Identity repair** for every visible company:
   - ISIN no longer in the NSE lists → find the company's current listing by its ticker (following symbolchange
     chains) or, failing that, a unique normalised-name match (use the name-change file too) → update `isin` (and
     `ticker` if the symbol changed). Log it.
   - ISIN found but NSE symbol differs from `ticker` and `ticker` is an old symbol per symbolchange.csv → update ticker.
     Do not touch tickers that are BSE codes or free-text names unless the mapping is unambiguous.
   - Company renamed (name-change file / current NSE name clearly differs) → append the new name to `aliases`
     (comma-separated, no duplicates). Never change `name`.
   - Make the Screener lookups self-healing: in BOTH resolvers, after the override check and before searching, try
     the direct page `/company/<NSE symbol>/consolidated/` (from the NSE list by ISIN, or the ticker) or
     `/company/<BSE code>/` for numeric tickers, accepting it only when the page's company name matches the stored name
     or an alias closely enough (reuse the existing name-similarity helpers); also add `aliases` to the search queries.
     Keep lib/screener-overrides.json as the manual last resort. Keep requests paced (≥2.5 s) — Screener blocks bursts.
2. **Splits and bonuses** for our ISINs with exDate inside the look-back window and on or before today:
   factor = old FV / new FV for splits, (a+b)/b for "Bonus a:b". If `targetPrice` is set, divide it by the factor and
   round sensibly. Record every applied action (isin + subject + exDate) in `lib/corporate-actions/applied.json` so it
   is never applied twice. Prices/market caps need no change (Screener is already adjusted). Log it.
3. **Demergers** (and "Scheme of Arrangement" that is a demerger) for our ISINs: record in the same applied file and
   append an entry to `lib/corporate-actions/needs-attention.json`:
   `{ company, sector, exDate, subject, why: "Demerger — sector note needs rewriting" }`. Also, if a NEW listing
   appears in the NSE list whose name clearly derives from one of our companies after that demerger, include it there
   as a candidate to add (do not add companies automatically).
4. Write every automatic change to `lib/corporate-actions/log.json` (date, company, field, old → new, source), capped
   at the last 200 entries.
5. Workflow: add a step to `.github/workflows/sync-finance.yml` BEFORE the price sync that runs the script
   (continue-on-error: true), then after the price sync commit `lib/corporate-actions/*.json` if changed (the job needs
   `permissions: contents: write`; mirror how .github/workflows/sync-filings.yml commits). Env: DATABASE_URL, DIRECT_URL.

## Test
- `npx tsc --noEmit -p .` clean.
- Dry run with `--days=60`: print what it WOULD change (identity repairs, alias additions, target-price adjustments,
  demergers). Sanity-check by eye: Akzo Nobel → alias JSW Dulux; Infibeam → AvenuesAI; any split in Aug–Sep 2026 among
  our companies; HEG and SKF India should appear as past demergers if inside the window (they may be older — fine).
- Then ONE live run with `--days=60`. Verify the changes in the database. Confirm the price sync still resolves the 10
  companies in lib/screener-overrides.json and two random normal companies:
  `node scripts/sync-finance.js -c <ISIN>` for 3 of them only (Screener is rate-limited; do not run the full sync).

Report back in under 200 words: files changed, what the live run changed (counts + examples), anything that looked
risky, and anything left that still needs a human.
