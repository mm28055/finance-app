/**
 * Checks every company's stored quarterly figures (the "Financials" box, the sector results table,
 * the automatic checkpoint settlements) against Screener's filed figures, and corrects them.
 *
 *   npx tsx scripts/audit-financials.ts                 (report only; resumes where it stopped)
 *   npx tsx scripts/audit-financials.ts --apply         (write Screener's figures over the differences)
 *   npx tsx scripts/audit-financials.ts --company "Sansera Engineering"
 *   npx tsx scripts/audit-financials.ts --fresh         (start the report again from the first company)
 *
 * Stored figures go wrong in two ways: a call processed before Screener had the quarter keeps the
 * numbers read from the transcript, and one processed before the consolidated results were posted
 * keeps the standalone ones. Screener's consolidated column is preferred; standalone is used only
 * when the company has no consolidated figure for that quarter. No AI is involved.
 *
 * The report is written to <out>.json (default audit-financials.tmp.json in the repo root).
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { resolveScreenerUrl, screenerColumnFor, parseQuartersTable } from '../lib/sync-service';

const arg = (k: string) => { const i = process.argv.indexOf(`--${k}`); return i >= 0 ? process.argv[i + 1] : undefined; };
const flag = (k: string) => process.argv.includes(`--${k}`);
const OUT = path.resolve(arg('out') || 'audit-financials.tmp.json');
const QUARTERS = 6;
const GAP_MS = 3000;
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

interface Diff { company: string; quarter: string; basis: 'consolidated' | 'standalone'; stored: (number | null)[]; screener: (number | null)[] }
interface Report { done: string[]; noPage: string[]; diffs: Diff[] }

let last = 0;
async function page(url: string): Promise<string | null> {
    const wait = last + GAP_MS - Date.now();
    if (wait > 0) await sleep(wait);
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36' } });
        return res.ok ? await res.text() : null;
    } catch { return null; } finally { last = Date.now(); }
}

const num = (v: any) => (v === null || v === undefined ? null : Number(v));
// Stored figures are whole crores; Screener's are too. Allow rounding, flag anything beyond it.
const differs = (a: number | null, b: number | null) => b !== null && (a === null || Math.abs(a - b) > Math.max(1.5, Math.abs(b) * 0.015));
const pct = (now: number | null, then: number | null) => (now === null || then === null || then <= 0 ? null : Math.round(((now - then) / then) * 1000) / 10);

async function main() {
    const report: Report = !flag('fresh') && !arg('company') && fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : { done: [], noPage: [], diffs: [] };
    const only = arg('company');
    const companies = await prisma.company.findMany({
        where: { isVisible: true, ...(only ? { name: only } : {}) },
        select: { id: true, name: true, ticker: true, isin: true, aliases: true },
        orderBy: { name: 'asc' },
    });
    const done = new Set(report.done);

    for (const [i, co] of companies.entries()) {
        if (done.has(co.name)) continue;
        // Restated by hand after a demerger (see RESTATED_QUARTERS in scripts/sync-finance.js): not Screener's on purpose.
        if (co.name.trim() === 'SKF India') { report.done.push(co.name); continue; }
        const rows = await prisma.financials.findMany({
            where: { companyId: co.id, quarter: { q: { not: 'GEN' } } },
            include: { quarter: true },
            orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }],
            take: QUARTERS,
        });
        if (rows.length) {
            const url = await resolveScreenerUrl(co.isin, co.ticker, co.name, undefined, co.aliases);
            if (!url) { report.noPage.push(co.name); }
            else {
                const standaloneUrl = url.replace(/consolidated\/?$/, '');
                const cons = url === standaloneUrl ? null : await page(url);
                const consTable = cons ? parseQuartersTable(cons) : null;
                let saTable: ReturnType<typeof parseQuartersTable> | undefined;
                const figures = async (column: string) => {
                    const read = (t: ReturnType<typeof parseQuartersTable>) => {
                        const c = t ? t.columns.findIndex(x => x.toLowerCase() === column.toLowerCase()) : -1;
                        if (!t || c < 0) return null;
                        const cell = (...labels: string[]) => { for (const l of labels) { const v = t.rows.get(l)?.[c]; if (v !== undefined && v !== null) return v; } return null; };
                        const revenue = cell('Sales', 'Revenue');
                        // Lenders have no operating profit row; theirs is left blank, as stored.
                        return revenue === null ? null : [revenue, cell('Operating Profit'), cell('Net Profit')] as (number | null)[];
                    };
                    const c = read(consTable);
                    if (c) return { basis: 'consolidated' as const, v: c };
                    if (saTable === undefined) { const html = await page(standaloneUrl); saTable = html ? parseQuartersTable(html) : null; }
                    const s = read(saTable);
                    return s ? { basis: 'standalone' as const, v: s } : null;
                };
                for (const r of rows) {
                    const column = screenerColumnFor(r.quarter.name);
                    if (!column) continue;
                    const f = await figures(column);
                    if (!f) continue; // Screener has no figures for that quarter yet
                    const stored = [num(r.revenue), num(r.ebitda), num(r.pat)];
                    if (stored.some((s, k) => differs(s, f.v[k]))) {
                        report.diffs.push({ company: co.name, quarter: r.quarter.name, basis: f.basis, stored, screener: f.v });
                        if (flag('apply')) await prisma.financials.update({ where: { id: r.id }, data: { revenue: f.v[0], ebitda: f.v[1] ?? r.ebitda, pat: f.v[2] ?? r.pat } });
                    }
                }
                // After corrections, the growth figures stored beside each quarter are worked out again.
                if (flag('apply') && report.diffs.some(d => d.company === co.name)) {
                    const all = await prisma.financials.findMany({ where: { companyId: co.id, quarter: { q: { not: 'GEN' } } }, include: { quarter: true } });
                    for (const r of all) {
                        const prev = all.find(x => x.quarter.q === r.quarter.q && x.quarter.year === r.quarter.year - 1);
                        if (!prev) continue;
                        await prisma.financials.update({ where: { id: r.id }, data: {
                            revenueYoY: pct(num(r.revenue), num(prev.revenue)) ?? r.revenueYoY,
                            ebitdaYoY: pct(num(r.ebitda), num(prev.ebitda)),
                            patYoY: pct(num(r.pat), num(prev.pat)),
                        } });
                    }
                }
            }
        }
        report.done.push(co.name);
        if (!only && (i % 10 === 9 || i === companies.length - 1)) fs.writeFileSync(OUT, JSON.stringify(report, null, 1));
        if (i % 25 === 24) console.log(`${i + 1}/${companies.length} checked, ${report.diffs.length} differences so far`);
    }
    if (!only) fs.writeFileSync(OUT, JSON.stringify(report, null, 1));
    const byCo = new Set(report.diffs.map(d => d.company));
    console.log(`DONE: ${report.done.length} companies checked; ${report.diffs.length} quarters differ across ${byCo.size} companies; ${report.noPage.length} with no Screener page${flag('apply') ? ' (corrected)' : ''}`);
    if (only) report.diffs.forEach(d => console.log(`  ${d.quarter} (${d.basis}): stored ${d.stored.join('/')} -> Screener ${d.screener.join('/')}`));
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
