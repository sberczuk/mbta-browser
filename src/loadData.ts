

export default async function getRoutes() {
    const baseUrl = "https://api-v3.mbta.com/routes";
    const url = encodeURI(baseUrl )
    console.log("loading initial routes")
    const response = await fetch(url, {
        headers: {
            accept: "application/vnd.api+json"
        }
    });
    const newVar = await response.json();
    return newVar.data;
}

// do this in a UseEffect
// https://react.dev/reference/react/useEffect
export async function getStops(routeId: string) {
    const baseUrl = "https://api-v3.mbta.com/stops";
    let filterPart = '?filter[route]=' + routeId;
    const url = encodeURI(baseUrl + filterPart)
    const response = await fetch(url, {
        headers: {
            accept: "application/vnd.api+json"
        }
    });
    const newVar = await response.json();
    return newVar.data;
}


//TODO:
// write generic json getter that takes a url sets headers
// write handlers stops and routees