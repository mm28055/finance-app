// Capital projects by company, from lib/projects/projects.json (kept by the weekly review).
import store from './projects.json';
import capacityStore from './capacity.json';
import type { Project, Capacity } from './types';

export * from './types';

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
