import { BusinessProfile, OverviewSection } from './types';
import { chemicalsCharts } from './card-data/chemicals';

// Tab 2 of the Chemicals · Formulations, ingredients, gases and services note: what each company actually does.
// Revenue totals are the filed figures (Screener). Segments, customers, capacities and splits
// come from the companies' latest calls, analyst meets, presentations, annual reports and rating reports;
// where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed FY26 figures (Ellenbarrie and Steamhouse standalone, the others consolidated); splits are from each company's latest call, analyst meet, presentation or annual report. There is no cost-versus-input chart for this group, because no single Indian price index tracks what these companies buy: palm- and coconut-based fatty alcohols, pine turpentine and aroma feedstocks, ammonium nitrate and perchlorate, power for air-separation plants, imported Indonesian steam coal, and trucks and staff for the service businesses. Each card instead explains what really drives its costs and how its margin has moved over the last three years and five quarters.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Twelve companies that earn from recipes, approvals, contracts and service rather than from selling a commodity by the tonne, in three groups.",
        ],
        points: [
            {
                label: 'Fragrance and personal-care ingredients',
                text: "Companies that make what goes into soaps, shampoos, detergents and perfumes: Galaxy's cleansing agents from palm-based fatty alcohol, Privi's and Oriental Aromatics' pine-based aroma chemicals and camphor, and SH Kelkar's finished fragrance and flavour blends. **Their customers are global fragrance houses and FMCG firms that take months or years to approve a supplier**, so relationships last, but their raw materials swing hard: fatty alcohol, alpha-pinene and crude-linked aroma chemicals can move 20–80% in a few months, and the margin depends on how quickly contracts reset.",
            },
            {
                label: 'Formulations and diversified specialty chemicals',
                text: "Companies that blend bought-in chemicals into products for a job: Chembond treats cooling water and boilers in fertiliser and refinery plants, Rossari sells surfactants, textile and animal-feed chemicals, Fineotex sells textile chemicals and now US oilfield chemicals, and BASF India makes polyurethanes, dispersions and care chemicals while reselling much of its parent's range. **They need little plant, and they win on recipes, service and breadth of customers**; the risks are slow-paying customers, thin margins on traded goods and, at Fineotex, dependence on US shale drilling.",
            },
            {
                label: 'Industrial gases, steam, explosives and services',
                text: "Four companies that are barely chemical businesses: Ellenbarrie makes oxygen, nitrogen and argon from air, Steamhouse burns coal and waste in shared boilers and pipes the steam to factories in Gujarat's industrial estates, Premier Explosives makes missile propellants, chaff and flares and mining explosives, and Refex hauls fly ash from coal power stations and assembles wind turbines. **Their fortunes follow contracts, licences and regulation, not chemical prices**: take-or-pay gas contracts, steam contracts with a monthly coal-price reset, defence orders and export licences, and environment rules that force power stations to get rid of their ash.",
            },
        ],
    },
    {
        heading: 'Four ways of earning',
        body: [
            "How each business earns decides what its margin means and how quickly profit turns into cash.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**A formula price per tonne or kilo**', 'Galaxy, Privi, Oriental Aromatics, Rossari', 'Raw-material cost plus a margin, reset by contract (annual, quarterly or spot)', 'Customers pay in about 50–90 days, but imported feedstock means holding 3–8 months of stock'],
                    ['**A recipe and service fee**', 'SH Kelkar, Chembond, Fineotex, BASF India (own-made products)', 'A premium for a blend or programme the customer cannot easily copy, plus on-site service', 'Mixed: private customers pay in 2–3 months; public-sector plants and exporters slower'],
                    ['**A trading margin on the parent’s products**', 'BASF India (about 58% of sales)', 'A 5–10% gross margin on goods imported from the BASF group and resold', 'Quick to turn over, but profit swings with global chemical prices and parent fees'],
                    ['**A contract, tender or licence**', 'Ellenbarrie, Steamhouse, Premier Explosives, Refex', 'Take-or-pay gas contracts, steam sold at a fixed charge plus a coal-linked charge per tonne, fixed-price defence orders with penalties, or per-tonne ash haulage rates', 'Gas and steam customers pay promptly (Steamhouse bills fortnightly and collects in 7–15 days); defence and state power utilities take months, and Refex books much of its ash revenue before billing'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Galaxy Surfactants',
        inShort: ["**India's largest maker of surfactants and specialty care ingredients**, the cleansing and foaming agents in shampoos, soaps and body washes, sold to global and regional FMCG firms in 95+ countries.", "**Good:** four decades with global brands, cost-plus pricing, net cash of ₹514cr and a record Q1 FY27. **Bad:** the record is a war windfall, filed profit fell from ₹301cr (FY24) to ₹267cr (FY26), and a ₹445.7cr Mexico guarantee sits off the balance sheet.", "**Verdict: follow.** A quality franchise, but on normal earnings the price asks for more than the ~10% growth I expect."],
        tagline: "A Navi Mumbai maker of oleochemical surfactants and specialty personal-care ingredients, with plants in India, Egypt and the US.",
        revenue: '₹5,245cr (FY26, consolidated)',
        products: [
            { name: 'Performance surfactants', text: "Bulk cleansing agents such as SLES and SLS, made by reacting palm-based fatty alcohol with ethylene oxide and sulphur, for soaps, shampoos, body washes and detergents. About two-thirds of revenue." },
            { name: 'Specialty care ingredients', text: "Mild amino-acid surfactants, UV filters, emollients, preservatives and ready blends, many needing customer testing before use; about a third of revenue and growing faster." },
            { name: 'TRI-K (US)', text: "A US specialty-ingredients arm selling proteins and actives to beauty brands; new US approvals have been 'falling into place' since February 2026." },
            { name: 'Mexico project', text: "Galaxy is building a plant for a customer in Mexico and earns milestone fees; the amount is not disclosed, and the parent has guaranteed ₹445.7cr of performance." },
        ],
        revenueText: "Performance surfactants were **66% of Q1 FY27 revenue** and specialty care 34%. By region, India was 43%, Africa, Middle East and Turkey (AMET) 21% and the rest of the world 36%. In FY26, **58% of revenue was from outside India** (₹3,025cr). Multinational FMCG customers gave 54% of Q1 revenue, and one customer is above 10% of the total (not named).",
        mixes: [
            { caption: 'Revenue by product line, Q1 FY27 (company)', parts: [{ label: 'Performance surfactants', share: 66 }, { label: 'Specialty care', share: 34 }] },
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'India', share: 43 }, { label: 'Africa, Middle East, Turkey', share: 21 }, { label: 'Rest of world', share: 36 }] },
        ],
        customers: ["**Global FMCG majors** (54% of Q1 FY27 revenue), buying under long relationships and cost-plus formulas; one is above 10% of revenue.", "**Regional brands** (39%) in India, the Middle East, Africa and Turkey, and **local and niche players** (7%).", "About **1,500 customers in 95+ countries**; India is the biggest single market at 43%."],
        difficulty: { level: 'Medium', text: "Bulk surfactants are a well-known process that several global and local players run. Specialty ingredients are harder: each new molecule needs full customer testing, and Galaxy holds 111 patents." },
        moat: "Four decades of approvals with global brands and cost-plus contracts make it a trusted, hard-to-replace supplier. The weakness showed in Egypt: a local rival that makes its own raw materials took about a third of its AMET volume, and customers switch to crude-based surfactants when palm gets dear.",
        salesDrivers: ["**Volume growth**, guided at 6–8% a year; FY26 volume was flat at 2.57 lakh tonnes and Q1 FY27 grew about 5%, with India back to +11%.", "**The palm-versus-crude cost gap**: when crude-based surfactants are cheaper, customers reformulate away (FY25–FY26); the war reversed that in Q1 FY27.", "**Specialty ingredients and US approvals**: specialty volume grew 8.8% in FY26, and ₹480cr of recent capex is still filling.", "**Share from BASF's exit**: BASF announced in August 2026 it will close its care-chemicals plant at Dahej; too early to size.", "**Future growth**: capex of about ₹150cr a year from internal cash, and a beauty-and-wellness acquisition being worked on. Strategy 2030 aims to double volumes at about ₹25,000 a tonne, 'backloaded' to FY29–FY30."],
        inputs: "**Fatty alcohol from palm-kernel and coconut oil** is the main input, plus ethylene oxide and sulphur; fatty alcohol averaged about $2,806 a tonne in Q1 FY27. Materials were 73% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** Most sales use cost-plus formulas that reset with fatty-alcohol prices, freight and the rupee, so Galaxy earns a fairly steady profit per tonne (about ₹19,300 in FY26) rather than a steady percentage. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (9% to 2%). **What happened:** there is no Indian price index for fatty alcohol. The margin slid from 12% (FY24) to 11% and 9% (FY26), not because inputs went unrecovered but because volume stalled as customers switched to cheaper crude-based surfactants, and Egypt lost share. It then jumped to 14% in Q1 FY27 (₹35,458 a tonne) as the war doubled export freight and fatty alcohol swung from $2,800 to $3,300 and below $2,500; management expects only ₹21,000–22,000 a tonne for the rest of the year.",
        competitors: [{ name: 'BASF', note: 'Global care-chemicals major; closing its Dahej sulfation plant, which could free up customers.' }, { name: 'Egyptian integrated producer (not named)', note: 'Makes its own raw materials and took about a third of Galaxy’s AMET volume.' }, { name: 'Crude-based LABSA makers', note: 'Not direct rivals, but customers reformulate to crude-based surfactants when they are cheaper.' }],
        position: "**India's largest surfactant and specialty care-ingredient maker**, supplying top global FMCG firms for four decades; CRISIL AA-.",
        money: "**₹514cr of net cash** (Screener): borrowings ₹235cr against ₹474cr of investments at March 2026. Capex runs at ₹150–200cr a year from internal cash (about ₹150cr in FY27), and maintenance needs only ₹20–30cr. The parent has given a **₹445.7cr performance guarantee** for the Mexico project, about 16% of standalone net worth. No equity raised. Promoters hold **70.91%**, unchanged over three years.",
        watch: ["Profit per tonne holding ₹21,000+ in Q2–Q3 without the windfall.", "Volume growth of 6–8%, and customers won from BASF's Dahej closure.", "The price and fit of any acquisition, and the Mexico guarantee."],
        charts: chemicalsCharts['Galaxy Surfactants'],
    },
    {
        company: 'Rossari Biotech',
        inShort: ["**A formulator of surfactants, textile chemicals and animal-nutrition products**, with 4,250+ products sold to thousands of Indian and export customers.", "**Good:** record Q2 FY27 revenue of ₹698cr (+19%), margin back up to 12.5% from 11.6%, net debt down to ₹221cr on ₹131cr of H1 cash flow, exports 31% of the quarter's revenue, and no customer above 2% of sales. **Bad:** the core margin is still below last year's on freight, it missed its own guide twice before, borrowings doubled in FY26, free cash was negative three years running before this half, and the consumer arm only broke even.", "**Verdict: follow.** The price fits the ~11% growth I expect, but only if margins stop falling."],
        tagline: "A Mumbai-based specialty-chemicals formulator and ethoxylate maker, which also owns Unitop and Tristar and a small consumer-products arm.",
        revenue: '₹2,396cr (FY26, consolidated)',
        products: [
            { name: 'Home, personal care and performance chemicals', text: "Ethoxylates and other surfactants made by reacting ethylene oxide with fatty alcohols and phenols, used in detergents, farm sprays, oilfields and pharma, plus phenoxyethanol, a cosmetic preservative in which Rossari says it is 'one of the largest globally'." },
            { name: 'Textile specialty chemicals', text: "Enzymes, silicone softeners and finishing chemicals for fabric mills, some specialty and some commodity." },
            { name: 'Animal health and nutrition', text: "Feed enzymes, toxin binders, vitamin premixes and trace minerals; the smallest arm but with the best gross margin." },
            { name: 'Consumer and institutional', text: "Buzil Rossari and Rossari Consumer Products, selling cleaning and hygiene products; ₹71cr of revenue in Q1 FY27 and a ₹4cr loss. Management plans to exit." },
        ],
        revenueText: "Home, personal care and performance chemicals were **79% of Q1 FY27 revenue**, textiles 15% and animal nutrition 6%. **Exports were 26% of FY26 revenue** (₹613.6cr), up from ₹380cr in FY23. Unitop, bought in stages, had ₹922cr of FY26 revenue and Tristar ₹292cr. Segment margins are not disclosed.",
        mixes: [
            { caption: 'Revenue by vertical, Q1 FY27 (company)', parts: [{ label: 'Home, personal care and performance', share: 79 }, { label: 'Textile chemicals', share: 15 }, { label: 'Animal health and nutrition', share: 6 }] },
            { caption: 'Revenue by market, FY26 (annual report)', parts: [{ label: 'India', share: 74 }, { label: 'Exports', share: 26 }] },
        ],
        customers: ["**Detergent, personal-care, agrochemical and oilfield companies** (1,750+ customers) for surfactants and emulsifiers.", "**Textile mills** (1,000+) and **feed makers** (125+).", "**Top ten customers are only about 13% of sales** and none is above 2%."],
        difficulty: { level: 'Medium', text: "Ethoxylation needs licensed plants handling hazardous ethylene oxide, but the chemistry is widely known. The value is in formulating hundreds of grades and serving thousands of customers quickly." },
        moat: "Breadth of products and customers makes it hard to dislodge and spreads risk. The weakness is inputs: it buys ethylene oxide from a single Indian supplier, Reliance, while integrated rivals make their own.",
        salesDrivers: ["**Volume and price**: Q1 FY27 volume rose about 10% and prices did the rest of the 28% growth; management keeps 'at least 15%' for FY27.", "**Ethylene oxide supply**: ethoxylation runs at 'practically 90–100%' of the EO it can get; more EO from Reliance was expected by December.", "**Exports**, growing 19% a year over FY23–26, and a new Thailand blending unit.", "**Filling existing plants**: capacity of 3.87 lakh tonnes could support about ₹3,500cr of sales (an analyst's estimate management did not dispute); non-EO chemistry is being added to use it.", "**Future growth and capex**: FY27 capex capped at ₹50–75cr (pharma PEGs, aroma chemicals); a Saudi plant for secure EO is only at the study stage; management hopes for a 15% margin in two years after exiting consumer products."],
        inputs: "**Ethylene oxide, fatty alcohols, phenol and silicones**, mostly crude-linked; ethylene oxide comes only from Reliance, and a delayed Chinese phenol shipment cost about ₹5cr in Q1 FY27. Materials were 70% of sales in FY26.",
        costEffect: "**Partly passed on.** Management calls pass-through 'no worry at all', but textile customers resist, and freight and timing gaps are absorbed. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (12% to 5%). **What happened:** there is no Indian price index that tracks its mix of inputs. The operating margin slipped from 14% (FY24) to 13% (FY25) and 12% (FY26), and held at 11–12% in each of the last five quarters, even as revenue grew 13% a year. The squeeze came from spot buying, a costlier mix and the loss-making consumer arm; the core B2B margin was 14% in Q1 FY27 against 16% a year earlier.",
        competitors: [{ name: 'Archroma, CHT, Pulcra, Croda', note: 'Global textile-chemical houses with bigger brands.' }, { name: 'BASF, Dow, Lubrizol, Evonik', note: 'Global majors in personal-care and performance ingredients.' }, { name: 'India Glycols', note: 'Makes its own ethylene oxide, so has a cost edge in ethoxylates.' }, { name: 'Kemin, Cargill, Novozymes', note: 'Leaders in feed enzymes and animal nutrition.' }],
        position: "**A mid-sized Indian formulator with unusually broad reach**: 4,250+ products and about 66,000 tonnes a year of ethoxylation capacity.",
        money: "**Net debt of ₹282cr** (Screener, March); the company puts it at ₹281cr in March, ₹248cr in June and **₹221cr in September 2026**, with gross borrowings down ₹46cr in H1 to ₹362cr and working-capital days down from 97 to 86. On 19 Oct 2026 it said the working-capital debt should be repaid by about mid-2027 and that capex in India will be low after this year, with a Saudi plant (land leased, cost not yet set) next. Borrowings doubled to ₹436cr in FY26, and a further **₹88.5cr** is owed for the last 20% of Unitop after the sellers lost an arbitration. FY27 capex is capped at ₹50–75cr. No equity raised. Promoters hold **68.14%**, broadly unchanged from 68.35%, with no pledge.",
        watch: ["Margin back above 13% for two quarters.", "Net debt below ₹200cr and working-capital debt repaid by mid-2027.", "The non-core consumer businesses sold, and Reliance's extra EO arriving.", "The cost and timing of the Saudi plant."],
        charts: chemicalsCharts['Rossari Biotech'],
    },
    {
        company: 'Chembond Chemicals',
        inShort: ["**An asset-light industrial water-treatment business**, running chemical programmes and on-site teams for fertiliser, refinery and chemical plants, with smaller construction-chemical, distribution and hygiene arms.", "**Good:** debt-free, a 24% return on capital, no customer above 5–6% of revenue, and Q1 FY27 revenue up 32%. **Bad:** FY26 operating cash was only ₹8cr against ₹35cr of profit, debtor days were 128, and ₹26cr of goods came from a supplier the promoter family influences.", "**Verdict: wait.** Operating cash was −₹46cr against ₹135cr of profit over FY22–FY26, and only ₹8cr against ₹35cr in FY26 (23%); the two years since the demerger turned ₹18cr of ₹66cr of profit into cash. The price fits the ~12% growth I expect, but it returns to follow only when a full year's operating cash covers most of its profit and receivables grow slower than sales."],
        tagline: "The water-treatment, construction-chemical and distribution business demerged from the old Chembond on 1 April 2024 and listed in 2025.",
        revenue: '₹326cr (FY26, consolidated)',
        products: [
            { name: 'Water technologies', text: "Chemical programmes that stop scale, rust and bacteria in cooling towers and boilers, plus membrane chemicals, wastewater microbes, dosing equipment, online monitoring and on-site staff. About 90% chemicals and 10% equipment." },
            { name: 'Construction chemicals', text: "Concrete admixtures, sealants and dry mortar (partly made by outside firms), sold to builders; demand dips in the monsoon." },
            { name: 'Distribution', text: "Imported specialty chemicals resold to Indian industry; a small, low-margin trading arm." },
            { name: 'Cleaning and hygiene', text: "A joint venture with Germany's Calvatis selling cleaning chemicals to food and hospitality customers; about 1% of revenue." },
        ],
        revenueText: "Water technologies were **87% of FY26 revenue** (84% in FY25), construction chemicals 7%, distribution 6% and hygiene 1%. Within water, about 30% comes from fertiliser plants and about 50% from petrochemicals, refining and chemicals; public-sector firms such as NTPC, IOCL and HPCL give **28–30% of water revenue**. Almost all sales are in India: overseas was ₹8.8cr in FY26.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (company)', parts: [{ label: 'Water technologies', share: 87 }, { label: 'Construction chemicals', share: 7 }, { label: 'Distribution', share: 6 }], note: 'Cleaning and hygiene (about 1%) is folded into distribution here so the parts add to 100.' },
        ],
        customers: ["**Fertiliser, refinery, petrochemical and chemical plants**, which pay little for water treatment but lose a lot if a cooling tower or boiler fails. Management claims about 60–65% of fertiliser-plant water treatment.", "**Public-sector companies** (NTPC, IOCL, HPCL) at 28–30% of water revenue, on fixed-price tenders; about 30–35% of water business is re-bid every year.", "**Builders and contractors** for construction chemicals. No single customer gives more than 5–6% of revenue."],
        difficulty: { level: 'Medium', text: "The chemicals themselves are not hard to blend. The skill is in running a plant's water programme day to day, with 40 or more people at one large site, monitoring online and taking the blame if something scales up or corrodes." },
        moat: "Once its team is on site and the plant runs smoothly, customers rarely switch, and attrition is 'very low'. The weakness is that a third of water revenue is re-tendered each year, and small start-ups formed by ex-multinational staff undercut on price.",
        salesDrivers: ["**Volume in water treatment**: H2 FY26 water volume was 14,813 tonnes against 9,905 in H1, and management guides about 10% volume growth in FY27 against a 7–8% market.", "**New applications**: three new water applications being trialled by customers are moving to commercial use, and a ₹100cr+ water order book stood in November 2025.", "**Construction chemicals**, guided to 15–20% volume growth in FY27 after a 15% fall in FY26, helped by outsourced dry-mortar making.", "**Small overseas growth** in Malaysia (joint-venture partner bought out) and a seven-person team in Thailand.", "**Capacity is not a limit**: fixed assets are only ₹23cr and plants are 'inherently flexible', so growth needs almost no capex. The old ₹1,000cr revenue goal is now 'an aspiratory number'."],
        inputs: "**Metal-based chemicals (zinc and molybdenum salts), phosphonates, polymers, biocides and coagulants**, bought and blended; about ₹26cr (roughly 15%) came from Finor Piplaj, a supplier the promoter family influences. Staff are a big cost (19% of sales) because the service is delivered on site. Materials were 46% of sales in FY26.",
        costEffect: "**Partly passed on.** Private customers accepted three-month surcharges of 5–12% when inputs spiked, and April contract renewals reset prices; public-sector buyers on fixed-price tenders refused until the government declared force majeure. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (15% to 10%). **What happened:** there is no single price index for its blend of inputs. The operating margin held at 15%, 14% and 15% from FY24 to FY26, and ran 13–16% over the last five quarters. It fell to 13% in Q1 FY27 from 16% in Q4 because zinc and molybdenum inputs ran at 120%+ of normal, the ~3-point hit management warned of; it expects to recover over 'a couple of quarters' as higher prices flow through.",
        competitors: [{ name: 'Ecolab (Nalco), Solenis, Veolia', note: 'Global water-treatment majors with bigger technology budgets; strongest at large multinational sites.' }, { name: 'Ion Exchange, Thermax', note: 'Indian water companies that also sell equipment and plants.' }, { name: 'Dorf Ketal (owns Vasu Chemicals)', note: 'Indian specialty rival in refinery and process chemicals.' }],
        position: "**A leading Indian supplier in fertiliser-plant water treatment** (about 60–65% share, management's claim) in a ₹1,500–1,600cr cooling-water niche growing 7–8% a year.",
        money: "Debt-free, with **₹66cr of net cash** (Screener); the company says about ₹65cr of cash and investments. No new plant is planned, and FY26 capex of about ₹21cr was mostly re-tagging assets after the demerger and an office renovation. No equity raised. Promoters hold **68.0%**, edging up from 67.65% in June 2025.",
        watch: ["Operating cash above 70% of profit in FY27 (the test for moving back to follow).", "Margin back to 15% as April price rises flow through.", "Receivables growing slower than sales, and the related-party purchases."],
        charts: chemicalsCharts['Chembond Chemicals'],
    },
    {
        company: 'Privi Speciality Che',
        inShort: ["**One of only four companies worldwide turning crude sulphate turpentine**, a paper-mill by-product, into pine-based aroma chemicals for Givaudan, IFF, Symrise and big FMCG firms; about two-thirds is exported.", "**Good:** margin up from 12% (FY23) to 25% (FY26), a 22% return on capital, ₹550cr of operating cash in FY26 and a 15–20% raw-material cost edge. **Bad:** promoters cut their stake from 74.05% to 60.60% in 2025, a promoter-owned firm is being merged in, and Phase 1 of the expansion slipped a quarter.", "**Verdict: wait.** The best business in the group, but the price assumes its plan arrives on time."],
        tagline: "A Navi Mumbai maker of pine-based and other aroma chemicals, with a joint venture that makes molecules only for Givaudan.",
        revenue: '₹2,564cr (FY26, consolidated)',
        products: [
            { name: 'Pine-based aroma chemicals', text: "Alpha- and beta-pinene turned into dihydromyrcenol, terpineols, amber and woody notes, the fresh and woody smells in detergents, soaps and perfumes; the main contributor, though the company no longer gives a product split." },
            { name: 'Musks, citral and phenol-based molecules', text: "Other fragrance building blocks among its 75+ products made from about 60 raw materials; camphor is 4–6% of revenue." },
            { name: 'PRIGIV joint venture (51% Privi)', text: "A plant at Mahad making 40+ specialty molecules sold only to Givaudan; about ₹55cr of revenue in FY26, targeted at about ₹130cr in FY27 and ₹300cr in 3–4 years." },
            { name: 'New products (from FY28)', text: "Maltol and ethyl maltol (sweet notes where China makes over 95% of world supply), cyclopentanone and about ten specialties, with revenue expected from the second half of FY28." },
        ],
        revenueText: "About **65–70% of revenue is exported** to 40+ countries, and about **70% is under annual contracts** with raw materials bought back-to-back. The company stopped giving a product split 'as per the Board directive'. FY26 growth came from about 6.5% more volume (42,389 tonnes) and about 8% higher prices.",
        mixes: [
            { caption: 'Revenue by contract type, FY26 (ICRA, approximate)', parts: [{ label: 'Annual contracts', share: 70 }, { label: 'Other sales', share: 30 }], note: 'The company gives no product or customer split; these are ICRA’s rounded figures.' },
        ],
        customers: ["**Global fragrance houses** (Givaudan, IFF, Symrise), buying on annual contracts; Givaudan also takes all of the joint venture's output.", "**FMCG companies** such as P&G and Reckitt, and BASF.", "ICRA calls customer concentration low; sales through the US subsidiary were ₹409cr in FY26."],
        difficulty: { level: 'High', text: "Processing crude sulphate turpentine needs purification and multi-step chemistry that only four companies worldwide do at scale. New fragrance molecules also need long qualification with fragrance houses." },
        moat: "A cheaper raw-material route (15–20% below rivals using gum turpentine), annual contracts and the Givaudan joint venture make it hard to replace. The weakness is that most raw materials are imported and priced abroad, so cost spikes hit before prices catch up.",
        salesDrivers: ["**Capacity**: plants run at about 90%; Phase 1 lifts capacity from 48,000 to 54,000 tonnes (slipped from June to September 2026; no commissioning filing seen by 30 September), then 66,000 by September 2027 and about 72,000 by mid-2028.", "**Price and mix**: realisation rose from about ₹450 a kg five years ago to about ₹600 in FY26, and about 8% of FY26 growth was price.", "**New molecules**: maltol could bring ₹1,000cr+ of revenue if Privi takes the quarter of world capacity it plans; revenue from H2 FY28.", "**The Givaudan joint venture**, which turned profitable in Q4 FY26 and is meant to more than double in FY27.", "**Future growth**: the '5K1K' plan targets ₹5,000cr of revenue and ₹1,000cr+ of EBITDA in 3–4 years; management guides 20% growth at similar margins, and a promoter company adding about 6,000 tonnes is being merged in."],
        inputs: "**Crude sulphate turpentine** (imported from US and European paper mills, 60–130 days in transit) and **gum turpentine**, giving alpha-pinene; more than 55% of raw materials are imported, and 15–18% are crude-linked. Materials were 50% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** About 70% of sales are on annual contracts with raw materials bought back-to-back, and it put prices up about 8% in FY26, but mid-year spikes are absorbed until contracts reset. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (25% to 20%). **What happened:** there is no Indian price index for turpentine. The margin rose from 12% (FY23) to 19%, 22% and 25% (FY26) as the cheaper turpentine route scaled up, prices rose and steam and power use fell. When alpha-pinene spiked in 2026, gross margin fell from about 51% to 44% in Q1 FY27, yet the operating margin slipped only to 23% because power and other costs were lower.",
        competitors: [{ name: 'Three other global turpentine processors (not named)', note: 'The only rivals with the same advanced crude-turpentine route.' }, { name: 'Chinese pine-chemical makers', note: 'Rely on gum turpentine, whose price swings more; dominant in maltol.' }, { name: 'Oriental Aromatics', note: 'Smaller Indian rival in camphor and aroma chemicals, buying imported pinene at spot prices.' }],
        position: "**India's largest aroma-chemical maker and one of four global crude-turpentine processors**; ICRA AA.",
        money: "**Net debt of ₹897cr** (Screener, March 2026); the company puts it at ₹865cr in June, about 1.3 times EBITDA. Capex of ₹850–900cr over FY27–FY29 is to come 'primarily' from internal cash, but ICRA sizes it at about ₹1,200cr with ₹500–600cr of new debt. No equity raised, but Privi Fine Sciences, owned by the promoters, is being merged in for shares (vote on 27 October 2026). Promoters hold **60.60%**, down from 74.05%, after selling 9.28% in a ₹1,086cr block deal in December 2025.",
        watch: ["The Privi Fine Sciences merger terms and vote on 27 October.", "Phase 1 running full by Q4, and Phase 2 dates holding.", "Net debt staying below 2 times EBITDA as capex rises."],
        charts: chemicalsCharts['Privi Speciality Che'],
    },
    {
        company: 'Ellen. Indl. Gas',
        inShort: ["**Ellenbarrie Industrial Gases makes oxygen, nitrogen and argon** in eastern and southern India, supplied through plants at customers' sites, tankers and cylinders; listed in July 2025.", "**Good:** 15–20-year take-or-pay contracts, 31–38% margins, full legacy plants and ₹285cr of net cash. **Bad:** about two-fifths of pre-tax profit is treasury income that capex will use up, with write-downs on those investments in Q4 and Q1, its East India plant, promised in May for ‘next month’, started only on 25 September, and new merchant plants take 6–7 years to pay back.", "**Verdict: wait.** A sound gas business, but the price asks for far more growth than I expect."],
        tagline: "A Kolkata-based industrial-gas company leading in West Bengal, Andhra Pradesh and Telangana, which designs and builds its own air-separation plants.",
        revenue: '₹342cr (FY26, standalone)',
        products: [
            { name: 'Bulk liquid gases', text: "Oxygen, nitrogen and argon delivered by tanker on 3–7-year contracts to 328 customers; ₹69.4cr of Q1 FY27 revenue, the largest arm." },
            { name: 'Onsite plants', text: "Air-separation plants built inside customers' steelworks on 15–20-year take-or-pay contracts with cost pass-through; three customers, plus the new 320-tonne-a-day plant for Jai Balaji started on 25 September 2026." },
            { name: 'Packaged gases', text: "Cylinders of oxygen, nitrogen, argon, CO₂, acetylene, nitrous oxide and medical gases for 1,498 customers." },
            { name: 'Hydrogen and projects', text: "Hydrogen from an electrolyser at Uluberia, and plant-building and operating work (such as two large plants run for NMDC Steel); projects fell from 16% of revenue in FY24 to 2% in FY26. On 28 September it won a ₹481cr BHEL contract to build a 1,200-tonne-a-day plant over eight quarters, for commissioning in FY29; that is more than a year's sales, so projects will again be a large share of revenue." },
        ],
        revenueText: "Bulk liquid was **72% of Q1 FY27 gas revenue**, onsite plants 14% and cylinders 14% (the onsite share rises now the East India plant has started). By gas, oxygen is about 50%, nitrogen 40% and argon 10%. **Steel is about a third of revenue**; government customers were 29% of FY26. There are no exports.",
        mixes: [
            { caption: 'Revenue by supply model, Q1 FY27 (company)', parts: [{ label: 'Bulk liquid', share: 72 }, { label: 'Onsite plants', share: 14 }, { label: 'Packaged cylinders', share: 14 }] },
            { caption: 'Revenue by gas, Q1 FY27 (company)', parts: [{ label: 'Oxygen', share: 50 }, { label: 'Nitrogen', share: 40 }, { label: 'Argon and mixtures', share: 10 }] },
        ],
        customers: ["**Steel plants** (about a third of revenue), including onsite customers Jai Balaji, Jai Raj Ispat and Tata Metaliks.", "**Pharma, chemical, engineering and healthcare users**, and dealers; railways, aviation and space users; government bodies were 29% of FY26 revenue.", "Largest customer 6.7%, top ten 38.8%; **86% of FY26 revenue came from repeat customers**."],
        difficulty: { level: 'High', text: "Air-separation plants cool air to about −190°C and distil it, and few independent Indian firms can design and build their own. Liquid gases travel economically only 300–400 km, so a plant near customers is hard to challenge." },
        moat: "Local density and long take-or-pay contracts lock customers in, and building its own plants lowers capex per tonne. The weakness is size: Linde, Air Liquide and INOX Air Products are several times larger, and new regions mean taking customers from them.",
        salesDrivers: ["**New capacity filling**: total capacity is 1,933 tonnes a day; Uluberia-2 (220 TPD, Q4 FY26) is the only plant with spare room, and merchant plants take 18–24 months to reach 80–90%.", "**Onsite wins**: the East India plant started in September 2026, and there are 'multiple inquiries above 600 TPD'.", "**Argon prices**, which swing with steel demand and move quarterly margins by several points.", "**Steel and industrial capex** in eastern and southern India.", "**Future growth and capex**: ₹250cr in FY27 and ₹200cr in FY28 for two merchant plants (North India about 220 TPD, West-Central about 250 TPD) without contracts signed in advance; management targets 20% revenue growth a year for 2–3 years and a 40% margin in the longer term."],
        inputs: "**Air is free; power is the main cost** (₹22cr in Q1 FY27, 22% of revenue), then road freight. Materials, mostly traded gases and cylinders, were 12% of sales in FY26, while power, fuel and plant costs were 25%.",
        costEffect: "**Mostly insulated from materials; power is what matters.** Onsite contracts pass power costs through, but merchant liquid prices are set by local supply and demand, and argon prices swing with steel. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by only about 1 point (34% to 33%); a 10% rise in power would cost about 2.5 points. **What happened:** there is no price index for its inputs. The margin jumped from 23% (FY24) to 35% (FY25) and 34% (FY26) as newer, more power-efficient plants started and projects shrank; it ran 31–38% over the last five quarters, dipping to 31% when argon prices crashed in Q3 FY26 and recovering to 38% in Q1 FY27. One wind-solar contract covers 55–60% of one plant's power; grid power costs 50–60% more.",
        competitors: [{ name: 'Linde, Air Liquide', note: 'Global majors several times larger, with national networks.' }, { name: 'INOX Air Products', note: 'India’s largest home-grown gas company, strong in merchant liquid.' }, { name: 'Captive steel-plant units', note: 'Steelworks with their own plants sometimes dump surplus argon, hurting prices.' }],
        position: "**Market leader in industrial gases in West Bengal, Andhra Pradesh and Telangana**, and one of few independent Indian firms that builds its own plants; CRISIL A.",
        money: "**Net cash of ₹285cr** (Screener) after the ₹400cr IPO in July 2025; about ₹397cr sits in treasury investments including alternative investment funds, market-linked debentures and shares, and it took small write-downs on them in Q4 and Q1. The ₹450cr of capex over FY27–FY28 will run this down. Promoters personally guarantee ₹149cr of loans. No FY26 dividend. Promoters hold **77.15%**.",
        watch: ["The East India and Uluberia-2 plants filling.", "An onsite contract above 600 tonnes a day.", "The margin on the ₹481cr BHEL plant-building contract.", "Treasury income shrinking, and no more investment write-downs."],
        charts: chemicalsCharts['Ellen. Indl. Gas'],
    },
    {
        company: 'Steamhouse India',
        inShort: ["**Steamhouse runs shared coal and waste-fired boilers inside Gujarat's industrial estates** and sells the steam by pipeline to about 200 chemical, pharma and textile factories, so they need no boiler of their own; listed in September 2026.", "**Good:** ₹1,011 of operating profit a tonne in Q1 FY27 (₹737 a year earlier), monthly coal-price pass-through, five years of operating cash equal to operating profit, and capacity doubling to 705 tonnes an hour by FY29. **Bad:** plants only 41% used, every boiler being built late or over budget, debt of ₹400cr in July before IPO repayment, and dealings with the promoter's Sanjoo companies equal to 74% of FY26 revenue, plus an aircraft chartered from the promoter's US company.", "**Verdict: pass.** A useful utility, but the price already assumes management's 30–35% growth path, and the group dealings must shrink first."],
        tagline: "A Surat company that pioneered community boilers in Gujarat in 2014: seven boilers of 345 tonnes of steam an hour and 60km of pipelines at Vapi, Ankleshwar, Sarigam, Nandesari and Panoli.",
        revenue: '₹492cr (FY26, standalone)',
        products: [
            { name: 'Steam from its own boilers', text: "Seven boilers (six owned, one leased) burning mostly imported Indonesian coal, plus a 15 tonnes-an-hour waste-to-energy boiler at Vapi; steam travels up to about 8km by pipeline. ₹256cr of FY26 revenue, and 74% of Q1 FY27's." },
            { name: 'Bought-in steam, resold', text: "Steam bought from the promoter's Sanjoo Dyeing at Sachin (Surat) and from Kilburn Chemicals at Dahej, and resold through its own pipes; ₹87cr in FY26 and 22% of Q1 FY27 revenue. Dahej SEZ and Haldia deals are to be added within a year." },
            { name: 'Coal trading (stopped)', text: "Coal resold at almost no margin, largely to Sanjoo Dyeing: ₹132cr, 27% of FY26 revenue. Stopped on 1 April 2026, which is why the margin jumped in Q1 FY27." },
            { name: 'Nitrogen and projects', text: "A small nitrogen plant at Ankleshwar (₹0.6cr in FY26), and construction revenue on the Ahmedabad municipal waste-to-steam plant at Pirana. It was named on 28 September for a ₹311cr contract to build and run a steam and power plant at the Una bulk-drug park (not yet signed)." },
        ],
        revenueText: "In FY26 own steam was **52% of revenue**, resold steam 18%, coal trading 27% and other items 3%; with coal trading gone, own steam was 74% and resold steam 22% in Q1 FY27. By customer industry, chemicals were 26% of FY26 revenue, textiles 22% (mostly Sachin), pharma 18% (40% in FY24), agrochemicals 10%, tyres 5% and dyes 4%. **Dealings with the promoter's Sanjoo companies were 74% of FY26 revenue** (sales and purchases together, prospectus). All sales are in India.",
        mixes: [
            { caption: 'Revenue by activity, FY26 (prospectus)', parts: [{ label: 'Own steam', share: 52 }, { label: 'Coal trading (stopped)', share: 27 }, { label: 'Resold steam', share: 18 }, { label: 'Other', share: 3 }] },
            { caption: 'Revenue by activity, Q1 FY27 (company)', parts: [{ label: 'Own steam', share: 74 }, { label: 'Resold steam', share: 22 }, { label: 'Other', share: 4 }] },
        ],
        customers: ["**Chemical, pharma, agrochemical and dye makers** in Gujarat's GIDC estates (Aether, Anupam Rasayan, Heranba, Lupin, Zydus, Acutaas among those named), on contracts of 1–10 years with exit on 6–12 months' notice; minimum-offtake terms only in contracts signed since June 2025.", "**Textile mills at Sachin**, through the promoter's Sanjoo Dyeing, which was also the largest customer (18.4% of FY26 revenue, mostly coal); a tyre maker (very likely MRF) was the third largest.", "202 customers in FY26; top ten **47.9%** of revenue; repeat customers 91%."],
        difficulty: { level: 'Medium', text: "Boilers are standard equipment. The hard parts are getting pipe-rack rights inside crowded estates, pollution consents, and enough customers signed up to fill a boiler; Steamhouse took nine years to reach 41% use." },
        moat: "Once its pipe reaches a factory, a rival rarely gets a second landing point, and estates have little room for another pipe rack; it claims about half of peak steam demand at Vapi, Ankleshwar and Nandesari. The weakness is the alternative: a factory can always run its own boiler, and large coal-fired users save little by switching.",
        salesDrivers: ["**Filling existing boilers**: use was 41.4% in Q1 FY27 against a target of 60–65%; Sarigam runs at about 13% after losing an anchor customer and Panoli (started June 2025) at 7%. Existing plants add 5–10% volume a year.", "**New boilers**: four (120 tonnes an hour) in FY27, Tarapur in Maharashtra in Q4 FY28 and three IPO-funded boilers (180 tonnes an hour) in Q1 FY29, taking capacity from 345 to 705; few customers are signed for them yet.", "**Rules against small boilers**: the pollution board's 2024 community-boiler guideline, tighter emission norms, and bulk-drug and textile parks tendering for shared utilities (Una, Pirana).", "**Chemical and pharma output** in Gujarat; management calls the company 'a proxy play to chemical industries'.", "**Future growth**: management guides operating profit up 30–35% a year for three years, volume up 20–25%, and at least ₹1,000 a tonne except in the monsoon quarter."],
        inputs: "**Imported Indonesian coal**, bought from Indian importers without currency hedging, was 77% of FY26 purchases; waste fuels (textile scraps, plastic and refuse-derived fuel, farm waste) feed the Vapi waste-to-energy boiler and two boilers being built. Fuel for its own boilers was 33% of FY26 sales and bought-in steam and traded coal 40% (prospectus).",
        costEffect: "**Passed on, with a short lag.** Customers pay a fixed charge that rises each year plus a variable charge per tonne linked to coal, reset mostly monthly (a few quarterly), so a coal swing moves revenue more than profit. **Rule of thumb:** a 10% rise in fuel costs not passed on would cut the margin by about 4–5 points on today's mix (fuel is about 46% of Q1 FY27 sales); with a one-month reset, the hit is small and brief. **What happened:** there is no Indian price index for imported thermal coal. In Q1 FY27 coal rose with the war, steam prices rose 25% to ₹4,034 a tonne and operating profit a tonne still rose to ₹1,011 from ₹737. The FY25–FY26 margin of about 17% was diluted by coal trading; own and resold steam earned about 23%, close to FY24's 23.5% when it sold almost nothing else. The monsoon quarter is the weak one: Q2 FY26 earned 11% as wet fuel and flooded estates cut output.",
        competitors: [{ name: "Factories' own boilers", note: 'The real alternative; sold by Thermax, Forbes Marshall, Cheema Boilers and Thermodyne. Large coal-fired users can make steam about as cheaply themselves.' }, { name: 'PR Ecoenergy, Detox India', note: 'Other Gujarat pipeline utility players named in the prospectus; management says it generally faces no rival inside its estates.' }],
        position: "**India's largest community-boiler operator by its own count**: seven of the 12-plus shared boilers in India, about half of peak steam demand in three of its estates, but under 0.2% of India's process-steam demand; ICRA BBB+ (Stable), upgraded on 28 September 2026.",
        money: "**Borrowings were ₹335cr at March 2026** (Screener, including ₹54cr of leases) and ₹400cr by 31 July, partly debentures from BPEA/Ascertis Credit. The September 2026 IPO raised ₹414cr at ₹81 a share (₹353cr new shares, ₹61cr sold by the promoter) after a ₹50cr placement in June; ₹180cr repays debt in FY27 and ₹114cr funds three boilers. About ₹230cr of capex remains to Q1 FY29, with Tarapur 75% debt-funded. Over FY25–FY26 working capital released ₹64cr, mostly from paying coal suppliers later; coal is now bought for cash. The promoter's 76% pledge to the debenture holders was released in August 2026 but returns if that debt is not repaid on time. No dividend. Promoters hold **77.96%**.",
        watch: ["Four new boilers live and ₹1,000+ a tonne by Q4 FY27, and how Q2 (the monsoon quarter) holds up.", "Debt down to about ₹220cr after the IPO repayment, and finance costs falling.", "Steam bought from Sanjoo Dyeing and other group dealings shrinking.", "The ₹311cr Una contract signed, and customers signed for Pirana, Nandesari-2 and Tarapur."],
        charts: chemicalsCharts['Steamhouse India'],
    },
    {
        company: 'SH Kelkar & Co',
        inShort: ["**Keva, India's largest home-grown fragrance and flavour house**, compounding the smells in soaps, detergents and personal care and the flavours in food, with plants and creative centres in India, Europe, the UK and the US.", "**Good:** 95% of clients accepted price rises in Q1 FY27, the margin recovered to 13%, and flavours earn about 24%. **Bad:** net debt rose to ₹852cr in June (company figure; ₹953cr on Screener at March, including leases), return on capital is 6%, Q1 profit included a ₹30cr insurance gain, about 50 lakh promoter shares are pledged, and the chairman died in September.", "**Verdict: wait.** A real franchise, but debt must fall before the price makes sense."],
        tagline: "A Mumbai fragrance and flavour company, the largest of Indian origin, selling under the SHK, Cobra, Keva and CFF names.",
        revenue: '₹2,368cr (FY26, consolidated)',
        products: [
            { name: 'Fragrances', text: "Compounded fragrance blends for soaps, detergents, personal care and fine fragrance; ₹2,127cr in FY26 at about a 7% segment margin after depreciation." },
            { name: 'Flavours', text: "Flavours for dairy, bakery, beverages and pharma; ₹241cr in FY26 at about a 24% segment margin, and growing fast." },
            { name: 'Global ingredients', text: "Specialty aroma molecules sold to other fragrance houses; small (₹8cr in Q1 FY27) and loss-making lately." },
        ],
        revenueText: "Fragrances were **90% of FY26 revenue** and flavours 10%, but flavours earned about a quarter of segment profit. By region (Q1 FY27, excluding ingredients), India was 56%, Europe 23% and the rest of the world 21%. About 5 points of Q1's 14% growth came from currency, and about ₹15cr was customers buying flavours early.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (annual report)', parts: [{ label: 'Fragrances', share: 90 }, { label: 'Flavours', share: 10 }] },
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'India', share: 56 }, { label: 'Europe', share: 23 }, { label: 'Rest of world', share: 21 }] },
        ],
        customers: ["**Indian soap, detergent and personal-care makers**, large and mid-sized, the core of the business.", "**Food, beverage and pharma companies** for flavours, and fragrance buyers in Europe, Asia and the US.", "**Over 4,100 customers**; no single-customer figure is disclosed. A large multinational account won earlier has brought 'no large breakthroughs'."],
        difficulty: { level: 'High', text: "A fragrance is a secret blend of hundreds of ingredients created by perfumers and tested with the customer, and once in a product it is rarely changed. Winning global briefs needs creative centres abroad, which are costly." },
        moat: "Fragrance is a small part of a product's cost but defines it, so customers seldom switch, and products launched in the last 3–5 years are only 10–11% of revenue. The weakness is the thin fragrance margin and the high cost of competing with global majors abroad.",
        salesDrivers: ["**Indian consumer demand** for soaps, detergents and personal care; India fragrance was flat in Q1 as Keva held back supply to clients refusing price rises.", "**Flavours**, up 63% in Q1 FY27 (partly pre-buying); normal sales run at about ₹95–97cr a quarter.", "**Europe and new markets**: a new plant at Almere in the Netherlands doubled European capacity from May 2026, and creative centres in Germany, the UK and the US are meant to break even in about three years each.", "**Share from rivals**: it believes it gained share in India by holding stock through shortages, and an antitrust probe into the global majors is sending some buyers to look elsewhere.", "**Capex and future growth**: about ₹140cr in FY27 (Europe done, the Vanavate plant slipped to Q3, the Vashivali upgrade possibly in FY28); management guides double-digit growth and better margins, and targets a 15% return on capital in 3–5 years."],
        inputs: "**Aroma chemicals, essential and citrus oils, solvents and phenol derivatives**; about 40% of raw materials are directly crude-linked and 30% indirectly, and buying has moved away from China. Materials were 56% of sales in FY26.",
        costEffect: "**Mostly passed on, with a lag.** It re-prices blends when inputs rise, and in Q1 FY27 got 'reasonable price corrections from almost 95% of the clients'; it also holds about six months of stock to avoid shortages. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (10% to 4%). **What happened:** there is no single price index for its hundreds of inputs, and gross margin was steady (42.7% in Q1 FY27 against 42.4% a year earlier). The operating margin still fell from 16% (FY24) to 14% and 10% (FY26), because overseas creative centres cost ₹80–85cr a year (about 3.5 points), the April 2024 fire disrupted output and a ₹35cr low-margin one-off sale was booked in Q4. It recovered to 13% in Q1 FY27.",
        competitors: [{ name: 'Givaudan, IFF, dsm-firmenich, Symrise', note: 'Global majors many times larger; Firmenich holds 9.80% of SH Kelkar.' }, { name: 'Smaller Indian fragrance houses', note: 'Lose share to Keva when supply is tight, because they hold less stock.' }],
        position: "**India's largest fragrance and flavour house of Indian origin**, small against the four global majors; CRISIL AA-, with the outlook cut to Negative in September 2026.",
        money: "**Net debt of ₹953cr** (Screener, March 2026, including leases); the company puts it at ₹852cr in June, up ₹65cr in the quarter, and expects it to fall about ₹25cr a quarter from Q3. About ₹50–60cr of fire insurance is still due. Goodwill is ₹337.5cr. About 50 lakh promoter shares are pledged against about ₹30cr of borrowing. No equity raised. Promoters hold **54.87%**, down from 58.95% in September 2023.",
        watch: ["Net debt actually falling about ₹25cr a quarter from Q3.", "Margin above 13% without one-offs or pre-buying.", "Any change in ownership or control after the chairman's death."],
        charts: chemicalsCharts['SH Kelkar & Co'],
    },
    {
        company: 'Fineotex Chemical',
        inShort: ["**A textile and cleaning-chemicals maker that has become mainly a US oilfield-chemicals business** after buying 53.33% of CrudeChem, a Texas group, in December 2025; oil and gas is now about 65% of revenue.", "**Good:** CrudeChem went from about $65M to a ~$100M run-rate in six months, Texas capacity doubled for about $7M, and it holds over ₹300cr of cash. **Bad:** group margin fell from the mid-20s to about 16%, textiles are flat, FY26 operating cash was −₹24cr, its auditor did not audit 12 subsidiaries that hold most of the US business, and up to ₹400cr of loans to the subsidiary were sought.", "**Verdict: wait.** Fast growth, but the price needs more than the ~18% a year I expect, and cash and governance are unproven."],
        tagline: "A Mumbai specialty-chemicals formulator for textiles and hygiene that now owns a majority of CrudeChem Technologies, a Texas oilfield-chemicals group.",
        revenue: '₹772cr (FY26, consolidated)',
        products: [
            { name: 'Oilfield chemicals (CrudeChem, US)', text: "Friction reducers, production chemicals, water treatment and flow-assurance products for US shale drillers, sold with field technical service and its own trucking; 44% of CrudeChem revenue is from 'green chemistries'." },
            { name: 'Textile specialty chemicals', text: "Pre-treatment, dyeing and finishing auxiliaries for fabric mills in India, Bangladesh and about 70 countries, made at Ambernath, Mahape and in Malaysia." },
            { name: 'Cleaning and hygiene', text: "Cleaning and hygiene chemicals, partly through joint ventures with EuroDye-CTC (Belgium) and Healthguard (Australia); volumes fell in FY25." },
        ],
        revenueText: "Oil and gas was **about 65% of Q1 FY27 revenue** (roughly ₹245–250cr, a ~$100M annual run-rate) and textiles and other products about 35% (₹132cr, against ₹137cr a year earlier). **International sales were 77%** of revenue and India 23%. The company does not report segments formally; these figures come from the call and presentation.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (management)', parts: [{ label: 'Oil and gas (CrudeChem)', share: 65 }, { label: 'Textiles, cleaning and other', share: 35 }] },
            { caption: 'Revenue by market, Q1 FY27 (company)', parts: [{ label: 'International', share: 77 }, { label: 'India', share: 23 }] },
        ],
        customers: ["**US oilfield service companies and producers** in the Lower 48 states; management names Halliburton, Schlumberger, Baker Hughes, ExxonMobil and Shell, and made first sales to Canada.", "**Textile mills** in India, Bangladesh and other export markets.", "No fixed-term contracts in oil and gas: 'not based on fixed-term contracts'."],
        difficulty: { level: 'Medium', text: "The products are blends of polymers, surfactants and biocides, not hard chemistry. The skill is in field service and logistics in US oilfields, and management says it takes about two years to get introduced to the majors." },
        moat: "In the US it wins by bundling product, field engineers and its own trucks, and it has taken share fast. The weakness is that there are no fixed contracts and demand depends on US shale drilling, which follows oil prices.",
        salesDrivers: ["**CrudeChem's growth**: from about $65M at purchase to a ~$100M run-rate; management targets $100M in FY27 and $200M by FY28, 'not related to crude oil prices at all'.", "**Capacity**: Texas capacity doubled to 1,48,000 tonnes a year for about $7M and runs at 63% on one shift; a second shift needs only $1–2M.", "**US shale activity**, which drives chemical demand whatever management says.", "**Textiles**, flat for about three years; Q1 FY27 textile revenue was down slightly.", "**Future growth**: in May management talked of ₹3,000cr group revenue in 3–4 years, a figure not repeated in July, when it also said ‘we cannot have fixed blended margins’; the sellers must sell a further 25% of CrudeChem in January 2028 at an undisclosed price, taking the stake to about 78–80%."],
        inputs: "**Polymers, surfactants, biocides and scale inhibitors**, mostly bought in dollars, blended rather than made from basic chemicals. Materials were 65% of sales in FY26.",
        costEffect: "**Mostly passed on.** US customers paid war and fuel surcharges when inputs rose, and Q1 FY27 gross margin rose to 35.4% from about 33%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (17% to 10%). **What happened:** there is no price index for its blends. The margin fell from 26% (FY24) to 24% and 17% (FY26) not because of input costs but because of mix: CrudeChem earns about 13–14% against the textile business's historical 18–28%. Quarterly it ran 18–22% before the deal and 14–16% after.",
        competitors: [{ name: 'Large US oilfield-chemical suppliers', note: 'Service majors and chemical makers with national reach; CrudeChem targets 5% of a ~$4bn North American market.' }, { name: 'Archroma, CHT, Rossari', note: 'Rivals in textile chemicals, with bigger ranges.' }],
        position: "**A small but fast-growing supplier in US oilfield chemicals**, aiming for 5% of the North American market by 2028; ICRA A+ (Positive).",
        money: "**Net cash of ₹355cr** (Screener); management says 'more than ₹300cr' of cash, and borrowings were only ₹8cr in March 2026. About ₹240cr of equity was raised through preferential shares and warrants over FY25–FY26. Capex is light ($1–2M for a second shift). Shareholders were asked to approve up to ₹400cr of loans and advances to CrudeChem, which has ₹38cr of net worth, and 46.67% of its profit belongs to its founders. Promoters hold **62.3%**, down from 65.04% in September 2023.",
        watch: ["CrudeChem accounts disclosed separately, with margins.", "Operating cash turning positive.", "How much is lent to CrudeChem, at what rate, and the price of the 2028 stake."],
        charts: chemicalsCharts['Fineotex Chemical'],
    },
    {
        company: 'BASF India',
        inShort: ["**The 73.33%-owned Indian arm of BASF**, selling polyurethanes, performance chemicals, personal-care ingredients and crop protection; about 58% of sales are imported from the group and resold.", "**Good:** debt-free, CRISIL AAA, ₹874cr of cash and a record Q1 FY27. **Bad:** the normal margin is 4–6%, EBITDA has been flat at about ₹650cr for five years, agro (about 39% of operating profit) is demerged from January 2027, and fees to the parent keep rising.", "**Verdict: pass.** Safe, but the windfall fades and the growth stays with the parent."],
        tagline: "BASF's listed Indian subsidiary: a manufacturer of polyurethane systems, dispersions and care chemicals, and a large distributor of the group's imported products.",
        revenue: '₹14,944cr (FY26, consolidated)',
        products: [
            { name: 'Materials', text: "Polyurethane systems for cars, appliances, footwear and furniture, Celasto car suspension parts (a market leader), engineering plastics and monomers; about 30% of FY26 revenue." },
            { name: 'Nutrition and care', text: "Personal-care and home-care ingredients, UV filters, pharma excipients and vitamins, partly made for large FMCG companies; 23%." },
            { name: 'Industrial solutions and chemicals', text: "Acrylic dispersions for paints and construction, paper chemicals, catalysts (19%), and purely traded intermediate chemicals (12%)." },
            { name: 'Agricultural solutions', text: "Fungicides, herbicides and insecticides, mostly toll-made and sold through 1,700 distributors; 12% of revenue but about 39% of operating profit, to be demerged into a separate listed company." },
        ],
        revenueText: "Of FY26 revenue including coatings (₹15,539cr), **Materials was about 30%**, Nutrition and Care 23%, Industrial Solutions 19%, Chemicals 12%, Agro 12% and coatings 4% (sold on 30 June 2026). **Only about 42% of sales are made in India**, at a 25–30% gross margin; the other 58% is imported from the group and resold at 5–10%. Exports are only 2.3% of turnover.",
        mixes: [
            { caption: 'Revenue by segment, FY26 incl. coatings (company)', parts: [{ label: 'Materials', share: 30 }, { label: 'Nutrition and care', share: 23 }, { label: 'Industrial solutions', share: 19 }, { label: 'Chemicals (traded)', share: 12 }, { label: 'Agricultural solutions', share: 12 }, { label: 'Coatings (sold)', share: 4 }] },
            { caption: 'Sales by source, FY26 (management)', parts: [{ label: 'Made in India', share: 42 }, { label: 'Imported from BASF group and resold', share: 58 }] },
        ],
        customers: ["**Car, two-wheeler and appliance makers**, and footwear and furniture firms, for polyurethanes and Celasto.", "**Paint, construction, paper and FMCG companies**, including toll-making for large FMCG brands, and pharma firms.", "**Farmers**, through 1,700 distributors and about 2 lakh retailers; about 7% of India's crop-protection market."],
        difficulty: { level: 'Medium', text: "Its own products (Celasto, dispersions, care ingredients) need car-maker and pharma approvals and parent technology. The traded 58% needs only a sales network, and prices follow Chinese oversupply." },
        moat: "The BASF name, parent technology (about €2bn of research a year) and approvals keep customers. The weakness is that most sales are low-margin resale, and the parent charges royalties and fees and keeps big new projects in other companies.",
        salesDrivers: ["**Chemical prices**: in FY26 volume rose 6–7% but prices fell 5–6% on Chinese oversupply; in Q1 FY27 the war lifted prices and traded chemicals revenue more than doubled.", "**Indian car, appliance and construction demand** for polyurethanes and dispersions.", "**New plants**: the Celasto plant at Dahej (live by end-2026) and a third dispersion line at Mangalore adding about 15% capacity by end-2027; FY27 capex is 'more than ₹200cr'.", "**Portfolio changes**: coatings sold for ₹230.16cr; agro demerged 1:1 from about 1 January 2027, shrinking the listed company's profit base.", "**Future growth** depends on the parent: BASF is studying an MDI complex at Dahej through a separate subsidiary, not the listed company, and management gives no forecasts."],
        inputs: "**Imported finished and semi-finished chemicals from the BASF group** (mainly via BASF Hong Kong, ₹3,687cr in FY26), plus isocyanates, polyols, acrylic monomers and agro active ingredients; about a third of inputs are imported. Materials, including goods bought for resale, were 86% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** Traded goods are priced off the market, so buying and selling prices move together, and management expects input costs to pass through 'with a lag'. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 9 points (4% to a loss). **What happened:** there is no single price index for its thousands of products. The margin drifted from 6% (FY24) to 5% and 4% (FY26) as Chinese oversupply cut selling prices 5–6% while volumes grew; it was 3–6% in each FY26 quarter, then jumped to 10% in Q1 FY27 when the war lifted chemical prices faster than its costs, a windfall management does not claim will last.",
        competitors: [{ name: 'Covestro, Huntsman, Dow', note: 'Global polyurethane and chemical majors selling in India.' }, { name: 'Chinese chemical exporters', note: 'Set prices in traded chemicals and monomers; oversupply cut prices 5–6% in FY26.' }, { name: 'Bayer, Syngenta, UPL', note: 'Larger rivals in crop protection.' }],
        position: "**A large, parent-backed player**: market leader in Celasto, a strong dispersion franchise and about 7% of Indian crop protection; CRISIL AAA.",
        money: "Debt-free, with **₹749cr of net cash** (Screener); the company had ₹874cr of cash in March 2026. FY26 operating cash was −₹110cr as it paid suppliers down. FY27 capex is 'more than ₹200cr' from internal cash (Celasto needs ₹150–170cr more). Royalties were about ₹156cr in FY26 and IT charges about ₹150cr. No equity raised. Promoters hold **73.33%**, unchanged.",
        watch: ["Margin above 6% after the windfall and the agro demerger.", "Royalties and fees to the parent growing slower than sales.", "Whether the MDI project comes into the listed company."],
        charts: chemicalsCharts['BASF India'],
    },
    {
        company: 'Premier Explosives',
        inShort: ["**A maker of missile propellants, rocket motors, chaff and flares and explosives** for DRDO, the armed forces, ISRO and export buyers, plus bulk explosives for coal mines; being taken over by Apollo Micro Systems.", "**Good:** the only domestic supplier of chaff and flares to the Air Force, all the solid propellant for three missile programmes, and a ₹1,393cr order book. **Bad:** Q1 FY27 revenue fell 28% at a 5.7% margin, FY26 profit rested on one-off supplier discounts, four people died in a 2025 blast, and the auditor qualified its internal controls.", "**Verdict: pass.** Valuable licences, but the price rests on Apollo's ₹698 offer, not on earnings."],
        tagline: "A Hyderabad energetic-materials company, India's first private maker of solid rocket propellant.",
        revenue: '₹388cr (FY26, consolidated)',
        products: [
            { name: 'Propellants and rocket motors', text: "Composite solid propellant for the MRSAM, LRSAM and Astra missiles (100% of their needs), Akash booster grains, igniters for all Agni stages, BrahMos rocket motors and complete motors for export." },
            { name: 'Countermeasures', text: "Chaff and flares that decoy radar and heat-seeking missiles; the only domestic supplier to the Indian Air Force." },
            { name: 'High explosives and ammunition', text: "HMX, RDX, PETN and CL-20, warheads, mines and pyrotechnic devices." },
            { name: 'Commercial explosives and services', text: "Bulk ammonium-nitrate explosives, detonators and fuse for coal mines, at 'very, very thin' margins; and running ISRO's propellant plant at Sriharikota (about ₹18cr a year)." },
        ],
        revenueText: "Defence and space were **81% of FY26 revenue** (₹315.4cr) and commercial explosives 19% (₹72.9cr). Exports fell to 13% of revenue (₹51.7cr) from 19%, but **about 54% of the ₹1,393cr order book is for export**, each order needing a licence. One customer is above 10% of revenue (not named).",
        mixes: [
            { caption: 'Revenue by segment, FY26 (company)', parts: [{ label: 'Defence and space', share: 81 }, { label: 'Commercial explosives', share: 19 }] },
        ],
        customers: ["**DRDO, Bharat Dynamics and the armed forces**, which often supply key materials free and impose penalties for late delivery.", "**Export defence buyers** (Israel, Greece, Turkey and others), each order needing an Arms Act licence; an ₹18.9cr order was cancelled in April 2026 when the licence was refused.", "**ISRO** (plant operation) and **coal mines** for bulk explosives."],
        difficulty: { level: 'Very high', text: "Explosive licences, about five years to set up a plant and magazines, and DRDO qualification of every propellant. The work is also dangerous: a fire and explosion killed four people at Katepally in April 2025." },
        moat: "Sole-source status in chaff and flares and single-source missile propellants are strong barriers. The weakness is pricing: state buyers impose penalties, supply key materials, and it lost a 17-year DRDO operating contract to a lower bidder.",
        salesDrivers: ["**Executing the order book**: ₹1,393cr, about 3.6 times FY26 revenue, including a ₹430cr chaff-and-flares order (only ₹21cr done in Q1) and a ₹350.2cr export order awaiting its licence.", "**Export licences**, which decide more than half the order book.", "**Approvals and materials**: a DRDO approval for an in-house substitute explosive slipped six months; imported chaff payloads and free-issue materials set the pace.", "**New capacity**: the Kattupalli RDX/HMX plant and a large mixer, and a rebuilt rocket-motor facility due to produce from November 2026; capex about ₹60cr over FY26–FY27 (₹28cr spent).", "**Future growth**: management guides 'around ₹600cr' for FY27 at 15–20% margin, which needs about ₹166cr a quarter, a level reached only once; strategy is on hold until Apollo takes control."],
        inputs: "**Ammonium perchlorate** (made in-house), aluminium powder and rubbery binders for propellants; **ammonium nitrate** for bulk mining explosives; imported chaff payloads; and materials supplied free by BDL and DRDO for much domestic work. Staff are 18% of sales. Materials were 58% of sales in FY26.",
        costEffect: "**Partly passed on.** Defence contracts are fixed-price, sometimes with escalation, and penalties for delay are deducted from revenue (₹24.8cr in FY26); bulk-explosive prices follow ammonium nitrate but margins there are 'in many places negative'. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (10% to 4%). **What happened:** there is no useful price index for its inputs. The margin fell from 22% (FY24) to 14% and 10% (FY26), and swung between −0.4% and 15% over the last five quarters (5.7% in Q1 FY27), driven by delayed deliveries, penalties, plant accidents and a lost operating contract rather than raw-material prices. FY26 profit was held up by ₹42.1cr of other income, mostly a one-off supplier discount.",
        competitors: [{ name: 'Solar Industries', note: 'Much larger private explosives and defence maker, strong in both mining and missiles.' }, { name: 'Ordnance factory companies (Munitions India)', note: 'State producers of explosives and ammunition.' }, { name: 'More than 40 bulk-explosive makers', note: 'Crowded, thin-margin mining explosives market.' }],
        position: "**Sole domestic supplier of chaff and flares to the Indian Air Force** and sole propellant supplier for three missile programmes; small against Solar Industries.",
        money: "**Net cash of ₹28cr** (Screener); borrowings fell to ₹32cr, and bank covenants require net worth above ₹220cr. FY26 operating cash was −₹1cr. Capex of about ₹60cr over FY26–FY27 is modest. Apollo Micro Systems is buying the promoters' 41.33% at about ₹698 a share, with an open offer for 26% at the same price, due to close in Q3 FY27. Promoters hold **41.33%**, unchanged until the sale closes.",
        watch: ["Apollo's open offer closing in Q3 FY27.", "Quarterly revenue above ₹150cr at a 15%+ margin.", "Export licences granted and a clean audit opinion."],
        charts: chemicalsCharts['Premier Explosives'],
    },
    {
        company: 'Oriental Aromatics',
        inShort: ["**India's first synthetic-camphor maker**, which also sells aroma chemicals to global fragrance houses and compounds fragrances and flavours; a new Mahad subsidiary makes one specialty ingredient.", "**Good:** volume up 22% in Q1 FY27, a 60-year camphor franchise and approvals with Givaudan, IFF and Symrise. **Bad:** profit fell from ₹53cr (FY22) to ₹3cr (FY26), borrowings rose to ₹403cr, the cash cycle is 247 days, ICRA's outlook is Negative, and promoter directors were paid ₹8.5cr, more than group profit.", "**Verdict: pass.** Growing volume but earning almost nothing, and the price is far ahead of any recovery I expect."],
        tagline: "A Mumbai camphor, aroma-chemical and fragrance company with plants at Bareilly, Vadodara, Ambernath and Mahad.",
        revenue: '₹1,031cr (FY26, consolidated)',
        products: [
            { name: 'Camphor and terpene chemicals', text: "Synthetic camphor made from alpha-pinene at Bareilly, sold as tablets, powder and pharma-grade camphor under brands such as Saraswati and Bhimseni; roughly a third of sales (management's rough figure)." },
            { name: 'Specialty aroma ingredients', text: "Pine-based derivatives, sandalwood and musk molecules, esters and nitriles made at Vadodara, 75% exported to fragrance houses; roughly a third." },
            { name: 'Fragrances and flavours', text: "Compounded blends made at Ambernath, which runs one shift and has 'substantial' spare capacity; roughly a third." },
            { name: 'Evermoss (Mahad subsidiary)', text: "A 250-tonne plant making one oakmoss-type fragrance ingredient, running at 50–60%; sold only about ₹3cr in Q1 FY27 against the ₹50cr planned in May for the year, a figure not repeated in July." },
        ],
        revenueText: "The accounts show a single segment; management says camphor, aroma ingredients and fragrances are **each roughly a third of sales**. **Exports fell to 33% of FY26 revenue** (₹341cr, down 14%) while India grew 29% to ₹685cr; exports were 35% in Q1 FY27. No customer is above 10% of revenue.",
        mixes: [
            { caption: 'Revenue by market, FY26 (annual report)', parts: [{ label: 'India', share: 67 }, { label: 'Exports', share: 33 }] },
        ],
        customers: ["**Global fragrance houses** (IFF, Givaudan, Symrise) for aroma ingredients, some on fixed-price contracts that delay pass-through.", "**Indian pooja-camphor distributors, pharma and FMCG companies** (a P&G supplier award in 2023).", "Export buyers in the US, Europe, Indonesia and Japan; some take up to 180 days to pay."],
        difficulty: { level: 'Medium', text: "Camphor and common aroma chemicals are well-known processes with plenty of capacity. New specialty molecules are harder: 500–1,000 days from sample to commercial orders, as Mahad shows." },
        moat: "Integration from pine chemistry to finished fragrance gives it supply security and long customer approvals. The weakness is pricing: Indian camphor capacity far exceeds demand, Chinese aroma chemicals flood the market, and management calls industry discipline 'wishful thinking'.",
        salesDrivers: ["**Volume**: Q1 FY27 volume rose 22% but revenue only 15%, so prices per unit fell about 6%; part was customers buying early because of the war.", "**Mahad ramp-up**: management wants 75–80% use but gave no date; the plant is losing about ₹20cr a year.", "**Camphor prices**, set by oversupplied Indian capacity and Chinese imports, with no anti-dumping protection.", "**Exports**, which fell 14% in FY26 partly because of US tariffs.", "**Future growth and capex**: the five-year capex cycle is complete (FY26 capex was only ₹11.8cr) and no major spending is planned until profits improve; management targets 10–15% sales growth next year and peak revenue of ₹1,200–1,250cr at current prices."],
        inputs: "**Alpha-pinene from gum turpentine and crude sulphate turpentine** (pine-resin products, imported and priced in dollars), plus petrochemical intermediates; alpha-pinene rose 70–80% in five months to July 2026. Materials were 66% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** It raises contract prices in three-month steps and spot price lists monthly (25–27% in May 2026), but fixed-price contracts and a buyer's market mean it gives up price for volume. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (7% to 0%). **What happened:** there is no Indian price index for pinene. The margin fell from 11% (FY22) to 6% in FY23 and FY24, recovered to 10% in FY25 and dropped to 7% in FY26; over the last five quarters it ran 5–8%. Pinene costs, oversupplied camphor and Mahad's 1–1.5-point drag explain it.",
        competitors: [{ name: 'Privi Speciality Chemicals', note: 'Larger Indian aroma-chemical maker with a cheaper crude-turpentine route and annual contracts.' }, { name: 'Indian camphor makers', note: 'Many small producers; capacity far exceeds demand.' }, { name: 'Chinese camphor and aroma-chemical exporters', note: 'Set world prices in many products.' }],
        position: "**India's pioneer in synthetic camphor** (since 1964) and a mid-sized aroma-chemical supplier; small against Privi and the Chinese producers.",
        money: "**Net debt of ₹388cr** (Screener); borrowings rose from ₹206cr (March 2024) to ₹403cr, and management puts net debt at 0.56 times equity in June. ICRA rates it A- with a **Negative** outlook. It has guaranteed ₹80cr of the Mahad subsidiary's loans. No major capex planned, and no equity raised. Promoters hold **74.17%**, unchanged, with no pledge; the two promoter directors were paid ₹8.5cr in FY26.",
        watch: ["Margin above 9% for two quarters.", "Mahad revenue above ₹12cr a quarter.", "Borrowings and stock falling."],
        charts: chemicalsCharts['Oriental Aromatics'],
    },
    {
        company: 'Refex Industries',
        inShort: ["**Once a refrigerant-gas refiller, now a fly-ash and coal logistics firm** for 42 coal power stations, with a new wind-turbine assembly business.", "**Good:** ash profit is growing fast in a market created by rules that require all ash to be used, and debt is low. **Bad:** unbilled ash revenue quadrupled to ₹696cr, the promoter pledge rose to 47% for 'personal use', an income-tax search is unresolved, and ₹509cr of guarantees back the wind arm.", "**Verdict: avoid.** Cheap, but I cannot trust the numbers until the cash arrives."],
        tagline: "A Chennai company that trucks fly ash and pond ash from thermal power stations to cement and brick makers, and assembles 5.3 MW wind turbines.",
        revenue: '₹2,277cr (FY26, consolidated)',
        products: [
            { name: 'Ash and coal handling', text: "Collecting fly ash and pond ash from power-plant silos and ponds and trucking it to cement plants, brick makers, roads and mines, carrying coal on the return trip; paid ₹450–1,200 a tonne by distance, at 65,000–70,000 tonnes a day." },
            { name: 'Wind turbines (Venwind Refex, about 77% owned)', text: "Assembling 5.3 MW turbines under licensed German (Vensys) technology at a leased 1 GW plant at Silvassa; supply only, with blades still imported. ₹295cr of Q1 FY27 revenue at about break-even." },
            { name: 'Exited and demerging businesses', text: "Refrigerant gas (closed January 2026) and power trading (exited August 2025); the green-mobility EV fleet is being demerged, now expected in Q3 FY27." },
        ],
        revenueText: "Ash and coal handling was **about 89% of FY26 segment revenue** (₹2,012.7cr) and wind 11% (₹237.5cr); wind's share is rising fast (₹295cr in Q1 FY27 alone). **NTPC gave 28% of revenue** and IL&FS Tamil Nadu Power 12%. All revenue is domestic.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (annual report)', parts: [{ label: 'Ash and coal handling', share: 89 }, { label: 'Wind turbines', share: 11 }], note: 'Service and solar revenue (about ₹11cr) is left out.' },
            { caption: 'Revenue by customer, FY26 (annual report)', parts: [{ label: 'NTPC', share: 28 }, { label: 'IL&FS Tamil Nadu Power', share: 12 }, { label: 'Others', share: 60 }] },
        ],
        customers: ["**NTPC** (28% of revenue) and **state power generators** in Madhya Pradesh, Tamil Nadu and Andhra Pradesh, plus DVC and Adani Power; all pay slowly.", "**IL&FS Tamil Nadu Power** (12%), part of the troubled IL&FS group.", "**Wind-farm developers** such as Torrent and Jindal Steel & Power (a 148 MW order)."],
        difficulty: { level: 'Low', text: "Ash logistics needs trucks, bank guarantees, a multi-state network and tracking software, but management admits 'a lot of the players can have execution capability'. Wind turbines are harder, but Refex relies on licensed technology." },
        moat: "It is the largest organised ash handler (management says the next is a quarter its size) in a market set by environment rules. The weakness is weak pricing power: state utilities pay slowly and only 40–60% of diesel increases are recovered.",
        salesDrivers: ["**Ash-use rules**: the environment ministry requires 100% of ash to be used, with ₹1,000 a tonne penalties, and old ash ponds cleared over ten years; management puts the market at about ₹75,000cr.", "**Ash volume**, guided toward about 90,000 tonnes a day by Q4 FY27, with ₹1,635cr of ash orders.", "**Wind deliveries**: ₹1,860cr of wind orders, of which about ₹1,300cr is due in FY27, mostly in the second half.", "**Rail-cum-road ash movement**, using a railway freight discount to reach the Northeast.", "**Future growth and capex**: ash is asset-light (leased trucks, no capacity limit); wind needs more money to localise 85% of parts within 12 months, funded by bank loans, with a hoped-for 18–20% margin in about two years."],
        inputs: "**Truck hire, diesel and drivers** for ash, and **bought-in turbine components and imported blades** for wind; Screener counts these as materials and direct costs, 81% of sales in FY26. Staff are only 2%, because transport is largely contracted out.",
        costEffect: "**Partly passed on.** Ash contracts have escalation clauses, but only 40–60% of diesel price increases can be recovered, and diesel was short at several sites in Q1 FY27; wind is fixed-price supply. **Rule of thumb:** a 10% rise in material and direct costs not passed on would cut the margin by about 8 points (16% to 8%). **What happened:** there is no single price index for its costs. The margin went from 11% (FY24) to 9% (FY25), when low-margin coal trading was large, to 16% (FY26) as trading was cut and ash grew; quarterly it ran 16–17% through most of FY26, then fell to 12% in Q1 FY27 because ₹295cr of wind sales earned about nothing (ash alone earned 17%).",
        competitors: [{ name: 'Small unlisted ash handlers', note: 'Each serves 1–5 plants; management says the next largest is about a quarter of its size.' }, { name: 'Suzlon, Inox Wind, Envision, Siemens Gamesa', note: 'Established wind-turbine makers with their own technology and margins of 18–20% (an analyst’s figure).' }],
        position: "**India's largest organised fly-ash handler** (management's claim), with about 3% of a ₹75,000cr market; a new entrant in wind turbines. Acuité A.",
        money: "**Net cash of ₹168cr** (Screener); borrowings ₹225cr, and management calls debt 'effectively net-zero', but bank working-capital lines were about 86% used and it has guaranteed ₹509cr for subsidiaries (₹46cr a year earlier). Ash receivables and unbilled work total ₹1,413cr. ₹45cr of unused share-issue money sits as an 11% deposit with an outside finance company. Capex is light. Promoters hold **56.57%**, up from 53.33% in September 2023, but **47.28% of their shares are pledged**, up from 41% at the Q4 call.",
        watch: ["Unbilled ash revenue turning into cash.", "The promoter pledge actually falling.", "The income-tax search order and wind margins."],
        charts: chemicalsCharts['Refex Industries'],
    },
    {
        "company": "Sacheerome",
        "inShort": [
            "**Creates and makes fragrances and flavours** in Noida, the scent in soaps, shampoos and detergents and the taste in food products, for Indian consumer-goods companies. Listed on NSE's SME board in 2025.",
            "**Good:** sales grew 41% to ₹152cr in FY26 at a 24% operating margin, there is no debt, and 84% of five years' operating profit turned into cash. **Watch:** the old plant is running at 124% of rated capacity, and a ₹184cr plant (more than its whole FY26 sales) arrives two months late with about ₹60cr of new debt; management's own plan has sales doubling in three years while capacity quadruples, so returns on capital will fall for a while.",
            "**Verdict: wait.** A good small business at a fair 33 times earnings, but I want to see the new plant running and holding the margin before buying."
        ],
        "tagline": "A Delhi-NCR fragrance and flavour house founded by perfumer Manoj Arora in the early 1980s, supplying custom scents and tastes to consumer-goods makers.",
        "revenue": "₹152cr (FY26, standalone)",
        "products": [
            {
                "name": "Fragrances",
                "text": "Custom scents made to each customer's brief for personal care, home care and other consumer products; about 94% of FY26 revenue. It uses its own encapsulation and long-lasting fragrance technologies."
            },
            {
                "name": "Flavours",
                "text": "Tastes for food and drink products; about 6% of revenue and growing faster. The new plant has a separate tower for flavours."
            }
        ],
        "revenueText": "**Fragrances were about 94% of FY26 revenue and flavours 6%**; **domestic sales about 94%, exports about 6%** (about ₹9.5cr, up from ₹8cr). Of FY26's ₹44.85cr revenue increase, ₹31.24cr came from existing customers and ₹13.61cr from new ones. It says it has made 10,000 products for customers in 30 countries.",
        "mixes": [
            {
                "caption": "Revenue by product, FY26 (approximate, from management)",
                "parts": [
                    {
                        "label": "Fragrances",
                        "share": 94
                    },
                    {
                        "label": "Flavours",
                        "share": 6
                    }
                ]
            }
        ],
        "customers": [
            "**Indian consumer-goods (FMCG) companies**, from large to small; none named and no concentration disclosed.",
            "**Overseas buyers**, about 6% of sales; it exhibited at the World Perfumery Congress in the US in June 2026."
        ],
        "difficulty": {
            "level": "High",
            "text": "Each fragrance is a secret formula made to a customer's brief, and once a product launches with it the customer rarely changes it. That takes trained perfumers, a library of formulas and years of trust. Global fragrance houses have the same skills at far larger scale."
        },
        "moat": "A real but small one: customers stay because changing a product's scent risks their brand, and it creates to each brief. Against it, global houses dominate the industry and Sacheerome is, in its MD's words, 'very tiny'.",
        "salesDrivers": [
            "**Capacity**: about 760 tonnes a year today, running at about 124%; YEIDA lifts it to about 2,760 tonnes from August 2026.",
            "**Guidance**: ₹200cr in FY27, ₹250cr in FY28, ₹300cr in FY29, which management calls conservative.",
            "**Indian consumer spending**: more products per household and more premium launches by Indian FMCG companies.",
            "**Flavours and exports**: both small, both targeted with the new plant."
        ],
        "inputs": "**Aroma chemicals and essential oils**, partly imported. Materials were about 60% of FY26 sales (from gross profit).",
        "costEffect": "**Mostly protected.** Each fragrance is priced per customer and can be repriced; management said West Asia-related cost increases would not hurt much. **What happened:** the operating margin rose every year from 13% in FY22 to 24% in FY26 as sales grew on a fixed plant.",
        "competitors": [
            {
                "name": "Global fragrance and flavour houses",
                "note": "Management says the industry is dominated by global companies; Indian houses are gaining share."
            },
            {
                "name": "SH Kelkar, Oriental Aromatics",
                "note": "Larger listed Indian peers in this note, which also make aroma ingredients; Sacheerome makes only finished fragrances and flavours."
            }
        ],
        "position": "**A small Indian fragrance house** running beyond its rated capacity; no market share is disclosed.",
        "money": "**Net cash of about ₹45cr** at March 2026 with no borrowings (data provider). The YEIDA plant costs about **₹184cr**: ₹76.59cr was spent by March (₹28.79cr from IPO money, ₹47.80cr from its own cash), and about ₹60cr of debt will be drawn as needed. **Over FY22–FY26, operating cash was ₹78cr against ₹93cr of operating profit (84%)**, but free cash turned negative in FY25–FY26 with the plant (−₹14cr in FY26). Working capital improved from a 109-day cycle in FY22 to 33 days. Promoters hold **71.54%**. No dividend.",
        "watch": [
            "YEIDA in commercial production and H2 FY27 sales showing it.",
            "FY27 revenue near ₹200cr with the margin near 24%.",
            "How much of the ₹60cr loan is drawn."
        ],
        charts: chemicalsCharts["Sacheerome"],
    },
    {
        "company": "Gem Aromatics",
        "inShort": [
            "**Makes mint and clove oils and the chemicals derived from them** (menthol-type products, eugenol) for flavour, fragrance, oral-care and pharma buyers, and is starting a ₹270cr plant at Dahej for newer aroma and specialty chemicals. Listed in 2025.",
            "**Good:** a long-established export business and a new plant whose cooling agents are already approved by the two largest buyers. **Bad:** consolidated sales fell 27% in FY26 and it lost money in three of the last four quarters (−₹7.9cr in Q1 FY27), stock takes about 309 days to sell, and five years of operating profit produced only 17% as cash, with free cash at −₹212cr.",
            "**Verdict: pass.** Loss-making in three of the last four quarters, stock takes 309 days to sell and free cash over FY22–FY26 was −₹212cr; until it is back in profit with cash following, there is nothing to value."
        ],
        "tagline": "A Mumbai-based maker of essential oils and aroma chemicals, founded in 1997 by Vipul Parekh, moving from mint and clove derivatives into specialty aroma ingredients.",
        "revenue": "₹366cr (FY26, consolidated)",
        "products": [
            {
                "name": "Mint products",
                "text": "Oils and crystals made from Indian mint, harvested May–July and sold largely for export; the traditional core that management wants to rely on less."
            },
            {
                "name": "Clove products",
                "text": "Clove-leaf oil imported mainly from Madagascar and East Africa and processed into eugenol and its derivatives for oral care and fragrance; hit in Q1 FY27 when floods shut Madagascar's port for about a month."
            },
            {
                "name": "Krystal Ingredients (Dahej)",
                "text": "A new multi-purpose plant: cooling agents (Gemcool 3, 5, 23; about 500 tonnes), Safranal from citral, and phenol derivatives; commercial supplies ramp up through FY27, and management expects Krystal to be more than half of revenue in FY28."
            }
        ],
        "revenueText": "No split by product or region was given on the call. In Q1 FY27 **standalone revenue (the older business) was ₹83cr at a 10.3% EBITDA margin, while consolidated revenue was ₹99cr at 3.3%**, because Dahej's costs arrived before its sales. FY26 consolidated revenue fell to ₹366cr from ₹504cr, after an unusually large Q4 FY25 (₹202cr).",
        "customers": [
            "**Flavour, fragrance, oral-care, confectionery and pharma companies**, many of them multinationals, in India and abroad (US and Latin America); none named and no concentration disclosed.",
            "**Traders and distributors** abroad, used to sell new products faster while large customers finish approvals."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Natural-oil processing is a trading-and-processing skill open to many players; the newer synthetic products need chemistry and long customer approvals (stability tests, trial batches), which take quarters to years."
        },
        "moat": "Weak today. The mint and clove business is a natural-product processor exposed to crops, weather and prices; the new specialty products could build switching costs once approved by large buyers, but that is still ahead.",
        "salesDrivers": [
            "**Krystal approvals**: cooling agents meaningful from Q3 FY27, Safranal from Q2–Q3, phenol derivatives commercial in Q3 and meaningful in Q4.",
            "**Crops and weather**: the mint harvest (May–July) and clove supply from Madagascar.",
            "**Exports**: demand from the US and Latin America; shipping delays held back Q1 sales; a Brazil subsidiary is being set up.",
            "**Guidance**: none for FY27, which management calls a ramp-up year; it promised guidance for FY28 around the end of 2026."
        ],
        "inputs": "**Mint oil from Indian farmers, clove-leaf oil from Madagascar and East Africa, and phenol and citral** for the new products. Materials were about 76% of FY26 sales (from gross profit).",
        "costEffect": "**Exposed.** Natural-oil prices swing with harvests and weather, and it must hold large stocks through the year. It hedges currency on its import-and-export contracts. **What happened:** after Madagascar's floods, higher clove costs and a weaker mix cut the consolidated gross margin to 16.7% in Q1 FY27; the operating margin went from 22.7% in Q4 FY25 to 3.4% in Q2 FY26 and 3.3% in Q1 FY27.",
        "competitors": [
            {
                "name": "Clean Science and Technology, Vinati Organics",
                "note": "Established makers of phenol derivatives (MEHQ, BHA, anisole) that Gem is entering, per the custom-chemicals note."
            },
            {
                "name": "Indian mint processors and Chinese synthetic menthol",
                "note": "Set prices in the core mint business; not named by management."
            }
        ],
        "position": "**A mid-sized natural-oil processor and exporter** moving into synthetic aroma chemicals; no market share is disclosed.",
        "money": "**Net debt about ₹144cr** at March 2026: ₹152cr of borrowings against only about ₹8cr of cash (data provider). The Dahej plant cost about **₹270cr**, ₹265cr of it already spent, funded by IPO money (reserves rose ₹164cr in FY26) and loans. **Over FY22–FY26 operating cash was ₹55cr against ₹322cr of operating profit (17%) and free cash −₹212cr**, because stock days rose from 206 to 309 and customers took 76 days to pay. Depreciation jumped to ₹9.1cr a quarter. It has started factoring receivables. Promoters hold **57.44%**. No dividend.",
        "watch": [
            "Krystal revenue showing up in Q3 and Q4 FY27 results.",
            "A return to consolidated profit and positive free cash.",
            "Stock days falling from 309."
        ],
        charts: chemicalsCharts["Gem Aromatics"],
    },
];

export const chemicalsIngredientsBusinesses = { intro, profiles };
