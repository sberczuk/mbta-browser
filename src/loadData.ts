

export default async function loadRoutes() {
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

