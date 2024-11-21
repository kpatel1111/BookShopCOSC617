import React, { useRef } from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
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
                <a href="\#" className="logo"><FaBook/>BookShop</a>
                <form action="" className="search-form">
                    <input type="search" id='search-box' placeholder='search here...' />
                    <label><FaSearch/></label>   
                </form>
                <div className="icons">
                    <div id="search-btn"><FaSearch/></div>
                    <Link to="/Components/ReadingList"><FaHeart/></Link>
                    <Link to="/Components/Profile"><FaUser/></Link>
                </div>
            </div>

            <div className='header_two'>
                <div className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to="/Components/Book">Books</Link>
                    <Link to="/Components/Reviews">Reviews</Link>
                    <Link to="/Components/Aboutus">AboutUs</Link>
                </div>
            </div>
        </header>

        <div className="bottom-navbar">
            <a href="\#home"><FaHome/></a>
            <a href="\#featured"><FaList/></a>
            <a href="\#arrivals"><FaTags/></a>
            <a href="\#blogs"><FaStore/></a>
        </div>
    </div>
  )
}

export default Navbar