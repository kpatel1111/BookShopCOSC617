import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const BASE_URL = 'https://www.googleapis.com/books/v1';

export const googleBooksApi = {
    searchBooks: (query) =>
        axios.get(`${BASE_URL}/volumes?q=${query}&key=${API_KEY}&maxResults=32`),

    getBestSellers: () =>
        axios.get(`${BASE_URL}/volumes?q=subject:all&orderBy=newest&filter=paid-ebooks&maxResults=40&key=${API_KEY}`),

    getBookDetails: (id) =>
        axios.get(`${BASE_URL}/volumes/${id}?key=${API_KEY}`),

    getFeaturedBooks: () =>
        axios.get(`${BASE_URL}/volumes?q=subject:new+releases&orderBy=newest&maxResults=10&key=${API_KEY}`),

    getCategoryBooks: (category) =>
        axios.get(`${BASE_URL}/volumes?q=subject:${category}&orderBy=newest&langRestrict=en&filter=paid-ebooks&maxResults=40&printType=books&key=${API_KEY}`)
}; 
