import React, { useState } from 'react';

function Slider() {
  const slides = [
    {
      id: 1,
      image: 'https://example.com/slide1.jpg',
      caption: 'Slide 1',
    },
    {
      id: 2,
      image: 'https://example.com/slide2.jpg',
      caption: 'Slide 2',
    },
    {
      id: 3,
      image: 'https://example.com/slide3.jpg',
      caption: 'Slide 3',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className='slider'>
      <div className='slider-container'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}>
            <div className='caption'>{slide.caption}</div>
          </div>
        ))}
      </div>
      <button className='prev-btn' onClick={goToPreviousSlide}>
        Previous
      </button>
      <button className='next-btn' onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
}

export default Slider;
