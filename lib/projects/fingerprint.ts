// A short hash of the facts a capacity picture was drawn from: the capacity entry, the
// company's projects (all fields but updatedOn and status-free milestones' ticks) and its
// project milestones' wording. A picture whose fingerprint no longer matches is stale.
import type { Capacity, Project } from './types';
import type { Checkpoint } from '../checkpoints/types';

function hash(s: string): string {
    let h1 = 0x811c9dc5, h2 = 5381;
    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i);
        h1 = Math.imul(h1 ^ c, 16777619);
        h2 = Math.imul(h2, 33) ^ c;
    }
    return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

export function pictureFingerprint(capacity: Capacity | undefined, projects: Project[], checkpoints: Checkpoint[]): string {
    const ids = new Set(projects.map(p => p.id));
    const facts = {
        capacity: capacity ? { ...capacity } : null,
        projects: projects.map(({ updatedOn: _u, ...rest }) => rest),
        milestones: checkpoints.filter(c => c.project && ids.has(c.project)).map(c => [c.id, c.project, c.text, c.due]),
    };
    return hash(JSON.stringify(facts));
}
