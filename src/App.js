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
// does not work!
//     useEffect(() => {
//         setRouteData(route_data.data)
//     }, []);

    return (

        <div>
            <h1>Welcome to my MBTA Transit app</h1>

            <p>Select the type of transit Route to see the list of Routes. Click on a station to see the stops for the route</p>

            {/*<Clock color={"red"} time={time.toLocaleTimeString()}/>*/}

            <RoutesTable data={routeData}/>
            <div id={"stops-div"}></div>

            {/*<LinesTable*/}
            {/*    data={line_data.data}/>*/}
            {/*<div id={"details-div"}>Details here</div>*/}

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