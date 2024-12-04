import React from 'react';
import '../App.css';
import menu1 from '../images/menu_1.png';
import menu2 from '../images/menu_2.png';
import menu3 from '../images/menu_3.png';
import menu4 from '../images/menu_4.png';
import menu5 from '../images/menu_5.png';
import menu6 from '../images/menu_6.png';
import menu7 from '../images/menu_7.png';
import menu8 from '../images/menu_8.png';
function MenuSection() {
  return (
    <div>
    <section className="menu-section">
      <h2>Explore our menu</h2>
      <p>Choose from a diverse menu featuring a delectable array of dishes.</p>
      <div className="categories">
        <div className="category"><img src={menu1} alt='salad'></img>
        <h3>Salad</h3>
        </div>
        <div className="category"><img src={menu2} alt='Pizza'></img>
        <h3>Pizza</h3>
        </div>
        <div className="category"><img src={menu3} alt='soups'></img>
        <h3>Soups</h3></div>
        <div className="category"><img src={menu4} alt='burger'></img>
        <h3>Burger</h3></div>
        <div className="category"><img src={menu5} alt='cake'></img>
        <h3>Cake</h3></div>
        <div className="category"><img src={menu6} alt='veg'></img>
        <h3>Pure Veg</h3></div>
        <div className="category"><img src={menu7} alt='pasta'></img>
        <h3>Pasta</h3></div>
        <div className="category"><img src={menu8} alt='noodels'></img>
        <h3>Noodels</h3></div>
      </div>
    </section>
    </div>
  );
}

export default MenuSection;
