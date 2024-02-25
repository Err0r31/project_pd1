import React from "react";
import Picture from "./Picture";

const DownHeader = () => {
    
    return (
        <div className="down-header">
            <div className="left-buttons">
                <button>Мужчинам</button>
                <button>Женщинам</button>
                <button>Детям</button>
            </div>
            <div className="logo">
                <Picture info={{ way: 'https://i.ibb.co/ThDDqH0/image-1.jpg', alt: 'LOGO'}}/>
            </div>
            <div className="right-buttons">
                <button>
                    <Picture info={{ way: 'https://i.ibb.co/C5WpLTC/Vector.png', alt: '1' }} />
                    Войти
                </button>
                <button>
                    <Picture info={{ way: 'https://i.ibb.co/C5WpLTC/Vector.png', alt: '2' }} />
                    Избранное
                </button>
                <button>
                    <Picture info={{ way: 'https://i.ibb.co/C5WpLTC/Vector.png', alt: '3' }} />
                    Корзина
                </button>
                <button>
                    <Picture info={{ way: 'https://i.ibb.co/C5WpLTC/Vector.png', alt: '4' }} />
                    Поиск
                </button>
            </div>
        </div>
    );
};

export default DownHeader;