
import { prisma } from '../lib/prisma';

async function main() {
    const config = await prisma.systemConfig.findUnique({
        where: { key: 'PROMPT_CONFIG' }
    });

    if (config) {
        console.log("Current Config in DB:");
        console.log(config.value);
    } else {
        console.log("No config found in DB (using defaults)");
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
