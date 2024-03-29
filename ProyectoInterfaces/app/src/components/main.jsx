import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactSession } from "react-client-session";
import IntroPage from './IntroPage/IntroPage.jsx'
import SignUp from './Registration/SignUp.jsx';
import Login from './Registration/Login.jsx';
import Products from './ProductPage/productsPage.jsx';
import AddProduct from './ProductPage/addProduct.jsx';
import Profile from './Profile/Profile.jsx';
import EditProfile from './Profile/EditProfile.jsx';
import ErrorPage from './ErrorPage.jsx';
import Chat from './Chat/chat.jsx';
import '../assets/css/index.css';
import Favourites from './Favourites/Favourites.jsx';
import MyProducts from './MyProducts/MyProducts.jsx';
import ChatList from './Chat/chatlist.jsx';
import Product from './ProductPage/Product.jsx';

ReactSession.setStoreType("localStorage");

const router = createBrowserRouter([
  {
    path: '/',
    element: <IntroPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signUp',
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <Login/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/products',
    element: <Products/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/addProduct',
    element:<AddProduct/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile/:username',
    element: <Profile/>
  },
  {
    element: <Profile/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile/:username/edit',
    element: <EditProfile />,
    errorElement: <ErrorPage />
  }, 
  {
    path: '/chat/:idC/:id',
    element:<Chat/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/favourites/:username',
    element: <Favourites />,
    errorElement: <ErrorPage />
  },
  {
    path: '/chatlist',
    element: <ChatList/>,
    errorElement: <ErrorPage/>
  }, 
  {
    path: '/myProducts',
    element: <MyProducts />,
    errorElement: <ErrorPage/>
  },
  {
    path: '/product/:idAnuncio',
    element: <Product />,
    //errorElement: <ErrorPage/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


