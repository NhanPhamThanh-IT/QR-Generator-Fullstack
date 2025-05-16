import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@pages/Home";
import Tools from "@pages/Tools";
import Contact from "@pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "tools",
                element: <Tools />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

export default router;
