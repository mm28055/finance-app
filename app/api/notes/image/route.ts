import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { randomUUID } from 'crypto';
import { authOptions } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/transcript-storage';
import { BUCKET_NAME } from '@/lib/storage';

// POST (signed-in owner only): an image pasted into a note, stored in the site's file storage
// under _notes/ and returned as a public link that the note text refers to.
const MAX_BYTES = 8 * 1024 * 1024;
const TYPES: Record<string, string> = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/gif': 'gif' };

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    if (!supabaseAdmin) return NextResponse.json({ error: 'File storage is not configured' }, { status: 500 });

    const form = await req.formData();
    const file = form.get('file');
    if (!(file instanceof File)) return NextResponse.json({ error: 'No image' }, { status: 400 });
    const ext = TYPES[file.type];
    if (!ext) return NextResponse.json({ error: 'Only PNG, JPEG, WebP or GIF images' }, { status: 400 });
    if (file.size > MAX_BYTES) return NextResponse.json({ error: 'Image is larger than 8 MB' }, { status: 400 });

    const key = `_notes/${new Date().toISOString().slice(0, 7)}/${randomUUID()}.${ext}`;
    const { error } = await supabaseAdmin.storage.from(BUCKET_NAME)
        .upload(key, Buffer.from(await file.arrayBuffer()), { contentType: file.type, upsert: false });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    const { data } = supabaseAdmin.storage.from(BUCKET_NAME).getPublicUrl(key);
    return NextResponse.json({ url: data.publicUrl });
}
