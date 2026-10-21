import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const oilCharts: Record<string, ProfileCharts> = {
    "Aegis Vopak Terminals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 74
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
                -1.0,
                229.0,
                398.0,
                575.0,
                687.0
            ],
            "ocf": [
                0.0,
                172.0,
                337.0,
                576.0,
                702.0
            ],
            "fcf": [
                -64.0,
                -7.0,
                -326.0,
                440.0,
                1.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "124.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "54.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,424cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "95%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "74%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                72,
                74
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                72,
                74
            ],
            "absorbed5y": -43,
            "receivables5y": -147,
            "inventory5y": -1,
            "payables5y": 11
        }
    },
    "Chennai Petroleum Corporation": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 89
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 1
                },
                {
                    "label": "Operating profit",
                    "share": 7
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Crude oil price",
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
                6.4,
                10.9,
                3.9,
                5.9,
                3.9,
                -5.6,
                1.9,
                4.6,
                0.7,
                7.0,
                9.4,
                12.1,
                5.7
            ],
            "index": [
                100,
                111,
                108,
                107,
                111,
                105,
                98,
                102,
                91,
                94,
                88,
                113,
                151
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
                2732.0,
                5698.0,
                4476.0,
                1038.0,
                4757.0
            ],
            "ocf": [
                1026.0,
                5749.0,
                2694.0,
                1352.0,
                2945.0
            ],
            "fcf": [
                326.0,
                5331.0,
                2091.0,
                667.0,
                2042.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "5.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "3.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹707cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "8%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                2,
                1
            ],
            "inventoryDays": [
                71,
                53
            ],
            "payableDays": [
                30,
                25
            ],
            "cycleDays": [
                43,
                29
            ],
            "absorbed5y": -2342,
            "receivables5y": -1064,
            "inventory5y": -3649,
            "payables5y": 1918
        }
    },
    "Gulf Oil Lubricant": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 24
                },
                {
                    "label": "Operating profit",
                    "share": 12
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Crude oil price",
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
                11.5,
                12.5,
                13.4,
                13.4,
                12.6,
                12.4,
                13.4,
                13.5,
                12.5,
                12.1,
                13.0,
                12.9,
                12.5
            ],
            "index": [
                100,
                111,
                108,
                107,
                111,
                105,
                98,
                102,
                91,
                94,
                88,
                113,
                151
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
                285.0,
                343.0,
                421.0,
                472.0,
                514.0
            ],
            "ocf": [
                -24.0,
                273.0,
                341.0,
                395.0,
                350.0
            ],
            "fcf": [
                -49.0,
                250.0,
                313.0,
                342.0,
                299.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹641cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                49,
                48
            ],
            "inventoryDays": [
                152,
                104
            ],
            "payableDays": [
                86,
                115
            ],
            "cycleDays": [
                115,
                37
            ],
            "absorbed5y": -202,
            "receivables5y": -319,
            "inventory5y": -207,
            "payables5y": 271
        }
    },
    "Deep Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 46
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
                    "share": 40
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
                116.0,
                131.0,
                167.0,
                241.0,
                358.0
            ],
            "ocf": [
                55.0,
                88.0,
                255.0,
                210.0,
                270.0
            ],
            "fcf": [
                24.0,
                -25.0,
                39.0,
                0.0,
                34.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹150cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "87%",
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
                154,
                197
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                154,
                197
            ],
            "absorbed5y": -136,
            "receivables5y": -214,
            "inventory5y": -58,
            "payables5y": 130
        }
    },
    "Gandhar Oil Refinery (India)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 87
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 1
                },
                {
                    "label": "Operating profit",
                    "share": 6
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Crude oil price",
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
                7.9,
                7.6,
                7.7,
                3.6,
                6.0,
                4.3,
                4.2,
                3.5,
                5.1,
                6.2,
                5.1,
                5.9,
                16.2
            ],
            "index": [
                100,
                111,
                108,
                107,
                111,
                105,
                98,
                102,
                91,
                94,
                88,
                113,
                151
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
                247.0,
                317.0,
                280.0,
                176.0,
                237.0
            ],
            "ocf": [
                167.0,
                88.0,
                -69.0,
                15.0,
                128.0
            ],
            "fcf": [
                51.0,
                32.0,
                -124.0,
                15.0,
                128.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹183cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "26%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "6%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                46,
                62
            ],
            "inventoryDays": [
                40,
                64
            ],
            "payableDays": [
                63,
                43
            ],
            "cycleDays": [
                22,
                83
            ],
            "absorbed5y": -729,
            "receivables5y": 73,
            "inventory5y": -446,
            "payables5y": -9
        }
    },
    "Asian Energy Services": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 79
                },
                {
                    "label": "Staff",
                    "share": 5
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                66.0,
                -19.0,
                42.0,
                66.0,
                95.0
            ],
            "ocf": [
                48.0,
                -3.0,
                -44.0,
                -33.0,
                53.0
            ],
            "fcf": [
                6.0,
                -4.0,
                -73.0,
                -52.0,
                -8.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹0cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "8%",
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
                156,
                160
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                156,
                160
            ],
            "absorbed5y": -211,
            "receivables5y": -102,
            "inventory5y": 0,
            "payables5y": 79
        }
    },
    "Jindal Drilling and Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power and factory costs",
                    "share": 50
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
                    "share": 36
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
                110.0,
                163.0,
                139.0,
                241.0,
                352.0
            ],
            "ocf": [
                196.0,
                64.0,
                -44.0,
                864.0,
                178.0
            ],
            "fcf": [
                3.0,
                49.0,
                -58.0,
                29.0,
                134.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "9.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "2.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹785cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "125%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "35%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                134,
                82
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                134,
                82
            ],
            "absorbed5y": 213,
            "receivables5y": -59,
            "inventory5y": 0,
            "payables5y": -14
        }
    },
    "Ganesh Benzoplast": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 27
                },
                {
                    "label": "Power and factory costs",
                    "share": 25
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 23
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
                61.0,
                88.0,
                96.0,
                108.0,
                94.0
            ],
            "ocf": [
                86.0,
                41.0,
                83.0,
                60.0,
                63.0
            ],
            "fcf": [
                66.0,
                -3.0,
                1.0,
                21.0,
                -1.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹27cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                34,
                49
            ],
            "inventoryDays": [
                20,
                129
            ],
            "payableDays": [
                127,
                142
            ],
            "cycleDays": [
                -72,
                36
            ],
            "absorbed5y": -75,
            "receivables5y": -41,
            "inventory5y": -25,
            "payables5y": -13
        }
    },
    "South West Pinnacle": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 46
                },
                {
                    "label": "Operating profit",
                    "share": 24
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
                25.0,
                20.0,
                25.0,
                34.0,
                58.0
            ],
            "ocf": [
                10.0,
                4.0,
                19.0,
                27.0,
                12.0
            ],
            "fcf": [
                1.3800000000000008,
                -10.38,
                -18.79,
                21.3,
                -35.54
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹68cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "44%",
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
                207,
                175
            ],
            "inventoryDays": [
                576,
                508
            ],
            "payableDays": [
                131,
                232
            ],
            "cycleDays": [
                207,
                452
            ],
            "absorbed5y": -76,
            "receivables5y": -58,
            "inventory5y": -19,
            "payables5y": 2
        }
    },
    "TruAlt Bioenergy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 65
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Maize (grain feedstock) price",
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
                7.1,
                4.4,
                30.1,
                17.0,
                13.8,
                -4.3,
                18.8,
                21.6,
                21.2
            ],
            "index": [
                100,
                107,
                106,
                109,
                106,
                105,
                100,
                96,
                96
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
                105.0,
                188.0,
                309.0,
                290.0
            ],
            "ocf": [
                233.0,
                35.0,
                342.0,
                -296.0
            ],
            "fcf": [
                -43.0,
                -322.0,
                82.0,
                -807.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,562cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            }
        ],
        "statsAsOf": "23 Sep 2026"
    },
    "Vedanta Oil & Gas": {
        "stats": [
            {
                "label": "P/E",
                "value": "52.8x",
                "note": "Flattered by a one-off ₹1,097cr demerger gain; continuing operations lost money."
            },
            {
                "label": "EV/EBITDA",
                "value": "3.6x",
                "note": "Market value plus net debt, ÷ Screener operating profit over the last year (₹3,250cr, after exploration write-offs). About 2.8x on the company's EBITDA."
            },
            {
                "label": "Net debt",
                "value": "₹488cr",
                "note": "CRISIL, March 2026; the company said 'near zero' at June 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "31%",
                "note": "Screener basis; company EBITDA margin 45%."
            },
            {
                "label": "Gross output Q1 FY27",
                "value": "77.7 kboepd",
                "note": "Down 17% from 93.2 a year earlier."
            }
        ],
        "statsAsOf": "21 Oct 2026"
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const oilValuationInputs: Record<string, ValuationInput> = {
    "Aegis Vopak Terminals": {
        "netDebt": 3424,
        "ttmEbitda": 675.0,
        "mcapAtWriting": 33544.0,
        "peAtWriting": 124.0
    },
    "Chennai Petroleum Corporation": {
        "netDebt": 707,
        "ttmEbitda": 6213.0,
        "mcapAtWriting": 20674.0,
        "peAtWriting": 4.95
    },
    "Gulf Oil Lubricant": {
        "netDebt": -641,
        "ttmEbitda": 552.0,
        "mcapAtWriting": 5443.0,
        "peAtWriting": 13.9
    },
    "Deep Industries": {
        "netDebt": 150,
        "ttmEbitda": 382.0,
        "mcapAtWriting": 4938.0,
        "peAtWriting": 11.9
    },
    "Gandhar Oil Refinery (India)": {
        "netDebt": 183,
        "ttmEbitda": 470.0,
        "mcapAtWriting": 2622.0,
        "peAtWriting": 8.7
    },
    "Asian Energy Services": {
        "netDebt": 0,
        "ttmEbitda": 105.0,
        "mcapAtWriting": 2373.0,
        "peAtWriting": 36.7
    },
    "Jindal Drilling and Industries": {
        "netDebt": -785,
        "ttmEbitda": 341.0,
        "mcapAtWriting": 1753.0,
        "peAtWriting": 9.0
    },
    "Ganesh Benzoplast": {
        "netDebt": -27,
        "ttmEbitda": 91.0,
        "mcapAtWriting": 944.0,
        "peAtWriting": 14.4
    },
    "South West Pinnacle": {
        "netDebt": 68,
        "ttmEbitda": 67.0,
        "mcapAtWriting": 636.0,
        "peAtWriting": 15.9
    },
    "TruAlt Bioenergy": {
        "netDebt": 1562,
        "ttmEbitda": 392.0,
        "mcapAtWriting": 3844.0,
        "peAtWriting": 24.6
    },
    "Vedanta Oil & Gas": {
        "netDebt": 488,
        "ttmEbitda": 3250,
        "mcapAtWriting": 11356,
        "peAtWriting": 52.8
    }
};
