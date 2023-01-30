/*
  This is where my routing is defined
*/
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
import Login from "./pages/login";
import EditPost from "./pages/postedit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContext from "./context";

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
      {
        path: "/my-posts/edit/:postid",
        element: <EditPost />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

/*
  AuthContext wraps my whole reactapp
  so that I do not have to prop drill
  user auth info into every single component:
  this way all components can receive this
  information and update themselves upon changes
  in the information
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);
