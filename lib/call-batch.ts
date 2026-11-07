/**
 * Call analyses through Gemini's batch mode, at half the price of asking for them one by one.
 *
 * The owner chose this on 7 Nov 2026: the 8pm job no longer waits for each call's brief. It stores
 * the new transcripts, sends all their analyses to Google in one batch, and notes the batch in
 * SystemConfig (key CALL_BATCHES). Google answers within a few hours (24 at most). The 7am job
 * (and, as a backstop, the next 8pm job) collects the answers and saves each one exactly as a
 * live answer would be saved: figures, guidance, chat index, then the roll-off of old quarters and
 * the profile refresh. Same model, same prompt; only the timing and the price differ.
 *
 * If a batch fails or expires, or one answer cannot be read, that call is analysed live instead,
 * so a call is never left without its brief.
 */
import { prisma } from './prisma';
import { PRO_MODEL } from './gemini';
import { processTranscript } from './sync-service';
import { parseAnalysisText } from './ai-analyst';
import { pruneCompany } from './retention';
import { deleteStoredPdf } from './transcript-storage';
import { updateCompanyProfile } from './profile-service';
import { quarterScore } from './quarters';

const KEY = 'CALL_BATCHES';
const API = 'https://generativelanguage.googleapis.com/v1beta';

export interface BatchItem {
    transcriptId: string;
    companyId: string;
    company: string;
    slot: string;
    /** A results call (not an AGM or special call): it refreshes the profile. */
    results: boolean;
    noPrune?: boolean;
}
interface PendingBatch { name: string; submittedAt: string; items: BatchItem[] }

async function readPending(): Promise<PendingBatch[]> {
    const row = await prisma.systemConfig.findUnique({ where: { key: KEY } });
    try { return row ? JSON.parse(row.value) : []; } catch { return []; }
}
async function writePending(list: PendingBatch[]) {
    await prisma.systemConfig.upsert({ where: { key: KEY }, update: { value: JSON.stringify(list) }, create: { key: KEY, value: JSON.stringify(list) } });
}

/** Transcripts already sent in a batch that has not been collected yet. */
export async function pendingTranscriptIds(): Promise<Set<string>> {
    return new Set((await readPending()).flatMap(b => b.items.map(i => i.transcriptId)));
}

async function google(path: string, init?: RequestInit): Promise<any> {
    const res = await fetch(`${API}/${path}`, { ...init, headers: { 'x-goog-api-key': process.env.GOOGLE_AI_KEY!, 'Content-Type': 'application/json' } });
    const j: any = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(`Gemini batch ${res.status}: ${JSON.stringify(j).slice(0, 300)}`);
    return j;
}

/**
 * After a call's analysis is saved: roll off quarters no longer kept and, for a results call newer
 * than the profile's quarter, refresh the PROFILE tab. Shared by the live path in
 * scripts/sync-exchange-transcripts.ts and the batch path below. Returns a note for the log.
 */
export async function afterCallAnalysis(item: BatchItem): Promise<string> {
    if (!item.noPrune) await pruneCompany(prisma, item.companyId, {
        onTranscriptEvict: async t => {
            await deleteStoredPdf(t.fileUrl, item.company, t.quarterName);
            console.log(`   ${item.company.trim()}: rolled off ${t.quarterName} transcript`);
        },
        onAnalysisEvict: async a => { console.log(`   ${item.company.trim()}: rolled off ${a.quarterName} analysis`); },
    });
    // A late, older call never rolls the profile back; AGMs and special calls leave it alone.
    if (!item.results) return '';
    try {
        const co = await prisma.company.findUnique({ where: { id: item.companyId }, select: { profileQuarter: true } });
        if (!co?.profileQuarter || quarterScore(item.slot) > quarterScore(co.profileQuarter)) {
            const p = await updateCompanyProfile(item.companyId, item.slot);
            return p.updated ? ', profile refreshed' : `, profile not refreshed (${p.reason})`;
        }
        return '';
    } catch (e: any) {
        return `, profile refresh failed (${e.message})`;
    }
}

/** Analyses a call live (full price) and runs the steps after it. The fallback when batching fails. */
async function analyseLive(item: BatchItem, why: string) {
    const r = await processTranscript(item.transcriptId);
    if (!r?.success) { console.log(`   ${item.company.trim()} ${item.slot}: live analysis failed (${(r as any)?.error})`); return; }
    console.log(`   ${item.company.trim()} ${item.slot}: analysed live (${why})${await afterCallAnalysis(item)}`);
}

/**
 * Sends the analyses of these stored transcripts to Google as one batch and records it.
 * If the batch cannot be sent, they are analysed live so tonight's calls still get their briefs.
 */
export async function submitCallBatch(items: BatchItem[]) {
    if (!items.length) return;
    const requests: any[] = [];
    const sent: BatchItem[] = [];
    for (const item of items) {
        try {
            const r: any = await processTranscript(item.transcriptId, { promptOnly: true });
            if (!r?.prompt) { console.log(`   ${item.company.trim()} ${item.slot}: no prompt (${r?.status || r?.error || 'unknown'}), left out of the batch`); continue; }
            requests.push({ request: { contents: [{ role: 'user', parts: [{ text: r.prompt }] }] }, metadata: { key: item.transcriptId } });
            sent.push(item);
        } catch (e: any) {
            console.log(`   ${item.company.trim()} ${item.slot}: prompt failed (${e.message}), left out of the batch`);
        }
    }
    if (!requests.length) return;
    try {
        const j = await google(`models/${PRO_MODEL}:batchGenerateContent`, {
            method: 'POST',
            body: JSON.stringify({ batch: { display_name: `calls-${new Date().toISOString().slice(0, 10)}`, input_config: { requests: { requests } } } }),
        });
        const list = await readPending();
        list.push({ name: j.name, submittedAt: new Date().toISOString(), items: sent });
        await writePending(list);
        console.log(`\nSent ${sent.length} call analyses to Google as batch ${j.name}; collected at 7am.`);
    } catch (e: any) {
        console.log(`\nBatch could not be sent (${e.message}); analysing the ${sent.length} calls live instead.`);
        for (const item of sent) await analyseLive(item, 'batch not sent');
    }
}

const textOf = (resp: any): string =>
    (resp?.candidates?.[0]?.content?.parts || []).filter((p: any) => !p.thought && typeof p.text === 'string').map((p: any) => p.text).join('');

/** Collects every finished batch and saves its analyses. Batches still running are left for later. */
export async function collectCallBatches() {
    const list = await readPending();
    if (!list.length) { console.log('No call batches waiting.'); return; }
    const keep: PendingBatch[] = [];
    for (const b of list) {
        let j: any;
        try { j = await google(b.name); } catch (e: any) { console.log(`${b.name}: could not be read (${e.message}); tried again next time`); keep.push(b); continue; }
        const state: string = j.metadata?.state || j.state || '';
        if (/PENDING|RUNNING/.test(state)) {
            const hrs = Math.round((Date.now() - Date.parse(b.submittedAt)) / 36e5);
            console.log(`${b.name}: still running after ${hrs}h (${b.items.length} calls); collected next time`);
            keep.push(b);
            continue;
        }
        const answers: any[] = j.response?.inlinedResponses?.inlinedResponses || j.metadata?.output?.inlinedResponses?.inlinedResponses || [];
        const byId = new Map(answers.map(a => [a.metadata?.key, a]));
        console.log(`${b.name}: ${state.replace('BATCH_STATE_', '').toLowerCase()}, ${answers.length} of ${b.items.length} answers`);
        for (const item of b.items) {
            const a = byId.get(item.transcriptId);
            const text = a && !a.error ? textOf(a.response) : '';
            if (!text) { await analyseLive(item, a?.error ? `batch error: ${a.error.message || 'unknown'}` : `batch ${state.replace('BATCH_STATE_', '').toLowerCase()}`); continue; }
            try {
                const r: any = await processTranscript(item.transcriptId, { aiResult: parseAnalysisText(text) });
                if (r?.status === 'SKIPPED_EXISTING') { console.log(`   ${item.company.trim()} ${item.slot}: already analysed, batch answer not used`); continue; }
                if (!r?.success) { await analyseLive(item, `batch answer not saved: ${r?.error}`); continue; }
                console.log(`   ${item.company.trim()} ${item.slot}: analysed (batch)${await afterCallAnalysis(item)}`);
            } catch (e: any) {
                await analyseLive(item, `batch answer unreadable: ${e.message}`);
            }
        }
    }
    await writePending(keep);
}
