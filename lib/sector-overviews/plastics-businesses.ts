import { BusinessProfile, OverviewSection } from './types';
import { plasticsCharts } from './card-data/plastics';

// Tab 2 of the Plastics note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (Prince and Apollo Pipes standalone); splits are from each company's latest presentation or call. The cost chart uses India's price index for each company's main plastic; for the pipe makers it tracks the pipe price itself.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "Six ways of turning plastic resin into something worth more.",
        ],
        points: [
            {
                label: 'Industrial containers and cylinders',
                text: "Plastic drums, jerry cans and 1,000-litre bulk containers for chemicals, and lightweight composite cylinders for LPG and CNG (Time Technoplast).",
            },
            {
                label: 'Specialty films',
                text: "Window films that block heat, clear paint-protection film for cars, and films for building glass (Garware).",
            },
            {
                label: 'Precision parts and medical pens',
                text: "Pen injectors for weight-loss and diabetes drugs, and precision plastic parts for furniture, electronics and industry (Shaily).",
            },
            {
                label: 'Plastic pipes',
                text: "PVC and CPVC pipes and fittings for farm irrigation, household plumbing and drainage (Finolex, Prince, Apollo Pipes); Finolex also makes its own PVC resin.",
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
                    ['**Contracts with manufacturers**', 'Time Technoplast, Shaily', 'Contract prices; resin passed on', 'Normal credit terms'],
                    ['**Dealers and installers**', 'Finolex, Prince, Apollo Pipes, Garware (India)', 'List prices that follow resin', 'Fast, but dealers stop buying when prices fall'],
                    ['**Exports to distributors**', 'Garware, Shaily, Time Technoplast', 'Negotiated; tariffs and freight matter', 'Slower: goods at sea'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Time Technoplast',
        inShort: ["**A big maker of plastic industrial packaging** (drums, jerry cans and bulk containers) in India and 10 other countries, also making composite gas cylinders and plastic pipes.", "**Good:** steady 13–15% margins as costs are passed on monthly, composite products up 29%, and net debt nearly gone. **Watch:** working capital is still high and composites are only a quarter of sales.", "**Verdict: own.** The price asks for less growth than I expect."],
        tagline: "A maker of polymer industrial packaging and composite gas cylinders, with plants in India and 10 other countries.",
        revenue: '₹6,105cr (FY26, consolidated)',
        products: [
            { name: 'Industrial packaging', text: "Plastic drums, jerry cans and pails for chemicals, food, paint and pharma companies. About three-quarters of revenue, split roughly equally between India and plants abroad." },
            { name: 'Intermediate bulk containers (IBCs)', text: "Cube-shaped plastic tanks of about 1,000 litres held in a steel cage, used to ship liquids and chemicals. Counted as a value-added product." },
            { name: 'Composite cylinders', text: "Type-4 composite cylinders: a plastic liner wrapped in fibre composite, lighter than steel and rust-proof, for LPG, CNG and hydrogen. Also composite fire extinguishers and air tanks for trucks and buses." },
            { name: 'PE pipes and other products', text: "High-density polyethylene pipes for water, sewage and cable ducts, mostly sold to government contractors; also plastic films and batteries (through its Power Build subsidiary)." },
        ],
        revenueText: "In Q1 FY27 **established products (packaging, drums, pipes) were 74.6% of revenue and value-added products (IBCs, composite cylinders) 25.4%**. **India was 65% and overseas 35%**, with both earning about a 13% margin. Composite products grew 29% year on year.",
        mixes: [
            { caption: 'Revenue by product type, Q1 FY27 (company call)', parts: [{ label: 'Established products', share: 75 }, { label: 'Value-added products', share: 25 }] },
            { caption: 'Revenue by region, Q1 FY27 (company call)', parts: [{ label: 'India', share: 65 }, { label: 'Overseas', share: 35 }], note: 'Overseas figures cover January–March, as those units use a calendar year.' },
        ],
        customers: ["**Chemical, FMCG, paint and pharma companies** in India and abroad; more than 50 international customers buy from both its Indian and overseas plants. Packaging is only 6–7% of their product cost.", "**State oil companies**: HPCL ordered 140,000 composite LPG cylinders and tied up with Swiggy Instamart for fast home delivery. City gas companies and vehicle makers buy CNG cylinders.", "**Government contractors** building water and sewage networks buy its PE pipes."],
        difficulty: { level: 'Medium', text: "Drums and jerry cans are simple to mould, but composite cylinders and fire extinguishers need long safety approvals from oil companies and regulators. Chemical buyers are cautious about changing packaging suppliers because a leak is costly." },
        moat: "Scale, local plants in 11 countries and long approvals for composite cylinders keep customers. Packaging itself is a commodity, and it relies on imported carbon fibre for composites.",
        salesDrivers: ["**Industrial activity**: packaging volume follows chemical, paint and FMCG output; management expects 11–13% growth this year and has ₹400cr of confirmed packaging orders for 2026.", "**Composite cylinders**: expected to grow 25–30% a year, helped by LPG home delivery, CNG and hydrogen cylinder approvals, and fire extinguishers for refineries (800,000 needed). The composite order book was about ₹194cr in May.", "**Government spending on water pipes**: PE pipes should grow 22–25%, mostly in the second half; Q1 was weak because contractors would not accept higher prices.", "**Capacity**: India plants run at about 80% and overseas at 85%, so new plants (Sanand, Odisha, Chiplun, Saudi Arabia) are planned. Guidance: over 15% volume growth, with profit growing faster."],
        inputs: "**Polymers, mainly high-density polyethylene (HDPE)**, plus carbon fibre and special resins for composites, and recycled plastic (30% is required in some packaging). Materials were 71% of sales in FY26.",
        costEffect: "**Passed on, with a lag of 20–25 days.** About 70–75% of customers reset prices once a month based on published polymer prices. Composite orders are fixed-price, but their inputs are also fixed for 12 months. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (15% to 8%). **What happened:** India's high-density polyethylene price index fell from 100 to 87 by Q1 FY26, then jumped to 130 in Q1 FY27 when polymer prices rose about 25–30% in March 2026. The margin barely moved (13.6% to 13.2%), staying between 13% and 15% throughout. The small dip in Q1 FY27 is mostly arithmetic: the same profit per tonne on a higher price gives a lower percentage. Management says to judge it by profit per tonne until prices settle.",
        competitors: [{ name: 'Schütz, Mauser Packaging, Greif', note: 'Global industrial packaging and IBC makers.' }, { name: 'Steel cylinder makers', note: 'Supply most LPG and CNG cylinders; composites are lighter but costlier.' }, { name: 'PE pipe makers', note: 'Many regional firms compete for government pipe contracts.' }],
        position: "**About 55% of India's industrial plastic packaging market**, the world's largest maker of large plastic drums, third-largest IBC maker and second-largest composite cylinder maker (Screener's description). It leads in 9 of the 11 countries it operates in.",
        money: "Screener shows **net debt of ₹153cr** (March 2026), down from ₹812cr in FY22; net debt fell another ₹90cr in Q1 FY27. About ₹356cr of the ₹800cr raised from a share sale to institutions (a QIP) in November 2025 was unused and held in deposits (annual report and CRISIL). The group auditor did not audit nine subsidiaries with ₹3,092cr of revenue, about half the group, and relied on other auditors. Capex is about ₹350cr in FY27, then ₹200–250cr a year. It plans to sell ₹134cr of unused assets and may consider a share buyback. Working capital is still high (105–110 days against a 90-day target), and free cash flow was negative ₹137cr in FY26. Promoters hold **47.6%**, down from 51.7% in September 2023.",
        watch: ["Working capital falling towards 100 days this year.", "Composite cylinder orders from oil companies.", "PE pipe sales recovering in the second half."],
        charts: plasticsCharts['Time Technoplast'],
    },
    {
        company: 'Garware Hi-Tech',
        inShort: ["**Garware Hi-Tech Films makes specialty polyester films**: heat-blocking window films for cars and buildings, clear paint-protection film for cars, and industrial films. Most of it is exported.", "**Good:** a record margin in Q1 FY27 (27% on filed figures, 30% by its own measure) from a richer product mix, ₹850cr of cash and no debt. **Watch:** the US is about 45% of sales (its extra tariff has fallen from 50% to 10%), shipping delays from the Middle East war, and whether new lines sell at the same margins.", "**Verdict: follow.** A strong business, but the price needs a little more growth than I expect."],
        tagline: "India's leading maker of specialty polyester films, making its own polyester chips and turning them into window films, paint-protection film and industrial films.",
        revenue: '₹2,120cr (FY26, consolidated)',
        products: [
            { name: 'Sun-control films', text: "Window films for cars and buildings that block heat and ultraviolet light, including premium grades that reject up to 99% of the sun's heat. The volume driver: about 55% of Q1 FY27 sales." },
            { name: 'Paint-protection film (PPF)', text: "A clear, stretchy film stuck over a car's paint to guard it against stone chips and scratches. It is made from TPU (thermoplastic polyurethane, a tough, flexible plastic). About 20% of Q1 FY27 sales; five car makers buy it from Garware." },
            { name: 'Architectural films', text: "Films for office and home windows: heat control, safety films that stop glass shattering, privacy films that switch from clear to frosted, and decorative films. They cut across the two lines above and have grown from 5% of revenue to more than 25%." },
            { name: 'Industrial products', text: "Plain and coated polyester films for industrial uses. The older, steadier part of the business: about 25% of Q1 FY27 sales." },
        ],
        revenueText: "In Q1 FY27 **sun-control films were about 55% of sales, paint-protection film 20% and industrial products 25%**; in FY26 sun control was 48–50%. **Architectural films are now more than 25% of revenue**, spread across these lines. Screener's description puts value-added products at about 87% of revenue. The call gave no country split, though the US, the Middle East and India were named as the fastest-growing markets.",
        mixes: [
            { caption: 'Revenue by product line, Q1 FY27 (company call)', parts: [{ label: 'Sun-control films', share: 55 }, { label: 'Paint-protection film', share: 20 }, { label: 'Industrial products', share: 25 }], note: 'Architectural films (over 25% of revenue) sit inside these lines.' },
        ],
        customers: ["**Distributors, installers and online buyers abroad**, mainly in the US, Europe and the Middle East, under Garware's own brands and as unbranded film for other brands. It also has 14 Garware application studios in the Middle East and the US.", "**Car owners in India** through more than 250 Garware Application Studios, and homeowners through Garware Home Solutions (9 studios, 50 planned by the end of FY27), which is run fully by the company.", "**Car makers**: five buy its paint-protection film, some of them only from Garware."],
        difficulty: { level: 'High', text: "It is fully integrated from polyester chips to finished film, with dyeing and coating done in-house, and says no other maker makes every component itself. High heat-rejection films and optically clear PPF need years of research and development; new products are tested with customers before launch." },
        moat: "In-house integration keeps costs and quality under its control, and its studios bring it closer to the end buyer. The weakness is dependence on exports and freight routes, and cheaper Chinese PPF.",
        salesDrivers: ["**Richer product mix**: more 99% heat-rejection films and architectural films. Management says the Q1 FY27 margin came purely from mix, with no one-off gains.", "**Consumer demand abroad**: summer makes Q1 and Q2 the strongest quarters. US online sales of PPF are rising; Middle East demand is strong but shipments are being delayed by the war.", "**Capacity**: the old PPF line runs near 100% and the new one (started September 2025) at about 60%. A ₹192cr sun-control line adding 1,200 lakh sq ft a year starts in H1 FY28 by the company's date (CARE's rating rationale says June 2028), with peak sales of ₹500–550cr.", "**The TPU plant**, due in Q3 FY27: about 75% will feed its own PPF (cutting cost) and 25% new products. Management expects it to add 1.5–2 points to margin in FY28.", "**Targets**: over ₹2,500cr of sales in FY27, a 25% (±2 points) margin, 15–20% yearly growth and about ₹3,500cr in 3–4 years. India's trade regulator has recommended an anti-dumping duty on Chinese TPU-based PPF."],
        inputs: "**Polyester raw materials (from crude-oil chemicals such as xylene), bought-in TPU film for PPF, dyes, adhesives and coatings.** Materials were 45% of sales in FY26. Management says the direct link to crude-based raw material is only about 10–12% of the value of its consumer products.",
        costEffect: "**Mostly passed on.** When crude and chemical prices rise, Garware raises its prices after talking to customers; management says it no longer gains or loses much from raw-material swings. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (21% to 16%). **What happened:** India's polyester-film price index rose from 100 to 115 between Q1 FY24 and Q1 FY27, while the margin rose from 16.8% to 27.2% (30.3% on the company's own measure). Film prices did not drive this. The margin rose as architectural films grew from 5% to over 25% of revenue and sales shifted to 99% heat-rejection grades and PPF. The dip to 15% in Q3 FY26 came in its seasonally weakest quarter, while the US tariff was hurting exports.",
        competitors: [{ name: '3M and Eastman Chemical', note: 'Large US film makers; the global leaders in window film and paint-protection film.' }, { name: 'Chinese PPF makers', note: 'Cheaper paint-protection film; an anti-dumping duty on imports into India has been recommended.' }, { name: 'Glass makers', note: 'In buildings, Garware sells film as a cheaper alternative to high-performance glass.' }],
        position: "**India's category leader in sun-control and paint-protection films**, and a challenger to the US majors globally. It says it is the only official high-quality PPF maker in India.",
        money: "Screener shows **net cash of ₹853cr** (March 2026); the company puts cash and liquid investments at about ₹850cr and has no debt, after spending over ₹700cr on expansion in recent years. The TPU plant and the ₹192cr sun-control line are paid from its own cash. It expects more than ₹50cr of US tariff refunds (after sharing some with US customers) in Q2 FY27, and is looking at acquisitions and more capex. Promoters hold **60.7%**, unchanged over three years; the three promoter executives were paid about ₹40cr in FY26, about 12% of profit.",
        watch: ["Margin holding near 27–30% after the one-off tariff refunds.", "Start-up of the TPU plant in Q3 FY27.", "Shipping delays in the Middle East, US tariffs and the promised refunds."],
        charts: plasticsCharts['Garware Hi-Tech'],
    },
    {
        company: 'Shaily Engg. Plastic',
        inShort: ["**A precision plastic-parts maker turning into a medical-device maker**: it now makes injector pens for diabetes and weight-loss drugs, alongside home-furnishing parts for Western retailers.", "**Good:** healthcare sales up 85% in Q1 FY27 to over half of revenue, lifting the margin to about 30%. **Watch:** the home-products business is shrinking, new pen lines have had teething problems, and cheaper Chinese copies are coming.", "**Verdict: follow.** The growth is real, but the price already assumes a lot of it."],
        tagline: "A contract maker of precision injection-moulded plastic parts, now mainly drug-delivery pens for generic diabetes and weight-loss drugs.",
        revenue: '₹991cr (FY26, consolidated)',
        products: [
            { name: 'Healthcare devices', text: "Mainly pen injectors: disposable pens patients use to inject drugs such as insulin and GLP-1 drugs (semaglutide, used for diabetes and weight loss). Six of its eight device platforms are on sale; it is also developing emergency-use auto-injectors, reusable pens and on-body injectors." },
            { name: 'Consumer products', text: "Plastic parts for home furnishings sold by big retailers in Europe and the US, plus FMCG packaging, LED lighting and toys. Demand is soft; management expects FY27 sales at about FY24 levels." },
            { name: 'Industrial parts', text: "Precision parts for cars, appliances and consumer electronics. A new customer has ordered five electronics parts, and specialised trays for semiconductor packaging should start selling in Q4 FY27." },
        ],
        revenueText: "Of ₹281cr of Q1 FY27 revenue, **healthcare was ₹142cr (51%, up 85%)**, consumer ₹116cr (41%, down 24%) and industrial ₹23cr (8%, up 25%). **Exports were 58% of revenue**, down from 76% a year earlier, because many pens go to Indian drug companies that fill them and export them.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company call)', parts: [{ label: 'Healthcare', share: 51 }, { label: 'Consumer', share: 41 }, { label: 'Industrial', share: 8 }] },
        ],
        customers: ["**Drug makers launching generic semaglutide and insulin** in Canada, Brazil, India and elsewhere, many of them Indian companies. One has placed a ₹423cr four-year pen order; the company does not name customers, but analysts link it to Dr Reddy's, which paused semaglutide supply in July 2026 after an impurity finding (restart expected September–November).", "**Large home-furnishing retailers in Europe and North America**; India is only about 2% of consumer sales.", "**Appliance, car and electronics makers**, and soon Indian semiconductor packaging plants."],
        difficulty: { level: 'Very high', text: "Drug-delivery pens must meet strict regulatory standards, and each batch goes through extensive testing. Its own patented designs took 7–8 years to develop. The new high-speed pen line needed extra equipment to reach full efficiency, so the next line will be run in at the supplier's site first." },
        moat: "Drug makers rarely change a pen once their drug is approved with it, and Shaily owns patents on its designs. The consumer business has no such lock-in and is exposed to Western retail demand.",
        salesDrivers: ["**Generic GLP-1 launches**: patents on semaglutide are ending in more countries. It made about 9 million devices in Q1 FY27 (50–60% GLP-1) and expects to beat its 36 million target for FY27.", "**Pen capacity**: another 25 million pens a year from the end of September takes capacity to about 75 million. A plant in Abu Dhabi should start selling by the end of FY28; 50–55% of its capacity already has commitments or indications.", "**Big-pharma partnerships**: new business heads in Europe and the US aim to win a deal with a global drug developer within 4–6 quarters.", "**Consumer demand in Europe and the US**, which is weak and falling as a share of sales.", "**Electronics and semiconductors**: a ₹80–100cr plant in South India; management projects (not guides) about US$10m of electronics sales in 24–30 months."],
        inputs: "**Engineering plastics such as polypropylene and specialised medical-grade polymers**, plus moulds and assembly parts. Materials were 43% of sales in FY26, down from 63% in FY22 as higher-value healthcare work grew.",
        costEffect: "**Partly passed on.** Pen contracts are priced on volume and market, not cost-plus, with a yearly review against an index that can include inflation and polymer prices. Other segments pass on costs where contracts allow, with a lag. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (28% to 24%). **What happened:** India's polypropylene price index was flat near 97 for three years, then jumped to 115 in Q1 FY27. The margin rose from 17.2% to 29.5% over the same period, driven by healthcare's growing share. The jump in polymer and freight costs after March, plus costly air freight to catch up on late orders, cut the gross margin in Q1 FY27; management expects it to normalise by Q3.",
        competitors: [{ name: 'West, Phillips-Medisize, Aptar Pharma', note: 'Global drug-delivery device makers; Shaily hired its US business head from this group.' }, { name: 'Chinese pen makers', note: 'Copycat pens at about US$1.50–1.70 versus Shaily above US$2; Shaily says some infringe its patents.' }, { name: 'Contract moulders in Asia', note: 'Compete for home-furnishing and consumer parts on price.' }],
        position: "**A leading supplier of pens for generic semaglutide**: management expects to be dominant in Canada and to hold a majority in Brazil, and says it supplied the device for the first tentative US FDA approval of a generic semaglutide.",
        money: "Screener shows **net debt of ₹152cr** (March 2026). Heavy spending meant free cash flow was negative from FY22 to FY24 and only about ₹40cr in each of FY25 and FY26. New capex: the second 25-million pen line, the Abu Dhabi plant, a ₹80–100cr electronics plant in the South and about ₹5cr for semiconductor trays. Promoters hold **41.1%**, down from 43.8% in September 2023, mostly because a promoter-group member sold her entire 2.27% stake (about ₹105cr) in June 2026.",
        watch: ["Pen volumes against the 36 million target, and the new lines reaching 80% efficiency.", "A deal with a global drug developer.", "Pricing pressure from Chinese copycat pens."],
        charts: plasticsCharts['Shaily Engg. Plastic'],
    },
    {
        company: 'Finolex Inds',
        inShort: ["**India's only large PVC-pipe maker that also makes its own PVC resin**, selling mostly farm-irrigation pipes through dealers.", "**Good:** its own resin plant cushions margins, and it holds ₹2,636cr of cash. **Bad:** volumes fell 27% in Q1 FY27, it is losing market share to rivals and still leans heavily on farm demand.", "**Verdict: wait.** Cheap on its cash, but it needs to show volumes and market share recovering."],
        tagline: "A PVC-pipe and fittings maker that produces its own PVC resin at Ratnagiri, Maharashtra, and sells mainly to farmers.",
        revenue: '₹4,113cr (FY26, consolidated)',
        products: [
            { name: 'PVC pipes and fittings', text: "Rigid plastic pipes for farm irrigation and borewells (agri) and for plumbing, drainage and sewage in buildings (non-agri). Fittings were 11% of Q1 FY27 volume." },
            { name: 'CPVC pipes', text: "A heat-resistant form of PVC used for hot- and cold-water plumbing in homes. About 7% of volume, roughly the same share CPVC has of the whole pipe market." },
            { name: 'PVC resin', text: "The plastic powder that pipes are made from. It makes resin at Ratnagiri on two lines, one starting from the chemical EDC and one from imported VCM. CRISIL says it stopped selling resin to outsiders from FY26, so the resin now goes into its own pipes." },
        ],
        revenueText: "Since FY26 the company reports a single pipes-and-fittings segment, so the profit from resin is no longer shown separately. By volume, **agri pipes were 63% of FY26 sales** (67% a year earlier), with non-agri the rest; in Q1 FY27 agri rose to 69%. It sold 68,000 tonnes of pipes in Q1 FY27 and about 333,000 tonnes in FY26, against capacity of 520,000 tonnes.",
        mixes: [
            { caption: 'Pipe volume by use, FY26 (company call)', parts: [{ label: 'Agri', share: 63 }, { label: 'Non-agri (plumbing etc.)', share: 37 }] },
        ],
        customers: ["**Farmers**, reached through a large network of dealers, mainly for irrigation before the monsoon sowing season (January to May).", "**Builders, plumbers and contractors** for housing and drainage, also through dealers; government water schemes such as Jal Jeevan Mission reach it only through the channel.", "**No outside resin buyers now**: CRISIL says resin sales to outsiders stopped from FY26."],
        difficulty: { level: 'Medium', text: "Making pipes is simple and many firms do it; the hard part is the resin plant, which needs a port jetty and special handling for VCM, a hazardous gas. VCM cannot be imported during the four monsoon months, when the jetty is shut." },
        moat: "Its own resin gives it a cost cushion when resin prices swing, and the Finolex brand is strong with farmers. The weakness: it has lost share, from about 27% to 22% of the top listed makers since FY23.",
        salesDrivers: ["**Farm demand and the monsoon**: agri is two-thirds of volume, so a poor season or delayed buying hits it harder than rivals.", "**PVC resin price swings**: when prices fall, dealers stop buying and wait. The April 2026 crash drove a 27% volume fall; July, after prices recovered, was its best month of the year so far.", "**Government price floor**: a minimum import price on PVC resin (the lowest price at which resin can be imported, about US$766 a tonne) and the end of a customs-duty exemption in July should keep prices more stable.", "**Plumbing and CPVC growth**, which it wants to raise towards half of volume but has been slow to do.", "**Capacity is not a limit**: it uses under two-thirds of its pipe capacity and replaces old extruders with larger ones each year."],
        inputs: "**EDC and VCM (the chemicals that PVC resin is made from), plus bought resin, CPVC compound and additives.** Materials were 57% of sales in FY26.",
        costEffect: "**Partly protected.** Pipe prices follow resin prices within days, and making its own resin gives it an extra margin, the gap between PVC and EDC prices. But sharp falls cause losses on stock and dealer destocking. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (17% to 11%). **What happened:** India's PVC-pipe price index, which tracks the price of the finished pipe (Finolex's selling price) rather than PVC resin, eased from 100 to 98 between Q1 FY24 and Q1 FY27, and the margin ended almost where it began (12.9% to 12.1%). In between it swung from 1.3% (Q2 FY25) to 25.3% (Q4 FY26). The swings came from resin prices: a resin price spike in early 2026 lifted selling prices and the value of its stock, then a sharp fall in April (from about ₹96 to ₹82 a kilo) and a temporary customs-duty cut triggered destocking. Its own resin margin also narrowed: the PVC–EDC gap fell from US$522 to US$501 a tonne year on year.",
        competitors: [{ name: 'Supreme Industries, Astral', note: 'Larger pipe makers with a bigger share of plumbing and CPVC; growing faster.' }, { name: 'Prince Pipes, Apollo Pipes', note: 'Mid-sized rivals; Prince fell far less than Finolex in Q1 FY27.' }, { name: 'Reliance and resin importers', note: 'Set the PVC-resin price in India, which Finolex’s pipe prices follow.' }],
        position: "**India's second-largest PVC-pipe maker and third-largest PVC-resin maker**, with about 22% of the volume of the top listed pipe makers in FY26. It is the only large pipe maker with its own resin.",
        money: "Screener shows **net cash of ₹4,583cr**, but that counts its ₹4,969cr of investments, which include stakes in other companies as well as bonds and funds. The company's own figure is **₹2,636cr of cash**. Q1 FY27 other income (about ₹75cr) was mostly paper gains on bonds. Capex is ₹125–200cr in FY27; the board has not decided whether to return cash or invest it. Promoters hold **52.5%**, unchanged over three years.",
        watch: ["Volume recovery after the minimum import price.", "Market share against Supreme, Astral and Prince.", "What the board does with the cash."],
        charts: plasticsCharts['Finolex Inds'],
    },
    {
        company: 'Prince Pipes',
        inShort: ["**One of India's top six plastic-pipe makers**, selling PVC, CPVC and other pipes for plumbing, drainage and farms through dealers.", "**Good:** the margin rose to 13% in Q1 FY27 on a better mix and new plants are built. **Bad:** volumes fell 7%, stock rose to 100 days, and the bathware business still loses money.", "**Verdict: wait.** Promising, and the price is only just short of fitting, but it needs to show steady volume growth first."],
        tagline: "A maker of plastic pipes and fittings for plumbing, drainage and agriculture, with a small bathware business.",
        revenue: '₹2,598cr (FY26, standalone)',
        products: [
            { name: 'PVC pipes and fittings', text: "Rigid plastic pipes for water supply, drainage and farm irrigation. The biggest part of volume." },
            { name: 'CPVC and PPR pipes', text: "CPVC is a heat-resistant form of PVC used for hot- and cold-water plumbing; PPR is another plumbing plastic. These higher-margin pipes are growing as a share of sales." },
            { name: 'DECILO drainage', text: "A new low-noise polypropylene drainage system for homes, hotels and hospitals, made at its Haridwar plant." },
            { name: 'Bathware (Aquel)', text: "Taps and sanitaryware. Q1 FY27 revenue was ₹13cr with a ₹5cr operating loss; it aims to reach ₹25cr a quarter, near break-even, by the December quarter." },
        ],
        revenueText: "The company does not give a segment split. **Agri is about 30–35% of a normal year**, with plumbing and drainage the rest; Q1 FY27 was skewed towards plumbing. **Projects are about 25–30%** and retail the balance. It sold 40,729 tonnes in Q1 FY27, down 7%.",
        mixes: [
            { caption: 'Sales by end use, typical year (company estimate)', parts: [{ label: 'Plumbing and drainage', share: 67 }, { label: 'Agri', share: 33 }], note: 'Company says agri is about 30–35%; midpoint used.' },
        ],
        customers: ["**Distributors and retailers** who sell to plumbers and contractors; the company now pays schemes directly to tens of thousands of retailers.", "**Builders and project customers** (hotels, hospitals, housing), about a quarter of sales.", "**Farmers**, through dealers, mainly before the monsoon."],
        difficulty: { level: 'Low', text: "Pipe extrusion is well known and many firms do it. What matters is distribution reach, brand and steady access to resin at the right price, which small players struggle with when prices swing." },
        moat: "Brand and a wide dealer network, now tracked digitally, help it gain share from struggling small players. Pipes are a commodity and larger rivals have stronger brands.",
        salesDrivers: ["**Resin price stability**: dealers stop buying when PVC prices fall. April 2026 was a washout after a temporary cut in import duty; the new minimum import price (a floor of US$766 a tonne on imported PVC resin) should end that wait.", "**Housing and plumbing demand**, which drives the higher-margin CPVC, PPR and drainage products.", "**Distribution expansion**: new distributors in towns where it was absent, including some taken from other organised players.", "**Capacity**: new plants in Bihar (Begusarai), Telangana (Sangareddy) and Jaipur leave it at 52–53% use; guidance is 12–15% volume growth and an 11–13% margin."],
        inputs: "**PVC resin (from Reliance and imports), CPVC compound, polypropylene and additives.** Materials were 73% of sales in FY26.",
        costEffect: "**Passed on within 1–2 weeks, but stock gains and losses swing the margin.** Price changes go to dealers immediately or within a fortnight. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (9% to 2%). **What happened:** India's PVC-pipe price index, which tracks the price of the finished pipe (Prince's selling price) rather than PVC resin, eased from 100 to 98 between Q1 FY24 and Q1 FY27, while the margin rose from 8.1% to 12.6%. It fell as low as 0.9% (Q3 FY25) and 4.9% (Q3 FY26) when resin prices fell and stock lost value. In Q4 FY26 resin prices jumped and Prince passed its stock gains to dealers to win volume (up 23%). In Q1 FY27 it says there was no stock gain; the margin came from more plumbing and more CPVC, PPR and PP pipes.",
        competitors: [{ name: 'Supreme Industries, Astral', note: 'Market leaders with stronger brands and broader ranges.' }, { name: 'Finolex Industries', note: 'Makes its own resin; stronger in farm pipes.' }, { name: 'Apollo Pipes and small regional makers', note: 'Smaller players losing ground in volatile resin markets.' }],
        position: "**Among India's top six pipe makers**, with about 5% of the PVC-pipe market (Screener's description) and more than 7,200 products.",
        money: "Screener shows **net cash of ₹132cr** (March 2026); the company said net cash was about zero on 30 June 2026, with gross debt of about ₹120cr, as stock rose to 100 days (target 65–75). The big capex cycle is done; ₹40–42cr went on the Bhuj plant purchase in Q1. Debtor days are 40, with a target of 30. CRISIL keeps a Negative outlook on its A+ rating because margins have been weak; it would downgrade if margins fell below 8%. Promoters hold **61.0%**, unchanged over three years.",
        watch: ["Volume growth against the 12–15% target.", "Stock days back to 65–75 by September.", "Bathware reaching break-even."],
        charts: plasticsCharts['Prince Pipes'],
    },
    {
        company: 'Apollo Pipes',
        inShort: ["**A mid-sized maker of plastic pipes, fittings and water tanks** from North India, expanding east, west and into window profiles.", "**Good:** new plants are built and debt is low. **Bad:** it made a loss over the last year, as stock losses on falling PVC prices and start-up costs wiped out profit, and Q1 FY27 revenue of ₹295cr fell about 26% short of the ₹400cr-plus it promised in May.", "**Verdict: avoid.** A missed promise, a new tiles venture and repeated warrants while the core business earns about 1%."],
        tagline: "A plastic-pipe maker (CPVC, UPVC and HDPE pipes, fittings and tanks), with Kisan Mouldings as a subsidiary in western India.",
        revenue: '₹887cr (FY26, standalone)',
        products: [
            { name: 'PVC and CPVC pipes and fittings', text: "UPVC pipes (rigid PVC) for water supply, drainage and farms, and CPVC (a heat-resistant form of PVC) for hot- and cold-water plumbing. CPVC grew in Q1 FY27 after a tie-up with Lubrizol, the CPVC compound maker." },
            { name: 'HDPE and government pipes', text: "Polyethylene pipes for water schemes, sold to contractors. Sales here are almost zero while government payments are delayed." },
            { name: 'Water tanks and other products', text: "Tanks (growing at double digits), solvents and bath fittings." },
            { name: 'Window and door profiles', text: "UPVC frames for windows and doors, sold directly to buyers; expected to be 7–8% of FY27 revenue." },
        ],
        revenueText: "**Construction (plumbing) is about 60% of sales**; agriculture makes up most of the rest and government projects almost nothing. The company has stopped giving segment data. Volume passed 1 lakh tonnes in FY26; in Q1 FY27 it fell 3% (management called it flat). Kisan Mouldings, the western-India subsidiary, lifts consolidated revenue to ₹1,105cr.",
        mixes: [
            { caption: 'Sales by end use, Q1 FY27 (company call)', parts: [{ label: 'Construction', share: 60 }, { label: 'Agriculture and other', share: 40 }] },
        ],
        customers: ["**Distributors and retailers** selling to plumbers and builders, with cash-and-carry schemes in its stronger markets.", "**Farmers**, through dealers, mainly in March and April.", "**Government water-scheme contractors**, currently buying almost nothing."],
        difficulty: { level: 'Low', text: "Pipes are easy to make and the market is crowded. Brand, dealer reach and buying resin at the right time matter more than technology." },
        moat: "No real moat: it is a price-taker in PVC pipes. Its hope is scale from four regional plants and a better mix of CPVC and new products.",
        salesDrivers: ["**PVC price stability**: April 2026's 30% fall in resin prices stopped buying. The new minimum import price (a floor of US$766 a tonne, about ₹82 a kilo, on imported PVC resin) should help.", "**Housing and construction after the monsoon**, which management expects to lift the second half.", "**New capacity**: the Varanasi plant (up to ₹300cr of sales a year) aims for 30% use in FY27; Kisan's Tarapur plant sells about 5,500 tonnes a quarter against 8,000–8,500 capacity.", "**Long-term target**: ₹5,000cr of revenue by FY31 from four regional plants plus ₹1,000cr from other products, with a 25% return on capital."],
        inputs: "**PVC resin, CPVC compound (from Lubrizol) and polyethylene**, plus additives. Materials were 71% of sales in FY26.",
        costEffect: "**Not protected against falls.** Prices follow resin, but when resin drops fast, dealers wait and Apollo must write down its stock. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (8% to 1%). **What happened:** India's PVC-pipe price index, which tracks the price of the finished pipe (Apollo's selling price) rather than PVC resin, eased from 100 to 98 between Q1 FY24 and Q1 FY27, while the margin fell from 10.1% to 3.2%. Resin fell ₹32 a kilo in April 2026 and ₹5 in June, forcing stock write-downs; it also cut prices to hold volume. Management says the margin before stock losses was 8% standalone, of which about 0.5 points went on the Varanasi plant and window-profile start-up.",
        competitors: [{ name: 'Supreme Industries, Astral', note: 'Market leaders with far stronger brands.' }, { name: 'Finolex, Prince Pipes', note: 'Larger rivals better placed to absorb resin swings.' }, { name: 'Small regional makers', note: 'Also hurt by volatility; Apollo says flat volume meant it gained share.' }],
        position: "**A top-10 PVC-pipe maker** (Screener's description), strongest in North India, where its original plant is.",
        money: "Screener shows **net debt of ₹10cr** (standalone borrowings of ₹92cr less ₹82cr of cash, March 2026); most of its ₹223cr of investments is its stake in Kisan. By June it had ₹59cr of net debt (company), against ₹40cr of net cash in March. On 31 August the board approved about ₹300cr to enter tiles and ceramics and up to ₹189cr of warrants to outside investors, after ₹110cr of warrants in 2025. Capex of about ₹200cr over FY27–FY28 is to be paid from its own cash; a later ₹600–700cr over five years may need some debt or equity. Stock is at 80 days; the target is 30 days of net working capital (now 45). Promoters hold **51.7%**, up from 50.8% in September 2023.",
        watch: ["Volume growth returning in Q2 FY27.", "Kisan turning profitable after the merger.", "Stock days falling from 80."],
        charts: plasticsCharts['Apollo Pipes'],
    },
];

export const plasticsBusinesses = { intro, profiles };
