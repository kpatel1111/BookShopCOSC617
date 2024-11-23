import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { openLibraryApi } from '../utils/openLibraryApi';
import BookLoader from './BookLoader';
import Navbar from './Navbar';

const BooksRental = () => {
    const [book, setBook] = useState(null);
    const [rentalDuration, setRentalDuration] = useState(7);
    const [loading, setLoading] = useState(true);
    const [isRented, setIsRented] = useState(false);
    const { key } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookAndRentalStatus = async () => {
            try {
                const [bookData, rentalStatus] = await Promise.all([
                    openLibraryApi.getBookDetails(key),
                    axios.get(`http://localhost:3001/rentals/status/${key}/current-user-id`)
                ]);
                setBook(bookData);
                setIsRented(rentalStatus.data.isRented);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
            setLoading(false);
        };

        fetchBookAndRentalStatus();
    }, [key]);

    const handleRental = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/rentals', {
                bookKey: key,
                userId: 'current-user-id',
                duration: rentalDuration,
                bookDetails: {
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    publishedDate: book.volumeInfo.publishedDate,
                    description: book.volumeInfo.description,
                    imageLinks: book.volumeInfo.imageLinks
                }
            });
            alert('Book rented successfully!');
            navigate('/profile');
        } catch (error) {
            console.error('Error renting book:', error);
            alert('Failed to rent book. Please try again.');
        }
    };

    if (loading) return <BookLoader />;
    if (!book) return <div>Book not found</div>;

    return (
        <div className="rental-container">
            <Navbar />
            <div className="book-details">
                <img
                    src={book.volumeInfo.imageLinks?.thumbnail || '/image/book-1.png'}
                    alt={book.volumeInfo.title}
                    className="book-image"
                />
                <div className="book-info">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>Author: {book.volumeInfo.authors?.[0]}</p>
                    <p>Published: {book.volumeInfo.publishedDate}</p>
                    <p>{book.volumeInfo.description}</p>
                </div>
            </div>

            <form onSubmit={handleRental} className="rental-form">
                <h3>Rent this Book</h3>
                <div className="form-group">
                    <label>Rental Duration (days):</label>
                    <select
                        value={rentalDuration}
                        onChange={(e) => setRentalDuration(Number(e.target.value))}
                    >
                        <option value={7}>7 days</option>
                        <option value={14}>14 days</option>
                        <option value={30}>30 days</option>
                    </select>
                </div>
                <button type="submit" className="rent-button">
                    Confirm Rental
                </button>
            </form>
        </div>
    );
};

export default BooksRental;
