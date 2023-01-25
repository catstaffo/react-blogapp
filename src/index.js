import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./pages/error";
import Feed from "./pages/feed";
import Home from "./pages/home";
import Post from "./post/[id]";
import Profile from "./pages/profile";
import CreatePost from "./pages/createpost";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogroll",
        element: <Feed />,
      },
      {
        path: "/create-post",
        element: <CreatePost />,
      },
      {
        path: "/post/:id",
        element: <Post />,
        //loader: newPostLoader,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
