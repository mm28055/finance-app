const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

// ================= GOOGLE FINANCE =================
async function fetchGoogleFinance(ticker) {
    const url = `https://www.google.com/finance/quote/${ticker}:NSE`;
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        if (!response.ok) return null;
        const html = await response.text();

        // Price: Look for "₹XXX" after the ticker name in data attributes
        const priceMatch = html.match(/data-last-price="([0-9.]+)"/);
        const price = priceMatch ? parseFloat(priceMatch[1]) : null;

        // Market Cap: Look for "Market cap" followed by a value
        const mcapMatch = html.match(/Market cap[^>]*>([^<]+)</i);
        let marketCap = null;
        if (mcapMatch) {
            const mcStr = mcapMatch[1].replace(/[₹,\s]/g, '');
            // Handle T (trillion), B (billion/lakh cr), Cr patterns
            if (mcStr.includes('T')) {
                marketCap = parseFloat(mcStr) * 100000; // 1T = 1 lakh crore
            } else if (mcStr.includes('B')) {
                marketCap = parseFloat(mcStr) * 100; // Approx
            } else {
                marketCap = parseFloat(mcStr);
            }
        }

        // P/E Ratio
        const peMatch = html.match(/P\/E ratio[^>]*>([0-9.]+)/i);
        const peRatio = peMatch ? parseFloat(peMatch[1]) : null;

        if (price) {
            return { currentPrice: price, marketCap, peRatio, source: 'google' };
        }
        return null;
    } catch (e) {
        console.error(`Google Finance error for ${ticker}:`, e.message);
        return null;
    }
}

// ================= SCREENER.IN (FALLBACK) =================
// Screener's search is fuzzy and its first hit is regularly a DIFFERENT
// company: "ANUP" returns Anupam Finserv (₹1.8), "STAR" returns Star Health.
// This used to take data[0] — and, failing that, retry on ever-shorter
// fragments of the name — so those companies' price and market cap were
// written onto ours with nothing to flag it: NRB Bearing showed ₹79 cr,
// Hind Rectifiers ₹4.5 lakh cr.
//
// A candidate now has to prove it is the same company before it is used, and
// no proof means no data. A stale number is recoverable; a confidently wrong
// one is not, and these sit on the dashboard looking exactly like the rest.
const NAME_NOISE = /\b(Ltd|Limited|Engg|Engineering|Industry|Industries|Corp|Corporation|Inc|Co|Com|Pvt|The|India)\.?\b/gi;

function normaliseName(s) {
    return (s || '')
        .replace(NAME_NOISE, ' ')
        .replace(/[^a-z0-9 ]/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

// Dice coefficient over letter bigrams. Tolerant of the spelling drift between
// our names and the exchanges' ("Shree Refrigrations" vs "Shree Refrigerations")
// while still keeping "Anup" clear of "Anupam".
function nameSimilarity(a, b) {
    const bigrams = (s) => {
        const out = [];
        for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
        return out;
    };
    const A = bigrams(a), B = bigrams(b);
    if (!A.length || !B.length) return a && a === b ? 1 : 0;
    const pool = [...B];
    let hits = 0;
    for (const g of A) {
        const i = pool.indexOf(g);
        if (i > -1) { hits++; pool.splice(i, 1); }
    }
    return (2 * hits) / (A.length + B.length);
}

// Screener slugs an NSE-listed company by its symbol (/company/HIRECT/) and a
// BSE-only one by its scrip code (/company/544458/), so a slug equal to our
// ticker is proof of identity on its own.
function screenerSlug(url) {
    const parts = (url || '').split('/').filter(p => p && p !== 'company' && p !== 'consolidated');
    return parts[parts.length - 1] || '';
}

const MIN_NAME_MATCH = 0.75;

// Stored name plus Company.aliases (comma-separated names the company has been
// known by — scripts/sync-corporate-actions.ts adds one when it is renamed).
function namesOf(company) {
    return [company.name, ...(company.aliases || '').split(',')].map(s => (s || '').trim()).filter(Boolean);
}

const nameTokens = s => normaliseName(s).split(' ').filter(t => t.length >= 2);

// Every word of ours starts a word of theirs (or the other way round).
function tokensFit(ours, theirs) {
    const a = nameTokens(ours), b = nameTokens(theirs);
    if (!a.length || !b.length) return false;
    return a.every(t => b.some(u => u.startsWith(t) || t.startsWith(u)));
}

function verifiedPick(company, results) {
    const ticker = (company.ticker || '').trim().toLowerCase();
    if (ticker) {
        const exact = results.find(r => screenerSlug(r.url).toLowerCase() === ticker);
        if (exact) return exact;
    }
    const names = namesOf(company);
    let best = null, bestScore = 0;
    for (const r of results) {
        for (const n of names) {
            const score = nameSimilarity(normaliseName(n), normaliseName(r.name));
            if (score > bestScore) { best = r; bestScore = score; }
        }
    }
    if (bestScore >= MIN_NAME_MATCH) return best;
    // Fallback for abbreviated or renamed stored names ("Ahluwalia Contr.",
    // "Waaree Renewables" vs "Waaree Renewable Technologies", "HEG" vs "HEG
    // Advanced Materials"): every word of our name must start a word of the
    // candidate's name (or the other way round), and exactly one candidate may
    // qualify. "Anup Enginee" still does not match "Anupam Finserv".
    for (const n of names) {
        const fits = results.filter(r => tokensFit(n, r.name));
        if (fits.length === 1) return fits[0];
    }
    return null;
}

// Screener blocks bursts: every request to it goes through here, at least
// 2.5 s after the previous one.
const SCREENER_GAP_MS = 2500;
let lastScreenerRequest = 0;
async function screenerGet(url) {
    const wait = lastScreenerRequest + SCREENER_GAP_MS - Date.now();
    if (wait > 0) await new Promise(r => setTimeout(r, wait));
    try {
        return await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    } finally {
        lastScreenerRequest = Date.now();
    }
}

async function searchScreener(query) {
    if (!query) return [];
    try {
        const res = await screenerGet(`https://www.screener.in/api/company/search/?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        return Array.isArray(data) ? data.filter(r => r && r.url && r.name) : [];
    } catch (e) {
        return [];
    }
}

// Renamed or hard-to-match companies have a fixed page, keyed by ISIN.
const SCREENER_OVERRIDES = require('../lib/screener-overrides.json');

// NSE symbol by ISIN, from NSE's own equity lists (main board and SME), read
// once per run. Twin of loadNseListings in lib/corporate-actions/nse-lists.ts.
// If NSE is unreachable the map is empty and the lookup falls back to the ticker.
let nseSymbols = null;
async function nseSymbolForIsin(isin) {
    if (!isin) return null;
    if (!nseSymbols) {
        nseSymbols = new Map();
        const lists = [
            'https://nsearchives.nseindia.com/content/equities/EQUITY_L.csv',
            'https://nsearchives.nseindia.com/emerge/corporates/content/SME_EQUITY_L.csv',
        ];
        for (const url of lists) {
            try {
                const res = await fetch(url, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36' },
                    signal: AbortSignal.timeout(30000),
                });
                if (!res.ok) continue;
                for (const line of (await res.text()).split(/\r?\n/).slice(1)) {
                    const cells = line.split(',').map(c => c.trim());
                    const code = cells.find(c => /^IN[A-Z0-9]{10}$/.test(c));
                    if (code && cells[0]) nseSymbols.set(code, cells[0].toUpperCase());
                }
            } catch (e) { /* unreachable: fall back to the ticker */ }
        }
    }
    return nseSymbols.get(isin) || null;
}

// The company name a Screener page is about, from its <title> ("Hirect Ltd share price | ...").
function screenerPageName(html) {
    const m = html.match(/<title>\s*([\s\S]*?)\s+share price\b/i);
    return m ? m[1].replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").trim() : null;
}

// Page downloaded by the direct check below, handed to fetchScreenerHtml so
// the same page is not requested twice.
const pageCache = new Map();

async function resolveScreenerUrl(company) {
    const fixed = company.isin && SCREENER_OVERRIDES[company.isin];
    if (fixed) return `https://www.screener.in${fixed}`;
    const names = namesOf(company);

    // Direct page: the company's current NSE symbol (read from NSE's list by
    // ISIN, so a changed symbol is followed automatically) or, for a BSE-only
    // company, its scrip code — Screener keeps that page across renames.
    // Accepted only when the page's own name is ours or one of our aliases.
    const t = (company.ticker || '').trim().toUpperCase();
    const symbol = (await nseSymbolForIsin(company.isin)) || (/^[A-Z][A-Z0-9&-]{0,19}$/.test(t) ? t : null);
    const direct = /^\d{6}$/.test(t)
        ? `https://www.screener.in/company/${t}/`
        : symbol ? `https://www.screener.in/company/${encodeURIComponent(symbol)}/consolidated/` : null;
    if (direct) {
        try {
            const res = await screenerGet(direct);
            if (res.ok) {
                const html = await res.text();
                const pageName = screenerPageName(html);
                // The page came from our own ISIN's symbol, so either direction of the
                // word check will do ("Apar Inds." vs "Apar Industries Ltd").
                if (pageName && names.some(n => nameSimilarity(normaliseName(n), normaliseName(pageName)) >= MIN_NAME_MATCH || tokensFit(n, pageName) || tokensFit(pageName, n))) {
                    pageCache.clear();
                    pageCache.set(direct, html);
                    return direct;
                }
            }
        } catch (e) { /* fall through to the search */ }
    }

    // Last resort: the first word alone ("Waaree Renewables" finds nothing on
    // Screener, "waaree" finds both Waaree companies and the word check picks one).
    const queries = [company.isin, company.ticker, ...names, ...names.map(normaliseName), normaliseName(company.name).split(' ')[0]];
    const tried = new Set();
    for (const q of queries) {
        if (!q || tried.has(q)) continue;
        tried.add(q);
        const hit = verifiedPick(company, await searchScreener(q));
        if (hit) return `https://www.screener.in${hit.url}`;
    }
    return null;
}

// Screener's top ratios are one <li> each: <span class="name">Stock P/E</span>
// <span class="value"><span class="number">27.0</span></span>. Read the number
// inside the matching <li> only. A loss-maker's P/E cell is EMPTY, and the old
// "label, then the next number within 200 characters" regex could run on into
// the neighbouring field; an empty cell must come back as null.
function extractScreenerValue(html, label) {
    const start = html.indexOf('id="top-ratios"');
    const scope = start === -1 ? html : html.substring(start, start + 6000);
    const items = scope.match(/<li[^>]*>[\s\S]*?<\/li>/g) || [];
    const want = label.toLowerCase();
    for (const li of items) {
        const name = (li.match(/<span class="name">([\s\S]*?)<\/span>/) || [])[1];
        if (!name || name.replace(/\s+/g, ' ').trim().toLowerCase() !== want) continue;
        const num = (li.match(/<span class="number">([\d,.\-]*)<\/span>/) || [])[1];
        if (!num) return null;
        const v = parseFloat(num.replace(/,/g, ''));
        return Number.isFinite(v) ? v : null;
    }
    return null;
}

async function fetchScreenerHtml(company) {
    const url = await resolveScreenerUrl(company);

    if (!url) {
        console.warn(`\n   ⚠️ No verifiable Screener match for ${company.name.trim()} (${company.ticker}) — leaving its figures untouched.`);
        return null;
    }

    const cached = pageCache.get(url);
    if (cached) {
        pageCache.delete(url);
        return cached;
    }

    try {
        const response = await screenerGet(url);
        if (!response.ok) return null;
        return await response.text();
    } catch (e) {
        console.error(`Screener error for ${company.ticker}:`, e.message);
        return null;
    }
}

async function fetchScreener(company) {
    const html = await fetchScreenerHtml(company);
    if (!html) return null;

    try {
        const marketCap = extractScreenerValue(html, 'Market Cap');
        const currentPrice = extractScreenerValue(html, 'Current Price');
        const bookValue = extractScreenerValue(html, 'Book Value');
        const peRatio = extractScreenerValue(html, 'Stock P/E');
        const dividendYield = extractScreenerValue(html, 'Dividend Yield');
        const roce = extractScreenerValue(html, 'ROCE');

        const { fiftyTwoWeekHigh, fiftyTwoWeekLow } = extractScreenerRange(html);

        let pbRatio = null;
        if (currentPrice && bookValue && bookValue > 0) {
            pbRatio = Math.round((currentPrice / bookValue) * 100) / 100;
        }

        return { marketCap, currentPrice, bookValue, peRatio, pbRatio, dividendYield, roce, fiftyTwoWeekHigh, fiftyTwoWeekLow, ttmSales: parseTtmSales(html), shareholding: safeShareholding(html), source: 'screener' };
    } catch (e) {
        console.error(`Screener error for ${company.ticker}:`, e.message);
        return null;
    }
}

// ================= TTM SALES =================
// Screener's quarterly table is a plain HTML grid: row 0 is the column headers
// ("Mar 2023", "Jun 2023", ...) and each later row is a metric ("Sales",
// "Operating Profit"). Summing the last four Sales cells gives trailing-twelve-
// month revenue, which is what P/S is measured against. Parsed properly rather
// than by character windows — the same brittle-regex approach silently broke
// the quarterly import for months when Screener changed their markup.

const stripTags = (s) =>
    s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

// "1,234" -> 1234, "-119" -> -119, "" / "-" / "12%" -> null.
function parseQuarterCell(text) {
    const t = text.replace(/,/g, '').trim();
    if (!t || t === '-' || t.includes('%')) return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
}

function parseTtmSales(html) {
    const start = html.indexOf('id="quarters"');
    if (start === -1) return null;
    const end = html.indexOf('</section>', start);
    const section = html.substring(start, end === -1 ? start + 40000 : end);

    const trs = section.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || [];
    if (trs.length < 2) return null;

    const cellsOf = (tr) => (tr.match(/<t[hd][^>]*>[\s\S]*?<\/t[hd]>/g) || []).map(stripTags);

    let row = null;
    for (const tr of trs.slice(1)) {
        const cells = cellsOf(tr);
        if (cells.length < 2) continue;
        // Expandable rows render as "Sales +" — drop the toggle marker.
        const label = cells[0].replace(/\s*\+$/, '').trim();
        // Banks/NBFCs label the top line "Revenue" instead of "Sales".
        if (label === 'Sales' || label === 'Revenue') {
            row = cells.slice(1).map(parseQuarterCell);
            break;
        }
    }
    if (!row) return null;

    // Take the last four columns that actually carry a number. A partial year
    // would understate sales and so overstate P/S — return null instead.
    const values = row.filter(v => v !== null);
    if (values.length < 4) return null;
    const ttm = values.slice(-4).reduce((a, b) => a + b, 0);
    return ttm > 0 ? Math.round(ttm * 100) / 100 : null;
}

// ================= SHAREHOLDING =================
// Screener's "Shareholding Pattern" card carries a quarterly table (id
// "quarterly-shp"): header cells are period labels ("Sep 2026" — an
// off-cycle filing can add a month such as "Jul 2026") and each row is a
// holder class with a percentage per period, then "No. of Shareholders".
// The same table appears on the consolidated and standalone pages. Read from
// the page this sync already downloads — no extra request.
const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// "Sep 2026" -> last day of that month (UTC), or null.
function periodEndOf(label) {
    const m = (label || '').match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
    if (!m) return null;
    const mon = MONTHS.indexOf(m[1].toLowerCase());
    if (mon < 0) return null;
    return new Date(Date.UTC(+m[2], mon + 1, 0));
}

const pctCell = (t) => {
    const v = parseFloat((t || '').replace(/[,%\s]/g, ''));
    return Number.isFinite(v) ? v : null;
};

function parseShareholding(html) {
    const start = html.indexOf('id="quarterly-shp"');
    if (start === -1) return [];
    const end = html.indexOf('</table>', start);
    const table = html.substring(start, end === -1 ? start + 30000 : end);
    const trs = table.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || [];
    if (trs.length < 2) return [];
    const cellsOf = (tr) => (tr.match(/<t[hd][^>]*>[\s\S]*?<\/t[hd]>/g) || []).map(stripTags);

    const periods = cellsOf(trs[0]).slice(1);
    const rows = {};
    for (const tr of trs.slice(1)) {
        const cells = cellsOf(tr);
        if (cells.length < 2) continue;
        const label = cells[0].replace(/\s*\+$/, '').trim().toLowerCase();
        const key = label.startsWith('promoter') ? 'promoter'
            : label.startsWith('fii') ? 'fii'
            : label.startsWith('dii') ? 'dii'
            : label.startsWith('government') ? 'government'
            : label.startsWith('public') ? 'public'
            : label.startsWith('no. of shareholders') ? 'shareholders'
            : null;
        if (key) rows[key] = cells.slice(1);
    }

    const out = [];
    periods.forEach((period, i) => {
        const periodEnd = periodEndOf(period);
        if (!periodEnd) return;
        const val = (k) => (rows[k] ? pctCell(rows[k][i]) : null);
        const promoter = val('promoter'), fii = val('fii'), dii = val('dii'), government = val('government'), pub = val('public');
        // A column with no holder figures at all is not a period we can use.
        if ([promoter, fii, dii, government, pub].every(v => v === null)) return;
        const holders = rows.shareholders ? parseInt((rows.shareholders[i] || '').replace(/[^\d]/g, ''), 10) : NaN;
        out.push({
            period, periodEnd,
            promoter: promoter ?? 0, fii: fii ?? 0, dii: dii ?? 0, government: government ?? 0, public: pub ?? 0,
            shareholders: Number.isFinite(holders) ? holders : null,
        });
    });
    return out;
}

// A markup change must never cost the day's prices.
function safeShareholding(html) {
    try { return parseShareholding(html); } catch (e) { return []; }
}

const SHAREHOLDING_KEEP = 12;
const { randomUUID } = require('crypto');

// Raw SQL so this does not depend on a regenerated Prisma client. `pledged` is
// never touched here — it comes from the NSE filing (sync-corporate-actions.ts).
async function saveShareholding(companyId, rows) {
    if (!rows.length) return 0;
    // One statement for all periods; a row is rewritten only when a figure changed.
    const values = rows.slice(-SHAREHOLDING_KEEP).map(r => Prisma.sql`(${randomUUID()}, ${companyId}, ${r.period}, ${r.periodEnd}::date, ${r.promoter}, ${r.fii}, ${r.dii}, ${r.government}, ${r.public}, ${r.shareholders}::int, now())`);
    await prisma.$executeRaw`
        INSERT INTO "ShareholdingQuarter" ("id", "companyId", "period", "periodEnd", "promoter", "fii", "dii", "government", "public", "shareholders", "updatedAt")
        VALUES ${Prisma.join(values)}
        ON CONFLICT ("companyId", "period") DO UPDATE SET
            "periodEnd" = EXCLUDED."periodEnd", "promoter" = EXCLUDED."promoter", "fii" = EXCLUDED."fii",
            "dii" = EXCLUDED."dii", "government" = EXCLUDED."government", "public" = EXCLUDED."public",
            "shareholders" = EXCLUDED."shareholders", "updatedAt" = now()
        WHERE ("ShareholdingQuarter"."promoter", "ShareholdingQuarter"."fii", "ShareholdingQuarter"."dii", "ShareholdingQuarter"."government", "ShareholdingQuarter"."public", "ShareholdingQuarter"."shareholders")
            IS DISTINCT FROM (EXCLUDED."promoter", EXCLUDED."fii", EXCLUDED."dii", EXCLUDED."government", EXCLUDED."public", EXCLUDED."shareholders")`;
    await prisma.$executeRaw`
        DELETE FROM "ShareholdingQuarter" WHERE "companyId" = ${companyId} AND "id" NOT IN (
            SELECT "id" FROM "ShareholdingQuarter" WHERE "companyId" = ${companyId}
            ORDER BY "periodEnd" DESC LIMIT ${SHAREHOLDING_KEEP})`;
    return rows.length;
}

// Screener renders the 52-week band as: High / Low  ₹ <number>139</number> / <number>70.4</number>
// The generic extractor only grabs the first number, so pull the pair here.
function extractScreenerRange(html) {
    const regex = /High\s*\/\s*Low[\s\S]{0,200}?number">([\d,.]+)<\/span>\s*\/\s*<span class="number">([\d,.]+)/i;
    const match = html.match(regex);
    if (!match) return { fiftyTwoWeekHigh: null, fiftyTwoWeekLow: null };
    return {
        fiftyTwoWeekHigh: parseFloat(match[1].replace(/,/g, '')),
        fiftyTwoWeekLow: parseFloat(match[2].replace(/,/g, ''))
    };
}

// ================= HYBRID SYNC =================
// Optional CLI filter: `--company <isin|ticker|name>` (repeatable) forces a
// sync for the matching companies regardless of lastFinanceSync freshness.
// Without it, behaviour is unchanged: sweep every visible company that is
// null/stale (>12h).
//
// `--shareholding-only` reads just the shareholding table, for every visible
// company (or the --company matches), whatever their freshness, and writes
// nothing else — prices, ratios and lastFinanceSync are left for the daily
// run. Used to backfill the table; one Screener page per company.
function parseFilters() {
    const args = process.argv.slice(2);
    const filters = [];
    for (let i = 0; i < args.length; i++) {
        if ((args[i] === '--company' || args[i] === '-c') && args[i + 1]) {
            filters.push(args[i + 1].trim());
            i++;
        }
    }
    return filters;
}

const SHAREHOLDING_ONLY = process.argv.includes('--shareholding-only');

async function syncShareholdingOnly(filters) {
    const where = filters.length > 0
        ? { OR: filters.flatMap(f => [{ isin: f }, { ticker: { equals: f, mode: 'insensitive' } }, { name: { contains: f, mode: 'insensitive' } }]) }
        : { isVisible: true };
    const companies = await prisma.company.findMany({ where, orderBy: { name: 'asc' } });
    console.log(`📋 Shareholding-only sync for ${companies.length} companies...
`);
    let filled = 0, empty = 0, failed = 0;
    for (const company of companies) {
        process.stdout.write(`${company.ticker.padEnd(20)}`);
        const html = await fetchScreenerHtml(company);
        if (!html) { failed++; console.log('❌ No page'); continue; }
        const rows = safeShareholding(html);
        if (!rows.length) { empty++; console.log('— no shareholding table'); continue; }
        await saveShareholding(company.id, rows);
        filled++;
        const last = rows[rows.length - 1];
        console.log(`✓ ${rows.length} periods, latest ${last.period}: promoter ${last.promoter}%`);
    }
    console.log(`
✅ Shareholding: ${filled} filled, ${empty} without a table, ${failed} without a page`);
}

async function syncFinance() {
    const filters = parseFilters();
    if (SHAREHOLDING_ONLY) return syncShareholdingOnly(filters);

    const yesterday = new Date();
    yesterday.setHours(yesterday.getHours() - 12); // Sync if not updated in last 12 hours

    const where = filters.length > 0
        ? {
            OR: filters.flatMap(f => [
                { isin: f },
                { ticker: { equals: f, mode: 'insensitive' } },
                { name: { contains: f, mode: 'insensitive' } },
            ]),
        }
        : {
            isVisible: true,
            OR: [
                { lastFinanceSync: null },
                { lastFinanceSync: { lt: yesterday } },
            ],
        };

    const companies = await prisma.company.findMany({ where });

    if (filters.length > 0) {
        console.log(`🎯 Targeted finance sync for filters: ${filters.join(', ')}`);
    }

    console.log(`🚀 Starting hybrid finance sync for ${companies.length} companies...\n`);

    // Sales only move when results are declared, so the quarterly table is
    // re-read weekly rather than on every sweep. Market cap refreshes daily and
    // P/S is divided at read time, so the ratio still tracks the price.
    const salesCutoff = new Date();
    salesCutoff.setDate(salesCutoff.getDate() - 7);

    // Companies Google answers for need a second, Screener-only round trip for
    // sales. Capped per run so the nightly job can't walk past its 90-minute
    // timeout; whatever is left over is picked up by the next sweep.
    let salesBudget = 200;

    let googleSuccess = 0, screenerSuccess = 0, failed = 0, salesUpdated = 0, shareholdingSaved = 0;

    for (const company of companies) {
        process.stdout.write(`${company.ticker.padEnd(20)}`);

        const salesStale = !company.ttmSales
            || !company.lastSalesSync
            || company.lastSalesSync < salesCutoff;

        // Screener only. Google Finance's quote page no longer carries a
        // machine-readable price, and its P/E used a different profit basis
        // (it kept P/Es on loss-makers such as Exicom), so it is not used.
        const data = await fetchScreener(company);
        if (data && data.currentPrice) {
            screenerSuccess++;
            console.log(`📊 Screener: ₹${data.currentPrice}`);
            await new Promise(r => setTimeout(r, 2000)); // Be polite
        } else {
            failed++;
            console.log(`❌ Not found`);
            await new Promise(r => setTimeout(r, 2000));
            continue;
        }

        // Google carries no revenue history, so a stale sales figure means one
        // extra Screener hit — skipped when Screener already answered above,
        // since that page has been parsed already.
        let ttmSales = data.ttmSales ?? null;
        let salesChecked = data.source === 'screener';
        if (!ttmSales && salesStale && !salesChecked && salesBudget > 0) {
            salesBudget--;
            const html = await fetchScreenerHtml(company);
            if (html) {
                ttmSales = parseTtmSales(html);
                salesChecked = true;
            }
            await new Promise(r => setTimeout(r, 2000)); // Be polite
        }
        if (ttmSales) salesUpdated++;

        // Shareholding pattern, from the same page. Never fails the price write.
        if (data.shareholding && data.shareholding.length) {
            try {
                await saveShareholding(company.id, data.shareholding);
                shareholdingSaved++;
            } catch (e) {
                console.warn(`   ⚠️ Shareholding not saved for ${company.ticker}: ${e.message}`);
            }
        }

        // Update database
        await prisma.company.update({
            where: { id: company.id },
            data: {
                marketCap: data.marketCap || undefined,
                currentPrice: data.currentPrice || undefined,
                bookValue: data.bookValue || undefined,
                // Written even when null: an empty Screener P/E means a loss,
                // and keeping the old figure is how loss-makers kept showing
                // stale P/Es for months.
                peRatio: data.peRatio ?? null,
                pbRatio: data.pbRatio ?? null,
                dividendYield: data.dividendYield ?? null,
                roce: data.roce || undefined,
                // Google doesn't expose the 52w band, so leave the stored
                // value untouched when it's the source that answered.
                fiftyTwoWeekHigh: data.fiftyTwoWeekHigh || undefined,
                fiftyTwoWeekLow: data.fiftyTwoWeekLow || undefined,
                ttmSales: ttmSales || undefined,
                // Stamped on every look, not just a hit: a company whose
                // quarterly table has fewer than four filled columns would
                // otherwise be re-fetched on every sweep forever.
                lastSalesSync: salesChecked ? new Date() : undefined,
                lastFinanceSync: new Date()
            }
        });

        // Small delay for Google
        await new Promise(r => setTimeout(r, 200));
    }

    console.log(`\n✅ Sync Complete!`);
    console.log(`   Google Finance: ${googleSuccess}`);
    console.log(`   Screener.in:    ${screenerSuccess}`);
    console.log(`   Not Found:      ${failed}`);
    console.log(`   TTM sales:      ${salesUpdated}`);
    console.log(`   Shareholding:   ${shareholdingSaved}`);
}

syncFinance()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
