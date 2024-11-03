import React from 'react';
import "../App.css";
import user from "./Images/image.png";
import Navbar from "./Navbar";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { red } from '@mui/material/colors';

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

      <footer className="footer">
        <div className="credit">Created for COSC 617 | All rights are reserved</div>
      </footer>
    </div>
  );
};

export default Reviews;