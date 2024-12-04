import React from 'react';
import '../App.css';
import food_1 from '../images/food_1.png';
import food_2 from '../images/food_2.png';
import food_3 from '../images/food_3.png';
import food_4 from '../images/food_4.png';
import food_5 from '../images/food_5.png';
import food_6 from '../images/food_6.png';
import food_7 from '../images/food_7.png';
import food_8 from '../images/food_8.png';
import food_9 from '../images/food_9.png';
import food_10 from '../images/food_10.png';
import food_11 from '../images/food_11.png';
import food_12 from '../images/food_12.png';
import food_13 from '../images/food_13.png';
import food_14 from '../images/food_14.png';
import food_15 from '../images/food_15.png';
import food_16 from '../images/food_16.png';
import food_17 from '../images/food_17.png';
import food_18 from '../images/food_18.png';
import food_19 from '../images/food_19.png';
import food_20 from '../images/food_20.png';
import food_21 from '../images/food_21.png';
import food_22 from '../images/food_22.png';
import food_23 from '../images/food_23.png';
import food_24 from '../images/food_24.png';
import food_25 from '../images/food_25.png';
import food_26 from '../images/food_26.png';
import food_27 from '../images/food_27.png';
import food_28 from '../images/food_28.png';
import food_29 from '../images/food_29.png';

function Menu({ addToCart }) {
  const dishes = [
    { name: 'Veg Salad', price: '₹120', rating: 4, img: food_1 },
    { name: 'Grilled Sandwich', price: '₹180', rating: 5, img: food_2 },
    { name: 'Chocolate Cake', price: '₹160', rating: 4.5, img: food_3 },
    { name: 'Chicken Wings', price: '₹240', rating: 4.8, img: food_4 },
    { name: 'Paneer Tikka', price: '₹200', rating: 4.3, img: food_5 },
    { name: 'Pizza Margherita', price: '₹280', rating: 4.7, img: food_6 },
    { name: 'Garlic Bread', price: '₹90', rating: 3.9, img: food_7 },
    { name: 'Burger Deluxe', price: '₹220', rating: 4.6, img: food_8 },
    { name: 'Pasta Alfredo', price: '₹250', rating: 4.4, img: food_9 },
    { name: 'Tandoori Chicken', price: '₹300', rating: 4.9, img: food_10 },
    { name: 'Fruit Salad', price: '₹130', rating: 3.8, img: food_11 },
    { name: 'Mutton Biryani', price: '₹350', rating: 4.9, img: food_12 },
    { name: 'Chole Bhature', price: '₹150', rating: 4.1, img: food_13 },
    { name: 'Spring Rolls', price: '₹100', rating: 4.2, img: food_14 },
    { name: 'Butter Chicken', price: '₹280', rating: 4.7, img: food_15 },
    { name: 'Gulab Jamun', price: '₹80', rating: 4.5, img: food_16 },
    { name: 'Dosa', price: '₹60', rating: 4.0, img: food_17 },
    { name: 'Momos', price: '₹120', rating: 4.3, img: food_18 },
    { name: 'Ice Cream Sundae', price: '₹110', rating: 4.8, img: food_19 },
    { name: 'Sushi', price: '₹400', rating: 4.6, img: food_20 },
    { name: 'French Fries', price: '₹90', rating: 3.9, img: food_21 },
    { name: 'Chicken Burger', price: '₹230', rating: 4.5, img: food_22 },
    { name: 'Veg Pulao', price: '₹180', rating: 4.1, img: food_23 },
    { name: 'Pav Bhaji', price: '₹140', rating: 4.4, img: food_24 },
    { name: 'Fish Curry', price: '₹350', rating: 4.8, img: food_25 },
    { name: 'Nachos', price: '₹110', rating: 4.2, img: food_26 },
    { name: 'Kebab Platter', price: '₹380', rating: 4.7, img: food_27 },
    { name: 'Tacos', price: '₹150', rating: 4.3, img: food_28 },
    { name: 'Brownie', price: '₹120', rating: 4.6, img: food_29 }
  ];
  const handleAddToCart = (dish) => {
    const itemWithQuantity = {
      ...dish,
      quantity: 1 
    };
    addToCart(itemWithQuantity);
  };

  return (
    <section className="top-dishes">
      <h2>Top dishes near you</h2>
      <div className="dishes-list">
        {dishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.img} alt={dish.name} />
            <div className="dish-info">
              <h3>{dish.name}</h3>
              <p>{dish.price}</p>
              <span>{'⭐'.repeat(dish.rating)}</span>
              <button 
                className="btn" 
                onClick={() => handleAddToCart(dish)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Menu;