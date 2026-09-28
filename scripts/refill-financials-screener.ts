/**
 * One-time refill of quarterly revenue / operating profit (EBITDA) / profit from
 * Screener's filed results, replacing the transcript-derived figures.
 *
 *   npx tsx scripts/refill-financials-screener.ts --dry-run --only="20 Microns,Avantel"
 *   npx tsx scripts/refill-financials-screener.ts --only="20 Microns,Avantel"
 *   npx tsx scripts/refill-financials-screener.ts            (every visible company)
 *
 * For each company it reads Screener's quarterly table once (consolidated, else
 * standalone) and, for each of the latest FINANCIALS_WINDOW quarters that
 * Screener has, writes revenue, EBITDA and PAT — creating the row if the quarter
 * is missing. Order book and guidance (which only the call gives) are left
 * alone. Year-on-year changes are then recomputed from the refilled figures.
 *
 * Screener's operating profit excludes other income, so EBITDA can sit a little
 * below the figure management quotes on a call.
 */
import 'dotenv/config';
import { prisma } from '../lib/prisma';
import { resolveScreenerUrl, parseQuartersTable, screenerColumnFor } from '../lib/sync-service';
import { FINANCIALS_WINDOW } from '../lib/retention';

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const QUARTER_NAME = /^Q[1-4] FY\d{2}$/;

function pct(curr: number | null, prev: any): number | null {
    if (curr == null || prev == null) return null;
    const p = Number(prev);
    if (!p) return null;
    return Math.round(((curr - p) / Math.abs(p)) * 1000) / 10;
}

async function screenerTable(isin: string | null, ticker: string, name: string) {
    const url = await resolveScreenerUrl(isin, ticker, name);
    if (!url) return null;
    const standalone = url.replace(/consolidated\/?$/, '');
    const pages = url === standalone ? [url] : [url, standalone];
    for (const page of pages) {
        try {
            const res = await fetch(page, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            if (!res.ok) continue;
            const table = parseQuartersTable(await res.text());
            if (!table) continue;
            const sales = table.rows.get('Sales') || table.rows.get('Revenue');
            // An empty consolidated page has columns but no numbers.
            if (!sales || sales.every(v => v == null)) continue;
            return { table, page, consolidated: page !== standalone };
        } catch {
            continue;
        }
    }
    return null;
}

async function main() {
    const args = process.argv.slice(2);
    const dryRun = args.includes('--dry-run');
    const onlyArg = args.find(a => a.startsWith('--only='));
    const only = onlyArg ? onlyArg.split('=').slice(1).join('=').replace(/^["']|["']$/g, '').split(',').map(s => s.trim()).filter(Boolean) : null;

    // The latest FINANCIALS_WINDOW real quarters (skip "General" buckets).
    const allQuarters = await prisma.quarter.findMany({ select: { id: true, name: true, year: true, q: true } });
    const quarters = allQuarters
        .filter(q => QUARTER_NAME.test(q.name))
        .sort((a, b) => b.year - a.year || b.q.localeCompare(a.q))
        .slice(0, FINANCIALS_WINDOW);
    const byName = new Map(allQuarters.filter(q => QUARTER_NAME.test(q.name)).map(q => [q.name, q]));
    console.log(`Quarters: ${quarters.map(q => q.name).join(', ')}${dryRun ? '  (DRY RUN)' : ''}`);

    const companies = await prisma.company.findMany({
        where: { isVisible: true, ...(only ? { name: { in: only } } : {}) },
        select: { id: true, name: true, ticker: true, isin: true },
        orderBy: { name: 'asc' },
    });

    let written = 0, created = 0, noPage = 0, noQuarter = 0;
    for (const [i, c] of companies.entries()) {
        const found = await screenerTable(c.isin ?? null, c.ticker, c.name);
        await sleep(1200);
        if (!found) { noPage++; console.log(`[${i + 1}/${companies.length}] ${c.name}: no verified Screener page — left as is`); continue; }
        const { table, consolidated } = found;
        const get = (label: string, col: number) => { const r = table.rows.get(label); return r && r[col] != null ? r[col] : null; };

        const changes: string[] = [];
        for (const q of quarters) {
            const colName = screenerColumnFor(q.name);
            const col = colName ? table.columns.findIndex(x => x.toLowerCase() === colName.toLowerCase()) : -1;
            if (col === -1) { noQuarter++; continue; }
            const revenue = get('Sales', col) ?? get('Revenue', col);
            if (revenue == null) { noQuarter++; continue; }
            const ebitda = get('Operating Profit', col);
            const pat = get('Net Profit', col);

            const existing = await prisma.financials.findUnique({ where: { companyId_quarterId: { companyId: c.id, quarterId: q.id } } });
            const before = existing ? `${Number(existing.revenue ?? 0)}/${Number(existing.ebitda ?? 0)}/${Number(existing.pat ?? 0)}` : 'none';
            const after = `${revenue}/${ebitda}/${pat}`;
            if (before !== after) changes.push(`${q.name} ${before} → ${after}`);
            if (!dryRun) {
                await prisma.financials.upsert({
                    where: { companyId_quarterId: { companyId: c.id, quarterId: q.id } },
                    update: { revenue, ebitda, pat },
                    create: { companyId: c.id, quarterId: q.id, revenue, ebitda, pat },
                });
                written++;
                if (!existing) created++;
            }
        }

        // Recompute YoY from the refilled numbers where last year's quarter is stored.
        if (!dryRun) {
            for (const q of quarters) {
                const m = q.name.match(/^Q([1-4]) FY(\d{2})$/)!;
                const prev = byName.get(`Q${m[1]} FY${String(Number(m[2]) - 1).padStart(2, '0')}`);
                if (!prev) continue;
                const [cur, old] = await Promise.all([
                    prisma.financials.findUnique({ where: { companyId_quarterId: { companyId: c.id, quarterId: q.id } } }),
                    prisma.financials.findUnique({ where: { companyId_quarterId: { companyId: c.id, quarterId: prev.id } } }),
                ]);
                if (!cur || !old) continue;
                await prisma.financials.update({
                    where: { id: cur.id },
                    data: {
                        revenueYoY: pct(cur.revenue == null ? null : Number(cur.revenue), old.revenue),
                        ebitdaYoY: pct(cur.ebitda == null ? null : Number(cur.ebitda), old.ebitda),
                        patYoY: pct(cur.pat == null ? null : Number(cur.pat), old.pat),
                    },
                });
            }
        }
        console.log(`[${i + 1}/${companies.length}] ${c.name} (${consolidated ? 'consolidated' : 'standalone'}): ${changes.length ? changes.join(' | ') : 'already matched'}`);
    }

    console.log(`\nDone. Rows written: ${written} (new: ${created}). No Screener page: ${noPage}. Quarter not on Screener: ${noQuarter}.`);
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
