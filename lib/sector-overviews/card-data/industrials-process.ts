import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
// Industrials · chemical and pharma process equipment: copied unchanged from card-data/industrial-manufacturing.ts
// and card-data/industrial-products.ts (Inox India).
export const industrialsProcessCharts: Record<string, ProfileCharts> = {
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
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const industrialsProcessValuationInputs: Record<string, ValuationInput> = {
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
    "Kilburn Engg.": {
        "netDebt": 23,
        "ttmEbitda": 134.0,
        "mcapAtWriting": 2908.0,
        "peAtWriting": 33.0
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
    }
};
