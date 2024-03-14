import  './App.css';
import  {line_data} from './mbta-data'
import {useState, useEffect} from 'react';

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

function LinesTable({data}) {
    console.log(data)
    const rows = [];
    data.forEach((line) => {
            console.log(line)
            rows.push(<RouteLine rec ={{id:line.id, name:line.attributes.long_name, color:line.attributes.color}}/>)
        }
    )

    return (
        <div  className={'main-container'}>
            {rows}
        </div>
    )
}


//TODO: style with color
// why can't I pass the object with attributes down?
function RouteLine({ rec }) {

    console.log("Route Line")
    return (
<div className={'wrapper'}>
            <div>{rec.id}</div>
            <div style={{color: "#"+rec.color}}>{rec.name}</div>
</div>


    );
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
    const time = useTime();

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton count={count} onClick={handleClick}/>
            <MyButton count={count} onClick={handleClick}/>
            <Clock color={"red"} time={time.toLocaleTimeString()}/>
            <LinesTable data={line_data.data}/>
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