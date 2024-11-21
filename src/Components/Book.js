
import style from "../Book.css";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { State } from "navigation";
import Navbar from "./Navbar.js";
import { FaEye, FaHeadset, FaHeart,FaLock,FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

function Book() {
    return (
        <div className="fullpage" id="bookfullpage" style={{ backgroundColor: 'white' }}>
           <Navbar />
            <section className="mainhome" id="bookmainhome">
                <div className="maintext" id="bookmaintext">
                    <h1 id="bookh1" style={{ fontWeight: '200px' }}>Book Collection</h1>

                    <Link to="" className="mainbtn" id="bookmainbtn">Find Books<i class='#'></i></Link>
                </div>
            </section>

            <section className="trendingproduct" id="booktrending" style={{ backgroundcolor: 'white' }}>

                <div className="products" id="bookproducts">

                        <div class="row1" id="bookrow1">
                            <img id="bookimage" src="" alt="" />
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">Name</p>
                                <p id="bookparagraph">Author</p>
                                <p id="bookparagraph">Edition</p>
                                <button id="bookreadinglist" style={{ backgroundColor: "#2eeea2" }} type="submit">Add Book to Reading List</button>
                                <button id="bookselect" style={{ backgroundColor: "#2eeea2" }} type="submit">Select Book</button>
                            </div>
                        </div>

                        <div class="row1" id="bookrow1">
                            <img id="bookimage" src="" alt="" />
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">Name</p>
                                <p id="bookparagraph">Author</p>
                                <p id="bookparagraph">Edition</p>
                                <button id="bookreadinglist" style={{ backgroundColor: "#2eeea2" }} type="submit">Add Book to Reading List</button>
                                <button id="bookselect" style={{ backgroundColor: "#2eeea2" }} type="submit">Select Book</button>
                            </div>
                        </div>

                        <div class="row1" id="bookrow1">
                            <img id="bookimage" src="" alt="" />
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">Name</p>
                                <p id="bookparagraph">Author</p>
                                <p id="bookparagraph">Edition</p>
                                <button id="bookreadinglist" style={{ backgroundColor: "#2eeea2" }} type="submit">Add Book to Reading List</button>
                                <button id="bookselect" style={{ backgroundColor: "#2eeea2" }} type="submit">Select Book</button>
                            </div>
                        </div>

                        <div class="row1" id="bookrow1">
                            <img id="bookimage" src="" alt="" />
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">Name</p>
                                <p id="bookparagraph">Author</p>
                                <p id="bookparagraph">Edition</p>
                                <button id="bookreadinglist" style={{ backgroundColor: "#2eeea2" }} type="submit">Add Book to Reading List</button>
                                <button id="bookselect" style={{ backgroundColor: "#2eeea2" }} type="submit">Select Book</button>
                            </div>
                        </div>

                        <div class="row1" id="bookrow1">
                            <img id="bookimage" src="" alt="" />
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">Name</p>
                                <p id="bookparagraph">Author</p>
                                <p id="bookparagraph">Edition</p>
                                <button id="bookreadinglist" style={{ backgroundColor: "#2eeea2" }} type="submit">Add Book to Reading List</button>
                                <button id="bookselect" style={{ backgroundColor: "#2eeea2" }} type="submit">Select Book</button>
                            </div>
                        </div>
                </div>

            </section>

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

export default Book;
