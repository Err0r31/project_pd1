import React, { useState } from "react";

const PhotoSlider = ({photos}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => 
            prevSlide === photos.length - 1 ? 0 : prevSlide + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? photos.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="photo-slider">
            <button className="arrow-button prev" onClick={prevSlide}>{'<'}</button>
            <img src={photos[currentSlide]} alt='dasd' />
            <button className="arrow-button next" onClick={nextSlide}>{'>'}</button>
        </div>
    );
};

export default PhotoSlider;