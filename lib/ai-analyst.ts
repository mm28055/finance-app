import { geminiPro } from "./gemini";

export interface AnalysisResult {
    // New Structured Data (Prompt 1)
    financials: {
        revenue: number;
        revenue_growth_yoy: number;
        volume_growth_yoy?: number; // %
        gross_margin_percent?: number;
        ebitda: number;
        ebitda_margin_percent: number;
        finance_cost?: number;
        depreciation?: number;
        pat: number;
        pat_margin_percent?: number;
        eps?: number;
        order_book?: number;
    };
    guidance_numeric?: {
        revenue_target?: number;
        revenue_growth_target?: number;
        ebitda_margin_target?: number;
        pat_target?: number;
    };
    management_tone: number; // 1-10

    // Legacy Fields (Optional now)
    guidance?: {
        text: string;
        sentiment: 'positive' | 'neutral' | 'negative';
        delta: 'increased' | 'maintained' | 'decreased' | 'none';
    };
    capex?: {
        amount: string;
        details: string;
        delta: 'increased' | 'maintained' | 'decreased' | 'none';
    };
    summary?: {
        highlights: string[];
        lowlights: string[];
    };
    delta_analysis?: string; // Markdown Report

    // NEW: Comprehensive Investor Brief (rich markdown)
    investor_brief?: string;
}

export async function analyzeTranscript(transcriptText: string, previousQuarterData?: any, previousTranscriptText?: string): Promise<AnalysisResult> {
    const isDelta = !!previousTranscriptText;

    // LOAD PROMPT FROM CONFIG
    const fs = require('fs');
    const path = require('path');
    const configPath = path.join(process.cwd(), 'data', 'prompt_config.json');
    let config = { basePrompt: "", deltaInstructions: "" };

    // Fallback to hardcoded if file missing (safety)
    try {
        if (fs.existsSync(configPath)) {
            config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
        } else {
            // Hardcoded fallback if file doesn't exist
            config.basePrompt = `
You are a Senior Equity Research Analyst at a top-tier institutional investment firm. 
Your audience is a medium-term investor (1-3 year holding period) who wants to understand this quarter's earnings call WITHOUT reading the full transcript.

Analyze the following Earnings Call Transcript and produce TWO outputs:

---
**OUTPUT 1: STRUCTURED DATA (JSON)**
Extract specific metrics into this JSON structure. Use ONLY numbers (no text) for revenue, ebitda, and pat.
{
  "financials": {
    "revenue": <number in Cr>,
    "ebitda": <number in Cr>,
    "pat": <number in Cr>,
    "revenue_growth_yoy": "<X%>",
    "ebitda_margin_percent": <number>
  },
  "guidance": {
    "text": "<2-3 sentence summary of forward guidance>",
    "sentiment": "positive|neutral|negative",
    "delta": "increased|maintained|decreased|none"
  },
  "capex": {
    "amount": "<₹X Cr or range>",
    "details": "<brief purpose>",
    "delta": "increased|maintained|decreased|none"
  },
  "summary": {
    "highlights": ["point1", "point2", "point3"],
    "lowlights": ["risk1", "risk2"]
  },
  "management_tone": <1-10>${isDelta ? `,
  "delta_analysis": "## Narrative Shift\\n- Institutional analysis of the strategic story change...\\n\\n## Guidance Evolution\\n- Detailed comparison of targets...\\n\\n## Promises vs. Performance Scorecard\\n- Tracking specific Q-Minus-1 commitments...\\n\\n## Risk Landscape Evolution\\n- New vs. Closed risks..." ` : ""}
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
            config.deltaInstructions = `
**DELTA ANALYSIS CONTEXT & REPORT REQUIREMENTS**
You have been provided with BOTH the current quarter and previous quarter transcripts.
In your "delta_analysis" field (Output 1), write a SOPHISTICATED DELTA REPORT (approx. 400 words).
Use EXACTLY the following structure with ## headers (to trigger the alternating green UI):

## Narrative Shift & Strategic Pivot
- Institutional analysis of the strategic story change since last quarter.
- Identify any "Goalpost Moving" or walking back of previous strategic claims.

## Guidance Evolution & Target Tracking
- Compare current Revenue/EBITDA/Margin targets against what was promised 90 days ago.
- Highlight any new long-term visions (Vision 2030, etc.) introduced or modified.

## Execution vs. Promise
- Did they meet the specific project milestones or order book conversion timelines set last quarter?
- Call out specific "hits" (achievements) and "misses" (excuses).

## Risk Landscape Evolution
- What new risks have appeared? Did any previous risks get resolved or downplayed?
- Contrast management's confidence levels between the two calls.
`;
        }
    } catch (e) { console.error("Failed to load prompt config", e); }

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
        const safeGuidance = structuredData.guidance || {};
        const safeCapex = structuredData.capex || {};
        const safeSummary = structuredData.summary || {};

        // Validate and Default (Deep Merge)
        const parseNum = (v: any) => {
            if (typeof v === 'number') return v;
            if (!v) return 0;
            return parseFloat(v.toString().replace(/[^0-9.-]/g, '')) || 0;
        };

        return {
            financials: {
                revenue: parseNum(safeFinancials.revenue),
                revenue_growth_yoy: parseNum(safeFinancials.revenue_growth_yoy),
                volume_growth_yoy: safeFinancials.volume_growth_yoy ? parseNum(safeFinancials.volume_growth_yoy) : undefined,
                gross_margin_percent: safeFinancials.gross_margin_percent ? parseNum(safeFinancials.gross_margin_percent) : undefined,
                ebitda: parseNum(safeFinancials.ebitda),
                ebitda_margin_percent: parseNum(safeFinancials.ebitda_margin_percent),
                finance_cost: safeFinancials.finance_cost ? parseNum(safeFinancials.finance_cost) : undefined,
                depreciation: safeFinancials.depreciation ? parseNum(safeFinancials.depreciation) : undefined,
                pat: parseNum(safeFinancials.pat),
                pat_margin_percent: safeFinancials.pat_margin_percent ? parseNum(safeFinancials.pat_margin_percent) : undefined,
                eps: safeFinancials.eps ? parseNum(safeFinancials.eps) : undefined,
                order_book: safeFinancials.order_book ? parseNum(safeFinancials.order_book) : undefined
            },
            guidance_numeric: structuredData.guidance_numeric ? {
                revenue_target: structuredData.guidance_numeric.revenue_target ? parseNum(structuredData.guidance_numeric.revenue_target) : undefined,
                revenue_growth_target: structuredData.guidance_numeric.revenue_growth_target ? parseNum(structuredData.guidance_numeric.revenue_growth_target) : undefined,
                ebitda_margin_target: structuredData.guidance_numeric.ebitda_margin_target ? parseNum(structuredData.guidance_numeric.ebitda_margin_target) : undefined,
                pat_target: structuredData.guidance_numeric.pat_target ? parseNum(structuredData.guidance_numeric.pat_target) : undefined
            } : undefined,
            management_tone: structuredData.management_tone || 5,

            // Legacy Fields (Optional)
            guidance: {
                text: safeGuidance.text || "No guidance extracted",
                sentiment: safeGuidance.sentiment || "neutral",
                delta: safeGuidance.delta || "none"
            },
            capex: {
                amount: safeCapex.amount || "-",
                details: safeCapex.details || "No capex details",
                delta: safeCapex.delta || "none"
            },
            summary: {
                highlights: safeSummary.highlights || [],
                lowlights: safeSummary.lowlights || []
            },
            delta_analysis: structuredData.delta_analysis || undefined,
            investor_brief: investorBrief
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
