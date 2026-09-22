import { SectorOverview } from './types';
import { pumpsCompEng } from './pumps-comp-eng';

// The rewrite under review: same figures as the published note, laid out as
// explanation first, one comparison per question, and a profile per company.

const COMP = 'Compressors — sold on lifetime running cost';
const PUMP = 'Engineered pumps — sold on reliability and qualification';
const ENG = 'Engines and generator sets — sold on channel and service';
const SOLAR = 'Solar pumps — sold into government schemes';

export const pumpsCompEngV2: SectorOverview = {
    sector: 'Pumps Comp & Eng',
    title: 'Pumps, Compressors & Engines',
    format: 'ranked',
    standfirst:
        "Nine makers of pumps, compressors, engines and generator sets, in four quite different businesses. Compressor makers win on the customer's electricity bill, engineered-pump makers on approvals for nuclear and data-centre work, engine makers on dealers and service, and solar-pump makers on government tenders that set the price and pay late.",
    lastUpdated: '2026-09-22',
    asOfQuarter: 'Q1 FY27',

    headline: [
        { label: 'Own', text: "**Kirloskar Pneumatic** and **Powerica**: my growth estimate matches or beats what the price needs." },
        { label: 'Hold', text: "**Elgi Equipments** and **Kirloskar Brothers**: excellent businesses, but priced for their best case." },
        { label: 'Wait', text: "**Kirloskar Oil** and **KSB**: at 53–55x, margins and nuclear deliveries must catch up with the price first." },
        { label: 'Avoid for now', text: "**Shakti**, **Oswal** and **Greaves**: profit is not arriving as cash, or is being spent on a loss-making business." },
    ],

    takeaways: [
        "**Four businesses with four sets of economics.** Compressors have earned 18–30% on capital for five years. Engineered pumps earn 20–28% once qualified. Engine makers earn 10–27%, depending on who owns the engine. Solar pumps earned the most at the FY25 peak and have since seen margins halve.",
        "**Profit and cash tell different stories.** Over five years Powerica collected 91% of its operating profit as cash, Kirloskar Oil 73% and Kirloskar Brothers 67%. KSB collected 36%, Shakti 18%, and Oswal's operating cash was negative.",
        "**The solar-pump boom is over for now.** Tender prices fell as 40-plus suppliers crowded into the one state still ordering, the national scheme (PM-KUSUM 2.0) awaits approval, and state agencies pay late.",
        "**Nuclear and data centres are real but slow.** Orders are arriving, but nuclear equipment is paid for about four years after the order, and NPCIL's own test bed has delayed KSB's pumps.",
        "**Most prices assume more growth than I expect.** Only Kirloskar Pneumatic and Powerica are priced at or below my estimate of their growth (section 8).",
    ],

    metrics: pumpsCompEng.metrics,
    moat: pumpsCompEng.moat,
    moatCompact: true,

    valueChain: [
        {
            name: 'Castings and forgings',
            profit: 'low',
            note: "Metal parts. Most companies buy them in. **Kirloskar Pneumatic makes its own**, which is why its material cost fell in Q1 while others' rose.",
            companies: ['Kirloskar Pneumatic', 'Kirloskar Brothers'],
        },
        {
            name: 'Engines and motors',
            profit: 'mixed',
            note: "Whoever owns the engine or motor controls cost and quality. **Powerica buys Cummins engines**, so it keeps less of the margin.",
            companies: ['Kirloskar Oil', 'Greaves Cotton', 'Elgi Equipments', 'Shakti Pumps'],
        },
        {
            name: 'The machine',
            profit: 'mixed',
            note: "Pumps, compressors and gensets. Earns well when bought on running cost or reliability; poorly when a tender sets the price.",
            companies: ['Elgi Equipments', 'Kirloskar Pneumatic', 'Kirloskar Brothers', 'KSB', 'Kirloskar Oil', 'Powerica', 'Greaves Cotton', 'Shakti Pumps', 'Oswal Pumps'],
        },
        {
            name: 'Packages and projects',
            profit: 'mixed',
            note: "Data-centre cooling and power, gas stations, nuclear plants, solar-pump installations, wind farms. **Qualified work pays; tendered work does not.**",
            companies: ['Kirloskar Brothers', 'KSB', 'Kirloskar Pneumatic', 'Powerica', 'Shakti Pumps', 'Oswal Pumps'],
        },
        {
            name: 'Service and spares',
            profit: 'high',
            note: "10–30 years of parts and service, sold without a tender to customers who cannot afford downtime. **The best business in the chain.**",
            companies: ['Kirloskar Oil', 'Elgi Equipments', 'KSB', 'Kirloskar Pneumatic', 'Powerica'],
        },
    ],

    cashBars: [
        { company: 'Powerica', ebitda: 1607, ocf: 1456, fcf: 337 },
        { company: 'Kirloskar Oil', ebitda: 2586, ocf: 1888, fcf: 877 },
        { company: 'Kirloskar Brothers', ebitda: 2280, ocf: 1533, fcf: 1019 },
        { company: 'Kirloskar Pneumatic', ebitda: 1171, ocf: 775, fcf: 432 },
        { company: 'Elgi Equipments', ebitda: 2338, ocf: 1365, fcf: 1042 },
        { company: 'KSB', ebitda: 1468, ocf: 522, fcf: 95 },
        { company: 'Shakti Pumps', ebitda: 1427, ocf: 250, fcf: -129 },
        { company: 'Greaves Cotton', ebitda: 619, ocf: -334, fcf: -614 },
        { company: 'Oswal Pumps', ebitda: 1184, ocf: -96, fcf: -363 },
    ],

    growthVsPrice: [
        { company: 'Kirloskar Pneumatic', low: 13, base: 18, high: 22, needs: 19 },
        { company: 'Powerica', low: 12, base: 18, high: 22, needs: 16 },
        { company: 'Elgi Equipments', low: 12, base: 17, high: 20, needs: 22 },
        { company: 'Kirloskar Brothers', low: 10, base: 14, high: 18, needs: 20 },
        { company: 'Kirloskar Oil', low: 10, base: 15, high: 20, needs: 25 },
        { company: 'KSB', low: 8, base: 13, high: 17, needs: 25 },
        { company: 'Greaves Cotton', low: 5, base: 15, high: 25, needs: 23 },
        { company: 'Shakti Pumps', low: -5, base: 8, high: 20, needs: 17 },
        { company: 'Oswal Pumps', low: -10, base: 5, high: 15, needs: 5 },
    ],

    sections: [
        {
            heading: '1. Recommendation and key takeaways',
            body: [
                "Ranked by attractiveness at today's price: how durable the advantage is, whether profit turns into cash, and whether my growth estimate covers what the price assumes.",
            ],
            embed: 'ranking',
        },
        {
            heading: '2. Charts',
            body: [
                "Growth, returns, cash cycle and cash conversion for all nine, grouped by business. Margins are in section 5. Hover over a starred name for its caveat. Kirloskar Oil and Kirloskar Pneumatic are shown standalone (the group accounts include a lender, or are too short).",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Every machine here passes through the same five stages. Profit collects at the two ends: owning the engine or motor, and selling service for decades afterwards. Companies stuck in the middle, or selling into tenders, earn the least.",
            ],
            embed: 'valuechain',
            embedFirst: true,
            points: [
                {
                    label: 'What drives demand',
                    text: "Factory investment, power plants, city gas (stations set to roughly double to 15,000 by 2031), data centres, water supply, and government solar-pump schemes. The markets themselves grow at mid-single digits; **most of the faster growth here is share gains and new applications.**",
                },
                {
                    label: 'How cyclical',
                    text: "Compressors and industrial pumps follow factory investment: moderate swings. Project work arrives in lumps. **Solar pumps swing hardest**: installations went from about 1.5 lakh in FY24 to 5 lakh in FY26, then stalled.",
                },
                {
                    label: 'How much depends on government',
                    text: "Solar pumps almost entirely (PM-KUSUM). Nuclear depends on NPCIL's ordering and testing. Everyone else depends on it only indirectly, through power and water spending.",
                },
            ],
        },
        {
            heading: '4. Moat',
            body: [
                "Five things stop a customer switching to a cheaper supplier. The grid grades each company on each one; hover over a grade for the reason, or open the company in the ranking for the full explanation.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Strongest: the compressor makers',
                    text: "Buyers choose on running cost, so the most efficient machine wins. Elgi leads on efficiency, and Kirloskar Pneumatic makes its own key parts. Both are gaining share.",
                },
                {
                    label: 'Hardest to copy: nuclear approvals',
                    text: "KSB and Kirloskar Brothers hold approvals that take years to earn. The catch is that the customer (NPCIL) controls the timing.",
                },
                {
                    label: 'Weakest: solar pumps',
                    text: "Good products, but the state sets the price and 40-plus approved suppliers compete for each tender. **When the scheme pauses, prices fall.**",
                },
                {
                    label: 'Outside the list',
                    text: "Atlas Copco and Ingersoll Rand in compressors; Cummins India in large gensets; Grundfos, Xylem and Flowserve in pumps; dozens of unlisted solar-pump makers.",
                },
            ],
        },
        {
            heading: '5a. Margins',
            body: [
                "A margin lasts when three things hold: **the company owns a key part** (engine, motor, casting), **the buyer chooses on running cost or reliability rather than price**, and **it can pass on cost increases within a quarter**. Q1 FY27 was a test: metal, freight and energy costs rose with the West Asia war.",
            ],
            embed: 'margingrid',
            embedFirst: true,
            points: [
                {
                    label: 'Passed: compressors',
                    text: "Elgi held 14–16% while absorbing a 25% US tariff. Kirloskar Pneumatic's material cost fell. Both meet all three tests.",
                },
                {
                    label: 'Squeezed, should recover: pumps and Kirloskar Oil',
                    text: "KSB's fixed-price projects cannot be repriced; Kirloskar Oil's price rises lag by 3–6 months and its staff costs rose 40%. Kirloskar Brothers' home business improved while its UK arm weakened.",
                },
                {
                    label: 'Two businesses in one: Powerica and Greaves',
                    text: "Powerica's gensets earn about 6% and its wind farms about 49%. Greaves's engine business earns 11–14%, and the scooter losses pull the group to 6–8%.",
                },
                {
                    label: 'Failed: solar pumps',
                    text: "Shakti fell from 23% to 10%, Oswal from 27% to 16%. Neither passes the three tests: tender prices, no pricing power, and slow pass-through of costs.",
                },
            ],
        },
        {
            heading: '5b. Cash: does the profit arrive?',
            body: [
                "Operating profit is what the accounts say was earned; operating cash is what was actually collected, after tax and after money tied up in stock and unpaid bills. **Collecting 70–80% is normal.** Below 50% means profit is piling up as receivables. Five years of filed accounts; Kirloskar Oil and Kirloskar Pneumatic standalone, Greaves for the whole group. Hover over a row for the rupee figures.",
            ],
            embed: 'cashbars',
            embedFirst: true,
            points: [
                {
                    label: 'Good collectors',
                    text: "Powerica, Kirloskar Oil and Kirloskar Brothers. Powerica's free cash was lower only because it is paying for new wind farms from its own cash.",
                },
                {
                    label: 'Improving',
                    text: "Elgi collected only 23% in FY22 but has improved every year, to 78% in FY26.",
                },
                {
                    label: 'The warning signs',
                    text: "**KSB collected just 36% for a company of its quality**, as solar-scheme receivables and export stock built up. **Shakti and Oswal's profits are mostly money still owed by state agencies.** Greaves's engine business collects well, but the cash has gone into scooters.",
                },
            ],
        },
        {
            heading: '6. Growth',
            body: [
                "My starting assumption: India's economy grows about 10–11% a year in money terms, and equipment makers grow roughly in line. **Three demand streams are faster**: data centres, city gas and, much later, nuclear. **One is slower**: solar pumps, until the next phase of the scheme is approved at sensible prices. My estimates are in the chart in section 8.",
            ],
            points: [
                {
                    label: 'Compressors: about 17–18% a year',
                    text: "Kirloskar Pneumatic has the widest set of drivers (gas stations, biogas, cold chains, and air-conditioning compressors from FY28). Elgi grows by taking share in India and the US.",
                },
                {
                    label: 'Engines and gensets: about 15–18%',
                    text: "Powerica has the most visible growth: data-centre orders and wind capacity rising from 330 to 634 MW. Kirloskar Oil's $2bn target implies 23% a year, and I expect less.",
                },
                {
                    label: 'Engineered pumps: about 13–14%',
                    text: "Steady water and power work. Nuclear is upside, but paced by NPCIL, not by demand.",
                },
                {
                    label: 'Solar pumps: single digits',
                    text: "Volumes can grow, but prices are unlikely to return to FY25 levels with 40-plus suppliers competing. Both companies are also adding solar-module capacity just as that industry heads into oversupply.",
                },
            ],
            tables: [
                {
                    caption: 'What managements guide, and their order books',
                    columns: ['Company', 'Guidance', 'Order book', 'Capex plan'],
                    rows: [
                        ['Kirloskar Pneumatic', '₹2,100cr in FY27 (+19%); margin 18–20%', '₹1,854cr (about a year)', '₹100cr a year + ₹320cr for Ziffra'],
                        ['Powerica', 'Double-digit growth; margin recovery from Q3', 'Gensets ₹1,700cr (data centres ₹1,100cr)', 'Wind: 330 → 634 MW'],
                        ['Elgi Equipments', 'Margin 18% by FY31', 'Not published (product business)', 'New campus; land in Italy'],
                        ['Kirloskar Brothers', 'Double-digit growth', 'Domestic ₹2,558cr + overseas ₹1,505cr', 'About equal to depreciation'],
                        ['Kirloskar Oil', '$2bn revenue by FY30', 'Not published', 'Not given'],
                        ['KSB', 'Double digits; margin 13–14%', '₹2,744cr (nuclear ₹1,235cr)', '₹80–120cr a year'],
                        ['Greaves Cotton', 'Core business 16–20% a year', 'Not published', '₹331cr into scooters this year'],
                        ['Shakti Pumps', '₹5,000cr revenue by 2029', '₹1,000cr (two quarters)', '₹1,500–1,700cr by Sept 2027'],
                        ['Oswal Pumps', '+20–25% in FY27; margin 15–17%', '22,025 pumps + 72 MW solar projects', '1 GW module line'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risks, ranked by damage',
            body: [
                "The five risks that could hurt most, starting with the biggest. What each management dodged on its call is in its profile.",
            ],
            points: [
                {
                    label: '1. Scheme delays and unpaid bills',
                    text: "Hits Shakti and Oswal hardest, KSB partly. A delay cuts volume, crowds bidders and cuts price, and stretches collections. **Already happening.**",
                },
                {
                    label: '2. Costs rising on fixed-price work',
                    text: "Hits KSB, the solar pair, and older Powerica orders. Dealer-sold products reprice within a quarter; contracts cannot. **Happening now; should ease by H2 if metal prices settle.**",
                },
                {
                    label: '3. Nuclear timing',
                    text: "Hits KSB (45% of its order book) and Kirloskar Brothers' upside. Revenue depends on NPCIL's test bed and tender calendar. **Likely to slip, not to disappear.**",
                },
                {
                    label: '4. Cummins selling direct',
                    text: "Hits Powerica, whose genset business depends on Cummins' choice of channel. It has already taken two data-centre projects directly.",
                },
                {
                    label: '5. Batteries reducing genset running hours',
                    text: "Hits Kirloskar Oil and Powerica slowly: gensets are still sold, but fewer hours mean fewer spares and less service, which is the most profitable part.",
                },
            ],
        },
        {
            heading: '8. Valuation',
            body: [
                "To earn about 12% a year while the P/E drifts down to 18x over ten years, earnings must grow about **16% at 25x, 18% at 30x, 21% at 40x and 26% at 60x**. The chart sets that requirement (red line) against my own growth range for each company.",
            ],
            embed: 'growthprice',
            embedFirst: true,
            points: [
                {
                    label: 'Reasonable',
                    text: "Kirloskar Pneumatic and Powerica: the price asks for about what I expect.",
                },
                {
                    label: 'Needs the best case',
                    text: "Elgi, Kirloskar Brothers, Shakti and Greaves: the price needs everything to go right.",
                },
                {
                    label: 'Beyond my best case',
                    text: "Kirloskar Oil and KSB at 53–55x. Oswal looks cheap on growth, but its operating cash has been negative for two years.",
                },
            ],
        },
    ],

    verdicts: [
        {
            company: 'Kirloskar Pneumatic', rank: 1, stance: 'COMPOUNDER', segment: COMP,
            why: "Returns up every year (18% → 30%), no debt, and a price that matches the growth I expect.",
            what: "Air compressors, refrigeration compressors for cold storage and dairies, and gas compression for CNG stations, oil and gas, and biogas. Makes its own forgings and castings.",
            view: "",
            profile: [
                { label: 'Moat', text: "Makes its own key metal parts, so material cost fell from 47.6% to 43.9% of sales in Q1 while others' costs rose. Maintains 1,000+ CNG stations, a service business growing 25–30% a year." },
                { label: 'Margins', text: "Annual margin rose from 14% to 21% in five years; guides 18–20%. Quarterly swings reflect project timing (Q4 is always the biggest)." },
                { label: 'Cash', text: "Collected ₹775cr on ₹1,171cr of operating profit over five years (66%); ₹432cr free cash." },
                { label: 'Growth', text: "About 18% a year from gas stations, biogas, centrifugal compressors and, from FY28, air-conditioning compressors. The price needs ~19%." },
                { label: 'Risk', text: "Middle East gas orders delayed; the air-conditioning compressor venture (₹320cr) is new ground." },
                { label: 'On the call', text: "Kept its FY27 target after a soft Q1, but would not say how much revenue slipped into Q2." },
            ],
            watch: 'Q2 catch-up; Middle East orders; the air-conditioning compressor ramp-up in FY28.',
        },
        {
            company: 'Powerica', rank: 2, stance: 'SCALEUP', segment: ENG,
            why: "Wind farms earning ~49% carry a thin genset business; collects 91% of profit as cash and is priced below my growth estimate.",
            what: "Builds generator sets around Cummins engines (81% of revenue), mainly for data centres and industry, and owns 330 MW of wind farms selling power on 25-year contracts.",
            view: "",
            profile: [
                { label: 'Moat', text: "Weak in gensets: the engine is Cummins', and Cummins has taken some data-centre projects directly. Strong in wind: long-term power contracts." },
                { label: 'Margins', text: "Gensets 5.6% in Q1, wind 48.6%, and new wind projects 82–83%. As wind grows, the group margin should rise." },
                { label: 'Cash', text: "Collected ₹1,456cr on ₹1,607cr of operating profit (91%). Free cash dipped in FY25–26 only because it is paying for new wind farms; net cash ₹193cr." },
                { label: 'Growth', text: "About 18%: a ₹1,700cr genset order book and wind capacity nearly doubling to 634 MW. The price needs ~16%." },
                { label: 'Risk', text: "Cummins selling direct; more competition for data-centre orders." },
                { label: 'On the call', text: "Declined to comment on Cummins taking data-centre projects directly." },
            ],
            watch: 'Genset margin recovering from Q3; wind projects on schedule.',
        },
        {
            company: 'Elgi Equipments', rank: 3, stance: 'COMPOUNDER', segment: COMP,
            why: "The best product in the sector, but at 42x the price needs ~22% growth against my ~17%.",
            what: "Industrial air compressors sold worldwide under its own brand, about half outside India. Makes its own motors and competes with Atlas Copco and Ingersoll Rand.",
            view: "",
            profile: [
                { label: 'Moat', text: "Most efficient compressor in about 70% of industrial categories, and ~80% of buyers choose on running cost. Warranty costs under 1% of sales." },
                { label: 'Margins', text: "Held 14–16% while absorbing a 25% US tariff and a raw-material rise it under-priced. Targets 18% by FY31." },
                { label: 'Cash', text: "Weak in FY22–23 as it built stock; improved every year to 78% in FY26. ₹1,042cr free cash over five years." },
                { label: 'Growth', text: "About 17%: India +28% (mostly volume), North America +37%, Europe now at breakeven." },
                { label: 'Risk', text: "US tariffs; cheap Chinese compressors (it is launching a lower-cost range in response)." },
                { label: 'On the call', text: "Would not split screw and piston sales, or give semiconductor revenue." },
            ],
            watch: 'Price rises catching up with costs by Q3; the new low-cost range.',
        },
        {
            company: 'Kirloskar Brothers', rank: 4, stance: 'COMPOUNDER', segment: PUMP,
            why: "Nuclear- and data-centre-approved pumps and good cash, but 36x already assumes the upside.",
            what: "India's largest pump maker: small pumps for homes and farms, large pumps for power, water and nuclear plants, and cooling and fire packages for US data centres.",
            view: "",
            profile: [
                { label: 'Moat', text: "World's largest maker of concrete volute pumps; supplies all of India's nuclear metallic volute pumps; qualifying for primary circuits." },
                { label: 'Margins', text: "11–13%. Home business rose to 13.7% on ~10% price rises; overseas fell to 5%." },
                { label: 'Cash', text: "Collected ₹1,533cr on ₹2,280cr of operating profit (67%). Spends about its depreciation, so ₹1,019cr became free cash." },
                { label: 'Growth', text: "About 14%; revenue grew ~7% a year over FY23–26. More needs the US data-centre deal and nuclear primary-pump orders. The price needs ~20%." },
                { label: 'Risk', text: "Weak overseas subsidiaries; slow, lumpy nuclear orders." },
                { label: 'On the call', text: "Did not give the nuclear share of its order book." },
            ],
            watch: 'Nuclear primary-pump orders; the US data-centre framework contract.',
        },
        {
            company: 'Kirloskar Oil', rank: 5, stance: 'PRICED', segment: ENG,
            why: "The strongest dealer and service network, but margins are falling and 55x needs ~25% growth against my ~15%.",
            what: "Diesel and gas engines and generator sets, a large dealer and service network, a pumps business (La-Gajjar), and a lending arm (Arka Fincap) it plans to separate.",
            view: "",
            profile: [
                { label: 'Moat', text: "Own engines up to high horsepower; can get service engineers to critical sites within 2 hours; spares and service ₹268cr a quarter, up double digits for 12 quarters." },
                { label: 'Margins', text: "Standalone fell from 13.5% to 11.2% in a year as staff costs rose 40% and price rises lagged. Management expects recovery within 3–6 months." },
                { label: 'Cash', text: "Engine business collected ₹1,888cr on ₹2,586cr (73%); net cash ₹485cr. Group figures are distorted by the lending arm." },
                { label: 'Growth', text: "About 15% from data centres, share gains and service. Its $2bn-by-FY30 target implies ~23% a year." },
                { label: 'Risk', text: "Margins not recovering; the lender stays inside the group until separated." },
                { label: 'On the call', text: "Would not give share-option costs or how much growth came from price rather than volume." },
            ],
            watch: 'Margin back above 13%; the Arka separation.',
        },
        {
            company: 'KSB', rank: 6, stance: 'PRICED', segment: PUMP,
            why: "India's nuclear pump franchise, but growth stalled, cash collection is poor and 53x needs ~25%.",
            what: "Indian arm of Germany's KSB: engineered pumps for power, nuclear, and oil and gas; standard pumps for buildings, water and farms; valves; and service. Its year ends in December.",
            view: "",
            profile: [
                { label: 'Moat', text: "Has supplied the main coolant pumps for every Indian heavy-water reactor since Narora; German parent's designs; 800+ dealers." },
                { label: 'Margins', text: "9–17% by quarter; aims for 13–14%. Fixed-price projects cannot be repriced while its foundries charged 12–15% more." },
                { label: 'Cash', text: "Collected only ₹522cr on ₹1,468cr of operating profit over five years (36%); ₹95cr free cash." },
                { label: 'Growth', text: "About 13%. Its ₹1,235cr nuclear book ships slowly, about one main pump a quarter, until NPCIL's test bed works." },
                { label: 'Risk', text: "Nuclear timing set by NPCIL; unpaid state solar-scheme bills; group software costs from next year." },
                { label: 'On the call', text: "Explained the test-bed delay, but did not say what next year's group software costs will be." },
            ],
            watch: 'Pump testing from September; the tender for eight more reactors.',
        },
        {
            company: 'Shakti Pumps', rank: 7, stance: 'CYCLICAL', segment: SOLAR,
            why: "Pumps installed up 58%, but margin halved and only 18% of profit has arrived as cash.",
            what: "India's largest solar-pump maker for government schemes, with its own motors, controllers and inverters; now adding solar cells, modules and rooftop solar.",
            view: "",
            profile: [
                { label: 'Moat', text: "Makes its own electronics, but the state sets the price and farmers pick from dozens of approved suppliers." },
                { label: 'Margins', text: "Fell from 23% to 10%: about 6 points from raw materials, 4 from lower prices. Targets about 15% once its own cells are running." },
                { label: 'Cash', text: "Collected ₹250cr on ₹1,427cr (18%); free cash −₹129cr. About ₹1,770cr is owed to it, including ₹450cr of retention money." },
                { label: 'Growth', text: "About 8%: volume grows, but prices stay low. The price needs ~17%." },
                { label: 'Risk', text: "Scheme delay; ₹1,500–1,700cr of solar-cell spending into an oversupplied industry; borrowings up from ₹75cr to ₹505cr." },
                { label: 'On the call', text: "No margin guidance; would not break down the ₹5,000cr revenue target." },
            ],
            watch: 'PM-KUSUM 2.0 approval; collections from state agencies.',
        },
        {
            company: 'Oswal Pumps', rank: 8, stance: 'CYCLICAL', segment: SOLAR,
            why: "Cheap at 9.4x, but volume, price and collections all fell at once.",
            what: "Solar pumps and motors for government schemes, solar modules, and now rooftop solar and cables. Listed recently.",
            view: "",
            profile: [
                { label: 'Moat', text: "Weak: 40–45 bidders on state tenders." },
                { label: 'Margins', text: "Fell from 27% to 16%: 8–9 points from tender prices, 3–3.5 from raw materials, 1–1.5 from lower volume. Its own chairman called current bid prices “not sustainable”." },
                { label: 'Cash', text: "Operating cash negative in FY25 and FY26; receivables at 229 days; net debt ₹266cr." },
                { label: 'Growth', text: "About 5%: shifting to rooftop solar, which its chairman says earns less." },
                { label: 'Risk', text: "Collections; a FY27 target that relies on ₹800–1,000cr from a business it has just started." },
                { label: 'On the call', text: "Some rooftop projects book revenue now and profit over five years." },
            ],
            watch: 'Receivables falling in Q3 as promised; the next Maharashtra tender.',
        },
        {
            company: 'Greaves Cotton', rank: 9, stance: 'TURNAROUND', segment: ENG,
            why: "A sound engine business carrying a loss-making electric-scooter arm.",
            what: "Small diesel engines for three-wheelers, gensets, fire-pump engines and parts; owns most of Greaves Electric Mobility (Ampere scooters) and a vehicle-finance arm.",
            view: "",
            profile: [
                { label: 'Moat', text: "Modest: small engines sold to three-wheeler makers, and a spares business." },
                { label: 'Margins', text: "Engine business 11–14%; group 6–8% after scooter losses." },
                { label: 'Cash', text: "Engine business: ₹793cr of free cash on ₹812cr of profit over five years, the best in the sector. Group: −₹614cr, because the cash went into scooters." },
                { label: 'Growth', text: "About 15%, with a very wide range: engines grow 14–17%; the rest depends on scooters breaking even." },
                { label: 'Risk', text: "More money into scooters (₹331cr this year)." },
                { label: 'On the call', text: "Did not discuss what the scooter business is worth." },
            ],
            watch: 'Scooter business reaching break-even in 4–6 quarters as promised.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [],
        lists: [
            {
                heading: 'What I would do now',
                items: [
                    "**Own** Kirloskar Pneumatic and Powerica.",
                    "**Hold** Elgi and Kirloskar Brothers; add on a fall.",
                    "**Wait** on Kirloskar Oil and KSB until margins and nuclear deliveries catch up.",
                    "**Avoid for now** Shakti, Oswal and Greaves until cash improves.",
                ],
            },
            {
                heading: 'What would change my mind',
                items: [
                    "PM-KUSUM 2.0 approved at better prices would lift Shakti and Oswal.",
                    "Kirloskar Oil's margin back above 13% would move it up.",
                    "NPCIL fixing its test bed and ordering eight reactors would re-rate KSB and Kirloskar Brothers.",
                    "Cummins selling direct at scale would hurt Powerica.",
                ],
            },
            {
                heading: 'What to watch next quarter',
                items: [
                    "Kirloskar Pneumatic: the Q2 catch-up.",
                    "Powerica and Kirloskar Oil: margin recovery.",
                    "KSB: pump testing and H2 cash.",
                    "Shakti and Oswal: the scheme decision and collections.",
                ],
            },
        ],
        bottomLine:
            "Buy where the customer pays for running cost and service, and the price doesn't assume more growth than the business can deliver: Kirloskar Pneumatic and Powerica today.",
    },

    sources: pumpsCompEng.sources,
};
