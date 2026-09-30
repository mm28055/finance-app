import { getAllFilings } from "@/lib/filings/server";
import { allSectorOverviews, companyCallInfo } from "@/lib/sector-overviews";
import { FilingsFeed } from "@/components/FilingsFeed";
import { prisma } from "@/lib/prisma";

// Read on each visit, so the portfolio filter follows changes to the portfolio.
export const dynamic = "force-dynamic";

export const metadata = { title: "Filings · Manish Dashboard" };

// All companies' material filings in one list, newest first, defaulting to the ones that can
// move the share price (marked nightly by the filings job).
export default async function FilingsPage() {
    const { to, filings } = getAllFilings();
    const calls = companyCallInfo(allSectorOverviews());
    const portfolio = new Set((await prisma.company.findMany({ where: { inPortfolio: true }, select: { name: true } })).map(c => c.name));
    const rows = filings.map(f => ({ ...f, call: calls.get(f.company.trim().toLowerCase())?.call, inPortfolio: portfolio.has(f.company) }));
    return (
        <main className="min-h-screen bg-[#FAFBFC] p-6">
            <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div>
                    <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Filings</h1>
                    <p className="text-gray-400 text-xs">What could move each stock, across every company · up to {to}</p>
                </div>
                <a href="/" className="text-xs text-gray-500 hover:text-[#4A7AAF]">← Dashboard</a>
            </header>
            <div className="max-w-4xl">
                <FilingsFeed filings={rows} />
                <p className="text-[11px] text-gray-400 mt-6">
                    From NSE and BSE announcements and insider-trading disclosures, read each evening. "Price-moving" means record sales,
                    promoter buying, selling or pledging, a fund moving 2% or more, orders worth about a tenth of yearly sales, plants starting,
                    CEO, MD, CFO or chairman changes, rating changes, fund-raises and dilution, large deals, and big legal or regulatory outcomes.
                </p>
            </div>
        </main>
    );
}
