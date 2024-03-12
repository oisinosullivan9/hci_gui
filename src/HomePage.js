import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="home-page">
      <h1 className="brand-name">Sentinel</h1>
      <div className="menu-container">
        <div className={`menu-content ${menuOpen ? 'open' : ''}`}>
          <a href="#">About</a> {/* Replace with actual links */} 
          <a href="#">Settings</a>
          <a href="#">More Products</a>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          Menu
        </div>
      </div>
      <div className="help-button">Help</div>
      <div className="notification-box">
        {/* Notifications from the motion sensor will appear here */}
        This is where notifications from the motion sensor will appear.
      </div>
    </div>
  );
}

export default HomePage;
