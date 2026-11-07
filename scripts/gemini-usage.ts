/**
 * What the Gemini jobs cost, from the token counts lib/gemini-usage.ts records.
 *
 *   npx tsx scripts/gemini-usage.ts            last 7 days, per day and per job
 *   npx tsx scripts/gemini-usage.ts --days=30
 *
 * Prices are Google's list prices per million tokens (USD) as of Nov 2026, prompts under 200k
 * tokens; thinking is billed as output; batch is half price. Search queries are priced at about
 * $14 per 1,000. Check them against the real bill: they are estimates.
 */
import 'dotenv/config';
import { prisma } from '../lib/prisma';
import type { UsageRow } from '../lib/gemini-usage';

const USD_INR = 88;
const SEARCH_USD = 14 / 1000;
// Matched against the start of the model name Google reports.
const PRICES: [RegExp, number, number][] = [
    [/pro/i, 2, 12],
    [/flash-lite/i, 0.10, 0.40],
    [/3[.\d-]*flash/i, 0.50, 3],
    [/flash/i, 0.30, 2.50],
];
const priceOf = (model: string) => PRICES.find(([re]) => re.test(model)) || [null, 2, 12];

function costInr(r: UsageRow): number {
    const [, inP, outP] = priceOf(r.model);
    const usd = (r.input * inP + (r.output + r.thinking) * outP) / 1e6 * (r.batch ? 0.5 : 1) + r.searches * SEARCH_USD;
    return usd * USD_INR;
}

(async () => {
    const days = parseInt((process.argv.find(a => a.startsWith('--days=')) || '--days=7').split('=')[1], 10);
    const cur = await prisma.systemConfig.findUnique({ where: { key: 'GEMINI_USAGE' } });
    await prisma.$disconnect();
    const log: UsageRow[] = cur ? JSON.parse(cur.value) : [];
    const since = new Date(Date.now() + 330 * 60000 - days * 86400000).toISOString().slice(0, 10);
    const rows = log.filter(r => r.day >= since).sort((a, b) => a.day.localeCompare(b.day) || costInr(b) - costInr(a));
    if (!rows.length) { console.log('No Gemini usage recorded yet.'); return; }

    const k = (n: number) => n >= 1e6 ? `${(n / 1e6).toFixed(2)}M` : `${Math.round(n / 1e3)}k`;
    let day = '', dayTotal = 0, all = 0;
    const byJob = new Map<string, number>();
    const endDay = () => { if (day) console.log(`  ${'day total'.padEnd(28)} ₹${Math.round(dayTotal)}\n`); };
    for (const r of rows) {
        if (r.day !== day) { endDay(); day = r.day; dayTotal = 0; console.log(day); }
        const c = costInr(r);
        dayTotal += c; all += c;
        byJob.set(r.job, (byJob.get(r.job) || 0) + c);
        console.log(`  ${r.job.padEnd(28)} ₹${String(Math.round(c)).padEnd(6)} ${r.calls} answers, ${k(r.input)} in, ${k(r.output + r.thinking)} out${r.searches ? `, ${r.searches} searches` : ''} · ${r.model}${r.batch ? ' (batch)' : ''}`);
    }
    endDay();
    console.log(`By job, ${days} days:`);
    for (const [job, c] of [...byJob].sort((a, b) => b[1] - a[1])) console.log(`  ${job.padEnd(28)} ₹${Math.round(c)}`);
    console.log(`  ${'total'.padEnd(28)} ₹${Math.round(all)}`);
})();
