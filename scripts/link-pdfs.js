const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');

async function main() {
    console.log("🔍 Scanning Concalls/ directory for real PDFs...");
    const baseDir = path.join(process.cwd(), 'Concalls');

    if (!fs.existsSync(baseDir)) {
        console.error("Concalls directory not found.");
        return;
    }

    const sectors = fs.readdirSync(baseDir);
    let linkedCount = 0;

    for (const sectorFolder of sectors) {
        const sectorPath = path.join(baseDir, sectorFolder);
        if (!fs.statSync(sectorPath).isDirectory()) continue;

        const quarters = fs.readdirSync(sectorPath);
        for (const quarterDir of quarters) {
            const quarterPath = path.join(sectorPath, quarterDir);
            if (!fs.statSync(quarterPath).isDirectory()) continue;

            const files = fs.readdirSync(quarterPath).filter(f => f.endsWith('.pdf'));
            for (const file of files) {
                // Filename logic: Apollo_Micro_Systems.pdf
                const rawName = file.replace('.pdf', '');
                const cleanName = rawName.replace(/_/g, ' '); // Very basic match

                // 1. Find Company
                const company = await prisma.company.findFirst({
                    where: {
                        OR: [
                            { name: { contains: cleanName } },
                            { ticker: { equals: rawName } }
                        ]
                    }
                });

                if (!company) continue;

                // 2. Find/Create Quarter
                // quarterDir is like "Q1 2026" or "q2 2024"
                const qName = quarterDir.toUpperCase().replace(' 20', ' FY'); // Q1 2026 -> Q1 FY26
                const qParts = quarterDir.split(' ');

                const quarter = await prisma.quarter.upsert({
                    where: { name: qName },
                    update: {},
                    create: {
                        name: qName,
                        year: parseInt(qParts[1]),
                        q: qParts[0].toUpperCase()
                    }
                });

                // 3. Upsert Transcript
                const absolutePath = path.join(quarterPath, file);
                await prisma.transcript.upsert({
                    where: { id: `real-${company.ticker}-${quarter.name}` },
                    update: { fileUrl: absolutePath },
                    create: {
                        id: `real-${company.ticker}-${quarter.name}`,
                        companyId: company.id,
                        quarterId: quarter.id,
                        fileUrl: absolutePath,
                        hasAnalysis: false
                    }
                });

                linkedCount++;
            }
        }
    }

    console.log(`✅ Successfully linked ${linkedCount} real PDF files to the database.`);
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
