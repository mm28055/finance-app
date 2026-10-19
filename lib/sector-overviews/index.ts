// Every note's full text (~13 MB): server code only. Browser components import from './shared'.
import { SectorOverview, ValuationBlock } from './types';
import { companyCallInfo } from './calls';
import type { BusinessFound, NoteIndex } from './shared';
import { pharmaCdmo } from './pharma-cdmo';
import { software } from './software';
import { chemicals } from './chemicals';
import { consumerDurables } from './consumer-durables';
import { autoRelated } from './auto-related';
import { construction } from './construction';
import { realty } from './realty';
import { foodProducts } from './food-products';
import { retail } from './retail';
import { healthcare } from './healthcare';
import { healthcareDiagnostic } from './healthcare-diagnostic';
import { commercialServices } from './commercial';
import { agrochemicalFertilizers } from './agro';
import { hotelsAndTravels } from './hotels';
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
import { industrialRailway } from './industrial-railway';
import { industrialMachinery } from './industrial-machinery';
import { industrials } from './industrials';
import { electAndRefrac } from './elect-and-refrac';
import { electricalTransformers } from './electrical-transformers';
import { electricalEquipment } from './electrical-equipment';
import { emsElectronics } from './ems-electronics';
import { media } from './media';

export * from './types';
export * from './live-valuation';
export * from './calls';
export type { BusinessFound, NoteIndex } from './shared';

/**
 * Every written overview, keyed by the sector name it belongs to.
 * Add a new file alongside `pharma-cdmo.ts` and register it here.
 */
const OVERVIEWS: SectorOverview[] = [pharmaCdmo, autoRelated, consumerDurables, chemicals, software, construction, realty, foodProducts, retail, healthcare, healthcareDiagnostic, commercialServices, agrochemicalFertilizers, hotelsAndTravels, pharmaOthers, solarPvCellsEpc, vehicles, oil, hospitals, miningMetalsRecycle, platformCos, forging, finance, healthProducts, plastics, utilities, ironSteel, constructionPower, hardware, travelServices, logistics, rubber, tyres, pharma, pharmaApi, pumpsCompEng, packaging, bearings, cables, aerospaceDefence, industrials, industrialRailway, industrialMachinery, electAndRefrac, electricalTransformers, electricalEquipment, emsElectronics, media];

const BY_SECTOR = new Map(OVERVIEWS.map(o => [o.sector.toLowerCase(), o]));

export function getSectorOverview(sector: string): SectorOverview | undefined {
    return BY_SECTOR.get(sector.toLowerCase());
}

/** Every written note, for features that look across all sectors (e.g. the call filter). */
export function allSectorOverviews(): SectorOverview[] {
    return OVERVIEWS;
}

/**
 * The small index the dashboard is sent instead of the notes: which sectors have one, and each
 * company's call with its valuation cut down to that company's own inputs.
 */
export function noteIndex(): NoteIndex {
    const calls: NoteIndex['calls'] = {};
    for (const [name, info] of companyCallInfo(OVERVIEWS)) {
        const v = info.valuation;
        const valuation: ValuationBlock | undefined = v && {
            writtenOn: v.writtenOn,
            ...(v.lender ? { lender: true } : {}),
            inputs: v.inputs[info.key] ? { [info.key]: v.inputs[info.key] } : {},
            myGrowth: info.key in v.myGrowth ? { [info.key]: v.myGrowth[info.key] } : {},
        };
        calls[name] = { call: info.call, key: info.key, valuation };
    }
    return { sectors: OVERVIEWS.map(o => o.sector.toLowerCase()), calls };
}

/** A company's "what the company does" card, wherever it is written (bucket notes included). */
export function businessFor(company: string): BusinessFound | undefined {
    const key = company.trim().toLowerCase();
    const search = (o: SectorOverview): ReturnType<typeof businessFor> => {
        const profile = o.businesses?.profiles.find(p => p.company.trim().toLowerCase() === key);
        if (profile) return { profile, verdict: o.verdicts.find(v => v.company.trim().toLowerCase() === key), valuation: o.valuation };
        for (const b of o.buckets || []) { const hit = search(b.note); if (hit) return hit; }
        return undefined;
    };
    for (const o of OVERVIEWS) { const hit = search(o); if (hit) return hit; }
    return undefined;
}

export function hasSectorOverview(sector: string): boolean {
    return BY_SECTOR.has(sector.toLowerCase());
}
