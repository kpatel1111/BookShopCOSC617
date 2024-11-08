import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { googleBooksApi } from '../utils/api';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { key } = useParams();

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await googleBooksApi.getBookDetails(key);
                setBook({
                    ...response.data,
                    price: (Math.random() * (29.99 - 9.99) + 9.99).toFixed(2)
                });
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
            setLoading(false);
        };

        fetchBookDetails();
    }, [key]);

    if (loading) return <div className="loading">Loading...</div>;
    if (!book) return <div>Book not found</div>;

    return (
        <div>
            <Navbar />
            <div className="book-details-container">
                <div className="book-details-content">
                    <div className="book-image-section">
                        <img
                            src={`https://covers.openlibrary.org/b/id/${book.covers?.[0]}-L.jpg`}
                            alt={book.title}
                            className="book-detail-image"
                        />
                        <div className="price-section">
                            <h3 className="price">${book.price}</h3>
                            <div className="action-buttons">
                                <Link to={`/booksrental/${key}`} className="rent-button">
                                    Rent Book
                                </Link>
                                <Link to={`/tablereservation/${key}`} className="reserve-button">
                                    Reserve Reading Table
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="book-info-section">
                        <h1>{book.title}</h1>
                        <h2>by {book.author}</h2>
                        <div className="book-metadata">
                            <p><strong>First Published:</strong> {book.first_publish_date || 'Unknown'}</p>
                            <p><strong>Pages:</strong> {book.number_of_pages || 'Unknown'}</p>
                            <p><strong>Subjects:</strong> {book.subjects?.slice(0, 5).join(', ') || 'Not available'}</p>
                        </div>
                        <div className="book-description">
                            <h3>Description</h3>
                            <p>{book.description?.value || book.description || 'No description available.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails; 
