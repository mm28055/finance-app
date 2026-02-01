/**
 * Test Investor Brief - Single Company Test
 * This uses fetch to call the Gemini API directly without Prisma
 */

const fs = require('fs');
const pdf = require('pdf-parse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

async function testInvestorBrief() {
    // Read ideaForge Q2 transcript
    const pdfPath = 'C:\\Users\\manis\\OneDrive\\Documents\\source\\Test Project\\tijori-app\\Concalls\\Aerospace defence\\q2 2026\\ideaForge_Technology.pdf';

    if (!fs.existsSync(pdfPath)) {
        console.error('PDF not found:', pdfPath);
        return;
    }

    console.log('📄 Reading PDF...');
    const buffer = fs.readFileSync(pdfPath);
    const data = await pdf(buffer);
    const text = data.text;
    console.log(`📊 Extracted ${text.length} characters`);

    const prompt = `
You are a Senior Equity Research Analyst at a top-tier institutional investment firm. 
Your audience is a medium-term investor (1-3 year holding period) who wants to understand this quarter's earnings call WITHOUT reading the full transcript.

Analyze the following Earnings Call Transcript and produce a COMPREHENSIVE INVESTOR BRIEF in rich markdown format.

**STRUCTURE YOUR RESPONSE EXACTLY AS FOLLOWS:**

## 🎯 Key Highlights

Summarize the 3-5 most important takeaways from this earnings call in narrative form. Lead with the single most important insight. Make this punchy and memorable - if an investor reads nothing else, this should give them the essential picture. Include your analytical perspective on what these highlights mean for the investment thesis.

## 📢 Guidance & Management Commentary

What is management guiding for the next quarter and full year? Be specific with numbers where available. Assess the credibility of this guidance - have they delivered on past promises? Note any change in narrative or tone from previous quarters.

## 📊 Financial Performance & Segment Analysis

Beyond the headline numbers, break down performance by:
- **Segment/Business Unit Split**: If disclosed, show revenue/EBITDA contribution by segment
- **Geographic Mix**: Domestic vs export, any regional commentary
- **Margin Analysis**: What drove margin expansion or compression?
- **One-time Items**: Call out any non-recurring gains/costs

Do NOT just repeat numbers - provide context and interpretation.

## 📦 Order Book & Revenue Visibility

This is crucial for forward-looking investors:
- **Current Order Book**: Total value, breakdown by segment/customer if available
- **Order Inflows**: This quarter's new orders, YTD trend
- **Execution Timeline**: When will orders convert to revenue?
- **Revenue Visibility**: How many quarters of revenue is the order book worth?

If order book data is not discussed, explicitly state "Order book not disclosed in this call."

## 🏭 Capex & Investment Thesis

- **Current Quarter Capex**: Amount and purpose
- **New Investments**: Any new facilities, R&D, or strategic investments

Then provide your medium-term investment thesis:
- **Bull Case**: What needs to go right for the stock to outperform?
- **Bear Case**: What could go wrong?
- **Key Catalysts**: What events in the next 12-18 months could move the stock?
- **Key Risks**: Specific risks mentioned or implied

---

TRANSCRIPT:
${text.substring(0, 80000)}
`;

    console.log('🤖 Calling Gemini...');
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const investorBrief = response.text();

    console.log('\n' + '='.repeat(80));
    console.log('INVESTOR BRIEF - ideaForge Technology Q2 FY26');
    console.log('='.repeat(80) + '\n');
    console.log(investorBrief);
    console.log('\n' + '='.repeat(80));
    console.log(`Total length: ${investorBrief.length} characters`);
}

testInvestorBrief().catch(console.error);
