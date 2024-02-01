import { useRoutes } from "react-router-dom";
import Home from "../Home";

export const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/*", element: <p>Not found</p> },
    ]);
    return routes;
};
