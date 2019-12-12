import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLoggedIn, userLogout } from '../redux/actions/userAction';
import { adminLogout } from '../../redux/actions/adminAction';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isUserLoggedIn = this.props.userReducer.isLoggedIn;
    const isAdminLoggedIn = this.props.adminReducer.isLoggedIn;
    return (
      <div className="wrapper header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/">
              <h3>Exposure System</h3>
            </NavLink>
          </div>
          {isAdminLoggedIn ? (
            <button type="logout" className="head-links" onClick={adminLogout}>
              Logout
            </button>
          ) : (
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
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  userLoggedIn,
  userLogout,
  adminLogout,
})(Header);
