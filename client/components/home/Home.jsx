import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="container wrapper">
        <div className="notification">
          <div className="text-center home-description flex-center">
            <p>An exciting new initiative to expose</p>
            <div className="flex">
              <h4>Humans of</h4>
              <img
                className="alt-image"
                src="https://altcampus.io/images/logo.png"
              />
            </div>
            <p>to various ideas and opinions other than just programming</p>
            <NavLink className="button is-primary" to="/register">
              Register
            </NavLink>
            <NavLink className="button is-primary" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
