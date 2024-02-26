import React from "react";
import UpHeader from "./components/UpHeader";
import DownHeader from "./components/DownHeader";
import HeaderNavigation from "./components/HeaderNavigation";
import PhotoSlider from "./components/PhotoSlider";
import './styles/app.css';
import CompanyLogos from "./components/CompanyLogos";

const photos = ['https://i.ibb.co/mcTVgJp/Rectangle-28.png', 'https://i.ibb.co/L0qbxqS/Rectangle-63.png']

function App() {
  return (
    <div className="App">
      <header>
        <UpHeader/>
        <DownHeader/>
        <HeaderNavigation/>
        <PhotoSlider photos={photos}/>
        <CompanyLogos />
      </header>
    </div>
  );
}

export default App;
