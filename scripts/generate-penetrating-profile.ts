
import { PrismaClient } from '@prisma/client';
import { geminiPro } from '../lib/gemini';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

// Initialize Prisma
const prisma = new PrismaClient();
const TEMP_DATA_DIR = path.join(process.cwd(), 'temp', 'investor-data');

export async function generatePenetratingProfile(ticker: string) {
    console.log(`\n🚀 Generating Penetrating Profile for: ${ticker}`);

    // 1. Fetch Company & Transcripts
    // Resolve by EXACT ticker (unique) first, then fall back to an EXACT name
    // match. Do NOT use `name contains ticker` — a substring match mis-resolves
    // to the wrong company (e.g. "CCL" -> "OCCL", "Borosil" -> "Borosil
    // Renewables"), silently skipping the intended company.
    const transcriptInclude = {
        transcripts: {
            orderBy: { createdAt: 'desc' as const },
            take: 2,
            include: { quarter: true }
        }
    };
    let company = await prisma.company.findUnique({
        where: { ticker },
        include: transcriptInclude
    });
    if (!company) {
        company = await prisma.company.findFirst({
            where: { name: ticker },
            include: transcriptInclude
        });
    }

    if (!company) {
        console.error(`❌ Company '${ticker}' not found in database.`);
        return;
    }

    // 2. Load Extracted Investor Data (from Phase 1)
    const safeName = ticker.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const jsonPath = path.join(TEMP_DATA_DIR, `${safeName}.json`);

    let investorData: any = {};
    if (fs.existsSync(jsonPath)) {
        console.log(`📂 Loaded Investor Data from: ${jsonPath}`);
        investorData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    } else {
        console.warn(`⚠️ No Investor Data found at ${jsonPath}. Using transcripts only.`);
    }

    // 3. Prepare Context
    // A. Transcripts
    const transcriptContext = company.transcripts.map(t =>
        `--- TRANSCRIPT (${t.quarter.name} - ${t.quarter.year}) ---\n${t.rawText?.slice(0, 20000)}...`
    ).join("\n\n");

    // B. Investor Data (Features)
    const investorContext = JSON.stringify(investorData, null, 2);

    const latestTranscript = company.transcripts[0];
    const latestDate = latestTranscript ? `${latestTranscript.quarter.name} ${latestTranscript.quarter.year}` : "Unknown";
    const today = new Date().toLocaleDateString();

    // 4. The "Golden Standard" Prompt - Company Overview for Investment Committee
    const prompt = `
    Role: You are a Senior Equity Research Analyst at a top-tier hedge fund presenting a company overview to the Investment Committee.
    
    Task: Write a penetrating, board-ready "Company Profile" for **${company.name}**.
    
    CONTEXT:
    - TODAY'S DATE: ${today}
    - LATEST TRANSCRIPT: ${latestDate}
    
    CRITICAL INSTRUCTIONS:
    - Trust the chronology of the **Transcripts** (${latestDate}) over the Investor Presentation if they conflict.
    - If the Presentation data is from 2024 or earlier, treat it as **Historical Context**, not current strategy.
    - **SEAMLESSLY INTEGRATE transcript insights**: Do NOT use direct quotes. Weave management commentary naturally into the narrative.
    
    SOURCES:
    1. **Investor Data** (from PDF, News Articles, and Company Website):
       This JSON contains: segments, geography, capex_plans, guidance, recent_news (headlines and summaries from scraped articles), and strategic_focus.
    ${investorContext}
    
    2. **Conference Call Transcripts** (Tone, Strategy, Management Commentary):
    ${transcriptContext}
    
    STRUCTURE (Follow this exactly):
    
    ## Executive Summary
    A penetrating 100-150 word summary that answers: 
    - Why does this company exist?
    - What precise problem does it solve for its customers?
    - Is it a Category Leader, a Challenger, or a Commodity player? Be definitive.
    
    ## The Business Model
    
    ### Revenue Drivers
    - **What do they sell?** Be specific (e.g., "Complex injectable vials" not "pharmaceuticals").
    - **Who pays them?** (e.g., "US Hospital GPOs", "Indian Distributors", "Direct-to-Consumer via Amazon").
    - **How do they make money?** Is it long-term contracts, spot sales, subscription, or project-based?
    
    ### Segment & Geographic Mix
    - Include a table breaking down revenue by segment and geography.
    - Commentary on which segments are growing vs declining.

    ### Competitive Moat (or Lack Thereof)
    - **Is the moat Durable or Fleeting?**
    - **Evidence:** High switching costs? Network effects? Regulatory capture? Low-cost scale?
    - **The Bear Case:** Why might the moat crumble? (e.g., "Dependency on one client", "China dumping pricing").
    
    ## Growth Vectors
    - **Where is the next $100M coming from?** (e.g., "Expansion into CDMO", "New capex coming online in Q4").
    - **Management Execution:** Are they walking the talk? (Cite transcript tone vs. actions).
    
    ## Key Risks & Governance
    - **Forensic Red Flags:** High related party transactions? Auditor resignations? Frequent CFO changes?
    - **Business Risks:** Client concentration? Single-product dependency? Currency risk?
    - **What could derail the thesis?** (Regulatory, Raw Material prices, Geopolitics).

    ## Investment Thesis
    - **The Bull Case:** Why own this now? (Valuation gap, cyclical upturn, structural shift).
    - **The Bear Case:** Why stay away?
    
    OUTPUT FORMAT (Markdown):
    Return ONLY the Markdown content. Start with: # ${company.name}
    `;

    // 5. Generate with Gemini Pro
    console.log("🧠 Synthesizing Profile with Gemini Pro...");
    try {
        const result = await geminiPro.generateContent(prompt);
        const profileMarkdown = result.response.text();

        console.log(`✅ Generated Profile (${profileMarkdown.length} chars).`);

        // 6. Save to Database
        // We update the 'businessProfile' field. 
        // Note: The user's schema might call it 'businessProfile' or 'profile'. 
        // Based on previous edits, it is 'businessProfile'.

        await prisma.company.update({
            where: { id: company.id },
            data: { businessProfile: profileMarkdown }
        });

        console.log("💾 Saved to Database.");

    } catch (e: any) {
        console.error("❌ Synthesis Failed:", e);
    }
}

// CLI Execution Support
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const args = process.argv.slice(2);
    const tickerArg = args.find(a => a.startsWith('--ticker='));
    const companyName = tickerArg ? tickerArg.split('=')[1].replace(/"/g, '') : null;

    if (companyName) {
        generatePenetratingProfile(companyName)
            .then(() => prisma.$disconnect())
            .catch(async (e) => {
                console.error(e);
                await prisma.$disconnect();
                process.exit(1);
            });
    } else {
        console.error("Please provide a company name via --ticker=\"Name\"");
        process.exit(1);
    }
}
