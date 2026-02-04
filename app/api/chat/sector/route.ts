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

        // Build compact context
        const context = analyses.map(a => {
            const co = a.company;
            const q = a.quarter;

            // PARSE STRUCTURED DATA (New Source of Truth)
            let structured: any = {};
            try {
                if (a.structuredData) {
                    structured = typeof a.structuredData === 'string'
                        ? JSON.parse(a.structuredData)
                        : a.structuredData;
                }
            } catch (e) { console.error("JSON Parse Error", e); }

            // Fallback to legacy columns if structured data is missing
            const guidance = structured?.guidance?.text
                || a.guidanceText
                || 'N/A';

            const sentiment = structured?.guidance?.sentiment
                || a.guidanceSentiment
                || 'N/A';

            const capex = structured?.capex?.amount
                ? `${structured.capex.amount} (${structured.capex.details || ''})`
                : (a.capexText || 'N/A');

            const tone = structured?.management_tone || a.managementTone || 'N/A';

            // Highlights
            let highlights: string[] = [];
            if (structured?.summary?.highlights) {
                highlights = structured.summary.highlights;
            } else {
                try {
                    if (a.keyHighlights) {
                        highlights = JSON.parse(a.keyHighlights);
                    }
                } catch (e) {
                    highlights = a.keyHighlights ? [a.keyHighlights] : [];
                }
            }

            // Financials (if available in structured data)
            const financials = structured?.financials ? `
  - Revenue: ${structured.financials.revenue || 'N/A'} (${structured.financials.revenue_growth_yoy || ''} YoY)
  - EBITDA: ${structured.financials.ebitda || 'N/A'} margin: ${structured.financials.ebitda_margin_percent || ''}%
  - PAT: ${structured.financials.pat || 'N/A'}` : '';

            return `
**${co.name} (${co.ticker}) - ${q.name}**
- Guidance: ${guidance} (${sentiment})
- Capex: ${capex}
- Tone: ${tone}${financials}
- Highlights: ${highlights.slice(0, 4).join('; ') || 'N/A'}
`;
        }).join('\n');

        const prompt = `
You are a Senior Equity Analyst covering the **${sector}** sector in India.
You have access to the following concall analysis summaries:

${context}

USER QUESTION: "${message}"

INSTRUCTIONS:
1. Answer with specific data from the context above.
2. Use **bold** for key numbers and company names.
3. Compare companies where relevant.
4. Format with clear markdown (headers, bullets).
5. If data is missing, say so - don't make up numbers.
6. Keep response focused and concise (max 400 words).
`;

        const result = await geminiPro.generateContent(prompt);
        const text = result.response.text();

        return NextResponse.json({ content: text });

    } catch (e: any) {
        console.error("Sector Chat Error:", e);
        return NextResponse.json({ error: e.message || "Failed to generate response" }, { status: 500 });
    }
}
