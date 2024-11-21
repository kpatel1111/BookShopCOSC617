import React from 'react'
import Navbar from "./Navbar";
import user from "./Images/image.png";
import { FaEye, FaHeadset, FaHeart,FaLock,FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay} from 'swiper/modules';

const Home = () => {
  const swiperOptionsOne = {
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
    },
    loop:true,
  }; 

  const swiperOptionsTwo = {
    breakpoints: {
      0: {
        slidesPerView:1,
        spaceBetween:10,
      },
      450: {
        slidesPerView:2,
        spaceBetween:10,
      },
      768: {
        slidesPerView:3,
        spaceBetween:10,
      },
      1024: {
        slidesPerView:4,
      },
    },
    loop:true,
    centeredSlides:true,
    spaceBetween:10,
  }; 

  const swiperOptionsThree = {
    breakpoints: {
      0: {
        slidesPerView:1,
        spaceBetween:10,
      },
      450: {
        slidesPerView:2,
        spaceBetween:10,
      },
      768: {
        slidesPerView:3,
        spaceBetween:10,
      },
      1024: {
        slidesPerView:3,
      },
    },
    loop:true,
    centeredSlides:true,
    spaceBetween:10,
  }; 

  return (
    <div className='home-containber'>
        <Navbar />

        <section className="home" id="home">
            <div className="row">
                <div className="content">
                    <h3>Welcome to BookShop</h3>
                    <p>Explore all range of unique book collection.</p>
                    <a href="\#" className="btn">Explore Now</a>
                </div>    
                <div className='swiper'>
                    <Swiper
                        watchSlidesProgress={true} 
                        slidesPerView={3}        
                        autoplay={{
                            delay: 9500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="book-list"
                        {...swiperOptionsOne}
                    >
                    
                        <a href="\#" class="swiper-slide">
                            <SwiperSlide><img src="image/book-1.png" alt=""  /></SwiperSlide>
                        </a>
                        <a href="\#" class="swiper-slide">
                            <SwiperSlide><img src="image/book-2.png" alt=""  /></SwiperSlide>
                        </a>
                        <a href="\#" class="swiper-slide">
                            <SwiperSlide><img src="image/book-3.png" alt=""  /></SwiperSlide>
                        </a>
                        <a href="\#" class="swiper-slide">
                            <SwiperSlide><img src="image/book-4.png" alt=""  /></SwiperSlide>
                        </a>
                        <a href="\#" class="swiper-slide">
                            <SwiperSlide><img src="image/book-5.png" alt=""  /></SwiperSlide>
                        </a>
                        <a href="\#" class="swiper-slide">
                            <SwiperSlide><img src="image/book-6.png" alt=""  /></SwiperSlide>
                        </a>
                    </Swiper>
                    <img class="stand" src="images/stand.png" alt="" />
                </div>
            </div>
        </section>

        <section class="featured" id="featured">
          <div class="heading" style={{marginTop:"50px", marginBottom:"50px"}}><span>featured books</span></div>
          <div class="swiper ">
            <Swiper
                watchSlidesProgress={true} 
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="featured-slider"
                {...swiperOptionsTwo}
            >
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-1.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-2.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-3.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-4.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-5.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-6.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-7.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-8.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-9.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-10.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div class="box">
                <div class="icons">
                    <a href="/#">< FaSearch /></a>
                    <a href="/#">< FaHeart /></a>
                    <a href="/#">< FaEye /></a>
                </div>
                <div class="image">
                    <img src="image/book-5.png" alt="" />
                </div>
                <div class="content">
                    <h3>featured book</h3>
                </div>
            </div>
            </SwiperSlide>
            </Swiper >
          </div>
        </section>

        <section className="newsletter">
            <form action="">
                <h3>subscribe for latest update</h3>
                <input type="email" placeholder='Please enter your email address.' className='box' />
                <input type="submit" value="subscribe" className='btn' />
            </form>
        </section>

        <section className="arrivals" id='arrivals'>
            <div className="heading" style={{marginTop:"50px", marginBottom:"50px"}}><span>New Arrivals</span></div>
            <div className="swiper">
                <Swiper
                    watchSlidesProgress={true} 
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="arrivals-slider"
                    {...swiperOptionsThree}
                >

                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-1.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-2.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-3.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-4.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-5.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                </ Swiper>
            </div>

            <div className="swiper">
                <Swiper
                    watchSlidesProgress={true} 
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="arrivals-slider"
                    {...swiperOptionsThree}
                >

                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-1.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-2.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-3.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-4.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="\#" className='box'>
                        <div className="image">
                            <img src="image/book-5.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>new arrivals</h3>
                            <div className="stars">
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStar /></i>
                                <i><FaStarHalf /></i>
                            </div>
                        </div>
                    </a>
                </SwiperSlide>
                </ Swiper>
            </div>
        </section>

        <section className='deal'>
            <div className="content">
                <h1>Book Rental</h1>
                <p>
                    The BookShop gives our users the opportunity to enroll into book rental system.
                </p>
                <a href="\#" className='btn'>Book Rental</a>
            </div>
            <div className="image">
                <img src="image/deal-img.jpg" alt="" />
            </div>
        </section>

        <section className="reviews" id='reviews'>
            <h1 className='heading' style={{marginTop:"50px", marginBottom:"50px"}}><span>Client Reviews</span></h1>

            <div className="swiper">
            <Swiper
                watchSlidesProgress={true} 
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="reviews-slider"
                {...swiperOptionsThree}
            >
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>John Doe</h3>
                        <p>
                        The story start calm as a wind then it start to increase its pace steadily at the end the storm came and changes every thing and stops at when we want to feel it more.
                        It's a story maily around with Scout younger than 4 years of Jem both are sibling with only parent Atticus finch a lawyer and a man with really deep thinking ability and a constant reader.
                        The story is from Scout's perspective when she was only 6 she start her new journey in school with Jem.
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>Kevin Peterson</h3>
                        <p>
                        The literary work "Rich Dad Poor Dad," penned by Robert Kiyosaki, is a timeless guide to financial literacy that imparts significant knowledge on capital accumulation and achieving economic autonomy. This written masterpiece has retained its status as an all-time favorite for over twenty years now and continues to be instrumental in empowering countless individuals worldwide towards managing their monetary affairs effectively.
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>Jack Robert</h3>
                        <p>
                        I got in to ‘The Hunger Games’ when I was reading the first book at school. Since then, I’ve watched every film at least 5 times and read all of the books! This trilogy of books and films have really got me in to science fiction. I couldn’t live it enough! To all of you thinking of reading or watching ‘The Hunger Games’, you have to go along because it’s my absolute favourite trilogy of all time! Out of all the films, I like ‘Mockingjay Part 1’ the best because Katniss’ speech in District 8 blew my mind away! I fell in love! However, I like the original book best because it makes the most sense and really drew me in at the end of the Games. If I could rate this 11/10, I defiantly would! A must see, must read, classic science fiction story.
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <img src={user} alt="" />
                        <h3>Jane Smith</h3>
                        <p>
                        Lord of the flies the book is about a group of kids who get stuck on an island and slowly become rivals of each other. So basically i'm reading this book for my English class and to be honest it's really bad. When i first started reading this book i couldn't understand anything and also the character who was named Piggy is called "Fat kid" and is really focuses on that perspective in the book. As of all the kids keep on calling the term piggy which is a understatement as of when the time period this book is written in.
                        </p>
                        <div className="stars">
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStar/></i>
                            <i><FaStarHalf/></i>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </section>

        <section className="blogs" id="blogs">
            <h1 className='heading' style={{marginTop:"50px", marginBottom:"50px"}}><span>Our Community Feed</span></h1>

            <div className="swiper">
                <Swiper
                    watchSlidesProgress={true} 
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="blogs-slider"
                    {...swiperOptionsThree}
                >
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="image/blog-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="image/blog-2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="image/blog-3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="image/blog-4.jpg" alt="" />
                        </div>
                        <div className="content">
                            <h3>blog title goes here</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aliquid sed officia.
                            </p>
                            <a href="\#" className='btn'>read more</a>
                        </div>
                    </div>
                </SwiperSlide>
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
                    <a href="\#"><i><FaEnvelope /></i>cosc617@yahoo.com</a>
                    <img src="image/worldmap.png" alt="" className='map' />
                </div>
            </div>
            <div className="credit">Created for COSC 617. All rights are reserved.</div>
        </section>

    </div>
  )
}

export default Home