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

        return { marketCap, currentPrice, bookValue, peRatio, pbRatio, dividendYield, roce, fiftyTwoWeekHigh, fiftyTwoWeekLow, ttmSales: parseTtmSales(html), shareholding: safeShareholding(html), screenerId: html.match(/data-company-id="(\d+)"/)?.[1] || null, source: 'screener' };
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

// ================= BIG HOLDER CHANGES =================
// When a company's shareholding for a new quarter first appears, read the named holders
// (everyone above 1%, from Screener) and flag for the weekly review any institution or
// public holder of note that came in at 2%+, fell below 1% from 2%+, or moved 2+ points.
// Promoters are left to the promoter-holding flags. One Screener request per group.
const ATTENTION_FILE = require('path').join(process.cwd(), 'lib', 'corporate-actions', 'needs-attention.json');
const HOLDER_GROUPS = { foreign_institutions: 'FII', domestic_institutions: 'DII', public: 'public holder' };
const BIG_HOLDER = 2;

async function holderChanges(screenerId, period) {
    const lines = [];
    for (const [group, label] of Object.entries(HOLDER_GROUPS)) {
        let data = {};
        try {
            const res = await screenerGet(`https://www.screener.in/api/3/${screenerId}/investors/${group}/quarterly/`);
            if (res.ok) data = await res.json();
        } catch { continue; }
        for (const [name, byPeriod] of Object.entries(data)) {
            const periods = Object.keys(byPeriod).filter(k => k !== 'setAttributes');
            const i = periods.indexOf(period);
            const prevKey = i > 0 ? periods[i - 1] : null;
            const val = k => { const n = k ? Number(String(byPeriod[k] ?? '').replace(/,/g, '')) : NaN; return Number.isFinite(n) && n > 0 ? n : null; };
            const now = val(period), before = val(prevKey);
            const who = `${name.trim()} (${label})`;
            if (now !== null && before === null && prevKey && now >= BIG_HOLDER) lines.push(`${who} came in at ${now}%`);
            else if (now === null && before !== null && before >= BIG_HOLDER && i >= 0) lines.push(`${who} fell below 1% (held ${before}%)`);
            else if (now !== null && before !== null && Math.abs(now - before) >= BIG_HOLDER) lines.push(`${who} ${now > before ? 'raised' : 'cut'} its stake from ${before}% to ${now}%`);
        }
    }
    return lines;
}

function flagHolderChanges(company, period, lines) {
    const fs = require('fs');
    const list = fs.existsSync(ATTENTION_FILE) ? JSON.parse(fs.readFileSync(ATTENTION_FILE, 'utf8')) : [];
    const subject = `Big holder change: ${period}`;
    if (list.some(e => e.company === company.name.trim() && e.subject === subject)) return;
    list.push({
        company: company.name.trim(), sector: company.sector, subject,
        why: `${lines.join('; ')}. Find out why (block deal, share issue, index change, fund exit) and mention it in the company's section only if it matters.`,
        addedOn: new Date().toISOString().slice(0, 10),
    });
    fs.writeFileSync(ATTENTION_FILE, JSON.stringify(list, null, 2) + '\n');
}
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

// ================= NSE END-OF-DAY FILES =================
// NSE publishes, for every trading day, files anyone can download with a
// browser User-Agent (no login, no cookie needed for nsearchives):
//   - the CM bhavcopy (UDiFF): ISIN, symbol, series and closing price of every
//     main-board and SME share, out at about 4:30pm IST;
//   - the PR zip's mcap file: each share's issued share count ("Issue Size"),
//     so market cap = close x shares with no Screener involved;
//   - the 52-week high/low file (adjusted for splits, bonuses and rights).
// One download each replaces ~650 Screener pages a day. Screener is still read
// for what NSE does not publish (book value, ROCE, dividend yield, sales,
// shareholding), once a week per company, and daily for the few companies NSE
// has no price for (BSE-only listings).
const zlib = require('zlib');
const NSE_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

async function nseDownload(url) {
    try {
        const res = await fetch(url, { headers: { 'User-Agent': NSE_UA }, signal: AbortSignal.timeout(60000) });
        if (!res.ok) return null;
        return Buffer.from(await res.arrayBuffer());
    } catch (e) {
        return null;
    }
}

// Minimal zip reader (the files are plain deflate zips): name -> contents.
function unzip(buf) {
    const out = {};
    const eocd = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
    if (eocd < 0) return out;
    const count = buf.readUInt16LE(eocd + 10);
    let off = buf.readUInt32LE(eocd + 16);
    for (let i = 0; i < count && buf.readUInt32LE(off) === 0x02014b50; i++) {
        const method = buf.readUInt16LE(off + 10);
        const size = buf.readUInt32LE(off + 20);
        const nameLen = buf.readUInt16LE(off + 28), extraLen = buf.readUInt16LE(off + 30), commentLen = buf.readUInt16LE(off + 32);
        const local = buf.readUInt32LE(off + 42);
        const name = buf.toString('utf8', off + 46, off + 46 + nameLen);
        const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
        const data = buf.subarray(start, start + size);
        out[name] = method === 0 ? data : zlib.inflateRawSync(data);
        off += 46 + nameLen + extraLen + commentLen;
    }
    return out;
}

// One CSV line, honouring double quotes; cells trimmed.
function csvCells(line) {
    const out = [];
    let cur = '', quoted = false;
    for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"') { if (quoted && line[i + 1] === '"') { cur += '"'; i++; } else quoted = !quoted; }
        else if (ch === ',' && !quoted) { out.push(cur.trim()); cur = ''; }
        else cur += ch;
    }
    out.push(cur.trim());
    return out;
}

const num = (s) => {
    const v = parseFloat(String(s ?? '').replace(/,/g, ''));
    return Number.isFinite(v) ? v : null;
};

// Main-board and SME share series, best first. BL (block-deal window) and
// debt/ETF series are ignored.
const SERIES_RANK = ['EQ', 'BE', 'BZ', 'SM', 'ST', 'SZ'];

// Today's date in India, as y/m/d numbers.
function istParts(d = new Date()) {
    const t = new Date(d.getTime() + 330 * 60000);
    return { y: t.getUTCFullYear(), m: t.getUTCMonth() + 1, d: t.getUTCDate(), weekday: t.getUTCDay() };
}
const pad2 = (n) => String(n).padStart(2, '0');

/**
 * The latest trading day's NSE files (today's, if already out, else the most
 * recent within a week). Returns null if no bhavcopy can be downloaded.
 *   { date: 'YYYY-MM-DD', byIsin: Map<isin, row>, bySymbol: Map<symbol, row> }
 *   row = { isin, symbol, series, name, close, shares, high52, low52 }
 */
async function loadNseDay() {
    const now = istParts();
    const base = Date.UTC(now.y, now.m - 1, now.d);
    for (let back = 0; back < 8; back++) {
        const day = new Date(base - back * 86400000);
        const y = day.getUTCFullYear(), m = pad2(day.getUTCMonth() + 1), d = pad2(day.getUTCDate());
        if (day.getUTCDay() === 0 || day.getUTCDay() === 6) continue;
        const bhavZip = await nseDownload(`https://nsearchives.nseindia.com/content/cm/BhavCopy_NSE_CM_0_0_0_${y}${m}${d}_F_0000.csv.zip`);
        if (!bhavZip) continue;
        const bhavFile = Object.entries(unzip(bhavZip)).find(([n]) => /\.csv$/i.test(n));
        if (!bhavFile) continue;

        // Bhavcopy: one row per security and series.
        const [head, ...lines] = bhavFile[1].toString('utf8').split(/\r?\n/).filter(l => l.trim());
        const h = csvCells(head);
        const col = (n) => h.indexOf(n);
        const iIsin = col('ISIN'), iSym = col('TckrSymb'), iSer = col('SctySrs'), iName = col('FinInstrmNm'), iClose = col('ClsPric'), iType = col('FinInstrmTp');
        if ([iIsin, iSym, iSer, iClose].some(i => i < 0)) throw new Error(`NSE bhavcopy header changed: ${head}`);
        const byIsin = new Map(), bySymbol = new Map();
        const better = (a, b) => (SERIES_RANK.indexOf(a.series) + 1 || 99) < (SERIES_RANK.indexOf(b.series) + 1 || 99);
        for (const line of lines) {
            const c = csvCells(line);
            if (iType >= 0 && c[iType] !== 'STK') continue;
            if (!SERIES_RANK.includes(c[iSer])) continue;
            const close = num(c[iClose]);
            if (!close || close <= 0) continue;
            const row = { isin: c[iIsin], symbol: (c[iSym] || '').toUpperCase(), series: c[iSer], name: c[iName] || '', close, shares: null, high52: null, low52: null };
            const prev = byIsin.get(row.isin);
            if (!prev || better(row, prev)) byIsin.set(row.isin, row);
        }
        for (const row of byIsin.values()) bySymbol.set(row.symbol, row);

        // Issued shares, from the PR zip's mcap file (same day). Unquoted and
        // the security name can hold a comma, so the numbers are read from the end.
        let withShares = 0;
        const prZip = await nseDownload(`https://nsearchives.nseindia.com/archives/equities/bhavcopy/pr/PR${d}${m}${String(y).slice(2)}.zip`);
        const mcapFile = prZip && Object.entries(unzip(prZip)).find(([n]) => /^mcap\d+\.csv$/i.test(n));
        if (mcapFile) {
            for (const line of mcapFile[1].toString('utf8').split(/\r?\n/).slice(1)) {
                const c = line.split(',').map(s => s.trim());
                if (c.length < 10) continue;
                const row = bySymbol.get((c[1] || '').toUpperCase());
                const shares = num(c[c.length - 3]);
                if (row && shares && shares > 0 && (c[2] === row.series || row.shares === null)) {
                    if (row.shares === null) withShares++;
                    row.shares = shares;
                }
            }
        }

        // 52-week high/low (adjusted for corporate actions).
        let with52 = 0;
        const hl = await nseDownload(`https://nsearchives.nseindia.com/content/CM_52_wk_High_low_${d}${m}${y}.csv`);
        if (hl) {
            for (const line of hl.toString('utf8').split(/\r?\n/)) {
                const c = csvCells(line);
                if (c.length < 6) continue;
                const row = bySymbol.get((c[0] || '').toUpperCase());
                const hi = num(c[2]), lo = num(c[4]);
                if (!row || !hi || !lo || (row.high52 !== null && c[1] !== row.series)) continue;
                if (row.high52 === null) with52++;
                row.high52 = Math.max(hi, row.close);
                row.low52 = Math.min(lo, row.close);
            }
        }

        const date = `${y}-${m}-${d}`;
        console.log(`📥 NSE files for ${date}: ${byIsin.size} shares priced, ${withShares} with share counts, ${with52} with 52-week range${mcapFile ? '' : ' (mcap file missing)'}${hl ? '' : ' (52-week file missing)'}\n`);
        return { date, byIsin, bySymbol };
    }
    return null;
}

// Our company's row in NSE's files: by ISIN; else by its current NSE symbol
// (from NSE's equity list, by ISIN); else by our ticker, when NSE's name for
// that symbol is recognisably ours.
async function nseRowFor(company, nse) {
    if (company.isin && nse.byIsin.has(company.isin)) return nse.byIsin.get(company.isin);
    const symbol = await nseSymbolForIsin(company.isin);
    if (symbol && nse.bySymbol.has(symbol)) return nse.bySymbol.get(symbol);
    const row = nse.bySymbol.get((company.ticker || '').trim().toUpperCase());
    if (row && namesOf(company).some(n => nameSimilarity(normaliseName(n), normaliseName(row.name)) >= MIN_NAME_MATCH || tokensFit(n, row.name) || tokensFit(row.name, n))) return row;
    return null;
}

// ================= TRAILING EARNINGS =================
// Net profit (₹ cr) over the last twelve months from our Financials table, for
// P/E. Quarters are indexed year*4+q (FY27 Q1 = Apr-Jun 2026). A quarter's
// results are due within 45 days (60 for Q4), so the latest quarter we need is
// the last one that ended 60+ days ago; an older set is stale, not TTM.
const QN = { Q1: 1, Q2: 2, Q3: 3, Q4: 4 };
function expectedLatestQuarter(today = new Date()) {
    // FY year Y, quarter q ends: Q1 Jun 30 (Y-1), Q2 Sep 30 (Y-1), Q3 Dec 31 (Y-1), Q4 Mar 31 (Y).
    const endOf = (idx) => {
        const year = Math.floor((idx - 1) / 4), q = ((idx - 1) % 4) + 1;
        return q === 4 ? Date.UTC(year, 3, 0) : Date.UTC(year - 1, 3 + 3 * q, 0);
    };
    const fy = today.getUTCMonth() >= 3 ? today.getUTCFullYear() + 1 : today.getUTCFullYear();
    for (let idx = fy * 4 + 4; idx > fy * 4 - 8; idx--) {
        if (endOf(idx) + 60 * 86400000 <= today.getTime()) return idx;
    }
    return null;
}

/**
 * companyId -> { earnings, basis } where basis is 'quarters' (last four
 * quarters) or 'halves' (a half-yearly SME's last two halves, filed as Q2 and
 * Q4). Missing from the map when our table cannot give a full, current year.
 */
async function loadTrailingEarnings(companies) {
    const out = new Map();
    const expected = expectedLatestQuarter();
    if (!expected) return out;
    const rows = await prisma.financials.findMany({
        where: { companyId: { in: companies.map(c => c.id) }, quarter: { q: { in: Object.keys(QN) } } },
        select: { companyId: true, pat: true, quarter: { select: { year: true, q: true } } },
    });
    const byCompany = new Map();
    for (const r of rows) {
        // A 0 is how a quarter we have no figure for is sometimes filed.
        const pat = r.pat === null ? null : Number(r.pat);
        if (pat === null || pat === 0) continue;
        if (!byCompany.has(r.companyId)) byCompany.set(r.companyId, new Map());
        byCompany.get(r.companyId).set(r.quarter.year * 4 + QN[r.quarter.q], pat);
    }
    for (const c of companies) {
        const pats = byCompany.get(c.id);
        if (!pats || !pats.size) continue;
        const latest = Math.max(...pats.keys());
        if (latest >= expected && [0, 1, 2, 3].every(k => pats.has(latest - k))) {
            out.set(c.id, { earnings: [0, 1, 2, 3].reduce((s, k) => s + pats.get(latest - k), 0), basis: 'quarters' });
            continue;
        }
        if (c.isSme) {
            // Half-yearly SME: H1 is filed as Q2, H2 as Q4.
            const halves = [...pats.keys()].filter(i => i % 4 === 2 || i % 4 === 0).sort((a, b) => b - a);
            const h = halves[0];
            if (h !== undefined && h >= expected - 1 && pats.has(h - 2)) {
                out.set(c.id, { earnings: pats.get(h) + pats.get(h - 2), basis: 'halves' });
            }
        }
    }
    return out;
}

// ================= DAILY SYNC =================
// Optional CLI filter: `--company <isin|ticker|name>` (repeatable) limits the
// run to the matching companies and forces a full Screener read for them.
// Without it: every visible company is priced from NSE's files; Screener is
// read for a fifth of the book each weekday (see screenerDue), and daily for
// companies NSE has no price for, skipping any read in the last 12 hours.
//
// `--dry-run` downloads NSE's files and prints what would be written, plus a
// comparison with the stored figures; no database writes, no Screener requests.
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

const DRY = process.argv.includes('--dry-run');
// Prices from NSE only: no Screener request at all (companies NSE has no price
// for are left as they are). For testing, or if Screener is blocking us.
const NO_SCREENER = process.argv.includes('--no-screener') || DRY;

// Each company's weekday (1 = Monday ... 5 = Friday) for its Screener read:
// a stable hash of its id, so the book is spread evenly over the week.
function screenerWeekday(id) {
    let h = 0;
    for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return 1 + (h % 5);
}

const HOUR = 3600000, DAY_MS = 86400000;
const round2 = (v) => Math.round(v * 100) / 100;
const dec = (v) => (v === null || v === undefined ? null : Number(v));

// Book value, ROCE, dividend yield, sales and shareholding only change with
// results, so each company's Screener page is read once a week, on its own
// weekday. A company that missed its day (holiday, failure, new) catches up.
function screenerDue(company, weekday, now) {
    const last = company.lastSalesSync; // stamped on every Screener read
    if (last && now - last < 12 * HOUR) return false;
    if (!last || now - last > 9 * DAY_MS) return 'catch-up';
    return screenerWeekday(company.id) === weekday ? 'weekly' : false;
}

// The old daily write, all from one Screener page. Used for companies NSE has
// no price for, and for everyone if NSE's files cannot be downloaded.
async function writeFromScreener(company, data) {
    if (data.shareholding && data.shareholding.length) {
        try { await saveShareholding(company.id, data.shareholding); }
        catch (e) { console.warn(`   ⚠️ Shareholding not saved for ${company.ticker}: ${e.message}`); }
    }
    await prisma.company.update({
        where: { id: company.id },
        data: {
            marketCap: data.marketCap || undefined,
            currentPrice: data.currentPrice || undefined,
            bookValue: data.bookValue || undefined,
            // Written even when null: an empty Screener P/E means a loss.
            peRatio: data.peRatio ?? null,
            pbRatio: data.pbRatio ?? null,
            dividendYield: data.dividendYield ?? null,
            roce: data.roce || undefined,
            fiftyTwoWeekHigh: data.fiftyTwoWeekHigh || undefined,
            fiftyTwoWeekLow: data.fiftyTwoWeekLow || undefined,
            ttmSales: data.ttmSales || undefined,
            lastSalesSync: new Date(),
            lastFinanceSync: new Date(),
        },
    });
}

/**
 * Today's figures for a company NSE priced. `scr` is its Screener page when
 * read today (weekly), else null. Returns the fields to write plus notes for
 * the comparison.
 *
 *   market cap = NSE close x NSE issued shares
 *   P/E        = market cap / trailing net profit: our last four quarters (or a
 *                half-yearly SME's last two halves); where our table has no
 *                complete current year, Screener's own figure (its market cap
 *                / its P/E, read weekly) carried forward. A loss -> null.
 *   P/B        = price / book value per share (Screener, weekly)
 *   div. yield = Screener's, carried at a constant rupee dividend
 */
function deriveFigures(company, row, scr, fin) {
    const price = row.close;
    const oldPrice = dec(company.currentPrice), oldMcap = dec(company.marketCap), oldPe = dec(company.peRatio), oldDy = dec(company.dividendYield);
    const notes = [];

    let shares = row.shares;
    if (!shares && oldMcap && oldPrice) { shares = (oldMcap * 1e7) / oldPrice; notes.push('no NSE share count: yesterday\'s implied count'); }
    const marketCap = shares ? round2((price * shares) / 1e7) : null;

    // Book value per share: Screener's when read today; otherwise the stored
    // one, cut by the split/bonus ratio when NSE's share count has jumped and
    // the price has fallen by the same factor (a split, not a data difference).
    let bookValue = scr && scr.bookValue ? scr.bookValue : dec(company.bookValue);
    if (!(scr && scr.bookValue) && bookValue && row.shares && oldMcap && oldPrice) {
        const ratio = row.shares / ((oldMcap * 1e7) / oldPrice);
        const priceFit = (price * ratio) / oldPrice;
        if ((ratio > 1.25 || ratio < 0.8) && priceFit > 0.8 && priceFit < 1.25) {
            bookValue = round2(bookValue / ratio);
            notes.push(`share count x${round2(ratio)} (split/bonus): book value adjusted`);
        }
    }

    // Trailing net profit (₹ cr): Screener's (its market cap / its P/E, an
    // empty P/E meaning a loss), taken on its weekly read and carried between
    // reads; our own quarters only for a company Screener has never been read
    // for. Our quarters come from the concall notes and differ from Screener's
    // consolidated net profit for about a third of the book (minority
    // interest, exceptional items, standalone figures) — see the comparison.
    let earnings = null, peBasis;
    if (scr && scr.marketCap) {
        earnings = scr.peRatio ? scr.marketCap / scr.peRatio : null; peBasis = 'screener';
    } else if (company.lastSalesSync || !fin) {
        earnings = oldPe && oldMcap ? oldMcap / oldPe : null; peBasis = 'screener-carried';
    } else {
        earnings = fin.earnings; peBasis = fin.basis;
    }
    const peRatio = marketCap && earnings && earnings > 0 ? round2(marketCap / earnings) : null;

    let dividendYield;
    if (scr) dividendYield = scr.dividendYield && scr.marketCap && marketCap ? round2((scr.dividendYield * scr.marketCap) / marketCap) : (scr.dividendYield ?? null);
    else dividendYield = oldDy && oldMcap && marketCap ? round2((oldDy * oldMcap) / marketCap) : oldDy;

    return {
        data: {
            currentPrice: price,
            marketCap: marketCap ?? undefined,
            peRatio: marketCap ? peRatio : undefined,
            pbRatio: bookValue && bookValue > 0 ? round2(price / bookValue) : null,
            bookValue: bookValue || undefined,
            dividendYield,
            fiftyTwoWeekHigh: row.high52 || undefined,
            fiftyTwoWeekLow: row.low52 || undefined,
        },
        peBasis,
        earnings,
        notes,
    };
}

// ================= COMPARISON =================
// New figures against the stored ones (Screener's, as of the previous run).
function band(a, b) {
    if (a === null && b === null) return 'same';
    if (a === null || b === null) return 'loss-mismatch';
    const d = Math.abs(a / b - 1);
    return d <= 0.05 ? 'within5' : d <= 0.2 ? '5to20' : 'over20';
}

function printComparison(rows) {
    const count = (key) => {
        const c = { same: 0, within5: 0, '5to20': 0, over20: 0, 'loss-mismatch': 0 };
        for (const r of rows) c[r[key]]++;
        return `within 5%: ${c.within5 + c.same}  |  5-20%: ${c['5to20']}  |  over 20%: ${c.over20}  |  loss on one side only: ${c['loss-mismatch']}`;
    };
    console.log(`\n=== Comparison with stored (Screener) figures, ${rows.length} companies priced by NSE ===`);
    console.log(`Market cap:          ${count('mcapBand')}`);
    console.log(`P/E (as written):    ${count('peBand')}`);
    const fin = rows.filter(r => r.peFinBand);
    const c = { same: 0, within5: 0, '5to20': 0, over20: 0, 'loss-mismatch': 0 };
    for (const r of fin) c[r.peFinBand]++;
    console.log(`P/E from our quarters only (${fin.length} with a full current year): within 5%: ${c.within5 + c.same}  |  5-20%: ${c['5to20']}  |  over 20%: ${c.over20}  |  loss on one side only: ${c['loss-mismatch']}`);
    const basis = {};
    for (const r of rows) basis[r.peBasis] = (basis[r.peBasis] || 0) + 1;
    console.log(`P/E basis: ${Object.entries(basis).map(([k, v]) => `${k} ${v}`).join(', ')}`);

    const off = rows.filter(r => !['within5', 'same'].includes(r.mcapBand) || r.peBand === 'over20' || r.peBand === 'loss-mismatch');
    if (off.length) {
        console.log(`\nAs written, market cap over 5% or P/E over 20% off the stored figure:`);
        for (const r of off) console.log(`  ${r.name.padEnd(28)} mcap ${r.oldMcap} -> ${r.mcap}  P/E ${r.oldPe} -> ${r.pe} [${r.peBasis}]${['within5', 'same'].includes(r.mcapBand) ? '' : '  share count: NSE issued shares differ from Screener\'s'}`);
    }
    const finOff = rows.filter(r => r.peFinBand === 'over20' || r.peFinBand === 'loss-mismatch');
    if (finOff.length) {
        const why = {};
        for (const r of finOff) { const k = r.finReason.split(':')[0]; why[k] = (why[k] || 0) + 1; }
        console.log(`\nP/E from our quarters, over 20% off Screener's (so not used): ${Object.entries(why).map(([k, v]) => `${k} ${v}`).join(', ')}`);
        for (const r of finOff) console.log(`  ${r.name.padEnd(28)} Screener P/E ${r.oldPe}, ours ${r.peFin}  ${r.finReason}`);
    }
}

// Why our quarters' P/E differs from Screener's.
function finReasonFor(r, fin) {
    if (r.oldPe === null) return 'loss per Screener: its P/E is empty, our four quarters sum to a profit';
    if (fin.earnings <= 0) return 'loss per our quarters: they sum to a loss, Screener has a profit';
    if (fin.basis === 'halves') return 'half-yearly SME: two halves differ from Screener\'s';
    const theirs = r.oldMcap / r.oldPe;
    return fin.earnings > theirs
        ? `our profit higher: ₹${round2(fin.earnings)} cr vs Screener's ₹${round2(theirs)} cr (minority share / one-off gain / standalone in our notes)`
        : `our profit lower: ₹${round2(fin.earnings)} cr vs Screener's ₹${round2(theirs)} cr (one-off loss / standalone in our notes)`;
}

async function syncFinance() {
    const filters = parseFilters();
    if (SHAREHOLDING_ONLY) return syncShareholdingOnly(filters);

    const where = filters.length > 0
        ? {
            OR: filters.flatMap(f => [
                { isin: f },
                { ticker: { equals: f, mode: 'insensitive' } },
                { name: { contains: f, mode: 'insensitive' } },
            ]),
        }
        : { isVisible: true };
    const companies = await prisma.company.findMany({ where, orderBy: { name: 'asc' } });
    if (filters.length > 0) console.log(`🎯 Targeted finance sync for filters: ${filters.join(', ')}`);
    console.log(`🚀 Finance sync for ${companies.length} companies${DRY ? ' (DRY RUN: nothing written, no Screener requests)' : NO_SCREENER ? ' (NSE only, no Screener requests)' : ''}...\n`);

    const nse = await loadNseDay();
    if (!nse) console.warn('⚠️ NSE files unavailable — every company falls back to its Screener page, as before.\n');
    const trailing = await loadTrailingEarnings(companies);

    const now = new Date();
    const weekday = istParts(now).weekday;
    let catchUpBudget = 150;
    const stats = { nse: 0, screenerWeekly: 0, screenerDaily: 0, screenerFailed: 0, skippedFresh: 0, untouched: 0, shareholding: 0 };
    const comparison = [];
    const noNse = [];

    for (const company of companies) {
        const row = nse ? await nseRowFor(company, nse) : null;

        // ── No NSE price (BSE-only listing, not traded, or NSE down): the full
        // Screener read, daily, as before.
        if (!row) {
            noNse.push(company);
            if (NO_SCREENER) { stats.untouched++; continue; }
            if (!filters.length && company.lastFinanceSync && now - company.lastFinanceSync < 12 * HOUR) { stats.skippedFresh++; continue; }
            process.stdout.write(`${company.ticker.padEnd(20)}`);
            const data = await fetchScreener(company);
            if (!data || !data.currentPrice) { stats.screenerFailed++; console.log('❌ Not found on Screener'); continue; }
            await writeFromScreener(company, data);
            stats.screenerDaily++;
            if (data.shareholding && data.shareholding.length) stats.shareholding++;
            console.log(`📊 Screener (no NSE price): ₹${data.currentPrice}`);
            continue;
        }

        // ── NSE price; Screener page on the company's weekly day.
        let scr = null;
        let due = filters.length ? 'forced' : screenerDue(company, weekday, now);
        if (due === 'catch-up' && catchUpBudget-- <= 0) due = false;
        if (due && !NO_SCREENER) {
            scr = await fetchScreener(company);
            if (scr) stats.screenerWeekly++; else stats.screenerFailed++;
        }

        const fin = trailing.get(company.id) || null;
        const out = deriveFigures(company, row, scr, fin);
        const d = out.data;

        const r = {
            name: company.name.trim(),
            oldMcap: dec(company.marketCap), mcap: d.marketCap ?? null,
            oldPe: dec(company.peRatio), pe: d.peRatio === undefined ? dec(company.peRatio) : d.peRatio,
            peBasis: out.peBasis, earnings: out.earnings,
        };
        r.mcapBand = band(r.mcap, r.oldMcap);
        r.peBand = band(r.pe, r.oldPe);
        if (fin && d.marketCap) {
            r.peFin = fin.earnings > 0 ? round2(d.marketCap / fin.earnings) : null;
            r.peFinBand = band(r.peFin, r.oldPe);
            r.finReason = finReasonFor(r, fin);
        }
        comparison.push(r);
        for (const n of out.notes) console.log(`   ${company.ticker}: ${n}`);

        if (DRY) { stats.nse++; continue; }

        if (scr && scr.shareholding && scr.shareholding.length) {
            // A quarter we have not stored before (and not the company's first load): check the named holders.
            const latest = scr.shareholding[scr.shareholding.length - 1].period;
            const known = await prisma.$queryRaw`SELECT "period" FROM "ShareholdingQuarter" WHERE "companyId" = ${company.id}`;
            const isNewQuarter = known.length > 0 && !known.some(k => k.period === latest);
            try { await saveShareholding(company.id, scr.shareholding); stats.shareholding++; }
            catch (e) { console.warn(`   ⚠️ Shareholding not saved for ${company.ticker}: ${e.message}`); }
            if (isNewQuarter && scr.screenerId) {
                try {
                    const lines = await holderChanges(scr.screenerId, latest);
                    if (lines.length) { flagHolderChanges(company, latest, lines); stats.holderFlags = (stats.holderFlags || 0) + 1; console.log(`   ${company.ticker}: big holder change — ${lines.join('; ')}`); }
                } catch (e) { console.warn(`   ⚠️ Holder names not read for ${company.ticker}: ${e.message}`); }
            }
        }
        await prisma.company.update({
            where: { id: company.id },
            data: {
                ...d,
                ...(scr ? {
                    roce: scr.roce || undefined,
                    ttmSales: scr.ttmSales || undefined,
                    lastSalesSync: new Date(),
                } : {}),
                lastFinanceSync: new Date(),
            },
        });
        stats.nse++;
    }

    printComparison(comparison);
    if (noNse.length) console.log(`\nNo NSE price (${noNse.length}): ${noNse.map(c => `${c.name.trim()} (${c.ticker})`).join(', ')}`);

    console.log(`\n✅ Finance sync ${DRY ? 'dry run ' : ''}complete${nse ? ` — NSE prices of ${nse.date}` : ''}`);
    console.log(`   Priced from NSE:            ${stats.nse}`);
    console.log(`   Screener weekly reads:      ${stats.screenerWeekly}`);
    console.log(`   Screener daily (no NSE):    ${stats.screenerDaily}`);
    console.log(`   Screener failures:          ${stats.screenerFailed}`);
    console.log(`   Skipped (read <12h ago):    ${stats.skippedFresh}`);
    console.log(`   Left untouched (no NSE, Screener off): ${stats.untouched}`);
    console.log(`   Shareholding saved:         ${stats.shareholding}`);
    console.log(`   Big holder changes flagged: ${stats.holderFlags || 0}`);
    if (DRY || NO_SCREENER) {
        const dueToday = companies.filter(c => !noNse.includes(c) && screenerDue(c, weekday, now)).length;
        console.log(`   (A normal run today would read Screener for ${dueToday} weekly + ${noNse.length} without an NSE price.)`);
    }
}

syncFinance()
    .catch(e => { console.error(e); process.exitCode = 1; })
    .finally(() => prisma.$disconnect());
