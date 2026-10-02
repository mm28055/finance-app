import { getAllEvents } from "@/lib/events/server";
import { allSectorOverviews, companyCallInfo } from "@/lib/sector-overviews";
import { EventsCalendar } from "@/components/EventsCalendar";
import { prisma } from "@/lib/prisma";

// Read on each visit, so "today" and the portfolio filter are current.
export const dynamic = "force-dynamic";

export const metadata = { title: "Calendar · Manish Dashboard" };

// Result dates and earnings-call dates for every company, collected each evening from the
// exchange's board-meetings calendar and the companies' call notices.
export default async function CalendarPage() {
    const { updated, events } = getAllEvents();
    const calls = companyCallInfo(allSectorOverviews());
    const portfolio = new Set((await prisma.company.findMany({ where: { inPortfolio: true }, select: { name: true } })).map(c => c.name));
    const rows = events.map(e => ({ ...e, call: calls.get(e.company.trim().toLowerCase())?.call, inPortfolio: portfolio.has(e.company) }));
    const today = new Date(Date.now() + 5.5 * 3600000).toISOString().slice(0, 10);
    return (
        <main className="min-h-screen bg-[#FAFBFC] p-6">
            <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <div>
                    <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Calendar</h1>
                    <p className="text-gray-400 text-xs">Result dates and earnings calls, across every company{updated ? ` · updated ${updated.slice(0, 10)}` : ''}</p>
                </div>
                <a href="/" className="text-xs text-gray-500 hover:text-[#4A7AAF]">← Dashboard</a>
            </header>
            <div className="max-w-4xl">
                <EventsCalendar events={rows} today={today} />
                <p className="text-[11px] text-gray-400 mt-6">
                    Result dates come from the board meetings companies notify to NSE; the results are filed that day, usually after
                    market hours. Call dates come from each company's own notice and often appear only a few days ahead. Companies
                    listed only on BSE, and those that hold no call, are not shown. Dates can change; this list is refreshed each evening.
                </p>
            </div>
        </main>
    );
}
