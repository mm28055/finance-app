import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const constructionPowerCharts: Record<string, ProfileCharts> = {
    "Kalpataru Proj.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 34
                },
                {
                    "label": "Power and factory costs",
                    "share": 41
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 9
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                9.0,
                8.2,
                8.7,
                7.6,
                8.3,
                8.9,
                8.4,
                7.6,
                8.5,
                8.6,
                7.7,
                8.2,
                8.8
            ],
            "index": [
                100,
                98,
                97,
                93,
                93,
                90,
                87,
                86,
                89,
                87,
                84,
                89,
                94
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
                1295.0,
                1490.0,
                1814.0,
                2031.0,
                2432.0
            ],
            "ocf": [
                714.0,
                656.0,
                843.0,
                914.0,
                1534.0
            ],
            "fcf": [
                406.0,
                -115.0,
                491.0,
                339.0,
                724.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,701cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "9%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                113,
                113
            ],
            "inventoryDays": [
                62,
                69
            ],
            "payableDays": [
                241,
                276
            ],
            "cycleDays": [
                -66,
                -94
            ],
            "absorbed5y": -2624,
            "receivables5y": -10293,
            "inventory5y": -666,
            "payables5y": 8338
        }
    },
    "Techno Electric &Eng": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 79
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
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
                7.7,
                16.9,
                17.1,
                12.3,
                13.9,
                15.9,
                14.2,
                15.6,
                17.5,
                13.2,
                14.4,
                13.1,
                15.9
            ],
            "index": [
                100,
                98,
                96,
                98,
                109,
                108,
                107,
                110,
                114,
                117,
                124,
                140,
                149
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
                159.0,
                87.0,
                210.0,
                339.0,
                462.0
            ],
            "ocf": [
                259.0,
                93.0,
                -198.0,
                453.0,
                -590.0
            ],
            "fcf": [
                225.0,
                27.0,
                -378.0,
                285.0,
                -657.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,316cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "1%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                213,
                137
            ],
            "inventoryDays": [
                13,
                0
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                22,
                137
            ],
            "absorbed5y": -976,
            "receivables5y": -686,
            "inventory5y": -8,
            "payables5y": 826
        }
    },
    "KEC International": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 48
                },
                {
                    "label": "Power and factory costs",
                    "share": 31
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                5.7,
                6.1,
                6.2,
                6.3,
                6.0,
                6.3,
                7.0,
                7.8,
                7.0,
                7.1,
                7.2,
                7.0,
                5.8
            ],
            "index": [
                100,
                98,
                97,
                93,
                93,
                90,
                87,
                86,
                89,
                87,
                84,
                89,
                94
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
                1001.0,
                920.0,
                1359.0,
                1683.0,
                1869.0
            ],
            "ocf": [
                -284.0,
                614.0,
                311.0,
                419.0,
                -414.0
            ],
            "fcf": [
                -427.0,
                436.0,
                74.0,
                236.0,
                -743.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,866cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "9%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "8%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                136,
                101
            ],
            "inventoryDays": [
                65,
                50
            ],
            "payableDays": [
                420,
                351
            ],
            "cycleDays": [
                -219,
                -201
            ],
            "absorbed5y": -5154,
            "receivables5y": -3185,
            "inventory5y": -614,
            "payables5y": 4449
        }
    },
    "Transrail Lighting": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 26
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
            "periods": [
                "Q2 FY24",
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
                12.0,
                12.1,
                13.1,
                12.7,
                13.2,
                12.1,
                12.0,
                11.8,
                12.6,
                11.1,
                11.6
            ],
            "index": [
                100,
                95,
                95,
                92,
                88,
                88,
                91,
                88,
                86,
                91,
                96
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
                247.0,
                364.0,
                559.0,
                776.0,
                941.0
            ],
            "ocf": [
                46.0,
                143.0,
                35.0,
                287.0,
                643.0
            ],
            "fcf": [
                -34.0,
                89.0,
                6.0,
                145.0,
                394.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹85cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "40%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                100,
                92
            ],
            "inventoryDays": [
                86,
                91
            ],
            "payableDays": [
                329,
                330
            ],
            "cycleDays": [
                -144,
                -147
            ],
            "absorbed5y": -750,
            "receivables5y": -1738,
            "inventory5y": -531,
            "payables5y": 1724
        }
    },
    "Skipper": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                10.8,
                9.6,
                9.6,
                9.4,
                9.6,
                10.0,
                9.8,
                9.6,
                10.1,
                10.4,
                10.3,
                10.4,
                10.7
            ],
            "index": [
                100,
                98,
                97,
                93,
                93,
                90,
                87,
                86,
                89,
                87,
                84,
                89,
                94
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
                165.0,
                193.0,
                321.0,
                455.0,
                575.0
            ],
            "ocf": [
                17.0,
                284.0,
                199.0,
                153.0,
                277.0
            ],
            "fcf": [
                -25.0,
                199.0,
                97.0,
                -85.0,
                -89.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹899cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                93,
                98
            ],
            "inventoryDays": [
                251,
                109
            ],
            "payableDays": [
                200,
                176
            ],
            "cycleDays": [
                144,
                30
            ],
            "absorbed5y": -684,
            "receivables5y": -1057,
            "inventory5y": -457,
            "payables5y": 1059
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const constructionPowerValuationInputs: Record<string, ValuationInput> = {
    "Kalpataru Proj.": {
        "netDebt": 1701,
        "ttmEbitda": 2277.0,
        "mcapAtWriting": 24062.0,
        "peAtWriting": 21.7
    },
    "Techno Electric &Eng": {
        "netDebt": -2316,
        "ttmEbitda": 469.0,
        "mcapAtWriting": 11785.0,
        "peAtWriting": 27.3
    },
    "KEC International": {
        "netDebt": 4866,
        "ttmEbitda": 1599.0,
        "mcapAtWriting": 10713.0,
        "peAtWriting": 17.9
    },
    "Transrail Lighting": {
        "netDebt": -85,
        "ttmEbitda": 820.0,
        "mcapAtWriting": 6554.0,
        "peAtWriting": 15.6
    },
    "Skipper": {
        "netDebt": 899,
        "ttmEbitda": 586.0,
        "mcapAtWriting": 6427.0,
        "peAtWriting": 27.6
    }
};
