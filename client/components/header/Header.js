import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedIn , userLogout , } from "../actions/userAction";
import {adminLogout} from "../actions/adminAction"

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  handleLogout = () => {
    console.log("inside handlelogout")
    localStorage.clear()
  }

  render() {
    const isUserLoggedIn = this.props.userReducer.isLoggedIn;
    const isAdminLoggedIn = this.props.adminReducer.isLoggedIn;
    console.log(isUserLoggedIn , "user");
    console.log(isAdminLoggedIn, "admin")
    return (
      <div className="wrapper header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/">
              <h3>Exposure System</h3>
            </NavLink>
          </div>

          {
            isAdminLoggedIn ?
            <NavLink
            className="head-links"
            activeClassName="active"
            to="/"
          >
            Logout
            </NavLink>
            :

            window.location.pathname === "/admin/login" || window.location.pathname === "/admin/login/dashboard"  ?
              <div>
              </div>
              :
            
            isUserLoggedIn ?
              <nav>
            <NavLink
              className="head-links"
              activeClassName="active"
              to="/"
            >
              Logout
              </NavLink>
          </nav>
          :
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
          </nav>

          }
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps, { userLoggedIn, userLogout, adminLogout })(Header);

// export default Header