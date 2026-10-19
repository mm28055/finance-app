/**
 * The parts of the sector notes that the browser may import: types, the live price
 * check and the call helpers. Nothing here pulls in a note's text.
 *
 * Browser components import from here, never from './index' (which loads every note,
 * ~13 MB). The text comes on demand from /api/sector-notes when a sector's Overview
 * or a company card is opened (lib/sector-notes-client.ts).
 */
export * from './types';
export * from './live-valuation';
export * from './calls';

import type { BusinessProfile, CompanyVerdict, ValuationBlock } from './types';
import type { CallInfo } from './calls';

/** A company's "what the company does" card, wherever it is written. */
export interface BusinessFound {
    profile: BusinessProfile;
    verdict?: CompanyVerdict;
    valuation?: ValuationBlock;
}

/**
 * What the dashboard needs before any note is opened: which sectors have a note,
 * and each company's call with only its own valuation inputs (for the call filter
 * and its live price check).
 */
export interface NoteIndex {
    /** Sector names (lower case) that have a written note. */
    sectors: string[];
    /** Company name (lower case) → its call, and the key and inputs for its live price check. */
    calls: Record<string, Pick<CallInfo, 'call' | 'key' | 'valuation'>>;
}
