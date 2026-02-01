const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 1. Find the Aerospace companies
    const companies = await prisma.company.findMany({
        where: { sector: "Aerospace defence" },
        include: { transcripts: { include: { quarter: true } } }
    });

    console.log(`Found ${companies.length} Aerospace companies.`);

    for (const company of companies) {
        console.log(`Checking ${company.name}...`);

        // Find Q3 FY26 Transcript
        const transcript = company.transcripts.find(t => t.quarter.name === "Q3 FY26");

        if (transcript) {
            console.log(`  -> Q3 FY26 Transcript found: ${transcript.id}`);
            console.log(`  -> Current hasAnalysis: ${transcript.hasAnalysis}`);

            // RESET IT
            await prisma.transcript.update({
                where: { id: transcript.id },
                data: { hasAnalysis: false }
            });
            console.log("  -> RESET complete. Ready for Sync.");
        } else {
            console.log("  -> No Q3 FY26 transcript found.");
        }
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
