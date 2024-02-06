import React, { useState, useEffect } from "react";
import Arrows from "./arrows";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleImageClick = () => {
    toggleOpen();
  };

  const exitSlider = () => {
    setIsOpen(false);
  };

  return (
    <div className={`w-full h-96 relative overflow-hidden ${isOpen ? 'open' : ''}`}>
      {isOpen && <div className="overlay" onClick={exitSlider}></div>}
      <div className={`slider-container ${isOpen ? 'open' : ''}`} onClick={handleImageClick}>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`shoe ${index + 1}`}
              className={`slider-image ${isOpen && currentIndex === index ? 'selected' : ''}`}
            />
          ))}
          <img
            src={images[images.length - 1]}
            alt={`shoe 0`}
            className={`slider-image ${isOpen && currentIndex === images.length - 1 ? 'selected' : ''}`}
            style={{ position: "absolute", left: `-${100}vw` }}
          />
        </div>
        <Arrows nextImage={nextImage} prevImage={prevImage} />
        {isOpen && <button className="exit-button" onClick={exitSlider}>X</button>}
      </div>
    </div>
  );
};

export default ImageSlider;
