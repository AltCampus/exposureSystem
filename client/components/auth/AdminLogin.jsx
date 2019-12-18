import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../redux/store/store';
import { adminLogin } from '../../redux/actions/adminAction';
import validator from 'validator';
import { Button } from 'antd';

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    // console.log(adminCredentials, 'adminCredentials');

    if (!adminCredentials.email || !adminCredentials.password) {
      return res.json('Email and password are must.');
    }
    if (!validator.isEmail(adminCredentials.email)) {
      return res.json('Invalid email.');
    }
    if (adminCredentials.password.length < 6) {
      return res.json('Password must be atleast 6 characters.');
    }

    this.props.dispatch(adminLogin(adminCredentials, this.cb));
  };

  render() {
    // console.log(this.props, adminLogin);
    const { email, password } = this.state;
    return (
      <section className="columns">
        <div className="container card flex-center is-grouped">
          <div className="notification text-center">
            <h1 className="heading">Admin Login</h1>
            <form>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  value={email}
                />
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={this.handleChange}
                  value={password}
                />
                <br></br>
                <div>
                  <Button
                    className="button"
                    type="primary"
                    // size="large"
                    onClick={this.handleAdminLogin}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps)(AdminLogin);
