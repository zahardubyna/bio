import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
    {
        path: '/bio',
        element: <App />,
    },
]);
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
