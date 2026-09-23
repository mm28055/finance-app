import { SectorOverview } from './types';
import { pharmaCdmo } from './pharma-cdmo';
import { pharmaOthers } from './pharma-others';
import { solarPvCellsEpc } from './solar';
import { vehicles } from './vehicles';
import { oil } from './oil';
import { hospitals } from './hospitals';
import { miningMetalsRecycle } from './mining';
import { platformCos } from './platform';
import { forging } from './forging';
import { finance } from './finance';
import { healthProducts } from './health-products';
import { plastics } from './plastics';
import { utilities } from './utilities';
import { ironSteel } from './iron-steel';
import { constructionPower } from './construction-power';
import { hardware } from './hardware';
import { travelServices } from './travel-services';
import { logistics } from './logistics';
import { rubber } from './rubber';
import { tyres } from './tyres';
import { pharma } from './pharma';
import { pharmaApi } from './pharma-api';
import { pumpsCompEng } from './pumps-comp-eng';
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
export * from './live-valuation';

/**
 * Every written overview, keyed by the sector name it belongs to.
 * Add a new file alongside `pharma-cdmo.ts` and register it here.
 */
const OVERVIEWS: SectorOverview[] = [pharmaCdmo, pharmaOthers, solarPvCellsEpc, vehicles, oil, hospitals, miningMetalsRecycle, platformCos, forging, finance, healthProducts, plastics, utilities, ironSteel, constructionPower, hardware, travelServices, logistics, rubber, tyres, pharma, pharmaApi, pumpsCompEng, packaging, bearings, cables, aerospaceDefence, industrialManufacturing, industrialProducts, industrialRailway, industrialMachinery, electAndRefrac, electricalTransformers, electricalEquipment, emsElectronics];

const BY_SECTOR = new Map(OVERVIEWS.map(o => [o.sector.toLowerCase(), o]));

export function getSectorOverview(sector: string): SectorOverview | undefined {
    return BY_SECTOR.get(sector.toLowerCase());
}

export function hasSectorOverview(sector: string): boolean {
    return BY_SECTOR.has(sector.toLowerCase());
}
