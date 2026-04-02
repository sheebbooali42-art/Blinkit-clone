 import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import Layout from './pages/Layout'

export default function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        
      ]
    }
  ])

  return <RouterProvider router={routers} />
}