import React from 'react';
import { Link } from 'react-router-dom';
import { handleImageError, isValidImageUrl } from '../utils/imageUtils';

const DEFAULT_BOOK_COVER = '/images/default-book-cover.jpg';

const BookCard = ({ book }) => {
    const imageUrl = book.volumeInfo?.imageLinks?.thumbnail;
    const validImageUrl = isValidImageUrl(imageUrl) ? imageUrl : null;
    const bookId = book.id.replace('/works/', '');

    return (
        <Link to={`/book/${bookId}`} className="book-card">
            <div className="book-image-container">
                <img
                    src={validImageUrl || DEFAULT_BOOK_COVER}
                    alt={book.volumeInfo?.title || 'Book cover'}
                    onError={handleImageError}
                    className="book-image"
                />
            </div>
            <div className="book-info">
                <h3 className="book-title">{book.volumeInfo?.title}</h3>
                <p className="book-author">
                    {book.volumeInfo?.authors?.[0] || 'Unknown Author'}
                </p>
            </div>
        </Link>
    );
};

export default BookCard; 
