import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/Register/Register'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/register',
    element: <Register/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
