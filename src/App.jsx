import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,  
        },
       {
          path: "contact",
          element: <Contact/>, 
        },        {
          path: "services",
          element: <Services />, 
        },
        {
          path: "category/:slug",
          element: <Home />,
        },
        {
          path: "product/:id",
          element: <DynamicPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}