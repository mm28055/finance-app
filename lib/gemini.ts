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

/**
 * Round-robin client for callers that don't go through RotatingModel — notably
 * the embedding model used by RAG ingestion, which would otherwise hammer a
 * single key while the analysis calls spread across all of them.
 */
export function nextClient(): GoogleGenerativeAI {
    return getClient();
}

/** Number of keys available, so callers can size their own concurrency. */
export const GEMINI_KEY_COUNT = ALL_KEYS.length;

export function isRateLimit(error: any): boolean {
    return error?.status === 429 || String(error?.message ?? '').includes('429');
}

/**
 * How long to wait after a rate limit. Google usually says ("retry in 37s"); otherwise
 * back off 20s, 40s, 80s, then 2 minutes. This is what lets the app run on one key.
 */
export function rateLimitWaitMs(error: any, round: number): number {
    const msg = String(error?.message ?? '');
    const hint = msg.match(/retry in ([\d.]+)s/i) || msg.match(/"retryDelay":"(\d+)s"/);
    const ms = hint ? Math.ceil(parseFloat(hint[1])) * 1000 + 1000 : 20000 * 2 ** round;
    return Math.min(ms, 120000);
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));
const MAX_WAITS = 5; // about 6 minutes of waiting at most, then give up

class RotatingModel {
    private modelName: string;
    private tools?: any[];

    constructor(modelName: string, tools?: any[]) {
        this.modelName = modelName;
        this.tools = tools;
    }

    // Proxy specifically for generateContent which is the main method used
    async generateContent(prompt: any): Promise<any> {
        let keyIdx = currentKeyIndex;
        let limitedThisRound = 0;
        let waits = 0;

        while (true) {
            const key = ALL_KEYS[keyIdx];
            keyIdx = (keyIdx + 1) % ALL_KEYS.length;

            const client = new GoogleGenerativeAI(key);
            const model = client.getGenerativeModel({ model: this.modelName, ...(this.tools ? { tools: this.tools } : {}) });

            try {
                return await model.generateContent(prompt);
            } catch (error: any) {
                // Anything other than a rate limit (bad request, safety block...) fails straight away.
                if (!isRateLimit(error)) throw error;

                // Another key not yet tried this round: switch to it.
                limitedThisRound++;
                if (limitedThisRound < ALL_KEYS.length) {
                    console.warn(`[Gemini] Key ...${key.slice(-4)} hit rate limit (429). Rotating...`);
                    continue;
                }

                // Every key is limited (always the case with one key): wait, then try again.
                if (waits >= MAX_WAITS) {
                    throw new Error(`Gemini still rate limited (429) after waiting ${MAX_WAITS} times.`);
                }
                const ms = rateLimitWaitMs(error, waits);
                waits++;
                limitedThisRound = 0;
                console.warn(`[Gemini] Rate limited (429). Waiting ${Math.round(ms / 1000)}s before try ${waits}/${MAX_WAITS}...`);
                await sleep(ms);
            }
        }
    }

    // Expose other methods if needed by wrapping them similarly, 
    // or just exposing a 'getModel()' helper if specific uncaught usage is needed.
}

// Export a proxy object that mimics the real model interface for commonly used methods
// Usage: High-Intelligence Model for complex reasoning (Upgraded to v3)
export const geminiPro = new RotatingModel("gemini-3.1-pro-preview");

// Usage: Fast Model (Overridden to use Pro as per user request to ONLY use this model)
export const geminiFlash = new RotatingModel("gemini-3.1-pro-preview");

// Usage: first-pass screening only (is a filing material or routine?). The owner approved
// Flash for this one job on 28 Sep 2026; everything that writes analysis stays on Pro.
export const geminiScreen = new RotatingModel("gemini-flash-latest");

// Usage: short, tightly guided write-ups in the nightly job: the results view and call note, filing
// summaries, the results calendar's notices and the guidance figure. The owner approved Flash for
// these on 7 Nov 2026 to cut cost; the call brief, profiles and news stay on Pro.
export const geminiLight = new RotatingModel("gemini-flash-latest");

// Usage: Pro with Google Search switched on, for the one job that must look something up on the web
// (why a share moved sharply, scripts/sync-market-news.ts). The answer carries the pages it used in
// response.candidates[0].groundingMetadata.
export const geminiSearch = new RotatingModel("gemini-3.1-pro-preview", [{ googleSearch: {} }]);
