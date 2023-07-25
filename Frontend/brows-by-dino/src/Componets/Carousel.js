import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((oldIndex) => {
      return oldIndex === 0 ? images.length - 1 : oldIndex - 1;
    });
  };

  const goNext = () => {
    setActiveIndex((oldIndex) => {
      return oldIndex === images.length - 1 ? 0 : oldIndex + 1;
    });
  };

  return (
    <div className="relative">
      <button onClick={goPrev} className="absolute left-0">
        Prev
      </button>
      <button onClick={goNext} className="absolute right-0">
        Next
      </button>
      <div className="flex justify-center items-center">
        {images.map((img, index) => (
          <img
            src={img}
            className={`h-64 w-auto ${index === activeIndex ? "block" : "hidden"}`}
            alt="Carousel"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;