import React from "react";
import UpHeader from "./components/UpHeader";
import DownHeader from "./components/DownHeader";
import HeaderNavigation from "./components/HeaderNavigation";
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <header>
        <UpHeader/>
        <DownHeader/>
        <HeaderNavigation/>
      </header>
    </div>
  );
}

export default App;
