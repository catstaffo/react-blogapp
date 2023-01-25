import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import ErrorPage from "./pages/error";
import Feed from "./pages/feed";
import Home from "./pages/home";
import Post from "./pages/post";
import Profile from "./pages/profile";
import CreatePost from "./pages/createpost";
import User from "./pages/user";
import Blog from "./pages/blog";
import MyPosts from "./pages/my-posts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";

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
        path: "/welcome",
        element: <Login />,
      },
      {
        path: "/post/:postid",
        element: <Post />,
      },
      {
        path: "/user/:userid",
        element: <User />,
      },
      {
        path: "/blog/:blogid",
        element: <Blog />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/my-posts",
        element: <MyPosts />,
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
