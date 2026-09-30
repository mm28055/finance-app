// Makes company cards open quickly.
// - warmCardRoutes(): wakes the server functions behind a card (detail, price chart, holders) and
//   their database connection, so the first card opened after a quiet spell is not slowed by that.
// - prefetchDetail(): starts loading a card's details while the pointer is over its row, so most of
//   the wait is over by the time of the click. A prefetched answer is used once, within two minutes.

const FRESH_MS = 2 * 60 * 1000;
const pending = new Map<string, { at: number; p: Promise<any> }>();

function load(id: string) {
    return fetch(`/api/companies/${id}/detail`).then(async res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    });
}

export function prefetchDetail(id: string) {
    const hit = pending.get(id);
    if (hit && Date.now() - hit.at < FRESH_MS) return;
    const p = load(id);
    p.catch(() => pending.delete(id));
    pending.set(id, { at: Date.now(), p });
}

/** The card's details: the prefetched answer if there is a fresh one, otherwise a new request. */
export function takeDetail(id: string): Promise<any> {
    const hit = pending.get(id);
    pending.delete(id);
    return hit && Date.now() - hit.at < FRESH_MS ? hit.p : load(id);
}

export function warmCardRoutes() {
    for (const path of ['detail', 'history', 'holders']) {
        fetch(`/api/companies/warm/${path}?warm=1`, { cache: 'no-store' }).catch(() => {});
    }
}
