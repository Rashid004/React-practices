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
                <li>
                  <a href="#" className="hero_nav_link hero_link">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#" className="hero_nav_link">
                    PRODUCT
                  </a>
                </li>
                <li>
                  <a href="#" className="hero_nav_link">
                    PROMO
                  </a>
                </li>
                <li>
                  <a href="#" className="hero_nav_link">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#" className="hero_nav_link">
                    CONTACT
                  </a>
                </li>
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
