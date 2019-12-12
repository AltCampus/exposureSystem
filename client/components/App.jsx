/* eslint-disable quotes */
import React from 'react';
import '../assets/stylesheets/style.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
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
// import WaitForApproval from './auth/WaitForApproval';
import RegisterVerification from './registerVerfication/RegisterVerification';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterUser} />
          <Route
            exact
            path="/register/verification"
            component={RegisterVerification}
          />
          <Route path="/login" component={LoginUser} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/feed" component={AdminFeed} />
          <Route exact path="/admin/content/list" component={ContentList} />
          <Route exact path="/admin/content/new" component={NewContentForm} />
          <Route exact path="/admin/student/list" component={StudentList} />
          <Route
            exact
            path="/admin/pending-approvals"
            component={PendingApprovals}
          />
          <Route exact path="/admin/content/:contentid" component={Content} />
          <Route path="/submission/:deliveryid" component={ContentSubmission} />
          <Route exact path="/register/onboarding" component={Onboarding} />
          <Route exact path="/:username" component={StudentDashboard} />
          <Route path="/admin/editcontent" component={EditContent} />
          {/* <Route path="/wait-for-approval" component={WaitForApproval} /> */}
          <Route component={Page404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
