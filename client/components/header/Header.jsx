import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminLogout } from '../../redux/actions/adminAction';
import { studentLogout } from '../../redux/actions/studentAction';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  cb = () => {
    this.props.history.push('/');
  }

  handleLogout = () => {
    if(this.props.adminReducer.isAdminLoggedIn == true) {
      this.props.adminLogout(this.cb);
    }
    if(this.props.studentReducer.isStudentLoggedIn == true) {
      this.props.studentLogout(this.cb)
    }
  }

  render() {
    const isLoggedIn = this.props.adminReducer.isAdminLoggedIn || this.props.studentReducer.isStudentLoggedIn;
    console.log(isLoggedIn);
    return (
      <div className="wrapper header">
        <div className="flex-between">
          <div>
            <NavLink className="icon" to="/">
              <h3>Exposure System</h3>
            </NavLink>
          </div>
          {if (isLoggedIn == true){
            return (
            <button type="logout" className="head-links" onClick={this.handleLogout}>
              Logout
            </button>
              )
             } else {
            return (
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
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {
  adminLogout,
  studentLogout
})(Header);
