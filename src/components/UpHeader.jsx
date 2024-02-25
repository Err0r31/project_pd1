import React from "react";
import Picture from "./Picture";

const UpHeader = (props) => {

    return (
        <div className="up-header">
            <div className="left-group">
                <Picture info={{ way: 'https://i.ibb.co/rMv3FDs/Vector.png', alt: '1' }} />
                <span>Ваш регион доставки:</span>
                <select>
                    <option value="Mocsow">Москва</option>
                    <option value="Saint-Petersburg">Санкт-Петербург</option>
                    <option value="Tyumen">Тюмень</option>
                </select>
                <div className="store-help-blog">
                    <button>Магазины</button>
                    <button>Помощь</button>
                    <button>Блоги</button>
                </div>
            </div>
            <div className="right-group">
                <Picture info={{way: 'https://i.ibb.co/rMv3FDs/Vector.png', alt: '2'}}/>
                <span>Бесплатная доствака*</span>
                <Picture info={{ way: 'https://i.ibb.co/rMv3FDs/Vector.png', alt: '3' }} />
                <span>Оплата при получении</span>
                <Picture info={{ way: 'https://i.ibb.co/rMv3FDs/Vector.png', alt: '4' }} />
                <span>Возврат в течение 14 дней</span>
            </div>
        </div>
    );
};

export default UpHeader;