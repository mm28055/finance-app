import { SectorOverview } from './types';
import { softwareBpmBusinesses } from './software-bpm-businesses';
import { softwareValuationInputs } from './card-data/software';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const BPM_HC = 'US healthcare operations — billing, claims and clinical admin for insurers, hospitals and doctors';
const BPM_GEN = 'Mixed process outsourcing and IT — publishing, finance, collections and call centres';

export const softwareBpm: SectorOverview = {
    sector: 'Software',
    title: 'Software · Process outsourcing and healthcare operations',
    format: 'ranked',
    businesses: softwareBpmBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: softwareValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Sagility': 14,
            'Inventurus Knowledge Solutions': 17,
            'Datamatic Global Ser': 10,
            'Digitide Solutions': null,
        },
    },
    standfirst:
        "The Software sector is too large for one note, so it is split into five groups, each a complete note with its own two tabs. This is the group of four **process outsourcing** firms: companies that take over repetitive office work (billing, claims, collections, call centres, publishing and accounts) and run it from India and other low-cost countries. Two work only for US healthcare: **Sagility** handles claims, enrolment and clinical reviews for health insurers, and **IKS** (listed as Inventurus Knowledge Solutions) runs billing, coding and paperwork for hospitals and doctors. **Datamatics** mixes publishing, finance and document processing with IT projects, and **Digitide**, demerged from Quess Corp in 2025, runs call centres, loan collections and payroll mostly for Indian banks and insurers. This edition was built from the last two earnings calls for each (checked against the official transcripts where the stored copy was machine-made), the FY26 annual reports, the Q1 FY27 presentations, the CARE and ICRA rating reports, and sector work from NASSCOM, ISG, Gartner and Kotak. The headline: US healthcare work is the best profit pool in Indian software, growing 12–15% at 24–35% margins, while India-focused outsourcing is being squeezed by new wage rules and AI. Sagility fits my growth estimate at today's price; IKS is a better business priced for a big acquisition to work. Every chart uses filed results.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated unless noted as standalone.',
            note: "US healthcare work earns the most. IKS earns 32–35% because it is paid a share of the money it collects for hospitals and doctors, not by the hour, so it keeps what automation saves. Sagility earns 22–26% on filed figures and about 24–25% on its own adjusted measure. Datamatics has lifted its margin from 16% to about 20% with a high-margin publishing acquisition. Digitide earns 10–11%, and most of that goes on office rent.",
            values: {
                'Inventurus Knowledge Solutions': [32, 35, 34, 34, 32],
                'Sagility': [22, 25, 26, 24, 22],
                'Datamatic Global Ser': [16, 18, 19, 21, 20],
                'Digitide Solutions': [11, 11, 11, 11, 10],
            },
            cellNotes: {
                'Inventurus Knowledge Solutions': "Q1 FY27 carries about ₹20cr of costs for buying TruBridge; without them the margin was about 35% (company measure). From Q2 the margin will fall to about 26–27% as TruBridge, which earns 22–23%, is added.",
                'Sagility': "Company-adjusted EBITDA margin was 26.3% in Q2 FY27, its highest in six quarters, after 24.0% in Q1 and 24.9% in Q4 FY26. Q1 is seasonally weaker: US insurance enrolment work falls in Q3 and Q4, and wage rises start in April.",
                'Digitide Solutions': "Q1 FY27 includes about ₹10cr of new labour-code and state minimum-wage costs; Q4 FY26 was helped by a ₹9.9cr one-off. About ₹175–180cr a year of office rent is booked below this line as depreciation and interest, leaving only about 3% at the operating-profit-after-depreciation level.",
                'Datamatic Global Ser': "Company figure 19.7% in Q1 FY27, after April wage rises; FY26's 18.7% was its highest in at least five years.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted as standalone.',
            note: "The rupee was about 11% weaker in Q1 FY27 than a year earlier, which lifts the growth of the three exporters. In constant currency Sagility grew about 15% and IKS about 12%, which is still roughly twice the industry. Datamatics grew about 10% and Digitide, which works mostly in India, about 5%, with revenue falling 3% from the previous quarter.",
            values: {
                'Inventurus Knowledge Solutions': [16, 21, 24, 19, 21],
                'Sagility': [26, 25, 36, 29, 28],
                'Datamatic Global Ser': [19, 20, 20, 4, 10],
                'Digitide Solutions': [6, null, 7, 9, 5],
            },
            cellNotes: {
                'Sagility': "Organic growth was 14.9% in constant currency in Q1 FY27 and 11.9% in Q2; the rest is the rupee and acquisitions. Q3 and Q4 include seasonal US Medicare enrolment work, about $50m in FY26.",
                'Inventurus Knowledge Solutions': "Q1 FY27 constant-currency growth was 12%. TruBridge, which closed on 9 July, will roughly double revenue from Q2.",
                'Digitide Solutions': "No comparable figure for Q2 FY26: Digitide was demerged from Quess Corp in 2025 and Screener's FY25 is a 13-month period.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated unless noted as standalone.',
            note: "Outsourcing needs only offices and computers, so the differences here come from acquisitions. IKS earned about 50% before buying AQuity in FY24 and still earns 32%. Sagility's 13% is low because its capital includes about ₹6,039cr of goodwill from its carve-out from Hinduja Global Solutions and later purchases. Digitide has only one clean year.",
            values: {
                'Inventurus Knowledge Solutions': [47, 50, 30, 27, 32],
                'Sagility': [null, 5, 5, 10, 13],
                'Datamatic Global Ser': [22, 24, 21, 15, 20],
                'Digitide Solutions': [null, null, null, null, 10],
            },
            cellNotes: {
                'Sagility': "Goodwill of about ₹6,039cr against equity of about ₹9,660cr (FY26 annual report); the return on the operating business itself is far higher.",
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
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated unless noted as standalone.',
            note: "For outsourcing firms this is mostly the time clients take to pay. All four collect in about two to three months. Sagility's FY22 figure is distorted by its carve-out year. Digitide's has lengthened as clients argue over who pays for new wage rules.",
            values: {
                'Inventurus Knowledge Solutions': [46, 57, 73, 73, 65],
                'Sagility': [366, 92, 91, 83, 93],
                'Datamatic Global Ser': [74, 67, 67, 64, 63],
                'Digitide Solutions': [null, null, null, 62, 78],
            },
            cellNotes: {
                'Sagility': "FY22 was the year of the carve-out from Hinduja Global Solutions and is not comparable. Company figure for Q1 FY27: 80 days of sales outstanding (52 billed, 28 unbilled), down from 87 in Q4.",
                'Digitide Solutions': "Company figure: 82 days of sales outstanding in Q1 FY27, up from 75 in Q4, during repricing talks over the new wage codes.",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated unless noted as standalone.',
            note: "Sagility and Datamatics turn over 80% of operating profit into cash over five years. IKS turns only 56% on Screener's figures, lower in the years it was absorbing AQuity; its own measure for FY26 is higher. Digitide has only one year, at 76%.",
            values: {
                'Inventurus Knowledge Solutions': [78, 73, 40, 41, 62, 56],
                'Sagility': [null, 82, 89, 93, 68, 82],
                'Datamatic Global Ser': [94, 53, 75, 97, 86, 81],
                'Digitide Solutions': [null, null, null, null, 76, 76],
            },
            cellNotes: {
                'Inventurus Knowledge Solutions': "Screener shows FY26 operating cash of ₹674cr; the company reports ₹863cr, which it calls 79% of EBITDA. Q1 FY27 was hit by a one-time payment to a client under a profit-sharing deal.",
                'Sagility': "FY26 fell on higher tax paid, unrealised currency gains and the absence of FY25's tax refunds. Q1 FY27 was about 70% of EBITDA after earnout payments for acquisitions (company figure).",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated unless noted as standalone.',
            note: "IKS and Sagility both turn about 16–17% of revenue into free cash over five years, which is why they could pay down acquisition debt quickly. Datamatics turns about 11%. Digitide turns about 5% because its margin is thin.",
            values: {
                'Inventurus Knowledge Solutions': [29.1, 27.1, 9.7, 10.4, 19.2, 16.5],
                'Sagility': [null, 16.9, 16.6, 19.6, 14.1, 16.6],
                'Datamatic Global Ser': [13.2, 6.2, 10.8, 10.9, 14.3, 11.2],
                'Digitide Solutions': [null, null, null, null, 5.1, 5.1],
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated unless noted as standalone.',
            note: "Below zero means more cash than debt. By March 2026 IKS and Sagility had paid their acquisition debt down to almost nothing, but IKS then borrowed heavily to buy TruBridge in July, taking it to about three times operating profit at closing (not yet shown here). Sagility's remaining debt is owed to its owner and is due to be repaid in FY27. Datamatics holds net cash. Digitide's figure is office leases; it has net cash on its own measure.",
            values: {
                'Inventurus Knowledge Solutions': [-1.0, -1.3, 1.5, 0.7, -0.0],
                'Sagility': [null, 2.2, 2.0, 0.8, 0.1],
                'Datamatic Global Ser': [-2.1, -2.0, -2.7, -1.7, -1.5],
                'Digitide Solutions': [null, null, null, null, 0.8],
            },
            cellNotes: {
                'Inventurus Knowledge Solutions': "FY24 rose after the AQuity purchase. TruBridge (enterprise value up to $565m) closed on 9 July 2026, mostly debt-funded; CARE expects net debt below twice operating profit from FY28.",
                'Digitide Solutions': "Screener's ₹531cr of borrowings are mostly lease liabilities; the company reported net cash of ₹182cr at March 2026.",
                'Datamatic Global Ser': "Net cash and investments of ₹710cr at June 2026 (company), before about ₹200cr paid in July for the last 20% of TNQTech.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated unless noted as standalone.',
            note: "These are people businesses: all four spend 1–4% of revenue on seats, computers and fit-outs for leased offices. The large sums go into acquisitions, which do not show here: TruBridge at IKS, BroadPath and CareSeed at Sagility, TNQTech at Datamatics.",
            values: {
                'Inventurus Knowledge Solutions': [1.4, 0.9, 1.8, 1.6, 1.9, 1.6],
                'Sagility': [null, 3.4, 3.8, 2.2, 2.7, 3.0],
                'Datamatic Global Ser': [2.0, 2.7, 1.0, 2.1, 2.0, 2.0],
                'Digitide Solutions': [null, null, null, null, 3.4, 3.4],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'embed', label: 'Built into client workflows', description: 'How deeply the work is wired into the client’s regulated processes and systems, so switching would be costly and risky.' },
            { key: 'price', label: 'Pricing model', description: 'Whether the company is paid for results (a share of collections, a fixed fee) or by the seat and hour, which AI and wage rules squeeze.' },
            { key: 'spread', label: 'Spread of clients', description: 'How exposed revenue is to a few large clients.' },
            { key: 'cost', label: 'Cost position and margin', description: 'Delivery cost, automation and the margin that results.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what the auditors, rating agencies, owners and disclosures show.' },
        ],
        rows: [
            { company: 'Sagility', trend: 'widening', trendNote: 'Organic growth of about 15% against an industry at 7–8%; top-3 client share down from 68.3% (FY24) to 59.9% (FY26); a first clinical-software acquisition.',
                grades: { embed: { grade: 'A', note: 'Largest clients average 18 years' }, price: { grade: 'C', note: 'No price rises; about 2% deflation a year' }, spread: { grade: 'D', note: 'Top 3 clients 60%, top 10 84%' }, cost: { grade: 'B', note: 'Adjusted margin 24–25%' }, cash: { grade: 'B', note: '82% cash conversion; owner selling down' } } },
            { company: 'Inventurus Knowledge Solutions', trend: 'stable', trendNote: 'Core business still growing 12% in constant currency at 35%, but admits pricing pressure, and TruBridge’s revenue base was cut by $40m within a month of buying it.',
                grades: { embed: { grade: 'A', note: 'Top-5 clients average 7.4 years' }, price: { grade: 'B', note: 'Paid a share of collections' }, spread: { grade: 'C', note: 'Top 10 clients 37%; all US' }, cost: { grade: 'A', note: 'Adjusted margin about 35%' }, cash: { grade: 'B', note: 'Debt-funded TruBridge; 56% cash conversion' } } },
            { company: 'Datamatic Global Ser', trend: 'stable', trendNote: 'Record margins and 10% growth in Q1, but two of three segments shrank in FY26 and clients are moving work to their own captive centres.',
                grades: { embed: { grade: 'B', note: 'Serves 9 of the 10 largest publishers' }, price: { grade: 'C', note: 'AI projects of 3–9 months, not 3–5 years' }, spread: { grade: 'B', note: 'Top 5 clients 30%, rising' }, cost: { grade: 'B', note: 'Margin about 20%, a record' }, cash: { grade: 'A', note: '81% cash conversion; ICRA A+' } } },
            { company: 'Digitide Solutions', trend: 'narrowing', trendNote: 'Margin down from about 15% before the demerger to 9.9%; new bookings fell from ₹620cr to ₹205cr in a quarter; revenue guidance withdrawn.',
                grades: { embed: { grade: 'B', note: 'About 70% of revenue recurring' }, price: { grade: 'D', note: 'Wage-code costs not passed on' }, spread: { grade: 'B', note: 'Top 10 clients 37.4%, rising' }, cost: { grade: 'C', note: 'Rent absorbs most of a 10% margin' }, cash: { grade: 'C', note: 'CEO, growth chief and CFO changed' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Sagility.** **Sagility** runs claims, enrolment, member service and clinical reviews for US health insurers, including seven of the ten largest, from India and the Philippines. It grew about 15% organically in constant currency in FY26 and again in Q1 FY27, roughly twice its industry, and its company-adjusted margin has held at 24–25%. It beat its FY26 guidance, kept its FY27 guidance of low double-digit growth after Q1, and will have repaid its remaining debt, owed to its owner EQT, within FY27. The cautions are real: its top three clients are 60% of revenue, filed profit runs about 20% below the company's adjusted figure because of acquisition accounting, and EQT has sold from 82% to 51% and may sell more. Its margin is holding only because the weak rupee offsets new wage rules worth about 1.2 points a year; its CFO and growth chief left in late 2025, it asked ICRA to withdraw its rating, and ₹92.6cr of new tax demands are not provided for. I expect about 14% a year of earnings growth; the price needs about {need:Sagility|13}%. **Own it, and add on any fall caused by EQT's share sales.** 1 Nov 2026: stays own after the Q2 call. The adjusted margin rose to 26.3% with the full wage hit included, and the FY27 margin guide was raised to 25–26%; organic growth slowed to 11.9% in constant currency, and the company now holds about ₹113cr more cash than debt.",
                "**Follow IKS.** **IKS** (Inventurus Knowledge Solutions) takes over billing, coding, clinical paperwork and prior approvals for about 600 US hospital and doctor groups, and is paid mostly a share of what it collects for them. It is the best business in this group: FY26 profit rose 48% to ₹722cr, the core business earns about 35% and grew 12% in constant currency in Q1 with headcount up only 5%. But in July it closed TruBridge, a rural-hospital software and billing company about as big as itself by revenue, bought mostly with debt, and within a month cut TruBridge's revenue base from $340m to $300m a year. Its goal of at least ₹3,000cr of EBITDA by FY30, nearly three times today's, rests on lifting TruBridge's 22–23% margin into the low 30s. It also admits pricing pressure from AI start-ups, and on filed figures it turned only 56% of operating profit into cash over five years, the lowest in the group. I expect about 17% a year; the price needs about {need:Inventurus Knowledge Solutions|22}%. **Follow it, and buy when TruBridge's margin starts to rise.**",
                "**Follow Datamatics.** **Datamatics** (listed as Datamatic Global Ser) is a family-run mix of publishing services for nine of the ten largest publishers, finance and document processing, IT projects and call centres. Its margin reached a record 18.7% in FY26 and about 20% in Q1, helped by TNQTech, a publishing-technology firm bought in FY25 that earns 24–25%, and it holds about ₹500cr of net cash after paying for the last of TNQ in July. But organic growth is guided at only about 8%, two of its three segments shrank in FY26, AI projects are shorter, and it has twice promised and not given an order-book figure. Its AI story has wobbled too: TruAI had ‘three or four’ customers on the May call and its first on the July call. I expect about 10% a year; the price needs about {need:Datamatic Global Ser|12–13}%. **Follow it for a better price or proof that its AI products earn real revenue.**",
                "**Pass on Digitide.** **Digitide Solutions** was demerged from Quess Corp in 2025 and runs call centres, loan collections with about 15,000 field staff, back offices and payroll, mostly for Indian banks and insurers, plus insurance software. Its margin has slid from about 15% before the demerger to 9.9%, it lost money after tax over the last four quarters, and office rent absorbs most of what is left. Twelve days after promising early-to-mid-teens growth in May, its CEO resigned; in Q1 revenue fell 3% from the previous quarter, new bookings fell from ₹620cr to ₹205cr, and the new CEO withdrew revenue guidance. Its revenue chief resigned in September and its CFO is moving to another role; excluding its listed subsidiary Alldigi the business loses money; and its auditor found edit logs switched off on some accounting software. There is no profit to value, so there is no growth figure to compare. **Pass until the promised margin recovery shows up and the management team settles.**",
                "**Three things to hold onto before reading the rest.** First, **US healthcare work and Indian outsourcing are different businesses**: the first grows 12–15% at 24–35% margins on long contracts; the second grows in single digits at about 10% and is being squeezed by new Indian wage rules. Second, **check whether a profit figure is filed or adjusted**: Sagility's adjusted profit is about 20% above its filed profit, IKS's Q1 margin excludes deal costs, and Digitide's FY26 adjusted profit of ₹70cr was ₹6cr on the filed figure. Third, **AI cuts prices before it cuts costs**: Sagility expects about 2% a year of price deflation from automation, IKS admits pricing pressure, and Digitide expects headcount to keep falling. The companies paid for results rather than by the hour are best placed.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results on Screener. Hover over a starred name for its caveat. Two cautions: revenue growth is in rupees, and the rupee fell about 11% against the dollar over the year, which lifts the three exporters; and Sagility's and IKS's filed margins include acquisition and deal costs that the companies' own adjusted figures leave out.",
                "**About the dashboard's stored data.** Several stored records were wrong and nothing here relies on them. Sagility's stored quarters were the company's adjusted figures (for example Q1 FY27 EBITDA ₹471.6cr and profit ₹269.7cr against filed ₹438cr and ₹217cr). IKS's Q4 FY26 row was all zeros. Digitide's stored ‘order book’ is quarterly bookings, and its stored P/E is meaningless because profit is about nil. Stored Q1 transcripts for IKS, Sagility and Digitide, and both Datamatics transcripts, were machine-generated and garbled names and some numbers; every quote here was checked against the official filing. All numbers are from Screener, the companies' filings and calls (marked as company figures where they differ from filed ones), and the rating reports.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Indian software and services had a slow year, and outsourced office work is where AI bites first.** NASSCOM puts India's technology industry at $315bn of revenue in FY26, up 6.1%, and expects spending growth of only 5–7% in FY27; business process management (BPM, outsourced office work) is $59bn of that. Kotak Institutional Equities estimates that AI productivity will shrink Indian IT services revenue by 3–3.5% a year through FY28. Yet ISG's index shows outsourced-process contract values up 34% in Q2 2026, the one outsourcing segment growing fast, because clients are signing new, re-engineered contracts that mix people and automation. This note covers one of five Software groups; the others are IT services and analytics, engineering R&D, software products and platforms, and messaging, adtech and AI infrastructure. **My view: this group holds both the best and the weakest profit pools in Indian software, and which side a company sits on matters more than anything else.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "US health insurers (payers) and hospital and doctor groups (providers) spend heavily on administration: IKS's management puts US provider admin spend at over $260bn, of which about $35bn is outsourced and growing about 12% a year. **Sagility** works for payers, processing claims, enrolling members and reviewing whether treatments should be paid for; **IKS** works for providers, billing and chasing payment, coding records, writing notes and getting approvals. Outside healthcare, **Datamatics** processes publishing content, invoices and documents for Western companies and runs IT projects, while **Digitide** runs call centres, collections and payroll for Indian banks, insurers and other firms. **Profit sits with those paid for outcomes in regulated, error-sensitive work**: IKS earns about 35% by taking a share of collections, Sagility 24–25%, Datamatics' publishing and finance segment 19% at the segment level, and Digitide's outsourcing segment 13.5% before corporate costs and rent.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**US healthcare is growing steadily; India is not.** Sagility grew about 15% organically against an industry an analyst put at 7–8%, and IKS's core grew 12–13% in constant currency over the last two quarters (13% in Q4, 12% in Q1), its own yardstick for gaining share. The drivers are rising US healthcare costs, staff shortages at hospitals and insurers, and the complexity of billing rules. Datamatics sells to publishers, banks and retailers in the US (54% of revenue) and Europe, where work is shorter and more project-based. Digitide depends on Indian banks and insurers (BFSI, 51% of revenue), which are cutting costs, and on a small but growing US healthcare business of about $25m. **My view: the healthcare pair have demand that outlasts a slow economy; Datamatics and Digitide depend on clients' discretionary budgets.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Wages, the rupee and US health policy set the margins.** India's new labour codes and April 2026 minimum-wage increases raised costs across the group: Sagility estimates a 1.2-point annual hit to its margin from Karnataka and Telangana, and Digitide about ₹10cr a quarter. The rupee, at ₹95.80 to the dollar on 25 September and about 11% weaker in Q1 than a year earlier, has offset those costs for the exporters, but not for Digitide, which bills mostly in rupees. For the healthcare pair, US Medicare and Medicaid rules drive both demand and risk. A proposed US fee of about $100,000 on new H-1B visas and a stalled 25% US tax on outsourcing payments (the HIRE Act) are tail risks. **My view: the rupee is flattering this year's margins; a stronger rupee would expose the wage increases.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Sagility** on keeping its three largest insurer clients (60% of revenue), on absorbing the wage increases without a strong rupee, and on EQT's remaining stake being sold without crushing the price. **IKS** on lifting TruBridge's margin from 22–23% towards the low 30s, on selling its services to TruBridge's roughly 700 rural hospitals, and on cutting its new debt. **Datamatics** on its AI products (TruAI underwriting, KAiBRE code modernisation) becoming real revenue and on a sensible acquisition to reach its ₹3,000cr revenue goal. **Digitide** on passing wage-code costs to clients, dropping low-margin accounts and stabilising its management. **Buy each for its own driver; ‘outsourcing’ describes the method, not the economics.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['US provider billing and clinical admin', 'IKS', '32–35%', '32%', '**56%**', 'Paid a share of collections; headcount grows far slower than revenue; TruBridge will dilute to 26–27% at first'],
                        ['US insurer claims and clinical operations', 'Sagility', '22–26%', '13%', '**82%**', 'Long, regulated contracts; return on capital held down by carve-out goodwill'],
                        ['Publishing, finance and document processing plus IT', 'Datamatics', '16–21%', '20%', '**81%**', 'Publishing unit earns 19% at segment level; IT and call centres 9–12%'],
                        ['Indian call centres, collections and payroll', 'Digitide', '10–11%', '10%', '**76%** (one year)', 'Seat-based pricing; wage rules not passed on; rent absorbs most of the margin'],
                        ['For comparison: other Software groups', 'Sector research', 'Mid-tier IT services 10–20%; engineering 12–20%', '—', '—', 'Healthcare operations are the richest pool in Indian software'],
                    ],
                    note: 'Sagility’s company-adjusted EBITDA margin was 24.0–25.3% over the same period. IKS’s Q1 FY27 figure excludes about ₹20cr of deal costs at 35%. Segment margins for Datamatics and Digitide are the companies’ own.',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['India technology industry revenue', '$315bn in FY26, +6.1%; process outsourcing (BPM) $59bn', '**+5–7% in FY27**', 'NASSCOM, Feb 2026'],
                        ['Outsourced-process contract values', '$2.3bn in Q2 2026, +34%', 'Managed services overall +2.1% in 2026', 'ISG Index, Jul 2026'],
                        ['World IT services spending', '+3.8% in 2025', '**+5.3% in 2026**', 'Gartner, Jul 2026'],
                        ['AI-led price deflation, Indian IT services', '—', '**−3 to −3.5% a year to FY28**', 'Kotak Institutional Equities, Aug 2026'],
                        ['AI-led price deflation, US payer operations', '1–1.5% a year historically', 'About 2% in FY27, ‘gradually inch up’', 'Sagility management, May 2026'],
                        ['US provider admin spend', 'Over $260bn, about +8% a year', 'Outsourced portion about $35bn, about +12% a year', 'IKS management, May 2026'],
                        ['US payer outsourcing industry growth', '7–8% a year', '—', 'Analyst on Sagility’s Q4 call, not disputed'],
                        ['Rupee', '₹95.80 per dollar (25 Sep 2026)', 'Q1 FY27 average about 11% weaker than a year earlier', 'Outlook Business, Sep 2026'],
                    ],
                    note: 'No independent forecaster in the sources read covers US healthcare outsourcing or Indian domestic BPM separately; those rows rest on management and analyst statements and are labelled as such.',
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
                    label: 'Lasting: being wired into regulated work',
                    text: "Health insurers and hospitals do not switch billing or claims vendors lightly: mistakes bring penalties from the US Medicare regulator (CMS) and lost revenue. **Sagility**'s largest client groups have been with it for an average of 18 years, and it serves seven of the ten largest US insurers. **IKS**'s top five clients average 7.4 years and top ten 5.8 years, about 90% of revenue is repeat business, and it recently signed a five-year lock-in ‘at a very healthy price’. **Datamatics**' publishing arm serves nine of the ten largest publishers. **My view: these switching costs are real, but they protect existing work, not its price; Sagility saw a top-five client move work from the US to cheaper offshore centres.**",
                },
                {
                    label: 'Evidence of pricing power: mostly the opposite',
                    text: "Sagility's management put it plainly: ‘There is more pricing pressure than any price increases that we would get.’ **Sagility** expects about 2% of revenue a year to be given back through automation, up from 1–1.5%. **IKS** admits ‘there is always going to be pricing pressure’ with about 30 point-solution vendors, including Abridge, in which it holds a stake, trying to become platforms, and price deflation in easily automated features such as AI note-taking. **Digitide** is negotiating wage-code costs with clients rather than passing them on, and is walking away from ‘margin-dilutive’ accounts. **Datamatics** says AI projects now run three to nine months rather than three to five years. **My view: nobody here raises prices; the defence is to be paid for outcomes, which IKS is.**",
                },
                {
                    label: 'Outcome pricing: why IKS earns more',
                    text: "**IKS** is paid mostly as a percentage of its clients' collections, and runs some risk-sharing deals; one hospital, Palomar Health, produced $3m of such earnings in calendar 2025. That lets it keep the savings from automation: in Q1 revenue grew 12% in constant currency while staff grew 4.8%. It ranks first in AI-driven billing in the Black Book survey and near the top in KLAS's rankings for clinics. **Sagility** and **Digitide** are paid largely per transaction or per person, so productivity gains flow to clients. **My view: this is the single biggest structural difference in the group.**",
                },
                {
                    label: 'Share gains: where the evidence is',
                    text: "**Sagility** is taking share: about 15% organic growth against 7–8% for its industry, revenue from its top five clients up 16.7% in FY26, 109 client groups against 82 at FY26 after the CareSeed purchase, and $35.3m of new annual contract value in Q1. **IKS** grew 12% in constant currency, which management calls the share-gain threshold, and won a larger role at Advocate Health, a top-five US health system. **Datamatics** added five new clients in Q4 but its technology and call-centre segments shrank in FY26. **Digitide**'s bookings fell to ₹205cr in Q1 from more than ₹600cr in each of the two previous quarters. **My view: the healthcare pair are gaining; Digitide is losing ground.**",
                },
                {
                    label: 'Thin: seat-based work in India',
                    text: "**Digitide** is India's largest domestic outsourcer, with about 15,000 collection staff covering 95% of the country's postal codes and about 70% of revenue recurring. But its outsourcing margin fell from 16.3% to 13.5% in one quarter at the segment level, its technology unit earns 8%, and its clients are cost-focused banks and insurers. Scale in Indian call centres has not translated into pricing. **Judge Digitide's business as a scale operation that must cut costs to survive, not as a moat.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "In US healthcare: the large Indian IT firms' process units, US specialists such as R1 RCM and Optum (UnitedHealth's services arm), and Firstsource; none is named on the calls, so this list comes from the business model, not the transcripts. The competitors named on the calls are different: AI point-solution vendors such as Abridge for IKS, and electronic-records vendors such as Epic adding AI of their own. For Datamatics, management says the main competition is ‘internal teams, from GCCs’, its clients' own Indian centres. Within this Software page, the IT services group competes for the technology parts of this work.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In outsourcing the margin depends on how the work is priced, how much is automated, where it is delivered and what wages do. Three patterns show up: margins protected by outcome pricing and regulated work, margins moved by wages, seasons and the rupee, and margins that look better or worse than the business because of acquisition accounting.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: outcome pricing and regulated work',
                    text: "**IKS** lifted its margin from 29% to 34% in two years by moving AQuity's work offshore and adding technology, the playbook it now plans for TruBridge; its core runs at about 35% excluding deal costs. **Sagility**'s company-adjusted margin has held at 24–25% for three years (25.3% in FY26), supported by clinical work that needs trained nurses and doctors. **Datamatics**' publishing and finance segment earns about 19% at the segment level, and TNQTech 24–25%. **My view: IKS's and Sagility's margins are structural; Datamatics' higher margin depends on keeping TNQ's growth going.**",
                },
                {
                    label: 'Moved by wages, seasons and the rupee',
                    text: "**Sagility**'s adjusted margin fell from 24.9% in Q4 to 24.0% in Q1: minimum wage cost 0.4 points, salary rises 0.5 points and the loss of seasonal insurance-enrolment revenue 1 point, offset by more than 1 point from the rupee; the full-quarter wage effect from Q2 will be ‘more than double’. **Datamatics**' margin fell from 21.3% to 19.7% after April wage rises. **Digitide** lost about ₹10cr a quarter to the new wage rules and ₹9.9cr of a Q4 one-off. **IKS** had a ₹23cr net currency gain in Q4 and none in Q1. **My view: without the rupee, every margin in this group would have fallen this year.**",
                },
                {
                    label: 'Not structural: acquisition accounting and one-offs',
                    text: "**Sagility**'s filed profit (₹993cr over the last four quarters) runs about 20% below its adjusted profit (₹1,201cr) because of amortisation of intangibles from the carve-out and acquisitions, earnouts, stock appreciation rights and exceptional items; amortisation continues to FY36. **Datamatics**' FY26 filed profit of ₹195cr carried ₹65cr of exceptional items, including a ₹40.9cr charge because TNQ did better than expected and cost more to buy out; adjusted profit was ₹253cr. **Digitide**'s FY26 profit was ₹6cr filed and ₹70cr adjusted after demerger and labour-code charges. **My view: use the adjusted figures to judge the business, but remember that earnouts and share awards are real costs.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Digitide**'s days of sales outstanding rose from 75 to 82 in Q1 as clients argued over wage-code billing, and Screener's debtor days rose from 62 to 78 in FY26. Its office leases take ₹175–180cr of cash a year, below the EBITDA line, so about 11% EBITDA leaves only about 3% at the operating-profit-after-depreciation level. It still produced ₹157cr of free cash in FY26 (company figure), with operating cash at 77% of EBITDA on its own count (76% of operating profit on Screener's figures).",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Sagility**'s debtor days rose from 83 to 93 in FY26 on Screener, though the company's figure improved to 80 days in Q1 from 87. **Datamatics**' unbilled revenue has risen for three years because of government fare-collection contracts billed in deferred annual instalments; the CFO says it will ‘taper down in the next 1-year’. **IKS** made a one-time payment to a client under a risk-sharing deal in Q1.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Datamatics** turned ₹324cr of operating cash in FY26, about 1.7 times its filed profit, with billed debtor days falling to 60. **Sagility** turned 82% of operating profit into cash over five years, and ₹241.6cr of free cash in Q1 alone after capex. **IKS** cut its debt from ₹563cr to ₹252cr in FY26 on its own count (Screener, netting off cash and investments, shows about ₹13cr of net cash at March) from its own cash flow before borrowing for TruBridge, and its debtor days fell from 73 to 65.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Clients pay monthly in arrears, so outsourcing firms carry about two to three months of revenue as receivables. Acquisitions add earnouts, paid in cash over several years (Sagility's run to FY29), which show up as operating or investing outflows and make single quarters look weak. **Judge each against its own history, and look through earnout quarters.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Sagility', 'Net cash about ₹113cr at September 2026 (company figure), from net debt of ₹196cr at March; remaining promoter loan repaid within FY27; Chirok Health bought for $20m plus up to $12.35m of earnouts', 'Cash ₹967cr; borrowings on Screener ₹1,111cr at March 2026 including leases'],
                        ['Inventurus Knowledge Solutions', 'Net debt ₹265cr at June before TruBridge; about 3x EBITDA at closing; no equity issue beyond staff options; no more large deals planned', 'CARE A+/Stable; net debt below 2x EBITDA expected from FY28'],
                        ['Datamatic Global Ser', 'Net cash ₹710cr at June, before about ₹200cr paid for the last 20% of TNQ in July; ‘in dialogue with some companies’ for acquisitions', 'TNQ acquisition loan ₹150cr; ICRA A+/Stable'],
                        ['Digitide Solutions', 'Margin up 2 points this year; no plans to sell its land; 2–3 small margin-accretive acquisitions; no equity issue decided', 'Net cash ₹182cr at March; Screener borrowings ₹531cr are mostly leases'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Screener counts lease liabilities as debt, so its net-debt figures are higher than the companies’ own.',
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
                    label: 'Growth driver: US healthcare outsourcing',
                    text: "Both healthcare companies are growing roughly twice their markets. **Sagility** guides low double-digit organic growth in constant currency for FY27, with about 7–8 points already secured from existing contracts, and has a pipeline of about $570m of contract value; its seasonal insurance-enrolment work has grown from about $20m to about $50m a year. **IKS** aspires to grow its $388m-a-year core book at 12% or more in constant currency, and is expanding in billing and coding at Advocate Health and a large California system. **My view: 12–15% constant-currency growth is realistic for both for several years; the rupee will not help as much next year.**",
                },
                {
                    label: 'Growth driver: TruBridge and rural hospitals',
                    text: "**IKS**'s True North target is at least ₹3,000cr of EBITDA by FY30, about 30% a year from roughly ₹1,000cr in the twelve months to December 2025, with net debt back to about zero. The plan: take TruBridge's $300m-a-year revenue and about $68m of EBITDA, lift its margin into the low 30s over ‘the next couple of years’, sell IKS's services to TruBridge's roughly 700 rural hospitals, and rebuild its old COBOL records software over 18–24 months. **My view: the target is plausible but aggressive; I build in about two-thirds of it.**",
                },
                {
                    label: 'Growth driver: AI products and platforms',
                    text: "**IKS** is launching AI tools for note-taking (Scribble), patient access (MyCare Hub) and explainable AI (ARAI), and plans its own small language models trained on TruBridge's patient data. **Datamatics** says about 60% of FY27 deals won so far are ‘AI-led or largely AI-driven’, with products such as TruAI for insurance underwriting (first customer SBI Life) and KAiBRE for rewriting old code, and spends ₹40–50cr a year on AI development. **Digitide** reports about ₹15cr of AI-led new revenue in Q1 and an AI pipeline of ₹100–150cr. **My view: AI products help these firms defend their work more than they add new revenue so far.**",
                },
                {
                    label: 'Growth driver: acquisitions',
                    text: "**Sagility** closed CareSeed in June, a quality-reporting platform for 30 smaller insurers with $5.1m of revenue at a 31.4% margin, and is working on a second clinical deal. **Datamatics** set a new goal of about ₹3,000cr of revenue within about three years from about ₹2,000cr, which needs about 15% a year and so needs acquisitions. **Digitide** wants two or three small deals in healthcare billing, platform-based outsourcing and Western markets. **My view: Sagility's and Datamatics' deals have been small and well priced; the risk is IKS's single very large one.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Sagility** beat its FY26 guidance (23.6% constant-currency growth against 22.5% guided, margin 25.3%), then grew 14.9% organically in Q1 against low double-digit guidance and kept its 24–25% margin guide despite the wage shock. **Datamatics** grew 9.9% in Q1 against about 8% guided, with the margin in line at 19.7%. **IKS** delivered every numerical Q4 promise: deal costs of about ₹20cr as flagged, a 22.4% tax rate against about 22%, and TruBridge's roughly $68m of EBITDA confirmed.",
                },
                {
                    label: 'Cautious',
                    text: "**Sagility** raised its FY27 adjusted margin guide from 24–25% to 25–26% in the Q2 call (22 October 2026), helped by efficiency, a better mix of locations and the rupee; it expects this year's seasonal enrolment revenue to be about 1 point of revenue lower than last year's 6%, and keeps its low double-digit growth guide. **Datamatics** now expects margin to rise about half a point, the low end of the 0.5–1 point it gave in May. **IKS** declined to forecast TruBridge's growth for two to three quarters and does not guide on staff share-award costs.",
                },
                {
                    label: 'Missed',
                    text: "**Digitide** promised early-to-mid-teens FY27 growth, a 1-point margin gain by the year's end and at least one acquisition in May; in Q1 revenue fell 3.1% from the previous quarter, the margin fell to 9.9%, bookings fell to ₹205cr, revenue guidance was withdrawn in favour of ‘profitability growth’, and its $1bn FY31 revenue goal became a ‘North Star’. **Datamatics** promised an order-book figure ‘for the next call’ and did not give one.",
                },
                {
                    label: 'Mixed',
                    text: "**IKS** cut TruBridge's revenue base from $340m to $300m a year a month after closing: $2–3m a quarter from stricter revenue recognition, about $8m from exiting two loss-making services and $2–3m from planned discounts; but the EBITDA it bought and the True North target were kept. **Digitide**'s CFO's target of a 2-point margin gain this year is bigger than May's 1 point but from a lower base, and was not explained. **Datamatics** said on the Q4 call that TruAI had ‘three or four’ customers; on the Q1 call the CEO said it had its first.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect IKS to grow earnings at about 17% a year, Sagility at about 14% and Datamatics at about 10%; I make no estimate for Digitide, which has almost no profit to grow from.** IKS's figure assumes TruBridge's margin rises into the high 20s rather than the low 30s, and interest and amortisation on the new debt absorb part of the EBITDA growth. Sagility's assumes low double-digit revenue growth, a steady margin, falling interest to zero and slowly shrinking amortisation, less about 2% a year of price deflation. Datamatics' follows revenue growth of about 8% with a small margin gain and interest income on its cash.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Sagility', 'Low double-digit growth; debt gone; amortisation falling; wage and AI drag', '9% / **14%** / 18%'],
                        ['Inventurus Knowledge Solutions', 'Core at 12% constant currency; TruBridge margin; new debt', '10% / **17%** / 24%'],
                        ['Datamatic Global Ser', 'About 8% organic growth; small margin gain; acquisitions on top', '6% / **10%** / 14%'],
                        ['Digitide Solutions', 'Margin recovery from near-zero profit; no estimate', '— / **—** / —'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Sagility', 'Low double-digit organic constant-currency growth; adjusted margin 25–26% (raised from 24–25% in the Q2 call); debt repaid in FY27; tax 24–25%', 'Seats and new sites (₹117cr in H1); earnouts to FY29', '**On track**: FY26 beat; H1 organic growth about 13% in constant currency; Q2 margin 26.3%, guide raised'],
                        ['Inventurus Knowledge Solutions', 'No formal guidance; core 12%+ in constant currency; at least ₹3,000cr EBITDA by FY30', 'Light; TruBridge (up to $565m enterprise value) the big spend', '**Mixed**: every numerical Q4 promise met; TruBridge revenue base cut by $40m'],
                        ['Datamatic Global Ser', 'About 8% organic growth; margin up about 0.5 points to near 20%; ₹3,000cr revenue in about three years with acquisitions', 'Light; office upgrades', '**Mixed**: growth ahead of guide; margin guide at the low end; order book still not disclosed'],
                        ['Digitide Solutions', 'No revenue guidance; margin up 2 points in FY27; $1bn by FY31 now a ‘North Star’', '₹70–80cr a year plus ₹15–20cr for two new campuses', '**Walked back**: revenue, bookings and margin all fell; growth guidance withdrawn'],
                    ],
                    note: 'IKS gives aspirations rather than guidance. Digitide’s Q4 promises were made by a CEO who resigned twelve days later.',
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
                    label: 'A few large clients',
                    text: "**Sagility**'s top three clients were 59.9% of FY26 revenue and its top ten 83.9%; a merger among US insurers or a decision to consolidate vendors could remove a large slice at once, and its annual report lists this as a key risk. **IKS**'s top ten clients were 37% of FY26 revenue but 43–53% in some quarters, and all of its revenue comes from US healthcare. **Datamatics**' top five rose from 26% to 30% in one quarter, and **Digitide**'s top ten from 35.4% to 37.4%.",
                },
                {
                    label: 'AI and price deflation',
                    text: "Automation takes routine work first, and this group does routine work. **Sagility** expects price give-backs to ‘gradually inch up’ from about 2% a year. **IKS** faces about 30 AI start-ups and records vendors such as Epic building their own tools, and admits pricing pressure in features such as AI note-taking. **Datamatics** sees clients automating in-house or moving work to their own captive centres, which already hurt its call-centre segment in FY26. **Digitide** expects its headcount to keep falling. Kotak's estimate of 3–3.5% a year of AI-led deflation for Indian IT services is a fair guide for the seat-based parts of this group.",
                },
                {
                    label: 'Wages and the rupee',
                    text: "The new labour codes and April 2026 minimum-wage increases in Karnataka and Telangana, where about 65–70% of Sagility's staff work, cost it about 1.2 points of margin a year, absorbed so far only because the rupee weakened; its hedges were taken at lower rates. **Digitide**, which bills mostly in rupees, has no such offset. Sagility is moving new seats to Tamil Nadu and Indore, but says that will take 12–18 months. A strong rupee recovery would expose the wage increases across the group.",
                },
                {
                    label: 'Debt, goodwill and a large acquisition',
                    text: "**IKS** has taken on debt of about three times EBITDA to buy a company as large as itself, whose revenue base it cut by 12% within a month; its existing term loan is secured on all the shares of its US subsidiary, and its auditor, Price Waterhouse, made the goodwill test on AQuity a key audit matter. **Sagility** carries about ₹6,039cr of goodwill against about ₹9,660cr of equity. **Datamatics** carries ₹611cr of goodwill, a key audit matter, and one subsidiary with negative net worth of about ₹26cr, according to an analyst on the Q4 call. All four audit opinions were clean.",
                },
                {
                    label: 'Owners, management and structure',
                    text: "EQT, **Sagility**'s owner, cut its stake from 82.39% to 50.95% in FY26, and further sales are likely; Sagility's group CFO and chief growth officer both resigned in late 2025, and ICRA's rating was withdrawn at the company's request in January 2026. **Digitide**'s CEO resigned twelve days after the Q4 call, its chief revenue officer resigned on 21 September and its CFO moves to a strategy role from 1 October; much of its profitable international business sits in its 73%-owned listed subsidiary Alldigi Tech, and investors on both calls noted that Digitide excluding Alldigi loses money. Its auditor found edit logs not enabled on some payroll, procurement and accounting software for part of FY26. **Datamatics** is controlled 66.33% by the Kanodia family, which runs both the parent and its publishing subsidiaries, and institutions own less than 1%.",
                },
                {
                    label: 'Legal, tax and US health policy',
                    text: "**Sagility** faces a vendor's claim of $115.9m (₹1,094cr) over commissions from before its carve-out; the sellers, Hinduja Global Solutions and affiliates, kept that liability and indemnify Sagility. It also received new tax demands of ₹92.6cr for FY22–FY23, not provided for. **IKS** has provident-fund demands at AQuity India, with ₹12.6cr provided, and about ₹41.7cr of contingent acquisition payments still due. Changes to US Medicare and Medicaid payment rules could alter both the volume and the value of the work for the healthcare pair.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Here the two disagree for particular reasons: Sagility's profit is cut by acquisition amortisation that EBITDA ignores, IKS's debt is about to jump after the balance-sheet date, and Digitide's EBITDA is largely consumed by rent.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **{need:Sagility|13}% for Sagility at {pe:Sagility|18.8}x, {need:Datamatic Global Ser|12–13}% for Datamatics at {pe:Datamatic Global Ser|20.4}x and {need:Inventurus Knowledge Solutions|22}% for IKS at {pe:Inventurus Knowledge Solutions|40.8}x.** Digitide has no meaningful P/E because its profit is about nil. The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Against my estimates, Sagility is {label:Sagility|fits}, Datamatics {label:Datamatic Global Ser|full} and IKS {label:Inventurus Knowledge Solutions|full} at today's prices.**",
            ],
            points: [
                {
                    label: 'Fits: Sagility',
                    text: "**Sagility** needs about {need:Sagility|13}% a year against my ~14%. On its own adjusted profit, about 20% higher than filed, it needs less, and EV/EBITDA looks much cheaper than P/E for the same reason. EQT's continuing sales are an overhang that can create better entry prices. **Own it; add when EQT sells.**",
                },
                {
                    label: 'Full: the best business, priced for its biggest bet',
                    text: "**IKS** needs about {need:Inventurus Knowledge Solutions|22}% a year against my ~17%. The price assumes much of the True North path, about 30% a year of EBITDA growth to FY30, which rests on TruBridge. EV/EBITDA uses Screener's net cash of about ₹13cr from before the deal; after the debt-funded TruBridge purchase in July, the enterprise value is materially higher than the table shows, though so is EBITDA. **Buy when TruBridge's margin shows it can rise, or on a weak quarter.**",
                },
                {
                    label: 'Full: steady, but growth is modest',
                    text: "**Datamatics** needs about {need:Datamatic Global Ser|12–13}% a year against my ~10%. About ₹500cr of net cash after the TNQ payment, against a market value of {mcap:Datamatic Global Ser|₹4,855cr}, is credited by EV/EBITDA. The shortfall is growth: about 8% organic growth cannot close the gap without an acquisition or a visible AI product business. **Follow it for a price that needs only high-single-digit growth.**",
                },
                {
                    label: 'No price to judge: Digitide',
                    text: "**Digitide** lost about ₹1cr after tax over the last four quarters on Screener, so the P/E shown in the live table is not meaningful. EV/EBITDA makes it look very cheap, but Screener's net debt includes leases while EBITDA is struck before rent is paid, and about ₹175–180cr a year of rent leaves little behind. **Cheap on EBITDA is not cheap when the rent comes out of it.**",
                },
                {
                    label: 'A check against the rest of Software',
                    text: "The healthcare pair earn margins of 24–35%, the highest profit pool in Indian software according to the sector research, and the market prices IKS accordingly. Sagility is priced lower than IKS mainly because of its filed-versus-adjusted gap, its client concentration and EQT's overhang, not because its business is growing more slowly. The best entry points in this group have come when an owner was selling or a quarter disappointed.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Sagility', rank: 1, stance: 'COMPOUNDER', segment: BPM_HC,
            what: "A US-healthcare-only outsourcer, carved out of Hinduja Global Solutions in 2021 and owned 50.95% by EQT, running claims, enrolment, member service and clinical reviews for insurers (about 90% of revenue); FY26 revenue $814m (₹7,193cr).",
            view: "**Taking share at a fair price.** It grew about 15% organically in constant currency in FY26 and Q1 FY27 and 11.9% in Q2, still ahead of its industry. In Q2 its adjusted margin reached 26.3% with the full wage hit included, the FY27 margin guide was raised to 25–26%, and it moved to about ₹113cr of net cash. Its top three clients are 60% of revenue, filed profit is about 20% below adjusted (adjusted profit rose only 8% in Q2), and part of the margin gain is the rupee. The price needs about {need:Sagility|13}% a year against my ~14%.",
            watch: 'The adjusted margin holding at 25–26% if the rupee strengthens; organic growth staying in low double digits through the enrolment season; any change at a top-three client; EQT’s next share sale.',
        },
        {
            company: 'Inventurus Knowledge Solutions', rank: 2, stance: 'PRICED', segment: BPM_HC,
            what: "IKS Health: billing, coding, clinical documentation and prior approvals for about 600 US hospital and doctor groups, paid mostly a share of collections; bought TruBridge, a rural-hospital records and billing company of similar size, in July 2026.",
            view: "**The best business here, priced for its biggest bet.** FY26 profit rose 48% to ₹722cr, and the core grows 12% in constant currency at about 35% with staff growing less than half as fast (4.8%). But TruBridge was bought mostly with debt, its revenue base was cut from $340m to $300m within a month, and the combined margin drops to 26–27% before any recovery. The price needs about {need:Inventurus Knowledge Solutions|22}% a year against my ~17%.",
            watch: 'TruBridge’s margin rising from 22–23%; core constant-currency growth staying at 12% or more; net debt falling towards 2x EBITDA by FY28.',
        },
        {
            company: 'Datamatic Global Ser', rank: 3, stance: 'SCALEUP', segment: BPM_GEN,
            what: "Datamatics Global Services: a Kanodia-family-run mix of publishing services (9 of the 10 largest publishers), finance and document processing, IT projects, call centres and AI products; 54% of revenue from the US.",
            view: "**A steadier, richer business that grows slowly.** The margin reached a record 18.7% in FY26 and about 20% in Q1, cash conversion is strong and net cash is about ₹500cr after the TNQ payout. But organic growth is guided at about 8%, two of three segments shrank in FY26, the order book is still undisclosed, and the ₹3,000cr revenue goal needs acquisitions. The price needs about {need:Datamatic Global Ser|12–13}% a year against my ~10%. **28 Oct 2026:** the price now fits, but growth is still about 8% organic and the order book undisclosed; it appointed Rajesh Gharpure, ex-Persistent, as COO on 15 October. It stays follow.",
            watch: 'A disclosed order book; call-centre revenue growing again; TruAI and KAiBRE producing named revenue.',
        },
        {
            company: 'Digitide Solutions', rank: 4, stance: 'TURNAROUND', segment: BPM_GEN,
            what: "India's largest domestic outsourcer (call centres, collections, back office, payroll) plus insurance software, demerged from Quess Corp in 2025; owns 73.39% of the listed Alldigi Tech.",
            view: "**Shrinking margins and a new team.** The margin slid from about 15% before the demerger to 9.9%, profit after tax is about nil, Q1 revenue fell 3% on the previous quarter and bookings fell from ₹620cr to ₹205cr. The CEO who set the FY27 plan resigned twelve days later, and the growth chief and CFO have since moved. There is no profit to value, so there is no growth figure to compare.",
            watch: 'The promised 2-point margin gain in Q2–Q3; quarterly bookings back above ₹500cr; wage-code costs passed through to clients.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**US healthcare operations.** **Sagility: own**, the growth fits the price and the business is taking share; add when EQT sells. **IKS (Inventurus Knowledge Solutions): follow**, the best business in the group, and buy when TruBridge's margin starts to rise or a quarter disappoints.",
            "**Mixed process outsourcing and IT.** **Datamatics (Datamatic Global Ser): follow** for a lower price or proof that its AI products earn real revenue. **Digitide: pass** until the margin recovery shows up and the management team settles.",
            "**What would change my view.** For the better: Sagility holding a 24% margin through the full wage increase; TruBridge's margin rising faster than planned; Datamatics disclosing an order book with AI deals in it; Digitide passing wage costs through. For the worse: loss of a top-three client at Sagility; another reset at TruBridge; a strong rupee exposing the wage increases; more senior exits at Digitide.",
            "**What to watch next quarter.** Sagility's Q2 margin and EQT's holding; IKS's first quarter with TruBridge and its net debt; Datamatics' growth and order book; Digitide's margin and bookings under its new team.",
        ],
        bottomLine:
            "Own Sagility, a share-gainer priced for the growth it is delivering; follow IKS, the best business here, until its large acquisition proves itself; follow Datamatics for a better price; and pass on Digitide until its margins stop falling.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/SAGILITY/consolidated/' },
        { label: 'Indian tech industry revenue FY26 (NASSCOM Strategic Review 2026) — Kotak Neo, Feb 2026', url: 'https://www.kotakneo.com/news/market-news/indian-tech-industry-revenue-fy26-nasscom-forecast/' },
        { label: 'ISG Index Q2 2026: global tech services market — StockTitan, Jul 2026', url: 'https://www.stocktitan.net/news/III/global-tech-services-market-grows-at-fastest-pace-ever-in-q2-wrh1eeo2ke6q.html' },
        { label: 'Gartner forecasts worldwide IT spending to grow 14.2% in 2026 — TelecomTV, Jul 2026', url: 'https://www.telecomtv.com/content/digital-platforms-services/gartner-forecasts-worldwide-it-spending-to-grow-14-2-in-2026-totalling-6-37tn-55964/' },
        { label: 'AI could drive 3–3.5% annual revenue deflation in Indian IT services (Kotak) — ANI, Aug 2026', url: 'https://www.aninews.in/news/business/ai-could-drive-3-35-annual-revenue-deflation-in-indian-it-services-through-fy28-kotak20260825140021/' },
        { label: 'IT stocks after US court strikes down the $100,000 H-1B fee — Investing.com, 2026', url: 'https://in.investing.com/news/stock-market-news/it-stocks-in-focus-after-us-court-strikes-down-trumps-100000-h1b-visa-fee-5445867' },
        { label: 'Sagility Q1 FY27 earnings call transcript — NSE', url: 'https://nsearchives.nseindia.com/corporate/SAGILITY_28072026104630_IntimationEarningscalltranscriptQ1FY27signed.pdf' },
        { label: 'Sagility Q1 FY27 investor presentation', url: 'https://sagility.com/wp-content/uploads/2026/07/sagility-q1-2027-investor-presentation-2026-21-07.pdf' },
        { label: 'Sagility Annual Report FY26 (concentration, contingent liabilities, goodwill)', url: 'https://sagility.com/wp-content/uploads/2026/07/sagility-annual-report-fy2025-26-final.pdf' },
        { label: 'IKS Health Q1 FY27 earnings call transcript', url: 'https://ikshealth.com/ir/2027/q1/transcript-q1.pdf' },
        { label: 'IKS Health Annual Report FY26', url: 'https://ikshealth.com/ir/2026/annual-report-fy-2026.pdf' },
        { label: 'IKS Health completes acquisition of TruBridge — press release, Jul 2026', url: 'https://ikshealth.com/insights/press-releases/iks-health-completes-acquisition-of-trubridge/' },
        { label: 'IKS Health rating (CARE A+/Stable) — InvestyWise summary, Jun 2026', url: 'https://www.investywise.com/iks-health-care-ratings-assigns-care-a-stable-issuer-rating' },
        { label: 'Datamatics Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e8843b76-81ec-4934-bac2-c4f9efbec4b3.pdf' },
        { label: 'Datamatics Q4 FY26 earnings call transcript', url: 'https://www.datamatics.com/hubfs/Investors/Announcements/Transcript-Q4FY26-EarningsCall-22May2026.pdf' },
        { label: 'Datamatics Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/66d0d0ad-7ac4-42d5-95ff-89232c09b352.pdf' },
        { label: 'Datamatics rating rationale (A+/Stable) — ICRA, Mar 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdf/141398' },
        { label: 'Digitide Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ad441a4a-61a2-40b9-b702-e17e66315341.pdf' },
        { label: 'Digitide Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e8a9d7ae-c4a8-40ec-b943-16ec7144adb6.pdf' },
        { label: 'Digitide Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d3817594-6ced-4064-afc5-64f8b6f407ae.pdf' },
        { label: 'Digitide: resignation of Chief Revenue & Growth Officer — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b972d4a9-3759-4db2-ad82-a1c38c422712.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
