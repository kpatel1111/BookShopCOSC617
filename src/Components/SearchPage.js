import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import BookLoader from './BookLoader';

const SearchPage = () => {
    const location = useLocation();
    const { searchResults = [], searchQuery = '' } = location.state || {};
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [searchResults]);

    if (loading) return <BookLoader />;

    return (
        <div>
            <Navbar />
            <div className="search-page">
                <h2 className="section-title">
                    Search Results {searchQuery && `for "${searchQuery}"`}
                </h2>
                <div className="search-results-grid">
                    {searchResults && searchResults.length > 0 ? (
                        searchResults.map(book => (
                            <Link to={`/book/${book.id}`} key={book.id} className="search-book-card">
                                <div className="search-book-image">
                                    <img
                                        src={book.volumeInfo?.imageLinks?.thumbnail}
                                        alt={book.volumeInfo?.title}
                                    />
                                </div>
                                <div className="search-book-info">
                                    <h3>{book.volumeInfo?.title}</h3>
                                    <p className="search-book-author">
                                        {book.volumeInfo?.authors?.[0]}
                                        {book.volumeInfo?.publishedDate && ` (${book.volumeInfo.publishedDate})`}
                                    </p>
                                    <p className="search-book-description">
                                        {book.volumeInfo?.description?.slice(0, 150)}
                                        {book.volumeInfo?.description?.length > 150 ? '...' : ''}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="no-results">
                            {searchQuery ? `No books found for "${searchQuery}"` : 'No books found'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
