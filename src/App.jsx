import React from 'react'
import './index.css'
import TopHeader from './components/topHeader'
import './App.css'
import Header from './components/header'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import LandingPage from './pages/landingPage'
import Footer from './components/footer'
import ProductsPage from './pages/productsPage'
import OrderConfirmedPage from './pages/orderConfirmedPage'
import ProductDetailsPage from './pages/productDetailsPage'
import BasketPage from './pages/basketPage'
import InformationPage from './pages/informationPage'
import ShippingPage from './pages/shippingPage'
import PaymentPage from './pages/paymentPage'
import ProfilePage from './pages/profilePage'

const Layout = () => {
  return (
    <div>
    <TopHeader/>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (<LandingPage />)
      },
      {
        path: '/products',
        element: (<ProductsPage />)
      },
      {
        path: '/details',
        element: (<ProductDetailsPage />)
      },
      {
        path: '/basket',
        element: (<BasketPage />)
      },
      {
        path: '/successful',
        element: (<OrderConfirmedPage />)
      },
      {
        path: '/shipping',
        element: (<ShippingPage/>)
      },
      {
        path: '/paymentpage',
        element: (<PaymentPage/>)
      },
      {
        path: '/profilepage',
        element: (<ProfilePage/>)
      },
      {
        path: '/info',
        element: (<InformationPage/>)
      }
      
    ]
  }
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
     
    </div>
  )
}

export default App
