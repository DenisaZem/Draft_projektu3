import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Menu.css';
import zena from '../img/zena.png';
import kvetina from '../img/kvetina.png';
// Import ikon --> npm install react-icons

const Menu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuItems = [zena, kvetina, zena, kvetina, zena, kvetina, zena];

  const scrollLeft = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1,
    );
  };

  const scrollRight = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div className="container">
      <h1>Menu</h1>
      <h2>
        Chtěla bych mít menu zakulacené dokolo(3D), šipky by přesouvaly položky
        dopředu, zároven by ta nejpřednější položka byla největší, posunutím doleva nebo doprava by se zmenšila
      </h2>

      <div className="menu-container">
        <button onClick={scrollLeft} className="scroll-button">
          <FaArrowLeft />
        </button>
        <div className="menu">
          {menuItems.map((item, index) => {
            const position =
              (index - selectedIndex + menuItems.length) % menuItems.length;
      
            return (
              <img
                key={index}
                src={item}
                className={`menu-item ${
                  selectedIndex === index ? 'selected' : ''
                }`}
                onClick={() => selectItem(index)}
                alt={`Menu item ${index}`}
              />
            );
          })}
        </div>
        <button onClick={scrollRight} className="scroll-button">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Menu;
