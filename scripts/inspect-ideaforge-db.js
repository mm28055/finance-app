const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log("🔍 Inspecting IdeaForge DB State...");

    const co = await prisma.company.findFirst({
        where: { ticker: 'IDEAFORGE' },
        include: {
            transcripts: {
                include: { quarter: true }
            },
            analyses: {
                include: { quarter: true }
            }
        }
    });

    if (!co) {
        console.log("❌ IdeaForge not found in DB.");
        return;
    }

    console.log(`Company: ${co.name} (${co.id})`);

    console.log("\n📄 Transcripts:");
    co.transcripts.forEach(t => {
        console.log(` - [${t.quarter.name}] ID: ${t.id} | HasAnalysis: ${t.hasAnalysis} | TextLen: ${t.rawText?.length || 0}`);
    });

    console.log("\n🧠 Analyses:");
    co.analyses.forEach(a => {
        console.log(` - [${a.quarter.name}] ID: ${a.id} | SummaryLen: ${a.summary?.length || 0} | DeltaLen: ${a.deltaAnalysis?.length || 0}`);
    });
}

main().finally(() => prisma.$disconnect());
