import React from 'react'

const Menu = () => {
    return (
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-6 about__img">
              <img src="pizza.jpg" alt="pizza" />
            </div>

            <div className="col-6 p-25">
              <h3>The Pizza Menu</h3>
              <h1>WEST BENGAL KOLKATA</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                sed ad reprehenderit. Officia natus dolorem at officiis quasi
                alias. Iusto.
              </p>
              <div className="about__btn">
                <a className="btn btn-smart">VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Menu
