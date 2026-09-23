import { BusinessProfile, OverviewSection } from './types';
import { electricalTransformersCharts } from './card-data/electrical-transformers';

// Tab 2 of the Electrical Transformers note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are from each company's latest presentation, annual report or call. Some splits are of the order book rather than revenue, and the caption says so.",
        ],
    },
    {
        heading: 'The equipment, in plain words',
        body: [
            "Follow electricity from a power plant to a factory or home.",
        ],
        points: [
            {
                label: 'Power transformer',
                text: "Changes electricity from one voltage to another at power plants and substations. Sized in **MVA** (how much power it handles) and graded by **kV** (the voltage). Every one is built to order and must pass tests before a utility accepts it. The bigger and higher the voltage, the fewer makers are approved: 66–220 kV is common, 400 kV needs a special approval from Power Grid, and 765 kV is made by only a handful of companies in India.",
            },
            {
                label: 'Distribution transformer',
                text: "The smaller units near homes, shops and factories that bring voltage down to usable levels (33 kV and below). Simpler, made by many companies, and mostly bought by state electricity boards through price-based tenders.",
            },
            {
                label: 'Special transformers',
                text: "**Inverter-duty** transformers connect solar and battery plants to the grid. **Furnace** and **rectifier** transformers power steel furnaces and electrolysis plants. **Dry-type** transformers use resin instead of oil, so they are safer indoors in buildings, data centres and metros.",
            },
            {
                label: 'Parts that go into or around a transformer',
                text: "**Bushings** carry the high-voltage conductor through the transformer's metal tank without touching it; each transformer needs five to seven, and a failure can destroy the transformer (Yash). **Reactors** and **coils** control the flow of power on long lines and direct-current (HVDC) links (Quality Power). **Instrument and current transformers** measure voltage and current so meters and protection relays can work (Quality Power, Rishabh).",
            },
            {
                label: 'Switchgear and grid software',
                text: "**Switchgear** and **ring main units** switch circuits on and off and isolate faults in the local network; **relays** detect faults. Software then monitors and controls the network (Schneider).",
            },
            {
                label: 'CRGO steel',
                text: "The special grain-oriented steel used in a transformer's core. It is a quarter to two-fifths of material cost, and India imports about 90% of it.",
            },
        ],
    },
    {
        heading: 'Five ways of selling',
        body: [
            "Who the customer is decides how the price is set and how fast the cash comes in.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**State utilities and Power Grid**', 'Atlanta, TARIL, Supreme, Schneider (partly)', 'Tenders; some with price-variation clauses', 'Slow; money held back until commissioning'],
                    ['**Private developers and EPC contractors**', 'Atlanta, TARIL, Supreme, Shilchar, Schneider', 'Negotiated; often with price variation', 'Milestones; depends on the project being ready'],
                    ['**Industrial buyers**', 'Voltamp, TARIL (furnace), Schneider (data centres, chip plants)', 'Negotiated, selective', 'Fairly reliable'],
                    ['**Other equipment makers (OEMs)**', 'Yash, Quality Power', 'Negotiated; long approval, then repeat orders', 'Normal credit terms'],
                    ['**Exports**', 'Shilchar (half its sales), Quality Power, Yash, Rishabh', 'Negotiated; often higher margins', 'Depends on shipping terms and freight'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    // ── Transformer makers ────────────────────────────────────────────────────
    {
        company: 'Atlanta Electricals',
        tagline: "Gujarat-based power transformer maker climbing from 220 kV to 400 kV and 765 kV, with 63,060 MVA across five plants.",
        revenue: '₹1,852cr (FY26, consolidated)',
        products: [
            { name: 'Power transformers', text: "From 5 MVA up to 500 MVA, mainly 66–220 kV today; Power Grid has approved its Vadod plant for 400 kV." },
            { name: 'Auto transformers', text: "Large units that link two high-voltage networks at substations." },
            { name: 'Inverter-duty and special transformers', text: "For solar, wind, storage, generators and furnaces; a new dedicated plant adds 5,000 MVA by December." },
            { name: 'Atlanta Trafo', text: "A plant built by China's Baoding Tianwei Baobian Electric (BTW) for up to 765 kV, bought for about ₹260cr including its debt; to be used first for existing orders." },
        ],
        revenueText: "Power transformers were **79% of Q1 FY27 revenue**. By end market, transmission and distribution were **66%**, renewables 19% and generation and others the rest. By voltage, 220 kV was 56%. It has no exports yet.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27', parts: [{ label: 'Power', share: 79 }, { label: 'Auto', share: 14 }, { label: 'Inverter-duty', share: 6 }, { label: 'Other', share: 1 }] },
            { caption: 'Revenue by end market, Q1 FY27', parts: [{ label: 'Transmission and distribution', share: 66 }, { label: 'Renewables', share: 19 }, { label: 'Generation and other', share: 15 }] },
        ],
        customers: [
            "**State transmission utilities** such as Rajasthan's RVPNL and Punjab's PSTCL (each over ₹280cr of the order book), and **Power Grid**.",
            "**Renewable developers and EPC contractors.** It has 273 customers, up from 77 in FY22.",
            "No data-centre orders yet, management says.",
        ],
        difficulty: { level: 'High', text: "220 kV is established; 400 kV needs a destructive short-circuit test and Power Grid approval per plant. 765 kV design is being licensed from a partner for a $3–5m fee and a 2–4% royalty." },
        moat: "Approvals up the voltage ladder and price-variation clauses on 60–75% of utility orders. The top-end technology is rented, not owned.",
        inShort: ["**A Gujarat power-transformer maker** moving up from 220 kV to 400 kV and 765 kV, selling to state grids, Power Grid and renewable developers.", "**Good:** the fastest volume growth among the makers and price-variation clauses on most utility orders. **Watch:** only about half its profit has become cash, and its 765 kV design is licensed, not owned.", "**Verdict: own.** The price roughly matches the growth I expect."],
        salesDrivers: ["**Transmission spending by Power Grid and state utilities**: 66% of Q1 revenue came from transmission and distribution, and each new substation needs several large transformers.", "**Moving up the voltage ladder**: 400 kV revenue from FY28 and 765 kV bids from Q4 FY27 bring bigger units with fewer rivals.", "**Renewables and storage**: 19% of Q1 revenue; a new 5,000 MVA inverter-duty plant by December.", "**Capacity sets the pace, not demand**: Q1's 48% growth came from volume at new plants, with no change in prices or mix, management said.", "**Exports are a future lever**, planned partly as a hedge against the domestic capacity race; none today."],
        inputs: "**Copper** for the windings, **CRGO electrical steel** for the core (mostly imported), transformer **oil**, steel for the tank, insulation pressboard and bushings. Materials were 70% of sales in FY26.",
        costEffect: "**Mostly passed on.** 60–75% of utility orders carry price-variation clauses, and it buys material order by order rather than stocking up. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (19% to 12%). **What happened:** copper rose by about a third over the chart period, yet the margin rose from about 14% to 16–17%; in Q1 FY27's spike management said the clause let it pass on most of the increase. The chart uses copper because India's price index has no series for CRGO steel.",
        competitors: [{ name: 'Transformers & Rectifiers (TARIL)', note: 'The largest Indian-owned rival at 400 kV and above.' }, { name: 'Hitachi Energy, Siemens Energy, GE Vernova', note: 'Multinationals that dominate 765 kV and HVDC transformers.' }, { name: 'CG Power, BHEL', note: 'Large Indian makers of power transformers for utilities.' }, { name: 'Chinese makers with Indian plants', note: 'Now allowed into public tenders; Atlanta says it has seen no effect on pricing yet.' }],
        position: "**One of the fastest-growing power-transformer makers in India**, with 273 customers (from 77 in FY22) and Power Grid's 400 kV approval. Still smaller than TARIL and the multinationals at the top voltages.",
        money: "Net cash of about ₹49cr at FY26 (Screener). It bought Atlanta Trafo for about ₹260cr including its debt. Promoters hold **87%**.",
        watch: ["The 400 kV short-circuit test and first 400 kV revenue from FY28.", "The royalty cost of the 765 kV technology tie-up.", "Cash conversion: operating cash has been about half of operating profit."],
        charts: electricalTransformersCharts['Atlanta Electricals'],
    },
    {
        company: 'Shilchar Tech.',
        tagline: "Debt-free Gujarat maker of power, distribution, solar and wind transformers up to 132 kV, about half exported.",
        revenue: '₹652cr (FY26, standalone)',
        products: [
            { name: 'Power and distribution transformers', text: "Up to 50 MVA and 132 kV, for utilities, industry and generation." },
            { name: 'Solar and wind transformers', text: "Inverter-duty units for solar plants and units for wind turbines, up to 33 kV." },
            { name: 'Hydro and furnace transformers', text: "For hydro plants (up to 132 kV) and steel furnaces." },
            { name: 'Next step', text: "A new 6,500 MVA plant from April 2027 adds 160 MVA and 220 kV class, doubling capacity to 14,000 MVA." },
        ],
        revenueText: "**Exports were 52% of FY26 revenue**, up from 26% in FY22, to 25+ countries including the US, Middle East and Africa. The current ₹500cr order book is 70% domestic because freight costs stalled exports. It does not split revenue by product.",
        mixes: [
            { caption: 'Revenue by market, FY26', parts: [{ label: 'Exports', share: 52 }, { label: 'India', share: 48 }] },
            { caption: 'Order book by market, August 2026 (₹500cr)', parts: [{ label: 'India', share: 70 }, { label: 'Exports', share: 30 }] },
        ],
        customers: [
            "**Overseas utilities and developers** in North America, the Middle East and Africa, mostly sold ex-works (the buyer pays freight).",
            "**Indian private companies**: solar and wind developers, cement, steel, oil and gas and EPC firms. It deliberately avoids state utilities.",
        ],
        difficulty: { level: 'Medium', text: "Custom-built transformers up to 132 kV are a proven skill shared by many makers. The step to 220 kV will need new customer approvals and type tests." },
        moat: "Speed, quality and an export network built over 19 years. No technology edge; returns depend on the global shortage.",
        inShort: ["**A debt-free Gujarat transformer maker** (up to 132 kV) that sells about half its output abroad, mostly solar, wind and industrial units.", "**Good:** the highest returns among the makers and an expansion paid from its own cash. **Bad:** exports stalled on freight costs and its margin halved in Q1.", "**Verdict: own, buying in steps.** The price asks a little more than I expect from today's lower base."],
        salesDrivers: ["**Exports**: 52% of FY26 revenue, to the US, Middle East and Africa, riding the global transformer shortage. It sells from the factory gate, so freight costs decide when customers collect.", "**Indian private buyers**: solar and wind developers, steel, cement and EPC firms. It avoids state utility tenders.", "**Capacity**: the existing 7,500 MVA runs nearly full; the 6,500 MVA plant from April 2027 adds 220 kV and drives growth from FY28.", "**Mix**: export orders earn roughly 10% more than domestic ones, so the export share moves the margin as much as volume does."],
        inputs: "**Copper** windings, **CRGO steel** cores, transformer oil, steel tanks and insulation. Materials were 62% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** On orders delivered in Q4 and Q1 it passed on only 50–60% of the price rise. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points. **What happened:** copper rose by about half over the chart period. The margin climbed above 30% while export prices were high, then fell to 16% in Q1 FY27 as exports stalled and cost rises were only partly recovered.",
        competitors: [{ name: 'Voltamp Transformers', note: 'Gujarat neighbour selling to Indian industry.' }, { name: 'Transformers & Rectifiers, Atlanta', note: 'Larger makers in the same 66–220 kV range at home.' }, { name: 'Korean, Turkish and Chinese makers', note: 'Its main rivals for export orders.' }],
        position: "**A mid-sized maker (7,500 MVA) with an unusually large export share** for its size, and among the highest-return transformer makers in India.",
        money: "Debt-free, with about ₹246cr of net cash and investments. The expansion is funded from its own cash. Promoters hold **62%**, down from 66%.",
        watch: ["Freight costs and export collections recovering.", "The Q2 margin: how much of the cost rise it recovers.", "The 220 kV plant starting in April 2027."],
        charts: electricalTransformersCharts['Shilchar Tech.'],
    },
    {
        company: 'Voltamp Transformers',
        tagline: "Vadodara maker of oil-filled and dry-type transformers, focused on industrial customers; debt-free with a ₹995cr investment portfolio.",
        revenue: '₹2,154cr (FY26, standalone)',
        products: [
            { name: 'Oil-filled power and distribution transformers', text: "Up to 120 MVA; it sold 16,514 MVA in FY26 and ran above 100% utilisation." },
            { name: 'Dry-type transformers', text: "Resin types up to 10 MVA for buildings, data centres and plants." },
            { name: 'Compact substations and ring main units', text: "Packaged units up to 2.5 MVA and 33 kV, and 12 kV switching units." },
            { name: 'New plant', text: "A ₹200cr greenfield plant for power transformers up to 250 MVA and 220 kV (6,000 MVA a year), starting from July 2026." },
        ],
        revenueText: "Products are about 96% of revenue and services the rest. **Exports were 3.2% of FY26 revenue.** It does not split revenue by product or voltage and holds no earnings calls. Order book: ₹1,510cr (12,377 MVA).",
        mixes: [
            { caption: 'Revenue by market, FY26', parts: [{ label: 'India', share: 97 }, { label: 'Exports', share: 3 }] },
        ],
        customers: [
            "**Industry**: steel, metals, cement, chemicals, pharmaceuticals, refineries, sugar, automotive and data centres. Management moved away from utility tenders years ago.",
            "**Transmission utilities, real estate and solar developers**, and other equipment makers.",
        ],
        difficulty: { level: 'Medium', text: "A mature range up to 120 MVA. The 220 kV plant is a step up that will need approvals." },
        moat: "A long record with industrial buyers, reliable delivery and a debt-free balance sheet. No clear technology edge.",
        inShort: ["**A Vadodara transformer maker** selling mainly to industry (steel, cement, refineries, data centres) rather than utilities.", "**Good:** debt-free with about ₹1,068cr of net cash and investments, and very steady. **Bad:** no earnings calls or guidance, and it says margins will normalise.", "**Verdict: wait.** The price needs much more growth than I expect."],
        salesDrivers: ["**Industrial investment in India**: steel, metals, cement, chemicals, pharmaceuticals, refineries and data centres.", "**Capacity**: above 100% utilisation for two years; the 220 kV plant from July 2026 adds 6,000 MVA and bigger units.", "**Selective ordering**: it skips low-margin utility tenders, which protects margins but caps growth.", "**Order book**: ₹1,510cr (12,377 MVA), about eight months of sales."],
        inputs: "**Copper**, **CRGO steel**, oil and steel tanks. Materials were 53% of sales and manufacturing costs another 24% in FY26 (as filed).",
        costEffect: "**Not disclosed.** Voltamp does not say how many of its orders carry price-variation clauses. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points. **What happened:** its margin was near 15% at both ends of the chart period while copper rose by about half, so it has passed most rises on over time; it peaked higher in FY25, and management expects it to normalise.",
        competitors: [{ name: 'Bharat Bijlee', note: 'Listed maker of transformers and motors for industry.' }, { name: 'Siemens, Hitachi Energy', note: 'Multinationals competing for large industrial and data-centre orders.' }, { name: 'Shilchar, TARIL', note: 'Indian makers in the same voltage range.' }],
        position: "**One of India's most established transformer makers for industrial buyers**; it sold 16,514 MVA in FY26.",
        money: "About ₹1,068cr of net cash and investments, including a ₹995cr investment portfolio. It proposed a ₹101cr dividend. Promoters hold **30%**, down from 38%.",
        watch: ["The 220 kV plant ramping up.", "Whether margins settle near 15% or lower.", "Order-book growth from ₹1,510cr."],
        charts: electricalTransformersCharts['Voltamp Transformers'],
    },
    {
        company: 'Supreme Power',
        tagline: "Chennai-based transformer maker scaling up to 200 MVA and 220 kV after opening a new 9,000 MVA plant; listed on the NSE SME platform.",
        revenue: '₹190cr (FY26, standalone)',
        products: [
            { name: 'Power transformers', text: "Up to 200 MVA and 220 kV from the new Kannur plant; 77% of the order book." },
            { name: 'Distribution transformers', text: "Smaller units for utilities and industry; 18% of the order book." },
            { name: 'Inverter-duty transformers', text: "For solar plants; 5% of the order book." },
            { name: 'Service', text: "Repair and servicing of transformers." },
        ],
        revenueText: "In Q1 FY27, **government customers were 40% of revenue** and private customers 60%. Of the ₹590cr order book, **power transformers are 77%**.",
        mixes: [
            { caption: 'Order book by product, August 2026 (₹590cr)', parts: [{ label: 'Power', share: 77 }, { label: 'Distribution', share: 18 }, { label: 'Inverter-duty', share: 5 }] },
            { caption: 'Revenue by customer, Q1 FY27', parts: [{ label: 'Private', share: 60 }, { label: 'Government', share: 40 }] },
        ],
        customers: [
            "**Southern state utilities** such as Karnataka's KPTCL (including a large 165 MVA order, per the call) and Kerala's KSEB, plus customers in its home state of Tamil Nadu; now entering Maharashtra and Telangana.",
            "**EPC contractors, renewable developers and industry.** It has 880 clients; no direct exports yet.",
        ],
        difficulty: { level: 'Medium', text: "Standard designs up to 220 kV. Data-centre and larger orders need a 165 MVA type test first, and bigger units need a new plant." },
        moat: "Price-variation clauses on 80–85% of orders, the best in the sector. Otherwise small, regional and competing with larger makers.",
        inShort: ["**A Chennai transformer maker** (up to 200 MVA and 220 kV) selling to southern utilities, EPC firms and industry; listed on the NSE SME platform.", "**Good:** price-variation clauses on 80–85% of orders and an order book three times sales. **Bad:** small, burning cash while it builds, and it missed its own FY26 guidance.", "**Verdict: follow.** The price fits, but the new plant has to prove itself."],
        salesDrivers: ["**Southern state utilities** (Karnataka, Kerala, Tamil Nadu), now entering Maharashtra and Telangana.", "**Filling the new Kannur plant**: capacity is now 9,000 MVA, and the new plant runs at 20–25%.", "**Bigger units**: 77% of the order book is power transformers; a 165 MVA order and its type test open larger work, including data centres.", "**Customer readiness**: it guides ₹250–300cr against ₹377cr scheduled because 10–20% of customers may not be ready to take delivery."],
        inputs: "**Copper**, **CRGO steel**, oil and steel tanks. Materials were 78% of sales in FY26, the highest share here.",
        costEffect: "**Well protected.** 80–85% of orders carry price-variation clauses, and it generally does not take orders without one. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points. **What happened:** copper rose by about half over the chart period and its margin still rose from about 11% to 15–16%; its Q1 gross margin rose to 28.8%.",
        competitors: [{ name: 'SGB Transformers, Voltamp, ABB (Hitachi Energy)', note: 'Named on its call as its main rivals.' }, { name: 'Atlanta, TARIL', note: 'Larger makers in the same utility tenders.' }],
        position: "**A small regional maker**, one of the few SME-listed companies making 220 kV transformers.",
        money: "Net debt about ₹36cr. Management says no equity is needed this year, but more capital may be needed by FY28; CRISIL rates it BBB. Promoters hold **57%**.",
        watch: ["Utilisation at the new plant.", "The 165 MVA type test.", "A move to the main board, and funding needs in FY28."],
        charts: electricalTransformersCharts['Supreme Power'],
    },
    {
        company: 'Transformers & Rect',
        tagline: "Transformers and Rectifiers (India): one of India's largest transformer makers, with a range up to 1,200 kV and specialist furnace and rectifier units.",
        revenue: '₹2,507cr (FY26, consolidated)',
        products: [
            { name: 'Power transformers and reactors', text: "Up to 500 MVA and 1,200 kV; 80% of the order book. Shunt reactors are about 5%." },
            { name: 'Distribution transformers', text: "About 10% of the order book." },
            { name: 'Furnace, rectifier and specialty transformers', text: "For steel furnaces, smelters, electrolysis and mobile substations; about 5% of the order book." },
            { name: 'Backward integration', text: "₹900–1,000cr being spent to make its own copper conductor, pressboard, bushings, tanks and CRGO processing." },
        ],
        revenueText: "The ₹6,630cr order book is **80% power transformers**. Customers are split about **half government, half private**, and it bids for roughly 80% domestic and 20% export work. It does not publish a revenue split.",
        mixes: [
            { caption: 'Order book by product, June 2026 (₹6,630cr)', parts: [{ label: 'Power', share: 80 }, { label: 'Distribution', share: 10 }, { label: 'Reactors', share: 5 }, { label: 'Furnace and rectifier', share: 4 }, { label: 'Specialty', share: 1 }] },
        ],
        customers: [
            "**Power Grid** (a single order above ₹1,000cr) and **state utilities** such as Gujarat's GETCO and Rajasthan's RRVPNL.",
            "**Private developers and industry**: Adani, ReNew, Avaada, Jindal, Reliance, Hindustan Zinc and others; a ₹150cr US export order.",
        ],
        difficulty: { level: 'Very high', text: "It makes the full range to 1,200 kV and has an HVDC repair qualification from Power Grid. Running three large plants efficiently has proved harder: one is at 27% utilisation." },
        moat: "Range, approvals and scale that few Indian makers match. Weak cash conversion and credibility issues limit what that is worth.",
        inShort: ["**One of India's largest transformer makers**, with a range up to 1,200 kV and specialist furnace and rectifier units.", "**Good:** the widest range, 75,000+ MVA of capacity and a ₹6,630cr order book. **Bad:** only 11% of five years' operating profit became cash.", "**Verdict: wait.** The price fits, but it has to show cash first."],
        salesDrivers: ["**Power Grid and state transmission**: about half its customers are government, including one Power Grid order above ₹1,000cr.", "**Private developers and industry**: Adani, ReNew, Jindal and others; a ₹150cr US export order.", "**Utilisation, not capacity**: existing plants can support ₹5,000–6,000cr of revenue, but Changodar runs at 27%.", "**Making its own inputs**: ₹900–1,000cr to make 80–85% of its materials in-house, which it says adds 2–3 points of margin from FY28."],
        inputs: "**Copper** conductors, **CRGO steel**, pressboard, bushings, oil and steel. Materials were 68% of sales in FY26. It is starting to make its own conductors, pressboard, bushings and processed CRGO.",
        costEffect: "**Protected by price-variation clauses**, management says, though it gives no share. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points. **What happened:** its margin rose from under 3% in FY22 to about 16% as the shortage lifted prices, even while copper rose by about half. It stocked up on steel and copper in FY26, which tied up cash.",
        competitors: [{ name: 'Hitachi Energy, Siemens Energy, GE Vernova', note: 'Multinationals it meets at the highest voltages.' }, { name: 'Atlanta, BHEL, CG Power', note: 'Indian rivals in 220–400 kV.' }, { name: 'Vadodara makers and small firms', note: 'Its rivals in 33–220 kV, where prices are tighter.' }],
        position: "**Among the few Indian-owned makers able to build 765 kV and above**, with one of the largest capacities in the country.",
        money: "Net debt about ₹316cr (Screener); ₹145cr of QIP money is still unspent for backward integration. Promoters hold **64%**, down from 75%.",
        watch: ["Changodar utilisation rising from 27%.", "Working-capital days and operating cash turning positive.", "Backward-integration plants starting on time."],
        charts: electricalTransformersCharts['Transformers & Rect'],
    },
    // ── Components ────────────────────────────────────────────────────────────
    {
        company: 'Yash Highvoltage',
        tagline: "Vadodara maker of transformer bushings, one of fewer than 12 independent bushing makers worldwide; listed on the BSE SME platform.",
        revenue: '₹235cr (FY26, standalone)',
        products: [
            { name: 'RIP bushings', text: "Resin-impregnated paper bushings, the modern dry type, now most of its sales. Their cores are imported from a Swiss partner today; a new plant (from about October 2026, designed for up to 550 kV) will make them in-house." },
            { name: 'OIP and high-current bushings', text: "Oil-impregnated bushings and bushings for very high currents; in short supply, and it is adding capacity." },
            { name: 'Retrofits', text: "Replacing bushings on transformers already in service; about 6–7% of revenue and high-margin." },
            { name: 'Sukrut Electric (50%)', text: "Transformer components, about ₹25cr of revenue in FY26." },
        ],
        revenueText: "About 7,000 bushings sold in FY26. By value, management says **15–18% of orders are OIP and high-current bushings and the rest RIP**. **Exports were about 7% of FY26 revenue**, with a target of 20%+ in two to three years.",
        mixes: [
            { caption: 'Order book by product (company estimate)', parts: [{ label: 'RIP bushings', share: 83 }, { label: 'OIP and high-current', share: 17 }], note: 'Management gave 15–18% for OIP and high-current; the midpoint is shown.' },
            { caption: 'Revenue by market, FY26', parts: [{ label: 'India', share: 93 }, { label: 'Exports', share: 7 }] },
        ],
        customers: [
            "**Transformer makers**, who place 24–36 month blanket orders, and **utilities** replacing bushings on existing transformers.",
            "**1,000+ customers in 60+ countries**, including all of India's nuclear power utilities; a US subsidiary and European distributors opened in FY26.",
        ],
        difficulty: { level: 'Very high', text: "Bushings must work flawlessly for decades at high voltage, and qualification takes years. Making its own resin cores is new for Yash and for India." },
        moat: "Approvals and a 96% repeat-order rate on a small but critical part. Buyers rarely switch to save money when failure is so costly.",
        inShort: ["**Makes bushings**, the insulated parts that carry power through a transformer's wall, for transformer makers and utilities in 60+ countries; listed on the BSE SME platform.", "**Good:** 96% repeat orders and one of fewer than 12 independent makers worldwide. **Bad:** only a third of its profit has become cash, and it is raising equity.", "**Verdict: follow.** The best moat here, priced close to the growth I expect; buy on a fall."],
        salesDrivers: ["**Every new transformer**: each needs several bushings, so its volume follows the whole industry's.", "**Replacements**: utilities replacing bushings on old transformers (retrofits, 6–7% of revenue, high margin).", "**The new plant** (from about October 2026, up to 550 kV), which will make its own resin cores instead of importing them.", "**Exports**: 7% of FY26 sales, targeted at 20%+ in two to three years through a US subsidiary and European distributors."],
        inputs: "**Resin-impregnated paper cores** (imported from a Swiss partner today), **copper and aluminium** conductors, insulator housings and oil. Materials were 51% of sales in FY26.",
        costEffect: "**Passed on through pricing.** It prices orders to allow for supplier increases and currency moves, and has arrangements to pass rises on. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points. **What happened:** copper rose by about a third over the chart period and its margin rose from about 23% to 26%. The bigger cost risk is the rupee, because cores are imported until the new plant runs.",
        competitors: [{ name: 'Hitachi Energy, Trench, CG Power', note: 'The established bushing makers.' }, { name: 'MIM and other Indian makers', note: 'Smaller domestic rivals.' }, { name: 'Chinese and European makers', note: 'Its rivals in exports; the government has considered allowing Chinese bushings back in.' }],
        position: "**One of India's largest independent bushing makers**, at a time when bushing supply is short worldwide.",
        money: "Net debt about ₹18cr (debt-to-equity 0.17). The board approved a ₹150cr raise; management plans to draw ₹100–110cr. Promoters hold **55%**, down from 58%.",
        watch: ["The new plant making its own cores on time.", "Exports rising from 7%.", "Cash conversion as the plant settles."],
        charts: electricalTransformersCharts['Yash Highvoltage'],
    },
    {
        company: 'Quality Power El',
        tagline: "A group of specialist grid-equipment makers in India and Turkey, supplying reactors, instrument transformers, power-quality systems and storage converters.",
        revenue: '₹947cr (FY26, consolidated)',
        products: [
            { name: 'Quality Power (parent)', text: "Reactors, coils, line traps and HVDC magnet wire for transmission and HVDC links, up to 765 kV." },
            { name: 'Mehru (51% owned)', text: "Instrument transformers up to 500 kV, grading capacitors and gas-insulated switchgear parts." },
            { name: 'Endoks, Turkey (51% owned)', text: "STATCOMs, static var compensators, harmonic filters and battery-storage converters (a 4 GW plant)." },
            { name: 'Others', text: "S&S Transformers (special transformers), Sukrut (tanks, 50%), and a proposed purchase of an insulator maker in Visakhapatnam." },
        ],
        revenueText: "In Q1 FY27, **Endoks was about 41% of revenue, Mehru 32% and the parent 27%** (my calculation from figures on the call). Partners own 49% of Endoks and Mehru, so a large share of their profit does not belong to Quality Power's shareholders.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (my calculation)', parts: [{ label: 'Endoks (51%)', share: 41 }, { label: 'Mehru (51%)', share: 32 }, { label: 'Parent', share: 27 }] },
            { caption: 'Order book by business, June 2026 (₹1,945cr)', parts: [{ label: 'Endoks', share: 41 }, { label: 'Mehru', share: 30 }, { label: 'Parent', share: 29 }] },
        ],
        customers: [
            "**Global equipment makers**: Hitachi Energy, Siemens, Siemens Energy, GE Vernova, Toshiba, Hyosung, Eaton.",
            "**Utilities and EPC firms**: Power Grid, Adani Energy Solutions, L&T, KEC, Saudi Aramco; grid operators in Denmark and Sweden. 200+ customers in 100+ countries.",
        ],
        difficulty: { level: 'Very high', text: "HVDC reactors, STATCOMs and high-voltage instrument transformers need specialist design and long approval by global equipment makers. A new plant needs about 60 customer audits before it can run fully." },
        moat: "Approvals with the world's largest grid-equipment makers and niche technology. Its advantage is spread across several partly owned businesses.",
        inShort: ["**A group of specialist grid-equipment makers** in India and Turkey: reactors and HVDC coils, instrument transformers, power-quality systems and storage converters.", "**Good:** approved by Hitachi, Siemens and GE Vernova, with a ₹1,945cr order book. **Bad:** partners own 49% of its two largest businesses, and a new plant needs about 60 customer audits.", "**Verdict: follow.** Good technology, but the price needs more growth than I expect."],
        salesDrivers: ["**HVDC and grid-stability projects** in India and Europe, which need reactors, coils and STATCOMs.", "**Global equipment makers outsourcing parts**: Hitachi, Siemens and GE Vernova buy from it; it aims to complement them, not compete.", "**The new Sangli plant**, whose output depends on passing about 60 customer audits over six months.", "**Storage and acquisitions**: a 4 GW storage-converter plant in Turkey and a proposed insulator-maker purchase."],
        inputs: "**Aluminium and copper** wire for coils and reactors, **steel**, insulation, oil and electronic parts for converters. Materials were 60% of sales in FY26.",
        costEffect: "**Depends on the business.** Mehru passes copper and oil on within about eight weeks; the parent feels aluminium price changes about six months later because of its long winding cycle. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points. **What happened:** aluminium rose by about three-fifths over the chart period, yet its margin rose from about 8% to 18% as the acquisitions changed its mix. Q1's cost rise will show in Q2 and Q3.",
        competitors: [{ name: 'Hitachi Energy, Siemens Energy, GE Vernova', note: 'Also its customers; they make some of the same parts themselves.' }, { name: 'Trench, CG Power', note: 'Rivals in reactors and instrument transformers.' }, { name: 'Chinese HVDC suppliers', note: 'Four Chinese firms with Indian plants may bid for HVDC work.' }],
        position: "**One of few Indian makers of HVDC reactors and power-quality systems**, selling to 200+ customers in 100+ countries.",
        money: "About ₹208cr of net cash (group debt about ₹23cr), falling as it funds expansion itself. Promoters hold **74%**. Partners own 49% of Endoks and Mehru.",
        watch: ["Sangli audits and the Q3 margin dip.", "The insulator acquisition.", "Hyperinflation accounting in Turkey."],
        charts: electricalTransformersCharts['Quality Power El'],
    },
    {
        company: 'Rishabh Instruments',
        tagline: "Maker of electrical measuring instruments and current transformers in India and Poland, plus a loss-making aluminium die-casting business in Poland.",
        revenue: '₹775cr (FY26, consolidated)',
        products: [
            { name: 'Measuring and control instruments', text: "Panel meters, energy and power-quality analysers, test and measurement tools, and low- and medium-voltage current transformers." },
            { name: 'Solar inverters and electronics', text: "Its own single- and three-phase solar inverters, plus contract electronics (circuit-board assembly)." },
            { name: 'Lumel (Poland)', text: "Instruments, grid-control equipment for German grid upgrades, and radiation-detection gates for airports and borders." },
            { name: 'Lumel Alucast', text: "High-pressure aluminium die-casting, mostly for cars; deliberately shrinking out of unprofitable contracts." },
        ],
        revenueText: "Instrumentation was **69% of FY26 revenue** and die-casting 31%; in Q1 FY27 the split was 78% and 22% as die-casting shrank. Instrumentation earns about a 25% EBITDA margin; die-casting lost money.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Instrumentation', share: 69 }, { label: 'Die-casting', share: 31 }] },
            { caption: 'Revenue by segment, Q1 FY27', parts: [{ label: 'Instrumentation', share: 78 }, { label: 'Die-casting', share: 22 }] },
        ],
        customers: [
            "**Utilities, panel builders, industry, data centres and railways** in India, Europe, the US (about ₹30cr, targeting ₹100cr) and China.",
            "**Car-part buyers** in Europe for die-casting.",
        ],
        difficulty: { level: 'Medium', text: "Precision instruments need design and certification (UL for the US), but many competitors exist. Die-casting is a commodity business." },
        moat: "Its own designs, a broad range and 60–70% gross margins on core products. None in die-casting.",
        inShort: ["**Makes electrical measuring instruments**, current transformers and solar inverters in India and Poland, plus a loss-making die-casting business.", "**Good:** instrumentation grows 20–25% a year at about a 25% margin, and the group has net cash. **Bad:** die-casting (22–31% of sales) still loses money.", "**Verdict: pass.** A good business inside a weak one."],
        salesDrivers: ["**Grid and industrial instrumentation** in India and Europe, including grid-control equipment for German grid upgrades.", "**Solar inverters**: EPC contractors turning away from Chinese kits.", "**The US**: about ₹30cr of sales, targeted at ₹100cr.", "**Die-casting shrinking on purpose** as it exits unprofitable contracts, which cuts sales but helps margin."],
        inputs: "**Electronic parts and circuit boards**, copper and steel for current transformers, and **aluminium** for die-casting. Materials were 38% of sales and staff 30% in FY26.",
        costEffect: "**Mostly insulated.** Core products earn 60–70% gross margins, so a metal spike barely moves them; die-casting is the exposed part. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points. **What happened:** circuit-board prices were flat over the chart period, and the margin rose from about 10% to 17% as die-casting losses shrank.",
        competitors: [{ name: 'Secure Meters, Schneider, Siemens', note: 'Rivals in panel meters and power-quality analysers.' }, { name: 'Fluke, Megger', note: 'Global names in test and measurement tools.' }, { name: 'Chinese inverter makers', note: 'The main competition in solar inverters.' }],
        position: "**A niche instrument maker with its own designs**, selling in India, Europe, the US and China; small in each market.",
        money: "Net cash about ₹121cr at FY26 (Screener); the company puts it at ₹161cr in June 2026. Promoters hold **69%**.",
        watch: ["Die-casting breakeven by the end of FY27.", "Any sale or demerger of die-casting.", "US growth."],
        charts: electricalTransformersCharts['Rishabh Instruments'],
    },
    // ── Medium-voltage equipment ──────────────────────────────────────────────
    {
        company: 'Schneider Ele. Infra',
        tagline: "Schneider Electric Infrastructure: the French group's listed Indian unit for medium-voltage distribution equipment up to 33 kV.",
        revenue: '₹2,891cr (FY26, standalone)',
        products: [
            { name: 'Distribution transformers', text: "Oil and dry-type transformers, including for data centres and chip plants; it does not make large high-voltage units." },
            { name: 'Medium-voltage switchgear and ring main units', text: "Air- and gas-insulated switchgear, including a pilot of units without SF6 gas." },
            { name: 'Protection and automation', text: "Relays, control panels and substation automation; its Kolkata plant also makes circuit breakers for Vande Bharat trains." },
            { name: 'Software', text: "The group's EcoStruxure grid-management and monitoring software." },
        ],
        revenueText: "The company does not split revenue by product. **Exports are about 10–12% of revenue.** More than a fifth of its ₹2,100cr+ backlog comes from data centres, chip plants and other new segments.",
        customers: [
            "**Private utilities, data centres, chip plants, cement, metals, mining and airports**, often through EPC contractors.",
            "**State distribution companies** under the RDSS scheme, through tenders that often do not allow price variation.",
        ],
        difficulty: { level: 'High', text: "Switchgear and protection systems need group technology and software. It does not play in high-voltage transmission." },
        moat: "Schneider's brand, technology and software make switching costly for customers. Weak contract terms (only 20–25% reprice) cap margins.",
        inShort: ["**Schneider Electric's listed Indian unit**, making distribution transformers, medium-voltage switchgear, relays and grid software up to 33 kV.", "**Good:** record orders, with data centres and chip plants over a fifth of the backlog. **Bad:** only 20–25% of contracts pass on metal prices, and Q1's margin was 5%.", "**Verdict: avoid.** The price needs close to 40% growth a year."],
        salesDrivers: ["**Data centres and chip plants**: India's data-centre capacity is expected to rise from about 1.6 GW to 8 GW by 2030.", "**Distribution upgrades** under RDSS (about ₹3 lakh crore), through state tenders.", "**Railways and industry**: metros, Vande Bharat trains, cement, metals and mining.", "**Exports**: about 10–12% of revenue."],
        inputs: "**Copper, aluminium and steel** for transformers and switchgear, electronic parts for relays, and labour. Materials were 63% of sales in FY26.",
        costEffect: "**Poorly protected.** Only 20–25% of contracts carry price variation; state tenders often do not allow it, and it raised prices later than rivals. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points. **What happened:** copper rose by about half over the chart period and its margin fell from about 10% to 5% in Q1 FY27 on fixed-price orders booked before December.",
        competitors: [{ name: 'Siemens, ABB India, Hitachi Energy', note: 'Multinationals in medium-voltage switchgear and automation.' }, { name: 'CG Power', note: 'Indian rival in switchgear and transformers.' }, { name: 'Local distribution-transformer makers', note: 'Compete on price in state tenders.' }],
        position: "**A leading medium-voltage supplier in India** backed by group technology; it does not make equipment above 33 kV.",
        money: "Net debt about ₹275cr (Screener). It plans ₹500cr of capex over three years. The Schneider group holds **75%**.",
        watch: ["Margin recovery as old fixed-price orders run off.", "The share of new contracts with price variation.", "Data-centre order flow."],
        charts: electricalTransformersCharts['Schneider Ele. Infra'],
    },
];

export const electricalTransformersBusinesses = { intro, profiles };
