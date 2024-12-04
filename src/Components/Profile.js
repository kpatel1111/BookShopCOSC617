
import { useEffect, useLayoutEffect, useState } from "react";
import "../App.css";
import "../Profile.css";
import image from "./Images/image.png";
import Navbar from "./Navbar.js";
import BookShopLinks from "./BookShopLinks.js";
import { BrowserRouter, Route, Routes, Router, Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from "react-router-dom";
import { FaEye, FaHeadset, FaHeart, FaLock, FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

function Profile({ userEmailAddress }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = data._id;
        axios.post("https://bookshopcosc617.onrender.com/updateProfile", { id, name, phone, password })
            .then(result => {alert("Profile Information is updated successfully.");})
            .catch(error => console.log(error))

    };

    useEffect(() => {
        axios.post("https://bookshopcosc617.onrender.com/getUser", { email: userEmailAddress })
            .then(user => { setData(user.data); })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="Full_Page" id="userfullpage">
            <Navbar />
            <img id="userimage" src={image} alt="user image" />
            <div class="form_Box" id="userformbox">
                <center>
                    <h1 id="userh1" style={{ color: "blue" }}>Profile Card</h1>
                    <form id="userform">
                        <div className="name" id="username">
                            <label id="username" for="name" style={{ fontSize: "12px" }}>Name</label>
                            <input
                                id="usernameinput"
                                type="name"
                                name="name"
                                placeholder={data.name}
                                disabled={true}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="phoneNumber" id="userphonenumber">
                            <label for="phone" id="userphone" style={{ fontSize: "12px" }}>Phone Number</label>
                            <input
                                id="userphoneinput"
                                type="tel"
                                placeholder={data.phoneNumber}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="email" id="useremail">
                            <label for="email" id="useremail" style={{ fontSize: "12px" }}>Email Address</label>
                            <input
                                id="useremailinput"
                                type="email"
                                name="email"
                                placeholder={data.email}
                                disabled={true}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="password" id="userpassword">
                            <label for="password" id="userpassword" style={{ fontSize: "12px" }}>Password</label>
                            <input
                                id="userpasswordinput"
                                type="password"
                                name="password"
                                placeholder="Enter new password."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <p><button type="submit" id="userbutton" onClick={handleSubmit} style={{ color: "white" }}>Update</button></p>
                    </form>
                </center>
            </div>
            <BookShopLinks />
        </div>
    );
};

export default Profile;