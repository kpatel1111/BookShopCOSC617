import React from 'react';
import "../App.css";
import user from "./Images/image.png";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { red } from '@mui/material/colors';
import { FaEye, FaHeadset, FaHeart, FaLock, FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

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

      <h1 style={{ fontSize:"25px", marginTop:"20px", textAlign:"center" }}>Client Reviews</h1>
      <section className="reviews" id="reviews" style={{marginTop:"-70px"}}>
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
                <h3>1. John Doe</h3>
                <h3>To Kill A MockingBird</h3>
                <p>
                  The story start calm as a wind then it start to increase its pace steadily at the end the storm came and changes every thing and stops at when we want to feel it more.
                  It's a story maily around with Scout younger than 4 years of Jem both are sibling with only parent Atticus finch a lawyer and a man with really deep thinking ability and a constant reader.
                  The story is from Scout's perspective when she was only 6 she start her new journey in school with Jem</p>
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
                <h3>2. Jane Smith</h3>
                <h3>Lord of the Flies</h3>
                <p>
                  Lord of the flies the book is about a group of kids who get stuck on an island and slowly become rivals of each other. So basically i'm reading this book for my English class and to be honest it's really bad. When i first started reading this book i couldn't understand anything and also the character who was named Piggy is called "Fat kid" and is really focuses on that perspective in the book. As of all the kids keep on calling the term piggy which is a understatement as of when the time period this book was written in.</p>
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
                <h3>3. Kevin Peterson</h3>
                <h3>Rich Dad Poor Dad</h3>
                <p>The literary work "Rich Dad Poor Dad," penned by Robert Kiyosaki, is a timeless guide to financial literacy that imparts significant knowledge on capital accumulation and achieving economic autonomy. This written masterpiece has retained its status as an all-time favorite for over twenty years now and continues to be instrumental in empowering countless individuals worldwide towards managing their monetary affairs effectively.</p>
                <div className="stars">
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStar /></i>
                  <i><FaStarHalf /></i>
                </div>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="swiper-slide box">
                <img src={user} alt="" />
                <h3>4. Jack Robert</h3>
                <h3>The Hunger Games</h3>
                <p>I got in to ‘The Hunger Games’ when I was reading the first book at school. Since then, I’ve watched every film at least 5 times and read all of the books! This trilogy of books and films have really got me in to science fiction. I couldn’t live it enough! To all of you thinking of reading or watching ‘The Hunger Games’, you have to go along because it’s my absolute favourite trilogy of all time! Out of all the films, I like ‘Mockingjay Part 1’ the best because Katniss’ speech in District 8 blew my mind away! I fell in love! However, I like the original book best because it makes the most sense and really drew me in at the end of the Games. If I could rate this 11/10, I defiantly would! A must see, must read, classic science fiction story.</p>
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

      <section className="footer" style={{ background: "whitesmoke" }}>
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

export default Reviews;