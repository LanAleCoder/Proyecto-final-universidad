import React from "react";
import "./Carousel.css";
import Image1 from "../../assets/imagen1.jpg";
import Image2 from "../../assets/imagen2.webp";
import Image3 from "../../assets/imagen3.jpg";
import Image4 from "../../assets/imagen4.jpg";
import Image5 from "../../assets/imagen5.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const images = [Image1, Image2, Image3, Image4, Image5];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className={`carousel-item`}>
          <img src={image} alt={`Slide ${index + 1}`} />
          <button className="slider__reservations">Hacer reserva</button>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
