import React, { useState } from "react";
import Picture from "./Picture";

const ProductSlider = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex((prevIndex) => prevIndex - 1);
        }
    };

    const nextSlide = () => {
        if (startIndex < products.length - 4) {
            setStartIndex((prevIndex) => prevIndex + 1);
        }
    };

    const [buttonStates, setButtonStates] = useState(Array(products.length).fill(false));

    const favorite = (index) => {
        setButtonStates((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="slider">
            <div className="slides">
                <button className="toggle" onClick={prevSlide} >{'<'}</button>
                {products.slice(startIndex, startIndex + 4).map((product, index) => (
                    <div key={index} className="product">
                        <div className="img-container">
                            <Picture info={{way: product.image, alt: product.title}} />
                            <button onClick={() => favorite(startIndex + index)} 
                            className={buttonStates[startIndex + index] ? 'button-clicked' : 'button-normal'}>☆</button>
                        </div>
                        <div className="info">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <span>{product.price}</span>
                        </div>
                    </div>
                ))}
                <button className="toggle" onClick={nextSlide} >{'>'}</button>
            </div>
        </div>
    );
};

export default ProductSlider;
