import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/HomePage/Home";
import Colleges from "./Pages/Colleges/Colleges";
import Admission from "./Pages/Admission/Admission";
import MyCollege from "./Pages/MyCollege/MyCollege";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login&Signup/Login";
import Signup from "./Pages/Login&Signup/Signup";
import CollegeDetails from "./Pages/CollegeDetails/CollegeDetails";

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
        path: "collegeDetails/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) =>
          fetch(
            `https://campushive-server.vercel.app/colleges/${params.id}`
          ),
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "myCollege",
        element: <MyCollege />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </React.StrictMode>
);
