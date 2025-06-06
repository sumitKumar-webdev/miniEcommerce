import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ProductListPage from './Pages/productListPage';
import ProductDetailsPage from './Pages/ProductDetailsPage'
import CartPage from './Pages/CartPage'
import { Outlet } from 'react-router-dom'

function App() {


  return (
  <div className='flex flex-col min-h-screen'>
    <Header />
    <main className='flex-grow'>
      <Outlet />
    </main>
    <Footer />
  </div> 
   
  )
}

export default App
