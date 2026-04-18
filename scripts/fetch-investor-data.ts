import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fetch } from 'undici';
import pdf from 'pdf-parse';
import { searchWeb, fetchArticleContent } from '../lib/web-search';
import { geminiPro } from '../lib/gemini';

// Parse command line arguments
const args = process.argv.slice(2);
const tickerArg = args.find(a => a.startsWith('--ticker='));
const companyName = tickerArg ? tickerArg.split('=')[1].replace(/"/g, '') : null;

if (!companyName) {
    console.error("Please provide a company name via --ticker=\"Name\"");
    process.exit(1);
}

const TEMP_PDF_DIR = path.join(process.cwd(), 'temp', 'investor-pdfs');
const TEMP_DATA_DIR = path.join(process.cwd(), 'temp', 'investor-data');

// Ensure temp dirs exist
if (!fs.existsSync(TEMP_PDF_DIR)) fs.mkdirSync(TEMP_PDF_DIR, { recursive: true });
if (!fs.existsSync(TEMP_DATA_DIR)) fs.mkdirSync(TEMP_DATA_DIR, { recursive: true });

async function main() {
    console.log(`🚀 Starting Investor Data Fetch for: ${companyName}`);

    // 1. Search for Investor Presentation PDF
    const pdfQuery = `${companyName} investor presentation Q3 FY26 filetype:pdf`;
    console.log(`🔎 Searching PDF: "${pdfQuery}"...`);

    let pdfUrl: string | null = null;
    const pdfResults = await searchWeb(pdfQuery, 5);

    for (const res of pdfResults) {
        if (res.link.toLowerCase().endsWith('.pdf')) {
            pdfUrl = res.link;
            console.log(`✅ Found PDF: ${res.title} -> ${pdfUrl}`);
            break;
        }
    }

    // Fallback if Q3 26 not found
    if (!pdfUrl) {
        console.log("⚠️ No Q3 FY26 PDF found. Trying generic search...");
        const fallbackQuery = `${companyName} investor presentation latest filetype:pdf`;
        const fallbackResults = await searchWeb(fallbackQuery, 5);
        for (const res of fallbackResults) {
            if (res.link.toLowerCase().endsWith('.pdf')) {
                pdfUrl = res.link;
                console.log(`✅ Found Fallback PDF: ${res.title} -> ${pdfUrl}`);
                break;
            }
        }
    }

    // 2. Download and Cache PDF (if found)
    const safeName = companyName!.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const pdfPath = path.join(TEMP_PDF_DIR, `${safeName}.pdf`);
    let pdfText = "";

    if (pdfUrl) {
        if (fs.existsSync(pdfPath)) {
            console.log("📂 PDF already cached. Skipping download.");
        } else {
            console.log(`⬇️ Downloading PDF...`);
            try {
                const res = await fetch(pdfUrl);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const buffer = await res.arrayBuffer();
                fs.writeFileSync(pdfPath, Buffer.from(buffer));
                console.log("✅ Download complete.");
            } catch (err) {
                console.error(`❌ Download failed: ${err}`);
            }
        }

        // Parse PDF
        if (fs.existsSync(pdfPath)) {
            console.log("📄 Parsing PDF text...");
            const dataBuffer = fs.readFileSync(pdfPath);
            const pdfData = await pdf(dataBuffer);
            pdfText = pdfData.text.substring(0, 100000); // Truncate
        }
    } else {
        console.warn("⚠️ No PDF found. Will rely on news articles only.");
    }

    // 3. Search for Company's Official Investor Relations Page
    const irQuery = `${companyName} investor relations official website`;
    console.log(`🏢 Searching Company IR Page: "${irQuery}"...`);
    const irResults = await searchWeb(irQuery, 3);

    let companyWebsiteContent = "";
    for (const result of irResults) {
        // Look for likely company website (exclude news sites, stockanalysis, etc.)
        const domain = result.link.toLowerCase();
        const isLikelyCompanySite = !domain.includes('moneycontrol') &&
            !domain.includes('economictimes') &&
            !domain.includes('livemint') &&
            !domain.includes('bseindia') &&
            !domain.includes('nseindia') &&
            !domain.includes('stockanalysis') &&
            !domain.includes('simplywall');

        if (isLikelyCompanySite) {
            console.log(`   🌐 Found potential IR page: ${result.link}`);
            const content = await fetchArticleContent(result.link, 15000);
            if (content.length > 500 && !content.includes('[Failed to fetch')) {
                companyWebsiteContent = content;
                console.log(`   ✅ Scraped ${content.length} chars from company website.`);
                break;
            }
        }
    }

    // 4. Search for General News/Financial Data (Top 5 Articles)
    const newsQuery = `${companyName} financial news revenue growth 2025 2026`;
    console.log(`📰 Searching News: "${newsQuery}"...`);
    const newsResults = await searchWeb(newsQuery, 5);

    // 4. Fetch Article Content from Top 5
    console.log(`📥 Fetching content from ${newsResults.length} articles...`);
    const articleContents: { title: string, url: string, content: string }[] = [];

    for (const article of newsResults) {
        console.log(`   → Fetching: ${article.title.substring(0, 50)}...`);
        const content = await fetchArticleContent(article.link);
        articleContents.push({
            title: article.title,
            url: article.link,
            content: content
        });
    }

    // 5. LLM Extraction
    console.log("🧠 Extracting structured data with Gemini...");

    const extractionPrompt = `
    You are a Senior Equity Analyst's Data Assistant. 
    Analyze the following data about ${companyName}.
    
    TODAY'S DATE: ${new Date().toLocaleDateString()}
    
    Extract the following structured data points precisely. Return ONLY valid JSON.
    
    Required Fields:
    1. "publication_date": string (e.g. "Q3 FY26", "January 2026"). Best guess based on content.
    2. "is_outdated": boolean. Set to TRUE if the most recent data is from before 2025.
    3. "segments": list of { name, share_percent, growth_percent, commentary }
       - Revenue mix by business segment.
    4. "geography": list of { region, share_percent }
       - Domestic vs Export mix.
    5. "capex_plans": list of { project, amount, timeline, status }
       - Upcoming capacity expansions.
    6. "guidance": { revenue_target, margin_target, timeline }
       - Any future guidance (e.g., "Double revenue in 3 years").
    7. "new_wins": list of strings
       - New client wins or marquee orders.
    8. "strategic_focus": string
       - One sentence on their main strategic pivot.
    9. "recent_news": list of { headline, summary, date }
       - Extract key news items from the articles below.

    ---
    SOURCE 1: INVESTOR PRESENTATION (PDF)
    ${pdfText || "[No PDF available]"}
    
    ---
    SOURCE 2: NEWS ARTICLES (Top 5)
    ${articleContents.map((a, i) => `
    ARTICLE ${i + 1}: ${a.title}
    URL: ${a.url}
    CONTENT:
    ${a.content}
    `).join("\n---\n")}
    
    ---
    SOURCE 3: COMPANY OFFICIAL WEBSITE (Investor Relations)
    ${companyWebsiteContent || "[No company website content available]"}
    `;

    try {
        const result = await geminiPro.generateContent(extractionPrompt);
        const jsonString = result.response.text();

        // Clean markdown code blocks if present
        const cleanJson = jsonString.replace(/```json/g, '').replace(/```/g, '').trim();
        const extractedData = JSON.parse(cleanJson);

        // Add metadata
        extractedData.source_pdf_url = pdfUrl || null;
        extractedData.source_articles = articleContents.map(a => a.url);
        extractedData.extracted_at = new Date().toISOString();

        // 6. Save Data
        const outputPath = path.join(TEMP_DATA_DIR, `${safeName}.json`);
        fs.writeFileSync(outputPath, JSON.stringify(extractedData, null, 2));
        console.log(`✅ Data extracted and saved to: ${outputPath}`);
        console.log(JSON.stringify(extractedData, null, 2));

    } catch (err) {
        console.error(`❌ Extraction failed: ${err}`);
        process.exit(1);
    }
}

main();
