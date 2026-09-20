import { SectorOverview } from './types';

export const packaging: SectorOverview = {
    sector: 'Packaging',
    title: 'Packaging',
    standfirst:
        'Ten companies that turn resin, board, foil and sand into the thing your product arrives in. Packaging is bought by the kilo and sold by the kilo, so the resin price is almost never the story — what matters is whether the brand owner can change supplier without re-qualifying a filling line, how far a full container can profitably travel, and who holds the food, pharma and recycled-content approvals. Those three things decide which of these companies earns a conversion margin for decades and which is renting one until the next cycle.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**EPL is the best business in this sector and it is not close.** It holds roughly 15-25% of the world market in laminated tubes — the pack used for toothpaste and most beauty creams — against Albéa as the only comparable competitor. A tube is qualified on the brand owner\'s filling line, in its artwork, in its regulatory filings and, for oral care, in a global specification controlled from one head office; changing supplier means re-validating across countries. That is why EPL has 100% cost pass-through on more than half its revenue, why it held a 19.6% underlying margin through the worst resin spike in years, and why it won share during the supply crisis rather than losing it. Sustainable tubes are now a record 44% of its sales, which matters because brand owners have public packaging commitments and very few suppliers who can meet them.',
                '**TCPL Packaging is the second holding, and its moat is unglamorous: proximity plus reliability.** A folding carton is bulky, cheap and must arrive in perfect register on the day the line runs, so cartons are bought from plants within a few hundred kilometres and from suppliers who never fail an audit. TCPL has raised margins four quarters running, from 15.0% to 17.8%, while taking share from unorganised printers who cannot finance today\'s board prices. The lithium-ion battery separator project attached to it is a genuinely hard technology that you are not paying for.',
                '**Two smaller companies earn their returns from physics rather than technology, and I like both.** Pyramid Technoplast makes drums and 1,000-litre containers: you cannot economically ship empty space, so a plant beside a chemical cluster beats a better plant 500 kilometres away, which is exactly why it is building at Kutch near Mundra. Knack Packaging turned the woven sack — pure logistics packaging — into a printed shelf billboard, and its customers stay because the colour formulations are its own.',
                '**Where I would be more careful than the multiples suggest: AGI Greenpac.** Its excellent margins were earned while its largest competitor, Hindusthan National Glass — 4,300 tonnes a day and roughly 37% of organised capacity — was insolvent. HNG was bought in September 2025 and is being modernised. A glass furnace is a fixed cost that runs for a decade whether the market needs it or not, so the pricing question for the next three years is what a revived HNG does, not what AGI builds. **And I would avoid nothing outright here, but Ester Industries is an equity stub** — about ₹722cr of gross debt against ₹913cr of market value — where the outcome belongs mostly to lenders unless film spreads hold.',
            ],
        },
        {
            heading: 'The value chain: where the conversion margin actually sits',
            body: [
                'Everything in this sector is a version of the same equation. Buy material at a price you do not control, add a conversion fee per kilo, and get paid. The interesting differences are where in the chain a company sits and whether the fee is contractual.',
            ],
            points: [
                {
                    label: 'Upstream: film and substrate makers — Cosmo First, Ester Industries',
                    text: 'They make the BOPP and BOPET film that everyone else prints on. **There is no conversion fee here — there is a spread,** between film price and resin price, set by global capacity, Chinese exports and trade duties. That spread went from about $89 a tonne to below zero this year. Both companies know this and are escaping upward: specialty grades are 61% of Cosmo\'s volume (and held ₹63 a kilo through the spike) and 29% of Ester\'s film, and both are adding chemically recycled and rPET products where approvals, not capacity, are the barrier.',
                },
                {
                    label: 'Midstream: converters to brand owners — EPL, TCPL, Huhtamaki, Mold-Tek',
                    text: 'They sell a qualified pack to a customer for whom packaging is 1-2% of product cost but 100% of what the consumer touches. **This is the best position in the chain** because the fee is per kilo or per thousand pieces and is renegotiated, not competed away, provided the supplier never fails. EPL and Mold-Tek pass resin through automatically; TCPL and Huhtamaki with a quarter\'s lag.',
                },
                {
                    label: 'Industrial and bulk: Knack, Kanpur Plastipack, Pyramid Technoplast',
                    text: 'Woven sacks, bulk bags and drums for rice, chemicals and fertiliser. The customer is a manufacturer rather than a brand, so aesthetics matter less and freight matters more. **Two of the three are effectively freight-radius businesses** — Pyramid ships air inside empty drums, so it must build beside its customers; Kanpur ships bulk bags to Europe, so its economics move with container rates, which went from about $2,000 to $5,000.',
                },
                {
                    label: 'Glass and metal: AGI Greenpac',
                    text: 'A different industry wearing the same label. A container-glass furnace costs hundreds of crores, runs continuously for ten to twelve years, and cannot be turned down when demand falls — so the industry\'s pricing is decided by how much capacity is lit, not by how good any one operator is. **Glass is also the heaviest thing in this sector, which gives every plant a natural regional monopoly and makes the Gwalior furnace a North India play rather than a national one.** The aluminium can plant coming in 2027 is an entry into someone else\'s industry, against global can makers.',
                },
            ],
        },
        {
            heading: 'What actually stops a customer switching',
            body: [
                'Packaging looks replaceable and mostly is not. Four mechanisms create the stickiness, and they are worth more than any cost advantage.',
            ],
            points: [
                {
                    label: 'Qualification on the filling line',
                    text: 'A tube, pail or carton is validated to run at speed on specific machinery. Mold-Tek supplies in-mould-labelled pails that are designed with the customer\'s filling and lidding equipment and made with its own moulds and robots; EPL\'s tubes are qualified globally by oral-care and beauty groups; pharma packs carry regulatory filings naming the supplier and the site. **Re-qualification costs the customer time and risk, which is why these relationships run for decades and why supply failure — not price — is the thing that loses an account.**',
                },
                {
                    label: 'Regulatory approval on the material itself',
                    text: 'Food-contact and pharma-grade plastics, and recycled content in either, need approvals that take years. That is the real barrier behind Ester\'s food-grade rPET line and Mold-Tek\'s 40% recycled formulation for Asian Paints — the latter sits in rigid non-food packaging, which is squarely inside the mandate rather than exempt from it.',
                },
                {
                    label: 'Proximity and freight economics',
                    text: 'Cartons, drums, glass and sacks are bulky relative to value. Pyramid runs its own fleet of more than 100 trucks and builds beside chemical clusters; AGI\'s furnaces serve regions; TCPL\'s plants sit near FMCG belts. **This is a genuine, permanent moat and the reason unorganised converters survive at all — but it also caps how far any of them can grow from one site.**',
                },
                {
                    label: 'Artwork, colour and the shelf',
                    text: 'Knack\'s customers stay because its proprietary colour formulations make a switch visible on the shelf; EPL\'s customers get global colour consistency across plants. **In branded packaging, matching a competitor\'s print is harder than matching its price.**',
                },
            ],
        },
        {
            heading: 'Technical barriers, graded',
            body: [
                'Most of this sector is competent manufacturing rather than protected technology. A few things genuinely are hard.',
            ],
            points: [
                {
                    label: 'Genuinely hard',
                    text: '**Battery separator film (TCPL)** — a ceramic-coated, zero-defect film where a single flaw causes a cell failure; TCPL is building it without a technology partner, with about a year of customer qualification after commissioning in Q4 FY28 and Chinese incumbents waiting. **Chemical recycling to virgin quality (Ester\'s Elite venture with Loop Industries)** — textile-to-textile PET recycling with Nike as anchor customer and a second global athletic brand signed for up to 15,000 tonnes a year; the technology is licensed and the offtake is the proof. **Recyclable mono-material tubes (EPL)** — replacing a multi-layer barrier laminate with a single recyclable polymer while keeping the barrier is a materials problem, and the brand owners\' 2030 commitments make it a commercial one.',
                },
                {
                    label: 'Moderately hard, mostly process craft',
                    text: 'Glass furnace operation and campaign management (AGI); high-speed in-mould labelling with robotics (Mold-Tek); specialty BOPP and BOPET grades — metallised, heat-sealable, label and cable-grade films, where Cosmo has moved 61% of volume; high-register printing and pinch-bottom finishing on woven sacks (Knack); recyclable flexible structures (Huhtamaki\'s Bluloop). **None of these keeps out a determined competitor forever; all of them take two to three years to match.**',
                },
                {
                    label: 'Not hard, and priced accordingly',
                    text: 'Commodity BOPP and BOPET film, plain woven fabric, standard drums and plain cartons. Here the defence is scale, freight radius and balance sheet, not capability — which is exactly what the resin spike demonstrated when unorganised converters could not finance inventory and their customers moved to the organised players.',
                },
            ],
        },
        {
            heading: 'The competitive map, including one fact that changes AGI',
            body: [
                '**Laminated tubes are a global duopoly-plus.** EPL and Albéa dominate, with Amcor, Alltub and Hoffmann Neopac behind; the top five hold something like 43% of the world market, and EPL alone is put at 15-25% depending on the source. Its customers are global groups that consolidate suppliers, which favours the two firms that can serve them on four continents.',
                '**Container glass in India has just changed hands.** Hindusthan National Glass — 13 furnaces, about 4,300 tonnes a day, roughly 37% of organised capacity — went through insolvency and was acquired in September 2025 by INSCO, which intends to modernise it. AGI has about 2,000 tonnes a day across three plants plus the new 500-tonne Gwalior furnace. **AGI\'s 24-25% margins were earned in a market where the biggest player was crippled;** the honest question for the next three years is not whether AGI executes, but what pricing looks like when a modernised HNG competes again. CANPACK, PGP Glass and Haldyn Heinz are the other credible names, and the Indian container-glass market is only growing about 4.75% a year in tonnes.',
                '**Flexible and carton converting is fragmented and regional.** TCPL competes with ITC\'s paperboards division, Parksons and a long tail of regional printers; Huhtamaki with Uflex, Constantia and the same tail. **Share moves slowly and mostly through service failures at the bottom end** — which is precisely what a 40% input spike produces.',
                '**Rigid industrial packaging is a two-horse race plus locals.** Mold-Tek and Time Technoplast dominate organised pails and drums alongside Pyramid in drums and intermediate bulk containers; the unorganised sector holds the price-sensitive bottom. **Bulk bags are the most exposed to global competition** — Kanpur sells into Europe against Turkish, Vietnamese and increasingly near-shored suppliers, and freight is the swing factor.',
                '**Film is a global commodity with trade walls.** India proposed provisional anti-dumping duties of $56-330 a tonne on PET film from China, Thailand and Bangladesh in March 2026, which shelters Cosmo and Ester at home, while the US removed the duties that had suppressed their American business (Cosmo received about a $7m refund).',
            ],
        },
        {
            heading: 'Are the margins structural? Read per kilo, not per cent',
            body: [
                'In a pass-through business the percentage margin falls mechanically when resin rises, even if nothing has deteriorated. The right measure is profit per unit shipped, and on that basis this sector performed well in a very difficult quarter.',
                '**Per-unit profitability held or improved almost everywhere.** Mold-Tek earned a record ₹46.7 of EBITDA per kilo and raised full-year guidance to ₹44-45. Pyramid earned a record ₹16,380 per tonne. Cosmo\'s specialty films held ₹63 a kilo. EPL recovered 100% of cost inflation for an underlying 19.6%. **That is what a real conversion-fee business looks like under stress.**',
                '**Revenue growth, by contrast, was mostly resin.** Pyramid grew revenue 36% on 4% lower volume; Mold-Tek 46% on about 6% more volume; Cosmo 46% on 9%. The companies that shipped materially more product were Knack (+21% volume), EPL (about 20% underlying) and TCPL (double-digit domestic volume).',
                '**Where the margin is not structural:** anything that depends on a spread rather than a fee. Cosmo\'s 39% commodity film and Ester\'s non-specialty BOPET own the spread, and reports in August put the BOPP-over-resin spread below zero after a second Hormuz closure. AGI\'s glass margin depends on industry capacity utilisation, which is about to change owner. Huhtamaki\'s record 10.5% margin included volume that management itself attributes partly to customers stockpiling ahead of price rises.',
                '**And the cost that never passes through is working capital.** EPL added about ₹180cr in the quarter, Cosmo ₹85cr, Mold-Tek ₹16-18cr with finance costs up about 20% sequentially. In a spike, the balance sheet is the competitive weapon: Huhtamaki hoarded resin to guarantee zero stock-outs precisely because smaller rivals could not afford to.',
            ],
        },
        {
            heading: 'Where the next five years of growth come from',
            body: [
                '**Regulation with a date on it.** Under the plastic waste rules, rigid plastic packaging must contain at least 30% recycled material rising to 60% by 2028-29; flexibles go from 10% to 20% and multilayer from 5% to 10%, with packaging extended producer responsibility effective from 1 April 2026. Food and drug packaging is largely exempt where food and drug regulators restrict recycled plastic. **That exemption is the whole point: the mandate lands hardest on non-food rigid packaging, which is Mold-Tek\'s paint pails, and creates guaranteed demand for recycled feedstock, which is Ester\'s rPET line and Pyramid\'s drum recycling.**',
                '**Premiumisation and format shift.** EPL\'s beauty and personal care business (54% of sales, growing above 20%) is a shift from jars to tubes; Mold-Tek\'s pharma volumes grew 38% at more than ₹100 a kilo, roughly double the company average; AGI\'s specialty glass for perfume and pharma is growing at high double digits and it is adding filling services to become an end-to-end supplier. **Moving up the value per kilo is the most reliable growth in packaging, because the kilos themselves grow with GDP and little more.**',
                '**Substitution between materials.** Aluminium cans are taking share from glass in beverages, which is why AGI is building 1.6 billion cans of capacity — roughly 40% of India\'s current can capacity — and is a hedge against its own core product.',
                '**Exports, once freight allows.** The US removed the duties that suppressed Indian film, and Cosmo expects 25-30% growth in the Americas; Huhtamaki exports about 30% of volume; Kanpur sells 60% of exports into Europe. Against that, container rates and port congestion are the binding constraint — 13% of Cosmo\'s Q1 export volume sat at ports and Pyramid\'s exports stopped entirely.',
                '**And a real technology option, cheaply attached:** TCPL\'s battery separator, ₹125cr of capital for commercial production in Q4 FY28, initially ₹150-200cr of revenue and eventually more than ₹1,100cr if qualification goes well. Import substitution with a Chinese incumbent is a hard game, but the option costs little.',
            ],
        },
        {
            heading: 'The capacity cycle is the sector\'s main risk',
            body: [
                'Nine of these ten companies are adding capacity at once: Knack from about 43,300 to 70,000 tonnes by October 2027; AGI a 500-tonne glass furnace and a 1.6 billion can plant, both in 2027; TCPL a fourth flexible line; Mold-Tek doubling thin-wall capacity at Panipat; Pyramid a new Kutch plant after telling investors the capex cycle was over; Kanpur Unit 3; Cosmo finishing a ₹1,200cr cycle with about 15% of film capacity still unused; Ester the Elite recycling plant.',
                '**In a converter, returns are almost entirely a function of utilisation.** The question to ask of each project is not whether the market grows, but whether the capacity already has a named customer. EPL, TCPL and Mold-Tek are adding against identified demand; AGI is adding a furnace into a market whose largest competitor is being restarted; Knack is adding 62% of capacity into a segment whose returns look high enough to attract competitors.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'EPL',
            stance: 'COMPOUNDER',
            what: 'Global number one or two in laminated and extruded tubes for oral care and beauty, with plants across four continents; merging with Indorama\'s rigid-packaging business Indovida.',
            view: 'The structural position is the point: roughly 15-25% of a global market whose only comparable competitor is Albéa, selling a pack that is validated on the customer\'s filling line and in its regulatory filings, to brand owners who consolidate suppliers globally. That is why more than half of revenue carries automatic raw-material and power pass-through, why it recovered 100% of cost inflation for a 19.6% underlying margin, and why it gained "unprecedented wallet share" during the supply crisis instead of losing it. Beauty and personal care is 54% of sales growing above 20%; every region grew double digits; sustainable tubes are a record 44% of sales with an EcoVadis Platinum rating, which is a qualification advantage as brands chase 2030 packaging commitments.',
            watch: 'The Indovida merger valued EPL at ₹339 a share against about ₹231 today, but it is a court-approved share swap with no cash open offer, so that is a valuation marker rather than a price anyone pays. Indorama becomes controlling shareholder and is also the world\'s largest PET resin producer — watch related-party terms. Integration of a business nearly two-thirds EPL\'s size, and Blackstone\'s residual 16.6%, are the execution and overhang risks.',
        },
        {
            company: 'TCPL Packaging',
            stance: 'COMPOUNDER',
            what: 'Folding cartons, flexible packaging and rigid boxes for Indian FMCG, pharma, tobacco and electronics, with a growing export book and a battery-separator project.',
            view: 'The moat is service and proximity rather than technology, and in cartons that is enough: bulky, low-value, zero-defect packs are bought locally from suppliers who never miss an audit, and the 40% board and resin spike moved work from unorganised printers who could not fund inventory. Margins have risen four quarters in a row from 15.0% to 17.8% despite a one-quarter pass-through lag, Chennai is approaching 70% utilisation and a fourth flexible line adds 30% by early FY28. The lithium-ion separator project — ₹125cr, commercial Q4 FY28 — is a genuinely hard, zero-defect film technology attached at a price the core business does not need to justify.',
            watch: 'It sits between concentrated board suppliers and very large FMCG buyers, so the pricing ceiling is set by its customers. The separator is being built without a technology partner and needs about a year of qualification against Chinese incumbents. A minimum import price on virgin paperboard would raise costs; a steep cigarette tax would hit tobacco cartons.',
        },
        {
            company: 'Pyramid Technoplast',
            stance: 'SCALEUP',
            what: 'Plastic and steel drums and 1,000-litre intermediate bulk containers for India\'s chemical and pharma industries.',
            view: 'A freight-radius business, which is an underrated kind of moat: shipping an empty drum is shipping air, so the plant nearest the chemical cluster wins regardless of who is the better manufacturer — hence Bharuch, Wada and now Kutch beside Mundra port. It makes its own lids and closures and runs more than 100 of its own trucks. Unit economics are excellent and were proved under stress: a record ₹16,380 of EBITDA per tonne while passing through a roughly 40% resin spike. Three cost levers are large relative to its size — a 14.25MW captive solar project targeting ₹15cr a year against roughly ₹31cr of annual profit, a drum-recycling plant worth ₹10-15 a kilo of input cost, and ₹35.4cr of state subsidies over ten years.',
            watch: 'Volume fell 4% and exports stopped entirely on freight. The capex cycle was declared over and then extended to Kutch, deferring free cash flow again. The recycling saving depends on a government portal that was down; return on capital is 12.3%.',
        },
        {
            company: 'Knack Packaging',
            stance: 'SCALEUP',
            what: 'Premium printed and laminated woven polypropylene sacks — rice, pet food, fertiliser, detergents — for brands in 74 countries.',
            view: 'It re-positioned a logistics item as a marketing one. Brands that previously bought plain sacks now buy consumer-grade print with European pinch-bottom finishing, and about 90% stay, because proprietary colour formulations make a change visible on the shelf. It is integrated from extrusion to finishing, grew volume 21% while most of the sector grew only in rupees, and runs at 91% utilisation while bridging to a plant that takes capacity from about 43,300 to 70,000 tonnes by October 2027 — leasing space for low-value weaving and keeping high-margin finishing in-house.',
            watch: 'Returns of 34%-plus and asset turns above 4x against an industry norm of 1.5-2x were questioned by analysts on the call; management\'s explanation (leased weaving, depreciated legacy assets) is plausible but this is a recently listed company with one year of disclosure. Returns fall mechanically when the new plant lands, and unusually high profits invite competitors into the printed-bag segment.',
        },
        {
            company: 'Mold-Tek Pack.',
            stance: 'PRICED',
            what: 'In-mould-labelled rigid plastic pails and containers for paints, lubricants, food and pharma, with in-house moulds and robots.',
            view: 'The stickiness is real: packs are designed around the customer\'s filling line, the moulds are Mold-Tek\'s own, and in paints the pail is part of the brand. That let it pass a resin jump from ₹107 to ₹155 a kilo straight through to top-tier clients who "prioritised supply security over pricing", and to earn a record ₹46.7 of EBITDA per kilo. The mix shift is genuine — pharma volumes up 38% at over ₹100 a kilo, food up 24% — and its 40% recycled formulation for Asian Paints is regulated demand, because rigid non-food packaging is inside the 30%-to-60% recycled-content mandate rather than exempt from it.',
            watch: 'Priced for the mix shift to work while pharma is still about 5% of revenue; Asian Paints concentration remains high even with Birla Opus ramping; lubricant volumes fell 17%; and edible-oil customers downgrade packaging whenever resin spikes.',
        },
        {
            company: 'AGI Greenpac',
            stance: 'CYCLICAL',
            what: 'India\'s largest focused container-glass maker — beer, spirits and food — plus a specialty cosmetics and pharma glass line and an aluminium can plant arriving in 2027.',
            view: 'Operationally this is a good company: contract pricing with automatic soda ash and fuel adjustment, 24-25% margins, debottlenecking finished ahead of schedule, foreign-currency debt prepaid, and specialty glass growing at high double digits towards 200 tonnes a day with filling services attached. But glass economics are set by how much furnace capacity is lit, not by operator skill, and the competitive fact that matters is this: Hindusthan National Glass, with about 4,300 tonnes a day and roughly 37% of organised capacity, spent years in insolvency and was acquired in September 2025 by a buyer intending to modernise it. **Much of AGI\'s recent margin was earned in that vacuum.**',
            watch: 'A revived HNG competing on price, while AGI commissions a 500-tonne Gwalior furnace (March 2027) and a ₹1,000cr, 1.6 billion can plant (H1 2027) on net debt of about ₹389cr and around 2x debt to EBITDA. Cans are a different discipline sold against global can makers. The dashboard\'s AGI figures are a quarter older than its peers.',
        },
        {
            company: 'Cosmo First',
            stance: 'CYCLICAL',
            what: 'India\'s lowest-cost BOPP and BOPET film producer, with specialty films, specialty chemicals, rigid packaging, auto-care films and a pet-care business.',
            view: 'Upstream of the converters, so it owns a spread rather than a fee — and it knows it. The escape route is genuine: specialty films are 61% of volume (targeting 70%) and held ₹63 a kilo through the spike, specialty chemicals grew 34% at over 25% margins towards a ₹400-500cr run-rate by FY29, and rigid packaging grew 58% and turned EBITDA-positive with a 50% capacity increase for minimal capital. The ₹1,200cr capex cycle is finished with about 15% of film capacity still unused, and US duties have been removed with a roughly $7m refund received.',
            watch: 'The 39% of film that is commodity is exposed to a BOPP-over-resin spread reported below zero in August after a second Hormuz closure, against a Q1 BOPP margin of about ₹30 a kilo that included inventory gains. More domestic film lines are coming; working capital rose ₹85cr; the consumer businesses still lose money.',
        },
        {
            company: 'Huhtamaki India',
            stance: 'TURNAROUND',
            what: 'Indian arm of Finland\'s Huhtamaki — premium flexible packaging, labels and recyclable films for multinational and regional FMCG brands.',
            view: 'The competitive position is sound — multinational FMCG customers, about 30% of volume exported, recyclable Bluloop lines now above 70% utilised — and the balance sheet is the weapon: roughly ₹395cr of liquidity, about a fifth of the market value, and no net debt, which let it stockpile resin and guarantee supply that smaller rivals could not. The new management has done what it promised: dropped loss-making accounts, pushed price, and delivered 23% revenue growth with EBITDA up 55% to a record 10.5% margin.',
            watch: 'Management itself says part of the volume was customers stockpiling ahead of price increases and guides only to market growth of 4-5%, so Q1 is not a run rate. The chief executive, finance chief and head of sales left together; parent IT and central-service charges are heavy; and an ₹8.8cr correction for a depreciation-method error points to past control weakness.',
        },
        {
            company: 'Kanpur Plastipack',
            stance: 'CYCLICAL',
            what: 'Export-led bulk bags, woven fabric, yarns and technical textiles, sold mainly to European industrial customers.',
            view: 'The mix upgrade is the right strategy and it is working: low-margin woven fabric cut from 28% to 20% of revenue in favour of bulk bags at 12.5-13.5% margins (52% of revenue, targeting 70-75%), plus a yarn joint venture with recycling and textile-safety certifications for luxury outdoor furniture at 20-25% margins, and a ₹55cr non-woven plant for car interiors and geotextiles. Majority renewable power and those certifications are becoming a real advantage with European buyers facing supply-chain emissions rules.',
            watch: 'This is a labour-and-freight arbitrage, and both moved against it: container rates to Europe roughly doubled to $5,000, customers cut visibility to four weeks, bulk-bag volume fell to 3,000 tonnes, and state minimum-wage increases took about ₹3.5cr a quarter — roughly a sixth of quarterly EBITDA. If freight stays high, European buyers near-shore.',
        },
        {
            company: 'Ester Industries',
            stance: 'TURNAROUND',
            what: 'BOPET film maker with a high-margin specialty polymers business, a recycled PET line, and a textile-to-textile chemical recycling joint venture with Loop Industries.',
            view: 'Two businesses inside one balance sheet. The film business is a spread play at the bottom of its cycle, now helped by proposed anti-dumping duties on Chinese, Thai and Bangladeshi PET film and the removal of US tariffs; Q1 EBITDA more than doubled and utilisation reached 84%. The interesting part is the technology: specialty polymers at 45% EBIT margins, a 20,000-tonne recycled PET line feeding a mandate, and the Elite venture with Loop targeting about $150m of peak revenue from 2028 with Nike as anchor and a second global athletic brand signed for up to 15,000 tonnes a year. Promoters put in ₹165cr through warrants.',
            watch: 'About ₹722cr of gross debt against a ₹913cr market value means equity is a thin, levered slice, and the return on capital is 2.8%. Value-added film is 29% of the mix against a 50-60% target, so the spread still decides the year, and Elite is in detailed engineering with 2028 a long way off for a leveraged company.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            '**EPL is the position I would size largest.** It is the only company here with a defensible global position — a two-firm world market, packs qualified on the customer\'s line and in its filings, contractual pass-through on more than half of revenue, and the sustainability credentials that decide which supplier gets the next global tender. The merger marker of ₹339 against ₹231 is a bonus, not the thesis; the thesis is that this is a category leader whose customers cannot casually replace it.',
            '**TCPL Packaging is the steady second holding.** Cartons are a local, service-driven business and TCPL keeps winning the local game: four quarters of rising margins, share taken from printers who could not fund the spike, and a hard technology option in battery separators that costs little to hold.',
            '**Pyramid Technoplast and Knack Packaging are the two small companies whose moats I can actually describe** — one built on freight economics and self-made closures, the other on print quality and colour formulations that make switching visible to the consumer. Both are cheap enough relative to what they earn per unit. Knack needs another year of listed disclosure before I would size it properly.',
            '**Mold-Tek Pack. is a good business at a price that already assumes the pharma mix shift works.** I would rather buy it after a weak quarter than before one.',
            '**AGI Greenpac is where I have changed my mind.** The company is well run and the projects are sensible, but a large part of its recent margin was a gift from a competitor in insolvency, and that competitor has a new owner and a modernisation plan. Cans are an entry into an industry it does not know. I would want to see what glass pricing does once Hindusthan National Glass is properly back before treating AGI\'s margins as normal.',
            '**Cosmo First and Kanpur Plastipack are cycles with genuine self-help attached** — specialty mix at Cosmo, product mix at Kanpur — but a spread and a freight rate respectively will decide the next two quarters, and both are currently moving the wrong way.',
            '**Huhtamaki India and Ester Industries are cheap for reasons I would want resolved.** Huhtamaki must show volumes hold after the stockpiling, and needs a clean quarter of governance. Ester must reduce ₹722cr of debt using a spread it does not control before its recycling venture needs equity.',
            'The discipline I would apply to this whole sector: ignore revenue growth and percentage margins during an input spike and read profit per kilo, volume, and utilisation. And ask of every new plant whether the customer is already named — because nine of these ten are expanding at the same time, and in converting, the difference between a compounder and a cyclical is usually just whether the machine is full.',
        ],
        bottomLine:
            'Packaging pays a conversion fee to whoever the brand owner cannot easily re-qualify, and a spread to everyone else. Own the qualified converters — EPL above all, then TCPL Packaging, with Pyramid Technoplast and Knack Packaging for their freight and print moats — treat Cosmo First, Kanpur Plastipack and AGI Greenpac as cycles whose prices are set elsewhere, and wait for proof at Mold-Tek Pack., Huhtamaki India and Ester Industries.',
    },

    sources: [
        {
            label: 'Laminated tubes: global market shares of EPL, Albéa and peers — GM Insights',
            url: 'https://www.gminsights.com/industry-analysis/laminated-tubes-market',
        },
        {
            label: 'India container glass: HNG capacity and INSCO acquisition, AGI capacity — Mordor Intelligence',
            url: 'https://www.mordorintelligence.com/industry-reports/india-container-glass-market/companies',
        },
        {
            label: 'AGI Greenpac: what happens when the biggest competitor returns — 91Capital',
            url: 'https://91capital.substack.com/p/agi-greenpac-when-your-biggest-competitor',
        },
        {
            label: 'India\'s packaging firms EPL, Indovida to merge in $2bn deal — ICIS',
            url: 'https://www.icis.com/explore/resources/news/2026/03/30/11193160/india-s-packaging-firms-epl-indovida-to-merge-in-2bn-deal/',
        },
        {
            label: 'Plastic Waste Management (Amendment) Rules 2026: recycled content and EPR — Corporate Professionals',
            url: 'https://www.corporateprofessionals.com/regulatoryupdate/plastic-waste-management-amendment-rules-2026-strengthening-epr-recycled-content-and-reuse-obligations/',
        },
        {
            label: 'India plans provisional anti-dumping duties on PET films from Bangladesh, China, Thailand — ICIS',
            url: 'https://www.icis.com/explore/resources/news/2026/03/23/11190930/india-plans-provisional-adds-on-pet-films-from-bangladesh-china-thailand/',
        },
        {
            label: 'Packaging polymer prices may see another upswing in August 2026 — ChemAnalyst',
            url: 'https://www.chemanalyst.com/NewsAndDeals/NewsDetails/why-are-packaging-polymer-prices-rising-again-in-august-2026-43346',
        },
        {
            label: 'Construction begins at AGI Greenpac\'s aluminium beverage can facility — AlCircle',
            url: 'https://www.alcircle.com/news/construction-begins-at-agi-greenpacs-aluminium-beverage-can-facility-in-up-118336',
        },
    ],
};
