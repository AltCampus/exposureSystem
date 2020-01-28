import React, {Component} from 'react';
import { Switch , Route } from 'react-router-dom';
import ContentSubmission from '../content/ContentSubmission';
import RegisterVerification from '../registerVerfication/RegisterVerification';
import StudentDashboard from '../students/studentDashboard/StudentDashboard';
import StudentProfile from '../students/StudentProfile';

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