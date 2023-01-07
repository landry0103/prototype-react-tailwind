import React, { useRef, createElement } from 'react';
import Slider from 'react-slick';
import ControlArrows from './ControlArrows';

export default function Carousel({ data, slideSettings, carouselItemComponent }) {
  const carouselRef = useRef();

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <div className="relative">
      <Slider ref={carouselRef} {...slideSettings}>
        {data.map((dataItem, index) => (
          createElement(carouselItemComponent, {
            key: index,
            dataItem
          })
        ))}
      </Slider>
      <ControlArrows onNext={handleNext} onPrevious={handlePrevious} />
    </div>
  );
}