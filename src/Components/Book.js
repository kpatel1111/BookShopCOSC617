import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { State } from "navigation";
import Navbar from "./Navbar.js";
import { FaEye, FaHeadset, FaHeart, FaLock, FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import BookShopLinks from "./BookShopLinks.js";

function Book({ userEmailAddress, setBookNumber }) {
    const navigate = useNavigate();
    const [book, setBook] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios.post("http://localhost:3001/getBooks")
            .then(books => setBook(books.data))
            .catch(err => console.log(err))
    },[userEmailAddress]);

    const addReadingList = async (book) => {
        const isbnNumber = book.isbnNumber;
        const picture = book.picture;
        axios.post("http://localhost:3001/addReadingList", { email: userEmailAddress, isbnNumber: isbnNumber, picture: picture })
            .then(response => {
                if (response.data === "The book is already added to the reading list. Please try to add another book to the reading list.") {
                    alert("The book is already added to the reading list. Please try to add another book to the reading list.");
                }
                else{
                    alert("The book is added to your reading list.");
                }
            })
            .catch(err => console.log(err))
    };

    const redirect = async (book) => {
        setBookNumber(book.isbnNumber);
        navigate("/Components/BookDetails");
    };

    return (
        <div className="fullpage" id="bookfullpage" style={{ backgroundColor: 'white' }}>
            <Navbar />
            <section className="mainhome" id="bookmainhome">
                <div className="maintext" id="bookmaintext">
                    <h1 id="bookh1" style={{ fontWeight: '200px' }}>Book Collection</h1>

                    <Link to="" className="mainbtn" id="bookmainbtn">Find Books<i class='#'></i></Link>
                </div>
            </section>

            <section className="trendingproduct" id="booktrending" style={{ backgroundcolor: 'white' }}>
                <div className="products" id="bookproducts">
                    {book.map(book => (
                        <div class="row1" id="bookrow1">
                            <img id="bookimage" src={book.picture} alt="" />
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">Title: {book.title}</p>
                                <p id="bookparagraph">Author: {book.author}</p>
                                <p id="bookparagraph">Edition: {book.edition}</p>
                                <button id="bookreadinglist" style={{ backgroundColor: "#2eeea2" }} type="submit" onClick={(e) => { e.preventDefault(); addReadingList(book) }}>Add Book to Reading List</button>
                                <button id="bookselect" style={{ backgroundColor: "#2eeea2" }} type="submit" onClick={() => redirect(book)}>Select Book</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <BookShopLinks />
        </div>
    );
};

export default Book;
