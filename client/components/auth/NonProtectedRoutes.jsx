import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import RegisterUser from './RegisterUser';
import LoginUser from './LoginUser';
import AdminLogin from './AdminLogin';
import RegisterVerification from '../registerVerfication/RegisterVerification';
import Page404 from '../Page404';

class NonProtectedRoutes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/register' component={RegisterUser} />
        <Route exact path='/login' component={LoginUser} />
        <Route exact path='/admin/login' component={AdminLogin} />
        <Route exact path='/await-approval' component={RegisterVerification} />

        <Route component={Home} />
      </Switch>
    );
  }
}

export default NonProtectedRoutes;
