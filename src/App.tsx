import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RoutesTable} from "./RoutesTable.tsx";

function App() {

    // const [routeData, setRouteData] = useState([]);

    // const time = useTime();




    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Welcome to my MBTA Transit app</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

            <div>
                <p>Select the type of transit Route to see the list of Routes. Click on a station to see the stops for
                    the
                    route</p>
                <RoutesTable/>
                <div id={"stops-div"}></div>
            </div>
        </>
    )
}

export default App
