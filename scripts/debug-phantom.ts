
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("--- Debugging Phantom Failure Logic ---");

    // 1. Get Virtuoso Q3 Transcript (The one that failed to have delta)
    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (!q3) return console.log("Q3 not found");

    const t = await prisma.transcript.findFirst({
        where: {
            company: { name: { contains: 'Virtuoso' } },
            quarterId: q3.id
        },
        include: { company: true, quarter: true }
    });

    if (!t) return console.log("Virtuoso Q3 Transcript not found");
    console.log(`Target: ${t.company.name} | Quarter: ${t.quarter.name} | Year: ${t.quarter.year} | Q: ${t.quarter.q}`);

    // 2. Logic from lib/sync-service.ts (SIMULATION)
    // ---------------------------------------------------------
    // const prevQuarter = await prisma.quarter.findFirst({
    //     where: {
    //         year: transcript.quarter.year,
    //         q: transcript.quarter.q === 'Q3' ? 'Q2' : (transcript.quarter.q === 'Q2' ? 'Q1' : 'Q4')
    //     }
    // });

    // Exact Logic Replication:
    console.log("\n[Simulation] running fetch logic...");
    const targetPrevQ = t.quarter.q === 'Q3' ? 'Q2' : (t.quarter.q === 'Q2' ? 'Q1' : 'Q4');
    const targetPrevYear = t.quarter.year; // Note: This implementation assumes same year!

    console.log(`Looking for Quarter: Q=${targetPrevQ}, Year=${targetPrevYear}`);

    const prevQuarter = await prisma.quarter.findFirst({
        where: {
            year: targetPrevYear,
            q: targetPrevQ
        }
    });

    if (!prevQuarter) {
        console.log("❌ Simulation Failed: Previous Quarter NOT FOUND in DB using this logic.");
        return;
    }
    console.log(`✅ Simulation Success: Found Quarter ${prevQuarter.name} (ID: ${prevQuarter.id})`);

    // 3. Check for Transcript in this Previous Quarter
    const prevT = await prisma.transcript.findFirst({
        where: {
            companyId: t.companyId,
            quarterId: prevQuarter.id
        }
    });

    if (!prevT) {
        console.log("❌ Simulation Failed: No Transcript found in this Previous Quarter.");
        return;
    }

    console.log(`✅ Simulation Success: Found Previous Transcript (ID: ${prevT.id})`);
    console.log(`   - RawText Length: ${prevT.rawText?.length || 0}`);

    if (!prevT.rawText || prevT.rawText.length < 100) {
        console.log("⚠️ WARNING: Previous Transcript text is empty or too short. This prevents Delta.");
    } else {
        console.log("✅ Text is valid. Delta SHOULD have been triggered.");
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
