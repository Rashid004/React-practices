/** @format */

function Hero() {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="hero__nav">
            <div className="hero__logo">
              <div>LOGO</div>
            </div>
            <div className="hero_nav_list">
              <ul>
                <li className="hero_nav_link hero_link">HOME</li>
                <li className="hero_nav_link hero_link">PRODUCT</li>
                <li className="hero_nav_link hero_link">PROMO</li>
                <li className="hero_nav_link hero_link">ABOUT</li>
                <li className="hero_nav_link hero_link">CONTACT</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="hero__container">
            <h2>
              Get Cashback <br /> Upto 50%
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the s standard dummy text ever
              since the 1500s, when an unknown printer.
            </p>

            <a href="#" className="btn">
              Order now
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
