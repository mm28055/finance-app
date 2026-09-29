/**
 * Keeps companies findable through renames, symbol and ISIN changes, splits,
 * bonuses and demergers — the events that used to make the Screener lookup and
 * the ISIN-keyed exchange jobs lose a company without any error.
 *
 *   npx tsx scripts/sync-corporate-actions.ts               (actions of the last 10 days)
 *   npx tsx scripts/sync-corporate-actions.ts --days=60
 *   npx tsx scripts/sync-corporate-actions.ts --dry-run     (prints, writes nothing)
 *   npx tsx scripts/sync-corporate-actions.ts --pledges-only [--pledge-days=200] [--pledge-cap=1500]
 *                                                           (step 4 alone, e.g. to backfill)
 *
 * 1. Identity repair, for every visible company, against NSE's own lists:
 *    - ISIN no longer listed -> find the current listing by ticker (following
 *      NSE's symbol-change chain), by the ISIN's issuer code (a face-value split
 *      re-issues the ISIN under the same issuer), or by a unique name match
 *      (current or former NSE names) -> new `isin`, and `ticker` if the stored
 *      ticker was an old NSE symbol.
 *    - ISIN listed but under a newer symbol than our ticker -> new `ticker`.
 *    - Renamed (NSE's name-change file shows our stored name as a former name)
 *      -> the new name is appended to `aliases`. `name` itself is never changed:
 *      sector notes and card data are keyed by it.
 * 2. Splits and bonuses with an ex-date in the look-back window -> `targetPrice`
 *    is divided by the adjustment factor. Prices and market caps need nothing:
 *    scripts/sync-finance.js takes the share count from NSE every day, and
 *    cuts the stored book value per share itself when that count jumps.
 * 3. Demergers (and other schemes of arrangement) -> listed in
 *    lib/corporate-actions/needs-attention.json for the sector note to be
 *    rewritten, together with any new NSE listing that looks like the spun-off
 *    company (never added automatically).
 *
 * 4. Shareholding: the pledged share of promoter holding, from each company's
 *    NSE shareholding filing, onto its ShareholdingQuarter row (see
 *    lib/corporate-actions/shareholding.ts); and a needs-attention entry when
 *    the latest period shows promoter holding down 2+ points or the pledge up
 *    10+ points (once per company and period).
 *
 * Every applied action is recorded in lib/corporate-actions/applied.json so it
 * is never applied twice, and every automatic change in log.json (last 200).
 * Only Company.isin, ticker, aliases and targetPrice, and
 * ShareholdingQuarter.pledged, are ever written.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { prisma } from '../lib/prisma';
import {
    loadNseListings, loadSymbolChanges, loadNameChanges, nseCorporateActions, parseNseDay,
    type NseListing, type SymbolChange, type NseCorporateAction,
} from '../lib/corporate-actions/nse-lists';
import { normaliseName, nameSimilarity, namesOf, sameCompanyName } from '../lib/name-match';
import { syncPledges, shareholdingFollowUps } from '../lib/corporate-actions/shareholding';

const DIR = path.join(process.cwd(), 'lib', 'corporate-actions');
const APPLIED_FILE = path.join(DIR, 'applied.json');
const ATTENTION_FILE = path.join(DIR, 'needs-attention.json');
const LOG_FILE = path.join(DIR, 'log.json');
const LOG_KEEP = 200;
// Manual Screener pages, keyed by ISIN: re-keyed here when an ISIN changes.
const OVERRIDES_FILE = path.join(process.cwd(), 'lib', 'screener-overrides.json');
const DAY = 86400000;
// How long after a demerger new NSE listings are checked for the spun-off company.
const DEMERGER_WATCH_DAYS = 365;

const DRY = process.argv.includes('--dry-run');
const PLEDGES_ONLY = process.argv.includes('--pledges-only');
const PLEDGE_DAYS = (() => {
    const a = process.argv.find(x => x.startsWith('--pledge-days='));
    const n = a ? parseInt(a.split('=')[1], 10) : 120;
    return Number.isFinite(n) && n > 0 ? n : 120;
})();
const PLEDGE_CAP = (() => {
    const a = process.argv.find(x => x.startsWith('--pledge-cap='));
    const n = a ? parseInt(a.split('=')[1], 10) : 500;
    return Number.isFinite(n) && n > 0 ? n : 500;
})();
const DAYS = (() => {
    const a = process.argv.find(x => x.startsWith('--days='));
    const n = a ? parseInt(a.split('=')[1], 10) : 10;
    return Number.isFinite(n) && n > 0 ? n : 10;
})();

// ── Files ────────────────────────────────────────────────────────────────────

interface Applied {
    isin: string; symbol: string; subject: string; exDate: string;
    company: string; kind: 'split' | 'bonus' | 'demerger' | 'scheme';
    factor?: number; appliedOn: string;
}
interface Attention {
    company: string; sector: string; exDate: string | null; subject: string | null; why: string;
    candidate?: { symbol: string; name: string; isin: string; listedOn: string | null };
    addedOn: string;
}
interface LogEntry { date: string; company: string; field: string; old: string | null; new: string | null; source: string }

function readJson<T>(file: string): T[] {
    try {
        const v = JSON.parse(fs.readFileSync(file, 'utf8'));
        return Array.isArray(v) ? v : [];
    } catch {
        return [];
    }
}
const writeJson = (file: string, v: unknown) => fs.writeFileSync(file, JSON.stringify(v, null, 2) + '\n');

// ── Helpers ──────────────────────────────────────────────────────────────────

const today = new Date();
const todayUtc = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
const isoDay = (d: Date | null) => (d ? d.toISOString().slice(0, 10) : null);

/** Looks like an NSE symbol (not a BSE scrip code, not a free-text name). */
const symbolLike = (t: string) => /^[A-Z][A-Z0-9&-]{0,19}$/.test(t);
const isinOk = (s: string | null | undefined): s is string => !!s && /^IN[A-Z0-9]{10}$/.test(s);
/** Country + issuer + security type: the part of an ISIN a split or re-issue keeps. */
const issuerOf = (isin: string) => isin.slice(0, 9);

/**
 * Weaker than sameCompanyName: enough to tell an abbreviation ("Ellen. Indl.
 * Gas", "GSFC", "Godavari Power") from a different company. Used only to decide
 * whether a name mismatch is worth a human's look, never to change anything.
 */
function looselyRelated(ours: string[], theirs: string): boolean {
    if (sameCompanyName(ours, theirs)) return true;
    const words = (s: string) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(w => w && w !== 'the');
    const theirWords = words(theirs).filter(w => !['limited', 'ltd'].includes(w));
    const initials = theirWords.filter(w => !['and', 'of'].includes(w)).map(w => w[0]).join('');
    return ours.some(o => {
        const mine = words(o);
        if (mine.length === 1 && mine[0].length >= 2 && initials.startsWith(mine[0])) return true;
        return mine.some(m => m.length >= 4 && theirWords.some(w => w.length >= 4 && w.slice(0, 4) === m.slice(0, 4)));
    });
}

/** "JSW Dulux Limited" -> "JSW Dulux". */
const cleanName = (s: string) => s.replace(/\s+(Limited|Ltd\.?)\s*$/i, '').replace(/\s+/g, ' ').trim();

/** Target prices: whole rupees above ₹100, one decimal above ₹10, else two. */
function roundPrice(v: number): number {
    if (v >= 100) return Math.round(v);
    if (v >= 10) return Math.round(v * 10) / 10;
    return Math.round(v * 100) / 100;
}

type Kind = 'split' | 'bonus' | 'demerger' | 'scheme';

/** What an NSE corporate-action subject means for us, or null when nothing. */
function classify(subject: string): { kind: Kind; factor?: number } | null {
    const s = subject.replace(/\s+/g, ' ');
    // Preference shares, debentures and warrants issued under a scheme are not
    // an equity bonus ("Scheme Of Arrangement - Bonus Ncrps 4:1").
    const nonEquity = /ncrps?|preference|debenture|\bncds?\b|warrant/i.test(s);
    if (/demerg|spin[\s-]?off/i.test(s)) return { kind: 'demerger' };
    let factor = 1, split = false, bonus = false;
    if (/split|sub-?division|consolidat/i.test(s)) {
        const m = s.match(/from\s+r[se]\.?\s*([\d.]+)[^\d]+?to\s+r[se]\.?\s*([\d.]+)/i);
        const from = m ? parseFloat(m[1]) : NaN, to = m ? parseFloat(m[2]) : NaN;
        if (from > 0 && to > 0 && from !== to) { factor *= from / to; split = true; }
    }
    if (!nonEquity) {
        const b = s.match(/\bbonus\b[^\d]*(\d+)\s*:\s*(\d+)/i);
        if (b && +b[2] > 0) { factor *= (+b[1] + +b[2]) / +b[2]; bonus = true; }
    }
    if (split || bonus) return { kind: split ? 'split' : 'bonus', factor };
    if (/scheme of arrangement/i.test(s) && !nonEquity) return { kind: 'scheme' };
    return null;
}

// ── 4. Shareholding ──────────────────────────────────────────────────────────

/** Pledges onto the stored periods, then shareholding follow-ups for the notes. Never throws. */
async function shareholdingStep(attention: Attention[], addAttention: (a: Omit<Attention, 'addedOn'>) => void, symbolOf: (isin: string) => string | undefined) {
    console.log(`\n── Shareholding: pledges from NSE filings (last ${PLEDGE_DAYS} days)`);
    try {
        const r = await syncPledges({ days: PLEDGE_DAYS, dry: DRY, cap: PLEDGE_CAP, symbolOf });
        console.log(`  ${r.filings} filings listed; ${r.waiting} stored periods without a pledge figure, ${r.matched} matched, ${r.updated} filled, ${r.unreadable} unreadable`);
    } catch (e: any) {
        console.warn(`  NSE shareholding filings unavailable (${e.message}) — skipped this run`);
    }
    try {
        // Once per company and period, whatever the wording.
        const seen = new Set(attention.map(a => `${a.company}|${a.subject}`));
        let added = 0;
        for (const f of await shareholdingFollowUps()) {
            const subject = `Shareholding ${f.period}`;
            if (seen.has(`${f.company}|${subject}`)) continue;
            seen.add(`${f.company}|${subject}`);
            addAttention({ company: f.company, sector: f.sector, exDate: null, subject, why: f.why });
            added++;
        }
        console.log(`  Shareholding follow-ups: ${added} new`);
    } catch (e: any) {
        console.warn(`  Shareholding follow-ups skipped (${e.message})`);
    }
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
    console.log(`Corporate actions${DRY ? ' (DRY RUN — nothing is written)' : ''}; look-back ${DAYS} days\n`);

    const [listings, symbolChanges, nameChanges] = await Promise.all([loadNseListings(), loadSymbolChanges(), loadNameChanges()]);
    console.log(`NSE: ${listings.length} listings, ${symbolChanges.length} symbol changes, ${nameChanges.length} name changes`);

    const byIsin = new Map(listings.map(l => [l.isin, l]));
    const bySymbol = new Map<string, NseListing>();
    for (const l of listings) if (!bySymbol.has(l.symbol) || !l.sme) bySymbol.set(l.symbol, l);
    const byIssuer = new Map<string, NseListing[]>();
    for (const l of listings) byIssuer.set(issuerOf(l.isin), [...(byIssuer.get(issuerOf(l.isin)) || []), l]);

    const forward = new Map<string, SymbolChange[]>();
    const backward = new Map<string, SymbolChange[]>();
    for (const c of symbolChanges) {
        forward.set(c.from, [...(forward.get(c.from) || []), c]);
        backward.set(c.to, [...(backward.get(c.to) || []), c]);
    }

    /** Current listings reachable from an old symbol by following symbol changes forward in time. */
    const followSymbol = (start: string): NseListing[] => {
        const ends = new Map<string, NseListing>();
        const walk = (sym: string, after: number, depth: number) => {
            const next = (forward.get(sym) || []).filter(c => (c.on?.getTime() ?? 0) >= after);
            if (!next.length || depth > 10) {
                const l = bySymbol.get(sym);
                if (l && sym !== start) ends.set(l.isin, l);
                return;
            }
            for (const c of next) walk(c.to, c.on?.getTime() ?? 0, depth + 1);
        };
        walk(start, 0, 0);
        return [...ends.values()];
    };

    /** Every symbol a listing has traded under (its current one and all older ones). */
    const symbolsOf = (symbol: string): Set<string> => {
        const out = new Set<string>([symbol]);
        const queue = [symbol];
        while (queue.length) {
            const s = queue.shift()!;
            for (const c of backward.get(s) || []) if (!out.has(c.from)) { out.add(c.from); queue.push(c.from); }
        }
        return out;
    };

    const namesBySymbol = new Map<string, string[]>();
    for (const n of nameChanges) namesBySymbol.set(n.symbol, [...(namesBySymbol.get(n.symbol) || []), n.from, n.to]);
    /** Former names of a listing, from NSE's name-change file across all its symbols. */
    const formerNames = (l: NseListing): string[] =>
        [...symbolsOf(l.symbol)].flatMap(s => namesBySymbol.get(s) || []).filter(n => normaliseName(n) !== normaliseName(l.name));

    const everyone = await prisma.company.findMany({ select: { id: true, isin: true, ticker: true } });
    const isinOwner = new Map(everyone.filter(c => c.isin).map(c => [c.isin!, c.id]));
    const tickerOwner = new Map(everyone.map(c => [c.ticker.toUpperCase(), c.id]));

    const companies = await prisma.company.findMany({
        where: { isVisible: true },
        select: { id: true, name: true, ticker: true, isin: true, sector: true, aliases: true, targetPrice: true, currentPrice: true, lastFinanceSync: true },
        orderBy: { name: 'asc' },
    });
    console.log(`Companies checked: ${companies.length}\n`);

    const overrides: Record<string, string> = JSON.parse(fs.readFileSync(OVERRIDES_FILE, 'utf8'));
    let overridesChanged = false;
    const applied = readJson<Applied>(APPLIED_FILE);
    const attention = readJson<Attention>(ATTENTION_FILE);
    const log = readJson<LogEntry>(LOG_FILE);
    const appliedKeys = new Set(applied.map(a => `${a.isin}|${a.subject}|${a.exDate}`));
    const attentionKey = (a: Omit<Attention, 'addedOn'>) => `${a.company}|${a.why}|${a.exDate}|${a.candidate?.isin || ''}`;
    const attentionKeys = new Set(attention.map(attentionKey));
    const stamp = new Date().toISOString();

    const changes: LogEntry[] = [];
    const newAttention: Attention[] = [];
    const addAttention = (a: Omit<Attention, 'addedOn'>) => {
        const k = attentionKey(a);
        if (attentionKeys.has(k)) return;
        attentionKeys.add(k);
        newAttention.push({ ...a, addedOn: isoDay(new Date())! });
    };

    if (PLEDGES_ONLY) {
        await shareholdingStep(attention, addAttention, isin => byIsin.get(isin)?.symbol);
        for (const a of newAttention) console.log(`  - ${a.company} [${a.sector}]: ${a.why}`);
        if (DRY) return console.log('\n(dry run — database and files untouched)');
        if (newAttention.length) writeJson(ATTENTION_FILE, [...attention, ...newAttention]);
        return;
    }

    async function write(c: { id: string; name: string }, field: 'isin' | 'ticker' | 'aliases' | 'targetPrice', oldV: string | null, newV: string | number, source: string) {
        changes.push({ date: stamp, company: c.name.trim(), field, old: oldV, new: String(newV), source });
        console.log(`  ${c.name.trim().padEnd(28)} ${field.padEnd(11)} ${oldV ?? '—'} → ${newV}   [${source}]`);
        if (DRY) return;
        await prisma.company.update({ where: { id: c.id }, data: { [field]: newV } as any });
    }

    // Each company's NSE listing after repair, and every ISIN it has been known by in this run.
    const listingOf = new Map<string, NseListing>();
    const knownIsins = new Map<string, string>(); // isin -> company id
    const unresolved: string[] = [];
    let bseOnly = 0;

    // ── 1. Identity ─────────────────────────────────────────────────────────
    console.log('── Identity repair');
    for (const c of companies) {
        if (c.isin) knownIsins.set(c.isin, c.id);
        const names = namesOf(c.name, c.aliases);
        const t = (c.ticker || '').trim().toUpperCase();
        let listing = c.isin ? byIsin.get(c.isin) : undefined;
        let tickerChangedBySymbolChain = false;

        if (!listing) {
            let found: NseListing | undefined, how = '';
            // (a) the ticker, directly or through NSE's symbol-change chain
            if (symbolLike(t)) {
                const direct = bySymbol.get(t);
                if (direct && ((isinOk(c.isin) && issuerOf(direct.isin) === issuerOf(c.isin)) || sameCompanyName(names, direct.name))) {
                    found = direct; how = `NSE symbol ${t}`;
                } else {
                    // Symbols get reused ("HSIL" is now AGI Greenpac), so the
                    // end of the chain must also carry one of our names, now or before.
                    const ends = followSymbol(t).filter(l => [l.name, ...formerNames(l)].some(n => sameCompanyName(names, n)));
                    if (ends.length === 1) { found = ends[0]; how = `NSE symbol change ${t} → ${ends[0].symbol}`; tickerChangedBySymbolChain = true; }
                }
            }
            // (b) same issuer code: a face-value split re-issues the ISIN under it
            if (!found && isinOk(c.isin)) {
                const same = byIssuer.get(issuerOf(c.isin)) || [];
                if (same.length === 1) { found = same[0]; how = `same issuer code (${issuerOf(c.isin)}…) — re-issued ISIN`; }
            }
            // (c) a unique name match, on current or former NSE names
            if (!found) {
                const want = names.map(normaliseName).filter(Boolean);
                const exact = listings.filter(l => [l.name, ...formerNames(l)].some(n => want.includes(normaliseName(n))));
                if (exact.length === 1) { found = exact[0]; how = `name match "${exact[0].name}"`; }
                else if (exact.length === 0) {
                    const ranked = listings
                        .map(l => ({ l, s: Math.max(...want.map(w => nameSimilarity(w, normaliseName(l.name)))) }))
                        .sort((a, b) => b.s - a.s);
                    const [best, second] = ranked;
                    if (best && best.s >= 0.92 && (!second || best.s - second.s > 0.05)) { found = best.l; how = `name match ~${best.s.toFixed(2)} "${best.l.name}"`; }
                }
            }

            if (found) {
                const owner = isinOwner.get(found.isin);
                if (owner && owner !== c.id) {
                    unresolved.push(`${c.name.trim()}: ISIN ${c.isin} not on NSE; match ${found.isin} (${found.symbol}) already belongs to another company — left alone`);
                } else {
                    await write(c, 'isin', c.isin, found.isin, how);
                    if (c.isin) isinOwner.delete(c.isin);
                    isinOwner.set(found.isin, c.id);
                    if (c.isin && overrides[c.isin] && !overrides[found.isin]) {
                        overrides[found.isin] = overrides[c.isin];
                        delete overrides[c.isin];
                        overridesChanged = true;
                        console.log(`  ${c.name.trim().padEnd(28)} Screener override moved to the new ISIN`);
                    }
                    knownIsins.set(found.isin, c.id);
                    listing = found;
                }
            } else if (/^\d{6}$/.test(t) || !symbolLike(t) || !bySymbol.has(t)) {
                bseOnly++; // BSE-only listing (or a free-text ticker): NSE cannot tell us anything
            } else {
                unresolved.push(`${c.name.trim()}: ISIN ${c.isin} not on NSE and ticker ${t} is another company's — left alone`);
            }
        }

        if (listing) {
            listingOf.set(c.id, listing);
            // Ticker: only when it is one of this listing's OLD NSE symbols.
            if (symbolLike(t) && t !== listing.symbol && (tickerChangedBySymbolChain || symbolsOf(listing.symbol).has(t))) {
                const owner = tickerOwner.get(listing.symbol);
                if (owner && owner !== c.id) {
                    unresolved.push(`${c.name.trim()}: ticker ${t} is now ${listing.symbol} on NSE, but ${listing.symbol} is another company's ticker — left alone`);
                } else {
                    await write(c, 'ticker', c.ticker, listing.symbol, `NSE symbol change ${t} → ${listing.symbol}`);
                    tickerOwner.delete(t);
                    tickerOwner.set(listing.symbol, c.id);
                }
            }
            // Alias: the current NSE name, when NSE's own name-change file shows
            // the company was renamed from a name we know it by. A name that
            // simply differs, with no rename on record, may mean a wrong ISIN —
            // that goes to a human instead.
            if (!sameCompanyName(names, listing.name)) {
                const renamedFromOurs = formerNames(listing).some(n => sameCompanyName(names, n));
                if (renamedFromOurs) {
                    const alias = cleanName(listing.name);
                    const current = (c.aliases || '').split(',').map(s => s.trim()).filter(Boolean);
                    if (!current.some(a => normaliseName(a) === normaliseName(alias))) {
                        await write(c, 'aliases', c.aliases, [...current, alias].join(', '), `NSE name change → ${listing.name}`);
                        c.aliases = [...current, alias].join(', ');
                    }
                    // The sector note still calls it by the old name: the weekly review updates
                    // the wording (the stored name, which the notes are keyed by, stays).
                    addAttention({
                        company: c.name.trim(), sector: c.sector, exDate: null, subject: `Renamed: ${alias}`,
                        why: `Renamed to ${alias} — in its sector note, call it "${alias} (formerly ${c.name.trim()})"; keep the stored name as the key`,
                    });
                } else if (t !== listing.symbol && !looselyRelated(names, listing.name)) {
                    addAttention({
                        company: c.name.trim(), sector: c.sector, exDate: null, subject: null,
                        why: `Stored name does not match NSE's "${listing.name}" (${listing.symbol}) for ISIN ${listing.isin}, and NSE records no rename — check the ISIN`,
                    });
                }
            }
        }
    }
    console.log(`\n  Not on NSE (BSE-only or free-text ticker): ${bseOnly}`);
    if (unresolved.length) console.log('  Left for a human:\n' + unresolved.map(u => `    - ${u}`).join('\n'));

    // ── 2 & 3. Corporate actions ────────────────────────────────────────────
    console.log(`\n── Corporate actions, ex-date ${isoDay(new Date(todayUtc.getTime() - DAYS * DAY))} → ${isoDay(todayUtc)}`);
    let actions: NseCorporateAction[] = [];
    try {
        actions = await nseCorporateActions(new Date(todayUtc.getTime() - DAYS * DAY), todayUtc);
    } catch (e: any) {
        console.warn(`  NSE corporate actions unavailable (${e.message}) — skipped this run`);
    }

    const byId = new Map(companies.map(c => [c.id, c]));
    const issuerToCompany = new Map<string, string>();
    for (const [isin, id] of knownIsins) issuerToCompany.set(issuerOf(isin), id);
    const symbolToCompany = new Map<string, string>();
    for (const [id, l] of listingOf) symbolToCompany.set(l.symbol, id);

    const ownerOfAction = (a: NseCorporateAction): string | undefined => {
        if (isinOk(a.isin)) return knownIsins.get(a.isin) || issuerToCompany.get(issuerOf(a.isin)) || symbolToCompany.get((a.symbol || '').toUpperCase());
        // SME rows carry a scrip code in place of the ISIN: match on the symbol.
        return symbolToCompany.get((a.symbol || '').toUpperCase());
    };

    let seen = 0;
    for (const a of actions) {
        const what = classify(a.subject || '');
        if (!what) continue;
        const id = ownerOfAction(a);
        if (!id) continue;
        const c = byId.get(id)!;
        const ex = parseNseDay(a.exDate);
        if (!ex || ex > todayUtc) continue;
        const key = `${a.isin}|${a.subject}|${a.exDate}`;
        if (appliedKeys.has(key)) continue;
        appliedKeys.add(key);
        seen++;

        const record: Applied = {
            isin: a.isin, symbol: a.symbol, subject: a.subject, exDate: a.exDate,
            company: c.name.trim(), kind: what.kind, appliedOn: isoDay(new Date())!,
        };

        if (what.kind === 'split' || what.kind === 'bonus') {
            const factor = what.factor!;
            record.factor = Math.round(factor * 10000) / 10000;
            console.log(`  ${c.name.trim().padEnd(28)} ${a.subject} (ex ${a.exDate}) — factor ${record.factor}`);
            if (c.targetPrice != null) {
                const old = Number(c.targetPrice);
                const next = roundPrice(old / factor);
                // A target already restated for the split would be cut a second
                // time; when the stored price is post-split and the new target
                // would sit far below it, leave it for a human.
                const pricePostSplit = c.lastFinanceSync && c.lastFinanceSync >= ex && c.currentPrice != null;
                if (pricePostSplit && next < 0.4 * Number(c.currentPrice)) {
                    addAttention({
                        company: c.name.trim(), sector: c.sector, exDate: a.exDate, subject: a.subject,
                        why: `Target price ₹${old} may already be adjusted for this ${what.kind} (price is ₹${Number(c.currentPrice)}); not changed — check it`,
                    });
                } else {
                    await write(c, 'targetPrice', String(old), next, `${a.subject} (ex ${a.exDate}), ÷${record.factor}`);
                    c.targetPrice = next as any;
                }
            }
        } else {
            console.log(`  ${c.name.trim().padEnd(28)} ${a.subject} (ex ${a.exDate}) — needs attention`);
            addAttention({
                company: c.name.trim(), sector: c.sector, exDate: a.exDate, subject: a.subject,
                why: what.kind === 'demerger'
                    ? 'Demerger — sector note needs rewriting'
                    : 'Scheme of arrangement (possibly a demerger) — check and rewrite the sector note if needed',
            });
        }
        applied.push(record);
    }
    if (!seen) console.log('  none new for our companies');

    // Spun-off companies: new NSE listings after one of our demergers whose
    // name starts like ours. Checked on every run for a year, since the new
    // company usually lists weeks after the ex-date.
    const GENERIC = new Set(['india', 'indian', 'shree', 'shri', 'sri', 'new', 'national', 'first', 'global', 'united', 'the', 'bharat', 'hindustan']);
    const stemOf = (name: string) => {
        const w = normaliseName(name).split(' ').filter(Boolean);
        if (!w.length) return null;
        return w[0].length >= 3 && !GENERIC.has(w[0]) ? w[0] : w.length > 1 ? `${w[0]} ${w[1]}` : null;
    };
    for (const d of applied.filter(x => x.kind === 'demerger' || x.kind === 'scheme')) {
        const ex = parseNseDay(d.exDate);
        if (!ex || todayUtc.getTime() - ex.getTime() > DEMERGER_WATCH_DAYS * DAY) continue;
        const id = (isinOk(d.isin) && (knownIsins.get(d.isin) || issuerToCompany.get(issuerOf(d.isin)))) || symbolToCompany.get(d.symbol);
        const c = id ? byId.get(id) : undefined;
        if (!c) continue;
        const ours = listingOf.get(c.id);
        const stems = new Set([stemOf(c.name), ours ? stemOf(ours.name) : null].filter(Boolean) as string[]);
        for (const l of listings) {
            if (!l.listedOn || l.listedOn.getTime() < ex.getTime() - 7 * DAY) continue;
            if (isinOwner.has(l.isin) || l.isin === ours?.isin) continue;
            const n = normaliseName(l.name);
            if (![...stems].some(s => n === s || n.startsWith(s + ' '))) continue;
            addAttention({
                company: c.name.trim(), sector: c.sector, exDate: d.exDate, subject: d.subject,
                why: 'Possible spun-off company now listed — consider adding it (not added automatically)',
                candidate: { symbol: l.symbol, name: l.name, isin: l.isin, listedOn: isoDay(l.listedOn) },
            });
        }
    }

    await shareholdingStep(attention, addAttention, isin => byIsin.get(isin)?.symbol);

    // ── Summary and files ───────────────────────────────────────────────────
    const count = (f: string) => changes.filter(x => x.field === f).length;
    console.log(`\nChanges: isin ${count('isin')}, ticker ${count('ticker')}, aliases ${count('aliases')}, targetPrice ${count('targetPrice')}`);
    if (newAttention.length) {
        console.log(`Needs attention (${newAttention.length} new):`);
        for (const a of newAttention) console.log(`  - ${a.company} [${a.sector}]${a.exDate ? ` ex ${a.exDate}` : ''}: ${a.why}${a.candidate ? ` → ${a.candidate.name} (${a.candidate.symbol}, listed ${a.candidate.listedOn})` : ''}`);
    }

    if (DRY) return console.log('\n(dry run — database and files untouched)');
    fs.mkdirSync(DIR, { recursive: true });
    writeJson(APPLIED_FILE, applied);
    writeJson(ATTENTION_FILE, [...attention, ...newAttention]);
    writeJson(LOG_FILE, [...log, ...changes].slice(-LOG_KEEP));
    if (overridesChanged) fs.writeFileSync(OVERRIDES_FILE, JSON.stringify(overrides, null, 4));
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
