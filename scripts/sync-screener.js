const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            });
            if (response.ok) return await response.text();
            if (response.status === 404) return null;
            if (response.status === 429) {
                console.log(`Rate limited for ${url}. Waiting 10s...`);
                await new Promise(r => setTimeout(r, 10000));
            }
            console.log(`Attempt ${i + 1} failed for ${url}: ${response.status}`);
        } catch (e) {
            console.log(`Attempt ${i + 1} errored for ${url}: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 2000 * (i + 1)));
    }
    return null;
}

async function resolveScreenerUrl(query) {
    try {
        const res = await fetch(`https://www.screener.in/api/company/search/?q=${encodeURIComponent(query)}`, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const data = await res.json();
        if (data && data[0] && data[0].url) {
            return `https://www.screener.in${data[0].url}`;
        }
    } catch (e) {
        console.error(`Search failed for ${query}:`, e.message);
    }
    return null;
}

function extractValue(html, label) {
    const escapedLabel = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Limit search to within a <li> tag or a small window after the label
    const regex = new RegExp(`${escapedLabel}[\\s\\S]{0,200}?number">([\\d,.]+)`, 'i');
    const match = html.match(regex);
    if (match && match[1]) {
        return parseFloat(match[1].replace(/,/g, ''));
    }
    return null;
}

async function syncFinance() {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const companies = await prisma.company.findMany({
        where: {
            isVisible: true,
            OR: [
                { lastFinanceSync: null },
                { lastFinanceSync: { lt: yesterday } }
            ]
        },
        take: 100 // Process in batches of 100 to avoid long-running issues
    });

    console.log(`Starting finance sync for ${companies.length} companies...`);

    for (const company of companies) {
        let url = null;

        // Strategy 1: Use ISIN if available to search
        if (company.isin) {
            url = await resolveScreenerUrl(company.isin);
        }

        // Strategy 2: Use Ticker
        if (!url) {
            url = await resolveScreenerUrl(company.ticker);
        }

        // Strategy 3: Use Name
        if (!url) {
            url = await resolveScreenerUrl(company.name);
        }

        if (!url) {
            console.log(`Could not resolve Screener URL for ${company.name}`);
            continue;
        }

        console.log(`Fetching ${company.name} from ${url}...`);
        const html = await fetchWithRetry(url);

        if (!html) {
            console.log(`Could not fetch data for ${company.name}`);
            continue;
        }

        const data = {
            marketCap: extractValue(html, 'Market Cap'),
            currentPrice: extractValue(html, 'Current Price'),
            bookValue: extractValue(html, 'Book Value'),
            peRatio: extractValue(html, 'Stock P/E'),
            dividendYield: extractValue(html, 'Dividend Yield'),
            lastFinanceSync: new Date()
        };

        // Price to Book can be calculated
        if (data.currentPrice && data.bookValue && data.bookValue > 0) {
            data.pbRatio = Math.round((data.currentPrice / data.bookValue) * 100) / 100;
        } else {
            data.pbRatio = extractValue(html, 'Price to Book');
        }

        console.log(`✅ Updated ${company.ticker}: MCap ₹${data.marketCap}Cr, Price ₹${data.currentPrice}, P/E ${data.peRatio}`);

        await prisma.company.update({
            where: { id: company.id },
            data: data
        });

        // Delay 5 seconds to be very safe
        await new Promise(r => setTimeout(r, 5000));
    }

    console.log('Finance sync batch complete!');
}

syncFinance()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
