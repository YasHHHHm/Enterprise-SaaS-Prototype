import React, { useState, useEffect } from 'react';
import images from '../../../assets/images/images';

const carouselItems = [
  {
    id: 1,
    image: images.carousel2,
    alt: "Slide 1",
    caption: `"Launchpad For Products Services That Have Something Unique and New"`
  },
  {
    id: 2,
    image: images.carousel3,
    alt: "Slide 2",
    caption: `"Data-Driven Business Insights for the Modern Entrepreneur"`
  },
  {
    id: 3,
    image: images.carousel1,
    alt: "Slide 3",
    caption: `"Validating Faster, Failing Smarter - The Modern Startup Way"`
  },
  {
    id: 4,
    image: images.carousel4,
    alt: "Slide 4",
    caption: `"Got a Vision? We've Got the Launch Strategy"`
  }
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const goToNextSlide = () => {
    setTransitionEnabled(true);
    setActiveIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(index);
  };

  return (
    <div className="relative animate-fade-in w-full overflow-hidden shadow-lg">
      {/* Slides */}
      <div className="relative h-96 md:h-[500px] w-full bg-black">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              transitionEnabled ? 'ease-in-out' : ''
            } ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Image with reduced opacity */}
            <div className="relative w-full h-full">
              <img 
                src={item.image} 
                className="w-full h-full object-cover opacity-70" 
                alt={item.alt} 
              />
              {/* Dark overlay to ensure text contrast */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            
            {/* Text container with margins */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="mx-8 md:mx-16 lg:mx-24 text-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-literata text-white font-normal leading-tight drop-shadow-lg">
                  {item.caption.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}