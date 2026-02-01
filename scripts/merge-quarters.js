const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("🚀 Starting Quarter Consolidation (Merge 2026 -> FY26)...");

    // 1. Find all "2026" style quarters
    const legacyQuarters = await prisma.quarter.findMany({
        where: { name: { contains: '2026' } }
    });

    console.log(`Found ${legacyQuarters.length} legacy quarters to migrate.`);

    for (const legacy of legacyQuarters) {
        // Construct the target name: e.g. "Q3 2026" -> "Q3 FY26"
        const [q, year] = legacy.name.split(' ');
        const targetName = `${q} FY${year.substring(2)}`;

        console.log(`\n📂 Processing ${legacy.name} -> ${targetName}`);

        // Find or create the target "FY26" quarter
        let target = await prisma.quarter.findUnique({ where: { name: targetName } });
        if (!target) {
            console.log(`  - Creating target quarter: ${targetName}`);
            target = await prisma.quarter.create({
                data: {
                    name: targetName,
                    year: parseInt(year),
                    q: q
                }
            });
        }

        // 2. Migrate Transcripts
        const transcriptUpdate = await prisma.transcript.updateMany({
            where: { quarterId: legacy.id },
            data: { quarterId: target.id }
        });
        console.log(`  - Migrated ${transcriptUpdate.count} transcripts.`);

        // 3. Migrate Financials (Handle collisions)
        const financials = await prisma.financials.findMany({ where: { quarterId: legacy.id } });
        for (const f of financials) {
            try {
                await prisma.financials.update({
                    where: { id: f.id },
                    data: { quarterId: target.id }
                });
            } catch (e) {
                console.log(`  - Financials collision for ${f.companyId}. Deleting legacy one.`);
                await prisma.financials.delete({ where: { id: f.id } });
            }
        }
        console.log(`  - Processed financials.`);

        // 4. Migrate Analysis (Handle collisions)
        const analyses = await prisma.analysis.findMany({ where: { quarterId: legacy.id } });
        for (const a of analyses) {
            try {
                await prisma.analysis.update({
                    where: { id: a.id },
                    data: { quarterId: target.id }
                });
            } catch (e) {
                console.log(`  - Analysis collision for ${a.companyId}. Deleting legacy one.`);
                await prisma.analysis.delete({ where: { id: a.id } });
            }
        }
        console.log(`  - Processed analyses.`);

        // 5. Delete the legacy quarter
        try {
            await prisma.quarter.delete({ where: { id: legacy.id } });
            console.log(`  ✅ Deleted legacy quarter: ${legacy.name}`);
        } catch (e) {
            console.error(`  ❌ Could not delete ${legacy.name}: ${e.message}`);
        }
    }

    console.log("\n✨ Consolidation Complete.");
}

main().finally(() => prisma.$disconnect());
