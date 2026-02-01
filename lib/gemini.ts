import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_AI_KEY;

if (!apiKey) {
    console.warn("GOOGLE_AI_KEY is not set in environment variables.");
}

const genAI = new GoogleGenerativeAI(apiKey || "");

// Usage: High-Intelligence Model for complex reasoning (Upgraded to v3)
export const geminiPro = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });

// Usage: Fast Model for simple tasks (optional)
export const geminiFlash = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });
