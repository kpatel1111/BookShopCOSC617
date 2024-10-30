import React from 'react';
import Navbar from "./Navbar";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

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

      <section className="reviews" id='reviews'>
        <h1 className='heading'><span>Client's Reviews</span></h1>

        <div className="swiper">
          <Swiper
            watchSlidesProgress={true}
            modules={[Autoplay]}
            className="reviews-slider"
            {...swiperOptions}
          >
            <SwiperSlide>
              <div className="swiper-slide box">
                <img src="image/pic-1.png" alt="" />
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
                <img src="image/pic-2.png" alt="" />
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
            <SwiperSlide>
              <div className="swiper-slide box">
                <img src="image/pic-3.png" alt="" />
                <h3>Mike Johnson</h3>
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
        <div className="credit">Created by <span>CodeSlaves Design</span> | All rights reserved!</div>
      </footer>
    </div>
  );
};

export default Reviews;