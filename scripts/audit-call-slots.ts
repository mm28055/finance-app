/**
 * Read-only check of results-call slots against Screener's "Concalls" list.
 *
 * For every results-slot call in the chosen quarters, finds Screener's concall entries in the
 * call's month or the next one (Screener files a call under the month its transcript was filed)
 * and reports:
 *   ok         an entry with a transcript or a recording — a call was held
 *   ppt-only   entries, but only a presentation: probably no call (a deal or results deck)
 *   none       no entry at all in those months
 *   no-page    Screener page or its Concalls list could not be read
 * Nothing is changed. Writes the full list to the --out file (JSON).
 *
 *   npx tsx scripts/audit-call-slots.ts --quarters="Q4 FY26,Q1 FY27" --out=call-slot-audit.json
 */
import fs from 'fs';
import { prisma } from '../lib/prisma';
import { screenerPageUrl, fetchScreenerPage } from '../lib/screener-page';
import { screenerConcalls, type ConcallEntry } from '../lib/reporting';

const arg = (n: string) => process.argv.find(a => a.startsWith(`--${n}=`))?.split('=').slice(1).join('=');
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const monthKey = (d: Date, plus = 0) => { const x = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + plus, 1)); return `${MONTHS[x.getUTCMonth()]} ${x.getUTCFullYear()}`; };

async function main() {
    const quarters = (arg('quarters') || 'Q4 FY26,Q1 FY27').split(',').map(s => s.trim());
    // --retry=<earlier --out file>: only the companies that file could not read; --pace=<ms> between companies.
    const retry = arg('retry') ? new Set((JSON.parse(fs.readFileSync(arg('retry')!, 'utf8')) as any[]).filter(x => x.status === 'no-page').map(x => x.company)) : null;
    const pace = Number(arg('pace') || 2500);
    const allRows = await prisma.transcript.findMany({
        where: { quarter: { name: { in: quarters } }, company: { isVisible: true } },
        select: { companyId: true, sourceEventDate: true, createdAt: true, company: { select: { name: true } }, quarter: { select: { name: true } } },
    });
    const rows = retry ? allRows.filter(r => retry.has(r.company.name)) : allRows;
    console.log(`${rows.length} results-slot calls in ${quarters.join(', ')}`);
    const pages = new Map<string, ConcallEntry[] | null>();
    const out: any[] = [];
    const tally: Record<string, number> = {};
    for (const r of rows) {
        if (!pages.has(r.companyId)) {
            let list: ConcallEntry[] | null = null;
            try {
                const page = await screenerPageUrl(r.companyId);
                const html = page ? await fetchScreenerPage(page.url.replace(/consolidated\/?$/, ''), 0) : null;
                list = html ? screenerConcalls(html) : null;
            } catch { /* no page */ }
            if (!list) { await sleep(pace * 3); try { const page = await screenerPageUrl(r.companyId); const html = page ? await fetchScreenerPage(page.url.replace(/consolidated\/?$/, ''), 0) : null; list = html ? screenerConcalls(html) : null; } catch { /* still no page */ } }
            pages.set(r.companyId, list);
            await sleep(pace);
        }
        const list = pages.get(r.companyId);
        const d = r.sourceEventDate || r.createdAt;
        const window = [monthKey(d, 0), monthKey(d, 1)];
        const near = (list || []).filter(e => window.includes(e.month));
        const status = !list ? 'no-page' : near.some(e => e.transcript || e.rec) ? 'ok' : near.length ? 'ppt-only' : 'none';
        tally[status] = (tally[status] || 0) + 1;
        out.push({ company: r.company.name, quarter: r.quarter.name, date: d.toISOString().slice(0, 10), status, screener: (list || []).slice(0, 6) });
        if (status !== 'ok') console.log(`   ${status.padEnd(8)} ${r.company.name} ${r.quarter.name} (${d.toISOString().slice(0, 10)}) — Screener: ${(list || []).slice(0, 4).map(e => `${e.month}${e.transcript ? ' T' : ''}${e.rec ? ' R' : ''}${e.ppt ? ' P' : ''}`).join(', ') || 'nothing'}`);
    }
    fs.writeFileSync(arg('out') || 'call-slot-audit.json', JSON.stringify(out, null, 1));
    console.log('Summary:', JSON.stringify(tally));
    await prisma.$disconnect();
}

if (require.main === module) main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
