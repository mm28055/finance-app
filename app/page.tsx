import { SectorList, SectorData } from "@/components/SectorList";
import { getDashboardDataLight, getTranscriptStats } from "@/lib/data-service";
import { TranscriptStats } from "@/components/TranscriptStats";
import { SessionTodos } from "@/components/SessionTodos";
import { HelpButton } from "@/components/HelpButton";
import { sessionTodos } from "@/lib/session-todos";
import { ScrollText, Trophy } from "lucide-react";

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
        {/* Clicking the title reloads the dashboard fresh (and drops any ?company= from a link). */}
        <a href="/" title="Refresh the dashboard" className="block hover:opacity-80 max-md:hidden">
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Manish Dashboard</h1>
          <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
        </a>
        <div className="flex items-center gap-4 max-md:flex-wrap max-md:gap-2">
          <HelpButton />
          <SessionTodos todos={todos} />
          {/* Page links as small square cards, as tall as the transcript cards beside them; one row on a phone too */}
          <div className="flex items-stretch gap-3 max-md:gap-1.5">
            <div className="flex items-stretch gap-2 max-md:gap-1.5">
              {[
                { href: '/filings', label: 'Filings', Icon: ScrollText },
                { href: '/top12', label: 'Top 12', Icon: Trophy },
              ].map(({ href, label, Icon }) => (
                <a key={href} href={href} className="w-[60px] max-md:w-[54px] max-md:py-1.5 flex flex-col items-center justify-center gap-1 bg-white rounded-lg border border-gray-200 shadow-sm text-[10px] leading-none font-semibold text-gray-600 hover:border-[#6B9FCC] hover:text-[#4A7AAF] transition-colors">
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
