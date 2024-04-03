import './App.css';
import {line_data} from './mbta-data'
import ReactDOM from "react-dom";
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


//TODO:
// why can't I pass the object with attributes down?
// change the onclick handler to display a new component with the list of stops
// refactor the handler to a higher  scope
function RouteLine({rec, onSelect}) {
    // change this to follow the model here:  https://react.dev/reference/react-dom/createPortal
    // set state to reflect which line to show details for
    // display only when not empty.


    return (
        <li id={rec.id} key={rec.key} className={'wrapper'}>
            <div key={rec.key}>{rec.id}</div>

            <button onClick={onSelect}
                    style={{color: "#" + rec.color}}>{rec.name}</button>


        </li>
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

            <div id={"details-div"}>Details here</div>
            <LinesTable
                data={line_data.data}/>
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

// Another option: Juyst have this at the  details div, and vary what's there  based on the click
function StopsTable({line, onDone}) {
    return (
        <div>
            <p>whoopos! {line}</p>
            <button onClick={onDone}>Close</button>
        </div>
    )
}

function LinesTable({data}) {
    const [selectedLine, setSelectedLine] = useState('');


    console.log(data)
    const rows = [];
    data.forEach((line) => {
        console.log(line)
        function handleSelect(){
            console.log('sel ' + line.id)
            setSelectedLine(line.id)
        }

        rows.push(<RouteLine
            rec={{
                key: line.id, id: line.id, name: line.attributes.long_name,
                color: line.attributes.color
            }}
            onSelect={handleSelect}/>)

    })

    // TODO: Why isn't this re-rendering after a state change?
    return (
        <>
            <ul className={'main-container'}>
                {rows}
            </ul>
            <div>{'selected: '+ selectedLine}</div>
            {
                selectedLine == "line-Red" && ReactDOM.createPortal(
                    <div>
                        <StopsTable line={selectedLine} onDone={() => setSelectedLine("")}/>
                    </div>
                    , document.getElementById('details-div'))
            }
        </>
    )

}


//  define a component for Vehicle Row
// Define a component fof the list of vehicles