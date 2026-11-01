import { SectorOverview } from './types';
import { softwarePlatformsBusinesses } from './software-platforms-businesses';
import { softwareValuationInputs } from './card-data/software';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const MSG = 'Business messaging — SMS, WhatsApp and RCS for banks and apps';
const ADS = 'Mobile advertising paid per result';
const AI = 'AI computers, GPU cloud and data-centre build-out';

export const softwarePlatforms: SectorOverview = {
    sector: 'Software',
    title: 'Software · Messaging, adtech and AI infrastructure',
    format: 'ranked',
    businesses: softwarePlatformsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: softwareValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Tanla Platforms': 11,
            'Affle 3i': 18,
            'Route Mobile': 5,
            'Black Box': 20,
            'Netweb Technologies': 25,
            'Mobavenue Ai Tech': 25,
            'E2E Networks': 40,
        },
    },
    standfirst:
        "Seven companies that do not sell programmers' hours. They sell volume and capacity instead: messages sent, advertising results delivered, computers shipped and GPU hours rented. This is one of five groups on the Software page; the others cover IT services and data analytics, engineering services, business-process and healthcare operations, and software products. Two here are **business-messaging** companies, which send the bank OTPs, alerts and marketing messages that Indians receive by SMS and WhatsApp: **Tanla** (India's largest by its own estimate, serving 8 of the top 10 banks) and **Route Mobile** (75% owned by Belgium's Proximus). Two are **mobile-advertising platforms** paid only when an ad produces a result such as an install or a purchase: **Affle** and the much smaller **Mobavenue**. Three ride the **AI and data-centre build-out**: **Netweb** makes GPU servers and supercomputers in Faridabad, **E2E Networks** rents GPU capacity by the hour, and **Black Box** cables and fits out data centres, mostly in the US. This edition was built from the last two earnings calls for every company (Black Box held a Capital Markets Day in place of a Q4 call, and Tanla's Q1 transcript was not published, so its Q1 investor update stands in), the Q1 FY27 presentations, the FY26 annual reports, rating reports from CRISIL and CARE, and sector work from NASSCOM, Gartner and ISG. The headline: the AI names grew fastest (Netweb +172% and E2E +336% in Q1 on filed figures), but their prices ask for years of that; the messaging companies are cheap, cash-rich and slow, because telecom companies and Meta set their input prices. The annual reports turned up an unimpaired ₹136cr stake in an insolvent company at Affle, receivables sold to banks and a foreign-exchange-law lapse at Black Box, ₹136cr of prepayment write-offs at Route Mobile, and a listed company paying its own promoters ₹60cr for their business at Mobavenue.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated unless noted as standalone; Netweb files standalone only.',
            note: 'Three margin levels, set by who owns the input. The messaging companies keep 9–17% because telecom companies and Meta set the price of each message and about four-fifths of revenue is paid straight out to them. Black Box and Netweb pass hardware and labour through and keep 8–15%. The adtech platforms keep 20–23% after paying about 60% of revenue for ad space and data. E2E is the outlier at 75%, because it rents out GPUs it owns while they are scarce; depreciation, which sits below this line, takes about half of that.',
            values: {
                'Netweb Technologies': [15, 15, 12, 13, 15],
                'Affle 3i': [23, 23, 23, 22, 22],
                'Black Box': [8, 9, 9, 10, 9],
                'E2E Networks': [31, null, null, 60, 75],
                'Tanla Platforms': [16, 16, 17, 16, 16],
                'Route Mobile': [9, 12, 13, 12, 9],
                'Mobavenue Ai Tech': [20, 20, 22, 21, 21],
            },
            cellNotes: {
                'Netweb Technologies': 'Standalone. Margin dips to 12% in quarters dominated by one very large GPU order (Q3–Q4 FY26); management guides 13–14%.',
                'E2E Networks': 'Gaps in the filed series. Screener’s standalone page, which is almost the whole company, shows 41% in Q2 FY26 and 57% in Q3 FY26. Q1 FY27 depreciation was ₹61cr against ₹118cr of operating profit.',
                'Route Mobile': 'Q1 FY27 fell to 9% as gross margin slipped from 23.3% to 20.9% (company figures) when one Indian bank’s traffic was disrupted; management guides about 12% for FY27.',
                'Affle 3i': 'Flattered by capitalising product-development cost: about ₹165cr of intangible assets were capitalised in FY26 instead of being expensed.',
                'Mobavenue Ai Tech': 'Includes ₹11cr of salaries, including directors’ pay, capitalised as software in FY26 (auditor’s key audit matter).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted as standalone.',
            note: 'The AI names grew fastest in Q1 FY27: Netweb +172% as one very large GPU order billed, E2E +336% as new Nvidia B200 GPUs went live. Affle has grown about 20% every quarter; Tanla has accelerated for five quarters to 18%; Route Mobile returned to growth only in Q1 after four weak quarters. Mobavenue’s earlier figures are distorted by a part-year base; its own growth rates were 41.9% in Q4 FY26 and 56.9% in Q1 FY27.',
            values: {
                'Netweb Technologies': [102, 21, 141, 87, 172],
                'Affle 3i': [19, 19, 19, 20, 20],
                'Black Box': [-3, 6, 11, 9, 24],
                'E2E Networks': [null, null, null, null, 336],
                'Tanla Platforms': [4, 8, 12, 15, 18],
                'Route Mobile': [-5, 1, -7, -4, 10],
                'Mobavenue Ai Tech': [null, 440, 67, 1160, 59],
            },
            cellNotes: {
                'Mobavenue Ai Tech': 'The operating business was bought from the promoters and its FY25 figures run only from September 2024, so FY26 growth rates against a part-year are meaningless. Company figures: Q4 FY26 +41.9%, Q1 FY27 +56.9%.',
                'Black Box': 'Q1 FY27 includes about ₹60cr from 2S, a Brazilian company bought in May; the company puts organic growth at about 19%.',
                'E2E Networks': 'Earlier quarters are gaps in the filed series. The company reported Q1 FY27 revenue of ₹156.8cr, up 334%, and its monthly revenue run-rate nearly doubled from ₹37.4cr in March to ₹71.8cr in June.',
                'Netweb Technologies': 'Standalone. About ₹430cr of a ₹1,600cr order for one strategic AI customer was delivered in Q1; revenue has run at ₹775–820cr a quarter for three quarters.',
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
            note: 'Netweb earns 32–64% because it needs almost no plant; its capital is stock and customer credit. Tanla has fallen from 59% to 26% as margins shrank and cash piled up. Affle sits at 16–17% because its capital base carries goodwill from acquisitions and a large cash pile. Mobavenue’s 72% is earned on a small equity base of about ₹91cr.',
            values: {
                'Netweb Technologies': [52, 64, 38, 32, 37],
                'Affle 3i': [28, 20, 16, 17, 17],
                'Black Box': [26, 20, 31, 30, 22],
                'E2E Networks': [null, null, null, null, null],
                'Tanla Platforms': [59, 38, 38, 29, 26],
                'Route Mobile': [17, 22, 21, 18, 17],
                'Mobavenue Ai Tech': [null, null, null, null, 72],
            },
            cellNotes: {
                'E2E Networks': 'Not in the filed series. FY26 ended in a ₹16cr loss because depreciation jumped from ₹60cr to ₹169cr as new GPUs arrived; the business turned profitable only in Q4 FY26.',
                'Black Box': 'Return is high for an integrator because equity was small after years of losses; it rose to ₹1,287cr after a ₹386cr share-warrant issue to the promoter and investors.',
                'Mobavenue Ai Tech': 'First full year of the operating business; a small capital base makes the return look very high.',
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
            note: 'The messaging and adtech companies wait 50–100 days for customers to pay but hold no stock. Netweb’s cycle jumped to 121 days in FY26 because it bought memory chips and GPUs ahead of shortages. Black Box looks best, but only because it pays suppliers slowly and sells some of its receivables to banks.',
            values: {
                'Netweb Technologies': [86, 69, 85, 83, 121],
                'Affle 3i': [79, 62, 63, 48, 52],
                'Black Box': [-137, -118, -74, -34, -10],
                'E2E Networks': [null, null, null, null, null],
                'Tanla Platforms': [64, 62, 78, 76, 82],
                'Route Mobile': [94, 72, 97, 74, 75],
                'Mobavenue Ai Tech': [null, null, null, 193, 99],
            },
            cellNotes: {
                'Netweb Technologies': 'Standalone; FY26 inventory 170 days. On the company’s own quarterly definition the cycle was 96 days in June 2026, up from 84 in March; management guides 90–110 days.',
                'Black Box': 'Negative because payables exceed debtors, but debtor days rose from 22 to 67 over FY24–FY26 and ₹354cr of receivables had been sold to banks at March 2026, so true credit to customers is longer.',
                'E2E Networks': 'Not in the filed series. Screener’s standalone page shows debtor days of 10, 22 and 25 for FY24–FY26; there is no stock.',
                'Mobavenue Ai Tech': 'FY25 is a part-year. Receivables plus unbilled revenue were about 146 days of FY26 revenue; the auditor made their recovery a key audit matter.',
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
            note: 'Affle (85% over five years) and Tanla (74%) turn most of their profit into cash, which is what a healthy asset-light business should do. Black Box converts only 11%, because growth and the US billing cycle keep absorbing working capital. Netweb’s FY26 figure is an outlier that the company’s own account does not support.',
            values: {
                'Netweb Technologies': [14, 39, 17, -8, 277, 127],
                'Affle 3i': [97, 90, 73, 88, 82, 85],
                'Black Box': [37, 5, 30, -16, 15, 11],
                'E2E Networks': [null, null, null, null, null, null],
                'Tanla Platforms': [69, 42, 80, 93, 79, 74],
                'Route Mobile': [61, 16, -19, 114, 107, 57],
                'Mobavenue Ai Tech': [null, null, null, -29, 76, 52],
            },
            cellNotes: {
                'Netweb Technologies': 'Standalone. Screener shows FY26 operating cash of ₹790cr; management gave ₹171.5cr on its Q4 call. The gap is not explained, so treat FY26, and the five-year figure, as unclear.',
                'E2E Networks': 'Not in the filed series. Screener’s standalone page shows operating cash of ₹43cr, ₹88cr and ₹122cr in FY24–FY26, far below what it spent on GPUs.',
                'Route Mobile': 'FY24 was negative as vendor prepayments rose; ₹136cr of such prepayments were written off in FY26.',
                'Affle 3i': 'Q1 FY27 cash fell to about 41% of profit (an analyst’s figure); management blames collections pulled into March and promises 80–85% by Q3.',
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
            note: 'Four of the seven produce free cash every year: Affle, Tanla and Route Mobile about 6–11% of revenue over five years, and Mobavenue in FY26. Black Box has produced none over five years. E2E, the one heavy spender, is not in this series; it spent ₹983cr on GPUs in FY25 and ₹429cr in FY26 against revenue of ₹164cr and ₹246cr.',
            values: {
                'Netweb Technologies': [0.0, 3.1, -0.1, -3.1, 35.7, 15.9],
                'Affle 3i': [12.3, 11.7, 7.9, 11.7, 10.7, 10.8],
                'Black Box': [0.8, -1.4, 1.2, -2.2, 0.2, -0.3],
                'E2E Networks': [null, null, null, null, null, null],
                'Tanla Platforms': [13.2, 2.7, 11.0, 12.8, 10.8, 10.2],
                'Route Mobile': [5.9, 1.0, -3.3, 12.7, 12.6, 6.2],
                'Mobavenue Ai Tech': [null, null, null, -4.8, 10.3, 6.0],
            },
            cellNotes: {
                'Netweb Technologies': 'FY26 rests on the disputed ₹790cr operating-cash figure; by the company’s account free cash was far smaller, and it moved from net cash to about ₹200cr of net debt in Q1 FY27.',
                'E2E Networks': 'Not in the filed series. Free cash is deeply negative: investing outflows were ₹983cr (FY25) and ₹429cr (FY26), and Q1 FY27 borrowing rose to about ₹450cr.',
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
            note: 'Five of the seven held net cash at March 2026, and at the messaging companies the cash is large: about ₹1,036cr at Tanla and ₹1,364cr at Route Mobile. The two that borrow are Black Box, to fund working capital and acquisitions, and E2E, which is buying GPUs with debt. Netweb moved into net debt after March.',
            values: {
                'Netweb Technologies': [0.7, 0.3, -2.1, -1.1, -1.1],
                'Affle 3i': [-2.8, -1.9, -3.0, -2.8, -2.3],
                'Black Box': [0.7, 1.4, 1.1, 1.3, 1.1],
                'E2E Networks': [null, null, null, null, null],
                'Tanla Platforms': [-1.2, -1.1, -0.8, -1.4, -1.4],
                'Route Mobile': [-4.7, -1.7, -0.8, -1.7, -2.5],
                'Mobavenue Ai Tech': [null, null, null, -0.6, -1.4],
            },
            cellNotes: {
                'Netweb Technologies': 'Standalone, at March. The company reported net debt of about ₹200cr in June 2026 as stock rose, and its board has approved raising up to ₹1,200cr, mainly for working capital.',
                'Black Box': 'Includes about ₹326cr of lease liabilities; excluding leases, net debt was about ₹287cr at March 2026. Management says debt could rise to equal equity to fund acquisitions.',
                'E2E Networks': 'Not in the filed series. Borrowings were about ₹103cr at March 2026 and about ₹450cr by the Q1 call, with more to come; management would not give a peak figure.',
                'Mobavenue Ai Tech': 'Before about ₹45.7cr still owed to the promoters for the business they sold to the company.',
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
            note: 'Most of this group owns little: Netweb, Black Box and Route Mobile spend 1–3% of revenue. Affle’s 6–8% and Tanla’s 2–5% are mostly their own programmers’ time, capitalised as software rather than counted as a cost. E2E is the exception, spending several times its revenue on GPUs.',
            values: {
                'Netweb Technologies': [2.0, 2.9, 2.6, 2.0, 0.5, 1.5],
                'Affle 3i': [6.7, 6.4, 6.3, 7.1, 7.8, 7.0],
                'Black Box': [0.9, 1.6, 0.8, 0.7, 1.1, 1.0],
                'E2E Networks': [null, null, null, null, null, null],
                'Tanla Platforms': [1.9, 4.6, 4.0, 3.2, 2.2, 3.2],
                'Route Mobile': [0.9, 1.1, 0.9, 0.5, 0.6, 0.7],
                'Mobavenue Ai Tech': [null, null, null, 0.2, 5.7, 4.2],
            },
            cellNotes: {
                'E2E Networks': 'Not in the filed series. Investing outflows were ₹983cr in FY25 and ₹429cr in FY26; fixed assets rose from ₹389cr to ₹1,036cr in FY26, with ₹533cr more under construction.',
                'Affle 3i': 'Mostly capitalised product development; the auditor made it a key audit matter.',
                'Mobavenue Ai Tech': 'FY26 includes ₹11cr of capitalised salaries, including directors’ pay.',
            },
        },
    ],


    moat: {
        sources: [
            { key: 'scale', label: 'Scale and access', description: 'Share, direct telecom links, installed base or GPUs that a rival cannot match quickly.' },
            { key: 'pricing', label: 'Pricing power', description: 'Setting its own price, rather than taking whatever telecom companies, Meta, Google or Nvidia charge.' },
            { key: 'sticky', label: 'Sticky customers', description: 'Customers who stay for years and would find it costly to switch; a book not tied to a few buyers.' },
            { key: 'delivery', label: 'Delivery record', description: 'Doing what was promised on the calls, on time.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and a clean record with auditors, related parties and shareholders.' },
        ],
        rows: [
            { company: 'Tanla Platforms', trend: 'stable', trendNote: 'Revenue +17.8% in Q1 and gross margin up to 26.6% (company), but the high-margin platforms were flat on the quarter and Meta is moving WhatsApp traffic to cheaper messages.',
                grades: { scale: { grade: 'A', note: '30–35% share (own estimate); 8 of top 10 banks' }, pricing: { grade: 'C', note: 'Telecoms and Meta set input prices' }, sticky: { grade: 'B', note: '353 clients above ₹1cr a year' }, delivery: { grade: 'D', note: '₹800cr EBITDA aim → ₹724cr; deal late' }, cash: { grade: 'B', note: 'Cash 74% of profit; insider-trading lapses' } } },
            { company: 'Affle 3i', trend: 'stable', trendNote: 'Fourteen straight quarters of sequential growth at about 20% a year, but gross margin is down from about 39% to 36.8% and the promised acquisition slipped to early 2027.',
                grades: { scale: { grade: 'B', note: '4bn+ devices reached (company claim)' }, pricing: { grade: 'B', note: 'Paid per result; spread narrowing' }, sticky: { grade: 'B', note: 'About 75–79% from advertisers direct' }, delivery: { grade: 'A', note: 'About 20% growth, quarter after quarter' }, cash: { grade: 'C', note: 'Bobble ₹136cr unimpaired; costs capitalised' } } },
            { company: 'Route Mobile', trend: 'narrowing', trendNote: 'Gross margin fell back from 23.3% to 20.9% in one quarter (company); the Claro firewall deal described as live in May was delayed by July.',
                grades: { scale: { grade: 'B', note: '280+ direct telecom connections' }, pricing: { grade: 'D', note: 'Price per message ~29p → ~25p' }, sticky: { grade: 'C', note: 'Retention 98%; top 10 = 43%' }, delivery: { grade: 'C', note: 'Margin 9.5% against ~12% guide' }, cash: { grade: 'C', note: 'Net cash ₹1,345cr; ₹136cr write-offs' } } },
            { company: 'Black Box', trend: 'widening', trendNote: 'Backlog up from $504m to $949m in 15 months and a fourth big US cloud company won; company EBITDA margin up from 4.3% in FY23 to 9.0% in FY26.',
                grades: { scale: { grade: 'B', note: '‘Close to a gigawatt’ of data centres' }, pricing: { grade: 'C', note: 'Gross margin ~30%; cost-plus deals' }, sticky: { grade: 'A', note: 'Top-10 clients stay 20+ years' }, delivery: { grade: 'B', note: 'Record quarter; 10% margin goal softened' }, cash: { grade: 'D', note: 'Cash 11% of profit; receivables sold' } } },
            { company: 'Netweb Technologies', trend: 'widening', trendNote: 'AI systems rose to 62% of Q1 revenue (+484%) and the order book plus lowest-bidder positions of ₹3,355cr now exceeds FY26 revenue.',
                grades: { scale: { grade: 'B', note: 'Designs and makes servers in India' }, pricing: { grade: 'C', note: '13–15% margin on bought-in GPUs' }, sticky: { grade: 'C', note: 'Top-5 customers = 65–70% of revenue' }, delivery: { grade: 'A', note: 'Q1 +172%; margin 14.7%' }, cash: { grade: 'C', note: 'Stock 110 days; net debt; promoter sale' } } },
            { company: 'Mobavenue Ai Tech', trend: 'widening', trendNote: 'Results delivered up 57% and price per result up 11% in Q1 (company), with the margin steady at 21%; but more of the business now comes through one reseller.',
                grades: { scale: { grade: 'D', note: '155+ brands; rivals far larger' }, pricing: { grade: 'B', note: 'Price per result ₹45 → ₹50' }, sticky: { grade: 'C', note: 'About 80% from returning clients' }, delivery: { grade: 'B', note: 'Growth target met; direct share fell' }, cash: { grade: 'D', note: 'Bought promoters’ firm; loans to linked firms' } } },
            { company: 'E2E Networks', trend: 'stable', trendNote: 'Run-rate ₹75.1cr in September and Q2 profit ₹73cr; the B200 cluster is now on a ₹1,000cr contract to 2029, but the edge is early access to scarce GPUs, which fades as supply grows.',
                grades: { scale: { grade: 'C', note: 'About 5,100 GPUs; clouds run far more' }, pricing: { grade: 'B', note: 'Raised GPU and CPU prices in July' }, sticky: { grade: 'C', note: 'Some prepaid 6–24-month contracts' }, delivery: { grade: 'A', note: 'B200s live on time; margin 75%' }, cash: { grade: 'D', note: 'Debt ~₹103cr → ~₹450cr; little disclosure' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own E2E Networks, in small size (below). Follow Tanla and Affle; wait on Route Mobile, Black Box and Netweb; pass on Mobavenue.** Of the follows, **Tanla** is the one I would buy first. It is India's largest business-messaging company by its own estimate (30–35% of the market), filed revenue rose 18% in Q1, the fifth straight quarter of growth, and its ₹1,197cr of cash and liquid investments in June sits against a market value of {mcap:Tanla Platforms|₹6,507cr}. The price needs only about {need:Tanla Platforms|8}% a year of earnings growth against my ~11%. What holds me back: its filed operating margin has fallen from 22% in FY22 to 16% because telecom companies and Meta set the price of each message; its high-margin software platforms are only 8.4% of revenue and flat on the quarter; and management over-promises (it aimed for ₹800cr of FY26 EBITDA, cut that to ‘minimum ₹750cr’ and delivered ₹724cr, company figure; the ValueFirst deal it ‘committed’ to close last quarter is still not done). Its secretarial auditor also recorded insider-trading breaches by staff. **I would buy Tanla on a Q2 that shows the ValueFirst Middle East purchase completed, platform revenue growing again and the margin holding at 16%.**",
                "**Affle** is the best business here. Paid only when an ad produces an install or a purchase, it has grown about 20% a year for 14 straight quarters at a 22–23% filed margin, turned 85% of operating profit into cash over five years and holds ₹1,393cr of net cash. But the price needs about {need:Affle 3i|23}% a year against my ~18%, and the reported profit is softer than it looks. It capitalised about ₹165cr of development cost in FY26, carries a ₹135.8cr stake in Bobble AI without writing it down (Bobble was put into insolvency, but the Supreme Court stayed that on 16 October 2026 pending appeal), and Q1 cash was about 41% of profit (an analyst's figure management did not dispute). Gross margin has slipped about two points to 36.8%, its promised acquisition has slipped to ‘early 2027’, and about ₹1,100cr of warrants to the promoter will dilute other shareholders, with management declining to say how the promoter is paying. **Follow Affle; buy on a lower price, or when cash is back at 80–85% of profit by Q3 as promised.**",
                "**Wait on Route Mobile, Black Box and Netweb.** **Route Mobile** is the cheapest company here: its price needs only about {need:Route Mobile|4}% a year against my ~5%, and its ₹1,345cr of net cash in June sits against a market value of {mcap:Route Mobile|₹2,818cr}. But revenue fell 3.7% in FY26, gross margin slipped back to 20.9% in Q1, it wrote off ₹135.9cr of advance payments to suppliers in FY26, its Q1 margin of 9.5% missed the ~12% guide, the Claro firewall deal slipped, a subsidiary suffered a cyber incident, and its 75% owner, Proximus, decides what happens to the cash. **Black Box** has nearly doubled its backlog in 15 months to $949m and guides FY27 profit after tax of ₹300–325cr (company), up 38–50%. But it has turned only 11% of operating profit into cash over five years, has sold ₹354cr of receivables to banks and books ‘exceptional’ charges every year. Its auditor flagged missed foreign-exchange-law deadlines, the 10% margin goal was cut to 9.3–9.4%, the second half needs roughly 30–40% growth, and it says debt could rise to equal its equity to buy companies. Its price needs about {need:Black Box|24}% a year against my ~20%. **Netweb** grew 172% in Q1 and has ₹3,355cr of orders and lowest-bidder positions against FY26 revenue of ₹2,184cr. But it is a 13–15% margin hardware maker whose five largest customers give 65–70% of revenue, it moved into about ₹200cr of net debt in June as stock rose to 110 days, its board has approved raising up to ₹1,200cr, promoters sold about 4% in February, and its FY26 operating cash is unclear (₹790cr on Screener, ₹171.5cr by management). Its price needs about {need:Netweb Technologies|33}% a year against my ~25%.",
                "**Own E2E, in small size; pass on Mobavenue.** **Mobavenue**'s numbers are strong: revenue up 57% in Q1 at a 21% margin, and the price paid per result up 11%. But the listed company bought its operating business from its own three promoters for ₹59.68cr and still owed them ₹45.7cr in March, and it lends to promoter-linked firms that are also its customers and suppliers. Its auditor also flagged ₹11cr of capitalised salaries including directors' pay, slow-to-collect receivables and money to a Russian subsidiary still ‘in process’ after two years. The price needs about {need:Mobavenue Ai Tech|28}% a year against my ~25%. **E2E** had the best quarter in the group in Q1: its monthly revenue run-rate nearly doubled to ₹71.8cr, its new Nvidia B200 chips were fully used from launch and its operating margin reached 75%. Q2 FY27 (call of 21 October) showed it repeats: revenue rose 43% on the quarter to ₹224cr, profit to ₹73cr (from ₹44cr) at a 77% operating margin, borrowing held at about ₹450cr, the run-rate reached ₹75.1cr, and the B200 cluster moved onto the ₹1,000cr contract to June 2029. The price needs about {need:E2E Networks|40}% a year against my ~40%. The risks are real: it rents out a commodity whose price falls when supply catches up, and its borrowing rose from about ₹103cr to about ₹450cr in one quarter. Management gives no guidance on revenue, capex or peak debt, the run-rate grew only 5% in Q2 because new GPUs did not arrive until the second B200 lot (due in Q3, not yet contracted), IndiaAI customers have shrunk to 13–15% of revenue, and it has issued new shares three times since 2024 and holds approval to raise up to ₹1,500cr more. **23 Oct 2026: moved from follow to own.** Q2 met both conditions I set (the Q1 profit repeated and debt stopped outrunning revenue) and the price now fits; operating cash has exceeded profit in each of the last five years, so the negative free cash is GPU buying, not a profit that fails to arrive. **Own in small size; the 77% margin depends on GPU rents that will fall when supply catches up.**",
                "**Three things to hold onto before reading the rest.** First, **none of these companies sets the price of what it buys**: telecom companies and Meta price each message, Google, Apple and publishers the ad space, Nvidia and the memory makers the chips. Second, **the AI build-out is real, but the prices already assume it lasts**: Netweb and E2E grew fastest and are the two whose prices ask for far more than I expect. Third, **cash is the dividing line**: Affle, Tanla and Route Mobile turn profit into cash and hold plenty of it; Black Box, Netweb and E2E are consuming cash to grow.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results, consolidated where the company files them. Netweb files standalone only. E2E's filed series has gaps: the company is almost entirely one entity, and Screener's standalone page fills some of them, which the hover notes give. Mobavenue's growth rates before Q1 FY27 compare against a part-year, because the operating business joined the listed company only in September 2024. Hover over a starred name for its caveat.",
                "**Where the numbers disagree.** Netweb's FY26 operating cash is ₹790cr on Screener but ₹171.5cr in management's own account; neither side has explained the gap, so its cash charts should be read with care. Route Mobile's Q1 EBITDA margin is 9.5% on the company's adjusted basis and 9% filed; Tanla's FY26 EBITDA is ₹724cr on the company's figures and ₹726cr on Screener. Black Box books ‘exceptional’ charges every year, which Screener nets into other income, so its filed other income is negative while the company says it was positive. The charts use Screener's filed figures throughout.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "NASSCOM puts India's technology industry at $315bn of revenue in FY26, up 6.1%, and expects spending growth of 5–7% in FY27. Most of that is people-based services, growing slowly as AI does more of the routine work. This group sits on the fast side of the market. Gartner expects world IT spending to rise 14.2% to $6.37 trillion in 2026, but almost all the acceleration is AI hardware: data-centre systems up 62.5% to $822bn and rented cloud computing up 29.3%, against 5.3% for IT services. **My view: the AI and data-centre build-out is the strongest demand anywhere on the Software page, but in all three businesses the supplier upstream (telecom companies, Meta, Google, Nvidia) takes most of the value; the question for each company is how much it keeps.**",
            ],
            points: [
                {
                    label: 'Business messaging: volume up, price per message down',
                    text: "Business messaging, or CPaaS (communications platform as a service), is the plumbing that sends bank OTPs, delivery alerts and marketing messages for companies. SMS still made about 60% of Tanla's revenue in the nine months to December 2025, down from 68% in FY25; WhatsApp and Google's RCS messaging made about 31–32%, a run-rate near ₹1,000cr. The problem is price. Meta is moving business WhatsApp traffic from promotional messages to ‘utility’ messages that cost about a tenth as much, and Route Mobile's revenue per billable message fell from about 29 paise to about 25 paise in FY26 as higher-priced international traffic was replaced by cheaper domestic traffic. CARE says Tanla's margins are ‘constrained due to high dependence on telecom operators and OTT vendors’. Tanla's management puts industry growth at 8–10% a year. **My view: messaging volumes grow with India's digital payments and shopping, but each message earns less every year; this is a toll road whose tolls are set by someone else.**",
                },
                {
                    label: 'Mobile advertising paid per result',
                    text: "**Affle** and **Mobavenue** sell advertising in apps and on connected TVs, but charge only when a user does something: Affle's 120.3m ‘converted users’ in Q4 FY26 paid an average of ₹60 each, and Mobavenue's 14.16m ‘verified outcomes’ in Q1 FY27 paid ₹49.94 each. Both buy the ad space and user data from publishers, phone makers and ad exchanges and keep the spread: about 63% of Affle's revenue and about 60% of Mobavenue's goes on inventory and data. Apple and Google privacy rules decide how well users can be targeted. **My view: paying only for results makes this the last advertising budget a brand cuts, but the walled gardens of Google and Meta, and much bigger global rivals, cap how much of the spread these two can keep.**",
                },
                {
                    label: 'IndiaAI and the GPU build-out',
                    text: "The government's IndiaAI Mission has an outlay of ₹10,372cr and, according to press reports, has empanelled more than 38,000 GPUs (the chips that train and run AI models) from private operators including Yotta, E2E, Jio, Tata, CtrlS and NxtGen, renting them to start-ups and researchers at subsidised rates of roughly ₹65–150 per GPU-hour; the reports differ on the rate. The target is 100,000 GPUs by December 2026. **Netweb** makes the servers: about half its business is government, research and public-sector, and its FY26 revenue from AI systems grew about 460%. **E2E** rents GPUs out: IndiaAI business was ‘about 20%, 21%’ of its revenue in Q1, against a ceiling of 35–40% for government work given at Q4, because allottees did not scale up as hoped. **My view: government money started this build-out and private AI companies are now taking it further; the risk is that GPU supply catches up with demand and rental prices fall.**",
                },
                {
                    label: 'Data centres abroad, the rupee and chip prices',
                    text: "**Black Box** earns 69% of its revenue in North America, where the big cloud companies are building data centres at record pace; data-centre work was about 17% of its FY26 revenue and should be about 30% in FY27. The rupee helps every exporter here: it averaged ₹94.71 to the dollar in Q1 FY27 against ₹85.57 a year earlier, about 11% weaker, and was ₹95.80 on 25 September, so rupee revenue at Black Box, Affle and Route Mobile is lifted without any extra work. Chip costs cut the other way: **Netweb** stocked up on memory ahead of shortages, and **E2E** raised its prices in July, citing memory-driven hardware inflation as well as demand. **My view: the currency gain is a one-off that reverses if the rupee recovers; the chip-price rise helps the renters for now and squeezes the builders until they reprice.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Business messaging', 'Tanla, Route Mobile', '9–17%', '17–26%', '**57–74%**', 'Telecom companies and Meta take about four-fifths of each rupee; scale and direct connections keep the rest steady, and little capital is needed'],
                        ['Adtech paid per result', 'Affle, Mobavenue', '20–23%', '17–72%', '**52–85%**', 'Keep the spread between what advertisers pay per result and what ad space and data cost; Affle’s return is diluted by goodwill and cash, Mobavenue’s is on a small base'],
                        ['AI hardware and data-centre fit-out', 'Netweb, Black Box', '8–15%', '22–37%', '**11% (Black Box); Netweb unclear**', 'Hardware and labour pass through; returns are high only because little plant is needed, but growth eats working capital'],
                        ['GPU cloud rental', 'E2E Networks', '31–75%', 'Not filed (FY26 loss)', '**Not filed**', 'Owns scarce GPUs and rents them by the hour; the margin is before depreciation, which takes about half of it'],
                    ],
                    note: 'Filed figures from Screener; Netweb is standalone. Mobavenue’s cash figure covers only two years. Company EBITDA figures are adjusted and differ slightly.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['India technology industry revenue', '$315bn in FY26, +6.1% (hardware $21bn)', '**Spending growth of 5–7% in FY27**', 'NASSCOM, Feb 2026'],
                        ['World IT spending', '$6.37 trillion in 2026, +14.2%', '**Data-centre systems +62.5% ($822bn); rented cloud +29.3%; IT services +5.3%**', 'Gartner, Jul 2026'],
                        ['Cloud and infrastructure contracts signed', '$25.8bn in Q2 2026, +78%', 'Managed services only +2.1% in 2026', 'ISG Index, Jul 2026'],
                        ['IndiaAI Mission', '₹10,372cr outlay; 38,000+ GPUs empanelled', '**Target 100,000 GPUs by Dec 2026**', 'Press reports on IndiaAI'],
                        ['Subsidised GPU rent under IndiaAI', 'About ₹65–150 per GPU-hour (reports differ)', 'Set by government tender', 'Press reports on IndiaAI'],
                        ['India AI-systems market', '₹323bn in FY26', '**₹1,143bn by FY30 (37% a year)**', 'Industry report cited in Netweb’s Q1 FY27 presentation'],
                        ['India private cloud and HPC markets', 'Private cloud ₹457bn; HPC ₹71bn (FY26)', 'Private cloud ₹919bn (19% a year); HPC ₹112bn (12% a year) by FY30', 'Same report'],
                        ['Business-messaging industry growth', '8–10% a year', 'Tanla expects to grow ‘definitely more than 10%’', 'Tanla management, Q4 FY26 call'],
                        ['Tanla share of Indian messaging', 'About 30–35%', 'Company estimate', 'Tanla Q1 FY27 investor update'],
                        ['WhatsApp business pricing', 'Utility messages cost about a tenth of promotional ones', '**Meta shifting traffic to utility; lower price per message**', 'Tanla Q4 call; CARE, Apr 2026'],
                        ['Price per message', 'Route Mobile about 29 paise → about 25 paise in FY26', 'International traffic replaced by cheaper domestic', 'Route Mobile, Q4 FY26 call'],
                        ['GPU rental prices', 'Up 25–30% in April 2026', 'E2E raised CPU and GPU prices in July', 'Analyst on E2E Q4 call; E2E Q1 call'],
                        ['Rupee', '₹95.80/$ on 25 Sep 2026; Q1 FY27 average ₹94.71 against ₹85.57', 'Lifts exporters’ rupee revenue while it lasts', 'Press, Sep 2026; company calls'],
                    ],
                    note: 'IndiaAI figures come from press reports; the reports disagree on the subsidised rate. Market sizes quoted in company presentations are not official data. No independent forecast of the Indian adtech market was found.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits in this group. The grid grades each company on each one; how each business works is explained in Tab 2. The short version: scale and sticky customers are real here, but pricing power is rare, because every company buys its main input from a far larger supplier.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Real, but it buys volume, not price: scale in messaging',
                    text: "**Tanla** says it holds 30–35% of Indian business messaging, has more than 3,200 customers, and counts 353 that pay it more than ₹1cr a year, up from 326; 13 of last year's top 20 customers are still in the top 20 and the rest are in the top 30. CARE cites ‘stable operations with high customer retention’. **Route Mobile** has more than 280 direct connections to mobile operators (450 with its sister company BICS), 3,100 clients and net revenue retention of 98%, which means existing clients spend almost as much as a year ago. But the enterprise business at both earns only about 20% gross margin, because the telecom companies and Meta set the price of each message. **My view: scale wins the bank and e-commerce contracts and makes delivery reliable; it does not let either company raise prices.**",
                },
                {
                    label: 'Paid per result: a better model, a narrowing spread',
                    text: "**Affle** earns about 99% of its revenue on a cost-per-converted-user basis and integrates with the advertiser's own customer data, which it argues is harder to copy than selling ads by the thousand views. But its gross margin has fallen from about 39% to about 36.8% over seven or eight quarters as it spends on premium users, connected TV and developed markets, and its operating margin has stayed at 22–23% rather than rising to the promised 23–25%. **Mobavenue** raised its price per result from ₹44.99 to ₹49.94 in a year while delivering 57% more results, which suggests its models find more valuable users; its management says outcome-based spend ‘is usually the last thing that the brand cuts’. Neither owns the ad space it sells. **My view: the model is sound, but both are middlemen between Google-sized suppliers and advertisers, and Affle's shrinking spread shows it.**",
                },
                {
                    label: 'Switching costs: Black Box',
                    text: "**Black Box**'s top 10 clients have stayed for more than 20 years on average; its largest bank client has spent more than $1bn with it over 27 years and about $100m a year now. Four of the top six US cloud companies are clients, and 10–15% of finished projects turn into recurring maintenance contracts. But the moat is people and relationships, not technology: gross margin is about 30%, operating margin has never passed 9.7% in a quarter, and large data-centre jobs are priced at cost plus an agreed margin, which limits losses but also caps profit. **My view: customers stay, and the win rate on big deals has more than doubled, but this is a 9–10% margin business by design.**",
                },
                {
                    label: 'A policy moat: made-in-India computers at Netweb',
                    text: "**Netweb** is one of the few Indian-origin makers that designs its own motherboards, chassis and firmware; it built the PARAM and Kabru supercomputers and more than 300 high-performance systems, which qualifies it for ‘design and make in India’ rules in the National Supercomputing Mission and sovereign-AI tenders. It held its margin at 13–15% while memory prices rose by passing the cost into new bids. But its three largest suppliers provide 65–70% of what it buys, mostly from Taiwan, and against Dell, HPE and Supermicro its switching costs are low. **My view: the edge is real where government rules favour local makers; in private-sector AI orders it is a price-taker on both sides.**",
                },
                {
                    label: 'Scarcity, not a moat: E2E',
                    text: "**E2E** runs about 5,100 GPUs and got India's early supply of Nvidia's B200 chips, which ran at ‘quite a maximal utilization’ from launch in May. Tarun Dua, who runs it, says ‘we are the haves in terms of having access to speculative GPU capacity’, and customers are prepaying 6–24-month contracts to lock in prices. But Dua also concedes it is ‘practically… almost first come first served today’, and the large clouds run hundreds of thousands of GPUs. **My view: the 75% margin is a scarcity rent. It lasts while GPUs are short and falls when newer chips and bigger rivals arrive, which in this industry happens every 12–18 months.**",
                },
                {
                    label: 'High-margin platforms that have not yet scaled',
                    text: "Both messaging companies are trying to add software that keeps most of what it earns. **Tanla**'s Digital Platforms (anti-spam for telecom companies, anti-phishing for banks, the regulator's blockchain registry) earned ₹103cr in Q1 at about 98.5% gross margin and made about 31% of its gross profit on 8.4% of revenue; But platform revenue grew only in single digits in FY26 and was flat on the quarter, and CARE's upgrade trigger is platforms above 25% of revenue. **Route Mobile**'s non-SMS products are about 8% of revenue against 30–35% at peers, and its firewall deals, which earn 30–70% margins by blocking grey-route traffic for operators, are not disclosed separately. **My view: this is the one route to better margins in messaging, and neither company has yet shown it can scale.**",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Three patterns: messaging margins that are thin by design, adtech margins that are steady but slowly giving back gross margin, and AI margins that swing with chip prices and order size. A part of reported profit also comes from costs moved onto the balance sheet rather than from the business.",
                "Whether profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: messaging keeps about a fifth of each rupee',
                    text: "**Tanla**'s enterprise messaging earns about 20% gross margin; with platforms included, group gross margin was 26.6% in Q1 against 25.0% a year earlier, and EBITDA 16.4% (company figures). **Route Mobile**'s gross margin rose from 19.3% to 23.3% during FY26 as low-margin international traffic left, then fell back to 20.9% in Q1 when one Indian bank's traffic was disrupted; its adjusted EBITDA margin was 9.5% against guidance of about 12%. Hitting 12% for the year needs about 12.8% from here. **My view: price these as 10–16% businesses; margins rise only if the software platforms grow much faster than messaging.**",
                },
                {
                    label: 'Structural: adtech keeps 37–40% gross',
                    text: "**Affle** spent 63.2% of Q1 revenue on ad space and data, the same as Q4, leaving a gross margin of about 36.8%; management calls the two-point fall over two years a deliberate investment and expects a recovery after about a year. Its filed operating margin has held at 22–23%. **Mobavenue** spent 60.4% of Q1 revenue on supply and data, against 62.5% a year earlier, and its filed operating margin has held at 20–22% for five quarters, in line with its ‘Rule of 50’ (growth above 30% plus a margin above 20%). **My view: both margins are steady, but both are flattered by costs capitalised onto the balance sheet (see below); the true margin is a few points lower.**",
                },
                {
                    label: 'Cyclical: chips and GPU rents',
                    text: "**Netweb**'s filed margin runs at 12–15%: it dips to 12% in quarters dominated by one huge GPU order and recovers to 15% when the mix is broader, and management guides 13–14%. **E2E**'s filed operating margin rose from 60% in Q4 to 75% in Q1 as the new B200s ran nearly full; management calls it ‘quite sustainable over the medium term’. But depreciation of ₹61cr took about half of Q1's ₹118cr operating profit, the GPUs are written off over six years while newer chips arrive every 12–18 months, and Dua himself expects ‘phases where there is shortage of demand’. **My view: E2E's margin is at a cyclical peak; model it lower, not higher, as supply catches up.**",
                },
                {
                    label: 'Not structural: capitalised costs and recurring ‘one-offs’',
                    text: "**Affle** capitalised about ₹165cr of development cost in FY26 and added ₹174cr to intangibles under development; its auditor made this a key audit matter. **Mobavenue** capitalised ₹11cr of ‘salary cost, director remuneration, etc.’, about a quarter of FY26 EBITDA. **Tanla** capitalises platform development too, with ₹175cr of internally developed platforms on its books. **Black Box** has booked ‘exceptional’ charges every year: ₹32cr (FY21), ₹22cr, ₹52cr, ₹40cr, ₹66cr, ₹63cr (FY26) and ₹19cr in Q1 FY27, mostly severance and legal settlements. **My view: compare these companies on filed operating margin and cash, and treat Black Box's exceptional charges as a normal cost of doing business.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Netweb**'s stock rose from 53 days in March 2025 to 86 in March 2026 and 110 in June (company figures), and its cash cycle from 73 to 96 days; on Screener's year-end basis FY26 stock was 170 days, and CRISIL puts gross current assets at 268 days. **Black Box**'s trade receivables doubled from ₹567cr to ₹1,153cr in FY26 because 62% of Q4 revenue was billed in March, and ₹354cr more had been sold to banks, so reported debtor days understate the credit it gives; working capital absorbed ₹551cr in FY25 and ₹342cr in FY26. **Mobavenue**'s receivables plus unbilled revenue were about 146 days of FY26 revenue.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Netweb** swung from ₹124cr of net cash in March to about ₹200cr of net debt in June, and has approved raising up to ₹1,200cr, ‘largely for working capital’. **E2E**'s borrowing rose from about ₹103cr to about ₹450cr in one quarter to buy GPUs. **Affle**'s Q1 operating cash was about 41% of profit, which management blamed on collections pulled into March. **Route Mobile**'s Q1 collections were late.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Route Mobile** generated ₹581cr of operating cash in FY26, more than its operating profit, and about ₹555cr of free cash. **Tanla** produced ₹156cr of operating cash and ₹126cr of free cash in Q1, 89% of its profit. **Affle**'s FY26 operating cash of ₹502cr was 110% of profit after tax. **Judge each against its own model: the messaging and adtech companies should convert 75–100% of operating profit into cash; the hardware and data-centre builders will absorb cash while they grow, and the question is how much.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Tanla Platforms', 'Capex ₹100–150cr a year (Q1 net ₹30cr); ValueFirst Middle East for ₹148.5cr including ₹136.5cr of its liabilities, now due by Q2; ₹80cr dividend paid', 'Cash and liquid investments ₹1,197cr (June); debt-free apart from about ₹50cr of leases; ₹1,340cr returned to shareholders over eight years'],
                        ['Affle 3i', 'Promoter warrants worth about ₹1,100cr, ₹275.1cr received; acquisition ‘by early 2027’; cash back to 80–85% of profit by Q3', 'Borrowings ₹15cr (March); Screener net cash ₹1,393cr; no rating (debt-free)'],
                        ['Route Mobile', 'Cash 75–100% of EBITDA for the year; dividend ₹16.5 a share (₹4 paid in Q1); Heltar bought from internal cash, price not disclosed; treasury review promised', 'Net cash ₹1,345cr (June); borrowings ₹42cr; no rating found'],
                        ['Black Box', 'Operating cash to EBITDA to ‘improve meaningfully’; buy about $200–250m of revenue a year; debt could rise to equal equity', 'Borrowings ₹827cr plus leases ₹326cr; cash ₹540cr (March); ₹354cr of receivables sold; CRISIL BBB+, outlook Positive (Jun 2026)'],
                        ['Netweb Technologies', 'Up to ₹1,200cr may be raised, ‘largely for working capital, no M&A’; routine capex ₹20–25cr; nothing raised yet', 'Net debt about ₹200cr (June) from ₹124cr net cash (March); bank lines ₹2,420cr, 24% used on average; CRISIL A+/Stable'],
                        ['Mobavenue Ai Tech', '₹50cr raised in February still unspent, mainly for acquisitions; no cash-flow figure given on either call', 'Cash ₹39.9cr plus investments ₹30.8cr, borrowings ₹8.5cr (March); ₹45.7cr still owed to promoters; no rating'],
                        ['E2E Networks', 'No upper limit on debt ‘as long as we have the ability to repay’; more with the next GPU lot; ₹1,500cr enabling resolution to raise money; new SovCloud subsidiary for ‘funding arrangement[s]’', 'Borrowings about ₹103cr (March) → ₹450cr (September); equity about ₹1,804cr; ICRA A-/Stable on ₹1,000cr of bank lines'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Tanla’s row uses its Q1 investor update because no Q1 call transcript was published.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth could come from, how each company did against what it promised on its Q4 FY26 call (the Capital Markets Day for Black Box), and my own estimate of earnings growth. In this group the fastest revenue growth comes with the most cash consumed, and the slowest with the most cash returned.",
            ],
            points: [
                {
                    label: 'Growth driver: AI orders and GPU capacity',
                    text: "**Netweb** had a firm order book of ₹2,507cr plus ₹848cr where it is the lowest bidder but not yet contracted, against ₹2,100cr plus ₹300–350cr at Q4, and a pipeline ‘upwards of ₹10,000cr’ that converts about 60% over 18–24 months; its AI systems earned ₹510.6cr in Q1, 62.3% of revenue. **E2E**'s monthly revenue run-rate went from ₹16.0cr in March 2025 to ₹37.4cr in March 2026 and ₹71.8cr in June, about ₹860cr a year; another 1,024 B200s are due, with newer Nvidia chips planned. **My view: orders are there for FY27; the question is whether sovereign-AI and neocloud buyers keep ordering after this wave, and at what price.**",
                },
                {
                    label: 'Growth driver: US data centres',
                    text: "**Black Box** booked $339m of new work in Q1 and lifted its backlog to $949m (₹8,986cr), up 28% on the quarter and from $504m in March 2025. A new US cloud company placed a $131m order, all services, with ground work starting ‘from November’. Its FY30 aim is ₹18,000cr of revenue: about ₹12,000cr organic (about 17% a year) and ₹6,000cr bought, starting with Brazil's 2S (about $50m of revenue a year). **My view: the backlog supports FY27 guidance, but about half of it runs into FY28, and a third of the FY30 target depends on acquisitions.**",
                },
                {
                    label: 'Growth driver: more messages and new channels',
                    text: "Of **Tanla**'s ₹186cr of extra revenue in Q1, ₹120cr came from existing customers and ₹66cr from those won in the last year; 21 customers now pay more than ₹50cr a year, up from 17. ValueFirst Middle East would add ₹150–170cr of revenue. **Route Mobile** expects volumes to rise 10–15% over the next couple of quarters, its non-SMS products grew 14% to ₹94.5cr in Q1,. **My view: volume growth of 10–18% is realistic; profit grows more slowly while price per message keeps falling.**",
                },
                {
                    label: 'Growth driver: adtech abroad and acquisitions',
                    text: "**Affle** aims for $1bn of revenue ‘in the next few years’ and to be ten times its size within a decade, which needs acquisitions; it bought the assets of US video-ad network AdColony for $4.7m (₹44.4cr) and says a larger deal has reached third-party due diligence, to complete by early 2027 (in May it had about four targets shortlisted). **Mobavenue**'s international share rose from 11.5% of FY26 revenue to 20.7% in Q1 on a ₹10.02cr order won by its UK arm; it holds its ₹50cr raise for acquisitions. **My view: organic growth of about 20% is proven at Affle; the acquisitions are what could lift it, and also what could spoil the margin.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Netweb** guided 35–40% growth at Q4 and grew 172% in Q1 with a 14.7% margin against 13–14% guided. **E2E** met its March run-rate target (₹37.4cr against ₹35–40cr), put its first B200s live in mid-May as promised, and beat its long-term margin aim of about 70%. **Mobavenue** met its ‘Rule of 50’ with 57% growth at a 21.2% margin. **Tanla** promised growth ‘definitely more than 10%’ and grew 17.8%.",
                },
                {
                    label: 'Cautious',
                    text: "**E2E** will not guide its run-rate (‘look at what we have done in the past rather than predict the future’), capex or peak debt. **Netweb** stopped giving a separate growth number, saying ‘the strategic is the new normal’. **Route Mobile** said it ‘will hold’ any guidance update.",
                },
                {
                    label: 'Missed',
                    text: "**Tanla**'s CEO said of the ValueFirst Middle East deal at Q4, ‘We will close this quarter… Let me commit that’; it was signed only on 28 July, with completion now due by Q2, and the new platform promised within a month was not visible in the Q1 release. **Route Mobile** earned a 9.5% margin against about 12% guided, and its Claro firewall deal, ‘now live’ in May, ‘should have been live by now’ in July. **Affle**'s acquisition slipped from this calendar year to early 2027. **Black Box**'s 10% margin, ‘our short-term goal to get into FY27’ in June, became 9.3–9.4% for the year in August.",
                },
                {
                    label: 'Mixed',
                    text: "**Affle** met its 20% growth but gross margin did not recover and Q1 cash lagged profit. **Black Box** had a record quarter and backlog, but its H2 needs roughly 30–40% growth. **Netweb** delivered about ₹430cr of its ₹1,600cr strategic order in Q1, a little behind the pace needed. **E2E**'s second B200 lot slipped from ‘a couple of months’ in April to ‘the next couple of months’ in July. **Mobavenue**'s direct-client share fell from 73.9% to 65.2% after the Q4 call stressed direct relationships.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect earnings growth of about 40% a year at E2E, 25% at Netweb and Mobavenue, 20% at Black Box, 18% at Affle, 11% at Tanla and 5% at Route Mobile.** E2E's figure is high mainly because it starts from a trailing profit of only about ₹31cr, which includes loss-making quarters; Q1 alone earned ₹44cr. After that, rising depreciation and falling GPU rents slow it. Netweb grows fast in FY27 on its order book, then slows; Black Box meets most of its FY27 guidance, then grows mid-teens as its tax rate rises; Affle grows about 20%, less dilution. **My view: the growth is in the AI names and the value is in the messaging names; Affle is the one company with both, at a price that asks a little too much.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Tanla Platforms', 'Revenue 12–15% with ValueFirst Middle East; margin near 16%; platforms slow; buybacks', '3% / **11%** / 18%'],
                        ['Affle 3i', 'About 20% organic growth; gross margin steady; acquisitions and warrant shares dilute', '10% / **18%** / 24%'],
                        ['Route Mobile', 'Revenue mid-to-high single digits; margin back towards 12%; further write-offs possible', '−5% / **5%** / 12%'],
                        ['Black Box', 'FY27 profit guide ₹300–325cr, then mid-teens; tax rising towards 20%; interest; acquisitions', '8% / **20%** / 28%'],
                        ['Netweb Technologies', '₹3,355cr of orders; IndiaAI and sovereign AI; margin 13–14%; working capital to fund', '8% / **25%** / 40%'],
                        ['Mobavenue Ai Tech', '‘Rule of 50’ for two years, then fading; data cost; related-party drag', '5% / **25%** / 35%'],
                        ['E2E Networks', 'Trailing profit ₹117cr after Q2 (₹73cr in the quarter); September run-rate about ₹900cr a year; depreciation and GPU rents', '0% / **40%** / 60%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Tanla Platforms', 'Revenue growth ‘more than 10%’; margins ‘range bound’; ValueFirst Middle East by Q2', '₹100–150cr a year; ValueFirst Middle East ₹148.5cr', '**Mixed**: revenue +17.8%; deal late again; platforms flat'],
                        ['Affle 3i', 'About 20% organic growth; margin 23–25% over time; acquisition by early 2027; cash 80–85% of profit by Q3', 'Capitalised development ₹165–174cr a year; ₹1,100cr warrants', '**Mixed**: growth +20.4%; acquisition slipped a quarter'],
                        ['Route Mobile', 'Revenue mid-to-high single digits; EBITDA margin about 12% (held, not repeated)', 'Not meaningful; Heltar bought', '**Missed**: margin 9.5%; Claro delayed'],
                        ['Black Box', 'Revenue ₹7,800–8,000cr; EBITDA ₹725–750cr (9.3–9.4%); profit after tax ₹300–325cr; bookings $1.3–1.4bn', 'About ₹72cr (FY26); $200–250m of acquired revenue a year', '**Mixed**: record quarter; 10% margin goal softened'],
                        ['Netweb Technologies', 'Margin 13–14%; cash cycle 90–110 days; no revenue number now', 'Routine ₹20–25cr; up to ₹1,200cr raise approved', '**Beat**: +172% against 35–40% guided; margin 14.7%'],
                        ['Mobavenue Ai Tech', '‘Rule of 50’: growth above 30% with a 20%+ margin (directional)', 'Capitalised software; ₹50cr raise unspent', '**Delivered**: +57%; margin 21.2%'],
                        ['E2E Networks', 'No run-rate, capex or debt guidance; ‘70% plus’ operating margin for the medium term', 'Not given; second 1,024-B200 lot due in Q3; debt ₹450cr', '**Beat**: Q1 run-rate nearly doubled; Q2 profit ₹73cr at a 77% margin'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and stock-exchange filings rather than the calls. Three FY26 audits carried an emphasis of matter (Black Box, Route Mobile and Mobavenue); Netweb, Affle, Tanla and E2E had unmodified opinions, though Affle's accounts carry an unimpaired stake in an insolvent company.",
            ],
            points: [
                {
                    label: 'Audit findings and accounting',
                    text: "**Affle** has carried its 24.07% stake in Bobble AI, worth ₹135.8cr, as ‘held for sale’ since May 2024, although the accounting rule normally expects a sale within a year; Bobble is now in insolvency, and Affle says ‘there is no reliable basis to make a permanent impairment’ until an appeal is decided. That is about 30% of FY26 profit. **Black Box**'s auditor draws attention to payments that missed foreign-exchange-law deadlines: ₹29.37cr of imports, ₹6.73cr of export proceeds and ₹3.02cr of other receipts, with no penalty provided. **Route Mobile**'s auditor flags two write-offs of supplier prepayments: ₹108.0cr after a Singapore arbitration went against a subsidiary, and ₹27.9cr to a supplier that ‘ceased its business’. **Mobavenue**'s auditor flags money sent to its UK holding company and a Russian subsidiary still ‘in process’ for two years, and three foreign subsidiaries' accounts were unaudited. **My view: none of these is yet a large cash loss, but together they say reported profit here needs checking against cash.**",
                },
                {
                    label: 'Promoters and related parties',
                    text: "**Mobavenue**'s listed company bought its operating business from its three promoters for ₹19.89cr each, payable over two years, and lent ₹2.46cr and ₹4.0cr to two promoter-linked firms that are also its customers and suppliers. **Affle** is issuing about ₹1,100cr of warrants to its Singapore promoter company, whose promoter holding has fallen from 59.9% to 54.9%; management declined to say how the promoter is funding them. **Route Mobile** sold about ₹659cr of services to companies in its parent's group in FY26, about 15% of revenue, at cost plus a mark-up. **E2E**'s 18.45% shareholder L&T is also its partner, supplier and customer. **Netweb**'s promoters sold about 4% in February 2026. Tanla's secretarial auditor recorded insider-trading breaches by designated persons. **My view: Mobavenue's arrangements are the most serious here; money flowing between a listed company and its promoters needs a very good reason.**",
                },
                {
                    label: 'Input prices set by others',
                    text: "**Tanla** and **Route Mobile** depend on telecom companies, the regulator TRAI and Meta, and CARE says this limits Tanla's pricing power; a further WhatsApp price change could cut both companies' revenue per message again. **Affle** and **Mobavenue** depend on Google and Apple, whose privacy rules decide how well users can be targeted, and on the price of ad space. **Netweb** buys 65–70% of its inputs from three suppliers, mostly in Taiwan. **My view: this is the risk that no management can fix; it is why none of these companies earns a compounder's margin.**",
                },
                {
                    label: 'Customer and scheme concentration',
                    text: "**Netweb**'s five largest customers give 65–70% of revenue and three each passed 10% in FY26; 30–40% of a year's revenue lands in Q4. **Black Box**'s top 10 clients give 51% and North America 69%, so a pause in US cloud spending would hit it directly. **Route Mobile**'s top 10 give 43%, and one Indian bank's disruption turned its India business loss-making in Q1. **Mobavenue**'s top five sectors give 70–80% of revenue, and one reseller client doubled its international share. **E2E** depends partly on IndiaAI allottees who have not scaled as hoped. **My view: the AI names are the most concentrated, just when their prices assume the orders keep coming.**",
                },
                {
                    label: 'Debt, capital raising and dilution',
                    text: "**E2E** is funding GPUs with debt that rose about fourfold in a quarter, with more to come for the next GPU lot and a new subsidiary set up for ‘funding arrangement[s]’. **Netweb** may raise up to ₹1,200cr of debt or equity. **Black Box** says debt could rise to equal its equity to fund about ₹6,000cr of acquired revenue by FY30, and its goodwill has risen to ₹381cr. **My view: the cash-rich messaging companies have the opposite problem to the AI names; the risk there is that the cash is wasted, not that it runs out.**",
                },
                {
                    label: 'The GPU cycle, technology and security',
                    text: "**E2E** writes off its GPUs over six years while Nvidia releases a new generation every 12–18 months; if rental prices fall, the 75% margin falls with them, and Dua expects ‘phases where there is shortage of demand’. It does not split revenue by customer type or contract length, so investors cannot tell how much is locked in. **Route Mobile** suffered a cyber incident at its Colombian subsidiary Masivian late in Q1; the cost has not been given. **My view: technology moves fastest where the valuations are highest; that is the combination to be most careful with.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it charges for debt and credits cash. In this group the gap between them is widest at the messaging companies, whose cash is a large share of their market value, and at E2E, where depreciation takes about half of operating profit.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **3% at 8x, 8% at 12x, 12% at 18x, 16% at 26x, 24% at 50x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **{Count:fits|Two} of the {count:live|seven} fit my estimates, {count:full|three} are full and {count:stretched|two} are stretched. The cheapest companies are the slowest-growing, and the fastest-growing are priced for years more of it.**",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Route Mobile**'s ₹1,364cr of net cash is almost half its {mcap:Route Mobile|₹2,917cr} market value, so on EV/EBITDA it is the cheapest company in the whole Software sector. **Tanla** (₹1,036cr of net cash) and **Affle** (₹1,393cr) also look cheaper once cash is counted. **Black Box** (₹613cr of net debt including leases) and **E2E** (borrowing about ₹450cr by Q1, not yet in the live table) look dearer. **My view: at Route Mobile the cash matters only if it reaches shareholders; its parent decides that.**",
                },
                {
                    label: 'Fits: the price asks for no more than I expect',
                    text: "**Tanla** needs about {need:Tanla Platforms|8}% a year against my ~11%, and it holds ₹1,197cr of cash against a market value of {mcap:Tanla Platforms|₹6,507cr}; the falling margin and management's record are why it is ‘follow’, not ‘own’. **Route Mobile** needs about {need:Route Mobile|4}% a year against my ~5%; it fits, but only just, and further write-offs of supplier prepayments would wipe out that margin of safety.",
                },
                {
                    label: 'Full: prices that ask a little more than I expect',
                    text: "**Affle** needs about {need:Affle 3i|23}% a year against my ~18%; that is roughly its history, but not after capitalised costs and dilution. **Black Box** needs about {need:Black Box|24}% against my ~20%, which assumes it hits its FY27 profit guide and keeps growing above 20% after that. **Mobavenue** needs about {need:Mobavenue Ai Tech|28}% against my ~25%; the business may deliver it, but the related-party dealings make me unwilling to pay a full price. **My view: Affle is the one I would buy on a fall of a fifth or so.**",
                },
                {
                    label: 'Stretched: prices that need years of boom',
                    text: "**Netweb** needs about {need:Netweb Technologies|33}% a year for a decade against my ~25%: it is growing much faster than that today, but on a 13–15% margin with customers who order in waves. **E2E** needs about {need:E2E Networks|54}% a year against my ~40% on trailing profit, but that profit of about ₹31cr includes loss-making quarters; on Q1's profit carried through a full year the price needs only about 29%, which my estimate covers, so I follow it while the live table shows it as {label:E2E Networks|stretched}. A second check is that its market value of about {mcap:E2E Networks|₹13,400cr} compares with a June revenue run-rate of about ₹860cr a year, before depreciation and interest. **My view: both are good businesses at prices that leave no room for a slower year.**",
                },
                {
                    label: 'A check from order books and run-rates',
                    text: "**Netweb**'s ₹3,355cr of orders and lowest-bidder positions is about 1.5 years of FY26 revenue. **Black Box**'s ₹8,986cr backlog is about 1.4 years of FY26 revenue, but runs about 18 months and more for data centres. **E2E**'s June run-rate is more than twice its trailing revenue of ₹367cr. The messaging and adtech companies have no order books; their check is cash, which **Tanla**, **Route Mobile** and **Affle** hold in plenty. **My view: the AI names' order books support FY27; the prices need FY28–FY30 to be as strong.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'E2E Networks', rank: 1, stance: 'CYCLICAL', segment: AI,
            what: "An Indian GPU cloud that rents Nvidia chips by the hour to AI start-ups, companies, researchers and IndiaAI allottees; L&T owns 18.45% and is also a partner and customer.",
            view: "**Outstanding execution, now at a price that fits; own in small size.** Its monthly revenue run-rate nearly doubled to ₹71.8cr in Q1, and Q2 FY27 showed it repeats: revenue ₹224cr (+43% on the quarter), profit ₹73cr at a 77% operating margin, borrowing held at about ₹450cr, and the B200 cluster moved onto a ₹1,000cr sovereign-AI contract to June 2029. But depreciation takes about half of the operating profit, the run-rate grew only 5% in Q2 while it waits for the next GPU lot, management gives no guidance on revenue, capex or peak debt, and GPU rents fall when supply catches up. The price needs about {need:E2E Networks|40}% a year against my ~40%. 23 Oct 2026: moved from follow to own; Q2 met both conditions I set.",
            watch: 'GPU rental prices after the next Nvidia generation; the second B200 lot going live in Q3 and being let; the 5.4 MW (about 59%) expansion to 14.6 MW announced on 26 October, paid from cash flow and debt; debt against run-rate revenue.',
        },
        {
            company: 'Tanla Platforms', rank: 2, stance: 'HARVEST', segment: MSG,
            what: "India's largest business-messaging company by its own estimate, sending OTPs, alerts and marketing messages by SMS, WhatsApp and RCS for 3,200+ customers, with a small, high-margin software arm selling anti-spam and anti-phishing tools to telecom companies and banks.",
            view: "**Cheap, cash-rich and growing again, with a margin under pressure.** Filed revenue rose 18% in Q1, the fifth straight quarter of growth; it has turned 74% of operating profit into cash over five years and held ₹1,197cr of cash and liquid investments in June. But its operating margin has fallen from 22% to 16% since FY22, platforms are only 8.4% of revenue and flat on the quarter, and management missed its own FY26 EBITDA target and a ‘committed’ deal date. The price needs about {need:Tanla Platforms|8}% a year against my ~11%.",
            watch: 'ValueFirst Middle East completed in Q2; platform revenue growing again; operating margin holding at 16% as WhatsApp prices change.',
        },
        {
            company: 'Affle 3i', rank: 3, stance: 'PRICED', segment: ADS,
            what: "A mobile-advertising platform paid per ‘converted user’ (an install, registration or purchase), serving e-commerce, fintech, gaming and healthcare apps; about 72% of revenue comes from India and emerging markets.",
            view: "**The best business here, at a full price.** It has grown about 20% a year for 14 straight quarters at a 22–23% filed margin, turned 85% of operating profit into cash over five years and holds ₹1,393cr of net cash. But gross margin is down about two points, ₹165cr of development cost was capitalised in FY26, a ₹135.8cr stake in insolvent Bobble AI is unimpaired, Q1 cash was about 41% of profit and the acquisition slipped to early 2027. The price needs about {need:Affle 3i|23}% a year against my ~18%.",
            watch: 'Cash back at 80–85% of profit by Q3; gross margin turning up in H2; the size and margin of the acquisition.',
        },
        {
            company: 'Route Mobile', rank: 4, stance: 'TURNAROUND', segment: MSG,
            what: "A business-messaging company with 280+ direct telecom connections and 3,100+ clients in India, Europe, Latin America and Asia, 75% owned by Belgium's Proximus group, whose sister companies are also its customers.",
            view: "**Priced for no growth, with reasons.** Its ₹1,345cr of net cash is about 46% of market value, free cash was about ₹550cr in FY26 and revenue grew 9.6% in Q1 (company). But FY26 revenue fell 3.7%, gross margin slipped back to 20.9%, ₹135.9cr of supplier prepayments were written off under two auditor's emphasis paragraphs with another provision in Q1, the Claro firewall deal slipped and a subsidiary suffered a cyber incident. The price needs about {need:Route Mobile|4}% a year against my ~5%.",
            watch: 'Gross margin back above 22% in Q2–Q3; no further prepayment write-offs; cash returned by buyback or special dividend.',
        },
        {
            company: 'Black Box', rank: 5, stance: 'SCALEUP', segment: AI,
            what: "A digital-infrastructure contractor that cables, fits out and maintains data centres, networks and workplace technology in 35 countries for about 300 large clients; 69% of revenue is North American, and the Essar group holds about 70%.",
            view: "**A better business with a cash problem.** Its company EBITDA margin has doubled since FY23, backlog nearly doubled in 15 months to $949m, a fourth big US cloud company was won, and FY27 guidance is ₹7,800–8,000cr of revenue and ₹300–325cr of profit after tax. But it has turned only 11% of operating profit into cash over five years, has sold ₹354cr of receivables, books exceptional charges every year, carries a foreign-exchange-law emphasis, and the 10% margin goal slipped. The price needs about {need:Black Box|24}% a year against my ~20%.",
            watch: 'H2 revenue growth of 30–40% as the new US client starts in November; operating cash above 60% of EBITDA; a year without exceptional charges.',
        },
        {
            company: 'Netweb Technologies', rank: 6, stance: 'SCALEUP', segment: AI,
            what: "A Faridabad maker of GPU servers, supercomputers and private-cloud systems under the Tyrone brand, selling to government research bodies, IndiaAI projects, Indian IT companies and GPU clouds such as Yotta.",
            view: "**Real growth, a thin margin and a very high price.** Revenue rose 172% in Q1 at a 14.7% margin, orders and lowest-bidder positions of ₹3,355cr exceed FY26 revenue, CRISIL rates it A+ and its audit was clean. But five customers give 65–70% of revenue, three suppliers 65–70% of purchases, stock rose to 110 days, it moved into about ₹200cr of net debt in June, promoters sold about 4% in February, and a raise of up to ₹1,200cr is approved. The price needs about {need:Netweb Technologies|33}% a year against my ~25%. 1 Nov 2026: stays wait after the Q2 call. Revenue rose 4.4 times to ₹1,323cr at a 14.9% margin, and the ₹1,200cr share sale was done, leaving ₹14cr of net cash. But stock rose to 117 days, orders and lowest-bidder positions slipped to ₹3,282cr as most of the ₹2,200cr strategic order has now been delivered, and management still promises only 30–40% a year with about ₹4,000cr of FY27 revenue.",
            watch: 'Stock back under 90 days; the ₹11,152cr pipeline turning into orders now the strategic order is mostly delivered; the margin holding near 13–14% on large low-margin deals.',
        },
        {
            company: 'Mobavenue Ai Tech', rank: 7, stance: 'SCALEUP', segment: ADS,
            what: "A small Indian mobile-advertising platform paid per result (install, purchase or lead) for 155+ brands in quick commerce, fintech and retail, listed through a former shell company that bought the business from its promoters in 2025.",
            view: "**Strong numbers inside a structure I do not like.** Revenue rose 57% in Q1 at a 21% filed margin, the price per result rose 11%, and it has produced free cash. But the listed company bought the business from its own promoters for ₹59.68cr with ₹45.7cr still owed, lends to promoter-linked firms that are also customers and suppliers, capitalised ₹11cr of salaries including directors' pay, and carries an auditor's emphasis on a Russian subsidiary. The price needs about {need:Mobavenue Ai Tech|28}% a year against my ~25%. By 25 Oct 2026 the price had moved into the fits band; it stays pass, because no filing since has settled the promoter payment or the linked-party loans.",
            watch: 'The promoter payment settled and linked-party loans and trades wound down; direct-client share recovering; how the ₹50cr raise is spent.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Business messaging.** **Tanla Platforms: follow**, and the first to buy on a clean Q2; cheap, cash-rich and growing again, held back by a shrinking margin and a management that over-promises. **Route Mobile: wait** for gross margin to recover and for proof that the supplier write-offs have stopped; the cash is large, but its parent decides its use.",
            "**Mobile advertising paid per result.** **Affle 3i: follow**; the best business in the group, at a price that asks for a little more than I expect and with profit softer than it looks. **Mobavenue Ai Tech: pass** while the listed company's money flows to and from its promoters, however good the growth.",
            "**AI computers, GPU cloud and data-centre build-out.** **Black Box: wait** until cash follows profit and the H2 ramp arrives. **Netweb Technologies: wait** for a lower price and for stock and debt to come down. **E2E Networks: own**, in small size; Q2 showed its profit repeats and its debt has stopped outrunning revenue, at a price that fits, but GPU rents need watching.",
            "**What would change my view.** For the better: Tanla's platforms growing 25% or more; Affle's cash conversion and gross margin recovering together; Route Mobile returning cash through a buyback; Black Box converting most of its profit into cash; a fall in Netweb's price or a quarter of positive cash; E2E disclosing multi-year contracted revenue. For the worse: another WhatsApp or SMS price cut; an Affle acquisition bought at a low margin, or a Bobble write-off; further write-offs at Route Mobile; a pause in US cloud spending; a large capital raise at Netweb; GPU rental prices falling at E2E; further related-party dealings at Mobavenue.",
            "**What to watch next quarter.** Tanla's ValueFirst completion and platform revenue; Affle's cash and acquisition; Route Mobile's gross margin; Black Box's H2 run-rate and cash; Netweb's stock days and new orders; Mobavenue's promoter payment; E2E's second B200 lot and debt.",
        ],
        bottomLine:
            "Own E2E, in small size, now that its profit repeats at a price that fits, while watching debt and GPU rents. Follow Tanla, cheap and cash-rich, and Affle, the best business at a full price; wait on Route Mobile, Black Box and Netweb for margins, cash or a better price; pass on Mobavenue for its related-party dealings.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/TANLA/consolidated/' },
        { label: 'NASSCOM Strategic Review 2026: India tech industry revenue FY26 (coverage) — Kotak Neo, Feb 2026', url: 'https://www.kotakneo.com/news/market-news/indian-tech-industry-revenue-fy26-nasscom-forecast/' },
        { label: 'Gartner forecasts worldwide IT spending to grow 14.2% in 2026 — TelecomTV, Jul 2026', url: 'https://www.telecomtv.com/content/digital-platforms-services/gartner-forecasts-worldwide-it-spending-to-grow-14-2-in-2026-totalling-6-37tn-55964/' },
        { label: 'ISG Index Q2 2026: global tech services market — StockTitan, Jul 2026', url: 'https://www.stocktitan.net/news/III/global-tech-services-market-grows-at-fastest-pace-ever-in-q2-wrh1eeo2ke6q.html' },
        { label: 'Tanla Platforms Q1 FY27 investor update — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=22d3956b-a592-4f70-9529-fca64b5512b9.pdf' },
        { label: 'Tanla Platforms Integrated Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/3536807d-aebe-47aa-b316-02bae1d8f7e9.pdf' },
        { label: 'Tanla Platforms rating rationale — CARE, Apr 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604130442_Tanla_Platforms_Limited.pdf' },
        { label: 'Tanla Platforms: ValueFirst Middle East share purchase agreement — BSE, Jul 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=7cd051ba-502c-49e4-9ee2-f7ddda36bf9f.pdf' },
        { label: 'Affle 3i Integrated Annual Report FY26 (Bobble note, key audit matters) — Affle', url: 'https://affle.com/hubfs/annual-reports-agm-information/2025-26/Affle_3i_Limited_IR-2025-26.pdf' },
        { label: 'Affle 3i Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachLive/f064706f-13b9-4859-9441-9abe8ae21a2d.pdf' },
        { label: 'Route Mobile Annual Report FY26 (emphasis of matter on prepayment write-offs) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/36290219-8fc9-49ec-bf79-8ac6a98f6216.pdf' },
        { label: 'Route Mobile Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/2a5b8fc8-740e-43c3-a802-59a9f329e6fe.pdf' },
        { label: 'Black Box Q1 FY27 investor presentation — Black Box', url: 'https://cdn.blackbox.com/cms/docs/investors/financials/investor-presentation/2026-27/investorpresentation_q1fy27_12082026.pdf' },
        { label: 'Black Box Q1 FY27 earnings call — Black Box', url: 'https://cdn.blackbox.com/cms/docs/investors/financials/earning_calls/transcripts/earnings-call-transcript-q1fy27.pdf' },
        { label: 'Black Box Annual Report FY26 (foreign-exchange emphasis of matter) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/0cc597a9-495b-4166-93f0-66854ac96378.pdf' },
        { label: 'Netweb Technologies Q1 FY27 earnings presentation — Netweb', url: 'https://www.netwebindia.com/investors/board-meeting/2026-27/Q1/Earning-Presentation-28072026.pdf' },
        { label: 'Netweb Technologies Annual Report FY26 — Netweb', url: 'https://www.netwebindia.com/investors/agm/annual-report-2025-26.pdf' },
        { label: 'Netweb Technologies rating rationale — CRISIL, Jun 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/NetwebTechnologiesIndiaLimited_June%2010_%202026_RR_398188.html' },
        { label: 'Netweb Technologies Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachLive/82b379a4-fa41-4ea7-bce4-dabe60795fa0.pdf' },
        { label: 'E2E Networks Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=82a7e375-4e00-495b-9d10-410da70ba183.pdf' },
        { label: 'E2E Networks Q4 FY26 earnings call — NSE', url: 'https://nsearchives.nseindia.com/corporate/E2E_22042026154021_EC_Transcript_2.pdf' },
        { label: 'E2E Networks Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d9f0427e-39c5-4025-9c1d-85fae1a2fd80.pdf' },
        { label: 'Mobavenue AI Tech Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c7a54486-fa77-4242-b837-88df9e0b641e.pdf' },
        { label: 'Mobavenue AI Tech Annual Report FY26 (related parties, emphasis of matter) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/60b85660-231c-4a5f-8729-d40d390c88e5.pdf' },
        { label: 'Mobavenue AI Tech: board outcome on merger of the operating subsidiary — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1fdbaa42-fb7b-49e8-b9d4-fa2eae8bb902.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
