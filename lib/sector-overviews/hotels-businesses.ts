import { BusinessProfile, OverviewSection } from './types';
import { hotelsCharts } from './card-data/hotels';

// Tab 2 of the Hotels and Travels note: what each company actually does.
// Revenue totals are the filed figures (Screener). Keys, occupancy, room rates and
// splits come from the companies' latest presentations and calls; where a figure is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it offers, where the money comes from and its charts; guests, costs, competitors and ownership are under **More detail**. Revenue totals are filed consolidated figures; keys, occupancy and room rates are from each company's latest call. Hotels have no main raw material, so there is no cost-versus-input chart.",
        ],
    },
    {
        heading: 'The business, in plain words',
        body: [
            "A hotel's revenue is rooms sold times the price per room, plus food, drink and banquets. Four terms explain most of it.",
        ],
        points: [
            {
                label: 'Keys',
                text: "The number of rooms. A company's size is usually given in keys open, plus keys signed or being built.",
            },
            {
                label: 'Occupancy and room rate (ADR)',
                text: "Occupancy is the share of rooms sold on an average night; ADR (average daily rate) is the average price paid per room night. Premium Indian hotels ran at about 72–74% occupancy with room rates of about ₹8,200–8,500 in FY26, according to ICRA.",
            },
            {
                label: 'RevPAR',
                text: "Revenue per available room: occupancy times room rate. It is the single best measure of how a hotel is doing, because it captures both how full it is and what it charges.",
            },
            {
                label: 'Owner or manager',
                text: "An owner builds or buys the hotel and keeps all the profit, but ties up a lot of capital. A manager runs hotels that others own for a fee of a few per cent of revenue, needing almost no capital. Most companies here own; Lemon Tree and Royal Orchid are moving toward managing.",
            },
        ],
    },
    {
        heading: 'Three kinds of company',
        body: [
            "What a company owns and who it sells to decides its margins and returns.",
        ],
        tables: [
            {
                columns: ['Kind', 'Who', 'What they do', 'What sets profit'],
                rows: [
                    ['**Luxury and upscale owners**', 'EIH, Leela, Chalet, Ventive, Juniper', 'Big-city, palace and resort hotels, some with offices', 'Room rates at the top end; foreign and corporate travel; weddings'],
                    ['**Owners of branded mid-to-upscale hotels**', 'Samhi, Brigade Hotel, Viceroy', 'Hotels run under Marriott, Hyatt and other brands', 'Occupancy and rates in business cities; debt'],
                    ['**Chains that manage and sell memberships**', 'Lemon Tree, Royal Orchid, Mahindra Holidays', 'Own brands on others’ hotels; holiday memberships (Club Mahindra)', 'Fees and signings; membership sales'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Lemon Tree Hotels',
        inShort: ["**India's largest mid-priced hotel chain** (Red Fox, Keys, Lemon Tree, Lemon Tree Premier, Aurika), with about 12,000 rooms open in 135 hotels, now splitting into a brand-and-management company and a separate hotel-owning company, Fleur Hotels.", "**Good:** fees from managing other owners' hotels grew 42% in Q1 FY27, it signed three times as many rooms as it opened, and heavy renovation spending ends this year. **Watch:** room rates rose only 2% in Q1, only 334 of about 2,000 promised managed rooms opened in Q1, a GST change costs about 2% of revenue, the fee terms with Fleur are unpublished, and the demerger will not be complete before 2027.", "**Verdict: own.** Fee income is starting to compound and debt is falling; the split should show what the brand business is worth."],
        tagline: "India's biggest mid-market hotel chain, moving from owning hotels to managing and franchising them for other owners, with its owned hotels being separated into Fleur Hotels.",
        revenue: '₹1,444cr (FY26, consolidated)',
        products: [
            { name: 'Owned and leased hotels (Fleur)', text: "Just under 6,000 rooms owned or leased through Fleur Hotels, in which Lemon Tree holds 59% and Warburg Pincus 41%. This is the asset-heavy side: Fleur owns the buildings, pays for them and keeps the hotel profit. Owned hotels took ₹320cr of revenue in Q1 FY27." },
            { name: 'Managed and franchised hotels', text: "Hotels owned by other people that carry its brands. This is the asset-light side: Lemon Tree puts in no capital and earns a fee linked to the hotel's revenue and profit. Fees from these third-party hotels were ₹22.8cr in Q1 FY27, up 42%, plus ₹22.6cr of fees from Fleur." },
            { name: 'Brands from economy to upscale', text: "Red Fox and Keys (economy), Lemon Tree Hotels (mid-scale), Lemon Tree Premier (upper mid-scale) and Aurika (upscale). The Keys hotels, now about 75% renovated, raised revenue per room 19% in Q1 FY27; management targets ₹60cr of EBITDA from them." },
            { name: 'Pipeline and new markets', text: "23,381 rooms open or signed across 279 hotels in over 170 cities, including Nepal, Bhutan and Dubai. It expects to open about 2,000 managed keys (rooms) in FY27, and the nearly 5,000 rooms signed in FY26 should open around FY29." },
        ],
        revenueText: "Rooms are about **75% of hotel revenue** and food, banquets and other services about 25% (management's rough split). Across every hotel carrying its brands, revenue was ₹576cr in Q1 FY27: **₹320cr from owned hotels and ₹256cr from managed and franchised ones**. Lemon Tree's own accounts include only the fees from managed hotels, so filed sales were ₹345cr, up 9%. The average daily room rate (ADR, the average price paid per room per night; Lemon Tree calls it ARR) was ₹6,361, up 2%, and occupancy 75.7%, up 3.1 points. Online travel agents supply the mid-to-late 30s per cent of bookings.",
        mixes: [
            { caption: 'Revenue of all hotels under its brands, Q1 FY27 (company call)', parts: [{ label: 'Owned hotels (Fleur)', share: 56 }, { label: 'Managed and franchised hotels', share: 44 }], note: "Only the fees from managed hotels reach Lemon Tree's own revenue." },
            { caption: 'Hotel revenue by type (management rough split)', parts: [{ label: 'Rooms', share: 75 }, { label: 'Food, banquets and other', share: 25 }] },
        ],
        customers: ["**Travelling staff of large companies**: managers on negotiated corporate rates are its core guests. In Q1 FY27 companies cut travel during the West Asia conflict and it filled rooms with holidaymakers instead.", "**Holiday and walk-in guests** booking direct or through online agents; 45% of demand is repeat business and its loyalty programme has 2.5 million members.", "**Hotel owners** who sign management or franchise contracts, increasingly in smaller cities, and Fleur itself, which pays fees on every hotel it owns."],
        difficulty: { level: 'Medium', text: "Mid-priced hotels are simpler to build and run than luxury ones, but building still takes 3–4 years and a lot of capital. The harder part is a brand that owners trust and guests pick: signed hotels take about 30 months to open, so a management business takes years to build." },
        moat: "The largest mid-market network in India, 2.5 million loyalty members and a record of running hotels cheaply give it pull with both guests and owners. The weakness is that the mid-market is where most new supply goes, and international chains are franchising hard in India.",
        salesDrivers: ["**Occupancy and room rates**: RevPAR (revenue per available room, i.e. occupancy multiplied by the average room rate) is what drives hotel profit. Q1 FY27 growth came from occupancy; management says July and August were strong and it is pushing rates again from Q2.", "**Corporate travel**: large companies are its biggest customers. Mumbai and Gurgaon were soft in Q1, partly because 2,000 new rooms near Mumbai airport are still being absorbed.", "**Opening signed hotels**: signings rose from 2,000 rooms three years ago to 3,500 two years ago and nearly 5,000 in FY26. Each opens about 2.5–3 years later, so fee income should accelerate over the next 8–12 quarters.", "**Fleur's expansion**: Warburg Pincus will put ₹960cr into Fleur, which is pursuing about 2,500 more rooms; every Fleur hotel pays Lemon Tree a fee.", "**The industry cycle**: management says India's hotels are not yet in an upcycle (industry occupancy is in the mid-60s); ICRA expects premium-hotel occupancy of 72–74% in FY27."],
        inputs: "**Staff, power and hotel running costs, and renovation.** In FY26 power, fuel and hotel running costs were 22% of sales, staff 17% and other costs 14%; the filing does not show food separately. About half of hotel costs rise with occupancy and half are fixed. A recent GST change means rooms sold under ₹7,500 a night no longer get credit for tax paid on costs; 52% of its rooms sell below that price, so the change costs about 2% of revenue.",
        costEffect: "**Mostly insulated from commodity prices.** Food and supplies are a small cost. The margin moves with occupancy and room rates, the growing share of high-margin fees, renovation spending (which it runs through the profit and loss account) and the GST change. Management says the FY27 margin will be “well better than” 47% and that anything below 50% in FY28 would be underperformance, and it targets 75–80% for the asset-light Lemon Tree company within 3–4 years. **What happened:** the operating margin jumped from 30% in FY22 to 51% in FY23 as travel recovered, then eased to 48–49% in FY24–FY26 under heavy renovation spending. In Q1 FY27 it was 43.8% against 44.8%, as the GST change and a provision for staff share-price bonuses added costs of 3.1% of revenue.",
        competitors: [{ name: 'IHCL (Ginger)', note: 'The main Indian rival in mid-priced hotels, backed by the Taj group.' }, { name: 'Global mid-market brands', note: 'Novotel, Radisson, Fairfield and others, often franchised to Indian owners; several opened near Mumbai airport recently.' }, { name: 'New branded supply', note: "India's branded hotel pipeline is about 114,000 rooms, much of it mid-market." }],
        position: "**India's largest mid-market hotel company** by rooms, and one of the few Indian hotel companies of scale set to run mainly on fees once Fleur is separated.",
        money: "Screener shows **₹1,833cr of net debt** (including leases), about 2.6 times a year's operating profit. The company puts gross borrowing at ₹1,475cr at June 2026 (down 11% in a year, at 7.48%) and group net debt at about ₹1,275cr against about ₹700cr of annual EBITDA. Fleur aims to keep debt at about 2 times EBITDA, and Warburg's ₹960cr goes into Fleur before it lists. Under the demerger, Lemon Tree shareholders will get 33 of every 110 Fleur shares directly, Lemon Tree keeps 41 and Warburg 36; it needs SEBI, shareholder, creditor and tribunal approval, with completion expected in 2027. Promoters hold **22.3%**, down from 23.3% in September 2023.",
        watch: ["Room rates rising again from Q2 FY27, as management promises.", "Fee income as the 2,000 rooms due in FY27 open.", "Demerger approvals, Fleur's listing and its first large acquisitions.", "The published fee terms between Lemon Tree and Fleur, which the same chairman will lead from April 2027."],
        charts: hotelsCharts['Lemon Tree Hotels'],
    },
    {
        company: 'Samhi Hotels',
        inShort: ["**Samhi buys badly run hotels in big office districts, renovates them and re-brands them with Marriott, Hyatt and IHG**, then runs them as owner. It also owns RARE India, a booking platform for boutique leisure hotels.", "**Good:** occupancy near 80%, same-store RevPAR up 9.6% in Q1 FY27, and interest costs down a quarter in a year as debt is refinanced. **Watch:** room rates rose only 3–4%, the GST change cost ₹9.2cr in the quarter, FY26 profit was flattered by a ~₹300cr tax credit and a ₹97cr write-back, the 2.5x debt target slipped to FY28, and the board has taken permission to raise up to ₹750cr of new capital.", "**Verdict: own.** Operations are strong and cash flow should fund most of the growth; the main risk is new shares being issued."],
        tagline: "An owner of branded business hotels in India's main office markets, which it buys cheaply, renovates and re-brands with Marriott, Hyatt and IHG, plus the asset-light RARE India leisure platform.",
        revenue: '₹1,248cr (FY26, consolidated)',
        products: [
            { name: 'Upscale and upper-upscale hotels', text: "Full-service hotels such as Hyatt Regency Pune and Marriott-brand hotels, with bigger restaurants and banquet halls. About 40–41% of revenue; per room they earned almost four times as much as its mid-scale hotels in FY26." },
            { name: 'Mid-scale hotels', text: "Mainly Holiday Inn Express (IHG) business hotels: simple, efficient rooms near office parks. About 60% of revenue; RevPAR grew 13.7% in Q1 FY27 on 81.3% occupancy." },
            { name: 'Development pipeline', text: "1,669 rooms in seven committed new hotels, mostly upscale, including W Hyderabad (targeted for H2 FY28) and a large dual-brand project in Navi Mumbai (construction from about April 2027, taking 3–4 years). About 473 existing rooms are being re-branded up to upscale." },
            { name: 'RARE India', text: "An asset-light platform for 75 heritage, wildlife and boutique hotels (1,046 rooms) in 15 states; it earns a commission on bookings it sends, not the hotels' revenue. About ₹60cr invested including the Itmenaan estate in Uttarakhand; management expects ₹35–40cr of EBITDA in about two years." },
        ],
        revenueText: "Q1 FY27 total income was **₹308.3cr, up 7.3%**, or 10.8% excluding a ₹9.3cr one-off gain in the year-earlier quarter; same-store growth was about 9%. Room revenue grew 14% but food and drink only 3.7%, because foreign guests (who spend more on food) fell and some events moved to July. Same-store RevPAR rose 9.6% to about ₹5,220 on occupancy of 79.3%, up from 74.2%. Domestic guests were **82% of room nights**, up from 78%. Upscale hotels are about 40–41% of revenue and should reach about 60% by FY30.",
        mixes: [
            { caption: 'Revenue by hotel segment (management, approximate)', parts: [{ label: 'Mid-scale and upper mid-scale', share: 60 }, { label: 'Upscale and upper upscale', share: 40 }] },
        ],
        customers: ["**Companies in large office districts** in Bangalore, Hyderabad, Pune and NCR, especially technology firms and global capability centres, whose staff stay on negotiated rates.", "**Domestic business and leisure travellers**, now 82% of room nights, plus airline crew and groups.", "**Foreign business travellers**, who usually pay 10–20% more but were fewer in Q1 FY27 because of the West Asia conflict."],
        difficulty: { level: 'High', text: "Finding hotels that are badly run but well located, buying them at the right price and turning them round takes capital, renovation skill and good relations with the global brands. New big-city hotels take 3–4 years to build and depend on approvals." },
        moat: "Clusters of branded hotels next to India's densest office markets give it steady corporate demand and pricing power on busy days (36% of Q1 days were above 90% occupancy). It does not own the brands or the guest relationship, and its mid-scale hotels are hit hardest by the GST change.",
        salesDrivers: ["**Office growth**: about 11 million sq ft of offices was taken up in its markets in Q1 FY27, after 58 million sq ft in FY26; more office workers mean more business stays.", "**Occupancy versus rate**: Q1 growth came from occupancy; management says July growth was half rate and half occupancy, and expects rates to rise in H2 as foreign guests return.", "**Moving up-market**: re-branding 473 rooms to upscale and opening mostly upscale hotels lifts revenue per room and avoids the GST penalty on rooms under ₹7,500.", "**Same-store growth of 9–11% a year**, which management treats as its long-run expectation and has delivered for several quarters despite shocks.", "**GIC partnership**: GIC can take 35% of new upscale deals through a joint venture, adding capital for acquisitions."],
        inputs: "**Staff, power and hotel running costs, and brand fees.** In FY26 staff were 17% of sales, power, fuel and hotel running costs 16%, food and supplies 8% and other costs 24%. The GST change on rooms under ₹7,500 added about ₹9.2cr of costs in Q1 FY27, a little over 2% of revenue.",
        costEffect: "**Mostly insulated from commodity prices.** Food is a small cost. The margin moves with occupancy and room rates, the share of upscale hotels, the GST change and new hotels still ramping up. **What happened:** the operating margin was 32% in FY23, dipped to 28% in FY24 and was 35–36% in FY25–FY26. It slipped to 32% in Q1 FY27 from 33% because of the GST cost; management says comparable EBITDA grew 12.1%, and the GST effect drops out of year-on-year comparisons from Q3.",
        competitors: [{ name: 'Chalet, Juniper and Ventive', note: 'Other Indian owners of large branded hotels in big cities; Chalet and Ventive also earn office rent.' }, { name: 'Lemon Tree and Ginger', note: 'Compete with its Holiday Inn Express hotels on price in the mid-market.' }, { name: 'New branded supply', note: "India's branded hotel pipeline is about 114,000 rooms, and buyers are paying more for hotels in its markets." }],
        position: "**A specialist owner of branded business hotels** in India's biggest office markets, with a record of buying weak hotels and turning them round.",
        money: "Screener shows **₹1,660cr of net debt** (including leases), about 3.8 times a year's operating profit. The company puts net debt at about ₹1,490cr at June 2026, 3.2 times trailing EBITDA (2.4 times on hotels already operating), with its borrowing cost down to 7.8% and an A+ rating. It targets 2.5 times by FY28 and more than ₹3,000cr of free cash over FY27–FY31. The board took an enabling resolution to raise up to ₹750cr and says it will do so every year as a safety margin; it passed at the August AGM with 79.6% in favour against the 75% needed. **Reported profit is flattered:** FY26 net profit of ₹567cr was more than double pre-tax profit, thanks to a one-off tax credit of about ₹300cr and a ₹97cr impairment write-back in the March 2026 quarter, plus unusually high other income. There is no promoter group; foreign investors hold about 45% and Indian funds about 17%.",
        watch: ["Whether the ₹750cr permission turns into a share sale.", "Room-rate growth returning in H2 FY27 as foreign travel recovers.", "W Hyderabad opening in H2 FY28 and the Navi Mumbai start."],
        charts: hotelsCharts['Samhi Hotels'],
    },
    {
        company: 'EIH',
        inShort: ["**EIH owns and runs the Oberoi (luxury) and Trident (upper-upscale) hotels**, with 14 of its 15 benchmarked Indian hotels ranked first or second in their local markets, plus an airline-catering business and hotels it manages for others.", "**Good:** ₹1,338cr of net cash on Screener (March; the company gives ₹1,368cr of surplus funds at June), strong pricing and RevPAR up about 13% in Q1 FY27. **Bad:** quarterly sales growth was only 2–9% through FY26 before 14% in Q1, it gives no guidance, the margin fell, and the Kolkata hotel and managed pipeline keep slipping; the Oberoi brand belongs to a promoter company whose family is in an estate dispute.", "**Verdict: follow.** A superb, cash-rich franchise, but operating profit has stalled for two years and new hotels keep arriving late; the price needs far more growth than the ~10% I expect."],
        tagline: "Owner and operator of the Oberoi and Trident hotels in India and abroad, with a flight-catering arm and a list of hotels it manages for other owners.",
        revenue: '₹2,940cr (FY26, consolidated)',
        products: [
            { name: 'Oberoi hotels', text: "Luxury city hotels and resorts in Mumbai, New Delhi, Bangalore, Jaipur, Shimla and elsewhere, plus the new Oberoi Rajgarh near Khajuraho (opened November 2025). Oberoi RevPAR rose 8.2% in Q1 FY27, or 11.4% excluding Rajgarh, against 13.2% for the luxury industry." },
            { name: 'Trident hotels', text: "Upper-upscale hotels, including the large Trident Nariman Point (586 keys) and the Trident Bandra Kurla (439 keys) in Mumbai. Trident RevPAR rose 13.8% in Q1 FY27 against 9.2% for its segment." },
            { name: 'Oberoi Flight Services', text: "Airline-catering kitchens serving Indian airlines and foreign airlines flying direct into India. Revenue was ₹154cr in Q1 FY27, about a fifth of the total, helped by new flights." },
            { name: 'Managed and new hotels', text: "It also runs Oberoi and Trident hotels for other owners, with 23 more (1,833 keys) in the five-year pipeline after one 60-key hotel was pushed beyond 2032. Owned projects include the Oberoi Grand Kolkata, Oberoi London (2028), Goa (late 2029) and two hotels at Hebbal, Bangalore." },
        ],
        revenueText: "Q1 FY27 total income was **₹698cr, up 15%** (company figures, including ₹41cr of other income; filed sales were ₹657cr, up 14%). Flight catering brought ₹154cr, so **hotels were roughly 78%**; the company does not disclose its management fees. RevPAR across all its hotels rose from ₹11,352 to ₹12,801, and at owned hotels from about ₹13,000 to almost ₹15,000, on higher occupancy and rates despite 10% fewer foreign guests. Its hotels earn about 25% more revenue per room than their direct rivals (a revenue index of 125, up from 121). Food and drink revenue grew 6–7%.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (from call figures)', parts: [{ label: 'Hotels', share: 78 }, { label: 'Flight catering', share: 22 }] },
        ],
        customers: ["**Wealthy Indian and foreign leisure travellers**, especially at its Rajasthan, Shimla and resort hotels. Oberoi hotels rely more on foreign guests, who usually pay more.", "**Corporate travellers, conferences and government delegations** in Mumbai, Delhi and Bangalore; big events such as BRICS and the Bangalore air show fill city hotels.", "**Airlines** for flight catering, and **hotel owners** who hire it to run their hotels."],
        difficulty: { level: 'Very high', text: "Oberoi-level service takes decades of training and brand building, and prime sites in Mumbai or Delhi are almost impossible to replicate. Restoring or building luxury hotels is slow: the historic Oberoi Grand in Kolkata has been held up by structural safety work and a city-wide construction halt." },
        moat: "The Oberoi name commands a clear price premium over rival luxury hotels in the same cities. The weaknesses are dependence on foreign guests at Oberoi hotels and a slow record of opening new ones.",
        salesDrivers: ["**Luxury room rates**: limited new luxury supply lets it keep raising prices; ICRA expects premium-hotel room rates of ₹8,600–8,800 in FY27, up from ₹8,200–8,500.", "**Foreign tourists**: arrivals at its hotels fell 10% in Q1 FY27 because of the West Asia conflict; it hopes they return in Q3–Q4, the winter peak.", "**Big events**: BRICS in Delhi and the Bangalore air show later in the year; bookings on hand for Q2 were 'very positive'.", "**New hotels**: about 30 new owned and managed properties by 2031, including the 197-key Oberoi Grand Kolkata (now September 2028) and the Hebbal project with 7.63 lakh sq ft of shops and restaurants.", "**Flight-catering growth** from new flights and more direct international routes."],
        inputs: "**Staff, running costs and food.** In FY26 staff were 21% of sales, power, fuel and hotel running costs 11%, food and supplies 9% and other costs 24%. Staff costs are rising with more headcount, the new labour code and a deliberate cut in working hours to reduce attrition.",
        costEffect: "**Mostly insulated from commodity prices,** though power and fuel costs rose in Q1 FY27 with the Hormuz crisis. The margin depends on occupancy and rates, the share of high-paying foreign guests, the lower-margin catering business, new hotels such as Rajgarh still ramping up, and renovation write-offs. **What happened:** the operating margin rose from 30% in FY23 to 37% in FY24–FY25, then slipped to 35% in FY26. In Q1 FY27, a seasonally weak quarter, it fell to 25% from 28% (Screener basis): Rajgarh cost about ₹9cr, marketing about ₹4cr more, IT spending rose and ₹7.5cr of assets were written off in Mumbai renovations. Excluding Rajgarh, the company's own margin was about 30.6%.",
        competitors: [{ name: 'IHCL (Taj)', note: 'The largest Indian luxury chain, with far more hotels and a big asset-light pipeline.' }, { name: 'Leela Palaces', note: 'Brookfield-controlled luxury rival with fewer hotels but faster growth.' }, { name: 'Global luxury brands', note: 'JW Marriott, Ritz-Carlton, Hyatt and others, often in hotels owned by Indian developers such as Chalet and Juniper.' }],
        position: "**One of India's two leading luxury hotel brands**, with a clear price premium over its local rivals, but much smaller than IHCL.",
        money: "Screener shows **₹1,338cr of net cash** at March; the company gives surplus funds of ₹1,368cr at June. Operating cash flow was ₹183cr in Q1 FY27, of which ₹148cr went on capex and projects; management says its cash will fund 3–4 years of growth without borrowing. The Wildflower Hall property at Mashobra, on which it took a ₹110cr one-off hit a year ago, is up for auction (qualifying bids were due on 10 September); EIH would not say whether it has bid. It does not disclose management fees. Promoters hold **32.9%**, unchanged since 2023, but the family is in a Delhi High Court dispute over the late P.R.S. Oberoi's estate, which has restrained transfers of his shares; the Oberoi brand itself belongs to a promoter company, to which EIH paid ₹22.7cr of rent in FY26. Reliance (18.8%) and ITC (16.1%) are large outside holders.",
        watch: ["Whether foreign guests return in the October–March season.", "Restart of work on the Oberoi Grand Kolkata and progress at Hebbal.", "The Wildflower Hall auction outcome."],
        charts: hotelsCharts['EIH'],
    },
    {
        company: 'Juniper Hotels',
        inShort: ["**Juniper owns large luxury hotels run by Hyatt**, including Grand Hyatt Mumbai, Andaz Delhi at Aerocity and Hyatt Regency Ahmedabad (about 1,900 rooms open, 2,133 once the 238-key Westin Bengaluru opens in October 2026), and now targets about 3,900 keys by FY31.", "**Good:** FY26 revenue rose 11% to ₹1,048cr, the margin rose 4 points to 42% (company figures) and it won a cheap plot near Delhi airport for a 500-key hotel. **Watch:** the room target was cut from about 4,000 and then re-set to about 3,900 by FY31, the Bengaluru opening slipped three times, 60.6% of institutional votes opposed re-appointing its chairman at the August AGM, and it will not say when or whether promoter-group hotels will be folded in.", "**Verdict: wait.** Good assets, rising margins and a price that fits, but I want the governance vote answered, the new hotels delivered and clarity on the promoter-group hotels."],
        tagline: "An owner-developer of big luxury hotels in Mumbai, Delhi, Ahmedabad and the North-East, mostly run by Hyatt (also a shareholder), with a pipeline in Bangalore and Delhi.",
        revenue: '₹1,048cr (FY26, consolidated)',
        products: [
            { name: 'Grand Hyatt Mumbai', text: "Its flagship: a very large hotel with big event spaces, including a converted 'Grand Showroom' venue that earned ₹28cr in FY26 with 25–30% more upside expected. It owns two plots next door; one has about 80,000 sq ft of office potential, with construction targeted before the end of the year." },
            { name: 'Andaz Delhi (Aerocity)', text: "A luxury hotel next to Delhi airport in a micro-market running at 82–85% occupancy. A hotel of about 550 keys is planned on a 2.5-acre plot in nearby Dwarka for FY31, taking it to over 1,000 keys there." },
            { name: 'Ahmedabad and the North-East', text: "The 270-room Hyatt Regency Ahmedabad raised room rates 21% in Q4 FY26 after adding a second ballroom. A 277-key Guwahati hotel and a 106-key Kaziranga resort are planned for FY30–FY31." },
            { name: 'Westin Bengaluru', text: "238 keys opening in October 2026, after three delays, under Marriott's Westin brand, with 266 more to follow in a second phase. Management expects about ₹30cr of revenue in the first year and about ₹120cr once mature, at a margin above 40%." },
            { name: 'Rental income', text: "Leases and partner revenues within its complexes earned ₹43cr in Q4 FY26, up 83% and about 1.9 times its interest cost." },
        ],
        revenueText: "FY26 revenue was **₹1,048cr, up 11%**, driven by a 9% rise in the average room rate; occupancy was 75%. In Q4 FY26 the average rate was ₹13,457 (up 8%) at 81% occupancy, and **food and drink was 28% of revenue**, over half of it from events. Foreign guests (mostly airline crew) are roughly 25–30% of demand. Q1 FY27 filed sales were ₹250cr, up 13%.",
        mixes: [
            { caption: 'Revenue by type, Q4 FY26 (company call)', parts: [{ label: 'Rooms, rentals and other', share: 72 }, { label: 'Food and drink', share: 28 }] },
        ],
        customers: ["**Domestic business travellers and companies** in Mumbai, Delhi and Ahmedabad, its main source of demand.", "**Airline crew and foreign travellers**, about 25–30% of demand, mainly at the Delhi and Mumbai hotels.", "**Event and wedding organisers**: events are over half of food and drink revenue, mostly at Grand Hyatt Mumbai."],
        difficulty: { level: 'Very high', text: "Big-box luxury hotels near India's largest airports need scarce land, heavy capital and years of approvals, and openings often slip. Juniper won its Dwarka plot for about ₹9.75cr upfront plus a yearly licence fee, far below what rivals paid nearby." },
        moat: "Very large hotels on prime sites near India's busiest airports and business districts are hard to copy, and Hyatt's brand and booking network fill them. The weakness is concentration in a few big assets and a management team the market does not yet trust on timelines.",
        salesDrivers: ["**Premium demand outpacing supply**: management expects luxury demand to grow over 10% a year against 5–6.5% supply growth in Delhi and Bangalore.", "**Room rates**: it sees headroom of ₹2,000 or more a night at Grand Hyatt Mumbai, where occupancy is about 76%.", "**Events and food**: large ballrooms and the Grand Showroom drive high-margin banquet revenue.", "**New hotels**: Westin Bengaluru, Bengaluru phase 2, Kaziranga, Guwahati and Dwarka add over 1,400 keys.", "**Geopolitics and airlines**: April 2026 started softly as the West Asia conflict disrupted travel; management expected H1 FY27 growth below double digits."],
        inputs: "**Staff and hotel running costs.** In FY26 power, fuel and hotel running costs were 32% of sales, staff 18% and other costs 10%; the filing does not show food separately. Renewable power rose to 33% of its electricity use, cutting heat, light and power costs 13% in Q4 FY26.",
        costEffect: "**Mostly insulated from commodity prices.** Food and consumable costs have been stable. The margin moves with room rates, event business, energy costs and new hotels ramping up; a ₹23cr back-dated Delhi property-tax payment was booked in Q4 FY26. **What happened:** the operating margin fell from 41% in FY23 to 36% in FY25, then recovered to 40% in FY26 (company: 42%) as rates rose and costs were held, meeting management's target of over 40%. In Q1 FY27, a seasonally weak quarter, it was 35% against 36% a year earlier.",
        competitors: [{ name: 'IHCL, EIH and Leela', note: 'Established luxury operators in Mumbai and Delhi.' }, { name: 'Chalet and Samhi', note: 'Other owners of large branded hotels; Chalet competes near Mumbai airport.' }, { name: 'ITC and new Aerocity supply', note: 'ITC is building near Yashobhoomi, about five years out; management says demand will outpace it.' }],
        position: "**One of India's largest owners of big-box luxury hotels**, concentrated in Mumbai, Delhi and Ahmedabad and closely tied to Hyatt.",
        money: "Screener shows **₹1,109cr of net debt** (including leases), about 2.6 times a year's operating profit. The company put gross debt at ₹742cr and net debt at ₹625cr at March 2026 (1.4 times EBITDA) after repaying ₹267cr of foreign-currency loans and ₹108cr of bank debt. Its August Investor Day raised planned capex to about ₹1,930cr to FY31 (about ₹300cr this year and ₹700–750cr next), plus ₹248cr in cash for the 287-room Novotel Imagicaa at Khopoli (a binding agreement with Imagicaaworld was signed on 5 October 2026), with debt peaking below 2.6 times EBITDA. Past tax losses mean little cash tax for now. On the promoter-group hotels it has a right of first offer on, management says any deal would be share-based and put to shareholders, but gives no details or timing. Promoters hold **77.5%**, unchanged since March 2024; at the August 2026 AGM, 60.6% of institutional votes opposed re-appointing chairman Arun Saraf (paid 409 times the median employee) and 66.1% opposed loans to related companies, and both passed on the promoters' votes.",
        watch: ["Westin Bengaluru opening and filling up.", "Any move on the promoter-group hotels, and any loans to related companies after 66.1% of institutional votes opposed them.", "Capex and debt as Dwarka and Bengaluru phase 2 start."],
        charts: hotelsCharts['Juniper Hotels'],
    },
    {
        company: 'Chalet Hotels',
        inShort: ["**Chalet owns large, mostly Marriott-run hotels in Mumbai, Bangalore, Hyderabad and Pune, plus office towers built beside them**, and is adding its own Athiva resort brand and a Taj hotel at Delhi airport.", "**Good:** revenue excluding flats up 10% and margin up to 46.7% in Q1 FY27; office rent (₹29cr a month) now covers all its interest. **Watch:** reported revenue fell 43% on a one-off base, Mumbai hotels lost guests during building work at Powai and Vashi, ₹3,000cr of capex is planned over FY27–FY29, promoters have pledged 31.9% of their shares, and the auditor flags an unprovided land premium at Vashi.", "**Verdict: follow.** A well-run owner with a valuable office business, but the price needs more than the ~15% growth I expect while flat sales end and the building plan pays off."],
        tagline: "An owner and developer of large branded hotels (mostly Marriott) and adjoining office space in India's big cities, part of the K Raheja Corp group.",
        revenue: '₹2,770cr (FY26, consolidated, including flat sales)',
        products: [
            { name: 'City hotels', text: "Large business hotels such as JW Marriott Sahar near Mumbai airport, the Westin and a second hotel at Powai, Vashi (just renovated for ₹93cr and re-branded from Four Points to Athiva), hotels in Bangalore, Pune and Westin Hyderabad Mindspace. The Mumbai region is about 43% of hotel revenue." },
            { name: 'Resorts', text: "Westin Himalayas at Rishikesh, Marriott Aravalli and its own-brand Athiva Khandala (formerly The Dukes Retreat), with Udaipur and South Goa to come. Resort RevPAR rose 19% in Q1 FY27 at about 51% occupancy; it wants about 20% of the portfolio in leisure." },
            { name: 'Office rentals', text: "0.9 million sq ft at Powai (Cignus 1, over 90% let) and space in Bangalore, 91% committed overall, earning ₹29cr a month in rent at an 85% margin. Another 0.9 million sq ft at Powai (Cignus 2) should be substantially complete in FY27." },
            { name: 'New hotels and flats', text: "A Taj hotel at Delhi airport (at least 70 rooms in Q4 FY27, the rest in Q1 FY28) and projects at Mindspace Hyderabad and Airoli. The remaining 168 flats at its Koramangala, Bangalore housing project are handed over in FY27." },
        ],
        revenueText: "Excluding flats, Q1 FY27 revenue was **₹514cr, up 10%**: hotels ₹418.5cr (up 9%), offices ₹86.5cr (up 18%) and flats ₹7.3cr. **Reported revenue fell 43%** only because Q1 FY26 included the one-time booking of most of the Koramangala flats as they were handed over. Hotel RevPAR rose 6.5%, all from an 8.5% rise in the average room rate, while occupancy dipped because of building work. The FY26 revenue figure also includes flat sales.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company call)', parts: [{ label: 'Hotels', share: 82 }, { label: 'Office rentals', share: 17 }, { label: 'Flats', share: 1 }] },
        ],
        customers: ["**Corporate travellers and airline crew** at its big-city hotels, including a renewed arrangement with Deloitte at Westin Hyderabad.", "**Weddings, conferences and social events**: Powai's banquet space is being tripled to become one of the largest in the Mumbai region.", "**Office tenants** at Powai and Bangalore, and **leisure guests** at its resorts."],
        difficulty: { level: 'High', text: "Large mixed hotel-and-office complexes need land in crowded cities, construction skill and years of approvals; its Udaipur expansion needs army cantonment approval and South Goa has been hard to start. Group real-estate expertise keeps its building costs low." },
        moat: "Large hotels on scarce city sites, next to its own office towers, give it captive demand, and office rent smooths the hotel cycle. The weakness is dependence on outside brands and little protection when foreign business travel drops.",
        salesDrivers: ["**Big-city room rates**: rates rose 8.5% in Q1 FY27; ICRA expects premium-hotel rates of ₹8,600–8,800 in FY27, up from ₹8,200–8,500.", "**Mumbai recovery**: Powai's entrance and banquet link should reopen by the end of Q2 FY27 and Vashi relaunches, which management says will restore occupancy in H2.", "**Foreign business travel**: Bangalore and Hyderabad depend on it, and it stayed flat because of the West Asia conflict.", "**Office rent**: monthly rent should rise to ₹30–32cr during FY27 and step up from FY28 when Cignus 2 is let.", "**New hotels**: management wants to add 500 or more keys a year, taking the hotel portfolio above 5,000 keys."],
        inputs: "**Staff and hotel running costs.** In FY26 food, drink and supplies were 18% of sales (a figure probably swollen by the building cost of flats handed over that year), power, fuel and hotel running costs 15%, staff 10% and other costs 14%. Management says the booking commissions it pays through Marriott and Accor are at the bottom end of the market.",
        costEffect: "**Mostly insulated from commodity prices.** Hotel margins depend on rates, occupancy, resorts still ramping up and renovation disruption; the office business runs at an 85% margin and lifts the group figure. **What happened:** the operating margin rose from 40% in FY23 to 43% in FY25–FY26. In Q1 FY27 the margin excluding flats rose 2.3 points to 46.7%, and the hotel margin 0.9 points to 42.6%, as Westin Rishikesh and Athiva Khandala ramped up.",
        competitors: [{ name: 'IHCL, EIH and Leela', note: 'Strong own-brand luxury hotels in Mumbai and other big cities.' }, { name: 'Juniper and Samhi', note: "Other owners of large branded hotels; Juniper's Grand Hyatt competes for big Mumbai events." }, { name: 'New Mumbai supply', note: 'A Fairmont opened near JW Marriott Sahar; management says supply has been absorbed and little more is due for a year or two.' }],
        position: "**One of India's largest listed hotel owners by operating profit**, unusual in pairing hotels with office rentals.",
        money: "Screener shows **₹2,031cr of net debt** (including leases), about 1.9 times a year's operating profit. The company says about ₹1,091cr of its net debt is tied to projects not yet earning (Cignus 2 and the Delhi Taj), that office rent covers all its interest, and that its average borrowing cost is 7.4% with about ₹400cr of liquidity. Capex of about ₹3,000cr over FY27–FY29 is to be funded largely from its own cash flow. Promoters (the K Raheja Corp group) hold **67.3%**, down from 71.7% in September 2023 after new shares were issued, and **31.9% of the promoters' shares are pledged**. The auditor highlights the Vashi hotel's land, in court since 2014–15 (the Bombay High Court ordered demolition; the Supreme Court ordered status quo); CIDCO approved regularisation in February 2026 for a premium that is still unknown and not provided for.",
        watch: ["Mumbai occupancy after the Powai works finish.", "Office rent reaching ₹30–32cr a month.", "The Delhi Taj opening on time in Q4 FY27.", "The promoter pledge falling and the Vashi land premium being settled."],
        charts: hotelsCharts['Chalet Hotels'],
    },
    {
        company: 'Ventive Hospitality',
        inShort: ["**Ventive owns luxury hotels in Pune, Bangalore and Goa, five resorts in the Maldives and rent-earning office buildings**; it is backed by Blackstone and the Pune developer Panchshil.", "**Good:** India hotel revenue up 13% and RevPAR up about 20% in Q1 FY27, about 65% of Pune's luxury rooms, and net debt only 1.2 times EBITDA. **Bad:** diesel prices doubled in the Maldives, cutting that business's EBITDA 32%, Q1 profit included a ₹102cr one-off tax gain, and no full-year numbers were given this time.", "**Verdict: wait.** Good assets, but I want to see the Maldives margin recover and the new projects move before buying."],
        tagline: "A Blackstone and Panchshil-backed owner of luxury hotels in Pune, Bangalore and Goa, five Maldives resorts and office buildings let to companies.",
        revenue: '₹2,461cr (FY26, consolidated)',
        products: [
            { name: 'India hotels', text: "Luxury and upper-upscale hotels in Pune (including a JW Marriott and a convention centre), Bangalore (shut for renovation in the quarter) and the newly bought 104-key Hilton Goa. Revenue ₹203cr in Q1 FY27, up 13%, at about a 36% margin." },
            { name: 'Maldives resorts', text: "Conrad Rangali, Raaya by Atmosphere and three Anantara resorts (Dhigu, Veli and Naladhu), 515 keys in all. Revenue ₹217cr in Q1 FY27, up 5%, but EBITDA fell 32% to ₹32cr as fuel and related costs doubled to ₹38cr." },
            { name: 'Office rentals', text: "Office buildings let to companies, 98% committed; revenue ₹128cr in Q1 FY27 at an 87% margin." },
            { name: 'Pipeline', text: "Over 1,700 keys in 8 hotels due FY28–FY30 (AC by Marriott Bangalore, Marriott Varanasi, a Ritz-Carlton Reserve in Sri Lanka now due around FY30, Soho House Delhi), plus the new Sahyadri Hills estate near Alibaug: an 80-key Ritz-Carlton Reserve wellness resort and 33 residences for sale." },
        ],
        revenueText: "Q1 FY27 revenue including other income was **₹554cr, up 7%** (filed sales ₹543cr): India hotels ₹203cr, Maldives ₹217cr and offices ₹128cr. In India, occupancy rose to 67% and the average room rate about 8%, lifting RevPAR about 20%. Same-store revenue grew 10%. In the Maldives, war-related cancellations hit April but May and June recovered, and July arrivals recovered.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company call)', parts: [{ label: 'Maldives resorts', share: 39 }, { label: 'India hotels', share: 37 }, { label: 'Office rentals', share: 23 }] },
        ],
        customers: ["**Companies in Pune and Bangalore**: Pune has 15–20% of India's global capability centres, and IT, manufacturing and finance firms fill its hotels and conferences.", "**Wealthy foreign holidaymakers in the Maldives**, with China and Russia strong recently and Indians rising from 6% to about 9% of guests.", "**Wedding parties and office tenants** in Pune."],
        difficulty: { level: 'Very high', text: "Luxury hotels and island resorts need large capital and years of approvals; the Sri Lanka resort has been held up by environmental permits. Island resorts also depend on diesel generators and supply boats." },
        moat: "Owning about 65% of Pune's luxury rooms, with no new luxury supply announced for 4–5 years, gives it real pricing power. The Maldives resorts are hard to replicate but, as Q1 FY27 showed, exposed to fuel and travel shocks.",
        salesDrivers: ["**Pune office growth**: about 45 million sq ft of new offices due by 2030 on top of 95 million today; management expects this to add 7–8 points of occupancy.", "**Rates and occupancy together**: both rose in India in Q1 FY27; management sees occupancy settling in the high 70s.", "**Maldives season and fuel**: Q3–Q4 are the peak months and bookings look strong; management says the Q1 hit will be recovered then, and fuel was 26% below its peak by July.", "**Acquisitions and projects**: Hilton Goa (plus 50 keys), Sahyadri Hills (targeting a yield above 12% on cost) and the 1,700-key pipeline. The promoter group also offers 1,114 more keys (JW Marriott Navi Mumbai and three Moxy hotels)."],
        inputs: "**Power and fuel, staff and running costs.** In FY26 power, fuel and hotel running costs were 22% of sales, staff 15% and other costs 18%; the Maldives resorts run largely on diesel generators. A ₹60cr solar-and-battery plant for Pune (due Q4 FY27) should cut the Pune power bill by about 45%, and Maldives solar should save about $1.5m a year.",
        costEffect: "**Exposed to fuel prices in the Maldives, insulated elsewhere.** Diesel reached about 2.1 times pre-war levels in Q1 FY27, adding about ₹19cr of cost; in India the margin moves with occupancy and rates. **What happened:** the operating margin was 47% in FY25 (when the acquired businesses were only partly included) and 44% in FY26. In Q1 FY27 it fell to 35% from 41% (Screener; company 37%), almost entirely because of Maldives fuel; the India margin improved to about 36%. Adjusted for fuel and one-offs, management says EBITDA grew 5%.",
        competitors: [{ name: 'IHCL, Marriott and Hyatt hotels in Pune', note: 'Few luxury rivals, and management says no new luxury supply has been announced there.' }, { name: 'Other Maldives resorts', note: 'Many one-island resorts compete for the same global travellers.' }, { name: 'Chalet Hotels', note: 'Also pairs hotels with office rent; stronger in Mumbai than Pune.' }],
        position: "**The dominant luxury hotel owner in Pune**, with a sizeable Maldives resort business and a steady office-rent base.",
        money: "Screener shows **₹2,035cr of net debt** (including leases), about 1.9 times a year's operating profit. The company puts total debt at ₹2,095cr (₹1,329cr in India and $81m for the Maldives) and net debt at ₹1,514cr at June 2026, 1.2 times EBITDA, at 7.2% in India and 6.1% in dollars; it is rated AA. Sahyadri Hills cost about ₹281cr of equity (₹466cr including debt). Q1 FY27 profit of ₹124cr includes a ₹102cr one-off tax gain from switching to the lower tax rate. Promoters (Panchshil and Blackstone) hold **89.0%**, unchanged since listing in December 2024.",
        watch: ["Maldives margin in the October–March peak season.", "The Pune solar plant starting in Q4 FY27.", "Progress at Sahyadri Hills and the Sri Lanka resort."],
        charts: hotelsCharts['Ventive Hospitality'],
    },
    {
        company: 'Leela Palaces Hotels',
        inShort: ["**Leela runs top-rated luxury palace hotels** in Delhi, Bengaluru, Chennai, Udaipur and Jaipur plus a new Coorg resort, with about half its 5,257 keys (built and planned) owned and half managed for others; Brookfield controls it.", "**Good:** Q2 FY27 operating revenue up 33%, RevPAR up 30% (room rate ₹25,046, up 30%), operating EBITDA up 36% and management fees up 76%; after beating its FY27 guide in H1 it expects high-teens EBITDA growth in H2 too. **Watch:** return on capital is only about 9%, much of the growth depends on new projects and a Dubai stake, contingent liabilities are ₹554cr, and Brookfield has pledged most of its shares against a loan.", "**Verdict: wait.** The best operator here, and I expect ~18% earnings growth, but the price already assumes its FY30 EBITDA target of about ₹1,930cr is met."],
        tagline: "A Brookfield-controlled luxury hotel company that owns five Leela palaces and a Coorg resort, manages other Leela hotels, and is building palace, heritage and wildlife resorts.",
        revenue: '₹1,527cr (FY26, consolidated)',
        products: [
            { name: 'Owned palace hotels', text: "Leela Palaces in New Delhi, Bengaluru, Chennai, Udaipur and Jaipur. In Q1 FY27 occupancy of the owned hotels rose to 67.5% from 63.6% and the average room rate rose 10%; city hotels' RevPAR grew 14% and resorts' 24%." },
            { name: 'The Leela Coorg Forest Sanctuary', text: "An operating resort bought recently and re-branded on 8 July 2026; its room rate has nearly doubled and it broke even at operating level in the quarter. 19 more keys are planned." },
            { name: 'Management contracts', text: "About half its keys are in hotels owned by others that pay Leela a fee; fees reached ₹26.2cr in Q1 FY27, up 86%, helped by performance-linked terms. It also holds 25% of a Dubai resort, which it will take over and refurbish from 2027." },
            { name: 'Pipeline', text: "Over 1,000 keys being built: Bandhavgarh and Srinagar (late 2027), Agra, Ayodhya, Sikkim and Ranthambore (2028), a 30-key Tadoba wildlife resort (2030) and a Mumbai BKC hotel, plus managed Jaisalmer and serviced residences in Mumbai by the end of 2026." },
        ],
        revenueText: "Q2 FY27 operating revenue was **₹412cr, up 33%**: rooms ₹204cr (+39%), food and drink ₹146cr (+21%), management fees ₹28.9cr (+76%) and other services ₹33.3cr (+25%); 52% of H1 revenue came from outside rooms. Q1 FY27 operating revenue was ₹352cr, up 28%. **Rooms are under half of revenue**: food and drink was ₹132cr (38%, up 25%), with more than half of city-hotel restaurant revenue from non-resident diners, and management fees ₹26.2cr. Domestic room revenue at the five palaces rose 25%, while foreign room revenue recovered from a 10% fall in March to a 1% rise by June; the two are normally about 50-50. Direct bookings were 64% of the total, with its own website at 16%, double a year ago.",
        mixes: [
            { caption: 'Revenue by type, Q1 FY27 (company call)', parts: [{ label: 'Rooms and other services', share: 55 }, { label: 'Food and drink', share: 38 }, { label: 'Management fees', share: 7 }] },
        ],
        customers: ["**Wealthy Indian families and leisure travellers**, increasingly staying longer at resorts within driving distance of big cities.", "**Heads of state, delegations and senior executives** in Delhi, Bengaluru and Chennai; the BRICS summit in September was expected to fill Delhi.", "**Foreign luxury travellers**, normally about half of room revenue, and **hotel owners** who pay it to run their properties."],
        difficulty: { level: 'Very high', text: "Palace-scale luxury hotels need prime land, very high capital per room and consistently top-end service (a Net Promoter Score of 86, 12 points above the Asia-Pacific luxury average). Heritage and wildlife sites add approvals and restoration work: Ranthambore is a 400-year-old fort." },
        moat: "Irreplaceable palaces in under-supplied luxury markets and a globally ranked brand (second in the Travel and Leisure 2026 awards) let it earn 1.4 times its markets' revenue per room. The weakness is a small portfolio (15 operating hotels) and high capital cost per room, which keeps returns modest.",
        salesDrivers: ["**Luxury undersupply**: luxury is only 12% of India's hotel room nights but about 24% of room revenue; ICRA expects premium-hotel rates of ₹8,600–8,800 in FY27, up from ₹8,200–8,500.", "**Foreign guests returning** in the October–March peak, plus big events such as BRICS in Delhi.", "**Domestic leisure**: kids' clubs, new restaurants and spas are drawing longer multi-generation family stays; resort occupancy should rise from about 60% to the mid-60s.", "**New hotels and fees**: five new deals in five quarters, with management fees rising as managed hotels open.", "**Direct bookings**, which cost about a third of online-agent commissions."],
        inputs: "**Staff and hotel running costs.** In FY26 staff were 20% of sales, power, fuel and hotel running costs 15% and other costs 16%; the filing does not show food separately. About two-thirds of its electricity is green (target 75%), and it has renegotiated central purchasing and maintenance contracts.",
        costEffect: "**Mostly insulated from commodity prices.** The margin moves with occupancy, rates, food and drink volumes and the seasons (Q1 is the weakest quarter). **What happened:** the operating margin rose from 44% in FY23 to 48% in FY26, and management says it is close to 50% across a full year. In Q1 FY27 its own operating EBITDA margin was a record 41% for a first quarter, up 3.8 points, with over 60% of extra revenue reaching profit excluding Coorg.",
        competitors: [{ name: 'IHCL (Taj) and EIH (Oberoi)', note: 'Bigger Indian luxury chains; Oberoi is closest in price and reputation.' }, { name: 'Global luxury brands', note: 'Ritz-Carlton, Four Seasons, JW Marriott and others, often in hotels owned by Indian developers.' }, { name: 'Wildlife and heritage resorts', note: 'Established safari lodges and heritage hotels in Bandhavgarh, Ranthambore and Tadoba.' }],
        position: "**A pure luxury hotel company**, smaller than IHCL and EIH, earning about 1.4 times its markets' revenue per room.",
        money: "Screener shows **₹879cr of net debt** at March 2026. The company put net debt at ₹1,215cr at September 2026 (1.4 times a year's EBITDA, from ₹1,332cr and 1.6 times in June), and is comfortable averaging up to 2.5 times to fund projects and deals. Its five owned hotels being built cost about ₹1,432cr, of which ₹150cr was spent by October 2026, ₹450cr is due by March 2027 and ₹600cr in FY28. Its IPO cut debt sharply, which is why Q1 FY27 profit rose five-fold to ₹48.8cr, after a ₹15.6cr share of losses from the Dubai joint venture. It targets about ₹1,930cr of EBITDA by FY30, against ₹764cr over the last year. Its FY26 accounts show ₹554cr of contingent liabilities, including a disputed Delhi floor-area charge. Screener's return on capital is about 9%; management expects the mid-to-high teens once new hotels mature. Promoters (Brookfield) hold **75.9%**, unchanged since listing in 2025.",
        watch: ["High-teens EBITDA growth in H2 FY27 on a strong base, as guided on 14 Oct 2026.", "Jaisalmer and the Mumbai residences in FY27; Srinagar and Bandhavgarh in late 2027.", "The shareholder vote on buying the full BKC building rights with Brookfield.", "The Dubai take-over, refurbishment and residence sales.", "Brookfield's share pledge and its sales toward a 25% public float."],
        charts: hotelsCharts['Leela Palaces Hotels'],
    },
    {
        company: 'Viceroy Hotels',
        inShort: ["**Viceroy owns three Marriott-run properties in Hyderabad**: the Hyderabad Marriott with its convention centre, the Courtyard next door (about 500 rooms together) and Marriott Executive Apartments in Gachibowli, bought in December 2025. Its current owners took it over out of insolvency.", "**Good:** Q1 FY27 revenue up 77%, RevPAR up 25%, the renovated Courtyard 84% full, and management targets a margin above 30% this year and 40% later. **Bad:** a small, single-city company; room rates fell 12%, the convention centre is shut until about December, debt rose to ₹259cr to buy the apartments from a sitting director's family, and its previous auditor resigned with no reason given.", "**Verdict: wait.** The turnaround is working and the rights issue is done, but I want to see the renovated Marriott reopen and margins pass 30% before buying."],
        tagline: "A Hyderabad-only hotel owner with three Marriott-branded properties run by Marriott, recovering after insolvency and planning a new Courtyard in Madhapur.",
        revenue: '₹143cr (FY26, consolidated)',
        products: [
            { name: 'Hyderabad Marriott and convention centre', text: "A large hotel with big convention space. Its phase 2 renovation took the convention centre offline from April to about December 2026, costing about ₹10cr of business. Q1 occupancy was 72% and RevPAR rose 5.7%." },
            { name: 'Courtyard by Marriott', text: "168 keys, fully renovated in phase 1 for ₹50cr; occupancy jumped to 84% from 38% and RevPAR nearly doubled to ₹5,006. Management expects its revenue to rise from about ₹30cr a year to over ₹50cr." },
            { name: 'Marriott Executive Apartments, Gachibowli', text: "Long-stay serviced apartments for corporate staff in the financial district; Q1 occupancy 94%, average rate ₹13,342 (up 7.5%) and RevPAR up 21%." },
            { name: 'New Courtyard, Madhapur', text: "A planned 180–200-key hotel costing ₹120–130cr, with construction from about Q4 FY27 once Telangana approvals come and opening in FY29–FY30." },
        ],
        revenueText: "Q1 FY27 revenue was **₹44.9cr, up 77%**, helped by the apartments purchase. At the Marriott and Courtyard, room revenue was ₹19.6cr (up 39%) and food and drink ₹11.8cr (up 15%, held back by the closed convention centre); the apartments added ₹8.5cr of rooms and ₹3.3cr of food. Combined occupancy rose to 76% from 54%, but the average room rate fell 12% to ₹6,107 as it took cheaper airline and army groups; RevPAR still rose 25% to ₹4,657.",
        mixes: [
            { caption: 'Revenue by type, Q1 FY27 (company call)', parts: [{ label: 'Rooms', share: 65 }, { label: 'Food, drink and banquets', share: 35 }] },
        ],
        customers: ["**Technology, pharma and finance companies** in Hyderabad, for business travel and long stays at the apartments, where foreign guests are 20–40% depending on the season.", "**Weddings, conferences and social events** at the convention centre, its highest-margin business once it reopens.", "**Airlines and the army**: bulk group business used to fill rooms when events are down."],
        difficulty: { level: 'High', text: "Owning hotels needs capital and renovation skill, and turning them round while they stay open means losing banquet business for months. New hotels need state approvals, delayed recently by a change in Telangana's tourism policy." },
        moat: "A large hotel-and-convention complex in central Hyderabad and a long-stay apartment product with little direct competition give it pricing power in a growing city. The weakness is total dependence on one city and on Marriott's brand.",
        salesDrivers: ["**Hyderabad's corporate growth**: consultants tell management that upscale room rates in Hyderabad could rise 10–12% a year.", "**Convention centre reopening** around December 2026, bringing back weddings and conferences at higher rates.", "**Courtyard pricing**: management aims to lift its rate from about ₹6,800 to ₹8,500 over two years (perhaps ₹9,000–9,500 by FY28) while keeping occupancy at 80–85%.", "**New hotels**: the Madhapur Courtyard, and running or distressed hotels it screens every week."],
        inputs: "**Staff, running costs and Marriott's fees.** In FY26 power, fuel and hotel running costs were 31% of sales, staff 21% and other costs 22%; the filing does not show food separately. Marriott takes about 1–1.5% of revenue plus about 7% of gross operating profit. Rooms earn gross margins of 80–85%, food and banquets 45–50%.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on occupancy and rates, the amount of banquet business and renovation disruption. **What happened:** the operating margin rose from 13% in FY24 to 24% in FY25 and 27% in FY26 as renovated rooms came back. In Q1 FY27 it was 26% against 15% a year earlier, despite the closed convention centre. Management targets above 30% for FY27 and 40% in the long run.",
        competitors: [{ name: 'Other Hyderabad five-star hotels', note: 'IHCL, ITC, Hyatt and others compete for corporate and event business; some are converting rooms to long-stay, but that supply is some way off.' }, { name: 'Samhi and Brigade', note: 'Other listed owners with branded hotels in or planned for Hyderabad.' }],
        position: "**A small, single-city hotel owner** in Hyderabad, growing through renovation and acquisitions.",
        money: "Screener shows **₹244cr of net debt**; the company put consolidated gross debt at ₹259cr and net debt at ₹220cr at June 2026, at about 8.7%, mostly the ₹200cr borrowed to buy the apartments and repaid at about ₹39–40cr a year. Interest rose to ₹5.4cr in Q1 FY27 from ₹1cr, which is why profit was only ₹1.4cr. A ₹105.8cr rights issue (92.03 lakh shares at ₹115, about 9% below the market price, a 12% dilution) was allotted on 15 September 2026 to non-promoter shareholders, to repay debt and bring promoters under SEBI's 75% ceiling. The apartments were bought for ₹206cr from a sitting director and his relatives (approved at an EGM), and the previous auditor resigned in August 2025 without a stated reason. Promoters hold **74.0%** (September 2026), down from 84.1% in June 2026 and 95% in December 2023; none of their shares is pledged. Dividends will be considered after the renovation.",
        watch: ["The convention centre reopening by December 2026.", "The margin crossing 30% for FY27.", "Debt after the rights money is applied, and Madhapur approvals.", "No further purchases from directors or their families."],
        charts: hotelsCharts['Viceroy Hotels'],
    },
    {
        company: 'Royal Orchid Hotels',
        inShort: ["**Royal Orchid runs about 7,700 rooms in mid-priced hotels across India** under the Regenta, Royal Orchid and new Iconiqa brands, mostly managing or franchising them for other owners, plus some it owns, leases or co-owns.", "**Good:** Q1 FY27 revenue up 36% and more than 50 hotels due in 12–24 months, taking it past 11,000 rooms. **Bad:** profit fell to ₹6.8cr from ₹11.2cr as new leased hotels, especially Iconiqa Mumbai, add rent-related interest and depreciation, and management gives no guidance.", "**Verdict: wait (turnaround).** Rooms are growing but profit is not, and the audit, SEBI and rating issues need resolving; I want to see Iconiqa and the leased hotels start earning."],
        tagline: "A mid-market hotel company that mainly earns fees for managing and franchising other owners' hotels, now also leasing larger hotels such as Iconiqa Mumbai.",
        revenue: '₹384cr (FY26, consolidated)',
        products: [
            { name: 'Owned, leased and joint-venture hotels', text: "Royal Orchid hotels (about 1,000 five-star-category keys, being upgraded) and leased hotels such as Iconiqa near Mumbai airport, opened in November 2025. These bring most of the revenue; Q1 FY27 occupancy was 70% and the average room rate ₹6,233, up from ₹5,488." },
            { name: 'Managed and franchised hotels', text: "Regenta and Z by Regenta hotels owned by others, which pay a share of revenue and operating profit. Q1 occupancy was 60.8% and the rate ₹4,300 (from ₹4,031); fee income grew about 14% in FY26." },
            { name: 'Iconiqa', text: "Its new upper-upscale brand, launched with the leased Mumbai airport hotel and also used for the Laxmi Vilas Palace in Vadodara. Management says Iconiqa Mumbai breaks even at about ₹85cr of annual revenue and is aiming for ₹100cr." },
            { name: 'Pipeline', text: "More than 50 hotels signed, nearly all managed or franchised (3–4 on revenue share), with new signings of 80–120 keys against under 50 before, plus a Hampton by Hilton franchise tie-up." },
        ],
        revenueText: "Q1 FY27 revenue was **₹107cr, up 36%**, driven by Iconiqa. The owned, leased and joint-venture hotels bring most of the revenue; the company does not split revenue by segment on the call, and the 237 managed keys added in the quarter contribute only small fees. About 20% of its rooms produce 80% of revenue.",
        customers: ["**Domestic business travellers and companies** in big and smaller cities, its core market.", "**Leisure travellers**, whose demand held up in Q1 FY27 while airport business hotels were hit by the war.", "**Hotel owners and developers** who sign management or franchise contracts; larger developers are now approaching it."],
        difficulty: { level: 'Medium', text: "Managing hotels for others needs little capital but is crowded and depends on brand strength. Leasing larger hotels is harder: rent is fixed while revenue swings, and a new hotel takes about a year to find its market." },
        moat: "Decades of relationships with smaller hotel owners and a low-cost management model give it a steady pipeline. But owners can switch brands easily, and big chains are pushing into the mid-market.",
        salesDrivers: ["**Opening signed hotels**: more than 50 hotels in 12–24 months; management wants to double fee income as fast as possible but gives no date.", "**Iconiqa Mumbai ramp-up**: occupancy was 79% in April, about 60% in May and 70% in June; it opened alongside about 1,000 new rooms nearby, including a 450-key Fairmont and a 170-key Hilton Garden Inn.", "**Premiumisation**: upgrading its five-star-category hotels and signing larger, upper-upscale hotels.", "**Domestic travel demand**, the main driver for owned and managed hotels alike."],
        inputs: "**Staff and other operating costs.** In FY26 staff were 27% of sales, other costs 35%, food and supplies 9% and power, fuel and running costs 6%. Staff costs are rising with the new wage code, increments and new leases; management expects them to settle at 22–23% of revenue over a full year. The GST change on rooms under ₹7,500 cost ₹2.5cr in Q1 FY27.",
        costEffect: "**Mostly insulated from commodity prices.** What moves profit is occupancy and rates, the ramp-up of leased hotels (rent is fixed, revenue is not) and lease accounting (Ind-AS), which front-loads interest and depreciation. **What happened:** the operating margin fell from 31% in FY23 to 23% in FY25–FY26 as new hotels and costs came in; in Q1 FY27 it was 24% against 25% (Screener; the company's 30.7% includes other income). Pre-tax profit fell from ₹59cr in FY25 to ₹38cr in FY26 as interest and depreciation roughly doubled.",
        competitors: [{ name: 'Lemon Tree', note: 'Larger mid-market chain with a much bigger managed pipeline.' }, { name: 'IHCL (Ginger) and global chains', note: 'Big brands pushing into mid-priced hotels.' }, { name: 'New Mumbai airport hotels', note: 'Fairmont and Hilton Garden Inn opened near Iconiqa at the same time.' }],
        position: "**A mid-sized, mostly fee-based hotel chain**, smaller than Lemon Tree, now taking on more balance-sheet risk through leases.",
        money: "Screener shows **₹524cr of net debt**, up sharply as borrowings rose from ₹221cr to ₹641cr in FY26; most of the rise likely reflects long-term lease payments for new hotels such as Iconiqa, which are counted as borrowings under lease accounting. The company reports profit with and without lease accounting: ₹9.8cr in Q1 FY27 without it, against ₹12cr a year earlier. Management puts return on capital at 17–18% and targets over 20%, but gives no revenue or profit guidance and says its Vision 2030 has no fee target. Promoters (the Baljee family) hold **64.1%**, up slightly from 63.6% in September 2023. **The FY26 audit opinion is qualified** over an associate caught in a legal fight with its co-owner; a SEBI order (stayed on appeal) found that associate was wrongly classified; and CARE rates the company C, “issuer not cooperating”, because it stopped sharing information in 2024.",
        watch: ["Iconiqa Mumbai reaching break-even (about ₹85cr of annual revenue).", "Openings from the 50-hotel pipeline.", "Whether profit starts to grow with revenue."],
        charts: hotelsCharts['Royal Orchid Hotels'],
    },
    {
        company: 'Brigade Hotel Ven.',
        inShort: ["**Brigade Hotel Ventures owns nine hotels (about 1,600 keys) in Bangalore, Chennai, Kochi and GIFT City**, run by Marriott, Accor and IHG; it was separated from the Brigade property group and listed in 2025.", "**Good:** IPO money repaid its debt, leaving ₹108cr of net cash, and room rates rose 7% in Q1 FY27. **Bad:** filed sales grew only 1–2% in the last two quarters as ₹14cr of events were cancelled, its COO has left (a new CEO started in August), its auditor flags an unprovided ₹28.7cr property-tax dispute, and it plans ₹3,600cr of capex, 60% of it borrowed.", "**Verdict: wait.** Clean balance sheet and good hotels, but I want growth to return and the building plan to show progress."],
        tagline: "The Brigade group's hotel-owning company: upper-upscale and mid-scale hotels in South India and GIFT City run by global brands, with a plan to double its rooms by FY31.",
        revenue: '₹525cr (FY26, consolidated)',
        products: [
            { name: 'Bangalore hotels', text: "Its core market, including Sheraton Grand at Brigade Gateway (about half its revenue from food and banquets) and an Ibis Styles now in its second year at occupancy in the 70s. Bangalore RevPAR rose 10% in Q1 FY27, mostly from higher occupancy." },
            { name: 'Other hotels', text: "Holiday Inn Chennai OMR, Courtyard by Marriott Kochi Info Park (re-branded from Four Points this quarter; rate up to ₹4,650 from ₹4,200 but occupancy dipped as airline-crew business was lost) and Grand Mercure GIFT City. Five of its nine hotels run above 80% occupancy." },
            { name: 'Pipeline', text: "1,700 new keys by FY31 under brands including Grand Hyatt, InterContinental, JW Marriott and Ritz-Carlton, starting with a 45-key Courtyard at the Chennai World Trade Centre in October 2026 (starting rate about ₹9,000). Luxury and upper-upscale should rise from 14% of the mix to 38%." },
            { name: 'Food and banquets', text: "About 32% of revenue; conferences and events (MICE) are roughly 15–18% of its business." },
        ],
        revenueText: "Q1 FY27 total income was **₹131cr, up 5%** (filed sales ₹127cr, up 2%). About ₹14cr of business, roughly 10% of revenue, was lost to cancelled or postponed events, around 60% of it food and banquets. The average room rate rose 7% to ₹7,241 and occupancy was 75.7%, lifting RevPAR 9% to ₹5,479. **Food and drink is about 32% of revenue**; foreign guests fell to about 30% of arrivals from 40%. Management still aims for mid-teens like-for-like growth in FY27.",
        mixes: [
            { caption: 'Revenue by type, Q1 FY27 (company call)', parts: [{ label: 'Rooms and other', share: 68 }, { label: 'Food and banquets', share: 32 }] },
        ],
        customers: ["**Corporate travellers** in Bangalore's and Chennai's technology districts, now largely on locally negotiated rates.", "**Conferences, weddings and social events**, especially at Sheraton Grand, plus weekend staycation guests.", "**Foreign business travellers and airline crew**, now about 30% of arrivals."],
        difficulty: { level: 'High', text: "Building luxury hotels takes land, capital and approvals: the Grand Hyatt project is waiting on approvals and several others are still in design. Being part of a property developer helps it get sites inside townships and World Trade Centres." },
        moat: "Hotels inside its parent's office and township projects give captive demand in markets with little new supply. The weakness is concentration in Bangalore and dependence on outside brands.",
        salesDrivers: ["**Bangalore corporate demand** and little new supply in its micro-markets.", "**Room rates above ₹7,500**: it is pushing every hotel's average rate above ₹7,500 to escape the GST cost, which took 1.6 points off the Q1 margin.", "**Events returning**: management says July to September bookings are buoyant, and the 2027 Bangalore air show helps Q4 FY27.", "**New hotels and an acquisition**: ₹500cr of capex in FY27 and a possible acquisition with IPO money this year."],
        inputs: "**Staff and hotel running costs.** In FY26 power, fuel and hotel running costs were 25% of sales, staff 20% and other costs 22%; the filing does not show food separately. Renewables supply 61% of its energy, and some hotels over 90%.",
        costEffect: "**Mostly insulated from commodity prices,** though energy and fuel costs stayed high during the West Asia conflict. The margin moves with occupancy, rates and high-margin banquets. **What happened:** the operating margin rose from 28% in FY23 to 36% in FY24, then eased to 35% in FY25 and 33% in FY26; it was 33% in Q1 FY27, flat on a year earlier (company: 34.8%, after a 1.6-point GST hit). Profit more than doubled to ₹17cr because interest costs fell by more than half to ₹8.7cr after the IPO.",
        competitors: [{ name: 'Chalet, Samhi and Ventive', note: 'Other owners of branded business hotels in Bangalore and South India.' }, { name: 'IHCL, ITC and Leela', note: 'Strong own brands in the same luxury markets.' }, { name: 'New branded supply', note: "India's branded pipeline is about 114,000 rooms, though management sees little new supply in its own micro-markets." }],
        position: "**A mid-sized South Indian hotel owner**, strongest in Bangalore, planning to double in size by FY31.",
        money: "Screener shows **₹58cr of net debt** at March 2026; the company says it had **₹108cr of net cash** at June 2026 after using ₹468.1cr of IPO money to repay debt. The expansion needs ₹3,600cr (₹400cr spent by FY26, ₹500cr in FY27), funded roughly 60% by borrowing and 40% from its own cash, so debt will rise again. COO Manoj Agarwal resigned; Vinay Gupta, once general manager of its first hotel, became CEO on 24 August 2026. The auditor highlights a property-tax dispute, of which ₹28.7cr is not provided for, and an income-tax survey in December 2025. Shareholders approved up to ₹290cr of further dealings with the parent in June 2026. Promoters (the Brigade group) hold **74.1%**, unchanged since listing.",
        watch: ["A return to mid-teens revenue growth as events come back.", "The Chennai WTC Courtyard opening in October 2026.", "Debt as the ₹3,600cr programme speeds up.", "Land and lease deals with the Brigade parent, and the property-tax dispute."],
        charts: hotelsCharts['Brigade Hotel Ven.'],
    },
    {
        company: 'Mahindra Holi.&Resor',
        inShort: ["**Mahindra Holidays sells Club Mahindra holiday memberships** (vacation ownership, or timeshare: families pay upfront for the right to stay at its resorts for many years) to about 3 lakh Indian families, and owns Holiday Club Resorts in Finland.", "**Good:** the average membership price rose 73% with its new Keystone product, resorts were 86.7% full and non-member bookings grew 30%. **Bad:** India (standalone) income grew only 3–4% in Q1 and Q2 FY27 with operating profit down 12% in Q2, net keys fell to 5,762 with 442 more under renovation, the accounting regulator NFRA has questioned how it books membership revenue, a ₹431cr service-tax demand is in court, and Screener shows net debt of about 5 times operating profit.", "**Verdict: wait (turnaround).** The reported P/E looks very high because membership fees are booked over many years, but the group made a Q1 loss, resorts are being rebuilt and Finland is still losing money."],
        tagline: "India's largest holiday-membership (timeshare) company, Club Mahindra, with a loss-making resort business in Finland and a new luxury resort brand.",
        revenue: '₹2,992cr (FY26, consolidated)',
        products: [
            { name: 'Club Mahindra memberships', text: "Members pay upfront or in instalments for years of holidays, plus an annual fee. The new Keystone product raised sales value 22% to ₹154cr in Q1 FY27 and the average price per membership 73% to ₹14.4 lakh; upgrades by existing members rose 58% to ₹89cr." },
            { name: 'Resorts and non-member stays', text: "Resort income (food and activities) grew 10% to ₹126cr despite 400 rooms shut for renovation; occupancy was 86.7%. Rooms sold to non-members through online agents, weddings and events grew 30%, with rates up about 10%." },
            { name: 'Holiday Club Resorts (Finland)', text: "Resorts and holiday ownership in Finland. Its loss grew by about ₹20cr from a year earlier (an analyst put the quarter's loss at ₹67cr). A strategic review, which could lead to a partner or other action, should conclude in FY27." },
            { name: 'Mahindra Signature Resorts', text: "A new luxury resort brand open to all guests. The first, at Theog, is delayed to Q3–Q4 FY28 with a 5–10% cost overrun; a second should start construction this year." },
        ],
        revenueText: "Q1 FY27 India (standalone) total income was **₹424cr, up 3%**; consolidated revenue was ₹733cr, up 4.5% (Screener), and the group made a net loss of ₹8.6cr. In Q2 India income was ₹395cr (+4%) with resort revenue up 15%, Finland's Holiday Club grew 8% to €36.5M at a €0.3M loss, and the group earned ₹19.7cr (+17%) on ₹819cr of income (+9%). Members bring 85–90% of Indian revenue. Membership fees are recognised as revenue over the life of the membership, so **₹5,825cr of money already received or billed sits on the balance sheet as deferred revenue**; reported profit therefore lags the cash the business collects.",
        mixes: [
            { caption: 'Total income by business, Q1 FY27 (company call)', parts: [{ label: 'Club Mahindra (India)', share: 55 }, { label: 'Finland and other subsidiaries', share: 45 }] },
        ],
        customers: ["**Middle and upper-middle-class Indian families** who buy memberships for regular holidays; 2,000–2,500 existing members upgrade each quarter.", "**Non-member guests** booking through online agents, plus weddings and conferences.", "**Finnish and European holidaymakers** at Holiday Club Resorts."],
        difficulty: { level: 'High', text: "A membership business needs a large, well-kept resort network before families will pay upfront for years of holidays, and a big sales force to sell it. Keeping old resorts up to standard is costly: a full transformation can cost ₹40–50 lakh a key." },
        moat: "Scale, the Mahindra name and a resort network that members have already paid for keep members loyal, and upfront payments help fund the business. The weakness is a product that feels rigid next to flexible hotel booking, and slow growth in new members.",
        salesDrivers: ["**New memberships and upgrades**: Keystone has raised the price per member; the mid-tier Ivory product is over 40% of sales.", "**Adding resorts**: about 1,000 gross keys in FY27 (Jodhpur, Ganpatipule, Darjeeling, Jawai, Dalhousie, Goa and others) while exiting 600–700 poor-quality partner keys; it has visibility on 8,200–8,300 keys toward a 10,000-key target for 2030.", "**Non-member business**, up 43% in FY26 and 30% in Q1 FY27.", "**The 2030 target**: management still aims to triple FY20 revenue by FY30, which now needs about 20–25% a year growth in FY28–FY30."],
        inputs: "**Staff and resort running costs.** In FY26 staff were 27% of sales, other costs 24%, power, fuel and resort running costs 16% and food 12%. Q1 FY27 costs rose because 400 renovating rooms earn nothing but keep their staff, new resorts are still ramping up, room-inventory costs rose about ₹10cr, and it spent about ₹8cr on staff skills, branding and consultants.",
        costEffect: "**Mostly insulated from commodity prices.** The margin moves with membership sales, resort occupancy, renovation downtime, new resorts and Finland's losses. **What happened:** the operating margin rose from 16% in FY22 to 21% in FY25–FY26. In Q1 FY27 it fell to 15% from 17% (Screener). Of a ₹22cr fall in India profit, about 30% came from renovations, 20% from new resorts, 25% from capability and branding spend and 10–15% from GST and Maharashtra solar-policy changes; the group showed a small loss for the quarter.",
        competitors: [{ name: 'Sterling Holiday Resorts and other timeshare firms', note: 'Much smaller membership rivals.' }, { name: 'Hotels and online travel agents', note: 'Flexible pay-as-you-go stays that make long memberships harder to sell.' }, { name: 'Home-stay platforms', note: 'Airbnb-style rentals competing for family holidays.' }],
        position: "**India's largest holiday-membership company** (about 3 lakh members), with a profitable Indian business and a loss-making Finnish one.",
        money: "Screener shows **₹3,032cr of net debt** for the group (including leases), about 5 times a year's operating profit; the company gave a cash balance of ₹1,329cr at September 2026 (₹1,420cr in June) but no debt figure, after ₹312cr of capex in H1. Reported profit is low (₹67cr in FY26) because membership fees are booked over many years and Finland loses money, so the P/E looks very high while the valuation on operating profit is far lower. It pays no dividend because of a ₹1,509cr accounting difference from adopting the Ind AS 115 revenue rule, and none is expected before FY28. The accounts carry about ₹1,510cr of contingent liabilities, the largest a ₹431cr service-tax demand before the Madras High Court, and the auditor reports that NFRA, the accounting regulator, has made observations on how it recognises membership revenue. Promoters (Mahindra & Mahindra) hold **66.7%**, unchanged since 2023.",
        watch: ["The outcome of the Finland review in FY27.", "The 442 renovated keys returning in Q3–Q4, about 1,000 gross keys added by March, and H2 profit.", "Whether revenue growth picks up toward the 2030 target.", "NFRA's revenue-accounting query and the ₹431cr service-tax case."],
        charts: hotelsCharts['Mahindra Holi.&Resor'],
    },
    {
        "company": "Waterways Leisure Tourism",
        "inShort": [
            "**Runs Cordelia Cruises, India's home-grown cruise line**: short cruises from Mumbai and Chennai to Goa, Kochi, Lakshadweep and Sri Lanka on one ship built in 1990, with a second ship (Sky) starting on 23 October 2026 and a third (Sun) due in late 2027.",
            "**Good:** a first mover in a tiny, fast-growing market, with ships about 91% full in H1 FY27 and capacity more than doubling. **Watch:** underlying Q2 operating profit was only ₹10cr, FY26 operating cash was −₹96cr, each new ship carries about $16m a year of lease rent, a promoter in Mauritius owns 89%, and ₹429cr sits with an unnamed middleman for a fourth ship.",
            "**Verdict: pass.** A real business, but ₹429cr was advanced to an unnamed intermediary for a fourth ship and the latest profit leans on ₹49cr of one-off compensation; at about 90 times earnings that is too much to take on trust."
        ],
        "tagline": "The company behind Cordelia Cruises, India's only home-grown ocean cruise line, which sells short cruise holidays to Indian families, couples and wedding parties.",
        "revenue": "₹580cr (FY26, consolidated)",
        "products": [
            {
                "name": "Cruise tickets",
                "text": "Two- to five-night cruises sold per guest per day, covering cabin, food and entertainment, mostly from Mumbai (and Chennai in the monsoon) to Goa, Kochi, Lakshadweep and Sri Lanka, with some trips to Thailand, Malaysia and Singapore. Tickets were **91% of FY26 revenue**; the average ticket was ₹10,980 in FY26 and ₹10,300 in Q2 FY27."
            },
            {
                "name": "Onboard spending",
                "text": "Drinks, speciality dining, shore trips and shopping; about 9–13% of revenue in past years. Management says the new ships, with more bars and restaurants, can raise onboard spending potential from 50% to 90%."
            },
            {
                "name": "Weddings, events and charters",
                "text": "Destination weddings, company outings and full-ship charters; management expects about 95 wedding dates in FY28 against a usual 65–70. Not reported separately."
            }
        ],
        "revenueText": "All revenue is cruising, reported as one segment. **Tickets were 91.22% of FY26 revenue**, the rest onboard spending. FY26 revenue was ₹580cr, slightly below FY25's ₹591cr, from one ship (MV Empress, 796 cabins, up to 2,005 guests). In H1 FY27 revenue rose 16% to ₹323cr; the load factor (guests against two per cabin) was 91.2% and average revenue per guest ₹12,930. Management says Sky will earn about twice what Empress earns per sailing and Sun about 2.5 times, because they have far more suites and balcony cabins (260 and 600 against Empress's 69).",
        "mixes": [
            {
                "caption": "Revenue by type, FY26 (RHP)",
                "parts": [
                    {
                        "label": "Cruise tickets",
                        "share": 91
                    },
                    {
                        "label": "Onboard and other",
                        "share": 9
                    }
                ]
            }
        ],
        "customers": [
            "**Indian leisure travellers**: families, couples and groups on short domestic and nearby foreign cruises; no customer is material, and many bookings come direct, which saves agent commission.",
            "**Weddings, company events and full-ship charters**, which management is targeting with the new ships.",
            "A loyalty scheme, the Chairman's Club, was launched in October 2026 to win repeat trips."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Running a cruise ship is regulated and costly, but Cordelia outsources the technical work: crew and ship management, hotel services and purchasing are bought from third parties, and the ships are leased second-hand from Norwegian Cruise Line. A global cruise company could deploy a ship to India if the market grows."
        },
        "moat": "It is the only established Indian cruise brand, with experience of Indian ports, food and festivals and close work with the government's Cruise Bharat Mission. That is a head start, not a lock: holiday buyers switch easily, and global lines such as Royal Caribbean and MSC already sail some Indian itineraries and have far deeper pockets.",
        "salesDrivers": [
            "**Capacity**: Sky (1,002 cabins, up to 2,400 guests) adds about 126% from 23 October 2026; Sun (1,002 cabins, 600 of them suites or balconies) is due around October 2027, and a fourth ship is under negotiation.",
            "**Season**: Q3 and Q4 (Diwali, Christmas, New Year, weddings, Holi) are the strong quarters; in the monsoon the ship moves to Chennai and runs below full while testing new routes, so Q2 is weak (−₹6cr operating profit in Q2 FY26, ₹10cr in Q2 FY27).",
            "**Price and cabin mix**: average revenue per guest rose 32% in Q2 FY27 to ₹13,645, helped by a $15–20 a day fuel surcharge.",
            "**Market growth**: CRISIL expects India's overnight cruise market (about ₹830cr in FY25) to grow 20–25% a year to FY31, helped by new cruise terminals.",
            "**Shocks**: one old ship means any breakdown, accident or bad publicity stops most of the revenue until Sky is running."
        ],
        "inputs": "**Fuel (very low sulphur fuel oil)**, priced off Singapore rates and bought about a week ahead: about 18% of revenue in 9M FY25 and about 12% in FY26 (₹1,480 per guest-day). Other big costs are port charges, crew and outsourced hotel and food services (budgeted at a fixed cost per guest per day), marketing, and lease rent for the ships (about $16m a year for Sky, much of it booked as depreciation and interest rather than as an operating cost).",
        "costEffect": "**Fuel is not hedged and is only partly passed on.** Fuel cost per available guest-day rose 72% to ₹2,471 in Q2 FY27 from ₹1,434 a year earlier; a $15–20 a day surcharge recovered part of it, but **about ₹28cr of extra fuel cost hit H1**, roughly a quarter of FY26 operating profit, and management expects a gap of about ₹12cr a quarter to remain until prices fall. It says two ships allow fuel hedging. **What happened:** the underlying operating margin fell from 31% in Q1 FY26 to 24% in Q1 FY27 and 7% in Q2 FY27.",
        "competitors": [
            {
                "name": "Royal Caribbean, MSC, Norwegian Cruise Line and Costa",
                "note": "Global lines that sail seasonal Indian or nearby itineraries with much larger fleets; Norwegian is also Cordelia's ship supplier."
            },
            {
                "name": "Air travel and resort holidays",
                "note": "Goa, Kerala, Dubai and Thailand trips compete for the same holiday money."
            }
        ],
        "position": "**One of the few domestic ocean cruise operators in India and the only listed one**, carrying 730,819 guests since 2021. India saw about 4.8 lakh cruise passenger movements in 2025, so Cordelia is a large share of a very small market. Load factor was 91.2% in H1 FY27.",
        "money": "Screener shows **₹118cr of borrowings and about ₹6cr of cash at March 2026**, so about ₹112cr of net debt; by September borrowings had risen to ₹443cr after ₹344cr of short-term loans taken to fund a **₹429cr interest-bearing advance, passed through a subsidiary to an unnamed intermediary**, to secure a fourth ship. The June 2026 IPO raised ₹585cr of new money, 82% earmarked for deposits and lease rent on Sky and Sun paid to its own IFSC subsidiary. Each new ship is on a 10-year hire-purchase lease (about $16m a year for Sky, owned for $1 at the end), commitments far larger than its ₹121cr of operating profit over the last year. **FY26 operating cash was −₹96cr**, mainly because about ₹220cr went in advances for the new ships; FY24 and FY25 brought in ₹230cr and ₹130cr. Net worth was negative until FY25, and the auditor flagged going-concern doubt for FY24. Shares listed on 1 July 2026 about 16% below the ₹808 issue price, were later split ten for one, and now trade near ₹90, about 12% above the issue price. Promoters hold **89.35%**; no dividend.",
        "watch": [
            "Q3 FY27: Sky's first season, and whether the underlying margin (excluding the ₹49cr Norwegian compensation in Q2) recovers above 25%.",
            "What happens to the ₹429cr advance: a named fourth ship on sensible terms, or money returned.",
            "Fuel prices and the surcharge, and operating cash turning positive once the new-ship deposits are paid."
        ],
        charts: hotelsCharts["Waterways Leisure Tourism"],
    },
    {
        "company": "Travel Food Services",
        "inShort": [
            "**India's largest airport food and lounge operator**: food courts and quick-service outlets (KFC, Wagamama and its own brands) and private lounges at 21 airports, plus outlets in Malaysia and Hong Kong.",
            "**Good:** debt-free with about ₹970cr of cash, a **39% operating margin** in FY26 and 81% of five years' operating profit turned into cash. **Watch:** revenue barely moved in FY26 (₹1,648cr against ₹1,688cr), Delhi T3 leaves the consolidated accounts from October, Chennai and Kolkata come up for renewal in 2027, and air traffic is flat.",
            "**Verdict: follow.** A high-quality, cash-rich franchise at a fair price, but I want to see growth return through the Delhi change and the 2027 renewals before buying."
        ],
        "tagline": "Runs restaurants, food courts and private lounges inside Indian airports under long concessions, promoted by the Kapur family and the UK's SSP Group.",
        "revenue": "₹1,648cr (FY26, consolidated)",
        "products": [
            {
                "name": "Travel quick-service restaurants",
                "text": "About 540 outlets system-wide (June 2026), from 153 brands: international names it licenses such as KFC, Wagamama and Gordon Ramsay, regional favourites and its own concepts. Its adjusted gross margin, after food costs, is about 81%."
            },
            {
                "name": "Lounges",
                "text": "About 40 lounges in India, Malaysia and Hong Kong, paid for mostly by banks and card networks whose customers get free access, plus walk-ins. CRISIL put its share of India's airport lounge market at **45%** in FY25."
            },
            {
                "name": "Passenger services and new lines",
                "text": "Meet-and-greet and porter services under Elite Assist, started at Noida in 2026; highway food courts under the government's wayside amenities plan are a later opportunity."
            }
        ],
        "revenueText": "Revenue comes from food and lounge sales at airports it runs directly or through subsidiaries. Much more is earned through joint ventures with airport owners (Adani, GMR) and in Malaysia, which show only as a share of profit: **system-wide sales were ₹2,527cr in FY25, of which ₹839cr sat in joint ventures** outside the consolidated revenue. FY26 consolidated revenue fell 2% to ₹1,648cr partly because a JV was moved out of the consolidated accounts; Q1 FY27 revenue rose 20.6% to ₹452cr on new outlets, with like-for-like sales up 4.2%. From October 2026 the Delhi T3 outlets, consolidated until now, move to a GMR joint venture in which it owns 30%. Its split between food and lounges is not given in what I read.",
        "shares": [
            {
                "title": "Market share, FY25 (CRISIL, including joint ventures)",
                "source": "Investor presentation, November 2025",
                "groups": [
                    {
                        "rows": [
                            {
                                "name": "Indian airport lounges",
                                "share": 45
                            },
                            {
                                "name": "Indian airport quick-service food",
                                "share": 26
                            }
                        ]
                    }
                ]
            }
        ],
        "customers": [
            "**Air travellers**, buying food at 21 airports; domestic traffic is the bulk, international travellers spend more.",
            "**Banks and card networks**, which pay for their customers' lounge visits.",
            "**Airport owners as landlords and partners**: it pays them a minimum guarantee or a share of sales, whichever is higher, and runs joint ventures with Adani and GMR at their airports."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Running food at an airport means security-cleared staff, kitchens in cramped space, long hours and brand deals; winning tenders needs a record and capital. But rivals such as Devyani bid for the same tenders and the airport owner holds the power."
        },
        "moat": "Scale and relationships: the largest lounge network, licences for global brands, joint ventures with the two biggest private airport owners, and a 92% contract renewal rate. The weak point is that every site is a concession of five to ten years, so the moat has to be re-won at each tender, and when airports open new terminals sales can migrate away.",
        "salesDrivers": [
            "**Passenger traffic**: the single biggest driver; flat in Q1 FY27 because of route cuts during the Middle East conflict. Management expects a bounce in H2 FY27.",
            "**Spending per traveller**: like-for-like sales usually grow 5–7 points faster than traffic through menus, bundles and premium brands; price rises were held back this year.",
            "**New contracts**: about 90 units opened in the last year (Noida, Cochin, Navi Mumbai, Delhi) and over 50 more are being built; new units take 12–18 months to mature, 18–24 months at new airports.",
            "**Renewals**: Delhi T3 moved to a 30% joint venture from October 2026 (to 2036); Chennai and Kolkata come up at the end of March 2027 and early FY28.",
            "**Overseas and highways**: entities set up in Dubai and Indonesia to bid; highway food courts are a medium-term plan."
        ],
        "inputs": "**Food and packaged goods** are only about 14–19% of sales (gross margin about 81% adjusted). The big costs are **concession fees paid to airports** (a minimum guarantee or a share of sales), staff (more than 5,000 employees) and common-area charges; about 8–10% of costs are truly fixed.",
        "costEffect": "**Margins are set by rent and staffing more than by food prices.** Food inflation is small against an 81% gross margin and can be priced, since travellers have few alternatives. The risk is fixed minimum guarantees and early staffing at new sites when traffic is weak. **What happened:** the operating margin dipped to 36% in Q1 FY27 from 39% a year earlier as staff were hired ahead of new openings, while traffic was flat.",
        "competitors": [
            {
                "name": "SSP Group",
                "note": "World-leading travel food operator and TFS's own co-promoter; in India it works through TFS."
            },
            {
                "name": "Devyani International and other food operators",
                "note": "Bid for the same airport food tenders; Devyani won Delhi T3 packages alongside TFS and SSP in the original award."
            },
            {
                "name": "Airport-owned operators",
                "note": "Adani and GMR increasingly run retail through joint ventures, in which TFS is the partner for now."
            }
        ],
        "position": "**India's largest airport food and lounge operator**: 45% of the airport lounge market and 26% of airport quick-service food in FY25 (CRISIL, including joint ventures), present at 21 airports with 580 outlets and lounges.",
        "money": "**Debt-free with about ₹970cr of cash** at June 2026, by its own count; Screener's ₹245cr of borrowings at March 2026 are lease obligations. Over FY22–FY26 it turned **₹1,628cr of operating cash out of ₹2,018cr of operating profit (81%)**, and free cash was ₹1,390cr. Suppliers are paid far later than food is sold, so working capital is negative. New outlets are funded from cash. Other income, mostly interest on the cash pile, was ₹161cr in FY26, about 27% of pre-tax profit. It paid out 31% of FY26 profit as dividends. The July 2025 IPO was entirely a ₹2,000cr sale by the Kapur Family Trust, so no money came to the company. Promoters hold **86.19%**, unchanged since listing.",
        "watch": [
            "Q2 and Q3 FY27 results: growth after Delhi T3 leaves the consolidated accounts, and whether the H2 traffic bounce arrives.",
            "Chennai and Kolkata renewals in 2027.",
            "The margin returning to about 38–40% as new outlets mature."
        ],
        charts: hotelsCharts["Travel Food Services"],
    },
];

export const hotelsBusinesses = { intro, profiles };
