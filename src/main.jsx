import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layouts from "./Layouts/Layouts.jsx";

// ReactRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
