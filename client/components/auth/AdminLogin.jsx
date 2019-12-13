import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store/store';
import { adminLogin } from '../../redux/actions/adminAction';
import validator from 'validator';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      admin: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cb = () => {
    this.props.history.push('/admin/feed');
  };

  handleAdminLogin = e => {
    e.preventDefault();
    const adminCredentials = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(adminCredentials, 'adminCredentials');

    if (!adminCredentials.email || !adminCredentials.password) {
      return res.json('Email and password are must.');
    }
    if (!validator.isEmail(adminCredentials.email)) {
      return res.json('Invalid email.');
    }
    if (adminCredentials.password.length < 6) {
      return res.json('Password must be atleast 6 characters.');
    }

    adminLogin(adminCredentials, this.cb);
    // .then(this.props.history.push('http://localhost:3000/admin/feed'));
  };

  render() {
    return (
      <div className="wrapper text-center">
        <p>{this.state.admin}</p>
        <h1 className="heading">Admin-Login</h1>
        <div>
          <input
            className="input"
            type="text"
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

          <button
            className="button"
            type="submit"
            onClick={this.handleAdminLogin}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
