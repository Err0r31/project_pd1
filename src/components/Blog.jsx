import React from "react";
import Picture from "./Picture";

const Blog = () => {
    return (
        <div className="blog-container">
            <div className="player">
                <button>&lt;</button>
                <div className="play-button">
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="48" cy="40" r="40" fill="white" fillOpacity="0.9" />
                        <path d="M42 30.4058L62.9032 41.2689L42 52.1321V30.4058Z" fill="black" />
                    </svg>
                </div>
                <Picture info={{ way: 'https://i.ibb.co/GM2Drqt/Rectangle-67.png', alt: "Желтая куртка"}} />
            </div>
            <div className="blog">
                <h2>Блоги</h2>
                <a href="#" className="all-blogs">Все блоги</a>
                <h1>Очень преочень длинное название блога</h1>
                <span>
                    Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому.
                    Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому...
                </span>
                <div className="grey-line"></div>
                <a href="#" className="continuation">Читать продолжение</a>
                <button>&gt;</button>
            </div>
        </div>
    );
};

export default Blog;