const { PrismaClient } = require('@prisma/client');
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
async function resolveScreenerUrl(query) {
    if (!query) return null;

    const cleanQuery = query
        .replace(/\b(Ltd|Limited|Engg|Engineering|Industry|Industries|Corp|Corporation|Inc|Co|Com|Pvt)\.?\b/gi, '')
        .replace(/[&.]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    const trySearch = async (q) => {
        try {
            const res = await fetch(`https://www.screener.in/api/company/search/?q=${encodeURIComponent(q)}`, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            const data = await res.json();
            if (data && data[0] && data[0].url) {
                return `https://www.screener.in${data[0].url}`;
            }
        } catch (e) { }
        return null;
    };

    // Try original
    let url = await trySearch(query);
    if (url) return url;

    // Try cleaned
    if (cleanQuery !== query && cleanQuery.length > 2) {
        url = await trySearch(cleanQuery);
        if (url) return url;
    }

    // Try first two words
    const words = cleanQuery.split(' ');
    if (words.length > 2) {
        url = await trySearch(words.slice(0, 2).join(' '));
        if (url) return url;
    }

    // Try first word only if it's long enough
    if (words.length >= 1 && words[0].length > 3) {
        url = await trySearch(words[0]);
        if (url) return url;
    }

    return null;
}

function extractScreenerValue(html, label) {
    const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`${escapedLabel}[\\s\\S]{0,200}?number">([\\d,.]+)`, 'i');
    const match = html.match(regex);
    if (match && match[1]) {
        return parseFloat(match[1].replace(/,/g, ''));
    }
    return null;
}

async function fetchScreenerHtml(company) {
    let url = null;

    // Priority 1: ISIN (Most reliable)
    if (company.isin) {
        url = await resolveScreenerUrl(company.isin);
    }

    // Priority 2: Ticker
    if (!url) {
        url = await resolveScreenerUrl(company.ticker);
    }

    // Priority 3: Name
    if (!url) {
        url = await resolveScreenerUrl(company.name);
    }

    if (!url) return null;

    try {
        const response = await fetch(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
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

        return { marketCap, currentPrice, bookValue, peRatio, pbRatio, dividendYield, roce, fiftyTwoWeekHigh, fiftyTwoWeekLow, ttmSales: parseTtmSales(html), source: 'screener' };
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

async function syncFinance() {
    const filters = parseFilters();

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

    let googleSuccess = 0, screenerSuccess = 0, failed = 0, salesUpdated = 0;

    for (const company of companies) {
        process.stdout.write(`${company.ticker.padEnd(20)}`);

        const salesStale = !company.ttmSales
            || !company.lastSalesSync
            || company.lastSalesSync < salesCutoff;

        // Try Google Finance first (fast)
        let data = await fetchGoogleFinance(company.ticker);

        if (data && data.currentPrice) {
            googleSuccess++;
            console.log(`✅ Google: ₹${data.currentPrice}`);
        } else {
            // Fallback to Screener.in
            data = await fetchScreener(company);
            if (data && data.currentPrice) {
                screenerSuccess++;
                console.log(`📊 Screener: ₹${data.currentPrice}`);
                await new Promise(r => setTimeout(r, 2000)); // Be polite
            } else {
                failed++;
                console.log(`❌ Not found`);
                continue;
            }
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

        // Update database
        await prisma.company.update({
            where: { id: company.id },
            data: {
                marketCap: data.marketCap || undefined,
                currentPrice: data.currentPrice || undefined,
                bookValue: data.bookValue || undefined,
                peRatio: data.peRatio || undefined,
                pbRatio: data.pbRatio || undefined,
                dividendYield: data.dividendYield || undefined,
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
}

syncFinance()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
