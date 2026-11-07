/**
 * Call analyses and profile refreshes through Gemini's batch mode, at half the price of asking for
 * them one by one. Same model (Pro), same prompts; only the timing and the price differ.
 *
 * The owner chose this on 7 Nov 2026:
 *   8pm  the nightly job stores the day's new transcripts and sends their analyses in one batch
 *        (scripts/sync-exchange-transcripts.ts --batch).
 *   7am  scripts/collect-call-batches.ts saves the analyses exactly as a live answer is saved
 *        (figures, guidance, chat index, roll-off of old quarters), then sends the profile
 *        refreshes those calls need in a second batch.
 *   8pm  the next nightly job saves those profiles, and collects any call batch Google had not
 *        finished by the morning.
 * Pending batches are kept in SystemConfig (CALL_BATCHES, PROFILE_BATCHES). If a batch fails or
 * expires, or an answer cannot be read, that item is done live instead, so nothing is dropped.
 */
import { prisma } from './prisma';
import { PRO_MODEL } from './gemini';
import { recordGeminiUsage } from './gemini-usage';
import { processTranscript } from './sync-service';
import { parseAnalysisText } from './ai-analyst';
import { pruneCompany } from './retention';
import { deleteStoredPdf } from './transcript-storage';
import { buildProfilePrompt, saveProfile, updateCompanyProfile } from './profile-service';
import { quarterScore } from './quarters';

const API = 'https://generativelanguage.googleapis.com/v1beta';
const CALLS = 'CALL_BATCHES';
const PROFILES = 'PROFILE_BATCHES';

export interface BatchItem {
    transcriptId: string;
    companyId: string;
    company: string;
    slot: string;
    /** A results call (not an AGM or special call): it refreshes the profile. */
    results: boolean;
    noPrune?: boolean;
}
export interface ProfileItem { companyId: string; company: string; slot: string }
interface Pending<T> { name: string; submittedAt: string; items: T[] }

async function readPending<T>(key: string): Promise<Pending<T>[]> {
    const row = await prisma.systemConfig.findUnique({ where: { key } });
    try { return row ? JSON.parse(row.value) : []; } catch { return []; }
}
async function writePending<T>(key: string, list: Pending<T>[]) {
    await prisma.systemConfig.upsert({ where: { key }, update: { value: JSON.stringify(list) }, create: { key, value: JSON.stringify(list) } });
}

/** Transcripts already sent in a call batch that has not been collected yet. */
export async function pendingTranscriptIds(): Promise<Set<string>> {
    return new Set((await readPending<BatchItem>(CALLS)).flatMap(b => b.items.map(i => i.transcriptId)));
}

async function google(path: string, init?: RequestInit): Promise<any> {
    const res = await fetch(`${API}/${path}`, { ...init, headers: { 'x-goog-api-key': process.env.GOOGLE_AI_KEY!, 'Content-Type': 'application/json' } });
    const j: any = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(`Gemini batch ${res.status}: ${JSON.stringify(j).slice(0, 300)}`);
    return j;
}

/** Sends prompts (keyed) to Pro as one batch and records it under `key`. Throws if Google refuses it. */
async function sendBatch<T>(key: string, label: string, prompts: { key: string; prompt: string }[], items: T[]) {
    const j = await google(`models/${PRO_MODEL}:batchGenerateContent`, {
        method: 'POST',
        body: JSON.stringify({ batch: {
            display_name: `${label}-${new Date().toISOString().slice(0, 10)}`,
            input_config: { requests: { requests: prompts.map(p => ({ request: { contents: [{ role: 'user', parts: [{ text: p.prompt }] }] }, metadata: { key: p.key } })) } },
        } }),
    });
    const list = await readPending<T>(key);
    list.push({ name: j.name, submittedAt: new Date().toISOString(), items });
    await writePending(key, list);
    return j.name as string;
}

const textOf = (resp: any): string =>
    (resp?.candidates?.[0]?.content?.parts || []).filter((p: any) => !p.thought && typeof p.text === 'string').map((p: any) => p.text).join('');

/**
 * Reads every batch recorded under `key`. Finished ones are handed to `handle` with each item's
 * answer text ('' when Google gave none) and removed; running ones are kept for next time.
 */
async function collect<T>(key: string, idOf: (i: T) => string, handle: (item: T, text: string, why: string) => Promise<void>) {
    const list = await readPending<T>(key);
    if (!list.length) { console.log(`No ${key === CALLS ? 'call' : 'profile'} batches waiting.`); return; }
    const keep: Pending<T>[] = [];
    for (const b of list) {
        let j: any;
        try { j = await google(b.name); } catch (e: any) { console.log(`${b.name}: could not be read (${e.message}); tried again next time`); keep.push(b); continue; }
        const state: string = (j.metadata?.state || j.state || '').replace('BATCH_STATE_', '').toLowerCase();
        if (state === 'pending' || state === 'running') {
            console.log(`${b.name}: still running after ${Math.round((Date.now() - Date.parse(b.submittedAt)) / 36e5)}h (${b.items.length} items); collected next time`);
            keep.push(b);
            continue;
        }
        const answers: any[] = j.response?.inlinedResponses?.inlinedResponses || j.metadata?.output?.inlinedResponses?.inlinedResponses || [];
        const byId = new Map(answers.map(a => [a.metadata?.key, a]));
        console.log(`${b.name}: ${state}, ${answers.length} of ${b.items.length} answers`);
        // Counted under the job that sent the batch (call briefs or profile refreshes), at batch price.
        for (const a of answers) if (a?.response) recordGeminiUsage(a.response, PRO_MODEL, true, key === CALLS ? 'call-briefs-batch' : 'profiles-batch');
        for (const item of b.items) {
            const a = byId.get(idOf(item));
            const text = a && !a.error ? textOf(a.response) : '';
            await handle(item, text, a?.error ? `batch error: ${a.error.message || 'unknown'}` : `batch ${state}`);
        }
    }
    await writePending(key, keep);
}

// ── Profiles ──────────────────────────────────────────────────────────────────

/** Whether the profile still needs this quarter: a late, older call never rolls it back. */
async function profileBehind(companyId: string, slot: string) {
    const co = await prisma.company.findUnique({ where: { id: companyId }, select: { profileQuarter: true } });
    return !co?.profileQuarter || quarterScore(slot) > quarterScore(co.profileQuarter);
}

async function refreshProfileLive(p: ProfileItem, why: string) {
    try {
        const r = await updateCompanyProfile(p.companyId, p.slot);
        console.log(`   ${p.company.trim()} ${p.slot}: profile ${r.updated ? 'refreshed live' : `not refreshed (${r.reason})`} (${why})`);
    } catch (e: any) {
        console.log(`   ${p.company.trim()} ${p.slot}: profile refresh failed (${e.message})`);
    }
}

/** Sends the profile refreshes as one batch; if Google refuses it, they are done live. */
export async function submitProfileBatch(items: ProfileItem[]) {
    const prompts: { key: string; prompt: string }[] = [];
    const sent: ProfileItem[] = [];
    for (const p of items) {
        const built = await buildProfilePrompt(p.companyId, p.slot);
        if ('reason' in built) { console.log(`   ${p.company.trim()} ${p.slot}: profile not refreshed (${built.reason})`); continue; }
        prompts.push({ key: p.companyId, prompt: built.prompt });
        sent.push(p);
    }
    if (!sent.length) return;
    try {
        const name = await sendBatch(PROFILES, 'profiles', prompts, sent);
        console.log(`\nSent ${sent.length} profile refreshes to Google as batch ${name}; saved by the 8pm job.`);
    } catch (e: any) {
        console.log(`\nProfile batch could not be sent (${e.message}); refreshing the ${sent.length} profiles live instead.`);
        for (const p of sent) await refreshProfileLive(p, 'batch not sent');
    }
}

/** Saves the profiles of every finished profile batch. */
export async function collectProfileBatches() {
    await collect<ProfileItem>(PROFILES, p => p.companyId, async (p, text, why) => {
        if (!(await profileBehind(p.companyId, p.slot))) { console.log(`   ${p.company.trim()} ${p.slot}: profile already current, batch answer not used`); return; }
        if (!text.trim()) return refreshProfileLive(p, why);
        try {
            const chars = await saveProfile(p.companyId, p.slot, text);
            console.log(`   ${p.company.trim()} ${p.slot}: profile refreshed (batch, ${chars} chars)`);
        } catch (e: any) {
            await refreshProfileLive(p, `batch answer not saved: ${e.message}`);
        }
    });
}

// ── Call analyses ─────────────────────────────────────────────────────────────

/**
 * After a call's analysis is saved: roll off quarters no longer kept and, for a results call newer
 * than the profile's quarter, refresh the PROFILE tab. With `profiles`, the refresh is queued for a
 * profile batch instead of being done now. Returns a note for the log.
 */
export async function afterCallAnalysis(item: BatchItem, profiles?: ProfileItem[]): Promise<string> {
    if (!item.noPrune) await pruneCompany(prisma, item.companyId, {
        onTranscriptEvict: async t => {
            await deleteStoredPdf(t.fileUrl, item.company, t.quarterName);
            console.log(`   ${item.company.trim()}: rolled off ${t.quarterName} transcript`);
        },
        onAnalysisEvict: async a => { console.log(`   ${item.company.trim()}: rolled off ${a.quarterName} analysis`); },
    });
    if (!item.results) return '';
    try {
        if (!(await profileBehind(item.companyId, item.slot))) return '';
        if (profiles) {
            if (!profiles.some(p => p.companyId === item.companyId && quarterScore(p.slot) >= quarterScore(item.slot))) {
                const i = profiles.findIndex(p => p.companyId === item.companyId);
                if (i >= 0) profiles.splice(i, 1);
                profiles.push({ companyId: item.companyId, company: item.company, slot: item.slot });
            }
            return ', profile queued for batch';
        }
        const p = await updateCompanyProfile(item.companyId, item.slot);
        return p.updated ? ', profile refreshed' : `, profile not refreshed (${p.reason})`;
    } catch (e: any) {
        return `, profile refresh failed (${e.message})`;
    }
}

/** Analyses a call live (full price) and runs the steps after it. The fallback when batching fails. */
async function analyseLive(item: BatchItem, why: string, profiles?: ProfileItem[]) {
    const r = await processTranscript(item.transcriptId);
    if (!r?.success) { console.log(`   ${item.company.trim()} ${item.slot}: live analysis failed (${(r as any)?.error})`); return; }
    console.log(`   ${item.company.trim()} ${item.slot}: analysed live (${why})${await afterCallAnalysis(item, profiles)}`);
}

/**
 * Sends the analyses of these stored transcripts to Google as one batch and records it.
 * If the batch cannot be sent, they are analysed live so tonight's calls still get their briefs.
 */
export async function submitCallBatch(items: BatchItem[]) {
    if (!items.length) return;
    const prompts: { key: string; prompt: string }[] = [];
    const sent: BatchItem[] = [];
    for (const item of items) {
        try {
            const r: any = await processTranscript(item.transcriptId, { promptOnly: true });
            if (!r?.prompt) { console.log(`   ${item.company.trim()} ${item.slot}: no prompt (${r?.status || r?.error || 'unknown'}), left out of the batch`); continue; }
            prompts.push({ key: item.transcriptId, prompt: r.prompt });
            sent.push(item);
        } catch (e: any) {
            console.log(`   ${item.company.trim()} ${item.slot}: prompt failed (${e.message}), left out of the batch`);
        }
    }
    if (!sent.length) return;
    try {
        const name = await sendBatch(CALLS, 'calls', prompts, sent);
        console.log(`\nSent ${sent.length} call analyses to Google as batch ${name}; saved at 7am.`);
    } catch (e: any) {
        console.log(`\nBatch could not be sent (${e.message}); analysing the ${sent.length} calls live instead.`);
        for (const item of sent) await analyseLive(item, 'batch not sent');
    }
}

/**
 * Saves the analyses of every finished call batch, then sends the profile refreshes they need as
 * one profile batch. Batches still running are left for later.
 */
export async function collectCallBatches() {
    const profiles: ProfileItem[] = [];
    await collect<BatchItem>(CALLS, i => i.transcriptId, async (item, text, why) => {
        if (!text) return analyseLive(item, why, profiles);
        try {
            const r: any = await processTranscript(item.transcriptId, { aiResult: parseAnalysisText(text) });
            if (r?.status === 'SKIPPED_EXISTING') { console.log(`   ${item.company.trim()} ${item.slot}: already analysed, batch answer not used`); return; }
            if (!r?.success) return analyseLive(item, `batch answer not saved: ${r?.error}`, profiles);
            console.log(`   ${item.company.trim()} ${item.slot}: analysed (batch)${await afterCallAnalysis(item, profiles)}`);
        } catch (e: any) {
            await analyseLive(item, `batch answer unreadable: ${e.message}`, profiles);
        }
    });
    await submitProfileBatch(profiles);
}
