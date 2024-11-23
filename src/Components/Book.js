import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { openLibraryApi } from '../utils/openLibraryApi';
import { isValidImageUrl } from '../utils/imageUtils';
import BookCard from './BookCard';
import BookLoader from './BookLoader';
import { preloadImage, preloadImages } from '../utils/imageUtils';


const Book = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [error, setError] = useState(null);

    const bookGenres = [
        { id: 'fiction', name: 'Fiction' },
        { id: 'fantasy', name: 'Fantasy' },
        { id: 'science_fiction', name: 'Science Fiction' },
        { id: 'mystery_and_detective_stories', name: 'Mystery' },
        { id: 'romance', name: 'Romance' },
        { id: 'thriller', name: 'Thriller' },
        { id: 'horror', name: 'Horror' },
        { id: 'historical_fiction', name: 'Historical Fiction' },
        { id: 'literary_fiction', name: 'Literary Fiction' },
        { id: 'classic_literature', name: 'Classics' },
        { id: 'young_adult', name: 'Young Adult' },
        { id: 'biography', name: 'Biography' },
        { id: 'history', name: 'History' },
        { id: 'science', name: 'Science' },
        { id: 'philosophy', name: 'Philosophy' },
        { id: 'psychology', name: 'Psychology' },
        { id: 'self-help', name: 'Self Help' },
        { id: 'business', name: 'Business' },
        { id: 'art', name: 'Art' },
        { id: 'poetry', name: 'Poetry' }
    ];

    useEffect(() => {
        const fetchTrendingBooks = async () => {
            setLoading(true);
            try {
                const trendingBooks = await openLibraryApi.getTrendingBooks();
                const validBooks = trendingBooks.filter(book =>
                    isValidImageUrl(book.volumeInfo?.imageLinks?.thumbnail)
                );
                await preloadImages(validBooks);
                setBooks(validBooks);
            } catch (error) {
                console.error('Error fetching trending books:', error);
                setBooks([]);
            }
            setLoading(false);
        };

        fetchTrendingBooks();
    }, []);

    const handleGenreClick = async (genre) => {
        setSelectedGenre(genre);
        setLoading(true);
        try {
            const books = await openLibraryApi.getBooksBySubject(genre.id);
            const validBooks = books.filter(book => {
                const imageUrl = book.volumeInfo?.imageLinks?.thumbnail;
                return isValidImageUrl(imageUrl);
            });
            setBooks(validBooks);
        } catch (error) {
            console.error('Error fetching books:', error);
            setBooks([]);
        }
        setLoading(false);
    };

    const calculateRelevance = (book, query) => {
        const searchTerms = query.toLowerCase().split(' ');
        let relevance = 0;
        let hasAnyMatch = false;
        const title = book.volumeInfo?.title?.toLowerCase() || '';
        const authors = book.volumeInfo?.authors?.join(' ').toLowerCase() || '';
        const description = book.volumeInfo?.description?.toLowerCase() || '';
        const categories = book.volumeInfo?.categories?.join(' ').toLowerCase() || '';

        searchTerms.forEach(term => {
            if (term.length < 3) return;

            if (title === query.toLowerCase()) {
                relevance += 100;
                hasAnyMatch = true;
            } else if (title.includes(` ${term} `)) {
                relevance += 30;
                hasAnyMatch = true;
            } else if (title.startsWith(term)) {
                relevance += 25;
                hasAnyMatch = true;
            } else if (title.includes(term)) {
                relevance += 20;
                hasAnyMatch = true;
            }

            if (authors.includes(term)) {
                relevance += 15;
                hasAnyMatch = true;
            }

            if (categories.includes(term)) {
                relevance += 10;
                hasAnyMatch = true;
            }

            if (description.includes(` ${term} `)) {
                relevance += 5;
                hasAnyMatch = true;
            }
        });

        if (!hasAnyMatch) return -1;

        return relevance;
    };

    return (
        <div className="book-page">
            {loading ? (
                <BookLoader />
            ) : (
                <>
                    <Navbar />
                    <div className="books-layout">
                        <aside className="categories-sidebar">
                            <h2>Genres</h2>
                            {bookGenres.map(genre => (
                                <button
                                    key={genre.id}
                                    onClick={() => handleGenreClick(genre)}
                                    className={`category-link ${selectedGenre?.id === genre.id ? 'active' : ''}`}
                                >
                                    {genre.name}
                                </button>
                            ))}
                        </aside>
                        <main className="books-main">
                            {selectedGenre ? (
                                <section className="books-section">
                                    <h2 className="section-title">{selectedGenre.name}</h2>
                                    <div className="books-grid">
                                        {loading ? (
                                            <BookLoader />
                                        ) : books.length > 0 ? (
                                            books.map(book => (
                                                <BookCard key={book.id} book={book} />
                                            ))
                                        ) : (
                                            <div className="no-books">No books found</div>
                                        )}
                                    </div>
                                </section>
                            ) : (
                                <section className="trending-section">
                                    <h2 className="section-title">Trending Books</h2>
                                    <div className="books-grid">
                                        {loading ? (
                                            <BookLoader />
                                        ) : books.length > 0 ? (
                                            books.map(book => (
                                                <BookCard key={book.id} book={book} />
                                            ))
                                        ) : (
                                            <div className="no-books">No Trending Books available</div>
                                        )}
                                    </div>
                                </section>
                            )}
                        </main>
                    </div>
                </>
            )}
        </div>
    );
};

export default Book;
