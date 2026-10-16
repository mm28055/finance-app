import { TOP_IDEAS, caseReturn, exitValueReturn, valueForTarget, yearsLeft } from "@/lib/top-ideas";
import { allSectorOverviews, companyCallInfo } from "@/lib/sector-overviews";
import { Top12Board } from "@/components/Top12Board";
import { prisma } from "@/lib/prisma";

// Read on each visit, so every return follows today's market value.
export const dynamic = "force-dynamic";

export const metadata = { title: "Top 12 · Manish Dashboard" };

// Twelve researched ideas for a 25%-a-year portfolio held to March 2030 (lib/top-ideas), with
// returns recomputed from the live market value, the note's current call, and a reserve list.
export default async function Top12() {
    const d = TOP_IDEAS;
    const names = [...d.ideas.map(i => i.company), ...d.bench.map(b => b.company)];
    const live = new Map((await prisma.company.findMany({
        where: { name: { in: names } },
        select: { name: true, marketCap: true, inPortfolio: true },
    })).map(c => [c.name, { mcap: c.marketCap ? Number(c.marketCap) : null, inPortfolio: c.inPortfolio }]));
    const calls = companyCallInfo(allSectorOverviews());
    const years = yearsLeft(d.sellBy);

    const ideas = d.ideas.map((i, n) => {
        const mcapNow = live.get(i.company)?.mcap ?? null;
        return {
            ...i, rank: n + 1, mcapNow,
            baseNow: caseReturn(i.base, mcapNow, i.dilution, i.divYield, years),
            badNow: caseReturn(i.bad, mcapNow, i.dilution, i.divYield, years),
            samePeReturn: ((1 + i.base.profitCagr / 100) / Math.pow(1 + i.dilution, 1 / years) - 1) * 100 + i.divYield,
            qualifiesBelow: valueForTarget(i.base.fy30Profit * i.base.exitPe / (1 + i.dilution), i.divYield, years, d.target),
            call: calls.get(i.company.trim().toLowerCase())?.call,
            inPortfolio: !!live.get(i.company)?.inPortfolio,
        };
    });
    const bench = d.bench.map(b => {
        const mcapNow = live.get(b.company)?.mcap ?? null;
        return {
            ...b, mcapNow,
            baseNow: exitValueReturn(b.exitValue, mcapNow, b.divYield, years),
            qualifiesBelow: b.priceIsTheIssue ? valueForTarget(b.exitValue, b.divYield, years, d.target) : null,
            call: calls.get(b.company.trim().toLowerCase())?.call,
        };
    });

    return (
        <main className="min-h-screen bg-[#FAFBFC] p-6 max-md:p-3">
            <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div>
                    <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Top 12</h1>
                    <p className="text-gray-400 text-xs">Ideas for a {d.target}%-a-year portfolio, held three to four years</p>
                </div>
                <a href="/" className="text-xs text-gray-500 hover:text-[#4A7AAF]">← Dashboard</a>
            </header>
            <div className="max-w-4xl">
                <Top12Board ideas={ideas} bench={bench} target={d.target} limits={d.limits} method={d.method} sellBy={d.sellBy} asOf={d.asOf} changes={d.changes} />
            </div>
        </main>
    );
}
