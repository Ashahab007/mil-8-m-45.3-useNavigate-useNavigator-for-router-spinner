import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Posts from "./components/Posts/Posts.jsx";
import Home from "./components/Home/Home.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "post",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "posts/:userId",
        loader: ({ params }) => {
          console.log(params);

          return fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.userId}`
          );
        },
        Component: PostDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
