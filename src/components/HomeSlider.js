import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.css"; // Custom styles

const slides = [
  {
    title: "Finest Bespoke Interiors.",
    text: "Creating lasting impressions through interior design.",
    image: "images/slides/v2-1.jpg", // Adjust path based on your public folder
    buttonLink: "#",
    videoLink: "https://www.youtube.com/watch?v=p25gICT63ek",
  },
  // Add more slides here as needed
];

const HomeSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <div className="custom-dot" />,
    appendDots: (dots) => <ul className="custom-dots">{dots}</ul>,
  };

  return (
    <section className="home-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-content">
              <div className="text-content">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <div className="buttons">
                  <a href={slide.videoLink} className="play-button" target="_blank" rel="noopener noreferrer">
                    ▶
                  </a>
                  <a href={slide.buttonLink} className="more-btn">
                    More About Us
                  </a>
                </div>
              </div>
              <div className="image-content">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeSlider;
