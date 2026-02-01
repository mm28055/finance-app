const { PrismaClient } = require('@prisma/client');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY || process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

async function generateDelta(q3Text, q2Text) {
    const prompt = `
    You are a rigorous Institutional Equity Analyst. 
    Perform a FORENSIC DELTA ANALYSIS comparing the Q3 (Current) transcript vs Q2 (Previous).

    PREVIOUS TRANSCRIPT (Q2 Reference):
    ${q2Text.substring(0, 40000)}

    CURRENT TRANSCRIPT (Q3 Analyze This):
    ${q3Text.substring(0, 40000)}

    TASK:
    Identify **Material Changes, Contradictions, and Strategy Shifts**.
    
    OUTPUT FORMAT:
    Provide ONLY the MARKDOWN content for the "Delta Report" (do not output JSON).
    Use these sections:
    
    ## 🚩 Strategic Deviations
    - **Guidance Check**: Did they hit Q2 promises?
    - **Tone Shift**: E.g., Growth -> Efficiency.
    
    ## 📉 Execution Gaps
    - **Capex**: Delayed or accelerated?
    - **Margins**: Better or worse than signaled?
    
    ## ⚠️ value-Drivers & Risks
    - New risks emerging in Q3 not present in Q2.
    - New growth drivers.

    Isolate the signal from the noise. Be concise.
    `;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (e) {
        console.error("AI Error:", e.message);
        return null;
    }
}

async function main() {
    console.log("🚀 Starting Delta Analysis Backfill for Aerospace...");

    // 1. Get Q3 2026 Quarter IDs (Handle both naming conventions)
    const q3List = await prisma.quarter.findMany({ where: { name: { in: ['Q3 2026', 'Q3 FY26'] } } });
    const q2List = await prisma.quarter.findMany({ where: { name: { in: ['Q2 2026', 'Q2 FY26'] } } });

    const q3Ids = q3List.map(q => q.id);
    const q2Ids = q2List.map(q => q.id);

    if (q3Ids.length === 0 || q2Ids.length === 0) {
        console.error("❌ Quarters (Q2/Q3 2026 or FY26) not found in DB.");
        return;
    }

    // 2. Find Transcripts
    const companies = await prisma.company.findMany({
        where: { sector: 'Aerospace defence', status: 'ACTIVE' },
        include: {
            transcripts: {
                where: { quarterId: { in: [...q3Ids, ...q2Ids] } }
            }
        }
    });

    console.log(`Found ${companies.length} companies in Aerospace.`);

    for (const co of companies) {
        // Find ANY transcript matching Q3 IDs
        const tQ3 = co.transcripts.find(t => q3Ids.includes(t.quarterId));
        // Find ANY transcript matching Q2 IDs
        const tQ2 = co.transcripts.find(t => q2Ids.includes(t.quarterId));

        if (!tQ3) {
            console.log(`⏭️  ${co.ticker}: No Q3 transcript. (Has: ${co.transcripts.length} total. QIDs: ${co.transcripts.map(t => t.quarterId).join(', ')})`);
            continue;
        }

        console.log(`\n🔍 Analyzing ${co.ticker}...`);

        if (!tQ2) {
            console.log(`   🔸 Missing Q2 context. Cannot do full Delta.`);
            continue;
        }

        console.log(`   ⚡ Generating Delta Report (Q3 vs Q2)...`);
        const deltaReport = await generateDelta(tQ3.rawText, tQ2.rawText);

        if (deltaReport) {
            await prisma.analysis.upsert({
                where: { companyId_quarterId: { companyId: co.id, quarterId: tQ3.quarterId } },
                update: { deltaAnalysis: deltaReport },
                create: {
                    companyId: co.id,
                    quarterId: tQ3.quarterId,
                    deltaAnalysis: deltaReport,
                    managementTone: "5",
                    summary: "Delta Analysis Generated via Script",
                }
            });
            console.log(`   💾 Saved Delta Analysis.`);
        }
    }

    console.log("\n✅ Backfill Complete.");
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
