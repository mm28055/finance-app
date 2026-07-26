import fs from 'fs';
import path from 'path';
import { prisma } from './prisma';
import { geminiPro } from './gemini';
import { searchWeb } from './web-search';
import { quarterScore } from './quarters';

// -----------------------------------------------------------------------------
// Company profile upkeep.
//
// DELIBERATELY MANUAL. Nothing here is called by smart-sync — profiles are
// refreshed only when you ask for it, per company or per batch:
//
//   npx tsx scripts/generate-penetrating-profile.ts --ticker="Aarti Drugs"
//   npx tsx scripts/batch-profile-generator.ts --stale [--dry-run]
//
// `Company.businessProfile` is treated as a living document, not a one-off
// write: a refresh REVISES the existing profile against the newest quarter's
// transcript + analysis rather than regenerating from scratch, since a rewrite
// churns wording, re-argues settled points and loses whatever was sharp about
// the previous version.
//
// A full rewrite is used only when there's nothing to revise (no profile yet) or
// when the existing one is too far behind to be worth patching.
// -----------------------------------------------------------------------------

const TEMP_DATA_DIR = path.join(process.cwd(), 'temp', 'investor-data');

/** Beyond this many quarters behind, patching is pointless — rewrite instead. */
const REWRITE_IF_BEHIND_BY = 4;

export type ProfileMode = 'revise' | 'create';

export interface ProfileUpdateResult {
    updated: boolean;
    mode?: ProfileMode;
    /** Why nothing happened, when updated === false. */
    reason?: string;
    chars?: number;
}

function safeKey(ticker: string) {
    return ticker.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

/**
 * Web context (investor presentation + news hits) for a company, cached on disk.
 * Re-searched when the cache predates the quarter being written, so the context
 * ages along with the profile instead of being frozen at first run.
 */
async function loadInvestorData(ticker: string, name: string, quarterName: string): Promise<any> {
    const jsonPath = path.join(TEMP_DATA_DIR, `${safeKey(ticker)}.json`);

    let cached: any = null;
    try {
        if (fs.existsSync(jsonPath)) cached = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    } catch {
        cached = null;
    }

    if (cached && cached.quarter === quarterName) return cached;

    try {
        const [presResults, newsResults] = [
            await searchWeb(`${name} investor presentation`, 5),
            await searchWeb(`${name} business news`, 3)
        ];

        const investorData = {
            companyName: name,
            ticker,
            quarter: quarterName,
            scrapedAt: new Date().toISOString(),
            investorPresentations: presResults.map(r => ({ title: r.title, link: r.link, snippet: r.snippet })),
            recentNews: newsResults.map(r => ({ title: r.title, link: r.link, snippet: r.snippet }))
        };

        try {
            if (!fs.existsSync(TEMP_DATA_DIR)) fs.mkdirSync(TEMP_DATA_DIR, { recursive: true });
            fs.writeFileSync(jsonPath, JSON.stringify(investorData, null, 2));
        } catch (e: any) {
            console.warn(`[Profile] Could not cache investor data: ${e.message}`);
        }

        return investorData;
    } catch (e: any) {
        console.warn(`[Profile] Web search failed for ${name}: ${e.message}. Using cache/transcripts only.`);
        return cached || {};
    }
}

function analysisContext(a: any): string {
    if (!a) return 'No analyst write-up stored for this quarter.';
    const highlights = (() => {
        try {
            const parsed = JSON.parse(a.keyHighlights || '[]');
            return Array.isArray(parsed) ? parsed.join('\n- ') : '';
        } catch {
            return '';
        }
    })();

    return [
        a.investorBrief ? `INVESTOR BRIEF:\n${a.investorBrief}` : '',
        a.summary ? `SUMMARY:\n${a.summary}` : '',
        highlights ? `KEY HIGHLIGHTS:\n- ${highlights}` : '',
        a.guidanceText ? `GUIDANCE (${a.guidanceSentiment || 'neutral'}):\n${a.guidanceText}` : '',
        a.capexText ? `CAPEX:\n${a.capexText}` : '',
        a.deltaAnalysis ? `CHANGE VS PRIOR QUARTER:\n${a.deltaAnalysis}` : ''
    ].filter(Boolean).join('\n\n');
}

function buildRevisePrompt(opts: {
    name: string;
    quarterName: string;
    fromQuarter: string | null;
    existingProfile: string;
    analysisText: string;
    transcriptText: string;
}) {
    return `
Role: You are a Senior Equity Research Analyst maintaining a living company profile for your Investment Committee.

Task: Update the existing Company Profile for **${opts.name}** to reflect the newly reported quarter **${opts.quarterName}**.
This is a REVISION of a document you already trust, not a rewrite.

RULES:
- Preserve the existing structure, section order, and headings EXACTLY as they are.
- Change only what this quarter genuinely changes: segment and geographic mix, capex, order book, guidance, execution track record, competitive position, risks, and the bull/bear thesis.
- Leave untouched any statement this quarter neither confirms nor contradicts. Do not re-word for the sake of re-wording.
- Where the quarter CONTRADICTS the existing profile, correct it and let the narrative carry the change (e.g. "after exiting the low-margin trading business in ${opts.quarterName}").
- Where the quarter CONFIRMS a thesis already stated, strengthen the evidence rather than repeating the claim.
- Update any stale figures (revenue mix, capacity, order book, guidance) to this quarter's numbers.
- No direct quotes — weave management commentary in naturally.
- Do NOT add a changelog, a "what changed" section, revision notes, or any meta commentary. Return the profile itself.
- Keep total length within roughly 10% of the existing profile.

EXISTING PROFILE${opts.fromQuarter ? ` (last updated for ${opts.fromQuarter})` : ''}:
${opts.existingProfile}

--- NEW QUARTER: ${opts.quarterName} ---

ANALYST WRITE-UP FOR THIS QUARTER:
${opts.analysisText}

EARNINGS CALL TRANSCRIPT FOR THIS QUARTER:
${opts.transcriptText.slice(0, 25000)}

OUTPUT FORMAT (Markdown):
Return ONLY the complete updated Markdown profile. Start with: # ${opts.name}
`;
}

function buildCreatePrompt(opts: {
    name: string;
    quarterName: string;
    investorContext: string;
    transcriptContext: string;
}) {
    const today = new Date().toLocaleDateString();
    return `
    Role: You are a Senior Equity Research Analyst at a top-tier hedge fund presenting a company overview to the Investment Committee.

    Task: Write a penetrating, board-ready "Company Profile" for **${opts.name}**.

    CONTEXT:
    - TODAY'S DATE: ${today}
    - LATEST TRANSCRIPT: ${opts.quarterName}

    CRITICAL INSTRUCTIONS:
    - Trust the chronology of the **Transcripts** (${opts.quarterName}) over the Investor Presentation if they conflict.
    - If the Presentation data is from an earlier year, treat it as **Historical Context**, not current strategy.
    - **SEAMLESSLY INTEGRATE transcript insights**: Do NOT use direct quotes. Weave management commentary naturally into the narrative.

    SOURCES:
    1. **Investor Data** (from PDF, News Articles, and Company Website):
    ${opts.investorContext}

    2. **Conference Call Transcripts** (Tone, Strategy, Management Commentary):
    ${opts.transcriptContext}

    STRUCTURE (Follow this exactly):

    ## Executive Summary
    A penetrating 100-150 word summary that answers:
    - Why does this company exist?
    - What precise problem does it solve for its customers?
    - Is it a Category Leader, a Challenger, or a Commodity player? Be definitive.

    ## The Business Model

    ### Revenue Drivers
    - **What do they sell?** Be specific (e.g., "Complex injectable vials" not "pharmaceuticals").
    - **Who pays them?** (e.g., "US Hospital GPOs", "Indian Distributors", "Direct-to-Consumer via Amazon").
    - **How do they make money?** Is it long-term contracts, spot sales, subscription, or project-based?

    ### Segment & Geographic Mix
    - Include a table breaking down revenue by segment and geography.
    - Commentary on which segments are growing vs declining.

    ### Competitive Moat (or Lack Thereof)
    - **Is the moat Durable or Fleeting?**
    - **Evidence:** High switching costs? Network effects? Regulatory capture? Low-cost scale?
    - **The Bear Case:** Why might the moat crumble? (e.g., "Dependency on one client", "China dumping pricing").

    ## Growth Vectors
    - **Where is the next $100M coming from?** (e.g., "Expansion into CDMO", "New capex coming online in Q4").
    - **Management Execution:** Are they walking the talk? (Cite transcript tone vs. actions).

    ## Key Risks & Governance
    - **Forensic Red Flags:** High related party transactions? Auditor resignations? Frequent CFO changes?
    - **Business Risks:** Client concentration? Single-product dependency? Currency risk?
    - **What could derail the thesis?** (Regulatory, Raw Material prices, Geopolitics).

    ## Investment Thesis
    - **The Bull Case:** Why own this now? (Valuation gap, cyclical upturn, structural shift).
    - **The Bear Case:** Why stay away?

    OUTPUT FORMAT (Markdown):
    Return ONLY the Markdown content. Start with: # ${opts.name}
    `;
}

/**
 * Brings a company's profile up to date with `quarterName`.
 *
 * Idempotent: a company already stamped with this quarter is skipped unless
 * `force` is set, so an interrupted batch can simply be re-run.
 */
export async function updateCompanyProfile(
    companyId: string,
    quarterName: string,
    opts: { force?: boolean } = {}
): Promise<ProfileUpdateResult> {
    const company = await prisma.company.findUnique({
        where: { id: companyId },
        select: { id: true, name: true, ticker: true, businessProfile: true, profileQuarter: true }
    });

    if (!company) return { updated: false, reason: 'company not found' };

    if (!opts.force && company.profileQuarter === quarterName) {
        return { updated: false, reason: `already current for ${quarterName}` };
    }

    // Newest-first, by quarter — NOT by createdAt, which reorders whenever an
    // older PDF happens to be downloaded later.
    const transcripts = await prisma.transcript.findMany({
        where: { companyId },
        include: { quarter: true },
        orderBy: [{ quarter: { year: 'desc' } }, { quarter: { q: 'desc' } }],
        take: 2
    });

    const target = transcripts.find(t => t.quarter.name === quarterName);
    if (!target?.rawText) {
        return { updated: false, reason: `no transcript text for ${quarterName}` };
    }

    const existing = (company.businessProfile || '').trim();
    const hasUsableProfile = existing.length > 200;

    // How far behind the existing profile is. Unknown (null profileQuarter) is
    // NOT treated as hopelessly stale — every profile written before this field
    // existed is unstamped, and those are good documents worth revising rather
    // than rebuilding from scratch.
    const behindBy = company.profileQuarter
        ? quarterScore(quarterName) - quarterScore(company.profileQuarter)
        : 0;

    const mode: ProfileMode =
        hasUsableProfile && behindBy <= REWRITE_IF_BEHIND_BY ? 'revise' : 'create';

    let prompt: string;
    if (mode === 'revise') {
        const analysis = await prisma.analysis.findFirst({
            where: { companyId, quarter: { name: quarterName } }
        });
        prompt = buildRevisePrompt({
            name: company.name.trim(),
            quarterName,
            fromQuarter: company.profileQuarter,
            existingProfile: existing,
            analysisText: analysisContext(analysis),
            transcriptText: target.rawText
        });
    } else {
        const investorData = await loadInvestorData(company.ticker, company.name.trim(), quarterName);
        const transcriptContext = transcripts
            .map(t => `--- TRANSCRIPT (${t.quarter.name}) ---\n${t.rawText?.slice(0, 20000)}...`)
            .join('\n\n');
        prompt = buildCreatePrompt({
            name: company.name.trim(),
            quarterName,
            investorContext: JSON.stringify(investorData, null, 2),
            transcriptContext
        });
    }

    const result = await geminiPro.generateContent(prompt);
    const markdown = (result.response.text() || '').trim();

    // A truncated or empty response must never replace a good profile.
    if (markdown.length < 500) {
        throw new Error(`profile response too short (${markdown.length} chars) — keeping existing profile`);
    }

    await prisma.company.update({
        where: { id: companyId },
        data: {
            businessProfile: markdown,
            profileQuarter: quarterName,
            profileUpdatedAt: new Date()
        }
    });

    return { updated: true, mode, chars: markdown.length };
}
