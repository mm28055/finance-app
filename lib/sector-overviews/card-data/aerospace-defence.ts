import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const aerospaceDefenceCharts: Record<string, ProfileCharts> = {
    "Sansera Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 42
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 18
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel forgings price",
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
                17.3,
                17.0,
                17.0,
                17.0,
                17.1,
                17.4,
                17.4,
                16.2,
                17.1,
                17.2,
                17.8,
                19.3,
                19.2
            ],
            "index": [
                100,
                94,
                94,
                90,
                96,
                90,
                89,
                90,
                92,
                86,
                84,
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
                336.0,
                380.0,
                482.0,
                528.0,
                645.0
            ],
            "ocf": [
                213.0,
                256.0,
                374.0,
                377.0,
                387.0
            ],
            "fcf": [
                -55.0,
                13.0,
                35.0,
                -219.0,
                -123.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "77.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "42.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹194cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "18%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                75,
                65
            ],
            "inventoryDays": [
                117,
                169
            ],
            "payableDays": [
                112,
                136
            ],
            "cycleDays": [
                80,
                98
            ],
            "absorbed5y": -454,
            "receivables5y": -296,
            "inventory5y": -422,
            "payables5y": 310
        }
    },
    "Data Patterns (India)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 37
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 40
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
                31.1,
                38.0,
                42.9,
                51.1,
                35.6,
                37.4,
                46.2,
                37.6,
                32.3,
                22.1,
                46.8,
                55.9,
                26.7
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
                141.0,
                172.0,
                222.0,
                275.0,
                374.0
            ],
            "ocf": [
                50.0,
                -17.0,
                139.0,
                -90.0,
                80.0
            ],
            "fcf": [
                12.0,
                -57.0,
                52.0,
                -196.0,
                8.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "91.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "65.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹418cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "14%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "40%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                233,
                287
            ],
            "inventoryDays": [
                508,
                294
            ],
            "payableDays": [
                162,
                82
            ],
            "cycleDays": [
                579,
                499
            ],
            "absorbed5y": -733,
            "receivables5y": -584,
            "inventory5y": -200,
            "payables5y": 62
        }
    },
    "MTAR Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
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
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                22.9,
                21.6,
                20.3,
                12.6,
                13.3,
                19.5,
                19.0,
                18.6,
                17.8,
                12.5,
                23.0,
                20.3,
                23.5
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
                94.0,
                154.0,
                113.0,
                121.0,
                171.0
            ],
            "ocf": [
                -30.0,
                7.0,
                57.0,
                101.0,
                197.0
            ],
            "fcf": [
                -121.0,
                -101.0,
                -37.0,
                1.0,
                63.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "164.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "99.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹356cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                154,
                140
            ],
            "inventoryDays": [
                535,
                399
            ],
            "payableDays": [
                179,
                119
            ],
            "cycleDays": [
                510,
                419
            ],
            "absorbed5y": -241,
            "receivables5y": -247,
            "inventory5y": -397,
            "payables5y": 113
        }
    },
    "Azad Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 31
                },
                {
                    "label": "Operating profit",
                    "share": 37
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
                34.2,
                31.3,
                37.1,
                33.3,
                33.7,
                35.7,
                35.8,
                36.2,
                35.8,
                36.3,
                39.0,
                37.7,
                37.0
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
                62.0,
                72.0,
                117.0,
                161.0,
                225.0
            ],
            "ocf": [
                21.0,
                -10.0,
                -7.0,
                54.0,
                -119.0
            ],
            "fcf": [
                -96.0,
                -96.0,
                -82.0,
                -239.0,
                -691.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "127.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "74.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹289cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-10%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "37%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                140,
                189
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                748,
                536
            ],
            "cycleDays": [
                null,
                null
            ],
            "absorbed5y": -670,
            "receivables5y": -249,
            "inventory5y": -297,
            "payables5y": 49
        }
    },
    "Aequs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 28
                },
                {
                    "label": "Staff",
                    "share": 17
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
            "input": "Aluminium price",
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
                3.2,
                10.0,
                10.5,
                10.3,
                8.9,
                1.1,
                3.8
            ],
            "index": [
                100,
                103,
                100,
                104,
                110,
                120,
                140
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
                40.0,
                129.0,
                79.0,
                92.0
            ],
            "ocf": [
                10.0,
                -19.0,
                26.0,
                -99.0
            ],
            "fcf": [
                -76.0,
                -201.0,
                -239.0,
                -442.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "220.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹344cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "7%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                48,
                78
            ],
            "inventoryDays": [
                313,
                450
            ],
            "payableDays": [
                215,
                238
            ],
            "cycleDays": [
                146,
                290
            ],
            "absorbed5y": -420,
            "receivables5y": -153,
            "inventory5y": -365,
            "payables5y": 147
        }
    },
    "Astra Microwave Products": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
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
                    "share": 29
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
                2.2,
                22.1,
                28.6,
                22.9,
                15.5,
                21.3,
                29.3,
                28.9,
                20.5,
                22.3,
                31.9,
                33.0,
                18.6
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
                87.0,
                145.0,
                192.0,
                269.0,
                334.0
            ],
            "ocf": [
                115.0,
                -25.0,
                -182.0,
                -90.0,
                387.0
            ],
            "fcf": [
                87.0,
                -59.0,
                -229.0,
                -169.0,
                304.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "80.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "47.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹35cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "20%",
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
                100,
                216
            ],
            "inventoryDays": [
                290,
                394
            ],
            "payableDays": [
                38,
                73
            ],
            "cycleDays": [
                352,
                537
            ],
            "absorbed5y": -647,
            "receivables5y": -243,
            "inventory5y": -287,
            "payables5y": 74
        }
    },
    "Zen Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 24
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 36
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
                52.3,
                28.8,
                42.0,
                35.5,
                43.5,
                33.1,
                28.9,
                42.5,
                40.5,
                37.4,
                37.6,
                28.1,
                26.8
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
                5.0,
                73.0,
                181.0,
                382.0,
                245.0
            ],
            "ocf": [
                -44.0,
                116.0,
                13.0,
                31.0,
                245.0
            ],
            "fcf": [
                -48.0,
                103.0,
                -17.0,
                -1.0,
                186.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "82.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "67.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹342cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "41%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "36%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                166,
                119
            ],
            "inventoryDays": [
                693,
                415
            ],
            "payableDays": [
                109,
                109
            ],
            "cycleDays": [
                750,
                425
            ],
            "absorbed5y": -321,
            "receivables5y": -113,
            "inventory5y": -171,
            "payables5y": -20
        }
    },
    "Apollo Micro Systems": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 67
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
                    "share": 24
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
                22.4,
                20.7,
                26.4,
                21.5,
                24.2,
                20.5,
                25.7,
                22.2,
                30.6,
                26.2,
                19.8,
                23.2,
                21.5
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
                46.0,
                64.0,
                84.0,
                129.0,
                218.0
            ],
            "ocf": [
                43.0,
                -16.0,
                -76.0,
                10.0,
                -130.0
            ],
            "fcf": [
                20.0,
                -49.0,
                -131.0,
                -82.0,
                -358.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "124.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "66.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹387cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-31%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "24%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                205,
                194
            ],
            "inventoryDays": [
                597,
                478
            ],
            "payableDays": [
                258,
                230
            ],
            "cycleDays": [
                544,
                443
            ],
            "absorbed5y": -680,
            "receivables5y": -272,
            "inventory5y": -537,
            "payables5y": 275
        }
    },
    "Unimech Aerospace": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 24
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 32
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
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
                44.6,
                41.9,
                44.1,
                37.7,
                29.6,
                41.2,
                31.7,
                30.6,
                5.9,
                42.7,
                36.1
            ],
            "index": [
                100,
                96,
                98,
                96,
                94,
                94,
                95,
                92,
                92,
                95,
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
                8.0,
                35.0,
                79.0,
                92.0,
                76.0
            ],
            "ocf": [
                2.0,
                1.0,
                47.0,
                81.0,
                61.0
            ],
            "fcf": [
                -1.0,
                -4.0,
                11.0,
                -51.0,
                25.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "123.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "88.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹26cr net cash",
                "note": "₹476cr of net cash at March 2026 (Screener), less about ₹450cr paid for Hobel Bellows in April 2026."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "32%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                76,
                98
            ],
            "inventoryDays": [
                242,
                156
            ],
            "payableDays": [
                211,
                117
            ],
            "cycleDays": [
                106,
                137
            ],
            "absorbed5y": -54,
            "receivables5y": -52,
            "inventory5y": -23,
            "payables5y": 10
        }
    },
    "AXISCADES Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
                },
                {
                    "label": "Staff",
                    "share": 33
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 9
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
                15.8,
                14.7,
                12.9,
                12.5,
                13.8,
                12.5,
                14.5,
                13.8,
                7.4,
                15.7,
                18.4,
                0.0,
                4.9
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
                72.0,
                146.0,
                129.0,
                144.0,
                50.0
            ],
            "ocf": [
                31.0,
                71.0,
                79.0,
                88.0,
                -1.0
            ],
            "fcf": [
                17.0,
                60.0,
                59.0,
                50.0,
                -135.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "252.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "72.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹343cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "50%",
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
                87,
                283
            ],
            "inventoryDays": [
                165,
                121
            ],
            "payableDays": [
                218,
                221
            ],
            "cycleDays": [
                34,
                184
            ],
            "absorbed5y": -342,
            "receivables5y": -279,
            "inventory5y": -54,
            "payables5y": 144
        }
    },
    "Mishra Dhatu Nigam (MIDHANI)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 43
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 25
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                22.3,
                15.9,
                14.3,
                19.7,
                14.1,
                18.7,
                21.8,
                22.6,
                20.0,
                15.7,
                19.9,
                21.0,
                15.5
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
                263.0,
                259.0,
                195.0,
                219.0,
                238.0
            ],
            "ocf": [
                52.0,
                -35.0,
                216.0,
                217.0,
                155.0
            ],
            "fcf": [
                -74.0,
                -108.0,
                137.0,
                149.0,
                106.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "58.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "33.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹215cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "52%",
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
                130,
                167
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                336,
                80
            ],
            "cycleDays": [
                null,
                null
            ],
            "absorbed5y": -416,
            "receivables5y": -167,
            "inventory5y": -532,
            "payables5y": 41
        }
    },
    "Raymond": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 34
                },
                {
                    "label": "Power and factory costs",
                    "share": 24
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Steel forgings price",
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
                9.4,
                8.4,
                3.8,
                7.1,
                5.3,
                6.7,
                7.9,
                10.3,
                8.1,
                10.8,
                12.3,
                12.7
            ],
            "index": [
                100,
                94,
                94,
                90,
                96,
                90,
                89,
                90,
                92,
                86,
                84,
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
                705.0,
                1199.0,
                16.0,
                132.0,
                232.0
            ],
            "ocf": [
                677.0,
                804.0,
                533.0,
                233.0,
                42.0
            ],
            "fcf": [
                617.0,
                688.0,
                325.0,
                75.0,
                -72.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "44.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "32.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹873cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "100%",
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
                52,
                86
            ],
            "inventoryDays": [
                328,
                237
            ],
            "payableDays": [
                279,
                168
            ],
            "cycleDays": [
                100,
                155
            ],
            "absorbed5y": -1493,
            "receivables5y": -1855,
            "inventory5y": -1842,
            "payables5y": 2144
        }
    },
    "Rossell Techsys": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                19.5,
                12.3,
                11.7,
                -2.4,
                11.5,
                19.0,
                17.6,
                12.6,
                12.5,
                13.3,
                11.3,
                14.4
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
                32.0,
                36.0,
                63.0
            ],
            "ocf": [
                1.0,
                -41.0,
                -83.0
            ],
            "fcf": [
                -5.97,
                -55.34,
                -105.59
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "209.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "82.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹361cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "13%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                103,
                88
            ],
            "inventoryDays": [
                565,
                380
            ],
            "payableDays": [
                134,
                55
            ],
            "cycleDays": [
                533,
                412
            ],
            "absorbed5y": -241,
            "receivables5y": -70,
            "inventory5y": -174,
            "payables5y": 20
        }
    },
    "Avantel": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 29
                },
                {
                    "label": "Power and factory costs",
                    "share": 14
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 22
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
                20.7,
                45.9,
                41.2,
                43.5,
                27.4,
                44.8,
                45.3,
                23.6,
                20.1,
                20.4,
                24.2,
                21.3,
                24.8
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
                27.0,
                47.0,
                82.0,
                92.0,
                48.0
            ],
            "ocf": [
                -32.0,
                2.0,
                65.0,
                50.0,
                10.0
            ],
            "fcf": [
                -47.0,
                -8.0,
                43.0,
                -28.0,
                -81.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "227.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "71.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹23cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "32%",
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
                126,
                117
            ],
            "inventoryDays": [
                131,
                521
            ],
            "payableDays": [
                6,
                11
            ],
            "cycleDays": [
                251,
                627
            ],
            "absorbed5y": -167,
            "receivables5y": -58,
            "inventory5y": -90,
            "payables5y": 1
        }
    },
    "ideaForge Technology": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 43
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 53
                },
                {
                    "label": "Operating loss",
                    "share": 3
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
                29.4,
                -33.1,
                21.5,
                14.6,
                2.9,
                -42.7,
                -99.2,
                -107.6,
                -149.3,
                -27.7,
                -84.1,
                43.8,
                3.4
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
                75.0,
                48.0,
                57.0,
                -52.0,
                6.0
            ],
            "ocf": [
                67.0,
                -53.0,
                76.0,
                -77.0,
                -63.0
            ],
            "fcf": [
                54.0,
                -86.0,
                9.0,
                -165.0,
                -151.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "914.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "135.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹60cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-37%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "3%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                46,
                204
            ],
            "inventoryDays": [
                433,
                536
            ],
            "payableDays": [
                66,
                153
            ],
            "cycleDays": [
                413,
                587
            ],
            "absorbed5y": -207,
            "receivables5y": -106,
            "inventory5y": -120,
            "payables5y": 38
        }
    },
    "Krishna Defence & Allied Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 12
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
                    "share": 21
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Hot-rolled steel price",
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
                11.5,
                21.7,
                19.1,
                18.8,
                21.9,
                24.6,
                25.9
            ],
            "index": [
                100,
                99,
                103,
                100,
                97,
                103,
                109
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
                9.0,
                16.0,
                31.0,
                53.0
            ],
            "ocf": [
                -7.0,
                -3.0,
                -11.0,
                86.0
            ],
            "fcf": [
                -10.0,
                -5.0,
                -24.0,
                66.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹29cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "22%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                154,
                52
            ],
            "inventoryDays": [
                313,
                47
            ],
            "payableDays": [
                248,
                19
            ],
            "cycleDays": [
                219,
                80
            ],
            "absorbed5y": -23,
            "receivables5y": -14,
            "inventory5y": -1,
            "payables5y": -6
        }
    },
    "Digilogic Systems": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Circuit boards price",
            "periods": [
                "Q2 FY26",
                "Q4 FY26"
            ],
            "margin": [
                22.2,
                20.3
            ],
            "index": [
                100,
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
                4.0,
                6.0,
                6.0,
                14.0,
                16.0
            ],
            "ocf": [
                5.0,
                -7.0,
                5.0,
                -11.0,
                13.0
            ],
            "fcf": [
                3.0,
                -7.0,
                4.0,
                -13.0,
                11.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹30cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "11%",
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
                43,
                203
            ],
            "inventoryDays": [
                110,
                61
            ],
            "payableDays": [
                209,
                134
            ],
            "cycleDays": [
                -56,
                129
            ],
            "absorbed5y": -31,
            "receivables5y": -37,
            "inventory5y": -6,
            "payables5y": 14
        }
    },
    "Aartech Solonics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 55
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 17
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
                5.8,
                0.7,
                -6.4,
                5.2,
                -4.7,
                10.6,
                11.1,
                -18.8,
                -2.1,
                20.4,
                31.7,
                8.3,
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
                2.53,
                1.29,
                0.48,
                1.61,
                6.14
            ],
            "ocf": [
                1.66,
                -4.82,
                1.49,
                -1.52,
                -0.75
            ],
            "fcf": [
                1.45,
                -5.34,
                0.85,
                -2.01,
                -1.24
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "30.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-33%",
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
                160,
                146
            ],
            "inventoryDays": [
                121,
                176
            ],
            "payableDays": [
                97,
                108
            ],
            "cycleDays": [
                185,
                214
            ],
            "absorbed5y": -15,
            "receivables5y": -10,
            "inventory5y": -9,
            "payables5y": 5
        }
    },
    "Apsis Aerocom": {
        "stats": [
            {
                "label": "P/E",
                "value": "92.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "58x",
                "note": "Market value less net cash, ÷ operating profit over the last two half-years (₹11.5cr)."
            },
            {
                "label": "Net cash",
                "value": "₹32cr",
                "note": "About ₹36.5cr of cash (data provider) minus ₹4.5cr of borrowings, March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "37.5%"
            },
            {
                "label": "Order book",
                "value": "₹40.5cr",
                "note": "June 2026, about 1.3 times FY26 revenue."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 33
                },
                {
                    "label": "Staff, power and other costs",
                    "share": 29.5
                },
                {
                    "label": "Operating profit",
                    "share": 37.5
                }
            ],
            "note": "Materials from FY26 gross profit (data provider); operating profit from Screener; the rest is the balance."
        },
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                63,
                48
            ],
            "inventoryDays": [
                88,
                151
            ],
            "payableDays": [
                234,
                173
            ],
            "cycleDays": [
                -83,
                26
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
                1.9,
                4.2,
                10.2,
                11.5
            ],
            "ocf": [
                1.3,
                5.8,
                0.05,
                7
            ],
            "fcf": [
                0.8,
                0.9,
                -3.4,
                0.9
            ]
        }
    },
    "Sigma Advanced Systems": {
        "stats": [
            {
                "label": "P/E",
                "value": "86.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "85.2x",
                "note": "Market value plus net debt (about nil), ÷ operating profit over the last four quarters (₹209cr)."
            },
            {
                "label": "Net debt",
                "value": "About nil",
                "note": "September 2026, my reading of the scanned results: borrowings of roughly ₹430cr (₹332cr at March plus ₹102cr raised in H1) against about ₹440cr of cash, deposits and liquid funds after the ₹460cr share issue. Screener's March 2026 figure was ₹308cr."
            },
            {
                "label": "Operating cash, H1 FY27",
                "value": "−₹213cr",
                "note": "Company cash-flow statement; −₹210cr in FY26 (Screener). Receivables and stock built up as revenue grew."
            },
            {
                "label": "Operating margin Q2 FY27",
                "value": "21%",
                "note": "Screener; the company's 'operational EBITDA' margin is 19.7%. FY26 was 10%."
            }
        ],
        "statsAsOf": "10 Nov 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 38
                },
                {
                    "label": "Staff",
                    "share": 29
                },
                {
                    "label": "Other costs",
                    "share": 23
                },
                {
                    "label": "Operating profit",
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock. FY26 includes only five months of Nasmyth."
        },
        "marginVsInput": {
            "input": "Alloy and stainless steel bars price",
            "periods": [
                "Q3 FY26",
                "Q4 FY26",
                "Q1 FY27",
                "Q2 FY27"
            ],
            "margin": [
                4.8,
                17.0,
                16.3,
                20.6
            ],
            "index": [
                100,
                103,
                110,
                null
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average. Starts when the UK aerospace business (Nasmyth) was first consolidated."
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26",
                "H1 FY27"
            ],
            "ebitda": [
                -9.0,
                -24.0,
                51.0,
                147.0
            ],
            "ocf": [
                22.0,
                19.0,
                -210.0,
                -213.0
            ],
            "fcf": [
                11.0,
                2.0,
                -270.0,
                -274.0
            ],
            "note": "Screener for FY24–FY26; H1 FY27 from the company's cash-flow statement (free cash = operating cash less about ₹61cr of fixed-asset purchases). Before FY26 the company was mostly the Megasoft shell."
        },
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                201,
                270
            ],
            "inventoryDays": [
                99,
                382
            ],
            "payableDays": [
                99,
                381
            ],
            "cycleDays": [
                201,
                271
            ],
            "absorbed5y": -265,
            "receivables5y": -103,
            "inventory5y": -32,
            "payables5y": -18
        }
    },
    "Tonbo Imaging": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Staff",
                    "share": 14
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
                "Q1 FY26",
                "Q2 FY26",
                "Q1 FY27",
                "Q2 FY27"
            ],
            "margin": [
                21.7,
                -33.3,
                -36.1,
                24.0
            ],
            "index": [
                100,
                106,
                104,
                null
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average. Q3 and Q4 FY26 were not published (unlisted then), so the line jumps from Q2 FY26 to Q1 FY27."
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                10.0,
                112.0,
                140.0,
                103.0
            ],
            "ocf": [
                23.0,
                78.0,
                -136.0,
                -65.0
            ],
            "fcf": [
                10.9,
                -115.5,
                -164.7,
                -104.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "104.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "70.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year (₹124cr: FY26 less H1 FY26 plus H1 FY27, consolidated)."
            },
            {
                "label": "Net debt",
                "value": "₹87cr",
                "note": "Borrowings including leases, minus cash, March 2026. About ₹152cr by September 2026 (borrowings ₹176cr, cash ₹24cr)."
            },
            {
                "label": "Cash conversion, FY23–FY26",
                "value": "−27%",
                "note": "Operating cash (−₹100cr) ÷ operating profit (₹365cr) over four years; 70–80% is healthy. Standalone; listed only in October 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "29%",
                "note": "Includes an ₹18.8cr write-back of warranty provisions; about 24% without it."
            }
        ],
        "statsAsOf": "10 Nov 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                155,
                213
            ],
            "inventoryDays": [
                246,
                453
            ],
            "payableDays": [
                178,
                66
            ],
            "cycleDays": [
                223,
                600
            ],
            "absorbed5y": -416,
            "receivables5y": -193,
            "inventory5y": -204,
            "payables5y": 30
        }
    },
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const aerospaceDefenceValuationInputs: Record<string, ValuationInput> = {
    "Sansera Engineering": {
        "netDebt": 194,
        "ttmEbitda": 693.0,
        "mcapAtWriting": 29023.0,
        "peAtWriting": 77.9
    },
    "Data Patterns (India)": {
        "netDebt": -418,
        "ttmEbitda": 373.0,
        "mcapAtWriting": 24794.0,
        "peAtWriting": 91.8
    },
    "MTAR Technologies": {
        "netDebt": 356,
        "ttmEbitda": 228.0,
        "mcapAtWriting": 22378.0,
        "peAtWriting": 164.0
    },
    "Azad Engineering": {
        "netDebt": 289,
        "ttmEbitda": 240.0,
        "mcapAtWriting": 17678.0,
        "peAtWriting": 127.0
    },
    "Aequs": {
        "netDebt": 344,
        "ttmEbitda": 76.0,
        "mcapAtWriting": 16398.0,
        "peAtWriting": null
    },
    "Astra Microwave Products": {
        "netDebt": 35,
        "ttmEbitda": 325.0,
        "mcapAtWriting": 15227.0,
        "peAtWriting": 80.5
    },
    "Zen Technologies": {
        "netDebt": -342,
        "ttmEbitda": 219.0,
        "mcapAtWriting": 15048.0,
        "peAtWriting": 82.8
    },
    "Apollo Micro Systems": {
        "netDebt": 387,
        "ttmEbitda": 231.0,
        "mcapAtWriting": 15055.0,
        "peAtWriting": 124.0
    },
    "Unimech Aerospace": {
        // Adjusted: about ₹450cr of the March 2026 net cash was paid for Hobel Bellows in April 2026.
        "netDebt": -26,
        "ttmEbitda": 95.0,
        "mcapAtWriting": 8859.0,
        "peAtWriting": 123.0
    },
    "AXISCADES Technologies": {
        "netDebt": 343,
        "ttmEbitda": 119.0,
        "mcapAtWriting": 8260.0,
        "peAtWriting": 252.0
    },
    "Mishra Dhatu Nigam (MIDHANI)": {
        "netDebt": 215,
        "ttmEbitda": 240.0,
        "mcapAtWriting": 7828.0,
        "peAtWriting": 58.0
    },
    "Raymond": {
        "netDebt": 873,
        "ttmEbitda": 254.0,
        "mcapAtWriting": 7436.0,
        "peAtWriting": 44.2
    },
    "Rossell Techsys": {
        "netDebt": 361,
        "ttmEbitda": 71.0,
        "mcapAtWriting": 5525.0,
        "peAtWriting": 209.0
    },
    "Avantel": {
        "netDebt": 23,
        "ttmEbitda": 55.0,
        "mcapAtWriting": 3899.0,
        "peAtWriting": 227.0
    },
    "ideaForge Technology": {
        "netDebt": -60,
        "ttmEbitda": 26.0,
        "mcapAtWriting": 3591.0,
        "peAtWriting": 914.0
    },
    "Krishna Defence & Allied Industries": {
        "netDebt": -29,
        "ttmEbitda": 55.0,
        "mcapAtWriting": 1542.0,
        "peAtWriting": 35.7
    },
    "Digilogic Systems": {
        "netDebt": -30,
        "ttmEbitda": 16.0,
        "mcapAtWriting": 501.0,
        "peAtWriting": 50.7
    },
    "Aartech Solonics": {
        "netDebt": 2,
        "ttmEbitda": 7.1,
        "mcapAtWriting": 164.0,
        "peAtWriting": 30.7
    },
    "Apsis Aerocom": {
        "netDebt": -32,
        "ttmEbitda": 11.5,
        "mcapAtWriting": 700,
        "peAtWriting": 92.9
    },
    "Sigma Advanced Systems": {
        // Adjusted: Screener's March 2026 net debt was ₹308cr. After the ₹460cr preferential issue (July 2026), September
        // cash, deposits and liquid funds (about ₹440cr) roughly match borrowings (about ₹430cr), from the scanned Q2 results.
        // Trailing profit (P/E base) still includes about ₹89cr of Q4 FY26 other income, so the live P/E flatters it.
        "netDebt": 0,
        "ttmEbitda": 209.0,
        "mcapAtWriting": 17814.0,
        "peAtWriting": 86.8
    },
    "Tonbo Imaging": {
        "netDebt": 87,
        "ttmEbitda": 124.0,
        "mcapAtWriting": 8667.0,
        "peAtWriting": 104.0
    },
};
