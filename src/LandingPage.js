import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1 className="brand-name">Sentinel</h1>
        <div className="description">
          <p>
            Sentinel is a motion-activated doorbell that increases the security of your home in a convenient manner.
            It sends notifications to this webpage when motion is detected, giving peace of mind to the homeowner.
          </p>
        </div>
        <div className="login-form">
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-button">Login</button>
        </div>
      </header>
    </div>
  );
}

export default LandingPage;
