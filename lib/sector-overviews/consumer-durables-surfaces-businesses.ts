import { BusinessProfile, OverviewSection } from './types';
import { consumerDurablesCharts } from './card-data/consumer-durables';

// Tab 2 of the Consumer Durables · Tiles, bath and wood panels note: what each company actually does.
// Revenue totals are the filed figures (Screener). Capacities, volumes and splits come from the
// companies' latest presentations, calls, annual reports and rating reports; where a figure is not
// disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (Cera and Greenpanel standalone, the others consolidated); splits are from each company's latest call, presentation, annual report or rating report. These companies have no single raw material with a reliable Indian price index, so there is no cost-versus-input chart: each card explains in words what drives costs, namely kiln gas for tiles and sanitaryware, brass for faucets, and timber and chemical resins for plywood, MDF and laminates, and how the margin has moved with them.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Eleven companies that make the surfaces of an Indian home, in three groups. All of them sell mostly through dealers to homeowners, carpenters, plumbers and builders, and their demand follows new homes two to three years after launch, plus renovations.",
        ],
        points: [
            {
                label: 'Tiles',
                text: "Kajaria, Somany and Orient Bell grind **clay and feldspar**, press the powder into tiles, glaze and print them, and fire them in long **gas- or propane-fired kilns**. Fuel is the swing cost: gas is about 40% of a Morbi tile's cost. Morbi in Gujarat makes 80–90% of India's tiles in hundreds of small plants, has more capacity than India needs, and exports the surplus; its prices set the ceiling for the brands. When Morbi's gas price doubled in March 2026 and it shut for six weeks, **the branded makers with plants on cheaper gas elsewhere raised prices and took share**; when gas falls, or Morbi's lost exports come home, the premium shrinks again.",
            },
            {
                label: 'Sanitaryware and bath',
                text: "Cera and Hindware fire **WCs and basins** in gas kilns and cast **brass faucets**, and buy about half of what they sell (often from Morbi) plus tiles to round out the range. Brass is about 60% of a faucet's cost and rose about 40% in a year; kiln gas matters less than in tiles. **Brands and plumbers' trust carry the price**, so bathware earns steadier margins than tiles and needs little plant, but growth now costs more in advertising and discounts. Hindware also owns a low-margin PVC pipe business and a kitchen-appliance arm.",
            },
            {
                label: 'Plywood, MDF and laminates',
                text: "Century, Greenply, Greenpanel, Rushil, Greenlam and Stylam make the boards and sheets furniture is built from. **Plywood** glues thin layers of timber veneer; **MDF** and particle board press wood fibre or chips with resin; **laminates** press printed paper soaked in phenol and melamine resin onto the board's face. **Timber and veneer** and **urea, melamine and phenol resins** (crude-linked chemicals, up 35–45% in spring 2026) are the main costs. Branded plywood competes with a huge unorganised market and can pass costs on; **MDF has too much capacity** (about 5.1 million cubic metres against demand of 3.7 million in FY26), so price rises there do not stick. Laminate exporters sell to 80–120 countries and earn the highest margins in the group.",
            },
        ],
    },
    {
        heading: 'Three ways of earning',
        body: [
            "How each business earns decides what its margin means and what can squeeze it.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'What squeezes it'],
                rows: [
                    ['**Branded tiles, part made and part bought**', 'Kajaria, Somany, Orient Bell', 'A price per square metre above unbranded Morbi tiles; own plants earn more than tiles bought from partners', 'Cheap gas letting Morbi cut prices; Morbi exports coming home; idle kilns'],
                    ['**Branded bathware and plumbing**', 'Cera, Hindware (plus Kajaria’s Kerovit and Somany’s bathware)', 'A brand premium on WCs, basins and taps, much of it outsourced, so little capital is needed', 'Brass prices; trade discounts; project orders billed at old prices; for Hindware, thin pipe margins and debt'],
                    ['**Boards and sheets by volume**', 'Century, Greenply, Greenpanel, Rushil (plywood and MDF); Greenlam, Stylam (laminates)', 'A price per cubic metre or per sheet; plywood and export laminates hold price, MDF follows the market', 'Resin and timber costs; MDF oversupply; export freight and currency; interest on plants built with debt'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Kajaria Ceramics',
        inShort: ["**India's largest tile maker**, with 82.7 million sq m of capacity in five states, plus Kerovit bathware and tile adhesives, sold through about 1,800 dealers.", "**Good:** cost cuts lifted the margin (company EBITDA) from 12.8% to 17.8% in FY26, its kilns burn cheaper fuel than Morbi's, and it held about ₹793cr of net cash in June 2026 even after a ₹297cr buyback. **Bad:** most of its growth (revenue +24% in Q2 FY27 on 10% more volume) is price after the Morbi gas shock, the new lines now cost about ₹520cr against ₹375cr planned, and a ₹20cr fraud hit its bathware subsidiary.", "**Verdict: follow.** The best-run business in the group, but the price needs more growth than I expect."],
        tagline: "India's biggest ceramic and vitrified tile maker, with its own plants in Rajasthan, Gujarat, Uttar Pradesh, Andhra Pradesh and Telangana, a bathware brand (Kerovit) and a tile-adhesive business.",
        revenue: '₹4,830cr (FY26, consolidated)',
        products: [
            { name: 'Tiles', text: "Floor and wall tiles in ceramic, polished vitrified and glazed vitrified (GVT) grades, from about ₹400 a square metre on average. It sold 118.5 million sq m in FY26, about 27% of it bought from joint ventures and Morbi outsourcing partners. The tile segment earned 15.2% in FY26, up from 10.7%." },
            { name: 'Kerovit bathware', text: "Sanitaryware (WCs, basins) made at Morbi and faucets made at Gailpur, sold under the Kerovit name. Bathware sales grew 33% in Q1 FY27 to ₹122cr, but management calls profits here ‘difficult’ this year." },
            { name: 'Tile adhesives', text: "Cement-based glues that replace mortar for laying large tiles: 9,000 tonnes a month at Gailpur plus a new 9,000-tonne plant at Erode (Tamil Nadu) since May 2026. Q1 FY27 sales were ₹45cr, up from ₹25cr." },
            { name: 'Large-format slabs (coming)', text: "Two new GVT lines for big slabs, 21–22 million sq m in all, due March–April 2027. Management admits ‘Kajaria missed out’ on this fast-growing format." },
        ],
        revenueText: "Tiles were **89% of FY26 revenue** (₹4,280cr) and bathware and adhesives 11% (₹550cr). In Q1 FY27 tiles were ₹1,162cr, bathware ₹122cr and adhesives ₹45cr. About **70% of revenue is retail** and 30% projects, and it sells across India (North 35%, South 30%, East 20%, West 15%). Exports are under 1%.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (annual report)', parts: [{ label: 'Tiles', share: 89 }, { label: 'Bathware and adhesives', share: 11 }] },
            { caption: 'Revenue by region (ICRA, Jan 2026)', parts: [{ label: 'North', share: 35 }, { label: 'South', share: 30 }, { label: 'East', share: 20 }, { label: 'West', share: 15 }] },
        ],
        customers: ["**Homeowners and small builders** buying through about 1,800 dealers (450 of them exclusive), with 100 more dealers planned in FY27; retail is about 70% of sales.", "**Real-estate developers and institutions** (about 30%), where it reports a ‘breakthrough’ with two very large builders.", "**Morbi outsourcing partners** are suppliers, not customers, but matter: about 40 million sq m of FY27 sales will still be bought from them."],
        difficulty: { level: 'Medium', text: "Tile making is well understood: clay and feldspar are ground, pressed and fired in gas kilns. Hundreds of Morbi plants do it. What is hard is doing it cheaply at scale in many regions, with hundreds of designs in stock and a brand that dealers trust." },
        moat: "Scale, a national dealer network and plants on cheaper gas outside Morbi let it earn about twice the margin of other tile makers. The weakness is that unbranded Morbi tiles cap its prices once gas is cheap again.",
        salesDrivers: ["**Home completions**: tiles go in two to three years after a project is launched, so today's steady launch pipeline supports mid-to-high single-digit volume growth; management now promises double-digit volume for the next nine months and about 130 million sq m in FY27.", "**The gap to Morbi prices**: when Morbi's gas doubled in March 2026, the price gap between Kajaria and unbranded tiles narrowed from about 40% to under 20%, pushing undecided buyers to the brand. The gap widens again if gas falls.", "**Price rises**: own-product prices rose about 10–14% after the shock, so Q1 FY27 revenue rose 20% on only 6% more volume.", "**New capacity**: two large-format lines (Srikalahasti 12.5 million sq m for ₹340cr by end-June 2027, Gailpur 11 million sq m for ₹180cr by mid-2027, as revised on 24 October 2026) add about 28%; a ₹34cr Durgapur adhesive plant follows; management expects the Gailpur line alone to sell ₹400–450cr a year and to cut Morbi outsourcing ‘drastically’ from FY28.", "**Bathware and adhesives**: bathware value growth of 35–40% is guided for FY27, and the second adhesive plant doubles capacity."],
        inputs: "**Natural gas** for the kilns and spray dryers (GAIL gas in the north, plus about 30% cheap biofuel), **clay, feldspar and glaze chemicals**, packaging, and tiles bought in from Morbi partners. Materials were 40% of sales in FY26, and power and fuel with other factory costs another 25%.",
        costEffect: "**Mostly passed on, and helped by cheaper fuel.** Tile prices are set by what Morbi charges, and Morbi's cost moves with gas, which is about 40% of a Morbi tile's cost. When gas rises for everyone, Kajaria raises prices with the market; because its own fuel cost less (about ₹71 a cubic metre blended in Q1 FY27 against about ₹85 at Morbi), it gains margin. Tiles bought from Morbi rose 40–45% but are resold at the same percentage margin. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (18% to 14%). **What happened:** there is no Indian price index for its fuel and clay mix. The margin moved with its own costs and with Morbi: it slipped from 16% in FY24 to 14% in FY25, rose to 18% in FY26 through the ‘Operation Manthan’ cost cuts and the closure of loss-making plywood, and reached 20% in Q1 FY27 as Morbi's shutdown let prices rise.",
        competitors: [{ name: 'Morbi tile makers', note: 'Hundreds of small Gujarat plants making 80–90% of India’s tiles; cheaper and quick to copy designs, but hit hardest when gas prices jump.' }, { name: 'Somany Ceramics', note: 'The No. 2 brand, but two-thirds of its tiles come from partners and its margin is about half of Kajaria’s.' }, { name: 'Orient Bell, Asian Granito, Johnson (Prism)', note: 'Smaller branded makers with thinner margins.' }, { name: 'Cera, Hindware, Jaquar', note: 'Rivals for Kerovit in bathware, where Kajaria is still small.' }],
        position: "**India's largest tile maker by capacity and sales**, with the highest margin among the listed tile companies; ICRA calls it the player with the best ability to pass on costs.",
        money: "Screener shows **₹565cr of net cash** at March 2026; the company puts it at about ₹793cr in June 2026, after a ₹297cr buyback. FY27 capex is ‘roughly ₹400cr’ including the two new lines, plus ₹50cr to buy the rest of Kerovit and about ₹12cr of renewable power, all from its own cash. ICRA rates it AA/Stable. It paid out about 46% of FY26 profit as dividends. Promoters held **47.7%**, little changed from 47.5% in September 2023, until family members and trusts sold 2.5% (₹484cr, at about ₹1,210) on 1 October 2026, leaving about 45.2%.",
        watch: ["Double-digit volume growth in Q3 and Q4 FY27, as promised (Q2: +10%).", "The margin near 19.5% as advertising spending rises.", "Srikalahasti by end-June 2027 and Gailpur by mid-2027, at the raised ₹520cr cost."],
        charts: consumerDurablesCharts['Kajaria Ceramics'],
    },
    {
        company: 'Stylam Industrie',
        inShort: ["**An export-led maker of decorative and compact laminates**, the hard plastic-and-paper sheets that face furniture, worktops and walls, selling 74% abroad to 80+ countries.", "**Good:** 19–21% margins for five straight quarters, a 27% return on capital, and a plant that adds 61% to capacity, paid from its own cash. **Watch:** the plant started on 22 September 2026 after four missed dates, domestic sales have been flat for four years, and Japan's Aica Kogyo now owns 40%.", "**Verdict: follow.** An excellent franchise, but the price needs more growth than I expect."],
        tagline: "A Panchkula (Haryana) maker of high-pressure laminates, compact laminates, exterior cladding and solid surfaces, mostly for export, now 40% owned by Japan's Aica Kogyo.",
        revenue: '₹1,129cr (FY26, consolidated)',
        products: [
            { name: 'Decorative laminates', text: "Thin sheets of printed paper soaked in resin and pressed under heat, glued onto plywood or particle board to finish kitchens, wardrobes and office furniture. It makes them in India's largest press formats and sells to distributors and furniture makers in 80+ countries." },
            { name: 'Compact laminates and cubicles', text: "Thick, self-supporting laminate boards (up to 12 mm or more) for restroom cubicles, lockers, laboratory tops and wall panels. It also supplies compact laminates under other companies' brands." },
            { name: 'Exterior cladding and coated laminates', text: "Weather-proof ‘Fascia’ cladding for building fronts, PU-lacquer-coated laminates with a hard glossy finish, and pre-laminated boards." },
            { name: 'Acrylic solid surfaces (Granex)', text: "Moulded acrylic worktops and basins. Sales were only about ₹15cr in FY26, and the line is ‘completely empty right now’; the ₹50–70cr promised for FY27 has not appeared." },
        ],
        revenueText: "**Exports were 74% of FY26 revenue** (₹831cr) and India 26% (₹298cr). Exports rose from ₹638cr to ₹831cr in three years, while domestic sales have stayed near ₹300cr since FY23. Europe is the strongest market; the US and the Middle East are each 10–15%. Q1 FY27 exports were a record of about ₹247cr. The company reports one segment and does not split revenue by product.",
        mixes: [
            { caption: 'Revenue by market, FY26 (company presentation)', parts: [{ label: 'Exports', share: 74 }, { label: 'India', share: 26 }] },
        ],
        customers: ["**Overseas distributors and furniture makers** in Europe, the US and the Middle East, mostly sold free-on-board (the buyer arranges shipping).", "**Global laminate brands** that buy its compact laminates to sell under their own names.", "**Indian dealers and furniture makers**, where its brand is weak: an analyst's dealer check found them ‘aware, but not really enthused’. No customer is above 10% of revenue."],
        difficulty: { level: 'Medium', text: "Laminates are a known process, but big presses, consistent quality and a long list of international safety and hygiene certificates take years to win. Stylam says it holds more certifications than any other Indian laminate maker." },
        moat: "Decades of export approvals, distribution in 80+ countries and one of Asia's largest single-site laminate plants give it margins above peers. The weakness is a thin domestic brand and heavy dependence on export freight and currencies.",
        salesDrivers: ["**Filling the new plant**: Manak Tabra-2 (about ₹300cr, +61% capacity) began on 22 September 2026. Management expects ₹250–300cr of sales from it in FY27, ₹600–700cr in FY28 and ₹900–1,000cr at peak, about three rupees of sales per rupee spent, though first-year use is now guided at only ‘20% to 30% plus’.", "**Export demand**: Europe is steady, and Stylam says it takes share from local makers; a 10% US tariff and Gulf freight are the swing factors.", "**Currency**: a weaker rupee (about ₹112 to the euro and ₹96 to the dollar) added 3–5% to profitability in Q1 FY27.", "**A domestic revival**: promised ‘from Quarter 3’, after four flat years; the next capex, deferred until the new plant runs, will go into products ‘going along laminates’ for India.", "**The old plant was full**, which is why revenue grew only 6% a year for three years; it has only ‘5–10% more’ headroom."],
        inputs: "**Phenol and melamine resins** and **decorative and kraft papers**, about 60% of them imported, plus packaging and freight. Phenol cost about $1,400 a tonne and melamine $1,000–1,100 a tonne in Q1 FY27 after the West Asia war. Materials were 53% of sales in FY26.",
        costEffect: "**Partly passed on, cushioned by exports.** Stylam raised domestic prices 3–5% in May and export prices in small steps; because it earns euros and dollars while buying imported chemicals in the same currencies, a weaker rupee offsets part of any cost rise. Management expects raw-material prices to normalise over six to nine months. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (20% to 15%). **What happened:** there is no Indian price index for its resin and paper mix. Its margin barely moved through the resin shock: 20% in FY24, 18% in FY25, 20% in FY26 and 19–21% in each of the last five quarters, because currency gains and small price rises offset costlier chemicals.",
        competitors: [{ name: 'Greenlam Industries', note: 'India’s largest laminate maker and exporter, with a far bigger domestic brand but lower laminate margins (about 16%).' }, { name: 'Merino, Royale Touche, Century (laminates)', note: 'Strong Indian brands that dominate the domestic dealer market where Stylam is weak.' }, { name: 'European makers (Egger, Formica, Wilsonart)', note: 'Global brands it competes with, and in some cases supplies.' }],
        position: "**One of India's two big laminate exporters**, with the highest margins in the group and a niche in compact laminates, but a small player at home.",
        money: "Screener shows **₹40cr of net cash**; at March 2026 the company had about ₹24cr of cash against ₹29cr of export credit, so it is roughly neutral, not debt-free. The ₹300cr plant was paid entirely from its own cash, which is why free cash flow was about zero for two years and no dividend was paid for FY25 or FY26. CARE rates it A+ on watch since the Aica deal. Promoters hold **56.9%**, up from 54.6% in September 2023, but that now counts Aica's 40%; the operating Gupta family holds about 17%.",
        watch: ["New-plant sales each quarter against ₹250–300cr for FY27.", "Aica's plans for control, the board and the auditor.", "Domestic sales growing at last."],
        charts: consumerDurablesCharts['Stylam Industrie'],
    },
    {
        company: 'Cera Sanitaryware',
        inShort: ["**A Gujarat maker of sanitaryware and faucets**, with bought-in tiles and new Senator (luxury) and Polipluz (entry) brands, selling through 272 dealer-owned galleries.", "**Good:** ₹943cr of cash and investments, a light capital base, and Q1 FY27 volumes up 10% in sanitaryware and 18% in faucets. **Bad:** the Q1 margin fell to 10%, the FY27 margin guide was cut within a quarter, and FY26 profit fell 17%.", "**Verdict: follow.** A strong brand and balance sheet, but the price needs more growth than I expect."],
        tagline: "A bathroom-products company: WCs, basins and brass faucets made at Kadi in Gujarat or bought in, plus outsourced tiles and wellness products.",
        revenue: '₹2,050cr (FY26, standalone)',
        products: [
            { name: 'Sanitaryware', text: "WCs, basins and urinals fired in two gas kilns at Kadi, with about 60% of volume bought from outside makers, mostly in Morbi. Q1 FY27 sales rose 14% (10% volume, 2% price, 2% mix)." },
            { name: 'Faucets', text: "Brass taps, mixers and showers from a plant raised to 4 lakh pieces a month, running at 96%; it goes to 5 lakh by Q4 FY27 for about ₹5cr. About 46% is outsourced. Q1 sales rose 25%." },
            { name: 'Tiles and wellness', text: "Tiles, all made by outside suppliers, were 11% of Q1 sales (+22%); wellness products (showers, whirlpools) about 2%." },
            { name: 'New brands', text: "Senator for luxury bathrooms and Polipluz for small-town buyers sold ₹19cr in FY26 and target ₹70–80cr in FY27; they lost about ₹8.5cr last year and their head leaves on 30 September 2026." },
        ],
        revenueText: "In Q1 FY27, **sanitaryware was 47% of revenue**, faucets 40%, tiles 11% and wellness 2%. **Projects** (builders and institutions) were 43% of sales, up from about 30% a few years ago, and retail 57%. By price band, premium was 44%, mid 37% and entry 19%. From Q1 FY27 the company nets turnover discounts off revenue, which lowers reported sales by 2.5–3%.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (Q1 call)', parts: [{ label: 'Sanitaryware', share: 47 }, { label: 'Faucets', share: 40 }, { label: 'Tiles', share: 11 }, { label: 'Wellness', share: 2 }] },
            { caption: 'Revenue by channel, Q1 FY27 (Q1 call)', parts: [{ label: 'Retail', share: 57 }, { label: 'Projects', share: 43 }] },
        ],
        customers: ["**Homeowners and plumbers** buying through dealers and 272 Cera Style Galleries, across Tier-1 (38% of sales), Tier-2 (24%) and Tier-3 towns (38%).", "**Real-estate developers and institutions** (43% of Q1 sales), usually on prices fixed months earlier, so cost rises reach project bills only with a lag.", "**Rural and small-town buyers** through the new Polipluz distributors (102 going to 200)."],
        difficulty: { level: 'Medium', text: "Firing large ceramic pieces without cracks needs skill and good kilns, and faucets need precise brass casting and plating; both are well understood. What is hard to copy is a 46-year brand and a gallery network that plumbers and architects trust." },
        moat: "A trusted brand, a wide dealer network and cheap GAIL gas let Cera price above most rivals while spending little on plants. The weakness is that discounts and brass costs can eat the margin quickly, as FY26 showed.",
        salesDrivers: ["**New homes and bathroom renovations**: demand turned in Q4 FY26 and Q1 FY27, with double-digit volume growth in both quarters.", "**Morbi's gas shock**: Cera's own GAIL-fed kilns kept running while Morbi units shut, which management says won customers.", "**Price rises**: about 12% in sanitaryware and 16% in faucets between March and May 2026, in line with the industry. FY27 revenue growth is guided at 18–20%.", "**New brands and advertising**: Senator and Polipluz aim for ₹70–80cr, and brand spending rises from ₹49cr to about ₹85cr in FY27.", "**Capacity**: with both kilns running, sanitaryware use is about 80%; a ₹150cr greenfield plant (land already bought) is on hold until the end of FY27 and would take 18 months to build."],
        inputs: "**Brass** (about 60% of a faucet's cost), **clay, feldspar and glaze** for sanitaryware, **natural gas** for the kilns, and bought-in finished goods from outsourcing partners. Materials were 51% of sales in FY26.",
        costEffect: "**Passed on, with a lag of one to two quarters.** Retail prices are raised quickly, but project orders are billed at old prices for months. Brass rose from about ₹665 a kilogram in December 2025 to about ₹900 in July 2026; management says a move to ₹950–1,000 would need another price rise. Gas cost ₹48.43 a cubic metre in Q1 against ₹33.17 a year earlier, but is only 3.3% of revenue because 69% comes from GAIL at below-market rates. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (13% to 8%). **What happened:** there is no Indian price index for its brass-and-clay mix. The margin fell from 16% in FY24 to 15% in FY25 and 13% in FY26 on heavier trade discounts, then to 10% in Q1 FY27 as brass rose faster than prices and one-off wage arrears (1.3 points), an idle kiln and old project orders hit; management says the underlying figure was about 14.5%.",
        competitors: [{ name: 'Jaquar', note: 'Unlisted market leader in faucets and a strong premium bathware brand.' }, { name: 'Hindware Home Innovation', note: 'The other big listed sanitaryware brand, with a larger range but a weaker balance sheet and margins.' }, { name: 'Kohler, Grohe, Roca (Parryware)', note: 'Multinationals at the premium and mid end.' }, { name: 'Kajaria (Kerovit), Somany and Morbi makers', note: 'Growing fast from small bases in bathware; Morbi makes unbranded sanitaryware.' }],
        position: "**One of India's top two or three branded sanitaryware makers**, with organised players holding about 60% of the market; it does not disclose its own share.",
        money: "Screener shows **₹816cr of net cash**; the company reports ₹943cr of cash and investments in June 2026, with only lease liabilities as debt. FY27 capex is about ₹43cr (routine, faucet expansion, offices), and the ₹150cr greenfield plant is on hold. CARE rates it AA/Stable. It paid ₹75 a share for FY26, a 47% payout. A ₹28.7cr income-tax demand for FY2019-20 is under appeal. Promoters hold **54.4%**, unchanged since September 2023.",
        watch: ["Margins back at 13–15% in Q2 and Q3 FY27.", "Brass staying below ₹950 a kilogram.", "Senator and Polipluz sales against ₹70–80cr, after their head's exit."],
        charts: consumerDurablesCharts['Cera Sanitaryware'],
    },
    {
        company: 'Somany Ceramics',
        inShort: ["**India's second-largest branded tile maker**, with about 80 million sq m of tiles a year from its own plants, joint ventures and outsourcers, plus sanitaryware, faucets and tile adhesives.", "**Good:** the margin rose from 8.0% to 11.6% in a year as its own plants filled and joint-venture losses ended, and net debt is down to about ₹107cr. **Bad:** tile volume grew only 3% in Q1 FY27, two-thirds of what it sells is made by partners, and the ownership of its new ₹220cr plant is unclear.", "**Verdict: wait.** Better margins, but the same volume problem, and the price needs more growth than I expect."],
        tagline: "A tile brand that makes about a third of its tiles itself and buys the rest from joint ventures and Morbi outsourcers, with a growing bathware and construction-chemicals range.",
        revenue: '₹2,790cr (FY26, consolidated)',
        products: [
            { name: 'Tiles made in its own plants', text: "Ceramic and vitrified tiles from Kassar (Haryana, 25 million sq m) and Kadi (Gujarat, 11 million sq m). Own-plant volume rose 22% in Q1 FY27 and the standalone plants ran at 83%." },
            { name: 'Tiles from joint ventures and outsourcers', text: "Joint-venture plants at Morbi and Tirupati and dedicated Morbi outsourcers supply about two-thirds of its tiles. It relies entirely on Morbi for polished vitrified tiles. The joint ventures lost ₹24–25cr in FY26 but turned profitable in Q1 FY27." },
            { name: 'Bathware', text: "Sanitaryware from a Morbi joint venture (0.48 million pieces a year) and faucets from its own Derabassi (Punjab) plant (1.3 million pieces). About 10% of sales, at a margin ‘about 1% better’ than tiles." },
            { name: 'Construction chemicals', text: "Tile adhesives and grouts, after buying 51% of Dura Build Care for ₹10.3cr in July 2025; a new large northern plant started in July 2026. Still small (₹7.4cr of revenue in FY26)." },
        ],
        revenueText: "Q1 FY27 sales of ₹744cr (company figure) came **about a third each from own-made tiles** (₹239cr), **joint-venture tiles** (₹209cr) and **outsourced tiles** (₹184cr), with bathware ₹76cr and other products ₹35cr. **North India gave 46% of FY26 revenue**, South 25% and East 16%. Projects and institutions are about 20% of sales.",
        mixes: [
            { caption: 'Revenue by source, Q1 FY27 (company presentation)', parts: [{ label: 'Own-made tiles', share: 32 }, { label: 'Joint-venture tiles', share: 28 }, { label: 'Outsourced tiles', share: 25 }, { label: 'Bathware', share: 10 }, { label: 'Other', share: 5 }] },
            { caption: 'Revenue by region, FY26 (CRISIL)', parts: [{ label: 'North', share: 46 }, { label: 'South', share: 25 }, { label: 'East', share: 16 }, { label: 'West and other', share: 13 }] },
        ],
        customers: ["**Homeowners and small builders** through about 3,060 active dealers, 530 showrooms and about 14,000 selling points.", "**Developers and institutions** (about 20% of sales), where price rises are passed on only 85–90%.", "**Its own tile dealers for bathware**: only 25% of them also sell Somany sanitaryware, which is the cross-selling opportunity management points to."],
        difficulty: { level: 'Medium', text: "Tiles are made by a well-known process in hundreds of Morbi plants; Somany's edge is its brand and dealer network rather than manufacturing. Managing a web of joint ventures and outsourcers adds complexity without adding much protection." },
        moat: "A national brand and a large dealer network let it charge more than unbranded Morbi tiles. But it owns little of its production, so it earns about half of Kajaria's margin, and its premium narrowed when Morbi raised prices by more than it did.",
        salesDrivers: ["**Home completions**: management now expects only mid-single-digit tile volume growth, and says industry promises of high-single-digit growth have ‘never been delivered’.", "**Price**: tile prices rose 16–18% after the Morbi gas shock, lifting Q1 FY27 sales 24% on 3% more volume; the MD says ‘pricing has only been a pass-through’.", "**Filling its own plants**: own plants are now near full and the joint ventures profitable, which lifts margin even without more volume; the margin goal is now ‘11-plus’, aiming for 12%.", "**New capacity**: 3–5 million sq m of debottlenecking by Q4 FY27 and a 9-million-sq-m glazed vitrified plant near Tirupati (about ₹220cr, end-Q3 or Q4 FY28, about ₹350cr of revenue); about ₹275cr to end-FY27 in all.", "**Bathware and adhesives**: guided to grow at ‘healthy double digits’ from small bases."],
        inputs: "**Natural gas** for the kilns (25–30% of production cost), **clay, feldspar and glazes**, and above all **finished tiles bought from joint ventures and outsourcers**, which is why materials, at 47% of sales in FY26, are higher than at Kajaria.",
        costEffect: "**Passed on, but not a source of extra profit.** When gas rose after March 2026 (blended about ₹68 a cubic metre in Q1 FY27 against ₹45–51 in FY26), the cost rise of about ₹7 a sq m was passed on in full in retail and 85–90% in projects. Tiles bought from partners rise in price with their gas costs too. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (9% to 4%). **What happened:** there is no Indian price index for its gas-and-clay mix. The margin went from 10% in FY24 to 8% in FY25 and 9% in FY26, then to 11% in Q4 FY26 and 12% in Q1 FY27; management credits own plants running full and joint ventures turning profitable, not pricing. If gas falls, prices will fall with it.",
        competitors: [{ name: 'Kajaria Ceramics', note: 'The leader, with more own plants on cheaper gas and about twice Somany’s margin.' }, { name: 'Morbi tile makers', note: 'Make 80–90% of India’s tiles; raised prices 30–35% after the gas shock, narrowing Somany’s premium.' }, { name: 'Orient Bell, Asian Granito, Johnson (Prism)', note: 'Smaller branded rivals.' }, { name: 'Cera, Hindware, Jaquar', note: 'Much bigger in bathware, where Somany is a newcomer.' }],
        position: "**No. 2 branded tile maker in India after Kajaria**, with about 3,100 showrooms, but a much smaller share of its own production.",
        money: "Screener shows **net debt of ₹210cr** (including leases); the company puts consolidated net debt at about ₹107cr in June 2026, down from ₹257cr in March 2024, and its standalone business holds net cash of about ₹115cr. Capex of about ₹275cr to end-FY27 is to be funded 60–70% from its own cash; the board approved ₹58.8cr for a 49% stake in the company that will own the Tirupati plant, while the MD called it a ‘60-40’ venture. It has lent ₹36.5cr to its loss-making Somany Max subsidiary. CRISIL rates it AA-/Stable; payout about 30%. Promoters hold **55.2%**, little changed from 54.8% in September 2023.",
        watch: ["Margin above 11% after Morbi recovers and gas eases.", "A clear answer on who owns and funds the Tirupati plant.", "Tile volume growing at least mid-single digits."],
        charts: consumerDurablesCharts['Somany Ceramics'],
    },
    {
        company: 'Century Plyboards(I)',
        inShort: ["**India's leading plywood brand** (Club Prime, Architect), also making MDF, particle board and laminates, with a Kolkata container-freight and port business.", "**Good:** plywood earned a 16.9% margin in Q1 FY27 with volume up 29%, and it aims to lift its market share from about 10% to 15%. **Bad:** MDF earned only 7.0% after a price rise was rolled back, debt is ₹1,644cr (about ₹600cr in foreign currency), and profit is still below FY23's.", "**Verdict: wait.** The best plywood franchise, but the price assumes an MDF recovery that has not yet come."],
        tagline: "A wood-panel company: branded plywood and veneers, MDF, particle board and laminates for furniture and interiors, plus a small logistics arm in Kolkata.",
        revenue: '₹5,397cr (FY26, consolidated)',
        products: [
            { name: 'Plywood and veneers', text: "Sheets made by gluing thin layers of timber veneer with resin under heat and pressure, sold as Club Prime, Architect and cheaper brands, plus decorative veneers. 4,06,000 cubic metres of capacity running near full; FY26 segment margin 15.2% (before forex), 16.9% in Q1 FY27." },
            { name: 'MDF', text: "Medium-density fibreboard: wood chips broken into fibre, mixed with resin and pressed into flat boards for modular furniture. About 5.3–5.4 lakh cubic metres, rising to about 6 lakh after the Badvel (Andhra Pradesh) expansion. Margin 12.7% in FY26 but 7.0% in Q1 FY27." },
            { name: 'Laminates', text: "Decorative and compact laminates (87.7 lakh sheets a year at 84% use), with a third press for exports from July 2026. Margin 8.5% in FY26, 10.2% in Q1." },
            { name: 'Particle board', text: "Cheaper board made from wood chips, from a new Chennai line (2,40,000 cubic metres). Sales jumped 159% in Q1 but the margin is only 3.7%; the target is about 15% next year." },
            { name: 'Logistics', text: "A container freight station and a Kolkata port terminal: ₹158cr of FY26 revenue. It absorbed ₹260–270cr over three years, and management is open to a partner." },
        ],
        revenueText: "**Plywood was 55% of FY26 segment revenue** (₹2,895cr), MDF 24% (₹1,284cr), laminates 14% (₹743cr), particle board 4% (₹196cr) and logistics 3% (₹158cr). Plywood earns most of the profit: ₹444cr of the ₹702cr of company EBITDA before forex. Plywood realisation was about ₹59,179 a cubic metre in Q1 FY27, up 6.3%.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (company presentation)', parts: [{ label: 'Plywood and veneer', share: 55 }, { label: 'MDF', share: 24 }, { label: 'Laminates', share: 14 }, { label: 'Particle board', share: 4 }, { label: 'Logistics', share: 3 }] },
        ],
        customers: ["**Carpenters, contractors and homeowners** buying plywood for furniture and interiors through 4,100+ dealers and 19,000 retailers; carpenters' advice decides the brand.", "**Furniture and modular-kitchen makers** buying MDF, particle board and laminates in bulk, where price matters most.", "**Shipping lines and importers** using its Kolkata freight station and port terminal."],
        difficulty: { level: 'Medium', text: "Plywood is made by thousands of small unorganised units, so the process is not hard; what is hard is consistent quality, a trusted brand and timber sourcing at scale. MDF and particle board need large, costly European lines, but several rivals have built them." },
        moat: "A strong plywood brand, backed by a 10-year ‘Total Cover’ warranty that pays for the whole piece of furniture if the ply fails, lets it raise prices and still gain share. MDF and particle board have no such protection and face too much industry capacity.",
        salesDrivers: ["**Home interiors and furniture demand**, which follows home completions; the plywood industry is growing 5–7% a year, and Century aims for 12–15% a year to reach 15% of the market.", "**Share gains from unorganised plywood**: small makers forced to pay cash for resin ran part-time or shut in 2026.", "**MDF prices**: the industry has too much capacity (about 5.1 million cubic metres against demand of 3.7 million), so the 15% April rise was largely rolled back; management still calls MDF a ‘15% plus’ business over time.", "**Filling plants already built**: fixed assets rose from ₹1,069cr in FY23 to ₹2,804cr in FY26; management says today's plants can support ₹7,500–8,000cr of revenue and targets ₹12,000cr by FY31 with about ₹2,500cr more capex.", "**New plywood capacity**: about 30% more in FY27, including a 60,000-cubic-metre Hoshiarpur plant from Q3 FY27; an Uttar Pradesh plant (about ₹200cr) could follow in April 2028 if land is secured."],
        inputs: "**Timber and veneer** (face veneers and plantation wood such as eucalyptus and poplar), **urea- and phenol-formaldehyde resins** (made from crude-linked chemicals, about 40% of MDF's raw-material cost), **melamine and paper** for laminates, and wood chips for MDF and particle board. Materials were 51% of sales in FY26.",
        costEffect: "**Passed on in plywood, not in MDF.** After resin rose 35–45% in March–April 2026, Century raised plywood prices 7% and still sold 29% more, lifting the plywood margin to 16.9%. In MDF the industry's 15% rise could not hold against spare capacity; most was rolled back and the MDF margin halved from 14.3% to 7.0%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (12% to 7%). **What happened:** there is no Indian price index for its timber-and-resin mix. The margin fell from 13% in FY24 to 11% in FY25 as new MDF and particle-board plants started, recovered to 12% in FY26 and 13% in Q1 FY27, as plywood strength offset MDF weakness. Screener's figure also includes forex losses on foreign-currency loans (₹57cr in FY26).",
        competitors: [{ name: 'Greenply Industries', note: 'The No. 2 plywood brand, with lower plywood margins (about 8.5%) but a profitable new MDF plant.' }, { name: 'Greenpanel, Action Tesa, Rushil Decor', note: 'MDF rivals; Greenpanel has the largest capacity and now prices ‘at par’ to win back volume.' }, { name: 'Unorganised plywood makers', note: 'Most of the market; cheaper, and squeezed by the 2026 resin shock and compulsory BIS standards.' }, { name: 'Greenlam, Merino, Stylam', note: 'Laminate rivals with stronger laminate positions.' }],
        position: "**India's No. 1 plywood brand, with about 10% of the whole market** (30–32% of the organised part, ICRA), and it has overtaken Greenpanel as the largest domestic MDF seller by volume for two quarters.",
        money: "Screener shows **net debt of ₹1,700cr**; the company's total debt rose from ₹1,531cr in March to ₹1,644cr in June 2026 (₹812cr short-term), about 2.5 times EBITDA, and about ₹600cr is in foreign-currency loans. Management wants long-term debt within one times EBITDA; ICRA expects debt of 2.2–2.3 times EBITDA by March 2027. Near-term capex is modest (Hoshiarpur plywood, a laminate press), but growth needs more working-capital debt. ICRA rates it AA/Stable; payout only about 8%. Promoters hold **71.8%**, down from 73.0% in September 2023.",
        watch: ["MDF margin back above 12%.", "Debt starting to fall towards ICRA's 2.2–2.3 times by March 2027.", "Hoshiarpur plywood starting on time in Q3 FY27."],
        charts: consumerDurablesCharts['Century Plyboards(I)'],
    },
    {
        company: 'Greenply Industries',
        inShort: ["**India's second-largest branded plywood maker** (Green Club, Ecotec), now building a large MDF business at Vadodara, with a furniture-hardware joint venture with Samet of Turkey.", "**Good:** MDF earned a 17.3% margin in Q1 FY27 and volumes are on track (plywood +14%, MDF +25%). **Bad:** plywood earned only 8.4%, the CEO left, the income-tax department searched its offices, and debt is heading to ₹710–730cr for a second MDF line.", "**Verdict: wait.** MDF is working; plywood and governance are not yet, and the price needs more growth than I expect."],
        tagline: "A plywood and MDF company: branded plywood from four plants plus bought-in ply, an MDF plant in Gujarat, and new doors, flooring and furniture-hardware lines.",
        revenue: '₹2,739cr (FY26, consolidated)',
        products: [
            { name: 'Plywood and veneers', text: "Premium Green Club and Green Gold plywood and cheaper Ecotec, Bharosa and Wood Crest ranges, from 52.8 million sq m of capacity in Gujarat, Uttar Pradesh, West Bengal and Nagaland. About a third of the plywood it sells is bought from outside makers. FY26 margin 8.8%." },
            { name: 'MDF', text: "Plain and value-added MDF (pre-laminated boards and moisture-resistant HDHMR, over half of MDF sales) from a 3,00,000-cubic-metre plant at Vadodara, used at 72% in FY26. FY26 margin 13.4%, 17.3% in Q1 FY27. An HDF flooring line started on 20 July 2026." },
            { name: 'Doors and furniture hardware', text: "PVC and wood-plastic doors from a plant started in April 2026, and a 50:50 hardware venture with Samet (hinges, drawer channels), which lost ₹50.8cr in FY26 and aims to break even by mid-FY28." },
        ],
        revenueText: "**Plywood and allied products were 77% of FY26 revenue** (₹2,106cr) and **MDF 23%** (₹636cr, up 20%). In Q1 FY27 plywood was 73% (₹527cr) and MDF 27% (₹196cr). Plywood sold at about ₹265 a sq m and MDF at about ₹33,525 a cubic metre in Q1. The hardware venture is not consolidated line by line.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (Q4 call)', parts: [{ label: 'Plywood and allied', share: 77 }, { label: 'MDF', share: 23 }] },
        ],
        customers: ["**Carpenters, contractors and homeowners** buying plywood through 3,000+ dealers in 1,100+ towns and 56 branches.", "**Furniture makers (OEMs)** buying MDF and pre-laminated boards in bulk, often on letter-of-credit terms, which stretched receivable days from 47 to 54 in FY26.", "**Flooring and door buyers** through the same dealers, a new and still small market for the company."],
        difficulty: { level: 'Medium', text: "Plywood is a simple process that thousands of small units share; the barrier is brand, timber sourcing and scale. MDF needs a costly continuous-press line and steady wood supply, but India already has too much capacity." },
        moat: "A known premium plywood brand and wide dealer reach, and an efficient new MDF plant that earns 17%. The weakness is plywood cost: it has averaged about 8.5% margins over three years against about 13.5–14% at Century, which management accepted.",
        salesDrivers: ["**Home interiors and furniture demand**: plywood grows only 3–4% a year and MDF 15–20%, management says; FY27 volume guidance is +10% plywood and +25–30% MDF.", "**Share gains**: after March 2026, resin suppliers demanded cash, and many small plywood makers shut or ran three days a week.", "**Plywood scale**: management says a 10% plywood margin needs ₹600cr+ of quarterly sales, and ₹800cr a quarter would give 13–15%; ContiRoll pressing across its plants should help from Q4 FY27.", "**MDF Line 2**: a second line of about 1,000 cubic metres a day (₹425cr on management's figure, ₹451cr on CARE's, 72% debt-funded) from Q2 FY28, which management says adds about a point of margin.", "**New products**: Odisha plywood (₹130–160cr, December 2026), flooring and WPC doors, each worth ₹75–80cr of sales at peak."],
        inputs: "**Timber and face veneer** for plywood (including veneer from its former Gabon unit), **wood chips** for MDF, **urea-, melamine- and phenol-formaldehyde resins** made from crude-linked chemicals, and **plywood bought from outside makers**. Materials were 59% of sales in FY26, the highest share among the panel makers because of bought-in ply.",
        costEffect: "**Partly passed on.** After resin rose 35–45% in spring 2026, the industry raised MDF list prices 15%, but Greenply netted only 7–9% after dealer schemes; plywood rose 3–5%. Chemical costs rose again in July. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (9% to 3%). **What happened:** there is no Indian price index for its timber-and-resin mix. The filed margin stayed in a narrow 8–9% band from FY24 to FY26, rose to 11% in Q4 FY26 as MDF filled, and slipped to 10% in Q1 FY27 when plywood sales fell short and outsourcing and labour were hit; MDF held its margin while plywood absorbed the squeeze.",
        competitors: [{ name: 'Century Plyboards', note: 'The plywood leader, with a stronger brand warranty and about twice Greenply’s plywood margin.' }, { name: 'Greenpanel, Action Tesa, Rushil Decor', note: 'MDF rivals; Greenpanel has the largest capacity, and Action Tesa is adding a southern line.' }, { name: 'Unorganised plywood makers', note: 'Most of the plywood market; squeezed in 2026 by cash-only resin and BIS standards.' }, { name: 'Hettich, Hafele', note: 'Leaders in furniture hardware, where the Samet venture is a newcomer.' }],
        position: "**No. 2 branded plywood maker in India**, and about 7% of India's MDF market, rising to 8–8.5% at full capacity (management estimate).",
        money: "Screener shows **net debt of ₹432cr**; the company reports ₹533cr in June 2026 (0.57 times equity), heading to a peak of ₹710–730cr (0.75 times) in March 2027. FY27 capex is about ₹500cr (MDF Line 2, Sandila, Odisha plywood and loss funding for the hardware venture). It has given ₹554.6cr of guarantees for subsidiaries and the venture, and CARE sees debt-service cover ‘close to unity’ during the build; CARE rates it AA-/Stable. It writes off an overseas venture almost every year (₹15.2cr in FY26). Dividend ₹0.50 a share. Promoters hold **51.9%**, little changed from 52.1% in September 2023.",
        watch: ["Two quarters of ₹600cr+ plywood sales at a 10% margin (Q2 FY27: ₹626cr at 10.05%, one done).", "The Odisha plywood plant starting in Q4 FY27, after slipping from December.", "Any demand from the February 2026 income-tax search.", "The hardware venture reaching break-even by mid-FY28."],
        charts: consumerDurablesCharts['Greenply Industries'],
    },
    {
        company: 'Orient Bell',
        inShort: ["**A small, debt-free tile maker** with three plants outside Morbi and two Morbi associates (42.4 million sq m in all), selling through 381 boutiques and 3,000+ dealers.", "**Good:** Q1 FY27 volume rose 23%, its plants ran at 73% against 60% a year ago, and it holds ₹47.7cr of net cash. **Bad:** revenue was flat for four years before this, return on capital was only 6% in FY26, key managers were paid about ₹8.4cr against a ₹12cr profit, and the price rises behind Q1 may not last: management has made no cuts yet but says it will follow the market if gas falls.", "**Verdict: wait.** A real recovery, partly lifted by the Morbi shock, and the price needs more growth than I expect."],
        tagline: "A branded ceramic and vitrified tile maker with plants in Uttar Pradesh, Karnataka and Gujarat, plus two associate plants at Morbi.",
        revenue: '₹691cr (FY26, consolidated)',
        products: [
            { name: 'Vitrified tiles', text: "Polished and glazed vitrified tiles (GVT), harder, less porous tiles for floors; 60% of Q1 FY27 sales, with GVT alone at 47%. Most GVT is made at Sikandrabad and Dora; only a low single-digit share comes from Morbi." },
            { name: 'Ceramic wall and floor tiles', text: "Cheaper, more porous tiles for walls and light-use floors; the remaining 40% of sales. It is converting 1 million sq m of ceramic capacity to GVT." },
            { name: 'Tile adhesives', text: "A small ‘Masterbond’ range of tile adhesives sold through the same dealers." },
        ],
        revenueText: "**Vitrified tiles were 60% of Q1 FY27 sales** and ceramic 40%. **Retail is about 82%** and projects (orders of 3,000 sq m or more) 18%. Q1 revenue of ₹203cr came from 63 lakh sq m at about ₹322 a sq m. Retail volume grew 37% in the South and 60% in the West as its Hoskote and Dora plants found buyers.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (company presentation)', parts: [{ label: 'Vitrified', share: 60 }, { label: 'Ceramic', share: 40 }] },
            { caption: 'Revenue by channel, Q1 FY27 (company presentation)', parts: [{ label: 'Retail', share: 82 }, { label: 'Projects', share: 18 }] },
        ],
        customers: ["**Homeowners** reached through 381 Orient Bell Tile Boutiques, 2,000+ business partners and 3,000+ dealers; no customer is 10% of sales.", "**Dealers fed by the company's own leads**: its ‘sell-out’ orders covered about 40% of dealers' buying in Q1, against 26% a year earlier.", "**Builders and institutions** (about 18%), for whom tiles are only 1–2% of project cost, so price rises stick."],
        difficulty: { level: 'Medium', text: "Tile making is common knowledge in Morbi; Orient Bell's edge is plants outside Morbi, a design visualiser and year-round advertising in five languages, not unique technology." },
        moat: "Plants outside Morbi kept it supplied when Morbi shut, and its lead-generation tools tie dealers to it. But it is small next to Kajaria and Somany, and four years of flat revenue show it was not gaining share until the gas shock.",
        salesDrivers: ["**Home completions and renovations**, with a shift towards glazed vitrified tiles.", "**The Morbi shock**: Morbi shut from end-March to mid-May 2026 and its design stocks ran down, so dealers turned to branded makers with inventory and added non-Morbi suppliers.", "**Price**: about 19% above pre-war levels, held through Q1 with no cuts; in August management said it was ‘more or less on course to retain the margins’ but would follow if the market moved, having said in May that such rises start to ‘readjust’ within three or four months once the crisis eases.", "**Spare capacity**: at 73% use it can sell about a quarter more before it needs a plant; about 60% of the extra revenue in FY26 flowed to profit.", "**Capex**: about ₹15cr in FY27 (ceramic-to-GVT conversion, digital printers), with a decision on a larger expansion using about ₹75cr of cash due by November–December 2026."],
        inputs: "**Natural gas** for the kilns (GAIL gas at Sikandrabad, on a formula partly linked to spot prices), **clay, feldspar and glazes**, packaging, and about ₹69cr a year of tiles bought from its two Morbi associates. Materials were 44% of sales in FY26, and power and other factory costs another 23%.",
        costEffect: "**Passed on, and more, for now.** Its gas cost rose from about ₹44–45 to ₹60–62 a cubic metre in Q1 FY27, about a third, but gas is only part of its cost, so a price rise of about 19% more than covered it and gross margin hit a record 39.7%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (6% to 2%). **What happened:** there is no Indian price index for its gas-and-clay mix. The margin fell from 7% in FY23 to 3% in FY24 as volumes stalled, then climbed to 4% in FY25, 6% in FY26 and 8% in Q1 FY27; the recovery began before the war (Q4 FY26 company EBITDA +66%) and the Morbi shutdown sped it up.",
        competitors: [{ name: 'Morbi tile makers', note: 'The bulk of the market; the price gap to them narrowed from about ₹100 to ₹50–55 a box in management’s example.' }, { name: 'Kajaria Ceramics', note: 'The leader, with far greater scale and more than twice the margin.' }, { name: 'Somany Ceramics', note: 'The No. 2 brand, more dependent on Morbi partners.' }, { name: 'Asian Granito, Johnson (Prism)', note: 'Other mid-sized branded makers.' }],
        position: "**A small branded tile maker, well behind Kajaria and Somany**, whose niche is supply from plants outside Morbi and strong digital lead generation.",
        money: "Screener shows **₹42cr of net cash**; the company reports ₹47.7cr in June 2026, with ₹74cr of cash and liquid investments against ₹26.3cr of borrowings. Capex has been tiny (₹5.5cr in FY26, below depreciation of about ₹22cr); FY27 is about ₹15cr, and a larger expansion could use most of the ₹75cr of cash. CRISIL rates it A-/Stable after a downgrade in July 2025. Payout 12%. Key managers were paid about ₹8.4cr against a ₹12cr profit. Promoters hold **65.9%**, little changed from 65.2% in September 2023.",
        watch: ["Margin above 7% through Q2–Q3 FY27 as Morbi recovers.", "The expansion decision and how it uses its ₹75cr of cash.", "Morbi's export levels, since unsold Morbi tiles would come home."],
        charts: consumerDurablesCharts['Orient Bell'],
    },
    {
        company: 'Greenlam Industries',
        inShort: ["**India's largest laminate maker and exporter**, selling in 120+ countries, now also making plywood, veneers, floors, doors and chipboard in Andhra Pradesh.", "**Good:** the ₹875cr chipboard plant turned profitable a year early, free cash flow turned positive (₹204cr in FY26) and CARE raised its outlook to Stable. **Bad:** trailing profit is only ₹93cr on ₹3,169cr of revenue, net debt is ₹934cr, laminate volume fell 6% in Q1, and ₹63cr of new tax disputes in its subsidiaries are unexplained after an income-tax search.", "**Verdict: wait.** Past the worst, but the price assumes a full recovery."],
        tagline: "A laminate company with a big export arm, that has spent heavily to add plywood, veneers, engineered floors, doors and chipboard (particle board).",
        revenue: '₹3,046cr (FY26, consolidated)',
        products: [
            { name: 'Laminates and allied', text: "Decorative and compact laminates, cladding and melamine-faced boards sold as Greenlam, from 24.5 million sheets a year of capacity (80% used in Q1 FY27). This is the profit engine: a 15.9% margin in FY26 and 13.9% in Q1 FY27." },
            { name: 'Plywood and allied', text: "Mikasa plywood, decorative veneer, engineered wood floors and doors, still sold mainly in the South and parts of the West and East. Plywood runs at 39% of capacity and still loses money; break-even is now promised only for the ‘exit quarter’ of FY27." },
            { name: 'Chipboard (panels)', text: "Particle board from a 2,92,380-cubic-metre plant at Naidupeta, Andhra Pradesh, which started in January 2025. It ran at 61% in Q1 FY27 and earned its first profit (₹3.4cr of EBITDA); management expects 18–20% margins at full use by FY29." },
        ],
        revenueText: "**Laminates were 80% of FY26 revenue** (₹2,433cr), plywood and allied 13% (₹400cr) and chipboard 7% (₹213cr). **Exports were ₹1,336cr, about 44% of sales**, with the Middle East only 6–7% of the business. In Q1 FY27 laminates were ₹596cr, plywood ₹106cr and chipboard ₹95cr (up 205%).",
        mixes: [
            { caption: 'Revenue by segment, FY26 (Q4 call)', parts: [{ label: 'Laminates and allied', share: 80 }, { label: 'Plywood and allied', share: 13 }, { label: 'Chipboard', share: 7 }] },
            { caption: 'Revenue by market, FY26 (CARE)', parts: [{ label: 'India', share: 56 }, { label: 'Exports', share: 44 }] },
        ],
        customers: ["**Indian dealers, architects and furniture makers** through 10 distribution centres, 21 branches and 40,000+ distributors, dealers and retailers.", "**Overseas distributors and fabricators in 120+ countries**, served from its own warehouses in Italy and Germany and 16 offices abroad; it says it is taking share from European makers.", "**Modular-furniture makers** buying chipboard and pre-laminated boards, where its moisture-resistant grade was new to the market."],
        difficulty: { level: 'Medium', text: "Laminates need big presses and consistent printing and resin work, and export approvals take years; chipboard needs a large continuous line. None of it is secret technology, but Greenlam's global distribution is hard to copy." },
        moat: "A leading laminate brand in India and a genuine export network built over decades give it laminate margins of about 16% (management now talks of ‘15%, 16%’ for FY27). The newer plywood and chipboard arms have no such edge yet and have pulled returns down to 8%.",
        salesDrivers: ["**Laminate demand in India and abroad**: guided to grow 10–12% in FY27 (Q1 was 7%, with volume down 6% as containers were short); about ₹27cr of exports slipped into Q2.", "**Filling the chipboard plant**: about 70% use expected in FY27, with realisations up 15% in a year.", "**Plywood reaching break-even** as it expands beyond the South from FY28.", "**Price**: it passed on a net 7–8% in Q1 after two rises and two partial cuts; exports gained a further 4–5% plus a weaker rupee.", "**Capex**: FY27 capex of ₹125–135cr, including two laminate lines (about ₹70cr, +8% capacity) from Q4 FY27; no other new capacity until chipboard fills. Company revenue growth is guided at about 18%."],
        inputs: "**Decorative and kraft paper**, **phenol and melamine resins** (chemicals are about a third of raw-material cost), **timber and veneer** for plywood, and **wood chips and urea-formaldehyde resin** for chipboard. Materials were 46% of sales in FY26; staff are a large 20% because of its overseas sales teams.",
        costEffect: "**Mostly passed on in laminates, with a lag.** Some chemicals rose 30–80% in spring 2026; Greenlam raised prices twice, then cut partly in June and July as costs eased, netting 7–8%, and gross margin held at about 53%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (11% to 6%). **What happened:** there is no Indian price index for its paper-and-resin mix. The margin fell from 13% in FY24 to 11% in FY25 and FY26, not because of materials but because the new chipboard and plywood plants lost money while filling; quarterly margins swung between 7% and 13%, and were 10% in Q1 FY27.",
        competitors: [{ name: 'Merino, Royale Touche, Century (laminates)', note: 'Large Indian laminate brands competing for dealers at home.' }, { name: 'Stylam Industries', note: 'The other big Indian laminate exporter, with higher margins but a weak domestic brand.' }, { name: 'Century, Greenply (plywood)', note: 'Plywood leaders with far greater scale than Mikasa.' }, { name: 'Action Tesa, Century (particle board)', note: 'Established particle-board makers in a market with spare capacity.' }],
        position: "**India's largest laminate maker and exporter**, and among the world's top laminate makers by capacity; a small player in plywood and chipboard.",
        money: "Screener shows **net debt of ₹1,044cr** (including leases); the company reports ₹934cr in June 2026, about 3.8 times EBITDA, with ₹168cr of term debt due in FY27 against expected cash accruals of about ₹250cr. Management plans to cut debt by about ₹100cr in FY27 and ₹150cr+ in FY28. Capex is now modest (₹125–135cr). CARE rates it AA-/Stable (raised from Negative in September 2026). Payout about 18%. The income-tax department searched it in February 2026, and ₹63cr of indirect-tax disputes in subsidiaries are not explained. Promoters hold **51.0%**, little changed from 51.2% in September 2023.",
        watch: ["An explanation of the ₹63cr of subsidiary tax disputes.", "Chipboard use near 70% and plywood break-even by the last quarter of FY27.", "Debt down about ₹100cr in FY27."],
        charts: consumerDurablesCharts['Greenlam Industries'],
    },
    {
        company: 'Rushil Decor',
        inShort: ["**A Gujarat-based maker of MDF boards and VIR laminates**, with 3.3 lakh cubic metres of MDF in Karnataka and Andhra Pradesh and a new large-format ‘Jumbo’ laminate line.", "**Good:** laminate sales rose 65% in Q1 FY27, the Jumbo line earns about 20% at low use, and debt is falling ₹50cr+ a year with almost no capex. **Bad:** MDF use fell from 83% to 66% in one quarter as resin rose and Gulf exports stopped, and interest cover of about 2.3 times sits near its rating trigger.", "**Verdict: pass.** Sub-scale and indebted in an oversupplied MDF market."],
        tagline: "A mid-sized MDF and laminate maker, with MDF plants near timber in southern India and laminate plants in Gujarat, historically exporting a third of its output.",
        revenue: '₹862cr (FY26, consolidated)',
        products: [
            { name: 'MDF boards', text: "Plain and value-added MDF (pre-laminated boards and moisture-resistant HDF) from Chikmagalur (90,000 cubic metres) and Visakhapatnam (2.4 lakh cubic metres). Value-added grades were 54% of FY26 MDF sales. Q1 FY27 margin 8.4%." },
            { name: 'Laminates (VIR)', text: "Decorative laminates from three units near Mansa, Gujarat (3.49 million sheets a year), exported to 59 countries; Q1 FY27 sales ₹74cr (+65%), of which exports ₹49cr." },
            { name: 'Jumbo laminates', text: "Thick, large-format laminates for facades and worktops from a ₹90cr line completed in FY26 (2.8 million sheets a year). Q1 sales ₹11cr at a 20.6% margin but only 29% use; peak revenue about ₹140cr." },
            { name: 'PVC boards', text: "Small PVC and WPC boards: ₹9.6cr of Q1 sales." },
        ],
        revenueText: "**MDF was about 75% of FY26 revenue** (₹609cr), laminates about 20% (₹211cr) and PVC about 5%. Before the West Asia war, **exports were 30–35% of revenue**, mostly MDF to the Middle East; MDF exports fell from 7,150 cubic metres in Q1 FY26 to 255 in Q1 FY27, recovering to about 3,200 in July.",
        mixes: [
            { caption: 'Revenue by product, FY26 (Q4 call)', parts: [{ label: 'MDF', share: 75 }, { label: 'Laminates', share: 20 }, { label: 'PVC', share: 5 }] },
        ],
        customers: ["**Furniture makers (OEMs)** take 35–40% of domestic MDF volume.", "**Dealers** sell the rest of its MDF and its VIR laminates to carpenters and interior contractors.", "**Overseas buyers**, mainly in the Middle East for MDF and 59 countries for laminates; Jumbo laminates go to facade and worktop makers on two-to-three-year contracts."],
        difficulty: { level: 'Medium', text: "MDF needs a large, costly pressing line and steady wood and resin supply; many rivals have built them, so capacity, not know-how, is the limit. Laminates are simpler, though export approvals take time." },
        moat: "A southern MDF base near timber and a port, and a long laminate export franchise. But its MDF has sold 12–16% below listed rivals for years and its resin costs 4–6% more because it is bought from the North, so it has little pricing power.",
        salesDrivers: ["**MDF use and prices**: at 85% use its MDF could sell ₹750–800cr against ₹609cr in FY26, but the industry has spare capacity and three new plants arrive in FY27.", "**Exports**: a return to the normal 4,000–5,000 cubic metres a month of MDF exports would lift use sharply.", "**Resin costs**: resin rose 35–40% from March 2026 with only ‘very marginal’ relief in July; management says the market will not accept further price rises.", "**Laminates and Jumbo**: laminates grew 65% in Q1; the Jumbo line aims for 50–60% use (about ₹75cr) in FY27 and ₹140cr at peak.", "**No new capacity**: FY27 capex is only ₹5–10cr; the analyst's sum of full plants is about ₹1,100cr of revenue in two to three years."],
        inputs: "**Wood** (plantation timber for MDF), **urea- and melamine-formaldehyde resins** made from crude-linked chemicals (resin is about 10–11% of the selling price), **decorative paper and phenol** for laminates. Materials were 54% of sales in FY26.",
        costEffect: "**Partly passed on, and only once.** Rushil raised MDF prices 15% and laminates 10% from 1 April 2026 ‘just to mitigate’ a 40% resin rise, and took no further rise. With MDF oversupplied, it cannot push again, so its MDF profit fell from about ₹3,700 a cubic metre in Q4 FY26 to about ₹2,300 in Q1 FY27. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (8% to 3%). **What happened:** there is no Indian price index for its wood-and-resin mix. The standalone margin fell from 18% in FY23 to 14% in FY24, 12% in FY25 and 8% in FY26 as new MDF capacity flooded the market and a fire hit its Andhra plant; quarterly it went from −1% in Q1 FY26 to 11% in Q4 and back to 8% in Q1 FY27 as resin rose.",
        competitors: [{ name: 'Greenpanel Industries', note: 'India’s largest MDF maker, now pricing ‘at par’ with rivals to win back volume.' }, { name: 'Century Plyboards, Greenply', note: 'Branded plywood makers with growing MDF plants and stronger dealer networks.' }, { name: 'Action Tesa', note: 'Large unlisted MDF and particle-board maker adding a southern line.' }, { name: 'Greenlam, Stylam, Merino', note: 'Larger laminate rivals at home and abroad.' }],
        position: "**A mid-sized MDF maker, behind Greenpanel, Century, Action Tesa and Greenply in capacity**, and a small laminate exporter.",
        money: "Screener shows **net debt of ₹251cr**; the company reports about ₹260cr of total debt (net debt 0.39 times equity), repaying about ₹55cr a year and ₹18cr in Q1 FY27, and aims to be debt-free by about Q2 FY29 with no new borrowing. Capex is only ₹5–10cr in FY27. Infomerics rates it A-/Stable, with a downgrade trigger if interest cover falls below 2 times; Q1 was about 2.3. Payout 22% of a small profit. Promoters hold **55.1%**, down from 56.4% in September 2023.",
        watch: ["MDF exports back above 4,000 cubic metres a month.", "MDF margin back above 10%.", "Interest cover staying above 2 times."],
        charts: consumerDurablesCharts['Rushil Decor'],
    },
    {
        company: 'Greenpanel Inds.',
        inShort: ["**India's largest MDF maker**, with 8.9 lakh cubic metres of capacity in Uttarakhand and Andhra Pradesh, plus a small plywood arm.", "**Good:** the margin recovered from a loss in Q1 FY26 to 8–10%, and net debt is down to ₹141cr. **Bad:** its plants run at 51%, a 15% price rise was rolled back within three months, it lost the top domestic volume spot to Century, exports are nil, unhedged euro loans cost ₹49cr in FY26, and the family group faces an income-tax search.", "**Verdict: pass.** Big plants, half used, in a price war."],
        tagline: "A wood-panel maker that is almost all MDF (91% of sales), sold through dealers across India and, until the West Asia war, exported to the Middle East.",
        revenue: '₹1,539cr (FY26, standalone)',
        products: [
            { name: 'Plain MDF', text: "Medium-density fibreboard: wood fibre mixed with resin and pressed into flat boards, the base of most modular furniture. Sold to dealers (75–80%) and furniture factories." },
            { name: 'Value-added MDF', text: "Pre-laminated boards (selling at up to a 50% premium to plain board), high-density water-resistant boards and flooring: 43% of FY26 MDF volume and 55% of its value." },
            { name: 'Plywood', text: "A small plywood arm (9 million sq m, 56% used in Q1 FY27), under a tenth of sales, earning only 2.7% in Q1." },
        ],
        revenueText: "**MDF was 91% of FY26 revenue** and plywood the rest. About 90% of sales go through dealers, and the top ten dealers are only 17% of sales. **Exports were about ₹145cr in FY26**, roughly a tenth of sales and 80–85% to the Middle East, but fell to zero in Q1 FY27 when container freight rose from $400–500 to $5,500–6,000. Domestic MDF sold at about ₹31,758 a cubic metre in Q1, up 7.4%.",
        mixes: [
            { caption: 'Revenue by product, FY26 (annual report)', parts: [{ label: 'MDF', share: 91 }, { label: 'Plywood', share: 9 }] },
        ],
        customers: ["**Dealers and retailers**: 1,750+ distributors and stockists and about 12,500 retailers, selling to carpenters and homeowners.", "**Furniture factories (OEMs)**, about 20–25% of MDF, which bought 14% less in Q1 FY27; the new plan is to win them back on price.", "**Middle East importers**, a tenth of sales before the war, now nil."],
        difficulty: { level: 'Medium', text: "An MDF plant needs a large European or Chinese continuous press, steady timber and resin, and several hundred crore rupees; but India already has more capacity than demand, so the barrier to competing is low." },
        moat: "The largest capacity, efficient European lines and a known brand. But MDF is now, in its MD's words, ‘a commodity sort of type of business’: it could not hold a price rise and must follow rivals' cuts.",
        salesDrivers: ["**Plant use**: MDF use fell from 66% in FY25 to 56% in FY26 and 51% in Q1 FY27; each 10 points of use adds about ₹90cr of revenue at a high extra margin.", "**Industry oversupply**: about 4 lakh cubic metres of new rival lines (Action Tesa, Greenply's Line 2) arrive through FY27 on a base already well above demand.", "**Pricing ‘at par’**: it now prices with Century rather than at a premium, to win back volume and furniture makers.", "**Exports**: a Gulf reopening would restore about a tenth of sales and help it meet a ₹154cr export obligation under a duty-saving scheme.", "**No new capacity**: only ₹20–30cr of maintenance capex; no MDF expansion for 18–24 months."],
        inputs: "**Plantation timber** (eucalyptus, poplar and other species), **urea- and melamine-formaldehyde resins** from crude-linked chemicals (up 40–45% in May 2026, still 4–5% above pre-war by August), and power. Materials were 51% of sales in FY26.",
        costEffect: "**Not protected.** It raised MDF prices 15% (5% then 10%) to cover resin, but rivals discounted and it rolled the rise back to 1–2% by July. Switching timber species and better efficiency saved 6–7%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (5% to 0%). **What happened:** there is no Indian price index for its wood-and-resin mix. The margin collapsed from 23% in FY23 to 16% in FY24, 9% in FY25 and 5% in FY26 (after a ₹49cr loss on unhedged euro loans) as new industry capacity pushed prices down and its own new line sat half empty. Quarterly it recovered from −5% in Q1 FY26 to 8–10%, helped in Q1 FY27 by cheap stock carried from Q4 and a price rise since reversed.",
        competitors: [{ name: 'Century Plyboards', note: 'Overtook Greenpanel as the largest domestic MDF seller by volume for two quarters, backed by a strong plywood brand.' }, { name: 'Action Tesa', note: 'Large unlisted MDF and particle-board maker adding a southern line.' }, { name: 'Greenply Industries', note: 'Efficient Vadodara MDF plant at 17% margins, building a second line.' }, { name: 'Rushil Decor and imports', note: 'Smaller rival; BIS rules since February 2025 keep most imports out.' }],
        position: "**India's largest MDF maker by capacity**, but no longer the largest seller in India by volume.",
        money: "Screener shows **net debt of ₹173cr**; the company reports ₹141cr in June 2026 (gross debt ₹317cr against about ₹176cr of cash), down from ₹233cr a year earlier. About ₹316cr of loans are in euros and unhedged, which cost ₹49cr in FY26 as the rupee fell. Capex is only maintenance. CARE rates it A+/Stable (outlook raised from Negative in August 2026). The income-tax department searched its offices, plants and the promoter's home in February–March 2026, and it paid ₹4.8cr of wrongly claimed GST credit after a July 2025 search. It paid a dividend despite the FY26 loss. Promoters hold **53.3%**, little changed from 53.1% in September 2023.",
        watch: ["Plant use above 65% with margins above 12%.", "MDF exports restarting.", "The outcome of the income-tax search."],
        charts: consumerDurablesCharts['Greenpanel Inds.'],
    },
    {
        company: 'Hindware Home Innov.',
        inShort: ["**A Somany-group company with Hindware bathware** (sanitaryware, faucets, tiles), **Truflo plastic pipes** and kitchen appliances, being split into two listed companies.", "**Good:** bathware grew 14% in Q1 FY27 at about a 12% margin, and consumer appliances turned profitable at the operating level. **Bad:** pipes earn about 3%, net bank debt is about ₹669cr, CARE cut its rating to BBB+, a subsidiary carries a going-concern warning, and it loses money after tax.", "**Verdict: pass.** A decent bathware business inside an indebted group."],
        tagline: "A bathroom, pipes and kitchen-appliance group: Hindware sanitaryware and faucets, Truflo PVC pipes, and chimneys, hobs and water heaters.",
        revenue: '₹2,510cr (FY26, consolidated)',
        products: [
            { name: 'Bathware', text: "Hindware sanitaryware from Bahadurgarh (Haryana) and Bibinagar (Telangana), faucets from Kaharani (Rajasthan), plus bought-in tiles and wellness products. About 70% of sanitaryware and 50% of faucets are made in-house. FY26 EBITDA ₹157cr (10.3%); about 12% in Q1 FY27." },
            { name: 'Pipes and fittings (Truflo)', text: "PVC and CPVC plumbing and agricultural pipes from Sangareddy (Telangana, 66,000 tonnes) and a new Roorkee plant (12,500 tonnes, from January 2026). Volume rose 28% in Q1 FY27, but the margin is only about 3% and the plants are about half used." },
            { name: 'Consumer appliances', text: "Kitchen chimneys, hobs, cooktops and sinks, mostly outsourced, plus water heaters through Hintastica. It exited fans, coolers and purifiers in FY26; Q1 FY27 revenue ₹83cr at about 7% EBITDA. This arm is to be demerged." },
        ],
        revenueText: "**Bathware was 61% of FY26 revenue** (₹1,520cr), pipes 27% (₹673cr) and consumer appliances 12% (₹317cr). Almost all profit comes from bathware; pipes earned ₹31cr of EBITDA but lost ₹29cr before tax, and consumer lost ₹12cr. Bathware sells about 75% through retail and 70% in Tier 2 and 3 towns.",
        mixes: [
            { caption: 'Revenue by business, FY26 (Q4 call)', parts: [{ label: 'Bathware', share: 61 }, { label: 'Pipes and fittings', share: 27 }, { label: 'Consumer appliances', share: 12 }] },
        ],
        customers: ["**Homeowners and plumbers** buying bathware through dealers and about 640 brand stores; a lakh plumbers use its app.", "**Builders and institutions**, about 25% of bathware sales.", "**Pipe distributors**, where the top 30 take about 58% of pipe sales, and debtor days rose from 74 to 87 in a year."],
        difficulty: { level: 'Medium', text: "Sanitaryware and faucets need good kilns, casting and a trusted brand; PVC pipes are a simple extrusion business with many rivals. The Hindware brand is the hard part to copy, not the factories." },
        moat: "One of India's best-known sanitaryware names (21% unprompted recall, its own survey) lets it raise prices without losing sales. Pipes and appliances have no such edge, and the group's debt and write-offs hide the bathware franchise.",
        salesDrivers: ["**Bathroom demand from new homes and renovations**: bathware is guided to grow at ‘mid-teen’ rates (trimmed from 15–20%), with a 2–4-point margin gain over 18–24 months from 11% in FY26.", "**Price**: faucet prices are up about 20% in twelve months and sanitaryware 6–7% twice in 2026, with ‘no major impact on sales’.", "**Pipes volume**: Roorkee should add about ₹200cr a year once ramped; the target is a 4–5% pipe margin.", "**Consumer appliances**: targets of ₹500cr+ in two years and ₹700–750cr by FY30–31, against ₹317cr in FY26.", "**The demerger**: approved by shareholders in March 2026 but still awaiting the tribunal; it would give holders one share each of a bathware-and-pipes company and an appliances company. Capex is only about ₹70cr in FY27."],
        inputs: "**Brass** for faucets (up about 40% in a year), **clay, feldspar and kiln gas** for sanitaryware, **PVC resin** for pipes (₹68 to ₹114 a kilogram in January–March 2026, then about ₹80–85), and **bought-in tiles and appliances**. Materials were 26% of sales in FY26 on Screener's split, with power and other factory costs a further 36%.",
        costEffect: "**Passed on in bathware, not in pipes.** Bathware raised faucet prices about 20% over a year and sanitaryware 13% in two steps, keeping pace with brass and gas. Pipes are a price-taker: when PVC resin spiked in March 2026 it ran out of stock and lost sales, and when resin falls it must cut prices at once. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3 points (8% to 5%). **What happened:** there is no Indian price index for its mix of brass, clay and PVC. The margin slid from 9% in FY23 to 8% in FY24 and 6% in FY25 as appliances lost money and pipes stalled, recovered to 8% in FY26 after exiting weak categories, and was 7–9% in each of the last five quarters.",
        competitors: [{ name: 'Cera Sanitaryware, Jaquar', note: 'Cera has a stronger balance sheet; unlisted Jaquar leads in faucets.' }, { name: 'Kohler, Roca (Parryware), Grohe', note: 'Multinationals in mid and premium bathware.' }, { name: 'Supreme, Astral, Finolex, Prince', note: 'Far larger pipe makers with better scale and margins.' }, { name: 'Elica, Faber, Glen', note: 'Kitchen-chimney and hob brands.' }],
        position: "**No. 1 in sanitaryware brand recall and No. 2 in faucets** (company claims), in a sanitaryware market it sizes at ₹7,000–8,000cr; a small player in pipes.",
        money: "Screener shows **net debt of ₹784cr** (including leases); the company puts net bank debt at about ₹669cr in June 2026 (pipes ₹427cr, bathware ₹224cr), down from ₹708cr in May, and aims for 30–40% less in two years. Interest (₹70cr) and depreciation (₹117cr) took almost all of FY26's ₹199cr operating profit. Capex is about ₹70cr in FY27. CARE cut its rating to BBB+ in April 2026. Promoters put about ₹150cr into a ₹250cr rights issue in December 2024. No dividend. The auditor flags a going-concern doubt on subsidiary Evok Homes. Promoters hold **52.7%**, up from 51.3% in September 2023.",
        watch: ["Tribunal approval of the demerger.", "Pipes margin above 5% for two quarters.", "Net bank debt below ₹550cr."],
        charts: consumerDurablesCharts['Hindware Home Innov.'],
    },
    {
        "company": "Euro Pratik Sales",
        "segment": "Plywood, MDF and laminates",
        "inShort": [
            "**Designs and sells decorative wall panels and laminates** under the Euro Pratik and Gloirio brands, without owning a factory: 36–44 contract makers in India, South Korea, China and elsewhere produce its designs, and about 200 distributors sell them.",
            "**Good:** a fast-fashion design model (about 1,000 new designs a year) that earned a 34% operating margin in FY26 with almost no plant, and no net debt. **Bad:** the parent company's own sales fell 4% in FY26. Growth now comes from buying lower-margin dealers and retailers: the margin fell to 26% in Q1 FY27, stock takes 255 days to sell, and over three years only about ₹85cr of ₹294cr operating profit came back as cash.",
            "**Verdict: wait.** A clever, asset-light brand, but growth is being bought and profit is not turning into cash; wait for a year of positive free cash with the margin holding."
        ],
        "tagline": "A Mumbai brand founded by the Singhvi brothers that designs decorative wall panels and laminates, has them made by contract manufacturers, and sells them through about 200 distributors.",
        "revenue": "₹334cr (FY26, consolidated)",
        "products": [
            {
                "name": "Decorative wall panels",
                "text": "PVC, louvre, fluted, charcoal, translucent and other panels that replace wallpaper, wood or paint: 19 product ranges (Chisel, Louvers, Miga Edge and others). This is **57% of FY26 revenue**."
            },
            {
                "name": "Decorative laminates",
                "text": "11 ranges of designer laminates and acrylic surfaces, sold mainly under Gloirio: **31% of FY26 revenue**."
            },
            {
                "name": "Films, adhesives and acquired trading lines",
                "text": "Interior films, adhesives, catalogues, plus veneers, plywood and other products sold through the acquired Uro Veneer World (South India), Chawla Brothers (Punjab): 11% of FY26 revenue, rising to 19.5% in Q1 FY27. A planned 56% stake in Fabwood (timber, South India) was put on hold on 26 October 2026."
            }
        ],
        "revenueText": "**All but about 1% of sales are in India**, and **South India was 47% of FY26 revenue**, West 26% and North 16%. In FY26 wall panels were 57%, laminates 31% and others 11%. In Q1 FY27 the split was 51%, 30% and 19.5%, as acquired dealers added other products. There is no single big customer: the top 30 distributors were 36% of FY25 revenue (RHP). The parent company's own revenue fell to ₹210cr in FY26 from ₹219cr; consolidated growth of 18% came from subsidiaries and acquisitions. Q1 FY27 revenue was ₹103cr, up 60%.",
        "mixes": [
            {
                "caption": "Revenue by product, FY26 (annual report)",
                "parts": [
                    {
                        "label": "Wall panels",
                        "share": 57.3
                    },
                    {
                        "label": "Laminates",
                        "share": 31.4
                    },
                    {
                        "label": "Films, adhesives and others",
                        "share": 11.3
                    }
                ]
            },
            {
                "caption": "Revenue by region, FY26 (annual report)",
                "parts": [
                    {
                        "label": "South",
                        "share": 47
                    },
                    {
                        "label": "West",
                        "share": 26.1
                    },
                    {
                        "label": "North",
                        "share": 15.9
                    },
                    {
                        "label": "East",
                        "share": 8.2
                    },
                    {
                        "label": "Central",
                        "share": 2.7
                    }
                ]
            }
        ],
        "customers": [
            "**Distributors and dealers**: 205 distributors in 148 cities in June 2026 (203 in India, 2 in Nepal). The top 30 were 36% of FY25 revenue.",
            "**Architects, interior designers and carpenters**, who choose the product. Homeowners, offices, hotels and hospitals are the end users.",
            "**Its own acquired retailers**: Uro Veneer World (51%, Bengaluru region), Chawla Brothers (51%, Punjab) sell straight to contractors, builders and homeowners."
        ],
        "difficulty": {
            "level": "Low",
            "text": "It makes nothing. Designs come from an in-house team and are made by contract manufacturers; the top supplier, Miga of South Korea, supplied 24% of FY25 purchases (71% in FY24). The skill is choosing designs and stocking them fast. Management itself says designs are copied far faster than they used to be."
        },
        "moat": "A recognised brand among interior designers, a dedicated distributor network and a rapid design cycle give it a lead in organised wall panels. By its own Technopak-sourced claim it had about 16% of that market in FY23. But there is no manufacturing or technology barrier, and rivals can copy a design quickly. Buying dealers secures shelf space but brings in lower-margin trading revenue.",
        "salesDrivers": [
            "**Guidance**: on 24 September 2026 the CMD said FY27 revenue would grow at least 35–40%, with a consolidated PAT margin of 20–22%.",
            "**Acquisitions**: Uro Veneer World (51%, ₹76.5cr, December 2025; about ₹115cr of FY27 revenue projected), Chawla Brothers (51%, ₹33.2cr, March 2026; about ₹80cr projected). The Fabwood deal (56%, ₹42.7cr, ₹50–53cr of revenue projected) was **put on hold on 26 October 2026** while the company takes legal advice. On 5 November 2026 it agreed to buy **51% of Drashti Surfaces**, a veneer and decorative-laminate maker, for ₹31.1cr plus a loan of up to ₹20cr from internal cash: its first factory of its own.",
            "**New designs**: it targets more than 1,000 designs a year and about two new catalogues a month. Products launched in September and October 2026 install straight onto walls.",
            "**Housing and interiors spending**: demand follows home building and refurbishment, with the organised share rising (Technopak).",
            "**Seasonality**: Q1 is usually the weakest quarter, management says."
        ],
        "inputs": "**Finished goods bought from contract manufacturers**, much of it imported: 55% of FY25 purchases were in foreign currency (92% in FY24), mostly dollars and yuan, with no hedging (RHP). Cost of goods was 52% of FY26 sales.",
        "costEffect": "**Mostly passed on, but exposed to currency and mix.** Gross margin rose from 36% in FY23 to 45.5% in FY25 and 47.8% in FY26, then fell to **39.0% in Q1 FY27** because the acquired dealers earn thinner margins. The Q1 operating margin was 26%, against 34% a year earlier. **Rule of thumb:** a 10% rise in the cost of goods not passed on would cut the operating margin by about 5 points. FY26 results cited volatile crude-linked raw material prices, which feed into PVC panels at its suppliers.",
        "competitors": [
            {
                "name": "Greenlam Industries",
                "note": "Much larger laminate maker with its own factories. The only close listed peer the RHP names in its own field (the others are paint companies)."
            },
            {
                "name": "Stylam Industries, Merino, Century Plyboards",
                "note": "Laminate and panel makers with factories. Euro Pratik competes on design range rather than cost."
            },
            {
                "name": "Unorganised importers and local brands",
                "note": "Most of the wall-panel market. It is easy to copy designs and import from China."
            }
        ],
        "position": "**A leader in organised decorative wall panels**, with about 16% of that market in FY23 (Technopak, in the RHP), 3,750 SKUs and 205 distributors. As it owns no plants, capacity use does not apply.",
        "money": "Screener shows **borrowings (with leases) of ₹24cr** at March 2026 against about ₹16cr of cash and ₹14cr of investments, so **about ₹8cr of net cash**. The ₹42.7cr Fabwood payment is on hold (26 October 2026), but the Drashti Surfaces purchase (₹31.1cr plus a loan of up to ₹20cr, 5 November 2026) will use most of it. **Cash is the weak point.** Over FY24–FY26, ₹294cr of operating profit produced only ₹85cr of operating cash and ₹27cr of free cash. Stock rose to 255 days of sales from 103, and the cash cycle to 321 days. Acquisitions have cost about ₹152cr since December 2025. The September 2025 IPO raised no money for the company: the family sold ₹451cr of shares at ₹247, then bought about ₹100cr back. The share price is about ₹188.",
        "watch": [
            "Operating cash flow positive for FY27 and stock days falling back towards 150.",
            "Operating margin holding near 25% or above as Uro Veneer, Chawla and Drashti Surfaces are consolidated, and what happens to the Fabwood deal.",
            "The parent company's own sales growing again, not just acquired revenue."
        ],
        charts: consumerDurablesCharts["Euro Pratik Sales"],
    },
    {
        "company": "Varmora Granito",
        "segment": "Tiles",
        "inShort": [
            "**A Morbi, Gujarat tile maker** selling mainly glazed vitrified tiles under the Varmora brand through about 286 franchise showrooms and 2,000 multi-brand dealers, plus exports to over 100 countries and some bathware.",
            "**Good:** Q2 FY27 was strong (revenue up 9%, operating margin 16%), and the IPO money should make it close to debt-free. **Watch:** returns are low (return on equity about 7–8%), power and gas eat about 22% of sales and the Middle East conflict shut plants in April 2026, profit growth is helped by a change in depreciation method, and Carlyle still owns a large stake it may sell.",
            "**Verdict: pass.** A mid-sized, low-return Morbi tile maker whose earnings depend on gas prices, at about 34 times earnings, a richer price than Somany or Orient Bell for weaker returns."
        ],
        "tagline": "A Morbi-based maker of vitrified and ceramic tiles and bathware, founded in 2003 by the Varmora family and backed by Carlyle; listed in September 2026.",
        "revenue": "₹1,512cr (FY26, consolidated)",
        "products": [
            {
                "name": "Glazed vitrified and technical tiles",
                "text": "Large-format glazed vitrified tiles (GVT) and 'technical' surfaces such as slabs and stone-look ranges, made in eight Morbi-area plants and through contract makers. **74% of FY26 revenue.**"
            },
            {
                "name": "Ceramic and other tiles",
                "text": "Wall and floor ceramic tiles; the Solaris ceramic plant has shut and will be converted to GVT, and the Simola subsidiary was sold in September 2026."
            },
            {
                "name": "Bathware and adhesives",
                "text": "Sanitaryware, faucets and tile adhesives through its Varmora Sanitarywares subsidiary; about 9% of H1 FY27 revenue."
            }
        ],
        "revenueText": "**Glazed vitrified and technical tiles were 74% of FY26 revenue.** **Exports were 21% of product sales in FY26** (₹317cr) and India 79%. In India, franchise showrooms and multi-brand dealers were 67% of domestic sales and builders, architects and government 33%. About 80% of what it sells is made in its own plants (82% of FY26 revenue from in-house plants), the rest bought from 304 contract makers. In H1 FY27 revenue was ₹714cr, up 3%, held back by the Simola sale (about ₹52cr less) and a 23% fall in Q2 exports; domestic revenue rose 9% in H1 and 18% in Q2.",
        "mixes": [
            {
                "caption": "Revenue by market, FY26 (RHP, share of product sales)",
                "parts": [
                    {
                        "label": "India",
                        "share": 79
                    },
                    {
                        "label": "Exports",
                        "share": 21
                    }
                ]
            },
            {
                "caption": "Domestic sales by channel, FY26 (RHP)",
                "parts": [
                    {
                        "label": "Showrooms and dealers",
                        "share": 67
                    },
                    {
                        "label": "Builders and projects",
                        "share": 33
                    }
                ]
            }
        ],
        "customers": [
            "**Home buyers and renovators** through about 286 franchise-run Varmora showrooms and more than 2,000 multi-brand dealers in 949 cities.",
            "**Builders, contractors, architects and government buyers** (33% of domestic sales).",
            "**Overseas importers** in over 100 countries; exports fell 23% in Q2 FY27 on scarce and costly freight."
        ],
        "difficulty": {
            "level": "Low",
            "text": "Tile making in Morbi is a mature process run by hundreds of plants; scale, design and a brand matter more than technology."
        },
        "moat": "A known brand and a franchise showroom network give it some pricing power over unbranded Morbi makers, but it is far smaller than Kajaria or Somany and competes in an oversupplied cluster.",
        "salesDrivers": [
            "**Housing and renovation demand** in India, and the shift to larger glazed vitrified tiles.",
            "**Distribution**: more showrooms and a push into East and Northeast India, helped by the new Tezpur plant.",
            "**Exports**: about a fifth of sales, exposed to freight costs, Gulf conflict and trade barriers; export revenue fell about 18% in H1 FY27 for lack of containers, while domestic glazed-vitrified volume grew 14%.",
            "**Guidance** (first call, 23 Oct 2026): about 15% revenue growth and 10% volume growth in FY27 if exports revive; average price up about ₹75 a square metre in a year (₹50 from price rises, ₹25 from larger, dearer sizes); no immediate capex.",
            "**Gas supply and prices**: fuel shortages from the Middle East conflict shut plants in April 2026.",
            "**Capacity use**: most plants ran at about 59–87% in FY26; management puts capacity at 50.6 million square metres, used 72% in FY26 and 76% in H1 FY27 (63% in Q1, 89% in Q2), aiming for 80–85% next year. The new Northeast plant ran at 50% in Q2 and should reach 75% in Q3."
        ],
        "inputs": "**Clay, feldspar and glazes** plus **natural gas and propane** to fire the kilns, and bought-in tiles from contract makers. In FY26 materials and bought-in tiles were about 42% of revenue and power and fuel about 22%.",
        "costEffect": "**Partly passed on, with a lag.** Gas is the swing cost: power and fuel rose to 24.5% of income in FY25 before easing to 21% in FY26, and the operating margin moved from 11% in FY23 to 8% in FY24 and back to 11% in FY25–FY26. Its plants can run on propane or natural gas. **Rule of thumb:** a 10% rise in gas and power costs not passed on would cut the margin by about 2 points (11% to 9%). **What happened:** fuel shortages in April 2026 cut Q1 FY27's margin to 9%; it recovered to 16% in Q2.",
        "competitors": [
            {
                "name": "Kajaria Ceramics",
                "note": "India's largest tile maker, about three times Varmora's revenue, with far higher returns."
            },
            {
                "name": "Somany Ceramics, Orient Bell",
                "note": "Branded peers named in the RHP; Somany is larger, Orient Bell smaller."
            },
            {
                "name": "Asian Granito and unbranded Morbi makers",
                "note": "Hundreds of Morbi plants compete hard on price, especially in exports."
            }
        ],
        "position": "**A mid-sized branded Morbi tile maker** with about 39 million square metres a year of tile capacity in the plants listed in the RHP (including the Solaris plant now shut), much smaller than Kajaria and Somany.",
        "money": "Borrowings were **₹377cr at March 2026** and ₹327cr at September 2026 on Screener; after the IPO it held ₹372cr of cash and deposits at September, so it was **roughly net-cash (about ₹45cr)**, and the company itself reports net cash. The IPO at ₹148 (29 September 2026) raised ₹320cr of new money, of which ₹245cr is to repay loans, plus ₹388cr that went to Carlyle's Katsura Investments; the share is now about 9% below the IPO price. Over FY22–FY26 it turned ₹443cr of operating cash out of ₹667cr of operating profit (66%), but heavy capex left five-year free cash at −₹123cr. **Depreciation changed from the declining-balance to the straight-line method from April 2026**, which raised H1 FY27 profit before tax by ₹22.5cr (consolidated). Return on equity was about 7–8% in FY26. Stock was 156 days of sales in FY26. No dividend. Promoters hold **47.04%**.",
        "watch": [
            "FY27 growth of about 15% (10% in volume), as guided on the first call, and exports recovering from an 18% fall in H1.",
            "Profit growth excluding the depreciation change, and whether return on equity rises above 10%.",
            "Further share sales by Carlyle once lock-ins end."
        ],
        charts: consumerDurablesCharts["Varmora Granito"],
    },
];

export const consumerDurablesSurfacesBusinesses = { intro, profiles };
