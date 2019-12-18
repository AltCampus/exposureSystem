/* eslint-disable no-alert */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import validator from "validator";
import Header from "../header/Header";
import swal from "sweetalert";

class RegisterUser extends Component {
  constructor(props) {
    super(props);
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

  cb = () => {
    this.props.history.push("/register/onboarding");
  };

  handleSubmit = (event, cb) => {
    event.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    console.log(this.state);
    const { dispatch } = this.props;
    if (!username || !email || !password) {
      return swal({
        title: "Sorry",
        text: "Username, Email and Password are must",
        icon: "error",
        button: "Go Back"
      });
    }

    if (!validator.isEmail(email)) {
      return swal({
        title: "Sorry",
        text: "Email is invalid",
        icon: "error",
        button: "Go Back"
      });
    }

    if (password.length < 6) {
      return swal({
        title: "Sorry",
        text: "Password should be atleast 6 characters long",
        icon: "error",
        button: "Go Back"
      });
    }

    swal({
      title: "Good job!",
      text: "Head For Onboarding",
      icon: "success",
      button: "Go ahead"
    });

    return dispatch(
      {
        type: "REGISTER_PAGE_DATA",
        data: this.state
      },
      this.cb()
    );
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <>
        <div className="container wrapper">
          <div className="notification">
            <h1 className="heading">Register</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <div>
                  <input
                    className="input"
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    onChange={this.handleChange}
                    value={username}
                  />
                </div>
              </div>
              <div className="field">
                <div>
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                    value={email}
                  />
                </div>
              </div>
              <div className="field">
                <div>
                  <input
                    className="input"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={this.handleChange}
                    value={password}
                  />
                </div>
              </div>
              <button
                to="/register/onboarding"
                onSubmit={this.handleSubmit}
                className="button is-primary is-normal is-right"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapstateToProps = state => state;

export default connect(mapstateToProps)(RegisterUser);
