/**
 * Read-only check of cash conversion for every company the notes rate own or follow: five years of
 * operating cash against five years of net profit (Screener, the company's default view), plus free
 * cash and capex, so a working-capital drain can be told from heavy plant spending. Lenders skipped.
 * Writes the list to --out (JSON) and prints the companies converting less than half their profit.
 *
 *   npx tsx scripts/audit-cash-conversion.ts --out=cash-audit.json [--calls=own,follow] [--pace=4000]
 */
import fs from 'fs';
import { prisma } from '../lib/prisma';
import { allSectorOverviews } from '../lib/sector-overviews';
import { companyCallInfo } from '../lib/sector-overviews/calls';
import { screenerPageUrl, fetchScreenerPage, screenerTable, type ScreenerTable } from '../lib/screener-page';

const arg = (n: string) => process.argv.find(a => a.startsWith(`--${n}=`))?.split('=').slice(1).join('=');
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const num = (v: string | null | undefined) => { const t = v?.replace(/,/g, '').replace('%', '').trim(); if (!t) return null; const n = Number(t); return Number.isFinite(n) ? n : null; };

async function main() {
    const wanted = new Set((arg('calls') || 'own,follow').split(','));
    const pace = Number(arg('pace') || 4000);
    const info = [...companyCallInfo(allSectorOverviews()).values()].filter(v => wanted.has(v.call));
    console.log(`${info.length} companies rated ${[...wanted].join('/')}`);
    const out: any[] = [];
    for (const v of info) {
        const co = await prisma.company.findFirst({ where: { name: v.key }, select: { id: true } });
        if (!co) continue;
        let row: any = { company: v.key, sector: v.sector, call: v.call };
        try {
            const page = await screenerPageUrl(co.id);
            let html = page ? await fetchScreenerPage(page.url, 0) : null;
            if (!html) { await sleep(pace * 3); html = page ? await fetchScreenerPage(page.url, 0) : null; }
            const pl = html ? screenerTable(html, 'profit-loss') : null, cf = html ? screenerTable(html, 'cash-flow') : null;
            if (!pl || !cf) { row.status = 'unread'; }
            else if (!pl.rows.some(r => r.label === 'Sales')) { row.status = 'lender'; }
            else {
                const years = cf.columns.filter(c => pl.columns.includes(c) && c !== 'TTM').slice(-5);
                const at = (t: ScreenerTable, label: string) => years.map(y => num(t.rows.find(r => r.label === label)?.values[t.columns.indexOf(y)]));
                const ocf = at(cf, 'Cash from Operating Activity'), fcf = at(cf, 'Free Cash Flow'), np = at(pl, 'Net Profit');
                const sum = (a: (number | null)[]) => a.reduce<number>((s, x) => s + (x ?? 0), 0);
                const profit = sum(np), op = sum(ocf), free = sum(fcf);
                row = { ...row, view: page!.view, years, ocf, fcf, np, profit5: profit, ocf5: op, fcf5: free, capex5: op - free,
                    conversion: profit > 0 ? Math.round((op / profit) * 100) : null, negOcfYears: ocf.filter(x => x !== null && x < 0).length, status: 'ok' };
            }
        } catch (e: any) { row.status = 'unread'; }
        out.push(row);
        if (row.status === 'ok' && row.conversion !== null && row.conversion < 50)
            console.log(`   ${String(row.conversion).padStart(4)}%  ${v.call.padEnd(6)} ${v.key} (${v.sector}) — op cash ₹${row.ocf5}cr vs profit ₹${row.profit5}cr; capex ₹${row.capex5}cr`);
        await sleep(pace);
    }
    fs.writeFileSync(arg('out') || 'cash-audit.json', JSON.stringify(out, null, 1));
    const ok = out.filter(r => r.status === 'ok');
    console.log(`Read ${ok.length}; under 50%: ${ok.filter(r => r.conversion !== null && r.conversion < 50).length}; lenders ${out.filter(r => r.status === 'lender').length}; unread ${out.filter(r => r.status === 'unread').length}.`);
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
