import { SectorOverview } from './types';
import { healthcareBusinesses } from './healthcare-businesses';
import { healthcareValuationInputs } from './card-data/healthcare';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const KITS = 'Diagnostic kits and medical products';
const SERV = 'Research and pharma services';
const CARE = 'Care delivery and pharmacy';

export const healthcare: SectorOverview = {
    sector: 'Healthcare',
    title: 'Healthcare',
    format: 'ranked',
    businesses: healthcareBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '24 Sep 2026',
        inputs: healthcareValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Syngene International': 15,
            'Molbio Diagnostics': 18,
            'Indegene': 15,
            'Nephrocare Health': 22,
            'Vimta Labs': 14,
            'GPT Healthcare (Agilus)': 15,
            '3B Blackbio Diagnostics': 12,
            'Sastasundar Ventures': null,
            'Hemant Surgical Inds': 10,
        },
    },
    standfirst:
        "Nine healthcare companies that are neither big hospital chains, drug makers nor diagnostic chains; the six listed diagnostic chains that used to sit here now have their own note, Healthcare Diagnostic. Three sell diagnostic kits and medical products, mostly to governments: Molbio (Truenat TB tests), 3B BlackBio (PCR test kits) and Hemant Surgical (surgical supplies and X-ray units). Three sell research and services to drug companies: Syngene (contract research and manufacturing), Vimta (testing) and Indegene (marketing and medical content). Three deliver care or medicines: NephroPlus (dialysis), GPT Healthcare (ILS Hospitals in eastern India) and Sastasundar, now called Health X Platform (online medicine distribution). This edition was built from both earnings calls for every company that holds them (Molbio has held one; Hemant holds none), the FY26 annual reports (Molbio's prospectus), rating reports, and industry work from ICRA, Frost & Sullivan, the Health Ministry, the Global Fund and Charles River. The headline: these nine do not move together. Dialysis and pharma marketing services are growing fast, contract research is shrinking after one lost product, and the kit makers live on government tenders; most of the shares are priced for more growth than I expect. The annual reports turned up commissions that rose 2.6 times alongside an anti-corruption notice, a bank stock statement ₹30cr out of line with the books, and adjusted profits well above filed ones. Every chart uses filed results.",
    lastUpdated: '2026-10-01',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "Margins mean different things here. 3B BlackBio's Indian kits earn about 55% before its loss-making Belgian purchase is added, Vimta's testing lab about 35%, and hospitals and dialysis about 20%. Hemant trades imported equipment at about 10%, and Sastasundar distributes medicines at a loss. Hemant reports half-yearly, so its figures sit in the Q2 and Q4 columns.",
            values: {
                'Syngene International': [24, 22, 23, 29, 12],
                'Molbio Diagnostics': [-16, null, null, 28, 25],
                'Indegene': [20, 18, 17, 16, 16],
                'Nephrocare Health': [21, 26, 23, 19, 21],
                'Vimta Labs': [35, 33, 34, 36, 34],
                'GPT Healthcare (Agilus)': [16, 19, 18, 18, 19],
                '3B Blackbio Diagnostics': [53, 43, 43, 24, 25],
                'Sastasundar Ventures': [2, -8, -3, -7, -2],
                'Hemant Surgical Inds': [null, 12, null, 10, null],
            },
            cellNotes: {
                'Syngene International': "Q1 FY27 includes a ₹50cr loss on currency hedges; without it the margin would have been about 19%. Revenue fell 16% after Zoetis stopped buying Librela.",
                'Molbio Diagnostics': "Listed in August 2026; Screener shows only three quarters. Q1 FY26 was a small ₹100cr quarter because government orders are lumpy.",
                '3B Blackbio Diagnostics': "Falls from Q2 FY26 as the loss-making Belgian rapid-test maker Coris (bought 29 Aug 2025) is added. The India kit business alone earns about 55–58%.",
                'Hemant Surgical Inds': "Half-yearly results: the Q2 FY26 column is H1 FY26 and the Q4 FY26 column is H2 FY26.",
                'Sastasundar Ventures': "Operating loss in four of five quarters; its small reported profits come from about ₹13cr a quarter of treasury income. Now renamed Health X Platform.",
                'Nephrocare Health': "Q4 FY26 includes a one-time ₹10cr bad-debt provision on two old accounts; without it the company says the margin would have been about 25%.",
                'GPT Healthcare (Agilus)': "Standalone (it has no subsidiaries). This is GPT Healthcare, which runs ILS Hospitals; the dashboard's ‘(Agilus)’ label is wrong.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "Research services split: Indegene grew with an acquisition while Syngene shrank after losing its largest manufacturing product. NephroPlus and GPT Healthcare grew 24% and 18% in Q1 FY27, and Molbio's and Hemant's figures swing with government orders. Blanks are quarters before listing or not reported.",
            values: {
                'Syngene International': [11, 2, -3, 2, -16],
                'Molbio Diagnostics': [null, null, null, null, 308],
                'Indegene': [13, 17, 31, 33, 40],
                'Nephrocare Health': [null, null, 32, 21, 24],
                'Vimta Labs': [31, 20, 10, 16, 11],
                'GPT Healthcare (Agilus)': [9, 12, 18, 25, 18],
                '3B Blackbio Diagnostics': [14, 16, 98, 57, 51],
                'Sastasundar Ventures': [10, 10, 23, 31, 50],
                'Hemant Surgical Inds': [null, null, null, 188, null],
            },
            cellNotes: {
                'Molbio Diagnostics': "Q1 FY27 was about four times Q1 FY26 because government orders are lumpy; earlier quarters are not published. FY26 revenue grew 42%.",
                'Indegene': "Includes the BioPharm acquisition from October 2025 and currency gains. In US dollars Q1 growth was 26.5%; organic growth is no longer disclosed.",
                'Syngene International': "Q1 FY27 fell 16% after Zoetis stopped taking Librela (about $50 million of revenue). Guidance is now a single-digit decline for FY27.",
                'Hemant Surgical Inds': "Half-yearly: H2 FY26 against H2 FY25, lifted by one ₹264cr government order for handheld X-ray units.",
                '3B Blackbio Diagnostics': "Includes Coris from September 2025. Excluding Coris, Q1 FY27 revenue grew 11.8%.",
                'Nephrocare Health': "Listed in December 2025; earlier quarterly figures are not on Screener.",
                'Sastasundar Ventures': "Screener's sales include a small financial-services arm; the company's own Q1 FY27 growth was 58%.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "3B BlackBio and Vimta earn about 25% on capital. Syngene has slid to 10% as new plants sit under-used, and Indegene has fallen from 46% to 19% after acquisitions. Several companies hold large cash piles that pull these returns down.",
            values: {
                'Syngene International': [13, 15, 15, 13, 10],
                'Molbio Diagnostics': [null, null, null, 21, 18],
                'Indegene': [46, 33, 29, 25, 19],
                'Nephrocare Health': [-4, 1, 8, 14, 15],
                'Vimta Labs': [24, 24, 20, 25, 25],
                'GPT Healthcare (Agilus)': [23, 25, 30, 27, 20],
                '3B Blackbio Diagnostics': [27, 19, 21, 26, 25],
                'Sastasundar Ventures': [-7, -11, -3, -1, 0],
                'Hemant Surgical Inds': [null, null, null, null, 19],
            },
            cellNotes: {
                'Nephrocare Health': "Early years were loss-making; FY26 is diluted by IPO cash. The company's own adjusted pre-tax figure is 21–23%.",
                'Molbio Diagnostics': "Only FY25 and FY26 are on Screener's consolidated page.",
                'Hemant Surgical Inds': "Only FY26 is available on the consolidated basis.",
                'Indegene': "Falls as goodwill from acquisitions rose from ₹357cr to ₹1,134cr in FY26.",
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
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "GPT Healthcare's patients pay on the spot and its suppliers are paid later, so its cycle is negative; Syngene's is negative because customers pay advances. Kit makers and testing labs tie up cash for seven to nine months in stock and receivables, and NephroPlus waits three to four months for governments to pay.",
            values: {
                'Syngene International': [45, 92, 40, -23, -32],
                'Molbio Diagnostics': [null, null, 423, 278, 261],
                'Indegene': [97, 102, 91, 97, 102],
                'Nephrocare Health': [103, 137, 131, 129, 116],
                'Vimta Labs': [147, 164, 283, 235, 219],
                'GPT Healthcare (Agilus)': [-76, -97, -106, -102, -112],
                '3B Blackbio Diagnostics': [136, 296, 253, 235, 245],
                'Sastasundar Ventures': [55, 59, 31, 22, 20],
                'Hemant Surgical Inds': [null, null, null, 90, 81],
            },
            cellNotes: {
                'Molbio Diagnostics': "285 inventory days in FY26; the company says inventory fell to 230 days by June 2026.",
                'Vimta Labs': "Inventory includes work in progress on studies; CARE puts the operating cycle at 119 days.",
                '3B Blackbio Diagnostics': "The company gives four to five months' credit to keep customers from switching to new entrants.",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "Operating cash is after tax, so 80–90% is healthy, and Syngene, Indegene, Vimta, NephroPlus, GPT Healthcare and 3B BlackBio are at or above that over five years. Molbio has converted only 43% as stock and receivables grew. Sastasundar and Hemant have used cash rather than produced it.",
            values: {
                'Syngene International': [78, 87, 102, 112, 99, 97],
                'Molbio Diagnostics': [null, null, 4, 110, 16, 43],
                'Indegene': [103, 33, 101, 81, 105, 86],
                'Nephrocare Health': [88, 22, 71, 81, 104, 83],
                'Vimta Labs': [74, 93, 65, 77, 104, 84],
                'GPT Healthcare (Agilus)': [89, 89, 78, 81, 95, 86],
                '3B Blackbio Diagnostics': [100, 69, 82, 86, 91, 87],
                'Sastasundar Ventures': [-19, null, null, null, null, -41],
                'Hemant Surgical Inds': [null, null, null, 56, -133, -82],
            },
            cellNotes: {
                'Sastasundar Ventures': "Operating profit was negative in FY23–FY26, so the ratio is not meaningful; operating cash was −₹17cr in FY25 and −₹74cr in FY26.",
                'Hemant Surgical Inds': "FY26 operating cash was −₹32cr on a record profit as receivables tripled to ₹67cr.",
                'Molbio Diagnostics': "FY26 operating cash was ₹50cr against ₹320cr of operating profit.",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "Indegene and Syngene turned about 15–17% of FY26 revenue into free cash, and 3B BlackBio more on a small base. NephroPlus has turned positive as its clinics mature. Hemant and Sastasundar burn cash.",
            values: {
                'Syngene International': [4.0, 9.6, 15.2, 10.9, 14.6, 11.3],
                'Molbio Diagnostics': [null, null, -0.7, 22.7, 0.0, 6.8],
                'Indegene': [16.3, 4.8, 19.2, 14.5, 17.3, 14.7],
                'Nephrocare Health': [-20.4, -14.4, -1.4, 4.5, 11.4, 0.4],
                'Vimta Labs': [7.2, 11.7, -5.5, 4.4, 11.5, 6.3],
                'GPT Healthcare (Agilus)': [17.4, 15.5, 12.4, 4.2, 8.3, 11.2],
                '3B Blackbio Diagnostics': [42.9, 29.0, 35.8, 43.9, 18.7, 32.5],
                'Sastasundar Ventures': [-11.8, -12.4, 1.5, -2.3, -6.7, -6.5],
                'Hemant Surgical Inds': [null, null, null, -31.5, -18.9, -22.9],
            },
            cellNotes: {
                '3B Blackbio Diagnostics': "High ratios on a small base (FY26 revenue ₹142cr); FY26 free cash was ₹27cr.",
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
            source: 'Filed balance sheets and P&L (Screener): borrowings (including lease liabilities) minus cash and treasury investments, ÷ operating profit. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "Below zero means more cash than debt. Screener's borrowings include lease liabilities, so GPT Healthcare shows ₹87cr of net debt of which ₹75cr is leases. NephroPlus moved to net cash after its December 2025 IPO.",
            values: {
                'Syngene International': [-0.7, -0.7, -0.5, -0.8, -1.2],
                'Molbio Diagnostics': [null, null, 0.7, 0.1, 0.3],
                'Indegene': [-2.0, -0.5, -1.0, -2.9, -2.2],
                'Nephrocare Health': [-1.5, 1.5, 2.1, 0.3, -1.6],
                'Vimta Labs': [0.1, -0.3, -0.1, -0.2, -0.4],
                'GPT Healthcare (Agilus)': [1.3, 1.0, 0.2, 0.4, 1.0],
                '3B Blackbio Diagnostics': [-3.2, -5.1, -5.4, -4.5, -4.5],
                'Sastasundar Ventures': [-0.8, null, null, null, null],
                'Hemant Surgical Inds': [null, null, null, 2.3, 0.2],
            },
            cellNotes: {
                'Sastasundar Ventures': "Not meaningful while operating profit is negative; it holds about ₹500cr of treasury investments.",
                'Nephrocare Health': "Net cash in FY26 after its December 2025 IPO.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated except Vimta and GPT Healthcare (standalone).',
            note: "Indegene and Sastasundar need almost no fixed assets (about 1% of revenue). Vimta's new labs, Syngene's plants and NephroPlus's clinics took about 15–21% of revenue over five years.",
            values: {
                'Syngene International': [18.3, 16.2, 14.6, 21.1, 9.8, 15.9],
                'Molbio Diagnostics': [null, null, 1.9, 5.4, 3.5, 3.7],
                'Indegene': [1.5, 0.8, 0.4, 1.1, 1.3, 1.0],
                'Nephrocare Health': [24.8, 16.9, 14.1, 13.4, 11.9, 14.7],
                'Vimta Labs': [14.1, 15.9, 26.6, 23.0, 24.6, 21.2],
                'GPT Healthcare (Agilus)': [2.2, 2.8, 4.8, 12.3, 8.8, 6.5],
                '3B Blackbio Diagnostics': [2.8, 3.3, 0.7, 0.9, 18.0, 6.9],
                'Sastasundar Ventures': [0.3, 1.8, 1.0, 0.9, 1.1, 0.9],
                'Hemant Surgical Inds': [null, null, null, 36.2, 5.1, 14.9],
            },
            cellNotes: {
                'Hemant Surgical Inds': "FY25 includes the new medical-tape plant at Chhatrapati Sambhajinagar.",
                '3B Blackbio Diagnostics': "FY26 includes ₹11.3cr of R&D capital spending (₹4.7cr in FY25).",
                'Vimta Labs': "FY24–FY26 include the new 2 lakh sq ft Genome Valley labs (about ₹100cr).",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'scale', label: 'Scale and density', description: 'Being the biggest in its niche or its city, so patients, doctors and buyers come to it first and costs are spread.' },
            { key: 'sticky', label: 'Customer lock-in', description: 'Closed systems, long contracts, validation work or habit that make customers slow to switch.' },
            { key: 'price', label: 'Pricing power', description: 'Whether it can lift revenue per patient, test or contract, rather than compete on price.' },
            { key: 'capital', label: 'Capital needed', description: 'How little capital and working capital each rupee of profit needs.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and how owners and managers behave.' },
        ],
        rows: [
            { company: 'Indegene', trend: 'widening', trendNote: 'Clients up from 91 to 105 in a quarter; revenue per employee $77,100; but margin 16.9% against a 19–20% target now set for Q4 FY27.',
                grades: { scale: { grade: 'A', note: 'Works for all top-20 drug companies' }, sticky: { grade: 'A', note: 'Net retention above 100%' }, price: { grade: 'B', note: '60% output-priced; AI pushes rates down' }, capital: { grade: 'A', note: 'Capex about ₹45cr a year' }, cash: { grade: 'B', note: 'Free cash ₹606cr; tax and US class-action claims' } } },
            { company: 'GPT Healthcare (Agilus)', trend: 'stable', trendNote: 'Margin guide raised to about 21%; Raipur at 17.4% occupancy; Agartala and Howrah behind target.',
                grades: { scale: { grade: 'C', note: '719 beds in five hospitals' }, sticky: { grade: 'B', note: 'Local leader in Howrah and Tripura' }, price: { grade: 'B', note: 'Revenue per bed +8.8% without a tariff rise' }, capital: { grade: 'B', note: 'Leased buildings, about ₹70 lakh a bed' }, cash: { grade: 'C', note: 'Family pay about a fifth of profit' } } },
            { company: 'Vimta Labs', trend: 'stable', trendNote: 'Q1 revenue +11.8% and flat on the quarter against the 20–25% it aimed for in May; first biologics order; new labs about 60% filled.',
                grades: { scale: { grade: 'B', note: 'Leading Indian pharma testing lab' }, sticky: { grade: 'B', note: 'Over 90% of customers retained' }, price: { grade: 'B', note: 'Margin about 35%' }, capital: { grade: 'C', note: 'Assets turn under once a year' }, cash: { grade: 'B', note: 'Debt-free; Eurofins owns 19.72%' } } },
            { company: '3B Blackbio Diagnostics', trend: 'narrowing', trendNote: 'Coris losses cut group margin to 25%; sample-to-answer machine delayed twice; calls cut to twice a year.',
                grades: { scale: { grade: 'C', note: 'About 15% of a ₹500–600cr kit market' }, sticky: { grade: 'B', note: 'Labs take a year to validate kits' }, price: { grade: 'B', note: 'India margin about 55%' }, capital: { grade: 'A', note: 'Plant half used' }, cash: { grade: 'C', note: 'Family board; idle cash' } } },
            { company: 'Nephrocare Health', trend: 'widening', trendNote: 'Revenue +24%; 26 clinics added in Q1; Saudi tender pushed out three to four quarters.',
                grades: { scale: { grade: 'A', note: 'Over half of organised dialysis' }, sticky: { grade: 'B', note: '95%+ hospital renewals' }, price: { grade: 'C', note: 'Prices set by payers' }, capital: { grade: 'C', note: '₹10–11 lakh a bed in India' }, cash: { grade: 'B', note: 'Net cash after IPO; adjusted profit headlined' } } },
            { company: 'Syngene International', trend: 'narrowing', trendNote: 'Revenue −16%; guide cut within 90 days; CEO, general counsel and an independent director left.',
                grades: { scale: { grade: 'A', note: 'Largest listed Indian CRDMO' }, sticky: { grade: 'B', note: 'BMS signed to 2035' }, price: { grade: 'C', note: 'Discovery work ‘commoditized’' }, capital: { grade: 'D', note: 'Return on capital 10%' }, cash: { grade: 'B', note: 'Net cash ₹1,541cr (company, June); AA+' } } },
            { company: 'Molbio Diagnostics', trend: 'stable', trendNote: 'New two-year TB rate contract; HPV test validated; top customer 56.5% of product sales.',
                grades: { scale: { grade: 'A', note: 'About 90% of India’s molecular TB base' }, sticky: { grade: 'A', note: 'Closed kits; WHO-endorsed' }, price: { grade: 'C', note: 'Tender prices' }, capital: { grade: 'C', note: '285 inventory days' }, cash: { grade: 'D', note: 'Commissions 11.6% of revenue; anti-corruption notice' } } },
            { company: 'Hemant Surgical Inds', trend: 'stable', trendNote: 'FY26 sales doubled on one government X-ray order; FY27 needs new tenders.',
                grades: { scale: { grade: 'C', note: 'JMS partner for 30 years' }, sticky: { grade: 'C', note: 'One government buyer' }, price: { grade: 'D', note: 'Margin about 10%' }, capital: { grade: 'C', note: 'Receivables tripled' }, cash: { grade: 'D', note: 'Stock statement ₹30.5cr off the books' } } },
            { company: 'Sastasundar Ventures', trend: 'stable', trendNote: 'Company revenue +58% in Q1; group break-even pushed out two to three years.',
                grades: { scale: { grade: 'D', note: '3–4% of West Bengal' }, sticky: { grade: 'C', note: 'Cash-and-carry pharmacies' }, price: { grade: 'D', note: 'Gross margin 7.5–8%' }, capital: { grade: 'C', note: '₹234cr of warehouses planned' }, cash: { grade: 'D', note: 'Operating losses; hard-to-value treasury' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No company here is a clear buy at today's prices; Indegene is the closest.** **Indegene** makes marketing content, runs doctor outreach and writes regulatory and drug-safety documents for all of the world's 20 largest drug companies. It holds ₹1,460cr of cash and investments, turned FY26 operating cash of ₹651cr into ₹606cr of free cash, and has lifted revenue per employee from $51,000 to $77,100 in five years. But reported profit has gone nowhere for two years (₹407cr in FY25, ₹401cr in FY26), return on capital has fallen from 33% in FY23 to 19% after about ₹725cr of acquisitions, and Q1's 40% revenue growth includes the BioPharm purchase (26.5% in dollars; organic growth is no longer disclosed). Management has moved its promise of a 19–20% margin from ‘the second half’ to ‘by Q4 FY27’, and a $10 million-plus contract whose costs it has carried since Q4 FY26 starts earning revenue only in Q3. It also faces a ₹43.7cr tax demand it has not provided for and a US class action, and its top 20 clients bring about 72% of revenue. I expect about 15% a year of earnings growth; the price needs about {need:Indegene|20}%. **Follow it, and buy if the Q3 margin lands.**",
                "**Follow GPT Healthcare and Vimta Labs.** **GPT Healthcare** earns 23% at its four mature hospitals and raised its margin guide, but its new Raipur hospital loses about ₹3cr a quarter, every mature hospital is behind its occupancy target, and family pay is about a fifth of profit. (The dashboard's ‘(Agilus)’ label is wrong: GPT runs ILS Hospitals in Kolkata, Agartala and Raipur, while Agilus is Fortis's unlisted lab business.) **Vimta** is a debt-free testing lab with a 35% margin and a clean audit, but Q1 revenue grew 11.8% against the 20–25% it aimed for in May, its ₹500cr run-rate target has slipped twice, and it discloses no segment or customer figures while Eurofins, a global rival, owns 19.72% of it.",
                "**Wait on 3B BlackBio, NephroPlus, Syngene and Molbio.** **3B BlackBio** earns about 55% on its Indian kits and holds about ₹230cr of cash, but the Belgian business it bought loses money and it now holds earnings calls only twice a year. **NephroPlus** grew 24% and cleared most of its debt with its IPO, but it headlines adjusted profit (₹128cr in FY26 against ₹77cr filed), its Saudi tender slipped to three to four quarters away, and it gave up two Uttarakhand clinics at renewal. **Syngene** is a turnaround: revenue fell 16% in Q1, its guide was cut within 90 days, its chairperson says it has ‘drifted towards… commoditized research services’, two customers were 37% of FY26 revenue, its CEO and general counsel have left, sales to firms linked to its directors rose from ₹82cr to ₹209cr, and its auditor singled out revenue booked before goods ship. **Molbio** owns about 90% of India's installed molecular TB testing, but its top customer is 56.5% of product sales, commissions to agents rose from 4.7% to 11.6% of revenue, a subsidiary has received an anti-corruption notice, and FY26 operating cash was only ₹50cr on ₹320cr of operating profit.",
                "**Pass on Hemant Surgical and avoid Sastasundar.** **Hemant** doubled its sales on one ₹264cr government order for handheld X-ray units, but its operating cash was −₹32cr, the stock statement it gave its banks was ₹30.5cr above its books, and it lent ₹5.05cr to a company it then bought. **Sastasundar**, now Health X Platform, has never made a lasting operating profit, its managing director says the group will not be EBITDA-positive for ‘the next two, three years’, and its small profits come from a ₹500cr treasury partly held in hard-to-value assets.",
                "**Three things to hold onto before reading the rest.** First, **this is not one industry**: dialysis, a regional hospital chain, TB test kits, contract research and pharma marketing share a label and little else, so judge each company on its own customers and its own cycle. Second, **the government is the main customer for three of these companies**: Molbio, Hemant and NephroPlus's public clinics sell to states or central agencies, so tender timing and late payment matter more than demand. Third, **read the annual reports**: the commissions, related-party loans, tax demands and adjusted profits that matter most here were barely mentioned on the calls.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results (Vimta and GPT Healthcare standalone, the others consolidated). Hemant Surgical reports only half-yearly and Molbio listed in August 2026, so their rows have gaps. Hover over a starred name for its caveat.",
                "**Why these figures differ from the rest of the dashboard.** The dashboard's stored quarterly records for this group mix bases and have gaps. GPT Healthcare's whole Q3 FY26 row is stored as zero; 3B BlackBio's Q3 and Q4 FY26 rows are zero and its 81% Q1 FY26 margin includes treasury income. NephroPlus's stored profits are its adjusted figures, Vimta's stored revenue is total income including other income, and Sastasundar's rows are the company's healthcare-only figures. The stored analysis says ‘No guidance’ for almost every company, although all but Hemant gave some. The charts below use Screener's filed figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "This is not one industry but several that share a label. The diagnostic chains, the largest group that used to sit under it, are now covered in the Healthcare Diagnostic note; what remains is four smaller markets. **Dialysis** is growing fastest: Frost & Sullivan, cited in NephroPlus's prospectus, sizes it at $818 million in 2024 rising to $1.98 billion by 2029, about 19% a year, and the free government dialysis programme (PMNDP) now runs 13,824 machines in 751 districts. **TB testing** is set by policy: India reported 2.7 million TB cases in 2025 and now wants molecular tests for every suspected case. **Contract research** is only starting to recover: Charles River, the bellwether, returned to organic growth in Q2 2026 for the first time since 2023. **Hospitals** are in a good phase: ICRA rates the sector's FY27 outlook positive. **My view: dialysis has the steadiest demand; TB testing has a long runway but one kind of buyer; research services wait on the US biotech cycle and the BIOSECURE Act.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "State governments → **public-private partnership (PPP) operators** (NephroPlus's government clinics) → patients who pay little or nothing. Central and aid-agency buyers → **kit and equipment makers** (Molbio, 3B BlackBio, Hemant) → the labs and health programmes that run the tests. Drug companies → **research and service providers** (Syngene, Vimta, Indegene). Drug makers → **distributors** such as Sastasundar → pharmacies. Patients and insurers → **hospitals and clinics** (GPT Healthcare, NephroPlus's private clinics). **Profit sits where a customer cannot easily switch**: 3B BlackBio's validated Indian kits earn about 55%, Vimta's audited testing about 35% and Molbio's closed Truenat system 25%, while mature hospitals and dialysis clinics earn 20–25%. It does not sit with tender suppliers of traded equipment (Hemant about 10%) or with online medicine distribution (a loss).",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Illness, policy and outsourcing, not consumer spending.** About 2.2 lakh Indians develop kidney failure each year (Health Ministry), and Frost & Sullivan expects dialysis patients to rise from 3 lakh to 5.2 lakh by 2029. India ran 6.83 million molecular TB tests in 2023 against 19.3 million microscope tests it now wants to replace. Big drug companies are reported to need about $32 billion of cost cuts by 2030 (ZS), which pushes work to outsourcers such as Indegene. Private hospital chains are growing on both beds and price per bed (ICRA). The medicines market grew 10.4% in the year to August 2026, but volume grew only 1% (Pharmarack), so distributors such as Sastasundar are fighting for share of a slow-volume market. **My view: demand is not the problem for any of these nine; who pays, how much and how late is.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**TB and aid money are tighter**: the Global Fund raised $12.64 billion for 2026–28 against an $18 billion target, and it is asking countries to pay more themselves. GST on diagnostic kits and reagents fell from 12% to 5% in September 2025. **Research is early in recovery**: biotech venture funding had its best first half since 2022 at more than $9.1 billion (BioPharma Dive), but most went to clinical-stage companies, not the early discovery work Syngene does. The US BIOSECURE Act became law on 18 December 2025, but the list of barred Chinese suppliers is due only by December 2026 and existing contracts are protected for five years after the rules change, so any shift to India is a FY28-onwards story. **E-pharmacy rules** have sat in draft since 2018. **My view: none of these markets is at a peak. Research services are nearer the bottom than the top, and the kit makers' timing is set by tenders, not by a cycle.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Molbio** and **Hemant** on central-government TB tenders; **3B BlackBio** on exports and on Coris turning profitable; **Syngene** on replacing Librela and filling its US plant; **Vimta** on pharma and food testing volumes; **Indegene** on big-pharma marketing budgets and its outcome-priced deals; **NephroPlus** on new clinics, government contracts and a Saudi tender; **GPT Healthcare** on filling Raipur and Agartala; **Sastasundar** on reaching break-even before its treasury runs down. **Buy each for what it actually depends on, not for the healthcare label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Diagnostic kits and medical products', 'Molbio, 3B BlackBio, Hemant', '10–53%', '18–25%', '**−82% to 87%**', 'Closed or validated kits earn well; trading earns 10%; government buyers stretch working capital'],
                        ['Research and pharma services', 'Syngene, Vimta, Indegene', '12–36%', '10–25%', '**84–97%**', 'Skilled staff and regulatory records; returns fall when new capacity sits empty or acquisitions add goodwill'],
                        ['Care delivery and pharmacy', 'NephroPlus, GPT Healthcare, Sastasundar', '−8% to 26%', '0–20%', '**−41% to 86%**', 'Dialysis and mature hospitals earn 20%+; online medicine distribution earns a 7–8% gross margin and loses money'],
                    ],
                    note: 'Molbio’s tiny Q1 FY26 quarter is left out of its margin range.',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Dialysis services', '$818m (2024); PMNDP: 751 districts, 13,824 machines (Aug 2026)', '**$1.98bn by 2029, about 19% a year**; patients 3 lakh → 5.2 lakh', 'Frost & Sullivan (NephroPlus prospectus); Health Ministry'],
                        ['TB testing', '2.7m cases in 2025; 6.83m molecular vs 19.3m microscope tests (2023)', 'Molecular tests for every suspected case', 'Health Ministry via IndiaSpend'],
                        ['Global point-of-care testing', '$29.3bn (2025)', '**$67.1bn by 2030, 17.9% a year**', '1Lattice (Molbio prospectus)'],
                        ['Aid funding (TB, HIV, malaria)', '$12.64bn raised for 2026–28', 'Against an $18bn target; more co-financing asked of countries', 'Global Fund, Feb 2026'],
                        ['Contract research demand', 'Charles River organic growth +0.1% in Q2 2026; biotech venture funding $9.1bn+ in H1 2026', '2026 organic growth 0–1% (raised); BIOSECURE list due by Dec 2026', 'Charles River, Aug 2026; BioPharma Dive; Arnold & Porter'],
                        ['Indian contract research and manufacturing', 'WuXi AppTec added to the US 1260H list, Jun 2026', '**18% a year over 2025–30**; $0.7–1.4bn a year could shift to India', 'Analysts cited by Pharma Manufacturing (not named)'],
                        ['Medicines market (Sastasundar)', '₹2.59 lakh crore, +10.4% (Aug 2026); volume +1%', 'Growth mostly price; e-pharmacy rules still in draft', 'Pharmarack, Sep 2026'],
                        ['Hospitals (GPT Healthcare)', 'Private chains growing on beds and price per bed', 'Sector outlook **Positive** for FY27', 'ICRA, Apr 2026'],
                    ],
                    note: 'The diagnostics market itself is covered in the Healthcare Diagnostic note. The contract-research growth forecast is not attributed to a named forecaster in the article read.',
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
                    label: 'Lasting but narrow: a locked-in installed base',
                    text: "**Molbio**'s Truenat machine runs only Molbio's own test chips: ‘once people buy the machines, they have to buy our kits’, says its CEO. Kits rose from about 68% of product sales in FY24 to 74% in FY26, machines installed in 2017–18 are still running, and it is one of only two WHO-endorsed rapid molecular TB platforms and the only battery-powered one. **3B BlackBio**'s open kits run on labs' existing machines, but a lab needs about a year to validate a new kit, and 20–25% of its Indian sales come with a machine placed on condition that the lab buys its kits. The limit is the buyer: governments and aid agencies are 84.6% of Molbio's product sales and set prices by tender. **My view: Molbio's lock-in is strong, but it is locked in to one customer as much as that customer is locked in to it.**",
                },
                {
                    label: 'Scale in a low-price service',
                    text: "**NephroPlus** holds more than half of India's organised dialysis market at about $22 a session, among the lowest prices in the world, and it took 11 years to turn EBITDA-positive, which is itself a barrier. Hospitals renew more than 95% of its contracts, and it says the next largest organised chain in India is about 4.4 times smaller. But payers set its prices, so this is a cost moat, not pricing power, and state contracts can be lost at renewal, as two Uttarakhand clinics were.",
                },
                {
                    label: 'Sticky but pressured: services to drug companies',
                    text: "**Indegene** has never lost a major enterprise client at renewal, keeps more than 100% of revenue from existing clients each year, and has lifted clients paying over $1 million a year from 28 in FY22 to 54. About 60% of its work is priced on output or outcomes, so productivity gains stay with it; but AI is pushing prices down and ad agencies and research firms compete. **Syngene**'s 28-year BMS centre is extended to 2035, but its chairperson admits discovery work has become ‘commoditized’ and it lost clients to cheaper rivals it chose not to match; its biggest manufacturing contract proved to be one customer's product. **Vimta** has passed about 100 regulatory audits and keeps more than 90% of customers by count, but food testing is ‘more and more levelled ground’, and Eurofins, a global rival, owns 19.72% of it.",
                },
                {
                    label: 'Thin: trading, tenders and distribution',
                    text: "**Hemant** is JMS of Japan's exclusive Indian partner of 30 years, but ICRA calls its market fragmented with intense competition and margins of about 10%, and much of its revenue is traded equipment. **Sastasundar**'s gross margin of 7.5–8% is the industry's, because ‘we are buying from the same companies’, and it has 3–4% of West Bengal. **GPT Healthcare** is the first corporate hospital within about 5 km in Howrah and the only private hospital in Tripura with both main accreditations, but at 719 beds it lacks a referral network, and doctors leave at about 10% a year in Agartala and Raipur.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "In TB testing, the other WHO-endorsed rapid platform, a multinational's lab-based system, and plain microscopy, which India still used for 19.3 million tests in 2023. In PCR kits, multinational kit makers, small Indian makers of single-target tests and Chinese rapid-test makers. In dialysis, hospitals' own units, which still do about 79% of Indian dialysis. In hospitals, the larger chains in Kolkata and new entrants in Raipur. In research, Chinese and European contract research firms, including WuXi AppTec and Charles River; in pharma marketing, advertising agencies and IT firms; in medicines, PharmEasy, Tata 1mg and Apollo's pharmacy arm, which grew 20% in Q1 at a 6% margin, and India's 12.4 lakh licensed chemists.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Three patterns show up: margins protected by a locked-in base or a regulatory record, margins moved by one-offs and lumpy orders, and margins that look higher than they are because of the company's own adjusted figures.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: validated kits, audited labs and mature hospitals',
                    text: "**Vimta** earns 33–36% in testing, on a record of about 100 regulatory audits. **3B BlackBio**'s Indian kit business earns about 55–58%, because a lab needs about a year to validate a rival's kit. **Molbio**'s test chips run only on its own machines, and it guides a 24–25% margin for FY27. **GPT Healthcare**'s four mature hospitals earn 23%, and management raised its group guide to about 21%. **My view: these margins are real where a regulator's audit or a lab's validation stands behind them; they are weakest where a government sets the price.**",
                },
                {
                    label: 'Moved by one-offs and lumpy orders',
                    text: "**Syngene**'s margin fell from 29% in Q4 to 12% in Q1 on a ₹50cr hedge loss and the loss of Librela; keeping its mid-20s guide for the year implies 27–30% in H2, and CRISIL's downgrade trigger is a sustained margin below 25%. **Molbio**'s margin fell from 28% in FY24 to 22% in FY26 as commissions rose from ₹64.9cr to ₹168.3cr; it guides 24–25% for FY27. **3B BlackBio**'s fell from 53% to 25% as loss-making Coris was added. **NephroPlus**'s Q4 dip to 19% was a one-time ₹10cr bad-debt charge.",
                },
                {
                    label: 'Not structural: adjusted figures',
                    text: "Several companies headline their own adjusted numbers. **NephroPlus**'s adjusted FY26 profit was ₹128cr against ₹77cr filed; **Indegene**'s adjusted Q4 margin was 18.8% against 16.4% reported; **GPT Healthcare**'s and **3B BlackBio**'s ‘EBITDA’ includes treasury income; and **Sastasundar**'s profit is treasury income. **My view: compare these companies on filed profit after tax and on Screener's operating margin, not on the slides.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Molbio** holds 285 days of inventory and its receivables rose from ₹271.7cr to ₹408.7cr in FY26, so FY26 operating cash was ₹50cr against ₹320cr of operating profit. **Hemant**'s receivables tripled to ₹67.2cr and operating cash was −₹32cr in its best year. **3B BlackBio** runs a 245-day cash cycle because it gives four to five months' credit to keep customers from switching.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Sastasundar**'s working capital rose from 18 days of sales in March to 28 days in June, and operating cash was −₹74cr in FY26; it also plans ₹234cr of warehouses, ₹134cr of it from bank loans.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**GPT Healthcare** runs a cash cycle of −112 days: patients pay at once and suppliers are paid later. **Syngene** collects customer advances between January and March, which is why its working capital is negative. **Indegene** kept receivables at 67 days, inside its 65–70-day guide. **NephroPlus** cut its receivable days from 121 to 101 in a quarter.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Governments take three to four months to pay dialysis bills, and NephroPlus provides 2–2.5% of revenue for bad debts every quarter. Kit makers carry stock to meet tenders that arrive in lumps. Vimta's stock includes studies still in progress. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Molbio Diagnostics', '₹200cr IPO money for automation and an R&D centre; capacity for twice FY26 revenue', 'Net debt ₹83cr; borrowings ₹450cr at March'],
                        ['3B Blackbio Diagnostics', 'About ₹230cr of cash and investments; an acquisition ‘by this year-end’', 'Net cash ₹256cr'],
                        ['Hemant Surgical Inds', 'No calls; ₹61.5cr of new equity received in FY26; ₹19.98cr paid for Lifesenz', 'Net debt ₹6cr (Screener)'],
                        ['Syngene International', 'Net cash ₹1,541cr at June (₹1,800cr at March); Q1 capex about ₹70cr', 'Net cash ₹1,116cr (Screener, March)'],
                        ['Vimta Labs', 'FY27 capex about ₹80cr (CARE says about ₹60cr); no use of bank limits', 'Net cash ₹62cr'],
                        ['Indegene', 'Cash and investments ₹1,460cr at June; receivables 67 days', 'Net cash ₹1,338cr'],
                        ['Nephrocare Health', '68% of IPO money used by June; Q1 capex ₹44cr', 'Net cash ₹353cr'],
                        ['GPT Healthcare (Agilus)', 'About ₹25cr of new debt this year for Jamshedpur; payout about half of profit', 'Net debt ₹87cr, of which ₹75cr leases'],
                        ['Sastasundar Ventures', 'Treasury about ₹500cr; ₹234cr of warehouse capex, ₹134cr from bank loans', 'Net cash ₹523cr (Screener, March)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Hemant and 3B BlackBio held no Q1 call; their lines come from the annual report and the Q1 presentation.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: TB and point-of-care testing',
                    text: "**Molbio** guides about 25% revenue growth and a 24–25% margin for FY27, signed a new two-year TB rate contract with the Government of India in August, and has passed validation for cervical-cancer (HPV) screening in the national programme. It used 58% of its kit capacity in FY26 and says it can support twice FY26 revenue with little capex. **3B BlackBio** guides 15–20% growth, is certifying its kits under new EU rules, and expects US sales of Coris's RESIST-5 test from FY28. **Hemant**'s rating agency, ICRA, expects FY27 revenue above ₹300cr as the rest of its X-ray order ships and new tenders arrive. The Molbio prospectus cites 1Lattice's forecast of 17.9% a year for global point-of-care testing. **My view: the TB programme is a long runway, but tight aid budgets mean volumes may grow while prices and payment timing get harder.**",
                },
                {
                    label: 'Growth driver: dialysis',
                    text: "**NephroPlus** guides 15–20% a year of revenue growth over three to five years, from 40–50 new clinics a year in India and 12–15 in the Philippines, a new country every 12–18 months (Kazakhstan is next) and a Saudi tender that its CEO calls all-or-nothing. The free government programme's machines rose about 56% in under four years, and it tenders clinics to private operators in 14 states and territories. **My view: the demand is the steadiest here, but a growing share of it is paid for by governments, slowly.**",
                },
                {
                    label: 'Growth driver: hospitals',
                    text: "**GPT Healthcare** guides about 15% revenue growth, with revenue per bed up 8.8% in Q1 before its October tariff rise, a Jamshedpur hospital due late in FY27, and a target of 1,000 beds within two years that still needs a seventh hospital. ICRA rates the hospital sector's FY27 outlook positive.",
                },
                {
                    label: 'Growth driver: outsourcing by drug companies',
                    text: "**Syngene** aims to return to double-digit growth from FY28, when its US Bayview biologics plant starts earning, and cites BIOSECURE as a tailwind; analysts quoted by Pharma Manufacturing put India's annual share of work leaving China at $0.7–1.4 billion. **Vimta** has 2 lakh sq ft of new labs about 60% filled and says its buildings cover four to five years of growth; its biologics unit won its first domestic order. **Indegene** says FY27 organic growth will be ‘better than FY26’, with its $10 million-plus outcome deal recognised from Q3 and 60% of its work priced on output or outcomes.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**NephroPlus** grew 24% against a 15–20% range. **GPT Healthcare** grew 18% against a guide of about 15% and raised its margin guide to about 21%. **Sastasundar** beat its own ₹400cr revenue estimate with ₹440cr.",
                },
                {
                    label: 'Cautious',
                    text: "**Vimta** says it ‘does not give any forward projections’, **Indegene** gives no formal revenue guidance, and **Hemant** holds no calls at all.",
                },
                {
                    label: 'Missed',
                    text: "**Syngene** guided ‘broadly flat’ revenue in April and cut it to a single-digit decline in July. **Vimta** aimed in May for 20–25% and grew 11.8%, and has now missed its ₹500cr run-rate target twice. **3B BlackBio**'s Coris break-even has moved further out on each call, and its sample-to-answer machine has slipped twice. **Sastasundar**'s promised segment accounts have not appeared, and group break-even is now two to three years away.",
                },
                {
                    label: 'Mixed',
                    text: "**Indegene** raised its revenue tone but pushed its margin target from ‘the second half of FY27’ to ‘by Q4 FY27’ after a weaker Q1 margin. **NephroPlus** beat on revenue but its Saudi tender slipped from ‘a couple of quarters’ to ‘three to four quarters away’, it gave up two Uttarakhand clinics, and its growth horizon lengthened from three to four years to three to five. **GPT Healthcare** raised its margin guide to about 21% but every mature hospital is behind its occupancy target.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect NephroPlus to grow earnings at about 22% a year, Molbio at about 18%, Indegene, GPT Healthcare and Syngene at about 15%, Vimta at about 14%, 3B BlackBio at about 12%, and Hemant at about 10%.** Syngene's and GPT's figures start from depressed FY26–FY27 profits, so part of their growth is recovery. NephroPlus's includes filed profit catching up with its adjusted figure. Molbio's and Hemant's depend on government orders I cannot forecast, and Hemant's FY26 base is one unusually large order. Sastasundar's losses make an estimate meaningless.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Nephrocare Health', 'New clinics; international mix; filed profit catching up', '15% / **22%** / 28%'],
                        ['Molbio Diagnostics', 'TB kits; HPV; exports; commissions', '8% / **18%** / 25%'],
                        ['Indegene', 'Outcome deals; margin back to 19–20%', '8% / **15%** / 22%'],
                        ['GPT Healthcare (Agilus)', 'Raipur break-even; Jamshedpur; revenue per bed', '8% / **15%** / 22%'],
                        ['Syngene International', 'Recovery from FY27; Bayview from FY28', '5% / **15%** / 22%'],
                        ['Vimta Labs', 'New labs filling; biologics', '8% / **14%** / 20%'],
                        ['3B Blackbio Diagnostics', 'Exports; Coris; use of cash', '5% / **12%** / 18%'],
                        ['Hemant Surgical Inds', 'Repeat government tenders; Lifesenz', '0% / **10%** / 20%'],
                        ['Sastasundar Ventures', 'Break-even at RetailerShakti', 'Loss-making; too early to estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Syngene International', 'Revenue: single-digit decline (was flat); margin mid-20s', 'About ₹70cr in Q1', '**Walked back**: revenue −16%; guide cut in 90 days'],
                        ['Molbio Diagnostics', 'Revenue about +25%; margin 24–25%', 'IPO-funded automation and R&D centre', '**New**: first call; Q1 margin 25%'],
                        ['Indegene', 'Margin 19–20% by Q4 FY27; no revenue guide', 'About ₹45cr a year', '**Slipping**: Q1 margin 16.9%; deal revenue from Q3'],
                        ['Nephrocare Health', 'Revenue +15–20% a year over three to five years', 'No formal guide; ₹44cr in Q1', '**Mixed**: +24%; Saudi slipped'],
                        ['Vimta Labs', 'No numbers in July; 20–25% ‘stretch’ ambition in May', 'About ₹80cr', '**Missed**: +11.8%; run-rate target missed twice'],
                        ['GPT Healthcare (Agilus)', 'Revenue about +15%; margin about 21% (raised)', 'Jamshedpur, about ₹75cr', '**Mixed**: +18%; occupancy behind'],
                        ['3B Blackbio Diagnostics', 'Revenue +15–20% excluding Coris; Coris slightly positive', '₹4–5cr would double capacity', '**Behind**: +11.8% excluding Coris; Coris loss'],
                        ['Sastasundar Ventures', '₹6,000cr revenue by FY30; losses in FY27–FY28', '₹234cr warehouses', '**Mixed**: revenue beat; segment accounts not given'],
                        ['Hemant Surgical Inds', 'None (ICRA expects FY27 revenue above ₹300cr)', '₹40–50cr over FY27–FY28', '**No guidance**: ICRA’s FY26 ₹230–250cr met at ₹231cr'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into five groups. For each, what management addressed and what it left unanswered; several of the most important came from annual reports, prospectuses and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'The government as buyer and payer',
                    text: "**Molbio**'s top customer was 56.5% of FY26 product sales, up from 33.8% two years earlier, and it has no long-term commitments beyond purchase orders. **Hemant**'s FY26 rests on one ₹264cr central order due for completion by 30 September 2026; no filing on its completion was seen by 30 September. **NephroPlus** gave up two Uttarakhand clinics at renewal and says one Andhra Pradesh renewal carries ‘no 100% certainty’. And the Global Fund's shortfall ($12.64 billion against $18 billion) tightens aid-funded TB buying abroad.",
                },
                {
                    label: 'Governance: commissions and related parties',
                    text: "**Molbio**'s commissions for ‘facilitating order generation’ rose from 4.7% to 11.6% of revenue in two years, a subsidiary received a notice from Delhi's Anti-Corruption Branch about an investigation involving a customer, and its prospectus lists a ₹26.2cr fraud using fake tenders at a subsidiary and an income-tax survey. **Hemant**'s bank stock statement was ₹30.5cr above its books (it blames a clerical error), and it lent ₹5.05cr to Lifesenz before buying 66.66% of it. **Sastasundar** has had dealings with funds where its managers have significant influence. **GPT Healthcare**'s family pay was about ₹8.2cr, roughly a fifth of FY26 profit. **Syngene**'s sales to firms linked to its directors rose from ₹82cr to ₹209cr, the counterparties unnamed.",
                },
                {
                    label: 'Accounting, goodwill and adjusted numbers',
                    text: "**Indegene**'s goodwill rose from ₹357cr to ₹1,134cr in a year after about ₹725cr of acquisitions, and it is a key audit matter. **Syngene**'s auditor singled out revenue booked on ‘bill-and-hold’ terms, before goods ship, in a year when its largest customer was destocking. **NephroPlus** and **Indegene** headline adjusted profits, and **3B BlackBio**'s consolidated notes still cite old accounting standards. **Sastasundar**'s auditor added an emphasis of matter on a loss-making lab subsidiary's ability to continue.",
                },
                {
                    label: 'Tax and legal claims',
                    text: "**Syngene** carries ₹531cr of contingent liabilities, mostly income-tax disputes. **Indegene** faces a ₹43.7cr transfer-pricing demand it has not provided for and a US class action (a settlement fund of up to about $4.72 million against a ₹20.3cr provision, final hearing 12 January 2027). **Molbio**'s income-tax survey produced ₹23.4cr of demands. None threatens a company alone.",
                },
                {
                    label: 'Concentration in research services',
                    text: "Two customers were 37% of **Syngene**'s FY26 revenue, and losing one product, Librela, took about $50 million of revenue with it; its CEO and general counsel have both left this year. **Indegene** earns about 72% of revenue from its top 20 clients and 75% from North America, where drug-pricing rules squeeze marketing budgets. Eurofins, a global competitor, owns 19.72% of **Vimta**, which discloses no segment or customer figures. Syngene also lost ₹50cr on currency hedges in Q1, so a stronger rupee hurts twice.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree here, it is usually because of large cash piles or lease liabilities.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **12% at 18–19x, 14% at 22x, 17% at 28x, 19–20% at 34–35x, 24–25% at 50–53x, 26% at 57–61x and 31% at 86–88x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **This is an expensive group**: four of the eight priced companies need more than 24% a year, and {count:fits|none} of the eight fits my estimates today.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Syngene**, **Indegene**, **NephroPlus** and **3B BlackBio** hold net cash, so they are cheaper than their P/Es suggest; 3B BlackBio holds about ₹230cr of cash against a market value of {mcap:3B Blackbio Diagnostics|₹1,393cr}, and Syngene's is flattered by customer advances that are used up during the year. **GPT Healthcare** shows ₹87cr of net debt on Screener, of which ₹75cr is lease liabilities. **Molbio** had ₹83cr of net debt at March (borrowings of ₹450cr), before its IPO money. **Sastasundar**'s ₹523cr of net cash (Screener) compares with a market value of {mcap:Sastasundar Ventures|₹907cr}, but much of it sits in unlisted shares, private debt and funds.",
                },
                {
                    label: 'Full: prices that ask a few points more than I expect',
                    text: "**GPT Healthcare** needs about {need:GPT Healthcare (Agilus)|17}% a year against my ~15% and **3B BlackBio** about 14% against my ~12%: each was only just outside a fair price when this was written. **Indegene** needs about {need:Indegene|20}% against my ~15% and **Vimta** about {need:Vimta Labs|19}% against my ~14%. GPT and Indegene are the ones I would buy first on a weak quarter, because their earnings are depressed by things that should pass (Raipur's losses, a delayed contract). 3B's price leans on its cash and on an acquisition not yet made.",
                },
                {
                    label: 'Stretched: priced for a story still to be proved',
                    text: "**NephroPlus** needs about {need:Nephrocare Health|31}% a year against my ~22%, on filed profit well below its adjusted figure. **Molbio** needs about {need:Molbio Diagnostics|26–27}% against my ~18%, which assumes new diseases and export markets beyond the Indian TB programme. **Syngene** needs about {need:Syngene International|24–25}% against my ~15%; its profit is at a low, so the multiple looks high, but even a full recovery in FY28 does not close the gap. **Hemant** needs about 25% against my ~10%, on a profit that came mainly from one order.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Sastasundar** (Health X Platform) lost money at the operating level in four of the last five quarters and its profit comes from treasury income, so it has no meaningful P/E. At the company's own targets (₹6,000cr of revenue at about 4% profit after tax by FY30) it would earn about ₹240cr, but that needs revenue to grow almost five-fold from FY26's ₹1,283cr in four years while the treasury funds the losses.",
                },
                {
                    label: 'A check from private deals',
                    text: "**3B BlackBio** says sellers of kit businesses ask about 20 times operating profit, against its own ceiling of 6–8. For comparison, two of the chains now in the Healthcare Diagnostic note paid about 8–10 times for their latest purchases (Vijaya for a Guwahati centre, Metropolis for Core Diagnostics). **Indegene** spent about ₹725cr on acquisitions in FY26 and its return on capital fell from 25% to 19%. That is why 3B's ₹230cr of cash and Indegene's ₹1,460cr matter: what each buys, and at what price, counts as much as the core business.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Indegene', rank: 1, stance: 'SCALEUP', segment: SERV,
            what: "Makes marketing content, runs doctor outreach and writes medical, regulatory and drug-safety documents for life-sciences companies, including all of the top 20; 75% of revenue comes from North America.",
            view: "**A widening franchise whose profit has stalled.** Clients rose to 105, revenue per employee to $77,100 and FY26 free cash to ₹606cr, with ₹1,460cr of cash and investments. But profit has been flat at about ₹400cr for two years, return on capital fell to 19% after acquisitions, organic growth is no longer disclosed, and the 19–20% margin target now rests on a large outcome-priced deal starting revenue in Q3. The price needs about {need:Indegene|20}% a year against my ~15%.",
            watch: 'Q3 revenue from the $10 million-plus outcome deal; margin at 19–20% by Q4 FY27; the US class-action final hearing on 12 January 2027 and the ₹43.7cr tax appeal.',
        },
        {
            company: 'GPT Healthcare (Agilus)', rank: 2, stance: 'SCALEUP', segment: CARE,
            what: "Runs five ILS Hospitals (719 beds) in Kolkata, Howrah, Agartala and Raipur. The dashboard's ‘(Agilus)’ label is wrong: Agilus is Fortis's unlisted lab business.",
            view: "**Solid old hospitals, a slow new one.** The four mature hospitals earn a 23% margin, working capital is negative, it pays out about half its profit, and management raised its FY27 margin guide to about 21%. But Raipur ran at 17.4% occupancy and loses about ₹3cr a quarter, Agartala and Howrah are well behind their occupancy targets, and family pay is about a fifth of profit. The price needs about {need:GPT Healthcare (Agilus)|17}% a year against my ~15%.",
            watch: 'Raipur break-even around January 2027; Agartala back above 55% occupancy; Jamshedpur opening on time.',
        },
        {
            company: 'Vimta Labs', rank: 3, stance: 'SCALEUP', segment: SERV,
            what: "A Hyderabad lab that tests and runs studies for drug makers, and tests food and electronics; about 40% of revenue is exports, and Eurofins, a global rival, owns 19.72%.",
            view: "**High margin, slowing growth.** It earns about 35%, has no debt and about 100 regulatory audits behind it, and its new Genome Valley labs give room for four to five years of growth. But Q1 revenue rose 11.8% and was flat on the quarter against the 20–25% it aimed for in May, its ₹500cr run-rate target has slipped twice, and assets turn less than once a year, so the new labs must fill before returns rise. The price needs about {need:Vimta Labs|19}% a year against my ~14%.",
            watch: 'Two quarters of 15%+ growth; overseas biologics orders; food-testing samples recovering after the Middle East disruption.',
        },
        {
            company: '3B Blackbio Diagnostics', rank: 4, stance: 'HARVEST', segment: KITS,
            what: "Makes PCR test kits (TRUPCR) in Bhopal for labs' existing machines, and owns a UK distributor and Coris, a Belgian rapid-test maker bought in 2025; formerly Kilpest India.",
            view: "**A very profitable niche with a cash pile and a loss-maker attached.** The India kit business earns about 55%, its exports grew 38% in Q1, and it holds about ₹230cr of cash against a market value of {mcap:3B Blackbio Diagnostics|₹1,393cr}. But Coris lost ₹3.5cr at EBITDA in Q1, taking the group margin to 25%, its break-even and the sample-to-answer machine keep slipping, and it has cut earnings calls to twice a year. The price needs about 14% a year against my ~12%.",
            watch: 'Coris turning positive after the December order for sleeping-sickness tests; the price paid for any acquisition; EU certification of 3B’s own kits.',
        },
        {
            company: 'Nephrocare Health', rank: 5, stance: 'SCALEUP', segment: CARE,
            what: "NephroPlus, India's largest dialysis operator: 550 clinics in five countries, with 45% of revenue now from the Philippines, Uzbekistan and elsewhere abroad; listed in December 2025.",
            view: "**Real growth, adjusted profits.** Revenue rose 24% in Q1, it holds more than half of India's organised dialysis market, and IPO money cut borrowings from ₹261cr to ₹80cr. But it headlines adjusted profit (₹128cr in FY26 against ₹77cr filed), will not give same-clinic or country figures, provides 2–2.5% of revenue for bad debts every quarter, and its Saudi tender is now three to four quarters from any clarity. The price needs about {need:Nephrocare Health|31}% a year against my ~22%.",
            watch: 'Filed profit closing the gap with adjusted profit; the Andhra Pradesh PPP renewal; the Saudi tender result.',
        },
        {
            company: 'Syngene International', rank: 6, stance: 'TURNAROUND', segment: SERV,
            what: "India's largest listed contract research, development and manufacturing company for drug makers, with about 400 clients and plants in Bengaluru, Hyderabad, Mangaluru and Baltimore; 52.6% owned by Biocon.",
            view: "**A turnaround with a strong balance sheet.** It holds ₹1,541cr of net cash by its own June count (₹1,116cr on Screener), is rated AA+ and has BMS signed to 2035. But dollar revenue has been flat for three years, Q1 revenue fell 16% after losing Librela, FY27 guidance was cut within 90 days, return on capital is down to 10%, and the CEO, general counsel and an independent director have left. The price needs about {need:Syngene International|24–25}% a year against my ~15% from a depressed base.",
            watch: 'H2 margin reaching 27–30% (CRISIL’s trigger is 25%); named manufacturing wins at Bayview; no further guidance cuts.',
        },
        {
            company: 'Molbio Diagnostics', rank: 7, stance: 'SCALEUP', segment: KITS,
            what: "Makes Truenat, a battery-powered PCR machine whose test chips work only on its own machines, with 43 tests for 30 diseases led by TB; about 90% of India's molecular TB machines are Truenat. Listed in August 2026.",
            view: "**A real moat sold to one buyer.** FY26 revenue grew 42%, kits are 74% of product sales, and a new two-year TB rate contract was signed in August. But its top customer is 56.5% of product sales and governments and aid agencies 84.6%, commissions rose to 11.6% of revenue, a subsidiary received an anti-corruption notice, and FY26 operating cash was ₹50cr on ₹320cr of operating profit. The price needs about {need:Molbio Diagnostics|26–27}% a year against my ~18%.",
            watch: 'Commissions falling from 11.6% of revenue; the anti-corruption matter; HPV programme orders and exports above 15% of sales.',
        },
        {
            company: 'Hemant Surgical Inds', rank: 8, stance: 'CYCLICAL', segment: KITS,
            what: "Imports, assembles and distributes medical disposables and equipment, including JMS (Japan) products and handheld X-ray units for the TB programme; an SME listing with no calls and half-yearly results.",
            view: "**One big order, weak controls.** A ₹264cr central-government X-ray order doubled FY26 sales to ₹231cr, but its margin stayed at about 10% and operating cash was −₹32cr as receivables tripled. The auditor flagged a ₹30.5cr gap between the stock statement given to banks and the books, and ₹5.05cr lent to Lifesenz, which it then bought 66.66% of. The price needs about 25% a year against my ~10%.",
            watch: 'The ₹264cr X-ray order, due by 30 September 2026 (no completion filing seen by then), shipped and paid in full; a new large order for H2 FY27; receivables back below 80 days.',
        },
        {
            company: 'Sastasundar Ventures', rank: 9, stance: 'AVOID', segment: CARE,
            what: "Now Health X Platform: an online medicine distributor supplying about 75,000 small pharmacies (RetailerShakti) and consumers (SastaSundar), about 70% of it in West Bengal, plus a treasury of about ₹500cr.",
            view: "**Growth without profit.** Company revenue rose 58% in Q1 and gross margin improved to 7.8%, but it lost ₹14.9cr at EBITDA, has never sustained an operating profit, and its managing director says it will not be EBITDA-positive for two to three years. Its profit comes from treasury income on unlisted NSE shares, private debt and funds, some dealings involve vehicles linked to its managers, and promised segment accounts have not appeared. It has no meaningful P/E.",
            watch: 'RetailerShakti turning EBITDA-positive in Q3; working capital back below 20 days; the demerger and what stays in the treasury.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Research and pharma services.** **Indegene: follow**, the closest to a buy here, if its margin returns to 19–20% by Q4. **Vimta Labs: follow** for a return to 15%+ growth. **Syngene International: wait** for the turnaround to show in H2 margins and new contracts.",
            "**Care delivery and pharmacy.** **GPT Healthcare: follow** as Raipur breaks even. **NephroPlus (Nephrocare Health): wait** for filed profit to catch up with the headlines. **Sastasundar (Health X Platform): avoid** until the core business earns money on its own.",
            "**Diagnostic kits and medical products.** **Molbio Diagnostics: wait** for commissions to fall and the anti-corruption matter to close. **3B BlackBio: wait** for Coris to turn and the cash to be spent well. **Hemant Surgical: pass** until its controls and cash flow match its growth.",
            "**What would change my view.** For the better: a market fall or a slow quarter that brings Indegene, GPT Healthcare or Vimta to prices that fit their growth; Syngene winning named manufacturing work; Molbio's commissions falling. For the worse: more pressure on government payments; a lost TB or dialysis tender; more senior departures at Syngene.",
            "**What to watch next quarter.** Indegene's Q3 margin; GPT's Raipur; Vimta's growth; 3B BlackBio's Coris; NephroPlus's reported profit; Syngene's H2 margin; Molbio's commissions; Hemant's receivables; Sastasundar's RetailerShakti break-even.",
        ],
        bottomLine:
            "No company here is a clear buy at today's prices. Follow the sound businesses whose prices ask a little too much (Indegene, the closest to a buy; GPT Healthcare; Vimta Labs); wait on the growers with governance, customer or pricing questions (3B BlackBio, NephroPlus, Syngene International, Molbio Diagnostics); pass on Hemant Surgical; and avoid Sastasundar (Health X Platform).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/INDGN/consolidated/' },
        { label: 'Pradhan Mantri National Dialysis Programme dashboard — Health Ministry', url: 'https://pmndp.mohfw.gov.in/en' },
        { label: 'Nephrocare Health Services IPO note (Frost & Sullivan market data) — Mangal Keshav, Dec 2025', url: 'https://www.mangalkeshav.com/research-reports/wp-content/uploads/2025/12/Nephrocare-Healthcare-Services-initial-public-offering-ipo-listing-india.pdf' },
        { label: 'Global Fund eighth replenishment outcome — Global Fund, Feb 2026', url: 'https://www.theglobalfund.org/en/news/2026/2026-02-18-global-fund-board-welcomes-final-eighth-replenishment-outcome/' },
        { label: 'The BIOSECURE Act becomes law — Arnold & Porter, Dec 2025', url: 'https://www.arnoldporter.com/en/perspectives/advisories/2025/12/the-biosecure-act-becomes-law-in-the-united-states' },
        { label: 'Biotech venture funding in the first half of 2026 — BioPharma Dive', url: 'https://www.biopharmadive.com/news/biotech-venture-capital-funding-2026-first-half/824881/' },
        { label: 'Charles River Q2 2026: organic growth returns — Investing.com, Aug 2026', url: 'https://www.investing.com/news/company-news/charles-river-q2-2026-slides-organic-growth-returns-after-3year-decline-93CH-4838390' },
        { label: 'India’s CRDMOs stand to gain from WuXi AppTec’s listing — Pharma Manufacturing, Jun 2026', url: 'https://www.pharmamanufacturing.com/quality-risk/supply-chain/article/55384058/indias-crdmos-stand-to-gain-from-addition-of-chinas-wuxi-apptec-to-pentagon-list' },
        { label: 'Indian pharma market in August 2026 (Pharmarack) — Medical Dialogues', url: 'https://medicaldialogues.in/news/industry/pharma/indian-pharma-market-grows-107-in-august-despite-volume-growth-losing-steam-178903' },
        { label: 'Rating performance FY2026 and sector outlook FY2027 — ICRA, Apr 2026', url: 'https://www.icra.in/Rating/GetRatingPerformanceFileViewer/62~Rating%20Performance%20FY2026%20and%20Sectoral%20Outlook%20for%20FY2027.pdf' },
        { label: 'Molbio Diagnostics Red Herring Prospectus (customers, commissions, litigation) — Aug 2026', url: 'https://www.molbiodiagnostics.com/wp-content/uploads/2026/08/Molbio-Diagnostics-Limited-Red-Herring-Prospectus.pdf' },
        { label: 'Syngene International rating rationale — CRISIL, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/SyngeneInternationalLimited_September%2011_%202026_RR_402937.html' },
        { label: 'Indegene Annual Report FY26 (goodwill, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d2ca0f9b-5da2-44d5-b2db-dfb491f22180.pdf' },
        { label: 'Vimta Labs rating rationale — CARE, Sep 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202609120900_Vimta_Labs_Limited.pdf' },
        { label: 'Nephrocare Health Services Annual Report FY26 — NSE', url: 'https://nsearchives.nseindia.com/annual_reports/AR_29830_NEPHROPLUS_2025_2026_A_11141433_16072026181803.pdf' },
        { label: 'GPT Healthcare rating rationale — CRISIL, Oct 2025', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GPTHealthcareLimited_October%2027_%202025_RR_380311.html' },
        { label: 'Hemant Surgical Industries rating rationale — ICRA, Apr 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdfViewer/142283' },
        { label: 'Hemant Surgical Industries Annual Report FY26 (CARO remarks) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=81b37aa7-8e7e-415b-9fee-ca76b9172833.pdf' },
        { label: 'Health X Platform (Sastasundar) Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=805d3c77-f482-47c9-947c-a745a671c4c9.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
