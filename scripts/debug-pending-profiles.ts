
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const pending = await prisma.company.findMany({
        where: {
            analyses: {
                some: {
                    quarter: {
                        name: "Q3 FY26"
                    }
                }
            },
            OR: [
                { businessProfile: null },
                { businessProfile: "" },
                {
                    NOT: {
                        businessProfile: {
                            contains: "Q3 FY26"
                        }
                    }
                }
            ]
        },
        select: {
            id: true,
            ticker: true,
            name: true,
            businessProfile: true, // Show me what IS there
            updatedAt: true
        },
        take: 5 // Just need a few examples
    });

    console.log(`Found ${pending.length} pending profiles (out of total 102).`);
    for (const p of pending) {
        console.log(`\nTicker: ${p.ticker}`);
        console.log(`Updated: ${p.updatedAt}`);
        console.log(`Profile Length: ${p.businessProfile?.length || 0}`);
        console.log(`Profile Start: ${p.businessProfile?.substring(0, 100).replace(/\n/g, ' ')}...`);
        // Check if it's ACTUALLY missing "Q3 FY26" or if format is different
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
