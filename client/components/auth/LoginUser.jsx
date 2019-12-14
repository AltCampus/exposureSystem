import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import Header from '../header/Header';
import studentLogin from '../../redux/actions/studentAction';

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
    const isVerified = this.props.studentReducer.studentData.student.isVerified;
    if (isVerified) {
      const username = this.props.studentReducer.studentData.student.username;
      this.props.history.push(`dashboard/${username}`);
    } else {
      this.props.history.push('/await-approval');
    }
  };

  // cb = () => {
  //   const username = this.props.studentReducer.studentData.student.username;
  //   this.props.history.push(`dashboard/${username}`);
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      return alert('Email and password are must.');
    }
    if (!validator.isEmail(email)) {
      return alert('Invalid email.');
    }
    if (password.length < 6) {
      return alert('Password must be atleast 6 characters');
    }
    this.props.studentLogin(this.state, this.cb);
  };

  render() {
    // console.log(this.props);
    const { email, password } = this.state;
    return (
      <div>
        <Header />
        <div className="wrapper card text-center">
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
              <button
                className="button"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { studentLogin })(LoginStudent);
