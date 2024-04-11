export default async function getRoutes() {
    const baseUrl = "https://api-v3.mbta.com/routes";
    console.log("loading initial routes")
    return loadFromUrl(baseUrl)
}

// do this in a UseEffect
// https://react.dev/reference/react/useEffect
export async function getStops(routeId: string) {
    const baseUrl = "https://api-v3.mbta.com/stops";
    const filterPart = '?filter[route]=' + routeId;
    const uri = baseUrl + filterPart;
    return loadFromUrl(uri)
}


export async function loadFromUrl(urlString: string) {
    const url = encodeURI(urlString)
    const response = await fetch(url, {
        headers: {
            accept: "application/vnd.api+json"
        }
    });
    const resp = await response.json();
    return resp.data;
}
