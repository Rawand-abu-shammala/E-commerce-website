import React from 'react'
// add icon 
import { MdLocalShipping } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'
import { CiUser } from 'react-icons/ci'
// Configure the Auth0Provider component
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom'
import './Navbar.css'

const Nav = ({search, setSearch, searchProduct}) => {
  // Add Login, logout to Your Application, Show User Profile Information
  const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  
  return (
    <>
    <div className="header">
      <div className="top_header">
        <div className="icon">
          <MdLocalShipping/>
        </div>
        <div className="info">
          <p>Free Shipping when Shooping upto $1000</p>
        </div>
      </div>
      <div className="mid_header">
        <div className="logo">
          <img src="/assets/logo.webp" alt="" />
        </div>
        <div className="search-box">
          <input type="text" value={search} placeholder='search' 
          onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchProduct}><AiOutlineSearch/></button>
        </div>
        {/* Show User Profile Information */}
        {
        isAuthenticated ?
        // if user is Login then logout button will show and also user profile
        <div className="user">
        <div className="icon">
          <FiLogIn />
        </div>
        <div className="btn">
          <button onClick={() => loginWithRedirect()}>Login</button>
        </div>
      </div>
         :
        // if user is not Login then logout button will show
         <div className="user">
          <div className="icon">
            <FiLogOut />
          </div>
          <div className="btn">
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
          </div>
        </div>
        }
      </div>
      <div className="last-header">
        <div className="user-profile">
          {
            // User Profile Will Shown Here
            isAuthenticated ? 
            <>
            <div className="icon">
              <CiUser />
            </div>
            <div className="info">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
            </>
            :
            <>
            <div className="icon">
              <CiUser />
            </div>
            <div className="info">
              <p>plase Login</p>
            </div>
            </>
          }
        </div>
        <div className="nav">
          <ul>
            <li><Link to='/' className='link'>home</Link></li>
            <li><Link to='/shop' className='link'>shop</Link></li>
            <li><Link to='/cart' className='link'>cart</Link></li>
            <li><Link to='/about' className='link'>about</Link></li>
            <li><Link to='/contact' className='link'>contact</Link></li>
          </ul>
        </div>
        <div className="offer">
          <p>flat 10% over all iphone</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Nav 