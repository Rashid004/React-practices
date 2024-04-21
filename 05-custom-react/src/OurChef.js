/** @format */
import React from "react";
import "./OurChef.css";
function OurChef() {
  return (
    <div className="chef__container">
      <div className="chef__top">
        <h2>Our Chef</h2>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the s standard dummy text ever since
          the 1500s, when an unknown printer Lorem Ipsum has been the s standard
          dummy text ever since
        </p>
      </div>
      <div className="chef__card__container">
        <div className="chef__card">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="user img"
          />
          <h3>David Miller</h3>
          <p>Founder</p>
        </div>
        <div className="chef__card">
          <img
            src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            alt="user img"
          />
          <h3>Munni lali</h3>
          <p>Co-Founder</p>
        </div>
        <div className="chef__card">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1713571200&semt=sph"
            alt="user img"
          />
          <h3>Mike villiam</h3>
          <p>Co-Founder</p>
        </div>
      </div>
    </div>
  );
}

export default OurChef;
