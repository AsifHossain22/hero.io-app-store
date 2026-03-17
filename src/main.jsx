import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layouts from "./Layouts/Layouts.jsx";
import Home from "./Home.jsx";
import Apps from "./pages/Apps/Apps.jsx";
import Loader from "./components/Loader/Loader.jsx";

// ReactRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <span>Error 404 Custom Page</span>,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json"),
        element: <Home />,
      },
      {
        path: "apps",
        loader: () => fetch("/appsData.json"),
        element: <Apps />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
