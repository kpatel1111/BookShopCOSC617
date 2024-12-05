
import React from 'react';
import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import user from "./Images/image.png";
import BookShopLinks from "./BookShopLinks.js";
import { FaEye, FaHeadset, FaHeart, FaLock, FaPlane, FaBook, FaUser, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useLocation } from 'react-router-dom';
import readingBook from "./Images/readingBook.png";
import { Autoplay } from 'swiper/modules';

function Home({ userEmailAddress }) {
    const [data, setData] = useState("");
    const [book, setBook] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        axios.post("https://bookshopcosc617.onrender.com/getBooks")
            .then(books => setBook(books.data))
            .catch(err => console.log(err))
    },[userEmailAddress]);

    useEffect(() => {
        axios.post("https://bookshopcosc617.onrender.com/getUser", { email: userEmailAddress })
            .then(user => { setData(user.data); })
            .catch(err => console.log(err))
    }, []);

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
        loop: true,
    };

    const swiperOptionsTwo = {
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
            },
        },
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
    };

    const swiperOptionsThree = {
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            450: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
    };

    return (
        <div className='home-container'>
            <Navbar />
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>Welcome to BookShop</h3>
                        <p>Explore all range of unique book collection.</p>
                        <Link to="/Components/Book" className="btn">Explore Now</Link>
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
                            {book.slice(0, 5).map((book,index) => (
                        <Link to="/Components/Book" class="swiper-slide">
                        <SwiperSlide><img src={book.picture} alt="" /></SwiperSlide>
                    </Link>
                    ))}

                        </Swiper>
                        <img class="stand" src="/Images/stand.png" alt="" />
                    </div>
                </div>
            </section>

            <section class="featured" id="featured">
                <div class="heading" style={{ marginTop: "50px", marginBottom: "50px" }}><span>featured books</span></div>
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
                        {book.slice(5,11).map(book => (
                            <SwiperSlide>
                            <div class="box">
                                <div class="icons">
                                    <Link to="/Components/Book">< FaSearch /></Link>
                                </div>
                                <div class="image">
                                    <img src={book.picture} alt="" />
                                </div>
                                <div class="content">
                                    <h3>featured book</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper >
                </div>
            </section>

            <section className="arrivals" id='arrivals'>
                <div className="heading" style={{ marginTop: "50px", marginBottom: "50px" }}><span>New Arrivals</span></div>
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

                        {book.slice(12,16).map(book => (
                            <SwiperSlide>
                            <Link to="/Components/Book" className='box'>
                                <div className="image">
                                    <img src={book.picture} alt="" />
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
                            </Link>
                        </SwiperSlide>
                        ))}
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
                         {book.slice(16,20).map(book => (
                            <SwiperSlide>
                            <Link to="/Components/Book" className='box'>
                                <div className="image">
                                    <img src={book.picture} alt="" />
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
                            </Link>
                        </SwiperSlide>
                        ))}
                    </ Swiper>
                </div>
            </section>

            <section className='deal'>
                <div className="content">
                    <h1>Book Rental</h1>
                    <p>
                        The BookShop gives our users the opportunity to enroll into book rental system.
                    </p>
                    <Link to="/Components/Book" className='btn'>Book Rental</Link>
                </div>
                <div className="image">
                    <img src="/Images/deal-img.jpg" alt="" />
                </div>
            </section>

            <section className='deal' style={{ marginTop: "100px" }}>
                <div className="content">
                    <h1>Reading Session Reservation</h1>
                    <p>
                        The BookShop gives our users the opportunity to book a table at our location for their in-person reading session reservation.
                    </p>
                    <Link to="/Components/Book" className='btn'>Reading Session</Link>
                </div>
                <div className="image">
                    <img src={readingBook} alt="" style={{ height: "70%", width: "70%", marginLeft: "200px" }} />
                </div>
            </section>

            <section className="reviews" id='reviews'>
                <h1 className='heading' style={{ marginTop: "50px", marginBottom: "50px" }}><span>Client Reviews</span></h1>

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
                                <h3>Kevin Peterson</h3>
                                <p>
                                    The literary work "Rich Dad Poor Dad," penned by Robert Kiyosaki, is a timeless guide to financial literacy that imparts significant knowledge on capital accumulation and achieving economic autonomy. This written masterpiece has retained its status as an all-time favorite for over twenty years now and continues to be instrumental in empowering countless individuals worldwide towards managing their monetary affairs effectively.
                                </p>
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
                                <h3>Jack Robert</h3>
                                <p>
                                    I got in to ‘The Hunger Games’ when I was reading the first book at school. Since then, I’ve watched every film at least 5 times and read all of the books! This trilogy of books and films have really got me in to science fiction. I couldn’t live it enough! To all of you thinking of reading or watching ‘The Hunger Games’, you have to go along because it’s my absolute favourite trilogy of all time! Out of all the films, I like ‘Mockingjay Part 1’ the best because Katniss’ speech in District 8 blew my mind away! I fell in love! However, I like the original book best because it makes the most sense and really drew me in at the end of the Games. If I could rate this 11/10, I defiantly would! A must see, must read, classic science fiction story.
                                </p>
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
                                <p>
                                    Lord of the flies the book is about a group of kids who get stuck on an island and slowly become rivals of each other. So basically i'm reading this book for my English class and to be honest it's really bad. When i first started reading this book i couldn't understand anything and also the character who was named Piggy is called "Fat kid" and is really focuses on that perspective in the book. As of all the kids keep on calling the term piggy which is a understatement as of when the time period this book is written in.
                                </p>
                                <div className="stars">
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStar /></i>
                                    <i><FaStarHalf /></i>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <BookShopLinks />
        </div>
    )
}

export default Home
