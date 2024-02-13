import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./App.routes";
import { VehicleProvider } from "../../Context/Vehicle";

function App() {
    return (
        <main className="App">
            <BrowserRouter>
                <VehicleProvider>
                    <AppRoutes />
                </VehicleProvider>
            </BrowserRouter>
        </main>
    );
}

export default App;
