/* eslint-disable no-undef */
import React, {useEffect, useState} from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
import homeProduct from '../../mock/home_product';

const Home = () => {
    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setFeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])
    const [trendingProduct, settrendingProduct] = useState(homeProduct);
    // Filter of tranding product
    const filtercate = (x) => {
        const filterProduct = homeProduct.filter((item) =>
        {
            return item.type === x
        })
        settrendingProduct(filterProduct);
    } 
    // All Trending Product
    const allTrendingProduct =() => {
        settrendingProduct(homeProduct);
    }
    // Product Type 
    useEffect(() => {
        productCategory()
    })
    const productCategory = () => {
        // New Product
        const newCategory = homeProduct.filter((x) => {
            return x.type === 'new'
        })
        setNewProduct(newCategory)
        // New Product
        const featuredCategory = homeProduct.filter((x) => {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredCategory)
        // New Product
        const topCategory = homeProduct.filter((x) => {
            return x.type === 'top'
        })
        setTopProduct(topCategory)
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
                            <h2 onClick={() => allTrendingProduct()}>trending product</h2>
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
                        <button>show more</button>
                    </div>
                </div>
                <div className="right-box">
                    <div className="right-container">
                        <div className="testimonial">
                            <div className="head">
                                <h3>our testimonial</h3>
                            </div>
                            <div className="detail">
                                <div className="img-box">
                                    <img src="/assets/T1.avif" alt="testimonial" />
                                </div>
                                <div className="info">
                                    <h3>rawand shammala</h3>
                                    <h4>web developer</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facilis!</p>                                    
                                </div>
                            </div>
                        </div>
                        <div className="newsletter">
                        <div className="head">
                                <h3>newsletter</h3>
                            </div>
                            <div className="form">
                                <p>join our malling list</p>
                                <input type="email" placeholder='E-mail' outoComplete='off' />
                                <button>subscribe</button>
                                <div className="icon-box">
                                    <div className="icon">
                                        <BiLogoFacebook />
                                    </div>
                                    <div className="icon">
                                        <BiLogoTwitter />
                                    </div>
                                    <div className="icon">
                                        <BiLogoInstagram />
                                    </div>
                                    <div className="icon">
                                        <BiLogoYoutube />
                                    </div>
                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banners">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <img src="/assets/Multi-Banner-1.avif" alt="banners" />
                    </div>
                    <div className="box">
                        <img src="/assets/Multi-Banner-2.avif" alt="banners" />
                    </div>
                </div>
                <div className="right-box">
                    <div className="top">
                        <img src="/assets/Multi-Banner-3.webp" alt="" />
                        <img src="/assets/Multi-banner-4.avif" alt="" />
                    </div>
                    <div className="bottom">
                        <img src="/assets/Multi-Banner-5.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="product-type">
            <div className="container">
                <div className="box">
                    <div className="header">
                        <h2>new product</h2>
                    </div>
                    {
                            newProduct.map((element) => {
                            return(
                                <>
                                <div className="product-box">
                                    <div className="img-box">
                                        <img src={element.img} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h3>{element.name}</h3>
                                        <p>{element.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }

                </div>
                <div className="box">
                    <div className="header">
                        <h2>featured product</h2>
                    </div>
                    {
                            featuredProduct.map((element) => {
                            return(
                                <>
                                <div className="product-box">
                                    <div className="img-box">
                                        <img src={element.img} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h3>{element.name}</h3>
                                        <p>{element.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }

                </div>
                <div className="box">
                    <div className="header">
                        <h2>top product</h2>
                    </div>
                    {
                            topProduct.map((element) => {
                            return(
                                <>
                                <div className=" product-box">
                                    <div className="img-box">
                                        <img src={element.img} alt="" />
                                    </div>
                                    <div className="detail">
                                        <h3>{element.name}</h3>
                                        <p>{element.price}</p>
                                        <div className="icon">
                                            <button><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button><AiOutlineShoppingCart /></button>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home