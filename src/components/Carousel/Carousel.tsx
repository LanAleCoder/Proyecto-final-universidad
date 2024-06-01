import React, { useState } from 'react';
import './Carousel.css';

const images = [
    '/Proyecto-final-universidad/public/imagen1.jpg',
    '/Proyecto-final-universidad/public/imagen2.webp',
    '/Proyecto-final-universidad/public/imagen3.jpg',
    '/Proyecto-final-universidad/public/imagen4.jpg',
    '/Proyecto-final-universidad/public/imagen5.webp',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
