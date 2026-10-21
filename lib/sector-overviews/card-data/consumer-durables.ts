import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const consumerDurablesCharts: Record<string, ProfileCharts> = {
    "Voltas": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 78
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
                    "share": 8
                },
                {
                    "label": "Operating profit",
                    "share": 3
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
                4.6,
                1.6,
                -0.3,
                3.6,
                8.0,
                5.0,
                5.3,
                6.3,
                3.9,
                1.4,
                4.7,
                3.8,
                4.9
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
                572.0,
                454.0,
                336.0,
                990.0,
                516.0
            ],
            "ocf": [
                584.0,
                159.0,
                762.0,
                -225.0,
                71.0
            ],
            "fcf": [
                536.0,
                -21.0,
                469.0,
                -433.0,
                -62.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "79.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "58.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,551cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "47%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "4%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                97,
                78
            ],
            "inventoryDays": [
                103,
                113
            ],
            "payableDays": [
                182,
                172
            ],
            "cycleDays": [
                18,
                19
            ],
            "absorbed5y": -1794,
            "receivables5y": -2256,
            "inventory5y": -2153,
            "payables5y": 2795
        }
    },
    "Blue Star": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 49
                },
                {
                    "label": "Power and factory costs",
                    "share": 29
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
                    "share": 8
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
                6.5,
                6.5,
                6.9,
                7.3,
                8.3,
                6.5,
                7.4,
                6.9,
                6.7,
                7.5,
                7.5,
                8.0,
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
                347.0,
                500.0,
                669.0,
                879.0,
                933.0
            ],
            "ocf": [
                87.0,
                243.0,
                289.0,
                688.0,
                154.0
            ],
            "fcf": [
                -131.0,
                -152.0,
                -152.0,
                316.0,
                -175.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "60.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "35.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹49cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "44%",
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
                72,
                63
            ],
            "inventoryDays": [
                125,
                131
            ],
            "payableDays": [
                223,
                177
            ],
            "cycleDays": [
                -26,
                16
            ],
            "absorbed5y": -1334,
            "receivables5y": -1491,
            "inventory5y": -1284,
            "payables5y": 1475
        }
    },
    "Metro Brands": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
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
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 30
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
                412.0,
                680.0,
                704.0,
                759.0,
                873.0
            ],
            "ocf": [
                220.0,
                381.0,
                590.0,
                698.0,
                474.0
            ],
            "fcf": [
                172.0,
                281.0,
                474.0,
                611.0,
                335.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "59.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹855cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "69%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "30%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                13,
                13
            ],
            "inventoryDays": [
                284,
                273
            ],
            "payableDays": [
                141,
                89
            ],
            "cycleDays": [
                155,
                197
            ],
            "absorbed5y": -578,
            "receivables5y": 31,
            "inventory5y": -518,
            "payables5y": 44
        }
    },
    "Kajaria Ceramics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 40
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
                    "share": 6
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
                612.0,
                593.0,
                706.0,
                635.0,
                869.0
            ],
            "ocf": [
                426.0,
                296.0,
                602.0,
                501.0,
                664.0
            ],
            "fcf": [
                157.0,
                64.0,
                302.0,
                280.0,
                537.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹565cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                51,
                47
            ],
            "inventoryDays": [
                122,
                105
            ],
            "payableDays": [
                78,
                61
            ],
            "cycleDays": [
                94,
                92
            ],
            "absorbed5y": -284,
            "receivables5y": -209,
            "inventory5y": -174,
            "payables5y": 128
        }
    },
    "Century Plyboards(I)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
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
                    "share": 14
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
                532.0,
                583.0,
                521.0,
                487.0,
                651.0
            ],
            "ocf": [
                276.0,
                438.0,
                252.0,
                -3.0,
                457.0
            ],
            "fcf": [
                -7.0,
                -53.0,
                -598.0,
                -668.0,
                45.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "52.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,700cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                42,
                42
            ],
            "inventoryDays": [
                128,
                143
            ],
            "payableDays": [
                61,
                53
            ],
            "cycleDays": [
                109,
                131
            ],
            "absorbed5y": -935,
            "receivables5y": -334,
            "inventory5y": -719,
            "payables5y": 205
        }
    },
    "Honasa Consumer (Mamaearth)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 30
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 47
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
                12.0,
                23.0,
                138.0,
                70.0,
                236.0
            ],
            "ocf": [
                45.0,
                -52.0,
                235.0,
                102.0,
                141.0
            ],
            "fcf": [
                42.0,
                -64.0,
                223.0,
                82.0,
                134.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "60.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "49.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹351cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "98%",
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
                28,
                30
            ],
            "inventoryDays": [
                86,
                92
            ],
            "payableDays": [
                219,
                193
            ],
            "cycleDays": [
                -105,
                -71
            ],
            "absorbed5y": -47,
            "receivables5y": -194,
            "inventory5y": -128,
            "payables5y": 284
        }
    },
    "Kansai Nerolac": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 58
                },
                {
                    "label": "Power and factory costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 15
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
                649.0,
                818.0,
                1028.0,
                942.0,
                975.0
            ],
            "ocf": [
                25.0,
                408.0,
                903.0,
                672.0,
                894.0
            ],
            "fcf": [
                -194.0,
                285.0,
                666.0,
                346.0,
                681.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,288cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                153,
                119
            ],
            "payableDays": [
                92,
                91
            ],
            "cycleDays": [
                123,
                95
            ],
            "absorbed5y": -503,
            "receivables5y": -581,
            "inventory5y": -343,
            "payables5y": 421
        }
    },
    "Akzo Nobel": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 59
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 14
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
                434.0,
                526.0,
                633.0,
                642.0,
                509.0
            ],
            "ocf": [
                121.0,
                486.0,
                486.0,
                312.0,
                93.0
            ],
            "fcf": [
                58.0,
                382.0,
                368.0,
                206.0,
                -1106.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "38.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹245cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "55%",
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
                57,
                61
            ],
            "inventoryDays": [
                129,
                99
            ],
            "payableDays": [
                164,
                131
            ],
            "cycleDays": [
                22,
                29
            ],
            "absorbed5y": -581,
            "receivables5y": -327,
            "inventory5y": -204,
            "payables5y": 68
        }
    },
    "Crompt.Greaves Cons.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 12
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
                9.8,
                8.9,
                10.4,
                10.9,
                10.8,
                10.6,
                13.0,
                9.6,
                8.2,
                10.3,
                11.9,
                10.0
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
                769.0,
                770.0,
                714.0,
                901.0,
                827.0
            ],
            "ocf": [
                723.0,
                553.0,
                843.0,
                750.0,
                723.0
            ],
            "fcf": [
                552.0,
                474.0,
                759.0,
                640.0,
                640.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "31.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹956cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "90%",
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
                42,
                49
            ],
            "inventoryDays": [
                71,
                49
            ],
            "payableDays": [
                100,
                122
            ],
            "cycleDays": [
                12,
                -24
            ],
            "absorbed5y": 321,
            "receivables5y": -505,
            "inventory5y": -17,
            "payables5y": 975
        }
    },
    "V-Guard Industri": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 64
                },
                {
                    "label": "Power and factory costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 8
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
                8.6,
                8.1,
                8.8,
                9.5,
                10.6,
                8.5,
                8.2,
                9.3,
                8.5,
                8.1,
                8.8,
                9.7,
                10.5
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
                341.0,
                320.0,
                428.0,
                514.0,
                527.0
            ],
            "ocf": [
                -37.0,
                424.0,
                393.0,
                477.0,
                459.0
            ],
            "fcf": [
                -162.0,
                321.0,
                265.0,
                356.0,
                279.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹170cr net cash",
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
                50,
                33
            ],
            "inventoryDays": [
                130,
                98
            ],
            "payableDays": [
                69,
                71
            ],
            "cycleDays": [
                112,
                60
            ],
            "absorbed5y": -97,
            "receivables5y": -113,
            "inventory5y": -356,
            "payables5y": 246
        }
    },
    "Whirlpool India": {
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
                    "share": 11
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 5
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
                6.0,
                4.8,
                4.1,
                8.3,
                8.5,
                5.1,
                4.0,
                9.1,
                8.7,
                3.5,
                5.1,
                5.5,
                5.1
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
                416.0,
                371.0,
                403.0,
                550.0,
                481.0
            ],
            "ocf": [
                98.0,
                270.0,
                610.0,
                571.0,
                298.0
            ],
            "fcf": [
                -72.0,
                89.0,
                544.0,
                451.0,
                35.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,194cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
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
                25,
                34
            ],
            "inventoryDays": [
                114,
                103
            ],
            "payableDays": [
                129,
                128
            ],
            "cycleDays": [
                10,
                9
            ],
            "absorbed5y": -20,
            "receivables5y": -317,
            "inventory5y": -131,
            "payables5y": 219
        }
    },
    "Bata India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 45
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
                    "share": 19
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
                427.0,
                804.0,
                797.0,
                751.0,
                726.0
            ],
            "ocf": [
                212.0,
                629.0,
                453.0,
                738.0,
                595.0
            ],
            "fcf": [
                163.0,
                534.0,
                352.0,
                665.0,
                529.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "46.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹855cr",
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
                11,
                19
            ],
            "inventoryDays": [
                292,
                164
            ],
            "payableDays": [
                153,
                77
            ],
            "cycleDays": [
                150,
                107
            ],
            "absorbed5y": -377,
            "receivables5y": -105,
            "inventory5y": -100,
            "payables5y": -107
        }
    },
    "Cello World": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
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
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Polypropylene price",
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
                25.2,
                24.5,
                25.0,
                26.0,
                25.7,
                24.3,
                22.8,
                22.9,
                20.6,
                21.8,
                19.1,
                19.7,
                18.8
            ],
            "index": [
                100,
                97,
                97,
                98,
                97,
                98,
                97,
                98,
                97,
                96,
                90,
                97,
                115
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
                334.0,
                421.0,
                509.0,
                510.0,
                471.0
            ],
            "ocf": [
                187.0,
                227.0,
                231.0,
                262.0,
                255.0
            ],
            "fcf": [
                135.0,
                113.0,
                -33.0,
                95.0,
                36.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹710cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
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
                109,
                118
            ],
            "inventoryDays": [
                233,
                191
            ],
            "payableDays": [
                78,
                54
            ],
            "cycleDays": [
                265,
                255
            ],
            "absorbed5y": -598,
            "receivables5y": -392,
            "inventory5y": -229,
            "payables5y": 68
        }
    },
    "Relaxo Footwears": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 41
                },
                {
                    "label": "Power and factory costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 12
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
                418.0,
                341.0,
                409.0,
                385.0,
                377.0
            ],
            "ocf": [
                56.0,
                400.0,
                235.0,
                406.0,
                348.0
            ],
            "fcf": [
                -84.0,
                215.0,
                -14.0,
                290.0,
                211.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹227cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "75%",
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
                34,
                40
            ],
            "inventoryDays": [
                202,
                184
            ],
            "payableDays": [
                67,
                87
            ],
            "cycleDays": [
                170,
                138
            ],
            "absorbed5y": -181,
            "receivables5y": -118,
            "inventory5y": -138,
            "payables5y": 42
        }
    },
    "Eureka Forbes": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 41
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 33
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
                18.0,
                145.0,
                199.0,
                266.0,
                314.0
            ],
            "ocf": [
                37.0,
                181.0,
                194.0,
                246.0,
                250.0
            ],
            "fcf": [
                32.0,
                160.0,
                166.0,
                186.0,
                162.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹447cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "96%",
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
                144,
                31
            ],
            "inventoryDays": [
                656,
                123
            ],
            "payableDays": [
                499,
                75
            ],
            "cycleDays": [
                300,
                80
            ],
            "absorbed5y": -141,
            "receivables5y": -78,
            "inventory5y": -117,
            "payables5y": 19
        }
    },
    "TTK Prestige": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 57
                },
                {
                    "label": "Power and factory costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 11
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
                10.4,
                11.1,
                11.5,
                12.4,
                9.2,
                9.6,
                10.9,
                7.7,
                6.6,
                11.5,
                9.0,
                9.2,
                10.1
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
                427.0,
                361.0,
                305.0,
                258.0,
                277.0
            ],
            "ocf": [
                294.0,
                199.0,
                289.0,
                157.0,
                210.0
            ],
            "fcf": [
                252.0,
                131.0,
                221.0,
                115.0,
                122.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "20.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹696cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
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
                44,
                35
            ],
            "inventoryDays": [
                134,
                146
            ],
            "payableDays": [
                89,
                62
            ],
            "cycleDays": [
                89,
                119
            ],
            "absorbed5y": -360,
            "receivables5y": -12,
            "inventory5y": -268,
            "payables5y": 33
        }
    },
    "Jyothy Labs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 53
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
                    "share": 18
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
                248.0,
                316.0,
                480.0,
                500.0,
                450.0
            ],
            "ocf": [
                201.0,
                329.0,
                458.0,
                312.0,
                412.0
            ],
            "fcf": [
                175.0,
                294.0,
                421.0,
                254.0,
                345.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹764cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "86%",
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
                23,
                32
            ],
            "inventoryDays": [
                84,
                80
            ],
            "payableDays": [
                67,
                74
            ],
            "cycleDays": [
                40,
                38
            ],
            "absorbed5y": -31,
            "receivables5y": -171,
            "inventory5y": -74,
            "payables5y": 124
        }
    },
    "Cera Sanitaryware": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 51
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 18
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
                221.0,
                293.0,
                295.0,
                293.0,
                269.0
            ],
            "ocf": [
                98.0,
                156.0,
                228.0,
                116.0,
                212.0
            ],
            "fcf": [
                84.0,
                121.0,
                165.0,
                88.0,
                191.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹816cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "59%",
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
                42,
                49
            ],
            "inventoryDays": [
                154,
                139
            ],
            "payableDays": [
                104,
                77
            ],
            "cycleDays": [
                92,
                111
            ],
            "absorbed5y": -207,
            "receivables5y": -91,
            "inventory5y": -226,
            "payables5y": 26
        }
    },
    "Sheela Foam": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 16
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
                315.0,
                298.0,
                304.0,
                252.0,
                395.0
            ],
            "ocf": [
                197.0,
                218.0,
                406.0,
                247.0,
                409.0
            ],
            "fcf": [
                34.0,
                6.0,
                -1943.0,
                101.0,
                272.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹284cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "94%",
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
                34,
                42
            ],
            "inventoryDays": [
                64,
                69
            ],
            "payableDays": [
                58,
                80
            ],
            "cycleDays": [
                40,
                31
            ],
            "absorbed5y": 8,
            "receivables5y": 0,
            "inventory5y": -55,
            "payables5y": 127
        }
    },
    "Borosil": {
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
                    "share": 11
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                146.0,
                67.0,
                139.0,
                170.0,
                169.0
            ],
            "ocf": [
                77.0,
                121.0,
                48.0,
                -19.0,
                119.0
            ],
            "fcf": [
                -11.0,
                -119.0,
                -127.0,
                -117.0,
                -19.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "43.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹62cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "50%",
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
                33,
                33
            ],
            "inventoryDays": [
                229,
                282
            ],
            "payableDays": [
                68,
                56
            ],
            "cycleDays": [
                194,
                259
            ],
            "absorbed5y": -285,
            "receivables5y": -123,
            "inventory5y": -302,
            "payables5y": 141
        }
    },
    "Campus Activewear": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 47
                },
                {
                    "label": "Power and factory costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 19
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
                243.0,
                254.0,
                211.0,
                244.0,
                292.0
            ],
            "ocf": [
                18.0,
                126.0,
                264.0,
                235.0,
                135.0
            ],
            "fcf": [
                -16.0,
                57.0,
                219.0,
                176.0,
                45.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "41.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹232cr",
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
                41,
                31
            ],
            "inventoryDays": [
                216,
                207
            ],
            "payableDays": [
                119,
                98
            ],
            "cycleDays": [
                138,
                140
            ],
            "absorbed5y": -312,
            "receivables5y": -88,
            "inventory5y": -272,
            "payables5y": 63
        }
    },
    "Stylam Industrie": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 53
                },
                {
                    "label": "Power and factory costs",
                    "share": 9
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
                104.0,
                155.0,
                184.0,
                185.0,
                221.0
            ],
            "ocf": [
                6.0,
                66.0,
                109.0,
                107.0,
                177.0
            ],
            "fcf": [
                -8.0,
                40.0,
                90.0,
                -1.0,
                -12.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹40cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "55%",
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
                66,
                67
            ],
            "inventoryDays": [
                129,
                132
            ],
            "payableDays": [
                56,
                50
            ],
            "cycleDays": [
                139,
                150
            ],
            "absorbed5y": -193,
            "receivables5y": -114,
            "inventory5y": -146,
            "payables5y": 26
        }
    },
    "Greenlam Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 46
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 20
                },
                {
                    "label": "Other costs",
                    "share": 16
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
                188.0,
                233.0,
                296.0,
                275.0,
                325.0
            ],
            "ocf": [
                71.0,
                169.0,
                194.0,
                210.0,
                292.0
            ],
            "fcf": [
                -16.0,
                -297.0,
                -441.0,
                -58.0,
                201.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "62.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,044cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
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
                28,
                26
            ],
            "inventoryDays": [
                195,
                197
            ],
            "payableDays": [
                99,
                131
            ],
            "cycleDays": [
                123,
                92
            ],
            "absorbed5y": -218,
            "receivables5y": -192,
            "inventory5y": -386,
            "payables5y": 361
        }
    },
    "Indigo Paints": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 53
                },
                {
                    "label": "Power and factory costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 9
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
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                182.0,
                238.0,
                233.0,
                255.0
            ],
            "ocf": [
                116.0,
                151.0,
                206.0,
                223.0
            ],
            "fcf": [
                -83.0,
                47.0,
                70.0,
                88.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹311cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "18%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                68,
                74
            ],
            "inventoryDays": [
                72,
                87
            ],
            "payableDays": [
                122,
                106
            ],
            "cycleDays": [
                18,
                55
            ],
            "absorbed5y": -68,
            "receivables5y": -108,
            "inventory5y": -57,
            "payables5y": 32
        }
    },
    "IFB Industries": {
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
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 6
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
                49.0,
                164.0,
                196.0,
                287.0,
                321.0
            ],
            "ocf": [
                51.0,
                106.0,
                351.0,
                118.0,
                299.0
            ],
            "fcf": [
                -23.0,
                39.0,
                286.0,
                12.0,
                190.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹279cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
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
                33,
                28
            ],
            "inventoryDays": [
                102,
                68
            ],
            "payableDays": [
                144,
                106
            ],
            "cycleDays": [
                -8,
                -10
            ],
            "absorbed5y": -50,
            "receivables5y": -170,
            "inventory5y": -171,
            "payables5y": 344
        }
    },
    "Wakefit Innovations": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
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
                    "share": 15
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
                -79.0,
                -85.0,
                36.0,
                60.0,
                186.0
            ],
            "ocf": [
                -148.0,
                -20.0,
                81.0,
                76.0,
                245.0
            ],
            "fcf": [
                -242.0,
                -60.0,
                52.0,
                25.0,
                215.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "23.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹51cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "198%",
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
                8,
                1
            ],
            "inventoryDays": [
                134,
                109
            ],
            "payableDays": [
                81,
                108
            ],
            "cycleDays": [
                61,
                2
            ],
            "absorbed5y": 70,
            "receivables5y": 6,
            "inventory5y": -126,
            "payables5y": 128
        }
    },
    "Symphony": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 52
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 12
                },
                {
                    "label": "Other costs",
                    "share": 23
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
                162.0,
                140.0,
                171.0,
                312.0,
                126.0
            ],
            "ocf": [
                57.0,
                125.0,
                162.0,
                259.0,
                -81.0
            ],
            "fcf": [
                48.0,
                114.0,
                154.0,
                236.0,
                -100.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "1039.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹147cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                73,
                49
            ],
            "inventoryDays": [
                111,
                193
            ],
            "payableDays": [
                95,
                79
            ],
            "cycleDays": [
                88,
                162
            ],
            "absorbed5y": -158,
            "receivables5y": -29,
            "inventory5y": -193,
            "payables5y": 11
        }
    },
    "Bajaj Electricals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 68
                },
                {
                    "label": "Power and factory costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 17
                },
                {
                    "label": "Operating profit",
                    "share": 3
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
                6.1,
                6.7,
                4.7,
                4.2,
                6.5,
                4.7,
                6.7,
                7.4,
                3.1,
                5.1,
                0.8,
                3.2,
                7.1
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
                250.0,
                375.0,
                260.0,
                307.0,
                138.0
            ],
            "ocf": [
                914.0,
                449.0,
                354.0,
                347.0,
                619.0
            ],
            "fcf": [
                838.0,
                368.0,
                223.0,
                293.0,
                532.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹501cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "202%",
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
                86,
                93
            ],
            "inventoryDays": [
                111,
                64
            ],
            "payableDays": [
                137,
                237
            ],
            "cycleDays": [
                60,
                -79
            ],
            "absorbed5y": 1222,
            "receivables5y": 15,
            "inventory5y": 397,
            "payables5y": 937
        }
    },
    "Greenply Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 59
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 14
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
                150.0,
                133.0,
                185.0,
                204.0,
                242.0
            ],
            "ocf": [
                92.0,
                62.0,
                111.0,
                219.0,
                247.0
            ],
            "fcf": [
                -140.0,
                -353.0,
                -32.0,
                141.0,
                90.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹432cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "80%",
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
                44,
                54
            ],
            "inventoryDays": [
                88,
                82
            ],
            "payableDays": [
                84,
                101
            ],
            "cycleDays": [
                47,
                35
            ],
            "absorbed5y": -256,
            "receivables5y": -263,
            "inventory5y": -268,
            "payables5y": 293
        }
    },
    "Orient Electric": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Power and factory costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 14
                },
                {
                    "label": "Operating profit",
                    "share": 7
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
                6.2,
                3.7,
                6.5,
                3.9,
                5.3,
                5.5,
                7.5,
                7.8,
                6.0,
                5.4,
                7.5,
                8.1,
                7.1
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
                231.0,
                151.0,
                145.0,
                204.0,
                229.0
            ],
            "ocf": [
                11.0,
                190.0,
                118.0,
                88.0,
                110.0
            ],
            "fcf": [
                -32.0,
                76.0,
                -57.0,
                33.0,
                76.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹0cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "7%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                58,
                68
            ],
            "inventoryDays": [
                67,
                68
            ],
            "payableDays": [
                93,
                96
            ],
            "cycleDays": [
                33,
                40
            ],
            "absorbed5y": -424,
            "receivables5y": -265,
            "inventory5y": -177,
            "payables5y": 114
        }
    },
    "Mayur Uniquoters": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 55
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
                    "share": 7
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
                126.0,
                139.0,
                159.0,
                191.0,
                235.0
            ],
            "ocf": [
                13.0,
                121.0,
                113.0,
                157.0,
                133.0
            ],
            "fcf": [
                -35.0,
                90.0,
                92.0,
                138.0,
                109.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹358cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                68,
                79
            ],
            "inventoryDays": [
                207,
                170
            ],
            "payableDays": [
                51,
                52
            ],
            "cycleDays": [
                224,
                197
            ],
            "absorbed5y": -156,
            "receivables5y": -93,
            "inventory5y": -87,
            "payables5y": 41
        }
    },
    "Carysil": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 32
                },
                {
                    "label": "Power and factory costs",
                    "share": 25
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 14
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
                105.0,
                110.0,
                131.0,
                140.0,
                180.0
            ],
            "ocf": [
                52.0,
                71.0,
                53.0,
                60.0,
                109.0
            ],
            "fcf": [
                -25.0,
                13.0,
                -40.0,
                13.0,
                -2.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹224cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "52%",
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
                76,
                64
            ],
            "inventoryDays": [
                212,
                319
            ],
            "payableDays": [
                162,
                125
            ],
            "cycleDays": [
                126,
                257
            ],
            "absorbed5y": -229,
            "receivables5y": -73,
            "inventory5y": -205,
            "payables5y": 63
        }
    },
    "Stove Kraft": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
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
                8.1,
                10.5,
                8.3,
                7.7,
                10.2,
                11.7,
                10.1,
                9.3,
                10.6,
                12.0,
                9.0,
                9.4,
                11.2
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
                96.0,
                101.0,
                121.0,
                151.0,
                157.0
            ],
            "ocf": [
                -5.0,
                76.0,
                113.0,
                130.0,
                258.0
            ],
            "fcf": [
                -117.0,
                -23.0,
                -1.0,
                48.0,
                147.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "55.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹87cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
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
                26
            ],
            "inventoryDays": [
                103,
                133
            ],
            "payableDays": [
                60,
                133
            ],
            "cycleDays": [
                74,
                27
            ],
            "absorbed5y": -29,
            "receivables5y": -60,
            "inventory5y": -204,
            "payables5y": 199
        }
    },
    "Somany Ceramics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 47
                },
                {
                    "label": "Power and factory costs",
                    "share": 23
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 7
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
                207.0,
                189.0,
                253.0,
                222.0,
                258.0
            ],
            "ocf": [
                143.0,
                165.0,
                393.0,
                141.0,
                247.0
            ],
            "fcf": [
                -128.0,
                -12.0,
                232.0,
                58.0,
                191.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "23.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹210cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "96%",
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
                41,
                39
            ],
            "inventoryDays": [
                119,
                97
            ],
            "payableDays": [
                114,
                92
            ],
            "cycleDays": [
                47,
                44
            ],
            "absorbed5y": 85,
            "receivables5y": -122,
            "inventory5y": -157,
            "payables5y": 365
        }
    },
    "Epack Durable": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 85
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
                    "share": 5
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
                6.6,
                3.9,
                8.2,
                10.5,
                6.7,
                2.4,
                6.1,
                11.0,
                8.2,
                -0.5,
                6.8,
                4.1,
                6.0
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
                69.0,
                102.0,
                115.0,
                155.0,
                107.0
            ],
            "ocf": [
                -29.0,
                19.0,
                257.0,
                31.0,
                -140.0
            ],
            "fcf": [
                -206.0,
                -213.0,
                100.0,
                -83.0,
                -456.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹711cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "25%",
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
                141,
                68
            ],
            "inventoryDays": [
                127,
                190
            ],
            "payableDays": [
                153,
                162
            ],
            "cycleDays": [
                115,
                96
            ],
            "absorbed5y": -402,
            "receivables5y": -103,
            "inventory5y": -680,
            "payables5y": 543
        }
    },
    "Eveready Industries India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 57
                },
                {
                    "label": "Power and factory costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 13
                },
                {
                    "label": "Other costs",
                    "share": 15
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
                119.0,
                110.0,
                141.0,
                153.0,
                164.0
            ],
            "ocf": [
                134.0,
                37.0,
                154.0,
                130.0,
                83.0
            ],
            "fcf": [
                122.0,
                13.0,
                120.0,
                34.0,
                -12.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹193cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "78%",
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
                11,
                29
            ],
            "inventoryDays": [
                122,
                134
            ],
            "payableDays": [
                81,
                94
            ],
            "cycleDays": [
                51,
                69
            ],
            "absorbed5y": -117,
            "receivables5y": -87,
            "inventory5y": -57,
            "payables5y": 40
        }
    },
    "Sirca Paints": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 9
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
                38.0,
                62.0,
                69.0,
                67.0,
                99.0
            ],
            "ocf": [
                35.0,
                -19.0,
                42.0,
                54.0,
                44.0
            ],
            "fcf": [
                13.0,
                -29.0,
                30.0,
                -53.0,
                16.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹83cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "47%",
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
                85,
                115
            ],
            "inventoryDays": [
                217,
                151
            ],
            "payableDays": [
                98,
                74
            ],
            "cycleDays": [
                204,
                193
            ],
            "absorbed5y": -100,
            "receivables5y": -113,
            "inventory5y": -47,
            "payables5y": 19
        }
    },
    "Greenpanel Inds.": {
        "costSplit": {
            "year": "FY26",
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
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 17
                },
                {
                    "label": "Operating profit",
                    "share": 4
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
                421.0,
                413.0,
                246.0,
                131.0,
                80.0
            ],
            "ocf": [
                360.0,
                339.0,
                135.0,
                78.0,
                111.0
            ],
            "fcf": [
                325.52,
                250.45,
                -212.38,
                -114.25,
                70.39
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "297.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹173cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "79%",
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
                9,
                21
            ],
            "inventoryDays": [
                90,
                89
            ],
            "payableDays": [
                81,
                55
            ],
            "cycleDays": [
                19,
                54
            ],
            "absorbed5y": -30,
            "receivables5y": 17,
            "inventory5y": -39,
            "payables5y": -7
        }
    },
    "Hindware Home Innov.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 26
                },
                {
                    "label": "Power and factory costs",
                    "share": 36
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
                176.0,
                246.0,
                238.0,
                143.0,
                199.0
            ],
            "ocf": [
                226.0,
                221.0,
                241.0,
                192.0,
                258.0
            ],
            "fcf": [
                186.0,
                25.0,
                58.0,
                -10.0,
                130.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹784cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "114%",
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
                49,
                61
            ],
            "inventoryDays": [
                158,
                341
            ],
            "payableDays": [
                59,
                242
            ],
            "cycleDays": [
                147,
                160
            ],
            "absorbed5y": 203,
            "receivables5y": -111,
            "inventory5y": -20,
            "payables5y": 313
        }
    },
    "All Time Plastic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 61
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 14
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Polypropylene price",
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
                19.2,
                19.8,
                17.4,
                16.2,
                18.4,
                10.9,
                15.1,
                15.1,
                14.2
            ],
            "index": [
                100,
                102,
                100,
                101,
                100,
                99,
                93,
                100,
                119
            ],
            "note": "Margin: filed results. Price: India wholesale price index for the item (Office of Economic Adviser), quarterly average."
        },
        "profitVsCash": {
            "years": [
                "FY25",
                "FY26"
            ],
            "ebitda": [
                101.0,
                90.0
            ],
            "ocf": [
                52.0,
                86.0
            ],
            "fcf": [
                -62.0,
                -47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹40cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "15%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                57,
                45
            ],
            "inventoryDays": [
                80,
                67
            ],
            "payableDays": [
                41,
                30
            ],
            "cycleDays": [
                96,
                82
            ],
            "absorbed5y": -21,
            "receivables5y": -24,
            "inventory5y": -16,
            "payables5y": 20
        }
    },
    "Orient Bell": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 44
                },
                {
                    "label": "Power and factory costs",
                    "share": 23
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 6
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
                57.0,
                47.0,
                21.0,
                28.0,
                40.0
            ],
            "ocf": [
                44.0,
                34.0,
                40.0,
                34.0,
                48.0
            ],
            "fcf": [
                16.0,
                -26.259999999999998,
                -24.230000000000004,
                27.55,
                42.46
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹42cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "104%",
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
                58,
                60
            ],
            "inventoryDays": [
                97,
                83
            ],
            "payableDays": [
                135,
                127
            ],
            "cycleDays": [
                20,
                15
            ],
            "absorbed5y": -3,
            "receivables5y": -22,
            "inventory5y": -7,
            "payables5y": 18
        }
    },
    "Rushil Decor": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Power and factory costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 9
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
        "profitVsCash": {
            "years": [
                "FY25",
                "FY26"
            ],
            "ebitda": [
                106.0,
                70.0
            ],
            "ocf": [
                108.0,
                89.0
            ],
            "fcf": [
                0.0,
                21.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹251cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "8%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                76,
                83
            ],
            "inventoryDays": [
                183,
                204
            ],
            "payableDays": [
                167,
                207
            ],
            "cycleDays": [
                92,
                79
            ],
            "absorbed5y": 14,
            "receivables5y": -32,
            "inventory5y": -38,
            "payables5y": 99
        }
    },
    "Bajaj Consumer Care": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 39
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
                    "share": 27
                },
                {
                    "label": "Operating profit",
                    "share": 19
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
                174.0,
                141.0,
                155.0,
                128.0,
                221.0
            ],
            "ocf": [
                129.0,
                101.0,
                116.0,
                65.0,
                197.0
            ],
            "fcf": [
                118.0,
                95.0,
                111.0,
                59.0,
                164.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "28.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹390cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
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
                8,
                24
            ],
            "inventoryDays": [
                57,
                52
            ],
            "payableDays": [
                45,
                34
            ],
            "cycleDays": [
                19,
                42
            ],
            "absorbed5y": -55,
            "receivables5y": -55,
            "inventory5y": -18,
            "payables5y": 26
        }
    },
    "Euro Pratik Sales": {
        "stats": [
            {
                "label": "P/E",
                "value": "22.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.0x",
                "note": "Market value minus net cash, ÷ operating profit over the last four quarters (₹119cr)."
            },
            {
                "label": "Net cash",
                "value": "₹8cr",
                "note": "Borrowings including leases (₹24cr) minus cash (₹16cr) and investments (₹14cr), March 2026; before the ₹42.7cr Fabwood payment."
            },
            {
                "label": "Operating margin FY26",
                "value": "34%",
                "note": "26% in Q1 FY27."
            },
            {
                "label": "Inventory days FY26",
                "value": "255",
                "note": "103 in FY24."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Goods bought (net of stock change)",
                    "share": 52
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
                    "share": 34
                }
            ],
            "note": "Consolidated P&L from the Q1 FY27 investor presentation: revenue ₹335.0cr, cost of goods ₹174.9cr, staff ₹16.8cr, other expenses ₹30.2cr. Asset-light, so no power or factory costs."
        },
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                73,
                107
            ],
            "inventoryDays": [
                103,
                255
            ],
            "payableDays": [
                1,
                42
            ],
            "cycleDays": [
                175,
                321
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                81,
                100,
                113
            ],
            "ocf": [
                75,
                -31,
                41
            ],
            "fcf": [
                74,
                -33,
                -14
            ],
            "note": "Screener has three years of consolidated figures, since listing in September 2025."
        }
    },
    "Varmora Granito": {
        "stats": [
            {
                "label": "P/E",
                "value": "33.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.4x",
                "note": "Market value minus net cash, ÷ operating profit over the last year."
            },
            {
                "label": "Net cash",
                "value": "₹45cr",
                "note": "Cash and deposits (₹372cr, company) minus borrowings (₹327cr, Screener), September 2026, after the IPO."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            },
            {
                "label": "Power and fuel ÷ income",
                "value": "21%",
                "note": "FY26, RHP."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials and bought-in tiles",
                    "share": 42
                },
                {
                    "label": "Power and fuel",
                    "share": 22
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs (freight, marketing, other)",
                    "share": 18
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "From the RHP's restated FY26 profit and loss. Materials include changes in stock."
        },
        "workingCapital": {
            "fromYear": "FY21",
            "toYear": "FY26",
            "debtorDays": [
                106,
                92
            ],
            "inventoryDays": [
                66,
                156
            ],
            "payableDays": [
                119,
                138
            ],
            "cycleDays": [
                53,
                110
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
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
                114,
                116,
                113,
                153,
                171
            ],
            "ocf": [
                68,
                -10,
                88,
                63,
                234
            ],
            "fcf": [
                -4,
                -23,
                -258,
                -40,
                202
            ]
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const consumerDurablesValuationInputs: Record<string, ValuationInput> = {
    "Voltas": {
        "netDebt": -2551,
        "ttmEbitda": 592.0,
        "mcapAtWriting": 37000.0,
        "peAtWriting": 79.2
    },
    "Blue Star": {
        "netDebt": -49,
        "ttmEbitda": 903.0,
        "mcapAtWriting": 32179.0,
        "peAtWriting": 60.8
    },
    "Metro Brands": {
        "netDebt": 855,
        "ttmEbitda": 888.0,
        "mcapAtWriting": 24044.0,
        "peAtWriting": 59.2
    },
    "Kajaria Ceramics": {
        "netDebt": -565,
        "ttmEbitda": 938.0,
        "mcapAtWriting": 19142.0,
        "peAtWriting": 33.2
    },
    "Century Plyboards(I)": {
        "netDebt": 1700,
        "ttmEbitda": 720.0,
        "mcapAtWriting": 15429.0,
        "peAtWriting": 52.0
    },
    "Honasa Consumer (Mamaearth)": {
        "netDebt": -351,
        "ttmEbitda": 300.0,
        "mcapAtWriting": 15176.0,
        "peAtWriting": 60.1
    },
    "Kansai Nerolac": {
        "netDebt": -2288,
        "ttmEbitda": 1000.0,
        "mcapAtWriting": 14610.0,
        "peAtWriting": 22.7
    },
    "Akzo Nobel": {
        "netDebt": -245,
        "ttmEbitda": 489.0,
        "mcapAtWriting": 14571.0,
        "peAtWriting": 38.0
    },
    "Crompt.Greaves Cons.": {
        "netDebt": -956,
        "ttmEbitda": 849.0,
        "mcapAtWriting": 14076.0,
        "peAtWriting": 31.1
    },
    "V-Guard Industri": {
        "netDebt": -170,
        "ttmEbitda": 594.0,
        "mcapAtWriting": 13298.0,
        "peAtWriting": 35.0
    },
    "Whirlpool India": {
        "netDebt": -2194,
        "ttmEbitda": 409.0,
        "mcapAtWriting": 11658.0,
        "peAtWriting": 42.8
    },
    "Bata India": {
        "netDebt": 855,
        "ttmEbitda": 712.0,
        "mcapAtWriting": 8095.0,
        "peAtWriting": 46.6
    },
    "Cello World": {
        "netDebt": -710,
        "ttmEbitda": 461.0,
        "mcapAtWriting": 7634.0,
        "peAtWriting": 24.0
    },
    "Relaxo Footwears": {
        "netDebt": -227,
        "ttmEbitda": 383.0,
        "mcapAtWriting": 7393.0,
        "peAtWriting": 39.9
    },
    "Eureka Forbes": {
        "netDebt": -447,
        "ttmEbitda": 321.0,
        "mcapAtWriting": 7175.0,
        "peAtWriting": 35.3
    },
    "TTK Prestige": {
        "netDebt": -696,
        "ttmEbitda": 317.0,
        "mcapAtWriting": 7183.0,
        "peAtWriting": 34.7
    },
    "Jyothy Labs": {
        "netDebt": -764,
        "ttmEbitda": 390.0,
        "mcapAtWriting": 7016.0,
        "peAtWriting": 24.7
    },
    "Cera Sanitaryware": {
        "netDebt": -816,
        "ttmEbitda": 265.0,
        "mcapAtWriting": 6960.0,
        "peAtWriting": 33.7
    },
    "Sheela Foam": {
        "netDebt": 284,
        "ttmEbitda": 427.0,
        "mcapAtWriting": 6930.0,
        "peAtWriting": 34.0
    },
    "Campus Activewear": {
        "netDebt": 232,
        "ttmEbitda": 297.0,
        "mcapAtWriting": 6419.0,
        "peAtWriting": 41.7
    },
    "Stylam Industrie": {
        "netDebt": -40,
        "ttmEbitda": 237.0,
        "mcapAtWriting": 5710.0,
        "peAtWriting": 33.6
    },
    "Greenlam Industries": {
        "netDebt": 1044,
        "ttmEbitda": 361.0,
        "mcapAtWriting": 5723.0,
        "peAtWriting": 62.1
    },
    "Indigo Paints": {
        "netDebt": -311,
        "ttmEbitda": 272.0,
        "mcapAtWriting": 5387.0,
        "peAtWriting": 32.6
    },
    "IFB Industries": {
        "netDebt": -279,
        "ttmEbitda": 340.0,
        "mcapAtWriting": 4965.0,
        "peAtWriting": 29.1
    },
    "Wakefit Innovations": {
        "netDebt": -51,
        "ttmEbitda": 193.0,
        "mcapAtWriting": 4688.0,
        "peAtWriting": 23.8
    },
    "Symphony": {
        "netDebt": -147,
        "ttmEbitda": 144.0,
        "mcapAtWriting": 4043.0,
        "peAtWriting": 1039.0,
        "lossMaking": true
    },
    "Bajaj Electricals": {
        "netDebt": -501,
        "ttmEbitda": 182.0,
        "mcapAtWriting": 3681.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Greenply Industries": {
        "netDebt": 432,
        "ttmEbitda": 261.0,
        "mcapAtWriting": 3588.0,
        "peAtWriting": 32.1
    },
    "Orient Electric": {
        "netDebt": 0,
        "ttmEbitda": 250.0,
        "mcapAtWriting": 3462.0,
        "peAtWriting": 29.0
    },
    "Mayur Uniquoters": {
        "netDebt": -358,
        "ttmEbitda": 251.0,
        "mcapAtWriting": 3170.0,
        "peAtWriting": 15.3
    },
    "Borosil": {
        "netDebt": 62,
        "ttmEbitda": 166.0,
        "mcapAtWriting": 3167.0,
        "peAtWriting": 43.4
    },
    "Carysil": {
        "netDebt": 224,
        "ttmEbitda": 187.0,
        "mcapAtWriting": 3027.0,
        "peAtWriting": 28.1
    },
    "Stove Kraft": {
        "netDebt": 87,
        "ttmEbitda": 184.0,
        "mcapAtWriting": 2696.0,
        "peAtWriting": 55.5
    },
    "Somany Ceramics": {
        "netDebt": 210,
        "ttmEbitda": 296.0,
        "mcapAtWriting": 2535.0,
        "peAtWriting": 23.1
    },
    "Eveready Industries India": {
        "netDebt": 193,
        "ttmEbitda": 171.0,
        "mcapAtWriting": 2341.0,
        "peAtWriting": 14.7
    },
    "Sirca Paints": {
        "netDebt": -83,
        "ttmEbitda": 100.0,
        "mcapAtWriting": 2330.0,
        "peAtWriting": 34.8
    },
    "Greenpanel Inds.": {
        "netDebt": 173,
        "ttmEbitda": 125.0,
        "mcapAtWriting": 1994.0,
        "peAtWriting": 297.0
    },
    "Epack Durable": {
        "netDebt": 711,
        "ttmEbitda": 105.0,
        "mcapAtWriting": 1736.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Hindware Home Innov.": {
        "netDebt": 784,
        "ttmEbitda": 199.0,
        "mcapAtWriting": 1453.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "All Time Plastic": {
        "netDebt": -40,
        "ttmEbitda": 85.0,
        "mcapAtWriting": 1317.0,
        "peAtWriting": 35.1
    },
    "Orient Bell": {
        "netDebt": -42,
        "ttmEbitda": 51.0,
        "mcapAtWriting": 601.0,
        "peAtWriting": 27.2
    },
    "Rushil Decor": {
        "netDebt": 251,
        "ttmEbitda": 90.0,
        "mcapAtWriting": 472.0,
        "peAtWriting": 20.7
    },
    "Bajaj Consumer Care": {
        "netDebt": -390,
        "ttmEbitda": 264.0,
        "mcapAtWriting": 6364.0,
        "peAtWriting": 28.5
    },
    "Euro Pratik Sales": {
        "netDebt": -8,
        "ttmEbitda": 119,
        "mcapAtWriting": 1916,
        "peAtWriting": 22.2
    },
    "Varmora Granito": {
        "netDebt": -45,
        "ttmEbitda": 207,
        "mcapAtWriting": 3034,
        "peAtWriting": 33.6
    }
};
