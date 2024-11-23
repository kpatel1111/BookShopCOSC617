import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import { openLibraryApi } from '../utils/openLibraryApi';
import BookLoader from './BookLoader';

const TableReservation = () => {
    const [book, setBook] = useState(null);
    const [reservationDate, setReservationDate] = useState('');
    const [reservationTime, setReservationTime] = useState('');
    const [availableTables, setAvailableTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState(null);
    const [loading, setLoading] = useState(true);
    const { key } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookAndTables = async () => {
            try {
                const [bookData, tablesData] = await Promise.all([
                    openLibraryApi.getBookDetails(key),
                    axios.get(`http://localhost:3001/tables/available`, {
                        params: { date: reservationDate, time: reservationTime }
                    })
                ]);
                setBook(bookData);
                setAvailableTables(tablesData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        fetchBookAndTables();
    }, [key, reservationDate, reservationTime]);

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/reservations', {
                bookKey: key,
                userId: 'current-user-id',
                reservationDate,
                reservationTime,
                bookDetails: {
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    publishedDate: book.volumeInfo.publishedDate,
                    description: book.volumeInfo.description,
                    imageLinks: book.volumeInfo.imageLinks
                }
            });
            alert('Reading table reserved successfully!');
            navigate('/profile');
        } catch (error) {
            console.error('Error reserving table:', error);
            alert('Failed to reserve table. Please try again.');
        }
    };

    if (loading) return <BookLoader />;
    if (!book) return <div>Book not found</div>;

    return (
        <>
            <Navbar />
            <div className="reservation-container">
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

                <form onSubmit={handleReservation} className="reservation-form">
                    <h3>Reserve Reading Table</h3>
                    <div className="form-group">
                        <label>Date:</label>
                        <input
                            type="date"
                            value={reservationDate}
                            onChange={(e) => setReservationDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                    <div className="form-group">
                        <label>Time:</label>
                        <input
                            type="time"
                            value={reservationTime}
                            onChange={(e) => setReservationTime(e.target.value)}
                        />
                    </div>
                    <button type="submit">Reserve Table</button>
                </form>
            </div>
        </>
    );
};

export default TableReservation;
