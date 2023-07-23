import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/HomePage/Home";
import Colleges from "./Pages/Colleges/Colleges";
import Admission from "./Pages/Admission/Admission";
import MyCollege from "./Pages/MyCollege/MyCollege";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "colleges",
        element: <Colleges />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "myCollege",
        element: <MyCollege />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
