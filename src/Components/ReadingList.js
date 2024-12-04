import style from "../BookLayout.css";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.js";
import BookShopLinks from "./BookShopLinks.js";

function ReadingList({ userEmailAddress }) {

    const location = useLocation();
    const [isbnNumber, setIsbnNumber] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:3001/getReadingList", { email: userEmailAddress })
            .then(isbnNumber => { setIsbnNumber(isbnNumber.data) })
            .catch(err => console.log(err))
    },[]);

    return (
        <div className="fullpage" id="bookfullpage" style={{ backgroundColor: 'white' }}>
            <Navbar />
            <section className="mainhome" id="bookmainhome1">
                <div className="maintext" id="bookmaintext">
                    <h1 id="bookh1" style={{ fontWeight: '200px' }}>Reading List Collection</h1>

                    <Link to="" className="mainbtn" id="bookmainbtn">Explore Reading List<i class='#'></i></Link>
                </div>
            </section>

            <section className="trendingproduct" id="booktrending" style={{ backgroundcolor: 'white' }}>
                <div className="products" id="bookproducts">
                    {isbnNumber.map(book => (
                        <div class="row1" id="bookrow1">
                            <img id="bookimage" src={book.picture} alt="" />
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">ISBN Number: {book.isbnNumber}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <BookShopLinks />
        </div>
    );
};

export default ReadingList;
