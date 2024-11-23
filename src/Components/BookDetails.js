import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { openLibraryApi } from '../utils/openLibraryApi';
import { getEnhancedImageUrl } from '../utils/imageUtils';
import BookLoader from './BookLoader';
import { preloadImage, preloadImages } from '../utils/imageUtils';
import axios from 'axios';
import StarRating from './StarRating';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [rating, setRating] = useState(0);
    const { key } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const bookId = key.replace('/works/', '');
                console.log('Fetching book details for ID:', bookId); 
                const bookData = await openLibraryApi.getBookDetails(bookId);
                const ratingsData = await openLibraryApi.getBookRatings(bookId);

                if (!bookData) {
                    console.error('No book data returned');
                    return;
                }

                setBook({
                    ...bookData,
                    price: (Math.random() * (29.99 - 9.99) + 9.99).toFixed(2),
                    rating: ratingsData.average || 0,
                    totalRatings: ratingsData.count || 0
                });
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
            setLoading(false);
        };

        fetchBookDetails();
    }, [key]);

    // Add to reading list function
    const handleSaveToReadingList = async () => {
        try {
            await axios.post('http://localhost:3001/readinglist', {
                userId: 'current-user-id',
                bookKey: key,
                bookDetails: {
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    imageLinks: book.volumeInfo.imageLinks
                }
            });
            setIsSaved(true);
            alert('Book saved to reading list!');
        } catch (error) {
            console.error('Error saving book:', error);
            alert('Failed to save book. Please try again.');
        }
    };

    if (loading) return <BookLoader />;
    if (!book) return <div>Book not found</div>;

    return (
        <div>
            <Navbar />
            <div className="book-details-container">
                <div className="book-details-content">
                    <div className="book-info-section">
                        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                        <div className="book-info">
                            <h1>{book.volumeInfo.title}</h1>
                            <p className="author">by {book.volumeInfo.authors?.join(', ')}</p>
                            <div className="rating">
                                <StarRating rating={book.rating} />
                                <span>({book.totalRatings} ratings)</span>
                            </div>
                            <p className="published">Published: {book.volumeInfo.publishedDate}</p>
                            <p className="description">{book.volumeInfo.description}</p>
                        </div>
                    </div>

                    <div className="actions-section">
                        <div className="price-section">
                            <h3 className="price">${book.price}</h3>
                        </div>
                        <div className="action-buttons">
                            <Link to={`/booksrental/${key}`} className="rent-button">
                                Rent Book
                            </Link>
                            <Link to={`/tablereservation/${key}`} className="reserve-button">
                                Reserve Reading Table
                            </Link>
                            <button
                                onClick={handleSaveToReadingList}
                                className={`save-button ${isSaved ? 'saved' : ''}`}
                            >
                                {isSaved ? 'Saved to Reading List' : 'Save to Reading List'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
