import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

const singleKey = process.env.GOOGLE_AI_KEY;
const multiKeys = process.env.GOOGLE_AI_KEYS ? process.env.GOOGLE_AI_KEYS.split(',') : [];

// Combine all keys, filtering duplicates and empty strings
const ALL_KEYS = Array.from(new Set([singleKey, ...multiKeys].filter(k => k && k.trim().length > 0))).map(k => k!.trim());

if (ALL_KEYS.length === 0) {
    console.warn("GOOGLE_AI_KEY is not set in environment variables.");
} else {
    console.log(`[Gemini] Loaded ${ALL_KEYS.length} API Keys.`);
}

// Global index for round-robin usage
let currentKeyIndex = 0;

function getClient(): GoogleGenerativeAI {
    // Round-robin selection
    const key = ALL_KEYS[currentKeyIndex];
    currentKeyIndex = (currentKeyIndex + 1) % ALL_KEYS.length;
    return new GoogleGenerativeAI(key);
}

class RotatingModel {
    private modelName: string;

    constructor(modelName: string) {
        this.modelName = modelName;
    }

    // Proxy specifically for generateContent which is the main method used
    async generateContent(prompt: any): Promise<any> {
        let attempts = 0;
        // Try each key at least once if needed
        const maxAttempts = Math.max(ALL_KEYS.length, 3);

        // Track the starting index to avoid infinite loops if all fail
        let keyIdx = currentKeyIndex;

        for (let i = 0; i < maxAttempts; i++) {
            // Get current key safely
            const key = ALL_KEYS[keyIdx];
            keyIdx = (keyIdx + 1) % ALL_KEYS.length;

            const client = new GoogleGenerativeAI(key);
            const model = client.getGenerativeModel({ model: this.modelName });

            try {
                return await model.generateContent(prompt);
            } catch (error: any) {
                // If 429 (Too Many Requests), we retry with next key
                if (error.status === 429 || (error.message && error.message.includes('429'))) {
                    console.warn(`[Gemini] Key ...${key.slice(-4)} hit rate limit (429). Rotating...`);
                    // Continue to next iteration -> next key
                    continue;
                }

                // If it's another error, throw it immediately (e.g. 400 Bad Request, safety, etc.)
                throw error;
            }
        }

        throw new Error(`All ${ALL_KEYS.length} Gemini keys exhausted (Rate Limited).`);
    }

    // Expose other methods if needed by wrapping them similarly, 
    // or just exposing a 'getModel()' helper if specific uncaught usage is needed.
}

// Export a proxy object that mimics the real model interface for commonly used methods
// Usage: High-Intelligence Model for complex reasoning (Upgraded to v3)
export const geminiPro = new RotatingModel("gemini-3.1-pro-preview");

// Usage: Fast Model (Overridden to use Pro as per user request to ONLY use this model)
export const geminiFlash = new RotatingModel("gemini-3.1-pro-preview");
