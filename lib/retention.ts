import type { PrismaClient } from '@prisma/client';

// -----------------------------------------------------------------------------
// Rolling-window retention policy (per company).
//
// Single source of truth for "how many quarters do we keep". Every cleanup path
// (smart-sync, the upload route, the smart sync API route) and every read path
// that caps quarters imports these instead of hard-coding a number.
//
// The windows are deliberately different per data type:
//   - Transcripts/PDFs/chunks are the bulk of the storage + embedding cost, so
//     they roll off fast.
//   - Analysis is small text and is what the user actually reads quarter over
//     quarter, so it survives longer than the transcript it came from.
//   - deltaAnalysis is the largest analysis blob and is only meaningful for the
//     quarter just reported, so it's cleared as soon as a newer quarter lands.
//   - Financials need 5 to compute YoY (same quarter last year).
// -----------------------------------------------------------------------------

/** Transcript row + Supabase PDF + RAG chunks. */
export const TRANSCRIPT_WINDOW = 2;

/** Analysis row: summary, investor brief, highlights, guidance, capex, score. */
export const ANALYSIS_WINDOW = 4;

/**
 * Quarters that keep their `deltaAnalysis` text — newest only.
 *
 * A superseded delta is only ever cleared once the newer quarter has a delta of
 * its own (see pruneCompany). We never leave a company with zero delta reports.
 */
export const DELTA_WINDOW = 1;

/** Financials rows: 5 so YoY (t-4) is computable for the latest quarter. */
export const FINANCIALS_WINDOW = 5;

/**
 * Sentinel stored in Quarter.q for "General" slots — investor meets, analyst
 * days, AGMs and any extra document filed inside a quarter that already has an
 * earnings call. Defined here rather than in lib/quarters.ts because that module
 * imports this one; re-exported there for callers.
 */
export const GENERAL_Q = 'GEN';

/**
 * General slots get their own windows, applied independently of the quarterly
 * ones. They must never share a window with real quarters: a General row sorts
 * below same-year quarters, so it would be the first thing evicted (losing the
 * document the moment two quarters exist) while still counting against the
 * quarterly budget.
 */
export const GENERAL_TRANSCRIPT_WINDOW = 2;
export const GENERAL_ANALYSIS_WINDOW = 4;

// Newest quarter first. `q` is a string ('Q1'..'Q4') so a desc string sort is
// also a desc quarter sort within a fiscal year.
const NEWEST_FIRST = [
    { quarter: { year: 'desc' as const } },
    { quarter: { q: 'desc' as const } }
];

export interface PruneHooks {
    /**
     * Called just before a transcript row is deleted, so the caller can remove
     * the backing PDF from object storage and write a sync-log entry.
     */
    onTranscriptEvict?: (t: { id: string; quarterId: string; quarterName: string; fileUrl: string | null }) => Promise<void>;
    /** Called just before an analysis row is deleted. */
    onAnalysisEvict?: (a: { id: string; quarterId: string; quarterName: string }) => Promise<void>;
}

/**
 * Applies the rolling window above to one company. Idempotent — safe to call
 * after any insert, and safe to call repeatedly.
 *
 * Analysis outlives its transcript: `Analysis` has no FK to `Transcript` (only
 * to Company + Quarter), so a quarter can keep its written analysis after the
 * transcript, PDF and embeddings for that quarter are gone. Because
 * ANALYSIS_WINDOW >= TRANSCRIPT_WINDOW, the reverse never happens.
 */
export async function pruneCompany(db: PrismaClient, companyId: string, hooks: PruneHooks = {}) {
    // --- Transcripts + PDFs + RAG chunks: keep TRANSCRIPT_WINDOW ---
    const allTranscripts = await db.transcript.findMany({
        where: { companyId },
        include: { quarter: true },
        orderBy: NEWEST_FIRST
    });
    const transcripts = allTranscripts.filter(t => t.quarter.q !== GENERAL_Q);
    const generalTranscripts = allTranscripts.filter(t => t.quarter.q === GENERAL_Q);

    for (const old of [
        ...transcripts.slice(TRANSCRIPT_WINDOW),
        ...generalTranscripts.slice(GENERAL_TRANSCRIPT_WINDOW)
    ]) {
        await hooks.onTranscriptEvict?.({
            id: old.id,
            quarterId: old.quarterId,
            quarterName: old.quarter.name,
            fileUrl: old.fileUrl
        });
        await db.transcriptChunk.deleteMany({ where: { companyId, quarterId: old.quarterId } });
        await db.transcript.delete({ where: { id: old.id } });
    }

    // --- Analyses: keep ANALYSIS_WINDOW ---
    const allAnalyses = await db.analysis.findMany({
        where: { companyId },
        include: { quarter: true },
        orderBy: NEWEST_FIRST
    });
    const analyses = allAnalyses.filter(a => a.quarter.q !== GENERAL_Q);
    const generalAnalyses = allAnalyses.filter(a => a.quarter.q === GENERAL_Q);

    for (const old of [
        ...analyses.slice(ANALYSIS_WINDOW),
        ...generalAnalyses.slice(GENERAL_ANALYSIS_WINDOW)
    ]) {
        await hooks.onAnalysisEvict?.({
            id: old.id,
            quarterId: old.quarterId,
            quarterName: old.quarter.name
        });
        await db.analysis.delete({ where: { id: old.id } });
    }

    // --- deltaAnalysis: keep only on the newest DELTA_WINDOW quarters ---
    // Strictly a replacement, never a standalone purge: an older delta is only
    // dropped once the newer quarter has produced one. If the newest quarter has
    // no delta (first-ever analysis for the company, or the analyzer had no
    // previous transcript to compare against), the older delta stays put.
    const newestHaveDelta = analyses
        .slice(0, DELTA_WINDOW)
        .some(a => a.deltaAnalysis !== null);

    const staleDeltaIds = newestHaveDelta
        ? analyses
            .slice(DELTA_WINDOW, ANALYSIS_WINDOW)
            .filter(a => a.deltaAnalysis !== null)
            .map(a => a.id)
        : [];

    if (staleDeltaIds.length > 0) {
        await db.analysis.updateMany({
            where: { id: { in: staleDeltaIds } },
            data: { deltaAnalysis: null }
        });
    }

    // --- Financials: keep FINANCIALS_WINDOW ---
    const financials = await db.financials.findMany({
        where: { companyId, quarter: { q: { not: GENERAL_Q } } },
        include: { quarter: true },
        orderBy: NEWEST_FIRST
    });

    for (const old of financials.slice(FINANCIALS_WINDOW)) {
        await db.financials.delete({ where: { id: old.id } });
    }

    return {
        transcriptsEvicted: Math.max(0, transcripts.length - TRANSCRIPT_WINDOW),
        analysesEvicted: Math.max(0, analyses.length - ANALYSIS_WINDOW),
        deltasCleared: staleDeltaIds.length,
        financialsEvicted: Math.max(0, financials.length - FINANCIALS_WINDOW)
    };
}
