import { BusinessProfile, OverviewSection } from './types';
import { logisticsCharts } from './card-data/logistics';

// Tab 2 of the Logistics note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are from each company's latest presentation or call. The cost chart uses India's diesel price index as a rough guide to fuel costs.",
        ],
    },
    {
        heading: 'The services, in plain words',
        body: [
            "Four companies, three very different jobs.",
        ],
        points: [
            {
                label: 'Port terminals and gas distribution',
                text: "Shore tanks and jetties where ships unload LPG, chemicals and ammonia, rented out on long contracts, plus LPG bought abroad and sold to industry, autogas stations and homes (Aegis).",
            },
            {
                label: 'Parcel delivery',
                text: "Collecting parcels from online sellers, sorting them at hubs, trucking them between cities and delivering them to doorsteps, plus part-truckload freight for businesses (Delhivery, Shadowfax).",
            },
            {
                label: 'Quick commerce and local delivery',
                text: "Ten-minute deliveries from small city warehouses (dark stores) for grocery and speciality apps, and same-city vans (Shadowfax, Delhivery).",
            },
            {
                label: 'Contract logistics and freight forwarding',
                text: "Running warehouses, factory supply lines and spare-parts networks for large companies, and booking sea and air freight for them (TVS Supply Chain).",
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
                    ['**Long take-or-pay contracts**', 'Aegis (terminals)', 'Fixed fees for 15–20 years, paid whether or not the tanks are used', 'Monthly'],
                    ['**Per parcel or per tonne**', 'Delhivery, Shadowfax', 'Rate cards by weight and distance; big platforms negotiate hard', 'Credit to large platforms; weekly payouts to riders'],
                    ['**Multi-year service contracts and freight bookings**', 'TVS Supply Chain', 'Cost plus a fee for warehouses; market rates for freight', 'Normal credit terms'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Aegis Logistics',
        inShort: ["**A leading owner of port terminals for LPG (cooking and industrial gas) and liquid chemicals**, which also imports LPG and sells it to factories and businesses across India.", "**Good:** long take-or-pay terminal contracts, profit more than tripled in Q1 FY27 and a large cash pile funding a big expansion. **Watch:** its LPG selling margin jumped from about ₹4,000 to over ₹7,000 a tonne during the Middle East supply crunch, and management says it will stay there; terminal volumes fell 3% in Q1 against a 25% ‘worst case’; outsiders own 55% of Aegis Vopak, where most new tanks sit; on 28 September the board approved raising up to ₹6,000cr in shares, convertibles or debt (EGM vote on 21 October); and on 13 October it agreed to buy 89.8% of Tristar, a Dubai-based liquid-logistics group in 30+ countries (shipping, road tankers, fuel storage, distribution and aviation fuelling; 2025 revenue about US$1.4bn, EBITDA US$257mn, net profit US$82mn) for US$809mn, to complete in Q4 FY27.", "**Verdict: follow.** A strong business, but today's profit leans on a selling margin that has yet to prove it can last once supply returns to normal, and more of the growth lands where Aegis shareholders own less than half."],
        tagline: "Port terminals that store and move LPG, ammonia and liquid chemicals, plus a business that buys LPG abroad and distributes it in India.",
        revenue: '₹8,333cr (FY26, consolidated)',
        products: [
            { name: 'LPG terminals', text: "Refrigerated and pressurised tanks at Mumbai, Kandla, Pipavav, Mangalore and Haldia where ships unload imported LPG, which then leaves by truck, rail or pipeline. An LPG terminal earns a fee on each tonne passing through (its throughput): 1.124 million tonnes in Q1 FY27, down 3% on a year earlier and below Q4's 1.23 million, despite new capacity at Mangalore and Pipavav." },
            { name: 'LPG sourcing and distribution', text: "Buys LPG cargoes abroad and sells the gas to industrial and commercial users across India through franchisees. Distribution volume was a record 2.77 lakh tonnes in Q1 FY27, up 91% in a year." },
            { name: 'Liquid terminals', text: "About 2 million cubic metres of tanks at six ports, rented to companies storing chemicals and petroleum products. Q1 FY27 revenue was ₹178cr, up 24%, its fifth straight quarter of higher EBITDA." },
            { name: 'Ammonia', text: "A 36,000-tonne ammonia terminal at Pipavav, commissioned on 10 August 2026, with a 15-year take-or-pay contract with Hindustan Zinc for a third of it. Aegis built it for ₹525cr and sold it to its Pipavav terminal subsidiary, in which Japan's ITOCHU owns 10%. Aegis plans to sell ammonia to industrial users from the rest, but would not yet give margins." },
        ],
        revenueText: "Gas (LPG and ammonia) was **92% of Q1 FY27 revenue** and liquids 8%. Because gas revenue includes the full value of the LPG it resells, profit is more balanced: gas earned **₹591cr of EBITDA** (81%) and liquids ₹136cr (19%). Within gas, management says terminal throughput earns about ₹1,000 a tonne, distribution over ₹7,000 a tonne, and sourcing adds little. It does not split revenue by port.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27', parts: [{ label: 'Gas (LPG and ammonia)', share: 92 }, { label: 'Liquids', share: 8 }] },
            { caption: 'EBITDA by division, Q1 FY27', parts: [{ label: 'Gas (LPG and ammonia)', share: 81 }, { label: 'Liquids', share: 19 }], note: 'Normalised EBITDA of ₹727cr, from the Q1 FY27 call.' },
        ],
        customers: ["**State oil companies such as HPCL**, which uses the Haldia LPG terminal under an exclusive agreement running to 2038, and other LPG importers who rent tank space.", "**Industrial and commercial LPG users** supplied by the distribution arm, such as the ceramic makers of Morbi; many new private customers were added over the past year. One gas customer was 22% of FY26 revenue, up from 10% in FY25.", "**Chemical and fuel companies** renting liquid tanks, and long take-or-pay users such as **Hindustan Zinc** (ammonia) and a large conglomerate that has committed over 0.5 million tonnes a year through a new rail loading point at Pipavav."],
        difficulty: { level: 'High', text: "Waterfront land at ports is scarce and tightly regulated, and refrigerated LPG and ammonia tanks, jetties and pipeline links take years to approve and build. Once a terminal is tied into pipelines and rail, customers rarely move." },
        moat: "Scarce port land, links to pipelines and rail, and long take-or-pay contracts make its terminals hard to replace, and owning the whole chain from ship to customer let it keep supplying during the Middle East disruption. The weakness is that the distribution margin depends on LPG market conditions, and piped natural gas could slow LPG demand over time.",
        salesDrivers: ["**LPG distribution volume**: it went from 5 lakh to 7.5 lakh tonnes last year; management hopes to cross 1 million tonnes this year and 1.5 million in FY28, and is aiming for 2 million by FY28 or FY29 (in June it said ‘by FY28’), helped by the large new terminals at Pipavav and Mangalore.", "**The distribution margin per tonne**: about ₹4,000 until FY25, over ₹7,000 now. Management says buying in very large gas carriers (much cheaper freight per tonne) will keep it there after the war premium fades. This is the biggest swing factor for profit.", "**Terminal throughput**: management calls 25% volume growth a year its ‘worst case’, more once the Jamnagar–Loni pipeline (now running) and the Kandla–Gorakhpur pipeline (hook-up due this year) carry gas inland. Q1 FY27 throughput actually fell 3%.", "**New capacity**: a ₹1,675cr expansion at JNPA (318,100 cubic metres of liquid tanks, 77,236 tonnes of LPG storage and a bottling plant), a further 52,000-tonne LPG tank there, and more liquid tanks at Mumbai, Kandla, Kochi and Mangalore.", "**India's reliance on imported LPG and chemicals**, plus a new push into selling ammonia to industry, where margins are much higher than for storage."],
        inputs: "**LPG bought for resale** is almost all of its material cost: it buys cargoes abroad at international prices and sells them on in India. The terminals themselves need little besides power and staff. Materials were 77% of sales in FY26.",
        costEffect: "**Passed on.** LPG is priced off international benchmarks and resold month by month (the company says it does not hold stock to bet on prices), so higher gas prices lift revenue more than they hurt profit; terminal fees are charged per tonne handled. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (17% to 9%). **What happened:** India's diesel wholesale price index went from 100 in Q1 FY24 to 119 in Q1 FY27, but diesel barely matters to this business. The margin rose from 9.3% to 30.3% because the distribution margin per tonne jumped from about ₹4,000 to over ₹7,000, distribution volume rose 91% in a year and terminal throughput grew. Because sales include the full value of the LPG it resells, swings in LPG prices and sourcing volume also move the percentage from quarter to quarter.",
        competitors: [{ name: 'State oil companies (IOC, BPCL, HPCL)', note: 'Run their own LPG import terminals and bottling plants; they are also its biggest terminal customers and its rivals in selling LPG to industry.' }, { name: 'Private LPG importers and sellers', note: 'Compete for industrial customers such as the Morbi ceramic makers, who switch to whichever fuel is cheapest.' }, { name: 'Adani and other port groups', note: 'Port operators with their own LPG and liquid terminals, such as Adani at Mundra.' }, { name: 'IMC and other tank-farm companies', note: 'Independent liquid-storage operators competing for chemical and fuel storage at Kandla, Haldia and other ports.' }],
        position: "**A leading independent operator of LPG and liquid terminals in India**, with about 2 million cubic metres of liquid tanks and roughly 2.5 lakh tonnes of LPG storage across seven ports. Kandla is its largest site; Mumbai runs at high utilisation.",
        money: "Screener shows about **₹45cr of net cash**; the company puts its cash and liquid investments at about ₹5,900cr, spread across group companies, against borrowings of ₹4,150cr at March 2026, or about ₹1,790cr of net cash. FY26 free cash flow was ₹1,212cr, its best ever. Cumulative capex is to reach about $1.2bn this year, with a further pipeline of about $5bn to FY31, funded by equity, its own cash and debt while keeping debt near 0.6 times equity. It has also signed a non-binding agreement for a possible ₹20,000cr role in the new Vadhavan port. Much of the building happens in **Aegis Vopak Terminals**, listed in June 2025, where Vopak and public shareholders own **55.29%**; FY26 profit to these minority holders was ₹208cr of ₹1,107cr. Aegis's own construction arm builds terminals and sells them to group companies at in-house prices it calls arm's length (the ammonia terminal for ₹525cr, ₹142.5cr for a JNPA tank, ₹37.2cr for Kochi). Japan's ITOCHU bought 10% of the Pipavav terminal company and plans to go to 25%. On 21 October 2026 CARE put its AA rating on watch with developing implications, while the Tristar purchase and its funding are worked out. On **28 September 2026** the board approved raising up to **₹6,000cr** through shares, convertible bonds or debt, and lifting its borrowing limit to ₹6,000cr, subject to a shareholder vote at an EGM on 21 October. Ratings are CARE AA (stable) and India Ratings AA (positive). Contingent liabilities include ₹98cr of GST and sales-tax demands and a ₹142cr air-pollution case before the Supreme Court. Promoters hold **58.1%**, unchanged since September 2023.",
        watch: ["Whether the ₹7,000-a-tonne distribution margin holds as Middle East supply returns to normal.", "Terminal throughput growing again, and the JNPA expansion (first phase now due in Q3 FY27) arriving on time.", "How the US$809mn Tristar purchase is paid for (the approved ₹6,000cr fund-raise: how much, in what form and at what price), whether it closes in Q4 FY27, and how much new growth sits in Aegis Vopak rather than in Aegis itself."],
        charts: logisticsCharts['Aegis Logistics'],
    },
    {
        company: 'Delhivery',
        inShort: ["**India's largest third-party logistics company**, delivering parcels for online sellers, moving part-truckload freight for businesses and running warehouses.", "**Good:** record volumes, market-share gains after buying Ecom Express, ₹4,677cr of cash and working capital of only nine days. **Bad:** margins are thin; its own adjusted EBITDA halved from ₹151cr in Q4 to ₹76cr in Q1 FY27 as wage and fuel costs rose, its express margin fell below the 16–18% band it called ‘firmly’ reached a quarter earlier, FY26 profit after tax was less than half its treasury income, and its co-founder and operating chief left in September.", "**Verdict: wait.** Profit is still too small to value it on; I want to see margins reach management's targets first."],
        tagline: "A nationwide logistics network: express parcels for e-commerce, part-truckload freight, warehousing and cross-border shipping.",
        revenue: '₹10,508cr (FY26, consolidated)',
        products: [
            { name: 'Express parcels', text: "Door-to-door delivery of online orders (express parcels), including returns, cash collection and same-day and next-day options. It handled 322 million parcels in Q1 FY27, up 55%, partly because Ecom Express was not in the numbers a year earlier; revenue was ₹1,869cr, up 33%, at a 15.6% service margin before corporate costs." },
            { name: 'Part-truckload freight', text: "Carrying loads too small to fill a whole truck (part-truckload, or PTL) for many businesses on shared trucks through its hubs. It moved 542,000 tonnes in Q1 FY27, up 18%, with revenue of ₹633cr, up 25%, as prices rose to nearly ₹12 a kg." },
            { name: 'Supply chain services', text: "Contract logistics: running warehouses and fulfilment centres for brands and handling their orders end to end, under multi-year contracts. About ₹200cr of revenue in Q1 FY27." },
            { name: 'New businesses', text: "Delhivery Local (hiring vans for deliveries within a city, in six cities; about ₹140cr of annual revenue run-rate against a ₹200cr-plus target), Delhivery Direct (a consumer app to send parcels anywhere in India), cross-border shipping, and a finance arm, licensed in July, to help truck owners get loans. Together the new businesses earned ₹32cr of revenue and lost ₹32cr in Q1 FY27." },
        ],
        revenueText: "Of **₹2,931cr of Q1 FY27 revenue** (up 28%), express parcels gave **₹1,869cr (64%)**, part-truckload freight ₹633cr (22%), supply chain services about ₹200cr (7%) and other lines (full truckload, cross-border and new businesses) about ₹229cr. It reports one accounting segment but gives these service-line figures in its presentation. Express is also the most profitable line: a 15.6% service margin against 11.2% in freight, before corporate costs of about 9% of revenue.",
        mixes: [
            { caption: 'Revenue by service, Q1 FY27', parts: [{ label: 'Express parcels', share: 64 }, { label: 'Part-truckload freight', share: 22 }, { label: 'Supply chain services', share: 7 }, { label: 'Other and new businesses', share: 7 }], note: 'From the Q1 FY27 presentation; shares rounded.' },
        ],
        customers: ["**E-commerce marketplaces, direct-to-consumer (D2C) brands and small sellers**: D2C volumes grow 40–45% a year, and most new customers are D2C brands and small businesses. The largest single customer gave 19.2% of FY26 sales, up from 17.7%.", "**Manufacturers, distributors and traders** using part-truckload freight, including brands supplying the warehouses and dark stores of quick-commerce apps.", "**Large companies in e-commerce, industrials and consumer durables** that outsource warehousing; two big new contracts started in Q1 FY27."],
        difficulty: { level: 'High', text: "A national network of sorting hubs, automated sorting machines, thousands of delivery points and routing software took over a decade and years of losses to build. Few rivals now have the scale to match its cost per parcel." },
        moat: "Scale and density: more parcels through the same hubs and trucks lowers the cost of each, and customers moved to it when weaker rivals slipped on service. The weakness is that its biggest customers, the marketplaces, run their own delivery arms and can move volume in-house.",
        salesDrivers: ["**Online shopping growth**: management expects express volumes to grow 20–30% this year, towards the top of that range, with D2C brands growing fastest.", "**Market share**: after buying Ecom Express it says volume is consolidating with the strongest networks, and it gained share both from other logistics firms and from customers' own delivery arms.", "**Freight pricing and network use**: part-truckload yield (price per unit carried) rose 37 paise in Q1 FY27, only 6 paise of it from fuel; management targets a 15–15.5% service margin in this business by the end of FY27, up from 13.4%.", "**Seasonality**: October–December is the peak for parcels and January–March for freight, so the network is expanded in the first half and Q1 margins are usually the weakest.", "**Warehousing contract wins** in e-commerce, cars and consumer durables; new contracts lose money for the first 45–60 days while stock builds up."],
        inputs: "**Services, not materials.** It buys almost no materials (0% of FY26 sales). The big costs are freight, handling and servicing (75% of sales in Screener's split, covering line-haul trucks between hubs, air freight, contract labour and rent) and staff (15%). Contract labour alone was ₹371cr in Q1 FY27.",
        costEffect: "**Mostly passed on, with a lag.** Freight contracts are re-priced every month against the previous month's average diesel price, covering about 97–98% of volume; e-commerce contracts have different terms. Minimum-wage rises have no automatic clause and have to be negotiated. **Rule of thumb:** it buys almost no materials, so the usual materials test gives about 0 points; the fuel-sensitive part, line-haul trucking, was put at around 30% of revenue on the call, so a 10% rise there not passed on would cut the margin by about 3 points (6% to 3%). **What happened:** India's diesel wholesale price index rose from 100 in Q1 FY24 to 119 in Q1 FY27, while the margin rose from -0.7% to 4.7%. Diesel was not the story: volumes grew faster than the fixed network costs, Ecom Express volume was added and freight prices rose. The dip from 7.5% in Q4 FY26 came from a month's lag in fuel pass-through, minimum-wage rises in four states and extra staff for elections and weather, which management put at ₹30–35cr, plus start-up costs on two new warehouse contracts.",
        competitors: [{ name: 'Shadowfax', note: 'The other large national parcel network; stronger in quick-commerce and food deliveries and growing faster from a smaller base.' }, { name: 'Ekart (Flipkart) and Amazon', note: "The marketplaces' own delivery arms, which carry much of their volume and are opening up to outside sellers." }, { name: 'Xpressbees and other parcel firms', note: 'Smaller third-party networks losing share as volume consolidates.' }, { name: 'TCI Express, VRL, Safexpress, Gati', note: 'Established freight carriers competing with its part-truckload business.' }],
        position: "**India's largest third-party express parcel network** and, by its own account, **the second-largest part-truckload freight player**. It says it serves only about 3% of India's shippers, so there is plenty of room to grow.",
        money: "Screener shows **₹1,742cr of net cash**. Capex has fallen from ₹601cr in FY23 to ₹422cr in FY26 (Screener). The company reports ₹4,677cr of cash at June 2026 and no bank term loans; Screener's borrowings are mostly lease liabilities. Integrating Ecom Express (bought for ₹1,369cr in July 2025) was budgeted at about ₹300cr; it cost ₹165cr in all, ending in Q1 FY27. The auditor (Deloitte) gave a clean opinion but noted title deeds of properties bought from FedEx in 2021 still not transferred, and disputed tax dues well above the contingent liabilities shown. Co-founder and operating chief Ajith Pai left in September 2026. The new finance arm is meant to lend mainly through partner lenders, not its own balance sheet. It has **no promoter**: institutions own most of the shares (foreign 42%, Indian 43%).",
        watch: ["Express margin reaching the 16–18% target in the second half of FY27.", "Price rises to cover minimum-wage increases.", "Whether marketplaces pull volume back in-house.", "Any further senior departures after the operating chief's exit."],
        charts: logisticsCharts['Delhivery'],
    },
    {
        company: 'Shadowfax Tech.',
        inShort: ["**A fast-growing delivery company for online shopping, quick commerce and food apps**, using gig riders and its own sorting network across more than 16,000 pin codes.", "**Good:** revenue up 65% in Q1 FY27, a fifth straight quarter above 60%, with margins rising and ₹1,537cr of cash and investments. **Watch:** margins are thin, two customers gave about 64% of FY26 revenue and both run their own delivery arms, Flipkart sold down its stake in July, the auditor flagged that revenue is worked out manually, and it listed only in January 2026, so the record is short.", "**Verdict: follow.** Growth and execution look strong, but two customers give about two-thirds of revenue and the price leaves no room for either to take deliveries in-house; I want a longer record and a broader customer list."],
        tagline: "Asset-light last-mile delivery for e-commerce parcels, quick commerce and food delivery, plus heavy-goods and high-value shipments.",
        revenue: '₹4,202cr (FY26, consolidated)',
        products: [
            { name: 'Express parcels', text: "Delivery and return pickups of online orders for marketplaces and brands. Includes Prime (same-day and next-day delivery for D2C brands, up 2.7 times in a year) and Shadowfax 360, a self-service platform that signed up more than 1,200 small sellers in its first quarter." },
            { name: 'Hyperlocal and quick commerce', text: "Last-mile delivery (the final trip to the customer's door) within a city for quick-commerce and food-delivery apps, often within minutes. Up 53% year on year in Q1 FY27; Amazon Now is a major new customer." },
            { name: 'Prime Large', text: "Delivery of heavy goods such as appliances and furniture in small commercial vehicles. About ₹75cr of annual revenue, up about 170%, now reaching 10,000 pin codes." },
            { name: 'Other logistics', text: "CriticaLog (high-value shipments, bought about 18 months ago) and shared dark stores (small city warehouses for very fast delivery) for specialist brands: 47 live and 20 more on the way, towards 100 this year. Revenue here fell 21.5% in a year to ₹89cr after it wound down experiments." },
        ],
        revenueText: "Q1 FY27 revenue was **₹1,358cr, up 65%**, on **nearly 25 crore orders, up 83%**. Express parcels gave **₹997cr (73%, up 87%)**, quick commerce and food ₹272cr (20%, up 53%) and other logistics ₹89cr (7%, down 21.5%). Dark stores are about 10–12% of other-logistics revenue. Express earns about ₹50 an order, a little less than a year ago as parcels got lighter.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27', parts: [{ label: 'Express parcels', share: 73 }, { label: 'Quick commerce and food', share: 20 }, { label: 'Other logistics', share: 7 }], note: 'From the Q1 FY27 presentation.' },
        ],
        customers: ["**Large e-commerce marketplaces**, who use it alongside their own delivery arms; Amazon is now in its top 10 customers. Two customers (not named) gave about ₹2,709cr, or **64% of FY26 revenue**, up from about 60% in FY25. Flipkart, a related party until the listing, bought about ₹494cr of services in FY26 up to then.", "**Quick-commerce and food-delivery apps**: five or six large quick-commerce players and many specialists in beauty, fashion and pet care. It says it handles over half of the deliveries these apps outsource.", "**D2C brands and small sellers**: more than 400 use Prime and over 1,200 sellers joined Shadowfax 360 in its first quarter. This is the fastest-growing group."],
        difficulty: { level: 'Medium', text: "Riding scooters to doors is easy to copy; what is hard is a dense national network of sorting centres and pin codes, enough riders at peak times, and software that routes millions of orders cheaply. Big platforms can and do build their own." },
        moat: "Density and cost: each new pin code switches on existing clients' orders at once, and it is one of only two national third-party parcel networks that held service through the recent disruption. The weakness is bargaining power: its biggest customers are giant platforms that can take delivery in-house, and its rate cards already cut prices as volumes rise.",
        salesDrivers: ["**Online and quick-commerce growth**: management raised FY27 revenue growth guidance to 38–40% from 27–30%, and guides its after-rent margin up about 1–1.2 points a year to FY28, faster after that.", "**Share gains**: it puts its express parcel share at 28–30%, up from 27–29% a quarter earlier, as volume consolidates with the two big national networks.", "**Outsourcing by platforms**: quick-commerce apps outsource about 12–15% of deliveries today and could go to 20–25%, it says.", "**Coverage**: 716 pin codes added in Q1 FY27 to reach 16,372; each new pin code brings in existing clients' orders straight away.", "**Festive season**: capacity and capex are built up in the first half ahead of the sale-season peak."],
        inputs: "**Services, not materials.** It buys almost no materials (0% of FY26 sales). The largest cost is payouts to delivery partners (gig riders), then line-haul transport between hubs (18.8% of revenue in Q1 FY27), lost and damaged shipments (5.5% of revenue) and staff (9% of FY26 sales).",
        costEffect: "**Mostly passed on.** Many contracts let it pass diesel rises straight through; in Q1 FY27 it chose to absorb the first 5 days. Rider pay is not linked to fuel, but riders expect more when petrol rises, and minimum-wage rises in several states added cost. **Rule of thumb:** it buys almost no materials, so the materials test gives about 0 points; a 10% rise in line-haul transport (18.8% of revenue) not passed on would cut the margin by about 2 points (5% to 3%). **What happened:** India's diesel wholesale price index rose from 100 in Q3 FY25 to 123 in Q1 FY27, while the margin rose from 3.0% to 6.8%. Scale drove it: orders grew much faster than fixed costs, the network got denser, and losses on lost shipments fell from 7.9% to 5.5% of revenue in a year.",
        competitors: [{ name: 'Delhivery', note: 'The largest third-party parcel network and the other big national player; stronger in freight and warehousing.' }, { name: 'Ekart (Flipkart), Amazon and app fleets', note: "The marketplaces' and apps' own delivery arms, which carry most of their volume and decide how much is outsourced." }, { name: 'Xpressbees and other parcel firms', note: 'Smaller third-party networks losing share as volume consolidates.' }],
        position: "**One of India's two large national third-party parcel networks**, with a **28–30% share of express parcels** by its own estimate and, it says, **over half of the deliveries quick-commerce apps outsource**.",
        money: "Screener shows **₹786cr of net cash**; the company reports ₹1,537cr of cash and investments at June 2026 and no bank debt, mostly from its January 2026 listing (₹1,907cr raised, ₹1,000cr of it new money). In July, Flipkart and two other early investors sought to sell up to 9.08% of the shares in block deals. The auditor (B S R) gave a clean opinion but made manually calculated revenue its key audit matter and could not confirm database-level audit trails for January–March 2026. It spends ahead of the festive peak: Q1 FY27 capex was about ₹60cr (a figure raised on the call), 77% of it on sorting centres and automation. Promoters hold **16.5%**, little changed from 16.6% in March 2026.",
        watch: ["Margin gains of about 1–1.2 points a year, as promised.", "The two largest customers’ share of revenue, and any move by them to take delivery in-house.", "Whether dark stores and Prime Large pay off at scale."],
        charts: logisticsCharts['Shadowfax Tech.'],
    },
    {
        company: 'TVS Supply Chain Sol',
        inShort: ["**A contract-logistics company**: it runs warehouses, parts supply to factory assembly lines and spare-parts networks for manufacturers, and forwards freight by sea and air, in 26 countries.", "**Good:** record new business wins, revenue up 29% in Q1 FY27, a pipeline of over ₹7,500cr and a rating outlook raised to positive. **Bad:** thin margins, profit before tax of only about 1% of sales, FY26 profit that leaned on a one-off ₹177cr gain, and an adverse audit remark on a loan to its Thai subsidiary.", "**Verdict: wait.** Management's 4% pre-tax margin target has slipped to FY28 and its supply-chain margin target slipped too; I want to see them delivered."],
        tagline: "Supply-chain services for manufacturers (factory parts supply, warehousing, spare parts) plus global freight forwarding.",
        revenue: '₹11,003cr (FY26, consolidated)',
        products: [
            { name: 'Integrated supply chain solutions', text: "Contract logistics, where it runs a customer's logistics under multi-year contracts: buying and supplying parts to assembly lines (in-plant logistics), storing finished goods and running spare-parts (aftermarket) networks. ₹2,417cr of revenue in Q1 FY27, up 22%." },
            { name: 'Global forwarding solutions', text: "Freight forwarding: booking and managing sea and air shipments on carriers' ships and planes for customers. ₹918cr in Q1 FY27, up 51%, mainly from higher ocean volumes out of India and rising freight rates." },
            { name: 'Technology and 4PL', text: "In some markets it manages a client's whole supply chain, including other providers (known as 4PL), using its own transport-management software, warehouse robotics and a new Oracle ERP in India." },
            { name: 'New ventures', text: "Swamy & Sons 3PL, a logistics firm bought in Q1 FY27, and a joint venture with Italy's ALA Group for aerospace and defence parts, due to start earning in the second half of FY27." },
        ],
        revenueText: "Supply-chain solutions were **72% of Q1 FY27 revenue** and forwarding 28%, but supply chain earns far more: an **8.1% EBITDA margin against 4.1%** for forwarding, so it made about 84% of segment EBITDA. India gave ₹998cr (30%), up 44% year on year, and the rest of the world (Europe and the UK, North America, Asia-Pacific) ₹2,338cr, up 23%. By industry, FY26 revenue came from automotive 32%, consumer 25%, technology 14%, industrial 12%, rail and utilities 8% and healthcare 2%.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27', parts: [{ label: 'Supply-chain solutions', share: 72 }, { label: 'Freight forwarding', share: 28 }] },
            { caption: 'EBITDA by segment, Q1 FY27', parts: [{ label: 'Supply-chain solutions', share: 84 }, { label: 'Freight forwarding', share: 16 }], note: 'Adjusted segment EBITDA of ₹196cr and ₹38cr, from the Q1 FY27 call.' },
        ],
        customers: ["**Manufacturers of cars and motorcycles, industrial goods and consumer products**, for whom it runs factory, warehouse and spare-parts work; recent wins include a premium motorcycle maker in Europe, a kitchen-appliance maker and an Indian beverages company.", "**Renewable and clean-energy companies**, including an Asia-based renewable energy provider won in Q1 FY27.", "**Exporters and importers** using its forwarding arm, such as a packaging group, a telecom equipment maker and an industrial automation company. About two-thirds of new business comes from existing customers."],
        difficulty: { level: 'Medium', text: "Running parts supply inside a customer's plant or a spare-parts network needs process know-how, systems and trained staff, and new contracts take one to two quarters to settle. Freight forwarding is easy to enter and highly competitive." },
        moat: "Once it runs a customer's plant logistics and systems, switching is disruptive, so contracts tend to renew and grow. The weakness is thin margins across the board and a forwarding arm with no real edge, exposed to global freight rates and trade cycles.",
        salesDrivers: ["**New business wins**: a record ₹543cr in Q1 FY27 (21% of the year-earlier quarter's revenue) and a pipeline above ₹7,500cr, of which it usually converts 20–25% within 12–18 months.", "**Customers' production volumes**, since much of its work is tied to factory output; a global recession is the risk management flags most.", "**Freight rates and volumes** in forwarding: Q1 FY27 benefited from higher ocean volumes out of India and rising rates.", "**Guidance**: mid-teens revenue growth in FY27, with the supply-chain margin back to 9% in Q2 and 9.5–10% by Q4.", "**New ventures**: Swamy & Sons and the ALA aerospace joint venture, which management hopes could reach ₹2,000cr of revenue in its fifth year."],
        inputs: "**Mostly services.** Materials, mainly parts bought for customers as part of its supply-chain contracts, were 19% of sales in FY26. Bigger costs are freight, clearing, forwarding and handling (₹991cr in Q1 FY27, about 30% of revenue), staff (23% of FY26 sales) and subcontracting.",
        costEffect: "**Passed on, with a short lag.** Contracts in every country pass fuel and container-cost rises to customers, and wage rises are passed on too; supply-chain prices are also corrected, often in Q4. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 2 points (7% to 5%). **What happened:** India's diesel wholesale price index rose from 100 in Q1 FY24 to 119 in Q1 FY27, while the margin slipped from 7.4% to 6.7%. Fuel was not the driver: the margin moved with start-up costs on new contracts, customer price corrections in Q4, freight-rate swings in forwarding (whose margin went from 2.1% to 4.1% in a year) and cost cutting.",
        competitors: [{ name: 'Mahindra Logistics', note: 'The closest listed Indian contract-logistics peer, strong with car makers.' }, { name: 'DHL Supply Chain, Kuehne+Nagel, DSV', note: 'Global giants in contract logistics and forwarding, far larger and with worldwide networks.' }, { name: 'Allcargo and other Indian forwarders', note: 'Compete for sea and air freight forwarding out of India.' }],
        position: "**A mid-sized global contract-logistics player with Indian roots**, working in 26 countries across four continents, with about 25 million sq ft of warehousing that is roughly 85% used.",
        money: "Screener shows **₹2,031cr of net debt**, but most of it is lease liabilities; excluding leases, net debt was about ₹350–370cr at March 2026, mostly short-term. India Ratings rates it AA and raised the outlook to positive. Capex was ₹278cr in FY26 (Screener); most warehouses are leased and backed by customer contracts, and lease depreciation and interest take most of operating profit. FY26 profit of ₹117cr included a one-off ₹177cr gain on infrastructure-trust units; the business itself earned about ₹69cr. The auditor's CARO report made an adverse remark on a ₹5.63cr loan to its Thai subsidiary that was renewed to settle overdue dues. Managing director Ravi Viswanathan retired after the Q4 FY26 call; Vikas Chadha succeeded him. It is merging wholly owned subsidiaries into the parent, with no new shares issued. Promoters hold **43.0%**, down slightly from 43.4% in September 2023.",
        watch: ["Supply-chain margin back to 9% in Q2 and 9.5–10% by Q4.", "Progress toward a 4% pre-tax margin, now targeted for FY28.", "Freight rates, and a possible global slowdown hitting forwarding."],
        charts: logisticsCharts['TVS Supply Chain Sol'],
    },
    {
        "company": "Allcargo Global",
        "inShort": [
            "**The world's largest LCL consolidator**: through ECU Worldwide it fills shared containers with small shipments from freight forwarders on about 2,400 direct sea routes, plus full-container and air freight, mostly outside India.",
            "**Good:** about 14.5% of the global LCL market by its own count, an asset-light model, and operating profit back above zero (₹28cr in Q1 FY27 against a ₹32cr loss a year earlier). **Bad:** a **₹290cr net loss in FY26**, an operating margin of 0.1%, LCL volumes about 10% below two years ago, ₹942cr of net debt including leases, and no profit guidance.",
            "**Verdict: wait.** A real market leader, but it lost money last year and management itself needs 12–15% more volume before returns look normal; I want two clean quarters of profit and falling debt first."
        ],
        "tagline": "A global less-than-container-load (LCL) sea freight consolidator, demerged from Allcargo Logistics and listed in July 2026, that also does full-container and air forwarding.",
        "revenue": "₹12,758cr (FY26, consolidated)",
        "products": [
            {
                "name": "LCL consolidation",
                "text": "Its core: it books whole containers from shipping lines and sells space by the cubic metre to forwarders, running fixed weekly or fortnightly sailings on about 2,400 direct routes. Average shipment is 3–4 cubic metres. Management calls it the most profitable product, with the lowest working capital."
            },
            {
                "name": "Full container load (FCL)",
                "text": "Forwarding whole containers. Less than 1% of a fragmented global market, lower margins, and more exposed to the Middle East, where volumes fell sharply in 2026."
            },
            {
                "name": "Air freight",
                "text": "A small line that moves with LCL demand; margins sit between LCL and FCL."
            },
            {
                "name": "Digital platform",
                "text": "Its own booking system (ECU360) takes about 70% of export bookings; management says no rival LCL player runs fully in-house software."
            }
        ],
        "revenueText": "Revenue mostly passes ocean freight through to customers, so management tells investors to watch **gross profit per cubic metre or per container**, not revenue. Q1 FY27 revenue was ₹3,522cr and gross profit ₹733cr. **About 15% of the business is in India and 80–85% abroad**; LCL and FCL split roughly two-thirds and one-third by management's description. Year on year in Q1 FY27, LCL volume fell about 4% and FCL about 13%, while quarter on quarter LCL and air rose about 5% and FCL 1%.",
        "mixes": [
            {
                "caption": "Business by location (approximate, Q1 FY27 call)",
                "parts": [
                    {
                        "label": "Outside India",
                        "share": 85
                    },
                    {
                        "label": "India",
                        "share": 15
                    }
                ],
                "note": "Management said 80–85% sits outside India."
            },
            {
                "caption": "LCL vs FCL (approximate, Q1 FY27 call)",
                "parts": [
                    {
                        "label": "LCL",
                        "share": 67
                    },
                    {
                        "label": "FCL",
                        "share": 33
                    }
                ],
                "note": "Management's 'two-thirds, one-third' description; air is small and not split out."
            }
        ],
        "customers": [
            "**Freight forwarders worldwide**, who lack the volume to fill their own containers and buy LCL space from it; no customer is named or sized.",
            "**Shippers using its FCL and air services**, with growth in Latin America, transatlantic lanes, Southeast Asia and India offsetting weaker Europe and the US."
        ],
        "difficulty": {
            "level": "High",
            "text": "Running scheduled LCL sailings needs steady cargo on each route, like an airline needs passengers; management says that density takes decades to build and only a handful of global players have it."
        },
        "moat": "Network density and the in-house booking platform make it hard for a newcomer to match its schedules, and shipping lines carry only a tiny share of LCL. But the moat has not protected profit: volumes have shrunk with world trade, and the business earned almost nothing in FY26.",
        "salesDrivers": [
            "**World trade volumes**: the industry's LCL volume fell about 13–14% over two years by management's estimate; the base case is no market growth for 12 months.",
            "**Yield per unit**: management says today's gross profit per cubic metre can be held, so profit rises with volume; it will publish a monthly yield index.",
            "**Freight rates**: higher rates usually mean fuller containers and better margins; disruption in the Middle East cut FCL volume but lifted rates.",
            "**Costs**: staff and admin to stay flat in dollar terms using offshoring to India and AI tools.",
            "**Recovery target**: management says 12–15% more volume would put returns back toward the 20%-plus return on capital it used to earn."
        ],
        "inputs": "**Ocean and air freight bought from carriers**, the bulk of costs: gross profit was about 21% of Q1 FY27 revenue, so carrier and direct costs took about 79%. The rest is staff and admin (about ₹705cr a quarter), mostly in euros and dollars.",
        "costEffect": "**Passed on; the risk is volume, not cost.** Freight is a pass-through priced per cubic metre or container, and higher freight rates have usually meant better container fill and more profit, not less. **Rule of thumb:** with gross profit at about 21% of revenue, a 10% rise in carrier costs not passed on would wipe out more than the whole operating profit; in practice it is repriced within weeks. **What happened:** operating margin was 2.4% in FY25, 0.1% in FY26 and 0.8% in Q1 FY27 as volumes, not costs, moved. Rupee swings change reported costs because most are in euros and dollars.",
        "competitors": [
            {
                "name": "Other global LCL consolidators",
                "note": "A handful of long-established networks; the company calls itself the leader with about 14.5% share."
            },
            {
                "name": "Shipping lines (Maersk, MSC and others)",
                "note": "Handle big FCL accounts directly but carry only a tiny share of LCL, management says."
            },
            {
                "name": "Global forwarders such as DHL, Kuehne+Nagel, DSV",
                "note": "Large in FCL and air, where Allcargo Global has under 1% share."
            }
        ],
        "position": "**World's largest LCL consolidator** by its own count, about 14.5% global share, with offices in 60-plus countries through ECU Worldwide.",
        "money": "Screener shows **₹1,338cr of borrowings** at March 2026, of which ₹399cr is leases, against ₹396cr of cash and short-term investments, so **net debt of about ₹942cr including leases**; the company put net debt at about ₹570cr at June 2026 excluding leases, with consolidated gross debt of ₹942cr, mostly working capital. Customers took 57 days to pay in FY26. Operating cash was ₹89cr in FY26 after nothing in FY25 and −₹220cr in the eight months of FY24. Management plans to cut net debt 'significantly' in two to three quarters through working capital and $10–15m of warehouse and office sales. Large past acquisitions left goodwill and other non-cash charges: depreciation was ₹190cr in FY26. No dividend. Promoters hold **63.28%**.",
        "watch": [
            "Two quarters in a row of operating profit and a shrinking net loss.",
            "The monthly yield index and LCL volume recovery.",
            "Net debt falling from ₹570cr (company basis) and who buys the properties being sold."
        ],
        charts: logisticsCharts["Allcargo Global"],
    },
    {
        "company": "Glottis",
        "inShort": [
            "**A Chennai freight forwarder** that books sea and air cargo, mostly imports from Asia into India, for Indian companies, especially renewable-energy equipment makers, and is now buying its own trucks and containers.",
            "**Good:** Q1 FY27 revenue rose 39.5%, it has about ₹47cr of net cash after the IPO, and the shares trade at about 13 times earnings. **Bad:** FY26 revenue fell 23% and profit 32%, **operating cash was −₹69cr in FY26** as customers took 87 days to pay (41 in FY25), container volume fell 17% year on year, the top five customers are 29% of revenue, and the MD and CFO gave conflicting figures on the same call.",
            "**Verdict: pass.** A small forwarder with no clear edge, shrinking volumes and profit that is not turning into cash; the low P/E does not make up for that."
        ],
        "tagline": "A Chennai-based freight forwarder, founded in 2004 and listed in October 2025, handling sea imports from Asia plus exports, air freight and trucking.",
        "revenue": "₹723cr (FY26, standalone)",
        "products": [
            {
                "name": "Sea imports",
                "text": "Booking container space and handling customs and delivery for goods shipped into India, mostly from the Far East. ₹165cr in Q1 FY27, up 24%."
            },
            {
                "name": "Sea exports",
                "text": "Outbound containers, growing fastest toward the US and Africa. ₹47cr in Q1 FY27, up 83.5%."
            },
            {
                "name": "Air freight",
                "text": "Air imports and exports, about 5% of revenue but more than doubling."
            },
            {
                "name": "Road transport and warehousing",
                "text": "Its own trucks for first- and last-mile delivery (80 vehicles at June 2026, up from 17 in December 2025) and a new warehousing line (₹0.9cr in Q1)."
            }
        ],
        "revenueText": "**Sea imports were 70% of Q1 FY27 revenue**, sea exports 20%, air 5% and trucking 5%. **Asia was 84%**, North America about 10%, Europe 3% and Africa 2%. The Q1 jump came from higher freight rates and richer shipments, not volume: it handled 21,841 containers (TEUs) against 26,278 a year earlier and 31,402 in Q4 FY26. Renewable energy is the largest industry served: the CFO put it at 38% of Q1 revenue (the MD said about 13%), and the IPO papers put it at about 47.5% of FY25 revenue. The top five customers were about 29%.",
        "mixes": [
            {
                "caption": "Revenue by service, Q1 FY27 (company call)",
                "parts": [
                    {
                        "label": "Sea imports",
                        "share": 70
                    },
                    {
                        "label": "Sea exports",
                        "share": 20
                    },
                    {
                        "label": "Air freight",
                        "share": 5
                    },
                    {
                        "label": "Road and warehousing",
                        "share": 5
                    }
                ]
            },
            {
                "caption": "Revenue by region, Q1 FY27 (company call)",
                "parts": [
                    {
                        "label": "Asia",
                        "share": 84
                    },
                    {
                        "label": "North America",
                        "share": 10
                    },
                    {
                        "label": "Europe",
                        "share": 3
                    },
                    {
                        "label": "Africa",
                        "share": 2
                    },
                    {
                        "label": "Rest",
                        "share": 1
                    }
                ]
            }
        ],
        "customers": [
            "**Renewable-energy companies** importing solar and related equipment from Asia, the largest group (38% of Q1 revenue by the CFO's figure).",
            "**Consumer durables (10%), chemicals (7%) and engineering (8%) companies**, with 260 new customers added in Q1 and about 75% of business from repeat customers.",
            "Management wants the top five customers down from about 29% to 15–20% in two to three years."
        ],
        "difficulty": {
            "level": "Low",
            "text": "Freight forwarding needs relationships, licences and working capital, but no special assets; anyone with carrier contacts can compete, and price usually decides."
        },
        "moat": "None to speak of. Its edge is relationships with Indian importers on Asian routes; buying trucks and containers may make service steadier but also adds asset and utilisation risk.",
        "salesDrivers": [
            "**Freight rates**: higher rates lifted revenue per shipment in Q1 FY27 even as volume fell.",
            "**Solar and renewable imports**: its largest industry, which swings with India's solar build-out and import rules.",
            "**New lanes and services**: exports to the US and Africa, air freight, and new offices in Hyderabad, Kolkata and Ahmedabad.",
            "**Owned assets**: ₹132cr of IPO money for trucks and containers, containers from Q3 FY27.",
            "**Guidance**: FY27 revenue above FY25's ₹941cr and a slightly better margin."
        ],
        "inputs": "**Freight bought from shipping lines and airlines**, mostly on spot terms, plus trucking, handling and customs charges. Operating costs were about 93% of revenue in FY26.",
        "costEffect": "**Partly passed on, with risk.** It buys space mostly at spot prices; the IPO papers note some fixed-rate customer contracts that do not automatically pass on fuel or freight rises. **Rule of thumb:** with costs at about 93% of revenue, a 10% rise in freight cost not passed on would wipe out the whole margin. **What happened:** the operating margin was about 10% in most of FY25, fell to 2.8% in Q3 FY26, and recovered to 7% in Q1 FY27.",
        "competitors": [
            {
                "name": "Allcargo group, Transport Corporation of India",
                "note": "Larger Indian logistics groups named in its IPO papers as peers."
            },
            {
                "name": "Global forwarders (DHL, Kuehne+Nagel, DSV and others)",
                "note": "Much larger networks competing for the same Indian importers."
            },
            {
                "name": "Many small local forwarders",
                "note": "A fragmented market where price often decides."
            }
        ],
        "position": "**A small, mid-tier Indian forwarder**: about 1.1 lakh TEUs in FY25, concentrated on Asia-to-India sea imports.",
        "money": "Screener shows ₹53cr of borrowings at March 2026 against about ₹100cr of cash and short-term investments, so **net cash of about ₹47cr**, mostly unspent IPO money. **Operating cash was −₹69cr in FY26** and free cash −₹89cr, as receivables rose to ₹188cr (87 days of sales; 77 days at June). Over FY23–FY26 it made ₹204cr of operating profit but turned out −₹32cr of operating cash. The IPO raised ₹160cr fresh at ₹129 a share; ₹132cr goes to trucks and containers by March 2027. No dividend. Promoters hold **74.23%**, unchanged since listing.",
        "watch": [
            "Container volume (TEUs) turning back to growth.",
            "Receivable days falling back toward 40 and operating cash turning positive.",
            "Consistent figures from management between the MD and CFO."
        ],
        charts: logisticsCharts["Glottis"],
    },
    {
        "company": "Blue Water Logistics",
        "inShort": [
            "**A Hyderabad freight forwarder** that books sea and air cargo for Indian exporters and importers, runs a leased fleet of about 1,700 ISO tank containers for liquid chemicals, and moves containers by road and rail.",
            "**Good:** revenue nearly doubled to ₹386cr in FY26 and Q1 FY27 alone brought ₹211cr, backed by real volume growth, at a P/E near 16. **Bad:** operating cash was negative in three of four years (−₹53cr in FY26), customers take about 134 days to pay, debt tripled and is guided to nearly double again, and the promoters' new overseas entities and a warrant issue came soon after a 'debt only' promise.",
            "**Verdict: pass.** Growth is real and the price low, but operating cash was −₹53cr in FY26, customers take 134 days to pay, warrants followed the CFO's 'debt only' promise, and it bought into a Thai company run by its promoters without calling it a related-party deal."
        ],
        "tagline": "A Hyderabad-based multimodal freight forwarder, founded as a partnership in 2010 and listed on NSE's SME platform in June 2025, that books ocean and air cargo and runs a leased fleet of ISO tank containers.",
        "revenue": "₹386cr (FY26, standalone)",
        "products": [
            {
                "name": "Ocean freight forwarding",
                "text": "Books container space with shipping lines for exporters and importers and arranges the paperwork and delivery; about 70% of revenue. It handled 5,757 containers (counted in 20-foot units) in Q1 FY27, up 264% on a year earlier."
            },
            {
                "name": "Air freight",
                "text": "Books cargo space on airlines, mainly for Hyderabad's pharma makers, helped by an exclusive tie-up with Turkish Airlines; 13% of FY26 revenue and 21% in Q1 FY27 (930 tonnes, up 520%)."
            },
            {
                "name": "NVOCC and ISO tanks",
                "text": "Acts as a carrier in its own right using about 1,708 ISO tank containers (steel tanks in a frame for liquid chemicals), bought on seven-year instalment deals; 8% of FY26 revenue but only 4.6% in Q1 FY27, with tank use at 83–84%."
            },
            {
                "name": "Road, rail and customs",
                "text": "Over 100 container trailers (used at above 90%) plus hired trucks, rail freight and customs clearance; together about 4% of Q1 FY27 revenue. It is starting project cargo (a ₹15cr job for HSIL) and dry containers."
            }
        ],
        "revenueText": "**Ocean freight was about 70% of FY26 and Q1 FY27 revenue**, air freight 13% in FY26 rising to 21% in Q1, NVOCC 8% falling to 4.6%, and road, rail and customs the rest. Growth comes mostly from new branches (Mumbai, Ahmedabad, Indore, Tada, Nellore) and new customers added in the second half of FY26. **About 85% of business is with direct customers** and the rest comes from other freight forwarders, by the MD's count; before the IPO, freight forwarders were about a third of revenue and the largest single customer 23–24%. Almost all billing is in India; it has a Dubai office, a new Thai associate and a Tanzanian subsidiary.",
        "mixes": [
            {
                "caption": "Revenue by service, Q1 FY27 (CFO on the call)",
                "parts": [
                    {
                        "label": "Ocean freight",
                        "share": 70
                    },
                    {
                        "label": "Air freight",
                        "share": 21
                    },
                    {
                        "label": "NVOCC / ISO tanks",
                        "share": 5
                    },
                    {
                        "label": "Road, rail and customs",
                        "share": 4
                    }
                ]
            },
            {
                "caption": "Revenue by service, FY26 (approximate, management)",
                "parts": [
                    {
                        "label": "Ocean freight",
                        "share": 70
                    },
                    {
                        "label": "Air freight",
                        "share": 13
                    },
                    {
                        "label": "NVOCC / ISO tanks",
                        "share": 8
                    },
                    {
                        "label": "Road, rail and customs",
                        "share": 9
                    }
                ],
                "note": "Management's rounded shares; the last slice is the remainder."
            }
        ],
        "customers": [
            "**Indian exporters and importers** in confectionery and food (where it calls itself a leading forwarder), chemicals, pharma, crockery, engineering, paper and textiles; Q1 FY27 additions included Gujarat Ambuja Cement, HFCL, Mukand Steel and Toshiba.",
            "**Other freight forwarders**, who resell its space: about 15% of business now by the MD's estimate, and 34–35% before the IPO.",
            "**Concentration:** the top customer was about 23% of revenue and the top ten about 52–55% in FY24 and H1 FY25 (prospectus); no later figure is disclosed."
        ],
        "difficulty": {
            "level": "Low",
            "text": "Freight forwarding needs relationships with shipping lines and airlines, a branch network and working capital, but little else; thousands of Indian firms do it. ISO tank operation is more specialised but is entered by leasing tanks, as Blue Water itself did in 2025."
        },
        "moat": "Thin. It owns no ships or planes and resells space at a margin of about 11%; customers can switch on price and service. Its edge is doing every step in-house for mid-sized exporters, a niche in confectionery and chemicals, and fast-rising volumes, none of which stops a rival from copying it.",
        "salesDrivers": [
            "**Branch openings and new customers**: most of the FY26–Q1 FY27 jump came from branches opened in the last year; Kerala, Goa, Kolkata and Mangaluru are still uncovered.",
            "**Freight rates**: revenue includes the freight it passes on, so higher sea and air rates lift sales without lifting profit much; the MD said vessel shortages from China's export surge would make Q2 uneven.",
            "**Guidance**: FY27 revenue to roughly double again (FY26: 97% growth), margins flat or slightly better; in May the MD said about 100% growth for the next two years and NVOCC rising to about 20% of revenue and air freight to about 30% in FY27.",
            "**Overseas offices**: Indonesia, Vietnam, Malaysia, Thailand and China planned, plus East Africa; these are early and loss-making at first, by management's own account.",
            "**Fleet**: ISO tanks to grow from about 1,708 to 5,000-plus within three years, on instalment deals."
        ],
        "inputs": "**Freight bought from shipping lines and airlines**, plus truck hire, port and handling charges and tank instalments. In FY26 these and all other running costs were about ₹330cr (85% of sales) and staff about ₹12cr (3%).",
        "costEffect": "**Pass-through, with a thin spread.** It quotes customers a price over what it pays carriers, so rate swings mostly change revenue, not profit; the risk is when it has booked space and rates fall, or customers resist an increase. **Rule of thumb:** with about ₹89 of every ₹100 of sales going to carriers and running costs, a 1% rise in costs not passed on takes nearly a point off the 11% margin. **What happened:** the operating margin moved between 8% and 14% by quarter from Q3 FY25 to Q1 FY27, and slipped to 11.2% in Q1 FY27 from 12.9% a year earlier as new branches and more outsourced air freight were added.",
        "competitors": [
            {
                "name": "Allcargo / ECU Worldwide",
                "note": "India's largest consolidator and NVOCC, with a global network Blue Water lacks."
            },
            {
                "name": "Global forwarders (DHL, Kuehne+Nagel, DSV)",
                "note": "Serve large multinational accounts with their own networks and IT."
            },
            {
                "name": "Listed SME forwarders and tank operators",
                "note": "Many small peers compete on price for the same exporters; ISO tank operators include global firms such as Stolt and local lessors."
            }
        ],
        "position": "A small but fast-growing forwarder: ₹386cr of FY26 revenue against an Indian freight-forwarding market measured in lakhs of crores. Tank use is 83–84% and trailer use above 90%, by management's count.",
        "money": "Borrowings were **₹108cr at March 2026**, up from ₹37cr a year earlier, against about ₹16cr of cash, so net debt was about ₹92cr; management expects debt to reach about ₹200cr by March 2027, at 8.5–10%, from Axis Bank and Citibank, with HSBC in talks. **Operating cash was −₹53cr in FY26** on ₹44cr of operating profit, and negative in three of the four years shown, because customers take about 134 days to pay (up from 70–84 days) and it gets no advances; receivables were ₹141cr at March and about ₹220cr by late July. The IPO raised about ₹40cr at ₹132–135 in May 2025 for trucks and working capital, and 10 lakh warrants at ₹410 (about ₹41cr) were approved in August 2026. ISO tanks are bought on seven-year instalments, kept in capital work in progress rather than shown as leases (it is not on Ind AS). Management says it has a BBB+ rating; I did not find the rationale. No dividend. Promoters hold **69.55%**, unchanged since listing, with no pledge.",
        "watch": [
            "Operating cash turning positive and receivables back under 90 days of sales while revenue doubles.",
            "Whether NVOCC really rises toward the 20% of revenue promised in May (4.6% in Q1), and the margin holds at 11% or more.",
            "Who receives the ₹410 warrants, and any money moving to the Thai associate and Tanzanian subsidiary where the promoters are directors."
        ],
        charts: logisticsCharts["Blue Water Logistics"],
    },
    {
        "company": "Skyways Air Services",
        "inShort": [
            "**India's largest air freight forwarder**: it books cargo space on about 56 airlines for exporters and importers, and also handles ocean freight, express parcels and trucking, through about 9,500 customers.",
            "**Good:** air export volume grew 23% in Q1 FY27 against 3.8% for India, its share rose to 6.2%, and IPO money cut debt. **Bad:** it keeps only about 4–5 rupees of every 100 as operating profit, revenue swings with fuel surcharges, five years turned only 45% of operating profit into cash, and the company and a listed subsidiary are accused in an open criminal case alleging bribery and over-invoicing.",
            "**Verdict: avoid.** An open police case alleges bribes and over-invoicing of at least ₹44cr, and its customs status was suspended this year; with a 4% margin at about 28 times earnings, nothing here is worth that governance risk."
        ],
        "tagline": "A Delhi-based freight forwarder founded in 1984 that is India's largest by air export volume, with ocean, express, trucking and pharma cold-chain arms; listed on NSE and BSE in September 2026.",
        "revenue": "₹2,813cr (FY26, consolidated)",
        "products": [
            {
                "name": "Air cargo",
                "text": "Buys space on passenger and freighter flights and sells it to shippers with pick-up, customs and delivery: ₹2,166cr in FY26 (77%) and 80% in Q1 FY27, when it moved 23,486 tonnes at an average ₹416 a kg (₹259 a year earlier, mostly higher fuel surcharges)."
            },
            {
                "name": "Ocean cargo",
                "text": "Container bookings with shipping lines, run with its subsidiary Forin Container Line and listed subsidiary Brace Port Logistics: ₹423cr (15%) in FY26; Q1 FY27 volume grew 18% and revenue 63%."
            },
            {
                "name": "Express, trucking and other",
                "text": "Courier and parcel service (₹163cr in FY26; 59,700 shipments across 31 locations in Q1), trucking (₹39cr), warehousing and value-added services; a pharma cold-chain warehouse is due next."
            },
            {
                "name": "Pharma logistics (Odyssey)",
                "text": "51% of Mumbai-based Odyssey Logistics, bought in April 2025 with ₹55cr of term loans, lifted pharma to about 23% of business from 8–9%; Odyssey's own revenue was ₹182cr in Q1 FY27."
            }
        ],
        "revenueText": "**Air cargo is 77% of FY26 revenue** (80% in Q1 FY27), ocean 15%, express 6% and trucking, warehousing and services the rest. Revenue mostly passes through what it pays airlines and shipping lines, so it rises and falls with freight rates: FY24 revenue fell below FY23's as rates eased, and of Q1 FY27's 90% jump management put only 23–25% down to volume. Customers are widely spread: **the top ten were 20.7% of FY26 revenue** (11.6% in FY25). Pharma, textiles and garments, cars and parts, and consumer electronics are the main cargoes. It has offices in Hong Kong, Thailand, Vietnam, Cambodia, Bangladesh, the UAE, Saudi Arabia, the UK and Germany.",
        "mixes": [
            {
                "caption": "Revenue by service, FY26 (prospectus)",
                "parts": [
                    {
                        "label": "Air cargo",
                        "share": 77
                    },
                    {
                        "label": "Ocean cargo",
                        "share": 15
                    },
                    {
                        "label": "Express",
                        "share": 6
                    },
                    {
                        "label": "Trucking and other",
                        "share": 2
                    }
                ]
            },
            {
                "caption": "Revenue by service, Q1 FY27 (presentation)",
                "parts": [
                    {
                        "label": "Air cargo",
                        "share": 80
                    },
                    {
                        "label": "Ocean cargo",
                        "share": 13
                    },
                    {
                        "label": "Express",
                        "share": 5
                    },
                    {
                        "label": "Trucking and other",
                        "share": 2
                    }
                ]
            }
        ],
        "customers": [
            "**About 9,500 active shippers** (from about 7,400), named in the prospectus as including Parle, Britannia, Tata Motors, Eicher, Honeywell and JCB; top ten 20.7% of FY26 revenue.",
            "**Pharma exporters**, about 23% of business since the Odyssey purchase.",
            "**Carriers on the other side:** Lufthansa, Qatar Airways, Air India, Turkish, Virgin Atlantic, British Airways, Air France-KLM among its top ten suppliers, who took 49% of its cost of service in FY26."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Anyone can be a forwarder, but buying space in bulk at good rates needs tonnage, airline contracts with volume incentives (it has them with Air India, Saudia, Lufthansa and Qatar) and enough working capital to pay airlines before customers pay; scale is the barrier."
        },
        "moat": "Scale with airlines. As India's largest air consolidator it gets capacity and volume rebates others cannot, which it says won customers when the Gulf war cut about 20% of air capacity. But it owns no planes, margins are 4–5%, and global forwarders and many local rivals compete for the same shippers.",
        "salesDrivers": [
            "**Volumes**: air export tonnage grew 43% in FY26 and 19% in Q1 FY27 against 3.8% for India; management aims to keep outgrowing the market and 'try to give a volume guidance' each quarter.",
            "**Freight rates and fuel**: Brent rose from $61 to $110 between January and May 2026; fuel is passed on, so revenue swings with it in both directions (FY26 air yield fell 8%, then Q1 FY27 rose 60%).",
            "**India's air cargo push**: the government targets 10 million tonnes in five years from about 4 million.",
            "**Overseas offices**: ₹30cr approved for China, Malaysia, the Philippines and two other Asian markets (EBITDA break-even in 15–18 months, profit in 2–3 years) and ₹20cr for the UAE, Saudi Arabia and Vietnam.",
            "**ASAP platform**: an online booking tool for smaller shippers in smaller cities, due by about November."
        ],
        "inputs": "**Airline and shipping-line freight**, which is about **89% of sales** as cost of service in FY26, plus trucking and handling. The top ten carriers took 49% of that cost. Staff were about 4% of sales.",
        "costEffect": "**Pass-through on a thin spread.** Fuel and freight increases go to customers through surcharges, but management said it absorbs some of the rise to keep customers. **Rule of thumb:** with about ₹89 of every ₹100 of sales paid to carriers, a 1% rise in freight cost not passed on would wipe out about a fifth of the 4.6% operating margin. **What happened:** the yearly operating margin held between 3.8% and 4.6% over FY22–FY26 through big rate swings, and was 4.1% in Q1 FY27 when fuel nearly doubled.",
        "competitors": [
            {
                "name": "DHL Global Forwarding, Kuehne + Nagel, DSV, Expeditors",
                "note": "Global forwarders with their own worldwide networks; Skyways says it is the only Indian firm in WorldACD's global top 50 (44th)."
            },
            {
                "name": "Allcargo Logistics",
                "note": "Larger in ocean consolidation, smaller in air."
            },
            {
                "name": "Listed peers (TVS Supply Chain, Mahindra Logistics, Delhivery)",
                "note": "Different mixes but compete for shippers' logistics budgets; most earn a higher operating margin than Skyways' 4–5% but lower returns on capital."
            }
        ],
        "position": "**India's No. 1 air freight forwarder** by WorldACD chargeable weight, with **6.2% of India's air exports** in Q1 FY27 (5.6% in FY26, 4.6% in FY25), and 44th in the world.",
        "money": "At March 2026 borrowings were **₹627cr** against about ₹397cr of cash and deposits (₹267cr of it pledged to lenders), so net debt was about **₹230cr**; the fresh issue of ₹399cr in August 2026 was mainly for repaying debt (about ₹140cr repaid by September) and working capital, which should leave it near net cash. **Over FY22–FY26 it turned ₹181cr of operating cash out of ₹406cr of operating profit (45%)**, though FY26 was strong at ₹114cr. Customers take about 75 days to pay (56 in FY22). Routine capex is ₹35–40cr a year. It guarantees about ₹135cr of subsidiaries' bank lines. CRISIL rates it A/Stable (upgraded in 2026) and CARE A/Stable. The ₹583cr IPO at ₹138 included ₹184cr of shares sold by the promoters and two directors; the shares trade about 24% below the issue price. Brace Port, its 51%-owned SME-listed subsidiary, is down 35% from its 2024 issue price. Promoters hold **56.82%**, with no pledge.",
        "watch": [
            "The Economic Offences Wing case and SEBI's response to the complainant: any charge sheet against the company or Brace Port.",
            "Air volume growth staying near 20% as fuel surcharges fade, with the operating margin at 4% or more.",
            "Finance cost falling after the IPO repayment, and operating cash staying positive."
        ],
        charts: logisticsCharts["Skyways Air Services"],
    },
    {
        "company": "Leap India",
        "inShort": [
            "**India's dominant pallet-pooling company**: it rents out about 9 million wooden pallets plus plastic crates, containers and electric forklifts to about 1,000 manufacturers, warehouses and retailers, collecting, repairing and re-sending them across 10,500 sites.",
            "**Good:** about 90% of India's pooled pallets, no customer lost since starting, built-in yearly price rises of 5–6%, a 49–50% operating margin, revenue up 18% in Q2 FY27 (22.5% on the company's count), and India Ratings raised it to A+ in October. **Bad:** depreciation and interest take most of that, so return on capital is about 8%; net debt was ₹1,144cr; a promoter-family company formed in 2025 sold it ₹94.5cr of assets in FY26; and the shares trade near 98 times earnings.",
            "**Verdict: wait.** A real moat, but the price needs far more growth than an 8% return on capital supports, and I want the related-party purchases to shrink before buying."
        ],
        "tagline": "A Mumbai-based pallet, crate and forklift pooling company founded in 2013 by ex-CHEP executive Sunu Mathew, backed by KKR, which bought CHEP's Indian business in 2025 and listed in August 2026.",
        "revenue": "₹730cr (FY26, consolidated)",
        "products": [
            {
                "name": "Pallet pooling",
                "text": "Rents about 9 million wooden pallets, either kept at one site ('static hire', a daily rent) or moved with the goods to the next customer ('movement hire', higher-yielding); Leap collects, repairs and reuses them. Rental was ₹417cr in FY26 (57% of revenue); yield was ₹1.54 per pallet per day in Q1 FY27."
            },
            {
                "name": "Container and crate pooling",
                "text": "Plastic crates, foldable large containers and utility boxes, mainly for car and component makers; ₹154cr (21%) in FY26, boosted by CHEP India's book. Growth is being held back because crate prices have nearly doubled."
            },
            {
                "name": "Forklift rental (TARON)",
                "text": "About 1,440 lithium-ion electric forklifts and other handling equipment rented through subsidiary TARON; ₹111cr (15%) in FY26 and ₹35.3cr in Q1 FY27, up 33%. Lower margin but better return on capital, per management."
            },
            {
                "name": "Product sales",
                "text": "Sells some pallets and containers to customers who insist on owning them (₹35cr, 5% of FY26), which management expects to return to pooling later."
            }
        ],
        "revenueText": "**Pallet rental is about 57% of FY26 revenue**, containers 21%, forklifts 15% and outright sales 5%. FY26 revenue rose 56%, much of it from the CHEP India purchase (January 2025); management now guides 20%-plus, with pallet pooling alone at 17–18%. Revenue is seasonal: about 22% in Q1, 24% Q2, 25% Q3 and 29% Q4. Customers span 38 industries; **the top ten were 26.7% of FY26 revenue**, down from 39.5% in FY24. Contracts run one to five years with yearly price rises tied to a German wood price index. Almost all revenue is in India; Gulf entities are set up but deployment is paused by the war.",
        "mixes": [
            {
                "caption": "Revenue by line, FY26 (prospectus)",
                "parts": [
                    {
                        "label": "Pallet rental",
                        "share": 57
                    },
                    {
                        "label": "Container rental",
                        "share": 21
                    },
                    {
                        "label": "Forklift rental",
                        "share": 15
                    },
                    {
                        "label": "Product sales",
                        "share": 5
                    },
                    {
                        "label": "Other",
                        "share": 2
                    }
                ]
            }
        ],
        "customers": [
            "**FMCG, beverage and food companies** (a major cola maker, Gulf Oil, dairies, noodle and confectionery makers), the core of pallet pooling.",
            "**Car and component makers** (Bosch, Autoliv, Lear, Minda), about 20% of revenue after the CHEP purchase, targeted at 22–25%.",
            "**Logistics and e-commerce firms** (DP World, DHL, Yusen, Blinkit/Zomato), plus textiles, paints, agro and seeds; 48 new customers were signed in Q1 FY27 against a usual 18–20."
        ],
        "difficulty": {
            "level": "High",
            "text": "Pooling only pays with a dense national network to collect and redeploy pallets cheaply; Leap has 10,500 touchpoints and 28 depots built over about 12 years, and says only a handful of companies worldwide run this model. Buying pallets is easy; recovering them is not."
        },
        "moat": "Strong in India: network density, about 90% of pooled pallets after absorbing CHEP, and customers whose suppliers and warehouses all use the same pallets. The weak spot is economics, not competition: the assets are costly and long-lived, so returns depend on keeping each pallet moving and on prices rising faster than timber.",
        "salesDrivers": [
            "**Palletisation of Indian supply chains**: only about 14–17% of goods move on pallets against about 90% in developed markets, and each Indian pallet moves about 0.4 times a year against about 4 globally.",
            "**Movement hire**: management aims to move 3.7 million pallets in FY27 against about 2.9 million in FY26; movement hire rose only 8% in Q1 because textiles slowed.",
            "**Price**: contracts carry 5–6% yearly increases; 24 contracts renewed in Q1.",
            "**Pool growth**: about 850,000 net pallets planned for FY27, and utilisation at 89.2% (aiming for 90–92%).",
            "**Gulf**: licences in Saudi Arabia and the UAE; ₹150–200cr of revenue hoped for in three years, on hold while the war lasts.",
            "**Acquisitions**: the board is looking at targets in India and abroad, with more news promised in Q2–Q3."
        ],
        "inputs": "**Timber and plastic for new pallets and crates**, bought as fixed assets (₹76cr of capex in Q1 FY27, ₹110cr a year earlier), some of it from promoter-group company Plenova. Running costs in FY26 were staff 18% of sales and other costs 29% (transport ₹77cr, repairs ₹40cr, contract labour ₹28cr, warehouse rent), plus ₹204cr of depreciation and ₹94cr of interest below the operating line.",
        "costEffect": "**Mostly protected on price, exposed on capex.** Contracts raise rents 5–6% a year on a wood price index, so running costs are passed on with a lag. Dearer timber and plastic hit the cost of new assets instead, cutting return on capital: crates that cost ₹650 now cost ₹1,000–1,200, so Leap is buying fewer. **Rule of thumb:** each 1% of extra yearly rent adds about ₹7cr, nearly all to operating profit. **What happened:** the yearly operating margin stayed between 48% and 56% from FY21 to FY26 and was 51% in Q1 FY27; return on capital stayed at 7–8%.",
        "competitors": [
            {
                "name": "CHEP (Brambles)",
                "note": "The global leader; its Indian arm was bought by Leap in January 2025."
            },
            {
                "name": "Smaller Indian poolers and pallet makers",
                "note": "Leap puts its share of pooled pallets at about 90%; most pallets in India are cheap one-way pallets that customers own."
            },
            {
                "name": "Forklift rental firms and OEMs",
                "note": "Compete with TARON in material-handling equipment."
            }
        ],
        "position": "**India's largest pallet-pooling company with about 90% of pooled pallets** (about 9 million of 10 million), and No. 1 in car-component container pooling after CHEP; 14.9 million assets in all, at 89.2% utilisation.",
        "money": "Net debt was **₹1,144cr at March 2026** including lease liabilities, against ₹1,006cr of equity. The IPO's ₹480cr of new money (August 2026) includes up to ₹360cr for repaying debt. Over the five years Screener shows (FY21 and FY23–FY26) it turned ₹911cr of operating cash out of ₹1,024cr of operating profit (89%), but free cash was negative in three years (−₹94cr in FY26) because it keeps buying pallets, and lease payments (₹93cr of principal in FY26) are counted separately. Customers took 131 days to pay in FY26, 119 at June and 122 at September (company); the CEO now promises under 90 days by March 2027. After the IPO, ₹360cr repaid debt; debt is about 0.5 times equity and net debt about 1.9 times operating profit (company, October 2026). On 26 October it agreed to buy the businesses of Vimprotech (plastic pallets and moulds) and TIPS (pooling) for ₹142cr of equity value; in FY26 they had ₹47cr and ₹18cr of revenue. Return on capital is about 8%. **₹94.5cr of FY26 fixed-asset purchases came from Plenova, a company set up in January 2025 within the founder's promoter group.** The IPO at ₹159 was mostly KKR selling (₹1,999cr); the shares trade about 18% below it. No dividend. Promoters hold **55.64%**; Matyas's shares are to be re-pledged after lock-in.",
        "watch": [
            "Plenova: how much of Leap's asset buying still goes through the founder's company.",
            "Return on capital rising above 8% as movement hire and utilisation rise and debt is repaid.",
            "20%-plus growth each quarter (18% on Screener in Q2 FY27), the Vimprotech and TIPS purchase closing, and the Gulf subsidiaries.", "Customer payment days falling from 122 to under 90 by March 2027, as promised."
        ],
        charts: logisticsCharts["Leap India"],
    },
];

export const logisticsBusinesses = { intro, profiles };
