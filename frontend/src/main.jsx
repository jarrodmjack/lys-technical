import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as latestComicLoader } from "./pages/Home";
import ComicByIdPage, { loader as comicLoader } from "./pages/ComicByIdPage";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: latestComicLoader,
            },
            {
                path: "/comic/:id",
                element: <ComicByIdPage />,
                loader: comicLoader,
            },
        ],
        errorElement: <ErrorPage />
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
