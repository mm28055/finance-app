import { prisma } from '@/lib/prisma';
import { SectorData, EnrichedCompany } from '@/components/SectorList';
import type { CompanyFinancials } from '@/components/FinancialMatrix';
import { AnalysisResult } from './ai-analyst';

export async function getDashboardData(): Promise<SectorData[]> {
    const companies = await prisma.company.findMany({
        where: { isVisible: true },
        include: {
            financials: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 4, // Last 4 quarters
                include: { quarter: true }
            },
            analyses: {
                orderBy: [
                    { quarter: { year: 'desc' } },
                    { quarter: { q: 'desc' } }
                ],
                take: 4, // Last 4 quarters
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

        // Helper to parse Analysis
        const parseAnalysis = (a: any, f: any): AnalysisResult | undefined => {
            if (!a) return undefined;
            try {
                return {
                    financials: {
                        revenue: Number(f?.revenue || 0),
                        revenue_growth_yoy: Number(f?.revenueYoY || 0),
                        ebitda: Number(f?.ebitda || 0),
                        ebitda_margin_percent: f?.revenue ? Number((Number(f.ebitda) / Number(f.revenue) * 100).toFixed(1)) : 0,
                        pat: Number(f?.pat || 0),
                        finance_cost: Number((f as any)?.financeCost || 0),
                        depreciation: Number((f as any)?.depreciation || 0),
                        order_book: Number((f as any)?.orderBook || 0)
                    },
                    guidance_numeric: {
                        revenue_target: Number((f as any)?.guidanceRevenue || 0),
                        ebitda_margin_target: Number((f as any)?.guidanceEbitdaMargin || 0),
                        pat_target: Number((f as any)?.guidancePat || 0)
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
                    investor_brief: a.investorBrief || undefined
                };
            } catch (e) {
                console.error("Failed to parse analysis", e);
                return undefined;
            }
        };

        const currentAnalysis = parseAnalysis(latestA, latestF);

        // Build History from UNION of Analyses, Financials, and Transcripts
        const uniqueQuarterIds = new Set<string>();
        co.analyses.forEach(a => uniqueQuarterIds.add(a.quarterId));
        co.financials.forEach(f => uniqueQuarterIds.add(f.quarterId));
        co.transcripts.forEach(t => uniqueQuarterIds.add(t.quarterId));

        const createSafeFinancials = (f: any): CompanyFinancials => {
            const safeVal = (v: any) => Number(v || 0);
            const dummyMetric = (val: number) => ({ currentQ: val, ytd: 0, deltaQoQ: 0, deltaYoY: 0, deltaYTD: 0 });

            return {
                revenue: { ...dummyMetric(safeVal(f?.revenue)), deltaYoY: safeVal(f?.revenueYoY) },
                ebitda: dummyMetric(safeVal(f?.ebitda)),
                ebitdaMargin: dummyMetric(f?.revenue ? Number((safeVal(f.ebitda) / safeVal(f.revenue) * 100).toFixed(1)) : 0),
                pat: dummyMetric(safeVal(f?.pat)),
                patMargin: dummyMetric(f?.revenue ? Number((safeVal(f.pat) / safeVal(f.revenue) * 100).toFixed(1)) : 0),

                financeCost: dummyMetric(safeVal(f?.financeCost)),
                depreciation: dummyMetric(safeVal(f?.depreciation)),
                volGrowth: dummyMetric(safeVal(f?.volumeGrowth)),
                orderBook: dummyMetric(safeVal(f?.orderBook)),

                guidance: {
                    revenue: safeVal(f?.guidanceRevenue),
                    ebitdaMargin: safeVal(f?.guidanceEbitdaMargin),
                    pat: safeVal(f?.guidancePat)
                }
            };
        };

        const history = Array.from(uniqueQuarterIds).map(qId => {
            const matchingA = co.analyses.find(a => a.quarterId === qId);
            const matchingF = co.financials.find(f => f.quarterId === qId);
            const matchingT = co.transcripts.find(t => t.quarterId === qId);

            // If we have an analysis, use it. If not, try to parse from matchingF or creates defaults.
            const fallbackAnalysis = {
                financials: {
                    revenue: Number(matchingF?.revenue || 0),
                    revenue_growth_yoy: Number(matchingF?.revenueYoY || 0),
                    ebitda: Number(matchingF?.ebitda || 0),
                    ebitda_margin_percent: matchingF?.revenue ? Number((Number(matchingF.ebitda) / Number(matchingF.revenue) * 100).toFixed(1)) : 0,
                    pat: Number(matchingF?.pat || 0),
                    finance_cost: Number((matchingF as any)?.financeCost || 0),
                    depreciation: Number((matchingF as any)?.depreciation || 0),
                    order_book: Number((matchingF as any)?.orderBook || 0)
                },
                guidance: { text: "No analysis available", sentiment: 'neutral' as any, delta: 'maintained' as any },
                capex: { amount: "-", details: "", delta: 'maintained' as any },
                summary: { highlights: [], lowlights: [] },
                management_tone: 5,
                delta_analysis: undefined,
                investor_brief: undefined
            } as AnalysisResult;

            const parsedAnalysis = (matchingA ? parseAnalysis(matchingA, matchingF) : null) || fallbackAnalysis;

            const quarterName = matchingA?.quarter.name || matchingF?.quarter.name || matchingT?.quarter.name || "Unknown";

            return {
                quarter: quarterName,
                analysis: parsedAnalysis,
                pdfUrl: matchingT?.fileUrl || null,
                financials: createSafeFinancials(matchingF)
            };
        }).sort((a, b) => {
            // Sort by Quarter (Year -> Q)
            const getScore = (q: string) => {
                const parts = q.split(' '); // "Q2 FY26"
                if (parts.length < 2) return 0;
                const year = parseInt(parts[1].replace('FY', ''));
                const qNum = parseInt(parts[0].replace('Q', ''));
                return (year * 10) + qNum;
            };
            return getScore(b.quarter) - getScore(a.quarter);
        });

        // Calculate YTD and QoQ deltas
        const currentYear = latestF?.quarter.year;
        const ytdRevenue = co.financials
            .filter(f => f.quarter.year === currentYear)
            .reduce((sum, f) => sum + Number(f.revenue || 0), 0);

        const ytdEbitda = co.financials
            .filter(f => f.quarter.year === currentYear)
            .reduce((sum, f) => sum + Number(f.ebitda || 0), 0);

        const ytdPat = co.financials
            .filter(f => f.quarter.year === currentYear)
            .reduce((sum, f) => sum + Number(f.pat || 0), 0);

        const prevF = co.financials[1]; // Previous quarter
        const revenueQoQ = (latestF?.revenue && prevF?.revenue)
            ? ((Number(latestF.revenue) - Number(prevF.revenue)) / Number(prevF.revenue) * 100)
            : 0;

        const companyObj: EnrichedCompany = {
            id: co.id,
            name: co.name,
            ticker: co.ticker,
            price: 0,
            priceChange: 0,
            financials: {
                _quarterName: latestF?.quarter.name,
                revenue: {
                    currentQ: Number(latestF?.revenue || 0),
                    ytd: ytdRevenue,
                    deltaQoQ: revenueQoQ,
                    deltaYoY: Number(latestF?.revenueYoY || 0),
                    deltaYTD: 0
                },
                ebitda: {
                    currentQ: Number(latestF?.ebitda || 0),
                    ytd: ytdEbitda,
                    deltaQoQ: 0,
                    deltaYoY: 0,
                    deltaYTD: 0
                },
                ebitdaMargin: {
                    currentQ: latestF?.revenue ? Number((Number(latestF.ebitda) / Number(latestF.revenue) * 100).toFixed(1)) : 0,
                    ytd: ytdRevenue ? Number((ytdEbitda / ytdRevenue * 100).toFixed(1)) : 0,
                    deltaQoQ: 0,
                    deltaYoY: 0,
                    deltaYTD: 0
                },
                pat: {
                    currentQ: Number(latestF?.pat || 0),
                    ytd: ytdPat,
                    deltaQoQ: 0,
                    deltaYoY: 0,
                    deltaYTD: 0
                },
                patMargin: {
                    currentQ: latestF?.revenue ? Number((Number(latestF.pat) / Number(latestF.revenue) * 100).toFixed(1)) : 0,
                    ytd: ytdRevenue ? Number((ytdPat / ytdRevenue * 100).toFixed(1)) : 0,
                    deltaQoQ: 0,
                    deltaYoY: 0,
                    deltaYTD: 0
                }
            } as any,
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
            dividendYield: co.dividendYield ? Number(co.dividendYield) : undefined,
        };

        sectorMap.get(sName)?.companies.push(companyObj);
        sectorMap.get(sName)!.stats.companies++;
    });

    // Sort companies within each sector by market cap (highest first)
    const sectors = Array.from(sectorMap.values());
    sectors.forEach(sector => {
        sector.companies.sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0));
    });

    return sectors.sort((a, b) => a.sector.localeCompare(b.sector));
}
