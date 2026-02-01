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

async function fetchScreener(company) {
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
        const html = await response.text();

        const marketCap = extractScreenerValue(html, 'Market Cap');
        const currentPrice = extractScreenerValue(html, 'Current Price');
        const bookValue = extractScreenerValue(html, 'Book Value');
        const peRatio = extractScreenerValue(html, 'Stock P/E');
        const dividendYield = extractScreenerValue(html, 'Dividend Yield');

        let pbRatio = null;
        if (currentPrice && bookValue && bookValue > 0) {
            pbRatio = Math.round((currentPrice / bookValue) * 100) / 100;
        }

        return { marketCap, currentPrice, bookValue, peRatio, pbRatio, dividendYield, source: 'screener' };
    } catch (e) {
        console.error(`Screener error for ${company.ticker}:`, e.message);
        return null;
    }
}

// ================= HYBRID SYNC =================
async function syncFinance() {
    const yesterday = new Date();
    yesterday.setHours(yesterday.getHours() - 12); // Sync if not updated in last 12 hours

    const companies = await prisma.company.findMany({
        where: {
            isVisible: true,
            OR: [
                { lastFinanceSync: null },
                { lastFinanceSync: { lt: yesterday } }
            ]
        }
    });

    console.log(`🚀 Starting hybrid finance sync for ${companies.length} companies...\n`);

    let googleSuccess = 0, screenerSuccess = 0, failed = 0;

    for (const company of companies) {
        process.stdout.write(`${company.ticker.padEnd(20)}`);

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
}

syncFinance()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
