import { ProfileCharts, ValuationInput } from '../types';

// Generated from filed figures (Screener) and the India wholesale price index. Do not edit by hand.
export const softwareCharts: Record<string, ProfileCharts> = {
    "Inventurus Knowledge Solutions": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 51
                },
                {
                    "label": "Other costs",
                    "share": 7
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
                298.0,
                392.0,
                521.0,
                771.0,
                1084.0
            ],
            "ocf": [
                233.0,
                288.0,
                210.0,
                318.0,
                674.0
            ],
            "fcf": [
                222.0,
                279.0,
                177.0,
                276.0,
                613.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "40.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "27.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹13cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "56%",
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
                46,
                65
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
                46,
                65
            ],
            "absorbed5y": -921,
            "receivables5y": -380,
            "inventory5y": 2,
            "payables5y": 46
        }
    },
    "Tata Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 18
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 12
                },
                {
                    "label": "Staff",
                    "share": 50
                },
                {
                    "label": "Other costs",
                    "share": 5
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
                646.0,
                821.0,
                941.0,
                934.0,
                853.0
            ],
            "ocf": [
                -39.0,
                401.0,
                294.0,
                699.0,
                776.0
            ],
            "fcf": [
                -102.0,
                335.0,
                202.0,
                668.0,
                742.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "43.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹600cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                79,
                79
            ],
            "inventoryDays": [
                0,
                0
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                79,
                79
            ],
            "absorbed5y": -1035,
            "receivables5y": -408,
            "inventory5y": 0,
            "payables5y": 215
        }
    },
    "Netweb Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 79
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 4
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
        "profitVsCash": {
            "years": [
                "FY22",
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                35.0,
                70.0,
                103.0,
                159.0,
                285.0
            ],
            "ocf": [
                5.0,
                27.0,
                18.0,
                -13.0,
                790.0
            ],
            "fcf": [
                0.0,
                14.0,
                -1.0,
                -36.0,
                780.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "104.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "74.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹307cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "127%",
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
                115,
                112
            ],
            "inventoryDays": [
                75,
                170
            ],
            "payableDays": [
                104,
                161
            ],
            "cycleDays": [
                86,
                121
            ],
            "absorbed5y": 289,
            "receivables5y": 2,
            "inventory5y": -777,
            "payables5y": 712
        }
    },
    "Affle 3i": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 62
                },
                {
                    "label": "Staff",
                    "share": 9
                },
                {
                    "label": "Other costs",
                    "share": 6
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
                213.0,
                288.0,
                360.0,
                483.0,
                610.0
            ],
            "ocf": [
                206.0,
                260.0,
                262.0,
                426.0,
                502.0
            ],
            "fcf": [
                133.0,
                168.0,
                146.0,
                266.0,
                291.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "46.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "32.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,393cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "85%",
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
                79,
                52
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
                79,
                52
            ],
            "absorbed5y": -170,
            "receivables5y": -257,
            "inventory5y": null,
            "payables5y": 449
        }
    },
    "Sagility": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 63
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
                193.0,
                1039.0,
                1088.0,
                1307.0,
                1765.0
            ],
            "ocf": [
                null,
                857.0,
                973.0,
                1214.0,
                1203.0
            ],
            "fcf": [
                null,
                713.0,
                790.0,
                1090.0,
                1011.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹207cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
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
                366,
                93
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
                366,
                93
            ],
            "absorbed5y": -559,
            "receivables5y": -752,
            "inventory5y": null,
            "payables5y": -77
        }
    },
    "KPIT Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 1
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 62
                },
                {
                    "label": "Other costs",
                    "share": 8
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
                439.0,
                633.0,
                991.0,
                1230.0,
                1220.0
            ],
            "ocf": [
                475.0,
                462.0,
                1002.0,
                1390.0,
                1195.0
            ],
            "fcf": [
                406.0,
                332.0,
                847.0,
                1260.0,
                1052.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹675cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "100%",
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
                56,
                61
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
                56,
                61
            ],
            "absorbed5y": 206,
            "receivables5y": -409,
            "inventory5y": -29,
            "payables5y": 4
        }
    },
    "Black Box": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 35
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 35
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
                258.0,
                273.0,
                426.0,
                538.0,
                557.0
            ],
            "ocf": [
                95.0,
                13.0,
                129.0,
                -88.0,
                84.0
            ],
            "fcf": [
                44.0,
                -86.0,
                78.0,
                -132.0,
                12.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "49.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹613cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "11%",
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
                25,
                67
            ],
            "inventoryDays": [
                47,
                53
            ],
            "payableDays": [
                210,
                129
            ],
            "cycleDays": [
                -137,
                -10
            ],
            "absorbed5y": -1584,
            "receivables5y": -955,
            "inventory5y": -184,
            "payables5y": 244
        }
    },
    "E2E Networks": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 27
                },
                {
                    "label": "Staff",
                    "share": 15
                },
                {
                    "label": "Other costs",
                    "share": 6
                },
                {
                    "label": "Operating profit",
                    "share": 51
                }
            ],
            "note": "Filed expense split (Screener). Materials include changes in stock."
        },
        "profitVsCash": {
            "years": [
                "FY26"
            ],
            "ebitda": [
                126.0
            ],
            "ocf": [
                null
            ],
            "fcf": [
                null
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "430.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "106.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "—",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "51%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY26",
            "toYear": "FY26",
            "debtorDays": [
                null,
                null
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
                null,
                null
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        }
    },
    "Fractal Analytics": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 71
                },
                {
                    "label": "Other costs",
                    "share": 10
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
                -84.0,
                -116.0,
                57.0,
                320.0,
                438.0
            ],
            "ocf": [
                -117.0,
                -31.0,
                160.0,
                397.0,
                409.0
            ],
            "fcf": [
                -168.0,
                -65.0,
                136.0,
                314.0,
                190.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "39.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,985cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "133%",
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
                112,
                79
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
                112,
                79
            ],
            "absorbed5y": -239,
            "receivables5y": -487,
            "inventory5y": null,
            "payables5y": 110
        }
    },
    "Amagi Media Labs": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 32
                },
                {
                    "label": "Staff",
                    "share": 52
                },
                {
                    "label": "Other costs",
                    "share": 13
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
                -1058.0,
                -347.0,
                -278.0,
                -91.0,
                51.0
            ],
            "ocf": [
                64.0,
                -245.0,
                -183.0,
                34.0,
                -9.0
            ],
            "fcf": [
                59.0,
                -266.0,
                -191.0,
                30.0,
                -32.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "125.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "139.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,416cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
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
                137,
                98
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
                137,
                98
            ],
            "absorbed5y": -83,
            "receivables5y": -396,
            "inventory5y": 0,
            "payables5y": 196
        }
    },
    "Cyient": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 11
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 5
                },
                {
                    "label": "Staff",
                    "share": 56
                },
                {
                    "label": "Other costs",
                    "share": 16
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
                818.0,
                1003.0,
                1303.0,
                1138.0,
                899.0
            ],
            "ocf": [
                634.0,
                554.0,
                726.0,
                790.0,
                787.0
            ],
            "fcf": [
                569.0,
                486.0,
                641.0,
                686.0,
                689.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "29.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.4x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,532cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                59,
                66
            ],
            "inventoryDays": [
                178,
                303
            ],
            "payableDays": [
                336,
                249
            ],
            "cycleDays": [
                -99,
                119
            ],
            "absorbed5y": -734,
            "receivables5y": -268,
            "inventory5y": -387,
            "payables5y": 67
        }
    },
    "RateGain Travel Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 39
                },
                {
                    "label": "Other costs",
                    "share": 39
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
                32.0,
                87.0,
                191.0,
                234.0,
                345.0
            ],
            "ocf": [
                17.0,
                52.0,
                152.0,
                120.0,
                234.0
            ],
            "fcf": [
                13.0,
                48.0,
                148.0,
                114.0,
                230.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "37.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹751cr",
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
                100,
                94
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
                100,
                94
            ],
            "absorbed5y": -199,
            "receivables5y": -172,
            "inventory5y": null,
            "payables5y": 20
        }
    },
    "Zensar Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 1
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 15
                },
                {
                    "label": "Staff",
                    "share": 64
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
                656.0,
                552.0,
                872.0,
                817.0,
                916.0
            ],
            "ocf": [
                336.0,
                714.0,
                642.0,
                565.0,
                771.0
            ],
            "fcf": [
                279.0,
                677.0,
                626.0,
                528.0,
                717.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,774cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "79%",
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
                69,
                59
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
                69,
                59
            ],
            "absorbed5y": -181,
            "receivables5y": -466,
            "inventory5y": 0,
            "payables5y": 190
        }
    },
    "Intellect Design Arena": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 11
                },
                {
                    "label": "Staff",
                    "share": 60
                },
                {
                    "label": "Other costs",
                    "share": 10
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
                475.0,
                439.0,
                542.0,
                531.0,
                584.0
            ],
            "ocf": [
                453.0,
                174.0,
                410.0,
                431.0,
                510.0
            ],
            "fcf": [
                324.0,
                8.0,
                237.0,
                259.0,
                290.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "24.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "13.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹967cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "77%",
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
                50,
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
                50,
                82
            ],
            "absorbed5y": -760,
            "receivables5y": -886,
            "inventory5y": null,
            "payables5y": 455
        }
    },
    "Birlasoft": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 1
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 18
                },
                {
                    "label": "Staff",
                    "share": 60
                },
                {
                    "label": "Other costs",
                    "share": 5
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
                640.0,
                522.0,
                836.0,
                698.0,
                866.0
            ],
            "ocf": [
                281.0,
                561.0,
                718.0,
                588.0,
                481.0
            ],
            "fcf": [
                217.0,
                503.0,
                692.0,
                539.0,
                437.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹2,496cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                60,
                83
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
                60,
                83
            ],
            "absorbed5y": -491,
            "receivables5y": -788,
            "inventory5y": -4,
            "payables5y": 130
        }
    },
    "Sonata Software": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 73
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
                464.0,
                604.0,
                728.0,
                690.0,
                743.0
            ],
            "ocf": [
                450.0,
                268.0,
                281.0,
                644.0,
                538.0
            ],
            "fcf": [
                440.0,
                227.0,
                256.0,
                575.0,
                424.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.5x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹116cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                59,
                63
            ],
            "inventoryDays": [
                0,
                2
            ],
            "payableDays": [
                87,
                84
            ],
            "cycleDays": [
                59,
                -19
            ],
            "absorbed5y": -237,
            "receivables5y": -1316,
            "inventory5y": -34,
            "payables5y": 1232
        }
    },
    "Newgen Software": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 47
                },
                {
                    "label": "Other costs",
                    "share": 21
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
                212.0,
                288.0,
                376.0,
                406.0
            ],
            "ocf": [
                143.0,
                136.0,
                281.0,
                215.0,
                232.0
            ],
            "fcf": [
                130.0,
                119.0,
                267.0,
                192.0,
                222.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "14.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,076cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "26%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                131,
                164
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
                131,
                164
            ],
            "absorbed5y": -357,
            "receivables5y": -559,
            "inventory5y": null,
            "payables5y": 30
        }
    },
    "Tanla Platforms": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 74
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
                702.0,
                590.0,
                735.0,
                692.0,
                726.0
            ],
            "ocf": [
                486.0,
                247.0,
                590.0,
                642.0,
                574.0
            ],
            "fcf": [
                424.0,
                91.0,
                431.0,
                514.0,
                476.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "12.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,036cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                64,
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
                64,
                82
            ],
            "absorbed5y": -425,
            "receivables5y": -523,
            "inventory5y": 0,
            "payables5y": 183
        }
    },
    "eMudhra": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 7
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 40
                },
                {
                    "label": "Staff",
                    "share": 20
                },
                {
                    "label": "Other costs",
                    "share": 10
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
                67.0,
                87.0,
                110.0,
                124.0,
                159.0
            ],
            "ocf": [
                22.0,
                34.0,
                73.0,
                102.0,
                133.0
            ],
            "fcf": [
                -25.0,
                -28.0,
                -1.0,
                19.0,
                -52.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "47.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "30.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹82cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "67%",
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
                88,
                98
            ],
            "inventoryDays": [
                26,
                27
            ],
            "payableDays": [
                177,
                420
            ],
            "cycleDays": [
                -62,
                -294
            ],
            "absorbed5y": -158,
            "receivables5y": -190,
            "inventory5y": -2,
            "payables5y": 59
        }
    },
    "Latent View Analytic": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 67
                },
                {
                    "label": "Other costs",
                    "share": 9
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
                122.0,
                145.0,
                136.0,
                196.0,
                237.0
            ],
            "ocf": [
                87.0,
                97.0,
                115.0,
                130.0,
                165.0
            ],
            "fcf": [
                80.0,
                94.0,
                110.0,
                114.0,
                143.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,218cr net cash",
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
                75,
                80
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
                75,
                80
            ],
            "absorbed5y": -58,
            "receivables5y": -126,
            "inventory5y": null,
            "payables5y": 31
        }
    },
    "CE Info Systems": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 13
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 19
                },
                {
                    "label": "Other costs",
                    "share": 31
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
                86.0,
                118.0,
                155.0,
                176.0,
                169.0
            ],
            "ocf": [
                29.0,
                90.0,
                76.0,
                117.0,
                93.0
            ],
            "fcf": [
                25.0,
                67.0,
                46.0,
                77.0,
                51.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "35.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "24.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹594cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "58%",
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
                79,
                136
            ],
            "inventoryDays": [
                191,
                119
            ],
            "payableDays": [
                120,
                378
            ],
            "cycleDays": [
                150,
                -123
            ],
            "absorbed5y": -127,
            "receivables5y": -153,
            "inventory5y": -15,
            "payables5y": 55
        }
    },
    "Mastek": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 2
                },
                {
                    "label": "Staff",
                    "share": 53
                },
                {
                    "label": "Other costs",
                    "share": 29
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
                463.0,
                456.0,
                509.0,
                546.0,
                586.0
            ],
            "ocf": [
                273.0,
                108.0,
                420.0,
                396.0,
                542.0
            ],
            "fcf": [
                236.0,
                76.0,
                389.0,
                376.0,
                514.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "11.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹501cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "68%",
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
                73,
                57
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
                73,
                57
            ],
            "absorbed5y": -352,
            "receivables5y": -268,
            "inventory5y": null,
            "payables5y": 35
        }
    },
    "Happiest Minds": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 8
                },
                {
                    "label": "Staff",
                    "share": 68
                },
                {
                    "label": "Other costs",
                    "share": 8
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
                258.0,
                359.0,
                336.0,
                354.0,
                403.0
            ],
            "ocf": [
                168.0,
                207.0,
                213.0,
                236.0,
                261.0
            ],
            "fcf": [
                164.0,
                68.0,
                203.0,
                225.0,
                254.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "20.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹77cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                56,
                62
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
                56,
                62
            ],
            "absorbed5y": -215,
            "receivables5y": -172,
            "inventory5y": null,
            "payables5y": 28
        }
    },
    "Datamatic Global Ser": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 62
                },
                {
                    "label": "Other costs",
                    "share": 10
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
                194.0,
                244.0,
                246.0,
                232.0,
                375.0
            ],
            "ocf": [
                182.0,
                130.0,
                184.0,
                224.0,
                324.0
            ],
            "fcf": [
                158.0,
                90.0,
                168.0,
                188.0,
                284.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹571cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "81%",
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
                74,
                63
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
                74,
                63
            ],
            "absorbed5y": -51,
            "receivables5y": -94,
            "inventory5y": -4,
            "payables5y": 83
        }
    },
    "Capillary Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 48
                },
                {
                    "label": "Other costs",
                    "share": 39
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
                -51.0,
                -64.0,
                -12.0,
                65.0,
                93.0
            ],
            "ocf": [
                7.0,
                -20.0,
                97.0,
                -46.0,
                150.0
            ],
            "fcf": [
                -10.0,
                -48.0,
                60.0,
                -93.0,
                111.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "93.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "37.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹441cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "606%",
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
                93,
                90
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
                93,
                90
            ],
            "absorbed5y": 17,
            "receivables5y": -13,
            "inventory5y": null,
            "payables5y": 44
        }
    },
    "Aurionpro Solutions": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 42
                },
                {
                    "label": "Other costs",
                    "share": 38
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
                111.0,
                145.0,
                193.0,
                242.0,
                282.0
            ],
            "ocf": [
                62.0,
                41.0,
                164.0,
                157.0,
                56.0
            ],
            "fcf": [
                49.0,
                -5.0,
                132.0,
                62.0,
                -114.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "17.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "12.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹144cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "49%",
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
                94,
                98
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
                94,
                98
            ],
            "absorbed5y": -349,
            "receivables5y": -719,
            "inventory5y": -11,
            "payables5y": 381
        }
    },
    "Network People Services": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 46
                },
                {
                    "label": "Staff",
                    "share": 21
                },
                {
                    "label": "Other costs",
                    "share": 7
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
                3.0,
                12.0,
                43.0,
                60.0,
                51.0
            ],
            "ocf": [
                -7.0,
                24.0,
                51.0,
                29.0,
                -45.0
            ],
            "fcf": [
                -12.8,
                17.93,
                48.27,
                18.2,
                -92.33
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "83.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "62.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹296cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "31%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "26%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY22",
            "toYear": "FY26",
            "debtorDays": [
                95,
                195
            ],
            "inventoryDays": [
                4,
                4
            ],
            "payableDays": [
                153,
                153
            ],
            "cycleDays": [
                95,
                46
            ],
            "absorbed5y": -85,
            "receivables5y": -97,
            "inventory5y": 0,
            "payables5y": 33
        }
    },
    "Route Mobile": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 78
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
                220.0,
                445.0,
                514.0,
                529.0,
                542.0
            ],
            "ocf": [
                135.0,
                73.0,
                -98.0,
                602.0,
                581.0
            ],
            "fcf": [
                117.92,
                34.94,
                -133.61,
                580.68,
                554.56
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "8.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "3.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹1,364cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "57%",
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
                94,
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
                94,
                75
            ],
            "absorbed5y": -712,
            "receivables5y": -614,
            "inventory5y": null,
            "payables5y": 152
        }
    },
    "R Systems International": {
        "costSplit": {
            "year": "FY25",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 66
                },
                {
                    "label": "Other costs",
                    "share": 15
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
                "FY21",
                "FY22",
                "FY23",
                "FY24",
                "FY25"
            ],
            "ebitda": [
                161.0,
                200.0,
                252.0,
                257.0,
                307.0
            ],
            "ocf": [
                87.0,
                96.0,
                211.0,
                235.0,
                220.0
            ],
            "fcf": [
                59.0,
                61.0,
                191.0,
                223.0,
                176.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "13.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹96cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "72%",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY25",
                "value": "16%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY21",
            "toYear": "FY25",
            "debtorDays": [
                56,
                77
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
                56,
                77
            ],
            "absorbed5y": -148,
            "receivables5y": -211,
            "inventory5y": null,
            "payables5y": 84
        }
    },
    "Protean eGov": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 54
                },
                {
                    "label": "Staff",
                    "share": 24
                },
                {
                    "label": "Other costs",
                    "share": 11
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
                124.0,
                118.0,
                89.0,
                80.0,
                116.0
            ],
            "ocf": [
                11.0,
                -8.0,
                58.0,
                193.0,
                78.0
            ],
            "fcf": [
                5.0,
                -16.0,
                26.0,
                145.0,
                11.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "32.8x"
            },
            {
                "label": "EV/EBITDA",
                "value": "18.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹738cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "63%",
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
                106,
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
                106,
                75
            ],
            "absorbed5y": -52,
            "receivables5y": -37,
            "inventory5y": null,
            "payables5y": 20
        }
    },
    "Zaggle Prepaid": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 4
                },
                {
                    "label": "Other costs",
                    "share": 87
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
                "FY23",
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                48.0,
                71.0,
                114.0,
                185.0
            ],
            "ocf": [
                -16.0,
                -83.0,
                20.0,
                -51.0
            ],
            "fcf": [
                -32.0,
                -129.0,
                -47.0,
                -158.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "18.6x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.2x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹523cr net cash",
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
            "fromYear": "FY23",
            "toYear": "FY26",
            "debtorDays": [
                68,
                69
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
                68,
                69
            ],
            "absorbed5y": -509,
            "receivables5y": -299,
            "inventory5y": -1,
            "payables5y": -1
        }
    },
    "Mobavenue Ai Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 60
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
                    "share": 21
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
                14.0,
                46.0
            ],
            "ocf": [
                -4.0,
                35.0
            ],
            "fcf": [
                -4.21,
                22.55
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "65.9x"
            },
            {
                "label": "EV/EBITDA",
                "value": "43.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹66cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "21%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                193,
                99
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
                193,
                99
            ],
            "absorbed5y": -23,
            "receivables5y": -37,
            "inventory5y": null,
            "payables5y": 13
        }
    },
    "Saksoft": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 51
                },
                {
                    "label": "Other costs",
                    "share": 30
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
                79.0,
                108.0,
                137.0,
                146.0,
                187.0
            ],
            "ocf": [
                70.0,
                84.0,
                117.0,
                111.0,
                171.0
            ],
            "fcf": [
                50.0,
                76.0,
                115.0,
                107.0,
                167.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "8.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹207cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                81,
                70
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
                70
            ],
            "absorbed5y": 27,
            "receivables5y": -129,
            "inventory5y": null,
            "payables5y": 13
        }
    },
    "Nucleus Software": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 4
                },
                {
                    "label": "Staff",
                    "share": 68
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
                37.0,
                157.0,
                220.0,
                168.0,
                126.0
            ],
            "ocf": [
                58.0,
                50.0,
                222.0,
                151.0,
                117.0
            ],
            "fcf": [
                34.0,
                46.0,
                193.0,
                136.0,
                89.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "15.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹758cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "84%",
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
                61,
                50
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
                61,
                50
            ],
            "absorbed5y": 72,
            "receivables5y": -27,
            "inventory5y": null,
            "payables5y": 5
        }
    },
    "Xtranet Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 61
                },
                {
                    "label": "Delivery, subcontract and running costs",
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
                13.0,
                20.0,
                48.0,
                64.0
            ],
            "ocf": [
                0.0,
                -1.0,
                9.0,
                28.0
            ],
            "fcf": [
                -1.0,
                -8.0,
                -17.0,
                -22.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "36.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "25.9x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹83cr",
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
                267,
                114
            ],
            "inventoryDays": [
                79,
                128
            ],
            "payableDays": [
                371,
                147
            ],
            "cycleDays": [
                -24,
                96
            ],
            "absorbed5y": -95,
            "receivables5y": -93,
            "inventory5y": -64,
            "payables5y": 82
        }
    },
    "Aurum Proptech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 13
                },
                {
                    "label": "Staff",
                    "share": 26
                },
                {
                    "label": "Other costs",
                    "share": 39
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
                -19.0,
                -16.0,
                3.0,
                40.0,
                84.0
            ],
            "ocf": [
                -24.0,
                -50.0,
                20.0,
                28.0,
                63.0
            ],
            "fcf": [
                -33.0,
                -70.0,
                -84.0,
                11.0,
                47.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "1707.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "15.7x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹65cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "40%",
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
                180,
                50
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
                180,
                50
            ],
            "absorbed5y": -100,
            "receivables5y": -36,
            "inventory5y": null,
            "payables5y": 15
        }
    },
    "Ceinsys Tech": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 8
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 39
                },
                {
                    "label": "Staff",
                    "share": 21
                },
                {
                    "label": "Other costs",
                    "share": 10
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
                24.0,
                33.0,
                44.0,
                80.0,
                149.0
            ],
            "ocf": [
                26.0,
                47.0,
                49.0,
                6.0,
                3.0
            ],
            "fcf": [
                24.0,
                44.0,
                44.0,
                -31.0,
                -11.0
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
                "value": "₹258cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "40%",
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
                153,
                259
            ],
            "inventoryDays": [
                16,
                6
            ],
            "payableDays": [
                null,
                null
            ],
            "cycleDays": [
                -584,
                -812
            ],
            "absorbed5y": -200,
            "receivables5y": -46,
            "inventory5y": 3,
            "payables5y": 105
        }
    },
    "InfoBeans Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 63
                },
                {
                    "label": "Other costs",
                    "share": 14
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
                66.0,
                71.0,
                51.0,
                68.0,
                113.0
            ],
            "ocf": [
                81.0,
                77.0,
                44.0,
                50.0,
                85.0
            ],
            "fcf": [
                75.0,
                72.0,
                42.0,
                45.0,
                71.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "16.7x"
            },
            {
                "label": "EV/EBITDA",
                "value": "10.0x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹209cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "91%",
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
                91,
                77
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
                91,
                77
            ],
            "absorbed5y": -27,
            "receivables5y": -76,
            "inventory5y": 0,
            "payables5y": 8
        }
    },
    "Expleo Solutions": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 6
                },
                {
                    "label": "Staff",
                    "share": 62
                },
                {
                    "label": "Other costs",
                    "share": 16
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
                124.0,
                200.0,
                149.0,
                166.0,
                170.0
            ],
            "ocf": [
                24.0,
                23.0,
                71.0,
                179.0,
                119.0
            ],
            "fcf": [
                -1.0,
                -21.0,
                54.0,
                171.0,
                116.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "9.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "5.6x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹368cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "51%",
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
                85,
                76
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
                85,
                76
            ],
            "absorbed5y": -117,
            "receivables5y": -24,
            "inventory5y": 0,
            "payables5y": 39
        }
    },
    "IZMO": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Hardware, licences and goods bought",
                    "share": 2
                },
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 1
                },
                {
                    "label": "Staff",
                    "share": 38
                },
                {
                    "label": "Other costs",
                    "share": 40
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
                24.0,
                30.0,
                41.0,
                39.0,
                53.0
            ],
            "ocf": [
                16.0,
                30.0,
                31.0,
                4.0,
                20.0
            ],
            "fcf": [
                -8.719999999999999,
                0.05000000000000071,
                1.6400000000000006,
                -29.409999999999997,
                -8.260000000000002
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "25.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "23.1x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹7cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "54%",
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
                101,
                165
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
                101,
                165
            ],
            "absorbed5y": -110,
            "receivables5y": -101,
            "inventory5y": 0,
            "payables5y": null
        }
    },
    "Digitide Solutions": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 10
                },
                {
                    "label": "Staff",
                    "share": 74
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
                "FY25",
                "FY26"
            ],
            "ebitda": [
                475.0,
                345.0
            ],
            "ocf": [
                null,
                263.0
            ],
            "fcf": [
                null,
                158.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "1037.0x"
            },
            {
                "label": "EV/EBITDA",
                "value": "4.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹272cr",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
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
            "fromYear": "FY25",
            "toYear": "FY26",
            "debtorDays": [
                62,
                78
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
                78
            ],
            "absorbed5y": -170,
            "receivables5y": -229,
            "inventory5y": null,
            "payables5y": 20
        }
    },
    "TAC Security (Tac Infosec)": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Staff",
                    "share": 22
                },
                {
                    "label": "Other costs",
                    "share": 24
                },
                {
                    "label": "Operating profit",
                    "share": 54
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
                7.0,
                15.0,
                31.0
            ],
            "ocf": [
                -2.0,
                19.0,
                12.0
            ],
            "fcf": [
                -2.17,
                18.32,
                5.8
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "34.1x"
            },
            {
                "label": "EV/EBITDA",
                "value": "29.3x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹32cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "n/m",
                "note": "Operating cash ÷ operating profit over five years; 70–80% is healthy."
            },
            {
                "label": "Operating margin FY26",
                "value": "54%"
            }
        ],
        "statsAsOf": "23 Sep 2026",
        "workingCapital": {
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                356,
                145
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
                356,
                145
            ],
            "absorbed5y": -25,
            "receivables5y": -18,
            "inventory5y": null,
            "payables5y": 0
        }
    },
    "Unicomm. eSolutions": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 3
                },
                {
                    "label": "Staff",
                    "share": 34
                },
                {
                    "label": "Other costs",
                    "share": 46
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
                "FY24",
                "FY25",
                "FY26"
            ],
            "ebitda": [
                14.0,
                27.0,
                36.0
            ],
            "ocf": [
                6.0,
                28.0,
                47.0
            ],
            "fcf": [
                5.88,
                21.43,
                44.87
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "44.3x"
            },
            {
                "label": "EV/EBITDA",
                "value": "28.5x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹29cr net cash",
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
            "fromYear": "FY24",
            "toYear": "FY26",
            "debtorDays": [
                47,
                20
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
                47,
                20
            ],
            "absorbed5y": 1,
            "receivables5y": 0,
            "inventory5y": null,
            "payables5y": 6
        }
    },
    "Onward Technologies": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Delivery, subcontract and running costs",
                    "share": 9
                },
                {
                    "label": "Staff",
                    "share": 73
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
                22.0,
                27.0,
                52.0,
                45.0,
                72.0
            ],
            "ocf": [
                -4.0,
                6.0,
                62.0,
                32.0,
                65.0
            ],
            "fcf": [
                -26.36,
                -1.2000000000000002,
                59.98,
                28.33,
                45.89
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "14.2x"
            },
            {
                "label": "EV/EBITDA",
                "value": "7.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹71cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "74%",
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
                79,
                81
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
                79,
                81
            ],
            "absorbed5y": -42,
            "receivables5y": -60,
            "inventory5y": 0,
            "payables5y": 7
        }
    },
    "Railtel Corporation of India": {
        "costSplit": {
            "year": "FY26",
            "parts": [
                {
                    "label": "Project subcontracts, equipment and network costs",
                    "share": 79
                },
                {
                    "label": "Staff",
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
                368.0,
                379.0,
                464.0,
                535.0,
                638.0
            ],
            "ocf": [
                258.0,
                284.0,
                556.0,
                255.0,
                316.0
            ],
            "fcf": [
                141.0,
                108.0,
                346.0,
                -70.0,
                44.0
            ]
        },
        "stats": [
            {
                "label": "P/E",
                "value": "22.4x"
            },
            {
                "label": "EV/EBITDA",
                "value": "11.8x",
                "note": "Market value plus net debt, ÷ operating profit over the last year."
            },
            {
                "label": "Net debt",
                "value": "₹590cr net cash",
                "note": "Borrowings including leases, minus cash and mutual-fund investments, latest year end."
            },
            {
                "label": "Cash conversion, 5 yrs",
                "value": "70%",
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
                175
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
                175
            ],
            "absorbed5y": null,
            "receivables5y": null,
            "inventory5y": null,
            "payables5y": null
        }
    }
};

// Fixed valuation inputs as of the note date; market value and P/E are live on the page.
export const softwareValuationInputs: Record<string, ValuationInput> = {
    "Inventurus Knowledge Solutions": {
        "netDebt": -13,
        "ttmEbitda": 1134.0,
        "mcapAtWriting": 31171.0,
        "peAtWriting": 40.8
    },
    "Tata Technologies": {
        "netDebt": -600,
        "ttmEbitda": 920.0,
        "mcapAtWriting": 28547.0,
        "peAtWriting": 43.9
    },
    "Netweb Technologies": {
        "netDebt": -307,
        "ttmEbitda": 360.0,
        "mcapAtWriting": 27019.0,
        "peAtWriting": 104.0
    },
    "Affle 3i": {
        "netDebt": -1393,
        "ttmEbitda": 638.0,
        "mcapAtWriting": 22236.0,
        "peAtWriting": 46.5
    },
    "Sagility": {
        "netDebt": 207,
        "ttmEbitda": 1849.0,
        "mcapAtWriting": 20921.0,
        "peAtWriting": 20.4
    },
    "KPIT Technologies": {
        "netDebt": -675,
        "ttmEbitda": 1183.0,
        "mcapAtWriting": 14239.0,
        "peAtWriting": 22.8
    },
    "Black Box": {
        "netDebt": 613,
        "ttmEbitda": 614.0,
        "mcapAtWriting": 14204.0,
        "peAtWriting": 49.7
    },
    "E2E Networks": {
        "netDebt": null,
        "ttmEbitda": 126.0,
        "mcapAtWriting": 13406.0,
        "peAtWriting": 430.0
    },
    "Fractal Analytics": {
        "netDebt": -1985,
        "ttmEbitda": 477.0,
        "mcapAtWriting": 13025.0,
        "peAtWriting": 39.2
    },
    "Amagi Media Labs": {
        "netDebt": -1416,
        "ttmEbitda": 81.0,
        "mcapAtWriting": 12672.0,
        "peAtWriting": 125.0
    },
    "Cyient": {
        "netDebt": -1532,
        "ttmEbitda": 934.0,
        "mcapAtWriting": 12168.0,
        "peAtWriting": 29.9
    },
    "RateGain Travel Tech": {
        "netDebt": 751,
        "ttmEbitda": 459.0,
        "mcapAtWriting": 9812.0,
        "peAtWriting": 37.5
    },
    "Zensar Technologies": {
        "netDebt": -2774,
        "ttmEbitda": 926.0,
        "mcapAtWriting": 9897.0,
        "peAtWriting": 12.4
    },
    "Intellect Design Arena": {
        "netDebt": -967,
        "ttmEbitda": 603.0,
        "mcapAtWriting": 8892.0,
        "peAtWriting": 24.0
    },
    "Birlasoft": {
        "netDebt": -2496,
        "ttmEbitda": 930.0,
        "mcapAtWriting": 7664.0,
        "peAtWriting": 12.8
    },
    "Sonata Software": {
        "netDebt": 116,
        "ttmEbitda": 752.0,
        "mcapAtWriting": 7849.0,
        "peAtWriting": 15.5
    },
    "Newgen Software": {
        "netDebt": -1076,
        "ttmEbitda": 417.0,
        "mcapAtWriting": 6916.0,
        "peAtWriting": 20.2
    },
    "Tanla Platforms": {
        "netDebt": -1036,
        "ttmEbitda": 761.0,
        "mcapAtWriting": 6562.0,
        "peAtWriting": 12.3
    },
    "eMudhra": {
        "netDebt": -82,
        "ttmEbitda": 174.0,
        "mcapAtWriting": 5411.0,
        "peAtWriting": 47.0
    },
    "Latent View Analytic": {
        "netDebt": -1218,
        "ttmEbitda": 243.0,
        "mcapAtWriting": 5048.0,
        "peAtWriting": 25.8
    },
    "CE Info Systems": {
        "netDebt": -594,
        "ttmEbitda": 170.0,
        "mcapAtWriting": 4834.0,
        "peAtWriting": 35.1
    },
    "Mastek": {
        "netDebt": -501,
        "ttmEbitda": 600.0,
        "mcapAtWriting": 4908.0,
        "peAtWriting": 11.2
    },
    "Happiest Minds": {
        "netDebt": 77,
        "ttmEbitda": 427.0,
        "mcapAtWriting": 4728.0,
        "peAtWriting": 20.2
    },
    "Datamatic Global Ser": {
        "netDebt": -571,
        "ttmEbitda": 397.0,
        "mcapAtWriting": 4773.0,
        "peAtWriting": 18.8
    },
    "Capillary Technologies": {
        "netDebt": -441,
        "ttmEbitda": 115.0,
        "mcapAtWriting": 4771.0,
        "peAtWriting": 93.1
    },
    "Aurionpro Solutions": {
        "netDebt": -144,
        "ttmEbitda": 276.0,
        "mcapAtWriting": 3701.0,
        "peAtWriting": 17.7
    },
    "Network People Services": {
        "netDebt": -296,
        "ttmEbitda": 55.0,
        "mcapAtWriting": 3748.0,
        "peAtWriting": 83.9
    },
    "Route Mobile": {
        "netDebt": -1364,
        "ttmEbitda": 524.0,
        "mcapAtWriting": 2917.0,
        "peAtWriting": 8.24
    },
    "R Systems International": {
        "netDebt": 96,
        "ttmEbitda": 380.0,
        "mcapAtWriting": 2792.0,
        "peAtWriting": 13.3
    },
    "Protean eGov": {
        "netDebt": -738,
        "ttmEbitda": 112.0,
        "mcapAtWriting": 2817.0,
        "peAtWriting": 32.8
    },
    "Zaggle Prepaid": {
        "netDebt": -523,
        "ttmEbitda": 185.0,
        "mcapAtWriting": 2405.0,
        "peAtWriting": 18.6
    },
    "Mobavenue Ai Tech": {
        "netDebt": -66,
        "ttmEbitda": 52.0,
        "mcapAtWriting": 2308.0,
        "peAtWriting": 65.9
    },
    "Saksoft": {
        "netDebt": -207,
        "ttmEbitda": 187.0,
        "mcapAtWriting": 1876.0,
        "peAtWriting": 14.0
    },
    "Nucleus Software": {
        "netDebt": -758,
        "ttmEbitda": 100.0,
        "mcapAtWriting": 1789.0,
        "peAtWriting": 15.7
    },
    "Xtranet Technologies": {
        "netDebt": 83,
        "ttmEbitda": 64.0,
        "mcapAtWriting": 1573.0,
        "peAtWriting": 36.7
    },
    "Aurum Proptech": {
        "netDebt": 65,
        "ttmEbitda": 106.0,
        "mcapAtWriting": 1604.0,
        "peAtWriting": 1707.0
    },
    "Ceinsys Tech": {
        "netDebt": -258,
        "ttmEbitda": 154.0,
        "mcapAtWriting": 1439.0,
        "peAtWriting": 10.8
    },
    "InfoBeans Technologies": {
        "netDebt": -209,
        "ttmEbitda": 121.0,
        "mcapAtWriting": 1421.0,
        "peAtWriting": 16.7
    },
    "Expleo Solutions": {
        "netDebt": -368,
        "ttmEbitda": 178.0,
        "mcapAtWriting": 1371.0,
        "peAtWriting": 9.34
    },
    "IZMO": {
        "netDebt": 7,
        "ttmEbitda": 59.0,
        "mcapAtWriting": 1354.0,
        "peAtWriting": 25.2
    },
    "Digitide Solutions": {
        "netDebt": 272,
        "ttmEbitda": 337.0,
        "mcapAtWriting": 1172.0,
        "peAtWriting": 1037.0,
        "lossMaking": true
    },
    "TAC Security (Tac Infosec)": {
        "netDebt": -32,
        "ttmEbitda": 31.0,
        "mcapAtWriting": 940.0,
        "peAtWriting": 34.1
    },
    "Unicomm. eSolutions": {
        "netDebt": -29,
        "ttmEbitda": 32.0,
        "mcapAtWriting": 942.0,
        "peAtWriting": 44.3
    },
    "Onward Technologies": {
        "netDebt": -71,
        "ttmEbitda": 73.0,
        "mcapAtWriting": 640.0,
        "peAtWriting": 14.2
    },
    "Railtel Corporation of India": {
        "netDebt": -590,
        "ttmEbitda": 652.0,
        "mcapAtWriting": 8296.0,
        "peAtWriting": 22.4
    }
};
