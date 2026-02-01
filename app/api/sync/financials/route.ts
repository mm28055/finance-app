import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { geminiPro } from '@/lib/gemini';
import fs from 'fs';
const pdf = require('pdf-parse');

// ================== SCREENER SCRAPER ==================
async function scrapeScreenerQuarterly(ticker: string) {
    try {
        const searchRes = await fetch(`https://www.screener.in/api/company/search/?q=${encodeURIComponent(ticker)}`, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const searchData = await searchRes.json();
        if (!searchData?.[0]?.url) return null;

        const url = `https://www.screener.in${searchData[0].url}consolidated/`;
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const html = await res.text();

        // Extract quarterly results table
        const quarterlyMatch = html.match(/Quarterly Results[\s\S]*?<table[\s\S]*?<\/table>/i);
        if (!quarterlyMatch) return null;

        const tableHtml = quarterlyMatch[0];

        // Extract latest quarter values (first data column)
        const extractValue = (label: string) => {
            const regex = new RegExp(`${label}[\\s\\S]*?<td[^>]*>([^<]+)`, 'i');
            const match = tableHtml.match(regex);
            if (match) {
                const val = parseFloat(match[1].replace(/,/g, '').trim());
                return isNaN(val) ? null : val;
            }
            return null;
        };

        return {
            revenue: extractValue('Sales') || extractValue('Revenue'),
            opm: extractValue('OPM'),
            pat: extractValue('Net Profit') || extractValue('PAT'),
            source: 'screener'
        };
    } catch (e) {
        console.error(`Screener scrape failed for ${ticker}:`, e);
        return null;
    }
}

// ================== GEMINI EXTRACTION ==================
async function extractFinancialsFromTranscript(text: string) {
    const prompt = `
You are extracting EXACT FINANCIAL NUMBERS from an Indian earnings call transcript.
Extract ONLY these metrics for the CURRENT QUARTER being discussed:

1. Revenue (₹ Crores) - also called "Sales" or "Top Line"
2. EBITDA (₹ Crores) - also called "Operating Profit"
3. EBITDA Margin (%) - also called "OPM"
4. PAT (₹ Crores) - also called "Net Profit" or "Bottom Line"
5. Revenue YoY Growth (%) - compared to same quarter last year
6. EBITDA YoY Growth (%)
7. PAT YoY Growth (%)

Return ONLY valid JSON:
{
  "revenue": 225,
  "ebitda": 59,
  "ebitdaMargin": 26.2,
  "pat": 30,
  "revenueYoY": 42,
  "ebitdaYoY": 35,
  "patYoY": 28
}

If a metric is NOT mentioned, use null. Do NOT guess or calculate.

TRANSCRIPT:
${text.substring(0, 80000)}
`;

    try {
        const result = await geminiPro.generateContent(prompt);
        const response = await result.response;
        const jsonStr = response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error('Gemini extraction failed:', e);
        return null;
    }
}

// ================== MAIN SYNC ==================
export async function POST(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const sector = searchParams.get('sector') || 'Aerospace defence';

        console.log(`🚀 Starting Financials Sync for sector: ${sector}`);

        // Get companies in sector with ALL transcripts (we'll pick latest quarter)
        const companies = await prisma.company.findMany({
            where: { sector, isVisible: true },
            include: {
                transcripts: {
                    include: { quarter: true }
                }
            }
        });

        const results: any[] = [];

        for (const company of companies) {
            console.log(`\n📊 Processing: ${company.name}`);

            // Sort transcripts by fiscal quarter (latest first)
            // Q3 > Q2 > Q1, FY26 > FY25
            const sortedTranscripts = company.transcripts.sort((a, b) => {
                // First by year (descending)
                if (a.quarter.year !== b.quarter.year) {
                    return b.quarter.year - a.quarter.year;
                }
                // Then by Q number (Q3 > Q2 > Q1)
                const qNumA = parseInt(a.quarter.q.replace('Q', ''));
                const qNumB = parseInt(b.quarter.q.replace('Q', ''));
                return qNumB - qNumA;
            });

            const transcript = sortedTranscripts[0];

            if (!transcript) {
                console.log('  ⚠️ No transcript found');
                results.push({ company: company.name, status: 'no_transcript' });
                continue;
            }

            console.log(`  📅 Using quarter: ${transcript.quarter.name}`);

            // Step 1: Extract text from PDF if needed
            let text = transcript.rawText;
            if (!text && transcript.fileUrl) {
                try {
                    const buffer = fs.readFileSync(transcript.fileUrl);
                    const data = await pdf(buffer);
                    text = data.text;
                } catch (e) {
                    console.log('  ⚠️ PDF extraction failed');
                }
            }

            // Step 2: Gemini extraction
            let geminiData = null;
            if (text) {
                console.log('  🤖 Calling Gemini...');
                geminiData = await extractFinancialsFromTranscript(text);
                console.log('  Gemini Result:', geminiData);
            }

            // Step 3: Screener fallback for missing values
            let screenerData = null;
            const needsScreener = !geminiData ||
                geminiData.revenue === null ||
                geminiData.pat === null;

            if (needsScreener) {
                console.log('  📊 Falling back to Screener.in...');
                screenerData = await scrapeScreenerQuarterly(company.ticker);
                console.log('  Screener Result:', screenerData);
                await new Promise(r => setTimeout(r, 1500)); // Rate limit
            }

            // Step 4: Merge data (Gemini first, Screener fallback)
            const finalData = {
                revenue: geminiData?.revenue ?? screenerData?.revenue ?? null,
                ebitda: geminiData?.ebitda ?? null,
                pat: geminiData?.pat ?? screenerData?.pat ?? null,
                revenueYoY: geminiData?.revenueYoY ?? null,
                ebitdaYoY: geminiData?.ebitdaYoY ?? null,
                patYoY: geminiData?.patYoY ?? null
            };

            // Step 5: Save to database
            await prisma.financials.upsert({
                where: {
                    companyId_quarterId: {
                        companyId: company.id,
                        quarterId: transcript.quarterId
                    }
                },
                update: {
                    revenue: finalData.revenue,
                    ebitda: finalData.ebitda,
                    pat: finalData.pat,
                    revenueYoY: finalData.revenueYoY,
                    ebitdaYoY: finalData.ebitdaYoY,
                    patYoY: finalData.patYoY
                },
                create: {
                    companyId: company.id,
                    quarterId: transcript.quarterId,
                    revenue: finalData.revenue,
                    ebitda: finalData.ebitda,
                    pat: finalData.pat,
                    revenueYoY: finalData.revenueYoY,
                    ebitdaYoY: finalData.ebitdaYoY,
                    patYoY: finalData.patYoY
                }
            });

            results.push({
                company: company.name,
                quarter: transcript.quarter.name,
                data: finalData,
                source: geminiData ? 'gemini' : 'screener'
            });
        }

        return NextResponse.json({
            success: true,
            sector,
            count: results.length,
            results
        });

    } catch (error: any) {
        console.error('Financials sync failed:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
