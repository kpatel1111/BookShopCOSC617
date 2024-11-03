import React from 'react';
import "../App.css";
import user from "./Images/image.png";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { red } from '@mui/material/colors';
import { FaEye, FaHeadset, FaHeart,FaLock,FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Reviews = () => {
  const swiperOptions = {
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  };

  return (
    <div className='reviews-page'>
      <Navbar />

      <h1 style={{fontSize:"25px", marginLeft:"675px", marginTop:"20px"}}>Client Reviews</h1>
      <section className="reviews" id="reviews">
        <div className="swiper">
          <Swiper
            watchSlidesProgress={true}
            modules={[Autoplay]}
            className="reviews-slider"
            {...swiperOptions}
          >
            <SwiperSlide>
              <div className="swiper-slide box">
                <img src={user} alt="" />
                <h3>John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?</p>
                <div className="stars">
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStarHalf /></i>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide box">
                <img src={user} alt="" />
                <h3>Jane Smith</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?</p>
                <div className="stars">
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStarHalf /></i>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more reviews as needed */}
          </Swiper>
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
                    <a href="\#"><i><FaEnvelope /></i>cosc671@yahoo.com</a>
                    <img src="image/worldmap.png" alt="" className='map' />
                </div>
            </div>
            <div className="credit">Created for COSC 617. All rights are reserved.</div>
        </section>
    </div>
  );
};

export default Reviews;