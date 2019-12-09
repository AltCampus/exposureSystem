import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store/store';
import { userRegister } from '../actions/userAction';
import { connect } from 'react-redux';
import Header from '../header/Header';

class RegisterUser extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userCredentials = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    if (
      !userCredentials.username ||
      !userCredentials.email ||
      !userCredentials.password
    ) {
      alert('check user details!');
    } else {
      this.props.userRegister(userCredentials);
      store.subscribe(() => {
        this.props.history.push('/login');
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
              placeholder="Enter username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <br></br>

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br></br>

            <input
              className="input"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <br></br>

            {/* <NavLink to="/register/onboarding" className="button">Next</NavLink> */}
            <button className="button" onClick={this.onSubmit}>
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
