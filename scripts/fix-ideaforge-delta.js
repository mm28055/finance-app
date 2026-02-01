require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY || process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

async function main() {
    console.log("🔧 Fixing IdeaForge Q3 Analysis...");

    // 1. Get Q3 Transcript
    const transcript = await prisma.transcript.findFirst({
        where: {
            company: { ticker: 'IDEAFORGE' },
            quarter: { name: 'Q3 FY26' }
        },
        include: { company: true, quarter: true }
    });

    if (!transcript) {
        console.error("❌ Transcript not found.");
        return;
    }

    // 2. Get Q2 Transcript (Context)
    const prevTranscript = await prisma.transcript.findFirst({
        where: {
            company: { ticker: 'IDEAFORGE' },
            quarter: { name: 'Q2 FY26' }
        }
    });

    if (!prevTranscript) {
        console.error("❌ Prevous Transcript (Q2) not found.");
        return;
    }

    console.log(`Found Transcripts. Q3 Len: ${transcript.rawText.length}, Q2 Len: ${prevTranscript.rawText.length}`);

    // 3. Generate FULL Analysis (Financials + Delta)
    const prompt = `
    You are a rigorous Institutional Equity Analyst. Analyze the following IdeaForge Transcript (Q3).
    
    PREVIOUS Q2 CONTEXT (Reference for Delta):
    ${prevTranscript.rawText.substring(0, 30000)}

    CURRENT Q3 TRANSCRIPT (Analyze This):
    ${transcript.rawText.substring(0, 50000)}

    EXTRACT in JSON format:
    1. Financials (Revenue, EBITDA, PAT)
    2. Guidance (Text, Sentiment)
    3. Capex (Amount, Details)
    4. Management Tone (1-10)
    5. DELTA ANALYSIS (Markdown): Compare Q3 vs Q2. Focus on strategy shifts, new risks, and execution gaps.

    OUTPUT JSON STRUCTURE:
    {
        "financials": { "revenue": 0, "ebitda": 0, "pat": 0, "revenue_growth_yoy": "0%", "ebitda_margin_percent": 0 },
        "guidance": { "text": "...", "sentiment": "NEUTRAL" },
        "capex": { "amount": "0", "details": "..." },
        "management_tone": 5,
        "summary": { "highlights": ["..."] },
        "delta_analysis": "## Delta Report\\n..."
    }
    `;

    console.log("🤖 Generating Full AI Analysis...");
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // Clean JSON
    const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
    let data;
    try {
        data = JSON.parse(jsonStr);
    } catch (e) {
        console.error("JSON Parse Failed:", text.substring(0, 200));
        return;
    }

    console.log(`✅ Generated. Delta Len: ${data.delta_analysis?.length}`);

    // 4. Save Analysis
    await prisma.analysis.upsert({
        where: { companyId_quarterId: { companyId: transcript.companyId, quarterId: transcript.quarterId } },
        update: {
            deltaAnalysis: data.delta_analysis,
            summary: (data.summary?.highlights || []).join('\n'),
            managementTone: (data.management_tone || 5).toString(),
            guidanceText: data.guidance?.text || "No guidance",
            guidanceSentiment: (data.guidance?.sentiment || "NEUTRAL").toUpperCase(),
            capexText: data.capex?.details || "",
            capexValue: parseFloat((data.capex?.amount || "0").replace(/[^0-9.]/g, '')) || 0,
            keyHighlights: JSON.stringify(data.summary?.highlights || [])
        },
        create: {
            companyId: transcript.companyId,
            quarterId: transcript.quarterId,
            deltaAnalysis: data.delta_analysis,
            summary: (data.summary?.highlights || []).join('\n'),
            managementTone: (data.management_tone || 5).toString(),
            guidanceText: data.guidance?.text || "No guidance",
            guidanceSentiment: (data.guidance?.sentiment || "NEUTRAL").toUpperCase(),
            capexText: data.capex?.details || "",
            capexValue: parseFloat((data.capex?.amount || "0").replace(/[^0-9.]/g, '')) || 0,
            keyHighlights: JSON.stringify(data.summary?.highlights || [])
        }
    });

    console.log("💾 Saved Analysis.");

    // 5. Save Financials
    await prisma.financials.upsert({
        where: { companyId_quarterId: { companyId: transcript.companyId, quarterId: transcript.quarterId } },
        update: {
            revenue: data.financials?.revenue || 0,
            ebitda: data.financials?.ebitda || 0,
            pat: data.financials?.pat || 0,
            revenueYoY: parseFloat((data.financials?.revenue_growth_yoy || "0").replace(/[^0-9.-]/g, '')) || 0
        },
        create: {
            companyId: transcript.companyId,
            quarterId: transcript.quarterId,
            revenue: data.financials?.revenue || 0,
            ebitda: data.financials?.ebitda || 0,
            pat: data.financials?.pat || 0,
            revenueYoY: parseFloat((data.financials?.revenue_growth_yoy || "0").replace(/[^0-9.-]/g, '')) || 0
        }
    });

    console.log("💾 Saved to DB successfully.");
}

main().finally(() => prisma.$disconnect());
