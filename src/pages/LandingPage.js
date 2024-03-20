import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onLogin }) => {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1 className="brand-name">Sentinel</h1>
        <div className="curved-box">
          <p className="description">
            Sentinel is a motion-activated doorbell that increases the security
            of your home in a convenient manner. It sends notifications to
            this webpage when motion is detected, giving peace of mind to the
            homeowner.
          </p>
        </div>
        <div className="login-form">
          <input type="text" placeholder="Username" className="input-field curved-input" />
          <input type="password" placeholder="Password" className="input-field curved-input" />
          <div className="button-container">
            <button className="login-button" onClick={onLogin}>
              Login
            </button>
            <div style={{ width: '5mm' }}></div> {/* Empty div for spacing */}
            <button className="login-button admin-login" onClick={onLogin}>
              Admin Login
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
