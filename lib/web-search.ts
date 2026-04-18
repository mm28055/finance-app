import { fetch } from 'undici';

interface SearchResult {
    title: string;
    link: string;
    snippet: string;
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_CX = process.env.GOOGLE_SEARCH_ENGINE_ID;

export async function searchWeb(query: string, numResults = 5): Promise<SearchResult[]> {
    console.log(`🔍 Searching for: "${query}"`);

    // 1. Try Google Custom Search API first
    if (GOOGLE_API_KEY && GOOGLE_CX) {
        try {
            const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}&cx=${GOOGLE_CX}&num=${numResults}`;
            const res = await fetch(url);

            if (res.status === 200) {
                const data = await res.json() as any;
                if (data.items) {
                    return data.items.map((item: any) => ({
                        title: item.title,
                        link: item.link,
                        snippet: item.snippet
                    }));
                }
            } else {
                console.warn(`⚠️ Google Search API returned status ${res.status}. Falling back to DuckDuckGo.`);
            }
        } catch (error) {
            console.warn(`⚠️ Google Search API failed: ${error}. Falling back.`);
        }
    } else {
        console.warn("⚠️ No Google API keys found. Using DuckDuckGo fallback.");
    }

    // 2. Fallback: Yahoo HTML Scraper (Most reliable non-API method currently)
    try {
        console.log(`🤖 Attempting Yahoo Scraping for: "${query}"`);
        const yahooResults = await searchYahooScraper(query, numResults);
        if (yahooResults.length > 0) {
            return yahooResults;
        }
    } catch (error) {
        console.warn(`⚠️ Yahoo Scraper failed: ${error}`);
    }

    // 3. Fallback: Bing HTML Scraper
    try {
        console.log(`🤖 Attempting Bing Scraping for: "${query}"`);
        const bingResults = await searchBingScraper(query, numResults);
        if (bingResults.length > 0) {
            return bingResults;
        }
    } catch (error) {
        console.warn(`⚠️ Bing Scraper failed: ${error}`);
    }

    // 4. Fallback: DDG HTML Scraper (Lite version)
    try {
        const ddgUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
        const res = await fetch(ddgUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const html = await res.text();
        const results: SearchResult[] = [];

        // Regex to match the 'result__a' anchor tag. 
        // Handles:
        // 1. Any attributes before/after class
        // 2. class containing "result__a"
        // 3. href extraction
        // 4. Inner HTML (Title)
        const linkRegex = /<a[^>]+class="[^"]*result__a[^"]*"[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;

        let match;
        const links: { link: string, title: string }[] = [];
        while ((match = linkRegex.exec(html)) !== null) {
            // Remove HTML tags from title (like <span class="result__type">PDF</span>)
            const cleanTitle = match[2].replace(/<[^>]+>/g, '').trim();
            links.push({ link: match[1], title: cleanTitle });
        }

        // This is a naive scraper, but sufficient for finding PDF links
        // We might not get snippets perfectly aligned, but we mostly care about the PDF link

        for (let i = 0; i < Math.min(links.length, numResults); i++) {
            results.push({
                title: links[i].title,
                link: links[i].link,
                snippet: "Extracted from DuckDuckGo"
            });
        }

        return results;
    } catch (error) {
        console.error(`❌ All search methods failed for "${query}": ${error}`);
        return [];
    }
}

async function searchYahooScraper(query: string, numResults = 5): Promise<SearchResult[]> {
    const url = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5'
        }
    });

    if (res.status !== 200) {
        throw new Error(`Yahoo returned status ${res.status}`);
    }

    const html = await res.text();
    const results: SearchResult[] = [];

    // Yahoo Regex Logic
    // Matches: <div class="compTitle ..."><a ... href="..."> ... <h3 ...>Title</h3> ... </a>
    // We look for the class="compTitle" container to be safe, or just the anchor with specific structure.
    // The anchor has class "d-ib va-top" usually.
    // Simpler regex: href="..." ... <h3 ...>Title</h3>

    const linkRegex = /<div class="compTitle[^>]*>\s*<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>\s*<\/a>/g;

    let match;
    while ((match = linkRegex.exec(html)) !== null && results.length < numResults) {
        let link = match[1];
        // Yahoo wrap links in r.search.yahoo.com/_ylt.../RU=REAL_URL/RK...
        // We need to decode or extract the RU parameter if present, or just use the link if it works.
        // Actually, extracting RU is better.
        const ruMatch = /RU=([^/]+)\//.exec(link);
        if (ruMatch && ruMatch[1]) {
            link = decodeURIComponent(ruMatch[1]);
        }

        const titleRaw = match[2];
        const title = titleRaw.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');

        results.push({
            title: title,
            link: link,
            snippet: "Extracted from Yahoo"
        });
    }

    return results;
}

async function searchBingScraper(query: string, numResults = 5): Promise<SearchResult[]> {
    const url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    const res = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5'
        }
    });

    if (res.status !== 200) {
        throw new Error(`Bing returned status ${res.status}`);
    }

    const html = await res.text();
    const results: SearchResult[] = [];

    // Bing Regex Logic (Fragile but effective for simple list)
    // Matches <li class="b_algo">...<h2><a href="...">Title</a></h2>
    const itemRegex = /<li class="b_algo">[\s\S]*?<h2><a href="([^"]+)"[^>]*>([\s\S]*?)<\/a><\/h2>/g;

    let match;
    while ((match = itemRegex.exec(html)) !== null && results.length < numResults) {
        const link = match[1];
        const titleRaw = match[2];
        const title = titleRaw.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&'); // Basic unescape

        results.push({
            title: title,
            link: link,
            snippet: "Extracted from Bing"
        });
    }

    return results;
}

/**
 * Fetch article content from a URL and extract readable text.
 * Returns truncated text to avoid overwhelming the LLM context.
 */
export async function fetchArticleContent(url: string, maxChars = 8000): Promise<string> {
    try {
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml',
            }
        });

        if (!res.ok) {
            return `[Failed to fetch: HTTP ${res.status}]`;
        }

        const html = await res.text();

        // Simple text extraction: remove scripts, styles, and HTML tags
        let text = html
            .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '') // Remove scripts
            .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')   // Remove styles
            .replace(/<[^>]+>/g, ' ')                          // Remove HTML tags
            .replace(/&nbsp;/g, ' ')                           // Replace nbsp
            .replace(/&amp;/g, '&')                            // Replace amp
            .replace(/&lt;/g, '<')                             // Replace lt
            .replace(/&gt;/g, '>')                             // Replace gt
            .replace(/\s+/g, ' ')                              // Collapse whitespace
            .trim();

        // Truncate to maxChars
        if (text.length > maxChars) {
            text = text.substring(0, maxChars) + '... [truncated]';
        }

        return text;
    } catch (error) {
        return `[Error fetching article: ${error}]`;
    }
}

