import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="text-center home-description flex-center">
          <p>An exciting new initiative to expose</p>
          <h4>
            Humans of
            <img
              className="alt-image"
              src="https://altcampus.io/images/logo.png"
             />
          </h4>
          <p>to various ideas and opinions other than just programming</p>
          <NavLink className="button" to="/register">
            Register
          </NavLink>
          <NavLink className="button" to="/login">
            Login
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;