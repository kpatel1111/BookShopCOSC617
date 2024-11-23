import React, { useRef, useState } from 'react'
import { Link, BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { openLibraryApi } from '../utils/openLibraryApi';
import { isValidImageUrl } from '../utils/imageUtils';

const calculateRelevance = (book, query) => {
    const searchTerms = query.toLowerCase().split(' ');
    let relevance = 0;
    let hasAnyMatch = false;

    const title = book.volumeInfo?.title?.toLowerCase() || '';
    const authors = book.volumeInfo?.authors?.join(' ').toLowerCase() || '';

    if (title === query.toLowerCase()) {
        relevance += 200;
        hasAnyMatch = true;
        return relevance;
    }

    const allTermsInTitle = searchTerms.every(term =>
        term.length >= 3 && title.includes(term)
    );
    if (allTermsInTitle) {
        relevance += 150;
        hasAnyMatch = true;
        return relevance;
    }

    if (authors === query.toLowerCase()) {
        relevance += 100;
        hasAnyMatch = true;
        return relevance;
    }

    searchTerms.forEach(term => {
        if (term.length < 3) return;

        // Title matches
        if (title.includes(` ${term} `)) {
            relevance += 40;
            hasAnyMatch = true;
        } else if (title.startsWith(term)) {
            relevance += 35;
            hasAnyMatch = true;
        }

        // Author matches
        if (authors.includes(term)) {
            relevance += 30;
            hasAnyMatch = true;
        }
    });

    if (!hasAnyMatch || relevance < 35) return -1;

    return relevance;
};

const Navbar = () => {

    const navRef = useRef();
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("login-form");
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        try {
            const books = await openLibraryApi.searchBooks(searchQuery);
            const validBooks = books.filter(book => {
                const imageUrl = book.volumeInfo?.imageLinks?.thumbnail;
                return isValidImageUrl(imageUrl);
            });

            navigate('/search', {
                state: {
                    searchResults: validBooks,
                    searchQuery: searchQuery
                }
            });
        } catch (error) {
            console.error('Error searching books:', error);
            navigate('/search', {
                state: {
                    searchResults: [],
                    searchQuery: searchQuery
                }
            });
        }
    };

  return (
    <div>
        <header className='header'>
            <div className='header_one'>
                <a href="\#" className="logo"><FaBook/>BookShop</a>
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="search"
                        id='search-box'
                        placeholder='search here...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <label onClick={handleSearch}><FaSearch/></label>
                </form>
                <div className="icons">
                    <div id="search-btn"><FaSearch/></div>
                    <Link to="/Components/ReadingList"><FaHeart/></Link>
                    <Link to="/Components/Profile"><FaUser/></Link>
                </div>
            </div>

            <div className='header_two'>
                <div className='navbar'>
                    <Link to="/">Home</Link>
                    <Link
                        to="/Components/Book"
                        onClick={(e) => {
                            if (window.location.pathname === '/Components/Book') {
                                e.preventDefault();
                                window.history.replaceState(null, '', '/Components/Book');
                                window.location.reload();
                            }
                        }}
                    >
                        Books
                    </Link>
                    <Link to="Components/BooksRental">Books Rental</Link>
                    <Link to="Components/TableReservation">Reading Session Reservation</Link>
                    <Link to="Components/Reviews">Reviews</Link>
                </div>
            </div>
        </header>

        <div className="bottom-navbar">
            <a href="\#home"><FaHome/></a>
            <a href="\#featured"><FaList/></a>
            <a href="\#arrivals"><FaTags/></a>
            <a href="\#blogs"><FaStore/></a>
        </div>
    </div>
  )
}

export default Navbar
