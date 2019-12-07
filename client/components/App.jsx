/* eslint-disable quotes */
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
import Students from './students/Students';
import PendingApprovals from './adminDashboard/PendingApprovals';
import ContentFeedback from './content/ContentFeedback';
import Content from './content/Content';
import Onboarding from './auth/Onboarding';
import StudentDashboard from './students/studentDashboard/StudentDashboard';
import EditContent from './content/EditContent';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterUser} />
          <Route path="/login" component={LoginUser} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/content/list" component={ContentList} />
          <Route exact path="/content/new" component={NewContentForm} />
          <Route exact path="/admin/students" component={Students} />
          <Route
            exact
            path="/admin/pendingapprovals"
            component={PendingApprovals}
          />
          <Route exact path="/content/:contentid" component={Content} />
          <Route path="/feedback/:deliveryid" component={ContentFeedback} />
          <Route exact path="/register/onboarding" component={Onboarding} />
          <Route exact path="/username" component={StudentDashboard} />
          <Route path="/editcontent" component={EditContent} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
