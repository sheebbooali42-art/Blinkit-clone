 import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import Layout from './pages/Layout'
import DynamicPage from './pages/DynamicPage'

// 👇 Import pages
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Forzerofor from './pages/Forzerofor'

export default function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/:slug?",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/dynamic-page/:id",
          element: <DynamicPage />
        },

          {
          path: "*",
          element: <Forzerofor/>
        },
      ]
    }
  ])

  return <RouterProvider router={routers} />
}