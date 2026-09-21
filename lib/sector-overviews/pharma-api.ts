import { SectorOverview } from './types';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The ranking, the metric grid and the moat table are grouped by these.
const NICHE = 'Niche APIs — sold on regulatory filings and hard chemistry';
const ANCHOR = 'Custom intermediates — built around one or two anchor molecules';
const VOLUME = 'Volume APIs — price takers that compete on cost';

export const pharmaApi: SectorOverview = {
    sector: 'Pharma API',
    title: 'Pharma API',
    format: 'ranked',
    standfirst:
        "Twelve companies that make the active ingredient inside somebody else's medicine, sorted into three business models before anything is compared. " +
        "Niche API makers are written into their customers' regulatory filings and earn 25–40% margins. Custom-intermediate makers earn similar margins from one or two molecules, and their revenue moves with those molecules. Volume API makers compete on cost and currently earn above their average because the West Asia crisis lifted prices. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-21',
    asOfQuarter: 'Q1 FY27',

    takeaways: [
        "**Separate the three models first.** Niche filing-based API makers (Alivus, Concord, Supriya, Shilpa, NGL) are sticky because switching supplier forces the customer to refile. Custom-intermediate makers (Acutaas, Blue Jet, Shree Ganesh) earn high margins from a few molecules, so their revenue swings with those molecules. Volume API makers (IOL, Aarti Drugs, SMS, Solara) are price takers whose returns have sat at 9–15% for most of five years.",
        "**This quarter's margins at the volume names are borrowed from the war.** Aarti Drugs grew 19%, but volume grew only 3.5%; prices rose 16–17%. Metformin is 15–20% dearer than before the West Asia conflict. IOL grew 37%, and Solara booked about ₹30cr of pure cost pass-through. Each management said prices will come down when raw materials do.",
        "**Concentration is the hidden risk in the best names.** Alivus still sells ₹700–750cr a year to Glenmark (about 28% of revenue); that book fell 53% in Q1 on inventory rationalisation. Acutaas's contract-manufacturing growth leans on one anchor product. Blue Jet's revenue rests on a handful of contrast-media buyers and one cardiovascular intermediate, and Divi's is now signing long-term contrast-media contracts. SMS gets 28% of revenue from one customer.",
        "**Check the cash, not just the margin.** Over five years IOL turned 76% of operating profit into operating cash, Shilpa 69%, Aarti Drugs 68% and Alivus 67%. Concord managed 64% and its FY26 cash cycle stretched to 493 days, with 485 days of inventory. Supriya (54%), NGL (53%) and SMS (43%) turn too little of their profit into cash, and SMS's borrowings have risen every year.",
        "**Three results were much worse than the headlines.** Blue Jet's Q1 revenue was 25% up on the quarter but 17% down on the year. Shree Ganesh's revenue fell 42% with the margin down to 23%. SMS grew 6% against its 15% guidance.",
        "**Only two prices are within reach of what the companies are delivering.** Alivus at 28x needs about 17% a year and guides 10–12% revenue with rising margins. Aarti Drugs at 20.5x needs about 14% against 10–15% volume guidance. Acutaas (73x, needs ~29%), Shilpa (70x, ~28%), Concord (55x, ~25%) and Blue Jet (46x, ~23%) are priced for their best case.",
        "**China now competes on India's own ground.** Chinese companies filed 45% of new US active-ingredient master files in 2024, up from 134 filings in 2021 to 392. The filing-based moat that protects Alivus and Supriya is being built by Chinese rivals too. Chinese price moves also cut both ways this quarter: they undercut Aarti Drugs in salicylic acid, while their price increases helped NGL.",
    ],

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (consolidated where filed; standalone for Alivus, Blue Jet and Supriya, which file only standalone), operating profit ÷ sales.',
            note: 'Operating margin excludes other income, so it can sit a few points below the EBITDA some managements quote. Alivus states 36.6% for Q1 FY27 including currency gains; the filed figure is 33%. Blue Jet states 33.5%; filed 33%.',
            values: {
                'Alivus Life Sciences': [29, 30, 34, 31, 33],
                'Concord Biotech': [30, 36, 35, 36, 32],
                'Supriya Lifescience': [36, 37, 35, 35, 25],
                'Shilpa Medicare': [28, 29, 28, 28, 29],
                'NGL Fine-Chem': [11, 14, 17, 14, 17],
                'Acutaas Chemicals': [25, 31, 38, 42, 34],
                'Blue Jet Healthcare': [34, 33, 25, 30, 33],
                'Shree Ganesh Remed.': [30, 32, 32, 34, 23],
                'IOL Chem & Pharma': [11, 10, 10, 15, 14],
                'Aarti Drugs': [13, 13, 9, 13, 14],
                'SMS Pharmaceuticals': [20, 20, 21, 17, 20],
                'Solara Active Pharma': [18, 11, 11, 15, 16],
            },
            cellNotes: {
                'Supriya Lifescience': 'Q1 FY27: a regional water shortage stopped production for 15–20 days (₹30–35cr of sales deferred) and a retrospective solar-power charge cost about ₹8cr.',
                'Solara Active Pharma': 'Blends a base business earning about 23% (₹72cr EBITDA on ₹307cr in Q1) with an ibuprofen unit losing money (−12% margin).',
                'Shree Ganesh Remed.': 'Q1 FY27 revenue ₹14.4cr against ₹24.7cr a year earlier.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Blue Jet’s Q1 FY26 figure (+118%) compares with a weak quarter a year before. Its later quarters show the decline that the sequential “+25%” headline in Q1 FY27 hides.',
            values: {
                'Alivus Life Sciences': [2, 16, 5, 6, 6],
                'Concord Biotech': [-6, -20, 14, -24, 26],
                'Supriya Lifescience': [-10, 21, 11, 51, 31],
                'Shilpa Medicare': [10, 8, 29, 32, 45],
                'NGL Fine-Chem': [14, 29, 44, 57, 34],
                'Acutaas Chemicals': [17, 24, 43, 41, 59],
                'Blue Jet Healthcare': [118, -21, -40, -31, -17],
                'Shree Ganesh Remed.': [0, -6, -22, 36, -42],
                'IOL Chem & Pharma': [10, 8, 11, 17, 37],
                'Aarti Drugs': [7, 9, 8, 6, 19],
                'SMS Pharmaceuticals': [20, 23, 21, -4, 6],
                'Solara Active Pharma': [-12, -10, 16, 42, 20],
            },
            cellNotes: {
                'Aarti Drugs': 'Q1 FY27: volume +3.5%, price +16–17% (company).',
                'Alivus Life Sciences': 'Q1 FY27: Glenmark business −52.6%, all other customers +26.5% (about +20% in constant currency).',
                'Concord Biotech': 'Q1 FY27: exports +46%, formulations −23%; currency added about 10% (company).',
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios: return on capital employed.',
            note: 'Read the row, not the last cell. Several of these companies carry large idle cash balances or new plants that are not yet earning, which lowers the figure for a reason.',
            values: {
                'Alivus Life Sciences': [42, 30, 28, 25, 24],
                'Concord Biotech': [21, 26, 28, 28, 17],
                'Supriya Lifescience': [43, 19, 22, 27, 25],
                'Shilpa Medicare': [6, 1, 5, 8, 11],
                'NGL Fine-Chem': [34, 12, 20, 10, 19],
                'Acutaas Chemicals': [24, 21, 16, 20, 32],
                'Blue Jet Healthcare': [53, 35, 30, 40, 26],
                'Shree Ganesh Remed.': [null, null, null, 19, 14],
                'IOL Chem & Pharma': [null, 14, 12, 9, 11],
                'Aarti Drugs': [21, 15, 15, 13, 12],
                'SMS Pharmaceuticals': [13, 4, 12, 13, 13],
                'Solara Active Pharma': [0, 2, -9, 6, 5],
            },
            cellNotes: {
                'Alivus Life Sciences': 'Falling as ₹880cr of cash builds up; the business itself still earns 30%-plus margins.',
                'Shilpa Medicare': 'Management states 18.3% excluding the biologics and new-molecule businesses, which are still filling.',
                'Shree Ganesh Remed.': 'Consolidated ratios are filed only from FY24.',
                'IOL Chem & Pharma': 'FY22 ratio not shown in the filing.',
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios: debtor days + inventory days − payable days.',
            note: 'The number of days between paying for raw materials and being paid by the customer. Long cycles are normal for multi-step chemistry; what matters is the direction.',
            values: {
                'Alivus Life Sciences': [190, 202, 235, 248, 267],
                'Concord Biotech': [368, 357, 306, 310, 493],
                'Supriya Lifescience': [160, 171, 114, 146, 167],
                'Shilpa Medicare': [323, 268, 278, 342, 301],
                'NGL Fine-Chem': [120, 93, 83, 81, 104],
                'Acutaas Chemicals': [107, 111, 125, 121, 149],
                'Blue Jet Healthcare': [183, 199, 206, 262, 240],
                'Shree Ganesh Remed.': [null, null, 164, 238, 236],
                'IOL Chem & Pharma': [79, 86, 69, 73, 68],
                'Aarti Drugs': [123, 123, 115, 129, 121],
                'SMS Pharmaceuticals': [270, 230, 192, 237, 260],
                'Solara Active Pharma': [308, 252, 120, 134, 140],
            },
            cellNotes: {
                'Concord Biotech': 'FY26: 485 inventory days as sales fell 12%. Not discussed on the Q1 FY27 call.',
                'Supriya Lifescience': 'Q1 FY27 (company): inventory of ₹230–240cr, built ahead of a maintenance shutdown that was then cancelled; to be run down over 3–4 quarters.',
                'Acutaas Chemicals': 'Q1 FY27 (company): working capital 99 days against 91 in Q4 FY26.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss: cash from operating activities ÷ operating profit. The last column divides five years of operating cash by five years of operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Above 100% means stock and receivables were run down; below 50% means profit is being tied up in them. Blank where operating profit was negative. Quarterly cash flows are not filed; what managements said about Q1 FY27 is in section 5.',
            values: {
                'Alivus Life Sciences': [97, 48, 61, 57, 71, 67],
                'Concord Biotech': [77, 72, 61, 48, 73, 64],
                'Supriya Lifescience': [23, 50, 64, 63, 63, 54],
                'Shilpa Medicare': [52, 182, 57, 41, 79, 69],
                'NGL Fine-Chem': [21, 100, 37, 91, 54, 53],
                'Acutaas Chemicals': [-11, 54, 98, 51, 61, 55],
                'Blue Jet Healthcare': [59, 65, 104, 12, 114, 66],
                'Shree Ganesh Remed.': [null, null, 71, 79, 69, null],
                'IOL Chem & Pharma': [36, 54, 126, 89, 79, 76],
                'Aarti Drugs': [21, 43, 112, 84, 81, 68],
                'SMS Pharmaceuticals': [39, 40, 43, 59, 35, 43],
                'Solara Active Pharma': [null, 116, null, 103, 82, null],
            },
            cellNotes: {
                'Shilpa Medicare': 'FY23 is inflated because operating profit collapsed to ₹99cr that year.',
                'Blue Jet Healthcare': 'FY25: only ₹46cr of operating cash on ₹378cr of profit; recovered to 114% in FY26.',
                'Solara Active Pharma': 'FY22 operating cash was −₹242cr and FY24 operating profit was negative, so those years and the five-year total are left blank.',
                'Shree Ganesh Remed.': 'Consolidated cash flows are filed only from FY24.',
                'SMS Pharmaceuticals': 'Borrowings rose from ₹254cr (FY23) to ₹365cr (FY26) while profit grew.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'reg', label: 'Written into customers’ filings', description: 'Drug master files and certificates in customers’ approvals, plus clean inspections: switching supplier forces the customer to refile.' },
            { key: 'tech', label: 'Hard chemistry', description: 'Processes few can run: fermentation, high-potency containment, iodine chemistry, multi-step and flow chemistry.' },
            { key: 'cost', label: 'Cost position', description: 'Backward integration into starting materials, or scale that lowers unit cost.' },
            { key: 'breadth', label: 'Breadth of customers and molecules', description: 'How far revenue is spread; a D means one customer or molecule can move the year.' },
            { key: 'pass', label: 'Pricing power', description: 'Whether cost increases this quarter were passed on in full, in part, or late.' },
        ],
        rows: [
            { company: 'Alivus Life Sciences', trend: 'widening', trendNote: 'Customers other than Glenmark grew 26.5% in Q1 (volume +21–22%, price −1–2%) while gross margin rose to 60.2%.',
                grades: { reg: { grade: 'A', note: '617 master files and certificates; US FDA VAI and NAI' }, tech: { grade: 'A', note: '29 high-potency APIs, 13 validated' }, cost: { grade: 'B', note: 'Membrane solvent recovery; no starting-material integration' }, breadth: { grade: 'C', note: 'Glenmark still ~28% of sales' }, pass: { grade: 'B', note: '“Passed on a part”; not across the board' } } },
            { company: 'Concord Biotech', trend: 'widening', trendNote: 'Won customers by cutting price, yet gross margin rose to 78.9%; currency also added about 10% to export revenue.',
                grades: { reg: { grade: 'B', note: 'Brazil inspection cleared; two US product approvals' }, tech: { grade: 'A', note: '1,250 cubic metres of fermentation' }, cost: { grade: 'A', note: 'Lowest-cost producer in its molecules' }, breadth: { grade: 'B', note: 'Growth across four therapy groups' }, pass: { grade: 'B', note: 'Uses price as a weapon' } } },
            { company: 'Supriya Lifescience', trend: 'stable', trendNote: 'Franchise intact; an export-authorisation lapse and a water shortage exposed weak operating controls.',
                grades: { reg: { grade: 'B', note: 'EU audit of Ambernath due November' }, tech: { grade: 'B', note: 'Anaesthetics, psychotropics' }, cost: { grade: 'A', note: '72% of revenue fully integrated' }, breadth: { grade: 'B', note: 'Asia 39%, Europe 35%, LatAm 20%' }, pass: { grade: 'B', note: 'Order-by-order pricing' } } },
            { company: 'Shilpa Medicare', trend: 'widening', trendNote: 'Formulations doubled in Q1; biologics +42%. Raichur still carries a US Warning Letter.',
                grades: { reg: { grade: 'C', note: 'Raichur Warning Letter; US supplied via other makers' }, tech: { grade: 'A', note: 'Patches, films, biologics, antibody-drug conjugates' }, cost: { grade: 'C', note: 'Plants under-used' }, breadth: { grade: 'B', note: 'API, formulations, biologics' }, pass: { grade: 'C', note: '“Partially”' } } },
            { company: 'NGL Fine-Chem', trend: 'stable', trendNote: 'MD: competition “continues to be the same”; 20%-plus margins unlikely for two to three years.',
                grades: { reg: { grade: 'C', note: '3 EU certificates; US registration not yet triggered' }, tech: { grade: 'C', note: 'Veterinary APIs, some complex' }, cost: { grade: 'C', note: 'Outsources ~20% of intermediates' }, breadth: { grade: 'B', note: 'Top 10 customers 29%' }, pass: { grade: 'C', note: 'Fixed-price contracts; partial pass-through' } } },
            { company: 'Acutaas Chemicals', trend: 'widening', trendNote: 'Battery-chemical plant commissioned on contract; Korean semiconductor plant ahead of schedule.',
                grades: { reg: { grade: 'B', note: 'Validated with innovators; intermediates, not APIs' }, tech: { grade: 'A', note: 'Continuous-flow chemistry; electrolyte additives' }, cost: { grade: 'B', note: 'Sachin plant 83% used' }, breadth: { grade: 'C', note: 'Contract growth tied to one anchor product' }, pass: { grade: 'B', note: 'Gross margin up 466bp in a cost shock' } } },
            { company: 'Blue Jet Healthcare', trend: 'narrowing', trendNote: 'Revenue down 17% on the year; Divi’s has signed contrast-media contracts and management declined to comment.',
                grades: { reg: { grade: 'B', note: 'Qualified with global innovators' }, tech: { grade: 'A', note: 'Iodinated contrast intermediates' }, cost: { grade: 'B', note: 'Mahad backward integration due H2 FY27' }, breadth: { grade: 'D', note: 'Few contrast buyers; one cardiovascular molecule' }, pass: { grade: 'C', note: 'No price clause triggered yet' } } },
            { company: 'Shree Ganesh Remed.', trend: 'narrowing', trendNote: 'Base business “at a plateau”; new contract work not yet significant; Q1 revenue −42%.',
                grades: { reg: { grade: 'C', note: 'Customer audits only' }, tech: { grade: 'B', note: 'Halogenation, Grignard, multi-step' }, cost: { grade: 'C', note: 'Sub-scale' }, breadth: { grade: 'D', note: 'A few contracts decide the year' }, pass: { grade: 'C', note: 'Domestic prices under pressure' } } },
            { company: 'IOL Chem & Pharma', trend: 'widening', trendNote: 'Products other than ibuprofen reached 43% of pharma sales (+67%); paracetamol capacity tripled.',
                grades: { reg: { grade: 'B', note: 'Certificates for all products; 5 US approvals' }, tech: { grade: 'D', note: 'Commodity molecules' }, cost: { grade: 'A', note: 'Integrated into its own chemicals' }, breadth: { grade: 'B', note: 'Six-plus growth products' }, pass: { grade: 'B', note: 'Passed on, with a lag on one large contract' } } },
            { company: 'Aarti Drugs', trend: 'widening', trendNote: 'Sayakha methylamine plant at 65%; first US FDA approval for an API plant after ten years.',
                grades: { reg: { grade: 'C', note: 'US approval new; 9 EU certificates' }, tech: { grade: 'D', note: 'Metformin, antibiotics' }, cost: { grade: 'A', note: 'Own methylamines (60–70% still bought in Q1)' }, breadth: { grade: 'B', note: 'Five therapy groups' }, pass: { grade: 'B', note: 'Prices +16–17% in Q1' } } },
            { company: 'SMS Pharmaceuticals', trend: 'stable', trendNote: 'Integration lifted margins to 20%, but solvent costs cut gross margin and one customer is 28% of sales.',
                grades: { reg: { grade: 'C', note: '12 filings in FY26' }, tech: { grade: 'C', note: 'Ibuprofen, antiretrovirals' }, cost: { grade: 'B', note: '₹150cr-plus of integration' }, breadth: { grade: 'D', note: 'One customer 28%' }, pass: { grade: 'C', note: 'Gross margin −2 points on solvents' } } },
            { company: 'Solara Active Pharma', trend: 'widening', trendNote: 'Base business crossed ₹300cr a quarter; ibuprofen losses continue and a decision is due.',
                grades: { reg: { grade: 'B', note: 'Clean inspections at Mangalore and Ambernath' }, tech: { grade: 'B', note: 'Base molecules at 52–55% gross margin' }, cost: { grade: 'D', note: 'Ibuprofen uncompetitive on a 20-year-old process' }, breadth: { grade: 'B', note: '15–16 products are 75% of sales' }, pass: { grade: 'B', note: '₹30cr passed through in Q1' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation and key takeaways',
            body: [
                "Ranked by attractiveness at today's prices. The ranking weighs how durable the moat is, how much of the margin is structural, whether profit turns into cash and what the price already assumes. Each line says what the company does and why it ranks where it does. Sections 3–8 support it.",
            ],
            embed: 'ranking',
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "Five views of the same 12 companies, grouped by business model. Use the buttons to switch between them. Every figure comes from filed results or filed ratios; where a figure is missing it is left blank, not estimated. Hover over a cell for any caveat. **API makers sell product, not projects, so there are no order books to chart.**",
                "**Why these figures differ from the rest of the dashboard.** Several of the dashboard's own quarterly records are incomplete or wrong for this group. Concord shows a Q4 FY26 of zero revenue, Blue Jet a Q4 margin of zero, and the dashboard has no Q1 FY27 figures at all for SMS, NGL or Shree Ganesh. The charts below are built from the filings.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "An active ingredient is the chemical that makes a medicine work. The companies here make it, or the step just before it, and sell it to the formulator who turns it into tablets or injections.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Key starting material → intermediate → **active ingredient** → finished dose → approval and sale. Indian companies are strong at the third step and weak at the first two. **The profit pool sits where the chemistry is hardest and where the supplier is named in the customer's approval.** That is why a niche API maker earns 30%-plus margins and a metformin maker earns 12–14%.",
                },
                {
                    label: 'Demand drivers',
                    text: "Volume grows with generic medicine consumption, 4–8% a year for mature molecules. The bigger drivers are patent expiries, which let generic makers launch and need a qualified API supplier (Alivus's launches start with expiries from late 2027), and customers diversifying away from single Chinese suppliers. Newer demand comes from outside pharma: battery electrolyte additives (Acutaas), semiconductor intermediates (Acutaas, Shree Ganesh) and veterinary parasiticides (NGL).",
                },
                {
                    label: 'Cyclicality',
                    text: "**High for the volume makers, low for the niche makers.** Commodity APIs swing with Chinese capacity and solvent prices: NGL's margin went from 31% (FY21) to 10% (FY25) and back to 17%, and its MD called 2024–25 “a classical oversupply situation”. This quarter's West Asia conflict pushed solvent and key-starting-material prices up 50–100% in March and April. Customers stockpiled, and the volume makers' prices rose with them. Niche makers move less because their molecules are specified in the customer's filing.",
                },
                {
                    label: 'Policy dependence',
                    text: "**China is the policy that matters most.** India's imports of APIs, intermediates and starting materials rose from ₹27,361cr in FY21 to ₹36,124cr in FY25. The production-linked incentive scheme has substituted about ₹2,192cr of imports against a ₹6,940cr outlay. Anti-dumping duties help and arrive late: Aarti Drugs' salicylic acid case was pushed back a year. US tariffs on generics are due from 2028 and do not yet cover APIs. Chinese pricing decides the volume makers' year: Chinese producers cut salicylic-acid prices after Aarti Drugs built capacity, and raised veterinary API prices from May, which helped NGL.",
                },
                {
                    label: 'Where the profit pools sit',
                    text: "The table uses each group's filed results. Niche filing-based makers earn the most for the longest. Anchor-molecule makers earn as much, but less predictably. The volume makers' returns have fallen for four years and are only now recovering on war-driven prices.",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who is in it', 'Operating margin (last five quarters)', 'Return on capital (five years)', 'Why'],
                    rows: [
                        ['Niche APIs sold on filings', 'Alivus, Concord, Supriya, Shilpa', '25–37%', '1–43%; Alivus and Supriya mostly 20%+', 'Named in customers’ approvals; hard chemistry'],
                        ['Veterinary APIs', 'NGL', '11–17%', '10–34%, volatile', 'Unregulated markets with 60 competitors; US and EU filings coming'],
                        ['Custom intermediates, anchor molecules', 'Acutaas, Blue Jet, Shree Ganesh', '23–42%', '14–53%', 'Few qualified suppliers, but revenue follows a few molecules'],
                        ['Volume APIs, integrated', 'IOL, Aarti Drugs, SMS', '9–21%', '4–21%; mostly 11–15%', 'Cost position is the only lever; prices set by China'],
                        ['Turnaround', 'Solara', '11–18%', '−9% to 6%', 'A good base business carrying a loss-making ibuprofen plant'],
                    ],
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things can protect an API maker's profits. Each company is graded on each one. The grade is the reason a customer cannot easily move the business. Direction says whether that protection is growing or shrinking, based on what was said on the latest call.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Strongest: Alivus and Concord',
                    text: "**Alivus** is written into more customer filings than anyone here (617 master files and certificates) and holds clean US inspections at both main sites. Its growth outside Glenmark came from volume (+21–22%) while prices fell only 1–2%, which is what a filing moat looks like. **Concord** has the only physical moat on the page: 1,250 cubic metres of fermentation that a rival cannot buy quickly. It proved its cost position by winning customers on price while gross margin rose, although currency added about 10% to its export revenue.",
                },
                {
                    label: 'Real but narrow: Acutaas, Blue Jet, Supriya',
                    text: "**Acutaas** and **Blue Jet** have chemistry few can run, but each depends on a few molecules. Acutaas says its contract growth is concentrated in one anchor product and “will be diluted over the years”. Blue Jet's cardiovascular intermediate restarted after customer destocking, and its contrast-media book sells to a handful of global makers. **Supriya's** 72% integration is the best cost moat among the niche makers, but a two-day lapse on a psychotropic export authorisation put a general manager in custody.",
                },
                {
                    label: 'Weakest: SMS, Shree Ganesh, NGL',
                    text: "**SMS** has one customer at 28% of sales and saw gross margin fall two points when solvent prices rose, which says its integration does not yet protect it. **Shree Ganesh's** base business is “at a plateau”, with more players entering its domestic products. **NGL** still competes with about 20 Indian and 40 Chinese makers in unregulated markets, and its MD said the price erosion in Fluralaner “has already taken place”.",
                },
                {
                    label: 'Widening versus narrowing',
                    text: "**Widening:** Alivus (non-Glenmark growth), Concord (share gains), IOL (43% of pharma sales now outside ibuprofen), Aarti Drugs (own methylamines, first US API approval), Acutaas (battery plant running on contract), Solara (base business above ₹300cr a quarter). **Narrowing:** Blue Jet, where Divi's has signed long-term contracts for iodinated contrast media and management said it would not answer the question, and Shree Ganesh, where revenue has been stuck at ₹90–120cr for four years.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Divi's Laboratories** is the benchmark Indian API and custom-synthesis maker and is now entering contrast media. **Chinese producers** set the price in metformin, ibuprofen, paracetamol, salicylic acid and veterinary APIs, and are building US filings at three times their 2021 rate. **Laurus Labs** and **Granules** compete in integrated volume APIs. In fermentation, Concord's rivals are mostly Chinese and European.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "The margin chart in section 2 shows four patterns. Only the first is structural across a cycle.",
            ],
            points: [
                {
                    label: 'High and steady: structural',
                    text: "**Alivus (29–34%), Shilpa (28–29%) and Concord (30–36%)** held their margins through the worst input-cost quarter in years. Alivus lifted gross margin to 60.2% through new launches and a membrane solvent-recovery system, and management says 34% is possible if the war eases. It guides 30–32% because as the Glenmark book recovers in H2, the blend comes down. Concord's 32% includes injectable and US front-end costs; excluding them it is 37%, and management targets 40% in FY28.",
                },
                {
                    label: 'High but lumpy: tied to a few molecules',
                    text: "**Acutaas (25–42%), Blue Jet (25–34%) and Shree Ganesh (23–34%)** earn high margins when their anchor molecules ship and lose them when they do not. Acutaas guides FY27 margins “similar to FY26” (about 36%), below Q4's 42%. Blue Jet's gross margin fell three points to 53% because contracts reprice with a lag, and no price-increase clause had been triggered by July. Shree Ganesh calls 26–28% sustainable and printed 23%.",
                },
                {
                    label: 'Rising on a borrowed tailwind',
                    text: "**IOL (10–15%), Aarti Drugs (9–14%) and Solara (11–18%).** All three widened in the war quarter, and all three said so. Aarti Drugs' prices rose 16–17% while volume grew 3.5%, and the CFO said “when the raw material prices go down, then probably the selling prices will come down.” IOL guides 14–15% for FY27 and hopes for 15–17% in FY28, “based on the current scenario”. **Only Aarti Drugs' own methylamines (worth about one point of gross margin at full use) and IOL's shift away from ibuprofen are structural.**",
                },
                {
                    label: 'Under pressure',
                    text: "**Supriya** fell from 35–37% to 25% in one quarter (water shortage, solar charge, higher solvents) and still guides 33–35%. **SMS** slipped from 21% to 17% in Q4 on solvents before recovering to 20%. **NGL** is at 17%, inside its 15–18% band, but its MD does not expect a return to the 20–21% it earned before the downturn for two to three years.",
                },
                {
                    label: 'A margin only counts if it turns into cash',
                    text: "The last chart in section 2 compares operating cash with operating profit. Over five years: **IOL 76%, Shilpa 69%, Aarti Drugs 68%, Alivus 67%, Blue Jet 66%, Concord 64%, Acutaas 55%, Supriya 54%, NGL 53% and SMS 43%.** The volume makers convert better than their margins suggest because their stock turns quickly (IOL's cash cycle is 68 days). The niche makers convert worse because their chemistry needs long campaigns and deep inventory. Concord is the one to watch: 485 days of inventory at the end of FY26, a year when sales fell 12%.",
                },
                {
                    label: 'What Q1 FY27 cash tells us',
                    text: "Indian companies file cash flows only half-yearly, so the quarter is visible only where management spoke about it (table below). **Alivus** generated ₹90cr of free cash after ₹85cr of capex and holds ₹880cr. **Solara** used ₹35cr of operating cash, plus ₹100cr of rights money, to cut net debt by 22%. **Supriya** is sitting on ₹230–240cr of inventory built for a shutdown it then cancelled, which should turn into cash over three to four quarters if the sales arrive. **Acutaas's** working capital lengthened from 91 to 99 days. None of the volume makers gave a cash figure.",
                },
            ],
            tables: [
                {
                    caption: 'How structural is each margin?',
                    columns: ['Company', 'Range (5 quarters)', 'Verdict', 'Why'],
                    rows: [
                        ['Alivus Life Sciences', '29–34%', '**Structural**', 'Filings, high-potency products, solvent recovery; guided 30–32%'],
                        ['Concord Biotech', '30–36%', '**Structural, rising**', 'Fermentation cost lead; 37% before new-business costs'],
                        ['Supriya Lifescience', '25–37%', '**Structural, disrupted**', '72% integrated; Q1 hit by water and power'],
                        ['Shilpa Medicare', '28–29%', '**Structural**', 'Complex products; licensing income ~₹200cr a year'],
                        ['NGL Fine-Chem', '11–17%', '**Cyclical**', 'Veterinary price war; 15–18% guided'],
                        ['Acutaas Chemicals', '25–42%', '**Structural at ~35%, lumpy**', 'Flow chemistry; anchor-product mix'],
                        ['Blue Jet Healthcare', '25–34%', '**Structural, concentrated**', 'Iodine chemistry; few buyers'],
                        ['Shree Ganesh Remed.', '23–34%', '**At risk**', 'Revenue too small to absorb a lost order'],
                        ['IOL Chem & Pharma', '10–15%', '**Above mid-cycle**', 'Historic 10–12%; war pricing now'],
                        ['Aarti Drugs', '9–14%', '**Above mid-cycle**', '16–17% price gain in Q1 will fade'],
                        ['SMS Pharmaceuticals', '17–21%', '**Partly structural**', 'Integration helps; solvents still bite'],
                        ['Solara Active Pharma', '11–18%', '**Two businesses**', 'Base ~23–25%; ibuprofen negative'],
                    ],
                },
                {
                    caption: 'Q1 FY27 cash, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Alivus Life Sciences', 'Free cash ₹90cr after ₹85cr capex; inventory to rise to secure supply', 'Cash ₹880cr, debt-free'],
                        ['Solara Active Pharma', '₹35cr of operating cash used to repay debt', 'Net debt ₹479cr (1.9x EBITDA); ₹440cr targeted by March 2027'],
                        ['Supriya Lifescience', 'Inventory ₹230–240cr, to be liquidated over 3–4 quarters; no working-capital lines used', 'Cash ₹150cr'],
                        ['Acutaas Chemicals', 'Working capital 99 days (91 in Q4)', 'Net cash ₹314cr'],
                        ['Concord Biotech', 'Capex ₹9.5cr; no cash-flow figure given', 'Cash ₹442cr, no debt'],
                        ['Shilpa Medicare', 'Capex ₹114cr “funded through internal accruals”', 'Net debt 1.3x EBITDA (6.7x three years ago)'],
                        ['Blue Jet Healthcare', '₹30cr of goods in transit at quarter end', 'Raised money through a share placement (QIP)'],
                        ['IOL, Aarti Drugs, SMS, NGL, Shree Ganesh', 'No Q1 cash figure given', '—'],
                    ],
                    note: 'SMS, NGL and Shree Ganesh have no Q1 FY27 call transcript on file; their latest calls are for Q4 FY26.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "What each management says it will deliver, what it is spending, what it expects to earn on that spending, and whether it delivered last time. My observations come first; the full table follows.",
            ],
            points: [
                {
                    label: 'The niche makers barely need capital; two of them are spending anyway',
                    text: "Concord spent ₹9.5cr in Q1 and says its existing plants can support about ₹3,000cr of revenue in five to six years, against ₹1,055cr in FY26. Unit 3 is 55% used, partly on starting materials it could buy in. **That is the most capital-efficient growth on the page, if the demand arrives.** Alivus is the exception among the niche makers: ₹540cr this year, a fifth of revenue, on a new Sholapur site that slipped a quarter and can serve only unregulated markets until an inspection. Management says it will not hurry the second phase “to get into a situation where we have a lot of under-absorption”, which is the right instinct.",
                },
                {
                    label: 'The anchor-molecule makers are spending ahead of revenue',
                    text: "**Blue Jet** is committing ₹1,000cr to Vizag over three years, larger than its FY26 revenue of ₹947cr, while that revenue is falling. The CFO said commercialisation starts at the end of FY29 or in FY30, full ramp-up in FY31–32, and that its current 4x asset turn will fall to “industry standards” as the new block is capitalised. **Acutaas** is funding battery and semiconductor plants whose revenue it will not disclose. Its one number is ₹1,000cr of contract revenue by FY28, built on four validated products worth ₹50–100cr each at peak.",
                },
                {
                    label: 'The volume makers are buying cost position, which is the right kind of capex',
                    text: "Aarti Drugs has finished ₹600cr of greenfield work at about 1.5x asset turn and now plans brownfield additions it expects to earn 3–4x, because the utilities are already built. It is taking metformin from 1,400 to 2,200 tons a month, including a 500-ton US block. IOL spends ₹200–250cr a year from its own cash and has tripled paracetamol capacity to 10,800 tons, now 55% used with 70% targeted by year end. SMS is adding ₹280cr of brownfield capacity (₹130cr spent) to take ibuprofen from 500 to 800 tons a month by March 2027. **None of this raises what the product sells for; it lowers what it costs to make.**",
                },
                {
                    label: 'Read guidance by who is giving it',
                    text: "**Conservative guiders:** Alivus (guided 30–32% margin, delivered 36.6% stated) and IOL (refused to raise guidance after a 37% quarter). **Precise guiders:** Solara (net debt target met early) and Acutaas (plants on or ahead of schedule). **Slippers:** Concord (FY26 revenue fell 12% against a growth plan; injectables two quarters late), Supriya (contrast media delayed two quarters; Q1 margin 25% against a 33–35% guide it kept), SMS (Q1 +6% against 15%), NGL (capex up from ₹160cr to ₹210cr; commissioning a quarter late).",
                },
                {
                    label: 'Growth that needs a regulator',
                    text: "Much of the next leg waits on an approval the company does not control. Alivus needs an inspection at Sholapur. Supriya needs its November EU audit at Ambernath and a certificate for its anaesthetic. NGL needs a US customer to file, which triggers the FDA audit: “it can happen in the current year or probably next year”. Aarti Drugs needs FDA clearance of a metformin block that is 10–12 months from completion. Shilpa's Abraxane, Enzalutamide and Rotigotine launches are FY28 events.",
                },
                {
                    label: 'Solara is the one where a decision, not a plant, releases value',
                    text: "The base business grew 24% (18–19% excluding cost pass-through) to ₹307cr at about 25% EBITDA margins. The ibuprofen unit, with about ₹700cr of capital deployed, loses ₹10–15cr a quarter. Management has said full recovery of that capital is “far-fetched” and promises a decision with the Q2 results. **Its only capex is ₹40cr of debottlenecking on high-margin lines, with a payback of two to three quarters.**",
                },
            ],
            tables: [
                {
                    caption: 'Guidance, capex and track record',
                    columns: ['Company', 'Guidance', 'Capex', 'Expected return', 'Track record'],
                    rows: [
                        ['Alivus Life Sciences', 'Revenue +10–12%; margin 30–32%', '₹540cr FY27 (Sholapur, Dahej, Ankleshwar)', 'Not quantified', '**Conservative**: margin beat; Sholapur a quarter late'],
                        ['Concord Biotech', 'Growth above 18% historical; 40% margin by FY28', '₹9.5cr in Q1; capacity for ~₹3,000cr', 'Injectables ~₹600cr potential', '**Missed** FY26 (−12%); injectables late'],
                        ['Supriya Lifescience', '~₹1,000cr (+21%); margin 33–35%', '₹200cr Patalganga phase 1', 'Not quantified', '**Slipping**: Q1 margin 25%; contrast media late'],
                        ['Shilpa Medicare', 'None; margin ~30%', '₹114cr in Q1; peptide block by end FY27', 'Adjusted return 18.3%', '**Largely met**; albumin filing slipped'],
                        ['NGL Fine-Chem', 'Margin 15–18%; ₹150cr+ a quarter', '₹210cr phase 2 (₹183cr spent)', '₹350–400cr peak revenue in 3–4 years', '**Mixed**: cost overrun; margin on track'],
                        ['Acutaas Chemicals', 'Revenue +25%; margin ~FY26', '~₹95cr FY27, plus R&D centre and land', '₹1,000cr contract revenue FY28', '**Delivering**: battery plant live; Korea early'],
                        ['Blue Jet Healthcare', 'None', '₹1,000cr over 3 years (₹250cr in FY27)', 'Revenue from FY29–30', '**Weak**: FY26 revenue −8%; Q1 −17%'],
                        ['Shree Ganesh Remed.', 'None; margin 26–28%', 'Block 7 in Q2 FY27; Dahej deferred', '1.8–2x asset turn', '**Stalled**: revenue ₹90–120cr for four years'],
                        ['IOL Chem & Pharma', 'Revenue +15–20%; margin 14–15%', '₹200–250cr a year, self-funded', 'Triacetin ~₹100–120cr a year', '**Conservative**: beat, did not raise'],
                        ['Aarti Drugs', 'Volume +10–15% for two years; margin to 15%', '₹600cr done; brownfield next', '1.5x done; 3–4x on brownfield', '**On track**: Sayakha ahead; duty delayed'],
                        ['SMS Pharmaceuticals', 'Revenue +15%; margin above 20%', '₹280cr brownfield (₹130cr spent)', 'Revenue from FY28', '**Behind**: Q1 +6%'],
                        ['Solara Active Pharma', 'Base business +10%; margin 25% ±1', '₹55–60cr FY27', 'Payback in 2–3 quarters', '**Met** debt targets; ibuprofen decision due'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "Sector-wide risks first, then each company. The table records which risks management addressed on the call and which it avoided or left unresolved.",
            ],
            points: [
                {
                    label: 'The war-price reversal',
                    text: "Volume API margins are currently inflated by solvent and starting-material shortages. When prices normalise, IOL, Aarti Drugs, SMS and NGL lose that together. **Because they all benefit from the same condition, owning three of them is one bet, not three.**",
                },
                {
                    label: 'China building the same moat',
                    text: "Chinese companies are now filing more new US master files than India. A filing moat protects the incumbent's existing customers, but new launches will increasingly face a qualified Chinese second source.",
                },
                {
                    label: 'Concentration',
                    text: "One customer or one molecule can move the year at Alivus (Glenmark), Acutaas (anchor product), Blue Jet (contrast buyers, one cardiovascular intermediate), SMS (28% customer) and Shree Ganesh (three contracts).",
                },
                {
                    label: 'Compliance and controls',
                    text: "Shilpa's Raichur plant has a US Warning Letter. Supriya's export lapse led to a criminal case. The sale on that consignment was booked without a provision while the matter is before the High Court. A single inspection outcome can close a regulated market for years.",
                },
                {
                    label: 'Capital ahead of revenue',
                    text: "Blue Jet (₹1,000cr), Alivus (₹540cr this year), Supriya (₹200cr) and NGL (₹210cr) are all spending before the approvals that justify it. Depreciation starts when the plant is finished; revenue starts when the customer's product is approved.",
                },
            ],
            tables: [
                {
                    caption: 'Company-specific risks and how management handled them',
                    columns: ['Company', 'Key risk', 'Addressed on the call', 'Avoided or unresolved'],
                    rows: [
                        ['Alivus Life Sciences', 'Glenmark dependence; starting-material inflation', 'Glenmark “flattish” at worst for FY27, weighted to H2; solvent recovery; costs passed on in part', 'Sholapur can serve only unregulated markets until inspected'],
                        ['Concord Biotech', 'FY26 decline; 485 inventory days; injectables at 5% use', 'Q4 orders spilled into Q1; injectables sold domestically first', '**Could not say at what utilisation injectables break even (“let me come back to you”)**; inventory not discussed'],
                        ['Supriya Lifescience', 'Compliance; operating resilience; ₹1,000cr guidance', 'Water and power explained; new export authorisation received', '**Sale on the disputed consignment booked with no provision**; general manager still in custody'],
                        ['Shilpa Medicare', 'Raichur Warning Letter; clinical failures; licensing quality', 'Said the Warning Letter has no revenue impact (US supplied through other makers)', '**Declined product-level sales, plant utilisation and segment returns**'],
                        ['NGL Fine-Chem', 'US FDA timing; price competition', 'Candid: no control over FDA timing; competition unchanged', 'Currency and investment losses in Q4 not quantified'],
                        ['Acutaas Chemicals', 'Contract revenue concentrated in one product', 'Acknowledged; says new products will dilute it', '**Would not split contract and base revenue or give battery revenue**'],
                        ['Blue Jet Healthcare', 'Falling revenue; few buyers; Divi’s entering contrast media', '₹30cr goods in transit explained', '**Declined to discuss Divi’s contrast contracts (“Not to answer this question”)**; no price clause triggered'],
                        ['Shree Ganesh Remed.', 'Stagnant revenue; opacity', 'Admitted the base business is at a plateau', '**Customer names and contract revenue withheld**'],
                        ['IOL Chem & Pharma', 'Earnings above mid-cycle', 'Said no inventory gain this quarter; FY28 view hedged', '**Declined the volume versus price split**'],
                        ['Aarti Drugs', 'Price windfall reversing', 'Admitted Q1 was price-led and prices will ease', 'Salicylic acid losses until the duty arrives, now a year later'],
                        ['SMS Pharmaceuticals', 'Associate profit; customer concentration; debt', 'Associate VKT’s ₹14cr disclosed; related-party sales explained', 'No Q1 FY27 call on file; Q1 growth of 6% against 15% guidance unexplained'],
                        ['Solara Active Pharma', '₹700cr in ibuprofen', 'Admitted full recovery is “far-fetched”; decision by Q2 results', 'Size of any write-down deferred to Q2'],
                    ],
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "A price only makes sense against the growth it assumes. The rough rule used here: to earn about 12% a year while the multiple drifts down to a mature 18 times over ten years, earnings must compound at roughly **13% at 20x, 16% at 25x, 18% at 30x, 21% at 40x, 26% at 60x and 33% at 100x.** The chart shows return on capital against the P/E; the table sets each company's required growth against what it is delivering and guiding.",
            ],
            embed: 'scatter',
            embedFirst: true,
            points: [
                {
                    label: 'Plausible',
                    text: "**Alivus** (28x; needs ~17%; revenue guided 10–12% with margins rising and ₹880cr of cash, so earnings can grow faster than sales). **Aarti Drugs** (20.5x; needs ~14%; volume guided 10–15%, but part of today's earnings is war pricing).",
                },
                {
                    label: 'Full',
                    text: "**IOL** (34x; needs ~19%; guides 15–20% for two years at a business with a 9–14% return history). **Supriya** (37x; needs ~20%; guides ~21% this year and ~20% after, but converts only 54% of profit to cash). **NGL** (34x; needs ~19%; delivering 34% growth into a price war).",
                },
                {
                    label: 'Stretched',
                    text: "**Acutaas** (73x; needs ~29%; guides 25%). **Shilpa** (70x; needs ~28% from an 11% return). **Concord** (55x; needs ~25% after a year of −12%). **Blue Jet** (46x; needs ~23% while revenue falls). **SMS** (41x; needs ~22%; delivering 6%). **Shree Ganesh** (58x; needs ~26%; revenue down 42%).",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Solara** trades at 845x because consolidated profit is the base business net of the ibuprofen loss. On the base business alone, EBITDA of about ₹72cr a quarter against a market value of ₹3,606cr plus ₹479cr of net debt is roughly 14 times annualised EBITDA. That is fair if the ibuprofen decision stops the losses.",
                },
            ],
            tables: [
                {
                    caption: 'What the price assumes',
                    columns: ['Company', 'P/E', 'Return on capital (5-yr range)', 'Growth the price needs', 'What it is delivering or guiding', 'Verdict'],
                    rows: [
                        ['Alivus Life Sciences', '28.3', '24–42%', '~17%', 'Revenue +10–12%, margins rising', '**Plausible**'],
                        ['Concord Biotech', '54.9', '17–28%', '~25%', '+26% Q1 after −12% FY26', '**Stretched**'],
                        ['Supriya Lifescience', '36.8', '19–43%', '~20%', '₹1,000cr guide (+21%)', '**Full**'],
                        ['Shilpa Medicare', '70.3', '1–11%', '~28%', '+43% Q1; no guidance', '**Stretched**'],
                        ['NGL Fine-Chem', '34.0', '10–34%', '~19%', '+34% Q1; margin 15–18%', '**Full**'],
                        ['Acutaas Chemicals', '72.9', '16–32%', '~29%', '+25% guided', '**Stretched**'],
                        ['Blue Jet Healthcare', '46.2', '26–53%', '~23%', '−17% Q1', '**Stretched**'],
                        ['Shree Ganesh Remed.', '58.0', '14–19%', '~26%', '−42% Q1', '**Stretched**'],
                        ['IOL Chem & Pharma', '33.8', '9–14%', '~19%', '+15–20% guided', '**Full**'],
                        ['Aarti Drugs', '20.5', '12–21%', '~14%', 'Volume +10–15%', '**Plausible**'],
                        ['SMS Pharmaceuticals', '40.6', '4–13%', '~22%', '+6% Q1; 15% guided', '**Stretched**'],
                        ['Solara Active Pharma', '845', '−9% to 6%', '—', 'Base business +10% guided', '**Value the base business**'],
                    ],
                    note: 'P/E and live returns update with the dashboard; required growth uses the P/E shown on 21 September 2026.',
                },
            ],
        },
    ],

    verdicts: [
        {
            company: 'Alivus Life Sciences', rank: 1, stance: 'COMPOUNDER', segment: NICHE,
            what: "Makes active ingredients for regulated markets in heart, nervous-system and high-potency (cancer) medicines, and a small contract-development business. It was Glenmark's API arm and is now owned by Nirma; Glenmark remains its largest customer. It sits in the customer's approval as the named supplier.",
            view: "**The best filing moat at the lowest price in the group.** 617 master files and certificates, clean US inspections, margins of 29–34% and ₹880cr of cash. At 28x it needs ~17% earnings growth against 10–12% revenue guidance with rising margins. Returns have fallen from 42% to 24% largely because cash is piling up. Glenmark is still about 28% of revenue.",
            watch: 'Glenmark orders in H2 (guided “flattish” at worst); Sholapur commissioning and inspection; use of the ₹880cr.',
        },
        {
            company: 'Concord Biotech', rank: 2, stance: 'PRICED', segment: NICHE,
            what: "Makes active ingredients by fermentation (growing them with microbes rather than synthesising them): immunosuppressants, cancer drugs, anti-infectives and antifungals. It also makes finished injections and tablets and has just started a US sales company. It is the low-cost global supplier in its main molecules.",
            view: "**The only physical moat on the page, at a price that forgets FY26.** 1,250 cubic metres of fermentation and capacity for ~₹3,000cr of revenue, already built. It won customers on price in Q1 while gross margin rose to 78.9%. But FY26 revenue fell 12%, return on capital dropped from 28% to 17%, and inventory reached 485 days. At 55x it needs ~25% growth.",
            watch: 'Inventory days falling from 485; injectables above 5% utilisation; whether the 26% growth holds without the currency lift.',
        },
        {
            company: 'Acutaas Chemicals', rank: 3, stance: 'PRICED', segment: ANCHOR,
            what: "Makes advanced intermediates (the last steps before an active ingredient) for innovators and generic makers, plus battery-electrolyte additives and semiconductor chemicals. It will not make the final API itself: “we do not compete with our customers”.",
            view: "**Best growth and best new businesses, priced for all of it.** Revenue +59%, return on capital 32%, a battery plant contracted before it was built and a Korean semiconductor plant ahead of schedule. But contract growth leans on one anchor product, five-year cash conversion is 55%, and 73x needs ~29% against 25% guided.",
            watch: 'Four validated contract products reaching their ₹50–100cr peaks from H2 FY27; battery ramp-up; working capital back below 99 days.',
        },
        {
            company: 'Aarti Drugs', rank: 4, stance: 'CYCLICAL', segment: VOLUME,
            what: "High-volume APIs (antibiotics, metformin, anti-protozoals, anti-inflammatories), specialty chemicals and a small formulations arm. It now makes its own methylamines, the key raw material for metformin, at Sayakha. It sells mostly in India.",
            view: "**The cheapest stock here and the most completed integration among the volume makers.** At 20.5x it needs ~14%. But Q1 growth was price (+16–17%), not volume (+3.5%), and management expects prices to ease. Returns have drifted from 21% to 12% over five years.",
            watch: 'Volume growth returning to 10%+; Sayakha supplying 80–90% of methylamines by December; salicylic-acid losses.',
        },
        {
            company: 'IOL Chem & Pharma', rank: 5, stance: 'CYCLICAL', segment: VOLUME,
            what: "One of the world's largest ibuprofen makers, integrated back into its own acetic chemicals, now adding paracetamol, clopidogrel, metformin, pantoprazole and fenofibrate. It sells chemicals (ethyl acetate, acetic anhydride) as a second business.",
            view: "**Well run and candid, earning above its average.** Products other than ibuprofen are 43% of pharma sales and growing 67%. It spends only its own cash and converted 76% of profit to cash over five years, the best here. But return on capital has sat at 9–14% for four years, and 34x needs ~19% for a decade.",
            watch: 'Paracetamol utilisation from 55% towards 70%; margin holding at 14% as input prices ease.',
        },
        {
            company: 'Solara Active Pharma', rank: 6, stance: 'TURNAROUND', segment: VOLUME,
            what: "Two businesses in one: a base portfolio of about 50 niche active ingredients (about 15 make up 75% of sales) earning roughly 23–25% EBITDA margins, and a large ibuprofen operation that loses money. It sells to formulators in regulated markets.",
            view: "**A good business hidden behind a bad one, with a date attached.** The base business passed ₹300cr a quarter, grew 18–19% excluding cost pass-through and has clean inspections. Net debt is down to ₹479cr. On the base business alone the stock is about 14 times EBITDA. The ibuprofen unit (₹700cr of capital) loses ₹10–15cr a quarter, and a decision is due with Q2 results.",
            watch: 'The ibuprofen decision and any write-down; net debt at ₹440cr by March 2027.',
        },
        {
            company: 'Supriya Lifescience', rank: 7, stance: 'TURNAROUND', segment: NICHE,
            what: "Niche active ingredients (anaesthetics, antihistamines, vitamins, anti-anxiety and ADHD medicines), 72% made from its own starting materials, 81% exported. It is adding finished anaesthetic products at Ambernath and contract work.",
            view: "**A strong franchise with weak operating controls.** A lapsed export authorisation put a general manager in custody. A 15–20 day water shortage cost ₹30–35cr of sales, and the margin fell to 25%. It still guides ₹1,000cr at 33–35%, which needs about ₹270cr a quarter from here. Five-year cash conversion is 54%.",
            watch: 'Q2 margin back above 30%; inventory of ₹230–240cr turning into sales; the November EU audit; the court case.',
        },
        {
            company: 'Shilpa Medicare', rank: 8, stance: 'SCALEUP', segment: NICHE,
            what: "Cancer active ingredients plus complex finished products: skin patches, oral films, injectables, biosimilars and antibody-drug conjugates. It also out-licenses its products (about ₹200cr of licensing income in FY26) and does contract development.",
            view: "**The spending is over; the payback is priced in already.** Revenue +43%, formulations doubled, and net debt fell from 6.7x to 1.3x EBITDA. But return on capital has been 1–11% for five years, and 70x needs ~28%. The Raichur Warning Letter is unresolved.",
            watch: 'Return on capital rising above 12.5%; FY28 US launches (Abraxane, Enzalutamide, Rotigotine) on time.',
        },
        {
            company: 'Blue Jet Healthcare', rank: 9, stance: 'PRICED', segment: ANCHOR,
            what: "Makes intermediates for iodinated contrast media (the dyes used in scans), high-intensity sweeteners, and an intermediate for a cardiovascular drug. It is backward-integrating at Mahad and building a ₹1,000cr multi-purpose site at Vizag.",
            view: "**Good chemistry, shrinking revenue, a big bet.** Returns of 26–53% and margins of 25–34% show what the niche earns. But Q1 revenue fell 17% on the year, and FY26 fell 8%. Vizag's ₹1,000cr earns nothing until FY29–30, and Divi's is signing contrast-media contracts. At 46x it needs ~23%.",
            watch: 'Revenue growth returning on the year; Mahad commercial by H2 FY27; any answer on Divi’s.',
        },
        {
            company: 'NGL Fine-Chem', rank: 10, stance: 'CYCLICAL', segment: NICHE,
            what: "Veterinary active ingredients, mostly for farm animals, sold largely into unregulated markets. It is registering in Europe (3 certificates) and the US (5 filings) to move up to regulated buyers, and is a domestic maker of Fluralaner, a pet parasiticide.",
            view: "**Recovering from a price war that has not ended.** Revenue +34% and the margin back to 17%. But the MD says competition is unchanged and 20%-plus margins are two to three years away. Borrowings rose from ₹32cr to ₹123cr for a ₹210cr plant, and five-year cash conversion is 53%.",
            watch: 'A US customer filing that triggers the FDA audit; margin holding inside 15–18%.',
        },
        {
            company: 'SMS Pharmaceuticals', rank: 11, stance: 'CYCLICAL', segment: VOLUME,
            what: "Mid-sized maker of ibuprofen, antiretroviral, anti-ulcer and older anti-diabetic active ingredients, partly integrated into its own intermediates. It owns about 35% of VKT Pharma, a formulation maker it also sells to.",
            view: "**The weakest cash record in the group.** Five-year conversion is 43%, borrowings rise every year, and one customer is 28% of sales. Q1 grew 6% against 15% guidance. About 14% of FY26 profit came from the VKT associate. At 41x it needs ~22%.",
            watch: 'Ibuprofen expansion to 800 tons a month by March 2027; operating cash above 60% of profit.',
        },
        {
            company: 'Shree Ganesh Remed.', rank: 12, stance: 'AVOID', segment: ANCHOR,
            what: "Very small maker of pharmaceutical and specialty-chemical intermediates, trying to become a contract manufacturer for European agrochemical and Japanese electronics customers. Listed only on the BSE.",
            view: "**Revenue has sat at ₹90–120cr for four years and just fell 42%.** The base business is “at a plateau” under price pressure. The new contracts are not yet significant, and their customers and sizes are withheld. At 58x it needs ~26%.",
            watch: 'Commercial production from the new contracts in H2 FY27; Block 7 in Q2.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Among the niche makers, Alivus Life Sciences is the one to own at today's price.** It has the deepest filing moat, clean inspections, net cash and a price that needs only ~17% growth. Concord Biotech has the rarest asset on the page, fermentation at scale, but FY26 fell 12%, inventory reached 485 days and 55x assumes that was a blip. Supriya Lifescience owns a fine franchise that has to show it can run its plants and its paperwork. Shilpa Medicare has finished spending and is growing fast, but 70x prices in a harvest its returns have not yet shown. NGL Fine-Chem is recovering in a veterinary price war that management says is not over.",
            "**The anchor-molecule makers earn niche margins without niche predictability.** Acutaas Chemicals is the best of them, with real contracts behind its new battery and semiconductor businesses, but its contract growth leans on one product and 73x prices everything. Blue Jet Healthcare's revenue is falling while it commits more than a year's revenue to Vizag. Shree Ganesh Remed. has stopped growing.",
            "**The volume makers are cycles, and this is the good part of the cycle.** Aarti Drugs is the cheapest and has actually integrated. IOL Chem & Pharma is the best run and converts the most cash. Both are earning war prices that their managements expect to fade. SMS Pharmaceuticals converts too little profit into cash and missed its first quarter. Solara Active Pharma is the most interesting: a base business worth about 14 times EBITDA carrying an ibuprofen plant that a Q2 decision could remove.",
            "**What would change my view.** Solvent and starting-material prices normalising would cut the volume makers' earnings together. Glenmark orders collapsing in H2 would change the Alivus case. Concord's inventory falling with sales growing would make it the top pick. A clear answer from Blue Jet on Divi's, or a return to growth, would lift it. Solara stopping the ibuprofen losses without a large write-down would make it the best value on the page.",
            "**What to monitor next quarter.** Alivus: Glenmark orders and Sholapur. Concord: inventory and injectables utilisation. Acutaas: working capital and first battery revenue. Aarti Drugs and IOL: whether margins hold as prices ease. Supriya: margin recovery and the EU audit. Solara: the ibuprofen decision. Blue Jet: year-on-year growth. SMS, NGL and Shree Ganesh: whether their Q1 numbers were a blip or a trend.",
        ],
        bottomLine:
            "Sort by model, then check the cash. Own Alivus Life Sciences now; buy Concord Biotech and Acutaas Chemicals only on weakness; treat Aarti Drugs and IOL Chem & Pharma as cycles at the good end; watch Solara Active Pharma's ibuprofen decision; and avoid paying niche multiples for companies whose revenue is shrinking or stuck.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/ALIVUS/' },
        { label: 'India leads essential API manufacturing while China gains ground — US Pharmacopeia', url: 'https://qualitymatters.usp.org/india-leads-essential-api-manufacturing-while-china-gains-ground' },
        { label: 'India extends lead over China in US FDA drug master file filings — Business Standard', url: 'https://www.business-standard.com/industry/news/india-outpaces-china-in-us-fda-dmf-filings-as-api-pipeline-grows-126063001375_1.html' },
        { label: 'How America can reduce its dependence on Chinese APIs — ITIF', url: 'https://itif.org/publications/2026/08/31/how-america-reduce-dependence-chinese-active-pharmaceutical-ingredients-apis/' },
        { label: 'India\'s API trap: incremental PLI gains mask a quantifiable Chinese dependency — IndraStra', url: 'https://www.indrastra.com/2026/06/indias-api-trap-incremental-pli-gains.html' },
        { label: 'US 100% tariff on patented pharma: India\'s generic exports get a temporary pass — India Briefing', url: 'https://www.india-briefing.com/news/us-patented-pharma-tariff-2026-india-generic-drug-exports-exempted-43899.html/' },
    ],
};
