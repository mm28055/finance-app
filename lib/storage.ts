// -----------------------------------------------------------------------------
// Supabase object-storage helpers for the concall PDF bucket.
//
// Lives here rather than inside a script so the parsing below has exactly one
// definition: smart-sync deletes PDFs on eviction and sweep-orphan-pdfs deletes
// the ones eviction missed, and the two must agree on what a URL means.
// -----------------------------------------------------------------------------

export const BUCKET_NAME = 'Conf Call Pdfs';

const PUBLIC_MARKER = '/storage/v1/object/public/';

/**
 * Recovers the in-bucket key from a stored public URL, or null if the URL does
 * not point at this bucket (local paths, other buckets, malformed values).
 *
 * getPublicUrl() percent-encodes the key, so a stored URL reads
 * ".../object/public/Conf%20Call%20Pdfs/Tyres/Q2%20FY26/MRF.pdf" — the bucket
 * name arrives as `Conf%20Call%20Pdfs`, not `Conf Call Pdfs`. Matching against
 * the raw name silently fails, which is how deletions quietly no-oped and left
 * orphaned PDFs behind. Decode first, then strip the bucket prefix.
 */
export function storagePathFromUrl(fileUrl: string): string | null {
    const at = fileUrl.indexOf(PUBLIC_MARKER);
    if (at === -1) return null;

    // "<bucket>/<key>", still encoded and possibly carrying a query string.
    const rest = decodeURIComponent(fileUrl.slice(at + PUBLIC_MARKER.length).split('?')[0]);
    const prefix = `${BUCKET_NAME}/`;
    if (!rest.startsWith(prefix)) return null;

    const key = rest.slice(prefix.length);
    return key.length > 0 ? key : null;
}
