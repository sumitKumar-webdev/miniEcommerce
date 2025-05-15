import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import ProductListPage from './Pages/productListPage';
import ProductDetailsPage from './Pages/ProductDetailsPage'
import CartPage from './Pages/CartPage'

function App() {


  return (
   <>
   <Header />
   {/* <ProductListPage/> */}
   {/* <ProductDetailsPage /> */}
   <CartPage />
   <Footer />
   </>
  )
}

export default App
