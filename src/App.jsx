import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import DynamicPage from "./pages/DynamicPage";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Forzerofor from "./pages/Forzerofor";
import Cart from "./pages/Cart";

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
          path: "cart",
          element: <Cart/>,
        },
        {
          path: "*",
          element: <Forzerofor/>,
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