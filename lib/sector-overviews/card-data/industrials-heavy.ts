import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
// Industrials · heavy engineering and infrastructure equipment: copied unchanged from
// card-data/industrial-manufacturing.ts. Isgec Heavy Engg. and United Heat Transfer have no chart data.
export const industrialsHeavyCharts: Record<string, ProfileCharts> = {
    "Jash Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 20
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Iron and steel castings price",
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
                -0.5,
                15.0,
                22.8,
                24.4,
                3.0,
                17.6,
                22.5,
                19.6,
                -3.2,
                12.8,
                10.6,
                23.7,
                5.4
            ],
            "index": [
                100,
                98,
                97,
                98,
                97,
                96,
                96,
                95,
                97,
                99,
                100,
                100,
                102
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
                47.0,
                64.0,
                99.0,
                127.0,
                102.0
            ],
            "ocf": [
                14.0,
                34.0,
                58.0,
                55.0,
                56.0
            ],
            "fcf": [
                1.0,
                18.0,
                34.0,
                10.0,
                19.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "43.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "32.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹9cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "49%",
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
                134,
                149
            ],
            "inventoryDays": [
                157,
                219
            ],
            "payableDays": [
                121,
                117
            ],
            "cycleDays": [
                170,
                251
            ],
            "absorbed5y": -203,
            "receivables5y": -168,
            "inventory5y": -117,
            "payables5y": 64
        }
    },
    "DEE Development": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 42
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
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
                8.9,
                13.4,
                14.3,
                14.4,
                13.5,
                15.5,
                3.7,
                22.4,
                16.1,
                16.3,
                16.7,
                17.7,
                17.0
            ],
            "index": [
                100,
                97,
                97,
                94,
                96,
                94,
                91,
                91,
                92,
                89,
                90,
                93,
                99
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
                68.0,
                74.0,
                109.0,
                129.0,
                196.0
            ],
            "ocf": [
                67.0,
                14.0,
                103.0,
                -118.0,
                20.0
            ],
            "fcf": [
                41.0,
                -45.0,
                -31.0,
                -282.0,
                -170.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "65.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹687cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "15%",
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
                122,
                123
            ],
            "inventoryDays": [
                514,
                439
            ],
            "payableDays": [
                220,
                75
            ],
            "cycleDays": [
                416,
                486
            ],
            "absorbed5y": -481,
            "receivables5y": -184,
            "inventory5y": -391,
            "payables5y": 46
        }
    },
    "Shree Refrigrations": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 22
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                29.4,
                25.0,
                12.0,
                26.2
            ],
            "index": [
                100,
                100,
                107,
                121
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
                12.0,
                12.0,
                25.0,
                27.0,
                33.0
            ],
            "ocf": [
                null,
                -4.0,
                -5.0,
                -25.0,
                14.0
            ],
            "fcf": [
                null,
                -4.63,
                -6.43,
                -32.82,
                -10.379999999999999
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "63.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "40.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹21cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                172,
                251
            ],
            "inventoryDays": [
                429,
                249
            ],
            "payableDays": [
                186,
                123
            ],
            "cycleDays": [
                414,
                377
            ],
            "absorbed5y": -117,
            "receivables5y": -81,
            "inventory5y": -43,
            "payables5y": 13
        }
    },
    "JNK": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 76
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
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
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
                20.6,
                22.8,
                33.6,
                15.5,
                10.7,
                11.5,
                7.1,
                7.8,
                3.3,
                9.3,
                12.8,
                13.6,
                8.8
            ],
            "index": [
                100,
                97,
                97,
                94,
                96,
                94,
                91,
                91,
                92,
                89,
                90,
                93,
                99
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
                54.0,
                69.0,
                99.0,
                47.0,
                92.0
            ],
            "ocf": [
                34.0,
                20.0,
                -10.0,
                -65.0,
                -2.0
            ],
            "fcf": [
                14.0,
                13.0,
                -18.0,
                -73.0,
                -11.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "31.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹108cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-6%",
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
                135,
                154
            ],
            "inventoryDays": [
                245,
                15
            ],
            "payableDays": [
                178,
                112
            ],
            "cycleDays": [
                203,
                57
            ],
            "absorbed5y": -328,
            "receivables5y": -284,
            "inventory5y": 4,
            "payables5y": 131
        }
    },
    "WPIL": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 25
                },
                {
                    "label": "Power and factory costs",
                    "share": 28
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Iron and steel castings price",
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
                18.2,
                21.0,
                16.2,
                17.3,
                16.5,
                21.2,
                12.6,
                14.0,
                12.9,
                18.8,
                21.0,
                14.9,
                15.0
            ],
            "index": [
                100,
                98,
                97,
                98,
                97,
                96,
                96,
                95,
                97,
                99,
                100,
                100,
                102
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
                210.0,
                268.0,
                298.0,
                293.0,
                318.0
            ],
            "ocf": [
                115.0,
                187.0,
                -90.0,
                -150.0,
                -93.0
            ],
            "fcf": [
                90.0,
                147.0,
                -133.0,
                -189.0,
                -148.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹23cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-2%",
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
                132,
                196
            ],
            "inventoryDays": [
                383,
                285
            ],
            "payableDays": [
                501,
                236
            ],
            "cycleDays": [
                14,
                246
            ],
            "absorbed5y": -1156,
            "receivables5y": -779,
            "inventory5y": -123,
            "payables5y": 36
        }
    },
    "John Cockerill": {
        "costSplit": {
            "year": "FY25",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 17
                },
                {
                    "label": "Operating profit",
                    "share": 6
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
                3.3,
                3.2,
                5.0,
                3.2,
                0.6,
                -11.4,
                -0.7,
                -0.6,
                2.4,
                11.7,
                9.9,
                5.7,
                -2.3
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
                "FY23",
                "FY23",
                "FY24",
                "FY24",
                "FY25"
            ],
            "ebitda": [
                9.0,
                27.0,
                -4.0,
                -4.0,
                23.0
            ],
            "ocf": [
                71.0,
                null,
                null,
                -66.0,
                159.0
            ],
            "fcf": [
                67.0,
                null,
                null,
                -77.0,
                153.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "188.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "130.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹221cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY25",
                "value": "6%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY25",
            "debtorDays": [
                101,
                226
            ],
            "inventoryDays": [
                26,
                36
            ],
            "payableDays": [
                305,
                328
            ],
            "cycleDays": [
                -179,
                -66
            ],
            "absorbed5y": 154,
            "receivables5y": -72,
            "inventory5y": -1,
            "payables5y": 37
        }
    },
    "ICE Make Refrig.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 17
                },
                {
                    "label": "Operating profit",
                    "share": 7
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
                10.3,
                9.9,
                5.2,
                14.8,
                7.1,
                8.2,
                6.0,
                11.9,
                3.9,
                6.5,
                6.5,
                8.4,
                1.7
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
                14.0,
                32.0,
                41.0,
                43.0,
                45.0
            ],
            "ocf": [
                8.0,
                24.0,
                10.0,
                30.0,
                -11.0
            ],
            "fcf": [
                3.9699999999999998,
                20.23,
                -23.03,
                -52.33,
                -50.92
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "92.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹151cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "35%",
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
                60,
                84
            ],
            "inventoryDays": [
                123,
                114
            ],
            "payableDays": [
                83,
                108
            ],
            "cycleDays": [
                100,
                89
            ],
            "absorbed5y": -82,
            "receivables5y": -146,
            "inventory5y": -68,
            "payables5y": 172
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
// Isgec Heavy Engg. and United Heat Transfer are left out: they joined the sector after these inputs were set.
export const industrialsHeavyValuationInputs: Record<string, ValuationInput> = {
    "Jash Engineering": {
        "netDebt": 9,
        "ttmEbitda": 114.0,
        "mcapAtWriting": 3736.0,
        "peAtWriting": 43.4
    },
    "DEE Development": {
        "netDebt": 687,
        "ttmEbitda": 205.0,
        "mcapAtWriting": 5326.0,
        "peAtWriting": 65.0
    },
    "Shree Refrigrations": {
        "netDebt": -21,
        "ttmEbitda": 33.0,
        "mcapAtWriting": 1360.0,
        "peAtWriting": 63.1
    },
    "JNK": {
        "netDebt": -108,
        "ttmEbitda": 104.0,
        "mcapAtWriting": 2353.0,
        "peAtWriting": 31.2
    },
    "WPIL": {
        "netDebt": -23,
        "ttmEbitda": 344.0,
        "mcapAtWriting": 4252.0,
        "peAtWriting": 25.1
    },
    "John Cockerill": {
        "netDebt": -221,
        "ttmEbitda": 29.0,
        "mcapAtWriting": 4000.0,
        "peAtWriting": 188.0
    },
    "ICE Make Refrig.": {
        "netDebt": 151,
        "ttmEbitda": 44.0,
        "mcapAtWriting": 1109.0,
        "peAtWriting": 92.7
    }
};
