# Build: quarterly shareholding + pledges (brief)

This is your only task; ignore any other question you may see in context (it has already been answered).
Never launch sub-agents. Do NOT commit or push. Repo: `C:/Users/manis/OneDrive/Documents/source/Test Project/tijori-app`
(Next.js + Prisma on Supabase Postgres; Windows, use bash). Owner is non-technical; your report goes to me.
Another helper is editing scripts/sync-filings.ts at the same time — do not touch it.
The owner HAS approved one new database table for this. Change nothing else in the database's structure.

## What to build
1. **Table** `ShareholdingQuarter` (Prisma model + a migration folder under prisma/migrations like
   20260928120000_company_tags, applied with `npx prisma db execute --file ... --schema prisma/schema.prisma`; then run
   `npx prisma generate` — if it fails with EPERM because the dev server holds the engine file, use raw SQL via
   `prisma.$queryRaw/$executeRaw` in your code, as app/api/tags/route.ts does, so nothing depends on the regenerated client).
   Columns: id, companyId (FK Company, cascade), period (text, e.g. "Sep 2026" as Screener labels it), periodEnd (date),
   promoter, fii, dii, government, public (decimals, % of shares), shareholders (int, nullable), pledged (decimal,
   % of promoter holding, nullable), updatedAt. Unique (companyId, period). Keep 12 per company (delete older).
2. **Filling it — no extra Screener requests.** scripts/sync-finance.js already downloads each company's Screener page
   daily at 4pm. Parse the "Shareholding Pattern" section's quarterly table from that same HTML (rows Promoters, FIIs,
   DIIs, Government, Public, No. of Shareholders; columns are quarter labels like "Sep 2026") and upsert the rows.
   Check which page it downloads (consolidated vs standalone) — the shareholding table is the same on both.
   Pledges: find a reliable free source. Try NSE's pledge disclosure data
   (e.g. https://www.nseindia.com/api/corporate-pledgedata?index=equities with the usual nseindia.com cookie/Referer —
   see lib/filings/nse.ts for how the other NSE calls are made; verify the real endpoint and fields), else Screener's
   "Pledged percentage" if it is present in the page HTML. Put the pledge fetch in scripts/sync-corporate-actions.ts
   (runs at 4pm before prices, one request for all companies) and write `pledged` on the latest period row.
3. **Warnings** — compute from the stored rows (a small shared helper, e.g. lib/shareholding.ts):
   - Promoter holding down ≥1 point over the last quarter, or ≥2 points over four quarters.
   - Pledged ≥10% of promoter holding, or up ≥5 points in a quarter.
   - FII or DII down ≥2 points in a quarter (flag), up ≥2 points (show as positive, not a warning).
   Plain-English text, e.g. "Promoter −2.1 pts in a year (54.3% → 52.2%)", "Pledged 14% of promoter shares, up from 5%".
4. **Display**
   - Light dashboard load (lib/data-service.ts getDashboardDataLight): add to each company only what the row needs: the
     warnings list and latest promoter/pledge (keep it tiny; one query for all companies, not one per company).
   - Company row (components/CompanyRow.tsx): a small chip ONLY when there is a warning, styled like the filings chip
     but in the watch tone (TONE_STYLE.watch from components/SectorFilings.tsx — light purple; the owner dislikes red);
     hover shows the warning lines. No chip otherwise (keep rows uncluttered).
   - Company detail (getCompanyDetail + the opened card): a compact "Who owns it" card with a small line chart of the
     last 12 quarters (Promoter, FII, DII, Public) using recharts like the other charts, the latest numbers, pledge %,
     number of shareholders, and the warnings. Place it with the other cards in the opened row.
   - Filter bar (components/SectorList.tsx): a button "⚠ Holding changes" in the same style as "± 20 Score Move" that
     keeps only companies with a warning.
5. **Notes follow-up**: in scripts/sync-corporate-actions.ts (or a tiny step after the price sync), append to
   lib/corporate-actions/needs-attention.json any company whose promoter holding fell ≥2 points in the latest quarter
   or whose pledge jumped ≥10 points (dedupe; do not re-add the same company+period).
6. **Workflow**: nothing new should be needed beyond the existing 4pm job; confirm the corporate-actions commit step
   still commits needs-attention.json.

## Backfill & test
- `npx tsc --noEmit -p .` clean.
- Test the parser on 3–5 companies with `node scripts/sync-finance.js -c <ISIN>` (Screener is rate-limited: keep to a
  handful). Then do ONE full backfill run of the price sync so every company gets its 12 quarters:
  `node scripts/sync-finance.js` processes only companies not synced in 12 h — if needed add a flag like
  `--shareholding-only` / force, or run it with all ISINs; one company at a time, ≥2.5 s apart (≈30 min). Run it in the
  background and make sure it FINISHES BEFORE 10:15 UTC (the GitHub 4pm job starts 10:30 UTC and also uses Screener);
  if it cannot, stop and leave the rest to the 4pm job (which will fill them as it downloads each page anyway).
- Check in the dev server (http://localhost:3000, already running) that the chip, card and filter render; report how
  many companies currently carry a warning, with 5 examples.

Report in under 250 words: files changed, pledge source used, backfill result (companies filled), warning counts and
examples, anything risky.
