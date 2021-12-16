import { useState } from 'react';

import '../styles/Carousel.css';
import backfor from '../pictures/new_back_for.png';
import forback from '../pictures/new_back_for copy.png';

function Carousel({ slides, label }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = slides.length - 1;
  const nextIndex = activeIndex === maxIndex ? 0 : activeIndex + 1;
  const prevIndex = activeIndex === 0 ? maxIndex : activeIndex - 1;

  const goToNext = () => {
    setActiveIndex(nextIndex);
  };

  const goToPrev = () => {
    setActiveIndex(prevIndex);
  };

  const slideList = slides.map( (slide, index)  => {
    
    const txt = slides[index];
    let classes = ['carousel__slide'];
    if (index === activeIndex) {
      classes.push('carousel__slide--active');
    }

    return (
      <li
        key={slide.src}
        className={ classes.join(' ') }
      >
        <h2 className='pic__text__top'>{slide.text2}</h2>
        <img
          id='main__content'
          src={slide.src}
          alt={slide.alt}
          className="carousel__img"
        />
        <h2 className='pic__text__bot'>{slide.text}</h2>
      </li>
    );
  });

  return (
      
    <div className="carousel" role="region" aria-label={label}>
      
      <button
        className="carousel__control carousel__control--previous"
        onClick={goToPrev}
        aria-label='Prev'
      >
        <img className='button__img' src={backfor} alt='a cat paw that is pointing previous'/>
      </button>
      <div className="carousel__content">
        <ul className="carousel__slide-container">
            <div className='picc__div'>
              {slideList}
            </div>
        </ul>
      </div>
      <button
        className="carousel__control carousel__control--next"
        onClick={goToNext}
        aria-label='Next'
      >
        <img className='button__img' src={forback}alt='a cat paw that is pointing next'/>
      </button>
    </div>
  );
}
export default Carousel;
