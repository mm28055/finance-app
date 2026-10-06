# Move the daily price update from Screener to NSE's closing-price file (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT commit or push. Repo R = `C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`.
Owner is non-technical; report to me. Another helper is NOT touching these files; I am editing components/ and a new
API route only. Screener is rate-limited: keep any Screener use in testing to a handful of requests.

## Why
`scripts/sync-finance.js` (weekday 4pm GitHub job, `.github/workflows/sync-finance.yml`) downloads ~650 Screener pages a
day for price, market cap, P/E, P/B, dividend yield, ROCE, 52-week high/low, TTM sales and (new) the shareholding table.
If Screener blocks us, prices freeze. NSE publishes one end-of-day file with every listed share's close (the
"bhavcopy"). Use it so daily Screener use drops by ~95%.

## Build
1. **NSE daily prices.** Find the current NSE bhavcopy for equities and SME (e.g. the CM "BhavCopy" / UDiFF zip at
   nsearchives.nseindia.com — verify the exact current URL/format and that it downloads with a browser User-Agent,
   using the cookie approach in lib/filings/nse.ts if needed). Parse symbol, ISIN, series, close, and if present
   52-week high/low; if the 52-week figures are not in it, NSE has a separate 52-week high/low file — find it, else keep
   Screener's weekly. Match companies by ISIN (then NSE symbol, see lib/corporate-actions/nse-lists.ts).
2. **Derived figures (no Screener):**
   - shares outstanding: store per company (derive from Screener's market cap ÷ price once, or better from NSE's
     issued-shares data if available); refresh when a corporate action changes it (splits/bonuses are already detected
     in scripts/sync-corporate-actions.ts — adjust shares there) and weekly from Screener as a check.
   - market cap = close × shares; P/E = market cap ÷ sum of the last four quarters' net profit from the Financials
     table (skip GEN; if any of the four is missing or it is a half-yearly SME, use the two latest halves; if the sum
     ≤ 0 → null, loss-making); P/S = market cap ÷ ttmSales; P/B = price ÷ book value per share (book value stays as the
     last Screener figure, refreshed weekly or when annual results arrive).
   - ROCE, dividend yield, book value, ttmSales, shareholding: keep reading them from Screener, but at most WEEKLY per
     company (spread across the week, e.g. companies whose id hashes to the weekday), not daily.
   Any new column needs owner approval — use existing Company columns where possible; if you truly need one
   (e.g. sharesOutstanding), add it to prisma/schema.prisma AND a migration folder like the existing ones, apply it
   with `npx prisma db execute`, and TELL ME in your report so I commit schema and code together (the site's build
   runs `prisma db push` and will refuse to deploy if the database and schema differ).
3. **BSE-only companies** (not in NSE's file, ~16): keep the Screener daily read for them only.
4. **Before switching, compare.** Compute our P/E and market cap for every company with today's NSE close and compare
   with the stored Screener values (Company.peRatio, marketCap as refreshed yesterday). Report counts: within 5%,
   5–20%, over 20%, and list the over-20% cases with the likely reason (minority interest, half-yearly SME, missing
   quarters, loss). Fix what is fixable (e.g. use Screener's P/E where our quarters are incomplete).
5. Update the workflow if needed (it already runs `node scripts/sync-finance.js`). Keep `--company`, `--shareholding-only`
   flags working. Keep the 12-hour freshness logic sensible for the new flow.

## Test
`npx tsc --noEmit -p .` clean. Dry run (no writes) showing counts and the comparison. Then ONE live run that writes
prices for all companies from NSE, and verify 5 random companies against their Screener pages (read-only, ≤5 requests).
Report in under 250 words: NSE file used, how shares are obtained, comparison results, schema changes (if any),
Screener requests per day before vs after, anything risky.
