
import style from "../Book.css";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { State } from "navigation";
import Navbar from "./Navbar.js";
import BookShopLinks from "./BookShopLinks.js";

function RentalAndReservationHistory({ userEmailAddress }) {
    const [book, setBook] = useState("");
    const [bookRental, setBookRental] = useState([]);
    const [tableReservation, setTableReservation] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:3001/getRentalHistory", { email: userEmailAddress })
            .then(rental => { setBookRental(rental.data); })
            .catch(err => { console.log(err); })

        axios.post("http://localhost:3001/getReservationHistory", { email: userEmailAddress })
            .then(reservation => { setTableReservation(reservation.data); })
            .catch(err => { console.log(err); })
    }, []);

    return (
        <div className="fullpage" id="bookfullpage" style={{ backgroundColor: 'white' }}>
            <Navbar />
            <section className="mainhome" id="bookmainhome1">
                <div className="maintext" id="bookmaintext">
                    <h1 id="bookh1" style={{ fontWeight: '200px' }}>Rental and Reservation History</h1>

                    <Link to="" className="mainbtn" id="bookmainbtn">Explore History<i class='#'></i></Link>
                </div>
            </section>

            <section className="trendingproduct" id="booktrending" style={{ backgroundcolor: 'white' }}>

                <h1 style={{ marginBottom: "50px", marginTop: "-30px", fontSize: "20px", textAlign: "center" }}>Book Rental History</h1>
                <div className="products" id="bookproducts">
                    {bookRental.map(books => (
                        <div class="row1" id="bookrow1">
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">ISBN Number: {books.isbnNumber}</p>
                                <p id="bookparagraph">Rental Date: {books.rentalDate}</p>
                                <p id="bookparagraph">Return Date: {books.returnDate}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h1 style={{ marginTop: "50px", fontSize: "20px", textAlign: "center" }}>Reading Session Reservation History</h1>
                <div className="products" id="bookproducts" style={{ marginTop: "40px" }}>

                    {tableReservation.map(table => (
                        <div class="row1" id="bookrow1">
                            <div className="information" id="bookinformation">
                                <p id="bookparagraph">Table Number: {table.tableNumber}</p>
                                <p id="bookparagraph">Date: {table.date}</p>
                                <p id="bookparagraph">Time: {table.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <BookShopLinks />
        </div>
    );
};

export default RentalAndReservationHistory;
