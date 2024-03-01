import React from "react";
import UpHeader from "./components/UpHeader";
import DownHeader from "./components/DownHeader";
import HeaderNavigation from "./components/HeaderNavigation";
import PhotoSlider from "./components/PhotoSlider";
import './styles/app.css';
import CompanyLogos from "./components/CompanyLogos";
import Stocks from "./components/Stocks";
import ProductSlider from "./components/ProductSlider";
import Picture from "./components/Picture";
import Blog from "./components/Blog";
import Promos from "./components/Promos";


const photos = ['https://i.ibb.co/mcTVgJp/Rectangle-28.png', 'https://i.ibb.co/L0qbxqS/Rectangle-63.png']

const products = [
    {
        id: 1,
        image: 'https://i.ibb.co/MptPPW1/image-9.png',
        title: 'LIB TECH',
        description: 'Мужской Сноуборд',
        price: '34392 ₽'
    },
    {
        id: 2,
        image: 'https://i.ibb.co/RY8VX1F/image-9-1.png',
        title: 'LIB TECH',
        description: 'Мужской Сноуборд',
        price: '34392 ₽'
    },
    {
        id: 3,
        image: 'https://i.ibb.co/RY8VX1F/image-9-1.png',
        title: 'LIB TECH',
        description: 'Мужской Сноуборд',
        price: '34392 ₽'
    },
    {
        id: 4,
        image: 'https://i.ibb.co/MptPPW1/image-9.png',
        title: 'LIB TECH',
        description: 'Мужской Сноуборд',
        price: '34392 ₽'
    },
    {
        id: 5,
        image: 'https://i.ibb.co/RY8VX1F/image-9-1.png',
        title: 'LIB TECH',
        description: 'Мужской Сноуборд',
        price: '34392 ₽'
    }
];


function App() {
    return (
        <div className="App">
            <header>
                <UpHeader />
                <DownHeader />
                <HeaderNavigation />
            </header>
            <PhotoSlider photos={photos} />
            <CompanyLogos />
            <Stocks />
            <h1 className="new-items">Новинки</h1>
            <ProductSlider products={products} />
            <div className="show-more">
                <button>Показать Больше</button>
            </div>
            <div className="about-stonck">
                <Picture info={{ way: 'https://i.ibb.co/82FfH5w/Rectangle-19.png', alt: 'кросовок'}} />
                <h2>Название акции</h2>
                <span>
                    Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах — в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в истории, являет собою противоположность как раз этому.
                </span>
            </div>
            <h2 className="popular">DC Shoes популярное в коллекции</h2>
            <ProductSlider products={products} />
            <div className="show-more">
                <button>Показать Больше</button>
            </div>
            <Blog/>
        </div>
    );
}

export default App;
