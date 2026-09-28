import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const industrialRailwayCharts: Record<string, ProfileCharts> = {
    "Hind Rectifiers": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 76
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 10
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
                7.1,
                8.3,
                9.5,
                9.3,
                10.3,
                10.8,
                10.7,
                10.8,
                11.2,
                11.5,
                10.3,
                10.2,
                10.6
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
                23.0,
                15.0,
                45.0,
                71.0,
                103.0
            ],
            "ocf": [
                36.0,
                33.0,
                34.0,
                36.0,
                91.0
            ],
            "fcf": [
                16.0,
                4.0,
                20.0,
                13.0,
                21.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "74.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "44.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹225cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "89%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                66,
                87
            ],
            "inventoryDays": [
                97,
                69
            ],
            "payableDays": [
                60,
                57
            ],
            "cycleDays": [
                104,
                99
            ],
            "absorbed5y": -39,
            "receivables5y": -188,
            "inventory5y": -66,
            "payables5y": 71
        }
    },
    "Titagarh Railsystems": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 4
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
                11.6,
                12.3,
                11.6,
                11.2,
                10.7,
                11.8,
                10.4,
                1.8,
                9.4,
                9.3,
                10.9,
                10.5,
                12.3
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
                251.0,
                449.0,
                335.0,
                331.0
            ],
            "ocf": [
                55.0,
                41.0,
                86.0,
                -97.0,
                322.0
            ],
            "fcf": [
                -47.0,
                4.0,
                -78.0,
                -333.0,
                -47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "58.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "33.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹306cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "27%",
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
                58,
                72
            ],
            "inventoryDays": [
                176,
                92
            ],
            "payableDays": [
                153,
                52
            ],
            "cycleDays": [
                81,
                113
            ],
            "absorbed5y": -1034,
            "receivables5y": -529,
            "inventory5y": -458,
            "payables5y": 175
        }
    },
    "Jupiter Wagons": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 72
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 12
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
                12.9,
                13.8,
                13.7,
                13.1,
                15.6,
                13.8,
                13.9,
                14.1,
                12.9,
                13.1,
                12.7,
                10.1,
                9.7
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
                114.0,
                249.0,
                487.0,
                566.0,
                354.0
            ],
            "ocf": [
                60.0,
                78.0,
                -19.0,
                104.0,
                9.0
            ],
            "fcf": [
                23.0,
                5.0,
                -144.0,
                -404.0,
                -526.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "55.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹554cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "13%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "12%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                22,
                95
            ],
            "inventoryDays": [
                130,
                188
            ],
            "payableDays": [
                58,
                69
            ],
            "cycleDays": [
                94,
                213
            ],
            "absorbed5y": -1245,
            "receivables5y": -667,
            "inventory5y": -758,
            "payables5y": 167
        }
    },
    "Texmaco Rail": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 76
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 3
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
                3.2,
                9.4,
                9.2,
                7.3,
                9.8,
                9.8,
                9.9,
                7.3,
                7.8,
                9.9,
                8.5,
                9.1,
                7.5
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
                140.0,
                145.0,
                264.0,
                467.0,
                391.0
            ],
            "ocf": [
                27.0,
                -103.0,
                96.0,
                -47.0,
                363.0
            ],
            "fcf": [
                11.0,
                -156.0,
                14.0,
                -580.0,
                196.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "23.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹663cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "24%",
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
                115,
                104
            ],
            "inventoryDays": [
                120,
                95
            ],
            "payableDays": [
                104,
                66
            ],
            "cycleDays": [
                131,
                133
            ],
            "absorbed5y": -1140,
            "receivables5y": -858,
            "inventory5y": -558,
            "payables5y": 276
        }
    },
    "MV Electrosystems": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 28
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating loss",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
            "periods": [
                "Q1 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                -26.0,
                -39.2,
                -42.1
            ],
            "index": [
                100,
                101,
                104
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
                6.0,
                6.0,
                7.0,
                -10.0
            ],
            "ocf": [
                3.0,
                -5.0,
                5.0,
                -58.0
            ],
            "fcf": [
                -7.18,
                -9.36,
                2.45,
                -76.16
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹55cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-20%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                44,
                77
            ],
            "inventoryDays": [
                111,
                731
            ],
            "payableDays": [
                69,
                238
            ],
            "cycleDays": [
                85,
                571
            ],
            "absorbed5y": -63,
            "receivables5y": 2,
            "inventory5y": -58,
            "payables5y": 17
        }
    },
    "Concord Control": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 29
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
            "periods": [
                "H1 FY24",
                "H2 FY24",
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                26.7,
                25.7,
                28.0,
                20.0,
                24.4,
                30.2
            ],
            "index": [
                100,
                97,
                98,
                99,
                98,
                97
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
                4.0,
                8.0,
                17.0,
                29.0,
                61.0
            ],
            "ocf": [
                2.0,
                -2.0,
                7.0,
                -7.0,
                -55.0
            ],
            "fcf": [
                0.96,
                -2.49,
                5.42,
                -9.620000000000001,
                -63.79
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "56.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "40.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹37cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-46%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "29%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                34,
                210
            ],
            "inventoryDays": [
                95,
                313
            ],
            "payableDays": [
                46,
                149
            ],
            "cycleDays": [
                82,
                375
            ],
            "absorbed5y": -151,
            "receivables5y": -121,
            "inventory5y": -66,
            "payables5y": 40
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const industrialRailwayValuationInputs: Record<string, ValuationInput> = {
    "Hind Rectifiers": {
        "netDebt": 225,
        "ttmEbitda": 103.0,
        "mcapAtWriting": 4390.0,
        "peAtWriting": 74.3
    },
    "Titagarh Railsystems": {
        "netDebt": 306,
        "ttmEbitda": 351.0,
        "mcapAtWriting": 11274.0,
        "peAtWriting": 58.0
    },
    "Jupiter Wagons": {
        "netDebt": 554,
        "ttmEbitda": 359.0,
        "mcapAtWriting": 9936.0,
        "peAtWriting": 55.8
    },
    "Texmaco Rail": {
        "netDebt": 663,
        "ttmEbitda": 376.0,
        "mcapAtWriting": 5017.0,
        "peAtWriting": 23.1
    },
    "MV Electrosystems": {
        "netDebt": 55,
        "ttmEbitda": -10.0,
        "mcapAtWriting": 2351.0,
        "peAtWriting": null
    },
    "Concord Control": {
        "netDebt": 37,
        "ttmEbitda": 59.0,
        "mcapAtWriting": 2362.0,
        "peAtWriting": 56.1
    }
};
