import { geminiPro } from "./gemini";
import { prisma } from "@/lib/prisma";

export interface FinancialMetric {
    current_q: number | null;
    ytd: number | null;
    delta_qoq: number | null;
    delta_yoy: number | null;
    delta_ytd: number | null;
}

export interface AnalysisResult {
    // New Structured Data (Prompt 1)
    financials: {
        revenue: FinancialMetric;
        ebitda: FinancialMetric;
        ebitda_margin: FinancialMetric;
        pat: FinancialMetric;
        order_book: number | null;
    };
    forward_guidance_fy: {
        revenue_target: number | null;
        margin_target: number | null;
    };

    // Legacy / Unused fields (kept optional to avoid breaking DB reads of old data immediately if needed, but intended to be replaced)
    management_tone?: number;
    guidance?: any;
    capex?: any;
    summary?: any;
    delta_analysis?: string;

    // NEW: Comprehensive Investor Brief (rich markdown)
    investor_brief?: string;
}

export async function analyzeTranscript(transcriptText: string, previousQuarterData?: any, previousTranscriptText?: string): Promise<AnalysisResult> {
    const isDelta = !!previousTranscriptText;

    // LOAD PROMPT FROM CONFIG (DB FIRST, FALLBACK TO DEFAULTS)
    let config = { basePrompt: "", deltaInstructions: "" };

    try {
        const dbConfig = await prisma.systemConfig.findUnique({
            where: { key: 'PROMPT_CONFIG' }
        });

        if (dbConfig) {
            config = JSON.parse(dbConfig.value);
        } else {
            console.log("No custom prompt config found in DB, using defaults.");
        }
    } catch (e) {
        console.error("Failed to load prompt config from DB:", e);
    }

    // Hardcoded fallback if file doesn't exist or DB is empty
    const defaultBasePrompt = `
You are a Senior Equity Research Analyst at a top-tier institutional investment firm. 
Your audience is a **medium-to-long-term investor** (1-3 year holding period) who wants to understand this quarter's earnings call WITHOUT reading the full transcript.
**Your primary goal is to provide actionable investor insights**, focusing on:
- Is the investment thesis intact?
- Are management's promises being delivered?
- What are the key risks and catalysts?

Analyze the following Earnings Call Transcript and produce TWO outputs:

---
**OUTPUT 1: STRUCTURED DATA (JSON)**
Extract specific metrics into this JSON structure. 
IMPORTANT: If a specific value is NOT explicitly mentioned in the text, return null. Do NOT estimate or calculate it yourself.

{
  "financials": {
    "revenue": {
      "current_q": <number in Cr>,
      "ytd": <number in Cr>,
      "delta_qoq": <number %>,
      "delta_yoy": <number %>,
      "delta_ytd": <number %>
    },
    "ebitda": {
      "current_q": <number in Cr>,
      "ytd": <number in Cr>,
      "delta_qoq": <number %>,
      "delta_yoy": <number %>,
      "delta_ytd": <number %>
    },
    "ebitda_margin": {
      "current_q": <number %>,
      "ytd": <number %>,
      "delta_qoq": <number % or bps>,
      "delta_yoy": <number % or bps>,
      "delta_ytd": <number % or bps>
    },
    "pat": {
      "current_q": <number in Cr>,
      "ytd": <number in Cr>,
      "delta_qoq": <number %>,
      "delta_yoy": <number %>,
      "delta_ytd": <number %>
    },
    "order_book": <number in Cr>
  },
  "forward_guidance_fy": {
    "revenue_target": <number in Cr or null>,
    "margin_target": <number % or null>
  }
}

---
**OUTPUT 2: INVESTOR BRIEF (Rich Markdown)**
Write a COMPREHENSIVE INVESTOR BRIEF (MAX 600 words) using the following EXACT structure. Use tight, professional language. 

Use bullet points extensively for metrics, targets, and key findings to ensure high scannability (as requested by the user). Lead with the most important data in each section. Do NOT use icons in section headers.

## Key Highlights & Analyst Verdict
- Summarize the 3-5 most important takeaways. Lead with the single most important insight.
- **The Narrative**: What is the main story management is telling?
- **The Reality Check**: Does the data support this story?
- **Analyst Verdict**: Is this a thesis-affirming or thesis-breaking quarter?

## Guidance & Management Credibility
- **Forward Guidance**: Extract specific numerical guidance for Revenue, Margins (Gross/EBITDA), and PAT for the next quarter and full fiscal year. Capture the relative guidance if given (e.g., "outgrowing the industry," "expecting margin expansion").
- **Long-Term Vision (>1 Year)**: Bulletize structural goals, specifically scanning for revenue targets, profitabiity targets, margins improvements, Return Ratios (RoCE/RoE), market share targets, or multi-year revenue milestones.
- **Credibility & Tone**: Does management sound confident, cautious, or evasive? Are they maintaining consistency with previous quarters, or is there a subtle "walking back" of targets?

## Strategic Growth Initiatives
- **Growth Drivers**: Provide a numbered list of the specific long-term growth drivers mentioned (e.g., new products, market expansion, M&A).

## Financial Performance & Segment Analysis
- **Segment/Business Unit Split**: Use bullets for Revenue/EBITDA contribution by segment.
- **Margin Dynamics**: Analyze Pricing Power vs. Cost Inflation. Did they pass costs on to customers?
- **One-time Items**: Call out non-recurring gains/costs.

## Order Book & Revenue Visibility
- **Current Order Book**: Total value and breakdown (use bullets).
- **Book-to-Bill Ratio**: Intake vs. execution.
- **Execution Timeline**: When will orders convert to revenue?
- **Revenue Visibility**: Security of the next 12 months' revenue.

## Capital Allocation & Balance Sheet
- **Capex**: Growth Capex vs. Maintenance Capex.
- **Shareholder Returns**: Dividends or Buybacks.
- **Debt/Liquidity**: Mention refinancing, leverage ratios, or cash constraints.

## Q&A Analysis
- Provide a tight narrative of the Q&A session. 
- Analyze the technical depth and transparency of management's responses.
- Simply provide the analytical matter in a professional, tight narrative.

## Medium-Term Investment Thesis (1-3 Years)
- **Bull Case**: What needs to go right for the stock to outperform?
- **Bear Case**: Structural risks.
- **The "Moat" Analysis**: Widening vs narrowing competitive advantage.
- **Key Catalysts**: Events in the next 12-18 months.

---

**RESPONSE FORMAT**
Return a JSON object with two keys:
{
  "structured_data": { ...the JSON from Output 1... },
  "investor_brief": "...the full markdown from Output 2..."
}
`;

    config.basePrompt = config.basePrompt || defaultBasePrompt;

    config.deltaInstructions = `
**DELTA ANALYSIS CONTEXT & REPORT REQUIREMENTS**
You have been provided with BOTH the current quarter and previous quarter transcripts.
In your "investor_brief" (Output 2), integrate these insights where appropriate, or add a specific "Delta Analysis" section if the findings are critical.
`;


    const prompt = `
${config.basePrompt}

${isDelta ? config.deltaInstructions : ''}

Previous Quarter Context: ${previousQuarterData ? JSON.stringify(previousQuarterData) : "None"}

${isDelta ? `
PREVIOUS TRANSCRIPT (Q-Minus-1):
${previousTranscriptText?.substring(0, 40000)}
` : ''}

CURRENT TRANSCRIPT (Analyze This):
${transcriptText.substring(0, 60000)}

---
**RESPONSE FORMAT**
Return a JSON object with two keys:
{
  "structured_data": { ...the JSON from Output 1... },
  "investor_brief": "...the full markdown from Output 2..."
}
`;

    try {
        if (!process.env.GOOGLE_AI_KEY) {
            throw new Error("GOOGLE_AI_KEY is missing from environment variables.");
        }

        const result = await geminiPro.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean markdown if present
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(jsonStr);

        // Handle new format with investor_brief
        const structuredData = parsed.structured_data || parsed;
        const investorBrief = parsed.investor_brief || null;

        const safeFinancials = structuredData.financials || {};
        const safeGuidance = structuredData.forward_guidance_fy || {};

        // Helper to safely parse numbers or null
        const parseNum = (v: any): number | null => {
            if (v === null || v === undefined || v === '-') return null;
            if (typeof v === 'number') return v;
            const sub = v.toString().replace(/[^0-9.-]/g, '');
            if (!sub) return null;
            const parsed = parseFloat(sub);
            return isNaN(parsed) ? null : parsed;
        };

        const parseMetric = (obj: any): FinancialMetric => {
            if (!obj) return { current_q: null, ytd: null, delta_qoq: null, delta_yoy: null, delta_ytd: null };
            return {
                current_q: parseNum(obj.current_q),
                ytd: parseNum(obj.ytd),
                delta_qoq: parseNum(obj.delta_qoq),
                delta_yoy: parseNum(obj.delta_yoy),
                delta_ytd: parseNum(obj.delta_ytd)
            };
        };

        return {
            financials: {
                revenue: parseMetric(safeFinancials.revenue),
                ebitda: parseMetric(safeFinancials.ebitda),
                ebitda_margin: parseMetric(safeFinancials.ebitda_margin),
                pat: parseMetric(safeFinancials.pat),
                order_book: parseNum(safeFinancials.order_book)
            },
            forward_guidance_fy: {
                revenue_target: parseNum(safeGuidance.revenue_target),
                margin_target: parseNum(safeGuidance.margin_target)
            },
            investor_brief: investorBrief,
            // Legacy / Defaults for safety
            management_tone: 5
        };

    } catch (error: any) {
        console.error("AI Analysis Detail Error:", {
            message: error.message,
            stack: error.stack,
            status: error?.status
        });
        throw new Error(`AI Analysis Failed (Structure): ${error.message}`);
    }
}
