import { PrismaClient } from '@prisma/client';
import { searchWeb } from '../lib/web-search';
import { generatePenetratingProfile } from './generate-penetrating-profile';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// Initialize Prisma
const prisma = new PrismaClient();
const TEMP_DATA_DIR = path.join(process.cwd(), 'temp', 'investor-data');

// Ensure temp dir exists
if (!fs.existsSync(TEMP_DATA_DIR)) {
    fs.mkdirSync(TEMP_DATA_DIR, { recursive: true });
}

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processCompany(company: { id: string, name: string, ticker: string }) {
    console.log(`\n\n🎯 Processing: ${company.name} (${company.ticker})`);

    // 1. Check if Investor Data JSON exists
    const safeName = company.ticker.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const jsonPath = path.join(TEMP_DATA_DIR, `${safeName}.json`);

    if (!fs.existsSync(jsonPath)) {
        console.log(`🔍 Searching web for data...`);

        try {
            // A. Search for Investor Presentation
            const presQuery = `${company.name} investor presentation`;
            const presResults = await searchWeb(presQuery, 5);

            // B. Search for News
            const newsQuery = `${company.name} business news`; // Yahoo might not like "news" suffix alone?
            const newsResults = await searchWeb(newsQuery, 3);

            // C. Construct Data Object
            const investorData = {
                companyName: company.name,
                ticker: company.ticker,
                scrapedAt: new Date().toISOString(),
                investorPresentations: presResults.map(r => ({
                    title: r.title,
                    link: r.link,
                    snippet: r.snippet
                })),
                recentNews: newsResults.map(r => ({
                    title: r.title,
                    link: r.link,
                    snippet: r.snippet
                })),
                // Placeholders for future expansion
                strategic_focus: "Extracted from search results",
                segments: [],
                geography: []
            };

            // D. Save to JSON
            fs.writeFileSync(jsonPath, JSON.stringify(investorData, null, 2));
            console.log(`✅ Saved investor data to ${jsonPath}`);

            // Delay to be nice to Yahoo
            await delay(2000);

        } catch (error) {
            console.error(`❌ Search failed for ${company.name}: ${error}`);
            // Continue anyway, generate profile with just transcripts
        }
    } else {
        console.log(`⏭️ Investor data already exists. Skipping search.`);
    }

    // 2. Generate Profile
    try {
        await generatePenetratingProfile(company.ticker);
    } catch (error) {
        console.error(`❌ Profile generation failed for ${company.name}: ${error}`);
    }
}

async function main() {
    // Parse CLI arguments for batch control
    const args = process.argv.slice(2);
    const limitArg = args.find(a => a.startsWith('--limit='));
    const offsetArg = args.find(a => a.startsWith('--offset='));
    const filterArg = args.find(a => a.startsWith('--filter=')); // e.g., --filter=q3-analysis

    // Default to processing all if no limit specified, or user can set a limit (e.g., 200)
    // If user has 250 call limit, better to default to something safe or let them specify.
    // Let's default to NO limit (process all) but log instructions.

    const LIMIT = limitArg ? parseInt(limitArg.split('=')[1]) : Infinity;
    const OFFSET = offsetArg ? parseInt(offsetArg.split('=')[1]) : 0;
    const FILTER = filterArg ? filterArg.split('=')[1] : null;

    console.log(`🔧 Batch Settings: Limit=${LIMIT === Infinity ? 'ALL' : LIMIT}, Offset=${OFFSET}, Filter=${FILTER || 'None'}`);

    // Build Where Clause
    let whereClause: any = {
        transcripts: {
            some: {} // Must have at least one transcript
        }
    };

    if (FILTER === 'q3-analysis') {
        console.log("🔍 Filtering for companies with Q3 FY26 Analysis...");
        whereClause.analyses = {
            some: {
                quarter: {
                    name: "Q3 FY26"
                }
            }
        };
    } else if (FILTER === 'q3-missing-profile') {
        console.log("🔍 Filtering for companies with Q3 FY26 Analysis that have MISSING or STALE profiles...");
        whereClause.analyses = {
            some: {
                quarter: {
                    name: "Q3 FY26"
                }
            }
        };
        whereClause.OR = [
            { businessProfile: null },
            { businessProfile: "" },
            {
                NOT: {
                    businessProfile: {
                        contains: "Q3 FY26"
                    }
                }
            }
        ];
    }

    // 1. Fetch all companies that have transcripts AND match filter
    const companies = await prisma.company.findMany({
        where: whereClause,
        select: {
            id: true,
            name: true,
            ticker: true,
            businessProfile: true // To check if profile exists
        },
        orderBy: {
            name: 'asc'
        },
        // Apply pagination at DB level for efficiency
        skip: OFFSET,
        take: LIMIT === Infinity ? undefined : LIMIT
    });

    console.log(`📋 Found ${companies.length} companies to process (Total in DB with transcripts may be higher).`);

    // 2. Loop and Process
    let processedCount = 0;
    for (const company of companies) {
        await processCompany(company);
        processedCount++;
    }

    console.log(`\n✅ Completed batch of ${processedCount} companies.`);
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
