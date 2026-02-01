const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
    const dbPath = path.join(__dirname, '../data/db.json');
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    console.log(`Found ${data.companies.length} companies to seed.`);

    for (const co of data.companies) {
        await prisma.company.upsert({
            where: { ticker: co.ticker || co.id },
            update: {
                name: co.name,
                sector: co.sector,
                businessProfile: co.businessProfile,
                isin: co.isin,
                status: 'ACTIVE'
            },
            create: {
                name: co.name,
                ticker: co.ticker || co.id,
                sector: co.sector,
                businessProfile: co.businessProfile,
                isin: co.isin,
                status: 'ACTIVE'
            }
        });
    }

    // Create a default quarter if it doesn't exist
    await prisma.quarter.upsert({
        where: { name: 'Q3 FY25' },
        update: {},
        create: {
            name: 'Q3 FY25',
            year: 2025,
            q: 'Q3'
        }
    });

    console.log('Seeding complete.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
