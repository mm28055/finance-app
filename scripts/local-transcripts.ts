/**
 * Brings the local transcript copy (.local-transcripts/) up to date, or searches it.
 *
 *   npx tsx scripts/local-transcripts.ts                     sync (downloads only new or changed calls)
 *   npx tsx scripts/local-transcripts.ts "Pitti"             list a company's calls, newest first
 *   npx tsx scripts/local-transcripts.ts "Pitti" "capacity"  ...and print the lines that mention a word
 *
 * See lib/local-transcripts.ts for why this exists.
 */
import 'dotenv/config';
import { prisma } from '../lib/prisma';
import { syncLocalTranscripts, readLocalTranscripts } from '../lib/local-transcripts';

(async () => {
    const [company, word] = process.argv.slice(2);
    await syncLocalTranscripts();
    if (company) {
        for (const c of readLocalTranscripts({ company })) {
            console.log(`\n${c.company} | ${c.quarter} | call ${c.callDate || '?'} | ${Math.round(c.text.length / 1000)}k chars | ${c.source || ''}`);
            if (word) for (const line of c.text.split(/\n+/)) if (line.toLowerCase().includes(word.toLowerCase())) console.log('  ' + line.trim().slice(0, 300));
        }
    }
    await prisma.$disconnect();
})();
