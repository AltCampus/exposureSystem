/* eslint-disable quotes */
import React, { Component } from 'react';
import '../assets/stylesheets/style.scss';
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import { connect } from 'react-redux';

import AdminProtectedRoutes from './auth/AdminProtectedRoutes';
import StudentProtectedRoutes from './auth/StudentProtectedRoutes';
import NonProtectedRoutes from './auth/NonProtectedRoutes';

import { verifyUser } from '../redux/actions/verificationAction';
import { studentLogin, studentLogout } from '../redux/actions/studentAction';
import { adminLogout } from '../redux/actions/adminAction';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   user: null,
    // };
  }

  componentDidMount() {
    if (localStorage.token) {
      this.props.verifyUser();
    }
  }

  cb = () => {
    this.setState({ user: null }, () => {
      this.props.history.push('/');
    });
  };

  handleLogout = e => {
    e.preventDefault();
    console.log('logout');
    this.props.studentLogout(this.cb);
    this.props.adminLogout(this.cb);
  };

  render() {
    // if ((!this.props.adminReducer.isAdminLoggedIn || !this.props.isStudentLoggedIn ) && localStorage.token) this.props.verifyUser();
    // console.log('app render...', this.props);
    return (
      <>
        {this.props.adminReducer.isAdminLoggedIn ? (
          <AdminProtectedRoutes />
        ) : this.props.studentReducer.isStudentLoggedIn ? (
          <StudentProtectedRoutes />
        ) : (
          <NonProtectedRoutes />
        )}
      </>
    );
  }
}
const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  verifyUser,
  studentLogin,
  studentLogout,
  adminLogout,
})(withRouter(App));
