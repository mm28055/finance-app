
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkAllQ3() {
    console.log("--- Q3 FY26 Chemicals: rawText Status ---");
    const transcripts = await prisma.transcript.findMany({
        where: {
            quarter: { name: 'Q3 FY26' },
            company: { sector: 'Chemicals' }
        },
        include: { company: true }
    });

    for (const t of transcripts) {
        console.log(`- ${t.company.name}: ${t.rawText?.length || 0} chars`);
    }
}

checkAllQ3()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
