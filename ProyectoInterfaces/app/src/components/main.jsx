  import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IntroPage from './IntroPage/IntroPage.jsx'
import SignUp from './Registration/SignUp.jsx';
import Login from './Registration/Login.jsx';
import '../assets/css/index.css'
import Products from './ProductPage/productsPage.jsx';
import AddProduct from './ProductPage/addProduct.jsx';
import Profile from './Profile/Profile.jsx';

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
  },
  {
    path: '/products',
    element: <Products/>
  },
  {
    path: '/addProduct',
    element:<AddProduct/>
  },
  {
    path: '/profile',
    element: <Profile/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
