import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isAdminLoggedIn = this.props.adminReducer.isAdminLoggedIn;
    return (
      <div className="header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/">
              <h3>Exposure System</h3>
            </NavLink>
          </div>
          <button onClick={this.props.handleLogout} className="head-links">
            Logout
          </button>
          {!isAdminLoggedIn ? <span>0.00</span> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(withRouter(Header));
