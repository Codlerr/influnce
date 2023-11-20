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
