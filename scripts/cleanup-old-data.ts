import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🧹 Starting Database Cleanup (Pruning pre-Q2 FY26 data)...");

    // 1. Identify quarters to delete
    // Logic: Skip if Year > 2026 or (Year === 2026 and Q in [Q2, Q3, Q4])
    const allQuarters = await prisma.quarter.findMany();

    const quartersToDelete = allQuarters.filter(q => {
        const qType = q.q.toUpperCase();
        const qYear = q.year;
        const isFY26OrLater = qYear > 2026 || (qYear === 2026 && (qType === 'Q2' || qType === 'Q3' || qType === 'Q4'));
        return !isFY26OrLater;
    });

    const idsToDelete = quartersToDelete.map(q => q.id);

    if (idsToDelete.length === 0) {
        console.log("✅ No old quarters found to delete.");
        return;
    }

    console.log(`🗑️ Found ${idsToDelete.length} quarters to purge:`, quartersToDelete.map(q => q.name).join(', '));

    // 2. Cascade delete records associated with these quarters
    // Note: In Prisma, if relations aren't set to onDelete: Cascade, we must do it manually.

    const analysisDel = await prisma.analysis.deleteMany({
        where: { quarterId: { in: idsToDelete } }
    });
    console.log(`  -> Deleted ${analysisDel.count} Analysis records.`);

    const financialsDel = await prisma.financials.deleteMany({
        where: { quarterId: { in: idsToDelete } }
    });
    console.log(`  -> Deleted ${financialsDel.count} Financials records.`);

    const transcriptDel = await prisma.transcript.deleteMany({
        where: { quarterId: { in: idsToDelete } }
    });
    console.log(`  -> Deleted ${transcriptDel.count} Transcript records.`);

    // 3. Finally delete the quarters
    const quarterDel = await prisma.quarter.deleteMany({
        where: { id: { in: idsToDelete } }
    });
    console.log(`  -> Deleted ${quarterDel.count} Quarter records.`);

    console.log("\n✨ Cleanup Complete! Old historical data has been purged.");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
