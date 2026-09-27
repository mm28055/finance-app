import { SectorOverview } from './types';
import { chemicalsAdditivesBusinesses } from './chemicals-additives-businesses';
import { chemicalsValuationInputs } from './card-data/chemicals';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const CARBON = 'Carbon black, pitch and battery materials';
const COLOUR = 'Dyes, dye intermediates and pigments';
const RUBBER = 'Rubber chemicals, zinc oxide and cable compounds';

export const chemicalsAdditives: SectorOverview = {
    sector: 'Chemicals',
    title: 'Chemicals · Carbon, colour and polymer additives',
    format: 'ranked',
    businesses: chemicalsAdditivesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: chemicalsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'DDev Plastiks': 11,
            'Himadri Speciality': 17,
            'Sh. Pushkar Chem.': 15,
            'Sudarshan Chemicals': 35,
            'JG Chemicals': 15,
            'Nocil': 15,
            'PCBL Chemical': 17,
            'Kiri Industries': -15,
        },
    },
    standfirst:
        "Eight companies that sell industrial materials by the tonne into tyres, paints, plastics, textiles and cables. This is one of five groups on the Chemicals page; the others cover the fluorine and refrigerant chain, custom synthesis and specialty intermediates, commodity and petrochemical spread businesses, and formulations, ingredients and gases. Two here make **carbon**: **PCBL**, India's largest carbon black maker, and **Himadri**, which distils coal tar into pitch for aluminium smelters and feeds its own carbon black and new battery-material lines. Three make **colour**: **Sudarshan**, now the world's second-largest pigment maker after buying the insolvent Heubach group, and two dye and dye-intermediate makers, **Kiri** and **Shree Pushkar**. Three supply **rubber and polymer additives**: **Nocil** (rubber chemicals, about 40% of the Indian market), **JG Chemicals** (India's largest zinc oxide maker) and **DDev Plastiks** (compounds that insulate power cables). This edition was built from the last two earnings calls for every company, the Q1 FY27 presentations, the FY26 annual reports, rating reports from CARE, CRISIL and ICRA, and sector work from Crisil, ICRA, CareEdge and Fitch. The headline: Q1 FY27 looked strong almost everywhere, but mostly on prices lifted by the West Asia war, not on volume, and Crisil expects sector margins to fall back by 150–200 basis points this year. The annual reports turned up a dye maker (Kiri) committing the US$689m it received for its DyStar stake to a ₹13,300cr copper and fertiliser complex that still lacks its loans, under two auditor's emphasis paragraphs, about ₹935cr of Himadri's investments lent to the company that owns Birla Tyres, promoters lending money to a cash-rich Shree Pushkar, and 73% of Sudarshan's revenue audited by firms other than its group auditor.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated unless noted; DDev Plastiks has no subsidiaries and files standalone only.',
            note: 'Three margin levels. Himadri keeps 19–22% because it owns its feedstock (coal tar) and has moved towards specialty carbon black; PCBL keeps 12–16% on oil it buys in. The rubber and cable suppliers keep 6–11%: DDev and JG pass raw-material costs on and keep a fixed spread per kilo, while Nocil lost its pricing power to Chinese imports. The colour makers are weakest: Kiri’s own business lost money for four quarters running, Sudarshan is rebuilding the margin of the insolvent Heubach business it bought, and Shree Pushkar holds 9–11%. Q1 FY27 was lifted almost everywhere by the West Asia war: stock bought cheaply before prices rose (PCBL, Nocil, JG), an export war-risk premium (DDev) and dye-intermediate prices that doubled (Kiri, Shree Pushkar).',
            values: {
                'Himadri Speciality': [22, 22, 21, 19, 20],
                'PCBL Chemical': [15, 12, 12, 12, 16],
                'Kiri Industries': [-8, -7, -28, -57, 5],
                'Nocil': [9, 7, 9, 6, 11],
                'DDev Plastiks': [9, 9, 10, 10, 9],
                'JG Chemicals': [9, 8, 9, 7, 11],
                'Sh. Pushkar Chem.': [11, 10, 9, 10, 11],
                'Sudarshan Chemicals': [8, 6, 2, 8, 10],
            },
            cellNotes: {
                'Himadri Speciality': 'The company’s own EBITDA margin is 1–3 points higher (21.9% in Q1 FY27) because it leaves out foreign-exchange losses on hedges, which Screener counts as a cost; the FY26 forex loss was ₹64cr.',
                'PCBL Chemical': 'Q1 FY27 includes about ₹70cr of gains on cheap stock, of which ₹40–50cr may reverse in Q2 (company). Carbon black earned ₹22,900 a tonne in Q1 against ₹14,900 for FY26.',
                'Kiri Industries': 'Q4 FY26 includes about ₹114cr of year-end losses on treasury investments booked inside operating costs; management’s ‘adjusted’ figures leave them out. Q1 FY27’s 5% came as dye-intermediate prices doubled when China cut output.',
                'Nocil': 'Q1 FY27 helped by quarterly contract prices resetting to higher raw-material costs, a lag management expects to moderate; it guides about 10% for FY27.',
                'DDev Plastiks': 'Standalone. Q1 FY27 EBITDA was ₹19.6 a kilo including a ₹2.5–3 export war-risk premium that management says will not last; normal is ₹15–17.',
                'JG Chemicals': 'The company’s ‘EBITDA’ includes other income (11.5% in Q1 FY27). Q1 was helped by rising zinc prices and stock gains that management did not quantify.',
                'Sudarshan Chemicals': 'Q3–Q4 FY26 are distorted by acquisition accounting: Q3 was a ₹116cr loss quarter, and Q4 included a ₹37cr one-off credit and ₹82cr of released stock overheads. The company’s ‘business EBITDA’ margin was 9.4% in Q1 FY27.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted; DDev Plastiks is standalone.',
            note: 'Q1 FY27 growth was mostly price, not volume. PCBL sold the same tonnage of carbon black as a year earlier; DDev’s volume rose 1% against revenue up 29%; Shree Pushkar sold 39% less chemicals by weight while revenue rose 10%; Kiri’s jump was dye-intermediate prices. JG’s volume grew in the mid-teens, with the rest from zinc prices; Nocil’s volume rose 9% against revenue up 20%. Himadri’s 28% includes its new Birla Tyres business. Sudarshan’s FY26 figures compare a year with the acquired Heubach business against a year without it.',
            values: {
                'Himadri Speciality': [-7, -6, 4, 13, 28],
                'PCBL Chemical': [-1, 0, -8, -1, 17],
                'Kiri Industries': [10, 23, -3, 22, 54],
                'Nocil': [-10, -12, -1, -3, 20],
                'DDev Plastiks': [23, 17, 11, 4, 29],
                'JG Chemicals': [7, 4, 19, 28, 45],
                'Sh. Pushkar Chem.': [31, 45, 15, 0, 10],
                'Sudarshan Chemicals': [295, 243, 216, 107, 5],
            },
            cellNotes: {
                'Sudarshan Chemicals': 'Heubach was bought on 3 Mar 2025, so the FY26 quarters compare against a base without it. Q1 FY27’s +5% is the first like-for-like figure; the legacy pigment business grew 26%.',
                'Himadri Speciality': 'Q1 FY27 includes ₹127cr from Birla Tyres, against ₹187cr for the whole of FY26, so part of the growth is the tyre business ramping up.',
                'PCBL Chemical': 'Carbon black volume was 153,513t against 154,093t a year earlier; the rise is price and cost pass-through.',
                'DDev Plastiks': 'Standalone. Volume +1% (52,163t); the rest is higher resin prices passed on. The full-year target is +15% volume.',
                'Kiri Industries': 'Price-led: H-acid sold at ₹800–900 a kilo against ₹350–400 earlier, while the plants ran at about 60%.',
                'Sh. Pushkar Chem.': 'Fertiliser volume −12.8% and chemical volume −38.6% in Q1 FY27; revenue rose on prices.',
                'JG Chemicals': 'Volume up in the mid-teens (company; tonnes not disclosed); the rest is the zinc price, which selling prices follow with a month’s lag.',
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated unless noted; DDev Plastiks is standalone.',
            note: 'DDev earns 31–45% because its plants are cheap: FY26 sales were about ten times its net fixed assets. Himadri rose from 5% to 22% as its margin more than tripled on flat revenue. PCBL fell from 18% to 8% after borrowing to buy Aquapharm just as carbon black spreads weakened; Nocil fell from 18% to 4% as Chinese imports cut its margin; Sudarshan’s 5% is earned on a balance sheet swollen by the Heubach purchase. Only DDev, Himadri and JG clearly earn more than their cost of capital today.',
            values: {
                'Himadri Speciality': [5, 13, 19, 22, 22],
                'PCBL Chemical': [18, 17, 14, 12, 8],
                'Kiri Industries': [16, 5, 6, 10, 3],
                'Nocil': [18, 13, 10, 6, 4],
                'DDev Plastiks': [45, 32, 42, 34, 31],
                'JG Chemicals': [28, 30, 14, 20, 18],
                'Sh. Pushkar Chem.': [16, 12, 9, 12, 13],
                'Sudarshan Chemicals': [13, 6, 11, 6, 5],
            },
            cellNotes: {
                'Kiri Industries': 'Returns come from its share of the Lonsen Kiri joint venture, the former DyStar stake and treasury income; the dye business itself made an operating loss on Screener in every year from FY23 to FY26.',
                'Sudarshan Chemicals': 'FY25–FY26 capital includes the ₹1,277cr Heubach purchase and a ₹1,196cr bargain-purchase gain booked straight to equity. The company’s own annualised Q1 FY27 return was 22.7%, on its own definition.',
                'Himadri Speciality': 'The company quotes 32% on its own definition.',
                'JG Chemicals': 'FY24 dip: the margin fell to 7% and the March 2024 IPO money enlarged the capital base.',
                'DDev Plastiks': 'Standalone.',
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
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated unless noted; DDev Plastiks is standalone.',
            note: 'JG ties up the most cash for its size: it pays its scrap-zinc suppliers in about 5 days but gives customers 64. Nocil halved its cycle in FY26 by cutting stock from 129 days to 75. Himadri’s cycle has stretched from 65 to 103 days as stock rose with revenue, and DDev’s from 43 to 85. Kiri’s negative figure means it pays its own suppliers very late.',
            values: {
                'Himadri Speciality': [65, 66, 73, 90, 103],
                'PCBL Chemical': [55, 38, 32, 57, 35],
                'Kiri Industries': [41, -27, -16, 11, -64],
                'Nocil': [154, 143, 133, 156, 84],
                'DDev Plastiks': [43, 41, 64, 72, 85],
                'JG Chemicals': [118, 109, 96, 112, 101],
                'Sh. Pushkar Chem.': [66, 57, 71, 81, 53],
                'Sudarshan Chemicals': [96, 73, 65, 362, 129],
            },
            cellNotes: {
                'Kiri Industries': 'Negative because payable days were 205 in FY26; management says it pays suppliers late because its textile customers pay it late.',
                'Sudarshan Chemicals': 'FY25’s 362 days is distorted: Heubach’s stock joined the balance sheet on 3 Mar 2025 against only a month of its sales.',
                'DDev Plastiks': 'Standalone. Management targets 55–60 days; working-capital borrowing pushed Q1 FY27 interest up to ₹11cr.',
                'JG Chemicals': 'Payable days of about 5: dross must be paid for almost at once, which secures supply but ties up cash.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated unless noted; DDev Plastiks is standalone.',
            note: 'PCBL (88% over five years) and Nocil (75%) turn the most operating profit into cash; both released stock in FY26. Himadri converts only 54%, and 40% in FY26, as stock and receivables grew. DDev (47%) and JG (42%) convert poorly for asset-light businesses, because every rise in resin or zinc prices raises the working capital they must fund. Kiri’s FY26 cash flow is the DyStar award, not trading.',
            values: {
                'Himadri Speciality': [212, 14, 63, 52, 40, 54],
                'PCBL Chemical': [44, 69, 107, 57, 151, 88],
                'Kiri Industries': [76, null, null, null, null, null],
                'Nocil': [-10, 111, 103, 19, 250, 75],
                'DDev Plastiks': [25, 91, 45, 51, 30, 47],
                'JG Chemicals': [12, 41, 165, -13, 54, 42],
                'Sh. Pushkar Chem.': [52, 72, 26, 45, 102, 63],
                'Sudarshan Chemicals': [64, 135, 61, 19, 57, 60],
            },
            cellNotes: {
                'Kiri Industries': 'FY23–FY26 are blank because operating profit was negative. FY26 operating cash of ₹4,555cr is the US$689m DyStar award; FY25 was −₹342cr.',
                'Nocil': 'FY26’s 250% came from cutting stock from 129 to 75 days; the five-year figure is the better guide.',
                'PCBL Chemical': 'FY26’s 151% reflects working capital released while profit fell.',
                'Sudarshan Chemicals': 'FY26 includes a large stock release in the acquired business (a €29m cut in Q4 alone).',
                'DDev Plastiks': 'Standalone. FY26 operating cash was ₹85cr against ₹137cr in FY25, as stock rose to ₹392cr.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated unless noted; DDev Plastiks is standalone.',
            note: 'Nocil (4.5% of revenue over five years), Himadri (4.1%) and PCBL (3.0%) produce the most free cash, and all three are now spending more. Shree Pushkar has had negative free cash in four of the five years as it builds plants; DDev and JG produce little because working capital absorbs what their cheap plants do not. Kiri’s FY26 figure is the award; its copper project will consume cash for years.',
            values: {
                'Himadri Speciality': [11.0, -0.7, 8.4, 6.0, -1.5, 4.1],
                'PCBL Chemical': [-0.4, -6.8, 8.9, -0.2, 10.4, 3.0],
                'Kiri Industries': [3.6, 7.1, -7.4, -101.2, 508.1, 71.8],
                'Nocil': [-4.2, 15.6, 11.5, -7.0, 5.9, 4.5],
                'DDev Plastiks': [0.3, 4.6, 3.8, 3.0, -0.4, 2.2],
                'JG Chemicals': [-0.3, 2.7, 10.1, -1.9, 0.5, 1.9],
                'Sh. Pushkar Chem.': [-2.7, 3.5, -4.3, -1.1, -1.4, -1.2],
                'Sudarshan Chemicals': [-6.0, 4.1, 4.5, -1.0, 0.6, 0.5],
            },
            cellNotes: {
                'Kiri Industries': 'FY26 is the DyStar award. FY25 and FY26 include the start of copper-project spending (capex of 55% and 34% of revenue); the five-year figure is meaningless.',
                'Himadri Speciality': 'FY26 turned negative (−₹63cr) as capex rose; FY27–FY28 capex of about ₹1,000cr a year is roughly twice FY26 operating cash.',
                'Sh. Pushkar Chem.': 'A ₹512cr expansion is under way, ₹209cr spent by June 2026.',
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated unless noted; DDev Plastiks is standalone.',
            note: 'Four hold net cash: Kiri (₹4,354cr, more than its whole market value), Himadri, Nocil and JG. PCBL is the outlier, with net debt about four times operating profit after borrowing to buy Aquapharm; CARE puts it at 5.02 times and cut its outlook to Negative in July. Sudarshan borrowed to buy Heubach and is paying it down fast.',
            values: {
                'Himadri Speciality': [1.3, 0.2, -0.9, -1.1, -1.1],
                'PCBL Chemical': [0.1, 1.0, 4.0, 3.5, 4.1],
                'Kiri Industries': [-14.1, null, null, null, null],
                'Nocil': [-0.2, -1.0, -2.5, -2.8, -4.4],
                'DDev Plastiks': [1.2, 0.3, -0.0, -0.2, -0.0],
                'JG Chemicals': [1.4, 0.8, -3.8, -1.8, -2.0],
                'Sh. Pushkar Chem.': [0.1, -0.4, -0.2, -0.2, -0.1],
                'Sudarshan Chemicals': [2.8, 3.7, 1.3, 0.8, 1.4],
            },
            cellNotes: {
                'Himadri Speciality': 'Counts all investments as cash, including about ₹935cr of low-yield debentures of Dalmia Bharat Refractories, which owns the Birla Tyres business. Borrowings rose from ₹313cr to ₹770cr in FY26; the company’s own net-cash figure at March was ₹121cr.',
                'Kiri Industries': 'FY23–FY26 are blank because operating profit was negative. Borrowings fell from ₹1,124cr to ₹42cr after the DyStar award; management expects total debt of ₹8,000–9,000cr by FY28 for the copper project.',
                'PCBL Chemical': 'CARE: debt 5.02 times EBITDA in FY26, above its downgrade trigger of 4; ₹605cr of repayments are due in FY27.',
                'Sudarshan Chemicals': 'Company net debt was ₹531cr in June 2026, down from a ₹922cr peak; management expects the €76.5m sale of its VP4 plant to make the group net cash.',
                'Sh. Pushkar Chem.': 'Includes ₹21cr of loans from the promoters; the company held ₹125cr of deposits in June.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated unless noted; DDev Plastiks is standalone.',
            note: 'PCBL spends the most steadily, about 10% of revenue, to add carbon black lines. Kiri’s 55% and 34% in FY25–FY26 are the start of a ₹13,300cr copper and fertiliser complex. Nocil’s rose to 13% for its new antioxidant plant and Shree Pushkar’s to 12% for new fertiliser and dye units. DDev and JG need very little: a DDev plant costing about ₹80cr adds about ₹500cr of sales. Himadri’s 9.7% in FY26 is the start of a ₹2,000cr programme.',
            values: {
                'Himadri Speciality': [0.8, 2.0, 1.3, 3.7, 9.7, 3.8],
                'PCBL Chemical': [6.9, 15.5, 8.3, 9.2, 8.9, 9.7],
                'Kiri Industries': [2.5, 2.3, 0.9, 55.0, 34.2, 15.3],
                'Nocil': [2.3, 1.9, 2.4, 8.8, 13.4, 5.4],
                'DDev Plastiks': [0.9, 1.2, 0.9, 2.2, 3.3, 1.8],
                'JG Chemicals': [1.5, 1.3, 1.4, 0.6, 4.0, 1.9],
                'Sh. Pushkar Chem.': [9.9, 3.8, 6.5, 5.8, 11.9, 7.8],
                'Sudarshan Chemicals': [14.1, 8.3, 3.1, 3.2, 2.9, 4.8],
            },
            cellNotes: {
                'Himadri Speciality': 'About ₹1,000cr a year planned in FY27–FY28: LFP battery cathode ₹1,125cr, Birla Tyres about ₹500cr, carbon nanotubes ₹70cr, super speciality black ₹170cr.',
                'Kiri Industries': '₹1,400cr of equity deployed in the copper project by Q1 FY27; ₹4,500–5,000cr planned by March 2027, about ₹5,000cr more in FY28.',
                'JG Chemicals': 'FY26 includes the first phase of the Dahej plant (₹50cr, ₹33cr spent by March 2026).',
                'Sudarshan Chemicals': 'FY26 capex was ₹270cr on a revenue base tripled by Heubach; management plans only ‘moderate’ capex to reach its FY29 targets.',
            },
        },
    ],


    moat: {
        sources: [
            { key: 'scale', label: 'Scale and feedstock', description: 'Share, capacity or own raw material that a rival cannot match quickly.' },
            { key: 'pricing', label: 'Pricing power', description: 'Holding or raising the spread per tonne, rather than taking whatever Chinese imports and oil prices allow.' },
            { key: 'sticky', label: 'Approvals and sticky customers', description: 'Customer approvals that take years (tyres, cables, coatings) and a book not tied to a few buyers.' },
            { key: 'delivery', label: 'Delivery record', description: 'Doing what was promised on the calls, on time.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and a clean record with auditors, related parties and shareholders.' },
        ],
        rows: [
            { company: 'DDev Plastiks', trend: 'stable', trendNote: 'The Bhiwadi plant opened on time without new customer approvals and Q1 EBITDA passed ₹100cr (company), but volume rose only 1% and the battery-storage venture slipped with its margin guide cut to 6–8%.',
                grades: { scale: { grade: 'A', note: 'About a third of cable compounds' }, pricing: { grade: 'B', note: 'Cost-plus; fixed spread per kilo' }, sticky: { grade: 'B', note: 'Cable approvals; top six ~22%' }, delivery: { grade: 'B', note: 'Record Q1; volume +1% vs 15%' }, cash: { grade: 'C', note: 'Cash 47% of profit; small group deals' } } },
            { company: 'Himadri Speciality', trend: 'widening', trendNote: 'Specialty carbon black is filling (80% use, 90%+ expected), revenue rose 28% in Q1 and the FY28 profit goal of ₹1,100cr was reaffirmed; carbon nanotube and super-speciality black lines were added.',
                grades: { scale: { grade: 'A', note: '600,000t coal tar; 65%+ of pitch' }, pricing: { grade: 'B', note: 'Margin 6% → 21% on flat sales' }, sticky: { grade: 'B', note: 'No customer above 10%; 61 countries' }, delivery: { grade: 'B', note: 'Growth delivered; forex loss again' }, cash: { grade: 'C', note: 'Cash 54%; ₹935cr in Birla-linked NCDs' } } },
            { company: 'Sh. Pushkar Chem.', trend: 'widening', trendNote: 'It raised prices sharply in Q1 and let volume fall, lifted FY27 guidance to ₹1,300–1,400cr and added a ₹1,700–1,750cr FY28 target; but the new units are about six months late.',
                grades: { scale: { grade: 'C', note: 'Sole Indian K-acid maker; small' }, pricing: { grade: 'B', note: 'Passed on sulphur at 3–4 times' }, sticky: { grade: 'C', note: '800+ dealers; fertiliser is a commodity' }, delivery: { grade: 'C', note: 'Capex doubled; ~6 months late' }, cash: { grade: 'C', note: 'FCF negative 4 of 5 yrs; promoter loans' } } },
            { company: 'Sudarshan Chemicals', trend: 'widening', trendNote: 'The acquired Heubach business earned ₹128cr of business EBITDA in Q1 alone, far ahead of the €35m full-year guide, and net debt fell to ₹531cr; guidance was kept, not raised.',
                grades: { scale: { grade: 'A', note: 'World no. 2 in pigments' }, pricing: { grade: 'C', note: 'Pass-through only; surcharge dropped' }, sticky: { grade: 'A', note: 'Switching takes 1–5 years' }, delivery: { grade: 'A', note: 'Ahead of plan; RIECO misses' }, cash: { grade: 'C', note: '73% of revenue audited by others' } } },
            { company: 'JG Chemicals', trend: 'stable', trendNote: 'The margin returned to 11% in Q1 and JG won share while smaller rivals ran short of scrap zinc in March, but Dahej slipped to November and FY28 use was cut to 50–60%.',
                grades: { scale: { grade: 'B', note: '31% of Indian zinc oxide' }, pricing: { grade: 'C', note: 'Zinc-linked; 7–11% margin' }, sticky: { grade: 'B', note: 'Tyre approvals 4–5 yrs; top clients 51%' }, delivery: { grade: 'C', note: 'Dahej late; FY28 use cut' }, cash: { grade: 'B', note: 'Net cash ~₹150cr; cash 42% of profit' } } },
            { company: 'Nocil', trend: 'stable', trendNote: 'The margin recovered to 11% and an anti-dumping duty on sulphenamides was granted in June, but the duty on TDQ was refused and volume fell 3% on the quarter.',
                grades: { scale: { grade: 'A', note: '~40% of Indian rubber chemicals' }, pricing: { grade: 'D', note: 'Margin 18% → 8% on imports' }, sticky: { grade: 'B', note: 'Tyre approvals take 6–8 months' }, delivery: { grade: 'B', note: 'Margin beat; volume below base' }, cash: { grade: 'B', note: 'Net cash ₹442cr; small promoter pledge' } } },
            { company: 'PCBL Chemical', trend: 'stable', trendNote: 'Q1 carbon black profit per tonne jumped to ₹22,900, but on cheap stock and spot prices; volume was flat, the Aquapharm target was shelved and CARE moved its outlook to Negative.',
                grades: { scale: { grade: 'A', note: 'India’s largest; 900,000t' }, pricing: { grade: 'C', note: '~⅓ spot; FY26 fell to ₹14,900/t' }, sticky: { grade: 'B', note: 'Tyre approvals; formula contracts' }, delivery: { grade: 'C', note: 'Q1 beat on one-offs; volume flat' }, cash: { grade: 'C', note: 'Cash 88%; debt ~5x; payout 119%' } } },
            { company: 'Kiri Industries', trend: 'narrowing', trendNote: 'Dye margins recovered to about 6% on Chinese supply cuts, but copper revenue guidance for FY28 was withdrawn one quarter after it was given and the project loans are not closed.',
                grades: { scale: { grade: 'B', note: 'Large H-acid maker; integrated' }, pricing: { grade: 'D', note: 'Loss-making until China cut output' }, sticky: { grade: 'C', note: 'Related parties 35% of sales' }, delivery: { grade: 'D', note: 'FY28 copper guide withdrawn' }, cash: { grade: 'D', note: 'Tax emphasis; loans without terms' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**One ‘own’ in this group: DDev Plastiks. Follow Himadri, Shree Pushkar and Sudarshan; wait on JG Chemicals, Nocil and PCBL; avoid Kiri.** **DDev** makes the plastic compounds that insulate and sheath power cables. It holds about a third of India's cable-compound market of roughly 2.5 lakh tonnes a year, a third of XLPE (cross-linked polyethylene, the insulation used on medium- and high-voltage cables) and about half of its Sioplas variety, and it is the only Indian maker of compounds for 66–132 kV cables. It earned 31% on capital in FY26 (45% in FY22) because its plants are cheap: FY26 sales of ₹2,948cr were about ten times its net fixed assets. It prices at cost plus a fixed spread per kilo, which protected profit through the 2026 resin-price shock. The price needs only about 8% a year of earnings growth against my ~11%. What holds me back from more: Q1 volume grew 1% against a full-year target of 15%, Q1's ₹19.6 a kilo of EBITDA included a war-risk export premium management says will not last, only 47% of operating profit has turned into cash over five years, and its new battery-storage venture has slipped and had its margin guide cut to 6–8%. **Own DDev at this price, sized for a business that grows about 10% a year, and add if second-half volumes approach 60,000 tonnes a quarter.**",
                "**Himadri** is the best business here and the best-placed for growth. It distils coal tar into pitch for aluminium smelters (over 65% of the Indian market), uses the by-product oil to make carbon black, and has lifted its filed operating margin from 6% in FY22 to 21% in FY26 on almost flat revenue by moving into specialty grades. It is now spending about ₹2,000cr in FY27–FY28 on LFP battery cathode, carbon nanotubes, super-speciality black and a tyre business, and reaffirmed its target of ₹1,100cr of profit after tax in FY28, 37% above the trailing ₹804cr. But the price needs about 22% a year against my ~17%, and the quality of profit is softer than the margin suggests: other income was about 17% of FY26 pre-tax profit, it has booked foreign-exchange losses in two straight quarters, free cash turned negative in FY26 and about ₹935cr is lent, through debentures, to the company that owns Birla Tyres. **Follow Himadri; buy on a fall, or once LFP has a named customer and cash follows profit.**",
                "**Follow Shree Pushkar and Sudarshan.** **Shree Pushkar** burns sulphur to make acids, turns them into dye intermediates and reactive dyes, and uses the spent acid to make fertiliser. It passed on a three- to four-fold rise in sulphur in Q1, raised FY27 revenue guidance to ₹1,300–1,400cr and set a FY28 target of ₹1,700–1,750cr on a ₹512cr expansion. The price needs about 15% a year against my ~15%, so it fits; what keeps it at ‘follow’ is negative free cash in four of the last five years, an expansion that has doubled in cost and slipped about six months, and promoters lending ₹21cr to a company holding ₹125cr of deposits. **Sudarshan** is not measured in the live table, because the dashboard's market value for it is wrong (₹961cr against ₹9,704cr on Screener). Its turnaround of Heubach, the insolvent German pigment group it bought in March 2025, is running ahead of plan, and it guides EBITDA of ₹1,400–1,500cr by FY29 against ₹603cr filed in FY26. But other auditors cover 73% of its revenue, it inherited a ₹264cr decommissioning liability, and the promoters now hold only 8.2%.",
                "**Wait on JG, Nocil and PCBL; avoid Kiri.** **JG Chemicals** is clean, debt-free and building a ₹100cr plant at Dahej that could add about ₹900cr of sales, but its margin has stayed at 7–11% for five years, about half its revenue comes from a handful of large customers, Dahej has slipped to November, and the price needs about 19% a year against my ~15%. **Nocil** holds about 40% of Indian rubber chemicals and ₹442cr of net cash, and won an anti-dumping duty in June, but its margin fell from 18% to 8% in four years as Chinese imports took its pricing power, and the price needs about 23% a year against my ~15%. **PCBL** is India's largest carbon black maker, but it carries debt about five times operating profit, CARE cut its outlook to Negative in July, Q1 was flattered by about ₹70cr of stock gains, and the price needs about 24% a year against my ~17%. **Kiri** holds ₹4,354cr of net cash, more than its market value, but it is committing that money to a ₹13,300cr copper smelter and fertiliser complex without its loans in place; it withdrew its FY28 copper revenue guidance one quarter after giving it, and its auditor added two emphasis paragraphs. Its dye business runs at an operating loss and its reported profit is mostly treasury income, so I expect reported earnings to fall.",
                "**Three things to hold onto before reading the rest.** First, **Q1 FY27 was a war quarter**: the West Asia conflict and the Hormuz disruption lifted prices, not volumes, and Crisil expects sector margins to fall 150–200 basis points in FY27; judge these companies on FY26 and normal-year margins. Second, **tyre makers are the common customer**: tyres take 57% of PCBL's carbon black, 65–70% of Nocil's rubber chemicals and 85% of JG's zinc oxide, so tyre volumes drive half the group. Third, **capital needs separate the winners**: DDev and JG add sales at six to nine times what a plant costs, while Kiri's copper complex, Himadri's battery materials, PCBL's Andhra plant and Shree Pushkar's Meghnagar unit need years to pay back.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results on Screener, consolidated where the company files them; DDev has no subsidiaries and files standalone only. Kiri's operating profit has been negative since FY23, so several of its ratios are blank; its FY26 cash flow is the DyStar award. Sudarshan's growth rates for FY26 compare a year with Heubach against a year without it. Hover over a starred name for its caveat.",
                "**Where the numbers disagree.** Four companies publish an ‘EBITDA’ that differs from the filed operating profit. Himadri's Q1 figure of ₹313cr (21.9%) leaves out foreign-exchange losses; Screener shows ₹288cr (20%). JG's and DDev's include other income, so JG's Q1 11.5% is 11% filed and DDev's ₹101cr is ₹91cr filed. Kiri reported standalone EBITDA of −₹35cr for FY26 but ‘adjusted’ it to +₹79cr by excluding about ₹114cr of year-end losses on its treasury investments. Sudarshan reports a ‘business EBITDA’ (₹247cr, 9.4% in Q1) that strips out stock-valuation swings and acquisition-accounting credits. The charts use Screener's filed figures throughout.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "CareEdge Research puts India's specialty-chemicals market at ₹5,56,300cr in FY26 and expects ₹7,54,100cr by FY29, growth of 10–12% a year against about 5% for China. Nearer term, Crisil expects specialty-chemical revenue to grow only about 6% in FY27, down from about 8% in each of FY25 and FY26, with operating margins falling 150–200 basis points to 14–14.5% as exports stay weak and higher crude-linked costs are only partly passed on. Dyes and pigments are about 22% of domestic demand, the second-largest end use after agrochemicals. ICRA's outlook on basic chemicals and petrochemicals is Negative, and Fitch expects Chinese capacity to keep world markets oversupplied through 2026. This group sits in the middle of the value chain: it turns oil, coal tar, sulphur, zinc scrap and plastic resin into materials that other factories need by the tonne. **My view: demand for tyres, cables, paint and textiles grows with India's economy, but China sets the price of almost everything this group makes, so the winners are the companies with their own feedstock, long customer approvals or very cheap plants.**",
            ],
            points: [
                {
                    label: 'Carbon black and pitch: tyres, aluminium and an oil-price spike',
                    text: "Carbon black is a fine soot made by partly burning heavy oil; most of it reinforces tyres, and the rest colours or conducts electricity in plastics, inks, coatings and batteries. India has been a net exporter since FY22: CARE counts 4.44 lakh tonnes exported and 1.30 lakh tonnes imported in FY26. **PCBL** imports about 90% of its oil feedstock, mostly from the US Gulf Coast, so Brent at $97 a barrel in Q1 FY27 (against $78 in Q4) raised its costs, which formula contracts pass to tyre makers with a one- to three-month lag. **Himadri** instead makes its feedstock from coal tar, a by-product of steel-plant coke ovens, and sells coal tar pitch to aluminium smelters and graphite-electrode makers. Both are chasing ‘specialty’ blacks and battery materials, where the price per tonne is several times higher. **My view: tyre-grade carbon black is a spread business with surplus Indian capacity; the money is in specialty grades and in owning the feedstock, which is why Himadri earns 20% margins and PCBL 12–16%.**",
                },
                {
                    label: 'Dyes and pigments: China sets the price',
                    text: "Reactive dyes colour cotton; they are built from intermediates such as H-acid and vinyl sulphone, which are made by treating aromatic chemicals with sulphuric acid. China dominates both, so Indian prices follow Chinese output. In 2026 Chinese environmental curbs and the Hormuz shock cut supply: **Kiri** says H-acid sells at ₹800–900 a kilo against ₹350–400 earlier, and **Shree Pushkar** says K-acid rose from ₹550 to over ₹700 and vinyl sulphone from ₹240 to ₹350 between February and May. Sulphur, the key input, went from $250–300 a tonne to about $1,000–1,100. Pigments are a steadier, slower market: **Sudarshan** says the world industry grows 3–4% a year and that switching a pigment takes a customer one to two years in coatings and up to five in cars. **My view: dye-intermediate prices are at a cyclical high set by Chinese supply decisions; treat Q1 FY27 as a windfall, not a new level. Pigments reward scale and approvals, and Sudarshan now has both.**",
                },
                {
                    label: 'Rubber chemicals, zinc oxide and cable compounds',
                    text: "Three of these companies sell ingredients that make up a small share of the customer's cost but must pass long approvals. **Nocil**'s accelerators and antioxidants control how rubber cures and resists cracking; it holds about 40% of the Indian market, but China makes about 80% of the world's rubber chemicals and uses only about 40% of that, so it exports the surplus with the help of subsidies. **JG**'s zinc oxide is 3.5–5% of a tyre compound but only 1–1.5% of a tyre's cost; it holds about 31% of the Indian market, and its prices follow the London zinc price, so imports have no cost edge. **DDev**'s compounds go into power cables; India's grid and renewable build-out drives demand, cable makers such as Polycab, KEI, Havells and Apar buy them, and approvals transfer between DDev's plants. **My view: small cost share and long approvals make these customers loyal, but only DDev and JG, which pass costs through at a fixed spread, have kept their margins; Nocil shows what happens when imports set the price.**",
                },
                {
                    label: 'The 2026 war quarter and patchy trade protection',
                    text: "ICRA says customers ‘panic bought and stockpiled’ when the Strait of Hormuz was disrupted and warned that demand ‘is unlikely to sustain at current levels’. Q1 FY27 shows it in this group: PCBL's ₹70cr of stock gains, DDev's export premium, JG's zinc-price lift, Nocil's contract-price reset and the doubled dye-intermediate prices at Kiri and Shree Pushkar. Crude has since fallen, and PCBL expects ‘rocky’ Q2 volumes as customers run down stock. Trade policy helps only selectively: India imposed an anti-dumping duty on Chinese sulphenamide rubber chemicals on 20 June 2026 (Nocil), but the Finance Ministry refused a recommended duty on TDQ, and there is no duty on carbon black, zinc oxide or cable compounds. Abroad, the US cut its tariff on Indian chemicals and rubber to 18% in February 2026, and the EU–India trade deal, concluded in January, removes EU tariffs of up to 22% once it takes effect. **My view: FY27 earnings will peak in Q1 for most of this group; buy on normal-year profits, and never count on a duty until it is notified.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Carbon black and pitch', 'Himadri, PCBL', '12–22%', '8–22%', '**54–88%**', 'Own feedstock (Himadri) earns about a fifth; bought-in oil and surplus tyre-grade capacity (PCBL) earn less and need debt'],
                        ['Dyes, intermediates and pigments', 'Kiri, Shree Pushkar, Sudarshan', '−57% to 11%', '3–13%', '**60–63% (Kiri not meaningful)**', 'Chinese supply sets dye prices; pigments reward scale but Sudarshan is still repairing an insolvent acquisition'],
                        ['Rubber chemicals, zinc oxide and cable compounds', 'Nocil, JG, DDev', '6–11%', '4–31%', '**42–75%**', 'Small share of customer cost and long approvals; cost-plus pricing protects DDev and JG, imports squeezed Nocil'],
                    ],
                    note: 'Filed figures from Screener; DDev is standalone. Kiri’s operating profit has been negative since FY23, so its cash conversion is not meaningful.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['India specialty-chemicals market', '₹5,56,300cr in FY26', '**₹7,54,100cr by FY29 (10–12% a year)**', 'CareEdge Research, Sep 2026'],
                        ['Specialty-chemical revenue growth', 'About 8% in FY25 and FY26', '**About 6% in FY27; margins −150–200 bps to 14–14.5%**', 'Crisil Ratings, Jul 2026'],
                        ['Sector capex and debt', 'About ₹22,000cr a year in FY23–FY24', 'Cut to about ₹16,500cr in FY27; debt 2.2 times EBITDA', 'Crisil Ratings, Jul 2026'],
                        ['Basic chemicals and petrochemicals', 'War-driven price spike in Q4 FY26–Q1 FY27', '**Outlook Negative; stockpiling to unwind**', 'ICRA, Apr 2026'],
                        ['Dyes and pigments share of domestic demand', 'About 22%', 'Second-largest end use after agrochemicals', 'Crisil Ratings, Jul 2026'],
                        ['Carbon black trade', 'Exports 4.44 lakh t, imports 1.30 lakh t (FY26)', 'Net exporter since FY22; Russian exports shrinking', 'CARE on PCBL, Jul 2026'],
                        ['World rubber chemicals', 'China makes about 80%, uses about 40%', 'Chinese exports still subsidised', 'Nocil annual report and Q1 FY27 call'],
                        ['Anti-dumping duty, rubber chemicals', 'Sulphenamides from China: granted 20 Jun 2026', 'TDQ refused; Pilflex 13 decision pending', 'Nocil Q1 FY27 call'],
                        ['Indian cable-compound market', 'About 2.5 lakh t a year', 'DDev holds about a third', 'DDev Q1 FY27 presentation'],
                        ['Indian zinc oxide market', 'Top 3–4 makers hold about 60–67%', 'JG about 31%', 'JG Q1 FY27 presentation'],
                        ['Global pigments industry', 'Grows 3–4% a year', 'Sudarshan now world no. 2', 'Sudarshan Q4 FY26 and Q1 FY27 calls'],
                        ['Dye-intermediate prices', 'H-acid ₹800–900/kg against ₹350–400 earlier', 'Set by Chinese output', 'Kiri Q1 FY27 call'],
                        ['Sulphur', '$250–300/t → about $1,000–1,100/t', 'Management expects about ₹70–75/kg, not back to ₹30', 'Shree Pushkar Q4 and Q1 calls'],
                        ['Brent crude', '$97 average in Q1 FY27 against $78 in Q4 FY26', 'Has since come down', 'PCBL Q1 FY27 call'],
                        ['US tariff on Indian chemicals and rubber', '18% from Feb 2026 (penalty tariff removed)', 'Level with most Asian rivals', 'US–India joint statement, Feb 2026'],
                        ['EU–India trade agreement', 'Concluded 27 Jan 2026', 'EU tariffs of up to 22% removed at entry into force', 'European Commission, Jan 2026'],
                    ],
                    note: 'Market sizes are forecasters’ estimates; company market-share figures are the companies’ own. No independent forecast for Indian carbon black, dyes or rubber chemicals was found.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits in this group. The grid grades each company on each one; how each business works is explained in Tab 2. The short version: scale and long customer approvals are common here, but pricing power is rare, because China exports freely in almost every product and oil, sulphur and zinc prices move faster than contracts.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Owning the feedstock: Himadri',
                    text: "**Himadri** distils 600,000 tonnes of coal tar a year at one site, holds over 65% of India's coal tar pitch market, and uses its own by-product oil to feed 250,000 tonnes of carbon black capacity, of which 130,000 tonnes is specialty grades. Its chairman says it supplies pitch ‘at a price lower than China’ and is ‘not dependent on China for anything’. The evidence is in the numbers: its filed operating margin rose from 6% in FY22 to 21% in FY26 on almost flat revenue, and it held about 20% through the Q1 raw-material spike. It earns about ₹17,000 of EBITDA per tonne across the portfolio (company). **My view: this is the one genuine cost moat in the group; the open question is whether it carries over into battery materials, where China holds almost all LFP capacity.**",
                },
                {
                    label: 'Scale without pricing power: PCBL and Nocil',
                    text: "**PCBL** is India's largest carbon black maker and exporter, with 900,000 tonnes of capacity near ports and tyre hubs, and tyre makers take time to approve a supplier. But about a third of its volume is sold at spot prices, and when Indian capacity ran ahead of demand in FY26 its carbon black EBITDA fell to about ₹14,900 a tonne. **Nocil** holds about 40% of Indian rubber chemicals and says it is the only maker offering the full range, yet its operating margin fell from 18% in FY22 to 8% in FY26 after anti-dumping duties lapsed in 2019; it cut prices to keep volume. Its CFO warned that when a duty is proposed, ‘the exporters has absorbed it’. **My view: being the largest in India does not set the price when Chinese and Thai imports arrive duty-free; both need either trade protection or a richer product mix.**",
                },
                {
                    label: 'Approvals that take years: DDev, JG and Sudarshan',
                    text: "**DDev** reports ‘zero rejections’ and is the only Indian maker of compounds for 66–132 kV cables; moving to the next voltage takes three to four years of field performance, a barrier for any new rival. Its approvals transfer between plants, so its new Bhiwadi plant needed none. **JG** supplies every major Indian tyre maker and nine of the ten largest in the world; tyre approvals take four to five years, and its Naidupeta plant is the only zinc oxide plant in the world with the IATF automotive quality certificate. **Sudarshan** sells about 1,600 pigments to 4,000 customers, and switching takes one to two years in coatings and up to five in cars. **My view: these are real switching costs, and they explain why customers stayed with Sudarshan's Heubach business through its insolvency and with JG through the March 2026 supply freeze; but approvals protect volume, not price.**",
                },
                {
                    label: 'Integration in a sulphur chain: Shree Pushkar',
                    text: "**Shree Pushkar** burns sulphur into acid, uses the heat to make power, sells or consumes the acid in dye intermediates, turns spent acid into single super phosphate fertiliser and sells the gypsum left over as a soil conditioner. ICRA calls it ‘advantageously placed’ because of this zero-discharge integration, and management says it is India's only maker of K-acid. The integration showed its value in Q1: it raised prices, let volume fall (fertiliser −13%, chemicals −39%) and still grew revenue 10% with an 11% margin. But fertiliser, 46% of revenue, depends on the government's nutrient subsidy, which the chairman says ‘is not up to the required level’, and there are many regional fertiliser makers. **My view: a small but real cost advantage in chemicals; the fertiliser half is a subsidised commodity.**",
                },
                {
                    label: 'A captive buyer, not a moat: Kiri',
                    text: "**Kiri** runs an integrated chain from sulphuric acid to finished reactive dyes and claims to be one of the world's largest H-acid makers. Its 40% joint venture with China's Zhejiang Longsheng, Lonsen Kiri, takes 60–70% of its raw materials from Kiri and remains ‘the largest single supplier to DyStar’, so related-party sales jumped to 35% of Kiri's total in FY26 from almost nothing a year earlier. Yet the business lost money at the operating level in every year from FY23 to FY26, because ‘selling prices remained largely unchanged’ while inputs rose, and it became profitable in Q1 FY27 only when China cut output. **My view: scale and integration have not given Kiri pricing power; its fortunes follow Chinese supply, and its new copper business has no moat at all yet.**",
                },
                {
                    label: 'Trade protection: helpful, unreliable',
                    text: "Only **Nocil** in this group has a live duty case. The sulphenamide duty granted in June covers, together with the still-pending Pilflex 13 antioxidant, about 25–30% of its revenue; a DGTR-recommended duty on TDQ was refused, and Pilflex 13 was refused once before, in 2021. CARE says duties ‘shall remain crucial’ for Nocil's profitability. **DDev** says there is ‘no anti-dumping-duty investigation into any of these products’ and no Indian standard for compounds; **JG** says China is no threat because zinc oxide is priced off the London zinc price; no duty on carbon black was found. **My view: do not pay for protection before it is notified; Nocil's history shows how often it is not.**",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Three patterns: margins built on owning the feedstock (Himadri), fixed spreads per kilo that survive price swings (DDev, JG), and spreads set by China and oil that swing with the cycle (PCBL, Nocil, Kiri, Shree Pushkar, and Sudarshan's acquired business while it is repaired). Q1 FY27 flattered almost all of them.",
                "Whether profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: owning the feedstock earns about a fifth',
                    text: "**Himadri**'s filed operating margin has held at 19–22% for five quarters, and its segment result for carbon materials was about 19% of external revenue in FY26 (₹828cr on ₹4,367cr). Management calls ~20% sustainable and says price increases reach customers with a lag, which is why Q4 FY26 dipped to 19% before recovering. **Sudarshan**'s legacy Indian pigment business earns about 15% (15.3% in Q1, company figure), while the acquired Heubach business earned 6.5% and management targets only ‘high-single-digit or low-double-digit’ margins for it. **My view: Himadri's margin is structural in pitch and specialty black; Sudarshan's blended margin can rise to 11–12% as Heubach is fixed, but not to 15%.**",
                },
                {
                    label: 'Structural: a fixed spread per kilo',
                    text: "**DDev** prices at cost plus a fixed margin, with a 7–15 day lag and no annual fixed-price contracts, and says it can ‘maintain our fixed margins on a per-kilogram basis’. Its normal EBITDA is ₹15–17 a kilo, rising about ₹0.2 a quarter as the mix improves; the filed margin has stayed at 9–11% for three years even as resin prices swung. **JG** links its prices to the London zinc price with a month's lag and says it is ‘neutral to zinc prices’, but it keeps any stock gains or losses; its margin has stayed at 7–11% for five years. **My view: these margins are reliable but thin; growth comes from volume, and profit per kilo only creeps up with a better mix.**",
                },
                {
                    label: 'Cyclical: carbon black, rubber chemicals and dye intermediates',
                    text: "**PCBL**'s carbon black EBITDA swung from about ₹14,900 a tonne in FY26 to ₹22,900 in Q1 FY27; management guides ₹16,500–17,000 for FY27, which implies about ₹15,000 a tonne for the last nine months. **Nocil**'s margin jumped from 6.4% to 11.2% in one quarter as contract prices reset to higher raw-material costs, and it guides about 10% for FY27, still far below the 18% of FY22. **Kiri**'s standalone margin reached 5.9% in Q1 on doubled intermediate prices, against a target of 10–15%. **Shree Pushkar** guides a profit-after-tax margin of 8.5–9% and told analysts ‘do not expect 10%’. **My view: price these on FY26 margins plus a little, not on Q1; the cycle turned up on Chinese and war-driven supply cuts that are already easing.**",
                },
                {
                    label: 'Not structural: stock gains, war premiums and accounting credits',
                    text: "**PCBL** booked about ₹70cr of gains on cheap stock in Q1, of which ₹40–50cr may reverse in Q2, and expects a one-off US tariff refund of ₹40–45cr. **DDev**'s Q1 included a ₹2.5–3 a kilo export war-risk premium; its CFO said the ₹19.6 ‘may not be sustainable in each and every quarter’. **Himadri** earned ₹171cr of other income in FY26, partly on deposits funded by borrowing and on revaluing unlisted investments, and lost money on currency hedges two quarters running. **Kiri** booked a ₹114cr treasury loss inside operating costs in Q4 FY26 and a ₹284cr treasury gain in Q1 FY27. **Sudarshan**'s Q4 FY26 included a ₹37cr non-cash acquisition-accounting credit. **My view: strip these out; on normal numbers, most of the group earned less in Q1 than the headline suggests.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**JG** pays its scrap-zinc suppliers in about 5 days and waits 64 for its customers, so its cash cycle was 101 days in FY26, and it still holds ₹33.1cr of IPO money meant for working capital, unspent two years after listing. **Himadri**'s stock rose from 68 to 96 days in FY26, taking its cash cycle to 103 days, and it turned only 40% of FY26 operating profit into cash. **DDev**'s cycle stretched from 41 days in FY23 to 85 in FY26, stock reached ₹392cr (an auditor's key audit matter), and operating cash fell from ₹137cr to ₹85cr. **My view: in DDev and JG, higher resin and zinc prices raise the cash tied up even when the spread is safe; that is why their high returns turn into little free cash.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**DDev**'s Q1 interest rose to ₹11cr as it borrowed for working capital, and management targets a cycle of 55–60 days against 85. **Sudarshan**'s subsidiaries built safety stock as shipping took one to two weeks longer, reversing the promised €15–20m stock cut. **Shree Pushkar** must pay for sulphur in advance while selling acid on credit, one reason it ran its acid plants at low load in Q1. **Kiri** pays suppliers after about 205 days because its textile customers pay late, which is a warning sign for a company holding thousands of crores of cash.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Nocil** cut stock from 129 to 75 days in FY26 and generated ₹252cr of operating cash, which paid for most of its TDQ plant. **PCBL** generated ₹1,576cr of operating cash in FY26 on a 35-day cycle. **Shree Pushkar**'s operating cash rose to ₹102cr in FY26, more than its operating profit, and **Sudarshan**'s to ₹344cr as Heubach's stock was cut. **Judge each against its own model: the fixed-spread compounders should convert 70–90% of operating profit once prices stop rising; the capital-heavy builders (Himadri, PCBL, Kiri, Shree Pushkar) will absorb cash for two to three years, and the question is whether their new plants earn it back.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['DDev Plastiks', 'FY27 capex ₹150–175cr from internal cash (MV and HFFR lines, Vapi site, battery storage); battery storage ₹150–200cr including working capital; cash cycle target 55–60 days', 'Borrowings ₹57cr (Screener; CRISIL counts ₹223cr of working-capital lines); bank limits about 31% used; CRISIL A+/Stable (Jul 2026)'],
                        ['Himadri Speciality', 'About ₹2,000cr of capex in FY27–FY28; ‘free cash flow will cover that… no question of any incremental debt’; dividend payout about 5%', 'Borrowings ₹770cr, investments ₹1,060cr (March); company net cash ₹121cr; about ₹511cr of deposits pledged against credit lines; no rating rationale could be opened'],
                        ['Sh. Pushkar Chem.', '₹512cr programme, ₹303cr still to spend; funded by ₹140cr of deposits, ₹30cr of promoter warrants and accruals, or up to 25–30% term debt', 'Borrowings ₹131cr including ₹21cr from promoters; deposits ₹125cr (June); corporate guarantees ₹109cr for subsidiaries; ICRA A+ (latest read, May 2024)'],
                        ['Sudarshan Chemicals', '‘Moderate’ capex only, no volume capex needed to FY29; €76.5m VP4 sale to prepay acquisition debt; guidance kept', 'Net debt ₹531cr (June) from ₹922cr peak; gross borrowings ₹2,473cr (March); net debt about 2.05 times EBITDA; CRISIL A1+ (Sep 2026)'],
                        ['JG Chemicals', 'Dahej ₹100cr in two phases from internal cash, Phase 1 in November; payback 3–4 years', 'Borrowings ₹6cr; net cash about ₹150cr; ₹33.1cr of IPO money unspent; CARE A+/Stable (Sep 2026)'],
                        ['Nocil', 'TDQ plant finished 10–12% under its ₹250cr budget; new ₹130cr specialty plant funded mostly from cash, rest by a term loan; FY27 revenue ₹1,400–1,600cr at about 10% EBITDA', 'Borrowings ₹8cr; investments ₹415cr; dividend payout 45%; CARE AA/Stable (Oct 2025)'],
                        ['PCBL Chemical', 'FY27 capex about ₹300cr ± ₹50cr; Andhra plant (₹1,100cr) mostly from FY28; US tariff refund ₹40–45cr; interim dividend ₹4.5 a share', 'Net borrowings ₹4,536cr (March, company); debt 5.02 times EBITDA; ₹605cr repayable in FY27; CARE outlook Negative (Jul 2026)'],
                        ['Kiri Industries', 'Copper capex ₹4,500–5,000cr by March 2027, ~₹5,000cr in FY28; loans ‘more than 50%’ committed but not closed; no dividend in FY27', 'Borrowings ₹42cr; investments ₹3,341cr plus large loans and deposits (March); total debt ₹8,000–9,000cr expected by FY28; no current rating'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Ratings are the latest rationales read.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth could come from, how each company did against what it promised on its Q4 FY26 call, and my own estimate of earnings growth. In this group, the cheapest growth comes from small, fast-filling plants (DDev, JG) and from repairing an acquisition (Sudarshan); the most expensive and uncertain comes from new materials and new industries (Himadri's battery chemicals, Kiri's copper).",
            ],
            points: [
                {
                    label: 'Growth driver: cheap plants that fill fast',
                    text: "**DDev**'s 48,000-tonne Bhiwadi plant cost about ₹77–80cr and should add about ₹500cr of revenue when full, about six times its cost; it ran at 20–25% in Q1 and is targeted at about 50% for FY27, with a new HFFR line (halogen-free flame-retardant compound, for solar and public-building cables) taking that product to 20,000 tonnes. Management targets ₹5,000cr of core revenue by FY30. **JG**'s ₹100cr Dahej plant could add about ₹900cr of revenue at 11–12% margins, about nine times its cost, serving the Morbi ceramics cluster and two tyre plants 10–15 km away; ceramic approvals take one to three months, against about five years for tyres. **My view: these are the best-returning projects in the group, and both companies fund them from their own cash; the risk is that volumes fill more slowly than guided, as DDev's 1% Q1 growth already shows.**",
                },
                {
                    label: 'Growth driver: battery materials',
                    text: "**Himadri** starts a 2,000-tonne LFP (lithium iron phosphate, a battery cathode) line in Q3 FY27, with 40,000 tonnes (₹1,125cr) operational in FY28 and about ₹3,000cr of revenue at today's prices; it commissioned a 200-tonne anode plant in April, now sampling with customers, adds 200 tonnes of carbon nanotubes (₹70cr) and 6,000 tonnes of super-speciality black (₹170cr, about ₹500cr of revenue), and owns about 19% of IBC, a battery maker using its materials. **PCBL**'s nano-silicon anode venture, Nanovace, starts sampling this year with commercial volumes in FY28. **DDev** assembles battery-storage containers from imported Chinese cells, now delayed a quarter or two and guided at 6–8% margins in phase one. An analyst's model showed LFP losing money at Chinese prices; Himadri's chairman replied that ‘it is not possible for you to calculate my cost on Excel sheet’. **My view: Himadri's anthraquinone and super-speciality black are near-certain; LFP is an option with no named customer contract, and I give it little weight until one is signed.**",
                },
                {
                    label: 'Growth driver: repair and recovery',
                    text: "**Sudarshan** guides FY27 revenue of ₹9,800–10,200cr and EBITDA of about ₹800cr, rising to ₹12,000–14,000cr and ₹1,400–1,500cr by FY29, mainly by winning back customers Heubach lost in insolvency (the combined business was about €1bn of sales before) and cutting costs, with no new capacity. **PCBL** guides FY27 carbon black EBITDA of ₹16,500–17,000 a tonne on high-single-digit volume growth, and a ₹4,000cr EBITDA ambition for 2030; its 150,000-tonne Andhra plant (₹1,100cr) starts spending in FY28. **Nocil** guides FY27 revenue of ₹1,400–1,600cr at about 10% EBITDA, its new TDQ plant adds about 20% capacity with sales from Q4 FY27, and a ₹130cr specialty plant follows in Q2 FY28; it wants exports up from 33% to 40–45%. **My view: Sudarshan's recovery is the most advanced and the least capital-hungry; PCBL's and Nocil's depend on spreads they do not control.**",
                },
                {
                    label: 'Growth driver: new fertiliser and copper capacity',
                    text: "**Shree Pushkar**'s ₹512cr programme adds 4.5 lakh tonnes of fertiliser and 72,000 tonnes of chemical capacity: Unit 6 at Ratnagiri (₹85cr) was due to start trials in August–September, a dye plant (₹37cr) is built, and the ₹350cr Meghnagar complex in Madhya Pradesh is due in March 2028. Management's ₹2,000cr peak revenue implies about two times its capex. **Kiri**'s ₹13,300cr copper smelter, refinery and fertiliser complex at Jafrabad in Gujarat is under construction, with civil work 25–30% complete in June; the tube plant is due in June 2027 and the smelter in early 2029. It has non-binding agreements for about 1m tonnes of the 1.5m tonnes of copper concentrate it needs and, on 8 September, won 40% of a disputed Philippine mine in a foreclosure auction for US$5.01m. The managing director warned that ‘if I operate 30%, we cannot service the debt’. **My view: Shree Pushkar's plan is ambitious but in its own trade; Kiri's is a new industry for its managers, with feedstock, finance and incentives all still open.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Sudarshan** promised €35m of EBITDA from the acquired business for all of FY27 and earned ₹128cr (about €12m) in Q1 alone; legacy pigment revenue grew 26% against 8–10% guided, and net debt reached ₹531cr, almost its FY27 target, in the first quarter. **Himadri** promised growth in both revenue and profit in FY27 and delivered +28% and +27%, holding its ~20% margin. **Shree Pushkar** hinted at Q1 revenue above ₹250cr and a profit margin of 8–8.5%, and delivered ₹280cr and 8.2%. **JG** promised its margin would return to 10–11% from Q1, and it did (11.5% company, 11% filed).",
                },
                {
                    label: 'Cautious',
                    text: "**Sudarshan** kept its guidance despite the strong quarter, citing ‘the geopolitical situation’, and will revisit after Q2. **PCBL** warned of ‘rocky’ Q2 volumes as customers destock, and its new Aquapharm chief said ‘it is early days’ before committing to a target. **DDev**'s CFO said Q1's profit per kilo may not be repeated. **Himadri** gives no annual guidance, only the FY28 profit goal.",
                },
                {
                    label: 'Missed',
                    text: "**Kiri** promised ‘40,000 crores plus revenue’ from copper in FY28 on its June call, then said in August that ‘the 20,000–25,000 crores of revenue in FY28 does not hold’, pushing full revenue to FY30; financial closure, due ‘in the next few months’, has not happened, and its 5.9% dye margin missed the 10–15% target. **DDev** grew volume 1% against a 15% target and delayed its battery business by one to two quarters. **JG** moved Dahej from ‘this calendar year’ to November and cut FY28 utilisation from 65–70% to 50–60%. **Himadri** called Q4's forex loss a one-off and booked another in Q1.",
                },
                {
                    label: 'Mixed',
                    text: "**PCBL** beat on profit, up 65%, but on stock gains, spot prices and power sales, with carbon black volume flat and the ₹75cr-a-quarter Aquapharm target effectively paused. **Nocil** beat its margin target (11.2% against about 9.2% implied) but volume fell below the Q4 base it had called ‘the base’, and only one of two duties was granted. **Shree Pushkar** raised FY27 guidance to ₹1,300–1,400cr, but that is still below the ₹1,500cr it gave before May, and its capex has more than doubled from the ₹215cr ICRA described in 2024.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect earnings growth of about 35% a year at Sudarshan, 17% at Himadri and PCBL, 15% at Shree Pushkar, JG and Nocil, 11% at DDev, and a fall of about 15% a year at Kiri.** Sudarshan's figure is high because it starts from a trailing profit of only ₹89cr on Screener, depressed by acquisition costs, depreciation of ₹347cr and interest of ₹174cr; if it reaches even ₹1,100cr of EBITDA by FY29, well below guidance, profit rises several-fold. PCBL's and Nocil's figures are mostly recovery from trough profits, not structural growth. Himadri's assumes FY28 profit a little below the ₹1,100cr target and modest battery income after that. Kiri's reflects treasury income shrinking as its cash goes into copper, with no copper profit before FY29–FY30. **My view: the surest growth per rupee invested is at DDev and JG; the largest, and least certain, is at Sudarshan and Himadri.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['DDev Plastiks', 'Volume 10–15% a year from Bhiwadi, HFFR and exports; margin about 10–11%; battery storage low-margin; rising interest', '5% / **11%** / 16%'],
                        ['Himadri Speciality', 'Specialty black, anthraquinone and Birla Tyres to FY28; LFP and anode an option; other income falls', '8% / **17%** / 25%'],
                        ['Sh. Pushkar Chem.', 'Unit 6 and Meghnagar double capacity; dye-intermediate prices fall back; subsidy and execution risk', '5% / **15%** / 25%'],
                        ['Sudarshan Chemicals', 'Heubach margin repair and customer recapture from a depressed base; VP4 sale cuts interest; restructuring costs', '10% / **35%** / 55%'],
                        ['JG Chemicals', 'Dahej adds up to ₹900cr of sales by FY29–FY30 at 11–12% margins; tyre demand; zinc-price swings', '7% / **15%** / 22%'],
                        ['Nocil', 'Recovery from trough; TDQ and specialty plants; exports; duty outcomes', '3% / **15%** / 25%'],
                        ['PCBL Chemical', 'Carbon black profit per tonne back to ₹16,000+; Aquapharm recovery; interest falls as debt is repaid', '5% / **17%** / 28%'],
                        ['Kiri Industries', 'Treasury income shrinks as cash goes into copper; dyes at 6–12% margins; copper not before FY29–FY30', '−30% / **−15%** / 5%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8; Sudarshan is not in that table.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['DDev Plastiks', 'FY27 volume +15% to 2,31,000t, revenue +13%, EBITDA margin about 11%; ₹5,000cr core revenue by FY30; battery storage from FY28 at 6–8%', '₹150–175cr in FY27; CRISIL expects ₹350–400cr over 2–3 years, all internal', '**Mixed**: record EBITDA; volume +1%; battery storage delayed'],
                        ['Himadri Speciality', 'Profit after tax ₹1,100cr+ in FY28; margin about 20%; LFP 2,000t in Q3 FY27, 40,000t in FY28', 'About ₹2,000cr over FY27–FY28', '**Delivered**: revenue +28%, profit +27%; forex loss again'],
                        ['Sh. Pushkar Chem.', 'FY27 revenue ₹1,300–1,400cr (raised); FY28 ₹1,700–1,750cr; profit margin 8.5–9%', '₹512cr programme, ₹303cr to spend; Meghnagar by March 2028', '**Delivered**: ₹280cr and 8.2% against hints of ₹250cr+ and 8–8.5%'],
                        ['Sudarshan Chemicals', 'FY27 revenue ₹9,800–10,200cr, EBITDA ~₹800cr; FY29 ₹12,000–14,000cr and ₹1,400–1,500cr; kept', '‘Moderate’; CRISIL expects ₹150–250cr a year', '**Beat**: acquired-group EBITDA ₹128cr in one quarter; net debt ₹531cr'],
                        ['JG Chemicals', 'Margin 10–11% now, 14–15% (or 13–14%) with value-added grades; Dahej 50–60% used in FY28', 'Dahej ₹100cr (Phase 1 ₹50cr, November)', '**Mixed**: margin back to 11%; Dahej late, FY28 use cut'],
                        ['Nocil', 'FY27 revenue ₹1,400–1,600cr, EBITDA about 10%, volume about +10%', 'TDQ ₹250cr done; ₹130cr specialty plant by Q2 FY28', '**Mixed**: margin 11.2%; volume below base; TDQ duty refused'],
                        ['PCBL Chemical', 'FY27 carbon black EBITDA ₹16,500–17,000/t; high-single-digit volume; ₹200–250cr cost savings; net debt to fall', '₹300cr ± ₹50cr in FY27; Andhra ₹1,100cr mostly FY28', '**Mixed**: profit +65% on stock gains; volume flat; Aquapharm target paused'],
                        ['Kiri Industries', 'Dyes revenue possibly near ₹2,000cr; copper revenue in FY30 (FY28 guide withdrawn); margin 10–15% target', '₹13,300cr complex; ₹4,500–5,000cr by March 2027', '**Missed**: FY28 copper guide dropped; loans not closed; margin 5.9%'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and rating rationales rather than the calls. Kiri's FY26 audit carried two emphasis-of-matter paragraphs; the other seven had unmodified opinions, though Sudarshan's group auditor relied on other firms for 57 subsidiaries.",
            ],
            points: [
                {
                    label: 'Audit findings and accounting',
                    text: "**Kiri**'s auditor draws attention to two matters: the DyStar award was treated largely as a non-taxable ‘capital receipt’ on a legal opinion, so only about ₹150–160cr of tax was paid on a gain of ₹5,881cr, and a future tax demand is possible; and receivables, loans and deposits were written off as exceptional items. Its notes also record capital advances to equipment suppliers whose goods never arrived, foreign-currency dues outstanding beyond the Reserve Bank's deadline, and ₹198.7cr of loans to group companies with no repayment schedule. **Sudarshan**'s group auditor, EY's S R B C & Co, did not audit 57 subsidiaries carrying ₹7,127cr of revenue, about 73% of the group. **Himadri**'s other income, about 17% of FY26 pre-tax profit, includes gains on revaluing unlisted investments. **My view: Kiri's list is the longest and most serious in this group; Sudarshan's is a feature of a fresh cross-border acquisition that should shrink as systems merge.**",
                },
                {
                    label: 'Promoters and related parties',
                    text: "**Kiri**'s sales to related parties reached 35% of the total in FY26, it buys from promoter-linked firms, pays rent and interest to another, and some of its land is held in the name of the late chairman; the promoter family raised its stake from 31.7% to 41.7% through warrants. **Himadri** holds about ₹935cr of near-zero-coupon debentures, plus preference shares, of Dalmia Bharat Refractories, which bought Birla Tyres out of insolvency with Himadri as partner and funds its revival. **Shree Pushkar** took ₹26.6cr of loans from its promoters and their relatives in FY26 while holding ₹140cr of deposits, pays rent to a promoter's relative and guarantees ₹109cr of its subsidiaries' debt. At **Nocil**, one promoter company had 3.47% of the equity pledged in April. **Sudarshan**'s promoters now hold 8.2%, and its chairman and managing director was paid ₹16.1cr in FY26, about 39% of consolidated profit. **DDev**'s promoter holds the maximum 74.99% and buys small amounts from a group company. **My view: Kiri and Himadri's Birla Tyres structure are the two to watch; money moving between a listed company and connected parties needs a very clear reason.**",
                },
                {
                    label: 'Debt and big projects',
                    text: "**Kiri** expects total debt of ₹8,000–9,000cr by FY28 for a smelter it has no experience of running, with concentrate supply partly in court. **PCBL**'s debt is about five times EBITDA, above CARE's downgrade trigger of four, with ₹605cr to repay in FY27; it paid dividends of 119% of FY26 profit and still plans a ₹1,100cr plant. **Himadri** promises ‘no incremental debt’ for ₹2,000cr of capex, but its borrowings more than doubled to ₹770cr in FY26 and free cash was negative. **Shree Pushkar**'s ₹350cr Meghnagar project is large for a company with ₹977cr of revenue. **My view: PCBL's balance sheet leaves no room for another weak year in carbon black; Kiri's project risk is of a different order from anything else in this group.**",
                },
                {
                    label: 'Customer, product and regulatory concentration',
                    text: "**JG**'s customers that each buy more than 10% of its sales took about 51% of FY26 revenue, tyres take 85% and zinc oxide is about 95% of sales. **PCBL**, **Nocil** and **JG** all depend on tyre volumes. **Nocil**'s antioxidant 6PPD, sold as Pilflex 13, is under scrutiny in California for its toxicity to fish; Nocil says it is in ‘advanced stages’ on alternatives. **Shree Pushkar**'s fertiliser half depends on the government's nutrient subsidy and the monsoon. **DDev**'s top six cable makers take about 22% of revenue, and cable makers could make their own compounds, though management argues it would not pay. **My view: a slowdown in tyre production would hit four of the eight companies at once.**",
                },
                {
                    label: 'China, trade policy and the war unwinding',
                    text: "Crisil expects sector margins to fall 150–200 basis points in FY27, and ICRA expects war-driven stockpiling to unwind. China still sets the price in carbon black, rubber chemicals, dyes and pigments, and its rubber-chemical exports still enjoy subsidies, according to Nocil. India's trade protection is unreliable: the TDQ duty was refused despite a positive recommendation, and imports reach India duty-free through free-trade agreements with Thailand and Korea. **Kiri** and **Shree Pushkar** made Q1 profits on dye-intermediate prices that depend on Chinese output staying low. **My view: the risk for H2 FY27 is not a collapse but a return to FY26 spreads, which would make the Q1-based optimism in several share prices look expensive.**",
                },
                {
                    label: 'Liabilities not yet in the profit figures',
                    text: "**Sudarshan** inherited a ₹264cr provision for decommissioning old European sites (₹388cr undiscounted over about eight years), tax disputes of ₹189cr, and a European Works Council restructuring agreed after June whose cost has not been given. **Kiri**'s contingent-liability note shows a ₹1,446cr corporate guarantee, most likely the one backing a judgement-finance loan since repaid, plus ₹32–47cr of disputed tax. **Himadri**'s LFP economics have not been disclosed, and its anode and LFP customers are under non-disclosure agreements. **PCBL** pledged the shares of Aquapharm to secure a ₹645cr NBFC loan. **My view: none of these is yet a large cash loss, but Sudarshan's decommissioning bill and Kiri's tax position are real claims on shareholders' money.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it charges for debt and credits cash. In this group the gap between them is widest at PCBL, whose debt is about a third of its market value, and at Kiri, whose net cash exceeds its market value while its operating profit is negative.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **3% at 8x, 8% at 12x, 12% at 18x, 16% at 26x, 24% at 50x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Two of the seven priced live fit my estimates, two are full and three are stretched; Sudarshan is not measured live. Several prices assume Q1 FY27 was the new normal; I do not.**",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**PCBL**'s ₹4,237cr of net debt adds about a third to its ₹13,362cr market value, but because its trailing profit is squeezed by ₹423cr of interest and ₹373cr of depreciation, it looks cheaper on EV/EBITDA than on P/E; that is the trough-earnings effect, and it holds only if the debt comes down. **Kiri**'s EV/EBITDA cannot be calculated: net cash of ₹4,354cr exceeds its ₹3,633cr market value and operating profit is negative, so the market is valuing the dye business and the copper project at less than nothing. **Nocil**'s ₹442cr of net cash is about 14% of its value; **Himadri**'s counted cash is about 3%, and much of the investments behind it are debentures tied to Birla Tyres. **My view: Kiri's discount to its cash is the market's verdict on how that cash will be used; I agree with it.**",
                },
                {
                    label: 'Fits: the price asks for no more than I expect',
                    text: "**DDev** needs about 8% a year against my ~11%; it is the only company here where a 30%-plus return on capital, a leading share and cost-plus pricing come at a price that assumes little growth, which is why it is the one ‘own’. **Shree Pushkar** needs about 15% a year against my ~15%; it fits, but only just, and the fit depends on Unit 6 and Meghnagar arriving close to plan, which its record does not guarantee.",
                },
                {
                    label: 'Full: prices that ask a little more than I expect',
                    text: "**Himadri** needs about 22% a year against my ~17%; that assumes the ₹1,100cr FY28 target is met and battery materials add meaningfully after it. **JG** needs about 19% a year against my ~15%; that assumes Dahej fills on time and the margin stays above 10% once zinc stops rising. **My view: Himadri is the one I would buy on a fall of a fifth or so; JG needs the Dahej start and two quarters of steady margins first.**",
                },
                {
                    label: 'Stretched: prices that need a full recovery',
                    text: "**PCBL** needs about 24% a year against my ~17%; its trailing profit of about ₹259cr is roughly half of FY24's ₹491cr, so the price already assumes a return to peak spreads while debt stays high. **Nocil** needs about 23% a year against my ~15%; its trailing profit of about ₹66cr is little more than a third of FY22's ₹176cr, and a return there needs duties and mid-teens margins, not the ~10% guided. **Kiri**'s dye business runs at an operating loss, so the live table shows no estimate; its reported profit is mostly treasury income on the award, not dyes, and I expect earnings to fall about 15% a year as that cash is spent, so the price does not fit either. **My view: none of the three is cheap on normal earnings.**",
                },
                {
                    label: 'Not measured live: Sudarshan',
                    text: "**Sudarshan** is left out of the live table because the dashboard's market value for it (₹961cr) is wrong; Screener shows ₹9,704cr, and a P/E of about 96 on trailing profit of ₹89cr (Screener). On the same yardstick that would need about 32% a year against my ~35%. The trailing figure is depressed by acquisition costs; if the company reaches its FY27 EBITDA guide of about ₹800cr, profit could be several times the trailing level, and at ₹1,400–1,500cr of EBITDA by FY29 it would look inexpensive. **My view: the recovery case is sound and ahead of plan, but with a new management structure, a promoter holding of 8.2% and 73% of revenue audited by others, I would follow it for one more quarter rather than buy on a single strong one.**",
                },
                {
                    label: 'A check from capacity and capex',
                    text: "**DDev** adds sales at about six times what a plant costs and **JG** at about nine, so modest capex supports their growth estimates. **Shree Pushkar**'s ₹512cr for about ₹1,000cr of extra revenue is about two times; **Himadri**'s LFP line promises about 2.7 times, and its super-speciality black about three times. **Nocil**'s assets turn about 1.6 times; **PCBL**'s about 1.15 times after the Aquapharm goodwill. **Kiri**'s ₹13,300cr copper complex would earn only ₹15,000–20,000 a tonne on rods and tubes, by an analyst's figure management did not dispute; its claimed 25% return depends on smelting charges and by-products it has not disclosed. **My view: the prices of Himadri and Kiri depend most on capex that has not yet proved itself; DDev's and JG's depend least.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'DDev Plastiks', rank: 1, stance: 'COMPOUNDER', segment: RUBBER,
            what: "India's leading maker of polymer compounds for wire and cable insulation (XLPE, halogen-free flame-retardant and PVC), with about a third of the market, six plants and exports to 55+ countries; it is starting a battery-storage assembly business.",
            view: "**A high-return leader at a price that asks for little.** It earned 31% on capital in FY26 on sales of about ten times its fixed assets, prices at a fixed spread per kilo, and its new Bhiwadi plant should add about ₹500cr of sales for about ₹80cr. But Q1 volume rose only 1% against a 15% target, the ₹19.6 a kilo Q1 profit included a temporary export premium, only 47% of operating profit has become cash over five years, and the battery-storage venture slipped with a lower margin guide. The price needs about 8% a year against my ~11%.",
            watch: 'Second-half volume near 60,000t a quarter; cash cycle back towards 60 days; battery storage kept small until it earns 10%.',
        },
        {
            company: 'Himadri Speciality', rank: 2, stance: 'PRICED', segment: CARBON,
            what: "A coal-tar distiller with over 65% of India's pitch market, 250,000t of carbon black capacity (130,000t specialty) and new battery-material lines (LFP cathode, anode, carbon nanotubes); it also runs the revived Birla Tyres business.",
            view: "**The best business here, at a full price.** Its filed margin rose from 6% to 21% in four years on flat revenue, Q1 revenue grew 28% and profit 27%, and it reaffirmed ₹1,100cr of profit after tax for FY28. But other income was about 17% of FY26 pre-tax profit, forex losses recurred, free cash turned negative as capex rose to about ₹1,000cr a year, and about ₹935cr sits in debentures funding Birla Tyres. The price needs about 22% a year against my ~17%.",
            watch: 'A signed LFP customer contract; operating cash above 70% of EBITDA; no further lending to Dalmia Bharat Refractories.',
        },
        {
            company: 'Sh. Pushkar Chem.', rank: 3, stance: 'SCALEUP', segment: COLOUR,
            what: "An integrated sulphur-chain maker of acids, dye intermediates (India's only K-acid maker), reactive dyes and single super phosphate fertiliser, with nine plants in Maharashtra, Madhya Pradesh and Haryana.",
            view: "**Priced for its plan, with a patchy record of delivering plans.** It passed a three- to four-fold sulphur rise on to customers, grew FY26 profit to ₹70cr with ₹102cr of operating cash, and targets FY28 revenue of ₹1,700–1,750cr as new units start. But free cash was negative in four of five years, the expansion doubled in cost and slipped about six months, Q1 was lifted by dye-intermediate prices, and promoters lent it ₹21cr while it held ₹125cr of deposits. The price needs about 15% a year against my ~15%.",
            watch: 'Unit 6 running commercially by Q3; fertiliser volume recovering without a margin loss; promoter loans repaid.',
        },
        {
            company: 'Sudarshan Chemicals', rank: 4, stance: 'TURNAROUND', segment: COLOUR,
            what: "The world's second-largest pigment maker after buying the insolvent Heubach group in March 2025: 19 plants in 11 countries, about 1,600 products for coatings, plastics and inks, plus a small equipment arm (RIECO).",
            view: "**A turnaround ahead of plan, not measured live.** The acquired business earned ₹128cr of business EBITDA in Q1, far ahead of its €35m full-year guide, net debt fell from ₹922cr to ₹531cr and the €76.5m VP4 sale should make it net cash. But other auditors cover 73% of revenue, it carries a ₹264cr decommissioning liability, a restructuring charge is coming, and the promoters hold only 8.2%. The dashboard's market value is wrong, so it is not in the live table; on Screener's price it would need about 32% a year against my ~35%.",
            watch: 'Q2 business EBITDA margin at 9% or better and guidance raised; the Works Council restructuring cost; the VP4 sale closing.',
        },
        {
            company: 'JG Chemicals', rank: 5, stance: 'SCALEUP', segment: RUBBER,
            what: "India's largest zinc oxide maker (about 31% share), recycling zinc scrap into 90+ grades for tyre makers (85% of sales), pharma, ceramics and fertiliser, from plants in West Bengal and Andhra Pradesh.",
            view: "**Clean and debt-free, but a thin spread.** It has about ₹150cr of net cash, supplies every Indian tyre major and nine of the top ten globally, and its ₹100cr Dahej plant could add about ₹900cr of sales. But its margin has stayed at 7–11% for five years, customers above 10% of sales take 51% of revenue, Q1 was helped by rising zinc, and Dahej slipped with FY28 use cut to 50–60%. The price needs about 19% a year against my ~15%.",
            watch: 'Dahej commissioned in November; filed margin above 10% once zinc stops rising; first ceramics orders from Morbi.',
        },
        {
            company: 'Nocil', rank: 6, stance: 'TURNAROUND', segment: RUBBER,
            what: "India's largest rubber-chemicals maker (about 40% share), selling accelerators and antioxidants to domestic and global tyre makers from plants at Dahej and Navi Mumbai.",
            view: "**A debt-free leader waiting on trade policy.** It holds ₹442cr of net cash, won a sulphenamide duty in June, lifted its Q1 margin to 11% and guides FY27 revenue of ₹1,400–1,600cr at about 10%. But its margin fell from 18% to 8% in four years as imports took its pricing power, the TDQ duty was refused, Q1 benefited from a raw-material price lag, and one promoter's shares are partly pledged. The price needs about 23% a year against my ~15%.",
            watch: 'The Pilflex 13 duty decision; TDQ plant sales from Q4 FY27; whether exporters absorb the sulphenamide duty.',
        },
        {
            company: 'PCBL Chemical', rank: 7, stance: 'CYCLICAL', segment: CARBON,
            what: "India's largest carbon black maker (900,000t) and exporter, selling mostly to tyre makers, plus Aquapharm's water-treatment and detergent chemicals and a nano-silicon battery-anode venture.",
            view: "**A leader at the bottom of its cycle, with too much debt.** Q1 profit rose 65% and carbon black earned ₹22,900 a tonne, and five-year cash conversion of 88% is the best in the group. But Q1 included about ₹70cr of stock gains, volume was flat, debt is about five times EBITDA with CARE's outlook Negative, dividends exceeded FY26 profit and the Aquapharm target was shelved. The price needs about 24% a year against my ~17%.",
            watch: 'Carbon black profit above ₹16,000 a tonne after stock effects; debt below four times EBITDA; Aquapharm back above ₹60cr a quarter.',
        },
        {
            company: 'Kiri Industries', rank: 8, stance: 'AVOID', segment: COLOUR,
            what: "A reactive-dye and dye-intermediate maker in Gujarat with a 40% Chinese-partnered dye joint venture, now building a ₹13,300cr copper smelter and fertiliser complex with the proceeds of its DyStar stake.",
            view: "**Cash worth more than the company, committed to a project I cannot underwrite.** Net cash of ₹4,354cr exceeds its market value and dye prices have doubled. But the dye business lost money at the operating level from FY23 to FY26, related parties took 35% of sales, the auditor flagged the tax treatment of the award and write-offs, the copper project has no financial closure, and FY28 copper guidance was withdrawn a quarter after it was given. Its reported profit rests on treasury income while the dye business loses money; I expect earnings to fall about 15% a year.",
            watch: 'Financial closure and a binding concentrate contract; any tax demand on the DyStar award; the tube plant starting by June 2027.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Carbon black, pitch and battery materials.** **Himadri Speciality: follow**; the best business in the group, with a real cost edge and the strongest capex pipeline, at a price that needs a little more than I expect and with profit softer than the margin shows. **PCBL Chemical: wait** until carbon black earns above ₹16,000 a tonne without stock gains and debt falls below four times EBITDA.",
            "**Dyes, dye intermediates and pigments.** **Shree Pushkar Chemicals: follow**; it fits my estimates, but only if the new units arrive close to plan. **Sudarshan Chemicals: follow**; not measured live, the Heubach turnaround is ahead of plan, and one more clean quarter with raised guidance would make it a buy. **Kiri Industries: avoid**; the cash is large, but it is going into a copper project whose finance, feedstock and guidance are all unsettled, under auditor's emphasis.",
            "**Rubber chemicals, zinc oxide and cable compounds.** **DDev Plastiks: own**; a 30%-plus return business priced for little growth, to be held while volumes catch up with the target. **JG Chemicals: wait** for the Dahej start and margins that hold once zinc stops rising. **Nocil: wait** for the Pilflex 13 duty decision and proof that TDQ sells; the cash protects the downside, but the price assumes a full margin recovery.",
            "**What would change my view.** For the better: DDev's volume back to double digits; a signed LFP contract at Himadri; Sudarshan raising guidance; JG's Dahej starting on time; a Pilflex 13 duty for Nocil; PCBL cutting debt; Kiri closing its project finance with a binding feedstock contract. For the worse: a return to FY26 spreads in carbon black and dye intermediates; more Himadri money lent to Birla Tyres' owner; a large Works Council charge at Sudarshan; further slippage at Shree Pushkar's Unit 6; a tax demand on Kiri's award.",
            "**What to watch next quarter.** DDev's volume and cash cycle; Himadri's forex line and cash conversion; Shree Pushkar's Unit 6 start; Sudarshan's Q2 margin and guidance; JG's Dahej commissioning; Nocil's duty decision; PCBL's profit per tonne after stock effects; Kiri's financial closure.",
        ],
        bottomLine:
            "Own DDev Plastiks, a high-return cable-compound leader priced for little growth. Follow Himadri for its cost edge and battery options, Shree Pushkar for its expansion and Sudarshan for its turnaround; wait on JG, Nocil and PCBL for plants, duties and debt; avoid Kiri, whose cash is going into a copper project it cannot yet finance.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/HSCL/consolidated/' },
        { label: 'Specialty chemical makers set to catalyse 6% revenue growth — Crisil Ratings, Jul 2026', url: 'https://www.crisilratings.com/en/home/newsroom/press-releases/2026/07/specialty-chemical-makers-set-to-catalyse-6-percent-revenue-growth.html' },
        { label: 'Specialty chemical firms pare capex as margins come under pressure — Business Today, Jul 2026', url: 'https://www.businesstoday.in/industry/story/specialty-chemical-firms-pare-capex-as-margins-come-under-pressure-540640-2026-07-02' },
        { label: 'Fertiliser, basic chemicals and petrochemicals outlook — ICRA, Apr 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=70b3f553-8150-4f2e-83a7-510b6dbdb0ae' },
        { label: 'India specialty chemicals market (CareEdge Research figures) — Multibagg, Sep 2026', url: 'https://www.multibagg.ai/market-pulse/articles/ipo/indias-specialty-chemicals-market-growth-rhp-cmu8r1ue000ery6piuexbesyp' },
        { label: 'Fitch maintains deteriorating outlook for chemicals — Indian Chemical News, Dec 2025', url: 'https://www.indianchemicalnews.com/chemical/fitch-maintains-deteriorating-outlook-for-chemicals-sector-due-to-massive-overcapacity-increased-trade-tensions-28652' },
        { label: 'United States–India joint statement — White House, Feb 2026', url: 'https://www.whitehouse.gov/briefings-statements/2026/02/united-states-india-joint-statement/' },
        { label: 'EU–India free trade agreement concluded — European Commission, Jan 2026', url: 'https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/eu-india-free-trade-agreement-concluded-major-global-trade-milestone-2026-01-29_en' },
        { label: 'DDev Plastiks rating rationale — CRISIL, Jul 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/DdevPlastiksIndustriesLimited_July%2017_%202026_RR_399657.html' },
        { label: 'DDev Plastiks Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=19330b61-4e66-4122-94d3-261e7196cb5f.pdf' },
        { label: 'DDev Plastiks Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=93110313-a8a5-4ecd-8df2-0eaf65546be6.pdf' },
        { label: 'Himadri Speciality Chemical Annual Report FY26 (Dalmia Bharat Refractories investments, segment note) — Himadri', url: 'https://www.himadri.com/home/uploads/performance/annual_report_doc/1778839995_Himadri_Annual_Report_FY_2025-26.pdf' },
        { label: 'Himadri Speciality Chemical Q4 FY26 earnings call — AlphaStreet', url: 'https://alphastreet.com/india/himadri-speciality-chemical-ltd-hscl-q4-2026-earnings-call-transcript/' },
        { label: 'Shree Pushkar Chemicals Annual Report FY26 (promoter loans, guarantees) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/8287698d-5dd3-410d-bf78-1b84e8df3172.pdf' },
        { label: 'Shree Pushkar Chemicals Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/97fb4e8b-1bb6-4200-8f3d-07503dd25269.pdf' },
        { label: 'Shree Pushkar Chemicals Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/be92392e-6991-42c2-a85b-a3f8f8c930d5.pdf' },
        { label: 'Shree Pushkar Chemicals rating rationale — ICRA, May 2024', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?id=127393' },
        { label: 'Sudarshan Chemical Industries Annual Report FY26 (other auditors, decommissioning, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/5620b38e-fcd9-4152-abb0-dbf9dba75fc6.pdf' },
        { label: 'Sudarshan Chemical Industries Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2c4c11c3-4c99-40f1-afd2-49b018f91b71.pdf' },
        { label: 'Sudarshan Chemical Industries: sale of VP4 Frankfurt — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=65a2661f-34a4-4019-b5dd-f44102495bd3.pdf' },
        { label: 'Sudarshan Chemical Industries rating rationale — CRISIL, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/SudarshanChemicalIndustriesLimited_September%2010_%202026_RR_405058.html' },
        { label: 'JG Chemicals Annual Report FY26 (customer concentration, IPO proceeds) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=77ecdaaa-8af3-4322-bcc7-5b3121018398.pdf' },
        { label: 'JG Chemicals Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3f5116e7-9393-4959-b05f-002066b011d3.pdf' },
        { label: 'J.G. Chemicals rating rationale — CARE, Sep 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202609140936_J.G._Chemicals_Limited.pdf' },
        { label: 'NOCIL Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/401d129d-99ed-4f7f-adaf-22e8b0795cac.pdf' },
        { label: 'NOCIL Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a3daa814-07df-4b54-b7ed-d04f3617120e.pdf' },
        { label: 'NOCIL rating rationale — CARE, Oct 2025', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202510121044_NOCIL_Limited.pdf' },
        { label: 'PCBL Chemical Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=90972919-f51c-4d38-840c-14d4e5e7d11e.pdf' },
        { label: 'PCBL Chemical Q1 FY27 investor update — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1f816845-a1cc-44f5-bd39-e3281e7d9ca9.pdf' },
        { label: 'PCBL Chemical rating rationale (outlook Negative) — CARE, Jul 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202607150740_PCBL_Chemical_Limited.pdf' },
        { label: 'PCBL Integrated Report FY25 — PCBL', url: 'https://api.pcblltd.com/uploads/PCBL_IR_2024_25_C2_C_SGA_Ads_V8_Web_upload_818d096e5a.pdf' },
        { label: 'Kiri Industries Annual Report FY26 (emphasis of matter, related parties, CARO) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f1d08920-ba83-4f11-b62d-fedbbe5d8905.pdf' },
        { label: 'Kiri Industries Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b8ff9fad-d3d0-49d4-a38b-ffb0b4ce7643.pdf' },
        { label: 'Kiri Industries Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=745d2e7f-786a-433c-b33f-a63246dfbefb.pdf' },
        { label: 'Kiri Industries: acquisition of 40% of Makilala Mining — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6dfc5afe-20e0-44a1-90c6-820f860abff4.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
