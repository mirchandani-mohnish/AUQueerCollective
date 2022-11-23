import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";

import NewBlog from "./components/NewBlog";
import Blogs from "./components/Blogs";
import Conversations from "./components/Conversations";
import Profile from "./components/Profile";
// import Final from './Final';

import { Provider } from "react-redux";
import store from "./store";

import { GoogleOAuthProvider } from "@react-oauth/google";

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
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

root.render(
  <GoogleOAuthProvider clientId="241223455919-l41jqso8imls9as7vik5sl12q9l800hj.apps.googleusercontent.com">
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
