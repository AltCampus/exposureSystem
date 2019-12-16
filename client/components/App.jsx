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
import Home from './home/Home';
import RegisterUser from './auth/RegisterUser';
import LoginUser from './auth/LoginUser';
import AdminLogin from './auth/AdminLogin';
import Page404 from './Page404';
import ContentList from './content/ContentList';
import NewContentForm from './content/NewContentForm';
import PendingApprovals from './adminDashboard/PendingApprovals';
import ContentSubmission from './content/ContentSubmission';
import Content from './content/Content';
import Onboarding from './auth/Onboarding';
import StudentDashboard from './students/studentDashboard/StudentDashboard';
import EditContent from './content/EditContent';
import AdminFeed from './adminDashboard/AdminFeed';
import StudentList from './students/StudentList';
import RegisterVerification from './registerVerfication/RegisterVerification';
import Header from './header/Header';
import { studentLogin, studentLogout } from '../redux/actions/studentAction';
import { adminLogout } from '../redux/actions/adminAction';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.loginUser();
  }

  loginUser = () => {
    //TODO Store user/dmin in reducer
    fetch('http://localhost:3000/api/v1/admin/me', {
      method: 'GET',
      headers: {
        authorization: localStorage.token,
        'content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res) {
          this.setState({
            user: res,
          });
        } else {
          fetch('http://localhost:3000/api/v1/student/me', {
            method: 'GET',
            headers: {
              authorization: localStorage.token,
              'content-Type': 'application/json',
            },
          })
            .then(res => res.json())
            .then(res => {
              this.setState({
                user: res,
              });
              // console.log(res, 'inside loginUser');
            });
        }
      });
  };

  cb = () => {
    this.setState({ user: null }, () => {
      this.props.history.push('/');
    });
  };

  handleLogout = e => {
    e.preventDefault();
    this.props.studentLogout(this.cb);
    this.props.adminLogout(this.cb);
  };

  protectedAdminRoutes = () => {
    return (
      <>
        <Header handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path="/admin/feed" component={AdminFeed} />
          <Route exact path="/admin/content/list" component={ContentList} />
          <Route exact path="/admin/content/new" component={NewContentForm} />
          <Route exact path="/admin/student/list" component={StudentList} />
          <Route exact path="/admin/content/:contentid" component={Content} />
          <Route path="/admin/editcontent" component={EditContent} />
          <Route
            exact
            path="/admin/pending-approvals"
            component={PendingApprovals}
          />
          <Route component={Page404} />
        </Switch>
      </>
    );
  };

  protectedStudentRoutes = () => {
    // console.log('protected std');
    return (
      <>
        <Header handleLogout={this.handleLogout} />
        <Switch>
          <Route
            exact
            path="/submission/:deliveryid"
            component={ContentSubmission}
          />
          <Route
            exact
            path="/await-approval"
            component={RegisterVerification}
          />
          <Route path="/dashboard/:username" component={StudentDashboard} />
          <Route component={Page404} />
        </Switch>
      </>
    );
  };

  nonProtectedRoutes = () => {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterUser} />
          <Route exact path="/login" component={LoginUser} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/register/onboarding" component={Onboarding} />
          <Route
            exact
            path="/await-approval"
            component={RegisterVerification}
          />
          <Route component={Page404} />
        </Switch>
      </>
    );
  };

  render() {
    if (!this.state.user && localStorage.token) this.loginUser();

    // console.log(this.state.user,localStorage.token)
    return (
      <>
        {this.state.user
          ? this.state.user.isAdmin == true
            ? this.protectedAdminRoutes()
            : this.protectedStudentRoutes()
          : this.nonProtectedRoutes()}
      </>
    );
  }
}
const mapStateToProps = store => store;

export default connect(mapStateToProps, {
  studentLogin,
  studentLogout,
  adminLogout,
})(withRouter(App));
