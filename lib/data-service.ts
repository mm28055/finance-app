import { prisma } from '@/lib/prisma';
import { getCompanyFilings, getCompanyFilingHeadlines } from './filings/server';
import { checkpointsFor } from './checkpoints';
import { projectsFor } from './projects';
import { SectorData, EnrichedCompany } from '@/components/SectorList';
import type { CompanyFinancials, MetricData } from '@/components/FinancialMatrix';
import { AnalysisResult } from './ai-analyst';
import { PORTFOLIO_SECTOR } from './portfolio';
import { ANALYSIS_WINDOW, TRANSCRIPT_WINDOW, FINANCIALS_WINDOW, GENERAL_ANALYSIS_WINDOW } from './retention';
import { quarterScore, GENERAL_Q } from './quarters';
import { generalDocLabel, generalDocSource, generalSlotDate } from './doc-label';
import { quarterEndDate } from './doc-type';
import { holdingNotes, holdingWarnings, toHoldingRow, type HoldingRow } from './shareholding';

type RawHolding = {
    companyId: string; period: string; periodEnd: Date; promoter: unknown; fii: unknown; dii: unknown;
    government: unknown; public: unknown; shareholders: number | null; pledged: unknown;
};

/**
 * Shareholding rows by company, oldest first, in one query. Raw SQL so the
 * dashboard does not depend on a regenerated Prisma client. `since` limits the
 * light load to the periods the warnings look at (about five quarters).
 */
async function holdingRowsBy(companyIds: string[] | null, since: Date | null): Promise<Map<string, HoldingRow[]>> {
    const out = new Map<string, HoldingRow[]>();
    let rows: RawHolding[] = [];
    try {
        rows = companyIds
            ? await prisma.$queryRaw<RawHolding[]>`
                SELECT "companyId", "period", "periodEnd", "promoter", "fii", "dii", "government", "public", "shareholders", "pledged"
                FROM "ShareholdingQuarter" WHERE "companyId" = ANY(${companyIds}) ORDER BY "periodEnd"`
            : await prisma.$queryRaw<RawHolding[]>`
                SELECT "companyId", "period", "periodEnd", "promoter", "fii", "dii", "government", "public", "shareholders", "pledged"
                FROM "ShareholdingQuarter" WHERE "periodEnd" >= ${since ?? new Date(0)} ORDER BY "periodEnd"`;
    } catch (e) {
        // Table missing (migration not applied) or unreachable: the dashboard still loads.
        console.error('Shareholding rows unavailable', e);
        return out;
    }
    for (const r of rows) {
        const list = out.get(r.companyId) || [];
        list.push(toHoldingRow(r));
        out.set(r.companyId, list);
    }
    return out;
}

type GuidanceRow = {
    guidanceGrowthMin: any;
    guidanceGrowthMax: any;
    guidanceFy: string | null;
    guidanceBasis: string | null;
    guidanceQuote: string | null;
};

const guidanceOf = (a: GuidanceRow, quarter: string, source?: string) => ({
    min: a.guidanceGrowthMin !== null ? Number(a.guidanceGrowthMin) : null,
    max: a.guidanceGrowthMax !== null ? Number(a.guidanceGrowthMax) : null,
    fy: a.guidanceFy || undefined,
    basis: a.guidanceBasis!,
    quote: a.guidanceQuote || undefined,
    quarter,
    source,
});

/**
 * Newer guidance from an AGM or special call. The row's guidance normally comes
 * from the newest quarter's results call; when management later puts a revenue
 * growth number on the record at an AGM or special call, that number is the
 * current one. Only a STATED figure overrides — a vague comment never does.
 * "Newer" means held after that quarter's call (its transcript's event date,
 * or its download date; failing both, 60 days after the quarter closed).
 */
function newerStatedGuidance(
    latestQuarter: string | undefined,
    latestCall: Date | null,
    generals: (GuidanceRow & { quarter: { name: string }; investorBrief: string | null })[]
) {
    let after: number;
    if (!latestQuarter) after = 0;
    else if (latestCall) after = latestCall.getTime();
    else {
        const end = quarterEndDate(latestQuarter);
        after = end ? end.getTime() + 60 * 86400000 : Infinity;
    }
    const best = generals
        .filter(g => g.guidanceBasis === 'STATED' && (g.guidanceGrowthMin !== null || g.guidanceGrowthMax !== null))
        .map(g => ({ g, at: generalSlotDate(g.quarter.name)?.getTime() ?? 0 }))
        .filter(x => x.at > after)
        .sort((a, b) => b.at - a.at)[0];
    if (!best) return undefined;
    return guidanceOf(best.g, best.g.quarter.name, generalDocSource(best.g.quarter.name, best.g.investorBrief) || undefined);
}

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
            aliases: true,
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
                // Quarters only — an AGM's or special call's figures are not a
                // quarter's results and would otherwise pose as the latest.
                where: { quarter: { q: { not: GENERAL_Q } } },
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 6, // latest quarter, the same quarter last year, and a spare for a blank row
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
                    sourceEventDate: true,
                    createdAt: true,
                    quarter: { select: { name: true } }
                }
            }
        }
    });

    // AGM / special-call analyses carrying a stated revenue-growth number — the
    // candidates that can supersede a row's results-call guidance. Few rows, so
    // the brief is read too (it labels older "General" slots AGM vs special call).
    const generalGuidance = await prisma.analysis.findMany({
        where: {
            quarter: { q: GENERAL_Q },
            guidanceBasis: 'STATED',
            company: { isVisible: true },
            OR: [{ guidanceGrowthMin: { not: null } }, { guidanceGrowthMax: { not: null } }],
        },
        select: {
            companyId: true,
            guidanceGrowthMin: true,
            guidanceGrowthMax: true,
            guidanceFy: true,
            guidanceBasis: true,
            guidanceQuote: true,
            investorBrief: true,
            quarter: { select: { name: true } }
        }
    });
    const generalGuidanceBy = new Map<string, typeof generalGuidance>();
    for (const g of generalGuidance) generalGuidanceBy.set(g.companyId, [...(generalGuidanceBy.get(g.companyId) || []), g]);

    // Shareholding: the last ~15 months for every company, in one query. The
    // row only needs the latest promoter / pledge figures and the warnings.
    const holdingBy = await holdingRowsBy(null, new Date(Date.now() - 460 * 86400000));
    const lightHolding = (id: string): EnrichedCompany['holding'] => {
        const rows = holdingBy.get(id);
        if (!rows?.length) return undefined;
        const latest = rows[rows.length - 1];
        const pledged = [...rows].reverse().find(r => r.pledged !== null)?.pledged ?? null;
        return { period: latest.period, promoter: latest.promoter, pledged, notes: holdingWarnings(rows) };
    };

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

        // Newest quarter with results. A blank row (a half-yearly SME's
        // mid-year call, which has no results behind it) is passed over.
        const fIdx = Math.max(0, co.financials.findIndex(f => f.revenue !== null));
        const latestF = co.financials[fIdx];
        const latestPrevF = co.financials.length > fIdx + 1 ? co.financials[fIdx + 1] : null;
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
            // Which quarter those figures are, so the leaderboard can mark a
            // company still on an older quarter than its peers.
            financialsQuarter: latestF?.quarter.name,
            board: leaderboardFigures(co.financials, fIdx),
            // analysis, profile, summary are intentionally omitted here — the
            // client fetches them on-demand via getCompanyDetail(id) when a
            // user expands a company row. `history` is included but only with
            // the bare {quarter, pdfUrl} needed to render the PDF icons.
            history: lightHistory.length > 0 ? lightHistory : undefined,
            filingHeadlines: (() => { const h = getCompanyFilingHeadlines(co.name); return h.length ? h : undefined; })(),
            marketCap: co.marketCap ? Number(co.marketCap) : undefined,
            currentPrice: co.currentPrice ? Number(co.currentPrice) : undefined,
            bookValue: co.bookValue ? Number(co.bookValue) : undefined,
            peRatio: co.peRatio ? Number(co.peRatio) : undefined,
            pbRatio: co.pbRatio ? Number(co.pbRatio) : undefined,
            psRatio: priceToSales(co.marketCap, co.ttmSales),
            ttmSales: co.ttmSales ? Number(co.ttmSales) : undefined,
            dividendYield: co.dividendYield ? Number(co.dividendYield) : undefined,
            roce: co.roce ? Number(co.roce) : undefined,
            fiftyTwoWeekHigh: co.fiftyTwoWeekHigh ? Number(co.fiftyTwoWeekHigh) : undefined,
            fiftyTwoWeekLow: co.fiftyTwoWeekLow ? Number(co.fiftyTwoWeekLow) : undefined,
            targetPrice: co.targetPrice ? Number(co.targetPrice) : undefined,
            geminiScore: latestA?.investibilityScore ?? undefined,
            geminiScoreDelta,
            // Guidance is read from the newest quarter only. When a fresh
            // quarter lands with a weaker number the row follows it down on its
            // own — there is no separate staleness rule to keep in sync. The one
            // exception: a stated number from a later AGM or special call.
            guidance: (() => {
                const latestT = co.transcripts.find(t => t.quarter.name === latestA?.quarter.name);
                const later = newerStatedGuidance(
                    latestA?.quarter.name,
                    latestT ? (latestT.sourceEventDate || latestT.createdAt) : null,
                    generalGuidanceBy.get(co.id) || []
                );
                if (later) return later;
                return latestA?.guidanceBasis ? guidanceOf(latestA, latestA.quarter.name) : undefined;
            })(),
            isSme: co.isSme,
            // A renamed company is shown by its current name (the last one recorded from NSE's
            // name changes); the stored name stays as the key the sector notes use.
            displayName: co.aliases ? co.aliases.split(',').map(x => x.trim()).filter(Boolean).pop() : undefined,
            inPortfolio: co.inPortfolio,
            colorTag: co.colorTag || undefined,
            conviction: co.conviction || undefined,
            holding: lightHolding(co.id)
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
                where: { quarter: { q: { not: GENERAL_Q } } },
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: FINANCIALS_WINDOW,
                include: { quarter: true }
            },
            // Quarters only: the newest of these drives the score, its delta
            // and the summary. AGM / special-call analyses are read below and
            // added to the tabs after the quarters.
            analyses: {
                where: { quarter: { q: { not: GENERAL_Q } } },
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: ANALYSIS_WINDOW,
                include: { quarter: true }
            },
            // No take: retention already caps these (two quarters plus two
            // General documents), and a cap here let a General row push the
            // older quarter's PDF link out.
            transcripts: {
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

    // AGM / special-call analyses, newest first by the date in the slot name
    // (they share q = 'GEN' and a fiscal year, so the database cannot order them).
    const generalAnalyses = (await prisma.analysis.findMany({
        where: { companyId: id, quarter: { q: GENERAL_Q } },
        include: { quarter: true }
    }))
        .sort((a, b) => (generalSlotDate(b.quarter.name)?.getTime() ?? 0) - (generalSlotDate(a.quarter.name)?.getTime() ?? 0))
        .slice(0, GENERAL_ANALYSIS_WINDOW);
    const allAnalyses = [...co.analyses, ...generalAnalyses];

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
    allAnalyses.forEach(a => uniqueQuarterIds.add(a.quarterId));
    co.transcripts.forEach(t => uniqueQuarterIds.add(t.quarterId));

    const history = Array.from(uniqueQuarterIds).map(qId => {
        const matchingF = co.financials.find(f => f.quarterId === qId);
        const matchingA = allAnalyses.find(a => a.quarterId === qId);
        const matchingT = co.transcripts.find(t => t.quarterId === qId);

        const idx = co.financials.findIndex(f => f.quarterId === qId);
        const prevF = idx >= 0 && idx + 1 < co.financials.length ? co.financials[idx + 1] : null;
        const name = matchingF?.quarter.name || matchingA?.quarter.name || matchingT?.quarter.name || "Unknown";

        return {
            // General slots read "AGM · 23 Sep 2026" / "Special call · 5 Sep 2026".
            quarter: generalDocLabel(name, matchingA?.investorBrief || matchingA?.summary),
            slot: name,
            analysis: parseAnalysis(matchingA) as AnalysisResult,
            pdfUrl: matchingT?.fileUrl || null,
            financials: matchingF ? createSafeFinancials(matchingF, prevF, co.financials) : ({} as any)
        };
    })
        // A General slot whose analysis has rolled off has no tab of its own.
        .filter(h => !generalSlotDate(h.slot) || h.analysis || h.pdfUrl)
        // Quarters first, newest first; then AGMs / special calls, newest first.
        .sort((a, b) => {
            const ga = generalSlotDate(a.slot), gb = generalSlotDate(b.slot);
            if (ga && gb) return gb.getTime() - ga.getTime();
            if (ga) return 1;
            if (gb) return -1;
            return quarterScore(b.slot) - quarterScore(a.slot);
        })
        .map(({ slot, ...h }) => h);

    // Trend chart: every stored quarter of figures, not just quarters with a call.
    const trend = co.financials
        .filter(f => /^Q[1-4] FY\d{2}$/.test(f.quarter.name))
        .map((f, i) => ({
            quarter: f.quarter.name,
            financials: createSafeFinancials(f, co.financials[i + 1] ?? null, co.financials),
        }));

    const holdingRows = (await holdingRowsBy([co.id], null)).get(co.id) || [];
    const latestHolding = holdingRows[holdingRows.length - 1];
    const holding: EnrichedCompany['holding'] = latestHolding ? {
        period: latestHolding.period,
        promoter: latestHolding.promoter,
        pledged: [...holdingRows].reverse().find(r => r.pledged !== null)?.pledged ?? null,
        notes: holdingNotes(holdingRows),
        rows: holdingRows,
    } : undefined;

    return {
        id: co.id,
        name: co.name,
        ticker: co.ticker,
        trend,
        holding,
        filings: getCompanyFilings(co.name),
        checkpoints: checkpointsFor(co.name),
        projects: projectsFor(co.name),
        filingHeadlines: getCompanyFilingHeadlines(co.name),
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
        ttmSales: co.ttmSales ? Number(co.ttmSales) : undefined,
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

/**
 * The leaderboard's figures for one company, from its stored quarters (newest
 * first): the latest quarter with results against the same quarter a year
 * earlier, and the last four quarters summed. Nulls where a figure is missing
 * or not meaningful (growth on a loss-making base).
 */
function leaderboardFigures(rows: any[], idx: number) {
    const f = rows[idx];
    if (!f || f.revenue === null || f.revenue === undefined) return undefined;
    const n = (v: any) => (v === null || v === undefined ? null : Number(v));
    const growth = (c: number | null, p: number | null) =>
        c === null || p === null || p <= 0 ? null : Math.round(((c - p) / p) * 1000) / 10;
    const margin = (e: number | null, r: number | null) => (e === null || !r ? null : Math.round((e / r) * 1000) / 10);
    const lastYear = rows.find(x => x.quarter.q === f.quarter.q && x.quarter.year === f.quarter.year - 1);
    const rev = n(f.revenue), ebitda = n(f.ebitda), pat = n(f.pat);
    const m = margin(ebitda, rev);
    const mPrev = lastYear ? margin(n(lastYear.ebitda), n(lastYear.revenue)) : null;
    const four = rows.slice(idx, idx + 4);
    const ttmOk = four.length === 4 && four.every(x => x.revenue !== null && x.revenue !== undefined);
    const sum = (k: string) => (ttmOk ? four.reduce((a, x) => a + Number(x[k] ?? 0), 0) : null);
    return {
        quarter: f.quarter.name as string,
        revenue: rev,
        revenueYoY: lastYear ? growth(rev, n(lastYear.revenue)) : n(f.revenueYoY),
        ebitda,
        margin: m,
        marginChange: m !== null && mPrev !== null ? Math.round((m - mPrev) * 10) / 10 : null,
        pat,
        patYoY: lastYear ? growth(pat, n(lastYear.pat)) : null,
        ttmRevenue: sum('revenue'),
        ttmEbitda: sum('ebitda'),
        ttmPat: sum('pat'),
    };
}

function createSafeFinancials(f: any, prevF: any, allF: any[]): CompanyFinancials {
    const val = (v: any) => (v !== null && v !== undefined) ? Number(v) : null;

    const currentYear = f?.quarter?.year;

    const ytdSum = (key: string) => {
        if (!currentYear) return null;
        const relevant = allF.filter(x => x.quarter.year === currentYear);
        // Blank quarters (no results filed) don't count; all blank → no YTD.
        const known = relevant.filter(x => x[key] !== null && x[key] !== undefined);
        if (known.length === 0) return null;
        return known.reduce((sum, x) => sum + Number(x[key]), 0);
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
                const known = relevant.filter(x => x[key] !== null && x[key] !== undefined);
                if (known.length === 0) return null;
                return known.reduce((sum, x) => sum + Number(x[key]), 0);
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
            ttmSales: co.ttmSales ? Number(co.ttmSales) : undefined,
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
