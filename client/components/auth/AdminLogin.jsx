import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adminLogin } from '../../redux/actions/adminAction';
import validator from 'validator';
import { Button } from 'antd';
import swal from 'sweetalert';

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

    if (!adminCredentials.email || !adminCredentials.password) {
      return swal({
        title: 'Sorry',
        text: 'Email and Password are must',
        icon: 'error',
        button: 'Go Back',
      });
    }

    if (!validator.isEmail(adminCredentials.email)) {
      return swal({
        title: 'Sorry',
        text: 'Email is invalid',
        icon: 'error',
        button: 'Go Back',
      });
    }

    if (adminCredentials.password.length < 6) {
      return swal({
        title: 'Sorry',
        text: 'Password should be at least 6 characters long',
        icon: 'error',
        button: 'Go Back',
      });
    }

    this.props.dispatch(adminLogin(adminCredentials, this.cb));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='container card flex-center is-grouped'>
        <div className='notification text-center'>
          <h1 className='heading'>Admin Login</h1>
          <form>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='email'
                placeholder='Enter email'
                onChange={this.handleChange}
                value={email}
              />
              <input
                className='input'
                type='password'
                name='password'
                placeholder='Enter password'
                onChange={this.handleChange}
                value={password}
              />
              <br></br>
              <Button
                className='button'
                type='primary'
                onClick={this.handleAdminLogin}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps, { adminLogin })(AdminLogin);
