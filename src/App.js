import './App.css';
import Home from "./Components/Home.js";
import Reviews from "./Components/Reviews.js";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import Books from './Components/Books';
import BookRental from './Components/BookRental';
import Logout from "./Components/Logout.js";
import User from "./Components/Profile.js";
import ReadingList from "./Components/ReadingList.js";
import TableReservation from "./Components/TableReservation.js";
import BookDetails from './Components/BookDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/Components/Signup" element={<Signup />} />
          <Route path="/Components/Logout" element={<Logout />} />
          <Route path="/Components/Profile" element={<User />} />

          {/* Main App Routes */}
          <Route path="/Components/Home" element={<Home />} />
          <Route path="/Components/Reviews" element={<Reviews />} />
          <Route path="/Components/ReadingList" element={<ReadingList />} />

          {/* Book Related Routes */}
          <Route path="/book" element={<Books />} />
          <Route path="/book/:key" element={<BookDetails />} />
          <Route path="/booksrental/:key" element={<BookRental />} />
          <Route path="/tablereservation/:key" element={<TableReservation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
