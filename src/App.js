
import './App.css';
import { useEffect } from 'react';
import Home from "./Components/Home.js";
import Reviews from "./Components/Reviews.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import Book from "./Components/Book.js";
import Logout from "./Components/Logout.js";
import User from "./Components/Profile.js";
import ReadingList from "./Components/ReadingList.js";
import Aboutus from "./Components/Aboutus.js";
import BookDetails from "./Components/BookDetails.js";
import RentalAndReservationHistory from "./Components/RentalAndReservationHistory.js";
import BookShopLinks from "./Components/BookShopLinks.js";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [isbnNumber, setIsbnNumber] = useState(localStorage.getItem("isbnNumber" || ""));

  useEffect(() => {
    if (email) {
      localStorage.setItem("email", email);
    }
    else {
      localStorage.removeItem("email");
    }
  }, [email]);

  useEffect(() => {
    if (isbnNumber) {
      localStorage.setItem("isbnNumber", isbnNumber);
    }
    else {
      localStorage.removeItem("isbnNumber");
    }
  }, [isbnNumber]);

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Login setUserEmail={setEmail} />} />
        <Route path="/Components/Signup" element={<Signup />} />
        <Route path="/Components/Logout" element={<Logout />} />
        <Route path="/Components/Profile" element={<User userEmailAddress={email} />} />
        <Route path="/Components/Home" element={<Home userEmailAddress={email} />} />
        <Route path="/Components/Reviews" element={<Reviews userEmailAddress={email} />} />
        <Route path="/Components/Book" element={<Book userEmailAddress={email} setBookNumber={setIsbnNumber} />} />
        <Route path="/Components/ReadingList" element={<ReadingList userEmailAddress={email} />} />
        <Route path="/Components/Aboutus" element={<Aboutus userEmailAddress={email} />} />
        <Route path="/Components/BookDetails" element={<BookDetails userEmailAddress={email} bookNumber={isbnNumber} />} />
        <Route path="/Components/RentalAndReservationHistory" element={<RentalAndReservationHistory userEmailAddress={email} />} />
        <Route path="/Components/BookShopLinks" element={<BookShopLinks userEmailAddress={email} />} />
      </Routes>
    </div>
  );
}

export default App;
