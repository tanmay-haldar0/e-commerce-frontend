import React, { useState, useEffect } from 'react';

const Carousel = () => {

    const items = [
        {
            image: 'https://images.unsplash.com/photo-1731902062588-4dce45ccc0cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
            alt: 'Slide 1',
            title: 'Connect with Nature',
            description: 'nature is beautifull',
        },
        {
            image: 'https://media.istockphoto.com/id/1192236158/photo/explosion-of-colored-powder-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=gyzKdgKFjR4RYoe2beeS3vPLSg-Z-k76l0Tma2e1XYU=',
            alt: 'Slide 2',
            title: 'Vibrant Colors',
            description: 'Description for Slide 2',
        },
        {
            image: 'https://media.istockphoto.com/id/1148091793/photo/technology-abstract.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lt1pCwh4O5mEWXBbAJAUvYEHMJ8OXLeuVtaLGkIU5dk=',
            alt: 'Slide 3',
            title: 'Technology',
            description: 'Description for Slide 3',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="relative overflow-hidden w-full sm:h-64 mt-14">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div className="relative flex-shrink-0 w-full h-48 sm:h-64" key={index}>
                        <img src={item.image} alt={item.alt} className="w-full h-full object-cover overflow-hidden" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full h-full text-white bg-black bg-opacity-20 p-2">
                            <h3 className="text-xl sm:text-4xl font-semibold">{item.title}</h3>
                            <p className="text-xs sm:text-lg">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-1/3 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;