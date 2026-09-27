import { BusinessProfile, OverviewSection } from './types';
import { consumerDurablesCharts } from './card-data/consumer-durables';

// Tab 2 of the Consumer Durables · Paints and coatings note: what each company actually does.
// Revenue totals are the filed consolidated figures (Screener). Dealers, shares, splits and plant figures
// come from the companies' latest calls, presentations, annual reports and rating reports; where a figure
// is not disclosed, the text says so. 'Akzo Nobel' is the dashboard's name for JSW Dulux Ltd.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed consolidated figures for FY26; splits are from each company's latest call or presentation. **JSW Dulux** is the former Akzo Nobel India and still appears as Akzo Nobel in the data; its FY26 revenue is lower partly because it sold its powder-coatings business in July 2025. Paint has no single raw material with a reliable price index, so there is no cost-versus-input chart; each card explains in words what drives costs and how the margin has moved.",
            "**What paint costs to make and sell.** Materials are 53–59% of sales for all four. The biggest items are **titanium dioxide**, the white pigment that gives paint its covering power; **monomers, resins and solvents**, which are made from crude oil, so they rise with oil prices and a weaker rupee; and **packaging** (tins, pails and cans). Selling costs matter almost as much: companies lend dealers **tinting machines** that mix colours in the shop, pay dealer discounts and painter incentives, and advertise. Three well-funded newcomers (**Birla Opus, JSW Paints and Pidilite's Haisha**) are adding capacity and spending heavily on dealers and painters, a **price war** that forces the older companies to spend more to keep their shelf space. That is why margins in house paints have fallen even when raw materials were cheap, and why a fall in raw-material prices tends to be competed away.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Four listed paint and coating makers, in three groups. The market leaders, Asian Paints and Berger, are not in this list, but they set the prices everyone here must match.",
        ],
        points: [
            {
                label: 'Decorative paints',
                text: "House paints for walls, doors and floors: emulsions, enamels, primers, putty and waterproofing, sold through dealers who hold a company's tinting machine, and often chosen by the painter rather than the homeowner. **Indigo Paints** is a small challenger (about 2.5% of the market) with the best gross margin among listed peers; **JSW Dulux** owns the premium Dulux brand (about 5% of house paints) and is cutting prices under its new owner to win volume. **Here the brand, the dealer's shelf and the painter decide who wins, and that is exactly where the newcomers are spending.**",
            },
            {
                label: 'Industrial and automotive coatings',
                text: "Paints applied in factories: car and two-wheeler bodies, tractors, appliances, steel structures, ships and pre-painted coil. **Kansai Nerolac** leads India in car and powder coatings and is also third in house paints; **JSW Dulux** earns about 40% of its revenue here. A car-maker approves a paint system for a model and rarely switches, which protects volume, but car-makers also push back on price rises, which arrive one to two quarters late. **The newcomers are not fighting here, so this is the calmer pool.**",
            },
            {
                label: 'Wood coatings',
                text: "Clear and coloured finishes for furniture, doors and kitchens, from cheap melamine and lacquer to premium polyurethane (PU) and acrylic. **Sirca Paints** sells Italian-licensed premium finishes that architects and interior designers specify, plus two mass-market brands it bought. As furniture becomes factory-made, buyers move up from melamine to PU and acrylic. **Specification, not advertising, sells these products, which is why margins held up better; the weakness is heavy stock and long credit.**",
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
                    ['**Retail house paint through dealers**', 'Indigo, JSW Dulux, Kansai (house paints)', 'List price per litre, less dealer discounts, schemes and painter incentives; prices can be raised within weeks', 'Dealers get credit: debtor days of 61–74 in FY26, rising as the price war adds schemes'],
                    ['**Bulk supply to builders and projects**', 'JSW Dulux (about 20% of house paints), Kansai (10%-plus)', 'A negotiated price per project', 'Builders pay on contract terms; the companies do not disclose how fast'],
                    ['**Approved coatings on contract to factories**', 'Kansai (about 45% of Q1 sales), JSW Dulux (about 40%)', 'A contract price per litre for an approved paint system, revised on a schedule, one to two quarters after costs move', 'Car-makers and large factories pay on their own terms'],
                    ['**Specified wood finishes**', 'Sirca; Indigo from its new PU range', 'A premium price per litre pulled by architect specification, with about 30% sold directly to furniture makers', 'Slowest in the group: Sirca had 115 debtor days and 151 inventory days in FY26'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Indigo Paints',
        inShort: ["**A fast-growing house-paint challenger** with about 2.5% of the Indian market, selling emulsions, enamels, primers, putty and cement paint through about 19,400 dealers, plus niche paints it created itself.", "**Good:** Q1 FY27 revenue grew 19.7% with double-digit volume growth in every category, its gross margin has beaten the listed peers for 13 straight quarters, and the Jodhpur plant is done. **Watch:** management plans to give up to 2–2.5 points of gross margin on trade schemes to buy share, and a ₹19.26cr GST demand sits on its IPO expenses.", "**Verdict: follow.** The best economics in the group, but the price needs more growth than I expect."],
        tagline: "A Pune-based house-paint maker growing from a small base, known for self-created niche products such as floor, tile and metallic paints, with a waterproofing subsidiary.",
        revenue: '₹1,405cr (FY26, consolidated)',
        products: [
            { name: 'Emulsions, enamels and wood coatings', text: "Interior and exterior wall emulsions, enamels and wood coatings, the core of any house-paint range. In Q1 FY27 emulsions grew 17.1% in value (about 12% in volume) and enamels and wood coatings 17.6%. A two-pack PU wood-coating range launches in September–October 2026." },
            { name: 'Primers, distempers, putty and cement paint', text: "The cheaper base products applied before the top coat. Primers and distempers were the fastest-growing category in Q1 FY27 (+29.7%), putty and cement paint +21.2%. More than 90% of its putty is made in-house close to the raw materials, which helps its gross margin." },
            { name: 'Self-created niche products', text: "Floor coat, tile coat, metallic emulsions, PU enamels and similar paints it created, about **29–30% of revenue**, up from 25–26% at the 2021 IPO. The company claims 80–90% shares in some of these niches; management does not expect them to reach 35% of sales." },
            { name: 'Apple Chemie (waterproofing)', text: "A 51%-owned construction-chemicals and waterproofing maker selling to infrastructure contractors such as L&T and Afcons: ₹75cr of FY26 sales, up 40% in Q1 FY27. Indigo is raising its stake to 62%." },
        ],
        revenueText: "Almost all revenue is house paint sold through dealers: the parent sold **₹1,330cr in FY26** (standalone) and Apple Chemie ₹75cr. The company **does not split revenue by category**, only growth rates, but about **30% comes from its self-created products**. Its managing director puts its share of Indian paints at about 2.5%, against about half for the market leader.",
        mixes: [
            { caption: 'Revenue by product type, Q1 FY27 (company call)', parts: [{ label: 'Standard house paints', share: 70 }, { label: 'Self-created niche products', share: 30 }] },
            { caption: 'Revenue by company, FY26 (company call and Screener)', parts: [{ label: 'Indigo Paints (standalone)', share: 95 }, { label: 'Apple Chemie (waterproofing)', share: 5 }] },
        ],
        customers: ["**About 19,400 active dealers** in 28 states, served from 55 depots; 12,395 of them hold an Indigo tinting machine, which commits counter space to its colours. Machines rose by about 1,100 in a year.", "**Painters and contractors**, who often choose the brand for the homeowner; Indigo pays health cover for more than 30,000 painter families to keep them loyal.", "**Homeowners repainting or finishing new homes**, and, through Apple Chemie, infrastructure contractors such as L&T and Afcons."],
        difficulty: { level: 'Medium', text: "Making standard house paint is not hard, and three deep-pocketed newcomers have entered in the last few years. What is hard is winning dealer shelf space and tinting-machine slots, and creating niche products the leaders have not bothered with." },
        moat: "A gross margin of 45–49%, against a listed-peer average of 41–43% for 13 straight quarters, from in-house putty, plants near their inputs and niche products with pricing power. The weakness is a 2.5% share: when prices rise sharply dealers stock the leader first, and management is now choosing to spend its margin lead on growth.",
        salesDrivers: ["**Housing and repainting demand**: new homes add paint demand two to three years after launch; top-seven-city housing sales fell 6% in Q2 2026 while launches rose 7% (Anarock).", "**Buying share with trade spending**: a strategy set in May 2026 accepts 2–2.5 points lower gross margin to grow faster. The target is now about 10 points above industry growth, and a new chief business officer from ITC is re-targeting dealers.", "**Price rises**: it raised prices around 24–25 March 2026, ahead of the market leader on 8 April, after the West Asia war lifted crude-linked costs, so part of Q1's growth is price rather than paint sold.", "**Capacity is no longer a limit**: the 90,000 KL Jodhpur plant began trial production in late August 2026, three months late, lifting water-based capacity 52% to 2,62,000 KL a year. The gain is shorter freight to North, East and Central India; no major capex is due until FY29.", "**New products and waterproofing**: the two-pack PU wood-coating range (a ₹9,000cr segment on the company's estimate) and Apple Chemie, which management expects to grow 30%-plus."],
        inputs: "**Titanium dioxide** (the white pigment), **crude-linked monomers, resins and solvents**, fillers for putty, and **packaging** (tins and pails). Beyond materials, the costs it controls are dealer schemes, tinting machines and advertising, which was 4.3% of revenue in Q1 FY27 against 6.8% a year earlier. Materials were 53% of sales in FY26.",
        costEffect: "**Partly passed on.** Indigo raises prices within weeks when titanium dioxide or crude-linked chemicals jump, and moved before the leader in March 2026; but in a price war part of any saving is handed back through dealer discounts and painter schemes. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (18% to 13%). **What happened:** there is no single price index for its mix of inputs. Its operating margin has been steady at 17–18% for three years (18% in FY24, 17% in FY25, 18% in FY26) because its gross margin held at 45–49%; the swings are seasonal (22–23% in January–March, 14–17% in the monsoon half) and come from advertising and trade spending. Q1 FY27's 17% was helped by an industry-wide 45-day pause in trade discounts and skipped IPL advertising, money management says it will spend in Q2.",
        competitors: [
            { name: 'Asian Paints and Berger', note: 'The house-paint leaders (55–60% and about 17–18% of the market) set the prices; when prices rise sharply, dealers stock them first.' },
            { name: 'Birla Opus, JSW Paints and Haisha (Pidilite)', note: 'Newcomers adding capacity and spending heavily on dealers and painters; the reason Indigo is raising its own trade spending.' },
            { name: 'Kansai Nerolac and JSW Dulux', note: 'Listed mid-sized rivals with lower gross margins; JSW Dulux grew volume faster in Q1 after cutting its prices.' },
        ],
        position: "**About 2.5% of Indian paints** (managing director's estimate): a small challenger with the best gross margin among listed paint makers and leading positions in several self-created niches.",
        money: "**₹311cr of net cash** on Screener: borrowings of ₹21cr, mostly leases, against ₹300cr of investments at March 2026. The Jodhpur plant (₹220cr of unfinished plant at March) is the last big spend; with no major capex until FY29, free cash (₹88cr in FY26) should rise. It guarantees ₹18cr of Apple Chemie's bank lines and is appealing a ₹19.26cr GST demand on its IPO expenses. Dividend ₹5 a share for FY26. Promoters hold **53.9%**, unchanged over three years.",
        watch: ["Q2 and Q3 growth near 20% with gross margin above 45%.", "Debtor days (74 in FY26) as trade schemes rise.", "Jodhpur reaching commercial output; the GST appeal."],
        charts: consumerDurablesCharts['Indigo Paints'],
    },
    {
        company: 'Kansai Nerolac',
        inShort: ["**India's leader in car and powder coatings and its third-largest house-paint maker**, 75% owned by Kansai Paint of Japan and selling under the Nerolac brand.", "**Good:** more than ₹2,500cr of cash and liquid investments, a AAA rating, and in Q1 FY27 its best quarter in two years (revenue +9.8%, margin 13.8%). **Bad:** house-paint volume grew in low single digits against the leader's 9%, and car-makers pay price rises one to two quarters late.", "**Verdict: follow.** A sound, cash-rich franchise, but the price needs more growth than I expect."],
        tagline: "A Japanese-owned paint maker selling Nerolac house paints and factory coatings to car, two-wheeler, tractor, appliance and infrastructure makers.",
        revenue: '₹8,052cr (FY26, consolidated)',
        products: [
            { name: 'House paints', text: "Interior and exterior emulsions, enamels and wood finishes, plus newer waterproofing, construction chemicals (Perma) and tile adhesives, which are slightly above 10% of house-paint sales. Projects for builders are also 10%-plus." },
            { name: 'Car and vehicle coatings', text: "Complete paint systems for cars, two- and three-wheelers, commercial vehicles and tractors, including alloy-wheel, underbody and sealer products, and car-repair (refinish) paints. It says it is the only Indian maker of the full range of car-paint resins." },
            { name: 'Powder and general industrial coatings', text: "Powder coatings for appliances and metal parts, and liquid high-performance coatings for infrastructure, railways and coil. It aims to lead non-car industrial coatings within about two years." },
            { name: 'Subsidiaries', text: "Nepal (₹76cr revenue, ₹6cr profit) and a loss-making Bangladesh unit (revenue down from ₹143cr to ₹91cr, loss ₹27.6cr). Nerofix, a construction-chemicals arm (₹164cr, loss ₹7.6cr), is being merged in; Sri Lanka was sold in December 2025." },
        ],
        revenueText: "Kansai reports a single ‘paints’ segment and **does not split revenue** between house paints and industrial. On the Q1 FY27 call management said industrial was ‘maybe 45’ per cent of the quarter, which is the house-paint-heavy season. In Q1 **house paints grew high single digits in value, industrial double digits**, and car refinish was flat.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (management estimate on the call)', parts: [{ label: 'House paints', share: 55 }, { label: 'Industrial and car coatings', share: 45 }], note: 'Not a published split; management said industrial was ‘maybe 45’ per cent this quarter.' },
        ],
        customers: ["**35,000-plus dealers** holding more than 20,000 tinting machines, served from 100-plus depots; 1,700 dealers were added in Q1 FY27 and 65,000 painters took part in its painter programme.", "**Car, two-wheeler, commercial-vehicle and tractor makers**, including Toyota Kirloskar, Maruti Suzuki, Suzuki Motorcycle and TAFE, all of which gave it supplier awards.", "**Appliance, infrastructure, railway and coil makers** buying powder and industrial coatings, and builders buying house paint for projects."],
        difficulty: { level: 'High', text: "House paint is easy to make but costly to sell. Car coatings are hard: each paint system is approved for a model, colours must match across plants, and resins are made to specification, so a car-maker rarely changes supplier during a model's life." },
        moat: "Car-maker approvals and Japanese technology make it the leader in car and powder coatings, and its house-paint brand has awareness of 95%-plus. The weakness is price: car-makers push back on increases, and in house paints it is losing volume share to bigger spenders.",
        salesDrivers: ["**Vehicle and factory output**: industrial grew double digits in Q1 FY27 and Kansai gained share with car-makers in FY26; alloy wheels, underbody coatings and electric vehicles add new uses.", "**House-paint demand and the price war**: volume grew only in low single digits in Q1 against the leader's 9%; management says it is walking away from low-margin economy paint and sees ‘no point in getting into this mad rush of market share’.", "**Price rises**: four house-paint increases between March and May 2026 add up to the low teens, and industrial about 5%; about 3% more in house paints and 3–5% in industrial are planned for Q2.", "**Industrial capacity**: ₹601cr at Sayakha (Gujarat), Bawal (Haryana) and Hosur (Tamil Nadu) adds 65,880 KL a year of paint and powder and 9,780 KL of resin, phased to FY28–29 and paid from its own cash; the industrial plants already run at 70–75%. Management expects about one-time asset turns and a return ‘towards 18%’, against 12% today.", "**Newer businesses**: waterproofing, construction chemicals and wood finishes, slightly above 10% of house-paint sales, with Nerofix being merged in."],
        inputs: "**Titanium dioxide** (the white pigment), **crude-linked monomers, resins and solvents**, pigments and **packaging**; it makes some of its own car-paint resins. CRISIL puts raw materials at 55–60% of sales. Materials were 58% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** House-paint prices move within weeks (four rises in March–May 2026), but car-makers renegotiate on a schedule, so industrial increases arrive one to two quarters late; that cost about 1.3 points of industrial contribution in Q1 FY27. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (12% to 6%). **What happened:** there is no single price index for its inputs. The operating margin slipped from 13% in FY24 to 12% in FY25 and FY26 while revenue barely grew (+2.9% in FY26) and the newcomers kept dealer schemes and painter incentives high; CRISIL notes it has swung between 10% and 17% over a decade. Q1 FY27's 13.8% was helped by cheaper, older stock; Q2 carries dearer stock, to be offset by further increases.",
        competitors: [
            { name: 'Asian Paints and Berger', note: 'Lead house paints; Asian Paints grew volume 9% in Q1 FY27 while Kansai managed low single digits.' },
            { name: 'Birla Opus, JSW Paints and Haisha', note: 'Newcomers keeping competition high; Kansai sees no let-up in dealer schemes and painter incentives, and freebies in some markets.' },
            { name: 'JSW Dulux', note: 'About 7% of industrial paints, aiming to lead them by 2031, with recent wins at Porsche, MG and Mahindra.' },
        ],
        position: "**Leader in car and powder coatings and third in house paints** in India, where its brand ranks second on top-of-mind awareness.",
        money: "**₹2,288cr of net cash** on Screener; the company counts more than ₹2,500cr of cash and liquid investments against ₹303cr of borrowings, mostly leases. Rated CRISIL AAA/Stable (August 2026). The ₹601cr expansion plus ₹150–200cr a year of normal spending (about ₹400–450cr a year for two to two-and-a-half years) comes from its own cash; FY26 free cash was ₹681cr and the dividend ₹2.50 a share, about half of profit. It guarantees the Bangladesh subsidiary's bank loan. Promoters (Kansai Paint, Japan) hold **75.0%**, unchanged over three years, with no pledges.",
        watch: ["House-paint volume against the leader's.", "Margin holding 13–14% as dearer stock flows through in Q2.", "Any plan for the cash pile beyond the ₹601cr expansion."],
        charts: consumerDurablesCharts['Kansai Nerolac'],
    },
    {
        company: 'Akzo Nobel',
        inShort: ["**JSW Dulux, the former Akzo Nobel India** (the dashboard still lists it as Akzo Nobel): Dulux house paints, Sadolin wood care and industrial coatings, 61.2% owned by JSW Paints since December 2025.", "**Good:** volume grew 25% in Q1 FY27 as JSW widened distribution and cut Dulux's old price premium, and it has spare plants to grow into. **Bad:** the margin fell to 11.9% from about 16% two years ago, FY26 operating cash was only ₹93cr, and a whistle-blower complaint was under investigation at the year-end audit.", "**Verdict: wait.** Wait for the margin to return to the promised 13–15% and for the terms of any merger with JSW Paints."],
        tagline: "India's fourth-largest paint maker and owner of the Dulux brand in India, now run alongside its unlisted sister company JSW Paints.",
        revenue: '₹3,599cr (FY26, consolidated)',
        products: [
            { name: 'Dulux house paints', text: "Premium and mid-market emulsions (Velvet Touch, Weathershield, Promise) and Aquatech waterproofing. Premium is about 45% of its house-paint sales, against about 22% for the market. The company bought the Dulux brand for India from AkzoNobel for ₹1,152cr in July 2025, which ended royalty on these sales." },
            { name: 'Sadolin wood care', text: "Wood finishes and stains sold through the same dealers as Dulux. The company does not give a separate figure." },
            { name: 'Vehicle refinish and specialty coatings', text: "Car-repair paints under Sikkens and Lesonal, plus coatings for car plastics and other specialty uses, with recent wins at Porsche, MG (a JSW-group company) and Mahindra. These international brands still belong to AkzoNobel and are used under licence." },
            { name: 'Marine, protective and coil coatings', text: "Coatings for ships, steel structures and coil (pre-painted steel sheet) under the International brand; its coil coatings went into the Navi Mumbai airport. The powder-coatings business was sold to AkzoNobel for ₹2,073cr in July 2025." },
        ],
        revenueText: "House paints and wood care are **about 60% of revenue** and industrial coatings about 40%. Within house paints, **premium is about 45%**, projects about 20% and retail 80%, of which about three-quarters goes through distributors. Filed revenue fell to ₹3,599cr in FY26 after the powder-coatings sale, so management quotes like-for-like growth, which was **18.8% in Q1 FY27**.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company call)', parts: [{ label: 'House paints and wood care', share: 60 }, { label: 'Industrial coatings', share: 40 }] },
            { caption: 'House-paint sales by price tier (company calls)', parts: [{ label: 'Premium', share: 45 }, { label: 'Mid-market and economy', share: 55 }], note: 'The market as a whole sells about 22% premium.' },
        ],
        customers: ["**About 22,000 retailers**, most served through distributors, with a meaningful presence in 3,400–3,500 towns (5,000-plus in all) and a target of 4,500 this year; it now sells directly in the top 20 towns.", "**Builders and painters**: projects are about 20% of house paints, and a new painter programme tries to fix what management admits were historically lower painter incentives than rivals'.", "**About 4,000 business customers**: car-makers, body shops, shipyards, and steel-structure and coil makers."],
        difficulty: { level: 'High', text: "House paint needs dealer reach and tinting machines more than technology. Refinish, marine and coil coatings need proven formulations, colour-matching systems and customer approvals, which is why it still licenses AkzoNobel's international industrial brands." },
        moat: "Dulux is a top-tier premium brand with strongholds in Bengal, Gujarat, Punjab and Delhi (8–10% share in some states), and JSW's money now widens its reach. The weakness is that the old 7–9% price premium has been cut to about 2%, so it is winning volume on price, and it holds only about 5% of house paints.",
        salesDrivers: ["**Wider distribution under JSW**: from 3,400–3,500 meaningful towns towards 4,500, direct selling in the top 20 towns, about 160 new sales and research staff, and a painter programme.", "**Lower prices**: premiums were cut in September–October 2025; volume rose 23% in Q4 FY26 and 25% in Q1 FY27, and like-for-like revenue growth jumped from 6.2% to 18.8% as the effect of the price cuts faded.", "**Industrial wins**: about 7% of industrial paints and a goal to lead them by 2031, with wins at Porsche, MG and Mahindra and coil for the Navi Mumbai airport.", "**Spare plants and sharing with JSW Paints**: house-paint plants run at 55–60%, and it now makes JSW Paints products at Gwalior and Mohali (and JSW Paints makes some of its products), so growth needs little new money. ‘Serious’ capex, including more industrial capacity at Bengaluru, is promised but not sized.", "**Industry pricing**: raw materials rose 24–25% after the West Asia war, and management said the industry still needed about 3–4% more pricing."],
        inputs: "**Titanium dioxide** (the white pigment), **crude-linked monomers, resins and solvents**, pigments and **packaging**. Rebates and discounts, including a 4.5–4.7% distributor margin, reach about 25% of gross revenue. Materials were 59% of sales in FY26.",
        costEffect: "**Partly passed on, but late.** It holds only about 60 days of house-paint stock, so it bought at the peak after the war and lost about 2 points of margin in Q1 FY27; it prices against the market leader, not the newcomers. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (14% to 8%). **What happened:** there is no single price index for its inputs. The operating margin fell from 16% in FY24 and FY25 to 14% in FY26 and 11.9% in Q1 FY27, mostly by choice: price cuts to the Dulux premium, 160 hires and more painter promotions. About 2.5 points of the Q1 fall is only accounting, from moving painter promotions out of costs and into lower revenue, which does not change the cash.",
        competitors: [
            { name: 'Asian Paints and Berger', note: 'Its price benchmark: Dulux is now about 2% above the leader on some premium lines and at par with Berger in mid-market.' },
            { name: 'Birla Opus and Haisha', note: 'Newcomers still discounting; management expects the market to stay ‘very competitive for the next 1-2 years’.' },
            { name: 'JSW Paints', note: 'Its unlisted sister and a newcomer in its own right; they share plants, a projects team and an HR head, and a merger is widely expected but not announced.' },
            { name: 'Kansai Nerolac', note: 'The leader in car and powder coatings, the industrial market JSW Dulux aims to lead by 2031.' },
        ],
        position: "**Fourth in Indian paints**, with about 5% of house paints and 7% of industrial paints; together with JSW Paints it aims for second place overall by 2030–31.",
        money: "**₹245cr of net cash** on Screener; no bank debt (₹79cr of leases), and ICRA put unencumbered cash at ₹324cr at March 2026 (rated AA-/Stable, September 2026). FY26 cash went on the ₹1,152cr brand purchase and about ₹940cr of dividends (₹206 a share, including a ₹156 special from the powder-coatings sale); FY26 capex was only ₹47cr. A ₹108cr tax refund arrived in Q1 FY27. JSW Paints holds **61.2%**; AkzoNobel held 74.8% in September 2023 and sold out in December 2025.",
        watch: ["Margin back inside 13–15% by Q3.", "The SAP systems switch around Diwali.", "Any merger ratio with JSW Paints; the whistle-blower outcome."],
        charts: consumerDurablesCharts['Akzo Nobel'],
    },
    {
        company: 'Sirca Paints',
        inShort: ["**A premium wood-finish specialist**: polyurethane (PU) and acrylic coatings for furniture, doors and kitchens under a licence from Sirca of Italy, plus the cheaper Wembley and Welcome brands.", "**Good:** about 15% of the premium wood-finish segment, 18–21% margins and little plant needed. **Bad:** FY26's 32% growth was largely bought, working capital ties up about 193 days, and Q1 FY27 grew 13.8% against a promised 25–30% with no call held.", "**Verdict: pass.** Stay away until growth is back above 20% and debtors are falling."],
        tagline: "A wood-coatings maker selling Italian-licensed premium finishes on architect specification, mostly in North India, plus two mass-market brands it bought in FY25.",
        revenue: '₹492cr (FY26, consolidated)',
        products: [
            { name: 'Sirca finishes, imported', text: "Italian-made PU, acrylic, polyester and UV finishes bought from Sirca S.p.A., about ₹124cr of FY26 sales. The brand and technology licence runs to 2041, with a royalty of 0.75% of revenue." },
            { name: 'Sirca finishes, made in India', text: "About ₹252cr in FY26. Making 11 PU product sets locally cut costs about 20%, and local acrylic, polyester and UV production began in Q1 FY27. Acrylic, the fastest-growing premium line, sells about ₹120cr in all." },
            { name: 'Wembley and Welcome', text: "Mass-market brands bought in FY25: nitrocellulose lacquers, sanding sealer, melamine and thinners. Wembley sold ₹74cr and Welcome ₹46.5cr in FY26; Wembley's gross margin is 10–15 points below Sirca's." },
            { name: 'Oikos and Unico textures', text: "Decorative wall textures, a small line; the company does not give its sales." },
        ],
        revenueText: "Of FY26's ₹492cr, the **Sirca brand was about ₹372cr** (₹124cr imported, ₹252cr made in India), **Wembley ₹74cr** and **Welcome ₹46.5cr**. About **70% is retail** through 4,000-plus dealers, pulled by architect specification, and 30% goes directly to furniture, kitchen and door makers. About **80% of revenue is from North India**; exports are only about ₹9cr.",
        mixes: [
            { caption: 'Revenue by brand, FY26 (Q4 call)', parts: [{ label: 'Sirca, made in India', share: 51 }, { label: 'Sirca, imported', share: 25 }, { label: 'Wembley', share: 15 }, { label: 'Welcome', share: 9 }], note: 'The company’s approximate figures; they add to slightly more than the filed ₹492cr.' },
            { caption: 'Revenue by channel (Q1 FY27 presentation)', parts: [{ label: 'Retail, through dealers', share: 70 }, { label: 'Furniture, kitchen and door makers', share: 30 }] },
        ],
        customers: ["**Architects and interior designers**, who in management's words ‘specify like a doctor’; 4,000-plus dealers fill the orders and 25,000-plus contractors use its app.", "**900-plus furniture, kitchen and door makers**, such as Godrej and Spacewood, buying directly: about 30% of revenue.", "**Homeowners and builders, mostly in North India** (about 80% of revenue); five of its 20 depots opened in the South and West last year."],
        difficulty: { level: 'Medium', text: "Wood finishes need colour, gloss and durability that architects trust, and Sirca borrows Italian formulations under a licence to 2041. But the chemistry is not rare: rivals copied its move to local production and matched its price cuts." },
        moat: "Architect specification and 20-year relationships pull its retail sales, and management says the big paint makers are a ‘lesser challenge’ in premium finishes. The weakness is limited pricing power: of a 20% cost saving from local production it passed 12–15 points to customers because competitors followed.",
        salesDrivers: ["**Shift from melamine to PU and acrylic**: factory-made furniture and furniture quality (BIS) rules move buyers to better finishes; PU sells at about ₹450–460 a litre against ₹230–240 for melamine, about 10% more per square foot finished.", "**New regions and exports**: new depots in the South and West, and a target of exports at 3–4% of revenue, including Wembley Valentino to the Middle East.", "**Price rises**: Sirca +5% in April and +5% in May 2026 after crude-linked costs rose; Wembley and Welcome about ₹35 a litre.", "**The acquired brands**: management promised 40% growth from Wembley and Valentino in FY27, but Wembley was flat in its first year (₹74cr against about ₹72cr at purchase).", "**Capacity is not a limit**: plants can support ₹750–800cr of revenue against ₹508cr today, and FY27 capex is only ₹5–6cr. The target of ₹1,000cr by FY29 looks stretched now that growth guidance has been softened to ‘double-digit’."],
        inputs: "**Crude-linked solvents and resins, about 95% of raw materials**, plus imported acrylic (six months held as safety stock), nitrocellulose cotton for lacquers, and **packaging**. About a quarter of sales are finished goods imported from Italy, so the rupee matters too. Materials were 54% of sales in FY26.",
        costEffect: "**Partly passed on.** It raised prices 10% in two steps in April–May 2026, but imports and freight add to costs when the rupee weakens or shipping is disrupted, and a nitrocellulose-cotton shortage cost ₹4–5cr of March sales. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (20% to 15%). **What happened:** there is no single price index for its inputs. Its operating margin went from 22% in FY24 to 18% in FY25, the year it bought the lower-margin Wembley and Welcome, back to 20% in FY26 as local production cut costs, then 18.6% in Q1 FY27, which the company put down to crude-linked inputs, freight and industry pricing. Localisation savings went mostly to customers, so gross margin rose but operating margin did not.",
        competitors: [
            { name: 'Large paint makers', note: 'Management calls them a ‘lesser challenge’ in premium finishes; competition bites in the mass segment where Wembley and Welcome sit. Indigo launches a two-pack PU range in September–October 2026.' },
            { name: 'Other wood-finish makers', note: 'Not named on the calls; they copied its move to local production, forcing it to pass most of the saving on as lower prices.' },
        ],
        position: "**About 15% of India's premium PU and acrylic wood-finish segment** and 4–4.5% of a wood-coatings market of about ₹9,500cr (company estimates); it targets 10% of the whole by 2030.",
        money: "**₹83cr of net cash** on Screener: borrowings ₹32cr against about ₹43cr of cash and ₹57cr of investments at March 2026. It raised ₹75cr from non-promoter investors in September 2025 at ₹379.50 a share. Capex is tiny (₹13.5cr in FY26, ₹5–6cr in FY27), but working capital is heavy: operating cash was ₹44cr against ₹99cr of operating profit, and ₹100.75cr of goodwill from the Wembley and Welcome purchase sits on the balance sheet. No credit rating. Promoters hold **65.2%**, down from 67.6% because of the share issue.",
        watch: ["Growth back above 20% in Q2–Q3.", "Debtor and inventory days falling as promised.", "Wembley growing in its second year; whether it holds a call."],
        charts: consumerDurablesCharts['Sirca Paints'],
    },
];

export const consumerDurablesPaintsBusinesses = { intro, profiles };
