const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("🔄 Resetting Analysis Flags for Q3 FY26...");

    // 1. Verify we are targeting the right quarter
    const quarterName = "Q3 FY26";
    const quarter = await prisma.quarter.findUnique({
        where: { name: quarterName }
    });

    if (!quarter) {
        console.error(`❌ Quarter '${quarterName}' not found in database!`);
        return;
    }

    console.log(`Found Quarter: ${quarter.name} (ID: ${quarter.id})`);

    // 2. Count transcripts to be reset
    const count = await prisma.transcript.count({
        where: { quarterId: quarter.id, hasAnalysis: true }
    });

    console.log(`Found ${count} transcripts with existing analysis for Q3 FY26.`);

    if (count === 0) {
        console.log("Nothing to reset. Exiting.");
        return;
    }

    // 3. Perform Reset
    const result = await prisma.transcript.updateMany({
        where: { quarterId: quarter.id },
        data: { hasAnalysis: false }
    });

    console.log(`✅ SPECIFIC RESET COMPLETE: Reset ${result.count} records for '${quarterName}'.`);
    console.log("🚀 You can now run 'Global Smart Sync' to re-analyze these companies with the new data model.");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
