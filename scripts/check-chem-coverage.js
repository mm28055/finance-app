
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkChemicals() {
    console.log("Checking Chemical Sector Coverage...");
    const companies = await prisma.company.findMany({
        where: { sector: 'Chemicals' },
        include: {
            analyses: {
                include: { quarter: true },
                orderBy: { quarter: { year: 'desc' } },
                take: 2
            },
            transcripts: {
                include: { quarter: true },
                orderBy: { quarter: { year: 'desc' } },
                take: 2
            }
        }
    });

    console.log(`Total Companies in Chemicals: ${companies.length}`);
    companies.forEach(co => {
        const analyzeQuarters = co.analyses.map(a => a.quarter.name).join(', ');
        const transcriptQuarters = co.transcripts.map(t => t.quarter.name).join(', ');
        const chunkCount = 0; // Will check later

        console.log(`- ${co.name} (${co.ticker}):`);
        console.log(`  Analyses: ${analyzeQuarters || 'NONE'}`);
        console.log(`  Transcripts: ${transcriptQuarters || 'NONE'}`);
    });

    const totalChunks = await prisma.transcriptChunk.count({ where: { sector: 'Chemicals' } });
    console.log(`\nTotal Chunks in Chemicals: ${totalChunks}`);
}

checkChemicals()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
