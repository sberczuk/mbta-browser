//TODO:
// why can't I pass the object with attributes down?
// change the onclick handler to display a new component with the list of stops
// refactor the handler to a higher  scope
import {useState} from "react";
import ReactDOM from "react-dom";
import {stop_data} from "./mbta-data";

function Route({rec, onSelect}) {
    // set state to reflect which Route to show details for
    // display only when not empty.


    return (
        <li id={rec.id} key={rec.key} className={'wrapper'}>
            <div key={rec.key}>{rec.id}</div>

            <button onClick={onSelect}
                    style={{color: "#" + rec.color}}>{rec.name}</button>


        </li>
    );
}


// Another option: Just have this at the  details div, and vary what's there  based on the click
function RouteStopsTable({routeName, onDone}) {
    var data = stop_data.get(routeName).data

    const rows = [];
    console.log('selected ' +routeName)
    console.log('dataLeb ' +data.length)
    data.forEach((r) => {
        console.log(r)

        // function handleSelect() {
        //     console.log('selR ' + r.id)
        //     setSelectedRoute(r.id)
        //
        // }

        rows.push(<li
                key={r.id} id={r.id} > {r.attributes.name} { r.attributes.address}</li>
            )

    })
    return (
        <div>
        <ul>
            {rows}
        </ul>
    <button onClick={onDone}>Close</button>
        </div>


)
}

export function RoutesTable({data}) {
    const [selectedRoute, setSelectedRoute] = useState('');


    console.log(data)
    const rows = [];
    data.forEach((r) => {
        console.log(r)

        function handleSelect() {
            console.log('selR ' + r.id)
            setSelectedRoute(r.id)

        }

        rows.push(<Route
            rec={{
                key: r.id, id: r.id, name: r.attributes.long_name,
                color: r.attributes.color
            }}
            onSelect={handleSelect}/>)

    })

// populate based on the ROUTE not the Route using
    // curl -X GET "https://api-v3.mbta.com/stops?filter%5Broute%5D=Red" -H "accept: application/vnd.api+json"
    return (
        <>
            <ul className={'main-container'}>
                {rows}
            </ul>
            <div>{'selected: ' + selectedRoute}</div>
            {
                selectedRoute == "Red" && ReactDOM.createPortal(
                    <div>
                        <RouteStopsTable routeName={selectedRoute} onDone={() => setSelectedRoute("")}/>
                    </div>
                    , document.getElementById('stops-div'))
            }
        </>
    )

}