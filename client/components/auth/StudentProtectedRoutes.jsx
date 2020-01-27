import React, {Component} from 'react';

class StudentProtectedRoutes extends Component{
    render () {
        return (
            <>
              <Switch>
                <Route
                  exact
                  path='/submission/:deliveryid'
                  render={() => (
                    <ContentSubmission state={this.state} isAuthed={true} />
                  )}
                />
                <Route
                  exact
                  path='/await-approval'
                  component={RegisterVerification}
                />
                <Route
                  exact
                  path='/feed'
                  render={() => (
                    <StudentDashboard
                      state={this.state}
                      handleLogout={this.handleLogout}
                      isAuthed={true}
                    />
                  )}
                />
                <Route
                  exact
                  path='/profile'
                  render={() => (
                    <StudentProfile
                      state={this.state}
                      handleLogout={this.handleLogout}
                      isAuthed={true}
                    />
                  )}
                />
                <Route
                  render={() => (
                    <StudentDashboard
                      state={this.state}
                      handleLogout={this.handleLogout}
                      isAuthed={true}
                    />
                  )}
                />
                {/* <Route component={Page404} /> */}
              </Switch>
            </>
          );
    }
}

export default StudentProtectedRoutes;