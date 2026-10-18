/**
 * Results the night they come out: for every company whose results date (lib/events/events.json)
 * fell in the last few days, read the quarter's figures from Screener's quarterly table (revenue,
 * operating profit, margin, net profit, against the same quarter last year and the quarter before),
 * write a short view on them (Gemini, judged against the last call's guidance, the sector note and
 * the expectations tracked for that quarter), and, once the earnings call has been analysed, add
 * what the call changed. Writes lib/results/results.json; the calendar shows it under the results date.
 *
 *   npx tsx scripts/sync-results.ts                          (results dates in the last 5 days)
 *   npx tsx scripts/sync-results.ts --days=10
 *   npx tsx scripts/sync-results.ts --company="CEAT" --quarter="Q1 FY27" --date=2026-08-05 --out=tmp.json   (a test)
 *
 * Screener usually has the new quarter within a few hours of the filing; a company it has not got
 * yet is simply tried again the next night. Never touches the database.
 */
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { geminiPro } from '../lib/gemini';
import { screenerPageUrl, fetchScreenerPage, screenerTable, type ScreenerTable } from '../lib/screener-page';
import { businessFor } from '../lib/sector-overviews';
import type { CompanyEvent } from '../lib/events/types';
import type { QuarterResult, ResultRow, ResultsStore } from '../lib/results/types';
import { RESULTS_KEEP_DAYS } from '../lib/results/types';

const arg = (name: string) => process.argv.find(a => a.startsWith(`--${name}=`))?.split('=').slice(1).join('=');
// --out=<file> writes somewhere else (for trying it out without touching the calendar).
const FILE = path.join(process.cwd(), arg('out') || 'lib/results/results.json');
const EVENTS = path.join(process.cwd(), 'lib/events/events.json');
const CHECKPOINTS = path.join(process.cwd(), 'lib/checkpoints/checkpoints.json');

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
// A low temperature, so the same result gets the same verdict if it is ever written again.
const ask = async (prompt: string): Promise<string> =>
    (await geminiPro.generateContent({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { temperature: 0.2 } })).response.text();
const todayIst = () => new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);
const daysAgo = (n: number) => { const d = new Date(todayIst() + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10); };

/** "Q2 FY27" → Screener's column label "Sep 2026". */
function columnFor(quarter: string): string | null {
    const m = quarter.match(/^Q([1-4]) FY(\d{2})$/);
    if (!m) return null;
    const fy = 2000 + Number(m[2]);
    return ({ 1: `Jun ${fy - 1}`, 2: `Sep ${fy - 1}`, 3: `Dec ${fy - 1}`, 4: `Mar ${fy}` } as Record<string, string>)[m[1]];
}

/** The quarter a results date most likely reports: the last quarter that ended before it. */
function quarterBefore(date: string): string {
    const [y, mo] = date.split('-').map(Number);
    // Results for a quarter come 1–2 months after it ends (Q4 can take until late May).
    const ends: [number, number, string][] = [[y, 3, 'Q4'], [y, 6, 'Q1'], [y, 9, 'Q2'], [y, 12, 'Q3'], [y - 1, 12, 'Q3']];
    const before = ends.filter(([ey, em]) => ey * 12 + em < y * 12 + mo).sort((a, b) => (b[0] * 12 + b[1]) - (a[0] * 12 + a[1]))[0];
    const [ey, em, q] = before;
    const fy = em === 3 ? ey : ey + 1;
    return `${q} FY${String(fy % 100).padStart(2, '0')}`;
}

const num = (v: string | null | undefined) => {
    const t = v?.replace(/,/g, '').replace('%', '').trim();
    if (!t) return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
};
const growth = (now: number | null, then: number | null) => (now === null || then === null || then <= 0 ? null : Math.round(((now - then) / then) * 1000) / 10);
const points = (now: number | null, then: number | null) => (now === null || then === null ? null : Math.round((now - then) * 10) / 10);

/** The quarter's figures from Screener's quarterly table, or null when the quarter is not there yet. */
async function readFigures(companyId: string, quarter: string) {
    const page = await screenerPageUrl(companyId);
    if (!page) return null;
    const html = await fetchScreenerPage(page.url, 0);
    if (!html) return null;
    const q: ScreenerTable | null = screenerTable(html, 'quarters');
    if (!q) return null;
    const col = columnFor(quarter);
    const i = col ? q.columns.indexOf(col) : -1;
    if (i < 0) return null;
    const halfYearly = q.columns.slice(-3).every(c => /^(Mar|Sep) /.test(c));
    const back = halfYearly ? 2 : 4;
    const yi = i - back >= 0 ? i - back : -1, pi = i - 1 >= 0 ? i - 1 : -1;
    const row = (...labels: string[]) => q.rows.find(r => labels.includes(r.label)) ?? null;
    const at = (r: ReturnType<typeof row>, k: number) => (r && k >= 0 ? num(r.values[k]) : null);
    const lender = !row('Sales');
    const make = (label: string, unit: 'cr' | '%', ...src: string[]): ResultRow | null => {
        const r = row(...src);
        if (!r) return null;
        const now = at(r, i), yearAgo = at(r, yi), prev = at(r, pi);
        if (now === null) return null;
        const diff = unit === '%' ? points : growth;
        return { label, unit, now, yearAgo, prev, yoy: diff(now, yearAgo), qoq: halfYearly ? null : diff(now, prev) };
    };
    const rows = [
        make('Revenue', 'cr', 'Sales', 'Revenue'),
        make(lender ? 'Financing profit' : 'Operating profit', 'cr', 'Operating Profit', 'Financing Profit'),
        make(lender ? 'Financing margin' : 'Operating margin', '%', 'OPM %', 'Financing Margin %'),
        make('Net profit', 'cr', 'Net Profit'),
    ].filter((r): r is ResultRow => !!r);
    if (!rows.length) return null;
    // Other income above a third of profit before tax (this quarter or the year-ago one): profit
    // growth may come from one-offs. A distorted year-ago quarter also blanks net profit growth.
    const heavy = (k: number) => {
        const oi = at(row('Other Income'), k), pbt = at(row('Profit before tax'), k);
        return oi !== null && pbt !== null && pbt > 0 && oi > pbt / 3 ? { oi, pbt } : null;
    };
    const nowHeavy = heavy(i), agoHeavy = yi >= 0 ? heavy(yi) : null;
    const notes: string[] = [];
    if (nowHeavy) notes.push(`Other income of ₹${Math.round(nowHeavy.oi).toLocaleString('en-IN')}cr is ${Math.round((nowHeavy.oi / nowHeavy.pbt) * 100)}% of profit before tax this quarter, so profit may not reflect the business.`);
    if (agoHeavy) {
        notes.push(`The year-ago quarter's profit included other income of ₹${Math.round(agoHeavy.oi).toLocaleString('en-IN')}cr (${Math.round((agoHeavy.oi / agoHeavy.pbt) * 100)}% of profit before tax), so net profit growth against it is not shown.`);
        const np = rows.find(r => r.label === 'Net profit');
        if (np) np.yoy = null;
    }
    const oneOff = notes.length ? notes.join(' ') : undefined;
    return {
        view: page.view, rows, oneOff,
        periods: { now: q.columns[i], yearAgo: yi >= 0 ? q.columns[yi] : null, prev: halfYearly || pi < 0 ? null : q.columns[pi] },
        quarterLabel: halfYearly ? quarter.replace(/^Q[12]/, 'H1').replace(/^Q[34]/, 'H2') : quarter,
    };
}

const fmtRow = (r: ResultRow) => {
    const v = (x: number | null) => (x === null ? 'n/a' : r.unit === '%' ? `${x}%` : `₹${x.toLocaleString('en-IN')}cr`);
    const d = (x: number | null) => (x === null ? 'n/a' : r.unit === '%' ? `${x > 0 ? '+' : ''}${x} pts` : `${x > 0 ? '+' : ''}${x}%`);
    return `${r.label}: ${v(r.now)} (year ago ${v(r.yearAgo)}, ${d(r.yoy)}; previous quarter ${v(r.prev)}, ${d(r.qoq)})`;
};

/** What we expected going in: the last results call's guidance, the note's view and the expectations due this quarter. */
async function expectations(company: string, companyId: string, quarter: string) {
    const lines: string[] = [];
    const before = await prisma.analysis.findMany({
        where: { companyId, quarter: { q: { not: 'GEN' } }, NOT: { quarter: { name: quarter } } },
        select: { guidanceText: true, guidanceGrowthMin: true, guidanceGrowthMax: true, guidanceFy: true, guidanceQuote: true, quarter: { select: { name: true, year: true, q: true } } },
    });
    const last = before.sort((a, b) => (b.quarter.year - a.quarter.year) || b.quarter.q.localeCompare(a.quarter.q))[0];
    if (last) {
        const g = last.guidanceGrowthMin !== null || last.guidanceGrowthMax !== null
            ? ` Revenue growth guided: ${last.guidanceGrowthMin ?? '?'}–${last.guidanceGrowthMax ?? '?'}%${last.guidanceFy ? ` for ${last.guidanceFy}` : ''}.` : '';
        lines.push(`Guidance on the ${last.quarter.name} call:${g} ${(last.guidanceText || '').slice(0, 1200)}${last.guidanceQuote ? ` Quote: "${last.guidanceQuote}"` : ''}`);
    }
    const biz = businessFor(company);
    if (biz) {
        const verdict = (biz.profile.inShort || []).find(s => /Verdict:/i.test(s));
        if (verdict) lines.push(`Sector note's verdict: ${verdict}`);
        if (biz.verdict) lines.push(`Note's view: ${biz.verdict.view}\nWhat would break or make the case: ${biz.verdict.watch}`);
        if (biz.profile.watch?.length) lines.push(`Note's watch list: ${biz.profile.watch.join(' | ')}`);
        const g = biz.valuation?.myGrowth?.[biz.profile.company];
        if (typeof g === 'number') lines.push(`Note's base-case profit growth: ${g}% a year over 3–5 years.`);
    }
    const cps: { id: string; company: string; text: string; due: string; status: string }[] = JSON.parse(fs.readFileSync(CHECKPOINTS, 'utf8')).checkpoints;
    const due = cps.filter(c => c.company === company && c.due === quarter);
    return { lines, due };
}

async function writeTake(r: QuarterResult, exp: Awaited<ReturnType<typeof expectations>>) {
    const prompt = `You are writing a short note for a long-term investor on ${r.company}'s ${r.quarter} results (${r.view} figures, filed ${r.resultsDate}).

THE RESULTS (₹ crore):
${r.rows.map(fmtRow).join('\n')}
${r.oneOff ? `Caution: ${r.oneOff}` : ''}

WHAT WAS EXPECTED GOING IN:
${exp.lines.join('\n\n') || 'No guidance or note on record.'}

EXPECTATIONS TRACKED FOR THIS QUARTER:
${exp.due.length ? exp.due.map((c, k) => `${k + 1}. ${c.text}`).join('\n') : 'None.'}

Write:
1. "verdict": one of "ahead", "in line", "behind", "mixed" — against the guidance and the note's expectations (not against the market's).
2. "points": the two to four main points, most important first, for a non-specialist who reads them before the table: how revenue and operating profit grew against last year, whether the margin held, and how that compares with what was expected. Each point one short line (at most 15 words), figures rounded as in the table (growth to whole %, e.g. "Revenue up 19% to ₹176cr, above the 10–15% guided"). Use only the figures above; do not invent any. If other income or a one-off flatters profit, make that a point.
3. "checks": for each tracked expectation above, in order, {"text": <the expectation, shortened>, "status": "met" | "missed" | "unclear", "why": <a few words>}. "unclear" when these figures cannot settle it (most non-financial expectations wait for the call). Empty list if none.

Answer with JSON only: {"verdict": "...", "points": ["...", "..."], "checks": [...]}`;
    const raw = await ask(prompt);
    const j = JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1));
    const verdict = ['ahead', 'in line', 'behind', 'mixed'].includes(j.verdict) ? j.verdict : 'mixed';
    const points: string[] = (Array.isArray(j.points) ? j.points : []).map((p: any) => String(p).trim()).filter(Boolean).slice(0, 4);
    return { verdict, points, text: points.join(' '), checks:Array.isArray(j.checks) ? j.checks.filter((c: any) => c && c.text).map((c: any) => ({ text: String(c.text), status: ['met', 'missed'].includes(c.status) ? c.status : 'unclear', why: String(c.why || '') })) : [], on: todayIst() };
}

/** Once the quarter's call has been analysed: a line or two on what it changed. */
async function writeCallNote(r: QuarterResult, companyId: string) {
    const a = await prisma.analysis.findFirst({
        where: { companyId, quarter: { name: r.quarter } },
        select: { investorBrief: true, guidanceText: true, keyHighlights: true },
    });
    if (!a || !(a.investorBrief || a.keyHighlights)) return null;
    const prompt = `${r.company}'s ${r.quarter} results were judged "${r.take?.verdict || 'not yet judged'}" from the figures alone: ${r.take?.text || ''}

Here is the analysis of the earnings call that followed:
${(a.investorBrief || '').slice(0, 6000)}
${a.keyHighlights ? `Highlights: ${String(a.keyHighlights).slice(0, 2000)}` : ''}
${a.guidanceText ? `Guidance: ${a.guidanceText.slice(0, 1500)}` : ''}

In one or two plain sentences, say what the call added that the figures alone did not: guidance raised, kept or cut; the reason behind the margin or growth; an order, a delay or a one-off explained. If it changes the verdict above, say how. Plain text only.`;
    // Strip quotes only when they wrap the whole answer, so a quote that ends the text survives.
    const text = (await ask(prompt)).trim().replace(/^"([\s\S]*)"$/, '$1');
    return text ? { text, on: todayIst() } : null;
}

async function main() {
    const store: ResultsStore = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : { updated: '', results: [] };
    const events: CompanyEvent[] = JSON.parse(fs.readFileSync(EVENTS, 'utf8')).events;
    const today = todayIst();

    // The results dates to work on.
    let due: { company: string; sector: string; date: string; quarter: string }[];
    const only = arg('company');
    if (only) {
        const co = await prisma.company.findFirst({ where: { name: only }, select: { sector: true } });
        due = [{ company: only, sector: co?.sector || '', date: arg('date') || today, quarter: arg('quarter') || quarterBefore(arg('date') || today) }];
    } else {
        const from = daysAgo(Number(arg('days') || 5));
        due = events.filter(e => e.kind === 'results' && e.date >= from && e.date <= today)
            .map(e => ({ company: e.company, sector: e.sector, date: e.date, quarter: e.quarter || quarterBefore(e.date) }));
    }
    console.log(`${due.length} results dates to check`);

    let read = 0, judged = 0, calls = 0, waiting = 0;
    for (const d of due) {
        const co = await prisma.company.findFirst({ where: { name: d.company }, select: { id: true } });
        if (!co) continue;
        let r = store.results.find(x => x.company === d.company && (x.quarter === d.quarter || x.quarter === d.quarter.replace(/^Q[12]/, 'H1').replace(/^Q[34]/, 'H2')));
        try {
            if (!r) {
                const f = await readFigures(co.id, d.quarter);
                await sleep(2500);
                if (!f) { waiting++; console.log(`   ${d.company}: ${d.quarter} not on Screener yet`); continue; }
                r = { company: d.company, sector: d.sector, quarter: f.quarterLabel, resultsDate: d.date, readOn: today, view: f.view, periods: f.periods, rows: f.rows, ...(f.oneOff ? { oneOff: f.oneOff } : {}) };
                store.results.push(r);
                read++;
                console.log(`   ${d.company}: ${r.quarter} read (${r.rows.map(x => `${x.label} ${x.yoy ?? 'n/a'}`).join(', ')})`);
            }
            if (!r.take) {
                r.take = await writeTake(r, await expectations(d.company, co.id, d.quarter));
                judged++;
                console.log(`   ${d.company}: ${r.take.verdict}`);
            }
            if (!r.call) {
                const c = await writeCallNote(r, co.id);
                if (c) { r.call = c; calls++; console.log(`   ${d.company}: call note added`); }
            }
        } catch (e: any) {
            console.log(`   ${d.company}: failed (${e.message})`);
        }
        fs.writeFileSync(FILE, JSON.stringify(store, null, 1));
    }

    // Results whose call came later than the window above: add the call note when it lands.
    if (!only) {
        for (const r of store.results.filter(x => !x.call && x.resultsDate >= daysAgo(30))) {
            if (due.some(d => d.company === r.company)) continue;
            const co = await prisma.company.findFirst({ where: { name: r.company }, select: { id: true } });
            if (!co) continue;
            try {
                const c = await writeCallNote(r, co.id);
                if (c) { r.call = c; calls++; console.log(`   ${r.company}: call note added`); }
            } catch (e: any) { console.log(`   ${r.company}: call note failed (${e.message})`); }
        }
    }

    const cutoff = daysAgo(RESULTS_KEEP_DAYS);
    store.results = store.results.filter(r => r.resultsDate >= cutoff).sort((a, b) => b.resultsDate.localeCompare(a.resultsDate) || a.company.localeCompare(b.company));
    store.updated = new Date().toISOString();
    fs.writeFileSync(FILE, JSON.stringify(store, null, 1));
    console.log(`Read ${read}, judged ${judged}, call notes ${calls}, not on Screener yet ${waiting}.`);
    await prisma.$disconnect();
}

main().catch(async e => { console.error(e); await prisma.$disconnect(); process.exit(1); });
