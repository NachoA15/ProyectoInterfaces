import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage from './IntroPage/IntroPage.jsx'
import SignUp from './Registration/SignUp.jsx';
import Login from './Registration/Login.jsx';
import '../assets/css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IntroPage />
  },
  {
    path: '/signUp',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
