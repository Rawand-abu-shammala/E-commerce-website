/* eslint-disable no-undef */
import React, {useState} from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { AiFillEye } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import homeProduct from '../../mock/home_product';

const Home = () => {
    const [trendingProduct, settrendingProduct] = useState(homeProduct);
    // Filter of tranding product
    const filtercate = (x) => {
        const filterProduct = homeProduct.filter((item) =>
        {
            return item.type === x
        })
        settrendingProduct(filterProduct)
    } 
  return (
    <>
    <div className="home">
        <div className="top-banner">
            <div className="contact">
                <h3>silver aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your first odder</p>
                <Link to='/shop' className='link'>Show Now</Link>
            </div>
        </div>
        <div className="trending">
            <div className="container">
                <div className="left-box">
                    <div className="header">
                        <div className="heading">
                            <h2>trending product</h2>
                        </div>
                        <div className="cate">
                            <h3 onClick={() => filtercate ('new')}>new</h3>
                            <h3 onClick={() => filtercate ('featured')}>featured</h3>
                            <h3 onClick={() => filtercate ('top')}>top selling</h3>
                        </div>
                    </div>
                    <div className="products">
                        <div className="container">
                            {
                                trendingProduct.map((element, index) => {
                                    return(
                                        <>
                                        <div className="box" key={index}>
                                            <div className="img-box">
                                                <img src={element.img} alt="products" />
                                                <div className="icon">
                                                    <div className="icon-box">
                                                        <AiFillEye />
                                                    </div>
                                                    <div className="icon-box">
                                                        <AiFillHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h3>{element.name}</h3>
                                                <p>{element.price}</p>
                                                <button className='btn'>add to cart</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>




                </div>
                <div className="right-box">

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home