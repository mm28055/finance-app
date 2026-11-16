import { BusinessProfile, OverviewSection } from './types';
import { constructionPowerCharts } from './card-data/construction-power';

// Tab 2 of the Construction - Power note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; order books and splits are from each company's latest presentation or call. The cost chart uses India's hot-rolled steel price index (copper for Techno Electric) as a guide to the main materials.",
        ],
    },
    {
        heading: 'The work, in plain words',
        body: [
            "These companies build the physical grid and, in two cases, much else besides.",
        ],
        points: [
            {
                label: 'Transmission lines',
                text: "Steel towers carrying high-voltage wires across the country, from power plants and solar parks to cities (all five).",
            },
            {
                label: 'Substations',
                text: "Switching yards that step voltage up or down and connect lines to the grid; the hardest and best-paid part of the work (Techno Electric, Kalpataru, KEC, Transrail).",
            },
            {
                label: 'Towers, poles and conductors',
                text: "The steel structures and aluminium wires themselves, made in their own plants (Skipper, Transrail, KEC, Kalpataru).",
            },
            {
                label: 'Other infrastructure',
                text: "Buildings, factories, water schemes, metros, railways, oil and gas pipelines, cables, smart meters and data centres (Kalpataru, KEC, Techno Electric).",
            },
        ],
    },
    {
        heading: 'Three ways of selling',
        body: [
            "Who the customer is decides how the price is set and how fast the cash comes in.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Contracts from utilities and developers**', 'All five', 'Won by bidding; price-variation clauses on part of the book', 'Milestones, with money held back until the job is proven'],
                    ['**Supply of towers and poles**', 'Skipper, Transrail', 'Per tonne, often linked to steel and zinc prices', 'Normal credit terms'],
                    ['**Assets it owns**', 'Techno Electric (data centres, smart meters)', 'Leases and long service contracts', 'Monthly, once running'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Kalpataru Proj.',
        inShort: ["**One of India's biggest EPC contractors** (EPC means engineering, procurement and construction: it designs a project, buys the materials and builds it for the client). Power transmission is the core, alongside buildings, oil and gas pipelines, water, metros and railways, with live projects in over 30 countries.", "**Good:** a record ₹66,607cr order book, a ₹4,000cr-plus UAE gas pipeline won in September, net debt cut to ₹917cr on its own count, and margins held near 9% despite labour shortages and Middle East disruption. **Watch:** about ₹1,500cr is still owed for water work already done, railways and metros earn thin margins, and promoters have pledged 24.55% of their shares.", "**Verdict: follow.** A strong business that is getting better; I want to see the margin move off its four-year 9% level and the water money come in first."],
        tagline: "Global EPC contractor for power transmission, buildings and factories, oil and gas pipelines, water and urban transport, with its own tower-making plants.",
        revenue: '₹27,143cr (FY26, consolidated)',
        products: [
            { name: 'Power transmission and distribution', text: "Transmission lines (the tall steel towers and wires that carry high-voltage power across the country) and substations (the yards where voltage is stepped up or down and lines are switched), including HVDC (long-distance direct-current) links and compact gas-insulated substations. Works in India, Latin America, the Middle East and, through its Swedish arm Linjemontage, the Nordics." },
            { name: 'Buildings and factories', text: "Design-and-build of high-rise homes, offices, data centres, airports and industrial plants for large developers and public-sector companies. Order book over ₹19,600cr; margins usually 10–12%." },
            { name: 'Oil and gas', text: "Cross-country pipelines, pumping stations and onshore plants, mainly in the Middle East, where it has delivered one of the large Saudi Aramco pipeline projects. In September 2026 it won a UAE gas pipeline worth over ₹4,000cr, roughly doubling this business's order book, and it is bidding for more jobs of $100–500m each across the Gulf." },
            { name: 'Water', text: "Village and town water-supply schemes for state governments under the Jal Jeevan Mission (Q1 FY27 revenue ₹626cr), plus a first ₹344cr water-treatment order in the Middle East." },
            { name: 'Metros and railways', text: "Underground and elevated metro work with six tunnel-boring machines, all in use (the Kanpur tunnels are nearly done), and railway lines. Margins here are only high single digits, and it bids selectively for new railway work." },
        ],
        revenueText: "In Q1 FY27 consolidated revenue was **₹6,408cr**, up 4% (9% excluding road assets and the Brazilian arm it has exited). By business (Q1 FY27 presentation): **transmission ₹2,924cr** (+10%), buildings and factories ₹1,588cr (+15%), oil and gas ₹693cr (+18%), water ₹626cr (−7%), urban infrastructure ₹295cr and railways ₹195cr (−23%). The **order book** (signed work not yet done) was a record **₹66,607cr** at June 2026, about **2.4 years of revenue**. **Order inflow** so far in FY27 was over **₹19,000cr** by 13 October (over ₹17,000cr by 28 September, then ₹2,225cr of transmission and distribution orders, including ₹194cr at its Swedish subsidiary), and at 24 September it was the lowest bidder (L1, so likely to be awarded) on over ₹12,000cr more. Management targets ₹30,000cr of new orders and at least 15% revenue growth in FY27.",
        mixes: [
            { caption: 'Order book by business, June 2026 (Q1 FY27 presentation)', parts: [{ label: 'Transmission and distribution', share: 44 }, { label: 'Buildings and factories', share: 29 }, { label: 'Water', share: 11 }, { label: 'Oil and gas', share: 6 }, { label: 'Urban infrastructure', share: 6 }, { label: 'Railways', share: 4 }], note: 'By region: India 61%, Africa 11%, Americas 10%, Middle East 10%, Europe 6%.' },
        ],
        customers: ["**Power utilities**: Power Grid (PGCIL), state transmission companies and private grid developers in India, and utilities in Chile, Guyana, the Middle East and the Nordics.", "**Large property developers, public-sector companies and industrial firms** for buildings, factories, data centres and airports, and **Gulf energy companies** for pipelines.", "**State water boards** and **metro rail corporations**, which pay more slowly than the rest."],
        difficulty: { level: 'High', text: "Large transmission, HVDC and pipeline jobs need a long record, a strong balance sheet and big bank guarantees just to qualify, plus the engineers to run hundreds of sites at once. Building and civil work is easier to enter and more crowded." },
        moat: "Scale, a record of over 250 projects worldwide and its own tower plants let it bid for large, complex jobs that few Indian rivals can take on. The weakness: most work is still won in open tenders on price, and government clients can pay late, as water shows.",
        salesDrivers: ["**Grid spending in India**: management expects ₹1 lakh crore or more of transmission tenders a year for at least five years, including one or two HVDC lines a year, to carry renewable power to cities.", "**Overseas grids and pipelines**: Latin America (it has exited Brazil), Europe through Linjemontage and the Middle East, where it won its first large oil and gas order in September and is bidding for more; some awards are being delayed by the regional conflict.", "**Private and public-sector building**: data centres, airports, factories (tenders from NMDC and NALCO) and high-rise housing for big developers.", "**Getting paid on water**: it will not bid for new Indian water jobs until dues are cleared; about ₹650cr has been collected so far this year and ₹1,500cr of billed and unbilled work (work done but not yet invoiced or paid) is still outstanding.", "**Capacity**: about ₹800cr of capex this year on equipment, overseas set-up and a new rolling mill at Raipur to make some of its own steel sections."],
        inputs: "**Steel** angles and plates for towers are the main material, with **zinc** for galvanising (rust-proofing), **aluminium conductor** and cables for lines, plus cement, pipes and diesel for sites. Much of the site work is done by subcontracted crews. Materials were 34% of sales in FY26, and subcontracting and other project costs another 41%.",
        costEffect: "**Partly passed on.** Roughly half the order book carries price-variation clauses (the contract price moves with an agreed steel or metal index); the rest is fixed-price, where some base metals are hedged and each project carries a contingency that management says absorbs steel swings of 5–10%. Diesel and local aggregates are not covered. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3 points (9% to 6%). **What happened:** India's hot-rolled steel index eased from 100 in Q1 FY24 to 94 in Q1 FY27, and the margin was flat at 9.0% to 8.8%. The swings in between came from the mix of work (transmission, buildings and oil and gas earn close to double digits; water, railways and metros high single digits) and site problems such as labour shortages, not steel.",
        competitors: [{ name: 'KEC International', note: 'Closest peer in transmission EPC, also in civil works and railways; its margins are lower at present.' }, { name: 'Larsen & Toubro, Tata Projects', note: 'Larger rivals for the biggest HVDC, building, data-centre and Middle East jobs.' }, { name: 'Transrail Lighting, Techno Electric', note: 'Smaller Indian rivals in transmission lines and substations.' }, { name: 'Chinese contractors', note: 'Price hard in Africa, which is why Kalpataru now ranks Africa last of its four overseas markets.' }],
        position: "**Among India's largest power-transmission EPC companies**, with a fast-growing building business and an established pipeline business in the Middle East.",
        money: "Screener puts net debt at **₹1,701cr**; the company's own figure was ₹917cr consolidated (₹752cr standalone) at June 2026, about 0.1 times equity, and India Ratings raised its rating to AA+ in July. Net working capital fell to 80 days consolidated (94 days standalone), and it aims to stay under 100 days. It plans about ₹800cr of capex this year; net debt stayed flat in Q1 despite over ₹250cr spent. Its Swedish arm Linjemontage (LMG) listed on Nasdaq Stockholm on 25 September at SEK 46 a share; Kalpataru sold about 30%, receiving about SEK 711.5m (roughly ₹700cr), and keeps 65.9%, so LMG stays a subsidiary. Promoters hold **33.6%**, down from 41.1% in September 2023, and had pledged 24.55% of their shares at the FY26 annual report; management says the pledge is falling but will not promise zero. About ₹515cr invested in its Brazilian arm, Fasttel, was written off in Q4 FY26.",
        watch: ["More Gulf oil and gas awards (order book a record ₹71,846cr and net debt just ₹72cr at Q2 FY27; rated AA+).", "Collection of the ₹1,500cr owed for water work.", "The promised 0.75-point rise in pre-tax margin for FY27.", "The promoter pledge (24.55% of their shares) coming down."],
        charts: constructionPowerCharts['Kalpataru Proj.'],
    },
    {
        company: 'KEC International',
        inShort: ["**RPG Group's global EPC contractor** (it designs, buys materials for and builds projects), mainly power transmission lines and substations in India, the Middle East, Africa and the Americas, plus civil works, railways, cables and solar and wind farms.", "**Good:** a ₹37,697cr order book, a solid transmission business and its SAE Towers arm growing fast in the US. **Bad:** the margin fell to 5.8% in Q1 FY27 as old metro, railway and water jobs lost money, net debt is ₹6,568cr on the company's own count, and a CBI bribery case that led Power Grid to bar it from tenders (November 2025 to June 2026) is now in court.", "**Verdict: wait.** Management itself does not expect high-single-digit margins until FY28, it has missed its start-of-year promises three years running, CRISIL's own estimates put it past its downgrade triggers, and the price asks for more growth than I expect."],
        tagline: "Global power-transmission EPC contractor with tower plants in India, Dubai, Brazil and Mexico, plus civil, railway, cable and renewables arms.",
        revenue: '₹23,506cr (FY26, consolidated)',
        products: [
            { name: 'Transmission and distribution (T&D)', text: "Transmission lines (steel towers and wires carrying high-voltage power) and substations (switching and voltage-changing yards), including HVDC lines, in India, Saudi Arabia, the UAE, Africa and the Americas. Its tower plants can make 483,800 tonnes a year. Q1 FY27 revenue ₹3,217cr." },
            { name: 'SAE Towers', text: "Its Americas arm, making towers, poles and hardware in Brazil and Mexico for US and Latin American utilities. Q1 revenue ₹450cr, up 25%; orders plus L1 over ₹3,800cr, and the plants are full." },
            { name: 'Civil', text: "Factories, high-rise housing (about 80 towers under way), water-supply schemes and data-centre buildings in India. Q1 revenue ₹993cr, up 6%." },
            { name: 'Transportation', text: "Railway track, overhead electrification, signalling and the Kavach anti-collision system, and metro track work. Q1 revenue ₹259cr; mostly finishing old jobs." },
            { name: 'Cables, conductors and renewables', text: "Power and control cables and aluminium conductors (Q1 revenue over ₹600cr, up 57%), and building solar and wind farms (over 600 MW under way)." },
        ],
        revenueText: "In Q1 FY27 **transmission (T&D) brought ₹3,217cr**, civil ₹993cr, cables and conductors over ₹600cr and transportation ₹259cr, on total revenue of ₹5,024cr (flat on last year; the segment figures overlap slightly). About ₹300cr of Middle East revenue slipped to later quarters as shipments were held up. The **order book** (signed work not yet done) was **₹37,697cr**, about **1.6 years of revenue**, and over ₹40,000cr including about ₹3,000cr where it is lowest bidder (L1). **Order inflow** was over **₹6,300cr** in Q1; the FY27 target is ₹30,000cr, 60–65% of it transmission. The Middle East is about 25% of the order book and L1, split roughly evenly between Saudi Arabia and the UAE.",
        mixes: [
            { caption: 'Segment revenue, Q1 FY27 (call)', parts: [{ label: 'Transmission and distribution', share: 63 }, { label: 'Civil', share: 20 }, { label: 'Cables and conductors', share: 12 }, { label: 'Transportation', share: 5 }], note: 'Shares of the four segments management named; renewables and pipelines are small and not split out.' },
        ],
        customers: ["**Power Grid (PGCIL), state utilities and private developers** in India, including Adani (about 5% or less of the order book) and a first line to feed a data centre.", "**Utilities in Saudi Arabia, the UAE, Africa and the Americas**; SAE sells towers to US utilities and developers.", "**Government bodies** for civil and rail work (Indian Railways, metro corporations, the Jal Jeevan Mission in Madhya Pradesh and Odisha), plus private builders and a leading carmaker."],
        difficulty: { level: 'High', text: "Large overseas transmission jobs need a long record, local presence and big bank guarantees, and towers need heavy fabrication and galvanising plants. Civil and railway work is easier to enter and crowded, and that is where KEC has struggled." },
        moat: "Global reach, its own tower plants in India, Dubai, Brazil and Mexico, and a long record with Power Grid and Gulf utilities keep it among the few bidders for large lines. Management admits there are few barriers outside very large projects, and the civil and rail push has hurt returns.",
        salesDrivers: ["**Indian grid spending**: HVDC schemes such as Barmer in Rajasthan, renewable power lines and new private developers; but right-of-way (land access) problems in Rajasthan and Gujarat are slowing work.", "**Middle East**: tendering is strong but awards are slow, and the war disrupted shipments into the Gulf and raised freight, fuel and insurance costs.", "**US grid and data-centre demand** through SAE, whose Brazil and Mexico plants are full at about ₹2,000cr a year of output.", "**Clearing old jobs**: finished metro and rail projects that clients have not taken over cost about ₹10cr a month each to maintain; management says new orders are all profitable.", "**Cables**: current plants can reach about ₹3,000cr of revenue, and new elastomeric and E-beam cables start this year."],
        inputs: "**Steel** angles and plates for towers and **zinc** for galvanising are the main tower materials; **aluminium** and **copper** go into conductors and cables; plus bought-in substation equipment, pipes and valves for water projects, cement and diesel. Materials were 48% of sales in FY26, and subcontracting and site costs another 31%.",
        costEffect: "**Partly passed on.** The company did not say how much of its book has price-variation clauses (which move the contract price with an agreed metals index); management says much of the transmission exposure is hedged and bids carry cushions, and it is asking Gulf clients to pay the extra war-related freight and insurance, holding back some purchases until they agree. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (8% to 3%). **What happened:** India's hot-rolled steel index eased from 100 in Q1 FY24 to 94 in Q1 FY27, and the margin was 5.7% then and 5.8% now, after reaching 7.8% in Q4 FY25. Steel was not the cause: losses on old civil, metro, railway and water jobs, labour shortages and Middle East freight costs pulled it down.",
        competitors: [{ name: 'Kalpataru Projects', note: 'Closest Indian peer in transmission, also in buildings, pipelines and water; higher margins at present.' }, { name: 'Larsen & Toubro, Tata Projects', note: 'Larger rivals for big HVDC, civil and data-centre jobs.' }, { name: 'Transrail Lighting, Skipper', note: 'Smaller Indian transmission contractors and tower makers.' }],
        position: "**One of India's largest transmission EPC companies**, with a big Middle East book and, through SAE, unusual among Indian peers in making towers in the Americas.",
        money: "Screener puts net debt at **₹4,866cr** (March 2026); the company's own figure, which includes supplier credit (acceptances), was ₹6,568cr in June 2026. It aims for about ₹5,500cr by March 2027 using about ₹300cr due from Afghanistan (paid through the Asian Development Bank), ₹300–400cr of overdue water dues, retention money (the 10–35% of each bill that Gulf clients hold back until the job is finished) and ₹150–200cr of railway claims. It targets net working capital of 110 days by March 2027. Capex is about ₹400cr in FY27, of which ₹75–100cr a year goes on cables. CRISIL's May 2026 estimates put its interest cover (2.2–2.3 times) and outside liabilities (3.2–3.3 times net worth) past the levels it names as downgrade triggers. The auditor added an emphasis of matter on the CBI case, whose impact it calls ‘currently not determinable’. Promoters (RPG Group) hold **50.1%**, down slightly from 51.9% in September 2023.",
        watch: ["Margin recovery as the old civil and rail jobs close.", "Net debt: about ₹6,000cr targeted for September 2026 (figure due with the Q2 results; ₹6,568cr in June) and ₹5,500cr by March 2027.", "Middle East awards and shipments getting back to normal.", "The bribery case in court, and any rating downgrade."],
        charts: constructionPowerCharts['KEC International'],
    },
    {
        company: 'Techno Electric &Eng',
        inShort: ["**A power-grid EPC contractor** (it designs, buys the equipment for and builds projects) specialising in high-voltage substations and transmission lines for Power Grid, Adani and other developers. It is also building its own data centres and runs smart electricity meters.", "**Good:** margins of about 14–16%, well above most EPC rivals, no net debt, and orders won plus lowest-bid positions already above its ₹4,000cr FY27 target. **Bad:** about ₹1,000cr a year is going into data centres that earn little so far, cash flow from operations was minus ₹590cr in FY26, and the auditor flagged ₹90cr of overdue receivables (money clients owe), which management has not provided for.", "**Verdict: wait.** The grid business is excellent, but the price needs the data-centre bet to pay off. The daily feed's P/E has since fallen and the check reads {label:Techno Electric &Eng|fits} on 28 September, though the price itself is only about 1% lower; I still want operating cash and a signed data-centre tenant first."],
        tagline: "Specialist builder of high-voltage substations and transmission lines, branching into data centres and smart meters.",
        revenue: '₹3,252cr (FY26, consolidated)',
        products: [
            { name: 'Power transmission EPC', text: "Substations (the yards where power is stepped up or down in voltage and lines are switched), including 765 kV, gas-insulated and digital substations, plus transmission lines and grid-stability equipment such as synchronous condensers. This is almost all of revenue." },
            { name: 'Smart meters', text: "Installs and runs about 2.24 million smart electricity meters for state power distributors in four concessions (Madhya Pradesh, Ranchi, Tripura, Jammu and Kashmir). It pays to install them over 27 months, then earns fees for about 93 months; 18.5 lakh are installed and Indore is live." },
            { name: 'Data centres', text: "Its own campus in Chennai (design load raised from 24 MW to 35–40 MW by allowing denser AI racks), Noida with RailTel (due in the last quarter of FY27) and Kolkata (not before FY28), plus small 'edge' sites. Revenue is still small; it guides to about ₹40–50cr in FY27." },
            { name: 'Transmission assets', text: "Lines it built and part-owns, such as Ishanagar and Dhule, which it plans to sell to Power Grid in Q2 and Q3 FY27." },
        ],
        revenueText: "EPC was **99% of FY25 revenue** (Screener); the company does not yet report data-centre revenue separately. Q1 FY27 consolidated revenue was ₹630cr (standalone ₹641cr, up 25%); Q1 is its lightest quarter, only 15–20% of the year. The **order book** (signed work not yet done) was **₹9,567cr at March 2026** per the annual report (transmission ₹6,855cr, smart meters ₹1,565cr, flue-gas desulphurisation ₹778cr), **₹9,600cr at June and about ₹11,000cr by mid-August**, about **2.8 years of revenue**; customers allow 2–2.5 years per job, often plus 6–9 months' wait for land. **Order inflow** so far in FY27 is about **₹2,200cr** (₹666cr in Q1), with ₹2,100cr more where it is the lowest bidder (L1). Management guides to revenue of ₹4,000cr or more for FY27.",
        customers: ["**Power Grid (PGCIL)** and private transmission developers such as **Adani Energy, Sterlite and IndiGrid**, which win line-building concessions in government auctions and hire Techno to build the substations.", "**State utilities**, and state power distributors (discoms) for smart meters under the government's RDSS scheme.", "**Data-centre tenants**: 10 new customers in Q1 including two telecom carriers, and a memorandum with a global cloud giant (hyperscaler) for 2 MW in Andhra Pradesh."],
        difficulty: { level: 'High', text: "765 kV and digital substations need design skill, testing and a record that few Indian contractors have. Running data centres is a different game (uptime guarantees and winning global cloud customers) where Techno is new." },
        moat: "Skill in the highest-voltage and digital substations and a 40-year record keep it on developers' shortlists and support mid-teens margins. The weakness: jobs are still tendered, and the data-centre arm has no record against much bigger operators.",
        salesDrivers: ["**Transmission build-out**: management cites about ₹9 lakh crore of Indian transmission spending between FY26 and FY32 to carry renewable power, with 8–10 line concessions being awarded each month.", "**Harder, higher-value work**: HVDC corridors, synchronous condensers and digital substations, where it has early credentials.", "**Equipment supply**: transformer makers' order books have more than doubled since FY22, so long waits and higher prices for transformers and electrical steel can slow projects.", "**Data-centre leasing**: about 150 MW of demand under discussion; revenue depends on signing large tenants, who then take about six months to move in.", "**Smart-meter fees**: about ₹450cr of collections expected this year as meters go live, with no further capex needed."],
        inputs: "**Bought-in electrical equipment** is the main cost: transformers, reactors, switchgear, CRGO (electrical) steel, **copper** and **aluminium** conductors and control cables, plus steel structures and civil work. Materials were 79% of sales in FY26.",
        costEffect: "**Partly passed on.** The company does not say how much of its order book has price-variation clauses (which move the contract price with metal indices); it says it held margins by ordering long-lead equipment early and through vendor relationships. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (14% to 6%). **What happened:** India's copper price index rose from 100 in Q1 FY24 to 149 in Q1 FY27, yet the margin rose from 7.7% to 15.9%. Q1 FY24 was an unusually weak quarter; since then the margin has mostly run at 12–17%, set by the mix of substation jobs and early buying, not by copper.",
        competitors: [{ name: 'Kalpataru Projects, KEC International', note: 'Much bigger transmission EPC groups; more lines, towers and overseas work, at lower margins.' }, { name: 'Hitachi Energy, Siemens, GE Vernova', note: 'Equipment makers that also build substations, especially HVDC terminals.' }, { name: 'Yotta, STT GDC, Equinix', note: 'Established data-centre operators with deep pockets and ties to global cloud firms.' }],
        position: "**A leading specialist in high-voltage and digital substations** in India, earning higher margins than larger EPC rivals; a new, small entrant in data centres.",
        money: "Screener shows **net cash of ₹2,316cr** at March 2026, counting investments; the company puts cash and liquid investments at about ₹1,250cr in June 2026, after putting money from its QIP (a share sale to institutions) into data centres, meters and transmission projects. It plans about ₹1,000cr of data-centre capex in FY27 (₹500–600cr for Noida and Kolkata, up to ₹400cr for a second Chennai phase if demand comes). About ₹1,500cr sits in contract assets: unbilled work and finished transmission and meter projects waiting to be sold or paid for. The auditor added an emphasis of matter on ₹89.6cr of substantially overdue receivables, ₹59cr of it from a terminated Afghanistan project; management says no provision is needed. Its two data-centre subsidiaries lost ₹29.9cr and ₹16.2cr in FY26. Promoters hold **56.9%**, down from 61.5% in September 2023.",
        watch: ["Signing of large data-centre tenants in Chennai and Noida.", "Sale of the Ishanagar and Dhule lines to Power Grid.", "Operating cash flow turning positive as contract assets are billed."],
        charts: constructionPowerCharts['Techno Electric &Eng'],
    },
    {
        company: 'Transrail Lighting',
        inShort: ["**A power-transmission EPC company that makes its own towers, conductors and poles** (EPC: it designs, buys materials for and builds the project), building high-voltage lines and substations in India and abroad.", "**Good:** margins of about 11–12%, above most EPC peers, and a ₹16,035cr order book. **Watch:** Q1 revenue grew only 5% and orders were about ₹1,000cr; net debt rose from ₹267cr to ₹548cr on the company's count; it plans a ₹600cr share sale; and its annual report shows a March 2026 income-tax search and an unpaid ₹79cr related-party loan.", "**Verdict: follow.** The price asks for less growth than I expect, but that expectation needs new orders it has not yet won: only ₹1,000cr in Q1 plus ₹400cr as lowest bidder, against a ₹10,000cr-plus FY27 target. I want Q2 wins to catch up, the related-party loan repaid and the tax search closed before owning it."],
        tagline: "Transmission-line and substation contractor with its own tower, conductor and monopole factories, working in India and overseas.",
        revenue: '₹6,880cr (FY26, consolidated)',
        products: [
            { name: 'Transmission lines and substations (EPC)', text: "Turnkey high-voltage lines up to 765 kV, HVDC lines (it won a 500 kV HVDC order this quarter) and substations for Indian and overseas utilities. This is the core of the business." },
            { name: 'Towers, conductors and monopoles', text: "Its factories make galvanised lattice towers (a new plant at Butibori, Nagpur, started in April 2026), aluminium conductors (capacity doubling from Q2) and steel monopoles, for its own projects and for sale, now including Australia." },
            { name: 'Cooling towers and new areas', text: "It bought Capital Turnkey Projects to build large natural-draught and fan-driven cooling towers for nuclear and thermal power plants and data centres, and is testing the market for data-centre and battery-storage (BESS) EPC." },
        ],
        revenueText: "The company does not split revenue by business on the call. By geography, **about 65% of revenue is from India and 35% from overseas** (it aims for 60:40). Q1 FY27 revenue was ₹1,736cr, up 5%, held back by diesel, fuel-oil and procurement problems at its factories and shipping delays abroad. The **order book** (signed work not yet done) was **₹16,035cr** at June 2026, including ₹400cr where it is lowest bidder (L1), about **2.3 years of revenue**; an analyst put the overseas part at about ₹6,400cr. **Q1 order inflow was only about ₹1,000cr**; it bid for about ₹20,000cr of jobs in Q1, expects to win 10–15%, and targets over ₹10,000cr of new orders and 20% revenue growth in FY27.",
        mixes: [
            { caption: 'Revenue by geography (management, Q1 FY27 call)', parts: [{ label: 'India', share: 65 }, { label: 'Overseas', share: 35 }] },
        ],
        customers: ["**Power Grid and state transmission utilities** in India, plus private developers (for example, the 500 kV HVDC line).", "**Overseas utilities** in Africa, South Asia and the Middle East and North Africa, often funded by multilateral lenders; a ₹4,500cr Bangladesh programme is almost finished, with ₹300cr left.", "**Tower and pole buyers**, now including a first monopole supply to Australia."],
        difficulty: { level: 'High', text: "Qualifying for 765 kV and HVDC jobs needs a record and financial strength, and running factories alongside construction sites ties up capital. Many of its markets involve hard terrain and politically risky countries." },
        moat: "Making its own towers and conductors gives it control over supply and cost, which helps it earn higher margins than most peers. It is still a tender business, and it is much smaller than Kalpataru and KEC.",
        salesDrivers: ["**Indian transmission plans**: the National Electricity Plan adds 191,000 circuit km of lines by 2032 to connect 500 GW of renewable power by 2030.", "**Overseas grids**: Africa, the Middle East and North Africa, and now Australia, where about 10,000 circuit km of new lines are needed.", "**Factory capacity**: the Butibori tower plant and doubled conductor capacity should speed up execution in the second half.", "**Bid results**: about ₹20,000cr of bids from Q1 are due to be decided in Q2 and Q3.", "**Collections**: delayed payments in Q1 raised working capital; management expects to collect them in Q2."],
        inputs: "**Steel** for towers and monopoles and **zinc** for galvanising (rust-proofing), **aluminium** for conductors, plus bought-in substation equipment, cement, and diesel and fuel oil for its plants and sites. Materials were 45% of sales in FY26, and site and subcontracting costs 26%.",
        costEffect: "**Partly passed on.** The company did not say what share of its contracts carry price-variation clauses (which move the contract price with agreed metal indices); it says it builds cost assumptions into each tender and keeps guiding to a margin of 11% or more. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (14% to 9%). **What happened:** India's hot-rolled steel index eased from 100 in Q2 FY24 to 96 in Q1 FY27, and the quarterly margin moved from 12.0% to 11.6%, staying between 11% and 13% throughout. The mix of jobs, fuel and logistics disruptions and how busy its factories were moved it, not steel.",
        competitors: [{ name: 'Kalpataru Projects, KEC International', note: 'Much larger transmission EPC groups with more businesses; Transrail earns higher margins.' }, { name: 'Skipper', note: 'Tower and pole maker that also does domestic transmission site work.' }, { name: 'Chinese and local contractors', note: 'Tough price competition overseas, especially in Africa.' }],
        position: "**A mid-sized, factory-backed transmission EPC company** with some of the highest margins among Indian transmission contractors and work on six continents.",
        money: "Screener shows **net cash of ₹85cr** at March 2026, but the company's own figures show **net debt of ₹267cr** at March and **₹548cr** in June. Management said net debt rose in Q1 because collections were late, and expects it back to about a third of a year's EBITDA by March. Screener's FY26 operating margin of 14% uses an annual figure that does not match its own quarters; the company's is 11.9%. Working capital was 81 days last year, and it aims to stay at or below that. About ₹203cr of capex on site tools and plant is mostly spent this year. The board has approved raising up to ₹600cr through a QIP (a share sale to institutions), called an enabling approval for working capital and opportunities. A ₹79cr unsecured loan to a related company, Burberry Infra, was unchanged between March 2025 and March 2026, and interest owed on it rose from ₹16.5cr to ₹25.1cr; management said it would be repaid by 30 September 2026, and no filing confirming repayment had been seen by that date. The Income Tax Department searched its offices, plants and directors' homes on 24–28 March 2026; the auditor says the impact is ‘presently not ascertainable’, no demand has been raised, and neither call mentioned it. Promoters hold **71.1%**, unchanged since December 2024.",
        watch: ["Order wins in Q2 and Q3: about ₹20,000cr of bids are due to be decided, and the year needs ₹10,000cr-plus.", "Revenue catching up to the 20% growth target in the second half.", "Whether the ₹600cr QIP goes ahead, and on what terms.", "Whether the Q2 accounts show the Burberry Infra loan and interest repaid (due by 30 September 2026; no filing seen by then), and any demand from the tax search."],
        charts: constructionPowerCharts['Transrail Lighting'],
    },
    {
        company: 'Skipper',
        inShort: ["**India's largest maker of power transmission and distribution structures** (towers, poles, monopoles), with a domestic transmission site-work arm and a plastic pipes business.", "**Good:** margin up to 10.7% as old low-margin orders run off, a record ₹9,200cr order book, and a ₹433.5cr share issue used to cut debt. **Watch:** Power Grid bought about 57% of its FY26 output, exports (about 13% of FY26 revenue) halved in Q1 on Gulf freight costs, Q1 revenue grew just 4.5%, free cash has been negative for two years, and the 75,000-tonne expansion has slipped twice.", "**Verdict: follow.** The price asks for a little more growth than I expect; I want to see the export orders and the new capacity arrive, and free cash turn positive."],
        tagline: "Maker of transmission towers, poles and monopoles for India and export markets, with a transmission EPC services arm and plastic pipes.",
        revenue: '₹5,553cr (FY26, consolidated)',
        products: [
            { name: 'Engineering products', text: "Galvanised lattice towers up to 765 kV, distribution poles, monopoles and telecom towers, made in its own plants and sold in India and to over 60 countries. Capacity rises to 450,000 tonnes a year when a 75,000-tonne expansion starts in the second half of FY27." },
            { name: 'Infra (EPC services)', text: "The services part (site construction) of transmission-line EPC jobs in India; the towers themselves are counted under engineering products. It does no EPC work abroad." },
            { name: 'Polymer pipes', text: "Plastic (PVC and CPVC) pipes and fittings sold through dealers. Q1 sales were held back by dealer destocking as resin prices swung; management targets 20% growth for the year." },
        ],
        revenueText: "Q1 FY27 revenue was a record ₹1,310cr, up 4.5% (Q1 presentation): **engineering products ₹940cr** (−8%, margin 12.1%), infra ₹253cr (+148%, margin 7.9%) and pipes ₹117cr (−8%, margin 5.2%). In FY26 engineering was about 79% of revenue, infra 12% and pipes 9%. Exports were about 13% of FY26 revenue but halved to ₹162cr in Q1 as export customers delayed shipments. The **order book** (signed work not yet delivered) was a record **₹9,217cr**, about **1.6 years of revenue**, of which about ₹1,800cr is infra work. **Order inflow** in Q1 was **₹1,674cr**, almost all transmission, and it announced ₹797cr more in September. It targets over ₹7,000cr of orders in FY27, ₹1,100cr of them from exports, expects to execute about ₹5,000cr of the book this year, and guides to 15% revenue growth.",
        mixes: [
            { caption: 'Order book by type, June 2026 (Q1 FY27 call)', parts: [{ label: 'Engineering products', share: 80 }, { label: 'Infra (EPC services)', share: 20 }], note: 'Pipes are sold from stock and are not in the order book.' },
        ],
        customers: ["**Power Grid**, which bought about 57% of FY26 revenue (CARE); management says the domestic order book is predominantly Power Grid, with private developers under 10%.", "**Private transmission developers** that win government line auctions (TBCB: the developer offering the lowest yearly charge wins the right to build and own the line), and state utilities.", "**Overseas utilities and contractors** in the Middle East, Africa and Latin America, and now the US, Finland and Australia after passing their supplier audits.", "**Plumbing dealers** for pipes, and telecom customers for towers."],
        difficulty: { level: 'Medium', text: "Making towers is steel fabrication and galvanising, but at scale it needs large plants, design testing and utility approvals, and developed-market audits take years. Pipes are a crowded dealer business." },
        moat: "Scale (the biggest transmission-structure capacity in India) and approvals from demanding utilities make it a go-to supplier when capacity is tight. The product is standard and won on price, so scale and cost are its only real edge.",
        salesDrivers: ["**Indian transmission auctions**: management expects ₹90,000cr–1 lakh crore of bids in FY27, up from ₹50,000–60,000cr last year, now including state-level projects; it estimates only about 40% of the ₹9 lakh crore national plan has been bid out.", "**Exports**: grid demand from renewables and data centres in the US and Australia; it wants exports to be half of orders in the long run, but high freight costs are making buyers delay shipments now.", "**Capacity**: 75,000 tonnes of new, mostly export-focused capacity from around the end of Q2 FY27.", "**Legacy orders**: low-margin old contracts are now under 5% of the book and should be finished this year; the long-term margin aim is 12%.", "**Skilled manpower**: management calls the shortage of good technical staff its biggest worry."],
        inputs: "**Steel** angles, plates and sections and **zinc** for galvanising are the main inputs for towers and poles, with some **aluminium**, and **PVC resin** for pipes. Materials were 64% of sales in FY26.",
        costEffect: "**Mostly passed on.** Contracts are a mix of variable-price ones, adjusted each month to steel and metal prices, and firm-price ones with a buffer built into the price; it also stocks up on material and partly hedges some metals. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (10% to 4%). **What happened:** India's hot-rolled steel index eased from 100 in Q1 FY24 to 94 in Q1 FY27, and the margin was flat at 10.8% to 10.7%, dipping to about 9.5% in between. The dip came from low-margin legacy contracts; as they ran off the margin recovered, and a brief steel spike this spring had faded by May.",
        competitors: [{ name: 'KEC International, Kalpataru Projects', note: 'EPC groups with their own tower plants, which they use mainly for their own projects.' }, { name: 'Transrail Lighting', note: 'Integrated transmission contractor that also makes towers, conductors and monopoles.' }, { name: 'Chinese tower makers', note: "The main export rivals; Skipper pitches itself as the alternative for buyers wanting to reduce reliance on China." }, { name: 'Supreme, Astral, Finolex', note: 'Much larger brands in plastic pipes.' }],
        position: "**India's largest power transmission and distribution structure maker** by management's account, with capacity heading to 450,000 tonnes a year.",
        money: "Screener puts net debt at **₹899cr**. After the quarter it raised **₹433.5cr** by issuing shares at ₹470 to institutions (a preferential issue), about ₹327.5cr of it for repaying working-capital loans; CRISIL upgraded its rating to A+. CARE puts total debt including its joint venture at ₹1,498cr against net worth of ₹1,486cr at March 2026, and free cash flow has been negative for two years as capex outran cash. It has guaranteed ₹185.8cr of borrowing for its joint venture, Skipper Metzer. Finance costs fell to 3.6% of revenue in Q1 from 4.2%, helped by better working capital, and should be 3.2–3.5% for FY27. The 75,000-tonne expansion is under way. Promoters hold **61.5%**, down from 71.9% in December 2023.",
        watch: ["Export orders (₹1,100cr target) and delayed shipments resuming.", "Start-up of the 75,000-tonne expansion.", "Margin moving toward the 12% aim."],
        charts: constructionPowerCharts['Skipper'],
    },
    {
        "company": "Karamtara Engineering",
        "segment": "Tower makers with a contracting arm — make the steel, then build",
        "inShort": [
            "**Makes the steel structures that hold up solar panels**, plus transmission-line towers, wind towers, fasteners and line hardware, from 13 plants in Maharashtra, Gujarat and Italy, selling about 40% abroad, mainly to US solar builders.",
            "**Good:** revenue grew 37% to ₹4,312cr in FY26 and 72% in Q1 FY27, and over five years about 89% of operating profit turned into cash. **Watch:** solar is 79% of sales and the top 10 customers 49%; the margin is thin at 11–12%; heavy capex left free cash negative for three years; and a CBI charge-sheet over 2013 letters of credit names the Chairman and the CFO.",
            "**Verdict: pass.** A fast grower with good cash conversion, but a CBI charge-sheet names the chairman and the CFO, solar is 79% of sales and about 45 times earnings already pays for this year's guided growth."
        ],
        "tagline": "A Mumbai family-run maker of solar mounting structures, tracker parts, transmission and wind towers and fasteners, founded in 1996 and listed in September 2026.",
        "revenue": "₹4,312cr (FY26, consolidated)",
        "products": [
            {
                "name": "Solar structures",
                "text": "Fixed-tilt mounting structures, tracker piles, torque tubes, couplers and purlins: 492,000 tonnes a year of capacity (about 16.8 GW), the largest in India by capacity according to the RHP's industry report. **79% of FY26 revenue.**"
            },
            {
                "name": "Transmission towers and line hardware",
                "text": "Lattice towers for lines up to 1,200 kV (a new plant at Bhachau, Gujarat, started recently) and line fittings such as clamps and dampers, partly made at its Italian subsidiary Iselfa. Towers were 6% of FY26 revenue."
            },
            {
                "name": "Wind towers",
                "text": "Angular (lattice) and tubular towers for wind turbines, started in FY25; about 3% of FY26 revenue. The lattice capacity can switch to transmission towers."
            },
            {
                "name": "Fasteners and new lines",
                "text": "Bolts, nuts and studs for solar, wind, transmission, railways and cars (5% of revenue); a pre-engineered building plant aimed at data centres due by April 2027; and a planned battery-storage business."
            }
        ],
        "revenueText": "**Solar products were 79% of FY26 revenue**, lattice transmission towers 6%, fasteners 5%, wind towers 3% and the rest line hardware and structural steel. **Exports were 40.5% of FY26 revenue**, down from 57.6% in FY24, mostly to US solar builders; in Q1 FY27 international sales rose to 66%. The 50% US steel tariff is billed on to customers and inflates revenue: about ₹250cr of Q1's ₹1,581cr was tariff, against ₹113cr a year earlier. It sold about 135,000 tonnes in Q1. It does not disclose an order book; domestic solar orders run 4–5 months and export orders 8–9 months.",
        "mixes": [
            {
                "caption": "Revenue by product, FY26 (RHP)",
                "parts": [
                    {
                        "label": "Solar structures",
                        "share": 79
                    },
                    {
                        "label": "Transmission towers",
                        "share": 6
                    },
                    {
                        "label": "Fasteners",
                        "share": 5
                    },
                    {
                        "label": "Wind towers",
                        "share": 3
                    },
                    {
                        "label": "Other",
                        "share": 7
                    }
                ]
            },
            {
                "caption": "Revenue by market, FY26 (RHP)",
                "parts": [
                    {
                        "label": "India",
                        "share": 59
                    },
                    {
                        "label": "Exports",
                        "share": 41
                    }
                ]
            }
        ],
        "customers": [
            "**US solar builders and tracker makers**: it serves 16 of the top 24 US solar EPC firms, and the RHP names Ampacity LLC (8.0% of FY26 revenue) and GameChange (6.2%).",
            "**Indian solar developers and EPC firms** for fixed and tracker structures, and transmission contractors and utilities for towers.",
            "**Concentrated**: the top 10 customers were 48.6% of FY26 revenue (63.5% in FY24); it had 42 international customers in March 2026."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Rolling, cutting and galvanising steel at scale is not technically hard, but qualifying with US tracker makers and keeping rejection rates near 0.1% takes years, and its own rolling mills and galvanising lines lower cost."
        },
        "moat": "Scale, backward integration (its own rolling mills and galvanising) and years of qualification with US buyers give it a cost and reliability edge. But the products are fabricated steel sold on price in a cyclical solar market, and margins of 11–12% show limited pricing power.",
        "salesDrivers": [
            "**Solar installations** in India and the US: management says demand is outrunning supply and it can pick its orders.",
            "**Transmission**: the new Bhachau tower plant should reach peak output within 6–9 months, and management wants towers to grow the way solar did (from ₹20cr in FY21).",
            "**Saudi Arabia**: a plant for towers and solar parts starts trials in December 2026; management expects some revenue in FY28 and fuller use 12–18 months after start.",
            "**Guidance**: FY27 revenue up 60–65%, with 40–42% of the year's sales in the first half.",
            "**US trade**: its products already pay the 50% Section 232 steel tariff, which customers have absorbed so far."
        ],
        "inputs": "**Steel** (billets, hot-rolled and coated coils, wire rods, angles, plates) and **zinc** for galvanising, plus bought washers, castings and forgings. Materials were about 58% of sales in FY26, and the top 10 suppliers about 90% of purchases.",
        "costEffect": "**Mostly passed on.** Domestic solar orders are delivered in 4–5 months and steel and zinc are booked as soon as an order is won; export orders use imported material bought against the order; longer contracts carry price-variation clauses. Freight is the gap: high shipping and trucking costs cut the Q1 FY27 margin to 11% from 13% a year earlier. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (12% to 6%).",
        "competitors": [
            {
                "name": "Nextracker, Array Technologies, Arctech",
                "note": "Global solar tracker companies; customers or rivals depending on the project."
            },
            {
                "name": "Purshotam Profiles, Mahindra Susten, Utkarsh India",
                "note": "Indian solar structure makers and EPC players named in the RHP's industry report."
            },
            {
                "name": "Skipper, KEC International, Kalpataru Projects",
                "note": "Indian transmission tower makers; Karamtara is small in towers today."
            }
        ],
        "position": "**India's largest maker of solar mounting structures and tracker parts by capacity** (RHP industry report), with 889,200 tonnes a year of total capacity; its solar tracker-pile plants ran at 85–89% in FY26 but newer lines at 20–45%.",
        "money": "Borrowings were **₹1,030cr at March 2026** (₹1,105cr with leases on Screener) against about ₹143cr of cash and bank balances, so **net debt was about ₹962cr**; on top of that it owed ₹735cr to banks for supplier letters of credit (acceptances) in July 2026, which also explains its 194 days of supplier credit. The September 2026 IPO raised ₹675cr of new money, of which ₹600cr goes to repaying borrowings and acceptances, plus ₹200cr sold by the promoters, at ₹254 a share. Over FY22–FY26 it turned ₹1,241cr of operating cash out of ₹1,396cr of operating profit (89%), but capex of about ₹900cr in FY26 alone kept free cash negative for three years (−₹247cr in FY26). No dividend. Promoters hold **82.01%**, with no pledge disclosed.",
        "watch": [
            "Q2 results: the margin above 11% as promised, and debt down after the IPO repayment.",
            "The CBI case against the company, Chairman and CFO, and the DRI export-incentive inquiry.",
            "Solar demand in the US and India, and whether towers and the Saudi plant reduce dependence on solar."
        ],
        charts: constructionPowerCharts["Karamtara Engineering"],
    },
    {
        "company": "Om Power Transmission",
        "segment": "Transmission contractors — build lines and substations",
        "inShort": [
            "**A small Gujarat contractor that builds high-voltage power lines, substations and underground cables**, mostly for GETCO, the state transmission utility, and maintains about 100 substations.",
            "**Good:** revenue grew 61% to ₹449cr in FY26 with a steady 13% margin, management guides to about 50% more in FY27, and the price is about 12 times earnings. **Watch:** one customer was 64% of FY26 revenue and Gujarat 82% of the order book; over four years it turned only ₹5cr of ₹119cr of operating profit into cash; customers took 180 days to pay in FY26; and the order book has shrunk since December.",
            "**Verdict: pass.** Cheap and growing, but one customer is 64% of revenue, Gujarat is 82% of orders, and only ₹5cr of ₹119cr operating profit over four years came in as cash."
        ],
        "tagline": "A Gujarat power transmission and substation EPC contractor founded in 2011 by three Patel promoters; listed in April 2026.",
        "revenue": "₹449cr (FY26, standalone)",
        "products": [
            {
                "name": "Transmission lines",
                "text": "Overhead lines from 66 kV to 400 kV, including specialised pile-foundation river crossings such as the Mahisagar and Dholera lines; over 1,000 circuit km built. **52% of FY26 revenue.**"
            },
            {
                "name": "Substations",
                "text": "Air- and gas-insulated substations up to 220 kV with SCADA monitoring; its largest job is a 400 kV GIS substation and lines at Dholera worth about ₹200cr. 22% of FY26 revenue."
            },
            {
                "name": "Underground cabling",
                "text": "High- and extra-high-voltage cables up to 220 kV, 19% of FY26 revenue but only about 2% of the order book after projects finished."
            },
            {
                "name": "Operation and maintenance",
                "text": "Runs more than 100 substations and 400 km of lines under long-term contracts; 7% of FY26 revenue."
            }
        ],
        "revenueText": "**Transmission lines were 52% of FY26 revenue**, substations 22%, underground cabling 19% and maintenance 7%. **The top customer was ₹288cr, or 64%, of FY26 revenue**; management says most work is for GETCO, and the private-sector share fell from 35% in FY23 to about 15–16% in FY25. The order book was **₹621cr** in March 2026 (lines ₹449cr, substations ₹140cr), 82% from government companies and 82% in Gujarat, with first jobs in Rajasthan, Punjab and Dadra Nagar Haveli; it was ₹745cr in December 2025. Orders take 12–24 months, and about 35% of a year's revenue comes in the first half. Q1 FY27 revenue was ₹122cr, up 37%.",
        "mixes": [
            {
                "caption": "Revenue by business, FY26 (management, Q4 FY26 call)",
                "parts": [
                    {
                        "label": "Transmission lines",
                        "share": 52
                    },
                    {
                        "label": "Substations",
                        "share": 22
                    },
                    {
                        "label": "Underground cabling",
                        "share": 19
                    },
                    {
                        "label": "Maintenance",
                        "share": 7
                    }
                ]
            }
        ],
        "customers": [
            "**GETCO (Gujarat Energy Transmission Corporation)**, its anchor client, which rates it an AA-class contractor; the top customer was 64% of FY26 revenue.",
            "**Other state utilities and PSUs** in Rajasthan, Punjab and Dadra Nagar Haveli, and Dholera industrial-city infrastructure.",
            "**Private renewable, infrastructure and industrial clients**, about 18% of the order book, taken only at its target margins."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Utility qualifications by voltage class and experience take years, and river-crossing pile foundations are specialised, but it has not yet done 765 kV work and competes with many regional contractors on price."
        },
        "moat": "A long record and AA-class status with GETCO, which pays promptly by management's account, give it steady work at home. Outside Gujarat it is a newcomer, and in its home state it depends on one buyer.",
        "salesDrivers": [
            "**GETCO's spending**: GETCO is planning its first 765 kV lines and substations, a size Om Power has not built before but says it will qualify for.",
            "**Order wins**: a pipeline of more than ₹900cr in March 2026 with a 30–40% win rate; order inflow was a record ₹615cr in FY26.",
            "**New states and distribution work**: Rajasthan, Punjab and 11 kV distribution tenders.",
            "**IPO money**: part of the ₹133cr raised goes to working capital for bid deposits and guarantees, letting it bid for larger jobs.",
            "**Guidance**: about 50% revenue growth in FY27 at a 12–13% EBITDA margin."
        ],
        "inputs": "**Towers, conductors, insulators, cables, transformers and breakers**, bought against each order, plus subcontracted site labour. Materials were 53% of FY26 revenue and project costs (mostly labour and subcontracting) 24%.",
        "costEffect": "**Mostly passed on**: almost all its contracts carry price-variation clauses, management says, and it books key items in bulk as soon as an order arrives. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (13% to 8%). **What happened:** the margin rose from 8% in FY24 to 13% in FY25 and FY26 and was 12% in Q1 FY27, while management keeps gross margin at 23–25%.",
        "competitors": [
            {
                "name": "Rajesh Power Services",
                "note": "A Gujarat peer with similar margins and more distribution and private-sector work, named on the call."
            },
            {
                "name": "KEC International, Kalpataru Projects, Transrail",
                "note": "Far larger transmission EPC firms that dominate 765 kV and inter-state work."
            },
            {
                "name": "Regional Gujarat contractors",
                "note": "Bid for GETCO lines and substations against it."
            }
        ],
        "position": "**A small regional transmission EPC contractor**, among GETCO's AA-class contractors, with a ₹621cr order book; tiny next to national transmission firms.",
        "money": "Borrowings were **₹48cr** at March 2026 against ₹3cr of cash and ₹4cr of margin-money deposits, so **net debt was about ₹41cr**, before the IPO. The April 2026 IPO at ₹175 raised ₹150cr, ₹133cr of it new money, partly for working capital; the share now trades about 14% below the IPO price. **Over FY23–FY26 it turned only ₹5cr of operating cash out of ₹119cr of operating profit, and FY26 operating cash was −₹26cr**, as debtor days rose to 180, even though management says 80% of each bill is paid within 30 days; ₹66cr was held back as retention money in March 2026. CRISIL upgraded it to BBB+/Stable in April 2026. No dividend. Promoters hold **69.05%**, with no pledge.",
        "watch": [
            "Operating cash turning positive and debtor days falling back towards management's 30-day payment claim.",
            "New orders, especially outside Gujarat and a first 765 kV job.",
            "Whether margins hold at 12–13% as it bids in new states."
        ],
        charts: constructionPowerCharts["Om Power Transmission"],
    },
    {
        "company": "Vikran Engineering",
        "segment": "Transmission contractors — build lines and substations",
        "inShort": [
            "**A Thane contractor that builds power substations, transmission and distribution lines, solar plants and village water schemes**, mostly for government utilities, and now also owns a 969 MW solar project it is building for itself.",
            "**Good:** an order book of about ₹6,500cr, roughly five times FY26 revenue, and margins of about 14%. **Bad:** over five years it reported ₹589cr of operating profit but operating cash of −₹603cr; customers owe about ₹1,240cr plus ₹864cr of unbilled work against ₹1,249cr of revenue; one customer was 56% of FY26 revenue; and it took over a customer's ₹4,200cr solar project to settle unpaid dues, a project bigger than the company's market value.",
            "**Verdict: avoid.** Profit has not turned into cash, and the company has bet its balance sheet on a project it must now fund itself; India Ratings has turned negative."
        ],
        "tagline": "A power transmission, distribution, solar and water EPC contractor run by the Markhedkar family, listed in September 2025, now also a solar power developer.",
        "revenue": "₹1,249cr (FY26, consolidated; the same as standalone, as NOPL was bought after the year)",
        "products": [
            {
                "name": "Power transmission and distribution (T&D)",
                "text": "Substations up to 765 kV (air- and gas-insulated) and transmission lines for Power Grid and state utilities, and distribution upgrades for MSEDCL and NTPC under government schemes; recent work includes two hill-country lines in Arunachal Pradesh. About 28% of the order book."
            },
            {
                "name": "Solar EPC",
                "text": "Ground-mounted solar plants and balance-of-system work, for NTPC Renewable and others and above all for NOPL, its own 969 MW farm-solar (PM-KUSUM) portfolio in Maharashtra worth about ₹3,518cr to Vikran. About 62% of the order book."
            },
            {
                "name": "Water and railways",
                "text": "Rural drinking-water schemes under the Jal Jeevan Mission in Uttar Pradesh, Madhya Pradesh and Chhattisgarh, where payments have been slow, and a first railway overhead electrification order. About 10% of the order book."
            },
            {
                "name": "NOPL Solar (own project)",
                "text": "A ₹4,200cr solar portfolio with a 25-year agreement to sell power to MSEDCL and ₹1,017cr of central subsidy; management expects about ₹525cr of yearly revenue at an 85–88% margin once complete. 45 MW was running by August 2026."
            }
        ],
        "revenueText": "**One customer was ₹698cr, or 56%, of FY26 revenue** (three customers were each above 10% in FY25). The company does not split revenue by segment. The order book was **about ₹6,496cr** in August 2026: solar 62%, T&D 28% and water 10%, with NOPL's ₹3,518cr the largest piece. In March 2026 it was ₹5,206cr, of which 51% was for private clients. Q1 FY27 standalone revenue rose 28% to ₹204cr, of which ₹62cr was building NOPL; consolidated revenue was only ₹141.6cr because work for its own subsidiary is treated as investment, not sales. Management guides to ₹2,200–2,500cr of standalone revenue in FY27, about ₹1,500cr of it from NOPL, and says the second half is always heavier.",
        "mixes": [
            {
                "caption": "Order book by business, August 2026 (management, Q1 FY27 call)",
                "parts": [
                    {
                        "label": "Solar EPC",
                        "share": 62
                    },
                    {
                        "label": "Power T&D",
                        "share": 28
                    },
                    {
                        "label": "Water",
                        "share": 10
                    }
                ]
            }
        ],
        "customers": [
            "**Its own subsidiary NOPL Solar**, now the largest order, bought from Onix Renewable in April–May 2026.",
            "**Central and state utilities**: Power Grid, NTPC and NTPC Renewable, MSEDCL (including ADB-funded distribution work worth ₹530cr won in April), MPPTCL and MP Urja Vikas Nigam.",
            "**State water agencies** under the Jal Jeevan Mission, which owe about ₹120cr."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Substations up to 765 kV and lines in hill terrain need qualifications and a track record, but much of its work (distribution, solar balance-of-system, water pipelines) is open to many bidders on price."
        },
        "moat": "Qualifications with Power Grid and NTPC and a record in difficult terrain help in bidding, but it is a mid-sized contractor competing on price, with no lasting edge, and its growth now rests on its own solar project.",
        "salesDrivers": [
            "**The NOPL solar build**: about ₹1,500cr of FY27 standalone revenue, funded mostly by a project loan not yet closed in August.",
            "**Grid spending**: transmission and distribution programmes (RDSS, ADB-funded state schemes, Power Grid substations).",
            "**Government payments**: Jal Jeevan Mission funds are flowing again (₹23cr received in Q1); slow payment there swelled receivables.",
            "**New areas**: battery storage, data-centre power and solar parks (no order yet; it targets one by March 2027), and Africa and the Middle East.",
            "**Seasonality**: the first half is weak because of clients' budget cycles."
        ],
        "inputs": "**Bought-in equipment and materials**: transformers, switchgear, conductors, towers, cables, solar panels, inverters and pipes, plus subcontracted site work. Materials were about 35% of FY26 revenue and project and subcontracting costs about 39%.",
        "costEffect": "**Mostly passed on** through price-variation clauses in government contracts, management says, including recent cost rises linked to the West Asia conflict. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3.5 points (14% to 10.5%). **What happened:** the margin fell from 18% in FY25 to 14% in FY26 and to 8% on a consolidated basis in Q1 FY27, which management put down to a ₹6.5cr water-receivable provision and NOPL overheads with no matching revenue.",
        "competitors": [
            {
                "name": "KEC International, Kalpataru Projects, Transrail",
                "note": "Much larger transmission EPC firms with their own tower factories."
            },
            {
                "name": "Techno Electric",
                "note": "A substation and grid rival with a much stronger balance sheet."
            },
            {
                "name": "Solar EPC contractors",
                "note": "Many firms, including Sterling and Wilson, bid for solar work at thin margins."
            }
        ],
        "position": "**A mid-sized power and solar EPC contractor** with 47 completed projects across 14 states by March 2026, far smaller than the leading transmission firms.",
        "money": "Borrowings were ₹301cr at March 2026 against ₹220cr of cash and bank deposits, so **net debt was about ₹82cr**, but about ₹198cr of those deposits were pledged as margin money. **Customers owed about ₹1,237cr and unbilled work was ₹864cr, against FY26 revenue of ₹1,249cr.** Over FY22–FY26 it reported ₹589cr of operating profit but **operating cash of −₹603cr**, and free cash of −₹440cr in FY26 alone. The September 2025 IPO raised ₹721cr of new money at ₹97 a share (plus ₹51cr sold by shareholders), of which ₹541cr went into working capital; the share now trades about 43% below the IPO price. The NOPL project costs about ₹4,000–4,200cr, to be funded about 75% by debt and 25% by equity (about ₹1,000cr), more than two-thirds of its ₹1,425cr market value; management says the equity will come from its own cash and the project's revenue. India Ratings: IND A- with a Negative outlook since April 2026. Promoters hold **56.27%**.",
        "watch": [
            "Financial close of the NOPL loan, and how much equity Vikran itself has to put in.",
            "Receivables and unbilled work falling, and operating cash turning positive.",
            "Consolidated results, which strip out the self-billed NOPL work, as the true measure of growth."
        ],
        charts: constructionPowerCharts["Vikran Engineering"],
    },
    {
        company: 'Viviana Power Tech',
        segment: 'Transmission contractors — build lines and substations',
        inShort: ["**A Vadodara contractor that builds power lines, substations and underground cables**, mostly for Gujarat's state power companies, and is now starting to make power transformers.", "**Good:** sales grew from ₹33cr in FY22 to ₹529cr in FY26 at a steady 14–15% margin, and the order book is ₹1,800cr+. **Bad:** operating cash was negative every year from FY23 to FY26 and again in H1 FY27; customers took 268 days to pay in FY26; CARE cut its rating to BB+ (below investment grade) in October and withdrew it at the company's request; 70% of orders are in Gujarat; it lent ₹23.5cr to two subsidiaries it is now selling to an undisclosed buyer; and it plans a ₹150cr rights issue, about a fifth of its market value.", "**Verdict: avoid.** I expect about 15% a year of earnings growth against the {need:Viviana Power Tech|8}% the price needs ({label:Viviana Power Tech|fits}), but the growth has never produced cash, the balance sheet needs new equity and the related-party dealings are unresolved."],
        tagline: "A Gujarat power transmission and distribution EPC contractor founded in 2014 by the Choksi family, listed on NSE Emerge in 2022 and on the main board since June 2026, now adding transformer manufacturing.",
        revenue: '₹529cr (FY26, consolidated)',
        products: [
            { name: 'Distribution and transmission EPC', text: "Lines and substations from 33 kV to 400 kV, underground cabling and upgrades of old networks for state utilities, under turnkey contracts where it designs, buys the materials and builds. Its biggest recent order is ₹466.7cr from MGVCL (October 2026) to move 11 kV lines underground." },
            { name: 'Power transformers', text: "A leased plant at Por, Vadodara, inaugurated on 21 September 2026, can make transformers up to 20 MVA (66 and 33 kV), up to 1,000 MVA a year. A greenfield plant for 132 kV transformers (phase 1 about ₹90cr) is planned for the end of FY28. Revenue so far is negligible." },
            { name: 'Battery storage (BESS) projects', text: "Two projects it would own and run: 100 MW/200 MWh for RVUNL in Rajasthan and 65 MW/130 MWh for GUVNL at Asoj, Vadodara, worth about ₹511cr. CRISIL says both are on hold; management expects no revenue this year." },
            { name: 'Subsidiaries being sold', text: "Aarsh Transformers (75%, small distribution transformers) and Viviana Life Spaces (90%, real estate in Vadodara). The board approved selling both in August 2026; the buyer and price are not disclosed." },
        ],
        revenueText: "**Supply of materials was 87% of FY26 standalone revenue** (₹437cr) and services 13% (₹64cr); the company reports one segment. It does not name its top customer or give its share of sales. **About 70% of the order book is in Gujarat**, 16% in Rajasthan and 13% in Punjab (CARE, August 2026). The order book was **₹1,800cr+ on 2 November 2026**, including ₹506cr of BESS; CRISIL put the executable part at ₹750–760cr plus ₹720cr where it was lowest bidder in September. Sales are crowded into the last months of the year: 86% of FY26 income came in H2 and about ₹250cr in March alone. H1 FY27 standalone revenue was ₹189cr, up 173%.",
        mixes: [
            { caption: 'Revenue by type, FY26 standalone (annual report)', parts: [{ label: 'Supply of materials', share: 87 }, { label: 'Services', share: 13 }] },
            { caption: 'Order book by state, August 2026 (CARE)', parts: [{ label: 'Gujarat', share: 70 }, { label: 'Rajasthan', share: 16 }, { label: 'Punjab', share: 13 }, { label: 'Other', share: 1 }] },
        ],
        customers: ["**Gujarat's state power companies**: GETCO (transmission) and the distribution companies DGVCL, MGVCL and PGVCL, mostly under centrally funded schemes.", "**Utilities in other states** (Rajasthan, Punjab, Haryana, Bihar, Uttarakhand) where it is bidding, and the RVUNL and GUVNL battery-storage tenders.", "**Private renewable developers and industry**, a smaller share; it does not give a split."],
        difficulty: { level: 'Medium', text: "Utility qualifications and a record up to 400 kV take years to build, but distribution and cabling jobs are open to many regional contractors on price. Transformers need type tests and utility approvals; it is starting those from scratch in the parent company." },
        moat: "A record with Gujarat's utilities since 2014 and price-variation clauses on 90–95% of orders keep it winning and protected on metal prices. It has no lasting edge over the many contractors bidding the same tenders, and depends on one state.",
        salesDrivers: ["**Order book**: ₹1,800cr+ in November 2026, more than three years of FY26 sales, but ₹506cr of it is battery storage that is on hold, so the work it can actually do is nearer ₹1,300cr.", "**Gujarat's grid spending**: distribution upgrades and underground cabling under central schemes; most bids it is chasing are in Gujarat and Haryana.", "**Guidance**: FY27 revenue of ₹875–910cr (August call); the November call's ₹650cr for H2 implies about ₹840cr. The FY30 target is ₹2,000–2,200cr of revenue and ₹200cr+ of profit, with ₹400–500cr from transformers.", "**Working capital**: limits are almost fully used, so growth depends on collecting faster and on the ₹150cr rights issue.", "**My estimate:** about 15% a year of earnings growth over three years, from FY26 profit of ₹53cr (₹52 a share) to about ₹95cr by FY29 on revenue of about ₹1,050cr at a 9% net margin, less about a fifth more shares from the rights issue. That is well below the ₹200cr-by-FY30 plan, which implies nearly 40% a year: the FY27 target has already slipped, the margin targets were cut twice since June, BESS is stalled, transformers are unproven, and every year of growth has needed borrowed money and now new equity."],
        inputs: "**Conductors, towers, cables, transformers, switchgear and insulators**, bought against each order, plus subcontracted site labour. Materials were 71% of FY26 sales; staff only 1%, as site work is subcontracted.",
        costEffect: "**Mostly passed on**: 90–95% of orders carry price-variation clauses (the contract price moves with agreed metal indices), management says, so availability matters more than price. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (15% to 8%). **What happened:** India's hot-rolled steel price index eased from 100 in Q3 FY24 to 97 in Q1 FY27, while the quarterly margin fell from 21.4% to 13.9% (15.4% in Q2 FY27). Steel was not the cause: as sales grew from ₹66cr to ₹529cr, big supply-heavy distribution orders took materials from 51% to 71% of sales, which lowers the margin percentage.",
        competitors: [{ name: 'Om Power Transmission', note: 'Another Gujarat contractor of similar size, mostly for GETCO, with similar margins.' }, { name: 'KEC International, Kalpataru Projects, Transrail', note: 'Far larger transmission EPC firms that dominate inter-state and 765 kV work.' }, { name: 'Regional Gujarat contractors', note: 'Many small firms bid for the same distribution and cabling tenders; CARE calls the industry fragmented and price-driven.' }],
        position: "**A small regional power EPC contractor**, among the faster-growing in Gujarat, far smaller than the national transmission firms.",
        money: "Borrowings rose from ₹10cr (FY23) to **₹127cr in September 2026**; the card-data net debt is **₹98cr**, including ₹45cr of 12% debentures. **Operating cash was −₹11cr, −₹3cr, −₹14cr and −₹4cr in FY23–FY26** (Screener; CARE puts FY26 at −₹24cr) while sales grew about 15 times, and **−₹7cr in H1 FY27** even as customers paid down ₹225cr. Customers took 268 days to pay in FY26. CARE found limits overdrawn three times and a current ratio below one, cut its rating to BB+ in October 2026 and withdrew it at the company's request; CRISIL rates ₹25cr of bank lines BBB-. Planned spending: about ₹90cr on the transformer plant (₹10cr in FY27), about ₹60cr of equity for BESS, and ₹48cr to buy an office building (in the Life Spaces tower, by management's account). The board approved a **₹150cr rights issue** on 2 November 2026. In FY26 it lent ₹21.5cr to Life Spaces and ₹1.6cr to Aarsh and guaranteed ₹12.6cr of Aarsh's debt, and it is co-borrower on a ₹1.68cr car loan taken by Richi Choksi. Dividend ₹1 a share. Promoters hold **70.79%**, down from 73.2% in September 2022; management says it set up Life Spaces so as not to pledge promoter shares.",
        watch: ["Operating cash turning positive and debtor days staying near the 150 days management now claims.", "Rights-issue price and whether the promoters take up their full share.", "Who buys Life Spaces and Aarsh, at what price, and whether the ₹31.6cr they owe is repaid."],
        charts: constructionPowerCharts['Viviana Power Tech'],
    },
];

export const constructionPowerBusinesses = { intro, profiles };
