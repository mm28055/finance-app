import { BusinessProfile, OverviewSection } from './types';
import { constructionCharts } from './card-data/construction';

// Tab 2 of the Construction - Energy EPC and steel buildings note: what each company
// actually does. Revenue totals are the filed figures (Screener). Order books, volumes and
// splits come from the companies' latest presentations, calls, annual reports and rating
// reports; where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (Interarch standalone, the others consolidated); splits and order books are from each company's latest call, presentation or annual report. The four steel-building makers' cards plot their quarterly margin against India's official hot-rolled steel price index, their main raw material. The three solar and farm-pump contractors buy a mix of modules, batteries, pumps and cables with no single price index, so their cards have no cost-versus-input chart.",
            "Three terms recur. A **pre-engineered building (PEB)** is a steel frame designed and cut in a factory and bolted together on site, used for factory sheds, warehouses and, increasingly, heavy multi-storey frames. **EPC** (engineering, procurement and construction) means the contractor designs the project, buys the equipment and builds it for one price. The **order book** is signed work not yet done; dividing it by a year's revenue gives the years of work in hand, but only if the projects actually start.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Seven companies that build for India's factories and its energy transition, in two groups.",
        ],
        points: [
            {
                label: 'Steel-building makers — pre-engineered buildings and structures',
                text: "**Interarch**, **EPack Prefab**, **M&B Engineering** and **Pennar Industries** design steel buildings, fabricate the frames in their own plants and erect them on site, for factories, warehouses, solar-module and battery plants, semiconductor fabs and data centres. Most contracts are **fixed-price**, and steel is 58–67% of sales, so a jump in steel prices comes out of their margin until new orders are priced at the new level. They earn about 8–12% on revenue and grow by adding plants; M&B and Pennar also sell to the US, where margins are higher. Pennar is a wider engineering group that also makes tubes, boilers, hydraulics and car-body parts and is running down an older steel and rail business.",
            },
            {
                label: 'Solar, battery-storage and farm-pump contractors',
                text: "**Sterling and Wilson** and **Solarworld** build large solar parks and battery-storage plants for power companies; the modules and batteries they install pass through at close to cost, so they keep a **gross margin of only 8–10%**, and revenue swings with when big projects start. **GK Energy** installs solar water pumps for farmers under government subsidy schemes, mainly in Maharashtra; the scheme sets the volume and the price, pays a better margin (16–19% filed) than private contracting, but pays slowly. All three are moving into battery storage, and Sterling and Wilson also earns steady fees for maintaining plants.",
            },
        ],
    },
    {
        heading: 'Five ways of earning',
        body: [
            "How each business is paid decides what its margin means and how quickly profit turns into cash.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**A fixed price per steel building**', 'Interarch, EPack, M&B, Pennar (India)', 'A lump-sum price for design, fabrication and erection, set when the order is booked; about 8–12% operating margin', 'Paid in stages as steel is delivered and erected; steel stock and slow collections tie up cash (filed cash cycles of 26–137 days)'],
                    ['**Steel buildings for export**', 'M&B (to North America), Pennar (its own US plants), Interarch (a Canada unit from 2027)', 'Dollar prices; M&B says export orders normally earn 16–17% against about 11% at home', 'Longer shipping and collection times; freight and US tariffs can take part of the margin'],
                    ['**Solar and battery EPC contracts**', 'Sterling and Wilson, Solarworld', 'The full project price including modules and batteries, with a gross margin of about 8–11%', 'Milestone payments as work is certified; supplier credit and client advances fund much of it, and money is held back until the plant is proven'],
                    ['**A price per pump under a government scheme**', 'GK Energy', 'A tendered price per installed system, paid largely from central and state subsidy; 16–19% filed margin', 'State schemes pay slowly: about 140 debtor days in FY26'],
                    ['**Recurring fees and product sales**', 'Sterling and Wilson (maintenance), GK Energy (battery storage), Pennar (tubes, boilers, car-body parts)', 'Maintenance at 20–25% gross margin; monthly battery-storage payments for 15 years; factory prices per piece or tonne', 'Monthly or quarterly once running; product sales on normal trade credit'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'M & B Engineer.',
        inShort: ["**A maker of pre-engineered steel buildings and heavy structures (Phenix) and self-supported steel roofing built on site (Proflex)**, with plants in Gujarat and Tamil Nadu and a growing US export business.", "**Good:** ₹195cr of net cash, a CRISIL A rating, a clean audit, 22–26% returns on capital and FY26 exports up 156%. **Bad:** its margin slid from 13.6% to 11.4% (company figures) on steel and freight, management withheld margin guidance, FY24 brought in only ₹5cr of operating cash and inventory is 175 days, and the order book dipped to ₹1,053cr as Q1 orders lagged.", "**Verdict: follow.** The cheapest of the steel-building makers, and its cash is better than the filed figures showed: its FY26 statement counted ₹120.81cr of IPO deposits as operating spending, and corrected, operating cash was about +₹90cr against ₹93cr of profit, and ₹198cr against ₹265cr over FY22–FY26 (75%). Moved up from wait on 16 October 2026; own needs H1 FY27 cash confirming it, the margin near 11% and orders recovering."],
        tagline: "Ahmedabad-based maker of pre-engineered steel buildings, heavy steel structures and self-supported steel roofing, selling in India and to North America.",
        revenue: '₹1,260cr (FY26, consolidated)',
        products: [
            { name: 'Phenix: pre-engineered buildings', text: "Steel-framed factories and warehouses designed and fabricated at Sanand (92,000 tonnes since the expansion started on 26 October 2026) and Cheyyar, and erected on site. Phenix was 74% of Q1 FY27 revenue." },
            { name: 'Phenix: heavy structural steel', text: "Heavy frames for data centres and industrial plants: 12,000 tonnes of capacity plus a new ₹30cr, 10,000-tonne automated line due in Q1 FY28." },
            { name: 'Proflex roofing', text: "Self-supported steel roofs that need no separate frame, made on site by mobile units; 21 lakh m² a year of capacity and 26% of Q1 revenue." },
            { name: 'Exports', text: "Buildings for North America, sold through a US subsidiary; both plants are certified by the American Institute of Steel Construction. Exports were ₹166cr in FY26, up 156%, and are ₹278cr of the order book." },
        ],
        revenueText: "FY26 revenue was **₹1,260cr, up 27%**, with exports of ₹166cr. In Q1 FY27 revenue rose 22.5% to ₹291cr: **Phenix ₹214cr (74%) and Proflex ₹77cr (26%)**; domestic sales were 90% and exports 10%. The **order book** was **₹1,053cr at June** (Phenix ₹837cr including ₹278cr of exports, Proflex ₹216cr), slightly down from ₹1,083cr in March as orders of about ₹260cr lagged the ₹100cr-a-month aim. Management guides FY27 revenue growth of ‘over 25%’ and more than 20% a year for three to four years.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27 (company)', parts: [{ label: 'Phenix (buildings and structures)', share: 74 }, { label: 'Proflex (roofing)', share: 26 }] },
            { caption: 'Revenue by market, Q1 FY27 (company)', parts: [{ label: 'India', share: 90 }, { label: 'Exports', share: 10 }], note: 'Exports were 13% of FY26 revenue.' },
        ],
        customers: ["**Indian factory and warehouse owners**: 60–70% of customers are repeat buyers; the company does not name them.", "**US buyers**, through its subsidiary Phenix Construction Technologies; a large US order announced in October 2025 is about 28% dispatched.", "**Data-centre builders**, a growing market where management puts structural steel at about 8–10% of spending."],
        difficulty: { level: 'Medium', text: "Standard steel buildings are made by many firms, but heavy structures and export work need design skill and US certification, which most Indian makers are only starting to get. Each plant can only serve customers within about 1,000–1,200 km, so growth means building new plants." },
        moat: "A design-led offer across buildings, heavy structures and a niche roofing product, 60–70% repeat customers and US certifications. The weakness is scale and pricing: it turns work down rather than cut prices (a 12–15% hit rate against about 20% at peers), and each plant serves only its own region.",
        salesDrivers: ["**Capacity**: Sanand is ‘chock-a-block full’, so growth depends on the 20,000-tonne expansion that started on 26 October 2026 (total capacity now about 123,800 tonnes), the heavy line and Cheyyar's expansion, taking capacity to about 154,000 tonnes by Q3 FY28.", "**Exports to the US**: export orders normally earn about 16–17% operating margin (about 15% at today's freight) against about 11% at home; the US cut its Section 232 steel duty from 50% to 25%.", "**Domestic factory and data-centre spending**, with orders accepted only at its target margin: ‘I will not run after orders just to make my hit rate 20% by letting go of my margins.’", "**Order inflow**: about ₹260cr in Q1 against an aim of ₹100cr a month.", "**Volume**: 72,000 tonnes in FY26, with 85,000–90,000 targeted for FY27."],
        inputs: "**Steel** (plates, coils and sections for frames, and coil for roofing), plus freight on exports. Materials were 58% of sales in FY26; site, subcontract and running costs 12%; staff 9% (Screener).",
        costEffect: "**Partly passed on, with a lag.** Contracts not yet covered for steel took the hit when domestic steel rose more than 20% in Q4 FY26, and freight to the US doubled to US$10,000–12,000 a container, adding about 3% of revenue to other costs in Q1. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (11% to 5%). **What happened:** India's hot-rolled steel price index was about flat from Q1 FY25 to Q1 FY27 (100 to 101), and its filed margin rose from 9.3% to 10.7%; but Q1 FY25 was a weak quarter, and against 13.4% in Q4 FY25 the margin has fallen about three points as steel and freight rose.",
        competitors: [{ name: 'Interarch Building and EPack Prefab', note: "Larger listed steel-building makers, both adding capacity in FY27; Interarch has more heavy-structure capacity." }, { name: 'Pennar Industries', note: "Also sells steel buildings to the US, but from its own US plants rather than from India." }, { name: 'Other Indian steel-building makers', note: "Compete at home on price; most are only starting to build the export capability M&B already has." }],
        position: "**A mid-sized, design-led steel-building maker with an export lead**: both plants are US-certified and exports were 13% of FY26 revenue.",
        money: "Net cash of **₹195cr** (Screener) after an August 2025 IPO at ₹385 a share: ₹275cr of new money and ₹375cr sold by promoters. Borrowings fell from ₹191cr to ₹84cr; ₹146.69cr of ₹259.32cr of net IPO money had been used by June. FY26 operating cash was −₹31cr as filed, but that counted ₹120.81cr of IPO money placed in fixed deposits as operating spending; the company reclassified it in June 2026, giving about +₹90cr. Inventory is 175 days. CRISIL rates it A/Stable. Promoters hold **70.61%**.",
        watch: ["Margin holding near 11% in Q2.", "Orders back at ₹100cr a month.", "The Sanand expansion (started 26 October 2026) filling, and H1 operating cash positive."],
        charts: constructionCharts['M & B Engineer.'],
    },
    {
        company: 'EPack Prefab Techno.',
        inShort: ["**A maker of pre-engineered steel buildings and insulated sandwich panels**, with a smaller packaging-foam business, for solar, data-centre, auto and warehouse projects.", "**Good:** FY26 revenue up 34%, a record order book of about ₹1,380cr, 85% of operating profit turned into cash and ₹171cr of net cash. **Watch:** most contracts are fixed-price, three new plants arrive in FY27, and its data-centre venture lost its first two bids.", "**Verdict: follow.** The best momentum and cash of the steel-building makers, but the price already asks for about the growth I expect."],
        tagline: "Noida-based maker of pre-engineered steel buildings and sandwich panels, with an expanded-polystyrene (EPS) foam business for packaging and construction.",
        revenue: '₹1,525cr (FY26, consolidated)',
        products: [
            { name: 'Pre-engineered buildings', text: "Design, manufacture and erection of steel-framed factories, warehouses and other steel structures, sold turnkey. Capacity is 147,122 tonnes a year, running at 75%+, with a 50,000-tonne Gujarat plant due by about Q3 FY27." },
            { name: 'Sandwich panels', text: "Insulated wall and roof panels, with 1.3 million m² a year of capacity; use of the first line rose to about 45% in Q1 from 25% in FY26, and a second line at Ghiloth is due in October–November 2026. First exports, about ₹2.5cr to Africa, shipped in Q1." },
            { name: 'EPS foam', text: "Expanded polystyrene blocks and moulded products for packaging and construction; the company does not give this business's revenue separately." },
            { name: 'Data-centre products', text: "A new subsidiary, EPack Data Center Solutions, with ₹75cr earmarked to make factory-built modules, pipe spools and containment for data centres; no revenue yet, and land and plans are still pending." },
        ],
        revenueText: "FY26 revenue was **₹1,525cr, up 34%**, and has compounded at 45% a year over five years. The company does not split revenue between prefab and EPS foam. The **order book** rose to **about ₹1,380cr at June** (from ₹1,117cr in May) on record Q1 bookings of ₹580cr, against ₹240cr a year earlier. By the company's own, overlapping categories, about 35–38% of the book is from renewables, data centres, semiconductors and logistics, 22–25% from logistics and warehousing, and about 10% from auto. Q1 FY27 revenue rose 24% to ₹366cr, and guidance is **₹1,900–1,950cr for FY27**, with ₹2,700–2,900cr possible once all new plants are full.",
        customers: ["**Solar-module and cell makers** such as Waaree Energies; its largest order yet, ₹165cr, is for a solar cell and module plant.", "**Warehouse developers** such as Horizon (logistics and warehousing are 22–25% of the book) and **car makers**, including its first order from one.", "**Data centres and semiconductor plants**: panels for an Adani data centre, though it lost its first two turnkey data-centre bids in Q1."],
        difficulty: { level: 'Medium', text: "Steel buildings and panels are made by many firms, and EPack says it faces competition in every sector it serves. What sets makers apart is speed of execution, plants close to customers and a balance sheet able to take large orders." },
        moat: "Speed of execution (‘our speed of execution remains the forte’) and a growing plant network in the north, south and west; booking orders almost weekly means new contracts are priced at current steel. The weakness is pricing power: margins are ‘more or less similar’ across sectors because every one is competitive.",
        salesDrivers: ["**Factory and warehouse spending**: solar-module plants, data centres, semiconductor and car plants, and warehouses.", "**New capacity**: Mambattu line 2 is running, the Ghiloth plant started on 28 October 2026 (panels to about 21.1 lakh m² and steel buildings to 1,58,422 tonnes) and the Gujarat plant follows from April 2027; FY27 capex is about ₹150cr.", "**Order inflow**: ₹580cr in Q1 against a FY27 target of ₹2,000cr.", "**Panel-line use**: the first sandwich-panel line ran at only 25% in its first year, the main promise it admits missing since the IPO.", "**Data centres**: a ₹75cr unit for factory-built data-centre parts, with real numbers promised by the end of Q2."],
        inputs: "**Steel** (coils, plates and sections for frames and coated sheet for panels), plus polystyrene for the foam business. Materials were 67% of sales in FY26; staff 10% (Screener).",
        costEffect: "**Not protected on orders in hand, repriced quickly on new ones.** Most contracts are fixed-price, so a steel rise hits the margin directly until the order book turns over; because it books orders almost weekly, new work is priced at current steel. When steel rose 12–15% after the West Asia war began, the hit was about one point against the two feared: ‘the impact on our balance sheet was just 1%’. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (10% to 3%). **What happened:** India's hot-rolled steel price index was about flat from Q1 FY25 to Q1 FY27 (100 to 101), though it fell and then rose about 12% in between; its margin moved from 9.7% to 9.3%, peaking at 11.5% in Q2 FY26 and slipping as steel rose over the last two quarters.",
        competitors: [{ name: 'Interarch Building', note: "Larger steel-building maker with more heavy-structure capacity and blue-chip repeat clients." }, { name: 'M&B Engineering and Pennar Industries', note: "Listed rivals in steel buildings; M&B is strong in exports and roofing, Pennar also builds in the US." }, { name: 'Building contractors', note: "Compete for turnkey data-centre jobs, where EPack lost its first two bids in Q1." }],
        position: "**One of India's larger steel-building makers**, with 147,122 tonnes a year of capacity (Interarch has 245,000) and three plants being added in FY27.",
        money: "Net cash of **₹171cr** (Screener) after its October 2025 IPO at ₹204 a share, which raised ₹300cr of new money; borrowings fell from ₹216cr to ₹115cr, and management says it is ‘heading towards becoming a debt-free company’. FY27 capex is about ₹150cr, plus ₹75cr earmarked for the data-centre unit. It has given ₹212.4cr of bank guarantees and ₹140.3cr of corporate guarantees. ICRA rates it A+. Its CFO, Rahul Agarwal, left on 9 November 2026 (resignation dated 15 July); Vikram Kumar Khaitan, a chartered accountant and company secretary who was CFO of Kuantum Papers, took over on 14 November. Promoters hold **64.95%**.",
        watch: ["Margin back to 10.5% from Q2.", "Ghiloth filling up after its October start, and the Gujarat plant from April 2027.", "Orders on track for ₹2,000cr in FY27."],
        charts: constructionCharts['EPack Prefab Techno.'],
    },
    {
        company: 'Interarch Building',
        inShort: ["**A designer, maker and erector of pre-engineered steel buildings**, the factory sheds, warehouses and heavy steel frames made in its plants and bolted together on site, for Reliance, Tata, Aditya Birla and semiconductor plants.", "**Good:** guidance met, FY26 revenue up 31%, capacity up 23% to 245,000 tonnes and almost no debt. **Bad:** margins stuck between about 6% and 11%, operating cash of −₹19cr in FY26, a planned share sale of about ₹250cr and an income-tax block assessment flagged by its auditor.", "**Verdict: wait.** A reliable grower, but less than half its profit has arrived as cash: ₹173cr of operating cash against ₹427cr of profit over FY22–FY26 (41%), and −₹19cr against ₹135cr in FY26. It goes back to follow once operating cash turns positive and converts most of its profit, with the tax question settled."],
        tagline: "Noida-based maker of pre-engineered steel buildings and heavy steel structures, sold as design, fabrication and erection in one lump-sum package.",
        revenue: '₹1,898cr (FY26, standalone)',
        products: [
            { name: 'Pre-engineered buildings', text: "Steel-framed factory sheds and warehouses designed, cut and welded in its plants and erected on site, sold as ‘one building, one date, one price’. It shipped 162,000 tonnes in FY26, about 80% of installed capacity." },
            { name: 'Heavy steel structures', text: "Heavy and multi-storey steel frames for high-rises, data centres and industrial plants. A new Andhra Pradesh plant for these began commercial production on 24 September 2026, with two more phases due by December 2027." },
            { name: 'Exports', text: "About ₹40cr of export orders in a year (Africa, Canada, Myanmar), and a planned export-only joist plant with Canada's ER Steel from about July 2027, aiming at about US$20–23m of sales at a 20% margin." },
        ],
        revenueText: "FY26 revenue was **₹1,898cr, up 30.6%**. The company does not split revenue by product or customer industry. The **order book** was **₹1,864cr at 31 July**, about a year of revenue, including a ₹165cr order from an energy company in Vadodara. Q1 FY27 revenue rose 21% to ₹460cr; the first half is seasonally weaker because of site clearances and the monsoon. Guidance is **₹2,150–2,200cr for FY27** (about ₹570cr a quarter from here) and **₹2,700cr for FY28**, raised from ₹2,500cr.",
        customers: ["**Large Indian groups** that come back for fast, complex jobs: Reliance, the Tata group (including Tata Electronics in Assam) and the Aditya Birla group.", "**Warehouse and industrial-park developers** such as IndoSpace, LOGOS, Horizon and Lodha Industrial.", "**New factories** for electric vehicles, lithium batteries and semiconductors, such as Micron at Sanand, plus renewables, data centres and some airports and hospitals."],
        difficulty: { level: 'Medium', text: "Steel buildings use ordinary steel and known designs, and many firms make them. The harder part is engineering complex buildings, running several plants and erecting on time; heavy multi-storey frames and export work are newer and need fresh skills and certifications." },
        moat: "Scale and a full design-to-erection service: CRISIL calls it the second-largest integrated steel-building capacity in India, and blue-chip clients return for fast-track jobs. The weakness is pricing: rivals compete on every tonne, so margins have stayed around 8–11%.",
        salesDrivers: ["**Private factory spending**: electric-vehicle, battery, semiconductor, solar-module and warehouse projects. CRISIL names the ups and downs of its customers' spending as a risk.", "**Capacity**: from 200,000 tonnes in FY26 to 245,000 now, with the Andhra heavy-steel plant heading to 75,000–80,000 tonnes by December 2027 and a second Gujarat plant planned.", "**Speed and labour**: building in steel off-site saves ‘about 50%-60% time’ and needs fewer site workers, which favours steel over concrete (management claim).", "**Order discipline**: ‘we need to take orders we can deliver on time’, so it books only what its plants can handle.", "**Seasonality**: Q1 and Q2 are weaker, and about ₹570cr a quarter is needed from here to meet the FY27 guide."],
        inputs: "**Steel** (plates, coils and sections) is the main raw material, bought in bulk from steel mills, plus erection subcontractors. Materials were 60% of sales in FY26; site, subcontract and running costs 16%; staff 9% (Screener).",
        costEffect: "**Partly passed on, with a lag.** Orders are lump-sum, so steel bought after the bid comes out of the margin; it limits this by bulk buying and, in Q4 FY26, by paying steel mills in advance to lock supply. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (10% to 4%). **What happened:** India's hot-rolled steel price index ended Q1 FY27 about 6% below Q1 FY24 (100 to 94), after falling about 16% and then rising about 12% once the West Asia war began. Its margin was 8.5% at both ends: it moved between about 6% and 11% with the season and new-plant costs, and dipped from 10.5% in Q4 FY26 to 8.5% in Q1 as steel rose.",
        competitors: [{ name: 'EPack Prefab and M&B Engineering', note: "Listed steel-building makers also adding capacity in FY27; EPack also makes sandwich panels, M&B is strong in exports and roofing." }, { name: 'Pennar Industries', note: "Steel buildings in India and the US within a wider engineering group." }, { name: 'Unlisted steel-building makers', note: "Established rivals competing for the same factory and warehouse jobs, which keeps prices tight." }],
        position: "**The second-largest integrated steel-building capacity in India** on CRISIL's count, at 245,000 tonnes after September 2026.",
        money: "Net cash of **₹63cr** (Screener); borrowings are only ₹18cr, but cash and treasury investments are being spent on plants (about ₹230–240cr of capex since April 2024), so other income is falling. A **QIP (share sale to institutions) of about ₹250cr** is planned for the Andhra heavy-steel phases, a second Gujarat plant and the Canada export unit. FY26 operating cash was −₹19cr; management says it was ‘back to positive’ in Q1. The auditor draws attention to an August 2025 income-tax search, which became a six-year block assessment on 15 September 2026; no demand has been raised. CRISIL rates it A/Stable. Promoters hold **59.44%**.",
        watch: ["Operating cash positive in H1 FY27, as management says Q1 was.", "The income-tax block assessment closing without a large demand.", "Revenue running at about ₹570cr a quarter.", "The QIP priced without heavy dilution."],
        charts: constructionCharts['Interarch Building'],
    },
    {
        company: 'GK Energy',
        inShort: ["**A leading installer of solar water pumps for farmers**, working under the national PM-KUSUM scheme and state schemes, mainly in Maharashtra, and now adding rooftop solar and battery storage.", "**Good:** a filed margin of 16–19%, about 41% return on capital and ₹237cr of net cash after its IPO (Screener; ₹240.6cr on its own count). **Bad:** a plan to double revenue rests on a ₹541cr order book and a new scheme (PM-KUSUM 2.0) with no firm date, price per pump is falling, its margin fell from 20.4% in FY26 to 17–18.5% in Q1–Q2, Q2 FY27 revenue was flat on the year, receivables reached ₹1,012cr in September, and the order book is only ₹788cr.", "**Verdict: wait.** Cheap if the new scheme arrives; I would wait until it does."],
        tagline: "Pune-based contractor that supplies and installs solar-powered farm water pumps under government subsidy schemes, with a small rooftop-solar business and a first battery-storage project.",
        revenue: '₹1,715cr (FY26, consolidated)',
        products: [
            { name: 'Solar farm pumps', text: "Solar panels, a pump and a controller installed on a farmer's field under PM-KUSUM Component B and state schemes such as Maharashtra's Magel Tyala; more than 164,500 systems (726 MW) installed across 7,500+ villages. About 95% of Q1 FY27 revenue." },
            { name: 'Rooftop solar', text: "Home rooftop systems: about 5% of Q1 revenue and 20% of the order book. The long-term aim is 1 million homes by 2030." },
            { name: 'Battery storage', text: "A new line: a 150 MW / 300 MWh battery project for the Maharashtra power distributor (MSEDCL), won on 21 September 2026, that pays monthly for 15 years, about ₹42.8cr a year." },
            { name: 'Supply and installation network', text: "It owns no factory: pumps, panels and structures are bought from outside makers. It runs its own warehouses, 40+ vehicles and about 1,500 staff, and says it can install more than 15,000 systems a month." },
        ],
        revenueText: "Screener's consolidated FY26 revenue is **₹1,715cr**; the company's own standalone figure is ₹1,533cr, up 40%. **Pumps are about 95% of revenue** and rooftop about 5%. It installed 60,000+ systems in FY26 (against about 70,000 guided) and **24,118 in Q1 FY27**, more than double a year earlier, yet revenue rose only 71% (company figure) because price per pump is falling. The work is seasonal: Q1 is normally 15–20% of the year's volume and Q4 35–40%. The **order book** was only **₹541cr** at the Q1 call, down from ₹710cr, against a plan to double revenue to about ₹3,000cr in FY27.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company)', parts: [{ label: 'Solar pumps', share: 95 }, { label: 'Rooftop solar', share: 5 }], note: 'The order book is about 80% pumps and 20% rooftop.' },
        ],
        customers: ["**State power distributors and energy agencies** that run the subsidy schemes, above all Maharashtra's, plus Madhya Pradesh, Chhattisgarh, Haryana, Rajasthan and UP; management says Maharashtra is about 70% of India's solar-pump business.", "**Farmers**, the end users who receive the subsidised pumps; the scheme, not the farmer, picks the installer and sets the price.", "**MSEDCL** for the new battery project, and households for rooftop solar."],
        difficulty: { level: 'Low', text: "The equipment is bought in and installation is simple. What matters is empanelment with each state, a rural network able to install thousands of pumps a month, and a balance sheet that can wait for subsidy payments. CARE flags ‘intense competition’ and the tender-driven nature of the work." },
        moat: "Eighteen years of rural networks, its own warehouses and vehicles, and scale in Maharashtra, the biggest market, make it a reliable installer that states come back to. The weakness is that the scheme owns the customer: government tenders set volumes and prices, and price per pump is falling.",
        salesDrivers: ["**PM-KUSUM 2.0**: the next round of the national scheme. The chairman expects it ‘in Q3. Not before.’ The plan to double revenue depends on it and on new phases (6 and 7) of Magel Tyala.", "**State budgets and tender prices**: the five states where GK is empanelled hold about 82% of pumps sanctioned under PM-KUSUM (CARE); the price per pump is set in each tender and has been falling.", "**Seasonality**: installations bunch in the second half, with Q4 alone 35–40% of the year's volume.", "**Equipment supply**: installation capacity of 15,000+ systems a month is not the limit, but equipment shortages in late March left FY26 short of the 70,000 pumps guided.", "**New lines**: rooftop solar and the MSEDCL battery project add income that does not depend on the pump scheme."],
        inputs: "**Solar panels, pumps, controllers and steel mounting structures**, all bought from outside makers; it has no factory. Materials were 69% of sales in FY26; site, subcontract and running costs 11%; staff 2% (Screener).",
        costEffect: "**Mostly protected.** It fixes supplier prices on day one for 3–6 months of supply: ‘We are happy to have 1% less profit, but we want to [be] clear what we are going to earn.’ But the tender sets the selling price, so it cannot raise prices if costs rise later. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (18% to 11%). **What happened:** there is no single input price index for its mix of panels and pumps. Its filed margin held at 17–19% for six quarters and slipped to 16% in Q1 FY27 as price per pump fell; that, not input costs, is what is moving the margin.",
        competitors: [{ name: 'Shakti Pumps', note: "A pump maker that also installs solar pumps under PM-KUSUM; unlike GK, it makes its own pumps and motors." }, { name: 'Oswal Pumps and other empanelled installers', note: "Compete in the same state tenders, where price decides most awards." }],
        position: "**One of the leading PM-KUSUM Component B installers** (CARE), with more than 164,500 systems installed and its strongest position in Maharashtra, the largest market.",
        money: "Net cash of **₹237cr** (Screener); the company gives ₹240.6cr for FY26 after its September 2025 IPO at ₹153 a share, which raised ₹400cr of new money (promoters also sold ₹64.26cr). Q1 interest halved to ₹5cr as IPO money replaced bank loans. The weak spot is working capital: debtor days were 140 in FY26 because state schemes pay slowly. Spending on the battery project has not been disclosed. CARE rates it BBB+/Stable. Promoters hold **79.2%**.",
        watch: ["A formal PM-KUSUM 2.0 launch (expected in Q3, management said on the Q2 call) and new Magel Tyala phases.", "Receivables falling from ₹1,012cr (September) as H2 collections arrive.", "The order book rebuilding above ₹1,000cr (₹788cr at Q2).", "Margin staying above CARE's 12% trigger."],
        charts: constructionCharts['GK Energy'],
    },
    {
        company: 'Pennar Industries',
        inShort: ["**A Hyderabad-based engineered-steel group** with 14 plants: steel buildings in India and the US, precision tubes, boilers, hydraulics, car-body parts and a shrinking steel and rail business.", "**Good:** record steel-building order books in India (₹1,008cr) and the US (over US$100m) and the best five-year cash record in the group. **Bad:** it missed its FY26 profit-margin target, reworded the next one, borrowed 43% more and does not yet give segment profits.", "**Verdict: wait.** I want segment figures that prove the better mix is lifting profit, and a target met."],
        tagline: "Diversified engineered-steel company: steel buildings in India and the US, precision tubes, boilers, hydraulics and car-body parts, plus a legacy steel and rail business.",
        revenue: '₹3,620cr (FY26, consolidated)',
        products: [
            { name: 'Steel buildings, India and US', text: "‘Custom design building solutions’: pre-engineered buildings in India and, through its US arm Ascent, steel buildings and structures from three plants in Tennessee and Alabama. ₹507cr of Q1 FY27 segment revenue." },
            { name: 'Tubes, steel and rail products', text: "Precision tubes, plus steel and railway products; the steel and rail lines are about ₹1,300cr of annual revenue that is being run down with no new capital." },
            { name: 'Boilers and hydraulics', text: "Process-heating boilers (order book ₹150.75cr) and hydraulic cylinders (about ₹30cr of orders), whose US sales are on ‘wait-and-watch’ because of tariffs." },
            { name: 'Car-body parts and engineering services', text: "Pressed body parts for car makers, with a new Hyundai plant expected to double that unit's revenue, plus engineering design services." },
            { name: 'Solar-module venture', text: "About 45% of a 2 GW solar-module venture with Zetwerk; it is not consolidated, and its figures are not disclosed." },
        ],
        revenueText: "FY26 revenue was **₹3,620cr, up 12%**. In Q1 FY27 revenue rose only 2.9% to ₹870cr: **steel buildings (India and US) grew to ₹507cr from ₹411cr**, while diversified engineering fell to ₹385cr from ₹450cr as steel, hydraulics and exited lines shrank. The company does not yet give segment profits; it has promised them by next quarter. Order books are at records: steel buildings India ₹1,008cr (from ₹810cr in May), US over US$100m (from US$63m), boilers ₹150.75cr.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company)', parts: [{ label: 'Steel buildings (India and US)', share: 57 }, { label: 'Diversified engineering', share: 43 }], note: 'Segment figures total ₹892cr, against reported revenue of ₹870cr.' },
        ],
        customers: ["**Factory and warehouse owners in India**, who share their designs with it, so ‘the likelihood of switching to some other supplier is less’ (CARE).", "**US building owners and contractors**, served from its three US plants as manufacturing moves back to the US.", "**Car makers** such as Hyundai for body parts, plus process industries for boilers and industrial buyers for tubes."],
        difficulty: { level: 'Medium', text: "Each unit is a mid-tech engineering business. Custom-designed buildings, boilers and car-body parts need design work and customer approvals that keep clients, but the steel and rail products are commodities with little to protect them." },
        moat: "Custom engineering relationships and a US steel-building platform with robotic welding, which cut the welding crew on one product from 20–30 people to two. The weakness: it passed on the 2026 steel rise more slowly than peers, and its legacy steel business has little pricing power.",
        salesDrivers: ["**Steel buildings in India and the US**: record order books, helped by factories returning to the US.", "**The legacy run-down**: about ₹1,300cr a year of steel and rail revenue is shrinking, which hides growth elsewhere; management expects ‘double-digit’ group growth from Q2.", "**Car-body parts**: the Hyundai plant, being commissioned in August 2026, should double that unit's revenue.", "**US tariffs**: hydraulics exports are on hold, and the US staff build-up raised US employee costs 37% in Q1.", "**The Zetwerk solar venture**: management puts the 2 GW plant's revenue potential at about ₹4,000cr, but it sits outside Pennar's reported revenue."],
        inputs: "**Steel** in many forms: coil, plates and sections for buildings, strip for tubes and sheet for car-body parts. Materials were 58% of sales in FY26; site, subcontract and running costs 13%; staff 11% (Screener).",
        costEffect: "**Passed on, with a lag of a month or two.** Price-escalation clauses on building contracts caught up after ‘a month or 2’, but management admits peers passed on the 2026 steel rise faster, and the building unit lost more than two points of margin in Q1. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (10% to 4%). **What happened:** India's hot-rolled steel price index ended Q1 FY27 about 6% below Q1 FY24 (100 to 94), while its filed margin rose from 8.3% to 10.7%, helped by the shift to steel buildings and the US; group gross margin still rose to 43.85% in Q1 even as steel climbed.",
        competitors: [{ name: 'Interarch, EPack and M&B', note: "Focused steel-building makers in India, which passed on the 2026 steel rise faster, by Pennar's own account." }, { name: 'US steel-building makers', note: "Compete with its Ascent unit for US factory and warehouse work." }],
        position: "**One of the few Indian steel-building makers with its own US plants**, with 14 plants in all; its steel-building order books in India and the US are at records.",
        money: "Net debt of **₹892cr** (Screener); borrowings rose 43% to ₹1,162cr in FY26 for the Alabama acquisition (about US$14m), new lines and working capital, and cash was about ₹206cr (company). Finance costs are about 4% of revenue, and management says debt will stay at or below 0.7 times equity. CARE rates it A/Stable; the 93-day cash cycle sits just inside its 95-day trigger. Promoters hold **39.67%** and are adding ₹50.4cr through warrants (₹20cr received so far).",
        watch: ["Segment profit figures, promised for Q2.", "Revenue growth back to double digits.", "Debt to equity staying at or below 0.7."],
        charts: constructionCharts['Pennar Industries'],
    },
    {
        company: 'Sterling and Wilson',
        inShort: ["**A solar and battery-storage plant builder** that designs, buys the equipment for and builds large solar parks for power companies in India and abroad, and then maintains them; Reliance New Energy owns 32.49%.", "**Good:** an order book of ₹12,481cr (September 2026), about 15% of India's utility-scale solar built in FY26 (its own estimate) and a fast-growing maintenance business. **Bad:** a ₹296cr loss in FY26 after a ₹611cr arbitration charge its former owners do not cover, a Negative rating outlook, 27.6% of promoter shares pledged, H1 FY27 revenue down 11% and growth guidance cut twice.", "**Verdict: pass.** A thin-margin contractor on a fragile balance sheet, where one bad ruling on old claims can wipe out a year's profit."],
        tagline: "Utility-scale solar, hybrid and battery-storage contractor (EPC) and plant maintainer, with 27.3 GWp built or being built across 20 countries.",
        revenue: '₹7,548cr (FY26, consolidated)',
        products: [
            { name: 'Solar and battery EPC in India', text: "Designs, buys the equipment for and builds large ground-mounted and floating solar parks, hybrid plants and standalone battery storage for Indian developers and state-owned power companies; about 10.5 GW is under construction. About 70% of FY26 orders were turnkey, with modules in its scope." },
            { name: 'International EPC', text: "Projects abroad, such as the 1 GW solar and 600 MWh battery West Minya project in Egypt (about US$560m, shared 50:50 with Hassan Allam) and a 616 MWp job in South Africa. International work earned a 13.2% gross margin in FY26, against 10.5% overall." },
            { name: 'Operations and maintenance', text: "Runs 18.3 GWp of its own and others' plants on 2–3-year contracts at a 20–25% gross margin, up from 8.7 GWp a year earlier. Revenue of ₹268cr in FY26 is guided to ₹400–450cr in FY27." },
            { name: 'Balance-of-system work', text: "About a third of orders: building everything around modules the client buys itself, which means less revenue per megawatt but no module price risk." },
        ],
        revenueText: "FY26 revenue was **₹7,548cr, up 20%**: **domestic EPC ₹5,836cr**, international EPC ₹1,444cr and maintenance about ₹268cr. It built about 4.5 GW (AC) in FY26. The **order book** (signed work not yet done) is a record **about ₹13,000cr**, about 1.7 years of revenue, but about ₹9,000cr of it sits in six projects that had not started by July. Q1 FY27 revenue fell 10% to ₹1,590cr, and management now guides FY27 growth of 10–15% (was about 15%), excluding any Reliance order.",
        mixes: [
            { caption: 'Revenue by business, FY26 (company)', parts: [{ label: 'Domestic EPC', share: 77 }, { label: 'International EPC', share: 19 }, { label: 'Maintenance', share: 4 }] },
        ],
        customers: ["**Indian state-owned power companies**: NTPC Green, SJVN and GIPCL, and Coal India, where it is lowest bidder on a 1.2 GW order still awaiting award.", "**Private developers and groups**: Adani Green (under a five-year framework), JSW, Aditya Birla, Serentica, Sembcorp, Brookfield and Engie.", "**Reliance**, its largest shareholder, has promised orders since early 2026; they would be related-party deals on terms not yet disclosed."],
        difficulty: { level: 'Medium', text: "Building a solar park is repeatable engineering. The hard parts are the balance sheet to give **bank guarantees** (a bank's promise to pay the client if the builder fails), buying modules at the right moment and finishing on schedule. New entrants, including road builders, are bidding aggressively." },
        moat: "Scale and a long record win it repeat orders and a 25–28% hit rate on bids, and maintenance contracts add a stickier stream. The weakness is margin: modules pass through at close to cost, so it keeps only 8–10% gross, and management concedes that ‘some of the new entrants have gone aggressive’.",
        salesDrivers: ["**Solar and battery tenders in India**: management expects ₹45,000–50,000cr of industry orders in H2 FY27 (about 25 GW of solar and 35 GWh of storage), but only about ₹6,400cr was finalised in Q1 against more than ₹20,000cr expected.", "**Project start dates**: six turnkey projects worth about ₹9,000cr had not begun by July, so H2 revenue must run at about ₹2,600–3,000cr a quarter against ₹1,590cr in Q1. ‘We have no option’, the CEO said.", "**The Reliance order**: first expected by March 2026, now tied to ‘their rollout schedule’ for Reliance's Kutch hub; it is not in guidance.", "**Maintenance growth**: plants under maintenance more than doubled in a year to 18.3 GWp, a steadier, higher-margin stream.", "**Metal and module prices**: volatile copper, aluminium and module prices forced it to defer supplies in Q4 FY26 and made developers hold back orders for two quarters."],
        inputs: "**Solar modules, inverters, trackers, cables, steel structures and battery systems**, plus subcontracted civil and electrical work. Screener does not show materials separately: all project costs, **91% of sales in FY26**, sit under site, subcontract and running costs; staff were 2%. Battery cells are imported, and on its current battery job the client supplies the batteries.",
        costEffect: "**Mostly passed on, but the margin is thin.** It fixes prices with its suppliers back-to-back when it bids (the Coal India domestic-module price is locked), and on balance-of-system jobs the client buys the modules. **Rule of thumb:** with project costs at 91% of sales, a 10% rise in them not passed on would cut the margin by about 9 points (4% to a loss), which is why it cannot afford to carry price risk. **What happened:** there is no single input price index for this business. Its filed quarterly margin swung between −7% and 7.5% over 13 quarters, driven by losses on old overseas projects, legacy claims and forex rather than module prices; the ₹611cr arbitration charge in FY26 mattered far more than any input cost.",
        competitors: [{ name: 'L&T and Tata Power Renewable Energy', note: "Large Indian contractors with strong balance sheets, bidding for the biggest utility solar and storage jobs." }, { name: 'Road builders entering solar (H.G. Infra, Ceigall, Dilip Buildcon, GR Infraprojects)', note: "Filling their order books with solar and battery work; part of the aggressive new competition." }, { name: 'Solarworld and smaller contractors', note: "Compete for state-owned power company tenders with lower overheads." }],
        position: "**About 15% of India's utility-scale solar built in FY26** (4.5 GW of 28.3 GW, its own estimate from government data), which makes it one of the largest solar contractors in the country; management also claims a market share above 25% on a basis it did not define.",
        money: "Net debt of **₹657cr** (Screener, March); borrowings were ₹1,191cr. By September 2026 gross borrowings were down to ₹920cr and net debt was ₹601cr (company), while receivable days rose to 176 from 138 in March. Infomerics rates it BBB+ with a Negative outlook, calls liquidity ‘stretched’ and puts adjusted gearing at 2.87 times net worth against a downgrade trigger of 3; ₹615cr of term loans fall due in FY27. Capex is negligible. The former owners (the Shapoorji Pallonji group and the Daruvala family) cover net legacy claims above ₹300cr, and about ₹156cr is now expected back in FY27 after a settlement with the Chile customer (Q2 call). Promoters hold **45.73%**, down from 67.56% in September 2023 after a share sale to institutions, and 27.6% of promoter shares are pledged (Screener).",
        watch: ["H2 FY27 revenue as eight delayed projects start (Q2 was ₹1,527cr; guidance now 'up to 10%' growth for the year).", "The Reliance order and its terms.", "No further legacy charges, and about ₹156cr of indemnity cash arriving in FY27."],
        charts: constructionCharts['Sterling and Wilson'],
    },
    {
        company: 'Solarworld Energy So',
        inShort: ["**A contractor that builds solar and battery-storage plants for state-owned power companies**, which has used its IPO money to add a solar-module line, a battery-pack line and a junction-box venture.", "**Good:** a ₹2,727.5cr order book, ₹317cr of net cash and a CRISIL A- rating. **Bad:** it missed its first-year promises, Q1 revenue fell to ₹168cr from ₹592cr in Q4, operating cash was −₹50cr in FY26, and its board wants to move IPO money into a 50:50 cell venture with another company.", "**Verdict: pass.** A rough first year as a listed company, and a change of plan for the money shareholders put in."],
        tagline: "Delhi-area solar and battery-storage contractor for state-owned power companies, now adding module, battery-pack and cell manufacturing.",
        revenue: '₹1,376cr (FY26, consolidated)',
        products: [
            { name: 'Solar EPC', text: "Designs and builds utility-scale ground-mounted solar plants, mostly paid for and owned by the state-owned client; 47 projects completed (264 MW AC) and 13 under way (1,405 MW AC), plus some maintenance." },
            { name: 'Battery-storage EPC', text: "582 MW / 1,184 MWh of battery projects under way. Management wants batteries to be 60% of revenue in time." },
            { name: 'Modules, battery packs and junction boxes', text: "A 1.552 GW module line at Roorkee (approved for government projects only in December 2025), a 3.4 GWh battery-pack line ready to start and a 5 GW junction-box joint venture now producing. None is yet a meaningful profit source." },
            { name: 'Solar cells (planned)', text: "A 1.2 GW cell plant at Pandhurana was an IPO object; the board now wants to put the money instead into a 50:50 joint venture with Rays Power Infra for a 2.4 GW plant at Mohasa (MP), subject to a shareholder vote." },
        ],
        revenueText: "FY26 revenue was **₹1,376cr, up from ₹545cr**, against about ₹1,500cr promised after the IPO. Revenue is very lumpy: ₹68cr in Q1 FY26, ₹578cr and ₹592cr in Q3 and Q4, then **₹168cr in Q1 FY27**. The company does not split revenue by business. The **order book** was **₹2,727.5cr** at June, about two years of revenue: solar ₹1,588.6cr and batteries ₹1,138.9cr. On the Q4 call management hoped to execute 70–75% of it in FY27, about ₹1,900–2,000cr; it held no Q1 call and gave no update.",
        mixes: [
            { caption: 'Order book by type, June 2026 (company)', parts: [{ label: 'Solar EPC and maintenance', share: 58 }, { label: 'Battery storage', share: 42 }] },
        ],
        customers: ["**State-owned power companies**: NTPC Renewable Energy, SJVN Green, NTPC, Rajasthan's RRVUNL and Gujarat's GUVNL make up almost all of the order book, with one private ‘leading renewable energy company’.", "**SJVN** is also in dispute with it over two suspended Gujarat projects; a dispute board awarded about ₹40cr against ₹219.3cr claimed.", "An independent director is a former chief executive of NTPC's renewable arms, which helps it understand these clients."],
        difficulty: { level: 'Medium', text: "Solar plants are built from bought-in parts, and state tenders go mostly to the lowest qualified bidder; qualifying needs a record of finished projects and bank guarantees. Making modules and battery packs is harder, and those plants are new and not yet profitable." },
        moat: "Repeat work from state-owned power companies and a claimed EPC-only profit margin of about 10.5%, ‘amongst the best in the industry’. The weakness: almost every client is a government company that picks contractors by tender, and the move into manufacturing has not yet earned money.",
        salesDrivers: ["**Start dates on government projects**: revenue follows when land and approvals let work begin, which is why quarters swing between ₹68cr and ₹592cr.", "**Battery-storage tenders**: the fastest-growing part of the book, with 1,184 MWh under way.", "**Made-in-India rules**: government projects must use Indian modules, which its Roorkee line can now supply for its own projects.", "**The SJVN dispute**: two projects (100 MW and 260 MW) in Kutch were suspended over land problems; it carries ₹51.5cr as receivable and treats it as fully recoverable.", "**Execution of the book**: 70–75% of ₹2,727.5cr in FY27 would mean far bigger quarters than Q1's ₹168cr."],
        inputs: "**Solar modules, inverters, cables, steel structures and imported battery cells**, plus subcontracted site work. Materials were 79% of sales in FY26; site, subcontract and running costs 8%; staff 2% (Screener).",
        costEffect: "**Partly passed on.** Contract prices are fixed at the tender, so a rise in module, cell or battery prices between bid and purchase comes out of its margin; making its own modules is meant to reduce that. Raw-material prices rose sharply after the West Asia war began and hit Q4 FY26 and Q1 FY27 margins. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (11% to 3%). **What happened:** there is no single input price index for its mix of modules and batteries. Its filed margin fell from 12.6% in Q1 FY26 to 6.6% in Q1 FY27, partly on dearer materials and partly because a small quarter's revenue does not cover overheads.",
        competitors: [{ name: 'Sterling and Wilson', note: "The largest listed solar contractor, bidding for the same state-owned and battery tenders at far larger scale." }, { name: 'Road builders entering solar (H.G. Infra, Ceigall, Dilip Buildcon, GR Infraprojects)', note: "Bidding for government solar and battery jobs to fill their order books." }],
        position: "**A mid-sized solar contractor for state-owned clients**, with 1,405 MW (AC) of solar and 1,184 MWh of batteries under construction, small next to Sterling and Wilson; it claims to be among the top three solar contractors by profitability.",
        money: "Net cash of **₹317cr** (Screener) after a September 2025 IPO at ₹351 a share that raised ₹521.7cr net (including a pre-IPO round); even so, borrowings rose from ₹115cr to ₹255cr in FY26 and operating cash was −₹50cr. It spent about ₹750cr over FY25–FY26 on the module line, battery line and junction-box venture. CRISIL rates it A-/Stable; net worth is ₹844.8cr. Promoters hold **65.77%**.",
        watch: ["The result of the 30 September 2026 AGM vote on moving IPO money into the cell venture (due within two working days).", "Q2 revenue above ₹400cr.", "Operating cash turning positive in H1 FY27."],
        charts: constructionCharts['Solarworld Energy So'],
    },
    {
        "company": "Pace Digitek",
        "segment": "Solar, battery-storage and farm-pump contractors",
        "inShort": [
            "**Builds telecom and battery-storage projects in India**: towers and fibre networks for BSNL, and grid batteries (BESS) that it assembles in its own Bengaluru plant, some of which it also owns and rents to state utilities.",
            "**Good:** a ₹13,427cr executable order book after a ₹2,691cr battery-storage order from NTPC Green in November 2026, about four years of revenue, a fast-growing battery business and a low price of about 11 times earnings. **Bad:** over five years it reported ₹1,405cr of operating profit but operating cash was −₹791cr; two customers were 58% of FY26 revenue; about ₹900cr of revenue so far came from a battery project it owns itself, booked upfront though paid over 12 years; and a firm linked to directors' relatives does its project work.",
            "**Verdict: avoid.** The low price reflects profit that has not turned into cash, revenue booked on its own project, and heavy dependence on two state customers."
        ],
        "tagline": "A Bengaluru telecom-infrastructure contractor, founded by Venugopalrao Maddisetty, that has pivoted to battery-storage manufacturing and projects; listed in October 2025.",
        "revenue": "₹2,641cr (FY26, consolidated)",
        "products": [
            {
                "name": "Telecom and ICT projects",
                "text": "Built about 9,550 towers for BSNL's 4G saturation project (₹7,568cr including six years of upkeep), plus BharatNet fibre networks, railway Kavach and power systems for telecom sites. ₹1,440cr of FY26 revenue; telecom earns the better margin."
            },
            {
                "name": "Battery storage (BESS) EPC",
                "text": "Designs, supplies and builds grid batteries for NLC, DVC, NTPC and SECI, and solar plants for MAHAGENCO and Bondada, at a 12–15% margin by its own account. Containers are worth ₹4–4.5cr each; it delivered 90 in Q1 and plans 210 in Q2."
            },
            {
                "name": "Battery projects it owns (BOO)",
                "text": "Builds, owns and runs storage for MSEDCL (Maharashtra), KPTCL, KREDL and SECI on 12–25-year contracts, about ₹4,074cr of the order book. Under 'dealer-lessor' accounting the MSEDCL sites are booked as a sale when commissioned (about ₹900cr so far), while the utility pays rent over 12 years."
            },
            {
                "name": "Manufacturing",
                "text": "Subsidiary Lineage Power makes power systems, lithium battery packs and BESS containers: 5 GWh a year now, 10 GWh planned by December 2026, plus its own container fabrication. Cells are bought from China."
            }
        ],
        "revenueText": "**Telecom was 55% of FY26 revenue (₹1,440cr) and energy 45% (₹1,195cr)**, but energy was 79.5% in Q1 FY27 as the BSNL tower project winds down. **Two customers were ₹1,526cr, or 58%, of FY26 revenue**; in FY25 one customer, BSNL, was ₹2,063cr, or 85%. Revenue is bunched into March: Q4 FY26 was ₹1,097cr of the year's ₹2,641cr. The order book was **₹10,803cr** in June 2026 (energy ₹8,453cr, telecom ₹2,350cr) and an executable **₹13,427cr** after NTPC Green awarded it a ₹2,691cr (including GST), 600 MW / 1,800 MWh battery-storage build with 15 years of upkeep at Khavda on 16 Nov 2026, its largest battery order; FY27 inflows so far total ₹5,129cr. In Q1 FY27 consolidated revenue rose 51% to ₹555cr, but standalone revenue fell 22%; the growth came from sales to its own project subsidiaries and outside battery customers.",
        "mixes": [
            {
                "caption": "Revenue by segment, FY26 (annual report)",
                "parts": [
                    {
                        "label": "Telecom",
                        "share": 55
                    },
                    {
                        "label": "Energy",
                        "share": 45
                    }
                ]
            },
            {
                "caption": "Revenue by segment, Q1 FY27 (results)",
                "parts": [
                    {
                        "label": "Energy",
                        "share": 80
                    },
                    {
                        "label": "Telecom",
                        "share": 20
                    }
                ]
            }
        ],
        "customers": [
            "**BSNL**: the 4G saturation tower project and BharatNet fibre networks (a ₹265cr Sikkim order in Q1); 85% of FY25 revenue.",
            "**State utilities and power companies**: MSEDCL (its own battery project), KPTCL, KREDL, SECI, NLC, DVC, NTPC and MAHAGENCO.",
            "**Private buyers**: Bondada Engineering (solar), Reliance and Tata Teleservices (power systems and upkeep), and first small orders for commercial batteries and from Saudi Arabia."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Assembling battery containers from imported Chinese cells and building tower and fibre networks are learnable skills; dozens of firms bid for battery tenders (51 in one Rajasthan tender). Executing at scale for government buyers and financing projects it owns are the harder parts."
        },
        "moat": "Early scale in battery assembly and a long record with BSNL help it win tenders, but the work is won by bidding against many rivals, it depends on Chinese cells, and its customers are a handful of government bodies.",
        "salesDrivers": [
            "**State battery-storage tenders**, backed by central viability-gap funding: it is bidding for about 27 GWh, and management says bidding has become less aggressive since a 4 GWh Maharashtra award was cancelled.",
            "**Order execution**: FY27 revenue guided at ₹3,200–3,400cr and FY28 at ₹4,000–4,200cr, mostly from the existing order book.",
            "**Own projects**: four BOO projects should add about ₹750cr of yearly rent once all are commissioned, but tie up large amounts of capital; it is seeking outside investors.",
            "**Telecom work**: BharatNet, railway Kavach (about 30% done) and new fibre orders as the BSNL 4G project ends.",
            "**New lines**: commercial batteries (4–5 points better margin, management says), AI data-centre power with Megmeet, African sales with NEC XON, and a cell-making plan under the government incentive scheme."
        ],
        "inputs": "**Lithium-ion battery cells bought from China**, about 60% of the cost of a battery system, plus power converters, steel containers (now made in-house), telecom towers, fibre cable and solar panels. Materials were about 74% of FY26 sales.",
        "costEffect": "**Partly protected.** Newer battery tenders carry price-variation clauses; older ones do not, and it relies on a contingency built into bids and on stock bought in March for Q1. Management says its FY27 profit-margin guidance already allows for higher cell prices. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (17% to 10%). **What happened:** the operating margin fell from 20% in FY25 to 17% in FY26 and 15.5% in Q1 FY27 as low-margin battery work replaced telecom.",
        "competitors": [
            {
                "name": "Other battery-storage contractors and integrators",
                "note": "Dozens of bidders in state tenders, including large solar and power groups adding storage; several who bid low have walked away from awards."
            },
            {
                "name": "HFCL, Sterlite Technologies",
                "note": "Rivals in BharatNet and government fibre-network contracts."
            },
            {
                "name": "Chinese battery makers",
                "note": "Its own cell suppliers, and the source of most integrated storage systems in India."
            }
        ],
        "position": "**Claims to be India's largest operating battery-storage assembly plant** (5 GWh, going to 10 GWh by December 2026) and has built about 8,000 greenfield telecom towers; its own figures are not independently verified.",
        "money": "Borrowings were **₹981cr at March 2026** (₹96cr a year earlier), mostly an IREDA loan of ₹606cr for its own MSEDCL battery project, against ₹270cr of cash and ₹499cr of other bank deposits, so **net debt was about ₹212cr**. **Customers owed ₹2,443cr** (₹2,067cr due within a year), stock was ₹540cr and finance-lease receivables from its own battery project ₹728cr, against FY26 revenue of ₹2,641cr. **Over FY22–FY26 it reported ₹1,405cr of operating profit but operating cash of −₹791cr**, including −₹842cr in FY26; free cash was −₹932cr in FY26. The October 2025 IPO raised ₹819cr at ₹219 (₹630cr for the MSEDCL battery project); ₹216cr was still unspent in March. The share trades about 30% below the IPO price. CRISIL rates it A-/Stable. No dividend. Promoters hold **69.52%**, unchanged since listing.",
        "watch": [
            "Operating cash turning positive by March 2027, as the CFO expects, and receivables falling.",
            "How much revenue keeps coming from projects it owns itself rather than from outside customers.",
            "Battery tender wins with price-variation clauses, and the 10 GWh plant on time."
        ],
        charts: constructionCharts["Pace Digitek"],
    },
];

export const constructionEnergyBusinesses = { intro, profiles };
