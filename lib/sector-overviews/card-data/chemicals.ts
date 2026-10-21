import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const chemicalsCharts: Record<string, ProfileCharts> = {
    "Gujarat Fluorochemic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 31
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 24
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
                1168.0,
                1965.0,
                915.0,
                1100.0,
                1201.0
            ],
            "ocf": [
                741.0,
                739.0,
                626.0,
                545.0,
                961.0
            ],
            "fcf": [
                67.0,
                8.0,
                -345.0,
                -337.0,
                -291.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "79.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,094cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                72,
                94
            ],
            "inventoryDays": [
                314,
                453
            ],
            "payableDays": [
                170,
                129
            ],
            "cycleDays": [
                216,
                417
            ],
            "absorbed5y": -1807,
            "receivables5y": -503,
            "inventory5y": -1070,
            "payables5y": 266
        }
    },
    "Navin Fluorine Intl": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 41
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 14
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
                    "share": 33
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
                356.0,
                550.0,
                399.0,
                534.0,
                1082.0
            ],
            "ocf": [
                75.0,
                -64.0,
                750.0,
                571.0,
                894.0
            ],
            "fcf": [
                -504.0,
                -822.0,
                18.0,
                4.0,
                405.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "55.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "35.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹54cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "76%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "33%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                90,
                83
            ],
            "inventoryDays": [
                149,
                121
            ],
            "payableDays": [
                85,
                144
            ],
            "cycleDays": [
                154,
                60
            ],
            "absorbed5y": -325,
            "receivables5y": -465,
            "inventory5y": -266,
            "payables5y": 698
        }
    },
    "Himadri Speciality": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 62
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 11
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
                156.0,
                399.0,
                645.0,
                854.0,
                962.0
            ],
            "ocf": [
                331.0,
                54.0,
                405.0,
                447.0,
                382.0
            ],
            "fcf": [
                308.0,
                -29.0,
                352.0,
                276.0,
                -68.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "33.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,025cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
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
                66,
                55
            ],
            "inventoryDays": [
                125,
                96
            ],
            "payableDays": [
                127,
                47
            ],
            "cycleDays": [
                65,
                103
            ],
            "absorbed5y": -901,
            "receivables5y": -200,
            "inventory5y": -423,
            "payables5y": 206
        }
    },
    "Deepak Nitrite": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 70
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 5
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
                1607.0,
                1292.0,
                1127.0,
                1095.0,
                987.0
            ],
            "ocf": [
                824.0,
                650.0,
                874.0,
                625.0,
                539.0
            ],
            "fcf": [
                637.0,
                289.0,
                106.0,
                -511.0,
                -660.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "27.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,156cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                61,
                70
            ],
            "inventoryDays": [
                53,
                57
            ],
            "payableDays": [
                46,
                35
            ],
            "cycleDays": [
                67,
                92
            ],
            "absorbed5y": -1502,
            "receivables5y": -770,
            "inventory5y": -468,
            "payables5y": 105
        }
    },
    "Aarti Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 59
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 15
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
                1720.0,
                1089.0,
                978.0,
                997.0,
                1168.0
            ],
            "ocf": [
                519.0,
                1319.0,
                1210.0,
                1238.0,
                781.0
            ],
            "fcf": [
                -646.0,
                -7.0,
                -118.0,
                -144.0,
                -343.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,226cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "85%",
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
                65,
                62
            ],
            "inventoryDays": [
                143,
                129
            ],
            "payableDays": [
                53,
                137
            ],
            "cycleDays": [
                155,
                54
            ],
            "absorbed5y": -514,
            "receivables5y": -659,
            "inventory5y": -1234,
            "payables5y": 1435
        }
    },
    "Deepak Fert & Petro": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 70
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 4
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
                1356.0,
                2165.0,
                1287.0,
                1925.0,
                1685.0
            ],
            "ocf": [
                1211.0,
                493.0,
                732.0,
                1880.0,
                206.0
            ],
            "fcf": [
                221.0,
                -716.0,
                -153.0,
                744.0,
                -1364.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹5,001cr",
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
                30,
                74
            ],
            "inventoryDays": [
                76,
                79
            ],
            "payableDays": [
                103,
                98
            ],
            "cycleDays": [
                3,
                55
            ],
            "absorbed5y": -2253,
            "receivables5y": -1448,
            "inventory5y": -1102,
            "payables5y": 793
        }
    },
    "Tata Chemicals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 22
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 41
                },
                {
                    "label": "Staff",
                    "share": 14
                },
                {
                    "label": "Other costs",
                    "share": 11
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
                2319.0,
                3820.0,
                2847.0,
                1953.0,
                1805.0
            ],
            "ocf": [
                1644.0,
                2971.0,
                3016.0,
                1761.0,
                1269.0
            ],
            "fcf": [
                367.0,
                1393.0,
                1182.0,
                -244.0,
                64.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,327cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                317,
                353
            ],
            "payableDays": [
                338,
                293
            ],
            "cycleDays": [
                35,
                113
            ],
            "absorbed5y": -1989,
            "receivables5y": -879,
            "inventory5y": -1398,
            "payables5y": 289
        }
    },
    "Supreme Petrochem": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 83
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 1
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
        "profitVsCash": {
            "years": [
                "FY07",
                "FY08",
                "FY09",
                "FY10",
                "FY26"
            ],
            "ebitda": [
                72.0,
                46.0,
                68.0,
                123.0,
                525.0
            ],
            "ocf": [
                70.0,
                58.0,
                54.0,
                45.0,
                247.0
            ],
            "fcf": [
                65.0,
                39.0,
                19.0,
                24.0,
                36.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "33.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹592cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY07",
            "toYear": "FY26",
            "debtorDays": [
                26,
                35
            ],
            "inventoryDays": [
                26,
                51
            ],
            "payableDays": [
                38,
                65
            ],
            "cycleDays": [
                14,
                21
            ],
            "absorbed5y": -222,
            "receivables5y": -266,
            "inventory5y": 34,
            "payables5y": -2
        }
    },
    "BASF India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 86
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 1
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
                    "share": 4
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY10",
                "FY20",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                170.0,
                279.0,
                890.0,
                730.0,
                660.0
            ],
            "ocf": [
                46.0,
                null,
                807.0,
                373.0,
                -110.0
            ],
            "fcf": [
                17.0,
                null,
                706.0,
                171.0,
                -316.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹749cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "4%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY10",
            "toYear": "FY26",
            "debtorDays": [
                70,
                67
            ],
            "inventoryDays": [
                138,
                77
            ],
            "payableDays": [
                134,
                104
            ],
            "cycleDays": [
                74,
                40
            ],
            "absorbed5y": -861,
            "receivables5y": -568,
            "inventory5y": -796,
            "payables5y": 510
        }
    },
    "Privi Speciality Che": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 50
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 12
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
                    "share": 26
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
                195.0,
                188.0,
                329.0,
                458.0,
                651.0
            ],
            "ocf": [
                5.0,
                49.0,
                354.0,
                281.0,
                550.0
            ],
            "fcf": [
                -304.0,
                -91.0,
                203.0,
                -18.0,
                230.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "22.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹897cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "25%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                69,
                75
            ],
            "inventoryDays": [
                279,
                235
            ],
            "payableDays": [
                138,
                150
            ],
            "cycleDays": [
                209,
                160
            ],
            "absorbed5y": -455,
            "receivables5y": -280,
            "inventory5y": -484,
            "payables5y": 361
        }
    },
    "Anupam Rasayan": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 56
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 13
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
                    "share": 22
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
                305.0,
                431.0,
                381.0,
                401.0,
                526.0
            ],
            "ocf": [
                -171.0,
                292.0,
                59.0,
                -30.0,
                334.0
            ],
            "fcf": [
                -318.0,
                71.0,
                -657.0,
                -440.0,
                -221.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "77.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,454cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "24%",
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
                95,
                148
            ],
            "inventoryDays": [
                852,
                490
            ],
            "payableDays": [
                225,
                261
            ],
            "cycleDays": [
                722,
                377
            ],
            "absorbed5y": -1383,
            "receivables5y": -980,
            "inventory5y": -1075,
            "payables5y": 572
        }
    },
    "PCBL Chemical": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 70
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 4
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
                653.0,
                731.0,
                1037.0,
                1337.0,
                1043.0
            ],
            "ocf": [
                290.0,
                504.0,
                1105.0,
                760.0,
                1576.0
            ],
            "fcf": [
                -16.0,
                -392.0,
                569.0,
                -14.0,
                849.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,237cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "88%",
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
                91,
                62
            ],
            "inventoryDays": [
                70,
                65
            ],
            "payableDays": [
                106,
                92
            ],
            "cycleDays": [
                55,
                35
            ],
            "absorbed5y": 76,
            "receivables5y": -377,
            "inventory5y": -280,
            "payables5y": 649
        }
    },
    "Alkyl Amines": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 51
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 16
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
                    "share": 20
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Ethanol (a key amine input) price",
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
                18.0,
                13.6,
                18.6,
                19.3,
                19.8,
                17.8,
                19.1,
                17.6,
                19.0,
                18.0,
                18.9,
                18.3,
                25.4
            ],
            "index": [
                100,
                100,
                102,
                100,
                99,
                100,
                103,
                103,
                101,
                102,
                100,
                100,
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
                326.0,
                348.0,
                252.0,
                291.0,
                285.0
            ],
            "ocf": [
                205.0,
                248.0,
                275.0,
                263.0,
                239.0
            ],
            "fcf": [
                -42.0,
                -55.0,
                153.0,
                215.0,
                111.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "42.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹252cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "82%",
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
                66,
                55
            ],
            "inventoryDays": [
                76,
                57
            ],
            "payableDays": [
                105,
                70
            ],
            "cycleDays": [
                36,
                42
            ],
            "absorbed5y": -67,
            "receivables5y": -3,
            "inventory5y": 0,
            "payables5y": -26
        }
    },
    "GNFC": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 52
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 25
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
                2384.0,
                1879.0,
                502.0,
                615.0,
                879.0
            ],
            "ocf": [
                1967.0,
                1373.0,
                31.0,
                605.0,
                654.0
            ],
            "fcf": [
                1829.0,
                1200.0,
                -220.0,
                152.0,
                108.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,797cr net cash",
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
                26,
                30
            ],
            "inventoryDays": [
                91,
                95
            ],
            "payableDays": [
                59,
                41
            ],
            "cycleDays": [
                58,
                85
            ],
            "absorbed5y": -357,
            "receivables5y": -128,
            "inventory5y": -250,
            "payables5y": 98
        }
    },
    "Clean Science": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 37
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 15
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
                    "share": 37
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
                300.0,
                403.0,
                332.0,
                388.0,
                356.0
            ],
            "ocf": [
                127.0,
                279.0,
                236.0,
                214.0,
                275.0
            ],
            "fcf": [
                -13.0,
                96.0,
                4.0,
                72.0,
                74.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹431cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "64%",
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
                82,
                79
            ],
            "inventoryDays": [
                143,
                157
            ],
            "payableDays": [
                166,
                118
            ],
            "cycleDays": [
                59,
                118
            ],
            "absorbed5y": -281,
            "receivables5y": -127,
            "inventory5y": -101,
            "payables5y": 56
        }
    },
    "Galaxy Surfactants": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 73
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 4
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
                401.0,
                568.0,
                462.0,
                484.0,
                467.0
            ],
            "ocf": [
                5.0,
                573.0,
                518.0,
                421.0,
                333.0
            ],
            "fcf": [
                -150.0,
                427.0,
                360.0,
                202.0,
                196.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹514cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "78%",
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
                63,
                52
            ],
            "inventoryDays": [
                103,
                76
            ],
            "payableDays": [
                75,
                62
            ],
            "cycleDays": [
                91,
                66
            ],
            "absorbed5y": -208,
            "receivables5y": -254,
            "inventory5y": -290,
            "payables5y": 336
        }
    },
    "Tanfac Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 60
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 14
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
                76.0,
                76.0,
                72.0,
                131.0,
                114.0
            ],
            "ocf": [
                44.0,
                43.0,
                34.0,
                33.0,
                43.0
            ],
            "fcf": [
                29.0,
                28.0,
                -2.0,
                -64.0,
                -39.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "109.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "66.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹45cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "42%",
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
                28,
                57
            ],
            "inventoryDays": [
                91,
                79
            ],
            "payableDays": [
                76,
                21
            ],
            "cycleDays": [
                43,
                115
            ],
            "absorbed5y": -176,
            "receivables5y": -123,
            "inventory5y": -69,
            "payables5y": 16
        }
    },
    "Balaji Amines": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 56
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 12
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
                    "share": 19
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Ethanol (a key amine input) price",
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
                21.1,
                14.2,
                19.3,
                23.7,
                17.1,
                17.6,
                14.7,
                17.0,
                15.4,
                17.6,
                17.2,
                23.8,
                25.4
            ],
            "index": [
                100,
                100,
                102,
                100,
                99,
                100,
                103,
                103,
                101,
                102,
                100,
                100,
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
                623.0,
                609.0,
                324.0,
                232.0,
                265.0
            ],
            "ocf": [
                220.0,
                354.0,
                334.0,
                255.0,
                184.0
            ],
            "fcf": [
                72.0,
                234.0,
                81.0,
                68.0,
                -186.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹138cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "66%",
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
                93,
                89
            ],
            "inventoryDays": [
                66,
                113
            ],
            "payableDays": [
                54,
                39
            ],
            "cycleDays": [
                105,
                163
            ],
            "absorbed5y": -350,
            "receivables5y": -41,
            "inventory5y": -136,
            "payables5y": -7
        }
    },
    "Neogen Chemicals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 54
                },
                {
                    "label": "Staff",
                    "share": 10
                },
                {
                    "label": "Other costs",
                    "share": 20
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
                87.0,
                112.0,
                110.0,
                136.0,
                137.0
            ],
            "ocf": [
                1.0,
                -30.0,
                -29.0,
                196.0,
                -231.0
            ],
            "fcf": [
                -169.0,
                -134.0,
                -332.0,
                -122.0,
                -787.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "202.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "55.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,390cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-16%",
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
                82,
                161
            ],
            "inventoryDays": [
                258,
                445
            ],
            "payableDays": [
                131,
                346
            ],
            "cycleDays": [
                209,
                260
            ],
            "absorbed5y": -627,
            "receivables5y": -306,
            "inventory5y": -647,
            "payables5y": 372
        }
    },
    "Fineotex Chemical": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 65
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 5
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                71.0,
                113.0,
                148.0,
                127.0,
                135.0
            ],
            "ocf": [
                13.0,
                107.0,
                97.0,
                69.0,
                -24.0
            ],
            "fcf": [
                -10.0,
                88.0,
                49.0,
                1.0,
                -49.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "57.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹355cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "44%",
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
                110,
                137
            ],
            "inventoryDays": [
                98,
                112
            ],
            "payableDays": [
                96,
                117
            ],
            "cycleDays": [
                111,
                133
            ],
            "absorbed5y": -221,
            "receivables5y": -207,
            "inventory5y": -126,
            "payables5y": 124
        }
    },
    "Archean Chemical Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 6
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 47
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
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                467.0,
                634.0,
                463.0,
                315.0,
                239.0
            ],
            "ocf": [
                315.0,
                496.0,
                379.0,
                176.0,
                140.0
            ],
            "fcf": [
                218.0,
                396.0,
                248.0,
                -88.0,
                -242.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "61.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "26.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹154cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "71%",
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
                49,
                43
            ],
            "inventoryDays": [
                null,
                null
            ],
            "payableDays": [
                416,
                598
            ],
            "cycleDays": [
                49,
                666
            ],
            "absorbed5y": -431,
            "receivables5y": -30,
            "inventory5y": -106,
            "payables5y": -9
        }
    },
    "Ellen. Indl. Gas": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 12
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 25
                },
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 21
                },
                {
                    "label": "Operating profit",
                    "share": 34
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
                63.0,
                34.0,
                62.0,
                110.0,
                117.0
            ],
            "ocf": [
                13.0,
                39.0,
                44.0,
                4.0,
                133.0
            ],
            "fcf": [
                -2.0,
                -56.0,
                -43.0,
                -65.0,
                -25.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "43.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹285cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
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
                52,
                68
            ],
            "inventoryDays": [
                91,
                131
            ],
            "payableDays": [
                108,
                135
            ],
            "cycleDays": [
                35,
                63
            ],
            "absorbed5y": -82,
            "receivables5y": -47,
            "inventory5y": -10,
            "payables5y": -17
        }
    },
    "Steamhouse India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Fuel for its own boilers",
                    "share": 33
                },
                {
                    "label": "Bought-in steam and traded coal",
                    "share": 39
                },
                {
                    "label": "Staff",
                    "share": 3
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
            "note": "Company expense split (prospectus); Screener shows fuel, bought-in steam and coal together as materials (70%). Coal trading stopped in April 2026."
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
                24.0,
                58.0,
                68.0,
                69.0,
                83.0
            ],
            "ocf": [
                27.0,
                46.0,
                21.0,
                107.0,
                100.0
            ],
            "fcf": [
                5.0,
                -36.0,
                -79.0,
                -33.0,
                -39.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "77.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "41.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹325cr",
                "note": "Borrowings including leases, minus cash, March 2026, before the September IPO; ₹180cr of IPO money is to repay debt."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "100%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "17%"
            }
        ],
        "statsAsOf": "18 Oct 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                35,
                29
            ],
            "inventoryDays": [
                7,
                44
            ],
            "payableDays": [
                74,
                99
            ],
            "cycleDays": [
                -32,
                -26
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        }
    },
    "Laxmi Organic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 67
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 15
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
                371.0,
                248.0,
                256.0,
                286.0,
                172.0
            ],
            "ocf": [
                46.0,
                199.0,
                561.0,
                108.0,
                175.0
            ],
            "fcf": [
                -243.0,
                -277.0,
                313.0,
                -286.0,
                -427.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "21.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹445cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "82%",
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
                79,
                67
            ],
            "inventoryDays": [
                65,
                70
            ],
            "payableDays": [
                123,
                140
            ],
            "cycleDays": [
                21,
                -3
            ],
            "absorbed5y": -105,
            "receivables5y": -64,
            "inventory5y": -113,
            "payables5y": 168
        }
    },
    "Yasho Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 60
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 8
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
                93.0,
                115.0,
                100.0,
                118.0,
                143.0
            ],
            "ocf": [
                16.0,
                13.0,
                90.0,
                -41.0,
                151.0
            ],
            "fcf": [
                -45.0,
                -141.0,
                -247.0,
                -54.0,
                77.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "88.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹540cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "40%",
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
                80
            ],
            "inventoryDays": [
                126,
                186
            ],
            "payableDays": [
                105,
                65
            ],
            "cycleDays": [
                99,
                201
            ],
            "absorbed5y": -296,
            "receivables5y": -109,
            "inventory5y": -175,
            "payables5y": -8
        }
    },
    "Vishnu Chemicals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 43
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 25
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 12
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
                158.0,
                231.0,
                202.0,
                229.0,
                253.0
            ],
            "ocf": [
                90.0,
                134.0,
                68.0,
                90.0,
                127.0
            ],
            "fcf": [
                7.0,
                17.0,
                -52.0,
                2.0,
                -130.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "31.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "19.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹426cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "47%",
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
                65,
                70
            ],
            "inventoryDays": [
                143,
                271
            ],
            "payableDays": [
                146,
                193
            ],
            "cycleDays": [
                63,
                149
            ],
            "absorbed5y": -444,
            "receivables5y": -194,
            "inventory5y": -322,
            "payables5y": 228
        }
    },
    "Epigral": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 57
                },
                {
                    "label": "Power, fuel and plant costs",
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
                    "share": 22
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
                509.0,
                689.0,
                481.0,
                711.0,
                566.0
            ],
            "ocf": [
                284.0,
                626.0,
                398.0,
                441.0,
                436.0
            ],
            "fcf": [
                -172.0,
                210.0,
                0.0,
                246.0,
                42.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹544cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                60,
                60
            ],
            "inventoryDays": [
                74,
                89
            ],
            "payableDays": [
                42,
                66
            ],
            "cycleDays": [
                92,
                83
            ],
            "absorbed5y": -397,
            "receivables5y": -297,
            "inventory5y": -295,
            "payables5y": 168
        }
    },
    "Tatva Chintan": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 44
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 14
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
                109.0,
                61.0,
                69.0,
                35.0,
                94.0
            ],
            "ocf": [
                20.0,
                28.0,
                98.0,
                25.0,
                31.0
            ],
            "fcf": [
                -69.0,
                -175.0,
                -31.0,
                -51.0,
                -83.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "80.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "39.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹107cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "55%",
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
                48,
                86
            ],
            "inventoryDays": [
                319,
                319
            ],
            "payableDays": [
                83,
                95
            ],
            "cycleDays": [
                283,
                310
            ],
            "absorbed5y": -133,
            "receivables5y": -23,
            "inventory5y": -124,
            "payables5y": 3
        }
    },
    "Refex Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 81
                },
                {
                    "label": "Staff",
                    "share": 2
                },
                {
                    "label": "Other costs",
                    "share": 1
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
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                68.0,
                175.0,
                146.0,
                206.0,
                362.0
            ],
            "ocf": [
                123.0,
                28.0,
                3.0,
                -248.0,
                107.0
            ],
            "fcf": [
                117.0,
                -44.0,
                -43.0,
                -413.0,
                47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹168cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "1%",
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
                54,
                142
            ],
            "inventoryDays": [
                4,
                15
            ],
            "payableDays": [
                70,
                92
            ],
            "cycleDays": [
                -12,
                65
            ],
            "absorbed5y": -885,
            "receivables5y": -807,
            "inventory5y": -71,
            "payables5y": 460
        }
    },
    "GHCL": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 36
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 25
                },
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 13
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
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                730.0,
                1503.0,
                851.0,
                877.0,
                690.0
            ],
            "ocf": [
                643.0,
                856.0,
                797.0,
                638.0,
                687.0
            ],
            "fcf": [
                306.0,
                498.0,
                690.0,
                323.0,
                423.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "4.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,049cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "78%",
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
                27,
                21
            ],
            "inventoryDays": [
                294,
                199
            ],
            "payableDays": [
                107,
                94
            ],
            "cycleDays": [
                214,
                126
            ],
            "absorbed5y": -245,
            "receivables5y": -124,
            "inventory5y": -397,
            "payables5y": 19
        }
    },
    "Styrenix Performance": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 72
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 9
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
                    "share": 10
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY15",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                86.0,
                264.0,
                352.0,
                344.0
            ],
            "ocf": [
                null,
                216.0,
                54.0,
                183.0
            ],
            "fcf": [
                null,
                177.0,
                -435.0,
                26.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹378cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "10%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY15",
            "toYear": "FY26",
            "debtorDays": [
                48,
                46
            ],
            "inventoryDays": [
                47,
                98
            ],
            "payableDays": [
                67,
                62
            ],
            "cycleDays": [
                29,
                81
            ],
            "absorbed5y": -310,
            "receivables5y": -74,
            "inventory5y": -276,
            "payables5y": 34
        }
    },
    "Premier Explosives": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 58
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 5
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
                21.0,
                26.0,
                58.0,
                58.0,
                40.0
            ],
            "ocf": [
                -2.0,
                21.0,
                79.0,
                118.0,
                -1.0
            ],
            "fcf": [
                -16.43,
                6.699999999999999,
                55.61,
                104.58,
                -28.83
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "106.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "151.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹28cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "106%",
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
                131,
                50
            ],
            "inventoryDays": [
                142,
                168
            ],
            "payableDays": [
                79,
                68
            ],
            "cycleDays": [
                193,
                150
            ],
            "absorbed5y": -11,
            "receivables5y": -51,
            "inventory5y": -67,
            "payables5y": 105
        }
    },
    "Kiri Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 77
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 11
                },
                {
                    "label": "Operating loss",
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
                121.0,
                -37.0,
                -12.0,
                -54.0,
                -99.0
            ],
            "ocf": [
                92.0,
                89.0,
                -61.0,
                -342.0,
                4555.0
            ],
            "fcf": [
                54.0,
                67.0,
                -70.0,
                -749.0,
                4268.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "4.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "n/m",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,354cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "-12%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                70,
                45
            ],
            "inventoryDays": [
                90,
                96
            ],
            "payableDays": [
                119,
                205
            ],
            "cycleDays": [
                41,
                -64
            ],
            "absorbed5y": -1338,
            "receivables5y": 88,
            "inventory5y": -80,
            "payables5y": 122
        }
    },
    "Nocil": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 59
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 7
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 8
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "marginVsInput": {
            "input": "Aniline price",
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
                14.1,
                12.8,
                14.4,
                12.6,
                11.0,
                10.5,
                7.5,
                10.0,
                9.2,
                6.9,
                8.5,
                6.4,
                11.2
            ],
            "index": [
                100,
                90,
                88,
                93,
                88,
                86,
                83,
                84,
                85,
                80,
                80,
                84,
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
                288.0,
                253.0,
                195.0,
                137.0,
                101.0
            ],
            "ocf": [
                -30.0,
                282.0,
                201.0,
                26.0,
                252.0
            ],
            "fcf": [
                -66.0,
                252.0,
                166.0,
                -97.0,
                77.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "45.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹442cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "75%",
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
                104,
                81
            ],
            "inventoryDays": [
                141,
                75
            ],
            "payableDays": [
                91,
                72
            ],
            "cycleDays": [
                154,
                84
            ],
            "absorbed5y": -25,
            "receivables5y": 29,
            "inventory5y": 8,
            "payables5y": -17
        }
    },
    "Chemplast Sanmar": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 63
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 19
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
                1197.0,
                468.0,
                21.0,
                219.0,
                198.0
            ],
            "ocf": [
                901.0,
                355.0,
                -245.0,
                172.0,
                294.0
            ],
            "fcf": [
                789.0,
                -65.0,
                -864.0,
                -210.0,
                -22.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "68.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,411cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "70%",
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
                12,
                8
            ],
            "inventoryDays": [
                70,
                82
            ],
            "payableDays": [
                189,
                224
            ],
            "cycleDays": [
                -108,
                -133
            ],
            "absorbed5y": -375,
            "receivables5y": -90,
            "inventory5y": -313,
            "payables5y": 28
        }
    },
    "DDev Plastiks": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 82
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 2
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
                106.0,
                160.0,
                258.0,
                270.0,
                287.0
            ],
            "ocf": [
                26.0,
                145.0,
                116.0,
                137.0,
                85.0
            ],
            "fcf": [
                7.0,
                116.0,
                93.0,
                79.0,
                -11.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹7cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "47%",
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
                57,
                69
            ],
            "inventoryDays": [
                52,
                59
            ],
            "payableDays": [
                66,
                43
            ],
            "cycleDays": [
                43,
                85
            ],
            "absorbed5y": -472,
            "receivables5y": -320,
            "inventory5y": -165,
            "payables5y": -36
        }
    },
    "Stallion India Fluor": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 80
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
                33.0,
                18.0,
                24.0,
                48.0,
                58.0
            ],
            "ocf": [
                8.0,
                -3.0,
                -73.0,
                -13.0,
                39.0
            ],
            "fcf": [
                7.0,
                -3.0,
                -75.0,
                -18.0,
                -10.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "50.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "33.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹400cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-23%",
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
                56,
                66
            ],
            "inventoryDays": [
                113,
                134
            ],
            "payableDays": [
                76,
                19
            ],
            "cycleDays": [
                93,
                180
            ],
            "absorbed5y": -169,
            "receivables5y": 9,
            "inventory5y": -95,
            "payables5y": -80
        }
    },
    "Rossari Biotech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 70
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 7
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 5
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
                184.0,
                223.0,
                250.0,
                265.0,
                286.0
            ],
            "ocf": [
                29.0,
                152.0,
                43.0,
                137.0,
                65.0
            ],
            "fcf": [
                -9.0,
                119.0,
                -88.0,
                -22.0,
                -200.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹282cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "35%",
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
                75,
                85
            ],
            "inventoryDays": [
                63,
                88
            ],
            "payableDays": [
                61,
                71
            ],
            "cycleDays": [
                76,
                103
            ],
            "absorbed5y": -524,
            "receivables5y": -405,
            "inventory5y": -263,
            "payables5y": 145
        }
    },
    "JG Chemicals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 82
                },
                {
                    "label": "Staff",
                    "share": 2
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
                57.0,
                76.0,
                46.0,
                87.0,
                82.0
            ],
            "ocf": [
                7.0,
                31.0,
                76.0,
                -11.0,
                44.0
            ],
            "fcf": [
                -2.0,
                21.0,
                67.0,
                -16.0,
                5.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹168cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "42%",
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
                57,
                64
            ],
            "inventoryDays": [
                65,
                42
            ],
            "payableDays": [
                4,
                5
            ],
            "cycleDays": [
                118,
                101
            ],
            "absorbed5y": -135,
            "receivables5y": -80,
            "inventory5y": -46,
            "payables5y": -1
        }
    },
    "SH Kelkar & Co": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 56
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 13
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
                215.0,
                217.0,
                308.0,
                296.0,
                242.0
            ],
            "ocf": [
                50.0,
                197.0,
                107.0,
                16.0,
                263.0
            ],
            "fcf": [
                50.0,
                128.0,
                46.0,
                -80.0,
                57.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "41.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹953cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "50%",
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
                108,
                98
            ],
            "inventoryDays": [
                225,
                182
            ],
            "payableDays": [
                143,
                91
            ],
            "cycleDays": [
                190,
                189
            ],
            "absorbed5y": -481,
            "receivables5y": -226,
            "inventory5y": -288,
            "payables5y": 72
        }
    },
    "Camlin Fine": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 54
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 16
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
                    "share": 7
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
                158.0,
                211.0,
                170.0,
                227.0,
                118.0
            ],
            "ocf": [
                145.0,
                51.0,
                139.0,
                23.0,
                82.0
            ],
            "fcf": [
                -69.0,
                -93.0,
                78.0,
                -19.0,
                20.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹537cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "50%",
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
                77,
                79
            ],
            "inventoryDays": [
                178,
                199
            ],
            "payableDays": [
                112,
                200
            ],
            "cycleDays": [
                143,
                78
            ],
            "absorbed5y": -148,
            "receivables5y": 0,
            "inventory5y": 0,
            "payables5y": 0
        }
    },
    "IG Petrochem.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 78
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 5
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
                407.0,
                318.0,
                105.0,
                221.0,
                101.0
            ],
            "ocf": [
                109.0,
                233.0,
                37.0,
                261.0,
                102.0
            ],
            "fcf": [
                9.0,
                -7.0,
                -137.0,
                124.0,
                -61.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹88cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "64%",
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
                67,
                66
            ],
            "inventoryDays": [
                45,
                50
            ],
            "payableDays": [
                87,
                94
            ],
            "cycleDays": [
                25,
                23
            ],
            "absorbed5y": -288,
            "receivables5y": -148,
            "inventory5y": -63,
            "payables5y": 203
        }
    },
    "Oriental Aromatics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 66
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 13
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
                    "share": 7
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
                93.0,
                54.0,
                47.0,
                94.0,
                68.0
            ],
            "ocf": [
                -1.0,
                -22.0,
                142.0,
                -34.0,
                2.0
            ],
            "fcf": [
                -60.5,
                -68.7,
                42.629999999999995,
                -121.04,
                -9.78
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "338.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "31.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹388cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "24%",
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
                81,
                89
            ],
            "inventoryDays": [
                183,
                203
            ],
            "payableDays": [
                52,
                44
            ],
            "cycleDays": [
                213,
                247
            ],
            "absorbed5y": -240,
            "receivables5y": -105,
            "inventory5y": -152,
            "payables5y": 17
        }
    },
    "Sh. Pushkar Chem.": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 66
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 12
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
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                80.0,
                69.0,
                61.0,
                84.0,
                100.0
            ],
            "ocf": [
                42.0,
                50.0,
                16.0,
                38.0,
                102.0
            ],
            "fcf": [
                -16.0,
                24.0,
                -31.0,
                -9.0,
                -14.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹11cr net cash",
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
                67
            ],
            "inventoryDays": [
                94,
                77
            ],
            "payableDays": [
                87,
                91
            ],
            "cycleDays": [
                66,
                53
            ],
            "absorbed5y": -101,
            "receivables5y": -104,
            "inventory5y": -80,
            "payables5y": 110
        }
    },
    "DCW": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 55
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 20
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
                328.0,
                429.0,
                177.0,
                194.0,
                225.0
            ],
            "ocf": [
                178.0,
                226.0,
                252.0,
                191.0,
                278.0
            ],
            "fcf": [
                140.0,
                140.0,
                158.0,
                115.0,
                185.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹66cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "83%",
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
                17,
                24
            ],
            "inventoryDays": [
                63,
                96
            ],
            "payableDays": [
                76,
                122
            ],
            "cycleDays": [
                5,
                -1
            ],
            "absorbed5y": -170,
            "receivables5y": -97,
            "inventory5y": -141,
            "payables5y": 69
        }
    },
    "Excel Industries": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 53
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 14
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
                232.0,
                129.0,
                25.0,
                121.0,
                114.0
            ],
            "ocf": [
                109.0,
                125.0,
                72.0,
                62.0,
                53.0
            ],
            "fcf": [
                35.0,
                92.0,
                40.0,
                18.0,
                -26.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "0.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,136cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                62,
                87
            ],
            "inventoryDays": [
                103,
                81
            ],
            "payableDays": [
                112,
                94
            ],
            "cycleDays": [
                52,
                74
            ],
            "absorbed5y": -101,
            "receivables5y": -88,
            "inventory5y": -60,
            "payables5y": 45
        }
    },
    "Sudarshan Chemicals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 51
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 17
                },
                {
                    "label": "Other costs",
                    "share": 13
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
                278.0,
                213.0,
                318.0,
                383.0,
                603.0
            ],
            "ocf": [
                178.0,
                287.0,
                193.0,
                71.0,
                344.0
            ],
            "fcf": [
                -132.0,
                95.0,
                115.0,
                -35.0,
                60.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "95.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹832cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "60%",
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
                83,
                63
            ],
            "inventoryDays": [
                163,
                179
            ],
            "payableDays": [
                150,
                113
            ],
            "cycleDays": [
                96,
                129
            ],
            "absorbed5y": -245,
            "receivables5y": -247,
            "inventory5y": 147,
            "payables5y": -65
        }
    },
    "Fairchem Organics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 76
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 11
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
                    "share": 5
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
                72.0,
                67.0,
                43.0,
                22.0
            ],
            "ocf": [
                40.0,
                50.0,
                74.0,
                -17.0,
                42.0
            ],
            "fcf": [
                5.409999999999997,
                35.269999999999996,
                55.870000000000005,
                -43.11,
                26.66
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "56.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹83cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "61%",
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
                35,
                54
            ],
            "inventoryDays": [
                57,
                96
            ],
            "payableDays": [
                7,
                12
            ],
            "cycleDays": [
                85,
                139
            ],
            "absorbed5y": -66,
            "receivables5y": -21,
            "inventory5y": -47,
            "payables5y": 0
        }
    },
    "Chembond Chemicals": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Raw materials",
                    "share": 46
                },
                {
                    "label": "Power, fuel and plant costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 19
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
                35.0,
                42.0,
                42.0,
                48.0
            ],
            "ocf": [
                -10.0,
                2.0,
                -56.0,
                10.0,
                8.0
            ],
            "fcf": [
                -14.280000000000001,
                -12.64,
                -75.82,
                5.42,
                1.0899999999999999
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹66cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-25%",
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
                94,
                128
            ],
            "inventoryDays": [
                66,
                57
            ],
            "payableDays": [
                76,
                75
            ],
            "cycleDays": [
                84,
                109
            ],
            "absorbed5y": -185,
            "receivables5y": -216,
            "inventory5y": -28,
            "payables5y": 59
        }
    },
    "Jyoti Resins": {
        "stats": [
            {
                "label": "P/E",
                "value": "15.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.7x",
                "note": "Market value minus net cash, ÷ operating profit over the last year."
            },
            {
                "label": "Net cash",
                "value": "₹166cr",
                "note": "No borrowings; cash and investments at March 2026 (company)."
            },
            {
                "label": "Operating margin FY26",
                "value": "27%",
                "note": "14% in Q1 FY27 after the VAM spike."
            },
            {
                "label": "Debtor days FY26",
                "value": "185",
                "note": "Days customers take to pay; 129 in FY22."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 30
                },
                {
                    "label": "Staff",
                    "share": 11
                },
                {
                    "label": "Selling, loyalty points and other costs",
                    "share": 32
                },
                {
                    "label": "Operating profit",
                    "share": 27
                }
            ],
            "note": "Filed FY26 standalone P&L lines (via MarketsMojo; they add up to Screener's operating profit of ₹85cr). Materials include changes in stock."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                129,
                185
            ],
            "inventoryDays": [
                36,
                39
            ],
            "payableDays": [
                8,
                44
            ],
            "cycleDays": [
                157,
                180
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
                24,
                61,
                84,
                90,
                85
            ],
            "ocf": [
                3,
                1,
                27,
                15,
                48
            ],
            "fcf": [
                -5,
                -2,
                25,
                13,
                44
            ],
            "note": "Screener standalone."
        }
    },
    "Sacheerome": {
        "stats": [
            {
                "label": "P/E",
                "value": "33.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.1x",
                "note": "Market value less net cash, ÷ operating profit over the last two half-years (₹37cr)."
            },
            {
                "label": "Net cash",
                "value": "₹45cr",
                "note": "Cash (data provider), March 2026; no borrowings."
            },
            {
                "label": "Operating margin FY26",
                "value": "24%"
            },
            {
                "label": "Capacity use FY26",
                "value": "124%",
                "note": "Management, June 2026, before the new plant."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 60
                },
                {
                    "label": "Staff, power and other costs",
                    "share": 16
                },
                {
                    "label": "Operating profit",
                    "share": 24
                }
            ],
            "note": "Materials from FY26 gross profit (data provider); operating profit from Screener; the rest is the balance."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                67,
                47
            ],
            "inventoryDays": [
                113,
                47
            ],
            "payableDays": [
                71,
                61
            ],
            "cycleDays": [
                109,
                33
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
                9,
                10,
                15,
                22,
                37
            ],
            "ocf": [
                9,
                11,
                10,
                22,
                26
            ],
            "fcf": [
                6,
                9,
                0,
                -2,
                -14
            ]
        }
    },
    "Gem Aromatics": {
        "stats": [
            {
                "label": "P/E",
                "value": "n/a",
                "note": "Loss of ₹14cr over the last four quarters."
            },
            {
                "label": "EV/EBITDA",
                "value": "30.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last four quarters (₹29cr)."
            },
            {
                "label": "Net debt",
                "value": "₹144cr",
                "note": "Borrowings (₹152cr) minus about ₹8cr of cash (data provider), March 2026."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            },
            {
                "label": "Inventory days FY26",
                "value": "309"
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 76
                },
                {
                    "label": "Staff, power and other costs",
                    "share": 13
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Materials from FY26 gross profit (data provider); operating profit from Screener; the rest is the balance."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                46,
                76
            ],
            "inventoryDays": [
                206,
                309
            ],
            "payableDays": [
                27,
                25
            ],
            "cycleDays": [
                225,
                360
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
                49,
                66,
                78,
                88,
                41
            ],
            "ocf": [
                -5,
                15,
                40,
                -25,
                30
            ],
            "fcf": [
                -19,
                1,
                1,
                -130,
                -65
            ]
        }
    },
    "Prasol Chemicals": {
        "stats": [
            {
                "label": "P/E",
                "value": "35.1x",
                "note": "On profit including the Q1 FY27 stock gain."
            },
            {
                "label": "EV/EBITDA",
                "value": "22.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last four quarters (₹189cr, including Q1 FY27's ₹25cr gain)."
            },
            {
                "label": "Net debt",
                "value": "₹87cr",
                "note": "Borrowings (₹111cr) minus about ₹24cr of cash (data provider), March 2026, before ₹60cr of IPO money repaid debt."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            },
            {
                "label": "Largest customer",
                "value": "about 4%",
                "note": "₹55–60cr of the ₹1,550cr+ expected in FY27 (management)."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 70
                },
                {
                    "label": "Staff, power and other costs",
                    "share": 19
                },
                {
                    "label": "Operating profit",
                    "share": 11
                }
            ],
            "note": "Materials from FY26 gross profit (data provider); operating profit from Screener (standalone); the rest is the balance."
        },
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                71,
                83
            ],
            "inventoryDays": [
                85,
                67
            ],
            "payableDays": [
                133,
                91
            ],
            "cycleDays": [
                22,
                58
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
                133,
                87,
                62,
                88,
                140
            ],
            "ocf": [
                81,
                29,
                116,
                22,
                49
            ],
            "fcf": [
                33,
                -23,
                97,
                0,
                11
            ]
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const chemicalsValuationInputs: Record<string, ValuationInput> = {
    "Gujarat Fluorochemic": {
        "netDebt": 2094,
        "ttmEbitda": 1372.0,
        "mcapAtWriting": 48789.0,
        "peAtWriting": 79.0
    },
    "Navin Fluorine Intl": {
        "netDebt": -54,
        "ttmEbitda": 1232.0,
        "mcapAtWriting": 44051.0,
        "peAtWriting": 55.4
    },
    "Himadri Speciality": {
        "netDebt": -1025,
        "ttmEbitda": 1005.0,
        "mcapAtWriting": 34248.0,
        "peAtWriting": 42.8
    },
    "Deepak Nitrite": {
        "netDebt": 1156,
        "ttmEbitda": 1331.0,
        "mcapAtWriting": 21647.0,
        "peAtWriting": 27.3
    },
    "Aarti Industries": {
        "netDebt": 4226,
        "ttmEbitda": 1335.0,
        "mcapAtWriting": 17747.0,
        "peAtWriting": 34.0
    },
    "Deepak Fert & Petro": {
        "netDebt": 5001,
        "ttmEbitda": 2016.0,
        "mcapAtWriting": 17216.0,
        "peAtWriting": 17.5
    },
    "Tata Chemicals": {
        "netDebt": 5692,
        "ttmEbitda": 1694.0,
        "mcapAtWriting": 16400.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Supreme Petrochem": {
        "netDebt": -592,
        "ttmEbitda": 737.0,
        "mcapAtWriting": 16548.0,
        "peAtWriting": 33.6
    },
    "BASF India": {
        "netDebt": -749,
        "ttmEbitda": 941.0,
        "mcapAtWriting": 15322.0,
        "peAtWriting": 24.8
    },
    "Privi Speciality Che": {
        "netDebt": 897,
        "ttmEbitda": 666.0,
        "mcapAtWriting": 14040.0,
        "peAtWriting": 40.1
    },
    "Anupam Rasayan": {
        "netDebt": 1454,
        "ttmEbitda": 563.0,
        "mcapAtWriting": 13575.0,
        "peAtWriting": 77.7
    },
    "PCBL Chemical": {
        "netDebt": 4237,
        "ttmEbitda": 1119.0,
        "mcapAtWriting": 13362.0,
        "peAtWriting": 50.5
    },
    "Sudarshan Chemicals": {
        "netDebt": 832,
        "ttmEbitda": 656.0,
        "mcapAtWriting": 9704.0,
        "peAtWriting": 95.6
    },
    "Alkyl Amines": {
        "netDebt": -252,
        "ttmEbitda": 342.0,
        "mcapAtWriting": 9451.0,
        "peAtWriting": 42.0
    },
    "GNFC": {
        "netDebt": -2797,
        "ttmEbitda": 1241.0,
        "mcapAtWriting": 9262.0,
        "peAtWriting": 8.93
    },
    "Clean Science": {
        "netDebt": -431,
        "ttmEbitda": 352.0,
        "mcapAtWriting": 8580.0,
        "peAtWriting": 36.8
    },
    "Galaxy Surfactants": {
        "netDebt": -514,
        "ttmEbitda": 601.0,
        "mcapAtWriting": 8017.0,
        "peAtWriting": 22.1
    },
    "Tanfac Industries": {
        "netDebt": 45,
        "ttmEbitda": 112.0,
        "mcapAtWriting": 7404.0,
        "peAtWriting": 109.0
    },
    "Balaji Amines": {
        "netDebt": -138,
        "ttmEbitda": 327.0,
        "mcapAtWriting": 7095.0,
        "peAtWriting": 34.8
    },
    "Neogen Chemicals": {
        "netDebt": 1390,
        "ttmEbitda": 154.0,
        "mcapAtWriting": 7166.0,
        "peAtWriting": 202.0
    },
    "Fineotex Chemical": {
        "netDebt": -355,
        "ttmEbitda": 169.0,
        "mcapAtWriting": 7043.0,
        "peAtWriting": 57.6
    },
    "Archean Chemical Industries": {
        "netDebt": 154,
        "ttmEbitda": 228.0,
        "mcapAtWriting": 5957.0,
        "peAtWriting": 61.5
    },
    "Ellen. Indl. Gas": {
        "netDebt": -285,
        "ttmEbitda": 123.0,
        "mcapAtWriting": 5193.0,
        "peAtWriting": 43.0
    },
    "Steamhouse India": {
        "netDebt": 325,
        "ttmEbitda": 95.0,
        "mcapAtWriting": 3616.0,
        "peAtWriting": 77.3
    },
    "Laxmi Organic": {
        "netDebt": 445,
        "ttmEbitda": 255.0,
        "mcapAtWriting": 5042.0,
        "peAtWriting": 40.1
    },
    "Yasho Industries": {
        "netDebt": 540,
        "ttmEbitda": 184.0,
        "mcapAtWriting": 5105.0,
        "peAtWriting": 88.5
    },
    "Vishnu Chemicals": {
        "netDebt": 426,
        "ttmEbitda": 262.0,
        "mcapAtWriting": 4696.0,
        "peAtWriting": 31.4
    },
    "Epigral": {
        "netDebt": 544,
        "ttmEbitda": 582.0,
        "mcapAtWriting": 4576.0,
        "peAtWriting": 16.9
    },
    "Tatva Chintan": {
        "netDebt": 107,
        "ttmEbitda": 108.0,
        "mcapAtWriting": 4195.0,
        "peAtWriting": 80.1
    },
    "Refex Industries": {
        "netDebt": -168,
        "ttmEbitda": 427.0,
        "mcapAtWriting": 3922.0,
        "peAtWriting": 13.8
    },
    "GHCL": {
        "netDebt": -1049,
        "ttmEbitda": 689.0,
        "mcapAtWriting": 3868.0,
        "peAtWriting": 8.47
    },
    "Styrenix Performance": {
        "netDebt": 378,
        "ttmEbitda": 463.0,
        "mcapAtWriting": 3636.0,
        "peAtWriting": 13.3
    },
    "Premier Explosives": {
        "netDebt": -28,
        "ttmEbitda": 24.0,
        "mcapAtWriting": 3658.0,
        "peAtWriting": 106.0
    },
    "Kiri Industries": {
        "netDebt": -4354,
        "ttmEbitda": -189.0,
        "mcapAtWriting": 3633.0,
        "peAtWriting": 4.52
    },
    "Nocil": {
        "netDebt": -442,
        "ttmEbitda": 115.0,
        "mcapAtWriting": 3147.0,
        "peAtWriting": 45.2
    },
    "Chemplast Sanmar": {
        "netDebt": 1411,
        "ttmEbitda": 66.0,
        "mcapAtWriting": 3122.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "DDev Plastiks": {
        "netDebt": -7,
        "ttmEbitda": 305.0,
        "mcapAtWriting": 2651.0,
        "peAtWriting": 12.4
    },
    "Stallion India Fluor": {
        "netDebt": -400,
        "ttmEbitda": 66.0,
        "mcapAtWriting": 2621.0,
        "peAtWriting": 50.4
    },
    "Rossari Biotech": {
        "netDebt": 282,
        "ttmEbitda": 299.0,
        "mcapAtWriting": 2461.0,
        "peAtWriting": 16.3
    },
    "JG Chemicals": {
        "netDebt": -168,
        "ttmEbitda": 96.0,
        "mcapAtWriting": 2430.0,
        "peAtWriting": 32.3
    },
    "SH Kelkar & Co": {
        "netDebt": 953,
        "ttmEbitda": 256.0,
        "mcapAtWriting": 1971.0,
        "peAtWriting": 41.7
    },
    "Camlin Fine": {
        "netDebt": 537,
        "ttmEbitda": 84.0,
        "mcapAtWriting": 1869.0,
        "peAtWriting": null,
        "lossMaking": true
    },
    "IG Petrochem.": {
        "netDebt": 88,
        "ttmEbitda": 207.0,
        "mcapAtWriting": 1827.0,
        "peAtWriting": 22.4
    },
    "Oriental Aromatics": {
        "netDebt": 388,
        "ttmEbitda": 70.0,
        "mcapAtWriting": 1796.0,
        "peAtWriting": 338.0
    },
    "Sh. Pushkar Chem.": {
        "netDebt": -11,
        "ttmEbitda": 102.0,
        "mcapAtWriting": 1636.0,
        "peAtWriting": 22.7
    },
    "DCW": {
        "netDebt": 66,
        "ttmEbitda": 204.0,
        "mcapAtWriting": 1438.0,
        "peAtWriting": 20.2
    },
    "Excel Industries": {
        "netDebt": -1136,
        "ttmEbitda": 110.0,
        "mcapAtWriting": 1168.0,
        "peAtWriting": 16.4
    },
    "Fairchem Organics": {
        "netDebt": 83,
        "ttmEbitda": 34.0,
        "mcapAtWriting": 846.0,
        "peAtWriting": 56.0
    },
    "Chembond Chemicals": {
        "netDebt": -66,
        "ttmEbitda": 50.0,
        "mcapAtWriting": 686.0,
        "peAtWriting": 17.9
    },
    "Jyoti Resins": {
        "netDebt": -166,
        "ttmEbitda": 77,
        "mcapAtWriting": 992,
        "peAtWriting": 15.4
    },
    "Sacheerome": {
        "netDebt": -45,
        "ttmEbitda": 37,
        "mcapAtWriting": 937,
        "peAtWriting": 33
    },
    "Gem Aromatics": {
        "netDebt": 144,
        "ttmEbitda": 29,
        "mcapAtWriting": 743,
        "peAtWriting": null,
        "lossMaking": true
    },
    "Prasol Chemicals": {
        "netDebt": 87,
        "ttmEbitda": 189,
        "mcapAtWriting": 4237,
        "peAtWriting": 35.1
    }
};
