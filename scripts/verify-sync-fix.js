
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testCaseInsensitiveSync() {
    const sector = 'AEROSPACE DEFENCE'; // All caps, while DB is 'Aerospace defence'

    console.log(`Testing case-insensitive lookup for: "${sector}"`);

    const companies = await prisma.company.findMany({
        where: {
            sector: { equals: sector, mode: 'insensitive' },
            isVisible: true
        }
    });

    console.log(`Found ${companies.length} companies.`);
    if (companies.length > 0) {
        console.log('✅ Case-insensitive sync logic verification: PASSED');
    } else {
        console.log('❌ Case-insensitive sync logic verification: FAILED');
    }
}

testCaseInsensitiveSync()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
