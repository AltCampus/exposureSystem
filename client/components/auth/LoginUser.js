import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store/store";
import { userLoggedIn } from "../actions/userAction";
class LoginUser extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      user: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postLoginData();
  };

  postLoginData = e => {
    var studentData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.userLoggedIn(studentData);
    store.subscribe(() => {
      store.getState().userReducer.userData.token
        ? alert("user login sucessfully")
        : this.setState({ ...this.state, user: "Invalid User!" });
    });
  };

  render() {
    return (
      <div>
        <div className="wrapper card text-center">
          <p>{this.state.user}</p>
          <h1 className="heading">Login</h1>
          <div>
            <div>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <br />

              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleChange}
                value={this.state.password}
              />

              <br />

              <button className="button" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { userLoggedIn })(LoginUser);
