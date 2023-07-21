import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/Register/Register'
import { Dashboard } from './components/DashBoard/Dashborad'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/register',
    element: <Register/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />
  </React.StrictMode>,
)
