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
    // const time = useTime();

    function handleClick() {
        setCount(count + 1);
    }


    return (

        <div>
            <h1>Welcome to my app</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
            {/*<Clock color={"red"} time={time.toLocaleTimeString()}/>*/}

            <RoutesTable data={route_data.data}/>
            <div id={"stops-div"}>Details here</div>

            <LinesTable
                data={line_data.data}/>
            <div id={"details-div"}>Details here</div>

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