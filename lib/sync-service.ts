import { prisma } from './prisma';
import { analyzeTranscript } from './ai-analyst';
import fs from 'fs';
const pdf = require('pdf-parse');

export async function processTranscript(transcriptId: string) {
    console.log(`[SyncService] Starting processing for transcript: ${transcriptId}`);

    const transcript = await prisma.transcript.findUnique({
        where: { id: transcriptId },
        include: { company: true, quarter: true }
    });

    if (!transcript) {
        throw new Error(`Transcript ${transcriptId} not found`);
    }

    // OPTIMIZATION: If analysis exists, don't re-burn tokens.
    if (transcript.hasAnalysis) {
        console.log(`  -> [Skipped] Analysis already exists for ${transcript.company.name}.`);
        return { success: true, status: 'SKIPPED_EXISTING' };
    }

    // 1. Extract Text from PDF if necessary
    let textToAnalyze = transcript.rawText;
    if (!textToAnalyze && transcript.fileUrl) {
        console.log(`  -> Extracting text from PDF: ${transcript.fileUrl}`);
        try {
            let dataBuffer: Buffer;

            // Handle Remote URL vs Local File
            if (transcript.fileUrl.startsWith('http')) {
                const response = await fetch(transcript.fileUrl);
                if (!response.ok) throw new Error(`Fetch failed: ${response.statusText}`);
                const arrayBuffer = await response.arrayBuffer();
                dataBuffer = Buffer.from(arrayBuffer);
            } else {
                // Fallback for local files (Legacy dev mode)
                dataBuffer = fs.readFileSync(transcript.fileUrl);
            }

            const data = await pdf(dataBuffer);
            textToAnalyze = data.text;
        } catch (pdfErr: any) {
            console.error(`  -> PDF Extraction failed: ${pdfErr.message}`);
            return { success: false, error: 'PDF_EXTRACTION_FAILED' };
        }
    }

    if (!textToAnalyze) {
        console.warn(`  -> No text available for ${transcript.company.name}.`);
        return { success: false, error: 'NO_TEXT_AVAILABLE' };
    }

    // 2. Get Previous Quarter Data for Context
    const prevQuarter = await prisma.quarter.findFirst({
        where: {
            year: transcript.quarter.year,
            q: transcript.quarter.q === 'Q3' ? 'Q2' : (transcript.quarter.q === 'Q2' ? 'Q1' : 'Q4')
        }
    });

    let prevData = null;
    let prevTranscriptText: string | undefined = undefined;

    if (prevQuarter) {
        prevData = await prisma.analysis.findUnique({
            where: {
                companyId_quarterId: {
                    companyId: transcript.companyId,
                    quarterId: prevQuarter.id
                }
            }
        });

        const pt = await prisma.transcript.findFirst({
            where: {
                companyId: transcript.companyId,
                quarterId: prevQuarter.id
            },
            select: { rawText: true, fileUrl: true }
        });

        if (pt) {
            if (pt.rawText) {
                prevTranscriptText = pt.rawText;
            } else if (pt.fileUrl && fs.existsSync(pt.fileUrl)) {
                try {
                    const dataBuffer = fs.readFileSync(pt.fileUrl);
                    const data = await pdf(dataBuffer);
                    prevTranscriptText = data.text;
                } catch (e) {
                    console.warn("Failed to extract previous transcript text on the fly");
                }
            }
        }
    }

    // 3. Run AI Analysis
    console.log(`  -> Running Gemini analysis for ${transcript.company.name}...`);
    const aiResult = await analyzeTranscript(textToAnalyze, prevData, prevTranscriptText);

    // 4. Save Results
    const parseNum = (val: any) => {
        if (typeof val === 'number') return val;
        if (!val || typeof val !== 'string') return 0;
        const cleaned = val.replace(/[^0-9.-]/g, '');
        const parsed = parseFloat(cleaned);
        return isNaN(parsed) ? 0 : parsed;
    };

    await prisma.$transaction([
        prisma.financials.upsert({
            where: {
                companyId_quarterId: {
                    companyId: transcript.companyId,
                    quarterId: transcript.quarterId
                }
            },
            update: {
                revenue: parseNum(aiResult.financials.revenue.current_q),
                ebitda: parseNum(aiResult.financials.ebitda.current_q),
                pat: parseNum(aiResult.financials.pat.current_q),
                revenueYoY: parseNum(aiResult.financials.revenue.delta_yoy),

                // NEW FIELDS
                orderBook: parseNum(aiResult.financials.order_book),

                guidanceRevenue: parseNum(aiResult.forward_guidance_fy.revenue_target),
                guidanceEbitdaMargin: parseNum(aiResult.forward_guidance_fy.margin_target),
            } as any,
            create: {
                companyId: transcript.companyId,
                quarterId: transcript.quarterId,
                revenue: parseNum(aiResult.financials.revenue.current_q),
                ebitda: parseNum(aiResult.financials.ebitda.current_q),
                pat: parseNum(aiResult.financials.pat.current_q),
                revenueYoY: parseNum(aiResult.financials.revenue.delta_yoy),

                // NEW FIELDS
                orderBook: parseNum(aiResult.financials.order_book),

                guidanceRevenue: parseNum(aiResult.forward_guidance_fy.revenue_target),
                guidanceEbitdaMargin: parseNum(aiResult.forward_guidance_fy.margin_target),
            } as any
        }),
        prisma.analysis.upsert({
            where: {
                companyId_quarterId: {
                    companyId: transcript.companyId,
                    quarterId: transcript.quarterId
                }
            },
            update: {
                summary: (aiResult.summary?.highlights || []).join('\n'),
                managementTone: (aiResult.management_tone || "5").toString(),
                guidanceText: aiResult.guidance?.text || "No guidance",
                guidanceSentiment: (aiResult.guidance?.sentiment || "NEUTRAL").toUpperCase(),
                capexValue: parseFloat((aiResult.capex?.amount || "0").toString().replace(/[^0-9.]/g, '')) || 0,
                capexText: aiResult.capex?.details || "",
                keyHighlights: JSON.stringify(aiResult.summary?.highlights || []),
                deltaAnalysis: aiResult.delta_analysis,
                investorBrief: aiResult.investor_brief
            },
            create: {
                companyId: transcript.companyId,
                quarterId: transcript.quarterId,
                summary: (aiResult.summary?.highlights || []).join('\n'),
                managementTone: (aiResult.management_tone || "5").toString(),
                guidanceText: aiResult.guidance?.text || "No guidance",
                guidanceSentiment: (aiResult.guidance?.sentiment || "NEUTRAL").toUpperCase(),
                capexValue: parseFloat((aiResult.capex?.amount || "0").toString().replace(/[^0-9.]/g, '')) || 0,
                capexText: aiResult.capex?.details || "",
                keyHighlights: JSON.stringify(aiResult.summary?.highlights || []),
                deltaAnalysis: aiResult.delta_analysis,
                investorBrief: aiResult.investor_brief
            }
        }),
        prisma.transcript.update({
            where: { id: transcript.id },
            data: { hasAnalysis: true, rawText: textToAnalyze }
        })
    ]);

    console.log(`[SyncService] Completed processing for ${transcript.company.name}`);

    // 5. Trigger RAG Ingestion (Auto-Index)
    try {
        const { ingestTranscript } = await import('./rag-ingest');
        console.log(`[SyncService] Triggering RAG Ingestion for ${transcript.company.ticker}...`);
        await ingestTranscript(transcript.id);
    } catch (e: any) {
        console.error(`[SyncService] RAG Ingestion failed: ${e.message}`);
        // Non-blocking, return success for the main analysis
    }

    return { success: true };
}
