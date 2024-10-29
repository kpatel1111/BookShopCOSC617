import React from 'react'
import Navbar from "./Navbar";
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
                    <h3>upto 55% offers</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente eos quisquam voluptatibus, cum quod.</p>
                    <a href="\#" className="btn">shop now</a>
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

        <section class="icons-container">
          <div class="icons">
              <i>< FaPlane /></i>
              <div class="content">
                  <h3>over payment</h3>
                  <p>over payment $100</p>
              </div>
          </div>

          <div class="icons">
              <i>< FaLock /></i>
              <div class="content">
                  <h3>over payment</h3>
                  <p>over payment $100</p>
              </div>
          </div>

          <div class="icons">
              <i>< FaHeadset /></i>
              <div class="content">
                  <h3>over payment</h3>
                  <p>over payment $100</p>
              </div>
          </div>
        </section>

        <section class="featured" id="featured">
          <div class="heading"><span>featured books</span></div>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
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
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="/#" class="btn">add to cart</a>
                </div>
            </div>
            </SwiperSlide>
            </Swiper >
          </div>
        </section>

        <section className="newsletter">
            <form action="">
                <h3>subscribe for latest update</h3>
                <input type="email" placeholder='enter your email' className='box' />
                <input type="submit" value="subscribe" className='btn' />
            </form>
        </section>

        <section className="arrivals" id='arrivals'>
            <div className="heading"><span>new arrivals</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                            <div className="price">$15.99 <span>$20.99</span></div>
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
                <h3>deal of the day</h3>
                <h1>upto 50% offers</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iure accusantium nisi minus ipsum porro.
                </p>
                <a href="\#" className='btn'>shop now</a>
            </div>
            <div className="image">
                <img src="image/deal-img.jpg" alt="" />
            </div>
        </section>

        <section className="reviews" id='reviews'>
            <h1 className='heading'><span>client's reviews</span></h1>

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
                        <img src="image/pic-1.png" alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
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
                        <img src="image/pic-2.png" alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
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
                        <img src="image/pic-3.png" alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
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
                        <img src="image/pic-4.png" alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
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
                        <img src="image/pic-5.png" alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
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
                        <img src="image/pic-6.png" alt="" />
                        <h3>john deo</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam delectus doloribus?
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
            <h1 className='heading'><span>our blogs</span></h1>

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
                <SwiperSlide>
                    <div className="swiper-slide box">
                        <div className="image">
                            <img src="image/blog-5.jpg" alt="" />
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

        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>our locations</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>india</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>USA</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>russia</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>france</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>japan</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>africa</a>
                </div>
                <div className="box">
                    <h3>quick links</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>home</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>featured</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>arrivals</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>blogs</a>
                </div>
                <div className="box">
                    <h3>extra links</h3>
                    <a href="\#"><i><FaMapMarkedAlt /></i>account info</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>ordered items</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>privacy policy</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>payment method</a>
                    <a href="\#"><i><FaMapMarkedAlt /></i>our services</a>
                </div>
                <div className="box">
                    <h3>contact info</h3>
                    <a href="\#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="\#"><i><FaPhoneAlt /></i>+123-356-546</a>
                    <a href="\#"><i><FaEnvelope /></i>john@gmail.com</a>
                    <img src="image/worldmap.png" alt="" className='map' />
                </div>
            </div>
            <div className="share">
                <a href="\#"><i><FaFacebookF /></i></a>
                <a href="\#"><i><FaTwitter  /></i></a>
                <a href="\#"><i><FaInstagram  /></i></a>
                <a href="\#"><i><FaLinkedinIn  /></i></a>
                <a href="\#"><i><FaPinterestP  /></i></a>
            </div>
            <div className="credit">created by <span>CodeSlaves Design</span> | all rights reserved!</div>
        </section>

    </div>
  )
}

export default Home