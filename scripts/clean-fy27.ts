import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log("🧹 FAST CLEANUP: Purging FY27 Ghost Data...");

    // 1. Identify Ghosts
    const ghosts = await prisma.quarter.findMany({
        where: { year: 2027 }
    });

    console.log(`👻 Found ${ghosts.length} FY27 quarters.`);

    for (const ghost of ghosts) {
        console.log(`   Deleting Quarter: ${ghost.name}...`);

        // Delete Transcripts
        const t = await prisma.transcript.deleteMany({ where: { quarterId: ghost.id } });
        console.log(`     - Deleted ${t.count} transcripts`);

        // Delete Financials
        const f = await prisma.financials.deleteMany({ where: { quarterId: ghost.id } });
        console.log(`     - Deleted ${f.count} financials`);

        // Delete Analysis
        const a = await prisma.analysis.deleteMany({ where: { quarterId: ghost.id } });
        console.log(`     - Deleted ${a.count} analyses`);

        // Delete the Quarter
        await prisma.quarter.delete({ where: { id: ghost.id } });
    }

    console.log("✅ Cleanup Complete. Dashboard should be clean.");
}

main()
    .catch(e => console.error(e))
    .finally(async () => { await prisma.$disconnect(); });
