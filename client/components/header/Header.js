import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {

  handleLogout = () => {
    console.log("inside handlelogout")
    localStorage.clear()
  }

render() {
  return (
    <div className="wrapper header">
      <div className="flex-between">
        <div>
          <NavLink className="icon" to="/">
            <h3>Exposure System</h3>
          </NavLink>
        </div>
        <div>
          <nav>
            <NavLink
              className="head-links"
              activeClassName="active"
              to="/register"
            >
              Register
              </NavLink>
            <NavLink
              className="head-links"
              activeClassName="active"
              to="/login"
            >
              Login
              </NavLink>
            {
              localStorage.userToken ?
                <button onClick={this.handleLogout}>
                  Logout
                </button>
                :
                null
            }
          </nav>
        </div>
      </div>
    </div >
  );
}
}

export default Header;
