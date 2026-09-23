import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const industrialProductsCharts: Record<string, ProfileCharts> = {
    "Ador Welding": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
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
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                13.0,
                10.3,
                10.8,
                10.0,
                7.4,
                8.4,
                10.0,
                -1.6,
                12.5,
                15.3,
                14.7,
                11.7
            ],
            "index": [
                100,
                99,
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
                "FY21",
                "FY22",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                22.0,
                61.0,
                119.0,
                104.0,
                123.0
            ],
            "ocf": [
                79.0,
                26.0,
                58.0,
                137.0,
                116.0
            ],
            "fcf": [
                69.9,
                8.670000000000002,
                14.670000000000002,
                95.72999999999999,
                93.83
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹137cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "97%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY21",
            "toYear": "FY26",
            "debtorDays": [
                86,
                74
            ],
            "inventoryDays": [
                70,
                78
            ],
            "payableDays": [
                87,
                100
            ],
            "cycleDays": [
                69,
                53
            ],
            "absorbed5y": 56,
            "receivables5y": -76,
            "inventory5y": -56,
            "payables5y": 116
        }
    },
    "Diffusion Engineers": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 56
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 7
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
                12.7,
                13.4,
                12.7,
                14.6,
                13.6,
                14.3,
                13.9,
                14.8,
                12.7
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
                22.0,
                29.0,
                39.0,
                45.0,
                57.0
            ],
            "ocf": [
                11.0,
                -5.0,
                36.0,
                9.0,
                23.0
            ],
            "fcf": [
                -0.33999999999999986,
                -12.379999999999999,
                3.8500000000000014,
                -3.16,
                1.8399999999999999
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹112cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "39%",
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
                90,
                115
            ],
            "inventoryDays": [
                138,
                119
            ],
            "payableDays": [
                96,
                75
            ],
            "cycleDays": [
                132,
                159
            ],
            "absorbed5y": -111,
            "receivables5y": -100,
            "inventory5y": -44,
            "payables5y": 27
        }
    },
    "Carborundum Univer.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 39
                },
                {
                    "label": "Power and factory costs",
                    "share": 22
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alumina price",
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
                14.0,
                14.7,
                16.6,
                17.4,
                16.2,
                15.9,
                14.1,
                12.0,
                9.9,
                12.0,
                12.2,
                10.3,
                9.5
            ],
            "index": [
                100,
                98,
                98,
                98,
                101,
                118,
                135,
                131,
                107,
                103,
                102,
                99,
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
                540.0,
                655.0,
                741.0,
                717.0,
                582.0
            ],
            "ocf": [
                245.0,
                430.0,
                602.0,
                304.0,
                367.0
            ],
            "fcf": [
                -316.0,
                128.0,
                367.0,
                26.0,
                57.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "95.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹486cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
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
                53,
                62
            ],
            "inventoryDays": [
                218,
                200
            ],
            "payableDays": [
                117,
                76
            ],
            "cycleDays": [
                154,
                187
            ],
            "absorbed5y": -684,
            "receivables5y": -324,
            "inventory5y": -448,
            "payables5y": 110
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
    "Borosil Renewables": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 24
                },
                {
                    "label": "Power and factory costs",
                    "share": 22
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 28
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Soda ash price",
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
                7.3,
                8.0,
                6.1,
                -9.2,
                5.9,
                7.8,
                -2.8,
                4.0,
                18.2,
                31.1,
                31.5,
                30.9,
                31.3
            ],
            "index": [
                100,
                88,
                86,
                80,
                79,
                79,
                80,
                80,
                79,
                78,
                76,
                76,
                80
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY19",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                109.0,
                143.0,
                58.0,
                58.0,
                440.0
            ],
            "ocf": [
                -25.0,
                -6.0,
                69.0,
                100.0,
                423.0
            ],
            "fcf": [
                -217.0,
                -354.0,
                -148.0,
                -9.0,
                224.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹522cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "28%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY19",
            "toYear": "FY26",
            "debtorDays": [
                55,
                28
            ],
            "inventoryDays": [
                265,
                115
            ],
            "payableDays": [
                76,
                48
            ],
            "cycleDays": [
                245,
                96
            ],
            "absorbed5y": -215,
            "receivables5y": -36,
            "inventory5y": -142,
            "payables5y": -38
        }
    },
    "HBL Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 42
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 34
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Lead price",
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
                16.7,
                18.1,
                18.9,
                21.5,
                21.2,
                20.9,
                20.8,
                16.6,
                31.9,
                44.5,
                34.6,
                12.4,
                23.0
            ],
            "index": [
                100,
                100,
                101,
                97,
                100,
                101,
                100,
                100,
                104,
                102,
                102,
                105,
                109
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
                139.0,
                151.0,
                423.0,
                393.0,
                1113.0
            ],
            "ocf": [
                62.0,
                122.0,
                270.0,
                247.0,
                738.0
            ],
            "fcf": [
                -6.0,
                58.0,
                196.0,
                94.0,
                588.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹887cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "65%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "34%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                86,
                71
            ],
            "inventoryDays": [
                149,
                148
            ],
            "payableDays": [
                42,
                49
            ],
            "cycleDays": [
                193,
                171
            ],
            "absorbed5y": -555,
            "receivables5y": -458,
            "inventory5y": -298,
            "payables5y": 118
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
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const industrialProductsValuationInputs: Record<string, ValuationInput> = {
    "Ador Welding": {
        "netDebt": -137,
        "ttmEbitda": 161.0,
        "mcapAtWriting": 2778.0,
        "peAtWriting": 24.0
    },
    "Diffusion Engineers": {
        "netDebt": -112,
        "ttmEbitda": 60.0,
        "mcapAtWriting": 1656.0,
        "peAtWriting": 29.9
    },
    "Carborundum Univer.": {
        "netDebt": -486,
        "ttmEbitda": 593.0,
        "mcapAtWriting": 23851.0,
        "peAtWriting": 95.2
    },
    "Tempsens Instruments": {
        "netDebt": 44,
        "ttmEbitda": 101.0,
        "mcapAtWriting": 4771.0,
        "peAtWriting": 69.5
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
    "Inox India": {
        "netDebt": -239,
        "ttmEbitda": 342.0,
        "mcapAtWriting": 19698.0,
        "peAtWriting": 76.6
    },
    "Borosil Renewables": {
        "netDebt": -522,
        "ttmEbitda": 504.0,
        "mcapAtWriting": 7000.0,
        "peAtWriting": 18.9
    },
    "HBL Engineering": {
        "netDebt": -887,
        "ttmEbitda": 1068.0,
        "mcapAtWriting": 21365.0,
        "peAtWriting": 26.7
    },
    "Patil Automation": {
        "netDebt": 6,
        "ttmEbitda": 19.0,
        "mcapAtWriting": 785.0,
        "peAtWriting": 49.5
    },
    "Airfloa Rail Techno.": {
        "netDebt": 55,
        "ttmEbitda": 64.0,
        "mcapAtWriting": 1314.0,
        "peAtWriting": 33.5
    }
};
