import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import Gallery from "./components/Gallery";
// import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Roles from "./components/Roles";
import Event from "./components/Event";
import NewBlog from "./components/NewBlog";
import Blogs from "./components/Blogs";
import Conversations from "./components/Conversations";
// import Final from './Final';

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/spaces",
        element: <Conversations />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/newblog",
        element: <NewBlog />,
      },
    ],
  },
]);

root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
