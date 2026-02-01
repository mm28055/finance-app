const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const midhani = await prisma.company.findFirst({ where: { isin: "INE099Z01011" } }); // Using ISIN
    if (!midhani) { console.log("Midhani not found by ISIN"); return; }

    const q2 = await prisma.quarter.findUnique({ where: { name: "Q2 FY26" } });
    if (!q2) { console.log("Q2 FY26 not found"); return; }

    const transcripts = await prisma.transcript.findMany({
        where: { companyId: midhani.id, quarterId: q2.id },
        include: { analysis: true, financials: true }
    });

    console.log(`Found ${transcripts.length} transcripts for Mishra Dhatu (Q2 FY26).`);

    if (transcripts.length > 1) {
        console.log(" duplicates detected. Cleaning up...");
        // Keep one with analysis, or latest
        // Sort by hasAnalysis desc, then createdAt desc
        transcripts.sort((a, b) => {
            if (a.hasAnalysis !== b.hasAnalysis) return b.hasAnalysis ? 1 : -1;
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        const toKeep = transcripts[0];
        const toDelete = transcripts.slice(1);

        for (const t of toDelete) {
            console.log(`Deleting duplicate: ${t.id}`);
            await prisma.transcript.delete({ where: { id: t.id } });
        }
        console.log(`Kept: ${toKeep.id} (Has Analysis: ${toKeep.hasAnalysis})`);
    } else if (transcripts.length === 1) {
        console.log(`Status: ${transcripts[0].hasAnalysis ? 'ANALYZED' : 'PENDING'}`);
    } else {
        console.log("Status: MISSING");
    }
}

main().finally(() => prisma.$disconnect());
