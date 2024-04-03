
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

