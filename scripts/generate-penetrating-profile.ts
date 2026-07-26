
import { fileURLToPath } from 'url';
// Shared client, NOT a second `new PrismaClient()` — lib/profile-service.ts uses
// the singleton, and an extra connected client keeps the Node process alive after
// the work is done (the script appears to hang forever).
import { prisma } from '../lib/prisma';
import { updateCompanyProfile } from '../lib/profile-service';
import 'dotenv/config';

/**
 * Generates/refreshes one company's profile against its newest stored quarter.
 *
 * The prompt and persistence live in lib/profile-service.ts, which is also what
 * smart-sync calls after each quarter is analyzed — so a manual run and an
 * automatic refresh produce the same thing. Manual runs pass force, since the
 * point of running by hand is to redo a profile that may already be stamped.
 */
export async function generatePenetratingProfile(ticker: string) {
    console.log(`\n🚀 Generating Penetrating Profile for: ${ticker}`);

    // Resolve by EXACT ticker (unique) first, then fall back to an EXACT name
    // match. Do NOT use `name contains ticker` — a substring match mis-resolves
    // to the wrong company (e.g. "CCL" -> "OCCL", "Borosil" -> "Borosil
    // Renewables"), silently skipping the intended company.
    let company = await prisma.company.findUnique({ where: { ticker } });
    if (!company) {
        company = await prisma.company.findFirst({ where: { name: ticker } });
    }

    if (!company) {
        console.error(`❌ Company '${ticker}' not found in database.`);
        return;
    }

    // Newest quarter this company actually has a transcript for — ordered by
    // quarter, not createdAt, so a late-downloaded old PDF can't pose as latest.
    const latest = await prisma.transcript.findFirst({
        where: { companyId: company.id },
        include: { quarter: true },
        orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }]
    });

    if (!latest) {
        console.error(`❌ ${company.name} has no transcripts to build a profile from.`);
        return;
    }

    console.log(`🧠 Synthesizing profile against ${latest.quarter.name}...`);
    try {
        const res = await updateCompanyProfile(company.id, latest.quarter.name, { force: true });
        if (res.updated) {
            console.log(`✅ Profile ${res.mode === 'revise' ? 'revised' : 'created'} (${res.chars} chars). 💾 Saved to Database.`);
        } else {
            console.warn(`⏭️ Skipped: ${res.reason}`);
        }
    } catch (e: any) {
        console.error("❌ Synthesis Failed:", e.message);
    }
}

// CLI Execution Support
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const args = process.argv.slice(2);
    const tickerArg = args.find(a => a.startsWith('--ticker='));
    const companyName = tickerArg ? tickerArg.split('=')[1].replace(/"/g, '') : null;

    if (companyName) {
        generatePenetratingProfile(companyName)
            .then(() => prisma.$disconnect())
            .catch(async (e) => {
                console.error(e);
                await prisma.$disconnect();
                process.exit(1);
            });
    } else {
        console.error("Please provide a company name via --ticker=\"Name\"");
        process.exit(1);
    }
}
