
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    console.log("--- Syncing Sophisticated Prompt Config ---");

    const configPath = path.join(process.cwd(), 'data', 'prompt_config.json');
    if (!fs.existsSync(configPath)) {
        console.error("❌ prompt_config.json not found!");
        return;
    }

    const config = fs.readFileSync(configPath, 'utf8');

    // Test parse
    try {
        JSON.parse(config);
    } catch (e) {
        console.error("❌ Invalid JSON in prompt_config.json");
        return;
    }

    await prisma.systemConfig.upsert({
        where: { key: 'PROMPT_CONFIG' },
        update: { value: config },
        create: {
            id: crypto.randomUUID(),
            key: 'PROMPT_CONFIG',
            value: config
        }
    });

    console.log("✅ Sophisticated Prompt Config synced to Database.");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
