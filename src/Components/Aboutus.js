
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar.js";
import style from "../Aboutus.css";
import logo from "./Images/book.jpg";
import Image from "./Images/book.jpg";
import { BrowserRouter, Route, Link, Routes, useNavigate, Navigate, useLocation } from "react-router-dom";
import { FaEye, FaHeadset, FaHeart,FaLock,FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

function About() {
  const location = useLocation();
  const navigate = useNavigate();
  const [y, setY] = useState("");
  var k = "";

  useEffect(() => {
    setY(location.state);
    k = location.state;
  }, [location.state]);
                                            
  return (
    <div className={style.fullpage} style={{ backgroundColor: 'white' }}>
      <Navbar/>

      <h2 id="aboutush2">About Us</h2>
      <div class="row" id="aboutusrow">
        <div class="column" id="aboutuscolumn">
          <div class="cardx" id="aboutuscardx">
            <img id="aboutusimage" src={Image} alt="" style={{ width: '100%', height: "48%" }} />
            <div className="container1" id="aboutuscontainer1">
              <h2 id="aboutush2" style={{ color: "black", marginBottom: "20px" }}>Our Goal</h2>
              <p id="aboutusparagraph" style={{ lineHeight: "1.5" }}>Add goal information.</p>
            </div>
          </div>
        </div>

        <div class="column" id="aboutuscolumn">
          <div class="cardx" id="aboutuscardx">
            <img id="aboutusimage" src="https://cdn-icons-png.flaticon.com/512/2504/2504144.png" alt="" style={{ width: '100%', height: "48%" }} />
            <div className="container1" id="aboutuscontainer1">
              <h2 id="aboutush2" style={{ color: "black" }}>Explore Features</h2>
              <ul id="aboutusul">
                <li id="aboutusli" style={{ marginTop: "20px", marginBottom: "20px" }}>Search book collections.</li>
                <li id="aboutusli" style={{ marginTop: "20px", marginBottom: "20px" }}>Filter book collections based on author.</li>
                <li id="aboutusli" style={{ marginTop: "20px", marginBottom: "20px" }}>Apply for book rental to rent a book for specific time.</li>
                <li id="aboutusli" style={{ marginTop: "20px", marginBottom: "20px" }}>Add book to the reading list.</li>
                <li id="aboutusli" style={{ marginTop: "20px", marginBottom: "20px" }}>Create reading session reservation.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="column" id="aboutuscolumn">
          <div class="cardx" id="aboutuscardx">
            <img id="aboutusimage" src="https://img.freepik.com/premium-photo/contact-us-concept-wood-block-symbol-telephone-mail-address-desk_52701-83.jpg" alt="John" style={{ width: '100%', height: "48%" }} />
            <div className="container1" id="aboutuscontainer1">
              <h2 id="aboutush2" style={{ color: "black" }}>Contact Information</h2>
              <p id="aboutusparagraph" style={{ marginTop: "20px" }}><strong>Company Name:</strong> BookShop</p>
              <p id="aboutusparagraph" style={{ marginTop: "20px" }}><strong>Phone Number:</strong> +123-356-546</p>
              <p id="aboutusparagraph" style={{ marginTop: "20px" }}><strong>Email ID:</strong> cosc617@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>
      <section className="footer" style={{background:"whitesmoke"}}>
        <div className="box-container">
                <div className="box">
                    <h3>Website Links</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Home</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Search Books</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Rent Books</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Reading Session Reservation</a>
                </div>
                <div className="box">
                    <h3>User Links</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>User Profile Page</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Reading List</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Books Rental History</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Table Reservation History</a>
                </div>
                <div className="box">
                    <h3>Login and Logout</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Login</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>Logout</a>
                </div>
                <div className="box">
                    <h3>Contact Information</h3>
                    <a href="\#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="\#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="\#"><i><FaEnvelope /></i>cosc617@yahoo.com</a>
                    <img src="image/worldmap.png" alt="" className='map' />
                </div>
            </div>
            <div className="credit">Created for COSC 617. All rights are reserved.</div>
        </section>
    </div>
  );
};
export default About;