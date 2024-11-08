import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
import axios from 'axios';

const Navbar = () => {
    const navRef = useRef();
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const showNavbar = () => {
        navRef.current.classList.toggle("login-form");
    }

    useEffect(() => {
        const fetchSearchSuggestions = async () => {
            try {
                const response = await axios.get('/api/search-suggestions');
                setSearchSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching search suggestions:', error);
            }
        };

        fetchSearchSuggestions();
    }, []);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.length > 2) {
                try {
                    const response = await axios.get(
                        `https://openlibrary.org/search.json?q=${query}&limit=5`
                    );
                    setSuggestions(response.data.docs);
                    setShowSuggestions(true);
                } catch (error) {
                    console.error('Error fetching suggestions:', error);
                }
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        };

        const timeoutId = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeoutId);
    }, [query]);

    const handleSearch = (query) => {
        navigate(`/search?query=${query}`);
    };

    const handleSuggestionClick = (bookKey) => {
        navigate(`/book/${bookKey.replace('/works/', '')}`);
        setShowSuggestions(false);
        setQuery('');
    };

    return (
        <div>
            <header className='header'>
                <div className='header_one'>
                    <a href="#" className="logo"><FaBook/>BookShop</a>
                    <form action="" className="search-form">
                        <input
                            type="search"
                            id='search-box'
                            placeholder='search here...'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <label><FaSearch/></label>
                        {showSuggestions && suggestions.length > 0 && (
                            <div className="suggestions-dropdown">
                                {suggestions.map((book) => (
                                    <div
                                        key={book.key}
                                        className="suggestion-item"
                                        onClick={() => handleSuggestionClick(book.key)}
                                    >
                                        <img
                                            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
                                            alt={book.title}
                                            className="suggestion-image"
                                            onError={(e) => {
                                                e.target.src = '/image/book-1.png';
                                            }}
                                        />
                                        <div className="suggestion-info">
                                            <h4>{book.title}</h4>
                                            <p>{book.author_name?.[0]}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </form>
                    <div className="icons">
                        <div id="search-btn"><FaSearch/></div>
                        <Link to="/Components/ReadingList"><FaHeart/></Link>
                        <Link to="/Components/Profile"><FaUser/></Link>
                    </div>
                </div>
                <div className='header_two'>
                    <div className='navbar'>
                        <Link to="/Components/Home">Home</Link>
                        <Link to="/book">Books</Link>
                        <Link to="/booksrental/:key">Books Rental</Link>
                        <Link to="/tablereservation/:key">Reading Session Reservation</Link>
                        <Link to="/Components/Reviews">Reviews</Link>
                    </div>
                </div>
            </header>

            <div className="bottom-navbar">
                <a href="#home"><FaHome/></a>
                <a href="#featured"><FaList/></a>
                <a href="#arrivals"><FaTags/></a>
                <a href="#blogs"><FaStore/></a>
            </div>
        </div>
    )
}

export default Navbar
