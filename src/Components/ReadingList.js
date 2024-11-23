import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import BookLoader from './BookLoader';

const ReadingList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReadingList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/readinglist/current-user-id');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching reading list:', error);
            }
            setLoading(false);
        };

        fetchReadingList();
    }, []);

    const handleRemoveBook = async (bookKey) => {
        try {
            await axios.delete(`http://localhost:3001/readinglist/${bookKey}/current-user-id`);
            setBooks(books.filter(book => book.bookKey !== bookKey));
        } catch (error) {
            console.error('Error removing book:', error);
            alert('Failed to remove book from reading list');
        }
    };

    if (loading) return <BookLoader />;

    return (
        <div>
            <Navbar />
            <div className="reading-list-container">
                <h2>My Reading List</h2>
                <div className="books-grid">
                    {books.map(book => (
                        <div key={book.bookKey} className="book-card">
                            <img
                                src={book.bookDetails.imageLinks?.thumbnail}
                                alt={book.bookDetails.title}
                            />
                            <h3>{book.bookDetails.title}</h3>
                            <p>{book.bookDetails.authors?.join(', ')}</p>
                            <button
                                onClick={() => handleRemoveBook(book.bookKey)}
                                className="remove-button"
                            >
                                Remove from List
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadingList;
