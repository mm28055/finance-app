import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const vehiclesCharts: Record<string, ProfileCharts> = {
    "Ather Energy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 79
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 16
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating loss",
                    "share": 11
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Rechargeable (lithium-ion) batteries price",
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
                -45.5,
                -35.6,
                -23.8,
                -22.2,
                -25.4,
                -20.8,
                -14.7,
                -7.5,
                -6.0,
                -2.7
            ],
            "index": [
                100,
                100,
                100,
                102,
                102,
                105,
                106,
                106,
                105,
                107
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
                -260.0,
                -708.0,
                -685.0,
                -581.0,
                -408.0
            ],
            "ocf": [
                -226.0,
                -871.0,
                -268.0,
                -721.0,
                32.0
            ],
            "fcf": [
                -297.0,
                -1003.0,
                -384.0,
                -1060.0,
                -474.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹711cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                1,
                1
            ],
            "inventoryDays": [
                57,
                35
            ],
            "payableDays": [
                113,
                105
            ],
            "cycleDays": [
                -56,
                -68
            ],
            "absorbed5y": 67,
            "receivables5y": -6,
            "inventory5y": -221,
            "payables5y": 710
        }
    },
    "Ola Electric": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Power and factory costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 46
                },
                {
                    "label": "Operating loss",
                    "share": 43
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Rechargeable (lithium-ion) batteries price",
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
                -17.5,
                -49.8,
                -23.2,
                -19.5,
                -12.5,
                -31.2,
                -44.0,
                -113.7,
                -28.6,
                -29.4,
                -57.7,
                -106.0,
                -36.3
            ],
            "index": [
                100,
                99,
                98,
                99,
                99,
                99,
                101,
                101,
                104,
                105,
                105,
                104,
                106
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
                -800.0,
                -1252.0,
                -1266.0,
                -1735.0,
                -978.0
            ],
            "ocf": [
                -885.0,
                -1507.0,
                -633.0,
                -2391.0,
                -775.0
            ],
            "fcf": [
                -1772.0,
                -2350.0,
                -1847.0,
                -3368.0,
                -1493.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,221cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-43%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                15,
                5
            ],
            "inventoryDays": [
                216,
                63
            ],
            "payableDays": [
                271,
                159
            ],
            "cycleDays": [
                -40,
                -91
            ],
            "absorbed5y": -689,
            "receivables5y": -31,
            "inventory5y": -249,
            "payables5y": 638
        }
    },
    "Olectra Greentech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 76
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
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
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Rechargeable (lithium-ion) batteries price",
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
                18.5,
                13.4,
                14.3,
                11.8,
                14.0,
                15.5,
                15.3,
                12.0,
                13.8,
                13.5,
                14.0,
                15.5,
                11.8
            ],
            "index": [
                100,
                99,
                98,
                99,
                99,
                99,
                101,
                101,
                104,
                105,
                105,
                104,
                106
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
                85.0,
                141.0,
                166.0,
                262.0,
                330.0
            ],
            "ocf": [
                121.0,
                -10.0,
                143.0,
                141.0,
                104.0
            ],
            "fcf": [
                53.0,
                -75.0,
                64.0,
                -36.0,
                -55.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹208cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                225,
                156
            ],
            "inventoryDays": [
                51,
                51
            ],
            "payableDays": [
                235,
                153
            ],
            "cycleDays": [
                40,
                54
            ],
            "absorbed5y": -406,
            "receivables5y": -724,
            "inventory5y": -184,
            "payables5y": 607
        }
    },
    "Ajax Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 75
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
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
                    "share": 13
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
                16.8,
                16.6,
                17.1,
                13.0,
                16.1,
                14.7,
                13.1,
                10.1,
                10.1,
                15.2,
                12.4
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
                91.0,
                171.0,
                276.0,
                318.0,
                266.0
            ],
            "ocf": [
                85.0,
                185.0,
                207.0,
                43.0,
                377.0
            ],
            "fcf": [
                70.0,
                168.0,
                184.0,
                20.0,
                349.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,119cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "80%",
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
                26,
                31
            ],
            "inventoryDays": [
                115,
                38
            ],
            "payableDays": [
                39,
                57
            ],
            "cycleDays": [
                102,
                12
            ],
            "absorbed5y": -9,
            "receivables5y": -128,
            "inventory5y": 88,
            "payables5y": 109
        }
    },
    "VST Tillers Tractors": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
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
                13.0,
                15.4,
                5.3,
                14.3,
                6.8,
                13.1,
                8.7,
                13.3,
                13.1,
                12.7,
                12.7,
                14.3,
                12.8
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
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                128.0,
                124.0,
                110.0,
                165.0
            ],
            "ocf": [
                36.0,
                49.0,
                77.0,
                132.0
            ],
            "fcf": [
                12.0,
                42.0,
                57.0,
                106.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹678cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
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
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                54,
                51
            ],
            "inventoryDays": [
                56,
                53
            ],
            "payableDays": [
                68,
                43
            ],
            "cycleDays": [
                42,
                60
            ],
            "absorbed5y": -156,
            "receivables5y": -115,
            "inventory5y": -23,
            "payables5y": 32
        }
    },
    "TIL": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
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
                    "share": 2
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                -122.0,
                -55.0,
                -75.0,
                14.0,
                6.0
            ],
            "ocf": [
                -27.0,
                6.0,
                -83.0,
                -131.0,
                -88.0
            ],
            "fcf": [
                -27.0,
                6.0,
                -83.6,
                -136.94,
                -93.54
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "132.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹365cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "2%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                144,
                239
            ],
            "inventoryDays": [
                226,
                325
            ],
            "payableDays": [
                753,
                192
            ],
            "cycleDays": [
                462,
                372
            ],
            "absorbed5y": -213,
            "receivables5y": -226,
            "inventory5y": -68,
            "payables5y": 81
        }
    },
    "Zelio E-Mobility": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 77
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
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Rechargeable (lithium-ion) batteries price",
            "periods": [
                "H1 FY25",
                "H2 FY25",
                "H1 FY26",
                "H2 FY26"
            ],
            "margin": [
                12.0,
                12.4,
                11.3,
                11.2
            ],
            "index": [
                100,
                102,
                106,
                106
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
                2.0,
                4.0,
                9.0,
                21.0,
                34.0
            ],
            "ocf": [
                -3.0,
                -1.0,
                1.0,
                -7.0,
                -7.0
            ],
            "fcf": [
                -3.49,
                -5.37,
                -3.6399999999999997,
                -14.55,
                -17.14
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "74.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "61.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹7cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-24%",
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
                7,
                3
            ],
            "inventoryDays": [
                246,
                87
            ],
            "payableDays": [
                72,
                24
            ],
            "cycleDays": [
                182,
                66
            ],
            "absorbed5y": -82,
            "receivables5y": -3,
            "inventory5y": -55,
            "payables5y": 16
        }
    },
    "Indo Farm": {
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
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 8
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
                16.1,
                15.0,
                15.4,
                14.2,
                13.7,
                12.3,
                12.8,
                13.9,
                13.1
            ],
            "index": [
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
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                54.0,
                59.0,
                62.0,
                59.0,
                60.0
            ],
            "ocf": [
                10.0,
                30.0,
                41.0,
                53.0,
                30.0
            ],
            "fcf": [
                -14.629999999999999,
                20.53,
                31.880000000000003,
                26.15,
                0.4499999999999993
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹74cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "56%",
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
                82,
                105
            ],
            "inventoryDays": [
                299,
                252
            ],
            "payableDays": [
                86,
                44
            ],
            "cycleDays": [
                295,
                313
            ],
            "absorbed5y": -111,
            "receivables5y": -46,
            "inventory5y": -38,
            "payables5y": -3
        }
    },
    "Action Const.Eq.": {
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
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 15
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
                12.6,
                13.2,
                13.7,
                15.6,
                13.5,
                14.4,
                15.4,
                17.1,
                14.3,
                14.7,
                15.2,
                16.7,
                15.0
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
                151.0,
                221.0,
                404.0,
                506.0,
                504.0
            ],
            "ocf": [
                104.0,
                274.0,
                433.0,
                412.0,
                417.0
            ],
            "fcf": [
                56.0,
                200.0,
                258.0,
                191.0,
                324.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,352cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "92%",
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
                42,
                32
            ],
            "inventoryDays": [
                104,
                100
            ],
            "payableDays": [
                129,
                151
            ],
            "cycleDays": [
                18,
                -20
            ],
            "absorbed5y": 193,
            "receivables5y": -114,
            "inventory5y": -371,
            "payables5y": 514
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
// TIL loses money after interest, so it is flagged loss-making (the dashboard shows a P/E).
export const vehiclesValuationInputs: Record<string, ValuationInput> = {
    "Ather Energy": {
        "netDebt": -711,
        "ttmEbitda": -307.0,
        "mcapAtWriting": 59494.0,
        "peAtWriting": null
    },
    "Ola Electric": {
        "netDebt": 1221,
        "ttmEbitda": -920.0,
        "mcapAtWriting": 19379.0,
        "peAtWriting": null
    },
    "Action Const.Eq.": {
        "netDebt": -1352,
        "ttmEbitda": 529.0,
        "mcapAtWriting": 14973.0,
        "peAtWriting": 34.3
    },
    "Olectra Greentech": {
        "netDebt": 208,
        "ttmEbitda": 350.0,
        "mcapAtWriting": 10472.0,
        "peAtWriting": 59.0
    },
    "Ajax Engineering": {
        "netDebt": -1119,
        "ttmEbitda": 264.0,
        "mcapAtWriting": 6509.0,
        "peAtWriting": 28.3
    },
    "VST Tillers Tractors": {
        "netDebt": -678,
        "ttmEbitda": 167.0,
        "mcapAtWriting": 3847.0,
        "peAtWriting": 35.3
    },
    "Zelio E-Mobility": {
        "netDebt": -7,
        "ttmEbitda": 34.0,
        "mcapAtWriting": 2087.0,
        "peAtWriting": 74.8
    },
    "Indo Farm": {
        "netDebt": 74,
        "ttmEbitda": 59.0,
        "mcapAtWriting": 692.0,
        "peAtWriting": 27.8
    },
    "TIL": {
        "lossMaking": true,
        "netDebt": 365,
        "ttmEbitda": 19.0,
        "mcapAtWriting": 2147.0,
        "peAtWriting": null
    }
};
