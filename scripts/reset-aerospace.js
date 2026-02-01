const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function reset() {
    const result = await p.transcript.updateMany({
        where: { company: { sector: 'Aerospace defence' } },
        data: { hasAnalysis: false }
    });
    console.log('Reset', result.count, 'transcripts for Aerospace defence');
    await p.$disconnect();
}

reset();
