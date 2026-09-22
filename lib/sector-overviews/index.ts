import { SectorOverview } from './types';
import { pharmaCdmo } from './pharma-cdmo';
import { pharma } from './pharma';
import { pharmaApi } from './pharma-api';
import { pumpsCompEng } from './pumps-comp-eng';
import { pumpsCompEngV2 } from './pumps-comp-eng-v2';
import { packaging } from './packaging';
import { bearings } from './bearings';
import { cables } from './cables';
import { aerospaceDefence } from './aerospace-defence';
import { industrialManufacturing } from './industrial-manufacturing';
import { industrialRailway } from './industrial-railway';
import { industrialMachinery } from './industrial-machinery';
import { industrialProducts } from './industrial-products';
import { electAndRefrac } from './elect-and-refrac';
import { electricalTransformers } from './electrical-transformers';
import { electricalEquipment } from './electrical-equipment';
import { emsElectronics } from './ems-electronics';

export * from './types';

/**
 * Every written overview, keyed by the sector name it belongs to.
 * Add a new file alongside `pharma-cdmo.ts` and register it here.
 */
const OVERVIEWS: SectorOverview[] = [pharmaCdmo, pharma, pharmaApi, pumpsCompEng, packaging, bearings, cables, aerospaceDefence, industrialManufacturing, industrialProducts, industrialRailway, industrialMachinery, electAndRefrac, electricalTransformers, electricalEquipment, emsElectronics];

const BY_SECTOR = new Map(OVERVIEWS.map(o => [o.sector.toLowerCase(), o]));

export function getSectorOverview(sector: string): SectorOverview | undefined {
    return BY_SECTOR.get(sector.toLowerCase());
}

export function hasSectorOverview(sector: string): boolean {
    return BY_SECTOR.has(sector.toLowerCase());
}

/**
 * Rewrites shown beside the published note so the two can be compared.
 * The sector page offers a switch whenever a sector has one.
 */
const DRAFTS = new Map([pumpsCompEngV2].map(o => [o.sector.toLowerCase(), o]));

export function getSectorOverviewDraft(sector: string): SectorOverview | undefined {
    return DRAFTS.get(sector.toLowerCase());
}
