import React from "react";

const HeaderNavigation = (props) => {
    
    return (
        <div className="header-navigation">
            <nav>
                <button>Новинки</button>
                <button>Сноуборд</button>
                <button>Лыжи</button>
                <button>Скейт</button>
                <button>Лонгборд</button>
                <button>Вейкборд</button>
                <button>Серф</button>
                <button>Sup</button>
                <button>Одежда</button>
                <button>Обувь</button>
                <button>Аксессуары</button>
                <button>Бренды</button>
                <button className="sale">Распродажа</button>
            </nav>
        </div>
    );
};

export default HeaderNavigation;