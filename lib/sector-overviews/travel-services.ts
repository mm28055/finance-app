import { SectorOverview } from './types';
import { travelServicesBusinesses } from './travel-services-businesses';
import { travelValuationInputs } from './card-data/travel';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const GOVT = 'Government services — visas and citizen services';
const ONLINE = 'Online travel agents — a small cut of every booking';
const FULL = 'Travel, forex and resorts — a mix of businesses';

export const travelServices: SectorOverview = {
    sector: 'Travel Services',
    title: 'Travel Services',
    format: 'ranked',
    businesses: travelServicesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: travelValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'BLS International': 13,
            'Le Travenues Techno': 20,
            'Yatra Online': 15,
            'Thomas Cook India': 10,
        },
    },
    standfirst:
        "Four companies that earn money when people travel, in very different ways. BLS International runs visa and passport centres for governments and is paid a fee by every applicant. ixigo and Yatra are online travel agents that take a small cut of each ticket or hotel booking. Thomas Cook sells foreign exchange, holidays and resort stays. This year the Middle East conflict, airline capacity cuts and dearer jet fuel hit the booking businesses hard, while the visa business barely noticed. This update draws on each company's last two earnings calls, their presentations, FY26 annual reports and CRISIL's rating reports, which turned up audit gaps, disputed claims and a cut growth target that the calls barely mentioned. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener, consolidated), operating profit ÷ sales.',
            note: 'BLS earns 25–29%, driven by a visa business at about 40%. The booking businesses earn single digits on revenue, which for an online agent is already its commission, not the ticket price.',
            values: {
                'BLS International': [29, 29, 27, 25, 28],
                'Le Travenues Techno': [7, -2, 8, 6, 6],
                'Yatra Online': [11, 7, 9, 6, 7],
                'Thomas Cook India': [5, 5, 5, 4, 4],
            },
            cellNotes: {
                'Le Travenues Techno': 'Q2 FY26 negative on filed figures; the company reports a positive adjusted EBITDA for that quarter.',
                'Yatra Online': 'Q1 FY27: corporate-event (MICE) revenue lost to the Middle East conflict, and start-up costs for its Kanoo joint venture.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'The split is stark: BLS grew 25% in Q1; Thomas Cook and Yatra shrank as Middle East and long-haul travel collapsed.',
            values: {
                'BLS International': [44, 49, 43, 18, 25],
                'Le Travenues Techno': [74, 37, 32, 8, 13],
                'Yatra Online': [108, 48, 9, -14, -10],
                'Thomas Cook India': [14, 3, 4, -10, -13],
            },
            cellNotes: {
                'BLS International': 'Includes acquisitions, such as iDATA in visas and Atyati in banking services.',
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
            note: 'BLS has earned 22–33% for five years. The others have earned single digits or mid-teens since the pandemic.',
            values: {
                'BLS International': [22, 32, 31, 33, 30],
                'Le Travenues Techno': [-9, 8, 7, 13, 7],
                'Yatra Online': [-7, 14, 4, 5, 7],
                'Thomas Cook India': [-11, 5, 19, 19, 15],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days.',
            note: 'Yatra’s long cycle comes from credit given to corporate customers. Consumer-facing businesses collect before they pay suppliers.',
            values: {
                'BLS International': [10, 8, 9, 20, 21],
                'Le Travenues Techno': [8, 9, 15, 15, 14],
                'Yatra Online': [358, 276, 389, 251, 194],
                'Thomas Cook India': [45, 41, 32, 28, 29],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Above 100% is normal here: customers pay before the company pays airlines, hotels or governments. Blank where operating profit was negative or too small for the ratio to mean anything.',
            values: {
                'BLS International': [171, 117, 100, 128, 106, 116],
                'Le Travenues Techno': [null, 107, 113, 169, 316, 189],
                'Yatra Online': [null, null, null, -202, 95, null],
                'Thomas Cook India': [null, 365, 190, 150, 150, 202],
            },
            cellNotes: {
                'Yatra Online': 'Operating cash was negative every year from FY22 to FY25 as credit to corporate customers grew; FY26 was the first positive year (₹76cr).',
                'Thomas Cook India': 'Includes customer advances for holidays and forex float.',
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
            note: 'BLS keeps about a fifth of its sales as free cash, remarkable for a services business. Yatra has burned cash for most of five years.',
            values: {
                'BLS International': [12.1, 12.7, 17.1, 30.5, 25.6, 21.8],
                'Le Travenues Techno': [-9.5, 5.2, 5.5, 12.9, 14.3, 8.7],
                'Yatra Online': [-47.0, -44.3, -40.0, -15.0, 3.1, -18.5],
                'Thomas Cook India': [-10.6, 11.5, 9.9, 7.4, 6.2, 7.2],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash and treasury investments, ÷ operating profit.',
            note: 'Below zero means more cash than debt. BLS, ixigo and Thomas Cook all hold net cash; ixigo’s ratio is large because its operating profit is small.',
            values: {
                'BLS International': [-3.5, -2.5, -3.0, -0.9, -1.3],
                'Le Travenues Techno': [null, -4.5, -3.2, -5.0, -15.4],
                'Yatra Online': [null, 2.1, null, -0.5, 0.1],
                'Thomas Cook India': [null, -1.8, -2.1, -1.4, -2.0],
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
            note: 'All four are light on capital. BLS spends more because visa centres and the Aadhaar enrolment project need equipment.',
            values: {
                'BLS International': [9.6, 4.5, 3.8, 7.3, 4.6, 5.5],
                'Le Travenues Techno': [0.5, 1.0, 1.1, 0.4, 1.7, 1.1],
                'Yatra Online': [5.1, 4.1, 6.3, 3.7, 4.5, 4.5],
                'Thomas Cook India': [3.3, 1.3, 1.4, 1.4, 1.5, 1.5],
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
            note: 'BLS’s ratio fell in FY25 because acquired businesses brought intangible assets onto its books.',
            values: {
                'BLS International': [7.6, 6.5, 5.7, 1.6, 1.8],
                'Le Travenues Techno': [1.3, 1.7, 2.4, 3.2, 2.3],
                'Yatra Online': [1.8, 3.3, 3.4, 2.9, 3.6],
                'Thomas Cook India': [0.7, 2.0, 2.6, 2.9, 2.7],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'contract', label: 'Government or exclusive contracts', description: 'Multi-year mandates a rival cannot easily take away.' },
            { key: 'users', label: 'Users and brand', description: 'A large base of people who come back without being paid to.' },
            { key: 'switch', label: 'Switching costs', description: 'Systems built into a customer’s processes.' },
            { key: 'supplier', label: 'Power over suppliers', description: 'Whether airlines, hotels or governments can squeeze its cut.' },
            { key: 'shock', label: 'Resilience to shocks', description: 'How well it held up in this year’s conflict and airline cuts.' },
        ],
        rows: [
            { company: 'BLS International', trend: 'widening', trendNote: 'Revenue per visa application up 11% with flat volumes; new mandates in Europe and China; management says pricing has now stabilised.',
                grades: { contract: { grade: 'A', note: 'Exclusive 5–10-year contracts with 46 governments' }, users: { grade: 'C', note: 'Applicants have no choice of provider' }, switch: { grade: 'A', note: 'Governments rarely change a biometric-data provider' }, supplier: { grade: 'B', note: 'Fee set in the tender' }, shock: { grade: 'A', note: 'Grew 25% in the conflict quarter' } } },
            { company: 'Le Travenues Techno', trend: 'stable', trendNote: 'Bus bookings up 39%; flights held back by airline cuts; hotels now being scaled.',
                grades: { contract: { grade: 'D', note: 'None' }, users: { grade: 'A', note: '63% share of online train bookings; strong in buses' }, switch: { grade: 'C', note: 'Travellers can switch apps easily' }, supplier: { grade: 'C', note: 'Railways and airlines set the rules' }, shock: { grade: 'B', note: 'Buses offset weak flights' } } },
            { company: 'Yatra Online', trend: 'narrowing', trendNote: 'Lost high-margin corporate events to the conflict; corporate-card launch delayed.',
                grades: { contract: { grade: 'B', note: 'Corporate travel contracts; 97% retention' }, users: { grade: 'C', note: 'Small consumer brand' }, switch: { grade: 'B', note: 'Booking tools with each client’s travel rules; 71% of top 100 clients stayed 5+ years' }, supplier: { grade: 'C', note: 'Two airlines dominate' }, shock: { grade: 'D', note: 'Revenue −10% and profit wiped out' } } },
            { company: 'Thomas Cook India', trend: 'stable', trendNote: 'Forex and resorts had record quarters; Middle East units collapsed.',
                grades: { contract: { grade: 'C', note: 'Corporate travel and events' }, users: { grade: 'B', note: 'A known brand in forex and holidays' }, switch: { grade: 'C', note: 'Holidays are bought trip by trip' }, supplier: { grade: 'B', note: 'Owns its resorts (Sterling)' }, shock: { grade: 'C', note: 'Guidance withdrawn' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own BLS International, the one name here I would buy today.** **BLS** runs visa and passport centres for 46 governments in more than 100 countries on exclusive contracts of five to ten years, and every applicant pays it a fee. Its visa arm earned a 40% margin in FY26 and about 90% of group operating profit; the group turned ₹903cr of operating cash in FY26 and held ₹1,617cr of net cash in June by its own count (₹1,103cr on Screener at March). Q1 revenue rose 25%. But the research turned up three cautions: visa applications were flat on the year, management cut its growth target from 20–25% a year to 15–20% while presenting it as unchanged, and profit rose only 12% as depreciation, interest and tax all rose. Buying has also left goodwill at ₹1,213cr, about half its equity, and management could not say what value the deals created. The newest flag came on 28–29 September: its subsidiary Atyati sold a lending unit with ₹100.6cr of turnover for ₹59 lakh to a company that shares an Atyati director, and Atyati's auditor resigned citing a conflict of interest. I have lowered my estimate from ~15% to ~13% a year; the price needs about {need:BLS International|9}%. **A cash-rich government outsourcer bought for steady growth, not a bet on travel; hold, but do not add until management explains the Atyati sale.**",
                "**Wait on Thomas Cook India and ixigo (Le Travenues Techno).** **Thomas Cook**'s forex arm earns a 45% margin and its Sterling resorts had their best quarter ever, but its Middle East businesses lost money, management withdrew its FY27 guidance and CRISIL expects FY27 revenue to fall 2–5%. Its annual report adds that 47 subsidiaries were not audited at all and that contingent claims reach about ₹382cr. The resorts are being demerged into a separately listed company by Q1 FY28, which takes away its highest-margin business and leaves a travel-and-forex company that CRISIL expects to earn a margin just above 4%. The price needs about {need:Thomas Cook India|14}% a year against my ~10%. **Wait for the Gulf units to stop losing money and guidance to return.** **ixigo** holds 63% of online train bookings and grew bus bookings 39%, but its Q1 operating profit (₹20cr on Screener) was smaller than its ₹29cr of interest and other income, IRCTC's rules cut its train tickets 8%, and it is spending to build a hotel business; key managers' pay tripled to ₹42cr in FY26, mostly in shares. The price needs about {need:Le Travenues Techno|30}% a year against my ~20%. **Wait for hotels to show a profit and a price nearer what the operating business earns.**",
                "**Pass on Yatra Online.** Its corporate-travel franchise is real (97% of clients stay), but Q1 adjusted EBITDA fell 39% and profit was ₹0.3cr, corporate customers take about 194 days to pay, and its auditor has drawn attention to a SEBI and NSE query over how ₹339cr of IPO money was counted as spent. The corporate card meant to speed up collections is delayed, and disputed claims have risen to ₹131cr, about 16% of its net worth. The price needs about {need:Yatra Online|24}% a year against my ~15%.",
                "**Three things to hold onto before reading the rest.** First, **BLS is not really a travel company**: its fee is set in a government tender, so it depends only loosely on how many people travel and hardly at all on airfares. Second, **online agents' revenue is already their commission**, so a 6% margin on it is thin; judge them on cash and returns, not on bookings. Third, **the annual reports mattered more than the calls this year**: unaudited subsidiaries and disputed title deeds at Thomas Cook, the IPO-money query at Yatra, and related-party sales and goodwill worth half its equity at BLS were barely mentioned on the calls.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. None of these companies publishes an order book in the usual sense. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Travel money passes through several hands, and these four sit at different points. **FY27 is a weak year for air and outbound travel and a fair one for domestic trips.** ICRA cut its FY27 forecast for domestic air passengers to 3–6% growth (from 6–8%) after FY26 grew only 1.4%, expects international traffic on Indian airlines to grow 0–3%, and sees airlines losing ₹36,000–38,000cr. Indians' spending abroad under the RBI's remittance scheme fell about 2% in FY26 to about $29bn, with education remittances down about 21% on US visa curbs. In May the Prime Minister asked Indians to avoid non-essential foreign travel to save foreign exchange. Domestic buses and hotels held up: MakeMyTrip, the market leader, grew its June-quarter bookings about 20% in constant currency. **My view: FY28–FY29 should recover if West Asia settles and airlines restore seats, but no forecaster yet puts numbers on those years; the visa outsourcer is the only business here that does not need the recovery.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "A traveller needs permission (a visa), a way to pay abroad (foreign exchange), a ticket and a bed. **Governments** hand visa processing to firms like **BLS**, which charge each applicant a service fee on top of the visa fee, plus extras such as courier, lounges and form filling. **Airlines, railways, bus operators and hotels** pay online agents (**ixigo**, **Yatra**) a commission, and travellers pay convenience fees and add-ons such as free-cancellation cover. **Thomas Cook** earns a spread of about 2–2.2% on retail forex, interest on about ₹1,800cr of money loaded on its forex cards, a margin on holidays and events, and room revenue at 78 Sterling resorts. **The profit sits where the customer has no alternative or the money sits still**: BLS's visa arm earned a 40% margin in FY26 and Thomas Cook's forex arm 46%, against 3.3% on Thomas Cook's travel business. That is why BLS alone earned ₹724cr of profit in FY26, more than twice the other three combined (₹338cr).",
                },
                {
                    label: 'Where the demand comes from',
                    text: "A market research firm cited in Yatra's presentation (Videc) puts Indian travel at about $56bn in FY24 rising to $78bn in FY27, with the share booked online rising from about 41% to 47%. Company travel is $16–20bn but only 22–23% online, the least digitised corner and Yatra's opportunity. Indians made 32.7 million trips abroad in 2025 (+5.9%) while foreign arrivals fell 9.4% to 9.0 million (Ministry of Tourism), so outbound demand drives visas and forex. Industry reports cited by BLS size outsourced visa processing (outside the US) at about $2.2bn in 2024, growing to $3.2bn by 2029 as governments outsource half of applications rather than 38%. BLS handled 44.1 lakh applications in FY26, up 18%, but volumes were flat in Q1. **My view: demand grows at high single digits in value; the listed firms grow faster only by taking share, raising prices or buying businesses.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**This year was a shock.** West Asia hostilities from late February closed airspace and raised jet fuel (India's wholesale price index for it roughly doubled over two years); domestic fares were still about 18% higher in July, and Air India cut July–September capacity about 20% and IndiGo about 10%. Railway rules cut ixigo's train volumes 8%: tighter Tatkal windows for agents, a smaller waitlist quota and Aadhaar-based OTP checks. The RBI's new forex rules (in force from 6 May 2026) stop new money-changer licences, let larger dealers such as Thomas Cook handle trade payments up to ₹25 lakh, and require franchise counters to be wound up within two years. Government contracts can be reversed: the Ministry of External Affairs barred BLS from its tenders in October 2025 and the order was quashed in December; in July 2026 the Delhi High Court set aside the ministry's Australia award to VFS Global and ordered a fresh tender. **My view: policy is the biggest swing factor for three of the four, and none of them controls it.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**BLS** depends on governments renewing and awarding contracts, on the UIDAI Aadhaar project ramping up and on buying businesses sensibly; outbound travel matters, airfares barely. **ixigo** depends on IRCTC rules, on the two big airlines restoring seats and on its hotel push working. **Yatra** depends on company travel budgets, corporate events (MICE: meetings, incentive trips, conferences and exhibitions) and airline incentive deals, and on collecting from clients faster. **Thomas Cook** depends on outbound holidays, forex demand, Sterling's resorts and, for now, the Middle East. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures (FY26, ₹cr)',
                    columns: ['Position', 'Who', 'Revenue', 'Net profit', 'Operating margin (last five quarters)', 'Where the profit sits'],
                    rows: [
                        ['Government visa and citizen services', 'BLS', '2,998', '**724**', '25–29%', 'Visa arm: 40% EBITDA margin; digital 7%'],
                        ['Online travel agents', 'ixigo', '1,228', '71', '−2% to 8%', 'Buses: 53% contribution; profit leans on interest income'],
                        ['Online travel agents', 'Yatra', '1,007', '47', '6–11%', 'Corporate travel and events; hotels at ~10% take'],
                        ['Travel, forex and resorts', 'Thomas Cook', '8,398', '220', '4–5%', 'Forex 46% EBIT; Sterling 31% EBITDA; travel 3.3%'],
                    ],
                    note: 'Revenue and profit: Screener, consolidated. Segment margins: company calls.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Indian travel market', '~$56bn (FY24); ~41% booked online', '**~$78bn by FY27**; ~47% online', 'Videc, cited in Yatra presentation'],
                        ['Corporate travel', '$16–20bn; ~22–23% online', 'Least digitised segment', 'Videc, cited in Yatra presentation'],
                        ['Trips abroad by Indians', '32.7m in 2025 (+5.9%); foreign arrivals 9.0m (−9.4%)', '—', 'Ministry of Tourism via Argus'],
                        ['Spending abroad (RBI remittance scheme)', '~$29bn in FY26 (−2%); education −21%', 'April 2026 −7.85%', 'RBI via Business Standard'],
                        ['Domestic air passengers', '167.7m in FY26 (+1.4%)', '**+3–6% in FY27** (cut from 6–8%)', 'ICRA, Jul 2026'],
                        ['International air (Indian airlines)', '+7.7% in Apr–Feb FY26', '**+0–3% in FY27**; airline losses ₹36,000–38,000cr', 'ICRA, Apr and Jul 2026'],
                        ['Outsourced visa processing (ex-US)', '~$2.2bn (2024); outsourced share 38%', '**~$3.2bn by 2029** (~8–9% a year); share 50%', 'Industry reports cited by BLS'],
                        ['Online market leader', 'MakeMyTrip FY26 bookings $10.4bn (record)', 'Q1 FY27 bookings $2.85bn, +19.9% (constant currency)', 'MakeMyTrip filing, Aug 2026'],
                        ['Forex rules', 'FEMA (Authorised Persons) Regulations 2026', 'No new money-changer licences; franchises end within two years', 'RBI via BDO alert, May 2026'],
                        ['Thomas Cook, FY27', 'FY26 EBITDA margin 6.4%', 'Revenue **−2% to −5%**; margin above 5% (above 4% after demerger)', 'CRISIL, Sep 2026'],
                    ],
                    note: 'The market-size figures come from company presentations quoting consultants; treat them as direction, not precision.',
                },
                {
                    caption: 'Volume, price and margin by business, Q1 FY27 (company calls and presentations)',
                    columns: ['Business', 'Volume', 'Price or value', 'Margin'],
                    rows: [
                        ['BLS: visas and consular', '11.3 lakh applications, flat', '₹3,521 net revenue per application, **+11%**', '40.3% (segment EBITDA)'],
                        ['BLS: digital services', 'Banking-agent transactions ₹29,500cr (₹26,200cr)', 'Revenue ₹330cr (37% of group)', '8.2%'],
                        ['ixigo: trains', '2.44 crore tickets, **−8%**', 'Revenue ₹141cr, +9%; take 6.5%', '37% contribution (32%)'],
                        ['ixigo: flights', '29 lakh tickets, +4%', 'Bookings ₹2,342cr, +27%; take 8.4% (9.2%)', '39% contribution (42%)'],
                        ['ixigo: buses', '89 lakh tickets, **+33%**', 'Bookings ₹947cr, +39%; take 11.8%', '53% contribution'],
                        ['Yatra: air', '12.64 lakh passengers, +4.8%', 'Bookings ₹1,658cr, +18%', '4.2% take (4.6%)'],
                        ['Yatra: hotels and packages', '5.48 lakh room nights, +30%', 'Bookings ₹388cr, +13%', '9.95% take (9.05%)'],
                        ['Thomas Cook: forex', 'Education turnover +36%', 'Segment revenue ₹89cr, +6%', '45.3% (segment EBIT)'],
                        ['Thomas Cook: travel', 'Domestic +29%; long-haul **−28%**', 'Revenue ₹1,711cr, −14%', 'EBIT 2.4% (4.1%)'],
                        ['Thomas Cook: Sterling resorts', 'Occupancy 77%, up 7 points', 'Room rate ₹7,809, +10%', 'EBIT 32.4%'],
                        ['Thomas Cook: DEI photos', 'About half in the Middle East', 'Revenue ₹131cr (₹210cr)', '**EBIT −₹15.2cr** (+₹10.6cr)'],
                    ],
                    note: 'Figures in brackets are a year earlier. "Contribution" is what is left after direct costs such as payment fees, discounts and marketing for that line, before head office and technology. "Take" is revenue or gross margin as a share of bookings.',
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
                    label: 'Lasting: exclusive government contracts',
                    text: "**BLS** says it has about 17% of the outsourced visa market by value (10% by volume, outside the US), second to **VFS Global** at about half. Contracts run five to ten years and applicants cannot shop around. Moving from partner-run to self-run centres lifted net revenue per application from ₹1,613 in FY23 to ₹3,302 in FY26 and the visa margin from 14.6% in FY22 to 40.1%. It also survived a real test: the Ministry of External Affairs barred it from Indian-mission tenders in October 2025, the order was quashed in December, and BLS has since won the ministry's China tender. But management now says revenue per application has **stabilised**, and tenders are fought on price: in one Cyprus tender VFS and BLS bid the same €1.90 per visa and the award went by drawing lots. **My view: the moat is real, but the easy pricing gains are done.**",
                },
                {
                    label: 'Lasting but narrow: a habit in trains and buses',
                    text: "**ixigo** holds 63% of train tickets sold through travel apps, up from about 60% a few quarters ago, and online bus booking is close to a two-player market with MakeMyTrip's redBus; ixigo's AbhiBus grew bookings 39%, and more than 60% in 17 states. It keeps customer-acquisition spending (brand, performance marketing and discounts) near 4% of bookings, and 90% of its hotel bookings come from existing users, so it pays little to find customers. It also claims to be the fastest-growing flight agent: flight tickets +4% when the market grew about 2%. The limit is supplier power: IRCTC's rules cut its train tickets 8%, and its flight take fell from 9.2% to 8.4% of bookings. **My view: a real habit, but one that rides on rules ixigo does not set.**",
                },
                {
                    label: 'Real but slow: forex and resorts',
                    text: "**Thomas Cook** is one of few non-bank companies issuing forex cards on Mastercard, Visa and RuPay, and money loaded on its cards grew from about ₹400cr in FY21 to about ₹1,600cr in FY26 and ₹1,800cr in June, all earning interest. The RBI's decision to stop new money-changer licences protects it, and the new trade-payment line is a fresh product. Its education forex turnover grew 36% in Q1 while the industry's education remittances fell 27% in April–May. **Sterling** filled 77% of its rooms with 17% more of them. CRISIL reaffirmed Thomas Cook at AA in September, helped by Fairfax's backing. **My view: two good franchises inside a thin-margin travel company.**",
                },
                {
                    label: 'Sticky but not priced: corporate travel',
                    text: "**Yatra** keeps about 97% of its corporate clients, 71% of its top 100 have been with it more than five years, and it added 163 clients with ₹957cr of yearly bookings in FY26 and 53 with ₹222cr in Q1. Management says each new client brings almost 50% net contribution. But stickiness has not given it pricing power: its air take is 4.2% of bookings, set by two airlines' commissions and incentive deals, and its corporate clients pay on credit. **Thomas Cook** also has 8,000 corporate clients and says competition limits its business-to-business pricing. **My view: switching costs keep clients, not margins.**",
                },
                {
                    label: 'Thin: consumer flights and long-haul holidays',
                    text: "**MakeMyTrip** booked $10.4bn in FY26; ixigo's bookings were ₹18,693cr (about $2.2bn) and Yatra's about $1bn a year. In consumer flights the leader sets the discounts and IndiGo and Air India set the commissions, so neither smaller agent has pricing power. Long-haul holidays are bought trip by trip: **Thomas Cook**'s fell 28% in Q1 as families switched to shorter, cheaper trips that carry similar margin percentages on 20–25% lower ticket values.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**VFS Global** and **TLScontact** in visas; **MakeMyTrip** (with Goibibo and redBus), **EaseMyTrip**, **Cleartrip** and **IRCTC** itself in online travel; **Oyo** in budget hotels; banks and online forex sellers such as **BookMyForex** in forex; **Veena World**, **Kesari** and global travel-management firms in holidays and corporate travel; **Club Mahindra** against Sterling; banking-agent networks such as **Fino** and **Spice Money** against BLS's digital arm.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? One business earns a lot; three earn thin commissions, and at two of them this year's figures are depressed by the conflict and by deliberate spending. Several quarters also carry income that will not repeat, flagged below.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: the visa fee, forex and resorts',
                    text: "**BLS**'s visa arm earned 40.3% in Q1 and about 90% of group EBITDA, and management's promise in May to hold margins was kept. But the mix is diluting it: digital earned 8.2%, the Aadhaar project will earn 10–15% (down from the 15–20% given in May), and Atyati about 7%. So the group margin slipped to 28.3% from 28.7% even in a record quarter. At **Thomas Cook**, forex (45.3% EBIT in Q1) and Sterling (32.4% EBIT, about 37% EBITDA) are structurally high; travel is not. **My view: BLS's group margin will drift down a point or two as the low-margin arms grow, which is why its profit will grow slower than its revenue.**",
                },
                {
                    label: 'Cyclical: this year’s travel shock',
                    text: "**Yatra**'s event (MICE) revenue was about ₹30cr lower and its gross margin about ₹6cr lower; management says events are 20–25% of profit in a normal year at a 40%-plus margin, so the loss hit hard. Adjusted EBITDA fell 39% to ₹15.1cr, or 12.3% of gross margin, against 19% in FY26; management expects close to 20% in the second half. **Thomas Cook**'s travel margin halved to 2.4% as Middle East costs could not be cut as fast as revenue fell: Desert Adventures' revenue fell 89% and DEI swung from ₹10.6cr of profit to a ₹15.2cr loss. Excluding those two, group EBIT rose 8%. **My view: this part should come back when the Gulf does, but nobody can date it.**",
                },
                {
                    label: 'Not structural: investment spending and windfalls',
                    text: "**ixigo** let adjusted EBITDA fall 7% to ₹29.2cr to fund hotels and AI; its hotels-and-others line swung from a ₹1.9cr contribution to a ₹3.1cr loss. On Screener its Q1 operating profit was ₹20cr and other income ₹29cr, so interest on the money Prosus invested produced more than half of pre-tax profit; that is why profit rose 81%. **Yatra**'s operating costs rose 18% to ₹108.4cr for Kanoo, TravelPro and tech hiring while revenue fell 10%. Windfalls to strip out: BLS's Q4 FY26 had a ₹5–6cr one-off currency gain, and ₹95cr of FY26 other income (about 12% of pre-tax profit, mostly deposit interest); Thomas Cook's Q1 other income of ₹61cr was about two-thirds of its operating profit. **My view: judge ixigo and Thomas Cook on operating profit, not net profit.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Yatra** gives corporate clients credit: receivable days were 389 in FY24, 251 in FY25 and 194 in FY26, and operating cash was negative every year from FY22 to FY25. FY26 was the first positive year (₹76cr, free cash ₹31cr). Its fix, a corporate card, was ‘ready within a quarter or two’ in May; in August it was still stuck over who pays a 1.65% card fee. **My view: until receivables fall below about 150 days, Yatra's profits will not become cash.**",
                },
                {
                    label: 'Working capital: getting worse, from a very good base',
                    text: "**BLS**'s cash cycle rose from about 10 days to 21 as acquired banking-services businesses joined, but its working capital is still negative overall (Screener: −38 days) because visa applicants pay up front. **ixigo**'s working-capital days swung to +102 in FY26, but only because the Prosus money sits in current assets, not because customers pay later.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**BLS** turned ₹903cr of operating cash in FY26 (free cash ₹766cr), 116% of operating profit over five years. **Thomas Cook**'s working-capital days are −87 because holidaymakers and forex buyers pay first; its operating cash was ₹643cr in FY26 (₹717cr in FY25). **ixigo**'s operating cash rose 60% to ₹196cr (free cash ₹175cr) because travellers pay before suppliers are paid.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Consumer travel is paid up front, so the agent holds customers' money for a while; corporate travel is paid later. Thomas Cook's ₹1,800cr of card money is customers' cash, not its own, so its cash pile overstates what it could spend. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['BLS International', 'Net cash ₹1,617cr at June (₹1,434cr at March); Atyati bought for ₹138cr (about seven times its EBITDA); acquisitions must return 17–20%; a buyback is "not under consideration" but may go to the board; Aadhaar capex ₹125cr, ₹75cr spent', 'Net cash ₹1,103cr at March (Screener); ₹431cr of borrowings held alongside cash'],
                        ['Le Travenues Techno', 'Other income to stay "largely around" the Q1 level; bought 54.66% of Brevistay for ₹65.69cr; ₹740.8cr of the Prosus money unused at March', 'Net cash ₹952cr at March (Screener); the company counts ₹1,740cr of cash and investments net of borrowings'],
                        ['Yatra Online', 'Cash and deposits ₹198cr at June (₹223cr at March); corporate card still in talks with banks', 'Net debt ₹12cr at March (Screener); borrowings ₹103cr'],
                        ['Thomas Cook India', 'Cash and short-term investments about ₹2,650cr at June, of which about ₹1,750–1,800cr is card float; Sterling alone holds ₹374cr and no debt; total debt ₹269cr', 'Net cash ₹842cr at March (Screener); the CFO put it at ₹730–740cr'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Company and Screener net-cash figures differ because of how deposits, investments, leases and customer money are counted.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised in May, and my own estimate of earnings growth. All four are light on capital: capex has run at 1–6% of sales, so growth depends on contracts, users and acquisitions rather than on building plants. The capital that matters here is acquisition money: BLS's and ixigo's.",
            ],
            points: [
                {
                    label: 'Growth driver: more governments outsourcing, and acquisitions',
                    text: "**BLS**'s CFO frames visa growth as travel growth of 7–8% plus about 5% from pricing and mix, so 12–15% a year, and 10–15% once expiring contracts are counted. New mandates (Slovakia across 80-plus countries, Cyprus, the ministry's China tender) add to that. The UIDAI Aadhaar project is the biggest new piece: the annual report puts the work order at ₹2,055cr (management says ₹2,500cr) over six years, or about ₹340cr of revenue a year at full run-rate from Q4 FY27–Q1 FY28, but only ₹35–50cr of EBITDA against ₹738cr from visas. Its ₹125cr capex should pay back in about three years on my estimate. The rest is buying: ₹1,119cr spent in FY25, Atyati for ₹138cr in Q1, and about ₹2,000cr planned over four to five years. **My view: the 15–20% revenue target needs acquisitions; organic profit growth is closer to 10–12%.**",
                },
                {
                    label: 'Growth driver: budget travellers going online',
                    text: "**ixigo** grows by moving small-town travellers from trains to buses, flights and now hotels. It sold 0.5 million room-nights in Q1 through 10,000-plus directly contracted hotels in about 700 towns, bought 54.66% of Brevistay for ₹65.69cr and 60% of Spain's Trenes.com for about ₹125cr, and aims to be the top budget-hotel platform in four to five years. Prosus paid ₹1,295.6cr for 10.1% at ₹280 a share, and ₹740.8cr of that was unspent at March; the shares traded far below that price in late September. A product for small-business travel comes next. Hotels will have ‘a longer gestation period’, and no payback has been given. **My view: buses fund today's profit; hotels must work for the price to make sense.**",
                },
                {
                    label: 'Growth driver: corporate and small-business travel',
                    text: "**Yatra**'s TravelPro brought 30-plus of Q1's 53 new corporate clients (about ₹80cr of yearly bookings); its Recap expense software has 20 customers; and a seven-year deal with Kanoo Travel takes its corporate platform to the Middle East, earning from July 2026. Management keeps its target of 20% a year growth in gross margin and 30% in adjusted EBITDA over two to three years, and wants return on capital in the high teens within three to four years against 6–7% now. Capex is small (₹43cr of investing outflow in FY26), but staff costs for these projects were taken before revenue. **My view: the plan is sensible, but it has to be proved in the second half.**",
                },
                {
                    label: 'Growth driver: short-haul, domestic and resorts',
                    text: "**Thomas Cook**'s domestic holidays grew 29% and short-haul outside the Middle East 21% as long-haul fell 28%; events grew 14% and corporate travel bookings 15% to over ₹700cr. **Sterling** plans 95-plus resorts and 4,500 rooms in 2027 from 78 and about 3,800, mostly leased or managed (62% of rooms are on its own books). The board approved a demerger of Sterling in March: shareholders will get 0.81 Sterling shares for each Thomas Cook share, and Thomas Cook's shares will be consolidated four into one; completion is expected by Q1 FY28. CRISIL expects what remains to earn a margin just above 4%. **My view: the demerger makes the resorts easier to value but leaves a lower-margin travel-and-forex company behind.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**BLS**'s May promise to hold margins was kept (visa 40.3%, digital 8.2%), and Q1 revenue (+25%) and EBITDA (+24%) beat its range, helped by acquisitions; the Aadhaar timetable was pulled forward. **ixigo** said in May that Q1 growth would ‘look up’: bookings grew 19% against 9% in Q4, revenue 13% against 8%, and contribution margin stayed at 40.6%, above its 36–37% floor. **Thomas Cook**'s events came back a quarter early (+14%) and Sterling had its best quarter ever.",
                },
                {
                    label: 'Cautious',
                    text: "**Thomas Cook** withdrew its double-digit earnings-growth hope: ‘I really don't have an answer to say what will be my full year forecast’. **Yatra** gives no FY27 guidance and says the second half will be ‘materially stronger’. **ixigo** gives no numbers and is ‘planning the business without assuming any immediate relief’ on trains; it dropped its May hope that a new railway ticketing system would help.",
                },
                {
                    label: 'Missed (so far)',
                    text: "**Thomas Cook**'s travel margin was 2.4% against the 4–5% it works to; DEI's loss widened to ₹15.2cr from about ₹10cr in Q4, and Middle East business was back to only 30–35% of normal in July against a hope of 50–60% by year-end. **Yatra**'s corporate card, promised within ‘a quarter or two’, is delayed, and the merger of its Nasdaq parent into the Indian company has no timeline; Q1 profit was ₹0.3cr. **BLS** cut its five-year growth target from 20–25% to 15–20% while saying it had announced this before, which the official May transcript does not support.",
                },
                {
                    label: 'Mixed',
                    text: "**BLS**'s visa applications were flat in its strongest season despite new contracts, so growth came from price (+11% per application) and acquisitions; its tax rate was 14% against 10–12% guided. **ixigo** gained share everywhere, but train tickets fell 8%, flights grew 4% and adjusted EBITDA fell 7% as it spent on hotels.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect BLS to compound earnings at about 13% (lowered from 15%), ixigo at about 20% from a small base, Yatra at about 15% if events and air margins recover, and Thomas Cook at about 10%.** I cut BLS because management cut its target, Q1 profit grew only 12% on higher depreciation and tax, and the low-margin arms are growing fastest. The booking businesses should recover when airline capacity and the Middle East do; BLS does not need either.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['BLS International', 'Visa pricing and new mandates; Aadhaar; acquisitions; margin dilution', '8% / **13%** / 18%'],
                        ['Le Travenues Techno', 'Buses; hotels; flights recovering; flat interest income', '10% / **20%** / 30%'],
                        ['Yatra Online', 'Corporate and small-business travel; events recovering', '5% / **15%** / 25%'],
                        ['Thomas Cook India', 'Forex and resorts; travel and Gulf units recovering', '5% / **10%** / 15%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['BLS International', 'Revenue 15–20% a year for five years (20–25% in May); visa margin ~40%, digital 7–8%; tax ~12%', 'Aadhaar ₹125cr (₹75cr spent); Atyati ₹138cr; ~₹2,000cr of acquisitions over 4–5 years', '**Beat, target cut**: revenue +25%, profit +12%'],
                        ['Le Travenues Techno', 'No numbers; contribution margin floor ~36–37%; now plans for no early relief on train rules (in May it hoped a new railway ticketing system in August or September would help)', 'Small; some AI spend capitalised; Brevistay ₹65.69cr; Trenes ~₹125cr', '**Delivered**: bookings +19% in Q1 and +22% in Q2; contribution margin 38.9% in Q2, above the floor; adjusted EBITDA −7% and −17%'],
                        ['Yatra Online', 'No FY27 guidance; gross margin +20% and adjusted EBITDA +30% a year over 2–3 years; ~20% EBITDA/gross margin in H2', '₹43cr in FY26; people and technology', '**Behind**: adjusted EBITDA −39%; card delayed'],
                        ['Thomas Cook India', 'Double-digit earnings growth withdrawn; travel margin 4–5%; H2 better than H1', 'Commitments ₹41cr; Sterling rooms mostly leased or managed', '**Missed**: travel 2.4%; DEI loss wider; Sterling beat'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; several of the most important came from the annual reports and CRISIL's rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'War, airline capacity and the outbound squeeze',
                    text: "ICRA expects domestic air traffic to grow only 3–6% in FY27 and international 0–3%, with airlines losing ₹36,000–38,000cr, so seats and incentive deals will stay tight. **Yatra** says 30%-plus of its international traffic transits the Middle East and its air margin will recover only when Gulf airlines settle their incentive deals. **Thomas Cook**'s DEI earns about half its revenue in the Middle East, and CRISIL counts international destination services at about 34% and DEI at about 10% of its FY26 income. Add the Prime Minister's May appeal to avoid foreign travel and falling remittances abroad. **Nobody on the calls could say when this ends.**",
                },
                {
                    label: 'Rules set by others',
                    text: "**ixigo**'s train business depends on IRCTC, which has tightened agent access three ways this year. **Thomas Cook** must wind up its forex franchise counters within two years under the RBI's new rules, though it gains a new trade-payment line. **BLS** depends on governments: the MEA's 2025 debarment was quashed, but its auditor still carries an emphasis of matter on a Punjab government contract terminated in 2018 that left subsidiary BLS E-Solutions with no revenue, and CRISIL lists tender risk among its weaknesses. The Delhi High Court's July ruling against VFS shows awards can be reversed either way.",
                },
                {
                    label: 'Audit findings',
                    text: "**Thomas Cook**'s auditor (B S R & Co.) says 47 subsidiaries with ₹2,003cr of assets and ₹938cr of revenue were **not audited** at all, and seven more were audited by others. The CARO report (a statutory checklist) flags property title deeds not in the company's name, including Sterling resorts at Kodaikanal (carrying value ₹102cr) and Puri (₹201.5cr), and late statutory dues at four group companies. **Yatra**'s auditor (MSKA) draws attention to a SEBI and NSE query: ₹339.1cr of deposits and advances to airlines and hotels up to June 2024 were counted as spending IPO money on customer acquisition; Yatra replied in December 2025 citing legal opinions and has heard nothing since. At **BLS**, 21 subsidiaries with ₹3,523cr of assets were audited by other firms. BLS's and ixigo's opinions were unmodified, but BLS, ixigo and Thomas Cook all had gaps in the audit trails of their accounting software.",
                },
                {
                    label: 'Contingent liabilities',
                    text: "**Thomas Cook** carries about ₹382cr of disputed claims, about 15% of its net worth: ₹209.5cr of tax, ₹93cr of luxury-tax demands, ₹67.6cr of other claims and a ₹6.2cr ED penalty under the foreign-exchange law, of which a tribunal upheld ₹3cr in April (appealed to the Madras High Court). **Yatra** carries ₹131cr, about 16% of net worth, mostly ₹83.6cr of income-tax demands, and up from ₹115cr. **BLS**'s are small (about ₹20cr of tax demands and ₹4cr of guarantees and claims), and **ixigo** discloses none.",
                },
                {
                    label: 'Related parties, pay and structure',
                    text: "**BLS** sells services to BLS-branded companies abroad where it has ‘significant influence’; sales to the Kuwait entity rose to about ₹88cr from ₹33cr, and it pays rent to promoter family members. The sums are small next to revenue, but the Kuwait jump deserves an answer. Foreign funds cut their stake from 10.9% to 4.1% in 18 months; promoters hold 70.4% with no pledge. **ixigo**'s key managers were paid ₹42cr in FY26 against ₹13.8cr, mostly in shares, and its associates lost ₹11.2cr. **Thomas Cook** paid its retiring chairman a ₹17.1cr ex-gratia. **Yatra**'s Nasdaq parent sold about 1.8% of the Indian company in February to fund the legal costs of merging the two, cutting the promoter stake to 62.66%.",
                },
                {
                    label: 'Capital allocation',
                    text: "**BLS**'s goodwill has reached ₹1,213cr, about half its ₹2,422cr of equity, after ₹1,119cr of acquisitions in FY25 and ₹446cr of investing in FY26; CRISIL lists the acquisition strategy as a weakness, and management could not say how much value the deals had created when asked. Investors pushed for a buyback; the answer stayed non-committal. **ixigo** is spending Prosus's money on hotels and overseas acquisitions. **Thomas Cook** earns 9% on equity against its own 20% goal, and the demerger takes away its highest-margin business. **My view: BLS's cash is its biggest asset and its biggest temptation.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **8% at 13x, 14% at 22x, 24% at 50x and 30% at 80x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**BLS** holds ₹1,617cr of net cash by its own count at June (₹1,103cr on Screener at March) against a market value of {mcap:BLS International|₹9,040cr}, so it is cheaper than its P/E suggests, though interest on that cash is also part of its profit. **Thomas Cook** looks cash-rich too, but most of its ₹2,650cr is customers' card money; CRISIL counts only about ₹900cr as free. **ixigo** is the opposite case: its EV/EBITDA is higher than its P/E because interest on the Prosus cash, not the business, makes most of its profit. Take the company's ₹1,740cr of cash and investments net of borrowings (March) out of its {mcap:Le Travenues Techno|₹7,030cr} market value, and the rest pays for an operating business that earned ₹121cr of adjusted EBITDA in FY26.",
                },
                {
                    label: 'Fits',
                    text: "**BLS**: the price needs about {need:BLS International|9}% a year against my ~13%. That margin of safety survives my cut from 15%, the guidance cut and a year of margin dilution. What would lift it: a buyback, or visa volumes growing again from the new Slovakia, Cyprus and China mandates. What would hurt it: another government debarment, a goodwill write-down or an expensive acquisition.",
                },
                {
                    label: 'Full',
                    text: "**Thomas Cook**: the price needs about {need:Thomas Cook India|14}% a year against my ~10%. Profit of ₹211cr over the last four quarters would have to climb back to the ₹258–271cr of FY24–FY25 just to recover, which needs the Gulf units to stop losing money. The demerger may unlock value in Sterling, but the audit gaps and ₹382cr of claims argue for a discount, not a premium.",
                },
                {
                    label: 'Stretched',
                    text: "**ixigo** needs about {need:Le Travenues Techno|30}% a year against my ~20%, and **Yatra** about {need:Yatra Online|24}% against my ~15%. Both earn single-digit returns on capital, and both need their new businesses (hotels at ixigo; Kanoo and TravelPro at Yatra) to pay off before the price does.",
                },
                {
                    label: 'Distorted by a bad quarter and by interest income',
                    text: "**Yatra**'s trailing profit includes a quarter of almost nothing (₹0.3cr); if its adjusted EBITDA gets back to about 20% of gross margin in the second half, earnings could rise faster than my estimate, which is the bull case. **ixigo**'s other income (₹29cr in Q1) was larger than its operating profit (₹20cr), so its business is dearer than its P/E shows. **Thomas Cook**'s Q1 other income (₹61cr) was two-thirds of its operating profit. **BLS**'s Q1 tax rate rose to 14% from 10%; a Dubai tax change may keep it higher.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'BLS International', rank: 1, stance: 'COMPOUNDER', segment: GOVT,
            what: "Runs visa, passport and consular centres for 46 governments in more than 100 countries, plus banking-agent, loan-distribution and Aadhaar centres in India through its listed subsidiary BLS E-Services.",
            view: "**The best business and the cheapest price, with slower growth than it claims.** Visa margins about 40%, ₹903cr of operating cash in FY26, 25% revenue growth in Q1 and ₹1,617cr of net cash at June (company figure; ₹1,103cr on Screener at March). But visa volumes were flat, the growth target was cut to 15–20%, profit grew 12%, and goodwill is half of equity after ₹1,100cr-plus of acquisitions. Not in the note until 16 Oct 2026: on 24 August 2026 Spanish media reported that the National Court had widened its probe of Algiers visa fraud to BLS, and the shares fell 13% that day; BLS denies any role and says its lawyer found it named in no public court document, but Spain is about 18–20% of visa revenue. The price needs about {need:BLS International|9}% a year against my ~13%.",
            watch: 'Visa applications growing again from new mandates; Aadhaar revenue at full run-rate by Q1 FY28; a buyback or the next acquisition price; an explanation of Atyati’s ₹59 lakh sale of its ₹100.6cr-turnover lending unit to a company that shares a director, and anything its new auditor raises; any Spanish court or government action naming BLS.',
        },
        {
            company: 'Thomas Cook India', rank: 2, stance: 'TURNAROUND', segment: FULL,
            what: "Foreign exchange, corporate travel and events, holidays (Thomas Cook, SOTC), Sterling Holidays resorts (to be demerged) and an overseas souvenir-photo business; controlled by Fairfax.",
            view: "**Two good franchises inside a thin, Gulf-exposed travel business.** Forex earns 45% and Sterling had its best quarter, but travel earned 2.4%, DEI lost ₹15.2cr and FY27 guidance was withdrawn; CRISIL expects revenue to fall 2–5%. The annual report shows 47 unaudited subsidiaries, disputed resort titles and ₹382cr of contingent claims. The price needs about {need:Thomas Cook India|14}% a year against my ~10%. 1 Nov 2026: the price now reads {label:Thomas Cook India|fits} after a 19% fall, but it stays wait: guidance is still withdrawn, the Gulf businesses have not been shown back in profit, and there are no new filings.",
            watch: 'DEI and Desert Adventures back to profit in Q2–Q3; the Sterling demerger approved by NCLT; travel margin back to 4%.',
        },
        {
            company: 'Le Travenues Techno', rank: 3, stance: 'PRICED', segment: ONLINE,
            what: "ixigo: an online travel app for trains, buses (AbhiBus), flights and now budget hotels, strongest with travellers from smaller towns; Prosus owns 10.1%.",
            view: "**A strong niche, priced for more.** It holds 63% of app-based train bookings, grew bus bookings 39% and keeps a 40% contribution margin. But Q1 operating profit (₹20cr) was smaller than its interest income (₹29cr), adjusted EBITDA fell 7% as it funds hotels, and IRCTC and two airlines set its limits. The price needs about {need:Le Travenues Techno|30}% a year against my ~20%. 30 Oct 2026: stays wait after the Q2 call (19 Oct). Bookings rose 22%, trains recovered (+16% revenue, about 64% of OTA rail), buses grew 32% and hotels, now reported, grew 2.6x with the contribution loss down to 15% of revenue; but flight revenue fell 8% on dear fares and cut seats, October started soft, adjusted operating profit fell 17%, and record profit came from a one-off gain on selling part of Freshbus.",
            watch: 'Hotel contribution turning positive within four to six quarters (−15% of revenue in Q2); airline seats returning (October was soft); the train recovery lasting past the festive season; how the unspent ₹740cr is used.',
        },
        {
            company: 'Yatra Online', rank: 4, stance: 'TURNAROUND', segment: ONLINE,
            what: "India's largest managed corporate-travel company (1,300-plus large clients, about 60,000 small ones), with events, expense software, a consumer booking site and a Middle East partnership with Kanoo Travel.",
            view: "**Sticky clients, a bad year and slow cash.** 97% retention and steady new wins, but Q1 adjusted EBITDA fell 39%, profit was ₹0.3cr, receivables sit at 194 days and the corporate card is delayed. Its auditor has flagged a SEBI query on IPO money, and contingent claims are ₹131cr. The price needs about {need:Yatra Online|24}% a year against my ~15%.",
            watch: 'Adjusted EBITDA near 20% of gross margin in H2; the SEBI query closed; receivables and the corporate card.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Government services.** **BLS International: own.** The best business, the best cash record and a price that needs about {need:BLS International|9}% a year against my ~13%. Watch its visa volumes, what it does with its cash, and how it explains Atyati's sale of a unit to a director-linked company.",
            "**Online travel agents.** **ixigo (Le Travenues Techno): wait** for hotels to show a profit and for a price nearer what the operating business earns. **Yatra Online: pass** until events, receivables and the SEBI query are behind it.",
            "**Travel, forex and resorts.** **Thomas Cook India: wait** for the Gulf units to stabilise, guidance to return and the demerger to complete; the audit gaps argue for patience.",
            "**What would change my view.** For the better: airline capacity and Middle East travel recovering (ixigo, Yatra, Thomas Cook), or a BLS buyback. For the worse: BLS losing a major government contract, writing down goodwill or overpaying for an acquisition; any SEBI action against Yatra; Thomas Cook's audit gaps widening.",
            "**What to watch next quarter.** BLS's visa applications and Aadhaar revenue; ixigo's hotel losses and flight volumes; Yatra's events and receivables; Thomas Cook's DEI and Desert Adventures.",
        ],
        bottomLine:
            "Own the government outsourcer (BLS International), which barely noticed this year's travel shock but is growing slower than it says; wait on the booking businesses (Le Travenues Techno, Thomas Cook India) until airlines and the Middle East recover; pass on Yatra Online.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/BLS/consolidated/' },
        { label: 'Wholesale price index, aviation turbine fuel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Domestic air traffic likely to grow 3–6% in FY27; airline losses ₹36,000–38,000cr (ICRA) — Upstox, Jul 2026', url: 'https://upstox.com/news/business-news/latest-updates/india-s-domestic-air-passenger-traffic-likely-to-grow-by-3-6-in-fy-27-icra/article-197535/' },
        { label: 'Indian aviation: FY26 traffic — ICRA research', url: 'https://www.icra.in/Research/ViewResearchReport/6898' },
        { label: 'Indians abroad vs foreign arrivals, 2025 (Ministry of Tourism data) — Argus', url: 'https://argusenglish.in/national/pm-modis-travel-in-india-appeal-gets-data-backing-33-mn-indians-went-abroad-in-2025-vs-9mn-foreign-tourist-arrivals-exclusive' },
        { label: 'PM urges Indians to avoid foreign travel — TravelBiz Monitor, May 2026', url: 'https://travelbizmonitor.com/top-stories/pm-modi-urges-indians-to-avoid-foreign-travel-boost-domestic-tourism-amid-global-crisis/' },
        { label: 'Outward remittances slipped 2% to $28.98 billion in FY26 (RBI data) — Business Standard', url: 'https://www.business-standard.com/economy/news/outward-remittances-slipped-2-to-28-98-billion-in-fy26-rbi-data-126052201720_1.html' },
        { label: 'FEMA (Authorised Persons) Regulations, 2026 — BDO India alert', url: 'https://www.bdo.in/en-gb/insights/alerts-updates/regulatory-alert-issuance-of-foreign-exchange-management-authorised-persons-regulations-2026' },
        { label: 'MakeMyTrip Q1 FY27 results (Form 6-K) — StockTitan', url: 'https://www.stocktitan.net/sec-filings/MMYT/6-k-make-my-trip-ltd-current-report-foreign-issuer-5d8522d1f6d1.html' },
        { label: 'Delhi High Court sets aside VFS Global Australia contract — The Australia Today, Jul 2026', url: 'https://www.theaustraliatoday.com.au/delhi-high-court-cancels-vfs-globals-visa-passport-services-contract-in-australia-orders-fresh-tender/' },
        { label: 'Air India, IndiGo cut flights as fuel prices surge amid West Asia crisis — Open', url: 'https://openthemagazine.com/business/air-india-indigo-cut-flights-as-fuel-prices-surge-amid-west-asia-crisis' },
        { label: 'Railways announces new rules for Tatkal tickets: Aadhaar-based OTP authentication — News On AIR', url: 'https://www.newsonair.gov.in/railways-announces-new-rules-for-tatkal-tickets-aadhaar-based-otp-authentication-must-from-july-1' },
        { label: 'BLS International rating rationale (MEA debarment, acquisitions) — CRISIL, Apr 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/BLSInternationalServicesLimited_April%2010_%202026_RR_387761.html' },
        { label: 'BLS International investor presentation, Q1 FY27', url: 'https://www.blsinternational.com/assets/pdf/investor-relations/BLSI-Investor-Presentation_7thAug.pdf' },
        { label: 'BLS International Annual Report FY26 (auditor’s report, related parties, UIDAI order) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=992fcaab-f6a6-47b0-b842-c019113ee3ea.pdf' },
        { label: 'ixigo investor presentation, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=590cf21f-60c4-462d-8f8a-16bb3e47a84a.pdf' },
        { label: 'Le Travenues Technology Annual Report FY26 (Prosus funds, goodwill, pay) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=98187c82-d204-4ec0-bdd2-c65ced968c77.pdf' },
        { label: 'Thomas Cook (India) rating rationale (FY27 outlook, demerger) — CRISIL, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ThomasCookIndiaLimited_September%2021_%202026_RR_401641.html' },
        { label: 'Thomas Cook (India) investor presentation, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ac39a52b-6db6-4b4f-940d-958dda273585.pdf' },
        { label: 'Thomas Cook (India) Annual Report FY26 (unaudited subsidiaries, CARO, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/660529cb-0f66-4622-94cb-f0639fe6e314.pdf' },
        { label: 'Yatra Online investor presentation, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1a6be89a-2dbd-41c7-b542-63109319403c.pdf' },
        { label: 'Yatra Online Annual Report FY26 (IPO-proceeds emphasis of matter, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/0d585a15-04cb-487c-bf4f-7dcd65d86067.pdf' },
        { label: 'Company earnings calls, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
