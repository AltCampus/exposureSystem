import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { studentLogin , studentLogout } from "../../redux/actions/studentAction";
import { adminLogout } from "../../redux/actions/studentAction";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  cb = () => {
    this.props.history.push('http://localhost:3000/');
  }

  handleLogout = (e) => { 
    e.preventDefault();
    this.props.studentLogout(this.cb);
    this.props.adminLogout(this.cb);
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
            onClick={this.handleLogout} 
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


export default connect(mapStateToProps, { studentLogin , studentLogout , adminLogout })(Header);
