import React,{Component} from 'react';
import { Switch , Route } from 'react-router-dom';
import AdminFeed from '../adminDashboard/AdminFeed';
import ContentList from '../content/ContentList';
import StudentList from '../students/StudentList';
import UpdateContentModal from '../content/UpdateContentModal';
import PendingApprovals from '../adminDashboard/PendingApprovals';

class AdminProtectedRoutes extends Component {
  render () {
    return (
              <Switch>
                <Route
                  exact
                  path='/admin/feed'
                  render={() => (
                    <AdminFeed
                      state={this.state}
                      handleLogout={this.handleLogout}
                      isAuthed={true}
                    />
                  )}
                />
                <Route exact path='/admin/contents' component={ContentList} />
                <Route
                  exact
                  path='/admin/students'
                  render={() => (
                    <StudentList
                      state={this.state}
                      handleLogout={this.handleLogout}
                      isAuthed={true}
                    />
                  )}
                />
                <Route path='/admin/update-content' component={UpdateContentModal} />
                <Route
                  exact
                  path='/admin/pending-approvals'
                  render={() => (
                    <PendingApprovals
                      state={this.state}
                      handleLogout={this.handleLogout}
                      isAuthed={true}
                    />
                  )}
                />
                <Route
                  render={() => (
                    <AdminFeed
                      state={this.state}
                      handleLogout={this.handleLogout}
                      isAuthed={true}
                    />
                  )}
                />
              </Switch>
          );
    }
}

export default AdminProtectedRoutes;