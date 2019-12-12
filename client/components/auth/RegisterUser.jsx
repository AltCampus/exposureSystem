/* eslint-disable no-alert */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator';
import Header from '../header/Header';

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = this.state;
    const { dispatch } = this.props;
    if (!username || !email || !password) {
      return alert('Email , password and username are must.');
    }
    if (!validator.isEmail(email)) {
      return alert('Invalid Email.');
    }
    if (password.length < 6) {
      return alert('Password should be atleast 6 character.');
    }
    return dispatch({
      type: 'REGISTER_PAGE_DATA',
      data: this.state,
    });
  }

  render() {
    const { username, email, password } = this.state;
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
              value={username}
            />
            <br />

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={email}
            />
            <br />

            <input
              className="input"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={this.handleChange}
              value={password}
            />
            <br />
            <NavLink to="/register/onboarding" onSubmit={this.handleSubmit} className="button">Next</NavLink>
          </form>
        </div>
      </>
    );
  }
}

const mapstateToProps = (state) => state;

export default connect(mapstateToProps)(RegisterUser);
