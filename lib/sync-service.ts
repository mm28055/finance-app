import { prisma } from './prisma';
import { analyzeTranscript } from './ai-analyst';
import fs from 'fs';
const pdf = require('pdf-parse');

// ── Screener.in quarterly fallback ──────────────────────────────────────────

async function resolveScreenerUrl(isin: string | null, ticker: string, name: string): Promise<string | null> {
    const trySearch = async (q: string) => {
        try {
            const res = await fetch(`https://www.screener.in/api/company/search/?q=${encodeURIComponent(q)}`, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            const data = await res.json();
            if (data?.[0]?.url) return `https://www.screener.in${data[0].url}`;
        } catch {}
        return null;
    };
    if (isin) { const u = await trySearch(isin); if (u) return u; }
    const u2 = await trySearch(ticker); if (u2) return u2;
    return trySearch(name);
}

function extractQuarterlyValue(html: string, label: string): number | null {
    const idx = html.indexOf(label);
    if (idx === -1) return null;
    const slice = html.substring(idx, idx + 400);
    const match = slice.match(/class="number">([\d,]+)/);
    return match ? parseFloat(match[1].replace(/,/g, '')) : null;
}

async function fetchScreenerQuarterly(isin: string | null, ticker: string, name: string) {
    const url = await resolveScreenerUrl(isin, ticker, name);
    if (!url) return null;
    try {
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!res.ok) return null;
        const html = await res.text();
        const qIdx = html.indexOf('id="quarters"');
        if (qIdx === -1) return null;
        const section = html.substring(qIdx, qIdx + 15000);
        return {
            revenue: extractQuarterlyValue(section, '>Sales'),
            ebitda:  extractQuarterlyValue(section, '>Operating Profit'),
            pat:     extractQuarterlyValue(section, '>Net Profit'),
        };
    } catch {
        return null;
    }
}

// ────────────────────────────────────────────────────────────────────────────

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

    // Some PDFs extract with embedded null bytes (0x00). Postgres rejects these
    // in any text column ("invalid byte sequence for encoding UTF8: 0x00"),
    // which would abort the save transaction. Strip them before use.
    textToAnalyze = textToAnalyze.replace(/\u0000/g, '');

    // Guard: skip placeholders / non-transcripts. Tijori sometimes lists a
    // 1-page exchange intimation ("transcript to follow") in the transcript
    // field before the real transcript is uploaded. Analyzing that yields a
    // meaningless score/financials, so bail out WITHOUT marking hasAnalysis —
    // a later sync can retry once the full transcript is available. Real
    // concall transcripts run ~30k-90k chars; placeholders are well under 2k.
    const MIN_TRANSCRIPT_CHARS = 5000;
    const contentChars = textToAnalyze.replace(/\s+/g, ' ').trim().length;
    if (contentChars < MIN_TRANSCRIPT_CHARS) {
        console.warn(`  -> [Skipped] Transcript too short for ${transcript.company.name} (${contentChars} chars < ${MIN_TRANSCRIPT_CHARS}). Likely a placeholder, not a real transcript.`);
        return { success: false, error: 'TRANSCRIPT_TOO_SHORT', chars: contentChars };
    }

    // 2. Get Previous Quarter Data for Context
    // Q4→Q3, Q3→Q2, Q2→Q1 (same year), Q1→Q4 (previous year)
    const getPrevQuarterInfo = (currentQ: string, currentYear: number) => {
        switch (currentQ) {
            case 'Q4': return { q: 'Q3', year: currentYear };
            case 'Q3': return { q: 'Q2', year: currentYear };
            case 'Q2': return { q: 'Q1', year: currentYear };
            case 'Q1': return { q: 'Q4', year: currentYear - 1 };
            default: return { q: 'Q3', year: currentYear };
        }
    };
    const prevQInfo = getPrevQuarterInfo(transcript.quarter.q, transcript.quarter.year);
    const prevQuarter = await prisma.quarter.findFirst({
        where: {
            year: prevQInfo.year,
            q: prevQInfo.q
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
    const parseNum = (val: any): number => {
        if (typeof val === 'number') return val;
        if (!val || typeof val !== 'string') return 0;
        const cleaned = val.replace(/[^0-9.-]/g, '');
        const parsed = parseFloat(cleaned);
        return isNaN(parsed) ? 0 : parsed;
    };

    const calcPct = (curr: number, prev: any): number | null => {
        const p = Number(prev);
        if (!curr || !p || p === 0) return null;
        return Math.round(((curr - p) / Math.abs(p)) * 1000) / 10;
    };

    // Extract Gemini values
    let revenue = parseNum(aiResult.financials.revenue.current_q);
    let ebitda  = parseNum(aiResult.financials.ebitda.current_q);
    let pat     = parseNum(aiResult.financials.pat.current_q);

    // --- Screener fallback: fill any zeros Gemini left behind ---
    if (!revenue || !ebitda || !pat) {
        try {
            console.log(`  -> Gemini missing values, trying Screener for ${transcript.company.name}...`);
            const s = await fetchScreenerQuarterly(
                transcript.company.isin ?? null,
                transcript.company.ticker,
                transcript.company.name
            );
            if (s) {
                if (!revenue && s.revenue) { revenue = s.revenue; console.log(`     Revenue from Screener: ${revenue}`); }
                if (!ebitda && s.ebitda)   { ebitda  = s.ebitda;  console.log(`     EBITDA from Screener: ${ebitda}`);  }
                if (!pat    && s.pat)      { pat     = s.pat;     console.log(`     PAT from Screener: ${pat}`);     }
            }
            await new Promise(r => setTimeout(r, 1000)); // polite delay
        } catch (e: any) {
            console.warn(`  -> Screener fallback failed: ${e.message}`);
        }
    }

    // --- YoY from DB (same quarter, previous fiscal year) ---
    let revenueYoY: number | null = parseNum(aiResult.financials.revenue.delta_yoy) || null;
    let ebitdaYoY:  number | null = null;
    let patYoY:     number | null = null;

    const yoyQuarter = await prisma.quarter.findFirst({
        where: { year: transcript.quarter.year - 1, q: transcript.quarter.q }
    });
    if (yoyQuarter) {
        const yoyF = await prisma.financials.findUnique({
            where: { companyId_quarterId: { companyId: transcript.companyId, quarterId: yoyQuarter.id } }
        });
        if (yoyF) {
            if (revenue) revenueYoY = calcPct(revenue, yoyF.revenue) ?? revenueYoY;
            if (ebitda)  ebitdaYoY  = calcPct(ebitda,  yoyF.ebitda);
            if (pat)     patYoY     = calcPct(pat,      yoyF.pat);
        }
    }

    const financialsData = {
        revenue,
        ebitda,
        pat,
        revenueYoY,
        ebitdaYoY,
        patYoY,
        orderBook:            parseNum(aiResult.financials.order_book),
        guidanceRevenue:      parseNum(aiResult.forward_guidance_fy.revenue_target),
        guidanceEbitdaMargin: parseNum(aiResult.forward_guidance_fy.margin_target),
    };

    await prisma.$transaction([
        prisma.financials.upsert({
            where: {
                companyId_quarterId: {
                    companyId: transcript.companyId,
                    quarterId: transcript.quarterId
                }
            },
            update: financialsData as any,
            create: {
                companyId: transcript.companyId,
                quarterId: transcript.quarterId,
                ...financialsData,
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
                summary: (aiResult.summary?.highlights || []).join('\n') || aiResult.investor_brief?.substring(0, 500) || "",
                managementTone: (aiResult.management_tone || "5").toString(),
                guidanceText: aiResult.guidance?.text || "No guidance",
                guidanceSentiment: (aiResult.guidance?.sentiment || "NEUTRAL").toUpperCase(),
                capexValue: parseFloat((aiResult.capex?.amount || "0").toString().replace(/[^0-9.]/g, '')) || 0,
                capexText: aiResult.capex?.details || "",
                keyHighlights: JSON.stringify(aiResult.summary?.highlights || []),
                deltaAnalysis: aiResult.delta_analysis,
                investorBrief: aiResult.investor_brief,
                investibilityScore: aiResult.investibility_score
            },
            create: {
                companyId: transcript.companyId,
                quarterId: transcript.quarterId,
                summary: (aiResult.summary?.highlights || []).join('\n') || aiResult.investor_brief?.substring(0, 500) || "",
                managementTone: (aiResult.management_tone || "5").toString(),
                guidanceText: aiResult.guidance?.text || "No guidance",
                guidanceSentiment: (aiResult.guidance?.sentiment || "NEUTRAL").toUpperCase(),
                capexValue: parseFloat((aiResult.capex?.amount || "0").toString().replace(/[^0-9.]/g, '')) || 0,
                capexText: aiResult.capex?.details || "",
                keyHighlights: JSON.stringify(aiResult.summary?.highlights || []),
                deltaAnalysis: aiResult.delta_analysis,
                investorBrief: aiResult.investor_brief,
                investibilityScore: aiResult.investibility_score
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
