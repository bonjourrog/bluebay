import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./App.routes";

function App() {
    return (
        <main className="App">
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </main>
    );
}

export default App;
