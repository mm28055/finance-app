// Every note's full text (~13 MB): server code only. Browser components import from './shared'.
import { SectorOverview, ValuationBlock } from './types';
import { companyCallInfo } from './calls';
import { liveSeries, liveValuationBlock, type LiveStore } from './live-metrics';
import liveStore from './live-metrics.json';
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

const LIVE = liveStore as unknown as LiveStore;

/**
 * What the sector page shows: the charts and the valuation section only, with the chart figures
 * and the valuation's net debt and operating profit rebuilt from the filed accounts
 * (scripts/sync-sector-charts.ts). The written analysis and the company profiles stay in the
 * note files but are not sent.
 */
function chartsView(o: SectorOverview): SectorOverview {
    const live = liveSeries(o, LIVE);
    return {
        ...o,
        takeaways: undefined,
        moat: undefined,
        businesses: undefined,
        closing: undefined,
        metrics: live?.metrics ?? o.metrics,
        chartsAsOf: live?.latestQuarter ?? undefined,
        valuation: liveValuationBlock(o.valuation, LIVE),
        sections: o.sections.filter(s => s.embed === 'metrics' || s.embed === 'valuation'),
        buckets: o.buckets?.map(b => ({ ...b, note: chartsView(b.note) })),
    };
}

export function getSectorCharts(sector: string): SectorOverview | undefined {
    const o = BY_SECTOR.get(sector.toLowerCase());
    return o && chartsView(o);
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
        const v = liveValuationBlock(info.valuation, LIVE);
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
        if (profile) return { profile, verdict: o.verdicts.find(v => v.company.trim().toLowerCase() === key), valuation: liveValuationBlock(o.valuation, LIVE) };
        for (const b of o.buckets || []) { const hit = search(b.note); if (hit) return hit; }
        return undefined;
    };
    for (const o of OVERVIEWS) { const hit = search(o); if (hit) return hit; }
    return undefined;
}

export function hasSectorOverview(sector: string): boolean {
    return BY_SECTOR.has(sector.toLowerCase());
}
