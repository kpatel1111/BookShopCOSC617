import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { googleBooksApi } from '../utils/api';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('fiction');

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let queryTerm = category;
                if (category === 'mystery') {
                    queryTerm = 'mystery+thriller+detective';
                }

                const response = await googleBooksApi.getCategoryBooks(queryTerm);
                setBooks(response.data.items || []);
            } catch (error) {
                console.error('Error fetching books:', error);
                setBooks([]);
            }
            setLoading(false);
        };

        fetchBooks();
    }, [category]);

    const categories = [
        { id: 'fiction', name: 'Fiction' },
        { id: 'mystery', name: 'Mystery' },
        { id: 'romance', name: 'Romance' },
        { id: 'science', name: 'Science Fiction' },
        { id: 'business', name: 'Business' }
    ];

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await googleBooksApi.searchBooks(searchQuery);
            setBooks(response.data.items);
        } catch (error) {
            console.error('Error searching books:', error);
        }
        setLoading(false);
    };

    return (
        <div>
            <Navbar />
            <div className="books-container">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search books..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>

                <div className="categories-container">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setCategory(cat.id)}
                            className={`category-button ${category === cat.id ? 'active' : ''}`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <>
                        <h2 className="section-title">Popular {category.charAt(0).toUpperCase() + category.slice(1)} Books</h2>
                        <div className="books-grid">
                            {books?.map((book) => (
                                <div key={book.id} className="book-card">
                                    <img
                                        src={book.volumeInfo.imageLinks?.thumbnail || '/image/book-1.png'}
                                        alt={book.volumeInfo.title}
                                        className="book-image"
                                        onError={(e) => {
                                            e.target.src = '/image/book-1.png';
                                        }}
                                    />
                                    <h3>{book.volumeInfo.title}</h3>
                                    <p className="author">{book.volumeInfo.authors?.[0] || 'Unknown Author'}</p>
                                    <div className="button-group">
                                        <Link
                                            to={`/book/${book.id}`}
                                            className="details-button"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Books;
