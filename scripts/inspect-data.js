const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("🔍 Inspecting Database State...");

    // 1. Check Quarters
    const quarters = await prisma.quarter.findMany();
    console.log("\n📅 Quarters found:", quarters.map(q => `${q.name} (ID: ${q.id})`));

    // 2. Check Aerospace Companies
    const companies = await prisma.company.findMany({
        where: { sector: 'Aerospace defence' },
        include: { _count: { select: { transcripts: true } } }
    });

    console.log(`\n🏭 Aerospace Companies: ${companies.length}`);
    companies.forEach(c => {
        if (c._count.transcripts > 0) {
            console.log(` - ${c.ticker}: ${c._count.transcripts} transcripts`);
        }
    });

    // 3. Sample Transcript
    const sample = await prisma.transcript.findFirst({
        where: { company: { sector: 'Aerospace defence' } },
        include: { quarter: true }
    });

    if (sample) {
        console.log(`\n📄 Sample Transcript: ${sample.companyId} | Q: ${sample.quarter.name} | HasAnalysis: ${sample.hasAnalysis}`);
    } else {
        console.log("\n❌ No Aerospace transcripts found.");
    }
}

main().finally(() => prisma.$disconnect());
