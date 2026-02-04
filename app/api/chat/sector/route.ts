import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { geminiPro } from '@/lib/gemini';

export async function POST(req: NextRequest) {
    try {
        const { sector, message } = await req.json();

        if (!sector || !message) {
            return NextResponse.json({ error: "Sector and Message required" }, { status: 400 });
        }

        // Fetch companies in this sector with their analyses
        const companies = await prisma.company.findMany({
            where: { sector: sector, isVisible: true },
            include: {
                analyses: {
                    include: { quarter: true },
                    orderBy: { quarter: { year: 'desc' } },
                    take: 2 // Latest 2 quarters per company
                }
            }
        });

        // Flatten to get all analyses
        const analyses = companies.flatMap(co =>
            co.analyses.map(a => ({ ...a, company: co } as any))
        );

        if (analyses.length === 0) {
            return NextResponse.json({
                content: `No analyzed transcripts available for **${sector}** sector yet. Please sync concall data first.`
            });
        }

        // Build rich context from Investor Briefs
        const context = analyses.map(a => {
            const co = a.company;
            const q = a.quarter;

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
                    if (a.structuredData) {
                        structured = typeof a.structuredData === 'string'
                            ? JSON.parse(a.structuredData)
                            : a.structuredData;
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
        // Search for specific details in the raw transcripts
        let ragContext = "";
        try {
            const { searchSectorTranscripts } = await import('@/lib/rag');
            const ragResults = await searchSectorTranscripts(sector, message, 125); // Top 125 chunks (~32k tokens)

            if (ragResults.length > 0) {
                ragContext = `
\n\n=== RELEVANT TRANSCRIPT EXCERPTS (Deep Dive) ===
The following are exact quotes from the raw call transcripts found in our database:
${ragResults.map((r, i) => `
[Exerpt ${i + 1}] (Distance: ${r.distance.toFixed(4)})
"${r.content}"
`).join('\n')}
================================================
`;
            }
        } catch (e) {
            console.error("RAG Search Failed:", e);
            // Non-blocking: continue without RAG if it fails
        }
        // --- RAG INTEGRATION END ---

        const prompt = `
You are a Senior Equity Analyst covering the **${sector}** sector in India.
You have access to the following concall analysis summaries AND specific raw transcript excerpts:

${context}
${ragContext}

USER QUESTION: "${message}"

INSTRUCTIONS:
1. Answer with specific data from the context above.
2. Use **bold** for key numbers and company names.
3. If the answer is found in the "Relevant Transcript Excerpts", cite it explicitly (e.g., "According to the transcript...").
4. Compare companies where relevant.
5. Format with clear markdown (headers, bullets).
6. If data is missing, say so - don't make up numbers.
7. Keep response focused and concise (max 400 words).
`;

        const result = await geminiPro.generateContent(prompt);
        const text = result.response.text();

        return NextResponse.json({ content: text });

    } catch (e: any) {
        console.error("Sector Chat Error:", e);
        return NextResponse.json({ error: e.message || "Failed to generate response" }, { status: 500 });
    }
}
