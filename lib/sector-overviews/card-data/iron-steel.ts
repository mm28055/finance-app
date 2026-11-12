import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const ironSteelCharts: Record<string, ProfileCharts> = {
    "Aeroflex Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 57
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 23
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
                19.3,
                21.4,
                19.2,
                17.9,
                20.0,
                21.1,
                22.0,
                20.7,
                17.9,
                23.4,
                23.1,
                23.8,
                22.8
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
                47.0,
                53.0,
                62.0,
                80.0,
                100.0
            ],
            "ocf": [
                32.0,
                7.0,
                44.0,
                27.0,
                66.0
            ],
            "fcf": [
                19.0,
                -2.0,
                6.0,
                -78.0,
                -5.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "103.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "57.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹61cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "23%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                80,
                107
            ],
            "inventoryDays": [
                84,
                122
            ],
            "payableDays": [
                80,
                117
            ],
            "cycleDays": [
                84,
                112
            ],
            "absorbed5y": -88,
            "receivables5y": -96,
            "inventory5y": -50,
            "payables5y": 41
        }
    },
    "Man Industries (I)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 63
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 23
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
                9.6,
                6.9,
                7.8,
                7.2,
                5.1,
                7.9,
                10.8,
                9.9,
                6.6,
                14.5,
                15.4,
                12.1,
                13.6
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
                181.0,
                137.0,
                241.0,
                301.0,
                439.0
            ],
            "ocf": [
                451.0,
                -120.0,
                345.0,
                68.0,
                515.0
            ],
            "fcf": [
                405.0,
                -327.0,
                228.0,
                -86.0,
                175.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹100cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "97%",
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
                93,
                103
            ],
            "inventoryDays": [
                73,
                251
            ],
            "payableDays": [
                174,
                241
            ],
            "cycleDays": [
                -8,
                114
            ],
            "absorbed5y": -169,
            "receivables5y": -864,
            "inventory5y": -927,
            "payables5y": 1623
        }
    },
    "Venus Pipes & Tubes": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
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
                    "share": 5
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
                15.6,
                18.3,
                18.8,
                20.1,
                20.0,
                17.9,
                16.0,
                16.3,
                16.3,
                16.4,
                16.5,
                16.2,
                16.2
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
                49.0,
                69.0,
                146.0,
                168.0,
                191.0
            ],
            "ocf": [
                -60.0,
                9.0,
                52.0,
                69.0,
                112.0
            ],
            "fcf": [
                -81.0,
                -153.0,
                -55.0,
                -39.0,
                -77.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "44.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹258cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "29%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "16%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                69,
                81
            ],
            "inventoryDays": [
                108,
                183
            ],
            "payableDays": [
                45,
                141
            ],
            "cycleDays": [
                133,
                124
            ],
            "absorbed5y": -343,
            "receivables5y": -215,
            "inventory5y": -342,
            "payables5y": 250
        }
    },
    "Manaksia Coated Metals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 74
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 4
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
                4.1,
                6.2,
                6.3,
                8.2,
                6.7,
                6.3,
                6.8,
                7.2,
                9.6,
                11.8,
                8.6,
                6.2,
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
                35.0,
                33.0,
                51.0,
                54.0,
                80.0
            ],
            "ocf": [
                -13.0,
                8.0,
                22.0,
                30.0,
                -14.0
            ],
            "fcf": [
                -13.0,
                -2.67,
                14.29,
                8.29,
                -57.46
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹96cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "13%",
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
                27,
                40
            ],
            "inventoryDays": [
                151,
                188
            ],
            "payableDays": [
                103,
                133
            ],
            "cycleDays": [
                75,
                96
            ],
            "absorbed5y": -226,
            "receivables5y": 0,
            "inventory5y": -186,
            "payables5y": 0
        }
    },
    "Scoda Tubes": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 15
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
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
                13.1,
                15.9,
                16.4,
                17.8,
                14.1,
                14.6,
                15.4,
                15.1,
                13.5,
                12.9
            ],
            "index": [
                100,
                102,
                100,
                97,
                97,
                98,
                95,
                96,
                99,
                105
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
                10.0,
                35.0,
                59.0,
                78.0,
                76.0
            ],
            "ocf": [
                -47.0,
                20.0,
                2.0,
                28.0,
                -14.0
            ],
            "fcf": [
                -82.0,
                -8.0,
                -34.0,
                -22.0,
                -130.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹113cr",
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
                66,
                97
            ],
            "inventoryDays": [
                142,
                217
            ],
            "payableDays": [
                20,
                103
            ],
            "cycleDays": [
                189,
                211
            ],
            "absorbed5y": -251,
            "receivables5y": -121,
            "inventory5y": -166,
            "payables5y": 78
        }
    },
    "Shyam Metalics": {
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
            "input": "Iron ore price",
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
                12.4,
                10.4,
                12.3,
                12.3,
                13.5,
                11.3,
                12.1,
                12.4,
                13.1,
                12.1,
                11.0,
                13.9,
                14.0
            ],
            "index": [
                100,
                91,
                99,
                111,
                118,
                111,
                119,
                116,
                120,
                116,
                110,
                111,
                123
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
                2601.0,
                1499.0,
                1570.0,
                1866.0,
                2333.0
            ],
            "ocf": [
                1561.0,
                1518.0,
                1794.0,
                1713.0,
                2024.0
            ],
            "fcf": [
                621.0,
                -387.0,
                -94.0,
                -435.0,
                -613.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹899cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "87%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "13%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                13,
                18
            ],
            "inventoryDays": [
                119,
                123
            ],
            "payableDays": [
                69,
                133
            ],
            "cycleDays": [
                63,
                8
            ],
            "absorbed5y": -191,
            "receivables5y": -366,
            "inventory5y": -3475,
            "payables5y": 4413
        }
    },
    "Sambhv Steel Tubes": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 3
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
                7.0,
                10.3,
                9.7,
                13.1,
                10.3,
                8.7,
                13.4,
                13.0
            ],
            "index": [
                100,
                96,
                96,
                99,
                97,
                93,
                99,
                105
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
                117.0,
                160.0,
                154.0,
                276.0
            ],
            "ocf": [
                null,
                null,
                126.0,
                212.0
            ],
            "fcf": [
                null,
                null,
                -101.0,
                -75.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹289cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                36,
                34
            ],
            "inventoryDays": [
                87,
                94
            ],
            "payableDays": [
                111,
                117
            ],
            "cycleDays": [
                11,
                10
            ],
            "absorbed5y": -44,
            "receivables5y": -129,
            "inventory5y": -294,
            "payables5y": 456
        }
    },
    "Ratnamani Metals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Power and factory costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Stainless-steel coil price",
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
                17.5,
                21.7,
                15.9,
                16.4,
                13.9,
                15.9,
                15.5,
                17.6,
                16.3,
                17.7,
                19.2,
                14.2,
                16.7
            ],
            "index": [
                100,
                97,
                98,
                95,
                95,
                92,
                89,
                88,
                91,
                89,
                86,
                91,
                95
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
                495.0,
                776.0,
                897.0,
                824.0,
                758.0
            ],
            "ocf": [
                -283.0,
                310.0,
                511.0,
                536.0,
                936.0
            ],
            "fcf": [
                -427.0,
                168.0,
                298.0,
                207.0,
                451.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹400cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                70,
                82
            ],
            "inventoryDays": [
                193,
                174
            ],
            "payableDays": [
                55,
                46
            ],
            "cycleDays": [
                208,
                210
            ],
            "absorbed5y": -997,
            "receivables5y": -514,
            "inventory5y": -599,
            "payables5y": -50
        }
    },
    "Usha Martin": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel wire rod price",
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
                17.9,
                18.3,
                19.7,
                18.3,
                18.6,
                18.1,
                16.6,
                15.6,
                16.3,
                19.1,
                19.2,
                21.7,
                20.1
            ],
            "index": [
                100,
                98,
                97,
                93,
                99,
                96,
                96,
                94,
                95,
                92,
                91,
                98,
                103
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
                384.0,
                513.0,
                599.0,
                597.0,
                705.0
            ],
            "ocf": [
                159.0,
                252.0,
                444.0,
                422.0,
                655.0
            ],
            "fcf": [
                108.0,
                70.0,
                166.0,
                177.0,
                457.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹249cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "19%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                56,
                64
            ],
            "inventoryDays": [
                196,
                187
            ],
            "payableDays": [
                72,
                61
            ],
            "cycleDays": [
                180,
                190
            ],
            "absorbed5y": -663,
            "receivables5y": -318,
            "inventory5y": -284,
            "payables5y": -38
        }
    },
    "Maharashtra Seamless": {
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
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Seamless-tube steel rounds price",
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
                19.2,
                21.4,
                25.6,
                22.2,
                10.3,
                17.6,
                19.6,
                20.1,
                14.4,
                10.3,
                13.7,
                18.3,
                16.4
            ],
            "index": [
                100,
                105,
                95,
                98,
                93,
                93,
                92,
                91,
                90,
                91,
                90,
                92,
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
                583.0,
                1011.0,
                1199.0,
                908.0,
                669.0
            ],
            "ocf": [
                -269.0,
                912.0,
                1041.0,
                610.0,
                933.0
            ],
            "fcf": [
                -277.0,
                893.0,
                1009.0,
                587.0,
                763.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,887cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "14%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                48,
                44
            ],
            "inventoryDays": [
                182,
                140
            ],
            "payableDays": [
                61,
                31
            ],
            "cycleDays": [
                169,
                153
            ],
            "absorbed5y": -830,
            "receivables5y": -20,
            "inventory5y": -166,
            "payables5y": -645
        }
    },
    "Shivalik Bimetal": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 55
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 23
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
                23.6,
                22.7,
                19.8,
                17.2,
                19.0,
                21.3,
                20.3,
                21.2,
                23.4,
                22.6,
                23.9,
                21.5,
                23.6
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
                73.0,
                109.0,
                106.0,
                104.0,
                131.0
            ],
            "ocf": [
                -3.0,
                66.0,
                69.0,
                94.0,
                55.0
            ],
            "fcf": [
                -28.56,
                33.97,
                47.2,
                62.71,
                19.950000000000003
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "44.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹34cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "23%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                67,
                99
            ],
            "inventoryDays": [
                260,
                179
            ],
            "payableDays": [
                95,
                65
            ],
            "cycleDays": [
                232,
                213
            ],
            "absorbed5y": -158,
            "receivables5y": -95,
            "inventory5y": -73,
            "payables5y": 16
        }
    },
    "Technocraft Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 41
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Cold-rolled steel price",
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
                23.3,
                19.6,
                16.0,
                14.2,
                18.7,
                15.4,
                14.3,
                15.7,
                17.7,
                16.5,
                14.0,
                19.5,
                22.1
            ],
            "index": [
                100,
                98,
                100,
                97,
                96,
                95,
                91,
                89,
                93,
                90,
                88,
                93,
                101
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
                392.0,
                403.0,
                399.0,
                416.0,
                476.0
            ],
            "ocf": [
                108.0,
                136.0,
                308.0,
                276.0,
                243.0
            ],
            "fcf": [
                43.0,
                34.0,
                1.0,
                48.0,
                133.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹156cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                87,
                88
            ],
            "inventoryDays": [
                249,
                251
            ],
            "payableDays": [
                64,
                33
            ],
            "cycleDays": [
                272,
                306
            ],
            "absorbed5y": -651,
            "receivables5y": -246,
            "inventory5y": -320,
            "payables5y": 53
        }
    },
    "Goodluck India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
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
                8.2,
                8.1,
                8.4,
                7.3,
                8.2,
                7.3,
                8.5,
                7.7,
                9.4,
                9.3,
                9.7,
                10.4,
                10.5
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
                183.0,
                204.0,
                282.0,
                311.0,
                398.0
            ],
            "ocf": [
                78.0,
                65.0,
                -46.0,
                158.0,
                200.0
            ],
            "fcf": [
                -7.0,
                -13.0,
                -242.0,
                -333.0,
                -148.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,070cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "33%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                40,
                43
            ],
            "inventoryDays": [
                83,
                110
            ],
            "payableDays": [
                20,
                20
            ],
            "cycleDays": [
                103,
                132
            ],
            "absorbed5y": -752,
            "receivables5y": -231,
            "inventory5y": -504,
            "payables5y": 67
        }
    },
    "Vardhman Special Steels": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 59
                },
                {
                    "label": "Power and factory costs",
                    "share": 21
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 9
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel scrap price",
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
                7.5,
                8.3,
                11.2,
                10.1,
                7.9,
                8.2,
                7.2,
                7.4,
                10.4,
                10.0,
                10.0,
                11.9
            ],
            "index": [
                100,
                95,
                94,
                91,
                92,
                89,
                86,
                83,
                85,
                81,
                80,
                86,
                87
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
                174.0,
                141.0,
                142.0,
                148.0,
                166.0
            ],
            "ocf": [
                59.0,
                74.0,
                142.0,
                127.0,
                106.0
            ],
            "fcf": [
                24.0,
                45.0,
                74.0,
                8.0,
                -137.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹124cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "9%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                59,
                58
            ],
            "inventoryDays": [
                139,
                123
            ],
            "payableDays": [
                68,
                65
            ],
            "cycleDays": [
                131,
                116
            ],
            "absorbed5y": -245,
            "receivables5y": -54,
            "inventory5y": -157,
            "payables5y": 56
        }
    },
    "Welspun Specialty": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 6
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel scrap price",
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
                12.2,
                5.8,
                6.8,
                8.0,
                6.7,
                1.6,
                3.8,
                4.9,
                2.1,
                6.0,
                7.5,
                5.1,
                5.4
            ],
            "index": [
                100,
                95,
                94,
                91,
                92,
                89,
                86,
                83,
                85,
                81,
                80,
                86,
                87
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
                -18.0,
                17.0,
                56.0,
                31.0,
                47.0
            ],
            "ocf": [
                -84.0,
                50.0,
                7.0,
                58.0,
                128.0
            ],
            "fcf": [
                -88.0,
                44.0,
                -6.0,
                42.0,
                67.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "114.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "59.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹121cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "120%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "5%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                34,
                59
            ],
            "inventoryDays": [
                431,
                153
            ],
            "payableDays": [
                255,
                214
            ],
            "cycleDays": [
                211,
                -2
            ],
            "absorbed5y": -61,
            "receivables5y": -134,
            "inventory5y": -204,
            "payables5y": 343
        }
    },
    "Ratnaveer Precision": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 84
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
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
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Stainless-steel coil price",
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
                12.7,
                9.2,
                9.3,
                2.8,
                12.3,
                10.4,
                8.2,
                8.4,
                10.2,
                9.8,
                10.8,
                11.2,
                10.2
            ],
            "index": [
                100,
                97,
                98,
                95,
                95,
                92,
                89,
                88,
                91,
                89,
                86,
                91,
                95
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
                28.0,
                46.0,
                50.0,
                86.0,
                112.0
            ],
            "ocf": [
                -16.0,
                0.0,
                12.0,
                95.0,
                -48.0
            ],
            "fcf": [
                -29.0,
                -18.0,
                -54.0,
                -43.0,
                -162.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "41.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹66cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "13%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                34,
                60
            ],
            "inventoryDays": [
                176,
                118
            ],
            "payableDays": [
                42,
                91
            ],
            "cycleDays": [
                168,
                87
            ],
            "absorbed5y": -277,
            "receivables5y": -141,
            "inventory5y": -155,
            "payables5y": 187
        }
    },
    "Bharat Wire Ropes": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 22
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel wire rod price",
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
                25.9,
                26.4,
                28.0,
                25.2,
                24.8,
                22.4,
                17.9,
                21.5,
                21.1,
                23.0,
                23.1,
                21.3,
                20.0
            ],
            "index": [
                100,
                98,
                97,
                93,
                99,
                96,
                96,
                94,
                95,
                92,
                91,
                98,
                103
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
                62.0,
                139.0,
                164.0,
                132.0,
                131.0
            ],
            "ocf": [
                24.0,
                83.0,
                85.0,
                73.0,
                98.0
            ],
            "fcf": [
                23.0,
                73.0,
                69.0,
                43.0,
                24.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹440cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "58%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "12 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                35,
                60
            ],
            "inventoryDays": [
                113,
                140
            ],
            "payableDays": [
                44,
                12
            ],
            "cycleDays": [
                104,
                188
            ],
            "absorbed5y": -267,
            "receivables5y": -62,
            "inventory5y": -54,
            "payables5y": 0
        }
    },
    "Vedanta Iron & Steel": {
        "stats": [
            {
                "label": "P/E",
                "value": "Loss",
                "note": "Carved-out FY26 net loss of ₹2,935cr; Q1 FY27 profit of ₹121cr annualised would be about 23 times."
            },
            {
                "label": "EV/EBITDA",
                "value": "10.4x",
                "note": "Market value plus the company's June net debt (₹2,733cr), ÷ operating profit over the last year (₹1,308cr)."
            },
            {
                "label": "Net debt",
                "value": "₹2,733cr",
                "note": "Company figure, June 2026: borrowings plus ₹960cr owed to Vedanta Ltd, minus cash including ₹352cr restricted."
            },
            {
                "label": "Operating margin FY26",
                "value": "8%",
                "note": "14% in Q1 FY27."
            },
            {
                "label": "Steel EBITDA a tonne, Q1 FY27",
                "value": "₹5,864",
                "note": "Up from ₹3,668 a year earlier."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and fuel",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs (royalties, freight, contractors)",
                    "share": 36
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed carve-out P&L (Q1 FY27 results, FY26 column). Materials include purchases and changes in stock; most coal and coke sit in materials. Other costs are not split in the filing."
        }
    },
    "Kirloskar Ferrous": {
        "stats": [
            {
                "label": "P/E",
                "value": "19.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹914cr",
                "note": "Borrowings including leases, minus cash and bank balances, March 2026."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
                "note": "Operating cash ÷ operating profit over FY22–FY26; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "12%"
            },
            {
                "label": "Castings volume, Q1 FY27",
                "value": "+18%",
                "note": "Tonnes sold against Q1 FY26 (company)."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 57
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Power, fuel and other costs",
                    "share": 26
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Consolidated FY26 profit and loss (annual report). Materials include bought-in goods and changes in stock. Power and fuel are inside other costs; standalone power cost was about 8% of revenue."
        },
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                47,
                58
            ],
            "inventoryDays": [
                106,
                101
            ],
            "payableDays": [
                102,
                111
            ],
            "cycleDays": [
                51,
                48
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
                643,
                836,
                857,
                762,
                850
            ],
            "ocf": [
                345,
                798,
                563,
                656,
                942
            ],
            "fcf": [
                -79,
                382,
                35,
                177,
                494
            ],
            "note": "FY22 is before the ISMT tubes business was consolidated."
        }
    },
    "Bansal Wire Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock; power, gas and freight sit in other costs."
        },
        "marginVsInput": {
            "input": "Steel wire rod price",
            "periods": [
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
                "Q1 FY27",
                "Q2 FY27"
            ],
            "margin": [
                6.0,
                5.9,
                6.5,
                7.5,
                7.8,
                7.8,
                7.4,
                7.7,
                7.3,
                8.3,
                6.7,
                4.8,
                8.0
            ],
            "index": [
                100,
                100,
                96,
                101,
                99,
                98,
                97,
                98,
                94,
                93,
                100,
                106,
                null
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
                106.0,
                105.0,
                144.0,
                266.0,
                310.0
            ],
            "ocf": [
                -12.0,
                103.0,
                -541.0,
                -153.0,
                333.0
            ],
            "fcf": [
                -31.0,
                16.0,
                -1051.0,
                -616.0,
                100.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "30.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹548cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-29%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "7%"
            }
        ],
        "statsAsOf": "11 Nov 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                41,
                52
            ],
            "inventoryDays": [
                55,
                81
            ],
            "payableDays": [
                4,
                42
            ],
            "cycleDays": [
                92,
                91
            ],
            "absorbed5y": -1070,
            "receivables5y": -641,
            "inventory5y": -754,
            "payables5y": 363
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const ironSteelValuationInputs: Record<string, ValuationInput> = {
    "Aeroflex Industries": {
        "netDebt": -61,
        "ttmEbitda": 118.0,
        "mcapAtWriting": 6899.0,
        "peAtWriting": 103.0
    },
    "Man Industries (I)": {
        "netDebt": -100,
        "ttmEbitda": 532.0,
        "mcapAtWriting": 7448.0,
        "peAtWriting": 36.5
    },
    "Venus Pipes & Tubes": {
        "netDebt": 258,
        "ttmEbitda": 197.0,
        "mcapAtWriting": 4672.0,
        "peAtWriting": 44.9
    },
    "Manaksia Coated Metals": {
        "netDebt": 96,
        "ttmEbitda": 84.0,
        "mcapAtWriting": 1402.0,
        "peAtWriting": 34.4
    },
    "Scoda Tubes": {
        "netDebt": 113,
        "ttmEbitda": 78.0,
        "mcapAtWriting": 820.0,
        "peAtWriting": 22.1
    },
    "Shyam Metalics": {
        "netDebt": 899,
        "ttmEbitda": 2519.0,
        "mcapAtWriting": 30303.0,
        "peAtWriting": 27.0
    },
    "Sambhv Steel Tubes": {
        "netDebt": 289,
        "ttmEbitda": 299.0,
        "mcapAtWriting": 4689.0,
        "peAtWriting": 28.0
    },
    "Ratnamani Metals": {
        "netDebt": -400,
        "ttmEbitda": 732.0,
        "mcapAtWriting": 17891.0,
        "peAtWriting": 40.8
    },
    "Usha Martin": {
        "netDebt": -249,
        "ttmEbitda": 768.0,
        "mcapAtWriting": 14734.0,
        "peAtWriting": 27.0
    },
    "Maharashtra Seamless": {
        "netDebt": -3887,
        "ttmEbitda": 681.0,
        "mcapAtWriting": 8138.0,
        "peAtWriting": 11.0
    },
    "Shivalik Bimetal": {
        "netDebt": -34,
        "ttmEbitda": 142.0,
        "mcapAtWriting": 6358.0,
        "peAtWriting": 59.6
    },
    "Technocraft Industries": {
        "netDebt": 156,
        "ttmEbitda": 534.0,
        "mcapAtWriting": 6036.0,
        "peAtWriting": 17.8
    },
    "Goodluck India": {
        "netDebt": 1070,
        "ttmEbitda": 441.0,
        "mcapAtWriting": 5659.0,
        "peAtWriting": 27.7
    },
    "Vardhman Special Steels": {
        "netDebt": -124,
        "ttmEbitda": 193.0,
        "mcapAtWriting": 3649.0,
        "peAtWriting": 25.5
    },
    "Welspun Specialty": {
        "netDebt": -121,
        "ttmEbitda": 53.0,
        "mcapAtWriting": 3273.0,
        "peAtWriting": 114.0
    },
    "Ratnaveer Precision": {
        "netDebt": 66,
        "ttmEbitda": 117.0,
        "mcapAtWriting": 2783.0,
        "peAtWriting": 41.2
    },
    "Bharat Wire Ropes": {
        "netDebt": 440,
        "ttmEbitda": 126.0,
        "mcapAtWriting": 1116.0,
        "peAtWriting": 16.2
    },
    "Vedanta Iron & Steel": {
        "netDebt": 2733,
        "ttmEbitda": 1308,
        "mcapAtWriting": 10910,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Kirloskar Ferrous": {
        "netDebt": 914,
        "ttmEbitda": 841,
        "mcapAtWriting": 7484,
        "peAtWriting": 19.5
    },
    "Bansal Wire Industries": {
        "netDebt": 548,
        "ttmEbitda": 323.0,
        "mcapAtWriting": 4856.0,
        "peAtWriting": 30.5
    }
};
