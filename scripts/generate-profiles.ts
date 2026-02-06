
import { PrismaClient } from '@prisma/client';
import { geminiPro, geminiFlash } from '../lib/gemini';
import { parseArgs } from 'node:util';
import 'dotenv/config';

const prisma = new PrismaClient();

// Configuration
const GOOGLE_SEARCH_KEY = process.env.GOOGLE_SEARCH_KEY;
const GOOGLE_CX = process.env.GOOGLE_CX;

async function searchWeb(query: string): Promise<string[]> {
    if (!GOOGLE_SEARCH_KEY || !GOOGLE_CX) {
        console.warn("⚠️  Target: Web Search (Skipped - Missing GOOGLE_SEARCH_KEY or GOOGLE_CX)");
        return [];
    }

    console.log(`Debug: SearchWeb called. KeyLen: ${GOOGLE_SEARCH_KEY.length}, CXLen: ${GOOGLE_CX.length}`);
    try {
        const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${GOOGLE_SEARCH_KEY.trim()}&cx=${GOOGLE_CX.trim()}`;
        // console.log("Debug: Fetching URL:", url); // Don't log full URL with key
        const res = await fetch(url);

        if (!res.ok) {
            const errText = await res.text();
            console.error(`Debug: Google Search API returned ${res.status}:`, errText);
            return [];
        }

        const data = await res.json();

        if (!data.items) {
            console.warn("Debug: No items in search response.");
            return [];
        }

        return data.items.map((item: any) => `Title: ${item.title}\nSnippet: ${item.snippet}\nLink: ${item.link}`).slice(0, 5);
    } catch (error) {
        console.error("Error fetching search results:", error);
        return [];
    }
}

async function generateCompanyProfile(ticker: string) {
    console.log(`\n🔍 Processing: ${ticker}`);

    // 1. Fetch Company
    const company = await prisma.company.findUnique({
        where: { ticker },
        include: {
            transcripts: {
                orderBy: { createdAt: 'desc' },
                take: 2,
                include: { quarter: true }
            }
        }
    });

    if (!company) {
        console.error(`Company ${ticker} not found.`);
        return;
    }

    // 2. Gather Context
    // A. Internal Transcripts
    let transcriptContext = "";
    if (company.transcripts.length > 0) {
        transcriptContext = company.transcripts.map(t =>
            `--- TRANSCRIPT (${t.quarter.name} - ${t.quarter.year}) ---\n${t.rawText?.slice(0, 15000)}...` // Truncate to avoid massive context
        ).join("\n\n");
    } else {
        console.warn("⚠️  No transcripts found for this company.");
    }

    // B. External Search
    const businessQuery = `${company.name} revenue by segment domestic export split ${new Date().getFullYear() - 1}`;
    const risksQuery = `${company.name} investment risks controversy regulatory issues ${new Date().getFullYear()}`;

    const searchResultsBusiness = await searchWeb(businessQuery);
    const searchResultsRisks = await searchWeb(risksQuery);

    const externalContext = `
  --- EXTERNAL SEARCH RESULTS (BUSINESS & SEGMENTS) ---
  ${searchResultsBusiness.join("\n\n")}

  --- EXTERNAL SEARCH RESULTS (RISKS) ---
  ${searchResultsRisks.join("\n\n")}
  `;

    // 3. Construct Super-Prompt
    const prompt = `
  Role: You are a Senior Buy-Side Analyst at a top-tier long-term value fund (like Sequoia or Berkshire).
  Task: Write a deep, high-conviction "Penetrating Investment Profile" (approx 600 words) for **${company.name}** (${company.ticker}).
  
  Input Data:
  ${transcriptContext ? transcriptContext : "No internal transcript data available."}
  ${externalContext}

  Instructions:
  1. **Business Machine (Roboust & Data-Driven)**: 
     - You MUST describe the business segments. If data is available in the context, provide a **Rich Markdown Table** showing Revenue/EBITDA mix.
     - Provide the **Domestic vs. Export** split if available.
     - Highlight any **structural shifts** in the business mix over the last 1-2 years.
  2. **Invisible Pulse**: 
     - Do NOT create a separate section for "Recent Updates" or "Quarterly Results". 
     - Instead, *weave* the insights from the provided transcripts (Headwinds/Tailwinds, management tone, guidance) into the "Business Machine" and "Moat" sections naturally. 
     - Example: "While the company traditionally relies on X, recent pricing pressure tagged in Q3 has forced a pivot to Y..."
  3. **Penetrating Analysis**:
     - Focus on **Unit Economics** (margins, pricing power).
     - **Capital Allocation**: How do they spend the cash?
     - **Bear Case**: Be brutal. What kills this thesis?

  Output Format (Strict Markdown):
  
  # ${company.name} (${company.ticker})
  
  **The Thesis**
  [A sharp, 50-word summary. Why this company?]

  ## The Business Machine
  [Deep dive into how they make money. Segments. Geography. Include tables if data exists.]
  
  *   **Segment Analysis**: [Details]
  *   **Geographic Footprint**: [Details including Export %]

  ## Competitive Edge (Moat)
  *   **[Moat Factor 1]**: [Explanation]
  *   **[Moat Factor 2]**: [Explanation]

  ## Capital Allocation & Management
  [ROCE focus? key capex projects? buybacks?]

  ## The Bear Case (Risks)
  > [!WARNING]
  > [The single biggest structural threat]
  
  *   [Risk 1]
  *   [Risk 2]
  `;

    // 4. Call Gemini
    try {
        console.log("Environment Keys Check:", {
            AI_KEY_PRESENT: !!process.env.GOOGLE_AI_KEY,
            SEARCH_KEY_PRESENT: !!process.env.GOOGLE_SEARCH_KEY
        });

        console.log("Invoking Gemini 2.0 Flash...");
        const result = await geminiFlash.generateContent(prompt);
        console.log("Gemini Response received.");

        const text = result.response.text();
        console.log("✅ Generated Profile. Length:", text.length);

        // 5. Save to DB
        await prisma.company.update({
            where: { id: company.id },
            data: { businessProfile: text }
        });
        console.log("💾 Saved to Database.");

    } catch (e: any) {
        console.error("❌ Gemini Error Details:", JSON.stringify(e, null, 2));
        if (e.message) console.error("Error Message:", e.message);
    }
}

async function main() {
    const { values } = parseArgs({
        args: process.argv.slice(2),
        options: {
            ticker: { type: 'string' },
            sector: { type: 'string' },
        },
    });

    if (values.ticker) {
        await generateCompanyProfile(values.ticker);
    } else if (values.sector) {
        const companies = await prisma.company.findMany({
            where: { sector: values.sector },
            select: { ticker: true }
        });
        console.log(`Found ${companies.length} companies in ${values.sector}. Starting batch job...`);
        for (const c of companies) {
            await generateCompanyProfile(c.ticker);
        }
    } else {
        console.log("Please provide --ticker or --sector");
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
