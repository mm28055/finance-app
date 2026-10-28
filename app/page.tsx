import { SectorList, SectorData } from "@/components/SectorList";
import { getDashboardDataLight, getTranscriptStats } from "@/lib/data-service";
import { TranscriptStats } from "@/components/TranscriptStats";
import { SessionTodos } from "@/components/SessionTodos";
import { HelpButton } from "@/components/HelpButton";
import { sessionTodos } from "@/lib/session-todos";
import { noteIndex } from "@/lib/sector-overviews";
import { ScrollText } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { showingHidden, isHiddenCo } from "@/lib/hidden";

export const dynamic = 'force-dynamic';

export default async function Home() {
  // "Needs a session" is only for Manish: visitors who are not signed in get no list at all.
  const session = await getServerSession(authOptions);
  const [allSectors, stats, todos, showHidden] = await Promise.all([
    getDashboardDataLight(),
    getTranscriptStats(),
    session ? sessionTodos() : Promise.resolve([]),
    showingHidden()
  ]);
  // Hidden companies (lib/hidden) leave the list unless "Show hidden" is on.
  const sectorList = showHidden ? allSectors : allSectors
    .map(s => {
      const companies = s.companies.filter(c => !isHiddenCo(c));
      return { ...s, companies, stats: { ...s.stats, companies: companies.length } };
    })
    .filter(s => s.companies.length > 0);

  return (
    <main className="min-h-screen bg-[#FAFBFC] p-6 pt-0 max-md:p-3">
      {/* Sector List. The title now sits at the top of the sidebar; the help, session list,
          Filings and transcript cards sit on the search row. */}
      <div className="max-w-6xl">
        <SectorList
          sectors={sectorList}
          noteIndex={noteIndex()}
          toolbarExtras={
            <>
              <HelpButton />
              <SessionTodos todos={todos} />
              {/* Page links as small square cards, as tall as the transcript cards beside them; one row on a phone too */}
              <div className="flex items-stretch gap-3 max-md:gap-1.5">
                <div className="flex items-stretch gap-2 max-md:gap-1.5">
                  {[
                    { href: '/filings', label: 'Filings', Icon: ScrollText },
                  ].map(({ href, label, Icon }) => (
                    <a key={href} href={href} className="w-[60px] max-md:w-[54px] max-md:py-1.5 flex flex-col items-center justify-center gap-1 bg-white rounded-lg border border-gray-200 shadow-sm text-[10px] leading-none font-semibold text-gray-600 hover:border-[#6B9FCC] hover:text-[#4A7AAF] transition-colors">
                      <Icon className="w-4 h-4 text-[#6B9FCC]" />
                      {label}
                    </a>
                  ))}
                </div>
                <TranscriptStats stats={stats} />
              </div>
            </>
          }
        />
      </div>

      <footer className="max-w-6xl mt-8 pt-4 border-t border-gray-200 text-center text-gray-400 text-[11px]">
        I am hobbyist investor. This is for my personal use. Reach out at manishmaheswari@gmail.com
      </footer>
    </main>
  );
}
