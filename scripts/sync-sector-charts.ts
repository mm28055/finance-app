/**
 * The sector pages' chart figures, kept up to date without anyone retyping them.
 *
 * For every company named in a sector note, reads its Screener page (quarterly results, profit and
 * loss, balance sheet, cash flow, ratios) plus the cash-equivalents and fixed-asset-spending breakdowns, and saves the raw
 * figures to lib/sector-overviews/live-metrics.json. lib/sector-overviews/live-metrics.ts turns
 * them into the chart grid and the valuation table's net debt and trailing operating profit.
 *
 * Nightly (sync-sector-charts.yml). A company is read again
 *   - the morning after its results (lib/events/events.json), until its new quarter shows, and
 *   - otherwise once a week,
 * at most --limit companies a night (default 250), results first, then the longest unread.
 *
 *   npx tsx scripts/sync-sector-charts.ts                 (due companies)
 *   npx tsx scripts/sync-sector-charts.ts --all           (every company, ~2 hours)
 *   npx tsx scripts/sync-sector-charts.ts "Data Patterns" (named companies only)
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import { allSectorOverviews } from '../lib/sector-overviews';
import { noteCompanies, type LiveFigures, type LiveStore } from '../lib/sector-overviews/live-metrics';
import { resolveScreenerUrl } from '../lib/sync-service';
import { screenerTable, screenerCompanyId } from '../lib/screener-page';

const FILE = path.join(process.cwd(), 'lib', 'sector-overviews', 'live-metrics.json');
const args = process.argv.slice(2);
const ALL = args.includes('--all');
const LIMIT = Number(args.find(a => a.startsWith('--limit='))?.split('=')[1] ?? 250);
const NAMES = args.filter(a => !a.startsWith('--')).map(a => a.toLowerCase());

const DAY = 86400000;
const today = () => new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);
const daysBetween = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);

// ── Screener, politely: one request every 2.5 s, pages kept for the run ─────────
const GAP = 2500;
let last = 0;
const pages = new Map<string, string>();
async function get(url: string): Promise<Response> {
    const cached = pages.get(url);
    if (cached !== undefined) return new Response(cached, { status: 200 });
    for (let attempt = 1; ; attempt++) {
        const wait = last + GAP - Date.now();
        if (wait > 0) await new Promise(r => setTimeout(r, wait));
        let res: Response;
        try {
            res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36' } });
        } catch (e) {
            if (attempt < 3) continue;
            throw e;
        } finally {
            last = Date.now();
        }
        // Rate limited: back off and try again.
        if (res.status === 429 && attempt < 4) { await new Promise(r => setTimeout(r, 20000 * attempt)); continue; }
        if (!res.ok) return res;
        const text = await res.text();
        if (pages.size > 20) pages.delete(pages.keys().next().value!);
        pages.set(url, text);
        return new Response(text, { status: 200 });
    }
}
const page = async (url: string) => { const r = await get(url); return r.ok ? r.text() : null; };

// ── Parsing ────────────────────────────────────────────────────────────────────
const num = (s: string | null | undefined): number | null => {
    if (s === null || s === undefined) return null;
    const t = String(s).replace(/,/g, '').replace(/%$/, '').trim();
    if (!t || t === '-') return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
};

function rows(html: string, section: string) {
    const t = screenerTable(html, section);
    if (!t) return { cols: [] as string[], row: (..._: string[]) => [] as (number | null)[] };
    const keep = t.columns.map((c, i) => (/^[A-Za-z]{3}\s+\d{4}$/.test(c.trim()) ? i : -1)).filter(i => i >= 0);
    const cols = keep.map(i => t.columns[i].trim());
    const row = (...labels: string[]) => {
        for (const l of labels) {
            const r = t.rows.find(x => x.label.toLowerCase().startsWith(l.toLowerCase()));
            if (r) return keep.map(i => num(r.values[i]));
        }
        return cols.map(() => null);
    };
    return { cols, row };
}

async function schedule(id: string, parent: string, section: string, consolidated: boolean): Promise<Record<string, Record<string, string>>> {
    const url = `https://www.screener.in/api/company/${id}/schedules/?parent=${encodeURIComponent(parent)}&section=${section}${consolidated ? '&consolidated=' : ''}`;
    try {
        const r = await get(url);
        if (!r.ok) return {};
        return await r.json();
    } catch { return {}; }
}

function figures(html: string, url: string, view: LiveFigures['view'], cash: Record<string, string>, bought: Record<string, string>): Omit<LiveFigures, 'at' | 'got'> {
    const q = rows(html, 'quarters'), pl = rows(html, 'profit-loss'), bs = rows(html, 'balance-sheet');
    const cf = rows(html, 'cash-flow'), ra = rows(html, 'ratios');
    // Profit and loss years are the frame; the other annual tables are lined up to them.
    const align = (t: typeof cf, ...labels: string[]) => {
        const vals = t.row(...labels);
        return pl.cols.map(c => { const i = t.cols.indexOf(c); return i < 0 ? null : vals[i]; });
    };
    const sixMonths = q.cols.length >= 2 && (() => {
        const d = (s: string) => Date.parse(`1 ${s}`);
        return Math.round((d(q.cols.at(-1)!) - d(q.cols.at(-2)!)) / (30 * DAY)) >= 5;
    })();
    const equity = bs.row('Equity Capital').map((v, i) => { const r = bs.row('Reserves')[i]; return v === null && r === null ? null : (v ?? 0) + (r ?? 0); });
    const has = (vals: (number | null)[]) => vals.some(v => v !== null);
    const gnpa = q.row('Gross NPA'), nnpa = q.row('Net NPA');
    return {
        url, view,
        ...(sixMonths ? { half: true } : {}),
        q: q.cols, qSales: q.row('Sales', 'Revenue'), qOp: q.row('Operating Profit', 'Financing Profit'),
        ...(has(gnpa) ? { qGnpa: gnpa } : {}), ...(has(nnpa) ? { qNnpa: nnpa } : {}),
        y: pl.cols, sales: pl.row('Sales', 'Revenue'), op: pl.row('Operating Profit', 'Financing Profit'), np: pl.row('Net Profit'), interest: pl.row('Interest'),
        ocf: align(cf, 'Cash from Operating'), fcf: align(cf, 'Free Cash Flow'),
        // Spending on fixed assets, as the notes measured it (Screener's "Fixed assets purchased").
        capex: pl.cols.map(c => { const v = num(bought[c]); return v === null ? null : -v; }),
        roce: align(ra, 'ROCE'), roe: align(ra, 'ROE'), ccc: align(ra, 'Cash Conversion Cycle'),
        b: bs.cols, borrow: bs.row('Borrowings', 'Borrowing'), cash: bs.cols.map(c => num(cash[c])), inv: bs.row('Investments'),
        block: bs.row('Fixed Assets', 'Net Block'), equity, assets: bs.row('Total Assets'),
    };
}

/** The page the company card shows: consolidated unless it is empty or has stopped being filed. */
async function choosePage(found: string): Promise<{ url: string; view: LiveFigures['view']; html: string } | null> {
    const base = found.replace(/consolidated\/?$/, '').replace(/\/?$/, '/');
    const cons = `${base}consolidated/`;
    const latestQuarter = (h: string | null) => Date.parse(`1 ${(h && screenerTable(h, 'quarters')?.columns.at(-1)) || ''}`);
    if (/\/consolidated\/?$/.test(found)) {
        const html = await page(cons);
        const pl = html ? screenerTable(html, 'profit-loss') : null;
        const filled = pl?.rows.some(r => r.values.filter(x => x !== null).length >= 2);
        if (html && filled) {
            const ours = latestQuarter(html);
            if (Number.isFinite(ours) && Date.now() - ours > 150 * DAY) {
                const alone = await page(base);
                if (alone && latestQuarter(alone) > ours) return { url: base, view: 'standalone', html: alone };
            }
            // A company that only lately began filing group accounts (Stove Kraft: 2015–21, then 2026)
            // has gaps in the last five years; its own page has them all.
            const recentYears = (h: string) => {
                const cols = (screenerTable(h, 'profit-loss')?.columns || []).filter(c => /^[A-Za-z]{3}\s+\d{4}$/.test(c.trim()));
                const last = Number(cols.at(-1)?.slice(-4));
                return cols.filter(c => Number(c.slice(-4)) > last - 5).length;
            };
            if (recentYears(html) < 4) {
                const alone = await page(base);
                if (alone && recentYears(alone) > recentYears(html)) return { url: base, view: 'standalone', html: alone };
            }
            // Banks: the group page leaves bad loans blank; the bank's own page has them (the notes used it).
            const npa = (h: string) => screenerTable(h, 'quarters')?.rows.find(r => /^Gross NPA/i.test(r.label));
            const groupNpa = npa(html);
            if (groupNpa && groupNpa.values.at(-1) === null) {
                const alone = await page(base);
                if (alone && npa(alone)?.values.at(-1) != null) return { url: base, view: 'standalone', html: alone };
            }
            return { url: cons, view: 'consolidated', html };
        }
    }
    const html = await page(base);
    return html ? { url: base, view: 'standalone', html } : null;
}

/**
 * A company card added without a group would sit in "Not yet placed in a group" on its sector's
 * charts: list it for the next session (lib/corporate-actions/needs-attention.json) to place.
 */
function flagUngrouped() {
    const file = path.join(process.cwd(), 'lib', 'corporate-actions', 'needs-attention.json');
    const list = JSON.parse(fs.readFileSync(file, 'utf8')) as { company: string; subject: string; handled?: unknown }[];
    let added = 0;
    for (const o of allSectorOverviews()) {
        for (const n of o.buckets?.length ? o.buckets.map(b => b.note) : [o]) {
            const ranked = new Set(n.verdicts.map(v => v.company.trim().toLowerCase()));
            for (const p of n.businesses?.profiles || []) {
                if (ranked.has(p.company.trim().toLowerCase()) || p.segment) continue;
                if (list.some(e => e.company === p.company && e.subject === 'Sector chart group' && !e.handled)) continue;
                list.push({
                    company: p.company, sector: o.sector, subject: 'Sector chart group',
                    why: `Its company card has no \`segment\`, so the ${n.title} charts show it under "Not yet placed in a group". Set \`segment\` on its card in the note's -businesses.ts file to the group it belongs in.`,
                    addedOn: today(),
                } as never);
                added++;
            }
        }
    }
    if (added) { fs.writeFileSync(file, JSON.stringify(list, null, 2) + '\n'); console.log(`Flagged ${added} company card(s) without a chart group.`); }
}

// ── Run ────────────────────────────────────────────────────────────────────────
async function main() {
    // Read from disk each run (an import can come from tsx's cache and drop companies read since).
    const store: LiveStore = fs.existsSync(FILE) ? JSON.parse(fs.readFileSync(FILE, 'utf8')) : { updated: '', companies: {} };
    store.companies ||= {};
    const events = (JSON.parse(fs.readFileSync(path.join(process.cwd(), 'lib', 'events', 'events.json'), 'utf8')).events || []) as { company: string; kind: string; date: string }[];
    const t = today();
    const lastResults = new Map<string, string>();
    for (const e of events) if (e.kind === 'results' && e.date < t) {
        const k = e.company.trim().toLowerCase();
        if ((lastResults.get(k) || '') < e.date) lastResults.set(k, e.date);
    }

    const names = new Map<string, string>();
    for (const o of allSectorOverviews()) for (const v of noteCompanies(o)) names.set(v.company.trim().toLowerCase(), v.company.trim());
    const companies = await prisma.company.findMany({ select: { name: true, isin: true, ticker: true, aliases: true } });
    const byName = new Map(companies.map(c => [c.name.trim().toLowerCase(), c]));

    type Job = { key: string; name: string; why: 'results' | 'weekly' | 'new' | 'asked'; age: number };
    const jobs: Job[] = [];
    for (const [key, name] of names) {
        if (NAMES.length && !NAMES.some(n => key.includes(n))) continue;
        const have = store.companies[key];
        const res = lastResults.get(key);
        if (NAMES.length || ALL) { jobs.push({ key, name, why: 'asked', age: 0 }); continue; }
        if (!have) { jobs.push({ key, name, why: 'new', age: 9999 }); continue; }
        const age = daysBetween(have.at, t);
        // After results: read the next morning, and keep trying for a week until the quarter shows.
        if (res && res > (have.got || '') && have.at <= t && daysBetween(res, t) <= 7 && age >= 1) jobs.push({ key, name, why: 'results', age });
        else if (age >= 7) jobs.push({ key, name, why: 'weekly', age });
    }
    const rank = { asked: 0, results: 1, new: 2, weekly: 3 };
    jobs.sort((a, b) => rank[a.why] - rank[b.why] || b.age - a.age);
    const todo = NAMES.length || ALL ? jobs : jobs.slice(0, LIMIT);
    console.log(`${names.size} note companies; ${jobs.length} due (${jobs.filter(j => j.why === 'results').length} after results); reading ${todo.length}.`);

    const save = () => { store.updated = new Date().toISOString(); fs.writeFileSync(FILE, JSON.stringify(store) + '\n'); };
    let done = 0, failedBefore = 0;
    const failed: string[] = [], unmatched: string[] = [];
    // A run of failures means Screener has started refusing us: pause once, then stop and leave the
    // rest for the next night (unread companies are first in line then).
    let streak = 0, paused = false;
    for (const job of todo) {
        streak = failed.length - failedBefore;
        if (streak >= 10 && !paused) { console.log('  10 failures in a row: pausing 5 minutes'); paused = true; await new Promise(r => setTimeout(r, 300000)); }
        if (streak >= 20) { console.log('  Screener keeps refusing: stopping here.'); break; }
        const co = byName.get(job.key);
        if (!co) { unmatched.push(job.name); continue; }
        try {
            const old = store.companies[job.key];
            const found = old?.url || await resolveScreenerUrl(co.isin, co.ticker, co.name, get, co.aliases);
            if (!found) { failed.push(`${job.name} (no Screener page)`); continue; }
            const chosen = await choosePage(old?.url && old.view === 'standalone' && !/consolidated/.test(found) ? `${found.replace(/\/?$/, '/')}consolidated/` : found);
            if (!chosen) { failed.push(`${job.name} (page not read)`); continue; }
            const id = screenerCompanyId(chosen.html);
            const cons = chosen.view === 'consolidated';
            const other = id ? await schedule(id, 'Other Assets', 'balance-sheet', cons) : {};
            const investing = id ? await schedule(id, 'Cash from Investing Activity', 'cash-flow', cons) : {};
            const f = figures(chosen.html, chosen.url, chosen.view, other['Cash Equivalents'] || {}, investing['Fixed assets purchased'] || {});
            if (!f.y.length && !f.q.length) { failed.push(`${job.name} (no figures on the page)`); continue; }
            // The results whose quarter is now on the page: its latest quarter ended within ~100 days before the results date.
            const res = lastResults.get(job.key);
            const latestQ = Date.parse(`1 ${f.q.at(-1) || ''}`);
            const got = res && Number.isFinite(latestQ) && Date.parse(res) - latestQ < 100 * DAY ? res : old?.got;
            store.companies[job.key] = { ...f, at: t, ...(got ? { got } : {}) };
            done++;
            failedBefore = failed.length;
            if (done % 20 === 0) { save(); console.log(`  ${done}/${todo.length}`); }
        } catch (e) {
            failed.push(`${job.name} (${(e as Error).message})`);
        }
    }
    save();
    flagUngrouped();
    console.log(`Read ${done}. Not in the company list: ${unmatched.length}${unmatched.length ? ` — ${unmatched.join(', ')}` : ''}.`);
    console.log(`Failed: ${failed.length}${failed.length ? ` — ${failed.join('; ')}` : ''}.`);
    if (failed.length > 40) process.exitCode = 1;
}

main().catch(e => { console.error(e); process.exitCode = 1; }).finally(() => prisma.$disconnect());
