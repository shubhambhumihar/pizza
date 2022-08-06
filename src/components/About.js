import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME IN OUR WORLD</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse sed
              ad reprehenderit. Officia natus dolorem at officiis quasi alias.
              Iusto.
            </p>
            <div className="about__btn">
              <a className="btn btn-smart">READ MORE</a>
            </div>
          </div>
          <div className="col-6 about__img">
            <img src="pizza.jpg" alt="pizza" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
