// -----------------------------------------------------------------------------
// Promoter pledges, and the shareholding changes that deserve a note rewrite.
// Run from scripts/sync-corporate-actions.ts (4pm, before the price sync).
//
// Pledges: NSE's own "pledged data" page (api/corporate-pledgedata) has been
// empty since at least Sep 2026 — its summary reports 0 companies — so the
// figure is read from each company's quarterly shareholding-pattern filing
// instead. One request to NSE lists every filing made in the window, with a
// link to its XBRL file on nsearchives; that file (static, ~100–200 KB) gives
// the promoter group's total shares and the shares pledged. A file is fetched
// only for a stored period whose `pledged` is still empty, so after the first
// run it is a handful per day. BSE-only companies have no NSE filing and keep
// `pledged` empty.
//
// Written: ShareholdingQuarter.pledged only (raw SQL).
// -----------------------------------------------------------------------------
import { prisma } from '../prisma';
import { NSE_UA } from '../filings/nse';

const DAY = 86400000;
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const ddmmyyyy = (d: Date) => `${String(d.getUTCDate()).padStart(2, '0')}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${d.getUTCFullYear()}`;

interface ShpFiling {
    /** Often the company's OLD ISIN (before a split), and sometimes null. */
    isin: string | null;
    symbol: string;
    /** Period the pattern is as of, "30-JUN-2026". */
    date: string;
    broadcastDate: string;
    xbrl: string;
}

/** "30-JUN-2026" -> "Jun 2026" (Screener's column label for that period). */
export function periodLabel(nseDate: string): string | null {
    const m = (nseDate || '').match(/^\d{1,2}-([A-Za-z]{3})-(\d{4})$/);
    if (!m) return null;
    const i = MONTHS.indexOf(m[1].toUpperCase());
    return i < 0 ? null : `${m[1][0].toUpperCase()}${m[1].slice(1).toLowerCase()} ${m[2]}`;
}

async function nseCookie(): Promise<string> {
    const home = await fetch('https://www.nseindia.com/', { headers: { 'User-Agent': NSE_UA, 'Accept-Language': 'en-US,en;q=0.9' } });
    return (home.headers.getSetCookie?.() || []).map(c => c.split(';')[0]).join('; ');
}

/** Every shareholding-pattern filing (main board and SME) submitted in the last `days` days. */
async function shpFilings(days: number): Promise<ShpFiling[]> {
    const cookie = await nseCookie();
    const to = new Date(), from = new Date(Date.now() - days * DAY);
    const out: ShpFiling[] = [];
    for (const index of ['equities', 'sme']) {
        const res = await fetch(`https://www.nseindia.com/api/corporate-share-holdings-master?index=${index}&from_date=${ddmmyyyy(from)}&to_date=${ddmmyyyy(to)}`, {
            headers: { 'User-Agent': NSE_UA, Cookie: cookie, Referer: 'https://www.nseindia.com/companies-listing/corporate-filings-shareholding-pattern' },
            signal: AbortSignal.timeout(60000),
        });
        if (!res.ok) throw new Error(`NSE shareholding list (${index}) returned ${res.status}`);
        const data = await res.json();
        if (Array.isArray(data)) out.push(...data.filter((d: any) => (d?.isin || d?.symbol) && d?.xbrl && d?.date));
        await sleep(1500);
    }
    return out;
}

/**
 * Share of the promoter group's holding that is pledged, in %, from a
 * shareholding-pattern XBRL file. 0 when the filing says no promoter shares
 * are pledged (or there is no promoter group); null when it cannot be read.
 */
export function pledgedFromXbrl(xml: string): number | null {
    const fact = (tag: string, context: string) => {
        const re = new RegExp(`<[\\w-]+:${tag}\\b[^>]*contextRef="${context}"[^>]*>([^<]*)<`);
        const m = xml.match(re);
        if (!m) return null;
        const v = Number(m[1].trim());
        return Number.isFinite(v) ? v : null;
    };
    const flag = xml.match(/<[\w-]+:WhetherAnySharesHeldByPromotersAreEncumberedUnderPledged\b[^>]*>\s*(true|false)\s*</i);
    const ctx = 'ShareholdingOfPromoterAndPromoterGroup_ContextI';
    const held = fact('NumberOfShares', ctx);
    const pledged = fact('NumberOfSharesEncumberedUnderPledged', ctx)
        ?? fact('NumberOfSharesPledgedOrOtherwiseEncumbered', ctx);
    if (held !== null && held > 0 && pledged !== null) return Math.round((pledged / held) * 10000) / 100;
    if (flag && flag[1].toLowerCase() === 'false') return 0;
    if (held === 0) return 0;
    return null;
}

/**
 * Fills `pledged` on stored periods that have an NSE filing and no figure yet.
 * `days` is the filing look-back (the daily run uses 120; a backfill can reach
 * further back for the previous quarters). At most `cap` files per run.
 */
export async function syncPledges({ days = 120, dry = false, cap = 500, symbolOf = (_isin: string): string | undefined => undefined } = {}) {
    const filings = await shpFilings(days);
    // NSE's list often carries a company's pre-split ISIN, or none, so a filing
    // is found by ISIN, by the ISIN's issuer part (first 9 characters, kept
    // across a split) or by the current NSE symbol. Newest submission wins (a
    // revised filing replaces the original).
    const byKey = new Map<string, ShpFiling>();
    const put = (key: string, f: ShpFiling) => {
        const prev = byKey.get(key);
        if (!prev || (f.broadcastDate || '') > (prev.broadcastDate || '')) byKey.set(key, f);
    };
    for (const f of filings) {
        const label = periodLabel(f.date);
        if (!label) continue;
        if (f.isin) { put(`isin:${f.isin}|${label}`, f); put(`issuer:${f.isin.slice(0, 9)}|${label}`, f); }
        if (f.symbol) put(`symbol:${f.symbol.toUpperCase()}|${label}`, f);
    }
    const find = (isin: string, period: string) => {
        const symbol = symbolOf(isin);
        return byKey.get(`isin:${isin}|${period}`)
            || (symbol ? byKey.get(`symbol:${symbol.toUpperCase()}|${period}`) : undefined)
            || byKey.get(`issuer:${isin.slice(0, 9)}|${period}`);
    };

    const since = new Date(Date.now() - (days + 120) * DAY);
    const rows = await prisma.$queryRaw<{ id: string; period: string; isin: string | null; name: string }[]>`
        SELECT s."id", s."period", c."isin", c."name"
        FROM "ShareholdingQuarter" s JOIN "Company" c ON c."id" = s."companyId"
        WHERE s."pledged" IS NULL AND s."periodEnd" >= ${since}::date AND c."isin" IS NOT NULL`;

    let matched = 0, updated = 0, unreadable = 0;
    for (const r of rows) {
        const f = find(r.isin!, r.period);
        if (!f) continue;
        if (matched >= cap) break;
        matched++;
        try {
            const res = await fetch(f.xbrl, { headers: { 'User-Agent': NSE_UA }, signal: AbortSignal.timeout(30000) });
            if (!res.ok) { unreadable++; continue; }
            const pledged = pledgedFromXbrl(await res.text());
            if (pledged === null) { unreadable++; continue; }
            if (pledged > 0) console.log(`  ${r.name.trim().padEnd(28)} ${r.period}: ${pledged}% of promoter shares pledged`);
            if (!dry) await prisma.$executeRaw`UPDATE "ShareholdingQuarter" SET "pledged" = ${pledged}, "updatedAt" = now() WHERE "id" = ${r.id}`;
            updated++;
        } catch {
            unreadable++;
        }
        await sleep(300);
    }
    return { filings: filings.length, waiting: rows.length, matched, updated, unreadable };
}

/**
 * Companies whose latest period shows promoter holding down 2+ points, or the
 * pledge up 10+ points, against the period before — for needs-attention.json.
 * Only periods ending in the last ~7 months count, so old history never fires.
 */
export async function shareholdingFollowUps(): Promise<{ company: string; sector: string; period: string; why: string }[]> {
    const rows = await prisma.$queryRaw<{ companyId: string; name: string; sector: string; period: string; periodEnd: Date; promoter: unknown; pledged: unknown }[]>`
        SELECT s."companyId", c."name", c."sector", s."period", s."periodEnd", s."promoter", s."pledged"
        FROM "ShareholdingQuarter" s JOIN "Company" c ON c."id" = s."companyId"
        WHERE c."isVisible" = true AND s."periodEnd" >= ${new Date(Date.now() - 600 * DAY)}::date
        ORDER BY s."companyId", s."periodEnd"`;
    const by = new Map<string, typeof rows>();
    for (const r of rows) by.set(r.companyId, [...(by.get(r.companyId) || []), r]);

    const out: { company: string; sector: string; period: string; why: string }[] = [];
    const n = (v: unknown) => Number(v);
    const f1 = (v: number) => Number(v.toFixed(1));
    for (const list of by.values()) {
        const latest = list[list.length - 1], prev = list[list.length - 2];
        if (!latest || Date.now() - latest.periodEnd.getTime() > 210 * DAY) continue;
        const reasons: string[] = [];
        if (prev && n(prev.promoter) - n(latest.promoter) >= 5) { // only big cuts reach the notes
            reasons.push(`Promoter holding fell ${f1(n(prev.promoter) - n(latest.promoter))} pts (${f1(n(prev.promoter))}% in ${prev.period} → ${f1(n(latest.promoter))}% in ${latest.period})`);
        }
        const pledged = list.filter(r => r.pledged !== null);
        const lp = pledged[pledged.length - 1], pp = pledged[pledged.length - 2];
        // The pledge sits on the quarter-end period, which an off-cycle column ("Jul 2026") can follow.
        if (lp && pp && latest.periodEnd.getTime() - lp.periodEnd.getTime() <= 120 * DAY && n(lp.pledged) - n(pp.pledged) >= 20) {
            reasons.push(`Pledged share of promoter holding jumped to ${f1(n(lp.pledged))}% from ${f1(n(pp.pledged))}% (${pp.period} → ${lp.period})`);
        }
        if (reasons.length) {
            out.push({
                company: latest.name.trim(), sector: latest.sector, period: latest.period,
                why: `${reasons.join('; ')} — find out why (sale, dilution, pledge) and update the sector note`,
            });
        }
    }
    return out;
}
