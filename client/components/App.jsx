/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../assets/stylesheets/style.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import RegisterUser from './auth/RegisterUser';
import LoginUser from './auth/LoginUser';
import AdminLogin from './auth/AdminLogin';
import Page404 from './Page404';
import AdminDashboard from './adminDashboard/AdminDashboard';
import ContentList from './content/ContentList';
import NewContentForm from './content/NewContentForm';
import StudentList from './students/StudentList';
import PendingApprovals from './adminDashboard/PendingApprovals';
import ContentFeedback from './content/ContentFeedback';
import Content from './content/Content';
import EditContent from './content/EditContent';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={RegisterUser} />
            <Route path="/login" component={LoginUser} />
            <Route path="/admin/login" component={AdminLogin} />
            <Route exact path="/admin/dashboard" component={AdminDashboard} />
            <Route path="/content/list" component={ContentList} />
            <Route path="/content/new" component={NewContentForm} />
            <Route path="/admin/students/list" component={StudentList} />
            //TODO:students/all?
            <Route path="/pendingapprovals" component={PendingApprovals} />
            <Route path="/content/:contentid" component={Content} />
            {/* <Route path="/:deliveryid" component={ContentFeedback} /> */}
            <Route path="/feedback/:deliveryid" component={ContentFeedback} />
            <Route path="/editcontent" component={EditContent} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
