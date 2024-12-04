import React from 'react';
import '../App.css';
import Salad from '../images/food_22.png';
import Sandwich from '../images/food_14.png';
import Cake from '../images/food_21.png';
import Chicken from '../images/food_28.png';
function TopDishes() {
  const dishes = [
    { name: 'Veg Salad', price: '₹120', rating: 4 ,img:Salad},
    { name: 'Sandwich', price: '₹180', rating: 5,img:Sandwich },
    { name: 'Cake', price: '₹160', rating: 4.5 ,img:Cake},
    { name: 'Chicken ', price: '₹240', rating: 4.8 ,img:Chicken},
  ];

  return (
    <section className="top-dishes">
      <h2>Top dishes for you</h2>
      <div className="dishes-list">
        {dishes.map((dish, index) => (
          <div className="dish-card" key={index}>
            <img src={dish.img} alt={dish.name} />
            <div className="dish-info">
              <h3>{dish.name}</h3>
              <p>{dish.price}</p>
              <span>{'⭐'.repeat(dish.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopDishes;
