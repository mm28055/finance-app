// -----------------------------------------------------------------------------
// Transcript PDFs in Supabase storage — shared by the Tijori sync
// (scripts/smart-sync.ts) and the exchange sync
// (scripts/sync-exchange-transcripts.ts), so both write the same paths and
// delete them the same way when the rolling window evicts a transcript.
//
// Path scheme: "<sector>/<slot>/<SafeName>_<slot_with_underscores>.pdf", e.g.
// "Tyres/Q2 FY26/MRF_Q2_FY26.pdf".
// -----------------------------------------------------------------------------
import { createClient } from '@supabase/supabase-js';
import { BUCKET_NAME, storagePathFromUrl } from './storage';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

/** Service-role client, or null when the keys are not in the environment. */
export const supabaseAdmin = (SUPABASE_URL && SUPABASE_KEY) ? createClient(SUPABASE_URL, SUPABASE_KEY) : null;

/** Cloud key for a company's document in a slot. */
export function transcriptCloudKey(sector: string | null | undefined, companyName: string, slotName: string): string {
    const safeName = companyName.replace(/[^a-z0-9]/gi, '_').trim();
    return `${sector || 'Unsorted'}/${slotName}/${safeName}_${slotName.replace(/\s+/g, '_')}.pdf`;
}

/** Uploads (upsert) a PDF and returns its public URL. Throws if storage is not configured or the upload fails. */
export async function uploadTranscriptPdf(cloudKey: string, buffer: Buffer): Promise<string> {
    if (!supabaseAdmin) throw new Error('Supabase storage is not configured');
    const { error } = await supabaseAdmin.storage
        .from(BUCKET_NAME)
        .upload(cloudKey, buffer, { contentType: 'application/pdf', upsert: true });
    if (error) throw error;
    const { data: { publicUrl } } = supabaseAdmin.storage.from(BUCKET_NAME).getPublicUrl(cloudKey);
    return publicUrl;
}

/** Removes the Supabase PDF backing a transcript row. No-op for local paths. */
export async function deleteStoredPdf(fileUrl: string | null, companyName: string, qName: string) {
    if (!fileUrl || !fileUrl.startsWith('http') || !supabaseAdmin) return;
    try {
        const storagePath = storagePathFromUrl(fileUrl);
        // Calls stored since 25 Oct 2026 link to the exchange's own PDF: nothing of ours to delete.
        if (!storagePath && !fileUrl.includes('.supabase.co/')) return;
        if (!storagePath) {
            console.error(`   ⚠️ Could not derive storage path for ${companyName} ${qName}: ${fileUrl}`);
            return;
        }
        const { error } = await supabaseAdmin.storage.from(BUCKET_NAME).remove([storagePath]);
        if (error) {
            console.error(`   ⚠️ Supabase delete failed for ${companyName} ${qName}: ${error.message}`);
        } else {
            console.log(`   🗑️ Deleted Supabase PDF: ${storagePath}`);
        }
    } catch (e: any) {
        console.error(`   ⚠️ Supabase cleanup error: ${e.message}`);
    }
}
