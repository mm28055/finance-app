import { CHECKPOINTS } from "@/lib/checkpoints";
import { allSectorOverviews, companyCallInfo } from "@/lib/sector-overviews";
import { ScorecardBoard } from "@/components/ScorecardBoard";
import { prisma } from "@/lib/prisma";
import { shownFilter } from "@/lib/hidden";

// Read on each visit, so the portfolio filter follows changes to the portfolio.
export const dynamic = "force-dynamic";

export const metadata = { title: "Scorecard · Manish Dashboard" };

// Results-season scorecard: every expectation the notes set, grouped by the quarter that settles
// it, with how many came true. Each carries the note's call and whether the company is in the
// portfolio, for the filters.
export default async function Scorecard() {
    const calls = companyCallInfo(allSectorOverviews());
    const portfolio = new Set((await prisma.company.findMany({ where: { inPortfolio: true }, select: { name: true } })).map(c => c.name));
    const shown = await shownFilter();
    const rows = CHECKPOINTS.filter(c => shown(c.company)).map(c => ({ ...c, call: calls.get(c.company.trim().toLowerCase())?.call, inPortfolio: portfolio.has(c.company) }));
    return (
        <main className="min-h-screen bg-[#FAFBFC] p-6">
            <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div>
                    <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Scorecard</h1>
                    <p className="text-gray-400 text-xs">What the notes expected, and what happened</p>
                </div>
                <a href="/" className="text-xs text-gray-500 hover:text-[#4A7AAF]">← Dashboard</a>
            </header>
            <div className="max-w-4xl">
                <ScorecardBoard rows={rows} />
            </div>
        </main>
    );
}
