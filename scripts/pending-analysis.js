const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log("=== PENDING Q3 ANALYSIS ===\n");

    const q3 = await prisma.quarter.findFirst({ where: { name: 'Q3 FY26' } });
    if (!q3) {
        console.log("Q3 FY26 not found");
        return;
    }

    const pending = await prisma.transcript.findMany({
        where: {
            quarterId: q3.id,
            hasAnalysis: false
        },
        include: {
            company: true,
            quarter: true
        },
        orderBy: { createdAt: 'asc' }
    });

    console.log(`Found ${pending.length} transcripts pending analysis:\n`);

    pending.forEach((t, i) => {
        console.log(`${(i + 1).toString().padStart(2)}. ${t.company.name.padEnd(40)} | ${t.quarter.name} | ${t.company.sector}`);
    });

    await prisma.$disconnect();
}

main().catch(console.error);
