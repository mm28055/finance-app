require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

async function main() {
    // Get Q2 FY26 quarter
    const q2 = await p.quarter.findFirst({ where: { q: 'Q2', year: 2026 } });
    if (!q2) { console.log('No Q2 FY26 quarter found'); return; }

    // Get all transcripts for Q2 FY26
    const transcripts = await p.transcript.findMany({
        where: { quarterId: q2.id },
        include: { company: { select: { name: true, ticker: true } } }
    });

    let oldFormat = 0, newFormat = 0, other = 0;

    for (const t of transcripts) {
        if (!t.fileUrl) continue;
        const filename = t.fileUrl.split('/').pop();

        if (filename.includes('_Q2_FY26')) {
            newFormat++;
        } else if (filename.endsWith('.pdf') && !filename.includes('_Q')) {
            oldFormat++;
            console.log(`OLD FORMAT in DB: ${t.company.name} -> ${filename}`);
        } else {
            other++;
        }
    }

    console.log(`\nQ2 FY26 Transcripts: ${transcripts.length}`);
    console.log(`DB points to NEW format (Company_Q2_FY26.pdf): ${newFormat}`);
    console.log(`DB points to OLD format (Company.pdf): ${oldFormat}`);
    console.log(`Other: ${other}`);
}

main().finally(() => p.$disconnect());
