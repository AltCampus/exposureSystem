import React, { Component } from 'react';


class NonProtectedRoutes extends Component {
    render () {
        return (   
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={RegisterUser} />
                <Route exact path='/login' component={LoginUser} />
                <Route exact path='/admin/login' component={AdminLogin} />
                <Route exact path='/register/onboarding' component={Onboarding} />
                <Route
                  exact
                  path='/await-approval'
                  component={RegisterVerification}
                />
      
                <Route component={Page404} />
              </Switch>
          );
    }
}