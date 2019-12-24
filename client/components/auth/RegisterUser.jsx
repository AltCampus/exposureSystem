/* eslint-disable no-alert */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import validator from 'validator';
import registerStudent from '../../redux/actions/registerAction';

import swal from 'sweetalert';
import { Button, Checkbox } from 'antd';

class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      isInCampus: false,
      isActive: false,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cb = () => {
    this.props.history.push('/await-approval');
  };

  onCheckChange1 = e => {
    this.setState({
      isInCampus: e.target.checked,
    });
  };

  onCheckChange2 = e => {
    this.setState({
      isActive: e.target.checked,
    });
  };
  handleSubmit = (event, cb) => {
    event.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    const isInCampus = this.state.isInCampus;
    const isActive = this.state.isActive;
    const studentData = {
      username,
      email,
      password,
      isInCampus,
      isActive,
    };
    const { dispatch } = this.props;
    if (!username || !email || !password) {
      return swal({
        title: 'Sorry',
        text: 'Username, Email and Password are must',
        icon: 'error',
        button: 'Go Back',
        width: '10px',
      });
    }

    if (!validator.isEmail(email)) {
      return swal({
        title: 'Sorry',
        text: 'Email is invalid',
        icon: 'error',
        button: 'Go Back',
      });
    }

    if (password.length < 6) {
      return swal({
        title: 'Sorry',
        text: 'Password should be atleast 6 characters long',
        icon: 'error',
        button: 'Go Back',
      });
    }

    // dispatch(
    //   {
    //     type: 'REGISTER_PAGE_DATA',
    //     data: this.state,
    //   },
    //   // this.cb(),
    // );
    registerStudent(studentData, this.cb);
  };

  render() {
    const { username, email, password, isInCampus, isActive } = this.state;
    console.log(this.state);
    return (
      <>
        <div className='container card flex-center is-grouped'>
          <div className='notification text-center'>
            <h1 className='heading'>Register</h1>
            <form>
              <div className='control'>
                <input
                  className='input'
                  type='text'
                  name='username'
                  placeholder='Enter username'
                  onChange={this.handleChange}
                  value={username}
                />
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
                <br></br>

                <label className='label'>
                  Are you currently in the campus?{' '}
                </label>
                <br></br>
                <Checkbox
                  name='isInCampus'
                  onChange={this.onCheckChange1}
                  defaultChecked={false}
                >
                  In Campus
                </Checkbox>
                <br></br>
                <label className='label'>
                  Do you consent to receiving emails from us?
                </label>
                <br></br>
                <Checkbox
                  name='isActive'
                  onChange={this.onCheckChange2}
                  defaultChecked={false}
                >
                  In Campus
                </Checkbox>

                <br></br>
                {/* <NavLink to='/register/onboarding'> */}
                <Button
                  className='button'
                  type='primary'
                  size='large'
                  onClick={this.handleSubmit}
                >
                  Register
                </Button>
                {/* </NavLink> */}
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapstateToProps = state => state;

export default connect(mapstateToProps, { registerStudent })(RegisterUser);
