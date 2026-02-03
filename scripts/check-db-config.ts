
import { prisma } from '../lib/prisma';

async function main() {
    console.log('Checking SystemConfig table...');
    try {
        const config = await prisma.systemConfig.findUnique({
            where: { key: 'PROMPT_CONFIG' }
        });
        console.log('Result:', config);
    } catch (e) {
        console.error('Error accessing SystemConfig:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
