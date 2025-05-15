import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux Store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import ProductListPage from './Pages/productListPage.jsx'
import CartPage from './Pages/CartPage.jsx'
import ProductDetailsPage from './Pages/ProductDetailsPage.jsx'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route exact path='/' element={<ProductListPage />} />
      <Route exact path='cart' element={<CartPage/>} />
      <Route exact path='product/:id' element={<ProductDetailsPage />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
)
