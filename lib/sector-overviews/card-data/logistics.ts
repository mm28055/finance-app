import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const logisticsCharts: Record<string, ProfileCharts> = {
    "Aegis Logistics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                9.3,
                16.8,
                11.3,
                16.7,
                14.5,
                12.8,
                13.6,
                24.0,
                14.0,
                12.7,
                17.2,
                24.1,
                30.3
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                98,
                97,
                97,
                94,
                95,
                95,
                96,
                119
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                535.0,
                672.0,
                923.0,
                1098.0,
                1452.0
            ],
            "ocf": [
                280.0,
                358.0,
                656.0,
                558.0,
                2028.0
            ],
            "fcf": [
                -113.0,
                -180.0,
                40.0,
                -387.0,
                1207.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹45cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                58,
                21
            ],
            "inventoryDays": [
                9,
                7
            ],
            "payableDays": [
                63,
                40
            ],
            "cycleDays": [
                3,
                -12
            ],
            "absorbed5y": 381,
            "receivables5y": -395,
            "inventory5y": -75,
            "payables5y": 642
        }
    },
    "Delhivery": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 75
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 6
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                -0.7,
                -0.8,
                4.8,
                2.2,
                4.4,
                2.3,
                4.2,
                5.4,
                6.1,
                2.7,
                7.5,
                7.5,
                4.7
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                98,
                97,
                97,
                94,
                95,
                95,
                96,
                119
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                -475.0,
                -452.0,
                127.0,
                376.0,
                640.0
            ],
            "ocf": [
                -241.0,
                -30.0,
                472.0,
                567.0,
                911.0
            ],
            "fcf": [
                -785.0,
                -631.0,
                -93.0,
                84.0,
                489.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "272.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "48.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,742cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "6%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                53,
                48
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                53,
                48
            ],
            "absorbed5y": -406,
            "receivables5y": -594,
            "inventory5y": 2,
            "payables5y": 382
        }
    },
    "Shadowfax Tech.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 27
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 58
                },
                {
                    "label": "Operating profit",
                    "share": 6
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                3.0,
                1.7,
                3.0,
                4.0,
                5.7,
                6.5,
                6.8
            ],
            "index": [
                100,
                101,
                97,
                98,
                98,
                100,
                123
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                -107.0,
                19.0,
                63.0,
                221.0
            ],
            "ocf": [
                -73.0,
                132.0,
                50.0,
                350.0
            ],
            "fcf": [
                -120.0,
                79.0,
                -36.0,
                165.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "99.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "57.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹786cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                40,
                45
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                40,
                45
            ],
            "absorbed5y": 199,
            "receivables5y": -327,
            "inventory5y": null,
            "payables5y": 265
        }
    },
    "TVS Supply Chain Sol": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 19
                },
                {
                    "label": "Power and factory costs",
                    "share": 47
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 7
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Diesel price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
                "Q3 FY24",
                "Q4 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q4 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                7.4,
                8.2,
                7.3,
                6.8,
                7.2,
                7.6,
                6.2,
                6.8,
                6.8,
                6.8,
                7.6,
                7.2,
                6.7
            ],
            "index": [
                100,
                101,
                102,
                101,
                98,
                98,
                97,
                97,
                94,
                95,
                95,
                96,
                119
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                621.0,
                672.0,
                705.0,
                673.0,
                778.0
            ],
            "ocf": [
                601.0,
                734.0,
                128.0,
                672.0,
                746.0
            ],
            "fcf": [
                485.0,
                589.0,
                4.0,
                497.0,
                468.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "82.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,031cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "7%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                52,
                55
            ],
            "inventoryDays": [
                92,
                95
            ],
            "payableDays": [
                458,
                320
            ],
            "cycleDays": [
                -314,
                -170
            ],
            "absorbed5y": -516,
            "receivables5y": -449,
            "inventory5y": -218,
            "payables5y": 261
        }
    },
    "Allcargo Global": {
        "stats": [
            {
                "label": "P/E",
                "value": "n/a",
                "note": "Loss-making: net loss of ₹290cr in FY26."
            },
            {
                "label": "EV/EBITDA",
                "value": "28.7x",
                "note": "Market value plus net debt incl. leases, ÷ operating profit over the last year (₹71cr)."
            },
            {
                "label": "Net debt",
                "value": "₹942cr",
                "note": "Borrowings including ₹399cr of leases, minus cash and short-term investments, March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "0.1%"
            },
            {
                "label": "Global LCL share",
                "value": "14.5%",
                "note": "Company's own estimate, Q1 FY27 call."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "Q1 FY27",
            "parts": [
                {
                    "label": "Freight and direct costs",
                    "share": 79
                },
                {
                    "label": "Staff and admin",
                    "share": 20
                },
                {
                    "label": "Operating profit",
                    "share": 1
                }
            ],
            "note": "From the Q1 FY27 call: gross profit ₹733cr on ₹3,522cr revenue, staff plus other costs about ₹705cr. A full FY26 expense split was not available."
        },
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                62,
                57
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                62,
                57
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                133,
                336,
                11
            ],
            "ocf": [
                -220,
                0,
                89
            ],
            "fcf": [
                -267,
                -4,
                86
            ],
            "note": "FY24 is eight months (after the restructuring). Screener, consolidated."
        }
    },
    "Glottis": {
        "stats": [
            {
                "label": "P/E",
                "value": "13.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.9x",
                "note": "Market value minus net cash, ÷ operating profit over the last year (₹49cr)."
            },
            {
                "label": "Net cash",
                "value": "₹47cr",
                "note": "Cash and short-term investments minus borrowings, March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "7%"
            },
            {
                "label": "Debtor days FY26",
                "value": "87",
                "note": "41 in FY25; 77 at June 2026 by the company's count."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                27,
                87
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                27,
                87
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                34,
                41,
                79,
                50
            ],
            "ocf": [
                25,
                7,
                5,
                -69
            ],
            "fcf": [
                25,
                2,
                -2,
                -89
            ],
            "note": "Screener, standalone."
        }
    },
    "Blue Water Logistics": {
        "stats": [
            {
                "label": "P/E",
                "value": "16.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last four quarters."
            },
            {
                "label": "Net debt",
                "value": "₹92cr",
                "note": "Borrowings of ₹108cr minus about ₹16cr of cash (CFO), March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            },
            {
                "label": "Debtor days FY26",
                "value": "134",
                "note": "Up from 70 in FY24; management says it gives up to 90 days of credit."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Freight and other running costs",
                    "share": 86
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "FY26 filed results: running costs about ₹330cr (carrier freight, handling and all other expenses together), staff ₹12cr, on ₹386cr of sales. Rounded."
        },
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                74,
                134
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                74,
                134
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                4,
                10,
                19,
                44
            ],
            "ocf": [
                -14,
                4,
                -9,
                -53
            ],
            "fcf": [
                -17,
                2,
                -14,
                -80
            ],
            "note": "FY23 covers seven months (the company took over the partnership in August 2022). Screener."
        }
    },
    "Skyways Air Services": {
        "stats": [
            {
                "label": "P/E",
                "value": "28.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.5x",
                "note": "Market value plus March 2026 net debt, ÷ operating profit over the last four quarters. The August IPO money is not yet in the debt figure."
            },
            {
                "label": "Net debt",
                "value": "₹230cr",
                "note": "Borrowings of ₹627cr minus ₹397cr of cash and deposits (₹267cr pledged), March 2026, before the ₹399cr fresh issue."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "45%",
                "note": "Operating cash ÷ operating profit over FY22–FY26; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "4.6%"
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Freight paid to carriers",
                    "share": 89
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 5
                }
            ],
            "note": "Restated consolidated FY26 (prospectus): cost of services ₹2,507cr, staff ₹117cr, other ₹62cr on ₹2,813cr of sales. Rounded."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                56,
                75
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                56,
                75
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                75,
                65,
                49,
                88,
                129
            ],
            "ocf": [
                5,
                69,
                -9,
                2,
                114
            ],
            "fcf": [
                18,
                36,
                -65,
                -57,
                55
            ]
        }
    },
    "Leap India": {
        "stats": [
            {
                "label": "P/E",
                "value": "98.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.1x",
                "note": "Market value plus March 2026 net debt (before the ₹480cr IPO money), ÷ operating profit over the last four quarters. Depreciation takes over half of operating profit."
            },
            {
                "label": "Net debt",
                "value": "₹1,144cr",
                "note": "Borrowings and leases minus cash, March 2026 (prospectus)."
            },
            {
                "label": "Operating margin FY26",
                "value": "49%"
            },
            {
                "label": "Return on capital FY26",
                "value": "8%",
                "note": "Screener ROCE."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Bought-in goods for resale",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs (transport, repairs, labour, rent)",
                    "share": 29
                },
                {
                    "label": "Operating profit",
                    "share": 49
                }
            ],
            "note": "Restated consolidated FY26 (prospectus): stock-in-trade ₹30cr, staff ₹128cr, other expenses ₹210cr on ₹730cr of sales. Depreciation (₹204cr) and interest (₹94cr) come out of the operating profit. Rounded."
        },
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                123,
                131
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                123,
                131
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY21",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                84,
                121,
                203,
                255,
                361
            ],
            "ocf": [
                86,
                153,
                149,
                255,
                268
            ],
            "fcf": [
                39,
                42,
                -154,
                2,
                -94
            ],
            "note": "Screener; FY22 not shown. Free cash is before lease payments (₹93cr of principal in FY26)."
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const logisticsValuationInputs: Record<string, ValuationInput> = {
    "Aegis Logistics": {
        "netDebt": -45,
        "ttmEbitda": 1926.0,
        "mcapAtWriting": 49335.0,
        "peAtWriting": 39.4
    },
    "Delhivery": {
        "netDebt": -1742,
        "ttmEbitda": 630.0,
        "mcapAtWriting": 32414.0,
        "peAtWriting": 272.0
    },
    "Shadowfax Tech.": {
        "netDebt": -786,
        "ttmEbitda": 278.0,
        "mcapAtWriting": 16770.0,
        "peAtWriting": 99.2
    },
    "TVS Supply Chain Sol": {
        "netDebt": 2031,
        "ttmEbitda": 830.0,
        "mcapAtWriting": 5837.0,
        "peAtWriting": 82.4
    },
    "Allcargo Global": {
        "netDebt": 942,
        "ttmEbitda": 71,
        "mcapAtWriting": 1096,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Glottis": {
        "netDebt": -47,
        "ttmEbitda": 49,
        "mcapAtWriting": 484,
        "peAtWriting": 13.3
    },
    "Blue Water Logistics": {
        "netDebt": 92,
        "ttmEbitda": 61,
        "mcapAtWriting": 581,
        "peAtWriting": 16.3
    },
    "Skyways Air Services": {
        "netDebt": 230,
        "ttmEbitda": 152,
        "mcapAtWriting": 1520,
        "peAtWriting": 28.5
    },
    "Leap India": {
        "netDebt": 1144,
        "ttmEbitda": 380,
        "mcapAtWriting": 5734,
        "peAtWriting": 98.3
    }
};
