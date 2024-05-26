import React from 'react'
import Navbar from './components/navbar/navbar.js'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home.js'
import Order from './pages/order_details/order.js'
import Cart from './pages/cart/cart.js'
import Footer from './components/footer/Footer.js'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
