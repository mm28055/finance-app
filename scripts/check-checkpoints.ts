/**
 * Daily, after the price sync: settles numeric checkpoints (lib/checkpoints/checkpoints.json)
 * whose quarter's results are now filed — margin, sales or profit growth, amounts, order book —
 * from the Financials table (filed figures refilled from Screener). Each settled checkpoint
 * is recorded with its actual figure and also added to needs-attention.json, so the weekly
 * review weighs it in the call. Checkpoints are kept three years after their quarter ends. Checkpoints without a metric (events, company-defined
 * figures) and full-year ones are left for the weekly review to judge.
 *
 *   npx tsx scripts/check-checkpoints.ts            (writes)
 *   npx tsx scripts/check-checkpoints.ts --dry-run
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { type Checkpoint, judge, PERCENT_METRICS, formatTarget, dueEnd, KEEP_YEARS } from '../lib/checkpoints';

const FILE = path.join(process.cwd(), 'lib', 'checkpoints', 'checkpoints.json');
const ATTENTION = path.join(process.cwd(), 'lib', 'corporate-actions', 'needs-attention.json');
const AUTO = new Set(['revenueYoY', 'ebitdaMargin', 'patYoY', 'revenue', 'ebitda', 'pat', 'orderBook']);

/** "H1 FY27" is stored as the Q2 FY27 row, "H2 FY27" as Q4 FY27 (half-yearly reporters). */
const storedQuarter = (due: string) => due.replace(/^H1 /, 'Q2 ').replace(/^H2 /, 'Q4 ');
const lastYear = (q: string) => q.replace(/FY(\d{2})$/, (_, y) => `FY${String(Number(y) - 1).padStart(2, '0')}`);

async function main() {
    const dryRun = process.argv.includes('--dry-run');
    const store = JSON.parse(fs.readFileSync(FILE, 'utf8')) as { updated: string; checkpoints: Checkpoint[] };
    const today = new Date().toISOString().slice(0, 10);
    const save = () => { store.updated = today; fs.writeFileSync(FILE, JSON.stringify(store, null, 1) + '\n'); };

    // Kept three years: checkpoints whose quarter ended before then are removed.
    const cutoff = `${Number(today.slice(0, 4)) - KEEP_YEARS}${today.slice(4)}`;
    const before = store.checkpoints.length;
    store.checkpoints = store.checkpoints.filter(c => (dueEnd(c.due) ?? today) >= cutoff);
    const pruned = before - store.checkpoints.length;
    if (pruned) console.log(`${pruned} checkpoints older than ${KEEP_YEARS} years removed.`);

    const open = store.checkpoints.filter(c => c.status === 'pending' && c.metric && AUTO.has(c.metric));
    if (!open.length) {
        console.log('No numeric checkpoints pending.');
        if (pruned && !dryRun) save();
        await prisma.$disconnect();
        return;
    }

    const companies = await prisma.company.findMany({
        where: { name: { in: [...new Set(open.map(c => c.company))] } },
        select: { name: true, financials: { select: { revenue: true, ebitda: true, pat: true, orderBook: true, quarter: { select: { name: true } } } } },
    });
    const byName = new Map(companies.map(c => [c.name.trim().toLowerCase(), c]));
    const num = (v: unknown) => (v === null || v === undefined ? null : Number(v));
    const settled: Checkpoint[] = [];

    for (const c of open) {
        const co = byName.get(c.company.trim().toLowerCase());
        if (!co) continue;
        const q = storedQuarter(c.due);
        const row = co.financials.find(f => f.quarter.name === q);
        const prev = co.financials.find(f => f.quarter.name === lastYear(q));
        const rev = num(row?.revenue);
        if (rev === null) continue; // results not in yet
        let actual: number | null = null;
        switch (c.metric) {
            case 'revenue': actual = rev; break;
            case 'ebitda': actual = num(row!.ebitda); break;
            case 'pat': actual = num(row!.pat); break;
            case 'orderBook': actual = num(row!.orderBook); break;
            case 'ebitdaMargin': { const e = num(row!.ebitda); actual = e === null || !rev ? null : (e / rev) * 100; break; }
            case 'revenueYoY': { const p = num(prev?.revenue); actual = p && p > 0 ? ((rev - p) / p) * 100 : null; break; }
            case 'patYoY': { const n = num(row!.pat), p = num(prev?.pat); actual = n !== null && p && p > 0 ? ((n - p) / p) * 100 : null; break; }
        }
        if (actual === null || !c.op || c.target === undefined) continue;
        const pct = PERCENT_METRICS.has(c.metric!);
        c.status = judge(actual, c.op, c.target, pct);
        c.actual = pct ? `${actual.toFixed(1)}%` : `₹${Math.round(actual).toLocaleString('en-IN')}cr`;
        c.resolvedOn = today;
        c.resolvedBy = 'auto';
        settled.push(c);
    }

    for (const c of settled) console.log(`  ${c.company} | ${c.due} | ${c.text} → ${c.status} (${c.actual}, expected ${formatTarget(c)})`);
    console.log(`${settled.length} checkpoints settled from filed results.`);
    if (dryRun || (!settled.length && !pruned)) { await prisma.$disconnect(); return; }

    save();
    const attention = fs.existsSync(ATTENTION) ? JSON.parse(fs.readFileSync(ATTENTION, 'utf8')) : [];
    for (const c of settled) {
        const subject = `Checkpoint ${c.status}: ${c.id}`;
        if (attention.some((e: any) => e.company === c.company && e.subject === subject)) continue;
        attention.push({
            company: c.company, sector: c.sector, subject,
            why: `${c.text} — actual ${c.actual} (${c.status}). ${c.status === 'met' ? c.ifMet || '' : c.ifMissed || ''} Weigh it in the call and write the outcome on the checkpoint.`.trim(),
            addedOn: today,
        });
    }
    fs.writeFileSync(ATTENTION, JSON.stringify(attention, null, 2) + '\n');
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
