import { prisma } from './prisma';
import { analyzeTranscript } from './ai-analyst';
import fs from 'fs';
const pdf = require('pdf-parse');

// ── Screener.in quarterly fallback ──────────────────────────────────────────

// Screener's search is fuzzy and its first hit is regularly a different
// company — "ANUP" returns Anupam Finserv, "STAR" returns Star Health — so a
// candidate has to prove it is the same company before its numbers are used.
// This fills in revenue/EBITDA/PAT the transcript didn't state, which makes an
// unverified match worse here than a missing one: a quarter would carry another
// company's results and read as real. Twin of the matcher in
// scripts/sync-finance.js; that script is plain JS run by node, so the two
// cannot share a module today — change both together.
const NAME_NOISE = /\b(Ltd|Limited|Engg|Engineering|Industry|Industries|Corp|Corporation|Inc|Co|Com|Pvt|The|India)\.?\b/gi;

function normaliseName(s: string): string {
    return (s || '')
        .replace(NAME_NOISE, ' ')
        .replace(/[^a-z0-9 ]/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

/** Dice coefficient over letter bigrams — tolerant of spelling drift
 *  ("Refrigrations" vs "Refrigerations"), still separates "Anup" from "Anupam". */
function nameSimilarity(a: string, b: string): number {
    const bigrams = (s: string) => {
        const out: string[] = [];
        for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
        return out;
    };
    const A = bigrams(a), B = bigrams(b);
    if (!A.length || !B.length) return a && a === b ? 1 : 0;
    const pool = [...B];
    let hits = 0;
    for (const g of A) {
        const i = pool.indexOf(g);
        if (i > -1) { hits++; pool.splice(i, 1); }
    }
    return (2 * hits) / (A.length + B.length);
}

/** Screener slugs an NSE company by its symbol, a BSE-only one by scrip code. */
function screenerSlug(url: string): string {
    const parts = (url || '').split('/').filter(p => p && p !== 'company' && p !== 'consolidated');
    return parts[parts.length - 1] || '';
}

const MIN_NAME_MATCH = 0.75;

// `get` lets a caller pace its Screener requests (the exchange transcript sync
// keeps them at least 3 s apart); it defaults to a plain fetch.
export async function resolveScreenerUrl(
    isin: string | null, ticker: string, name: string,
    get: (url: string, init?: RequestInit) => Promise<Response> = fetch
): Promise<string | null> {
    const searchScreener = async (q: string): Promise<{ name: string; url: string }[]> => {
        try {
            const res = await get(`https://www.screener.in/api/company/search/?q=${encodeURIComponent(q)}`, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            const data = await res.json();
            return Array.isArray(data) ? data.filter((r: any) => r?.url && r?.name) : [];
        } catch {
            return [];
        }
    };

    const pick = (results: { name: string; url: string }[]) => {
        const want = (ticker || '').trim().toLowerCase();
        if (want) {
            const exact = results.find(r => screenerSlug(r.url).toLowerCase() === want);
            if (exact) return exact;
        }
        const wantName = normaliseName(name);
        let best: { name: string; url: string } | null = null;
        let bestScore = 0;
        for (const r of results) {
            const score = nameSimilarity(wantName, normaliseName(r.name));
            if (score > bestScore) { best = r; bestScore = score; }
        }
        if (bestScore >= MIN_NAME_MATCH) return best;
        // Abbreviated or renamed stored names: every word of ours must start a
        // word of the candidate's (or vice versa), and only one may qualify.
        const tokens = (s: string) => normaliseName(s).split(' ').filter(t => t.length >= 2);
        const ours = tokens(name);
        if (!ours.length) return null;
        const fits = results.filter(r => {
            const theirs = tokens(r.name);
            return ours.every(t => theirs.some(u => u.startsWith(t) || t.startsWith(u)));
        });
        return fits.length === 1 ? fits[0] : null;
    };

    // Last resort: the first word alone (the word check then picks one candidate).
    for (const q of [isin, ticker, name, normaliseName(name), normaliseName(name).split(' ')[0]]) {
        if (!q) continue;
        const hit = pick(await searchScreener(q));
        if (hit) return `https://www.screener.in${hit.url}`;
    }
    return null;
}

// Screener's quarterly table is a plain HTML grid: row 0 is the column headers
// ("Mar 2023", "Jun 2023", ...), each later row is a metric ("Sales",
// "Operating Profit", "Net Profit"). We parse it properly rather than counting
// characters — the previous version searched for `>Sales` and `class="number">`
// inside a fixed 15,000-char window, all four of which stopped matching when
// Screener changed their markup, and it failed silently for months.

const stripTags = (s: string) =>
    s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

// "1,234" -> 1234, "-119" -> -119, "" / "-" / "12%" -> null for value cells.
function parseCell(text: string): number | null {
    const t = text.replace(/,/g, '').trim();
    if (!t || t === '-' || t.includes('%')) return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
}

/**
 * The Screener column label for a fiscal quarter. Indian FY runs Apr-Mar, and
 * Screener labels columns by the month the quarter ENDS:
 *   Q1 FY27 = Apr-Jun 2026 -> "Jun 2026"
 *   Q4 FY27 = Jan-Mar 2027 -> "Mar 2027"
 */
export function screenerColumnFor(quarterName: string): string | null {
    const m = quarterName.trim().match(/^Q([1-4])\s*FY(\d{2})$/i);
    if (!m) return null;
    const q = parseInt(m[1]);
    const fy = 2000 + parseInt(m[2]);
    const endMonth = ({ 1: 'Jun', 2: 'Sep', 3: 'Dec', 4: 'Mar' } as Record<number, string>)[q];
    if (!endMonth) return null;
    const endYear = q === 4 ? fy : fy - 1;
    return `${endMonth} ${endYear}`;
}

interface QuarterTable {
    columns: string[];
    rows: Map<string, (number | null)[]>;
}

export function parseQuartersTable(html: string): QuarterTable | null {
    const start = html.indexOf('id="quarters"');
    if (start === -1) return null;
    const end = html.indexOf('</section>', start);
    const section = html.substring(start, end === -1 ? start + 40000 : end);

    const trs: string[] = section.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || [];
    if (trs.length < 2) return null;

    const cellsOf = (tr: string): string[] =>
        (tr.match(/<t[hd][^>]*>[\s\S]*?<\/t[hd]>/g) || []).map(stripTags);

    // Header row: first cell is the (empty) metric-name corner.
    const header = cellsOf(trs[0]);
    const columns = header.slice(1);
    if (columns.length === 0) return null;

    const rows = new Map<string, (number | null)[]>();
    for (const tr of trs.slice(1)) {
        const cells = cellsOf(tr);
        if (cells.length < 2) continue;
        // Expandable rows render as "Sales +" — drop the toggle marker.
        const label = cells[0].replace(/\s*\+$/, '').trim();
        rows.set(label, cells.slice(1).map(parseCell));
    }
    return { columns, rows };
}

/**
 * Quarterly revenue / EBITDA / PAT for ONE specific quarter, or null.
 *
 * Returns null rather than guessing when the requested quarter has no column —
 * Screener often lags the concall by weeks, and silently importing the previous
 * quarter's numbers would be worse than leaving the gap visible.
 */
export async function fetchScreenerQuarterly(isin: string | null, ticker: string, name: string, quarterName: string) {
    const wanted = screenerColumnFor(quarterName);
    if (!wanted) return null;

    const url = await resolveScreenerUrl(isin, ticker, name);
    if (!url) return null;

    // Consolidated first; companies without subsidiaries (and some that file late)
    // show an empty consolidated table, so fall back to the standalone page.
    const standalone = url.replace(/consolidated\/?$/, '');
    const pages = url === standalone ? [url] : [url, standalone];

    for (const page of pages) {
        try {
            const res = await fetch(page, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            if (!res.ok) continue;
            const table = parseQuartersTable(await res.text());
            if (!table) continue;

            const col = table.columns.findIndex(c => c.toLowerCase() === wanted.toLowerCase());
            if (col === -1) {
                console.log(`     Screener has no "${wanted}" column yet on ${page} (latest: ${table.columns[table.columns.length - 1]})`);
                continue;
            }

            const pick = (...labels: string[]) => {
                for (const l of labels) {
                    const row = table.rows.get(l);
                    if (row && row[col] !== undefined && row[col] !== null) return row[col];
                }
                return null;
            };

            // Banks/NBFCs label the top line "Revenue" instead of "Sales".
            const revenue = pick('Sales', 'Revenue');
            if (revenue == null) continue;
            return {
                revenue,
                ebitda: pick('Operating Profit'),
                pat: pick('Net Profit'),
                column: wanted,
                consolidated: page !== standalone,
            };
        } catch {
            continue;
        }
    }
    return null;
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

    // --- Screener first: the filed results are the source of truth for revenue,
    // operating profit (EBITDA) and profit. The transcript figures are used only
    // when Screener has not yet posted the quarter. Note Screener's operating
    // profit excludes other income, so it can sit a little below the EBITDA
    // management quotes on the call.
    try {
        const s = await fetchScreenerQuarterly(
            transcript.company.isin ?? null,
            transcript.company.ticker,
            transcript.company.name,
            transcript.quarter.name
        );
        if (s) {
            // `!= null` not truthiness: a genuine 0, or a negative EBITDA, is data.
            if (s.revenue != null) revenue = s.revenue;
            if (s.ebitda != null) ebitda = s.ebitda;
            if (s.pat != null) pat = s.pat;
            console.log(`  -> Financials from Screener (${s.column}, ${s.consolidated ? 'consolidated' : 'standalone'}): rev ${revenue}, EBITDA ${ebitda}, PAT ${pat}`);
        } else {
            console.log(`  -> Screener has no ${transcript.quarter.name} figures yet; keeping the transcript's numbers`);
        }
        await new Promise(r => setTimeout(r, 1000)); // polite delay
    } catch (e: any) {
        console.warn(`  -> Screener lookup failed (${e.message}); keeping the transcript's numbers`);
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

    // 5. Read forward guidance out of the brief we just wrote.
    // Non-blocking for the same reason as RAG below: the analysis has already
    // been saved, and a guidance read that fails must not fail the sync. The
    // company simply shows no guidance until the next run picks it up.
    try {
        const { extractGuidanceForQuarter } = await import('./guidance-extract');
        await extractGuidanceForQuarter(transcript.companyId, transcript.quarterId);
    } catch (e: any) {
        console.error(`[SyncService] Guidance extraction failed: ${e.message}`);
    }

    // 6. Trigger RAG Ingestion (Auto-Index)
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
