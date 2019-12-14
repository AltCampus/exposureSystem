import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store/store';
import { adminLogin } from '../../redux/actions/admin.action';
import validator from 'validator';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAdminLogin (e) {
    e.preventDefault();
    const adminCredentials = { email , password } = this.state;

    if(!email || !password) {
      return res.json('Email and password are must.');
    }
    if(!validator.isEmail(email)) {
      return res.json('Invalid email.');
    }
    if(password.length < 6) {
      return res.json('Password must be atleast 6 characters.')
    }

    adminLogin(adminCredentials)
    .then( this.props.history.push('http://localhost:3000/admin/feed'));
  
  };

  render() {
    const { email , password } = this.state;
    return (
      <div className="wrapper text-center">
        <h1 className="heading">Admin-Login</h1>
        <div>
          <input
            className="input"
            type="text"
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

          <button className="button" type="submit" onClick={this.handleAdminLogin}>
            Submit
          </button>
        </div>
      </div>
    );
  }

mapStateToProps (store) {
  return store;
};

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
