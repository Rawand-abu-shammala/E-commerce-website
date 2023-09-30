import React from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';

const Cart = ({cart, setCart}) => {
    // Increase Quantity of cart product
    const incqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((element) => {
            return element.id === product.id ? {...exist, qty: exist.qty + 1}: element
        }))
    }
    // Decrease Quantity of cart product
    const decqty = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })

        setCart(cart.map((element) => {
            return element.id === product.id ? {...exist, qty: exist.qty - 1}: element
        }))
       
    }
    // Removing Quantity of cart product
    const removeproduct = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if(exist.qty > 0) {
            setCart(cart.filter((element) => {
                return element.id !== product.id
            }))
        }
    }
    // Total Price
    const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
    <div className="cart">
        <h3>#cart</h3>
        {
            cart.length === 0 &&
            <>
            <div className="empty-cart">
                <h2>Your Shopping cart is empty</h2>
                <Link to='/shop'><button>shop now</button></Link>
            </div>
            </>
        }
        <div className="container">
           {
             cart.map((element) =>
             {
                return(
                    <>
                    <div className="box">
                        <div className="img-box">
                            <img src={element.img} alt="" />
                        </div>
                        <div className="detail">
                            <div className="info">
                            <h4>{element.cat}</h4>
                            <h3>{element.name}</h3>
                            <p>price: ${element.price}</p>
                            <p>Total: ${element.price * element.qty}</p>
                            </div>
                            <div className="quantity">
                                <button onClick={() => incqty(element)}>+</button>
                                <input type="number" value={element.qty} />
                                <button onClick={() => decqty(element)}>-</button>
                            </div>
                            <div className="icon">
                                <li onClick={() => removeproduct(element)}><AiOutlineClose/></li>
                            </div>
                        </div>
                    </div>
                    </>

                )

             }
            
             )
           }
        </div>
        <div className="bottom">
            {
                cart.length > 0 &&
                <>
                <div className="total">
                    <h4>sub total: ${total}</h4>
                </div>
                <button>checkout</button>
                </>
            }
        </div>
    </div>
    </>
  )
}

export default Cart