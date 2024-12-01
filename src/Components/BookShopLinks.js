
import React from 'react';
import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaHeadset, FaHeart, FaLock, FaPlane, FaBook, FaUser, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useLocation } from 'react-router-dom';
import Image from "./Images/worldmap.png";

function BookShopLinks(userEmailAddress) {
    return (
        <section className="footer" style={{ background: "whitesmoke" }}>
            <div className="box-container">
                <div className="box">
                    <h3>Website Links</h3>
                    <Link to="/Components/Home"><i><FaMapMarkedAlt /></i>Home</Link>
                    <Link to="/Components/Book"><i><FaMapMarkedAlt /></i>Search Books</Link>

                </div>
                <div className="box">
                    <h3>User Links</h3>
                    <Link to="/Components/Profile"><i><FaMapMarkedAlt /></i>User Profile</Link>
                    <Link to="/Components/ReadingList"><i><FaMapMarkedAlt /></i>Reading List</Link>
                    <Link to="/Components/RentalAndReservationHistory"><i><FaMapMarkedAlt /></i>Books Rental History</Link>
                    <Link to="/Components/RentalAndReservationHistory"><i><FaMapMarkedAlt /></i>Reading Session History</Link>
                </div>
                <div className="box">
                    <h3>Logout</h3>
                    <Link to="/Components/Logout"><i><FaMapMarkedAlt /></i>Logout</Link>
                </div>
                <div className="box">
                    <h3>Contact Information</h3>
                    <Link to=""><i><FaPhoneAlt /></i>+123-356-546</Link>
                    <Link to=""><i><FaEnvelope /></i>cosc617@yahoo.com</Link>
                    <img src={Image} alt="" className='map' />
                </div>
            </div>
            <div className="credit">Created for COSC 617. All rights are reserved.</div>
        </section>
    );
}
export default BookShopLinks;