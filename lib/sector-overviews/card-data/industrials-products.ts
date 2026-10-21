import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
// Industrials · Consumables and industrial products: moved unchanged from the Industrial Products and Industrial Manufacturing card data.
export const industrialsProductsCharts: Record<string, ProfileCharts> = {
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
    "Tega Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 21
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
                14.6,
                21.8,
                16.5,
                27.4,
                18.8,
                9.6,
                22.2,
                28.0,
                15.7,
                17.0,
                11.4,
                11.4,
                3.3
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
                184.0,
                271.0,
                317.0,
                341.0,
                233.0
            ],
            "ocf": [
                14.0,
                179.0,
                252.0,
                195.0,
                350.0
            ],
            "fcf": [
                -27.0,
                179.0,
                252.0,
                195.0,
                350.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "60.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,724cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
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
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                106,
                97
            ],
            "inventoryDays": [
                229,
                233
            ],
            "payableDays": [
                88,
                178
            ],
            "cycleDays": [
                247,
                153
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
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
    "Aditya Infotech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Staff",
                    "share": 8
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
            "input": "Circuit boards price",
            "periods": [
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
                6.4,
                5.8,
                8.3,
                10.0,
                8.2,
                11.8,
                12.3,
                18.1,
                14.6
            ],
            "index": [
                100,
                102,
                102,
                103,
                98,
                104,
                101,
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
                133.0,
                161.0,
                223.0,
                248.0,
                566.0
            ],
            "ocf": [
                44.0,
                56.0,
                -180.0,
                27.0,
                13.0
            ],
            "fcf": [
                37.0,
                49.0,
                -199.0,
                1.0,
                -123.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "94.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "63.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹56cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-3%",
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
                116,
                121
            ],
            "inventoryDays": [
                82,
                134
            ],
            "payableDays": [
                179,
                194
            ],
            "cycleDays": [
                19,
                61
            ],
            "absorbed5y": -1154,
            "receivables5y": -1052,
            "inventory5y": -744,
            "payables5y": 679
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
    "HPL Electric": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 15
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
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
                12.5,
                13.4,
                13.7,
                13.0,
                14.2,
                14.5,
                14.3,
                16.6,
                15.1,
                15.2,
                15.2,
                16.5,
                12.2
            ],
            "index": [
                100,
                97,
                99,
                94,
                95,
                98,
                97,
                99,
                94,
                99,
                97,
                95,
                98
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
                125.0,
                157.0,
                193.0,
                255.0,
                282.0
            ],
            "ocf": [
                101.0,
                104.0,
                100.0,
                138.0,
                226.0
            ],
            "fcf": [
                65.0,
                60.0,
                58.0,
                59.0,
                43.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹674cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                182,
                154
            ],
            "inventoryDays": [
                283,
                236
            ],
            "payableDays": [
                128,
                169
            ],
            "cycleDays": [
                337,
                221
            ],
            "absorbed5y": -253,
            "receivables5y": -249,
            "inventory5y": -306,
            "payables5y": 346
        }
    },
    "Kusumgar": {
        "stats": [
            {
                "label": "P/E",
                "value": "44.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.2x",
                "note": "Market value plus borrowings minus investments, ÷ operating profit over the last year (₹240cr); cash not deducted."
            },
            {
                "label": "Net debt",
                "value": "₹275cr",
                "note": "Borrowings minus investments, March 2026, before cash, which the saved page does not split out."
            },
            {
                "label": "Operating margin FY26",
                "value": "27%"
            },
            {
                "label": "Cash conversion, 4 yrs",
                "value": "16%",
                "note": "Operating cash ÷ operating profit over FY23–FY26; 70–80% is healthy."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                67,
                123
            ],
            "inventoryDays": [
                178,
                278
            ],
            "payableDays": [
                50,
                95
            ],
            "cycleDays": [
                195,
                305
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
                68,
                132,
                189,
                188
            ],
            "ocf": [
                18,
                201,
                -155,
                28
            ],
            "fcf": [
                0,
                123,
                -261,
                -42
            ],
            "note": "Four years filed."
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const industrialsProductsValuationInputs: Record<string, ValuationInput> = {
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
    // Tega Industries is left out: its Molycop acquisition changes its debt and profit so much that pre-deal figures would mislead.
    "HBL Engineering": {
        "netDebt": -887,
        "ttmEbitda": 1068.0,
        "mcapAtWriting": 21365.0,
        "peAtWriting": 26.7
    },
    "Aditya Infotech": {
        "netDebt": 56,
        "ttmEbitda": 709.0,
        "mcapAtWriting": 45264.0,
        "peAtWriting": 94.8
    },
    "Borosil Renewables": {
        "netDebt": -522,
        "ttmEbitda": 504.0,
        "mcapAtWriting": 7000.0,
        "peAtWriting": 18.9
    },
    "HPL Electric": {
        "netDebt": 674,
        "ttmEbitda": 287.0,
        "mcapAtWriting": 1815.0,
        "peAtWriting": 19.1
    },
    "Kusumgar": {
        "netDebt": 275,
        "ttmEbitda": 240,
        "mcapAtWriting": 6003,
        "peAtWriting": 44.7,
        "lossMaking": false
    }
};
