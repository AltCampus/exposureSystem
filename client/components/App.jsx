import React from "react";
import "../assets/stylesheets/style.css";
import Header from "./Header";
import Home from "./Home";
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AdminLogin from "./Auth/AdminLogin";


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
          </Switch>
      </Router>
      </>
    );
  }
}

export default App;
