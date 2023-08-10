import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from 'react-swipeable';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [direction, setDirection] = useState('');

  const goPrev = useCallback(() => {
    setIsAutoRotating(false);
    setDirection('prev');
    startAutoRotate();
  }, []);

  const goNext = useCallback(() => {
    setIsAutoRotating(false);
    setDirection('next');
    startAutoRotate();
  }, []);

  useEffect(() => {
    if (direction === 'next') {
      setActiveIndex((oldIndex) => oldIndex === images.length - 1 ? 0 : oldIndex + 1);
    } else if (direction === 'prev') {
      setActiveIndex((oldIndex) => oldIndex === 0 ? images.length - 1 : oldIndex - 1);
    }
  }, [direction, images.length]);

  const startAutoRotate = () => {
    setIsAutoRotating(true);
    clearInterval(intervalId); // Clear the existing interval
    intervalId = setInterval(goNext, 5000); // Start a new interval with 5 seconds timer
  };

  let intervalId;

  useEffect(() => {
    intervalId = setInterval(goNext, 5000); // Initial auto rotation, every 5 seconds
    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [goNext]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goNext(),
    onSwipedRight: () => goPrev(),
    swipeDuration: 500,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="relative flex items-center h-screen bg-white overflow-hidden" {...handlers}>
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 p-3 rounded-full z-10" 
        onClick={goPrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {images.map((image, index) => {
    let position; 
    let visibility;
    if(index === activeIndex) {
      position = 'translate-x-0'; // The active image is in the center.
      visibility = 'visible opacity-100'; // The active image is visible.
    } else if (index === ((activeIndex - 1 + images.length) % images.length)) {
      position = '-translate-x-full'; // The previous image is off to the left.
      visibility = 'invisible opacity-0'; // The previous image is invisible.
    } else {
      position = 'translate-x-full'; // The next and all other images are off to the right.
      visibility = 'invisible opacity-0'; // The next and all other images are invisible.
    }

    return (
      <img
        key={index}
        className={`absolute h-full w-full transform ${position} ${visibility} transition-all duration-1000 object-cover`}
        src={image}
        alt={`Slide ${index + 1}`}
        onTransitionEnd={() => index === activeIndex && setDirection('')}
      />
    )
})}


      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 p-3 rounded-full z-10" 
        onClick={goNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
