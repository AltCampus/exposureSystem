import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store/store';
import { userLoggedIn } from '../actions/userAction';
import Header from "../header/Header"

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.postLoginData();
  };

  postLoginData = e => {
    var userCredentials = {
      email: this.state.email,
      password: this.state.password,
    }; payload : {
      isLoggedin : false
    }
    this.props.userLoggedIn(userCredentials);
    store.subscribe(() => {
      store.getState().userReducer.userLoginData.Token
        ? alert('user login sucessfull')
        : this.setState({ ...this.state, user: 'Invalid User!' });
    });
    this.props.history.push("/");
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <Header />
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
