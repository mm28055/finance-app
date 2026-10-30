import { SectorOverview } from './types';
import { chemicalsFluorineBusinesses } from './chemicals-fluorine-businesses';
import { chemicalsValuationInputs } from './card-data/chemicals';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const FL_INT = 'Integrated fluorine majors — own hydrofluoric acid, refrigerant quotas, fluoropolymers and contract manufacturing';
const FL_NEW = 'New refrigerant entrants — an acid maker and a gas blender building their first R-32 plants';

export const chemicalsFluorine: SectorOverview = {
    sector: 'Chemicals',
    title: 'Chemicals · Fluorine and refrigerant chain',
    format: 'ranked',
    businesses: chemicalsFluorineBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: chemicalsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Navin Fluorine Intl': 20,
            'Gujarat Fluorochemic': 22,
            'Tanfac Industries': 26,
            'Stallion India Fluor': 15,
        },
    },
    standfirst:
        "The Chemicals sector is too large for one note, so it is split into five groups, each a complete note with its own two tabs. This is the group of four companies whose profits depend on **fluorine**: the element, taken from a mineral called fluorspar and turned into hydrofluoric acid (HF), that goes into air-conditioner refrigerant gases, non-stick and heat-proof plastics (fluoropolymers), battery chemicals and many drug and crop-protection molecules. **Gujarat Fluorochemicals** and **Navin Fluorine** are the two integrated majors: they make their own HF, hold the historic production that sets their refrigerant quotas, and add fluoropolymers and battery materials (Gujarat Fluorochemicals) or contract manufacturing for drug and crop-chemical companies (Navin). **Tanfac** makes HF and India's only solar-grade HF, and is building its first refrigerant plant. **Stallion** blends and distributes refrigerant and specialty gases and is building one too. This edition was built from the last two earnings calls for each (checked against the official transcripts where the stored copy was machine-made), the FY26 annual reports, the Q1 FY27 presentations, the CRISIL, CARE and ICRA rating reports, and sector work from Crisil, ICRA, CareEdge, UNEP and ECHA. The headline: India freezes production of refrigerant gases (HFCs) from 1 January 2028 at a level set by what each company made in 2024–26, and everyone is racing to build capacity before then, so India will have two to four times the R-32 refrigerant it needs. The incumbents with their own HF and a long production history hold the advantage; the newcomers carry a quota risk that nobody will quantify. {Count:fits|None} of the four fits my growth estimate at today's price. Every chart uses filed results.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "The integrated majors earn the most. Navin has held 32–35% for four quarters because its new plants for refrigerants, crop-chemical intermediates and contract drug manufacturing all filled at once. Gujarat Fluorochemicals' chemicals business earns 27–29%, but its loss-making battery-materials unit pulls the group figure down. Tanfac, which sells hydrofluoric acid largely as a commodity, earns 15–16%; Stallion, a gas blender and trader, normally earns 11–15%. Q1 FY27 was helped by high refrigerant prices after the West Asia war, so treat it as a good quarter, not a new level.",
            values: {
                'Gujarat Fluorochemic': [27, 30, 24, 22, 27],
                'Navin Fluorine Intl': [29, 32, 35, 34, 34],
                'Tanfac Industries': [16, 16, 15, 16, 16],
                'Stallion India Fluor': [13, 15, 11, 15, 18],
            },
            cellNotes: {
                'Gujarat Fluorochemic': "Q3 FY26 was hit by the R-22 production-quota limit and Q4 by Middle East shipping trouble and bigger battery losses after the LiPF6 plant started on 5 January. In Q1 FY27 the chemicals segment earned 29% (₹458cr of operating profit) while the battery unit lost ₹30cr (company segment figures).",
                'Navin Fluorine Intl': "Company figure 34.2% in Q1 FY27. Management now guides 32–33%, plus or minus 1 point, for one to two years, up from ‘we will endeavour to do 30%’ in April.",
                'Tanfac Industries': "Company figure 15.3% in Q1 FY27 (operating profit ₹28.6cr), the bottom of the 15–18% range it gave in May (on the July call it guided 16–19% from Q2): sulphur, its main acid input, rose from about ₹30/kg to about ₹105/kg, and it bought grid power during an acid-plant shutdown.",
                'Stallion India Fluor': "Q1 FY27's 18% is a one-off: the managing director said half of the quarter's operating profit came from gains on stock bought before the Gulf supply shock. The company's headline 20.3% includes other income. He guided profit after tax back to about 10% of sales for the rest of FY27.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "Navin has grown 34–47% for five quarters as about ₹3,000cr of new plants came on stream. Gujarat Fluorochemicals was flat through FY26 and jumped 24% in Q1 FY27 on its new R-32 refrigerant plant and high refrigerant prices. Tanfac's early quarters are flattered by the doubling of its acid capacity in October 2024; it grew 6% in Q1. Stallion's swings follow supply shocks, not a trend.",
            values: {
                'Gujarat Fluorochemic': [9, 2, -1, 12, 24],
                'Navin Fluorine Intl': [38, 46, 47, 34, 44],
                'Tanfac Industries': [85, 51, -3, 12, 6],
                'Stallion India Fluor': [51, 56, 24, -28, 10],
            },
            cellNotes: {
                'Gujarat Fluorochemic': "Q1 FY27 by segment (company): fluoropolymers +15%, refrigerants and other fluorochemicals +52%, bulk chemicals +11%; battery materials only ₹14cr.",
                'Navin Fluorine Intl': "Q1 FY27 by business (company): refrigerants and other high-performance products +33%, specialty chemicals +48%, contract drug manufacturing +82%.",
                'Tanfac Industries': "Q3 FY26 is against a quarter a year earlier that was lifted by a temporary shortage of hydrofluoric acid. Q1 FY27: prices up about 15%, volumes down because the acid plant ran at only 73%.",
                'Stallion India Fluor': "Q4 FY26 is against ₹152cr of sales a year earlier, a supply-shock spike. Q1 FY27 sales grew 10%; the company's +12.8% is total income, including interest on its cash.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "Navin's return doubled to 21% as its plants filled. Gujarat Fluorochemicals has earned about 10% for three years because about ₹2,000cr sits in a battery-materials unit that barely sells yet and ₹1,900cr in unfinished plant. Tanfac's small, old plant earns well, but that is about to change as it spends ₹390cr on R-32. Stallion's fell to 12% because the cash from its rights issue is not yet at work.",
            values: {
                'Gujarat Fluorochemic': [20, 30, 10, 10, 10],
                'Navin Fluorine Intl': [19, 20, 11, 11, 21],
                'Tanfac Industries': [67, 48, 33, 42, 24],
                'Stallion India Fluor': [55, 22, 18, 20, 12],
            },
            cellNotes: {
                'Gujarat Fluorochemic': "FY23 was the peak of refrigerant and caustic-soda prices. The company quotes 16.6% for Q1 FY27 annualised on its own definition, much higher than Screener's.",
                'Tanfac Industries': "FY25 was lifted by a one-quarter acid shortage worth about ₹30cr of profit. Company figure for FY26: 20.2%.",
                'Stallion India Fluor': "About ₹434cr of cash at March 2026, mostly from the rights issue and earmarked for the R-32 plant, sits in capital employed.",
            },
        },
        {
            key: 'ccc',
            more: true,
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'diverging',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "Gujarat Fluorochemicals ties up more than a year of cost in stock, because it keeps polymer stock in warehouses in Germany and the US, ships by sea and holds two to three months of ‘insurance stock’ for big customers. Navin has cut its cycle from 193 days to 60. Tanfac's has doubled as its suppliers stopped giving it credit. Stallion carries large stocks of imported gas.",
            values: {
                'Gujarat Fluorochemic': [216, 272, 363, 418, 417],
                'Navin Fluorine Intl': [154, 193, 119, 89, 60],
                'Tanfac Industries': [43, 60, 82, 129, 115],
                'Stallion India Fluor': [93, 103, 282, 203, 180],
            },
            cellNotes: {
                'Gujarat Fluorochemic': "Screener measures stock against material cost only, which inflates the figure. The company's own working-capital measure was 192 days at March 2026 and 149 days at June 2026.",
                'Navin Fluorine Intl': "Company figure 81 days at June 2026, against its 75–80 day guide; CARE puts the FY26 operating cycle at 69 days.",
                'Tanfac Industries': "Payable days fell from 77 in FY24 to 21 in FY26. The company says its own working-capital cycle improved by 8 days to 91 in FY26.",
                'Stallion India Fluor': "FY26: 134 days of stock, 66 days of debtors (102 a year earlier), 19 days of payables.",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "Navin turned 76% of operating profit into cash over five years and 83% in FY26. Gujarat Fluorochemicals turned 57%, held back by its stock, though FY26 was better at 80%. Tanfac turned only 42%: its operating cash has been ₹33–43cr a year against profit after tax of ₹52–88cr. Stallion has absorbed more cash than it made over five years.",
            values: {
                'Gujarat Fluorochemic': [63, 38, 68, 50, 80, 57],
                'Navin Fluorine Intl': [21, -12, 188, 107, 83, 76],
                'Tanfac Industries': [58, 57, 47, 25, 38, 42],
                'Stallion India Fluor': [24, -17, -304, -27, 67, -23],
            },
            cellNotes: {
                'Navin Fluorine Intl': "Operating cash was only ₹75cr in FY22 and −₹64cr in FY23, then ₹750cr in FY24 as working capital unwound. Customers also pay in advance towards some plants (about ₹211cr of such advances at March 2026).",
                'Stallion India Fluor': "Operating cash was negative in FY23, FY24 and FY25; ₹102.7cr of its IPO money went into working capital, more than the ₹95cr the offer document said.",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "All four have spent more than they earned over five years. Navin is the exception now: it turned 12% of revenue into free cash in FY26 as its building cycle paused. Gujarat Fluorochemicals has been negative for three years and will be far more negative in FY27, when it plans to spend about ₹3,100cr. Tanfac and Stallion are both about to spend several times their annual operating cash on new plants.",
            values: {
                'Gujarat Fluorochemic': [1.7, 0.1, -8.1, -7.1, -5.8, -3.8],
                'Navin Fluorine Intl': [-34.7, -39.6, 0.9, 0.2, 12.2, -8.0],
                'Tanfac Industries': [9.1, 7.5, -0.5, -11.5, -5.5, -2.1],
                'Stallion India Fluor': [3.8, -1.3, -32.2, -4.8, -2.3, -6.8],
            },
            cellNotes: {
                'Gujarat Fluorochemic': "FY27 plan: about ₹2,300cr for the battery-materials unit and ₹800–850cr for chemicals, against operating cash of ₹961cr in FY26.",
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "Below zero means more cash than debt. Navin paid off its net debt with a ₹750cr share sale in July 2025. Gujarat Fluorochemicals is the only one carrying real debt, and it is rising with the battery build-out. Tanfac and Stallion both raised equity in 2026 and hold net cash, but most of it is earmarked for their R-32 plants.",
            values: {
                'Gujarat Fluorochemic': [1.2, 0.7, 2.1, 1.4, 1.7],
                'Navin Fluorine Intl': [-0.3, 1.4, 2.1, 1.8, -0.0],
                'Tanfac Industries': [-0.7, -1.1, -1.1, -0.0, 0.4],
                'Stallion India Fluor': [0.0, 0.2, 2.0, -1.5, -6.9],
            },
            cellNotes: {
                'Gujarat Fluorochemic': "Borrowings ₹2,721cr at March 2026, up from ₹2,080cr, mostly in the battery unit. CRISIL would consider a downgrade if net debt rose above 1.75 times operating profit on its own measure.",
                'Tanfac Industries': "Net debt ₹46.6cr at March 2026 (company); net cash after the ₹250cr share sale in June.",
                'Stallion India Fluor': "Cash ₹433.7cr against ₹34cr of overdraft at March 2026, after the ₹364cr rights issue; ₹276.7cr of the rights money was still unspent.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated for Gujarat Fluorochemicals and Navin; standalone for Tanfac and Stallion, which have no subsidiaries.',
            note: "Fluorine chemistry is capital-heavy: Navin spent 28% of revenue a year for five years and Gujarat Fluorochemicals 19%. Navin's spending is falling as a share of a larger revenue; Gujarat Fluorochemicals' is about to more than double. Tanfac and Stallion were light spenders until now; their R-32 plants cost about half and about three-quarters of FY26 revenue respectively.",
            values: {
                'Gujarat Fluorochemic': [17.0, 12.9, 22.7, 18.6, 25.1, 19.1],
                'Navin Fluorine Intl': [39.8, 36.5, 35.4, 24.1, 14.8, 27.8],
                'Tanfac Industries': [4.7, 4.0, 9.5, 17.4, 11.5, 10.5],
                'Stallion India Fluor': [0.5, 0.0, 0.9, 1.3, 11.4, 3.9],
            },
            cellNotes: {
                'Tanfac Industries': "R-32 plant ₹390cr, of which about ₹100cr was spent by June 2026; a further ₹1,500–1,700cr is planned over four years.",
                'Stallion India Fluor': "About ₹310cr of rights money is set aside for plant, machinery and construction at the R-32 site; a ₹350–400cr second plant for newer refrigerants (HFOs) is not yet funded.",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'hf', label: 'Own hydrofluoric acid', description: 'Whether the company makes its own hydrofluoric acid (HF), the starting point for every fluorine product, and how far back into fluorspar it goes.' },
            { key: 'quota', label: 'Refrigerant quota position', description: 'How much refrigerant production history the company has, since India’s HFC quotas from 2028 will be set on output in 2024–26.' },
            { key: 'approvals', label: 'Approvals and contracts', description: 'Customer qualifications, sole-supplier positions and long-term contracts that make the work hard to move.' },
            { key: 'cost', label: 'Cost position and margin', description: 'Integration, scale and the margin that results through a normal quarter.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what auditors, rating agencies, related parties, pledges and guarantees show.' },
        ],
        rows: [
            { company: 'Navin Fluorine Intl', trend: 'widening', trendNote: 'Margin up from 19% to 33% in two years; sole maker of Chemours’ data-centre cooling fluid; three or four FDA readouts could add contract-manufacturing blocks; R-32 expansion lands before the quota deadline.',
                grades: { hf: { grade: 'A', note: '60,000t of HF at two sites' }, quota: { grade: 'A', note: 'Long R-22 and R-32 history' }, approvals: { grade: 'A', note: 'Honeywell and Chemours contracts' }, cost: { grade: 'A', note: 'Margin 32–35%' }, cash: { grade: 'B', note: 'Net cash, AA+; top 3 clients 39%' } } },
            { company: 'Gujarat Fluorochemic', trend: 'widening', trendNote: 'Filling the high-end polymer space 3M left and taking enquiries from AGC’s UK closure; R-32 doubled and R-134a added to use its full quota; the battery bet has yet to earn.',
                grades: { hf: { grade: 'A', note: 'Own fluorspar mine to PTFE' }, quota: { grade: 'A', note: 'Large R-22 base; R-32, R-134a' }, approvals: { grade: 'B', note: 'Chip-grade polymers; EV terms unclear' }, cost: { grade: 'B', note: 'Chemicals 27–29%; battery loss' }, cash: { grade: 'C', note: 'Free cash negative; ₹498cr group guarantee' } } },
            { company: 'Tanfac Industries', trend: 'widening', trendNote: 'India’s only solar-grade HF maker with ₹1,068cr of orders to FY29, and about 12,500t a year of R-32 contracted before the plant starts; but its quota is undecided.',
                grades: { hf: { grade: 'A', note: 'Own HF and acid; fluorspar imported' }, quota: { grade: 'D', note: 'No refrigerant history' }, approvals: { grade: 'B', note: 'Solar HF approvals; R-32 contracts' }, cost: { grade: 'C', note: 'Margin 15–16%; sulphur swings' }, cash: { grade: 'C', note: 'Cash 42% of profit; parent pledged stake' } } },
            { company: 'Stallion India Fluor', trend: 'narrowing', trendNote: 'Gave up most R-32 trading because margins were thin, and now builds an R-32 plant with no own HF and no contracts into a market heading for two to four times oversupply.',
                grades: { hf: { grade: 'D', note: 'Buys all gas; will buy HF' }, quota: { grade: 'D', note: 'No production history' }, approvals: { grade: 'C', note: '20 years with Honeywell blends' }, cost: { grade: 'C', note: 'Normal margin 11–15%' }, cash: { grade: 'D', note: 'Cash negative 3 of 5 years; dilution' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Follow Navin Fluorine.** **Navin Fluorine** (listed as Navin Fluorine Intl) makes refrigerant gases, a newer low-warming refrigerant (HFO) for Honeywell under a long contract, fluorinated building blocks for crop-chemical and drug companies, and runs a contract drug-manufacturing arm (CDMO). It is the best business here: FY26 revenue rose 41% to ₹3,314cr, profit more than doubled to ₹664cr, the margin went from 19% to 33% in two years, and Q1 FY27 grew another 44% at 34%. The next leg is already paid for from its own cash: 15,000 tonnes more R-32 refrigerant by Q3 FY27, a US$100m contract-manufacturing target this year, and the only plant making Chemours' data-centre cooling fluid. The cautions: three customers are 39% of revenue, and management itself says India will be ‘oversupplied for five years’ in R-32. Part of today's margin rests on unusually high refrigerant prices (its own new guide of 32–33% is below Q1's 34.2%), one FDA readout has already disappointed, and its auditor made the value of the ₹314cr Dewas drug plant and ₹94cr of UK subsidiaries a key audit matter. I expect about 20% a year of earnings growth; the price needs about {need:Navin Fluorine Intl|25}%. **Follow it, and buy on a weak refrigerant quarter.**",
                "**Wait on Gujarat Fluorochemicals.** **Gujarat Fluorochemicals** (listed as Gujarat Fluorochemic) is India's largest maker of PTFE, the non-stick, heat-proof plastic, and runs the most complete fluorine chain in India, from its own fluorspar mine in Morocco to refrigerants and fluoropolymers used in chips, electric cars and hydrogen. That chemicals business earned a 29% margin in Q1 and is gaining share as 3M and AGC leave the market. But the group is also a ₹6,000cr battery-materials bet, of which about ₹2,000cr is spent, and it produced ₹14cr of revenue and a ₹30cr operating loss in Q1. FY27 spending of about ₹3,100cr will keep free cash negative and debt rising, and it guarantees ₹498cr of debt of a promoter-group company. In August it reversed its May decision to build in Oman, losing about ₹1,200cr of Omani funding. I expect about 22% a year; the price needs about {need:Gujarat Fluorochemic|30}%. **Wait for the battery unit to reach its promised ₹100cr a quarter of sales by Q4 FY27, or for a lower price.**",
                "**Wait on Tanfac.** **Tanfac** (listed as Tanfac Industries) makes hydrofluoric acid at one site in Tamil Nadu, is India's only maker of the ultra-pure grade used to etch solar cells, and is building a 20,000-tonne R-32 plant due to fire in late November 2026. It has signed contracts for about 12,500 tonnes a year of that output, mostly for export, at a formula price with take-or-pay terms, and management guides revenue up at least 30% in FY27 and more than 60% in FY28. Today's business is ordinary: a 15–16% margin, volumes down in Q1, and operating cash well below profit. The big unknown is its refrigerant quota from 2028, which management declined to discuss, and its controlling shareholder Anupam Rasayan has pledged its whole stake. It has just sold about ₹350cr of new shares, and a ₹1,500–1,700cr four-year plan points to more. I expect about 26% a year; the price needs about {need:Tanfac Industries|34}%. **Wait until the plant runs and the quota is known.**",
                "**Pass on Stallion.** **Stallion** (listed as Stallion India Fluor) buys refrigerant and specialty gases, mostly imported, and blends, tests and fills them into cylinders at four sites. Its normal profit is about 10% of sales; Q1's jump came half from gains on stock bought before the Gulf supply shock. Its future rests on a 10,000-tonne R-32 plant in Rajasthan, now due end-December after slipping from October, with no captive acid and no sales contracts, entering a market heading for two to four times oversupply. In one quarter all three projects slipped, the FY27 profit goal of ₹100–110cr was dropped, and a ‘no further dilution’ pledge was reversed. I expect about 15% a year; the price needs about {need:Stallion India Fluor|24}%. **Pass until the plant runs profitably and the quota is known.**",
                "**Three things to hold onto before reading the rest.** First, **the 2028 quota freeze decides who wins in refrigerants**: India caps HFC output from 1 January 2028 at a baseline set on 2024–26 production, so companies with a long production history (Navin, Gujarat Fluorochemicals) are protected, while newcomers (Tanfac, Stallion) do not know how much they will be allowed to make. Second, **today's refrigerant prices are not normal**: R-32 reached about ₹900/kg in India after the West Asia war, the plans of the new entrants assume ₹500–550/kg, and Navin's board used US$5–6/kg as its downside. Third, **check whether a figure is filed or the company's own**: Stallion's headline revenue and margin include interest income, Gujarat Fluorochemicals quotes a return on capital well above Screener's, and Tanfac's filed profit is standalone because it has no subsidiaries.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results on Screener, consolidated for the two majors and standalone for Tanfac and Stallion, which have no subsidiaries. Hover over a starred name for its caveat. Two cautions: Q1 FY27 was lifted by high refrigerant prices after the West Asia war, and Stallion's Q1 by gains on old stock; and Gujarat Fluorochemicals' group figures blend a chemicals business earning 27–29% with a battery unit that loses money.",
                "**About the dashboard's stored data.** Several stored records were wrong and nothing here relies on them. Gujarat Fluorochemicals' stored Q4 FY26 row was its chemicals segment, not the group (₹1,358cr revenue and ₹169cr profit against filed ₹1,369cr and ₹100cr), its Q3 FY26 profit was stored as zero (filed ₹102cr), and its ‘inventory days’ of 192 and 149 are the company's working-capital days. Stallion's Q4 FY26 row was all zeros (filed sales ₹110cr, profit ₹11cr) and its Q1 FY27 figures were total income. Tanfac's stored ‘order book’ of ₹4,680cr does not exist; the company discloses about ₹1,068cr of solar-acid orders and about ₹3,600cr of long-term refrigerant contracts separately. Stored transcripts for Navin (Q4), Gujarat Fluorochemicals, Tanfac (Q1) and Stallion were machine-made and garbled names and some numbers; every quote here was checked against the official filing.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Indian chemicals are past the worst in volumes but not in pricing, and fluorine is the one corner where regulation, as much as China, sets the price.** CareEdge Research puts India's specialty-chemicals market at about ₹5,56,300cr in FY26, growing 10–12% a year to FY29. Crisil Ratings expects revenue growth to slow to about 6% in FY27 and margins to fall 150–200 basis points (1.5–2 percentage points), because Q1 FY27's war-driven price spike will fade and Chinese oversupply still caps most prices. This note covers one of five Chemicals groups; the others are custom synthesis and specialty intermediates, commodity and petrochemical spread businesses, carbon, colour and additives, and formulations, ingredients and gases. **My view: fluorine is the richest profit pool in Indian chemicals, but the refrigerant part of it is heading into a capacity glut that only the quota system will contain.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Everything starts with fluorspar, a mineral that India mostly imports. Reacted with sulphuric acid it gives hydrofluoric acid (HF), a dangerous, tightly controlled chemical that is hard to transport. HF plus chlorine-based feedstocks gives refrigerant gases: R-22 (being phased out), R-32 (today's air-conditioner gas), R-134a and the newer low-warming HFOs. R-22 is also the raw material for TFE, from which PTFE and other fluoropolymers are made. **Gujarat Fluorochemicals** owns every step, from its Moroccan fluorspar mine to PTFE; **Navin** owns HF at two sites and sells refrigerants, HFO and fluorinated building blocks; **Tanfac** makes HF and sells it, including to solar-cell makers; **Stallion** buys finished gas and repacks it. **Profit sits with those who own HF and hold quotas or approvals**: Navin earns 32–35%, Gujarat Fluorochemicals' chemicals arm 27–29%, Tanfac 15–16% and Stallion 11–15%.",
                },
                {
                    label: 'Refrigerant pricing and the 2028 freeze',
                    text: "Under the Kigali Amendment to the Montreal Protocol, India freezes HFC production at its 2024–26 baseline from 1 January 2028, then cuts 10% by 2032, 20% by 2037, 30% by 2042 and 85% by 2047. New or expanded plants must be producing by 31 December 2027 to count. China, the price-setter with about 8 lakh tonnes of HFC quota, froze in 2024 and must cut to 90% of its baseline from 2029. The result is a price spike and a building race: Chinese R-32 is near US$9/kg, India's reached about ₹900/kg before easing to ₹800/kg, and Navin says its first R-32 plant was justified at below US$2/kg. **My view: prices will fall as Indian capacity arrives, but the quota freeze puts a floor under the incumbents' volumes that the newcomers do not have.**",
                },
                {
                    label: 'R-32 overcapacity',
                    text: "India uses about 20,000–22,000 tonnes of R-32 a year, but announced capacity is 70,000–90,000 tonnes: Navin adding 15,000 tonnes in Q3 FY27, Gujarat Fluorochemicals doubling to 20,000 tonnes, Tanfac 20,000 tonnes, Stallion 10,000 tonnes, plus SRF and Chemplast. Frost & Sullivan, quoted by Tanfac, expects Indian demand only to double by FY30. Navin's management was blunt: ‘India is going to be oversupplied for five years’, so the new tonnes must be exported, and it is selling 35–45% of its new output on five-year contracts. **The winners will be the lowest-cost, HF-integrated makers with export contracts; the losers will be those selling spot into India.**",
                },
                {
                    label: 'Growth beyond refrigerants',
                    text: "The integrated majors are using refrigerant cash to build less cyclical businesses. **Gujarat Fluorochemicals'** fluoropolymers (₹914cr in Q1, +15%) go into chips, electric-car wiring, data centres and hydrogen electrolysers, and it is spending ₹6,000cr on battery chemicals: LiPF6 electrolyte salt, electrolyte, LFP cathode material and PVDF binder. **Navin's** contract drug manufacturing grew 82% in Q1 to ₹180cr, and its specialty arm makes patented crop-chemical intermediates. **Tanfac** sells solar-grade HF into India's solar-cell build-out, which it says will rise from about 36 GW to about 210 GW. Europe's proposed PFAS (‘forever chemicals’) restriction is a long-term overhang for fluoropolymers. **My view: CDMO has proven itself at Navin; batteries at Gujarat Fluorochemicals have not yet.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Refrigerants, HFO contract, specialty and contract manufacturing', 'Navin Fluorine', '29–35%', '21%', '**76%**', 'Own HF; long contracts with Honeywell and Chemours; new plants filled together'],
                        ['Fluoropolymers and refrigerants, plus a battery bet', 'Gujarat Fluorochemicals', '22–30%', '10%', '**57%**', 'Fully integrated chain earns 27–29%; battery unit and unfinished plant hold returns down'],
                        ['Hydrofluoric acid and solar-grade HF', 'Tanfac', '15–16%', '24%', '**42%**', 'Old, cheap plant; sulphur costs pass through with a lag; R-32 from late 2026'],
                        ['Refrigerant and specialty gas blending', 'Stallion', '11–18%', '12%', '**−23%**', 'Trader margins; profit spikes when supply shocks meet large stocks'],
                        ['For comparison: other Chemicals groups', 'Sector research', 'CDMO leaders about 33–34%; formulators mid-teens; commodity spreads 5–12%', '—', '—', 'Fluorine and CDMO are the richest pools in Indian chemicals'],
                    ],
                    note: 'Gujarat Fluorochemicals’ chemicals segment earned 27% in FY26 and 29% in Q1 FY27; its battery unit lost ₹80cr at the operating level in FY26 (company segment figures). Stallion’s 18% in Q1 FY27 was half stock gains.',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['India specialty-chemicals market', '₹5,56,300cr in FY26', '**₹7,54,100cr by FY29, +10–12% a year**', 'CareEdge Research, Sep 2026'],
                        ['Specialty-chemical revenue and margin', 'Revenue +8% in FY25 and FY26; margin about 16%', '**+6% in FY27; margin 14–14.5%**', 'Crisil Ratings, Jul 2026'],
                        ['India HFC production', 'Baseline = 2024–26 output', '**Freeze 1 Jan 2028**; −10% by 2032, −20% by 2037, −30% by 2042, −85% by 2047', 'Kigali Amendment (UNEP); CARE, Aug 2026'],
                        ['China HFC production', 'About 8 lakh t of quota; 2026 quotas flat', 'Cut to 90% of baseline from 2029', 'Kigali Amendment (UNEP); company calls'],
                        ['India R-32 demand and capacity', 'Demand 20,000–22,000t; announced capacity 70,000–90,000t', '‘Oversupplied for five years’', 'Stallion and Navin calls, 2026'],
                        ['India and world R-32 demand', 'India about 22,000t (FY25); world about 3.8 lakh t (2025)', 'India about 44,000t by FY30; world about 4.85 lakh t by 2030', 'Frost & Sullivan, quoted by Tanfac'],
                        ['R-32 price', 'India about ₹800/kg (peak ₹900); China near US$9/kg', 'Contract US$5.5/kg (Tanfac); US$5–6/kg board downside (Navin)', 'Company calls, 2026'],
                        ['EU PFAS restriction', 'Committees backed a class-wide restriction, Mar 2026', 'Final opinion by end-2026; exemptions up to 12 years', 'ECHA, via Arnold & Porter'],
                        ['US tariff on Indian chemicals', '18% reciprocal tariff from Feb 2026', 'Extra 25% penalty removed', 'US–India joint statement, Feb 2026'],
                    ],
                    note: 'No independent forecaster in the sources read covers Indian R-32 prices; those rows rest on company statements and are labelled as such.',
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
                    label: 'Lasting: owning the acid',
                    text: "HF is the gate to the whole chain. **Gujarat Fluorochemicals** mines and cleans its own fluorspar in Morocco, makes HF, then R-22, then TFE, then PTFE; CRISIL calls it ‘the largest PTFE manufacturer in India and among the top players globally’. **Navin** has 60,000 tonnes of HF at Surat and Dahej, which it says is ‘good enough for the next four to five years’. **Tanfac** doubled its HF to 29,700 tonnes for about ₹100cr, which it calls the lowest cost per tonne in the industry, and makes its own sulphuric acid. **Stallion** has no HF and will buy it for its R-32 plant. **My view: integration into HF is the single clearest cost advantage in this group.**",
                },
                {
                    label: 'Lasting: quotas set by history',
                    text: "Because India's quotas will be set on 2024–26 production, a long refrigerant history is a legal barrier to entry. Navin's management put it simply: ‘your right to win comes from the quota you already hold’. **Gujarat Fluorochemicals** is adding R-32 and R-134a specifically to use its full entitlement. **Tanfac** has no refrigerant history; the government memo says quotas will follow the capacity of operating plants, but analysts on its Q4 call argued the incumbents could absorb most of the national limit, and its customer contracts carry ‘no penalty’ if the quota is denied. **Stallion** ‘expects’ 10,000 tonnes but admits nobody knows. **Judge the newcomers' R-32 plants as options until the quota is published.**",
                },
                {
                    label: 'Evidence of pricing power',
                    text: "**Navin** raised its margin from 19% to 33% in two years; management says about 70% of the gain came from new plants and volume and 30% from price. **Gujarat Fluorochemicals** kept its polymer margins through a three- to four-fold rise in TFE prices because prime customers buy on formula prices. **Tanfac** passes sulphur costs on with a 30–45 day lag, but ICRA says Chinese imports ‘limit its pricing power’ in HF, and its Q1 margin fell to the bottom of its range. **Stallion's** pricing is opportunistic: it earns most when a supply shock meets its large stocks, then gives it back. **My view: only the two majors show pricing power that survives a normal quarter.**",
                },
                {
                    label: 'Switching costs: approvals and sole-supplier positions',
                    text: "**Navin** is ‘the only supplier to Chemours’ for its two-phase immersion cooling fluid for data centres, has made HFO for Honeywell (now Solstice Advanced Materials) since July 2022; on 29 October 2026 the contract was extended by four years to December 2032, adding about $180m (about ₹1,500cr) and taking the 11-year total to about $590m, and runs a dedicated drug-manufacturing block for a European partner; seven of its top ten customers have been with it for more than ten years on average. **Gujarat Fluorochemicals** adds chip- and fuel-cell-grade approvals ‘every quarter’, and its LiPF6 is approved by most major electrolyte makers. **Tanfac** took two years to reach the purity solar-cell makers need and is approved by almost all of them, with orders of about ₹1,068cr to FY29. **Stallion** has a 20-year relationship with Honeywell for HFO blends. **These approvals take one to two years to win, which is the real barrier.**",
                },
                {
                    label: 'Share gains where Western makers exit',
                    text: "3M's exit from ‘forever chemicals’ has been ‘more or less absorbed’ over two years, and **Gujarat Fluorochemicals** says it is now ‘filling the space they vacated’ at the high end. AGC's planned UK plant closure has brought enquiries, and qualification with AGC's customers has started, with benefit expected in one to two quarters. **Navin's** contract-manufacturing wins with European drug companies are the same trend in a different product. **My view: Western exits are a multi-year tailwind for the two majors that no newcomer can reach.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**SRF**, which is not in this Chemicals list, is the incumbent R-32 maker analysts named alongside Navin and Gujarat Fluorochemicals, and competes with all four. Chinese makers set world prices in refrigerants and HF. In fluoropolymers the rivals are the large Western and Japanese makers and Chinese producers (none is named on the calls, so this comes from the business model, not the transcripts); in battery salts, Chinese LiPF6 and LFP makers set the benchmark price, which Gujarat Fluorochemicals has to meet. **Anupam Rasayan**, Tanfac's controlling shareholder, is covered in the custom-synthesis group and counts Tanfac's HF as its own backward integration.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In fluorine chemistry the margin depends on who owns the HF, how much of the output is under contract, what refrigerant prices do, and whether new plants are full or empty. Three patterns show up: margins protected by integration and contracts, margins moved by refrigerant prices, sulphur and stock gains, and margins that look worse than the business because of start-up losses.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: integration and contracts',
                    text: "**Navin**'s 32–35% rests on its own HF, a Honeywell HFO contract running at about 80% of plant capacity, and specialty and drug-manufacturing plants with long approvals; CARE would downgrade it only if the margin fell below 25%. **Gujarat Fluorochemicals**' chemicals segment earned 27% in FY26 and 29% in Q1, and its formula pricing with big polymer customers protected margins when raw materials spiked. **My view: both majors' margins are structural in the high 20s to low 30s; the part above that is the current refrigerant price.**",
                },
                {
                    label: 'Cyclical: refrigerant prices and the war quarter',
                    text: "Q1 FY27 was a windfall for refrigerant sellers. **Gujarat Fluorochemicals**' refrigerant and fluorochemical sales rose 52% on the year and 44% on the quarter; **Navin**'s refrigerant arm rose 33%; **Stallion** said gas prices rose 15–20% and R-32 and helium roughly doubled. Crisil expects sector margins 1.5–2 points lower in FY27 as war-driven prices fade, and R-32 has already eased from about ₹900/kg to ₹800/kg. Navin's own new guide of 32–33% is below the 34.2% it just earned. **My view: judge all four on a normal refrigerant price, which the new entrants' plans put at ₹500–550/kg, not today's.**",
                },
                {
                    label: 'Not structural: stock gains, sulphur and start-up losses',
                    text: "**Stallion**'s managing director said half of Q1's operating profit came from gains on stock bought before the Gulf shock, and guided profit after tax back to about 10% of sales. **Tanfac**'s margin fell to 15.3% because sulphur rose from about ₹30/kg to about ₹105/kg and it bought grid power during a plant shutdown; its FY25 margin of 24% was flattered by a one-quarter acid shortage. **Gujarat Fluorochemicals**' battery unit lost ₹80cr at the operating level in FY26 and ₹30cr in Q1, cutting the group margin by about 1.6 points; losses rise as plants are finished before sales ramp up. **My view: Tanfac's and Stallion's normal margins are 15–16% and 11–15%; Gujarat Fluorochemicals' group margin should rise once batteries break even.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Gujarat Fluorochemicals** holds stock at its plants for 30–90 days, in warehouses in Germany and the US for another 30–90 days, and at sea for 30–60 days, and big Western customers want two to three months of ‘insurance stock’. Screener's cash cycle is over 400 days, measured against material cost; the company's own working-capital measure is 192 days at March and 149 days at June. That is why only 57% of its operating profit became cash over five years.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Tanfac**'s cash cycle doubled from 60 days in FY23 to 115 in FY26 as its payable days fell from 77 to 21, meaning suppliers now want paying almost at once; operating cash has been ₹33–43cr a year against profit of ₹52–88cr. **Stallion** carries 134 days of imported gas and put ₹102.7cr of its IPO money into working capital, more than the ₹95cr it said it would. **Navin** drifted from 74 days to 81 in Q1, just above its 75–80 day guide.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Navin** cut its cash cycle from 193 days in FY23 to 60 in FY26 on Screener's figures and turned ₹894cr of operating cash in FY26, 83% of operating profit; customers also paid about ₹211cr in advance towards the Chemours and Project Nectar plants. **Gujarat Fluorochemicals** improved sharply in Q1, cutting its working-capital days by 43 in one quarter, and its FY26 operating cash of ₹961cr was 1.7 times its profit.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Fluorine chemicals are hazardous, shipped in dedicated tanks and sold largely for export, so stock and transit times are long. New plants need raw-material stock months before they sell anything. **Judge each company against its own history, and expect working capital to rise at Tanfac and Stallion as their R-32 plants start.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Navin Fluorine Intl', 'Operating cash ₹173cr in Q1; working capital 81 days; all capex funded from own cash; about ₹3,000cr more to be spent over three to four years', 'Net cash at March (CARE: cash and investments ₹1,329cr against borrowings ₹1,272cr); CARE AA+/Stable from Aug 2026'],
                        ['Gujarat Fluorochemic', 'Working capital 149 days, down from 192; FY27 capex about ₹3,100cr (battery unit about ₹2,300cr); ‘we do not see funding as a constraint’; Oman sovereign funding of about ₹1,200cr will not be used', 'Borrowings ₹2,721cr at March on Screener; CRISIL downgrade trigger above 1.75x net debt to operating profit; ₹498cr guarantee for Inox Renewable Solutions'],
                        ['Tanfac Industries', 'Net-debt-free after a ₹250cr share sale in June; about ₹100cr preferential issue, ₹61cr of it from Anupam Rasayan; about ₹100cr of the ₹390cr R-32 cost spent', 'Net debt ₹46.6cr at March; ICRA A+/Stable, liquidity ‘strong’; ₹155cr of bank lines about half unused'],
                        ['Stallion India Fluor', 'Half of Q1 operating profit from stock gains; ‘may be more prudent to use some dilution and some debt’; ₹350–400cr HFO plant not yet funded', 'Net cash about ₹400cr at March, mostly earmarked for R-32; ₹120cr of unused overdraft lines; no rating report found'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Tanfac and Stallion figures are standalone.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, what is being built and how it is paid for, how each company has done against what it promised on its Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: racing the refrigerant deadline',
                    text: "Every company here is adding R-32 before the December 2027 cut-off. **Navin**'s 15,000 tonnes (₹236.5cr) lands in Q3 FY27, with 35–45% sold on five-year contracts and a peak revenue of ₹600–825cr, an asset turn of roughly 2.5–3.5 times. **Gujarat Fluorochemicals** doubles to 20,000 tonnes in Q2 FY27 and adds R-134a by the end of FY27. **Tanfac**'s ₹390cr, 20,000-tonne plant fires in late November, with about 12,500 tonnes a year contracted and a claimed ₹900–1,000cr of revenue at a 30% margin, about 2.4 times its cost. **Stallion**'s 10,000-tonne plant costs about ₹310cr for a claimed ₹500–600cr of revenue, with no contracts. **My view: the contracted, integrated capacity will earn its return; spot capacity will struggle once prices normalise.**",
                },
                {
                    label: 'Growth driver: fluoropolymers and battery materials',
                    text: "**Gujarat Fluorochemicals** guides fluoropolymer growth of ‘17–20% annually’, calling about 20% ‘absolutely visible’ for FY27 and FY28, with ₹250cr of polymer capex this year. Its battery unit has about ₹1,900–2,000cr invested, will spend about ₹2,300cr in FY27 and a similar sum in FY28 to reach ₹6,000cr, and targets asset turns of about 2 times and a margin above 25%, with full earnings from FY29. If that were met, ₹6,000cr could support about ₹12,000cr of revenue, more than twice today's group. Management admits a 9–18 month qualification lag. **My view: I build in a fraction of the battery plan and most of the polymer plan.**",
                },
                {
                    label: 'Growth driver: contract manufacturing and new materials',
                    text: "**Navin** targets US$100m of contract drug-manufacturing revenue in FY27; Q1's ₹180cr is running at about ₹720cr a year. Its dedicated cGMP4 block (₹288cr, Phase 2 of ₹125cr approved in August) targets three times asset turns by FY29, and a new MSA takes it one step from the finished drug. It is also incubating advanced materials, led by the Chemours cooling fluid (a US$14m plant, US$5m paid by Chemours) and chip chemicals, with ₹90cr of capex. About 30–40 molecules are in active work, with three or four FDA readouts due in 8–12 months; one has already disappointed. **My view: this is the most credible second engine in the group.**",
                },
                {
                    label: 'Growth driver: solar acid and the next plants',
                    text: "**Tanfac** will double solar-grade HF for ₹30–40cr by about June 2027, add 20,000–30,000 tonnes of HF for about ₹120cr, and build electronic-grade HF for chips for about ₹150cr, with HFOs and specialty fluoropolymers by 2029–31: ₹1,500–1,700cr over four years, against ₹711cr of FY26 revenue. **Stallion** started its 1,200-tonne helium plant on 21 September but expects only about 20% use next year, and plans a ₹350–400cr HFO plant and ‘one plant a year’ to reach ₹3,000cr of revenue by FY30. **My view: both plans need more equity than they have raised, so per-share growth will trail profit growth.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Navin** beat on every headline: it promised ‘double-digit’ FY27 growth and delivered 44% in Q1; it promised to ‘endeavour to do 30%’ margin and delivered 34.2%, then raised its guide to 32–33%; its contract-manufacturing target of US$100m is ‘very much on track’. **Gujarat Fluorochemicals** brought working capital down as promised and kept its R-32 timetable. **Stallion** did meet its FY26 goal of ₹40cr of profit, with ₹43.8cr.",
                },
                {
                    label: 'Cautious',
                    text: "**Navin** says specialty chemicals will not return to ‘30% EBITDA that's taken for granted’, crop-chemical prices in Latin America are under pressure, and its Project Nectar plant will reach only 75–80% use by the end of FY28. **Gujarat Fluorochemicals** grew fluoropolymers 15%, the bottom of the 15–20% range it gave in May (in August it said 17–20% a year), and says volumes are capped until new lines come in about a year. **Tanfac**'s Q1 margin was at the bottom of the 15–18% range it gave in May; it now guides 16–19% from Q2.",
                },
                {
                    label: 'Missed',
                    text: "**Stallion** promised in May an October R-32 start, a June helium start, an August terminal and FY27 profit of ₹100–110cr; by August all three projects had slipped by two to four months, the FY27 R-32 revenue estimate was halved to about ₹125cr, the profit goal was not repeated, and the no-dilution stance became ‘some dilution and some debt’. **Gujarat Fluorochemicals** said on 26 May it would ‘go ahead’ in Oman; on 12 August the project was on hold and moving to Dahej, losing about ₹1,200cr of Omani sovereign funding.",
                },
                {
                    label: 'Mixed',
                    text: "**Gujarat Fluorochemicals** kept its target of ₹100cr-plus of battery sales in Q4 FY27, but LFP cathode revenue moved to ‘towards the end of this financial year’, and the PVDF binder, which in May was fully qualified and due to start selling within two quarters, was described in August as still close to finishing qualification. **Navin**'s Chemours plant slipped from early July to the end of Q2. **Tanfac** gave figures for the first time (at least 30% growth in FY27, more than 60% in FY28), but they do not add up with May's FY28 range of ₹1,600–2,000cr: 60% on about ₹925cr is about ₹1,480cr. Its R-32 start moved from October–November to firing in late November with full output by mid-February 2027.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Tanfac to grow earnings at about 26% a year, Gujarat Fluorochemicals at about 22%, Navin at about 20% and Stallion at about 15%.** Tanfac's figure starts from a small base of ₹68cr and assumes the R-32 plant runs at 65–80% on its contracts, haircut for sulphur, quota risk and further share issues. Gujarat Fluorochemicals' assumes 17–20% polymer growth, a full R-32 plant and the battery unit reaching break-even by FY28 and modest profit after, less rising depreciation and interest. Navin's follows high-teens revenue growth at a steady 32–33% margin, from a base lifted by strong refrigerant prices. Stallion's assumes the plant runs, at prices well below today's, with more share issues.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Navin Fluorine Intl', 'Contract manufacturing past US$100m; R-32 +15,000t; margin 32–33%; refrigerant prices fading', '13% / **20%** / 26%'],
                        ['Gujarat Fluorochemic', 'Polymers 17–20%; R-32 doubled; battery unit from losses to profit; heavy depreciation and interest', '10% / **22%** / 32%'],
                        ['Tanfac Industries', 'R-32 from late 2026 on contracts; solar acid; quota, sulphur and dilution risk', '12% / **26%** / 40%'],
                        ['Stallion India Fluor', 'R-32 without own HF or contracts; slow helium ramp; more share issues', '5% / **15%** / 28%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Navin Fluorine Intl', 'Margin 32–33% ±1 point; contract manufacturing US$100m in FY27; R-32 +15,000t in Q3 FY27; working capital 75–80 days', 'About ₹3,000cr over three to four years, all from own cash: R-32 ₹236.5cr, cGMP4 Phase 2 ₹125cr, debottlenecking ₹75cr, advanced materials ₹90cr', '**Beat**: growth 44% against ‘double-digit’; margin 34% against 30%; Chemours plant a quarter late'],
                        ['Gujarat Fluorochemic', 'Fluoropolymers 17–20% a year; R-32 20,000t from Q2 FY27; battery sales ₹100cr+ a quarter by Q4 FY27; full battery earnings FY29', '₹3,100–3,150cr in FY27 (battery ₹2,300cr); ₹6,000cr in batteries by FY28', '**Mixed**: polymers at the bottom of May’s 15–20% range; R-32 on time; Oman reversed in 11 weeks; cathode sales pushed to year-end'],
                        ['Tanfac Industries', 'FY27 growth at least 30% at a 21–22% blended margin (16–19% from Q2 before R-32); FY28 growth over 60% at about 25%; R-32 full output by mid-Feb 2027', 'R-32 ₹390cr; ₹1,500–1,700cr over four years; ₹250cr share sale plus about ₹100cr preferential issue', '**Mixed**: margin at the bottom of May’s 15–18%; volumes down; R-32 a few weeks later; FY28 figures inconsistent'],
                        ['Stallion India Fluor', '30–35% revenue growth a year; FY28 revenue over ₹1,100cr at 15%+ profit margin; FY27 profit goal dropped', 'R-32 about ₹310cr from rights money; HFO plant ₹350–400cr unfunded', '**Walked back**: all three projects 2–4 months late; FY27 profit goal dropped; no-dilution pledge reversed'],
                    ],
                    note: 'Navin and Gujarat Fluorochemicals figures are consolidated; Tanfac and Stallion standalone. Stallion’s headline revenue and EBITDA include other income.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Quota and oversupply',
                    text: "India's refrigerant quotas are still to be set, and analysts on Tanfac's Q4 call put the national limit at about 1.15–1.25 lakh tonnes, which they argued SRF, Gujarat Fluorochemicals and Navin could fill on their own history. **Tanfac** called the question ‘the third time answering it’ and moved on; **Stallion** says nobody knows. Meanwhile Indian R-32 capacity heads to two to four times domestic demand. If the new entrants get small quotas, their plants will run below plan from 2028; if they get large ones, prices will fall for everyone. Either way, today's ₹800/kg is unlikely to last.",
                },
                {
                    label: 'The battery bet and a changed plan',
                    text: "**Gujarat Fluorochemicals** has put about ₹2,000cr into battery materials for about ₹14–30cr of quarterly sales, will spend another ₹4,000cr, and does not say whether its customer contracts are take-or-pay. Chinese LiPF6 and LFP prices set the benchmark it must match. It will not disclose the cost of its planned graphite anode. Its Oman project was reversed within one quarter. **A missed Q4 FY27 battery sales target would be the clearest sign the plan is slipping.**",
                },
                {
                    label: 'Governance: guarantees, pledges and related parties',
                    text: "**Gujarat Fluorochemicals** has guaranteed ₹498cr of debt of Inox Renewable Solutions, a promoter-group company (up from ₹422cr), and is owed ₹94cr by it and ₹43cr by Inox Wind; CRISIL lists group support as a weakness and a downgrade trigger. **Tanfac**'s controlling shareholder **Anupam Rasayan** had pledged its entire stake of about 24% as of June 2026, according to ICRA, which neither call mentioned; Anupam's own annual report shows it also gave an undertaking not to sell its Tanfac shares, alongside the large guarantees it gave for its purchase of Jayhawk in the US. Tanfac sold ₹13.2cr to Anupam in FY26 and was owed the same sum at March. **Excel Industries** holds 20.4 lakh Tanfac shares valued at ₹383cr in its FY26 accounts, its single largest investment and roughly 5% of Tanfac's market value today, so a fall in Tanfac's price hits Excel's book too.",
                },
                {
                    label: 'Governance: dilution and pay at Stallion',
                    text: "**Stallion**'s promoter holding fell from 67.9% to 47.8% in a year through a stake sale and a rights issue priced at ₹99; an investor on the Q4 call alleged the promoter sold his rights entitlements, which the managing director disputed. The rights issue cost ₹36cr, about 10% of the ₹364cr raised, which is very high. The managing director's pay nearly doubled to ₹4.98cr, directors and key staff took about 19% of profit, and the company pays him ₹1.2cr of rent. The auditor's opinion was clean and CARO found no misuse of rights money.",
                },
                {
                    label: 'Customers, molecules and auditor judgements',
                    text: "**Navin**'s three largest customers paid ₹545cr, ₹391cr and ₹342cr in FY26, about 39% of revenue, and CARE flags that some plants depend on single molecules that could fail in trials; one FDA readout has already gone badly. Its auditor made the carrying value of the Dewas drug plant (₹314cr) and the UK subsidiaries including Manchester Organics (₹94cr) a key audit matter, since impairment tests rest on management forecasts. **Gujarat Fluorochemicals** has transfer-pricing tax disputes and an ₹80cr customs demand, not provided for, within ₹698cr of contingent liabilities.",
                },
                {
                    label: 'Hazard, inputs and regulation',
                    text: "HF is highly toxic, and **Tanfac** runs everything from one site, needing special permits to move acid by road. Sulphur's rise from about ₹30/kg to ₹105/kg shows how quickly input costs can move. **Stallion**'s helium comes from a single region, Qatar, via Sharjah. Europe's PFAS restriction, with a final opinion due by end-2026, could shrink the fluoropolymer market in the EU over the next decade; exemptions of up to 12 years soften but do not remove that risk for **Gujarat Fluorochemicals** and **Navin**.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Here the two disagree for particular reasons: Gujarat Fluorochemicals' operating profit is cut by battery losses and its debt is rising; Stallion's cash is about to become a plant; and Tanfac's net debt shown is from before its June share sale.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **{need:Stallion India Fluor|24.2}% at {pe:Stallion India Fluor|50.4}x, {need:Navin Fluorine Intl|25.3}% at {pe:Navin Fluorine Intl|55.4}x, {need:Gujarat Fluorochemic|29.9}% at {pe:Gujarat Fluorochemic|79.0}x and {need:Tanfac Industries|34.1}% at {pe:Tanfac Industries|109.0}x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **{Count:fits|None} of the four fits my estimate today; Navin is closest.**",
            ],
            points: [
                {
                    label: 'Full: Navin, the best business, priced for it',
                    text: "**Navin** needs about {need:Navin Fluorine Intl|25}% a year against my ~20%. The price assumes the contract-manufacturing arm keeps compounding well past US$100m and that margins hold near 32–33% as Indian R-32 capacity floods in before the freeze. The balance sheet is net cash, so EV/EBITDA and P/E tell the same story. **Buy on a weak refrigerant quarter, or when an FDA approval adds a new manufacturing block.**",
                },
                {
                    label: 'Stretched: Gujarat Fluorochemicals, paying for batteries in advance',
                    text: "**Gujarat Fluorochemicals** needs about {need:Gujarat Fluorochemic|30}% a year against my ~22%. The chemicals business alone would not justify the price; the market is paying for the battery unit to reach about 2 times asset turns and a 25% margin by FY29. EV/EBITDA looks kinder than P/E because operating profit is struck before heavy depreciation and interest, and is itself cut by battery losses, but net debt of about ₹2,100cr is rising with ₹3,100cr of FY27 spending. **Wait for battery sales of ₹100cr a quarter or a lower price.**",
                },
                {
                    label: 'Stretched: Tanfac, pricing a plant that has not started',
                    text: "**Tanfac** needs about {need:Tanfac Industries|34}% a year against my ~26%. If the plant runs full on its contracts, management's plan would deliver more than that for two or three years, which is why the price is so high; but it depends on a quota nobody will discuss, and the capex plan of ₹1,500–1,700cr points to more share issues. Its net cash after June makes EV/EBITDA slightly lower than the table shows. **Wait for the quota and a full quarter of R-32 output.**",
                },
                {
                    label: 'Stretched: Stallion, a trader priced as a manufacturer',
                    text: "**Stallion** needs about {need:Stallion India Fluor|24}% a year against my ~15%. Its trailing profit is flattered by Q1's stock gains, and its ₹400cr of net cash is about to become an R-32 plant, after which EV/EBITDA will rise unless the plant earns quickly. Management's FY28 goal of about ₹165cr of profit would justify the price, but it assumes an on-time R-32 start, a quota, and helium and terminal ramp-ups, all of which have just slipped or are unknown. **Pass.**",
                },
                {
                    label: 'A check against the rest of Chemicals',
                    text: "All four need faster growth than almost any other company in the Chemicals sector, because the market treats fluorine as the sector's growth pool. That is fair for Navin and for Gujarat Fluorochemicals' polymers, but the refrigerant part of every price rests on today's unusually high R-32 price and on quotas not yet set. The best entry points in this group have come in refrigerant down-cycles, such as FY24, when Navin's and Gujarat Fluorochemicals' returns fell to 10–11%.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Navin Fluorine Intl', rank: 1, stance: 'PRICED', segment: FL_INT,
            what: "Navin Fluorine International, a Mafatlal-group company: refrigerants, HFO made for Honeywell, HF and fluorides (49% of FY26 revenue), fluorinated intermediates for crop and drug companies (35%) and contract drug manufacturing (16%); 67% exported.",
            view: "**The best business here, priced for it.** FY26 revenue rose 41% to ₹3,314cr and profit more than doubled to ₹664cr; Q1 FY27 grew 44% at a 34% margin, and the next leg (R-32, cGMP4, Chemours) is funded from its own cash. Three customers are 39% of revenue, R-32 is heading for oversupply, and the margin is flattered by high refrigerant prices. The price needs about {need:Navin Fluorine Intl|25}% a year against my ~20%.",
            watch: 'Contract drug manufacturing reaching US$100m in FY27; margin holding at 32% or more as R-32 prices fall; the three or four FDA readouts due in 8–12 months.',
        },
        {
            company: 'Gujarat Fluorochemic', rank: 2, stance: 'PRICED', segment: FL_INT,
            what: "Gujarat Fluorochemicals, an Inox-group company with India's most complete fluorine chain, from a Moroccan fluorspar mine to PTFE and other fluoropolymers (58% of Q1 FY27 sales), refrigerants and other fluorochemicals (29%), caustic soda and solvents, and a ₹6,000cr battery-materials build-out.",
            view: "**A strong chemicals business carrying an unproven battery bet.** The chemicals arm earned 29% in Q1 and is taking share as 3M and AGC exit, and R-32 capacity has doubled. But ₹2,000cr in batteries produced ₹14cr of Q1 sales and a ₹30cr loss, FY27 capex of ₹3,100cr will keep free cash negative, and it guarantees ₹498cr of a promoter-group company's debt. The price needs about {need:Gujarat Fluorochemic|30}% a year against my ~22%.",
            watch: 'Battery sales of ₹100cr or more in Q4 FY27; LFP cathode approval by year-end; net debt staying below CRISIL’s 1.75x trigger and no rise in Inox-group guarantees.',
        },
        {
            company: 'Tanfac Industries', rank: 3, stance: 'SCALEUP', segment: FL_NEW,
            what: "Tanfac Industries: hydrofluoric acid, India's only solar-grade HF and other fluorides from one site at Cuddalore, Tamil Nadu; controlled by Anupam Rasayan with TIDCO, the Tamil Nadu state company, and Excel Industries holding a stake; building a 20,000t R-32 plant.",
            view: "**A good plant with contracts, priced as if the quota is settled.** The R-32 plant fires in late November with about 12,500t a year contracted at a formula price, and management guides at least 30% growth in FY27 and 60% in FY28. Today's business earns only 15–16%, converts little profit to cash, and its quota from 2028 is unknown; its parent has pledged its whole stake. The price needs about {need:Tanfac Industries|34}% a year against my ~26%.",
            watch: 'R-32 running at 65–70% in Q4 FY27; the government’s 2028 quota allocation; whether Anupam Rasayan releases the pledge.',
        },
        {
            company: 'Stallion India Fluor', rank: 4, stance: 'CYCLICAL', segment: FL_NEW,
            what: "Stallion India Fluorochemicals: blends, repacks and distributes 40-plus refrigerant, industrial and specialty gases from four sites; building a 10,000t R-32 plant in Rajasthan, a helium plant and a gas terminal in Andhra Pradesh.",
            view: "**A gas trader whose profits follow supply shocks.** Normal profit is about 10% of sales, and half of Q1's operating profit came from stock gains. The R-32 plant has slipped to December, has no contracts or own HF, and enters a market heading for two to four times oversupply; the FY27 profit goal was dropped and more dilution is floated. The price needs about {need:Stallion India Fluor|24}% a year against my ~15%.",
            watch: 'R-32 start in December and its first-quarter margin; the quota allocation; any further equity raise.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Integrated fluorine majors.** **Navin Fluorine: follow**, the best business in the group, with its next leg funded; buy on a weak refrigerant quarter. **Gujarat Fluorochemicals: wait** until the battery unit shows it can sell ₹100cr a quarter, or for a lower price.",
            "**New refrigerant entrants.** **Tanfac: wait** until its R-32 plant runs and its quota is known; the contracts are real but the price assumes both. **Stallion: pass** until the plant earns and the dilution stops.",
            "**What would change my view.** For the better: Navin winning a new drug-manufacturing block after an FDA approval; Gujarat Fluorochemicals' battery sales arriving on time; Tanfac receiving a quota close to its capacity; Stallion starting R-32 on time without new equity. For the worse: R-32 prices falling towards ₹500/kg sooner than expected; a small quota for the newcomers; a rise in Inox-group guarantees; more project slippage at Stallion.",
            "**What to watch next quarter.** Navin's margin and Chemours start-up; Gujarat Fluorochemicals' R-32 expansion and battery sales; Tanfac's R-32 commissioning in November; Stallion's R-32 start and helium volumes; and any government notice on HFC quotas.",
        ],
        bottomLine:
            "Follow Navin, the best fluorine business, for a better price; wait on Gujarat Fluorochemicals until the battery bet shows sales; wait on Tanfac until its R-32 plant and quota are settled; and pass on Stallion, a gas trader priced as a manufacturer.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/NAVINFLUOR/consolidated/' },
        { label: 'Specialty chemical makers set to catalyse 6% revenue growth — Crisil Ratings, Jul 2026', url: 'https://www.crisilratings.com/en/home/newsroom/press-releases/2026/07/specialty-chemical-makers-set-to-catalyse-6-percent-revenue-growth.html' },
        { label: 'ICRA outlook on fertiliser, basic chemicals and petrochemicals — ICRA, Apr 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=70b3f553-8150-4f2e-83a7-510b6dbdb0ae' },
        { label: 'India specialty-chemicals market size (CareEdge Research) — Multibagg, Sep 2026', url: 'https://www.multibagg.ai/market-pulse/articles/ipo/indias-specialty-chemicals-market-growth-rhp-cmu8r1ue000ery6piuexbesyp' },
        { label: 'Kigali Amendment HFC phase-down schedules — UNEP Ozone Secretariat', url: 'https://ozone.unep.org/treaties/montreal-protocol/amendments/kigali-amendment-2016-amendment-montreal-protocol-agreed' },
        { label: 'ECHA committees advance broad PFAS restriction — Arnold & Porter, Mar 2026', url: 'https://www.arnoldporter.com/en/perspectives/advisories/2026/03/echa-committees-advance-broad-pfas-restriction-under-reach' },
        { label: 'United States–India joint statement (18% tariff) — White House, Feb 2026', url: 'https://www.whitehouse.gov/briefings-statements/2026/02/united-states-india-joint-statement/' },
        { label: 'Navin Fluorine Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/1440596d-ed29-441c-b785-0c8dbf3b5dbd.pdf' },
        { label: 'Navin Fluorine Annual Report FY26 (customers, key audit matter)', url: 'https://www.nfil.in/uploads/investor/financial/nfil-annual-report-2025-26.pdf' },
        { label: 'Navin Fluorine rating rationale (AA+/Stable) — CARE, Aug 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202608120855_Navin_Fluorine_International_Limited.pdf' },
        { label: 'Gujarat Fluorochemicals Q1 FY27 earnings call transcript — NSE', url: 'https://nsearchives.nseindia.com/corporate/FLUOROCHEM_19082026150741_GFCL_Trancript_of_ConCall_19August2026.pdf' },
        { label: 'Gujarat Fluorochemicals Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/037ba3fe-59c4-4ff6-8db3-65d0698d79b0.pdf' },
        { label: 'Gujarat Fluorochemicals Integrated Annual Report FY26 (guarantees, segments)', url: 'https://gfl.co.in/upload/pages/GFCL_%20Integrated-Annual-Report_%202025-26.pdf' },
        { label: 'Gujarat Fluorochemicals rating rationale — CRISIL, Mar 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GujaratFluorochemicalsLimited_March%2026_%202026_RR_392229.html' },
        { label: 'Gujarat Fluorochemicals Q1 FY27 slides summary — Investing.com', url: 'https://www.investing.com/news/company-news/gujarat-fluorochemicals-q1-fy27-slides-strong-growth-margins-expand-93CH-4855021' },
        { label: 'Tanfac Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d8855fc0-9b61-498d-92f4-35355935a751.pdf' },
        { label: 'Tanfac Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=be9ce6c0-80bc-4ff9-a45a-ec2c45d550bc.pdf' },
        { label: 'Tanfac Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=92de35c3-3e50-4022-816c-78babac0a86a.pdf' },
        { label: 'Tanfac rating rationale (A+/Stable, pledge) — ICRA, Jul 2026', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?Id=144772' },
        { label: 'Excel Industries rating rationale (strategic investments incl. Tanfac) — CRISIL, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ExcelIndustriesLimited_September%2010_%202026_RR_402785.html' },
        { label: 'Stallion Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0cc58ffc-f2f5-4b55-bcd0-8c1d3b47f86d.pdf' },
        { label: 'Stallion Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=94e1b6b4-6645-4e20-afa0-7ea68deff7d3.pdf' },
        { label: 'Stallion Annual Report FY26 (rights-issue use, related parties) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5f6274aa-b676-443c-bbf1-46a0b56f70f4.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
