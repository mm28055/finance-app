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
            'HDFC Bank': 12,
            'State Bank of India': 10,
            'Northern ARC Capital': 16,
            'OnEMI Technology': 22,
            'Manba Finance': 15,
        },
    },
    standfirst:
        "Six lenders: India's three biggest banks and three non-bank lenders. ICICI Bank, HDFC Bank and State Bank of India take deposits from savers and lend to everyone. Northern Arc lends to small businesses and consumers directly and through other lenders; OnEMI (the Kissht app) makes digital personal loans, many of them on partner lenders' books; Manba Finance makes two-wheeler loans through vehicle dealers. Lenders are measured differently from the companies in other notes: on lending margin, bad loans, return on equity and how much they borrow against their own money, and valued on price ÷ book. Every chart uses filed results and five years of history.",
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
                grades: { funding: { grade: 'A', note: 'Deposits up 14%; cost of deposits 4.41%' }, reach: { grade: 'A', note: 'National branches plus insurance, funds, broking' }, risk: { grade: 'A', note: 'Gross bad loans 1.38%, credit cost 0.32%' }, capital: { grade: 'A', note: 'Capital adequacy 16.8%' }, gov: { grade: 'A', note: 'Clear, consistent disclosure' } } },
            { company: 'HDFC Bank', trend: 'stable', trendNote: 'Growing faster again, but cheap deposits are 34% of the total against a 38–40% target.',
                grades: { funding: { grade: 'B', note: 'Cheap deposits 34%, below pre-merger 40%' }, reach: { grade: 'A', note: 'About 9,700 branches; 100m+ customers' }, risk: { grade: 'A', note: 'Gross bad loans 1.17%' }, capital: { grade: 'A', note: 'Assets 7.8x net worth' }, gov: { grade: 'A', note: 'Clear disclosure' } } },
            { company: 'State Bank of India', trend: 'stable', trendNote: 'Domestic margin held at 3.0%; loan growth guided at 14–15%; building a collection force before growing riskier loans.',
                grades: { funding: { grade: 'A', note: 'Largest deposit base in India' }, reach: { grade: 'A', note: 'Largest branch network' }, risk: { grade: 'B', note: 'Clean now; hit hardest in past bad-loan cycles' }, capital: { grade: 'B', note: 'Assets 14x net worth' }, gov: { grade: 'B', note: 'Government-owned' } } },
            { company: 'Northern ARC Capital', trend: 'widening', trendNote: 'Direct loans now 64% of the book; margin guided up from 9.3% to about 10%.',
                grades: { funding: { grade: 'B', note: 'Cost of funds 8.46%' }, reach: { grade: 'B', note: 'Partner network plus its own branches' }, risk: { grade: 'B', note: 'Gross bad loans 1%; credit cost 2.6%' }, capital: { grade: 'A', note: 'Capital adequacy 22.7%' }, gov: { grade: 'B', note: 'Clear targets; tracked them' } } },
            { company: 'OnEMI Technology', trend: 'widening', trendNote: 'Credit cost down from 8.85% to 6.80% of AUM as it moves to safer borrowers.',
                grades: { funding: { grade: 'C', note: 'Borrows at about 13–14%' }, reach: { grade: 'B', note: 'App-based; 45+ partner lenders' }, risk: { grade: 'C', note: 'Unsecured; credit cost 6.8% of AUM' }, capital: { grade: 'A', note: 'Capital adequacy 40%' }, gov: { grade: 'B', note: 'Listed May 2026; first-loss guarantees to watch' } } },
            { company: 'Manba Finance', trend: 'stable', trendNote: 'Growing, but capital is shrinking and a preference-share raise is planned.',
                grades: { funding: { grade: 'C', note: 'Borrowing cost 10.86%' }, reach: { grade: 'B', note: '1,700+ vehicle dealers' }, risk: { grade: 'C', note: 'Gross bad loans 3.41%; thin provisions' }, capital: { grade: 'C', note: 'Capital adequacy down to 24.4%' }, gov: { grade: 'B', note: 'Small; collects in-house' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own ICICI Bank and HDFC Bank; own SBI for the cheap price.** ICICI earns the best returns of the big banks (15–19% on equity for five years), grew loans nearly 20% and is still cutting bad loans; its price asks for about the growth I expect. HDFC Bank is still digesting its 2023 merger with HDFC Ltd, which lowered its return on equity from 17% to 14%, but its loans are clean and it is growing again; the price asks for less than I expect. SBI earns 16% on equity now and is priced as if that will not last; that is a fair worry for a government bank whose profits collapsed in the last bad-loan cycle, but the price already allows for it.",
                "**Follow Northern Arc and OnEMI.** Northern Arc has turned itself from a lender to other lenders into a direct lender with a 9.3% margin and low bad loans, but it earns only 11% on equity because it holds so much spare capital. OnEMI (Kissht) earns about 21% on equity and grew its loans 61%, but its loans are unsecured, it listed only in May 2026, and it has not been tested by a bad credit cycle.",
                "**Pass on Manba Finance.** A small two-wheeler lender with the highest bad loans in the group, thin provisions against them, falling capital and a share issue coming.",
                "**Two things to hold onto before reading the rest.** First, **cheap money wins**: the banks pay far less for their money than the non-banks, which is why they can lend at 3–4% margins and still earn 14–16% on equity. Second, **a lender's profit is only as good as its bad loans**: the numbers look best just before a credit cycle turns, so the quality of the loans matters more than this year's growth.",
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
                "Lenders borrow money and lend it at a higher rate. The profit is the gap, less running costs and loans that go bad.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Savers and bond investors → **banks** (deposits) and **non-banks** (bank loans and bonds) → households and businesses. Some non-banks, like OnEMI and Northern Arc, also find borrowers for other lenders and earn a fee. **The profit sits with whoever has the cheapest money and the best judgement of who will repay.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Home, car and personal loans as incomes rise; small businesses moving from informal to formal credit; companies borrowing for new plants. SBI expects loans to grow 14–15% this year, in line with the economy's growth in rupees.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**The rate cycle and the bad-loan cycle.** When the Reserve Bank cuts rates, banks' loan rates fall faster than their deposit costs, squeezing margins for a few quarters, as in 2025. When the economy weakens, bad loans rise and provisions eat profit; unsecured personal loans and microfinance go bad first. Regulation matters too: the Reserve Bank sets how much capital lenders must hold and is moving banks to expected-loss provisioning from April 2027.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**ICICI** and **HDFC Bank** on winning cheap deposits; **SBI** on keeping bad loans low as it grows; **Northern Arc** on its direct-lending margin; **OnEMI** on its lending models holding up in a downturn; **Manba** on two-wheeler demand and raising capital. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Kind', 'Who', 'Lending margin (FY26)', 'Return on equity (FY26)', 'Gross bad loans (Q1 FY27)'],
                    rows: [
                        ['Banks', 'ICICI, HDFC, SBI', '2.4–3.9%', '14–16%', '**1.2–1.5%**'],
                        ['Non-banks', 'Northern Arc, OnEMI, Manba', '10–12%', '11–24%', '**1.0–3.4%**'],
                    ],
                    note: 'Lending margin is income minus interest paid ÷ average assets; OnEMI’s is not comparable and is left out of the range.',
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
                    text: "**SBI**, **HDFC Bank** and **ICICI Bank** fund themselves from millions of savers. No non-bank can match that cost, and deposits stay put in a panic in a way bond money does not.",
                },
                {
                    label: 'Lasting but narrower: knowing a niche',
                    text: "**Northern Arc** has years of data from lending to other lenders, which it now uses to lend directly; **Manba** gets borrowers through 1,700+ vehicle dealers and approves most loans within a minute.",
                },
                {
                    label: 'Unproven: models not yet tested by a downturn',
                    text: "**OnEMI**'s lending models have cut its loan losses as it moved to safer borrowers, but they have not been through a bad credit cycle as a listed company.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Kotak Mahindra**, **Axis Bank** and the other state banks; **Bajaj Finance**, **Shriram Finance** and **Cholamandalam** among non-banks; fintech lenders and bank partnerships in digital personal loans.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "For a lender the margin is the gap between what it earns on loans and what it pays for money. Are these margins structural?",
            ],
            points: [
                {
                    label: 'Structural: cheap deposits',
                    text: "**ICICI**'s reported margin was 4.36% in Q1 FY27 (4.28% without a one-off tax-refund benefit), the best of the three banks. **SBI** held its domestic margin at 3.0%. **HDFC Bank**'s margin (about 3.4%, as put by an analyst on the call) has fallen since the merger brought in expensive bond funding; it wants cheap deposits back to 38–40% of the total from 34%.",
                },
                {
                    label: 'Higher but riskier: non-bank margins',
                    text: "**Northern Arc**'s margin has widened to 9.3% as direct loans grew, and it guides about 10% by March 2027; its credit cost is 2.6%. **Manba** guides 13–14% but pays 10.86% for its money. **OnEMI** charges most and loses most: credit cost was 6.80% of AUM, down from 8.85% a year ago.",
                },
                {
                    label: 'The rate cycle',
                    text: "The 2025 rate cuts lowered the banks' loan rates before their deposit costs, which is why their income grew only 1–8% a year while loans grew much faster. ICICI's cost of deposits fell from 4.85% to 4.41% over the year; HDFC Bank's cost of funds is down about 0.4 points.",
                },
                {
                    label: 'Provisions: the real test',
                    text: "The banks have set aside two-thirds to three-quarters of their bad loans; **Manba** about a quarter, which leaves net bad loans of 2.52%, six to seven times the banks'.",
                },
            ],
        },
        {
            heading: '6. Growth and capital (comparative)',
            body: [
                "Where the next five years of growth come from, how each lender has done against what it promised, and my own estimate of earnings growth. For a lender, growth needs capital: every rupee lent must be backed by some of its own money.",
            ],
            points: [
                {
                    label: 'Growth driver: loans to households and businesses',
                    text: "**ICICI** grew loans 19.6% in the year to Q1 FY27; **SBI** over 18%, guiding 14–15% for the year; **HDFC Bank** is growing again after holding back post-merger, with business-banking loans up 22.3%.",
                },
                {
                    label: 'Growth driver: direct and digital lending',
                    text: "**Northern Arc** grew its book 26% to ₹16,855cr; **OnEMI** 61% to ₹8,001cr; **Manba** 22% to ₹1,731cr, guiding 35–40%.",
                },
                {
                    label: 'Capital to grow',
                    text: "**OnEMI** (40.2% capital adequacy in its lending arm) and **Northern Arc** (22.7%, with no new shares needed for two years, it says) have plenty. **ICICI** has 16.8%. **Manba**'s has fallen from 29.8% to 24.4% and it plans to raise ₹100cr in preference shares by October.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**ICICI** kept its margin up despite rate cuts; **SBI** held its 3% domestic margin; **OnEMI** cut its credit cost as promised; **Northern Arc** met its direct-lending target.",
                },
                {
                    label: 'Mixed',
                    text: "**HDFC Bank** is growing again but its cheap-deposit share slipped to 34%.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect ICICI to compound earnings at about 13%, HDFC Bank at about 12% and SBI at about 10%.** Among non-banks, **OnEMI** at about 22% (after dilution from its listing), **Northern Arc** at about 16% and **Manba** at about 15% (after its share issue).",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['ICICI Bank', 'Loan growth; margin held; low credit cost', '9% / **13%** / 17%'],
                        ['HDFC Bank', 'Cheap deposits rebuilt; margin recovering', '8% / **12%** / 16%'],
                        ['State Bank of India', 'Loans 14–15%; margin under pressure; provisions from a low base', '4% / **10%** / 14%'],
                        ['Northern Arc', 'Direct lending; margin widening; spare capital used', '8% / **16%** / 22%'],
                        ['OnEMI', 'Loan growth; lower credit cost and funding cost', '5% / **22%** / 32%'],
                        ['Manba Finance', 'New states and products; share issue dilutes', '5% / **15%** / 22%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into four groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'Bad loans turning',
                    text: "Unsecured personal loans and small-business loans go bad first in a slowdown. **OnEMI**'s book is mostly unsecured and it covers the first losses on partners' loans; **Northern Arc** has 34% of its book in consumer loans and some microfinance; **Manba**'s new personal and small-business loans are unseasoned. Management at all three pointed to falling loan losses; none has yet been through a downturn at its current size.",
                },
                {
                    label: 'Funding and rates',
                    text: "Non-banks borrow from banks and bond markets, which can dry up in a panic, as in 2018. **OnEMI** pays about 13–14% for its money and hopes a better credit rating will lower it; **Manba** pays 10.86%. The banks are competing hard for deposits and are raising foreign-currency (FCNR) deposits from Indians abroad to top up.",
                },
                {
                    label: 'Regulation',
                    text: "Banks move to expected-loss provisioning from April 2027, which means setting money aside earlier. The Reserve Bank can tighten rules on digital lending and first-loss guarantees at any time, which would hit **OnEMI** hardest.",
                },
                {
                    label: 'Capital and dilution',
                    text: "**Manba** must raise equity to keep growing; **OnEMI**'s listing added about ₹850cr of new equity, which lowers its return on equity for a while. **SBI** is government-owned, so its lending can be steered by policy.",
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
                    text: "**ICICI** trades at the highest multiple of the banks because it earns the highest return on equity; **SBI** at the lowest because the market doubts its 16% will last. **Northern Arc** trades close to its book value because it earns only 11% on equity.",
                },
                {
                    label: 'Reasonable',
                    text: "All six prices ask for no more growth than I expect. For the three non-banks, the risk to the loans is the reason I stop short of owning them.",
                },
                {
                    label: 'Cheapest',
                    text: "**SBI** and **Northern Arc** ask for the least growth; **HDFC Bank** asks for less than its balance sheet is growing.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'ICICI Bank', rank: 1, stance: 'COMPOUNDER', segment: BANKS,
            what: "India's second-largest private bank, lending to households, small businesses, farmers and companies, with life and general insurance, fund-management and broking companies.",
            view: "**The best-run big bank.** Return on equity of 15–19% for five years, a 4.36% margin kept up through rate cuts, loans up 19.6% and bad loans still falling to 1.38%. The price asks for about my ~13% estimate.",
            watch: 'Margin as foreign-currency deposits cost more; credit cost from its 0.32% low; loan growth.',
        },
        {
            company: 'HDFC Bank', rank: 2, stance: 'COMPOUNDER', segment: BANKS,
            what: "India's largest private bank, lending to households, small businesses and companies from about 9,700 branches; merged with HDFC Ltd, the mortgage lender, in 2023.",
            view: "**Clean loans, still digesting the merger.** Bad loans are 1.17%, but return on equity fell from 17% to 14% and cheap deposits are 34% of the total against a 38–40% target. The price asks for less than my ~12% estimate.",
            watch: 'Cheap deposits back toward 38–40%; margin; return on equity recovering.',
        },
        {
            company: 'State Bank of India', rank: 3, stance: 'CYCLICAL', segment: BANKS,
            what: "India's largest bank, mainly government-owned, with the largest deposit base and branch network, lending to households, farmers, small firms and big companies.",
            view: "**Cheap for a reason, but cheap enough.** Return on equity about 16%, bad loans at 1.47% and a 3% domestic margin held, but it earned 12% on equity in FY22 and far less in the last bad-loan cycle; its profits follow the credit cycle. The price asks for well under my ~10% estimate.",
            watch: 'Domestic margin above 3%; new bad loans; the move to expected-loss provisioning.',
        },
        {
            company: 'Northern ARC Capital', rank: 4, stance: 'SCALEUP', segment: NBFC,
            what: "Northern Arc: a non-bank lender that started by lending to and raising money for other lenders and now mostly lends directly to consumers, small businesses and rural borrowers.",
            view: "**A good transition, ordinary returns so far.** Direct loans are 64% of the book, the margin is 9.3% and rising, and bad loans are 1%. But it earns only 11% on equity because it holds so much capital. The price asks for well under my ~16% estimate; I want to see return on assets reach 3% first.",
            watch: 'Margin toward 10%; return on assets toward 3%; consumer and microfinance loan losses.',
        },
        {
            company: 'OnEMI Technology', rank: 5, stance: 'SCALEUP', segment: NBFC,
            what: "OnEMI: runs Kissht, an app that makes digital personal loans in minutes, plus loans against property; many loans sit on partner lenders' books, with OnEMI covering first losses.",
            view: "**High returns, untested loans.** Return on equity about 21%, loans up 61% and loan losses falling, but the book is unsecured and it listed only in May 2026. The price asks for less than my ~22% estimate; I want a full credit cycle before owning.",
            watch: 'Credit cost staying near 6.8% of AUM; funding cost after a rating upgrade; rules on first-loss guarantees.',
        },
        {
            company: 'Manba Finance', rank: 6, stance: 'SCALEUP', segment: NBFC,
            what: "A small non-bank lender making two-wheeler loans through 1,700+ dealers, mainly in western India, now adding three-wheeler, used-vehicle, personal and small-business loans.",
            view: "**Fast approvals, weak cushion.** The highest bad loans in the group (3.41% gross, 2.52% net), capital adequacy down to 24.4% and a share issue coming, in a commodity product. The price asks for less than my ~15% estimate; loan quality is the reason to pass.",
            watch: 'Net bad loans; the ₹100cr preference-share raise; losses on new products.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Banks.** **ICICI Bank: own.** **HDFC Bank: own.** **State Bank of India: own**, for the price, knowing its profits follow the credit cycle.",
            "**Non-bank lenders.** **Northern ARC Capital: follow** until its return on equity rises. **OnEMI Technology: follow** until its loans have been through a downturn. **Manba Finance: pass** on loan quality and capital.",
            "**What would change my view.** For the better: HDFC Bank's cheap deposits back near 38–40%; Northern Arc's return on assets reaching 3%. For the worse: bad loans rising in unsecured personal loans, which would hit OnEMI first; SBI's margin slipping below 3%.",
            "**What to watch next quarter.** Bank margins as foreign-currency deposits come in; credit costs at the three non-banks; Manba's share issue.",
        ],
        bottomLine:
            "Own the big banks with the cheapest money (ICICI Bank, HDFC Bank, State Bank of India), follow the growing non-banks until their loans are tested (Northern ARC Capital, OnEMI Technology), and pass on Manba Finance.",
    },

    sources: [
        { label: 'Filed quarterly results, balance sheets and ratios — Screener.in', url: 'https://www.screener.in/company/ICICIBANK/' },
        { label: 'Company earnings calls and presentations, Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
