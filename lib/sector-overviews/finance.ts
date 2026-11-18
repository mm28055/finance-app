import { SectorOverview } from './types';
import { financeBusinesses } from './finance-businesses';
import { financeValuationInputs } from './card-data/finance';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const BANKS = 'Banks — deposits from savers, loans to everyone';
const NBFC = 'Non-bank lenders (NBFCs) — borrowed money, riskier borrowers';

// Lenders are measured on lending margin, bad loans, return on equity and leverage, and valued on
// price ÷ book; operating profit, cash conversion and EV/EBITDA do not describe a lender.
export const finance: SectorOverview = {
    sector: 'Finance',
    title: 'Finance',
    format: 'ranked',
    businesses: financeBusinesses,
    moatCompact: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: financeValuationInputs,
        lender: true,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'ICICI Bank': 13,
            'HDFC Bank': 10,
            'State Bank of India': 10,
            'Northern ARC Capital': 14,
            'OnEMI Technology': 19,
            'Manba Finance': 12,
        },
    },
    standfirst:
        "Six lenders: India's three biggest banks and three non-bank lenders. ICICI Bank, HDFC Bank and State Bank of India take deposits from savers and lend to everyone; Northern Arc lends to small businesses, consumers and other lenders; OnEMI (the Kissht app) makes digital personal loans, more than half of them on partner lenders' books; Manba Finance makes two-wheeler loans through vehicle dealers. Two more non-banks, SG Finserve and Paisalo Digital, were added on 2 October 2026 with cards and verdicts; they join the tables and charts at the next quarterly refresh. Lenders are judged on different measures from other companies: lending margin, bad loans, return on equity and how much they borrow against their own money, and they are valued on price ÷ book. This update draws on the June-quarter calls (checked against the official transcripts, since several stored copies were machine-written), annual reports, rating reports and RBI, ICRA, India Ratings, Crisil and CRIF data.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'margin',
            label: 'Lending margin by year (income minus interest paid, ÷ average assets)',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed profit and loss and balance sheets (Screener): banks standalone, OnEMI and Northern Arc consolidated, Manba standalone. Interest earned (plus, for the non-banks, fees) minus interest paid, ÷ the average of opening and closing total assets.',
            note: 'The banks’ figures are close to the margins they report; the non-banks’ include fees, so they run above their reported margins. Small-loan lenders charge more because their borrowers are riskier and each loan costs more to make and collect.',
            values: {
                'ICICI Bank': [3.6, 4.1, 4.3, 4.1, 3.9],
                'HDFC Bank': [3.8, 3.8, 3.6, 3.3, 3.1],
                'State Bank of India': [2.5, 2.8, 2.7, 2.6, 2.4],
                'Northern ARC Capital': [7.3, 8.6, 11.0, 11.9, 11.8],
                'OnEMI Technology': [null, null, null, null, null],
                'Manba Finance': [11.0, 11.2, 12.5, 11.7, 10.2],
            },
            cellNotes: {
                'HDFC Bank': 'Merged with HDFC Ltd, a mortgage lender funded by expensive bonds, in July 2023; the margin has fallen since.',
                'OnEMI Technology': 'Most of its loans sit on partner lenders’ books and earn it fees, so income ÷ its own assets is not comparable.',
            },
        },
        {
            key: 'growth',
            label: 'Income growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly results (Screener): interest earned (banks) or total income (non-banks), each quarter against the same quarter a year earlier.',
            note: 'The banks’ income has grown more slowly than their loans because the Reserve Bank cut interest rates through 2025 and floating-rate loans were repriced down.',
            values: {
                'ICICI Bank': [10, 3, 2, 2, 6],
                'HDFC Bank': [6, 4, 1, -1, 2],
                'State Bank of India': [6, 5, 4, 3, 8],
                'Northern ARC Capital': [5, 7, 25, 23, 29],
                'OnEMI Technology': [null, null, null, 68, 45],
                'Manba Finance': [37, 20, 30, 37, 39],
            },
            cellNotes: {
                'OnEMI Technology': 'Listed in May 2026; earlier quarters were not filed.',
            },
        },
        {
            key: 'roe',
            label: 'Return on equity by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed profit and loss and balance sheets (Screener): net profit ÷ average net worth (share capital plus reserves), same basis as above.',
            note: 'For a lender this is the return that matters: profit on the shareholders’ own money. ICICI and SBI earn 16%; Northern Arc holds a lot of spare capital, which keeps its return near 11%.',
            values: {
                'ICICI Bank': [15, 17, 19, 18, 16],
                'HDFC Bank': [17, 17, 17, 14, 14],
                'State Bank of India': [12, 17, 17, 17, 16],
                'Northern ARC Capital': [12, 14, 16, 11, 11],
                'OnEMI Technology': [32, 7, 29, 18, 24],
                'Manba Finance': [6, 9, 17, 13, 12],
            },
            cellNotes: {
                'HDFC Bank': 'The merger in July 2023 brought in a large block of new equity.',
                'OnEMI Technology': 'Before its May 2026 listing, which raised about ₹850cr of new equity and will lower the return for a while.',
            },
        },
        {
            key: 'gnpa',
            label: 'Bad loans (gross NPA) by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed quarterly results (Screener) for the three banks and Manba; company calls for OnEMI and Northern Arc. Loans unpaid for more than 90 days, as a share of all loans.',
            note: 'All three banks’ bad loans have fallen for a year. Manba’s are more than twice theirs.',
            values: {
                'ICICI Bank': [1.67, 1.58, 1.53, 1.40, 1.38],
                'HDFC Bank': [1.40, 1.24, 1.24, 1.15, 1.17],
                'State Bank of India': [1.83, 1.73, 1.57, 1.49, 1.47],
                'Northern ARC Capital': [null, null, null, null, 1.0],
                'OnEMI Technology': [null, null, null, null, 2.25],
                'Manba Finance': [3.47, null, 3.38, 3.58, 3.41],
            },
            cellNotes: {
                'OnEMI Technology': 'On its own books only; it writes off personal loans at 150 days unpaid, which keeps this figure low.',
                'Manba Finance': 'Q2 FY26 not stated in the filing.',
            },
        },
        {
            key: 'leverage',
            label: 'Assets ÷ net worth by year',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed balance sheets (Screener): total assets ÷ share capital plus reserves at year end.',
            note: 'How many rupees of loans and investments each rupee of shareholders’ money supports. Banks run at 7–14x because deposits are stable and regulated; non-banks at 3–5x. Higher means a small loss in the loan book takes a larger bite out of equity.',
            values: {
                'ICICI Bank': [8.3, 7.9, 7.9, 7.3, 7.0],
                'HDFC Bank': [8.6, 8.8, 8.2, 7.8, 7.8],
                'State Bank of India': [17.8, 16.8, 16.4, 15.1, 14.0],
                'Northern ARC Capital': [4.8, 5.0, 5.2, 4.0, 4.3],
                'OnEMI Technology': [2.3, 2.3, 2.2, 2.7, 3.0],
                'Manba Finance': [3.7, 4.7, 4.8, 4.0, 4.8],
            },
            cellNotes: {
                'OnEMI Technology': 'Understates its risk: it also guarantees the first losses on loans held by partner lenders.',
            },
        },
        {
            key: 'roa',
            more: true,
            label: 'Return on assets by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed profit and loss and balance sheets (Screener): net profit ÷ average total assets.',
            note: 'Profit on every ₹100 lent. About 1% is normal for a large bank, 2% is excellent; non-banks need 2.5–3% or more because they borrow less against their equity.',
            values: {
                'ICICI Bank': [1.8, 2.1, 2.4, 2.4, 2.2],
                'HDFC Bank': [1.9, 1.9, 2.0, 1.8, 1.8],
                'State Bank of India': [0.7, 1.0, 1.0, 1.1, 1.1],
                'Northern ARC Capital': [2.7, 2.8, 3.0, 2.4, 2.7],
                'OnEMI Technology': [14.2, 3.1, 12.8, 7.2, 8.4],
                'Manba Finance': [1.6, 2.2, 3.5, 3.1, 2.6],
            },
            cellNotes: {
                'OnEMI Technology': 'On its own assets only; on all loans it manages, including partners’, the company reports about 5%.',
            },
        },
        {
            key: 'nnpa',
            more: true,
            label: 'Bad loans after provisions (net NPA) by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed quarterly results (Screener) for the three banks and Manba; company calls for OnEMI and Northern Arc.',
            note: 'What is left of bad loans after the money already set aside for them. The banks have set aside two-thirds to three-quarters of theirs; Manba about a quarter.',
            values: {
                'ICICI Bank': [0.41, 0.39, 0.37, 0.33, 0.35],
                'HDFC Bank': [0.47, 0.42, 0.42, 0.38, 0.41],
                'State Bank of India': [0.47, 0.42, 0.39, 0.39, 0.38],
                'Northern ARC Capital': [null, null, null, null, 0.5],
                'OnEMI Technology': [null, null, null, null, 0.36],
                'Manba Finance': [2.64, null, 2.57, 2.67, 2.52],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'funding', label: 'Cheap, steady funding', description: 'Low-cost deposits or cheap borrowing that does not run when markets panic.' },
            { key: 'reach', label: 'Reach and customers', description: 'Branches, dealers, partners and data that bring borrowers in cheaply.' },
            { key: 'risk', label: 'Loan quality', description: 'Low bad loans, and a record of lending well through a bad cycle.' },
            { key: 'capital', label: 'Capital cushion', description: 'Enough of its own money to keep growing without selling new shares.' },
            { key: 'gov', label: 'Disclosure and governance', description: 'Clear reporting and a record of dealing with problems openly.' },
        ],
        rows: [
            { company: 'ICICI Bank', trend: 'widening', trendNote: 'Loans up 19.6%, margin 4.36%, deposit costs falling and bad loans still coming down.',
                grades: { funding: { grade: 'A', note: 'Deposits up 14%; cost of deposits 4.41%' }, reach: { grade: 'A', note: 'National branches plus insurance, funds, broking' }, risk: { grade: 'A', note: 'Gross bad loans 1.38%, credit cost 0.32%' }, capital: { grade: 'A', note: 'Capital adequacy 16.8%' }, gov: { grade: 'A', note: 'Clear disclosure; RBI-ordered ₹1,283cr farm provision' } } },
            { company: 'HDFC Bank', trend: 'stable', trendNote: 'Growing faster again, but cheap deposits slipped to 32% of the total (aim about 38%) and the chairman, CEO and CFO all change in 2026.',
                grades: { funding: { grade: 'B', note: 'Cheap deposits 32%, from 38% in Sep 2023' }, reach: { grade: 'A', note: 'About 9,700 branches; 100m+ customers' }, risk: { grade: 'A', note: 'Gross bad loans 1.17%' }, capital: { grade: 'A', note: 'Core capital 17.4%' }, gov: { grade: 'B', note: 'Chairman, CEO and CFO exits; Supreme Court appeal on CEO pending' } } },
            { company: 'State Bank of India', trend: 'stable', trendNote: 'Domestic margin held at 3.0%; loan growth guided at 14–15%; building a collection force before growing riskier loans.',
                grades: { funding: { grade: 'A', note: 'Largest deposit base in India' }, reach: { grade: 'A', note: 'Largest branch network' }, risk: { grade: 'B', note: 'Clean now; hit hardest in past bad-loan cycles' }, capital: { grade: 'B', note: 'Assets 14x net worth' }, gov: { grade: 'B', note: 'Government-owned' } } },
            { company: 'Northern ARC Capital', trend: 'widening', trendNote: 'Direct loans now 64% of the book; margin guided back up from 9.3% to about 10% after a Q1 dip.',
                grades: { funding: { grade: 'B', note: 'Cost of funds 8.46%' }, reach: { grade: 'B', note: 'Partner network plus its own branches' }, risk: { grade: 'B', note: 'Gross bad loans 1%; credit cost 2.6%' }, capital: { grade: 'A', note: 'Capital adequacy 22.7%' }, gov: { grade: 'B', note: 'Auditor flagged accounting swing; ₹2.09cr staff fraud' } } },
            { company: 'OnEMI Technology', trend: 'widening', trendNote: 'Credit cost down from 8.85% to 6.80% of AUM as it moves to safer borrowers.',
                grades: { funding: { grade: 'C', note: 'Borrows at about 14–14.5%' }, reach: { grade: 'B', note: 'App-based; 12m customers served' }, risk: { grade: 'C', note: 'Unsecured; credit cost 6.8% of AUM' }, capital: { grade: 'A', note: 'Capital adequacy 40%' }, gov: { grade: 'B', note: 'Listed May 2026; ₹832cr share sale four months later' } } },
            { company: 'Manba Finance', trend: 'stable', trendNote: 'Growing, but capital has shrunk and a ₹100cr share issue dilutes holders by about 13%.',
                grades: { funding: { grade: 'C', note: 'Borrowing cost 10.86%' }, reach: { grade: 'B', note: '1,700+ vehicle dealers' }, risk: { grade: 'C', note: 'Gross bad loans 3.41% (3.60% own book); 26% provided' }, capital: { grade: 'C', note: 'Capital adequacy 24.4%; ₹100cr issue at ₹135' }, gov: { grade: 'B', note: 'Small; collects in-house' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own ICICI Bank, HDFC Bank and State Bank of India, and keep HDFC Bank on a shorter leash.** **ICICI** is the best-run of the three: return on equity of 16–19% for four years, a core margin held at 4.28% through 1.25 points of rate cuts, loans up 19.6% and gross bad loans down to 1.38%. Its Q1 profit growth (15.9%) was helped by a 0.32% credit cost that management calls about 0.50% in a normal year, so I expect low-to-mid-teens growth, not the headline. Its deposits grew only 14% against loans of 19.6%, and the RBI ordered a ₹1,283cr provision after finding farm loans that broke its lending rules. **SBI** earns about 16% on equity, held its domestic margin at 3.00% and raised its loan-growth guide to 14–15%. But its deposits grew only 9.7% against loans of 18.6%, early-overdue large loans nearly doubled to ₹1,687cr, and it has twice put off giving its ECL number; its price already allows for a government bank whose profits collapsed in the last bad-loan cycle.",
                "**HDFC Bank is the one to watch most closely.** Its loans are clean (1.17% gross bad loans) and it holds ₹37,000cr of spare provisions, but its margin fell to 3.26%, cheap current and savings deposits slipped to 32% of the total, and standalone profit rose only 5% (9.8% without last year's one-offs). The chairman resigned in March, citing 'certain happenings and practices' at odds with his values; the CEO did not seek another term, and Anup Bagchi of ICICI Prudential Life took over on 27 October; the CFO retires in November and the deputy MD in December. Outside law firms found the chairman's concerns 'not substantiated', but a Supreme Court appeal in the Lilavati Trust case against the CEO is pending, and Dubai's regulator has barred its DIFC branch from taking new clients for some services. **I still own it for the franchise, but the price now asks for about the growth I expect (about 10% a year), and a smooth, RBI-approved succession is part of the case.**",
                "**Follow Northern Arc and OnEMI; pass on Manba Finance.** **Northern Arc** is now mostly a direct lender, but Q1 was soft (margin 9.8% → 9.3%, profit −14% on the quarter) and its FY26 profit was helped by an accounting reversal its auditor flagged; it wrote off ₹694cr in FY26, far more than its 1% bad-loan figure suggests, and its private-equity holders sold about 13% in August with about a quarter still to sell. **OnEMI** (Kissht) grew loans 61% and earns about 21% on equity, but its true loss rate is above the 6.8% headline, bad loans sit at its 2.25% ceiling with cover down to 84%, and it approved an ₹832cr share sale four months after listing. **Manba** has the highest bad loans here (3.60% on its own book) with only 26% provided for, 57% of its loans in one state, loans up just 1% in Q1 against a 35–40% guide, and a share issue that dilutes holders by about 13%.",
                "**Two things to hold onto.** First, **cheap money wins**: the banks pay 4.4–4.9% for deposits and the non-banks 8.5–14.5% for borrowings, which is why banks earn 14–18% on equity at 3–4% margins. Second, **a lender's profit is only as good as its bad loans**: system bad loans are at a multi-decade low (1.8%, RBI) and credit costs are unusually low, so today's earnings are near the best of the cycle, and expected-loss provisioning arrives in April 2027.",
            ],
        },
        {
            heading: '2. Charts: lending margin, growth, returns, bad loans and leverage',
            body: [
                "The five views that matter most for a lender, with two more behind **More measures**. Operating margin, cash conversion and capex, used in other notes, do not describe a lender: its raw material is money, and lending more always uses cash. Every figure comes from filed results (the banks and Manba standalone, OnEMI and Northern Arc consolidated). OnEMI listed in May 2026, so some of its figures are blank. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Lenders borrow money and lend it at a higher rate; the profit is the gap, less running costs and loans that go bad. **2026 has been a strong year for lending and an awkward one for funding.** Bank credit grew 19.1% in the year to 31 August (RBI), led by industry (+20%) and services (+22.9%, much of it loans to non-banks) rather than consumers (+16.2%). Deposits lagged by about five points until a one-off RBI window for foreign-currency deposits from Indians abroad (FCNR(B)) brought in $127.2 billion in June–August; the system's loan-to-deposit ratio had hit a record 83–85%, against 71.7% in FY22.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Savers and bond investors → **banks** (deposits) and **non-banks** (bank loans and bonds) → households and businesses. Banks hold about 79% of India's credit, non-banks about 21% (Bank of Baroda). Non-banks now borrow more from banks: bank loans were 43% of their borrowings in H2 FY26, and Crisil expects 44–45% in FY27, as bond yields rose while bank rates fell. OnEMI and Northern Arc also find borrowers for other lenders for a fee, covering first losses up to the RBI's 5% cap. **The profit sits with whoever has the cheapest money and the best judgement of who will repay.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**The 2026 revival is in company credit, not a consumer boom.** Private companies' borrowing rose 21.1% in the June quarter (RBI) as firms switched from bonds to banks. Among consumers, gold loans jumped 50% to ₹18.6 lakh crore (CRIF), personal loans grew 12.9% and card balances were flat. Non-banks make 91% of personal loans by number but only 40% by value, so small loans are their ground. Two-wheeler loans, Manba's market, grew 15.1% (CRIF).",
                },
                {
                    label: 'Cycles and policy',
                    text: "**The rate cycle is turning.** The RBI cut its repo rate by 1.25 points in 2025 to 5.25%; with inflation at 4.82% in August, HSBC expects rises to 5.75% by December. Floating-rate loans repriced down at once while deposits lagged, so Q1 FY27 looks like the bottom for bank margins (ICRA and India Ratings expect relief in the second half). Bad loans are benign but past their best: ICRA sees bank bad loans ticking up to 2.0–2.1% in FY27, and India Ratings sees credit cost rising from 0.65% to 0.74%. Expected-credit-loss (ECL) provisioning starts on 1 April 2027; Fitch expects it to cut banks' core capital by about 0.8 points once phased in (Crisil: up to 1.2).",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**ICICI** on deposits keeping up with loans; **HDFC Bank** on replacing merger-era bonds with deposits and a clean leadership change; **SBI** on farm and small-business bad loans staying low; **Northern Arc** on lifting its margin to 10% without higher losses; **OnEMI** on its models holding up and cheaper funding; **Manba** on two-wheeler demand outside Maharashtra and new capital. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures and the Q1 FY27 calls',
                    columns: ['Kind', 'Who', 'Lending margin (FY26)', 'Return on equity (FY26)', 'Credit cost (Q1 FY27)', 'Gross bad loans (Q1 FY27)', 'Cost of money'],
                    rows: [
                        ['Banks', 'ICICI, HDFC, SBI', '2.4–3.9%', '14–16%', '0.27–0.40%', '**1.17–1.47%**', 'Deposits at 4.4–4.9%'],
                        ['Non-banks', 'Northern Arc, OnEMI, Manba', '10–12%', '11–24%', '2.6–6.8% (Manba about 1.1% in FY26)', '**1.0–3.4%**', 'Borrowings at 8.5–14.5%'],
                    ],
                    note: 'Lending margin is income minus interest paid ÷ average assets (Screener); OnEMI’s is not comparable and is left out. Credit cost is as each company states it; OnEMI’s excludes about a point of first-loss payments to partners.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Bank credit', '₹213.6 lakh crore (June); **+19.1%** to 31 August; FY26 +15.9%', 'FY27: 11.0–11.7% (ICRA, April); **15%** (India Ratings, August)', 'RBI; ICRA; India Ratings'],
                        ['Bank quality and returns', 'Bad loans **1.8%** (March 2026); core capital 15.3%; return on assets about 1.3%', 'Bad loans 2.0–2.1%, return on assets 1.2–1.3% in FY27 (ICRA)', 'RBI; ICRA'],
                        ['Non-banks', 'About 21% of credit; loans +14.9% (July)', 'Assets above **₹50 lakh crore** by March 2027, +18–19% a year (Crisil)', 'RBI; Crisil'],
                        ['Personal loans', '₹16.5 lakh crore, +12.9%; 31–180 days overdue 2.4% (3.1%)', 'CRIF warns of looser underwriting', 'CRIF, March 2026'],
                        ['Microfinance', '₹3.25 lakh crore; 31–180 days overdue 2.0% (6.3%)', 'Credit cost 3–3.5% in FY27 (ICRA)', 'MFIN; ICRA'],
                        ['Two-wheelers', 'FY26 sales 2.14 crore (+13.4%); loans ₹1.89 lakh crore (+15.1%)', 'Non-bank vehicle loans +16–17% a year (Crisil)', 'FADA; CRIF; Crisil'],
                        ['Rates and rules', 'Repo 5.25%; ECL from April 2027; first-loss guarantees capped at 5%', '**Rises to 5.75%** by December (HSBC); ECL cuts core capital ~0.8 points (Fitch)', 'RBI; HSBC; Fitch'],
                    ],
                    note: 'Some figures come from press summaries of RBI and agency reports. The forecasters differ widely on FY27 credit growth.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect a lender's profits. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: cheap deposits at scale',
                    text: "**SBI**, **HDFC Bank** and **ICICI** fund themselves from millions of savers at 4.4–4.9%, against 8.5–14.5% for the non-banks, and deposits stay put in a panic in a way bond money does not. HDFC Bank says it has gained 0.3–0.5 points of deposit share a year for five years; its deposits grew 14.4% in FY26 against about 11.5% for the system. The cracks are in the mix: cheap current and savings deposits are 32% of HDFC Bank's total (38% in September 2023). **The moat is intact but costs more to keep.**",
                },
                {
                    label: 'Evidence of share',
                    text: "**SBI** has 28.1% of home loans and 18.7% of car loans among commercial banks, and lifted its small-business share to 12.49% from 12.22%. **HDFC Bank** says it handles 26–28% of card spending. **ICICI**'s fund arm has 14.2% of equity mutual-fund assets. **Manba** claims 12–14% of two-wheeler finance where it has operated longest, but 1–3% in Uttar Pradesh and Madhya Pradesh. **Share is national for the banks; for Manba it must be rebuilt state by state.**",
                },
                {
                    label: 'Pricing power: little anywhere',
                    text: "**SBI** keeps gold-loan rates below 10%, and when it moved corporate loans to its own benchmark in Q1, some borrowers left and its corporate book fell 0.3% on the quarter. **HDFC Bank** calls corporate spreads 'very thin'; **ICICI** passes up loans at some rates rivals quote. **Manba** lends at 18–19% in new states against 21–22% at home to win safer borrowers, and **OnEMI** is cutting yields on purpose. **The edge shows up in funding cost and losses, not in lending rates.**",
                },
                {
                    label: 'Switching costs: accounts and cross-selling',
                    text: "Customers rarely move salary and savings accounts, and this is where the banks' edge compounds. At **HDFC Bank**, the share of home-loan customers with a deposit account rose from 36% to about 50% in two and a half years, and their deposits from ₹50,000cr to ₹86,000cr. At **ICICI**, about 90% of mortgage customers already banked with it. Non-bank borrowers switch easily: 45% of Kissht's customers also hold a personal loan elsewhere.",
                },
                {
                    label: 'Narrower moats: knowing a niche',
                    text: "**Northern Arc** has 16 years of data from lending to 373 smaller lenders, now used to lend directly, but ICRA notes its 'relatively lower track record' in retail and has kept it at AA− since at least 2023. **Manba** approves 60% of loans within a minute and says in-house collection costs it 6% against 18% at peers. **OnEMI**'s riskiest borrower band defaults 5.4 times as often as its safest, against 2.2 times for the bureau score (its own figures). **Real skills, untested by a downturn, and easier to copy than a deposit base.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Kotak Mahindra**, **Axis Bank** and the state banks, which have out-lent the private banks for seven straight quarters. Among non-banks, **Bajaj Finance**, **Shriram Finance**, **Cholamandalam** and the two-wheeler makers' finance arms borrow more cheaply; apps such as KreditBee, Fibe and Navi chase the same personal-loan borrowers.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "For a lender the margin is the gap between what it earns on loans and what it pays for money, and its 'working capital' is its funding, provisions and capital. Are these margins structural?",
                "A warning first: the dashboard's own 'revenue', 'EBITDA' and 'margin' fields hold different things for different lenders (net interest income for ICICI and Manba, net revenue for Northern Arc, zero for HDFC Bank and SBI). This note ignores them and uses filed figures and the companies' own ratios.",
            ],
            points: [
                {
                    label: 'Structural: cheap deposits and specialist pricing',
                    text: "**ICICI**'s margin was 4.36% in Q1 FY27, or 4.28% without interest on tax refunds, flat on a year despite the rate cuts; its cost of deposits fell from 4.85% to 4.41%. **SBI** held its domestic margin at 3.00%. **HDFC Bank**'s fell from 3.38% to 3.26%, a post-merger low, and its CFO would not call the bottom; its lever is replacing ₹40,000–50,000cr of merger-era bonds costing just over 7% with deposits at about 6%. The non-banks earn more because their borrowers are riskier: **Northern Arc** 9.3%, **Manba** 12.13%, **OnEMI** about 18% on its own loans. **My view: ICICI's and SBI's margins are structural; HDFC Bank's recovery is plausible but slow.**",
                },
                {
                    label: 'Cyclical: the rate cycle',
                    text: "About 57% of ICICI's domestic loans and two-thirds of SBI's reprice with the repo rate within weeks, while fixed deposits reprice only as they mature. So the 2025 cuts hit income first: the banks' interest income grew 10% at most through FY26 while loans grew 12–17%. That squeeze is largely over. If the RBI raises rates, **SBI** gains in the short run, while non-banks that borrow from banks pay more within a quarter or two: 62% of **Northern Arc**'s borrowings float, and **Manba**'s average cost already rose to 10.86% from 10.64%. **OnEMI** is least exposed; interest is only about 15% of its income.",
                },
                {
                    label: 'Not structural: one-offs in this quarter',
                    text: "**ICICI**'s 0.32% credit cost followed large recoveries; management puts normal at about 0.50%. **SBI** booked ₹220cr of tax-refund interest, switched government-business fees to accrual accounting and now spreads bulk expenses over three quarters, which muddies quarter-on-quarter comparisons. **Manba**'s profit rose 20% on the quarter only because its tax rate fell to 18% from 34%; profit before tax fell. **Northern Arc**'s Q4 credit cost was flattered by reversing an RBI-ordered provision (about ₹120cr underlying against ₹87cr reported). **My view: normalise credit costs before trusting this year's profit growth.**",
                },
                {
                    label: 'Funding: loans outrunning deposits',
                    text: "**SBI**'s loans grew 18.6% and its deposits 9.7%; its borrowings rose 43%. **ICICI**'s loans grew 19.6% against deposits of 14.0%, and its liquidity cover fell to 124% from 128%. **HDFC Bank**'s loans now equal about 96% of its deposits, and bulk deposits rose to 20% of the total. The FCNR(B) window helped (SBI expects about $10 billion; ICICI's costs 6.3–6.4% all-in), but it is a one-off. **Growing faster than deposits is the usual way a good bank's margin erodes.**",
                },
                {
                    label: 'Provisions: cover and buffers',
                    text: "**ICICI** has provided for 74.7% of its bad loans (76.2% in March 2025) and holds ₹13,100cr of contingency provisions plus ₹1,283cr the RBI ordered on part of its farm book. **SBI** covers 74.2%. **HDFC Bank** covers only 66%, but holds ₹37,000cr of floating and contingent provisions, about 1.25% of loans. **OnEMI**'s cover fell from 91.5% to 84.1% in 15 months, **Northern Arc**'s on early-overdue loans from 34% to 11% (an accounting change), and **Manba** covers only 26%, leaving net bad loans of 2.52%. **Falling cover is a quiet way to flatter profit.**",
                },
                {
                    label: 'Hidden losses: write-offs and guarantees',
                    text: "**Northern Arc** writes off unsecured loans at 90 days unpaid: ₹694cr in FY26 on about ₹12,800cr of standalone loans, far more than its 1% bad-loan ratio suggests. **OnEMI** wrote off ₹473cr on an own book of about ₹3,500–3,600cr and books first-loss payments to partners as operating costs; its CFO said that 'probably' adds about a point to the 6.8% credit cost. **Manba**'s own-book bad loans were 3.60% at March, against the 3.33% it reports on all managed loans. **Judge the non-banks on losses including write-offs and guarantees.**",
                },
                {
                    label: 'Capital: who must raise',
                    text: "**ICICI** (core capital 16.2%) and **HDFC Bank** (17.4%) fund growth from profit. **SBI** raised ₹25,000cr in July 2025, which with retained profit lifted core capital from 10.8% to 12.9%, and sold 6.3% of SBI Funds Management in July. **Northern Arc** (22.7%) needs no equity for two years, it says. **OnEMI** (40.2%) and **Manba** (24.4%) are issuing ₹832cr and ₹100cr of new shares. **A share sale soon after saying capital is ample is a signal worth weighing.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Capital and liquidity'],
                    rows: [
                        ['ICICI Bank', 'Deposits will not constrain loans; ECL ‘well absorbed’ by buffers', 'Core capital 16.19%; liquidity cover 124%'],
                        ['HDFC Bank', 'Loan-to-deposit ratio ‘not a constraint’; ECL effect ‘nothing material’', 'Core capital 17.4%; ₹37,000cr spare provisions'],
                        ['State Bank of India', 'No costly bulk deposits; capital enough for about ₹12 lakh crore of loans; ECL number in Q2', 'Core capital 12.89% (June); capital adequacy 16.09% (September); borrowings +43%'],
                        ['Northern ARC Capital', 'Spare liquidity about ₹1,300cr; no equity for two years', 'Capital adequacy 22.7%; debt 3.1x equity'],
                        ['OnEMI Technology', '‘Comfortably capitalized’ (May); borrowing cost down at least 1 point in three quarters', '40.2%; ₹832cr share issue approved 17 September'],
                        ['Manba Finance', 'Equity ‘by September or latest by October’; gearing below 4x', '24.40%; ₹99.99cr issue at ₹135 approved 22 September'],
                    ],
                    note: 'Core capital is common equity tier 1 (banks); capital adequacy is the total ratio (non-banks; OnEMI’s is its lending subsidiary’s).',
                },
            ],
        },
        {
            heading: '6. Growth and capital (comparative)',
            body: [
                "Where the next five years of growth come from, how each lender did against what it promised on the Q4 call, and my own estimate of earnings growth. For a lender, growth needs capital and funding: every rupee lent must be backed by some of its own money and by a deposit or a borrowing.",
            ],
            points: [
                {
                    label: 'Growth driver: company and business credit',
                    text: "Bank credit to industry grew 20% in July (RBI), against 6.5% a year earlier. **ICICI**'s corporate loans grew 18.5% and business banking 28.2%; **HDFC Bank**'s 18.6% and 22.3%; **SBI**'s small-business loans 22.3%, and SBI says undrawn loans and its pipeline exceed ₹9 lakh crore. The catch is price: corporate spreads are thin, and HDFC Bank's higher-margin retail book grew only 7.2%. **This growth adds less profit per rupee than retail did.**",
                },
                {
                    label: 'Growth driver: gold, rural and careful retail',
                    text: "**SBI**'s personal gold loans nearly doubled to ₹1.25 lakh crore, and **ICICI**'s rural book, much of it gold, grew 35.4%; ICRA expects organised gold loans to pass ₹30 lakh crore by March 2028. New RBI rules from April 2026 cap gold-loan values and push regular instalments, which ICRA says may raise overdues. Unsecured retail is growing carefully: ICICI's card book shrank 1.9%. **Gold loans lift loan growth more than profit.**",
                },
                {
                    label: 'Growth driver: non-banks in small loans',
                    text: "Crisil expects non-bank loans to grow 18–19% a year to over ₹50 lakh crore by March 2027. **Northern Arc**'s direct lending is 64% of its ₹16,855cr book (19% in FY21); **OnEMI** grew 61% to ₹8,001cr, 54% of it on partners' books; **Manba** grew 22% to ₹1,731cr and entered Karnataka through a partner. Co-lending rules from January 2026 let each partner keep as little as 10% of a loan. CRIF already warns that personal-loan underwriting is loosening.",
                },
                {
                    label: 'Growth driver: funding and capital',
                    text: "The $127.2 billion FCNR(B) window gave banks three-to-five-year money, with the RBI paying the currency-hedging cost. Banks' loans to non-banks rose 26.3% in FY26 after the RBI removed an extra risk weight on them, cheapening funding for **Northern Arc** and **Manba**. Capital is ample at the banks, though **SBI**'s ECL cost is a claim on it.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**ICICI** kept every Q4 promise with a number: core margin flat, credit cost inside 0.50%, costs up 10.4% against income up 12.7%, and loans up 19.6% against 15.8% in Q4. **SBI** held its 3.00% domestic margin, kept credit cost at 0.27% against a 0.50% guide and raised its loan guide to 14–15%. Each slipped on one item: ICICI has not released the ₹1,283cr farm provision it expected to update 'a quarter-or-so' later, and SBI deferred its ECL number to Q2.",
                },
                {
                    label: 'Cautious',
                    text: "**HDFC Bank** gave no number for loan growth, margin or credit cost on either call. Its CFO said funding costs would not change 'in a hurry', and it calls getting cheap deposits back near 38% a 'medium to long term' journey.",
                },
                {
                    label: 'Missed',
                    text: "**Manba** said in May it would not borrow at a higher price; its average cost rose to 10.86%. It guided 35–40% loan growth for FY27 (its May rupee target already implied that, despite its 25–30% wording) and grew 1% in Q1, leaving about ₹570–670cr to add in nine months. Its margin was 12.13% against a 13–14% target, and its 3.5% return-on-assets goal compares with about 2.7% in Q1.",
                },
                {
                    label: 'Mixed',
                    text: "**OnEMI** beat on growth, return on assets (5.05%) and credit cost (6.80%, from 8.85%), but bad loans hit exactly its 2.25% ceiling, cheaper funding slipped to the second half and May's 'comfortably capitalized' became a share sale. **Northern Arc** beat on credit cost (2.6%), but its margin fell to 9.3%, its growth guide was trimmed to 22–23% from 22–25%, and '3 plus' return on assets became 'closer to 3%'. **HDFC Bank** beat its business-banking range (22.3% against 18–21%) but its margin and return on assets fell.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect ICICI to compound earnings at about 13%, SBI at about 10% and HDFC Bank at about 10%.** ICICI's assumes credit cost normalises near 0.5%; HDFC Bank's is lower because profit is lagging its balance sheet (5% reported, 9.8% adjusted in Q1) and assumes only that the margin steadies as bonds roll off and a new CEO keeps the franchise on course; SBI's allows for credit cost rising from a low base. Among non-banks, **OnEMI** at about 19% (after about 15% more shares and losses above its headline credit cost), **Northern Arc** at about 14% (a soft Q1 and a trimmed growth guide) and **Manba** at about 12% (after its share issue and with borrowing costs rising), all resting on loans not yet tested by a downturn.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['ICICI Bank', 'Loans in the mid-teens; core margin held; credit cost back to ~0.5%', '9% / **13%** / 17%'],
                        ['HDFC Bank', 'Bonds replaced by deposits; margin steadying; leadership change', '6% / **10%** / 13%'],
                        ['State Bank of India', 'Loans 14–15%; 3% domestic margin; credit cost and ECL rising', '4% / **10%** / 14%'],
                        ['Northern Arc', 'Direct lending; margin toward 10%; spare capital used', '8% / **14%** / 19%'],
                        ['OnEMI', 'Loan growth; lower credit and funding cost; falling yields; new shares', '10% / **19%** / 25%'],
                        ['Manba Finance', 'New states and products; share issue dilutes; funding cost', '6% / **12%** / 17%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capital and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capital', 'Track record'],
                    rows: [
                        ['ICICI Bank', 'Margin ‘range bound’; credit cost about 0.5% normalised', 'Core capital 16.2%', '**Delivered**: core margin 4.28%, credit cost 0.32%; farm provision still held, cards −1.9%'],
                        ['HDFC Bank', 'No loan or margin number; in Q2, margin ‘at the bottom’ and rising from Q3; liquidity cover kept at 110–120%', 'Core capital 17.4%', '**Mixed**: business banking +28% in Q2; margin 3.26% (Q1) → 3.16% (Q2); cheap deposits flat at 32%'],
                        ['State Bank of India', 'Loans 14–15% (raised from 13–15%); domestic margin about 3%; credit cost within 0.5%', 'Core capital 12.9% after ₹25,000cr raise', '**Delivered**: margin 3.00% then 3.11%; credit cost 0.27% then about 0.22%; ECL hit ₹19,500cr after tax, disclosed in Q2'],
                        ['Northern ARC Capital', 'Loans 22–23% (from 22–25%); margin 9.5% next quarter, about 10% by March', '22.7%; no equity for two years', '**Slipping**: margin 9.8% → 9.3%, profit −14% on the quarter; credit cost beat'],
                        ['OnEMI Technology', 'AUM growth raised to 60% plus (Q2 call, from 40% plus); impairment cost down more than 15%; return on equity above 20%; bad loans below 2.25%', '₹832cr preferential issue completed (Q2)', '**Beat** (Q2): AUM +68%, profit doubled, credit cost 6.2%, bad loans 2.18%, borrowing cost down about 0.7 points'],
                        ['Manba Finance', 'Loans 35–40%; return on assets about 3.5%; margin 13–14%', '24.4%; ₹100cr issue at ₹135', '**Missed**: loans +1% on the quarter; borrowing cost up to 10.86%'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports, rating reports and news rather than from the calls.",
            ],
            points: [
                {
                    label: 'Leadership: a year of change at HDFC Bank',
                    text: "**HDFC Bank**'s chairman, CEO and CFO all change within about eight months; Anup Bagchi, MD & CEO of ICICI Prudential Life, took over as CEO on 27 October, and Deputy MD Kaizad Bharucha, who runs the loan book, retires early at the end of December. The Supreme Court has issued notice on an appeal against the Bombay High Court's order quashing the Lilavati Trust case against the CEO, and hinted a limited inquiry may be allowed. Dubai's regulator has barred its DIFC branch from taking new clients for some services since September 2025, and its annual report shows the audit trail on its core banking system switched on only from March 2026. At **ICICI**, the CEO was extended only to October 2028, so succession is deferred, not settled.",
                },
                {
                    label: 'Accounting, controls and governance at the smaller lenders',
                    text: "**Northern Arc**'s auditor says FY25 and FY26 provisions are 'strictly not comparable', after an RBI e-mail made it ignore partners' first-loss guarantees (an ₹80cr hit) and a February 2026 rule let them count again; the same report flags ₹2.09cr taken by staff at its microfinance arm. **OnEMI** books first-loss payments outside credit cost. **Manba** is family-run: the MD, his wife and son drew ₹4.50cr in FY26, about a tenth of profit, and it pays ₹3.21cr of rent to a company with a common director. **Read these lenders' notes, not just their headlines.**",
                },
                {
                    label: 'Bad loans turning',
                    text: "**SBI**'s gross bad loans rose ₹820cr in Q1, and early-overdue large loans (61–90 days, 'SMA-2') nearly doubled to ₹1,687cr; farm loans carry a 7.03% bad-loan ratio. Management calls this seasonal. **HDFC Bank** flags El Niño for Q3 farm loans; **ICICI**'s fastest books (business banking +28%, rural +35%) are untested at this size. **OnEMI**'s collection efficiency slipped to 96.82% from 97.9%; **Northern Arc**'s overdue loans rose to 1.2% from 0.3% in two years against ICRA's 3% trigger; **Manba**'s recovery on repossessed vehicles fell from 90% to 84%.",
                },
                {
                    label: 'Funding and rates',
                    text: "If the RBI raises rates in October or December, non-banks that borrow from banks pay more within a quarter or two. **OnEMI** pays about 14.45% and says a rating upgrade helps only from FY28; **Manba** gets about 57% of its loans from banks and institutions from other non-banks (CARE). The FCNR(B) money is a one-off, so bank deposit growth will look weaker once it drops out, and **ICICI** and **SBI** already lean on bonds and borrowings.",
                },
                {
                    label: 'Regulation',
                    text: "ECL starts on 1 April 2027. **SBI** has twice put off giving its number; **ICICI** and **HDFC Bank** say buffers absorb it but give no figure. The RBI acts directly: it ordered **ICICI**'s ₹1,283cr provision after finding farm loans that broke priority-sector rules, and its e-mail cost **Northern Arc** ₹80cr. Any tightening of the 5% first-loss cap or the 125% risk weight on unsecured consumer loans would hit **OnEMI** first.",
                },
                {
                    label: 'Capital, dilution and sellers',
                    text: "**OnEMI**'s ₹832cr issue at ₹314.11 (vote on 14 October) cuts the founders' stake from 24.8% to about 21.6%, and its pre-listing lock-in should end around November (date not confirmed). **Northern Arc** has no promoter: on 31 August four foreign investors (Eight Roads, Accion, LeapFrog and Augusta) sold about 13% of it at ₹278 a share, and at September Augusta (13.8%) and LeapFrog (12.5%) still held about a quarter between them. At **Manba**, foreign investors cut their stake from 5.16% to 0.92% after listing and domestic funds sold out. **SBI** carries a ₹42,073cr pension shortfall.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **Price ÷ book** compares the market value with the shareholders' money in the business; a lender that earns a high return on equity for many years deserves a higher multiple. EV/EBITDA, used in other notes, does not work for lenders, because borrowing is their raw material rather than a choice of financing.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **7% at 11x, 9% at 14x, 11% at 17x and 13% at 20x.**",
            ],
            points: [
                {
                    label: 'What price ÷ book adds',
                    text: "Price ÷ book should follow return on equity. **ICICI** has the highest multiple of the banks because it earns the most (17.1% in Q1 on its own figures); **SBI** the lowest because the market doubts its 16–18% will last a cycle; **HDFC Bank** sits between, on a return that has slipped to 13.8%. **OnEMI** carries the highest multiple of the non-banks for its 21% return, **Northern Arc** the lowest for its 11%. **OnEMI's and Manba's new shares are priced well above book value, so they raise book value per share even as they spread profit thinner.**",
                },
                {
                    label: 'Fits: the three banks',
                    text: "**SBI** needs only about {need:State Bank of India|6}% a year against my ~10%: the price assumes its return on equity falls well below today's, which would need a far bigger rise in bad loans than Q1's small uptick. **ICICI** needs about {need:ICICI Bank|11–12}% against my ~13%, because the market already pays for its quality. **HDFC Bank** needs about {need:HDFC Bank|9–10}% against my ~10%, the thinnest cushion of the three: it only just fits, so the price allows for a slow margin recovery but not for a messy succession or a further slide in returns.",
                },
                {
                    label: 'Fits on paper: the non-banks, discounted for a reason',
                    text: "**Northern Arc** needs about {need:Northern ARC Capital|7}% a year against my ~14%, **Manba** about {need:Manba Finance|9}% against my ~12% and **OnEMI** about {need:OnEMI Technology|13}% against my ~19%. The gaps are wide because the market discounts what the headlines hide: Northern Arc's accounting swing and private-equity selling, OnEMI's losses outside its credit-cost line and quick return to the market for capital, Manba's own-book bad loans and reliance on Maharashtra. **I would not buy any of them on the P/E alone.**",
                },
                {
                    label: 'P/E flatters lenders at the top of the credit cycle',
                    text: "Profit peaks when credit costs bottom, as now. If **SBI**'s credit cost rose from 0.27% to its own 0.50% guide, my rough estimate is that its yearly profit would be about a tenth lower; at **ICICI**, 0.32% to 0.50% would take off a few per cent. **OnEMI**'s guarantee payments sit in costs, and **Northern Arc**'s FY26 profit gained from a provision reversal. **Read every lender's P/E as a best-case multiple.**",
                },
                {
                    label: 'Dilution the P/E does not yet show',
                    text: "**OnEMI**'s issue adds about 15% more shares and **Manba**'s about 15% once its promoters' warrants convert (about 13% of each enlarged total). Both fund growth, but profit per share will lag profit for a year or two. My growth estimates for both are after this dilution.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'ICICI Bank', rank: 1, stance: 'COMPOUNDER', segment: BANKS,
            what: "India's second-largest private bank, lending to households, small businesses, farmers and companies, with life and general insurance, fund-management and broking companies.",
            view: "**The best-run big bank, priced for it.** Return on equity of 16–19% for four years, a core margin flat at 4.28% through rate cuts, loans up 19.6% and gross bad loans down to 1.38%. But Q1 profit growth of 15.9% rests on a 0.32% credit cost that management calls about 0.50% in a normal year, and deposits grew only 14%. The price needs about {need:ICICI Bank|11–12}% a year against my ~13%.",
            watch: 'Deposit growth closing the gap with loans; credit cost back toward 0.50%; release of the ₹1,283cr RBI-ordered farm provision.',
        },
        {
            company: 'HDFC Bank', rank: 2, stance: 'COMPOUNDER', segment: BANKS,
            what: "India's largest private bank, lending to households, small businesses and companies from about 9,700 branches; merged with HDFC Ltd, the mortgage lender, in 2023.",
            view: "**Clean loans, a franchise in transition.** In Q2 FY27 gross bad loans fell to 1.11%, credit cost was 0.44% and profit rose 4.7% (12.6% without trading gains), but the margin slipped again, to 3.16% on total assets (3.32% on earning assets), cheap deposits stayed at 32% and return on equity was 13.5%. Management says the margin has hit bottom and should rise from Q3 as October's rate rise reprices its floating loans, but liquidity cover of 113% leaves little room to lend faster than deposits grow. Anup Bagchi became CEO on 27 October and will set out his plan in about a month; the deputy MD, Kaizad Bharucha, leaves in December and the CFO in November, and a draft cut to insurance commissions would hit fee income. The price needs about {need:HDFC Bank|9}% a year against my ~10%, so it only just fits.",
            watch: 'Bagchi\'s plan for deposits and the balance sheet (due about late November); the margin rising in Q3 from 3.16%, as promised; cheap deposits back above 34%; the final insurance-commission rules.',
        },
        {
            company: 'State Bank of India', rank: 3, stance: 'CYCLICAL', segment: BANKS,
            what: "India's largest bank, mainly government-owned, with the largest deposit base and branch network, lending to households, farmers, small firms and big companies.",
            view: "**Cheap for a reason, but cheap enough.** Return on equity about 16% on filed figures (17.9% on its own measure), a 3.00% domestic margin, credit cost of 0.27% and loan-growth guidance raised to 14–15%. Against that, deposits grew 9.7% while loans grew 18.6% in Q1, bad loans rose in rupees, and the ECL rules will cost about ₹19,500cr after tax (disclosed in Q2, to be phased in). Q2 FY27 kept the case: domestic margin 3.11%, gross bad loans 1.39%, deposits +12.3%, though ₹7,288cr of the ₹23,038cr profit was a one-off stake sale (11 Nov 2026: stays own). The price needs about {need:State Bank of India|6}% a year against my ~10%.",
            watch: 'How the ₹19,500cr ECL hit is phased in from April 2027; early-overdue loans (up 15% in Q2, mostly repaid since); domestic margin at or above 3%; farm loans in the drought states.',
        },
        {
            company: 'Northern ARC Capital', rank: 4, stance: 'SCALEUP', segment: NBFC,
            what: "Northern Arc: a non-bank lender that started by lending to and raising money for other lenders and now mostly lends directly to consumers, small businesses and rural borrowers.",
            view: "**A good transition, a soft quarter and noisy accounts.** Direct loans are 64% of the book and gross bad loans 1%, but the margin fell to 9.3%, profit fell 14% on the quarter and return on equity is 11.5%. FY26 profit was helped by reversing an RBI-ordered provision, which its auditor flagged, and its private-equity holders are selling: about 13% went at ₹278 a share on 31 August, and Augusta and LeapFrog still held about 26% at September. The price needs about {need:Northern ARC Capital|7}% a year against my ~14%; I want to see the margin reach 9.5% first.",
            watch: 'Margin at 9.5% in Q2 and near 10% by March; overdue loans (1.2% at March) against ICRA’s 3% trigger; further block sales by Augusta (13.8%) and LeapFrog (12.5%).',
        },
        {
            company: 'OnEMI Technology', rank: 5, stance: 'SCALEUP', segment: NBFC,
            what: "OnEMI: runs Kissht, an app that makes digital personal loans in minutes, plus loans against property; more than half its loans sit on partner lenders' books, with OnEMI covering first losses.",
            view: "**High returns, untested loans, more capital than promised.** Loans up 61%, return on assets 5.05% and credit cost down to 6.80%, but guarantee payments add about a point of losses outside that figure, bad loans sit at its 2.25% ceiling and cover has fallen to 84%. Four months after listing it approved an ₹832cr share sale, having said in May it was comfortably capitalised. Q2 (call of 29 Oct 2026) was better on every count: AUM ₹9,317cr (+68%), profit ₹125cr (doubled), return on assets 5.78%, credit cost 6.2%, bad loans 2.18% and borrowing cost down to 13.76%; the FY27 growth guide was raised to 60% plus, and the ₹832cr preferential issue was completed. The price needs about {need:OnEMI Technology|13}% a year against my ~19%; I still want a full credit cycle before owning, and growth at 60% makes that test harder, not easier.",
            watch: 'Bad loans and collections as AUM grows 60% plus; borrowing cost down a point by March 2027 (13.76% from 14.45% so far); RBI rules on first-loss guarantees, which it will use more to grow partner books.',
        },
        {
            company: 'SG Finserve', rank: 6, stance: 'SCALEUP', segment: NBFC,
            what: "A four-year-old non-bank lender from the APL Apollo steel-tubes family that funds the dealers and suppliers of 52 large companies, paying the large company directly so the money cannot be diverted.",
            view: "**Fast, very profitable and clean so far, but untested.** The loan book grew 82% in a year to ₹4,552cr with no bad loans yet, it earns about 5% on its assets and runs on costs of about 1% of assets. Q2 FY27 (16 October call) kept the pace: the book reached about ₹5,700cr (up 25% in the quarter), profit was a record ₹59cr, still with no bad loans, and management now aims for about ₹7,000cr by March and 35–40% a year of profit growth. But it only began lending in late 2022, loans average ₹5–7cr each, about 30% of the book is outside supply chain finance, its top ratings lean on a guarantee from the promoters' holding company, and it has raised its borrowing limit from 3 to 4 times equity to keep growing without new shares. Added on 2 October 2026; my growth estimate comes with the next quarterly refresh.",
            watch: 'Bad loans staying near zero as the book heads for ₹7,000cr; the new digital, project and property loans outside supply chain finance; borrowings rising toward 4 times equity.',
        },
        {
            company: 'Paisalo Digital', rank: 7, stance: 'SCALEUP', segment: NBFC,
            what: "A 30-year-old non-bank lender making small secured loans to shopkeepers, vendors and other very small businesses, mostly in north and west India, through 422 branches and co-lending tie-ups with public-sector banks.",
            view: "**Good numbers, with pledges and dilution in the way.** A ₹6,707cr book growing 28% a year, reported bad loans of only 0.7% and a 33% capital cushion. But promoter-group companies have pledged a third or more of their shares to borrow against them, its ratings come only from two smaller agencies, ₹370cr of foreign bonds convert far below the market price (about 8% dilution), and June-quarter lending more than doubled. Added on 2 October 2026; my growth estimate comes with the next quarterly refresh. 30 Oct 2026: stays wait after the Q2 call (22 Oct). The book grew 33% to ₹7,266cr, gross bad loans eased to 0.66%, collections were 98.3% and credit cost fell to 0.4%; but lending in H1 was 77% above last year, drought districts are being tightened, the capital cushion fell to 30.7%, the call said nothing on the pledges, and on 28 October another promoter-group company pledged 1.1% of the shares (₹79.6cr).",
            watch: 'The promoter pledges released; bad loans staying below 1% as H1’s 77% jump in lending seasons (0.66% at September); margins near the 6% guided; the bond conversion.',
        },
        {
            company: 'Manba Finance', rank: 8, stance: 'SCALEUP', segment: NBFC,
            what: "A small non-bank lender making two-wheeler loans through 1,700+ dealers (Q1 FY27 call), mainly in Maharashtra, Gujarat and Rajasthan, now adding three-wheeler, used-vehicle, personal, small-business and property loans.",
            view: "**Fast approvals, weak cushion, stretched targets.** The highest bad loans in the group (3.41% on managed loans, 3.60% on its own book), only 26% provided for, 57% of loans in Maharashtra and a flat Q1 book. Its ₹100cr issue at ₹135 (shares allotted to outside investors on 6 Nov 2026, so the promoters' stake is 69.1% until their warrants convert) restores capital but dilutes holders by about 13%, and its 3.5% return-on-assets target compares with about 2.7% in Q1. The price needs about {need:Manba Finance|9}% a year against my ~12%; loan quality is the reason to pass.",
            watch: 'Loans reaching ₹2,000cr by December; own-book bad loans below 3.7%; borrowing cost back under 10.8%.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Banks.** **ICICI Bank: own**, the best-run of the three, though its price already reflects that. **HDFC Bank: own**, for a clean book and a strong franchise at a price that asks for about the 10% I expect, while watching the leadership change closely. **State Bank of India: own**, for the price, knowing its profits follow the credit cycle.",
            "**Non-bank lenders.** **Northern ARC Capital: follow** until its margin and return on equity rise and its accounts settle. **OnEMI Technology: follow** until its loans have been through a downturn and its funding cost falls. **SG Finserve: follow** (added 2 October) until its clean book has been through a slowdown. **Paisalo Digital: wait** (added 2 October) until the promoter pledges are gone and bad loans stay low after its burst of lending. **Manba Finance: pass** on loan quality, concentration and capital.",
            "**What would change my view.** For the better: a smooth start for HDFC Bank's new CEO and a steadier margin; SBI disclosing a small ECL cost; Northern Arc's margin reaching 9.5–10%; a rating upgrade and cheaper borrowing for OnEMI. For the worse: bad loans rising in unsecured personal loans, which would hit OnEMI first; SBI's early-overdue loans turning bad; rate rises lifting non-bank funding costs; ICICI's deposits falling further behind its loans.",
            "**What to watch next quarter.** The banks' ECL estimates; how much FCNR money each bank raised and at what cost; Anup Bagchi's plan for HDFC Bank, due about a month after the 17 October call; the OnEMI and Manba share-issue votes on 14 and 19 October; Manba's festive-season growth.",
        ],
        bottomLine:
            "Own the big banks with the cheapest money (ICICI Bank, HDFC Bank, State Bank of India) while watching HDFC Bank's leadership change, follow the growing non-banks until their loans and accounts are tested (Northern ARC Capital, OnEMI Technology, SG Finserve), wait on Paisalo Digital until its promoter pledges are released, and pass on Manba Finance.",
    },

    sources: [
        { label: 'Filed quarterly results, balance sheets and ratios — Screener.in', url: 'https://www.screener.in/company/ICICIBANK/' },
        { label: 'RBI — Sectoral deployment of bank credit, July 2026', url: 'https://www.rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=63478' },
        { label: 'ICRA — Bank credit outlook, April 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=ca854669-9cc6-454f-a869-0463215ac30a' },
        { label: 'ICRA — Gold loans, July 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=edfc7b8a-92e7-4f59-9480-0cdcb5b58172' },
        { label: 'CRIF High Mark — How India Lends, March 2026 data', url: 'https://www.crifhighmark.com/media/6802/how-india-lends-report-may-2026.pdf' },
        { label: 'India Ratings raises FY27 bank credit forecast (Free Press Journal, August 2026)', url: 'https://www.freepressjournal.in/business/india-ratings-raises-fy27-bank-credit-growth-forecast-to-15' },
        { label: 'Crisil on non-bank funding (ETV Bharat, April 2026)', url: 'https://www.etvbharat.com/en/business/nbfc-reliance-on-bank-borrowings-to-increase-in-fy27-on-lower-interest-rates-enn26041503457' },
        { label: 'FADA — FY2026 vehicle retail data', url: 'https://fada.in/images/press-release/169d329fc83770FADA%20releases%20FY%202026%20and%20March%202026%20Vehicle%20Retail%20Data.pdf' },
        { label: 'HDFC Bank — Q1 FY27 earnings presentation', url: 'https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/pdf/about-us/financial-results/2026-2027/quarter-1/q1fy27-earnings-presentation.pdf' },
        { label: 'HDFC Bank — Integrated Annual Report FY26', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/7d621500-082a-4342-b98d-ba677d3890c5.pdf' },
        { label: 'HDFC Bank CEO search (Business Today, 31 August 2026)', url: 'https://www.businesstoday.in/latest/corporate/story/hdfc-bank-fast-tracks-ceo-search-who-could-succeed-jagdishan-as-more-names-crop-up-552387-2026-08-31' },
        { label: 'ICICI Bank — Q1 FY27 earnings call transcript', url: 'https://www.icici.bank.in/content/dam/icicibank/india/managed-assets/docs/about-us/2027/transcript-for-earnings-call-held-on-july-18-2026.pdf' },
        { label: 'ICICI Bank — Annual Report FY26', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/01c30537-c969-4503-bbae-a07d51eb09a5.pdf' },
        { label: 'State Bank of India — Q1 FY27 analyst presentation', url: 'https://sbi.bank.in/documents/17836/1275616/07082026_SBI+Analyst+Presentation+Q1FY27.pdf/6e4ca530-1666-574e-22fb-f9e19d553ef5?t=1786091443352' },
        { label: 'State Bank of India — Annual Report FY26', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/faa17496-838f-432d-a39f-32d82156799c.pdf' },
        { label: 'Northern Arc — Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5b11382c-9205-410b-bf86-d7f8aa9f103b.pdf' },
        { label: 'Northern Arc — Annual Report FY26', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/f0e0defd-daac-4824-a304-e8059784c3e8.pdf' },
        { label: 'ICRA — Northern Arc rating rationale, August 2026', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?Id=144811' },
        { label: 'OnEMI Technology — Annual Report FY26', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ce460d74-296e-4e23-9ccc-b982df328b01.pdf' },
        { label: 'CRISIL — Si Creva Capital Services (OnEMI) rating rationale, February 2026', url: 'https://www.crisilratings.com/mnt/winshare/Ratings/RatingList/RatingDocs/SiCrevaCapitalServicesPrivateLimited_February%2013_%202026_RR_374805.html' },
        { label: 'OnEMI ₹832cr preferential issue (Business Today, 18 September 2026)', url: 'https://www.businesstoday.in/markets/stocks/story/onemi-technology-shares-in-focus-as-board-clears-fund-raising-via-preferential-route-556324-2026-09-18' },
        { label: 'Manba Finance — Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fc39c7f3-2383-4a67-a956-9abd915e8725.pdf' },
        { label: 'CARE Ratings — Manba Finance rationale, May 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202605120531_Manba_Finance_Limited.pdf' },
    ],
};
