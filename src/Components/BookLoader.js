import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import './BookLoader.css';

const BookLoader = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch("https://lottie.host/9565c897-c25c-4c6c-9c92-96ab5502808e/1eNDBahKRv.json")
            .then(response => response.json())
            .then(data => setAnimationData(data))
            .catch(error => console.error('Error loading animation:', error));
    }, []);

    return (
        <div className="loader-wrapper">
            {animationData && (
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ width: 300, height: 300 }}
                />
            )}
        </div>
    );
};

export default BookLoader; 
