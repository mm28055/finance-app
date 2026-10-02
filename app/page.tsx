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
    <main className="min-h-screen bg-[#FAFBFC] p-6">
      {/* Header */}
      <header className="max-w-6xl flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Manish Dashboard</h1>
          <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
          <p className="text-gray-400 text-[11px] mt-0.5">I am hobbyist investor. This is for my personal use. Reach out at manishmaheswari@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <SessionTodos todos={todos} />
          {/* Filings and Scorecard stacked, together as tall as one transcript card */}
          <div className="flex items-stretch gap-3">
            <div className="flex flex-col gap-1">
              {[
                { href: '/filings', label: 'Filings', Icon: ScrollText },
                { href: '/scorecard', label: 'Scorecard', Icon: Target },
                { href: '/calendar', label: 'Calendar', Icon: CalendarDays },
              ].map(({ href, label, Icon }) => (
                <a key={href} href={href} className="flex-1 flex items-center gap-1.5 bg-white px-2 rounded-md border border-gray-200 shadow-sm text-[10px] leading-none font-semibold text-gray-600 hover:border-[#6B9FCC] hover:text-[#4A7AAF] transition-colors">
                  <Icon className="w-3 h-3 text-[#6B9FCC]" />
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
    </main>
  );
}
