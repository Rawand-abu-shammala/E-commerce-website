import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
import Rout from './routes/route';
import Footer from './components/footer/Footer';
import homeProduct from './mock/home_product'

function App() {
  // Shop Page Product
  const [shop, setShop] = useState(homeProduct);
  // Shop Search Filter
  const [search, setSearch] = useState("");
  // Add To Cart
  const [cart, setCart] = useState([]);

  // Shop contegory filter
  const Filter = (x) => {
    const cateFilter = homeProduct.filter((product) => {
      return product.cat === x
    })
    setShop(cateFilter)
  }
  const allCateFilter = () => {
    setShop(homeProduct)
  }
    // Shop Search Filter
    const searchlenghth = (search || []).length === 0;
    const searchProduct = () => {
    if(searchlenghth) {
      alert('Please Search Something !')
      setShop(homeProduct)
    }
    else {
      
        const searchFilter = homeProduct.filter((x) => {
          return x.cat === search
        })
        setShop(searchFilter)
      }
    }
    // Add To Cart
    const addToCart = (product) => {
      const exist = cart.find((x) => {
        return x.id === product.id
      })
      if(exist) {
        alert('This product is alleardy added in cart')
      }
      else {
      setCart([...cart, {...product, qty:1}])
      alert('Added To Cart');
      }
    }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} searchProduct={searchProduct} />
      <Rout shop={shop} Filter={Filter} allCateFilter={allCateFilter} addToCart={addToCart} cart={cart} setCart={setCart}/>
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
