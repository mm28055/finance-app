
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // 1. Total companies with Q3 FY26 Analysis
    const totalQ3 = await prisma.company.count({
        where: {
            analyses: {
                some: {
                    quarter: {
                        name: "Q3 FY26"
                    }
                }
            }
        }
    });

    // 2. Companies with Q3 FY26 Analysis BUT missing/empty businessProfile OR old profile
    // Assuming "Q3 FY26" is in the text if generated properly

    const staleProfiles = await prisma.company.count({
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
                            contains: "Q3 FY26" // Or "Q3 2026"
                        }
                    }
                }
            ]
        }
    });

    console.log(`Total companies with Q3 FY26 Analysis: ${totalQ3}`);
    console.log(`Companies needing profile processing (Missing or Stale): ${staleProfiles}`);
    console.log(`Companies with completed Q3 profiles: ${totalQ3 - staleProfiles}`);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
