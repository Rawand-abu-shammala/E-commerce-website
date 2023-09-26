import React from 'react'
import './Footer.css'
// icons
import {FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
// Creat Footer section
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="left-box">
                <div className="box">
                    <div className="icon-box">
                        <FaPiggyBank />
                    </div>
                    <div className="detail">
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon-box">
                        <FaShippingFast />
                    </div>
                    <div className="detail">
                        <h3>free delivery</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon-box">
                        <FaHeadphonesAlt />
                    </div>
                    <div className="detail">
                        <h3>24X7 support</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon-box">
                        <FaWallet />
                    </div>
                    <div className="detail">
                        <h3>money back</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="right-box">
                <div className="header">
                    <img src="/assets/logo.webp" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, quo cumque. Amet nulla ab illo error ad laudantium quam.</p>
                </div>
                <div className="bottom">
                    <div className="box">
                        <h3>your account</h3>
                        <ul>
                            <li>about us</li>
                            <li>account</li>
                            <li>payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>products</h3>
                        <ul>
                            <li>delivery</li>
                            <li>track order</li>
                            <li>new product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>contact us</h3>
                        <ul>
                            <li>8540400, palestine gaza</li>
                            <li>+(970)9998887</li>
                            <li className='exception'>rwndsami@gmail.com</li>
                        </ul>
                    </div>
            
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Footer