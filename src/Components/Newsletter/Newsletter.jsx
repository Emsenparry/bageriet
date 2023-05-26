import React from "react";
import "./Newsletter.scss";
import { HiOutlineMail } from "react-icons/hi";

const Newsletter = () => {
  return (
    <div class="newsletter-section">
      <div class="newsletter-content">
        <div className="textContainer">
          <h3>Tilmeld dig vores nyhedsbrev</h3>
          <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
            udgaver.
          </p>
        </div>
        <form className="newsletter-form">
          <div className="input-container">
            <div className="email-icon">
              <HiOutlineMail color="white" />
            </div>
            <input type="email" placeholder="Indtast din email" />
            <button type="submit">TILMELD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
