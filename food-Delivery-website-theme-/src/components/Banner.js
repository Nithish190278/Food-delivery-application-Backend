import React from 'react';
import '../App.css';
import Image from '../images/banner.jpeg';
function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>Order your favourite food here</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients.</p>
      </div>
      <div className="banner-image">
        <img src={Image} alt="Food" />
      </div>
    </section>
  );
}

export default Banner;
