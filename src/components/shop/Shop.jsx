import React, { useState } from 'react'
import { AiFillHeart, AiFillEye, AiOutlineClose } from 'react-icons/ai';
import './Shop.css'

const Shop = ({shop, Filter, allCateFilter, addToCart}) => {
// Toggle product details
const [showDetail, setShowDetail] = useState(false)
// Detail page date
const [detail, setDetail] = useState([])
// Showing detail box
const detailPadg = (product) => {
  const detailData = ([{product}])
  const productDetail = detailData[0]['product']
  setDetail(productDetail)
  setShowDetail(true) 
}
console.log(detail)
const closeDetail = () => {
  setShowDetail(false) 
}
  return (
    <>
    {
      showDetail ?
      <>
      <div className="product-details">
      <button className='close-btn' onClick={closeDetail}><AiOutlineClose /></button>
      <div className="container">
        <div className="img-box">
          <img src={detail.img} alt="" />
        </div>
        <div className="info">
          <h4># {detail.cat}</h4>
          <h2>{detail.name}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem.</p>
          <h3>$ {detail.price}</h3>
          <button onClick={() => addToCart(detail)}>add to cart</button>
        </div>
      </div>
      </div>
      </>
      : null
    }
    <div className="shop">
      <h2># shop</h2>
      <p>Home . shop</p>
        <div className="container">
            <div className="left-box">
                <div className="category">
                  <div className="header">
                    <h3>all category</h3>
                  </div>
                  <div className="box">
                    <ul>
                      <li onClick={() => allCateFilter ()}># all</li>
                      <li onClick={() => Filter ("tv")}># tv</li>
                      <li onClick={() => Filter ("laptop")}># laptop</li>
                      <li onClick={() => Filter ("watch")}># watch</li>
                      <li onClick={() => Filter ("speaker")}># speaker</li>
                      <li onClick={() => Filter ("electronics")}># electronics</li>
                      <li onClick={() => Filter ("headphone")}># headphone</li>
                      <li onClick={() => Filter ("phone")}># phone</li>
                    </ul>
                  </div>
                </div>
                <div className="banner">
                  <div className="img-box">
                    <img src="/assets/shop_left.avif" alt="" />
                  </div>
                </div>
            </div>
            <div className="right-box">
              <div className="banner">
                <div className="img-box">
                  <img src="/assets/shop_top.webp" alt="" />
                </div>
              </div>
              <div className="product-box">
                <h2>Shop Product</h2>
                <div className="product-container">
                  {
                    shop.map((element) => {
                      return(
                        <>
                        <div className="box">
                          <div className="img-box">
                            <img src={element.img} alt="" />
                            <div className="icon">
                              <li><AiFillHeart /></li>
                              <li onClick={() => detailPadg (element)}><AiFillEye/></li>
                            </div>
                          </div>
                          <div className="details">
                            <h3>{element.name}</h3>
                            <p>$ {element.price}</p>
                            <button onClick={() => addToCart(element)}>add to cart</button>
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
    </div>
    </>
  )
}

export default Shop