import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { geminiPro } from '@/lib/gemini';
import { sectorCompanyWhere } from '@/lib/portfolio';

export async function POST(req: NextRequest) {
    try {
        const { sector, message } = await req.json();

        if (!sector || !message) {
            return NextResponse.json({ error: "Sector and Message required" }, { status: 400 });
        }

        // Fetch companies in this sector with their analyses
        const companies = await prisma.company.findMany({
            where: sectorCompanyWhere(sector),
            include: {
                analyses: {
                    include: { quarter: true },
                    orderBy: { quarter: { year: 'desc' } },
                    take: 2 // Latest 2 quarters per company
                }
            }
        });

        // Detect if user is asking for a specific quarter to slice context
        const requestedQuarter = message.match(/Q[1-4]/i)?.[0]?.toUpperCase();
        console.log(`[SectorChat] Query mentions ${requestedQuarter || 'no specific quarter'}. Slicing context...`);

        // Slicing Logic: If Q3 is requested, only keep Q3 for companies that have it. 
        // If a company doesn't have Q3, keep their latest available (likely Q2).
        const slicedAnalyses = companies.flatMap(co => {
            if (!requestedQuarter) return co.analyses.map(a => ({ ...a, company: co }));

            const targetAnalyses = co.analyses.filter(a => a.quarter.name.includes(requestedQuarter));
            if (targetAnalyses.length > 0) {
                // If we found the requested quarter, ONLY use those (strip the "Prev Q" noise)
                return targetAnalyses.map(a => ({ ...a, company: co }));
            }
            // Fallback: If company doesn't have the requested Q, give the latest 1 available
            return co.analyses.slice(0, 1).map(a => ({ ...a, company: co }));
        });

        if (slicedAnalyses.length === 0) {
            return NextResponse.json({
                content: `No analyzed transcripts available for **${sector}** sector yet. Please sync concall data first.`
            });
        }

        // Build rich context from sliced Investor Briefs
        const context = slicedAnalyses.map(a => {
            const co = (a as any).company;
            const q = (a as any).quarter;

            // Use Investor Brief if available (Rich Context), otherwise fallback to Structured Data
            let content = '';

            if (a.investorBrief) {
                // Limit brief length if needed, but 600 words is usually fine.
                // We add a header to distinguish the source.
                content = `**INVESTOR BRIEF (${q.name})**\n${a.investorBrief}`;
            } else {
                // Fallback to Structured Data extraction if Brief is missing
                let structured: any = {};
                try {
                    const analysisWithData = a as any;
                    if (analysisWithData.structuredData) {
                        structured = typeof analysisWithData.structuredData === 'string'
                            ? JSON.parse(analysisWithData.structuredData)
                            : analysisWithData.structuredData;
                    }
                } catch (e) { console.error("JSON Parse Error", e); }

                const guidance = structured?.guidance?.text || a.guidanceText || 'N/A';
                const highlights = structured?.summary?.highlights
                    ? structured.summary.highlights.join('; ')
                    : (a.keyHighlights || 'N/A');

                content = `**SUMMARY (${q.name})**\n- Guidance: ${guidance}\n- Highlights: ${highlights}`;
            }

            return `
=== ${co.name} (${co.ticker}) [${q.name}] ===
${content}
------------------------------------------------
`;
        }).join('\n');

        // --- RAG INTEGRATION START ---
        let ragContext = "";
        let chunkCoverage: Record<string, number> = {};
        let totalChunksFound = 0;

        try {
            const { searchSectorTranscriptsBalanced } = await import('@/lib/rag');
            const ragResults = await searchSectorTranscriptsBalanced(sector, message, 125, requestedQuarter); // Pass quarter for strict filtering
            totalChunksFound = ragResults.length;

            if (ragResults.length > 0) {
                // Track coverage by company
                ragResults.forEach(r => {
                    const coName = companies.find(c => c.id === r.companyId)?.name || 'Unknown';
                    chunkCoverage[coName] = (chunkCoverage[coName] || 0) + 1;
                });

                ragContext = `
\n\n=== RELEVANT TRANSCRIPT EXCERPTS (Deep Dive) ===
The following are exact quotes from the raw call transcripts found in our database:
${ragResults.map((r, i) => `
[Exerpt ${i + 1}] (Company: ${companies.find(c => c.id === r.companyId)?.name || 'N/A'}, Dist: ${r.distance.toFixed(4)})
"${r.content}"
`).join('\n')}
================================================
`;
            }
        } catch (e) {
            console.error("RAG Search Failed:", e);
        }
        // --- RAG INTEGRATION END ---

        const prompt = `
You are a **Senior Equity Research Analyst** at a top-tier institutional investment firm, covering the **${sector}** sector in India.
Your audience is a **medium-to-long-term investor** (1-3 year holding period). Answer from an **investor's perspective**, focusing on:
- **Investment Thesis Validation**: Is this quarter supportive or breaking of the investment thesis?
- **Key Risk/Reward Changes**: Has the risk/reward shifted?

You have access to the following concall analysis summaries AND specific raw transcript excerpts:

${context}
${ragContext}

**DATA COVERAGE NOTE:**
The RAG system retrieved **${totalChunksFound}** chunks.
Distribution across companies: ${JSON.stringify(chunkCoverage)}

USER QUESTION: "${message}"

INSTRUCTIONS:
1. Answer with specific data from the context above.
2. Use **bold** for key numbers and company names.
3. If the answer is found in the "Relevant Transcript Excerpts", cite it explicitly (e.g., "According to the transcript...").
4. **IMPORTANT**: If a company mentions "${requestedQuarter || 'the latest quarter'}", prioritize that. 
5. If many companies are missing from the snippets, acknowledge that the search only retrieved the most relevant data for the companies listed.
6. Format with clear markdown (headers, bullets).
7. If data is missing for a company, say "Data not found in the latest snippets for [Company Name]".
8. **Always conclude with an "Investor Takeaway"** summarizing the key action points.
`;

        const result = await geminiPro.generateContent(prompt);
        const text = result.response.text();

        return NextResponse.json({ content: text });

    } catch (e: any) {
        console.error("Sector Chat Error:", e);
        return NextResponse.json({ error: e.message || "Failed to generate response" }, { status: 500 });
    }
}
