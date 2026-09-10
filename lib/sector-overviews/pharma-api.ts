import { SectorOverview } from './types';

export const pharmaApi: SectorOverview = {
    sector: 'Pharma API',
    title: 'Pharma API',
    standfirst:
        'Twelve companies that split almost perfectly in two: five earning 24-37% margins on real chemistry, ' +
        'and a commodity tail earning half that. The China+1 story is largely a mirage — but it is true for three specific names.',
    lastUpdated: '2026-09-09',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                'This is the most cleanly bimodal group we cover, and the split is visible in a single line of data. **Five companies — Alivus, Acutaas, Concord, Blue Jet and Supriya — earn EBITDA margins of 24-37% on returns of 17-32%. The commodity tail of IOL, Aarti Drugs, SMS and Solara earns 14-17% margins on returns of 5-13%.** There is almost nothing in between.',
                'My recommendation is to own the top half and to buy the bottom half only on cycle, only cheaply, and never on the narrative. Specifically I would concentrate in **Alivus and Concord**, with Acutaas as a quality holding at a full price. Alivus at 27.1x for a 23.8% return on capital and sector-best 36.6% margins is the single best risk-adjusted entry in either pharma note.',
                'I would also ask the Committee to discount, heavily, the "India replaces China" argument that appears in every deck in this sector. At the national level it has not happened. It has happened inside three specific companies, and that is a different and much more investable claim.',
            ],
        },
        {
            heading: 'What actually separates these twelve',
            body: [
                'An API business earns its margin from exactly one thing: whether the molecule is hard to make. Everything else — scale, integration, geography — is a modifier on that. The list sorts into three groups.',
            ],
            points: [
                {
                    label: 'Complex chemistry with regulatory capture — Alivus, Acutaas, Concord, Blue Jet, Supriya, Shilpa',
                    text: 'Hard molecules, deep filings, prohibitive switching costs. Alivus holds 617 global DMF and CEP filings and 29 high-potency products, and earns 36.6% margins. Concord runs 1,250 cubic metres of fermentation capacity that makes it the lowest-cost producer globally on immunosuppressants, at 78.9% gross margin. Blue Jet is the category leader in iodinated contrast media intermediates. This is where the returns live.',
                },
                {
                    label: 'Commodity scale — IOL, Aarti Drugs, SMS, Solara',
                    text: 'Ibuprofen, paracetamol, metformin. Real businesses with real cost advantages, and no pricing power whatsoever. IOL is the global scale leader in ibuprofen with zero debt and still only earns 11.3% on capital at 14.7% margins. Solara is the cautionary version: management has concluded its own ibuprofen business is structurally unviable on a twenty-year-old process, with up to ₹700cr of capital at risk.',
                },
                {
                    label: 'Niche and adjacent — NGL Fine-Chem, Shree Ganesh',
                    text: 'NGL makes veterinary APIs and is the sole domestic manufacturer of Fluralaner — a genuinely defensible position in a market Big Pharma cares less about. Shree Ganesh is a small intermediates maker pivoting to CDMO for European agrochemicals and Japanese semiconductor customers. Different end markets, different cycles, and neither should be valued off Indian pharma comparables.',
                },
            ],
        },
        {
            heading: 'The China+1 thesis, tested against the data',
            body: [
                'Every company in this sector sells the Committee the same story. It deserves a harder look than it usually gets, because at the aggregate level **the story is not true**.',
                'The Production Linked Incentive scheme for bulk drugs launched in FY23 with a ₹6,940cr outlay. Cumulative sales to date are roughly ₹2,720cr with about ₹2,192cr of import substitution. Against that, **India\'s total imports of APIs, KSMs and intermediates rose from ₹27,361cr in FY21 to ₹36,124cr in FY25 — up 32%.** Imports from China remained at or above 70% for a wide range of critical APIs across both FY24 and FY25, with limited change between the two. Penicillin G, ciprofloxacin and norfloxacin still run at 80-100% import dependence.',
                'So the correct reading is that policy has not moved the aggregate, and buying this sector on the reshoring narrative is buying a slogan. **What has worked is molecule-specific and company-specific**, and that is what we should pay for.',
                'Three companies here have genuinely removed a Chinese input from their own cost line. **Aarti Drugs** commissioned Sayakha to make methylamines, the key metformin intermediate, and is now largely independent of imported DCDA — a real structural change, currently running at 65% utilisation. **SMS Pharmaceuticals** put ₹150cr-plus into backward integration for its core APIs and took margins from the mid-teens to 20%. **Supriya** has 72% of revenue fully backward integrated. Everyone else in this list is describing a market opportunity rather than a completed action, and should be underwritten accordingly.',
            ],
        },
        {
            heading: 'What is moving the numbers this year',
            body: [
                'Three forces are doing most of the work in the FY27 prints, and they affect the two halves of this list very differently.',
            ],
            points: [
                {
                    label: 'Input inflation and freight, hitting the commodity half hardest',
                    text: 'Petroleum-linked solvent costs and Middle East freight disruption are the recurring theme in every transcript. The complex names largely pass it through: Alivus expanded gross margin to 60.2% using membrane-based solvent recovery; Solara protected an adjusted 54.5% gross margin on pass-throughs without losing customers, which is the clearest proof its growth portfolio is genuinely sticky. The commodity names cannot. Blue Jet lost 300bps of gross margin to exactly this, because contractual pass-throughs operate with a lag. Where a company sits on that spectrum tells you what it really owns.',
                },
                {
                    label: 'The supply-tightness windfall, which will reverse',
                    text: 'A material part of this year\'s commodity-side earnings is artificial scarcity from geopolitical disruption rather than structural demand. Aarti Drugs has captured 15-20% positive pricing variance on metformin. IOL is running record revenue at 14.7% margins against an 11-12% historical baseline. **If global supply chains normalise and Chinese suppliers resume aggressive pricing, these gains reverse.** The Committee should assume peak-cycle earnings on the commodity half and price accordingly.',
                },
                {
                    label: 'Peptides and GLP-1, pulling the complex half up-market',
                    text: 'The same wave driving the CDMO sector reaches here. Shilpa is building a dedicated large-scale peptide facility for completion by end-FY27 and developing both synthetic and semi-synthetic semaglutide routes. Blue Jet\'s new Hyderabad R&D centre targets peptide fragments and GLP-1 intermediates. Supriya and SMS both name peptides as the FY29 destination. This is the credible route up the value chain — and it is also where capital is being committed years before revenue.',
                },
            ],
        },
        {
            heading: 'Risks, with names attached',
            body: [
                'Four exposures matter here, and they are not evenly distributed.',
            ],
            points: [
                {
                    label: 'Governance — Supriya is the live case',
                    text: '**A General Manager remains in judicial custody over a missing export authorisation for a psychotropic drug, and the matter is sub judice.** Management characterises it as human oversight; I would read it as internal compliance controls that have not kept pace with growth. In the same quarter a regional water shortage at Lote MIDC halted ₹35cr of production — which sits awkwardly beside a "China+1 reliability" pitch — and management has responded by cancelling a planned Q2 shutdown and maintaining full-year guidance, which now requires a near-vertical recovery on elevated inventory. Excellent underlying business, real questions about the operating system around it.',
                },
                {
                    label: 'Customer and product concentration',
                    text: 'Blue Jet sells into an end market where four players control 75% of contrast media — a supply-chain realignment by any one of them moves the year. Alivus just absorbed a **52.6% collapse in legacy Glenmark revenue in a single quarter**, which it survived impressively but which shows what the anchor relationship can do. Shree Ganesh depends on three CDMO contracts, and strict non-disclosure agreements obscure the client, product and end market entirely, so the pipeline cannot be independently verified. SMS books roughly 14% of profit from an associate, VKT Pharma, which obscures core cash conversion.',
                },
                {
                    label: 'Capital committed ahead of revenue',
                    text: 'Blue Jet has approved **₹1,000cr over three years for the Vizag greenfield**, against ₹885cr of trailing revenue — the largest relative commitment in this group, part-funded by a QIP. Supriya has ₹200cr on Patalganga Phase 1 with a 2.5-year horizon. NGL revised Phase II from ₹160cr to ₹210cr. Shilpa says the greenfield phase is finished and future spending is debottlenecking, which is the most comfortable position on this page. Where capex outruns visibility, returns fall before earnings do.',
                },
                {
                    label: 'Chinese normalisation — the risk that unites the commodity half',
                    text: 'Aarti Drugs, IOL, SMS and Solara all currently benefit from tight supply. All four say, in their own words, that easing conditions and renewed Chinese pricing pressure is what breaks the thesis. Orchid Pharma makes the same point from the neighbouring sector about cephalosporin KSMs. This is one correlated bet, not four independent ones, and the Committee should size it as such.',
                },
            ],
        },
        {
            heading: 'How the twelve sort',
            body: [
                '**Own the complex compounders.** Alivus and Concord first, Acutaas at a price. Alivus is the standout: 36.6% margins, 23.8% on capital, zero debt, ₹880cr of cash, and it absorbed a >50% drop in its anchor client while still growing the top line and expanding margins. At 27.1x that is the best quality-for-price in either pharma note. Concord at 54.1x is more expensive but owns a fermentation scale advantage that is close to unassailable, with ₹3,000cr of peak revenue potential already built and minimal further capex needed.',
                '**Quality at a full price.** Acutaas at 67.5x has the best economics here — 31.6% on capital, 34.3% margins, 59% growth — but it is no longer an API company. Battery electrolyte additives are fully contracted for three years and a semiconductor joint venture starts contributing in FY28. Underwrite it as advanced chemistry, and accept you are paying for two option values.',
                '**The cycle names, at cycle prices.** Aarti Drugs at 19.9x is the cheapest and has done the most real backward integration; IOL at 35.1x is superbly run with zero debt and no pricing power. Own them when metformin and ibuprofen spreads are compressed, not after a windfall year.',
                '**The ramps.** Shilpa, SMS and NGL are all past their heavy capex with utilisation curves ahead of them. Each is a reasonable holding once the specific unlock lands — Shilpa\'s FY28 launches, SMS\'s 800 MT/month ibuprofen line, NGL\'s US FDA approval.',
                '**The sum-of-the-parts.** Solara is the one name here that has to be valued as two companies. The ibuprofen business is publicly conceded to be unviable with up to ₹700cr at risk; the Growth API business behind it runs at roughly 25% EBITDA margins, passed a severe cost shock through to customers without losing them, and has a low-capital path to more capacity via debottlenecking, dormant DMF revival and the OneSource launches. A conclusive decision on the ibuprofen unit is expected in H1 FY27. That is a dated catalyst on a hidden asset, which is a very different proposition from a broken company.',
                '**Verify before sizing.** Shree Ganesh has good margins and a sensible CDMO pivot, but non-disclosure agreements hide the clients, products and end markets entirely. At 57.9x on under ₹100cr of revenue, that is more opacity than the price allows.',
            ],
        },
    ],

    verdicts: [
        {
            company: 'Acutaas Chemicals',
            stance: 'COMPOUNDER',
            what: 'Advanced chemistry platform — pharma CDMO intermediates, battery electrolyte additives and, from FY28, semiconductor chemicals.',
            view: 'The best economics in this group: 31.6% on capital, 34.3% margins and 59% revenue growth, with gross margins up 466bps to 57.9% on continuous flow chemistry. The discipline is what impresses — management refuses to sell low-margin legacy product, and the Jagadia battery block is **100% contracted for three years** rather than built on hope. The ₹1,000cr pharma CDMO target for FY28 looks credible on four newly validated products reaching peak run-rate in H2 FY27.',
            watch: '67.5x prices in both option values succeeding. Semiconductor qualification cycles are long and unforgiving, and a structural EV slowdown would weaken the hand at battery contract renewal. Ankleshwar remains below peak utilisation until FY28, dragging returns until it fills.',
        },
        {
            company: 'Shilpa Medicare',
            stance: 'SCALEUP',
            what: 'Complex delivery specialist — oncology APIs, transdermals, oral films, biologics and ADCs — pivoting to CDMO.',
            view: 'The perpetual-capex era is genuinely over, which is the whole reason to look now. Management confirms greenfield spending on biologics and formulations is complete, net debt has fallen to 1.3x EBITDA triggering an AA- upgrade, and Q1 delivered record revenue with PAT up 115% and ~30% margins. The pipeline is deep: 25+ NCE programmes with three in late stage, Rotigotine approved in Europe, Abraxane and Enzalutamide tracking to FY28 US launches, and a dedicated peptide facility for end-FY27.',
            watch: '10.9% reported return on capital against a claimed adjusted 18%-plus — the gap is the harvest that has not happened yet, and 66.2x pays for it in advance. Shilpa also carries genuine clinical risk on its own trials (albumin, semaglutide, Nor-UDCA), where failure means writing off capitalised R&D outright.',
        },
        {
            company: 'Alivus Life Sciences',
            stance: 'COMPOUNDER',
            what: 'Regulated-market API developer in complex niches — cardiovascular, CNS, high-potency — moving into CDMO.',
            view: 'The best risk-adjusted holding in either pharma note. **36.6% EBITDA margins — the highest here — on a 23.8% return, at 27.1x, with zero debt and ₹880cr of cash.** The proof point is Q1: it absorbed a 52.6% collapse in legacy Glenmark revenue and still grew the top line while expanding margin, which settles the old question of whether this was ever really a captive supplier. 617 DMF and CEP filings plus 29 high-potency products is genuine regulatory capture, and membrane-based solvent recovery is a real answer to oil-linked inflation rather than a slide.',
            watch: 'Management is deliberately capping guidance at 10-12% revenue growth and 30-32% margins on KSM inflation — so you are buying quality and cash generation, not acceleration. Sholapur has slipped to Q3 FY27, which delays the regulated-market inspections that unlock the next leg. The ₹880cr is an M&A decision waiting to be made well or badly.',
        },
        {
            company: 'Concord Biotech',
            stance: 'COMPOUNDER',
            what: 'Fermentation-based APIs — immunosuppressants, oncology, anti-infectives — with new injectables and a US front-end.',
            view: 'The moat here is physical and hard to copy. Fermentation demands capital, specialist talent and long regulatory gestation, and at 1,250 cubic metres Concord is the lowest-cost producer globally in its molecules. It used that in Q1 to price aggressively, take wallet share **and still expand gross margin to 78.9%** — that combination is rare and tells you the cost position is real. Zero debt, ₹442cr of cash, and capacity already in place for roughly ₹3,000cr of revenue on ₹9.5cr of quarterly capex.',
            watch: 'The injectables plant is running at 5% utilisation against ₹600cr of peak potential, and Stellon in the US is brand new — both are fixed-cost drags until they scale. Formulation revenue fell 23% year on year, which raises a fair question about whether a B2B API culture can execute downstream. Regulatory and tender bottlenecks have caused lumpiness before and will again.',
        },
        {
            company: 'Blue Jet Healthcare',
            stance: 'PRICED',
            what: 'Contrast media intermediates and complex APIs, moving into CDMO, peptides and GLP-1 intermediates.',
            view: 'A high-quality franchise with sticky revenue: category leadership in iodinated contrast media, 26.1% on capital, and margins back to 33.4% as destocking ended and revenue rose 25% sequentially. Backward integration at Mahad is running ahead of schedule and will remove reliance on external side-chains. The QIP has de-risked the funding of the next phase.',
            watch: 'Two things to size against. **Four players control 75% of the contrast media end market**, so a single innovator realignment moves the year. And the ₹1,000cr Vizag commitment over three years is large against ₹885cr of trailing revenue — the biggest relative bet in this group. Pass-throughs lag, which already cost 300bps of gross margin. At 46.8x, execution needs to be clean.',
        },
        {
            company: 'Supriya Lifescience',
            stance: 'TURNAROUND',
            what: 'Niche APIs — anaesthetics, antihistamines, vitamins — with 72% backward integration, pivoting to CDMO and finished dosages.',
            view: 'The underlying franchise is strong: category leadership in specific molecules like chlorpheniramine maleate and ketamine, 72% of revenue backward integrated, established DMFs and CEPs, and 31% top-line growth. The Ambernath CDMO pivot with two new anaesthetic inhalation products and an advanced-stage term sheet is the right direction.',
            watch: '**This is a governance and operations call before it is a valuation call. A General Manager is in judicial custody over a missing psychotropic export authorisation, sub judice.** Alongside that, a regional water shortage halted ₹35cr of production and collapsed margins 1,000bps sequentially to 25% — an uncomfortable single point of failure for a company selling supply reliability. Management has cancelled the Q2 shutdown and held full-year guidance, which now needs a hockey stick on elevated inventory. Wait for the compliance question to close.',
        },
        {
            company: 'IOL Chem & Pharma',
            stance: 'CYCLICAL',
            what: 'Global scale leader in ibuprofen, diversifying into paracetamol, metformin and clopidogrel, fully backward integrated.',
            view: 'Exceptionally well run for what it is. Zero debt, entirely self-funded capex of ₹200-250cr a year, record ₹756cr quarterly revenue, and non-ibuprofen APIs growing 67% as the single-product proxy label falls away. Management is genuinely credible — they refuse to upgrade guidance after a strong start and are candid about sequential gross margin pressure rather than dressing it up. Paracetamol lines at 55% utilisation heading to 70-75% is free operating leverage requiring no new capital.',
            watch: 'These are generic molecules and there is no pricing power. 11.3% on capital and 14.7% margins against an 11-12% historical baseline means you are looking at above-mid-cycle earnings. Legacy lines already run at 80-95% utilisation, so growth beyond paracetamol depends on the Bathinda greenfield clearing statutory approval. Buy the trough, not the print.',
        },
        {
            company: 'Aarti Drugs',
            stance: 'CYCLICAL',
            what: 'High-volume APIs — antidiabetics, antibiotics — with genuine backward integration into metformin intermediates.',
            view: 'The most substantive China-substitution story in this list, and the cheapest stock at 19.9x. **Sayakha produces methylamines in-house, making Aarti one of the only major players largely independent of imported Chinese DCDA for metformin** — that is a completed structural change, not an intention, and it is running at 65% utilisation. Capital allocation is sensible: brownfield and quasi-greenfield expansions targeting 3-4x asset turns rather than 1.5x greenfields, plus a dedicated USFDA metformin block commercialising within a year.',
            watch: '12% on capital and 13.8% margins say the mix upgrade is early. More importantly, a meaningful part of current earnings is the 15-20% positive pricing variance from West Asia supply tightness — **if that normalises and Chinese pricing returns, the recent gains reverse.** Older-generation antibiotics also expose it to domestic price control. Own it cheap and on cycle.',
        },
        {
            company: 'SMS Pharmaceuticals',
            stance: 'SCALEUP',
            what: 'Mid-tier API maker shifting from commoditised antidiabetics to integrated ibuprofen, ARVs and joint-venture molecules.',
            view: 'A credible self-help story. Roughly ₹150cr-plus into backward integration over three years took margins from the mid-teens to 20%, and asset turnover of about 1.5x is genuinely industry-leading. The ₹280cr brownfield takes ibuprofen from 500 to 800 MT a month by March 2027 against current 80% utilisation, and the Chemo joint venture commercialises five products in FY27 to replace fading antidiabetic revenue. Management guides conservatively and then delivers, which counts.',
            watch: 'Stuck in the middle for now — no longer cheap-and-commodity, not yet sticky-and-premium. **Roughly 14% of FY26 profit came from an associate, VKT Pharma, which obscures core cash conversion** and should be stripped out. Gross margins remain hostage to petroleum-linked solvents, and the peptide and CDMO optionality is an FY29 story, not an FY27 one.',
        },
        {
            company: 'Solara Active Pharma',
            stance: 'TURNAROUND',
            what: 'Two businesses in one shell — a structurally broken commodity ibuprofen operation, and a niche "Growth API" portfolio that is genuinely good and almost entirely hidden by it.',
            view: '**The reason to do the work here is the second business, not the first.** Management describes a Growth API entity running at roughly 25% EBITDA margins — against a consolidated 16.5% that the ibuprofen drag pulls down. That business held an adjusted ~54.5% gross margin straight through the West Asia cost shock by passing inflation on **without losing formulation customers**, which is the strongest available evidence that these catalogue generics and polymers are critical, specified-in products rather than substitutable commodity. FDA inspections at Mangalore and Ambernath have gone through. Three things compound it: ₹40cr of debottlenecking unlocks 20-30% more capacity on existing lines with near-immediate payback; a revival of dormant "dominant DMFs" brings older high-margin niche molecules back to commercial relevance at almost no capital cost; and the OneSource partnership — the same Onesource Specialty in our CDMO book — brings FY27 launches that move Solara toward finished-dosage integration rather than selling ingredients. Deleveraging is running ahead of plan: net debt down to ₹479cr at 1.9x, targeting sub-₹440cr by March 2027 and net-cash by FY29.',
            watch: 'You are underwriting a corporate action, and the Committee should be clear-eyed about it. **Management has conceded the legacy ibuprofen business is structurally unviable on a twenty-year-old process against Chinese and Indian overcapacity, and has guided that full recovery of the roughly ₹700cr deployed there is highly unlikely** — with a conclusive outcome expected in H1 FY27. Vizag is mothballed, Pondicherry is a dedicated single-product site that is hard to repurpose, and the company has a track record of "exceptional items" and of taking too long to make this decision. The 787x headline sits on a 4.86% return because consolidated earnings are the good business net of the bad one. Buy the sum of the parts if you believe the excision happens; the catalyst is dated, which is what makes this a position rather than a pass.',
        },
        {
            company: 'NGL Fine-Chem',
            stance: 'SCALEUP',
            what: 'Veterinary APIs and intermediates, mostly farm animal, pivoting from unregulated markets to the US and EU.',
            view: 'A well-judged niche. Being **the sole domestic API manufacturer for Fluralaner** is a genuine early-mover position in a blockbuster companion-animal molecule where price erosion has now stabilised, and Afoxolaner technology is developed. Management showed real agility, outsourcing intermediates to free clean-room capacity for finished APIs and establishing a ₹150cr-plus quarterly base while Phase II is built. Margins recovered 769bps to 14.35%, tracking the 15-18% guided band. Phase II targets ₹350-400cr of peak revenue.',
            watch: 'The whole margin thesis rests on US FDA audits landing on schedule — any Form 483 pushes high-margin commercialisation past FY28 while ₹210cr of new depreciation has already started. In unregulated markets NGL still fights roughly 20 domestic and 40 Chinese competitors with no switching costs at all.',
        },
        {
            company: 'Shree Ganesh Remed.',
            stance: 'PRICED',
            what: 'Small-scale complex intermediates maker pivoting to CDMO for European agrochemical and Japanese semiconductor customers.',
            view: 'Impressive margins for the size — around 32-34% — and the pivot is sensible: European plant approval for a patented agrochemical with 15-year protection, and pilot audits underway for Japanese semiconductor intermediates. Management is pragmatic, deferring the capital-intensive Dahej greenfield in favour of brownfield expansion at Unit 1 and openly describing revenue as lumpy rather than pretending otherwise.',
            watch: '**Strict non-disclosure agreements obscure client names, products and end markets entirely, so the pipeline cannot be independently verified — a black box at 57.9x on under ₹100cr of revenue.** Capacity utilisation depends on three contracts, clients are explicitly dual-sourcing against Chinese suppliers which caps pricing power to a geographic hedge, and the major revenue steps are tied to CY2027 launches outside the company\'s control.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            'A view on all twelve. The quality here is concentrated, so the book should be too — but the Committee should have a position on every name, not just the ones I like.',
            '**Alivus is the position I would size largest**, and I do not think it is close. You are paying 27.1x for the highest margins in the sector, a 23.8% return on capital, zero debt and ₹880cr of cash, from a company that absorbed a 52.6% collapse in its anchor client\'s revenue in a single quarter and still grew the top line while expanding margin. That quarter answered the only real bear argument — that this was a captive Glenmark supplier in independent clothing. The market has not repriced it, in my view because management guides conservatively at 10-12%. Conservative guidance from a business earning 37% margins is a reason to buy it, not to avoid it.',
            '**Concord is the second position.** Fermentation at 1,250 cubic metres is genuinely hard to attack, and the Q1 evidence — cutting price to take wallet share while gross margin still expanded to 78.9% — is the clearest demonstration of a cost moat anywhere in these three notes. Roughly ₹3,000cr of peak revenue capacity is already built and paid for on ₹9.5cr of quarterly capex. I am content to sit through the injectables drag at 5% utilisation and the formulations wobble, because I am not funding the capacity that fixes them.',
            '**Acutaas I would own smaller and slightly reluctantly at 67.5x.** The economics are the best here — 31.6% on capital, 34.3% margins, 59% growth — and locking the battery block under three-year contracts before building it is exactly the derisking I want to see. But you are underwriting two option values in two industries the company was not in three years ago, and semiconductor qualification cycles are long and unforgiving. Quality, fully paid for.',
            '**Blue Jet is the one I would put on a limit order.** Category leadership in contrast media intermediates, 26.1% on capital, margins back to 33.4%, and Mahad backward integration running ahead of schedule are all genuinely good. What stops me at 46.8x is that ₹1,000cr of Vizag capex against ₹885cr of revenue is the largest relative bet in this group, and the end market has four buyers controlling 75% of it. Get paid to take that concentration, or wait.',
            '**The three ramps — Shilpa, SMS and NGL — are each a yes on a specific unlock.** Shilpa has genuinely ended the perpetual-capex era, cut net debt to 1.3x and earned an AA- upgrade, with 25+ NCE programmes and FY28 launches queued; the 10.9% reported return against a claimed adjusted 18% is precisely the harvest you would be buying, and 66.2x pays for it early. SMS is a real self-help story with 1.5x asset turns and ibuprofen going from 500 to 800 MT a month by March 2027 — just strip out the 14% of profit coming from associate VKT Pharma before you value it. NGL being the sole domestic maker of Fluralaner is a proper niche position, and the entire margin case rests on US FDA audits landing on time against ₹210cr of depreciation that has already started.',
            '**On the commodity half, the market is paying for a China+1 story the national data does not support.** API and intermediate imports rose 32% between FY21 and FY25 and Chinese dependence barely moved. So I would not pay a re-rating multiple for the narrative — but I would own **Aarti Drugs**, because it is the one company that actually completed the integration at Sayakha and is the cheapest name here at 19.9x. Just not now: 15-20% of its current pricing variance is West Asia supply tightness that reverses. **IOL is the better-run business of the two** — zero debt, self-funded capex, genuinely candid management, paracetamol utilisation going from 55% to 75% for free — and I would still wait, because 14.7% margins against an 11-12% baseline means buying cycle-peak earnings from an excellent operator.',
            '**Solara is the most interesting thing on this page and the one I got wrong first time.** The instinct is to look at 787x on a 4.86% return and move on. But the consolidated number is a good business net of a bad one: a Growth API entity running near 25% EBITDA margins, which passed the entire West Asia cost shock through to customers without losing them, sitting behind an ibuprofen operation management has publicly conceded is unviable. Add ₹40cr of debottlenecking unlocking 20-30% more capacity, a revival of dormant high-margin DMFs at almost no capital cost, and the OneSource launches pulling it toward finished dosages — and a conclusive decision on ibuprofen expected in H1 FY27. **That is a dated catalyst on a hidden asset.** The ₹700cr write-off is probably coming and probably already deserved by the price. I would take a starter position now and add on the announcement.',
            '**Supriya I want to own and currently will not.** 72% backward integration, category leadership in specific anaesthetics, 31% growth and the Ambernath CDMO pivot are all genuinely attractive. But a General Manager is in judicial custody over a missing psychotropic export authorisation, and a regional water shortage halted ₹35cr of production at a company whose pitch is supply reliability. Cancelling the Q2 shutdown to hold guidance on elevated inventory is the response of a management team under pressure. Good business, immature operating system — wait for the compliance matter to close.',
            '**Shree Ganesh is the only outright pass.** The margins are good at 32-34% and the CDMO pivot into European agrochemicals and Japanese semiconductors is sensible. But non-disclosure agreements hide the clients, the products and the end markets entirely, capacity depends on three contracts, and clients are explicitly dual-sourcing against Chinese suppliers — which caps it to being a geographic hedge rather than a moat. At 57.9x on under ₹100cr of revenue, I cannot verify enough to underwrite it.',
            'What would change my mind on the sector: evidence that PLI is finally moving the aggregate import numbers rather than a handful of molecules. That would make the whole commodity half re-rateable and I would want IOL and Aarti before it became consensus. I check that data annually, not quarterly, and it has not turned.',
        ],
        bottomLine:
            'Buy the chemistry, not the narrative. Alivus and Concord earn their returns from things that are genuinely hard to copy; the commodity half is a cycle wearing a China+1 costume and should be bought cheap or not at all; and Solara is a good business hiding behind a bad one with a dated catalyst to separate them.',
    },

    sources: [
        {
            label: 'India\'s API trap: incremental PLI gains mask a quantifiable Chinese dependency crisis — IndraStra',
            url: 'https://www.indrastra.com/2026/06/indias-api-trap-incremental-pli-gains.html',
        },
        {
            label: 'India inching towards API self-reliance — BioSpectrum India',
            url: 'https://www.biospectrumindia.com/features/73/27722/india-inching-towards-api-self-reliance-.html',
        },
        {
            label: 'PLI scheme for bulk drugs: boosting India\'s pharma self-reliance in 2026',
            url: 'https://plutusias.com/pli-scheme-for-bulk-drugs-boosting-indias-pharma-self-reliance-in-2026/',
        },
        {
            label: 'India\'s API import problem — pharma manufacturing 2026',
            url: 'https://www.niir.org/blog/india-api-import-problem/',
        },
        {
            label: 'Indian pharma margins face moderation in FY27 as US tailwinds fade',
            url: 'https://www.whalesbook.com/news/English/healthcarebiotech/Indian-Pharma-Margins-Face-Moderation-in-FY27-as-US-Tailwinds-Fade/6a39fd8aa1c5bf0843293dc2',
        },
        {
            label: 'US 100% tariff on patented pharma: India\'s generic exports get a temporary pass — India Briefing',
            url: 'https://www.india-briefing.com/news/us-patented-pharma-tariff-2026-india-generic-drug-exports-exempted-43899.html/',
        },
    ],
};
