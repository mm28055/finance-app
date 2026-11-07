import { BusinessProfile, OverviewSection } from './types';
import { tyresCharts } from './card-data/tyres';

// Tab 2 of the Tyres note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are from each company's latest presentation or call. The cost chart uses India's natural-rubber price index, the biggest single input.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "All three make tyres, but for different vehicles, and the mix decides how each one behaves.",
        ],
        points: [
            {
                label: 'Truck and bus radials',
                text: "Heavy tyres for lorries and buses, sold mostly to fleet owners who care about cost per kilometre. The biggest business at Apollo and JK Tyre.",
            },
            {
                label: 'Car tyres',
                text: "Passenger-car radials, where larger rim sizes and SUV and electric-car tyres earn more. Growing fastest at all three; Apollo also sells Vredestein tyres in Europe.",
            },
            {
                label: 'Two-wheeler and three-wheeler tyres',
                text: "Motorcycle and scooter tyres, a high-volume market where CEAT is a leader, including tyres for electric two-wheelers.",
            },
            {
                label: 'Farm and off-highway tyres',
                text: "Tractor, construction and mining tyres, largely exported; CEAT bought Michelin's Camso business in this area.",
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
                    ['**Replacement, through dealers**', 'All three; about half or more of sales', 'List prices, raised in steps when rubber rises', 'Fast'],
                    ['**Vehicle makers (original equipment)**', 'All three', 'Contracts that follow costs a quarter or more later', 'On the carmaker’s terms'],
                    ['**Exports**', 'All three; Europe for Apollo, Mexico for JK', 'Market prices abroad; duties matter', 'Slower: goods at sea'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Apollo Tyres',
        inShort: ["**One of India's two biggest truck-tyre makers and a top-three car-tyre maker**, which also owns the Vredestein brand in Europe.", "**Good:** India sales grew 15.6% in Q1 FY27 on double-digit volume growth, and net debt is low at about ₹1,700cr (company figure). **Bad:** raw-material costs jumped about 17% in the quarter, the margin fell to 11.7%, and the finance head of 22 years left in October, just as a ₹3,500cr spending year began (an insider took over on 4 November). The managing director's pay nearly doubled to ₹78.4cr, and it bought about ₹685cr of goods from promoter-group firms.", "**Verdict: own.** A low-debt market leader whose factories are full; the margin should recover once price rises catch up with rubber."],
        tagline: "One of India's largest tyre makers, with plants in India and Hungary, selling Apollo-brand tyres in India and Vredestein tyres in Europe.",
        revenue: '₹28,471cr (FY26, consolidated)',
        products: [
            { name: 'Truck and bus tyres', text: "Truck and bus radials (TBR: steel-belted tyres that last longer and save fuel) and older bias (cross-ply) tyres. Apollo estimates it now has more than 30% of India's truck-radial replacement market, after winning back share it had lost." },
            { name: 'Car and SUV tyres', text: "Passenger car radials (PCR) under the Apollo name in India, where it estimates it has over 21% of the replacement market, and under Vredestein in Europe, where ultra-high-performance tyres are about 40% of sales." },
            { name: 'Farm, off-highway and two-wheeler tyres', text: "Tractor and off-road tyres made in Kochi, and two-wheeler tyres in India. About 20–25% of its high-end European farm tyres are now bought in from two partner factories because the Dutch plant that made them has closed." },
            { name: 'Spare tyres and exports', text: "Space-saver spare tyres for carmakers, now made at its Baroda plant, and exports from India to Europe, the US and West Asia. Exports grew 15% in Q1, mostly to Europe." },
        ],
        revenueText: "**India was 69% of Q1 FY27 revenue, Europe 26% and other markets 5%** (company presentation); Europe earned €147m in the quarter, mostly Vredestein, including the Reifencom online shop (€43m). **About 79% of group revenue is replacement and 21% vehicle makers.** By product, the group is truck and bus 41%, car 36%, farm and off-highway 11% and light truck 6%; in India alone truck and bus is 53% and car 22%. In India, Q1 volumes grew 13% in replacement, 10% with vehicle makers and 15% in exports.",
        mixes: [
            { caption: 'Revenue by region, Q1 FY27 (company presentation)', parts: [{ label: 'India', share: 69 }, { label: 'Europe (incl. Reifencom)', share: 26 }, { label: 'Other', share: 5 }] },
            { caption: 'Group revenue by product, Q1 FY27 (company presentation)', parts: [{ label: 'Truck and bus', share: 41 }, { label: 'Car and SUV', share: 36 }, { label: 'Farm and off-highway', share: 11 }, { label: 'Light truck', share: 6 }, { label: 'Other', share: 6 }], note: '‘Other’ is the remainder of the presentation’s split.' },
        ],
        customers: ["**Replacement buyers**: truck and bus fleet owners, farmers and car owners replacing worn tyres, reached through a large dealer network. This is where most of the profit is made, because prices can be raised every month.", "**Vehicle makers (OEMs)**: car, truck and tractor makers in India and Europe that fit its tyres on new vehicles. It won new approvals in Q1, including for several electric models. Prices are negotiated or follow a formula that trails costs by a quarter.", "**Overseas dealers** in Europe, the US and West Asia; in Q1 Europe did well while the US and West Asia were weak."],
        difficulty: { level: 'High', text: "A radial tyre is a precise recipe of rubber compounds, steel and fabric cord cured under heat and pressure. Plants are expensive, and vehicle makers test a tyre for months before approving it. Cheap Chinese tyres compete at the bottom end, especially in Europe." },
        moat: "A strong brand and one of India's widest dealer networks: replacement volumes grew 13% in Q1 even though it cut advertising by about half. The weakness is that raw materials are over half its costs, so a rubber spike hits profits for a few quarters before prices catch up.",
        salesDrivers: ["**How far trucks run**: most truck tyres are bought as replacements, so freight volumes and the number of trucks on the road matter more than new truck sales.", "**New vehicle sales**: car, truck and tractor sales, helped by last year's GST cut, drive orders from vehicle makers and build the base of future replacement demand.", "**Capacity**: Indian plants are running above 90% full. Hungary adds 4,000 car tyres a day (from 17,000 to 21,000) from H2 FY27. The ₹5,810cr Andhra Pradesh expansion, approved in February 2026, adds 3.7 million car tyres and 1.3 million truck tyres a year by FY29, with the first lines towards the end of FY27.", "**The Europe reset**: the Dutch plant at Enschede (about 750,000 tyres a year) stopped in June 2026, and its work moves to Hungary and India by September–October 2026. Europe's margin was 8.9% in Q1 (about 11% without the double running costs); management aims for the high teens over a full year.", "**Duties on Chinese tyres in Europe**: new anti-dumping duties should help the cheaper Apollo-brand tyres it sells there."],
        inputs: "**Natural rubber is the biggest input**, alongside synthetic rubber, carbon black (the filler that makes rubber strong), nylon and polyester fabric cord, and steel cord and bead wire; everything except natural rubber is tied to crude oil. About half of all materials are imported, and natural rubber is bought roughly half in India and half abroad. In Q1 FY27 it paid about ₹225/kg for natural rubber, ₹250 for synthetic rubber, ₹125 for carbon black and ₹165 for steel cord. Materials were 55% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag of one to two quarters.** Prices always trail costs: dealers and car owners resist big jumps, so replacement prices go up in small steps over several weeks, rivals have to follow, and vehicle makers pay more only a quarter later under their price formulas, or after hard negotiation for trucks. In Q1 raw materials rose about 17%; it raised prices 7–9% in three steps, but only 3–4% showed up in the quarter's revenue. It needs 15–16% in all and had reached about 11% by August. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (15% to 9%). **What happened:** India's natural-rubber price index rose about 63% from Q1 FY24 to Q1 FY27, and Apollo's margin fell from 16.8% to 11.7%. Management expects rubber to cool after the monsoon, from Q3; tyre makers have usually earned their best margins when raw-material prices are falling.",
        competitors: [{ name: 'MRF', note: "India's largest tyre maker and the benchmark brand, strong in truck and two-wheeler tyres." }, { name: 'CEAT', note: 'Stronger in two-wheeler tyres and electric-vehicle fitments; growing fast in off-highway exports.' }, { name: 'JK Tyre', note: 'Its closest rival in truck radials; smaller in cars and carries more debt.' }, { name: 'Michelin, Bridgestone, Continental', note: "Global majors that lead Europe's premium market and India's premium car tyres; Chinese brands compete at the cheap end." }],
        position: "**Over 30% of India's truck-radial replacement market and over 21% of car-tyre replacement** (company estimates), plus a mid-sized premium brand in Europe. Screener describes it as among the top three in car tyres and second in truck radials.",
        money: "Screener puts net debt at **₹2,631cr**; the company put it at about ₹1,700cr in June 2026, or 0.4 times a year's operating profit. Capex was ₹650cr in Q1 of a planned ₹3,500cr for FY27 (about ₹3,000cr in India), against ₹1,400cr in FY26, so the company expects to become a net borrower this year; CRISIL expects return on capital to dip below 10% in FY27. It has not provided for a ₹425.5cr Competition Commission penalty from 2018 (under appeal in the Supreme Court), and contingent sales-tax claims rose to ₹515cr. In FY26 it bought about ₹685cr of goods from promoter-group firms, and the managing director was paid ₹78.4cr. Promoters hold **36.9%**, barely changed from 37.3% in September 2023, with no pledge; foreign investors have cut their holding from 22.1% to 10.1% in three years.",
        watch: ["Price rises catching up with rubber and the margin getting back toward 15%.", "Europe's margin after the Enschede move, and the new CFO, Ravi Kumar Shingari (from 4 November 2026, after Gaurav Kumar left on 6 October).", "Further sales by Warburg Pincus, which sold 4.25% at about ₹435 in August 2026 and still held 5.7% at September.", "Debt as capex peaks in FY27–FY28.", "Purchases from promoter-group firms (about ₹685cr in FY26) and the managing director's pay."],
        charts: tyresCharts['Apollo Tyres'],
    },
    {
        company: 'JK Tyre & Indust',
        inShort: ["**A truck-tyre-led maker that calls itself India's No. 1 in truck and bus radials**, also making car, two-wheeler and farm tyres, with a sizeable business in Mexico (JK Tornel).", "**Good:** Indian volumes grew 25% in Q1 FY27 and 22% in Q2, its Indian plants are running at about 95%, and Mexico recovered in Q2 (₹479cr of revenue). **Bad:** raw materials rose 22% in Q1 and 9% more in Q2, the margin is stuck near 7%, and net debt is the highest of the three at ₹5,696cr at September (company figure, up ₹751cr in a quarter), about 3.3 times operating profit against CARE's 3.5-times downgrade trigger; FY26 free cash flow was almost nil.", "**Verdict: wait.** Demand is strong, but I want to see the margin and Mexico recover, and debt stay inside CARE's limit, before it builds ₹6,110cr of capacity."],
        tagline: "Truck-tyre-led Indian tyre maker of the JK Organisation, with plants in India and Mexico, now expanding at Chennai and Mysuru.",
        revenue: '₹16,327cr (FY26, consolidated)',
        products: [
            { name: 'Truck and bus tyres', text: "Radial (TBR) and bias tyres for trucks and buses, 56% of sales. It brought radial tyres to India. In Q1, truck-radial volumes grew 18% with vehicle makers and 15% in replacement." },
            { name: 'Car and SUV tyres', text: "Passenger car radials, 27% of sales. Sizes of 16 inches and above are now about 35% of its car tyres. Volumes grew 10% in Q1, led by vehicle makers." },
            { name: 'Two- and three-wheeler tyres', text: "5% of sales and growing fast: volumes rose 17% with vehicle makers and 48% in replacement in Q1." },
            { name: 'Farm, industrial and other tyres', text: "12% of sales, mostly tractor tyres; farm volumes grew 31% in Q1 (35% with tractor makers, 25% in replacement)." },
            { name: 'Smart tyres and service', text: "Sensor-based tyre-pressure monitoring (it was first in India with this) and fleet services through more than 100 Truck Wheels outlets and 700 Pit Shops, a small but fast-growing business." },
        ],
        revenueText: "By product, **truck and bus tyres are 56% of sales, car tyres 27%, two- and three-wheelers 5% and others 12%** (Q1 FY27). By channel, **replacement is 63%, vehicle makers 27% and exports 10%** (CARE). JK Tornel in Mexico earned ₹2,138cr of revenue in FY26 at a 6.6% operating margin. Group revenue rose only 2% in Q1, to ₹3,946cr (filed), even though the Indian company grew 13%, because revenue outside it, mainly Mexico, fell from ₹416cr a year earlier to ₹23cr.",
        mixes: [
            { caption: 'Sales by product, Q1 FY27 (from the call)', parts: [{ label: 'Truck and bus', share: 56 }, { label: 'Car and SUV', share: 27 }, { label: 'Two- and three-wheeler', share: 5 }, { label: 'Farm, industrial and other', share: 12 }], note: 'Management did not say whether this split is by value or by volume.' },
            { caption: 'Sales by channel, Q1 FY27 (CARE rating report)', parts: [{ label: 'Replacement', share: 63 }, { label: 'Vehicle makers (OEM)', share: 27 }, { label: 'Exports', share: 10 }] },
        ],
        customers: ["**Truck and bus fleet owners** buying replacement tyres through dealers and JK's own service points; big fleets judge tyres on cost per kilometre.", "**Vehicle makers**: truck, car, tractor and two-wheeler makers. Sales to them rose 42% by volume in Q1, but they get price rises only a quarter or more later.", "**Mexico and exports**: JK Tornel sells tyres to vehicle makers and the replacement market in Mexico; exports from India were steady in Q1."],
        difficulty: { level: 'High', text: "Truck radials must carry heavy loads for long distances, which takes precise steel-belt construction and years of fleet testing. Plants are expensive and must run nearly full to make money." },
        moat: "Long-standing strength in truck radials with fleet owners, plus a service network and tyre sensors that tie fleets in. The weakness is that its margin fell further than its larger rivals' in this rubber spike, and it carries the most debt of the three.",
        salesDrivers: ["**Truck freight and infrastructure**: commercial-vehicle sales grew 14% in Q1, and trucks running more kilometres wear out more tyres.", "**New vehicle sales**: industry sales of passenger vehicles grew 23%, two- and three-wheelers 14% and tractors 22% in Q1, lifting orders from vehicle makers.", "**Capacity**: Indian plants are nearly full. About 7% is being added this year by balancing lines at Banmore; ₹1,130cr of truck and car lines are due by Q3 FY28; and ₹4,980cr at Chennai and Mysuru adds about 24–25% more truck and car capacity over FY27–FY30, funded two parts debt to one part equity.", "**Mexico**: output was hit by a workers' slowdown and late shipments of Chinese bead wire. Management says production is back to normal and the rest of the year will be better, but raising prices there is harder than in India.", "**Electric vehicles**: EV tyres wear out 5–10% faster because of high torque, which should add to replacement demand over time."],
        inputs: "**Natural rubber is the biggest input**, with synthetic rubber, carbon black, nylon and polyester cord, and steel bead wire, most of them crude-oil linked. The Mexican plant buys much of its bead wire from China. Materials were 62% of sales in FY26, the highest share of the three.",
        costEffect: "**Partly passed on, with a lag.** It raises prices in small monthly steps ('inching up') so dealers keep ordering: about 5% in Q1, 11% in all by August, with another 8–9% planned; vehicle makers pay more only a quarter or so later. Rubber stock bought at high prices will push costs up another 8–10% in Q2. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (12% to 6%). **What happened:** India's natural-rubber price index rose about 63% from Q1 FY24 to Q1 FY27, and JK's margin fell from 12.3% to 6.5%. Management expects the margin back at 11–13% in the second half as rubber softens, and about 10–11% for the full year.",
        competitors: [{ name: 'Apollo Tyres', note: 'Its closest rival in truck radials; bigger in cars, with far less debt.' }, { name: 'MRF', note: "India's largest tyre maker, strong in truck and two-wheeler tyres." }, { name: 'CEAT', note: 'Stronger in two-wheeler and car tyres and in electric-vehicle fitments.' }],
        position: "**Calls itself India's No. 1 truck-and-bus radial maker** and ranks 19th among the world's tyre companies (Screener), but is a smaller player in car tyres.",
        money: "Screener puts net debt at **₹4,581cr**; the company's own figure is ₹4,945cr in June 2026, up ₹500cr in the quarter, or 2.56 times a year's operating profit. It expects debt to rise by another ₹500–700cr this year as it spends on ₹6,110cr of expansion and carries costlier stock; CARE (AA-/Stable) expects leverage of 3.0–3.5 times during the build and would downgrade above 3.5 times. It has not provided for a ₹310cr Competition Commission penalty from 2018, now before the Supreme Court. Its chairman and managing director, father and son, were paid about ₹83cr in FY26, about 11% of standalone profit. The Cavendish plants at Laksar were merged in from 1 April 2025, so FY25 figures were restated. Promoters hold **51.7%**, down from 56.3% in September 2023, with no pledge.",
        watch: ["Margin recovering from about 7% towards 11–13% once raw materials stop rising.", "Mexico holding its Q2 recovery.", "Net debt (₹5,696cr at September) staying inside CARE's 3.5-times trigger as the Chennai and Mysuru expansion is paid for."],
        charts: tyresCharts['JK Tyre & Indust'],
    },
    {
        company: 'CEAT',
        inShort: ["**A fast-growing tyre maker strongest in two-wheeler and car tyres**, with about a quarter of the tyres fitted on new electric cars and scooters in India, and a growing off-highway export arm (Camso).", "**Good:** sales grew 22% in Q1 FY27 on 13–14% more volume, and premium large-rim car tyres doubled in replacement. **Bad:** the group margin fell to 8.6% by the company's count (8.5% in filed figures) as raw materials jumped 16–18%, and a Sri Lankan currency loss plus Camso start-up costs cut the quarter's profit to ₹4cr. Debt rose to ₹3,243cr, just under CARE's downgrade trigger.", "**Verdict: follow.** A good business, but the price needs a faster margin recovery than I expect; buy once Camso earns money and leverage stays below CARE's 2.5-times trigger."],
        tagline: "RPG Group tyre maker selling two-wheeler, car, truck, farm and off-highway tyres in India and abroad, with an off-highway plant in Sri Lanka and the Camso tracks business taken over from Michelin.",
        revenue: '₹15,678cr (FY26, consolidated)',
        products: [
            { name: 'Two- and three-wheeler tyres', text: "Tyres for motorcycles, scooters and autos. Premium radials and tyres for 250cc-plus bikes are growing fast, and it has about 25% of the tyres fitted on new electric two-wheelers. A 100,000-tyre-a-day expansion is under way at Nagpur." },
            { name: 'Car and SUV tyres', text: "Passenger car radials (PCR). Premium 17-inch-and-bigger sizes doubled in replacement volume in Q1, and it has about 25% of the tyres fitted on new electric cars." },
            { name: 'Truck and bus tyres', text: "Truck and bus radials (TBR) and bias tyres. Replacement volumes grew by double digits in Q1, while sales to truck makers were flat." },
            { name: 'Farm and off-highway tyres', text: "Tractor tyres and off-highway tyres (OHT) for farm and construction machines, largely exported to Europe and the US and partly made in Sri Lanka. It added more than 10 new sizes in Q1." },
            { name: 'Camso', text: "Rubber tracks and tyres for compact construction machines, taken over from Michelin, running at about $10m a month at customer prices. Until the handover is complete it sells through Michelin and keeps less of that." },
        ],
        revenueText: "On a standalone basis, **replacement is about 50% of sales, vehicle makers (OEM) 30% and exports 20%** (Q1 FY27); counting Camso, overseas sales are about 23% of the group. Two-thirds of Q1's year-on-year growth came from volume and one-third from price and mix. By tyre type (FY26, standalone), **truck and bus is 29%, two- and three-wheelers 27%, cars and UVs 22%, off-highway 15%** and light trucks and others 7%.",
        mixes: [
            { caption: 'Revenue by channel, Q1 FY27 (standalone, from the call)', parts: [{ label: 'Replacement', share: 50 }, { label: 'Vehicle makers (OEM)', share: 30 }, { label: 'Exports', share: 20 }] },
            { caption: 'Revenue by product, FY26 (standalone, company presentation)', parts: [{ label: 'Truck and bus', share: 29 }, { label: 'Two- and three-wheeler', share: 27 }, { label: 'Car and UV', share: 22 }, { label: 'Off-highway', share: 15 }, { label: 'Light truck and other', share: 7 }] },
        ],
        customers: ["**Replacement buyers**: motorcycle, car, truck and tractor owners buying through dealers, especially in rural India, where demand has been strong since last year's GST cut.", "**Vehicle makers**: two-wheeler, car, truck and tractor makers. CEAT keeps being chosen for new model launches, including electric ones. Most pay on a quarterly price index, so price rises reach them a quarter late.", "**Overseas buyers** of farm and off-highway tyres and tracks in Europe and the US. Tyres for road vehicles from India face a 29% US duty; off-highway tyres face 10%."],
        difficulty: { level: 'High', text: "Every tyre size and tread needs its own rubber recipe and moulds, and vehicle makers test for months before fitting a tyre. Electric-vehicle tyres must also be quieter and roll more easily. Off-highway tyres and rubber tracks are harder still and sold on reputation." },
        moat: "A well-known brand, a wide dealer network and early wins with electric-vehicle makers keep customers coming back; so far replacement buyers have accepted 11% price rises without volumes falling. The weakness is a thin margin cushion when rubber and crude prices spike.",
        salesDrivers: ["**Rural and two-wheeler demand**: management expects high-single-digit growth in two-wheeler replacement and mid-single-digit growth in trucks and cars in the near term; a weak monsoon (El Niño) could hurt farm incomes.", "**New vehicle sales**: demand from vehicle makers was very strong in Q1, in some categories growing in the mid-20s%. Electric launches favour CEAT because of its 25% share.", "**Premium sizes**: bigger rims sell at higher prices; 17-inch-plus replacement volumes doubled in Q1.", "**Exports and Camso**: exports grew about 30% in Q1. Camso customers were due to move to CEAT directly by September 2026 (about 90%; the Q2 call will confirm), and from FY28 it expects to control the whole chain and earn the full margin.", "**Capacity**: plants are running close to full. Capex is ₹1,300–1,400cr in FY27, and a new ₹1,205cr plant for 53,000 two-wheeler tyres a day is approved, to be built in stages through FY31."],
        inputs: "**Natural rubber is the biggest input**, with synthetic rubber, carbon black, fabric cord and steel wire, most of them crude-oil linked. About two-thirds of its natural rubber is imported block rubber and one-third local sheet rubber; local prices reached about ₹280/kg in July 2026, the highest in at least 15 years. The weaker rupee (about ₹96.50 to the dollar) added to costs. Materials were 61% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** Replacement prices are raised in steps every few weeks (about 7% in Q1, 11% by mid-July, with another 4–6% planned for July and August); export prices rose 5–7% on new orders; vehicle makers pay on a quarterly index, so their rise (double digits from July, on top of 3% in April) arrives a quarter late. Rubber for Q2 was already bought or on ships, so Q2 costs are locked in 8–10% higher. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (13% to 7%). **What happened:** India's natural-rubber price index rose about 63% from Q1 FY24 to Q1 FY27, and CEAT's group margin fell from 13.2% in FY26 to 8.6% in Q1 FY27 (company figures; 8.5% filed); gross margin was 33.9% in Q1 against a normal 40–41%. It plans to hold prices when rubber falls, to win the margin back.",
        competitors: [{ name: 'MRF', note: 'Market leader overall and in two-wheeler and truck tyres, with a much stronger balance sheet.' }, { name: 'Apollo Tyres', note: 'Bigger in truck radials and car tyres, with low debt and a European arm.' }, { name: 'JK Tyre', note: 'Truck-radial specialist with a Mexican business.' }, { name: 'TVS Srichakra, Michelin, Bridgestone', note: 'TVS Srichakra competes in two-wheeler tyres; the global majors in premium car tyres.' }],
        position: "**About 25% of the tyres fitted on new electric cars and electric two-wheelers**, and a leading player in two-wheeler and car tyres; a challenger in truck radials.",
        money: "Screener puts net debt at **₹3,229cr**; the company reported consolidated debt of ₹3,243cr in June 2026, up ₹232cr in the quarter because it held more rubber stock, or 1.6 times a year's operating profit. Capex is ₹1,300–1,400cr this year, and the new two-wheeler plant will be paid for with debt and cash from operations. In September 2026 it turned $24.5m of its $80m loan to the Sri Lankan subsidiary into equity to cut the currency risk. CARE rates it AA/Positive but would downgrade if net debt stayed above 2.5 times operating profit (it was 2.34 times on CARE's measure). It still owes Michelin US$44m for the Camso brand, due about three years after the deal, and has not provided for a ₹252cr Competition Commission penalty from 2018 (before the Supreme Court); a second competition case over a 2013 bus-tyre tender is pending. It pays RPG Enterprises a licence fee of about ₹26cr a year. Promoters (RPG Group) hold **47.3%**, unchanged over three years, with no pledge.",
        watch: ["Margin getting back above 12% as price rises catch up.", "Camso turning profitable once customers move over.", "The Sri Lankan rupee, and debt as capex rises: CARE's leverage measure (2.34 times) must stay below 2.5 times."],
        charts: tyresCharts['CEAT'],
    },
];

export const tyresBusinesses = { intro, profiles };
