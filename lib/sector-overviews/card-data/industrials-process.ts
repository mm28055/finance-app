import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
// Industrials · process plant and heavy equipment: copied unchanged from card-data/industrial-manufacturing.ts
// and card-data/industrial-products.ts (Inox India). Isgec Heavy Engg. and United Heat Transfer have no chart data.
export const industrialsProcessCharts: Record<string, ProfileCharts> = {
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
    "Inox India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 22
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
                23.4,
                22.9,
                23.0,
                19.1,
                23.6,
                20.8,
                20.7,
                22.0,
                22.4,
                21.8,
                21.9,
                20.6,
                20.5
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
                168.0,
                205.0,
                252.0,
                285.0,
                343.0
            ],
            "ocf": [
                97.0,
                177.0,
                122.0,
                122.0,
                117.0
            ],
            "fcf": [
                53.0,
                130.0,
                24.0,
                -3.0,
                11.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "76.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "56.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹239cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                36,
                72
            ],
            "inventoryDays": [
                349,
                247
            ],
            "payableDays": [
                43,
                80
            ],
            "cycleDays": [
                342,
                238
            ],
            "absorbed5y": -427,
            "receivables5y": -206,
            "inventory5y": -349,
            "payables5y": 139
        }
    },
    "GMM Pfaudler": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 29
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                14.3,
                15.2,
                13.3,
                12.1,
                11.3,
                11.6,
                12.0,
                10.3,
                12.7,
                13.5,
                11.9,
                7.9,
                10.2
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
                284.0,
                431.0,
                476.0,
                361.0,
                403.0
            ],
            "ocf": [
                236.0,
                185.0,
                284.0,
                378.0,
                389.0
            ],
            "fcf": [
                104.0,
                116.0,
                220.0,
                315.0,
                311.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "51.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹353cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "75%",
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
                51,
                48
            ],
            "inventoryDays": [
                241,
                167
            ],
            "payableDays": [
                141,
                123
            ],
            "cycleDays": [
                151,
                92
            ],
            "absorbed5y": -225,
            "receivables5y": -548,
            "inventory5y": -45,
            "payables5y": 367
        }
    },
    "The Anup Enginee": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 48
                },
                {
                    "label": "Power and factory costs",
                    "share": 14
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 22
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
            "periods": [
                "Q1 FY24",
                "Q2 FY24",
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
                22.4,
                22.4,
                22.6,
                22.4,
                22.7,
                22.4,
                23.0,
                22.2,
                21.3,
                18.4,
                7.6
            ],
            "index": [
                100,
                97,
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
                "FY21",
                "FY22",
                "FY23",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                70.0,
                71.0,
                84.0,
                168.0,
                177.0
            ],
            "ocf": [
                53.0,
                74.0,
                30.0,
                -7.0,
                2.0
            ],
            "fcf": [
                13.0,
                32.0,
                -45.0,
                -52.0,
                -51.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹97cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "27%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY21",
            "toYear": "FY26",
            "debtorDays": [
                144,
                185
            ],
            "inventoryDays": [
                165,
                94
            ],
            "payableDays": [
                66,
                79
            ],
            "cycleDays": [
                242,
                199
            ],
            "absorbed5y": -348,
            "receivables5y": -354,
            "inventory5y": 49,
            "payables5y": 62
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
    "Kilburn Engg.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 43
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 22
                },
                {
                    "label": "Operating profit",
                    "share": 23
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
            "periods": [
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
                25.4,
                21.2,
                22.1,
                21.3,
                28.3,
                25.6,
                26.0,
                22.9,
                20.1,
                17.9
            ],
            "index": [
                100,
                100,
                96,
                93,
                92,
                95,
                93,
                90,
                95,
                101
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                77.0,
                102.0,
                147.0
            ],
            "ocf": [
                26.0,
                -10.0,
                -18.0
            ],
            "fcf": [
                10.38,
                -45.29,
                -34.07
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹23cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "23%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                87,
                117
            ],
            "inventoryDays": [
                68,
                62
            ],
            "payableDays": [
                97,
                73
            ],
            "cycleDays": [
                58,
                107
            ],
            "absorbed5y": -311,
            "receivables5y": -144,
            "inventory5y": 9,
            "payables5y": -2
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
    "Praj Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 25
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 5
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
                10.2,
                9.5,
                11.8,
                12.9,
                13.2,
                10.5,
                8.6,
                8.7,
                4.8,
                6.7,
                4.9,
                2.7,
                4.2
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
                194.0,
                308.0,
                372.0,
                314.0,
                155.0
            ],
            "ocf": [
                188.0,
                162.0,
                199.0,
                43.0,
                200.0
            ],
            "fcf": [
                169.0,
                127.0,
                111.0,
                -44.0,
                156.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "117.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "36.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹449cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "59%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                80,
                64
            ],
            "inventoryDays": [
                86,
                60
            ],
            "payableDays": [
                106,
                132
            ],
            "cycleDays": [
                60,
                -8
            ],
            "absorbed5y": -248,
            "receivables5y": -340,
            "inventory5y": -571,
            "payables5y": 253
        }
    },
    "HLE Glascoat": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 47
                },
                {
                    "label": "Power and factory costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 8
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
                11.8,
                11.8,
                10.3,
                11.9,
                9.6,
                14.5,
                11.1,
                15.6,
                13.2,
                10.9,
                6.5,
                10.9,
                7.0
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
                111.0,
                139.0,
                114.0,
                136.0,
                142.0
            ],
            "ocf": [
                1.0,
                5.0,
                95.0,
                134.0,
                161.0
            ],
            "fcf": [
                -68.0,
                -43.0,
                40.0,
                68.0,
                105.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "80.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹290cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "62%",
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
                83,
                73
            ],
            "inventoryDays": [
                307,
                205
            ],
            "payableDays": [
                150,
                85
            ],
            "cycleDays": [
                240,
                193
            ],
            "absorbed5y": -154,
            "receivables5y": -201,
            "inventory5y": -84,
            "payables5y": 94
        }
    },
    "Standard Glass": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 20
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 6
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
                16.7,
                15.9,
                16.9,
                20.6,
                18.6,
                14.5,
                17.3,
                15.8,
                15.1,
                14.1,
                16.1
            ],
            "index": [
                100,
                96,
                96,
                93,
                89,
                89,
                92,
                89,
                87,
                92,
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
                40.0,
                86.0,
                95.0,
                107.0,
                119.0
            ],
            "ocf": [
                -7.0,
                2.0,
                -65.0,
                5.0,
                45.0
            ],
            "fcf": [
                -12.0,
                -27.0,
                -99.0,
                -23.0,
                -17.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "94.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "62.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹32cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-4%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "15%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                125,
                120
            ],
            "inventoryDays": [
                399,
                386
            ],
            "payableDays": [
                198,
                171
            ],
            "cycleDays": [
                326,
                335
            ],
            "absorbed5y": -394,
            "receivables5y": -224,
            "inventory5y": -332,
            "payables5y": 136
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
export const industrialsProcessValuationInputs: Record<string, ValuationInput> = {
    "Jash Engineering": {
        "netDebt": 9,
        "ttmEbitda": 114.0,
        "mcapAtWriting": 3736.0,
        "peAtWriting": 43.4
    },
    "Inox India": {
        "netDebt": -239,
        "ttmEbitda": 342.0,
        "mcapAtWriting": 19698.0,
        "peAtWriting": 76.6
    },
    "GMM Pfaudler": {
        "netDebt": 353,
        "ttmEbitda": 395.0,
        "mcapAtWriting": 6465.0,
        "peAtWriting": 51.3
    },
    "The Anup Enginee": {
        "netDebt": 97,
        "ttmEbitda": 143.0,
        "mcapAtWriting": 3408.0,
        "peAtWriting": 39.7
    },
    "DEE Development": {
        "netDebt": 687,
        "ttmEbitda": 205.0,
        "mcapAtWriting": 5326.0,
        "peAtWriting": 65.0
    },
    "Kilburn Engg.": {
        "netDebt": 23,
        "ttmEbitda": 134.0,
        "mcapAtWriting": 2908.0,
        "peAtWriting": 33.0
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
    "Praj Industries": {
        "netDebt": -449,
        "ttmEbitda": 150.0,
        "mcapAtWriting": 5894.0,
        "peAtWriting": 117.0
    },
    "HLE Glascoat": {
        "netDebt": 290,
        "ttmEbitda": 123.0,
        "mcapAtWriting": 3167.0,
        "peAtWriting": 80.4
    },
    "Standard Glass": {
        "netDebt": -32,
        "ttmEbitda": 129.0,
        "mcapAtWriting": 8119.0,
        "peAtWriting": 94.9
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
