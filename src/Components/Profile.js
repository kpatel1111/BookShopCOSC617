
import { useEffect, useState } from "react";
import "../App.css";
import "../Profile.css";
import image from "./Images/image.png";
import Navbar from "./Navbar.js";
import { BrowserRouter, Route, Routes, Router, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { FaEye, FaHeadset, FaHeart,FaLock,FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

function Profile() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [userEmail, setUserEmail] = useState("");
    const [data, setData] = useState("");
    const [y, setY] = useState("");
    var x = 0;
    var k = "";

    return (
        <div className="Full_Page">
            <Navbar />
            <img src={image} alt="user image"/>
            <div class="form_Box">
                <center>
                    <h1 style={{ color: "black" }}>Profile Card</h1>
                    <form>
                        <div className="name">
                            <label for="name" style={{fontSize:"12px"}}>Name</label>
                            <input
                                id="input1"
                                type="name"
                                name="name"
                                placeholder="Display name from database"
                                disabled={true}
                                /*value={}
                                onChange={}*/
                            />
                        </div>

                        <div className="phoneNumber">
                            <label for="phone" style={{fontSize:"12px"}}>Phone Number</label>
                            <input
                                id="input1"
                                type="tel"
                                placeholder="Display phone from database"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="phone"
                                /*value={}
                                onChange={}*/
                            />
                        </div>

                        <div className="email">
                            <label for="email" style={{fontSize:"12px"}}>Email Address</label>
                            <input
                                id="input1"
                                type="email"
                                name="email"
                                placeholder="Display email from database"
                                disabled={true}
                                /*value={}
                                onChange={}*/
                            />
                        </div>

                        <div className="password">
                            <label for="password" style={{fontSize:"12px"}}>Update Password</label>
                            <input
                                id="input1"
                                type="password"
                                name="password"
                                placeholder="Enter New Password"
                                /*value={}
                                onChange={}*/
                            />
                        </div>
                        <p><button type="submit" id="button" onClick={""} style={{color:"white"}}>Update</button></p>
                    </form>
                </center>
            </div>

            <section className="footer" style={{background:"whitesmoke"}}>
        <div className="box-container">
                <div className="box">
                    <h3>Website Links</h3>
                    <Link to="Components/Home"><i><FaMapMarkedAlt /></i>Home</Link>
                    <Link to="Components/Book"><i><FaMapMarkedAlt /></i>Search Books</Link>
                    <Link to="Components/BooksRental"><i><FaMapMarkedAlt /></i>Rent Books</Link>
                    <Link to="Components/TableReservation"><i><FaMapMarkedAlt /></i>Reading Session Reservation</Link>
                </div>
                <div className="box">
                    <h3>User Links</h3>
                    <Link to="Components/Profile"><i><FaMapMarkedAlt /></i>User Profile Page</Link>
                    <Link to="Components/ReadingList"><i><FaMapMarkedAlt /></i>Reading List</Link>
                    <Link to=""><i><FaMapMarkedAlt /></i>Books Rental History</Link>
                    <Link to=""><i><FaMapMarkedAlt /></i>Table Reservation History</Link>
                </div>
                <div className="box">
                    <h3>Login and Logout</h3>
                    <Link to="Components/Login"><i><FaMapMarkedAlt /></i>Login</Link>
                    <Link to="Components/Logout"><i><FaMapMarkedAlt /></i>Logout</Link>
                </div>
                <div className="box">
                    <h3>Contact Information</h3>
                    <Link to=""><i><FaPhoneAlt /></i>+123-356-546</Link>
                    <Link to=""><i><FaPhoneAlt /></i>+123-356-546</Link>
                    <Link to=""><i><FaEnvelope /></i>cosc671@yahoo.com</Link>
                    <img src="image/worldmap.png" alt="" className='map' />
                </div>
            </div>
            <div className="credit">Created for COSC 617. All rights are reserved.</div>
        </section>
        </div>
    );
};

export default Profile;