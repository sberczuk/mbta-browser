import './App.css';
import {line_data, route_data} from './mbta-data'
import {useEffect, useState} from 'react';
import {LinesTable} from "./LinesTable";
import {RoutesTable} from "./RoutesTable";

function MyButton({count, onClick}) {

    return (
        <div>
            <button onClick={onClick}>
                I'm a button
                Clicked {count} times
            </button>

        </div>
    )
        ;
}


// LoadRoutesLocal tomock network call API
function loadRoutesLocal() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(route_data.data)
        }, 1500)
    })
}

async function loadRoutes() {
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

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function MyApp() {
    const [count, setCount] = useState(0);
    const [routeData, setRouteData] = useState(route_data.data);

    // const time = useTime();

    function handleClick() {
        setCount(count + 1);
    }


    useEffect(() => {
        loadRoutesLocal().then(d => {
            setRouteData(d)
        })
    }, []);


    return (

        <div>
            <h1>Welcome to my MBTA Transit app</h1>

            <p>Select the type of transit Route to see the list of Routes. Click on a station to see the stops for the
                route</p>
            <RoutesTable data={routeData}/>
            <div id={"stops-div"}></div>
        </div>
    );
}

function Clock({color, time}) {
    return (
        <h1 style={{color: color}}>
            {time}
        </h1>
    );
}


//  define a component for Vehicle Row
// Define a component fof the list of vehicles