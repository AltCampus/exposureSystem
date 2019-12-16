import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    return (
      <div className="header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/">
              <h3>Exposure System</h3>
            </NavLink>
          </div>
          <button 
            onClick={this.props.handleLogout} 
            className="head-links"
            >
              Logout
            </button>        
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => {
  return state
}


export default connect(mapStateToProps)(withRouter(Header));
