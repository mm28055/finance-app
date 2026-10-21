import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const commercialCharts: Record<string, ProfileCharts> = {
    "Redington": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Goods and materials bought",
                    "share": 95
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
                    "share": 3
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
                1839.0,
                2203.0,
                2009.0,
                2154.0,
                2348.0
            ],
            "ocf": [
                989.0,
                -3234.0,
                1079.0,
                293.0,
                231.0
            ],
            "fcf": [
                863.0,
                -3396.0,
                957.0,
                130.0,
                49.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,720cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-6%",
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
                51,
                66
            ],
            "inventoryDays": [
                27,
                26
            ],
            "payableDays": [
                63,
                58
            ],
            "cycleDays": [
                15,
                34
            ],
            "absorbed5y": -9599,
            "receivables5y": -14320,
            "inventory5y": -4813,
            "payables5y": 9592
        }
    },
    "WeWork India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 8
                },
                {
                    "label": "Other costs",
                    "share": 27
                },
                {
                    "label": "Operating profit",
                    "share": 64
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
                796.0,
                1047.0,
                1239.0,
                1574.0
            ],
            "ocf": [
                942.0,
                1162.0,
                1290.0,
                1734.0
            ],
            "fcf": [
                709.0,
                917.0,
                918.0,
                1137.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "105.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹5,215cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "65%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                19,
                13
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
                19,
                13
            ],
            "absorbed5y": 419,
            "receivables5y": -35,
            "inventory5y": -1,
            "payables5y": -41
        }
    },
    "Smartworks Coworking": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 30
                },
                {
                    "label": "Operating profit",
                    "share": 64
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
                206.0,
                424.0,
                660.0,
                857.0,
                1155.0
            ],
            "ocf": [
                216.0,
                532.0,
                743.0,
                929.0,
                1197.0
            ],
            "fcf": [
                72.0,
                207.0,
                477.0,
                638.0,
                809.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "223.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,540cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "110%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "64%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                10,
                8
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
                10,
                8
            ],
            "absorbed5y": 333,
            "receivables5y": -34,
            "inventory5y": null,
            "payables5y": 166
        }
    },
    "Nirlon": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power, upkeep and running costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 1
                },
                {
                    "label": "Other costs",
                    "share": 12
                },
                {
                    "label": "Operating profit",
                    "share": 78
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
                298.0,
                458.0,
                477.0,
                503.0,
                521.0
            ],
            "ocf": [
                340.0,
                377.0,
                425.0,
                480.0,
                477.0
            ],
            "fcf": [
                179.0,
                292.0,
                370.0,
                433.0,
                433.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹849cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "93%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "78%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                3,
                2
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
                3,
                2
            ],
            "absorbed5y": 113,
            "receivables5y": -2,
            "inventory5y": null,
            "payables5y": 10
        }
    },
    "Quess Corp": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power, upkeep and running costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 95
                },
                {
                    "label": "Other costs",
                    "share": 1
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
                624.0,
                589.0,
                237.0,
                321.0,
                325.0
            ],
            "ocf": [
                554.0,
                466.0,
                529.0,
                380.0,
                230.0
            ],
            "fcf": [
                469.0,
                362.0,
                426.0,
                378.0,
                221.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹134cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "103%",
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
                62,
                38
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
                62,
                38
            ],
            "absorbed5y": -319,
            "receivables5y": -1446,
            "inventory5y": 2,
            "payables5y": 18
        }
    },
    "MSTC": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power, upkeep and running costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 27
                },
                {
                    "label": "Other costs",
                    "share": 9
                },
                {
                    "label": "Operating profit",
                    "share": 59
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
                9.0,
                193.0,
                82.0,
                178.0,
                220.0
            ],
            "ocf": [
                170.0,
                844.0,
                -283.0,
                260.0,
                -28.0
            ],
            "fcf": [
                96.0,
                810.0,
                -391.0,
                235.0,
                -50.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "17.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,195cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "141%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "59%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                228,
                224
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
                -116,
                224
            ],
            "absorbed5y": 113,
            "receivables5y": 562,
            "inventory5y": 0,
            "payables5y": 222
        }
    },
    "Indiqube Spaces": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Goods and materials bought",
                    "share": 7
                },
                {
                    "label": "Power, upkeep and running costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 6
                },
                {
                    "label": "Other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 61
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
                130.0,
                237.0,
                226.0,
                617.0,
                881.0
            ],
            "ocf": [
                202.0,
                324.0,
                542.0,
                612.0,
                920.0
            ],
            "fcf": [
                155.0,
                152.0,
                352.0,
                354.0,
                493.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹4,822cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "124%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "61%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                27,
                28
            ],
            "inventoryDays": [
                3,
                3
            ],
            "payableDays": [
                304,
                304
            ],
            "cycleDays": [
                27,
                -273
            ],
            "absorbed5y": 46,
            "receivables5y": -98,
            "inventory5y": -1,
            "payables5y": 52
        }
    },
    "Sanghvi Movers": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power, upkeep and running costs",
                    "share": 47
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
                    "share": 37
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY21",
                "FY22",
                "FY23",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                87.0,
                138.0,
                257.0,
                330.0,
                400.0
            ],
            "ocf": [
                null,
                130.0,
                257.0,
                162.0,
                278.0
            ],
            "fcf": [
                null,
                72.0,
                25.0,
                -75.0,
                -130.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹545cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
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
                86,
                92
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
                86,
                92
            ],
            "absorbed5y": -224,
            "receivables5y": -300,
            "inventory5y": 3,
            "payables5y": 102
        }
    },
    "CMS Info Systems": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Goods and materials bought",
                    "share": 8
                },
                {
                    "label": "Power, upkeep and running costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 49
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
                400.0,
                538.0,
                599.0,
                627.0,
                596.0
            ],
            "ocf": [
                257.0,
                407.0,
                440.0,
                483.0,
                390.0
            ],
            "fcf": [
                -27.0,
                214.0,
                332.0,
                329.0,
                -19.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹529cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
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
                115,
                131
            ],
            "inventoryDays": [
                151,
                122
            ],
            "payableDays": [
                584,
                549
            ],
            "cycleDays": [
                -318,
                -296
            ],
            "absorbed5y": -772,
            "receivables5y": -702,
            "inventory5y": 35,
            "payables5y": -35
        }
    },
    "EFC (I)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Goods and materials bought",
                    "share": 3
                },
                {
                    "label": "Power, upkeep and running costs",
                    "share": 38
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
                    "share": 45
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
                -0.0,
                55.0,
                183.0,
                328.0,
                468.0
            ],
            "ocf": [
                -0.0,
                -51.0,
                11.0,
                134.0,
                209.0
            ],
            "fcf": [
                0.0,
                -71.0,
                -49.0,
                -11.0,
                101.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "10.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,318cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "29%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "45%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                52,
                86
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
                52,
                86
            ],
            "absorbed5y": -200,
            "receivables5y": -204,
            "inventory5y": -32,
            "payables5y": 147
        }
    },
    "Awfis Space Solutions": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Goods and materials bought",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 52
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
                68.0,
                157.0,
                246.0,
                407.0,
                550.0
            ],
            "ocf": [
                83.0,
                195.0,
                229.0,
                363.0,
                616.0
            ],
            "fcf": [
                14.0,
                35.0,
                84.0,
                164.0,
                406.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,411cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "104%",
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
                44,
                34
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
                44,
                34
            ],
            "absorbed5y": 78,
            "receivables5y": -135,
            "inventory5y": -1,
            "payables5y": 247
        }
    },
    "TeamLease Services": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power, upkeep and running costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 95
                },
                {
                    "label": "Other costs",
                    "share": 1
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
                142.0,
                122.0,
                131.0,
                138.0,
                157.0
            ],
            "ocf": [
                -6.0,
                126.0,
                118.0,
                104.0,
                302.0
            ],
            "fcf": [
                -19.0,
                106.0,
                97.0,
                73.0,
                273.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "9.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹389cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "93%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "1%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                21,
                17
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
                21,
                17
            ],
            "absorbed5y": -2,
            "receivables5y": -390,
            "inventory5y": 0,
            "payables5y": 267
        }
    },
    "Updater Services": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Goods and materials bought",
                    "share": 3
                },
                {
                    "label": "Power, upkeep and running costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 78
                },
                {
                    "label": "Other costs",
                    "share": 12
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
                79.0,
                93.0,
                134.0,
                167.0,
                135.0
            ],
            "ocf": [
                31.0,
                115.0,
                103.0,
                51.0,
                144.0
            ],
            "fcf": [
                17.0,
                63.0,
                64.0,
                37.0,
                125.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹287cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                86,
                75
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
                86,
                75
            ],
            "absorbed5y": -182,
            "receivables5y": -367,
            "inventory5y": -4,
            "payables5y": 174
        }
    },
    "Krystal Integrated Services": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Power, upkeep and running costs",
                    "share": 17
                },
                {
                    "label": "Staff",
                    "share": 74
                },
                {
                    "label": "Other costs",
                    "share": 3
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
                45.0,
                63.0,
                69.0,
                78.0,
                85.0
            ],
            "ocf": [
                20.0,
                72.0,
                2.0,
                -32.0,
                26.0
            ],
            "fcf": [
                9.64,
                68.37,
                -10.31,
                -63.5,
                10.21
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹53cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "26%",
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
                160,
                118
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
                160,
                118
            ],
            "absorbed5y": -226,
            "receivables5y": -259,
            "inventory5y": -6,
            "payables5y": 104
        }
    },
    "Bluspring Enterprises": {
        "stats": [
            {
                "label": "P/E",
                "value": "Loss-making",
                "note": "Net loss over the last four quarters (consolidated); excluding foundit the company guides FY27 profit above ₹100cr."
            },
            {
                "label": "EV/EBITDA",
                "value": "28.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year (₹87cr); about 12x on the guided FY27 EBITDA of ₹200cr."
            },
            {
                "label": "Net debt",
                "value": "₹172cr",
                "note": "Company figure at 30 June 2026; LSG added about ₹125cr of loans in August."
            },
            {
                "label": "Operating margin FY26",
                "value": "1.6%",
                "note": "Screener consolidated; 3.8% in Q1 FY27 on the company's basis excluding foundit."
            },
            {
                "label": "Order book (STEAG)",
                "value": "₹5,200cr",
                "note": "Four five-year power-plant O&M contracts won in 2026."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 80
                },
                {
                    "label": "Materials (mainly food)",
                    "share": 8
                },
                {
                    "label": "Subcontracting and other costs",
                    "share": 10
                },
                {
                    "label": "Operating profit",
                    "share": 2
                }
            ],
            "note": "Filed FY26 consolidated P&L lines (via MarketsMojo), which put operating profit at ₹78cr; Screener shows ₹54cr, classifying some items differently."
        },
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                81,
                95
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
                81,
                95
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        },
        "profitVsCash": {
            "years": [
                "FY25",
                "FY26"
            ],
            "ebitda": [
                83,
                54
            ],
            "ocf": [
                -22,
                52
            ],
            "fcf": [
                -49,
                24
            ],
            "note": "Screener consolidated. FY25 is a 14-month period (carve-out accounts after the demerger); no earlier comparable years."
        }
    },
    "Seshaasai Technologies": {
        "stats": [
            {
                "label": "P/E",
                "value": "18.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.7x",
                "note": "Market value minus net cash, ÷ operating profit over the last year."
            },
            {
                "label": "Net cash",
                "value": "₹332cr",
                "note": "Cash and bank deposits minus borrowings and leases, March 2026 (FY26 results)."
            },
            {
                "label": "Operating margin FY26",
                "value": "26%"
            },
            {
                "label": "Top customer",
                "value": "15.5%",
                "note": "Share of FY26 revenue; top ten 63%."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 54
                },
                {
                    "label": "Staff",
                    "share": 5
                },
                {
                    "label": "Other costs",
                    "share": 15
                },
                {
                    "label": "Operating profit",
                    "share": 26
                }
            ],
            "note": "Filed FY26 consolidated P&L (company results). Materials include purchases and changes in stock."
        },
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                52,
                83
            ],
            "inventoryDays": [
                63,
                98
            ],
            "payableDays": [
                51,
                54
            ],
            "cycleDays": [
                64,
                127
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
                292,
                361,
                380
            ],
            "ocf": [
                200,
                167,
                220
            ],
            "fcf": [
                84,
                52,
                59
            ],
            "note": "Screener consolidated; three years available."
        }
    },
    "Manipal Payment & Identity": {
        "stats": [
            {
                "label": "P/E",
                "value": "24.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.7x",
                "note": "Market value minus net cash (including IPO money), ÷ operating profit over the last year (₹464cr)."
            },
            {
                "label": "Net cash",
                "value": "about ₹448cr",
                "note": "₹128cr at March 2026 (Screener) plus ₹320cr of fresh IPO money."
            },
            {
                "label": "Operating margin FY26",
                "value": "32%"
            },
            {
                "label": "Domestic card share",
                "value": "31.7%",
                "note": "Company figure; four players hold about 90%."
            }
        ],
        "statsAsOf": "21 Oct 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                35,
                54
            ],
            "inventoryDays": [
                69,
                146
            ],
            "payableDays": [
                54,
                98
            ],
            "cycleDays": [
                49,
                102
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
                335,
                391,
                426
            ],
            "ocf": [
                309,
                284,
                208
            ],
            "fcf": [
                297,
                219,
                126
            ],
            "note": "Screener standalone (consolidated history not available); three years."
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const commercialValuationInputs: Record<string, ValuationInput> = {
    "Redington": {
        "netDebt": 1720,
        "ttmEbitda": 2537.0,
        "mcapAtWriting": 31349.0,
        "peAtWriting": 17.4
    },
    "WeWork India": {
        "netDebt": 5215,
        "ttmEbitda": 1676.0,
        "mcapAtWriting": 9292.0,
        "peAtWriting": 105.0
    },
    "Smartworks Coworking": {
        "netDebt": 4540,
        "ttmEbitda": 1260.0,
        "mcapAtWriting": 6202.0,
        "peAtWriting": 223.0
    },
    "Nirlon": {
        "netDebt": 849,
        "ttmEbitda": 523.0,
        "mcapAtWriting": 5464.0,
        "peAtWriting": 15.3
    },
    "Quess Corp": {
        "netDebt": -134,
        "ttmEbitda": 327.0,
        "mcapAtWriting": 5364.0,
        "peAtWriting": 20.8
    },
    "MSTC": {
        "netDebt": -1195,
        "ttmEbitda": 233.0,
        "mcapAtWriting": 5300.0,
        "peAtWriting": 22.6
    },
    "Indiqube Spaces": {
        "netDebt": 4822,
        "ttmEbitda": 952.0,
        "mcapAtWriting": 4036.0,
        "peAtWriting": null
    },
    "Sanghvi Movers": {
        "netDebt": 545,
        "ttmEbitda": 426.0,
        "mcapAtWriting": 3836.0,
        "peAtWriting": 18.7
    },
    "CMS Info Systems": {
        "netDebt": -529,
        "ttmEbitda": 607.0,
        "mcapAtWriting": 3744.0,
        "peAtWriting": 12.5
    },
    "EFC (I)": {
        "netDebt": 1318,
        "ttmEbitda": 489.0,
        "mcapAtWriting": 2712.0,
        "peAtWriting": 10.6
    },
    "Awfis Space Solutions": {
        "netDebt": 1411,
        "ttmEbitda": 586.0,
        "mcapAtWriting": 1924.0,
        "peAtWriting": 22.7
    },
    "TeamLease Services": {
        "netDebt": -389,
        "ttmEbitda": 158.0,
        "mcapAtWriting": 1825.0,
        "peAtWriting": 11.9
    },
    "Updater Services": {
        "netDebt": -287,
        "ttmEbitda": 137.0,
        "mcapAtWriting": 1370.0,
        "peAtWriting": 15.0
    },
    "Krystal Integrated Services": {
        "netDebt": 53,
        "ttmEbitda": 85.0,
        "mcapAtWriting": 901.0,
        "peAtWriting": 13.8
    },
    "Bluspring Enterprises": {
        "netDebt": 172,
        "ttmEbitda": 87,
        "mcapAtWriting": 2288,
        "peAtWriting": 151,
        "lossMaking": true
    },
    "Seshaasai Technologies": {
        "netDebt": -332,
        "ttmEbitda": 395,
        "mcapAtWriting": 4941,
        "peAtWriting": 18.7
    },
    "Manipal Payment & Identity": {
        "netDebt": -448,
        "ttmEbitda": 464,
        "mcapAtWriting": 7280,
        "peAtWriting": 24.3
    }
};
