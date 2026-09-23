import { SectorOverview } from './types';
import { solarBusinesses } from './solar-businesses';
import { solarValuationInputs } from './card-data/solar';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const EPC = 'EPC and developers — building solar and battery plants';
const CELLS = 'Cell makers — the scarce part of the chain';
const MODULES = 'Module assemblers — the crowded part, now building cells';

export const solarPvCellsEpc: SectorOverview = {
    sector: 'Solar PV Cells EPC',
    title: 'Solar PV Cells EPC',
    format: 'ranked',
    businesses: solarBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        // Waaree Renewables is left out of the live table: the dashboard carries its parent's market value.
        inputs: solarValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Waaree Renewables': 15,
            'Oriana Power': 15,
            'Emmvee Photovoltaic Power Ltd': 12,
            'Alpex Solar': 10,
            'Websol Energy System Ltd': 0,
            'Solex Energy': 5,
            'Australian Prem': 5,
            'Vikram Solar': 0,
            'Insolation Energy': 5,
            'Saatvik Green': 5,
        },
    },
    standfirst:
        "Ten solar companies across the chain. Two build solar and battery plants for others (Waaree Renewables, the Waaree group's EPC arm, and Oriana Power). Two make solar cells, the scarce part of the chain in India (Emmvee and Websol). Six assemble modules and are rushing to build cell plants (Vikram, Saatvik, Insolation, Solex, Alpex and Australian Premium Solar). After a boom, India now has several times more module capacity than it installs, while Indian-made cells are short, so profits are shifting from module assemblers to cell makers and plant builders. Every chart uses filed results; several of these companies listed only in the last two years.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), all consolidated. Oriana and Australian Premium Solar report half-yearly, so their figures sit in the Q2 and Q4 columns. Operating profit ÷ sales.',
            note: 'The split that matters: cell makers earn 34–47% (Emmvee, Websol) because Indian cells are scarce; EPC firms 19–23%; plain module assemblers have fallen to 7–15% as module capacity floods the market.',
            values: {
                'Waaree Renewables': [20, 20, 19, 19, 19],
                'Oriana Power': [null, 23, null, 21, null],
                'Emmvee Photovoltaic Power Ltd': [34, 35, 36, 33, 35],
                'Alpex Solar': [17, 15, 14, 13, 15],
                'Websol Energy System Ltd': [47, 43, 41, 36, 34],
                'Solex Energy': [16, 12, 8, 11, 11],
                'Australian Prem': [null, 14, null, 13, null],
                'Vikram Solar': [21, 21, 19, 16, 8],
                'Insolation Energy': [16, 11, 13, 14, 10],
                'Saatvik Green': [19, 14, 12, 7, 7],
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Blank where a newly listed company did not file the quarter a year earlier.',
            note: 'Growth has been extraordinary as India installs record solar capacity, but it is slowing: Saatvik’s revenue fell 44% in Q1 and Solex’s was flat.',
            values: {
                'Waaree Renewables': [156, 48, 136, 131, 53],
                'Oriana Power': [null, 117, null, 64, null],
                'Emmvee Photovoltaic Power Ltd': [null, 181, 118, 62, 51],
                'Alpex Solar': [394, 178, 245, 106, 32],
                'Websol Energy System Ltd': [null, null, 78, 132, 70],
                'Solex Energy': [null, 18, 136, 248, 0],
                'Australian Prem': [null, 84, null, 47, null],
                'Vikram Solar': [80, 94, 8, 22, 38],
                'Insolation Energy': [null, null, 77, 100, 105],
                'Saatvik Green': [272, 62, 143, 75, -44],
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed.',
            note: 'Returns of 30–80% are far above what manufacturing normally earns; they reflect a boom in demand and a shortage of Indian cells, not a permanent level. Waaree Renewables, an EPC firm, needs little capital.',
            values: {
                'Waaree Renewables': [23, 84, 100, 82, 83],
                'Oriana Power': [38, 26, 38, 42, 40],
                'Emmvee Photovoltaic Power Ltd': [9, 6, 7, 28, 45],
                'Alpex Solar': [7, 14, 26, 51, 44],
                'Websol Energy System Ltd': [null, null, null, null, 63],
                'Solex Energy': [null, null, null, 30, 36],
                'Australian Prem': [null, null, null, 71, 56],
                'Vikram Solar': [2, 13, 22, 26, 31],
                'Insolation Energy': [null, 20, 48, 35, 22],
                'Saatvik Green': [null, null, 51, 52, 33],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Blank where not filed.',
            note: 'Emmvee’s cycle has risen from 94 to 159 days as its stock grew; Waaree Renewables collects from clients about as fast as it pays suppliers.',
            values: {
                'Waaree Renewables': [-54, 9, 3, 26, 19],
                'Oriana Power': [72, 99, 75, 146, 89],
                'Emmvee Photovoltaic Power Ltd': [94, 93, 108, 136, 159],
                'Alpex Solar': [91, 97, 65, 53, 74],
                'Websol Energy System Ltd': [null, null, null, 8, 113],
                'Solex Energy': [null, null, 47, 64, 33],
                'Australian Prem': [null, null, 5, -2, 43],
                'Vikram Solar': [66, 152, 117, 75, 13],
                'Insolation Energy': [52, 78, 48, 32, 66],
                'Saatvik Green': [null, 56, 75, 88, 69],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Oriana, Vikram and Waaree Renewables convert well; Alpex, Saatvik, Australian Premium Solar and Insolation have turned little of their boom-year profit into cash.',
            values: {
                'Waaree Renewables': [179, 77, 62, 97, 45, 65],
                'Oriana Power': [75, 84, 2, 123, 85, 88],
                'Emmvee Photovoltaic Power Ltd': [124, 105, 195, 87, 12, 46],
                'Alpex Solar': [-20, -58, -14, 55, -36, -12],
                'Websol Energy System Ltd': [null, null, null, 66, 59, 62],
                'Solex Energy': [null, null, 7, -64, 109, 55],
                'Australian Prem': [null, null, -56, 42, -5, 9],
                'Vikram Solar': [341, 104, 38, 59, 73, 73],
                'Insolation Energy': [64, -5, 37, 70, -25, 14],
                'Saatvik Green': [null, 33, 30, 13, -5, 6],
            },
            cellNotes: {
                'Emmvee Photovoltaic Power Ltd': 'FY26 operating cash was only 12% of operating profit as stock and receivables built up.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all five years.',
            note: 'Only Waaree Renewables, Vikram, Websol and Oriana have produced free cash over their filed years. The cell plants now being built will absorb far more.',
            values: {
                'Waaree Renewables': [22.8, -5.1, 13.4, 12.6, 5.0, 8.0],
                'Oriana Power': [-0.8, -23.7, -29.2, 15.2, 10.1, 5.5],
                'Emmvee Photovoltaic Power Ltd': [2.7, -62.5, -46.3, -15.5, -9.0, -17.1],
                'Alpex Solar': [-1.2, -6.2, -4.1, 1.4, -20.2, -12.4],
                'Websol Energy System Ltd': [null, null, null, 23.8, 7.7, 13.3],
                'Solex Energy': [null, null, -1.6, -17.2, 1.0, -3.9],
                'Australian Prem': [null, null, -12.5, 5.5, -7.2, -3.5],
                'Vikram Solar': [3.2, 3.1, 3.2, 5.4, 8.0, 5.3],
                'Insolation Energy': [2.8, -10.8, 1.8, 2.1, -24.3, -10.7],
                'Saatvik Green': [null, -3.1, -1.5, -6.7, -13.8, -9.6],
            },
        },
        {
            key: 'leverage',
            label: 'Net debt ÷ operating profit',
            unit: 'x',
            periods: FY,
            scale: 'diverging',
            invert: true,
            legend: ['More debt', 'Net cash'],
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Waaree Renewables, Emmvee, Vikram, Saatvik and Websol.',
            note: 'Below zero means more cash than debt. Vikram, Waaree Renewables and Emmvee hold net cash; Saatvik carries the most debt, and Emmvee is about to borrow ₹3,300cr for its cell plant.',
            values: {
                'Waaree Renewables': [0.0, 0.3, -0.4, -0.7, -0.4],
                'Oriana Power': [2.3, 3.6, 1.4, 0.9, 0.6],
                'Emmvee Photovoltaic Power Ltd': [3.9, 8.3, 7.7, 2.1, 0.0],
                'Alpex Solar': [4.0, 2.8, 0.2, 0.3, 1.2],
                'Websol Energy System Ltd': [null, null, null, 0.2, 0.0],
                'Solex Energy': [null, null, 3.4, 1.9, 1.2],
                'Australian Prem': [null, null, -1.2, -0.4, 0.1],
                'Vikram Solar': [9.6, 3.7, 1.8, -0.1, -1.2],
                'Insolation Energy': [1.6, 2.4, 0.5, -1.3, 1.3],
                'Saatvik Green': [null, 9.3, 1.7, 1.5, 1.6],
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all five years.',
            note: 'Emmvee spent about 70% of its sales on plant in FY23 and FY24; the module makers now building cell lines (Alpex, Insolation, Saatvik) are raising spending sharply.',
            values: {
                'Waaree Renewables': [3.7, 23.6, 1.3, 6.3, 3.7, 5.1],
                'Oriana Power': [8.1, 35.6, 29.8, 14.2, 8.4, 13.5],
                'Emmvee Photovoltaic Power Ltd': [20.5, 72.0, 70.9, 42.3, 12.9, 30.2],
                'Alpex Solar': [0.6, 2.6, 2.9, 7.4, 14.9, 10.8],
                'Websol Energy System Ltd': [null, null, null, 8.3, 18.5, 14.9],
                'Solex Energy': [null, null, 2.2, 10.1, 11.4, 9.8],
                'Australian Prem': [null, null, 9.1, 0.0, 6.5, 4.6],
                'Vikram Solar': [8.4, 6.3, 2.9, 3.1, 5.9, 5.1],
                'Insolation Energy': [1.4, 10.4, 2.3, 6.4, 20.9, 12.4],
                'Saatvik Green': [null, 3.9, 5.5, 8.7, 13.2, 10.4],
            },
        },
        {
            key: 'turnover',
            more: true,
            label: 'Sales per ₹1 of fixed assets',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            source: 'Filed accounts (Screener): sales ÷ net fixed assets at year end.',
            note: 'Module assembly needs little plant (sales 5–17 times fixed assets); cell lines need far more (Emmvee and Websol about 2 times).',
            values: {
                'Waaree Renewables': [2.2, 4.7, 5.6, 8.1, 12.2],
                'Oriana Power': [4.4, 4.7, 2.8, 3.7, 5.8],
                'Emmvee Photovoltaic Power Ltd': [1.1, 1.9, 3.3, 1.1, 1.9],
                'Alpex Solar': [9.8, 11.5, 13.3, 10.0, 13.2],
                'Websol Energy System Ltd': [null, null, null, 1.8, 2.1],
                'Solex Energy': [null, null, 6.8, 6.0, 4.8],
                'Australian Prem': [null, null, 7.9, 14.6, 10.6],
                'Vikram Solar': [3.2, 3.2, 5.0, 6.4, 4.5],
                'Insolation Energy': [23.9, 7.3, 16.0, 17.3, 4.1],
                'Saatvik Green': [null, 12.2, 9.3, 6.7, 10.1],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'chain', label: 'Position in the chain', description: 'Making cells (scarce) or building plants, rather than assembling modules (crowded).' },
            { key: 'orders', label: 'Order book', description: 'Contracted work that covers the next year or more.' },
            { key: 'cost', label: 'Cost and scale', description: 'Plant size, utilisation and technology that keep cost per watt low.' },
            { key: 'price', label: 'Pricing power', description: 'Whether margins held as module prices fell.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, debt for new plants, and how the promoters behave.' },
        ],
        rows: [
            { company: 'Waaree Renewables', trend: 'stable', trendNote: '₹5,300cr order book and a 37 GW pipeline; margin guided down to about 15% after buying a transmission firm.',
                grades: { chain: { grade: 'A', note: 'EPC: gains from cheaper modules' }, orders: { grade: 'A', note: '₹5,300cr, 12–15 months of work' }, cost: { grade: 'B', note: 'Little capital needed' }, price: { grade: 'B', note: 'Margins 19–20%, guided to about 15%' }, cash: { grade: 'B', note: 'Net cash; 30–40% of orders from group companies' } } },
            { company: 'Oriana Power', trend: 'widening', trendNote: 'About ₹6,800cr order book; battery storage now about 40% of FY27 revenue.',
                grades: { chain: { grade: 'A', note: 'Builds and sells plants for companies' }, orders: { grade: 'A', note: 'About ₹6,800cr' }, cost: { grade: 'B', note: '835 MWp delivered' }, price: { grade: 'A', note: 'Margins 21–23%' }, cash: { grade: 'C', note: '88% cash conversion, but 100+ subsidiaries and late filings' } } },
            { company: 'Emmvee Photovoltaic Power Ltd', trend: 'widening', trendNote: 'Cells running at 83%; cell capacity rising from 2.94 GW to 8.9 GW by the end of FY27.',
                grades: { chain: { grade: 'A', note: 'Makes its own cells' }, orders: { grade: 'A', note: '9.9 GW' }, cost: { grade: 'B', note: 'Modules only 45% used' }, price: { grade: 'A', note: 'Margins 33–36%' }, cash: { grade: 'C', note: 'FY26 cash conversion 12%; ₹3,300cr of new debt' } } },
            { company: 'Alpex Solar', trend: 'widening', trendNote: 'A 2.2 GW cell line opening in September after a fire; guides 35–40% cell margins.',
                grades: { chain: { grade: 'B', note: 'Cells starting now' }, orders: { grade: 'B', note: 'Solar pumps ₹350cr ordered' }, cost: { grade: 'C', note: 'About 3.6 GW of modules at 65–70%' }, price: { grade: 'B', note: 'Margins 13–17%' }, cash: { grade: 'D', note: 'Negative five-year cash conversion' } } },
            { company: 'Websol Energy System Ltd', trend: 'narrowing', trendNote: 'Margin down from 47% to 34% as cell prices eased; big expansion awaiting land.',
                grades: { chain: { grade: 'A', note: '1.2 GW of cells, 92% used' }, orders: { grade: 'C', note: '₹1,278cr' }, cost: { grade: 'C', note: 'Small and older lines' }, price: { grade: 'B', note: 'Margins falling but still 34%' }, cash: { grade: 'C', note: 'Promoters hold 30%; pledges cut' } } },
            { company: 'Solex Energy', trend: 'stable', trendNote: '₹3,400cr order book; a 2.2 GW cell plant by the end of 2027, mostly on debt.',
                grades: { chain: { grade: 'C', note: 'Modules; cells from 2027' }, orders: { grade: 'B', note: '₹3,400cr' }, cost: { grade: 'C', note: 'About 55% utilisation assumed' }, price: { grade: 'C', note: 'Profit margin about 3%' }, cash: { grade: 'C', note: 'Share sale dropped; more debt' } } },
            { company: 'Australian Prem', trend: 'narrowing', trendNote: 'Receivables about ₹160cr, mostly from government solar-pump schemes.',
                grades: { chain: { grade: 'C', note: 'Modules and pumps' }, orders: { grade: 'C', note: 'About ₹220cr' }, cost: { grade: 'C', note: '800 MW rising to 1.2 GW' }, price: { grade: 'B', note: 'Prices reset monthly' }, cash: { grade: 'D', note: 'Cash tied up in pump receivables' } } },
            { company: 'Vikram Solar', trend: 'narrowing', trendNote: 'Margin down from 21% to 8%; shelved its FY27 outlook until the half-year.',
                grades: { chain: { grade: 'C', note: 'Mostly modules; 9 GW of cells from Q4 FY27' }, orders: { grade: 'A', note: '7.9 GW' }, cost: { grade: 'B', note: '15.5 GW of modules' }, price: { grade: 'D', note: 'Costs up ₹1.86 a watt' }, cash: { grade: 'B', note: 'Net cash now; ₹5,000cr a year of capex coming' } } },
            { company: 'Insolation Energy', trend: 'narrowing', trendNote: 'FY27 capex of ₹2,500cr, more than its market value; receivables up 156%.',
                grades: { chain: { grade: 'C', note: 'Modules; 4.5 GW of cells from Q4 FY27' }, orders: { grade: 'C', note: '1.6–1.8 GW' }, cost: { grade: 'C', note: '5.5 GW of modules' }, price: { grade: 'C', note: '85% plain modules' }, cash: { grade: 'D', note: 'Five-year cash conversion 14%' } } },
            { company: 'Saatvik Green', trend: 'narrowing', trendNote: 'Q1 sales of 334 MW against 1,050 MW in Q4; margin down to 7%.',
                grades: { chain: { grade: 'C', note: 'Modules; cells planned in Odisha' }, orders: { grade: 'A', note: '6.35 GW, about ₹8,200cr' }, cost: { grade: 'C', note: '4.8 GW of modules' }, price: { grade: 'D', note: 'Mostly fixed-price utility orders' }, cash: { grade: 'D', note: 'Interim CFO; net debt heading to ₹2,200–2,400cr' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Waaree Renewables.** The Waaree group's EPC arm builds solar and battery plants, needs little capital, earns over 80% on it and holds net cash, with a ₹5,300cr order book and a 37 GW pipeline. Cheaper modules help it. Its margin is guided down from about 19% to 15% and 30–40% of its orders come from group companies. On Screener's price it asks for less growth than I expect (the dashboard carries its parent's figures).",
                "**Follow Oriana, Emmvee and Alpex.** Oriana builds solar and battery plants for companies and converts most of its profit into cash, but it is SME-listed with over 100 subsidiaries. Emmvee is the strongest cell maker here, earning 33–36% with a 9.9 GW order book, but it is borrowing ₹3,300cr for a new plant just as more cells arrive. Alpex's 2.2 GW cell line opens this month; it guides 35–40% cell margins but has never converted its profit into cash.",
                "**Wait on Websol, Solex, Australian Premium and Vikram; pass on Insolation and Saatvik.** Websol's cell margins are falling as prices ease. Vikram shelved its FY27 outlook as its margin fell from 21% to 8%. Insolation plans ₹2,500cr of capex this year, more than its market value, and Saatvik's sales fell by two-thirds from Q4 to Q1 while it borrows for cells.",
                "**Two things to hold onto before reading the rest.** First, **this is the top of a boom, and the glut is in modules**: India has about 217 GW of module capacity against 45–50 GW a year of installations, so plain module margins are collapsing. Second, **cell scarcity is temporary**: Indian cell capacity is about 31 GW today, and every module maker here is building cells, so today's 34–47% cell margins will not last either. The low P/Es reflect earnings that are likely to fall.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. Several companies listed recently or report half-yearly, so some cells are blank. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "India installed record solar capacity in 2025–26, and manufacturers raced to build factories. Module capacity reached about 217 GW by August 2026, several times the 45–50 GW a year the country installs; cell capacity was only about 31 GW. From June 2026 government-linked projects must use Indian-made cells (the ALMM List-II rule), which pushed the price of modules made with Indian cells well above the rest.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Polysilicon and wafers (almost all imported from China) → **cells** (Emmvee, Websol) → **modules** (the six assemblers) → **EPC and developers** (Waaree Renewables, Oriana) → utilities and companies buying solar power. **The profit sits wherever capacity is shortest**: today in Indian cells, tomorrow probably in wafers, and never for long in modules.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India's renewable targets, companies buying green power to cut their bills, rooftop and farm-pump schemes, and battery storage now being added to solar plants. Exports to the US have been hit by tariffs and trade cases.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Policy creates the profits and can remove them.** The Indian-cell rule, import duties and approved-maker lists protect domestic makers; any change moves margins overnight. Companies disagree on when the cell rule applies to many projects (December 2026 or January 2027), and developers are waiting, which slowed orders in Q1.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Waaree Renewables** and **Oriana** on winning EPC work and battery projects; **Emmvee** and **Websol** on the Indian-cell premium lasting; **Alpex**, **Vikram**, **Insolation**, **Solex** and **Saatvik** on getting their cell plants running before the premium fades; **Australian Premium** on collecting from government pump schemes. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['EPC and developers', 'Waaree Renewables, Oriana', '19–23%', '40–83%', '**65–88%**'],
                        ['Cell makers', 'Emmvee, Websol', '33–47%', '45–63%', '**46–62%**'],
                        ['Module assemblers', 'Vikram, Saatvik, Insolation, Solex, Alpex, Australian Premium', '7–21%', '22–56%', '**−12% to 73%**'],
                    ],
                },
                {
                    caption: 'Capacity today and planned (company calls, Q1 FY27)',
                    columns: ['Company', 'Modules', 'Cells', 'Plans'],
                    rows: [
                        ['Emmvee Photovoltaic Power Ltd', '10.3 GW (45% used)', '2.94 GW (83% used)', '16.3 GW modules, 8.9 GW cells by end-FY27'],
                        ['Vikram Solar', '15.5 GW', 'None yet', '9 GW cells from Q4 FY27; wafers by FY29'],
                        ['Saatvik Green', '4.8 GW', 'None yet', '2.4 GW cells then 3.6 GW more in Odisha'],
                        ['Insolation Energy', '5.5 GW', 'None yet', '4.5 GW cells from Q4 FY27'],
                        ['Solex Energy', '4 GW', 'None yet', '2.2 GW cells by end-2027'],
                        ['Alpex Solar', 'About 3.6 GW (65–70% used)', '2.2 GW opening September 2026', '—'],
                        ['Websol Energy System Ltd', 'Yes (81% used)', '1.2 GW (92% used)', '4 GW cells and modules planned; land awaited'],
                        ['Australian Prem', '800 MW', 'None', '1.2 GW modules from August 2026'],
                    ],
                    note: 'Indian cell capacity is about 31 GW in total, so the plans above would add a large share of it within two years.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Temporary but real: owning cells',
                    text: "**Emmvee** earns ₹6–6.5 a watt on cells and ₹8.5–9 on Indian-cell modules, against ₹2–2.5 on standard modules. **Websol** runs its 1.2 GW cell line at 92%. The advantage lasts only until the cell plants now being built come on.",
                },
                {
                    label: 'Lasting if run well: building plants',
                    text: "**Waaree Renewables** and **Oriana** earn a margin on building, not on the price of panels, so the glut helps them. Their edge is execution record and client relationships.",
                },
                {
                    label: 'Wearing: assembling modules',
                    text: "**Saatvik**, **Insolation**, **Solex** and **Vikram** assemble modules that dozens of rivals also make; Vikram's costs rose ₹1.86 a watt and Saatvik's utility orders are mostly fixed-price. Each is spending heavily to move into cells.",
                },
                {
                    label: 'Small and local',
                    text: "**Australian Premium** and **Alpex** sell modules and solar pumps into government schemes, where the price is set by tender and payment is slow.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Waaree Energies**, **Premier Energies**, **Adani** and **Tata Power** in cells and modules; **Sterling and Wilson**, **KPI Green** and **Gensol** in EPC; Chinese makers for wafers and for export markets.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Almost none of them are: they reflect a shortage of Indian cells and a boom in installations.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Protected for now: cell makers',
                    text: "**Emmvee** has held 33–36%, with over half of Q1 sales using its own cells. **Websol** fell from 47% to 34% as cell prices eased to 12.5 cents a watt; management expects about 34% for one to two years.",
                },
                {
                    label: 'Steady: EPC',
                    text: "**Waaree Renewables** has earned 19–20% but guides about 15% after buying a transmission firm with thinner margins. **Oriana** earns 21–23%.",
                },
                {
                    label: 'Falling: plain module makers',
                    text: "**Vikram** fell from 21% to 8% in a year and **Saatvik** from 19% to 7%; **Insolation** is 10–16% with 85% of its sales in plain modules; **Solex** made a profit margin of about 3% in Q1.",
                },
                {
                    label: 'Hoped for: new cell lines',
                    text: "**Alpex** guides 35–40% on cells once its 2.2 GW line runs; **Saatvik** guides 12% for FY27 against 7% in Q1. Both depend on cell prices holding while capacity multiplies.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Insolation**'s receivables rose 156% to ₹280cr; **Australian Premium** has about ₹160cr owed, mostly by pump schemes; **Emmvee** converted only 12% of FY26 operating profit into cash.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Vikram**'s cycle fell from 152 to 13 days; **Waaree Renewables** collects about as fast as it pays.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Module makers hold weeks of cells and glass and wait for developers to pay; EPC firms are paid on milestones. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Emmvee Photovoltaic Power Ltd', '6 GW plant ₹5,500cr, with ₹3,300cr of loans at under 8%', 'About net-debt-free at March'],
                        ['Vikram Solar', 'About ₹5,000cr of capex a year in FY27 and FY28, about 70% debt', 'Net cash ₹1,117cr at March'],
                        ['Insolation Energy', 'FY27 capex ₹2,500cr; peak debt about ₹1,500cr', 'Net debt ₹367cr at March'],
                        ['Saatvik Green', 'Odisha plant ₹1,850cr then ₹1,600–1,700cr; net debt peaking at ₹2,200–2,400cr', 'Net debt ₹857cr at March'],
                        ['Solex Energy', '₹1,050cr cell plant (₹700cr debt, ₹350cr convertible notes); share sale dropped', 'Net debt ₹216cr'],
                        ['Alpex Solar', '₹890cr cell line; cell-project debt peaking at ₹350–360cr', 'Net debt ₹387cr'],
                        ['Websol Energy System Ltd', 'Prepaid a ₹110cr loan, releasing pledged promoter shares; ₹270cr line upgrade', 'About net-debt-free'],
                        ['Waaree Renewables', '55% of a transmission firm bought, about 75% debt-funded', 'Net cash ₹244cr at March'],
                        ['Oriana, Australian Premium', 'No Q1 cash figure given (half-yearly reporters)', '—'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised, and my own estimate of earnings growth. **For most of these companies, the question is how far earnings fall from the peak, not how fast they grow.**",
            ],
            points: [
                {
                    label: 'Growth driver: plant building and batteries',
                    text: "**Waaree Renewables** has ₹5,300cr of orders to build over 12–15 months and a 37 GW pipeline (27 GW in India, 10 GW abroad). **Oriana** has about ₹6,800cr of orders and guides 40–50% growth a year, with batteries about 40% of FY27 revenue.",
                },
                {
                    label: 'Growth driver: cells',
                    text: "**Emmvee** targets about ₹2,400cr of operating profit in FY27 as cells triple to 8.9 GW. **Alpex** targets about ₹4,000cr of FY28 revenue from its cell line. **Vikram**, **Insolation**, **Solex** and **Saatvik** each plan 2–9 GW of cells in the next 18 months.",
                },
                {
                    label: 'Growth driver: rooftops and farm pumps',
                    text: "**Australian Premium** and **Alpex** sell into government pump schemes (Alpex has ₹350cr of pump orders), which grow fast but pay slowly.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Emmvee** introduced an operating-profit target and grew its order book to 9.9 GW; **Oriana** keeps delivering 60%-plus growth.",
                },
                {
                    label: 'Cautious',
                    text: "**Websol** gives no revenue guidance; **Waaree Renewables** guides margins down to about 15%.",
                },
                {
                    label: 'Missed or withdrawn',
                    text: "**Vikram** shelved its FY27 outlook until the half-year. **Saatvik** sold 334 MW in Q1 against 1,050 MW in Q4 while guiding 3.5–4 GW for the year.",
                },
                {
                    label: 'Mixed',
                    text: "**Insolation** beat its FY26 revenue guide but raised its cell-plant cost from ₹1,300cr to ₹1,500cr. **Alpex**'s cell line was delayed by a fire.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Waaree Renewables and Oriana to compound earnings at about 15% and Emmvee at about 12%, Alpex at about 10% if its cells run well, and the module makers at about 5% at best.** For **Websol** and **Vikram**, I expect earnings to stall from here as cell and module prices fall.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Waaree Renewables', 'EPC orders; batteries; transmission', '5% / **15%** / 22%'],
                        ['Oriana Power', 'C&I plants; batteries; plant sales', '5% / **15%** / 25%'],
                        ['Emmvee Photovoltaic Power Ltd', 'Cells tripling; premium fading', '0% / **12%** / 20%'],
                        ['Alpex Solar', 'New cell line; pumps', '−5% / **10%** / 20%'],
                        ['Solex Energy', 'Cells from 2027; thin margins', '−10% / **5%** / 15%'],
                        ['Australian Prem', 'Pumps; more module capacity', '−10% / **5%** / 15%'],
                        ['Insolation Energy', 'Cells from Q4 FY27; heavy debt', '−15% / **5%** / 15%'],
                        ['Saatvik Green', 'Cells in Odisha; order book', '−15% / **5%** / 15%'],
                        ['Websol Energy System Ltd', 'Cell prices falling; expansion delayed', '−15% / **0%** / 10%'],
                        ['Vikram Solar', 'Module margins squeezed; cells from Q4 FY27', '−15% / **0%** / 12%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Waaree Renewables', 'Margin about 15%', 'Transmission firm bought (55%)', '**On track**'],
                        ['Oriana Power', 'Growth 40–50% a year', 'Batteries and own plants', '**Delivered**'],
                        ['Emmvee Photovoltaic Power Ltd', 'FY27 operating profit about ₹2,400cr', '₹5,500cr for 6 GW', '**On track**'],
                        ['Alpex Solar', 'Cell margin 35–40%; FY28 revenue about ₹4,000cr', '₹890cr cell line', '**Delayed** by a fire'],
                        ['Websol Energy System Ltd', 'Margin about 34%; no revenue guide', '₹270cr line upgrade', '**Mixed**: margins falling'],
                        ['Solex Energy', 'Profit margin 5–6%', '₹1,050cr cell plant', '**Behind**: Q1 at 3%'],
                        ['Australian Prem', 'Pump orders; 1.2 GW modules', 'Small', '**Mixed**: receivables up'],
                        ['Vikram Solar', 'Outlook shelved until the half-year', 'About ₹5,000cr a year', '**Walked back**'],
                        ['Insolation Energy', 'Margin 14–15%; above 20% with cells', '₹2,500cr in FY27', '**Mixed**: capex up'],
                        ['Saatvik Green', '3.5–4 GW; ₹6,000cr revenue; 12% margin', '₹1,850cr, then ₹1,600–1,700cr', '**Behind**: Q1 334 MW'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into five groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'The glut',
                    text: "Module capacity is several times what India installs, and cell capacity is heading the same way. When the cell plants now being built start, the Indian-cell premium that earns **Emmvee** and **Websol** 34%-plus margins will narrow. Most managements acknowledged falling prices but not how far they could go.",
                },
                {
                    label: 'Policy',
                    text: "Domestic-cell rules, import duties and US trade actions set the profit pool. A change in timing or scope (companies already disagree on when the cell rule bites for many projects) moves orders and prices.",
                },
                {
                    label: 'Debt for new plants',
                    text: "**Insolation** (₹2,500cr of capex this year against a ₹2,025cr market value), **Saatvik** (net debt heading to ₹2,200–2,400cr), **Vikram** (about ₹5,000cr a year, 70% debt) and **Emmvee** (₹3,300cr of loans) are borrowing at the top of the cycle.",
                },
                {
                    label: 'Cash collection',
                    text: "**Insolation**'s receivables rose 156%; **Australian Premium**'s pump-scheme receivables quadrupled; **Alpex** has never converted its profit into cash.",
                },
                {
                    label: 'Governance',
                    text: "**Oriana** has over 100 subsidiaries, filed results late and uses bill discounting heavily. **Waaree Renewables** takes 30–40% of its orders from group companies. **Saatvik** has an interim finance chief. **Websol**'s promoters own about 30% and investors complained about communication, though it has cut its share pledges.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **3–4% at 8x, 6–7% at 10–11x, 8% at 12x, 11% at 16x, 12% at 18x and 15% at 23x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **These low P/Es sit on peak earnings**: the check below uses my growth estimates, which are low or zero for most of these companies for that reason.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Vikram** (₹1,117cr net cash) looks cheap on EV/EBITDA, but that cash is about to be spent on cell plants. **Saatvik**, **Insolation**, **Alpex** and **Solex** carry debt that will grow.",
                },
                {
                    label: 'Reasonable',
                    text: "**Oriana**, **Emmvee**, **Alpex**, **Solex**, **Australian Premium** and **Insolation**: prices that ask for no more than my (low) estimates. For Insolation, the price is not the problem; its capex is. On Screener's figures, **Waaree Renewables** (P/E about 18) needs about 12% a year against my 15%.",
                },
                {
                    label: 'Full',
                    text: "**Websol**: some growth is priced in, and I expect none.",
                },
                {
                    label: 'Stretched',
                    text: "**Vikram** and **Saatvik** need 11–15% a year against my 0–5%.",
                },
                {
                    label: 'Not in the live table',
                    text: "**Waaree Renewables**: the dashboard shows its parent Waaree Energies' market value (₹71,706cr) instead of its own (about ₹8,872cr on Screener).",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Waaree Renewables', rank: 1, stance: 'COMPOUNDER', segment: EPC,
            what: "Waaree Renewable Technologies, the Waaree group's EPC arm: designs and builds solar and battery plants for utilities and companies, and now owns part of a transmission firm.",
            view: "**Asset-light and helped by the glut.** Returns over 80%, net cash and a ₹5,300cr order book; its margin is guided down to about 15%, and 30–40% of orders come from group companies. On Screener's price it needs less than my ~15% estimate.",
            watch: 'Order inflows; margin after the acquisition; related-party orders.',
        },
        {
            company: 'Oriana Power', rank: 2, stance: 'SCALEUP', segment: EPC,
            what: "Builds solar and battery plants for companies and sells some finished plants to investors such as Actis; SME-listed.",
            view: "**Fast growth that converts to cash.** About ₹6,800cr of orders, margins of 21–23% and 88% cash conversion, but over 100 subsidiaries, late filings and lumpy plant sales. The price asks for less than my ~15% estimate.",
            watch: 'Plant sales to Actis; battery margins; filing discipline.',
        },
        {
            company: 'Emmvee Photovoltaic Power Ltd', rank: 3, stance: 'CYCLICAL', segment: CELLS,
            what: "An integrated maker of solar cells and modules in Bengaluru, expanding cells from 2.94 GW to 8.9 GW.",
            view: "**The best cell maker, expanding at the top.** Margins of 33–36%, a 9.9 GW order book and a ₹2,400cr operating-profit target, but it is borrowing ₹3,300cr as cell capacity multiplies. The price asks for about my ~12% estimate.",
            watch: 'Indian-cell premium; new plant on time; cash conversion.',
        },
        {
            company: 'Alpex Solar', rank: 4, stance: 'SCALEUP', segment: MODULES,
            what: "A module maker and solar-pump supplier opening a 2.2 GW cell line in September 2026; SME-listed.",
            view: "**A cell bet at a low price.** Guides 35–40% cell margins and about ₹4,000cr of FY28 revenue, but has never converted profit into cash and its line was delayed by a fire. The price asks for less than my ~10% estimate.",
            watch: 'Cell line output and margins; cash conversion; pump collections.',
        },
        {
            company: 'Websol Energy System Ltd', rank: 5, stance: 'CYCLICAL', segment: CELLS,
            what: "A cell and module maker in West Bengal with 1.2 GW of cells running at 92%.",
            view: "**A cell maker past its best margins.** Margin down from 47% to 34%, cell prices easing and its big expansion waiting for land; promoters hold about 30%. The price needs some growth and I expect none.",
            watch: 'Cell prices; the TOPCon upgrade; the West Bengal land.',
        },
        {
            company: 'Solex Energy', rank: 6, stance: 'CYCLICAL', segment: MODULES,
            what: "A Gujarat module maker with 4 GW of capacity, building a 2.2 GW cell plant by the end of 2027.",
            view: "**Thin margins, a debt-funded cell plan.** A ₹3,400cr order book, but a profit margin of about 3% and a cell plant funded mostly with debt after dropping a share sale. The price asks for about my ~5% estimate.",
            watch: 'Profit margin against 5–6%; utilisation; cell-plant funding.',
        },
        {
            company: 'Australian Prem', rank: 7, stance: 'CYCLICAL', segment: MODULES,
            what: "Australian Premium Solar (India): a module maker and installer, strong in government solar-pump schemes; SME-listed.",
            view: "**Cheap, but cash stuck in pumps.** Receivables of about ₹160cr, mostly from pump schemes, and no cell plans for two years. The price asks for less than my ~5% estimate.",
            watch: 'Receivable collection; 1.2 GW ramp-up; pump orders.',
        },
        {
            company: 'Vikram Solar', rank: 8, stance: 'CYCLICAL', segment: MODULES,
            what: "One of India's larger module makers (15.5 GW), building 9 GW of cells and a wafer plant.",
            view: "**Margins collapsing, outlook shelved.** Margin down from 21% to 8% and FY27 outlook withdrawn; ₹1,117cr of net cash is about to go into cells and wafers, mostly with debt. The price needs more growth than I expect.",
            watch: 'Outlook at the half-year; cell plant start; module margins.',
        },
        {
            company: 'Insolation Energy', rank: 9, stance: 'AVOID', segment: MODULES,
            what: "A Rajasthan module maker (5.5 GW), 85% plain modules, building 4.5 GW of cells.",
            view: "**Spending more than it is worth.** FY27 capex of ₹2,500cr against a ₹2,025cr market value, receivables up 156% and five-year cash conversion of 14%. Too much risk at the top of the cycle.",
            watch: 'Debt; cell-plant cost; receivables.',
        },
        {
            company: 'Saatvik Green', rank: 10, stance: 'AVOID', segment: MODULES,
            what: "A module maker in Ambala (4.8 GW) building cells and modules in Odisha.",
            view: "**Sales and margins falling, debt rising.** Q1 sales of 334 MW against 1,050 MW in Q4, margin down to 7%, an interim finance chief and net debt heading to ₹2,200–2,400cr. The price needs more growth than I expect.",
            watch: 'H2 volumes against guidance; margin toward 12%; debt.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**EPC and developers.** **Waaree Renewables: own**, checking its price outside the dashboard. **Oriana Power: follow** as it scales and files on time.",
            "**Cell makers.** **Emmvee Photovoltaic Power Ltd: follow** while the cell premium lasts. **Websol Energy System Ltd: wait** for cell prices to settle.",
            "**Module assemblers.** **Alpex Solar: follow** its new cell line. **Solex Energy**, **Australian Prem** and **Vikram Solar: wait**. **Insolation Energy** and **Saatvik Green: pass** on debt-funded expansion at the top of the cycle.",
            "**What would change my view.** For the better: cell prices holding up longer than expected; a big fall in share prices that prices in the glut. For the worse: a policy change on Indian cells; more delays in cell plants carrying new debt.",
            "**What to watch next quarter.** Cell and module prices; Emmvee's and Alpex's cell output; Vikram's outlook; Saatvik's volumes; Insolation's debt.",
        ],
        bottomLine:
            "Own the asset-light plant builder (Waaree Renewables), follow the developer and the cell makers that are earning today (Oriana Power, Emmvee Photovoltaic Power Ltd, Alpex Solar), wait on the rest (Websol Energy System Ltd, Solex Energy, Australian Prem, Vikram Solar), and pass on the debt-funded module makers (Insolation Energy, Saatvik Green).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/WAAREERTL/consolidated/' },
        { label: 'India’s solar module overcapacity to persist through 2030 as capacity reaches 233GW — PV Tech', url: 'https://www.pv-tech.org/indias-solar-module-overcapacity-to-persist-through-2030-as-capacity-reaches-233gw/' },
        { label: 'Overcapacity in modules, underdeveloped upstream — pv magazine India', url: 'http://www.pv-magazine-india.com/2026/09/16/overcapacity-in-modules-underdeveloped-upstream-the-next-challenge-for-solar-manufacturing/' },
        { label: 'ALMM List-II solar rules expose domestic cell shortage — Down To Earth', url: 'https://www.downtoearth.org.in/energy/indias-solar-ambitions-face-a-factory-floor-test-rollout-of-new-rules-sparks-industry-concerns-over-domestic-cell-shortage-stranded-investments' },
        { label: 'Solar module overcapacity to squeeze OEM margins, drive consolidation (ICRA) — Energetica India', url: 'https://www.energetica-india.net/news/solar-module-overcapacity-to-squeeze-oem-margins-drive-industry-consolidation-icra' },
        { label: 'Company earnings calls and presentations, Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
