import { SectorList, SectorData } from "@/components/SectorList";
import { getDashboardDataLight, getTranscriptStats } from "@/lib/data-service";
import { TranscriptStats } from "@/components/TranscriptStats";
import { SessionTodos } from "@/components/SessionTodos";
import { sessionTodos } from "@/lib/session-todos";
import { ScrollText, Target, CalendarDays } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [sectorList, stats, todos] = await Promise.all([
    getDashboardDataLight(),
    getTranscriptStats(),
    sessionTodos()
  ]);

  return (
    <main className="min-h-screen bg-[#FAFBFC] p-6 max-md:p-3">
      {/* Header */}
      <header className="max-w-6xl flex justify-between items-center mb-6 pb-4 border-b border-gray-200 max-md:flex-col max-md:items-start max-md:gap-3 max-md:mb-4">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Manish Dashboard</h1>
          <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
        </div>
        <div className="flex items-center gap-4 max-md:flex-wrap max-md:gap-2">
          <SessionTodos todos={todos} />
          {/* Page links as small square cards, as tall as the transcript cards beside them */}
          <div className="flex items-stretch gap-3 max-md:flex-wrap max-md:gap-2">
            <div className="flex items-stretch gap-2">
              {[
                { href: '/filings', label: 'Filings', Icon: ScrollText },
                { href: '/scorecard', label: 'Scorecard', Icon: Target },
                { href: '/calendar', label: 'Calendar', Icon: CalendarDays },
              ].map(({ href, label, Icon }) => (
                <a key={href} href={href} className="w-[60px] flex flex-col items-center justify-center gap-1 bg-white rounded-lg border border-gray-200 shadow-sm text-[10px] leading-none font-semibold text-gray-600 hover:border-[#6B9FCC] hover:text-[#4A7AAF] transition-colors">
                  <Icon className="w-4 h-4 text-[#6B9FCC]" />
                  {label}
                </a>
              ))}
            </div>
            <TranscriptStats stats={stats} />
          </div>
        </div>
      </header>

      {/* Sector List */}
      <div className="max-w-6xl">
        <SectorList sectors={sectorList} />
      </div>

      <footer className="max-w-6xl mt-8 pt-4 border-t border-gray-200 text-center text-gray-400 text-[11px]">
        I am hobbyist investor. This is for my personal use. Reach out at manishmaheswari@gmail.com
      </footer>
    </main>
  );
}
