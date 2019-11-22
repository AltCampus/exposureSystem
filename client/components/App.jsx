import React from "react";
import "../assets/stylesheets/style.css";
import Header from "./Header";
import Home from "./Home";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./Auth/AdminLogin";
import Page404 from "./Page404";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AllContents from "./AdminDashboard/AllContent";
import AddContent from "./AdminDashboard/AddContent";
import Students from "./AdminDashboard/Students";
import PendingApprovals from "./AdminDashboard/PendingApprovals";

class App extends React.Component {
  render() {
    return (
      <>
      <Router>
      <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/admin" component={AdminLogin} />
            <Route path="/admindashboard" component={AdminDashboard} />
            <Route path="/allcontent" component={AllContents} />
            <Route path="/addcontent" component={AddContent} />
            <Route path="/students" component={Students} />
            <Route path="/pendingapprovals" component={PendingApprovals} />
            <Route component={Page404} />
          </Switch>
      </Router>
      </>
    );
  }
}

export default App;
