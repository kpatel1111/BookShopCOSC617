import React, { useRef } from 'react'

import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {   

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("login-form");
    }
      
  return (
    <div>
        <header className='header'>
            <div className='header_one'>
                <a href="\#" className="logo"><FaBook/>Group 4 & Nobles</a>
                <form action="" className="search-form">
                    <input type="search" id='search-box' placeholder='search here...' />
                    <label><FaSearch/></label>   
                </form>
                <div className="icons">
                    <div id="search-btn"><FaSearch/></div>
                    <a href="\#"><FaHeart/></a>
                    <a href="\#"><FaCartShopping/></a>
                    <div id="login-btn" className='user-btn' onClick={showNavbar}><FaUser/></div>
                </div>
            </div>

            <div className='header_two'>
                <div className='navbar'>
                    <a href="\#">Home</a>
                    <a href="\#">Featured</a>
                    <a href="\#">Arrivals</a>
                    <a href="\#">Reviews</a>
                    <a href="\#">Blogs</a>
                </div>
            </div>
        </header>

        <div className="bottom-navbar">
            <a href="\#home"><FaHome/></a>
            <a href="\#featured"><FaList/></a>
            <a href="\#arrivals"><FaTags/></a>
            <a href="\#blogs"><FaStore/></a>
        </div>

        <div className="login-form-container" ref={navRef}>
            <div id="close-login-btn" onClick={showNavbar}><FaTimes/></div>
            <form action="#">
                <h3>sign in</h3>
                <span>email</span>
                <input type="email" className="box" placeholder="enter your email" />
                <span>password</span>
                <input type="password" className="box" placeholder="enter your password" />

                <div className="check-box">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">remember me</label>
                </div>

                <input type="submit" value="sign in" className="btn" />
                <p>forgot password? <a href="\#">click here</a></p>
                <p>dont't have an account ? <a href="\#">create one please</a></p>
                <p></p>
            </form>
        </div>    
    </div>
  )
}

export default Navbar