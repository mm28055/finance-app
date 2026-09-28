import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const solarCharts: Record<string, ProfileCharts> = {
    "Waaree Renewables": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 65
                },
                {
                    "label": "Power and factory costs",
                    "share": 13
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
                24.0,
                84.0,
                207.0,
                311.0,
                641.0
            ],
            "ocf": [
                43.0,
                65.0,
                128.0,
                303.0,
                287.0
            ],
            "fcf": [
                37.0,
                -18.0,
                117.0,
                202.0,
                165.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹244cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "65%",
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
                105,
                128
            ],
            "inventoryDays": [
                5,
                20
            ],
            "payableDays": [
                164,
                129
            ],
            "cycleDays": [
                -54,
                19
            ],
            "absorbed5y": -205,
            "receivables5y": -1167,
            "inventory5y": -116,
            "payables5y": 769
        }
    },
    "Emmvee Photovoltaic Power Ltd": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 55
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
                    "share": 6
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
                104.0,
                56.0,
                120.0,
                722.0,
                1734.0
            ],
            "ocf": [
                129.0,
                59.0,
                234.0,
                625.0,
                200.0
            ],
            "fcf": [
                15.0,
                -386.0,
                -441.0,
                -363.0,
                -453.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹51cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "46%",
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
                27,
                50
            ],
            "inventoryDays": [
                101,
                225
            ],
            "payableDays": [
                34,
                116
            ],
            "cycleDays": [
                94,
                159
            ],
            "absorbed5y": -1329,
            "receivables5y": -608,
            "inventory5y": -1600,
            "payables5y": 806
        }
    },
    "Vikram Solar": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 69
                },
                {
                    "label": "Power and factory costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 4
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
                59.0,
                187.0,
                399.0,
                491.0,
                916.0
            ],
            "ocf": [
                201.0,
                195.0,
                152.0,
                290.0,
                667.0
            ],
            "fcf": [
                55.0,
                64.0,
                80.0,
                184.0,
                384.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "6.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,117cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "73%",
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
                194,
                92
            ],
            "inventoryDays": [
                70,
                89
            ],
            "payableDays": [
                198,
                168
            ],
            "cycleDays": [
                66,
                13
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        }
    },
    "Saatvik Green": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 78
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
                    "share": 11
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
                15.0,
                148.0,
                322.0,
                542.0
            ],
            "ocf": [
                5.0,
                44.0,
                43.0,
                -27.0
            ],
            "fcf": [
                -19.0,
                -16.0,
                -144.0,
                -628.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "16.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹857cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "12%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                13,
                56
            ],
            "inventoryDays": [
                89,
                72
            ],
            "payableDays": [
                45,
                60
            ],
            "cycleDays": [
                56,
                69
            ],
            "absorbed5y": -801,
            "receivables5y": -710,
            "inventory5y": -571,
            "payables5y": 499
        }
    },
    "Websol Energy System Ltd": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 42
                },
                {
                    "label": "Power and factory costs",
                    "share": 6
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
                    "share": 44
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
                253.0,
                429.0
            ],
            "ocf": [
                167.0,
                255.0
            ],
            "fcf": [
                124.0,
                75.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "10.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹21cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "44%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                3,
                35
            ],
            "inventoryDays": [
                70,
                142
            ],
            "payableDays": [
                66,
                63
            ],
            "cycleDays": [
                8,
                113
            ],
            "absorbed5y": -229,
            "receivables5y": -94,
            "inventory5y": -141,
            "payables5y": 28
        }
    },
    "Oriana Power": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
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
                12.0,
                19.0,
                81.0,
                235.0,
                398.0
            ],
            "ocf": [
                9.0,
                16.0,
                2.0,
                290.0,
                337.0
            ],
            "fcf": [
                -1.0,
                -32.0,
                -112.0,
                150.0,
                184.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹223cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "88%",
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
                72,
                135
            ],
            "inventoryDays": [
                11,
                11
            ],
            "payableDays": [
                58,
                58
            ],
            "cycleDays": [
                72,
                89
            ],
            "absorbed5y": 55,
            "receivables5y": -656,
            "inventory5y": -38,
            "payables5y": 197
        }
    },
    "Alpex Solar": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 80
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
                5.0,
                12.0,
                37.0,
                126.0,
                319.0
            ],
            "ocf": [
                -1.0,
                -7.0,
                -5.0,
                69.0,
                -116.0
            ],
            "fcf": [
                -2.0,
                -12.0,
                -17.0,
                11.0,
                -448.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "10.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹387cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "-12%",
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
                37,
                42
            ],
            "inventoryDays": [
                110,
                73
            ],
            "payableDays": [
                56,
                41
            ],
            "cycleDays": [
                91,
                74
            ],
            "absorbed5y": -502,
            "receivables5y": -242,
            "inventory5y": -327,
            "payables5y": 178
        }
    },
    "Insolation Energy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
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
                14.0,
                19.0,
                81.0,
                161.0,
                287.0
            ],
            "ocf": [
                9.0,
                -1.0,
                30.0,
                113.0,
                -73.0
            ],
            "fcf": [
                6.0,
                -30.0,
                13.0,
                28.0,
                -521.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "10.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹367cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "14%",
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
                28,
                48
            ],
            "inventoryDays": [
                48,
                81
            ],
            "payableDays": [
                24,
                62
            ],
            "cycleDays": [
                52,
                66
            ],
            "absorbed5y": -398,
            "receivables5y": -273,
            "inventory5y": -365,
            "payables5y": 283
        }
    },
    "Solex Energy": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 81
                },
                {
                    "label": "Staff",
                    "share": 3
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
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                11.0,
                28.0,
                73.0,
                184.0
            ],
            "ocf": [
                null,
                2.0,
                -47.0,
                201.0
            ],
            "fcf": [
                null,
                -6.0,
                -114.0,
                16.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "9.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹216cr",
                "note": "Borrowings including leases, minus cash, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "11%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                47,
                80
            ],
            "inventoryDays": [
                81,
                81
            ],
            "payableDays": [
                128,
                128
            ],
            "cycleDays": [
                47,
                33
            ],
            "absorbed5y": -110,
            "receivables5y": -328,
            "inventory5y": -260,
            "payables5y": 426
        }
    },
    "Australian Prem": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Materials",
                    "share": 73
                },
                {
                    "label": "Staff",
                    "share": 3
                },
                {
                    "label": "Other costs",
                    "share": 11
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
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                9.0,
                57.0,
                95.0
            ],
            "ocf": [
                -5.0,
                24.0,
                -5.0
            ],
            "fcf": [
                -18.7,
                24.0,
                -50.86
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹11cr",
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
                40,
                87
            ],
            "inventoryDays": [
                12,
                40
            ],
            "payableDays": [
                48,
                84
            ],
            "cycleDays": [
                5,
                43
            ],
            "absorbed5y": -126,
            "receivables5y": -206,
            "inventory5y": -53,
            "payables5y": 131
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const solarValuationInputs: Record<string, ValuationInput> = {
    "Emmvee Photovoltaic Power Ltd": {
        "netDebt": -51,
        "ttmEbitda": 1932.0,
        "mcapAtWriting": 23072.0,
        "peAtWriting": 18.1
    },
    "Waaree Renewables": {
        "netDebt": -244,
        "ttmEbitda": 697.0,
        "mcapAtWriting": 8872.0,
        "peAtWriting": 17.5
    },
    "Vikram Solar": {
        "netDebt": -1117,
        "ttmEbitda": 800.0,
        "mcapAtWriting": 5922.0,
        "peAtWriting": 16.4
    },
    "Saatvik Green": {
        "netDebt": 857,
        "ttmEbitda": 401.0,
        "mcapAtWriting": 5673.0,
        "peAtWriting": 22.8
    },
    "Websol Energy System Ltd": {
        "netDebt": -21,
        "ttmEbitda": 451.0,
        "mcapAtWriting": 3206.0,
        "peAtWriting": 10.2
    },
    "Oriana Power": {
        "netDebt": 223,
        "ttmEbitda": 398.0,
        "mcapAtWriting": 3132.0,
        "peAtWriting": 12.4
    },
    "Alpex Solar": {
        "netDebt": 387,
        "ttmEbitda": 331.0,
        "mcapAtWriting": 2161.0,
        "peAtWriting": 10.8
    },
    "Insolation Energy": {
        "netDebt": 367,
        "ttmEbitda": 303.0,
        "mcapAtWriting": 2025.0,
        "peAtWriting": 10.4
    },
    "Solex Energy": {
        "netDebt": 216,
        "ttmEbitda": 172.0,
        "mcapAtWriting": 793.0,
        "peAtWriting": 9.95
    },
    "Australian Prem": {
        "netDebt": 11,
        "ttmEbitda": 95.0,
        "mcapAtWriting": 475.0,
        "peAtWriting": 8.21
    }
};
