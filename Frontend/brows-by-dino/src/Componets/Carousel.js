import React, { useState, useEffect, useCallback } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const goPrev = useCallback(() => {
    setIsAutoRotating(false);
    setActiveIndex((oldIndex) => {
      return oldIndex === 0 ? images.length - 1 : oldIndex - 1;
    });
    startAutoRotate()}, [images.length]);

  const goNext = useCallback(() => {
    setIsAutoRotating(false);
    setActiveIndex((oldIndex) => {
      return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
    });
  startAutoRotate()}, [images.length]);

  const startAutoRotate = () => {
    setIsAutoRotating(true);
  };

  useEffect(() => {
    let intervalId;

    if (isAutoRotating) {
      intervalId = setInterval(goNext, 5000); // Rotate every 5 seconds
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoRotating, goNext]);

  return (
    <div className="relative flex items-center">
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 p-3 rounded-full" 
        onClick={goPrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <img className="h-screen w-screen" src={images[activeIndex]} alt={`Slide ${activeIndex + 1}`} />
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 p-3 rounded-full" 
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
