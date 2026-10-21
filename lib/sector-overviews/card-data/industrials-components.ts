import { ProfileCharts, ValuationInput } from '../types';

// Industrials · Components and engineered parts. Carried over unchanged from the Industrial Manufacturing
// and Industrial Products card data (filed figures from Screener and the India wholesale price index).
export const industrialsComponentsCharts: Record<string, ProfileCharts> = {
    "Pitti Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
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
                    "share": 16
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
                14.5,
                14.9,
                16.9,
                15.5,
                14.8,
                15.4,
                16.1,
                17.1,
                16.4,
                16.3,
                17.0,
                16.4,
                16.3
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
                133.0,
                151.0,
                181.0,
                271.0,
                316.0
            ],
            "ocf": [
                88.0,
                222.0,
                80.0,
                289.0,
                205.0
            ],
            "fcf": [
                9.0,
                116.0,
                -130.0,
                -65.0,
                0.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹664cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                78,
                39
            ],
            "inventoryDays": [
                147,
                124
            ],
            "payableDays": [
                119,
                77
            ],
            "cycleDays": [
                106,
                87
            ],
            "absorbed5y": -183,
            "receivables5y": -88,
            "inventory5y": -192,
            "payables5y": 96
        }
    },
    "Gala Precision Engi.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 24
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
                18.3,
                18.9,
                14.9,
                23.6,
                20.5,
                18.3,
                13.3,
                17.0,
                15.3,
                15.6,
                17.1,
                17.6,
                16.3
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
                20.0,
                28.0,
                39.0,
                41.0,
                52.0
            ],
            "ocf": [
                12.0,
                16.0,
                16.0,
                3.0,
                10.0
            ],
            "fcf": [
                5.12,
                6.140000000000001,
                5.25,
                -24.29,
                -19.8
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "38.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹12cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "32%",
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
                64,
                95
            ],
            "inventoryDays": [
                307,
                257
            ],
            "payableDays": [
                85,
                57
            ],
            "cycleDays": [
                285,
                294
            ],
            "absorbed5y": -109,
            "receivables5y": -61,
            "inventory5y": -52,
            "payables5y": 10
        }
    },
    "KRN Heat Exchan": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
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
                "Q1 FY27"
            ],
            "margin": [
                18.3,
                18.2,
                22.0,
                18.8,
                19.8,
                14.4,
                14.4,
                15.7,
                19.7,
                20.3,
                19.0,
                19.4
            ],
            "index": [
                100,
                98,
                100,
                112,
                110,
                109,
                112,
                117,
                120,
                127,
                143,
                152
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
                59.0,
                70.0,
                112.0
            ],
            "ocf": [
                17.0,
                21.0,
                -114.0
            ],
            "fcf": [
                -44.0,
                13.0,
                -114.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "95.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "65.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹141cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "19%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                62,
                106
            ],
            "inventoryDays": [
                139,
                242
            ],
            "payableDays": [
                60,
                140
            ],
            "cycleDays": [
                141,
                208
            ],
            "absorbed5y": -279,
            "receivables5y": -137,
            "inventory5y": -217,
            "payables5y": 109
        }
    },
    "Omnitech Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 24
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 26
                },
                {
                    "label": "Operating profit",
                    "share": 34
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel forgings price",
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
                32.4,
                40.2,
                26.2,
                35.2,
                38.1,
                33.6,
                30.5
            ],
            "index": [
                100,
                101,
                103,
                96,
                94,
                103,
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
                63.0,
                65.0,
                118.0,
                171.0
            ],
            "ocf": [
                39.0,
                21.0,
                -69.0,
                -2.0
            ],
            "fcf": [
                -7.0,
                -122.0,
                -144.0,
                -129.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "66.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "36.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹271cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "33%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                69,
                153
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                73,
                338
            ],
            "cycleDays": [
                388,
                761
            ],
            "absorbed5y": -392,
            "receivables5y": -182,
            "inventory5y": -138,
            "payables5y": 92
        }
    },
    "Tempsens Instruments": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
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
                    "share": 4
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
                "Q1 FY26",
                "Q4 FY26",
                "Q1 FY27"
            ],
            "margin": [
                23.6,
                21.8,
                20.2
            ],
            "index": [
                100,
                122,
                130
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
                42.0,
                44.0,
                55.0,
                91.0,
                101.0
            ],
            "ocf": [
                14.0,
                22.0,
                37.0,
                54.0,
                42.0
            ],
            "fcf": [
                0.16000000000000014,
                0.05000000000000071,
                10.21,
                23.12,
                28.02
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "69.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "47.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹44cr",
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
                84,
                70
            ],
            "inventoryDays": [
                100,
                170
            ],
            "payableDays": [
                30,
                30
            ],
            "cycleDays": [
                153,
                210
            ],
            "absorbed5y": -100,
            "receivables5y": -51,
            "inventory5y": -48,
            "payables5y": 5
        }
    },
    "Patil Automation": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 53
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 5
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
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                13.8,
                11.7,
                14.1,
                11.4
            ],
            "index": [
                100,
                94,
                96,
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
                8.0,
                5.0,
                13.0,
                15.0,
                20.0
            ],
            "ocf": [
                -1.0,
                0.0,
                7.0,
                1.0,
                -4.0
            ],
            "fcf": [
                -2.31,
                -1.88,
                1.6500000000000004,
                0.62,
                -49.18
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "49.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "41.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹6cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "5%",
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
                81,
                107
            ],
            "inventoryDays": [
                45,
                221
            ],
            "payableDays": [
                114,
                124
            ],
            "cycleDays": [
                12,
                204
            ],
            "absorbed5y": -45,
            "receivables5y": -31,
            "inventory5y": -39,
            "payables5y": 5
        }
    },
    "Subros": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aluminium price",
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
                6.8,
                8.6,
                8.2,
                9.3,
                9.5,
                9.2,
                9.3,
                10.2,
                9.3,
                7.7,
                8.5,
                8.8,
                7.8
            ],
            "index": [
                100,
                98,
                99,
                100,
                109,
                109,
                114,
                117,
                114,
                118,
                125,
                137,
                159
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
                149.0,
                168.0,
                255.0,
                323.0,
                325.0
            ],
            "ocf": [
                151.0,
                141.0,
                166.0,
                175.0,
                105.0
            ],
            "fcf": [
                45.0,
                31.0,
                46.0,
                57.0,
                -45.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹106cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
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
                37,
                56
            ],
            "inventoryDays": [
                70,
                60
            ],
            "payableDays": [
                107,
                82
            ],
            "cycleDays": [
                -1,
                34
            ],
            "absorbed5y": -335,
            "receivables5y": -373,
            "inventory5y": -169,
            "payables5y": 153
        }
    },
    "Vilas Transcore": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 82
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
                "H1 FY24",
                "H2 FY24",
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                9.4,
                10.0,
                11.1,
                14.1,
                13.5,
                8.6
            ],
            "index": [
                100,
                98,
                110,
                110,
                117,
                133
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
                27.0,
                29.0,
                30.0,
                45.0,
                51.0
            ],
            "ocf": [
                13.0,
                13.0,
                49.0,
                -42.0,
                -2.0
            ],
            "fcf": [
                11.01,
                12.09,
                47.79,
                -80.47,
                -41.15
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹55cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "17%",
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
                35,
                61
            ],
            "inventoryDays": [
                104,
                70
            ],
            "payableDays": [
                82,
                27
            ],
            "cycleDays": [
                57,
                104
            ],
            "absorbed5y": -119,
            "receivables5y": -34,
            "inventory5y": -51,
            "payables5y": 1
        }
    },
    "Everest Kanto Cylind": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 14
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
                13.8,
                13.7,
                15.8,
                9.5,
                12.0,
                14.4,
                10.9,
                9.0,
                15.8,
                11.9,
                16.2,
                11.2,
                13.6
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
                399.0,
                160.0,
                163.0,
                179.0,
                203.0
            ],
            "ocf": [
                165.0,
                106.0,
                226.0,
                58.0,
                142.0
            ],
            "fcf": [
                83.0,
                22.0,
                160.0,
                -63.0,
                -31.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "9.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹178cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                49,
                55
            ],
            "inventoryDays": [
                175,
                258
            ],
            "payableDays": [
                40,
                26
            ],
            "cycleDays": [
                184,
                288
            ],
            "absorbed5y": -279,
            "receivables5y": -112,
            "inventory5y": -163,
            "payables5y": -4
        }
    },
    "Airfloa Rail Techno.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
            "periods": [
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                25.9,
                24.3,
                24.2,
                18.3
            ],
            "index": [
                100,
                94,
                96,
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
                17.0,
                17.0,
                32.0,
                48.0,
                64.0
            ],
            "ocf": [
                null,
                10.0,
                3.0,
                -4.0,
                -57.0
            ],
            "fcf": [
                null,
                7.9399999999999995,
                2.1,
                -10.4,
                -74.15
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.4x",
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
                "value": "20%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                178,
                244
            ],
            "inventoryDays": [
                181,
                125
            ],
            "payableDays": [
                186,
                105
            ],
            "cycleDays": [
                172,
                264
            ],
            "absorbed5y": -192,
            "receivables5y": -150,
            "inventory5y": -32,
            "payables5y": 8
        }
    },
    "Hy-Tech Engineers": {
        "stats": [
            {
                "label": "P/E",
                "value": "33.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.4x",
                "note": "Market value plus borrowings minus investments, ÷ FY26 operating profit (₹42cr); cash not deducted."
            },
            {
                "label": "Net debt",
                "value": "₹28cr",
                "note": "Borrowings minus investments, March 2026, before cash and the September IPO money."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            },
            {
                "label": "Cash conversion, 4 yrs",
                "value": "55%",
                "note": "Operating cash ÷ operating profit over FY22 and FY24–FY26; 70–80% is healthy."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                110,
                96
            ],
            "inventoryDays": [
                189,
                157
            ],
            "payableDays": [
                145,
                82
            ],
            "cycleDays": [
                153,
                171
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY22",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                34,
                23,
                36,
                42
            ],
            "ocf": [
                8,
                19,
                17,
                30
            ],
            "fcf": [
                -3,
                -10,
                5,
                19
            ],
            "note": "FY23 is not on the filed page."
        }
    }
};

// Fixed valuation inputs as of the note date (23 Sep 2026); market value and P/E are live on the page.
export const industrialsComponentsValuationInputs: Record<string, ValuationInput> = {
    "Pitti Engineering": {
        "netDebt": 664,
        "ttmEbitda": 327.0,
        "mcapAtWriting": 4368.0,
        "peAtWriting": 35.1
    },
    "Gala Precision Engi.": {
        "netDebt": -12,
        "ttmEbitda": 55.0,
        "mcapAtWriting": 1453.0,
        "peAtWriting": 38.2
    },
    "KRN Heat Exchan": {
        // Adjusted: a ₹350cr share placement closed after March 2026.
        "netDebt": -209,
        "ttmEbitda": 144.0,
        "mcapAtWriting": 9267.0,
        "peAtWriting": 95.6
    },
    "Omnitech Engineering": {
        "netDebt": 271,
        "ttmEbitda": 195.0,
        "mcapAtWriting": 6913.0,
        "peAtWriting": 66.5
    },
    "Tempsens Instruments": {
        "netDebt": 44,
        "ttmEbitda": 101.0,
        "mcapAtWriting": 4771.0,
        "peAtWriting": 69.5
    },
    "Patil Automation": {
        "netDebt": 6,
        "ttmEbitda": 19.0,
        "mcapAtWriting": 785.0,
        "peAtWriting": 49.5
    },
    "Subros": {
        "netDebt": -106,
        "ttmEbitda": 323.0,
        "mcapAtWriting": 4791.0,
        "peAtWriting": 27.9
    },
    "Vilas Transcore": {
        "netDebt": -55,
        "ttmEbitda": 51.0,
        "mcapAtWriting": 994.0,
        "peAtWriting": 25.8
    },
    "Everest Kanto Cylind": {
        "netDebt": 178,
        "ttmEbitda": 189.0,
        "mcapAtWriting": 1302.0,
        "peAtWriting": 9.77
    },
    "Airfloa Rail Techno.": {
        "netDebt": 55,
        "ttmEbitda": 64.0,
        "mcapAtWriting": 1314.0,
        "peAtWriting": 33.5
    },
    "Hy-Tech Engineers": {
        "netDebt": 28,
        "ttmEbitda": 42,
        "mcapAtWriting": 745,
        "peAtWriting": 33.1,
        "lossMaking": false
    }
};
