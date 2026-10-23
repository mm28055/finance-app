// Capital projects by company, from lib/projects/projects.json (kept by the weekly review).
import store from './projects.json';
import capacityStore from './capacity.json';
import pictureStore from './pictures.json';
import { checkpointsFor } from '../checkpoints';
import { pictureFingerprint } from './fingerprint';
import type { Project, Capacity, CapacityPictureData } from './types';

export * from './types';
export { pictureFingerprint } from './fingerprint';

export const PROJECTS = (store as { projects: Project[] }).projects;

export function projectsFor(company: string): Project[] {
    const key = company.trim().toLowerCase();
    return PROJECTS.filter(p => p.company.trim().toLowerCase() === key);
}

const CAPACITY = (capacityStore as { capacity: Capacity[] }).capacity;

export function capacityFor(company: string): Capacity | undefined {
    const key = company.trim().toLowerCase();
    return CAPACITY.find(c => c.company.trim().toLowerCase() === key);
}

export const PICTURES = (pictureStore as unknown as { pictures: CapacityPictureData[] }).pictures;

/** The company's capacity picture, only while it still matches the facts it was drawn from. */
export function pictureFor(company: string): CapacityPictureData | undefined {
    const key = company.trim().toLowerCase();
    const pic = PICTURES.find(p => p.company.trim().toLowerCase() === key);
    if (!pic) return undefined;
    const now = pictureFingerprint(capacityFor(company), projectsFor(company), checkpointsFor(company));
    return pic.fingerprint === now ? pic : undefined;
}
