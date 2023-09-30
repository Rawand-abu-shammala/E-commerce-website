import React from 'react'
import {Routes, Route} from 'react-router'
import Home from '../components/home/Home'
import Shop from '../components/shop/Shop'
import Cart from '../components/cart/Cart'
import Contact from '../components/contact/Contact'

const route = ({shop, Filter, allCateFilter, addToCart, cart, setCart}) => {
  return (
    <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/>}/>
        <Route path='shop' element={<Shop shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path='/contact' element={<Contact />}/>
    </Routes>
  )
}

export default route