import { prisma } from '@/lib/prisma';
import { SectorData, EnrichedCompany } from '@/components/SectorList';
import type { CompanyFinancials, MetricData } from '@/components/FinancialMatrix';
import { AnalysisResult } from './ai-analyst';
import { PORTFOLIO_SECTOR } from './portfolio';
import { ANALYSIS_WINDOW, TRANSCRIPT_WINDOW, FINANCIALS_WINDOW } from './retention';
import { quarterScore, GENERAL_Q } from './quarters';

/**
 * Price to sales, divided at read time so the daily market-cap refresh moves it
 * without re-scraping the quarterly table. Rounded to one decimal because the
 * row shows a single figure and 5.51x-style precision is false comfort on a
 * ratio built from a scraped top line.
 */
function priceToSales(marketCap: any, ttmSales: any): number | undefined {
    if (!marketCap || !ttmSales) return undefined;
    const mc = Number(marketCap), sales = Number(ttmSales);
    if (!(sales > 0)) return undefined;
    return Math.round((mc / sales) * 10) / 10;
}

/**
 * Lightweight dashboard query used by the homepage.
 *
 * IMPORTANT: This intentionally does NOT fetch Transcripts (rawText is huge)
 * and does NOT fetch Analysis text blobs (summary, keyHighlights,
 * deltaAnalysis, investorBrief, capexText, guidanceText, managementTone).
 * Only the investibilityScore is pulled from Analysis so the homepage can
 * sort by AI rank. Financials are included (they're small decimals) so
 * SectorSnapshot aggregates keep working.
 *
 * Full per-company detail is loaded on-demand via getCompanyDetail(id).
 */
export async function getDashboardDataLight(): Promise<SectorData[]> {
    const companies = await prisma.company.findMany({
        where: { isVisible: true },
        select: {
            id: true,
            name: true,
            ticker: true,
            sector: true,
            isSme: true,
            colorTag: true,
            conviction: true,
            marketCap: true,
            currentPrice: true,
            bookValue: true,
            peRatio: true,
            pbRatio: true,
            ttmSales: true,
            dividendYield: true,
            roce: true,
            fiftyTwoWeekHigh: true,
            fiftyTwoWeekLow: true,
            targetPrice: true,
            financials: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 5, // buffer for QoQ calculation of the latest 2 quarters
                select: {
                    quarterId: true,
                    revenue: true,
                    ebitda: true,
                    pat: true,
                    revenueYoY: true,
                    ebitdaYoY: true,
                    patYoY: true,
                    guidanceRevenue: true,
                    guidanceEbitdaMargin: true,
                    guidancePat: true,
                    orderBook: true,
                    quarter: { select: { name: true, year: true, q: true } }
                }
            },
            inPortfolio: true,
            // Scores only (no text blobs). The two newest drive the score delta;
            // the rest are here so the collapsed row shows the same quarter tabs
            // the expanded row will.
            analyses: {
                // General slots are excluded here: this list drives the row's
                // headline score and its quarter-on-quarter delta, and a General
                // row sorts newest (its fiscal year is the current one), so an
                // investor meet's score would be shown as the company's latest
                // quarterly score. The General analysis is still readable — it is
                // included in getCompanyDetail's history below.
                where: { quarter: { q: { not: GENERAL_Q } } },
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: ANALYSIS_WINDOW,
                select: {
                    investibilityScore: true,
                    guidanceGrowthMin: true,
                    guidanceGrowthMax: true,
                    guidanceFy: true,
                    guidanceBasis: true,
                    guidanceQuote: true,
                    quarter: { select: { name: true } }
                }
            },
            // Minimal transcript info so the row can render PDF icons without
            // loading the heavy rawText/analysis blobs. Only fileUrl + quarter
            // name are pulled; ~2 KB per company at most.
            transcripts: {
                where: { quarter: { q: { not: GENERAL_Q } } },
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: TRANSCRIPT_WINDOW,
                select: {
                    fileUrl: true,
                    quarter: { select: { name: true } }
                }
            }
        }
    });

    const sectorMap = new Map<string, SectorData>();

    companies.forEach(co => {
        const sName = co.sector;
        if (!sectorMap.has(sName)) {
            sectorMap.set(sName, {
                sector: sName,
                stats: { companies: 0, avgGrowth: "+0%", sentiment: 0 },
                companies: []
            });
        }

        const latestF = co.financials[0];
        const latestPrevF = co.financials.length > 1 ? co.financials[1] : null;
        const latestA = co.analyses[0];
        const prevA = co.analyses.length > 1 ? co.analyses[1] : null;
        // Delta vs the immediately-previous quarter. Only computed when BOTH
        // quarters have a score; otherwise left undefined so the UI shows the
        // score with no delta (instead of a misleading "+88").
        const geminiScoreDelta =
            latestA?.investibilityScore != null && prevA?.investibilityScore != null
                ? latestA.investibilityScore - prevA.investibilityScore
                : undefined;

        // Minimal history: quarter + pdfUrl only, so the row can show its quarter
        // tabs and PDF icons. Driven by the analysis window (wider) with PDF links
        // attached from the transcript window (narrower), so quarters whose
        // transcript has rolled off still get a tab — just no PDF button. Full
        // analysis + financials per quarter are filled in by getCompanyDetail
        // when a user expands the row.
        const pdfByQuarter = new Map(co.transcripts.map(t => [t.quarter.name, t.fileUrl || null]));
        const lightQuarters = [
            ...co.analyses.map(a => a.quarter.name),
            // A just-downloaded quarter can have a transcript before its analysis.
            ...co.transcripts.map(t => t.quarter.name)
        ];
        const lightHistory = Array.from(new Set(lightQuarters))
            .sort((a, b) => quarterScore(b) - quarterScore(a))
            .map(q => ({ quarter: q, pdfUrl: pdfByQuarter.get(q) ?? null }));

        const companyObj: EnrichedCompany = {
            id: co.id,
            name: co.name,
            ticker: co.ticker,
            price: 0,
            priceChange: 0,
            // Compute financials locally — SectorSnapshot needs these aggregates.
            financials: createSafeFinancials(latestF, latestPrevF, co.financials),
            // analysis, profile, summary are intentionally omitted here — the
            // client fetches them on-demand via getCompanyDetail(id) when a
            // user expands a company row. `history` is included but only with
            // the bare {quarter, pdfUrl} needed to render the PDF icons.
            history: lightHistory.length > 0 ? lightHistory : undefined,
            marketCap: co.marketCap ? Number(co.marketCap) : undefined,
            currentPrice: co.currentPrice ? Number(co.currentPrice) : undefined,
            bookValue: co.bookValue ? Number(co.bookValue) : undefined,
            peRatio: co.peRatio ? Number(co.peRatio) : undefined,
            pbRatio: co.pbRatio ? Number(co.pbRatio) : undefined,
            psRatio: priceToSales(co.marketCap, co.ttmSales),
            dividendYield: co.dividendYield ? Number(co.dividendYield) : undefined,
            roce: co.roce ? Number(co.roce) : undefined,
            fiftyTwoWeekHigh: co.fiftyTwoWeekHigh ? Number(co.fiftyTwoWeekHigh) : undefined,
            fiftyTwoWeekLow: co.fiftyTwoWeekLow ? Number(co.fiftyTwoWeekLow) : undefined,
            targetPrice: co.targetPrice ? Number(co.targetPrice) : undefined,
            geminiScore: latestA?.investibilityScore ?? undefined,
            geminiScoreDelta,
            // Guidance is read from the newest quarter only. When a fresh
            // quarter lands with a weaker number the row follows it down on its
            // own — there is no separate staleness rule to keep in sync.
            guidance: latestA?.guidanceBasis
                ? {
                    min: latestA.guidanceGrowthMin !== null ? Number(latestA.guidanceGrowthMin) : null,
                    max: latestA.guidanceGrowthMax !== null ? Number(latestA.guidanceGrowthMax) : null,
                    fy: latestA.guidanceFy || undefined,
                    basis: latestA.guidanceBasis,
                    quote: latestA.guidanceQuote || undefined,
                    quarter: latestA.quarter.name
                }
                : undefined,
            isSme: co.isSme,
            inPortfolio: co.inPortfolio,
            colorTag: co.colorTag || undefined,
            conviction: co.conviction || undefined
        };

        sectorMap.get(sName)?.companies.push(companyObj);
        sectorMap.get(sName)!.stats.companies++;
    });

    const sectors = Array.from(sectorMap.values());
    sectors.forEach(sector => {
        sector.companies.sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));
    });
    sectors.sort((a, b) => a.sector.localeCompare(b.sector));

    // Held companies again, as the same objects rather than copies, in a
    // section of their own at the bottom.
    const held = sectors
        .flatMap(s => s.companies)
        .filter(c => c.inPortfolio)
        .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));
    if (held.length > 0) {
        sectors.push({
            sector: PORTFOLIO_SECTOR,
            stats: { companies: held.length, avgGrowth: "+0%", sentiment: 0 },
            companies: held
        });
    }

    return sectors;
}

/**
 * Full detail for a single company. Called on-demand when a user expands a
 * company row on the dashboard. Includes financials history, analyses
 * history (with text blobs) for the latest ANALYSIS_WINDOW quarters, and
 * transcript PDF links for the latest TRANSCRIPT_WINDOW quarters — so the
 * oldest tabs render analysis text with no PDF button once their transcript
 * has rolled off. Transcript rawText is NEVER selected — only fileUrl.
 */
export async function getCompanyDetail(id: string): Promise<EnrichedCompany | null> {
    const co = await prisma.company.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            ticker: true,
            sector: true,
            isSme: true,
            colorTag: true,
            businessProfile: true,
            notes: true,
            conviction: true,
            marketCap: true,
            currentPrice: true,
            bookValue: true,
            peRatio: true,
            pbRatio: true,
            ttmSales: true,
            dividendYield: true,
            roce: true,
            fiftyTwoWeekHigh: true,
            fiftyTwoWeekLow: true,
            targetPrice: true,
            financials: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: FINANCIALS_WINDOW,
                include: { quarter: true }
            },
            analyses: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: ANALYSIS_WINDOW,
                include: { quarter: true }
            },
            transcripts: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: TRANSCRIPT_WINDOW,
                // Skip rawText — only need the PDF link + quarter reference.
                select: {
                    quarterId: true,
                    fileUrl: true,
                    quarter: { select: { name: true } }
                }
            }
        }
    });

    if (!co) return null;

    const latestF = co.financials[0];
    const latestA = co.analyses[0];
    const prevA = co.analyses.length > 1 ? co.analyses[1] : null;
    const latestPrevF = co.financials.length > 1 ? co.financials[1] : null;

    const currentAnalysis = parseAnalysis(latestA);
    // Delta vs immediately-previous quarter; undefined unless both are scored.
    const geminiScoreDelta =
        latestA?.investibilityScore != null && prevA?.investibilityScore != null
            ? latestA.investibilityScore - prevA.investibilityScore
            : undefined;

    // Build History — tabs are driven by transcript/analysis presence only.
    // Financials retain a wider 5-quarter window for YoY math but must not
    // resurrect tabs for quarters whose transcript/analysis were pruned.
    const uniqueQuarterIds = new Set<string>();
    co.analyses.forEach(a => uniqueQuarterIds.add(a.quarterId));
    co.transcripts.forEach(t => uniqueQuarterIds.add(t.quarterId));

    const history = Array.from(uniqueQuarterIds).map(qId => {
        const matchingF = co.financials.find(f => f.quarterId === qId);
        const matchingA = co.analyses.find(a => a.quarterId === qId);
        const matchingT = co.transcripts.find(t => t.quarterId === qId);

        const idx = co.financials.findIndex(f => f.quarterId === qId);
        const prevF = idx >= 0 && idx + 1 < co.financials.length ? co.financials[idx + 1] : null;

        return {
            quarter: matchingF?.quarter.name || matchingA?.quarter.name || matchingT?.quarter.name || "Unknown",
            analysis: parseAnalysis(matchingA) as AnalysisResult,
            pdfUrl: matchingT?.fileUrl || null,
            financials: matchingF ? createSafeFinancials(matchingF, prevF, co.financials) : ({} as any)
        };
    }).sort((a, b) => {
        const partsA = a.quarter.split(' ');
        const partsB = b.quarter.split(' ');
        if (partsA.length < 2 || partsB.length < 2) return 0;
        const yA = parseInt(partsA[1]?.replace('FY', '') || '0');
        const yB = parseInt(partsB[1]?.replace('FY', '') || '0');
        if (yA !== yB) return yB - yA;
        return partsB[0].localeCompare(partsA[0]);
    });

    return {
        id: co.id,
        name: co.name,
        ticker: co.ticker,
        price: 0,
        priceChange: 0,
        financials: createSafeFinancials(latestF, latestPrevF, co.financials),
        analysis: currentAnalysis,
        profile: co.businessProfile || undefined,
        summary: {
            quarter: latestF?.quarter.name || "N/A",
            text: latestA?.investorBrief || latestA?.summary || co.businessProfile || "No analysis available."
        },
        history,
        marketCap: co.marketCap ? Number(co.marketCap) : undefined,
        currentPrice: co.currentPrice ? Number(co.currentPrice) : undefined,
        bookValue: co.bookValue ? Number(co.bookValue) : undefined,
        peRatio: co.peRatio ? Number(co.peRatio) : undefined,
        pbRatio: co.pbRatio ? Number(co.pbRatio) : undefined,
        psRatio: priceToSales(co.marketCap, co.ttmSales),
        dividendYield: co.dividendYield ? Number(co.dividendYield) : undefined,
        roce: co.roce ? Number(co.roce) : undefined,
        fiftyTwoWeekHigh: co.fiftyTwoWeekHigh ? Number(co.fiftyTwoWeekHigh) : undefined,
        fiftyTwoWeekLow: co.fiftyTwoWeekLow ? Number(co.fiftyTwoWeekLow) : undefined,
        geminiScore: currentAnalysis?.investibility_score,
        geminiScoreDelta,
        isSme: co.isSme,
        colorTag: co.colorTag || undefined,
        notes: co.notes || undefined,
        conviction: co.conviction || undefined
    };
}

// -----------------------------------------------------------------------------
// Shared helpers (used by both getDashboardDataLight and getCompanyDetail)
// -----------------------------------------------------------------------------

function parseAnalysis(a: any): AnalysisResult | undefined {
    if (!a) return undefined;
    try {
        return {
            financials: {
                revenue: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                ebitda: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                ebitda_margin: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                pat: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                order_book: null
            },
            forward_guidance_fy: {
                revenue_target: null,
                margin_target: null
            },
            guidance: {
                text: a.guidanceText || "Not disclosed",
                sentiment: (a.guidanceSentiment?.toLowerCase() as any) || 'neutral',
                delta: 'maintained'
            },
            capex: {
                amount: a.capexValue ? `₹${a.capexValue}cr` : "-",
                details: a.capexText || "",
                delta: 'maintained'
            },
            summary: {
                highlights: a.keyHighlights ? JSON.parse(a.keyHighlights) : [],
                lowlights: []
            },
            management_tone: parseInt(a.managementTone || "5"),
            delta_analysis: a.deltaAnalysis || undefined,
            investor_brief: a.investorBrief || undefined,
            investibility_score: a.investibilityScore || undefined
        };
    } catch (e) {
        console.error("Failed to parse analysis", e);
        return undefined;
    }
}

function createSafeFinancials(f: any, prevF: any, allF: any[]): CompanyFinancials {
    const val = (v: any) => (v !== null && v !== undefined) ? Number(v) : null;

    const currentYear = f?.quarter?.year;

    const ytdSum = (key: string) => {
        if (!currentYear) return null;
        const relevant = allF.filter(x => x.quarter.year === currentYear);
        if (relevant.length === 0) return null;
        return relevant.reduce((sum, x) => sum + Number(x[key] || 0), 0);
    };

    const revYTD = ytdSum('revenue');
    const ebitdaYTD = ytdSum('ebitda');
    const patYTD = ytdSum('pat');

    const calcQoQ = (curr: any, prev: any) => {
        const c = val(curr);
        const p = val(prev);
        if (c === null || p === null || p === 0) return null;
        return Number((((c - p) / p) * 100).toFixed(1));
    };

    const revenue: MetricData = {
        currentQ: val(f?.revenue),
        ytd: revYTD,
        deltaQoQ: calcQoQ(f?.revenue, prevF?.revenue),
        deltaYoY: val(f?.revenueYoY),
        deltaYTD: null
    };

    const ebitda: MetricData = {
        currentQ: val(f?.ebitda),
        ytd: ebitdaYTD,
        deltaQoQ: calcQoQ(f?.ebitda, prevF?.ebitda),
        deltaYoY: val(f?.ebitdaYoY),
        deltaYTD: null
    };

    const marginCalc = (num: any, den: any) => {
        const n = val(num);
        const d = val(den);
        if (!n || !d) return null;
        return Number(((n / d) * 100).toFixed(1));
    };

    const currMargin = marginCalc(f?.ebitda, f?.revenue);
    const prevMargin = marginCalc(prevF?.ebitda, prevF?.revenue);
    const ytdMargin = marginCalc(ebitdaYTD, revYTD);

    const ebitdaMargin: MetricData = {
        currentQ: currMargin,
        ytd: ytdMargin,
        deltaQoQ: (currMargin && prevMargin) ? Number((currMargin - prevMargin).toFixed(1)) : null,
        deltaYoY: null,
        deltaYTD: null
    };

    const pat: MetricData = {
        currentQ: val(f?.pat),
        ytd: patYTD,
        deltaQoQ: calcQoQ(f?.pat, prevF?.pat),
        deltaYoY: val(f?.patYoY),
        deltaYTD: null
    };

    return {
        revenue,
        ebitda,
        ebitdaMargin,
        pat,
        orderBook: val(f?.orderBook),
        guidance: {
            revenueTarget: val(f?.guidanceRevenue),
            marginTarget: val(f?.guidanceEbitdaMargin),
            pat: val(f?.guidancePat)
        }
    };
}

// -----------------------------------------------------------------------------
// Legacy: kept temporarily for backwards compatibility. Prefer getDashboardDataLight.
// -----------------------------------------------------------------------------

export async function getDashboardData(): Promise<SectorData[]> {
    const companies = await prisma.company.findMany({
        where: { isVisible: true },
        include: {
            financials: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 5, // Take 5 to ensure we have enough for QoQ of the 4th item if needed
                include: { quarter: true }
            },
            analyses: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 4,
                include: { quarter: true }
            },
            transcripts: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 4,
                include: { quarter: true }
            }
        }
    });

    const sectorMap = new Map<string, SectorData>();

    companies.forEach(co => {
        const sName = co.sector;
        if (!sectorMap.has(sName)) {
            sectorMap.set(sName, {
                sector: sName,
                stats: { companies: 0, avgGrowth: "+0%", sentiment: 0 },
                companies: []
            });
        }

        const latestF = co.financials[0];
        const latestA = co.analyses[0];
        const prevA = co.analyses.length > 1 ? co.analyses[1] : null;
        // Delta vs immediately-previous quarter; undefined unless both are scored.
        const geminiScoreDelta =
            latestA?.investibilityScore != null && prevA?.investibilityScore != null
                ? latestA.investibilityScore - prevA.investibilityScore
                : undefined;

        // 1. Helper to parse AI Analysis JSON
        const parseAnalysis = (a: any): AnalysisResult | undefined => {
            if (!a) return undefined;
            // The DB 'Analysis' table does not store the full Output 1 JSON.
            // It stores specific fields like `summary`, `guidanceText`.
            // So we reconstruct an AnalysisResult from what we have in the DB 
            // to fulfill the UI's need for "AnalysisResult" type.

            try {
                return {
                    // Placeholders for financials since they are handled via EnrichedCompany.financials
                    financials: {
                        revenue: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                        ebitda: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                        ebitda_margin: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                        pat: { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null },
                        order_book: null
                    },
                    forward_guidance_fy: {
                        revenue_target: null,
                        margin_target: null
                    },
                    guidance: {
                        text: a.guidanceText || "Not disclosed",
                        sentiment: (a.guidanceSentiment?.toLowerCase() as any) || 'neutral',
                        delta: 'maintained'
                    },
                    capex: {
                        amount: a.capexValue ? `₹${a.capexValue}cr` : "-",
                        details: a.capexText || "",
                        delta: 'maintained'
                    },
                    summary: {
                        highlights: a.keyHighlights ? JSON.parse(a.keyHighlights) : [],
                        lowlights: []
                    },
                    management_tone: parseInt(a.managementTone || "5"),
                    delta_analysis: a.deltaAnalysis || undefined,
                    investor_brief: a.investorBrief || undefined,
                    investibility_score: a.investibilityScore || undefined
                };
            } catch (e) {
                console.error("Failed to parse analysis", e);
                return undefined;
            }
        };

        const currentAnalysis = parseAnalysis(latestA);

        // 2. Build CompanyFinancials from DB (and calculate missing metrics locally)
        const createSafeFinancials = (f: any, prevF: any, allF: any[]): CompanyFinancials => {
            const val = (v: any) => (v !== null && v !== undefined) ? Number(v) : null;

            const currentYear = f?.quarter?.year;

            // Calculate YTD
            const ytdSum = (key: string) => {
                if (!currentYear) return null;
                // Filter all financials for the same year as 'f' and Q <= f.q
                // But simplified: Just sum all quarters of this year found in data
                // Correct logic: Sum quarters of THIS fiscal year up to current quarter.
                // Assuming `allF` is sorted descending.

                // For simplicity in this demo: sum all records with same year. 
                // (In reality, Indian FY is distinct from Calendar Year, need robust logic)
                const relevant = allF.filter(x => x.quarter.year === currentYear);
                if (relevant.length === 0) return null;
                return relevant.reduce((sum, x) => sum + Number(x[key] || 0), 0);
            };

            const revYTD = ytdSum('revenue');
            const ebitdaYTD = ytdSum('ebitda');
            const patYTD = ytdSum('pat');

            // Calculate QoQ
            const calcQoQ = (curr: any, prev: any) => {
                const c = val(curr);
                const p = val(prev);
                if (c === null || p === null || p === 0) return null;
                return Number((((c - p) / p) * 100).toFixed(1));
            };

            // Calculate YoY from DB if available, else try to find Q-4
            // f.revenueYoY is stored in DB by sync route

            const revenue: MetricData = {
                currentQ: val(f?.revenue),
                ytd: revYTD,
                deltaQoQ: calcQoQ(f?.revenue, prevF?.revenue),
                deltaYoY: val(f?.revenueYoY),
                deltaYTD: null
            };

            const ebitda: MetricData = {
                currentQ: val(f?.ebitda),
                ytd: ebitdaYTD,
                deltaQoQ: calcQoQ(f?.ebitda, prevF?.ebitda),
                deltaYoY: val(f?.ebitdaYoY),
                deltaYTD: null
            };

            // Margin (Calculated)
            const marginCalc = (num: any, den: any) => {
                const n = val(num);
                const d = val(den);
                if (!n || !d) return null;
                return Number(((n / d) * 100).toFixed(1));
            };

            const currMargin = marginCalc(f?.ebitda, f?.revenue);
            const prevMargin = marginCalc(prevF?.ebitda, prevF?.revenue);
            const ytdMargin = marginCalc(ebitdaYTD, revYTD);

            const ebitdaMargin: MetricData = {
                currentQ: currMargin,
                ytd: ytdMargin,
                deltaQoQ: (currMargin && prevMargin) ? Number((currMargin - prevMargin).toFixed(1)) : null, // Change in percentage points
                deltaYoY: null,
                deltaYTD: null
            };

            const pat: MetricData = {
                currentQ: val(f?.pat),
                ytd: patYTD,
                deltaQoQ: calcQoQ(f?.pat, prevF?.pat),
                deltaYoY: val(f?.patYoY),
                deltaYTD: null
            };

            return {
                revenue,
                ebitda,
                ebitdaMargin,
                pat,
                orderBook: val(f?.orderBook),
                guidance: {
                    revenueTarget: val(f?.guidanceRevenue),
                    marginTarget: val(f?.guidanceEbitdaMargin),
                    pat: val(f?.guidancePat)
                }
            };
        };

        // Build History
        const uniqueQuarterIds = new Set<string>();
        if (co.analyses) co.analyses.forEach(a => uniqueQuarterIds.add(a.quarterId));
        if (co.financials) co.financials.forEach(f => uniqueQuarterIds.add(f.quarterId));
        if (co.transcripts) co.transcripts.forEach(t => uniqueQuarterIds.add(t.quarterId));

        const history = Array.from(uniqueQuarterIds).map(qId => {
            const matchingF = co.financials.find(f => f.quarterId === qId);
            const matchingA = co.analyses.find(a => a.quarterId === qId);
            const matchingT = co.transcripts.find(t => t.quarterId === qId);

            // Find previous F relative to this F for QoQ
            const idx = co.financials.findIndex(f => f.quarterId === qId);
            const prevF = idx >= 0 && idx + 1 < co.financials.length ? co.financials[idx + 1] : null;

            return {
                quarter: matchingF?.quarter.name || matchingA?.quarter.name || matchingT?.quarter.name || "Unknown",
                analysis: parseAnalysis(matchingA) as AnalysisResult,
                pdfUrl: matchingT?.fileUrl || null,
                financials: matchingF ? createSafeFinancials(matchingF, prevF, co.financials) : ({} as any)
            };
        }).sort((a, b) => {
            // Basic sort
            const partsA = a.quarter.split(' ');
            const partsB = b.quarter.split(' ');
            if (partsA.length < 2 || partsB.length < 2) return 0;
            const yA = parseInt(partsA[1]?.replace('FY', '') || '0');
            const yB = parseInt(partsB[1]?.replace('FY', '') || '0');
            if (yA !== yB) return yB - yA;
            return partsB[0].localeCompare(partsA[0]);
        });

        const latestPrevF = co.financials.length > 1 ? co.financials[1] : null;

        const companyObj: EnrichedCompany = {
            id: co.id,
            name: co.name,
            ticker: co.ticker,
            price: 0,
            priceChange: 0,
            financials: createSafeFinancials(latestF, latestPrevF, co.financials),
            analysis: currentAnalysis,
            profile: co.businessProfile || undefined,
            summary: {
                quarter: latestF?.quarter.name || "N/A",
                text: latestA?.investorBrief || latestA?.summary || co.businessProfile || "No analysis available."
            },
            history: history,
            marketCap: co.marketCap ? Number(co.marketCap) : undefined,
            currentPrice: co.currentPrice ? Number(co.currentPrice) : undefined,
            bookValue: co.bookValue ? Number(co.bookValue) : undefined,
            peRatio: co.peRatio ? Number(co.peRatio) : undefined,
            pbRatio: co.pbRatio ? Number(co.pbRatio) : undefined,
            psRatio: priceToSales(co.marketCap, co.ttmSales),
            dividendYield: co.dividendYield ? Number(co.dividendYield) : undefined,
            roce: co.roce ? Number(co.roce) : undefined,
            fiftyTwoWeekHigh: co.fiftyTwoWeekHigh ? Number(co.fiftyTwoWeekHigh) : undefined,
            fiftyTwoWeekLow: co.fiftyTwoWeekLow ? Number(co.fiftyTwoWeekLow) : undefined,
            targetPrice: co.targetPrice ? Number(co.targetPrice) : undefined,
            geminiScore: currentAnalysis?.investibility_score,
            geminiScoreDelta,
            isSme: co.isSme,
            colorTag: co.colorTag || undefined
        };

        sectorMap.get(sName)?.companies.push(companyObj);
        sectorMap.get(sName)!.stats.companies++;
    });

    const sectors = Array.from(sectorMap.values());
    sectors.forEach(sector => {
        sector.companies.sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));
    });

    return sectors.sort((a, b) => a.sector.localeCompare(b.sector));
}

export async function getTranscriptStats() {
    const quarters = await prisma.quarter.findMany({
        // General slots are documents, not quarters — they must not appear as one
        // of the two "latest quarters" in the header stats.
        where: { q: { not: GENERAL_Q } },
        orderBy: [
            { year: 'desc' },
            { q: 'desc' },
        ],
        take: 2,
        include: {
            _count: {
                select: { transcripts: true }
            }
        }
    });

    return quarters.map(q => ({
        name: q.name,
        count: q._count.transcripts
    }));
}
