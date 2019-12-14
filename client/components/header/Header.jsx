import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminLogout } from '../../redux/actions/adminAction';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  cb = () => {
    this.props.history.push('/');
  }

  handleLogout = 
  render() {
    const isAdminLoggedIn = this.props.adminReducer.isAdminLoggedIn;
    return (
      <div className="wrapper header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/">
              <h3>Exposure System</h3>
            </NavLink>
          </div>
          {isAdminLoggedIn ? (
            <button type="logout" className="head-links" onClick={this.handleLogout}>
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
  adminLogout,
})(Header);
