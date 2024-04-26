/** @format */

import { useState } from "react";

function Hero() {
  const [isMenu, setIsmenu] = useState(false);

  const toggleMenu = () => {
    setIsmenu((menu) => !menu);
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav className="hero__nav">
            <div className="hero__logo">LOGO</div>
            <div
              className={`menu-icon ${isMenu ? "change" : ""}`}
              onClick={toggleMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="hero_nav_list">
                <ul>
                  <li className="hero_nav_link hero__link">HOME</li>
                  <li className="hero_nav_link">PRODUCT</li>
                  <li className="hero_nav_link">PROMO</li>
                  <li className="hero_nav_link">ABOUT</li>
                  <li className="hero_nav_link">CONTACT</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="hero__container">
            <h2>Get Cashback Upto 50%</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the s standard dummy text ever
              since the 1500s, when an unknown printer.
            </p>
            <button className="btn__hero__container">Order now</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
