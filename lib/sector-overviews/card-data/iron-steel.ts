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
    }
};
