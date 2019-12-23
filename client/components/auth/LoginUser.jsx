import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { studentLogin } from '../../redux/actions/studentAction';
import swal from 'sweetalert';
import { Button } from 'antd';

class LoginStudent extends Component {
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
  cb = status => {
    if (status == true) {
      const username = this.props.studentReducer.studentData.student.username;
      swal({
        title: 'You are successfully logged in',
        icon: 'success',
      });
      this.props.history.push('/feed');
    } else if (status == false) {
      this.props.history.push('/await-approval');
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      return swal({
        title: 'Sorry',
        text: 'Email and Password are must',
        icon: 'error',
        button: 'Go Back',
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

    this.props.studentLogin(this.state, this.cb);
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <div className='container card flex-center is-grouped'>
          <div className='notification text-center'>
            <h1 className='heading'>Login</h1>
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
                <div>
                  <Button
                    className='button'
                    type='primary'
                    // size="large"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { studentLogin })(LoginStudent);
