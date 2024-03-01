import React from "react";
import Picture from "./Picture";

const Stocks = () => {
    return (
        <div className="stocks-container">
            <div className="stocks-left">
                <figure>
                    <Picture info={{ way: 'https://i.ibb.co/jZkppYS/Rectangle-65.png', alt: 'акции'}} />
                    <figcaption>Название акции №1</figcaption>
                </figure>
            </div>
            <div className="stocks-right">
                <figure>
                    <Picture info={{ way: 'https://i.ibb.co/jZkppYS/Rectangle-65.png', alt: 'акции' }} />
                    <figcaption>Название акции №2</figcaption>
                </figure>
            </div>
        </div>
    );
};

export default Stocks;