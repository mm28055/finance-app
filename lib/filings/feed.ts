// The cross-company Filings list, as both the Filings page and the slide-in panel show it: every
// material filing, and (in their own tab) the market and policy events and price moves, each with
// the note's call and whether the company is in the portfolio. Server-only.
import { getAllFilings } from './server';
import { getAllNews } from '../news/server';
import { allSectorOverviews, companyCallInfo } from '../sector-overviews';
import { prisma } from '../prisma';

export async function filingsFeed() {
    const { to, filings } = getAllFilings();
    const calls = companyCallInfo(allSectorOverviews());
    const portfolio = new Set((await prisma.company.findMany({ where: { inPortfolio: true }, select: { name: true } })).map(c => c.name));
    const withCall = <T extends { company: string }>(f: T) => ({ ...f, call: calls.get(f.company.trim().toLowerCase())?.call, inPortfolio: portfolio.has(f.company) });
    const news = getAllNews().map(n => withCall({
        company: n.company, sector: n.sector, date: n.date, tone: n.tone, headline: n.headline, summary: n.summary,
        category: n.kind === 'move' ? 'Price move' : n.kind === 'holder' ? 'Large holder' : 'Market and policy',
        url: n.url || '', source: n.source, impact: (n.dot ? 'high' : 'normal') as 'high' | 'normal',
    }));
    return { to, filings: filings.map(withCall), news };
}
