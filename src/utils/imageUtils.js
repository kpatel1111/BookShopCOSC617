export const getEnhancedImageUrl = (imageLinks) => {
    if (!imageLinks) return '/image/book-1.png';

    if (imageLinks.extraLarge) {
        return imageLinks.extraLarge.replace('http://', 'https://');
    }

    if (imageLinks.large) {
        return imageLinks.large.replace('http://', 'https://');
    }

    if (imageLinks.thumbnail) {
        return imageLinks.thumbnail
            .replace('http://', 'https://')
            .replace('zoom=1', 'zoom=3')
            .replace('edge=curl', 'edge=none');
    }

    return '/image/book-1.png';
};

const DEFAULT_BOOK_COVER = '/images/default-book-cover.jpg';

export const handleImageError = (event) => {
  event.target.src = DEFAULT_BOOK_COVER;
};

export const isValidImageUrl = (url) => {
  return url && !url.includes('undefined') && !url.includes('null');
};

const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
    });
};

const preloadImages = async (books) => {
    const imagePromises = books
        .filter(book => book.volumeInfo?.imageLinks?.thumbnail)
        .map(book => preloadImage(book.volumeInfo.imageLinks.thumbnail));
    return Promise.all(imagePromises);
};

export { preloadImage, preloadImages };
