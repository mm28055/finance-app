
import { PrismaClient } from '@prisma/client';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY!);

async function main() {
    console.log("--- System Diagnostics ---");

    // 1. Test DB Connection
    try {
        console.log("Testing DB Connection...");
        const count = await prisma.company.count();
        console.log(`✅ DB Connected. Companies count: ${count}`);
    } catch (e: any) {
        console.error(`❌ DB Connection Failed: ${e.message}`);
    }

    // 2. List AI Models
    try {
        console.log("\nListing Available Gemini Models...");
        // The SDK might not have a direct listModels, we use the raw fetch
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_AI_KEY}`);
        const data = await response.json();

        if (data.models) {
            console.log("Found Models:");
            data.models.forEach((m: any) => {
                if (m.supportedGenerationMethods.includes('embedContent')) {
                    console.log(`- [EMBED] ${m.name}`);
                } else {
                    console.log(`- ${m.name}`);
                }
            });
        } else {
            console.log("No models found or API error:", JSON.stringify(data));
        }
    } catch (e: any) {
        console.error(`❌ Model Listing Failed: ${e.message}`);
    }
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
