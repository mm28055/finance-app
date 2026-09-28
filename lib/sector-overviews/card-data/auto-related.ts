import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const autoRelatedCharts: Record<string, ProfileCharts> = {
    "Shriram Pistons": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 46
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
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                20.4,
                21.0,
                21.0,
                20.7,
                19.7,
                20.3,
                20.0,
                21.3,
                20.2,
                20.4,
                20.1,
                18.4,
                17.5
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
                304.0,
                460.0,
                642.0,
                724.0,
                876.0
            ],
            "ocf": [
                219.0,
                395.0,
                487.0,
                434.0,
                625.0
            ],
            "fcf": [
                156.0,
                268.0,
                341.0,
                266.0,
                437.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "37.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹797cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
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
                63,
                68
            ],
            "inventoryDays": [
                155,
                111
            ],
            "payableDays": [
                142,
                121
            ],
            "cycleDays": [
                75,
                58
            ],
            "absorbed5y": -228,
            "receivables5y": -255,
            "inventory5y": -228,
            "payables5y": 266
        }
    },
    "Sona BLW Precision": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 47
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 6
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
                560.0,
                675.0,
                902.0,
                967.0,
                1081.0
            ],
            "ocf": [
                445.0,
                533.0,
                693.0,
                775.0,
                659.0
            ],
            "fcf": [
                98.0,
                198.0,
                373.0,
                358.0,
                167.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "70.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "43.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹456cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                76,
                94
            ],
            "inventoryDays": [
                140,
                107
            ],
            "payableDays": [
                85,
                80
            ],
            "cycleDays": [
                132,
                121
            ],
            "absorbed5y": -517,
            "receivables5y": -530,
            "inventory5y": -131,
            "payables5y": 162
        }
    },
    "Exide Industries": {
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
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 10
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
                10.3,
                11.4,
                10.9,
                10.7,
                10.7,
                10.6,
                10.6,
                9.9,
                11.5,
                9.0,
                10.8,
                10.3,
                11.2
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
                1402.0,
                1593.0,
                1823.0,
                1805.0,
                1876.0
            ],
            "ocf": [
                61.0,
                768.0,
                1533.0,
                1273.0,
                2413.0
            ],
            "fcf": [
                -605.0,
                -225.0,
                -343.0,
                -676.0,
                1260.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "38.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,814cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
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
                31,
                32
            ],
            "inventoryDays": [
                120,
                120
            ],
            "payableDays": [
                78,
                110
            ],
            "cycleDays": [
                74,
                42
            ],
            "absorbed5y": -170,
            "receivables5y": -638,
            "inventory5y": -1366,
            "payables5y": null
        }
    },
    "Dhoot Transmission": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
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
                    "share": 16
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
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
                122.0,
                147.0,
                517.0,
                594.0,
                713.0
            ],
            "ocf": [
                24.0,
                175.0,
                241.0,
                320.0,
                348.0
            ],
            "fcf": [
                -39.0,
                115.0,
                -47.0,
                -87.0,
                -2.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "71.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "44.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹178cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "53%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "16%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY21",
            "toYear": "FY26",
            "debtorDays": [
                69,
                64
            ],
            "inventoryDays": [
                86,
                78
            ],
            "payableDays": [
                80,
                73
            ],
            "cycleDays": [
                75,
                69
            ],
            "absorbed5y": -559,
            "receivables5y": -558,
            "inventory5y": -401,
            "payables5y": 392
        }
    },
    "Craftsman Automation": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 55
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
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
                    "share": 16
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
                20.6,
                20.2,
                19.5,
                18.7,
                17.1,
                15.9,
                12.6,
                14.0,
                14.9,
                15.1,
                15.2,
                16.1,
                15.8
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
                534.0,
                684.0,
                879.0,
                833.0,
                1238.0
            ],
            "ocf": [
                327.0,
                608.0,
                513.0,
                283.0,
                522.0
            ],
            "fcf": [
                114.0,
                263.0,
                -118.0,
                -709.0,
                -666.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹3,430cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
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
                49,
                50
            ],
            "inventoryDays": [
                221,
                145
            ],
            "payableDays": [
                163,
                121
            ],
            "cycleDays": [
                107,
                74
            ],
            "absorbed5y": -1359,
            "receivables5y": -505,
            "inventory5y": -1071,
            "payables5y": 561
        }
    },
    "ZF Comm Vehic Contr": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 58
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 15
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                253.0,
                470.0,
                567.0,
                632.0,
                657.0
            ],
            "ocf": [
                138.0,
                298.0,
                193.0,
                286.0,
                810.0
            ],
            "fcf": [
                -38.0,
                170.0,
                -5.0,
                120.0,
                664.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "53.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,177cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                96,
                83
            ],
            "inventoryDays": [
                32,
                43
            ],
            "payableDays": [
                79,
                71
            ],
            "cycleDays": [
                49,
                56
            ],
            "absorbed5y": -294,
            "receivables5y": -360,
            "inventory5y": -167,
            "payables5y": 155
        }
    },
    "Sundram Fasteners": {
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
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 16
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
                16.0,
                16.2,
                14.7,
                15.6,
                16.5,
                16.5,
                15.8,
                14.7,
                16.1,
                16.6,
                15.6,
                15.1,
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
                801.0,
                853.0,
                889.0,
                945.0,
                999.0
            ],
            "ocf": [
                401.0,
                469.0,
                589.0,
                423.0,
                837.0
            ],
            "fcf": [
                197.0,
                230.0,
                189.0,
                27.0,
                465.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹413cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                75,
                89
            ],
            "inventoryDays": [
                145,
                175
            ],
            "payableDays": [
                101,
                91
            ],
            "cycleDays": [
                119,
                173
            ],
            "absorbed5y": -1109,
            "receivables5y": 0,
            "inventory5y": -492,
            "payables5y": 0
        }
    },
    "Gabriel India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 74
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
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
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                293.0,
                390.0,
                438.0
            ],
            "ocf": [
                177.0,
                204.0,
                345.0
            ],
            "fcf": [
                14.0,
                -5.0,
                105.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "68.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "51.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹176cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "9%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                53,
                53
            ],
            "inventoryDays": [
                43,
                43
            ],
            "payableDays": [
                84,
                78
            ],
            "cycleDays": [
                12,
                18
            ],
            "absorbed5y": -196,
            "receivables5y": -294,
            "inventory5y": -184,
            "payables5y": 288
        }
    },
    "Belrise Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 81
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
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
                    "share": 11
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
                755.0,
                875.0,
                928.0,
                1021.0,
                1154.0
            ],
            "ocf": [
                474.0,
                789.0,
                582.0,
                704.0,
                876.0
            ],
            "fcf": [
                -31.0,
                555.0,
                130.0,
                -164.0,
                258.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "47.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹567cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
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
                63,
                67
            ],
            "inventoryDays": [
                40,
                44
            ],
            "payableDays": [
                48,
                63
            ],
            "cycleDays": [
                55,
                48
            ],
            "absorbed5y": -995,
            "receivables5y": -930,
            "inventory5y": -443,
            "payables5y": 854
        }
    },
    "Motherson Sumi Wirin": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 67
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
                10.4,
                12.0,
                12.4,
                13.0,
                10.9,
                10.7,
                10.3,
                10.8,
                9.8,
                10.1,
                9.1,
                8.2,
                7.6
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
                730.0,
                792.0,
                1012.0,
                996.0,
                1060.0
            ],
            "ocf": [
                501.0,
                224.0,
                791.0,
                365.0,
                761.0
            ],
            "fcf": [
                400.0,
                25.0,
                680.0,
                193.0,
                560.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹164cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "58%",
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
                43,
                60
            ],
            "inventoryDays": [
                97,
                82
            ],
            "payableDays": [
                92,
                93
            ],
            "cycleDays": [
                47,
                48
            ],
            "absorbed5y": -913,
            "receivables5y": -1211,
            "inventory5y": -931,
            "payables5y": 1225
        }
    },
    "Tenneco Clean Air": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 65
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
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 17
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                571.0,
                613.0,
                815.0,
                925.0
            ],
            "ocf": [
                538.0,
                488.0,
                562.0,
                1429.0
            ],
            "fcf": [
                475.0,
                391.0,
                497.0,
                1314.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹519cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
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
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                43,
                43
            ],
            "inventoryDays": [
                42,
                35
            ],
            "payableDays": [
                100,
                111
            ],
            "cycleDays": [
                -16,
                -33
            ],
            "absorbed5y": 846,
            "receivables5y": -93,
            "inventory5y": -13,
            "payables5y": 311
        }
    },
    "Minda Corp": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 63
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 15
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                296.0,
                463.0,
                517.0,
                576.0,
                722.0
            ],
            "ocf": [
                167.0,
                387.0,
                287.0,
                544.0,
                676.0
            ],
            "fcf": [
                59.0,
                136.0,
                35.0,
                194.0,
                282.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹229cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "80%",
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
                70,
                59
            ],
            "inventoryDays": [
                93,
                66
            ],
            "payableDays": [
                110,
                107
            ],
            "cycleDays": [
                53,
                18
            ],
            "absorbed5y": -154,
            "receivables5y": -459,
            "inventory5y": -245,
            "payables5y": 585
        }
    },
    "Sedemac Mechatronics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 1
                },
                {
                    "label": "Operating profit",
                    "share": 21
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
                29.0,
                47.0,
                78.0,
                121.0,
                217.0
            ],
            "ocf": [
                10.0,
                78.0,
                61.0,
                91.0,
                128.0
            ],
            "fcf": [
                -40.0,
                22.0,
                -6.0,
                5.0,
                -47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "129.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "71.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹8cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "75%",
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
                21,
                46
            ],
            "inventoryDays": [
                173,
                106
            ],
            "payableDays": [
                83,
                128
            ],
            "cycleDays": [
                110,
                25
            ],
            "absorbed5y": -110,
            "receivables5y": -104,
            "inventory5y": -131,
            "payables5y": 121
        }
    },
    "CIE Automotive": {
        "costSplit": {
            "year": "FY25",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
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
                    "share": 14
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
                15.9,
                15.1,
                14.6,
                14.9,
                15.7,
                15.5,
                14.2,
                14.7,
                14.2,
                15.0,
                14.0,
                15.4,
                14.9
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
                "FY21",
                "FY22",
                "FY23",
                "FY24",
                "FY25"
            ],
            "ebitda": [
                942.0,
                1172.0,
                1424.0,
                1351.0,
                1362.0
            ],
            "ocf": [
                1051.0,
                1118.0,
                1383.0,
                881.0,
                1258.0
            ],
            "fcf": [
                524.0,
                617.0,
                853.0,
                494.0,
                881.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,287cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY25",
                "value": "14%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY21",
            "toYear": "FY25",
            "debtorDays": [
                36,
                24
            ],
            "inventoryDays": [
                148,
                86
            ],
            "payableDays": [
                212,
                143
            ],
            "cycleDays": [
                -28,
                -33
            ],
            "absorbed5y": 9,
            "receivables5y": 2,
            "inventory5y": -354,
            "payables5y": 487
        }
    },
    "Amara Raja Energy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 7
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
                13.1,
                14.4,
                15.0,
                14.1,
                13.4,
                13.3,
                12.4,
                11.1,
                10.7,
                10.8,
                11.0,
                10.9,
                9.6
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
                1031.0,
                1447.0,
                1662.0,
                1622.0,
                1505.0
            ],
            "ocf": [
                633.0,
                945.0,
                1266.0,
                1351.0,
                1118.0
            ],
            "fcf": [
                -128.0,
                434.0,
                395.0,
                151.0,
                -223.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹317cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                33,
                33
            ],
            "inventoryDays": [
                108,
                98
            ],
            "payableDays": [
                48,
                46
            ],
            "cycleDays": [
                93,
                85
            ],
            "absorbed5y": -875,
            "receivables5y": -426,
            "inventory5y": -1026,
            "payables5y": 414
        }
    },
    "Lumax Auto Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
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
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                151.0,
                201.0,
                369.0,
                465.0,
                659.0
            ],
            "ocf": [
                87.0,
                137.0,
                265.0,
                290.0,
                460.0
            ],
            "fcf": [
                36.0,
                54.0,
                161.0,
                110.0,
                212.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "41.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹572cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                64,
                76
            ],
            "inventoryDays": [
                41,
                52
            ],
            "payableDays": [
                84,
                108
            ],
            "cycleDays": [
                21,
                20
            ],
            "absorbed5y": -289,
            "receivables5y": -525,
            "inventory5y": -232,
            "payables5y": 409
        }
    },
    "Ramkrishna Forgings": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 19
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
                    "share": 15
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
                21.5,
                22.2,
                22.1,
                19.3,
                17.6,
                15.7,
                11.7,
                10.3,
                14.0,
                13.0,
                14.7,
                16.7,
                17.9
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
                518.0,
                694.0,
                774.0,
                561.0,
                627.0
            ],
            "ocf": [
                43.0,
                745.0,
                621.0,
                33.0,
                840.0
            ],
            "fcf": [
                -257.0,
                388.0,
                32.0,
                -944.0,
                -85.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "114.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,045cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
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
                68
            ],
            "inventoryDays": [
                251,
                211
            ],
            "payableDays": [
                215,
                193
            ],
            "cycleDays": [
                176,
                86
            ],
            "absorbed5y": -351,
            "receivables5y": -169,
            "inventory5y": -763,
            "payables5y": 711
        }
    },
    "Varroc Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 10
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
                360.0,
                575.0,
                756.0,
                775.0,
                821.0
            ],
            "ocf": [
                636.0,
                686.0,
                638.0,
                737.0,
                537.0
            ],
            "fcf": [
                -218.0,
                88.0,
                364.0,
                448.0,
                68.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "44.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹656cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "98%",
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
                32,
                30
            ],
            "inventoryDays": [
                58,
                60
            ],
            "payableDays": [
                127,
                97
            ],
            "cycleDays": [
                -36,
                -8
            ],
            "absorbed5y": 576,
            "receivables5y": -269,
            "inventory5y": -471,
            "payables5y": 470
        }
    },
    "ASK Automotive": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 3
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                9.7,
                9.3,
                10.5,
                10.5,
                11.7,
                12.0,
                12.1,
                12.2,
                13.5,
                13.0,
                13.0,
                11.5,
                11.6
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
                166.0,
                231.0,
                301.0,
                432.0,
                531.0
            ],
            "ocf": [
                144.0,
                139.0,
                303.0,
                360.0,
                301.0
            ],
            "fcf": [
                58.0,
                -15.0,
                18.0,
                14.0,
                -183.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹621cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "75%",
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
                36,
                26
            ],
            "inventoryDays": [
                33,
                41
            ],
            "payableDays": [
                47,
                49
            ],
            "cycleDays": [
                22,
                18
            ],
            "absorbed5y": -161,
            "receivables5y": -141,
            "inventory5y": -196,
            "payables5y": 225
        }
    },
    "Pricol": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
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
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                183.0,
                229.0,
                285.0,
                313.0,
                469.0
            ],
            "ocf": [
                183.0,
                163.0,
                255.0,
                223.0,
                281.0
            ],
            "fcf": [
                138.0,
                78.0,
                112.0,
                7.0,
                -42.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹246cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "75%",
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
                56,
                52
            ],
            "inventoryDays": [
                81,
                70
            ],
            "payableDays": [
                92,
                71
            ],
            "cycleDays": [
                45,
                51
            ],
            "absorbed5y": -237,
            "receivables5y": -269,
            "inventory5y": -258,
            "payables5y": 43
        }
    },
    "SJS Enterprises": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 43
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 28
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
                95.0,
                107.0,
                153.0,
                196.0,
                271.0
            ],
            "ocf": [
                61.0,
                87.0,
                109.0,
                163.0,
                224.0
            ],
            "fcf": [
                47.0,
                56.0,
                79.0,
                124.0,
                141.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹233cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "78%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "28%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                85,
                85
            ],
            "inventoryDays": [
                95,
                76
            ],
            "payableDays": [
                71,
                81
            ],
            "cycleDays": [
                109,
                81
            ],
            "absorbed5y": -20,
            "receivables5y": -107,
            "inventory5y": -25,
            "payables5y": 34
        }
    },
    "Suprajit Engineering": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 56
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 23
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                260.0,
                313.0,
                324.0,
                333.0,
                397.0
            ],
            "ocf": [
                182.0,
                239.0,
                249.0,
                185.0,
                171.0
            ],
            "fcf": [
                129.0,
                147.0,
                158.0,
                74.0,
                53.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹640cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                59,
                68
            ],
            "inventoryDays": [
                122,
                134
            ],
            "payableDays": [
                66,
                71
            ],
            "cycleDays": [
                116,
                131
            ],
            "absorbed5y": -304,
            "receivables5y": -58,
            "inventory5y": -156,
            "payables5y": -37
        }
    },
    "Steel Strips Wheels": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 66
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 5
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
                10.8,
                10.9,
                10.5,
                10.3,
                11.0,
                10.9,
                11.0,
                10.9,
                10.3,
                9.2,
                9.6,
                10.2,
                10.8
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
                453.0,
                443.0,
                464.0,
                484.0,
                510.0
            ],
            "ocf": [
                406.0,
                348.0,
                193.0,
                517.0,
                332.0
            ],
            "fcf": [
                237.0,
                211.0,
                -190.0,
                305.0,
                139.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹807cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "76%",
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
                40,
                43
            ],
            "inventoryDays": [
                108,
                102
            ],
            "payableDays": [
                110,
                108
            ],
            "cycleDays": [
                38,
                38
            ],
            "absorbed5y": -321,
            "receivables5y": -354,
            "inventory5y": -456,
            "payables5y": 585
        }
    },
    "Wheels India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 8
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
                4.8,
                3.7,
                5.0,
                7.6,
                6.8,
                7.1,
                7.6,
                8.1,
                7.4,
                7.4,
                7.3,
                8.1,
                7.5
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
                255.0,
                221.0,
                266.0,
                352.0,
                413.0
            ],
            "ocf": [
                28.0,
                370.0,
                329.0,
                400.0,
                477.0
            ],
            "fcf": [
                -107.0,
                215.0,
                179.0,
                191.0,
                200.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹686cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "106%",
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
                82,
                55
            ],
            "inventoryDays": [
                101,
                73
            ],
            "payableDays": [
                136,
                131
            ],
            "cycleDays": [
                46,
                -3
            ],
            "absorbed5y": 82,
            "receivables5y": -49,
            "inventory5y": -205,
            "payables5y": 344
        }
    },
    "Sharda Motor": {
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
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 2
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                216.0,
                282.0,
                361.0,
                396.0,
                419.0
            ],
            "ocf": [
                192.0,
                -200.0,
                370.0,
                271.0,
                363.0
            ],
            "fcf": [
                156.0,
                -303.0,
                370.0,
                271.0,
                363.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,182cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "59%",
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
                45,
                39
            ],
            "inventoryDays": [
                27,
                40
            ],
            "payableDays": [
                84,
                109
            ],
            "cycleDays": [
                -13,
                -30
            ],
            "absorbed5y": -269,
            "receivables5y": -40,
            "inventory5y": -144,
            "payables5y": 307
        }
    },
    "Lumax Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 5
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                135.0,
                208.0,
                231.0,
                280.0,
                406.0
            ],
            "ocf": [
                108.0,
                108.0,
                133.0,
                212.0,
                373.0
            ],
            "fcf": [
                -21.0,
                17.0,
                -129.0,
                -112.0,
                84.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹669cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                48,
                55
            ],
            "inventoryDays": [
                91,
                90
            ],
            "payableDays": [
                163,
                145
            ],
            "cycleDays": [
                -24,
                0
            ],
            "absorbed5y": -214,
            "receivables5y": -419,
            "inventory5y": -422,
            "payables5y": 664
        }
    },
    "Fiem Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
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
                    "share": 14
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
                194.0,
                249.0,
                269.0,
                322.0,
                396.0
            ],
            "ocf": [
                92.0,
                131.0,
                135.0,
                233.0,
                161.0
            ],
            "fcf": [
                73.0,
                76.0,
                51.0,
                103.0,
                31.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "19.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹214cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "53%",
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
                41,
                50
            ],
            "inventoryDays": [
                68,
                57
            ],
            "payableDays": [
                97,
                61
            ],
            "cycleDays": [
                12,
                46
            ],
            "absorbed5y": -377,
            "receivables5y": -307,
            "inventory5y": -150,
            "payables5y": 113
        }
    },
    "Rolex Rings": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
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
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                22.5,
                20.9,
                19.4,
                22.8,
                22.8,
                22.0,
                19.6,
                18.3,
                21.2,
                20.3,
                21.1,
                18.3,
                22.7
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
                229.0,
                261.0,
                262.0,
                241.0,
                230.0
            ],
            "ocf": [
                59.0,
                213.0,
                221.0,
                227.0,
                190.0
            ],
            "fcf": [
                -11.0,
                171.0,
                166.0,
                175.0,
                154.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "26.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹367cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                83,
                70
            ],
            "inventoryDays": [
                206,
                155
            ],
            "payableDays": [
                94,
                61
            ],
            "cycleDays": [
                195,
                164
            ],
            "absorbed5y": -90,
            "receivables5y": -37,
            "inventory5y": -64,
            "payables5y": -19
        }
    },
    "Uniparts India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 33
                },
                {
                    "label": "Power and factory costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 22
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                268.0,
                298.0,
                201.0,
                145.0,
                247.0
            ],
            "ocf": [
                85.0,
                253.0,
                200.0,
                182.0,
                174.0
            ],
            "fcf": [
                49.91,
                221.23,
                163.98,
                149.36,
                143.86
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹97cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "77%",
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
                58,
                44
            ],
            "inventoryDays": [
                417,
                409
            ],
            "payableDays": [
                81,
                127
            ],
            "cycleDays": [
                393,
                326
            ],
            "absorbed5y": -34,
            "receivables5y": 25,
            "inventory5y": -90,
            "payables5y": 45
        }
    },
    "Rane (Madras)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 59
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
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
                    "share": 9
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
                75.0,
                184.0,
                270.0,
                284.0,
                341.0
            ],
            "ocf": [
                -6.0,
                88.0,
                191.0,
                316.0,
                219.0
            ],
            "fcf": [
                -106.0,
                -20.0,
                -3.0,
                131.0,
                28.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "30.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹697cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "70%",
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
                74,
                75
            ],
            "inventoryDays": [
                76,
                80
            ],
            "payableDays": [
                115,
                88
            ],
            "cycleDays": [
                35,
                67
            ],
            "absorbed5y": -261,
            "receivables5y": -305,
            "inventory5y": -172,
            "payables5y": 142
        }
    },
    "Divgi Torqtransfer": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 39
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 20
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
                75.0,
                53.0,
                38.0,
                70.0
            ],
            "ocf": [
                51.0,
                41.0,
                32.0,
                35.0,
                41.0
            ],
            "fcf": [
                11.07,
                -27.430000000000007,
                -45.730000000000004,
                8.5,
                -3.3200000000000003
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "55.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "34.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹293cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                82,
                82
            ],
            "inventoryDays": [
                129,
                167
            ],
            "payableDays": [
                155,
                160
            ],
            "cycleDays": [
                57,
                88
            ],
            "absorbed5y": -38,
            "receivables5y": -26,
            "inventory5y": -32,
            "payables5y": 21
        }
    },
    "Sandhar Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 63
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 13
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                193.0,
                246.0,
                341.0,
                383.0,
                438.0
            ],
            "ocf": [
                49.0,
                308.0,
                275.0,
                247.0,
                210.0
            ],
            "fcf": [
                -248.0,
                51.0,
                38.0,
                -69.0,
                -89.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,030cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                70,
                62
            ],
            "inventoryDays": [
                67,
                67
            ],
            "payableDays": [
                100,
                93
            ],
            "cycleDays": [
                37,
                36
            ],
            "absorbed5y": -393,
            "receivables5y": -429,
            "inventory5y": -348,
            "payables5y": 394
        }
    },
    "JTEKT India": {
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
                166.0,
                215.0,
                185.0,
                200.0
            ],
            "ocf": [
                96.0,
                83.0,
                172.0,
                194.0,
                99.0
            ],
            "fcf": [
                -24.0,
                -10.0,
                -23.0,
                -85.0,
                -345.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹268cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                56,
                52
            ],
            "inventoryDays": [
                43,
                43
            ],
            "payableDays": [
                63,
                58
            ],
            "cycleDays": [
                36,
                37
            ],
            "absorbed5y": -135,
            "receivables5y": -130,
            "inventory5y": -95,
            "payables5y": 102
        }
    },
    "Carraro India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
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
                    "share": 10
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
                60.0,
                105.0,
                132.0,
                171.0,
                219.0
            ],
            "ocf": [
                96.0,
                80.0,
                112.0,
                76.0,
                135.0
            ],
            "fcf": [
                36.0,
                17.0,
                26.0,
                24.0,
                103.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹65cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                63,
                61
            ],
            "inventoryDays": [
                77,
                70
            ],
            "payableDays": [
                139,
                93
            ],
            "cycleDays": [
                0,
                38
            ],
            "absorbed5y": -141,
            "receivables5y": -97,
            "inventory5y": -130,
            "payables5y": 45
        }
    },
    "Talbros Auto Compont": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 11
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
                85.0,
                115.0,
                130.0,
                137.0
            ],
            "ocf": [
                52.0,
                57.0,
                67.0,
                80.0,
                85.0
            ],
            "fcf": [
                17.590000000000003,
                14.939999999999998,
                6.899999999999999,
                26.22,
                43.51
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹277cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                96,
                118
            ],
            "inventoryDays": [
                136,
                118
            ],
            "payableDays": [
                182,
                161
            ],
            "cycleDays": [
                49,
                75
            ],
            "absorbed5y": -132,
            "receivables5y": -142,
            "inventory5y": -43,
            "payables5y": 54
        }
    },
    "Auto.Axle": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                11.1,
                11.3,
                10.7,
                11.2,
                10.0,
                10.3,
                10.7,
                11.2,
                9.8,
                10.4,
                11.4,
                11.6,
                11.6
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
                135.0,
                257.0,
                246.0,
                220.0,
                237.0
            ],
            "ocf": [
                43.0,
                52.0,
                260.0,
                128.0,
                173.0
            ],
            "fcf": [
                21.0,
                36.0,
                241.0,
                102.0,
                100.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹385cr net cash",
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
                95,
                82
            ],
            "inventoryDays": [
                68,
                53
            ],
            "payableDays": [
                114,
                83
            ],
            "cycleDays": [
                49,
                52
            ],
            "absorbed5y": -233,
            "receivables5y": -209,
            "inventory5y": -14,
            "payables5y": 59
        }
    },
    "OBSC Perfection": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 71
                },
                {
                    "label": "Staff",
                    "share": 4
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
            "input": "Alloy and stainless steel bars price",
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
                20.1,
                15.7,
                17.9,
                18.1,
                19.3,
                17.1,
                17.9
            ],
            "index": [
                100,
                100,
                101,
                98,
                99,
                102,
                108
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
                7.0,
                10.0,
                21.0,
                25.0,
                40.0
            ],
            "ocf": [
                6.0,
                1.0,
                5.0,
                9.0,
                -2.0
            ],
            "fcf": [
                0.0,
                -13.0,
                -6.0,
                -24.0,
                -79.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "76.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "53.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹52cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "18%",
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
                102,
                110
            ],
            "inventoryDays": [
                73,
                110
            ],
            "payableDays": [
                150,
                119
            ],
            "cycleDays": [
                25,
                101
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        }
    },
    "Rajratan Global": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Power and factory costs",
                    "share": 14
                },
                {
                    "label": "Staff",
                    "share": 5
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
                12.3,
                15.9,
                14.6,
                14.2,
                13.6,
                15.5,
                11.9,
                13.1,
                12.6,
                13.6,
                13.2,
                9.2,
                13.2
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
                182.0,
                162.0,
                128.0,
                127.0,
                140.0
            ],
            "ocf": [
                119.0,
                162.0,
                107.0,
                57.0,
                75.0
            ],
            "fcf": [
                32.0,
                -4.0,
                -13.0,
                -2.0,
                -31.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "30.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹286cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "70%",
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
                74,
                81
            ],
            "inventoryDays": [
                56,
                54
            ],
            "payableDays": [
                79,
                72
            ],
            "cycleDays": [
                50,
                62
            ],
            "absorbed5y": -125,
            "receivables5y": -140,
            "inventory5y": -53,
            "payables5y": 91
        }
    },
    "RACL Geartech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 29
                },
                {
                    "label": "Power and factory costs",
                    "share": 31
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 7
                },
                {
                    "label": "Operating profit",
                    "share": 22
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
                24.9,
                23.3,
                23.7,
                22.0,
                18.2,
                18.5,
                21.2,
                21.9,
                18.7,
                20.3,
                22.8,
                22.2,
                24.1
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
                57.0,
                82.0,
                96.0,
                85.0,
                107.0
            ],
            "ocf": [
                12.0,
                60.0,
                35.0,
                56.0,
                92.0
            ],
            "fcf": [
                -45.0,
                -18.0,
                -61.0,
                8.0,
                39.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹221cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
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
                104,
                109
            ],
            "inventoryDays": [
                230,
                375
            ],
            "payableDays": [
                118,
                155
            ],
            "cycleDays": [
                215,
                329
            ],
            "absorbed5y": -182,
            "receivables5y": -92,
            "inventory5y": -105,
            "payables5y": 32
        }
    },
    "Rico Auto Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 62
                },
                {
                    "label": "Power and factory costs",
                    "share": 16
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 10
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
                9.5,
                9.8,
                11.1,
                10.8,
                8.0,
                8.6,
                8.2,
                9.3,
                9.9,
                9.7,
                9.6,
                7.1,
                4.6
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
                158.0,
                221.0,
                222.0,
                195.0,
                225.0
            ],
            "ocf": [
                216.0,
                160.0,
                247.0,
                193.0,
                326.0
            ],
            "fcf": [
                12.0,
                -40.0,
                76.0,
                31.0,
                30.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹706cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "112%",
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
                71,
                52
            ],
            "inventoryDays": [
                100,
                67
            ],
            "payableDays": [
                153,
                111
            ],
            "cycleDays": [
                17,
                7
            ],
            "absorbed5y": 107,
            "receivables5y": 71,
            "inventory5y": -16,
            "payables5y": 40
        }
    },
    "NDR Auto Components": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 75
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
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
                    "share": 10
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
                15.0,
                33.0,
                56.0,
                73.0,
                91.0
            ],
            "ocf": [
                1.0,
                48.0,
                27.0,
                84.0,
                37.0
            ],
            "fcf": [
                -28.0,
                2.0,
                -7.0,
                36.0,
                -36.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹44cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                48,
                45
            ],
            "inventoryDays": [
                44,
                28
            ],
            "payableDays": [
                84,
                74
            ],
            "cycleDays": [
                8,
                -1
            ],
            "absorbed5y": -22,
            "receivables5y": -69,
            "inventory5y": -35,
            "payables5y": 95
        }
    },
    "Kross": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 23
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 13
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
                30.0,
                58.0,
                81.0,
                81.0,
                88.0
            ],
            "ocf": [
                18.0,
                42.0,
                8.0,
                9.0,
                28.0
            ],
            "fcf": [
                6.0,
                23.0,
                -19.0,
                -19.0,
                -72.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹23cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "31%",
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
                62,
                107
            ],
            "inventoryDays": [
                94,
                105
            ],
            "payableDays": [
                44,
                60
            ],
            "cycleDays": [
                112,
                153
            ],
            "absorbed5y": -186,
            "receivables5y": -157,
            "inventory5y": -62,
            "payables5y": 44
        }
    },
    "Frontier Springs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 46
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 27
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
                12.0,
                15.2,
                15.2,
                15.9,
                19.6,
                21.2,
                20.7,
                24.3,
                26.7,
                26.5,
                24.7,
                28.9,
                24.4
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
                12.0,
                13.0,
                21.0,
                50.0,
                87.0
            ],
            "ocf": [
                10.0,
                10.0,
                12.0,
                22.0,
                31.0
            ],
            "fcf": [
                3.84,
                1.4700000000000006,
                4.18,
                7.23,
                16.43
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹41cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "46%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "27%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                74,
                69
            ],
            "inventoryDays": [
                215,
                83
            ],
            "payableDays": [
                150,
                33
            ],
            "cycleDays": [
                139,
                119
            ],
            "absorbed5y": -59,
            "receivables5y": -42,
            "inventory5y": -17,
            "payables5y": -1
        }
    },
    "Menon Bearings": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 41
                },
                {
                    "label": "Power and factory costs",
                    "share": 24
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 22
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY08",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                7.0,
                53.0,
                43.0,
                45.0,
                64.0
            ],
            "ocf": [
                9.0,
                50.0,
                28.0,
                27.0,
                23.0
            ],
            "fcf": [
                4.92,
                44.34,
                15.49,
                -4.02,
                -3.9400000000000013
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "38.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹28cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "65%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY08",
            "toYear": "FY26",
            "debtorDays": [
                119,
                111
            ],
            "inventoryDays": [
                161,
                93
            ],
            "payableDays": [
                90,
                60
            ],
            "cycleDays": [
                189,
                144
            ],
            "absorbed5y": -33,
            "receivables5y": -42,
            "inventory5y": -10,
            "payables5y": 12
        }
    },
    "Poojaa Precision Engg": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 43
                },
                {
                    "label": "Power and factory costs",
                    "share": 27
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 4
                },
                {
                    "label": "Operating profit",
                    "share": 18
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
                16.0,
                24.0,
                28.0,
                40.0,
                52.0
            ],
            "ocf": [
                14.0,
                12.0,
                16.0,
                16.0,
                24.0
            ],
            "fcf": [
                10.46,
                1.6400000000000006,
                2.25,
                -4.25,
                -1.4499999999999993
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "52.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "32.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹36cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                36,
                65
            ],
            "inventoryDays": [
                99,
                148
            ],
            "payableDays": [
                71,
                79
            ],
            "cycleDays": [
                63,
                134
            ],
            "absorbed5y": -51,
            "receivables5y": -44,
            "inventory5y": -31,
            "payables5y": 14
        }
    },
    "Studds Accessories": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
                },
                {
                    "label": "Power and factory costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Polypropylene price",
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
                18.6,
                17.4,
                18.7,
                20.1,
                19.5,
                19.0,
                18.5,
                11.8
            ],
            "index": [
                100,
                99,
                100,
                98,
                98,
                92,
                99,
                117
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
                60.0,
                91.0,
                105.0,
                123.0
            ],
            "ocf": [
                12.0,
                28.0,
                72.0,
                63.0,
                86.0
            ],
            "fcf": [
                -44.56,
                9.04,
                40.14,
                20.86,
                38.96
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "21.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹77cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
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
                22,
                24
            ],
            "inventoryDays": [
                62,
                107
            ],
            "payableDays": [
                73,
                69
            ],
            "cycleDays": [
                11,
                62
            ],
            "absorbed5y": -100,
            "receivables5y": -35,
            "inventory5y": -46,
            "payables5y": -20
        }
    },
    "Alicon Castalloy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
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
                    "share": 11
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
                11.0,
                12.1,
                12.8,
                13.8,
                13.2,
                12.1,
                8.7,
                11.1,
                11.7,
                12.9,
                10.2,
                9.3,
                9.3
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
                113.0,
                154.0,
                195.0,
                194.0,
                200.0
            ],
            "ocf": [
                77.0,
                87.0,
                158.0,
                204.0,
                239.0
            ],
            "fcf": [
                3.0,
                2.0,
                48.0,
                22.0,
                92.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹329cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "89%",
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
                136,
                110
            ],
            "inventoryDays": [
                88,
                62
            ],
            "payableDays": [
                145,
                135
            ],
            "cycleDays": [
                79,
                37
            ],
            "absorbed5y": -33,
            "receivables5y": -200,
            "inventory5y": -33,
            "payables5y": 210
        }
    },
    "Precision Camshafts": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 34
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 18
                },
                {
                    "label": "Other costs",
                    "share": 21
                },
                {
                    "label": "Operating profit",
                    "share": 9
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Iron and steel castings price",
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
                8.6,
                10.9,
                11.0,
                8.5,
                9.5,
                10.1,
                4.2,
                13.5,
                7.5,
                6.6,
                8.1,
                13.1,
                3.8
            ],
            "index": [
                100,
                98,
                97,
                98,
                97,
                96,
                96,
                95,
                97,
                99,
                100,
                100,
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
                114.0,
                111.0,
                101.0,
                82.0,
                69.0
            ],
            "ocf": [
                88.0,
                103.0,
                131.0,
                143.0,
                120.0
            ],
            "fcf": [
                32.0,
                41.0,
                66.0,
                89.0,
                42.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹379cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "123%",
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
                67,
                59
            ],
            "inventoryDays": [
                196,
                113
            ],
            "payableDays": [
                98,
                108
            ],
            "cycleDays": [
                166,
                64
            ],
            "absorbed5y": 90,
            "receivables5y": 88,
            "inventory5y": -16,
            "payables5y": 7
        }
    },
    "Sterling Tools": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 41
                },
                {
                    "label": "Power and factory costs",
                    "share": 27
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating profit",
                    "share": 9
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
                11.5,
                12.0,
                11.2,
                11.5,
                11.4,
                11.3,
                10.3,
                9.3,
                11.5,
                11.4,
                11.0,
                3.6,
                10.6
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
                66.0,
                98.0,
                108.0,
                110.0,
                77.0
            ],
            "ocf": [
                25.0,
                63.0,
                102.0,
                124.0,
                56.0
            ],
            "fcf": [
                -27.0,
                30.0,
                73.0,
                48.0,
                1.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "45.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹12cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "81%",
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
                45,
                44
            ],
            "inventoryDays": [
                189,
                172
            ],
            "payableDays": [
                52,
                80
            ],
            "cycleDays": [
                182,
                136
            ],
            "absorbed5y": -123,
            "receivables5y": 0,
            "inventory5y": -81,
            "payables5y": 0
        }
    },
    "Remsons Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Staff",
                    "share": 21
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 11
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
                20.0,
                26.0,
                31.0,
                37.0,
                50.0
            ],
            "ocf": [
                14.0,
                28.0,
                15.0,
                22.0,
                60.0
            ],
            "fcf": [
                4.43,
                14.14,
                3.41,
                -7.129999999999999,
                28.32
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹74cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "85%",
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
                66,
                59
            ],
            "inventoryDays": [
                93,
                114
            ],
            "payableDays": [
                98,
                96
            ],
            "cycleDays": [
                62,
                77
            ],
            "absorbed5y": -24,
            "receivables5y": -31,
            "inventory5y": -17,
            "payables5y": 19
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const autoRelatedValuationInputs: Record<string, ValuationInput> = {
    "Sona BLW Precision": {
        "netDebt": -456,
        "ttmEbitda": 1169.0,
        "mcapAtWriting": 51459.0,
        "peAtWriting": 70.8
    },
    "Exide Industries": {
        "netDebt": -4814,
        "ttmEbitda": 1953.0,
        "mcapAtWriting": 36010.0,
        "peAtWriting": 38.4
    },
    "Dhoot Transmission": {
        "netDebt": -178,
        "ttmEbitda": 713.0,
        "mcapAtWriting": 31920.0,
        "peAtWriting": 71.3
    },
    "Craftsman Automation": {
        "netDebt": 3430,
        "ttmEbitda": 1357.0,
        "mcapAtWriting": 28077.0,
        "peAtWriting": 59.9
    },
    "ZF Comm Vehic Contr": {
        "netDebt": -2177,
        "ttmEbitda": 661.0,
        "mcapAtWriting": 26792.0,
        "peAtWriting": 53.0
    },
    "Sundram Fasteners": {
        "netDebt": 413,
        "ttmEbitda": 1035.0,
        "mcapAtWriting": 24772.0,
        "peAtWriting": 39.9
    },
    "Gabriel India": {
        "netDebt": -176,
        "ttmEbitda": 477.0,
        "mcapAtWriting": 24576.0,
        "peAtWriting": 68.2
    },
    "Belrise Industries": {
        "netDebt": 567,
        "ttmEbitda": 1167.0,
        "mcapAtWriting": 23978.0,
        "peAtWriting": 47.0
    },
    "Motherson Sumi Wirin": {
        "netDebt": 164,
        "ttmEbitda": 1074.0,
        "mcapAtWriting": 22740.0,
        "peAtWriting": 36.2
    },
    "Shriram Pistons": {
        "netDebt": 797,
        "ttmEbitda": 939.0,
        "mcapAtWriting": 22019.0,
        "peAtWriting": 37.8
    },
    "Tenneco Clean Air": {
        "netDebt": -519,
        "ttmEbitda": 943.0,
        "mcapAtWriting": 20796.0,
        "peAtWriting": 33.5
    },
    "Minda Corp": {
        "netDebt": 1165,
        "ttmEbitda": 776.0,
        "mcapAtWriting": 16230.0,
        "peAtWriting": 40.3
    },
    "Sedemac Mechatronics": {
        "netDebt": 8,
        "ttmEbitda": 213.0,
        "mcapAtWriting": 15216.0,
        "peAtWriting": 129.0
    },
    "CIE Automotive": {
        "netDebt": -1287,
        "ttmEbitda": 1482.0,
        "mcapAtWriting": 14825.0,
        "peAtWriting": 16.5
    },
    "Amara Raja Energy": {
        "netDebt": -317,
        "ttmEbitda": 1539.0,
        "mcapAtWriting": 14495.0,
        "peAtWriting": 19.8
    },
    "Lumax Auto Tech": {
        "netDebt": 572,
        "ttmEbitda": 724.0,
        "mcapAtWriting": 13814.0,
        "peAtWriting": 41.7
    },
    "Ramkrishna Forgings": {
        "netDebt": 2045,
        "ttmEbitda": 701.0,
        "mcapAtWriting": 13073.0,
        "peAtWriting": 114.0
    },
    "Varroc Engineering": {
        "netDebt": 656,
        "ttmEbitda": 857.0,
        "mcapAtWriting": 12755.0,
        "peAtWriting": 44.7
    },
    "ASK Automotive": {
        "netDebt": 621,
        "ttmEbitda": 569.0,
        "mcapAtWriting": 12719.0,
        "peAtWriting": 40.2
    },
    "Pricol": {
        "netDebt": 246,
        "ttmEbitda": 495.0,
        "mcapAtWriting": 9256.0,
        "peAtWriting": 34.6
    },
    "SJS Enterprises": {
        "netDebt": -233,
        "ttmEbitda": 289.0,
        "mcapAtWriting": 7474.0,
        "peAtWriting": 39.2
    },
    "Suprajit Engineering": {
        "netDebt": 640,
        "ttmEbitda": 444.0,
        "mcapAtWriting": 6695.0,
        "peAtWriting": 35.6
    },
    "Steel Strips Wheels": {
        "netDebt": 807,
        "ttmEbitda": 552.0,
        "mcapAtWriting": 5956.0,
        "peAtWriting": 28.0
    },
    "Wheels India": {
        "netDebt": 686,
        "ttmEbitda": 431.0,
        "mcapAtWriting": 5894.0,
        "peAtWriting": 36.1
    },
    "Sharda Motor": {
        "netDebt": -1182,
        "ttmEbitda": 423.0,
        "mcapAtWriting": 5490.0,
        "peAtWriting": 16.4
    },
    "Lumax Industries": {
        "netDebt": 669,
        "ttmEbitda": 433.0,
        "mcapAtWriting": 5394.0,
        "peAtWriting": 26.8
    },
    "Fiem Industries": {
        "netDebt": -214,
        "ttmEbitda": 410.0,
        "mcapAtWriting": 5173.0,
        "peAtWriting": 19.7
    },
    "Rolex Rings": {
        "netDebt": -367,
        "ttmEbitda": 237.0,
        "mcapAtWriting": 5125.0,
        "peAtWriting": 26.5
    },
    "Uniparts India": {
        "netDebt": -97,
        "ttmEbitda": 277.0,
        "mcapAtWriting": 3826.0,
        "peAtWriting": 20.9
    },
    "Rane (Madras)": {
        "netDebt": 697,
        "ttmEbitda": 352.0,
        "mcapAtWriting": 3654.0,
        "peAtWriting": 30.2
    },
    "Divgi Torqtransfer": {
        "netDebt": -293,
        "ttmEbitda": 93.0,
        "mcapAtWriting": 3531.0,
        "peAtWriting": 55.8
    },
    "Sandhar Technologies": {
        "netDebt": 1030,
        "ttmEbitda": 460.0,
        "mcapAtWriting": 3455.0,
        "peAtWriting": 16.5
    },
    "JTEKT India": {
        "netDebt": 268,
        "ttmEbitda": 208.0,
        "mcapAtWriting": 3275.0,
        "peAtWriting": 42.7
    },
    "Carraro India": {
        "netDebt": 65,
        "ttmEbitda": 215.0,
        "mcapAtWriting": 3042.0,
        "peAtWriting": 21.8
    },
    "Talbros Auto Compont": {
        "netDebt": -277,
        "ttmEbitda": 145.0,
        "mcapAtWriting": 2823.0,
        "peAtWriting": 25.2
    },
    "Auto.Axle": {
        "netDebt": -385,
        "ttmEbitda": 249.0,
        "mcapAtWriting": 2584.0,
        "peAtWriting": 14.1
    },
    "OBSC Perfection": {
        "netDebt": 52,
        "ttmEbitda": 46.0,
        "mcapAtWriting": 2405.0,
        "peAtWriting": 76.4
    },
    "Rajratan Global": {
        "netDebt": 286,
        "ttmEbitda": 151.0,
        "mcapAtWriting": 2399.0,
        "peAtWriting": 30.1
    },
    "RACL Geartech": {
        "netDebt": 221,
        "ttmEbitda": 117.0,
        "mcapAtWriting": 1988.0,
        "peAtWriting": 40.0
    },
    "Rico Auto Industries": {
        "netDebt": 706,
        "ttmEbitda": 204.0,
        "mcapAtWriting": 1789.0,
        "peAtWriting": 50.0
    },
    "NDR Auto Components": {
        "netDebt": -44,
        "ttmEbitda": 96.0,
        "mcapAtWriting": 1776.0,
        "peAtWriting": 27.2
    },
    "Kross": {
        "netDebt": 23,
        "ttmEbitda": 94.0,
        "mcapAtWriting": 1728.0,
        "peAtWriting": 29.9
    },
    "Frontier Springs": {
        "netDebt": -41,
        "ttmEbitda": 85.0,
        "mcapAtWriting": 1700.0,
        "peAtWriting": 29.0
    },
    "Menon Bearings": {
        "netDebt": 28,
        "ttmEbitda": 66.0,
        "mcapAtWriting": 1671.0,
        "peAtWriting": 38.0
    },
    "Poojaa Precision Engg": {
        "netDebt": 36,
        "ttmEbitda": 52.0,
        "mcapAtWriting": 1627.0,
        "peAtWriting": 52.7
    },
    "Studds Accessories": {
        "netDebt": -77,
        "ttmEbitda": 111.0,
        "mcapAtWriting": 1613.0,
        "peAtWriting": 21.6
    },
    "Alicon Castalloy": {
        "netDebt": 329,
        "ttmEbitda": 199.0,
        "mcapAtWriting": 1198.0,
        "peAtWriting": 32.3
    },
    "Precision Camshafts": {
        "netDebt": -379,
        "ttmEbitda": 61.0,
        "mcapAtWriting": 1146.0,
        "peAtWriting": 36.4
    },
    "Sterling Tools": {
        "netDebt": -12,
        "ttmEbitda": 77.0,
        "mcapAtWriting": 870.0,
        "peAtWriting": 45.2
    },
    "Remsons Industries": {
        "netDebt": 74,
        "ttmEbitda": 49.0,
        "mcapAtWriting": 407.0,
        "peAtWriting": 22.9
    }
};
