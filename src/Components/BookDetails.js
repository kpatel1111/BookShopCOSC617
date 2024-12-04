import React, { useState, useEffect } from 'react';
import style from "../BookDetails.css";
import axios from "axios";
import { State } from "navigation";
import Navbar from "./Navbar.js";
import BookShopLinks from './BookShopLinks.js';
import { BrowserRouter, Route, Link, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { FaEye, FaHeadset, FaHeart, FaLock, FaPlane, FaSearch, FaStar, FaStarHalf, FaMapMarkedAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

function BookDetails({ userEmailAddress, bookNumber }) {

  const [email, setEmail] = useState("");
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [reservationEmail, setReservationEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [book, setBook] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("https://bookshopcosc617.onrender.com/getOneBook", { isbnNumber: bookNumber })
      .then(result => {
        setBook(result.data);
      })
      .catch(err => {console.log(err)})
  }, []);

  const bookRentalProcess = async (book) => {
    if (email == "" || rentalDate == "" || returnDate == "") {
      alert("Please enter valid details for the book rental process.");
    } else {
      axios.post("https://bookshopcosc617.onrender.com/bookRentalProcess", { isbnNumber: book.isbnNumber, userEmail: userEmailAddress, rentalDate: rentalDate, returnDate: returnDate })
        .then(bookRental => {
          if (bookRental.data === "The book is not available to rent. Please rent another book from the collection.") {
            alert("The book is not available to rent. Please rent another book from the collection.");
          }
          else {
            alert("Your book rental has been processed.");
          }
        })
        .catch(err => console.log(err))
    }
  };

  const readingSessionReservation = async (book) => {
    axios.post("https://bookshopcosc617.onrender.com/readingSessionReservationProcess", { userEmail: userEmailAddress, date: date, time: time, tableNumber: tableNumber })
      .then(reservation => {
        if (reservation.data === "The table is not available for the reading session. Please reserve another table.") {
          alert("The table is not available for the reading session. Please reserve another table.");
        }
        else {
          alert("Your reading session reservation is processed.");
        }
      })
      .catch(err => console.log(err))
  };

  return (
    <div className='bookdetailsbackground' id="bookdetailsbackground">
      <div class="bookdetailsfull" id="bookdetailsfull" style={{ backgroundColor: "white" }}>
        <Navbar />
        <div class="bookdetailsaboutsection" id="bookdetailsaboutsection" style={{ backgroundColor: "white" }}>
          <h1 id="bookdetailsh1" style={{ fontFamily: "cursive", marginBottom: "10px", color: "black" }}>{book.title}</h1>
        </div>

        <div class="row" id="bookdetailsrow">

          <div class="column" id="bookdetailscolumn">
            <div class="card1" id="bookdetailscard1">
              <img id="bookdetailsimage" src={book.picture} alt="images" style={{ width: "100%", height: "48%" }} />
              <div class="container" id="bookdetailscontainer">
                <h2 id="bookdetailsh2">Book Information</h2>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>Book Title:  </strong>{book.title}</p>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>ISBN Number:  </strong>{book.isbnNumber}</p>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>Author:  </strong>{book.author}</p>
                <p id="bookdetailsparagraph" style={{ marginTop: "20px" }}><strong>Edition: </strong>{book.edition}</p>
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
                    <button id="bookdetailssubmit" type="submit" style={{ backgroundColor: "#2eeea2" }} onClick={(e) => { e.preventDefault(); bookRentalProcess(book); setEmail(""); setRentalDate(""); setReturnDate("") }}>Process Book Rental</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="column" id="bookdetailscolumn">
            <div class="card2" id="bookdetailscard2">
              <img id="bookdetailsimage" src="https://img.freepik.com/premium-photo/book-table-library-with-stack-books-table_865967-51885.jpg" alt="John" style={{ width: "100%", height: "48%" }} />
              <div class="container" id="bookdetailscontainer">
                <h2 id="bookdetailsh2">Reading Session Reservation</h2>
                <div className="formbox" id="bookdetailsformbox">
                  <form id="bookdetailsform">
                    <p id="bookdetailsparagraph">Email Address: <input type="email" id="email" name="email" placeholder="Enter Email Address" value={reservationEmail} onChange={(e) => setReservationEmail(e.target.value)} required="required" /></p>

                    <label for="table" id="bookdetailsnote">Select a Table Number:</label>
                    <select name="tableNumber" id="tableNumber" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)}>
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
                    <button id="bookdetailssubmit" type="submit" style={{ backgroundColor: "#2eeea2" }} onClick={(e) => { e.preventDefault(); readingSessionReservation(book); setReservationEmail(""); setTableNumber(""); setDate(""); setTime("") }}>Reserve Table</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <BookShopLinks />
    </div>
  );
};

export default BookDetails;
