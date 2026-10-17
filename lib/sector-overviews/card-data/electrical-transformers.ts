import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const electricalTransformersCharts: Record<string, ProfileCharts> = {
    "Atlanta Electricals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 70
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
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
                13.7,
                15.6,
                16.0,
                16.8,
                15.6,
                17.4,
                19.3,
                20.1,
                16.5
            ],
            "index": [
                100,
                99,
                98,
                100,
                104,
                107,
                113,
                128,
                136
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
                140.0,
                119.0,
                194.0,
                345.0
            ],
            "ocf": [
                -0.0,
                52.0,
                88.0,
                84.0,
                184.0
            ],
            "fcf": [
                -3.0,
                45.0,
                56.0,
                -29.0,
                68.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹49cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "48%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "19%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                145,
                84
            ],
            "inventoryDays": [
                89,
                102
            ],
            "payableDays": [
                192,
                112
            ],
            "cycleDays": [
                42,
                74
            ],
            "absorbed5y": -312,
            "receivables5y": -306,
            "inventory5y": -280,
            "payables5y": 200
        }
    },
    "Shilchar Tech.": {
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
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 29
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
                29.9,
                28.3,
                27.1,
                29.5,
                27.1,
                31.3,
                27.9,
                30.6,
                32.7,
                31.6,
                30.6,
                21.1,
                16.3
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
                19.0,
                53.0,
                113.0,
                185.0,
                190.0
            ],
            "ocf": [
                -6.0,
                39.0,
                76.0,
                40.0,
                192.0
            ],
            "fcf": [
                -6.0,
                33.0,
                66.0,
                22.0,
                169.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹246cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                140,
                86
            ],
            "inventoryDays": [
                82,
                83
            ],
            "payableDays": [
                93,
                64
            ],
            "cycleDays": [
                129,
                105
            ],
            "absorbed5y": -127,
            "receivables5y": -126,
            "inventory5y": -65,
            "payables5y": 44
        }
    },
    "Voltamp Transformers": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 53
                },
                {
                    "label": "Power and factory costs",
                    "share": 24
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
                    "share": 15
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
                14.9,
                18.1,
                25.7,
                20.0,
                17.8,
                18.8,
                20.5,
                18.6,
                17.2,
                19.5,
                17.1,
                13.1,
                14.7
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
                139.0,
                231.0,
                322.0,
                366.0,
                355.0
            ],
            "ocf": [
                66.0,
                168.0,
                216.0,
                219.0,
                140.0
            ],
            "fcf": [
                47.0,
                160.0,
                197.0,
                159.0,
                15.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,068cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                62,
                46
            ],
            "inventoryDays": [
                123,
                126
            ],
            "payableDays": [
                1,
                3
            ],
            "cycleDays": [
                184,
                169
            ],
            "absorbed5y": -235,
            "receivables5y": -108,
            "inventory5y": -261,
            "payables5y": 1
        }
    },
    "Supreme Power": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 78
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
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Copper price",
            "periods": [
                "Q1 FY24",
                "Q3 FY24",
                "Q1 FY25",
                "Q2 FY25",
                "Q3 FY25",
                "Q1 FY26",
                "Q2 FY26",
                "Q3 FY26",
                "Q1 FY27"
            ],
            "margin": [
                10.7,
                17.9,
                16.7,
                14.6,
                7.4,
                14.4,
                16.5,
                10.1,
                15.5
            ],
            "index": [
                100,
                96,
                109,
                108,
                107,
                114,
                117,
                124,
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
                3.0,
                13.0,
                17.0,
                23.0,
                29.0
            ],
            "ocf": [
                -1.0,
                5.0,
                -6.0,
                37.0,
                28.0
            ],
            "fcf": [
                -1.0,
                5.0,
                -25.0,
                -3.0,
                -29.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹36cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                140,
                87
            ],
            "inventoryDays": [
                98,
                112
            ],
            "payableDays": [
                108,
                146
            ],
            "cycleDays": [
                140,
                53
            ],
            "absorbed5y": -18,
            "receivables5y": -30,
            "inventory5y": -37,
            "payables5y": 54
        }
    },
    "Yash Highvoltage": {
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
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 25
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
                22.9,
                16.7,
                19.3,
                22.6,
                21.0,
                26.5
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
                15.0,
                19.0,
                22.0,
                33.0,
                57.0
            ],
            "ocf": [
                7.0,
                9.0,
                14.0,
                10.0,
                9.0
            ],
            "fcf": [
                0.0,
                5.0,
                1.0,
                -28.0,
                -50.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "88.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "60.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹18cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "34%",
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
                53,
                47
            ],
            "inventoryDays": [
                130,
                201
            ],
            "payableDays": [
                81,
                62
            ],
            "cycleDays": [
                102,
                187
            ],
            "absorbed5y": -67,
            "receivables5y": -24,
            "inventory5y": -57,
            "payables5y": 13
        }
    },
    "Quality Power El": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aluminium price",
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
                7.7,
                35.9,
                39.3,
                8.5,
                23.3,
                14.8,
                17.5,
                17.5,
                27.8,
                10.7,
                17.6
            ],
            "index": [
                100,
                101,
                111,
                110,
                115,
                119,
                116,
                120,
                126,
                139,
                161
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
                32.0,
                39.0,
                65.0,
                176.0
            ],
            "ocf": [
                9.0,
                44.0,
                52.0,
                62.0,
                80.0
            ],
            "fcf": [
                5.0,
                27.0,
                4.0,
                36.0,
                -49.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "90.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "63.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹208cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "19%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                108,
                93
            ],
            "inventoryDays": [
                139,
                74
            ],
            "payableDays": [
                93,
                105
            ],
            "cycleDays": [
                154,
                63
            ],
            "absorbed5y": -82,
            "receivables5y": -149,
            "inventory5y": -15,
            "payables5y": 98
        }
    },
    "Transformers & Rect": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 15
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
                2.6,
                7.8,
                10.3,
                14.0,
                13.0,
                14.9,
                15.2,
                19.4,
                16.6,
                11.3,
                17.0,
                15.1,
                16.3
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
                74.0,
                121.0,
                134.0,
                327.0,
                383.0
            ],
            "ocf": [
                2.0,
                28.0,
                29.0,
                157.0,
                -105.0
            ],
            "fcf": [
                -7.0,
                18.0,
                13.0,
                -78.0,
                -214.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹316cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "11%",
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
                164,
                129
            ],
            "inventoryDays": [
                104,
                133
            ],
            "payableDays": [
                129,
                62
            ],
            "cycleDays": [
                139,
                200
            ],
            "absorbed5y": -848,
            "receivables5y": -699,
            "inventory5y": -358,
            "payables5y": 51
        }
    },
    "Rishabh Instruments": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 38
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 30
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 16
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
                9.9,
                17.8,
                3.1,
                10.1,
                4.7,
                5.5,
                7.7,
                8.6,
                14.7,
                16.8,
                16.8,
                16.1,
                16.7
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
                73.0,
                77.0,
                72.0,
                49.0,
                127.0
            ],
            "ocf": [
                13.0,
                28.0,
                76.0,
                65.0,
                108.0
            ],
            "fcf": [
                -3.0,
                -2.0,
                7.0,
                -11.0,
                -2.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹121cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                62,
                62
            ],
            "inventoryDays": [
                237,
                213
            ],
            "payableDays": [
                125,
                91
            ],
            "cycleDays": [
                174,
                184
            ],
            "absorbed5y": -111,
            "receivables5y": -56,
            "inventory5y": -92,
            "payables5y": 11
        }
    },
    "Schneider Ele. Infra": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 63
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 10
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
                9.9,
                12.7,
                14.8,
                15.5,
                13.8,
                12.3,
                16.3,
                14.8,
                11.1,
                12.9,
                16.8,
                7.6,
                5.2
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
                86.0,
                168.0,
                296.0,
                383.0,
                371.0
            ],
            "ocf": [
                120.0,
                88.0,
                189.0,
                308.0,
                224.0
            ],
            "fcf": [
                94.0,
                50.0,
                131.0,
                245.0,
                120.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "152.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "88.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹275cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
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
                108,
                103
            ],
            "inventoryDays": [
                76,
                84
            ],
            "payableDays": [
                155,
                126
            ],
            "cycleDays": [
                30,
                61
            ],
            "absorbed5y": -276,
            "receivables5y": -366,
            "inventory5y": -201,
            "payables5y": 230
        }
    },
    "Kanohar Electricals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
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
                    "share": 28
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
                22.4,
                29.4,
                28.5
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
                29.0,
                35.0,
                31.0,
                93.0,
                181.0
            ],
            "ocf": [
                24.0,
                -23.0,
                -16.0,
                79.0,
                26.0
            ],
            "fcf": [
                23.44,
                -25.71,
                -17.88,
                70.82,
                22.74
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "55.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹57cr net cash",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "24%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "28%"
            }
        ],
        "statsAsOf": "17 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                69,
                118
            ],
            "inventoryDays": [
                88,
                104
            ],
            "payableDays": [
                97,
                91
            ],
            "cycleDays": [
                61,
                131
            ],
            "absorbed5y": -191,
            "receivables5y": -158,
            "inventory5y": -67,
            "payables5y": 45
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const electricalTransformersValuationInputs: Record<string, ValuationInput> = {
    "Atlanta Electricals": {
        "netDebt": -49,
        "ttmEbitda": 373.0,
        "mcapAtWriting": 13070.0,
        "peAtWriting": 59.9
    },
    "Shilchar Tech.": {
        "netDebt": -246,
        "ttmEbitda": 160.0,
        "mcapAtWriting": 4563.0,
        "peAtWriting": 33.2
    },
    "Voltamp Transformers": {
        "netDebt": -1068,
        "ttmEbitda": 363.0,
        "mcapAtWriting": 10941.0,
        "peAtWriting": 34.5
    },
    "Supreme Power": {
        "netDebt": 36,
        "ttmEbitda": 24.2,
        "mcapAtWriting": 512.0,
        "peAtWriting": 24.5
    },
    "Yash Highvoltage": {
        "netDebt": 18,
        "ttmEbitda": 57.0,
        "mcapAtWriting": 3443.0,
        "peAtWriting": 88.4
    },
    "Quality Power El": {
        "netDebt": -208,
        "ttmEbitda": 186.0,
        "mcapAtWriting": 11996.0,
        "peAtWriting": 90.0
    },
    "Transformers & Rect": {
        "netDebt": 316,
        "ttmEbitda": 388.0,
        "mcapAtWriting": 8588.0,
        "peAtWriting": 33.2
    },
    "Rishabh Instruments": {
        "netDebt": -121,
        "ttmEbitda": 131.0,
        "mcapAtWriting": 2844.0,
        "peAtWriting": 35.2
    },
    "Schneider Ele. Infra": {
        "netDebt": 275,
        "ttmEbitda": 336.0,
        "mcapAtWriting": 29444.0,
        "peAtWriting": 152.0
    },
    "Kanohar Electricals": {
        "netDebt": -57,
        "ttmEbitda": 205.0,
        "mcapAtWriting": 8075.0,
        "peAtWriting": 55.4
    }
};
