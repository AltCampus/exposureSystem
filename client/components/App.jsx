import React from "react";
import "../assets/stylesheets/style.scss";
import Header from "./Header";
import Home from "./Home";
import RegisterUser from "./auth/RegisterUser";
import LoginUser from "./auth/LoginUser";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./auth/AdminLogin";
import Page404 from "./Page404";
import AdminDashboard from "./adminDashboard/AdminDashboard";
import AllContents from "./content/AllContent";
import AddContent from "./content/AddContent";
import Students from "./students/Students";
import PendingApprovals from "./adminDashboard/PendingApprovals";
import ContentSubmission from "./content/ContentSubmission";
import Content from "./content/Content";

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
            <Route path="/admin" component={AdminLogin} />
            <Route exact path="/admindashboard" component={AdminDashboard} />
            <Route path="/allcontent" component={AllContents} />
            <Route path="/addcontent" component={AddContent} />
            <Route path="/students" component={Students} />
            <Route path="/pendingapprovals" component={PendingApprovals} />
            <Route path="/content" component={Content} />
            <Route path="/content-submission" component={ContentSubmission} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
