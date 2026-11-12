import { BusinessProfile, OverviewSection } from './types';
import { industrialMachineryCharts } from './card-data/industrial-machinery';

// Tab 2 of the Industrial Machinery note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are from each company's latest presentation or call.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "These companies make machines that other factories use to make things.",
        ],
        points: [
            {
                label: 'CNC machine tools',
                text: "Computer-controlled machines that cut metal into precise parts. **Turning centres** spin the metal against a cutting tool; **machining centres** move a spinning cutter over the metal. **Five-axis** machines can cut complex shapes such as turbine blades in one setting. The computer that controls them (the **controller**) mostly comes from Fanuc, Siemens or Mitsubishi.",
            },
            {
                label: 'Textile spinning machinery',
                text: "The complete line that turns raw cotton into yarn: blow room, carding, drawing, combing, roving and ring spinning. Mills buy it as one matched line and then need spares for decades.",
            },
            {
                label: 'Packaging machines',
                text: "Machines that turn plastic film into bags and pouches, and that seal them, for food, dairy and consumer brands.",
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
                    ['**Small job shops and factories**', 'Macpower, Jyoti', 'List prices; competitive', 'Advances before building (Macpower)'],
                    ['**Aerospace, defence and large manufacturers**', 'Jyoti, LMW (aerospace)', 'Negotiated for capability', 'Milestones; export licences can delay'],
                    ['**Spinning mills**', 'LMW', 'Negotiated per line; spares from a list', 'Advances; fast'],
                    ['**Packaging converters worldwide**', 'Mamata', 'Negotiated per machine', 'Advances and letters of credit'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'LMW',
        inShort: ["**India's leading maker of textile spinning machinery**, plus CNC machine tools, a foundry and a fast-growing aerospace parts unit.", "**Good:** ₹1,970cr of net cash, no debt, and spares that sell through any downturn. **Bad:** the textile cycle is near its low, so FY26 profits were thin (a 5% operating margin) and the recovery is slow; meanwhile cash is going into loss-making overseas units, group-company purchases and a plan to enter unrelated businesses.", "**Verdict: wait.** Profits are near the bottom of the cycle, but the price already assumes a faster recovery than the gradual one management expects."],
        tagline: "Lakshmi Machine Works: complete textile spinning lines, CNC machine tools and castings, and aerospace components for export.",
        revenue: '₹3,207cr (FY26, consolidated)',
        products: [
            { name: 'Textile spinning machinery', text: "The whole spinning line, from cleaning raw cotton (blow room) through carding, drawing, combing and roving to the ring frames that spin yarn, sold as one matched set to spinning mills. About a quarter of this division's sales are spares and service for the machines already running." },
            { name: 'CNC machine tools', text: "Metal-cutting turning and machining centres, mainly for car and car-parts makers (56% of the division's sales), with a newer J-series range for electronics manufacturing." },
            { name: 'Foundry', text: "Heavy iron castings used in its own machines and sold to outside customers; about 8% of the machine-tool-and-foundry segment." },
            { name: 'Aerospace parts (Advanced Technology Centre)', text: "Precision metal parts (80% of the unit's sales) and composite parts (20%) for aircraft makers and their suppliers, about 90% exported." },
        ],
        revenueText: "In Q1 FY27 textile machinery brought in **₹482cr (54% of divisional sales)**, machine tools and foundry **₹343cr (39%)** and aerospace **₹60cr (7%)**. Within textile machinery, **26% was spares**, 64% machines sold in India and 10% machines exported. Machine tools grew 37% and aerospace 30% on a year ago, faster than textiles (16%).",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27 (company, standalone)', parts: [{ label: 'Textile machinery', share: 54 }, { label: 'Machine tools and foundry', share: 39 }, { label: 'Aerospace parts', share: 7 }] },
            { caption: 'Textile machinery sales by type, Q1 FY27 (company)', parts: [{ label: 'Machines sold in India', share: 64 }, { label: 'Spares', share: 26 }, { label: 'Machines exported', share: 10 }] },
        ],
        customers: ["**Indian spinning mills**, which buy a full line and then run it for twenty years or more; their spending depends on cotton prices, yarn demand, state subsidy schemes (Gujarat, Odisha, Madhya Pradesh) and trade deals.", "**Car and car-parts makers** and general engineering firms for machine tools, plus electronics makers for the newer J-series.", "**Overseas aircraft makers and their suppliers** for aerospace parts, which make up about 90% of that unit's sales. The company does not name them."],
        difficulty: { level: 'Very high', text: "A spinning line is a set of machines that must work together at high speed and be commissioned as one process. Only five companies worldwide do this at scale. Aerospace parts need years of customer approval before the first order." },
        moat: "Mills do not mix suppliers within a line, and the installed base buys spares and service every year whatever the cycle, so customers stay; spares were 26% of textile sales in Q1 FY27, and CRISIL notes strong brand recall among Indian mills. The weakness is that new-machine demand is highly cyclical: today the division runs at only about 60% of capacity and earned ₹9.8cr on ₹1,801cr of sales in FY26.",
        salesDrivers: ["**The textile spending cycle**: mills buy new lines when yarn demand, cotton prices and state subsidies line up. On the July call management said it is “not seeing a sharp uptick” but expects “a gradual increase in spindle absorption”.", "**Order book**: the textile division held ₹3,400cr of secured orders at September 2026, of which ₹2,600cr are active (₹2,400cr in June), each backed by a 10% deposit; about 70% are expansion projects. Textile sales rose 38% in Q2 FY27, but management is still 'cautious' about the next six months.", "**Spares and service** from the installed base: 26% of textile sales, and steady in a downturn.", "**Aerospace growth**: the order book has grown from ₹360cr to about ₹1,000cr, to be delivered over three to three and a half years (about ₹900cr of it export); management spoke of visibility of “thousands of crores” without a firmer figure. About 70% of the work is conversion only, with the customer supplying the material. A new ₹150cr facility is being built over 18–24 months.", "**Machine tools**: running at 75–80% of capacity; H1 FY27 sales rose 43% to ₹794cr (with the foundry), management now speaks of about 50% growth for the year, and it is adding about 10% capacity in an existing building; autos still take a little over half."],
        inputs: "**Castings (partly from its own foundry), steel, and bought-in parts** such as motors, drives, electronics and bearings, some of them imported, so a stronger dollar and euro raise its costs. Materials were 62% of sales in FY26.",
        costEffect: "**Partly passed on.** Aerospace and foundry contracts carry price-revision clauses and machine-tool prices are revised, but textile orders are taken months ahead from mills that are still under strain. On the Q1 FY27 call management said input costs had risen 3–3.5% because of the Middle East conflict and that it is offsetting this mainly through cost savings. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (5% to about −1%), enough to wipe out its operating profit. **What happened:** India's iron-and-steel castings price index barely moved (100 in Q1 FY24 to 102 in Q1 FY27), yet the margin swung from 9.2% to a low of 1.9% in Q1 FY25 and back to 7.4%. The swing came from volume: quarterly sales fell from about ₹1,190cr to ₹670cr when mills stopped ordering, leaving a large fixed cost base unabsorbed.",
        competitors: [{ name: 'Rieter, Trützschler, Saurer (Europe) and Toyota (Japan)', note: 'The global spinning-machinery majors; strongest in exports and at the premium end. LMW leads in India.' }, { name: 'Chinese spinning-machinery makers', note: 'Cheaper machines that compete on price, mainly outside India; LMW has a loss-making subsidiary in China.' }, { name: 'Ace Micromatic, Jyoti CNC and imported machines', note: 'Rivals in CNC machine tools, where LMW is a mid-sized player.' }],
        position: "**India's leading spinning-machinery maker** (CRISIL) and one of the few in the world that supplies a complete spinning line. Indian makers as a whole hold under 25% of India's textile-machinery market by value, because weaving and knitting machines are mostly imported. A small but growing aerospace supplier.",
        money: "No borrowings. Screener shows **₹1,970cr of net cash** counting ₹706cr of investments. The ₹150cr aerospace facility is funded from its own cash; no equity has been raised. CRISIL rated it **AA/Stable** in August 2026. The Dubai (LMW Global) subsidiary lost ₹32cr in FY26 and about ₹6cr in Q1 FY27, and China lost ₹7cr in Q1 on ₹11cr of sales; $30m more is going into a UAE holding company. **Related party:** it bought ₹162.8cr from group company Lakshmi Electrical Control Systems in FY26 and sought shareholder approval for up to ₹450cr over FY27–FY28. The auditor's FY26 opinion is clean. Promoters hold **30.8%**, little changed from 31.1% in September 2023.",
        watch: ["Textile orders and utilisation climbing from about 60% (still about 60% in Q2 FY27).", "Aerospace order book growing beyond ₹1,000cr and the new plant starting on time.", "Losses at the China and Dubai subsidiaries, purchases from group company Lakshmi Electrical Control Systems (up to ₹450cr approved), and whether the board's new resolution to explore EVs, pharma and specialty chemicals leads anywhere."],
        charts: industrialMachineryCharts['LMW'],
    },
    {
        company: 'Mamata Machinery',
        inShort: ["**India's leading maker of machines that turn plastic film into bags and pouches**, and of packaging machines that fill and seal them, selling to 80+ countries.", "**Good:** real technology (patents, recyclable-film machines), high gross margins and no net debt. **Bad:** North American sales shrank on US tariffs, and customers are now delaying deliveries, so FY26 margin fell to 9%, Q1 FY27 was a loss and it has missed guidance twice in a row.", "**Verdict: wait.** Wait for US orders and deliveries to recover before paying for a turnaround."],
        tagline: "Bag and pouch-making machines, form-fill-seal packaging machines and blown-film lines for the flexible-packaging industry.",
        revenue: '₹233cr (FY26, consolidated)',
        products: [
            { name: 'Converting machines', text: "Machines that cut and seal plastic film into bags and pouches (zipper, stand-up, spout and flat-bottom pouches). Its original business; it ranks among the top five makers in the world." },
            { name: 'Packaging machines', text: "Form-fill-seal machines that make a pouch, fill it with snacks, powders or liquids and seal it, sold to food, pet-food and personal-care brands." },
            { name: 'Blown-film lines (co-extrusion)', text: "Lines that make the multi-layer plastic film itself, including a 9-layer line for fully recyclable single-material film (RecTech)." },
            { name: 'Spares and service', text: "Attachments, spare parts and after-sales service for its 5,400+ installed machines." },
        ],
        revenueText: "In FY26 **converting machines were 47% of revenue**, packaging machines 21%, blown-film lines 15%, spares and attachments 14% and service 3%. By region, **India was 37%, North America 26%** (37% a year earlier) and the rest of the world 38%. About 65% of each year's sales fall in the second half.",
        mixes: [
            { caption: 'Revenue by product, FY26 (company, consolidated)', parts: [{ label: 'Converting machines', share: 47 }, { label: 'Packaging machines', share: 21 }, { label: 'Blown-film lines', share: 15 }, { label: 'Spares and attachments', share: 14 }, { label: 'Service', share: 3 }] },
            { caption: 'Revenue by region, FY26 (company)', parts: [{ label: 'India', share: 37 }, { label: 'North America', share: 26 }, { label: 'Rest of world', share: 38 }], note: 'Shares as published; they add to 101 because of rounding.' },
        ],
        customers: ["**Converters**: film and pouch makers that supply packaging to consumer brands; they buy converting machines and blown-film lines.", "**Brand owners** in snacks, dairy, pet food, home and personal care, who buy packaging machines; one leading snacks brand took 4 machines in FY26 and has 18 more lined up.", "**Export customers in North America, Europe, the Middle East and Africa** (63% of sales). The top five accounts make up about 21% of revenue."],
        difficulty: { level: 'High', text: "Sealing thin recyclable film at high speed without leaks needs precise control of heat, time and pressure, which it has patented in Europe. It is also the only Indian maker whose machines meet the pre-USFDA 3A dairy hygiene standard. Fabrication is outsourced; design, software and testing are in-house." },
        moat: "Patents, in-house software and more output per rupee keep it among the top global brands in bag and pouch machines; it says it is the most expensive maker in India yet still wins orders. The weakness is that it sells one-off capital goods with only a small share of repeat spares, so orders dry up when customers stop spending.",
        salesDrivers: ["**Customer spending in the US**: tariffs froze orders through FY26's busiest ordering months, US, Canadian and Mexican business roughly halved, and North America fell from 37% to 26% of sales. Exports earn a gross margin of about 60% against 42–43% in India. Management expects the US to come back in FY27 and guided for about 15% growth and a margin back near 20%; the order book entered FY27 at ₹90cr, up 34% but below ₹144cr in September 2025. Its November 2025 guidance (a margin of about 14% and about ₹64cr of packaging machines) was missed, at 8.2% and about ₹48–49cr.", "**New markets**: a first packaging order from South Africa, a target of about US$1m in South-East Asia, and a tie-up with German packager Carpentier to show machines to European buyers.", "**Plastic prices**: a jump in polymer prices after the West Asia conflict squeezed converters' cash, so they asked to delay deliveries in Q1 FY27.", "**Recyclable packaging rules**: RecTech received 100% recyclability certification in the EU in August 2026 and awaits US certification; brand trials take 12–18 months.", "**Domestic packaging demand**: grew 55% in FY26 and is guided to grow 30–40% in FY27, as brands move from rigid to flexible packs."],
        inputs: "**Bought-in servo drives, controls, pneumatics and electronics from global brands**, plus machined and fabricated steel parts from about 250 local suppliers. Materials were 45% of sales in FY26.",
        costEffect: "**Mostly passed on.** Machines are custom-built and priced project by project with a gross margin of 55–61%, and management says most recent cost increases were passed to customers; the margin moves far more with sales volume, the share of US sales and fixed costs such as trade shows (4.5% of sales in FY26). **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (9% to 4%). **What happened:** India's hot-rolled steel price index fell slightly (100 in Q2 FY24 to 96 in Q1 FY27), yet the margin fell from 39.6% to −13%. The cause was lower US sales, heavy trade-show and staff costs, and delayed deliveries in a seasonally weak quarter, not steel.",
        competitors: [{ name: 'Totani (Japan), Lemo (Germany), Hudson-Sharp (US)', note: 'Global rivals in bag and pouch-making machines, usually at higher prices.' }, { name: 'Windmöller & Hölscher, Reifenhäuser (Germany); Kabra Extrusiontechnik, Rajoo Engineers (India)', note: 'Rivals in blown-film lines; the Indian two are larger in this product.' }, { name: 'Nichrome and other Indian packaging-machine makers', note: 'Compete for form-fill-seal machines sold to Indian food brands.' }],
        position: "**India's number one maker of converting and packaging machines** and among the top five worldwide in bag and pouch machines.",
        money: "Screener shows **₹15cr of net cash**; the company, which has only ₹8cr of borrowings, put its cash at ₹69cr at the end of FY26. The model is asset-light: capex was only ₹7cr in FY26. It listed in December 2024 through a sale of existing shares, so no new money was raised. It holds earnings calls only half-yearly, so there was no Q1 FY27 call. **Related parties:** it buys from and pays several firms owned by relatives of directors and managers, in amounts of up to about ₹2–3cr each, and director pay of about ₹5.4cr was roughly a third of FY26 profit. The auditor's FY26 opinion is clean and contingent liabilities are negligible. Promoters hold **62.45%**, unchanged since listing, with no pledge.",
        watch: ["US orders returning after the tariff freeze.", "Delayed deliveries being shipped in the second half of FY27.", "RecTech winning its first commercial orders after brand trials.", "Director pay (about a third of FY26 profit) and purchases from directors' relatives' firms against profit."],
        charts: industrialMachineryCharts['Mamata Machinery'],
    },
    {
        company: 'Jyoti CNC Auto.',
        inShort: ["**India's largest maker of CNC metal-cutting machines**, from entry-level lathes to 5-axis machines, with its own foundry in Rajkot and Huron, a French 5-axis maker.", "**Good:** fast growth, a ₹4,848cr order book and an operating margin of about 25% over the past year (21% for the group in Q1 FY27 after currency losses; 27% in India), helped by aerospace and defence (37% of sales). **Bad:** almost none of its profit turns into cash, borrowings have risen to ₹853cr, Huron is under a French judicial investigation that its auditor links to a going-concern doubt, and a promoter has 6.7% of the company pledged.", "**Verdict: wait.** The business is strong, but the cash drain and the Huron risk are not yet reflected in the price."],
        tagline: "India's biggest CNC machine-tool maker, with an in-house foundry, 200+ machine models and a French subsidiary for high-end 5-axis machines.",
        revenue: '₹2,093cr (FY26, consolidated)',
        products: [
            { name: 'CNC turning and turn-mill centres', text: "Machines that spin a metal part and cut it to shape; the high-volume entry and mid-range products, sold widely to car-parts and engineering firms." },
            { name: 'Vertical and horizontal machining centres', text: "Machines that cut a fixed part with a rotating tool, including large double-column machines for railways, power and heavy engineering." },
            { name: '5-axis and multi-tasking machines', text: "High-end machines that cut complex shapes, such as turbine blades and aircraft parts, in one setting. Made in India and by Huron in Strasbourg, France." },
            { name: 'Automation and software', text: "Loading robots and gantries, and its own Industry 4.0 and collision-prevention software sold with the machines." },
        ],
        revenueText: "In Q1 FY27 **aerospace and defence were 37% of revenue** (30% a year earlier), cars and car parts 35% and general engineering 17%. Aerospace and defence are also **38% of the order book**. It shipped **5,550 machines in FY26** (4,072 in FY25) at an average of about ₹35.6 lakh each in India. The company does not split revenue between India and Huron.",
        mixes: [
            { caption: 'Revenue by customer industry, Q1 FY27 (company, consolidated)', parts: [{ label: 'Aerospace and defence', share: 37 }, { label: 'Cars and car parts', share: 35 }, { label: 'General engineering', share: 17 }, { label: 'Electronics (EMS)', share: 6 }, { label: 'Others, incl. die and mould', share: 5 }] },
        ],
        customers: ["**Aerospace and defence companies** in India and abroad, including ordnance factories, Indian aerospace firms and European missile maker MBDA (first orders in Q1 FY27), served by both Jyoti and Huron.", "**Car and car-parts makers and general engineering firms**, many of them replacing machines bought in 2000–05; the Indian market crossed 1,000 machine orders in a single month in July, and Jyoti booked over 250 in Rajkot alone.", "**Electronics makers (EMS)**, a newer market waiting on the government's component incentive scheme. It has more than 1,40,000 machines installed across 60+ countries."],
        difficulty: { level: 'High', text: "Entry-level machines are made by many firms, but accurate 5-axis machines for aerospace need years of design know-how and customer approval. The controller, the machine's electronic brain, is still bought from Japan or Germany; Jyoti is developing its own controller, drives and motors, about two years from commercial use, and has applied for a government incentive worth about half the plant cost." },
        moat: "Scale, the widest Indian range, its own foundry and 29 sales-and-service centres make it the default Indian choice, and aerospace buyers rarely switch once a machine is approved. The weakness is dependence on imported controllers and export licences for high-end machines.",
        salesDrivers: ["**Capacity**: the plant ran at 86% of its 6,000 machines a year in Q1 FY27 (above 100% in Q4 FY26). An extra 10,000 machines of capacity was due by the end of September 2026 (no commissioning filing seen by 30 September), and management guides for 25–30% sales growth in FY27 at about a 25% margin.", "**Aerospace and defence spending** in India and Europe, where machines earn higher prices and margins.", "**Replacing old and imported machines**: imports were 62% of India's machine-tool use last year, and machines bought in 2000–05 are now being replaced. Management expects ₹2,500–3,000cr of new orders in FY27.", "**Electronics manufacturing**: a large potential demand for small, fast machines, but orders wait on approvals under the component incentive scheme.", "**Export licences at Huron**: every Huron export needs an end-user licence, now slow to arrive, and about ₹100cr of finished machines wait for customers in China and Turkey. Huron is guided to ₹300–325cr of FY27 revenue at an 8–10% margin."],
        inputs: "**Castings from its own foundry** (made from pig iron and scrap), plus bought-in **controllers from Fanuc and Siemens**, spindles, ball screws and guideways, many imported from Japan and Taiwan. Materials were 45% of sales in FY26.",
        costEffect: "**Partly passed on.** Owning the foundry keeps casting costs in-house, and machines are priced order by order, but imported parts cost more when the rupee weakens and the order book is long. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (25% to 20%). **What happened:** India's iron-and-steel castings price index was flat (100 in Q1 FY24 to 102 in Q1 FY27). The margin rose from 7.7% to about 25–31% through FY25 on scale and more aerospace work, then slipped to 21.5% in Q1 FY27 because of a ₹10cr currency loss and costs at Huron, which could not bill about ₹35cr of finished machines (group adjusted operating profit was ₹119cr against ₹145cr for the Indian business alone), not because of material prices.",
        competitors: [{ name: 'Ace Micromatic, Bharat Fritz Werner, LMW', note: 'Indian rivals, strongest in entry and mid-range turning and machining centres; one has built a 10,000-machine plant at Hosur.' }, { name: 'DMG Mori, Mazak, Okuma and other Japanese, German, Korean and Taiwanese makers', note: 'Dominate the high end in India through imports; Taiwan and Korea supply most very large machines. Jyoti is trying to replace them.' }, { name: 'Chinese machine imports', note: "About 30% of India's machine-tool imports; compete hard on price." }],
        position: "**India's largest listed machine-tool maker**, with about 10% of the Indian CNC market by management's estimate, and one of very few Indian makers of 5-axis machines.",
        money: "Screener shows **net debt of ₹716cr** (the company puts it at about ₹700cr and says it will not rise in FY27, keeping debt below twice operating profit). The new capacity costs about ₹450cr, with roughly ₹150cr plus upkeep still to spend. Inventory was built nine months ahead, so operating cash flow over five years was roughly zero against ₹1,469cr of operating profit; management expects about half of FY27 operating profit to turn into cash. Borrowings were ₹853cr at March 2026 against ₹304cr two years earlier, and FY26 interest was ₹70cr. It raised equity at its January 2024 listing. **Auditor's warning:** the FY26 standalone auditor added an emphasis of matter that the French holding company may not be a going concern, because of Huron's losses, the judicial investigation and machines under customs control; Jyoti India has ₹341.6cr invested in it and ₹160.1cr lent, not written down. €3.02m of Huron's funds and two properties are seized. Promoters hold **62.55%**, unchanged since March 2024, but promoter Anilkumar Virani has **6.7% of the company pledged** to HDFC Bank for a personal business loan. Infomerics rates its bank lines A+/Stable.",
        watch: ["The outcome of the French export-control investigation at Huron, and any write-down of the ₹500cr the parent has in it.", "Operating cash flow turning clearly positive as inventory is worked down.", "The new 10,000-machine capacity filling up, and progress on its own controller.", "The promoter's 6.7% pledge being released rather than raised."],
        charts: industrialMachineryCharts['Jyoti CNC Auto.'],
    },
    {
        company: 'Macpower CNC',
        inShort: ["**A Rajkot maker of entry and mid-range CNC machines** averaging about ₹20 lakh each, sold mostly to small engineering workshops and car-parts firms.", "**Good:** debt-free, sales up 56% in Q1 FY27 and 40% in Q2, an order book of ₹476cr (+36%), FY27 growth guidance raised to about 35%, margins up from 13% to about 17%, and it builds nothing without an advance. **Watch:** its plant is nearly full, 259 days of stock left only ₹3cr of free cash in FY26, and it competes in the most crowded, price-driven part of the market.", "**Verdict: follow.** A well-run small company, but only ₹36cr of operating cash came from ₹109cr of profit over FY22–FY26 (33%), though FY26 converted 41%; the price already assumes the new plant and higher margins arrive on time, and I would buy only once operating cash covers most of its profit."],
        tagline: "Entry and mid-range CNC turning and machining centres for small workshops, with a growing premium range and a push into defence.",
        revenue: '₹333cr (FY26, standalone)',
        products: [
            { name: 'CNC turning centres', text: "Machines that spin a metal part and cut it to shape, including twin-spindle and turn-mill versions; the core of its range." },
            { name: 'Machining centres (VMC and HMC)', text: "Machines that cut a fixed part with a rotating tool, plus double-column machines for large parts." },
            { name: 'NEXA premium range', text: "Higher-priced, higher-accuracy machines, now about 40% of the order book by value and lifting the average price per machine." },
            { name: '5-axis, grinders and automation', text: "A small number of 5-axis machines (one or two a year), grinders, vertical lathes, loading gantries and its own Macatrol controller." },
        ],
        revenueText: "The company does not split revenue by product or customer industry. It can make about **2,500 machines a year** and built roughly 1,800–1,950 in FY26 at about ₹20 lakh each. Q1 FY27 revenue was ₹95cr, up 56% on a year ago, and the order book stood at **₹456cr** at the end of June 2026 (up 32%), about 16 months of FY26 sales. Management guides for more than 30% sales growth in FY27.",
        customers: ["**Small and mid-sized engineering workshops** (job shops) that machine parts for bigger manufacturers, which the company serves through 10 branches and 8 technology centres.", "**Car and car-parts makers** (over 1,250 customers), die-and-mould shops, farm-equipment and pump makers.", "**Defence and aerospace**: 200+ machines supplied to 35 defence factories and 100+ to HAL and ISRO sites; ₹304cr of defence and aerospace bids are under evaluation."],
        difficulty: { level: 'Medium', text: "Entry-level CNC machines are made by many Indian and foreign firms and differ mainly on price, delivery and service. Macpower makes 40–45% of a machine's parts in-house and aims for 75–80%. Accuracy for defence work needs air-conditioned assembly and approvals, and it cannot buy Fanuc or Mitsubishi controllers for 5-axis machines." },
        moat: "Low cost, quick delivery and a dense service network keep small workshops loyal, because they cannot afford a machine standing idle. The weakness is thin product differentiation: most of what it sells can be bought from a dozen rivals.",
        salesDrivers: ["**Small-workshop spending**, which rises and falls with manufacturing activity and credit; Macpower refuses to sell on long credit.", "**Capacity**: the plant makes 2,500 machines a year and will be over 90% used this year. A new 13-acre site (about ₹50cr, due within 12 months, around Q2 FY28) removes bottlenecks. A larger plant for up to 10,000 machines waits on a 60-acre government land allotment that is still pending.", "**Premium mix**: NEXA machines at 40% of the order book raise the average selling price.", "**Defence tenders**: ₹304cr of bids under evaluation against a small defence order book today.", "**Electronics manufacturing**, if the component incentive scheme brings new factories."],
        inputs: "**Castings, ball screws, linear guideways and spindles**, much of the motion hardware imported from Taiwan (it holds about a year's stock), and **controllers from Fanuc, Siemens or Mitsubishi** alongside its own Macatrol. Materials were 61% of sales in FY26.",
        costEffect: "**Largely passed on.** It raised prices 4–6%, takes an advance before building each machine, and holds a year of imported parts, which shields it from sudden jumps. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (16% to 10%). **What happened:** India's iron-and-steel castings price index was flat (100 in Q1 FY24 to 102 in Q1 FY27) while the margin roughly doubled from 8.3% to 16.2%. That came from scale, a richer mix and making more parts in-house, which cut materials from 70% of sales in FY22 to 61% in FY26. What holds it below 20% is capacity: it makes spindles for only 1,700–1,800 of its 2,500 machines and pays outside firms for the rest.",
        competitors: [{ name: 'Ace Micromatic, Bharat Fritz Werner, Lokesh Machines', note: 'Larger Indian rivals in the same entry and mid-range market; one has built a 10,000-machine plant at Hosur.' }, { name: 'Jyoti CNC Automation', note: 'Rajkot neighbour; much bigger and moving up to aerospace machines.' }, { name: 'Chinese and Taiwanese imports', note: 'Compete on price in the entry segment.' }],
        position: "**A small but fast-growing player with about 2% of India's machine-tool production** (1% of consumption) by management's estimate, aiming for 10% within five years.",
        money: "Screener shows **₹6cr of net cash**; the company calls itself debt-free, and trade receivables fell from ₹46cr to ₹33cr in Q1 FY27. The ₹50cr new site is funded by its own cash and some debt, and qualifies under Gujarat's new industrial policy for a capital subsidy of up to 25% and a 7% interest subsidy. A later, larger plant would need about ₹100cr for its first phase. No equity raised since its 2018 listing. Free cash flow was only ₹3cr in FY26 because stock rose to 259 days. Its annual report says the 13-acre site will sustain growth of about 20%, below the 30%+ guided on the call, and the 60-acre plot has slipped repeatedly since it was first announced in March 2024. **Governance notes:** the chairman and a whole-time director are paid consultancy fees rather than salaries, and the auditor is a small Rajkot firm; its FY26 opinion is clean apart from a note on expired office leases. Promoters hold **73.2%**, unchanged since September 2023, with no pledge.",
        watch: ["The new site opening within 12 months, as the current plant is nearly full.", "Margin moving from 16% towards the 18–20% target as more parts are made in-house.", "Conversion of the ₹939cr of bids (₹194cr of them government tenders) into orders.", "Stock falling from 259 days so profit turns into cash, and the 60-acre land actually signed after repeated slips."],
        charts: industrialMachineryCharts['Macpower CNC'],
    },
    {
        "company": "Lohia Corp",
        "segment": "Textile and packaging machinery — process lines and spares",
        "inShort": [
            "**Makes the machines that turn plastic granules into woven sacks and fabric**: tape lines, circular looms, winders, coating and bag-making machines used for cement, fertiliser and food-grain bags, bulk bags, tarpaulins and geotextiles, sold to about 2,000 customers in India and roughly 100 developing countries.",
            "**Good:** a leading global maker with a ₹1,778cr order book backed by about 20% advances, revenue up 60% in Q1 FY27 at a **20% operating margin**, and net cash. **Watch:** the margin was about 8% as recently as FY24, the order book tripled in a year (customers' capex comes in cycles), stock is held about 150 days, and only two years of figures are filed.",
            "**Verdict: follow.** A strong niche leader at about 24 times earnings, but today's profit comes near the top of a capital-spending cycle; I want to see the 20% margin and orders hold for a few quarters."
        ],
        "tagline": "A Kanpur-based maker of machinery for woven plastic sacks and technical textiles, run by the Lohia family and listed in July 2026.",
        "revenue": "₹1,717cr (FY26, consolidated)",
        "products": [
            {
                "name": "Woven-fabric production lines",
                "text": "Tape extrusion lines (about ₹3cr each), circular looms (about ₹10–11 lakh), winders, coating and lamination lines and bag converting machines, sold as whole plant packages; a cement-bag plant might take one tape line, about 250 winders and 40 looms. New in 2026: the CoEx 1600 multi-layer coating line and the nova 6 plus high-speed loom."
            },
            {
                "name": "Spare parts and service",
                "text": "About 10–12% of revenue; a customer buys spares worth roughly 2–3% of its plant's cost every year for the machine's 20–25-year life, at gross margins 2–3 points higher than machines. Also rebuilding, remote assistance and operator training."
            },
            {
                "name": "New lines",
                "text": "Polyolefin plastic recycling machines and monofilament lines, about 5–6% of revenue; shredding and granulating lines are planned."
            }
        ],
        "revenueText": "Revenue comes from machine orders executed over 6–9 months, plus spares. **Exports were about 41% of Q1 FY27 revenue** (historically 45–55%), but only about 30% of the current order book, because Indian customers are expanding faster; management expects exports to return to about half. Management's target mix is 80–85% machines, 10–12% spares and 5–6% new products. FY26 revenue rose 25% to ₹1,717cr and Q1 FY27 rose 60% to ₹503cr. The order book was ₹1,778cr at June 2026, up from ₹1,358cr in March and about ₹769cr in FY24.",
        "mixes": [
            {
                "caption": "Revenue by market, Q1 FY27 (results call)",
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
            },
            {
                "caption": "Revenue by product, target mix (management, approximate)",
                "parts": [
                    {
                        "label": "Woven-plastic machines",
                        "share": 83
                    },
                    {
                        "label": "Spare parts",
                        "share": 11
                    },
                    {
                        "label": "Recycling and new lines",
                        "share": 6
                    }
                ],
                "note": "Midpoints of the ranges given on the Q1 FY27 call."
            }
        ],
        "customers": [
            "**Woven sack and fabric makers** in India and about 100 developing countries (Asia, Africa, Latin America), who make bags for cement, fertiliser, chemicals and food grain, bulk bags, tarpaulins, ground cover and geotextiles; about 2,000 customers worldwide.",
            "Mostly existing customers adding capacity; replacement of old machines is 3–5% of the order book but expected to grow, since Lohia has sold in India for about 40 years and abroad since about 2002."
        ],
        "difficulty": {
            "level": "High",
            "text": "Precision textile machinery needs decades of design know-how, in-house machining and electronics, and a global service network; the CMD says there are only two or three known machine makers worldwide for about 2,000 bag producers. Making the bags, by contrast, is easy."
        },
        "moat": "Technology, a large installed base that keeps buying spares, and service: it says it charges 15–20% more than Chinese makers, whose weakness is after-sales service. Customs duty on imported Chinese and European machines also helps in India. But its customers' spending comes in cycles, and Chinese competition is a constant in Southeast Asia.",
        "salesDrivers": [
            "**Customers' capital spending**: after a post-COVID slump, orders have risen steeply since FY24; management says the peak is still ahead.",
            "**New uses for woven plastic**: non-packaging uses (geotextiles, roofing underlay, tarpaulins) are growing, and woven sacks are not classed as single-use plastic.",
            "**Capacity**: plants at Kanpur and Bengaluru plus the US and Italy run at about 70–75%, and can reach about ₹2,400–2,500cr of revenue; beyond that about ₹80–100cr of capex per ₹500cr of revenue, buildable in 5–6 months.",
            "**Exports and the rupee**: export prices are 12–15% higher than in India, and a weaker rupee helps against Starlinger and Chinese rivals."
        ],
        "inputs": "**Steel, castings, electronic and bought-in parts**, partly made in-house and partly by a large vendor base; shares of cost are not disclosed in what I read. Research spending is about 3% of revenue.",
        "costEffect": "**Partly protected, with a lag.** Order prices are fixed when booked but material purchases are not, so a cost spike between order and delivery (6–9 months) hits margins. The company re-prices new orders to current input costs, signs short- and medium-term supply deals and adjusts discounts. **What happened:** the margin was about 8.4% in FY24, 16% in FY25, 11% in Q1 FY26 and 20% in Q1 FY27 as volumes recovered.",
        "competitors": [
            {
                "name": "Starlinger (Austria)",
                "note": "The main rival in more developed markets; a premium European maker."
            },
            {
                "name": "Chinese machinery makers",
                "note": "The main rivals in Southeast Asia and elsewhere; Lohia says it charges 15–20% more and wins on service."
            }
        ],
        "position": "**Calls itself a leading global maker of woven-plastic machinery and has a large share of the Indian market**, where it has sold for about 40 years; capacity use is about 70–75%.",
        "money": "Screener shows **₹175cr of borrowings against ₹157cr of investments at March 2026**, plus cash it does not split out; the company says it is net cash. Operating cash was ₹325cr in FY26 against ₹321cr of operating profit, and ₹141cr in FY25 against ₹221cr (86% over the two years filed). About 20% customer advances fund the order book, but stock is held about 150 days and the cash cycle is about 126 days. Little capex is needed until revenue nears ₹2,500cr. No dividend yet. Promoters hold **68.66%**.",
        "watch": [
            "Q2 FY27 results (board meets 4 November): a margin of 20% or more and an order book still above ₹1,778cr.",
            "Exports recovering toward half of sales, which carry higher prices.",
            "Signs that customers' capex is peaking, such as falling orders or bigger discounts."
        ],
        charts: industrialMachineryCharts["Lohia Corp"],
    },
    {
        "company": "Bonfiglioli Transmissions",
        "segment": "Gearboxes and drives",
        "inShort": [
            "**The Indian arm of Italy's Bonfiglioli**: makes gear motors and gearboxes for factories, travel and swing drives for excavators and construction machines, and yaw and pitch drives for wind turbines, from plants in Chennai and Pune; lists on 23 October 2026.",
            "**Good:** leading shares in India (about 68% of wind-turbine drives, 24% of off-highway drives, 25% of small gear motors, per its industry report), no debt and ₹163cr of cash, an 18% margin. **Watch:** it pays the parent a 4.4% royalty, about 15% of sales go to group companies, one customer is 11% of revenue, and only 57% of operating profit turned into cash over five years.",
            "**Verdict: wait.** A good franchise, but the IPO is entirely the parent selling, the price is not in what I read, and I want to see its first listed results and how group dealings are handled."
        ],
        "tagline": "A Chennai-based maker of industrial gear motors, construction-equipment drives and wind-turbine drives, owned by Italy's Bonfiglioli group.",
        "revenue": "₹2,014cr (CY2025, standalone; year ends December)",
        "products": [
            {
                "name": "Industrial and automation drives",
                "text": "Gear motors, helical, worm and planetary gearboxes and drive electronics for material handling, packaging, logistics, cement, steel, food and general machinery; assembled at Sriperumbudur and Pune."
            },
            {
                "name": "Mobility (off-highway) drives",
                "text": "Travel/track, swing, wheel and slew drives for excavators, concrete mixers, mining, road and farm machinery, from 1,000 Nm to 3,000 kNm."
            },
            {
                "name": "Wind drives",
                "text": "Yaw and pitch drives for turbines from 225 kW to 5 MW, made at Thirumudivakkam, Chennai, with India's only yaw and pitch drive test lab (per its industry report); sold to turbine makers; its industry report cites Suzlon as an OEM that relies on such suppliers."
            }
        ],
        "revenueText": "CY2025 revenue was ₹2,014cr, up 9%, almost all from selling goods (₹1,975cr), plus ₹12.8cr of government grants and ₹8cr of transfer-pricing adjustment from the parent. **About ₹305cr (15%) was sold to other Bonfiglioli companies**, the largest buyers being Bonfiglioli USA (₹79cr), Riduttori (₹47cr) and Germany (₹44cr). **One customer took ₹227cr (11%)**. The split between industrial, mobility and wind and between India and exports is in the RHP, which I could not read.",
        "shares": [
            {
                "title": "Market share in India by value, FY2025 (industry report by Frost & Sullivan for the IPO)",
                "source": "Industry Report, 2026",
                "groups": [
                    {
                        "rows": [
                            {
                                "name": "Wind-turbine yaw and pitch drives",
                                "share": 68
                            },
                            {
                                "name": "Off-highway equipment drives",
                                "share": 24
                            },
                            {
                                "name": "Gear motors below 15 kNm",
                                "share": 25
                            }
                        ]
                    }
                ]
            }
        ],
        "customers": [
            "**Construction and mining equipment makers** (excavators, concrete mixers, loaders) in India.",
            "**Wind-turbine makers** (the industry report points to Suzlon); one customer was 11% of CY2025 revenue (not named in the accounts).",
            "**Industrial machine builders and dealers** across material handling, packaging, cement, steel and food.",
            "**Bonfiglioli group companies** worldwide, which bought about 15% of its output in CY2025."
        ],
        "difficulty": {
            "level": "High",
            "text": "Precision gearing for wind turbines and heavy machines needs long OEM qualification, field reliability and testing; the group's global designs and India's local machining give it a head start that new entrants would find hard to match."
        },
        "moat": "Group technology and brand, local manufacturing and a service network, and long OEM approvals give it leading shares in wind drives and construction drives. The limit is that the moat partly belongs to the parent, which charges a royalty and decides which markets India serves.",
        "salesDrivers": [
            "**Wind installations in India** and repowering, where it has about two-thirds of drive supply.",
            "**Construction and mining equipment demand**, tied to infrastructure spending.",
            "**Factory automation and capex** in cement, steel, logistics and food.",
            "**Group export orders**, which depend on the parent's sourcing decisions."
        ],
        "inputs": "**Bought-in castings, forgings, gears, bearings and motors, plus parts from the group**: materials were about 62% of CY2025 revenue, and about ₹188cr of purchases came from Bonfiglioli companies, mainly Bonfiglioli Riduttori.",
        "costEffect": "**Not disclosed how quickly steel and part costs are passed on.** Materials took about 62% of revenue in CY2025. **What happened:** the operating margin fell from 20% in 2020 to 14% in 2023 and recovered to 16% in 2024 and 18% in 2025.",
        "competitors": [
            {
                "name": "SEW-Eurodrive, Nord, Power Build",
                "note": "Main rivals in gear motors; with Bonfiglioli about 73% of the Indian market."
            },
            {
                "name": "Tata Hitachi and L&T (captive), SUNGBO, Nabtesco, Doosan",
                "note": "Off-highway drive rivals; captive OEM units limit its reach."
            },
            {
                "name": "Liebherr, DHHI and Chinese makers",
                "note": "Smaller rivals in wind drives in India."
            },
            {
                "name": "Elecon, Shanthi Gears, Flender",
                "note": "Lead the large-gearbox market, where Bonfiglioli is small."
            }
        ],
        "position": "**India's leading wind-turbine drive maker (about 68% share) and largest non-captive off-highway drive supplier (about 24% of all, 30% of non-captive)**, and roughly a quarter of small gear motors, per the IPO industry report.",
        "money": "**Debt-free with about ₹163cr of cash and bank deposits at December 2025** (Screener's ₹3cr of borrowings are leases). Over CY2021–CY2025 it turned ₹1,408cr of operating profit into ₹809cr of operating cash (57%) and ₹509cr of free cash, most of it paid to the parent through dividends (106% and 96% of profit in 2021–22) and a 2024 buyback. Receivables were ₹518cr at December 2025, ₹127cr of it owed by group companies. It also lends to a fellow subsidiary. The IPO is entirely a sale by Bonfiglioli S.p.A., so no money comes to the company.",
        "watch": [
            "The listing price and valuation on 23 October, and the parent's remaining stake.",
            "Royalty, group sales and group loans in the first listed results.",
            "Wind and construction-equipment demand in India."
        ],
        charts: industrialMachineryCharts["Bonfiglioli Transmissions"],
    },
];

export const industrialMachineryBusinesses = { intro, profiles };
