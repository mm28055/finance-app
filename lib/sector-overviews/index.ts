import { SectorOverview } from './types';
import { pharmaCdmo } from './pharma-cdmo';
import { pharma } from './pharma';
import { pharmaApi } from './pharma-api';
import { pumpsCompEng } from './pumps-comp-eng';
import { packaging } from './packaging';
import { bearings } from './bearings';
import { cables } from './cables';
import { aerospaceDefence } from './aerospace-defence';
import { industrialManufacturing } from './industrial-manufacturing';

export * from './types';

/**
 * Every written overview, keyed by the sector name it belongs to.
 * Add a new file alongside `pharma-cdmo.ts` and register it here.
 */
const OVERVIEWS: SectorOverview[] = [pharmaCdmo, pharma, pharmaApi, pumpsCompEng, packaging, bearings, cables, aerospaceDefence, industrialManufacturing];

const BY_SECTOR = new Map(OVERVIEWS.map(o => [o.sector.toLowerCase(), o]));

export function getSectorOverview(sector: string): SectorOverview | undefined {
    return BY_SECTOR.get(sector.toLowerCase());
}

export function hasSectorOverview(sector: string): boolean {
    return BY_SECTOR.has(sector.toLowerCase());
}
