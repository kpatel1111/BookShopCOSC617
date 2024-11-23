import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';
const CURRENT_YEAR = new Date().getFullYear();

const fetchRecentBooks = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/search.json?q=date:${CURRENT_YEAR}&sort=-new&limit=50`
        );

        const docs = response.data.docs || [];

        return docs
            .filter(doc => doc.cover_i)
            .map(doc => ({
                id: doc.key,
                volumeInfo: {
                    title: doc.title,
                    authors: doc.author_name || ['Unknown Author'],
                    publishedDate: doc.first_publish_year?.toString() || CURRENT_YEAR.toString(),
                    description: doc.description || '',
                    imageLinks: {
                        thumbnail: `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
                    }
                }
            }))
            .slice(0, 20);
    } catch (error) {
        console.error('Error fetching recent books:', error);
        return [];
    }
};

export const openLibraryApi = {
    getTrendingBooks: async () => {
        try {
            const response = await axios.get(
                `${BASE_URL}/trending/daily.json`
            );

            if (!response.data || !response.data.works) {
                throw new Error('Invalid response format');
            }

            const works = response.data.works;

            return works
                .filter(work => work.cover_i)
                .map(work => ({
                    id: work.key,
                    volumeInfo: {
                        title: work.title,
                        authors: work.author_name || ['Unknown Author'],
                        publishedDate: work.first_publish_year?.toString() || CURRENT_YEAR.toString(),
                        description: work.description || '',
                        imageLinks: {
                            thumbnail: `https://covers.openlibrary.org/b/id/${work.cover_i}-M.jpg`
                        }
                    }
                }))
                .slice(0, 20);
        } catch (error) {
            console.error('Error fetching trending books:', error);
            return fetchRecentBooks();
        }
    },

    getBooksBySubject: async (subject) => {
        try {
            const START_YEAR = 2000;
            const CURRENT_YEAR = new Date().getFullYear();

            const response = await axios.get(
                `${BASE_URL}/subjects/${encodeURIComponent(subject.toLowerCase())}.json?limit=100&published_in=${START_YEAR}-${CURRENT_YEAR}&sort=new`
            );

            if (!response.data || !response.data.works) {
                throw new Error('Invalid response format');
            }

            const works = response.data.works;

            return works
                .filter(work =>
                    work.cover_id &&
                    work.first_publish_year >= START_YEAR &&
                    work.first_publish_year <= CURRENT_YEAR
                )
                .sort((a, b) => (b.edition_count || 0) - (a.edition_count || 0))
                .map(work => ({
                    id: work.key,
                    volumeInfo: {
                        title: work.title,
                        authors: work.authors?.map(author => author.name) || ['Unknown Author'],
                        publishedDate: work.first_publish_year?.toString() || '',
                        description: work.description || '',
                        imageLinks: {
                            thumbnail: `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
                        }
                    }
                }))
                .slice(0, 50);
        } catch (error) {
            console.error('Error fetching books by subject:', error);
            return [];
        }
    }
};
