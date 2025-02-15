import { createBrowserRouter } from 'react-router-dom';

import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
]);

export default router;
