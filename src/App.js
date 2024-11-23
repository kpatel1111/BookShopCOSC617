import './App.css';
import Home from "./Components/Home.js";
import Reviews from "./Components/Reviews.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import BooksRental from "./Components/BooksRental.js";
import Book from "./Components/Book.js";
import Logout from "./Components/Logout.js";
import User from "./Components/Profile.js";
import ReadingList from "./Components/ReadingList.js";
import Reservation from "./Components/TableReservation.js";
import SearchPage from './Components/SearchPage';
import Aboutus from "./Components/Aboutus.js";
import BookDetails from "./Components/BookDetails.js";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Components/Signup" element={<Signup />} />
          <Route path="/Components/Logout" element={<Logout />} />
          <Route path="/Components/Profile" element={<User />} />
          <Route path="/Components/Home" element={<Home />} />
          <Route path="/Components/Reviews" element={<Reviews />} />
          <Route path="/Components/BooksRental/:key" element={<BooksRental />} />
          <Route path="/Components/Book" element={<Book />} />
          <Route path="/Components/ReadingList" element={<ReadingList />} />
          <Route path="/Components/TableReservation/:key" element={<Reservation />} />
          <Route path="/Components/Book/:key" element={<BookDetails />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/Components/TableReservation" element={<Reservation />} />
          <Route path="/Components/Aboutus" element={<Aboutus />} />
          <Route path="/Components/BookDetails" element={<BookDetails />} />
        </Routes>
      </div>
  );
}

export default App;
