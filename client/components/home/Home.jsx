import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

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
            <NavLink to="/register">
              <Button type="primary" size="large" className="button">
                Register
              </Button>
            </NavLink>
            <NavLink to="/login">
              <Button className="button" type="primary" size="large">
                Login
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
