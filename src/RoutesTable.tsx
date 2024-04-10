//TODO:
// why can't I pass the object with attributes down?
// change the onclick handler to display a new component with the list of stops
// refactor the handler to a higher  scope
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {JSX} from "react/jsx-runtime";
import getRoutes, {getStops} from "./loadData.ts";


interface StopsRow {
    key: string
    id: string
    attributes: {
        address: string
        name: string
    }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface RouteRow {
    key: string
    id: string
    color: string
    name: string
}

interface RouteProps {
    rec: RouteRow
    onSelect: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function RouteDisplay({rec, onSelect}: RouteProps) {
    // set state to reflect which Route to show details for
    // display only when not empty.

    console.log("displaying route " + rec.id)
    return (
        <li key={rec.key} id={rec.id} className={'wrapper'}>
            <span key={rec.key}>{rec.id}</span>

            <button onClick={onSelect}
                    style={{color: "#" + rec.color}}>{rec.name}</button>


        </li>
    );
}

interface RouteStopTableProps {
    routeName: string
    onDone: React.MouseEventHandler<HTMLButtonElement>
}

// Another option: Just have this at the  details div, and vary what's there  based on the click
function RouteStopsTable({routeName, onDone}: RouteStopTableProps) {
    const [stopsList, setStopsList] = useState([])
    console.log('fetching stops for ' + routeName)


    // the following is modeled after this:
    // https://react.dev/reference/react/useEffect#fetching-data-with-effects
    useEffect(() => {
        console.log("in useEffect")
        if (routeName.length === 0) {
            return
        }
        getStops(routeName).then(result => {
                    console.log('doing fetch')
                    setStopsList(result)
            }
        )


        console.log('selected ' + routeName)
        console.log('got ' + stopsList.length)

        return () => {
            console.log('doing effect close callback')
        };

    }, [routeName]);

    const rows: JSX.Element[] | null | undefined = [];

    stopsList.forEach((r: StopsRow) => {
        console.log(r)

        rows.push(<li
            key={r.id} id={r.id}> {r.attributes.name} {r.attributes.address}</li>
        )

    })

    return (

        <div>
            <h2>Stops for {routeName}</h2>
            <ul>
                {rows}
            </ul>
            <button onClick={onDone}>Close</button>
        </div>
    )

}

// interface RoutesRow{
//     id:string
//     attributes:{
//         color:string
//         long_name:string
//     }
// }

interface Route {
    attributes: {
        type: number
        long_name: string
        color: string

    }
    id: string

}

export function RoutesTable() {
    const [selectedRoute, setSelectedRoute] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [allRoutes, setAllRoutes] = useState([]);
    const [displayRouteType, setDisplayRouteType] = useState(1)
    const [displayRoutes, setDisplayRoutes] = useState<Route[]>([])
    const [routeRows, setRouteRows] = useState<React.JSX.Element[]>([])
// populate based on the ROUTE not the Route using
    // curl -X GET "https://api-v3.mbta.com/stops?filter%5Broute%5D=Red" -H "accept: application/vnd.api+json"
    console.log("got date in Routes Table " + allRoutes.length)
    useEffect(() => {
        console.log("Loading Route Data")
        getRoutes().then(d => {
            setAllRoutes(d)
        })

    }, []);

    useEffect(() => {
            console.log("all date in Routes Table " + allRoutes.length)

            const rr = allRoutes.filter((r: Route) => r.attributes.type == displayRouteType)

            //TODO: Do I need DisplayRoutes if I generate the Route info elements directly?
            setDisplayRoutes(
                rr
            )
            console.log("filtering display route from " + allRoutes.length + " now have " + rr.length)
            let rows: React.JSX.Element[] = [];
            rr.forEach((r: Route) => {
                console.log(r)

                function handleSelect() {
                    console.log('selR ' + r.id)
                    setSelectedRoute(r.id)
                }


                rows.push(<RouteDisplay key={r.id}
                                        rec={{
                                            key: r.id, id: r.id, name: r.attributes.long_name,
                                            color: r.attributes.color
                                        }}
                                        onSelect={handleSelect}/>)

            })
            setRouteRows(rows)

        }, [displayRouteType, allRoutes]
    )
    console.log({'display': displayRoutes, 'data': allRoutes})

    // the function that calculates the rows.
    // this is called in the render
    // const buildRows = () => {
    //     console.log("building rows")
    //     displayRoutes.forEach((r: Route) => {
    //         console.log(r)
    //
    //         function handleSelect() {
    //             console.log('selR ' + r.id)
    //             setSelectedRoute(r.id)
    //         }
    //
    //         rows.push(<RouteDisplay key={r.id}
    //                                 rec={{
    //                                     key: r.id, id: r.id, name: r.attributes.long_name,
    //                                     color: r.attributes.color
    //                                 }}
    //                                 onSelect={handleSelect}/>)
    //
    //     })
    //     return rows;
    // }

    const handleChange = (event: { target: { value: string; }; }) => {
        console.log('change to: ' + event.target.value);
        setSelectedRoute("")
        const selectedRouteType = Number(event.target.value);
        setDisplayRouteType(selectedRouteType);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const stopsDiv: Element | DocumentFragment = document.getElementById('stops-div');
    return (
        <>

            <p>there are {allRoutes.length} routes. Displaying {displayRoutes.length}</p>
            <label htmlFor="routeType">Route Type to Display</label>
            <select id="routeType" name="routeType" defaultValue={displayRouteType.toString(10)}
                    onChange={handleChange}>
                <option key={"0"} value="0">Light Rail</option>
                <option key={"1"} value="1">Subway</option>
                <option key={"2"} value="2">Commuter Rail</option>
                <option key={"3"} value="3">Bus</option>
                <option key={"4"} value="4">Ferry</option>
            </select>
            <div className='main-container'>
                <ul>
                    {routeRows}
                </ul>
                <div>{'selected: ' + selectedRoute}</div>
                {
                    selectedRoute != "" && ReactDOM.createPortal(
                        <div>
                            <RouteStopsTable routeName={selectedRoute} onDone={() => setSelectedRoute("")}/>
                        </div>
                        , stopsDiv)
                }
            </div>
        </>
    )

}