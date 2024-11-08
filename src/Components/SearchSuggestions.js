import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

const SearchSuggestions = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

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

    const handleSuggestionClick = (bookKey) => {
        navigate(`/book/${bookKey.replace('/works/', '')}`);
        setShowSuggestions(false);
        setQuery('');
    };

    return (
        <div className="search-container">
            <div className="search-input">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search books..."
                />
                <FaSearch className="search-icon" />
            </div>
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
                            />
                            <div className="suggestion-info">
                                <h4>{book.title}</h4>
                                <p>{book.author_name?.[0]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchSuggestions; 
