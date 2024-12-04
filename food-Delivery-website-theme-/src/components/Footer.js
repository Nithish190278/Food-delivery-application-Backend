import React from 'react';
import '../App.css';
import facebook from '../images/facebook_icon.png';
import twitter from '../images/twitter_icon.png';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-logo">fooddel</div>
        <div className="footer-content">
          <h3>"Explore a diverse range of cuisines and dishes to satisfy every craving."</h3>
          <div className="social-icons">
            <i className="fab fa-facebook">
              <img src={facebook} alt='Facebook' ></img>
            </i>
            <i className="fab fa-twitter">
              <img src={twitter} alt='Twitter'></img>
            </i>
          </div>
        </div>
          <div className="contact">
            <p>7330961794</p>
            <p>fooddel@gmail.com</p>
          </div>
      </footer>
    </div>
  );
}

export default Footer;
