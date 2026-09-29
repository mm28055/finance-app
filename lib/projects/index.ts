// Capital projects by company, from lib/projects/projects.json (kept by the weekly review).
import store from './projects.json';
import type { Project } from './types';

export * from './types';

export const PROJECTS = (store as { projects: Project[] }).projects;

export function projectsFor(company: string): Project[] {
    const key = company.trim().toLowerCase();
    return PROJECTS.filter(p => p.company.trim().toLowerCase() === key);
}
