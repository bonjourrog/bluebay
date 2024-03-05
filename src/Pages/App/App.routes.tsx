import { useRoutes } from "react-router-dom";
import Home from "../Home";
import Results from "../Results";

export const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/results", element: <Results /> },
        { path: "/*", element: <p>Not found</p> },
    ]);
    return routes;
};
