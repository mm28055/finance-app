
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!);

async function testEmbedding(modelName: string) {
    console.log(`Testing model: ${modelName}`);
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.embedContent("Hello world");
        console.log(`✅ Success for ${modelName}`);
        return true;
    } catch (e: any) {
        console.log(`❌ Failed for ${modelName}: ${e.message}`);
        return false;
    }
}

async function main() {
    const candidates = [
        "text-embedding-004",
        "embedding-001",
        "models/embedding-001",
        "models/text-embedding-004"
    ];

    for (const c of candidates) {
        await testEmbedding(c);
    }
}

main().catch(console.error);
