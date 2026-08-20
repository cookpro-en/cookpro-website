import { createBrowserRouter } from "react-router";
import MainLayout from "./layout/MainLayout";
import NewArrivals from "./components/NewArrivals";
import Products from "./components/Products.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path:"products",
                element: <Products/>,
            },
            {
                path: "new",
                element: <NewArrivals />,
            },
        ],
    },
]);

export default router;
