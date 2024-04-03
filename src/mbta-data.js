
//  MBTA API to use
// https://api-v3.mbta.com/lines
// data: display  each  line  and  some info
 export const line_data = {
    "data": [
        {
            "attributes": {
                "color": "DA291C",
                "long_name": "Red Line",
                "short_name": "",
                "sort_order": 10010,
                "text_color": "FFFFFF"
            },
            "id": "line-Red",
            "links": {
                "self": "/lines/line-Red"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "DA291C",
                "long_name": "Mattapan Trolley",
                "short_name": "",
                "sort_order": 10011,
                "text_color": "FFFFFF"
            },
            "id": "line-Mattapan",
            "links": {
                "self": "/lines/line-Mattapan"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "ED8B00",
                "long_name": "Orange Line",
                "short_name": "",
                "sort_order": 10020,
                "text_color": "FFFFFF"
            },
            "id": "line-Orange",
            "links": {
                "self": "/lines/line-Orange"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "00843D",
                "long_name": "Green Line",
                "short_name": "",
                "sort_order": 10032,
                "text_color": "FFFFFF"
            },
            "id": "line-Green",
            "links": {
                "self": "/lines/line-Green"
            },
            "type": "line"
        },
        {
            "attributes": {
                "color": "003DA5",
                "long_name": "Blue Line",
                "short_name": "",
                "sort_order": 10040,
                "text_color": "FFFFFF"
            },
            "id": "line-Blue",
            "links": {
                "self": "/lines/line-Blue"
            },
            "type": "line"
        }
    ]
};

export const route_data ={
    "data": [
        {
            "attributes": {
                "color": "DA291C",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Ashmont/Braintree",
                    "Alewife"
                ],
                "direction_names": [
                    "South",
                    "North"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Red Line",
                "short_name": "",
                "sort_order": 10010,
                "text_color": "FFFFFF",
                "type": 1
            },
            "id": "Red",
            "links": {
                "self": "/routes/Red"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Red",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "DA291C",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Mattapan",
                    "Ashmont"
                ],
                "direction_names": [
                    "Outbound",
                    "Inbound"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Mattapan Trolley",
                "short_name": "",
                "sort_order": 10011,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Mattapan",
            "links": {
                "self": "/routes/Mattapan"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Mattapan",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "ED8B00",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Forest Hills",
                    "Oak Grove"
                ],
                "direction_names": [
                    "South",
                    "North"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Orange Line",
                "short_name": "",
                "sort_order": 10020,
                "text_color": "FFFFFF",
                "type": 1
            },
            "id": "Orange",
            "links": {
                "self": "/routes/Orange"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Orange",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Boston College",
                    "Government Center"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line B",
                "short_name": "B",
                "sort_order": 10032,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-B",
            "links": {
                "self": "/routes/Green-B"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Cleveland Circle",
                    "Government Center"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line C",
                "short_name": "C",
                "sort_order": 10033,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-C",
            "links": {
                "self": "/routes/Green-C"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Riverside",
                    "Union Square"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line D",
                "short_name": "D",
                "sort_order": 10034,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-D",
            "links": {
                "self": "/routes/Green-D"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "00843D",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Heath Street",
                    "Medford/Tufts"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Green Line E",
                "short_name": "E",
                "sort_order": 10035,
                "text_color": "FFFFFF",
                "type": 0
            },
            "id": "Green-E",
            "links": {
                "self": "/routes/Green-E"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Green",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        },
        {
            "attributes": {
                "color": "003DA5",
                "description": "Rapid Transit",
                "direction_destinations": [
                    "Bowdoin",
                    "Wonderland"
                ],
                "direction_names": [
                    "West",
                    "East"
                ],
                "fare_class": "Rapid Transit",
                "long_name": "Blue Line",
                "short_name": "",
                "sort_order": 10040,
                "text_color": "FFFFFF",
                "type": 1
            },
            "id": "Blue",
            "links": {
                "self": "/routes/Blue"
            },
            "relationships": {
                "line": {
                    "data": {
                        "id": "line-Blue",
                        "type": "line"
                    }
                }
            },
            "type": "route"
        }
    ],
    "jsonapi": {
        "version": "1.0"
    }
};


export const stop_data = new Map();
stop_data.set("Red", {
    "data": [
        {
            "attributes": {
                "address": "Alewife Brook Pkwy and Cambridge Park Dr, Cambridge, MA 02140",
                "at_street": null,
                "description": null,
                "latitude": 42.39583,
                "location_type": 1,
                "longitude": -71.141287,
                "municipality": "Cambridge",
                "name": "Alewife",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-alfcl",
            "links": {
                "self": "/stops/place-alfcl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-alfcl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "College Ave and Elm St, Somerville, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.39674,
                "location_type": 1,
                "longitude": -71.121815,
                "municipality": "Somerville",
                "name": "Davis",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-davis",
            "links": {
                "self": "/stops/place-davis"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-davis"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "1899 Massachusetts Ave, Cambridge, MA 02140",
                "at_street": null,
                "description": null,
                "latitude": 42.3884,
                "location_type": 1,
                "longitude": -71.119149,
                "municipality": "Cambridge",
                "name": "Porter",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-portr",
            "links": {
                "self": "/stops/place-portr"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-portr"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1A",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "1400 Massachusetts Ave, Cambridge, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.373362,
                "location_type": 1,
                "longitude": -71.118956,
                "municipality": "Cambridge",
                "name": "Harvard",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-harsq",
            "links": {
                "self": "/stops/place-harsq"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-harsq"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Massachusetts Ave and Prospect St, Cambridge, MA 02139",
                "at_street": null,
                "description": null,
                "latitude": 42.365486,
                "location_type": 1,
                "longitude": -71.103802,
                "municipality": "Cambridge",
                "name": "Central",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-cntsq",
            "links": {
                "self": "/stops/place-cntsq"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-cntsq"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "300 Main St, Cambridge, MA 02142",
                "at_street": null,
                "description": null,
                "latitude": 42.362491,
                "location_type": 1,
                "longitude": -71.086176,
                "municipality": "Cambridge",
                "name": "Kendall/MIT",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-knncl",
            "links": {
                "self": "/stops/place-knncl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-knncl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Cambridge St and Charles St, Boston, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.361166,
                "location_type": 1,
                "longitude": -71.070628,
                "municipality": "Boston",
                "name": "Charles/MGH",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-chmnl",
            "links": {
                "self": "/stops/place-chmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-chmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Tremont St and Winter St, Boston, MA 02108",
                "at_street": null,
                "description": null,
                "latitude": 42.356395,
                "location_type": 1,
                "longitude": -71.062424,
                "municipality": "Boston",
                "name": "Park Street",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-pktrm",
            "links": {
                "self": "/stops/place-pktrm"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-pktrm"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Washington St and Summer St, Boston, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.355518,
                "location_type": 1,
                "longitude": -71.060225,
                "municipality": "Boston",
                "name": "Downtown Crossing",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-dwnxg",
            "links": {
                "self": "/stops/place-dwnxg"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-dwnxg"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "700 Atlantic Ave, Boston, MA 02110",
                "at_street": null,
                "description": null,
                "latitude": 42.352271,
                "location_type": 1,
                "longitude": -71.055242,
                "municipality": "Boston",
                "name": "South Station",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-sstat",
            "links": {
                "self": "/stops/place-sstat"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-sstat"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1A",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dorchester Ave and Broadway, Boston, MA",
                "at_street": null,
                "description": null,
                "latitude": 42.342622,
                "location_type": 1,
                "longitude": -71.056967,
                "municipality": "Boston",
                "name": "Broadway",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-brdwy",
            "links": {
                "self": "/stops/place-brdwy"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-brdwy"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dorchester Ave and Southhampton St, South Boston, MA 02127",
                "at_street": null,
                "description": null,
                "latitude": 42.330154,
                "location_type": 1,
                "longitude": -71.057655,
                "municipality": "Boston",
                "name": "Andrew",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-andrw",
            "links": {
                "self": "/stops/place-andrw"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-andrw"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "599 Old Colony Ave, Boston, MA 02127-3805",
                "at_street": null,
                "description": null,
                "latitude": 42.320685,
                "location_type": 1,
                "longitude": -71.052391,
                "municipality": "Boston",
                "name": "JFK/UMass",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-jfk",
            "links": {
                "self": "/stops/place-jfk"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-jfk"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1A",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "125 Savin Hill Ave, Dorchester, MA 02124",
                "at_street": null,
                "description": null,
                "latitude": 42.31129,
                "location_type": 1,
                "longitude": -71.053331,
                "municipality": "Boston",
                "name": "Savin Hill",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-shmnl",
            "links": {
                "self": "/stops/place-shmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-shmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "50 Freeman St, Dorchester, MA 02122",
                "at_street": null,
                "description": null,
                "latitude": 42.300093,
                "location_type": 1,
                "longitude": -71.061667,
                "municipality": "Boston",
                "name": "Fields Corner",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-fldcr",
            "links": {
                "self": "/stops/place-fldcr"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-fldcr"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dayton St and Clementine Park, Dorchester, MA 02124",
                "at_street": null,
                "description": null,
                "latitude": 42.293126,
                "location_type": 1,
                "longitude": -71.065738,
                "municipality": "Boston",
                "name": "Shawmut",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-smmnl",
            "links": {
                "self": "/stops/place-smmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-smmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Dorchester Ave and Ashmont St, Boston, MA 02124",
                "at_street": null,
                "description": null,
                "latitude": 42.28452,
                "location_type": 1,
                "longitude": -71.063777,
                "municipality": "Boston",
                "name": "Ashmont",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-asmnl",
            "links": {
                "self": "/stops/place-asmnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-asmnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Hancock St and Hunt St, Quincy, MA 02171",
                "at_street": null,
                "description": null,
                "latitude": 42.275275,
                "location_type": 1,
                "longitude": -71.029583,
                "municipality": "Quincy",
                "name": "North Quincy",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-nqncy",
            "links": {
                "self": "/stops/place-nqncy"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-nqncy"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "90 Woodbine St, Quincy, MA 02171",
                "at_street": null,
                "description": null,
                "latitude": 42.266514,
                "location_type": 1,
                "longitude": -71.020337,
                "municipality": "Quincy",
                "name": "Wollaston",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-wlsta",
            "links": {
                "self": "/stops/place-wlsta"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-wlsta"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "175 Thomas E Burgin Pkwy, Quincy, MA 02169",
                "at_street": null,
                "description": null,
                "latitude": 42.251809,
                "location_type": 1,
                "longitude": -71.005409,
                "municipality": "Quincy",
                "name": "Quincy Center",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-qnctr",
            "links": {
                "self": "/stops/place-qnctr"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-qnctr"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-1",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "Burgin Pkwy and Centre St, Quincy, MA 02169",
                "at_street": null,
                "description": null,
                "latitude": 42.233391,
                "location_type": 1,
                "longitude": -71.007153,
                "municipality": "Quincy",
                "name": "Quincy Adams",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-qamnl",
            "links": {
                "self": "/stops/place-qamnl"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-qamnl"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": null
                }
            },
            "type": "stop"
        },
        {
            "attributes": {
                "address": "197 Ivory St, Braintree, MA 02184",
                "at_street": null,
                "description": null,
                "latitude": 42.207854,
                "location_type": 1,
                "longitude": -71.001138,
                "municipality": "Braintree",
                "name": "Braintree",
                "on_street": null,
                "platform_code": null,
                "platform_name": null,
                "vehicle_type": null,
                "wheelchair_boarding": 1
            },
            "id": "place-brntn",
            "links": {
                "self": "/stops/place-brntn"
            },
            "relationships": {
                "facilities": {
                    "links": {
                        "related": "/facilities/?filter[stop]=place-brntn"
                    }
                },
                "parent_station": {
                    "data": null
                },
                "zone": {
                    "data": {
                        "id": "CR-zone-2",
                        "type": "zone"
                    }
                }
            },
            "type": "stop"
        }
    ],
    "jsonapi": {
        "version": "1.0"
    }
})