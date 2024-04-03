//TODO:
// why can't I pass the object with attributes down?
// change the onclick handler to display a new component with the list of stops
// refactor the handler to a higher  scope
import {useState} from "react";
import ReactDOM from "react-dom";

function Line({rec, onSelect}) {
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

// Another option: Juyst have this at the  details div, and vary what's there  based on the click
function StopsTable({line, onDone}) {
    return (
        <div>
            <p>whoopos! {line}</p>
            <button onClick={onDone}>Close</button>
        </div>
    )
}

export function LinesTable({data}) {
    const [selectedLine, setSelectedLine] = useState('');


    console.log(data)
    const rows = [];
    data.forEach((line) => {
        console.log(line)

        function handleSelect() {
            console.log('sel ' + line.id)
            setSelectedLine(line.id)
        }

        rows.push(<Line
            rec={{
                key: line.id, id: line.id, name: line.attributes.long_name,
                color: line.attributes.color
            }}
            onSelect={handleSelect}/>)

    })

// populate based on the ROUTE not the line using
    // curl -X GET "https://api-v3.mbta.com/stops?filter%5Broute%5D=Red" -H "accept: application/vnd.api+json"
    return (
        <>
            <ul className={'main-container'}>
                {rows}
            </ul>
            <div>{'selected: ' + selectedLine}</div>
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