
import React, { useState, useEffect } from 'react';
import style from "../BookDetails.css";
import Image from "./Images/book.jpg";
import axios from "axios";
import { State } from "navigation";
import Navbar from "./Navbar.js";
import { BrowserRouter, Route, Link, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { FaEye, FaHeadset, FaHeart,FaLock,FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

function BookDetails() {

    const[email, setEmail] = useState("");
    const[rentalDate, setRentalDate] = useState("");
    const[returnDate, setReturnDate] = useState("");
    const[reservationEmail, setReservationEmail] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");

  return (
    <div className='bookdetailsbackground' id="bookdetailsbackground">
      <div class="bookdetailsfull" id="bookdetailsfull" style={{ backgroundColor: "white" }}>
       <Navbar />
        <div class="bookdetailsaboutsection" id="bookdetailsaboutsection" style={{ backgroundColor: "white" }}>
          <h1 id="bookdetailsh1" style={{ fontFamily: "cursive", marginBottom: "10px", color: "black" }}>Display the book name from the database.</h1>
        </div>

        <div class="row" id="bookdetailsrow">

          <div class="column" id="bookdetailscolumn">
            <div class="card1" id="bookdetailscard1">
              <img id="bookdetailsimage" src={Image} alt="images" style={{ width: "100%", height: "48%" }} />
              <div class="container" id="bookdetailscontainer">
                <h2 id="bookdetailsh2">Book Information</h2>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>Book Title:  </strong>Display title from the database.</p>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>ISBN Number:  </strong>Display ISBN number from the database.</p>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>Author:  </strong>Display author from the database.</p>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>Edition: </strong>Display book edition from the database.</p>
              </div>
            </div>
          </div>

          <div class="column" id="bookdetailscolumn">
            <div class="card2" id="bookdetailscard2">
              <img id="bookdetailsimage" src="https://media.istockphoto.com/id/120004828/photo/books-stacked-on-table-at-bookstore.jpg?s=612x612&w=0&k=20&c=NtNzx4xdP-6Dd3eomX2mf_-w2-JJhYbndBwLFRdCetY=" alt="John" style={{ width: "100%", height: "48%" }} />
              <div class="container" id="bookdetailscontainer">
                <h2 id="bookdetailsh2">Book Rental</h2>
                <div className="formbox" id="bookdetailsformbox">
                  <form id="bookdetailsform">
                    <p id="bookdetailsparagraph">Email Address: <input type="email" id="email" name="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required="required" /></p>
                    <p id="bookdetailsparagraph">Rental Date: <input type="date" id="date1" name="date1" value={rentalDate} onChange={(e) => setRentalDate(e.target.value)} required="required" /></p>
                    <p id="bookdetailsparagraph">Return Date: <input type="date" id="date2" name="date2" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required="required" /></p>
                    <button id="bookdetailssubmit" type="submit" style={{ backgroundColor: "#2eeea2" }} /*onClick={}*/>Process Book Rental</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="column" id="bookdetailscolumn">
            <div class="card2" id="bookdetailscard2">
              <img id="bookdetailsimage"src="https://img.freepik.com/premium-photo/book-table-library-with-stack-books-table_865967-51885.jpg" alt="John" style={{ width: "100%", height: "48%" }} />
              <div class="container" id="bookdetailscontainer">
                <h2 id="bookdetailsh2">Reading Session Reservation</h2>
                <div className="formbox" id="bookdetailsformbox">
                  <form id="bookdetailsform">
                    <p id="bookdetailsparagraph">Email Address: <input type="email" id="email" name="email" placeholder="Enter Email Address" value={reservationEmail} onChange={(e) => setReservationEmail(e.target.value)} required="required" /></p>

                    <label for="table" id="bookdetailsnote">Select a Table Number:</label>
                    <select name="tableNumber" id="tableNumber">
                        <option id="bookdetailsoption" value="No table selected">Choose Table</option>
                        <option id="bookdetailsoption" value="Table-1">Table-1</option>
                        <option id="bookdetailsoption" value="Table-2">Table-2</option>
                        <option id="bookdetailsoption" value="Table-3">Table-3</option>
                        <option id="bookdetailsoption" value="Table-4">Table-4</option>
                        <option id="bookdetailsoption" value="Table-5">Table-5</option>
                        <option id="bookdetailsoption" value="Table-6">Table-6</option>
                        <option id="bookdetailsoption" value="Table-7">Table-7</option>
                        <option id="bookdetailsoption" value="Table-8">Table-8</option>
                        <option id="bookdetailsoption" value="Table-9">Table-9</option>
                        <option id="bookdetailsoption" value="Table-10">Table-10</option>
                    </select>

                    <p id="bookdetailsparagraph">Select Date: <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required="required" /></p>
                    <p id="bookdetailsparagraph">Select Time: <input type="time" id="appt" name="appt" value={time} onChange={(e) => setTime(e.target.value)} required="required" /></p>
                    <button id="bookdetailssubmit" type="submit" style={{ backgroundColor: "#2eeea2" }} /*onClick={}*/>Reserve Table</button>
                  </form>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>

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
  );
};
export default BookDetails;