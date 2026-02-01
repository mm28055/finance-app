const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("✈️  PRE-FLIGHT SYSTEM CHECK ✈️");
    console.log("--------------------------------");

    // 1. Check Company Count
    const companyCount = await prisma.company.count();
    console.log(`✅ Total Companies: ${companyCount}`);

    // 2. Check Transcript Count (The Input)
    const transcriptCount = await prisma.transcript.count();
    console.log(`✅ Total Transcripts Linked: ${transcriptCount}`);

    // 3. Check Pending Work items
    const pendingAnalysis = await prisma.transcript.count({
        where: { hasAnalysis: false }
    });
    console.log(`⚠️  Pending Analysis: ${pendingAnalysis} (This is the batch size)`);

    // 4. Check Completed items
    const completedAnalysis = await prisma.transcript.count({
        where: { hasAnalysis: true }
    });
    console.log(`✅ Completed Analysis: ${completedAnalysis}`);

    // 5. Sample Check
    if (pendingAnalysis > 0) {
        const sample = await prisma.transcript.findFirst({
            where: { hasAnalysis: false },
            include: { company: true, quarter: true }
        });
        console.log(`🔍 Next in Queue: ${sample.company.name} (${sample.quarter.name})`);
        console.log(`   File: ${sample.fileUrl}`);
    } else {
        console.log("🎉 No pending work! System is up to date.");
    }

    console.log("--------------------------------");
    console.log("READY FOR TAKEOFF? [YES/NO]");
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
