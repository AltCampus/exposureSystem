import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import store from "../store/store";
import { userRegister } from "../actions/userAction";
import { connect } from "react-redux";
import Header from "../header/Header";

class RegisterUser extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userCredentials = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    if (
      !userCredentials.username ||
      !userCredentials.email ||
      !userCredentials.password ||
      userCredentials.password.length < 6
    ) {
      alert("Check userCredentials!");
    } else {
      this.props.userRegister(userCredentials);
      store.subscribe(() => {
        console.log(store.getState(), "in user action");
        store.getState().userReducer.userRegisterData.User.email
          ? this.props.history.push("/register/onboarding")
          : alert(store.getState().userReducer.userRegisterData.User);
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <div className="wrapper card text-center">
          <h1 className="heading">Register</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={this.handleChange}
              value={this.state.username}
              required
            />
            <br></br>

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
            <br></br>

            <input
              className="input"
              type="password"
              name="password"
              placeholder="Enter Password Min 6! "
              onChange={this.handleChange}
              value={this.state.password}
              required
            />
            <br></br>

            {/* <NavLink to="/register/onboarding" className="button">
              Next
            </NavLink> */}
            <button className="button" type="submit">
              Next
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapstateToProps = state => {
  return state;
};

export default connect(mapstateToProps, { userRegister })(RegisterUser);
